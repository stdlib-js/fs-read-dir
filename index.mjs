// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r=t(Object.freeze({__proto__:null,default:{}})),n=r.readdir;function o(){var e,t;for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);n.apply(null,e)}var u=r.readdirSync;function c(e){try{return u(e)}catch(e){return e}}e(o,"sync",c);export{o as default,c as sync};
//# sourceMappingURL=index.mjs.map
