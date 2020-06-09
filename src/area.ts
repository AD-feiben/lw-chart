
import { AreaOptions, IPos, IData, LWChartTextStyle, IObj } from './utils/interfaces';
import { ICurvePoint, getCurveList, now, curveWithTime } from './utils';
import Axis from './axis';

interface IAreaPos extends IPos {
  xRange: number[];
  yRange: number[];
}

interface ICurveListItem {
  segmentAnimateDuration: number;
  segmentAnimatePercent: number;
  segmentAnimateStartTime: number;
  animationList: ICurvePoint[],
  list: ICurvePoint[],
}

export default class Area extends Axis<AreaOptions> {
  constructor (el: HTMLElement, options?: AreaOptions) {
    super(el, options);
    this.init(options);
  }

  protected areaLineWidth: number = 0;
  protected areaDotRadius: number = 0;
  protected areaDotLineWidth: number = 0;
  protected areaActiveDotRadius: number = 0;
  protected pointList: IAreaPos[][] = [];
  protected curveList: ICurveListItem[] = [];
  protected activeData = {} as IData;
  protected isFinishedAnimation: boolean = false;
  protected animationHandle: number = 0;
  protected handleMoveTimer: number = 0;

  protected drawResult () {
    if (!this.ctx) return;
    const { showResult, resultFormat, resultStyle, drawResult } = this.options;
    if (showResult === false) return;
    if (typeof drawResult === 'function') {
      this.ctx.save();
      drawResult.call(this, this.ctx, this.activeData, {
        dpi: this.dpi,
        mousePosition: this.mousePosition,
        canvasRect: {
          startX: 0,
          startY: 0,
          endX: this.canvasWidth,
          endY: this.canvasHeight,
          width: this.canvasWidth,
          height: this.canvasHeight
        },
        chartRect: {
          startX: this.chartStartX,
          startY: this.chartStartY,
          endX: this.chartEndX,
          endY: this.chartEndY,
          width: this.chartWidth,
          height: this.chartHeight
        }
      });
      this.ctx.restore();
      return;
    }
    let resultStr = typeof resultFormat === 'function' ? resultFormat(this.activeData) : `${ this.activeData.xAxisVal } ${this.activeData.yAxisVal}`;
    const style: LWChartTextStyle = Object.assign({}, resultStyle);
    const dpiOpts: Array<keyof LWChartTextStyle> = ['x', 'y', 'size', 'maxWidth'];
    dpiOpts.map(key => {
      if (typeof style[key] === 'number') {
        let originVal: number = style[key] as number;
        (style as IObj<number>)[key] = originVal * this.dpi;
      }
    });
    this.ctx.save();
    this.ctx.textBaseline = 'top';
    this.ctx.textAlign = 'end';
    this.drawText(resultStr, style);
    this.ctx.restore();
  }

