import { AreaOptions, IPos, IData } from './utils/interfaces';
import { ICurvePoint } from './utils';
import Axis from './axis';
interface IAreaPos extends IPos {
    xRange: number[];
    yRange: number[];
}
interface ICurveListItem {
    segmentAnimateDuration: number;
    segmentAnimatePercent: number;
    segmentAnimateStartTime: number;
    animationList: ICurvePoint[];
    list: ICurvePoint[];
}
export default class Area extends Axis<AreaOptions> {
    constructor(el: HTMLElement, options?: AreaOptions);
    private adsorptionLastTimer;
    protected areaLineWidth: number;
    protected areaDotRadius: number;
    protected areaDotLineWidth: number;
    protected areaActiveDotLineWidth: number;
    protected subLineWidth: number;
    protected areaActiveDotRadius: number;
    protected pointList: IAreaPos[][];
    protected curveList: ICurveListItem[];
    protected activeData: IData;
    protected isFinishedAnimation: boolean;
    protected animationHandle: number;
    protected handleMoveTimer: number;
    protected drawResult(): void;
    protected drawDot(): void;
    protected onMove(): void;
    protected onMouseLeave(): void;
    /**
     *
     * 触发子类钩子函数，合并参数，事件监听，更新数据
     *
     * It needs to be called in the constructor of the implementation class
     * 需要在实现类的构造函数中调用
     */
    protected init(options?: AreaOptions): void;
    /** 吸附最后一条数据 */
    protected adsorptionToLast(): void;
    /**
     * @overwrite
     * 重写合并参数方法，合并该类的特有的参数
     */
    protected mergeOptions(options?: AreaOptions): void;
    /** 将尺寸位置相关参数乘以 dpi，避免高清屏下产生模糊 */
    protected setParamsWithDpi(): void;
    protected afterInitData(): void;
    protected drawCanvas(): void;
    protected drawData(): void;
    forceUpdate(options?: AreaOptions): void;
    updateData(xAxisData?: string[], yAxisData?: number[][]): void;
    destroy(): void;
}
export {};
