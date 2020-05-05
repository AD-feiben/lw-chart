import LWChart from './index';
import { AxisOptions } from './utils/interfaces';
export default abstract class Axis<T extends AxisOptions> extends LWChart<T> {
    constructor(el: HTMLElement, options?: T);
    protected xAxisData: string[];
    protected xAxisHeight: number;
    protected yAxisData: number[][];
    protected yAxisWidth: number;
    protected minValue: number;
    protected maxValue: number;
    /** 初始化数据 */
    protected initData(): void;
    /** 绘制坐标轴 */
    protected drawAxis(): void;
    /** 初始化尺寸坐标等 */
    protected initSize(): void;
    /**
     * @overwrite
     * 重写合并参数方法，合并该类的特有的参数
     */
    protected mergeOptions(options?: T): void;
    protected getPosY(val: number): number;
    protected getPosX(index: number): number;
    protected abstract init(options?: T): void;
    /** 数据初始化完成 */
    protected abstract afterInitData(): void;
    forceUpdate(options?: T): void;
    updateData(xAxisData?: string[], yAxisData?: number[][]): void;
}
