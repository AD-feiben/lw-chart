import Area from '../src/area';
// import lwChart from 'lw-chart';
// const Area = lwChart.Area;
const xAxisData = [
  '5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07',
  '5-08', '5-09', '5-10', '5-11', '5-12', '5-13'
];
const yAxisData = [
  [ 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, 14.6, ]
];
const chart = new Area(document.querySelector('.chart') as HTMLElement, {
  title: 'Area',
  canvasPadding: [10, 20, 10, 10],
  chartPadding: [0, 10],
  canvasBg: '#f2f2f2',
  chartBg: '#fff',
  drawDataLength: 13,
  xAxisLength: 5,
  yAxisLength: 5,
  yAxisMinVal: 0,
  areaDotStorkColor: ['rgba(180, 0, 0, 1)', 'rgba(0, 180, 0, 1)'],
  areaActiveDotFillColor: ['rgba(180, 0, 0, .3)', 'rgba(0, 180, 0, .3)'],
  areaLineColor: ['rgba(180, 0, 0, 1)', 'rgba(0, 180, 0, 1)'],
  areaStartColor: ['rgba(180, 0, 0, 1)', 'rgba(0, 180, 0, 0)'],
  areaEndColor: ['rgba(180, 0, 0, 0)'],
  axisStyle: {
    color: '#999'
  },
  yAxisFormat: (val) => {
    return val.toFixed(2);
  },
  xAxisData,
  yAxisData,
  drawResult: function (ctx, data, chartParameter) {
    const { dpi, mousePosition, chartRect } = chartParameter;
    const { group, xAxisVal, yAxisVal, y } = data;
    const text = `第${group + 1}组数据: ${xAxisVal}-${yAxisVal}`;
    const size = 14 * dpi
    const weight = 600;
    const font = 'PingFangSC-Semibold PingFang SC';
    const color = '#333';
    const offsetX = 20 * dpi;
    const maxWidth = 120 * dpi;

    let textAlign: CanvasTextAlign = 'start';
    let x = mousePosition.x + offsetX;
    if (mousePosition.x + maxWidth + offsetX >= chartRect.endX) {
      textAlign = 'end'
      x = mousePosition.x - offsetX;
    }
    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.textAlign = textAlign;
    ctx.font = `${weight} ${size}px ${font}`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y, maxWidth);
    ctx.restore();
  }
});


console.log(chart);