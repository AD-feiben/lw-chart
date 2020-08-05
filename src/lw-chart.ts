import { LWChartOptions, LWChartTextStyle, IObj, IPos } from "./utils/interfaces";
import { isInBrowser, isMobile, getVertexPosition, on, off, formatPadding  } from './utils';

export default abstract class LWChart<T extends LWChartOptions> {
  constructor (el: HTMLElement, options?: T) {
    this.el = el;
    this.mergeOptions(options);
    this.createCanvas();
    this.addEventHandler();
  }

  protected el: HTMLElement;
  protected elWidth: number = 0;
  protected elHeight: number = 0;

  protected options = {} as T;
  protected canvas: HTMLCanvasElement | null = null;
  protected ctx: CanvasRenderingContext2D | null = null;
  protected canvasWidth: number = 0;
  protected canvasHeight: number = 0;
  protected canvasPadding: number[] = [0];

  protected chartWidth: number = 0;
  protected chartHeight: number = 0;
  protected chartStartX: number = 0;
  protected chartStartY: number = 0;
  protected chartEndX: number = 0;
  protected chartEndY: number = 0;
  protected chartPadding: number[] = [0];

  protected titleBarHeight: number = 0;

  protected mousePosition: IPos = {
    x: -1,
    y: -1
  };
  protected mouseInCanvas: boolean = false;

  public dpi: number = 1;

  /**
   * Create the Canvas element and mount it inside the el
   * 创建Canvas元素并挂载到el内
   */
  private createCanvas () {
    if (isInBrowser === false) return;
    this.elWidth = this.el.offsetWidth;
    this.elHeight = this.el.offsetHeight;

    this.canvas = document.createElement('canvas');
    this.canvas.innerHTML = '您的浏览器不支持Canvas';
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      throw new Error('TWChart: get canvas 2D context fail');
    }

    const i = this.ctx as any;
    let n = (i.backingStorePixelRatio ||
    i.webkitBackingStorePixelRatio ||
    i.mozBackingStorePixelRatio ||
    i.msBackingStorePixelRatio ||
    i.oBackingStorePixelRatio ||
    i.backingStorePixelRatio ||
    1);

    let a = (window.devicePixelRatio || 1) / n;
    if (a < 1) {
      a = 1;
    }
    this.dpi = a / n;

