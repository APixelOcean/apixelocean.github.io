import{S as N,A as G,B as K,C as y,D as Z,F as g,U as l,G as D,g as b,H as x,I as $,J as j,K as H,L as V,M as z,P as J,N as Q,b as F,O as W,R as X,Q as M,T as k,V as p,W as ee,X as re,Y as ne,f as U,Z as te,_ as ae,$ as ie}from"./runtime.CAjMPBEc.js";import{c as fe}from"./store.BGs2MOXK.js";function O(a,v=null,P){if(typeof a!="object"||a===null||N in a)return a;const o=j(a);if(o!==G&&o!==K)return a;var f=new Map,c=H(a),m=y(0);c&&f.set("length",y(a.length));var I;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Z();var t=f.get(e);return t===void 0?(t=y(r.value),f.set(e,t)):g(t,O(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,l),Y(m)}return!0},get(i,e,r){var _;if(e===N)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=D(i,e))!=null&&_.writable)&&(t=y(O(n?i[e]:l,I)),f.set(e,t)),t!==void 0){var u=b(t);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===N)return!0;var r=f.get(e),t=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||x!==null&&(!t||(u=D(i,e))!=null&&u.writable)){r===void 0&&(r=y(t?O(i[e],I):l),f.set(e,r));var n=b(r);if(n===l)return!1}return t},set(i,e,r,t){var R;var n=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var w=f.get(_+"");w!==void 0?g(w,l):_ in i&&(w=y(l),f.set(_+"",w))}n===void 0?(!u||(R=D(i,e))!=null&&R.writable)&&(n=y(void 0),g(n,O(r,I)),f.set(e,n)):(u=n.v!==l,g(n,O(r,I)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!u){if(c&&typeof e=="string"){var S=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=S.v&&g(S,E+1)}Y(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(n=>{var u=f.get(n);return u===void 0||u.v!==l});for(var[r,t]of f)t.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){$()}})}function Y(a,v=1){g(a,a.v+v)}function q(a){for(var v=x,P=x;v!==null&&!(v.f&(W|X));)v=v.parent;try{return M(v),a()}finally{M(P)}}function ve(a,v,P,o){var C;var f=(P&k)!==0,c=!p||(P&ee)!==0,m=(P&re)!==0,I=(P&ae)!==0,i=!1,e;m?[e,i]=fe(()=>a[v]):e=a[v];var r=N in a||ne in a,t=((C=D(a,v))==null?void 0:C.set)??(r&&m&&v in a?s=>a[v]=s:void 0),n=o,u=!0,_=!1,w=()=>(_=!0,u&&(u=!1,I?n=F(o):n=o),n);e===void 0&&o!==void 0&&(t&&c&&V(),e=w(),t&&t(e));var d;if(c)d=()=>{var s=a[v];return s===void 0?w():(u=!0,_=!1,s)};else{var S=q(()=>(f?U:te)(()=>a[v]));S.f|=z,d=()=>{var s=b(S);return s!==void 0&&(n=void 0),s===void 0?n:s}}if(!(P&J))return d;if(t){var E=a.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||E||i)&&t(h?d():s),s):d()}}var R=!1,B=!1,T=ie(e),A=q(()=>U(()=>{var s=d(),h=b(T);return R?(R=!1,B=!0,h):(B=!1,T.v=s)}));return f||(A.equals=Q),function(s,h){if(arguments.length>0){const L=h?b(A):c&&m?O(s):s;return A.equals(L)||(R=!0,g(T,L),_&&n!==void 0&&(n=L),F(()=>b(A))),s}return b(A)}}export{O as a,ve as p};
