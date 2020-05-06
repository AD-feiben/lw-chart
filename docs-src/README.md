---
home: true
heroImage: /imgs/lw-chart.png
heroText: lw-chart
tagline: 一个由canvas实现的轻量级图表
actionText: 快速上手
actionLink: /guide/

features:
- title: 轻量
  details: 由 H5 原生 Canvas 实现图表绘制
- title: 可配置
  details: 图表每项元素均可配置
- title: 易扩展
  details: 基于类继承实现，能够灵活进行扩展，应对不同需求开发

footer: MIT Licensed | Copyright © 2020-present feiben
---

### 安装
```bash
yarn add lw-chart # 或者：npm install lw-chart
```

### 使用

::: run
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
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