  protected drawDot () {
    if (!this.ctx || this.pointList.length <= 0) return;
    this.activeData = {} as IData;
    const { x, y } = this.mousePosition;
    const areaDotFillColor = this.options.areaDotFillColor || ['#fff'];
    const areaDotStorkColor = this.options.areaDotStorkColor || ['rgba(233, 28, 65, 1)'];
    const areaActiveDotFillColor = this.options.areaActiveDotFillColor || ['rgba(233, 28, 65, 0.3)'];
    for (let i = 0; i < this.pointList.length; i++) {
      this.ctx.save();
      this.ctx.fillStyle = areaDotFillColor[i] || areaDotFillColor[areaDotFillColor.length - 1];
      this.ctx.strokeStyle = areaDotStorkColor[i] || areaDotStorkColor[areaDotStorkColor.length - 1] ;
      this.ctx.lineWidth = this.areaDotLineWidth;
      const pointListItem = this.pointList[i];
      for (let j = 0; j < pointListItem.length; j++) {
        const item = pointListItem[j];
        drawActiveDot: {
          // 存在选中点，不再绘制新的选中点
          if (Object.keys(this.activeData).length > 0) break drawActiveDot;
          if (y >= this.chartStartY && y <= this.chartEndY && x >= item.xRange[0] && x <= item.xRange[1]) {
            // 多组线条鼠标位置需要在 Y 轴范围内
            if (this.yAxisData.length > 1) {
              if (y < item.yRange[0] || y > item.yRange[1]) break drawActiveDot;
            }
            this.activeData = {
              group: i,
              xAxisVal: this.xAxisData[j],
              yAxisVal: this.yAxisData[i][j],
              x: item.x,
              y: item.y
            };

            this.drawResult();
            if (this.options.areaShowDot === false) break drawActiveDot;
            // 绘制选中的圆点
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.fillStyle = areaActiveDotFillColor[i] || areaActiveDotFillColor[length - 1];
            this.ctx.arc(item.x, item.y, this.areaActiveDotRadius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.restore();
          }
        }
        if (this.options.areaShowDot === false) continue;
        // 绘制圆点
        this.ctx.beginPath();
        this.ctx.arc(item.x, item.y, this.areaDotRadius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
      }
      this.ctx.beginPath();
      this.ctx.restore();
    }
  }

  protected onMove () {
    this.handleMoveTimer && window.clearTimeout(this.handleMoveTimer);
    this.handleMoveTimer = window.setTimeout(() => {
      // 鼠标移动时重绘canvas
      this.drawCanvas();
    }, 10);
  }

  /**
   *
   * 触发子类钩子函数，合并参数，事件监听，更新数据
   *
   * It needs to be called in the constructor of the implementation class
   * 需要在实现类的构造函数中调用
   */
  protected init (options?: AreaOptions) {
    this.mergeOptions(options);
    this.setParamsWithDpi();
    this.initSize();
    this.initData();
  }

  /**
   * @overwrite
   * 重写合并参数方法，合并该类的特有的参数
   */
  protected mergeOptions(options?: AreaOptions) {
    // 合并该类特有参数
    const defaultOpt: AreaOptions = {
      areaLineColor: ['rgba(233, 28, 65, 1)'],
      areaLineWidth: 2,
      areaStartColor: ['rgba(233, 28, 65, 1)'],
      areaEndColor: ['rgba(246, 60, 118, 0)'],
      areaShowDot: true,
      areaDotRadius: 2.5,
      areaDotLineWidth: 2,
      areaDotFillColor: ['#fff'],
      areaDotStorkColor: ['rgba(233, 28, 65, 1)'],
      areaActiveDotRadius: 8,
      areaActiveDotFillColor: ['rgba(233, 28, 65, 0.3)'],
      showResult: true,
      resultStyle: undefined,
      showAnimation: true,
      animationDuration: 1000
    };
    this.options = Object.assign({}, defaultOpt, this.options);
    const defaultResultStyle: LWChartTextStyle = {
      size: 12,
      font: 'PingFangSC-Semibold PingFang SC',
      weight: 'normal',
      x: (this.el?.offsetWidth || 30) - 30,
      y: this.options.titleStyle?.y || 20,
      color: '#666'
    };
    const resultStyle = Object.assign({}, defaultResultStyle, this.options.resultStyle);
    this.options.resultStyle = resultStyle;
    // 调用父类合并参数方法，合并公共参数
    super.mergeOptions(options);
  }
  /** 将尺寸位置相关参数乘以 dpi，避免高清屏下产生模糊 */
  protected setParamsWithDpi(): void {
    let { areaLineWidth, areaDotRadius, areaDotLineWidth, areaActiveDotRadius } = this.options;
    this.areaLineWidth = this.formatNumParam(areaLineWidth);
    this.areaDotRadius = this.formatNumParam(areaDotRadius);
    this.areaDotLineWidth = this.formatNumParam(areaDotLineWidth);
    this.areaActiveDotRadius = this.formatNumParam(areaActiveDotRadius);
  }
  protected afterInitData(): void {
    const ditDiameter = this.areaDotRadius * 2;
    const halfXRange = this.yAxisData.length === 1 ? (this.getPosX(1) - this.chartStartX) / 3 : ditDiameter;
    this.pointList = this.yAxisData.map(yAxisDataItem => {
      return yAxisDataItem.map((val, index) => {
        const posX = this.getPosX(index);
        const posY = this.getPosY(val);
        return {
          x: posX,
          y: posY,
          xRange: [posX - halfXRange, posX + halfXRange],
          yRange: [posY - ditDiameter, posY + ditDiameter]
        };
      });
    });
    const animationDuration = this.options.animationDuration || 1000;
    this.curveList = this.pointList.map(item => {
      const curveList = getCurveList(item);
      const curveListFirstItem = curveList[0];
      let animationList = curveList;
      if (this.options.showAnimation) {
        animationList = curveListFirstItem ? [curveListFirstItem] : [];
      }
      return {
        segmentAnimateDuration: animationDuration / Math.max(item.length - 1, 1),
        segmentAnimatePercent: 0,
        segmentAnimateStartTime: now(),
        animationList,
        list: curveList
      };
    });
    this.drawCanvas();
  }

  protected drawCanvas () {
    let isFinishedAnimation: boolean = true;
    this.curveList.map(item => {
      const animationLen = item.animationList.length;
      const animationDuration = now() - item.segmentAnimateStartTime;
      const listLen = item.list.length;
      if (animationLen < listLen) {
        isFinishedAnimation = false;
      }
      item.segmentAnimatePercent = Math.min(1, animationDuration / item.segmentAnimateDuration) * 100;
      if (animationLen < listLen && item.segmentAnimatePercent >= 100) {
        item.animationList.push(item.list[animationLen]);
        item.segmentAnimatePercent = 0;
        item.segmentAnimateStartTime = now();
      }
    });
    this.isFinishedAnimation = isFinishedAnimation;
    this.drawCanvasBg();
    this.drawTitle();
    this.drawChartBg();
    this.drawAxis();
    this.drawData();
    if (!isFinishedAnimation) {
      this.animationHandle = requestAnimationFrame(this.drawCanvas.bind(this));
    }
  }

  protected drawData(): void {
    if (this.curveList.length <= 0) return;
    this.curveList.map((item, index) => {
      if (!this.ctx) return;
      if (item.animationList.length <= 0) return;

      const curveList = item.animationList;
      const percent = item.segmentAnimatePercent;
      const firstPoint = curveList[0];
      const len = curveList.length;
      const lastPoint = curveList[len - 1];
      let lastX = lastPoint.end.x;
      let lastY = lastPoint.end.y;

      const areaLineColor = this.options.areaLineColor || ['rgba(233, 28, 65, 1)'];
      const areaStartColor = this.options.areaStartColor || ['rgba(233, 28, 65, 1)'];
      const areaEndColor = this.options.areaEndColor || ['rgba(246, 60, 118, 0)'];
      this.ctx.save();
      this.ctx.strokeStyle = areaLineColor[index] || areaLineColor[areaLineColor.length - 1];
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = this.areaLineWidth;
      this.ctx.beginPath();

      this.ctx.moveTo(firstPoint.start.x, firstPoint.start.y);

      for (let i = 0; i < len - 1; i++) {
        const item = curveList[i];
        this.ctx.bezierCurveTo(item.control1.x, item.control1.y, item.control2.x, item.control2.y, item.end.x, item.end.y);
      }

      if (this.isFinishedAnimation) {
        // 动画绘制完成，最后一段曲线使用 bezierCurveTo 方法绘制
        this.ctx.bezierCurveTo(lastPoint.control1.x, lastPoint.control1.y, lastPoint.control2.x, lastPoint.control2.y, lastPoint.end.x, lastPoint.end.y);
        lastX = lastPoint.end.x;
        lastY = lastPoint.end.y;
      } else {
        // 动画执行中，使用贝塞尔函数绘制最后一段曲线
        for (let t = 0; t <= percent / 100; t += 0.1) {
          lastX = curveWithTime(lastPoint.start.x, lastPoint.control1.x, lastPoint.control2.x, lastPoint.end.x, t);
          lastY = curveWithTime(lastPoint.start.y, lastPoint.control1.y, lastPoint.control2.y, lastPoint.end.y, t);
          this.ctx.lineTo(lastX, lastY);
        }
      }
      /** 绘制曲线 */
      this.ctx.stroke();

      /** 绘制区域 */
      const endY = this.chartEndY - this.chartPadding[2]; // padding-bottom;
      const linearGradient = this.ctx.createLinearGradient(0, 0, 0, endY);
      linearGradient.addColorStop(0, areaStartColor[index] || areaStartColor[areaStartColor.length - 1]);
      linearGradient.addColorStop(1, areaEndColor[index] || areaEndColor[areaEndColor.length - 1]);
      this.ctx.lineTo(lastX, lastY);
      this.ctx.lineTo(lastX, endY);
      this.ctx.lineTo(firstPoint.start.x, endY);
      this.ctx.lineTo(firstPoint.start.x, firstPoint.start.y);
      this.ctx.fillStyle = linearGradient;
      this.ctx.fill();

      this.ctx.closePath();
      this.ctx.restore();
    });

    if (this.isFinishedAnimation) {
      this.drawDot();
    }
  }

  public forceUpdate (options?: AreaOptions) {
    this.init(options);
  }
  public updateData (xAxisData?: string[], yAxisData?: number[][]) {
    if (xAxisData) {
      this.options.xAxisData = xAxisData;
    }
    if (this.yAxisWidth) {
      this.options.yAxisData = yAxisData;
    }
    this.initData();
  }

  public destroy(): void {
    this.animationHandle && window.cancelAnimationFrame(this.animationHandle);
    this.handleMoveTimer && window.clearTimeout(this.handleMoveTimer);
    this.removeMoveHandler();
    this.canvas && this.el.removeChild(this.canvas);
  }
}