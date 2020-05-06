import LWChart from './lw-chart';
import { AxisOptions, LWChartAxisStyle, IObj } from './utils/interfaces';
import { isInBrowser, formatPadding } from './utils';

export default abstract class Axis<T extends AxisOptions> extends LWChart<T> {
  constructor (el: HTMLElement, options?: T) {
    super(el, options);
  }
  protected xAxisData: string[] = [];
  protected xAxisHeight: number = 0;
  protected yAxisData: number[][] = [];
  protected yAxisWidth: number = 0;

  protected minValue: number = 0;
  protected maxValue: number = 0;

  /** 初始化数据 */
  protected initData () {
    let {
      xAxisData,
      yAxisData,
      drawDataLength
    } = this.options;

    xAxisData = xAxisData || [];
    yAxisData = yAxisData || [];
    drawDataLength = drawDataLength || 7;
    /** 获取最大值及最小值 */
    let maxValue = 0;
    let minValue = 999999;
    this.xAxisData = xAxisData.slice(-drawDataLength);

    yAxisData.map((groupData, index) => {
      this.yAxisData[index] = groupData.slice(-(drawDataLength || 7));
      this.yAxisData[index].map(item => {
        const itemValue = item;
        if (itemValue > maxValue) {
          maxValue = itemValue;
        }
        if (itemValue < minValue) {
          minValue = itemValue;
        }
      });
    });

    if (minValue === maxValue) {
      maxValue = minValue + 10;
    }

    // const deltaValue = maxValue - minValue;
    /** 上下预留的空间 */
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.afterInitData();
  }

  /** 绘制坐标轴 */
  protected drawAxis () {
    if (!this.ctx) return;
    const cpl = this.canvasPadding[3];
    const xAxisPos = {
      startX: cpl + this.yAxisWidth,
      startY: this.chartEndY,
      endX: this.chartEndX,
      endY: this.chartEndY
    };
    const yAxisPos = {
      startX: cpl + this.yAxisWidth,
      startY: this.chartStartY,
      endX: cpl + this.yAxisWidth,
      endY: this.chartEndY
    };
    /** 擦除x轴 */
    this.ctx.clearRect(cpl + this.yAxisWidth, xAxisPos.startY, this.chartWidth, this.xAxisHeight);
    this.drawRect(cpl + this.yAxisWidth, xAxisPos.startY, this.chartWidth, this.xAxisHeight, this.options.canvasBg || '#fff');
    /** 擦除y轴 */
    this.ctx.clearRect(cpl, yAxisPos.startY, this.yAxisWidth, this.chartHeight);
    this.drawRect(cpl, yAxisPos.startY, this.yAxisWidth, this.chartHeight, this.options.canvasBg || '#fff');

    let { axisStyle, xAxisLength, xAxisFormat, yAxisLength, yAxisFormat } = this.options;
    xAxisLength = xAxisLength || 10;
    yAxisLength = yAxisLength || 10;
    yAxisLength--;
    const style: LWChartAxisStyle = Object.assign({}, axisStyle);
    const dpiOpts: Array<keyof LWChartAxisStyle> = ['lineWidth', 'size'];
    dpiOpts.map(key => {
      if (typeof style[key] === 'number') {
        let originVal: number = style[key] as number;
        (style as IObj<number>)[key] = originVal * this.dpi;
      }
    });

    // x轴
    this.drawLine(xAxisPos.startX, xAxisPos.startY, xAxisPos.endX, xAxisPos.endY, style.lineWidth || 1, style.lineColor || '#666');
    // y轴
    this.drawLine(yAxisPos.startX, yAxisPos.startY, yAxisPos.endX, yAxisPos.endY, style.lineWidth || 1, style.lineColor || '#666');
    // 绘制坐标
    this.ctx.save();
    // 绘制x轴坐标
    this.ctx.textBaseline = 'top';
    this.ctx.textAlign = 'center';
    if (this.xAxisHeight >= 0) {
      const len = this.xAxisData.length;
      let groupNum = len / xAxisLength;
      groupNum = groupNum < 2 ? 1 : Math.ceil(groupNum);
      for (let i = 0; i < len; i++) {
        if (len > xAxisLength && i % groupNum !== 0) {
          continue;
        }
        let markerVal = this.xAxisData[i];
        markerVal = typeof xAxisFormat === 'function' ? xAxisFormat(markerVal) : markerVal;
        const posX = this.getPosX(i);
        const posY = this.chartEndY + (10 * this.dpi);
        this.drawText(markerVal, {
          x: posX,
          y: posY,
          color: style.color,
          size: style.size,
          font: style.font,
          weight: 'normal'
        });
      }
    }

    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'left';
    if (this.yAxisWidth >= 0) {
      const step = (this.maxValue - this.minValue) / yAxisLength;
      for (let i = 0; i <= yAxisLength; i++) {
        const markerVal = step * i + this.minValue;
        const markerValStr = typeof yAxisFormat === 'function' ? yAxisFormat(markerVal) : markerVal + '';
        const posX = this.chartStartX - this.yAxisWidth;
        const posY = this.getPosY(markerVal);
        this.drawText(markerValStr, {
          x: posX,
          y: posY,
          color: style.color,
          size: style.size,
          font: style.font,
          weight: 'normal',
          maxWidth: this.yAxisWidth
        });
        if (i > 0) {
          this.drawLine(xAxisPos.startX, posY, xAxisPos.endX, posY, style.lineWidth || 1, style.lineColor || '#666');
        }
      }
    }

    this.ctx.restore();
  }

