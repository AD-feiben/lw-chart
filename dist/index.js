!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.index=i():t.index=i()}(window,(function(){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)e.d(n,a,function(i){return t[i]}.bind(null,a));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=4)}([function(t,i,e){"use strict";e.d(i,"e",(function(){return n})),e.d(i,"b",(function(){return r})),e.d(i,"f",(function(){return h})),e.d(i,"i",(function(){return c})),e.d(i,"h",(function(){return l})),e.d(i,"g",(function(){return u})),e.d(i,"d",(function(){return f})),e.d(i,"c",(function(){return d})),e.d(i,"a",(function(){return x}));var n="undefined"!=typeof window,a=(!0===n?window.navigator.userAgent:"").toLowerCase(),r=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.length,n=[];for(e>=4&&(n=t.slice(0,4)),3===e&&(n=t.concat(t[1]));n.length<4;)n=n.concat(t);return n.map((function(t){return t*i}))},o=a.indexOf("android")>-1,s=/iphone|ipad|ipod|ios/.test(a),h=o||s,c=function(t,i,e){t&&i&&e&&t.addEventListener(i,e,!1)},l=function(t,i,e){t&&i&&t.removeEventListener(i,e,!1)},u=function(){return performance?performance.now():Date.now()},f=function(t){for(var i=t,e=0,n=0;null!==i;)e+=i.offsetTop,n+=i.offsetLeft,i=i.offsetParent;return{top:e,left:n}},d=function(t){if(t.length<=0)return[];var i=t.length;return t.map((function(e,n){var a=n===i-1?e:t[n+1],r=e.x,o=e.y,s=a.x,h=a.y,c=Math.abs(s-r);return{start:e,end:a,control1:{x:r+c*(1/3),y:o},control2:{x:s-c*(1/3),y:h}}}))},x=function(t,i,e,n,a){a>1&&(a=1);var r=1-a;return t*Math.pow(r,3)+3*i*a*Math.pow(r,2)+3*e*Math.pow(a,2)*r+n*Math.pow(a,3)}},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return r}));var n=e(0);function a(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:0,y:0},this.dpi=1,this.el=i,this.mergeOptions(e),this.createCanvas(),this.addMoveHandler()}var i,e,r;return i=t,(e=[{key:"createCanvas",value:function(){if(!1!==n.e){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,e=(window.devicePixelRatio||1)/i;e<1&&(e=1),this.dpi=e/i,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(n.f){var i=Object(n.d)(this.canvas),e=i.top,a=i.left,r=t.targetTouches[0],o=r.pageX,s=r.pageY;this.mousePosition={x:(o-a)*this.dpi,y:(s-e)*this.dpi}}else{var h=t||window.event;h.offsetX||0===h.offsetX?this.mousePosition={x:h.offsetX*this.dpi,y:h.offsetY*this.dpi}:(h.layerX||0===h.layerX)&&(this.mousePosition={x:h.layerX*this.dpi,y:h.layerY*this.dpi})}this.onMove()}}},{key:"addMoveHandler",value:function(){if(this.canvas){var t=n.f?"touchmove":"mousemove";this.removeMoveHandler(),Object(n.i)(this.canvas,t,this.handleMove.bind(this))}}},{key:"removeMoveHandler",value:function(){var t=n.f?"touchmove":"mousemove";Object(n.h)(this.canvas,t,this.handleMove.bind(this))}},{key:"mergeOptions",value:function(t){var i={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer"};this.options=Object.assign({},i,this.options,t);var e=Object(n.b)(this.options.canvasPadding||[0]),a={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:e[3],y:e[0],color:"#333"},r=Object.assign({},a,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=r}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,i){if(this.ctx){var e=i.size,n=i.font,a=i.weight,r=i.color,o=i.x,s=i.y,h=i.maxWidth;e=e||16,n=n||"PingFangSC-Semibold PingFang SC",r=r||"#333",o=o||0,s=s||0,this.ctx.save(),this.ctx.font="".concat(a," ").concat(e,"px ").concat(n),this.ctx.fillStyle=r,this.ctx.fillText(t,o,s,h),this.ctx.restore()}}},{key:"drawLine",value:function(t,i,e,n,a,r){this.ctx&&(this.ctx.save(),this.ctx.fillStyle=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,n),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,i,e,n,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),t=this.fixPixel(t),i=this.fixPixel(i),e=this.fixPixel(e),n=this.fixPixel(n),this.ctx.rect(t,i,e,n),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=r),this.ctx.fillStyle=a,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,i=this.options,e=i.title,n=i.titleStyle,a=Object.assign({},n);["x","y","size","maxWidth"].map((function(i){if("number"==typeof a[i]){var e=a[i];a[i]=e*t.dpi}})),this.ctx&&e&&(this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(e,a),this.ctx.restore())}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&a(i.prototype,e),r&&a(i,r),t}()},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return x}));var n=e(1),a=e(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return s(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function h(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,i,e){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=d(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function l(t,i){return(l=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function u(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=d(t);if(i){var a=d(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f(this,e)}}function f(t,i){return!i||"object"!==r(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&l(t,i)}(s,t);var i,e,n,r=u(s);function s(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,s),(e=r.call(this,t,i)).xAxisData=[],e.xAxisHeight=0,e.yAxisData=[],e.yAxisWidth=0,e.minValue=0,e.maxValue=0,e}return i=s,(e=[{key:"initData",value:function(){var t=this,i=this.options,e=i.xAxisData,n=i.yAxisData,a=i.drawDataLength;e=e||[],n=n||[],a=a||7;var r=0,o=999999;this.xAxisData=e.slice(-a),n.map((function(i,e){t.yAxisData[e]=i.slice(-(a||7)),t.yAxisData[e].map((function(t){t>r&&(r=t),t<o&&(o=t)}))})),o===r&&(r=o+10),this.maxValue=r,this.minValue=o,this.afterInitData()}},{key:"drawAxis",value:function(){var t=this;if(this.ctx){var i=this.canvasPadding[3],e={startX:i+this.yAxisWidth,startY:this.chartEndY,endX:this.chartEndX,endY:this.chartEndY},n={startX:i+this.yAxisWidth,startY:this.chartStartY,endX:i+this.yAxisWidth,endY:this.chartEndY};this.ctx.clearRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight),this.drawRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight,this.options.canvasBg||"#fff"),this.ctx.clearRect(i,n.startY,this.yAxisWidth,this.chartHeight),this.drawRect(i,n.startY,this.yAxisWidth,this.chartHeight,this.options.canvasBg||"#fff");var a=this.options,r=a.axisStyle,o=a.xAxisLength,s=a.xAxisFormat,h=a.yAxisLength,c=a.yAxisFormat;o=o||10,h=h||10,h--;var l=Object.assign({},r);if(["lineWidth","size"].map((function(i){if("number"==typeof l[i]){var e=l[i];l[i]=e*t.dpi}})),this.drawLine(e.startX,e.startY,e.endX,e.endY,l.lineWidth||1,l.lineColor||"#666"),this.drawLine(n.startX,n.startY,n.endX,n.endY,l.lineWidth||1,l.lineColor||"#666"),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="center",this.xAxisHeight>=0){var u=this.xAxisData.length,f=u/o;f=f<2?1:Math.ceil(f);for(var d=0;d<u;d++)if(!(u>o&&d%f!=0)){var x=this.xAxisData[d];x="function"==typeof s?s(x):x;var v=this.getPosX(d),y=this.chartEndY+10*this.dpi;this.drawText(x,{x:v,y:y,color:l.color,size:l.size,font:l.font,weight:"normal"})}}if(this.ctx.textBaseline="middle",this.ctx.textAlign="left",this.yAxisWidth>=0)for(var p=(this.maxValue-this.minValue)/h,g=0;g<=h;g++){var m=p*g+this.minValue,b="function"==typeof c?c(m):m+"",w=this.chartStartX-this.yAxisWidth,P=this.getPosY(m);this.drawText(b,{x:w,y:P,color:l.color,size:l.size,font:l.font,weight:"normal",maxWidth:this.yAxisWidth}),g>0&&this.drawLine(e.startX,P,e.endX,P,l.lineWidth||1,l.lineColor||"#666")}this.ctx.restore()}}},{key:"initSize",value:function(){if(this.canvas&&a.e){this.canvas.width=this.canvasWidth=this.elWidth*this.dpi,this.canvas.height=this.canvasHeight=this.elHeight*this.dpi,this.canvas.style.width=this.elWidth+"px",this.canvas.style.height=this.elHeight+"px";var t=this.options,i=t.title,e=t.titleBarHeight,n=t.canvasPadding,r=t.chartPadding,s=t.yAxisWidth,h=t.xAxisHeight;n=n||[0],r=r||[0],e=this.formatNumParam(e),s=this.formatNumParam(s),h=this.formatNumParam(h),this.xAxisHeight=h,this.yAxisWidth=s,this.titleBarHeight=i?e:0,this.canvasPadding=Object(a.b)(n,this.dpi);var c=o(this.canvasPadding,4),l=c[0],u=c[1],f=c[2],d=c[3];this.chartPadding=Object(a.b)(r,this.dpi),this.chartWidth=this.canvasWidth-d-u-s,this.chartHeight=this.canvasHeight-this.titleBarHeight-l-f-h,this.chartStartX=d+s,this.chartStartY=l+e,this.chartEndX=this.chartStartX+this.chartWidth,this.chartEndY=this.chartStartY+this.chartHeight}}},{key:"mergeOptions",value:function(t){c(d(s.prototype),"mergeOptions",this).call(this,t);var i={drawDataLength:7,xAxisHeight:30,xAxisData:[],xAxisLength:10,xAxisFormat:void 0,yAxisWidth:30,yAxisData:[],yAxisLength:10,yAxisFormat:void 0,axisStyle:void 0};this.options=Object.assign({},i,this.options,t);var e=Object.assign({},{lineColor:"#666",lineWidth:1,font:"PingFangSC-Semibold PingFang SC",size:10,color:"#666"},this.options.axisStyle,null==t?void 0:t.axisStyle);this.options.axisStyle=e}},{key:"getPosY",value:function(t){var i=this.chartEndY-this.chartPadding[2],e=this.chartHeight-this.chartPadding[0]-this.chartPadding[2],n=this.maxValue-this.minValue;return i-e*((t-this.minValue)/n)}},{key:"getPosX",value:function(t){return this.chartStartX+this.chartPadding[3]+(this.chartWidth-this.chartPadding[1]-this.chartPadding[3])*(t/(this.xAxisData.length-1))}},{key:"forceUpdate",value:function(t){this.init(t)}},{key:"updateData",value:function(t,i){t&&(this.options.xAxisData=t),this.yAxisWidth&&(this.options.yAxisData=i),this.initData()}}])&&h(i.prototype,e),n&&h(i,n),s}(n.default)},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return u}));var n=e(0);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,i,e){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=l(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function s(t,i){return(s=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function h(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=l(t);if(i){var a=l(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return c(this,e)}}function c(t,i){return!i||"object"!==a(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&s(t,i)}(u,t);var i,e,a,c=h(u);function u(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this,t,i)).areaLineWidth=0,e.areaDotRadius=0,e.areaDotLineWidth=0,e.areaActiveDotRadius=0,e.pointList=[],e.curveList=[],e.activeData={},e.isFinishedAnimation=!1,e.animationHandle=0,e.handleMoveTimer=0,e.init(i),e}return i=u,(e=[{key:"drawResult",value:function(){var t=this;if(this.ctx){var i=this.options,e=i.showResult,n=i.resultFormat,a=i.resultStyle,r=i.drawResult;if(!1!==e){if("function"==typeof r)return this.ctx.save(),r.call(this,this.ctx,this.activeData),void this.ctx.restore();var o="function"==typeof n?n(this.activeData):"".concat(this.activeData.xAxisVal," ").concat(this.activeData.yAxisVal),s=Object.assign({},a);["x","y","size","maxWidth"].map((function(i){if("number"==typeof s[i]){var e=s[i];s[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="end",this.drawText(o,s),this.ctx.restore()}}}},{key:"drawDot",value:function(){if(this.ctx&&!(this.pointList.length<=0))for(var t=this.mousePosition,i=t.x,e=t.y,n=0;n<this.pointList.length;n++){var a=this.options.areaDotFillColor||["#fff"],r=this.options.areaDotStorkColor||["rgba(233, 28, 65, 1)"],o=this.options.areaActiveDotFillColor||["rgba(233, 28, 65, 0.3)"];this.ctx.save(),this.ctx.fillStyle=a[n]||a[a.length-1],this.ctx.strokeStyle=r[n]||r[r.length-1],this.ctx.lineWidth=this.areaDotLineWidth;for(var s=this.pointList[n],h=0;h<s.length;h++){var c=s[h];t:if(e>=this.chartStartY&&e<=this.chartEndY&&i>=c.xRange[0]&&i<=c.xRange[1]){if(this.yAxisData.length>1&&(e<c.yRange[0]||e>c.yRange[1]))break t;if(this.activeData={group:n,xAxisVal:this.xAxisData[h],yAxisVal:this.yAxisData[n][h]},this.drawResult(),!1===this.options.areaShowDot)break t;this.ctx.save(),this.ctx.beginPath(),this.ctx.fillStyle=o[n]||o[length-1],this.ctx.arc(c.x,c.y,this.areaActiveDotRadius,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}!1!==this.options.areaShowDot&&(this.ctx.beginPath(),this.ctx.arc(c.x,c.y,this.areaDotRadius,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.closePath())}this.ctx.beginPath(),this.ctx.restore()}}},{key:"onMove",value:function(){var t=this;this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.handleMoveTimer=window.setTimeout((function(){t.drawCanvas()}),20)}},{key:"init",value:function(t){this.mergeOptions(t),this.setParamsWithDpi(),this.initSize(),this.initData()}},{key:"mergeOptions",value:function(t){var i,e;o(l(u.prototype),"mergeOptions",this).call(this,t);var n={areaLineColor:["rgba(233, 28, 65, 1)"],areaLineWidth:2,areaStartColor:["rgba(233, 28, 65, 1)"],areaEndColor:["rgba(246, 60, 118, 0)"],areaShowDot:!0,areaDotRadius:2.5,areaDotLineWidth:2,areaDotFillColor:["#fff"],areaDotStorkColor:["rgba(233, 28, 65, 1)"],areaActiveDotRadius:8,areaActiveDotFillColor:["rgba(233, 28, 65, 0.3)"],showResult:!0,resultStyle:void 0,showAnimation:!0,animationDuration:1e3};this.options=Object.assign({},n,this.options);var a={size:12,font:"PingFangSC-Semibold PingFang SC",weight:"normal",x:((null===(i=this.el)||void 0===i?void 0:i.offsetWidth)||30)-30,y:(null===(e=this.options.titleStyle)||void 0===e?void 0:e.y)||20,color:"#666"},r=Object.assign({},a,this.options.resultStyle);this.options.resultStyle=r}},{key:"setParamsWithDpi",value:function(){var t=this.options,i=t.areaLineWidth,e=t.areaDotRadius,n=t.areaDotLineWidth,a=t.areaActiveDotRadius;this.areaLineWidth=this.formatNumParam(i),this.areaDotRadius=this.formatNumParam(e),this.areaDotLineWidth=this.formatNumParam(n),this.areaActiveDotRadius=this.formatNumParam(a)}},{key:"afterInitData",value:function(){var t=this,i=2*this.areaDotRadius,e=1===this.yAxisData.length?(this.getPosX(1)-this.chartStartX)/3:i;this.pointList=this.yAxisData.map((function(n){return n.map((function(n,a){var r=t.getPosX(a),o=t.getPosY(n);return{x:r,y:o,xRange:[r-e,r+e],yRange:[o-i,o+i]}}))}));var a=this.options.animationDuration||1e3;this.curveList=this.pointList.map((function(i){var e=Object(n.c)(i),r=e[0],o=e;return t.options.showAnimation&&(o=r?[r]:[]),{segmentAnimateDuration:a/Math.max(i.length-1,1),segmentAnimatePercent:0,segmentAnimateStartTime:Object(n.g)(),animationList:o,list:e}})),this.drawCanvas()}},{key:"drawCanvas",value:function(){var t=!0;this.curveList.map((function(i){var e=i.animationList.length,a=Object(n.g)()-i.segmentAnimateStartTime,r=i.list.length;e<r&&(t=!1),i.segmentAnimatePercent=100*Math.min(1,a/i.segmentAnimateDuration),e<r&&i.segmentAnimatePercent>=100&&(i.animationList.push(i.list[e]),i.segmentAnimatePercent=0,i.segmentAnimateStartTime=Object(n.g)())})),this.isFinishedAnimation=t,this.drawCanvasBg(),this.drawTitle(),this.drawChartBg(),this.drawAxis(),this.drawData(),t||(this.animationHandle=requestAnimationFrame(this.drawCanvas.bind(this)))}},{key:"drawData",value:function(){var t=this;this.curveList.length<=0||(this.curveList.map((function(i,e){if(t.ctx&&!(i.animationList.length<=0)){var a=i.animationList,r=i.segmentAnimatePercent,o=a[0],s=a.length,h=a[s-1],c=h.end.x,l=h.end.y,u=t.options.areaLineColor||["rgba(233, 28, 65, 1)"],f=t.options.areaStartColor||["rgba(233, 28, 65, 1)"],d=t.options.areaEndColor||["rgba(246, 60, 118, 0)"];t.ctx.save(),t.ctx.strokeStyle=u[e]||u[u.length-1],t.ctx.lineCap="round",t.ctx.lineWidth=t.areaLineWidth,t.ctx.beginPath(),t.ctx.moveTo(o.start.x,o.start.y);for(var x=0;x<s-1;x++){var v=a[x];t.ctx.bezierCurveTo(v.control1.x,v.control1.y,v.control2.x,v.control2.y,v.end.x,v.end.y)}if(t.isFinishedAnimation)t.ctx.bezierCurveTo(h.control1.x,h.control1.y,h.control2.x,h.control2.y,h.end.x,h.end.y),c=h.end.x,l=h.end.y;else for(var y=0;y<=r/100;y+=.1)c=Object(n.a)(h.start.x,h.control1.x,h.control2.x,h.end.x,y),l=Object(n.a)(h.start.y,h.control1.y,h.control2.y,h.end.y,y),t.ctx.lineTo(c,l);t.ctx.stroke();var p=t.chartEndY-t.chartPadding[2],g=t.ctx.createLinearGradient(0,0,0,p);g.addColorStop(0,f[e]||f[f.length-1]),g.addColorStop(1,d[e]||d[d.length-1]),t.ctx.lineTo(c,l),t.ctx.lineTo(c,p),t.ctx.lineTo(o.start.x,p),t.ctx.lineTo(o.start.x,o.start.y),t.ctx.fillStyle=g,t.ctx.fill(),t.ctx.closePath(),t.ctx.restore()}})),this.isFinishedAnimation&&this.drawDot())}},{key:"destroy",value:function(){this.animationHandle&&window.cancelAnimationFrame(this.animationHandle),this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.removeMoveHandler()}}])&&r(i.prototype,e),a&&r(i,a),u}(e(2).default)},function(t,i,e){"use strict";e.r(i);var n=e(1),a=e(2),r=e(3);i.default={LWChart:n.default,Axis:a.default,Area:r.default}}]).default}));