    this.el.innerHTML = '';
    this.el.appendChild(this.canvas);
  }

  /**
   * Handle the mouseMove or touchMove events
   * 处理 mouseMove 或者 touchMove 事件
   */
  private handleMove (event: MouseEvent | TouchEvent) {
    if (!this.canvas) return;
    if (isMobile) {
      const { top, left } = getVertexPosition(this.canvas);
      const touch = (event as TouchEvent).changedTouches[0];
      const { pageX, pageY } = touch as Touch;
      this.mousePosition = {
        x: (pageX - left) * this.dpi,
        y: (pageY - top) * this.dpi
      };
    } else {
      const e: any = event || window.event;
      if (e.offsetX || e.offsetX === 0) {
        this.mousePosition = {
          x: e.offsetX * this.dpi,
          y: e.offsetY * this.dpi
        };
      } else if (e.layerX || e.layerX === 0) {
        this.mousePosition = {
          x: e.layerX * this.dpi,
          y: e.layerY * this.dpi
        };
      }
    }
    this.mouseInCanvas = true;
    this.onMove();
  }

  private handleMouseLeaveCanvas () {
    this.mouseInCanvas = false;
    this.onMouseLeave();
  }

  /**
   * Add mouseMove or touchMove event listener, called inside the init function
   * 添加 mouseMove 或者 touchMove 事件，在 init 函数内调用
   */
  private addEventHandler () {
    if (!this.canvas) return;
    const moveEventTypes: Array<keyof HTMLElementEventMap> = isMobile ? ['touchmove', 'touchend'] : ['mousemove'];
    const mouseLeaveEventTypes: Array<keyof HTMLElementEventMap> = isMobile ? ['touchend'] : ['mouseleave'];
    this.removeEventHandler();
    moveEventTypes.map(eventType => {
      on(this.canvas, eventType, this.handleMove.bind(this));
    });
    mouseLeaveEventTypes.map(eventType => {
      on(this.canvas, eventType, this.handleMouseLeaveCanvas.bind(this));
    });
  }

  /**
   * remove mouseMove or touchMove event listener
   * 移除 mouseMove 或 touchMove 事件监听
   */
  protected removeEventHandler () {
    const moveEventTypes: Array<keyof HTMLElementEventMap> = isMobile ? ['touchmove', 'touchend'] : ['mousemove'];
    const mouseLeaveEventTypes: Array<keyof HTMLElementEventMap> = isMobile ? ['touchend'] : ['mouseleave'];
    moveEventTypes.map(eventType => {
      off(this.canvas, eventType, this.handleMove.bind(this));
    });
    mouseLeaveEventTypes.map(eventType => {
      off(this.canvas, eventType, this.handleMouseLeaveCanvas.bind(this));
    });
  }


  /**
   * Merge options
   * 合并参数
   */
  protected mergeOptions (options?: T) {
    const defaultOpt: LWChartOptions = {
      canvasPadding: [0],
      canvasBg: '#fff',
      title: '',
      titleStyle: undefined,
      titleBarHeight: 30,
      chartPadding: [0],
      chartBg: '#fff',
      chartCursor: 'pointer',
    };
    this.options = Object.assign({}, defaultOpt, this.options, options);

    const canvasPadding = formatPadding(this.options.canvasPadding || [0]);
    const defaultTitleStyle: LWChartTextStyle = {
      size: 18,
      font: 'PingFangSC-Semibold PingFang SC',
      weight: 'bold',
      x: canvasPadding[3],
      y: canvasPadding[0],
      color: '#333'
    };
    const titleStyle = Object.assign({}, defaultTitleStyle, this.options.titleStyle, options?.titleStyle);
    this.options.titleStyle = titleStyle;
  }


  /**
   * Format numeric parameters according to dpi
   * 根据dpi格式化数字参数
   */
  protected formatNumParam (numOpt?: number) {
    return (numOpt || 0) * this.dpi;
  }

  /**
   * Draw text
   * 绘制文本
   */
  protected drawText (text: string, options: LWChartTextStyle) {
    if (!this.ctx) return;
    let { size, font, weight, color, x, y, maxWidth } = options;
    size = size || 16;
    font = font || 'PingFangSC-Semibold PingFang SC';
    color = color || '#333';
    x = x || 0;
    y = y || 0;
    this.ctx.save();
    this.ctx.font = `${weight} ${size}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y, maxWidth);
    this.ctx.restore();
  }

  /**
   * Draw line
   * 绘制线条
   */
  protected drawLine (startX: number, startY: number, endX: number, endY: number, lineWidth: number, color: string, segments?: number[]) {
    if (!this.ctx) return;
    this.ctx.save();
    if (segments) {
      this.ctx.setLineDash(segments);
    }
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = lineWidth;
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }

  /**
   * Fix pixel blur problem
   * 修复像素模糊问题
   */
  protected fixPixel (x: number) {
    x = parseInt(x + '');
    if (x % 2 !== 0) {
      return x + 1;
    }
    return x;
  }

  /**
   * Draw rect
   * 绘制矩形
   */
  protected drawRect (x: number, y: number, width: number, height: number, color: string, cursor: string = 'default') {
    if (!this.ctx || !this.canvas) return;
    this.ctx.save();
    this.ctx.beginPath();

    this.ctx.rect(x, y, width, height);
    if (this.ctx.isPointInPath(this.mousePosition.x, this.mousePosition.y)) {
      this.canvas.style.cursor = cursor;
    }
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  /**
   * Draw Title
   * 绘制标题
   */
  protected drawTitle () {
    let { title, titleStyle } = this.options;
    if (!this.ctx || !title) return;

    const style: LWChartTextStyle = Object.assign({}, titleStyle);
    const dpiOpts: Array<keyof LWChartTextStyle> = ['x', 'y', 'size', 'maxWidth'];
    dpiOpts.map(key => {
      if (typeof style[key] === 'number') {
        let originVal: number = style[key] as number;
        (style as IObj<number>)[key] = originVal * this.dpi;
      }
    });
    this.ctx.save();
    this.ctx.textBaseline = 'top';
    this.ctx.textAlign = 'start';
    this.drawText(title, style);
    this.ctx.restore();
  }

  /**
   * Draw canvas background
   * 绘制canvas背景
   */
  protected drawCanvasBg () {
    if (!this.ctx) return;
    let { canvasBg } = this.options;
    canvasBg = canvasBg || '#fff';
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawRect(0, 0, this.canvasWidth, this.canvasHeight, canvasBg);
  }

  /**
   * Draw chart background
   * 绘制chart背景
   */
  protected drawChartBg () {
    if (!this.ctx) return;
    let { chartBg } = this.options;
    chartBg = chartBg || '#fff';
    this.ctx.clearRect(this.chartStartX, this.chartStartY, this.chartWidth, this.chartHeight);
    this.drawRect(this.chartStartX, this.chartStartY, this.chartWidth, this.chartHeight, chartBg, this.options.chartCursor);
  }

  /**
   * mouseMove 或 touchMove 触发时调用
   */
  protected abstract onMove(): void;

  protected abstract onMouseLeave(): void;
  /**
   * Remove event listeners, timers, etc
   * 移除事件监听、定时器等
   */
  public abstract destroy(): void;
}
