# 快速上手

## 介绍

lw-chart 使用 TypeScript 编写，npm 包中提供了 d.ts 的声明文件，对 TS 项目支持更加友好。

当然了，lw-chart 不受限于前端框架，对任意前端项目均可支持。

lw-chart 目前没有 CDN 版本，对于 script 标签引用，需要从 npm 下载后导入。

```html
<script src="lw-chart/dist/Area.js"></script>
<script>
  new Area(element, config);
</script>
```

npm 包的目录结构如下如下：

```bash
lw-chart
├── LICENSE
├── README.md
├── dist
│   ├── Area.js
│   ├── Axis.js
│   ├── LWChart.js
│   └── index.js
├── package.json
├── src
│   ├── area.ts
│   ├── axis.ts
│   ├── index.ts
│   ├── lw-chart.ts
│   └── utils
│       ├── index.ts
│       └── interfaces.ts
└── types
    ├── area.d.ts
    ├── axis.d.ts
    ├── index.d.ts
    ├── lw-chart.d.ts
    └── utils
        ├── index.d.ts
        └── interfaces.d.ts
```

LWChart 为基类，主要用于创建 canvas 标签、获取 dpi、提供基本的绘制方法等。

Axis 为坐标轴类，通过配置参数初始化 canvas 以及 chart 的尺寸、初始化图表数据、 绘制坐标轴等。

Area 为实现类，将 Axis 类处理后的数据换算为坐标进行绘制。

::: tip

Area 类不满足需求时，可继承 LWChart 或 Axis 开发新的图表。

其中 index.js 中包含 LWChart、Axis、Area 类，体积相对较大，尽量避免直接使用 index.js。

:::

## 安装

```bash
yarn add lw-chart

# npm install lw-chart --save
```

## 基础用法

::: run
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
// 已使用浏览器版本，无需导入 Area
// import Area from 'lw-chart/dist/Area.js';
export default {
  methods: {
    run () {
      const xAxisData = [ '5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07' ];
      const yAxisData = [ [ 2, 5, 7, 10, 6, 8, 12 ] ];
      const baseConfig = {
        title: '基础用法',
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData
      };

      const lineChart = new Area(document.querySelector('#chart'), baseConfig);
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
    width: 300px;
    height: 300px;
  }
</style>
```
:::

Area 类接收两个参数，第一个参数是 HTMLElement 作为 Canvas 的容器，Area 会获取容器元素的宽高进行填充。

第二个参数为可选参数，用于配置 Canvas 的渲染。关于参数定义可查看<a :href="$withBase('/config')">配置</a>。
