// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e};var c=e;function f(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var p=f(Object.freeze({__proto__:null,default:{}})),_=p.readdir;function d(){var e,t;for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);_.apply(null,e)}var y=p.readdirSync;return c(d,"sync",{configurable:!1,enumerable:!1,writable:!1,value:function(e){try{return y(e)}catch(e){return e}}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).readDir=t();
//# sourceMappingURL=browser.js.map