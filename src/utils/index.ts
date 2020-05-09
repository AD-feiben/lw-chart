import { IPos } from './interfaces';

export const isInBrowser: boolean = typeof window !== 'undefined';
const userAgent = isInBrowser === true ? window.navigator.userAgent : '';
const UA = userAgent.toLowerCase();

/** 格式化padding */
export const formatPadding = function (padding: number[], dpi: number = 1) {
  const len = padding.length;
  let tempPadding: number[] = [];
  if (len >= 4) {
    tempPadding = padding.slice(0, 4);
  }
  if (len === 3) {
    tempPadding = padding.concat(padding[1]);
  }

  while (tempPadding.length < 4) {
    tempPadding = tempPadding.concat(padding);
  }

  return tempPadding.map(item => item * dpi);

};

/** 是否安卓系统 */
export const isAndroid = UA.indexOf('android') > -1;
/** 是否为iOS系统 */
export const isIOS = /iphone|ipad|ipod|ios/.test(UA);
/** 是否是移动端 */
export const isMobile = isAndroid || isIOS;

/**
 * 向指定dom绑定事件
 * @param element 指定dom元素
 * @param event dom事件
 * @param handler 回调函数
 */
export const on = function (element: any, event: string, handler: Function): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, false);
  }
};
/**
 * 向指定dom解除绑定事件
 * @param element 指定dom元素
 * @param event dom事件
 * @param handler 回调函数
 */
export const off = function (element: any, event: string, handler: Function): void {
  if (element && event) {
    element.removeEventListener(event, handler, false);
  }
};

/** 获取时间戳，用于动画计算 */
export const now = (): number => {
  if (performance) {
    return performance.now();
  }
  return Date.now();
};

/**
 * 获取元素距离顶点的坐标
 */
export const getVertexPosition = function (el: HTMLElement) {
  let currentTarget: HTMLElement | null = el;
  let top = 0;
  let left = 0;
  while (currentTarget !== null) {
    top += currentTarget.offsetTop;
    left += currentTarget.offsetLeft;
    currentTarget = currentTarget.offsetParent as HTMLElement;
  }
  return { top, left };
};

export interface ICurvePoint {
  start: IPos;
  end: IPos;
  control1: IPos;
  control2: IPos;
}

/** 给原始坐标点添加三次贝塞尔曲线控制点 */
export const getCurveList = function (pointList: IPos[]): ICurvePoint[] {
  if (pointList.length <= 0) return [];
  // 长度比例系数
  const lenParam = 1 / 3;
  const len = pointList.length;
  return pointList.map((curPoint, index) => {
    const nextPoint = index === len - 1 ? curPoint : pointList[index + 1];
    const curX = curPoint.x;
    const curY = curPoint.y;
    const nextX = nextPoint.x;
    const nextY = nextPoint.y;
    const deltaX = Math.abs(nextX - curX)  * lenParam;
    return {
      start: curPoint,
      end: nextPoint,
      control1: {
        x: curX + deltaX,
        y: curY
      },
      control2: {
        x: nextX - deltaX,
        y: nextY
      }
    };
  });
};

/**
 * 三次贝塞尔曲线公式
 * https://bkimg.cdn.bcebos.com/formula/0f72d0377d19fdbb9ec87ea0146a9175.svg
 */
export const curveWithTime = function (p0: number, p1: number, p2: number, p3: number, t: number) {
  if (t > 1) t = 1;
  const k = 1 - t;
  return (p0 * Math.pow(k, 3)) + (3 * p1 * t * Math.pow(k, 2)) + (3 * p2 * Math.pow(t, 2) * k) + (p3 * Math.pow(t, 3));
};

