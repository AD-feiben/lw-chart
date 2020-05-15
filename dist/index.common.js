!function(t,i){for(var e in i)t[e]=i[e]}(exports,function(t){var i={};function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)e.d(n,a,function(i){return t[i]}.bind(null,a));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i),e.d(i,"Axis",(function(){return P})),e.d(i,"Area",(function(){return C}));var n="undefined"!=typeof window,a=(!0===n?window.navigator.userAgent:"").toLowerCase(),r=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.length,n=[];for(e>=4&&(n=t.slice(0,4)),3===e&&(n=t.concat(t[1]));n.length<4;)n=n.concat(t);return n.map((function(t){return t*i}))},s=a.indexOf("android")>-1,o=/iphone|ipad|ipod|ios/.test(a),h=s||o,c=function(){return performance?performance.now():Date.now()},l=function(t,i,e,n,a){a>1&&(a=1);var r=1-a;return t*Math.pow(r,3)+3*i*a*Math.pow(r,2)+3*e*Math.pow(a,2)*r+n*Math.pow(a,3)};function u(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:0,y:0},this.dpi=1,this.el=i,this.mergeOptions(e),this.createCanvas(),this.addMoveHandler()}var i,e,a;return i=t,(e=[{key:"createCanvas",value:function(){if(!1!==n){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,e=(window.devicePixelRatio||1)/i;e<1&&(e=1),this.dpi=e/i,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(h){var i=function(t){for(var i=t,e=0,n=0;null!==i;)e+=i.offsetTop,n+=i.offsetLeft,i=i.offsetParent;return{top:e,left:n}}(this.canvas),e=i.top,n=i.left,a=t.changedTouches[0],r=a.pageX,s=a.pageY;this.mousePosition={x:(r-n)*this.dpi,y:(s-e)*this.dpi}}else{var o=t||window.event;o.offsetX||0===o.offsetX?this.mousePosition={x:o.offsetX*this.dpi,y:o.offsetY*this.dpi}:(o.layerX||0===o.layerX)&&(this.mousePosition={x:o.layerX*this.dpi,y:o.layerY*this.dpi})}this.onMove()}}},{key:"addMoveHandler",value:function(){var t=this;if(this.canvas){var i=h?["touchmove","touchend"]:["mousemove"];this.removeMoveHandler(),i.map((function(i){var e,n,a;e=t.canvas,n=i,a=t.handleMove.bind(t),e&&n&&a&&e.addEventListener(n,a,!1)}))}}},{key:"removeMoveHandler",value:function(){var t=this;(h?["touchmove","touchend"]:["mousemove"]).map((function(i){var e,n,a;e=t.canvas,n=i,a=t.handleMove.bind(t),e&&n&&e.removeEventListener(n,a,!1)}))}},{key:"mergeOptions",value:function(t){var i={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer"};this.options=Object.assign({},i,this.options,t);var e=r(this.options.canvasPadding||[0]),n={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:e[3],y:e[0],color:"#333"},a=Object.assign({},n,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=a}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,i){if(this.ctx){var e=i.size,n=i.font,a=i.weight,r=i.color,s=i.x,o=i.y,h=i.maxWidth;e=e||16,n=n||"PingFangSC-Semibold PingFang SC",r=r||"#333",s=s||0,o=o||0,this.ctx.save(),this.ctx.font="".concat(a," ").concat(e,"px ").concat(n),this.ctx.fillStyle=r,this.ctx.fillText(t,s,o,h),this.ctx.restore()}}},{key:"drawLine",value:function(t,i,e,n,a,r){this.ctx&&(this.ctx.save(),this.ctx.fillStyle=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,n),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,i,e,n,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),t=this.fixPixel(t),i=this.fixPixel(i),e=this.fixPixel(e),n=this.fixPixel(n),this.ctx.rect(t,i,e,n),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=r),this.ctx.fillStyle=a,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,i=this.options,e=i.title,n=i.titleStyle;if(this.ctx&&e){var a=Object.assign({},n);["x","y","size","maxWidth"].map((function(i){if("number"==typeof a[i]){var e=a[i];a[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(e,a),this.ctx.restore()}}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&u(i.prototype,e),a&&u(i,a),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return v(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function y(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,i,e){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=w(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function g(t,i){return(g=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function m(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=w(t);if(i){var a=w(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return b(this,e)}}function b(t,i){return!i||"object"!==d(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&g(t,i)}(o,t);var i,e,a,s=m(o);function o(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,o),(e=s.call(this,t,i)).xAxisData=[],e.xAxisHeight=0,e.yAxisData=[],e.yAxisWidth=0,e.minValue=0,e.maxValue=0,e}return i=o,(e=[{key:"initData",value:function(){var t=this,i=this.options,e=i.xAxisData,n=i.yAxisData,a=i.drawDataLength;e=e||[],n=n||[],a=a||7;var r=this.options.yAxisMinVal,s=this.options.yAxisMaxVal,o="number"==typeof r,h="number"==typeof s,c=h?s:0,l=o?r:999999;if(this.xAxisData=e.slice(-a),n.map((function(i,e){t.yAxisData[e]=i.slice(-(a||7)),t.yAxisData[e].map((function(t){t>c&&(c=t),t<l&&(l=t)}))})),l===c){var u=Math.max(5,.1*c);c+=u,l-=u}this.maxValue=h?s:c,this.minValue=o?r:l,this.afterInitData()}},{key:"drawAxis",value:function(){var t=this;if(this.ctx){var i=this.canvasPadding[3],e={startX:i+this.yAxisWidth,startY:this.chartEndY,endX:this.chartEndX,endY:this.chartEndY},n={startX:i+this.yAxisWidth,startY:this.chartStartY,endX:i+this.yAxisWidth,endY:this.chartEndY};this.ctx.clearRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight),this.drawRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight,this.options.canvasBg||"#fff"),this.ctx.clearRect(i,n.startY,this.yAxisWidth,this.chartHeight),this.drawRect(i,n.startY,this.yAxisWidth,this.chartHeight,this.options.canvasBg||"#fff");var a=this.options,r=a.axisStyle,s=a.xAxisLength,o=a.xAxisFormat,h=a.yAxisLength,c=a.yAxisFormat;s=s||10,h=h||10,h--;var l=Object.assign({},r);if(["lineWidth","size"].map((function(i){if("number"==typeof l[i]){var e=l[i];l[i]=e*t.dpi}})),this.drawLine(e.startX,e.startY,e.endX,e.endY,l.lineWidth||1,l.lineColor||"#666"),this.options.showYAxisAuxiliaryLine&&this.drawLine(n.startX,n.startY,n.endX,n.endY,l.lineWidth||1,l.lineColor||"#666"),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="center",this.xAxisHeight>=0){var u=this.xAxisData.length,f=u/s;f=f<2?1:Math.ceil(f);for(var d=0;d<u;d++)if(!(u>s&&d%f!=0)){var x=this.xAxisData[d];x="function"==typeof o?o(x):x;var v=this.getPosX(d),y=this.chartEndY+10*this.dpi;this.drawText(x,{x:v,y:y,color:l.color,size:l.size,font:l.font,weight:"normal"})}}if(this.ctx.textBaseline="middle",this.ctx.textAlign="left",this.yAxisWidth>=0)for(var p=(this.maxValue-this.minValue)/h,g=0;g<=h;g++){var m=p*g+this.minValue,b="function"==typeof c?c(m):m+"",w=this.chartStartX-this.yAxisWidth,P=this.getPosY(m);this.drawText(b,{x:w,y:P,color:l.color,size:l.size,font:l.font,weight:"normal",maxWidth:this.yAxisWidth}),g>0&&this.drawLine(e.startX,P,e.endX,P,l.lineWidth||1,l.lineColor||"#666")}this.ctx.restore()}}},{key:"initSize",value:function(){if(this.canvas&&n){this.canvas.width=this.canvasWidth=this.elWidth*this.dpi,this.canvas.height=this.canvasHeight=this.elHeight*this.dpi,this.canvas.style.width=this.elWidth+"px",this.canvas.style.height=this.elHeight+"px";var t=this.options,i=t.title,e=t.titleBarHeight,a=t.canvasPadding,s=t.chartPadding,o=t.yAxisWidth,h=t.xAxisHeight;a=a||[0],s=s||[0],e=this.formatNumParam(e),o=this.formatNumParam(o),h=this.formatNumParam(h),this.xAxisHeight=h,this.yAxisWidth=o,this.titleBarHeight=i?e:0,this.canvasPadding=r(a,this.dpi);var c=x(this.canvasPadding,4),l=c[0],u=c[1],f=c[2],d=c[3];this.chartPadding=r(s,this.dpi),this.chartWidth=this.canvasWidth-d-u-o,this.chartHeight=this.canvasHeight-this.titleBarHeight-l-f-h,this.chartStartX=d+o,this.chartStartY=l+e,this.chartEndX=this.chartStartX+this.chartWidth,this.chartEndY=this.chartStartY+this.chartHeight}}},{key:"mergeOptions",value:function(t){var i={drawDataLength:7,xAxisHeight:30,xAxisData:[],xAxisLength:10,xAxisFormat:void 0,showYAxisAuxiliaryLine:!0,yAxisWidth:30,yAxisData:[],yAxisLength:10,yAxisFormat:void 0,axisStyle:void 0};this.options=Object.assign({},i,this.options,t);var e=Object.assign({},{lineColor:"#666",lineWidth:1,font:"PingFangSC-Semibold PingFang SC",size:10,color:"#666"},this.options.axisStyle,null==t?void 0:t.axisStyle);this.options.axisStyle=e,p(w(o.prototype),"mergeOptions",this).call(this,t)}},{key:"getPosY",value:function(t){var i=this.chartEndY-this.chartPadding[2],e=this.chartHeight-this.chartPadding[0]-this.chartPadding[2],n=this.maxValue-this.minValue;return i-e*((t-this.minValue)/n)}},{key:"getPosX",value:function(t){return this.chartStartX+this.chartPadding[3]+(this.chartWidth-this.chartPadding[1]-this.chartPadding[3])*(t/(this.xAxisData.length-1))}}])&&y(i.prototype,e),a&&y(i,a),o}(f);function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,i,e){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=k(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function W(t,i){return(W=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function R(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=k(t);if(i){var a=k(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return O(this,e)}}function O(t,i){return!i||"object"!==A(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&W(t,i)}(r,t);var i,e,n,a=R(r);function r(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,r),(e=a.call(this,t,i)).areaLineWidth=0,e.areaDotRadius=0,e.areaDotLineWidth=0,e.areaActiveDotRadius=0,e.pointList=[],e.curveList=[],e.activeData={},e.isFinishedAnimation=!1,e.animationHandle=0,e.handleMoveTimer=0,e.init(i),e}return i=r,(e=[{key:"drawResult",value:function(){var t=this;if(this.ctx){var i=this.options,e=i.showResult,n=i.resultFormat,a=i.resultStyle,r=i.drawResult;if(!1!==e){if("function"==typeof r)return this.ctx.save(),r.call(this,this.ctx,this.activeData,{dpi:this.dpi,mousePosition:this.mousePosition,canvasRect:{startX:0,startY:0,endX:this.canvasWidth,endY:this.canvasHeight,width:this.canvasWidth,height:this.canvasHeight},chartRect:{startX:this.chartStartX,startY:this.chartStartY,endX:this.chartEndX,endY:this.chartEndY,width:this.chartWidth,height:this.chartHeight}}),void this.ctx.restore();var s="function"==typeof n?n(this.activeData):"".concat(this.activeData.xAxisVal," ").concat(this.activeData.yAxisVal),o=Object.assign({},a);["x","y","size","maxWidth"].map((function(i){if("number"==typeof o[i]){var e=o[i];o[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="end",this.drawText(s,o),this.ctx.restore()}}}},{key:"drawDot",value:function(){if(this.ctx&&!(this.pointList.length<=0))for(var t=this.mousePosition,i=t.x,e=t.y,n=0;n<this.pointList.length;n++){var a=this.options.areaDotFillColor||["#fff"],r=this.options.areaDotStorkColor||["rgba(233, 28, 65, 1)"],s=this.options.areaActiveDotFillColor||["rgba(233, 28, 65, 0.3)"];this.ctx.save(),this.ctx.fillStyle=a[n]||a[a.length-1],this.ctx.strokeStyle=r[n]||r[r.length-1],this.ctx.lineWidth=this.areaDotLineWidth;for(var o=this.pointList[n],h=0;h<o.length;h++){var c=o[h];t:if(e>=this.chartStartY&&e<=this.chartEndY&&i>=c.xRange[0]&&i<=c.xRange[1]){if(this.yAxisData.length>1&&(e<c.yRange[0]||e>c.yRange[1]))break t;if(this.activeData={group:n,xAxisVal:this.xAxisData[h],yAxisVal:this.yAxisData[n][h],x:c.x,y:c.y},this.drawResult(),!1===this.options.areaShowDot)break t;this.ctx.save(),this.ctx.beginPath(),this.ctx.fillStyle=s[n]||s[length-1],this.ctx.arc(c.x,c.y,this.areaActiveDotRadius,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}!1!==this.options.areaShowDot&&(this.ctx.beginPath(),this.ctx.arc(c.x,c.y,this.areaDotRadius,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.closePath())}this.ctx.beginPath(),this.ctx.restore()}}},{key:"onMove",value:function(){var t=this;this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.handleMoveTimer=window.setTimeout((function(){t.drawCanvas()}),20)}},{key:"init",value:function(t){this.mergeOptions(t),this.setParamsWithDpi(),this.initSize(),this.initData()}},{key:"mergeOptions",value:function(t){var i,e,n={areaLineColor:["rgba(233, 28, 65, 1)"],areaLineWidth:2,areaStartColor:["rgba(233, 28, 65, 1)"],areaEndColor:["rgba(246, 60, 118, 0)"],areaShowDot:!0,areaDotRadius:2.5,areaDotLineWidth:2,areaDotFillColor:["#fff"],areaDotStorkColor:["rgba(233, 28, 65, 1)"],areaActiveDotRadius:8,areaActiveDotFillColor:["rgba(233, 28, 65, 0.3)"],showResult:!0,resultStyle:void 0,showAnimation:!0,animationDuration:1e3};this.options=Object.assign({},n,this.options);var a={size:12,font:"PingFangSC-Semibold PingFang SC",weight:"normal",x:((null===(i=this.el)||void 0===i?void 0:i.offsetWidth)||30)-30,y:(null===(e=this.options.titleStyle)||void 0===e?void 0:e.y)||20,color:"#666"},s=Object.assign({},a,this.options.resultStyle);this.options.resultStyle=s,D(k(r.prototype),"mergeOptions",this).call(this,t)}},{key:"setParamsWithDpi",value:function(){var t=this.options,i=t.areaLineWidth,e=t.areaDotRadius,n=t.areaDotLineWidth,a=t.areaActiveDotRadius;this.areaLineWidth=this.formatNumParam(i),this.areaDotRadius=this.formatNumParam(e),this.areaDotLineWidth=this.formatNumParam(n),this.areaActiveDotRadius=this.formatNumParam(a)}},{key:"afterInitData",value:function(){var t=this,i=2*this.areaDotRadius,e=1===this.yAxisData.length?(this.getPosX(1)-this.chartStartX)/3:i;this.pointList=this.yAxisData.map((function(n){return n.map((function(n,a){var r=t.getPosX(a),s=t.getPosY(n);return{x:r,y:s,xRange:[r-e,r+e],yRange:[s-i,s+i]}}))}));var n=this.options.animationDuration||1e3;this.curveList=this.pointList.map((function(i){var e=function(t){if(t.length<=0)return[];var i=t.length;return t.map((function(e,n){var a=n===i-1?e:t[n+1],r=e.x,s=e.y,o=a.x,h=a.y,c=Math.abs(o-r)*(1/3);return{start:e,end:a,control1:{x:r+c,y:s},control2:{x:o-c,y:h}}}))}(i),a=e[0],r=e;return t.options.showAnimation&&(r=a?[a]:[]),{segmentAnimateDuration:n/Math.max(i.length-1,1),segmentAnimatePercent:0,segmentAnimateStartTime:c(),animationList:r,list:e}})),this.drawCanvas()}},{key:"drawCanvas",value:function(){var t=!0;this.curveList.map((function(i){var e=i.animationList.length,n=c()-i.segmentAnimateStartTime,a=i.list.length;e<a&&(t=!1),i.segmentAnimatePercent=100*Math.min(1,n/i.segmentAnimateDuration),e<a&&i.segmentAnimatePercent>=100&&(i.animationList.push(i.list[e]),i.segmentAnimatePercent=0,i.segmentAnimateStartTime=c())})),this.isFinishedAnimation=t,this.drawCanvasBg(),this.drawTitle(),this.drawChartBg(),this.drawAxis(),this.drawData(),t||(this.animationHandle=requestAnimationFrame(this.drawCanvas.bind(this)))}},{key:"drawData",value:function(){var t=this;this.curveList.length<=0||(this.curveList.map((function(i,e){if(t.ctx&&!(i.animationList.length<=0)){var n=i.animationList,a=i.segmentAnimatePercent,r=n[0],s=n.length,o=n[s-1],h=o.end.x,c=o.end.y,u=t.options.areaLineColor||["rgba(233, 28, 65, 1)"],f=t.options.areaStartColor||["rgba(233, 28, 65, 1)"],d=t.options.areaEndColor||["rgba(246, 60, 118, 0)"];t.ctx.save(),t.ctx.strokeStyle=u[e]||u[u.length-1],t.ctx.lineCap="round",t.ctx.lineWidth=t.areaLineWidth,t.ctx.beginPath(),t.ctx.moveTo(r.start.x,r.start.y);for(var x=0;x<s-1;x++){var v=n[x];t.ctx.bezierCurveTo(v.control1.x,v.control1.y,v.control2.x,v.control2.y,v.end.x,v.end.y)}if(t.isFinishedAnimation)t.ctx.bezierCurveTo(o.control1.x,o.control1.y,o.control2.x,o.control2.y,o.end.x,o.end.y),h=o.end.x,c=o.end.y;else for(var y=0;y<=a/100;y+=.1)h=l(o.start.x,o.control1.x,o.control2.x,o.end.x,y),c=l(o.start.y,o.control1.y,o.control2.y,o.end.y,y),t.ctx.lineTo(h,c);t.ctx.stroke();var p=t.chartEndY-t.chartPadding[2],g=t.ctx.createLinearGradient(0,0,0,p);g.addColorStop(0,f[e]||f[f.length-1]),g.addColorStop(1,d[e]||d[d.length-1]),t.ctx.lineTo(h,c),t.ctx.lineTo(h,p),t.ctx.lineTo(r.start.x,p),t.ctx.lineTo(r.start.x,r.start.y),t.ctx.fillStyle=g,t.ctx.fill(),t.ctx.closePath(),t.ctx.restore()}})),this.isFinishedAnimation&&this.drawDot())}},{key:"forceUpdate",value:function(t){this.init(t)}},{key:"updateData",value:function(t,i){t&&(this.options.xAxisData=t),this.yAxisWidth&&(this.options.yAxisData=i),this.initData()}},{key:"destroy",value:function(){this.animationHandle&&window.cancelAnimationFrame(this.animationHandle),this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.removeMoveHandler(),this.canvas&&this.el.removeChild(this.canvas)}}])&&S(i.prototype,e),n&&S(i,n),r}(P);i.default=f}]));