  /** 初始化尺寸坐标等 */
  protected initSize () {
    /** 根据dpi设置canvas宽高 */
    if (!this.canvas || !isInBrowser) return;
    this.canvas.width = this.canvasWidth = this.elWidth * this.dpi;
    this.canvas.height = this.canvasHeight = this.elHeight * this.dpi;
    this.canvas.style.width = this.elWidth + 'px';
    this.canvas.style.height = this.elHeight + 'px';

    let {
      title,
      titleBarHeight,
      canvasPadding,
      chartPadding,
      yAxisWidth,
      xAxisHeight
    } = this.options;

    canvasPadding = canvasPadding || [0];
    chartPadding = chartPadding || [0];
    titleBarHeight = this.formatNumParam(titleBarHeight);
    yAxisWidth = this.formatNumParam(yAxisWidth);
    xAxisHeight = this.formatNumParam(xAxisHeight);

    this.xAxisHeight = xAxisHeight;
    this.yAxisWidth = yAxisWidth;

    this.titleBarHeight = title ? titleBarHeight : 0;
    this.canvasPadding = formatPadding(canvasPadding, this.dpi);
    const [ cpt, cpr, cpb, cpl ] = this.canvasPadding;
    this.chartPadding = formatPadding(chartPadding, this.dpi);
    // const [ chartPt, chartPr, chartPb, chartPl ] = this.chartPadding;

    /** 图表宽度 = canvas 宽度 - 左右边距 - y轴宽度 */
    this.chartWidth = this.canvasWidth - cpl - cpr - yAxisWidth;
    /** 图表高度 = canvas 高度 - 标题栏高度 - 上下边距 - x 轴高度 */
    this.chartHeight = this.canvasHeight - this.titleBarHeight - cpt - cpb - xAxisHeight;
    /** 图表起始位置 X 坐标 */
    this.chartStartX = cpl + yAxisWidth;
    /** 图表起始位置 Y 坐标 */
    this.chartStartY = cpt + titleBarHeight;
    /** 图表终点位置 X 坐标 */
    this.chartEndX = this.chartStartX + this.chartWidth;
    /** 图表终点位置 Y 坐标 */
    this.chartEndY = this.chartStartY + this.chartHeight;
  }

  /**
   * @overwrite
   * 重写合并参数方法，合并该类的特有的参数
   */
  protected mergeOptions (options?: T) {
    // 调用父类合并参数方法，合并公共参数
    super.mergeOptions(options);
    // 合并该类特有参数
    const defaultAxisStyle: LWChartAxisStyle = {
      lineColor: '#666',
      lineWidth: 1,
      font: 'PingFangSC-Semibold PingFang SC',
      size: 10,
      color: '#666'
    };
    const defaultOpt: AxisOptions = {
      drawDataLength: 7,
      xAxisHeight: 30,
      xAxisData: [],
      xAxisLength: 10,
      xAxisFormat: undefined,
      yAxisWidth: 30,
      yAxisData: [],
      yAxisLength: 10,
      yAxisFormat: undefined,
      axisStyle: undefined
    };

    this.options = Object.assign({}, defaultOpt, this.options, options);
    const axisStyle = Object.assign({}, defaultAxisStyle, this.options.axisStyle, options?.axisStyle);
    this.options.axisStyle = axisStyle;
  }

  protected getPosY (val: number) {
    const endY = this.chartEndY - this.chartPadding[2]; // chart padding-bottom
    const chartInnerHeight = this.chartHeight - this.chartPadding[0] - this.chartPadding[2]; // chart padding-top padding-bottom;
    const deltaVal = this.maxValue - this.minValue;
    return endY - chartInnerHeight * ((val - this.minValue) / deltaVal);
  }

  protected getPosX (index: number) {
    const startX = this.chartStartX + this.chartPadding[3]; // chart padding-left
    const chartInnerWidth = this.chartWidth - this.chartPadding[1] - this.chartPadding[3]; // chart padding-right padding-left
    const xAxisLength = this.xAxisData.length - 1;
    return startX + chartInnerWidth * (index / xAxisLength);
  }

  protected abstract init(options?: T): void;
  /** 数据初始化完成 */
  protected abstract afterInitData(): void;

  public forceUpdate (options?: T) {
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
}