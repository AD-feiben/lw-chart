import Area from '../src/area';
const chart = new Area(document.querySelector('.chart') as HTMLElement, {
  title: 'Area',
  canvasPadding: [10, 20, 10, 10],
  chartPadding: [0, 10],
  canvasBg: '#f2f2f2',
  chartBg: '#fff',
  drawDataLength: 13,
  xAxisLength: 5,
  yAxisLength: 5,
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
  areaShowDot: false
});

const xAxisData = [
  '5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07',
  '5-08', '5-09', '5-10', '5-11', '5-12', '5-13'
];
const yAxisData = [
  [ 3, 5, 2, 4, 5 ],
  [ 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2 ]
];

chart.updateData(xAxisData, yAxisData);

console.log(chart);