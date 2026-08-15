"use strict";var i=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var n=i(function(er,D){D.exports={nargs:7,nin:1,nout:1}});var v=i(function(ar,F){F.exports=[12,12,12,17,11,11,11,12,11,17,17,17,6,6,6,7,6,12,6,17,4,4,4,6,4,5,4,7,4,11,4,12,4,17,1,1,1,4,1,6,1,2,1,3,1,5,1,7,1,11,1,12,1,17,7,7,7,12,7,17,5,6,5,5,5,7,5,11,5,12,5,17,2,4,2,6,2,2,2,3,2,5,2,7,2,11,2,12,2,17,3,4,3,6,3,2,3,3,3,5,3,7,3,11,3,12,3,17]});var b=i(function(ir,x){
var e=require('@stdlib/math-base-special-abs/dist'),f=require('@stdlib/math-base-special-absf/dist'),q=require('@stdlib/math-base-special-labs/dist'),r=require('@stdlib/number-float64-base-identity/dist'),G=[e,e,f,f,f,e,q,q,q,q,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r];x.exports=G
});var h=i(function(tr,g){
var H=require('@stdlib/strided-dispatch/dist'),I=require('@stdlib/strided-base-unary/dist'),j=require('@stdlib/strided-base-dtype-resolve-enum/dist'),J=v(),l=n(),K=b(),L=H(I,J,K,l.nargs,l.nin,l.nout);function M(t,a,u,c,p,d,y){return L(t,j(a),u,c,j(p),d,y)}g.exports=M
});var E=i(function(ur,_){
var N=require('@stdlib/strided-dispatch/dist'),Q=require('@stdlib/strided-base-unary/dist').ndarray,R=require('@stdlib/strided-base-dtype-resolve-enum/dist'),S=v(),s=n(),T=b(),U=N(Q,S,T,s.nargs+s.nin+s.nout,s.nin,s.nout);function V(t,a,u,c,p,d,y,B,C){return U(t,R(a),u,c,p,R(d),y,B,C)}_.exports=V
});var z=i(function(sr,w){
var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/strided-base-meta-data-props/dist'),P=n(),k=v(),o=h(),X=E();W(o,"ndarray",X);O(P,k,o,!1);O(P,k,o.ndarray,!0);w.exports=o
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=z(),m,A=Z(Y(__dirname,"./native.js"));A instanceof Error?m=$:m=A;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
