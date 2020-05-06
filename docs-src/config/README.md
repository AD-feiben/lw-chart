# 配置

## 了解 Canvas 布局

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
      const xAxisData = [ '1', '2', '3' ];
      const yAxisData = [ [ 7, 10, 6 ] ];
      const baseConfig = {
        title: 'Canvas 布局',
        titleBarHeight: 50,
        titleStyle: {
          color: '#fff'
        },
        canvasPadding: [30],
        canvasBg: '#000',
        chartPadding: [30],
        chartBg: '#fff',
        axisStyle: {
          color: '#fff',
          size: 14,
          lineColor: '#f2f2f2'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisLength: 5,
        yAxisFormat: (val) => {
          return val.toFixed(2);
          // return 'Y Axis Label';
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
    width: 500px;
    height: 500px;
  }
</style>
```
:::

通过上面的 demo 来了解 Canvas 的布局以及 `LWChart` 类的一些公共参数。

**其中黑色部分定义为 canvas，与 canvas 相关的参数如下:**

|     属性      |                      描述                       |   类型   | 默认值 |
| :------------ | :---------------------------------------------- | :------: | -----: |
| canvasPadding | 用于设置 canvas 内边距，类似于 css 中的 padding | number[] |    [0] |
| canvasBg      | 用于设置 canvas 背景                            |  string  | '#fff' |


<br>
<br>

**其中白色部分定义为 chart，与 chart 相关的参数如下:**
|     属性     |           描述            |   类型   |  默认值   |
| :----------- | :------------------------ | :------: | --------: |
| chartPadding | 用于设置 chart 内边距     | number[] |       [0] |
| chartBg      | 用于设置 chart 背景       |  string  |    '#fff' |
| chartCursor  | 鼠标在 chart 范围内的样式 |  string  | 'pointer' |
<br>
<br>

**左上角的 `Canvas 布局` 称为 title，与 title 相关的参数如下：**

|      属性      |              描述              |       类型       |      默认值       |
| :------------- | :----------------------------- | :--------------: | ----------------: |
| title          | 图表标题                       |      string      |                '' |
| titleBarHeight | 标题栏高度, title 不为空时生效 |      number      |                30 |
| titleStyle     | 标题样式                       | LWChartTextStyle | defaultTitleStyle |

<br>
<br>

**`LWChartTextStyle` 有以下字段，以默认标题样式 `defaultTitleStyle` 为例**

|  属性  |   描述   |       类型        |              默认值               |
| :----- | :------- | :---------------: | --------------------------------: |
| size   | 字体大小 |      number       |                                18 |
| font   | 字体     |      string       | 'PingFangSC-Semibold PingFang SC' |
| weight | 字体加粗 | LWChartTextWeight |                            'bold' |
| x      | x轴坐标  |      number       |                  canvasPadding[3] |
| y      | y轴坐标  |      number       |                  canvasPadding[0] |
| color  | 字体颜色 |      string       |                            '#333' |


LWChartTextWeight 可选值如下：

```ts
type LWChartTextWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
```


:::tip
title 绘制的对齐方式如下：

textBaseline = 'top';

textAlign = 'start';
:::


::: tip
chart 宽高受 canvasPadding、titleBarHeight 影响，对于不同类型的图表，影响 chart 尺寸的参数还不止这两个。

例如 demo 中还有 x 轴高度，y 轴宽度影响了 chart 的宽高。这两个参数不属于 `LWChart` 类，所以留在 `Axis` 类中说明。
:::
