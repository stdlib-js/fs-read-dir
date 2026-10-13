"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(c){throw (r=0, c)}};};var i=a(function(g,t){
var d=require("fs").readdir;function y(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);d.apply(null,e)}t.exports=y
});var s=a(function(f,n){
var v=require("fs").readdirSync;function o(e){try{return v(e)}catch(r){return r}}n.exports=o
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=i(),l=s();p(u,"sync",l);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
