"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(q,t){
var c=require("fs").readdir;function d(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);c.apply(null,e)}t.exports=d
});var s=a(function(g,n){
var y=require("fs").readdirSync;function v(e){try{return y(e)}catch(r){return r}}n.exports=v
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=i(),p=s();o(u,"sync",p);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
