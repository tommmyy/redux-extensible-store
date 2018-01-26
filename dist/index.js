!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("redux")):"function"==typeof define&&define.amd?define(["exports","redux"],e):e(t["redux-extensible-store"]={},t.redux)}(this,function(t,e){"use strict";const n={INJECT_REDUCERS:"@@injectableStore/INJECT_REDUCERS",INJECT_SAGA:"@@injectableStore/INJECT_SAGA",CANCEL_SAGA:"@@injectableStore/CANCEL_SAGA"};function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function u(t){return function e(n){return 0===arguments.length||r(n)?e:t.apply(this,arguments)}}function a(t){return function e(n,a){switch(arguments.length){case 0:return e;case 1:return r(n)?e:u(function(e){return t(n,e)});default:return r(n)&&r(a)?e:r(n)?u(function(e){return t(e,a)}):r(a)?u(function(e){return t(n,e)}):t(n,a)}}}function c(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,u){return e.apply(this,arguments)};case 5:return function(t,n,r,u,a){return e.apply(this,arguments)};case 6:return function(t,n,r,u,a,c){return e.apply(this,arguments)};case 7:return function(t,n,r,u,a,c,o){return e.apply(this,arguments)};case 8:return function(t,n,r,u,a,c,o,i){return e.apply(this,arguments)};case 9:return function(t,n,r,u,a,c,o,i,s){return e.apply(this,arguments)};case 10:return function(t,n,r,u,a,c,o,i,s,f){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function o(t,e,n){return function(){for(var u=[],a=0,i=t,s=0;s<e.length||a<arguments.length;){var f;s<e.length&&(!r(e[s])||a>=arguments.length)?f=e[s]:(f=arguments[a],a+=1),u[s]=f,r(f)||(i-=1),s+=1}return i<=0?n.apply(this,u):c(i,o(t,u,n))}}var i=a(function(t,e){return 1===t?u(e):c(t,o(t,[],e))});function s(t){return function e(n,c,o){switch(arguments.length){case 0:return e;case 1:return r(n)?e:a(function(e,r){return t(n,e,r)});case 2:return r(n)&&r(c)?e:r(n)?a(function(e,n){return t(e,c,n)}):r(c)?a(function(e,r){return t(n,e,r)}):u(function(e){return t(n,c,e)});default:return r(n)&&r(c)&&r(o)?e:r(n)&&r(c)?a(function(e,n){return t(e,n,o)}):r(n)&&r(o)?a(function(e,n){return t(e,c,n)}):r(c)&&r(o)?a(function(e,r){return t(n,e,r)}):r(n)?u(function(e){return t(e,c,o)}):r(c)?u(function(e){return t(n,e,o)}):r(o)?u(function(e){return t(n,c,e)}):t(n,c,o)}}}var f=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),u=r.pop();if(!f(u)){for(var a=0;a<t.length;){if("function"==typeof u[t[a]])return u[t[a]].apply(u,r);a+=1}if(function(t){return"function"==typeof t["@@transducer/step"]}(u))return e.apply(null,r)(u)}return n.apply(this,arguments)}}var p={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};function y(t,e){for(var n=0,r=e.length,u=Array(r);n<r;)u[n]=t(e[n]),n+=1;return u}function d(t){return"[object String]"===Object.prototype.toString.call(t)}var g=u(function(t){return!!f(t)||!!t&&("object"==typeof t&&(!d(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),h=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();function v(t){return new h(t)}var b=a(function(t,e){return c(t.length,function(){return t.apply(e,arguments)})});function S(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function m(t,e,n,r){return t["@@transducer/result"](n[r](b(t["@@transducer/step"],t),e))}var j="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function A(t,e,n){if("function"==typeof t&&(t=v(t)),g(n))return function(t,e,n){for(var r=0,u=n.length;r<u;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return m(t,e,n,"fantasy-land/reduce");if(null!=n[j])return S(t,e,n[j]());if("function"==typeof n.next)return S(t,e,n);if("function"==typeof n.reduce)return m(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var E=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=p.init,t.prototype["@@transducer/result"]=p.result,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),O=a(function(t,e){return new E(t,e)});function w(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var C=Object.prototype.toString,R=function(){return"[object Arguments]"===C.call(arguments)?function(t){return"[object Arguments]"===C.call(t)}:function(t){return w("callee",t)}},x=!{toString:null}.propertyIsEnumerable("toString"),N=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=function(){return arguments.propertyIsEnumerable("length")}(),k=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},_=u("function"!=typeof Object.keys||I?function(t){if(Object(t)!==t)return[];var e,n,r=[],u=I&&R(t);for(e in t)!w(e,t)||u&&"length"===e||(r[r.length]=e);if(x)for(n=N.length-1;n>=0;)w(e=N[n],t)&&!k(r,e)&&(r[r.length]=e),n-=1;return r}:function(t){return Object(t)!==t?[]:Object.keys(t)}),q=a(l(["fantasy-land/map","map"],O,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return i(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return A(function(n,r){return n[r]=t(e[r]),n},{},_(e));default:return y(t,e)}})),T=u(function(t){for(var e=_(t),n=e.length,r=[],u=0;u<n;)r[u]=t[e[u]],u+=1;return r}),P=u(function(t){return null==t});var U=u(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});function D(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function G(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}var J=a(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e});function M(t,e,n,r){var u=D(t);function a(t,e){return L(t,e,n.slice(),r.slice())}return!G(function(t,e){return!G(a,e,t)},D(e),u)}function L(t,e,n,r){if(J(t,e))return!0;var u,a,c=U(t);if(c!==U(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(a=String(u).match(/^function (\w*)/))?"":a[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!J(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!J(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var o=n.length-1;o>=0;){if(n[o]===t)return r[o]===e;o-=1}switch(c){case"Map":return t.size===e.size&&M(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&M(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var i=_(t);if(i.length!==_(e).length)return!1;var s=n.concat([t]),f=r.concat([e]);for(o=i.length-1;o>=0;){var l=i[o];if(!w(l,e)||!L(e[l],t[l],s,f))return!1;o-=1}return!0}var z=a(function(t,e){return L(t,e,[],[])});var F=function(t){return(t<10?"0":"")+t};Date.prototype.toISOString;function B(t){return"[object Object]"===Object.prototype.toString.call(t)}var V=u(function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():f(t)?[]:d(t)?"":B(t)?{}:R(t)?function(){return arguments}():void 0});function W(t){return t}var X=u(W);var Y=u(function(t){return null!=t&&z(t,V(t))}),H=s(function(t,e,n){return t(e(n))});var K=u(function(t){var e=[];for(var n in t)w(n,t)&&(e[e.length]=[n,t[n]]);return e}),Q="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Z=(String.prototype.trim,process.env.NODE_ENV),$=function(t,e,n,r,u,a,c,o){if("production"!==Z&&void 0===e)throw new Error("invariant requires an error message argument");if(!t){var i;if(void 0===e)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,u,a,c,o],f=0;(i=new Error(e.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}};var tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};const et=t=>P(t)||Y(t)?X:e.combineReducers(tt({},t));t.createExtensibleStore=((t,r={},u=e.compose)=>{const{sagaMiddleware:a}=r,c=[...T(r),(t=>()=>e=>r=>{switch(r.type){case n.INJECT_REDUCERS:t().injectReducers(r.payload);break;case n.INJECT_SAGA:t().injectSaga(r.payload);break;case n.CANCEL_SAGA:t().cancelSaga(r.payload)}return e(r)})(()=>o)],o=e.createStore(X,t,u(e.applyMiddleware(...c)));return o.asyncReducers={},o.injectReducers=(t=>(H(q(([t,e])=>o.asyncReducers[t]=e),K)(t),o.replaceReducer(et(o.asyncReducers)))),o.injectReducer=((t,e)=>o.asyncReducers[t]?o:(o.asyncReducers[t]=e,o.replaceReducer(et(o.asyncReducers)))),o.injectedSagas={},o.injectSaga=(({key:t,saga:e})=>{$(!P(a),"You must provide sagaMiddleware when using extensibleStore helper"),P(o.injectedSagas[t])||o.injectedSagas[t].saga!==e||o.injectedSagas[t].task.cancel(),o.injectedSagas[t]={saga:e,task:a.run(e)}}),o.cancelSaga=(t=>{P(o.injectedSagas[t])||(o.injectedSagas[t].task.cancel(),o.injectedSagas[t]=null)}),o}),t.ACTIONS=n,t.injectReducers=(t=>({type:n.INJECT_REDUCERS,payload:t})),t.injectSaga=(t=>({type:n.INJECT_SAGA,payload:t})),t.cancelSaga=(t=>({type:n.CANCEL_SAGA,payload:t})),Object.defineProperty(t,"__esModule",{value:!0})});
