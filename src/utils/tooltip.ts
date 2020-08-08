import { IToolTipOptForDraw, IPos } from './interfaces';

interface IRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface IEdge {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export const drawRoundRectPath = (ctx: CanvasRenderingContext2D, width: number, height: number, radius: number[]) => {
  const [ radiusLeftTop, radiusRightTop, radiusRightBottom, radiusLeftBottom ] = radius;

  ctx.beginPath();
  //从右下角顺时针绘制，弧度从0到1/2PI
  ctx.arc(width - radiusRightBottom, height - radiusRightBottom, radiusRightBottom, 0, Math.PI / 2);

  //矩形下边线
  ctx.lineTo(radiusLeftBottom, height);


  //左下角圆弧，弧度从1/2PI到PI
  ctx.arc(radiusLeftBottom, height - radiusLeftBottom, radiusLeftBottom, Math.PI / 2, Math.PI);

  //矩形左边线
  ctx.lineTo(0, radiusLeftTop);

  //左上角圆弧，弧度从PI到3/2PI
  ctx.arc(radiusLeftTop, radiusLeftTop, radiusLeftTop, Math.PI, Math.PI * 3 / 2);

  //上边线
  ctx.lineTo(width - radiusRightTop, 0);

  //右上角圆弧
  ctx.arc(width - radiusRightTop, radiusRightTop, radiusRightTop, Math.PI * 3 / 2, Math.PI * 2);

  //右边线
  ctx.lineTo(width, height - radiusRightTop);
  ctx.closePath();
};

export const drawPath = (ctx: CanvasRenderingContext2D, points: IPos[]) => {
  ctx.beginPath();
  if (points.length > 0) {
    const fp = points[0];
    ctx.moveTo(fp.x, fp.y);
  }
  for (let i = 1, len = points.length; i< len; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.closePath();
};

export const fillRoundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number[],
  fillColor: string,
) => {
  ctx.save();
  ctx.translate(x, y);
  drawRoundRectPath(ctx, width, height, radius);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.restore();
};

/**
 * 边界判断
 * @param containerRect 容器位置大小
 * @param targetRect 目标物位置大小
 * @param verticalOffset 垂直偏移量
 * @param horizontalOffset 水平偏移量
 */
const edgeJudgment = (containerRect: IRect, targetRect: IRect, verticalOffset: number, horizontalOffset: number): IEdge => {
  let top: boolean = false;
  let right: boolean = false;
  let bottom: boolean = false;
  let left: boolean = false;

  /** 超容器顶边 */
  if (targetRect.y - verticalOffset < containerRect.y) {
    top = true;
  }
  /** 超容器右边 */
  if (targetRect.x + targetRect.w + horizontalOffset > containerRect.x + containerRect.w) {
    right = true;
  }
  /** 超容器下边 */
  if (targetRect.y + targetRect.h + verticalOffset > containerRect.y + containerRect.h) {
    bottom = true;
  }
  /** 超容器左边 */
  if (targetRect.x - horizontalOffset < containerRect.x) {
    left = true;
  }
  return {
    top,
    right,
    bottom,
    left
  };
};

export const drawToolTip = (ctx: CanvasRenderingContext2D, opt: IToolTipOptForDraw) => {
  let { size, font, weight, color } = opt;
  const { x, y, dpi, width, height, chartX, chartY, chartWidth, chartHeight } = opt;
  size = size || 12;
  font = font || 'PingFangSC-Semibold PingFang SC';
  color = color || '#333';
  weight = weight || '400';

  const offset = 10 * dpi;
  const toolTipX = x - width / 2;
  const toolTipY = y - height;
  const triangleHeight = 8 * dpi;
  const triangleWidth = 6 * dpi;
  const toolTipContainerHeight = height - triangleHeight;

  const edge = edgeJudgment(
    {
      x: chartX,
      y: chartY,
      w: chartWidth,
      h: chartHeight
    },
    {
      x: toolTipX,
      y: toolTipY,
      w: width,
      h: height
    },
    offset,
    0
  );

  let drawPosX = toolTipX;
  let drawPosY = toolTipY - offset;

  let radiusRightBottom = opt.borderRadius;
  let radiusLeftBottom = opt.borderRadius;
  let radiusLeftTop = opt.borderRadius;
  let radiusRightTop = opt.borderRadius;

  if (edge.left) {
    drawPosX = chartX;
  }

  if (edge.right) {
    drawPosX = chartX + chartWidth - width;
  }

  if (x <= chartX) {
    edge.top ? radiusLeftTop = 0 : radiusLeftBottom = 0;
  }

  if (x >= chartX + chartWidth) {
    edge.top ? radiusRightTop = 0 : radiusRightBottom = 0;
  }

  if (edge.top) {
    drawPosY = y + offset + triangleHeight;
  }

  const drawRect: IRect = {
    x: drawPosX,
    y: drawPosY,
    w: width,
    h: toolTipContainerHeight
  };

  const drawRectCenterX = drawRect.x + drawRect.w / 2;
  const drawRectCenterY = drawRect.y + drawRect.h / 2;

  fillRoundRect(
    ctx,
    drawRect.x,
    drawRect.y,
    drawRect.w,
    drawRect.h,
    [ radiusLeftTop, radiusRightTop, radiusRightBottom, radiusLeftBottom ],
    opt.bgColor
  );

  ctx.save();

  const triangleYOffset = (triangleHeight + 2) * (edge.top ? 1 : -1);
  const triangleY = edge.top ? y + offset : y - offset;

  drawPath(ctx,
    [
      { x, y: triangleY },
      { x: Math.max(chartX, x - triangleWidth), y: triangleY + triangleYOffset },
      { x: Math.min(chartX + chartWidth, x + triangleWidth), y: triangleY + triangleYOffset }
    ]
  );
  ctx.fillStyle = opt.bgColor;
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.font = `${weight} ${size}px ${font}`;
  ctx.fillStyle = color;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText(opt.text, drawRectCenterX, drawRectCenterY, width);

  ctx.restore();
};