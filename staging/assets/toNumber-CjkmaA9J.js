import{c as n}from"./_commonjsHelpers-BosuxZz1.js";var g=typeof n=="object"&&n&&n.Object===Object&&n,T=g,v=T,S=typeof self=="object"&&self&&self.Object===Object&&self,d=v||S||Function("return this")(),O=d,l=O,p=l.Symbol,f=p,a=f,m=Object.prototype,$=m.hasOwnProperty,_=m.toString,e=a?a.toStringTag:void 0;function u(r){var t=$.call(r,e),o=r[e];try{r[e]=void 0;var y=!0}catch{}var j=_.call(r);return y&&(t?r[e]=o:delete r[e]),j}var I=u,w=Object.prototype,x=w.toString;function G(r){return x.call(r)}var h=G,i=f,N=I,P=h,k="[object Null]",B="[object Undefined]",b=i?i.toStringTag:void 0;function E(r){return r==null?r===void 0?B:k:b&&b in Object(r)?N(r):P(r)}var L=E;function R(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var A=R;function F(r){return r!=null&&typeof r=="object"}var H=F,U=/\s/;function W(r){for(var t=r.length;t--&&U.test(r.charAt(t)););return t}var q=W,z=q,C=/^\s+/;function D(r){return r&&r.slice(0,z(r)+1).replace(C,"")}var J=D,K=L,M=H,Q="[object Symbol]";function V(r){return typeof r=="symbol"||M(r)&&K(r)==Q}var X=V,Y=J,c=A,Z=X,s=NaN,rr=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,er=/^0o[0-7]+$/i,or=parseInt;function nr(r){if(typeof r=="number")return r;if(Z(r))return s;if(c(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=c(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Y(r);var o=tr.test(r);return o||er.test(r)?or(r.slice(2),o?2:8):rr.test(r)?s:+r}var br=nr;export{L as _,A as a,O as b,f as c,T as d,X as e,H as i,br as t};
