"use strict";var d=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var b=(t,e)=>{for(var o in e)d(t,o,{get:e[o],enumerable:!0})},$=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Y(e))!Z.call(t,a)&&a!==o&&d(t,a,{get:()=>e[a],enumerable:!(r=X(e,a))||r.enumerable});return t};var tt=t=>$(d({},"__esModule",{value:!0}),t);var Ft={};b(Ft,{arrayAt:()=>j,asTuple:()=>T,constant:()=>D,createMapChain:()=>K,eqPick:()=>c,execFn:()=>k,fp:()=>O,get:()=>h,groupBy:()=>C,identity:()=>i,invert:()=>g,last:()=>B,mapConstValues:()=>P,mapKeys:()=>A,mapValues:()=>R,mutAddOnes:()=>E,mutRemove:()=>I,mutToggleInSet:()=>v,negate:()=>V,noop:()=>M,objFind:()=>S,objSome:()=>F,objSomeKeys:()=>q,objSomeValues:()=>w,omit:()=>_,pick:()=>z,pickBy:()=>n,pickKeysBy:()=>G,shallowObjMatch:()=>N,strictEntries:()=>s,strictKeys:()=>f,times:()=>H,timesConst:()=>u,timesFor:()=>J,timesMap:()=>l,toSet:()=>L,zip3:()=>Q});module.exports=tt(Ft);function et(t,e){return e>=0?t[e]:t[t.length+e]}var j=et;var ot=(...t)=>t,T=ot;var rt=t=>()=>t,D=rt;var p=(t=[])=>{let e=o=>p([...t,o]);return e.add=e,e.exec=o=>t.reduce((r,a)=>a(r),o),e};p.start=p().add;var K=p;var at=(t,e,o)=>t[o]===e[o],c=at;var st=t=>t(),k=st;var it=new Proxy({},{get:(t,e)=>o=>o[e]}),h=it;var nt=(t,e)=>{let o={};return t.forEach((r,a,W)=>{let m=e(r,a,W);o[m]?o[m].push(r):o[m]=[r]}),o},C=nt;var pt=t=>t,i=pt;var ct=Object.entries,s=ct;var ft=t=>Object.fromEntries(s(t).map(([e,o])=>[o,e])),g=ft;function ut(t){return t[t.length-1]}var B=ut;var lt=Object.keys,f=lt;var mt=(t,e)=>Object.fromEntries(f(t).map(o=>[o,e])),P=mt;var dt=(t,e)=>Object.fromEntries(s(t).map(([o,r])=>[e(r,o,t),r])),A=dt;var xt=(t,e)=>Object.fromEntries(s(t).map(([o,r])=>[o,e(r,o,t)])),R=xt;var bt=(t,e)=>(t.includes(e)||t.push(e),t),E=bt;var yt=(t,e)=>{let o=t.indexOf(e);return o>-1&&t.splice(o,1),t},I=yt;var Ot=(t,e)=>(t.has(e)?t.delete(e):t.add(e),t),v=Ot;var jt=t=>!t,V=jt;var Tt=()=>{},M=Tt;var Dt=(t,e=Boolean)=>s(t).find(([o,r])=>e(r,o,t)),S=Dt;var Kt=(t,e=Boolean)=>s(t).some(([o,r])=>e(r,o,t)),F=Kt;var kt=(t,e)=>Object.values(t).some(e),q=kt;var ht=(t,e=Boolean)=>Object.values(t).some(e),w=ht;var Ct=(t,e=i)=>Object.fromEntries(s(t).filter(([o,r])=>e(r,o,t))),n=Ct;var gt=(t,e)=>{let o=Array.isArray(e)?e:[e];return n(t,(r,a)=>!o.includes(a))},_=gt;var Bt=(t,e)=>{let o=Array.isArray(e)?e:[e];return n(t,(r,a)=>o.includes(a))},z=Bt;var Pt=(t,e=i)=>s(t).filter(([o,r])=>e(r,o,t)).map(([o])=>o),G=Pt;var At=(t,e)=>t==e?!0:Object.entries(e).every(([o,r])=>t[o]==r),N=At;var Rt=(t,e)=>Array(t).fill(e),u=Rt;var Et=(t,e)=>u(t,void 0).map((o,r)=>e(r)),l=Et;var It=t=>l(t,x.identity),H=It;var vt=(t,e)=>{for(let o=0;o<t;o++)e(o)},J=vt;var Vt=t=>new Set(t),L=Vt;var Mt=(t,e,o)=>t.map((r,a)=>[r,e[a],o[a]]),Q=Mt;var O={};b(O,{last:()=>y});var y={};b(y,{eqPick:()=>U});var St=t=>(e,o)=>c(e,o,t),U=St;0&&(module.exports={arrayAt,asTuple,constant,createMapChain,eqPick,execFn,fp,get,groupBy,identity,invert,last,mapConstValues,mapKeys,mapValues,mutAddOnes,mutRemove,mutToggleInSet,negate,noop,objFind,objSome,objSomeKeys,objSomeValues,omit,pick,pickBy,pickKeysBy,shallowObjMatch,strictEntries,strictKeys,times,timesConst,timesFor,timesMap,toSet,zip3});
//# sourceMappingURL=index.js.map