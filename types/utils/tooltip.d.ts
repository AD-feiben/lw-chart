import { IToolTipOptForDraw, IPos } from './interfaces';
export declare const drawRoundRectPath: (ctx: CanvasRenderingContext2D, width: number, height: number, radius: number[]) => void;
export declare const drawPath: (ctx: CanvasRenderingContext2D, points: IPos[]) => void;
export declare const fillRoundRect: (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number[], fillColor: string) => void;
export declare const drawToolTip: (ctx: CanvasRenderingContext2D, opt: IToolTipOptForDraw) => void;
