(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var $f={exports:{}},Qo={},qf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),yv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),kv=Symbol.for("react.suspense"),Nv=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),vd=Symbol.iterator;function Av(t){return t===null||typeof t!="object"?null:(t=vd&&t[vd]||t["@@iterator"],typeof t=="function"?t:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yf=Object.assign,Jf={};function Mr(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||Kf}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xf(){}Xf.prototype=Mr.prototype;function Iu(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||Kf}var Tu=Iu.prototype=new Xf;Tu.constructor=Iu;Yf(Tu,Mr.prototype);Tu.isPureReactComponent=!0;var yd=Array.isArray,Zf=Object.prototype.hasOwnProperty,ku={current:null},ep={key:!0,ref:!0,__self:!0,__source:!0};function tp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zf.call(e,r)&&!ep.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:t,key:s,ref:o,props:i,_owner:ku.current}}function Pv(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function Rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wd=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rv(""+t.key):e.toString(36)}function Ms(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xi:case yv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Il(o,0):r,yd(i)?(n="",t!=null&&(n=t.replace(wd,"$&/")+"/"),Ms(i,e,n,"",function(u){return u})):i!=null&&(Nu(i)&&(i=Pv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Il(s,l);o+=Ms(s,e,n,a,i)}else if(a=Av(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Il(s,l++),o+=Ms(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ms(t,e,n){if(t==null)return t;var r=[],i=0;return Ms(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},bs={transition:null},Dv={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:bs,ReactCurrentOwner:ku};function np(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:ms,forEach:function(t,e,n){ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ms(t,function(){e++}),e},toArray:function(t){return ms(t,function(e){return e})||[]},only:function(t){if(!Nu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Mr;U.Fragment=wv;U.Profiler=Sv;U.PureComponent=Iu;U.StrictMode=Ev;U.Suspense=kv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv;U.act=np;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ku.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Zf.call(e,a)&&!ep.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cv,_context:t},t.Consumer=t};U.createElement=tp;U.createFactory=function(t){var e=tp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Tv,render:t}};U.isValidElement=Nu;U.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:Ov}};U.memo=function(t,e){return{$$typeof:Nv,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=bs.transition;bs.transition={};try{t()}finally{bs.transition=e}};U.unstable_act=np;U.useCallback=function(t,e){return Ae.current.useCallback(t,e)};U.useContext=function(t){return Ae.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ae.current.useEffect(t,e)};U.useId=function(){return Ae.current.useId()};U.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ae.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};U.useRef=function(t){return Ae.current.useRef(t)};U.useState=function(t){return Ae.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ae.current.useTransition()};U.version="18.3.1";qf.exports=U;var B=qf.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=B,Mv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,jv=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uv={key:!0,ref:!0,__self:!0,__source:!0};function rp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mv,type:t,key:s,ref:o,props:i,_owner:jv.current}}Qo.Fragment=bv;Qo.jsx=rp;Qo.jsxs=rp;$f.exports=Qo;var f=$f.exports,ip={exports:{}},Ve={},sp={exports:{}},op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var L=T.length;T.push(O);e:for(;0<L;){var ie=L-1>>>1,de=T[ie];if(0<i(de,O))T[ie]=O,T[L]=de,L=ie;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],L=T.pop();if(L!==O){T[0]=L;e:for(var ie=0,de=T.length,fs=de>>>1;ie<fs;){var En=2*(ie+1)-1,Cl=T[En],Sn=En+1,ps=T[Sn];if(0>i(Cl,L))Sn<de&&0>i(ps,Cl)?(T[ie]=ps,T[Sn]=L,ie=Sn):(T[ie]=Cl,T[En]=L,ie=En);else if(Sn<de&&0>i(ps,L))T[ie]=ps,T[Sn]=L,ie=Sn;else break e}}return O}function i(T,O){var L=T.sortIndex-O.sortIndex;return L!==0?L:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,m=!1,v=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function w(T){if(y=!1,_(T),!v)if(n(a)!==null)v=!0,El(C);else{var O=n(u);O!==null&&Sl(w,O.startTime-T)}}function C(T,O){v=!1,y&&(y=!1,g(x),x=-1),m=!0;var L=h;try{for(_(O),c=n(a);c!==null&&(!(c.expirationTime>O)||T&&!Ze());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,h=c.priorityLevel;var de=ie(c.expirationTime<=O);O=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(a)&&r(a),_(O)}else r(a);c=n(a)}if(c!==null)var fs=!0;else{var En=n(u);En!==null&&Sl(w,En.startTime-O),fs=!1}return fs}finally{c=null,h=L,m=!1}}var k=!1,N=null,x=-1,q=5,j=-1;function Ze(){return!(t.unstable_now()-j<q)}function Qr(){if(N!==null){var T=t.unstable_now();j=T;var O=!0;try{O=N(!0,T)}finally{O?$r():(k=!1,N=null)}}else k=!1}var $r;if(typeof p=="function")$r=function(){p(Qr)};else if(typeof MessageChannel<"u"){var _d=new MessageChannel,vv=_d.port2;_d.port1.onmessage=Qr,$r=function(){vv.postMessage(null)}}else $r=function(){R(Qr,0)};function El(T){N=T,k||(k=!0,$r())}function Sl(T,O){x=R(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,El(C))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var L=h;h=O;try{return T()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return O()}finally{h=L}},t.unstable_scheduleCallback=function(T,O,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,T){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=L+de,T={id:d++,callback:O,priorityLevel:T,startTime:L,expirationTime:de,sortIndex:-1},L>ie?(T.sortIndex=L,e(u,T),n(a)===null&&T===n(u)&&(y?(g(x),x=-1):y=!0,Sl(w,L-ie))):(T.sortIndex=de,e(a,T),v||m||(v=!0,El(C))),T},t.unstable_shouldYield=Ze,t.unstable_wrapCallback=function(T){var O=h;return function(){var L=h;h=O;try{return T.apply(this,arguments)}finally{h=L}}}})(op);sp.exports=op;var zv=sp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv=B,He=zv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lp=new Set,Ti={};function $n(t,e){Cr(t,e),Cr(t+"Capture",e)}function Cr(t,e){for(Ti[t]=e,t=0;t<e.length;t++)lp.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),da=Object.prototype.hasOwnProperty,Wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ed={},Sd={};function Hv(t){return da.call(Sd,t)?!0:da.call(Ed,t)?!1:Wv.test(t)?Sd[t]=!0:(Ed[t]=!0,!1)}function Vv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gv(t,e,n,r){if(e===null||typeof e>"u"||Vv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function Au(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xu,Au);we[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xu,Au);we[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xu,Au);we[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pu(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gv(e,n,i,r)&&(n=null),r||i===null?Hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),up=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),cp=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function qr(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Tl;function oi(t){if(Tl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tl=e&&e[1]||""}return`
`+Tl+t}var kl=!1;function Nl(t,e){if(!t||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oi(t):""}function Qv(t){switch(t.tag){case 5:return oi(t.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return t=Nl(t.type,!1),t;case 11:return t=Nl(t.type.render,!1),t;case 1:return t=Nl(t.type,!0),t;default:return""}}function ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zn:return"Fragment";case Xn:return"Portal";case ha:return"Profiler";case Ru:return"StrictMode";case fa:return"Suspense";case pa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case up:return(t.displayName||"Context")+".Consumer";case ap:return(t._context.displayName||"Context")+".Provider";case Ou:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Du:return e=t.displayName||null,e!==null?e:ma(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return ma(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(e);case 8:return e===Ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=dp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){t._valueTracker||(t._valueTracker=qv(t))}function hp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ga(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Id(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fp(t,e){e=e.checked,e!=null&&Pu(t,"checked",e,!1)}function _a(t,e){fp(t,e);var n=dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?va(t,e.type,n):e.hasOwnProperty("defaultValue")&&va(t,e.type,dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Td(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function va(t,e,n){(e!=="number"||Xs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var li=Array.isArray;function hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ya(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(li(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dn(n)}}function pp(t,e){var n=dn(e.value),r=dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vs,gp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(t){Kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ci[e]=ci[t]})});function _p(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ci.hasOwnProperty(t)&&ci[t]?(""+e).trim():e+"px"}function vp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_p(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yv=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(t,e){if(e){if(Yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Sa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,fr=null,pr=null;function xd(t){if(t=ts(t)){if(typeof Ia!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Jo(e),Ia(t.stateNode,t.type,e))}}function yp(t){fr?pr?pr.push(t):pr=[t]:fr=t}function wp(){if(fr){var t=fr,e=pr;if(pr=fr=null,xd(t),e)for(t=0;t<e.length;t++)xd(e[t])}}function Ep(t,e){return t(e)}function Sp(){}var xl=!1;function Cp(t,e,n){if(xl)return t(e,n);xl=!0;try{return Ep(t,e,n)}finally{xl=!1,(fr!==null||pr!==null)&&(Sp(),wp())}}function Ni(t,e){var n=t.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ta=!1;if(At)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Ta=!1}function Jv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var di=!1,Zs=null,eo=!1,ka=null,Xv={onError:function(t){di=!0,Zs=t}};function Zv(t,e,n,r,i,s,o,l,a){di=!1,Zs=null,Jv.apply(Xv,arguments)}function ey(t,e,n,r,i,s,o,l,a){if(Zv.apply(this,arguments),di){if(di){var u=Zs;di=!1,Zs=null}else throw Error(E(198));eo||(eo=!0,ka=u)}}function qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ip(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ad(t){if(qn(t)!==t)throw Error(E(188))}function ty(t){var e=t.alternate;if(!e){if(e=qn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ad(i),t;if(s===r)return Ad(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Tp(t){return t=ty(t),t!==null?kp(t):null}function kp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kp(t);if(e!==null)return e;t=t.sibling}return null}var Np=He.unstable_scheduleCallback,Pd=He.unstable_cancelCallback,ny=He.unstable_shouldYield,ry=He.unstable_requestPaint,se=He.unstable_now,iy=He.unstable_getCurrentPriorityLevel,Mu=He.unstable_ImmediatePriority,xp=He.unstable_UserBlockingPriority,to=He.unstable_NormalPriority,sy=He.unstable_LowPriority,Ap=He.unstable_IdlePriority,$o=null,pt=null;function oy(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot($o,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:uy,ly=Math.log,ay=Math.LN2;function uy(t){return t>>>=0,t===0?32:31-(ly(t)/ay|0)|0}var ys=64,ws=4194304;function ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function no(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ai(l):(s&=o,s!==0&&(r=ai(s)))}else o=n&~i,o!==0?r=ai(o):s!==0&&(r=ai(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=cy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pp(){var t=ys;return ys<<=1,!(ys&4194240)&&(ys=64),t}function Al(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function hy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function Rp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Op,Fu,Dp,Lp,Mp,xa=!1,Es=[],Xt=null,Zt=null,en=null,xi=new Map,Ai=new Map,Ht=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(e.pointerId)}}function Yr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ts(e),e!==null&&Fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function py(t,e,n,r,i){switch(e){case"focusin":return Xt=Yr(Xt,t,e,n,r,i),!0;case"dragenter":return Zt=Yr(Zt,t,e,n,r,i),!0;case"mouseover":return en=Yr(en,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xi.set(s,Yr(xi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ai.set(s,Yr(Ai.get(s)||null,t,e,n,r,i)),!0}return!1}function bp(t){var e=Nn(t.target);if(e!==null){var n=qn(e);if(n!==null){if(e=n.tag,e===13){if(e=Ip(n),e!==null){t.blockedOn=e,Mp(t.priority,function(){Dp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Aa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return e=ts(n),e!==null&&Fu(e),t.blockedOn=n,!1;e.shift()}return!0}function Od(t,e,n){Fs(t)&&n.delete(e)}function my(){xa=!1,Xt!==null&&Fs(Xt)&&(Xt=null),Zt!==null&&Fs(Zt)&&(Zt=null),en!==null&&Fs(en)&&(en=null),xi.forEach(Od),Ai.forEach(Od)}function Jr(t,e){t.blockedOn===e&&(t.blockedOn=null,xa||(xa=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,my)))}function Pi(t){function e(i){return Jr(i,t)}if(0<Es.length){Jr(Es[0],t);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Jr(Xt,t),Zt!==null&&Jr(Zt,t),en!==null&&Jr(en,t),xi.forEach(e),Ai.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&Ht.shift()}var mr=jt.ReactCurrentBatchConfig,ro=!0;function gy(t,e,n,r){var i=H,s=mr.transition;mr.transition=null;try{H=1,ju(t,e,n,r)}finally{H=i,mr.transition=s}}function _y(t,e,n,r){var i=H,s=mr.transition;mr.transition=null;try{H=4,ju(t,e,n,r)}finally{H=i,mr.transition=s}}function ju(t,e,n,r){if(ro){var i=Aa(t,e,n,r);if(i===null)Ul(t,e,r,io,n),Rd(t,r);else if(py(i,t,e,n,r))r.stopPropagation();else if(Rd(t,r),e&4&&-1<fy.indexOf(t)){for(;i!==null;){var s=ts(i);if(s!==null&&Op(s),s=Aa(t,e,n,r),s===null&&Ul(t,e,r,io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ul(t,e,r,null,n)}}var io=null;function Aa(t,e,n,r){if(io=null,t=Lu(r),t=Nn(t),t!==null)if(e=qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ip(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return io=t,null}function Fp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iy()){case Mu:return 1;case xp:return 4;case to:case sy:return 16;case Ap:return 536870912;default:return 16}default:return 16}}var Kt=null,Uu=null,js=null;function jp(){if(js)return js;var t,e=Uu,n=e.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return js=i.slice(t,1<r?1-r:void 0)}function Us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ss(){return!0}function Dd(){return!1}function Ge(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:Dd,this.isPropagationStopped=Dd,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),e}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Ge(br),es=ne({},br,{view:0,detail:0}),vy=Ge(es),Pl,Rl,Xr,qo=ne({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Pl=t.screenX-Xr.screenX,Rl=t.screenY-Xr.screenY):Rl=Pl=0,Xr=t),Pl)},movementY:function(t){return"movementY"in t?t.movementY:Rl}}),Ld=Ge(qo),yy=ne({},qo,{dataTransfer:0}),wy=Ge(yy),Ey=ne({},es,{relatedTarget:0}),Ol=Ge(Ey),Sy=ne({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Ge(Sy),Iy=ne({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ty=Ge(Iy),ky=ne({},br,{data:0}),Md=Ge(ky),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ay[t])?!!e[t]:!1}function Bu(){return Py}var Ry=ne({},es,{key:function(t){if(t.key){var e=Ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=Ge(Ry),Dy=ne({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Ge(Dy),Ly=ne({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),My=Ge(Ly),by=ne({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Ge(by),jy=ne({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Ge(jy),zy=[9,13,27,32],Wu=At&&"CompositionEvent"in window,hi=null;At&&"documentMode"in document&&(hi=document.documentMode);var By=At&&"TextEvent"in window&&!hi,Up=At&&(!Wu||hi&&8<hi&&11>=hi),Fd=" ",jd=!1;function zp(t,e){switch(t){case"keyup":return zy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function Wy(t,e){switch(t){case"compositionend":return Bp(e);case"keypress":return e.which!==32?null:(jd=!0,Fd);case"textInput":return t=e.data,t===Fd&&jd?null:t;default:return null}}function Hy(t,e){if(er)return t==="compositionend"||!Wu&&zp(t,e)?(t=jp(),js=Uu=Kt=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Up&&e.locale!=="ko"?null:e.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vy[t.type]:e==="textarea"}function Wp(t,e,n,r){yp(r),e=so(e,"onChange"),0<e.length&&(n=new zu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,Ri=null;function Gy(t){Zp(t,0)}function Ko(t){var e=rr(t);if(hp(e))return t}function Qy(t,e){if(t==="change")return e}var Hp=!1;if(At){var Dl;if(At){var Ll="oninput"in document;if(!Ll){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Ll=typeof zd.oninput=="function"}Dl=Ll}else Dl=!1;Hp=Dl&&(!document.documentMode||9<document.documentMode)}function Bd(){fi&&(fi.detachEvent("onpropertychange",Vp),Ri=fi=null)}function Vp(t){if(t.propertyName==="value"&&Ko(Ri)){var e=[];Wp(e,Ri,t,Lu(t)),Cp(Gy,e)}}function $y(t,e,n){t==="focusin"?(Bd(),fi=e,Ri=n,fi.attachEvent("onpropertychange",Vp)):t==="focusout"&&Bd()}function qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Ri)}function Ky(t,e){if(t==="click")return Ko(e)}function Yy(t,e){if(t==="input"||t==="change")return Ko(e)}function Jy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:Jy;function Oi(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!da.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function Wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hd(t,e){var n=Wd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wd(n)}}function Gp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qp(){for(var t=window,e=Xs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xs(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xy(t){var e=Qp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gp(n.ownerDocument.documentElement,n)){if(r!==null&&Hu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hd(n,s);var o=Hd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zy=At&&"documentMode"in document&&11>=document.documentMode,tr=null,Pa=null,pi=null,Ra=!1;function Vd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||tr==null||tr!==Xs(r)||(r=tr,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Oi(pi,r)||(pi=r,r=so(Pa,"onSelect"),0<r.length&&(e=new zu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=tr)))}function Cs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var nr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Ml={},$p={};At&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Yo(t){if(Ml[t])return Ml[t];if(!nr[t])return t;var e=nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $p)return Ml[t]=e[n];return t}var qp=Yo("animationend"),Kp=Yo("animationiteration"),Yp=Yo("animationstart"),Jp=Yo("transitionend"),Xp=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(t,e){Xp.set(t,e),$n(e,[t])}for(var bl=0;bl<Gd.length;bl++){var Fl=Gd[bl],e0=Fl.toLowerCase(),t0=Fl[0].toUpperCase()+Fl.slice(1);gn(e0,"on"+t0)}gn(qp,"onAnimationEnd");gn(Kp,"onAnimationIteration");gn(Yp,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Jp,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Qd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ey(r,e,void 0,t),t.currentTarget=null}function Zp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Qd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Qd(i,l,u),s=a}}}if(eo)throw t=ka,eo=!1,ka=null,t}function K(t,e){var n=e[ba];n===void 0&&(n=e[ba]=new Set);var r=t+"__bubble";n.has(r)||(em(e,t,2,!1),n.add(r))}function jl(t,e,n){var r=0;e&&(r|=4),em(n,t,r,e)}var Is="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[Is]){t[Is]=!0,lp.forEach(function(n){n!=="selectionchange"&&(n0.has(n)||jl(n,!1,t),jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Is]||(e[Is]=!0,jl("selectionchange",!1,e))}}function em(t,e,n,r){switch(Fp(e)){case 1:var i=gy;break;case 4:i=_y;break;default:i=ju}n=i.bind(null,e,n,t),i=void 0,!Ta||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ul(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Cp(function(){var u=s,d=Lu(n),c=[];e:{var h=Xp.get(t);if(h!==void 0){var m=zu,v=t;switch(t){case"keypress":if(Us(n)===0)break e;case"keydown":case"keyup":m=Oy;break;case"focusin":v="focus",m=Ol;break;case"focusout":v="blur",m=Ol;break;case"beforeblur":case"afterblur":m=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=My;break;case qp:case Kp:case Yp:m=Cy;break;case Jp:m=Fy;break;case"scroll":m=vy;break;case"wheel":m=Uy;break;case"copy":case"cut":case"paste":m=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=bd}var y=(e&4)!==0,R=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,_;p!==null;){_=p;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,g!==null&&(w=Ni(p,g),w!=null&&y.push(Li(p,w,_)))),R)break;p=p.return}0<y.length&&(h=new m(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ca&&(v=n.relatedTarget||n.fromElement)&&(Nn(v)||v[Pt]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Nn(v):null,v!==null&&(R=qn(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=Ld,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=bd,w="onPointerLeave",g="onPointerEnter",p="pointer"),R=m==null?h:rr(m),_=v==null?h:rr(v),h=new y(w,p+"leave",m,n,d),h.target=R,h.relatedTarget=_,w=null,Nn(d)===u&&(y=new y(g,p+"enter",v,n,d),y.target=_,y.relatedTarget=R,w=y),R=w,m&&v)t:{for(y=m,g=v,p=0,_=y;_;_=Yn(_))p++;for(_=0,w=g;w;w=Yn(w))_++;for(;0<p-_;)y=Yn(y),p--;for(;0<_-p;)g=Yn(g),_--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Yn(y),g=Yn(g)}y=null}else y=null;m!==null&&$d(c,h,m,y,!1),v!==null&&R!==null&&$d(c,R,v,y,!0)}}e:{if(h=u?rr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=Qy;else if(Ud(h))if(Hp)C=Yy;else{C=qy;var k=$y}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ky);if(C&&(C=C(t,u))){Wp(c,C,n,d);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&va(h,"number",h.value)}switch(k=u?rr(u):window,t){case"focusin":(Ud(k)||k.contentEditable==="true")&&(tr=k,Pa=u,pi=null);break;case"focusout":pi=Pa=tr=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Vd(c,n,d);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Vd(c,n,d)}var N;if(Wu)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else er?zp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Up&&n.locale!=="ko"&&(er||x!=="onCompositionStart"?x==="onCompositionEnd"&&er&&(N=jp()):(Kt=d,Uu="value"in Kt?Kt.value:Kt.textContent,er=!0)),k=so(u,x),0<k.length&&(x=new Md(x,t,null,n,d),c.push({event:x,listeners:k}),N?x.data=N:(N=Bp(n),N!==null&&(x.data=N)))),(N=By?Wy(t,n):Hy(t,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(d=new Md("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Zp(c,e)})}function Li(t,e,n){return{instance:t,listener:e,currentTarget:n}}function so(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ni(t,n),s!=null&&r.unshift(Li(t,s,i)),s=Ni(t,e),s!=null&&r.push(Li(t,s,i))),t=t.return}return r}function Yn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $d(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ni(n,s),a!=null&&o.unshift(Li(n,a,l))):i||(a=Ni(n,s),a!=null&&o.push(Li(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var r0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function qd(t){return(typeof t=="string"?t:""+t).replace(r0,`
`).replace(i0,"")}function Ts(t,e,n){if(e=qd(e),qd(t)!==e&&n)throw Error(E(425))}function oo(){}var Oa=null,Da=null;function La(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,s0=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(l0)}:Ma;function l0(t){setTimeout(function(){throw t})}function zl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(e)}function tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Fr,Mi="__reactProps$"+Fr,Pt="__reactContainer$"+Fr,ba="__reactEvents$"+Fr,a0="__reactListeners$"+Fr,u0="__reactHandles$"+Fr;function Nn(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yd(t);t!==null;){if(n=t[ft])return n;t=Yd(t)}return e}t=n,n=t.parentNode}return null}function ts(t){return t=t[ft]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Jo(t){return t[Mi]||null}var Fa=[],ir=-1;function _n(t){return{current:t}}function J(t){0>ir||(t.current=Fa[ir],Fa[ir]=null,ir--)}function $(t,e){ir++,Fa[ir]=t.current,t.current=e}var hn={},Te=_n(hn),Me=_n(!1),bn=hn;function Ir(t,e){var n=t.type.contextTypes;if(!n)return hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function lo(){J(Me),J(Te)}function Jd(t,e,n){if(Te.current!==hn)throw Error(E(168));$(Te,e),$(Me,n)}function tm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,$v(t)||"Unknown",i));return ne({},n,r)}function ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hn,bn=Te.current,$(Te,t),$(Me,Me.current),!0}function Xd(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=tm(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,J(Me),J(Te),$(Te,t)):J(Me),$(Me,n)}var wt=null,Xo=!1,Bl=!1;function nm(t){wt===null?wt=[t]:wt.push(t)}function c0(t){Xo=!0,nm(t)}function vn(){if(!Bl&&wt!==null){Bl=!0;var t=0,e=H;try{var n=wt;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wt=null,Xo=!1}catch(i){throw wt!==null&&(wt=wt.slice(t+1)),Np(Mu,vn),i}finally{H=e,Bl=!1}}return null}var sr=[],or=0,uo=null,co=0,$e=[],qe=0,Fn=null,Et=1,St="";function Cn(t,e){sr[or++]=co,sr[or++]=uo,uo=t,co=e}function rm(t,e,n){$e[qe++]=Et,$e[qe++]=St,$e[qe++]=Fn,Fn=t;var r=Et;t=St;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-lt(e)+i|n<<i|r,St=s+t}else Et=1<<s|n<<i|r,St=t}function Vu(t){t.return!==null&&(Cn(t,1),rm(t,1,0))}function Gu(t){for(;t===uo;)uo=sr[--or],sr[or]=null,co=sr[--or],sr[or]=null;for(;t===Fn;)Fn=$e[--qe],$e[qe]=null,St=$e[--qe],$e[qe]=null,Et=$e[--qe],$e[qe]=null}var We=null,Be=null,X=!1,rt=null;function im(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,Be=tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fn!==null?{id:Et,overflow:St}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,Be=null,!0):!1;default:return!1}}function ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ua(t){if(X){var e=Be;if(e){var n=e;if(!Zd(t,e)){if(ja(t))throw Error(E(418));e=tn(n.nextSibling);var r=We;e&&Zd(t,e)?im(r,n):(t.flags=t.flags&-4097|2,X=!1,We=t)}}else{if(ja(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,We=t}}}function eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function ks(t){if(t!==We)return!1;if(!X)return eh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!La(t.type,t.memoizedProps)),e&&(e=Be)){if(ja(t))throw sm(),Error(E(418));for(;e;)im(t,e),e=tn(e.nextSibling)}if(eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=tn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=We?tn(t.stateNode.nextSibling):null;return!0}function sm(){for(var t=Be;t;)t=tn(t.nextSibling)}function Tr(){Be=We=null,X=!1}function Qu(t){rt===null?rt=[t]:rt.push(t)}var d0=jt.ReactCurrentBatchConfig;function Zr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ns(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function th(t){var e=t._init;return e(t._payload)}function om(t){function e(g,p){if(t){var _=g.deletions;_===null?(g.deletions=[p],g.flags|=16):_.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=on(g,p),g.index=0,g.sibling=null,g}function s(g,p,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<p?(g.flags|=2,p):_):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,_,w){return p===null||p.tag!==6?(p=ql(_,g.mode,w),p.return=g,p):(p=i(p,_),p.return=g,p)}function a(g,p,_,w){var C=_.type;return C===Zn?d(g,p,_.props.children,w,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&th(C)===p.type)?(w=i(p,_.props),w.ref=Zr(g,p,_),w.return=g,w):(w=Qs(_.type,_.key,_.props,null,g.mode,w),w.ref=Zr(g,p,_),w.return=g,w)}function u(g,p,_,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Kl(_,g.mode,w),p.return=g,p):(p=i(p,_.children||[]),p.return=g,p)}function d(g,p,_,w,C){return p===null||p.tag!==7?(p=Dn(_,g.mode,w,C),p.return=g,p):(p=i(p,_),p.return=g,p)}function c(g,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ql(""+p,g.mode,_),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gs:return _=Qs(p.type,p.key,p.props,null,g.mode,_),_.ref=Zr(g,null,p),_.return=g,_;case Xn:return p=Kl(p,g.mode,_),p.return=g,p;case Bt:var w=p._init;return c(g,w(p._payload),_)}if(li(p)||qr(p))return p=Dn(p,g.mode,_,null),p.return=g,p;Ns(g,p)}return null}function h(g,p,_,w){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:l(g,p,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case gs:return _.key===C?a(g,p,_,w):null;case Xn:return _.key===C?u(g,p,_,w):null;case Bt:return C=_._init,h(g,p,C(_._payload),w)}if(li(_)||qr(_))return C!==null?null:d(g,p,_,w,null);Ns(g,_)}return null}function m(g,p,_,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(_)||null,l(p,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case gs:return g=g.get(w.key===null?_:w.key)||null,a(p,g,w,C);case Xn:return g=g.get(w.key===null?_:w.key)||null,u(p,g,w,C);case Bt:var k=w._init;return m(g,p,_,k(w._payload),C)}if(li(w)||qr(w))return g=g.get(_)||null,d(p,g,w,C,null);Ns(p,w)}return null}function v(g,p,_,w){for(var C=null,k=null,N=p,x=p=0,q=null;N!==null&&x<_.length;x++){N.index>x?(q=N,N=null):q=N.sibling;var j=h(g,N,_[x],w);if(j===null){N===null&&(N=q);break}t&&N&&j.alternate===null&&e(g,N),p=s(j,p,x),k===null?C=j:k.sibling=j,k=j,N=q}if(x===_.length)return n(g,N),X&&Cn(g,x),C;if(N===null){for(;x<_.length;x++)N=c(g,_[x],w),N!==null&&(p=s(N,p,x),k===null?C=N:k.sibling=N,k=N);return X&&Cn(g,x),C}for(N=r(g,N);x<_.length;x++)q=m(N,g,x,_[x],w),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?x:q.key),p=s(q,p,x),k===null?C=q:k.sibling=q,k=q);return t&&N.forEach(function(Ze){return e(g,Ze)}),X&&Cn(g,x),C}function y(g,p,_,w){var C=qr(_);if(typeof C!="function")throw Error(E(150));if(_=C.call(_),_==null)throw Error(E(151));for(var k=C=null,N=p,x=p=0,q=null,j=_.next();N!==null&&!j.done;x++,j=_.next()){N.index>x?(q=N,N=null):q=N.sibling;var Ze=h(g,N,j.value,w);if(Ze===null){N===null&&(N=q);break}t&&N&&Ze.alternate===null&&e(g,N),p=s(Ze,p,x),k===null?C=Ze:k.sibling=Ze,k=Ze,N=q}if(j.done)return n(g,N),X&&Cn(g,x),C;if(N===null){for(;!j.done;x++,j=_.next())j=c(g,j.value,w),j!==null&&(p=s(j,p,x),k===null?C=j:k.sibling=j,k=j);return X&&Cn(g,x),C}for(N=r(g,N);!j.done;x++,j=_.next())j=m(N,g,x,j.value,w),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?x:j.key),p=s(j,p,x),k===null?C=j:k.sibling=j,k=j);return t&&N.forEach(function(Qr){return e(g,Qr)}),X&&Cn(g,x),C}function R(g,p,_,w){if(typeof _=="object"&&_!==null&&_.type===Zn&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case gs:e:{for(var C=_.key,k=p;k!==null;){if(k.key===C){if(C=_.type,C===Zn){if(k.tag===7){n(g,k.sibling),p=i(k,_.props.children),p.return=g,g=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&th(C)===k.type){n(g,k.sibling),p=i(k,_.props),p.ref=Zr(g,k,_),p.return=g,g=p;break e}n(g,k);break}else e(g,k);k=k.sibling}_.type===Zn?(p=Dn(_.props.children,g.mode,w,_.key),p.return=g,g=p):(w=Qs(_.type,_.key,_.props,null,g.mode,w),w.ref=Zr(g,p,_),w.return=g,g=w)}return o(g);case Xn:e:{for(k=_.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(g,p.sibling),p=i(p,_.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Kl(_,g.mode,w),p.return=g,g=p}return o(g);case Bt:return k=_._init,R(g,p,k(_._payload),w)}if(li(_))return v(g,p,_,w);if(qr(_))return y(g,p,_,w);Ns(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,_),p.return=g,g=p):(n(g,p),p=ql(_,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return R}var kr=om(!0),lm=om(!1),ho=_n(null),fo=null,lr=null,$u=null;function qu(){$u=lr=fo=null}function Ku(t){var e=ho.current;J(ho),t._currentValue=e}function za(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gr(t,e){fo=t,$u=lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if($u!==t)if(t={context:t,memoizedValue:e,next:null},lr===null){if(fo===null)throw Error(E(308));lr=t,fo.dependencies={lanes:0,firstContext:t}}else lr=lr.next=t;return e}var xn=null;function Yu(t){xn===null?xn=[t]:xn.push(t)}function am(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rt(t,r)}function Rt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rt(t,n)}return i=r.interleaved,i===null?(e.next=e,Yu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rt(t,n)}function zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bu(t,n)}}function nh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function po(t,e,n,r){var i=t.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(m,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,c,h):v,h==null)break e;c=ne({},c,h);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=c):d=d.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Un|=o,t.lanes=o,t.memoizedState=c}}function rh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ns={},mt=_n(ns),bi=_n(ns),Fi=_n(ns);function An(t){if(t===ns)throw Error(E(174));return t}function Xu(t,e){switch($(Fi,e),$(bi,t),$(mt,ns),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wa(e,t)}J(mt),$(mt,e)}function Nr(){J(mt),J(bi),J(Fi)}function cm(t){An(Fi.current);var e=An(mt.current),n=wa(e,t.type);e!==n&&($(bi,t),$(mt,n))}function Zu(t){bi.current===t&&(J(mt),J(bi))}var Z=_n(0);function mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wl=[];function ec(){for(var t=0;t<Wl.length;t++)Wl[t]._workInProgressVersionPrimary=null;Wl.length=0}var Bs=jt.ReactCurrentDispatcher,Hl=jt.ReactCurrentBatchConfig,jn=0,te=null,ae=null,fe=null,go=!1,mi=!1,ji=0,h0=0;function Ee(){throw Error(E(321))}function tc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function nc(t,e,n,r,i,s){if(jn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bs.current=t===null||t.memoizedState===null?g0:_0,t=n(r,i),mi){s=0;do{if(mi=!1,ji=0,25<=s)throw Error(E(301));s+=1,fe=ae=null,e.updateQueue=null,Bs.current=v0,t=n(r,i)}while(mi)}if(Bs.current=_o,e=ae!==null&&ae.next!==null,jn=0,fe=ae=te=null,go=!1,e)throw Error(E(300));return t}function rc(){var t=ji!==0;return ji=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=t:fe=fe.next=t,fe}function Xe(){if(ae===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=fe===null?te.memoizedState:fe.next;if(e!==null)fe=e,ae=t;else{if(t===null)throw Error(E(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},fe===null?te.memoizedState=fe=t:fe=fe.next=t}return fe}function Ui(t,e){return typeof e=="function"?e(t):e}function Vl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((jn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=d,Un|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ct(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Un|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dm(){}function hm(t,e){var n=te,r=Xe(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,ic(mm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,zi(9,pm.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(E(349));jn&30||fm(n,e,i)}return i}function fm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pm(t,e,n,r){e.value=n,e.getSnapshot=r,gm(e)&&_m(t)}function mm(t,e,n){return n(function(){gm(e)&&_m(t)})}function gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function _m(t){var e=Rt(t,1);e!==null&&at(e,t,1,-1)}function ih(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},e.queue=t,t=t.dispatch=m0.bind(null,te,t),[e.memoizedState,t]}function zi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vm(){return Xe().memoizedState}function Ws(t,e,n,r){var i=ht();te.flags|=t,i.memoizedState=zi(1|e,n,void 0,r===void 0?null:r)}function Zo(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&tc(r,o.deps)){i.memoizedState=zi(e,n,s,r);return}}te.flags|=t,i.memoizedState=zi(1|e,n,s,r)}function sh(t,e){return Ws(8390656,8,t,e)}function ic(t,e){return Zo(2048,8,t,e)}function ym(t,e){return Zo(4,2,t,e)}function wm(t,e){return Zo(4,4,t,e)}function Em(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sm(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4,4,Em.bind(null,e,t),n)}function sc(){}function Cm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Im(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tm(t,e,n){return jn&21?(ct(n,e)||(n=Pp(),te.lanes|=n,Un|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function f0(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Hl.transition;Hl.transition={};try{t(!1),e()}finally{H=n,Hl.transition=r}}function km(){return Xe().memoizedState}function p0(t,e,n){var r=sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nm(t))xm(e,n);else if(n=am(t,e,n,r),n!==null){var i=Ne();at(n,t,r,i),Am(n,e,r)}}function m0(t,e,n){var r=sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nm(t))xm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Yu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=am(t,e,i,r),n!==null&&(i=Ne(),at(n,t,r,i),Am(n,e,r))}}function Nm(t){var e=t.alternate;return t===te||e!==null&&e===te}function xm(t,e){mi=go=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Am(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bu(t,n)}}var _o={readContext:Je,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},g0={readContext:Je,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:sh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ws(4194308,4,Em.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ws(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ws(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=p0.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:ih,useDebugValue:sc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=ih(!1),e=t[0];return t=f0.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=ht();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ge===null)throw Error(E(349));jn&30||fm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,sh(mm.bind(null,r,s,t),[t]),r.flags|=2048,zi(9,pm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=ge.identifierPrefix;if(X){var n=St,r=Et;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ji++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=h0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_0={readContext:Je,useCallback:Cm,useContext:Je,useEffect:ic,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:wm,useMemo:Im,useReducer:Vl,useRef:vm,useState:function(){return Vl(Ui)},useDebugValue:sc,useDeferredValue:function(t){var e=Xe();return Tm(e,ae.memoizedState,t)},useTransition:function(){var t=Vl(Ui)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:dm,useSyncExternalStore:hm,useId:km,unstable_isNewReconciler:!1},v0={readContext:Je,useCallback:Cm,useContext:Je,useEffect:ic,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:wm,useMemo:Im,useReducer:Gl,useRef:vm,useState:function(){return Gl(Ui)},useDebugValue:sc,useDeferredValue:function(t){var e=Xe();return ae===null?e.memoizedState=t:Tm(e,ae.memoizedState,t)},useTransition:function(){var t=Gl(Ui)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:dm,useSyncExternalStore:hm,useId:km,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ba(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var el={isMounted:function(t){return(t=t._reactInternals)?qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=sn(t),s=Nt(r,i);s.payload=e,n!=null&&(s.callback=n),e=nn(t,s,i),e!==null&&(at(e,t,i,r),zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=sn(t),s=Nt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nn(t,s,i),e!==null&&(at(e,t,i,r),zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),r=sn(t),i=Nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=nn(t,i,r),e!==null&&(at(e,t,r,n),zs(e,t,r))}};function oh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,s):!0}function Pm(t,e,n){var r=!1,i=hn,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=be(e)?bn:Te.current,r=e.contextTypes,s=(r=r!=null)?Ir(t,i):hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=el,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&el.enqueueReplaceState(e,e.state,null)}function Wa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ju(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=be(e)?bn:Te.current,i.context=Ir(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ba(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&el.enqueueReplaceState(i,i.state,null),po(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e){try{var n="",r=e;do n+=Qv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ql(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ha(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function Rm(t,e,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yo||(yo=!0,Za=r),Ha(t,e)},n}function Om(t,e,n){n=Nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ha(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ha(t,e),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ah(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new y0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=D0.bind(null,t,e,n),e.then(t,t))}function uh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ch(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nt(-1,1),e.tag=2,nn(n,e,1))),n.lanes|=1),t)}var w0=jt.ReactCurrentOwner,Oe=!1;function ke(t,e,n,r){e.child=t===null?lm(e,null,n,r):kr(e,t.child,n,r)}function dh(t,e,n,r,i){n=n.render;var s=e.ref;return gr(e,i),r=nc(t,e,n,r,s,i),n=rc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(X&&n&&Vu(e),e.flags|=1,ke(t,e,r,i),e.child)}function hh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dm(t,e,s,r,i)):(t=Qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(o,r)&&t.ref===e.ref)return Ot(t,e,i)}return e.flags|=1,t=on(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Ot(t,e,i)}return Va(t,e,n,r,i)}function Lm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ur,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(ur,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(ur,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(ur,ze),ze|=r;return ke(t,e,i,n),e.child}function Mm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Va(t,e,n,r,i){var s=be(n)?bn:Te.current;return s=Ir(e,s),gr(e,i),n=nc(t,e,n,r,s,i),r=rc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(X&&r&&Vu(e),e.flags|=1,ke(t,e,n,i),e.child)}function fh(t,e,n,r,i){if(be(n)){var s=!0;ao(e)}else s=!1;if(gr(e,i),e.stateNode===null)Hs(t,e),Pm(e,n,r),Wa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=be(n)?bn:Te.current,u=Ir(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&lh(e,o,r,u),Wt=!1;var h=e.memoizedState;o.state=h,po(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||Wt?(typeof d=="function"&&(Ba(e,n,d,r),a=e.memoizedState),(l=Wt||oh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,um(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:tt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=be(n)?bn:Te.current,a=Ir(e,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&lh(e,o,r,a),Wt=!1,h=e.memoizedState,o.state=h,po(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||Me.current||Wt?(typeof m=="function"&&(Ba(e,n,m,r),v=e.memoizedState),(u=Wt||oh(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ga(t,e,n,r,s,i)}function Ga(t,e,n,r,i,s){Mm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xd(e,n,!1),Ot(t,e,s);r=e.stateNode,w0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=kr(e,t.child,null,s),e.child=kr(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&Xd(e,n,!0),e.child}function bm(t){var e=t.stateNode;e.pendingContext?Jd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jd(t,e.context,!1),Xu(t,e.containerInfo)}function ph(t,e,n,r,i){return Tr(),Qu(i),e.flags|=256,ke(t,e,n,r),e.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function $a(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fm(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(Z,i&1),t===null)return Ua(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rl(o,r,0,null),t=Dn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$a(n),e.memoizedState=Qa,t):oc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return E0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=on(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=on(l,s):(s=Dn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$a(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qa,r}return s=t.child,t=s.sibling,r=on(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function oc(t,e){return e=rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xs(t,e,n,r){return r!==null&&Qu(r),kr(e,t.child,null,n),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ql(Error(E(422))),xs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rl({mode:"visible",children:r.children},i,0,null),s=Dn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&kr(e,t.child,null,o),e.child.memoizedState=$a(o),e.memoizedState=Qa,s);if(!(e.mode&1))return xs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Ql(s,r,void 0),xs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Oe||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rt(t,i),at(r,t,i,-1))}return hc(),r=Ql(Error(E(421))),xs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=L0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=tn(i.nextSibling),We=e,X=!0,rt=null,t!==null&&($e[qe++]=Et,$e[qe++]=St,$e[qe++]=Fn,Et=t.id,St=t.overflow,Fn=e),e=oc(e,r.children),e.flags|=4096,e)}function mh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),za(t.return,e,n)}function $l(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mh(t,n,e);else if(t.tag===19)mh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$l(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$l(e,!0,n,null,s);break;case"together":$l(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ot(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Un|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=on(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=on(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function S0(t,e,n){switch(e.tag){case 3:bm(e),Tr();break;case 5:cm(e);break;case 1:be(e.type)&&ao(e);break;case 4:Xu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(ho,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?Fm(t,e,n):($(Z,Z.current&1),t=Ot(t,e,n),t!==null?t.sibling:null);$(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,Lm(t,e,n)}return Ot(t,e,n)}var Um,qa,zm,Bm;Um=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qa=function(){};zm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(mt.current);var s=null;switch(n){case"input":i=ga(t,i),r=ga(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=ya(t,i),r=ya(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oo)}Ea(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ti.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ti.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ei(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function C0(t,e,n){var r=e.pendingProps;switch(Gu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return be(e.type)&&lo(),Se(e),null;case 3:return r=e.stateNode,Nr(),J(Me),J(Te),ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ks(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(nu(rt),rt=null))),qa(t,e),Se(e),null;case 5:Zu(e);var i=An(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)zm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Se(e),null}if(t=An(mt.current),ks(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Mi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)K(ui[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Id(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":kd(r,s),K("invalid",r)}Ea(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,l,t),i=["children",""+l]):Ti.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":_s(r),Td(r,s,!0);break;case"textarea":_s(r),Nd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Mi]=r,Um(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sa(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)K(ui[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Id(t,r),i=ga(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),K("invalid",t);break;case"textarea":kd(t,r),i=ya(t,r),K("invalid",t);break;default:i=r}Ea(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?vp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&gp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ki(t,a):typeof a=="number"&&ki(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ti.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&Pu(t,s,a,o))}switch(n){case"input":_s(t),Td(t,r,!1);break;case"textarea":_s(t),Nd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)Bm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=An(Fi.current),An(mt.current),ks(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:Ts(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ts(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return Se(e),null;case 13:if(J(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Be!==null&&e.mode&1&&!(e.flags&128))sm(),Tr(),e.flags|=98560,s=!1;else if(s=ks(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ft]=e}else Tr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else rt!==null&&(nu(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?ce===0&&(ce=3):hc())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return Nr(),qa(t,e),t===null&&Di(e.stateNode.containerInfo),Se(e),null;case 10:return Ku(e.type._context),Se(e),null;case 17:return be(e.type)&&lo(),Se(e),null;case 19:if(J(Z),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ei(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mo(t),o!==null){for(e.flags|=128,ei(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Ar&&(e.flags|=128,r=!0,ei(s,!1),e.lanes=4194304)}else{if(!r)if(t=mo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Se(e),null}else 2*se()-s.renderingStartTime>Ar&&n!==1073741824&&(e.flags|=128,r=!0,ei(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=Z.current,$(Z,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return dc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function I0(t,e){switch(Gu(e),e.tag){case 1:return be(e.type)&&lo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Nr(),J(Me),J(Te),ec(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zu(e),null;case 13:if(J(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Tr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(Z),null;case 4:return Nr(),null;case 10:return Ku(e.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var As=!1,Ce=!1,T0=typeof WeakSet=="function"?WeakSet:Set,I=null;function ar(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function Ka(t,e,n){try{n()}catch(r){re(t,e,r)}}var gh=!1;function k0(t,e){if(Oa=ro,t=Qp(),Hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)h=c,c=m;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(m=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:t,selectionRange:n},ro=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,R=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:tt(e.type,y),R);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){re(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return v=gh,gh=!1,v}function gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ka(e,n,s)}i=i.next}while(i!==r)}}function tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ya(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wm(t){var e=t.alternate;e!==null&&(t.alternate=null,Wm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Mi],delete e[ba],delete e[a0],delete e[u0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hm(t){return t.tag===5||t.tag===3||t.tag===4}function _h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ja(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oo));else if(r!==4&&(t=t.child,t!==null))for(Ja(t,e,n),t=t.sibling;t!==null;)Ja(t,e,n),t=t.sibling}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}var _e=null,nt=!1;function Ut(t,e,n){for(n=n.child;n!==null;)Vm(t,e,n),n=n.sibling}function Vm(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:Ce||ar(n,e);case 6:var r=_e,i=nt;_e=null,Ut(t,e,n),_e=r,nt=i,_e!==null&&(nt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(nt?(t=_e,n=n.stateNode,t.nodeType===8?zl(t.parentNode,n):t.nodeType===1&&zl(t,n),Pi(t)):zl(_e,n.stateNode));break;case 4:r=_e,i=nt,_e=n.stateNode.containerInfo,nt=!0,Ut(t,e,n),_e=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ka(n,e,o),i=i.next}while(i!==r)}Ut(t,e,n);break;case 1:if(!Ce&&(ar(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Ut(t,e,n);break;case 21:Ut(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ut(t,e,n),Ce=r):Ut(t,e,n);break;default:Ut(t,e,n)}}function vh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new T0),e.forEach(function(r){var i=M0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,nt=!1;break e;case 3:_e=l.stateNode.containerInfo,nt=!0;break e;case 4:_e=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(_e===null)throw Error(E(160));Vm(s,o,i),_e=null,nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gm(e,t),e=e.sibling}function Gm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),dt(t),r&4){try{gi(3,t,t.return),tl(3,t)}catch(y){re(t,t.return,y)}try{gi(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:et(e,t),dt(t),r&512&&n!==null&&ar(n,n.return);break;case 5:if(et(e,t),dt(t),r&512&&n!==null&&ar(n,n.return),t.flags&32){var i=t.stateNode;try{ki(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fp(i,s),Sa(l,o);var u=Sa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?vp(i,c):d==="dangerouslySetInnerHTML"?gp(i,c):d==="children"?ki(i,c):Pu(i,d,c,u)}switch(l){case"input":_a(i,s);break;case"textarea":pp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?hr(i,!!s.multiple,s.defaultValue,!0):hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mi]=s}catch(y){re(t,t.return,y)}}break;case 6:if(et(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(et(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:et(e,t),dt(t);break;case 13:et(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=se())),r&4&&vh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||d,et(e,t),Ce=u):et(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(I=t,d=t.child;d!==null;){for(c=I=d;I!==null;){switch(h=I,m=h.child,h.tag){case 0:case 11:case 14:case 15:gi(4,h,h.return);break;case 1:ar(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:ar(h,h.return);break;case 22:if(h.memoizedState!==null){wh(c);continue}}m!==null?(m.return=h,I=m):wh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=_p("display",o))}catch(y){re(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){re(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:et(e,t),dt(t),r&4&&vh(t);break;case 21:break;default:et(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var s=_h(t);Xa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_h(t);Ja(t,l,o);break;default:throw Error(E(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function N0(t,e,n){I=t,Qm(t)}function Qm(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||As;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=As;var u=Ce;if(As=o,(Ce=a)&&!u)for(I=i;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?Eh(i):a!==null?(a.return=o,I=a):Eh(i);for(;s!==null;)I=s,Qm(s),s=s.sibling;I=i,As=l,Ce=u}yh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):yh(t)}}function yh(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||tl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Pi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||e.flags&512&&Ya(e)}catch(h){re(e,e.return,h)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function wh(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Eh(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tl(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{Ya(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{Ya(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var x0=Math.ceil,vo=jt.ReactCurrentDispatcher,lc=jt.ReactCurrentOwner,Ye=jt.ReactCurrentBatchConfig,z=0,ge=null,oe=null,ye=0,ze=0,ur=_n(0),ce=0,Bi=null,Un=0,nl=0,ac=0,_i=null,Re=null,uc=0,Ar=1/0,yt=null,yo=!1,Za=null,rn=null,Ps=!1,Yt=null,wo=0,vi=0,eu=null,Vs=-1,Gs=0;function Ne(){return z&6?se():Vs!==-1?Vs:Vs=se()}function sn(t){return t.mode&1?z&2&&ye!==0?ye&-ye:d0.transition!==null?(Gs===0&&(Gs=Pp()),Gs):(t=H,t!==0||(t=window.event,t=t===void 0?16:Fp(t.type)),t):1}function at(t,e,n,r){if(50<vi)throw vi=0,eu=null,Error(E(185));Zi(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(nl|=n),ce===4&&Vt(t,ye)),Fe(t,r),n===1&&z===0&&!(e.mode&1)&&(Ar=se()+500,Xo&&vn()))}function Fe(t,e){var n=t.callbackNode;dy(t,e);var r=no(t,t===ge?ye:0);if(r===0)n!==null&&Pd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pd(n),e===1)t.tag===0?c0(Sh.bind(null,t)):nm(Sh.bind(null,t)),o0(function(){!(z&6)&&vn()}),n=null;else{switch(Rp(r)){case 1:n=Mu;break;case 4:n=xp;break;case 16:n=to;break;case 536870912:n=Ap;break;default:n=to}n=eg(n,$m.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $m(t,e){if(Vs=-1,Gs=0,z&6)throw Error(E(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=no(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eo(t,r);else{e=r;var i=z;z|=2;var s=Km();(ge!==t||ye!==e)&&(yt=null,Ar=se()+500,On(t,e));do try{R0();break}catch(l){qm(t,l)}while(!0);qu(),vo.current=s,z=i,oe!==null?e=0:(ge=null,ye=0,e=ce)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=tu(t,i))),e===1)throw n=Bi,On(t,0),Vt(t,r),Fe(t,se()),n;if(e===6)Vt(t,r);else{if(i=t.current.alternate,!(r&30)&&!A0(i)&&(e=Eo(t,r),e===2&&(s=Na(t),s!==0&&(r=s,e=tu(t,s))),e===1))throw n=Bi,On(t,0),Vt(t,r),Fe(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:In(t,Re,yt);break;case 3:if(Vt(t,r),(r&130023424)===r&&(e=uc+500-se(),10<e)){if(no(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ne(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ma(In.bind(null,t,Re,yt),e);break}In(t,Re,yt);break;case 4:if(Vt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x0(r/1960))-r,10<r){t.timeoutHandle=Ma(In.bind(null,t,Re,yt),r);break}In(t,Re,yt);break;case 5:In(t,Re,yt);break;default:throw Error(E(329))}}}return Fe(t,se()),t.callbackNode===n?$m.bind(null,t):null}function tu(t,e){var n=_i;return t.current.memoizedState.isDehydrated&&(On(t,e).flags|=256),t=Eo(t,e),t!==2&&(e=Re,Re=n,e!==null&&nu(e)),t}function nu(t){Re===null?Re=t:Re.push.apply(Re,t)}function A0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~ac,e&=~nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function Sh(t){if(z&6)throw Error(E(327));_r();var e=no(t,0);if(!(e&1))return Fe(t,se()),null;var n=Eo(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=tu(t,r))}if(n===1)throw n=Bi,On(t,0),Vt(t,e),Fe(t,se()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Re,yt),Fe(t,se()),null}function cc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Ar=se()+500,Xo&&vn())}}function zn(t){Yt!==null&&Yt.tag===0&&!(z&6)&&_r();var e=z;z|=1;var n=Ye.transition,r=H;try{if(Ye.transition=null,H=1,t)return t()}finally{H=r,Ye.transition=n,z=e,!(z&6)&&vn()}}function dc(){ze=ur.current,J(ur)}function On(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,s0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Nr(),J(Me),J(Te),ec();break;case 5:Zu(r);break;case 4:Nr();break;case 13:J(Z);break;case 19:J(Z);break;case 10:Ku(r.type._context);break;case 22:case 23:dc()}n=n.return}if(ge=t,oe=t=on(t.current,null),ye=ze=e,ce=0,Bi=null,ac=nl=Un=0,Re=_i=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function qm(t,e){do{var n=oe;try{if(qu(),Bs.current=_o,go){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(jn=0,fe=ae=te=null,mi=!1,ji=0,lc.current=null,n===null||n.return===null){ce=1,Bi=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=uh(o);if(m!==null){m.flags&=-257,ch(m,o,l,s,e),m.mode&1&&ah(s,u,e),e=m,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){ah(s,u,e),hc();break e}a=Error(E(426))}}else if(X&&l.mode&1){var R=uh(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),ch(R,o,l,s,e),Qu(xr(a,l));break e}}s=a=xr(a,l),ce!==4&&(ce=2),_i===null?_i=[s]:_i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Rm(s,a,e);nh(s,g);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(rn===null||!rn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Om(s,l,e);nh(s,w);break e}}s=s.return}while(s!==null)}Jm(n)}catch(C){e=C,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Km(){var t=vo.current;return vo.current=_o,t===null?_o:t}function hc(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||!(Un&268435455)&&!(nl&268435455)||Vt(ge,ye)}function Eo(t,e){var n=z;z|=2;var r=Km();(ge!==t||ye!==e)&&(yt=null,On(t,e));do try{P0();break}catch(i){qm(t,i)}while(!0);if(qu(),z=n,vo.current=r,oe!==null)throw Error(E(261));return ge=null,ye=0,ce}function P0(){for(;oe!==null;)Ym(oe)}function R0(){for(;oe!==null&&!ny();)Ym(oe)}function Ym(t){var e=Zm(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Jm(t):oe=e,lc.current=null}function Jm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=I0(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,oe=null;return}}else if(n=C0(n,e,ze),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ce===0&&(ce=5)}function In(t,e,n){var r=H,i=Ye.transition;try{Ye.transition=null,H=1,O0(t,e,n,r)}finally{Ye.transition=i,H=r}return null}function O0(t,e,n,r){do _r();while(Yt!==null);if(z&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hy(t,s),t===ge&&(oe=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ps||(Ps=!0,eg(to,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=H;H=1;var l=z;z|=4,lc.current=null,k0(t,n),Gm(n,t),Xy(Da),ro=!!Oa,Da=Oa=null,t.current=n,N0(n),ry(),z=l,H=o,Ye.transition=s}else t.current=n;if(Ps&&(Ps=!1,Yt=t,wo=i),s=t.pendingLanes,s===0&&(rn=null),oy(n.stateNode),Fe(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,t=Za,Za=null,t;return wo&1&&t.tag!==0&&_r(),s=t.pendingLanes,s&1?t===eu?vi++:(vi=0,eu=t):vi=0,vn(),null}function _r(){if(Yt!==null){var t=Rp(wo),e=Ye.transition,n=H;try{if(Ye.transition=null,H=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,wo=0,z&6)throw Error(E(331));var i=z;for(z|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:gi(8,d,s)}var c=d.child;if(c!==null)c.return=d,I=c;else for(;I!==null;){d=I;var h=d.sibling,m=d.return;if(Wm(d),d===u){I=null;break}if(h!==null){h.return=m,I=h;break}I=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,I=g;break e}I=s.return}}var p=t.current;for(I=p;I!==null;){o=I;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,I=_;else e:for(o=p;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tl(9,l)}}catch(C){re(l,l.return,C)}if(l===o){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(z=i,vn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot($o,t)}catch{}r=!0}return r}finally{H=n,Ye.transition=e}}return!1}function Ch(t,e,n){e=xr(n,e),e=Rm(t,e,1),t=nn(t,e,1),e=Ne(),t!==null&&(Zi(t,1,e),Fe(t,e))}function re(t,e,n){if(t.tag===3)Ch(t,t,n);else for(;e!==null;){if(e.tag===3){Ch(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){t=xr(n,t),t=Om(e,t,1),e=nn(e,t,1),t=Ne(),e!==null&&(Zi(e,1,t),Fe(e,t));break}}e=e.return}}function D0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>se()-uc?On(t,0):ac|=n),Fe(t,e)}function Xm(t,e){e===0&&(t.mode&1?(e=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):e=1);var n=Ne();t=Rt(t,e),t!==null&&(Zi(t,e,n),Fe(t,n))}function L0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xm(t,n)}function M0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Xm(t,n)}var Zm;Zm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,S0(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,X&&e.flags&1048576&&rm(e,co,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hs(t,e),t=e.pendingProps;var i=Ir(e,Te.current);gr(e,n),i=nc(null,e,r,t,i,n);var s=rc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ju(e),i.updater=el,e.stateNode=i,i._reactInternals=e,Wa(e,r,t,n),e=Ga(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Vu(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=F0(r),t=tt(r,t),i){case 0:e=Va(null,e,r,t,n);break e;case 1:e=fh(null,e,r,t,n);break e;case 11:e=dh(null,e,r,t,n);break e;case 14:e=hh(null,e,r,tt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Va(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),fh(t,e,r,i,n);case 3:e:{if(bm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,um(t,e),po(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xr(Error(E(423)),e),e=ph(t,e,r,n,i);break e}else if(r!==i){i=xr(Error(E(424)),e),e=ph(t,e,r,n,i);break e}else for(Be=tn(e.stateNode.containerInfo.firstChild),We=e,X=!0,rt=null,n=lm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){e=Ot(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return cm(e),t===null&&Ua(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,La(r,i)?o=null:s!==null&&La(r,s)&&(e.flags|=32),Mm(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&Ua(e),null;case 13:return Fm(t,e,n);case 4:return Xu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=kr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),dh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(ho,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!Me.current){e=Ot(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Nt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),za(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),za(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gr(e,n),i=Je(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),hh(t,e,r,i,n);case 15:return Dm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Hs(t,e),e.tag=1,be(r)?(t=!0,ao(e)):t=!1,gr(e,n),Pm(e,r,i),Wa(e,r,i,n),Ga(null,e,r,!0,t,n);case 19:return jm(t,e,n);case 22:return Lm(t,e,n)}throw Error(E(156,e.tag))};function eg(t,e){return Np(t,e)}function b0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new b0(t,e,n,r)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F0(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ou)return 11;if(t===Du)return 14}return 2}function on(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zn:return Dn(n.children,i,s,e);case Ru:o=8,i|=8;break;case ha:return t=Ke(12,n,e,i|2),t.elementType=ha,t.lanes=s,t;case fa:return t=Ke(13,n,e,i),t.elementType=fa,t.lanes=s,t;case pa:return t=Ke(19,n,e,i),t.elementType=pa,t.lanes=s,t;case cp:return rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ap:o=10;break e;case up:o=9;break e;case Ou:o=11;break e;case Du:o=14;break e;case Bt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function rl(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=cp,t.lanes=n,t.stateNode={isHidden:!1},t}function ql(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function Kl(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function j0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(t,e,n,r,i,s,o,l,a){return t=new j0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(s),t}function U0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tg(t){if(!t)return hn;t=t._reactInternals;e:{if(qn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(be(n))return tm(t,n,e)}return e}function ng(t,e,n,r,i,s,o,l,a){return t=pc(n,r,!0,t,i,s,o,l,a),t.context=tg(null),n=t.current,r=Ne(),i=sn(n),s=Nt(r,i),s.callback=e??null,nn(n,s,i),t.current.lanes=i,Zi(t,i,r),Fe(t,r),t}function il(t,e,n,r){var i=e.current,s=Ne(),o=sn(i);return n=tg(n),e.context===null?e.context=n:e.pendingContext=n,e=Nt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nn(i,e,o),t!==null&&(at(t,i,o,s),zs(t,i,o)),o}function So(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mc(t,e){Ih(t,e),(t=t.alternate)&&Ih(t,e)}function z0(){return null}var rg=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}sl.prototype.render=gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));il(t,e,null,null)};sl.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zn(function(){il(null,t,null,null)}),e[Pt]=null}};function sl(t){this._internalRoot=t}sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&bp(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Th(){}function B0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=So(o);s.call(u)}}var o=ng(e,r,t,0,null,!1,!1,"",Th);return t._reactRootContainer=o,t[Pt]=o.current,Di(t.nodeType===8?t.parentNode:t),zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=So(a);l.call(u)}}var a=pc(t,0,!1,null,null,!1,!1,"",Th);return t._reactRootContainer=a,t[Pt]=a.current,Di(t.nodeType===8?t.parentNode:t),zn(function(){il(e,a,n,r)}),a}function ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=So(o);l.call(a)}}il(e,o,t,i)}else o=B0(n,e,t,i,r);return So(o)}Op=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ai(e.pendingLanes);n!==0&&(bu(e,n|1),Fe(e,se()),!(z&6)&&(Ar=se()+500,vn()))}break;case 13:zn(function(){var r=Rt(t,1);if(r!==null){var i=Ne();at(r,t,1,i)}}),mc(t,1)}};Fu=function(t){if(t.tag===13){var e=Rt(t,134217728);if(e!==null){var n=Ne();at(e,t,134217728,n)}mc(t,134217728)}};Dp=function(t){if(t.tag===13){var e=sn(t),n=Rt(t,e);if(n!==null){var r=Ne();at(n,t,e,r)}mc(t,e)}};Lp=function(){return H};Mp=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Ia=function(t,e,n){switch(e){case"input":if(_a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jo(r);if(!i)throw Error(E(90));hp(r),_a(r,i)}}}break;case"textarea":pp(t,n);break;case"select":e=n.value,e!=null&&hr(t,!!n.multiple,e,!1)}};Ep=cc;Sp=zn;var W0={usingClientEntryPoint:!1,Events:[ts,rr,Jo,yp,wp,cc]},ti={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H0={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tp(t),t===null?null:t.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{$o=Rs.inject(H0),pt=Rs}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(e))throw Error(E(200));return U0(t,e,null,n)};Ve.createRoot=function(t,e){if(!_c(t))throw Error(E(299));var n=!1,r="",i=rg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pc(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,Di(t.nodeType===8?t.parentNode:t),new gc(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Tp(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return zn(t)};Ve.hydrate=function(t,e,n){if(!ol(e))throw Error(E(200));return ll(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!_c(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ng(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sl(e)};Ve.render=function(t,e,n){if(!ol(e))throw Error(E(200));return ll(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!ol(t))throw Error(E(40));return t._reactRootContainer?(zn(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};Ve.unstable_batchedUpdates=cc;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ol(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ll(t,e,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(t){console.error(t)}}ig(),ip.exports=Ve;var V0=ip.exports,sg,kh=V0;sg=kh.createRoot,kh.hydrateRoot;const G0="/wedding-card/assets/hug-BUy9s6Wc.gif",Q0="/wedding-card/assets/run-9YD8NAnU.gif",Nh="/wedding-card/assets/photo1-BSXioYq3.webp",xh="/wedding-card/assets/photo2-DzjXAkkM.webp",Ah="/wedding-card/assets/photo3-D1umWgiy.webp",Ph="/wedding-card/assets/photo4-DmSs1kUa.webp",$0="/wedding-card/assets/photo5-CUxbNVP8.webp",q0="/wedding-card/assets/photo6-DLnVRTXb.webp",K0="/wedding-card/assets/photo7-Bf4ep9dN.webp",Y0="/wedding-card/assets/photo8-BLV43uuf.webp",J0="/wedding-card/assets/photo9-DQX4v7fZ.webp",X0="/wedding-card/assets/photo10-DeQNOUFa.webp",Z0="/wedding-card/assets/photo11-U2l7DGV3.webp",ew="/wedding-card/assets/park-DzLZeq24.webp",tw="data:image/webp;base64,UklGRkoIAABXRUJQVlA4WAoAAAAQAAAA6gIAPgAAQUxQSJ4FAAABGTJpG9p38y+5GiL6PwFUexj+RA5Bts3rz/0xRMQErOoF9kGSJEmRkzmwghs/W++SfsLM0szkQlV194g5YgIYuW0byZ05DkZ29/YH1LBtO95Id4zaY9u2bdu2bdu2bdt2bXMYN5x8mt1NvqT7a493FREOJElSosS9cTj5AMJXevn3X//773+XyAuEeJFxoip9l586vbhveQLOe9DZTZ2CC/fZtbOHmHTznD4/ZXj1SmVrbsq/qjPpHtplxOMBj+yAZv0QzClFthWbHTrP7BghalVITbK9yJ7+641wRL3nihPuab7FAs6lWUa0lfG7/5NHIdlXoq2G5B7Fc2cZRb8n2SSV7TlwVr/2vWSSTVqWUvFQPFpnIdlkJcDxuDZTBZKNFdN8wIJsF0IJCHohIOc4IUHHUDJyXrIaAUFvCDgQc0IR96eXFbTfeE9QEU1ScSzypPwEame6c4axK7SA11TLAZOzqmuDTh82/lV0ZN8ValQAqFKpNVogQguGZQREBOY7u8Ql8msAiyELhIrDoOjU+gGAGAmUDaIeigIAAcoEswyUJqIcZ0IW0uYjMMgzK+FaZmABDG4FyEHJAEBsrjQAcrgLk70HvUe9J72edA7s2lEkRYfRpZRKVpd97XoO5FJBXv4AGLE4yCCrviHTURfdJysgltbJTHfa6OUH5cTOog5Y3NV4VGkZVRq1Bg1oBc1LjXykBARAFIhMrgsqEsfmfmDyNpgSQBa0ExICsfxAIBYkYAjlKShlpdURWPI86nWcdQkMOQMP4mSExLYSm+Ogc4O205TZaLNq6Pyrzm0jofJlbjGSMRTkD2QdxuTFzpxzyVDgKteyEHirL2rdbkPMDEwsFOyBEtXaVPb7zceeQe0a5reHTg7xVrFuGzXiw8WJvfzvBz12oKyf8g2AQiEpHMo58B98t51i0/i3ue4y1mUdDjMaMWpPKenoYxGIhSNJVHHaBolpYL61Ab2so2EAa8cZlvG5gxw5wEBZjSLPQmsetYAWaeWFFGde8GTl8wyBvtzbIhmhHqUkb0oySqAKdEpU8pTvxPd2CkKZvEifwetfet1k3FWw/9WFFkWR4w1rplpRo+4RXTBrBERKMK2SE9lSQw9k+5Y5L+NCgtWAZFD2U8a1iMlpJkkOUAIOouyFgFDSDWyMXkrFkAVtt6iNyEitkhLdHtL5JpDIY3HO8QSP4ONZFg4e/NE5g6RIH0rWqZ7QPZJesuMqo3HsI1NRta3UqE9PtIyA+V35+BEPxz5P6JAW9cVL/F5eQ//AA6hUPzKcciO6jWPhS6/4PrI34EshYmzvij06WcHlZzvyPyJ1FRmguzZznIqBckD2VsijSwboIO3/Ier00SVlk5d7wqZQ+I1O2A5gYMpxEMgiMC6tHg9hzRXpQxruaHx8qSevLlu6AYBUwAH3sw/Cd2mBL5tzYXvYvlEoUwFzJYl7Q/xyPAEzO753TEcAFQofBonk8zCkSSbPR0ALxfOS4+b3/zLxwWRvnn/7LRY//kOmojiQ+9Krgafn5YNKAKFlxj7kBkR8Ar5F5QLAj5S24csAlJjweh+IZNFnX8LKhzQA7+ZDq0UNewOwr4ePNc1/sb2xGIBPhyNZU1W/s621DiuKoIqaFQ+EXnA4o84cDy4ZOU7Kswr2A/1L2DlxrT6pE0EmKfps99HkgubkyozdNyMdsmivjhgV0/N8dEJy3IcDNRbGOoSJ2dj44jNtzJ4onrfb58ztnNVW8OCi76zfUIXNCh0gAaEsBEWrt6uiFMTfj8hS84TJuTOm5aCD71MyLo5unuCU5czo8zGJz2V8ib8eNTOBLtbh8q1mtQzP4gQgmYW3UGA3u4piSXyyZdLAAcvvOr9BgPqwdZmHi2xfo1zmp6OfZClAZgujVk/x52DVyHvBqUHSi//99++//mECVlA4IIYCAADQGgCdASrrAj8APpFCn0mlo7ehIhgLwvASCWluvmueIMobUAaSrYf+aA/ZrnT6d0Mu4COzyLaulgXiUG6BfD6Agvh9AQXw+gIL4fQEF8PoCC+H0BBfD6Agvh9AQXw6k04DhnamIq1erQ9eJQboF8PoCC+H0BBMtjOd9k6nr2TqevZOo7XcjHF0RzeawCoaDqQ/rduxZSm8gTFUWZ3WYlJLnfMLwANOcgOBomMZGxnO+ydT0qH23+orT+Wbtg0p1WM6nVYMWaV3pnLc9+xZIvlphmcdfW7jZhDCwYs0rBhQAP7qogAAAA991vyacNfLe8Qm30xWklqH+gXD2YIfOSWOH17nEF6e4txVlKKZ3GnkjG//O5AwU2o0Pi5Z3KBeYIz2OrF/CBn/vLZsrwdJ9gmz4yP836oO9ADjuWY1D+1iZse3IPe+cgB1imDP2q/okHjpaqbhq37+gQmOUTIFjVNlksGegCHnhMjLUkuDXAtFuJ3zAXgtnJ7Odw6593v7Un/J8pkKiSc/zO4V0XrZU60B5yy4/2BwYHTRxQYikFwn044ENhG00qDBWNEUdiQo8F+mchMzMZ5pG5DORgWXKyyFUxerhuxxTUfKU4PvmfERa/2+fVTm7rnEqVxwdkBpUQmWTGnqPcpDPskldLKx1wogGKKTuKWr4a7Xt0zav6rMowM7po8+WwWLyDTrQoh37FS/DVk1VKR2d5VOZ4vP/0LrGL6QBY+HnL0CV2UpZhdZCMa1CxxGA1THRoq0rxv6XlxO98+Gp/dEWlaYnSc7jesNyv9/kAAEVdv3/7zOAfoDEv90z/uMz/eWu9rKfzB/4IH+3mf+AHb4iDtSGkd7Zz/X8AAAAAAA",nw="/wedding-card/assets/groom-DPAw36zd.webp",Rh="data:image/webp;base64,UklGRo4JAABXRUJQVlA4WAoAAAAQAAAARAIANwAAQUxQSPcIAAABfyAQSFLYH3iFiEgdMF3b9raRnAckixBFqYTJHapbmOxYQv8Aq9i9dBIdljMjOucm3TlDtXI25ZxNjXMWnbMhtXOknLM5Oc9AJbEESgRxL/ABBUpqF5cR/Z8AzQWdki7F8t3NBx+8FN49LN/VTPxLYcIDdzXjwWXQgfZdglPO9VDWMaVL4Bj8u4T9tTxOXMrYw754TtKN7hZO/Dwt7Azv70rnyLUK6rN0a/cuIQrydKhnnO/31QsaURkFl81j1ivVIN/ShTj1CzoNdPlMa69U5Fu5EJOgoKStyL9kHFb/30avGI9lnW1eMg3q0k/Zr0DjXFsXo8lmMS0WlFy9dBbVSTYuyEMXaoKVo8/qRdjiao7v/S4rq0O5Se0ifO93WcV1sBsxtQty+k0p90nrvLj/eU++Sq6NO+oMrNkdUMtqJlzL2kF9ShegmXBtFm875SVd0EmQOgpK5+WDDKxz06eS76mnSwUccyXrfdDN6gca9XQB3wfd4nZI2C1dlChMna3qnLoJLOQg12EBe1T07m/I2oZ2AeOhsm+HMVbWUPGNjIdfe45uhzFWYQcQVHRhkPTP2OelyT+wem4Okc6wM0ZA5c6m3Ryn7UOqWXRYMrUS7PNz2j6kWtTjU4KKLuwtynKTQDN+Y9Y2VdpZXr7jYv4UrprcZPgf1FP778rhcSOrweqISsYO47BsOoFdK1fzPwO7sAarIyrFPDYFlpS7+Z+BXdgPTJ/P4RgOqGiPazNyP1XOGPEwG4ZO3H0YbNNfcs8I/45GAy+BVdMODzRZTUXDlPNaSVssZ+1wLQ6U2YEbMroA9TxeDN2UW8QO1+JART72X8CnqOfyYugW9afAQtZ4KbWNrdPQmtE2dsbZYJ96yonh76Bm2IdBTO/OgvfxDjZMfWyHTQNlSf88kHTAQtYeP8J6Vh9qph3e8aXxbg73FKAkKa4VsMePsF5EBxg+/Vg+9xSgVMz3AqxJcv7GkthINbF/kw0V62Ud5oh7p2E5tYWxbhiTDkyddsZJOB1Y03ZWSXEvdYQt6ZSyNMI2vEk6hrCadcCgZDoaWnp/mNWK4U8SbKnBmtyPVfO8STqGsFpQaKuRqxXDnyTYhfwFhB/Hl7RDRQ1Tg/tjFgsa1TOOqUhyS/KAR5Ue8ZkRYbKSahA8Bp/CdBSWTBFc17hres9QmpA6YFFywZbGlFMu/GFC+HZl32ZR5tO25FayDuAF62WWUhv6EBvSb4bVlAt/mBC+XUW6f/hjr5e8XAfwgvUyS4VMGbzBjQeSDvM4hAzKRfkZEWVJRwQfh5dKKWfa0y16k9XUP1Jz4PexDBGVHGXdDkyHu9J0kNqmLvWhLk0HSndIryvbS6ibHFaV+5iXJI81yWGjBUM1Ex5MdUiva5Ys5zjmJcljrQiP0JaOKZlatFMCrqmorqTvs6TpQJIigLCs9BaLOuLB8UZqvCuX8CYVwzSPLx1iOvHVJEi1WJEiWJVH2+D9fAJd5dyHVVOTer5xWJaUUrxxAlQj8FPezyfQ1WxWJDnfkhqHZUnFbLEu6dAkbeEbpgyswgLJTZbUoJ16/GPAgoxHlNyYK5EvyWVNL7PZwU55YGctSduUDWe+9kwum2qymWxqi1WD5D6Bn8ONB/imDrWML09NfUkeK5JOB7T7/CoDQktp9wn8c/DrlCVNfUkeK0UcYEs6RtLRQDpg1zBhXbPYx9c2yynpkQjbFA31AXyNUh2WGwl2w7SVY0JFalAxnOy6E5OSnt5PfdLTe1jOkHK9n+tnwyzbdBNJLmuS/pG6pDFUO8D9EbZBmtXkhtSYBpJc1iT9I/UijihJzjSQNAqkEWGGXdgtpAlh6b1UTTrMOhvehJpu7Ura4YExPTkspg6gpodS8UCpquEWMRlnQy+hPAl1QrWQRjIsH2EbmtQMjWlPUpNlyZtyRdKErjrQU5/F87IhnXBNUpNlyZtypYjbQ0n/zKakKJATQzk1HarwQ7QN1KKh7iwCXpLeE0jqAKEtJfXUMSw5cVVy8A22YQdSbmwp4i9pK+J1yUA5JzlOuKZtfEOD5ZR7Sk1Sh7oU4UtSzAPagppatDMms/LVgSuSOtSlCF9FRoHUAdu0D9iSHPziDnjtGU/TZTOrn7UPvZLUH0hyYvh0SZOl1BhWt7GlFmuGmsFL6CXow6GlEbCgI/6WIM9ZN2ObniUXPi/l0Zb0MwldZfwGg1IKqurTkxz8jLPubKKuc8auMn6DQakod8JnSdJocDPhoyxIarFRXJ//oK0zqGftsGByfvf5kqQ+kvTNf/h2pVZS8aNsnpgWDHWDHvvlyoi/ZFM6BF96D7CZJ+JzDc4EW1IE90jSlGef/jgEFdONxxLulSSPodTnqqS4lxHxubMJP8zwiunGYwn3qhje/GF6VuoI8FssSdqbDdg6IbSyOuxWDJl9Sso5WZPkUk+GhJakr5bhqknSe4Cq1IeqtA3U8hzBi5akDp8jSdswKEkakX7UUtoDeKfSHXxpJyhLiiiZjuBFawa3gPuV9gDeqWKPgeEVpfdgWHaSNUn9WWxDW+qzrmwXhm/ItYOd58yX1KQ+Bl/ZHqs5+tCV1GFdkpswsPJsAZ8tyXlaxn+FmiRvCgzLMsfQtQwtrivzmKppC/jsGXRgaBkUQ9cqaA+4R8Ym3CO9/4akLVaL64AtOT9fzqExDEt5WiznORlK6lDfh1oOsZHjgLAqyfmbsiRFXFdeZ8wf3aPcPzusSlLz33mxoszfZLci8xeXsrYDy+SM+aN7ZqDx9dfJ/JvsVlSwN+FzlTn5PEmeLUmnC8U500d1xzcZfIeVRx9ezNP5NUkNqs5HA+U9vTfLmfBZytv85XIuORXdqSXzm5X3ERVaUqZT0UwdS9mPqHi3ouw3KaenGTZU4MOa+Zt0p66y/xnsXHNJL4HFeccJPZbnHC14PStzjhPepXh1vtFiUNZkY74xYl0azzfcJCxL0Xxjj01JkT/XiFiQNNqdZzjJUKlgntGibQjnGdusGJhn9Fmaf3ToWXMPF75p7qF/hW+ae2gML1rRYL7RmEJAb76h1hmwNueQ84NJWJ13SI2KJAEAVlA4IHAAAAAwCwCdASpFAjgAPpFIpE0lpCOiIEgAsBIJaW7hd2EbQBWb0VcIMghqqTXbaLhBkENWFiltFwgyCGqpNdtouEGQQ1VJrttFwgyCGqpNdtouEGQQ1VJrttFwgyCGqpNdtot9AADpYqij78CP8AAAAAAA",Yl="/wedding-card/assets/cloud-BC2F4fhZ.webp",rw="/wedding-card/assets/about-DTRBYuAL.webp",iw="data:image/webp;base64,UklGRk4GAABXRUJQVlA4WAoAAAAQAAAApwAAPgAAQUxQSMADAAABfyAQSFLYH3iFiEgdKO//v7Ztl/aR7UThaFhux7xFxzEzOaeextsJraSM8phXbm9jZqaC0+fZXelpvDKDAmbZ+hykn6SfrIj+TwBa0ZgOQJuLZJ00AWxnW7IUdwKo71QShikYzCJZdzODEtWEWc2OM9yvkbBnsHOEM5MGn6aqdjpxcAYfRPIeoJo8D/FtJO8kZybQoceRuO88gXivUWMxxpgVc1Fpv50eZBczMVsFLFCA5zZnQhi0pwT4hmrMCoDTiR/Ia0PRSokM9kB7bNGyePW9R/LrENrH5GWi65kdbpBsi1O14NoXjNshgHl/XyfS6N8blwkbqNKeggkrVPAmyTfq7I/BOZ5dxJDLKUB5lRSHvAsGTXnvmJ5veFOTqwDUB6RUeDewl/fJG//aY7BO5gCNnZIUaI2diqQvgJGCH8nrAMNW5BSA1TQhV6eKUdszSJpuP1DNQarzNlBjpyS4PZig53pSdbqxmu2h5imBmiYMfg3ZtQHUbA9owu3ANxcgtNMdiFkUmZVWWvUBCz7NrMZ2ROlkg1zPrO6Sqqxx8mhhgaduXs9MJPVCsP69JPvk5b7Z6WYAlN/WbERaYiqAQYsxGHbZ8w2pABi3lbnRjFINkCdpk+1yPuDbDXMXVwHACFVEm2dXgG9IPsEcIr/+v7T2B+30HjbY6TF4bUQ6ewHoquehJp/cTjW6UfbuoT0ND5GEV2taSjRo9gPY0e+Bfg4qNqIfY2+VUwDUaPmgyGsjqg4AaPgBmrtKwjsrlZ+uBAC9UvDLk1OiKWcBg10CgwMSkIKwuMoPNdqnR1I0gV3MCHazU0bAoinIk/YFUVVWQVixlVhUHhTgd5LLM+EmTazmLIHmmohHVoQPSXLZuWHGTNSYFuTZK+PMIHMC4BGHJLctPjVQ0TRoQlhkmwznwgD9QaB95NJbWHZbOkCRXSKnAInXkxlBtTsQoH/s0tdSRK6lCAZ5nQzd5SxBUw0B6JscD2f7VcjZEO5mhwwM/nK53/VMhwJww8LfNm++yK9OZkR1+8yUjIDf7ITsBk0IB5k78HYmDhOmtCY7RTvYPclCJgZ6SlrtbYirduohl9bp8mI4rIp0msCQSy5NtVzQb9gNYKhJWpcnR5lpADjjEMm3TksIzX0bvmccJsmlqUTIc8AP2OCStG5Pggl2ijB4mCStxae2nLNTCQA816TX2rxo0aJFm/9Pt8j1vBbBz3ixwaDdLTLK9hAAbpp/tNXKRKTX33zzzYs+3vxaW2to7tvRtLjB/gTSnb4EwhmpWABWUDggaAIAAHARAJ0BKqgAPwA+iTqXR6UjoiEy9iwAoBEJaAhwC/ACCIPjqtPsYs+xIpjw0cLbeeYDzbPQt/jPTM6kv0AOlH/ymTgeAP4B+AH1+9/ioWvdTjMfTwR2wmeoqdcX0x7s7xlcIvKGgcIhFbgIXpeP5B9Zq48FCUVyBEljxBqHGOQAUUOOVNfBoMOSMx2fbxGqpFQjQAAA/tHHsGuZNNUils66QS5SIMtsKb2plC6m53Nec3XIGXzJfX7xng6uDdUQ5OXRmLkoJ9m7Dr6esrY2zfWV+KpmmkFh/QQLPLj/8d/t1//zR5MjYYEwEQ9C/S0YT1Ntdjdey4DH4zpQcnEPpHfDX0c+Wgh1qM6QmJhqqzlmnSD2GMM8+nk7GEFElNwsoH0oyxtoYmTA6JSwSv0/bN3kOVszLycX72LGXQtYRcPHNt4rsqSDPnUiQOr8+tqzuzTARsbhpqOSSvEg3StsHgR3qnxayDbKgtd+s+4/zjUg9hdLlghyClTd4Z4iXsQ+DdXkTmr+YkRuT//71sbnKUkGkUhQDhEd/+4M1ZzhTTGTytp2EjuOjsgqB13PXOkDdA3PvSO6/qz444DCW63xz1zKWGNd2uXD+zLFA9pHJP1LHxLZ62uswApHp7vkaijL0WgQH2XVUtb/bUq2sjM9oLf5gJi96kH/3CAiR9J7ojZh813G8sEmA5SpdY8fJ8M//745+5ahF9PAjHj+ev6/BvWendfFfnkOJtgTH+V8U98gZV0yRvuycOzvB8YXbmgfXsCGVIcsQOllzCrVIVNc69W1eYrUGxXH//iZ49l8KNA5WG/qHBU8AAA=",sw="data:image/webp;base64,UklGRjAGAABXRUJQVlA4WAoAAAAQAAAAqQAAPgAAQUxQSKkDAAABfyAQSFLYH3iFiEgdKO//v7Ztd/axTGGXGcYMOva0hsYgn8Zb8TRUMfQ8k8fMjGU6xceu5Pa+Z06uo9CYlIYMgs/B+in6yYro/wSgLvVVABbcj4idNgBcYDJiZkYAVEdiUUMFOjVE7BgTmGU6at5jwyXuIKL2Ejae55rIwQmlbMajB5dwEyL4d6YjaDP3IYKnuSaK/nwCoay2hmr/kwinzsZQTTIkY6Yia8GpZX5GmQhH1YBsneZyH3mmQ5FlcwhYVEQ6W7Bge8+ArDFT8bX75OlH5rfgGHmTqJ3aTptkUlJ1E7x7gC1VkkzNC9j1w0bRAnq3ytnMRoGdOkzP5gD8OyTfrjIjZ3wk5rWA35O8qzvhyLLIu6HTkGMb8FZZC1zCRkkl3gNM8FEpOWoCnXwnTyDPlLQYFtgjMSlzNATD3BfLEZgdgawC8B4NSLVZEFSYwXlCdTfJsvYBFTZK0UnT6z0ygxligukAdsV8OQZ0DkLqHEmv0tvMYLrY7u5DgFazL2qYoSbHpsuERzuooWLMsTEQzU87NdUl0zJU7rsoAGxtgTvIdxFkteAvM0GyTcZ7bBpiWmA9q5qvfJkIZJaKD51FyhpjOu+jbCDwIaZ95EiaZErGLJM6mwSld4PLsclHnuSTfBaBt/8cn92HzWwWzI4Ep7IVgJqu2ezwqQtMBzfE1kviaGeb4CITgcHJABjO1EC9AiUTwU+yFQCYEbzHluDKNwOwvYAF7rsS9j8X87hZcAn3BTenATqbBDpvlgAFtZYmQIn3BDZjAKNMCMbYKMO7ukn0Hvn1bRJK70JYMmPySoYIFknzdG/P7d3dsXlMG3iPawULXAOh0h36LJw+ffr0gGDSQIVxQY6tMi71min4QLvlw3u514yh04BwhkkZ1rUe076wYHfPt32nHB+aaIZNIqsAie1kombS9OVzc0/Pp/Z3bBG5xZggy40yVJdrPRhMrYpOeJfIdRCOsUEGsic31OSpBOa3SiZEVfNSRYYwz4YQ2DQgzPLZ3/cl5OWohcBho2iYzdMsJKRlaYSgsg/isqlsdllcJgu7l4dgZ1qk0gB2uGS/IinkeTYD2OGQxQ0RMsc4AFzyJ8lvlkbFAncfPC/5iyT7lWjI8WYv4GOXZPGOSJhiowjZv0iy2Luk/qyRmA/gRYe1xdM9PT09p3+J10s7b4H/S16x6be5XoaYmgeArt3/1N0cEWh7d3d3z7HTbybrZIG7L5h615mJItVqiyJcooQCAFZQOCBgAgAA0A8AnQEqqgA/AD6NPJhHpSOioS9WHCigEYlmCHAF8AM8A/ACxzlqhXuVYXdVDHwtNtr5gPOE9Ev+H9IDqKvQA6UP/A5NJ4A/gH4AU36Zu1l5IUoN8hT/9ubiIeDeDqKCkzVKZGwehi0XLG6TsBRX/6FwI4i8UUsGAfLLECvO2moYgR4gv3kQAP5nIrd1bv2q1deUj70pjoEf5NjwpjZPPe0hVf32L+pAaI8Ae6n/gbpBPG1hS5+/xFBJTplRs66SyTf89YX9/8xv909L+Od5xP/nps8FOJIArMwXIyiywM2C681KtmfaWSW8lR7ZJwMtpt45PZy6WRCZgeCPo1IQO82fhSTXFn96PIhWPXtmWYAB0wU9Yg/aRSZhMjoZqZSRJDFfot0gODH992MASh7xi2FRJULPIrCtCK+U4//nYQD6qdWdCOF2Ds/LP/BXpmkTvQWObb7pmcNvrf+9PIHohsf/Xn/duumdJAp6/JvyL67VEDPl/t8Yazx5X9mWoenVX9xe7Fwe1s/R5o1wAt9wbvpNji2SNh8g9NcRmKRmKWlCraQovjf8ALjzPEAmWQ/xPHdu6kInirOR8wcxVfCDMRKgRiGIjj09YniswEBVzz36OQSs8sSAf5hjBjnwY+cNctQ4g4xFFu9xICZyIJvvbWorwX/sG+wx9SI1bT/oAwdErBJ0Qw4f+5H46BKbrMp0o9xsWzDJfqFNHGXwutVDANql+e7LfFzg7DfSth+Hp0sWck2FB3dDPIDopwH9XIlDPbYFckzi+U87/+/ygNjmKxNEDVC/k7diJ/1Qu9gAAAA=",Oh="/wedding-card/assets/he-CpFBR20u.webp",Dh="/wedding-card/assets/she-B437CgU7.webp",ow=({text:t})=>{const e=B.useRef(null);return B.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&e.current.querySelectorAll(".character").forEach((o,l)=>{setTimeout(()=>{o.classList.add("animate")},l*200)})})},{threshold:.5});return e.current&&n.observe(e.current),()=>{e.current&&n.unobserve(e.current)}},[]),f.jsx("div",{ref:e,className:"bounce-text-container",children:t.split("").map((n,r)=>f.jsx("span",{className:`character ${n===" "?"space":""}`,children:n},r))})},Lh=t=>B.createElement("svg",{width:24,height:24,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},B.createElement("path",{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2Zm1.252 11H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486L13.252 13Zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486L15.25 9.5Z",fill:"currentColor"})),lw=t=>B.createElement("svg",{width:24,height:24,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},B.createElement("path",{d:"m12.815 12.197-7.532 1.256a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.943l18-9a.75.75 0 0 0 0-1.342l-18-9c-.614-.307-1.283.304-1.035.943l2.598 6.957a.5.5 0 0 0 .386.319l7.532 1.255a.2.2 0 0 1 0 .394Z",fill:"#ffffff"}));function Mh(t){const{onClick:e,disabled:n,text:r,variant:i,color:s,icon:o,textColor:l,permission:a}=t;return f.jsxs("button",{variant:i,type:"button",className:`CreateButton JasonHandwriting3 ${a===!1?"disabled":""}`,onClick:e,disabled:n||a===!1,style:{"--color":`${s}`,"--textColor":`${l||"#fff"}`},children:[f.jsx("span",{className:"button__text",children:r}),f.jsx("span",{className:"button__icon",children:o})]})}const aw=()=>f.jsxs("div",{className:"cssload-main",children:[f.jsxs("div",{className:"cssload-heart",children:[f.jsx("span",{className:"cssload-heartL"}),f.jsx("span",{className:"cssload-heartR"}),f.jsx("span",{className:"cssload-square"})]}),f.jsx("div",{className:"cssload-shadow"})]}),uw=({targetDate:t,targetHour:e=12})=>{const[n,r]=B.useState({days:0,hours:0,minutes:0,seconds:0});return B.useEffect(()=>{const i=()=>{const o=new Date,l=new Date(t);l.setHours(e,0,0,0);const a=l.getTime()-o.getTime();if(a>0){const u=Math.floor(a/864e5),d=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(a%(1e3*60*60)/(1e3*60)),h=Math.floor(a%(1e3*60)/1e3);return{days:u,hours:d,minutes:c,seconds:h}}return{days:0,hours:0,minutes:0,seconds:0}};r(i());const s=setInterval(()=>{const o=i();r(o),o.days===0&&o.hours===0&&o.minutes===0&&o.seconds===0&&clearInterval(s)},1e3);return()=>clearInterval(s)},[t,e]),f.jsxs("div",{className:"countdown-timer-vertical",children:[f.jsx("div",{className:"time-block",children:f.jsxs("div",{className:"time-content",children:[f.jsx("div",{className:"number",children:n.days}),f.jsx("div",{className:"unit",children:"天"})]})}),f.jsx("div",{className:"time-block",children:f.jsxs("div",{className:"time-content",children:[f.jsx("div",{className:"number",children:String(n.hours).padStart(2,"0")}),f.jsx("div",{className:"unit",children:"時"})]})}),f.jsx("div",{className:"time-block",children:f.jsxs("div",{className:"time-content",children:[f.jsx("div",{className:"number",children:String(n.minutes).padStart(2,"0")}),f.jsx("div",{className:"unit",children:"分"})]})}),f.jsx("div",{className:"time-block",children:f.jsxs("div",{className:"time-content",children:[f.jsx("div",{className:"number",children:String(n.seconds).padStart(2,"0")}),f.jsx("div",{className:"unit",children:"秒"})]})})]})},cw=({month:t,year:e,highlightDate:n})=>{const r=(u,d)=>new Date(u,d+1,0).getDate(),i=(u,d)=>new Date(u,d,1).getDay(),s=["日","一","二","三","四","五","六"],o=r(e,t),l=i(e,t),a=[];for(let u=0;u<l;u++)a.push(null);for(let u=1;u<=o;u++)a.push(u);return f.jsxs("div",{className:"calendar-overlay",children:[f.jsx("div",{className:"calendar-header",children:f.jsxs("div",{className:"month-year",children:[f.jsx("span",{className:"num",children:"114"}),f.jsx("span",{className:"line",children:"/"}),f.jsx("span",{className:"num",children:String(t+1).padStart(2,"0")})," ",f.jsx("span",{className:"line",children:"/"})," ",f.jsx("span",{className:"num",children:String(n).padStart(2,"0")})]})}),f.jsx("div",{className:"weekdays",children:s.map((u,d)=>f.jsx("div",{className:"weekday",children:u},d))}),f.jsx("div",{className:"days",children:a.map((u,d)=>f.jsx("div",{className:`day ${u===n?"highlighted":""} ${u?"":"empty"}`,children:u},d))})]})},le=({src:t,alt:e,className:n})=>{const[r,i]=B.useState(!1);return f.jsx("img",{src:t,className:n,alt:e,style:{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",opacity:r?1:0},onLoad:()=>i(!0)})},dw=(t={})=>{const e=B.useRef(null);return B.useEffect(()=>{const n=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting?(s.target.classList.add("show-animate"),t.repeat||n.unobserve(s.target)):t.repeat&&s.target.classList.remove("show-animate")})},{threshold:t.threshold||.1,rootMargin:t.rootMargin||"0px"}),r=e.current;return r&&n.observe(r),()=>{r&&n.unobserve(r)}},[t.repeat,t.threshold,t.rootMargin]),e},D=({children:t,animation:e="fade",delay:n=0,duration:r="normal",className:i="",threshold:s=.1,rootMargin:o="0px",debug:l=!1})=>{const[a,u]=B.useState(!1),[d,c]=B.useState(0),h=dw({threshold:s,rootMargin:o,onIntersect:y=>{c(Math.round(y.intersectionRatio*100)),y.isIntersecting&&!a&&u(!0)}}),m=()=>typeof r=="number"?"":`duration-${r}`,v={"--delay":`${n}ms`,...typeof r=="number"?{"--duration":`${r}s`}:{}};return f.jsxs("div",{ref:h,className:`
                scroll-animate 
                ${e} 
                ${m()}
                ${a?"show-animate":""}
                ${i}
                ${l?"debug-outline":""}
            `,style:v,children:[l&&f.jsxs("div",{className:"debug-info",children:[f.jsxs("span",{children:["可見度: ",d,"%"]}),f.jsxs("span",{children:["動畫: ",e]}),f.jsxs("span",{children:["速度: ",typeof r=="number"?`${r}s`:r]}),f.jsxs("span",{children:["狀態: ",a?"已觸發":"未觸發"]})]}),t]})};var bh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw jr(e)},jr=function(t){return new Error("Firebase Database ("+og.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[d],n[c],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new fw;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ag=function(t){const e=lg(t);return vc.encodeByteArray(e,!0)},Co=function(t){return ag(t).replace(/\./g,"")},Io=function(t){try{return vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){return ug(void 0,t)}function ug(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mw(n)||(t[n]=ug(t[n],e[n]));return t}function mw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=()=>gw().__FIREBASE_DEFAULTS__,vw=()=>{if(typeof process>"u"||typeof bh>"u")return;const t=bh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Io(t[1]);return e&&JSON.parse(e)},yc=()=>{try{return _w()||vw()||yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cg=t=>{var e,n;return(n=(e=yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ww=t=>{const e=cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dg=()=>{var t;return(t=yc())===null||t===void 0?void 0:t.config},hg=t=>{var e;return(e=yc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Co(JSON.stringify(n)),Co(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Sw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iw(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pg(){return og.NODE_ADMIN===!0}function Tw(){try{return typeof indexedDB=="object"}catch{return!1}}function kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nw,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yn(i,l,r)}}function xw(t,e){return t.replace(Aw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Aw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wi(Io(s[0])||""),n=Wi(Io(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Pw=function(t){const e=mg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Rw=function(t){const e=mg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fh(s)&&Fh(o)){if(!ko(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Dw(t,e){const n=new Lw(t,e);return n.subscribe.bind(n)}class Lw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jl),i.error===void 0&&(i.error=Jl),i.complete===void 0&&(i.complete=Jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jl(){}function Ec(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new al;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uw(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(t){return t===Tn?void 0:t}function Uw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const Bw={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Ww=V.INFO,Hw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Vw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sc{constructor(e){this.name=e,this._logLevel=Ww,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Gw=(t,e)=>e.some(n=>t instanceof n);let jh,Uh;function Qw(){return jh||(jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $w(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,iu=new WeakMap,_g=new WeakMap,Xl=new WeakMap,Cc=new WeakMap;function qw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gg.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function Kw(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_g.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yw(t){su=t(su)}function Jw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zl(this),e,...n);return _g.set(r,e.sort?e.sort():[e]),ln(r)}:$w().includes(t)?function(...e){return t.apply(Zl(this),e),ln(gg.get(this))}:function(...e){return ln(t.apply(Zl(this),e))}}function Xw(t){return typeof t=="function"?Jw(t):(t instanceof IDBTransaction&&Kw(t),Gw(t,Qw())?new Proxy(t,su):t)}function ln(t){if(t instanceof IDBRequest)return qw(t);if(Xl.has(t))return Xl.get(t);const e=Xw(t);return e!==t&&(Xl.set(t,e),Cc.set(e,t)),e}const Zl=t=>Cc.get(t);function Zw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ln(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ln(o.result),a.oldVersion,a.newVersion,ln(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const eE=["get","getKey","getAll","getAllKeys","count"],tE=["put","add","delete","clear"],ea=new Map;function zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ea.get(e))return ea.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ea.set(e,s),s}Yw(t=>({...t,get:(e,n,r)=>zh(e,n)||t.get(e,n,r),has:(e,n)=>!!zh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",Bh="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Sc("@firebase/app"),iE="@firebase/app-compat",sE="@firebase/analytics-compat",oE="@firebase/analytics",lE="@firebase/app-check-compat",aE="@firebase/app-check",uE="@firebase/auth",cE="@firebase/auth-compat",dE="@firebase/database",hE="@firebase/data-connect",fE="@firebase/database-compat",pE="@firebase/functions",mE="@firebase/functions-compat",gE="@firebase/installations",_E="@firebase/installations-compat",vE="@firebase/messaging",yE="@firebase/messaging-compat",wE="@firebase/performance",EE="@firebase/performance-compat",SE="@firebase/remote-config",CE="@firebase/remote-config-compat",IE="@firebase/storage",TE="@firebase/storage-compat",kE="@firebase/firestore",NE="@firebase/vertexai",xE="@firebase/firestore-compat",AE="firebase",PE="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="[DEFAULT]",RE={[ou]:"fire-core",[iE]:"fire-core-compat",[oE]:"fire-analytics",[sE]:"fire-analytics-compat",[aE]:"fire-app-check",[lE]:"fire-app-check-compat",[uE]:"fire-auth",[cE]:"fire-auth-compat",[dE]:"fire-rtdb",[hE]:"fire-data-connect",[fE]:"fire-rtdb-compat",[pE]:"fire-fn",[mE]:"fire-fn-compat",[gE]:"fire-iid",[_E]:"fire-iid-compat",[vE]:"fire-fcm",[yE]:"fire-fcm-compat",[wE]:"fire-perf",[EE]:"fire-perf-compat",[SE]:"fire-rc",[CE]:"fire-rc-compat",[IE]:"fire-gcs",[TE]:"fire-gcs-compat",[kE]:"fire-fst",[xE]:"fire-fst-compat",[NE]:"fire-vertex","fire-js":"fire-js",[AE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,OE=new Map,au=new Map;function Wh(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rr(t){const e=t.name;if(au.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of No.values())Wh(n,t);for(const n of OE.values())Wh(n,t);return!0}function Ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new rs("app","Firebase",DE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=PE;function vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=dg()),!n)throw an.create("no-options");const s=No.get(i);if(s){if(ko(n,s.options)&&ko(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new zw(i);for(const a of au.values())o.addComponent(a);const l=new LE(n,r,o);return No.set(i,l),l}function yg(t=lu){const e=No.get(t);if(!e&&t===lu&&dg())return vg();if(!e)throw an.create("no-app",{appName:t});return e}function un(t,e,n){var r;let i=(r=RE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(l.join(" "));return}Rr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebase-heartbeat-database",bE=1,Hi="firebase-heartbeat-store";let ta=null;function wg(){return ta||(ta=Zw(ME,bE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),ta}async function FE(t){try{const n=(await wg()).transaction(Hi),r=await n.objectStore(Hi).get(Eg(t));return await n.done,r}catch(e){if(e instanceof yn)Dt.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function Hh(t,e){try{const r=(await wg()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,Eg(t)),await r.done}catch(n){if(n instanceof yn)Dt.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function Eg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=1024,UE=30*24*60*60*1e3;class zE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=UE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vh(),{heartbeatsToSend:r,unsentEntries:i}=BE(this._heartbeatsCache.heartbeats),s=Co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dt.warn(n),""}}}function Vh(){return new Date().toISOString().substring(0,10)}function BE(t,e=jE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tw()?kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gh(t){return Co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){Rr(new Bn("platform-logger",e=>new nE(e),"PRIVATE")),Rr(new Bn("heartbeat",e=>new zE(e),"PRIVATE")),un(ou,Bh,t),un(ou,Bh,"esm2017"),un("fire-js","")}HE("");var Qh={};const $h="@firebase/database",qh="1.0.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sg="";function VE(t){Sg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GE(e)}}catch{}return new QE},Pn=Cg("localStorage"),$E=Cg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Sc("@firebase/database"),qE=function(){let t=1;return function(){return t++}}(),Ig=function(t){const e=bw(t),n=new Ow;n.update(e);const r=n.digest();return vc.encodeByteArray(r)},is=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=is.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let yi=null,Kh=!0;const KE=function(t,e){S(!e,"Can't turn on custom loggers persistently."),vr.logLevel=V.VERBOSE,yi=vr.log.bind(vr)},Ie=function(...t){if(Kh===!0&&(Kh=!1,yi===null&&$E.get("logging_enabled")===!0&&KE()),yi){const e=is.apply(null,t);yi(e)}},ss=function(t){return function(...e){Ie(t,...e)}},uu=function(...t){const e="FIREBASE INTERNAL ERROR: "+is(...t);vr.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${is(...t)}`;throw vr.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+is(...t);vr.warn(e)},YE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},JE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wn="[MIN_NAME]",fn="[MAX_NAME]",Br=function(t,e){if(t===e)return 0;if(t===Wn||e===fn)return-1;if(e===Wn||t===fn)return 1;{const n=Yh(t),r=Yh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},XE=function(t,e){return t===e?0:t<e?-1:1},ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},kc=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=kc(t[e[r]]);return n+="}",n},Tg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kg=function(t){S(!Tc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},ZE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nS=new RegExp("^-?(0*)\\d{1,10}$"),rS=-2147483648,iS=2147483647,Yh=function(t){if(nS.test(t)){const e=Number(t);if(e>=rS&&e<=iS)return e}return null},Wr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},sS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class $s{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$s.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="5",Ng="v",xg="s",Ag="r",Pg="f",Rg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Og="ls",Dg="p",cu="ac",Lg="websocket",Mg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fg(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Lg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aS(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={},ra={};function xc(t){const e=t.toString();return na[e]||(na[e]=new uS),na[e]}function cS(t,e){const n=t.toString();return ra[n]||(ra[n]=e()),ra[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Wr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="start",hS="close",fS="pLPCommand",pS="pRTLPCB",jg="id",Ug="pw",zg="ser",mS="cb",gS="seg",_S="ts",vS="d",yS="dframe",Bg=1870,Wg=30,wS=Bg-Wg,ES=25e3,SS=3e4;class cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ss(e),this.stats_=xc(n),this.urlFn=a=>(this.appCheckToken&&(a[cu]=this.appCheckToken),Fg(n,Mg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SS)),JE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ac((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jh)this.id=l,this.password=a;else if(o===hS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jh]="t",r[zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ng]=Nc,this.transportSessionId&&(r[xg]=this.transportSessionId),this.lastSessionId&&(r[Og]=this.lastSessionId),this.applicationId&&(r[Dg]=this.applicationId),this.appCheckToken&&(r[cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rg.test(location.hostname)&&(r[Ag]=Pg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cr.forceAllow_=!0}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){return cr.forceAllow_?!0:!cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZE()&&!eS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ag(n),i=Tg(r,wS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yS]="t",r[jg]=e,r[Ug]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ac{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qE(),window[fS+this.uniqueCallbackIdentifier]=e,window[pS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ac.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jg]=this.myID,e[Ug]=this.myPW,e[zg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wg+r.length<=Bg;){const o=this.pendingSegs.shift();r=r+"&"+gS+i+"="+o.seg+"&"+_S+i+"="+o.ts+"&"+vS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ES)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=16384,IS=45e3;let xo=null;typeof MozWebSocket<"u"?xo=MozWebSocket:typeof WebSocket<"u"&&(xo=WebSocket);class it{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ss(this.connId),this.stats_=xc(n),this.connURL=it.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ng]=Nc,typeof location<"u"&&location.hostname&&Rg.test(location.hostname)&&(o[Ag]=Pg),n&&(o[xg]=n),r&&(o[Og]=r),i&&(o[cu]=i),s&&(o[Dg]=s),Fg(e,Lg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let r;pg(),this.mySock=new xo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xo!==null&&!it.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tg(n,CS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cr,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=it&&it.isAvailable();let r=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[it];else{const i=this.transports_=[];for(const s of Vi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=6e4,kS=5e3,NS=10*1024,xS=100*1024,ia="t",Xh="d",AS="s",Zh="r",PS="e",ef="o",tf="a",nf="n",rf="p",RS="h";class OS{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ss("c:"+this.id+":"),this.transportManager_=new Vi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ia in e){const n=e[ia];n===tf?this.upgradeIfSecondaryHealthy_():n===Zh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ef&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ni("t",e),r=ni("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ni("t",e),r=ni("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ni(ia,e);if(Xh in e){const r=e[Xh];if(n===RS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===AS?this.onConnectionShutdown_(r):n===Zh?this.onReset_(r):n===PS?uu("Server Error: "+r):n===ef?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nc!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Vg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ao}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=32,of=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Gg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $g(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function b(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return De(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Pc(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class LS{constructor(e,n){this.errorPrefix_=n,this.parts_=Qg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ul(this.parts_[r]);qg(this)}}function MS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ul(e),qg(t)}function bS(t){const e=t.parts_.pop();t.byteLength_-=ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function qg(t){if(t.byteLength_>of)throw new Error(t.errorPrefix_+"has a key path longer than "+of+" bytes ("+t.byteLength_+").");if(t.parts_.length>sf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sf+") or object contains a cycle "+kn(t))}function kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Vg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Rc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e3,FS=60*5*1e3,lf=30*1e3,jS=1.3,US=3e4,zS="server_kill",af=3;class xt extends Hg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ri,this.maxReconnectDelay_=FS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!pg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ao.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new al,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const r=Pr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Rw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Pw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>US&&(this.reconnectDelay_=ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new OS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{je(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(zS)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&je(c),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ru(this.interruptReasons_)&&(this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>kc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=af&&(this.reconnectDelay_=lf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=af&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sg.replace(/\./g,"-")]=1,wc()?e["framework.cordova"]=1:fg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ao.getInstance().currentlyOnline();return ru(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Wn,e),i=new F(Wn,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class Kg extends cl{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Br(e.name,n.name)}isDefinedOn(e){throw jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(fn,Os)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Os)}toString(){return".key"}}const Ln=new Kg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class BS{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new BS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e){return Br(t.name,e.name)}function Oc(t,e){return Br(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;function HS(t){du=t}const Yg=function(t){return typeof t=="number"?"number:"+kg(t):"string:"+t},Jg=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else S(t===du||t.isEmpty(),"priority of unexpected type.");S(t===du||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jg(this.priorityNode_)}static set __childrenNodeConstructor(e){uf=e}static get __childrenNodeConstructor(){return uf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:M(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kg(this.value_):e+=this.value_,this.lazyHash_=Ig(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg,Zg;function VS(t){Xg=t}function GS(t){Zg=t}class QS extends cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(fn,new he("[PRIORITY-POST]",Zg))}makePost(e,n){const r=Xg(e);return new F(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const ee=new QS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=Math.log(2);class qS{constructor(e){const n=s=>parseInt(Math.log(s)/$S,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Po=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new pe(h,c.node,pe.BLACK,null,null);{const m=parseInt(d/2,10)+a,v=i(a,m),y=i(m+1,u);return c=t[m],h=n?n(c):c,new pe(h,c.node,pe.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,y){const R=c-v,g=c;c-=v;const p=i(R+1,g),_=t[R],w=n?n(_):_;m(new pe(w,_.node,y,null,p))},m=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),R=Math.pow(2,a.count-(v+1));y?h(R,pe.BLACK):(h(R,pe.BLACK),h(R,pe.RED))}return d},o=new qS(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;const Jn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Jn&&ee,"ChildrenNode.ts has not been loaded"),sa=sa||new Ct({".priority":Jn},{".priority":ee}),sa}get(e){const n=Pr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Po(r,e.getCompare()):l=Jn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ct(d,u)}addToIndexes(e,n){const r=To(this.indexes_,(i,s)=>{const o=Pr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Jn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Po(l,o.getCompare())}else return Jn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Ct(r,this.indexSet_)}removeFromIndexes(e,n){const r=To(this.indexes_,i=>{if(i===Jn)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Ct(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jg(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ii||(ii=new A(new Le(Oc),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ii}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ii:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ii:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{S(M(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yg(this.getPriority().val())+":"),this.forEachChild(ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ig(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===os?-1:0}withIndex(e){if(e===Ln||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ee),i=n.getIterator(ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ln?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KS extends A{constructor(){super(new Le(Oc),A.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const os=new KS;Object.defineProperties(F,{MIN:{value:new F(Wn,A.EMPTY_NODE)},MAX:{value:new F(fn,os)}});Kg.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;HS(os);GS(os);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=!0;function ve(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ve(e))}if(!(t instanceof Array)&&YS){const n=[];let r=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Po(n,WS,o=>o.name,Oc);if(r){const o=Po(n,ee.getCompare());return new A(s,ve(e),new Ct({".priority":o},{".priority":ee}))}else return new A(s,ve(e),Ct.Default)}else{let n=A.EMPTY_NODE;return Ue(t,(r,i)=>{if(vt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}VS(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends cl{constructor(e){super(),this.indexPath_=e,S(!b(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Br(e.name,n.name):s}makePost(e,n){const r=ve(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,os);return new F(fn,e)}toString(){return Qg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS extends cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ve(e);return new F(n,r)}toString(){return".value"}}const e_=new JS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){return{type:"value",snapshotNode:t}}function Or(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function XS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Gi(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Or(n,r)):o.trackChildChange(Qi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Gi(i,s))}),n.isLeafNode()||n.forEachChild(ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Qi(i,s,o))}else r.trackChildChange(Or(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.indexedFilter_=new Lc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$i.getStartPost_(e),this.endPost_=$i.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ee,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $i(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,m)=>c(m,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Qi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Gi(n,c));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Or(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Gi(u.name,u.node)),s.trackChildChange(Or(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Mc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eC(t){return t.loadsAllData()?new Lc(t.getIndex()):t.hasLimit()?new ZS(t):new $i(t)}function tC(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function nC(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function rC(t,e){const n=t.copy();return n.index_=e,n}function cf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===e_?n="$value":t.index_===Ln?n="$key":(S(t.index_ instanceof Dc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function df(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Hg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ss("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ro.getListenId_(e,r),l={};this.listens_[o]=l;const a=cf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Pr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ro.getListenId_(e,n);delete this.listens_[r]}get(e){const n=cf(e._queryParams),r=e._path.toString(),i=new al;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ur(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wi(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return{value:null,children:new Map}}function n_(t,e,n){if(b(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Oo());const i=t.children.get(r);e=Q(e),n_(i,e,n)}}function hu(t,e,n){t.value!==null?n(e,t.value):sC(t,(r,i)=>{const s=new G(e.toString()+"/"+r);hu(i,s,n)})}function sC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=10*1e3,lC=30*1e3,aC=5*60*1e3;class uC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oC(e);const r=hf+(lC-hf)*Math.random();wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ue(e,(i,s)=>{s>0&&vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*aC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function r_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ot.ACK_USER_WRITE,this.source=r_()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Do(W(),n,this.revert)}}else return S(M(this.path)===e,"operationForChild called for unrelated child."),new Do(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new qi(this.source,W()):new qi(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ot.OVERWRITE}operationForChild(e){return b(this.path)?new Hn(this.source,W(),this.snap.getImmediateChild(e)):new Hn(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ot.MERGE}operationForChild(e){if(b(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Hn(this.source,W(),n.value):new Ki(this.source,W(),n)}else return S(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ki(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(XS(o.childName,o.snapshotNode))}),si(t,i,"child_removed",e,r,n),si(t,i,"child_added",e,r,n),si(t,i,"child_moved",s,r,n),si(t,i,"child_changed",e,r,n),si(t,i,"value",e,r,n),i}function si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>fC(t,l,a)),o.forEach(l=>{const a=hC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function hC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fC(t,e,n){if(e.childName==null||n.childName==null)throw jr("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e){return{eventCache:t,serverCache:e}}function Ei(t,e,n,r){return dl(new Vn(e,n,r),t.serverCache)}function i_(t,e,n,r){return dl(t.eventCache,new Vn(e,n,r))}function fu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;const pC=()=>(oa||(oa=new Le(XE)),oa);class Y{constructor(e,n=pC()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return Ue(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(b(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ue(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new Y(null)}}set(e,n){if(b(e))return new Y(n,this.children);{const r=M(e),s=(this.children.get(r)||new Y(null)).set(Q(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(b(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(b(e))return n;{const r=M(e),s=(this.children.get(r)||new Y(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(b(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(b(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),ue(n,i),r):new Y(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new Y(null))}}function Si(t,e,n){if(b(e))return new ut(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=De(i,e);return s=s.updateChild(o,n),new ut(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new ut(s)}}}function ff(t,e,n){let r=t;return Ue(n,(i,s)=>{r=Si(r,ue(e,i),s)}),r}function pf(t,e){if(b(e))return ut.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new ut(n)}}function pu(t,e){return Kn(t,e)!=null}function Kn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function mf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function cn(t,e){if(b(e))return t;{const n=Kn(t,e);return n!=null?new ut(new Y(n)):new ut(t.writeTree_.subtree(e))}}function mu(t){return t.writeTree_.isEmpty()}function Dr(t,e){return s_(W(),t.writeTree_,e)}function s_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=s_(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e){return u_(e,t)}function mC(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Si(t.visibleWrites,e,n)),t.lastWriteId=r}function gC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _C(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&vC(l,r.path)?i=!1:st(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return yC(t),!0;if(r.snap)t.visibleWrites=pf(t.visibleWrites,r.path);else{const l=r.children;Ue(l,a=>{t.visibleWrites=pf(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function vC(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ue(t.path,n),e))return!0;return!1}function yC(t){t.visibleWrites=o_(t.allWrites,wC,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wC(t){return t.visible}function o_(t,e,n){let r=ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)st(n,o)?(l=De(n,o),r=Si(r,l,s.snap)):st(o,n)&&(l=De(o,n),r=Si(r,W(),s.snap.getChild(l)));else if(s.children){if(st(n,o))l=De(n,o),r=ff(r,l,s.children);else if(st(o,n))if(l=De(o,n),b(l))r=ff(r,W(),s.children);else{const a=Pr(s.children,M(l));if(a){const u=a.getChild(Q(l));r=Si(r,W(),u)}}}else throw jr("WriteRecord should have .snap or .children")}}return r}function l_(t,e,n,r,i){if(!r&&!i){const s=Kn(t.visibleWrites,e);if(s!=null)return s;{const o=cn(t.visibleWrites,e);if(mu(o))return n;if(n==null&&!pu(o,W()))return null;{const l=n||A.EMPTY_NODE;return Dr(o,l)}}}else{const s=cn(t.visibleWrites,e);if(!i&&mu(s))return n;if(!i&&n==null&&!pu(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(st(u.path,e)||st(e,u.path))},l=o_(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Dr(l,a)}}}function EC(t,e,n){let r=A.EMPTY_NODE;const i=Kn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=cn(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=Dr(cn(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),mf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=cn(t.visibleWrites,e);return mf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function SC(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(pu(t.visibleWrites,s))return null;{const o=cn(t.visibleWrites,s);return mu(o)?i.getChild(n):Dr(o,i.getChild(n))}}function CC(t,e,n,r){const i=ue(e,n),s=Kn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return Dr(o,r.getNode().getImmediateChild(n))}else return null}function IC(t,e){return Kn(t.visibleWrites,e)}function TC(t,e,n,r,i,s,o){let l;const a=cn(t.visibleWrites,e),u=Kn(a,W());if(u!=null)l=u;else if(n!=null)l=Dr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&d.length<i;)c(m,r)!==0&&d.push(m),m=h.getNext();return d}else return[]}function kC(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Lo(t,e,n,r){return l_(t.writeTree,t.treePath,e,n,r)}function Uc(t,e){return EC(t.writeTree,t.treePath,e)}function gf(t,e,n,r){return SC(t.writeTree,t.treePath,e,n,r)}function Mo(t,e){return IC(t.writeTree,ue(t.treePath,e))}function NC(t,e,n,r,i,s){return TC(t.writeTree,t.treePath,e,n,r,i,s)}function zc(t,e,n){return CC(t.writeTree,t.treePath,e,n)}function a_(t,e){return u_(ue(t.treePath,e),t.writeTree)}function u_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Qi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Gi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Or(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Qi(r,e.snapshotNode,i.oldSnap));else throw jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const c_=new AC;class Bc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),s=NC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){return{filter:t}}function RC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OC(t,e,n,r,i){const s=new xC;let o,l;if(n.type===ot.OVERWRITE){const u=n;u.source.fromUser?o=gu(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!b(u.path),o=bo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ot.MERGE){const u=n;u.source.fromUser?o=LC(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=_u(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ot.ACK_USER_WRITE){const u=n;u.revert?o=FC(t,e,u.path,r,i,s):o=MC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ot.LISTEN_COMPLETE)o=bC(t,e,n.path,r,s);else throw jr("Unknown operation type: "+n.type);const a=s.getChanges();return DC(e,o,a),{viewCache:o,changes:a}}function DC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(t_(fu(e)))}}function d_(t,e,n,r,i,s){const o=e.eventCache;if(Mo(r,n)!=null)return e;{let l,a;if(b(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gn(e),d=u instanceof A?u:A.EMPTY_NODE,c=Uc(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Lo(r,Gn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){S(pn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=gf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=gf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=zc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ei(e,l,o.isFullyInitialized()||b(n),t.filter.filtersNodes())}}function bo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(b(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),m,null)}else{const m=M(n);if(!a.isCompleteForPath(n)&&pn(n)>1)return e;const v=Q(n),R=a.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=d.updatePriority(a.getNode(),R):u=d.updateChild(a.getNode(),m,R,v,c_,null)}const c=i_(e,u,a.isFullyInitialized()||b(n),d.filtersNodes()),h=new Bc(i,c,s);return d_(t,c,n,i,h,l)}function gu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Bc(i,e,s);if(b(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ei(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ei(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Q(n),m=l.getNode().getImmediateChild(c);let v;if(b(h))v=r;else{const y=d.getCompleteChild(c);y!=null?Gg(h)===".priority"&&y.getChild($g(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=A.EMPTY_NODE}if(m.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=Ei(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function _f(t,e){return t.eventCache.isCompleteForChild(e)}function LC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ue(n,a);_f(e,M(d))&&(l=gu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ue(n,a);_f(e,M(d))||(l=gu(t,l,d,u,i,s,o))}),l}function vf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _u(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;b(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),v=vf(t,m,h);a=bo(t,a,new G(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const m=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!m){const v=e.serverCache.getNode().getImmediateChild(c),y=vf(t,v,h);a=bo(t,a,new G(c),y,i,s,o,l)}}),a}function MC(t,e,n,r,i,s,o){if(Mo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(b(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return bo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(b(n)){let u=new Y(null);return a.getNode().forEachChild(Ln,(d,c)=>{u=u.set(new G(d),c)}),_u(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((d,c)=>{const h=ue(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),_u(t,e,n,u,i,s,l,o)}}function bC(t,e,n,r,i){const s=e.serverCache,o=i_(e,s.getNode(),s.isFullyInitialized()||b(n),s.isFiltered());return d_(t,o,n,r,c_,i)}function FC(t,e,n,r,i,s){let o;if(Mo(r,n)!=null)return e;{const l=new Bc(r,e,i),a=e.eventCache.getNode();let u;if(b(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Lo(r,Gn(e));else{const c=e.serverCache.getNode();S(c instanceof A,"serverChildren would be complete if leaf node"),d=Uc(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let c=zc(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lo(r,Gn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Mo(r,W())!=null,Ei(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Lc(r.getIndex()),s=eC(r);this.processor_=PC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Vn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Vn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=dl(c,d),this.eventGenerator_=new cC(this.query_)}get query(){return this.query_}}function UC(t){return t.viewCache_.serverCache.getNode()}function zC(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!b(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function yf(t){return t.eventRegistrations_.length===0}function BC(t,e){t.eventRegistrations_.push(e)}function wf(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Ef(t,e,n,r){e.type===ot.MERGE&&e.source.queryId!==null&&(S(Gn(t.viewCache_),"We should always have a full cache before handling merges"),S(fu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=OC(t.processor_,i,e,n,r);return RC(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,h_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function WC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(s,o)=>{r.push(Or(s,o))}),n.isFullyInitialized()&&r.push(t_(n.getNode())),h_(t,r,n.getNode(),e)}function h_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return dC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;class HC{constructor(){this.views=new Map}}function VC(t){S(!Fo,"__referenceConstructor has already been defined"),Fo=t}function GC(){return S(Fo,"Reference.ts has not been loaded"),Fo}function QC(t){return t.views.size===0}function Wc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Ef(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Ef(o,e,n,r));return s}}function $C(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Lo(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Uc(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=dl(new Vn(l,a,!1),new Vn(r,i,!1));return new jC(e,u)}return o}function qC(t,e,n,r,i,s){const o=$C(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),BC(o,n),WC(o,n)}function KC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=mn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(wf(u,n,r)),yf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(wf(a,n,r)),yf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!mn(t)&&s.push(new(GC())(e._repo,e._path)),{removed:s,events:o}}function f_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yr(t,e){let n=null;for(const r of t.views.values())n=n||zC(r,e);return n}function p_(t,e){if(e._queryParams.loadsAllData())return hl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function m_(t,e){return p_(t,e)!=null}function mn(t){return hl(t)!=null}function hl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;function YC(t){S(!jo,"__referenceConstructor has already been defined"),jo=t}function JC(){return S(jo,"Reference.ts has not been loaded"),jo}let XC=1;class Sf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=kC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function g_(t,e,n,r,i){return mC(t.pendingWriteTree_,e,n,r,i),i?ls(t,new Hn(r_(),e,n)):[]}function Rn(t,e,n=!1){const r=gC(t.pendingWriteTree_,e);if(_C(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(W(),!0):Ue(r.children,o=>{s=s.set(new G(o),!0)}),ls(t,new Do(r.path,s,n))}else return[]}function fl(t,e,n){return ls(t,new Hn(bc(),e,n))}function ZC(t,e,n){const r=Y.fromObject(n);return ls(t,new Ki(bc(),e,r))}function eI(t,e){return ls(t,new qi(bc(),e))}function tI(t,e,n){const r=Vc(t,n);if(r){const i=Gc(r),s=i.path,o=i.queryId,l=De(s,e),a=new qi(Fc(o),l);return Qc(t,s,a)}else return[]}function vu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||m_(o,e))){const a=KC(o,e,n,r);QC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,m)=>mn(m));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=iI(h);for(let v=0;v<m.length;++v){const y=m[v],R=y.query,g=y_(t,y);t.listenProvider_.startListening(Ci(R),Uo(t,R),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ci(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(pl(h));t.listenProvider_.stopListening(Ci(h),m)}))}sI(t,u)}return l}function nI(t,e,n,r){const i=Vc(t,r);if(i!=null){const s=Gc(i),o=s.path,l=s.queryId,a=De(o,e),u=new Hn(Fc(l),a,n);return Qc(t,o,u)}else return[]}function rI(t,e,n,r){const i=Vc(t,r);if(i){const s=Gc(i),o=s.path,l=s.queryId,a=De(o,e),u=Y.fromObject(n),d=new Ki(Fc(l),a,u);return Qc(t,o,d)}else return[]}function Cf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const v=De(h,i);s=s||yr(m,v),o=o||mn(m)});let l=t.syncPointTree_.get(i);l?(o=o||mn(l),s=s||yr(l,W())):(l=new HC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const y=yr(v,W());y&&(s=s.updateImmediateChild(m,y))}));const u=m_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=pl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=oI();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const d=jc(t.pendingWriteTree_,i);let c=qC(l,e,n,d,s,a);if(!u&&!o&&!r){const h=p_(l,e);c=c.concat(lI(t,e,h))}return c}function Hc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),u=yr(l,a);if(u)return u});return l_(i,e,s,n,!0)}function ls(t,e){return __(e,t.syncPointTree_,null,jc(t.pendingWriteTree_,W()))}function __(t,e,n,r){if(b(t.path))return v_(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=yr(i,W()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=a_(r,o);s=s.concat(__(l,a,u,d))}return i&&(s=s.concat(Wc(i,t,r,n))),s}}function v_(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=yr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=a_(r,o),d=t.operationForChild(o);d&&(s=s.concat(v_(d,l,a,u)))}),i&&(s=s.concat(Wc(i,t,r,n))),s}function y_(t,e){const n=e.query,r=Uo(t,n);return{hashFn:()=>(UC(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?tI(t,n._path,r):eI(t,n._path);{const s=tS(i,n);return vu(t,n,null,s)}}}}function Uo(t,e){const n=pl(e);return t.queryToTagMap.get(n)}function pl(t){return t._path.toString()+"$"+t._queryIdentifier}function Vc(t,e){return t.tagToQueryMap.get(e)}function Gc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Qc(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=jc(t.pendingWriteTree_,e);return Wc(r,n,i,null)}function iI(t){return t.fold((e,n,r)=>{if(n&&mn(n))return[hl(n)];{let i=[];return n&&(i=f_(n)),Ue(r,(s,o)=>{i=i.concat(o)}),i}})}function Ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(JC())(t._repo,t._path):t}function sI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function oI(){return XC++}function lI(t,e,n){const r=e._path,i=Uo(t,e),s=y_(t,n),o=t.listenProvider_.startListening(Ci(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!b(u)&&d&&mn(d))return[hl(d).query];{let h=[];return d&&(h=h.concat(f_(d).map(m=>m.query))),Ue(c,(m,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ci(d),Uo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $c(n)}node(){return this.node_}}class qc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new qc(this.syncTree_,n)}node(){return Hc(this.syncTree_,this.path_)}}const aI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},If=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cI(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},cI=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},dI=function(t,e,n,r){return Kc(e,new qc(n,t),r)},w_=function(t,e,n){return Kc(t,new $c(e),n)};function Kc(t,e,n){const r=t.getPriority().val(),i=If(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=If(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(ee,(l,a)=>{const u=Kc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jc(t,e){let n=e instanceof G?e:new G(e),r=t,i=M(n);for(;i!==null;){const s=Pr(r.node.children,i)||{children:{},childCount:0};r=new Yc(i,r,s),n=Q(n),i=M(n)}return r}function Hr(t){return t.node.value}function E_(t,e){t.node.value=e,yu(t)}function S_(t){return t.node.childCount>0}function hI(t){return Hr(t)===void 0&&!S_(t)}function ml(t,e){Ue(t.node.children,(n,r)=>{e(new Yc(n,t,r))})}function C_(t,e,n,r){n&&!r&&e(t),ml(t,i=>{C_(i,e,!0,r)}),n&&r&&e(t)}function fI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function as(t){return new G(t.parent===null?t.name:as(t.parent)+"/"+t.name)}function yu(t){t.parent!==null&&pI(t.parent,t.name,t)}function pI(t,e,n){const r=hI(n),i=vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/[\[\].#$\/\u0000-\u001F\u007F]/,gI=/[\[\].#$\u0000-\u001F\u007F]/,la=10*1024*1024,I_=function(t){return typeof t=="string"&&t.length!==0&&!mI.test(t)},T_=function(t){return typeof t=="string"&&t.length!==0&&!gI.test(t)},_I=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T_(t)},Tf=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Tc(t)||t&&typeof t=="object"&&vt(t,".sv")},us=function(t,e,n,r){r&&e===void 0||Xc(Ec(t,"value"),e,n)},Xc=function(t,e,n){const r=n instanceof G?new LS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+kn(r)+" with contents = "+e.toString());if(Tc(e))throw new Error(t+"contains "+e.toString()+" "+kn(r));if(typeof e=="string"&&e.length>la/3&&ul(e)>la)throw new Error(t+"contains a string greater than "+la+" utf8 bytes "+kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!I_(o)))throw new Error(t+" contains an invalid key ("+o+") "+kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MS(r,o),Xc(t,l,r),bS(r)}),i&&s)throw new Error(t+' contains ".value" child '+kn(r)+" in addition to actual children.")}},Zc=function(t,e,n,r){if(!T_(n))throw new Error(Ec(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zc(t,e,n)},k_=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},yI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!I_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_I(n))throw new Error(Ec(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ed(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Pc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function N_(t,e,n){ed(t,n),x_(t,r=>Pc(r,e))}function Mt(t,e,n){ed(t,n),x_(t,r=>st(r,e)||st(e,r))}function x_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(EI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function EI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yi&&Ie("event: "+n.toString()),Wr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="repo_interrupt",CI=25;class II{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oo(),this.transactionQueueTree_=new Yc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TI(t,e,n){if(t.stats_=xc(t.repoInfo_),t.forceRestClient_||sS())t.server_=new Ro(t.repoInfo_,(r,i,s,o)=>{kf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{kf(t,r,i,s,o)},r=>{Nf(t,r)},r=>{kI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=cS(t.repoInfo_,()=>new uC(t.stats_,t.server_)),t.infoData_=new iC,t.infoSyncTree_=new Sf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=fl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),nd(t,"connected",!1),t.serverSyncTree_=new Sf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Mt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function A_(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function td(t){return aI({timestamp:A_(t)})}function kf(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=To(n,u=>ve(u));o=rI(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=nI(t.serverSyncTree_,s,a,i)}else if(r){const a=To(n,u=>ve(u));o=ZC(t.serverSyncTree_,s,a)}else{const a=ve(n);o=fl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=gl(t,s)),Mt(t.eventQueue_,l,o)}function Nf(t,e){nd(t,"connected",e),e===!1&&xI(t)}function kI(t,e){Ue(e,(n,r)=>{nd(t,n,r)})}function nd(t,e,n){const r=new G("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=fl(t.infoSyncTree_,r,i);Mt(t.eventQueue_,r,s)}function P_(t){return t.nextWriteId_++}function NI(t,e,n,r,i){rd(t,"set",{path:e.toString(),value:n,priority:r});const s=td(t),o=ve(n,r),l=Hc(t.serverSyncTree_,e),a=w_(o,l,s),u=P_(t),d=g_(t.serverSyncTree_,e,a,u,!0);ed(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const v=h==="ok";v||je("set at "+e+" failed: "+h);const y=Rn(t.serverSyncTree_,u,!v);Mt(t.eventQueue_,e,y),OI(t,i,h,m)});const c=M_(t,e);gl(t,c),Mt(t.eventQueue_,c,[])}function xI(t){rd(t,"onDisconnectEvents");const e=td(t),n=Oo();hu(t.onDisconnect_,W(),(i,s)=>{const o=dI(i,s,t.serverSyncTree_,e);n_(n,i,o)});let r=[];hu(n,W(),(i,s)=>{r=r.concat(fl(t.serverSyncTree_,i,s));const o=M_(t,i);gl(t,o)}),t.onDisconnect_=Oo(),Mt(t.eventQueue_,W(),r)}function AI(t,e,n){let r;M(e._path)===".info"?r=Cf(t.infoSyncTree_,e,n):r=Cf(t.serverSyncTree_,e,n),N_(t.eventQueue_,e._path,r)}function PI(t,e,n){let r;M(e._path)===".info"?r=vu(t.infoSyncTree_,e,n):r=vu(t.serverSyncTree_,e,n),N_(t.eventQueue_,e._path,r)}function RI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SI)}function rd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function OI(t,e,n,r){e&&Wr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function R_(t,e,n){return Hc(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function id(t,e=t.transactionQueueTree_){if(e||_l(t,e),Hr(e)){const n=D_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&DI(t,as(e),n)}else S_(e)&&ml(e,n=>{id(t,n)})}function DI(t,e,n){const r=n.map(u=>u.currentWriteId),i=R_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=De(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{rd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Rn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_l(t,Jc(t.transactionQueueTree_,e)),id(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Wr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}gl(t,e)}},o)}function gl(t,e){const n=O_(t,e),r=as(n),i=D_(t,n);return LI(t,i,r),r}function LI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=De(n,a.path);let d=!1,c;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=CI)d=!0,c="maxretry",i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=R_(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Xc("transaction failed: Data returned ",m,a.path);let v=ve(m);typeof m=="object"&&m!=null&&vt(m,".priority")||(v=v.updatePriority(h.getPriority()));const R=a.currentWriteId,g=td(t),p=w_(v,h,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=P_(t),o.splice(o.indexOf(R),1),i=i.concat(g_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Rn(t.serverSyncTree_,R,!0))}else d=!0,c="nodata",i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}_l(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Wr(r[l]);id(t,t.transactionQueueTree_)}function O_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Hr(r)===void 0;)r=Jc(r,n),e=Q(e),n=M(e);return r}function D_(t,e){const n=[];return L_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function L_(t,e,n){const r=Hr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ml(e,i=>{L_(t,i,n)})}function _l(t,e){const n=Hr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,E_(e,n.length>0?n:void 0)}ml(e,r=>{_l(t,r)})}function M_(t,e){const n=as(O_(t,e)),r=Jc(t.transactionQueueTree_,e);return fI(r,i=>{aa(t,i)}),aa(t,r),C_(r,i=>{aa(t,i)}),n}function aa(t,e){const n=Hr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?E_(e,void 0):n.length=s+1,Mt(t.eventQueue_,as(e),i);for(let o=0;o<r.length;o++)Wr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const xf=function(t,e){const n=FI(t),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},FI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=MI(t.substring(d,c)));const h=bI(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Af.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Af.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class zI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return b(this._path)?null:Gg(this._path)}get ref(){return new wn(this._repo,this._path)}get _queryIdentifier(){const e=df(this._queryParams),n=kc(e);return n==="{}"?"default":n}get _queryObject(){return df(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof Vr))return!1;const n=this._repo===e._repo,r=Pc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DS(this._path)}}function WI(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function sd(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ln){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Wn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==fn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ee){if(e!=null&&!Tf(e)||n!=null&&!Tf(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof Dc||t.getIndex()===e_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function b_(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class wn extends Vr{constructor(e,n){super(e,n,new Mc,!1)}get parent(){const e=$g(this._path);return e===null?null:new wn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Yi(this.ref,e);return new zo(this._node.getChild(n),r,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new zo(i,Yi(this.ref,r),ee)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function F_(t,e){return t=Qe(t),t._checkNotDeleted("ref"),Yi(t._root,e)}function Yi(t,e){return t=Qe(t),M(t._path)===null?vI("child","path",e):Zc("child","path",e),new wn(t._repo,ue(t._path,e))}function HI(t,e){t=Qe(t),k_("push",t._path),us("push",e,t._path,!0);const n=A_(t._repo),r=jI(n),i=Yi(t,r),s=Yi(t,r);let o;return e!=null?o=VI(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function VI(t,e){t=Qe(t),k_("set",t._path),us("set",e,t._path,!1);const n=new al;return NI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class od{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new UI("value",this,new zo(e.snapshotNode,new wn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zI(this,e,n):null}matches(e){return e instanceof od?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function GI(t,e,n,r,i){const s=new BI(n,void 0),o=new od(s);return AI(t._repo,t,o),()=>PI(t._repo,t,o)}function QI(t,e,n,r){return GI(t,"value",e)}class vl{}class $I extends vl{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){us("endAt",this._value,e._path,!0);const n=nC(e._queryParams,this._value,this._key);if(b_(n),sd(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Vr(e._repo,e._path,n,e._orderByCalled)}}class qI extends vl{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){us("startAt",this._value,e._path,!0);const n=tC(e._queryParams,this._value,this._key);if(b_(n),sd(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Vr(e._repo,e._path,n,e._orderByCalled)}}class KI extends vl{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){WI(e,"orderByChild");const n=new G(this._path);if(b(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Dc(n),i=rC(e._queryParams,r);return sd(i),new Vr(e._repo,e._path,i,!0)}}function YI(t){return Zc("orderByChild","path",t),new KI(t)}class JI extends vl{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(us("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new $I(this._value,this._key)._apply(new qI(this._value,this._key)._apply(e))}}function XI(t,e){return new JI(t,e)}function ZI(t,...e){let n=Qe(t);for(const r of e)n=r._apply(n);return n}VC(wn);YC(wn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="FIREBASE_DATABASE_EMULATOR_HOST",wu={};let t1=!1;function n1(t,e,n,r){t.repoInfo_=new bg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function r1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xf(s,i),l=o.repoInfo,a;typeof process<"u"&&Qh&&(a=Qh[e1]),a?(s=`http://${a}?ns=${l.namespace}`,o=xf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new lS(t.name,t.options,e);yI("Invalid Firebase Database URL",o),b(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=s1(l,t,u,new oS(t.name,n));return new o1(d,t)}function i1(t,e){const n=wu[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RI(t),delete n[t.key]}function s1(t,e,n,r){let i=wu[e.name];i||(i={},wu[e.name]=i);let s=i[t.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new II(t,t1,n,r),i[t.toURLString()]=s,s}class o1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wn(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(i1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function l1(t=yg(),e){const n=Ic(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ww("database");r&&a1(n,...r)}return n}function a1(t,e,n,r={}){t=Qe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $s($s.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ew(r.mockUserToken,t.app.options.projectId);s=new $s(o)}n1(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){VE(zr),Rr(new Bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return r1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),un($h,qh,t),un($h,qh,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};u1();var c1="firebase",d1="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(c1,d1,"app");function ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h1=j_,U_=new rs("auth","Firebase",j_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Sc("@firebase/auth");function f1(t,...e){Bo.logLevel<=V.WARN&&Bo.warn(`Auth (${zr}): ${t}`,...e)}function qs(t,...e){Bo.logLevel<=V.ERROR&&Bo.error(`Auth (${zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw ad(t,...e)}function gt(t,...e){return ad(t,...e)}function z_(t,e,n){const r=Object.assign(Object.assign({},h1()),{[e]:n});return new rs("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return z_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ad(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function P(t,e,...n){if(!t)throw ad(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qs(e),new Error(e)}function Ft(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function p1(){return Pf()==="http:"||Pf()==="https:"}function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p1()||Cw()||"connection"in navigator)?navigator.onLine:!0}function g1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=wc()||fg()}get(){return m1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new cs(3e4,6e4);function cd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,i={}){return W_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ur(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return Sw()||(u.referrerPolicy="no-referrer"),B_.fetch()(H_(t,t.config.apiHost,n,l),u)})}async function W_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_1),e);try{const i=new w1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ls(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ls(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ls(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ls(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw z_(t,d,u);bt(t,d)}}catch(i){if(i instanceof yn)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function y1(t,e,n,r,i={}){const s=await Gr(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function H_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,i):`${t.config.apiScheme}://${i}`}class w1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),v1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ls(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function V_(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S1(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=dd(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ii(ua(i.auth_time)),issuedAtTime:Ii(ua(i.iat)),expirationTime:Ii(ua(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ua(t){return Number(t)*1e3}function dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Io(n);return i?JSON.parse(i):(qs("Failed to decode base64 JWT payload"),null)}catch(i){return qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rf(t){const e=dd(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&C1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function C1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ji(t,V_(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?G_(s.providerUserInfo):[],l=k1(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function T1(t){const e=Qe(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function G_(t){return t.map(e=>{var{providerId:n}=e,r=ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e){const n=await W_(t,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=H_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",B_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function x1(t,e){return Gr(t,"POST","/v2/accounts:revokeToken",cd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=Rf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await N1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wr;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Su(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S1(this,e)}reload(){return T1(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await Ji(this,E1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:w,isAnonymous:C,providerData:k,stsTokenManager:N}=n;P(_&&N,e,"internal-error");const x=wr.fromJSON(this.name,N);P(typeof _=="string",e,"internal-error"),zt(c,e.name),zt(h,e.name),P(typeof w=="boolean",e,"internal-error"),P(typeof C=="boolean",e,"internal-error"),zt(m,e.name),zt(v,e.name),zt(y,e.name),zt(R,e.name),zt(g,e.name),zt(p,e.name);const q=new Tt({uid:_,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:C,photoURL:v,phoneNumber:m,tenantId:y,stsTokenManager:x,createdAt:g,lastLoginAt:p});return k&&Array.isArray(k)&&(q.providerData=k.map(j=>Object.assign({},j))),R&&(q._redirectEventId=R),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new wr;i.updateFromServerResponse(n);const s=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?G_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new wr;l.updateFromIdToken(r);const a=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;function kt(t){Ft(t instanceof Function,"Expected a class definition");let e=Of.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Of.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Q_.type="NONE";const Df=Q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ks("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Er(kt(Df),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kt(Df);const o=Ks(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Tt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Er(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(Z_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(J_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $_(t=xe()){return/firefox\//i.test(t)}function q_(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=xe()){return/crios\//i.test(t)}function Y_(t=xe()){return/iemobile/i.test(t)}function J_(t=xe()){return/android/i.test(t)}function X_(t=xe()){return/blackberry/i.test(t)}function Z_(t=xe()){return/webos/i.test(t)}function hd(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A1(t=xe()){var e;return hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P1(){return Iw()&&document.documentMode===10}function ev(t=xe()){return hd(t)||J_(t)||Z_(t)||X_(t)||/windows phone/i.test(t)||Y_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e=[]){let n;switch(t){case"Browser":n=Lf(xe());break;case"Worker":n=`${Lf(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",cd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=6;class L1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mf(this),this.idTokenSubscription=new Mf(this),this.beforeStateQueue=new R1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await V_(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Mn(this));const n=e?Qe(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await O1(this),n=new L1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await x1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&f1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fd(t){return Qe(t)}class Mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dw(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b1(t){pd=t}function F1(t){return pd.loadJS(t)}function j1(){return pd.gapiScript}function U1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t,e){const n=Ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ko(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function B1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function W1(t,e,n){const r=fd(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nv(e),{host:o,port:l}=H1(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),V1()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function H1(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bf(o)}}}function bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e){return y1(t,"POST","/v1/accounts:signInWithIdp",cd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="http://localhost";class Qn extends rv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ld(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:G1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ur(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ds{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ds{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ds{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),o=Ff(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ff(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ho(e,n,r,i)}}function sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,s,e,r):s})}async function Q1(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Mn(r));const i="reauthenticate";try{const s=await Ji(t,sv(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=dd(s.idToken);P(o,r,"internal-error");const{sub:l}=o;return P(t.uid===l,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(t,e,n=!1){if(Jt(t.app))return Promise.reject(Mn(t));const r="signIn",i=await sv(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function K1(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function Y1(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=1e3,X1=10;class lv extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);P1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,X1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const Z1=lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const uv=av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await eT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=md("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function nT(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sT(){return cv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",oT=1,Go="firebaseLocalStorage",hv="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wl(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function lT(){const t=indexedDB.deleteDatabase(dv);return new hs(t).toPromise()}function Cu(){const t=indexedDB.open(dv,oT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:hv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await lT(),e(await Cu()))})})}async function jf(t,e,n){const r=wl(t,!0).put({[hv]:e,value:n});return new hs(r).toPromise()}async function aT(t,e){const n=wl(t,!1).get(e),r=await new hs(n).toPromise();return r===void 0?null:r.value}function Uf(t,e){const n=wl(t,!0).delete(e);return new hs(n).toPromise()}const uT=800,cT=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yl._getInstance(sT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new tT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cu();return await jf(e,Vo,"1"),await Uf(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wl(i,!1).getAll();return new hs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const dT=fv;new cs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t,e){return e?kt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends rv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fT(t){return q1(t.auth,new gd(t),t.bypassAuthState)}function pT(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),$1(n,new gd(t),t.bypassAuthState)}async function mT(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Q1(n,new gd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:bt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new cs(2e3,1e4);class dr extends pv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gT.get())};e()}}dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="pendingRedirect",Ys=new Map;class vT extends pv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const r=await yT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yT(t,e){const n=ST(e),r=ET(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wT(t,e){Ys.set(t._key(),e)}function ET(t){return kt(t._redirectPersistence)}function ST(t){return Ks(_T,t.config.apiKey,t.name)}async function CT(t,e,n=!1){if(Jt(t.app))return Promise.reject(Mn(t));const r=fd(t),i=hT(r,e),o=await new vT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=10*60*1e3;class TT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IT&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AT=/^https?/;async function PT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NT(t);for(const n of e)try{if(RT(n))return}catch{}bt(t,"unauthorized-domain")}function RT(t){const e=Eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AT.test(n))return!1;if(xT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new cs(3e4,6e4);function Bf(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DT(t){return new Promise((e,n)=>{var r,i,s;function o(){Bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bf(),n(gt(t,"network-request-failed"))},timeout:OT.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const l=U1("iframefcb");return _t()[l]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},F1(`${j1()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Js=null,e})}let Js=null;function LT(t){return Js=Js||DT(t),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new cs(5e3,15e3),bT="__/auth/iframe",FT="emulator/auth/iframe",jT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zT(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,FT):`https://${t.config.authDomain}/${bT}`,r={apiKey:e.apiKey,appName:t.name,v:zr},i=UT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ur(r).slice(1)}`}async function BT(t){const e=await LT(t),n=_t().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:zT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=_t().setTimeout(()=>{s(o)},MT.get());function a(){_t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HT=500,VT=600,GT="_blank",QT="http://localhost";class Wf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $T(t,e,n,r=HT,i=VT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},WT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(l=K_(u)?GT:n),$_(u)&&(e=e||QT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(A1(u)&&l!=="_self")return qT(e||"",l),new Wf(null);const c=window.open(e||"",l,d);P(c,t,"popup-blocked");try{c.focus()}catch{}return new Wf(c)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="__/auth/handler",YT="emulator/auth/handler",JT=encodeURIComponent("fac");async function Hf(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(e instanceof iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof ds){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${JT}=${encodeURIComponent(a)}`:"";return`${XT(t)}?${Ur(l).slice(1)}${u}`}function XT({config:t}){return t.emulator?ud(t,YT):`https://${t.authDomain}/${KT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="webStorageSupport";class ZT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=CT,this._overrideRedirectResult=wT}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hf(e,n,r,Eu(),i);return $T(e,o,md())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hf(e,n,r,Eu(),i);return nT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BT(e),r=new TT(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ca,{type:ca},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ca];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ev()||q_()||hd()}}const ek=ZT;var Vf="@firebase/auth",Gf="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rk(t){Rr(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tv(t)},u=new M1(r,i,s,a);return B1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rr(new Bn("auth-internal",e=>{const n=fd(e.getProvider("auth").getImmediate());return(r=>new tk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Vf,Gf,nk(t)),un(Vf,Gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=5*60,sk=hg("authIdTokenMaxAge")||ik;let Qf=null;const ok=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sk)return;const i=n==null?void 0:n.token;Qf!==i&&(Qf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lk(t=yg()){const e=Ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=z1(t,{popupRedirectResolver:ek,persistence:[dT,Z1,uv]}),r=hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ok(s.toString());Y1(n,o,()=>o(n.currentUser)),K1(n,l=>o(l))}}const i=cg("auth");return i&&W1(n,`http://${i}`),n}function ak(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}b1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ak().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rk("Browser");const uk={apiKey:"AIzaSyDdijgk-0-t4ldTlAQaCQtC8P-TsdXXgvQ",authDomain:"wedding-card-67a1d.firebaseapp.com",databaseURL:"https://wedding-card-67a1d-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"wedding-card-67a1d",storageBucket:"wedding-card-67a1d.appspot.com",messagingSenderId:"602909815157",appId:"1:602909815157:web:bf02eaa52ea8a70a88633c"},gv=vg(uk),_v=l1(gv);lk(gv);const ck=()=>{const[t,e]=B.useState([]),[n,r]=B.useState([]),i=3,s=5e3;return B.useEffect(()=>{const o=F_(_v,"messages"),l=ZI(o,YI("status"),XI("approved")),a=QI(l,u=>{const d=u.val();if(d){const c=Object.entries(d).map(([h,m])=>({id:h,...m})).sort((h,m)=>new Date(m.timestamp)-new Date(h.timestamp));e(c)}else e([])});return()=>a()},[]),B.useEffect(()=>{let o=0;const l=()=>{const u=o+i,d=t.slice(o,u);u>=t.length?o=0:o++,r(d)};l();const a=setInterval(l,s);return()=>clearInterval(a)},[t]),f.jsx("div",{id:"toobarshow",children:f.jsx("div",{className:"toolBar-bullet",children:f.jsx("div",{className:"bar-move",children:f.jsx("ul",{className:"bar-b-list",children:n.map((o,l)=>f.jsxs("li",{className:"bullet-list-enter-to",style:{backgroundColor:"rgba(24, 42, 25, 0.38)",color:"#ffffff",animationDelay:`${l*.1}s`},children:[o.name,":",o.message]},o.id))})})})})},dk=()=>{const[t,e]=B.useState(""),[n,r]=B.useState(""),[i,s]=B.useState(!1),[o,l]=B.useState({show:!1,type:"",message:""}),a=B.useRef(null);B.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]);const u=m=>{const v=m.target.value;v.length<=10&&r(v)},d=m=>{const v=m.target.value;v.length<=20&&e(v)},c=(m,v)=>{a.current&&clearTimeout(a.current),l({show:!0,type:m,message:v}),a.current=setTimeout(()=>{l({show:!1,type:"",message:""}),a.current=null},3e3)},h=async()=>{if(!n.trim()||!t.trim()){c("error",{title:"請完整填寫",text:`請輸入${n.trim()?"祝福":"大名"}後再送出`});return}if(!i){s(!0);try{const m=F_(_v,"messages");await HI(m,{name:n.trim(),message:t.trim(),timestamp:new Date().toISOString(),status:"pending"}),e(""),c("success",{title:"留言已送出",text:"請等候審核，審核通過後將會顯示"})}catch{c("error",{title:"留言失敗",text:"請稍後再試，或告知新郎"})}finally{s(!1)}}};return f.jsxs(f.Fragment,{children:[o.show&&f.jsx("div",{className:`message-noty ${o.type}`,children:f.jsxs("div",{className:"noty-content",children:[f.jsx("div",{className:"noty-title",children:o.message.title}),f.jsx("div",{className:"noty-text",children:o.message.text})]})}),f.jsx("div",{id:"toolbarNew",children:f.jsxs("div",{className:"toolbar",children:[f.jsxs("div",{className:"bar-left",children:[f.jsx("input",{type:"text",className:"bar-mess1",placeholder:"輸入大名...",value:n,onChange:u,maxLength:10}),f.jsx("i",{className:"line"}),f.jsx("input",{type:"text",className:"bar-mess2",placeholder:"留下祝福...",value:t,onChange:d,maxLength:20})]}),f.jsx("div",{className:`toolbar-close ${!n.trim()||!t.trim()||i?"disabled":""}`,onClick:h,children:f.jsx(lw,{})})]})})]})},hk=()=>{const t="2025-01-11",[n,r]=B.useState(!0),[i,s]=B.useState({images:!1}),o=[Nh,Rh,Yl,xh,Ah,Dh,Oh,Ph],l=B.useRef(null);B.useEffect(()=>{if(!n)return l.current=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting&&document.querySelectorAll(".cloud").forEach(h=>{h.classList.add("cloud-animate")})})},{threshold:.5}),setTimeout(()=>{const u=document.getElementById("main-photo");u&&l.current&&l.current.observe(u)},100),()=>{l.current&&l.current.disconnect()}},[n]);const a=(u,d="")=>{try{const c=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),h=encodeURIComponent(d);let m;c?(m=`line://ti/p/${u}`,d&&(m+=`?message=${h}`)):(m=`https://line.me/ti/p/${u}`,d&&(m+=`?message=${h}`)),window.open(m,"_blank")===null&&(window.location.href=m)}catch{alert("請複製此 LINE ID 添加好友："+u)}};return B.useEffect(()=>((async()=>{const d=async()=>{try{await Promise.all(o.map(m=>new Promise(v=>{const y=new Image;y.src=m,y.onload=v,y.onerror=()=>{console.warn(`Critical image failed to load: ${m}`),v()}}))),s(m=>({...m,images:!0}))}catch{s(v=>({...v,images:!1}))}},c=new Promise(m=>setTimeout(m,2e3)),h=new Promise((m,v)=>setTimeout(()=>v(new Error("Loading timed out")),6e3));Promise.race([(async()=>{await Promise.all([d(),c])})(),h]).then(()=>r(!1)).catch(m=>{console.warn("Loading terminated early:",m),r(!1)})})(),()=>{r(!0),s({images:!1})}),[]),f.jsxs(f.Fragment,{children:[n?f.jsxs("div",{className:"loader-overlay",children:[f.jsx(aw,{}),f.jsxs("div",{className:"loading-status",children:[!i.images&&f.jsx("div",{className:"GongFan",children:"正在載入圖片，請稍候..."}),i.images&&f.jsx("div",{className:"GongFan",children:"馬上就好..."})]})]}):f.jsxs("div",{className:"container ",children:[f.jsxs("div",{className:"page-1",children:[f.jsxs("div",{className:"main-photo",id:"main-photo",children:[f.jsx("div",{className:"cloud cloud-right",children:f.jsx("img",{src:Yl,alt:"cloud"})}),f.jsx("div",{className:"img",children:f.jsx("img",{src:Nh,alt:"love-dialog"})}),f.jsx("div",{className:"cloud cloud-left",children:f.jsx("img",{src:Yl,alt:"cloud"})}),f.jsx("div",{className:"marry JasonHandwriting3",children:f.jsx(ow,{text:"我們結婚啦!"})})]}),f.jsxs(D,{animation:"fade",delay:1500,className:"photo-text JasonHandwriting3",children:[f.jsx("p",{children:"緣分讓我們相遇，愛情讓我們相守"}),f.jsx("div",{className:"gray-line",children:f.jsx("div",{})})]}),f.jsx(D,{animation:"fade",delay:1500,className:"mouse-area",children:f.jsxs("div",{className:"mouse-scroll",children:[f.jsx("div",{className:"text GongFan",children:"往下滑"}),f.jsx("div",{className:"mouse",children:f.jsx("div",{className:"mouse-in"})}),f.jsxs("div",{className:"main",children:[f.jsx("span",{className:"down-arrow-1"}),f.jsx("span",{className:"down-arrow-2"}),f.jsx("span",{className:"down-arrow-3"})]})]})})]}),f.jsxs("div",{className:"page-2",children:[f.jsxs("div",{className:"title-text",children:[f.jsx("div",{className:"title-text1 GongFan",children:"婚禮邀請"}),f.jsx("div",{className:"title-text2",children:f.jsx(le,{src:Rh,alt:"welcome"})})]}),f.jsxs("div",{className:"sentences",children:[f.jsx("div",{className:"title JasonHandwriting3",children:"「婚禮」"}),f.jsxs("div",{animation:"slide-up",rootmargin:"-280px 0px",className:"sentence GongFan",children:[f.jsx("br",{}),"在人生旅途中",f.jsx("br",{}),"我們因愛而相聚",f.jsx("br",{}),"無比欣喜於這一天",f.jsx("br",{}),"你來替我們的幸福作見證",f.jsx("br",{}),"衷心希望每一位收到這份邀請的您",f.jsx("br",{}),"一同見證這一生中最重要的抉擇。"]}),f.jsx(D,{duration:.75,animation:"fade",rootmargin:"-150px 0px",delay:700,className:"gif",children:f.jsx(le,{src:G0,alt:"hug"})})]}),f.jsxs("div",{className:"main-photos",children:[f.jsx(D,{duration:1,animation:"slide-up",rootmargin:"-80px 0px",className:"main-photo1",children:f.jsx("div",{children:f.jsx(le,{src:xh,alt:"main-photo2"})})}),f.jsxs("div",{className:"main-photo2",children:[f.jsx(D,{className:"img",duration:1,delay:700,animation:"slide-right",children:f.jsx(le,{src:Ah,alt:"main-photo1"})}),f.jsx(D,{duration:1,delay:1e3,animation:"slide-right",className:"text GongFan",children:f.jsxs("div",{className:"text-column",children:[f.jsx("div",{children:"滿心期待藏於心底"}),f.jsx("div",{children:"等著與你相逢之時"})]})})]})]}),f.jsxs(D,{delay:1300,rootmargin:"200px 0px",animation:"slide-left",className:"photo-text GongFan",children:["一段誓言，象徵著我們共同的未來與夢想 ",f.jsx("br",{})," 彼此的陪伴，共享每一個平凡而美好的日子 ",f.jsx("br",{})," 從今我替你挽起長裙，從此你的秋衣由我打理 ",f.jsx("br",{})," ","願一生相伴，不負時光，珍惜彼此的每一次擁抱與微笑"]})]}),f.jsxs("div",{className:"page-3",children:[f.jsxs("div",{className:"title-text",children:[f.jsx("div",{className:"title-text1 JasonHandwriting3",children:"- 關於我們 -"}),f.jsx("div",{className:"title-text2",children:f.jsx(le,{src:rw,alt:"about"})})]}),f.jsxs("div",{className:"date-bar JasonHandwriting3",children:[f.jsx("div",{className:"date",children:"2019.04.20"}),f.jsx("div",{className:"line"}),f.jsx("div",{className:"date",children:"2025.01.11"})]}),f.jsxs("div",{className:"main-photos",children:[f.jsxs("div",{className:"main-photo1",children:[f.jsxs("div",{className:"text-area",children:[f.jsx("div",{className:"said",children:f.jsx(le,{src:iw,alt:"sheSaid"})}),f.jsxs(D,{duration:"very-slow",animation:"slide-up",className:"text GongFan",children:['"每當我回想起',f.jsx("br",{}),"我們的旅程",f.jsx("br",{}),"心中便充滿了",f.jsx("br",{}),'未來的美好期待"']})]}),f.jsxs("div",{className:"img-area",children:[f.jsx(D,{duration:"very-slow",rootmargin:"-100px 0px",animation:"scale-fade",children:f.jsx(le,{src:Dh,alt:"she"})}),f.jsx(Mh,{textColor:"#8c2531",color:"#fff",variant:"contained",onClick:()=>a("DjK1-NJqRc","您好，我想詢問婚禮相關事宜！"),text:"新娘",icon:f.jsx(Lh,{})})]})]}),f.jsxs("div",{className:"main-photo2",children:[f.jsxs("div",{className:"img-area",children:[f.jsx(D,{duration:"very-slow",rootmargin:"-150px 0px",animation:"scale-fade",children:f.jsx(le,{src:Oh,alt:"he"})}),f.jsx(Mh,{textColor:"#8c2531",color:"#fff",variant:"contained",onClick:()=>a("XCITiZ44pG","您好，我想詢問婚禮相關事宜！"),text:"新郎",icon:f.jsx(Lh,{})})]}),f.jsxs("div",{className:"text-area",children:[f.jsx("div",{className:"said",children:f.jsx(le,{src:sw,alt:"heSaid"})}),f.jsxs(D,{duration:"very-slow",animation:"slide-up",className:"text GongFan",children:['"你的微笑',f.jsx("br",{}),"是我每天的動力",f.jsx("br",{}),"讓我勇敢追求",f.jsx("br",{}),'每一個夢想"']})]})]})]})]}),f.jsxs("div",{className:"page-4",children:[f.jsx("div",{className:"main-photos",children:f.jsx(D,{rootmargin:"-200px 0px",animation:"fade",className:"gradient-image-container",children:f.jsx(le,{src:Ph,alt:"photo4"})})}),f.jsxs("div",{className:"photo-text GongFan",children:[f.jsx(D,{delay:500,animation:"fade",children:"此刻起， 走向屬於我們的嶄新未來"}),f.jsx(D,{delay:900,animation:"fade",children:"無論順境或逆境"}),f.jsx(D,{delay:1300,animation:"fade",children:"歡樂或憂傷"}),f.jsx(D,{delay:1700,animation:"fade",children:"我都願與你一起承擔"}),f.jsx(D,{delay:2100,animation:"fade",children:"一同前行"})]}),f.jsx(D,{delay:2100,className:"gif",children:f.jsx(le,{src:Q0,alt:"run"})})]}),f.jsxs("div",{className:"page-5",children:[f.jsxs("div",{className:"main-photos",children:[f.jsx("div",{className:"rect"}),f.jsxs(D,{duration:"slow",delay:2700,animation:"scale-fade",className:"text GongFan",children:[f.jsx("p",{children:"在這浪漫的天堂"}),f.jsx("p",{children:"我鼓起勇氣"}),f.jsx("p",{children:"向你許下"}),f.jsx("p",{children:"最美的承諾"})]}),f.jsx(D,{duration:"slow",delay:2500,rootmargin:"150px 0px",animation:"scale-fade",className:"main-photo1",children:f.jsx("img",{src:q0,alt:"main-photo1"})}),f.jsx(D,{duration:"slow",rootmargin:"250px 0px",delay:2700,animation:"scale-fade",className:"main-photo2",children:f.jsx("img",{src:$0,alt:"main-photo2"})})]}),f.jsxs(D,{rootmargin:"300px 0px",delay:2700,animation:"fade",className:"photo-text GongFan",children:["She said yes !",f.jsx("br",{})," filling my heart with joy and sealing our love for eternity.",f.jsx("br",{}),f.jsx("br",{}),"在這浪漫的時光，永不分離"]}),f.jsx("div",{className:"gray-line",children:f.jsx("div",{})}),f.jsx("div",{className:"shi GongFan",children:"囍"}),f.jsx("div",{className:"line",children:"/"})]}),f.jsxs("div",{className:"page-6",children:[f.jsx("div",{className:"main-photo",children:f.jsx(le,{src:K0,alt:"main-photo1"})}),f.jsx(D,{rootmargin:"-200px 0px",className:"photo-text1 GongFan",children:"遇見你之後，我開始熱愛生活，期盼餘生"}),f.jsx(D,{rootmargin:"-200px 0px",duration:"very-slow",className:"photo-text2 GongFan",children:"初見傾心，再見傾情，此生與你共度時光。"}),f.jsx(D,{rootmargin:"-200px 0px",className:"love",children:f.jsx(le,{src:tw,alt:"love"})})]}),f.jsxs("div",{className:"page-7",children:[f.jsxs("div",{className:"title-text",children:[f.jsx("div",{className:"title-text1 GongFan",children:"婚禮時間"}),f.jsxs("div",{className:"title-text2 GongFan",children:["2025年1月11日 星期六",f.jsx("br",{}),"午宴 12:00 入場"]})]}),f.jsx("div",{className:"main-photo",children:f.jsxs("div",{className:"img-flex",children:[f.jsx(D,{rootmargin:"-200px 0px",animation:"slide-down",children:f.jsx(le,{src:Y0,alt:"main-photo1"})}),f.jsx(D,{rootmargin:"-180px 0px",delay:1e3,animation:"slide-right",className:"count GongFan",children:f.jsx(uw,{targetDate:t,targetHour:12})}),f.jsx(D,{rootmargin:"-150px 0px",delay:1e3,duration:1,animation:"slide-up",className:"calendar JasonHandwriting3",children:f.jsx(cw,{month:0,year:2025,highlightDate:11})})]})})]}),f.jsxs("div",{className:"page-8",children:[f.jsxs("div",{className:"title-text",children:[f.jsx("div",{className:"title-text1 GongFan",children:"婚禮地點"}),f.jsxs("div",{className:"title-text2 GongFan",children:["台南福爾摩沙酒店",f.jsx("br",{})]})]}),f.jsxs("div",{className:"photos-container",children:[f.jsx(D,{rootmargin:"-100px 0px",animation:"slide-right",children:f.jsx(le,{src:X0,alt:"wedding photo"})}),f.jsx(D,{rootmargin:"-100px 0px",animation:"slide-left",children:f.jsx(le,{src:J0,alt:"wedding photo"})})]}),f.jsxs("div",{className:"photo-text JasonHandwriting3",children:[f.jsx("p",{children:"3F 水景廳"}),f.jsx("p",{children:"鄒陳府喜宴"})]}),f.jsx(D,{rootmargin:"-100px 0px",animation:"scale",className:"location-container",children:f.jsx("div",{className:"map-container",children:f.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6763112590465!2d120.15287911089962!3d22.998927417123348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346dd9b680e0fcdb%3A0xbbd8ca575991685a!2z56aP54i-5pGp5rKZ6YGK6ImH6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1730126785393!5m2!1szh-TW!2stw",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),f.jsxs("div",{className:"park",children:[f.jsxs("div",{className:"park-text",children:[f.jsx("div",{className:"park-text1 JasonHandwriting3",children:"停車資訊"}),f.jsx("div",{className:"park-text2 JasonHandwriting3",children:"酒店提供戶外及地下停車場，入住及用餐之旅客可享免費停車，全日24小時開放。請隨身攜帶貴重物品，酒店不負責停車場內停放之車輛及財物損失。"})]}),f.jsx(D,{rootmargin:"-100px 0px",animation:"scale",className:"photos-container",children:f.jsx(le,{src:ew,alt:"park"})})]})]}),f.jsxs("div",{className:"page-9",children:[f.jsx(D,{rootmargin:"-100px 0px",animation:"slide-left",duration:1,className:"title GongFan",children:"We're married..."}),f.jsx("div",{className:"main-photo",id:"main-photo",children:f.jsx(D,{rootmargin:"-100px 0px",duration:1,animation:"fade",className:"gradient-image-container-soft",children:f.jsx(le,{src:Z0,alt:"photo11"})})}),f.jsxs(D,{delay:2800,className:"design GongFan",children:["網頁建置: 富颜",f.jsx(le,{className:"groom",src:nw,alt:"groom"})]}),f.jsxs("div",{className:"last-text GongFan",children:[f.jsx(D,{delay:500,animation:"fade",children:"這是一場人生中少有的相聚"}),f.jsx(D,{delay:900,animation:"fade",children:"是千里迢迢地奔赴"}),f.jsx(D,{delay:1300,animation:"fade",children:"是不計得失的支持"}),f.jsx(D,{delay:1700,animation:"fade",children:"願所愛皆所得 所想皆所願"}),f.jsx(D,{delay:2100,animation:"fade",children:"感謝您/不遠萬里/向我們獻上祝福"}),f.jsx(D,{delay:2500,className:"thx GongFan",children:"/ 好久不見 婚禮見 /"})]})]})]}),f.jsx(ck,{}),f.jsx(dk,{})]})};function fk(){return f.jsx(hk,{})}sg(document.getElementById("root")).render(f.jsx(B.StrictMode,{children:f.jsx(fk,{})}));
