import { LWChartOptions, LWChartTextStyle, IPos } from "./utils/interfaces";
export default abstract class LWChart<T extends LWChartOptions> {
    constructor(el: HTMLElement, options?: T);
    protected el: HTMLElement;
    protected elWidth: number;
    protected elHeight: number;
    protected options: T;
    protected canvas: HTMLCanvasElement | null;
    protected ctx: CanvasRenderingContext2D | null;
    protected canvasWidth: number;
    protected canvasHeight: number;
    protected canvasPadding: number[];
    protected chartWidth: number;
    protected chartHeight: number;
    protected chartStartX: number;
    protected chartStartY: number;
    protected chartEndX: number;
    protected chartEndY: number;
    protected chartPadding: number[];
    protected titleBarHeight: number;
    protected mousePosition: IPos;
    dpi: number;
    /**
     * Create the Canvas element and mount it inside the el
     * 创建Canvas元素并挂载到el内
     */
    private createCanvas;
    /**
     * Handle the mouseMove or touchMove events
     * 处理 mouseMove 或者 touchMove 事件
     */
    private handleMove;
    /**
     * Add mouseMove or touchMove event listener, called inside the init function
     * 添加 mouseMove 或者 touchMove 事件，在 init 函数内调用
     */
    private addMoveHandler;
    /**
     * remove mouseMove or touchMove event listener
     * 移除 mouseMove 或 touchMove 事件监听
     */
    protected removeMoveHandler(): void;
    /**
     * Merge options
     * 合并参数
     */
    protected mergeOptions(options?: T): void;
    /**
     * Format numeric parameters according to dpi
     * 根据dpi格式化数字参数
     */
    protected formatNumParam(numOpt?: number): number;
    /**
     * Draw text
     * 绘制文本
     */
    protected drawText(text: string, options: LWChartTextStyle): void;
    /**
     * Draw line
     * 绘制线条
     */
    protected drawLine(startX: number, startY: number, endX: number, endY: number, lineWidth: number, color: string): void;
    /**
     * Fix pixel blur problem
     * 修复像素模糊问题
     */
    protected fixPixel(x: number): number;
    /**
     * Draw rect
     * 绘制矩形
     */
    protected drawRect(x: number, y: number, width: number, height: number, color: string, cursor?: string): void;
    /**
     * Draw Title
     * 绘制标题
     */
    protected drawTitle(): void;
    /**
     * Draw canvas background
     * 绘制canvas背景
     */
    protected drawCanvasBg(): void;
    /**
     * Draw chart background
     * 绘制chart背景
     */
    protected drawChartBg(): void;
    /**
     * mouseMove 或 touchMove 触发时调用
     */
    protected abstract onMove(): void;
    /**
     * Remove event listeners, timers, etc
     * 移除事件监听、定时器等
     */
    protected abstract destroy(): void;
}
