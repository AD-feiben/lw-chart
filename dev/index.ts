
import Area from '../src/area';
// import lwChart from 'lw-chart';
// const Area = lwChart.Area;
const xAxisData = ["2020-07-05","2020-07-06","2020-07-07","2020-07-08","2020-07-09","2020-07-10","2020-07-11","2020-07-12","2020-07-13","2020-07-14","2020-07-15","2020-07-16","2020-07-17","2020-07-18","2020-07-19","2020-07-20","2020-07-21","2020-07-22","2020-07-23","2020-07-24","2020-07-25","2020-07-26","2020-07-27","2020-07-28","2020-07-29","2020-07-30","2020-07-31","2020-08-01","2020-08-02","2020-08-03"];
const yAxisData = [
  // [0.00881200,0.00912500,0.00969800,0.01001100,0.01016700,0.00365000,0.00172000,0.00135500,0.08301100,0.08243700,0.08212500,0.08196800,0.08196800,0.08196800,0.08358500,0.00292000,0.00370200,0.00370200,0.00370200,0.00422300,0.00422300,0.00260700,0.00130300,0.61085300,1.48275100,1.15942200,1.18387700,0.68468700,0.69438600,0.69928700],
  [1.57153300,1.46855100,1.43851700,1.29955600,1.25038500,1.17780200,1.10047500,0.88027500,0.79173700,0.91083100,1.58733200,1.58738500,1.59035700,1.59708300,1.59765700,1.69104500,2.10824000,1.77442100,1.87203200,1.97913400,2.03847200,2.16272900,2.84919000,2.44737700,2.26180000,2.24850400,2.25027700,2.72008400,2.80982200,2.19761200],
  // [1.57153300,1.46855100,1.43851700,1.29955600,1.25038500,1.17780200,1.10047500,0.88027500,0.79173700,0.91083100,1.58733200,1.58738500,1.59035700,1.59708300,1.59765700,1.69104500,2.10824000,1.77442100,1.87203200,1.97913400,2.03847200,2.16272900,2.84919000,2.44737700,2.26180000,2.24850400,2.25027700,2.72008400,2.80982200,2.19761200],
  // [9.42080600,9.57123800,9.86960000,10.22104200,10.63740300,10.89785700,11.11185100,11.29899200,11.27026100,11.13406400,10.84456700,10.54026100,10.36558200,10.15341300,9.95287200,9.82413100,9.80598500,9.96882700,10.25696900,10.51361600,10.90896300,11.30498800,11.70017900,11.71071200,11.48738400,11.12316600,10.78533200,10.37481200,9.18632000,8.48160900]
];

