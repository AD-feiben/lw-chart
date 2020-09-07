!function(t,i){for(var e in i)t[e]=i[e]}(exports,function(t){var i={};function e(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=i,e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(a,n,function(i){return t[i]}.bind(null,n));return a},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i),e.d(i,"Axis",(function(){return C})),e.d(i,"Area",(function(){return j}));var a="undefined"!=typeof window,n=(!0===a?window.navigator.userAgent:"").toLowerCase(),r=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.length,a=[];for(e>=4&&(a=t.slice(0,4)),3===e&&(a=t.concat(t[1]));a.length<4;)a=a.concat(t);return a.map((function(t){return t*i}))},o=n.indexOf("android")>-1,s=/iphone|ipad|ipod|ios/.test(n),h=o||s,c=function(t,i,e){t&&i&&e&&t.addEventListener(i,e,!1)},l=function(t,i,e){t&&i&&t.removeEventListener(i,e,!1)},u=function(){return performance?performance.now():Date.now()},f=function(t,i,e,a){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),r=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),o=n/(n+r),s=r/(n+r),h=a*(o=isNaN(o)?0:o),c=a*(s=isNaN(s)?0:s);return{previous:{x:i.x-h*(e.x-t.x),y:i.y-h*(e.y-t.y)},next:{x:i.x+c*(e.x-t.x),y:i.y+c*(e.y-t.y)}}},d=function(t,i,e){return Math.max(Math.min(t,e),i)},v=function(t,i,e,a,n){n>1&&(n=1);var r=1-n;return t*Math.pow(r,3)+3*i*n*Math.pow(r,2)+3*e*Math.pow(n,2)*r+a*Math.pow(n,3)};function x(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var p=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:-1,y:-1},this.mouseInCanvas=!1,this.dpi=1,this.el=i,this.mergeOptions(e),this.createCanvas(),this.options.addTouchEvent&&this.addEventHandler()}var i,e,n;return i=t,(e=[{key:"createCanvas",value:function(){if(!1!==a){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,e=(window.devicePixelRatio||1)/i;e<1&&(e=1),this.dpi=e/i,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(h){var i=function(t){for(var i=t,e=0,a=0;null!==i;)e+=i.offsetTop,a+=i.offsetLeft,i=i.offsetParent;return{top:e,left:a}}(this.canvas),e=i.top,a=i.left,n=t.changedTouches[0],r=n.pageX,o=n.pageY;this.mousePosition={x:(r-a)*this.dpi,y:(o-e)*this.dpi}}else{var s=t||window.event;s.offsetX||0===s.offsetX?this.mousePosition={x:s.offsetX*this.dpi,y:s.offsetY*this.dpi}:(s.layerX||0===s.layerX)&&(this.mousePosition={x:s.layerX*this.dpi,y:s.layerY*this.dpi})}this.mouseInCanvas=!0,this.onMove()}}},{key:"handleMouseLeaveCanvas",value:function(){this.mouseInCanvas=!1,this.onMouseLeave()}},{key:"addEventHandler",value:function(){var t=this;if(this.canvas){var i=h?["touchmove","touchend"]:["mousemove"],e=h?["touchend"]:["mouseleave"];this.removeEventHandler(),i.map((function(i){c(t.canvas,i,t.handleMove.bind(t))})),e.map((function(i){c(t.canvas,i,t.handleMouseLeaveCanvas.bind(t))}))}}},{key:"removeEventHandler",value:function(){var t=this,i=h?["touchend"]:["mouseleave"];(h?["touchmove","touchend"]:["mousemove"]).map((function(i){l(t.canvas,i,t.handleMove.bind(t))})),i.map((function(i){l(t.canvas,i,t.handleMouseLeaveCanvas.bind(t))}))}},{key:"mergeOptions",value:function(t){var i={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer",addTouchEvent:!0};this.options=Object.assign({},i,this.options,t);var e=r(this.options.canvasPadding||[0]),a={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:e[3],y:e[0],color:"#333"},n=Object.assign({},a,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=n}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,i){if(this.ctx){var e=i.size,a=i.font,n=i.weight,r=i.color,o=i.x,s=i.y,h=i.maxWidth;e=e||16,a=a||"PingFangSC-Semibold PingFang SC",r=r||"#333",o=o||0,s=s||0,this.ctx.save(),this.ctx.font="".concat(n," ").concat(e,"px ").concat(a),this.ctx.fillStyle=r,this.ctx.fillText(t,o,s,h),this.ctx.restore()}}},{key:"drawLine",value:function(t,i,e,a,n,r,o){this.ctx&&(this.ctx.save(),o&&this.ctx.setLineDash(o),this.ctx.fillStyle=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=n,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,a),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,i,e,a,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t,i,e,a),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=r),this.ctx.fillStyle=n,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,i=this.options,e=i.title,a=i.titleStyle;if(this.ctx&&e){var n=Object.assign({},a);["x","y","size","maxWidth"].map((function(i){if("number"==typeof n[i]){var e=n[i];n[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(e,n),this.ctx.restore()}}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&x(i.prototype,e),n&&x(i,n),t}();function y(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],a=!0,n=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(e.push(o.value),!i||e.length!==i);a=!0);}catch(t){n=!0,r=t}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return m(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,a=new Array(i);e<i;e++)a[e]=t[e];return a}var g=function(t,i,e,a,n,r,o){t.save(),t.translate(i,e),function(t,i,e,a){var n=y(a,4),r=n[0],o=n[1],s=n[2],h=n[3];t.beginPath(),t.arc(i-s,e-s,s,0,Math.PI/2),t.lineTo(h,e),t.arc(h,e-h,h,Math.PI/2,Math.PI),t.lineTo(0,r),t.arc(r,r,r,Math.PI,3*Math.PI/2),t.lineTo(i-o,0),t.arc(i-o,o,o,3*Math.PI/2,2*Math.PI),t.lineTo(i,e-o),t.closePath()}(t,a,n,r),t.fillStyle=o,t.fill(),t.restore()};function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],a=!0,n=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(e.push(o.value),!i||e.length!==i);a=!0);}catch(t){n=!0,r=t}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return A(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,a=new Array(i);e<i;e++)a[e]=t[e];return a}function P(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function S(t,i,e){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var a=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=T(t)););return t}(t,i);if(a){var n=Object.getOwnPropertyDescriptor(a,i);return n.get?n.get.call(e):n.value}})(t,i,e||t)}function D(t,i){return(D=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function L(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=T(t);if(i){var n=T(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return W(this,e)}}function W(t,i){return!i||"object"!==b(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&D(t,i)}(s,t);var i,e,n,o=L(s);function s(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,s),(e=o.call(this,t,i)).xAxisData=[],e.xAxisHeight=0,e.yAxisData=[],e.yAxisWidth=0,e.minValue=0,e.maxValue=0,e}return i=s,(e=[{key:"initData",value:function(){var t=this,i=this.options,e=i.xAxisData,a=i.yAxisData,n=i.drawDataLength;e=e||[],a=a||[],n=n||7;var r=this.options.yAxisMinVal,o=this.options.yAxisMaxVal,s="number"==typeof r,h="number"==typeof o,c=h?o:0,l=s?r:999999;if(this.xAxisData=e.slice(-n),a.map((function(i,e){t.yAxisData[e]=i.slice(-(n||7)),t.yAxisData[e].map((function(t){t>c&&(c=t),t<l&&(l=t)}))})),l===c){var u=Math.max(5,.1*c);c+=u,l-=u}this.maxValue=h?o:c,this.minValue=s?r:l,this.afterInitData()}},{key:"drawAxis",value:function(){var t=this;if(this.ctx){var i=this.canvasPadding[3],e={startX:i+this.yAxisWidth,startY:this.chartEndY,endX:this.chartEndX,endY:this.chartEndY},a={startX:i+this.yAxisWidth,startY:this.chartStartY,endX:i+this.yAxisWidth,endY:this.chartEndY};this.ctx.clearRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight),this.drawRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight,this.options.canvasBg||"#fff"),this.ctx.clearRect(i,a.startY,this.yAxisWidth,this.chartHeight),this.drawRect(i,a.startY,this.yAxisWidth,this.chartHeight,this.options.canvasBg||"#fff");var n=this.options,r=n.axisStyle,o=n.xAxisLength,s=n.xAxisFormat,h=n.yAxisLength,c=n.yAxisFormat;o=o||10,h=h||10,h--;var l=Object.assign({},r);["lineWidth","lineHeight","size","splitXAxisWidth","splitXAxisRadius"].map((function(i){if("number"==typeof l[i]){var e=l[i];l[i]=e*t.dpi}}));var u=l.splitXAxisRadius,f=l.splitXAxisWidth,d=l.lineWidth,v=l.lineHeight,x=l.lineColor,p=l.splitXAxis,y=l.lineHeavyColor;if(u=u||this.formatNumParam(2),f=f||this.formatNumParam(2),d=d||this.formatNumParam(1),v=v||this.formatNumParam(1),x=x||"#666",y=y||"#666",this.options.showXAxisAuxiliaryLine&&!0!==p&&this.drawLine(e.startX,e.startY,e.endX,e.endY,v,x),this.options.showYAxisAuxiliaryLine&&this.drawLine(a.startX,a.startY,a.endX,a.endY,d,x),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="center",this.xAxisHeight>=0){var m,b=this.xAxisData.length,w=b-1,A=(b-1)/(o-1);A<2&&(A=1);for(var P=new Array(4).fill(u),S=null===(m=this.options.axisStyle)||void 0===m?void 0:m.splitXAxis,D=this.options.showXAxisVal,L=0;L<b;L++){var W=this.getPosX(w-L)-f/2;0===L?W=Math.min(W,this.chartEndX-f/2):L===b&&(W=Math.max(W,this.chartStartX-f/2));var T=this.xAxisData[w-L],C=!D||!D(T);if(D?C:L!==b-1&&L%A>=1){var R;if(!0!==(null===(R=this.options.axisStyle)||void 0===R?void 0:R.splitXAxis))continue;g(this.ctx,W,e.startY,f,v,P,x)}else{S&&g(this.ctx,W,e.startY,f,v,P,y),T="function"==typeof s?s(T):T,W=this.getPosX(w-L);var O=this.chartEndY+v+10*this.dpi;this.ctx.font="normal ".concat(l.size,"px ").concat(l.font);var X=this.ctx.measureText(T).width/2;0===L&&(W=Math.min(W,this.canvasWidth-X)),L===w&&(W=Math.max(W,X)),this.drawText(T,{x:W,y:O,color:l.color,size:l.size,font:l.font,weight:"normal"})}}}if(this.ctx.textBaseline="middle",this.ctx.textAlign="right",this.yAxisWidth>=0)for(var k=(this.maxValue-this.minValue)/h,M=0;M<=h;M++){var H=k*M+this.minValue,Y="function"==typeof c?c(H):H+"",j=this.chartStartX-10*this.dpi,E=this.getPosY(H);this.drawText(Y,{x:j,y:E,color:l.color,size:l.size,font:l.font,weight:"normal",maxWidth:this.yAxisWidth-10*this.dpi}),M>0&&this.drawLine(e.startX,E,e.endX,E,l.lineWidth||1,l.lineColor||"#666")}this.ctx.restore()}}},{key:"initSize",value:function(){if(this.canvas&&a){this.canvas.width=this.canvasWidth=this.elWidth*this.dpi,this.canvas.height=this.canvasHeight=this.elHeight*this.dpi,this.canvas.style.width=this.elWidth+"px",this.canvas.style.height=this.elHeight+"px";var t=this.options,i=t.title,e=t.titleBarHeight,n=t.canvasPadding,o=t.chartPadding,s=t.yAxisWidth,h=t.xAxisHeight;n=n||[0],o=o||[0],e=this.formatNumParam(e),s=this.formatNumParam(s),h=this.formatNumParam(h),this.xAxisHeight=h,this.yAxisWidth=s,this.titleBarHeight=i?e:0,this.canvasPadding=r(n,this.dpi);var c=w(this.canvasPadding,4),l=c[0],u=c[1],f=c[2],d=c[3];this.chartPadding=r(o,this.dpi),this.chartWidth=this.canvasWidth-d-u-s,this.chartHeight=this.canvasHeight-this.titleBarHeight-l-f-h,this.chartStartX=d+s,this.chartStartY=l+e,this.chartEndX=this.chartStartX+this.chartWidth,this.chartEndY=this.chartStartY+this.chartHeight}}},{key:"mergeOptions",value:function(t){var i={drawDataLength:7,xAxisHeight:30,xAxisData:[],xAxisLength:10,xAxisFormat:void 0,showXAxisAuxiliaryLine:!0,showYAxisAuxiliaryLine:!0,yAxisWidth:30,yAxisData:[],yAxisLength:10,yAxisFormat:void 0,axisStyle:void 0,showXAxisVal:void 0};this.options=Object.assign({},i,this.options,t);var e=Object.assign({},{lineColor:"#666",lineWidth:1,lineHeight:1,font:"PingFangSC-Semibold PingFang SC",size:10,color:"#666",splitXAxis:!1,lineHeavyColor:"#666",splitXAxisWidth:2,splitXAxisRadius:2},this.options.axisStyle,null==t?void 0:t.axisStyle);this.options.axisStyle=e,S(T(s.prototype),"mergeOptions",this).call(this,t)}},{key:"getPosY",value:function(t){var i=this.chartEndY-this.chartPadding[2],e=this.chartHeight-this.chartPadding[0]-this.chartPadding[2],a=this.maxValue-this.minValue;return i-e*((t-this.minValue)/a)}},{key:"getPosX",value:function(t){return this.chartStartX+this.chartPadding[3]+(this.chartWidth-this.chartPadding[1]-this.chartPadding[3])*(t/(this.xAxisData.length-1))}}])&&P(i.prototype,e),n&&P(i,n),s}(p);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function X(t,i,e){return(X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var a=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=Y(t)););return t}(t,i);if(a){var n=Object.getOwnPropertyDescriptor(a,i);return n.get?n.get.call(e):n.value}})(t,i,e||t)}function k(t,i){return(k=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function M(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=Y(t);if(i){var n=Y(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return H(this,e)}}function H(t,i){return!i||"object"!==R(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&k(t,i)}(r,t);var i,e,a,n=M(r);function r(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this,t,i)).adsorptionLastTimer=0,e.areaLineWidth=0,e.areaDotRadius=0,e.areaDotLineWidth=0,e.areaActiveDotLineWidth=0,e.subLineWidth=0,e.areaActiveDotRadius=0,e.pointList=[],e.curveList=[],e.activeData={},e.isFinishedAnimation=!1,e.animationHandle=0,e.handleMoveTimer=0,e.init(i),e}return i=r,(e=[{key:"drawResult",value:function(){var t=this;if(this.ctx){var i=this.options,e=i.showResult,a=i.resultFormat,n=i.resultStyle,r=i.drawResult,o=i.showToolTip,s=i.toolTipOpt;if(!1!==e){if("function"==typeof r)return this.ctx.save(),r.call(this,this.ctx,this.activeData,{dpi:this.dpi,mousePosition:this.mousePosition,canvasRect:{startX:0,startY:0,endX:this.canvasWidth,endY:this.canvasHeight,width:this.canvasWidth,height:this.canvasHeight},chartRect:{startX:this.chartStartX,startY:this.chartStartY,endX:this.chartEndX,endY:this.chartEndY,width:this.chartWidth,height:this.chartHeight}}),void this.ctx.restore();var h="function"==typeof a?a(this.activeData):"".concat(this.activeData.xAxisVal," ").concat(this.activeData.yAxisVal);if(o){var c=Object.assign({text:h,x:this.activeData.x,y:this.activeData.y,chartX:this.chartStartX,chartY:this.chartStartY,chartWidth:this.chartWidth,chartHeight:this.chartHeight,dpi:this.dpi},s);return["size","width","height","borderRadius"].map((function(i){if("number"==typeof c[i]){var e=c[i];c[i]=e*t.dpi}})),void function(t,i){var e=i.size,a=i.font,n=i.weight,r=i.color,o=i.x,s=i.y,h=i.dpi,c=i.width,l=i.height,u=i.chartX,f=i.chartY,d=i.chartWidth,v=i.chartHeight;e=e||12,a=a||"PingFangSC-Semibold PingFang SC",r=r||"#333",n=n||"400";var x,p,y,m,b,w,A,P,S=10*h,D=o-c/2,L=s-l,W=8*h,T=6*h,C=l-W,R=(m=0,b=!1,w=!1,A=!1,P=!1,(p={x:D,y:L,w:c,h:l}).y-(y=S)<(x={x:u,y:f,w:d,h:v}).y&&(b=!0),p.x+p.w+m>x.x+x.w&&(w=!0),p.y+p.h+y>x.y+x.h&&(A=!0),p.x-m<x.x&&(P=!0),{top:b,right:w,bottom:A,left:P}),O=D,X=L-S,k=i.borderRadius,M=i.borderRadius,H=i.borderRadius,Y=i.borderRadius;R.left&&(O=u),R.right&&(O=u+d-c),o<=u&&(R.top?H=0:M=0),o>=u+d&&(R.top?Y=0:k=0),R.top&&(X=s+S+W);var j={x:O,y:X,w:c,h:C},E=j.x+j.w/2,F=j.y+j.h/2;g(t,j.x,j.y,j.w,j.h,[H,Y,k,M],i.bgColor),t.save();var B=(W+2)*(R.top?1:-1),I=R.top?s+S:s-S;!function(t,i){if(t.beginPath(),i.length>0){var e=i[0];t.moveTo(e.x,e.y)}for(var a=1,n=i.length;a<n;a++)t.lineTo(i[a].x,i[a].y);t.closePath()}(t,[{x:o,y:I},{x:Math.max(u,o-T),y:I+B},{x:Math.min(u+d,o+T),y:I+B}]),t.fillStyle=i.bgColor,t.fill(),t.restore(),t.save(),t.font="".concat(n," ").concat(e,"px ").concat(a),t.fillStyle=r,t.textBaseline="middle",t.textAlign="center",t.fillText(i.text,E,F,c),t.restore()}(this.ctx,c)}var l=Object.assign({},n);["x","y","size","maxWidth"].map((function(i){if("number"==typeof l[i]){var e=l[i];l[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="end",this.drawText(h,l),this.ctx.restore()}}}},{key:"drawDot",value:function(){if(this.ctx&&!(this.pointList.length<=0)){this.activeData={};for(var t=this.mousePosition,i=t.x,e=t.y,a=this.options.areaDotFillColor||["#fff"],n=this.options.areaDotStorkColor||["rgba(233, 28, 65, 1)"],r=this.options.areaActiveDotFillColor||["rgba(233, 28, 65, 0.3)"],o=this.options.areaActiveDotStorkColor||["rgba(233, 28, 65, 0.3)"],s=0;s<this.pointList.length;s++){this.ctx.save(),this.ctx.fillStyle=a[s]||a[a.length-1],this.ctx.strokeStyle=n[s]||n[n.length-1],this.ctx.lineWidth=this.areaDotLineWidth;for(var h=this.pointList[s],c=0;c<h.length;c++){var l=h[c];t:if(!(Object.keys(this.activeData).length>0)&&(this.options.adsorptionLast||e>=this.chartStartY&&e<=this.chartEndY)&&i>=l.xRange[0]&&i<=l.xRange[1]){if(this.yAxisData.length>1&&(e<l.yRange[0]||e>l.yRange[1]))break t;this.activeData={group:s,xAxisVal:this.xAxisData[c],yAxisVal:this.yAxisData[s][c],x:l.x,y:l.y};var u=this.options.subLineColor||"#FF2D55",f=[5,3].map(this.formatNumParam.bind(this));if(this.options.showActiveXSubLine&&this.drawLine(this.chartStartX,l.y,l.x,l.y,this.subLineWidth,u,f),this.options.showActiveYSubLine&&this.drawLine(l.x,l.y,l.x,this.chartEndY,this.subLineWidth,u,f),this.drawResult(),!1===this.options.areaShowActiveDot)break t;this.ctx.save(),this.ctx.beginPath(),this.ctx.lineWidth=this.areaActiveDotLineWidth,this.ctx.fillStyle=r[s]||r[length-1],this.ctx.strokeStyle=o[s]||o[n.length-1],this.ctx.arc(l.x,l.y,this.areaActiveDotRadius,0,2*Math.PI),this.ctx.stroke(),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}!1!==this.options.areaShowDot&&(this.ctx.beginPath(),this.ctx.arc(l.x,l.y,this.areaDotRadius,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.closePath())}this.ctx.beginPath(),this.ctx.restore()}}}},{key:"onMove",value:function(){var t=this;this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.handleMoveTimer=window.setTimeout((function(){t.drawCanvas()}),10)}},{key:"onMouseLeave",value:function(){var t=this;this.adsorptionLastTimer&&window.clearTimeout(this.adsorptionLastTimer),this.adsorptionLastTimer=window.setTimeout((function(){t.drawCanvas()}),500)}},{key:"init",value:function(t){this.mergeOptions(t),this.setParamsWithDpi(),this.initSize(),this.initData()}},{key:"adsorptionToLast",value:function(){if(!0===this.options.adsorptionLast&&!this.mouseInCanvas){var t=this.pointList[0];if(!(t.length<=0)){var i=t.length-1,e=t[i].x,a=t[i].y;this.mousePosition={x:e,y:a}}}}},{key:"mergeOptions",value:function(t){var i,e,a={areaLineColor:["rgba(233, 28, 65, 1)"],areaLineWidth:2,areaStartColor:["rgba(233, 28, 65, 1)"],areaEndColor:["rgba(246, 60, 118, 0)"],areaShowDot:!0,areaShowActiveDot:!0,areaDotRadius:2.5,areaDotLineWidth:2,areaDotFillColor:["#fff"],areaDotStorkColor:["rgba(233, 28, 65, 1)"],areaActiveDotRadius:8,areaActiveDotFillColor:["rgba(233, 28, 65, 0.3)"],subLineColor:"#FF2D55",subLineWidth:1,showResult:!0,resultStyle:void 0,showAnimation:!0,animationDuration:1e3,showToolTip:!1,toolTipOpt:void 0,adsorptionLast:!1};this.options=Object.assign({},a,this.options);var n={size:12,font:"PingFangSC-Semibold PingFang SC",weight:"normal",x:((null===(i=this.el)||void 0===i?void 0:i.offsetWidth)||30)-30,y:(null===(e=this.options.titleStyle)||void 0===e?void 0:e.y)||20,color:"#666"},o=Object.assign({},n,this.options.resultStyle),s=Object.assign({},{width:62,height:35,borderRadius:6,color:"#fff",bgColor:"#0A1F44",size:12},this.options.toolTipOpt);this.options.resultStyle=o,this.options.toolTipOpt=s,X(Y(r.prototype),"mergeOptions",this).call(this,t)}},{key:"setParamsWithDpi",value:function(){var t=this.options,i=t.areaLineWidth,e=t.areaDotRadius,a=t.areaDotLineWidth,n=t.areaActiveDotRadius,r=t.areaActiveDotLineWidth,o=t.subLineWidth;this.areaLineWidth=this.formatNumParam(i),this.areaDotRadius=this.formatNumParam(e),this.areaDotLineWidth=this.formatNumParam(a),this.areaActiveDotRadius=this.formatNumParam(n),this.areaActiveDotLineWidth=this.formatNumParam(r),this.subLineWidth=this.formatNumParam(o)}},{key:"afterInitData",value:function(){var t=this,i=2*this.areaDotRadius,e=1===this.yAxisData.length?(this.getPosX(1)-this.chartStartX)/2:i;this.pointList=this.yAxisData.map((function(a){return a.map((function(a,n){var r=t.getPosX(n),o=t.getPosY(a);return{x:r,y:o,xRange:[r-e,r+e],yRange:[o-i,o+i]}}))}));var a=this.options.animationDuration||1e3;this.curveList=this.pointList.map((function(i){var e=function(t,i){if(t.length<=0)return[];for(var e=t[0],a=[],n=0,r=t.length;n<r;n++){var o=t[n],s=n===r-1?o:t[n+1],h=f(e,o,s,.35),c=h.previous,l=h.next;a.push({point:o,control1:{x:d(c.x,i.left,i.right),y:d(c.y,i.top,i.bottom)},control2:{x:d(l.x,i.left,i.right),y:d(l.y,i.top,i.bottom)}}),e=o}return a}(i,{left:t.chartStartX,right:t.chartEndX,top:t.chartStartY,bottom:t.chartEndY}),n=e[0],r=e;return t.options.showAnimation&&(r=n?[n]:[]),{segmentAnimateDuration:a/Math.max(i.length-1,1),segmentAnimatePercent:0,segmentAnimateStartTime:u(),animationList:r,list:e}})),this.drawCanvas()}},{key:"drawCanvas",value:function(){var t=!0;this.curveList.map((function(i){var e=i.animationList.length,a=u()-i.segmentAnimateStartTime,n=i.list.length;e<n&&(t=!1),i.segmentAnimatePercent=100*Math.min(1,a/i.segmentAnimateDuration),e<n&&i.segmentAnimatePercent>=100&&(i.animationList.push(i.list[e]),i.segmentAnimatePercent=0,i.segmentAnimateStartTime=u())})),this.isFinishedAnimation=t,this.drawCanvasBg(),this.drawTitle(),this.drawChartBg(),this.drawAxis(),this.drawData(),t||(this.animationHandle=requestAnimationFrame(this.drawCanvas.bind(this)))}},{key:"drawData",value:function(){var t=this;this.curveList.length<=0||(this.curveList.map((function(i,e){if(t.ctx&&!(i.animationList.length<=0)){var a=i.animationList,n=i.segmentAnimatePercent,r=a[0],o=a.length,s=a[o-2],h=a[o-1],c=h.point.x,l=h.point.y,u=t.options.areaLineColor||["rgba(233, 28, 65, 1)"],f=t.options.areaStartColor||["rgba(233, 28, 65, 1)"],d=t.options.areaEndColor||["rgba(246, 60, 118, 0)"];t.ctx.save(),t.ctx.strokeStyle=u[e]||u[u.length-1],t.ctx.lineCap="round",t.ctx.lineWidth=t.areaLineWidth,t.ctx.beginPath(),t.ctx.moveTo(r.point.x,r.point.y);for(var x=1;x<o-1;x++){var p=a[x],y=a[x-1];t.ctx.bezierCurveTo(y.control2.x,y.control2.y,p.control1.x,p.control1.y,p.point.x,p.point.y)}if(s)if(t.isFinishedAnimation)t.ctx.bezierCurveTo(s.control2.x,s.control2.y,h.control1.x,h.control1.y,h.point.x,h.point.y),c=h.point.x,l=h.point.y;else for(var m=0;m<=n/100;m+=.1)c=v(s.point.x,s.control2.x,h.control1.x,h.point.x,m),l=v(s.point.y,s.control2.y,h.control1.y,h.point.y,m),t.ctx.lineTo(c,l);t.ctx.stroke();var g=t.chartEndY-t.chartPadding[2],b=t.ctx.createLinearGradient(0,0,0,g);b.addColorStop(0,f[e]||f[f.length-1]),b.addColorStop(1,d[e]||d[d.length-1]),t.ctx.lineTo(c,l),t.ctx.lineTo(c,g),t.ctx.lineTo(r.point.x,g),t.ctx.lineTo(r.point.x,r.point.y),t.ctx.fillStyle=b,t.ctx.fill(),t.ctx.closePath(),t.ctx.restore()}})),this.isFinishedAnimation&&(this.adsorptionToLast(),this.drawDot()))}},{key:"forceUpdate",value:function(t){this.init(t)}},{key:"updateData",value:function(t,i){t&&(this.options.xAxisData=t),i&&(this.options.yAxisData=i),this.initData()}},{key:"destroy",value:function(){this.animationHandle&&window.cancelAnimationFrame(this.animationHandle),this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.removeEventHandler(),this.canvas&&this.el.removeChild(this.canvas)}}])&&O(i.prototype,e),a&&O(i,a),r}(C);i.default=p}]));