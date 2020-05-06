---
home: true
heroImage: /imgs/lw-chart.png
heroText: lw-chart
tagline: A lightweight chart implemented by canvas
actionText: Get Started →
actionLink: /en/guide/

features:
- title: Lightweight
  details: Implement chart drawing by Canvas
- title: Configurable
  details: Each item of the chart is configurable
- title: Extendibility
  details: Based on class inheritance, it can be extended flexibly to meet different needs

footer: MIT Licensed | Copyright © 2020-present feiben
---

### Install
```bash
yarn add lw-chart # or: npm install lw-chart
```

### Usage

::: run
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
// Already using the browser version, No need to import Area
// import Area from 'lw-chart/dist/Area.js';
export default {
  methods: {
    run () {
      const xAxisData = [ '5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07' ];
      const yAxisData = [ [ 2, 5, 7, 10, 6, 8, 12 ] ];
      const baseConfig = {
        title: 'lw chart',
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

      const lineChart = new Area(document.querySelector('#chart'), baseConfig);
      lineChart.updateData(xAxisData, yAxisData);
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.run();
    });
  }
}
</script>
<style>
  .chart {
    width: 500px;
    height: 500px;
  }
</style>
```
:::
