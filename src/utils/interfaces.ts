export type LWChartTextWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export interface IObj<T> {
  [key: string]: T;
  [key: number]: T;
}

export interface IPos {
  x: number;
  y: number;
}

export interface IData {
  group: number;
  /** x坐标值 */
  xAxisVal: string;
  /** y坐标值 */
  yAxisVal: number;
}

/** 坐标轴样式 */
export interface LWChartAxisStyle {
  /** 坐标轴颜色 */
  lineColor?: string;
  /** 坐标轴宽度 */
  lineWidth?: number;
  /** 字体 */
  font?: string;
  /** 字体大小 */
  size?: number;
  /** 字体颜色 */
  color?: string;
}

export interface LWChartTextStyle {
  /** 字体大小 */
  size?: number;
  /** 字体 */
  font?: string;
  /** 字体加粗 */
  weight?: LWChartTextWeight;
  /** x坐标 */
  x?: number;
  /** y坐标 */
  y?: number;
  /** 字体颜色 */
  color?: string;
  /** 最大宽度 */
  maxWidth?: number;
}


/** 图表参数 */
export interface LWChartOptions {
  /** canvas内边距 top right bottom left */
  canvasPadding?: number[];
  /** canvas背景 */
  canvasBg?: string;
  /** 标题 */
  title?: string;
  /** 标题样式 */
  titleStyle?: LWChartTextStyle;
  /** 标题栏高度，title 不为空时生效 */
  titleBarHeight?: number;
  /** chart内边距 top right bottom left */
  chartPadding?: number[];
  /** chart背景 */
  chartBg?: string;
  /** 鼠标在chart范围的样式 */
  chartCursor?: string;
}

export interface AxisOptions extends LWChartOptions {
  /** 绘制图表的数据量 */
  drawDataLength?: number;
  /** x轴高度 */
  xAxisHeight?: number;
  /** x轴数据 */
  xAxisData?: string[];
  /** x轴显示个数 */
  xAxisLength?: number;
  /** x轴坐标格式化 */
  xAxisFormat?: (val: string) => string;
  /** y轴宽度 */
  yAxisWidth?: number;
  /** y轴数据 */
  yAxisData?: number[][];
  /** y轴显示个数 */
  yAxisLength?: number;
  /** y轴坐标格式化 */
  yAxisFormat?: (val: number) => string;
  /** 坐标轴样式 */
  axisStyle?: LWChartAxisStyle;
}

export interface AreaOptions extends AxisOptions {
  /** 线条颜色 */
  areaLineColor?: string[];
  /** 线宽 */
  areaLineWidth?: number;
  /** 渐变起始颜色 */
  areaStartColor?: string[];
  /** 渐变结束颜色 */
  areaEndColor?: string[];
  /** 显示数据点 */
  areaShowDot?: boolean;
  /** 数据点半径 */
  areaDotRadius?: number;
  /** 数据点填充颜色 */
  areaDotFillColor?: string[];
  /** 数据点描边宽度 */
  areaDotLineWidth?: number;
  /** 数据点描边颜色 */
  areaDotStorkColor?: string[];
  /** 鼠标选中的数据点的样式 */
  areaActiveDotRadius?: number;
  areaActiveDotFillColor?: string[];

  /** 显示选中的数据 */
  showResult?: boolean;
  /** 自定义结果显示 */
  drawResult?: (ctx: CanvasRenderingContext2D, data: IData) => void;
  resultFormat?: (data: IData) => string;
  resultStyle?: LWChartTextStyle;
  /** 显示动画 */
  showAnimation?: boolean;
  /** 动画执行时间 ms */
  animationDuration?: number;
}