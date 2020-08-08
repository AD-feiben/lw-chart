import LWChart from './lw-chart';
import { AxisOptions, LWChartAxisStyle, IObj } from './utils/interfaces';
import { isInBrowser, formatPadding } from './utils';
import { fillRoundRect } from './utils/tooltip';

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
    let optionsMinVal = this.options.yAxisMinVal;
    let optionsMaxVal = this.options.yAxisMaxVal;
    let optionsMinValIsNumber = typeof optionsMinVal === 'number';
    let optionsMaxValIsNumber = typeof optionsMaxVal === 'number';

    /** 获取最大值及最小值 */
    let maxValue = optionsMaxValIsNumber ? optionsMaxVal as number : 0;
    let minValue = optionsMinValIsNumber ? optionsMinVal as number : 999999;
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
      const deltaVal = Math.max(5, maxValue * 0.1);
      maxValue = maxValue + deltaVal;
      minValue = minValue - deltaVal;
    }

    this.maxValue = optionsMaxValIsNumber ? optionsMaxVal as number : maxValue;
    this.minValue = optionsMinValIsNumber ? optionsMinVal as number : minValue;
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
    const dpiOpts: Array<keyof LWChartAxisStyle> = ['lineWidth', 'lineHeight', 'size', 'splitXAxisWidth', 'splitXAxisRadius'];
    dpiOpts.map(key => {
      if (typeof style[key] === 'number') {
        let originVal: number = style[key] as number;
        (style as IObj<number>)[key] = originVal * this.dpi;
      }
    });

    let { splitXAxisRadius, splitXAxisWidth, lineWidth, lineHeight, lineColor, splitXAxis, lineHeavyColor } = style;
    splitXAxisRadius = splitXAxisRadius || this.formatNumParam(2);
    splitXAxisWidth = splitXAxisWidth || this.formatNumParam(2);
    lineWidth = lineWidth || this.formatNumParam(1);
    lineHeight = lineHeight || this.formatNumParam(1);
    lineColor = lineColor || '#666';
    lineHeavyColor = lineHeavyColor || '#666';

    // x轴
    if (this.options.showXAxisAuxiliaryLine && splitXAxis !== true) {
      this.drawLine(xAxisPos.startX, xAxisPos.startY, xAxisPos.endX, xAxisPos.endY, lineHeight, lineColor);
    }
    // y轴
    if (this.options.showYAxisAuxiliaryLine) {
      this.drawLine(yAxisPos.startX, yAxisPos.startY, yAxisPos.endX, yAxisPos.endY, lineWidth, lineColor);
    }
    // 绘制坐标
    this.ctx.save();
    // 绘制x轴坐标
    this.ctx.textBaseline = 'top';
    this.ctx.textAlign = 'center';
    if (this.xAxisHeight >= 0) {
      const len = this.xAxisData.length;
      const lastIndex = len - 1;
      let groupNum = (len - 1) / (xAxisLength - 1);
      if (groupNum < 2) {
        groupNum = 1;
      }

      const splitXAxisRadiusList = new Array(4).fill(splitXAxisRadius);
      const splitXAxis = this.options.axisStyle?.splitXAxis;
      const showXAxisVal = this.options.showXAxisVal;

      for (let i = 0; i < len; i++) {

        // 绘制分割 x 轴
        let posX = this.getPosX(lastIndex - i) - splitXAxisWidth / 2;
        if (i === 0) {
          // 结束坐标
          posX = Math.min(posX, this.chartEndX - splitXAxisWidth / 2);
        } else if (i === len) {
          // 起始坐标
          posX = Math.max(posX, this.chartStartX - splitXAxisWidth / 2);
        }

        let markerVal = this.xAxisData[lastIndex - i];
        const skipXAxisValByCustom = showXAxisVal ? !showXAxisVal(markerVal) : true;
        const skipXAxisValByIndex = i !== len - 1 && i % groupNum >= 1;

        if (showXAxisVal ? skipXAxisValByCustom : skipXAxisValByIndex) {
          if (this.options.axisStyle?.splitXAxis !== true) continue;
          fillRoundRect(
            this.ctx,
            posX,
            xAxisPos.startY,
            splitXAxisWidth,
            lineHeight,
            splitXAxisRadiusList,
            lineColor
          );
          continue;
        }

        splitXAxis && fillRoundRect(
          this.ctx,
          posX,
          xAxisPos.startY,
          splitXAxisWidth,
          lineHeight,
          splitXAxisRadiusList,
          lineHeavyColor
        );

        markerVal = typeof xAxisFormat === 'function' ? xAxisFormat(markerVal) : markerVal;
        posX = this.getPosX(lastIndex - i);
        const posY = this.chartEndY + lineHeight + (10 * this.dpi);
        this.ctx.font = `normal ${style.size}px ${style.font}`;
        const textWidth = this.ctx.measureText(markerVal).width;
        const halfTextWidth = textWidth / 2;
        /** 边界处理 */
        if (i === 0) {
          // x 轴右侧
          posX = Math.min(posX, this.canvasWidth - halfTextWidth);
        }
        if (i === lastIndex) {
          // x 轴左侧
          posX = Math.max(posX, halfTextWidth);
        }

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
    this.ctx.textAlign = 'right';
    if (this.yAxisWidth >= 0) {
      const step = (this.maxValue - this.minValue) / yAxisLength;
      for (let i = 0; i <= yAxisLength; i++) {
        const markerVal = step * i + this.minValue;
        const markerValStr = typeof yAxisFormat === 'function' ? yAxisFormat(markerVal) : markerVal + '';
        const posX = this.chartStartX - (10 * this.dpi);
        const posY = this.getPosY(markerVal);
        this.drawText(markerValStr, {
          x: posX,
          y: posY,
          color: style.color,
          size: style.size,
          font: style.font,
          weight: 'normal',
          maxWidth: this.yAxisWidth - 10 * this.dpi
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
    // 合并该类特有参数
    const defaultAxisStyle: LWChartAxisStyle = {
      lineColor: '#666',
      lineWidth: 1,
      lineHeight: 1,
      font: 'PingFangSC-Semibold PingFang SC',
      size: 10,
      color: '#666',
      splitXAxis: false,
      lineHeavyColor: '#666',
      splitXAxisWidth: 2,
      splitXAxisRadius: 2
    };
    const defaultOpt: AxisOptions = {
      drawDataLength: 7,
      xAxisHeight: 30,
      xAxisData: [],
      xAxisLength: 10,
      xAxisFormat: undefined,
      showXAxisAuxiliaryLine: true,
      showYAxisAuxiliaryLine: true,
      yAxisWidth: 30,
      yAxisData: [],
      yAxisLength: 10,
      yAxisFormat: undefined,
      axisStyle: undefined,
      showXAxisVal: undefined
    };

    this.options = Object.assign({}, defaultOpt, this.options, options);
    const axisStyle = Object.assign({}, defaultAxisStyle, this.options.axisStyle, options?.axisStyle);
    this.options.axisStyle = axisStyle;
    // 调用父类合并参数方法，合并公共参数
    super.mergeOptions(options);
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
  /** 数据初始化完成 */
  protected abstract afterInitData(): void;
}