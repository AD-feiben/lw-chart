!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Area=i():t.Area=i()}(window,(function(){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)e.d(n,a,function(i){return t[i]}.bind(null,a));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=4)}([function(t,i,e){"use strict";e.d(i,"e",(function(){return n})),e.d(i,"b",(function(){return r})),e.d(i,"f",(function(){return h})),e.d(i,"i",(function(){return c})),e.d(i,"h",(function(){return l})),e.d(i,"g",(function(){return u})),e.d(i,"d",(function(){return f})),e.d(i,"c",(function(){return x})),e.d(i,"a",(function(){return p}));var n="undefined"!=typeof window,a=(!0===n?window.navigator.userAgent:"").toLowerCase(),r=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.length,n=[];for(e>=4&&(n=t.slice(0,4)),3===e&&(n=t.concat(t[1]));n.length<4;)n=n.concat(t);return n.map((function(t){return t*i}))},o=a.indexOf("android")>-1,s=/iphone|ipad|ipod|ios/.test(a),h=o||s,c=function(t,i,e){t&&i&&e&&t.addEventListener(i,e,!1)},l=function(t,i,e){t&&i&&t.removeEventListener(i,e,!1)},u=function(){return performance?performance.now():Date.now()},f=function(t){for(var i=t,e=0,n=0;null!==i;)e+=i.offsetTop,n+=i.offsetLeft,i=i.offsetParent;return{top:e,left:n}},d=function(t,i,e,n){var a=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),r=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),o=a/(a+r),s=r/(a+r),h=n*(o=isNaN(o)?0:o),c=n*(s=isNaN(s)?0:s);return{previous:{x:i.x-h*(e.x-t.x),y:i.y-h*(e.y-t.y)},next:{x:i.x+c*(e.x-t.x),y:i.y+c*(e.y-t.y)}}},v=function(t,i,e){return Math.max(Math.min(t,e),i)},x=function(t,i){if(t.length<=0)return[];for(var e=t[0],n=[],a=0,r=t.length;a<r;a++){var o=t[a],s=a===r-1?o:t[a+1],h=d(e,o,s,.35),c=h.previous,l=h.next;n.push({point:o,control1:{x:v(c.x,i.left,i.right),y:v(c.y,i.top,i.bottom)},control2:{x:v(l.x,i.left,i.right),y:v(l.y,i.top,i.bottom)}}),e=o}return n},p=function(t,i,e,n,a){a>1&&(a=1);var r=1-a;return t*Math.pow(r,3)+3*i*a*Math.pow(r,2)+3*e*Math.pow(a,2)*r+n*Math.pow(a,3)}},function(t,i,e){"use strict";function n(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return a(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}e.d(i,"b",(function(){return r})),e.d(i,"a",(function(){return o}));var r=function(t,i,e,a,r,o,s){t.save(),t.translate(i,e),function(t,i,e,a){var r=n(a,4),o=r[0],s=r[1],h=r[2],c=r[3];t.beginPath(),t.arc(i-h,e-h,h,0,Math.PI/2),t.lineTo(c,e),t.arc(c,e-c,c,Math.PI/2,Math.PI),t.lineTo(0,o),t.arc(o,o,o,Math.PI,3*Math.PI/2),t.lineTo(i-s,0),t.arc(i-s,s,s,3*Math.PI/2,2*Math.PI),t.lineTo(i,e-s),t.closePath()}(t,a,r,o),t.fillStyle=s,t.fill(),t.restore()},o=function(t,i){var e=i.size,n=i.font,a=i.weight,o=i.color,s=i.x,h=i.y,c=i.dpi,l=i.width,u=i.height,f=i.chartX,d=i.chartY,v=i.chartWidth,x=i.chartHeight;e=e||12,n=n||"PingFangSC-Semibold PingFang SC",o=o||"#333",a=a||"400";var p,y,m,g,b,w,A,P,S=10*c,D=s-l/2,O=h-u,L=8*c,W=6*c,C=u-L,T=(g=0,b=!1,w=!1,A=!1,P=!1,(y={x:D,y:O,w:l,h:u}).y-(m=S)<(p={x:f,y:d,w:v,h:x}).y&&(b=!0),y.x+y.w+g>p.x+p.w&&(w=!0),y.y+y.h+m>p.y+p.h&&(A=!0),y.x-g<p.x&&(P=!0),{top:b,right:w,bottom:A,left:P}),R=D,j=O-S,X=i.borderRadius,k=i.borderRadius,M=i.borderRadius,H=i.borderRadius;T.left&&(R=f),T.right&&(R=f+v-l),s<=f&&(T.top?M=0:k=0),s>=f+v&&(T.top?H=0:X=0),T.top&&(j=h+S+L);var Y={x:R,y:j,w:l,h:C},E=Y.x+Y.w/2,F=Y.y+Y.h/2;r(t,Y.x,Y.y,Y.w,Y.h,[M,H,X,k],i.bgColor),t.save();var B=(L+2)*(T.top?1:-1),I=T.top?h+S:h-S;!function(t,i){if(t.beginPath(),i.length>0){var e=i[0];t.moveTo(e.x,e.y)}for(var n=1,a=i.length;n<a;n++)t.lineTo(i[n].x,i[n].y);t.closePath()}(t,[{x:s,y:I},{x:Math.max(f,s-W),y:I+B},{x:Math.min(f+v,s+W),y:I+B}]),t.fillStyle=i.bgColor,t.fill(),t.restore(),t.save(),t.font="".concat(a," ").concat(e,"px ").concat(n),t.fillStyle=o,t.textBaseline="middle",t.textAlign="center",t.fillText(i.text,E,F,l),t.restore()}},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return r}));var n=e(0);function a(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:-1,y:-1},this.mouseInCanvas=!1,this.dpi=1,this.el=i,this.mergeOptions(e),this.createCanvas(),this.addEventHandler()}var i,e,r;return i=t,(e=[{key:"createCanvas",value:function(){if(!1!==n.e){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,e=(window.devicePixelRatio||1)/i;e<1&&(e=1),this.dpi=e/i,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(n.f){var i=Object(n.d)(this.canvas),e=i.top,a=i.left,r=t.changedTouches[0],o=r.pageX,s=r.pageY;this.mousePosition={x:(o-a)*this.dpi,y:(s-e)*this.dpi}}else{var h=t||window.event;h.offsetX||0===h.offsetX?this.mousePosition={x:h.offsetX*this.dpi,y:h.offsetY*this.dpi}:(h.layerX||0===h.layerX)&&(this.mousePosition={x:h.layerX*this.dpi,y:h.layerY*this.dpi})}this.mouseInCanvas=!0,this.onMove()}}},{key:"handleMouseLeaveCanvas",value:function(){this.mouseInCanvas=!1,this.onMouseLeave()}},{key:"addEventHandler",value:function(){var t=this;if(this.canvas){var i=n.f?["touchmove","touchend"]:["mousemove"],e=n.f?["touchend"]:["mouseleave"];this.removeEventHandler(),i.map((function(i){Object(n.i)(t.canvas,i,t.handleMove.bind(t))})),e.map((function(i){Object(n.i)(t.canvas,i,t.handleMouseLeaveCanvas.bind(t))}))}}},{key:"removeEventHandler",value:function(){var t=this,i=n.f?["touchmove","touchend"]:["mousemove"],e=n.f?["touchend"]:["mouseleave"];i.map((function(i){Object(n.h)(t.canvas,i,t.handleMove.bind(t))})),e.map((function(i){Object(n.h)(t.canvas,i,t.handleMouseLeaveCanvas.bind(t))}))}},{key:"mergeOptions",value:function(t){var i={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer"};this.options=Object.assign({},i,this.options,t);var e=Object(n.b)(this.options.canvasPadding||[0]),a={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:e[3],y:e[0],color:"#333"},r=Object.assign({},a,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=r}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,i){if(this.ctx){var e=i.size,n=i.font,a=i.weight,r=i.color,o=i.x,s=i.y,h=i.maxWidth;e=e||16,n=n||"PingFangSC-Semibold PingFang SC",r=r||"#333",o=o||0,s=s||0,this.ctx.save(),this.ctx.font="".concat(a," ").concat(e,"px ").concat(n),this.ctx.fillStyle=r,this.ctx.fillText(t,o,s,h),this.ctx.restore()}}},{key:"drawLine",value:function(t,i,e,n,a,r,o){this.ctx&&(this.ctx.save(),o&&this.ctx.setLineDash(o),this.ctx.fillStyle=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,n),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,i,e,n,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t,i,e,n),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=r),this.ctx.fillStyle=a,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,i=this.options,e=i.title,n=i.titleStyle;if(this.ctx&&e){var a=Object.assign({},n);["x","y","size","maxWidth"].map((function(i){if("number"==typeof a[i]){var e=a[i];a[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(e,a),this.ctx.restore()}}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&a(i.prototype,e),r&&a(i,r),t}()},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return x}));var n=e(2),a=e(0),r=e(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return h(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function c(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,i,e){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=v(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function u(t,i){return(u=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function f(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=v(t);if(i){var a=v(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d(this,e)}}function d(t,i){return!i||"object"!==o(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&u(t,i)}(h,t);var i,e,n,o=f(h);function h(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,h),(e=o.call(this,t,i)).xAxisData=[],e.xAxisHeight=0,e.yAxisData=[],e.yAxisWidth=0,e.minValue=0,e.maxValue=0,e}return i=h,(e=[{key:"initData",value:function(){var t=this,i=this.options,e=i.xAxisData,n=i.yAxisData,a=i.drawDataLength;e=e||[],n=n||[],a=a||7;var r=this.options.yAxisMinVal,o=this.options.yAxisMaxVal,s="number"==typeof r,h="number"==typeof o,c=h?o:0,l=s?r:999999;if(this.xAxisData=e.slice(-a),n.map((function(i,e){t.yAxisData[e]=i.slice(-(a||7)),t.yAxisData[e].map((function(t){t>c&&(c=t),t<l&&(l=t)}))})),l===c){var u=Math.max(5,.1*c);c+=u,l-=u}this.maxValue=h?o:c,this.minValue=s?r:l,this.afterInitData()}},{key:"drawAxis",value:function(){var t=this;if(this.ctx){var i=this.canvasPadding[3],e={startX:i+this.yAxisWidth,startY:this.chartEndY,endX:this.chartEndX,endY:this.chartEndY},n={startX:i+this.yAxisWidth,startY:this.chartStartY,endX:i+this.yAxisWidth,endY:this.chartEndY};this.ctx.clearRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight),this.drawRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight,this.options.canvasBg||"#fff"),this.ctx.clearRect(i,n.startY,this.yAxisWidth,this.chartHeight),this.drawRect(i,n.startY,this.yAxisWidth,this.chartHeight,this.options.canvasBg||"#fff");var a=this.options,o=a.axisStyle,s=a.xAxisLength,h=a.xAxisFormat,c=a.yAxisLength,l=a.yAxisFormat;s=s||10,c=c||10,c--;var u=Object.assign({},o);["lineWidth","lineHeight","size","splitXAxisWidth","splitXAxisRadius"].map((function(i){if("number"==typeof u[i]){var e=u[i];u[i]=e*t.dpi}}));var f=u.splitXAxisRadius,d=u.splitXAxisWidth,v=u.lineWidth,x=u.lineHeight,p=u.lineColor,y=u.splitXAxis,m=u.lineHeavyColor;if(f=f||this.formatNumParam(2),d=d||this.formatNumParam(2),v=v||this.formatNumParam(1),x=x||this.formatNumParam(1),p=p||"#666",m=m||"#666",this.options.showXAxisAuxiliaryLine&&!0!==y&&this.drawLine(e.startX,e.startY,e.endX,e.endY,x,p),this.options.showYAxisAuxiliaryLine&&this.drawLine(n.startX,n.startY,n.endX,n.endY,v,p),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="center",this.xAxisHeight>=0){var g,b=this.xAxisData.length,w=b-1,A=(b-1)/(s-1);A<2&&(A=1);for(var P=new Array(4).fill(f),S=null===(g=this.options.axisStyle)||void 0===g?void 0:g.splitXAxis,D=this.options.showXAxisVal,O=0;O<b;O++){var L=this.getPosX(w-O)-d/2;0===O?L=Math.min(L,this.chartEndX-d/2):O===b&&(L=Math.max(L,this.chartStartX-d/2));var W=this.xAxisData[w-O],C=!D||!D(W);if(D?C:O!==b-1&&O%A>=1){var T;if(!0!==(null===(T=this.options.axisStyle)||void 0===T?void 0:T.splitXAxis))continue;Object(r.b)(this.ctx,L,e.startY,d,x,P,p)}else{S&&Object(r.b)(this.ctx,L,e.startY,d,x,P,m),W="function"==typeof h?h(W):W,L=this.getPosX(w-O);var R=this.chartEndY+x+10*this.dpi;this.ctx.font="normal ".concat(u.size,"px ").concat(u.font);var j=this.ctx.measureText(W).width/2;0===O&&(L=Math.min(L,this.canvasWidth-j)),O===w&&(L=Math.max(L,j)),this.drawText(W,{x:L,y:R,color:u.color,size:u.size,font:u.font,weight:"normal"})}}}if(this.ctx.textBaseline="middle",this.ctx.textAlign="right",this.yAxisWidth>=0)for(var X=(this.maxValue-this.minValue)/c,k=0;k<=c;k++){var M=X*k+this.minValue,H="function"==typeof l?l(M):M+"",Y=this.chartStartX-10*this.dpi,E=this.getPosY(M);this.drawText(H,{x:Y,y:E,color:u.color,size:u.size,font:u.font,weight:"normal",maxWidth:this.yAxisWidth-10*this.dpi}),k>0&&this.drawLine(e.startX,E,e.endX,E,u.lineWidth||1,u.lineColor||"#666")}this.ctx.restore()}}},{key:"initSize",value:function(){if(this.canvas&&a.e){this.canvas.width=this.canvasWidth=this.elWidth*this.dpi,this.canvas.height=this.canvasHeight=this.elHeight*this.dpi,this.canvas.style.width=this.elWidth+"px",this.canvas.style.height=this.elHeight+"px";var t=this.options,i=t.title,e=t.titleBarHeight,n=t.canvasPadding,r=t.chartPadding,o=t.yAxisWidth,h=t.xAxisHeight;n=n||[0],r=r||[0],e=this.formatNumParam(e),o=this.formatNumParam(o),h=this.formatNumParam(h),this.xAxisHeight=h,this.yAxisWidth=o,this.titleBarHeight=i?e:0,this.canvasPadding=Object(a.b)(n,this.dpi);var c=s(this.canvasPadding,4),l=c[0],u=c[1],f=c[2],d=c[3];this.chartPadding=Object(a.b)(r,this.dpi),this.chartWidth=this.canvasWidth-d-u-o,this.chartHeight=this.canvasHeight-this.titleBarHeight-l-f-h,this.chartStartX=d+o,this.chartStartY=l+e,this.chartEndX=this.chartStartX+this.chartWidth,this.chartEndY=this.chartStartY+this.chartHeight}}},{key:"mergeOptions",value:function(t){var i={drawDataLength:7,xAxisHeight:30,xAxisData:[],xAxisLength:10,xAxisFormat:void 0,showXAxisAuxiliaryLine:!0,showYAxisAuxiliaryLine:!0,yAxisWidth:30,yAxisData:[],yAxisLength:10,yAxisFormat:void 0,axisStyle:void 0,showXAxisVal:void 0};this.options=Object.assign({},i,this.options,t);var e=Object.assign({},{lineColor:"#666",lineWidth:1,lineHeight:1,font:"PingFangSC-Semibold PingFang SC",size:10,color:"#666",splitXAxis:!1,lineHeavyColor:"#666",splitXAxisWidth:2,splitXAxisRadius:2},this.options.axisStyle,null==t?void 0:t.axisStyle);this.options.axisStyle=e,l(v(h.prototype),"mergeOptions",this).call(this,t)}},{key:"getPosY",value:function(t){var i=this.chartEndY-this.chartPadding[2],e=this.chartHeight-this.chartPadding[0]-this.chartPadding[2],n=this.maxValue-this.minValue;return i-e*((t-this.minValue)/n)}},{key:"getPosX",value:function(t){return this.chartStartX+this.chartPadding[3]+(this.chartWidth-this.chartPadding[1]-this.chartPadding[3])*(t/(this.xAxisData.length-1))}}])&&c(i.prototype,e),n&&c(i,n),h}(n.default)},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return d}));var n=e(0),a=e(3),r=e(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,i,e){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=f(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function c(t,i){return(c=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function l(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=f(t);if(i){var a=f(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u(this,e)}}function u(t,i){return!i||"object"!==o(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&c(t,i)}(u,t);var i,e,a,o=l(u);function u(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,u),(e=o.call(this,t,i)).adsorptionLastTimer=0,e.areaLineWidth=0,e.areaDotRadius=0,e.areaDotLineWidth=0,e.areaActiveDotLineWidth=0,e.subLineWidth=0,e.areaActiveDotRadius=0,e.pointList=[],e.curveList=[],e.activeData={},e.isFinishedAnimation=!1,e.animationHandle=0,e.handleMoveTimer=0,e.init(i),e}return i=u,(e=[{key:"drawResult",value:function(){var t=this;if(this.ctx){var i=this.options,e=i.showResult,n=i.resultFormat,a=i.resultStyle,o=i.drawResult,s=i.showToolTip,h=i.toolTipOpt;if(!1!==e){if("function"==typeof o)return this.ctx.save(),o.call(this,this.ctx,this.activeData,{dpi:this.dpi,mousePosition:this.mousePosition,canvasRect:{startX:0,startY:0,endX:this.canvasWidth,endY:this.canvasHeight,width:this.canvasWidth,height:this.canvasHeight},chartRect:{startX:this.chartStartX,startY:this.chartStartY,endX:this.chartEndX,endY:this.chartEndY,width:this.chartWidth,height:this.chartHeight}}),void this.ctx.restore();var c="function"==typeof n?n(this.activeData):"".concat(this.activeData.xAxisVal," ").concat(this.activeData.yAxisVal);if(s){var l=Object.assign({text:c,x:this.activeData.x,y:this.activeData.y,chartX:this.chartStartX,chartY:this.chartStartY,chartWidth:this.chartWidth,chartHeight:this.chartHeight,dpi:this.dpi},h);return["size","width","height","borderRadius"].map((function(i){if("number"==typeof l[i]){var e=l[i];l[i]=e*t.dpi}})),void Object(r.a)(this.ctx,l)}var u=Object.assign({},a);["x","y","size","maxWidth"].map((function(i){if("number"==typeof u[i]){var e=u[i];u[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="end",this.drawText(c,u),this.ctx.restore()}}}},{key:"drawDot",value:function(){if(this.ctx&&!(this.pointList.length<=0)){this.activeData={};for(var t=this.mousePosition,i=t.x,e=t.y,n=this.options.areaDotFillColor||["#fff"],a=this.options.areaDotStorkColor||["rgba(233, 28, 65, 1)"],r=this.options.areaActiveDotFillColor||["rgba(233, 28, 65, 0.3)"],o=this.options.areaActiveDotStorkColor||["rgba(233, 28, 65, 0.3)"],s=0;s<this.pointList.length;s++){this.ctx.save(),this.ctx.fillStyle=n[s]||n[n.length-1],this.ctx.strokeStyle=a[s]||a[a.length-1],this.ctx.lineWidth=this.areaDotLineWidth;for(var h=this.pointList[s],c=0;c<h.length;c++){var l=h[c];t:if(!(Object.keys(this.activeData).length>0)&&(this.options.adsorptionLast||e>=this.chartStartY&&e<=this.chartEndY)&&i>=l.xRange[0]&&i<=l.xRange[1]){if(this.yAxisData.length>1&&(e<l.yRange[0]||e>l.yRange[1]))break t;this.activeData={group:s,xAxisVal:this.xAxisData[c],yAxisVal:this.yAxisData[s][c],x:l.x,y:l.y};var u=this.options.subLineColor||"#FF2D55",f=[5,3].map(this.formatNumParam.bind(this));if(this.options.showActiveXSubLine&&this.drawLine(this.chartStartX,l.y,l.x,l.y,this.subLineWidth,u,f),this.options.showActiveYSubLine&&this.drawLine(l.x,l.y,l.x,this.chartEndY,this.subLineWidth,u,f),this.drawResult(),!1===this.options.areaShowActiveDot)break t;this.ctx.save(),this.ctx.beginPath(),this.ctx.lineWidth=this.areaActiveDotLineWidth,this.ctx.fillStyle=r[s]||r[length-1],this.ctx.strokeStyle=o[s]||o[a.length-1],this.ctx.arc(l.x,l.y,this.areaActiveDotRadius,0,2*Math.PI),this.ctx.stroke(),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}!1!==this.options.areaShowDot&&(this.ctx.beginPath(),this.ctx.arc(l.x,l.y,this.areaDotRadius,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.closePath())}this.ctx.beginPath(),this.ctx.restore()}}}},{key:"onMove",value:function(){var t=this;this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.handleMoveTimer=window.setTimeout((function(){t.drawCanvas()}),10)}},{key:"onMouseLeave",value:function(){var t=this;this.adsorptionLastTimer&&window.clearTimeout(this.adsorptionLastTimer),this.adsorptionLastTimer=window.setTimeout((function(){t.drawCanvas()}),500)}},{key:"init",value:function(t){this.mergeOptions(t),this.setParamsWithDpi(),this.initSize(),this.initData()}},{key:"adsorptionToLast",value:function(){if(!0===this.options.adsorptionLast&&!this.mouseInCanvas){var t=this.pointList[0];if(!(t.length<=0)){var i=t.length-1,e=t[i].x,n=t[i].y;this.mousePosition={x:e,y:n}}}}},{key:"mergeOptions",value:function(t){var i,e,n={areaLineColor:["rgba(233, 28, 65, 1)"],areaLineWidth:2,areaStartColor:["rgba(233, 28, 65, 1)"],areaEndColor:["rgba(246, 60, 118, 0)"],areaShowDot:!0,areaShowActiveDot:!0,areaDotRadius:2.5,areaDotLineWidth:2,areaDotFillColor:["#fff"],areaDotStorkColor:["rgba(233, 28, 65, 1)"],areaActiveDotRadius:8,areaActiveDotFillColor:["rgba(233, 28, 65, 0.3)"],subLineColor:"#FF2D55",subLineWidth:1,showResult:!0,resultStyle:void 0,showAnimation:!0,animationDuration:1e3,showToolTip:!1,toolTipOpt:void 0,adsorptionLast:!1};this.options=Object.assign({},n,this.options);var a={size:12,font:"PingFangSC-Semibold PingFang SC",weight:"normal",x:((null===(i=this.el)||void 0===i?void 0:i.offsetWidth)||30)-30,y:(null===(e=this.options.titleStyle)||void 0===e?void 0:e.y)||20,color:"#666"},r=Object.assign({},a,this.options.resultStyle),o=Object.assign({},{width:62,height:35,borderRadius:6,color:"#fff",bgColor:"#0A1F44",size:12},this.options.toolTipOpt);this.options.resultStyle=r,this.options.toolTipOpt=o,h(f(u.prototype),"mergeOptions",this).call(this,t)}},{key:"setParamsWithDpi",value:function(){var t=this.options,i=t.areaLineWidth,e=t.areaDotRadius,n=t.areaDotLineWidth,a=t.areaActiveDotRadius,r=t.areaActiveDotLineWidth,o=t.subLineWidth;this.areaLineWidth=this.formatNumParam(i),this.areaDotRadius=this.formatNumParam(e),this.areaDotLineWidth=this.formatNumParam(n),this.areaActiveDotRadius=this.formatNumParam(a),this.areaActiveDotLineWidth=this.formatNumParam(r),this.subLineWidth=this.formatNumParam(o)}},{key:"afterInitData",value:function(){var t=this,i=2*this.areaDotRadius,e=1===this.yAxisData.length?(this.getPosX(1)-this.chartStartX)/2:i;this.pointList=this.yAxisData.map((function(n){return n.map((function(n,a){var r=t.getPosX(a),o=t.getPosY(n);return{x:r,y:o,xRange:[r-e,r+e],yRange:[o-i,o+i]}}))}));var a=this.options.animationDuration||1e3;this.curveList=this.pointList.map((function(i){var e={left:t.chartStartX,right:t.chartEndX,top:t.chartStartY,bottom:t.chartEndY},r=Object(n.c)(i,e),o=r[0],s=r;return t.options.showAnimation&&(s=o?[o]:[]),{segmentAnimateDuration:a/Math.max(i.length-1,1),segmentAnimatePercent:0,segmentAnimateStartTime:Object(n.g)(),animationList:s,list:r}})),this.drawCanvas()}},{key:"drawCanvas",value:function(){var t=!0;this.curveList.map((function(i){var e=i.animationList.length,a=Object(n.g)()-i.segmentAnimateStartTime,r=i.list.length;e<r&&(t=!1),i.segmentAnimatePercent=100*Math.min(1,a/i.segmentAnimateDuration),e<r&&i.segmentAnimatePercent>=100&&(i.animationList.push(i.list[e]),i.segmentAnimatePercent=0,i.segmentAnimateStartTime=Object(n.g)())})),this.isFinishedAnimation=t,this.drawCanvasBg(),this.drawTitle(),this.drawChartBg(),this.drawAxis(),this.drawData(),t||(this.animationHandle=requestAnimationFrame(this.drawCanvas.bind(this)))}},{key:"drawData",value:function(){var t=this;this.curveList.length<=0||(this.curveList.map((function(i,e){if(t.ctx&&!(i.animationList.length<=0)){var a=i.animationList,r=i.segmentAnimatePercent,o=a[0],s=a.length,h=a[s-2],c=a[s-1],l=c.point.x,u=c.point.y,f=t.options.areaLineColor||["rgba(233, 28, 65, 1)"],d=t.options.areaStartColor||["rgba(233, 28, 65, 1)"],v=t.options.areaEndColor||["rgba(246, 60, 118, 0)"];t.ctx.save(),t.ctx.strokeStyle=f[e]||f[f.length-1],t.ctx.lineCap="round",t.ctx.lineWidth=t.areaLineWidth,t.ctx.beginPath(),t.ctx.moveTo(o.point.x,o.point.y);for(var x=1;x<s-1;x++){var p=a[x],y=a[x-1];t.ctx.bezierCurveTo(y.control2.x,y.control2.y,p.control1.x,p.control1.y,p.point.x,p.point.y)}if(h)if(t.isFinishedAnimation)t.ctx.bezierCurveTo(h.control2.x,h.control2.y,c.control1.x,c.control1.y,c.point.x,c.point.y),l=c.point.x,u=c.point.y;else for(var m=0;m<=r/100;m+=.1)l=Object(n.a)(h.point.x,h.control2.x,c.control1.x,c.point.x,m),u=Object(n.a)(h.point.y,h.control2.y,c.control1.y,c.point.y,m),t.ctx.lineTo(l,u);t.ctx.stroke();var g=t.chartEndY-t.chartPadding[2],b=t.ctx.createLinearGradient(0,0,0,g);b.addColorStop(0,d[e]||d[d.length-1]),b.addColorStop(1,v[e]||v[v.length-1]),t.ctx.lineTo(l,u),t.ctx.lineTo(l,g),t.ctx.lineTo(o.point.x,g),t.ctx.lineTo(o.point.x,o.point.y),t.ctx.fillStyle=b,t.ctx.fill(),t.ctx.closePath(),t.ctx.restore()}})),this.isFinishedAnimation&&(this.adsorptionToLast(),this.drawDot()))}},{key:"forceUpdate",value:function(t){this.init(t)}},{key:"updateData",value:function(t,i){t&&(this.options.xAxisData=t),i&&(this.options.yAxisData=i),this.initData()}},{key:"destroy",value:function(){this.animationHandle&&window.cancelAnimationFrame(this.animationHandle),this.handleMoveTimer&&window.clearTimeout(this.handleMoveTimer),this.removeEventHandler(),this.canvas&&this.el.removeChild(this.canvas)}}])&&s(i.prototype,e),a&&s(i,a),u}(a.default)}]).default}));