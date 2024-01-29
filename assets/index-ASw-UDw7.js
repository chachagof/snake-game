(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const X={},be=[],vt=()=>{},os=()=>!1,jn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Br=t=>t.startsWith("onUpdate:"),rt=Object.assign,Yr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ss=Object.prototype.hasOwnProperty,U=(t,e)=>ss.call(t,e),j=Array.isArray,ye=t=>$n(t)==="[object Map]",Ni=t=>$n(t)==="[object Set]",z=t=>typeof t=="function",nt=t=>typeof t=="string",Ee=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",Mi=t=>(J(t)||z(t))&&z(t.then)&&z(t.catch),Li=Object.prototype.toString,$n=t=>Li.call(t),ls=t=>$n(t).slice(8,-1),Ri=t=>$n(t)==="[object Object]",Wr=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fs=/-(\w)/g,Tt=zn(t=>t.replace(fs,(e,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,Se=zn(t=>t.replace(cs,"-$1").toLowerCase()),Dn=zn(t=>t.charAt(0).toUpperCase()+t.slice(1)),nr=zn(t=>t?`on${Dn(t)}`:""),Xt=(t,e)=>!Object.is(t,e),rr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},us=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pa;const Fi=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?ps(r):Kr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||J(t))return t}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,hs=/\/\*[^]*?\*\//g;function ps(t){const e={};return t.replace(hs,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vr(t){let e="";if(nt(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Vr(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=Ur(gs);function ji(t){return!!t||t===""}const ar=t=>nt(t)?t:t==null?"":j(t)||J(t)&&(t.toString===Li||!z(t.toString))?JSON.stringify(t,$i,2):String(t),$i=(t,e)=>e&&e.__v_isRef?$i(t,e.value):ye(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[ir(r,i)+" =>"]=a,n),{})}:Ni(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ir(n))}:Ee(e)?ir(e):J(e)&&!j(e)&&!Ri(e)?String(e):e,ir=(t,e="")=>{var n;return Ee(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class bs{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(t,e=yt){e&&e.active&&e.effects.push(t)}function ws(){return yt}let se;class Gr{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ys(this,a)}get dirty(){if(this._dirtyLevel===1){ue();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(xs(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),de()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Vt,n=se;try{return Vt=!0,se=this,this._runnings++,Ca(this),this.fn()}finally{Ia(this),this._runnings--,se=n,Vt=e}}stop(){var e;this.active&&(Ca(this),Ia(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function xs(t){return t.value}function Ca(t){t._trackId++,t._depsLength=0}function Ia(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)zi(t.deps[e],t);t.deps.length=t._depsLength}}function zi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Vt=!0,vr=0;const Di=[];function ue(){Di.push(Vt),Vt=!1}function de(){const t=Di.pop();Vt=t===void 0?!0:t}function Xr(){vr++}function qr(){for(vr--;!vr&&br.length;)br.shift()()}function Hi(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&zi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const br=[];function Ui(t,e,n){Xr();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const a=r._dirtyLevel;r._dirtyLevel=e,a===0&&(r._shouldSchedule=!0,r.trigger())}Bi(t),qr()}function Bi(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,br.push(e.scheduler))}const Yi=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},yr=new WeakMap,le=Symbol(""),wr=Symbol("");function dt(t,e,n){if(Vt&&se){let r=yr.get(t);r||yr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Yi(()=>r.delete(n))),Hi(se,a)}}function Ft(t,e,n,r,a,i){const o=yr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&j(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Ee(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":j(t)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(le)),ye(t)&&s.push(o.get(wr)));break;case"delete":j(t)||(s.push(o.get(le)),ye(t)&&s.push(o.get(wr)));break;case"set":ye(t)&&s.push(o.get(le));break}Xr();for(const l of s)l&&Ui(l,2);qr()}const _s=Ur("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ee)),Ta=As();function As(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ue(),Xr();const r=B(this)[e].apply(this,n);return qr(),de(),r}}),t}function ks(t){const e=B(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Ki{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?js:qi:i?Xi:Gi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!a){if(o&&U(Ta,n))return Reflect.get(Ta,n,r);if(n==="hasOwnProperty")return ks}const s=Reflect.get(e,n,r);return(Ee(n)?Wi.has(n):_s(n))||(a||dt(e,"get",n),i)?s:mt(s)?o&&Wr(n)?s:s.value:J(s)?a?Ji(s):Qr(s):s}}class Vi extends Ki{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Ae(i);if(!Pn(r)&&!Ae(r)&&(i=B(i),r=B(r)),!j(e)&&mt(i)&&!mt(r))return l?!1:(i.value=r,!0)}const o=j(e)&&Wr(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,a);return e===B(a)&&(o?Xt(r,i)&&Ft(e,"set",n,r):Ft(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&Ft(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Ee(n)||!Wi.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",j(e)?"length":le),Reflect.ownKeys(e)}}class Os extends Ki{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Es=new Vi,Ss=new Os,Ps=new Vi(!0),Jr=t=>t,Hn=t=>Reflect.getPrototypeOf(t);function nn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(Xt(e,i)&&dt(a,"get",e),dt(a,"get",i));const{has:o}=Hn(a),s=r?Jr:n?ea:$e;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function rn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(Xt(t,a)&&dt(r,"has",t),dt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function an(t,e=!1){return t=t.__v_raw,!e&&dt(B(t),"iterate",le),Reflect.get(t,"size",t)}function Na(t){t=B(t);const e=B(this);return Hn(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function Ma(t,e){e=B(e);const n=B(this),{has:r,get:a}=Hn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Xt(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function La(t){const e=B(this),{has:n,get:r}=Hn(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ft(e,"delete",t,void 0),i}function Ra(){const t=B(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function on(t,e){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=e?Jr:t?ea:$e;return!t&&dt(s,"iterate",le),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function sn(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),o=ye(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?Jr:e?ea:$e;return!e&&dt(i,"iterate",l?wr:le),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:s?[u(m[0]),u(m[1])]:u(m),done:g}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cs(){const t={get(i){return nn(this,i)},get size(){return an(this)},has:rn,add:Na,set:Ma,delete:La,clear:Ra,forEach:on(!1,!1)},e={get(i){return nn(this,i,!1,!0)},get size(){return an(this)},has:rn,add:Na,set:Ma,delete:La,clear:Ra,forEach:on(!1,!0)},n={get(i){return nn(this,i,!0)},get size(){return an(this,!0)},has(i){return rn.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:on(!0,!1)},r={get(i){return nn(this,i,!0,!0)},get size(){return an(this,!0)},has(i){return rn.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:on(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sn(i,!1,!1),n[i]=sn(i,!0,!1),e[i]=sn(i,!1,!0),r[i]=sn(i,!0,!0)}),[t,n,e,r]}const[Is,Ts,Ns,Ms]=Cs();function Zr(t,e){const n=e?t?Ms:Ns:t?Ts:Is;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Ls={get:Zr(!1,!1)},Rs={get:Zr(!1,!0)},Fs={get:Zr(!0,!1)},Gi=new WeakMap,Xi=new WeakMap,qi=new WeakMap,js=new WeakMap;function $s(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zs(t){return t.__v_skip||!Object.isExtensible(t)?0:$s(ls(t))}function Qr(t){return Ae(t)?t:ta(t,!1,Es,Ls,Gi)}function Ds(t){return ta(t,!1,Ps,Rs,Xi)}function Ji(t){return ta(t,!0,Ss,Fs,qi)}function ta(t,e,n,r,a){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=zs(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function we(t){return Ae(t)?we(t.__v_raw):!!(t&&t.__v_isReactive)}function Ae(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function Zi(t){return we(t)||Ae(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function Qi(t){return Sn(t,"__v_skip",!0),t}const $e=t=>J(t)?Qr(t):t,ea=t=>J(t)?Ji(t):t;class to{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Gr(()=>e(this._value),()=>wn(this,1),()=>this.dep&&Bi(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return(!e._cacheable||e.effect.dirty)&&Xt(e._value,e._value=e.effect.run())&&wn(e,2),eo(e),e.effect._dirtyLevel>=1&&wn(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Hs(t,e,n=!1){let r,a;const i=z(t);return i?(r=t,a=vt):(r=t.get,a=t.set),new to(r,a,i||!a,n)}function eo(t){Vt&&se&&(t=B(t),Hi(se,t.dep||(t.dep=Yi(()=>t.dep=void 0,t instanceof to?t:void 0))))}function wn(t,e=2,n){t=B(t);const r=t.dep;r&&Ui(r,e)}function mt(t){return!!(t&&t.__v_isRef===!0)}function ln(t){return Us(t,!1)}function Us(t,e){return mt(t)?t:new Bs(t,e)}class Bs{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:$e(e)}get value(){return eo(this),this._value}set value(e){const n=this.__v_isShallow||Pn(e)||Ae(e);e=n?e:B(e),Xt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$e(e),wn(this,2))}}function Ys(t){return mt(t)?t.value:t}const Ws={get:(t,e,n)=>Ys(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return mt(a)&&!mt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function no(t){return we(t)?t:new Proxy(t,Ws)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Un(i,e,n)}return a}function kt(t,e,n,r){if(z(t)){const i=Gt(t,e,n,r);return i&&Mi(i)&&i.catch(o=>{Un(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(kt(t[i],e,n,r));return a}function Un(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Gt(l,null,10,[t,o,s]);return}}Ks(t,n,a,r)}function Ks(t,e,n,r=!0){console.error(t)}let ze=!1,xr=!1;const at=[];let Ct=0;const xe=[];let Yt=null,ae=0;const ro=Promise.resolve();let na=null;function Vs(t){const e=na||ro;return t?e.then(this?t.bind(this):t):e}function Gs(t){let e=Ct+1,n=at.length;for(;e<n;){const r=e+n>>>1,a=at[r],i=De(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function ra(t){(!at.length||!at.includes(t,ze&&t.allowRecurse?Ct+1:Ct))&&(t.id==null?at.push(t):at.splice(Gs(t.id),0,t),ao())}function ao(){!ze&&!xr&&(xr=!0,na=ro.then(oo))}function Xs(t){const e=at.indexOf(t);e>Ct&&at.splice(e,1)}function qs(t){j(t)?xe.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?ae+1:ae))&&xe.push(t),ao()}function Fa(t,e,n=ze?Ct+1:0){for(;n<at.length;n++){const r=at[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;at.splice(n,1),n--,r()}}}function io(t){if(xe.length){const e=[...new Set(xe)].sort((n,r)=>De(n)-De(r));if(xe.length=0,Yt){Yt.push(...e);return}for(Yt=e,ae=0;ae<Yt.length;ae++)Yt[ae]();Yt=null,ae=0}}const De=t=>t.id==null?1/0:t.id,Js=(t,e)=>{const n=De(t)-De(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function oo(t){xr=!1,ze=!0,at.sort(Js);try{for(Ct=0;Ct<at.length;Ct++){const e=at[Ct];e&&e.active!==!1&&Gt(e,null,14)}}finally{Ct=0,at.length=0,io(),ze=!1,na=null,(at.length||xe.length)&&oo()}}function Zs(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[u]||X;g&&(a=n.map(A=>nt(A)?A.trim():A)),m&&(a=n.map(us))}let s,l=r[s=nr(e)]||r[s=nr(Tt(e))];!l&&i&&(l=r[s=nr(Se(e))]),l&&kt(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,kt(c,t,6,a)}}function so(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!z(t)){const l=c=>{const u=so(c,e,!0);u&&(s=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(J(t)&&r.set(t,null),null):(j(i)?i.forEach(l=>o[l]=null):rt(o,i),J(t)&&r.set(t,o),o)}function Bn(t,e){return!t||!jn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Se(e))||U(t,e))}let xt=null,lo=null;function Cn(t){const e=xt;return xt=t,lo=t&&t.type.__scopeId||null,e}function Qs(t,e=xt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Va(-1);const i=Cn(e);let o;try{o=t(...a)}finally{Cn(i),r._d&&Va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:g,setupState:A,ctx:R,inheritAttrs:M}=t;let $,x;const S=Cn(t);try{if(n.shapeFlag&4){const C=a||r,D=C;$=Pt(u.call(D,C,m,i,A,g,R)),x=l}else{const C=e;$=Pt(C.length>1?C(i,{attrs:l,slots:s,emit:c}):C(i,null)),x=e.props?l:tl(l)}}catch(C){Re.length=0,Un(C,t,1),$=lt(He)}let P=$;if(x&&M!==!1){const C=Object.keys(x),{shapeFlag:D}=P;C.length&&D&7&&(o&&C.some(Br)&&(x=el(x,o)),P=ke(P,x))}return n.dirs&&(P=ke(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),$=P,Cn(S),$}const tl=t=>{let e;for(const n in t)(n==="class"||n==="style"||jn(n))&&((e||(e={}))[n]=t[n]);return e},el=(t,e)=>{const n={};for(const r in t)(!Br(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ja(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const g=u[m];if(o[g]!==r[g]&&!Bn(c,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ja(r,o,c):!0:!!o;return!1}function ja(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Bn(n,i))return!0}return!1}function rl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const fo="components";function al(t,e){return ol(fo,t,!0,e)||t}const il=Symbol.for("v-ndc");function ol(t,e,n=!0,r=!1){const a=xt||it;if(a){const i=a.type;if(t===fo){const s=af(i,!1);if(s&&(s===e||s===Tt(e)||s===Dn(Tt(e))))return i}const o=$a(a[t]||i[t],e)||$a(a.appContext[t],e);return!o&&r?i:o}}function $a(t,e){return t&&(t[e]||t[Tt(e)]||t[Dn(Tt(e))])}const sl=t=>t.__isSuspense;function ll(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):qs(t)}const fl=Symbol.for("v-scx"),cl=()=>An(fl),fn={};function xn(t,e,n){return co(t,e,n)}function co(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=X){if(e&&i){const L=e;e=(...Q)=>{L(...Q),D()}}const l=it,c=L=>r===!0?L:pe(L,r===!1?1:void 0);let u,m=!1,g=!1;if(mt(t)?(u=()=>t.value,m=Pn(t)):we(t)?(u=()=>c(t),m=!0):j(t)?(g=!0,m=t.some(L=>we(L)||Pn(L)),u=()=>t.map(L=>{if(mt(L))return L.value;if(we(L))return c(L);if(z(L))return Gt(L,l,2)})):z(t)?e?u=()=>Gt(t,l,2):u=()=>(A&&A(),kt(t,l,3,[R])):u=vt,e&&r){const L=u;u=()=>pe(L())}let A,R=L=>{A=P.onStop=()=>{Gt(L,l,4),A=P.onStop=void 0}},M;if(Vn)if(R=vt,e?n&&kt(e,l,3,[u(),g?[]:void 0,R]):u(),a==="sync"){const L=cl();M=L.__watcherHandles||(L.__watcherHandles=[])}else return vt;let $=g?new Array(t.length).fill(fn):fn;const x=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||m||(g?L.some((Q,ft)=>Xt(Q,$[ft])):Xt(L,$)))&&(A&&A(),kt(e,l,3,[L,$===fn?void 0:g&&$[0]===fn?[]:$,R]),$=L)}else P.run()};x.allowRecurse=!!e;let S;a==="sync"?S=x:a==="post"?S=()=>ut(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),S=()=>ra(x));const P=new Gr(u,vt,S),C=ws(),D=()=>{P.stop(),C&&Yr(C.effects,P)};return e?n?x():$=P.run():a==="post"?ut(P.run.bind(P),l&&l.suspense):P.run(),M&&M.push(D),D}function ul(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?uo(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=Ge(this),s=co(a,i.bind(r),n);return o(),s}function uo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pe(t,e,n=0,r){if(!J(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),mt(t))pe(t.value,e,n,r);else if(j(t))for(let a=0;a<t.length;a++)pe(t[a],e,n,r);else if(Ni(t)||ye(t))t.forEach(a=>{pe(a,e,n,r)});else if(Ri(t))for(const a in t)pe(t[a],e,n,r);return t}function ee(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ue(),kt(l,n,8,[t.el,s,t,e]),de())}}/*! #__NO_SIDE_EFFECTS__ */function dl(t,e){return z(t)?rt({name:t.name},e,{setup:t}):t}const _n=t=>!!t.type.__asyncLoader,mo=t=>t.type.__isKeepAlive;function ml(t,e){ho(t,"a",e)}function hl(t,e){ho(t,"da",e)}function ho(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Yn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)mo(a.parent.vnode)&&pl(r,e,n,a),a=a.parent}}function pl(t,e,n,r){const a=Yn(e,t,r,!0);aa(()=>{Yr(r[e],a)},n)}function Yn(t,e,n=it,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ue();const s=Ge(n),l=kt(e,n,t,o);return s(),de(),l});return r?a.unshift(i):a.push(i),i}}const Dt=t=>(e,n=it)=>(!Vn||t==="sp")&&Yn(t,(...r)=>e(...r),n),gl=Dt("bm"),po=Dt("m"),vl=Dt("bu"),bl=Dt("u"),yl=Dt("bum"),aa=Dt("um"),wl=Dt("sp"),xl=Dt("rtg"),_l=Dt("rtc");function Al(t,e=it){Yn("ec",t,e)}const _r=t=>t?Eo(t)?la(t)||t.proxy:_r(t.parent):null,Le=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_r(t.parent),$root:t=>_r(t.root),$emit:t=>t.emit,$options:t=>ia(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ra(t.update)}),$nextTick:t=>t.n||(t.n=Vs.bind(t.proxy)),$watch:t=>ul.bind(t)}),sr=(t,e)=>t!==X&&!t.__isScriptSetup&&U(t,e),kl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const A=o[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(sr(r,e))return o[e]=1,r[e];if(a!==X&&U(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,i[e];if(n!==X&&U(n,e))return o[e]=4,n[e];Ar&&(o[e]=0)}}const u=Le[e];let m,g;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==X&&U(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,U(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return sr(a,e)?(a[e]=n,!0):r!==X&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==X&&U(t,o)||sr(e,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Le,o)||U(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function za(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ar=!0;function Ol(t){const e=ia(t),n=t.proxy,r=t.ctx;Ar=!1,e.beforeCreate&&Da(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:g,beforeUpdate:A,updated:R,activated:M,deactivated:$,beforeDestroy:x,beforeUnmount:S,destroyed:P,unmounted:C,render:D,renderTracked:L,renderTriggered:Q,errorCaptured:ft,serverPrefetch:gt,expose:Nt,inheritAttrs:Ce,components:Ze,directives:Qe,filters:Zn}=e;if(c&&El(c,r,null),o)for(const q in o){const W=o[q];z(W)&&(r[q]=W.bind(n))}if(a){const q=a.call(n,n);J(q)&&(t.data=Qr(q))}if(Ar=!0,i)for(const q in i){const W=i[q],Qt=z(W)?W.bind(n,n):z(W.get)?W.get.bind(n,n):vt,tn=!z(W)&&z(W.set)?W.set.bind(n):vt,te=re({get:Qt,set:tn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>te.value,set:Ot=>te.value=Ot})}if(s)for(const q in s)go(s[q],r,n,q);if(l){const q=z(l)?l.call(n):l;Reflect.ownKeys(q).forEach(W=>{Nl(W,q[W])})}u&&Da(u,t,"c");function ot(q,W){j(W)?W.forEach(Qt=>q(Qt.bind(n))):W&&q(W.bind(n))}if(ot(gl,m),ot(po,g),ot(vl,A),ot(bl,R),ot(ml,M),ot(hl,$),ot(Al,ft),ot(_l,L),ot(xl,Q),ot(yl,S),ot(aa,C),ot(wl,gt),j(Nt))if(Nt.length){const q=t.exposed||(t.exposed={});Nt.forEach(W=>{Object.defineProperty(q,W,{get:()=>n[W],set:Qt=>n[W]=Qt})})}else t.exposed||(t.exposed={});D&&t.render===vt&&(t.render=D),Ce!=null&&(t.inheritAttrs=Ce),Ze&&(t.components=Ze),Qe&&(t.directives=Qe)}function El(t,e,n=vt){j(t)&&(t=kr(t));for(const r in t){const a=t[r];let i;J(a)?"default"in a?i=An(a.from||r,a.default,!0):i=An(a.from||r):i=An(a),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Da(t,e,n){kt(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function go(t,e,n,r){const a=r.includes(".")?uo(n,r):()=>n[r];if(nt(t)){const i=e[t];z(i)&&xn(a,i)}else if(z(t))xn(a,t.bind(n));else if(J(t))if(j(t))t.forEach(i=>go(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&xn(a,i,t)}}function ia(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>In(l,c,o,!0)),In(l,e,o)),J(e)&&i.set(e,l),l}function In(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&In(t,i,n,!0),a&&a.forEach(o=>In(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Sl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Sl={data:Ha,props:Ua,emits:Ua,methods:Ne,computed:Ne,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Ne,directives:Ne,watch:Cl,provide:Ha,inject:Pl};function Ha(t,e){return e?t?function(){return rt(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Pl(t,e){return Ne(kr(t),kr(e))}function kr(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Ne(t,e){return t?rt(Object.create(null),t,e):e}function Ua(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:rt(Object.create(null),za(t),za(e??{})):e}function Cl(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=st(t[r],e[r]);return n}function vo(){return{app:null,config:{isNativeTag:os,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Il=0;function Tl(t,e){return function(r,a=null){z(r)||(r=rt({},r)),a!=null&&!J(a)&&(a=null);const i=vo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Il++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:lf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...u)):z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const g=lt(r,a);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(g,c):t(g,c,m),s=!0,l._container=c,c.__vue_app__=l,la(g.component)||g.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Tn=l;try{return c()}finally{Tn=null}}};return l}}let Tn=null;function Nl(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function An(t,e,n=!1){const r=it||xt;if(r||Tn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}function Ml(t,e,n,r=!1){const a={},i={};Sn(i,Kn,1),t.propsDefaults=Object.create(null),bo(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Ds(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Ll(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=B(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let g=u[m];if(Bn(t.emitsOptions,g))continue;const A=e[g];if(l)if(U(i,g))A!==i[g]&&(i[g]=A,c=!0);else{const R=Tt(g);a[R]=Or(l,s,R,A,t,!1)}else A!==i[g]&&(i[g]=A,c=!0)}}}else{bo(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Se(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Or(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!U(e,m))&&(delete i[m],c=!0)}c&&Ft(t,"set","$attrs")}function bo(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(yn(l))continue;const c=e[l];let u;a&&U(a,u=Tt(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Bn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||X;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Or(a,l,m,c[m],t,!U(c,m))}}return o}function Or(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&z(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=Ge(a);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Se(n))&&(r=!0))}return r}function yo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!z(t)){const u=m=>{l=!0;const[g,A]=yo(m,e,!0);rt(o,g),A&&s.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return J(t)&&r.set(t,be),be;if(j(i))for(let u=0;u<i.length;u++){const m=Tt(i[u]);Ba(m)&&(o[m]=X)}else if(i)for(const u in i){const m=Tt(u);if(Ba(m)){const g=i[u],A=o[m]=j(g)||z(g)?{type:g}:rt({},g);if(A){const R=Ka(Boolean,A.type),M=Ka(String,A.type);A[0]=R>-1,A[1]=M<0||R<M,(R>-1||U(A,"default"))&&s.push(m)}}}const c=[o,s];return J(t)&&r.set(t,c),c}function Ba(t){return t[0]!=="$"}function Ya(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wa(t,e){return Ya(t)===Ya(e)}function Ka(t,e){return j(e)?e.findIndex(n=>Wa(n,t)):z(e)&&Wa(e,t)?0:-1}const wo=t=>t[0]==="_"||t==="$stable",oa=t=>j(t)?t.map(Pt):[Pt(t)],Rl=(t,e,n)=>{if(e._n)return e;const r=Qs((...a)=>oa(e(...a)),n);return r._c=!1,r},xo=(t,e,n)=>{const r=t._ctx;for(const a in t){if(wo(a))continue;const i=t[a];if(z(i))e[a]=Rl(a,i,r);else if(i!=null){const o=oa(i);e[a]=()=>o}}},_o=(t,e)=>{const n=oa(e);t.slots.default=()=>n},Fl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Sn(e,"_",n)):xo(e,t.slots={})}else t.slots={},e&&_o(t,e);Sn(t.slots,Kn,1)},jl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=X;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(rt(a,e),!n&&s===1&&delete a._):(i=!e.$stable,xo(e,a)),o=e}else e&&(_o(t,e),o={default:1});if(i)for(const s in a)!wo(s)&&o[s]==null&&delete a[s]};function Er(t,e,n,r,a=!1){if(j(t)){t.forEach((g,A)=>Er(g,e&&(j(e)?e[A]:e),n,r,a));return}if(_n(r)&&!a)return;const i=r.shapeFlag&4?la(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,U(m,c)&&(m[c]=null)):mt(c)&&(c.value=null)),z(l))Gt(l,s,12,[o,u]);else{const g=nt(l),A=mt(l),R=t.f;if(g||A){const M=()=>{if(R){const $=g?U(m,l)?m[l]:u[l]:l.value;a?j($)&&Yr($,i):j($)?$.includes(i)||$.push(i):g?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,U(m,l)&&(m[l]=o)):A&&(l.value=o,t.k&&(u[t.k]=o))};a||R?M():(M.id=-1,ut(M,n))}}}const ut=ll;function $l(t){return zl(t)}function zl(t,e){const n=Fi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:g,setScopeId:A=vt,insertStaticContent:R}=t,M=(f,d,h,p=null,v=null,w=null,k=void 0,y=null,_=!!d.dynamicChildren)=>{if(f===d)return;f&&!Te(f,d)&&(p=en(f),Ot(f,v,w,!0),f=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:N}=d;switch(b){case Wn:$(f,d,h,p);break;case He:x(f,d,h,p);break;case fr:f==null&&S(d,h,p,k);break;case Lt:Ze(f,d,h,p,v,w,k,y,_);break;default:N&1?D(f,d,h,p,v,w,k,y,_):N&6?Qe(f,d,h,p,v,w,k,y,_):(N&64||N&128)&&b.process(f,d,h,p,v,w,k,y,_,me)}E!=null&&v&&Er(E,f&&f.ref,w,d||f,!d)},$=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},x=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},S=(f,d,h,p)=>{[f.el,f.anchor]=R(f.children,d,h,p,f.el,f.anchor)},P=({el:f,anchor:d},h,p)=>{let v;for(;f&&f!==d;)v=g(f),r(f,h,p),f=v;r(d,h,p)},C=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=g(f),a(f),f=h;a(d)},D=(f,d,h,p,v,w,k,y,_)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),f==null?L(d,h,p,v,w,k,y,_):gt(f,d,v,w,k,y,_)},L=(f,d,h,p,v,w,k,y)=>{let _,b;const{props:E,shapeFlag:N,transition:T,dirs:F}=f;if(_=f.el=o(f.type,w,E&&E.is,E),N&8?u(_,f.children):N&16&&ft(f.children,_,null,p,v,lr(f,w),k,y),F&&ee(f,null,p,"created"),Q(_,f,f.scopeId,k,p),E){for(const Y in E)Y!=="value"&&!yn(Y)&&i(_,Y,null,E[Y],w,f.children,p,v,Mt);"value"in E&&i(_,"value",null,E.value,w),(b=E.onVnodeBeforeMount)&&St(b,p,f)}F&&ee(f,null,p,"beforeMount");const H=Dl(v,T);H&&T.beforeEnter(_),r(_,d,h),((b=E&&E.onVnodeMounted)||H||F)&&ut(()=>{b&&St(b,p,f),H&&T.enter(_),F&&ee(f,null,p,"mounted")},v)},Q=(f,d,h,p,v)=>{if(h&&A(f,h),p)for(let w=0;w<p.length;w++)A(f,p[w]);if(v){let w=v.subTree;if(d===w){const k=v.vnode;Q(f,k,k.scopeId,k.slotScopeIds,v.parent)}}},ft=(f,d,h,p,v,w,k,y,_=0)=>{for(let b=_;b<f.length;b++){const E=f[b]=y?Wt(f[b]):Pt(f[b]);M(null,E,d,h,p,v,w,k,y)}},gt=(f,d,h,p,v,w,k)=>{const y=d.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:E}=d;_|=f.patchFlag&16;const N=f.props||X,T=d.props||X;let F;if(h&&ne(h,!1),(F=T.onVnodeBeforeUpdate)&&St(F,h,d,f),E&&ee(d,f,h,"beforeUpdate"),h&&ne(h,!0),b?Nt(f.dynamicChildren,b,y,h,p,lr(d,v),w):k||W(f,d,y,null,h,p,lr(d,v),w,!1),_>0){if(_&16)Ce(y,d,N,T,h,p,v);else if(_&2&&N.class!==T.class&&i(y,"class",null,T.class,v),_&4&&i(y,"style",N.style,T.style,v),_&8){const H=d.dynamicProps;for(let Y=0;Y<H.length;Y++){const G=H[Y],et=N[G],bt=T[G];(bt!==et||G==="value")&&i(y,G,et,bt,v,f.children,h,p,Mt)}}_&1&&f.children!==d.children&&u(y,d.children)}else!k&&b==null&&Ce(y,d,N,T,h,p,v);((F=T.onVnodeUpdated)||E)&&ut(()=>{F&&St(F,h,d,f),E&&ee(d,f,h,"updated")},p)},Nt=(f,d,h,p,v,w,k)=>{for(let y=0;y<d.length;y++){const _=f[y],b=d[y],E=_.el&&(_.type===Lt||!Te(_,b)||_.shapeFlag&70)?m(_.el):h;M(_,b,E,null,p,v,w,k,!0)}},Ce=(f,d,h,p,v,w,k)=>{if(h!==p){if(h!==X)for(const y in h)!yn(y)&&!(y in p)&&i(f,y,h[y],null,k,d.children,v,w,Mt);for(const y in p){if(yn(y))continue;const _=p[y],b=h[y];_!==b&&y!=="value"&&i(f,y,b,_,k,d.children,v,w,Mt)}"value"in p&&i(f,"value",h.value,p.value,k)}},Ze=(f,d,h,p,v,w,k,y,_)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:N,dynamicChildren:T,slotScopeIds:F}=d;F&&(y=y?y.concat(F):F),f==null?(r(b,h,p),r(E,h,p),ft(d.children||[],h,E,v,w,k,y,_)):N>0&&N&64&&T&&f.dynamicChildren?(Nt(f.dynamicChildren,T,h,v,w,k,y),(d.key!=null||v&&d===v.subTree)&&Ao(f,d,!0)):W(f,d,h,E,v,w,k,y,_)},Qe=(f,d,h,p,v,w,k,y,_)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?v.ctx.activate(d,h,p,k,_):Zn(d,h,p,v,w,k,_):_a(f,d,_)},Zn=(f,d,h,p,v,w,k)=>{const y=f.component=Ql(f,p,v);if(mo(f)&&(y.ctx.renderer=me),tf(y),y.asyncDep){if(v&&v.registerDep(y,ot),!f.el){const _=y.subTree=lt(He);x(null,_,d,h)}}else ot(y,f,d,h,v,w,k)},_a=(f,d,h)=>{const p=d.component=f.component;if(nl(f,d,h))if(p.asyncDep&&!p.asyncResolved){q(p,d,h);return}else p.next=d,Xs(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},ot=(f,d,h,p,v,w,k)=>{const y=()=>{if(f.isMounted){let{next:E,bu:N,u:T,parent:F,vnode:H}=f;{const he=ko(f);if(he){E&&(E.el=H.el,q(f,E,k)),he.asyncDep.then(()=>{f.isUnmounted||y()});return}}let Y=E,G;ne(f,!1),E?(E.el=H.el,q(f,E,k)):E=H,N&&rr(N),(G=E.props&&E.props.onVnodeBeforeUpdate)&&St(G,F,E,H),ne(f,!0);const et=or(f),bt=f.subTree;f.subTree=et,M(bt,et,m(bt.el),en(bt),f,v,w),E.el=et.el,Y===null&&rl(f,et.el),T&&ut(T,v),(G=E.props&&E.props.onVnodeUpdated)&&ut(()=>St(G,F,E,H),v)}else{let E;const{el:N,props:T}=d,{bm:F,m:H,parent:Y}=f,G=_n(d);if(ne(f,!1),F&&rr(F),!G&&(E=T&&T.onVnodeBeforeMount)&&St(E,Y,d),ne(f,!0),N&&er){const et=()=>{f.subTree=or(f),er(N,f.subTree,f,v,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&et()):et()}else{const et=f.subTree=or(f);M(null,et,h,p,f,v,w),d.el=et.el}if(H&&ut(H,v),!G&&(E=T&&T.onVnodeMounted)){const et=d;ut(()=>St(E,Y,et),v)}(d.shapeFlag&256||Y&&_n(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&ut(f.a,v),f.isMounted=!0,d=h=p=null}},_=f.effect=new Gr(y,vt,()=>ra(b),f.scope),b=f.update=()=>{_.dirty&&_.run()};b.id=f.uid,ne(f,!0),b()},q=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,Ll(f,d.props,p,h),jl(f,d.children,h),ue(),Fa(f),de()},W=(f,d,h,p,v,w,k,y,_=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,N=d.children,{patchFlag:T,shapeFlag:F}=d;if(T>0){if(T&128){tn(b,N,h,p,v,w,k,y,_);return}else if(T&256){Qt(b,N,h,p,v,w,k,y,_);return}}F&8?(E&16&&Mt(b,v,w),N!==b&&u(h,N)):E&16?F&16?tn(b,N,h,p,v,w,k,y,_):Mt(b,v,w,!0):(E&8&&u(h,""),F&16&&ft(N,h,p,v,w,k,y,_))},Qt=(f,d,h,p,v,w,k,y,_)=>{f=f||be,d=d||be;const b=f.length,E=d.length,N=Math.min(b,E);let T;for(T=0;T<N;T++){const F=d[T]=_?Wt(d[T]):Pt(d[T]);M(f[T],F,h,null,v,w,k,y,_)}b>E?Mt(f,v,w,!0,!1,N):ft(d,h,p,v,w,k,y,_,N)},tn=(f,d,h,p,v,w,k,y,_)=>{let b=0;const E=d.length;let N=f.length-1,T=E-1;for(;b<=N&&b<=T;){const F=f[b],H=d[b]=_?Wt(d[b]):Pt(d[b]);if(Te(F,H))M(F,H,h,null,v,w,k,y,_);else break;b++}for(;b<=N&&b<=T;){const F=f[N],H=d[T]=_?Wt(d[T]):Pt(d[T]);if(Te(F,H))M(F,H,h,null,v,w,k,y,_);else break;N--,T--}if(b>N){if(b<=T){const F=T+1,H=F<E?d[F].el:p;for(;b<=T;)M(null,d[b]=_?Wt(d[b]):Pt(d[b]),h,H,v,w,k,y,_),b++}}else if(b>T)for(;b<=N;)Ot(f[b],v,w,!0),b++;else{const F=b,H=b,Y=new Map;for(b=H;b<=T;b++){const ht=d[b]=_?Wt(d[b]):Pt(d[b]);ht.key!=null&&Y.set(ht.key,b)}let G,et=0;const bt=T-H+1;let he=!1,Oa=0;const Ie=new Array(bt);for(b=0;b<bt;b++)Ie[b]=0;for(b=F;b<=N;b++){const ht=f[b];if(et>=bt){Ot(ht,v,w,!0);continue}let Et;if(ht.key!=null)Et=Y.get(ht.key);else for(G=H;G<=T;G++)if(Ie[G-H]===0&&Te(ht,d[G])){Et=G;break}Et===void 0?Ot(ht,v,w,!0):(Ie[Et-H]=b+1,Et>=Oa?Oa=Et:he=!0,M(ht,d[Et],h,null,v,w,k,y,_),et++)}const Ea=he?Hl(Ie):be;for(G=Ea.length-1,b=bt-1;b>=0;b--){const ht=H+b,Et=d[ht],Sa=ht+1<E?d[ht+1].el:p;Ie[b]===0?M(null,Et,h,Sa,v,w,k,y,_):he&&(G<0||b!==Ea[G]?te(Et,h,Sa,2):G--)}}},te=(f,d,h,p,v=null)=>{const{el:w,type:k,transition:y,children:_,shapeFlag:b}=f;if(b&6){te(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){k.move(f,d,h,me);return}if(k===Lt){r(w,d,h);for(let N=0;N<_.length;N++)te(_[N],d,h,p);r(f.anchor,d,h);return}if(k===fr){P(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(w),r(w,d,h),ut(()=>y.enter(w),v);else{const{leave:N,delayLeave:T,afterLeave:F}=y,H=()=>r(w,d,h),Y=()=>{N(w,()=>{H(),F&&F()})};T?T(w,H,Y):Y()}else r(w,d,h)},Ot=(f,d,h,p=!1,v=!1)=>{const{type:w,props:k,ref:y,children:_,dynamicChildren:b,shapeFlag:E,patchFlag:N,dirs:T}=f;if(y!=null&&Er(y,null,h,f,!0),E&256){d.ctx.deactivate(f);return}const F=E&1&&T,H=!_n(f);let Y;if(H&&(Y=k&&k.onVnodeBeforeUnmount)&&St(Y,d,f),E&6)is(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}F&&ee(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,h,v,me,p):b&&(w!==Lt||N>0&&N&64)?Mt(b,d,h,!1,!0):(w===Lt&&N&384||!v&&E&16)&&Mt(_,d,h),p&&Aa(f)}(H&&(Y=k&&k.onVnodeUnmounted)||F)&&ut(()=>{Y&&St(Y,d,f),F&&ee(f,null,d,"unmounted")},h)},Aa=f=>{const{type:d,el:h,anchor:p,transition:v}=f;if(d===Lt){as(h,p);return}if(d===fr){C(f);return}const w=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:y}=v,_=()=>k(h,w);y?y(f.el,w,_):_()}else w()},as=(f,d)=>{let h;for(;f!==d;)h=g(f),a(f),f=h;a(d)},is=(f,d,h)=>{const{bum:p,scope:v,update:w,subTree:k,um:y}=f;p&&rr(p),v.stop(),w&&(w.active=!1,Ot(k,f,d,h)),y&&ut(y,d),ut(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Mt=(f,d,h,p=!1,v=!1,w=0)=>{for(let k=w;k<f.length;k++)Ot(f[k],d,h,p,v)},en=f=>f.shapeFlag&6?en(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el);let Qn=!1;const ka=(f,d,h)=>{f==null?d._vnode&&Ot(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,h),Qn||(Qn=!0,Fa(),io(),Qn=!1),d._vnode=f},me={p:M,um:Ot,m:te,r:Aa,mt:Zn,mc:ft,pc:W,pbc:Nt,n:en,o:t};let tr,er;return e&&([tr,er]=e(me)),{render:ka,hydrate:tr,createApp:Tl(ka,tr)}}function lr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ao(t,e,n=!1){const r=t.children,a=e.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Wt(a[i]),s.el=o.el),n||Ao(o,s)),s.type===Wn&&(s.el=o.el)}}function Hl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ko(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ko(e)}const Ul=t=>t.__isTeleport,Lt=Symbol.for("v-fgt"),Wn=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),Re=[];let _t=null;function Bl(t=!1){Re.push(_t=t?null:[])}function Yl(){Re.pop(),_t=Re[Re.length-1]||null}let Ue=1;function Va(t){Ue+=t}function Wl(t){return t.dynamicChildren=Ue>0?_t||be:null,Yl(),Ue>0&&_t&&_t.push(t),t}function Kl(t,e,n,r,a,i){return Wl(wt(t,e,n,r,a,i,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function Te(t,e){return t.type===e.type&&t.key===e.key}const Kn="__vInternal",Oo=({key:t})=>t??null,kn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||mt(t)||z(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function wt(t,e=null,n=null,r=0,a=null,i=t===Lt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oo(e),ref:e&&kn(e),scopeId:lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xt};return s?(sa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Ue>0&&!o&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const lt=Vl;function Vl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===il)&&(t=He),Sr(t)){const s=ke(t,e,!0);return n&&sa(s,n),Ue>0&&!i&&_t&&(s.shapeFlag&6?_t[_t.indexOf(t)]=s:_t.push(s)),s.patchFlag|=-2,s}if(of(t)&&(t=t.__vccOpts),e){e=Gl(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=Vr(s)),J(l)&&(Zi(l)&&!j(l)&&(l=rt({},l)),e.style=Kr(l))}const o=nt(t)?1:sl(t)?128:Ul(t)?64:J(t)?4:z(t)?2:0;return wt(t,e,n,r,a,o,i,!0)}function Gl(t){return t?Zi(t)||Kn in t?rt({},t):t:null}function ke(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?ql(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Oo(s),ref:e&&e.ref?n&&a?j(a)?a.concat(kn(e)):[a,kn(e)]:kn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ke(t.ssContent),ssFallback:t.ssFallback&&ke(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xl(t=" ",e=0){return lt(Wn,null,t,e)}function Pt(t){return t==null||typeof t=="boolean"?lt(He):j(t)?lt(Lt,null,t.slice()):typeof t=="object"?Wt(t):lt(Wn,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ke(t)}function sa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),sa(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Kn in e)?e._ctx=xt:a===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[Xl(e)]):n=8);t.children=e,t.shapeFlag|=n}function ql(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Vr([e.class,r.class]));else if(a==="style")e.style=Kr([e.style,r.style]);else if(jn(a)){const i=e[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function St(t,e,n,r=null){kt(t,e,7,[n,r])}const Jl=vo();let Zl=0;function Ql(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Jl,i={uid:Zl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yo(r,a),emitsOptions:so(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zs.bind(null,i),t.ce&&t.ce(i),i}let it=null,Nn,Pr;{const t=Fi(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};Nn=e("__VUE_INSTANCE_SETTERS__",n=>it=n),Pr=e("__VUE_SSR_SETTERS__",n=>Vn=n)}const Ge=t=>{const e=it;return Nn(t),t.scope.on(),()=>{t.scope.off(),Nn(e)}},Ga=()=>{it&&it.scope.off(),Nn(null)};function Eo(t){return t.vnode.shapeFlag&4}let Vn=!1;function tf(t,e=!1){e&&Pr(e);const{props:n,children:r}=t.vnode,a=Eo(t);Ml(t,n,a,e),Fl(t,r);const i=a?ef(t,e):void 0;return e&&Pr(!1),i}function ef(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qi(new Proxy(t.ctx,kl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?rf(t):null,i=Ge(t);ue();const o=Gt(r,t,0,[t.props,a]);if(de(),i(),Mi(o)){if(o.then(Ga,Ga),e)return o.then(s=>{Xa(t,s,e)}).catch(s=>{Un(s,t,0)});t.asyncDep=o}else Xa(t,o,e)}else So(t,e)}function Xa(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=no(e)),So(t,n)}let qa;function So(t,e,n){const r=t.type;if(!t.render){if(!e&&qa&&!r.render){const a=r.template||ia(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=rt(rt({isCustomElement:i,delimiters:s},o),l);r.render=qa(a,c)}}t.render=r.render||vt}{const a=Ge(t);ue();try{Ol(t)}finally{de(),a()}}}function nf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function rf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return nf(t)},slots:t.slots,emit:t.emit,expose:e}}function la(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(no(Qi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Le)return Le[n](t)},has(e,n){return n in e||n in Le}}))}function af(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function of(t){return z(t)&&"__vccOpts"in t}const re=(t,e)=>Hs(t,e,Vn);function sf(t,e,n){const r=arguments.length;return r===2?J(e)&&!j(e)?Sr(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),lt(t,e,n))}const lf="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ff="http://www.w3.org/2000/svg",cf="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,Ja=Kt&&Kt.createElement("template"),uf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Kt.createElementNS(ff,t):e==="mathml"?Kt.createElementNS(cf,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ja.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=Ja.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},df=Symbol("_vtc");function mf(t,e,n){const r=t[df];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hf=Symbol("_vod"),pf=Symbol("");function gf(t,e,n){const r=t.style,a=r.display,i=nt(n);if(n&&!i){if(e&&!nt(e))for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)Cr(r,o,n[o])}else if(i){if(e!==n){const o=r[pf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");hf in t&&(r.display=a)}const Za=/\s*!important$/;function Cr(t,e,n){if(j(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vf(t,e);Za.test(n)?t.setProperty(Se(r),n.replace(Za,""),"important"):t[r]=n}}const Qa=["Webkit","Moz","ms"],cr={};function vf(t,e){const n=cr[e];if(n)return n;let r=Tt(e);if(r!=="filter"&&r in t)return cr[e]=r;r=Dn(r);for(let a=0;a<Qa.length;a++){const i=Qa[a]+r;if(i in t)return cr[e]=i}return e}const ti="http://www.w3.org/1999/xlink";function bf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ti,e.slice(6,e.length)):t.setAttributeNS(ti,e,n);else{const i=vs(e);n==null||i&&!ji(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ji(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wf(t,e,n,r){t.addEventListener(e,n,r)}function xf(t,e,n,r){t.removeEventListener(e,n,r)}const ei=Symbol("_vei");function _f(t,e,n,r,a=null){const i=t[ei]||(t[ei]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Af(e);if(r){const c=i[e]=Ef(r,a);wf(t,s,c,l)}else o&&(xf(t,s,o,l),i[e]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function Af(t){let e;if(ni.test(t)){e={};let r;for(;r=t.match(ni);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Se(t.slice(2)),e]}let ur=0;const kf=Promise.resolve(),Of=()=>ur||(kf.then(()=>ur=0),ur=Date.now());function Ef(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(Sf(r,n.value),e,5,[r])};return n.value=t,n.attached=Of(),n}function Sf(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pf=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?mf(t,r,c):e==="style"?gf(t,n,r):jn(e)?Br(e)||_f(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cf(t,e,r,c))?yf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bf(t,e,r,c))};function Cf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ri(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return ri(e)&&nt(n)?!1:e in t}const If=rt({patchProp:Pf},uf);let ai;function Tf(){return ai||(ai=$l(If))}const Nf=(...t)=>{const e=Tf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Lf(r);if(!a)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Mf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Mf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lf(t){return nt(t)?document.querySelector(t):t}const Rf={class:"wrapper"},Ff={class:"game-details"},jf={class:"score"},$f={class:"high-score"},zf={class:"controls"},Df={__name:"App",setup(t){const e=ln("Score: 0"),n=ln("High Score: 0"),r=ln(null);let a=!1,i,o,s=5,l=5,c=0,u=0;const m=ln([]);let g=0,A,R=localStorage.getItem("high-score")||0;n.value=`High Score ${R}`;function M(){i=Math.floor(Math.random()*30)+1,o=Math.floor(Math.random()*30)+1}function $(){clearInterval(A),alert("Game Over! Press OK to replay..."),location.reload()}function x(P){P.key==="ArrowUp"&&u!==1?(c=0,u=-1):P.key==="ArrowDown"&&u!==-1?(c=0,u=1):P.key==="ArrowLeft"&&c!==1?(c=-1,u=0):P.key==="ArrowRight"&&c!==-1&&(c=1,u=0)}function S(){if(a)return $();let P=`<div class="food" style="grid-area: ${o} / ${i}"></div>`;s===i&&l===o&&(M(),m.value.push([i,o]),g+=10,R=g>R?g:R,localStorage.setItem("high-score",R),e.value=`Score: ${g}`,n.value=`High Score: ${R}`),s+=c,l+=u;for(let C=m.value.length-1;C>0;C--)m.value[C]=m.value[C-1];if(m.value[0]=[s,l],s<=0||s>30||l<=0||l>30)return a=!0,a;for(let C=0;C<m.value.length;C++)P+=`<div class="head" style="grid-area: ${m.value[C][1]} / ${m.value[C][0]}"></div>`,C!==0&&m.value[0][1]===m.value[C][1]&&m.value[0][0]===m.value[C][0]&&(a=!0);r.value.innerHTML=P}return po(()=>{M(),window.addEventListener("keyup",x),A=setInterval(S,100)}),aa(()=>{window.removeEventListener("keyup",x),clearInterval(A)}),(P,C)=>{const D=al("font-awesome-icon");return Bl(),Kl("div",Rf,[wt("div",Ff,[wt("span",jf,ar(e.value),1),wt("span",$f,ar(n.value),1)]),wt("div",{class:"play-board",ref_key:"playBoard",ref:r},ar(r.value),513),wt("div",zf,[wt("i",null,[lt(D,{onClick:C[0]||(C[0]=L=>x({key:"ArrowLeft"})),icon:"fa-solid fa-arrow-left-long"})]),wt("i",null,[lt(D,{onClick:C[1]||(C[1]=L=>x({key:"ArrowUp"})),icon:"fa-solid fa-arrow-up-long"})]),wt("i",null,[lt(D,{onClick:C[2]||(C[2]=L=>x({key:"ArrowRight"})),icon:"fa-solid fa-arrow-right-long"})]),wt("i",null,[lt(D,{onClick:C[3]||(C[3]=L=>x({key:"ArrowDown"})),icon:"fa-solid fa-arrow-down-long"})])])])}}};function ii(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ii(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mn(t){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mn(t)}function Hf(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Uf(t,e,n){return e&&oi(t.prototype,e),n&&oi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fa(t,e){return Yf(t)||Kf(t,e)||Po(t,e)||Gf()}function Xe(t){return Bf(t)||Wf(t)||Po(t)||Vf()}function Bf(t){if(Array.isArray(t))return Ir(t)}function Yf(t){if(Array.isArray(t))return t}function Wf(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Kf(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(t,e){if(t){if(typeof t=="string")return Ir(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(t,e)}}function Ir(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Vf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},ca={},Co={},Io=null,To={mark:si,measure:si};try{typeof window<"u"&&(ca=window),typeof document<"u"&&(Co=document),typeof MutationObserver<"u"&&(Io=MutationObserver),typeof performance<"u"&&(To=performance)}catch{}var Xf=ca.navigator||{},li=Xf.userAgent,fi=li===void 0?"":li,qt=ca,V=Co,ci=Io,cn=To;qt.document;var Ht=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",No=~fi.indexOf("MSIE")||~fi.indexOf("Trident/"),un,dn,mn,hn,pn,jt="___FONT_AWESOME___",Tr=16,Mo="fa",Lo="svg-inline--fa",fe="data-fa-i2svg",Nr="data-fa-pseudo-element",qf="data-fa-pseudo-element-pending",ua="data-prefix",da="data-icon",ui="fontawesome-i2svg",Jf="async",Zf=["HTML","HEAD","STYLE","SCRIPT"],Ro=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",ma=[K,Z];function qe(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Be=qe((un={},tt(un,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),tt(un,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),un)),Ye=qe((dn={},tt(dn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(dn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),dn)),We=qe((mn={},tt(mn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(mn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),mn)),Qf=qe((hn={},tt(hn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(hn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),hn)),tc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Fo="fa-layers-text",ec=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nc=qe((pn={},tt(pn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(pn,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),pn)),jo=[1,2,3,4,5,6,7,8,9,10],rc=jo.concat([11,12,13,14,15,16,17,18,19,20]),ac=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ke=new Set;Object.keys(Ye[K]).map(Ke.add.bind(Ke));Object.keys(Ye[Z]).map(Ke.add.bind(Ke));var ic=[].concat(ma,Xe(Ke),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(jo.map(function(t){return"".concat(t,"x")})).concat(rc.map(function(t){return"w-".concat(t)})),Fe=qt.FontAwesomeConfig||{};function oc(t){var e=V.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(V&&typeof V.querySelector=="function"){var lc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lc.forEach(function(t){var e=fa(t,2),n=e[0],r=e[1],a=sc(oc(n));a!=null&&(Fe[r]=a)})}var $o={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mo,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fe.familyPrefix&&(Fe.cssPrefix=Fe.familyPrefix);var Oe=O(O({},$o),Fe);Oe.autoReplaceSvg||(Oe.observeMutations=!1);var I={};Object.keys($o).forEach(function(t){Object.defineProperty(I,t,{enumerable:!0,set:function(n){Oe[t]=n,je.forEach(function(r){return r(I)})},get:function(){return Oe[t]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){Oe.cssPrefix=e,je.forEach(function(n){return n(I)})},get:function(){return Oe.cssPrefix}});qt.FontAwesomeConfig=I;var je=[];function fc(t){return je.push(t),function(){je.splice(je.indexOf(t),1)}}var Bt=Tr,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cc(t){if(!(!t||!Ht)){var e=V.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(e,r),t}}var uc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ve(){for(var t=12,e="";t-- >0;)e+=uc[Math.random()*62|0];return e}function Pe(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ha(t){return t.classList?Pe(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(zo(t[n]),'" ')},"").trim()}function Gn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function pa(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function mc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function hc(t){var e=t.transform,n=t.width,r=n===void 0?Tr:n,a=t.height,i=a===void 0?Tr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&No?l+="translate(".concat(e.x/Bt-r/2,"em, ").concat(e.y/Bt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Bt,"em), calc(-50% + ").concat(e.y/Bt,"em)) "):l+="translate(".concat(e.x/Bt,"em, ").concat(e.y/Bt,"em) "),l+="scale(".concat(e.size/Bt*(e.flipX?-1:1),", ").concat(e.size/Bt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var pc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Do(){var t=Mo,e=Lo,n=I.cssPrefix,r=I.replacementClass,a=pc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var di=!1;function dr(){I.autoAddCss&&!di&&(cc(Do()),di=!0)}var gc={mixout:function(){return{dom:{css:Do,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},$t=qt||{};$t[jt]||($t[jt]={});$t[jt].styles||($t[jt].styles={});$t[jt].hooks||($t[jt].hooks={});$t[jt].shims||($t[jt].shims=[]);var At=$t[jt],Ho=[],vc=function t(){V.removeEventListener("DOMContentLoaded",t),Ln=1,Ho.map(function(e){return e()})},Ln=!1;Ht&&(Ln=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Ln||V.addEventListener("DOMContentLoaded",vc));function bc(t){Ht&&(Ln?setTimeout(t,0):Ho.push(t))}function Je(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?zo(t):"<".concat(e," ").concat(dc(r),">").concat(i.map(Je).join(""),"</").concat(e,">")}function mi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},mr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?yc(n,a):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function wc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Mr(t){var e=wc(t);return e.length===1?e[0].toString(16):null}function xc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function hi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Lr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=hi(e);typeof At.hooks.addPack=="function"&&!a?At.hooks.addPack(t,hi(e)):At.styles[t]=O(O({},At.styles[t]||{}),i),t==="fas"&&Lr("fa",e)}var gn,vn,bn,ge=At.styles,_c=At.shims,Ac=(gn={},tt(gn,K,Object.values(We[K])),tt(gn,Z,Object.values(We[Z])),gn),ga=null,Uo={},Bo={},Yo={},Wo={},Ko={},kc=(vn={},tt(vn,K,Object.keys(Be[K])),tt(vn,Z,Object.keys(Be[Z])),vn);function Oc(t){return~ic.indexOf(t)}function Ec(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Oc(a)?a:null}var Vo=function(){var e=function(i){return mr(ge,function(o,s,l){return o[l]=mr(s,i,{}),o},{})};Uo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ko=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ge||I.autoFetchSvg,r=mr(_c,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Yo=r.names,Wo=r.unicodes,ga=Xn(I.styleDefault,{family:I.familyDefault})};fc(function(t){ga=Xn(t.styleDefault,{family:I.familyDefault})});Vo();function va(t,e){return(Uo[t]||{})[e]}function Sc(t,e){return(Bo[t]||{})[e]}function oe(t,e){return(Ko[t]||{})[e]}function Go(t){return Yo[t]||{prefix:null,iconName:null}}function Pc(t){var e=Wo[t],n=va("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jt(){return ga}var ba=function(){return{prefix:null,iconName:null,rest:[]}};function Xn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=Be[r][t],i=Ye[r][t]||Ye[r][a],o=t in At.styles?t:null;return i||o||null}var pi=(bn={},tt(bn,K,Object.keys(We[K])),tt(bn,Z,Object.keys(We[Z])),bn);function qn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},tt(e,K,"".concat(I.cssPrefix,"-").concat(K)),tt(e,Z,"".concat(I.cssPrefix,"-").concat(Z)),e),o=null,s=K;(t.includes(i[K])||t.some(function(c){return pi[K].includes(c)}))&&(s=K),(t.includes(i[Z])||t.some(function(c){return pi[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=Ec(I.cssPrefix,u);if(ge[u]?(u=Ac[s].includes(u)?Qf[s][u]:u,o=u,c.prefix=u):kc[s].indexOf(u)>-1?(o=u,c.prefix=Xn(u,{family:s})):m?c.iconName=m:u!==I.replacementClass&&u!==i[K]&&u!==i[Z]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var g=o==="fa"?Go(c.iconName):{},A=oe(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||A||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ge.far&&ge.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ba());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(ge.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=oe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Jt()||"fas"),l}var Cc=function(){function t(){Hf(this,t),this.definitions={}}return Uf(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=We[K][s];l&&Lr(l,o[s]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),gi=[],ve={},_e={},Ic=Object.keys(_e);function Tc(t,e){var n=e.mixoutsTo;return gi=t,ve={},Object.keys(_e).forEach(function(r){Ic.indexOf(r)===-1&&delete _e[r]}),gi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Mn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ve[o]||(ve[o]=[]),ve[o].push(i[o])})}r.provides&&r.provides(_e)}),n}function Rr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ve[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ce(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ve[t]||[];a.forEach(function(i){i.apply(null,n)})}function zt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _e[t]?_e[t].apply(null,e):void 0}function Fr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Jt();if(e)return e=oe(n,e)||e,mi(Xo.definitions,n,e)||mi(At.styles,n,e)}var Xo=new Cc,Nc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ce("noAuto")},Mc={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(ce("beforeI2svg",e),zt("pseudoElements2svg",e),zt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,bc(function(){Rc({autoReplaceSvgRoot:n}),ce("watch",e)})}},Lc={icon:function(e){if(e===null)return null;if(Mn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:oe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xn(e[0]);return{prefix:r,iconName:oe(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(I.cssPrefix,"-"))>-1||e.match(tc))){var a=qn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Jt(),iconName:oe(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Jt();return{prefix:i,iconName:oe(i,e)||e}}}},pt={noAuto:Nc,config:I,dom:Mc,parse:Lc,library:Xo,findIconDefinition:Fr,toHtml:Je},Rc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(At.styles).length>0||I.autoFetchSvg)&&Ht&&I.autoReplaceSvg&&pt.dom.i2svg({node:r})};function Jn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Je(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ht){var r=V.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Fc(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Gn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function jc(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ya(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,g=t.watchable,A=g===void 0?!1:g,R=r.found?r:n,M=R.width,$=R.height,x=a==="fak",S=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(gt){return m.classes.indexOf(gt)===-1}).filter(function(gt){return gt!==""||!!gt}).concat(m.classes).join(" "),P={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat($)})},C=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/$*16*.0625,"em")}:{};A&&(P.attributes[fe]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Ve())},children:[l]}),delete P.attributes.title);var D=O(O({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},C),m.styles)}),L=r.found&&n.found?zt("generateAbstractMask",D)||{children:[],attributes:{}}:zt("generateAbstractIcon",D)||{children:[],attributes:{}},Q=L.children,ft=L.attributes;return D.children=Q,D.attributes=ft,s?jc(D):Fc(D)}function vi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[fe]="");var u=O({},o.styles);pa(a)&&(u.transform=hc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Gn(u);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function $c(t){var e=t.content,n=t.title,r=t.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=At.styles;function jr(t){var e=t[0],n=t[1],r=t.slice(4),a=fa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var zc={found:!1,width:512,height:512};function Dc(t,e){!Ro&&!I.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $r(t,e){var n=e;return e==="fa"&&I.styleDefault!==null&&(e=Jt()),new Promise(function(r,a){if(zt("missingIconAbstract"),n==="fa"){var i=Go(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&hr[e]&&hr[e][t]){var o=hr[e][t];return r(jr(o))}Dc(t,e),r(O(O({},zc),{},{icon:I.showMissingIcons&&t?zt("missingIconAbstract")||{}:{}}))})}var bi=function(){},zr=I.measurePerformance&&cn&&cn.mark&&cn.measure?cn:{mark:bi,measure:bi},Me='FA "6.5.1"',Hc=function(e){return zr.mark("".concat(Me," ").concat(e," begins")),function(){return qo(e)}},qo=function(e){zr.mark("".concat(Me," ").concat(e," ends")),zr.measure("".concat(Me," ").concat(e),"".concat(Me," ").concat(e," begins"),"".concat(Me," ").concat(e," ends"))},wa={begin:Hc,end:qo},On=function(){};function yi(t){var e=t.getAttribute?t.getAttribute(fe):null;return typeof e=="string"}function Uc(t){var e=t.getAttribute?t.getAttribute(ua):null,n=t.getAttribute?t.getAttribute(da):null;return e&&n}function Bc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(I.replacementClass)}function Yc(){if(I.autoReplaceSvg===!0)return En.replace;var t=En[I.autoReplaceSvg];return t||En.replace}function Wc(t){return V.createElementNS("http://www.w3.org/2000/svg",t)}function Kc(t){return V.createElement(t)}function Jo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Wc:Kc:n;if(typeof t=="string")return V.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Jo(o,{ceFn:r}))}),a}function Vc(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var En={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Jo(a),n)}),n.getAttribute(fe)===null&&I.keepOriginalSource){var r=V.createComment(Vc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ha(n).indexOf(I.replacementClass))return En.replace(e);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Je(s)}).join(`
`);n.setAttribute(fe,""),n.innerHTML=o}};function wi(t){t()}function Zo(t,e){var n=typeof e=="function"?e:On;if(t.length===0)n();else{var r=wi;I.mutateApproach===Jf&&(r=qt.requestAnimationFrame||wi),r(function(){var a=Yc(),i=wa.begin("mutate");t.map(a),i(),n()})}}var xa=!1;function Qo(){xa=!0}function Dr(){xa=!1}var Rn=null;function xi(t){if(ci&&I.observeMutations){var e=t.treeCallback,n=e===void 0?On:e,r=t.nodeCallback,a=r===void 0?On:r,i=t.pseudoElementsCallback,o=i===void 0?On:i,s=t.observeMutationsRoot,l=s===void 0?V:s;Rn=new ci(function(c){if(!xa){var u=Jt();Pe(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&yi(m.target)&&~ac.indexOf(m.attributeName))if(m.attributeName==="class"&&Uc(m.target)){var g=qn(ha(m.target)),A=g.prefix,R=g.iconName;m.target.setAttribute(ua,A||u),R&&m.target.setAttribute(da,R)}else Bc(m.target)&&a(m.target)})}}),Ht&&Rn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gc(){Rn&&Rn.disconnect()}function Xc(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qc(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=qn(ha(t));return a.prefix||(a.prefix=Jt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Sc(a.prefix,t.innerText)||va(a.prefix,Mr(t.innerText))),!a.iconName&&I.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Jc(t){var e=Pe(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Ve()):(e["aria-hidden"]="true",e.focusable="false")),e}function Zc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _i(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qc(t),r=n.iconName,a=n.prefix,i=n.rest,o=Jc(t),s=Rr("parseNodeAttributes",{},t),l=e.styleParser?Xc(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Qc=At.styles;function ts(t){var e=I.autoReplaceSvg==="nest"?_i(t,{styleParser:!1}):_i(t);return~e.extra.classes.indexOf(Fo)?zt("generateLayersText",t,e):zt("generateSvgReplacementMutation",t,e)}var Zt=new Set;ma.map(function(t){Zt.add("fa-".concat(t))});Object.keys(Be[K]).map(Zt.add.bind(Zt));Object.keys(Be[Z]).map(Zt.add.bind(Zt));Zt=Xe(Zt);function Ai(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(ui,"-").concat(m))},a=function(m){return n.remove("".concat(ui,"-").concat(m))},i=I.autoFetchSvg?Zt:ma.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Qc));i.includes("fa")||i.push("fa");var o=[".".concat(Fo,":not([").concat(fe,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(fe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pe(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(u,m){try{var g=ts(m);g&&u.push(g)}catch(A){Ro||A.name==="MissingIcon"&&console.error(A)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(g){Zo(g,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(g){l(),m(g)})})}function tu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ts(t).then(function(n){n&&Zo([n],e)})}function eu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Fr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fr(a||{})),t(r,O(O({},n),{},{mask:a}))}}var nu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?It:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,g=m===void 0?null:m,A=n.titleId,R=A===void 0?null:A,M=n.classes,$=M===void 0?[]:M,x=n.attributes,S=x===void 0?{}:x,P=n.styles,C=P===void 0?{}:P;if(e){var D=e.prefix,L=e.iconName,Q=e.icon;return Jn(O({type:"icon"},e),function(){return ce("beforeDOMElementCreation",{iconDefinition:e,params:n}),I.autoA11y&&(g?S["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||Ve()):(S["aria-hidden"]="true",S.focusable="false")),ya({icons:{main:jr(Q),mask:l?jr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:L,transform:O(O({},It),a),symbol:o,title:g,maskId:u,titleId:R,extra:{attributes:S,styles:C,classes:$}})})}},ru={mixout:function(){return{icon:eu(nu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ai,n.nodeCallback=tu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Ai(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,g=r.extra;return new Promise(function(A,R){Promise.all([$r(a,s),u.iconName?$r(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var $=fa(M,2),x=$[0],S=$[1];A([n,ya({icons:{main:x,mask:S},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(R)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Gn(s);l.length>0&&(a.style=l);var c;return pa(o)&&(c=zt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},au={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Jn({type:"layer"},function(){ce("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(Xe(i)).join(" ")},children:o}]})}}}},iu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return Jn({type:"counter",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),$c({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(Xe(s))}})})}}}},ou={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?It:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,g=r.styles,A=g===void 0?{}:g;return Jn({type:"text",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),vi({content:n,transform:O(O({},It),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(I.cssPrefix,"-layers-text")].concat(Xe(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(No){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},su=new RegExp('"',"ug"),ki=[1105920,1112319];function lu(t){var e=t.replace(su,""),n=xc(e,0),r=n>=ki[0]&&n<=ki[1],a=e.length===2?e[0]===e[1]:!1;return{value:Mr(a?e[0]:e),isSecondary:r||a}}function Oi(t,e){var n="".concat(qf).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Pe(t.children),o=i.filter(function(Q){return Q.getAttribute(Nr)===e})[0],s=qt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(ec),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Z:K,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ye[g][l[2].toLowerCase()]:nc[g][c],R=lu(m),M=R.value,$=R.isSecondary,x=l[0].startsWith("FontAwesome"),S=va(A,M),P=S;if(x){var C=Pc(M);C.iconName&&C.prefix&&(S=C.iconName,A=C.prefix)}if(S&&!$&&(!o||o.getAttribute(ua)!==A||o.getAttribute(da)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var D=Zc(),L=D.extra;L.attributes[Nr]=e,$r(S,A).then(function(Q){var ft=ya(O(O({},D),{},{icons:{main:Q,mask:ba()},prefix:A,iconName:P,extra:L,watchable:!0})),gt=V.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(gt,t.firstChild):t.appendChild(gt),gt.outerHTML=ft.map(function(Nt){return Je(Nt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function fu(t){return Promise.all([Oi(t,"::before"),Oi(t,"::after")])}function cu(t){return t.parentNode!==document.head&&!~Zf.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ei(t){if(Ht)return new Promise(function(e,n){var r=Pe(t.querySelectorAll("*")).filter(cu).map(fu),a=wa.begin("searchPseudoElements");Qo(),Promise.all(r).then(function(){a(),Dr(),e()}).catch(function(){a(),Dr(),n()})})}var uu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ei,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;I.searchPseudoElements&&Ei(a)}}},Si=!1,du={mixout:function(){return{dom:{unwatch:function(){Qo(),Si=!0}}}},hooks:function(){return{bootstrap:function(){xi(Rr("mutationObserverCallbacks",{}))},noAuto:function(){Gc()},watch:function(n){var r=n.observeMutationsRoot;Si?Dr():xi(Rr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},mu={mixout:function(){return{parse:{transform:function(n){return Pi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Pi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:g};return{tag:"g",attributes:O({},A.outer),children:[{tag:"g",attributes:O({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),A.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Ci(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hu(t){return t.tag==="g"?t.children:[t]}var pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?qn(a.split(" ").map(function(o){return o.trim()})):ba();return i.prefix||(i.prefix=Jt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,g=o.icon,A=mc({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},pr),{},{fill:"white"})},M=u.children?{children:u.children.map(Ci)}:{},$={tag:"g",attributes:O({},A.inner),children:[Ci(O({tag:u.tag,attributes:O(O({},u.attributes),A.path)},M))]},x={tag:"g",attributes:O({},A.outer),children:[$]},S="mask-".concat(s||Ve()),P="clip-".concat(s||Ve()),C={tag:"mask",attributes:O(O({},pr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,x]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:hu(g)},C]};return r.push(D,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},pr)}),{children:r,attributes:a}}}},gu={provides:function(e){var n=!1;qt.matchMedia&&(n=qt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},bu=[gc,ru,au,iu,ou,uu,du,mu,pu,gu,vu];Tc(bu,{mixoutsTo:pt});pt.noAuto;pt.config;var yu=pt.library;pt.dom;var Hr=pt.parse;pt.findIconDefinition;pt.toHtml;var wu=pt.icon;pt.layer;pt.text;pt.counter;function Ii(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Rt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ii(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fn(t){"@babel/helpers - typeof";return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fn(t)}function ct(t,e,n){return e=ku(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function _u(t,e){if(t==null)return{};var n=xu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Au(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ku(t){var e=Au(t,"string");return typeof e=="symbol"?e:String(e)}var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es={exports:{}};(function(t){(function(e){var n=function(x,S,P){if(!c(S)||m(S)||g(S)||A(S)||l(S))return S;var C,D=0,L=0;if(u(S))for(C=[],L=S.length;D<L;D++)C.push(n(x,S[D],P));else{C={};for(var Q in S)Object.prototype.hasOwnProperty.call(S,Q)&&(C[x(Q,P)]=n(x,S[Q],P))}return C},r=function(x,S){S=S||{};var P=S.separator||"_",C=S.split||/(?=[A-Z])/;return x.split(C).join(P)},a=function(x){return R(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(S,P){return P?P.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var S=a(x);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(x,S){return r(x,S).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},u=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},g=function(x){return s.call(x)=="[object RegExp]"},A=function(x){return s.call(x)=="[object Boolean]"},R=function(x){return x=x-0,x===x},M=function(x,S){var P=S&&"process"in S?S.process:S;return typeof P!="function"?x:function(C,D){return P(C,x,D)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,S){return n(M(a,S),x)},decamelizeKeys:function(x,S){return n(M(o,S),x,S)},pascalizeKeys:function(x,S){return n(M(i,S),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=$:e.humps=$})(Ou)})(es);var Eu=es.exports,Su=["class","style"];function Pu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Eu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Cu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ns(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ns(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Cu(u);break;case"style":l.style=Pu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=_u(n,Su);return sf(t.tag,Rt(Rt(Rt({},e),{},{class:a.class,style:Rt(Rt({},a.style),o)},a.attrs),s),r)}var rs=!1;try{rs=!0}catch{}function Iu(){if(!rs&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ct({},t,e):{}}function Tu(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ct(e,"fa-".concat(t.size),t.size!==null),ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ct(e,"fa-pull-".concat(t.pull),t.pull!==null),ct(e,"fa-swap-opacity",t.swapOpacity),ct(e,"fa-bounce",t.bounce),ct(e,"fa-shake",t.shake),ct(e,"fa-beat",t.beat),ct(e,"fa-fade",t.fade),ct(e,"fa-beat-fade",t.beatFade),ct(e,"fa-flash",t.flash),ct(e,"fa-spin-pulse",t.spinPulse),ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ti(t){if(t&&Fn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hr.icon)return Hr.icon(t);if(t===null)return null;if(Fn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Nu=dl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=re(function(){return Ti(e.icon)}),i=re(function(){return gr("classes",Tu(e))}),o=re(function(){return gr("transform",typeof e.transform=="string"?Hr.transform(e.transform):e.transform)}),s=re(function(){return gr("mask",Ti(e.mask))}),l=re(function(){return wu(a.value,Rt(Rt(Rt(Rt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});xn(l,function(u){if(!u)return Iu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=re(function(){return l.value?ns(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Mu={prefix:"fas",iconName:"arrow-up-long",icon:[384,512,["long-arrow-up"],"f176","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"]},Lu={prefix:"fas",iconName:"arrow-down-long",icon:[384,512,["long-arrow-down"],"f175","M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"]},Ru={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Fu={prefix:"fas",iconName:"arrow-left-long",icon:[512,512,["long-arrow-left"],"f177","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"]},ju={prefix:"fas",iconName:"arrow-right-long",icon:[512,512,["long-arrow-right"],"f178","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]};yu.add(Ru,Mu,Lu,Fu,ju);Nf(Df).component("font-awesome-icon",Nu).mount("#app");
