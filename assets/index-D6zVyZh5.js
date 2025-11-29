(function(){const ht=document.createElement("link").relList;if(ht&&ht.supports&&ht.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const I of j)if(I.type==="childList")for(const W of I.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&d(W)}).observe(document,{childList:!0,subtree:!0});function nt(j){const I={};return j.integrity&&(I.integrity=j.integrity),j.referrerPolicy&&(I.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?I.credentials="include":j.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function d(j){if(j.ep)return;j.ep=!0;const I=nt(j);fetch(j.href,I)}})();var uo={exports:{}},wn={};var md;function Kg(){if(md)return wn;md=1;var z=Symbol.for("react.transitional.element"),ht=Symbol.for("react.fragment");function nt(d,j,I){var W=null;if(I!==void 0&&(W=""+I),j.key!==void 0&&(W=""+j.key),"key"in j){I={};for(var Tt in j)Tt!=="key"&&(I[Tt]=j[Tt])}else I=j;return j=I.ref,{$$typeof:z,type:d,key:W,ref:j!==void 0?j:null,props:I}}return wn.Fragment=ht,wn.jsx=nt,wn.jsxs=nt,wn}var vd;function Jg(){return vd||(vd=1,uo.exports=Kg()),uo.exports}var p=Jg(),oo={exports:{}},U={};var yd;function Ig(){if(yd)return U;yd=1;var z=Symbol.for("react.transitional.element"),ht=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),W=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),it=Symbol.iterator;function Ht(r){return r===null||typeof r!="object"?null:(r=it&&r[it]||r["@@iterator"],typeof r=="function"?r:null)}var Qt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xt=Object.assign,Wt={};function Xt(r,T,D){this.props=r,this.context=T,this.refs=Wt,this.updater=D||Qt}Xt.prototype.isReactComponent={},Xt.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},Xt.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function _t(){}_t.prototype=Xt.prototype;function Mt(r,T,D){this.props=r,this.context=T,this.refs=Wt,this.updater=D||Qt}var Jt=Mt.prototype=new _t;Jt.constructor=Mt,xt(Jt,Xt.prototype),Jt.isPureReactComponent=!0;var ne=Array.isArray;function zt(){}var Y={H:null,A:null,T:null,S:null},Ut=Object.prototype.hasOwnProperty;function ie(r,T,D){var E=D.ref;return{$$typeof:z,type:r,key:T,ref:E!==void 0?E:null,props:D}}function Oe(r,T){return ie(r.type,T,r.props)}function se(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Nt(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(D){return T[D]})}var ye=/\/+/g;function pe(r,T){return typeof r=="object"&&r!==null&&r.key!=null?Nt(""+r.key):T.toString(36)}function Zt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(zt,zt):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function y(r,T,D,E,_){var L=typeof r;(L==="undefined"||L==="boolean")&&(r=null);var F=!1;if(r===null)F=!0;else switch(L){case"bigint":case"string":case"number":F=!0;break;case"object":switch(r.$$typeof){case z:case ht:F=!0;break;case X:return F=r._init,y(F(r._payload),T,D,E,_)}}if(F)return _=_(r),F=E===""?"."+pe(r,0):E,ne(_)?(D="",F!=null&&(D=F.replace(ye,"$&/")+"/"),y(_,T,D,"",function(El){return El})):_!=null&&(se(_)&&(_=Oe(_,D+(_.key==null||r&&r.key===_.key?"":(""+_.key).replace(ye,"$&/")+"/")+F)),T.push(_)),1;F=0;var jt=E===""?".":E+":";if(ne(r))for(var yt=0;yt<r.length;yt++)E=r[yt],L=jt+pe(E,yt),F+=y(E,T,D,L,_);else if(yt=Ht(r),typeof yt=="function")for(r=yt.call(r),yt=0;!(E=r.next()).done;)E=E.value,L=jt+pe(E,yt++),F+=y(E,T,D,L,_);else if(L==="object"){if(typeof r.then=="function")return y(Zt(r),T,D,E,_);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return F}function C(r,T,D){if(r==null)return r;var E=[],_=0;return y(r,E,"","",function(L){return T.call(D,L,_++)}),E}function B(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(D){(r._status===0||r._status===-1)&&(r._status=1,r._result=D)},function(D){(r._status===0||r._status===-1)&&(r._status=2,r._result=D)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var lt=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},st={map:C,forEach:function(r,T,D){C(r,function(){T.apply(this,arguments)},D)},count:function(r){var T=0;return C(r,function(){T++}),T},toArray:function(r){return C(r,function(T){return T})||[]},only:function(r){if(!se(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return U.Activity=O,U.Children=st,U.Component=Xt,U.Fragment=nt,U.Profiler=j,U.PureComponent=Mt,U.StrictMode=d,U.Suspense=N,U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,U.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Y.H.useMemoCache(r)}},U.cache=function(r){return function(){return r.apply(null,arguments)}},U.cacheSignal=function(){return null},U.cloneElement=function(r,T,D){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var E=xt({},r.props),_=r.key;if(T!=null)for(L in T.key!==void 0&&(_=""+T.key),T)!Ut.call(T,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&T.ref===void 0||(E[L]=T[L]);var L=arguments.length-2;if(L===1)E.children=D;else if(1<L){for(var F=Array(L),jt=0;jt<L;jt++)F[jt]=arguments[jt+2];E.children=F}return ie(r.type,_,E)},U.createContext=function(r){return r={$$typeof:W,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:I,_context:r},r},U.createElement=function(r,T,D){var E,_={},L=null;if(T!=null)for(E in T.key!==void 0&&(L=""+T.key),T)Ut.call(T,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(_[E]=T[E]);var F=arguments.length-2;if(F===1)_.children=D;else if(1<F){for(var jt=Array(F),yt=0;yt<F;yt++)jt[yt]=arguments[yt+2];_.children=jt}if(r&&r.defaultProps)for(E in F=r.defaultProps,F)_[E]===void 0&&(_[E]=F[E]);return ie(r,L,_)},U.createRef=function(){return{current:null}},U.forwardRef=function(r){return{$$typeof:Tt,render:r}},U.isValidElement=se,U.lazy=function(r){return{$$typeof:X,_payload:{_status:-1,_result:r},_init:B}},U.memo=function(r,T){return{$$typeof:x,type:r,compare:T===void 0?null:T}},U.startTransition=function(r){var T=Y.T,D={};Y.T=D;try{var E=r(),_=Y.S;_!==null&&_(D,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(zt,lt)}catch(L){lt(L)}finally{T!==null&&D.types!==null&&(T.types=D.types),Y.T=T}},U.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},U.use=function(r){return Y.H.use(r)},U.useActionState=function(r,T,D){return Y.H.useActionState(r,T,D)},U.useCallback=function(r,T){return Y.H.useCallback(r,T)},U.useContext=function(r){return Y.H.useContext(r)},U.useDebugValue=function(){},U.useDeferredValue=function(r,T){return Y.H.useDeferredValue(r,T)},U.useEffect=function(r,T){return Y.H.useEffect(r,T)},U.useEffectEvent=function(r){return Y.H.useEffectEvent(r)},U.useId=function(){return Y.H.useId()},U.useImperativeHandle=function(r,T,D){return Y.H.useImperativeHandle(r,T,D)},U.useInsertionEffect=function(r,T){return Y.H.useInsertionEffect(r,T)},U.useLayoutEffect=function(r,T){return Y.H.useLayoutEffect(r,T)},U.useMemo=function(r,T){return Y.H.useMemo(r,T)},U.useOptimistic=function(r,T){return Y.H.useOptimistic(r,T)},U.useReducer=function(r,T,D){return Y.H.useReducer(r,T,D)},U.useRef=function(r){return Y.H.useRef(r)},U.useState=function(r){return Y.H.useState(r)},U.useSyncExternalStore=function(r,T,D){return Y.H.useSyncExternalStore(r,T,D)},U.useTransition=function(){return Y.H.useTransition()},U.version="19.2.0",U}var pd;function go(){return pd||(pd=1,oo.exports=Ig()),oo.exports}var Bt=go(),co={exports:{}},En={},ro={exports:{}},fo={};var bd;function Wg(){return bd||(bd=1,(function(z){function ht(y,C){var B=y.length;y.push(C);t:for(;0<B;){var lt=B-1>>>1,st=y[lt];if(0<j(st,C))y[lt]=C,y[B]=st,B=lt;else break t}}function nt(y){return y.length===0?null:y[0]}function d(y){if(y.length===0)return null;var C=y[0],B=y.pop();if(B!==C){y[0]=B;t:for(var lt=0,st=y.length,r=st>>>1;lt<r;){var T=2*(lt+1)-1,D=y[T],E=T+1,_=y[E];if(0>j(D,B))E<st&&0>j(_,D)?(y[lt]=_,y[E]=B,lt=E):(y[lt]=D,y[T]=B,lt=T);else if(E<st&&0>j(_,B))y[lt]=_,y[E]=B,lt=E;else break t}}return C}function j(y,C){var B=y.sortIndex-C.sortIndex;return B!==0?B:y.id-C.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var I=performance;z.unstable_now=function(){return I.now()}}else{var W=Date,Tt=W.now();z.unstable_now=function(){return W.now()-Tt}}var N=[],x=[],X=1,O=null,it=3,Ht=!1,Qt=!1,xt=!1,Wt=!1,Xt=typeof setTimeout=="function"?setTimeout:null,_t=typeof clearTimeout=="function"?clearTimeout:null,Mt=typeof setImmediate<"u"?setImmediate:null;function Jt(y){for(var C=nt(x);C!==null;){if(C.callback===null)d(x);else if(C.startTime<=y)d(x),C.sortIndex=C.expirationTime,ht(N,C);else break;C=nt(x)}}function ne(y){if(xt=!1,Jt(y),!Qt)if(nt(N)!==null)Qt=!0,zt||(zt=!0,Nt());else{var C=nt(x);C!==null&&Zt(ne,C.startTime-y)}}var zt=!1,Y=-1,Ut=5,ie=-1;function Oe(){return Wt?!0:!(z.unstable_now()-ie<Ut)}function se(){if(Wt=!1,zt){var y=z.unstable_now();ie=y;var C=!0;try{t:{Qt=!1,xt&&(xt=!1,_t(Y),Y=-1),Ht=!0;var B=it;try{e:{for(Jt(y),O=nt(N);O!==null&&!(O.expirationTime>y&&Oe());){var lt=O.callback;if(typeof lt=="function"){O.callback=null,it=O.priorityLevel;var st=lt(O.expirationTime<=y);if(y=z.unstable_now(),typeof st=="function"){O.callback=st,Jt(y),C=!0;break e}O===nt(N)&&d(N),Jt(y)}else d(N);O=nt(N)}if(O!==null)C=!0;else{var r=nt(x);r!==null&&Zt(ne,r.startTime-y),C=!1}}break t}finally{O=null,it=B,Ht=!1}C=void 0}}finally{C?Nt():zt=!1}}}var Nt;if(typeof Mt=="function")Nt=function(){Mt(se)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,pe=ye.port2;ye.port1.onmessage=se,Nt=function(){pe.postMessage(null)}}else Nt=function(){Xt(se,0)};function Zt(y,C){Y=Xt(function(){y(z.unstable_now())},C)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(y){y.callback=null},z.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ut=0<y?Math.floor(1e3/y):5},z.unstable_getCurrentPriorityLevel=function(){return it},z.unstable_next=function(y){switch(it){case 1:case 2:case 3:var C=3;break;default:C=it}var B=it;it=C;try{return y()}finally{it=B}},z.unstable_requestPaint=function(){Wt=!0},z.unstable_runWithPriority=function(y,C){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var B=it;it=y;try{return C()}finally{it=B}},z.unstable_scheduleCallback=function(y,C,B){var lt=z.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?lt+B:lt):B=lt,y){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=B+st,y={id:X++,callback:C,priorityLevel:y,startTime:B,expirationTime:st,sortIndex:-1},B>lt?(y.sortIndex=B,ht(x,y),nt(N)===null&&y===nt(x)&&(xt?(_t(Y),Y=-1):xt=!0,Zt(ne,B-lt))):(y.sortIndex=st,ht(N,y),Qt||Ht||(Qt=!0,zt||(zt=!0,Nt()))),y},z.unstable_shouldYield=Oe,z.unstable_wrapCallback=function(y){var C=it;return function(){var B=it;it=C;try{return y.apply(this,arguments)}finally{it=B}}}})(fo)),fo}var Sd;function Fg(){return Sd||(Sd=1,ro.exports=Wg()),ro.exports}var ho={exports:{}},Kt={};var Ad;function Pg(){if(Ad)return Kt;Ad=1;var z=go();function ht(N){var x="https://react.dev/errors/"+N;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var X=2;X<arguments.length;X++)x+="&args[]="+encodeURIComponent(arguments[X])}return"Minified React error #"+N+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function nt(){}var d={d:{f:nt,r:function(){throw Error(ht(522))},D:nt,C:nt,L:nt,m:nt,X:nt,S:nt,M:nt},p:0,findDOMNode:null},j=Symbol.for("react.portal");function I(N,x,X){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:O==null?null:""+O,children:N,containerInfo:x,implementation:X}}var W=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tt(N,x){if(N==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Kt.createPortal=function(N,x){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(ht(299));return I(N,x,null,X)},Kt.flushSync=function(N){var x=W.T,X=d.p;try{if(W.T=null,d.p=2,N)return N()}finally{W.T=x,d.p=X,d.d.f()}},Kt.preconnect=function(N,x){typeof N=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(N,x))},Kt.prefetchDNS=function(N){typeof N=="string"&&d.d.D(N)},Kt.preinit=function(N,x){if(typeof N=="string"&&x&&typeof x.as=="string"){var X=x.as,O=Tt(X,x.crossOrigin),it=typeof x.integrity=="string"?x.integrity:void 0,Ht=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;X==="style"?d.d.S(N,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:O,integrity:it,fetchPriority:Ht}):X==="script"&&d.d.X(N,{crossOrigin:O,integrity:it,fetchPriority:Ht,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Kt.preinitModule=function(N,x){if(typeof N=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var X=Tt(x.as,x.crossOrigin);d.d.M(N,{crossOrigin:X,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(N)},Kt.preload=function(N,x){if(typeof N=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var X=x.as,O=Tt(X,x.crossOrigin);d.d.L(N,X,{crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Kt.preloadModule=function(N,x){if(typeof N=="string")if(x){var X=Tt(x.as,x.crossOrigin);d.d.m(N,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:X,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(N)},Kt.requestFormReset=function(N){d.d.r(N)},Kt.unstable_batchedUpdates=function(N,x){return N(x)},Kt.useFormState=function(N,x,X){return W.H.useFormState(N,x,X)},Kt.useFormStatus=function(){return W.H.useHostTransitionStatus()},Kt.version="19.2.0",Kt}var Td;function $g(){if(Td)return ho.exports;Td=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(ht){console.error(ht)}}return z(),ho.exports=Pg(),ho.exports}var xd;function tm(){if(xd)return En;xd=1;var z=Fg(),ht=go(),nt=$g();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function I(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function W(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N(t){if(I(t)!==t)throw Error(d(188))}function x(t){var e=t.alternate;if(!e){if(e=I(t),e===null)throw Error(d(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return N(n),t;if(i===a)return N(n),e;i=i.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=i;else{for(var s=!1,u=n.child;u;){if(u===l){s=!0,l=n,a=i;break}if(u===a){s=!0,a=n,l=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===l){s=!0,l=i,a=n;break}if(u===a){s=!0,a=i,l=n;break}u=u.sibling}if(!s)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?t:e}function X(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=X(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,it=Symbol.for("react.element"),Ht=Symbol.for("react.transitional.element"),Qt=Symbol.for("react.portal"),xt=Symbol.for("react.fragment"),Wt=Symbol.for("react.strict_mode"),Xt=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),Jt=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Oe=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function Nt(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ye?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xt:return"Fragment";case Xt:return"Profiler";case Wt:return"StrictMode";case ne:return"Suspense";case zt:return"SuspenseList";case ie:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Qt:return"Portal";case Mt:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case Jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return e=t.displayName||null,e!==null?e:pe(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return pe(t(e))}catch{}}return null}var Zt=Array.isArray,y=ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},lt=[],st=-1;function r(t){return{current:t}}function T(t){0>st||(t.current=lt[st],lt[st]=null,st--)}function D(t,e){st++,lt[st]=t.current,t.current=e}var E=r(null),_=r(null),L=r(null),F=r(null);function jt(t,e){switch(D(L,e),D(_,t),D(E,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?jf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=jf(e),t=Gf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(E),D(E,t)}function yt(){T(E),T(_),T(L)}function El(t){t.memoizedState!==null&&D(F,t);var e=E.current,l=Gf(e,t.type);e!==l&&(D(_,t),D(E,l))}function Kl(t){_.current===t&&(T(E),T(_)),F.current===t&&(T(F),xn._currentValue=B)}var Ha,qe;function M(t){if(Ha===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ha=e&&e[1]||"",qe=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ha+t+qe}var P=!1;function at(t,e){if(!t||P)return"";P=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var m=v}Reflect.construct(t,[],A)}else{try{A.call()}catch(v){m=v}t.call(A.prototype)}}else{try{throw Error()}catch(v){m=v}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var o=s.split(`
`),g=u.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===g.length)for(a=o.length-1,n=g.length-1;1<=a&&0<=n&&o[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==g[n]){var b=`
`+o[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{P=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?M(l):""}function be(t,e){switch(t.tag){case 26:case 27:case 5:return M(t.type);case 16:return M("Lazy");case 13:return t.child!==e&&e!==null?M("Suspense Fallback"):M("Suspense");case 19:return M("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return M("Activity");default:return""}}function Oa(t){try{var e="",l=null;do e+=be(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=z.unstable_scheduleCallback,Ji=z.unstable_cancelCallback,Cd=z.unstable_shouldYield,Dd=z.unstable_requestPaint,ue=z.unstable_now,wd=z.unstable_getCurrentPriorityLevel,mo=z.unstable_ImmediatePriority,vo=z.unstable_UserBlockingPriority,zn=z.unstable_NormalPriority,Ed=z.unstable_LowPriority,yo=z.unstable_IdlePriority,zd=z.log,Nd=z.unstable_setDisableYieldValue,qa=null,oe=null;function al(t){if(typeof zd=="function"&&Nd(t),oe&&typeof oe.setStrictMode=="function")try{oe.setStrictMode(qa,t)}catch{}}var ce=Math.clz32?Math.clz32:Od,Rd=Math.log,Hd=Math.LN2;function Od(t){return t>>>=0,t===0?32:31-(Rd(t)/Hd|0)|0}var Nn=256,Rn=262144,Hn=4194304;function zl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function On(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?n=zl(a):(s&=u,s!==0?n=zl(s):l||(l=u&~t,l!==0&&(n=zl(l))))):(u=a&~i,u!==0?n=zl(u):s!==0?n=zl(s):l||(l=a&~t,l!==0&&(n=zl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Ba(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var t=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),t}function Ii(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function _a(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bd(t,e,l,a,n,i){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var u=t.entanglements,o=t.expirationTimes,g=t.hiddenUpdates;for(l=s&~l;0<l;){var b=31-ce(l),A=1<<b;u[b]=0,o[b]=-1;var m=g[b];if(m!==null)for(g[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}l&=~A}a!==0&&bo(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function bo(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ce(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function So(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ce(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Ao(t,e){var l=e&-e;return l=(l&42)!==0?1:Wi(l),(l&(t.suspendedLanes|e))!==0?0:l}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function To(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:od(t.type))}function xo(t,e){var l=C.p;try{return C.p=t,e()}finally{C.p=l}}var nl=Math.random().toString(36).slice(2),Gt="__reactFiber$"+nl,Ft="__reactProps$"+nl,Jl="__reactContainer$"+nl,Pi="__reactEvents$"+nl,_d="__reactListeners$"+nl,Ud="__reactHandles$"+nl,Mo="__reactResources$"+nl,Ua="__reactMarker$"+nl;function $i(t){delete t[Gt],delete t[Ft],delete t[Pi],delete t[_d],delete t[Ud]}function Il(t){var e=t[Gt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Jl]||l[Gt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Zf(t);t!==null;){if(l=t[Gt])return l;t=Zf(t)}return e}t=l,l=t.parentNode}return null}function Wl(t){if(t=t[Gt]||t[Jl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ja(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Fl(t){var e=t[Mo];return e||(e=t[Mo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ot(t){t[Ua]=!0}var Co=new Set,Do={};function Nl(t,e){Pl(t,e),Pl(t+"Capture",e)}function Pl(t,e){for(Do[t]=e,t=0;t<e.length;t++)Co.add(e[t])}var jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wo={},Eo={};function Gd(t){return Zi.call(Eo,t)?!0:Zi.call(wo,t)?!1:jd.test(t)?Eo[t]=!0:(wo[t]=!0,!1)}function qn(t,e,l){if(Gd(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Bn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ge(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kd(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){if(!t._valueTracker){var e=zo(t)?"checked":"value";t._valueTracker=kd(t,e,""+t[e])}}function No(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=zo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ld=/[\n"\\]/g;function Ae(t){return t.replace(Ld,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function es(t,e,l,a,n,i,s,u){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ls(t,s,Se(e)):l!=null?ls(t,s,Se(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+Se(u):t.removeAttribute("name")}function Ro(t,e,l,a,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){ts(t);return}l=l!=null?""+Se(l):"",e=e!=null?""+Se(e):l,u||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=u?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ts(t)}function ls(t,e,l){e==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function $l(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Se(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Ho(t,e,l){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Se(l):""}function Oo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(d(92));if(Zt(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Se(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),ts(t)}function ta(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Yd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qo(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Yd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Bo(t,e,l){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&qo(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&qo(t,i,e[i])}function as(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(t){return Qd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ke(){}var ns=null;function is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ea=null,la=null;function _o(t){var e=Wl(t);if(e&&(t=e.stateNode)){var l=t[Ft]||null;t:switch(t=e.stateNode,e.type){case"input":if(es(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ae(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Ft]||null;if(!n)throw Error(d(90));es(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&No(a)}break t;case"textarea":Ho(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&$l(t,!!l.multiple,e,!1)}}}var ss=!1;function Uo(t,e,l){if(ss)return t(e,l);ss=!0;try{var a=t(e);return a}finally{if(ss=!1,(ea!==null||la!==null)&&(Mi(),ea&&(e=ea,t=la,la=ea=null,_o(e),t)))for(e=0;e<t.length;e++)_o(t[e])}}function Ga(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Ft]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(d(231,e,typeof l));return l}var Le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),us=!1;if(Le)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){us=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{us=!1}var il=null,os=null,jn=null;function jo(){if(jn)return jn;var t,e=os,l=e.length,a,n="value"in il?il.value:il.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===n[i-a];a++);return jn=n.slice(t,1<a?1-a:void 0)}function Gn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kn(){return!0}function Go(){return!1}function Pt(t){function e(l,a,n,i,s){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(l=t[u],this[u]=l?l(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kn:Go,this.isPropagationStopped=Go,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),e}var Rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Pt(Rl),La=O({},Rl,{view:0,detail:0}),Xd=Pt(La),cs,rs,Ya,Yn=O({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ya&&(Ya&&t.type==="mousemove"?(cs=t.screenX-Ya.screenX,rs=t.screenY-Ya.screenY):rs=cs=0,Ya=t),cs)},movementY:function(t){return"movementY"in t?t.movementY:rs}}),ko=Pt(Yn),Zd=O({},Yn,{dataTransfer:0}),Kd=Pt(Zd),Jd=O({},La,{relatedTarget:0}),fs=Pt(Jd),Id=O({},Rl,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=Pt(Id),Fd=O({},Rl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pd=Pt(Fd),$d=O({},Rl,{data:0}),Lo=Pt($d),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lh[t])?!!e[t]:!1}function ds(){return ah}var nh=O({},La,{key:function(t){if(t.key){var e=th[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(t){return t.type==="keypress"?Gn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ih=Pt(nh),sh=O({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=Pt(sh),uh=O({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),oh=Pt(uh),ch=O({},Rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Pt(ch),fh=O({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=Pt(fh),hh=O({},Rl,{newState:0,oldState:0}),gh=Pt(hh),mh=[9,13,27,32],hs=Le&&"CompositionEvent"in window,Va=null;Le&&"documentMode"in document&&(Va=document.documentMode);var vh=Le&&"TextEvent"in window&&!Va,Vo=Le&&(!hs||Va&&8<Va&&11>=Va),Qo=" ",Xo=!1;function Zo(t,e){switch(t){case"keyup":return mh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ko(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var aa=!1;function yh(t,e){switch(t){case"compositionend":return Ko(e);case"keypress":return e.which!==32?null:(Xo=!0,Qo);case"textInput":return t=e.data,t===Qo&&Xo?null:t;default:return null}}function ph(t,e){if(aa)return t==="compositionend"||!hs&&Zo(t,e)?(t=jo(),jn=os=il=null,aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vo&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bh[t.type]:e==="textarea"}function Io(t,e,l,a){ea?la?la.push(a):la=[a]:ea=a,e=Ri(e,"onChange"),0<e.length&&(l=new Ln("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Qa=null,Xa=null;function Sh(t){Hf(t,0)}function Vn(t){var e=ja(t);if(No(e))return t}function Wo(t,e){if(t==="change")return e}var Fo=!1;if(Le){var gs;if(Le){var ms="oninput"in document;if(!ms){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),ms=typeof Po.oninput=="function"}gs=ms}else gs=!1;Fo=gs&&(!document.documentMode||9<document.documentMode)}function $o(){Qa&&(Qa.detachEvent("onpropertychange",tc),Xa=Qa=null)}function tc(t){if(t.propertyName==="value"&&Vn(Xa)){var e=[];Io(e,Xa,t,is(t)),Uo(Sh,e)}}function Ah(t,e,l){t==="focusin"?($o(),Qa=e,Xa=l,Qa.attachEvent("onpropertychange",tc)):t==="focusout"&&$o()}function Th(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vn(Xa)}function xh(t,e){if(t==="click")return Vn(e)}function Mh(t,e){if(t==="input"||t==="change")return Vn(e)}function Ch(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:Ch;function Za(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zi.call(e,n)||!re(t[n],e[n]))return!1}return!0}function ec(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lc(t,e){var l=ec(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ec(l)}}function ac(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ac(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_n(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=_n(t.document)}return e}function vs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Dh=Le&&"documentMode"in document&&11>=document.documentMode,na=null,ys=null,Ka=null,ps=!1;function ic(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ps||na==null||na!==_n(a)||(a=na,"selectionStart"in a&&vs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ka&&Za(Ka,a)||(Ka=a,a=Ri(ys,"onSelect"),0<a.length&&(e=new Ln("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=na)))}function Hl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ia={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionrun:Hl("Transition","TransitionRun"),transitionstart:Hl("Transition","TransitionStart"),transitioncancel:Hl("Transition","TransitionCancel"),transitionend:Hl("Transition","TransitionEnd")},bs={},sc={};Le&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Ol(t){if(bs[t])return bs[t];if(!ia[t])return t;var e=ia[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in sc)return bs[t]=e[l];return t}var uc=Ol("animationend"),oc=Ol("animationiteration"),cc=Ol("animationstart"),wh=Ol("transitionrun"),Eh=Ol("transitionstart"),zh=Ol("transitioncancel"),rc=Ol("transitionend"),fc=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function Ne(t,e){fc.set(t,e),Nl(e,[t])}var Qn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Te=[],sa=0,As=0;function Xn(){for(var t=sa,e=As=sa=0;e<t;){var l=Te[e];Te[e++]=null;var a=Te[e];Te[e++]=null;var n=Te[e];Te[e++]=null;var i=Te[e];if(Te[e++]=null,a!==null&&n!==null){var s=a.pending;s===null?n.next=n:(n.next=s.next,s.next=n),a.pending=n}i!==0&&dc(l,n,i)}}function Zn(t,e,l,a){Te[sa++]=t,Te[sa++]=e,Te[sa++]=l,Te[sa++]=a,As|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ts(t,e,l,a){return Zn(t,e,l,a),Kn(t)}function ql(t,e){return Zn(t,null,null,e),Kn(t)}function dc(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ce(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Kn(t){if(50<vn)throw vn=0,Ru=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ua={};function Nh(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,l,a){return new Nh(t,e,l,a)}function xs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ye(t,e){var l=t.alternate;return l===null?(l=fe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function hc(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Jn(t,e,l,a,n,i){var s=0;if(a=t,typeof t=="function")xs(t)&&(s=1);else if(typeof t=="string")s=Bg(t,l,E.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ie:return t=fe(31,l,e,n),t.elementType=ie,t.lanes=i,t;case xt:return Bl(l.children,n,i,e);case Wt:s=8,n|=24;break;case Xt:return t=fe(12,l,e,n|2),t.elementType=Xt,t.lanes=i,t;case ne:return t=fe(13,l,e,n),t.elementType=ne,t.lanes=i,t;case zt:return t=fe(19,l,e,n),t.elementType=zt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mt:s=10;break t;case _t:s=9;break t;case Jt:s=11;break t;case Y:s=14;break t;case Ut:s=16,a=null;break t}s=29,l=Error(d(130,t===null?"null":typeof t,"")),a=null}return e=fe(s,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Bl(t,e,l,a){return t=fe(7,t,a,e),t.lanes=l,t}function Ms(t,e,l){return t=fe(6,t,null,e),t.lanes=l,t}function gc(t){var e=fe(18,null,null,0);return e.stateNode=t,e}function Cs(t,e,l){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var mc=new WeakMap;function xe(t,e){if(typeof t=="object"&&t!==null){var l=mc.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Oa(e)},mc.set(t,e),e)}return{value:t,source:e,stack:Oa(e)}}var oa=[],ca=0,In=null,Ja=0,Me=[],Ce=0,sl=null,Be=1,_e="";function Ve(t,e){oa[ca++]=Ja,oa[ca++]=In,In=t,Ja=e}function vc(t,e,l){Me[Ce++]=Be,Me[Ce++]=_e,Me[Ce++]=sl,sl=t;var a=Be;t=_e;var n=32-ce(a)-1;a&=~(1<<n),l+=1;var i=32-ce(e)+n;if(30<i){var s=n-n%5;i=(a&(1<<s)-1).toString(32),a>>=s,n-=s,Be=1<<32-ce(e)+n|l<<n|a,_e=i+t}else Be=1<<i|l<<n|a,_e=t}function Ds(t){t.return!==null&&(Ve(t,1),vc(t,1,0))}function ws(t){for(;t===In;)In=oa[--ca],oa[ca]=null,Ja=oa[--ca],oa[ca]=null;for(;t===sl;)sl=Me[--Ce],Me[Ce]=null,_e=Me[--Ce],Me[Ce]=null,Be=Me[--Ce],Me[Ce]=null}function yc(t,e){Me[Ce++]=Be,Me[Ce++]=_e,Me[Ce++]=sl,Be=e.id,_e=e.overflow,sl=t}var kt=null,gt=null,J=!1,ul=null,De=!1,Es=Error(d(519));function ol(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(xe(e,t)),Es}function pc(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Gt]=t,e[Ft]=a,l){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(l=0;l<pn.length;l++)Q(pn[l],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Q("invalid",e),Ro(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Q("invalid",e);break;case"textarea":Q("invalid",e),Oo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||_f(e.textContent,l)?(a.popover!=null&&(Q("beforetoggle",e),Q("toggle",e)),a.onScroll!=null&&Q("scroll",e),a.onScrollEnd!=null&&Q("scrollend",e),a.onClick!=null&&(e.onclick=ke),e=!0):e=!1,e||ol(t,!0)}function bc(t){for(kt=t.return;kt;)switch(kt.tag){case 5:case 31:case 13:De=!1;return;case 27:case 3:De=!0;return;default:kt=kt.return}}function ra(t){if(t!==kt)return!1;if(!J)return bc(t),J=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Zu(t.type,t.memoizedProps)),l=!l),l&&gt&&ol(t),bc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));gt=Xf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));gt=Xf(t)}else e===27?(e=gt,Tl(t.type)?(t=Fu,Fu=null,gt=t):gt=e):gt=kt?Ee(t.stateNode.nextSibling):null;return!0}function _l(){gt=kt=null,J=!1}function zs(){var t=ul;return t!==null&&(le===null?le=t:le.push.apply(le,t),ul=null),t}function Ia(t){ul===null?ul=[t]:ul.push(t)}var Ns=r(null),Ul=null,Qe=null;function cl(t,e,l){D(Ns,e._currentValue),e._currentValue=l}function Xe(t){t._currentValue=Ns.current,T(Ns)}function Rs(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Hs(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;t:for(;i!==null;){var u=i;i=n;for(var o=0;o<e.length;o++)if(u.context===e[o]){i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Rs(i.return,l,t),a||(s=null);break t}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(d(341));s.lanes|=l,i=s.alternate,i!==null&&(i.lanes|=l),Rs(s,l,t),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function fa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=n.type;re(n.pendingProps.value,s.value)||(t!==null?t.push(u):t=[u])}}else if(n===F.current){if(s=n.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(xn):t=[xn])}n=n.return}t!==null&&Hs(e,t,l,a),e.flags|=262144}function Wn(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jl(t){Ul=t,Qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return Sc(Ul,t)}function Fn(t,e){return Ul===null&&jl(t),Sc(t,e)}function Sc(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Qe===null){if(t===null)throw Error(d(308));Qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Qe=Qe.next=e;return l}var Rh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Hh=z.unstable_scheduleCallback,Oh=z.unstable_NormalPriority,Ct={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Os(){return{controller:new Rh,data:new Map,refCount:0}}function Wa(t){t.refCount--,t.refCount===0&&Hh(Oh,function(){t.controller.abort()})}var Fa=null,qs=0,da=0,ha=null;function qh(t,e){if(Fa===null){var l=Fa=[];qs=0,da=Uu(),ha={status:"pending",value:void 0,then:function(a){l.push(a)}}}return qs++,e.then(Ac,Ac),e}function Ac(){if(--qs===0&&Fa!==null){ha!==null&&(ha.status="fulfilled");var t=Fa;Fa=null,da=0,ha=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bh(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Tc=y.S;y.S=function(t,e){sf=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&qh(t,e),Tc!==null&&Tc(t,e)};var Gl=r(null);function Bs(){var t=Gl.current;return t!==null?t:dt.pooledCache}function Pn(t,e){e===null?D(Gl,Gl.current):D(Gl,e.pool)}function xc(){var t=Bs();return t===null?null:{parent:Ct._currentValue,pool:t}}var ga=Error(d(460)),_s=Error(d(474)),$n=Error(d(542)),ti={then:function(){}};function Mc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cc(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(ke,ke),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wc(t),t;default:if(typeof e.status=="string")e.then(ke,ke);else{if(t=dt,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wc(t),t}throw Ll=e,ga}}function kl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ll=l,ga):l}}var Ll=null;function Dc(){if(Ll===null)throw Error(d(459));var t=Ll;return Ll=null,t}function wc(t){if(t===ga||t===$n)throw Error(d(483))}var ma=null,Pa=0;function ei(t){var e=Pa;return Pa+=1,ma===null&&(ma=[]),Cc(ma,t,e)}function $a(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function li(t,e){throw e.$$typeof===it?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ec(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function l(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function a(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=Ye(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=67108866,c):h):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function u(f,c,h,S){return c===null||c.tag!==6?(c=Ms(h,f.mode,S),c.return=f,c):(c=n(c,h),c.return=f,c)}function o(f,c,h,S){var H=h.type;return H===xt?b(f,c,h.props.children,S,h.key):c!==null&&(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ut&&kl(H)===c.type)?(c=n(c,h.props),$a(c,h),c.return=f,c):(c=Jn(h.type,h.key,h.props,null,f.mode,S),$a(c,h),c.return=f,c)}function g(f,c,h,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Cs(h,f.mode,S),c.return=f,c):(c=n(c,h.children||[]),c.return=f,c)}function b(f,c,h,S,H){return c===null||c.tag!==7?(c=Bl(h,f.mode,S,H),c.return=f,c):(c=n(c,h),c.return=f,c)}function A(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ms(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ht:return h=Jn(c.type,c.key,c.props,null,f.mode,h),$a(h,c),h.return=f,h;case Qt:return c=Cs(c,f.mode,h),c.return=f,c;case Ut:return c=kl(c),A(f,c,h)}if(Zt(c)||Nt(c))return c=Bl(c,f.mode,h,null),c.return=f,c;if(typeof c.then=="function")return A(f,ei(c),h);if(c.$$typeof===Mt)return A(f,Fn(f,c),h);li(f,c)}return null}function m(f,c,h,S){var H=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:u(f,c,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ht:return h.key===H?o(f,c,h,S):null;case Qt:return h.key===H?g(f,c,h,S):null;case Ut:return h=kl(h),m(f,c,h,S)}if(Zt(h)||Nt(h))return H!==null?null:b(f,c,h,S,null);if(typeof h.then=="function")return m(f,c,ei(h),S);if(h.$$typeof===Mt)return m(f,c,Fn(f,h),S);li(f,h)}return null}function v(f,c,h,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(h)||null,u(c,f,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ht:return f=f.get(S.key===null?h:S.key)||null,o(c,f,S,H);case Qt:return f=f.get(S.key===null?h:S.key)||null,g(c,f,S,H);case Ut:return S=kl(S),v(f,c,h,S,H)}if(Zt(S)||Nt(S))return f=f.get(h)||null,b(c,f,S,H,null);if(typeof S.then=="function")return v(f,c,h,ei(S),H);if(S.$$typeof===Mt)return v(f,c,h,Fn(c,S),H);li(c,S)}return null}function w(f,c,h,S){for(var H=null,$=null,R=c,k=c=0,K=null;R!==null&&k<h.length;k++){R.index>k?(K=R,R=null):K=R.sibling;var tt=m(f,R,h[k],S);if(tt===null){R===null&&(R=K);break}t&&R&&tt.alternate===null&&e(f,R),c=i(tt,c,k),$===null?H=tt:$.sibling=tt,$=tt,R=K}if(k===h.length)return l(f,R),J&&Ve(f,k),H;if(R===null){for(;k<h.length;k++)R=A(f,h[k],S),R!==null&&(c=i(R,c,k),$===null?H=R:$.sibling=R,$=R);return J&&Ve(f,k),H}for(R=a(R);k<h.length;k++)K=v(R,f,k,h[k],S),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?k:K.key),c=i(K,c,k),$===null?H=K:$.sibling=K,$=K);return t&&R.forEach(function(wl){return e(f,wl)}),J&&Ve(f,k),H}function q(f,c,h,S){if(h==null)throw Error(d(151));for(var H=null,$=null,R=c,k=c=0,K=null,tt=h.next();R!==null&&!tt.done;k++,tt=h.next()){R.index>k?(K=R,R=null):K=R.sibling;var wl=m(f,R,tt.value,S);if(wl===null){R===null&&(R=K);break}t&&R&&wl.alternate===null&&e(f,R),c=i(wl,c,k),$===null?H=wl:$.sibling=wl,$=wl,R=K}if(tt.done)return l(f,R),J&&Ve(f,k),H;if(R===null){for(;!tt.done;k++,tt=h.next())tt=A(f,tt.value,S),tt!==null&&(c=i(tt,c,k),$===null?H=tt:$.sibling=tt,$=tt);return J&&Ve(f,k),H}for(R=a(R);!tt.done;k++,tt=h.next())tt=v(R,f,k,tt.value,S),tt!==null&&(t&&tt.alternate!==null&&R.delete(tt.key===null?k:tt.key),c=i(tt,c,k),$===null?H=tt:$.sibling=tt,$=tt);return t&&R.forEach(function(Zg){return e(f,Zg)}),J&&Ve(f,k),H}function ft(f,c,h,S){if(typeof h=="object"&&h!==null&&h.type===xt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ht:t:{for(var H=h.key;c!==null;){if(c.key===H){if(H=h.type,H===xt){if(c.tag===7){l(f,c.sibling),S=n(c,h.props.children),S.return=f,f=S;break t}}else if(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ut&&kl(H)===c.type){l(f,c.sibling),S=n(c,h.props),$a(S,h),S.return=f,f=S;break t}l(f,c);break}else e(f,c);c=c.sibling}h.type===xt?(S=Bl(h.props.children,f.mode,S,h.key),S.return=f,f=S):(S=Jn(h.type,h.key,h.props,null,f.mode,S),$a(S,h),S.return=f,f=S)}return s(f);case Qt:t:{for(H=h.key;c!==null;){if(c.key===H)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){l(f,c.sibling),S=n(c,h.children||[]),S.return=f,f=S;break t}else{l(f,c);break}else e(f,c);c=c.sibling}S=Cs(h,f.mode,S),S.return=f,f=S}return s(f);case Ut:return h=kl(h),ft(f,c,h,S)}if(Zt(h))return w(f,c,h,S);if(Nt(h)){if(H=Nt(h),typeof H!="function")throw Error(d(150));return h=H.call(h),q(f,c,h,S)}if(typeof h.then=="function")return ft(f,c,ei(h),S);if(h.$$typeof===Mt)return ft(f,c,Fn(f,h),S);li(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,c!==null&&c.tag===6?(l(f,c.sibling),S=n(c,h),S.return=f,f=S):(l(f,c),S=Ms(h,f.mode,S),S.return=f,f=S),s(f)):l(f,c)}return function(f,c,h,S){try{Pa=0;var H=ft(f,c,h,S);return ma=null,H}catch(R){if(R===ga||R===$n)throw R;var $=fe(29,R,null,f.mode);return $.lanes=S,$.return=f,$}finally{}}}var Yl=Ec(!0),zc=Ec(!1),rl=!1;function Us(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function js(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function dl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(et&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Kn(t),dc(t,null,l),e}return Zn(t,a,e,l),Kn(t)}function tn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,So(t,l)}}function Gs(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var ks=!1;function en(){if(ks){var t=ha;if(t!==null)throw t}}function ln(t,e,l,a){ks=!1;var n=t.updateQueue;rl=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,g=o.next;o.next=null,s===null?i=g:s.next=g,s=o;var b=t.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==s&&(u===null?b.firstBaseUpdate=g:u.next=g,b.lastBaseUpdate=o))}if(i!==null){var A=n.baseState;s=0,b=g=o=null,u=i;do{var m=u.lane&-536870913,v=m!==u.lane;if(v?(Z&m)===m:(a&m)===m){m!==0&&m===da&&(ks=!0),b!==null&&(b=b.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var w=t,q=u;m=e;var ft=l;switch(q.tag){case 1:if(w=q.payload,typeof w=="function"){A=w.call(ft,A,m);break t}A=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=q.payload,m=typeof w=="function"?w.call(ft,A,m):w,m==null)break t;A=O({},A,m);break t;case 2:rl=!0}}m=u.callback,m!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[m]:v.push(m))}else v={lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(g=b=v,o=A):b=b.next=v,s|=m;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;v=u,u=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);b===null&&(o=A),n.baseState=o,n.firstBaseUpdate=g,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),yl|=s,t.lanes=s,t.memoizedState=A}}function Nc(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function Rc(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Nc(l[t],e)}var va=r(null),ai=r(0);function Hc(t,e){t=tl,D(ai,t),D(va,e),tl=t|e.baseLanes}function Ls(){D(ai,tl),D(va,va.current)}function Ys(){tl=ai.current,T(va),T(ai)}var de=r(null),we=null;function hl(t){var e=t.alternate;D(St,St.current&1),D(de,t),we===null&&(e===null||va.current!==null||e.memoizedState!==null)&&(we=t)}function Vs(t){D(St,St.current),D(de,t),we===null&&(we=t)}function Oc(t){t.tag===22?(D(St,St.current),D(de,t),we===null&&(we=t)):gl()}function gl(){D(St,St.current),D(de,de.current)}function he(t){T(de),we===t&&(we=null),T(St)}var St=r(0);function ni(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Iu(l)||Wu(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ze=0,G=null,ct=null,Dt=null,ii=!1,ya=!1,Vl=!1,si=0,an=0,pa=null,_h=0;function pt(){throw Error(d(321))}function Qs(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!re(t[l],e[l]))return!1;return!0}function Xs(t,e,l,a,n,i){return Ze=i,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?vr:su,Vl=!1,i=l(a,n),Vl=!1,ya&&(i=Bc(e,l,a,n)),qc(t),i}function qc(t){y.H=un;var e=ct!==null&&ct.next!==null;if(Ze=0,Dt=ct=G=null,ii=!1,an=0,pa=null,e)throw Error(d(300));t===null||wt||(t=t.dependencies,t!==null&&Wn(t)&&(wt=!0))}function Bc(t,e,l,a){G=t;var n=0;do{if(ya&&(pa=null),an=0,ya=!1,25<=n)throw Error(d(301));if(n+=1,Dt=ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=yr,i=e(l,a)}while(ya);return i}function Uh(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?nn(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(G.flags|=1024),e}function Zs(){var t=si!==0;return si=0,t}function Ks(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Js(t){if(ii){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ii=!1}Ze=0,Dt=ct=G=null,ya=!1,an=si=0,pa=null}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?G.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function At(){if(ct===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=Dt===null?G.memoizedState:Dt.next;if(e!==null)Dt=e,ct=t;else{if(t===null)throw G.alternate===null?Error(d(467)):Error(d(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Dt===null?G.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var e=an;return an+=1,pa===null&&(pa=[]),t=Cc(pa,t,e),e=G,(Dt===null?e.memoizedState:Dt.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?vr:su),t}function oi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===Mt)return Lt(t)}throw Error(d(438,String(t)))}function Is(t){var e=null,l=G.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=G.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ui(),G.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Oe;return e.index++,l}function Ke(t,e){return typeof e=="function"?e(t):e}function ci(t){var e=At();return Ws(e,ct,t)}function Ws(t,e,l){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var u=s=null,o=null,g=e,b=!1;do{var A=g.lane&-536870913;if(A!==g.lane?(Z&A)===A:(Ze&A)===A){var m=g.revertLane;if(m===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===da&&(b=!0);else if((Ze&m)===m){g=g.next,m===da&&(b=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(u=o=A,s=i):o=o.next=A,G.lanes|=m,yl|=m;A=g.action,Vl&&l(i,A),i=g.hasEagerState?g.eagerState:l(i,A)}else m={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(u=o=m,s=i):o=o.next=m,G.lanes|=A,yl|=A;g=g.next}while(g!==null&&g!==e);if(o===null?s=i:o.next=u,!re(i,t.memoizedState)&&(wt=!0,b&&(l=ha,l!==null)))throw l;t.memoizedState=i,t.baseState=s,t.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Fs(t){var e=At(),l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var s=n=n.next;do i=t(i,s.action),s=s.next;while(s!==n);re(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function _c(t,e,l){var a=G,n=At(),i=J;if(i){if(l===void 0)throw Error(d(407));l=l()}else l=e();var s=!re((ct||n).memoizedState,l);if(s&&(n.memoizedState=l,wt=!0),n=n.queue,tu(Gc.bind(null,a,n,t),[t]),n.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(a.flags|=2048,ba(9,{destroy:void 0},jc.bind(null,a,n,l,e),null),dt===null)throw Error(d(349));i||(Ze&127)!==0||Uc(a,e,l)}return l}function Uc(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=G.updateQueue,e===null?(e=ui(),G.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function jc(t,e,l,a){e.value=l,e.getSnapshot=a,kc(e)&&Lc(t)}function Gc(t,e,l){return l(function(){kc(e)&&Lc(t)})}function kc(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!re(t,l)}catch{return!0}}function Lc(t){var e=ql(t,2);e!==null&&ae(e,t,2)}function Ps(t){var e=It();if(typeof t=="function"){var l=t;if(t=l(),Vl){al(!0);try{l()}finally{al(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:t},e}function Yc(t,e,l,a){return t.baseState=l,Ws(t,ct,typeof a=="function"?a:Ke)}function jh(t,e,l,a,n){if(di(t))throw Error(d(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};y.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Vc(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Vc(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=y.T,s={};y.T=s;try{var u=l(n,a),o=y.S;o!==null&&o(s,u),Qc(t,e,u)}catch(g){$s(t,e,g)}finally{i!==null&&s.types!==null&&(i.types=s.types),y.T=i}}else try{i=l(n,a),Qc(t,e,i)}catch(g){$s(t,e,g)}}function Qc(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Xc(t,e,a)},function(a){return $s(t,e,a)}):Xc(t,e,l)}function Xc(t,e,l){e.status="fulfilled",e.value=l,Zc(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Vc(t,l)))}function $s(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Zc(e),e=e.next;while(e!==a)}t.action=null}function Zc(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Kc(t,e){return e}function Jc(t,e){if(J){var l=dt.formState;if(l!==null){t:{var a=G;if(J){if(gt){e:{for(var n=gt,i=De;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ee(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){gt=Ee(n.nextSibling),a=n.data==="F!";break t}}ol(a)}a=!1}a&&(e=l[0])}}return l=It(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kc,lastRenderedState:e},l.queue=a,l=hr.bind(null,G,a),a.dispatch=l,a=Ps(!1),i=iu.bind(null,G,!1,a.queue),a=It(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=jh.bind(null,G,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Ic(t){var e=At();return Wc(e,ct,t)}function Wc(t,e,l){if(e=Ws(t,e,Kc)[0],t=ci(Ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=nn(e)}catch(s){throw s===ga?$n:s}else a=e;e=At();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(G.flags|=2048,ba(9,{destroy:void 0},Gh.bind(null,n,l),null)),[a,i,t]}function Gh(t,e){t.action=e}function Fc(t){var e=At(),l=ct;if(l!==null)return Wc(e,l,t);At(),e=e.memoizedState,l=At();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ba(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=G.updateQueue,e===null&&(e=ui(),G.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Pc(){return At().memoizedState}function ri(t,e,l,a){var n=It();G.flags|=t,n.memoizedState=ba(1|e,{destroy:void 0},l,a===void 0?null:a)}function fi(t,e,l,a){var n=At();a=a===void 0?null:a;var i=n.memoizedState.inst;ct!==null&&a!==null&&Qs(a,ct.memoizedState.deps)?n.memoizedState=ba(e,i,l,a):(G.flags|=t,n.memoizedState=ba(1|e,i,l,a))}function $c(t,e){ri(8390656,8,t,e)}function tu(t,e){fi(2048,8,t,e)}function kh(t){G.flags|=4;var e=G.updateQueue;if(e===null)e=ui(),G.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function tr(t){var e=At().memoizedState;return kh({ref:e,nextImpl:t}),function(){if((et&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function er(t,e){return fi(4,2,t,e)}function lr(t,e){return fi(4,4,t,e)}function ar(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nr(t,e,l){l=l!=null?l.concat([t]):null,fi(4,4,ar.bind(null,e,t),l)}function eu(){}function ir(t,e){var l=At();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Qs(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function sr(t,e){var l=At();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Qs(e,a[1]))return a[0];if(a=t(),Vl){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a}function lu(t,e,l){return l===void 0||(Ze&1073741824)!==0&&(Z&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=of(),G.lanes|=t,yl|=t,l)}function ur(t,e,l,a){return re(l,e)?l:va.current!==null?(t=lu(t,l,a),re(t,e)||(wt=!0),t):(Ze&42)===0||(Ze&1073741824)!==0&&(Z&261930)===0?(wt=!0,t.memoizedState=l):(t=of(),G.lanes|=t,yl|=t,e)}function or(t,e,l,a,n){var i=C.p;C.p=i!==0&&8>i?i:8;var s=y.T,u={};y.T=u,iu(t,!1,e,l);try{var o=n(),g=y.S;if(g!==null&&g(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=Bh(o,a);sn(t,e,b,ve(t))}else sn(t,e,a,ve(t))}catch(A){sn(t,e,{then:function(){},status:"rejected",reason:A},ve())}finally{C.p=i,s!==null&&u.types!==null&&(s.types=u.types),y.T=s}}function Lh(){}function au(t,e,l,a){if(t.tag!==5)throw Error(d(476));var n=cr(t).queue;or(t,n,e,B,l===null?Lh:function(){return rr(t),l(a)})}function cr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:B},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rr(t){var e=cr(t);e.next===null&&(e=t.alternate.memoizedState),sn(t,e.next.queue,{},ve())}function nu(){return Lt(xn)}function fr(){return At().memoizedState}function dr(){return At().memoizedState}function Yh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ve();t=fl(l);var a=dl(e,t,l);a!==null&&(ae(a,e,l),tn(a,e,l)),e={cache:Os()},t.payload=e;return}e=e.return}}function Vh(t,e,l){var a=ve();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},di(t)?gr(e,l):(l=Ts(t,e,l,a),l!==null&&(ae(l,t,a),mr(l,e,a)))}function hr(t,e,l){var a=ve();sn(t,e,l,a)}function sn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(di(t))gr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,u=i(s,l);if(n.hasEagerState=!0,n.eagerState=u,re(u,s))return Zn(t,e,n,0),dt===null&&Xn(),!1}catch{}finally{}if(l=Ts(t,e,n,a),l!==null)return ae(l,t,a),mr(l,e,a),!0}return!1}function iu(t,e,l,a){if(a={lane:2,revertLane:Uu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},di(t)){if(e)throw Error(d(479))}else e=Ts(t,l,a,2),e!==null&&ae(e,t,2)}function di(t){var e=t.alternate;return t===G||e!==null&&e===G}function gr(t,e){ya=ii=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function mr(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,So(t,l)}}var un={readContext:Lt,use:oi,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};un.useEffectEvent=pt;var vr={readContext:Lt,use:oi,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:$c,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ri(4194308,4,ar.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ri(4194308,4,t,e)},useInsertionEffect:function(t,e){ri(4,2,t,e)},useMemo:function(t,e){var l=It();e=e===void 0?null:e;var a=t();if(Vl){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=It();if(l!==void 0){var n=l(e);if(Vl){al(!0);try{l(e)}finally{al(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Vh.bind(null,G,t),[a.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:function(t){t=Ps(t);var e=t.queue,l=hr.bind(null,G,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:eu,useDeferredValue:function(t,e){var l=It();return lu(l,t,e)},useTransition:function(){var t=Ps(!1);return t=or.bind(null,G,t.queue,!0,!1),It().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=G,n=It();if(J){if(l===void 0)throw Error(d(407));l=l()}else{if(l=e(),dt===null)throw Error(d(349));(Z&127)!==0||Uc(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,$c(Gc.bind(null,a,i,t),[t]),a.flags|=2048,ba(9,{destroy:void 0},jc.bind(null,a,i,l,e),null),l},useId:function(){var t=It(),e=dt.identifierPrefix;if(J){var l=_e,a=Be;l=(a&~(1<<32-ce(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=si++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=_h++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:nu,useFormState:Jc,useActionState:Jc,useOptimistic:function(t){var e=It();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=iu.bind(null,G,!0,l),l.dispatch=e,[t,e]},useMemoCache:Is,useCacheRefresh:function(){return It().memoizedState=Yh.bind(null,G)},useEffectEvent:function(t){var e=It(),l={impl:t};return e.memoizedState=l,function(){if((et&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},su={readContext:Lt,use:oi,useCallback:ir,useContext:Lt,useEffect:tu,useImperativeHandle:nr,useInsertionEffect:er,useLayoutEffect:lr,useMemo:sr,useReducer:ci,useRef:Pc,useState:function(){return ci(Ke)},useDebugValue:eu,useDeferredValue:function(t,e){var l=At();return ur(l,ct.memoizedState,t,e)},useTransition:function(){var t=ci(Ke)[0],e=At().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:_c,useId:fr,useHostTransitionStatus:nu,useFormState:Ic,useActionState:Ic,useOptimistic:function(t,e){var l=At();return Yc(l,ct,t,e)},useMemoCache:Is,useCacheRefresh:dr};su.useEffectEvent=tr;var yr={readContext:Lt,use:oi,useCallback:ir,useContext:Lt,useEffect:tu,useImperativeHandle:nr,useInsertionEffect:er,useLayoutEffect:lr,useMemo:sr,useReducer:Fs,useRef:Pc,useState:function(){return Fs(Ke)},useDebugValue:eu,useDeferredValue:function(t,e){var l=At();return ct===null?lu(l,t,e):ur(l,ct.memoizedState,t,e)},useTransition:function(){var t=Fs(Ke)[0],e=At().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:_c,useId:fr,useHostTransitionStatus:nu,useFormState:Fc,useActionState:Fc,useOptimistic:function(t,e){var l=At();return ct!==null?Yc(l,ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Is,useCacheRefresh:dr};yr.useEffectEvent=tr;function uu(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:O({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ou={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ve(),n=fl(a);n.payload=e,l!=null&&(n.callback=l),e=dl(t,n,a),e!==null&&(ae(e,t,a),tn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ve(),n=fl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=dl(t,n,a),e!==null&&(ae(e,t,a),tn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ve(),a=fl(l);a.tag=2,e!=null&&(a.callback=e),e=dl(t,a,l),e!==null&&(ae(e,t,l),tn(e,t,l))}};function pr(t,e,l,a,n,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!Za(l,a)||!Za(n,i):!0}function br(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function Ql(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=O({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Sr(t){Qn(t)}function Ar(t){console.error(t)}function Tr(t){Qn(t)}function hi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function xr(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cu(t,e,l){return l=fl(l),l.tag=3,l.payload={element:null},l.callback=function(){hi(t,e)},l}function Mr(t){return t=fl(t),t.tag=3,t}function Cr(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){xr(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xr(e,l,a),typeof n!="function"&&(pl===null?pl=new Set([this]):pl.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function Qh(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&fa(e,l,n,!0),l=de.current,l!==null){switch(l.tag){case 31:case 13:return we===null?Ci():l.alternate===null&&bt===0&&(bt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===ti?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),qu(t,a,n)),!1;case 22:return l.flags|=65536,a===ti?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),qu(t,a,n)),!1}throw Error(d(435,l.tag))}return qu(t,a,n),Ci(),!1}if(J)return e=de.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Es&&(t=Error(d(422),{cause:a}),Ia(xe(t,l)))):(a!==Es&&(e=Error(d(423),{cause:a}),Ia(xe(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=xe(a,l),n=cu(t.stateNode,a,n),Gs(t,n),bt!==4&&(bt=2)),!1;var i=Error(d(520),{cause:a});if(i=xe(i,l),mn===null?mn=[i]:mn.push(i),bt!==4&&(bt=2),e===null)return!0;a=xe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=cu(l.stateNode,a,t),Gs(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pl===null||!pl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Mr(n),Cr(n,t,l,a),Gs(l,n),!1}l=l.return}while(l!==null);return!1}var ru=Error(d(461)),wt=!1;function Yt(t,e,l,a){e.child=t===null?zc(e,null,l,a):Yl(e,t.child,l,a)}function Dr(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var s={};for(var u in a)u!=="ref"&&(s[u]=a[u])}else s=a;return jl(e),a=Xs(t,e,l,s,i,n),u=Zs(),t!==null&&!wt?(Ks(t,e,n),Je(t,e,n)):(J&&u&&Ds(e),e.flags|=1,Yt(t,e,a,n),e.child)}function wr(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!xs(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Er(t,e,i,a,n)):(t=Jn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!pu(t,n)){var s=i.memoizedProps;if(l=l.compare,l=l!==null?l:Za,l(s,a)&&t.ref===e.ref)return Je(t,e,n)}return e.flags|=1,t=Ye(i,a),t.ref=e.ref,t.return=e,e.child=t}function Er(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Za(i,a)&&t.ref===e.ref)if(wt=!1,e.pendingProps=a=i,pu(t,n))(t.flags&131072)!==0&&(wt=!0);else return e.lanes=t.lanes,Je(t,e,n)}return fu(t,e,l,a,n)}function zr(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Nr(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pn(e,i!==null?i.cachePool:null),i!==null?Hc(e,i):Ls(),Oc(e);else return a=e.lanes=536870912,Nr(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Pn(e,i.cachePool),Hc(e,i),gl(),e.memoizedState=null):(t!==null&&Pn(e,null),Ls(),gl());return Yt(t,e,n,l),e.child}function on(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Nr(t,e,l,a,n){var i=Bs();return i=i===null?null:{parent:Ct._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Pn(e,null),Ls(),Oc(e),t!==null&&fa(t,e,a,!0),e.childLanes=n,null}function gi(t,e){return e=vi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(t,e,l){return Yl(e,t.child,null,l),t=gi(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function Xh(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(J){if(a.mode==="hidden")return t=gi(e,a),e.lanes=536870912,on(null,t);if(Vs(e),(t=gt)?(t=Qf(t,De),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sl!==null?{id:Be,overflow:_e}:null,retryLane:536870912,hydrationErrors:null},l=gc(t),l.return=e,e.child=l,kt=e,gt=null)):t=null,t===null)throw ol(e);return e.lanes=536870912,null}return gi(e,a)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(Vs(e),n)if(e.flags&256)e.flags&=-257,e=Rr(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(wt||fa(t,e,l,!1),n=(l&t.childLanes)!==0,wt||n){if(a=dt,a!==null&&(s=Ao(a,l),s!==0&&s!==i.retryLane))throw i.retryLane=s,ql(t,s),ae(a,t,s),ru;Ci(),e=Rr(t,e,l)}else t=i.treeContext,gt=Ee(s.nextSibling),kt=e,J=!0,ul=null,De=!1,t!==null&&yc(e,t),e=gi(e,a),e.flags|=4096;return e}return t=Ye(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function mi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function fu(t,e,l,a,n){return jl(e),l=Xs(t,e,l,a,void 0,n),a=Zs(),t!==null&&!wt?(Ks(t,e,n),Je(t,e,n)):(J&&a&&Ds(e),e.flags|=1,Yt(t,e,l,n),e.child)}function Hr(t,e,l,a,n,i){return jl(e),e.updateQueue=null,l=Bc(e,a,l,n),qc(t),a=Zs(),t!==null&&!wt?(Ks(t,e,i),Je(t,e,i)):(J&&a&&Ds(e),e.flags|=1,Yt(t,e,l,i),e.child)}function Or(t,e,l,a,n){if(jl(e),e.stateNode===null){var i=ua,s=l.contextType;typeof s=="object"&&s!==null&&(i=Lt(s)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Us(e),s=l.contextType,i.context=typeof s=="object"&&s!==null?Lt(s):ua,i.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(uu(e,l,s,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ou.enqueueReplaceState(i,i.state,null),ln(e,a,i,n),en(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var u=e.memoizedProps,o=Ql(l,u);i.props=o;var g=i.context,b=l.contextType;s=ua,typeof b=="object"&&b!==null&&(s=Lt(b));var A=l.getDerivedStateFromProps;b=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||g!==s)&&br(e,i,a,s),rl=!1;var m=e.memoizedState;i.state=m,ln(e,a,i,n),en(),g=e.memoizedState,u||m!==g||rl?(typeof A=="function"&&(uu(e,l,A,a),g=e.memoizedState),(o=rl||pr(e,l,o,a,m,g,s))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=g),i.props=a,i.state=g,i.context=s,a=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,js(t,e),s=e.memoizedProps,b=Ql(l,s),i.props=b,A=e.pendingProps,m=i.context,g=l.contextType,o=ua,typeof g=="object"&&g!==null&&(o=Lt(g)),u=l.getDerivedStateFromProps,(g=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==A||m!==o)&&br(e,i,a,o),rl=!1,m=e.memoizedState,i.state=m,ln(e,a,i,n),en();var v=e.memoizedState;s!==A||m!==v||rl||t!==null&&t.dependencies!==null&&Wn(t.dependencies)?(typeof u=="function"&&(uu(e,l,u,a),v=e.memoizedState),(b=rl||pr(e,l,b,a,m,v,o)||t!==null&&t.dependencies!==null&&Wn(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=v),i.props=a,i.state=v,i.context=o,a=b):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,mi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Yl(e,t.child,null,n),e.child=Yl(e,null,l,n)):Yt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Je(t,e,n),t}function qr(t,e,l,a){return _l(),e.flags|=256,Yt(t,e,l,a),e.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hu(t){return{baseLanes:t,cachePool:xc()}}function gu(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=me),t}function Br(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(J){if(n?hl(e):gl(),(t=gt)?(t=Qf(t,De),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sl!==null?{id:Be,overflow:_e}:null,retryLane:536870912,hydrationErrors:null},l=gc(t),l.return=e,e.child=l,kt=e,gt=null)):t=null,t===null)throw ol(e);return Wu(t)?e.lanes=32:e.lanes=536870912,null}var u=a.children;return a=a.fallback,n?(gl(),n=e.mode,u=vi({mode:"hidden",children:u},n),a=Bl(a,n,l,null),u.return=e,a.return=e,u.sibling=a,e.child=u,a=e.child,a.memoizedState=hu(l),a.childLanes=gu(t,s,l),e.memoizedState=du,on(null,a)):(hl(e),mu(e,u))}var o=t.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)e.flags&256?(hl(e),e.flags&=-257,e=vu(t,e,l)):e.memoizedState!==null?(gl(),e.child=t.child,e.flags|=128,e=null):(gl(),u=a.fallback,n=e.mode,a=vi({mode:"visible",children:a.children},n),u=Bl(u,n,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Yl(e,t.child,null,l),a=e.child,a.memoizedState=hu(l),a.childLanes=gu(t,s,l),e.memoizedState=du,e=on(null,a));else if(hl(e),Wu(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var g=s.dgst;s=g,a=Error(d(419)),a.stack="",a.digest=s,Ia({value:a,source:null,stack:null}),e=vu(t,e,l)}else if(wt||fa(t,e,l,!1),s=(l&t.childLanes)!==0,wt||s){if(s=dt,s!==null&&(a=Ao(s,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,ql(t,a),ae(s,t,a),ru;Iu(u)||Ci(),e=vu(t,e,l)}else Iu(u)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,gt=Ee(u.nextSibling),kt=e,J=!0,ul=null,De=!1,t!==null&&yc(e,t),e=mu(e,a.children),e.flags|=4096);return e}return n?(gl(),u=a.fallback,n=e.mode,o=t.child,g=o.sibling,a=Ye(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,g!==null?u=Ye(g,u):(u=Bl(u,n,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,on(null,a),a=e.child,u=t.child.memoizedState,u===null?u=hu(l):(n=u.cachePool,n!==null?(o=Ct._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=xc(),u={baseLanes:u.baseLanes|l,cachePool:n}),a.memoizedState=u,a.childLanes=gu(t,s,l),e.memoizedState=du,on(t.child,a)):(hl(e),l=t.child,t=l.sibling,l=Ye(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function mu(t,e){return e=vi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vi(t,e){return t=fe(22,t,null,e),t.lanes=0,t}function vu(t,e,l){return Yl(e,t.child,null,l),t=mu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _r(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Rs(t.return,e,l)}function yu(t,e,l,a,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=l,s.tailMode=n,s.treeForkCount=i)}function Ur(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var s=St.current,u=(s&2)!==0;if(u?(s=s&1|2,e.flags|=128):s&=1,D(St,s),Yt(t,e,a,l),a=J?Ja:0,!u&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_r(t,l,e);else if(t.tag===19)_r(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ni(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),yu(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ni(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}yu(e,!0,l,null,i,a);break;case"together":yu(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Je(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),yl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(fa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,l=Ye(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ye(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function pu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Wn(t)))}function Zh(t,e,l){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),cl(e,Ct,t.memoizedState.cache),_l();break;case 27:case 5:El(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:cl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Vs(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(hl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Br(t,e,l):(hl(e),t=Je(t,e,l),t!==null?t.sibling:null);hl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(fa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Ur(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(St,St.current),a)break;return null;case 22:return e.lanes=0,zr(t,e,l,e.pendingProps);case 24:cl(e,Ct,t.memoizedState.cache)}return Je(t,e,l)}function jr(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)wt=!0;else{if(!pu(t,l)&&(e.flags&128)===0)return wt=!1,Zh(t,e,l);wt=(t.flags&131072)!==0}else wt=!1,J&&(e.flags&1048576)!==0&&vc(e,Ja,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=kl(e.elementType),e.type=t,typeof t=="function")xs(t)?(a=Ql(t,a),e.tag=1,e=Or(null,e,t,a,l)):(e.tag=0,e=fu(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===Jt){e.tag=11,e=Dr(null,e,t,a,l);break t}else if(n===Y){e.tag=14,e=wr(null,e,t,a,l);break t}}throw e=pe(t)||t,Error(d(306,e,""))}}return e;case 0:return fu(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Ql(a,e.pendingProps),Or(t,e,a,n,l);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(d(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,js(t,e),ln(e,a,null,l);var s=e.memoizedState;if(a=s.cache,cl(e,Ct,a),a!==i.cache&&Hs(e,[Ct],l,!0),en(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=qr(t,e,a,l);break t}else if(a!==n){n=xe(Error(d(424)),e),Ia(n),e=qr(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=Ee(t.firstChild),kt=e,J=!0,ul=null,De=!0,l=zc(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(_l(),a===n){e=Je(t,e,l);break t}Yt(t,e,a,l)}e=e.child}return e;case 26:return mi(t,e),t===null?(l=Wf(e.type,null,e.pendingProps,null))?e.memoizedState=l:J||(l=e.type,t=e.pendingProps,a=Hi(L.current).createElement(l),a[Gt]=e,a[Ft]=t,Vt(a,l,t),Ot(a),e.stateNode=a):e.memoizedState=Wf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return El(e),t===null&&J&&(a=e.stateNode=Kf(e.type,e.pendingProps,L.current),kt=e,De=!0,n=gt,Tl(e.type)?(Fu=n,gt=Ee(a.firstChild)):gt=n),Yt(t,e,e.pendingProps.children,l),mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&J&&((n=a=gt)&&(a=Tg(a,e.type,e.pendingProps,De),a!==null?(e.stateNode=a,kt=e,gt=Ee(a.firstChild),De=!1,n=!0):n=!1),n||ol(e)),El(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Zu(n,i)?a=null:s!==null&&Zu(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=Xs(t,e,Uh,null,null,l),xn._currentValue=n),mi(t,e),Yt(t,e,a,l),e.child;case 6:return t===null&&J&&((t=l=gt)&&(l=xg(l,e.pendingProps,De),l!==null?(e.stateNode=l,kt=e,gt=null,t=!0):t=!1),t||ol(e)),null;case 13:return Br(t,e,l);case 4:return jt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Yl(e,null,a,l):Yt(t,e,a,l),e.child;case 11:return Dr(t,e,e.type,e.pendingProps,l);case 7:return Yt(t,e,e.pendingProps,l),e.child;case 8:return Yt(t,e,e.pendingProps.children,l),e.child;case 12:return Yt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,cl(e,e.type,a.value),Yt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,jl(e),n=Lt(n),a=a(n),e.flags|=1,Yt(t,e,a,l),e.child;case 14:return wr(t,e,e.type,e.pendingProps,l);case 15:return Er(t,e,e.type,e.pendingProps,l);case 19:return Ur(t,e,l);case 31:return Xh(t,e,l);case 22:return zr(t,e,l,e.pendingProps);case 24:return jl(e),a=Lt(Ct),t===null?(n=Bs(),n===null&&(n=dt,i=Os(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Us(e),cl(e,Ct,n)):((t.lanes&l)!==0&&(js(t,e),ln(e,null,null,l),en()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),cl(e,Ct,a)):(a=i.cache,cl(e,Ct,a),a!==n.cache&&Hs(e,[Ct],l,!0))),Yt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Ie(t){t.flags|=4}function bu(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(df())t.flags|=8192;else throw Ll=ti,_s}else t.flags&=-16777217}function Gr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ed(e))if(df())t.flags|=8192;else throw Ll=ti,_s}function yi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?po():536870912,t.lanes|=e,xa|=e)}function cn(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Kh(t,e,l){var a=e.pendingProps;switch(ws(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Xe(Ct),yt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ra(e)?Ie(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zs())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ie(e),i!==null?(mt(e),Gr(e,i)):(mt(e),bu(e,n,null,a,l))):i?i!==t.memoizedState?(Ie(e),mt(e),Gr(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ie(e),mt(e),bu(e,n,t,a,l)),null;case 27:if(Kl(e),l=L.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ie(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return mt(e),null}t=E.current,ra(e)?pc(e):(t=Kf(n,a,l),e.stateNode=t,Ie(e))}return mt(e),null;case 5:if(Kl(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ie(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return mt(e),null}if(i=E.current,ra(e))pc(e);else{var s=Hi(L.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(n,{is:a.is}):s.createElement(n)}}i[Gt]=e,i[Ft]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=i;t:switch(Vt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ie(e)}}return mt(e),bu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ie(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(t=L.current,ra(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=kt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Gt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||_f(t.nodeValue,l)),t||ol(e,!0)}else t=Hi(t).createTextNode(a),t[Gt]=e,e.stateNode=t}return mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ra(e),l!==null){if(t===null){if(!a)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Gt]=e}else _l(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else l=zs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(d(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ra(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Gt]=e}else _l(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=zs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),yi(e,e.updateQueue),mt(e),null);case 4:return yt(),t===null&&Lu(e.stateNode.containerInfo),mt(e),null;case 10:return Xe(e.type),mt(e),null;case 19:if(T(St),a=e.memoizedState,a===null)return mt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)cn(a,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ni(t),i!==null){for(e.flags|=128,cn(a,!1),t=i.updateQueue,e.updateQueue=t,yi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)hc(l,t),l=l.sibling;return D(St,St.current&1|2),J&&Ve(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ue()>Ti&&(e.flags|=128,n=!0,cn(a,!1),e.lanes=4194304)}else{if(!n)if(t=ni(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,yi(e,t),cn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!J)return mt(e),null}else 2*ue()-a.renderingStartTime>Ti&&l!==536870912&&(e.flags|=128,n=!0,cn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ue(),t.sibling=null,l=St.current,D(St,n?l&1|2:l&1),J&&Ve(e,a.treeForkCount),t):(mt(e),null);case 22:case 23:return he(e),Ys(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),l=e.updateQueue,l!==null&&yi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&T(Gl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Xe(Ct),mt(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function Jh(t,e){switch(ws(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xe(Ct),yt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Kl(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(d(340));_l()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));_l()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(St),null;case 4:return yt(),null;case 10:return Xe(e.type),null;case 22:case 23:return he(e),Ys(),t!==null&&T(Gl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Xe(Ct),null;case 25:return null;default:return null}}function kr(t,e){switch(ws(e),e.tag){case 3:Xe(Ct),yt();break;case 26:case 27:case 5:Kl(e);break;case 4:yt();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:T(St);break;case 10:Xe(e.type);break;case 22:case 23:he(e),Ys(),t!==null&&T(Gl);break;case 24:Xe(Ct)}}function rn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,s=l.inst;a=i(),s.destroy=a}l=l.next}while(l!==n)}}catch(u){ot(e,e.return,u)}}function ml(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var s=a.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=e;var o=l,g=u;try{g()}catch(b){ot(n,o,b)}}}a=a.next}while(a!==i)}}catch(b){ot(e,e.return,b)}}function Lr(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Rc(e,l)}catch(a){ot(t,t.return,a)}}}function Yr(t,e,l){l.props=Ql(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ot(t,e,a)}}function fn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ot(t,e,n)}}function Ue(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ot(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ot(t,e,n)}else l.current=null}function Vr(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ot(t,t.return,n)}}function Su(t,e,l){try{var a=t.stateNode;vg(a,t.type,l,e),a[Ft]=e}catch(n){ot(t,t.return,n)}}function Qr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Tl(t.type)||t.tag===4}function Au(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Tl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=ke));else if(a!==4&&(a===27&&Tl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Tu(t,e,l),t=t.sibling;t!==null;)Tu(t,e,l),t=t.sibling}function pi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Tl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(pi(t,e,l),t=t.sibling;t!==null;)pi(t,e,l),t=t.sibling}function Xr(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e,a,l),e[Gt]=t,e[Ft]=l}catch(i){ot(t,t.return,i)}}var We=!1,Et=!1,xu=!1,Zr=typeof WeakSet=="function"?WeakSet:Set,qt=null;function Ih(t,e){if(t=t.containerInfo,Qu=Gi,t=nc(t),vs(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var s=0,u=-1,o=-1,g=0,b=0,A=t,m=null;e:for(;;){for(var v;A!==l||n!==0&&A.nodeType!==3||(u=s+n),A!==i||a!==0&&A.nodeType!==3||(o=s+a),A.nodeType===3&&(s+=A.nodeValue.length),(v=A.firstChild)!==null;)m=A,A=v;for(;;){if(A===t)break e;if(m===l&&++g===n&&(u=s),m===i&&++b===a&&(o=s),(v=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=v}l=u===-1||o===-1?null:{start:u,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Xu={focusedElem:t,selectionRange:l},Gi=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var w=Ql(l.type,n);t=a.getSnapshotBeforeUpdate(w,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){ot(l,l.return,q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Ju(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ju(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function Kr(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Pe(t,l),a&4&&rn(5,l);break;case 1:if(Pe(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){ot(l,l.return,s)}else{var n=Ql(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){ot(l,l.return,s)}}a&64&&Lr(l),a&512&&fn(l,l.return);break;case 3:if(Pe(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Rc(t,e)}catch(s){ot(l,l.return,s)}}break;case 27:e===null&&a&4&&Xr(l);case 26:case 5:Pe(t,l),e===null&&a&4&&Vr(l),a&512&&fn(l,l.return);break;case 12:Pe(t,l);break;case 31:Pe(t,l),a&4&&Wr(t,l);break;case 13:Pe(t,l),a&4&&Fr(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=ng.bind(null,l),Mg(t,l))));break;case 22:if(a=l.memoizedState!==null||We,!a){e=e!==null&&e.memoizedState!==null||Et,n=We;var i=Et;We=a,(Et=e)&&!i?$e(t,l,(l.subtreeFlags&8772)!==0):Pe(t,l),We=n,Et=i}break;case 30:break;default:Pe(t,l)}}function Jr(t){var e=t.alternate;e!==null&&(t.alternate=null,Jr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$i(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,$t=!1;function Fe(t,e,l){for(l=l.child;l!==null;)Ir(t,e,l),l=l.sibling}function Ir(t,e,l){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(qa,l)}catch{}switch(l.tag){case 26:Et||Ue(l,e),Fe(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Et||Ue(l,e);var a=vt,n=$t;Tl(l.type)&&(vt=l.stateNode,$t=!1),Fe(t,e,l),Sn(l.stateNode),vt=a,$t=n;break;case 5:Et||Ue(l,e);case 6:if(a=vt,n=$t,vt=null,Fe(t,e,l),vt=a,$t=n,vt!==null)if($t)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(l.stateNode)}catch(i){ot(l,e,i)}else try{vt.removeChild(l.stateNode)}catch(i){ot(l,e,i)}break;case 18:vt!==null&&($t?(t=vt,Yf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ra(t)):Yf(vt,l.stateNode));break;case 4:a=vt,n=$t,vt=l.stateNode.containerInfo,$t=!0,Fe(t,e,l),vt=a,$t=n;break;case 0:case 11:case 14:case 15:ml(2,l,e),Et||ml(4,l,e),Fe(t,e,l);break;case 1:Et||(Ue(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Yr(l,e,a)),Fe(t,e,l);break;case 21:Fe(t,e,l);break;case 22:Et=(a=Et)||l.memoizedState!==null,Fe(t,e,l),Et=a;break;default:Fe(t,e,l)}}function Wr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ra(t)}catch(l){ot(e,e.return,l)}}}function Fr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ra(t)}catch(l){ot(e,e.return,l)}}function Wh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Zr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Zr),e;default:throw Error(d(435,t.tag))}}function bi(t,e){var l=Wh(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=ig.bind(null,t,a);a.then(n,n)}})}function te(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,s=e,u=s;t:for(;u!==null;){switch(u.tag){case 27:if(Tl(u.type)){vt=u.stateNode,$t=!1;break t}break;case 5:vt=u.stateNode,$t=!1;break t;case 3:case 4:vt=u.stateNode.containerInfo,$t=!0;break t}u=u.return}if(vt===null)throw Error(d(160));Ir(i,s,n),vt=null,$t=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Pr(e,t),e=e.sibling}var Re=null;function Pr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:te(e,t),ee(t),a&4&&(ml(3,t,t.return),rn(3,t),ml(5,t,t.return));break;case 1:te(e,t),ee(t),a&512&&(Et||l===null||Ue(l,l.return)),a&64&&We&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Re;if(te(e,t),ee(t),a&512&&(Et||l===null||Ue(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ua]||i[Gt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Vt(i,a,l),i[Gt]=t,Ot(i),a=i;break t;case"link":var s=$f("link","href",n).get(a+(l.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(u,1);break e}}i=n.createElement(a),Vt(i,a,l),n.head.appendChild(i);break;case"meta":if(s=$f("meta","content",n).get(a+(l.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(u,1);break e}}i=n.createElement(a),Vt(i,a,l),n.head.appendChild(i);break;default:throw Error(d(468,a))}i[Gt]=t,Ot(i),a=i}t.stateNode=a}else td(n,t.type,t.stateNode);else t.stateNode=Pf(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?td(n,t.type,t.stateNode):Pf(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Su(t,t.memoizedProps,l.memoizedProps)}break;case 27:te(e,t),ee(t),a&512&&(Et||l===null||Ue(l,l.return)),l!==null&&a&4&&Su(t,t.memoizedProps,l.memoizedProps);break;case 5:if(te(e,t),ee(t),a&512&&(Et||l===null||Ue(l,l.return)),t.flags&32){n=t.stateNode;try{ta(n,"")}catch(w){ot(t,t.return,w)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Su(t,n,l!==null?l.memoizedProps:n)),a&1024&&(xu=!0);break;case 6:if(te(e,t),ee(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(w){ot(t,t.return,w)}}break;case 3:if(Bi=null,n=Re,Re=Oi(e.containerInfo),te(e,t),Re=n,ee(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(w){ot(t,t.return,w)}xu&&(xu=!1,$r(t));break;case 4:a=Re,Re=Oi(t.stateNode.containerInfo),te(e,t),ee(t),Re=a;break;case 12:te(e,t),ee(t);break;case 31:te(e,t),ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bi(t,a)));break;case 13:te(e,t),ee(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ai=ue()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bi(t,a)));break;case 22:n=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,g=We,b=Et;if(We=g||n,Et=b||o,te(e,t),Et=b,We=g,ee(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||o||We||Et||Xl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(i=o.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var A=o.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(w){ot(o,o.return,w)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(w){ot(o,o.return,w)}}}else if(e.tag===18){if(l===null){o=e;try{var v=o.stateNode;n?Vf(v,!0):Vf(o.stateNode,!1)}catch(w){ot(o,o.return,w)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,bi(t,l))));break;case 19:te(e,t),ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bi(t,a)));break;case 30:break;case 21:break;default:te(e,t),ee(t)}}function ee(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Qr(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,i=Au(t);pi(t,i,n);break;case 5:var s=l.stateNode;l.flags&32&&(ta(s,""),l.flags&=-33);var u=Au(t);pi(t,u,s);break;case 3:case 4:var o=l.stateNode.containerInfo,g=Au(t);Tu(t,g,o);break;default:throw Error(d(161))}}catch(b){ot(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $r(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$r(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Pe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Kr(t,e.alternate,e),e=e.sibling}function Xl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ml(4,e,e.return),Xl(e);break;case 1:Ue(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Yr(e,e.return,l),Xl(e);break;case 27:Sn(e.stateNode);case 26:case 5:Ue(e,e.return),Xl(e);break;case 22:e.memoizedState===null&&Xl(e);break;case 30:Xl(e);break;default:Xl(e)}t=t.sibling}}function $e(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,s=i.flags;switch(i.tag){case 0:case 11:case 15:$e(n,i,l),rn(4,i);break;case 1:if($e(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ot(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var u=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Nc(o[n],u)}catch(g){ot(a,a.return,g)}}l&&s&64&&Lr(i),fn(i,i.return);break;case 27:Xr(i);case 26:case 5:$e(n,i,l),l&&a===null&&s&4&&Vr(i),fn(i,i.return);break;case 12:$e(n,i,l);break;case 31:$e(n,i,l),l&&s&4&&Wr(n,i);break;case 13:$e(n,i,l),l&&s&4&&Fr(n,i);break;case 22:i.memoizedState===null&&$e(n,i,l),fn(i,i.return);break;case 30:break;default:$e(n,i,l)}e=e.sibling}}function Mu(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Wa(l))}function Cu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wa(t))}function He(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(t,e,l,a),e=e.sibling}function tf(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:He(t,e,l,a),n&2048&&rn(9,e);break;case 1:He(t,e,l,a);break;case 3:He(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wa(t)));break;case 12:if(n&2048){He(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){ot(e,e.return,o)}}else He(t,e,l,a);break;case 31:He(t,e,l,a);break;case 13:He(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,s=e.alternate,e.memoizedState!==null?i._visibility&2?He(t,e,l,a):dn(t,e):i._visibility&2?He(t,e,l,a):(i._visibility|=2,Sa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Mu(s,e);break;case 24:He(t,e,l,a),n&2048&&Cu(e.alternate,e);break;default:He(t,e,l,a)}}function Sa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,s=e,u=l,o=a,g=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(i,s,u,o,n),rn(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Sa(i,s,u,o,n):dn(i,s):(b._visibility|=2,Sa(i,s,u,o,n)),n&&g&2048&&Mu(s.alternate,s);break;case 24:Sa(i,s,u,o,n),n&&g&2048&&Cu(s.alternate,s);break;default:Sa(i,s,u,o,n)}e=e.sibling}}function dn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:dn(l,a),n&2048&&Mu(a.alternate,a);break;case 24:dn(l,a),n&2048&&Cu(a.alternate,a);break;default:dn(l,a)}e=e.sibling}}var hn=8192;function Aa(t,e,l){if(t.subtreeFlags&hn)for(t=t.child;t!==null;)ef(t,e,l),t=t.sibling}function ef(t,e,l){switch(t.tag){case 26:Aa(t,e,l),t.flags&hn&&t.memoizedState!==null&&_g(l,Re,t.memoizedState,t.memoizedProps);break;case 5:Aa(t,e,l);break;case 3:case 4:var a=Re;Re=Oi(t.stateNode.containerInfo),Aa(t,e,l),Re=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=hn,hn=16777216,Aa(t,e,l),hn=a):Aa(t,e,l));break;default:Aa(t,e,l)}}function lf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function gn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];qt=a,nf(a,t)}lf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)af(t),t=t.sibling}function af(t){switch(t.tag){case 0:case 11:case 15:gn(t),t.flags&2048&&ml(9,t,t.return);break;case 3:gn(t);break;case 12:gn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Si(t)):gn(t);break;default:gn(t)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];qt=a,nf(a,t)}lf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ml(8,e,e.return),Si(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Si(e));break;default:Si(e)}t=t.sibling}}function nf(t,e){for(;qt!==null;){var l=qt;switch(l.tag){case 0:case 11:case 15:ml(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Wa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,qt=a;else t:for(l=t;qt!==null;){a=qt;var n=a.sibling,i=a.return;if(Jr(a),a===l){qt=null;break t}if(n!==null){n.return=i,qt=n;break t}qt=i}}}var Fh={getCacheForType:function(t){var e=Lt(Ct),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Lt(Ct).controller.signal}},Ph=typeof WeakMap=="function"?WeakMap:Map,et=0,dt=null,V=null,Z=0,ut=0,ge=null,vl=!1,Ta=!1,Du=!1,tl=0,bt=0,yl=0,Zl=0,wu=0,me=0,xa=0,mn=null,le=null,Eu=!1,Ai=0,sf=0,Ti=1/0,xi=null,pl=null,Rt=0,bl=null,Ma=null,el=0,zu=0,Nu=null,uf=null,vn=0,Ru=null;function ve(){return(et&2)!==0&&Z!==0?Z&-Z:y.T!==null?Uu():To()}function of(){if(me===0)if((Z&536870912)===0||J){var t=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),me=t}else me=536870912;return t=de.current,t!==null&&(t.flags|=32),me}function ae(t,e,l){(t===dt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Ca(t,0),Sl(t,Z,me,!1)),_a(t,l),((et&2)===0||t!==dt)&&(t===dt&&((et&2)===0&&(Zl|=l),bt===4&&Sl(t,Z,me,!1)),je(t))}function cf(t,e,l){if((et&6)!==0)throw Error(d(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Ba(t,e),n=a?eg(t,e):Ou(t,e,!0),i=a;do{if(n===0){Ta&&!a&&Sl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!$h(l)){n=Ou(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var u=t;n=mn;var o=u.current.memoizedState.isDehydrated;if(o&&(Ca(u,s).flags|=256),s=Ou(u,s,!1),s!==2){if(Du&&!o){u.errorRecoveryDisabledLanes|=i,Zl|=i,n=4;break t}i=le,le=n,i!==null&&(le===null?le=i:le.push.apply(le,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Ca(t,0),Sl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:Sl(a,e,me,!vl);break t;case 2:le=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=Ai+300-ue(),10<n)){if(Sl(a,e,me,!vl),On(a,0,!0)!==0)break t;el=e,a.timeoutHandle=kf(rf.bind(null,a,l,le,xi,Eu,e,me,Zl,xa,vl,i,"Throttled",-0,0),n);break t}rf(a,l,le,xi,Eu,e,me,Zl,xa,vl,i,null,-0,0)}}break}while(!0);je(t)}function rf(t,e,l,a,n,i,s,u,o,g,b,A,m,v){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ke},ef(e,i,A);var w=(i&62914560)===i?Ai-ue():(i&4194048)===i?sf-ue():0;if(w=Ug(A,w),w!==null){el=i,t.cancelPendingCommit=w(pf.bind(null,t,e,i,l,a,n,s,u,o,b,A,null,m,v)),Sl(t,i,s,!g);return}}pf(t,e,i,l,a,n,s,u,o)}function $h(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!re(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sl(t,e,l,a){e&=~wu,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-ce(n),s=1<<i;a[i]=-1,n&=~s}l!==0&&bo(t,l,e)}function Mi(){return(et&6)===0?(yn(0),!1):!0}function Hu(){if(V!==null){if(ut===0)var t=V.return;else t=V,Qe=Ul=null,Js(t),ma=null,Pa=0,t=V;for(;t!==null;)kr(t.alternate,t),t=t.return;V=null}}function Ca(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,bg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),el=0,Hu(),dt=t,V=l=Ye(t.current,null),Z=e,ut=0,ge=null,vl=!1,Ta=Ba(t,e),Du=!1,xa=me=wu=Zl=yl=bt=0,le=mn=null,Eu=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-ce(a),i=1<<n;e|=t[n],a&=~i}return tl=e,Xn(),l}function ff(t,e){G=null,y.H=un,e===ga||e===$n?(e=Dc(),ut=3):e===_s?(e=Dc(),ut=4):ut=e===ru?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,V===null&&(bt=1,hi(t,xe(e,t.current)))}function df(){var t=de.current;return t===null?!0:(Z&4194048)===Z?we===null:(Z&62914560)===Z||(Z&536870912)!==0?t===we:!1}function hf(){var t=y.H;return y.H=un,t===null?un:t}function gf(){var t=y.A;return y.A=Fh,t}function Ci(){bt=4,vl||(Z&4194048)!==Z&&de.current!==null||(Ta=!0),(yl&134217727)===0&&(Zl&134217727)===0||dt===null||Sl(dt,Z,me,!1)}function Ou(t,e,l){var a=et;et|=2;var n=hf(),i=gf();(dt!==t||Z!==e)&&(xi=null,Ca(t,e)),e=!1;var s=bt;t:do try{if(ut!==0&&V!==null){var u=V,o=ge;switch(ut){case 8:Hu(),s=6;break t;case 3:case 2:case 9:case 6:de.current===null&&(e=!0);var g=ut;if(ut=0,ge=null,Da(t,u,o,g),l&&Ta){s=0;break t}break;default:g=ut,ut=0,ge=null,Da(t,u,o,g)}}tg(),s=bt;break}catch(b){ff(t,b)}while(!0);return e&&t.shellSuspendCounter++,Qe=Ul=null,et=a,y.H=n,y.A=i,V===null&&(dt=null,Z=0,Xn()),s}function tg(){for(;V!==null;)mf(V)}function eg(t,e){var l=et;et|=2;var a=hf(),n=gf();dt!==t||Z!==e?(xi=null,Ti=ue()+500,Ca(t,e)):Ta=Ba(t,e);t:do try{if(ut!==0&&V!==null){e=V;var i=ge;e:switch(ut){case 1:ut=0,ge=null,Da(t,e,i,1);break;case 2:case 9:if(Mc(i)){ut=0,ge=null,vf(e);break}e=function(){ut!==2&&ut!==9||dt!==t||(ut=7),je(t)},i.then(e,e);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:Mc(i)?(ut=0,ge=null,vf(e)):(ut=0,ge=null,Da(t,e,i,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var u=V;if(s?ed(s):u.stateNode.complete){ut=0,ge=null;var o=u.sibling;if(o!==null)V=o;else{var g=u.return;g!==null?(V=g,Di(g)):V=null}break e}}ut=0,ge=null,Da(t,e,i,5);break;case 6:ut=0,ge=null,Da(t,e,i,6);break;case 8:Hu(),bt=6;break t;default:throw Error(d(462))}}lg();break}catch(b){ff(t,b)}while(!0);return Qe=Ul=null,y.H=a,y.A=n,et=l,V!==null?0:(dt=null,Z=0,Xn(),bt)}function lg(){for(;V!==null&&!Cd();)mf(V)}function mf(t){var e=jr(t.alternate,t,tl);t.memoizedProps=t.pendingProps,e===null?Di(t):V=e}function vf(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Hr(l,e,e.pendingProps,e.type,void 0,Z);break;case 11:e=Hr(l,e,e.pendingProps,e.type.render,e.ref,Z);break;case 5:Js(e);default:kr(l,e),e=V=hc(e,tl),e=jr(l,e,tl)}t.memoizedProps=t.pendingProps,e===null?Di(t):V=e}function Da(t,e,l,a){Qe=Ul=null,Js(e),ma=null,Pa=0;var n=e.return;try{if(Qh(t,n,e,l,Z)){bt=1,hi(t,xe(l,t.current)),V=null;return}}catch(i){if(n!==null)throw V=n,i;bt=1,hi(t,xe(l,t.current)),V=null;return}e.flags&32768?(J||a===1?t=!0:Ta||(Z&536870912)!==0?t=!1:(vl=t=!0,(a===2||a===9||a===3||a===6)&&(a=de.current,a!==null&&a.tag===13&&(a.flags|=16384))),yf(e,t)):Di(e)}function Di(t){var e=t;do{if((e.flags&32768)!==0){yf(e,vl);return}t=e.return;var l=Kh(e.alternate,e,tl);if(l!==null){V=l;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);bt===0&&(bt=5)}function yf(t,e){do{var l=Jh(t.alternate,t);if(l!==null){l.flags&=32767,V=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=l}while(t!==null);bt=6,V=null}function pf(t,e,l,a,n,i,s,u,o){t.cancelPendingCommit=null;do wi();while(Rt!==0);if((et&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(i=e.lanes|e.childLanes,i|=As,Bd(t,l,i,s,u,o),t===dt&&(V=dt=null,Z=0),Ma=e,bl=t,el=l,zu=i,Nu=n,uf=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sg(zn,function(){return xf(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,n=C.p,C.p=2,s=et,et|=4;try{Ih(t,e,l)}finally{et=s,C.p=n,y.T=a}}Rt=1,bf(),Sf(),Af()}}function bf(){if(Rt===1){Rt=0;var t=bl,e=Ma,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=y.T,y.T=null;var a=C.p;C.p=2;var n=et;et|=4;try{Pr(e,t);var i=Xu,s=nc(t.containerInfo),u=i.focusedElem,o=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&ac(u.ownerDocument.documentElement,u)){if(o!==null&&vs(u)){var g=o.start,b=o.end;if(b===void 0&&(b=g),"selectionStart"in u)u.selectionStart=g,u.selectionEnd=Math.min(b,u.value.length);else{var A=u.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var v=m.getSelection(),w=u.textContent.length,q=Math.min(o.start,w),ft=o.end===void 0?q:Math.min(o.end,w);!v.extend&&q>ft&&(s=ft,ft=q,q=s);var f=lc(u,q),c=lc(u,ft);if(f&&c&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var h=A.createRange();h.setStart(f.node,f.offset),v.removeAllRanges(),q>ft?(v.addRange(h),v.extend(c.node,c.offset)):(h.setEnd(c.node,c.offset),v.addRange(h))}}}}for(A=[],v=u;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var S=A[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Gi=!!Qu,Xu=Qu=null}finally{et=n,C.p=a,y.T=l}}t.current=e,Rt=2}}function Sf(){if(Rt===2){Rt=0;var t=bl,e=Ma,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=y.T,y.T=null;var a=C.p;C.p=2;var n=et;et|=4;try{Kr(t,e.alternate,e)}finally{et=n,C.p=a,y.T=l}}Rt=3}}function Af(){if(Rt===4||Rt===3){Rt=0,Dd();var t=bl,e=Ma,l=el,a=uf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Rt=5:(Rt=0,Ma=bl=null,Tf(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(pl=null),Fi(l),e=e.stateNode,oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(qa,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=y.T,n=C.p,C.p=2,y.T=null;try{for(var i=t.onRecoverableError,s=0;s<a.length;s++){var u=a[s];i(u.value,{componentStack:u.stack})}}finally{y.T=e,C.p=n}}(el&3)!==0&&wi(),je(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Ru?vn++:(vn=0,Ru=t):vn=0,yn(0)}}function Tf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wa(e)))}function wi(){return bf(),Sf(),Af(),xf()}function xf(){if(Rt!==5)return!1;var t=bl,e=zu;zu=0;var l=Fi(el),a=y.T,n=C.p;try{C.p=32>l?32:l,y.T=null,l=Nu,Nu=null;var i=bl,s=el;if(Rt=0,Ma=bl=null,el=0,(et&6)!==0)throw Error(d(331));var u=et;if(et|=4,af(i.current),tf(i,i.current,s,l),et=u,yn(0,!1),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(qa,i)}catch{}return!0}finally{C.p=n,y.T=a,Tf(t,e)}}function Mf(t,e,l){e=xe(l,e),e=cu(t.stateNode,e,2),t=dl(t,e,2),t!==null&&(_a(t,2),je(t))}function ot(t,e,l){if(t.tag===3)Mf(t,t,l);else for(;e!==null;){if(e.tag===3){Mf(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pl===null||!pl.has(a))){t=xe(l,t),l=Mr(2),a=dl(e,l,2),a!==null&&(Cr(l,a,e,t),_a(a,2),je(a));break}}e=e.return}}function qu(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Ph;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Du=!0,n.add(l),t=ag.bind(null,t,e,l),e.then(t,t))}function ag(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,dt===t&&(Z&l)===l&&(bt===4||bt===3&&(Z&62914560)===Z&&300>ue()-Ai?(et&2)===0&&Ca(t,0):wu|=l,xa===Z&&(xa=0)),je(t)}function Cf(t,e){e===0&&(e=po()),t=ql(t,e),t!==null&&(_a(t,e),je(t))}function ng(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Cf(t,l)}function ig(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),Cf(t,l)}function sg(t,e){return Ki(t,e)}var Ei=null,wa=null,Bu=!1,zi=!1,_u=!1,Al=0;function je(t){t!==wa&&t.next===null&&(wa===null?Ei=wa=t:wa=wa.next=t),zi=!0,Bu||(Bu=!0,og())}function yn(t,e){if(!_u&&zi){_u=!0;do for(var l=!1,a=Ei;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var s=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-ce(42|t)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,zf(a,i))}else i=Z,i=On(a,a===dt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ba(a,i)||(l=!0,zf(a,i));a=a.next}while(l);_u=!1}}function ug(){Df()}function Df(){zi=Bu=!1;var t=0;Al!==0&&pg()&&(t=Al);for(var e=ue(),l=null,a=Ei;a!==null;){var n=a.next,i=wf(a,e);i===0?(a.next=null,l===null?Ei=n:l.next=n,n===null&&(wa=l)):(l=a,(t!==0||(i&3)!==0)&&(zi=!0)),a=n}Rt!==0&&Rt!==5||yn(t),Al!==0&&(Al=0)}function wf(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-ce(i),u=1<<s,o=n[s];o===-1?((u&l)===0||(u&a)!==0)&&(n[s]=qd(u,e)):o<=e&&(t.expiredLanes|=u),i&=~u}if(e=dt,l=Z,l=On(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ji(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ba(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Ji(a),Fi(l)){case 2:case 8:l=vo;break;case 32:l=zn;break;case 268435456:l=yo;break;default:l=zn}return a=Ef.bind(null,t),l=Ki(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Ji(a),t.callbackPriority=2,t.callbackNode=null,2}function Ef(t,e){if(Rt!==0&&Rt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(wi()&&t.callbackNode!==l)return null;var a=Z;return a=On(t,t===dt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(cf(t,a,e),wf(t,ue()),t.callbackNode!=null&&t.callbackNode===l?Ef.bind(null,t):null)}function zf(t,e){if(wi())return null;cf(t,e,!0)}function og(){Sg(function(){(et&6)!==0?Ki(mo,ug):Df()})}function Uu(){if(Al===0){var t=da;t===0&&(t=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),Al=t}return Al}function Nf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Un(""+t)}function Rf(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function cg(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Nf((n[Ft]||null).action),s=a.submitter;s&&(e=(e=s[Ft]||null)?Nf(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var u=new Ln("action","action",null,a,n);t.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Al!==0){var o=s?Rf(n,s):new FormData(n);au(l,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=s?Rf(n,s):new FormData(n),au(l,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var ju=0;ju<Ss.length;ju++){var Gu=Ss[ju],rg=Gu.toLowerCase(),fg=Gu[0].toUpperCase()+Gu.slice(1);Ne(rg,"on"+fg)}Ne(uc,"onAnimationEnd"),Ne(oc,"onAnimationIteration"),Ne(cc,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(wh,"onTransitionRun"),Ne(Eh,"onTransitionStart"),Ne(zh,"onTransitionCancel"),Ne(rc,"onTransitionEnd"),Pl("onMouseEnter",["mouseout","mouseover"]),Pl("onMouseLeave",["mouseout","mouseover"]),Pl("onPointerEnter",["pointerout","pointerover"]),Pl("onPointerLeave",["pointerout","pointerover"]),Nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Hf(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var u=a[s],o=u.instance,g=u.currentTarget;if(u=u.listener,o!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=g;try{i(n)}catch(b){Qn(b)}n.currentTarget=null,i=o}else for(s=0;s<a.length;s++){if(u=a[s],o=u.instance,g=u.currentTarget,u=u.listener,o!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=g;try{i(n)}catch(b){Qn(b)}n.currentTarget=null,i=o}}}}function Q(t,e){var l=e[Pi];l===void 0&&(l=e[Pi]=new Set);var a=t+"__bubble";l.has(a)||(Of(e,t,2,!1),l.add(a))}function ku(t,e,l){var a=0;e&&(a|=4),Of(l,t,a,e)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Lu(t){if(!t[Ni]){t[Ni]=!0,Co.forEach(function(l){l!=="selectionchange"&&(dg.has(l)||ku(l,!1,t),ku(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ni]||(e[Ni]=!0,ku("selectionchange",!1,e))}}function Of(t,e,l,a){switch(od(e)){case 2:var n=kg;break;case 8:n=Lg;break;default:n=lo}l=n.bind(null,e,l,t),n=void 0,!us||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Yu(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var u=a.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=a.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=Il(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){a=i=s;continue t}u=u.parentNode}}a=a.return}Uo(function(){var g=i,b=is(l),A=[];t:{var m=fc.get(t);if(m!==void 0){var v=Ln,w=t;switch(t){case"keypress":if(Gn(l)===0)break t;case"keydown":case"keyup":v=ih;break;case"focusin":w="focus",v=fs;break;case"focusout":w="blur",v=fs;break;case"beforeblur":case"afterblur":v=fs;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=oh;break;case uc:case oc:case cc:v=Wd;break;case rc:v=rh;break;case"scroll":case"scrollend":v=Xd;break;case"wheel":v=dh;break;case"copy":case"cut":case"paste":v=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yo;break;case"toggle":case"beforetoggle":v=gh}var q=(e&4)!==0,ft=!q&&(t==="scroll"||t==="scrollend"),f=q?m!==null?m+"Capture":null:m;q=[];for(var c=g,h;c!==null;){var S=c;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||f===null||(S=Ga(c,f),S!=null&&q.push(bn(c,S,h))),ft)break;c=c.return}0<q.length&&(m=new v(m,w,null,l,b),A.push({event:m,listeners:q}))}}if((e&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&l!==ns&&(w=l.relatedTarget||l.fromElement)&&(Il(w)||w[Jl]))break t;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=l.relatedTarget||l.toElement,v=g,w=w?Il(w):null,w!==null&&(ft=I(w),q=w.tag,w!==ft||q!==5&&q!==27&&q!==6)&&(w=null)):(v=null,w=g),v!==w)){if(q=ko,S="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(q=Yo,S="onPointerLeave",f="onPointerEnter",c="pointer"),ft=v==null?m:ja(v),h=w==null?m:ja(w),m=new q(S,c+"leave",v,l,b),m.target=ft,m.relatedTarget=h,S=null,Il(b)===g&&(q=new q(f,c+"enter",w,l,b),q.target=h,q.relatedTarget=ft,S=q),ft=S,v&&w)e:{for(q=hg,f=v,c=w,h=0,S=f;S;S=q(S))h++;S=0;for(var H=c;H;H=q(H))S++;for(;0<h-S;)f=q(f),h--;for(;0<S-h;)c=q(c),S--;for(;h--;){if(f===c||c!==null&&f===c.alternate){q=f;break e}f=q(f),c=q(c)}q=null}else q=null;v!==null&&qf(A,m,v,q,!1),w!==null&&ft!==null&&qf(A,ft,w,q,!0)}}t:{if(m=g?ja(g):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var $=Wo;else if(Jo(m))if(Fo)$=Mh;else{$=Th;var R=Ah}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?g&&as(g.elementType)&&($=Wo):$=xh;if($&&($=$(t,g))){Io(A,$,l,b);break t}R&&R(t,m,g),t==="focusout"&&g&&m.type==="number"&&g.memoizedProps.value!=null&&ls(m,"number",m.value)}switch(R=g?ja(g):window,t){case"focusin":(Jo(R)||R.contentEditable==="true")&&(na=R,ys=g,Ka=null);break;case"focusout":Ka=ys=na=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,ic(A,l,b);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":ic(A,l,b)}var k;if(hs)t:{switch(t){case"compositionstart":var K="onCompositionStart";break t;case"compositionend":K="onCompositionEnd";break t;case"compositionupdate":K="onCompositionUpdate";break t}K=void 0}else aa?Zo(t,l)&&(K="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(K="onCompositionStart");K&&(Vo&&l.locale!=="ko"&&(aa||K!=="onCompositionStart"?K==="onCompositionEnd"&&aa&&(k=jo()):(il=b,os="value"in il?il.value:il.textContent,aa=!0)),R=Ri(g,K),0<R.length&&(K=new Lo(K,t,null,l,b),A.push({event:K,listeners:R}),k?K.data=k:(k=Ko(l),k!==null&&(K.data=k)))),(k=vh?yh(t,l):ph(t,l))&&(K=Ri(g,"onBeforeInput"),0<K.length&&(R=new Lo("onBeforeInput","beforeinput",null,l,b),A.push({event:R,listeners:K}),R.data=k)),cg(A,t,g,l,b)}Hf(A,e)})}function bn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ri(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ga(t,l),n!=null&&a.unshift(bn(t,n,i)),n=Ga(t,e),n!=null&&a.push(bn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function hg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qf(t,e,l,a,n){for(var i=e._reactName,s=[];l!==null&&l!==a;){var u=l,o=u.alternate,g=u.stateNode;if(u=u.tag,o!==null&&o===a)break;u!==5&&u!==26&&u!==27||g===null||(o=g,n?(g=Ga(l,i),g!=null&&s.unshift(bn(l,g,o))):n||(g=Ga(l,i),g!=null&&s.push(bn(l,g,o)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var gg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Bf(t){return(typeof t=="string"?t:""+t).replace(gg,`
`).replace(mg,"")}function _f(t,e){return e=Bf(e),Bf(t)===e}function rt(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ta(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ta(t,""+a);break;case"className":Bn(t,"class",a);break;case"tabIndex":Bn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(t,l,a);break;case"style":Bo(t,a,i);break;case"data":if(e!=="object"){Bn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Un(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&rt(t,e,"name",n.name,n,null),rt(t,e,"formEncType",n.formEncType,n,null),rt(t,e,"formMethod",n.formMethod,n,null),rt(t,e,"formTarget",n.formTarget,n,null)):(rt(t,e,"encType",n.encType,n,null),rt(t,e,"method",n.method,n,null),rt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Un(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=ke);break;case"onScroll":a!=null&&Q("scroll",t);break;case"onScrollEnd":a!=null&&Q("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Un(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Q("beforetoggle",t),Q("toggle",t),qn(t,"popover",a);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Vd.get(l)||l,qn(t,l,a))}}function Vu(t,e,l,a,n,i){switch(l){case"style":Bo(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"children":typeof a=="string"?ta(t,a):(typeof a=="number"||typeof a=="bigint")&&ta(t,""+a);break;case"onScroll":a!=null&&Q("scroll",t);break;case"onScrollEnd":a!=null&&Q("scrollend",t);break;case"onClick":a!=null&&(t.onclick=ke);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Ft]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):qn(t,l,a)}}}function Vt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",t),Q("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:rt(t,e,i,s,l,null)}}n&&rt(t,e,"srcSet",l.srcSet,l,null),a&&rt(t,e,"src",l.src,l,null);return;case"input":Q("invalid",t);var u=i=s=n=null,o=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":s=b;break;case"checked":o=b;break;case"defaultChecked":g=b;break;case"value":i=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:rt(t,e,a,b,l,null)}}Ro(t,i,u,o,g,s,n,!1);return;case"select":Q("invalid",t),a=s=i=null;for(n in l)if(l.hasOwnProperty(n)&&(u=l[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":a=u;default:rt(t,e,n,u,l,null)}e=i,l=s,t.multiple=!!a,e!=null?$l(t,!!a,e,!1):l!=null&&$l(t,!!a,l,!0);return;case"textarea":Q("invalid",t),i=n=a=null;for(s in l)if(l.hasOwnProperty(s)&&(u=l[s],u!=null))switch(s){case"value":a=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:rt(t,e,s,u,l,null)}Oo(t,a,n,i);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:rt(t,e,o,a,l,null)}return;case"dialog":Q("beforetoggle",t),Q("toggle",t),Q("cancel",t),Q("close",t);break;case"iframe":case"object":Q("load",t);break;case"video":case"audio":for(a=0;a<pn.length;a++)Q(pn[a],t);break;case"image":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"embed":case"source":case"link":Q("error",t),Q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:rt(t,e,g,a,l,null)}return;default:if(as(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&Vu(t,e,b,a,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(a=l[u],a!=null&&rt(t,e,u,a,l,null))}function vg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,o=null,g=null,b=null;for(v in l){var A=l[v];if(l.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=A;default:a.hasOwnProperty(v)||rt(t,e,v,null,a,A)}}for(var m in a){var v=a[m];if(A=l[m],a.hasOwnProperty(m)&&(v!=null||A!=null))switch(m){case"type":i=v;break;case"name":n=v;break;case"checked":g=v;break;case"defaultChecked":b=v;break;case"value":s=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,e));break;default:v!==A&&rt(t,e,m,v,a,A)}}es(t,s,u,o,g,b,i,n);return;case"select":v=s=u=m=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":v=o;default:a.hasOwnProperty(i)||rt(t,e,i,null,a,o)}for(n in a)if(i=a[n],o=l[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":m=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==o&&rt(t,e,n,i,a,o)}e=u,l=s,a=v,m!=null?$l(t,!!l,m,!1):!!a!=!!l&&(e!=null?$l(t,!!l,e,!0):$l(t,!!l,l?[]:"",!1));return;case"textarea":v=m=null;for(u in l)if(n=l[u],l.hasOwnProperty(u)&&n!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:rt(t,e,u,null,a,n)}for(s in a)if(n=a[s],i=l[s],a.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":m=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&rt(t,e,s,n,a,i)}Ho(t,m,v);return;case"option":for(var w in l)if(m=l[w],l.hasOwnProperty(w)&&m!=null&&!a.hasOwnProperty(w))switch(w){case"selected":t.selected=!1;break;default:rt(t,e,w,null,a,m)}for(o in a)if(m=a[o],v=l[o],a.hasOwnProperty(o)&&m!==v&&(m!=null||v!=null))switch(o){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:rt(t,e,o,m,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)m=l[q],l.hasOwnProperty(q)&&m!=null&&!a.hasOwnProperty(q)&&rt(t,e,q,null,a,m);for(g in a)if(m=a[g],v=l[g],a.hasOwnProperty(g)&&m!==v&&(m!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(d(137,e));break;default:rt(t,e,g,m,a,v)}return;default:if(as(e)){for(var ft in l)m=l[ft],l.hasOwnProperty(ft)&&m!==void 0&&!a.hasOwnProperty(ft)&&Vu(t,e,ft,void 0,a,m);for(b in a)m=a[b],v=l[b],!a.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Vu(t,e,b,m,a,v);return}}for(var f in l)m=l[f],l.hasOwnProperty(f)&&m!=null&&!a.hasOwnProperty(f)&&rt(t,e,f,null,a,m);for(A in a)m=a[A],v=l[A],!a.hasOwnProperty(A)||m===v||m==null&&v==null||rt(t,e,A,m,a,v)}function Uf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&Uf(s)){for(s=0,u=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],g=o.startTime;if(g>u)break;var b=o.transferSize,A=o.initiatorType;b&&Uf(A)&&(o=o.responseEnd,s+=b*(o<u?1:(u-g)/(o-g)))}if(--a,e+=8*(i+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qu=null,Xu=null;function Hi(t){return t.nodeType===9?t:t.ownerDocument}function jf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gf(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=null;function pg(){var t=window.event;return t&&t.type==="popstate"?t===Ku?!1:(Ku=t,!0):(Ku=null,!1)}var kf=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(t){return Lf.resolve(null).then(t).catch(Ag)}:kf;function Ag(t){setTimeout(function(){throw t})}function Tl(t){return t==="head"}function Yf(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Ra(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Sn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Sn(l);for(var i=l.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Ua]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=s}}else l==="body"&&Sn(t.ownerDocument.body);l=n}while(l);Ra(e)}function Vf(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Ju(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ju(l),$i(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Tg(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ee(t.nextSibling),t===null)break}return null}function xg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ee(t.nextSibling),t===null))return null;return t}function Qf(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ee(t.nextSibling),t===null))return null;return t}function Iu(t){return t.data==="$?"||t.data==="$~"}function Wu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Mg(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fu=null;function Xf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ee(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Kf(t,e,l){switch(e=Hi(l),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function Sn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$i(t)}var ze=new Map,Jf=new Set;function Oi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ll=C.d;C.d={f:Cg,r:Dg,D:wg,C:Eg,L:zg,m:Ng,X:Hg,S:Rg,M:Og};function Cg(){var t=ll.f(),e=Mi();return t||e}function Dg(t){var e=Wl(t);e!==null&&e.tag===5&&e.type==="form"?rr(e):ll.r(t)}var Ea=typeof document>"u"?null:document;function If(t,e,l){var a=Ea;if(a&&typeof e=="string"&&e){var n=Ae(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Jf.has(n)||(Jf.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Vt(e,"link",t),Ot(e),a.head.appendChild(e)))}}function wg(t){ll.D(t),If("dns-prefetch",t,null)}function Eg(t,e){ll.C(t,e),If("preconnect",t,e)}function zg(t,e,l){ll.L(t,e,l);var a=Ea;if(a&&t&&e){var n='link[rel="preload"][as="'+Ae(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Ae(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Ae(l.imageSizes)+'"]')):n+='[href="'+Ae(t)+'"]';var i=n;switch(e){case"style":i=za(t);break;case"script":i=Na(t)}ze.has(i)||(t=O({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),ze.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(An(i))||e==="script"&&a.querySelector(Tn(i))||(e=a.createElement("link"),Vt(e,"link",t),Ot(e),a.head.appendChild(e)))}}function Ng(t,e){ll.m(t,e);var l=Ea;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Ae(a)+'"][href="'+Ae(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Na(t)}if(!ze.has(i)&&(t=O({rel:"modulepreload",href:t},e),ze.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Tn(i)))return}a=l.createElement("link"),Vt(a,"link",t),Ot(a),l.head.appendChild(a)}}}function Rg(t,e,l){ll.S(t,e,l);var a=Ea;if(a&&t){var n=Fl(a).hoistableStyles,i=za(t);e=e||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=a.querySelector(An(i)))u.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},l),(l=ze.get(i))&&Pu(t,l);var o=s=a.createElement("link");Ot(o),Vt(o,"link",t),o._p=new Promise(function(g,b){o.onload=g,o.onerror=b}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,qi(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function Hg(t,e){ll.X(t,e);var l=Ea;if(l&&t){var a=Fl(l).hoistableScripts,n=Na(t),i=a.get(n);i||(i=l.querySelector(Tn(n)),i||(t=O({src:t,async:!0},e),(e=ze.get(n))&&$u(t,e),i=l.createElement("script"),Ot(i),Vt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Og(t,e){ll.M(t,e);var l=Ea;if(l&&t){var a=Fl(l).hoistableScripts,n=Na(t),i=a.get(n);i||(i=l.querySelector(Tn(n)),i||(t=O({src:t,async:!0,type:"module"},e),(e=ze.get(n))&&$u(t,e),i=l.createElement("script"),Ot(i),Vt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Wf(t,e,l,a){var n=(n=L.current)?Oi(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=za(l.href),l=Fl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=za(l.href);var i=Fl(n).hoistableStyles,s=i.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=n.querySelector(An(t)))&&!i._p&&(s.instance=i,s.state.loading=5),ze.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ze.set(t,l),i||qg(n,t,l,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Na(l),l=Fl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function za(t){return'href="'+Ae(t)+'"'}function An(t){return'link[rel="stylesheet"]['+t+"]"}function Ff(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function qg(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Vt(e,"link",l),Ot(e),t.head.appendChild(e))}function Na(t){return'[src="'+Ae(t)+'"]'}function Tn(t){return"script[async]"+t}function Pf(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ae(l.href)+'"]');if(a)return e.instance=a,Ot(a),a;var n=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ot(a),Vt(a,"style",n),qi(a,l.precedence,t),e.instance=a;case"stylesheet":n=za(l.href);var i=t.querySelector(An(n));if(i)return e.state.loading|=4,e.instance=i,Ot(i),i;a=Ff(l),(n=ze.get(n))&&Pu(a,n),i=(t.ownerDocument||t).createElement("link"),Ot(i);var s=i;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),Vt(i,"link",a),e.state.loading|=4,qi(i,l.precedence,t),e.instance=i;case"script":return i=Na(l.src),(n=t.querySelector(Tn(i)))?(e.instance=n,Ot(n),n):(a=l,(n=ze.get(i))&&(a=O({},l),$u(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ot(n),Vt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,qi(a,l.precedence,t));return e.instance}function qi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,s=0;s<a.length;s++){var u=a[s];if(u.dataset.precedence===e)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Pu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $u(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Bi=null;function $f(t,e,l){if(Bi===null){var a=new Map,n=Bi=new Map;n.set(l,a)}else n=Bi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Ua]||i[Gt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var u=a.get(s);u?u.push(i):a.set(s,[i])}}return a}function td(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Bg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ed(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _g(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=za(a.href),i=e.querySelector(An(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=_i.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Ot(i);return}i=e.ownerDocument||e,a=Ff(a),(n=ze.get(n))&&Pu(a,n),i=i.createElement("link"),Ot(i);var s=i;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),Vt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=_i.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var to=0;function Ug(t,e){return t.stylesheets&&t.count===0&&ji(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&ji(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&to===0&&(to=62500*yg());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ji(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>to?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function _i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ji(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ui=null;function ji(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ui=new Map,e.forEach(jg,t),Ui=null,_i.call(t))}function jg(t,e){if(!(e.state.loading&4)){var l=Ui.get(t);if(l)var a=l.get(null);else{l=new Map,Ui.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}n=e.instance,s=n.getAttribute("data-precedence"),i=l.get(s)||a,i===a&&l.set(null,n),l.set(s,n),this.count++,a=_i.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var xn={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Gg(t,e,l,a,n,i,s,u,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ld(t,e,l,a,n,i,s,u,o,g,b,A){return t=new Gg(t,e,l,s,o,g,b,A,u),e=1,i===!0&&(e|=24),i=fe(3,null,null,e),t.current=i,i.stateNode=t,e=Os(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Us(i),t}function ad(t){return t?(t=ua,t):ua}function nd(t,e,l,a,n,i){n=ad(n),a.context===null?a.context=n:a.pendingContext=n,a=fl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=dl(t,a,e),l!==null&&(ae(l,t,e),tn(l,t,e))}function id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function eo(t,e){id(t,e),(t=t.alternate)&&id(t,e)}function sd(t){if(t.tag===13||t.tag===31){var e=ql(t,67108864);e!==null&&ae(e,t,67108864),eo(t,67108864)}}function ud(t){if(t.tag===13||t.tag===31){var e=ve();e=Wi(e);var l=ql(t,e);l!==null&&ae(l,t,e),eo(t,e)}}var Gi=!0;function kg(t,e,l,a){var n=y.T;y.T=null;var i=C.p;try{C.p=2,lo(t,e,l,a)}finally{C.p=i,y.T=n}}function Lg(t,e,l,a){var n=y.T;y.T=null;var i=C.p;try{C.p=8,lo(t,e,l,a)}finally{C.p=i,y.T=n}}function lo(t,e,l,a){if(Gi){var n=ao(a);if(n===null)Yu(t,e,a,ki,l),cd(t,a);else if(Vg(n,t,e,l,a))a.stopPropagation();else if(cd(t,a),e&4&&-1<Yg.indexOf(t)){for(;n!==null;){var i=Wl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=zl(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-ce(s);u.entanglements[1]|=o,s&=~o}je(i),(et&6)===0&&(Ti=ue()+500,yn(0))}}break;case 31:case 13:u=ql(i,2),u!==null&&ae(u,i,2),Mi(),eo(i,2)}if(i=ao(a),i===null&&Yu(t,e,a,ki,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Yu(t,e,a,null,l)}}function ao(t){return t=is(t),no(t)}var ki=null;function no(t){if(ki=null,t=Il(t),t!==null){var e=I(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=W(e),t!==null)return t;t=null}else if(l===31){if(t=Tt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ki=t,null}function od(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wd()){case mo:return 2;case vo:return 8;case zn:case Ed:return 32;case yo:return 268435456;default:return 32}default:return 32}}var io=!1,xl=null,Ml=null,Cl=null,Mn=new Map,Cn=new Map,Dl=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(t,e){switch(t){case"focusin":case"focusout":xl=null;break;case"dragenter":case"dragleave":Ml=null;break;case"mouseover":case"mouseout":Cl=null;break;case"pointerover":case"pointerout":Mn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(e.pointerId)}}function Dn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Wl(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Vg(t,e,l,a,n){switch(e){case"focusin":return xl=Dn(xl,t,e,l,a,n),!0;case"dragenter":return Ml=Dn(Ml,t,e,l,a,n),!0;case"mouseover":return Cl=Dn(Cl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Mn.set(i,Dn(Mn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,Dn(Cn.get(i)||null,t,e,l,a,n)),!0}return!1}function rd(t){var e=Il(t.target);if(e!==null){var l=I(e);if(l!==null){if(e=l.tag,e===13){if(e=W(l),e!==null){t.blockedOn=e,xo(t.priority,function(){ud(l)});return}}else if(e===31){if(e=Tt(l),e!==null){t.blockedOn=e,xo(t.priority,function(){ud(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Li(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=ao(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ns=a,l.target.dispatchEvent(a),ns=null}else return e=Wl(l),e!==null&&sd(e),t.blockedOn=l,!1;e.shift()}return!0}function fd(t,e,l){Li(t)&&l.delete(e)}function Qg(){io=!1,xl!==null&&Li(xl)&&(xl=null),Ml!==null&&Li(Ml)&&(Ml=null),Cl!==null&&Li(Cl)&&(Cl=null),Mn.forEach(fd),Cn.forEach(fd)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,io||(io=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Qg)))}var Vi=null;function dd(t){Vi!==t&&(Vi=t,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Vi===t&&(Vi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(no(a||l)===null)continue;break}var i=Wl(l);i!==null&&(t.splice(e,3),e-=3,au(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ra(t){function e(o){return Yi(o,t)}xl!==null&&Yi(xl,t),Ml!==null&&Yi(Ml,t),Cl!==null&&Yi(Cl,t),Mn.forEach(e),Cn.forEach(e);for(var l=0;l<Dl.length;l++){var a=Dl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Dl.length&&(l=Dl[0],l.blockedOn===null);)rd(l),l.blockedOn===null&&Dl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],s=n[Ft]||null;if(typeof i=="function")s||dd(l);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[Ft]||null)u=s.formAction;else if(no(n)!==null)continue}else u=s.action;typeof u=="function"?l[a+1]=u:(l.splice(a,3),a-=3),dd(l)}}}function hd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function so(t){this._internalRoot=t}Qi.prototype.render=so.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var l=e.current,a=ve();nd(l,a,t,e,null,null)},Qi.prototype.unmount=so.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nd(t.current,2,null,t,null,null),Mi(),e[Jl]=null}};function Qi(t){this._internalRoot=t}Qi.prototype.unstable_scheduleHydration=function(t){if(t){var e=To();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Dl.length&&e!==0&&e<Dl[l].priority;l++);Dl.splice(l,0,t),l===0&&rd(t)}};var gd=ht.version;if(gd!=="19.2.0")throw Error(d(527,gd,"19.2.0"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=x(e),t=t!==null?X(t):null,t=t===null?null:t.stateNode,t};var Xg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{qa=Xi.inject(Xg),oe=Xi}catch{}}return En.createRoot=function(t,e){if(!j(t))throw Error(d(299));var l=!1,a="",n=Sr,i=Ar,s=Tr;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ld(t,1,!1,null,null,l,a,null,n,i,s,hd),t[Jl]=e.current,Lu(t),new so(e)},En.hydrateRoot=function(t,e,l){if(!j(t))throw Error(d(299));var a=!1,n="",i=Sr,s=Ar,u=Tr,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),e=ld(t,1,!0,e,l??null,a,n,o,i,s,u,hd),e.context=ad(null),l=e.current,a=ve(),a=Wi(a),n=fl(a),n.callback=null,dl(l,n,a),l=a,e.current.lanes=l,_a(e,l),je(e),t[Jl]=e.current,Lu(t),new Qi(e)},En.version="19.2.0",En}var Md;function em(){if(Md)return co.exports;Md=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(ht){console.error(ht)}}return z(),co.exports=tm(),co.exports}var lm=em();const am=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundation of Mobile Computing, distinguishing it from general wireless networking. It covers the essential 3-Tier architecture used in mobile apps and provides a comprehensive deep-dive into the Global System for Mobile Communications (GSM), the standard that defined modern cellular networks.</p>",topics:[{title:"Introduction to Mobile Computing",content:`
          <div class="study-guide-box">
            <h4>1. Definition & Core Concepts</h4>
            <div class="definition-box">
              <strong>Mobile Computing:</strong> A technology paradigm that allows transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link. It focuses on the ability to compute while moving.
            </div>
            
            <h5>The Three Dimensions of Mobile Computing:</h5>
            <ul>
              <li><strong>Ubiquity:</strong> The ability to access information and services from anywhere, at any time. The user is not tied to a specific location.</li>
              <li><strong>Convenience:</strong> Devices are portable, lightweight, and designed for easy interaction, allowing users to carry their "office" with them.</li>
              <li><strong>Connectivity:</strong> Continuous access to the network (Internet/Intranet) regardless of movement, ensuring real-time data availability.</li>
            </ul>

            <h4>2. Mobile Computing vs. Wireless Networking</h4>
            <p>While often used interchangeably, they are distinct concepts:</p>
            <table class="comparison-table">
              <tr>
                <th>Feature</th>
                <th>Mobile Computing</th>
                <th>Wireless Networking</th>
              </tr>
              <tr>
                <td><strong>Primary Focus</strong></td>
                <td><strong>Computing while moving.</strong> Focuses on the applications, user experience, and data access on portable devices.</td>
                <td><strong>Communication without wires.</strong> Focuses on the physical infrastructure (radio waves, routers) that replaces cables.</td>
              </tr>
              <tr>
                <td><strong>Dependency</strong></td>
                <td>Relies on wireless networking as a transport medium.</td>
                <td>Can exist without mobile computing (e.g., a fixed desktop connected via Wi-Fi).</td>
              </tr>
              <tr>
                <td><strong>Key Challenges</strong></td>
                <td>Battery life, screen size, user interface, variable bandwidth, mobility management.</td>
                <td>Signal interference, spectrum allocation, data rate, coverage area.</td>
              </tr>
              <tr>
                <td><strong>Example</strong></td>
                <td>Checking email on a smartphone while riding a train.</td>
                <td>Connecting a printer to a router using Wi-Fi.</td>
              </tr>
            </table>
          </div>
        `},{title:"Architecture of Mobile Computing",content:`
          <div class="study-guide-box">
            <h4>The 3-Tier Architecture</h4>
            <p>Modern mobile applications are rarely standalone; they interact with remote servers. The 3-Tier Architecture is the industry standard for designing scalable and secure mobile systems.</p>
            
            <!-- 3-Tier Architecture Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #f8f9fa; border-radius: 8px;">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#555" />
                  </marker>
                </defs>
                
                <!-- Tier 1 -->
                <rect x="50" y="50" width="150" height="200" rx="10" fill="#e3f2fd" stroke="#1e88e5" stroke-width="2"/>
                <text x="125" y="80" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#0d47a1">Tier 1</text>
                <text x="125" y="105" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#1565c0">Presentation</text>
                <text x="125" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Mobile Device</text>
                <text x="125" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">(UI / Browser)</text>

                <!-- Arrow 1-2 -->
                <line x1="200" y1="150" x2="300" y2="150" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="250" y="140" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#666">HTTP/Request</text>

                <!-- Tier 2 -->
                <rect x="300" y="50" width="150" height="200" rx="10" fill="#fff3e0" stroke="#fb8c00" stroke-width="2"/>
                <text x="375" y="80" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#e65100">Tier 2</text>
                <text x="375" y="105" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#ef6c00">Application</text>
                <text x="375" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Web Server</text>
                <text x="375" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">(Business Logic)</text>

                <!-- Arrow 2-3 -->
                <line x1="450" y1="150" x2="550" y2="150" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="500" y="140" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#666">SQL/Query</text>

                <!-- Tier 3 -->
                <rect x="550" y="50" width="150" height="200" rx="10" fill="#e8f5e9" stroke="#43a047" stroke-width="2"/>
                <text x="625" y="80" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#1b5e20">Tier 3</text>
                <text x="625" y="105" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#2e7d32">Data</text>
                <text x="625" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Database</text>
                <text x="625" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">(Storage)</text>
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Tier 1: Presentation Tier (Client)</h5>
                <p><strong>Location:</strong> Runs on the mobile device (Smartphone, Tablet).</p>
                <p><strong>Responsibilities:</strong> UI, Input Capture, Basic Validation.</p>
              </div>
              <div class="concept-card">
                <h5>Tier 2: Application Tier (Server)</h5>
                <p><strong>Location:</strong> Remote server.</p>
                <p><strong>Responsibilities:</strong> Business Logic, Decision Making, Security.</p>
              </div>
              <div class="concept-card">
                <h5>Tier 3: Data Tier (Database)</h5>
                <p><strong>Location:</strong> Database server.</p>
                <p><strong>Responsibilities:</strong> Data Storage, Retrieval, Integrity.</p>
              </div>
            </div>
          </div>
        `},{title:"GSM Architecture",content:`
          <div class="study-guide-box">
            <h4>Global System for Mobile Communications (GSM)</h4>
            <p>GSM is the standard that created the second generation (2G) of mobile networks. Its modular architecture is the blueprint for modern cellular systems.</p>
            
            <!-- GSM Architecture Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff; border: 1px solid #ddd; border-radius: 8px;">
                <defs>
                  <marker id="arrowhead-gsm" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                  </marker>
                </defs>

                <!-- MS -->
                <rect x="20" y="150" width="80" height="100" rx="5" fill="#e1bee7" stroke="#8e24aa" stroke-width="2" />
                <text x="60" y="205" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#4a148c">MS</text>
                
                <!-- Um Interface -->
                <line x1="100" y1="200" x2="160" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-gsm)" />
                <text x="130" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#555">Um</text>

                <!-- BSS Area -->
                <rect x="160" y="100" width="200" height="200" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5" />
                <text x="260" y="120" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#666">BSS</text>
                
                <rect x="180" y="150" width="60" height="100" rx="5" fill="#bbdefb" stroke="#1976d2" stroke-width="2" />
                <text x="210" y="205" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0d47a1">BTS</text>
                
                <line x1="240" y1="200" x2="280" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-gsm)" />
                
                <rect x="280" y="150" width="60" height="100" rx="5" fill="#bbdefb" stroke="#1976d2" stroke-width="2" />
                <text x="310" y="205" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0d47a1">BSC</text>

                <!-- A Interface -->
                <line x1="340" y1="200" x2="400" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-gsm)" />
                <text x="370" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#555">A-Int</text>

                <!-- NSS Area -->
                <rect x="400" y="50" width="380" height="300" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5" />
                <text x="590" y="70" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#666">NSS (Core Network)</text>

                <rect x="420" y="150" width="80" height="100" rx="5" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" />
                <text x="460" y="205" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1b5e20">MSC</text>

                <!-- Databases -->
                <g transform="translate(550, 100)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#fff9c4" stroke="#fbc02d" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#f57f17">HLR</text>
                </g>
                <g transform="translate(550, 160)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#fff9c4" stroke="#fbc02d" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#f57f17">VLR</text>
                </g>
                <g transform="translate(550, 220)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#ffccbc" stroke="#d84315" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#bf360c">AuC</text>
                </g>
                <g transform="translate(550, 280)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#cfd8dc" stroke="#455a64" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#263238">EIR</text>
                </g>

                <!-- Connections -->
                <line x1="500" y1="200" x2="550" y2="120" stroke="#999" stroke-width="1" />
                <line x1="500" y1="200" x2="550" y2="180" stroke="#999" stroke-width="1" />
                <line x1="500" y1="200" x2="550" y2="240" stroke="#999" stroke-width="1" />
                <line x1="500" y1="200" x2="550" y2="300" stroke="#999" stroke-width="1" />

              </svg>
            </div>

            <div class="deep-dive-box">
              <h4>1. Mobile Station (MS)</h4>
              <p><strong>ME (Mobile Equipment):</strong> The phone hardware (IMEI).<br/><strong>SIM (Subscriber Identity Module):</strong> The smart card (IMSI, Ki).</p>
            </div>

            <div class="deep-dive-box">
              <h4>2. Base Station Subsystem (BSS)</h4>
              <p><strong>BTS (Base Transceiver Station):</strong> The radio tower.<br/><strong>BSC (Base Station Controller):</strong> Manages radio resources and handovers.</p>
            </div>

            <div class="deep-dive-box">
              <h4>3. Network Switching Subsystem (NSS)</h4>
              <p><strong>MSC:</strong> Call routing switch.<br/><strong>HLR:</strong> Permanent user database.<br/><strong>VLR:</strong> Temporary roaming database.<br/><strong>AuC:</strong> Security keys.<br/><strong>EIR:</strong> Stolen phone list.</p>
            </div>
          </div>
        `},{title:"GSM Call Routing",content:`
          <div class="study-guide-box">
            <h4>How a Call is Connected</h4>
            
            <!-- Mobile Terminating Call Flowchart -->
            <div class="diagram-container">
              <h5 style="text-align:center; margin-bottom: 10px;">Mobile Terminating (MT) Call Flow</h5>
              <svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #f0f4c3; border-radius: 8px;">
                 <defs>
                  <marker id="arrowhead-flow" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                  </marker>
                </defs>

                <!-- Steps -->
                <g transform="translate(20, 100)">
                  <rect width="100" height="50" rx="5" fill="#fff" stroke="#333" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">1. PSTN Call</text>
                </g>
                <line x1="120" y1="125" x2="150" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(150, 100)">
                  <rect width="100" height="50" rx="5" fill="#c8e6c9" stroke="#2e7d32" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">2. GMSC</text>
                </g>
                <line x1="250" y1="125" x2="280" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(280, 100)">
                  <rect width="100" height="50" rx="5" fill="#fff9c4" stroke="#fbc02d" />
                  <text x="50" y="20" font-size="10" text-anchor="middle">3. HLR Query</text>
                  <text x="50" y="40" font-size="10" text-anchor="middle">(Get MSRN)</text>
                </g>
                <line x1="380" y1="125" x2="410" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(410, 100)">
                  <rect width="100" height="50" rx="5" fill="#c8e6c9" stroke="#2e7d32" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">4. Visited MSC</text>
                </g>
                <line x1="510" y1="125" x2="540" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(540, 100)">
                  <rect width="100" height="50" rx="5" fill="#bbdefb" stroke="#1565c0" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">5. Paging (BSS)</text>
                </g>
                <line x1="640" y1="125" x2="670" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(670, 100)">
                  <rect width="100" height="50" rx="5" fill="#e1bee7" stroke="#6a1b9a" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">6. Mobile Rings</text>
                </g>
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Mobile Originating (MO) Call</h5>
                <ol>
                  <li><strong>Request:</strong> MS -> BSS -> MSC.</li>
                  <li><strong>Auth:</strong> MSC checks VLR/AuC.</li>
                  <li><strong>Setup:</strong> MSC routes to PSTN.</li>
                  <li><strong>Connect:</strong> Voice path established.</li>
                </ol>
              </div>
              <div class="concept-card">
                <h5>Mobile Terminating (MT) Call</h5>
                <ol>
                  <li><strong>Entry:</strong> Call hits GMSC.</li>
                  <li><strong>Locate:</strong> GMSC asks HLR. HLR asks VLR.</li>
                  <li><strong>MSRN:</strong> VLR gives MSRN to HLR -> GMSC.</li>
                  <li><strong>Route:</strong> GMSC routes to current MSC.</li>
                  <li><strong>Page:</strong> MSC pages MS.</li>
                </ol>
              </div>
            </div>
          </div>
        `}]},{unit:"II",title:"Wireless Medium Access Control and Mobile Network Layer",notes:"<h3>Unit II Overview</h3><p>This unit explores the challenges of sharing the wireless medium (MAC Layer) and the complex problem of maintaining an IP address while moving across different networks (Mobile IP).</p>",topics:[{title:"Medium Access Control (MAC)",content:`
          <div class="study-guide-box">
            <h4>The Hidden Terminal Problem</h4>
            
            <!-- Hidden Terminal Diagram -->
            <div class="diagram-container">
               <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff; border: 1px solid #eee; border-radius: 8px;">
                <!-- Range Circles -->
                <circle cx="100" cy="100" r="90" fill="rgba(33, 150, 243, 0.1)" stroke="#2196f3" stroke-dasharray="4" />
                <circle cx="500" cy="100" r="90" fill="rgba(244, 67, 54, 0.1)" stroke="#f44336" stroke-dasharray="4" />
                
                <!-- Nodes -->
                <circle cx="100" cy="100" r="20" fill="#2196f3" />
                <text x="100" y="105" fill="white" text-anchor="middle" font-weight="bold">A</text>
                
                <circle cx="300" cy="100" r="20" fill="#4caf50" />
                <text x="300" y="105" fill="white" text-anchor="middle" font-weight="bold">B</text>
                
                <circle cx="500" cy="100" r="20" fill="#f44336" />
                <text x="500" y="105" fill="white" text-anchor="middle" font-weight="bold">C</text>

                <!-- Labels -->
                <text x="100" y="180" text-anchor="middle" font-size="12">Range of A</text>
                <text x="500" y="180" text-anchor="middle" font-size="12">Range of C</text>
                <text x="300" y="50" text-anchor="middle" font-size="14" font-weight="bold">Collision at B!</text>
                <text x="300" y="150" text-anchor="middle" font-size="12" fill="#666">A and C cannot see each other.</text>
               </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Hidden Terminal Problem</h5>
                <p><strong>Scenario:</strong> A and C want to send to B. A and C are far apart.</p>
                <p><strong>Issue:</strong> A transmits. C checks medium, hears silence (can't hear A), and transmits. <strong>Collision at B!</strong></p>
                <p><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send).</p>
              </div>
              <div class="concept-card">
                <h5>Exposed Terminal Problem</h5>
                <p><strong>Scenario:</strong> B sends to A. C wants to send to D.</p>
                <p><strong>Issue:</strong> C hears B and waits unnecessarily.</p>
                <p><strong>Result:</strong> Wasted bandwidth.</p>
              </div>
            </div>
          </div>
        `},{title:"Multiplexing Techniques",content:`
          <div class="study-guide-box">
            <h4>Sharing the Spectrum</h4>
            <table class="comparison-table">
              <tr><th>Technique</th><th>Concept</th><th>Analogy</th></tr>
              <tr><td><strong>SDMA</strong></td><td>Space Division.</td><td>Separate rooms.</td></tr>
              <tr><td><strong>FDMA</strong></td><td>Frequency Division.</td><td>Radio stations.</td></tr>
              <tr><td><strong>TDMA</strong></td><td>Time Division.</td><td>Taking turns speaking.</td></tr>
              <tr><td><strong>CDMA</strong></td><td>Code Division.</td><td>Different languages.</td></tr>
            </table>
          </div>
        `},{title:"Mobile IP",content:`
          <div class="study-guide-box">
            <h4>Mobile IP Architecture</h4>
            
            <!-- Mobile IP Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #e0f7fa; border-radius: 8px;">
                <defs>
                  <marker id="arrowhead-mip" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#006064" />
                  </marker>
                </defs>

                <!-- Home Network -->
                <rect x="50" y="50" width="200" height="200" rx="10" fill="#fff" stroke="#00bcd4" stroke-dasharray="5,5" />
                <text x="150" y="70" text-anchor="middle" fill="#00bcd4" font-weight="bold">Home Network</text>
                
                <rect x="100" y="100" width="100" height="60" rx="5" fill="#00bcd4" />
                <text x="150" y="135" text-anchor="middle" fill="white" font-weight="bold">HA (Home Agent)</text>

                <!-- Foreign Network -->
                <rect x="550" y="50" width="200" height="200" rx="10" fill="#fff" stroke="#ff9800" stroke-dasharray="5,5" />
                <text x="650" y="70" text-anchor="middle" fill="#ff9800" font-weight="bold">Foreign Network</text>
                
                <rect x="600" y="100" width="100" height="60" rx="5" fill="#ff9800" />
                <text x="650" y="135" text-anchor="middle" fill="white" font-weight="bold">FA (Foreign Agent)</text>

                <!-- MN -->
                <circle cx="650" cy="210" r="20" fill="#9c27b0" />
                <text x="650" y="245" text-anchor="middle" fill="#9c27b0" font-weight="bold">MN</text>

                <!-- Internet/Tunnel -->
                <path d="M 200 130 Q 400 50 600 130" stroke="#006064" stroke-width="4" fill="none" stroke-dasharray="10,5" marker-end="url(#arrowhead-mip)" />
                <text x="400" y="80" text-anchor="middle" fill="#006064" font-weight="bold">Tunnel</text>

                <!-- CN -->
                <rect x="350" y="220" width="100" height="50" rx="5" fill="#607d8b" />
                <text x="400" y="250" text-anchor="middle" fill="white">CN (Sender)</text>
                
                <!-- CN to HA -->
                <line x1="350" y1="245" x2="150" y2="160" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-mip)" />
                <text x="250" y="220" text-anchor="middle" font-size="12">1. Packet to Home IP</text>

              </svg>
            </div>

            <div class="definition-box">
              <h5>Key Entities</h5>
              <ul>
                <li><strong>HA (Home Agent):</strong> Intercepts packets on home network.</li>
                <li><strong>FA (Foreign Agent):</strong> Receives tunneled packets on visited network.</li>
                <li><strong>CoA (Care-of Address):</strong> Temporary address at FA.</li>
                <li><strong>Tunneling:</strong> Encapsulating packet inside another packet to route it to CoA.</li>
              </ul>
            </div>
          </div>
        `}]},{unit:"III",title:"Mobile Transport Layer",notes:"<h3>Unit III Overview</h3><p>Standard TCP performs poorly in wireless. This unit covers solutions like I-TCP and Snooping TCP.</p>",topics:[{title:"Traditional TCP Issues",content:`
          <div class="study-guide-box">
            <h4>The "Congestion" Assumption</h4>
            <p>TCP assumes packet loss = Congestion. In wireless, loss = Noise/Handover. TCP slows down unnecessarily.</p>
          </div>
        `},{title:"TCP Improvements",content:`
          <div class="study-guide-box">
            <h4>Indirect TCP (I-TCP)</h4>
            
            <!-- I-TCP Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff3e0; border-radius: 8px;">
                <!-- Fixed Host -->
                <rect x="20" y="50" width="80" height="50" rx="5" fill="#795548" />
                <text x="60" y="80" text-anchor="middle" fill="white">FH</text>

                <!-- Base Station -->
                <rect x="260" y="40" width="80" height="70" rx="5" fill="#ff9800" />
                <text x="300" y="80" text-anchor="middle" fill="white" font-weight="bold">Base Station</text>

                <!-- Mobile Host -->
                <rect x="500" y="50" width="80" height="50" rx="5" fill="#2196f3" />
                <text x="540" y="80" text-anchor="middle" fill="white">MH</text>

                <!-- Connection 1 -->
                <line x1="100" y1="75" x2="260" y2="75" stroke="#333" stroke-width="3" />
                <text x="180" y="65" text-anchor="middle" font-size="12">Standard TCP</text>

                <!-- Connection 2 -->
                <line x1="340" y1="75" x2="500" y2="75" stroke="#333" stroke-width="3" stroke-dasharray="5,5" />
                <text x="420" y="65" text-anchor="middle" font-size="12">Wireless TCP</text>
                
                <!-- Split -->
                <line x1="300" y1="40" x2="300" y2="110" stroke="white" stroke-width="2" />
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Indirect TCP (I-TCP)</h5>
                <p>Splits connection at BS. FH sees standard TCP. Wireless link is isolated.</p>
              </div>
              <div class="concept-card">
                <h5>Snooping TCP</h5>
                <p>BS monitors packets. Retransmits locally if lost. Preserves end-to-end semantics.</p>
              </div>
            </div>
          </div>
        `}]},{unit:"IV",title:"Data Dissemination and Synchronization",notes:"<h3>Unit IV Overview</h3><p>Efficient data delivery (Push/Pull) and consistency (Sync).</p>",topics:[{title:"Data Dissemination",content:`
          <div class="study-guide-box">
            <h4>Push vs. Pull</h4>
            
            <!-- Push Pull Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #f3e5f5; border-radius: 8px;">
                 <!-- Server -->
                 <rect x="50" y="20" width="100" height="160" rx="5" fill="#9c27b0" />
                 <text x="100" y="105" text-anchor="middle" fill="white" font-weight="bold">Server</text>

                 <!-- Clients -->
                 <circle cx="500" cy="50" r="20" fill="#2196f3" />
                 <circle cx="500" cy="100" r="20" fill="#2196f3" />
                 <circle cx="500" cy="150" r="20" fill="#2196f3" />

                 <!-- Push Arrows -->
                 <g stroke="#9c27b0" stroke-width="2" marker-end="url(#arrowhead-flow)">
                   <line x1="160" y1="50" x2="470" y2="50" />
                   <line x1="160" y1="100" x2="470" y2="100" />
                   <line x1="160" y1="150" x2="470" y2="150" />
                 </g>
                 <text x="300" y="40" text-anchor="middle" fill="#9c27b0" font-size="12">PUSH (Broadcast)</text>
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Push (Broadcast)</h5>
                <p>Server sends. Scalable. Good for news/traffic.</p>
              </div>
              <div class="concept-card">
                <h5>Pull (On-Demand)</h5>
                <p>Client asks. Personalized. Good for email/banking.</p>
              </div>
            </div>
          </div>
        `},{title:"Selective Tuning",content:`
          <div class="study-guide-box">
            <h4>Index-Based Method</h4>
            <p>Device reads Index -> Sleeps -> Wakes up for Data.</p>
          </div>
        `},{title:"Data Synchronization",content:`
          <div class="study-guide-box">
            <h4>SyncML</h4>
            <p>Standard protocol for syncing data (Contacts, Calendar) across devices.</p>
          </div>
        `}]},{unit:"V",title:"Mobile Ad-hoc Networks (MANETs)",notes:"<h3>Unit V Overview</h3><p>Decentralized networks without infrastructure.</p>",topics:[{title:"MANET Basics",content:`
          <div class="study-guide-box">
            <h4>MANET Topology</h4>
            <!-- MANET Diagram -->
            <div class="diagram-container">
               <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff; border: 1px solid #ccc; border-radius: 8px;">
                 <circle cx="100" cy="100" r="15" fill="#4caf50" />
                 <circle cx="200" cy="50" r="15" fill="#4caf50" />
                 <circle cx="200" cy="150" r="15" fill="#4caf50" />
                 <circle cx="350" cy="100" r="15" fill="#4caf50" />
                 <circle cx="500" cy="100" r="15" fill="#4caf50" />

                 <line x1="100" y1="100" x2="200" y2="50" stroke="#999" stroke-dasharray="4" />
                 <line x1="100" y1="100" x2="200" y2="150" stroke="#999" stroke-dasharray="4" />
                 <line x1="200" y1="50" x2="350" y2="100" stroke="#999" stroke-dasharray="4" />
                 <line x1="200" y1="150" x2="350" y2="100" stroke="#999" stroke-dasharray="4" />
                 <line x1="350" y1="100" x2="500" y2="100" stroke="#999" stroke-dasharray="4" />
                 
                 <text x="300" y="180" text-anchor="middle" fill="#555">Dynamic Mesh Topology</text>
               </svg>
            </div>
            <div class="definition-box">
              <strong>MANET:</strong> Infrastructure-less network. Nodes act as routers.
            </div>
          </div>
        `},{title:"Routing Protocols",content:`
          <div class="study-guide-box">
            <h4>Protocols</h4>
            <div class="concept-grid">
              <div class="concept-card">
                <h5>DSDV (Proactive)</h5>
                <p>Table-driven. High overhead. Low latency.</p>
              </div>
              <div class="concept-card">
                <h5>DSR (Reactive)</h5>
                <p>Source routing. Full path in header. No idle overhead.</p>
              </div>
              <div class="concept-card">
                <h5>AODV (Reactive)</h5>
                <p>Hop-by-hop. Sequence numbers. Industry standard.</p>
              </div>
            </div>
          </div>
        `}]}],nm={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1}]},im={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
            <h4>1. Introduction</h4>
            <p>GSM (Global System for Mobile Communications) is a standard developed by ETSI to describe protocols for second-generation (2G) digital cellular networks. It is the most widely used mobile standard.</p>

            <h4>2. GSM Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Station (MS)</div>
              <div class="diagram-arrow">⬇ Um Interface (Air)</div>
              <div class="diagram-box">Base Station Subsystem (BSS)</div>
              <div class="diagram-arrow">⬇ A Interface</div>
              <div class="diagram-box">Network & Switching Subsystem (NSS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Operation Support Subsystem (OSS)</div>
            </div>

            <h4>3. Detailed Subsystems Explanation</h4>
            
            <h5>A. Mobile Station (MS)</h5>
            <p>The user's device. It consists of two parts:</p>
            <ul>
              <li><strong>Mobile Equipment (ME):</strong> The physical hardware (Radio, Display, Processor). Identified by <strong>IMEI</strong> (International Mobile Equipment Identity).</li>
              <li><strong>Subscriber Identity Module (SIM):</strong> A smart card containing user data. Identified by <strong>IMSI</strong> (International Mobile Subscriber Identity). Stores the Authentication Key (Ki).</li>
            </ul>

            <h5>B. Base Station Subsystem (BSS)</h5>
            <p>Manages the radio link with the MS. Consists of:</p>
            <ul>
              <li><strong>Base Transceiver Station (BTS):</strong> The radio tower. Handles signal transmission/reception, encoding, and encryption. Defines the "Cell".</li>
              <li><strong>Base Station Controller (BSC):</strong> The intelligence behind the BTS. Manages radio resources, frequency hopping, and <strong>Handover</strong> (switching between BTSs).</li>
            </ul>

            <h5>C. Network and Switching Subsystem (NSS)</h5>
            <p>The core network, responsible for call routing and subscriber management.</p>
            <ul>
              <li><strong>Mobile Switching Center (MSC):</strong> The central switch. Routes calls to/from other networks (PSTN, ISDN). Handles call setup and teardown.</li>
              <li><strong>Home Location Register (HLR):</strong> A central database storing permanent subscriber information (Profile, Current VLR location, Services).</li>
              <li><strong>Visitor Location Register (VLR):</strong> A temporary database storing information about subscribers currently <em>roaming</em> in the MSC's area.</li>
              <li><strong>Authentication Center (AuC):</strong> Stores security keys (Ki) and generates authentication triplets (RAND, SRES, Kc) to prevent fraud.</li>
              <li><strong>Equipment Identity Register (EIR):</strong> A database of valid mobile equipment (IMEIs).
                <ul>
                  <li><em>White List:</em> Valid.</li>
                  <li><em>Grey List:</em> Under observation.</li>
                  <li><em>Black List:</em> Stolen/Barred.</li>
                </ul>
              </li>
            </ul>

            <h5>D. Operation Support Subsystem (OSS)</h5>
            <p>Responsible for network operation and maintenance (O&M), billing, and network configuration.</p>

            <h4>4. GSM Interfaces</h4>
            <ul>
              <li><strong>Um Interface:</strong> Radio interface between MS and BTS.</li>
              <li><strong>Abis Interface:</strong> Link between BTS and BSC (PCM cabling).</li>
              <li><strong>A Interface:</strong> Link between BSC and MSC.</li>
            </ul>

            <div class="conclusion">
              <strong>Conclusion:</strong> The modular architecture of GSM allows for scalability and distinct separation of radio (BSS) and switching (NSS) functions, enabling global roaming.
            </div>
          `},{type:"b",question:"Discuss the 3-Tier Architecture of Mobile Computing.",answer:`
            <h4>1. Introduction</h4>
            <p>Mobile computing applications typically follow a 3-Tier Architecture. This design pattern separates the application into three logical and physical computing tiers: Presentation, Application, and Data.</p>

            <h4>2. Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Tier 1: Presentation (Client)</div>
              <div class="diagram-arrow">⬇⬆ HTTP/Request</div>
              <div class="diagram-box">Tier 2: Application (Server)</div>
              <div class="diagram-arrow">⬇⬆ SQL/Query</div>
              <div class="diagram-box">Tier 3: Data (Database)</div>
            </div>

            <h4>3. Detailed Tier Explanation</h4>

            <h5>Tier 1: Presentation Tier (Client Side)</h5>
            <ul>
              <li><strong>Location:</strong> Runs on the mobile device (Smartphone, Tablet).</li>
              <li><strong>Function:</strong>
                <ul>
                  <li>Presents the User Interface (UI).</li>
                  <li>Captures user input.</li>
                  <li>Performs basic validation.</li>
                </ul>
              </li>
              <li><strong>Components:</strong> Mobile Browser (HTML/JS), Native App (Java/Swift).</li>
              <li><strong>Challenges:</strong> Limited battery, small screen, variable connectivity.</li>
            </ul>

            <h5>Tier 2: Application Tier (Middle Tier)</h5>
            <ul>
              <li><strong>Location:</strong> Runs on a remote server (Cloud/Data Center).</li>
              <li><strong>Function:</strong>
                <ul>
                  <li>Contains the <strong>Business Logic</strong> (The "Brain").</li>
                  <li>Processes client requests.</li>
                  <li>Makes decisions based on rules.</li>
                  <li>Formats data for the client (e.g., JSON/XML).</li>
                </ul>
              </li>
              <li><strong>Components:</strong> Web Servers (Apache, Nginx), App Servers (Tomcat, Node.js, Django).</li>
            </ul>

            <h5>Tier 3: Data Tier (Backend)</h5>
            <ul>
              <li><strong>Location:</strong> High-performance database servers.</li>
              <li><strong>Function:</strong>
                <ul>
                  <li>Stores and retrieves data.</li>
                  <li>Ensures data integrity and consistency (ACID properties).</li>
                  <li>Handles backup and recovery.</li>
                </ul>
              </li>
              <li><strong>Components:</strong> Relational DB (MySQL, Oracle), NoSQL (MongoDB).</li>
            </ul>

            <h4>4. Advantages over 2-Tier Architecture</h4>
            <ul>
              <li><strong>Scalability:</strong> Each tier can be scaled independently (e.g., add more App Servers without touching the DB).</li>
              <li><strong>Security:</strong> The client cannot access the database directly. The App Tier acts as a firewall/gatekeeper.</li>
              <li><strong>Maintainability:</strong> You can change the database engine without updating the mobile app code.</li>
              <li><strong>Performance:</strong> Caching can be implemented at the Application Tier.</li>
            </ul>

            <div class="conclusion">
              <strong>Conclusion:</strong> The 3-Tier architecture is the industry standard for mobile apps because it provides the flexibility, security, and scalability needed for modern distributed systems.
            </div>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain Mobile IP operation with respect to Agent Discovery, Registration, and Tunneling.",answer:`
            <h4>1. Introduction to Mobile IP</h4>
            <p>Mobile IP (RFC 3344) is a standard protocol that allows a mobile device to move from one network to another while maintaining a permanent IP address (Home Address), enabling continuous connectivity.</p>

            <h4>2. Key Entities</h4>
            <ul>
              <li><strong>Mobile Node (MN):</strong> The moving device.</li>
              <li><strong>Home Agent (HA):</strong> Router on the home network.</li>
              <li><strong>Foreign Agent (FA):</strong> Router on the visited network.</li>
              <li><strong>Care-of Address (CoA):</strong> Temporary IP on the foreign network.</li>
            </ul>

            <h4>3. Phase 1: Agent Discovery</h4>
            <p>The MN needs to find an agent (HA or FA) to know where it is.</p>
            <ul>
              <li><strong>Agent Advertisement:</strong> HA and FA periodically broadcast "I am here" messages (ICMP Router Discovery).</li>
              <li><strong>Agent Solicitation:</strong> If the MN doesn't hear an advertisement, it sends a request asking "Is anyone there?".</li>
            </ul>

            <h4>4. Phase 2: Registration</h4>
            <p>Once the MN gets a CoA from the FA, it must tell the HA.</p>
            <ol>
              <li>MN sends <strong>Registration Request</strong> to FA.</li>
              <li>FA forwards request to HA.</li>
              <li>HA updates its routing table (binding Home Address to CoA).</li>
              <li>HA sends <strong>Registration Reply</strong> (Accept/Reject) to FA.</li>
              <li>FA forwards reply to MN.</li>
            </ol>

            <h4>5. Phase 3: Tunneling (Data Transfer)</h4>
            <p>How a packet travels from a Correspondent Node (CN) to the MN:</p>
            <ol>
              <li><strong>Intercept:</strong> CN sends packet to MN's Home Address. HA intercepts it.</li>
              <li><strong>Encapsulate:</strong> HA wraps the original packet inside a new IP packet (IP-in-IP Encapsulation).
                <ul>
                  <li><em>Source:</em> HA Address</li>
                  <li><em>Destination:</em> CoA</li>
                </ul>
              </li>
              <li><strong>Tunnel:</strong> The packet travels through the internet (Tunnel) to the FA.</li>
              <li><strong>Decapsulate:</strong> FA removes the outer header, revealing the original packet.</li>
              <li><strong>Deliver:</strong> FA delivers the original packet to the MN via the local network.</li>
            </ol>

            <div class="conclusion">
              <strong>Conclusion:</strong> Mobile IP enables seamless mobility by decoupling the device's identity (Home Address) from its location (Care-of Address) using tunneling.
            </div>
          `},{type:"b",question:"Compare SDMA, FDMA, TDMA, and CDMA.",answer:`
            <h4>1. Introduction</h4>
            <p>Multiple Access techniques allow multiple users to share a limited communication channel (medium) simultaneously.</p>

            <h4>2. Detailed Comparison</h4>

            <h5>A. SDMA (Space Division Multiple Access)</h5>
            <ul>
              <li><strong>Concept:</strong> Segments the service area into distinct spatial sectors (cells).</li>
              <li><strong>Mechanism:</strong> Uses directional antennas (Smart Antennas) to focus signals.</li>
              <li><strong>Analogy:</strong> Conversations in different rooms.</li>
              <li><strong>Pros:</strong> Frequency reuse (same freq in different cells).</li>
            </ul>

            <h5>B. FDMA (Frequency Division Multiple Access)</h5>
            <ul>
              <li><strong>Concept:</strong> Divides the frequency spectrum into distinct bands (channels).</li>
              <li><strong>Mechanism:</strong> Each user gets a unique frequency band for the duration of the call.</li>
              <li><strong>Analogy:</strong> Radio stations (98.3 FM, 100.1 FM).</li>
              <li><strong>Pros:</strong> Simple hardware.</li>
              <li><strong>Cons:</strong> Inflexible bandwidth; Guard bands waste spectrum.</li>
            </ul>

            <h5>C. TDMA (Time Division Multiple Access)</h5>
            <ul>
              <li><strong>Concept:</strong> Divides time into slots.</li>
              <li><strong>Mechanism:</strong> Users share the same frequency but transmit at different times (cyclically).</li>
              <li><strong>Analogy:</strong> Conversation where people take turns speaking.</li>
              <li><strong>Pros:</strong> Flexible bit rate; No guard bands needed (but guard time needed).</li>
              <li><strong>Cons:</strong> Precise synchronization required.</li>
            </ul>

            <h5>D. CDMA (Code Division Multiple Access)</h5>
            <ul>
              <li><strong>Concept:</strong> Spread Spectrum technology.</li>
              <li><strong>Mechanism:</strong> All users transmit at the same time and same frequency but use unique <strong>Orthogonal Codes</strong>.</li>
              <li><strong>Analogy:</strong> A party where everyone speaks different languages. You only understand your language.</li>
              <li><strong>Pros:</strong> Secure; Resistant to jamming; Soft Handover.</li>
              <li><strong>Cons:</strong> Complex power control required.</li>
            </ul>

            <h4>3. Summary Table</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>FDMA</th><th>TDMA</th><th>CDMA</th></tr>
              <tr><td><strong>Separation</strong></td><td>Frequency</td><td>Time</td><td>Code</td></tr>
              <tr><td><strong>Sync</strong></td><td>Low</td><td>High</td><td>Very High</td></tr>
              <tr><td><strong>Interference</strong></td><td>Adjacent Channel</td><td>Adjacent Slot</td><td>Multi-user</td></tr>
            </table>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain Indirect TCP (I-TCP) and its advantages/disadvantages.",answer:`
            <h4>1. The Problem with Standard TCP</h4>
            <p>Standard TCP assumes packet loss is due to congestion and reacts by slowing down. In wireless, loss is often due to noise/handovers. Slowing down degrades performance.</p>

            <h4>2. Indirect TCP (I-TCP) Concept</h4>
            <p>I-TCP splits the TCP connection into two distinct connections at the Base Station (BS).</p>
            <div class="diagram-container">
              <div class="diagram-box">Fixed Host (FH)</div>
              <div class="diagram-arrow">⬌ Standard TCP ⬌</div>
              <div class="diagram-box">Base Station (BS)</div>
              <div class="diagram-arrow">⬌ Wireless TCP ⬌</div>
              <div class="diagram-box">Mobile Host (MH)</div>
            </div>

            <h4>3. Working Mechanism</h4>
            <ul>
              <li><strong>Connection 1 (FH to BS):</strong> Uses standard TCP. The BS acts as the receiver for the FH. It sends ACKs to the FH as soon as it receives data.</li>
              <li><strong>Connection 2 (BS to MH):</strong> Uses a modified TCP optimized for wireless (e.g., faster retransmission, no slow start).</li>
              <li>The BS buffers data from FH and forwards it to MH.</li>
            </ul>

            <h4>4. Advantages</h4>
            <ul>
              <li><strong>Isolation:</strong> Wireless errors are completely hidden from the Fixed Host.</li>
              <li><strong>Optimization:</strong> The wireless link can be tuned independently (e.g., using Selective Repeat).</li>
              <li><strong>Fast Recovery:</strong> BS can retransmit lost packets locally and quickly.</li>
            </ul>

            <h4>5. Disadvantages</h4>
            <ul>
              <li><strong>Loss of End-to-End Semantics:</strong> This is the biggest drawback. The FH receives an ACK from the BS, thinking the MH got the data. If the BS crashes before forwarding, data is lost, but the FH thinks it's delivered. This violates the TCP reliability guarantee.</li>
              <li><strong>Handover Latency:</strong> When MH moves to a new BS, the old BS must transfer all buffered data and state to the new BS, causing delay.</li>
            </ul>
          `},{type:"b",question:"Discuss Data Hoarding and Caching techniques in mobile environments.",answer:`
            <h4>1. Introduction</h4>
            <p>Mobile environments are characterized by frequent disconnections and variable bandwidth. Data management techniques like Hoarding and Caching are essential to maintain data availability.</p>

            <h4>2. Data Hoarding (Prefetching)</h4>
            <ul>
              <li><strong>Definition:</strong> The proactive process of downloading and storing data on the mobile device <em>before</em> it is actually requested by the user, in anticipation of future use (especially during disconnection).</li>
              <li><strong>Mechanism:</strong>
                <ol>
                  <li><strong>Prediction:</strong> Analyze user history to predict what they will need (e.g., "User reads news at 8 AM").</li>
                  <li><strong>Hoarding:</strong> Download this data when bandwidth is high/cheap.</li>
                </ol>
              </li>
              <li><strong>Use Case:</strong> "Offline Mode" in apps like Google Maps or Netflix.</li>
              <li><strong>Challenges:</strong> Predicting correctly is hard. Wrong predictions waste storage and bandwidth.</li>
            </ul>

            <h4>3. Caching</h4>
            <ul>
              <li><strong>Definition:</strong> Storing a copy of recently accessed data locally. If the user asks for it again, it's served from the cache (fast) instead of the server (slow).</li>
              <li><strong>Granularity:</strong> Can be Page-level (Web) or Object-level (Database).</li>
              <li><strong>Benefit:</strong> Reduces latency, saves bandwidth, saves battery.</li>
            </ul>

            <h4>4. Cache Consistency (The Hard Part)</h4>
            <p>How to ensure the cached data is up-to-date with the server?</p>
            <ul>
              <li><strong>Stateless (Polling):</strong> Client periodically asks server "Has data changed?". Simple but high traffic.</li>
              <li><strong>Stateful (Invalidation):</strong> Server tracks which client has which data. If data changes, Server sends an "Invalidation Report" to the client.
                <ul>
                  <li><em>Synchronous:</em> Client waits for report.</li>
                  <li><em>Asynchronous:</em> Server broadcasts report.</li>
                </ul>
              </li>
            </ul>

            <div class="conclusion">
              <strong>Summary:</strong> Hoarding prepares for the future (offline), while Caching optimizes the present (online). Both require robust consistency mechanisms.
            </div>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Explain the Push-based and Pull-based data delivery mechanisms.",answer:`
            <h4>1. Introduction</h4>
            <p>Data delivery mechanisms describe how information flows from a server (Information Source) to a client (Mobile Device). The choice depends on the application and resource constraints.</p>

            <h4>2. Push-based Mechanism (Publish-Subscribe)</h4>
            <ul>
              <li><strong>Concept:</strong> The server initiates the data transfer. It "pushes" data to clients without them asking for it.</li>
              <li><strong>Structure:</strong> 1-to-Many (Broadcast/Multicast).</li>
              <li><strong>Suitability:</strong> Best for data of common interest (Public news, Traffic, Stock prices, Weather).</li>
              <li><strong>Advantages:</strong>
                <ul>
                  <li><strong>Scalability:</strong> Server load is constant regardless of the number of users listening.</li>
                  <li><strong>Simplicity:</strong> Client just listens.</li>
                </ul>
              </li>
              <li><strong>Disadvantages:</strong>
                <ul>
                  <li><strong>"Spam":</strong> Clients receive data they might not want.</li>
                  <li><strong>Access Latency:</strong> Client has to wait for the data to appear in the broadcast cycle.</li>
                </ul>
              </li>
            </ul>

            <h4>3. Pull-based Mechanism (On-Demand)</h4>
            <ul>
              <li><strong>Concept:</strong> The client initiates the transfer. It "pulls" data from the server by sending a request.</li>
              <li><strong>Structure:</strong> 1-to-1 (Unicast).</li>
              <li><strong>Suitability:</strong> Best for personalized data (Email, Bank Account, Search results).</li>
              <li><strong>Advantages:</strong>
                <ul>
                  <li><strong>Precision:</strong> User gets exactly what they want.</li>
                  <li><strong>Freshness:</strong> Data is fetched in real-time.</li>
                </ul>
              </li>
              <li><strong>Disadvantages:</strong>
                <ul>
                  <li><strong>Server Bottleneck:</strong> Server can be overwhelmed by too many requests.</li>
                  <li><strong>Energy Cost:</strong> Sending a request (Uplink) consumes significant battery power.</li>
                </ul>
              </li>
            </ul>

            <h4>4. Hybrid Mechanism</h4>
            <p>Most modern systems use a mix. For example, a News App pushes the headlines (Broadcast) but pulls the full article text when you click on it (On-demand).</p>
          `},{type:"b",question:"What is Selective Tuning? Explain Index-based method.",answer:`
            <h4>1. The Need for Selective Tuning</h4>
            <p>In a Push-based system (Broadcast), the mobile device has to listen to the channel to find its data. Listening consumes power. <strong>Selective Tuning</strong> allows the device to stay in "Doze Mode" (low power) and wake up <em>only</em> when the desired data is on air.</p>

            <h4>2. Index-based Method</h4>
            <p>To know "when" to wake up, the server broadcasts a directory (Index) at the start of the data cycle.</p>

            <h4>3. Broadcast Cycle Structure</h4>
            <div class="diagram-container">
              <div class="diagram-box">INDEX</div>
              <div class="diagram-arrow">... Data ...</div>
              <div class="diagram-box">Data A</div>
              <div class="diagram-arrow">...</div>
              <div class="diagram-box">Data B</div>
            </div>
            <p>The Index contains pairs of (Data ID, Time Offset).</p>

            <h4>4. Operational Steps</h4>
            <ol>
              <li><strong>Wake Up:</strong> Mobile wakes up at the beginning of the broadcast bucket.</li>
              <li><strong>Read Index:</strong> It scans the Index for the desired Data ID (e.g., "Stock Quote").</li>
              <li><strong>Calculate:</strong> It reads the "Time Offset" (e.g., "Data is in 50ms").</li>
              <li><strong>Sleep:</strong> It switches radio to Doze Mode for 50ms.</li>
              <li><strong>Wake Up:</strong> It wakes up exactly when the data arrives.</li>
              <li><strong>Download:</strong> Reads the data.</li>
              <li><strong>Sleep:</strong> Goes back to sleep.</li>
            </ol>

            <h4>5. Pros and Cons</h4>
            <ul>
              <li><strong>Advantage:</strong> Massive power saving (Active time reduced by >90%).</li>
              <li><strong>Disadvantage:</strong> The Index itself takes up space, making the total broadcast cycle longer (Latency increases).</li>
            </ul>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain the DSDV routing protocol.",answer:`
            <h4>1. Introduction</h4>
            <p><strong>DSDV (Destination-Sequenced Distance-Vector)</strong> is a <strong>Proactive (Table-driven)</strong> routing protocol for MANETs. It is an adaptation of the classic Bellman-Ford algorithm (RIP) for dynamic networks.</p>

            <h4>2. Core Concept: Table-Driven</h4>
            <p>Every node maintains a routing table listing <em>all</em> possible destinations in the network and the number of hops to each. This table is constantly updated.</p>

            <h4>3. The "Sequence Number" Innovation</h4>
            <p>Standard Distance-Vector protocols suffer from "Count-to-Infinity" loops. DSDV solves this by adding a <strong>Sequence Number</strong> to every route entry.</p>
            <ul>
              <li>Sequence numbers are generated by the destination node.</li>
              <li>Even numbers = Normal update.</li>
              <li>Odd numbers = Route broken (Infinity).</li>
            </ul>

            <h4>4. Route Selection Algorithm</h4>
            <p>When a node receives a route update, it compares it with its existing route:</p>
            <ol>
              <li><strong>Rule 1 (Freshness):</strong> Choose the route with the <strong>Higher Sequence Number</strong>. (Newer info is always better).</li>
              <li><strong>Rule 2 (Optimality):</strong> If Sequence Numbers are equal, choose the route with the <strong>Lower Metric (Hops)</strong>.</li>
            </ol>

            <h4>5. Advantages</h4>
            <ul>
              <li><strong>Low Latency:</strong> Routes are always available immediately. No setup delay.</li>
              <li><strong>Loop-Free:</strong> Guaranteed by sequence numbers.</li>
            </ul>

            <h4>6. Disadvantages</h4>
            <ul>
              <li><strong>High Overhead:</strong> Nodes must broadcast updates periodically, even if no one is talking. This wastes battery and bandwidth.</li>
              <li><strong>Scalability:</strong> Not suitable for large networks (Table size grows linearly).</li>
            </ul>
          `},{type:"b",question:"Explain the DSR routing protocol.",answer:`
            <h4>1. Introduction</h4>
            <p><strong>DSR (Dynamic Source Routing)</strong> is a <strong>Reactive (On-demand)</strong> routing protocol. It was designed to reduce the overhead of proactive protocols like DSDV.</p>

            <h4>2. Core Concept: Source Routing</h4>
            <p>Instead of relying on routing tables at every hop, the <strong>Sender</strong> determines the entire path (e.g., A -> B -> C -> D) and puts this list in the packet header. Intermediate nodes just follow instructions.</p>

            <h4>3. Phases of Operation</h4>

            <h5>Phase 1: Route Discovery (Finding a Path)</h5>
            <p>Happens only when A wants to send to D and doesn't have a route.</p>
            <ol>
              <li><strong>Route Request (RREQ):</strong> A broadcasts a RREQ packet.</li>
              <li><strong>Propagation:</strong> B receives it, adds its ID [A, B], and rebroadcasts. C does the same [A, B, C].</li>
              <li><strong>Route Reply (RREP):</strong> D receives the RREQ. It sees the full path [A, B, C]. It sends a RREP back to A using the reverse path.</li>
              <li><strong>Caching:</strong> A receives RREP and caches the route [A, B, C, D].</li>
            </ol>

            <h5>Phase 2: Route Maintenance (Handling Breaks)</h5>
            <ol>
              <li>If link B-C breaks, B detects it.</li>
              <li>B sends a <strong>Route Error (RERR)</strong> to A.</li>
              <li>A removes the broken route from its cache and starts a new Discovery.</li>
            </ol>

            <h4>4. Advantages</h4>
            <ul>
              <li><strong>Zero Overhead for Idle Nodes:</strong> If you aren't talking, you send nothing. Saves battery.</li>
              <li><strong>Loop-Free:</strong> Since the full path is in the header, loops are impossible.</li>
            </ul>

            <h4>5. Disadvantages</h4>
            <ul>
              <li><strong>Header Overhead:</strong> Packet size grows with path length (bad for long paths).</li>
              <li><strong>Initial Delay:</strong> The first packet waits for Route Discovery (RREQ/RREP cycle).</li>
            </ul>
          `}]}]},sm={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 2",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is GPRS?",answer:"<strong>General Packet Radio Service (GPRS)</strong> is a packet-oriented mobile data standard on the 2G and 3G cellular communication network's global system for mobile communications (GSM)."},{unit:"I",id:2,question:"Define Handoff.",answer:"<strong>Handoff</strong> (or Handover) is the process of transferring an ongoing call or data session from one channel connected to the core network to another channel."},{unit:"II",id:3,question:"What is the Near-Far Problem?",answer:"<strong>Explanation:</strong> In CDMA, a strong signal from a near mobile unit masks the weak signal from a far mobile unit at the base station."},{unit:"II",id:4,question:"What is Tunneling?",answer:"<strong>Definition:</strong> Tunneling is a mechanism used to ship a packet to a mobile node. It involves encapsulation of the original IP packet inside another IP packet."},{unit:"III",id:5,question:"What is Mobile TCP?",answer:"<strong>Mobile TCP (M-TCP)</strong> is a protocol designed to handle frequent disconnections. It splits the connection and forces the sender into persist mode during disconnection."},{unit:"III",id:6,question:"Define Caching in Mobile Computing.",answer:"<strong>Caching:</strong> Storing frequently accessed data locally on the mobile device to reduce access latency and bandwidth usage."},{unit:"IV",id:7,question:"What is a Broadcast Disk?",answer:"<strong>Broadcast Disk:</strong> A technique where data is cyclically broadcasted, appearing like a rotating disk to the client. Popular data is repeated more often."},{unit:"IV",id:8,question:"What is Data Synchronization?",answer:"<strong>Definition:</strong> The process of establishing consistency among data from a source to a target data storage and vice versa and the continuous harmonization of the data over time."},{unit:"V",id:9,question:"What is AODV?",answer:"<strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive routing protocol for MANETs that establishes a route to a destination only on demand."},{unit:"V",id:10,question:"What is Service Discovery?",answer:"<strong>Service Discovery:</strong> The automatic detection of devices and services offered by these devices on a computer network."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GPRS Architecture with a neat diagram.",answer:`
            <h4>1. Introduction</h4>
            <p>GPRS (General Packet Radio Service) extends GSM to support packet-switched data.</p>

            <h4>2. GPRS Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Station</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">BSS (PCU)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">SGSN</div>
              <div class="diagram-arrow">⬌</div>
              <div class="diagram-box">GGSN</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Internet</div>
            </div>

            <h4>3. Key Elements</h4>
            <ul>
              <li><strong>SGSN (Serving GPRS Support Node):</strong> Handles packet routing, mobility management, and authentication for MS within its service area. Equivalent to MSC in GSM.</li>
              <li><strong>GGSN (Gateway GPRS Support Node):</strong> Gateway to external networks (Internet). Handles IP address assignment.</li>
              <li><strong>PCU (Packet Control Unit):</strong> Added to BSS to handle packet scheduling.</li>
            </ul>

            <div class="conclusion">
              <strong>Conclusion:</strong> GPRS introduces packet switching to the circuit-switched GSM network, enabling "always-on" internet connectivity.
            </div>
          `},{type:"b",question:"Discuss various Applications of Mobile Computing.",answer:`
            <h4>Applications</h4>
            <ul>
              <li><strong>Vehicles:</strong> GPS, Traffic updates, Emergency assistance.</li>
              <li><strong>Business:</strong> Mobile office, Sales force automation, Inventory management.</li>
              <li><strong>Medical:</strong> Remote patient monitoring, Access to patient records.</li>
              <li><strong>Education:</strong> E-learning, Virtual classrooms.</li>
              <li><strong>Entertainment:</strong> Streaming, Gaming, Social media.</li>
            </ul>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain the IEEE 802.11 System Architecture.",answer:`
            <h4>1. Architecture Components</h4>
            <ul>
              <li><strong>Station (STA):</strong> Any device with a wireless network interface (e.g., Laptop, Phone).</li>
              <li><strong>Access Point (AP):</strong> Bridge between wireless and wired network.</li>
              <li><strong>Basic Service Set (BSS):</strong> A group of stations controlled by a single AP.</li>
              <li><strong>Extended Service Set (ESS):</strong> Multiple BSSs connected via a Distribution System (DS).</li>
            </ul>

            <h4>2. Diagram Representation</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">BSS 1 (AP1 + STAs)</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">Distribution System</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">BSS 2 (AP2 + STAs)</div>
              </div>
            </div>

            <h4>3. Modes of Operation</h4>
            <ul>
              <li><strong>Infrastructure Mode:</strong> Communication via AP.</li>
              <li><strong>Ad-hoc Mode:</strong> Direct communication between STAs (IBSS).</li>
            </ul>
          `},{type:"b",question:"Explain Packet Delivery in Mobile IP.",answer:`
            <h4>Packet Delivery Steps</h4>
            <ol>
              <li><strong>CN to HA:</strong> Correspondent Node sends packet to Mobile Node's Home Address. Packet routed to Home Agent.</li>
              <li><strong>HA Intercepts:</strong> HA looks up MN's current location (CoA).</li>
              <li><strong>Tunneling:</strong> HA encapsulates packet and tunnels it to CoA (Foreign Agent).</li>
              <li><strong>FA Decapsulates:</strong> FA removes outer header and delivers original packet to MN.</li>
              <li><strong>MN to CN:</strong> MN sends packet directly to CN (Standard IP routing). This is called <strong>Triangular Routing</strong>.</li>
            </ol>
            
            <div class="diagram-container">
              <div class="diagram-box">CN</div>
              <div class="diagram-arrow">➡</div>
              <div class="diagram-box">HA</div>
              <div class="diagram-arrow">➡ (Tunnel) ➡</div>
              <div class="diagram-box">FA</div>
              <div class="diagram-arrow">➡</div>
              <div class="diagram-box">MN</div>
            </div>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain Mobile TCP (M-TCP) in detail.",answer:`
            <h4>1. Overview</h4>
            <p>M-TCP is designed to handle frequent disconnections and low bandwidth. It splits the connection like I-TCP but preserves end-to-end semantics better.</p>

            <h4>2. Architecture</h4>
            <p>Uses a <strong>Supervisory Host (SH)</strong> (usually the BS) to monitor the mobile node.</p>

            <h4>3. Handling Disconnection</h4>
            <ul>
              <li>When MN disconnects, SH detects it.</li>
              <li>SH sends a "Zero Window Size" update to the Sender (Fixed Host).</li>
              <li>Sender enters <strong>Persist Mode</strong>: stops sending data and freezes retransmission timers.</li>
              <li>Sender periodically probes the window size.</li>
            </ul>

            <h4>4. Reconnection</h4>
            <ul>
              <li>When MN reconnects, SH re-opens the window.</li>
              <li>Sender resumes transmission without having timed out or reduced congestion window.</li>
            </ul>
          `},{type:"b",question:"Explain the Kangaroo Transaction Model.",answer:`
            <h4>1. Concept</h4>
            <p>Designed for mobile transactions where the user moves between cells (BSs) during a transaction.</p>

            <h4>2. Structure</h4>
            <ul>
              <li><strong>Base Transaction:</strong> The main transaction initiated at the first BS.</li>
              <li><strong>Joey Transactions:</strong> Sub-transactions created at each new BS the user visits.</li>
            </ul>

            <h4>3. Operation</h4>
            <p>As the user moves, the transaction state "hops" with them (like a Kangaroo). The Data Access Agents (DAA) at each BS manage the movement of the transaction context.</p>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Explain Broadcast Disk model.",answer:`
            <h4>1. Concept</h4>
            <p>Data is broadcast cyclically. To improve performance for popular data, different items are broadcast with different frequencies.</p>

            <h4>2. Multi-disk Approach</h4>
            <p>Imagine multiple disks of different sizes rotating at the same speed.</p>
            <ul>
              <li><strong>Fast Disk:</strong> Contains popular data (appears often).</li>
              <li><strong>Slow Disk:</strong> Contains less popular data (appears rarely).</li>
            </ul>

            <h4>3. Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Hot Data (Freq: High)</div>
              <div class="diagram-arrow">||</div>
              <div class="diagram-box">Cold Data (Freq: Low)</div>
            </div>
            <p>The broadcast schedule interleaves chunks from the fast disk and slow disk.</p>
          `},{type:"b",question:"Explain the synchronization protocol in mobile computing.",answer:`
            <h4>Synchronization</h4>
            <p>Ensuring the mobile replica and server origin are consistent.</p>

            <h4>Two-Phase Commit Protocol (2PC)</h4>
            <ol>
              <li><strong>Phase 1 (Voting):</strong> Coordinator asks all participants if they can commit. Participants vote "Yes" or "No".</li>
              <li><strong>Phase 2 (Commit):</strong>
                <ul>
                  <li>If all voted "Yes", Coordinator sends "Commit".</li>
                  <li>If any voted "No", Coordinator sends "Abort".</li>
                </ul>
              </li>
            </ol>
            <p><strong>Challenge in Mobile:</strong> Blocking nature of 2PC is bad for disconnected nodes. Optimistic protocols are preferred.</p>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain AODV Routing Protocol.",answer:`
            <h4>1. Introduction</h4>
            <p><strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive protocol that combines DSR's on-demand mechanism with DSDV's hop-by-hop routing and sequence numbers.</p>

            <h4>2. Route Discovery</h4>
            <ul>
              <li><strong>RREQ:</strong> Broadcast when route needed. Contains Source IP, Source Seq#, Dest IP, Dest Seq#, Hop Count.</li>
              <li><strong>Reverse Path:</strong> Intermediate nodes record the previous hop to form a reverse path to Source.</li>
              <li><strong>RREP:</strong> Unicast back to Source along the reverse path.</li>
            </ul>

            <h4>3. Route Maintenance</h4>
            <ul>
              <li><strong>Hello Messages:</strong> Used to detect link breaks.</li>
              <li><strong>RERR:</strong> Sent when a link breaks to notify affected nodes.</li>
            </ul>

            <h4>4. Comparison with DSR</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>AODV</th><th>DSR</th></tr>
              <tr><td>Routing</td><td>Hop-by-Hop</td><td>Source Routing</td></tr>
              <tr><td>Header Overhead</td><td>Low</td><td>High (Full path)</td></tr>
              <tr><td>Table</td><td>Routing Table</td><td>Route Cache</td></tr>
            </table>
          `},{type:"b",question:"Discuss Security Issues in MANETs.",answer:`
            <h4>Security Challenges</h4>
            <ul>
              <li><strong>Open Medium:</strong> Eavesdropping is easy.</li>
              <li><strong>Dynamic Topology:</strong> Hard to trust nodes; no fixed infrastructure.</li>
              <li><strong>Resource Constraints:</strong> Heavy encryption drains battery.</li>
            </ul>

            <h4>Types of Attacks</h4>
            <ul>
              <li><strong>Blackhole Attack:</strong> Malicious node drops all packets.</li>
              <li><strong>Wormhole Attack:</strong> Tunneling packets to another location to disrupt routing.</li>
              <li><strong>Sybil Attack:</strong> A node claims multiple identities.</li>
            </ul>
          `}]}]},um={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 3",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Differentiate between User Mobility and Device Portability.",answer:"<strong>User Mobility:</strong> The user can move between different physical locations and use different devices.<br/><strong>Device Portability:</strong> The device can be moved to different locations while maintaining connectivity."},{unit:"I",id:2,question:"What is Spread Spectrum?",answer:"<strong>Spread Spectrum:</strong> A technique where a signal is transmitted on a bandwidth much larger than the frequency content of the original information, to minimize interference and improve security."},{unit:"II",id:3,question:"What is Frequency Reuse?",answer:"<strong>Frequency Reuse:</strong> The practice of using the same radio frequencies in different geographic areas (cells) that are separated by sufficient distance to avoid interference."},{unit:"II",id:4,question:"Define Agent Advertisement.",answer:"<strong>Agent Advertisement:</strong> A method in Mobile IP where Home Agents and Foreign Agents periodically broadcast their presence to let Mobile Nodes know which network they are in."},{unit:"III",id:5,question:"What is Fast Retransmit?",answer:"<strong>Fast Retransmit:</strong> A TCP enhancement where the sender retransmits a packet after receiving 3 duplicate ACKs, without waiting for the timeout timer to expire."},{unit:"III",id:6,question:"Define Transaction Oriented TCP.",answer:"<strong>T-TCP:</strong> A TCP extension designed to make TCP more efficient for transactions (request-response) by combining the connection setup, data transfer, and connection teardown."},{unit:"IV",id:7,question:"What is Indexing in data dissemination?",answer:"<strong>Indexing:</strong> A technique where a directory of data locations is broadcasted before the actual data, allowing clients to know exactly when their desired data will arrive."},{unit:"IV",id:8,question:"What is Cache Invalidation?",answer:"<strong>Cache Invalidation:</strong> The process of removing or marking as invalid the data in the local cache when the original data on the server has changed."},{unit:"V",id:9,question:"What is a Wormhole Attack?",answer:"<strong>Wormhole Attack:</strong> A severe attack in MANETs where an attacker records packets at one location and tunnels them to another location to replay them, disrupting routing."},{unit:"V",id:10,question:"Define J2ME.",answer:"<strong>Java 2 Micro Edition (J2ME):</strong> A Java platform designed for embedded systems and mobile devices, providing a robust environment for application development."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Discuss the evolution of Mobile Communication from 1G to 5G.",answer:`
            <h4>Generations of Mobile Communication</h4>
            <table class="comparison-table">
              <tr><th>Gen</th><th>Technology</th><th>Key Features</th></tr>
              <tr><td><strong>1G</strong></td><td>Analog (AMPS)</td><td>Voice only. Poor security.</td></tr>
              <tr><td><strong>2G</strong></td><td>Digital (GSM, CDMA)</td><td>Voice + SMS. Data (GPRS/EDGE). Encryption.</td></tr>
              <tr><td><strong>3G</strong></td><td>CDMA2000, UMTS</td><td>High-speed data. Video calling. Mobile Internet.</td></tr>
              <tr><td><strong>4G</strong></td><td>LTE, WiMAX</td><td>All-IP network. High speed (100Mbps+). HD streaming.</td></tr>
              <tr><td><strong>5G</strong></td><td>NR (New Radio)</td><td>Ultra-low latency. Massive IoT. Gigabit speeds.</td></tr>
            </table>
          `},{type:"b",question:"Differentiate between Circuit Switching and Packet Switching.",answer:`
            <h4>Comparison</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>Circuit Switching</th><th>Packet Switching</th></tr>
              <tr><td><strong>Connection</strong></td><td>Dedicated path established.</td><td>No dedicated path (Connectionless).</td></tr>
              <tr><td><strong>Bandwidth</strong></td><td>Fixed/Reserved.</td><td>Dynamic/Shared.</td></tr>
              <tr><td><strong>Efficiency</strong></td><td>Low (wasted during silence).</td><td>High (resources used only when needed).</td></tr>
              <tr><td><strong>Delay</strong></td><td>Constant.</td><td>Variable (Jitter).</td></tr>
              <tr><td><strong>Example</strong></td><td>Traditional Telephone (PSTN), GSM Voice.</td><td>Internet (IP), GPRS, LTE.</td></tr>
            </table>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain the DHCP protocol and its role in mobility.",answer:`
            <h4>1. Introduction</h4>
            <p><strong>Dynamic Host Configuration Protocol (DHCP)</strong> automates the assignment of IP addresses and network parameters.</p>

            <h4>2. Role in Mobility</h4>
            <ul>
              <li>When a mobile node enters a foreign network, it needs a <strong>Care-of Address (CoA)</strong>.</li>
              <li>DHCP acts as a mechanism to assign this CoA.</li>
              <li>The Foreign Agent (FA) can act as a DHCP Relay.</li>
            </ul>

            <h4>3. DORA Process</h4>
            <div class="diagram-container">
              <div class="diagram-box">Client</div>
              <div class="diagram-arrow">➡ Discover ➡</div>
              <div class="diagram-box">Server</div>
              <div class="diagram-arrow">⬅ Offer ⬅</div>
              <div class="diagram-box">Client</div>
              <div class="diagram-arrow">➡ Request ➡</div>
              <div class="diagram-box">Server</div>
              <div class="diagram-arrow">⬅ Acknowledge ⬅</div>
              <div class="diagram-box">Client</div>
            </div>
            <ul>
              <li><strong>Discover:</strong> Client broadcasts to find servers.</li>
              <li><strong>Offer:</strong> Server offers an IP.</li>
              <li><strong>Request:</strong> Client requests the offered IP.</li>
              <li><strong>Acknowledge:</strong> Server confirms the lease.</li>
            </ul>
          `},{type:"b",question:"Discuss the entities and terminology of Mobile IP.",answer:`
            <h4>Mobile IP Terminology</h4>
            <ul>
              <li><strong>Mobile Node (MN):</strong> A host or router that changes its point of attachment from one network to another.</li>
              <li><strong>Home Agent (HA):</strong> A router on the MN's home network that tunnels packets to the MN when it is away.</li>
              <li><strong>Foreign Agent (FA):</strong> A router on the visited network that provides routing services to the MN.</li>
              <li><strong>Home Address:</strong> The permanent IP address of the MN.</li>
              <li><strong>Care-of Address (CoA):</strong> The temporary IP address of the MN in the foreign network.</li>
              <li><strong>Correspondent Node (CN):</strong> A peer node with which the MN is communicating.</li>
            </ul>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain the Bluetooth Protocol Stack and its architecture.",answer:`
            <h4>1. Bluetooth Architecture</h4>
            <p>Bluetooth operates in the 2.4 GHz ISM band and forms <strong>Piconets</strong> (1 Master + up to 7 Slaves).</p>

            <h4>2. Protocol Stack</h4>
            <div class="diagram-container">
              <div class="diagram-box">Applications / Profiles</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Middleware (RFCOMM, SDP, TCS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">L2CAP (Logical Link Control)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Host Controller Interface (HCI)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Link Manager (LMP)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Baseband / Radio</div>
            </div>

            <h4>3. Key Layers</h4>
            <ul>
              <li><strong>Radio:</strong> Physical transmission.</li>
              <li><strong>Baseband:</strong> Frequency hopping, connection establishment.</li>
              <li><strong>LMP:</strong> Link setup, authentication, power management.</li>
              <li><strong>L2CAP:</strong> Multiplexing, segmentation, and reassembly.</li>
              <li><strong>SDP:</strong> Service Discovery Protocol.</li>
            </ul>
          `},{type:"b",question:"Explain the WAP (Wireless Application Protocol) Architecture.",answer:`
            <h4>1. Overview</h4>
            <p>WAP is a standard for accessing information over a mobile wireless network.</p>

            <h4>2. WAP Model</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Client (WAP Browser)</div>
              <div class="diagram-arrow">⬌ (WAP Protocols) ⬌</div>
              <div class="diagram-box">WAP Gateway</div>
              <div class="diagram-arrow">⬌ (HTTP/TCP) ⬌</div>
              <div class="diagram-box">Web Server</div>
            </div>
            <p>The <strong>Gateway</strong> translates WAP requests to HTTP requests and compresses content for the mobile.</p>

            <h4>3. WAP Protocol Stack</h4>
            <ul>
              <li><strong>WAE (Application):</strong> WML, WMLScript.</li>
              <li><strong>WSP (Session):</strong> Session management.</li>
              <li><strong>WTP (Transaction):</strong> Reliable request/response.</li>
              <li><strong>WTLS (Security):</strong> Encryption (like SSL).</li>
              <li><strong>WDP (Datagram):</strong> Transport layer (UDP adaptation).</li>
            </ul>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Discuss the issues in Client-Server computing in mobile environments.",answer:`
            <h4>Challenges in Mobile Client-Server</h4>
            <ul>
              <li><strong>Low Bandwidth:</strong> Wireless links are slow. Data transfer takes longer.</li>
              <li><strong>High Latency:</strong> Round-trip time is high.</li>
              <li><strong>Disconnection:</strong> Frequent link failures. Transactions may fail.</li>
              <li><strong>Battery Power:</strong> Complex processing drains battery.</li>
              <li><strong>Asymmetry:</strong> Downlink is faster than Uplink.</li>
            </ul>

            <h4>Adaptation Strategies</h4>
            <ul>
              <li><strong>Caching:</strong> Reduce network access.</li>
              <li><strong>Proxies:</strong> Middleware to filter/compress data.</li>
              <li><strong>Asynchronous Operations:</strong> Don't block the UI while waiting for server.</li>
            </ul>
          `},{type:"b",question:"Explain the different Data Synchronization protocols.",answer:`
            <h4>1. Classification</h4>
            <ul>
              <li><strong>Pessimistic:</strong> Prevents conflicts by locking. Not suitable for mobile (disconnected) environments.</li>
              <li><strong>Optimistic:</strong> Allows updates anywhere. Detects and resolves conflicts later.</li>
            </ul>

            <h4>2. Protocols</h4>
            <ul>
              <li><strong>Slow Sync:</strong> Client sends all data to server. Server compares and merges. (High bandwidth).</li>
              <li><strong>Fast Sync:</strong> Client sends only changed data since last sync. (Efficient).</li>
            </ul>

            <h4>3. SyncML</h4>
            <p>An industry standard XML-based protocol for data synchronization.</p>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain the TORA (Temporally Ordered Routing Algorithm).",answer:`
            <h4>1. Introduction</h4>
            <p>TORA is a distributed, highly adaptive routing protocol for MANETs.</p>

            <h4>2. Key Concept: Height Metric</h4>
            <p>It creates a DAG (Directed Acyclic Graph) rooted at the destination. Each node has a "height". Packets flow "downhill" from higher height to lower height.</p>

            <h4>3. Operations</h4>
            <ul>
              <li><strong>Route Creation:</strong> Query/Update packets build the DAG.</li>
              <li><strong>Route Maintenance:</strong> If a link breaks, nodes adjust their height to reverse the flow (like water finding a new path).</li>
              <li><strong>Route Erasure:</strong> Clear packets remove invalid routes.</li>
            </ul>

            <h4>4. Pros & Cons</h4>
            <ul>
              <li><strong>Pros:</strong> Good for dense networks; minimizes control traffic for topological changes.</li>
              <li><strong>Cons:</strong> Oscillations can occur; requires synchronized clocks.</li>
            </ul>
          `},{type:"b",question:"Discuss the architecture of Android Mobile OS.",answer:`
            <h4>Android Architecture Stack</h4>
            <div class="diagram-container">
              <div class="diagram-box">Applications (Home, Contacts, Browser)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Application Framework (Activity Manager, Window Manager)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Libraries (SQLite, SSL) & Android Runtime (Dalvik/ART)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Linux Kernel (Drivers, Power Mgmt)</div>
            </div>

            <h4>Layer Description</h4>
            <ul>
              <li><strong>Linux Kernel:</strong> The foundation. Handles hardware drivers, memory, and process management.</li>
              <li><strong>Libraries:</strong> C/C++ libraries for graphics, database, etc.</li>
              <li><strong>Android Runtime:</strong> Executes apps. Uses DEX files.</li>
              <li><strong>App Framework:</strong> Java API for developers to access hardware/services.</li>
              <li><strong>Applications:</strong> User-facing apps.</li>
            </ul>
          `}]}]},om=[{category:"General Exam Strategy",tips:[{title:"The 15-Minute Rule",content:"Use the first 15 minutes to read the paper. Don't write. Just plan. Mark the questions you know 100% and attempt them first."},{title:"Time Management",content:"Allocate time based on marks. Don't spend 30 minutes on a 2-mark question. For a 10-mark question, aim for 15-20 minutes max."},{title:"Presentation Matters",content:"Examiners scan papers. Use bullet points, bold keywords, and leave space between answers. A messy paper is hard to grade."}]},{category:"Universal Answering Hacks (When You Forget)",tips:[{title:"The 'Definition-Diagram-Application' Framework",content:`Even if you don't know the exact answer, follow this structure:
1. **Define** the keywords in the question.
2. **Draw** a generic block diagram (Input -> Process -> Output).
3. **List** 3-4 general advantages (Speed, Efficiency, Cost) and applications.`},{title:"The 'Comparison' Hack",content:"If asked about a specific technology (e.g., 'Explain AODV'), compare it with something else (e.g., 'Unlike DSDV which is proactive...'). This fills space and shows conceptual understanding."},{title:"Generic Mobile Computing Points",content:`For almost any Mobile Computing question, you can mention these challenges/features:
- **Bandwidth Constraints**
- **Battery Limitations**
- **Security Risks**
- **Mobility Management**
- **Dynamic Topology**`}]},{category:"Diagram Hacks",tips:[{title:"Block Diagrams are King",content:"If you forget the specific architecture, draw a logical block diagram. Label boxes as 'Client', 'Server', 'Database', 'Network'. It earns partial marks."},{title:"Flowcharts for Algorithms",content:"Instead of writing paragraphs for algorithms (like DSR/AODV), draw a flowchart. It's faster to write and easier to check."}]}],cm=[{id:1,unit:"I",front:"Mobile Computing",back:`
      <div class="fc-content">
        <div class="fc-icon">📱 + 💻</div>
        <p><strong>Definition:</strong> Transmission of data, voice, and video via a computer or wireless device without a fixed physical link.</p>
        <ul class="fc-list">
          <li>✅ <strong>Anytime</strong></li>
          <li>✅ <strong>Anywhere</strong></li>
        </ul>
      </div>
    `},{id:2,unit:"I",front:"Mobility vs Portability",back:`
      <div class="fc-content">
        <div class="fc-grid">
          <div class="fc-item">
            <span class="fc-emoji">🏃‍♂️</span>
            <strong>Mobility</strong>
            <small>Move while connected</small>
          </div>
          <div class="fc-divider">VS</div>
          <div class="fc-item">
            <span class="fc-emoji">🎒</span>
            <strong>Portability</strong>
            <small>Easy to carry (Battery)</small>
          </div>
        </div>
      </div>
    `},{id:3,unit:"I",front:"GSM Architecture",back:`
      <div class="fc-content">
        <div class="fc-diagram-simple">
          <span>MS</span> ↔ <span>BSS</span> ↔ <span>NSS</span>
        </div>
        <ul class="fc-list-sm">
          <li><strong>MS:</strong> Phone + SIM</li>
          <li><strong>BSS:</strong> Tower (BTS) + Controller (BSC)</li>
          <li><strong>NSS:</strong> Core Network (MSC, HLR, VLR)</li>
        </ul>
      </div>
    `},{id:4,unit:"I",front:"HLR vs VLR",back:`
      <div class="fc-content">
        <table class="fc-table">
          <tr>
            <th>🏠 HLR (Home)</th>
            <th>✈️ VLR (Visitor)</th>
          </tr>
          <tr>
            <td>Permanent DB</td>
            <td>Temporary DB</td>
          </tr>
          <tr>
            <td>User Profile</td>
            <td>Current Location</td>
          </tr>
        </table>
      </div>
    `},{id:6,unit:"II",front:"Hidden Terminal Problem",back:`
      <div class="fc-content">
        <div class="fc-visual-problem">
          A 📡 ... 🏢 ... 📡 C
          <br/>
          (A & C can't hear each other)
        </div>
        <p><strong>Result:</strong> Both send to B at same time ➡ 💥 <strong>COLLISION</strong></p>
        <p class="fc-solution"><strong>Fix:</strong> RTS / CTS</p>
      </div>
    `},{id:8,unit:"II",front:"Mobile IP Process",back:`
      <div class="fc-content">
        <ol class="fc-steps">
          <li>1️⃣ <strong>Move:</strong> MN leaves Home ➡ Foreign Network</li>
          <li>2️⃣ <strong>Get CoA:</strong> MN gets Care-of-Address</li>
          <li>3️⃣ <strong>Register:</strong> Tell Home Agent (HA) new CoA</li>
          <li>4️⃣ <strong>Tunnel:</strong> HA encapsulates packets to CoA</li>
        </ol>
      </div>
    `},{id:10,unit:"II",front:"Tunneling (Encapsulation)",back:`
      <div class="fc-content">
        <div class="fc-capsule-outer">
          <span class="fc-label">New IP Header (Dest: CoA)</span>
          <div class="fc-capsule-inner">
            Original IP Packet
          </div>
        </div>
        <p>Like putting a letter inside a new envelope to forward it.</p>
      </div>
    `},{id:11,unit:"III",front:"Indirect TCP (I-TCP)",back:`
      <div class="fc-content">
        <div class="fc-split-connection">
          <div>Fixed ↔ BS</div>
          <div class="fc-break">⚡ Split ⚡</div>
          <div>BS ↔ Mobile</div>
        </div>
        <p><strong>Why?</strong> Isolates wireless errors from the fixed network.</p>
      </div>
    `},{id:12,unit:"III",front:"Snooping TCP",back:`
      <div class="fc-content">
        <div class="fc-icon">🕵️‍♂️</div>
        <p><strong>Base Station "Snoops"</strong></p>
        <ul class="fc-list">
          <li>Buffers packets</li>
          <li>Retransmits locally if lost</li>
          <li>Hides loss from Sender</li>
        </ul>
      </div>
    `},{id:15,unit:"IV",front:"Push vs Pull",back:`
      <div class="fc-content">
        <div class="fc-grid">
          <div class="fc-item">
            <strong>Push 📢</strong>
            <small>Server sends</small>
            <span class="fc-tag">Stock Ticker</span>
          </div>
          <div class="fc-item">
            <strong>Pull 📥</strong>
            <small>Client asks</small>
            <span class="fc-tag">Web Browsing</span>
          </div>
        </div>
      </div>
    `},{id:17,unit:"IV",front:"Selective Tuning",back:`
      <div class="fc-content">
        <div class="fc-timeline">
          <span>Index</span> ➡ <span>Sleep 💤</span> ➡ <span>Wake & Data 📥</span>
        </div>
        <p><strong>Goal:</strong> Save Battery 🔋 by waking up only when necessary.</p>
      </div>
    `},{id:19,unit:"V",front:"MANET Characteristics",back:`
      <div class="fc-content">
        <p><strong>Mobile Ad-hoc Network</strong></p>
        <div class="fc-tags">
          <span>No Infrastructure 🚫</span>
          <span>Dynamic Topology 🔀</span>
          <span>Multi-hop 🐇</span>
          <span>Battery Constrained 🔋</span>
        </div>
      </div>
    `},{id:22,unit:"V",front:"DSR vs AODV",back:`
      <div class="fc-content">
        <table class="fc-table">
          <tr>
            <th>DSR</th>
            <th>AODV</th>
          </tr>
          <tr>
            <td>Source Routing</td>
            <td>Hop-by-Hop</td>
          </tr>
          <tr>
            <td>Full path in header</td>
            <td>Routing tables</td>
          </tr>
          <tr>
            <td>High overhead</td>
            <td>Lower overhead</td>
          </tr>
        </table>
      </div>
    `}],rm=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit covers the fundamental principles of sensors, their classification, and detailed study of electromechanical sensors like Strain Gauges and Capacitive Sensors.</p>",topics:[{title:"Sensors & Transducers Basics",content:`
          <div class="study-guide-box">
            <h4>1. Principles & Classification</h4>
            <div class="definition-box">
              <strong>Sensor:</strong> A device that detects a physical parameter (heat, light, pressure) and converts it into a signal (usually electrical) that can be measured.
            </div>
            <div class="definition-box">
              <strong>Transducer:</strong> A device that converts energy from one form to another. (e.g., Microphone converts sound energy to electrical energy).
            </div>
            
            <h5>Classification of Sensors:</h5>
            <ul>
              <li><strong>Active vs Passive:</strong> Active require external power (Strain Gauge); Passive do not (Thermocouple).</li>
              <li><strong>Analog vs Digital:</strong> Output continuous signal vs discrete steps.</li>
              <li><strong>Contact vs Non-Contact:</strong> Touch the object vs measure from distance (IR sensor).</li>
            </ul>
            
            <div class="key-takeaway">
              <strong>Key Difference:</strong> All sensors are transducers, but not all transducers are sensors (e.g., an actuator is a transducer but not a sensor).
            </div>
          </div>
        `},{title:"Electromechanical Sensors",content:`
          <div class="study-guide-box">
            <h4>Resistive Potentiometer</h4>
            <p>A simple sensor where resistance changes with displacement.</p>
            
            <h4>Strain Gauge</h4>
            <div class="definition-box">
              <strong>Principle:</strong> When a metal conductor is stretched or compressed, its resistance changes due to change in length and cross-sectional area. (Piezoresistive effect).
            </div>
            
            <div class="formula-box">
              <strong>Gauge Factor (GF) Formula:</strong><br>
              GF = (ΔR / R) / ε<br>
              Where:<br>
              ε = Strain (ΔL / L)<br>
              <strong>Approximation:</strong> GF ≈ 1 + 2ν + (Δρ/ρ)/ε
            </div>
            
            <p><strong>Applications:</strong> Aerospace (wing stress), Automotive (suspension testing), Civil (bridge load monitoring).</p>
            
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Bonded Strain Gauge</h5>
                <p>Directly glued to the structure. Better accuracy.</p>
              </div>
              <div class="concept-card">
                <h5>Unbonded Strain Gauge</h5>
                <p>Wires stretched between posts. Used in accelerometers.</p>
              </div>
            </div>
          </div>
        `},{title:"Inductive & Capacitive Sensors",content:`
          <div class="study-guide-box">
            <h4>Capacitive Sensors</h4>
            <p>Measure change in capacitance based on the formula:</p>
            <div class="formula-box">C = εA / d</div>
            
            <h5>Liquid Level Measurement Principle:</h5>
            <p>As liquid level rises, the dielectric constant (ε) between plates changes (liquid replaces air), increasing capacitance linearly.</p>
            
            <div class="deep-dive-box">
              <h5>Advantages of Capacitive Sensors</h5>
              <ul>
                <li>Non-contact measurement possible</li>
                <li>High sensitivity</li>
                <li>Low power consumption</li>
              </ul>
            </div>
            
            <h4>Ultrasonic Sensors</h4>
            <p>Use sound waves to measure distance. <strong>Principle:</strong> Time of Flight (ToF).</p>
          </div>
        `}]},{unit:"II",title:"Thermal Sensors",notes:"<h3>Unit II Overview</h3><p>Focuses on temperature measurement techniques ranging from gas thermometers to modern semiconductor and radiation sensors.</p>",topics:[{title:"Thermometric Sensors",content:`
          <div class="study-guide-box">
            <h4>Gas & Thermal Expansion Sensors</h4>
            <p>Based on the principle that volume/pressure of gas or liquid changes with temperature.</p>
            <ul>
              <li><strong>Bimetallic Strip:</strong> Two metals with different expansion coefficients bonded together. Bends when heated. Used in thermostats.</li>
            </ul>
          </div>
        `},{title:"Thermo EMF & Semiconductor Sensors",content:`
          <div class="study-guide-box">
            <h4>Thermocouple (Thermo EMF)</h4>
            <div class="definition-box">
              <strong>Seebeck Effect:</strong> When two dissimilar metals are joined at two junctions kept at different temperatures, an EMF is generated. (Heat -> Electricity).
            </div>
            
            <div class="key-takeaway">
              <strong>Seebeck vs Peltier:</strong><br>
              Seebeck: Temp Diff -> Voltage (Generation)<br>
              Peltier: Voltage -> Temp Diff (Cooling/Heating)
            </div>
            
            <table class="comparison-table">
              <tr>
                <th>Type</th>
                <th>Materials</th>
                <th>Range</th>
              </tr>
              <tr>
                <td>Type K</td>
                <td>Chromel-Alumel</td>
                <td>-200°C to 1250°C</td>
              </tr>
              <tr>
                <td>Type J</td>
                <td>Iron-Constantan</td>
                <td>0°C to 750°C</td>
              </tr>
            </table>
            
            <h4>Thermistors</h4>
            <p>Resistors with high negative temperature coefficient (NTC). Resistance decreases drastically as temperature increases.</p>
          </div>
        `}]},{unit:"III",title:"Magnetic Sensors",notes:"<h3>Unit III Overview</h3><p>Explores sensors based on magnetic principles, including Hall Effect and Eddy Current sensors.</p>",topics:[{title:"Hall Effect Sensors",content:`
          <div class="study-guide-box">
            <h4>Hall Effect</h4>
            <div class="definition-box">
              When a current-carrying conductor is placed in a magnetic field perpendicular to the current, a voltage (Hall Voltage) is generated across the conductor perpendicular to both.
            </div>
            <div class="formula-box">
              <strong>Hall Voltage:</strong> V<sub>H</sub> = (I * B) / (n * q * t)
            </div>
            <p><strong>Applications:</strong> Speed detection (RPM), position sensing, current measurement.</p>
          </div>
        `},{title:"Inductance & Eddy Current Sensors",content:`
          <div class="study-guide-box">
            <h4>LVDT (Linear Variable Differential Transformer)</h4>
            <p>An inductive transducer used to measure linear displacement. High accuracy and infinite resolution.</p>
            
            <div class="deep-dive-box">
              <h5>Working Principle</h5>
              <p>Based on transformer action. Primary coil excited by AC. Two secondary coils connected in opposition.</p>
              <ul>
                <li><strong>Null Position:</strong> Core at center, Output = 0V.</li>
                <li><strong>Displacement:</strong> Core moves L/R, Output increases proportionally.</li>
              </ul>
            </div>
            
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Advantages</h5>
                <p>Frictionless, Infinite Resolution, Robust.</p>
              </div>
              <div class="concept-card">
                <h5>Disadvantages</h5>
                <p>Sensitive to stray magnetic fields, Requires AC source.</p>
              </div>
            </div>
          </div>
        `}]},{unit:"IV",title:"Radiation & Electro-analytical Sensors",notes:"<h3>Unit IV Overview</h3><p>Covers light/radiation detection and chemical sensing principles.</p>",topics:[{title:"Photo Sensors",content:`
          <div class="study-guide-box">
            <h4>LDR (Light Dependent Resistor)</h4>
            <p>Resistance decreases when light falls on it. Also called Photoresistor.</p>
            
            <h4>Photodiode</h4>
            <p>Generates current proportional to light intensity (Reverse bias).</p>
            
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Photovoltaic Mode</h5>
                <p>Generates voltage (Solar Cell). Zero bias.</p>
              </div>
              <div class="concept-card">
                <h5>Photoconductive Mode</h5>
                <p>Conductivity changes. Reverse bias. Faster response.</p>
              </div>
            </div>
          </div>
        `},{title:"Electro-analytical Sensors",content:`
          <div class="study-guide-box">
            <h4>Electrochemical Cell</h4>
            <p>Used to measure chemical concentrations (e.g., pH sensor).</p>
            <p><strong>SHE (Standard Hydrogen Electrode):</strong> The universal reference electrode with potential defined as 0V.</p>
            
            <div class="definition-box">
              <strong>Nernst Equation:</strong> Relates the reduction potential of an electrochemical reaction to the standard electrode potential, temperature, and activities.
            </div>
          </div>
        `}]},{unit:"V",title:"Smart Sensors & Applications",notes:"<h3>Unit V Overview</h3><p>Introduction to intelligent sensors with built-in processing and their applications in various industries.</p>",topics:[{title:"Smart Sensors",content:`
          <div class="study-guide-box">
            <h4>What is a Smart Sensor?</h4>
            <div class="definition-box">
              A sensor that includes a sensing element, an analog interface circuit, an ADC, and a bus interface, often with a microcontroller for data processing.
            </div>
            
            <div class="deep-dive-box">
              <h5>IEEE 1451 Standard</h5>
              <p>Defines a standard interface for connecting smart transducers to networks.</p>
              <ul>
                <li><strong>TEDS:</strong> Transducer Electronic Data Sheet (Self-ID).</li>
                <li><strong>NCAP:</strong> Network Capable Application Processor.</li>
                <li><strong>TIM:</strong> Transducer Interface Module.</li>
              </ul>
            </div>
            
            <h5>Functions:</h5>
            <ul>
              <li>Self-calibration</li>
              <li>Self-diagnosis</li>
              <li>Digital communication</li>
            </ul>
          </div>
        `},{title:"Applications",content:`
          <div class="study-guide-box">
            <h4>Automotive Sensors</h4>
            <p>ABS (Wheel Speed), Airbag (Accelerometer), TPMS (Pressure), Oxygen Sensor (Exhaust).</p>
            <h4>Aerospace</h4>
            <p>Altimeters (Pressure), Gyroscopes (Navigation), Strain Gauges (Structural Health).</p>
            <h4>Home Automation</h4>
            <p>Thermostats (Temp), Motion Detectors (PIR), Smoke Detectors (Optical/Ionization).</p>
          </div>
        `}]}],fm={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1}]},dm={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer.",answer:"Sensor detects physical parameter. Transducer converts energy form."},{id:2,question:"What is Gauge Factor?",answer:"Sensitivity of strain gauge. GF = (dR/R)/strain."},{id:3,question:"State Seebeck Effect.",answer:"EMF generation at junction of dissimilar metals due to temp diff."},{id:4,question:"What is a Thermistor?",answer:"Resistor with high negative temp coefficient."},{id:5,question:"Define Hall Effect.",answer:"Voltage generation perpendicular to current and magnetic field."},{id:6,question:"What is LVDT?",answer:"Linear Variable Differential Transformer for displacement."},{id:7,question:"What is LDR?",answer:"Light Dependent Resistor."},{id:8,question:"Define SHE.",answer:"Standard Hydrogen Electrode (0V reference)."},{id:9,question:"What is a Smart Sensor?",answer:"Sensor with built-in processing and communication."},{id:10,question:"List 2 automotive sensors.",answer:"ABS sensor, Airbag sensor."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the working principle of Strain Gauge.",answer:"Detailed explanation of piezoresistive effect..."},{question:"Describe Capacitive Transducers.",answer:"Principle C=eA/d and applications..."}]}]},hm=[{category:"Sensor Diagrams",tips:[{title:"Draw the Block Diagram",content:"For any sensor (e.g., Smart Sensor), always draw: **Input -> Sensing Element -> Signal Conditioning -> ADC -> Output**."}]}],gm=[{id:1,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>Device converting energy from one form to another.</p></div>'},{id:2,unit:"I",front:"Gauge Factor",back:'<div class="fc-content"><p>Sensitivity of Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong></p></div>'},{id:3,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Generation of EMF when two dissimilar metals are kept at different temperatures.</p></div>'},{id:4,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Voltage generated perpendicular to both current and magnetic field.</p></div>'},{id:5,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>Sensor + Signal Conditioning + ADC + Processor.</p></div>'}];function mm(){const[z,ht]=Bt.useState(null),d=z==="sensors"?{title:"Electronic Sensors",syllabus:rm,quizzes:fm,papers:[dm],tips:hm,flashcards:gm,progressKey:"electronicSensorsProgress"}:{title:"Mobile Computing",syllabus:am,quizzes:nm,papers:[im,sm,um],tips:om,flashcards:cm,progressKey:"mobileComputingProgress"},[j,I]=Bt.useState(null),[W,Tt]=Bt.useState(null),[N,x]=Bt.useState("study"),[X,O]=Bt.useState(0),[it,Ht]=Bt.useState(0),[Qt,xt]=Bt.useState(!1),[Wt,Xt]=Bt.useState([]),[_t,Mt]=Bt.useState({}),[Jt,ne]=Bt.useState(0),[zt,Y]=Bt.useState({}),[Ut,ie]=Bt.useState({}),[Oe,se]=Bt.useState(null),[Nt,ye]=Bt.useState(0),[pe,Zt]=Bt.useState(!1),[y,C]=Bt.useState([]);Bt.useEffect(()=>{if(z){const M=localStorage.getItem(d.progressKey);Mt(M?JSON.parse(M):{}),x("study"),I(null),Tt(null),C([...d.flashcards]),ye(0),ne(0)}},[z,d.progressKey,d.flashcards]);const B=(M,P,at)=>{const be=_t[M]?.score||0;if(P>be){const Oa={..._t,[M]:{score:P,total:at}};Mt(Oa),localStorage.setItem(d.progressKey,JSON.stringify(Oa))}},lt=M=>{I(j===M?null:M)},st=M=>se(M),r=()=>se(null),T=M=>{d.quizzes[M]?(Tt(M),O(0),Ht(0),xt(!1)):alert("Quiz coming soon for this unit!")},D=()=>{let M=[];Object.values(d.quizzes).forEach(be=>{M=[...M,...be]});const at=M.sort(()=>.5-Math.random()).slice(0,10);Xt(at),Tt("FINAL"),O(0),Ht(0),xt(!1)},E=M=>{let P=!1;const at=W==="FINAL"?Wt:d.quizzes[W];M===at[X].answer&&(P=!0),P&&Ht(it+1);const be=X+1;be<at.length?O(be):(xt(!0),B(W,P?it+1:it,at.length))},_=()=>{Tt(null),O(0),Ht(0),xt(!1),Xt([])},L=M=>{Y(P=>({...P,[M]:!P[M]}))},F=(M,P)=>{ie(at=>({...at,[M]:P}))},jt=M=>{ne(M),Y({}),ie({}),window.scrollTo(0,0)},yt=()=>{Zt(!1),setTimeout(()=>ye(M=>(M+1)%y.length),200)},El=()=>{Zt(!1),setTimeout(()=>ye(M=>(M-1+y.length)%y.length),200)},Kl=()=>Zt(!pe),Ha=()=>{Zt(!1),setTimeout(()=>{const M=[...d.flashcards].sort(()=>.5-Math.random());C(M),ye(0)},200)};if(!z)return p.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[p.jsx("h1",{children:"Select Your Subject"}),p.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[p.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("mobile"),children:[p.jsx("h2",{children:"📱 Mobile Computing"}),p.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),p.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),p.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("sensors"),children:[p.jsx("h2",{children:"🌡️ Electronic Sensors"}),p.jsx("p",{children:"Unit I - V, Open Elective-II"}),p.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const qe=d.papers[Jt];return p.jsxs("div",{className:"container",children:[p.jsxs("header",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[p.jsx("button",{className:"btn",onClick:()=>ht(null),children:"← Switch Subject"}),p.jsx("span",{className:"unit-badge",children:d.title})]}),p.jsxs("h1",{children:[d.title," Prep"]}),p.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),p.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[p.jsx("button",{className:`btn ${N==="study"?"btn-primary":""}`,onClick:()=>x("study"),children:"Study Mode"}),p.jsx("button",{className:`btn ${N==="paper"?"btn-primary":""}`,onClick:()=>x("paper"),children:"Model Papers"}),p.jsx("button",{className:`btn ${N==="tips"?"btn-primary":""}`,onClick:()=>x("tips"),children:"Exam Tips"}),p.jsx("button",{className:`btn ${N==="flashcards"?"btn-primary":""}`,onClick:()=>x("flashcards"),children:"Flashcards"})]}),N==="study"&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:D,children:"Start Final Exam (Mixed)"}),_t.FINAL&&p.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",_t.FINAL.score,"/",_t.FINAL.total]})]})]}),N==="study"&&p.jsx("main",{className:"grid",children:d.syllabus.map(M=>p.jsxs("div",{className:"card",children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("span",{className:"unit-badge",children:["Unit ",M.unit]}),_t[M.unit]&&p.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",_t[M.unit].score,"/",_t[M.unit].total]})]}),p.jsx("h2",{children:M.title}),j===M.unit&&M.notes?p.jsx("div",{className:"notes-content",children:p.jsx("div",{dangerouslySetInnerHTML:{__html:M.notes}})}):p.jsxs("div",{className:"topics-list-container",children:[p.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),p.jsx("div",{className:"topics-grid",children:M.topics.map((P,at)=>p.jsx("button",{className:"topic-btn",onClick:()=>st(P),children:P.title},at))})]}),p.jsxs("div",{className:"actions",children:[p.jsx("button",{className:`btn ${j===M.unit?"btn-primary":""}`,onClick:()=>M.notes?lt(M.unit):alert("Notes coming soon!"),children:j===M.unit?"Hide Overview":"Unit Overview"}),p.jsx("button",{className:"btn btn-primary",onClick:()=>T(M.unit),children:"Take Quiz"})]})]},M.unit))}),N==="paper"&&p.jsxs("main",{className:"paper-container",children:[p.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:d.papers.map((M,P)=>p.jsxs("button",{className:`btn ${Jt===P?"btn-primary":""}`,onClick:()=>jt(P),children:["Paper Set ",P+1]},P))}),p.jsxs("div",{className:"paper-header",children:[p.jsx("h2",{children:qe.title}),p.jsx("h3",{children:qe.subject}),p.jsxs("div",{className:"paper-meta",children:[p.jsxs("span",{children:["Time: ",qe.time]}),p.jsxs("span",{children:["Max Marks: ",qe.maxMarks]})]})]}),p.jsxs("div",{className:"paper-section",children:[p.jsx("h3",{children:"PART-A (Short Answer Questions)"}),p.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),p.jsx("div",{className:"questions-list",children:qe.partA.map(M=>p.jsxs("div",{className:"question-item",children:[p.jsxs("div",{className:"question-text",children:[p.jsxs("strong",{children:[M.id,"."]})," ",M.question," ",p.jsx("span",{className:"marks",children:"[1M]"})]}),p.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:Ut[`A-${M.id}`]||"",onChange:P=>F(`A-${M.id}`,P.target.value)}),p.jsx("button",{className:"btn-text",onClick:()=>L(`A-${M.id}`),children:zt[`A-${M.id}`]?"Hide Model Answer":"Show Model Answer"}),zt[`A-${M.id}`]&&p.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:M.answer}})]},M.id))})]}),qe.partB&&p.jsxs("div",{className:"paper-section",children:[p.jsx("h3",{children:"PART-B (Long Answer Questions)"}),p.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),p.jsx("div",{className:"questions-list",children:qe.partB.map(M=>p.jsxs("div",{className:"question-group",children:[p.jsxs("h4",{children:["Unit ",M.unit]}),M.choices.map((P,at)=>p.jsxs("div",{children:[p.jsxs("div",{className:"question-item",children:[p.jsxs("div",{className:"question-text",children:[p.jsxs("strong",{children:[M.questionNumber," (",String.fromCharCode(97+at),")."]})," ",P.question," ",p.jsx("span",{className:"marks",children:"[10M]"})]}),p.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:Ut[`B-${M.questionNumber}${at}`]||"",onChange:be=>F(`B-${M.questionNumber}${at}`,be.target.value)}),p.jsx("button",{className:"btn-text",onClick:()=>L(`B-${M.questionNumber}${at}`),children:zt[`B-${M.questionNumber}${at}`]?"Hide Model Answer":"Show Model Answer"}),zt[`B-${M.questionNumber}${at}`]&&p.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:P.answer}})]}),at===0&&p.jsx("div",{className:"or-divider",children:"OR"})]},at))]},M.questionNumber))})]})]}),N==="tips"&&p.jsxs("main",{className:"tips-container",children:[p.jsxs("div",{className:"tips-header",children:[p.jsx("h2",{children:"Exam Tips & Hacks"}),p.jsx("p",{children:"Master the art of writing exams with these strategic insights."})]}),p.jsx("div",{className:"tips-grid",children:d.tips.map((M,P)=>p.jsxs("div",{className:"tip-section",children:[p.jsx("h3",{children:M.category}),p.jsx("div",{className:"tips-list",children:M.tips.map((at,be)=>p.jsxs("div",{className:"tip-card",children:[p.jsx("h4",{children:at.title}),p.jsx("div",{dangerouslySetInnerHTML:{__html:at.content.replace(/\n/g,"<br/>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}})]},be))})]},P))})]}),N==="flashcards"&&y.length>0&&p.jsxs("main",{className:"flashcard-container",children:[p.jsxs("div",{className:"flashcard-header",children:[p.jsx("h2",{children:"Interactive Flashcards"}),p.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),p.jsx("div",{className:"flashcard-scene",children:p.jsxs("div",{className:`flashcard ${pe?"flipped":""}`,onClick:Kl,children:[p.jsxs("div",{className:"flashcard-face flashcard-front",children:[p.jsxs("span",{className:"card-unit",children:["Unit ",y[Nt].unit]}),p.jsx("h3",{children:y[Nt].front}),p.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),p.jsx("div",{className:"flashcard-face flashcard-back",children:p.jsx("div",{dangerouslySetInnerHTML:{__html:y[Nt].back}})})]})}),p.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[p.jsx("button",{className:"btn btn-primary",onClick:El,children:"← Previous"}),p.jsxs("span",{className:"card-count",children:[Nt+1," / ",y.length]}),p.jsx("button",{className:"btn btn-primary",onClick:yt,children:"Next →"})]}),p.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:p.jsx("button",{className:"btn btn-primary",onClick:Ha,children:"Shuffle Cards"})})]}),W&&p.jsx("div",{className:"modal-overlay",children:p.jsxs("div",{className:"modal-content",children:[p.jsx("button",{className:"close-btn",onClick:_,children:"×"}),Qt?p.jsxs("div",{className:"score-section",children:[p.jsx("h2",{children:"Quiz Completed!"}),p.jsxs("p",{children:["Your Score: ",it," / ",W==="FINAL"?Wt.length:d.quizzes[W].length]}),p.jsx("button",{className:"btn btn-primary",onClick:_,children:"Close"})]}):p.jsxs("div",{className:"quiz-section",children:[p.jsxs("h3",{children:[W==="FINAL"?"Final Exam":`Unit ${W} Quiz`,"- Question ",X+1,"/",W==="FINAL"?Wt.length:d.quizzes[W].length]}),(()=>{const M=W==="FINAL"?Wt:d.quizzes[W];return p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"question-text",children:M[X].question}),p.jsx("div",{className:"options-grid",children:M[X].options.map((P,at)=>p.jsx("button",{className:"option-btn",onClick:()=>E(at),children:P},at))})]})})()]})]})}),Oe&&p.jsx("div",{className:"modal-overlay",children:p.jsxs("div",{className:"modal-content topic-modal",children:[p.jsx("button",{className:"close-btn",onClick:r,children:"×"}),p.jsxs("div",{className:"topic-content",children:[p.jsx("h2",{children:Oe.title}),p.jsx("div",{dangerouslySetInnerHTML:{__html:Oe.content}})]}),p.jsx("button",{className:"btn btn-primary",onClick:r,style:{marginTop:"2rem"},children:"Close"})]})})]})}lm.createRoot(document.getElementById("root")).render(p.jsx(Bt.StrictMode,{children:p.jsx(mm,{})}));
