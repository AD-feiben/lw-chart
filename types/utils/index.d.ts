import { IPos } from './interfaces';
export declare const isInBrowser: boolean;
/** 格式化padding */
export declare const formatPadding: (padding: number[], dpi?: number) => number[];
/** 是否安卓系统 */
export declare const isAndroid: boolean;
/** 是否为iOS系统 */
export declare const isIOS: boolean;
/** 是否是移动端 */
export declare const isMobile: boolean;
/**
 * 向指定dom绑定事件
 * @param element 指定dom元素
 * @param event dom事件
 * @param handler 回调函数
 */
export declare const on: (element: any, event: string, handler: Function) => void;
/**
 * 向指定dom解除绑定事件
 * @param element 指定dom元素
 * @param event dom事件
 * @param handler 回调函数
 */
export declare const off: (element: any, event: string, handler: Function) => void;
/** 获取时间戳，用于动画计算 */
export declare const now: () => number;
/**
 * 获取元素距离顶点的坐标
 */
export declare const getVertexPosition: (el: HTMLElement) => {
    top: number;
    left: number;
};
export interface ICurvePoint {
    start: IPos;
    end: IPos;
    control1: IPos;
    control2: IPos;
}
/** 给原始坐标点添加三次贝塞尔曲线控制点 */
export declare const getCurveList: (pointList: IPos[]) => ICurvePoint[];
/**
 * 三次贝塞尔曲线公式
 * https://bkimg.cdn.bcebos.com/formula/0f72d0377d19fdbb9ec87ea0146a9175.svg
 */
export declare const curveWithTime: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
