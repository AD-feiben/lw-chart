!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Axis=i():t.Axis=i()}(window,(function(){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)e.d(n,a,function(i){return t[i]}.bind(null,a));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=3)}([function(t,i,e){"use strict";e.d(i,"e",(function(){return n})),e.d(i,"b",(function(){return r})),e.d(i,"f",(function(){return h})),e.d(i,"i",(function(){return c})),e.d(i,"h",(function(){return l})),e.d(i,"g",(function(){return u})),e.d(i,"d",(function(){return f})),e.d(i,"c",(function(){return v})),e.d(i,"a",(function(){return y}));var n="undefined"!=typeof window,a=(!0===n?window.navigator.userAgent:"").toLowerCase(),r=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.length,n=[];for(e>=4&&(n=t.slice(0,4)),3===e&&(n=t.concat(t[1]));n.length<4;)n=n.concat(t);return n.map((function(t){return t*i}))},s=a.indexOf("android")>-1,o=/iphone|ipad|ipod|ios/.test(a),h=s||o,c=function(t,i,e){t&&i&&e&&t.addEventListener(i,e,!1)},l=function(t,i,e){t&&i&&t.removeEventListener(i,e,!1)},u=function(){return performance?performance.now():Date.now()},f=function(t){for(var i=t,e=0,n=0;null!==i;)e+=i.offsetTop,n+=i.offsetLeft,i=i.offsetParent;return{top:e,left:n}},d=function(t,i,e,n){var a=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),r=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),s=a/(a+r),o=r/(a+r),h=n*(s=isNaN(s)?0:s),c=n*(o=isNaN(o)?0:o);return{previous:{x:i.x-h*(e.x-t.x),y:i.y-h*(e.y-t.y)},next:{x:i.x+c*(e.x-t.x),y:i.y+c*(e.y-t.y)}}},x=function(t,i,e){return Math.max(Math.min(t,e),i)},v=function(t,i){if(t.length<=0)return[];for(var e=t[0],n=[],a=0,r=t.length;a<r;a++){var s=t[a],o=a===r-1?s:t[a+1],h=d(e,s,o,.35),c=h.previous,l=h.next;n.push({point:s,control1:{x:x(c.x,i.left,i.right),y:x(c.y,i.top,i.bottom)},control2:{x:x(l.x,i.left,i.right),y:x(l.y,i.top,i.bottom)}}),e=s}return n},y=function(t,i,e,n,a){a>1&&(a=1);var r=1-a;return t*Math.pow(r,3)+3*i*a*Math.pow(r,2)+3*e*Math.pow(a,2)*r+n*Math.pow(a,3)}},function(t,i,e){"use strict";function n(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return a(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}e.d(i,"b",(function(){return r})),e.d(i,"a",(function(){return s}));var r=function(t,i,e,a,r,s,o){t.save(),t.translate(i,e),function(t,i,e,a){var r=n(a,4),s=r[0],o=r[1],h=r[2],c=r[3];t.beginPath(),t.arc(i-h,e-h,h,0,Math.PI/2),t.lineTo(c,e),t.arc(c,e-c,c,Math.PI/2,Math.PI),t.lineTo(0,s),t.arc(s,s,s,Math.PI,3*Math.PI/2),t.lineTo(i-o,0),t.arc(i-o,o,o,3*Math.PI/2,2*Math.PI),t.lineTo(i,e-o),t.closePath()}(t,a,r,s),t.fillStyle=o,t.fill(),t.restore()},s=function(t,i){var e=i.size,n=i.font,a=i.weight,s=i.color,o=i.x,h=i.y,c=i.dpi,l=i.width,u=i.height,f=i.chartX,d=i.chartY,x=i.chartWidth,v=i.chartHeight;e=e||12,n=n||"PingFangSC-Semibold PingFang SC",s=s||"#333",a=a||"400";var y,p,g,m,b,P,w,A,S=10*c,O=o-l/2,X=h-u,W=8*c,j=6*c,M=u-W,H=(m=0,b=!1,P=!1,w=!1,A=!1,(p={x:O,y:X,w:l,h:u}).y-(g=S)<(y={x:f,y:d,w:x,h:v}).y&&(b=!0),p.x+p.w+m>y.x+y.w&&(P=!0),p.y+p.h+g>y.y+y.h&&(w=!0),p.x-m<y.x&&(A=!0),{top:b,right:P,bottom:w,left:A}),C=O,Y=X-S,R=i.borderRadius,k=i.borderRadius,T=i.borderRadius,E=i.borderRadius;H.left&&(C=f,H.top?T=0:k=0),H.right&&(C=f+x-l,H.top?E=0:R=0),H.top&&(Y=h+S+W);var L={x:C,y:Y,w:l,h:M},D=L.x+L.w/2,B=L.y+L.h/2;r(t,L.x,L.y,L.w,L.h,[T,E,R,k],i.bgColor),t.save();var I=(W+2)*(H.top?1:-1),_=H.top?h+S:h-S;!function(t,i){if(t.beginPath(),i.length>0){var e=i[0];t.moveTo(e.x,e.y)}for(var n=1,a=i.length;n<a;n++)t.lineTo(i[n].x,i[n].y);t.closePath()}(t,[{x:o,y:_},{x:Math.max(f,o-j),y:_+I},{x:Math.min(f+x,o+j),y:_+I}]),t.fillStyle=i.bgColor,t.fill(),t.restore(),t.save(),t.font="".concat(a," ").concat(e,"px ").concat(n),t.fillStyle=s,t.textBaseline="middle",t.textAlign="center",t.fillText(i.text,D,B,l),t.restore()}},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return r}));var n=e(0);function a(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:-1,y:-1},this.mouseInCanvas=!1,this.dpi=1,this.el=i,this.mergeOptions(e),this.createCanvas(),this.addEventHandler()}var i,e,r;return i=t,(e=[{key:"createCanvas",value:function(){if(!1!==n.e){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,e=(window.devicePixelRatio||1)/i;e<1&&(e=1),this.dpi=e/i,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(n.f){var i=Object(n.d)(this.canvas),e=i.top,a=i.left,r=t.changedTouches[0],s=r.pageX,o=r.pageY;this.mousePosition={x:(s-a)*this.dpi,y:(o-e)*this.dpi}}else{var h=t||window.event;h.offsetX||0===h.offsetX?this.mousePosition={x:h.offsetX*this.dpi,y:h.offsetY*this.dpi}:(h.layerX||0===h.layerX)&&(this.mousePosition={x:h.layerX*this.dpi,y:h.layerY*this.dpi})}this.mouseInCanvas=!0,this.onMove()}}},{key:"handleMouseLeaveCanvas",value:function(){this.mouseInCanvas=!1,this.onMouseLeave()}},{key:"addEventHandler",value:function(){var t=this;if(this.canvas){var i=n.f?["touchmove","touchend"]:["mousemove"],e=n.f?["touchend"]:["mouseleave"];this.removeEventHandler(),i.map((function(i){Object(n.i)(t.canvas,i,t.handleMove.bind(t))})),e.map((function(i){Object(n.i)(t.canvas,i,t.handleMouseLeaveCanvas.bind(t))}))}}},{key:"removeEventHandler",value:function(){var t=this,i=n.f?["touchmove","touchend"]:["mousemove"],e=n.f?["touchend"]:["mouseleave"];i.map((function(i){Object(n.h)(t.canvas,i,t.handleMove.bind(t))})),e.map((function(i){Object(n.h)(t.canvas,i,t.handleMouseLeaveCanvas.bind(t))}))}},{key:"mergeOptions",value:function(t){var i={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer"};this.options=Object.assign({},i,this.options,t);var e=Object(n.b)(this.options.canvasPadding||[0]),a={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:e[3],y:e[0],color:"#333"},r=Object.assign({},a,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=r}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,i){if(this.ctx){var e=i.size,n=i.font,a=i.weight,r=i.color,s=i.x,o=i.y,h=i.maxWidth;e=e||16,n=n||"PingFangSC-Semibold PingFang SC",r=r||"#333",s=s||0,o=o||0,this.ctx.save(),this.ctx.font="".concat(a," ").concat(e,"px ").concat(n),this.ctx.fillStyle=r,this.ctx.fillText(t,s,o,h),this.ctx.restore()}}},{key:"drawLine",value:function(t,i,e,n,a,r,s){this.ctx&&(this.ctx.save(),s&&this.ctx.setLineDash(s),this.ctx.fillStyle=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,n),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,i,e,n,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t,i,e,n),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=r),this.ctx.fillStyle=a,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,i=this.options,e=i.title,n=i.titleStyle;if(this.ctx&&e){var a=Object.assign({},n);["x","y","size","maxWidth"].map((function(i){if("number"==typeof a[i]){var e=a[i];a[i]=e*t.dpi}})),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(e,a),this.ctx.restore()}}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&a(i.prototype,e),r&&a(i,r),t}()},function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return v}));var n=e(2),a=e(0),r=e(1);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return e}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return h(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function c(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,i,e){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,i,e){var n=function(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=x(t)););return t}(t,i);if(n){var a=Object.getOwnPropertyDescriptor(n,i);return a.get?a.get.call(e):a.value}})(t,i,e||t)}function u(t,i){return(u=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function f(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=x(t);if(i){var a=x(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d(this,e)}}function d(t,i){return!i||"object"!==s(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&u(t,i)}(h,t);var i,e,n,s=f(h);function h(t,i){var e;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,h),(e=s.call(this,t,i)).xAxisData=[],e.xAxisHeight=0,e.yAxisData=[],e.yAxisWidth=0,e.minValue=0,e.maxValue=0,e}return i=h,(e=[{key:"initData",value:function(){var t=this,i=this.options,e=i.xAxisData,n=i.yAxisData,a=i.drawDataLength;e=e||[],n=n||[],a=a||7;var r=this.options.yAxisMinVal,s=this.options.yAxisMaxVal,o="number"==typeof r,h="number"==typeof s,c=h?s:0,l=o?r:999999;if(this.xAxisData=e.slice(-a),n.map((function(i,e){t.yAxisData[e]=i.slice(-(a||7)),t.yAxisData[e].map((function(t){t>c&&(c=t),t<l&&(l=t)}))})),l===c){var u=Math.max(5,.1*c);c+=u,l-=u}this.maxValue=h?s:c,this.minValue=o?r:l,this.afterInitData()}},{key:"drawAxis",value:function(){var t=this;if(this.ctx){var i=this.canvasPadding[3],e={startX:i+this.yAxisWidth,startY:this.chartEndY,endX:this.chartEndX,endY:this.chartEndY},n={startX:i+this.yAxisWidth,startY:this.chartStartY,endX:i+this.yAxisWidth,endY:this.chartEndY};this.ctx.clearRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight),this.drawRect(i+this.yAxisWidth,e.startY,this.chartWidth,this.xAxisHeight,this.options.canvasBg||"#fff"),this.ctx.clearRect(i,n.startY,this.yAxisWidth,this.chartHeight),this.drawRect(i,n.startY,this.yAxisWidth,this.chartHeight,this.options.canvasBg||"#fff");var a=this.options,s=a.axisStyle,o=a.xAxisLength,h=a.xAxisFormat,c=a.yAxisLength,l=a.yAxisFormat;o=o||10,c=c||10,c--;var u=Object.assign({},s);["lineWidth","lineHeight","size","splitXAxisWidth","splitXAxisRadius"].map((function(i){if("number"==typeof u[i]){var e=u[i];u[i]=e*t.dpi}}));var f=u.splitXAxisRadius,d=u.splitXAxisWidth,x=u.lineWidth,v=u.lineHeight,y=u.lineColor,p=u.splitXAxis,g=u.lineHeavyColor;if(f=f||this.formatNumParam(2),d=d||this.formatNumParam(2),x=x||this.formatNumParam(1),v=v||this.formatNumParam(1),y=y||"#666",g=g||"#666",this.options.showXAxisAuxiliaryLine&&!0!==p&&this.drawLine(e.startX,e.startY,e.endX,e.endY,v,y),this.options.showYAxisAuxiliaryLine&&this.drawLine(n.startX,n.startY,n.endX,n.endY,x,y),this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="center",this.xAxisHeight>=0){var m,b=this.xAxisData.length,P=b-1,w=(b-1)/(o-1);w<2&&(w=1);for(var A=new Array(4).fill(f),S=null===(m=this.options.axisStyle)||void 0===m?void 0:m.splitXAxis,O=0;O<b;O++){var X=this.getPosX(O)-d/2;if(0===O?X=Math.max(this.getPosX(O),this.chartStartX)-d/2:O===b&&(X=Math.min(this.getPosX(O),this.chartEndX)-d/2),O!==b-1&&O%w>=1){var W;if(!0!==(null===(W=this.options.axisStyle)||void 0===W?void 0:W.splitXAxis))continue;Object(r.b)(this.ctx,this.getPosX(O)-d/2,e.startY,d,v,A,y)}else{S&&Object(r.b)(this.ctx,this.getPosX(O)-d/2,e.startY,d,v,A,g);var j=this.xAxisData[P-O];j="function"==typeof h?h(j):j,X=this.getPosX(P-O);var M=this.chartEndY+v+10*this.dpi;this.ctx.font="normal ".concat(u.size,"px ").concat(u.font);var H=this.ctx.measureText(j).width/2;0===O&&(X=Math.min(X,this.canvasWidth-H)),O===P&&(X=Math.max(X,H)),this.drawText(j,{x:X,y:M,color:u.color,size:u.size,font:u.font,weight:"normal"})}}}if(this.ctx.textBaseline="middle",this.ctx.textAlign="right",this.yAxisWidth>=0)for(var C=(this.maxValue-this.minValue)/c,Y=0;Y<=c;Y++){var R=C*Y+this.minValue,k="function"==typeof l?l(R):R+"",T=this.chartStartX-10*this.dpi,E=this.getPosY(R);this.drawText(k,{x:T,y:E,color:u.color,size:u.size,font:u.font,weight:"normal",maxWidth:this.yAxisWidth-10*this.dpi}),Y>0&&this.drawLine(e.startX,E,e.endX,E,u.lineWidth||1,u.lineColor||"#666")}this.ctx.restore()}}},{key:"initSize",value:function(){if(this.canvas&&a.e){this.canvas.width=this.canvasWidth=this.elWidth*this.dpi,this.canvas.height=this.canvasHeight=this.elHeight*this.dpi,this.canvas.style.width=this.elWidth+"px",this.canvas.style.height=this.elHeight+"px";var t=this.options,i=t.title,e=t.titleBarHeight,n=t.canvasPadding,r=t.chartPadding,s=t.yAxisWidth,h=t.xAxisHeight;n=n||[0],r=r||[0],e=this.formatNumParam(e),s=this.formatNumParam(s),h=this.formatNumParam(h),this.xAxisHeight=h,this.yAxisWidth=s,this.titleBarHeight=i?e:0,this.canvasPadding=Object(a.b)(n,this.dpi);var c=o(this.canvasPadding,4),l=c[0],u=c[1],f=c[2],d=c[3];this.chartPadding=Object(a.b)(r,this.dpi),this.chartWidth=this.canvasWidth-d-u-s,this.chartHeight=this.canvasHeight-this.titleBarHeight-l-f-h,this.chartStartX=d+s,this.chartStartY=l+e,this.chartEndX=this.chartStartX+this.chartWidth,this.chartEndY=this.chartStartY+this.chartHeight}}},{key:"mergeOptions",value:function(t){var i={drawDataLength:7,xAxisHeight:30,xAxisData:[],xAxisLength:10,xAxisFormat:void 0,showXAxisAuxiliaryLine:!0,showYAxisAuxiliaryLine:!0,yAxisWidth:30,yAxisData:[],yAxisLength:10,yAxisFormat:void 0,axisStyle:void 0};this.options=Object.assign({},i,this.options,t);var e=Object.assign({},{lineColor:"#666",lineWidth:1,lineHeight:1,font:"PingFangSC-Semibold PingFang SC",size:10,color:"#666",splitXAxis:!1,lineHeavyColor:"#666",splitXAxisWidth:2,splitXAxisRadius:2},this.options.axisStyle,null==t?void 0:t.axisStyle);this.options.axisStyle=e,l(x(h.prototype),"mergeOptions",this).call(this,t)}},{key:"getPosY",value:function(t){var i=this.chartEndY-this.chartPadding[2],e=this.chartHeight-this.chartPadding[0]-this.chartPadding[2],n=this.maxValue-this.minValue;return i-e*((t-this.minValue)/n)}},{key:"getPosX",value:function(t){return this.chartStartX+this.chartPadding[3]+(this.chartWidth-this.chartPadding[1]-this.chartPadding[3])*(t/(this.xAxisData.length-1))}}])&&c(i.prototype,e),n&&c(i,n),h}(n.default)}]).default}));