const config = {
  canvasPadding: [16, 16, 10, 20],
  chartPadding: [0, 20, 0, 0],
  title: '7日年化收益',
  titleStyle: {
    font: 'PingFangSC-Semibold PingFang SC',
    size: 18,
    x: 20,
    y: 18,
    color: '#333333',
    weight: 'bold',
    maxWidth: 200
  },
  titleBarHeight: 60,
  drawDataLength: 30,
  showYAxisAuxiliaryLine: false,
  axisStyle: {
    size: 10,
    color: '#ccc',
    lineWidth: 1,
    lineColor: 'rgba(242,242,242,0.3)'
  },
  xAxisHeight: 30,
  xAxisLength: 6,
  xAxisFormat: (val) => {
    return val.slice(5);
  },
  yAxisMinVal: 0,
  yAxisWidth: 38,
  yAxisFormat: (val) => {
    return val.toFixed(1) + '%';
  },
  yAxisLength: 8,
  animationDuration: 500,
  areaDotLineWidth: 0.8,
  areaStartColor: ['rgba(233, 28, 65, 0.3)'],
  drawResult: (ctx, data, chartParameter) => {
    const { dpi, chartRect } = chartParameter;
    ctx.save();
    ctx.textAlign = 'end';
    ctx.textBaseline = 'top';
    const y = 26 * dpi;
    ctx.fillStyle = '#333333';
    ctx.font = `${12 * dpi}px PingFangSC-Regular,PingFang SC`;
    ctx.fillText(data.xAxisVal, chartRect.endX, y);
    ctx.fillText(data.yAxisVal.toFixed(3) + '%', chartRect.endX - 100 * dpi, y);

    ctx.fillStyle = '#F2F2F2';
    ctx.beginPath();
    ctx.rect(chartRect.endX - 85 * dpi, y, dpi, 12 * dpi);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
};

const newConfig = {
  // title: 'Area',
  // 标题栏高度
  titleBarHeight: 0,
  // canvas 内边距
  canvasPadding: [0, 10],
  // chart 内边距
  chartPadding: [45, 0, 15],
  // canvas 背景
  canvasBg: '#fff',
  // chart 背景
  chartBg: '#fff',
  // 绘制的数据量（倒数）
  drawDataLength: 30,
  // x 轴坐标显示的个数
  xAxisLength: 6,
  // x 轴高度
  xAxisHeight: 38,
  // y 轴坐标显示的个数
  yAxisLength: 1,
  // y 轴宽度
  yAxisWidth: 0,
  // y 轴最小值
  yAxisMinVal: 0,
  // 显示 x 轴辅助线
  showXAxisAuxiliaryLine: false,
  // 显示 y 轴辅助线
  showYAxisAuxiliaryLine: false,
  // 显示小圆点
  areaShowDot: false,
  // 小圆点选中的样式
  areaShowActiveDot: true,
  areaActiveDotFillColor: ['#fff'],
  areaActiveDotStorkColor: ['#FF2D55'],
  areaActiveDotRadius: 3,
  areaActiveDotLineWidth: 3,
  showActiveYSubLine: true,

  showToolTip: true,
  // 线条颜色
  areaLineColor: ['#FF2D55'],
  // 线条宽度
  areaLineWidth: 3,
  // area 起始颜色
  areaStartColor: ['rgba(0, 0, 0, 0)'],
  // area 结束颜色
  areaEndColor: ['rgba(0, 0, 0, 0)'],
  // 坐标样式
  axisStyle: {
    size: 10,
    lineColor: 'rgba(109,109,109, 0.2)',
    splitXAxis: true,
    splitXAxisWidth: 4,
    splitXAxisRadius: 2,
    lineHeavyColor: 'rgba(109,109,109, 1)',
    lineHeight: 8,
    color: '#ACB1C0'
  },
  xAxisFormat: (val) => {
    return val.substr(-5).replace('-', '/');
  },
  resultFormat: (data) => {
    return data.yAxisVal.toFixed(4) + '%';
  },
  adsorptionLast: true,
  // drawResult: function (ctx, data, chartParameter) {
  //   const { dpi, mousePosition, chartRect } = chartParameter;
  //   const { group, xAxisVal, yAxisVal, y } = data;
  //   const text = `第${group + 1}组数据: ${xAxisVal}-${yAxisVal}`;
  //   const size = 14 * dpi
  //   const weight = 600;
  //   const font = 'PingFangSC-Semibold PingFang SC';
  //   const color = '#333';
  //   const offsetX = 20 * dpi;
  //   const maxWidth = 120 * dpi;

  //   let textAlign: CanvasTextAlign = 'start';
  //   let x = mousePosition.x + offsetX;
  //   if (mousePosition.x + maxWidth + offsetX >= chartRect.endX) {
  //     textAlign = 'end'
  //     x = mousePosition.x - offsetX;
  //   }
  //   ctx.save();
  //   ctx.textBaseline = 'middle';
  //   ctx.textAlign = textAlign;
  //   ctx.font = `${weight} ${size}px ${font}`;
  //   ctx.fillStyle = color;
  //   ctx.fillText(text, x, y, maxWidth);
  //   ctx.restore();
  // }
};

const chart = new Area(document.querySelector('.chart') as HTMLElement, newConfig);
chart.updateData(xAxisData, yAxisData);