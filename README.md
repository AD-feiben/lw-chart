<center>
  <img alt="lw-chart" src="./docs/imgs/lw-chart.png" width="120px">
</center>

# lw-chart

A lightweight chart implemented by canvas.

<center>

![license](https://img.shields.io/github/license/ad-feiben/lw-chart.svg)

</center>

## Install

```bash
$ npm i lw-chart
```

## Usage

```js
// import { Area } from 'lw-chart';
import Area from 'lw-chart/dist/Area.js';

const xAxisData = [ '5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07' ];
const yAxisData = [ [ 2, 5, 7, 10, 6, 8, 12 ] ];

const baseConfig = {
  title: 'Line Mode',
  canvasPadding: [10, 30, 10, 20],
  chartPadding: [10],
  canvasBg: '#f2f2f2',
  chartBg: '#fff',
  areaLineColor: ['rgba(255, 71, 87,1.0)'],
  areaDotStorkColor: ['rgba(255, 71, 87,1.0)'],
  areaActiveDotFillColor: ['rgba(255, 71, 87,.3)'],
  areaStartColor: ['rgba(0, 0, 0, 0)'],
  areaEndColor: ['rgba(0, 0, 0, 0)'],
  yAxisFormat: (val) => {
    return val.toFixed(2);
  }
};

const lineChart = new Area(document.querySelector('.line-chart'), baseConfig);
lineChart.updateData(xAxisData, yAxisData);
```

## Document

[Document](https://ad-feiben.github.io/lw-chart/docs)

## Demo

[Demo](https://ad-feiben.github.io/lw-chart/demo/index.html)

## Official Account

微信公众号【前端develop】

![前端develop](https://ad-feiben.github.io/imgs/qrcode.png)



