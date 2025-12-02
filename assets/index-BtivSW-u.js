(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const S of p.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&l(S)}).observe(document,{childList:!0,subtree:!0});function u(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(f){if(f.ep)return;f.ep=!0;const p=u(f);fetch(f.href,p)}})();var Hl={exports:{}},Ga={};var Zh;function Jp(){if(Zh)return Ga;Zh=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function u(l,f,p){var S=null;if(p!==void 0&&(S=""+p),f.key!==void 0&&(S=""+f.key),"key"in f){p={};for(var w in f)w!=="key"&&(p[w]=f[w])}else p=f;return f=p.ref,{$$typeof:r,type:l,key:S,ref:f!==void 0?f:null,props:p}}return Ga.Fragment=d,Ga.jsx=u,Ga.jsxs=u,Ga}var Jh;function $p(){return Jh||(Jh=1,Hl.exports=Jp()),Hl.exports}var h=$p(),ql={exports:{}},ie={};var $h;function em(){if($h)return ie;$h=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),S=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),B=Symbol.iterator;function j(b){return b===null||typeof b!="object"?null:(b=B&&b[B]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,W={};function _(b,N,O){this.props=b,this.context=N,this.refs=W,this.updater=O||G}_.prototype.isReactComponent={},_.prototype.setState=function(b,N){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,N,"setState")},_.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function H(){}H.prototype=_.prototype;function K(b,N,O){this.props=b,this.context=N,this.refs=W,this.updater=O||G}var pe=K.prototype=new H;pe.constructor=K,Y(pe,_.prototype),pe.isPureReactComponent=!0;var ke=Array.isArray;function Ce(){}var J={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function xe(b,N,O){var U=O.ref;return{$$typeof:r,type:b,key:N,ref:U!==void 0?U:null,props:O}}function $e(b,N){return xe(b.type,N,b.props)}function tt(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Ge(b){var N={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(O){return N[O]})}var Bt=/\/+/g;function wt(b,N){return typeof b=="object"&&b!==null&&b.key!=null?Ge(""+b.key):N.toString(36)}function nt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Ce,Ce):(b.status="pending",b.then(function(N){b.status==="pending"&&(b.status="fulfilled",b.value=N)},function(N){b.status==="pending"&&(b.status="rejected",b.reason=N)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,N,O,U,ee){var te=typeof b;(te==="undefined"||te==="boolean")&&(b=null);var ue=!1;if(b===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(b.$$typeof){case r:case d:ue=!0;break;case D:return ue=b._init,R(ue(b._payload),N,O,U,ee)}}if(ue)return ee=ee(b),ue=U===""?"."+wt(b,0):U,ke(ee)?(O="",ue!=null&&(O=ue.replace(Bt,"$&/")+"/"),R(ee,N,O,"",function(Bi){return Bi})):ee!=null&&(tt(ee)&&(ee=$e(ee,O+(ee.key==null||b&&b.key===ee.key?"":(""+ee.key).replace(Bt,"$&/")+"/")+ue)),N.push(ee)),1;ue=0;var Fe=U===""?".":U+":";if(ke(b))for(var Re=0;Re<b.length;Re++)U=b[Re],te=Fe+wt(U,Re),ue+=R(U,N,O,te,ee);else if(Re=j(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(U=b.next()).done;)U=U.value,te=Fe+wt(U,Re++),ue+=R(U,N,O,te,ee);else if(te==="object"){if(typeof b.then=="function")return R(nt(b),N,O,U,ee);throw N=String(b),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ue}function q(b,N,O){if(b==null)return b;var U=[],ee=0;return R(b,U,"","",function(te){return N.call(O,te,ee++)}),U}function X(b){if(b._status===-1){var N=b._result;N=N(),N.then(function(O){(b._status===0||b._status===-1)&&(b._status=1,b._result=O)},function(O){(b._status===0||b._status===-1)&&(b._status=2,b._result=O)}),b._status===-1&&(b._status=0,b._result=N)}if(b._status===1)return b._result.default;throw b._result}var de=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},he={map:q,forEach:function(b,N,O){q(b,function(){N.apply(this,arguments)},O)},count:function(b){var N=0;return q(b,function(){N++}),N},toArray:function(b){return q(b,function(N){return N})||[]},only:function(b){if(!tt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ie.Activity=M,ie.Children=he,ie.Component=_,ie.Fragment=u,ie.Profiler=f,ie.PureComponent=K,ie.StrictMode=l,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ie.__COMPILER_RUNTIME={__proto__:null,c:function(b){return J.H.useMemoCache(b)}},ie.cache=function(b){return function(){return b.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(b,N,O){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var U=Y({},b.props),ee=b.key;if(N!=null)for(te in N.key!==void 0&&(ee=""+N.key),N)!Le.call(N,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&N.ref===void 0||(U[te]=N[te]);var te=arguments.length-2;if(te===1)U.children=O;else if(1<te){for(var ue=Array(te),Fe=0;Fe<te;Fe++)ue[Fe]=arguments[Fe+2];U.children=ue}return xe(b.type,ee,U)},ie.createContext=function(b){return b={$$typeof:S,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},ie.createElement=function(b,N,O){var U,ee={},te=null;if(N!=null)for(U in N.key!==void 0&&(te=""+N.key),N)Le.call(N,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(ee[U]=N[U]);var ue=arguments.length-2;if(ue===1)ee.children=O;else if(1<ue){for(var Fe=Array(ue),Re=0;Re<ue;Re++)Fe[Re]=arguments[Re+2];ee.children=Fe}if(b&&b.defaultProps)for(U in ue=b.defaultProps,ue)ee[U]===void 0&&(ee[U]=ue[U]);return xe(b,te,ee)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(b){return{$$typeof:w,render:b}},ie.isValidElement=tt,ie.lazy=function(b){return{$$typeof:D,_payload:{_status:-1,_result:b},_init:X}},ie.memo=function(b,N){return{$$typeof:m,type:b,compare:N===void 0?null:N}},ie.startTransition=function(b){var N=J.T,O={};J.T=O;try{var U=b(),ee=J.S;ee!==null&&ee(O,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Ce,de)}catch(te){de(te)}finally{N!==null&&O.types!==null&&(N.types=O.types),J.T=N}},ie.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ie.use=function(b){return J.H.use(b)},ie.useActionState=function(b,N,O){return J.H.useActionState(b,N,O)},ie.useCallback=function(b,N){return J.H.useCallback(b,N)},ie.useContext=function(b){return J.H.useContext(b)},ie.useDebugValue=function(){},ie.useDeferredValue=function(b,N){return J.H.useDeferredValue(b,N)},ie.useEffect=function(b,N){return J.H.useEffect(b,N)},ie.useEffectEvent=function(b){return J.H.useEffectEvent(b)},ie.useId=function(){return J.H.useId()},ie.useImperativeHandle=function(b,N,O){return J.H.useImperativeHandle(b,N,O)},ie.useInsertionEffect=function(b,N){return J.H.useInsertionEffect(b,N)},ie.useLayoutEffect=function(b,N){return J.H.useLayoutEffect(b,N)},ie.useMemo=function(b,N){return J.H.useMemo(b,N)},ie.useOptimistic=function(b,N){return J.H.useOptimistic(b,N)},ie.useReducer=function(b,N,O){return J.H.useReducer(b,N,O)},ie.useRef=function(b){return J.H.useRef(b)},ie.useState=function(b){return J.H.useState(b)},ie.useSyncExternalStore=function(b,N,O){return J.H.useSyncExternalStore(b,N,O)},ie.useTransition=function(){return J.H.useTransition()},ie.version="19.2.0",ie}var ef;function Ql(){return ef||(ef=1,ql.exports=em()),ql.exports}var k=Ql(),Ol={exports:{}},Va={},jl={exports:{}},Ul={};var tf;function tm(){return tf||(tf=1,(function(r){function d(R,q){var X=R.length;R.push(q);e:for(;0<X;){var de=X-1>>>1,he=R[de];if(0<f(he,q))R[de]=q,R[X]=he,X=de;else break e}}function u(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var q=R[0],X=R.pop();if(X!==q){R[0]=X;e:for(var de=0,he=R.length,b=he>>>1;de<b;){var N=2*(de+1)-1,O=R[N],U=N+1,ee=R[U];if(0>f(O,X))U<he&&0>f(ee,O)?(R[de]=ee,R[U]=X,de=U):(R[de]=O,R[N]=X,de=N);else if(U<he&&0>f(ee,X))R[de]=ee,R[U]=X,de=U;else break e}}return q}function f(R,q){var X=R.sortIndex-q.sortIndex;return X!==0?X:R.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var S=Date,w=S.now();r.unstable_now=function(){return S.now()-w}}var y=[],m=[],D=1,M=null,B=3,j=!1,G=!1,Y=!1,W=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function pe(R){for(var q=u(m);q!==null;){if(q.callback===null)l(m);else if(q.startTime<=R)l(m),q.sortIndex=q.expirationTime,d(y,q);else break;q=u(m)}}function ke(R){if(Y=!1,pe(R),!G)if(u(y)!==null)G=!0,Ce||(Ce=!0,Ge());else{var q=u(m);q!==null&&nt(ke,q.startTime-R)}}var Ce=!1,J=-1,Le=5,xe=-1;function $e(){return W?!0:!(r.unstable_now()-xe<Le)}function tt(){if(W=!1,Ce){var R=r.unstable_now();xe=R;var q=!0;try{e:{G=!1,Y&&(Y=!1,H(J),J=-1),j=!0;var X=B;try{t:{for(pe(R),M=u(y);M!==null&&!(M.expirationTime>R&&$e());){var de=M.callback;if(typeof de=="function"){M.callback=null,B=M.priorityLevel;var he=de(M.expirationTime<=R);if(R=r.unstable_now(),typeof he=="function"){M.callback=he,pe(R),q=!0;break t}M===u(y)&&l(y),pe(R)}else l(y);M=u(y)}if(M!==null)q=!0;else{var b=u(m);b!==null&&nt(ke,b.startTime-R),q=!1}}break e}finally{M=null,B=X,j=!1}q=void 0}}finally{q?Ge():Ce=!1}}}var Ge;if(typeof K=="function")Ge=function(){K(tt)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,wt=Bt.port2;Bt.port1.onmessage=tt,Ge=function(){wt.postMessage(null)}}else Ge=function(){_(tt,0)};function nt(R,q){J=_(function(){R(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(R){switch(B){case 1:case 2:case 3:var q=3;break;default:q=B}var X=B;B=q;try{return R()}finally{B=X}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(R,q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var X=B;B=R;try{return q()}finally{B=X}},r.unstable_scheduleCallback=function(R,q,X){var de=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?de+X:de):X=de,R){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=X+he,R={id:D++,callback:q,priorityLevel:R,startTime:X,expirationTime:he,sortIndex:-1},X>de?(R.sortIndex=X,d(m,R),u(y)===null&&R===u(m)&&(Y?(H(J),J=-1):Y=!0,nt(ke,X-de))):(R.sortIndex=he,d(y,R),G||j||(G=!0,Ce||(Ce=!0,Ge()))),R},r.unstable_shouldYield=$e,r.unstable_wrapCallback=function(R){var q=B;return function(){var X=B;B=q;try{return R.apply(this,arguments)}finally{B=X}}}})(Ul)),Ul}var nf;function im(){return nf||(nf=1,jl.exports=tm()),jl.exports}var Gl={exports:{}},et={};var af;function nm(){if(af)return et;af=1;var r=Ql();function d(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)m+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var l={d:{f:u,r:function(){throw Error(d(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,m,D){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:M==null?null:""+M,children:y,containerInfo:m,implementation:D}}var S=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,et.createPortal=function(y,m){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(d(299));return p(y,m,null,D)},et.flushSync=function(y){var m=S.T,D=l.p;try{if(S.T=null,l.p=2,y)return y()}finally{S.T=m,l.p=D,l.d.f()}},et.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(y,m))},et.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},et.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var D=m.as,M=w(D,m.crossOrigin),B=typeof m.integrity=="string"?m.integrity:void 0,j=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;D==="style"?l.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:B,fetchPriority:j}):D==="script"&&l.d.X(y,{crossOrigin:M,integrity:B,fetchPriority:j,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},et.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var D=w(m.as,m.crossOrigin);l.d.M(y,{crossOrigin:D,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(y)},et.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var D=m.as,M=w(D,m.crossOrigin);l.d.L(y,D,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},et.preloadModule=function(y,m){if(typeof y=="string")if(m){var D=w(m.as,m.crossOrigin);l.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:D,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(y)},et.requestFormReset=function(y){l.d.r(y)},et.unstable_batchedUpdates=function(y,m){return y(m)},et.useFormState=function(y,m,D){return S.H.useFormState(y,m,D)},et.useFormStatus=function(){return S.H.useHostTransitionStatus()},et.version="19.2.0",et}var of;function am(){if(of)return Gl.exports;of=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Gl.exports=nm(),Gl.exports}var sf;function om(){if(sf)return Va;sf=1;var r=im(),d=Ql(),u=am();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(l(188));return t!==e?null:e}for(var i=e,n=t;;){var a=i.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){i=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===i)return y(a),e;if(o===n)return y(a),t;o=o.sibling}throw Error(l(188))}if(i.return!==n.return)i=a,n=o;else{for(var s=!1,c=a.child;c;){if(c===i){s=!0,i=a,n=o;break}if(c===n){s=!0,n=a,i=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===i){s=!0,i=o,n=a;break}if(c===n){s=!0,n=o,i=a;break}c=c.sibling}if(!s)throw Error(l(189))}}if(i.alternate!==n)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,B=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),K=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),$e=Symbol.for("react.memo_cache_sentinel"),tt=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=tt&&e[tt]||e["@@iterator"],typeof e=="function"?e:null)}var Bt=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case _:return"Profiler";case W:return"StrictMode";case ke:return"Suspense";case Ce:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case K:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var nt=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},de=[],he=-1;function b(e){return{current:e}}function N(e){0>he||(e.current=de[he],de[he]=null,he--)}function O(e,t){he++,de[he]=e.current,e.current=t}var U=b(null),ee=b(null),te=b(null),ue=b(null);function Fe(e,t){switch(O(te,t),O(ee,e),O(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xh(t),e=wh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(U),O(U,e)}function Re(){N(U),N(ee),N(te)}function Bi(e){e.memoizedState!==null&&O(ue,e);var t=U.current,i=wh(t,e.type);t!==i&&(O(ee,e),O(U,i))}function Pi(e){ee.current===e&&(N(U),N(ee)),ue.current===e&&(N(ue),qa._currentValue=X)}var Fn,Ka;function Gt(e){if(Fn===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Fn=t&&t[1]||"",Ka=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fn+e+Ka}var nn=!1;function an(e,t){if(!e||nn)return"";nn=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(E){var C=E}Reflect.construct(e,[],L)}else{try{L.call()}catch(E){C=E}e.call(L.prototype)}}else{try{throw Error()}catch(E){C=E}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(E){if(E&&C&&typeof E.stack=="string")return[E.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var g=s.split(`
`),A=c.split(`
`);for(a=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;if(n===g.length||a===A.length)for(n=g.length-1,a=A.length-1;1<=n&&0<=a&&g[n]!==A[a];)a--;for(;1<=n&&0<=a;n--,a--)if(g[n]!==A[a]){if(n!==1||a!==1)do if(n--,a--,0>a||g[n]!==A[a]){var I=`
`+g[n].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=n&&0<=a);break}}}finally{nn=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Gt(i):""}function Xa(e,t){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==t&&t!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return an(e.type,!1);case 11:return an(e.type.render,!1);case 1:return an(e.type,!0);case 31:return Gt("Activity");default:return""}}function Za(e){try{var t="",i=null;do t+=Xa(e,i),i=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Yn=Object.prototype.hasOwnProperty,Qn=r.unstable_scheduleCallback,Kn=r.unstable_cancelCallback,Ts=r.unstable_shouldYield,on=r.unstable_requestPaint,Be=r.unstable_now,P=r.unstable_getCurrentPriorityLevel,$=r.unstable_ImmediatePriority,me=r.unstable_UserBlockingPriority,Ye=r.unstable_NormalPriority,As=r.unstable_LowPriority,ec=r.unstable_IdlePriority,Lf=r.log,Bf=r.unstable_setDisableYieldValue,Xn=null,dt=null;function ui(e){if(typeof Lf=="function"&&Bf(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Xn,e)}catch{}}var ht=Math.clz32?Math.clz32:qf,Pf=Math.log,Hf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-(Pf(e)/Hf|0)|0}var Ja=256,$a=262144,eo=4194304;function Hi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function to(e,t,i){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~o,n!==0?a=Hi(n):(s&=c,s!==0?a=Hi(s):i||(i=c&~e,i!==0&&(a=Hi(i))))):(c=n&~o,c!==0?a=Hi(c):s!==0?a=Hi(s):i||(i=n&~e,i!==0&&(a=Hi(i)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,i=t&-t,o>=i||o===32&&(i&4194048)!==0)?t:a}function Zn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Of(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(){var e=eo;return eo<<=1,(eo&62914560)===0&&(eo=4194304),e}function Cs(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Jn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jf(e,t,i,n,a,o){var s=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var c=e.entanglements,g=e.expirationTimes,A=e.hiddenUpdates;for(i=s&~i;0<i;){var I=31-ht(i),L=1<<I;c[I]=0,g[I]=-1;var C=A[I];if(C!==null)for(A[I]=null,I=0;I<C.length;I++){var E=C[I];E!==null&&(E.lane&=-536870913)}i&=~L}n!==0&&ic(e,n,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function ic(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ht(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|i&261930}function nc(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-ht(i),a=1<<n;a&t|e[n]&t&&(e[n]|=t),i&=~a}}function ac(e,t){var i=t&-t;return i=(i&42)!==0?1:ks(i),(i&(e.suspendedLanes|t))!==0?0:i}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:_h(e.type))}function sc(e,t){var i=q.p;try{return q.p=e,t()}finally{q.p=i}}var di=Math.random().toString(36).slice(2),Qe="__reactFiber$"+di,at="__reactProps$"+di,sn="__reactContainer$"+di,Es="__reactEvents$"+di,Uf="__reactListeners$"+di,Gf="__reactHandles$"+di,rc="__reactResources$"+di,$n="__reactMarker$"+di;function Ds(e){delete e[Qe],delete e[at],delete e[Es],delete e[Uf],delete e[Gf]}function rn(e){var t=e[Qe];if(t)return t;for(var i=e.parentNode;i;){if(t=i[sn]||i[Qe]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Eh(e);e!==null;){if(i=e[Qe])return i;e=Eh(e)}return t}e=i,i=e.parentNode}return null}function ln(e){if(e=e[Qe]||e[sn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ea(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function cn(e){var t=e[rc];return t||(t=e[rc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[$n]=!0}var lc=new Set,cc={};function qi(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(cc[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var Vf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uc={},dc={};function _f(e){return Yn.call(dc,e)?!0:Yn.call(uc,e)?!1:Vf.test(e)?dc[e]=!0:(uc[e]=!0,!1)}function io(e,t,i){if(_f(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function no(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Vt(e,t,i,n){if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+n)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wf(e,t,i){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rs(e){if(!e._valueTracker){var t=hc(e)?"checked":"value";e._valueTracker=Wf(e,t,""+e[t])}}function fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=hc(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ff=/[\n"\\]/g;function Tt(e){return e.replace(Ff,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Is(e,t,i,n,a,o,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Ns(e,s,St(t)):i!=null?Ns(e,s,St(i)):n!=null&&e.removeAttribute("value"),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+St(c):e.removeAttribute("name")}function gc(e,t,i,n,a,o,s,c){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||i!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Rs(e);return}i=i!=null?""+St(i):"",t=t!=null?""+St(t):i,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Rs(e)}function Ns(e,t,i){t==="number"&&ao(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function dn(e,t,i,n){if(e=e.options,t){t={};for(var a=0;a<i.length;a++)t["$"+i[a]]=!0;for(i=0;i<e.length;i++)a=t.hasOwnProperty("$"+e[i].value),e[i].selected!==a&&(e[i].selected=a),a&&n&&(e[i].defaultSelected=!0)}else{for(i=""+St(i),t=null,a=0;a<e.length;a++){if(e[a].value===i){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function pc(e,t,i){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+St(i):""}function mc(e,t,i,n){if(t==null){if(n!=null){if(i!=null)throw Error(l(92));if(nt(n)){if(1<n.length)throw Error(l(93));n=n[0]}i=n}i==null&&(i=""),t=i}i=St(t),e.defaultValue=i,n=e.textContent,n===i&&n!==""&&n!==null&&(e.value=n),Rs(e)}function hn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(e,t,i){var n=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,i):typeof i!="number"||i===0||Yf.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function vc(e,t,i){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&i[a]!==n&&yc(e,a,n)}else for(var o in t)t.hasOwnProperty(o)&&yc(e,o,t[o])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oo(e){return Kf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var Ls=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,gn=null;function bc(e){var t=ln(e);if(t&&(e=t.stateNode)){var i=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(Is(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var a=n[at]||null;if(!a)throw Error(l(90));Is(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<i.length;t++)n=i[t],n.form===e.form&&fc(n)}break e;case"textarea":pc(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&dn(e,!!i.multiple,t,!1)}}}var Ps=!1;function xc(e,t,i){if(Ps)return e(t,i);Ps=!0;try{var n=e(t);return n}finally{if(Ps=!1,(fn!==null||gn!==null)&&(Yo(),fn&&(t=fn,e=gn,gn=fn=null,bc(t),e)))for(t=0;t<e.length;t++)bc(e[t])}}function ta(e,t){var i=e.stateNode;if(i===null)return null;var n=i[at]||null;if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,t,typeof i));return i}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=!1;if(Wt)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Hs=!1}var hi=null,qs=null,so=null;function wc(){if(so)return so;var e,t=qs,i=t.length,n,a="value"in hi?hi.value:hi.textContent,o=a.length;for(e=0;e<i&&t[e]===a[e];e++);var s=i-e;for(n=1;n<=s&&t[i-n]===a[o-n];n++);return so=a.slice(e,1<n?1-n:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function Sc(){return!1}function ot(e){function t(i,n,a,o,s){this._reactName=i,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(i=e[c],this[c]=i?i(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lo:Sc,this.isPropagationStopped=Sc,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=ot(Oi),na=M({},Oi,{view:0,detail:0}),Xf=ot(na),Os,js,aa,uo=M({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(Os=e.screenX-aa.screenX,js=e.screenY-aa.screenY):js=Os=0,aa=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:js}}),Tc=ot(uo),Zf=M({},uo,{dataTransfer:0}),Jf=ot(Zf),$f=M({},na,{relatedTarget:0}),Us=ot($f),eg=M({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=ot(eg),ig=M({},Oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=ot(ig),ag=M({},Oi,{data:0}),Ac=ot(ag),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rg[e])?!!t[e]:!1}function Gs(){return lg}var cg=M({},na,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=ot(cg),dg=M({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=ot(dg),hg=M({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),fg=ot(hg),gg=M({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=ot(gg),mg=M({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=ot(mg),vg=M({},Oi,{newState:0,oldState:0}),bg=ot(vg),xg=[9,13,27,32],Vs=Wt&&"CompositionEvent"in window,oa=null;Wt&&"documentMode"in document&&(oa=document.documentMode);var wg=Wt&&"TextEvent"in window&&!oa,kc=Wt&&(!Vs||oa&&8<oa&&11>=oa),Mc=" ",Ec=!1;function Dc(e,t){switch(e){case"keyup":return xg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Sg(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Ec=!0,Mc);case"textInput":return e=t.data,e===Mc&&Ec?null:e;default:return null}}function Tg(e,t){if(pn)return e==="compositionend"||!Vs&&Dc(e,t)?(e=wc(),so=qs=hi=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var Ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ag[e.type]:t==="textarea"}function Nc(e,t,i,n){fn?gn?gn.push(n):gn=[n]:fn=n,t=es(t,"onChange"),0<t.length&&(i=new co("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var sa=null,ra=null;function Cg(e){gh(e,0)}function ho(e){var t=ea(e);if(fc(t))return e}function zc(e,t){if(e==="change")return t}var Lc=!1;if(Wt){var _s;if(Wt){var Ws="oninput"in document;if(!Ws){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Ws=typeof Bc.oninput=="function"}_s=Ws}else _s=!1;Lc=_s&&(!document.documentMode||9<document.documentMode)}function Pc(){sa&&(sa.detachEvent("onpropertychange",Hc),ra=sa=null)}function Hc(e){if(e.propertyName==="value"&&ho(ra)){var t=[];Nc(t,ra,e,Bs(e)),xc(Cg,t)}}function kg(e,t,i){e==="focusin"?(Pc(),sa=t,ra=i,sa.attachEvent("onpropertychange",Hc)):e==="focusout"&&Pc()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(ra)}function Eg(e,t){if(e==="click")return ho(t)}function Dg(e,t){if(e==="input"||e==="change")return ho(t)}function Rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Rg;function la(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var a=i[n];if(!Yn.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var i=qc(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=qc(i)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ao(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=ao(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ig=Wt&&"documentMode"in document&&11>=document.documentMode,mn=null,Ys=null,ca=null,Qs=!1;function Gc(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Qs||mn==null||mn!==ao(n)||(n=mn,"selectionStart"in n&&Fs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ca&&la(ca,n)||(ca=n,n=es(Ys,"onSelect"),0<n.length&&(t=new co("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=mn)))}function ji(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var yn={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionrun:ji("Transition","TransitionRun"),transitionstart:ji("Transition","TransitionStart"),transitioncancel:ji("Transition","TransitionCancel"),transitionend:ji("Transition","TransitionEnd")},Ks={},Vc={};Wt&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Ui(e){if(Ks[e])return Ks[e];if(!yn[e])return e;var t=yn[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Vc)return Ks[e]=t[i];return e}var _c=Ui("animationend"),Wc=Ui("animationiteration"),Fc=Ui("animationstart"),Ng=Ui("transitionrun"),zg=Ui("transitionstart"),Lg=Ui("transitioncancel"),Yc=Ui("transitionend"),Qc=new Map,Xs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xs.push("scrollEnd");function Nt(e,t){Qc.set(e,t),qi(t,[e])}var fo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],vn=0,Zs=0;function go(){for(var e=vn,t=Zs=vn=0;t<e;){var i=At[t];At[t++]=null;var n=At[t];At[t++]=null;var a=At[t];At[t++]=null;var o=At[t];if(At[t++]=null,n!==null&&a!==null){var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}o!==0&&Kc(i,a,o)}}function po(e,t,i,n){At[vn++]=e,At[vn++]=t,At[vn++]=i,At[vn++]=n,Zs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Js(e,t,i,n){return po(e,t,i,n),mo(e)}function Gi(e,t){return po(e,null,null,t),mo(e)}function Kc(e,t,i){e.lanes|=i;var n=e.alternate;n!==null&&(n.lanes|=i);for(var a=!1,o=e.return;o!==null;)o.childLanes|=i,n=o.alternate,n!==null&&(n.childLanes|=i),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&t!==null&&(a=31-ht(i),e=o.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=i|536870912),o):null}function mo(e){if(50<Ia)throw Ia=0,rl=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bn={};function Bg(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,i,n){return new Bg(e,t,i,n)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var i=e.alternate;return i===null?(i=gt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Xc(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yo(e,t,i,n,a,o){var s=0;if(n=e,typeof e=="function")$s(e)&&(s=1);else if(typeof e=="string")s=jp(e,i,U.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=gt(31,i,t,a),e.elementType=xe,e.lanes=o,e;case Y:return Vi(i.children,a,o,t);case W:s=8,a|=24;break;case _:return e=gt(12,i,t,a|2),e.elementType=_,e.lanes=o,e;case ke:return e=gt(13,i,t,a),e.elementType=ke,e.lanes=o,e;case Ce:return e=gt(19,i,t,a),e.elementType=Ce,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:s=10;break e;case H:s=9;break e;case pe:s=11;break e;case J:s=14;break e;case Le:s=16,n=null;break e}s=29,i=Error(l(130,e===null?"null":typeof e,"")),n=null}return t=gt(s,i,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function Vi(e,t,i,n){return e=gt(7,e,n,t),e.lanes=i,e}function er(e,t,i){return e=gt(6,e,null,t),e.lanes=i,e}function Zc(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function tr(e,t,i){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jc=new WeakMap;function Ct(e,t){if(typeof e=="object"&&e!==null){var i=Jc.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Za(t)},Jc.set(e,t),t)}return{value:e,source:t,stack:Za(t)}}var xn=[],wn=0,vo=null,ua=0,kt=[],Mt=0,fi=null,Pt=1,Ht="";function Yt(e,t){xn[wn++]=ua,xn[wn++]=vo,vo=e,ua=t}function $c(e,t,i){kt[Mt++]=Pt,kt[Mt++]=Ht,kt[Mt++]=fi,fi=e;var n=Pt;e=Ht;var a=32-ht(n)-1;n&=~(1<<a),i+=1;var o=32-ht(t)+a;if(30<o){var s=a-a%5;o=(n&(1<<s)-1).toString(32),n>>=s,a-=s,Pt=1<<32-ht(t)+a|i<<a|n,Ht=o+e}else Pt=1<<o|i<<a|n,Ht=e}function ir(e){e.return!==null&&(Yt(e,1),$c(e,1,0))}function nr(e){for(;e===vo;)vo=xn[--wn],xn[wn]=null,ua=xn[--wn],xn[wn]=null;for(;e===fi;)fi=kt[--Mt],kt[Mt]=null,Ht=kt[--Mt],kt[Mt]=null,Pt=kt[--Mt],kt[Mt]=null}function eu(e,t){kt[Mt++]=Pt,kt[Mt++]=Ht,kt[Mt++]=fi,Pt=t.id,Ht=t.overflow,fi=e}var Ke=null,Me=null,ce=!1,gi=null,Et=!1,ar=Error(l(519));function pi(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw da(Ct(t,e)),ar}function tu(e){var t=e.stateNode,i=e.type,n=e.memoizedProps;switch(t[Qe]=e,t[at]=n,i){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(i=0;i<za.length;i++)se(za[i],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),gc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),mc(t,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||n.suppressHydrationWarning===!0||vh(t.textContent,i)?(n.popover!=null&&(se("beforetoggle",t),se("toggle",t)),n.onScroll!=null&&se("scroll",t),n.onScrollEnd!=null&&se("scrollend",t),n.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||pi(e,!0)}function iu(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function Sn(e){if(e!==Ke)return!1;if(!ce)return iu(e),ce=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Sl(e.type,e.memoizedProps)),i=!i),i&&Me&&pi(e),iu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Me=Mh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Me=Mh(e)}else t===27?(t=Me,Di(e.type)?(e=Ml,Ml=null,Me=e):Me=t):Me=Ke?Rt(e.stateNode.nextSibling):null;return!0}function _i(){Me=Ke=null,ce=!1}function or(){var e=gi;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),gi=null),e}function da(e){gi===null?gi=[e]:gi.push(e)}var sr=b(null),Wi=null,Qt=null;function mi(e,t,i){O(sr,t._currentValue),t._currentValue=i}function Kt(e){e._currentValue=sr.current,N(sr)}function rr(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function lr(e,t,i,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;e:for(;o!==null;){var c=o;o=a;for(var g=0;g<t.length;g++)if(c.context===t[g]){o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),rr(o.return,i,e),n||(s=null);break e}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(l(341));s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),rr(s,i,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Tn(e,t,i,n){e=null;for(var a=t,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(l(387));if(s=s.memoizedProps,s!==null){var c=a.type;ft(a.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(a===ue.current){if(s=a.alternate,s===null)throw Error(l(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(qa):e=[qa])}a=a.return}e!==null&&lr(t,e,i,n),t.flags|=262144}function bo(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fi(e){Wi=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return nu(Wi,e)}function xo(e,t){return Wi===null&&Fi(e),nu(e,t)}function nu(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Qt===null){if(e===null)throw Error(l(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return i}var Pg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Hg=r.unstable_scheduleCallback,qg=r.unstable_NormalPriority,qe={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cr(){return{controller:new Pg,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&Hg(qg,function(){e.controller.abort()})}var fa=null,ur=0,An=0,Cn=null;function Og(e,t){if(fa===null){var i=fa=[];ur=0,An=fl(),Cn={status:"pending",value:void 0,then:function(n){i.push(n)}}}return ur++,t.then(au,au),t}function au(){if(--ur===0&&fa!==null){Cn!==null&&(Cn.status="fulfilled");var e=fa;fa=null,An=0,Cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jg(e,t){var i=[],n={status:"pending",value:null,reason:null,then:function(a){i.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<i.length;a++)(0,i[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<i.length;a++)(0,i[a])(void 0)}),n}var ou=R.S;R.S=function(e,t){Gd=Be(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Og(e,t),ou!==null&&ou(e,t)};var Yi=b(null);function dr(){var e=Yi.current;return e!==null?e:Ae.pooledCache}function wo(e,t){t===null?O(Yi,Yi.current):O(Yi,t.pool)}function su(){var e=dr();return e===null?null:{parent:qe._currentValue,pool:e}}var kn=Error(l(460)),hr=Error(l(474)),So=Error(l(542)),To={then:function(){}};function ru(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lu(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(_t,_t),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uu(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uu(e),e}throw Ki=t,kn}}function Qi(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ki=i,kn):i}}var Ki=null;function cu(){if(Ki===null)throw Error(l(459));var e=Ki;return Ki=null,e}function uu(e){if(e===kn||e===So)throw Error(l(483))}var Mn=null,ga=0;function Ao(e){var t=ga;return ga+=1,Mn===null&&(Mn=[]),lu(Mn,e,t)}function pa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Co(e,t){throw t.$$typeof===B?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function du(e){function t(x,v){if(e){var T=x.deletions;T===null?(x.deletions=[v],x.flags|=16):T.push(v)}}function i(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function n(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function a(x,v){return x=Ft(x,v),x.index=0,x.sibling=null,x}function o(x,v,T){return x.index=T,e?(T=x.alternate,T!==null?(T=T.index,T<v?(x.flags|=67108866,v):T):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function s(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function c(x,v,T,z){return v===null||v.tag!==6?(v=er(T,x.mode,z),v.return=x,v):(v=a(v,T),v.return=x,v)}function g(x,v,T,z){var Q=T.type;return Q===Y?I(x,v,T.props.children,z,T.key):v!==null&&(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Le&&Qi(Q)===v.type)?(v=a(v,T.props),pa(v,T),v.return=x,v):(v=yo(T.type,T.key,T.props,null,x.mode,z),pa(v,T),v.return=x,v)}function A(x,v,T,z){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=tr(T,x.mode,z),v.return=x,v):(v=a(v,T.children||[]),v.return=x,v)}function I(x,v,T,z,Q){return v===null||v.tag!==7?(v=Vi(T,x.mode,z,Q),v.return=x,v):(v=a(v,T),v.return=x,v)}function L(x,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=er(""+v,x.mode,T),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case j:return T=yo(v.type,v.key,v.props,null,x.mode,T),pa(T,v),T.return=x,T;case G:return v=tr(v,x.mode,T),v.return=x,v;case Le:return v=Qi(v),L(x,v,T)}if(nt(v)||Ge(v))return v=Vi(v,x.mode,T,null),v.return=x,v;if(typeof v.then=="function")return L(x,Ao(v),T);if(v.$$typeof===K)return L(x,xo(x,v),T);Co(x,v)}return null}function C(x,v,T,z){var Q=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return Q!==null?null:c(x,v,""+T,z);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return T.key===Q?g(x,v,T,z):null;case G:return T.key===Q?A(x,v,T,z):null;case Le:return T=Qi(T),C(x,v,T,z)}if(nt(T)||Ge(T))return Q!==null?null:I(x,v,T,z,null);if(typeof T.then=="function")return C(x,v,Ao(T),z);if(T.$$typeof===K)return C(x,v,xo(x,T),z);Co(x,T)}return null}function E(x,v,T,z,Q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return x=x.get(T)||null,c(v,x,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case j:return x=x.get(z.key===null?T:z.key)||null,g(v,x,z,Q);case G:return x=x.get(z.key===null?T:z.key)||null,A(v,x,z,Q);case Le:return z=Qi(z),E(x,v,T,z,Q)}if(nt(z)||Ge(z))return x=x.get(T)||null,I(v,x,z,Q,null);if(typeof z.then=="function")return E(x,v,T,Ao(z),Q);if(z.$$typeof===K)return E(x,v,T,xo(v,z),Q);Co(v,z)}return null}function V(x,v,T,z){for(var Q=null,fe=null,F=v,ae=v=0,le=null;F!==null&&ae<T.length;ae++){F.index>ae?(le=F,F=null):le=F.sibling;var ge=C(x,F,T[ae],z);if(ge===null){F===null&&(F=le);break}e&&F&&ge.alternate===null&&t(x,F),v=o(ge,v,ae),fe===null?Q=ge:fe.sibling=ge,fe=ge,F=le}if(ae===T.length)return i(x,F),ce&&Yt(x,ae),Q;if(F===null){for(;ae<T.length;ae++)F=L(x,T[ae],z),F!==null&&(v=o(F,v,ae),fe===null?Q=F:fe.sibling=F,fe=F);return ce&&Yt(x,ae),Q}for(F=n(F);ae<T.length;ae++)le=E(F,x,ae,T[ae],z),le!==null&&(e&&le.alternate!==null&&F.delete(le.key===null?ae:le.key),v=o(le,v,ae),fe===null?Q=le:fe.sibling=le,fe=le);return e&&F.forEach(function(Li){return t(x,Li)}),ce&&Yt(x,ae),Q}function Z(x,v,T,z){if(T==null)throw Error(l(151));for(var Q=null,fe=null,F=v,ae=v=0,le=null,ge=T.next();F!==null&&!ge.done;ae++,ge=T.next()){F.index>ae?(le=F,F=null):le=F.sibling;var Li=C(x,F,ge.value,z);if(Li===null){F===null&&(F=le);break}e&&F&&Li.alternate===null&&t(x,F),v=o(Li,v,ae),fe===null?Q=Li:fe.sibling=Li,fe=Li,F=le}if(ge.done)return i(x,F),ce&&Yt(x,ae),Q;if(F===null){for(;!ge.done;ae++,ge=T.next())ge=L(x,ge.value,z),ge!==null&&(v=o(ge,v,ae),fe===null?Q=ge:fe.sibling=ge,fe=ge);return ce&&Yt(x,ae),Q}for(F=n(F);!ge.done;ae++,ge=T.next())ge=E(F,x,ae,ge.value,z),ge!==null&&(e&&ge.alternate!==null&&F.delete(ge.key===null?ae:ge.key),v=o(ge,v,ae),fe===null?Q=ge:fe.sibling=ge,fe=ge);return e&&F.forEach(function(Zp){return t(x,Zp)}),ce&&Yt(x,ae),Q}function Te(x,v,T,z){if(typeof T=="object"&&T!==null&&T.type===Y&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case j:e:{for(var Q=T.key;v!==null;){if(v.key===Q){if(Q=T.type,Q===Y){if(v.tag===7){i(x,v.sibling),z=a(v,T.props.children),z.return=x,x=z;break e}}else if(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Le&&Qi(Q)===v.type){i(x,v.sibling),z=a(v,T.props),pa(z,T),z.return=x,x=z;break e}i(x,v);break}else t(x,v);v=v.sibling}T.type===Y?(z=Vi(T.props.children,x.mode,z,T.key),z.return=x,x=z):(z=yo(T.type,T.key,T.props,null,x.mode,z),pa(z,T),z.return=x,x=z)}return s(x);case G:e:{for(Q=T.key;v!==null;){if(v.key===Q)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){i(x,v.sibling),z=a(v,T.children||[]),z.return=x,x=z;break e}else{i(x,v);break}else t(x,v);v=v.sibling}z=tr(T,x.mode,z),z.return=x,x=z}return s(x);case Le:return T=Qi(T),Te(x,v,T,z)}if(nt(T))return V(x,v,T,z);if(Ge(T)){if(Q=Ge(T),typeof Q!="function")throw Error(l(150));return T=Q.call(T),Z(x,v,T,z)}if(typeof T.then=="function")return Te(x,v,Ao(T),z);if(T.$$typeof===K)return Te(x,v,xo(x,T),z);Co(x,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,v!==null&&v.tag===6?(i(x,v.sibling),z=a(v,T),z.return=x,x=z):(i(x,v),z=er(T,x.mode,z),z.return=x,x=z),s(x)):i(x,v)}return function(x,v,T,z){try{ga=0;var Q=Te(x,v,T,z);return Mn=null,Q}catch(F){if(F===kn||F===So)throw F;var fe=gt(29,F,null,x.mode);return fe.lanes=z,fe.return=x,fe}finally{}}}var Xi=du(!0),hu=du(!1),yi=!1;function fr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bi(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ye&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=mo(e),Kc(e,null,i),t}return po(e,n,t,i),mo(e)}function ma(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,nc(e,i)}}function pr(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var a=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var s={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};o===null?a=o=s:o=o.next=s,i=i.next}while(i!==null);o===null?a=o=t:o=o.next=t}else a=o=t;i={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var mr=!1;function ya(){if(mr){var e=Cn;if(e!==null)throw e}}function va(e,t,i,n){mr=!1;var a=e.updateQueue;yi=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var g=c,A=g.next;g.next=null,s===null?o=A:s.next=A,s=g;var I=e.alternate;I!==null&&(I=I.updateQueue,c=I.lastBaseUpdate,c!==s&&(c===null?I.firstBaseUpdate=A:c.next=A,I.lastBaseUpdate=g))}if(o!==null){var L=a.baseState;s=0,I=A=g=null,c=o;do{var C=c.lane&-536870913,E=C!==c.lane;if(E?(re&C)===C:(n&C)===C){C!==0&&C===An&&(mr=!0),I!==null&&(I=I.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var V=e,Z=c;C=t;var Te=i;switch(Z.tag){case 1:if(V=Z.payload,typeof V=="function"){L=V.call(Te,L,C);break e}L=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=Z.payload,C=typeof V=="function"?V.call(Te,L,C):V,C==null)break e;L=M({},L,C);break e;case 2:yi=!0}}C=c.callback,C!==null&&(e.flags|=64,E&&(e.flags|=8192),E=a.callbacks,E===null?a.callbacks=[C]:E.push(C))}else E={lane:C,tag:c.tag,payload:c.payload,callback:c.callback,next:null},I===null?(A=I=E,g=L):I=I.next=E,s|=C;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;E=c,c=E.next,E.next=null,a.lastBaseUpdate=E,a.shared.pending=null}}while(!0);I===null&&(g=L),a.baseState=g,a.firstBaseUpdate=A,a.lastBaseUpdate=I,o===null&&(a.shared.lanes=0),Ai|=s,e.lanes=s,e.memoizedState=L}}function fu(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function gu(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)fu(i[e],t)}var En=b(null),ko=b(0);function pu(e,t){e=ai,O(ko,e),O(En,t),ai=e|t.baseLanes}function yr(){O(ko,ai),O(En,En.current)}function vr(){ai=ko.current,N(En),N(ko)}var pt=b(null),Dt=null;function xi(e){var t=e.alternate;O(Pe,Pe.current&1),O(pt,e),Dt===null&&(t===null||En.current!==null||t.memoizedState!==null)&&(Dt=e)}function br(e){O(Pe,Pe.current),O(pt,e),Dt===null&&(Dt=e)}function mu(e){e.tag===22?(O(Pe,Pe.current),O(pt,e),Dt===null&&(Dt=e)):wi()}function wi(){O(Pe,Pe.current),O(pt,pt.current)}function mt(e){N(pt),Dt===e&&(Dt=null),N(Pe)}var Pe=b(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Cl(i)||kl(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,ne=null,we=null,Oe=null,Eo=!1,Dn=!1,Zi=!1,Do=0,ba=0,Rn=null,Ug=0;function Ne(){throw Error(l(321))}function xr(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!ft(e[i],t[i]))return!1;return!0}function wr(e,t,i,n,a,o){return Xt=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?$u:Pr,Zi=!1,o=i(n,a),Zi=!1,Dn&&(o=vu(t,i,n,a)),yu(e),o}function yu(e){R.H=Sa;var t=we!==null&&we.next!==null;if(Xt=0,Oe=we=ne=null,Eo=!1,ba=0,Rn=null,t)throw Error(l(300));e===null||je||(e=e.dependencies,e!==null&&bo(e)&&(je=!0))}function vu(e,t,i,n){ne=e;var a=0;do{if(Dn&&(Rn=null),ba=0,Dn=!1,25<=a)throw Error(l(301));if(a+=1,Oe=we=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}R.H=ed,o=t(i,n)}while(Dn);return o}function Gg(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?xa(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(ne.flags|=1024),t}function Sr(){var e=Do!==0;return Do=0,e}function Tr(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Ar(e){if(Eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eo=!1}Xt=0,Oe=we=ne=null,Dn=!1,ba=Do=0,Rn=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ne.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function He(){if(we===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Oe===null?ne.memoizedState:Oe.next;if(t!==null)Oe=t,we=e;else{if(e===null)throw ne.alternate===null?Error(l(467)):Error(l(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Oe===null?ne.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xa(e){var t=ba;return ba+=1,Rn===null&&(Rn=[]),e=lu(Rn,e,t),t=ne,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?$u:Pr),e}function Io(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xa(e);if(e.$$typeof===K)return Xe(e)}throw Error(l(438,String(e)))}function Cr(e){var t=null,i=ne.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var n=ne.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Ro(),ne.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),n=0;n<e;n++)i[n]=$e;return t.index++,i}function Zt(e,t){return typeof t=="function"?t(e):t}function No(e){var t=He();return kr(t,we,e)}function kr(e,t,i){var n=e.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=i;var a=e.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,n.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,g=null,A=t,I=!1;do{var L=A.lane&-536870913;if(L!==A.lane?(re&L)===L:(Xt&L)===L){var C=A.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),L===An&&(I=!0);else if((Xt&C)===C){A=A.next,C===An&&(I=!0);continue}else L={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(c=g=L,s=o):g=g.next=L,ne.lanes|=C,Ai|=C;L=A.action,Zi&&i(o,L),o=A.hasEagerState?A.eagerState:i(o,L)}else C={lane:L,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(c=g=C,s=o):g=g.next=C,ne.lanes|=L,Ai|=L;A=A.next}while(A!==null&&A!==t);if(g===null?s=o:g.next=c,!ft(o,e.memoizedState)&&(je=!0,I&&(i=Cn,i!==null)))throw i;e.memoizedState=o,e.baseState=s,e.baseQueue=g,n.lastRenderedState=o}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Mr(e){var t=He(),i=t.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var n=i.dispatch,a=i.pending,o=t.memoizedState;if(a!==null){i.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);ft(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),i.lastRenderedState=o}return[o,n]}function bu(e,t,i){var n=ne,a=He(),o=ce;if(o){if(i===void 0)throw Error(l(407));i=i()}else i=t();var s=!ft((we||a).memoizedState,i);if(s&&(a.memoizedState=i,je=!0),a=a.queue,Rr(Su.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,In(9,{destroy:void 0},wu.bind(null,n,a,i,t),null),Ae===null)throw Error(l(349));o||(Xt&127)!==0||xu(n,t,i)}return i}function xu(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ne.updateQueue,t===null?(t=Ro(),ne.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function wu(e,t,i,n){t.value=i,t.getSnapshot=n,Tu(t)&&Au(e)}function Su(e,t,i){return i(function(){Tu(t)&&Au(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!ft(e,i)}catch{return!0}}function Au(e){var t=Gi(e,2);t!==null&&ut(t,e,2)}function Er(e){var t=it();if(typeof e=="function"){var i=e;if(e=i(),Zi){ui(!0);try{i()}finally{ui(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function Cu(e,t,i,n){return e.baseState=i,kr(e,we,typeof n=="function"?n:Zt)}function Vg(e,t,i,n,a){if(Bo(e))throw Error(l(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};R.T!==null?i(!0):o.isTransition=!1,n(o),i=t.pending,i===null?(o.next=t.pending=o,ku(t,o)):(o.next=i.next,t.pending=i.next=o)}}function ku(e,t){var i=t.action,n=t.payload,a=e.state;if(t.isTransition){var o=R.T,s={};R.T=s;try{var c=i(a,n),g=R.S;g!==null&&g(s,c),Mu(e,t,c)}catch(A){Dr(e,t,A)}finally{o!==null&&s.types!==null&&(o.types=s.types),R.T=o}}else try{o=i(a,n),Mu(e,t,o)}catch(A){Dr(e,t,A)}}function Mu(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){Eu(e,t,n)},function(n){return Dr(e,t,n)}):Eu(e,t,i)}function Eu(e,t,i){t.status="fulfilled",t.value=i,Du(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,ku(e,i)))}function Dr(e,t,i){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=i,Du(t),t=t.next;while(t!==n)}e.action=null}function Du(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ru(e,t){return t}function Iu(e,t){if(ce){var i=Ae.formState;if(i!==null){e:{var n=ne;if(ce){if(Me){t:{for(var a=Me,o=Et;a.nodeType!==8;){if(!o){a=null;break t}if(a=Rt(a.nextSibling),a===null){a=null;break t}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){Me=Rt(a.nextSibling),n=a.data==="F!";break e}}pi(n)}n=!1}n&&(t=i[0])}}return i=it(),i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ru,lastRenderedState:t},i.queue=n,i=Xu.bind(null,ne,n),n.dispatch=i,n=Er(!1),o=Br.bind(null,ne,!1,n.queue),n=it(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,i=Vg.bind(null,ne,a,o,i),a.dispatch=i,n.memoizedState=e,[t,i,!1]}function Nu(e){var t=He();return zu(t,we,e)}function zu(e,t,i){if(t=kr(e,t,Ru)[0],e=No(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=xa(t)}catch(s){throw s===kn?So:s}else n=t;t=He();var a=t.queue,o=a.dispatch;return i!==t.memoizedState&&(ne.flags|=2048,In(9,{destroy:void 0},_g.bind(null,a,i),null)),[n,o,e]}function _g(e,t){e.action=t}function Lu(e){var t=He(),i=we;if(i!==null)return zu(t,i,e);He(),t=t.memoizedState,i=He();var n=i.queue.dispatch;return i.memoizedState=e,[t,n,!1]}function In(e,t,i,n){return e={tag:e,create:i,deps:n,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Ro(),ne.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e),e}function Bu(){return He().memoizedState}function zo(e,t,i,n){var a=it();ne.flags|=e,a.memoizedState=In(1|t,{destroy:void 0},i,n===void 0?null:n)}function Lo(e,t,i,n){var a=He();n=n===void 0?null:n;var o=a.memoizedState.inst;we!==null&&n!==null&&xr(n,we.memoizedState.deps)?a.memoizedState=In(t,o,i,n):(ne.flags|=e,a.memoizedState=In(1|t,o,i,n))}function Pu(e,t){zo(8390656,8,e,t)}function Rr(e,t){Lo(2048,8,e,t)}function Wg(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Ro(),ne.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Hu(e){var t=He().memoizedState;return Wg({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function qu(e,t){return Lo(4,2,e,t)}function Ou(e,t){return Lo(4,4,e,t)}function ju(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uu(e,t,i){i=i!=null?i.concat([e]):null,Lo(4,4,ju.bind(null,t,e),i)}function Ir(){}function Gu(e,t){var i=He();t=t===void 0?null:t;var n=i.memoizedState;return t!==null&&xr(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function Vu(e,t){var i=He();t=t===void 0?null:t;var n=i.memoizedState;if(t!==null&&xr(t,n[1]))return n[0];if(n=e(),Zi){ui(!0);try{e()}finally{ui(!1)}}return i.memoizedState=[n,t],n}function Nr(e,t,i){return i===void 0||(Xt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=_d(),ne.lanes|=e,Ai|=e,i)}function _u(e,t,i,n){return ft(i,t)?i:En.current!==null?(e=Nr(e,i,n),ft(e,t)||(je=!0),e):(Xt&42)===0||(Xt&1073741824)!==0&&(re&261930)===0?(je=!0,e.memoizedState=i):(e=_d(),ne.lanes|=e,Ai|=e,t)}function Wu(e,t,i,n,a){var o=q.p;q.p=o!==0&&8>o?o:8;var s=R.T,c={};R.T=c,Br(e,!1,t,i);try{var g=a(),A=R.S;if(A!==null&&A(c,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var I=jg(g,n);wa(e,t,I,bt(e))}else wa(e,t,n,bt(e))}catch(L){wa(e,t,{then:function(){},status:"rejected",reason:L},bt())}finally{q.p=o,s!==null&&c.types!==null&&(s.types=c.types),R.T=s}}function Fg(){}function zr(e,t,i,n){if(e.tag!==5)throw Error(l(476));var a=Fu(e).queue;Wu(e,a,t,X,i===null?Fg:function(){return Yu(e),i(n)})}function Fu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:X},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yu(e){var t=Fu(e);t.next===null&&(t=e.alternate.memoizedState),wa(e,t.next.queue,{},bt())}function Lr(){return Xe(qa)}function Qu(){return He().memoizedState}function Ku(){return He().memoizedState}function Yg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=bt();e=vi(i);var n=bi(t,e,i);n!==null&&(ut(n,t,i),ma(n,t,i)),t={cache:cr()},e.payload=t;return}t=t.return}}function Qg(e,t,i){var n=bt();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Bo(e)?Zu(t,i):(i=Js(e,t,i,n),i!==null&&(ut(i,e,n),Ju(i,t,n)))}function Xu(e,t,i){var n=bt();wa(e,t,i,n)}function wa(e,t,i,n){var a={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Bo(e))Zu(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,i);if(a.hasEagerState=!0,a.eagerState=c,ft(c,s))return po(e,t,a,0),Ae===null&&go(),!1}catch{}finally{}if(i=Js(e,t,a,n),i!==null)return ut(i,e,n),Ju(i,t,n),!0}return!1}function Br(e,t,i,n){if(n={lane:2,revertLane:fl(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bo(e)){if(t)throw Error(l(479))}else t=Js(e,i,n,2),t!==null&&ut(t,e,2)}function Bo(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Zu(e,t){Dn=Eo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Ju(e,t,i){if((i&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,nc(e,i)}}var Sa={readContext:Xe,use:Io,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Sa.useEffectEvent=Ne;var $u={readContext:Xe,use:Io,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Pu,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,zo(4194308,4,ju.bind(null,t,e),i)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){zo(4,2,e,t)},useMemo:function(e,t){var i=it();t=t===void 0?null:t;var n=e();if(Zi){ui(!0);try{e()}finally{ui(!1)}}return i.memoizedState=[n,t],n},useReducer:function(e,t,i){var n=it();if(i!==void 0){var a=i(t);if(Zi){ui(!0);try{i(t)}finally{ui(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Qg.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Er(e);var t=e.queue,i=Xu.bind(null,ne,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Ir,useDeferredValue:function(e,t){var i=it();return Nr(i,e,t)},useTransition:function(){var e=Er(!1);return e=Wu.bind(null,ne,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var n=ne,a=it();if(ce){if(i===void 0)throw Error(l(407));i=i()}else{if(i=t(),Ae===null)throw Error(l(349));(re&127)!==0||xu(n,t,i)}a.memoizedState=i;var o={value:i,getSnapshot:t};return a.queue=o,Pu(Su.bind(null,n,o,e),[e]),n.flags|=2048,In(9,{destroy:void 0},wu.bind(null,n,o,i,t),null),i},useId:function(){var e=it(),t=Ae.identifierPrefix;if(ce){var i=Ht,n=Pt;i=(n&~(1<<32-ht(n)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Do++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Ug++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lr,useFormState:Iu,useActionState:Iu,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Br.bind(null,ne,!0,i),i.dispatch=t,[e,t]},useMemoCache:Cr,useCacheRefresh:function(){return it().memoizedState=Yg.bind(null,ne)},useEffectEvent:function(e){var t=it(),i={impl:e};return t.memoizedState=i,function(){if((ye&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},Pr={readContext:Xe,use:Io,useCallback:Gu,useContext:Xe,useEffect:Rr,useImperativeHandle:Uu,useInsertionEffect:qu,useLayoutEffect:Ou,useMemo:Vu,useReducer:No,useRef:Bu,useState:function(){return No(Zt)},useDebugValue:Ir,useDeferredValue:function(e,t){var i=He();return _u(i,we.memoizedState,e,t)},useTransition:function(){var e=No(Zt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:xa(e),t]},useSyncExternalStore:bu,useId:Qu,useHostTransitionStatus:Lr,useFormState:Nu,useActionState:Nu,useOptimistic:function(e,t){var i=He();return Cu(i,we,e,t)},useMemoCache:Cr,useCacheRefresh:Ku};Pr.useEffectEvent=Hu;var ed={readContext:Xe,use:Io,useCallback:Gu,useContext:Xe,useEffect:Rr,useImperativeHandle:Uu,useInsertionEffect:qu,useLayoutEffect:Ou,useMemo:Vu,useReducer:Mr,useRef:Bu,useState:function(){return Mr(Zt)},useDebugValue:Ir,useDeferredValue:function(e,t){var i=He();return we===null?Nr(i,e,t):_u(i,we.memoizedState,e,t)},useTransition:function(){var e=Mr(Zt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:xa(e),t]},useSyncExternalStore:bu,useId:Qu,useHostTransitionStatus:Lr,useFormState:Lu,useActionState:Lu,useOptimistic:function(e,t){var i=He();return we!==null?Cu(i,we,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Cr,useCacheRefresh:Ku};ed.useEffectEvent=Hu;function Hr(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:M({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var qr={enqueueSetState:function(e,t,i){e=e._reactInternals;var n=bt(),a=vi(n);a.payload=t,i!=null&&(a.callback=i),t=bi(e,a,n),t!==null&&(ut(t,e,n),ma(t,e,n))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=bt(),a=vi(n);a.tag=1,a.payload=t,i!=null&&(a.callback=i),t=bi(e,a,n),t!==null&&(ut(t,e,n),ma(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=bt(),n=vi(i);n.tag=2,t!=null&&(n.callback=t),t=bi(e,n,i),t!==null&&(ut(t,e,i),ma(t,e,i))}};function td(e,t,i,n,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!la(i,n)||!la(a,o):!0}function id(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&qr.enqueueReplaceState(t,t.state,null)}function Ji(e,t){var i=t;if("ref"in t){i={};for(var n in t)n!=="ref"&&(i[n]=t[n])}if(e=e.defaultProps){i===t&&(i=M({},i));for(var a in e)i[a]===void 0&&(i[a]=e[a])}return i}function nd(e){fo(e)}function ad(e){console.error(e)}function od(e){fo(e)}function Po(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function sd(e,t,i){try{var n=e.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Or(e,t,i){return i=vi(i),i.tag=3,i.payload={element:null},i.callback=function(){Po(e,t)},i}function rd(e){return e=vi(e),e.tag=3,e}function ld(e,t,i,n){var a=i.type.getDerivedStateFromError;if(typeof a=="function"){var o=n.value;e.payload=function(){return a(o)},e.callback=function(){sd(t,i,n)}}var s=i.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){sd(t,i,n),typeof a!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Kg(e,t,i,n,a){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=i.alternate,t!==null&&Tn(t,i,a,!0),i=pt.current,i!==null){switch(i.tag){case 31:case 13:return Dt===null?Qo():i.alternate===null&&ze===0&&(ze=3),i.flags&=-257,i.flags|=65536,i.lanes=a,n===To?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([n]):t.add(n),ul(e,n,a)),!1;case 22:return i.flags|=65536,n===To?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([n]):i.add(n)),ul(e,n,a)),!1}throw Error(l(435,i.tag))}return ul(e,n,a),Qo(),!1}if(ce)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==ar&&(e=Error(l(422),{cause:n}),da(Ct(e,i)))):(n!==ar&&(t=Error(l(423),{cause:n}),da(Ct(t,i))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=Ct(n,i),a=Or(e.stateNode,n,a),pr(e,a),ze!==4&&(ze=2)),!1;var o=Error(l(520),{cause:n});if(o=Ct(o,i),Ra===null?Ra=[o]:Ra.push(o),ze!==4&&(ze=2),t===null)return!0;n=Ct(n,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=a&-a,i.lanes|=e,e=Or(i.stateNode,n,e),pr(i,e),!1;case 1:if(t=i.type,o=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ci===null||!Ci.has(o))))return i.flags|=65536,a&=-a,i.lanes|=a,a=rd(a),ld(a,e,i,n),pr(i,a),!1}i=i.return}while(i!==null);return!1}var jr=Error(l(461)),je=!1;function Ze(e,t,i,n){t.child=e===null?hu(t,null,i,n):Xi(t,e.child,i,n)}function cd(e,t,i,n,a){i=i.render;var o=t.ref;if("ref"in n){var s={};for(var c in n)c!=="ref"&&(s[c]=n[c])}else s=n;return Fi(t),n=wr(e,t,i,s,o,a),c=Sr(),e!==null&&!je?(Tr(e,t,a),Jt(e,t,a)):(ce&&c&&ir(t),t.flags|=1,Ze(e,t,n,a),t.child)}function ud(e,t,i,n,a){if(e===null){var o=i.type;return typeof o=="function"&&!$s(o)&&o.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=o,dd(e,t,o,n,a)):(e=yo(i.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Qr(e,a)){var s=o.memoizedProps;if(i=i.compare,i=i!==null?i:la,i(s,n)&&e.ref===t.ref)return Jt(e,t,a)}return t.flags|=1,e=Ft(o,n),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,i,n,a){if(e!==null){var o=e.memoizedProps;if(la(o,n)&&e.ref===t.ref)if(je=!1,t.pendingProps=n=o,Qr(e,a))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Jt(e,t,a)}return Ur(e,t,i,n,a)}function hd(e,t,i,n){var a=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|i:i,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~o}else n=0,t.child=null;return fd(e,t,o,i,n)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wo(t,o!==null?o.cachePool:null),o!==null?pu(t,o):yr(),mu(t);else return n=t.lanes=536870912,fd(e,t,o!==null?o.baseLanes|i:i,i,n)}else o!==null?(wo(t,o.cachePool),pu(t,o),wi(),t.memoizedState=null):(e!==null&&wo(t,null),yr(),wi());return Ze(e,t,a,i),t.child}function Ta(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fd(e,t,i,n,a){var o=dr();return o=o===null?null:{parent:qe._currentValue,pool:o},t.memoizedState={baseLanes:i,cachePool:o},e!==null&&wo(t,null),yr(),mu(t),e!==null&&Tn(e,t,n,!0),t.childLanes=a,null}function Ho(e,t){return t=Oo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gd(e,t,i){return Xi(t,e.child,null,i),e=Ho(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function Xg(e,t,i){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(n.mode==="hidden")return e=Ho(t,n),t.lanes=536870912,Ta(null,e);if(br(t),(e=Me)?(e=kh(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fi!==null?{id:Pt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},i=Zc(e),i.return=t,t.child=i,Ke=t,Me=null)):e=null,e===null)throw pi(t);return t.lanes=536870912,null}return Ho(t,n)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(br(t),a)if(t.flags&256)t.flags&=-257,t=gd(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(je||Tn(e,t,i,!1),a=(i&e.childLanes)!==0,je||a){if(n=Ae,n!==null&&(s=ac(n,i),s!==0&&s!==o.retryLane))throw o.retryLane=s,Gi(e,s),ut(n,e,s),jr;Qo(),t=gd(e,t,i)}else e=o.treeContext,Me=Rt(s.nextSibling),Ke=t,ce=!0,gi=null,Et=!1,e!==null&&eu(t,e),t=Ho(t,n),t.flags|=4096;return t}return e=Ft(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qo(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Ur(e,t,i,n,a){return Fi(t),i=wr(e,t,i,n,void 0,a),n=Sr(),e!==null&&!je?(Tr(e,t,a),Jt(e,t,a)):(ce&&n&&ir(t),t.flags|=1,Ze(e,t,i,a),t.child)}function pd(e,t,i,n,a,o){return Fi(t),t.updateQueue=null,i=vu(t,n,i,a),yu(e),n=Sr(),e!==null&&!je?(Tr(e,t,o),Jt(e,t,o)):(ce&&n&&ir(t),t.flags|=1,Ze(e,t,i,o),t.child)}function md(e,t,i,n,a){if(Fi(t),t.stateNode===null){var o=bn,s=i.contextType;typeof s=="object"&&s!==null&&(o=Xe(s)),o=new i(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=qr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},fr(t),s=i.contextType,o.context=typeof s=="object"&&s!==null?Xe(s):bn,o.state=t.memoizedState,s=i.getDerivedStateFromProps,typeof s=="function"&&(Hr(t,i,s,n),o.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&qr.enqueueReplaceState(o,o.state,null),va(t,n,o,a),ya(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var c=t.memoizedProps,g=Ji(i,c);o.props=g;var A=o.context,I=i.contextType;s=bn,typeof I=="object"&&I!==null&&(s=Xe(I));var L=i.getDerivedStateFromProps;I=typeof L=="function"||typeof o.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,I||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c||A!==s)&&id(t,o,n,s),yi=!1;var C=t.memoizedState;o.state=C,va(t,n,o,a),ya(),A=t.memoizedState,c||C!==A||yi?(typeof L=="function"&&(Hr(t,i,L,n),A=t.memoizedState),(g=yi||td(t,i,g,n,C,A,s))?(I||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),o.props=n,o.state=A,o.context=s,n=g):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,gr(e,t),s=t.memoizedProps,I=Ji(i,s),o.props=I,L=t.pendingProps,C=o.context,A=i.contextType,g=bn,typeof A=="object"&&A!==null&&(g=Xe(A)),c=i.getDerivedStateFromProps,(A=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==L||C!==g)&&id(t,o,n,g),yi=!1,C=t.memoizedState,o.state=C,va(t,n,o,a),ya();var E=t.memoizedState;s!==L||C!==E||yi||e!==null&&e.dependencies!==null&&bo(e.dependencies)?(typeof c=="function"&&(Hr(t,i,c,n),E=t.memoizedState),(I=yi||td(t,i,I,n,C,E,g)||e!==null&&e.dependencies!==null&&bo(e.dependencies))?(A||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,E,g),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,E,g)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=E),o.props=n,o.state=E,o.context=g,n=I):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,qo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Xi(t,e.child,null,a),t.child=Xi(t,null,i,a)):Ze(e,t,i,a),t.memoizedState=o.state,e=t.child):e=Jt(e,t,a),e}function yd(e,t,i,n){return _i(),t.flags|=256,Ze(e,t,i,n),t.child}var Gr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vr(e){return{baseLanes:e,cachePool:su()}}function _r(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=vt),e}function vd(e,t,i){var n=t.pendingProps,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(a?xi(t):wi(),(e=Me)?(e=kh(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fi!==null?{id:Pt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},i=Zc(e),i.return=t,t.child=i,Ke=t,Me=null)):e=null,e===null)throw pi(t);return kl(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,a?(wi(),a=t.mode,c=Oo({mode:"hidden",children:c},a),n=Vi(n,a,i,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=Vr(i),n.childLanes=_r(e,s,i),t.memoizedState=Gr,Ta(null,n)):(xi(t),Wr(t,c))}var g=e.memoizedState;if(g!==null&&(c=g.dehydrated,c!==null)){if(o)t.flags&256?(xi(t),t.flags&=-257,t=Fr(e,t,i)):t.memoizedState!==null?(wi(),t.child=e.child,t.flags|=128,t=null):(wi(),c=n.fallback,a=t.mode,n=Oo({mode:"visible",children:n.children},a),c=Vi(c,a,i,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,Xi(t,e.child,null,i),n=t.child,n.memoizedState=Vr(i),n.childLanes=_r(e,s,i),t.memoizedState=Gr,t=Ta(null,n));else if(xi(t),kl(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var A=s.dgst;s=A,n=Error(l(419)),n.stack="",n.digest=s,da({value:n,source:null,stack:null}),t=Fr(e,t,i)}else if(je||Tn(e,t,i,!1),s=(i&e.childLanes)!==0,je||s){if(s=Ae,s!==null&&(n=ac(s,i),n!==0&&n!==g.retryLane))throw g.retryLane=n,Gi(e,n),ut(s,e,n),jr;Cl(c)||Qo(),t=Fr(e,t,i)}else Cl(c)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Me=Rt(c.nextSibling),Ke=t,ce=!0,gi=null,Et=!1,e!==null&&eu(t,e),t=Wr(t,n.children),t.flags|=4096);return t}return a?(wi(),c=n.fallback,a=t.mode,g=e.child,A=g.sibling,n=Ft(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,A!==null?c=Ft(A,c):(c=Vi(c,a,i,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,Ta(null,n),n=t.child,c=e.child.memoizedState,c===null?c=Vr(i):(a=c.cachePool,a!==null?(g=qe._currentValue,a=a.parent!==g?{parent:g,pool:g}:a):a=su(),c={baseLanes:c.baseLanes|i,cachePool:a}),n.memoizedState=c,n.childLanes=_r(e,s,i),t.memoizedState=Gr,Ta(e.child,n)):(xi(t),i=e.child,e=i.sibling,i=Ft(i,{mode:"visible",children:n.children}),i.return=t,i.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=i,t.memoizedState=null,i)}function Wr(e,t){return t=Oo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oo(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Fr(e,t,i){return Xi(t,e.child,null,i),e=Wr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bd(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),rr(e.return,t,i)}function Yr(e,t,i,n,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:a,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=a,s.treeForkCount=o)}function xd(e,t,i){var n=t.pendingProps,a=n.revealOrder,o=n.tail;n=n.children;var s=Pe.current,c=(s&2)!==0;if(c?(s=s&1|2,t.flags|=128):s&=1,O(Pe,s),Ze(e,t,n,i),n=ce?ua:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,i,t);else if(e.tag===19)bd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(i=t.child,a=null;i!==null;)e=i.alternate,e!==null&&Mo(e)===null&&(a=i),i=i.sibling;i=a,i===null?(a=t.child,t.child=null):(a=i.sibling,i.sibling=null),Yr(t,!1,a,i,o,n);break;case"backwards":case"unstable_legacy-backwards":for(i=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Mo(e)===null){t.child=a;break}e=a.sibling,a.sibling=i,i=a,a=e}Yr(t,!0,i,null,o,n);break;case"together":Yr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Jt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ai|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(Tn(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,i=Ft(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ft(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Qr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bo(e)))}function Zg(e,t,i){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),mi(t,qe,e.memoizedState.cache),_i();break;case 27:case 5:Bi(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:mi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,br(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(xi(t),t.flags|=128,null):(i&t.child.childLanes)!==0?vd(e,t,i):(xi(t),e=Jt(e,t,i),e!==null?e.sibling:null);xi(t);break;case 19:var a=(e.flags&128)!==0;if(n=(i&t.childLanes)!==0,n||(Tn(e,t,i,!1),n=(i&t.childLanes)!==0),a){if(n)return xd(e,t,i);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(Pe,Pe.current),n)break;return null;case 22:return t.lanes=0,hd(e,t,i,t.pendingProps);case 24:mi(t,qe,e.memoizedState.cache)}return Jt(e,t,i)}function wd(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!Qr(e,i)&&(t.flags&128)===0)return je=!1,Zg(e,t,i);je=(e.flags&131072)!==0}else je=!1,ce&&(t.flags&1048576)!==0&&$c(t,ua,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Qi(t.elementType),t.type=e,typeof e=="function")$s(e)?(n=Ji(e,n),t.tag=1,t=md(null,t,e,n,i)):(t.tag=0,t=Ur(null,t,e,n,i));else{if(e!=null){var a=e.$$typeof;if(a===pe){t.tag=11,t=cd(null,t,e,n,i);break e}else if(a===J){t.tag=14,t=ud(null,t,e,n,i);break e}}throw t=wt(e)||e,Error(l(306,t,""))}}return t;case 0:return Ur(e,t,t.type,t.pendingProps,i);case 1:return n=t.type,a=Ji(n,t.pendingProps),md(e,t,n,a,i);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(l(387));n=t.pendingProps;var o=t.memoizedState;a=o.element,gr(e,t),va(t,n,null,i);var s=t.memoizedState;if(n=s.cache,mi(t,qe,n),n!==o.cache&&lr(t,[qe],i,!0),ya(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yd(e,t,n,i);break e}else if(n!==a){a=Ct(Error(l(424)),t),da(a),t=yd(e,t,n,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Rt(e.firstChild),Ke=t,ce=!0,gi=null,Et=!0,i=hu(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(_i(),n===a){t=Jt(e,t,i);break e}Ze(e,t,n,i)}t=t.child}return t;case 26:return qo(e,t),e===null?(i=Nh(t.type,null,t.pendingProps,null))?t.memoizedState=i:ce||(i=t.type,e=t.pendingProps,n=ts(te.current).createElement(i),n[Qe]=t,n[at]=e,Je(n,i,e),_e(n),t.stateNode=n):t.memoizedState=Nh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bi(t),e===null&&ce&&(n=t.stateNode=Dh(t.type,t.pendingProps,te.current),Ke=t,Et=!0,a=Me,Di(t.type)?(Ml=a,Me=Rt(n.firstChild)):Me=a),Ze(e,t,t.pendingProps.children,i),qo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((a=n=Me)&&(n=Mp(n,t.type,t.pendingProps,Et),n!==null?(t.stateNode=n,Ke=t,Me=Rt(n.firstChild),Et=!1,a=!0):a=!1),a||pi(t)),Bi(t),a=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,n=o.children,Sl(a,o)?n=null:s!==null&&Sl(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wr(e,t,Gg,null,null,i),qa._currentValue=a),qo(e,t),Ze(e,t,n,i),t.child;case 6:return e===null&&ce&&((e=i=Me)&&(i=Ep(i,t.pendingProps,Et),i!==null?(t.stateNode=i,Ke=t,Me=null,e=!0):e=!1),e||pi(t)),null;case 13:return vd(e,t,i);case 4:return Fe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Xi(t,null,n,i):Ze(e,t,n,i),t.child;case 11:return cd(e,t,t.type,t.pendingProps,i);case 7:return Ze(e,t,t.pendingProps,i),t.child;case 8:return Ze(e,t,t.pendingProps.children,i),t.child;case 12:return Ze(e,t,t.pendingProps.children,i),t.child;case 10:return n=t.pendingProps,mi(t,t.type,n.value),Ze(e,t,n.children,i),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Fi(t),a=Xe(a),n=n(a),t.flags|=1,Ze(e,t,n,i),t.child;case 14:return ud(e,t,t.type,t.pendingProps,i);case 15:return dd(e,t,t.type,t.pendingProps,i);case 19:return xd(e,t,i);case 31:return Xg(e,t,i);case 22:return hd(e,t,i,t.pendingProps);case 24:return Fi(t),n=Xe(qe),e===null?(a=dr(),a===null&&(a=Ae,o=cr(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=i),a=o),t.memoizedState={parent:n,cache:a},fr(t),mi(t,qe,a)):((e.lanes&i)!==0&&(gr(e,t),va(t,null,null,i),ya()),a=e.memoizedState,o=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),mi(t,qe,n)):(n=o.cache,mi(t,qe,n),n!==a.cache&&lr(t,[qe],i,!0))),Ze(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function $t(e){e.flags|=4}function Kr(e,t,i,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Qd())e.flags|=8192;else throw Ki=To,hr}else e.flags&=-16777217}function Sd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hh(t))if(Qd())e.flags|=8192;else throw Ki=To,hr}function jo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tc():536870912,e.lanes|=t,Bn|=t)}function Aa(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function Jg(e,t,i){var n=t.pendingProps;switch(nr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return i=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kt(qe),Re(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Sn(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,or())),Ee(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?($t(t),o!==null?(Ee(t),Sd(t,o)):(Ee(t),Kr(t,a,null,n,i))):o?o!==e.memoizedState?($t(t),Ee(t),Sd(t,o)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&$t(t),Ee(t),Kr(t,a,e,n,i)),null;case 27:if(Pi(t),i=te.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&$t(t);else{if(!n){if(t.stateNode===null)throw Error(l(166));return Ee(t),null}e=U.current,Sn(t)?tu(t):(e=Dh(a,n,i),t.stateNode=e,$t(t))}return Ee(t),null;case 5:if(Pi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&$t(t);else{if(!n){if(t.stateNode===null)throw Error(l(166));return Ee(t),null}if(o=U.current,Sn(t))tu(t);else{var s=ts(te.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?s.createElement(a,{is:n.is}):s.createElement(a)}}o[Qe]=t,o[at]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(Je(o,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&$t(t)}}return Ee(t),Kr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&$t(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(e=te.current,Sn(t)){if(e=t.stateNode,i=t.memoizedProps,n=null,a=Ke,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||vh(e.nodeValue,i)),e||pi(t,!0)}else e=ts(e).createTextNode(n),e[Qe]=t,t.stateNode=e}return Ee(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(n=Sn(t),i!==null){if(e===null){if(!n)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Qe]=t}else _i(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else i=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ee(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Sn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Qe]=t}else _i(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),a=!1}else a=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=i,t):(i=n!==null,e=e!==null&&e.memoizedState!==null,i&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),jo(t,t.updateQueue),Ee(t),null);case 4:return Re(),e===null&&yl(t.stateNode.containerInfo),Ee(t),null;case 10:return Kt(t.type),Ee(t),null;case 19:if(N(Pe),n=t.memoizedState,n===null)return Ee(t),null;if(a=(t.flags&128)!==0,o=n.rendering,o===null)if(a)Aa(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Mo(e),o!==null){for(t.flags|=128,Aa(n,!1),e=o.updateQueue,t.updateQueue=e,jo(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Xc(i,e),i=i.sibling;return O(Pe,Pe.current&1|2),ce&&Yt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Be()>Wo&&(t.flags|=128,a=!0,Aa(n,!1),t.lanes=4194304)}else{if(!a)if(e=Mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jo(t,e),Aa(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!ce)return Ee(t),null}else 2*Be()-n.renderingStartTime>Wo&&i!==536870912&&(t.flags|=128,a=!0,Aa(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Be(),e.sibling=null,i=Pe.current,O(Pe,a?i&1|2:i&1),ce&&Yt(t,n.treeForkCount),e):(Ee(t),null);case 22:case 23:return mt(t),vr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(i&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),i=t.updateQueue,i!==null&&jo(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==i&&(t.flags|=2048),e!==null&&N(Yi),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Kt(qe),Ee(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function $g(e,t){switch(nr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(qe),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pi(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(l(340));_i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));_i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(Pe),null;case 4:return Re(),null;case 10:return Kt(t.type),null;case 22:case 23:return mt(t),vr(),e!==null&&N(Yi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(qe),null;case 25:return null;default:return null}}function Td(e,t){switch(nr(t),t.tag){case 3:Kt(qe),Re();break;case 26:case 27:case 5:Pi(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:N(Pe);break;case 10:Kt(t.type);break;case 22:case 23:mt(t),vr(),e!==null&&N(Yi);break;case 24:Kt(qe)}}function Ca(e,t){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var a=n.next;i=a;do{if((i.tag&e)===e){n=void 0;var o=i.create,s=i.inst;n=o(),s.destroy=n}i=i.next}while(i!==a)}}catch(c){be(t,t.return,c)}}function Si(e,t,i){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){var s=n.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,a=t;var g=i,A=c;try{A()}catch(I){be(a,g,I)}}}n=n.next}while(n!==o)}}catch(I){be(t,t.return,I)}}function Ad(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{gu(t,i)}catch(n){be(e,e.return,n)}}}function Cd(e,t,i){i.props=Ji(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(n){be(e,t,n)}}function ka(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof i=="function"?e.refCleanup=i(n):i.current=n}}catch(a){be(e,t,a)}}function qt(e,t){var i=e.ref,n=e.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(a){be(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(a){be(e,t,a)}else i.current=null}function kd(e){var t=e.type,i=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break e;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(a){be(e,e.return,a)}}function Xr(e,t,i){try{var n=e.stateNode;wp(n,e.type,i,t),n[at]=t}catch(a){be(e,e.return,a)}}function Md(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Di(e.type)||e.tag===4}function Zr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Di(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jr(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=_t));else if(n!==4&&(n===27&&Di(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Jr(e,t,i),e=e.sibling;e!==null;)Jr(e,t,i),e=e.sibling}function Uo(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(n===27&&Di(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Uo(e,t,i),e=e.sibling;e!==null;)Uo(e,t,i),e=e.sibling}function Ed(e){var t=e.stateNode,i=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Je(t,n,i),t[Qe]=e,t[at]=i}catch(o){be(e,e.return,o)}}var ei=!1,Ue=!1,$r=!1,Dd=typeof WeakSet=="function"?WeakSet:Set,We=null;function ep(e,t){if(e=e.containerInfo,xl=ls,e=Uc(e),Fs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var s=0,c=-1,g=-1,A=0,I=0,L=e,C=null;t:for(;;){for(var E;L!==i||a!==0&&L.nodeType!==3||(c=s+a),L!==o||n!==0&&L.nodeType!==3||(g=s+n),L.nodeType===3&&(s+=L.nodeValue.length),(E=L.firstChild)!==null;)C=L,L=E;for(;;){if(L===e)break t;if(C===i&&++A===a&&(c=s),C===o&&++I===n&&(g=s),(E=L.nextSibling)!==null)break;L=C,C=L.parentNode}L=E}i=c===-1||g===-1?null:{start:c,end:g}}else i=null}i=i||{start:0,end:0}}else i=null;for(wl={focusedElem:e,selectionRange:i},ls=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)a=e[i],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,i=t,a=o.memoizedProps,o=o.memoizedState,n=i.stateNode;try{var V=Ji(i.type,a);e=n.getSnapshotBeforeUpdate(V,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){be(i,i.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)Al(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Al(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Rd(e,t,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:ii(e,i),n&4&&Ca(5,i);break;case 1:if(ii(e,i),n&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(s){be(i,i.return,s)}else{var a=Ji(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){be(i,i.return,s)}}n&64&&Ad(i),n&512&&ka(i,i.return);break;case 3:if(ii(e,i),n&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{gu(e,t)}catch(s){be(i,i.return,s)}}break;case 27:t===null&&n&4&&Ed(i);case 26:case 5:ii(e,i),t===null&&n&4&&kd(i),n&512&&ka(i,i.return);break;case 12:ii(e,i);break;case 31:ii(e,i),n&4&&zd(e,i);break;case 13:ii(e,i),n&4&&Ld(e,i),n&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=cp.bind(null,i),Dp(e,i))));break;case 22:if(n=i.memoizedState!==null||ei,!n){t=t!==null&&t.memoizedState!==null||Ue,a=ei;var o=Ue;ei=n,(Ue=t)&&!o?ni(e,i,(i.subtreeFlags&8772)!==0):ii(e,i),ei=a,Ue=o}break;case 30:break;default:ii(e,i)}}function Id(e){var t=e.alternate;t!==null&&(e.alternate=null,Id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ds(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,st=!1;function ti(e,t,i){for(i=i.child;i!==null;)Nd(e,t,i),i=i.sibling}function Nd(e,t,i){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Xn,i)}catch{}switch(i.tag){case 26:Ue||qt(i,t),ti(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ue||qt(i,t);var n=De,a=st;Di(i.type)&&(De=i.stateNode,st=!1),ti(e,t,i),Ba(i.stateNode),De=n,st=a;break;case 5:Ue||qt(i,t);case 6:if(n=De,a=st,De=null,ti(e,t,i),De=n,st=a,De!==null)if(st)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(i.stateNode)}catch(o){be(i,t,o)}else try{De.removeChild(i.stateNode)}catch(o){be(i,t,o)}break;case 18:De!==null&&(st?(e=De,Ah(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Vn(e)):Ah(De,i.stateNode));break;case 4:n=De,a=st,De=i.stateNode.containerInfo,st=!0,ti(e,t,i),De=n,st=a;break;case 0:case 11:case 14:case 15:Si(2,i,t),Ue||Si(4,i,t),ti(e,t,i);break;case 1:Ue||(qt(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Cd(i,t,n)),ti(e,t,i);break;case 21:ti(e,t,i);break;case 22:Ue=(n=Ue)||i.memoizedState!==null,ti(e,t,i),Ue=n;break;default:ti(e,t,i)}}function zd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vn(e)}catch(i){be(t,t.return,i)}}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vn(e)}catch(i){be(t,t.return,i)}}function tp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dd),t;default:throw Error(l(435,e.tag))}}function Go(e,t){var i=tp(e);t.forEach(function(n){if(!i.has(n)){i.add(n);var a=up.bind(null,e,n);n.then(a,a)}})}function rt(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var a=i[n],o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(Di(c.type)){De=c.stateNode,st=!1;break e}break;case 5:De=c.stateNode,st=!1;break e;case 3:case 4:De=c.stateNode.containerInfo,st=!0;break e}c=c.return}if(De===null)throw Error(l(160));Nd(o,s,a),De=null,st=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}var zt=null;function Bd(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),lt(e),n&4&&(Si(3,e,e.return),Ca(3,e),Si(5,e,e.return));break;case 1:rt(t,e),lt(e),n&512&&(Ue||i===null||qt(i,i.return)),n&64&&ei&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:var a=zt;if(rt(t,e),lt(e),n&512&&(Ue||i===null||qt(i,i.return)),n&4){var o=i!==null?i.memoizedState:null;if(n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null){e:{n=e.type,i=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":o=a.getElementsByTagName("title")[0],(!o||o[$n]||o[Qe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=a.createElement(n),a.head.insertBefore(o,a.querySelector("head > title"))),Je(o,n,i),o[Qe]=e,_e(o),n=o;break e;case"link":var s=Bh("link","href",a).get(n+(i.href||""));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&o.getAttribute("rel")===(i.rel==null?null:i.rel)&&o.getAttribute("title")===(i.title==null?null:i.title)&&o.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){s.splice(c,1);break t}}o=a.createElement(n),Je(o,n,i),a.head.appendChild(o);break;case"meta":if(s=Bh("meta","content",a).get(n+(i.content||""))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute("content")===(i.content==null?null:""+i.content)&&o.getAttribute("name")===(i.name==null?null:i.name)&&o.getAttribute("property")===(i.property==null?null:i.property)&&o.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&o.getAttribute("charset")===(i.charSet==null?null:i.charSet)){s.splice(c,1);break t}}o=a.createElement(n),Je(o,n,i),a.head.appendChild(o);break;default:throw Error(l(468,n))}o[Qe]=e,_e(o),n=o}e.stateNode=n}else Ph(a,e.type,e.stateNode);else e.stateNode=Lh(a,n,e.memoizedProps);else o!==n?(o===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):o.count--,n===null?Ph(a,e.type,e.stateNode):Lh(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Xr(e,e.memoizedProps,i.memoizedProps)}break;case 27:rt(t,e),lt(e),n&512&&(Ue||i===null||qt(i,i.return)),i!==null&&n&4&&Xr(e,e.memoizedProps,i.memoizedProps);break;case 5:if(rt(t,e),lt(e),n&512&&(Ue||i===null||qt(i,i.return)),e.flags&32){a=e.stateNode;try{hn(a,"")}catch(V){be(e,e.return,V)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,Xr(e,a,i!==null?i.memoizedProps:a)),n&1024&&($r=!0);break;case 6:if(rt(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(l(162));n=e.memoizedProps,i=e.stateNode;try{i.nodeValue=n}catch(V){be(e,e.return,V)}}break;case 3:if(as=null,a=zt,zt=is(t.containerInfo),rt(t,e),zt=a,lt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(V){be(e,e.return,V)}$r&&($r=!1,Pd(e));break;case 4:n=zt,zt=is(e.stateNode.containerInfo),rt(t,e),lt(e),zt=n;break;case 12:rt(t,e),lt(e);break;case 31:rt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Go(e,n)));break;case 13:rt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_o=Be()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Go(e,n)));break;case 22:a=e.memoizedState!==null;var g=i!==null&&i.memoizedState!==null,A=ei,I=Ue;if(ei=A||a,Ue=I||g,rt(t,e),Ue=I,ei=A,lt(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(i===null||g||ei||Ue||$i(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){g=i=t;try{if(o=g.stateNode,a)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=g.stateNode;var L=g.memoizedProps.style,C=L!=null&&L.hasOwnProperty("display")?L.display:null;c.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(V){be(g,g.return,V)}}}else if(t.tag===6){if(i===null){g=t;try{g.stateNode.nodeValue=a?"":g.memoizedProps}catch(V){be(g,g.return,V)}}}else if(t.tag===18){if(i===null){g=t;try{var E=g.stateNode;a?Ch(E,!0):Ch(g.stateNode,!1)}catch(V){be(g,g.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Go(e,i))));break;case 19:rt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Go(e,n)));break;case 30:break;case 21:break;default:rt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var i,n=e.return;n!==null;){if(Md(n)){i=n;break}n=n.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var a=i.stateNode,o=Zr(e);Uo(e,o,a);break;case 5:var s=i.stateNode;i.flags&32&&(hn(s,""),i.flags&=-33);var c=Zr(e);Uo(e,c,s);break;case 3:case 4:var g=i.stateNode.containerInfo,A=Zr(e);Jr(e,A,g);break;default:throw Error(l(161))}}catch(I){be(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ii(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function $i(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Si(4,t,t.return),$i(t);break;case 1:qt(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Cd(t,t.return,i),$i(t);break;case 27:Ba(t.stateNode);case 26:case 5:qt(t,t.return),$i(t);break;case 22:t.memoizedState===null&&$i(t);break;case 30:$i(t);break;default:$i(t)}e=e.sibling}}function ni(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:ni(a,o,i),Ca(4,o);break;case 1:if(ni(a,o,i),n=o,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(A){be(n,n.return,A)}if(n=o,a=n.updateQueue,a!==null){var c=n.stateNode;try{var g=a.shared.hiddenCallbacks;if(g!==null)for(a.shared.hiddenCallbacks=null,a=0;a<g.length;a++)fu(g[a],c)}catch(A){be(n,n.return,A)}}i&&s&64&&Ad(o),ka(o,o.return);break;case 27:Ed(o);case 26:case 5:ni(a,o,i),i&&n===null&&s&4&&kd(o),ka(o,o.return);break;case 12:ni(a,o,i);break;case 31:ni(a,o,i),i&&s&4&&zd(a,o);break;case 13:ni(a,o,i),i&&s&4&&Ld(a,o);break;case 22:o.memoizedState===null&&ni(a,o,i),ka(o,o.return);break;case 30:break;default:ni(a,o,i)}t=t.sibling}}function el(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&ha(i))}function tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Lt(e,t,i,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hd(e,t,i,n),t=t.sibling}function Hd(e,t,i,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,i,n),a&2048&&Ca(9,t);break;case 1:Lt(e,t,i,n);break;case 3:Lt(e,t,i,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(a&2048){Lt(e,t,i,n),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){be(t,t.return,g)}}else Lt(e,t,i,n);break;case 31:Lt(e,t,i,n);break;case 13:Lt(e,t,i,n);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?Lt(e,t,i,n):Ma(e,t):o._visibility&2?Lt(e,t,i,n):(o._visibility|=2,Nn(e,t,i,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&el(s,t);break;case 24:Lt(e,t,i,n),a&2048&&tl(t.alternate,t);break;default:Lt(e,t,i,n)}}function Nn(e,t,i,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,c=i,g=n,A=s.flags;switch(s.tag){case 0:case 11:case 15:Nn(o,s,c,g,a),Ca(8,s);break;case 23:break;case 22:var I=s.stateNode;s.memoizedState!==null?I._visibility&2?Nn(o,s,c,g,a):Ma(o,s):(I._visibility|=2,Nn(o,s,c,g,a)),a&&A&2048&&el(s.alternate,s);break;case 24:Nn(o,s,c,g,a),a&&A&2048&&tl(s.alternate,s);break;default:Nn(o,s,c,g,a)}t=t.sibling}}function Ma(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,n=t,a=n.flags;switch(n.tag){case 22:Ma(i,n),a&2048&&el(n.alternate,n);break;case 24:Ma(i,n),a&2048&&tl(n.alternate,n);break;default:Ma(i,n)}t=t.sibling}}var Ea=8192;function zn(e,t,i){if(e.subtreeFlags&Ea)for(e=e.child;e!==null;)qd(e,t,i),e=e.sibling}function qd(e,t,i){switch(e.tag){case 26:zn(e,t,i),e.flags&Ea&&e.memoizedState!==null&&Up(i,zt,e.memoizedState,e.memoizedProps);break;case 5:zn(e,t,i);break;case 3:case 4:var n=zt;zt=is(e.stateNode.containerInfo),zn(e,t,i),zt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ea,Ea=16777216,zn(e,t,i),Ea=n):zn(e,t,i));break;default:zn(e,t,i)}}function Od(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Da(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];We=n,Ud(n,e)}Od(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jd(e),e=e.sibling}function jd(e){switch(e.tag){case 0:case 11:case 15:Da(e),e.flags&2048&&Si(9,e,e.return);break;case 3:Da(e);break;case 12:Da(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vo(e)):Da(e);break;default:Da(e)}}function Vo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];We=n,Ud(n,e)}Od(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Si(8,t,t.return),Vo(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Vo(t));break;default:Vo(t)}e=e.sibling}}function Ud(e,t){for(;We!==null;){var i=We;switch(i.tag){case 0:case 11:case 15:Si(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ha(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,We=n;else e:for(i=e;We!==null;){n=We;var a=n.sibling,o=n.return;if(Id(n),n===i){We=null;break e}if(a!==null){a.return=o,We=a;break e}We=o}}}var ip={getCacheForType:function(e){var t=Xe(qe),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return Xe(qe).controller.signal}},np=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ae=null,oe=null,re=0,ve=0,yt=null,Ti=!1,Ln=!1,il=!1,ai=0,ze=0,Ai=0,en=0,nl=0,vt=0,Bn=0,Ra=null,ct=null,al=!1,_o=0,Gd=0,Wo=1/0,Fo=null,Ci=null,Ve=0,ki=null,Pn=null,oi=0,ol=0,sl=null,Vd=null,Ia=0,rl=null;function bt(){return(ye&2)!==0&&re!==0?re&-re:R.T!==null?fl():oc()}function _d(){if(vt===0)if((re&536870912)===0||ce){var e=$a;$a<<=1,($a&3932160)===0&&($a=262144),vt=e}else vt=536870912;return e=pt.current,e!==null&&(e.flags|=32),vt}function ut(e,t,i){(e===Ae&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Hn(e,0),Mi(e,re,vt,!1)),Jn(e,i),((ye&2)===0||e!==Ae)&&(e===Ae&&((ye&2)===0&&(en|=i),ze===4&&Mi(e,re,vt,!1)),Ot(e))}function Wd(e,t,i){if((ye&6)!==0)throw Error(l(327));var n=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Zn(e,t),a=n?sp(e,t):cl(e,t,!0),o=n;do{if(a===0){Ln&&!n&&Mi(e,t,0,!1);break}else{if(i=e.current.alternate,o&&!ap(i)){a=cl(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;a=Ra;var g=c.current.memoizedState.isDehydrated;if(g&&(Hn(c,s).flags|=256),s=cl(c,s,!1),s!==2){if(il&&!g){c.errorRecoveryDisabledLanes|=o,en|=o,a=4;break e}o=ct,ct=a,o!==null&&(ct===null?ct=o:ct.push.apply(ct,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Hn(e,0),Mi(e,t,0,!0);break}e:{switch(n=e,o=a,o){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Mi(n,t,vt,!Ti);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(a=_o+300-Be(),10<a)){if(Mi(n,t,vt,!Ti),to(n,0,!0)!==0)break e;oi=t,n.timeoutHandle=Sh(Fd.bind(null,n,i,ct,Fo,al,t,vt,en,Bn,Ti,o,"Throttled",-0,0),a);break e}Fd(n,i,ct,Fo,al,t,vt,en,Bn,Ti,o,null,-0,0)}}break}while(!0);Ot(e)}function Fd(e,t,i,n,a,o,s,c,g,A,I,L,C,E){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},qd(t,o,L);var V=(o&62914560)===o?_o-Be():(o&4194048)===o?Gd-Be():0;if(V=Gp(L,V),V!==null){oi=o,e.cancelPendingCommit=V(eh.bind(null,e,t,o,i,n,a,s,c,g,I,L,null,C,E)),Mi(e,o,s,!A);return}}eh(e,t,o,i,n,a,s,c,g)}function ap(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var a=i[n],o=a.getSnapshot;a=a.value;try{if(!ft(o(),a))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mi(e,t,i,n){t&=~nl,t&=~en,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var o=31-ht(a),s=1<<o;n[o]=-1,a&=~s}i!==0&&ic(e,i,t)}function Yo(){return(ye&6)===0?(Na(0),!1):!0}function ll(){if(oe!==null){if(ve===0)var e=oe.return;else e=oe,Qt=Wi=null,Ar(e),Mn=null,ga=0,e=oe;for(;e!==null;)Td(e.alternate,e),e=e.return;oe=null}}function Hn(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Ap(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),oi=0,ll(),Ae=e,oe=i=Ft(e.current,null),re=t,ve=0,yt=null,Ti=!1,Ln=Zn(e,t),il=!1,Bn=vt=nl=en=Ai=ze=0,ct=Ra=null,al=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-ht(n),o=1<<a;t|=e[a],n&=~o}return ai=t,go(),i}function Yd(e,t){ne=null,R.H=Sa,t===kn||t===So?(t=cu(),ve=3):t===hr?(t=cu(),ve=4):ve=t===jr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,oe===null&&(ze=1,Po(e,Ct(t,e.current)))}function Qd(){var e=pt.current;return e===null?!0:(re&4194048)===re?Dt===null:(re&62914560)===re||(re&536870912)!==0?e===Dt:!1}function Kd(){var e=R.H;return R.H=Sa,e===null?Sa:e}function Xd(){var e=R.A;return R.A=ip,e}function Qo(){ze=4,Ti||(re&4194048)!==re&&pt.current!==null||(Ln=!0),(Ai&134217727)===0&&(en&134217727)===0||Ae===null||Mi(Ae,re,vt,!1)}function cl(e,t,i){var n=ye;ye|=2;var a=Kd(),o=Xd();(Ae!==e||re!==t)&&(Fo=null,Hn(e,t)),t=!1;var s=ze;e:do try{if(ve!==0&&oe!==null){var c=oe,g=yt;switch(ve){case 8:ll(),s=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var A=ve;if(ve=0,yt=null,qn(e,c,g,A),i&&Ln){s=0;break e}break;default:A=ve,ve=0,yt=null,qn(e,c,g,A)}}op(),s=ze;break}catch(I){Yd(e,I)}while(!0);return t&&e.shellSuspendCounter++,Qt=Wi=null,ye=n,R.H=a,R.A=o,oe===null&&(Ae=null,re=0,go()),s}function op(){for(;oe!==null;)Zd(oe)}function sp(e,t){var i=ye;ye|=2;var n=Kd(),a=Xd();Ae!==e||re!==t?(Fo=null,Wo=Be()+500,Hn(e,t)):Ln=Zn(e,t);e:do try{if(ve!==0&&oe!==null){t=oe;var o=yt;t:switch(ve){case 1:ve=0,yt=null,qn(e,t,o,1);break;case 2:case 9:if(ru(o)){ve=0,yt=null,Jd(t);break}t=function(){ve!==2&&ve!==9||Ae!==e||(ve=7),Ot(e)},o.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:ru(o)?(ve=0,yt=null,Jd(t)):(ve=0,yt=null,qn(e,t,o,7));break;case 5:var s=null;switch(oe.tag){case 26:s=oe.memoizedState;case 5:case 27:var c=oe;if(s?Hh(s):c.stateNode.complete){ve=0,yt=null;var g=c.sibling;if(g!==null)oe=g;else{var A=c.return;A!==null?(oe=A,Ko(A)):oe=null}break t}}ve=0,yt=null,qn(e,t,o,5);break;case 6:ve=0,yt=null,qn(e,t,o,6);break;case 8:ll(),ze=6;break e;default:throw Error(l(462))}}rp();break}catch(I){Yd(e,I)}while(!0);return Qt=Wi=null,R.H=n,R.A=a,ye=i,oe!==null?0:(Ae=null,re=0,go(),ze)}function rp(){for(;oe!==null&&!Ts();)Zd(oe)}function Zd(e){var t=wd(e.alternate,e,ai);e.memoizedProps=e.pendingProps,t===null?Ko(e):oe=t}function Jd(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=pd(i,t,t.pendingProps,t.type,void 0,re);break;case 11:t=pd(i,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Ar(t);default:Td(i,t),t=oe=Xc(t,ai),t=wd(i,t,ai)}e.memoizedProps=e.pendingProps,t===null?Ko(e):oe=t}function qn(e,t,i,n){Qt=Wi=null,Ar(t),Mn=null,ga=0;var a=t.return;try{if(Kg(e,a,t,i,re)){ze=1,Po(e,Ct(i,e.current)),oe=null;return}}catch(o){if(a!==null)throw oe=a,o;ze=1,Po(e,Ct(i,e.current)),oe=null;return}t.flags&32768?(ce||n===1?e=!0:Ln||(re&536870912)!==0?e=!1:(Ti=e=!0,(n===2||n===9||n===3||n===6)&&(n=pt.current,n!==null&&n.tag===13&&(n.flags|=16384))),$d(t,e)):Ko(t)}function Ko(e){var t=e;do{if((t.flags&32768)!==0){$d(t,Ti);return}e=t.return;var i=Jg(t.alternate,t,ai);if(i!==null){oe=i;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ze===0&&(ze=5)}function $d(e,t){do{var i=$g(e.alternate,e);if(i!==null){i.flags&=32767,oe=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=i}while(e!==null);ze=6,oe=null}function eh(e,t,i,n,a,o,s,c,g){e.cancelPendingCommit=null;do Xo();while(Ve!==0);if((ye&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(o=t.lanes|t.childLanes,o|=Zs,jf(e,i,o,s,c,g),e===Ae&&(oe=Ae=null,re=0),Pn=t,ki=e,oi=i,ol=o,sl=a,Vd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dp(Ye,function(){return oh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,a=q.p,q.p=2,s=ye,ye|=4;try{ep(e,t,i)}finally{ye=s,q.p=a,R.T=n}}Ve=1,th(),ih(),nh()}}function th(){if(Ve===1){Ve=0;var e=ki,t=Pn,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var n=q.p;q.p=2;var a=ye;ye|=4;try{Bd(t,e);var o=wl,s=Uc(e.containerInfo),c=o.focusedElem,g=o.selectionRange;if(s!==c&&c&&c.ownerDocument&&jc(c.ownerDocument.documentElement,c)){if(g!==null&&Fs(c)){var A=g.start,I=g.end;if(I===void 0&&(I=A),"selectionStart"in c)c.selectionStart=A,c.selectionEnd=Math.min(I,c.value.length);else{var L=c.ownerDocument||document,C=L&&L.defaultView||window;if(C.getSelection){var E=C.getSelection(),V=c.textContent.length,Z=Math.min(g.start,V),Te=g.end===void 0?Z:Math.min(g.end,V);!E.extend&&Z>Te&&(s=Te,Te=Z,Z=s);var x=Oc(c,Z),v=Oc(c,Te);if(x&&v&&(E.rangeCount!==1||E.anchorNode!==x.node||E.anchorOffset!==x.offset||E.focusNode!==v.node||E.focusOffset!==v.offset)){var T=L.createRange();T.setStart(x.node,x.offset),E.removeAllRanges(),Z>Te?(E.addRange(T),E.extend(v.node,v.offset)):(T.setEnd(v.node,v.offset),E.addRange(T))}}}}for(L=[],E=c;E=E.parentNode;)E.nodeType===1&&L.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<L.length;c++){var z=L[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}ls=!!xl,wl=xl=null}finally{ye=a,q.p=n,R.T=i}}e.current=t,Ve=2}}function ih(){if(Ve===2){Ve=0;var e=ki,t=Pn,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var n=q.p;q.p=2;var a=ye;ye|=4;try{Rd(e,t.alternate,t)}finally{ye=a,q.p=n,R.T=i}}Ve=3}}function nh(){if(Ve===4||Ve===3){Ve=0,on();var e=ki,t=Pn,i=oi,n=Vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Pn=ki=null,ah(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ci=null),Ms(i),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Xn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,a=q.p,q.p=2,R.T=null;try{for(var o=e.onRecoverableError,s=0;s<n.length;s++){var c=n[s];o(c.value,{componentStack:c.stack})}}finally{R.T=t,q.p=a}}(oi&3)!==0&&Xo(),Ot(e),a=e.pendingLanes,(i&261930)!==0&&(a&42)!==0?e===rl?Ia++:(Ia=0,rl=e):Ia=0,Na(0)}}function ah(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Xo(){return th(),ih(),nh(),oh()}function oh(){if(Ve!==5)return!1;var e=ki,t=ol;ol=0;var i=Ms(oi),n=R.T,a=q.p;try{q.p=32>i?32:i,R.T=null,i=sl,sl=null;var o=ki,s=oi;if(Ve=0,Pn=ki=null,oi=0,(ye&6)!==0)throw Error(l(331));var c=ye;if(ye|=4,jd(o.current),Hd(o,o.current,s,i),ye=c,Na(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Xn,o)}catch{}return!0}finally{q.p=a,R.T=n,ah(e,t)}}function sh(e,t,i){t=Ct(i,t),t=Or(e.stateNode,t,2),e=bi(e,t,2),e!==null&&(Jn(e,2),Ot(e))}function be(e,t,i){if(e.tag===3)sh(e,e,i);else for(;t!==null;){if(t.tag===3){sh(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ci===null||!Ci.has(n))){e=Ct(i,e),i=rd(2),n=bi(t,i,2),n!==null&&(ld(i,n,t,e),Jn(n,2),Ot(n));break}}t=t.return}}function ul(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new np;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(i)||(il=!0,a.add(i),e=lp.bind(null,e,t,i),t.then(e,e))}function lp(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ae===e&&(re&i)===i&&(ze===4||ze===3&&(re&62914560)===re&&300>Be()-_o?(ye&2)===0&&Hn(e,0):nl|=i,Bn===re&&(Bn=0)),Ot(e)}function rh(e,t){t===0&&(t=tc()),e=Gi(e,t),e!==null&&(Jn(e,t),Ot(e))}function cp(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),rh(e,i)}function up(e,t){var i=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(i=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(l(314))}n!==null&&n.delete(t),rh(e,i)}function dp(e,t){return Qn(e,t)}var Zo=null,On=null,dl=!1,Jo=!1,hl=!1,Ei=0;function Ot(e){e!==On&&e.next===null&&(On===null?Zo=On=e:On=On.next=e),Jo=!0,dl||(dl=!0,fp())}function Na(e,t){if(!hl&&Jo){hl=!0;do for(var i=!1,n=Zo;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var o=0;else{var s=n.suspendedLanes,c=n.pingedLanes;o=(1<<31-ht(42|e)+1)-1,o&=a&~(s&~c),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(i=!0,dh(n,o))}else o=re,o=to(n,n===Ae?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Zn(n,o)||(i=!0,dh(n,o));n=n.next}while(i);hl=!1}}function hp(){lh()}function lh(){Jo=dl=!1;var e=0;Ei!==0&&Tp()&&(e=Ei);for(var t=Be(),i=null,n=Zo;n!==null;){var a=n.next,o=ch(n,t);o===0?(n.next=null,i===null?Zo=a:i.next=a,a===null&&(On=i)):(i=n,(e!==0||(o&3)!==0)&&(Jo=!0)),n=a}Ve!==0&&Ve!==5||Na(e),Ei!==0&&(Ei=0)}function ch(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-ht(o),c=1<<s,g=a[s];g===-1?((c&i)===0||(c&n)!==0)&&(a[s]=Of(c,t)):g<=t&&(e.expiredLanes|=c),o&=~c}if(t=Ae,i=re,i=to(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,i===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Kn(n),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Zn(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(n!==null&&Kn(n),Ms(i)){case 2:case 8:i=me;break;case 32:i=Ye;break;case 268435456:i=ec;break;default:i=Ye}return n=uh.bind(null,e),i=Qn(i,n),e.callbackPriority=t,e.callbackNode=i,t}return n!==null&&n!==null&&Kn(n),e.callbackPriority=2,e.callbackNode=null,2}function uh(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Xo()&&e.callbackNode!==i)return null;var n=re;return n=to(e,e===Ae?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Wd(e,n,t),ch(e,Be()),e.callbackNode!=null&&e.callbackNode===i?uh.bind(null,e):null)}function dh(e,t){if(Xo())return null;Wd(e,t,!0)}function fp(){Cp(function(){(ye&6)!==0?Qn($,hp):lh()})}function fl(){if(Ei===0){var e=An;e===0&&(e=Ja,Ja<<=1,(Ja&261888)===0&&(Ja=256)),Ei=e}return Ei}function hh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oo(""+e)}function fh(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function gp(e,t,i,n,a){if(t==="submit"&&i&&i.stateNode===a){var o=hh((a[at]||null).action),s=n.submitter;s&&(t=(t=s[at]||null)?hh(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var c=new co("action","action",null,n,a);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ei!==0){var g=s?fh(a,s):new FormData(a);zr(i,{pending:!0,data:g,method:a.method,action:o},null,g)}}else typeof o=="function"&&(c.preventDefault(),g=s?fh(a,s):new FormData(a),zr(i,{pending:!0,data:g,method:a.method,action:o},o,g))},currentTarget:a}]})}}for(var gl=0;gl<Xs.length;gl++){var pl=Xs[gl],pp=pl.toLowerCase(),mp=pl[0].toUpperCase()+pl.slice(1);Nt(pp,"on"+mp)}Nt(_c,"onAnimationEnd"),Nt(Wc,"onAnimationIteration"),Nt(Fc,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Ng,"onTransitionRun"),Nt(zg,"onTransitionStart"),Nt(Lg,"onTransitionCancel"),Nt(Yc,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(za));function gh(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var c=n[s],g=c.instance,A=c.currentTarget;if(c=c.listener,g!==o&&a.isPropagationStopped())break e;o=c,a.currentTarget=A;try{o(a)}catch(I){fo(I)}a.currentTarget=null,o=g}else for(s=0;s<n.length;s++){if(c=n[s],g=c.instance,A=c.currentTarget,c=c.listener,g!==o&&a.isPropagationStopped())break e;o=c,a.currentTarget=A;try{o(a)}catch(I){fo(I)}a.currentTarget=null,o=g}}}}function se(e,t){var i=t[Es];i===void 0&&(i=t[Es]=new Set);var n=e+"__bubble";i.has(n)||(ph(t,e,2,!1),i.add(n))}function ml(e,t,i){var n=0;t&&(n|=4),ph(i,e,n,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function yl(e){if(!e[$o]){e[$o]=!0,lc.forEach(function(i){i!=="selectionchange"&&(yp.has(i)||ml(i,!1,e),ml(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,ml("selectionchange",!1,t))}}function ph(e,t,i,n){switch(_h(t)){case 2:var a=Wp;break;case 8:a=Fp;break;default:a=Nl}i=a.bind(null,t,i,e),a=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,i,{capture:!0,passive:a}):e.addEventListener(t,i,!0):a!==void 0?e.addEventListener(t,i,{passive:a}):e.addEventListener(t,i,!1)}function vl(e,t,i,n,a){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var c=n.stateNode.containerInfo;if(c===a)break;if(s===4)for(s=n.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;c!==null;){if(s=rn(c),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){n=o=s;continue e}c=c.parentNode}}n=n.return}xc(function(){var A=o,I=Bs(i),L=[];e:{var C=Qc.get(e);if(C!==void 0){var E=co,V=e;switch(e){case"keypress":if(ro(i)===0)break e;case"keydown":case"keyup":E=ug;break;case"focusin":V="focus",E=Us;break;case"focusout":V="blur",E=Us;break;case"beforeblur":case"afterblur":E=Us;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=fg;break;case _c:case Wc:case Fc:E=tg;break;case Yc:E=pg;break;case"scroll":case"scrollend":E=Xf;break;case"wheel":E=yg;break;case"copy":case"cut":case"paste":E=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Cc;break;case"toggle":case"beforetoggle":E=bg}var Z=(t&4)!==0,Te=!Z&&(e==="scroll"||e==="scrollend"),x=Z?C!==null?C+"Capture":null:C;Z=[];for(var v=A,T;v!==null;){var z=v;if(T=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||T===null||x===null||(z=ta(v,x),z!=null&&Z.push(La(v,z,T))),Te)break;v=v.return}0<Z.length&&(C=new E(C,V,null,i,I),L.push({event:C,listeners:Z}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",C&&i!==Ls&&(V=i.relatedTarget||i.fromElement)&&(rn(V)||V[sn]))break e;if((E||C)&&(C=I.window===I?I:(C=I.ownerDocument)?C.defaultView||C.parentWindow:window,E?(V=i.relatedTarget||i.toElement,E=A,V=V?rn(V):null,V!==null&&(Te=p(V),Z=V.tag,V!==Te||Z!==5&&Z!==27&&Z!==6)&&(V=null)):(E=null,V=A),E!==V)){if(Z=Tc,z="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Cc,z="onPointerLeave",x="onPointerEnter",v="pointer"),Te=E==null?C:ea(E),T=V==null?C:ea(V),C=new Z(z,v+"leave",E,i,I),C.target=Te,C.relatedTarget=T,z=null,rn(I)===A&&(Z=new Z(x,v+"enter",V,i,I),Z.target=T,Z.relatedTarget=Te,z=Z),Te=z,E&&V)t:{for(Z=vp,x=E,v=V,T=0,z=x;z;z=Z(z))T++;z=0;for(var Q=v;Q;Q=Z(Q))z++;for(;0<T-z;)x=Z(x),T--;for(;0<z-T;)v=Z(v),z--;for(;T--;){if(x===v||v!==null&&x===v.alternate){Z=x;break t}x=Z(x),v=Z(v)}Z=null}else Z=null;E!==null&&mh(L,C,E,Z,!1),V!==null&&Te!==null&&mh(L,Te,V,Z,!0)}}e:{if(C=A?ea(A):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var fe=zc;else if(Ic(C))if(Lc)fe=Dg;else{fe=Mg;var F=kg}else E=C.nodeName,!E||E.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&zs(A.elementType)&&(fe=zc):fe=Eg;if(fe&&(fe=fe(e,A))){Nc(L,fe,i,I);break e}F&&F(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&Ns(C,"number",C.value)}switch(F=A?ea(A):window,e){case"focusin":(Ic(F)||F.contentEditable==="true")&&(mn=F,Ys=A,ca=null);break;case"focusout":ca=Ys=mn=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Gc(L,i,I);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":Gc(L,i,I)}var ae;if(Vs)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else pn?Dc(e,i)&&(le="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(le="onCompositionStart");le&&(kc&&i.locale!=="ko"&&(pn||le!=="onCompositionStart"?le==="onCompositionEnd"&&pn&&(ae=wc()):(hi=I,qs="value"in hi?hi.value:hi.textContent,pn=!0)),F=es(A,le),0<F.length&&(le=new Ac(le,e,null,i,I),L.push({event:le,listeners:F}),ae?le.data=ae:(ae=Rc(i),ae!==null&&(le.data=ae)))),(ae=wg?Sg(e,i):Tg(e,i))&&(le=es(A,"onBeforeInput"),0<le.length&&(F=new Ac("onBeforeInput","beforeinput",null,i,I),L.push({event:F,listeners:le}),F.data=ae)),gp(L,e,A,i,I)}gh(L,t)})}function La(e,t,i){return{instance:e,listener:t,currentTarget:i}}function es(e,t){for(var i=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=ta(e,i),a!=null&&n.unshift(La(e,a,o)),a=ta(e,t),a!=null&&n.push(La(e,a,o))),e.tag===3)return n;e=e.return}return[]}function vp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mh(e,t,i,n,a){for(var o=t._reactName,s=[];i!==null&&i!==n;){var c=i,g=c.alternate,A=c.stateNode;if(c=c.tag,g!==null&&g===n)break;c!==5&&c!==26&&c!==27||A===null||(g=A,a?(A=ta(i,o),A!=null&&s.unshift(La(i,A,g))):a||(A=ta(i,o),A!=null&&s.push(La(i,A,g)))),i=i.return}s.length!==0&&e.push({event:t,listeners:s})}var bp=/\r\n?/g,xp=/\u0000|\uFFFD/g;function yh(e){return(typeof e=="string"?e:""+e).replace(bp,`
`).replace(xp,"")}function vh(e,t){return t=yh(t),yh(e)===t}function Se(e,t,i,n,a,o){switch(i){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||hn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&hn(e,""+n);break;case"className":no(e,"class",n);break;case"tabIndex":no(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":no(e,i,n);break;case"style":vc(e,n,o);break;case"data":if(t!=="object"){no(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=oo(""+n),e.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(i==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=oo(""+n),e.setAttribute(i,n);break;case"onClick":n!=null&&(e.onclick=_t);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(l(61));if(i=n.__html,i!=null){if(a.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}i=oo(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""+n):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":n===!0?e.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,n):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(i,n):e.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(i):e.setAttribute(i,n);break;case"popover":se("beforetoggle",e),se("toggle",e),io(e,"popover",n);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":io(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Qf.get(i)||i,io(e,i,n))}}function bl(e,t,i,n,a,o){switch(i){case"style":vc(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(l(61));if(i=n.__html,i!=null){if(a.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"children":typeof n=="string"?hn(e,n):(typeof n=="number"||typeof n=="bigint")&&hn(e,""+n);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"onClick":n!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(a=i.endsWith("Capture"),t=i.slice(2,a?i.length-7:void 0),o=e[at]||null,o=o!=null?o[i]:null,typeof o=="function"&&e.removeEventListener(t,o,a),typeof n=="function")){typeof o!="function"&&o!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,n,a);break e}i in e?e[i]=n:n===!0?e.setAttribute(i,""):io(e,i,n)}}}function Je(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var n=!1,a=!1,o;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Se(e,t,o,s,i,null)}}a&&Se(e,t,"srcSet",i.srcSet,i,null),n&&Se(e,t,"src",i.src,i,null);return;case"input":se("invalid",e);var c=o=s=a=null,g=null,A=null;for(n in i)if(i.hasOwnProperty(n)){var I=i[n];if(I!=null)switch(n){case"name":a=I;break;case"type":s=I;break;case"checked":g=I;break;case"defaultChecked":A=I;break;case"value":o=I;break;case"defaultValue":c=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,t));break;default:Se(e,t,n,I,i,null)}}gc(e,o,c,g,A,s,a,!1);return;case"select":se("invalid",e),n=s=o=null;for(a in i)if(i.hasOwnProperty(a)&&(c=i[a],c!=null))switch(a){case"value":o=c;break;case"defaultValue":s=c;break;case"multiple":n=c;default:Se(e,t,a,c,i,null)}t=o,i=s,e.multiple=!!n,t!=null?dn(e,!!n,t,!1):i!=null&&dn(e,!!n,i,!0);return;case"textarea":se("invalid",e),o=a=n=null;for(s in i)if(i.hasOwnProperty(s)&&(c=i[s],c!=null))switch(s){case"value":n=c;break;case"defaultValue":a=c;break;case"children":o=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:Se(e,t,s,c,i,null)}mc(e,n,a,o);return;case"option":for(g in i)if(i.hasOwnProperty(g)&&(n=i[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Se(e,t,g,n,i,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(n=0;n<za.length;n++)se(za[n],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in i)if(i.hasOwnProperty(A)&&(n=i[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Se(e,t,A,n,i,null)}return;default:if(zs(t)){for(I in i)i.hasOwnProperty(I)&&(n=i[I],n!==void 0&&bl(e,t,I,n,i,void 0));return}}for(c in i)i.hasOwnProperty(c)&&(n=i[c],n!=null&&Se(e,t,c,n,i,null))}function wp(e,t,i,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,s=null,c=null,g=null,A=null,I=null;for(E in i){var L=i[E];if(i.hasOwnProperty(E)&&L!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":g=L;default:n.hasOwnProperty(E)||Se(e,t,E,null,n,L)}}for(var C in n){var E=n[C];if(L=i[C],n.hasOwnProperty(C)&&(E!=null||L!=null))switch(C){case"type":o=E;break;case"name":a=E;break;case"checked":A=E;break;case"defaultChecked":I=E;break;case"value":s=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(l(137,t));break;default:E!==L&&Se(e,t,C,E,n,L)}}Is(e,s,c,g,A,I,o,a);return;case"select":E=s=c=C=null;for(o in i)if(g=i[o],i.hasOwnProperty(o)&&g!=null)switch(o){case"value":break;case"multiple":E=g;default:n.hasOwnProperty(o)||Se(e,t,o,null,n,g)}for(a in n)if(o=n[a],g=i[a],n.hasOwnProperty(a)&&(o!=null||g!=null))switch(a){case"value":C=o;break;case"defaultValue":c=o;break;case"multiple":s=o;default:o!==g&&Se(e,t,a,o,n,g)}t=c,i=s,n=E,C!=null?dn(e,!!i,C,!1):!!n!=!!i&&(t!=null?dn(e,!!i,t,!0):dn(e,!!i,i?[]:"",!1));return;case"textarea":E=C=null;for(c in i)if(a=i[c],i.hasOwnProperty(c)&&a!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Se(e,t,c,null,n,a)}for(s in n)if(a=n[s],o=i[s],n.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case"value":C=a;break;case"defaultValue":E=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(l(91));break;default:a!==o&&Se(e,t,s,a,n,o)}pc(e,C,E);return;case"option":for(var V in i)if(C=i[V],i.hasOwnProperty(V)&&C!=null&&!n.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:Se(e,t,V,null,n,C)}for(g in n)if(C=n[g],E=i[g],n.hasOwnProperty(g)&&C!==E&&(C!=null||E!=null))switch(g){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Se(e,t,g,C,n,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in i)C=i[Z],i.hasOwnProperty(Z)&&C!=null&&!n.hasOwnProperty(Z)&&Se(e,t,Z,null,n,C);for(A in n)if(C=n[A],E=i[A],n.hasOwnProperty(A)&&C!==E&&(C!=null||E!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(l(137,t));break;default:Se(e,t,A,C,n,E)}return;default:if(zs(t)){for(var Te in i)C=i[Te],i.hasOwnProperty(Te)&&C!==void 0&&!n.hasOwnProperty(Te)&&bl(e,t,Te,void 0,n,C);for(I in n)C=n[I],E=i[I],!n.hasOwnProperty(I)||C===E||C===void 0&&E===void 0||bl(e,t,I,C,n,E);return}}for(var x in i)C=i[x],i.hasOwnProperty(x)&&C!=null&&!n.hasOwnProperty(x)&&Se(e,t,x,null,n,C);for(L in n)C=n[L],E=i[L],!n.hasOwnProperty(L)||C===E||C==null&&E==null||Se(e,t,L,C,n,E)}function bh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var a=i[n],o=a.transferSize,s=a.initiatorType,c=a.duration;if(o&&c&&bh(s)){for(s=0,c=a.responseEnd,n+=1;n<i.length;n++){var g=i[n],A=g.startTime;if(A>c)break;var I=g.transferSize,L=g.initiatorType;I&&bh(L)&&(g=g.responseEnd,s+=I*(g<c?1:(c-A)/(g-A)))}if(--n,t+=8*(o+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xl=null,wl=null;function ts(e){return e.nodeType===9?e:e.ownerDocument}function xh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===Tl?!1:(Tl=e,!0):(Tl=null,!1)}var Sh=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(e){return Th.resolve(null).then(e).catch(kp)}:Sh;function kp(e){setTimeout(function(){throw e})}function Di(e){return e==="head"}function Ah(e,t){var i=t,n=0;do{var a=i.nextSibling;if(e.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"||i==="/&"){if(n===0){e.removeChild(a),Vn(t);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")Ba(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Ba(i);for(var o=i.firstChild;o;){var s=o.nextSibling,c=o.nodeName;o[$n]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&o.rel.toLowerCase()==="stylesheet"||i.removeChild(o),o=s}}else i==="body"&&Ba(e.ownerDocument.body);i=a}while(i);Vn(t)}function Ch(e,t){var i=e;e=0;do{var n=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=n}while(i)}function Al(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Al(i),Ds(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Mp(e,t,i,n){for(;e.nodeType===1;){var a=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[$n])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function Ep(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Rt(e.nextSibling),e===null))return null;return e}function kh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function Cl(e){return e.data==="$?"||e.data==="$~"}function kl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dp(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var n=function(){t(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ml=null;function Mh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Rt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Dh(e,t,i){switch(t=ts(i),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ba(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ds(e)}var It=new Map,Rh=new Set;function is(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var si=q.d;q.d={f:Rp,r:Ip,D:Np,C:zp,L:Lp,m:Bp,X:Hp,S:Pp,M:qp};function Rp(){var e=si.f(),t=Yo();return e||t}function Ip(e){var t=ln(e);t!==null&&t.tag===5&&t.type==="form"?Yu(t):si.r(e)}var jn=typeof document>"u"?null:document;function Ih(e,t,i){var n=jn;if(n&&typeof t=="string"&&t){var a=Tt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof i=="string"&&(a+='[crossorigin="'+i+'"]'),Rh.has(a)||(Rh.add(a),e={rel:e,crossOrigin:i,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),Je(t,"link",e),_e(t),n.head.appendChild(t)))}}function Np(e){si.D(e),Ih("dns-prefetch",e,null)}function zp(e,t){si.C(e,t),Ih("preconnect",e,t)}function Lp(e,t,i){si.L(e,t,i);var n=jn;if(n&&e&&t){var a='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(a+='[imagesrcset="'+Tt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(a+='[imagesizes="'+Tt(i.imageSizes)+'"]')):a+='[href="'+Tt(e)+'"]';var o=a;switch(t){case"style":o=Un(e);break;case"script":o=Gn(e)}It.has(o)||(e=M({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),It.set(o,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Pa(o))||t==="script"&&n.querySelector(Ha(o))||(t=n.createElement("link"),Je(t,"link",e),_e(t),n.head.appendChild(t)))}}function Bp(e,t){si.m(e,t);var i=jn;if(i&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Tt(n)+'"][href="'+Tt(e)+'"]',o=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Gn(e)}if(!It.has(o)&&(e=M({rel:"modulepreload",href:e},t),It.set(o,e),i.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ha(o)))return}n=i.createElement("link"),Je(n,"link",e),_e(n),i.head.appendChild(n)}}}function Pp(e,t,i){si.S(e,t,i);var n=jn;if(n&&e){var a=cn(n).hoistableStyles,o=Un(e);t=t||"default";var s=a.get(o);if(!s){var c={loading:0,preload:null};if(s=n.querySelector(Pa(o)))c.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},i),(i=It.get(o))&&El(e,i);var g=s=n.createElement("link");_e(g),Je(g,"link",e),g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),g.addEventListener("load",function(){c.loading|=1}),g.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ns(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:c},a.set(o,s)}}}function Hp(e,t){si.X(e,t);var i=jn;if(i&&e){var n=cn(i).hoistableScripts,a=Gn(e),o=n.get(a);o||(o=i.querySelector(Ha(a)),o||(e=M({src:e,async:!0},t),(t=It.get(a))&&Dl(e,t),o=i.createElement("script"),_e(o),Je(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}function qp(e,t){si.M(e,t);var i=jn;if(i&&e){var n=cn(i).hoistableScripts,a=Gn(e),o=n.get(a);o||(o=i.querySelector(Ha(a)),o||(e=M({src:e,async:!0,type:"module"},t),(t=It.get(a))&&Dl(e,t),o=i.createElement("script"),_e(o),Je(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}function Nh(e,t,i,n){var a=(a=te.current)?is(a):null;if(!a)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=Un(i.href),i=cn(a).hoistableStyles,n=i.get(t),n||(n={type:"style",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Un(i.href);var o=cn(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Pa(e)))&&!o._p&&(s.instance=o,s.state.loading=5),It.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},It.set(e,i),o||Op(a,e,i,s.state))),t&&n===null)throw Error(l(528,""));return s}if(t&&n!==null)throw Error(l(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gn(i),i=cn(a).hoistableScripts,n=i.get(t),n||(n={type:"script",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Un(e){return'href="'+Tt(e)+'"'}function Pa(e){return'link[rel="stylesheet"]['+e+"]"}function zh(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Op(e,t,i,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Je(t,"link",i),_e(t),e.head.appendChild(t))}function Gn(e){return'[src="'+Tt(e)+'"]'}function Ha(e){return"script[async]"+e}function Lh(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Tt(i.href)+'"]');if(n)return t.instance=n,_e(n),n;var a=M({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),_e(n),Je(n,"style",a),ns(n,i.precedence,e),t.instance=n;case"stylesheet":a=Un(i.href);var o=e.querySelector(Pa(a));if(o)return t.state.loading|=4,t.instance=o,_e(o),o;n=zh(i),(a=It.get(a))&&El(n,a),o=(e.ownerDocument||e).createElement("link"),_e(o);var s=o;return s._p=new Promise(function(c,g){s.onload=c,s.onerror=g}),Je(o,"link",n),t.state.loading|=4,ns(o,i.precedence,e),t.instance=o;case"script":return o=Gn(i.src),(a=e.querySelector(Ha(o)))?(t.instance=a,_e(a),a):(n=i,(a=It.get(o))&&(n=M({},i),Dl(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),_e(a),Je(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ns(n,i.precedence,e));return t.instance}function ns(e,t,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,o=a,s=0;s<n.length;s++){var c=n[s];if(c.dataset.precedence===t)o=c;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function El(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var as=null;function Bh(e,t,i){if(as===null){var n=new Map,a=as=new Map;a.set(i,n)}else a=as,n=a.get(i),n||(n=new Map,a.set(i,n));if(n.has(e))return n;for(n.set(e,null),i=i.getElementsByTagName(e),a=0;a<i.length;a++){var o=i[a];if(!(o[$n]||o[Qe]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var c=n.get(s);c?c.push(o):n.set(s,[o])}}return n}function Ph(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function jp(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Up(e,t,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var a=Un(n.href),o=t.querySelector(Pa(a));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=os.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=o,_e(o);return}o=t.ownerDocument||t,n=zh(n),(a=It.get(a))&&El(n,a),o=o.createElement("link"),_e(o);var s=o;s._p=new Promise(function(c,g){s.onload=c,s.onerror=g}),Je(o,"link",n),i.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=os.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Rl=0;function Gp(e,t){return e.stylesheets&&e.count===0&&rs(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var n=setTimeout(function(){if(e.stylesheets&&rs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Rl===0&&(Rl=62500*Sp());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Rl?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function os(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ss=null;function rs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ss=new Map,t.forEach(Vp,e),ss=null,os.call(e))}function Vp(e,t){if(!(t.state.loading&4)){var i=ss.get(e);if(i)var n=i.get(null);else{i=new Map,ss.set(e,i);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var s=a[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(i.set(s.dataset.precedence,s),n=s)}n&&i.set(null,n)}a=t.instance,s=a.getAttribute("data-precedence"),o=i.get(s)||n,o===n&&i.set(null,a),i.set(s,a),this.count++,n=os.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var qa={$$typeof:K,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function _p(e,t,i,n,a,o,s,c,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.hiddenUpdates=Cs(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function qh(e,t,i,n,a,o,s,c,g,A,I,L){return e=new _p(e,t,i,s,g,A,I,L,c),t=1,o===!0&&(t|=24),o=gt(3,null,null,t),e.current=o,o.stateNode=e,t=cr(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:i,cache:t},fr(o),e}function Oh(e){return e?(e=bn,e):bn}function jh(e,t,i,n,a,o){a=Oh(a),n.context===null?n.context=a:n.pendingContext=a,n=vi(t),n.payload={element:i},o=o===void 0?null:o,o!==null&&(n.callback=o),i=bi(e,n,t),i!==null&&(ut(i,e,t),ma(i,e,t))}function Uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Il(e,t){Uh(e,t),(e=e.alternate)&&Uh(e,t)}function Gh(e){if(e.tag===13||e.tag===31){var t=Gi(e,67108864);t!==null&&ut(t,e,67108864),Il(e,67108864)}}function Vh(e){if(e.tag===13||e.tag===31){var t=bt();t=ks(t);var i=Gi(e,t);i!==null&&ut(i,e,t),Il(e,t)}}var ls=!0;function Wp(e,t,i,n){var a=R.T;R.T=null;var o=q.p;try{q.p=2,Nl(e,t,i,n)}finally{q.p=o,R.T=a}}function Fp(e,t,i,n){var a=R.T;R.T=null;var o=q.p;try{q.p=8,Nl(e,t,i,n)}finally{q.p=o,R.T=a}}function Nl(e,t,i,n){if(ls){var a=zl(n);if(a===null)vl(e,t,n,cs,i),Wh(e,n);else if(Qp(a,e,t,i,n))n.stopPropagation();else if(Wh(e,n),t&4&&-1<Yp.indexOf(e)){for(;a!==null;){var o=ln(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Hi(o.pendingLanes);if(s!==0){var c=o;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var g=1<<31-ht(s);c.entanglements[1]|=g,s&=~g}Ot(o),(ye&6)===0&&(Wo=Be()+500,Na(0))}}break;case 31:case 13:c=Gi(o,2),c!==null&&ut(c,o,2),Yo(),Il(o,2)}if(o=zl(n),o===null&&vl(e,t,n,cs,i),o===a)break;a=o}a!==null&&n.stopPropagation()}else vl(e,t,n,null,i)}}function zl(e){return e=Bs(e),Ll(e)}var cs=null;function Ll(e){if(cs=null,e=rn(e),e!==null){var t=p(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=S(t),e!==null)return e;e=null}else if(i===31){if(e=w(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cs=e,null}function _h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(P()){case $:return 2;case me:return 8;case Ye:case As:return 32;case ec:return 268435456;default:return 32}default:return 32}}var Bl=!1,Ri=null,Ii=null,Ni=null,Oa=new Map,ja=new Map,zi=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wh(e,t){switch(e){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":Oa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(t.pointerId)}}function Ua(e,t,i,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=ln(t),t!==null&&Gh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Qp(e,t,i,n,a){switch(t){case"focusin":return Ri=Ua(Ri,e,t,i,n,a),!0;case"dragenter":return Ii=Ua(Ii,e,t,i,n,a),!0;case"mouseover":return Ni=Ua(Ni,e,t,i,n,a),!0;case"pointerover":var o=a.pointerId;return Oa.set(o,Ua(Oa.get(o)||null,e,t,i,n,a)),!0;case"gotpointercapture":return o=a.pointerId,ja.set(o,Ua(ja.get(o)||null,e,t,i,n,a)),!0}return!1}function Fh(e){var t=rn(e.target);if(t!==null){var i=p(t);if(i!==null){if(t=i.tag,t===13){if(t=S(i),t!==null){e.blockedOn=t,sc(e.priority,function(){Vh(i)});return}}else if(t===31){if(t=w(i),t!==null){e.blockedOn=t,sc(e.priority,function(){Vh(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=zl(e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);Ls=n,i.target.dispatchEvent(n),Ls=null}else return t=ln(i),t!==null&&Gh(t),e.blockedOn=i,!1;t.shift()}return!0}function Yh(e,t,i){us(e)&&i.delete(t)}function Kp(){Bl=!1,Ri!==null&&us(Ri)&&(Ri=null),Ii!==null&&us(Ii)&&(Ii=null),Ni!==null&&us(Ni)&&(Ni=null),Oa.forEach(Yh),ja.forEach(Yh)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Kp)))}var hs=null;function Qh(e){hs!==e&&(hs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hs===e&&(hs=null);for(var t=0;t<e.length;t+=3){var i=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(Ll(n||i)===null)continue;break}var o=ln(i);o!==null&&(e.splice(t,3),t-=3,zr(o,{pending:!0,data:a,method:i.method,action:n},n,a))}}))}function Vn(e){function t(g){return ds(g,e)}Ri!==null&&ds(Ri,e),Ii!==null&&ds(Ii,e),Ni!==null&&ds(Ni,e),Oa.forEach(t),ja.forEach(t);for(var i=0;i<zi.length;i++){var n=zi[i];n.blockedOn===e&&(n.blockedOn=null)}for(;0<zi.length&&(i=zi[0],i.blockedOn===null);)Fh(i),i.blockedOn===null&&zi.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var a=i[n],o=i[n+1],s=a[at]||null;if(typeof o=="function")s||Qh(i);else if(s){var c=null;if(o&&o.hasAttribute("formAction")){if(a=o,s=o[at]||null)c=s.formAction;else if(Ll(a)!==null)continue}else c=s.action;typeof c=="function"?i[n+1]=c:(i.splice(n,3),n-=3),Qh(i)}}}function Kh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Pl(e){this._internalRoot=e}fs.prototype.render=Pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var i=t.current,n=bt();jh(i,n,e,t,null,null)},fs.prototype.unmount=Pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jh(e.current,2,null,e,null,null),Yo(),t[sn]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<zi.length&&t!==0&&t<zi[i].priority;i++);zi.splice(i,0,e),i===0&&Fh(e)}};var Xh=d.version;if(Xh!=="19.2.0")throw Error(l(527,Xh,"19.2.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var Xp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{Xn=gs.inject(Xp),dt=gs}catch{}}return Va.createRoot=function(e,t){if(!f(e))throw Error(l(299));var i=!1,n="",a=nd,o=ad,s=od;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=qh(e,1,!1,null,null,i,n,null,a,o,s,Kh),e[sn]=t.current,yl(e),new Pl(t)},Va.hydrateRoot=function(e,t,i){if(!f(e))throw Error(l(299));var n=!1,a="",o=nd,s=ad,c=od,g=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onUncaughtError!==void 0&&(o=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(c=i.onRecoverableError),i.formState!==void 0&&(g=i.formState)),t=qh(e,1,!0,t,i??null,n,a,g,o,s,c,Kh),t.context=Oh(null),i=t.current,n=bt(),n=ks(n),a=vi(n),a.callback=null,bi(i,a,n),i=n,t.current.lanes=i,Jn(t,i),Ot(t),e[sn]=t.current,yl(e),new fs(t)},Va.version="19.2.0",Va}var rf;function sm(){if(rf)return Ol.exports;rf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Ol.exports=om(),Ol.exports}var rm=sm();var lf="popstate";function lm(r={}){function d(f,p){let{pathname:S="/",search:w="",hash:y=""}=tn(f.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Wl("",{pathname:S,search:w,hash:y},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function u(f,p){let S=f.document.querySelector("base"),w="";if(S&&S.getAttribute("href")){let y=f.location.href,m=y.indexOf("#");w=m===-1?y:y.slice(0,m)}return w+"#"+(typeof p=="string"?p:Wa(p))}function l(f,p){xt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return um(d,u,l,r)}function Ie(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function xt(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function cm(){return Math.random().toString(36).substring(2,10)}function cf(r,d){return{usr:r.state,key:r.key,idx:d}}function Wl(r,d,u=null,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?tn(d):d,state:u,key:d&&d.key||l||cm()}}function Wa({pathname:r="/",search:d="",hash:u=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function tn(r){let d={};if(r){let u=r.indexOf("#");u>=0&&(d.hash=r.substring(u),r=r.substring(0,u));let l=r.indexOf("?");l>=0&&(d.search=r.substring(l),r=r.substring(0,l)),r&&(d.pathname=r)}return d}function um(r,d,u,l={}){let{window:f=document.defaultView,v5Compat:p=!1}=l,S=f.history,w="POP",y=null,m=D();m==null&&(m=0,S.replaceState({...S.state,idx:m},""));function D(){return(S.state||{idx:null}).idx}function M(){w="POP";let W=D(),_=W==null?null:W-m;m=W,y&&y({action:w,location:Y.location,delta:_})}function B(W,_){w="PUSH";let H=Wl(Y.location,W,_);u&&u(H,W),m=D()+1;let K=cf(H,m),pe=Y.createHref(H);try{S.pushState(K,"",pe)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;f.location.assign(pe)}p&&y&&y({action:w,location:Y.location,delta:1})}function j(W,_){w="REPLACE";let H=Wl(Y.location,W,_);u&&u(H,W),m=D();let K=cf(H,m),pe=Y.createHref(H);S.replaceState(K,"",pe),p&&y&&y({action:w,location:Y.location,delta:0})}function G(W){return dm(W)}let Y={get action(){return w},get location(){return r(f,S)},listen(W){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(lf,M),y=W,()=>{f.removeEventListener(lf,M),y=null}},createHref(W){return d(f,W)},createURL:G,encodeLocation(W){let _=G(W);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:B,replace:j,go(W){return S.go(W)}};return Y}function dm(r,d=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(u,"No window.location.(origin|href) available to create URL");let l=typeof r=="string"?r:Wa(r);return l=l.replace(/ $/,"%20"),!d&&l.startsWith("//")&&(l=u+l),new URL(l,u)}function pf(r,d,u="/"){return hm(r,d,u,!1)}function hm(r,d,u,l){let f=typeof d=="string"?tn(d):d,p=li(f.pathname||"/",u);if(p==null)return null;let S=mf(r);fm(S);let w=null;for(let y=0;w==null&&y<S.length;++y){let m=Am(p);w=Sm(S[y],m,l)}return w}function mf(r,d=[],u=[],l="",f=!1){let p=(S,w,y=f,m)=>{let D={relativePath:m===void 0?S.path||"":m,caseSensitive:S.caseSensitive===!0,childrenIndex:w,route:S};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(l)&&y)return;Ie(D.relativePath.startsWith(l),`Absolute route path "${D.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(l.length)}let M=ri([l,D.relativePath]),B=u.concat(D);S.children&&S.children.length>0&&(Ie(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${M}".`),mf(S.children,d,B,M,y)),!(S.path==null&&!S.index)&&d.push({path:M,score:xm(M,S.index),routesMeta:B})};return r.forEach((S,w)=>{if(S.path===""||!S.path?.includes("?"))p(S,w);else for(let y of yf(S.path))p(S,w,!0,y)}),d}function yf(r){let d=r.split("/");if(d.length===0)return[];let[u,...l]=d,f=u.endsWith("?"),p=u.replace(/\?$/,"");if(l.length===0)return f?[p,""]:[p];let S=yf(l.join("/")),w=[];return w.push(...S.map(y=>y===""?p:[p,y].join("/"))),f&&w.push(...S),w.map(y=>r.startsWith("/")&&y===""?"/":y)}function fm(r){r.sort((d,u)=>d.score!==u.score?u.score-d.score:wm(d.routesMeta.map(l=>l.childrenIndex),u.routesMeta.map(l=>l.childrenIndex)))}var gm=/^:[\w-]+$/,pm=3,mm=2,ym=1,vm=10,bm=-2,uf=r=>r==="*";function xm(r,d){let u=r.split("/"),l=u.length;return u.some(uf)&&(l+=bm),d&&(l+=mm),u.filter(f=>!uf(f)).reduce((f,p)=>f+(gm.test(p)?pm:p===""?ym:vm),l)}function wm(r,d){return r.length===d.length&&r.slice(0,-1).every((l,f)=>l===d[f])?r[r.length-1]-d[d.length-1]:0}function Sm(r,d,u=!1){let{routesMeta:l}=r,f={},p="/",S=[];for(let w=0;w<l.length;++w){let y=l[w],m=w===l.length-1,D=p==="/"?d:d.slice(p.length)||"/",M=bs({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},D),B=y.route;if(!M&&m&&u&&!l[l.length-1].route.index&&(M=bs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},D)),!M)return null;Object.assign(f,M.params),S.push({params:f,pathname:ri([p,M.pathname]),pathnameBase:Dm(ri([p,M.pathnameBase])),route:B}),M.pathnameBase!=="/"&&(p=ri([p,M.pathnameBase]))}return S}function bs(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,l]=Tm(r.path,r.caseSensitive,r.end),f=d.match(u);if(!f)return null;let p=f[0],S=p.replace(/(.)\/+$/,"$1"),w=f.slice(1);return{params:l.reduce((m,{paramName:D,isOptional:M},B)=>{if(D==="*"){let G=w[B]||"";S=p.slice(0,p.length-G.length).replace(/(.)\/+$/,"$1")}const j=w[B];return M&&!j?m[D]=void 0:m[D]=(j||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:S,pattern:r}}function Tm(r,d=!1,u=!0){xt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,w,y)=>(l.push({paramName:w,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(l.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,d?void 0:"i"),l]}function Am(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return xt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function li(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let u=d.endsWith("/")?d.length-1:d.length,l=r.charAt(u);return l&&l!=="/"?null:r.slice(u)||"/"}var Cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,km=r=>Cm.test(r);function Mm(r,d="/"){let{pathname:u,search:l="",hash:f=""}=typeof r=="string"?tn(r):r,p;if(u)if(km(u))p=u;else{if(u.includes("//")){let S=u;u=u.replace(/\/\/+/g,"/"),xt(!1,`Pathnames cannot have embedded double slashes - normalizing ${S} -> ${u}`)}u.startsWith("/")?p=df(u.substring(1),"/"):p=df(u,d)}else p=d;return{pathname:p,search:Rm(l),hash:Im(f)}}function df(r,d){let u=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Vl(r,d,u,l){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Em(r){return r.filter((d,u)=>u===0||d.route.path&&d.route.path.length>0)}function vf(r){let d=Em(r);return d.map((u,l)=>l===d.length-1?u.pathname:u.pathnameBase)}function bf(r,d,u,l=!1){let f;typeof r=="string"?f=tn(r):(f={...r},Ie(!f.pathname||!f.pathname.includes("?"),Vl("?","pathname","search",f)),Ie(!f.pathname||!f.pathname.includes("#"),Vl("#","pathname","hash",f)),Ie(!f.search||!f.search.includes("#"),Vl("#","search","hash",f)));let p=r===""||f.pathname==="",S=p?"/":f.pathname,w;if(S==null)w=u;else{let M=d.length-1;if(!l&&S.startsWith("..")){let B=S.split("/");for(;B[0]==="..";)B.shift(),M-=1;f.pathname=B.join("/")}w=M>=0?d[M]:"/"}let y=Mm(f,w),m=S&&S!=="/"&&S.endsWith("/"),D=(p||S===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(m||D)&&(y.pathname+="/"),y}var ri=r=>r.join("/").replace(/\/\/+/g,"/"),Dm=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Rm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Im=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Nm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xf=["POST","PUT","PATCH","DELETE"];new Set(xf);var zm=["GET",...xf];new Set(zm);var Wn=k.createContext(null);Wn.displayName="DataRouter";var xs=k.createContext(null);xs.displayName="DataRouterState";k.createContext(!1);var wf=k.createContext({isTransitioning:!1});wf.displayName="ViewTransition";var Lm=k.createContext(new Map);Lm.displayName="Fetchers";var Bm=k.createContext(null);Bm.displayName="Await";var jt=k.createContext(null);jt.displayName="Navigation";var Fa=k.createContext(null);Fa.displayName="Location";var Ut=k.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var Kl=k.createContext(null);Kl.displayName="RouteError";function Pm(r,{relative:d}={}){Ie(Ya(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:l}=k.useContext(jt),{hash:f,pathname:p,search:S}=Qa(r,{relative:d}),w=p;return u!=="/"&&(w=p==="/"?u:ri([u,p])),l.createHref({pathname:w,search:S,hash:f})}function Ya(){return k.useContext(Fa)!=null}function ci(){return Ie(Ya(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Fa).location}var Sf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tf(r){k.useContext(jt).static||k.useLayoutEffect(r)}function ws(){let{isDataRoute:r}=k.useContext(Ut);return r?Xm():Hm()}function Hm(){Ie(Ya(),"useNavigate() may be used only in the context of a <Router> component.");let r=k.useContext(Wn),{basename:d,navigator:u}=k.useContext(jt),{matches:l}=k.useContext(Ut),{pathname:f}=ci(),p=JSON.stringify(vf(l)),S=k.useRef(!1);return Tf(()=>{S.current=!0}),k.useCallback((y,m={})=>{if(xt(S.current,Sf),!S.current)return;if(typeof y=="number"){u.go(y);return}let D=bf(y,JSON.parse(p),f,m.relative==="path");r==null&&d!=="/"&&(D.pathname=D.pathname==="/"?d:ri([d,D.pathname])),(m.replace?u.replace:u.push)(D,m.state,m)},[d,u,p,f,r])}k.createContext(null);function qm(){let{matches:r}=k.useContext(Ut),d=r[r.length-1];return d?d.params:{}}function Qa(r,{relative:d}={}){let{matches:u}=k.useContext(Ut),{pathname:l}=ci(),f=JSON.stringify(vf(u));return k.useMemo(()=>bf(r,JSON.parse(f),l,d==="path"),[r,f,l,d])}function Om(r,d){return Af(r,d)}function Af(r,d,u,l,f){Ie(Ya(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=k.useContext(jt),{matches:S}=k.useContext(Ut),w=S[S.length-1],y=w?w.params:{},m=w?w.pathname:"/",D=w?w.pathnameBase:"/",M=w&&w.route;{let H=M&&M.path||"";Cf(m,!M||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=ci(),j;if(d){let H=typeof d=="string"?tn(d):d;Ie(D==="/"||H.pathname?.startsWith(D),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${H.pathname}" was given in the \`location\` prop.`),j=H}else j=B;let G=j.pathname||"/",Y=G;if(D!=="/"){let H=D.replace(/^\//,"").split("/");Y="/"+G.replace(/^\//,"").split("/").slice(H.length).join("/")}let W=pf(r,{pathname:Y});xt(M||W!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),xt(W==null||W[W.length-1].route.element!==void 0||W[W.length-1].route.Component!==void 0||W[W.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=_m(W&&W.map(H=>Object.assign({},H,{params:Object.assign({},y,H.params),pathname:ri([D,p.encodeLocation?p.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?D:ri([D,p.encodeLocation?p.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),S,u,l,f);return d&&_?k.createElement(Fa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},_):_}function jm(){let r=Km(),d=Nm(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:l},p={padding:"2px 4px",backgroundColor:l},S=null;return console.error("Error handled by React Router default ErrorBoundary:",r),S=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:p},"ErrorBoundary")," or"," ",k.createElement("code",{style:p},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},d),u?k.createElement("pre",{style:f},u):null,S)}var Um=k.createElement(jm,null),Gm=class extends k.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.onError?this.props.onError(r,d):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?k.createElement(Ut.Provider,{value:this.props.routeContext},k.createElement(Kl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Vm({routeContext:r,match:d,children:u}){let l=k.useContext(Wn);return l&&l.static&&l.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=d.route.id),k.createElement(Ut.Provider,{value:r},u)}function _m(r,d=[],u=null,l=null,f=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let p=r,S=u?.errors;if(S!=null){let D=p.findIndex(M=>M.route.id&&S?.[M.route.id]!==void 0);Ie(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`),p=p.slice(0,Math.min(p.length,D+1))}let w=!1,y=-1;if(u)for(let D=0;D<p.length;D++){let M=p[D];if((M.route.HydrateFallback||M.route.hydrateFallbackElement)&&(y=D),M.route.id){let{loaderData:B,errors:j}=u,G=M.route.loader&&!B.hasOwnProperty(M.route.id)&&(!j||j[M.route.id]===void 0);if(M.route.lazy||G){w=!0,y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}let m=u&&l?(D,M)=>{l(D,{location:u.location,params:u.matches?.[0]?.params??{},errorInfo:M})}:void 0;return p.reduceRight((D,M,B)=>{let j,G=!1,Y=null,W=null;u&&(j=S&&M.route.id?S[M.route.id]:void 0,Y=M.route.errorElement||Um,w&&(y<0&&B===0?(Cf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,W=null):y===B&&(G=!0,W=M.route.hydrateFallbackElement||null)));let _=d.concat(p.slice(0,B+1)),H=()=>{let K;return j?K=Y:G?K=W:M.route.Component?K=k.createElement(M.route.Component,null):M.route.element?K=M.route.element:K=D,k.createElement(Vm,{match:M,routeContext:{outlet:D,matches:_,isDataRoute:u!=null},children:K})};return u&&(M.route.ErrorBoundary||M.route.errorElement||B===0)?k.createElement(Gm,{location:u.location,revalidation:u.revalidation,component:Y,error:j,children:H(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:m}):H()},null)}function Xl(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wm(r){let d=k.useContext(Wn);return Ie(d,Xl(r)),d}function Fm(r){let d=k.useContext(xs);return Ie(d,Xl(r)),d}function Ym(r){let d=k.useContext(Ut);return Ie(d,Xl(r)),d}function Zl(r){let d=Ym(r),u=d.matches[d.matches.length-1];return Ie(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function Qm(){return Zl("useRouteId")}function Km(){let r=k.useContext(Kl),d=Fm("useRouteError"),u=Zl("useRouteError");return r!==void 0?r:d.errors?.[u]}function Xm(){let{router:r}=Wm("useNavigate"),d=Zl("useNavigate"),u=k.useRef(!1);return Tf(()=>{u.current=!0}),k.useCallback(async(f,p={})=>{xt(u.current,Sf),u.current&&(typeof f=="number"?r.navigate(f):await r.navigate(f,{fromRouteId:d,...p}))},[r,d])}var hf={};function Cf(r,d,u){!d&&!hf[r]&&(hf[r]=!0,xt(!1,u))}k.memo(Zm);function Zm({routes:r,future:d,state:u,unstable_onError:l}){return Af(r,void 0,u,l,d)}function _n(r){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jm({basename:r="/",children:d=null,location:u,navigationType:l="POP",navigator:f,static:p=!1}){Ie(!Ya(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=r.replace(/^\/*/,"/"),w=k.useMemo(()=>({basename:S,navigator:f,static:p,future:{}}),[S,f,p]);typeof u=="string"&&(u=tn(u));let{pathname:y="/",search:m="",hash:D="",state:M=null,key:B="default"}=u,j=k.useMemo(()=>{let G=li(y,S);return G==null?null:{location:{pathname:G,search:m,hash:D,state:M,key:B},navigationType:l}},[S,y,m,D,M,B,l]);return xt(j!=null,`<Router basename="${S}"> is not able to match the URL "${y}${m}${D}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:k.createElement(jt.Provider,{value:w},k.createElement(Fa.Provider,{children:d,value:j}))}function $m({children:r,location:d}){return Om(Fl(r),d)}function Fl(r,d=[]){let u=[];return k.Children.forEach(r,(l,f)=>{if(!k.isValidElement(l))return;let p=[...d,f];if(l.type===k.Fragment){u.push.apply(u,Fl(l.props.children,p));return}Ie(l.type===_n,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!l.props.index||!l.props.children,"An index route cannot have child routes.");let S={id:l.props.id||p.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(S.children=Fl(l.props.children,p)),u.push(S)}),u}var ys="get",vs="application/x-www-form-urlencoded";function Ss(r){return r!=null&&typeof r.tagName=="string"}function e0(r){return Ss(r)&&r.tagName.toLowerCase()==="button"}function t0(r){return Ss(r)&&r.tagName.toLowerCase()==="form"}function i0(r){return Ss(r)&&r.tagName.toLowerCase()==="input"}function n0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function a0(r,d){return r.button===0&&(!d||d==="_self")&&!n0(r)}function Yl(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((d,u)=>{let l=r[u];return d.concat(Array.isArray(l)?l.map(f=>[u,f]):[[u,l]])},[]))}function o0(r,d){let u=Yl(r);return d&&d.forEach((l,f)=>{u.has(f)||d.getAll(f).forEach(p=>{u.append(f,p)})}),u}var ps=null;function s0(){if(ps===null)try{new FormData(document.createElement("form"),0),ps=!1}catch{ps=!0}return ps}var r0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _l(r){return r!=null&&!r0.has(r)?(xt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vs}"`),null):r}function l0(r,d){let u,l,f,p,S;if(t0(r)){let w=r.getAttribute("action");l=w?li(w,d):null,u=r.getAttribute("method")||ys,f=_l(r.getAttribute("enctype"))||vs,p=new FormData(r)}else if(e0(r)||i0(r)&&(r.type==="submit"||r.type==="image")){let w=r.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||w.getAttribute("action");if(l=y?li(y,d):null,u=r.getAttribute("formmethod")||w.getAttribute("method")||ys,f=_l(r.getAttribute("formenctype"))||_l(w.getAttribute("enctype"))||vs,p=new FormData(w,r),!s0()){let{name:m,type:D,value:M}=r;if(D==="image"){let B=m?`${m}.`:"";p.append(`${B}x`,"0"),p.append(`${B}y`,"0")}else m&&p.append(m,M)}}else{if(Ss(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ys,l=null,f=vs,S=r}return p&&f==="text/plain"&&(S=p,p=void 0),{action:l,method:u.toLowerCase(),encType:f,formData:p,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jl(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function c0(r,d,u){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return l.pathname==="/"?l.pathname=`_root.${u}`:d&&li(l.pathname,d)==="/"?l.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${u}`,l}async function u0(r,d){if(r.id in d)return d[r.id];try{let u=await import(r.module);return d[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function h0(r,d,u){let l=await Promise.all(r.map(async f=>{let p=d.routes[f.route.id];if(p){let S=await u0(p,u);return S.links?S.links():[]}return[]}));return m0(l.flat(1).filter(d0).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function ff(r,d,u,l,f,p){let S=(y,m)=>u[m]?y.route.id!==u[m].route.id:!0,w=(y,m)=>u[m].pathname!==y.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==y.params["*"];return p==="assets"?d.filter((y,m)=>S(y,m)||w(y,m)):p==="data"?d.filter((y,m)=>{let D=l.routes[y.route.id];if(!D||!D.hasLoader)return!1;if(S(y,m)||w(y,m))return!0;if(y.route.shouldRevalidate){let M=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function f0(r,d,{includeHydrateFallback:u}={}){return g0(r.map(l=>{let f=d.routes[l.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function g0(r){return[...new Set(r)]}function p0(r){let d={},u=Object.keys(r).sort();for(let l of u)d[l]=r[l];return d}function m0(r,d){let u=new Set;return new Set(d),r.reduce((l,f)=>{let p=JSON.stringify(p0(f));return u.has(p)||(u.add(p),l.push({key:p,link:f})),l},[])}function kf(){let r=k.useContext(Wn);return Jl(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function y0(){let r=k.useContext(xs);return Jl(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $l=k.createContext(void 0);$l.displayName="FrameworkContext";function Mf(){let r=k.useContext($l);return Jl(r,"You must render this element inside a <HydratedRouter> element"),r}function v0(r,d){let u=k.useContext($l),[l,f]=k.useState(!1),[p,S]=k.useState(!1),{onFocus:w,onBlur:y,onMouseEnter:m,onMouseLeave:D,onTouchStart:M}=d,B=k.useRef(null);k.useEffect(()=>{if(r==="render"&&S(!0),r==="viewport"){let Y=_=>{_.forEach(H=>{S(H.isIntersecting)})},W=new IntersectionObserver(Y,{threshold:.5});return B.current&&W.observe(B.current),()=>{W.disconnect()}}},[r]),k.useEffect(()=>{if(l){let Y=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(Y)}}},[l]);let j=()=>{f(!0)},G=()=>{f(!1),S(!1)};return u?r!=="intent"?[p,B,{}]:[p,B,{onFocus:_a(w,j),onBlur:_a(y,G),onMouseEnter:_a(m,j),onMouseLeave:_a(D,G),onTouchStart:_a(M,j)}]:[!1,B,{}]}function _a(r,d){return u=>{r&&r(u),u.defaultPrevented||d(u)}}function b0({page:r,...d}){let{router:u}=kf(),l=k.useMemo(()=>pf(u.routes,r,u.basename),[u.routes,r,u.basename]);return l?k.createElement(w0,{page:r,matches:l,...d}):null}function x0(r){let{manifest:d,routeModules:u}=Mf(),[l,f]=k.useState([]);return k.useEffect(()=>{let p=!1;return h0(r,d,u).then(S=>{p||f(S)}),()=>{p=!0}},[r,d,u]),l}function w0({page:r,matches:d,...u}){let l=ci(),{manifest:f,routeModules:p}=Mf(),{basename:S}=kf(),{loaderData:w,matches:y}=y0(),m=k.useMemo(()=>ff(r,d,y,f,l,"data"),[r,d,y,f,l]),D=k.useMemo(()=>ff(r,d,y,f,l,"assets"),[r,d,y,f,l]),M=k.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let G=new Set,Y=!1;if(d.forEach(_=>{let H=f.routes[_.route.id];!H||!H.hasLoader||(!m.some(K=>K.route.id===_.route.id)&&_.route.id in w&&p[_.route.id]?.shouldRevalidate||H.hasClientLoader?Y=!0:G.add(_.route.id))}),G.size===0)return[];let W=c0(r,S,"data");return Y&&G.size>0&&W.searchParams.set("_routes",d.filter(_=>G.has(_.route.id)).map(_=>_.route.id).join(",")),[W.pathname+W.search]},[S,w,l,f,m,d,r,p]),B=k.useMemo(()=>f0(D,f),[D,f]),j=x0(D);return k.createElement(k.Fragment,null,M.map(G=>k.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...u})),B.map(G=>k.createElement("link",{key:G,rel:"modulepreload",href:G,...u})),j.map(({key:G,link:Y})=>k.createElement("link",{key:G,nonce:u.nonce,...Y})))}function S0(...r){return d=>{r.forEach(u=>{typeof u=="function"?u(d):u!=null&&(u.current=d)})}}var Ef=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ef&&(window.__reactRouterVersion="7.9.6")}catch{}function T0({basename:r,children:d,window:u}){let l=k.useRef();l.current==null&&(l.current=lm({window:u,v5Compat:!0}));let f=l.current,[p,S]=k.useState({action:f.action,location:f.location}),w=k.useCallback(y=>{k.startTransition(()=>S(y))},[S]);return k.useLayoutEffect(()=>f.listen(w),[f,w]),k.createElement(Jm,{basename:r,children:d,location:p.location,navigationType:p.action,navigator:f})}var Df=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rf=k.forwardRef(function({onClick:d,discover:u="render",prefetch:l="none",relative:f,reloadDocument:p,replace:S,state:w,target:y,to:m,preventScrollReset:D,viewTransition:M,...B},j){let{basename:G}=k.useContext(jt),Y=typeof m=="string"&&Df.test(m),W,_=!1;if(typeof m=="string"&&Y&&(W=m,Ef))try{let xe=new URL(window.location.href),$e=m.startsWith("//")?new URL(xe.protocol+m):new URL(m),tt=li($e.pathname,G);$e.origin===xe.origin&&tt!=null?m=tt+$e.search+$e.hash:_=!0}catch{xt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=Pm(m,{relative:f}),[K,pe,ke]=v0(l,B),Ce=M0(m,{replace:S,state:w,target:y,preventScrollReset:D,relative:f,viewTransition:M});function J(xe){d&&d(xe),xe.defaultPrevented||Ce(xe)}let Le=k.createElement("a",{...B,...ke,href:W||H,onClick:_||p?d:J,ref:S0(j,pe),target:y,"data-discover":!Y&&u==="render"?"true":void 0});return K&&!Y?k.createElement(k.Fragment,null,Le,k.createElement(b0,{page:H})):Le});Rf.displayName="Link";var A0=k.forwardRef(function({"aria-current":d="page",caseSensitive:u=!1,className:l="",end:f=!1,style:p,to:S,viewTransition:w,children:y,...m},D){let M=Qa(S,{relative:m.relative}),B=ci(),j=k.useContext(xs),{navigator:G,basename:Y}=k.useContext(jt),W=j!=null&&z0(M)&&w===!0,_=G.encodeLocation?G.encodeLocation(M).pathname:M.pathname,H=B.pathname,K=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;u||(H=H.toLowerCase(),K=K?K.toLowerCase():null,_=_.toLowerCase()),K&&Y&&(K=li(K,Y)||K);const pe=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let ke=H===_||!f&&H.startsWith(_)&&H.charAt(pe)==="/",Ce=K!=null&&(K===_||!f&&K.startsWith(_)&&K.charAt(_.length)==="/"),J={isActive:ke,isPending:Ce,isTransitioning:W},Le=ke?d:void 0,xe;typeof l=="function"?xe=l(J):xe=[l,ke?"active":null,Ce?"pending":null,W?"transitioning":null].filter(Boolean).join(" ");let $e=typeof p=="function"?p(J):p;return k.createElement(Rf,{...m,"aria-current":Le,className:xe,ref:D,style:$e,to:S,viewTransition:w},typeof y=="function"?y(J):y)});A0.displayName="NavLink";var C0=k.forwardRef(({discover:r="render",fetcherKey:d,navigate:u,reloadDocument:l,replace:f,state:p,method:S=ys,action:w,onSubmit:y,relative:m,preventScrollReset:D,viewTransition:M,...B},j)=>{let G=I0(),Y=N0(w,{relative:m}),W=S.toLowerCase()==="get"?"get":"post",_=typeof w=="string"&&Df.test(w),H=K=>{if(y&&y(K),K.defaultPrevented)return;K.preventDefault();let pe=K.nativeEvent.submitter,ke=pe?.getAttribute("formmethod")||S;G(pe||K.currentTarget,{fetcherKey:d,method:ke,navigate:u,replace:f,state:p,relative:m,preventScrollReset:D,viewTransition:M})};return k.createElement("form",{ref:j,method:W,action:Y,onSubmit:l?y:H,...B,"data-discover":!_&&r==="render"?"true":void 0})});C0.displayName="Form";function k0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function If(r){let d=k.useContext(Wn);return Ie(d,k0(r)),d}function M0(r,{target:d,replace:u,state:l,preventScrollReset:f,relative:p,viewTransition:S}={}){let w=ws(),y=ci(),m=Qa(r,{relative:p});return k.useCallback(D=>{if(a0(D,d)){D.preventDefault();let M=u!==void 0?u:Wa(y)===Wa(m);w(r,{replace:M,state:l,preventScrollReset:f,relative:p,viewTransition:S})}},[y,w,m,u,l,d,r,f,p,S])}function E0(r){xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let d=k.useRef(Yl(r)),u=k.useRef(!1),l=ci(),f=k.useMemo(()=>o0(l.search,u.current?null:d.current),[l.search]),p=ws(),S=k.useCallback((w,y)=>{const m=Yl(typeof w=="function"?w(new URLSearchParams(f)):w);u.current=!0,p("?"+m,y)},[p,f]);return[f,S]}var D0=0,R0=()=>`__${String(++D0)}__`;function I0(){let{router:r}=If("useSubmit"),{basename:d}=k.useContext(jt),u=Qm();return k.useCallback(async(l,f={})=>{let{action:p,method:S,encType:w,formData:y,body:m}=l0(l,d);if(f.navigate===!1){let D=f.fetcherKey||R0();await r.fetch(D,u,f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:m,formMethod:f.method||S,formEncType:f.encType||w,flushSync:f.flushSync})}else await r.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:m,formMethod:f.method||S,formEncType:f.encType||w,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,d,u])}function N0(r,{relative:d}={}){let{basename:u}=k.useContext(jt),l=k.useContext(Ut);Ie(l,"useFormAction must be used inside a RouteContext");let[f]=l.matches.slice(-1),p={...Qa(r||".",{relative:d})},S=ci();if(r==null){p.search=S.search;let w=new URLSearchParams(p.search),y=w.getAll("index");if(y.some(D=>D==="")){w.delete("index"),y.filter(M=>M).forEach(M=>w.append("index",M));let D=w.toString();p.search=D?`?${D}`:""}}return(!r||r===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:ri([u,p.pathname])),Wa(p)}function z0(r,{relative:d}={}){let u=k.useContext(wf);Ie(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=If("useViewTransitionState"),f=Qa(r,{relative:d});if(!u.isTransitioning)return!1;let p=li(u.currentLocation.pathname,l)||u.currentLocation.pathname,S=li(u.nextLocation.pathname,l)||u.nextLocation.pathname;return bs(f.pathname,S)!=null||bs(f.pathname,p)!=null}const L0=[{version:"1.3.0",date:"2025-12-02",title:"Electronic Sensors Content",changes:["Added Full Model Paper 1, 2 & 3 for Electronic Sensors.","Included 11+ High-Quality SVG Diagrams for Exam Answers.","Enhanced Study Mode with Textbook-style notes & SVGs.","Added Interactive Mind Maps for Electronic Sensors.","Expanded Quiz with 25+ new questions.","Added 50+ Flashcards for quick revision."]},{version:"1.2.0",date:"2025-11-30",title:"Update History & PWA Enhancements",changes:["Added Update History feature to track app changes.","Implemented detailed update prompts showing exactly what changed.",'Added "About" page with developer info.','Renamed app to "B.Tech Exam Prep" to support multiple subjects.']},{version:"1.1.0",date:"2025-11-30",title:"Mind Maps & Offline Support",changes:["Added interactive Mind Maps for all 5 units.","Enabled Offline Support (PWA) - App works without internet!","Added Zoom and Pan controls to Mind Maps.",'Added "Developer Signature" footer.']},{version:"1.0.0",date:"2025-11-29",title:"Initial Release",changes:["Launched Mobile Computing Prep with Units I-V.","Added Model Papers (1-4) with detailed answers.","Implemented Quiz Mode with score tracking.","Added Flashcards and Exam Tips."]}],B0="modulepreload",P0=function(r){return"/mobile-computing-prep/"+r},gf={},H0=function(d,u,l){let f=Promise.resolve();if(u&&u.length>0){let m=function(D){return Promise.all(D.map(M=>Promise.resolve(M).then(B=>({status:"fulfilled",value:B}),B=>({status:"rejected",reason:B}))))};var S=m;document.getElementsByTagName("link");const w=document.querySelector("meta[property=csp-nonce]"),y=w?.nonce||w?.getAttribute("nonce");f=m(u.map(D=>{if(D=P0(D),D in gf)return;gf[D]=!0;const M=D.endsWith(".css"),B=M?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${B}`))return;const j=document.createElement("link");if(j.rel=M?"stylesheet":B0,M||(j.as="script"),j.crossOrigin="",j.href=D,y&&j.setAttribute("nonce",y),document.head.appendChild(j),M)return new Promise((G,Y)=>{j.addEventListener("load",G),j.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${D}`)))})}))}function p(w){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=w,window.dispatchEvent(y),!y.defaultPrevented)throw w}return f.then(w=>{for(const y of w||[])y.status==="rejected"&&p(y.reason);return d().catch(p)})};function q0(r={}){const{immediate:d=!1,onNeedRefresh:u,onOfflineReady:l,onRegistered:f,onRegisteredSW:p,onRegisterError:S}=r;let w,y,m;const D=async(B=!0)=>{await y,m?.()};async function M(){if("serviceWorker"in navigator){if(w=await H0(async()=>{const{Workbox:B}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:B}},[]).then(({Workbox:B})=>new B("/mobile-computing-prep/sw.js",{scope:"/mobile-computing-prep/",type:"classic"})).catch(B=>{S?.(B)}),!w)return;m=()=>{w?.messageSkipWaiting()};{let B=!1;const j=()=>{B=!0,w?.addEventListener("controlling",G=>{G.isUpdate&&window.location.reload()}),u?.()};w.addEventListener("installed",G=>{typeof G.isUpdate>"u"?typeof G.isExternal<"u"&&G.isExternal?j():!B&&l?.():G.isUpdate||l?.()}),w.addEventListener("waiting",j)}w.register({immediate:d}).then(B=>{p?p("/mobile-computing-prep/sw.js",B):f?.(B)}).catch(B=>{S?.(B)})}}return y=M(),D}function O0(r={}){const{immediate:d=!0,onNeedRefresh:u,onOfflineReady:l,onRegistered:f,onRegisteredSW:p,onRegisterError:S}=r,[w,y]=k.useState(!1),[m,D]=k.useState(!1),[M]=k.useState(()=>q0({immediate:d,onOfflineReady(){D(!0),l?.()},onNeedRefresh(){y(!0),u?.()},onRegistered:f,onRegisteredSW:p,onRegisterError:S}));return{needRefresh:[w,y],offlineReady:[m,D],updateServiceWorker:M}}function Nf(){const{offlineReady:[r,d],needRefresh:[u,l],updateServiceWorker:f}=O0({onRegistered(y){console.log("SW Registered: "+y)},onRegisterError(y){console.log("SW registration error",y)}}),[p,S]=k.useState("");k.useEffect(()=>{u&&fetch("./version.json?t="+Date.now()).then(y=>y.json()).then(y=>S(y.message)).catch(y=>console.error("Failed to fetch update info",y))},[u]);const w=()=>{d(!1),l(!1)};return h.jsx("div",{className:"ReloadPrompt-container",children:(r||u)&&h.jsxs("div",{className:"ReloadPrompt-toast",children:[h.jsx("div",{className:"ReloadPrompt-message",children:r?h.jsx("span",{children:"App ready to work offline"}):h.jsxs("div",{children:[h.jsx("span",{style:{display:"block",fontWeight:"bold",marginBottom:"0.2rem"},children:"New Update Available!"}),h.jsx("span",{children:p||"New content available, click on reload button to update."})]})}),u&&h.jsx("button",{className:"ReloadPrompt-toast-button",onClick:()=>f(!0),children:"Reload"}),h.jsx("button",{className:"ReloadPrompt-toast-button",onClick:w,children:"Close"})]})})}function j0(){const r=ws(),[d,u]=k.useState(!1),[l,f]=k.useState(!1),p=S=>{r(`/subject/${S}`)};return h.jsxs("div",{className:"container",style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[h.jsxs("div",{style:{position:"absolute",top:"1rem",right:"1rem",display:"flex",gap:"0.5rem"},children:[h.jsx("button",{className:"btn btn-outline",style:{borderRadius:"50%",width:"40px",height:"40px",padding:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},onClick:()=>f(!0),title:"Update History",children:"🕒"}),h.jsx("button",{className:"btn btn-outline",style:{borderRadius:"50%",width:"40px",height:"40px",padding:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},onClick:()=>u(!0),title:"About App",children:"ℹ️"})]}),h.jsxs("div",{style:{textAlign:"center",marginTop:"4rem",flex:1},children:[h.jsx("h1",{children:"🎓 B.Tech Exam Prep"}),h.jsx("p",{style:{color:"#666",marginBottom:"2rem"},children:"Select a subject to start mastering concepts"}),h.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[h.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>p("mobile"),children:[h.jsx("h2",{children:"📱 Mobile Computing"}),h.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),h.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),h.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>p("sensors"),children:[h.jsx("h2",{children:"🌡️ Electronic Sensors"}),h.jsx("p",{children:"Unit I - V, Open Elective-II"}),h.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),h.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>p("pple"),children:[h.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),h.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),h.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]}),h.jsxs("footer",{style:{textAlign:"center",padding:"2rem",color:"#64748b",fontSize:"0.9rem"},children:[h.jsxs("p",{children:["Designed & Developed by ",h.jsx("strong",{children:"BTK Creations"})," 🚀"]}),h.jsxs("p",{style:{fontSize:"0.8rem",opacity:.7},children:["© ",new Date().getFullYear()," B.Tech Exam Prep"]})]}),l&&h.jsx("div",{className:"modal-overlay",children:h.jsxs("div",{className:"modal-content",style:{maxWidth:"600px",maxHeight:"80vh",display:"flex",flexDirection:"column"},children:[h.jsx("button",{className:"close-btn",onClick:()=>f(!1),children:"×"}),h.jsx("h2",{style:{color:"var(--primary-color)",marginBottom:"1rem",textAlign:"center"},children:"📅 Update History"}),h.jsx("div",{style:{overflowY:"auto",paddingRight:"0.5rem"},children:L0.map((S,w)=>h.jsxs("div",{style:{marginBottom:"1.5rem",borderLeft:"3px solid var(--primary-color)",paddingLeft:"1rem"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"0.5rem"},children:[h.jsx("h3",{style:{fontSize:"1.1rem",margin:0},children:S.title}),h.jsxs("span",{style:{fontSize:"0.8rem",color:"#64748b",background:"#f1f5f9",padding:"2px 8px",borderRadius:"12px"},children:["v",S.version]})]}),h.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",marginBottom:"0.5rem"},children:S.date}),h.jsx("ul",{style:{paddingLeft:"1.2rem",margin:0},children:S.changes.map((y,m)=>h.jsx("li",{style:{fontSize:"0.95rem",color:"#334155",marginBottom:"0.25rem"},children:y},m))})]},w))}),h.jsx("button",{className:"btn btn-primary",onClick:()=>f(!1),style:{alignSelf:"center",marginTop:"1rem"},children:"Close"})]})}),d&&h.jsx("div",{className:"modal-overlay",children:h.jsxs("div",{className:"modal-content",style:{maxWidth:"500px",textAlign:"center"},children:[h.jsx("button",{className:"close-btn",onClick:()=>u(!1),children:"×"}),h.jsx("h2",{style:{color:"var(--primary-color)",marginBottom:"1rem"},children:"About B.Tech Exam Prep"}),h.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:"This application is designed to help B.Tech students prepare for their exams effectively. It features comprehensive notes, interactive quizzes, model papers, and visual mind maps."}),h.jsxs("div",{style:{background:"#f8fafc",padding:"1.5rem",borderRadius:"12px",marginBottom:"1.5rem"},children:[h.jsx("h3",{style:{fontSize:"1.1rem",marginBottom:"0.5rem"},children:"👨‍💻 Developer"}),h.jsx("p",{style:{fontWeight:"bold",fontSize:"1.2rem",color:"var(--primary-color)"},children:"BTK Creations"}),h.jsx("p",{style:{fontSize:"0.9rem",color:"#64748b"},children:"Passionate about Education & Technology"})]}),h.jsx("button",{className:"btn btn-primary",onClick:()=>u(!1),children:"Close"})]})}),h.jsx(Nf,{})]})}const U0=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
          <div class="study-guide-box">
            <h4>1. Deep Dive: What is Mobile Computing?</h4>
            <div class="definition-box">
              <strong>Mobile Computing</strong> is not just about using a laptop in a cafe. It is a paradigm shift where the <em>computer</em> is no longer the center of attention; the <em>user</em> is. It involves the seamless integration of:
              <ul>
                <li><strong>Mobile Communication:</strong> The infrastructure (towers, satellites).</li>
                <li><strong>Mobile Hardware:</strong> The device (phone, sensor).</li>
                <li><strong>Mobile Software:</strong> The OS and Apps (Android, iOS).</li>
              </ul>
            </div>
            
            <h4>2. The Paradigm Shift: Fixed vs. Mobile</h4>
            <p>In the traditional <strong>Fixed Computing</strong> model, you go to the computer. The device is tied to a location (desk) and a network (cable).</p>
            <p>In the <strong>Mobile Computing</strong> model, the computer goes with you. This introduces the concept of <strong>"Ubiquitous Computing"</strong> - computing is everywhere.</p>
            <div class="example-box">
              <strong>Real-World Example:</strong> <br>
              <em>Fixed:</em> You have to go to the bank branch to check your balance. <br>
              <em>Mobile:</em> You check your balance on your phone while riding the bus. The bank has "moved" to your pocket.
            </div>

            <h4>3. Novel Applications (Why do we need it?)</h4>
            <ul>
              <li><strong>Location Based Services (LBS):</strong> Apps that react to <em>where</em> you are.
                <br><em>Example:</em> <strong>Uber</strong> finding the nearest driver, or <strong>Zomato</strong> suggesting restaurants within 2km.
              </li>
              <li><strong>Mobile Workforce:</strong>
                <br><em>Example:</em> A delivery agent updating the status of a package ("Delivered") instantly from the doorstep using a handheld scanner.
              </li>
              <li><strong>Emergency Services:</strong>
                <br><em>Example:</em> eCall systems in cars that automatically dial 911 and send GPS coordinates when an airbag deploys.
              </li>
            </ul>

            <h4>4. Impediments (The Hard Challenges)</h4>
            <p>Mobile computing isn't perfect. It faces unique challenges that wired networks don't:</p>
            <table class="comparison-table">
              <tr><th>Challenge</th><th>Detailed Explanation</th><th>Example</th></tr>
              <tr><td><strong>Bandwidth</strong></td><td>Airwaves are a shared resource. Bandwidth is limited and fluctuates.</td><td>Video buffering when you enter a tunnel.</td></tr>
              <tr><td><strong>Security</strong></td><td>Radio waves go through walls. Anyone with an antenna can potentially intercept them.</td><td>Using public Wi-Fi at a cafe is risky without VPN.</td></tr>
              <tr><td><strong>Interference</strong></td><td>Weather, buildings, and other devices cause noise.</td><td>Microwave ovens interfering with 2.4GHz Wi-Fi.</td></tr>
              <tr><td><strong>Power</strong></td><td>We are tethered by the battery. Performance is throttled to save juice.</td><td>Screen dimming automatically when battery is low.</td></tr>
            </table>
          </div>
        `},{title:"Mobile Devices & Architecture",content:`
          <div class="study-guide-box">
            <h4>1. Mobile Device Architecture</h4>
            <p>A mobile device is a miniature computer, but with a different architecture focus:</p>
            <ul>
              <li><strong>SoC (System on Chip):</strong> CPU, GPU, Modem, and RAM are often packed into one chip (like Snapdragon or Apple A-series) to save space and power.</li>
              <li><strong>Sensors:</strong> The "eyes and ears" of the device. Accelerometer (tilt), Gyroscope (rotation), GPS (location), Proximity (screen off during calls).</li>
            </ul>

            <h4>2. Types of Devices</h4>
            <ul>
              <li><strong>Smartphones:</strong> The "Swiss Army Knife". Does everything.</li>
              <li><strong>Wearables:</strong> Smartwatches. Focus on health monitoring and quick notifications. Limited battery.</li>
              <li><strong>Sensors/IoT:</strong> Embedded devices.
                <br><em>Example:</em> A smart agriculture sensor in a field that only wakes up once an hour to report soil moisture.
              </li>
            </ul>

            <h4>3. Limitations in Depth</h4>
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Battery (The Bottleneck)</h5>
                <p>Battery technology (Li-Ion) hasn't kept pace with Moore's Law. We must design software that "sleeps" as much as possible.</p>
              </div>
              <div class="concept-card">
                <h5>User Interface</h5>
                <p>Fat Finger Syndrome: Touch targets must be large enough. Typing on glass is slow and error-prone compared to physical keys.</p>
              </div>
            </div>
          </div>
        `},{title:"GSM Architecture (Deep Dive)",content:`
          <div class="study-guide-box">
            <h4>1. What is GSM?</h4>
            <p><strong>GSM (Global System for Mobile Communications)</strong> is the standard that brought us the SIM card and digital voice calls (2G). Before GSM, phones were analog and insecure.</p>

            <h4>2. The Three Subsystems (The "Big Three")</h4>
            <p>Imagine GSM as a postal system:</p>
            
            <h5>A. RSS (Radio Subsystem) - "The Postbox"</h5>
            <p>This is the part you see (the tower) and hold (the phone).</p>
            <ul>
              <li><strong>MS (Mobile Station):</strong> Your phone + SIM. The SIM contains your identity (IMSI).</li>
              <li><strong>BTS (Base Transceiver Station):</strong> The big tower. It handles the radio link with your phone.</li>
              <li><strong>BSC (Base Station Controller):</strong> The "Brain" of the towers. It manages radio resources for multiple BTSs (like handing off a call from one tower to another).</li>
            </ul>

            <h5>B. NSS (Network & Switching Subsystem) - "The Sorting Office"</h5>
            <p>This is the core network that connects calls.</p>
            <ul>
              <li><strong>MSC (Mobile Switching Center):</strong> The main telephone exchange. It routes calls to other users or landlines.</li>
              <li><strong>HLR (Home Location Register):</strong> The "Master Database". It knows who you are, what plan you have, and roughly where you are (which VLR you're in).</li>
              <li><strong>VLR (Visitor Location Register):</strong> The "Temporary Database". When you travel to a new city, the local MSC copies your data from HLR to its VLR to serve you locally.</li>
            </ul>

            <h5>C. OSS (Operation Subsystem) - "The Maintenance Crew"</h5>
            <p>Monitors the network for faults, billing, and configuration.</p>

            <h4>3. Visualizing the Flow</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                <defs><marker id="arrow-gsm" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker></defs>
                <rect x="20" y="120" width="60" height="80" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                <text x="50" y="165" text-anchor="middle" font-weight="bold">MS</text>
                <rect x="120" y="50" width="160" height="200" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5"/>
                <text x="200" y="70" text-anchor="middle" fill="#666">BSS (Radio)</text>
                <rect x="140" y="100" width="50" height="60" fill="#bbdefb" stroke="#1976d2"/>
                <text x="165" y="135" text-anchor="middle" font-size="12">BTS</text>
                <rect x="210" y="100" width="50" height="60" fill="#bbdefb" stroke="#1976d2"/>
                <text x="235" y="135" text-anchor="middle" font-size="12">BSC</text>
                <rect x="320" y="20" width="260" height="260" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5"/>
                <text x="450" y="40" text-anchor="middle" fill="#666">NSS (Core)</text>
                <rect x="340" y="100" width="60" height="60" fill="#c8e6c9" stroke="#388e3c"/>
                <text x="370" y="135" text-anchor="middle" font-weight="bold">MSC</text>
                <rect x="450" y="60" width="50" height="40" fill="#fff9c4" stroke="#fbc02d"/><text x="475" y="85" text-anchor="middle" font-size="12">HLR</text>
                <rect x="450" y="110" width="50" height="40" fill="#fff9c4" stroke="#fbc02d"/><text x="475" y="135" text-anchor="middle" font-size="12">VLR</text>
                <line x1="80" y1="160" x2="140" y2="130" stroke="#333" marker-end="url(#arrow-gsm)"/>
                <line x1="260" y1="130" x2="340" y2="130" stroke="#333" marker-end="url(#arrow-gsm)"/>
              </svg>
            </div>
          </div>
        `},{title:"GSM Protocols, Localization & Handover",content:`
          <div class="study-guide-box">
            <h4>1. Localization (How does the network find you?)</h4>
            <p>Imagine you are traveling. For someone to call you, the network needs to know where you are.</p>
            <ul>
              <li><strong>Update:</strong> As you move, your phone listens to the "Broadcast Channel" of nearby towers.</li>
              <li><strong>Location Area (LA):</strong> A group of cells. If you move to a new LA, your phone sends a "Location Update Request".</li>
              <li><strong>VLR Update:</strong> The new VLR records your presence and tells your HLR "He is here now".</li>
            </ul>

            <h4>2. Mobile Terminated Call (MTC) - The "Call Flow"</h4>
            <p>Someone calls your number. What happens?</p>
            <ol>
              <li><strong>Gateway MSC:</strong> The call hits the GMSC. GMSC asks HLR: "Where is this user?"</li>
              <li><strong>HLR Query:</strong> HLR checks its DB. "He is in Mumbai VLR."</li>
              <li><strong>Roaming Number:</strong> HLR asks Mumbai VLR for a temporary number (MSRN).</li>
              <li><strong>Routing:</strong> GMSC routes the call to Mumbai MSC using the MSRN.</li>
              <li><strong>Paging:</strong> Mumbai MSC tells all towers in your area to broadcast: "Incoming call for User X!"</li>
              <li><strong>Response:</strong> Your phone hears it and rings.</li>
            </ol>

            <h4>3. Handover (The "Relay Race")</h4>
            <p>You are driving while talking. You move out of range of Tower A and into Tower B. The call must not drop.</p>
            <div class="example-box">
              <strong>Analogy:</strong> Think of a relay race. The runner (Call) passes the baton (Connection) from one runner (Tower A) to the next (Tower B) without stopping.
            </div>
            <ul>
              <li><strong>Hard Handover (GSM):</strong> "Break before Make". The phone disconnects from A for a split second before connecting to B. You might hear a tiny click.</li>
              <li><strong>Soft Handover (CDMA/3G):</strong> "Make before Break". Connected to both A and B simultaneously for a moment. Smoother.</li>
            </ul>
          </div>
        `},{title:"Security & Data Services (GPRS/DECT)",content:`
          <div class="study-guide-box">
            <h4>1. GSM Security (The "Secret Handshake")</h4>
            <p>How does the network know it's really you (and not a clone)?</p>
            <ul>
              <li><strong>Authentication (A3 Algorithm):</strong>
                <br>Network sends a random number (Challenge). SIM calculates a result using its secret key (Ki). If the result matches the network's calculation, you are authenticated.
                <br><em>Note:</em> The secret key (Ki) never leaves the SIM card.
              </li>
              <li><strong>Encryption (A5 Algorithm):</strong>
                <br>Once authenticated, the voice data is scrambled so eavesdroppers only hear static.
              </li>
              <li><strong>Anonymity (TMSI):</strong>
                <br>The network rarely uses your real ID (IMSI). It assigns a Temporary ID (TMSI) that changes frequently, so stalkers can't track your signal.
              </li>
            </ul>

            <h4>2. GPRS (General Packet Radio Service)</h4>
            <p>GSM was built for voice (Circuit Switched). GPRS added <strong>Packet Switching</strong> for data (Internet).</p>
            <ul>
              <li><strong>Always On:</strong> Unlike a voice call, you don't "dial up". You are always connected.</li>
              <li><strong>Billing:</strong> You pay by the Megabyte, not the Minute.</li>
              <li><strong>New Nodes:</strong> Added SGSN (like a local router) and GGSN (gateway to the internet).</li>
            </ul>

            <h4>3. DECT (Digital Enhanced Cordless Telecommunications)</h4>
            <p>Think of the cordless landline phone in your house. That's DECT.</p>
            <ul>
              <li>Designed for high user density in small areas (offices, homes).</li>
              <li><strong>Picocells:</strong> Very small range (up to 300m).</li>
              <li>Excellent voice quality, no echo.</li>
            </ul>
          </div>
        `}]},{unit:"II",title:"Wireless MAC & Mobile Network Layer",notes:"<h3>Unit II Overview</h3><p>This unit covers the mechanisms to access the shared wireless medium (MAC) and the network layer protocols (Mobile IP) to handle mobility.</p>",topics:[{title:"Motivation for Specialized MAC",content:`
          <div class="study-guide-box">
            <h4>1. The Problem with Wireless</h4>
            <p>In a wired network (Ethernet), everyone can hear everyone. If two people speak at once, they hear the crash (Collision). In wireless, this doesn't work.</p>

            <h4>2. Hidden Terminal Problem (The "Party" Analogy)</h4>
            <div class="example-box">
              <strong>Analogy:</strong> Imagine A and C are at opposite ends of a large party hall. B is in the middle.
              <br>A speaks to B. C cannot hear A (too far).
              <br>C decides to speak to B at the same time.
              <br><strong>Result:</strong> B hears gibberish (Collision). A and C are "hidden" from each other.
            </div>
            <p><strong>Solution:</strong> We need a protocol like RTS/CTS (Request to Send / Clear to Send). A asks permission first!</p>

            <h4>3. Exposed Terminal Problem</h4>
            <p>B wants to send to C. A is transmitting to someone else. B hears A and thinks "The air is busy, I should wait". But C is far away from A and wouldn't hear A anyway. B is "Exposed" to A and waits unnecessarily, wasting bandwidth.</p>
          </div>
        `},{title:"MAC Protocols (SDMA, FDMA, TDMA, CDMA)",content:`
          <div class="study-guide-box">
            <h4>How do we share the air? (Multiplexing)</h4>
            <p>Imagine a room full of people wanting to talk. How do we organize them?</p>

            <h4>1. SDMA (Space Division) - "Separate Rooms"</h4>
            <p>Use directional antennas. You can talk in the North corner, I can talk in the South corner. We don't interfere.</p>

            <h4>2. FDMA (Frequency Division) - "Different Pitches"</h4>
            <p>You speak in a high voice (Channel 1), I speak in a low voice (Channel 2). The listener tunes into one.</p>
            <ul><li><em>Con:</em> If I stop talking, my channel is wasted. No one else can use it.</li></ul>

            <h4>3. TDMA (Time Division) - "Take Turns"</h4>
            <p>We all use the same pitch, but I speak for 1 second, then you speak for 1 second.</p>
            <ul><li><em>Pro:</em> Flexible.</li><li><em>Con:</em> We need perfect clocks to synchronize.</li></ul>

            <h4>4. CDMA (Code Division) - "Different Languages"</h4>
            <p>We all speak at the same time on the same frequency! But I speak English, and you speak French. The receiver filters out everything except English.</p>
            <ul><li><em>Pro:</em> Very secure and efficient.</li><li><em>Con:</em> Complex math (Orthogonal codes).</li></ul>
          </div>
        `},{title:"Wireless LAN (IEEE 802.11 - Wi-Fi)",content:`
          <div class="study-guide-box">
            <h4>1. Architecture</h4>
            <ul>
              <li><strong>Infrastructure Mode:</strong> The standard Wi-Fi at home. All devices (Stations) connect to a central Router (Access Point). If you want to send a file to the printer, it goes Laptop -> Router -> Printer.</li>
              <li><strong>Ad-hoc Mode:</strong> No router. Laptop connects directly to Printer. Good for quick file sharing.</li>
            </ul>

            <h4>2. CSMA/CA (Collision Avoidance)</h4>
            <p>Since we can't <em>detect</em> collisions easily (Hidden Terminal), we try to <em>avoid</em> them.</p>
            <div class="example-box">
              <strong>The Protocol Steps:</strong>
              <ol>
                <li><strong>Listen:</strong> Is the channel free?</li>
                <li><strong>Wait:</strong> If busy, wait a random time (Backoff).</li>
                <li><strong>RTS (Request to Send):</strong> Send a tiny packet: "Can I speak?"</li>
                <li><strong>CTS (Clear to Send):</strong> AP replies: "Yes, go ahead." (Everyone else hears this and stays silent).</li>
                <li><strong>Data:</strong> Send the actual file.</li>
                <li><strong>ACK:</strong> Receiver confirms: "Got it!"</li>
              </ol>
            </div>
          </div>
        `},{title:"Mobile IP (The Network Layer)",content:`
          <div class="study-guide-box">
            <h4>1. The IP Address Problem</h4>
            <p>An IP address is like a street address. It tells the internet <em>where</em> you are. If you move to a new network (new city), you get a new IP.</p>
            <p><strong>The Issue:</strong> If your IP changes, all your open connections (downloads, video calls) break. Mobile IP solves this.</p>

            <h4>2. The Solution: Two Addresses</h4>
            <div class="example-box">
              <strong>Analogy: Mail Forwarding</strong>
              <br>You move to Paris for a month, but you want to keep receiving mail at your New York home.
              <ul>
                <li><strong>Home Address (Home IP):</strong> Your permanent ID.</li>
                <li><strong>Care-of Address (CoA):</strong> Your temporary address in Paris.</li>
                <li><strong>Home Agent (HA):</strong> Your mom in New York. She collects your mail and forwards it to Paris.</li>
                <li><strong>Foreign Agent (FA):</strong> The hotel desk in Paris. They receive the forwarded mail and give it to you.</li>
              </ul>
            </div>

            <h4>3. How it works (Tunneling)</h4>
            <p>When a packet arrives for you at your Home Network:</p>
            <ol>
              <li>HA intercepts it.</li>
              <li>HA wraps it inside a new packet (Encapsulation) addressed to your CoA.</li>
              <li>The packet travels through the "Tunnel" to the Foreign Network.</li>
              <li>FA unwraps it (Decapsulation) and delivers the original packet to you.</li>
            </ol>
          </div>
        `}]},{unit:"III",title:"Mobile Transport Layer & Database Issues",notes:"<h3>Unit III Overview</h3><p>This unit addresses the challenges of TCP in wireless environments and data management strategies like hoarding and caching.</p>",topics:[{title:"Mobile Transport Layer (TCP Challenges)",content:`
          <div class="study-guide-box">
            <h4>1. Why TCP hates Wireless</h4>
            <p>TCP (Transmission Control Protocol) is the backbone of the internet. It guarantees delivery. It was designed for <strong>Wired Networks</strong>.</p>
            <p><strong>The Misunderstanding:</strong>
              <br>In wired networks, if a packet is lost, it's almost always because of <strong>Congestion</strong> (traffic jam). TCP's reaction is to <strong>Slow Down</strong>.
              <br>In wireless, packets are lost because of <strong>Noise</strong> or <strong>Handover</strong> (brief disconnect). The network isn't full!
              <br><strong>Result:</strong> TCP slows down unnecessarily, killing your download speed.
            </p>

            <h4>2. Solutions (Fixing TCP)</h4>
            
            <h5>A. Indirect TCP (I-TCP) - "The Split"</h5>
            <p>Split the connection at the Base Station (Tower).</p>
            <ul>
              <li><strong>Standard TCP:</strong> Server <-> Tower. (Fast, wired).</li>
              <li><strong>Wireless TCP:</strong> Tower <-> Phone. (Optimized for wireless).</li>
              <li><em>Problem:</em> If the Tower crashes, the Server thinks the Phone got the data (because the Tower acknowledged it). Breaks end-to-end reliability.</li>
            </ul>

            <h5>B. Snooping TCP - "The Helper"</h5>
            <p>The Tower spies on the packets. If it sees a packet is missing (gap in sequence), it quickly re-sends it from its own cache <em>before</em> the Server notices.</p>
            <ul>
              <li><em>Benefit:</em> Server doesn't slow down. End-to-end reliability is kept.</li>
              <li><em>Problem:</em> Doesn't work with Encryption (HTTPS), because the Tower can't read the packet headers.</li>
            </ul>

            <h5>C. Mobile TCP (M-TCP) - "The Pauser"</h5>
            <p>When you disconnect (e.g., entering an elevator), the Tower tells the Server: "<strong>Pause!</strong> Don't send anything, and don't slow down. Just wait." (Sets window size to 0). When you reconnect, it says "Resume".</p>
          </div>
        `},{title:"Database Issues (Hoarding & Caching)",content:`
          <div class="study-guide-box">
            <h4>1. The Disconnection Problem</h4>
            <p>Mobile devices are frequently offline (tunnel, flight, poor signal). How do we access data?</p>

            <h4>2. Hoarding (Prefetching)</h4>
            <p>Downloading data <em>before</em> you need it.</p>
            <div class="example-box">
              <strong>Example: Google Maps Offline Areas</strong>
              <br>Before a trip, you download the map of the city. Even if you lose signal, you can still navigate. This is hoarding.
            </div>

            <h4>3. Caching</h4>
            <p>Storing data you <em>recently</em> used.</p>
            <ul>
              <li><strong>Benefit:</strong> Faster access (RAM is faster than 4G) and saves battery (radio stays off).</li>
              <li><strong>Challenge: Consistency.</strong> If the stock price changes on the server, your cached version is wrong (Stale). We need "Invalidation Reports" - the server telling the phone "Hey, that data is old, delete it!"</li>
            </ul>

            <h4>4. Kangaroo Transactions</h4>
            <p>A transaction (like a bank transfer) might take time. If you move to a new Tower while it's processing, the transaction "hops" with you, like a Kangaroo carrying its joey. It doesn't restart from scratch.</p>
          </div>
        `}]},{unit:"IV",title:"Data Dissemination & Synchronization",notes:"<h3>Unit IV Overview</h3><p>Focuses on how data is delivered to mobile users (Push vs Pull) and how consistency is maintained.</p>",topics:[{title:"Data Dissemination (Push vs Pull)",content:`
          <div class="study-guide-box">
            <h4>1. The Asymmetry</h4>
            <p>Mobile devices are "Consumers". They download huge videos but only upload small clicks. The bandwidth is <strong>Asymmetric</strong> (Downlink >> Uplink).</p>

            <h4>2. Push Mechanism (Broadcast)</h4>
            <p>The server sends data to everyone without them asking.</p>
            <div class="example-box">
              <strong>Analogy: Radio Station</strong>
              <br>The DJ plays a song. Everyone tuned in hears it. It costs the DJ the same effort whether 1 person listens or 1 million.
              <br><em>Use Case:</em> Stock tickers, News headlines, Traffic alerts.
            </div>
            <ul><li><em>Pro:</em> Extremely scalable.</li><li><em>Con:</em> You get data you might not want (Spam).</li></ul>

            <h4>3. Pull Mechanism (On-Demand)</h4>
            <p>The user asks for specific data.</p>
            <div class="example-box">
              <strong>Analogy: Web Browsing</strong>
              <br>You type a URL. The server sends that specific page.
            </div>
            <ul><li><em>Pro:</em> You get exactly what you want.</li><li><em>Con:</em> If 1 million people ask at once, the server crashes.</li></ul>

            <h4>4. Hybrid</h4>
            <p>Push the popular stuff (Top 10 News), Pull the niche stuff (Archive articles).</p>
          </div>
        `},{title:"Selective Tuning & Indexing",content:`
          <div class="study-guide-box">
            <h4>1. Saving Battery</h4>
            <p>Listening to a broadcast stream drains battery. The CPU has to check every packet: "Is this for me? No. Is this for me? No."</p>

            <h4>2. Indexing</h4>
            <p>The server sends a "Table of Contents" (Index) at the start of the cycle.</p>
            <div class="example-box">
              <strong>Scenario:</strong>
              <br>Server: "Sports is at Minute 5. Weather is at Minute 10."
              <br>Phone: Reads Index. "I want Weather." -> <strong>Sleeps</strong> for 9 minutes. -> <strong>Wakes up</strong> at Minute 10 to download Weather.
            </div>
            <p>This technique (Selective Tuning) drastically reduces power consumption.</p>
          </div>
        `},{title:"Data Synchronization",content:`
          <div class="study-guide-box">
            <h4>1. The Sync Problem</h4>
            <p>You edit a document on your phone while offline. Your colleague edits the same document on the server. When you reconnect, whose version wins?</p>

            <h4>2. Conflict Resolution Strategies</h4>
            <ul>
              <li><strong>Server Wins:</strong> Your phone's changes are discarded. (Safe but frustrating).</li>
              <li><strong>Client Wins:</strong> You overwrite your colleague's work. (Dangerous).</li>
              <li><strong>Timestamp:</strong> The last person to save wins.</li>
              <li><strong>Merge:</strong> The software tries to combine both (like Git merge). If it can't, it asks the user.</li>
            </ul>

            <h4>3. SyncML</h4>
            <p>The industry standard protocol for syncing. It's the language your phone uses to talk to your Google Contacts or Outlook Calendar.</p>
          </div>
        `}]},{unit:"V",title:"Mobile Ad-hoc Networks (MANETs)",notes:"<h3>Unit V Overview</h3><p>This unit covers decentralized networks where every node is a router, focusing on routing protocols.</p>",topics:[{title:"MANET Introduction",content:`
          <div class="study-guide-box">
            <h4>1. What is a MANET?</h4>
            <p><strong>Mobile Ad-hoc Network.</strong> It's a network without a boss. No towers, no routers, no cables.</p>
            <p>Every device (Node) talks directly to its neighbors. If it wants to talk to someone far away, the neighbors pass the message along (Multi-hop).</p>

            <h4>2. Real-World Scenario: Disaster Relief</h4>
            <div class="example-box">
              <strong>Scenario:</strong> An earthquake destroys all cell towers. Rescuers arrive.
              <br>Rescuer A (at Base) needs to talk to Rescuer C (in the rubble). They are too far apart.
              <br>Rescuer B is halfway between them.
              <br>A sends to B -> B forwards to C.
              <br>They have formed a MANET instantly.
            </div>

            <h4>3. Challenges</h4>
            <ul>
              <li><strong>Dynamic Topology:</strong> Nodes move constantly. The path A->B->C might exist now, but B might walk away in 5 seconds.</li>
              <li><strong>Battery:</strong> Forwarding other people's packets drains your battery. Why should you help? (Selfish Node problem).</li>
            </ul>
          </div>
        `},{title:"Routing Protocols (DSDV, DSR, AODV)",content:`
          <div class="study-guide-box">
            <h4>How do we find the path?</h4>

            <h4>1. Proactive (Table-Driven) - DSDV</h4>
            <p><strong>"The Map Approach"</strong></p>
            <p>Every node keeps a full map of the network (Routing Table). "To reach C, go through B."</p>
            <ul>
              <li><em>Pro:</em> Instant. You already know the way.</li>
              <li><em>Con:</em> If nodes move, you spend all your time updating the map, even if no one is talking. Wastes battery.</li>
            </ul>

            <h4>2. Reactive (On-Demand) - DSR / AODV</h4>
            <p><strong>"The Asking Directions Approach"</strong></p>
            <p>I don't know the way to C. I'll shout (Broadcast): "Does anyone know C?"</p>
            <ul>
              <li><strong>RREQ (Route Request):</strong> The shout spreads through the network.</li>
              <li><strong>RREP (Route Reply):</strong> C hears it and replies: "I'm here! The path is A->B->C."</li>
              <li><em>Pro:</em> Saves battery. No updates unless you need to talk.</li>
              <li><em>Con:</em> Initial delay. You have to wait for the reply before sending data.</li>
            </ul>

            <h4>3. AODV vs DSR</h4>
            <ul>
              <li><strong>DSR (Source Routing):</strong> The entire path "A-B-C-D" is written in the packet header. Good for small networks.</li>
              <li><strong>AODV (Hop-by-Hop):</strong> Like road signs. Packet just says "Destination D". Node A looks at sign: "For D, go to B". Node B looks: "For D, go to C". Less overhead.</li>
            </ul>
          </div>
        `}]}],G0={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0},{question:"Which interface connects the BTS and BSC in GSM?",options:["Um Interface","A Interface","Abis Interface","B Interface"],answer:2},{question:"What is the maximum data rate of GPRS (theoretical)?",options:["9.6 kbps","56 kbps","171.2 kbps","2 Mbps"],answer:2},{question:"Which component in GPRS is equivalent to the MSC in GSM?",options:["GGSN","SGSN","PCU","HLR"],answer:1},{question:"In Mobile Computing, what does 'Ubiquitous Computing' refer to?",options:["Computing that is visible everywhere","Computing that is integrated into the environment and invisible to the user","Computing using only mobile phones","Cloud computing"],answer:1},{question:"What is the function of the Equipment Identity Register (EIR)?",options:["Stores user billing info","Stores the IMEI numbers of valid, stolen, or faulty devices","Stores the current location of the user","Stores SMS messages"],answer:1},{question:"Which multiple access technique does GSM use?",options:["FDMA only","TDMA only","CDMA","Combination of FDMA and TDMA"],answer:3},{question:"What is a 'Cell' in cellular networks?",options:["A battery","The geographic area covered by a single Base Station","A mobile phone","A packet of data"],answer:1}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1},{question:"What is the purpose of the NAV (Network Allocation Vector) in IEEE 802.11?",options:["To route packets","To assign IP addresses","To indicate how long the channel will be busy (Virtual Carrier Sensing)","To encrypt data"],answer:2},{question:"In Mobile IP, what is 'Triangular Routing'?",options:["Routing between 3 routers","The path CN -> HA -> FA -> MN -> CN","A routing loop","Routing using 3 antennas"],answer:1},{question:"Which protocol is used for Agent Discovery in Mobile IP?",options:["ARP","ICMP Router Discovery","DHCP","DNS"],answer:1},{question:"What is 'Minimal Encapsulation' in Mobile IP?",options:["No encryption","A tunneling method with less overhead than IP-in-IP","Sending small packets","Compressing headers"],answer:1},{question:"Which IEEE standard defines Wireless LANs (Wi-Fi)?",options:["802.3","802.15","802.11","802.16"],answer:2},{question:"What is the Near-Far problem primarily associated with?",options:["TDMA","FDMA","CDMA","SDMA"],answer:2},{question:"What is the function of the Foreign Agent (FA)?",options:["It stores the user's permanent profile","It acts as a router on the visited network and delivers packets to the MN","It assigns the Home Address","It manages the radio spectrum"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2},{question:"What is the main disadvantage of I-TCP?",options:["It is slow","It violates end-to-end TCP semantics","It requires new hardware","It doesn't work with IPv6"],answer:1},{question:"What is 'Fast Retransmit' in TCP?",options:["Retransmitting after timeout","Retransmitting after receiving 3 duplicate ACKs","Sending data twice","Using UDP for retransmission"],answer:1},{question:"Which TCP mechanism is designed to distinguish between congestion loss and wireless error loss?",options:["Standard TCP","TCP Reno","Explicit Congestion Notification (ECN) / TCP Westwood","UDP"],answer:2},{question:"In WAP, which layer replaces HTTP?",options:["WAE","WSP (Wireless Session Protocol)","WTP","WDP"],answer:1},{question:"What is a Piconet in Bluetooth?",options:["A large network","A network of up to 8 devices (1 Master, 7 Slaves)","A network of routers","A type of antenna"],answer:1},{question:"Which layer in WAP provides security equivalent to TLS/SSL?",options:["WDP","WTP","WTLS","WAE"],answer:2},{question:"What is the frequency band used by Bluetooth?",options:["5 GHz","900 MHz","2.4 GHz ISM","60 GHz"],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2},{question:"What is 'Data Hoarding'?",options:["Deleting data","Prefetching data into cache before disconnection","Compressing data","Encrypting data"],answer:1},{question:"Which synchronization protocol is 'Pessimistic'?",options:["One that allows conflicts","One that locks data to prevent conflicts","One that uses timestamps","One that uses version vectors"],answer:1},{question:"What is a 'Broadcast Disk'?",options:["A physical disk","A cyclic broadcast of data that simulates a rotating disk","A satellite dish","A CD-ROM"],answer:1},{question:"In the context of Mobile Databases, what is a 'Tentative Transaction'?",options:["A transaction that has been committed","A transaction executed on a disconnected mobile unit that is not yet confirmed by the server","A failed transaction","A read-only transaction"],answer:1},{question:"What is 'Kangaroo Transaction'?",options:["A fast transaction","A transaction that hops from one Base Station to another with the user","A transaction that jumps steps","A large transaction"],answer:1},{question:"What is the primary goal of Caching in mobile computing?",options:["To use more memory","To reduce access latency and bandwidth usage","To increase server load","To slow down the device"],answer:1},{question:"Which strategy is used to maintain cache consistency?",options:["Random Deletion","Invalidation Reports","Formatting","Rebooting"],answer:1}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1},{question:"What is a 'Blackhole Attack' in MANETs?",options:["A physical hole in the device","A malicious node drops all packets it receives","A virus","A power failure"],answer:1},{question:"What does DSR stand for?",options:["Dynamic Source Routing","Direct Source Routing","Distance Source Routing","Dynamic Static Routing"],answer:0},{question:"Which routing protocol uses a 'Height' metric and is loop-free?",options:["AODV","DSR","TORA","DSDV"],answer:2},{question:"What is J2ME primarily used for?",options:["Desktop applications","Server-side scripting","Mobile and embedded applications","Web design"],answer:2},{question:"In J2ME, what is a MIDlet?",options:["A small device","A Java application for mobile devices","A virus","A database"],answer:1},{question:"What is the 'Wormhole Attack'?",options:["Tunneling packets to another location to disrupt routing","Eating data","Creating a loop","Blocking signals"],answer:0},{question:"Which configuration in J2ME is for devices with limited resources (like cell phones)?",options:["CDC (Connected Device Configuration)","CLDC (Connected Limited Device Configuration)","J2SE","J2EE"],answer:1}]},V0={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
          `}]}]},_0={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 2",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is GPRS?",answer:"<strong>General Packet Radio Service (GPRS)</strong> is a packet-oriented mobile data standard on the 2G and 3G cellular communication network's global system for mobile communications (GSM)."},{unit:"I",id:2,question:"Define Handoff.",answer:"<strong>Handoff</strong> (or Handover) is the process of transferring an ongoing call or data session from one channel connected to the core network to another channel."},{unit:"II",id:3,question:"What is the Near-Far Problem?",answer:"<strong>Explanation:</strong> In CDMA, a strong signal from a near mobile unit masks the weak signal from a far mobile unit at the base station."},{unit:"II",id:4,question:"What is Tunneling?",answer:"<strong>Definition:</strong> Tunneling is a mechanism used to ship a packet to a mobile node. It involves encapsulation of the original IP packet inside another IP packet."},{unit:"III",id:5,question:"What is Mobile TCP?",answer:"<strong>Mobile TCP (M-TCP)</strong> is a protocol designed to handle frequent disconnections. It splits the connection and forces the sender into persist mode during disconnection."},{unit:"III",id:6,question:"Define Caching in Mobile Computing.",answer:"<strong>Caching:</strong> Storing frequently accessed data locally on the mobile device to reduce access latency and bandwidth usage."},{unit:"IV",id:7,question:"What is a Broadcast Disk?",answer:"<strong>Broadcast Disk:</strong> A technique where data is cyclically broadcasted, appearing like a rotating disk to the client. Popular data is repeated more often."},{unit:"IV",id:8,question:"What is Data Synchronization?",answer:"<strong>Definition:</strong> The process of establishing consistency among data from a source to a target data storage and vice versa and the continuous harmonization of the data over time."},{unit:"V",id:9,question:"What is AODV?",answer:"<strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive routing protocol for MANETs that establishes a route to a destination only on demand."},{unit:"V",id:10,question:"What is Service Discovery?",answer:"<strong>Service Discovery:</strong> The automatic detection of devices and services offered by these devices on a computer network."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GPRS Architecture with a neat diagram.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction to GPRS</h4>
              <p><strong>General Packet Radio Service (GPRS)</strong> is a significant evolution from the standard GSM network. While GSM was designed primarily for voice (Circuit Switched), GPRS introduces <strong>Packet Switching</strong>, allowing data to be sent in bursts. This is the technology that enabled "Always-On" internet connectivity on mobile phones (2.5G).</p>
              
              <h4>2. GPRS Architecture Diagram</h4>
              <p>The GPRS architecture adds two new core nodes to the existing GSM network: <strong>SGSN</strong> and <strong>GGSN</strong>.</p>
              <div class="diagram-container">
                <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <defs><marker id="arrow-gprs" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker></defs>
                  
                  <!-- MS -->
                  <rect x="20" y="150" width="60" height="80" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                  <text x="50" y="195" text-anchor="middle" font-weight="bold">MS</text>
                  
                  <!-- BSS -->
                  <rect x="120" y="100" width="100" height="180" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5"/>
                  <text x="170" y="120" text-anchor="middle" fill="#666">BSS</text>
                  <rect x="140" y="140" width="60" height="50" fill="#bbdefb" stroke="#1976d2"/>
                  <text x="170" y="170" text-anchor="middle" font-size="12">BTS</text>
                  <rect x="140" y="210" width="60" height="50" fill="#bbdefb" stroke="#1976d2"/>
                  <text x="170" y="235" text-anchor="middle" font-size="10">BSC +</text>
                  <text x="170" y="250" text-anchor="middle" font-size="10" font-weight="bold">PCU</text>
                  
                  <!-- Core Network -->
                  <rect x="260" y="50" width="200" height="280" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5"/>
                  <text x="360" y="70" text-anchor="middle" fill="#666">GPRS Core</text>
                  
                  <!-- SGSN -->
                  <rect x="280" y="200" width="70" height="60" fill="#c8e6c9" stroke="#388e3c"/>
                  <text x="315" y="235" text-anchor="middle" font-weight="bold">SGSN</text>
                  
                  <!-- GGSN -->
                  <rect x="380" y="200" width="70" height="60" fill="#c8e6c9" stroke="#388e3c"/>
                  <text x="415" y="235" text-anchor="middle" font-weight="bold">GGSN</text>
                  
                  <!-- MSC (Legacy) -->
                  <rect x="330" y="100" width="60" height="50" fill="#fff9c4" stroke="#fbc02d"/>
                  <text x="360" y="130" text-anchor="middle" font-size="12">MSC</text>
                  
                  <!-- Internet -->
                  <cloud x="500" y="180" transform="scale(0.8)"/> 
                  <ellipse cx="530" cy="230" rx="40" ry="25" fill="#e0f7fa" stroke="#00bcd4"/>
                  <text x="530" y="235" text-anchor="middle" font-size="12">Internet</text>

                  <!-- Connections -->
                  <line x1="80" y1="190" x2="140" y2="165" stroke="#333" marker-end="url(#arrow-gprs)"/>
                  <line x1="200" y1="235" x2="280" y2="235" stroke="#333" stroke-width="2" marker-end="url(#arrow-gprs)"/>
                  <line x1="350" y1="235" x2="380" y2="235" stroke="#333" stroke-width="2" marker-end="url(#arrow-gprs)"/>
                  <line x1="450" y1="235" x2="490" y2="235" stroke="#333" stroke-width="2" marker-end="url(#arrow-gprs)"/>
                </svg>
              </div>

              <h4>3. Detailed Component Description</h4>
              
              <h5>A. Mobile Station (MS)</h5>
              <p>The user's device. In GPRS, the MS can operate in three classes:</p>
              <ul>
                <li><strong>Class A:</strong> Can use Voice (GSM) and Data (GPRS) simultaneously.</li>
                <li><strong>Class B:</strong> Can register for both, but use only one at a time (Auto-switch).</li>
                <li><strong>Class C:</strong> Data only (e.g., GPRS modem).</li>
              </ul>

              <h5>B. Base Station Subsystem (BSS)</h5>
              <p>Existing GSM towers are used, but a software upgrade is needed. A hardware unit called the <strong>PCU (Packet Control Unit)</strong> is added to the BSC. The PCU decides whether a radio channel should be used for a voice call or a data packet.</p>

              <h5>C. SGSN (Serving GPRS Support Node) - "The Router"</h5>
              <p>This is the heart of GPRS. It is equivalent to the MSC in voice networks but for data.</p>
              <ul>
                <li><strong>Routing:</strong> Delivers packets to/from the MS within its service area.</li>
                <li><strong>Mobility Management:</strong> Tracks the location of the MS (Attach/Detach).</li>
                <li><strong>Authentication:</strong> Checks if the user is allowed to use data.</li>
                <li><strong>Billing:</strong> Counts the bytes for charging.</li>
              </ul>

              <h5>D. GGSN (Gateway GPRS Support Node) - "The Gateway"</h5>
              <p>This is the interface to the external world (Internet).</p>
              <ul>
                <li><strong>IP Address Assignment:</strong> Assigns an IP address to the MS.</li>
                <li><strong>Packet Filtering:</strong> Acts as a firewall.</li>
                <li><strong>Tunneling:</strong> Encapsulates packets coming from the Internet and sends them to the correct SGSN.</li>
              </ul>

              <h4>4. Interfaces</h4>
              <ul>
                <li><strong>Gb Interface:</strong> Between BSS and SGSN. Carries data packets.</li>
                <li><strong>Gn Interface:</strong> Between SGSN and GGSN. Uses IP tunneling (GTP).</li>
                <li><strong>Gi Interface:</strong> Between GGSN and Internet. Standard IP.</li>
              </ul>

              <h4>5. Advantages of GPRS</h4>
              <ul>
                <li><strong>High Speed:</strong> Up to 171.2 kbps (theoretical), much faster than GSM's 9.6 kbps.</li>
                <li><strong>Always On:</strong> No need to "dial up". Connection is instant.</li>
                <li><strong>Volume-based Billing:</strong> User pays for MBs downloaded, not for time connected.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> GPRS was the pivotal technology that transformed mobile phones from voice-only devices into internet-enabled smartphones, laying the groundwork for 3G and 4G.
              </div>
            </div>
          `},{type:"b",question:"Discuss various Applications of Mobile Computing.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Mobile Computing has permeated every aspect of modern life. Its applications leverage the unique properties of <strong>Portability</strong> and <strong>Mobility</strong> to provide services "Anytime, Anywhere".</p>

              <h4>2. Key Application Domains</h4>

              <h5>A. Mobile Workforce & Business</h5>
              <p>Businesses use mobile computing to untether employees from their desks.</p>
              <ul>
                <li><strong>Sales Force Automation (SFA):</strong> Salespeople can check inventory, place orders, and update customer records from the client's office using a tablet.</li>
                <li><strong>Field Service:</strong> Technicians repairing a machine can download manuals, order spare parts, and close tickets on-site.</li>
                <li><strong>Just-in-Time Delivery:</strong> Courier services (FedEx, UPS) track packages in real-time. Drivers update status instantly upon delivery.</li>
              </ul>

              <h5>B. Transportation & Location Based Services (LBS)</h5>
              <p>Using GPS and cellular triangulation to provide context-aware services.</p>
              <ul>
                <li><strong>Navigation:</strong> Google Maps/Waze providing real-time traffic routing.</li>
                <li><strong>Vehicle Tracking:</strong> Fleet managers monitoring the speed and location of trucks.</li>
                <li><strong>Emergency Services (eCall):</strong> Cars automatically dialing 911 with GPS coordinates after a crash.</li>
              </ul>

              <h5>C. Healthcare (m-Health)</h5>
              <p>Revolutionizing patient care through remote monitoring.</p>
              <ul>
                <li><strong>Remote Monitoring:</strong> Wearable sensors (Fitbit, Apple Watch) track heart rate and alert doctors of irregularities.</li>
                <li><strong>Telemedicine:</strong> Doctors consulting patients via video calls in rural areas.</li>
                <li><strong>Access to Records:</strong> Doctors viewing X-rays and history on an iPad while doing rounds.</li>
              </ul>

              <h5>D. Finance (m-Commerce)</h5>
              <p>Banking in your pocket.</p>
              <ul>
                <li><strong>Mobile Banking:</strong> Checking balance, transferring funds (UPI).</li>
                <li><strong>Mobile Wallets:</strong> NFC payments (Apple Pay) or QR codes (Paytm) replacing physical cash.</li>
                <li><strong>Stock Trading:</strong> Real-time trading from anywhere.</li>
              </ul>

              <h5>E. Entertainment & Social</h5>
              <ul>
                <li><strong>Streaming:</strong> Netflix/YouTube on the go.</li>
                <li><strong>Gaming:</strong> Multiplayer games (PUBG) connecting users globally.</li>
                <li><strong>Social Media:</strong> Instant sharing of photos/videos (Instagram/Snapchat).</li>
              </ul>

              <h4>3. Summary Table</h4>
              <table class="comparison-table">
                <tr><th>Sector</th><th>Key Benefit</th><th>Example</th></tr>
                <tr><td>Business</td><td>Efficiency</td><td>Salesforce App</td></tr>
                <tr><td>Transport</td><td>Safety/Optimization</td><td>Uber/GPS</td></tr>
                <tr><td>Health</td><td>Remote Access</td><td>Tele-consultation</td></tr>
                <tr><td>Finance</td><td>Convenience</td><td>UPI/GPay</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> The applications of mobile computing are limitless. They focus on reducing the friction of "location" and "time", making information accessible instantly to improve productivity and quality of life.
              </div>
            </div>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain the IEEE 802.11 System Architecture.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction to IEEE 802.11 (Wi-Fi)</h4>
              <p>IEEE 802.11 is the standard for Wireless LANs (WLAN). It defines how devices connect wirelessly to a local network. The architecture is designed to support mobility and transparency to upper layers.</p>

              <h4>2. Architectural Components</h4>
              <p>The standard defines several building blocks:</p>
              
              <h5>A. Station (STA)</h5>
              <p>The most basic component. Any device with a wireless network interface card (NIC). Examples: Laptop, Smartphone, Smart TV.</p>

              <h5>B. Basic Service Set (BSS)</h5>
              <p>The fundamental building block. It consists of a group of stations communicating with each other.</p>
              <ul>
                <li><strong>Infrastructure BSS:</strong> STAs communicate via a central Access Point (AP).</li>
                <li><strong>Independent BSS (IBSS):</strong> STAs communicate directly (Ad-hoc).</li>
              </ul>

              <h5>C. Access Point (AP)</h5>
              <p>A station that acts as a bridge. It connects the wireless network (WLAN) to the wired network (LAN/Ethernet).</p>

              <h5>D. Distribution System (DS)</h5>
              <p>The backbone network (usually Ethernet) that connects multiple APs together to form a larger network.</p>

              <h5>E. Extended Service Set (ESS)</h5>
              <p>Two or more BSSs connected via a DS. This allows a user to roam from one BSS to another (e.g., walking from one floor to another in an office) without losing connection.</p>

              <h4>3. Architecture Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <!-- Distribution System -->
                  <rect x="50" y="20" width="500" height="40" rx="5" fill="#e0e0e0" stroke="#666"/>
                  <text x="300" y="45" text-anchor="middle" font-weight="bold">Distribution System (DS) - Ethernet</text>

                  <!-- BSS 1 -->
                  <ellipse cx="150" cy="180" rx="120" ry="90" fill="none" stroke="#2196f3" stroke-dasharray="5,5"/>
                  <text x="150" y="280" text-anchor="middle" fill="#2196f3">BSS 1</text>
                  
                  <!-- AP 1 -->
                  <rect x="130" y="100" width="40" height="40" fill="#bbdefb" stroke="#1976d2"/>
                  <text x="150" y="125" text-anchor="middle" font-size="10">AP 1</text>
                  <line x1="150" y1="60" x2="150" y2="100" stroke="#333" stroke-width="2"/>

                  <!-- STAs in BSS 1 -->
                  <circle cx="100" cy="200" r="15" fill="#e1bee7" stroke="#8e24aa"/>
                  <text x="100" y="205" text-anchor="middle" font-size="10">STA1</text>
                  <circle cx="200" cy="200" r="15" fill="#e1bee7" stroke="#8e24aa"/>
                  <text x="200" y="205" text-anchor="middle" font-size="10">STA2</text>

                  <!-- BSS 2 -->
                  <ellipse cx="450" cy="180" rx="120" ry="90" fill="none" stroke="#2196f3" stroke-dasharray="5,5"/>
                  <text x="450" y="280" text-anchor="middle" fill="#2196f3">BSS 2</text>

                  <!-- AP 2 -->
                  <rect x="430" y="100" width="40" height="40" fill="#bbdefb" stroke="#1976d2"/>
                  <text x="450" y="125" text-anchor="middle" font-size="10">AP 2</text>
                  <line x1="450" y1="60" x2="450" y2="100" stroke="#333" stroke-width="2"/>

                  <!-- STAs in BSS 2 -->
                  <circle cx="400" cy="200" r="15" fill="#e1bee7" stroke="#8e24aa"/>
                  <text x="400" y="205" text-anchor="middle" font-size="10">STA3</text>
                  <circle cx="500" cy="200" r="15" fill="#e1bee7" stroke="#8e24aa"/>
                  <text x="500" y="205" text-anchor="middle" font-size="10">STA4</text>
                  
                  <!-- ESS Label -->
                  <text x="300" y="295" text-anchor="middle" font-weight="bold" font-size="14">Extended Service Set (ESS)</text>
                </svg>
              </div>

              <h4>4. Services Provided</h4>
              <p>The architecture supports two types of services:</p>
              <ul>
                <li><strong>Station Services (SS):</strong> Auth, De-auth, Privacy, Data Delivery.</li>
                <li><strong>Distribution System Services (DSS):</strong> Association, Re-association (Roaming), Disassociation.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> The hierarchical structure of STA -> BSS -> ESS allows IEEE 802.11 to scale from a single room (Home Wi-Fi) to an entire campus (University Wi-Fi) while supporting seamless mobility.
              </div>
            </div>
          `},{type:"b",question:"Explain Packet Delivery in Mobile IP.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Mobile IP</strong> is a protocol that allows a Mobile Node (MN) to change its point of attachment (network) without changing its IP address. This ensures that active connections (like a file download) do not break when the user moves.</p>

              <h4>2. Key Entities</h4>
              <ul>
                <li><strong>Mobile Node (MN):</strong> The user's device.</li>
                <li><strong>Home Agent (HA):</strong> Router in the home network.</li>
                <li><strong>Foreign Agent (FA):</strong> Router in the visited network.</li>
                <li><strong>Correspondent Node (CN):</strong> The server/person sending data to MN.</li>
              </ul>

              <h4>3. Packet Delivery Process (Step-by-Step)</h4>
              
              <h5>Step 1: Packet Generation</h5>
              <p>The CN wants to send a packet to the MN. It uses the MN's <strong>Home Address</strong> as the destination. The packet travels normally through the internet to the MN's Home Network.</p>

              <h5>Step 2: Interception</h5>
              <p>The <strong>Home Agent (HA)</strong> intercepts the packet. It checks its registration table and sees that the MN is currently away (roaming) and has a <strong>Care-of Address (CoA)</strong>.</p>

              <h5>Step 3: Tunneling (Encapsulation)</h5>
              <p>The HA encapsulates the original packet inside a new IP packet.
                <br><strong>Outer Header:</strong> Source=HA, Dest=CoA (Foreign Agent).
                <br><strong>Inner Header:</strong> Source=CN, Dest=MN.
                <br>This process is called <strong>Tunneling</strong>.</p>

              <h5>Step 4: Decapsulation</h5>
              <p>The packet reaches the <strong>Foreign Agent (FA)</strong>. The FA removes the outer header (Decapsulation) to reveal the original packet.</p>

              <h5>Step 5: Delivery</h5>
              <p>The FA delivers the original packet to the MN via the local wireless link.</p>

              <h5>Step 6: Reply (Triangular Routing)</h5>
              <p>When the MN replies to the CN, it sends the packet directly (Standard IP routing). It does <em>not</em> need to go back through the HA. This creates a triangle: CN -> HA -> FA -> MN -> CN.</p>

              <h4>4. Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <defs><marker id="arrow-mip" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker></defs>
                  
                  <rect x="20" y="20" width="80" height="50" fill="#ffccbc" stroke="#d84315"/>
                  <text x="60" y="50" text-anchor="middle" font-weight="bold">CN</text>

                  <rect x="250" y="20" width="80" height="50" fill="#c5cae9" stroke="#3f51b5"/>
                  <text x="290" y="50" text-anchor="middle" font-weight="bold">HA</text>

                  <rect x="480" y="150" width="80" height="50" fill="#b2dfdb" stroke="#00695c"/>
                  <text x="520" y="180" text-anchor="middle" font-weight="bold">FA/MN</text>

                  <!-- Path 1 -->
                  <path d="M 100 45 L 250 45" stroke="#333" stroke-width="2" marker-end="url(#arrow-mip)"/>
                  <text x="175" y="35" text-anchor="middle" font-size="12">1. To Home IP</text>

                  <!-- Path 2 (Tunnel) -->
                  <path d="M 330 45 Q 450 45 520 150" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrow-mip)"/>
                  <text x="450" y="80" text-anchor="middle" font-size="12">2. Tunnel to CoA</text>

                  <!-- Path 3 (Reply) -->
                  <path d="M 480 175 L 60 70" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrow-mip)"/>
                  <text x="250" y="150" text-anchor="middle" font-size="12">3. Direct Reply</text>
                </svg>
              </div>

              <div class="conclusion">
                <strong>Conclusion:</strong> Mobile IP enables seamless roaming by decoupling the "Identifier" (Home IP) from the "Location" (CoA), using tunneling to bridge the gap.
              </div>
            </div>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain Mobile TCP (M-TCP) in detail.",answer:`
            <div class="model-answer-pro">
              <h4>1. The Problem with Standard TCP</h4>
              <p>Standard TCP assumes that packet loss is due to <strong>Congestion</strong>. In wireless networks, loss is often due to <strong>Disconnection</strong> or <strong>Handover</strong>. If TCP slows down during a disconnection, it wastes bandwidth when the connection returns.</p>

              <h4>2. Mobile TCP (M-TCP) Overview</h4>
              <p>M-TCP is a split-connection approach designed specifically to handle <strong>frequent disconnections</strong>. It splits the connection into two parts:</p>
              <ul>
                <li><strong>Wired Part:</strong> Sender (Fixed Host) to Supervisory Host (SH).</li>
                <li><strong>Wireless Part:</strong> Supervisory Host (SH) to Mobile Node (MN).</li>
              </ul>

              <h4>3. Architecture</h4>
              <p>The <strong>Supervisory Host (SH)</strong> is usually located at the Base Station. It acts as a proxy.</p>

              <h4>4. Working Mechanism</h4>
              
              <h5>A. Normal Operation</h5>
              <p>The SH forwards packets from Sender to MN and ACKs from MN to Sender. It behaves like a router.</p>

              <h5>B. Handling Disconnection (The Key Feature)</h5>
              <ol>
                <li><strong>Detection:</strong> The SH detects that the MN has disconnected (e.g., signal lost).</li>
                <li><strong>Choking the Sender:</strong> The SH sends a TCP segment to the Sender with <strong>Window Size = 0</strong>.</li>
                <li><strong>Persist Mode:</strong> This tells the Sender "I am full, stop sending". The Sender enters <strong>Persist Mode</strong>. It freezes its retransmission timer and does <em>not</em> reduce its congestion window. It simply waits.</li>
                <li><strong>Probing:</strong> The Sender periodically sends "Zero Window Probes" to check if the window has opened.</li>
              </ol>

              <h5>C. Handling Reconnection</h5>
              <ol>
                <li>The MN reconnects and signals the SH.</li>
                <li>The SH sends a TCP update to the Sender with the old <strong>Window Size > 0</strong>.</li>
                <li>The Sender immediately resumes transmission at full speed.</li>
              </ol>

              <h4>5. Advantages & Disadvantages</h4>
              <table class="comparison-table">
                <tr><th>Pros</th><th>Cons</th></tr>
                <tr><td>Prevents unnecessary retransmissions.</td><td>Requires modification to Base Station software.</td></tr>
                <tr><td>Preserves the Congestion Window (Speed).</td><td>Handover is complex (State must move to new SH).</td></tr>
                <tr><td>Good for long disconnections.</td><td>Breaks end-to-end TCP semantics slightly.</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> M-TCP is superior to standard TCP for mobile environments because it distinguishes between "Network Congestion" and "User Disconnection", reacting appropriately to each.
              </div>
            </div>
          `},{type:"b",question:"Explain the Kangaroo Transaction Model.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>In mobile database systems, a transaction (like a bank transfer) might take longer than the time a user stays in one cell. If the user moves, the transaction shouldn't fail. The <strong>Kangaroo Transaction Model</strong> is designed to support such <strong>Mobile Transactions</strong>.</p>

              <h4>2. The Concept</h4>
              <p>The name comes from how a Kangaroo carries its joey. As the mobile unit moves, the transaction "hops" from one Base Station to another.</p>

              <h4>3. Structure</h4>
              <p>The model uses a <strong>Data Access Agent (DAA)</strong> at each Base Station. The transaction is split into:</p>
              <ul>
                <li><strong>Global Transaction (GT):</strong> The overall task.</li>
                <li><strong>Joey Transactions (JT):</strong> Sub-transactions executed at each visited BS.</li>
              </ul>

              <h4>4. Working Mechanism</h4>
              
              <h5>Step 1: Initiation</h5>
              <p>The Mobile Unit (MU) starts a transaction at BS1. A "Joey Transaction" (JT1) is created at BS1.</p>

              <h5>Step 2: Movement (The Hop)</h5>
              <p>The MU moves to BS2.
                <br>The DAA at BS1 captures the state of the transaction.
                <br>It forwards the state to the DAA at BS2.</p>

              <h5>Step 3: Resumption</h5>
              <p>A new Joey Transaction (JT2) is created at BS2. It continues the work from where JT1 left off.</p>

              <h5>Step 4: Completion</h5>
              <p>This continues until the transaction is done. The final result is consolidated.</p>

              <h4>5. Failure Modes</h4>
              <ul>
                <li><strong>Compensating Mode:</strong> If a Joey fails, the system must undo the changes made by previous Joeys (Rollback).</li>
                <li><strong>Split Mode:</strong> If the connection breaks, the Joey can run independently on the BS and report back later.</li>
              </ul>

              <h4>6. Diagram Representation</h4>
              <div class="diagram-container">
                <div class="diagram-row">
                  <div class="diagram-box">BS 1 (Joey 1)</div>
                  <div class="diagram-arrow">➡ Hop ➡</div>
                  <div class="diagram-box">BS 2 (Joey 2)</div>
                  <div class="diagram-arrow">➡ Hop ➡</div>
                  <div class="diagram-box">BS 3 (Joey 3)</div>
                </div>
                <p style="text-align:center; margin-top:10px;">Mobile Unit Path</p>
              </div>

              <div class="conclusion">
                <strong>Conclusion:</strong> The Kangaroo model ensures transaction atomicity and durability in a mobile environment by migrating the transaction context along with the user.
              </div>
            </div>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Explain Broadcast Disk model.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>In mobile computing, bandwidth is limited (Downlink >> Uplink). <strong>Data Dissemination</strong> (Push) is often more efficient than Request-Response (Pull). The <strong>Broadcast Disk</strong> model is a push-based technique to deliver data efficiently.</p>

              <h4>2. The Concept</h4>
              <p>The server continuously broadcasts data in a cycle. To the client, this stream of data looks like a rotating memory disk. If you wait long enough, the data you want will "spin" past you.</p>

              <h4>3. The Problem: Access Time</h4>
              <p>If the server broadcasts 1000 items sequentially (1, 2, 3... 1000), and you want item 1, but you just missed it, you have to wait for the whole cycle. This is slow.</p>

              <h4>4. The Solution: Multi-Disk Approach</h4>
              <p>Not all data is equally important. Some data (Stock Quotes, Weather) is "Hot" (Popular). Some (Old News) is "Cold".
                <br>The Broadcast Disk model simulates multiple disks of different sizes spinning at different speeds.</p>
              <ul>
                <li><strong>Fast Disk:</strong> Small, contains Hot Data. Spins fast (Repeated often).</li>
                <li><strong>Slow Disk:</strong> Large, contains Cold Data. Spins slow (Repeated rarely).</li>
              </ul>

              <h4>5. Broadcast Schedule</h4>
              <p>The server interleaves chunks from the fast and slow disks.
                <br><em>Example:</em> Hot Data = A, Cold Data = B, C, D.
                <br><strong>Flat Schedule:</strong> A, B, C, D, A, B, C, D... (A appears 25% of time).
                <br><strong>Skewed Schedule:</strong> A, A, B, A, A, C, A, A, D... (A appears 66% of time).</p>

              <h4>6. Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <circle cx="100" cy="75" r="40" fill="#ffccbc" stroke="#d84315"/>
                  <text x="100" y="80" text-anchor="middle">Hot</text>
                  <text x="100" y="130" text-anchor="middle" font-size="10">Repeated 4x</text>

                  <circle cx="250" cy="75" r="60" fill="#b2dfdb" stroke="#00695c"/>
                  <text x="250" y="80" text-anchor="middle">Cold</text>
                  <text x="250" y="150" text-anchor="middle" font-size="10">Repeated 1x</text>
                  
                  <path d="M 150 75 L 180 75" stroke="#333" stroke-width="2" marker-end="url(#arrow-mip)"/>
                </svg>
              </div>

              <h4>7. Benefits</h4>
              <ul>
                <li><strong>Scalability:</strong> Performance doesn't degrade with more users.</li>
                <li><strong>Responsiveness:</strong> Popular data is delivered very quickly.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> The Broadcast Disk model optimizes the average access time by prioritizing popular data, making it ideal for asymmetric mobile networks.
              </div>
            </div>
          `},{type:"b",question:"Explain the synchronization protocol in mobile computing.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Synchronization</strong> is the process of maintaining consistency between a mobile device's local data (replica) and the central server's data (origin). Since mobile devices work offline, data diverges and must be reconciled.</p>

              <h4>2. The Challenge</h4>
              <p>Standard database protocols like <strong>Two-Phase Commit (2PC)</strong> are "Blocking". If one node is offline, the whole system waits. This is unacceptable in mobile computing.</p>

              <h4>3. Protocol Types</h4>
              
              <h5>A. Pessimistic Synchronization</h5>
              <p>Prevents conflicts before they happen.</p>
              <ul>
                <li><strong>Locking:</strong> If I edit a file on my phone, the server locks it. No one else can edit it until I sync.</li>
                <li><em>Con:</em> Very restrictive. If I lose my phone, the file is locked forever.</li>
              </ul>

              <h5>B. Optimistic Synchronization (Preferred for Mobile)</h5>
              <p>Allows conflicts to happen, then fixes them later.</p>
              <ul>
                <li><strong>Operation:</strong> I edit locally. You edit locally. We both sync.</li>
                <li><strong>Conflict Detection:</strong> The server checks version vectors or timestamps.</li>
                <li><strong>Conflict Resolution:</strong>
                  <ul>
                    <li><em>Server Wins:</em> Mobile changes discarded.</li>
                    <li><em>Client Wins:</em> Server overwritten.</li>
                    <li><em>Manual:</em> User decides.</li>
                  </ul>
                </li>
              </ul>

              <h4>4. SyncML (Synchronization Markup Language)</h4>
              <p>The industry standard protocol.</p>
              <ul>
                <li><strong>Step 1: Initialization.</strong> Client sends authentication and device info.</li>
                <li><strong>Step 2: Client Modifications.</strong> Client sends "I added Contact A, Deleted Contact B".</li>
                <li><strong>Step 3: Server Modifications.</strong> Server sends "I updated Contact C".</li>
                <li><strong>Step 4: Map Acknowledgement.</strong> Confirming IDs are mapped correctly.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> Mobile synchronization relies on optimistic protocols and standards like SyncML to handle the disconnected nature of mobile devices, prioritizing availability over strict consistency.
              </div>
            </div>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain AODV Routing Protocol.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a popular routing protocol for MANETs. It is a <strong>Reactive</strong> (On-Demand) protocol, meaning it only finds a route when a node actually needs to send data.</p>

              <h4>2. Key Concepts</h4>
              <ul>
                <li><strong>Reactive:</strong> No permanent routing table maintenance. Saves battery and bandwidth.</li>
                <li><strong>Sequence Numbers:</strong> Borrowed from DSDV. Ensures routes are fresh and loop-free.</li>
                <li><strong>Hop-by-Hop:</strong> Unlike DSR, packets don't carry the full path. They just know the "Next Hop".</li>
              </ul>

              <h4>3. Operation Phases</h4>

              <h5>Phase 1: Route Discovery (RREQ & RREP)</h5>
              <p>When Node S wants to send to Node D:</p>
              <ol>
                <li><strong>Broadcast RREQ:</strong> S broadcasts a <strong>Route Request (RREQ)</strong> packet.
                  <br><em>Contains:</em> Source IP, Dest IP, Source Seq#, Dest Seq#, Hop Count.</li>
                <li><strong>Reverse Path Setup:</strong> Intermediate nodes (A, B) receive RREQ. They record "To go back to S, go to previous node". This sets up the return path.</li>
                <li><strong>Reach Destination:</strong> RREQ reaches D (or a node that knows D).</li>
                <li><strong>Unicast RREP:</strong> D sends a <strong>Route Reply (RREP)</strong> back to S along the reverse path.</li>
                <li><strong>Forward Path Setup:</strong> As RREP travels back, nodes record "To go to D, go to next node".</li>
              </ol>

              <h5>Phase 2: Route Maintenance (RERR)</h5>
              <p>Routes break when nodes move.</p>
              <ul>
                <li><strong>Hello Messages:</strong> Nodes periodically say "Hello" to neighbors. If no Hello, link is dead.</li>
                <li><strong>RERR (Route Error):</strong> If a link breaks, the detecting node sends an RERR to S. S must restart discovery.</li>
              </ul>

              <h4>4. AODV vs DSR Comparison</h4>
              <table class="comparison-table">
                <tr><th>Feature</th><th>AODV</th><th>DSR</th></tr>
                <tr><td>Routing Strategy</td><td>Hop-by-Hop (Table based)</td><td>Source Routing (Header based)</td></tr>
                <tr><td>Overhead</td><td>Low (Small headers)</td><td>High (Full path in header)</td></tr>
                <tr><td>Scalability</td><td>Good for large networks</td><td>Poor for large networks</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> AODV is the industry standard for general-purpose MANETs because it balances the low overhead of reactive routing with the efficiency of hop-by-hop forwarding.
              </div>
            </div>
          `},{type:"b",question:"Discuss Security Issues in MANETs.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Mobile Ad-hoc Networks (MANETs) are inherently insecure compared to wired or infrastructure-based wireless networks. The lack of a central authority (like a Base Station) makes them vulnerable.</p>

              <h4>2. Why are MANETs Vulnerable?</h4>
              <ul>
                <li><strong>Open Medium:</strong> Radio waves are broadcast. Anyone with an antenna can eavesdrop or jam the signal.</li>
                <li><strong>Dynamic Topology:</strong> Nodes join and leave constantly. It's hard to tell who is a friend and who is an attacker.</li>
                <li><strong>Lack of Central Authority:</strong> No central server to issue certificates or ban bad users.</li>
                <li><strong>Resource Constraints:</strong> Heavy encryption algorithms drain battery and CPU, so nodes often use weak security.</li>
              </ul>

              <h4>3. Specific Attacks</h4>

              <h5>A. Routing Attacks (Network Layer)</h5>
              <ul>
                <li><strong>Blackhole Attack:</strong> A malicious node claims "I have the shortest path to D!". Source sends packets to it. It drops them all.</li>
                <li><strong>Grayhole Attack:</strong> Drops packets selectively (e.g., drops data but forwards routing packets) to avoid detection.</li>
                <li><strong>Wormhole Attack:</strong> Two attackers connect via a fast private link. They tunnel packets between distant parts of the network, confusing the routing protocol.</li>
              </ul>

              <h5>B. Denial of Service (DoS)</h5>
              <ul>
                <li><strong>Jamming:</strong> Flooding the frequency with noise.</li>
                <li><strong>Battery Exhaustion (Sleep Deprivation):</strong> Constantly sending useless requests to a victim node so it cannot sleep, draining its battery.</li>
              </ul>

              <h5>C. Impersonation</h5>
              <ul>
                <li><strong>Sybil Attack:</strong> A single attacker creates multiple fake identities (nodes) to rig voting or reputation systems.</li>
              </ul>

              <h4>4. Security Solutions</h4>
              <ul>
                <li><strong>Trust Management:</strong> Nodes rate each other. "A dropped my packet, so A is bad."</li>
                <li><strong>Secure Routing Protocols:</strong> SAODV (Secure AODV) uses digital signatures to verify route messages.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> Security in MANETs is a trade-off. We must balance the need for protection against the limited battery and processing power of mobile devices.
              </div>
            </div>
          `}]}]},W0={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 3",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Differentiate between User Mobility and Device Portability.",answer:"<strong>User Mobility:</strong> The user can move between different physical locations and use different devices (e.g., logging into Gmail from any PC).<br/><strong>Device Portability:</strong> The device itself can be moved to different locations while maintaining connectivity (e.g., a smartphone)."},{unit:"I",id:2,question:"What is Spread Spectrum?",answer:"<strong>Spread Spectrum:</strong> A technique where a signal is transmitted on a bandwidth much larger than the frequency content of the original information. This minimizes interference, prevents jamming, and improves security (e.g., CDMA)."},{unit:"II",id:3,question:"What is Frequency Reuse?",answer:"<strong>Frequency Reuse:</strong> The practice of using the same radio frequencies in different geographic areas (cells) that are separated by sufficient distance to avoid interference. This increases the total capacity of the network."},{unit:"II",id:4,question:"Define Agent Advertisement.",answer:"<strong>Agent Advertisement:</strong> A method in Mobile IP where Home Agents (HA) and Foreign Agents (FA) periodically broadcast their presence (using ICMP Router Discovery) to let Mobile Nodes know which network they are currently in."},{unit:"III",id:5,question:"What is Fast Retransmit?",answer:"<strong>Fast Retransmit:</strong> A TCP enhancement where the sender retransmits a packet immediately after receiving 3 duplicate ACKs, without waiting for the timeout timer to expire. It assumes the packet was lost, not delayed."},{unit:"III",id:6,question:"Define Transaction Oriented TCP.",answer:"<strong>T-TCP:</strong> A TCP extension designed to make TCP more efficient for short transactions (request-response). It combines the connection setup (SYN), data transfer, and connection teardown (FIN) into fewer packets."},{unit:"IV",id:7,question:"What is Indexing in data dissemination?",answer:"<strong>Indexing:</strong> A power-saving technique where a directory (index) of data locations is broadcasted before the actual data. Clients read the index, sleep, and wake up only when their desired data arrives."},{unit:"IV",id:8,question:"What is Cache Invalidation?",answer:"<strong>Cache Invalidation:</strong> The process of ensuring data consistency. When data on the server changes, the server must notify clients to remove or mark as invalid their local cached copies."},{unit:"V",id:9,question:"What is a Wormhole Attack?",answer:"<strong>Wormhole Attack:</strong> A severe attack in MANETs where two attackers connected by a high-speed link record packets at one location and replay them at another, creating a false shortcut that disrupts routing."},{unit:"V",id:10,question:"Define J2ME.",answer:"<strong>Java 2 Micro Edition (J2ME):</strong> A Java platform designed for embedded systems and mobile devices (like old Nokias). It provides a lightweight environment (KVM) for running applications with limited memory and processing power."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Discuss the evolution of Mobile Communication from 1G to 5G.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Mobile communication has evolved rapidly over the last four decades, with a new generation appearing roughly every 10 years. Each generation brought significant improvements in speed, capacity, and services.</p>

              <h4>2. The Generations (1G to 5G)</h4>

              <h5>A. 1G: First Generation (1980s) - "Analog Voice"</h5>
              <ul>
                <li><strong>Technology:</strong> AMPS (Advanced Mobile Phone System).</li>
                <li><strong>Service:</strong> Voice calls only.</li>
                <li><strong>Key Features:</strong> Analog signals, large brick phones, poor battery life, no security (easy to eavesdrop).</li>
                <li><strong>Speed:</strong> N/A (Analog).</li>
              </ul>

              <h5>B. 2G: Second Generation (1990s) - "Digital Voice & Text"</h5>
              <ul>
                <li><strong>Technology:</strong> GSM (Global System for Mobile) and CDMA.</li>
                <li><strong>Service:</strong> Digital Voice, SMS (Short Message Service). Later 2.5G (GPRS) added basic internet.</li>
                <li><strong>Key Features:</strong> Encryption (Security), SIM cards, Roaming.</li>
                <li><strong>Speed:</strong> 9.6 Kbps to 64 Kbps.</li>
              </ul>

              <h5>C. 3G: Third Generation (2000s) - "Mobile Internet"</h5>
              <ul>
                <li><strong>Technology:</strong> UMTS, CDMA2000.</li>
                <li><strong>Service:</strong> High-speed web browsing, Video calling, Email.</li>
                <li><strong>Key Features:</strong> Packet switching became dominant. Smartphones (iPhone) emerged.</li>
                <li><strong>Speed:</strong> 2 Mbps to 14 Mbps.</li>
              </ul>

              <h5>D. 4G: Fourth Generation (2010s) - "Broadband & Streaming"</h5>
              <ul>
                <li><strong>Technology:</strong> LTE (Long Term Evolution), WiMAX.</li>
                <li><strong>Service:</strong> HD Video Streaming, Online Gaming, IP Telephony (VoLTE).</li>
                <li><strong>Key Features:</strong> All-IP network (Voice is just data). Low latency.</li>
                <li><strong>Speed:</strong> 100 Mbps to 1 Gbps.</li>
              </ul>

              <h5>E. 5G: Fifth Generation (2020s) - "IoT & Ultra-Speed"</h5>
              <ul>
                <li><strong>Technology:</strong> NR (New Radio), mmWave.</li>
                <li><strong>Service:</strong> Massive IoT, Autonomous Vehicles, Remote Surgery.</li>
                <li><strong>Key Features:</strong> Ultra-low latency (<1ms), Massive device density, Network Slicing.</li>
                <li><strong>Speed:</strong> Up to 20 Gbps.</li>
              </ul>

              <h4>3. Comparison Table</h4>
              <table class="comparison-table">
                <tr><th>Gen</th><th>Era</th><th>Primary Service</th><th>Weakness</th></tr>
                <tr><td>1G</td><td>80s</td><td>Voice</td><td>No Security</td></tr>
                <tr><td>2G</td><td>90s</td><td>SMS, Voice</td><td>Slow Data</td></tr>
                <tr><td>3G</td><td>00s</td><td>Web, Video</td><td>Battery Drain</td></tr>
                <tr><td>4G</td><td>10s</td><td>Streaming</td><td>Spectrum Congestion</td></tr>
                <tr><td>5G</td><td>20s</td><td>IoT, VR/AR</td><td>Short Range (mmWave)</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> The evolution has shifted focus from connecting <em>places</em> (1G) to connecting <em>people</em> (2G/3G) to connecting <em>things</em> (4G/5G), driving the digital transformation of society.
              </div>
            </div>
          `},{type:"b",question:"Differentiate between Circuit Switching and Packet Switching.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Switching is the method used to route data/voice from source to destination. The two fundamental types are <strong>Circuit Switching</strong> (Traditional Telecom) and <strong>Packet Switching</strong> (Internet).</p>

              <h4>2. Circuit Switching (The "Reserved Lane")</h4>
              <p>Before communication starts, a dedicated physical path (circuit) is established.</p>
              <ul>
                <li><strong>Connection-Oriented:</strong> Setup -> Transfer -> Teardown.</li>
                <li><strong>Resource Reservation:</strong> Bandwidth is reserved for the entire duration. If you stop talking, the line sits idle (Wasted).</li>
                <li><strong>Reliability:</strong> Constant delay, no jitter. Good for real-time voice.</li>
                <li><em>Example:</em> PSTN (Landline), GSM Voice.</li>
              </ul>

              <h4>3. Packet Switching (The "Postal Service")</h4>
              <p>Data is broken into small chunks called <strong>Packets</strong>. Each packet travels independently.</p>
              <ul>
                <li><strong>Connectionless:</strong> No dedicated path. Packets may take different routes.</li>
                <li><strong>Resource Sharing:</strong> Bandwidth is shared. If you are silent, others use the line.</li>
                <li><strong>Efficiency:</strong> High utilization of the network.</li>
                <li><strong>Reliability:</strong> Variable delay (Jitter). Packets may arrive out of order.</li>
                <li><em>Example:</em> Internet (IP), GPRS, LTE.</li>
              </ul>

              <h4>4. Detailed Comparison</h4>
              <table class="comparison-table">
                <tr><th>Feature</th><th>Circuit Switching</th><th>Packet Switching</th></tr>
                <tr><td><strong>Path</strong></td><td>Physical Dedicated Path</td><td>Virtual / No fixed path</td></tr>
                <tr><td><strong>Bandwidth</strong></td><td>Fixed & Reserved</td><td>Dynamic & Shared</td></tr>
                <tr><td><strong>Wastage</strong></td><td>High (during silence)</td><td>Low</td></tr>
                <tr><td><strong>Delay</strong></td><td>Fixed (Low)</td><td>Variable (High)</td></tr>
                <tr><td><strong>Cost</strong></td><td>Expensive (per minute)</td><td>Cheap (per MB)</td></tr>
                <tr><td><strong>Best For</strong></td><td>Voice Calls</td><td>Data / Internet</td></tr>
              </table>

              <h4>5. Diagram Representation</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <!-- Circuit -->
                  <text x="120" y="30" text-anchor="middle" font-weight="bold">Circuit Switching</text>
                  <line x1="20" y1="80" x2="220" y2="80" stroke="#d84315" stroke-width="4"/>
                  <text x="120" y="100" text-anchor="middle" font-size="10">Dedicated Pipe</text>

                  <!-- Packet -->
                  <text x="370" y="30" text-anchor="middle" font-weight="bold">Packet Switching</text>
                  <rect x="270" y="70" width="30" height="20" fill="#bbdefb" stroke="#1976d2"/>
                  <rect x="320" y="70" width="30" height="20" fill="#bbdefb" stroke="#1976d2"/>
                  <rect x="400" y="70" width="30" height="20" fill="#bbdefb" stroke="#1976d2"/>
                  <text x="370" y="110" text-anchor="middle" font-size="10">Shared Medium</text>
                </svg>
              </div>

              <div class="conclusion">
                <strong>Conclusion:</strong> While Circuit Switching offers quality guarantees for voice, Packet Switching is the foundation of modern data networks due to its superior efficiency and scalability.
              </div>
            </div>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain the DHCP protocol and its role in mobility.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Dynamic Host Configuration Protocol (DHCP)</strong> is a network management protocol used to automatically assign IP addresses and other parameters (Subnet Mask, Gateway) to devices connecting to a network.</p>

              <h4>2. The DORA Process</h4>
              <p>DHCP works in 4 steps:</p>
              <ol>
                <li><strong>Discover (Broadcast):</strong> The client shouts "Is there a DHCP server here?" (IP: 0.0.0.0 -> 255.255.255.255).</li>
                <li><strong>Offer (Unicast/Broadcast):</strong> The server replies "Yes, I have IP 192.168.1.5 available."</li>
                <li><strong>Request (Broadcast):</strong> The client says "Great, I'll take 192.168.1.5."</li>
                <li><strong>Acknowledge (Unicast):</strong> The server confirms "Okay, it's yours for 24 hours."</li>
              </ol>

              <h4>3. Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <rect x="50" y="20" width="60" height="40" fill="#e1bee7" stroke="#8e24aa"/>
                  <text x="80" y="45" text-anchor="middle">Client</text>
                  
                  <rect x="290" y="20" width="60" height="40" fill="#c5cae9" stroke="#3f51b5"/>
                  <text x="320" y="45" text-anchor="middle">Server</text>

                  <line x1="80" y1="60" x2="80" y2="230" stroke="#999" stroke-dasharray="5,5"/>
                  <line x1="320" y1="60" x2="320" y2="230" stroke="#999" stroke-dasharray="5,5"/>

                  <text x="200" y="85" text-anchor="middle" font-size="12">1. Discover</text>
                  <line x1="80" y1="90" x2="320" y2="90" stroke="#333" marker-end="url(#arrow-mip)"/>

                  <text x="200" y="125" text-anchor="middle" font-size="12">2. Offer</text>
                  <line x1="320" y1="130" x2="80" y2="130" stroke="#333" marker-end="url(#arrow-mip)"/>

                  <text x="200" y="165" text-anchor="middle" font-size="12">3. Request</text>
                  <line x1="80" y1="170" x2="320" y2="170" stroke="#333" marker-end="url(#arrow-mip)"/>

                  <text x="200" y="205" text-anchor="middle" font-size="12">4. ACK</text>
                  <line x1="320" y1="210" x2="80" y2="210" stroke="#333" marker-end="url(#arrow-mip)"/>
                </svg>
              </div>

              <h4>4. Role in Mobility (Mobile IP)</h4>
              <p>DHCP is crucial for <strong>Mobile IP</strong> in two ways:</p>
              <ul>
                <li><strong>Assigning CoA:</strong> When a Mobile Node (MN) enters a foreign network, it needs a Care-of Address (CoA). It can use DHCP to obtain this address from the foreign network's server. This is called a <strong>Co-located CoA</strong>.</li>
                <li><strong>Mobility Support:</strong> DHCP allows a device to plug into any network and get a valid configuration instantly without manual setup, enabling basic portability.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> DHCP automates the complex task of network configuration, making it a cornerstone of plug-and-play connectivity and a key enabler for mobile roaming.
              </div>
            </div>
          `},{type:"b",question:"Discuss the entities and terminology of Mobile IP.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Mobile IP (RFC 3344)</strong> is an extension of the Internet Protocol (IP) that allows a user to move from one network to another while maintaining the same permanent IP address. This transparency is achieved through specific entities.</p>

              <h4>2. Key Entities</h4>

              <h5>A. Mobile Node (MN)</h5>
              <p>The device (laptop, phone) that changes its point of attachment.
                <br><em>Role:</em> It wants to keep its connection alive while moving.</p>

              <h5>B. Home Agent (HA)</h5>
              <p>A router on the MN's <strong>Home Network</strong>.
                <br><em>Role:</em> It acts as the anchor. It intercepts packets destined for the MN and tunnels them to the MN's current location.</p>

              <h5>C. Foreign Agent (FA)</h5>
              <p>A router on the <strong>Visited (Foreign) Network</strong>.
                <br><em>Role:</em> It acts as the endpoint of the tunnel. It receives packets from the HA, decapsulates them, and delivers them to the MN.</p>

              <h5>D. Correspondent Node (CN)</h5>
              <p>The peer device communicating with the MN (e.g., a Web Server).
                <br><em>Role:</em> It is unaware of the MN's mobility. It sends packets to the MN's Home IP.</p>

              <h4>3. Key Addresses</h4>
              <ul>
                <li><strong>Home Address:</strong> The permanent IP address assigned to the MN. It never changes.</li>
                <li><strong>Care-of Address (CoA):</strong> A temporary IP address that identifies the MN's current location in the foreign network.
                  <ul>
                    <li><em>Foreign Agent CoA:</em> The IP address of the FA.</li>
                    <li><em>Co-located CoA:</em> A temporary IP assigned directly to the MN (via DHCP).</li>
                  </ul>
                </li>
              </ul>

              <h4>4. Relationship Diagram</h4>
              <div class="diagram-container">
                <div class="diagram-row">
                  <div class="diagram-box">CN</div>
                  <div class="diagram-arrow">➡</div>
                  <div class="diagram-box">HA (Home)</div>
                  <div class="diagram-arrow">➡ Tunnel ➡</div>
                  <div class="diagram-box">FA (Foreign)</div>
                  <div class="diagram-arrow">➡</div>
                  <div class="diagram-box">MN</div>
                </div>
              </div>

              <div class="conclusion">
                <strong>Conclusion:</strong> These entities work together to create an illusion of stability. The CN talks to the Home Address, while the HA and FA handle the complex logistics of forwarding packets to the actual location.
              </div>
            </div>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain the Bluetooth Protocol Stack and its architecture.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Bluetooth</strong> (IEEE 802.15.1) is a short-range wireless technology for Personal Area Networks (PANs). It replaces cables for devices like headphones, mice, and keyboards.</p>

              <h4>2. Architecture (Piconet & Scatternet)</h4>
              <ul>
                <li><strong>Piconet:</strong> The basic unit. One <strong>Master</strong> device controls up to 7 active <strong>Slave</strong> devices.</li>
                <li><strong>Scatternet:</strong> Multiple overlapping Piconets. A slave in one Piconet can be a master in another.</li>
              </ul>

              <h4>3. The Protocol Stack</h4>
              <p>The stack is divided into core protocols and profile layers.</p>

              <div class="diagram-container">
                <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <!-- Application Group -->
                  <rect x="50" y="20" width="300" height="40" fill="#ffccbc" stroke="#d84315"/>
                  <text x="200" y="45" text-anchor="middle" font-weight="bold">Applications / Profiles</text>

                  <!-- Middleware Group -->
                  <rect x="50" y="70" width="300" height="80" fill="#fff9c4" stroke="#fbc02d"/>
                  <text x="200" y="90" text-anchor="middle" font-weight="bold">Middleware Layer</text>
                  <rect x="60" y="100" width="80" height="30" fill="white" stroke="#666"/><text x="100" y="120" text-anchor="middle" font-size="10">RFCOMM</text>
                  <rect x="150" y="100" width="80" height="30" fill="white" stroke="#666"/><text x="190" y="120" text-anchor="middle" font-size="10">SDP</text>
                  <rect x="240" y="100" width="80" height="30" fill="white" stroke="#666"/><text x="280" y="120" text-anchor="middle" font-size="10">TCS</text>

                  <!-- L2CAP -->
                  <rect x="50" y="160" width="300" height="40" fill="#bbdefb" stroke="#1976d2"/>
                  <text x="200" y="185" text-anchor="middle" font-weight="bold">L2CAP</text>

                  <!-- HCI -->
                  <rect x="50" y="210" width="300" height="30" fill="#e0e0e0" stroke="#666"/>
                  <text x="200" y="230" text-anchor="middle" font-size="12">Host Controller Interface (HCI)</text>

                  <!-- Core Group -->
                  <rect x="50" y="250" width="300" height="80" fill="#c8e6c9" stroke="#388e3c"/>
                  <text x="200" y="270" text-anchor="middle" font-weight="bold">Core Hardware</text>
                  <rect x="60" y="280" width="130" height="30" fill="white" stroke="#666"/><text x="125" y="300" text-anchor="middle" font-size="10">Link Manager (LMP)</text>
                  <rect x="200" y="280" width="130" height="30" fill="white" stroke="#666"/><text x="265" y="300" text-anchor="middle" font-size="10">Baseband / Radio</text>
                </svg>
              </div>

              <h4>4. Layer Functions</h4>
              <ul>
                <li><strong>Radio Layer:</strong> Handles the physical transmission (FHSS - Frequency Hopping Spread Spectrum).</li>
                <li><strong>Baseband Layer:</strong> Manages connection establishment, addressing, and packet formatting.</li>
                <li><strong>Link Manager Protocol (LMP):</strong> Handles link setup, security (pairing/encryption), and power modes (Sniff, Hold, Park).</li>
                <li><strong>HCI (Host Controller Interface):</strong> The interface between the hardware (Bluetooth chip) and the software driver.</li>
                <li><strong>L2CAP (Logical Link Control):</strong> Multiplexes data from upper layers, segments large packets, and handles QoS.</li>
                <li><strong>RFCOMM:</strong> Emulates a serial port (RS-232) over wireless. Used by many legacy apps.</li>
                <li><strong>SDP (Service Discovery):</strong> Allows devices to discover what services another device offers (e.g., "Do you support Audio?").</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> The Bluetooth stack is designed for low power and low cost, providing a flexible layered architecture to support various profiles like Audio (A2DP), File Transfer (FTP), and Input Devices (HID).
              </div>
            </div>
          `},{type:"b",question:"Explain the WAP (Wireless Application Protocol) Architecture.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>WAP</strong> was the first global standard to bring internet content to mobile phones (before modern smartphones). It was designed to handle the limitations of early mobile networks (low bandwidth, high latency) and devices (small screens, low CPU).</p>

              <h4>2. The WAP Model (Gateway Approach)</h4>
              <p>Unlike the standard web where a browser talks directly to a server, WAP uses a <strong>WAP Gateway</strong> in the middle.</p>
              <div class="diagram-container">
                <div class="diagram-row">
                  <div class="diagram-box">Mobile Device</div>
                  <div class="diagram-arrow">⬌ WAP ⬌</div>
                  <div class="diagram-box">WAP Gateway</div>
                  <div class="diagram-arrow">⬌ HTTP ⬌</div>
                  <div class="diagram-box">Web Server</div>
                </div>
              </div>
              <p><strong>Role of Gateway:</strong>
                <br>- <strong>Protocol Translation:</strong> Converts WAP requests (WSP) to HTTP requests.
                <br>- <strong>Content Encoding:</strong> Compresses text (WML) into binary to save bandwidth.</p>

              <h4>3. WAP Protocol Stack (The "WAP Gap")</h4>
              <p>WAP defined its own stack to replace TCP/IP.</p>
              <table class="comparison-table">
                <tr><th>Layer</th><th>WAP Protocol</th><th>Internet Equivalent</th></tr>
                <tr><td>Application</td><td><strong>WAE</strong> (Wireless App Env)</td><td>HTML / JS</td></tr>
                <tr><td>Session</td><td><strong>WSP</strong> (Wireless Session)</td><td>HTTP</td></tr>
                <tr><td>Transaction</td><td><strong>WTP</strong> (Wireless Transaction)</td><td>-</td></tr>
                <tr><td>Security</td><td><strong>WTLS</strong> (Wireless TLS)</td><td>TLS / SSL</td></tr>
                <tr><td>Transport</td><td><strong>WDP</strong> (Wireless Datagram)</td><td>UDP / TCP</td></tr>
              </table>

              <h4>4. Layer Details</h4>
              <ul>
                <li><strong>WAE:</strong> Included WML (Wireless Markup Language) instead of HTML. WML was text-based and card-oriented.</li>
                <li><strong>WTLS:</strong> Provided end-to-end security, but had a vulnerability at the Gateway where data had to be decrypted and re-encrypted (The "WAP Gap").</li>
                <li><strong>WTP:</strong> Provided reliable request/response without the overhead of TCP.</li>
              </ul>

              <div class="conclusion">
                <strong>Conclusion:</strong> While WAP is now obsolete (replaced by full HTTP/TCP on 4G), it was a crucial stepping stone that proved the internet could be accessed on mobile devices.
              </div>
            </div>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Discuss the issues in Client-Server computing in mobile environments.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>The traditional Client-Server model assumes a fast, reliable, and permanent connection (like Ethernet). Mobile environments violate these assumptions, introducing significant challenges.</p>

              <h4>2. Key Issues</h4>

              <h5>A. Bandwidth & Latency</h5>
              <ul>
                <li><strong>Low Bandwidth:</strong> Wireless is slower than wired. Sending large data takes time.</li>
                <li><strong>High Latency:</strong> Round-trip time (RTT) is high. "Chatty" protocols (many small requests) perform poorly.</li>
                <li><strong>Asymmetry:</strong> Downlink (Server to Phone) is fast. Uplink (Phone to Server) is slow.</li>
              </ul>

              <h5>B. Reliability & Disconnection</h5>
              <ul>
                <li><strong>Frequent Disconnections:</strong> Users enter tunnels or dead zones. Active transactions may fail or hang.</li>
                <li><strong>Packet Loss:</strong> High error rates due to interference.</li>
              </ul>

              <h5>C. Device Constraints</h5>
              <ul>
                <li><strong>Battery:</strong> Continuous network usage drains battery. The client cannot stay "Always On".</li>
                <li><strong>Storage/CPU:</strong> Mobile clients cannot process or store huge datasets like a desktop.</li>
              </ul>

              <h4>3. Adaptation Strategies (Solutions)</h4>
              
              <h5>A. Caching</h5>
              <p>Store data locally.
                <br><em>Benefit:</em> Reduces network calls, saves battery, works offline.
                <br><em>Challenge:</em> Keeping cache consistent (Invalidation).</p>

              <h5>B. Mobile Middleware (Proxies)</h5>
              <p>Place a proxy server near the mobile.
                <br><em>Role:</em> The proxy filters data, compresses images, and batches requests to reduce traffic.</p>

              <h5>C. Asynchronous Operation</h5>
              <p>Don't block the UI. Let the user continue working while the network request processes in the background (Queued RPC).</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> Mobile Client-Server systems must be "Adaptive". They must detect network quality and switch between "Online", "Weak", and "Offline" modes dynamically.
              </div>
            </div>
          `},{type:"b",question:"Explain the different Data Synchronization protocols.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Synchronization ensures that the data on a mobile device (Replica) matches the data on the server (Origin). It is essential for offline usage.</p>

              <h4>2. Classification of Protocols</h4>

              <h5>A. Pessimistic (Blocking)</h5>
              <p>Assumes conflicts <em>will</em> happen, so it prevents them.</p>
              <ul>
                <li><strong>Mechanism:</strong> Locks the data item on the server before the client can edit it.</li>
                <li><strong>Verdict:</strong> <strong>Bad for Mobile.</strong> If a mobile user locks a file and goes offline, no one else can work.</li>
              </ul>

              <h5>B. Optimistic (Non-Blocking)</h5>
              <p>Assumes conflicts are <em>rare</em>.</p>
              <ul>
                <li><strong>Mechanism:</strong> Allows clients to edit local copies freely. When they reconnect, the system checks for conflicts.</li>
                <li><strong>Verdict:</strong> <strong>Good for Mobile.</strong> Supports high availability and offline work.</li>
              </ul>

              <h4>3. Synchronization Modes</h4>
              <table class="comparison-table">
                <tr><th>Mode</th><th>Description</th><th>Use Case</th></tr>
                <tr><td><strong>Two-Way Sync</strong></td><td>Client and Server exchange all updates. Both become identical.</td><td>Standard full sync.</td></tr>
                <tr><td><strong>One-Way (Client-only)</strong></td><td>Client sends changes. Server updates. Client doesn't get server changes.</td><td>Uploading logs/photos.</td></tr>
                <tr><td><strong>Slow Sync</strong></td><td>Client sends <em>all</em> data. Server compares every record.</td><td>Reliable but high bandwidth. Used when errors occur.</td></tr>
                <tr><td><strong>Fast Sync</strong></td><td>Client sends only <em>changed</em> records (deltas).</td><td>Efficient. Used for daily sync.</td></tr>
              </table>

              <h4>4. SyncML (OMA Data Sync)</h4>
              <p>The industry standard protocol. It uses XML messages to negotiate authentication, device capabilities, and data exchange, ensuring interoperability between different devices and servers.</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> Optimistic, delta-based synchronization (Fast Sync) is the preferred approach for mobile computing to minimize bandwidth usage and handle disconnections.
              </div>
            </div>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain the TORA (Temporally Ordered Routing Algorithm).",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>TORA</strong> is a distributed routing protocol for MANETs. Unlike AODV (which finds a single path), TORA is designed to maintain <strong>multiple paths</strong> to the destination.</p>

              <h4>2. Key Concept: The "Height" Metric</h4>
              <p>TORA visualizes the network as a collection of nodes with different "heights" (like a terrain map).</p>
              <ul>
                <li><strong>Destination:</strong> Has the lowest height (The bottom of the valley).</li>
                <li><strong>Source:</strong> Has a higher height.</li>
                <li><strong>Flow:</strong> Data flows "downhill" from high to low.</li>
              </ul>
              <p>This creates a <strong>Directed Acyclic Graph (DAG)</strong> rooted at the destination.</p>

              <h4>3. Operations</h4>

              <h5>A. Route Creation (Query/Update)</h5>
              <p>When a node needs a route, it broadcasts a Query. The destination (or a node that knows it) replies with an Update, setting its height to 0. Neighbors set their height to 1, and so on. This builds the "slope".</p>

              <h5>B. Route Maintenance (Link Failure)</h5>
              <p>This is TORA's strength. If a link breaks (the path downhill is blocked):</p>
              <ul>
                <li>The node raises its own "height" to be higher than its neighbors.</li>
                <li>The flow reverses locally. Data flows to a neighbor who has a path.</li>
                <li>This local adjustment limits the spread of control messages.</li>
              </ul>

              <h4>4. Pros & Cons</h4>
              <table class="comparison-table">
                <tr><th>Pros</th><th>Cons</th></tr>
                <tr><td>Supports multiple paths (Robust).</td><td>Complex to implement.</td></tr>
                <tr><td>Localized reaction to failure (Scalable).</td><td>Can suffer from oscillations (routing loops).</td></tr>
                <tr><td>Good for dense, dynamic networks.</td><td>Requires synchronized clocks (for height metric).</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> TORA is excellent for highly dynamic networks because it minimizes the control traffic needed to repair broken routes, trading complexity for stability.
              </div>
            </div>
          `},{type:"b",question:"Discuss the architecture of Android Mobile OS.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Android</strong> is an open-source, Linux-based operating system designed for mobile devices. Its architecture is a software stack divided into five main layers.</p>

              <h4>2. Architecture Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <!-- Apps -->
                  <rect x="50" y="20" width="300" height="40" fill="#81c784" stroke="#2e7d32"/>
                  <text x="200" y="45" text-anchor="middle" font-weight="bold" fill="white">System Apps</text>

                  <!-- Framework -->
                  <rect x="50" y="70" width="300" height="50" fill="#a5d6a7" stroke="#2e7d32"/>
                  <text x="200" y="100" text-anchor="middle" font-weight="bold">Java API Framework</text>

                  <!-- Libraries & Runtime -->
                  <rect x="50" y="130" width="140" height="80" fill="#c8e6c9" stroke="#388e3c"/>
                  <text x="120" y="175" text-anchor="middle" font-size="12">Native Libraries</text>
                  
                  <rect x="210" y="130" width="140" height="80" fill="#fff9c4" stroke="#fbc02d"/>
                  <text x="280" y="165" text-anchor="middle" font-size="12">Android Runtime</text>
                  <text x="280" y="185" text-anchor="middle" font-size="10">(ART / Dalvik)</text>

                  <!-- HAL -->
                  <rect x="50" y="220" width="300" height="30" fill="#e0e0e0" stroke="#666"/>
                  <text x="200" y="240" text-anchor="middle" font-size="12">Hardware Abstraction Layer (HAL)</text>

                  <!-- Kernel -->
                  <rect x="50" y="260" width="300" height="30" fill="#ef5350" stroke="#b71c1c"/>
                  <text x="200" y="280" text-anchor="middle" font-weight="bold" fill="white">Linux Kernel</text>
                </svg>
              </div>

              <h4>3. Layer Description</h4>

              <h5>A. Linux Kernel (The Foundation)</h5>
              <p>The bottom layer. It interacts with the hardware.
                <br><em>Functions:</em> Memory management, Process management, Drivers (Display, Camera, Audio), Power management.</p>

              <h5>B. Hardware Abstraction Layer (HAL)</h5>
              <p>Provides a standard interface for the upper layers to talk to the hardware without knowing the specific driver details.</p>

              <h5>C. Android Runtime (ART)</h5>
              <p>The engine that runs apps.
                <br><em>Key Feature:</em> Uses <strong>DEX</strong> files (bytecode optimized for mobile). Every app runs in its own process (Sandbox).</p>

              <h5>D. Native Libraries (C/C++)</h5>
              <p>Performance-critical libraries used by the system.
                <br><em>Examples:</em> SQLite (Database), OpenGL (Graphics), WebKit (Browser engine), SSL (Security).</p>

              <h5>E. Java API Framework</h5>
              <p>The toolkit used by developers to build apps.
                <br><em>Components:</em>
                <br>- <strong>Activity Manager:</strong> Manages app lifecycle.
                <br>- <strong>Notification Manager:</strong> Status bar alerts.
                <br>- <strong>Content Providers:</strong> Sharing data between apps.</p>

              <h5>F. System Apps</h5>
              <p>The top layer. Includes pre-installed apps (Dialer, Email, Calendar) and user-installed apps.</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> Android's layered architecture separates hardware concerns from app development, allowing it to run on a vast variety of devices while providing a rich API for developers.
              </div>
            </div>
          `}]}]},F0={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 4 (Advanced)",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is the Hidden Terminal Problem?",answer:"<strong>Hidden Terminal Problem:</strong> Occurs when two nodes (A and C) can hear the Access Point (B) but cannot hear each other. If both transmit to B simultaneously, a collision occurs at B."},{unit:"I",id:2,question:"Define Multipath Propagation.",answer:"<strong>Multipath Propagation:</strong> A phenomenon where radio signals reach the receiving antenna by two or more paths (reflection, diffraction) causing fading and interference."},{unit:"II",id:3,question:"What is Triangular Routing?",answer:"<strong>Triangular Routing:</strong> The inefficient path a packet takes in Mobile IP: Correspondent -> Home Agent -> Foreign Agent -> Mobile Node, instead of a direct path."},{unit:"II",id:4,question:"Define Slow Start in TCP.",answer:"<strong>Slow Start:</strong> A TCP congestion control algorithm where the sender starts with a small congestion window and doubles it every round-trip time (exponential growth) to gauge network capacity."},{unit:"III",id:5,question:"What is Selective Tuning?",answer:"<strong>Selective Tuning:</strong> A power-saving technique where the mobile device powers on its receiver only for short periods to receive the specific data it requested, staying in 'doze' mode otherwise."},{unit:"III",id:6,question:"Define Hoarding.",answer:"<strong>Hoarding:</strong> Prefetching large amounts of data into the mobile device's cache before a predicted disconnection (e.g., entering a tunnel) to allow continued operation."},{unit:"IV",id:7,question:"What is a ZRP (Zone Routing Protocol)?",answer:"<strong>ZRP:</strong> A hybrid MANET routing protocol. It uses proactive routing within a local 'zone' (neighborhood) and reactive routing for destinations outside the zone."},{unit:"IV",id:8,question:"What is the count-to-infinity problem?",answer:"<strong>Count-to-Infinity:</strong> A routing loop problem in distance-vector protocols where nodes endlessly increment the hop count to a unreachable destination."},{unit:"V",id:9,question:"Define MIDP in J2ME.",answer:"<strong>MIDP (Mobile Information Device Profile):</strong> A J2ME profile that defines the user interface, networking, and storage APIs for mobile phones (MIDlets)."},{unit:"V",id:10,question:"What is Bluetooth profile?",answer:"<strong>Bluetooth Profile:</strong> A specification that defines how devices use Bluetooth to achieve a specific task (e.g., A2DP for audio, HFP for hands-free calling)."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the Hidden and Exposed Terminal Problems in IEEE 802.11 and the solution (MACA).",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>In wireless networks, unlike wired Ethernet, nodes cannot always "hear" everyone else. This leads to unique collision problems known as the <strong>Hidden Terminal</strong> and <strong>Exposed Terminal</strong> problems.</p>

              <h4>2. The Hidden Terminal Problem</h4>
              <p><strong>Scenario:</strong> Node A and Node C want to send data to Node B.
                <br>A is in range of B. C is in range of B.
                <br>But <strong>A and C are out of range of each other</strong> (Hidden).</p>
              <ul>
                <li><strong>The Issue:</strong> A transmits to B. C listens, hears silence (because it can't hear A), and also transmits to B.</li>
                <li><strong>Result:</strong> Collision at B. Both packets are lost.</li>
              </ul>
              <div class="diagram-container">
                <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <circle cx="50" cy="50" r="30" fill="#bbdefb" stroke="#1976d2"/><text x="50" y="55" text-anchor="middle">A</text>
                  <circle cx="200" cy="50" r="30" fill="#e1bee7" stroke="#8e24aa"/><text x="200" y="55" text-anchor="middle">B</text>
                  <circle cx="350" cy="50" r="30" fill="#ffccbc" stroke="#d84315"/><text x="350" y="55" text-anchor="middle">C</text>
                  <path d="M 80 50 L 170 50" stroke="#333" stroke-dasharray="5,5" marker-end="url(#arrow-mip)"/>
                  <path d="M 320 50 L 230 50" stroke="#333" stroke-dasharray="5,5" marker-end="url(#arrow-mip)"/>
                  <text x="200" y="90" text-anchor="middle" font-size="10" fill="red">Collision!</text>
                </svg>
              </div>

              <h4>3. The Exposed Terminal Problem</h4>
              <p><strong>Scenario:</strong> Node B is sending to A. Node C wants to send to D.
                <br>C hears B's transmission.</p>
              <ul>
                <li><strong>The Issue:</strong> C senses the medium is busy (due to B) and waits.
                <br>However, C's transmission to D would <em>not</em> interfere with B's transmission to A (A is too far from C).</li>
                <li><strong>Result:</strong> Unnecessary waiting. Wasted bandwidth.</li>
              </ul>

              <h4>4. The Solution: MACA (Multiple Access with Collision Avoidance)</h4>
              <p>MACA uses a handshake protocol: <strong>RTS (Request to Send)</strong> and <strong>CTS (Clear to Send)</strong>.</p>
              
              <h5>How it fixes Hidden Terminal:</h5>
              <ol>
                <li>A sends <strong>RTS</strong> to B.</li>
                <li>B sends <strong>CTS</strong> back to A.</li>
                <li><strong>Crucial Step:</strong> C (the hidden node) hears the <strong>CTS</strong> from B.</li>
                <li>C realizes "B is about to receive data". C stays silent (NAV - Network Allocation Vector).</li>
                <li>A sends Data safely.</li>
              </ol>

              <h5>How it fixes Exposed Terminal:</h5>
              <ol>
                <li>B sends RTS to A. A sends CTS.</li>
                <li>C hears RTS from B, but <em>does not</em> hear CTS from A (A is far away).</li>
                <li>C deduces "I can disturb B's reception, but B is <em>sending</em>, not receiving. A is the receiver, and I can't reach A."</li>
                <li>C proceeds to transmit to D.</li>
              </ol>

              <div class="conclusion">
                <strong>Conclusion:</strong> The RTS/CTS mechanism reserves the medium at the receiver's end, effectively solving the hidden node problem, though it adds some overhead for small packets.
              </div>
            </div>
          `},{type:"b",question:"Compare SDMA, FDMA, TDMA, and CDMA.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Multiple Access techniques allow multiple users to share the same communication medium (spectrum) simultaneously. They differ in <em>how</em> they divide the resources (Space, Frequency, Time, or Code).</p>

              <h4>2. SDMA (Space Division Multiple Access)</h4>
              <ul>
                <li><strong>Concept:</strong> Separate users by physical distance or direction (using smart antennas).</li>
                <li><strong>Analogy:</strong> Two people talking in different rooms. They can use the same language at the same time without interference.</li>
                <li><strong>Use:</strong> Satellite spot beams, Cellular sectoring.</li>
              </ul>

              <h4>3. FDMA (Frequency Division Multiple Access)</h4>
              <ul>
                <li><strong>Concept:</strong> Divide the frequency band into smaller sub-bands (channels). Each user gets a unique frequency.</li>
                <li><strong>Analogy:</strong> Radio stations. Each broadcasts on a different frequency (98.3, 100.1).</li>
                <li><strong>Pros/Cons:</strong> Simple hardware, but inflexible (bandwidth wasted if user is idle).</li>
              </ul>

              <h4>4. TDMA (Time Division Multiple Access)</h4>
              <ul>
                <li><strong>Concept:</strong> Use the whole frequency, but divide time into "slots". Users take turns.</li>
                <li><strong>Analogy:</strong> A conversation. Only one person speaks at a time.</li>
                <li><strong>Pros/Cons:</strong> Flexible (can give more slots to heavy users), but requires precise synchronization.</li>
              </ul>

              <h4>5. CDMA (Code Division Multiple Access)</h4>
              <ul>
                <li><strong>Concept:</strong> Everyone transmits at the same time on the same frequency. Each user is assigned a unique mathematical code (Orthogonal Code).</li>
                <li><strong>Analogy:</strong> A cocktail party where everyone speaks at once, but in different languages. You only understand the language you know.</li>
                <li><strong>Pros/Cons:</strong> Highly secure, resistant to jamming, soft handovers. Complex power control needed.</li>
              </ul>

              <h4>6. Comparison Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <!-- FDMA -->
                  <text x="60" y="20" text-anchor="middle" font-weight="bold">FDMA</text>
                  <rect x="20" y="30" width="80" height="20" fill="#ffccbc" stroke="#333"/><text x="60" y="45" text-anchor="middle" font-size="10">User 1 (Freq A)</text>
                  <rect x="20" y="55" width="80" height="20" fill="#c5cae9" stroke="#333"/><text x="60" y="70" text-anchor="middle" font-size="10">User 2 (Freq B)</text>
                  <rect x="20" y="80" width="80" height="20" fill="#b2dfdb" stroke="#333"/><text x="60" y="95" text-anchor="middle" font-size="10">User 3 (Freq C)</text>

                  <!-- TDMA -->
                  <text x="200" y="20" text-anchor="middle" font-weight="bold">TDMA</text>
                  <rect x="160" y="30" width="25" height="70" fill="#ffccbc" stroke="#333"/><text x="172" y="65" text-anchor="middle" font-size="10" transform="rotate(270, 172, 65)">User 1</text>
                  <rect x="185" y="30" width="25" height="70" fill="#c5cae9" stroke="#333"/><text x="197" y="65" text-anchor="middle" font-size="10" transform="rotate(270, 197, 65)">User 2</text>
                  <rect x="210" y="30" width="25" height="70" fill="#b2dfdb" stroke="#333"/><text x="222" y="65" text-anchor="middle" font-size="10" transform="rotate(270, 222, 65)">User 3</text>

                  <!-- CDMA -->
                  <text x="340" y="20" text-anchor="middle" font-weight="bold">CDMA</text>
                  <rect x="300" y="30" width="80" height="70" fill="#e1bee7" stroke="#333"/>
                  <text x="340" y="60" text-anchor="middle" font-size="10">All Users</text>
                  <text x="340" y="75" text-anchor="middle" font-size="10">(Code Separated)</text>
                </svg>
              </div>

              <div class="conclusion">
                <strong>Conclusion:</strong> Modern networks often combine these (e.g., GSM uses TDMA + FDMA, 4G uses OFDMA). CDMA revolutionized 3G by allowing universal frequency reuse.
              </div>
            </div>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain Route Optimization in Mobile IP to solve Triangular Routing.",answer:`
            <div class="model-answer-pro">
              <h4>1. The Problem: Triangular Routing</h4>
              <p>In standard Mobile IP, packets from the Correspondent Node (CN) must go to the Home Agent (HA) first, then tunnel to the Mobile Node (MN).
                <br><em>Path:</em> CN -> HA -> FA -> MN.
                <br><em>Inefficiency:</em> If CN and MN are sitting next to each other in France, but the HA is in the USA, the packet travels across the Atlantic twice! This adds huge latency.</p>

              <h4>2. The Solution: Route Optimization</h4>
              <p>The goal is to allow the CN to send packets <strong>directly</strong> to the MN's Care-of Address (CoA), bypassing the HA.</p>

              <h4>3. Mechanism (Binding Updates)</h4>
              <ol>
                <li><strong>Initial Packet:</strong> CN sends first packet to HA (standard way).</li>
                <li><strong>Binding Update:</strong> The HA notices the inefficiency. It sends a <strong>Binding Update</strong> message to the CN.
                  <br><em>Message:</em> "Hey CN, the MN is currently at IP address X (CoA). Send directly there."</li>
                <li><strong>Caching:</strong> The CN caches this binding (Home IP -> CoA).</li>
                <li><strong>Direct Transmission:</strong> Future packets from CN are tunneled directly to the CoA.</li>
              </ol>

              <h4>4. Handling Movement</h4>
              <p>If the MN moves to a new network:</p>
              <ul>
                <li>The MN notifies the HA.</li>
                <li>The HA sends a <strong>Binding Warning</strong> to the CN.</li>
                <li>The CN requests a new binding.</li>
              </ul>

              <h4>5. Diagram</h4>
              <div class="diagram-container">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <rect x="20" y="20" width="60" height="40" fill="#ffccbc" stroke="#d84315"/><text x="50" y="45" text-anchor="middle">CN</text>
                  <rect x="170" y="20" width="60" height="40" fill="#c5cae9" stroke="#3f51b5"/><text x="200" y="45" text-anchor="middle">HA</text>
                  <rect x="320" y="140" width="60" height="40" fill="#b2dfdb" stroke="#00695c"/><text x="350" y="165" text-anchor="middle">MN/FA</text>

                  <!-- Old Path -->
                  <path d="M 80 40 L 170 40" stroke="#999" stroke-dasharray="5,5" marker-end="url(#arrow-mip)"/>
                  <path d="M 200 60 L 350 140" stroke="#999" stroke-dasharray="5,5" marker-end="url(#arrow-mip)"/>
                  <text x="125" y="30" text-anchor="middle" font-size="10" fill="#999">Standard</text>

                  <!-- Optimized Path -->
                  <path d="M 50 60 L 320 140" stroke="#2e7d32" stroke-width="2" marker-end="url(#arrow-mip)"/>
                  <text x="150" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#2e7d32">Optimized Route</text>
                </svg>
              </div>

              <div class="conclusion">
                <strong>Conclusion:</strong> Route Optimization significantly reduces latency and network load but requires the CN to be "Mobile IP Aware" (software update needed on CN).
              </div>
            </div>
          `},{type:"b",question:"Discuss Snooping TCP and compare it with I-TCP.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Standard TCP performs poorly in wireless because it mistakes wireless errors for congestion. <strong>Snooping TCP</strong> is a "Transparent" enhancement, unlike I-TCP which splits the connection.</p>

              <h4>2. Snooping TCP Mechanism</h4>
              <p>The Base Station (BS) runs a <strong>Snooping Agent</strong> that monitors packets flowing between the Fixed Host (FH) and Mobile Node (MN).</p>
              <ul>
                <li><strong>Buffering:</strong> The BS buffers packets sent to the MN.</li>
                <li><strong>Local Retransmission:</strong> If the BS sees a duplicate ACK from the MN (indicating loss), it retransmits the packet <em>locally</em> from its buffer.</li>
                <li><strong>Suppression:</strong> The BS <em>suppresses</em> the duplicate ACK so it doesn't reach the FH. The FH never knows a loss occurred!</li>
              </ul>

              <h4>3. Comparison: Snooping TCP vs I-TCP</h4>
              <table class="comparison-table">
                <tr><th>Feature</th><th>I-TCP (Indirect TCP)</th><th>Snooping TCP</th></tr>
                <tr><td><strong>Architecture</strong></td><td>Splits connection into two (FH-BS, BS-MN).</td><td>Single end-to-end connection. BS just watches.</td></tr>
                <tr><td><strong>Semantics</strong></td><td>Breaks TCP End-to-End semantics (BS ACKs packet before MN gets it).</td><td>Preserves End-to-End semantics (FH only gets ACK from MN).</td></tr>
                <tr><td><strong>Handover</strong></td><td>Complex (State transfer of full socket).</td><td>Simpler (State transfer of buffer).</td></tr>
                <tr><td><strong>Encryption</strong></td><td>Fails with End-to-End encryption (BS can't split).</td><td>Fails with End-to-End encryption (BS can't snoop sequence numbers).</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> Snooping TCP is often preferred because it maintains the original TCP design philosophy (End-to-End) while still hiding wireless errors from the sender.
              </div>
            </div>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain Indexing Techniques in Broadcast Disks (Index(I,m)).",answer:`
            <div class="model-answer-pro">
              <h4>1. The Power Saving Problem</h4>
              <p>In a broadcast system, the client listens to the channel to find data. Listening consumes power. If the client has to listen for 10 minutes to find a file, the battery dies.</p>
              <p><strong>Solution:</strong> Broadcast an <strong>Index</strong> (Directory) telling <em>when</em> the data will appear. The client reads the index, sleeps (dozes), and wakes up exactly at the right time.</p>

              <h4>2. Indexing Organization (I, m)</h4>
              <p>How often should we broadcast the index?
                <br>If we send it once at the start, a user joining late must wait for the next cycle.
                <br><strong>(1, m) Indexing:</strong> The index (I) is repeated <em>m</em> times during the broadcast of the data.</p>

              <h4>3. Structure</h4>
              <p>The data is divided into <em>m</em> chunks. An index is placed before each chunk.</p>
              <div class="diagram-container">
                <div class="diagram-row">
                  <div class="diagram-box" style="background:#fff9c4">Index</div>
                  <div class="diagram-box">Data Chunk 1</div>
                  <div class="diagram-box" style="background:#fff9c4">Index</div>
                  <div class="diagram-box">Data Chunk 2</div>
                  <div class="diagram-box" style="background:#fff9c4">Index</div>
                  <div class="diagram-box">Data Chunk 3</div>
                </div>
              </div>

              <h4>4. Tuning Time vs Access Time</h4>
              <ul>
                <li><strong>Tuning Time:</strong> Time spent "Listening" (Power consumed). Indexing reduces this drastically.</li>
                <li><strong>Access Time:</strong> Total time to get data. Indexing <em>increases</em> this slightly (because the index itself takes up space/time on the channel).</li>
              </ul>

              <h4>5. Tree-Based Indexing</h4>
              <p>Advanced systems use Distributed Indexing (like a B-Tree flattened on the broadcast) to allow clients to find data in <em>O(log N)</em> steps.</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> Indexing is a trade-off. We accept a slightly longer wait time (Access Time) to achieve massive battery savings (Tuning Time).
              </div>
            </div>
          `},{type:"b",question:"Discuss Cache Consistency strategies: Invalidation Reports vs Polling.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p>Mobile devices cache data to work offline. But if the server updates the data, the cache becomes stale. Consistency strategies ensure the client sees fresh data.</p>

              <h4>2. Polling (Client-Initiated)</h4>
              <ul>
                <li><strong>Mechanism:</strong> Every time the user accesses a file, the client asks the server: "Is my copy valid?"</li>
                <li><strong>Pros:</strong> Simple. No server state.</li>
                <li><strong>Cons:</strong> High latency (must wait for check). Generates huge traffic even if data hasn't changed.</li>
              </ul>

              <h4>3. Invalidation Reports (Server-Initiated)</h4>
              <ul>
                <li><strong>Mechanism:</strong> The server tracks changes. Periodically, it broadcasts an <strong>Invalidation Report (IR)</strong> containing IDs of changed items.</li>
                <li><strong>Client Action:</strong> Client listens to IR. If its cached item is in the list, it marks it as invalid.</li>
                <li><strong>Pros:</strong> Scalable (Server broadcasts once for 1 million users). Low uplink usage.</li>
                <li><strong>Cons:</strong> If client misses the IR (disconnected), it must discard the <em>entire</em> cache to be safe.</li>
              </ul>

              <h4>4. Bit-Sequence Approach</h4>
              <p>An optimized IR. The server broadcasts a bit sequence (01001...).
                <br>Position 1 = File A, Position 2 = File B.
                <br>1 = Changed, 0 = Unchanged.
                <br>Very compact.</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> In mobile computing, <strong>Invalidation Reports</strong> are preferred because they utilize the broadcast nature of the downlink and save precious uplink bandwidth.
              </div>
            </div>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Explain DSR (Dynamic Source Routing) and compare with AODV.",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>DSR</strong> is a reactive routing protocol for MANETs. Its defining feature is <strong>Source Routing</strong>: the sender decides the entire path and puts it in the packet header.</p>

              <h4>2. Mechanism</h4>
              
              <h5>A. Route Discovery</h5>
              <ul>
                <li>Source broadcasts <strong>RREQ</strong>.</li>
                <li>Intermediate nodes append their own ID to the RREQ and rebroadcast.</li>
                <li>Destination receives RREQ containing full path (e.g., S-A-B-C-D).</li>
                <li>Destination sends <strong>RREP</strong> containing this full path.</li>
              </ul>

              <h5>B. Data Transmission</h5>
              <ul>
                <li>Source puts the full path (S-A-B-C-D) in the header of every data packet.</li>
                <li>Intermediate nodes just read the header: "Who is next? B. Okay, forward to B."</li>
                <li>No routing tables needed at intermediate nodes!</li>
              </ul>

              <h5>C. Route Maintenance</h5>
              <ul>
                <li><strong>Route Cache:</strong> Nodes aggressively cache routes they overhear ("Snooping").</li>
                <li><strong>RERR:</strong> If a link breaks, RERR is sent to source.</li>
              </ul>

              <h4>3. Comparison: DSR vs AODV</h4>
              <table class="comparison-table">
                <tr><th>Feature</th><th>DSR</th><th>AODV</th></tr>
                <tr><td><strong>Routing Type</strong></td><td>Source Routing (Path in header)</td><td>Hop-by-Hop (Routing Tables)</td></tr>
                <tr><td><strong>Overhead</strong></td><td>High per packet (Header grows with path length).</td><td>Low per packet (Fixed header).</td></tr>
                <tr><td><strong>Table Maintenance</strong></td><td>None (Uses Route Cache).</td><td>Yes (Routing Table with timers).</td></tr>
                <tr><td><strong>Performance</strong></td><td>Better for small, low-mobility networks.</td><td>Better for large, high-mobility networks.</td></tr>
              </table>

              <div class="conclusion">
                <strong>Conclusion:</strong> DSR is simple and loop-free by design but suffers from high byte overhead in large networks. AODV is generally more scalable.
              </div>
            </div>
          `},{type:"b",question:"Discuss the architecture of WAP 2.0 and how it differs from WAP 1.x.",answer:`
            <div class="model-answer-pro">
              <h4>1. The Failure of WAP 1.x</h4>
              <p>WAP 1.x failed because it was isolated. It used proprietary protocols (WML, WSP, WTP) that were incompatible with the standard Internet (HTML, HTTP, TCP). It required a complex Gateway to translate.</p>

              <h4>2. WAP 2.0: The Convergence</h4>
              <p>WAP 2.0 abandoned the proprietary stack and adopted standard Internet protocols, optimized for mobile.</p>

              <h4>3. Key Changes in Architecture</h4>
              <ul>
                <li><strong>Protocol:</strong> Switched from WSP/WTP to <strong>HTTP/TCP</strong> (Wireless Profile).</li>
                <li><strong>Language:</strong> Switched from WML to <strong>XHTML Mobile Profile (XHTML-MP)</strong>. This is a subset of standard HTML.</li>
                <li><strong>Gateway:</strong> The WAP Gateway is no longer a "Translator". It becomes a standard <strong>Proxy Server</strong> (for caching/optimization), or can be removed entirely.</li>
              </ul>

              <h4>4. Architecture Diagram</h4>
              <div class="diagram-container">
                <div class="diagram-row">
                  <div class="diagram-box">Mobile (WAP 2.0)</div>
                  <div class="diagram-arrow">➡ HTTP/TCP ➡</div>
                  <div class="diagram-box">Internet</div>
                  <div class="diagram-arrow">➡ HTTP/TCP ➡</div>
                  <div class="diagram-box">Web Server</div>
                </div>
                <p style="text-align:center; font-size:10px;">End-to-End IP Connection</p>
              </div>

              <h4>5. Push Proxy Gateway</h4>
              <p>WAP 2.0 introduced "Push" services (MMS, Alerts) using a Push Proxy Gateway.</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> WAP 2.0 brought the "Real Internet" to mobile phones by aligning with W3C and IETF standards, paving the way for the modern mobile web.
              </div>
            </div>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain the J2ME Architecture (CLDC/MIDP).",answer:`
            <div class="model-answer-pro">
              <h4>1. Introduction</h4>
              <p><strong>Java 2 Micro Edition (J2ME)</strong> was the dominant platform for mobile apps before Android/iOS. It is designed for resource-constrained devices.</p>

              <h4>2. Architecture Stack</h4>
              <p>J2ME is built in layers on top of the native OS.</p>
              <div class="diagram-container">
                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                  <rect x="50" y="20" width="200" height="30" fill="#81c784" stroke="#2e7d32"/><text x="150" y="40" text-anchor="middle" font-weight="bold">MIDP Application</text>
                  <rect x="50" y="60" width="200" height="30" fill="#a5d6a7" stroke="#2e7d32"/><text x="150" y="80" text-anchor="middle">Profile (MIDP)</text>
                  <rect x="50" y="100" width="200" height="30" fill="#c8e6c9" stroke="#388e3c"/><text x="150" y="120" text-anchor="middle">Configuration (CLDC)</text>
                  <rect x="50" y="140" width="200" height="30" fill="#fff9c4" stroke="#fbc02d"/><text x="150" y="160" text-anchor="middle">JVM (KVM)</text>
                  <rect x="50" y="180" width="200" height="20" fill="#e0e0e0" stroke="#666"/><text x="150" y="195" text-anchor="middle" font-size="10">Native OS</text>
                </svg>
              </div>

              <h4>3. Components</h4>
              
              <h5>A. Configuration (CLDC)</h5>
              <p><strong>Connected Limited Device Configuration.</strong> Defines the minimum Java libraries and Virtual Machine features for a family of devices (e.g., cell phones).
                <br><em>KVM (Kilo Virtual Machine):</em> A tiny JVM (only ~500KB).</p>

              <h5>B. Profile (MIDP)</h5>
              <p><strong>Mobile Information Device Profile.</strong> Sits on top of CLDC. Adds APIs specifically for mobile phones:
                <br>- <strong>UI (LCDUI):</strong> Screens, Forms, TextBoxes.
                <br>- <strong>RMS (Record Management System):</strong> Simple database.
                <br>- <strong>Networking:</strong> HTTP support.</p>

              <h5>C. MIDlet</h5>
              <p>A J2ME application is called a MIDlet. It has a lifecycle: <code>startApp()</code>, <code>pauseApp()</code>, <code>destroyApp()</code>.</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> J2ME's modular "Configuration + Profile" architecture allowed Java to run on everything from a pager to a set-top box.
              </div>
            </div>
          `},{type:"b",question:"Explain Service Discovery protocols (Jini).",answer:`
            <div class="model-answer-pro">
              <h4>1. The Problem</h4>
              <p>In a dynamic mobile network, devices (printers, cameras) join and leave. How does your phone know a printer is available without installing drivers manually? This is <strong>Service Discovery</strong>.</p>

              <h4>2. Jini (Java Intelligent Network Infrastructure)</h4>
              <p>Jini is a Java-based service discovery mechanism.</p>

              <h4>3. The Jini Process (Lookup Service)</h4>
              <p>It relies on a central registry called the <strong>Lookup Service (LUS)</strong>.</p>

              <h5>Step 1: Discovery (Finding the LUS)</h5>
              <p>A new device (Service Provider) joins the network. It broadcasts a packet to find the Lookup Service.</p>

              <h5>Step 2: Join (Registration)</h5>
              <p>The device uploads a <strong>Java Proxy Object</strong> (code) to the LUS. This object knows how to talk to the device.</p>

              <h5>Step 3: Lookup (Client Request)</h5>
              <p>A Client (User) asks the LUS: "I need a printer." The LUS searches its registry.</p>

              <h5>Step 4: Service Invocation</h5>
              <p>The LUS sends the <strong>Proxy Object</strong> to the Client. The Client runs this code to talk <em>directly</em> to the Printer.</p>

              <h4>4. Key Feature: Code Mobility</h4>
              <p>Unlike other protocols (UPnP) that just give an IP address, Jini moves <strong>executable code</strong> (drivers) to the client. The client doesn't need pre-installed drivers!</p>

              <div class="conclusion">
                <strong>Conclusion:</strong> Jini provides a sophisticated "Plug and Work" experience by leveraging Java's ability to move code across the network, making it ideal for complex distributed systems.
              </div>
            </div>
          `}]}]},Y0=[{category:"🏆 The Golden Answer Framework",tips:[{title:"The Universal 5-Step Structure",content:`
          <p>Don't just write paragraphs. Structure <strong>every</strong> 10-mark answer like this to guarantee 7+ marks:</p>
          <div class="study-guide-box">
            <ol>
              <li><strong>Introduction (2 lines):</strong> Define the core term. (e.g., <em>"MANET is a decentralized network..."</em>)</li>
              <li><strong>The Diagram (Crucial):</strong> Draw a block diagram. Even a simple box-and-arrow diagram is better than nothing. Label it clearly.</li>
              <li><strong>Core Concept (Bullet Points):</strong> Explain the "How" and "Why". Use subheadings.</li>
              <li><strong>Advantages & Disadvantages:</strong> Always list 3 Pros and 2 Cons.</li>
              <li><strong>Real-World Application:</strong> Give one example (e.g., <em>"Used in Military/Disaster Relief"</em>).</li>
            </ol>
          </div>
        `},{title:"The 'Introduction' Hack",content:`
          <p>Stuck on how to start? Use the <strong>"Breakdown Method"</strong>.</p>
          <p>If the question is <em>"Explain Snooping TCP"</em>, break it down:</p>
          <ul>
            <li><strong>Snooping:</strong> To watch secretly.</li>
            <li><strong>TCP:</strong> Transmission Control Protocol.</li>
          </ul>
          <p><strong>Start with:</strong> <em>"Snooping TCP is a mechanism where the Base Station 'watches' or monitors packets to improve performance..."</em></p>
        `}]},{category:"🧠 The 'Blackout' Protocol (When You Don't Know)",tips:[{title:"The 'Generic Features' Cheat Sheet",content:`
          <p>Blank on a Mobile Computing question? These 5 points apply to <strong>almost everything</strong> in this subject. Weave them into your answer:</p>
          <div class="concept-grid">
            <div class="concept-card"><strong>🔋 Battery</strong><br>Always a constraint.</div>
            <div class="concept-card"><strong>📶 Bandwidth</strong><br>Always limited/expensive.</div>
            <div class="concept-card"><strong>🔒 Security</strong><br>Wireless is easy to hack.</div>
            <div class="concept-card"><strong>🏃 Mobility</strong><br>Nodes move, topology changes.</div>
            <div class="concept-card"><strong>📉 Reliability</strong><br>Connections break often.</div>
          </div>
        `},{title:"The 'Logical Diagram' Technique",content:`
          <p>Forgot the architecture diagram? <strong>Invent one logically.</strong></p>
          <p>Every Mobile System needs:</p>
          <ul>
            <li>A <strong>User/Device</strong> (Left side)</li>
            <li>A <strong>Network/Medium</strong> (Middle cloud)</li>
            <li>A <strong>Server/Database</strong> (Right side)</li>
          </ul>
          <p>Draw these three boxes, connect them with arrows, label them with keywords from the question, and you have a valid diagram!</p>
        `}]},{category:"🎨 Presentation & Examiner Psychology",tips:[{title:"Make it 'Skimmable'",content:`
          <p>Examiners spend about <strong>2-3 minutes</strong> per paper. They don't read; they <strong>scan</strong>.</p>
          <div class="example-box">
            <strong>Do this:</strong>
            <ul>
              <li>Use <strong>ALL CAPS</strong> for headings.</li>
              <li><u>Underline</u> key technical terms (e.g., <u>Handover</u>, <u>Latency</u>).</li>
              <li>Leave a blank line between paragraphs.</li>
              <li>Draw a box around your final conclusion or formula.</li>
            </ul>
          </div>
        `},{title:"The 'Comparison' Table",content:`
          <p>If asked to "Explain X", try to add a "Comparison with Y" table at the end.</p>
          <p><em>Example:</em> Question asks for <strong>AODV</strong>. After explaining it, add a small table: <strong>AODV vs DSDV</strong>.</p>
          <p>This shows <strong>deep knowledge</strong> and fills space effectively.</p>
        `}]},{category:"🚀 Confidence Boosters",tips:[{title:"You Know More Than You Think",content:`
          <p>Mobile Computing is about <strong>phones and internet</strong>. You use this every day!</p>
          <ul>
            <li><strong>Handover?</strong> That's just your call not dropping when you drive.</li>
            <li><strong>Security?</strong> That's your OTP and PIN.</li>
            <li><strong>LBS?</strong> That's just Uber/Maps.</li>
          </ul>
          <p>Relate the technical terms to your daily life, and the answers will flow.</p>
        `},{title:"Attempt Everything",content:`
          <p><strong>Never leave a question blank.</strong> A blank answer gets 0. A vague answer with a diagram and generic points gets 2-3 marks.</p>
          <p>Those 2-3 marks add up to a passing grade or a distinction!</p>
        `}]}],Q0=[{id:1,unit:"I",front:"Mobile Computing Definition",back:`
      <div class="fc-content">
        <div class="fc-icon">📱 + 💻</div>
        <p><strong>Computing on the Go!</strong></p>
        <p>Transmission of data, voice, and video via a computer or wireless device without a fixed physical link.</p>
        <div class="fc-tags">
          <span>Anytime 🕒</span>
          <span>Anywhere 🌍</span>
        </div>
      </div>
    `},{id:2,unit:"I",front:"Mobility vs Portability",back:`
      <div class="fc-content">
        <div class="fc-grid">
          <div class="fc-item">
            <span class="fc-emoji">🏃‍♂️</span>
            <strong>Mobility</strong>
            <small>Network follows you</small>
          </div>
          <div class="fc-divider">VS</div>
          <div class="fc-item">
            <span class="fc-emoji">🎒</span>
            <strong>Portability</strong>
            <small>Device moves (Battery)</small>
          </div>
        </div>
      </div>
    `},{id:3,unit:"I",front:"GSM Architecture",back:`
      <div class="fc-content">
        <div class="fc-diagram-simple">
          <span>MS</span> ↔ <span>BSS</span> ↔ <span>NSS</span>
        </div>
        <ul class="fc-list">
          <li><strong>MS:</strong> Phone + SIM 📱</li>
          <li><strong>BSS:</strong> Radio (BTS + BSC) 📡</li>
          <li><strong>NSS:</strong> Core (MSC + HLR) 🧠</li>
        </ul>
      </div>
    `},{id:4,unit:"I",front:"HLR (Home Location Register)",back:`
      <div class="fc-content">
        <div class="fc-icon">🏠</div>
        <p><strong>The Master Database</strong></p>
        <ul class="fc-list">
          <li>Permanent User Data</li>
          <li>Service Profile</li>
          <li>Current VLR Address</li>
        </ul>
      </div>
    `},{id:5,unit:"I",front:"VLR (Visitor Location Register)",back:`
      <div class="fc-content">
        <div class="fc-icon">🏨</div>
        <p><strong>The Temporary Guest List</strong></p>
        <p>Stores data for users currently in its area (Roaming).</p>
        <div class="fc-tag">Copied from HLR</div>
      </div>
    `},{id:6,unit:"I",front:"Mobile Terminated Call (MTC)",back:`
      <div class="fc-content">
        <ol class="fc-steps">
          <li>1️⃣ Call hits <strong>GMSC</strong></li>
          <li>2️⃣ GMSC asks <strong>HLR</strong> (Where is he?)</li>
          <li>3️⃣ HLR asks <strong>VLR</strong> for MSRN</li>
          <li>4️⃣ Route to current <strong>MSC</strong></li>
          <li>5️⃣ <strong>Page</strong> the user 🔔</li>
        </ol>
      </div>
    `},{id:7,unit:"I",front:"Hard Handover",back:`
      <div class="fc-content">
        <div class="fc-icon">✂️</div>
        <p><strong>Break-before-Make</strong></p>
        <p>Disconnect from old tower <em>before</em> connecting to the new one.</p>
        <div class="fc-tag">Used in GSM</div>
      </div>
    `},{id:8,unit:"I",front:"Soft Handover",back:`
      <div class="fc-content">
        <div class="fc-icon">🤝</div>
        <p><strong>Make-before-Break</strong></p>
        <p>Connected to both towers simultaneously for a moment.</p>
        <div class="fc-tag">Used in CDMA/3G</div>
      </div>
    `},{id:9,unit:"I",front:"SIM Card",back:`
      <div class="fc-content">
        <div class="fc-icon">💳</div>
        <p><strong>Subscriber Identity Module</strong></p>
        <ul class="fc-list">
          <li><strong>IMSI:</strong> Unique User ID</li>
          <li><strong>Ki:</strong> Secret Auth Key 🔑</li>
          <li><strong>PIN:</strong> User Password</li>
        </ul>
      </div>
    `},{id:10,unit:"I",front:"GSM Security Triad",back:`
      <div class="fc-content">
        <ul class="fc-list">
          <li>🛡️ <strong>Authentication:</strong> A3 Algorithm (Challenge-Response)</li>
          <li>🔒 <strong>Encryption:</strong> A5 Algorithm (Voice Privacy)</li>
          <li>👻 <strong>Anonymity:</strong> TMSI (Temporary ID)</li>
        </ul>
      </div>
    `},{id:11,unit:"II",front:"Hidden Terminal Problem",back:`
      <div class="fc-content">
        <div class="fc-visual-problem">
          A 📡 ... 🏢 ... 📡 C
        </div>
        <p>A and C can't hear each other.</p>
        <p>Both send to B ➡ 💥 <strong>COLLISION</strong></p>
        <div class="fc-solution">Fix: RTS / CTS</div>
      </div>
    `},{id:12,unit:"II",front:"Exposed Terminal Problem",back:`
      <div class="fc-content">
        <div class="fc-visual-problem">
          B 🔊 ... A 🔊
        </div>
        <p>B hears A transmitting and waits unnecessarily.</p>
        <p><strong>Result:</strong> Wasted Bandwidth 📉</p>
      </div>
    `},{id:13,unit:"II",front:"SDMA (Space Division)",back:`
      <div class="fc-content">
        <div class="fc-icon">📡</div>
        <p><strong>Directional Antennas</strong></p>
        <p>Reuse the same frequency in different physical spaces (Sectors).</p>
      </div>
    `},{id:14,unit:"II",front:"TDMA (Time Division)",back:`
      <div class="fc-content">
        <div class="fc-icon">⏱️</div>
        <p><strong>Taking Turns</strong></p>
        <p>Divide time into slots. Each user gets a slot to transmit.</p>
        <div class="fc-tag">Requires Sync</div>
      </div>
    `},{id:15,unit:"II",front:"CDMA (Code Division)",back:`
      <div class="fc-content">
        <div class="fc-icon">🗣️</div>
        <p><strong>Different Languages</strong></p>
        <p>Everyone speaks at once using unique <strong>Orthogonal Codes</strong>.</p>
        <div class="fc-tag">Secure & Anti-Jamming</div>
      </div>
    `},{id:16,unit:"II",front:"RTS / CTS",back:`
      <div class="fc-content">
        <p><strong>Handshake Protocol</strong></p>
        <ol class="fc-steps">
          <li>1️⃣ <strong>RTS:</strong> Request to Send ✋</li>
          <li>2️⃣ <strong>CTS:</strong> Clear to Send 👍</li>
          <li>3️⃣ <strong>DATA:</strong> Send Packet 📦</li>
          <li>4️⃣ <strong>ACK:</strong> Receipt Confirmed ✅</li>
        </ol>
      </div>
    `},{id:17,unit:"II",front:"Mobile IP Goals",back:`
      <div class="fc-content">
        <p><strong>Stay Connected!</strong></p>
        <p>Allow a device to move between networks without changing its IP address.</p>
        <div class="fc-tag">Preserves TCP Connections</div>
      </div>
    `},{id:18,unit:"II",front:"Care-of Address (CoA)",back:`
      <div class="fc-content">
        <div class="fc-icon">📍</div>
        <p><strong>Temporary Address</strong></p>
        <p>The IP address used by the Mobile Node while visiting a Foreign Network.</p>
      </div>
    `},{id:19,unit:"II",front:"Tunneling",back:`
      <div class="fc-content">
        <div class="fc-capsule-outer">
          <span class="fc-label">Outer IP (Dest: CoA)</span>
          <div class="fc-capsule-inner">
            Inner IP (Dest: Home IP)
          </div>
        </div>
        <p>Wrapping a packet inside another to forward it.</p>
      </div>
    `},{id:20,unit:"II",front:"Triangular Routing",back:`
      <div class="fc-content">
        <div class="fc-diagram-simple">
          CN ➡ HA ➡ MN
        </div>
        <p><strong>Inefficient Path:</strong> Packets go to Home Agent first, then to Mobile Node.</p>
        <div class="fc-solution">Fix: Route Optimization</div>
      </div>
    `},{id:21,unit:"III",front:"Why TCP fails in Wireless",back:`
      <div class="fc-content">
        <p><strong>Misinterpretation</strong></p>
        <ul class="fc-list">
          <li>Wired TCP assumes Loss = Congestion 🚦</li>
          <li>Wireless Loss = Noise/Handover 📶</li>
        </ul>
        <p><strong>Result:</strong> TCP slows down unnecessarily.</p>
      </div>
    `},{id:22,unit:"III",front:"Indirect TCP (I-TCP)",back:`
      <div class="fc-content">
        <div class="fc-split-connection">
          <div>Fixed ↔ BS (Standard TCP)</div>
          <div class="fc-break">⚡ Split ⚡</div>
          <div>BS ↔ Mobile (Wireless TCP)</div>
        </div>
        <p>Isolates the wireless link.</p>
      </div>
    `},{id:23,unit:"III",front:"Snooping TCP",back:`
      <div class="fc-content">
        <div class="fc-icon">🕵️‍♂️</div>
        <p><strong>Base Station Spies</strong></p>
        <p>BS buffers packets and retransmits lost ones locally <em>before</em> the sender knows.</p>
        <div class="fc-tag">Maintains End-to-End</div>
      </div>
    `},{id:24,unit:"III",front:"Mobile TCP (M-TCP)",back:`
      <div class="fc-content">
        <div class="fc-icon">⏸️</div>
        <p><strong>Persist Mode</strong></p>
        <p>When disconnected, M-TCP sets window size to 0. Sender pauses instead of retransmitting.</p>
      </div>
    `},{id:25,unit:"III",front:"Fast Retransmit",back:`
      <div class="fc-content">
        <p><strong>3 Duplicate ACKs</strong></p>
        <p>If sender gets 3 dup ACKs, it assumes a packet was lost and resends immediately without waiting for timeout.</p>
      </div>
    `},{id:26,unit:"III",front:"Database Hoarding",back:`
      <div class="fc-content">
        <div class="fc-icon">🐿️</div>
        <p><strong>Prefetching</strong></p>
        <p>Downloading data <em>before</em> disconnection so you can work offline.</p>
        <div class="fc-tag">Like Google Maps Offline</div>
      </div>
    `},{id:27,unit:"III",front:"Cache Invalidation",back:`
      <div class="fc-content">
        <p><strong>Keeping it Fresh</strong></p>
        <p>How does the client know its cached data is old?</p>
        <ul class="fc-list">
          <li><strong>Stateless:</strong> Server broadcasts changed IDs.</li>
          <li><strong>Stateful:</strong> Server notifies specific clients.</li>
        </ul>
      </div>
    `},{id:28,unit:"III",front:"Kangaroo Transaction",back:`
      <div class="fc-content">
        <div class="fc-icon">🦘</div>
        <p><strong>Hopping Transaction</strong></p>
        <p>Data transaction moves with the user from one Base Station to another without restarting.</p>
      </div>
    `},{id:29,unit:"III",front:"ACID Properties",back:`
      <div class="fc-content">
        <ul class="fc-list">
          <li><strong>A</strong>tomicity (All or Nothing)</li>
          <li><strong>C</strong>onsistency (Valid State)</li>
          <li><strong>I</strong>solation (Independent)</li>
          <li><strong>D</strong>urability (Saved forever)</li>
        </ul>
        <div class="fc-tag">Hard in Mobile</div>
      </div>
    `},{id:30,unit:"III",front:"QoS (Quality of Service)",back:`
      <div class="fc-content">
        <p><strong>Network Performance Metrics</strong></p>
        <div class="fc-tags">
          <span>Bandwidth 📶</span>
          <span>Latency ⏳</span>
          <span>Jitter 〰️</span>
          <span>Packet Loss ❌</span>
        </div>
      </div>
    `},{id:31,unit:"IV",front:"Push Mechanism",back:`
      <div class="fc-content">
        <div class="fc-icon">📢</div>
        <p><strong>Server Initiated</strong></p>
        <p>Server sends data to all users (Broadcast).</p>
        <div class="fc-tags">
          <span>Scalable 📈</span>
          <span>Spammy 📧</span>
        </div>
      </div>
    `},{id:32,unit:"IV",front:"Pull Mechanism",back:`
      <div class="fc-content">
        <div class="fc-icon">📥</div>
        <p><strong>Client Initiated</strong></p>
        <p>User requests specific data (On-Demand).</p>
        <div class="fc-tags">
          <span>Personalized 👤</span>
          <span>Server Load ⚠️</span>
        </div>
      </div>
    `},{id:33,unit:"IV",front:"Hybrid Delivery",back:`
      <div class="fc-content">
        <div class="fc-grid">
          <div class="fc-item">
            <strong>Push</strong>
            <small>Popular Data</small>
          </div>
          <div class="fc-item">
            <strong>Pull</strong>
            <small>Niche Data</small>
          </div>
        </div>
        <p>Best of both worlds!</p>
      </div>
    `},{id:34,unit:"IV",front:"Broadcast Disk",back:`
      <div class="fc-content">
        <div class="fc-icon">💿</div>
        <p><strong>Cyclic Transmission</strong></p>
        <p>Data is broadcast in a loop. Popular data is repeated more often (Multi-disk).</p>
      </div>
    `},{id:35,unit:"IV",front:"Selective Tuning",back:`
      <div class="fc-content">
        <div class="fc-timeline">
          <span>Index</span> ➡ <span>Sleep 💤</span> ➡ <span>Wake & Read 📥</span>
        </div>
        <p>Device wakes up only when the desired data is being broadcast to save battery.</p>
      </div>
    `},{id:36,unit:"IV",front:"Index-based Tuning",back:`
      <div class="fc-content">
        <p><strong>The Table of Contents</strong></p>
        <p>Server broadcasts an index first. Client reads it to know <em>exactly when</em> its data will arrive.</p>
      </div>
    `},{id:37,unit:"IV",front:"Data Synchronization",back:`
      <div class="fc-content">
        <div class="fc-icon">🔄</div>
        <p><strong>Making Copies Identical</strong></p>
        <p>Process of harmonizing data on the mobile device and the server after offline edits.</p>
      </div>
    `},{id:38,unit:"IV",front:"SyncML",back:`
      <div class="fc-content">
        <p><strong>Synchronization Markup Language</strong></p>
        <p>The industry standard XML-based protocol for syncing data (Contacts, Calendar) across devices.</p>
      </div>
    `},{id:39,unit:"IV",front:"Conflict Resolution: Server Wins",back:`
      <div class="fc-content">
        <p><strong>The Dictator Approach</strong></p>
        <p>If there's a conflict, the Server's version is kept. The Mobile's changes are discarded.</p>
        <div class="fc-tag">Simple but Data Loss</div>
      </div>
    `},{id:40,unit:"IV",front:"Conflict Resolution: Timestamp",back:`
      <div class="fc-content">
        <div class="fc-icon">🕒</div>
        <p><strong>Latest Wins</strong></p>
        <p>The update with the most recent timestamp overwrites the other.</p>
      </div>
    `},{id:41,unit:"V",front:"MANET Definition",back:`
      <div class="fc-content">
        <p><strong>Mobile Ad-hoc Network</strong></p>
        <div class="fc-tags">
          <span>No Infrastructure 🚫</span>
          <span>Decentralized 🕸️</span>
          <span>Self-Configuring ⚙️</span>
        </div>
      </div>
    `},{id:42,unit:"V",front:"MANET Challenges",back:`
      <div class="fc-content">
        <ul class="fc-list">
          <li>🔀 <strong>Dynamic Topology:</strong> Links break often</li>
          <li>🔋 <strong>Battery:</strong> Nodes act as routers</li>
          <li>🔒 <strong>Security:</strong> Easy to attack</li>
          <li>📉 <strong>Bandwidth:</strong> Shared medium</li>
        </ul>
      </div>
    `},{id:43,unit:"V",front:"Proactive Routing (Table-Driven)",back:`
      <div class="fc-content">
        <div class="fc-icon">🗺️</div>
        <p><strong>Always Ready</strong></p>
        <p>Maintain fresh lists of destinations and their routes.</p>
        <div class="fc-tag">Example: DSDV</div>
      </div>
    `},{id:44,unit:"V",front:"Reactive Routing (On-Demand)",back:`
      <div class="fc-content">
        <div class="fc-icon">🔍</div>
        <p><strong>Ask when needed</strong></p>
        <p>Find a route only when you want to send data.</p>
        <div class="fc-tag">Example: AODV, DSR</div>
      </div>
    `},{id:45,unit:"V",front:"DSDV Protocol",back:`
      <div class="fc-content">
        <p><strong>Destination-Sequenced Distance-Vector</strong></p>
        <ul class="fc-list">
          <li>Proactive (Table)</li>
          <li>Uses Sequence Numbers to avoid loops</li>
          <li>High overhead for updates</li>
        </ul>
      </div>
    `},{id:46,unit:"V",front:"DSR Protocol",back:`
      <div class="fc-content">
        <p><strong>Dynamic Source Routing</strong></p>
        <p>The sender puts the <strong>Entire Path</strong> in the packet header.</p>
        <div class="fc-capsule-outer">Header: A ➡ B ➡ C ➡ D</div>
      </div>
    `},{id:47,unit:"V",front:"AODV Protocol",back:`
      <div class="fc-content">
        <p><strong>Ad-hoc On-demand Distance Vector</strong></p>
        <p>Combines DSR's on-demand discovery with DSDV's hop-by-hop routing.</p>
        <div class="fc-tags">
          <span>RREQ (Request)</span>
          <span>RREP (Reply)</span>
        </div>
      </div>
    `},{id:48,unit:"V",front:"Mobile Agents",back:`
      <div class="fc-content">
        <div class="fc-icon">🤖</div>
        <p><strong>Code that Moves</strong></p>
        <p>Software programs that travel from node to node to perform tasks locally.</p>
        <div class="fc-tag">Saves Bandwidth</div>
      </div>
    `},{id:49,unit:"V",front:"Service Discovery",back:`
      <div class="fc-content">
        <p><strong>Finding Resources</strong></p>
        <p>How to find a printer or file server in a network that changes constantly?</p>
        <div class="fc-tag">Jini, UPnP</div>
      </div>
    `},{id:50,unit:"V",front:"VANET",back:`
      <div class="fc-content">
        <div class="fc-icon">🚗</div>
        <p><strong>Vehicular Ad-hoc Network</strong></p>
        <p>Cars talking to cars (V2V) or infrastructure (V2I) for safety and traffic info.</p>
      </div>
    `},{id:51,unit:"V",front:"Sensor Networks",back:`
      <div class="fc-content">
        <div class="fc-icon">🌡️</div>
        <p><strong>Tiny Monitors</strong></p>
        <p>Thousands of small, low-power nodes sensing environment (Temp, Pressure).</p>
        <div class="fc-tag">Data Aggregation</div>
      </div>
    `}],K0=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundation of measurement systems, defining sensors and transducers, their classification, and static characteristics. It then dives deep into Electromechanical sensors, specifically Resistive (Potentiometers, Strain Gauges), Inductive (LVDT), and Capacitive sensors.</p>",topics:[{title:"1. Sensors & Transducers Basics",content:`
          <div class="study-guide-box">
            <h4>1.1 Definitions & Differences</h4>
            <div class="definition-box">
              <strong>Transducer:</strong> A device that converts energy from one form to another. <br>
              <em>Example:</em> A loudspeaker converts electrical energy into acoustic (sound) energy.
            </div>
            <div class="definition-box">
              <strong>Sensor:</strong> A specific type of transducer that detects a physical parameter (like temperature, pressure, speed) and converts it into a signal (usually electrical) that can be measured or recorded. <br>
              <em>Example:</em> A Thermocouple detects temperature and produces a voltage.
            </div>
            
            <table class="comparison-table">
              <tr><th>Feature</th><th>Sensor</th><th>Transducer</th></tr>
              <tr><td><strong>Function</strong></td><td>Detects changes in environment</td><td>Converts energy form</td></tr>
              <tr><td><strong>Output</strong></td><td>Electrical signal (mostly)</td><td>Any form of energy</td></tr>
              <tr><td><strong>Example</strong></td><td>Proximity Sensor</td><td>Motor, Speaker, Lamp</td></tr>
            </table>

            <h4>1.2 Classification of Transducers</h4>
            <ul>
              <li><strong>Based on Power Source:</strong>
                <ul>
                  <li><strong>Active Transducers:</strong> Self-generating. Do NOT require an external power source. They generate their own voltage/current. <br><em>Examples:</em> Thermocouple, Piezoelectric crystal, Photovoltaic cell.</li>
                  <li><strong>Passive Transducers:</strong> Require an external power source (excitation) to operate. They work by varying a passive parameter (R, L, or C). <br><em>Examples:</em> Strain Gauge (R), LVDT (L), Thermistor (R).</li>
                </ul>
              </li>
              <li><strong>Based on Signal Type:</strong>
                <ul>
                  <li><strong>Analog:</strong> Continuous output (e.g., LVDT, Thermocouple).</li>
                  <li><strong>Digital:</strong> Discrete output (e.g., Optical Encoder).</li>
                </ul>
              </li>
            </ul>

            <h4>1.3 Static Characteristics</h4>
            <p>These parameters define the performance of a sensor under static conditions (slowly changing input).</p>
            <ul>
              <li><strong>Accuracy:</strong> Closeness to the true value.</li>
              <li><strong>Precision:</strong> Reproducibility of the reading (closeness of multiple readings to each other).</li>
              <li><strong>Sensitivity:</strong> Ratio of change in output to change in input (Slope of the calibration curve).</li>
              <li><strong>Linearity:</strong> How close the calibration curve is to a straight line.</li>
              <li><strong>Hysteresis:</strong> The difference in output for the same input when approached from increasing vs. decreasing directions.</li>
              <li><strong>Resolution:</strong> The smallest change in input that can be detected.</li>
            </ul>
          </div>
        `},{title:"2. Resistive Sensors: Strain Gauges",content:`
          <div class="study-guide-box">
            <h4>2.1 Principle: Piezoresistive Effect</h4>
            <p>When a metal conductor is stretched or compressed, its resistance changes due to:</p>
            <ol>
              <li>Change in physical dimensions (Length increases, Area decreases).</li>
              <li>Change in resistivity (Piezoresistive effect).</li>
            </ol>
            <div class="formula-box">
              <strong>Resistance Formula:</strong> R = ρ * (L / A)<br>
              <strong>Gauge Factor (GF):</strong> The measure of sensitivity.<br>
              GF = (ΔR / R) / (ΔL / L) = 1 + 2ν + (Δρ/ρ)/ε
            </div>
            <p>Where <strong>ν</strong> is Poisson's Ratio. For metals, GF is around 2. For semiconductors, GF is around 100.</p>

            <h4>2.2 Bonded Metal Foil Strain Gauge</h4>
            <p>The most common type. A thin metal foil grid is bonded to a backing material.</p>
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <rect x="50" y="20" width="300" height="160" rx="10" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
                    <rect x="60" y="70" width="40" height="60" fill="#ffcc80" stroke="#ef6c00"/>
                    <rect x="300" y="70" width="40" height="60" fill="#ffcc80" stroke="#ef6c00"/>
                    <path d="M 100 80 L 260 80 L 260 90 L 100 90 L 100 100 L 260 100 L 260 110 L 100 110 L 100 120 L 260 120" fill="none" stroke="#d84315" stroke-width="3"/>
                    <text x="200" y="150" text-anchor="middle" font-size="12" fill="#bf360c">Metal Foil Grid</text>
                    <text x="200" y="40" text-anchor="middle" font-size="12" fill="#e65100" font-weight="bold">Bonded Strain Gauge</text>
                </svg>
            </div>
            
            <h4>2.3 Measurement Circuit</h4>
            <p>Since the change in resistance (ΔR) is very small, a <strong>Wheatstone Bridge</strong> is used to convert ΔR into a voltage signal.</p>
          </div>
        `},{title:"3. Inductive Sensors: LVDT",content:`
          <div class="study-guide-box">
            <h4>3.1 Linear Variable Differential Transformer (LVDT)</h4>
            <p>The most widely used inductive transducer for measuring linear displacement.</p>
            
            <h4>3.2 Construction</h4>
            <ul>
              <li><strong>Primary Coil (P):</strong> Connected to AC source.</li>
              <li><strong>Secondary Coils (S1, S2):</strong> Connected in series opposition.</li>
              <li><strong>Core:</strong> Movable soft iron core.</li>
            </ul>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <rect x="50" y="50" width="300" height="100" fill="#f5f5f5" stroke="#999"/>
                    <rect x="175" y="40" width="50" height="120" fill="#ffcc80" stroke="#ef6c00"/>
                    <text x="200" y="30" text-anchor="middle" font-size="12">Primary (P)</text>
                    <rect x="75" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                    <text x="100" y="30" text-anchor="middle" font-size="12">Sec 1 (S1)</text>
                    <rect x="275" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                    <text x="300" y="30" text-anchor="middle" font-size="12">Sec 2 (S2)</text>
                    <rect x="150" y="80" width="100" height="40" rx="5" fill="#616161" stroke="#333"/>
                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="12">Soft Iron Core</text>
                    <line x1="150" y1="140" x2="250" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                    <text x="200" y="155" text-anchor="middle" font-size="10">Motion</text>
                </svg>
            </div>

            <h4>3.3 Working Principle</h4>
            <p>Output Voltage <strong>Vo = Vs1 - Vs2</strong>.</p>
            <ul>
              <li><strong>Null Position:</strong> Core at center. Vs1 = Vs2. Vo = 0.</li>
              <li><strong>Right Displacement:</strong> More flux to S2. Vs2 > Vs1. Vo is -ve (180° phase shift).</li>
              <li><strong>Left Displacement:</strong> More flux to S1. Vs1 > Vs2. Vo is +ve (in phase).</li>
            </ul>
          </div>
        `},{title:"4. Capacitive Sensors",content:`
          <div class="study-guide-box">
            <h4>4.1 Principle</h4>
            <p>Based on the parallel plate capacitor formula:</p>
            <div class="formula-box">
              C = (ε₀ * εr * A) / d
            </div>
            <p>Capacitance (C) can be varied by changing:</p>
            <ul>
              <li><strong>d (Distance):</strong> Most common. Very sensitive. Non-linear (hyperbolic).</li>
              <li><strong>A (Area):</strong> Linear response. Used for larger displacements.</li>
              <li><strong>εr (Dielectric):</strong> Used for liquid level measurement.</li>
            </ul>

            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <rect x="50" y="50" width="20" height="100" fill="#90caf9" stroke="#1565c0"/>
                    <line x1="50" y1="100" x2="20" y2="100" stroke="#333" stroke-width="2"/>
                    <text x="35" y="165" text-anchor="middle" font-size="12">Fixed Plate</text>
                    <rect x="150" y="50" width="20" height="100" fill="#90caf9" stroke="#1565c0"/>
                    <line x1="170" y1="100" x2="200" y2="100" stroke="#333" stroke-width="2"/>
                    <text x="185" y="165" text-anchor="middle" font-size="12">Movable Plate</text>
                    <line x1="75" y1="70" x2="145" y2="70" stroke="#333" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                    <text x="110" y="65" text-anchor="middle" font-size="14" font-weight="bold">d</text>
                    <text x="110" y="120" text-anchor="middle" font-size="12" fill="#666">Dielectric (Air)</text>
                </svg>
            </div>
          </div>
        `}]},{unit:"II",title:"Thermal Sensors",notes:"<h3>Unit II Overview</h3><p>This unit focuses on temperature measurement. It covers Expansion types (Bimetallic), Electrical types (RTD, Thermistor, Thermocouple), and Non-contact types (Radiation Pyrometers).</p>",topics:[{title:"1. Thermocouples",content:`
          <div class="study-guide-box">
            <h4>1.1 Principle: Seebeck Effect</h4>
            <p>When two dissimilar metals are joined to form a closed loop and the junctions are at different temperatures, an EMF is generated.</p>
            <div class="formula-box">
              E = a(ΔT) + b(ΔT)²
            </div>
            
            <h4>1.2 Construction</h4>
            <p>Two wires (e.g., Iron and Constantan for Type J) welded at one end (Hot Junction). The other ends form the Cold Junction.</p>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <path d="M 50 100 Q 150 50 250 100" fill="none" stroke="#d32f2f" stroke-width="3"/>
                    <text x="150" y="60" text-anchor="middle" fill="#d32f2f" font-size="12">Metal A</text>
                    <path d="M 50 100 Q 150 150 250 100" fill="none" stroke="#1976d2" stroke-width="3"/>
                    <text x="150" y="140" text-anchor="middle" fill="#1976d2" font-size="12">Metal B</text>
                    <circle cx="50" cy="100" r="5" fill="#333"/>
                    <text x="50" y="120" text-anchor="middle" font-weight="bold">Hot Junction</text>
                    <text x="50" y="80" text-anchor="middle" fill="red">Heat</text>
                    <circle cx="250" cy="100" r="5" fill="#333"/>
                    <text x="250" y="120" text-anchor="middle" font-weight="bold">Cold Junction</text>
                    <circle cx="350" cy="100" r="20" fill="#fff" stroke="#333" stroke-width="2"/>
                    <text x="350" y="105" text-anchor="middle" font-weight="bold">V</text>
                    <line x1="250" y1="100" x2="330" y2="100" stroke="#333" stroke-width="2"/>
                </svg>
            </div>

            <h4>1.3 Laws of Thermocouples</h4>
            <ul>
              <li><strong>Law of Homogeneous Circuits:</strong> Current depends only on T1 and T2, not on temp distribution along the wire.</li>
              <li><strong>Law of Intermediate Metals:</strong> Inserting a third metal (like a meter) doesn't affect reading if its junctions are at the same temp.</li>
              <li><strong>Law of Intermediate Temperatures:</strong> E(T1, T3) = E(T1, T2) + E(T2, T3).</li>
            </ul>
          </div>
        `},{title:"2. RTD & Thermistors",content:`
          <div class="study-guide-box">
            <h4>2.1 RTD (Resistance Temperature Detector)</h4>
            <p><strong>Principle:</strong> Metals increase resistance with temperature (PTC). <br><strong>Material:</strong> Platinum (Pt100) is standard.</p>
            <div class="formula-box">
              Rt = R₀ (1 + αT)
            </div>
            <p><strong>Features:</strong> High accuracy, linear, stable. Needs lead wire compensation (3-wire bridge).</p>

            <h4>2.2 Thermistor (Thermal Resistor)</h4>
            <p><strong>Principle:</strong> Semiconductors change resistance with temperature. Usually <strong>NTC</strong> (Resistance drops as Temp rises).</p>
            <div class="formula-box">
              Rt = R₀ * e^(β(1/T - 1/T₀))
            </div>
            <p><strong>Features:</strong> High sensitivity, fast response, non-linear.</p>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <line x1="50" y1="150" x2="250" y2="150" stroke="#333" stroke-width="2"/>
                    <line x1="50" y1="20" x2="50" y2="150" stroke="#333" stroke-width="2"/>
                    <text x="250" y="165" text-anchor="end" font-size="12">Temp (T)</text>
                    <text x="60" y="30" font-size="12">Res (R)</text>
                    <path d="M 60 30 Q 80 140 240 145" fill="none" stroke="#d32f2f" stroke-width="3"/>
                    <text x="150" y="80" fill="#d32f2f" font-weight="bold">NTC Thermistor</text>
                    <line x1="60" y1="140" x2="240" y2="40" stroke="#1976d2" stroke-width="2" stroke-dasharray="4"/>
                    <text x="200" y="50" fill="#1976d2" font-weight="bold">RTD (Linear)</text>
                </svg>
            </div>
          </div>
        `}]},{unit:"III",title:"Magnetic Sensors",notes:"<h3>Unit III Overview</h3><p>This unit explores sensors that detect magnetic fields. Key topics include the Hall Effect, Magnetoresistive sensors, and Magnetostrictive sensors.</p>",topics:[{title:"1. Hall Effect Sensors",content:`
          <div class="study-guide-box">
            <h4>1.1 Principle</h4>
            <p>When a current-carrying conductor is placed in a transverse magnetic field, a voltage (Hall Voltage) is generated perpendicular to both.</p>
            <div class="formula-box">
              Vh = (Rh * I * B) / t
            </div>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <path d="M 100 100 L 300 100 L 340 60 L 140 60 Z" fill="#b2dfdb" stroke="#00695c"/>
                    <rect x="100" y="100" width="200" height="40" fill="#80cbc4" stroke="#00695c"/>
                    <path d="M 300 100 L 340 60 L 340 100 L 300 140 Z" fill="#4db6ac" stroke="#00695c"/>
                    <line x1="50" y1="120" x2="100" y2="120" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
                    <text x="70" y="115" font-weight="bold">I</text>
                    <line x1="220" y1="20" x2="220" y2="80" stroke="#d32f2f" stroke-width="2" marker-end="url(#arrow)"/>
                    <text x="230" y="40" font-weight="bold" fill="#d32f2f">B</text>
                    <line x1="220" y1="60" x2="220" y2="40" stroke="#333" stroke-width="1"/>
                    <line x1="220" y1="140" x2="220" y2="180" stroke="#333" stroke-width="1"/>
                    <circle cx="220" cy="200" r="15" fill="#fff" stroke="#333"/>
                    <text x="220" y="205" text-anchor="middle" font-weight="bold">Vh</text>
                </svg>
            </div>

            <h4>1.2 Applications</h4>
            <ul>
              <li><strong>RPM Measurement:</strong> Counting pulses from a rotating magnet.</li>
              <li><strong>Current Sensing:</strong> Measuring magnetic field around a wire.</li>
              <li><strong>BLDC Motor Commutation:</strong> Detecting rotor position.</li>
            </ul>
          </div>
        `},{title:"2. Magnetostrictive Sensors",content:`
          <div class="study-guide-box">
            <h4>2.1 Principle: Wiedemann Effect</h4>
            <p>Interaction between two magnetic fields (one from a permanent magnet, one from a current pulse) causes a mechanical twist in a ferromagnetic wire.</p>
            
            <h4>2.2 Working</h4>
            <ol>
              <li>Current pulse sent down the waveguide.</li>
              <li>Interacts with position magnet field -> Twist.</li>
              <li>Sonic wave travels back.</li>
              <li>Time of flight determines position.</li>
            </ol>
            <p><strong>Application:</strong> High precision liquid level measurement.</p>
          </div>
        `}]},{unit:"IV",title:"Radiation & Electroanalytical Sensors",notes:"<h3>Unit IV Overview</h3><p>This unit covers sensors that detect radiation (Light, X-rays) and chemical properties (pH, Conductivity). It bridges the gap between physical and chemical sensing.</p>",topics:[{title:"1. Radiation Sensors (Optical)",content:`
          <div class="study-guide-box">
            <h4>1.1 Photodiode</h4>
            <p><strong>Principle:</strong> Photovoltaic/Photoconductive effect. Reverse biased PN junction. Light generates electron-hole pairs -> Reverse current increases.</p>
            
            <h4>1.2 Phototransistor</h4>
            <p>Like a photodiode but with internal gain (Amplification). Slower than photodiode but higher output.</p>
            
            <h4>1.3 LDR (Light Dependent Resistor)</h4>
            <p><strong>Principle:</strong> Photoconductivity. Resistance decreases as light intensity increases. Made of Cadmium Sulfide (CdS).</p>
          </div>
        `},{title:"2. Electroanalytical Sensors",content:`
          <div class="study-guide-box">
            <h4>2.1 pH Sensor (Glass Electrode)</h4>
            <p>Measures Hydrogen ion concentration.</p>
            <div class="formula-box">
              E = E₀ - 0.059 * pH
            </div>
            <p>Consists of a glass electrode (measuring) and a reference electrode (Calomel/Ag-AgCl).</p>

            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <path d="M 100 50 L 100 200 Q 100 220 120 220 L 280 220 Q 300 220 300 200 L 300 50" fill="none" stroke="#333" stroke-width="2"/>
                    <path d="M 100 100 L 100 200 Q 100 220 120 220 L 280 220 Q 300 220 300 200 L 300 100 Z" fill="#e1f5fe" stroke="none"/>
                    <rect x="140" y="20" width="20" height="150" fill="#fff" stroke="#333"/>
                    <circle cx="150" cy="170" r="15" fill="#fff" stroke="#333"/>
                    <rect x="240" y="20" width="20" height="150" fill="#fff" stroke="#333"/>
                    <rect x="170" y="-20" width="60" height="30" fill="#333" stroke="none"/>
                    <text x="200" y="0" text-anchor="middle" fill="#0f0" font-family="monospace">7.01</text>
                    <path d="M 150 20 L 150 -5 L 170 -5" fill="none" stroke="#333"/>
                    <path d="M 250 20 L 250 -5 L 230 -5" fill="none" stroke="#333"/>
                </svg>
            </div>

            <h4>2.2 Conductivity Sensor</h4>
            <p>Measures the ability of a solution to conduct current (Ion concentration). Uses AC excitation to prevent polarization.</p>
          </div>
        `}]},{unit:"V",title:"Smart Sensors & MEMS",notes:"<h3>Unit V Overview</h3><p>The final unit covers modern sensor technology: Smart Sensors (IEEE 1451) and MEMS (Micro-Electro-Mechanical Systems).</p>",topics:[{title:"1. Smart Sensors",content:`
          <div class="study-guide-box">
            <h4>1.1 Definition</h4>
            <p>A sensor that integrates the sensing element with signal conditioning, processing (microcontroller), and communication in a single package.</p>
            
            <h4>1.2 Features</h4>
            <ul>
              <li><strong>Self-Calibration:</strong> Auto-adjusts zero and span.</li>
              <li><strong>Self-Diagnosis:</strong> Detects faults.</li>
              <li><strong>Digital Comm:</strong> I2C, SPI, Zigbee.</li>
            </ul>

            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <defs>
                        <marker id="arrow-smart" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
                    </defs>
                    <text x="30" y="75" text-anchor="middle" font-size="10">Input</text>
                    <line x1="50" y1="70" x2="70" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="70" y="40" width="60" height="60" rx="5" fill="#ffcc80" stroke="#ef6c00"/>
                    <text x="100" y="75" text-anchor="middle" font-size="10">Sensor</text>
                    <line x1="130" y1="70" x2="150" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="150" y="40" width="80" height="60" rx="5" fill="#fff9c4" stroke="#fbc02d"/>
                    <text x="190" y="65" text-anchor="middle" font-size="10">Signal Cond.</text>
                    <line x1="230" y1="70" x2="250" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="250" y="40" width="50" height="60" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                    <text x="275" y="75" text-anchor="middle" font-size="10">ADC</text>
                    <line x1="300" y1="70" x2="320" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="320" y="30" width="100" height="80" rx="5" fill="#bbdefb" stroke="#1976d2"/>
                    <text x="370" y="60" text-anchor="middle" font-size="10" font-weight="bold">Microprocessor</text>
                    <line x1="420" y1="70" x2="440" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="440" y="40" width="80" height="60" rx="5" fill="#c8e6c9" stroke="#388e3c"/>
                    <text x="480" y="75" text-anchor="middle" font-size="10">Comm.</text>
                    <line x1="520" y1="70" x2="550" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <text x="575" y="75" text-anchor="middle" font-size="10">Out</text>
                </svg>
            </div>
          </div>
        `},{title:"2. MEMS (Micro-Electro-Mechanical Systems)",content:`
          <div class="study-guide-box">
            <h4>2.1 Introduction</h4>
            <p>Miniaturized devices containing both mechanical (levers, springs, membranes) and electrical components on a silicon chip. Size: 1 to 100 micrometers.</p>
            
            <h4>2.2 Fabrication: Bulk Micromachining</h4>
            <p>Selectively etching away the silicon substrate to create 3D structures (cavities, beams).</p>
            <ul>
              <li><strong>Anisotropic Etching:</strong> Etching rate depends on crystal orientation. Creates V-grooves.</li>
              <li><strong>Isotropic Etching:</strong> Etches in all directions equally.</li>
            </ul>
            
            <h4>2.3 Applications</h4>
            <ul>
              <li><strong>Accelerometers:</strong> Airbag deployment, screen rotation.</li>
              <li><strong>Gyroscopes:</strong> Stabilization in drones/phones.</li>
              <li><strong>Pressure Sensors:</strong> TPMS (Tire Pressure Monitoring System).</li>
            </ul>
          </div>
        `}]}],X0={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2},{question:"Gauge Factor of a Strain Gauge is given by:",options:["(ΔR/R) * ε","(ΔR/R) / ε","(ΔL/L) / ε","None"],answer:1},{question:"LVDT works on the principle of:",options:["Variable Resistance","Variable Capacitance","Variable Inductance (Mutual)","Piezoelectric Effect"],answer:2},{question:"Capacitive transducers are generally used for:",options:["Static measurement","Dynamic measurement","Both","None"],answer:1}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1},{question:"RTD is made of:",options:["Copper","Nickel","Platinum","All of the above"],answer:2},{question:"Thermistors generally have:",options:["Positive Temperature Coefficient","Negative Temperature Coefficient","Zero Temperature Coefficient","None"],answer:1},{question:"Which sensor is best for non-contact high temperature measurement?",options:["Thermocouple","RTD","Radiation Pyrometer","Thermistor"],answer:2},{question:"The relationship between Resistance and Temperature in a Thermistor is:",options:["Linear","Exponential","Parabolic","Constant"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1},{question:"Magnetostriction is the phenomenon where a material changes its:",options:["Color","Dimensions","Resistance","Capacitance"],answer:1},{question:"Which material is commonly used for Magnetostrictive sensors?",options:["Silicon","Quartz","Nickel / Terfenol-D","Platinum"],answer:2},{question:"Hall Voltage is proportional to:",options:["Current only","Magnetic Field only","Product of Current and Magnetic Field","None"],answer:2},{question:"Piezoelectric sensors cannot measure:",options:["Dynamic Pressure","Acceleration","Static Pressure","Vibration"],answer:2}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0},{question:"A Photodiode is operated in:",options:["Forward Bias","Reverse Bias","Zero Bias","None"],answer:1},{question:"pH is a measure of:",options:["OH- ion concentration","H+ ion concentration","Total ion concentration","Conductivity"],answer:1},{question:"The standard reference electrode used in pH measurement is:",options:["Hydrogen Electrode","Calomel Electrode","Glass Electrode","Platinum Electrode"],answer:1},{question:"Solar cells work on:",options:["Photoconductive Effect","Photovoltaic Effect","Photoemissive Effect","None"],answer:1}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1},{question:"MEMS stands for:",options:["Micro Electronic Magnetic Systems","Micro Electro Mechanical Systems","Miniature Energy Management System","None"],answer:1},{question:"Which etching technique creates V-grooves in Silicon?",options:["Isotropic Etching","Anisotropic Etching","Plasma Etching","Sputtering"],answer:1},{question:"The IEEE standard for Smart Transducer Interface is:",options:["IEEE 802.11","IEEE 1451","IEEE 754","IEEE 488"],answer:1},{question:"Bulk Micromachining involves removing material from:",options:["Surface layer","Substrate","Oxide layer","None"],answer:1}]},Z0={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer with examples.",answer:`
                <p><strong>Sensor:</strong> A device that detects a physical parameter (like temperature, pressure) and converts it into a signal which can be measured or recorded. <br/><em>Example:</em> Thermocouple (detects temperature).</p>
                <p><strong>Transducer:</strong> A device that converts one form of energy into another. <br/><em>Example:</em> Microphone (Sound energy to Electrical energy).</p>
            `},{id:2,question:"What is Gauge Factor? Give its formula.",answer:`
                <p><strong>Gauge Factor (GF)</strong> is the measure of the sensitivity of a strain gauge. It is defined as the ratio of fractional change in resistance to the fractional change in length (strain).</p>
                <p><strong>Formula:</strong> GF = (ΔR / R) / ε <br/>Where ΔR/R is change in resistance and ε is strain.</p>
            `},{id:3,question:"State the principle of the Seebeck Effect.",answer:`
                <p><strong>Seebeck Effect:</strong> When two dissimilar metals are joined to form a closed circuit and their junctions are kept at different temperatures, an electromotive force (EMF) is generated in the circuit.</p>
                <p>This is the working principle of <strong>Thermocouples</strong>.</p>
            `},{id:4,question:"Differentiate between NTC and PTC Thermistors.",answer:`
                <ul>
                    <li><strong>NTC (Negative Temperature Coefficient):</strong> Resistance <em>decreases</em> as temperature increases. Used for temp measurement.</li>
                    <li><strong>PTC (Positive Temperature Coefficient):</strong> Resistance <em>increases</em> as temperature increases. Used for overcurrent protection.</li>
                </ul>
            `},{id:5,question:"What is the Hall Effect?",answer:`
                <p><strong>Hall Effect:</strong> When a current-carrying conductor is placed in a transverse magnetic field, a potential difference (Hall Voltage) is generated across the conductor in a direction perpendicular to both the current and the magnetic field.</p>
            `},{id:6,question:"Explain the working principle of LVDT.",answer:`
                <p><strong>LVDT (Linear Variable Differential Transformer):</strong> Works on the principle of mutual induction. The displacement of a core inside the transformer changes the magnetic flux linkage between primary and secondary coils, producing a differential output voltage proportional to displacement.</p>
            `},{id:7,question:"What is an LDR? Mention one application.",answer:`
                <p><strong>LDR (Light Dependent Resistor):</strong> A photo-resistor whose resistance decreases when light intensity increases.</p>
                <p><em>Application:</em> Automatic street light control.</p>
            `},{id:8,question:"What is the function of a Reference Electrode in pH measurement?",answer:`
                <p>A <strong>Reference Electrode</strong> (like Calomel or Ag/AgCl) provides a stable, known potential against which the potential of the indicator electrode (glass electrode) is measured to determine pH.</p>
            `},{id:9,question:"Define a Smart Sensor.",answer:`
                <p>A <strong>Smart Sensor</strong> is a sensor with integrated electronics that can perform functions like logic, decision making, two-way communication, and self-calibration, in addition to sensing.</p>
            `},{id:10,question:"What are MEMS?",answer:`
                <p><strong>MEMS (Micro-Electro-Mechanical Systems):</strong> Miniaturized devices integrating mechanical and electrical components on a single chip (silicon) ranging from micrometers to millimeters.</p>
            `}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the construction and working of a Bonded Metal Foil Strain Gauge. Derive the expression for Gauge Factor.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Strain Gauge</strong> is a passive resistive transducer that converts mechanical elongation or compression into a change in electrical resistance. It is the fundamental sensor for measuring strain, stress, and force.</p>
                            <p>The <strong>Bonded Metal Foil Strain Gauge</strong> is the most widely used type due to its high accuracy, stability, and ease of mass production.</p>

                            <h3>2. Principle of Operation</h3>
                            <p>It operates on the principle of <strong>Piezoresistivity</strong> (change in resistance due to mechanical stress) and geometric deformation. When a conductor is stretched:</p>
                            <ul>
                                <li>Its length (L) increases.</li>
                                <li>Its area of cross-section (A) decreases (Poisson's effect).</li>
                                <li>Its resistivity (ρ) may change.</li>
                            </ul>
                            <p>This combined effect causes an increase in resistance.</p>

                            <h3>3. Construction Details</h3>
                            <p>The construction involves the following key components:</p>
                            <ul>
                                <li><strong>Sensing Element:</strong> A very thin metal foil (thickness ~3-5 microns) made of <em>Constantan</em> (Ni-Cu alloy) or <em>Nichrome</em>. Constantan is preferred for its low temperature coefficient of resistance.</li>
                                <li><strong>Grid Pattern:</strong> The foil is photo-etched into a grid pattern. This pattern maximizes the length of the conductor in the direction of strain while keeping the gauge size small. The transverse loops are made wide to minimize sensitivity to transverse strain.</li>
                                <li><strong>Backing Material (Carrier):</strong> The grid is bonded to a thin, flexible insulating backing sheet made of <em>Polyimide</em> or <em>Epoxy</em>. This backing isolates the gauge from the test specimen and transmits the strain.</li>
                                <li><strong>Leads:</strong> Heavy copper tabs are attached to the ends of the grid for soldering lead wires.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Backing -->
                                    <rect x="50" y="20" width="300" height="160" rx="10" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
                                    <!-- Solder Tabs -->
                                    <rect x="60" y="70" width="40" height="60" fill="#ffcc80" stroke="#ef6c00"/>
                                    <rect x="300" y="70" width="40" height="60" fill="#ffcc80" stroke="#ef6c00"/>
                                    <!-- Grid -->
                                    <path d="M 100 80 L 260 80 L 260 90 L 100 90 L 100 100 L 260 100 L 260 110 L 100 110 L 100 120 L 260 120" fill="none" stroke="#d84315" stroke-width="3"/>
                                    <!-- Labels -->
                                    <text x="200" y="150" text-anchor="middle" font-size="12" fill="#bf360c">Metal Foil Grid</text>
                                    <text x="200" y="40" text-anchor="middle" font-size="12" fill="#e65100" font-weight="bold">Bonded Strain Gauge</text>
                                    <line x1="100" y1="80" x2="60" y2="100" stroke="#333" stroke-width="2"/>
                                    <line x1="260" y1="120" x2="300" y2="100" stroke="#333" stroke-width="2"/>
                                </svg>
                            </div>

                            <h3>4. Working Procedure</h3>
                            <ol>
                                <li><strong>Bonding:</strong> The gauge is bonded to the structure (specimen) using a special adhesive (Cyanoacrylate or Epoxy cement). The bond must be perfect to transfer strain without slip.</li>
                                <li><strong>Straining:</strong> When the structure is loaded, it undergoes strain (ε = ΔL/L).</li>
                                <li><strong>Resistance Change:</strong> The grid deforms with the structure.
                                    <ul>
                                        <li><strong>Tensile Strain:</strong> Length increases, Area decreases → Resistance Increases.</li>
                                        <li><strong>Compressive Strain:</strong> Length decreases, Area increases → Resistance Decreases.</li>
                                    </ul>
                                </li>
                                <li><strong>Measurement:</strong> This small change in resistance is measured using a <strong>Wheatstone Bridge</strong> circuit.</li>
                            </ol>

                            <h3>5. Derivation of Gauge Factor (GF)</h3>
                            <p>The Gauge Factor is the sensitivity of the strain gauge.</p>
                            <p><strong>Step 1:</strong> Resistance of a wire is given by:</p>
                            <p class="formula">R = ρ * L / A</p>
                            <p>Where ρ = Resistivity, L = Length, A = Area (πr²).</p>

                            <p><strong>Step 2:</strong> Differentiating the equation with respect to stress (σ):</p>
                            <p class="formula">dR = (ρ/A)dL + (L/A)dρ - (ρL/A²)dA</p>
                            <p>Divide by R (where R = ρL/A):</p>
                            <p class="formula">dR/R = dL/L + dρ/ρ - dA/A</p>

                            <p><strong>Step 3:</strong> Relate Area change to Length change.</p>
                            <p>A = πr². Differentiating: dA = 2πr dr.</p>
                            <p>dA/A = (2πr dr) / (πr²) = 2 * (dr/r)</p>
                            <p>We know Poisson's Ratio (ν) = - (Lateral Strain / Longitudinal Strain) = - (dr/r) / (dL/L).</p>
                            <p>So, dr/r = -ν * (dL/L).</p>
                            <p>Therefore, dA/A = -2ν * (dL/L).</p>

                            <p><strong>Step 4:</strong> Substitute back into the resistance equation:</p>
                            <p class="formula">dR/R = dL/L + dρ/ρ - (-2ν * dL/L)</p>
                            <p class="formula">dR/R = (1 + 2ν) * (dL/L) + dρ/ρ</p>

                            <p><strong>Step 5:</strong> Divide by Strain (ε = dL/L):</p>
                            <p class="formula">Gauge Factor (GF) = (dR/R) / ε = 1 + 2ν + (dρ/ρ)/ε</p>

                            <p><strong>Conclusion:</strong></p>
                            <ul>
                                <li><strong>1 + 2ν:</strong> Geometric term (Dominant in metals like Constantan, GF ≈ 2).</li>
                                <li><strong>(dρ/ρ)/ε:</strong> Piezoresistive term (Dominant in Semiconductors, GF ≈ 100+).</li>
                            </ul>

                            <h3>6. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> High accuracy, good frequency response, small size, low cost.</li>
                                <li><strong>Disadvantages:</strong> Low output signal (requires amplification), sensitive to temperature (requires compensation), one-time use (cannot be reused after bonding).</li>
                            </ul>
                        </div>
                    `},{question:"Describe the working principle of Capacitive Transducers. Discuss their advantages and disadvantages.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Capacitive Transducer</strong> is a passive transducer that works on the principle of variable capacitance. It is used to measure physical quantities like displacement, pressure, force, and liquid level by converting them into a change in capacitance.</p>

                            <h3>2. Principle of Operation</h3>
                            <p>The capacitance of a parallel plate capacitor is given by the formula:</p>
                            <p class="formula">C = (ε₀ * εr * A) / d</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>C:</strong> Capacitance in Farads.</li>
                                <li><strong>ε₀:</strong> Permittivity of free space (8.854 x 10⁻¹² F/m).</li>
                                <li><strong>εr:</strong> Relative permittivity (Dielectric constant).</li>
                                <li><strong>A:</strong> Overlapping area of the plates (m²).</li>
                                <li><strong>d:</strong> Distance between the plates (m).</li>
                            </ul>
                            <p>The transducer works by varying one of these three parameters (d, A, or εr).</p>

                            <h3>3. Types of Capacitive Transducers</h3>
                            
                            <h4>A. Variation in Distance (d)</h4>
                            <p>One plate is fixed, and the other is movable (connected to the object being measured).</p>
                            <ul>
                                <li>As 'd' decreases, 'C' increases (Inverse relationship).</li>
                                <li><strong>Sensitivity (S):</strong> dC/dd = - (εA) / d²</li>
                                <li><strong>Linearity:</strong> The response is non-linear (hyperbolic). However, for very small displacements (Δd << d), it is approximately linear.</li>
                                <li><em>Application:</em> Microphone diaphragms, pressure sensors.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Fixed Plate -->
                                    <rect x="50" y="50" width="20" height="100" fill="#90caf9" stroke="#1565c0"/>
                                    <line x1="50" y1="100" x2="20" y2="100" stroke="#333" stroke-width="2"/>
                                    <text x="35" y="165" text-anchor="middle" font-size="12">Fixed Plate</text>
                                    
                                    <!-- Movable Plate -->
                                    <rect x="150" y="50" width="20" height="100" fill="#90caf9" stroke="#1565c0"/>
                                    <line x1="170" y1="100" x2="200" y2="100" stroke="#333" stroke-width="2"/>
                                    <text x="185" y="165" text-anchor="middle" font-size="12">Movable Plate</text>
                                    
                                    <!-- Distance d -->
                                    <line x1="75" y1="70" x2="145" y2="70" stroke="#333" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                                    <text x="110" y="65" text-anchor="middle" font-size="14" font-weight="bold">d</text>
                                    
                                    <!-- Dielectric -->
                                    <text x="110" y="120" text-anchor="middle" font-size="12" fill="#666">Dielectric (Air)</text>
                                </svg>
                            </div>

                            <h4>B. Variation in Area (A)</h4>
                            <p>One plate slides over the other, changing the overlapping area.</p>
                            <ul>
                                <li><strong>C ∝ A</strong> (Directly proportional).</li>
                                <li><strong>Sensitivity:</strong> Constant (Linear response).</li>
                                <li><em>Application:</em> Measuring larger displacements (1cm to 10cm).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Plate 1 -->
                                    <rect x="50" y="50" width="100" height="20" fill="#a5d6a7" stroke="#2e7d32"/>
                                    <!-- Plate 2 -->
                                    <rect x="100" y="80" width="100" height="20" fill="#a5d6a7" stroke="#2e7d32"/>
                                    
                                    <!-- Overlap Area -->
                                    <rect x="100" y="50" width="50" height="50" fill="none" stroke="red" stroke-dasharray="4"/>
                                    <text x="250" y="75" font-size="12" fill="#333">Overlapping Area (A)</text>
                                    <line x1="160" y1="70" x2="240" y2="70" stroke="#333" stroke-width="1"/>
                                </svg>
                            </div>

                            <h4>C. Variation in Dielectric (εr)</h4>
                            <p>A dielectric material moves between fixed plates.</p>
                            <ul>
                                <li>Used primarily for <strong>Liquid Level Measurement</strong>. The liquid acts as the dielectric. As the level rises, the effective dielectric constant changes, changing the capacitance linearly.</li>
                            </ul>

                            <h3>4. Differential Arrangement</h3>
                            <p>To improve linearity and sensitivity, a <strong>Differential Capacitor</strong> is used.</p>
                            <ul>
                                <li>It consists of three plates: two fixed plates and one movable central plate.</li>
                                <li>As the central plate moves, C1 increases and C2 decreases.</li>
                                <li>Using a bridge circuit, the output voltage becomes linear with respect to displacement.</li>
                            </ul>

                            <h3>5. Advantages</h3>
                            <ul>
                                <li><strong>Extremely High Sensitivity:</strong> Can detect displacements as small as 10⁻⁹ meters.</li>
                                <li><strong>Low Loading Effect:</strong> High input impedance means it draws negligible power from the system.</li>
                                <li><strong>Good Frequency Response:</strong> Can measure dynamic changes (up to 50 kHz).</li>
                                <li><strong>No Hysteresis:</strong> Unlike magnetic sensors, there is no magnetic hysteresis.</li>
                            </ul>

                            <h3>6. Disadvantages</h3>
                            <ul>
                                <li><strong>High Output Impedance:</strong> Requires complex signal conditioning (charge amplifiers) and short cables to prevent signal loss.</li>
                                <li><strong>Stray Capacitance:</strong> The cable capacitance can cause errors. Requires "Guarding" or "Active Shielding".</li>
                                <li><strong>Environmental Effects:</strong> Sensitive to temperature and humidity changes (dielectric changes).</li>
                            </ul>

                            <h3>7. Applications</h3>
                            <ul>
                                <li>Condenser Microphones (Sound to Electrical).</li>
                                <li>Digital Vernier Calipers.</li>
                                <li>Fuel level sensors in aircraft.</li>
                                <li>Touch screens (Capacitive touch).</li>
                            </ul>
                        </div>
                    `}]},{unit:"II",questionNumber:12,choices:[{question:"Explain the construction and working of a Thermocouple. List common types.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Thermocouple</strong> is an active transducer used for temperature measurement. It is the most widely used temperature sensor in industrial applications due to its wide range, ruggedness, and low cost.</p>

                            <h3>2. Working Principle: Seebeck Effect</h3>
                            <p>The operation is based on the <strong>Seebeck Effect</strong> (discovered by T.J. Seebeck in 1821).</p>
                            <blockquote>"When two dissimilar metals are joined together to form a closed loop, and the two junctions are maintained at different temperatures, an electromotive force (EMF) is generated in the circuit."</blockquote>
                            <p>The magnitude of this EMF depends on:</p>
                            <ul>
                                <li>The materials of the two metals.</li>
                                <li>The temperature difference between the Hot Junction and the Cold Junction.</li>
                            </ul>
                            <p><strong>E = a(ΔT) + b(ΔT)²</strong> (where a, b are constants).</p>

                            <h3>3. Associated Effects</h3>
                            <ul>
                                <li><strong>Peltier Effect:</strong> The reverse of Seebeck. Passing current through a junction causes heating or cooling.</li>
                                <li><strong>Thomson Effect:</strong> EMF generated along a single wire if a temperature gradient exists.</li>
                            </ul>

                            <h3>4. Construction</h3>
                            <ul>
                                <li><strong>Thermoelements:</strong> Two wires of different metals (e.g., Iron and Constantan) are twisted and welded at one end to form the <strong>Measuring Junction (Hot Junction)</strong>.</li>
                                <li><strong>Reference Junction:</strong> The other ends are connected to the measuring instrument, forming the <strong>Reference Junction (Cold Junction)</strong>.</li>
                                <li><strong>Insulation:</strong> Wires are insulated using ceramic beads or fiberglass to prevent shorting.</li>
                                <li><strong>Protective Sheath:</strong> The assembly is placed inside a stainless steel or Inconel thermowell to protect it from corrosive environments and mechanical damage.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Metal A -->
                                    <path d="M 50 100 Q 150 50 250 100" fill="none" stroke="#d32f2f" stroke-width="3"/>
                                    <text x="150" y="60" text-anchor="middle" fill="#d32f2f" font-size="12">Metal A (Iron)</text>
                                    
                                    <!-- Metal B -->
                                    <path d="M 50 100 Q 150 150 250 100" fill="none" stroke="#1976d2" stroke-width="3"/>
                                    <text x="150" y="140" text-anchor="middle" fill="#1976d2" font-size="12">Metal B (Constantan)</text>
                                    
                                    <!-- Hot Junction -->
                                    <circle cx="50" cy="100" r="5" fill="#333"/>
                                    <text x="50" y="120" text-anchor="middle" font-weight="bold">Hot Junction (T1)</text>
                                    <text x="50" y="80" text-anchor="middle" fill="red">Heat Source</text>
                                    
                                    <!-- Cold Junction -->
                                    <circle cx="250" cy="100" r="5" fill="#333"/>
                                    <text x="250" y="120" text-anchor="middle" font-weight="bold">Cold Junction (T2)</text>
                                    
                                    <!-- Voltmeter -->
                                    <circle cx="350" cy="100" r="20" fill="#fff" stroke="#333" stroke-width="2"/>
                                    <text x="350" y="105" text-anchor="middle" font-weight="bold">V</text>
                                    <line x1="250" y1="100" x2="330" y2="100" stroke="#333" stroke-width="2"/>
                                </svg>
                            </div>

                            <h3>5. Cold Junction Compensation (CJC)</h3>
                            <p>The EMF depends on (Thot - Tcold). If Tcold varies (ambient temp), the reading will be wrong. Methods for compensation:</p>
                            <ul>
                                <li><strong>Ice Bath:</strong> Physically keeping the cold junction at 0°C (Lab standard).</li>
                                <li><strong>Automatic Compensation:</strong> Using a thermistor or RTD to measure the ambient temperature at the terminal block and electronically adding the equivalent voltage to the thermocouple signal.</li>
                            </ul>

                            <h3>6. Common Thermocouple Types</h3>
                            <table class="table-bordered">
                                <tr><th>Type</th><th>Positive Leg</th><th>Negative Leg</th><th>Range (°C)</th><th>Application</th></tr>
                                <tr><td><strong>J</strong></td><td>Iron</td><td>Constantan</td><td>-40 to 750</td><td>General purpose, reducing atmospheres.</td></tr>
                                <tr><td><strong>K</strong></td><td>Chromel</td><td>Alumel</td><td>-200 to 1250</td><td>Most common, oxidizing atmospheres.</td></tr>
                                <tr><td><strong>T</strong></td><td>Copper</td><td>Constantan</td><td>-200 to 350</td><td>Low temp, cryogenics, moisture resistant.</td></tr>
                                <tr><td><strong>E</strong></td><td>Chromel</td><td>Constantan</td><td>-200 to 900</td><td>Highest sensitivity (µV/°C).</td></tr>
                                <tr><td><strong>R/S</strong></td><td>Platinum/Rh</td><td>Platinum</td><td>0 to 1450</td><td>High temp, high accuracy (Reference std).</td></tr>
                            </table>

                            <h3>7. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Wide temperature range, fast response time, rugged, no external power required (active).</li>
                                <li><strong>Disadvantages:</strong> Non-linear output, low voltage signal (mV), requires cold junction compensation, less stable than RTDs.</li>
                            </ul>
                        </div>
                    `},{question:"What is an RTD? Explain its construction and Lead Wire Compensation.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>RTD (Resistance Temperature Detector)</strong> is a passive transducer that measures temperature by correlating the resistance of the RTD element with temperature. It offers the highest accuracy and stability among industrial sensors.</p>

                            <h3>2. Principle: Piezoresistive / PTC</h3>
                            <p>Metals exhibit a <strong>Positive Temperature Coefficient (PTC)</strong> of resistance. As temperature increases, lattice vibrations increase, impeding electron flow, thus increasing resistance.</p>
                            <p>The relationship is given by the <strong>Callendar-Van Dusen Equation</strong>:</p>
                            <p class="formula">Rt = R₀ (1 + αT)</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>Rt:</strong> Resistance at temperature T.</li>
                                <li><strong>R₀:</strong> Resistance at 0°C (typically 100Ω for Pt100).</li>
                                <li><strong>α:</strong> Temperature coefficient of resistance (0.00385 Ω/Ω/°C for Platinum).</li>
                            </ul>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Sensing Material:</strong> Platinum is the standard (Pt100) because it is chemically inert, has a linear resistance-temp relationship, and is stable. Nickel and Copper are also used for lower ranges.</li>
                                <li><strong>Wire Wound:</strong> A fine platinum wire is wound on a ceramic or glass bobbin. The winding is non-inductive (bifilar) to avoid magnetic pickup.</li>
                                <li><strong>Thin Film:</strong> A thin layer of platinum is deposited on a ceramic substrate. This is smaller, cheaper, and faster responding.</li>
                                <li><strong>Protection:</strong> Encased in a stainless steel probe packed with MgO powder for heat transfer and vibration resistance.</li>
                            </ul>

                            <h3>4. Lead Wire Compensation</h3>
                            <p>Since the change in resistance of an RTD is small (approx 0.385Ω/°C), the resistance of the connecting lead wires can cause significant errors. We use bridge configurations to compensate.</p>

                            <h4>A. 2-Wire Configuration</h4>
                            <p>Simple connection. The lead resistance (RL1 + RL2) adds directly to the RTD resistance.</p>
                            <p><em>Error:</em> High. Not used for precision work.</p>

                            <h4>B. 3-Wire Configuration (Most Common)</h4>
                            <p>Uses a Wheatstone bridge. Two leads connect to one end of the RTD, and one to the other.</p>
                            <ul>
                                <li>L1 is in the RTD arm.</li>
                                <li>L2 is in the adjacent bridge arm.</li>
                                <li>L3 carries the bridge current.</li>
                            </ul>
                            <p>If L1 and L2 have the same length/resistance, they cancel each other out in the bridge equation.</p>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Bridge -->
                                    <rect x="150" y="50" width="100" height="100" fill="none" stroke="none"/>
                                    <path d="M 200 50 L 300 150 L 200 250 L 100 150 Z" fill="none" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Resistors -->
                                    <text x="130" y="100" font-size="12">R1</text>
                                    <text x="260" y="100" font-size="12">R2</text>
                                    <text x="130" y="210" font-size="12">R3</text>
                                    
                                    <!-- RTD -->
                                    <rect x="250" y="200" width="40" height="20" fill="#e0e0e0" stroke="#333"/>
                                    <text x="270" y="215" text-anchor="middle" font-size="10">RTD</text>
                                    
                                    <!-- 3 Leads -->
                                    <line x1="300" y1="150" x2="350" y2="150" stroke="#f44336" stroke-width="2"/>
                                    <text x="360" y="155" fill="#f44336">L1</text>
                                    
                                    <line x1="200" y1="250" x2="200" y2="280" stroke="#f44336" stroke-width="2"/>
                                    <text x="210" y="290" fill="#f44336">L2</text>
                                    
                                    <!-- Galvanometer -->
                                    <circle cx="200" cy="150" r="15" fill="#fff" stroke="#333"/>
                                    <text x="200" y="155" text-anchor="middle">G</text>
                                </svg>
                            </div>

                            <h4>C. 4-Wire Configuration (High Precision)</h4>
                            <p>Uses a constant current source.</p>
                            <ul>
                                <li>Two leads carry the current (I).</li>
                                <li>Two leads measure the voltage drop (V).</li>
                            </ul>
                            <p>Since the voltmeter has high impedance, no current flows through the voltage leads. Thus, V = I * R_RTD exactly, completely eliminating lead resistance error.</p>

                            <h3>5. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> High accuracy, excellent stability, linear response, interchangeable.</li>
                                <li><strong>Disadvantages:</strong> Slower response than thermocouples, self-heating error (current causes I²R heating), expensive, max temp limited (~850°C).</li>
                            </ul>
                        </div>
                    `}]},{unit:"III",questionNumber:13,choices:[{question:"Explain the working of LVDT with a neat diagram. Plot its characteristics.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>The <strong>LVDT (Linear Variable Differential Transformer)</strong> is the most widely used inductive transducer for translating linear motion into an electrical signal. It is a passive transducer.</p>

                            <h3>2. Construction</h3>
                            <p>It consists of a transformer with:</p>
                            <ul>
                                <li><strong>One Primary Winding (P):</strong> Wound on a cylindrical former and excited by an AC source (50Hz to 20kHz).</li>
                                <li><strong>Two Secondary Windings (S1, S2):</strong> Wound on either side of the primary. They have equal number of turns and are connected in <strong>Series Opposition</strong> (differentially).</li>
                                <li><strong>Movable Core:</strong> A high-permeability, soft iron core moves axially inside the former. It couples the magnetic flux from primary to secondaries.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Former -->
                                    <rect x="50" y="50" width="300" height="100" fill="#f5f5f5" stroke="#999"/>
                                    
                                    <!-- Primary Coil -->
                                    <rect x="175" y="40" width="50" height="120" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="200" y="30" text-anchor="middle" font-size="12">Primary (P)</text>
                                    
                                    <!-- Secondary 1 -->
                                    <rect x="75" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="100" y="30" text-anchor="middle" font-size="12">Sec 1 (S1)</text>
                                    
                                    <!-- Secondary 2 -->
                                    <rect x="275" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="300" y="30" text-anchor="middle" font-size="12">Sec 2 (S2)</text>
                                    
                                    <!-- Core -->
                                    <rect x="150" y="80" width="100" height="40" rx="5" fill="#616161" stroke="#333"/>
                                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="12">Soft Iron Core</text>
                                    
                                    <!-- Motion Arrow -->
                                    <line x1="150" y1="140" x2="250" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                                    <text x="200" y="155" text-anchor="middle" font-size="10">Motion</text>
                                </svg>
                            </div>

                            <h3>3. Working Principle</h3>
                            <p>The output voltage depends on the position of the core.</p>
                            <p><strong>Net Output (Vo) = Vs1 - Vs2</strong> (Vector difference).</p>

                            <h4>Case 1: Null Position (Core at Center)</h4>
                            <p>Flux linkage to S1 equals flux linkage to S2.</p>
                            <p>Vs1 = Vs2.</p>
                            <p><strong>Vo = 0.</strong></p>

                            <h4>Case 2: Core moves Right (towards S2)</h4>
                            <p>More flux links with S2 than S1.</p>
                            <p>Vs2 > Vs1.</p>
                            <p><strong>Vo = Vs2 - Vs1</strong> (180° phase shift w.r.t primary).</p>

                            <h4>Case 3: Core moves Left (towards S1)</h4>
                            <p>More flux links with S1 than S2.</p>
                            <p>Vs1 > Vs2.</p>
                            <p><strong>Vo = Vs1 - Vs2</strong> (In-phase w.r.t primary).</p>

                            <h3>4. Characteristics</h3>
                            <ul>
                                <li><strong>Linear Range:</strong> For a limited range of displacement (e.g., ±5mm), the output voltage is directly proportional to displacement.</li>
                                <li><strong>Non-Linear Region:</strong> Beyond the linear range, the curve bends due to flux leakage.</li>
                                <li><strong>Residual Voltage:</strong> At null position, output is not exactly zero due to harmonics and stray capacitance. This small voltage is called residual voltage (typically < 1%).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Axes -->
                                    <line x1="50" y1="200" x2="350" y2="200" stroke="#333" stroke-width="2"/>
                                    <line x1="200" y1="20" x2="200" y2="220" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Labels -->
                                    <text x="350" y="215" text-anchor="end" font-size="12">Displacement</text>
                                    <text x="210" y="30" font-size="12">Output Voltage (Vo)</text>
                                    <text x="50" y="215" font-size="12">-ve</text>
                                    <text x="330" y="215" font-size="12">+ve</text>
                                    <text x="190" y="215" font-size="12">Null</text>
                                    
                                    <!-- Curve -->
                                    <polyline points="100,50 180,190 200,200 220,190 300,50" fill="none" stroke="#d32f2f" stroke-width="3"/>
                                    
                                    <!-- Linear Range -->
                                    <line x1="180" y1="190" x2="180" y2="210" stroke="#999" stroke-dasharray="4"/>
                                    <line x1="220" y1="190" x2="220" y2="210" stroke="#999" stroke-dasharray="4"/>
                                    <text x="200" y="180" text-anchor="middle" font-size="10" fill="#666">Linear Range</text>
                                </svg>
                            </div>

                            <h3>5. Signal Conditioning</h3>
                            <p>Since the output is AC and magnitude is same for left/right movement, a <strong>Phase Sensitive Demodulator</strong> is used to convert the AC output into a DC voltage that indicates both magnitude and direction (polarity).</p>

                            <h3>6. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Infinite resolution, high linearity (0.05%), frictionless operation (long life), rugged, high sensitivity.</li>
                                <li><strong>Disadvantages:</strong> Sensitive to stray magnetic fields, requires AC excitation, dynamic response limited by excitation frequency.</li>
                            </ul>

                            <h3>7. Applications</h3>
                            <ul>
                                <li>Displacement measurement (microns to cms).</li>
                                <li>Secondary transducer in Pressure (Bourdon tube) and Force (Load cell) sensors.</li>
                                <li>CNC machine tool positioning.</li>
                            </ul>
                        </div>
                    `},{question:"Describe the Hall Effect Sensor and its applications.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Hall Effect Sensors</strong> are solid-state devices that sense magnetic fields. They are used for proximity switching, positioning, speed detection, and current sensing.</p>

                            <h3>2. Principle: The Hall Effect</h3>
                            <p>Discovered by Edwin Hall in 1879.</p>
                            <blockquote>"When a current-carrying conductor or semiconductor is placed in a transverse magnetic field, a potential difference (voltage) is generated perpendicular to both the current and the magnetic field directions."</blockquote>

                            <h3>3. Physics & Derivation</h3>
                            <p>Consider a semiconductor slab:</p>
                            <ul>
                                <li>Current (I) flows in X-direction.</li>
                                <li>Magnetic Field (B) is applied in Z-direction.</li>
                                <li>Lorentz Force (F = q(v x B)) acts on charge carriers, pushing them to the Y-direction edge.</li>
                            </ul>
                            <p>This charge accumulation creates an electric field that opposes further migration. At equilibrium, the Hall Voltage (Vh) is established.</p>
                            <p class="formula">Vh = (Rh * I * B) / t</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>Rh:</strong> Hall Coefficient (depends on material type n or p).</li>
                                <li><strong>I:</strong> Current.</li>
                                <li><strong>B:</strong> Magnetic Flux Density.</li>
                                <li><strong>t:</strong> Thickness of the strip.</li>
                            </ul>
                            <p><em>Note:</em> Semiconductors (InSb, GaAs) are used because they have high carrier mobility, producing a larger Vh than metals.</p>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Slab -->
                                    <path d="M 100 100 L 300 100 L 340 60 L 140 60 Z" fill="#b2dfdb" stroke="#00695c"/>
                                    <rect x="100" y="100" width="200" height="40" fill="#80cbc4" stroke="#00695c"/>
                                    <path d="M 300 100 L 340 60 L 340 100 L 300 140 Z" fill="#4db6ac" stroke="#00695c"/>
                                    
                                    <!-- Current I -->
                                    <line x1="50" y1="120" x2="100" y2="120" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
                                    <text x="70" y="115" font-weight="bold">I</text>
                                    
                                    <!-- Magnetic Field B -->
                                    <line x1="220" y1="20" x2="220" y2="80" stroke="#d32f2f" stroke-width="2" marker-end="url(#arrow)"/>
                                    <text x="230" y="40" font-weight="bold" fill="#d32f2f">B</text>
                                    
                                    <!-- Voltage Vh -->
                                    <line x1="220" y1="60" x2="220" y2="40" stroke="#333" stroke-width="1"/>
                                    <line x1="220" y1="140" x2="220" y2="180" stroke="#333" stroke-width="1"/>
                                    <circle cx="220" cy="200" r="15" fill="#fff" stroke="#333"/>
                                    <text x="220" y="205" text-anchor="middle" font-weight="bold">Vh</text>
                                    
                                    <!-- Charge Accumulation -->
                                    <text x="220" y="135" text-anchor="middle" font-size="10" font-weight="bold">- - - -</text>
                                    <text x="220" y="75" text-anchor="middle" font-size="10" font-weight="bold">+ + + +</text>
                                </svg>
                            </div>

                            <h3>4. Types of Hall Sensors</h3>
                            <ul>
                                <li><strong>Linear (Analog) Hall Sensors:</strong> Output voltage is directly proportional to magnetic field strength. Used for measuring field strength or continuous distance.</li>
                                <li><strong>Digital (Switch) Hall Sensors:</strong> Contains a Schmitt trigger. Output snaps ON or OFF when magnetic field crosses a threshold. Used for proximity detection.</li>
                            </ul>

                            <h3>5. Applications</h3>
                            
                            <h4>A. RPM / Speed Measurement</h4>
                            <p>A magnet is attached to a rotating shaft. A stationary Hall sensor detects the magnet passing by. The frequency of pulses = Speed.</p>
                            
                            <h4>B. Brushless DC Motors (BLDC)</h4>
                            <p>Used to detect the position of the permanent magnet rotor to determine which stator coils to energize (electronic commutation).</p>
                            
                            <h4>C. Current Sensing (Hall Clamp Meter)</h4>
                            <p>Measures current flowing through a wire without contact. The wire creates a magnetic field around it (B ∝ I). The Hall sensor measures B and calculates I.</p>
                            
                            <h4>D. Automotive Ignition</h4>
                            <p>Replaced mechanical breaker points. Detects camshaft position to fire spark plugs.</p>
                            
                            <h4>E. Keyboard Switches</h4>
                            <p>High-reliability keys (no contact bounce, waterproof).</p>
                        </div>
                    `}]},{unit:"IV",questionNumber:14,choices:[{question:"Explain the construction and working of a Photodiode.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Photodiode</strong> is a semiconductor PN junction device that converts light energy (photons) into electrical current. It is operated in <strong>Reverse Bias</strong>.</p>

                            <h3>2. Construction</h3>
                            <ul>
                                <li><strong>Material:</strong> Silicon (visible light), Germanium (IR), or Indium Gallium Arsenide (InGaAs) for fiber optics.</li>
                                <li><strong>Structure:</strong> A PN junction is housed in a package with a transparent window or lens on top to allow light to focus on the junction.</li>
                                <li><strong>PIN Photodiode:</strong> A layer of Intrinsic (I) semiconductor is added between P and N layers to increase the depletion width, improving sensitivity and speed.</li>
                            </ul>

                            <h3>3. Working Principle</h3>
                            <ol>
                                <li><strong>Dark Condition:</strong> When reverse biased with no light, a negligible current flows due to minority carriers. This is called <strong>Dark Current</strong> (Id).</li>
                                <li><strong>Illumination:</strong> When light falls on the junction, photons with energy (E = hν > Bandgap Eg) strike the depletion region.</li>
                                <li><strong>Generation:</strong> The energy is absorbed, breaking covalent bonds and generating electron-hole pairs.</li>
                                <li><strong>Conduction:</strong> The strong electric field in the depletion region sweeps electrons to the N-side and holes to the P-side.</li>
                                <li><strong>Photocurrent:</strong> This movement constitutes a reverse current (Ip) which is linearly proportional to the intensity of incident light.</li>
                            </ol>
                            <p class="formula">Total Current I = Is + Ip</p>

                            <h3>4. V-I Characteristics</h3>
                            <p>The characteristics are plotted in the 3rd Quadrant (Reverse Bias).</p>
                            <ul>
                                <li>X-axis: Reverse Voltage (Vr).</li>
                                <li>Y-axis: Reverse Current (Ir).</li>
                                <li>As Light Intensity (Lux) increases, the horizontal current lines shift downwards (current increases).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Axes -->
                                    <line x1="200" y1="20" x2="200" y2="220" stroke="#333" stroke-width="2"/>
                                    <line x1="50" y1="120" x2="350" y2="120" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Labels -->
                                    <text x="350" y="135" text-anchor="end" font-size="12">Voltage (V)</text>
                                    <text x="210" y="30" font-size="12">Current (I)</text>
                                    <text x="50" y="135" font-size="12">-Vr</text>
                                    <text x="210" y="215" font-size="12">-Ir</text>
                                    
                                    <!-- Curves (3rd Quadrant) -->
                                    <path d="M 200 120 L 50 125" fill="none" stroke="#999" stroke-dasharray="4"/>
                                    <text x="80" y="115" font-size="10" fill="#666">Dark Current</text>
                                    
                                    <path d="M 200 120 L 50 150" fill="none" stroke="#d32f2f" stroke-width="2"/>
                                    <text x="60" y="145" font-size="10" fill="#d32f2f">1000 Lux</text>
                                    
                                    <path d="M 200 120 L 50 180" fill="none" stroke="#d32f2f" stroke-width="2"/>
                                    <text x="60" y="175" font-size="10" fill="#d32f2f">2000 Lux</text>
                                    
                                    <path d="M 200 120 L 50 210" fill="none" stroke="#d32f2f" stroke-width="2"/>
                                    <text x="60" y="205" font-size="10" fill="#d32f2f">3000 Lux</text>
                                </svg>
                            </div>

                            <h3>5. Modes of Operation</h3>
                            <ul>
                                <li><strong>Photoconductive Mode:</strong> Reverse biased. Fast response, high linearity. Used in fiber optic receivers. Has dark current noise.</li>
                                <li><strong>Photovoltaic Mode:</strong> Zero bias. No dark current. Used in precision light meters and solar cells. Slower response.</li>
                            </ul>

                            <h3>6. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Very fast response (nanoseconds), linear response, small size, low cost.</li>
                                <li><strong>Disadvantages:</strong> Requires amplification (low current), temperature sensitive, small active area.</li>
                            </ul>

                            <h3>7. Applications</h3>
                            <ul>
                                <li>Optical Communication (Fiber optics).</li>
                                <li>Remote controls (TV IR receivers).</li>
                                <li>Smoke detectors.</li>
                                <li>Barcode scanners.</li>
                            </ul>
                        </div>
                    `},{question:"Describe the measurement of pH using a Glass Electrode.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>pH</strong> is a measure of the acidity or alkalinity of a solution. It is defined as the negative logarithm of Hydrogen ion concentration.</p>
                            <p class="formula">pH = -log₁₀[H⁺]</p>
                            <p>The <strong>Glass Electrode</strong> method is the standard industrial and laboratory method for pH measurement (Potentiometric method).</p>

                            <h3>2. The Electrode System</h3>
                            <p>It consists of two electrodes dipped in the solution:</p>
                            
                            <h4>A. Measuring Electrode (Glass Electrode)</h4>
                            <ul>
                                <li>Consists of a glass tube with a thin, pH-sensitive glass bulb at the tip.</li>
                                <li>Inside the bulb is a buffer solution of fixed pH (usually 0.1M HCl, pH 7).</li>
                                <li>An internal reference wire (Ag/AgCl) is immersed in this buffer.</li>
                            </ul>

                            <h4>B. Reference Electrode</h4>
                            <ul>
                                <li>Provides a stable, constant potential independent of the test solution.</li>
                                <li>Common types: <strong>Calomel Electrode</strong> (Hg/Hg₂Cl₂) or Silver-Silver Chloride (Ag/AgCl).</li>
                                <li>It has a porous junction (salt bridge) to complete the electrical circuit with the test solution.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Beaker -->
                                    <path d="M 100 50 L 100 200 Q 100 220 120 220 L 280 220 Q 300 220 300 200 L 300 50" fill="none" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Solution -->
                                    <path d="M 100 100 L 100 200 Q 100 220 120 220 L 280 220 Q 300 220 300 200 L 300 100 Z" fill="#e1f5fe" stroke="none"/>
                                    <text x="200" y="180" text-anchor="middle" fill="#0277bd" font-size="12">Test Solution</text>
                                    
                                    <!-- Glass Electrode -->
                                    <rect x="140" y="20" width="20" height="150" fill="#fff" stroke="#333"/>
                                    <circle cx="150" cy="170" r="15" fill="#fff" stroke="#333"/>
                                    <line x1="150" y1="20" x2="150" y2="160" stroke="#333"/>
                                    <text x="150" y="15" text-anchor="middle" font-size="10">Glass Electrode</text>
                                    
                                    <!-- Reference Electrode -->
                                    <rect x="240" y="20" width="20" height="150" fill="#fff" stroke="#333"/>
                                    <line x1="250" y1="20" x2="250" y2="160" stroke="#333"/>
                                    <text x="250" y="15" text-anchor="middle" font-size="10">Ref Electrode</text>
                                    
                                    <!-- pH Meter -->
                                    <rect x="170" y="-20" width="60" height="30" fill="#333" stroke="none"/>
                                    <text x="200" y="0" text-anchor="middle" fill="#0f0" font-family="monospace">7.01</text>
                                    
                                    <!-- Wires -->
                                    <path d="M 150 20 L 150 -5 L 170 -5" fill="none" stroke="#333"/>
                                    <path d="M 250 20 L 250 -5 L 230 -5" fill="none" stroke="#333"/>
                                </svg>
                            </div>

                            <h3>3. Working Principle</h3>
                            <p>When the glass bulb is immersed in the test solution, an ion-exchange equilibrium is established at the glass-solution interface.</p>
                            <ul>
                                <li>If the solution is acidic (High H⁺), H⁺ ions migrate into the glass surface layer.</li>
                                <li>If alkaline, H⁺ ions migrate out.</li>
                            </ul>
                            <p>This creates a potential difference across the glass membrane called the <strong>Nernst Potential</strong>.</p>

                            <h3>4. The Nernst Equation</h3>
                            <p>The potential E generated is given by:</p>
                            <p class="formula">E = E₀ - (2.303 RT / F) * pH</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>E₀:</strong> Standard potential.</li>
                                <li><strong>R:</strong> Gas constant.</li>
                                <li><strong>T:</strong> Absolute Temperature (K).</li>
                                <li><strong>F:</strong> Faraday's constant.</li>
                            </ul>
                            <p>At 25°C, the factor (2.303 RT / F) is approx <strong>59.16 mV</strong>.</p>
                            <p>So, for every 1 unit change in pH, the voltage changes by 59.16 mV.</p>

                            <h3>5. Measurement & Calibration</h3>
                            <ul>
                                <li>The voltage is measured by a high-input impedance voltmeter (pH meter) because the glass electrode has very high resistance (100 MΩ).</li>
                                <li><strong>Temperature Compensation:</strong> Since 'T' is in the equation, pH meters have a temperature probe (RTD) to correct the reading automatically (ATC).</li>
                                <li><strong>Calibration:</strong> The meter must be calibrated regularly using standard buffer solutions (pH 4.01, 7.00, 10.01) to correct for aging (Slope adjustment).</li>
                            </ul>

                            <h3>6. Applications</h3>
                            <ul>
                                <li>Chemical processing (neutralization).</li>
                                <li>Water treatment plants.</li>
                                <li>Food and Beverage industry.</li>
                                <li>Blood pH monitoring.</li>
                            </ul>
                        </div>
                    `}]},{unit:"V",questionNumber:15,choices:[{question:"What are Smart Sensors? Explain their block diagram and features.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Smart Sensor</strong> (or Intelligent Sensor) is a sensor that goes beyond simple detection. It integrates the sensing element with signal conditioning, data processing (microcontroller), and communication capabilities in a single package.</p>
                            <p>It follows the <strong>IEEE 1451</strong> standard for smart transducer interfaces.</p>

                            <h3>2. Block Diagram Description</h3>
                            <p>A smart sensor consists of the following functional blocks:</p>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <defs>
                                        <marker id="arrow-smart" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
                                    </defs>
                                    
                                    <!-- Input -->
                                    <text x="30" y="75" text-anchor="middle" font-size="10">Physical Input</text>
                                    <line x1="50" y1="70" x2="70" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                                    
                                    <!-- Sensor -->
                                    <rect x="70" y="40" width="60" height="60" rx="5" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="100" y="75" text-anchor="middle" font-size="10">Primary Sensor</text>
                                    <line x1="130" y1="70" x2="150" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                                    
                                    <!-- Signal Cond -->
                                    <rect x="150" y="40" width="80" height="60" rx="5" fill="#fff9c4" stroke="#fbc02d"/>
                                    <text x="190" y="65" text-anchor="middle" font-size="10">Signal Cond.</text>
                                    <text x="190" y="80" text-anchor="middle" font-size="8">(Amp/Filter)</text>
                                    <line x1="230" y1="70" x2="250" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                                    
                                    <!-- ADC -->
                                    <rect x="250" y="40" width="50" height="60" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                                    <text x="275" y="75" text-anchor="middle" font-size="10">ADC</text>
                                    <line x1="300" y1="70" x2="320" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                                    
                                    <!-- Microprocessor -->
                                    <rect x="320" y="30" width="100" height="80" rx="5" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="370" y="60" text-anchor="middle" font-size="10" font-weight="bold">Microprocessor</text>
                                    <text x="370" y="75" text-anchor="middle" font-size="10">DSP / Logic</text>
                                    <line x1="420" y1="70" x2="440" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                                    
                                    <!-- Comm Interface -->
                                    <rect x="440" y="40" width="80" height="60" rx="5" fill="#c8e6c9" stroke="#388e3c"/>
                                    <text x="480" y="65" text-anchor="middle" font-size="10">Comm.</text>
                                    <text x="480" y="80" text-anchor="middle" font-size="10">Interface</text>
                                    <line x1="520" y1="70" x2="550" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                                    
                                    <!-- Output -->
                                    <text x="575" y="75" text-anchor="middle" font-size="10">Digital Out</text>
                                </svg>
                            </div>

                            <ul>
                                <li><strong>Primary Sensing Element:</strong> Detects the physical quantity (e.g., pressure, temp) and gives a raw analog signal.</li>
                                <li><strong>Excitation Control:</strong> Provides constant current/voltage to the sensor if needed.</li>
                                <li><strong>Amplification & Filtering (Analog Front End):</strong> Amplifies weak signals and removes noise (Anti-aliasing filter).</li>
                                <li><strong>ADC (Analog to Digital Converter):</strong> Converts the conditioned analog signal into digital data for the processor.</li>
                                <li><strong>Microprocessor / DSP:</strong> The "Brain" of the sensor. It performs:
                                    <ul>
                                        <li><strong>Linearization:</strong> Corrects non-linear sensor response.</li>
                                        <li><strong>Compensation:</strong> Corrects for cross-sensitivity (e.g., temp effects on pressure).</li>
                                        <li><strong>Data Processing:</strong> Averaging, unit conversion.</li>
                                    </ul>
                                </li>
                                <li><strong>Memory (EEPROM/Flash):</strong> Stores calibration data (TEDS - Transducer Electronic Data Sheet), sensor ID, and configuration.</li>
                                <li><strong>Communication Interface:</strong> Transmits data via standard protocols (UART, I2C, SPI, CAN, Zigbee, Wi-Fi).</li>
                            </ul>

                            <h3>3. Key Features</h3>
                            <ul>
                                <li><strong>Self-Calibration:</strong> Can automatically adjust offset and gain.</li>
                                <li><strong>Self-Diagnosis:</strong> Can detect if the sensor is broken, disconnected, or operating out of range.</li>
                                <li><strong>Multi-Sensing:</strong> One package can measure multiple parameters (e.g., A pressure sensor that also measures temp for compensation).</li>
                                <li><strong>Digital Communication:</strong> Direct interface with PLCs, SCADA, and IoT networks.</li>
                                <li><strong>Remote Configuration:</strong> Settings can be changed remotely via software.</li>
                            </ul>

                            <h3>4. Advantages</h3>
                            <ul>
                                <li>Higher accuracy and reliability.</li>
                                <li>Reduced load on the main system controller.</li>
                                <li>Easy networking and scalability.</li>
                                <li>Plug-and-play capability.</li>
                            </ul>
                        </div>
                    `},{question:"Discuss the applications of Sensors in the Automotive Industry.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>Modern automobiles are "Computers on Wheels," using 50-100+ sensors to monitor engine performance, safety, comfort, and emissions. These sensors feed data to the <strong>ECU (Electronic Control Unit)</strong>.</p>

                            <h3>2. Powertrain (Engine & Transmission)</h3>
                            <ul>
                                <li><strong>MAP Sensor (Manifold Absolute Pressure):</strong> Measures air pressure in the intake manifold to calculate air density and determine fuel injection mass.</li>
                                <li><strong>MAF Sensor (Mass Air Flow):</strong> Directly measures the mass of air entering the engine.</li>
                                <li><strong>Oxygen Sensor (Lambda Sensor):</strong> Located in the exhaust. Measures O₂ levels to adjust the air-fuel ratio for optimal combustion and emission control (Stoichiometry). Uses Zirconia elements.</li>
                                <li><strong>Crankshaft/Camshaft Position Sensors:</strong> (Hall Effect/Inductive) Determine engine speed (RPM) and piston position for ignition timing.</li>
                                <li><strong>Knock Sensor:</strong> (Piezoelectric) Detects engine knocking (detonation) so ECU can retard ignition timing.</li>
                                <li><strong>Throttle Position Sensor (TPS):</strong> Monitors gas pedal position.</li>
                            </ul>

                            <h3>3. Chassis & Safety Systems</h3>
                            <ul>
                                <li><strong>Wheel Speed Sensors:</strong> (Hall Effect) Measure speed of each wheel. Essential for <strong>ABS (Anti-lock Braking System)</strong> and Traction Control.</li>
                                <li><strong>Accelerometers (MEMS):</strong> Detect sudden deceleration (crash) to deploy <strong>Airbags</strong>. Also used in Electronic Stability Control (ESC).</li>
                                <li><strong>TPMS (Tire Pressure Monitoring System):</strong> Wireless sensors inside tires measure pressure and temp to warn of under-inflation.</li>
                                <li><strong>Steering Angle Sensor:</strong> Measures steering wheel position for stability control.</li>
                            </ul>

                            <h3>4. Comfort & Convenience</h3>
                            <ul>
                                <li><strong>Cabin Temperature Sensors:</strong> For Automatic Climate Control (HVAC).</li>
                                <li><strong>Rain Sensor:</strong> (Optical) Detects rain on windshield to activate wipers automatically.</li>
                                <li><strong>Light Sensor:</strong> Turns on headlights in tunnels/night.</li>
                                <li><strong>Ultrasonic / Radar Sensors:</strong> Used for Parking Assist and Blind Spot Detection.</li>
                            </ul>

                            <h3>5. Future: ADAS & Autonomous Driving</h3>
                            <ul>
                                <li><strong>LiDAR:</strong> 3D mapping of surroundings.</li>
                                <li><strong>Radar:</strong> Adaptive Cruise Control (distance keeping).</li>
                                <li><strong>Cameras:</strong> Lane departure warning, sign recognition.</li>
                            </ul>
                        </div>
                    `}]}]},J0={title:"B.Tech IV Year I Semester Regular Examinations",subject:"ELECTRONIC SENSORS - MODEL PAPER 2",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Active and Passive Transducers with examples.",answer:"<strong>Active Transducers:</strong> Generate their own electrical output (voltage/current) without external power (e.g., Thermocouple, Piezoelectric).<br><strong>Passive Transducers:</strong> Require an external power source to operate (e.g., Strain Gauge, LVDT)."},{unit:"I",id:2,question:"What is the principle of an Inductive Transducer?",answer:"It works on the principle of change in inductance (L) due to a change in magnetic flux, permeability, or dimensions. <strong>L = (N²μA) / l</strong>."},{unit:"II",id:3,question:"What is a Thermistor? Mention its types.",answer:"A <strong>Thermistor</strong> (Thermal Resistor) is a temperature-sensitive resistor made of semiconductor material.<br>Types: <strong>NTC</strong> (Negative Temperature Coefficient) and <strong>PTC</strong> (Positive Temperature Coefficient)."},{unit:"II",id:4,question:"What is the Peltier Effect?",answer:"The <strong>Peltier Effect</strong> states that when an electric current flows through a junction of two dissimilar metals, heat is either absorbed or evolved at the junction, depending on the direction of current."},{unit:"III",id:5,question:"Define Magnetostriction.",answer:"<strong>Magnetostriction</strong> is the property of ferromagnetic materials that causes them to change their shape or dimensions during the process of magnetization."},{unit:"III",id:6,question:"What is the Piezoelectric Effect?",answer:"The generation of an electric charge across certain crystals (like Quartz) when subjected to mechanical stress is called the <strong>Piezoelectric Effect</strong>."},{unit:"IV",id:7,question:"What is a Phototransistor?",answer:"A <strong>Phototransistor</strong> is a light-sensitive transistor. It is similar to a BJT but with a large base area exposed to light. It amplifies the current generated by light."},{unit:"IV",id:8,question:"Define Conductivity of a solution.",answer:"<strong>Conductivity</strong> is the measure of a solution's ability to conduct electricity. It depends on the concentration of ions in the solution. Unit: Siemens per meter (S/m)."},{unit:"V",id:9,question:"What is MEMS?",answer:"<strong>MEMS (Micro-Electro-Mechanical Systems)</strong> is a technology that integrates mechanical and electrical components (sensors, actuators, electronics) on a microscopic scale (micrometers) on a silicon chip."},{unit:"V",id:10,question:"What is the function of a Knock Sensor?",answer:"A <strong>Knock Sensor</strong> detects engine knocking or detonation (abnormal combustion) by sensing high-frequency vibrations and sends a signal to the ECU to adjust ignition timing."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the construction and working of a Linear Potentiometer (Resistive Transducer).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Potentiometer (Pot)</strong> is a passive resistive transducer used to measure linear or angular displacement. It works on the principle of variable resistance.</p>

                            <h3>2. Construction</h3>
                            <ul>
                                <li><strong>Resistive Element:</strong> A wire wound on a non-conducting former (ceramic/plastic) or a carbon film track.</li>
                                <li><strong>Wiper (Slider):</strong> A movable metal contact that slides over the resistive element. It is mechanically connected to the object whose displacement is to be measured.</li>
                                <li><strong>Terminals:</strong> Three terminals - two fixed ends (A, B) and one variable wiper terminal (C).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Resistor Track -->
                                    <rect x="50" y="60" width="300" height="20" fill="#e0e0e0" stroke="#333"/>
                                    <path d="M 50 60 L 350 60 L 350 80 L 50 80 Z" fill="none" stroke="#333" stroke-dasharray="2,2"/>
                                    
                                    <!-- Terminals -->
                                    <circle cx="50" cy="70" r="5" fill="#333"/>
                                    <text x="40" y="50" font-weight="bold">A (Vin)</text>
                                    <circle cx="350" cy="70" r="5" fill="#333"/>
                                    <text x="340" y="50" font-weight="bold">B (GND)</text>
                                    
                                    <!-- Wiper -->
                                    <line x1="200" y1="20" x2="200" y2="60" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrow)"/>
                                    <circle cx="200" cy="20" r="5" fill="#d32f2f"/>
                                    <text x="210" y="30" font-weight="bold" fill="#d32f2f">C (Vout)</text>
                                    
                                    <!-- Motion -->
                                    <text x="200" y="110" text-anchor="middle" font-size="12">Displacement (x)</text>
                                    <line x1="150" y1="100" x2="250" y2="100" stroke="#333" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                                </svg>
                            </div>

                            <h3>3. Working Principle</h3>
                            <p>When a voltage <strong>Vin</strong> is applied across the fixed terminals A and B, the voltage at the wiper C depends on its position.</p>
                            <p class="formula">Vout = Vin * (R_AC / R_AB)</p>
                            <p>Since Resistance ∝ Length (R = ρL/A):</p>
                            <p class="formula">Vout = Vin * (x / L)</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>x:</strong> Displacement of the wiper.</li>
                                <li><strong>L:</strong> Total length of the resistive track.</li>
                            </ul>
                            <p>Thus, <strong>Vout ∝ x</strong>. The output voltage is linearly proportional to displacement.</p>

                            <h3>4. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Simple, low cost, high output (no amplification needed), can measure large displacements.</li>
                                <li><strong>Disadvantages:</strong> Friction and wear (limited life), noise (contact bounce), low resolution (for wire-wound types).</li>
                            </ul>
                        </div>
                    `},{question:"Discuss the principle and operation of Piezo-resistive sensors.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Piezo-resistive sensors</strong> change their electrical resistance when mechanical stress is applied. Unlike strain gauges (which rely on geometric changes), piezo-resistive sensors rely on the change in <strong>resistivity (ρ)</strong> of the material.</p>

                            <h3>2. Principle: Piezoresistive Effect</h3>
                            <p>When a semiconductor crystal (like Silicon or Germanium) is stressed, the energy band structure changes, altering the mobility of charge carriers. This results in a significant change in resistivity.</p>
                            <p class="formula">ΔR / R = π * σ</p>
                            <p>Where <strong>π</strong> is the Piezoresistive coefficient and <strong>σ</strong> is the Stress.</p>
                            <p><em>Note:</em> The Gauge Factor (GF) for semiconductors is very high (typically 100-200), compared to metals (GF ~2).</p>

                            <h3>3. Construction (Diaphragm Type)</h3>
                            <ul>
                                <li>A thin Silicon diaphragm is micromachined.</li>
                                <li>Four piezo-resistors are diffused into the diaphragm surface at specific stress points.</li>
                                <li>These resistors are connected in a Wheatstone bridge configuration.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Diaphragm -->
                                    <circle cx="150" cy="100" r="80" fill="#e3f2fd" stroke="#2196f3" stroke-width="2"/>
                                    <text x="150" y="105" text-anchor="middle" fill="#2196f3" opacity="0.3" font-size="20">Diaphragm</text>
                                    
                                    <!-- Resistors -->
                                    <rect x="100" y="80" width="20" height="10" fill="#333"/>
                                    <rect x="180" y="80" width="20" height="10" fill="#333"/>
                                    <rect x="140" y="50" width="10" height="20" fill="#333"/>
                                    <rect x="140" y="130" width="10" height="20" fill="#333"/>
                                    
                                    <!-- Connections -->
                                    <path d="M 110 85 L 145 60 L 190 85 L 145 140 Z" fill="none" stroke="#333" stroke-dasharray="2,2"/>
                                    <text x="150" y="180" text-anchor="middle" font-size="12">Diffused Resistors</text>
                                </svg>
                            </div>

                            <h3>4. Working</h3>
                            <ul>
                                <li>When pressure is applied to the diaphragm, it deflects.</li>
                                <li>Two resistors undergo tensile stress (R increases) and two undergo compressive stress (R decreases).</li>
                                <li>The bridge becomes unbalanced, producing an output voltage proportional to pressure.</li>
                            </ul>

                            <h3>5. Applications</h3>
                            <ul>
                                <li>MAP (Manifold Absolute Pressure) sensors in cars.</li>
                                <li>Blood pressure monitoring.</li>
                                <li>Depth sensing in diving watches.</li>
                            </ul>
                        </div>
                    `}]},{unit:"II",questionNumber:12,choices:[{question:"Explain the working of a Radiation Pyrometer (Optical Pyrometer).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Radiation Pyrometer</strong> is a non-contact temperature sensor used to measure very high temperatures (above 1000°C) by detecting the thermal radiation emitted by the body. It is based on the <strong>Stefan-Boltzmann Law</strong>.</p>
                            <p class="formula">E = σ * T⁴</p>

                            <h3>2. Optical Pyrometer (Disappearing Filament Type)</h3>
                            <p>It compares the brightness of the hot source with the brightness of a standard filament lamp.</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Objective Lens:</strong> Focuses radiation from the hot source onto the filament.</li>
                                <li><strong>Reference Lamp:</strong> A tungsten filament lamp placed at the focal point.</li>
                                <li><strong>Eyepiece:</strong> Allows the observer to view the filament superimposed on the hot source image.</li>
                                <li><strong>Red Filter:</strong> Allows only a narrow band of wavelength (monochromatic) to pass.</li>
                                <li><strong>Rheostat & Ammeter:</strong> Controls and measures the current through the lamp.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Optical Path -->
                                    <rect x="50" y="50" width="400" height="100" fill="none" stroke="#333"/>
                                    
                                    <!-- Lens -->
                                    <ellipse cx="100" cy="100" rx="10" ry="40" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="100" y="150" text-anchor="middle" font-size="10">Obj Lens</text>
                                    
                                    <!-- Lamp -->
                                    <circle cx="250" cy="100" r="20" fill="none" stroke="#333"/>
                                    <path d="M 240 110 Q 250 80 260 110" fill="none" stroke="#ffeb3b" stroke-width="2"/>
                                    <text x="250" y="130" text-anchor="middle" font-size="10">Filament</text>
                                    
                                    <!-- Eye -->
                                    <path d="M 450 90 Q 470 100 450 110" fill="none" stroke="#333"/>
                                    <circle cx="445" cy="100" r="2" fill="#333"/>
                                    <text x="460" y="130" text-anchor="middle" font-size="10">Eye</text>
                                    
                                    <!-- Circuit -->
                                    <rect x="200" y="160" width="100" height="30" fill="#f5f5f5" stroke="#333"/>
                                    <text x="250" y="180" text-anchor="middle" font-size="10">Power Supply & Ammeter</text>
                                    <line x1="250" y1="120" x2="250" y2="160" stroke="#333"/>
                                </svg>
                            </div>

                            <h3>4. Working Procedure</h3>
                            <ol>
                                <li>The pyrometer is aimed at the hot source.</li>
                                <li>The observer sees the filament against the background of the hot source.</li>
                                <li>The current through the filament is adjusted using the rheostat.</li>
                                <li><strong>Case 1 (Dark):</strong> Filament is cooler than source (Current too low).</li>
                                <li><strong>Case 2 (Bright):</strong> Filament is hotter than source (Current too high).</li>
                                <li><strong>Case 3 (Disappears):</strong> Filament brightness matches source brightness. This is the balance point.</li>
                            </ol>
                            <p>The current required to make the filament disappear is calibrated directly in terms of temperature.</p>

                            <h3>5. Applications</h3>
                            <ul>
                                <li>Furnaces and Kilns.</li>
                                <li>Molten metal temperature measurement.</li>
                            </ul>
                        </div>
                    `},{question:"Describe the construction and characteristics of a Thermistor.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Thermistor</strong> (Thermal Resistor) is a semiconductor device whose resistance changes significantly with temperature. Unlike metals (RTDs), thermistors have a <strong>Negative Temperature Coefficient (NTC)</strong> (usually).</p>

                            <h3>2. Construction</h3>
                            <p>Thermistors are made from sintered mixtures of metallic oxides like Manganese, Nickel, Cobalt, Copper, and Iron.</p>
                            <ul>
                                <li><strong>Bead Type:</strong> Smallest, fastest response. Sealed in glass.</li>
                                <li><strong>Disc Type:</strong> Pressed into discs for higher power handling.</li>
                                <li><strong>Rod Type:</strong> Long rods for high resistance.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Bead -->
                                    <circle cx="100" cy="75" r="15" fill="#333"/>
                                    <line x1="50" y1="75" x2="85" y2="75" stroke="#333" stroke-width="2"/>
                                    <line x1="115" y1="75" x2="150" y2="75" stroke="#333" stroke-width="2"/>
                                    <text x="100" y="110" text-anchor="middle" font-size="12">Bead Type</text>
                                    
                                    <!-- Disc -->
                                    <ellipse cx="220" cy="75" rx="10" ry="25" fill="#795548"/>
                                    <line x1="180" y1="75" x2="210" y2="75" stroke="#333" stroke-width="2"/>
                                    <line x1="230" y1="75" x2="260" y2="75" stroke="#333" stroke-width="2"/>
                                    <text x="220" y="110" text-anchor="middle" font-size="12">Disc Type</text>
                                </svg>
                            </div>

                            <h3>3. Characteristics (R-T Curve)</h3>
                            <p>The resistance-temperature relationship is exponential and non-linear.</p>
                            <p class="formula">Rt = R₀ * e^(β(1/T - 1/T₀))</p>
                            <p>Where β is the material constant (3000K - 4000K).</p>
                            
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Axes -->
                                    <line x1="50" y1="150" x2="250" y2="150" stroke="#333" stroke-width="2"/>
                                    <line x1="50" y1="20" x2="50" y2="150" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Labels -->
                                    <text x="250" y="165" text-anchor="end" font-size="12">Temperature (T)</text>
                                    <text x="60" y="30" font-size="12">Resistance (R)</text>
                                    
                                    <!-- Curve -->
                                    <path d="M 60 30 Q 80 140 240 145" fill="none" stroke="#d32f2f" stroke-width="3"/>
                                    <text x="150" y="80" fill="#d32f2f" font-weight="bold">NTC</text>
                                </svg>
                            </div>

                            <h3>4. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> High sensitivity (large ΔR for small ΔT), fast response, small size, low cost.</li>
                                <li><strong>Disadvantages:</strong> Highly non-linear, limited temperature range (-100°C to 300°C), self-heating error.</li>
                            </ul>
                        </div>
                    `}]},{unit:"III",questionNumber:13,choices:[{question:"Explain the working of a Magnetostrictive Sensor.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Magnetostrictive Sensors</strong> are used for precise position and level measurement. They work on the principle of the <strong>Wiedemann Effect</strong> (twisting of a ferromagnetic rod in a magnetic field).</p>

                            <h3>2. Principle: Magnetostriction</h3>
                            <p>When a ferromagnetic material (like Nickel or Terfenol-D) is placed in a magnetic field, its dimensions change. Conversely, mechanical stress changes its magnetic properties (Villari Effect).</p>

                            <h3>3. Construction & Working</h3>
                            <ul>
                                <li><strong>Waveguide:</strong> A ferromagnetic wire/tube.</li>
                                <li><strong>Position Magnet:</strong> A permanent magnet attached to the moving object.</li>
                                <li><strong>Current Pulse:</strong> An interrogation pulse is sent down the waveguide.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Waveguide -->
                                    <rect x="50" y="70" width="300" height="10" fill="#bdbdbd" stroke="#333"/>
                                    <text x="360" y="80" font-size="10">Waveguide</text>
                                    
                                    <!-- Magnet -->
                                    <rect x="200" y="50" width="30" height="50" fill="#f44336" stroke="#b71c1c" opacity="0.8"/>
                                    <text x="215" y="40" text-anchor="middle" font-size="10" font-weight="bold">Magnet</text>
                                    
                                    <!-- Pulse -->
                                    <path d="M 60 75 L 100 75" stroke="blue" stroke-width="2" marker-end="url(#arrow)"/>
                                    <text x="80" y="65" font-size="10" fill="blue">Current Pulse</text>
                                    
                                    <!-- Return Wave -->
                                    <path d="M 200 75 L 160 75" stroke="green" stroke-width="2" marker-end="url(#arrow)"/>
                                    <text x="180" y="95" font-size="10" fill="green">Strain Wave</text>
                                    
                                    <!-- Electronics Head -->
                                    <rect x="20" y="50" width="40" height="50" fill="#333"/>
                                    <text x="40" y="80" text-anchor="middle" fill="#fff" font-size="8">Head</text>
                                </svg>
                            </div>
                            <p><strong>Operation:</strong></p>
                            <ol>
                                <li>A current pulse travels down the waveguide, creating a circumferential magnetic field.</li>
                                <li>When this field meets the field from the Position Magnet, the wire twists (Wiedemann effect).</li>
                                <li>This twist creates a sonic strain wave that travels back to the head.</li>
                                <li>The time delay between the start pulse and the return wave is measured.</li>
                                <li><strong>Distance = Speed of Sound * Time / 2</strong>.</li>
                            </ol>

                            <h3>4. Applications</h3>
                            <ul>
                                <li>Hydraulic cylinder positioning.</li>
                                <li>Liquid level measurement in tanks.</li>
                            </ul>
                        </div>
                    `},{question:"Describe the construction and working of a Piezoelectric Transducer.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Piezoelectric Transducers</strong> are active sensors used to measure dynamic forces, acceleration, and pressure. They generate a voltage when mechanically stressed.</p>

                            <h3>2. Principle</h3>
                            <p><strong>Piezoelectric Effect:</strong> Certain crystals (Quartz, Rochelle Salt, PZT) generate an electric charge (Q) on their faces when deformed.</p>
                            <p class="formula">Q = d * F</p>
                            <p>Where <strong>d</strong> is the charge sensitivity and <strong>F</strong> is the Force.</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li>A piezoelectric crystal is sandwiched between two metal electrodes.</li>
                                <li>A mass is placed on top (for accelerometers) or a diaphragm (for pressure sensors).</li>
                                <li>The assembly is enclosed in a housing with a pre-amplifier (Charge amplifier).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Base -->
                                    <rect x="50" y="150" width="200" height="20" fill="#9e9e9e" stroke="#333"/>
                                    
                                    <!-- Crystal -->
                                    <rect x="100" y="120" width="100" height="30" fill="#e1bee7" stroke="#8e24aa"/>
                                    <text x="150" y="140" text-anchor="middle" font-size="12">Crystal</text>
                                    
                                    <!-- Mass/Force -->
                                    <rect x="100" y="90" width="100" height="30" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="150" y="110" text-anchor="middle" font-size="12">Force Summing</text>
                                    
                                    <!-- Force Arrow -->
                                    <line x1="150" y1="50" x2="150" y2="90" stroke="#333" stroke-width="3" marker-end="url(#arrow)"/>
                                    <text x="160" y="70" font-weight="bold">F</text>
                                    
                                    <!-- Electrodes -->
                                    <line x1="100" y1="120" x2="80" y2="120" stroke="#333"/>
                                    <line x1="100" y1="150" x2="80" y2="150" stroke="#333"/>
                                    <circle cx="70" cy="135" r="15" fill="#fff" stroke="#333"/>
                                    <text x="70" y="140" text-anchor="middle">V</text>
                                </svg>
                            </div>

                            <h3>4. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> High frequency response (up to MHz), rugged, small size, self-generating.</li>
                                <li><strong>Disadvantages:</strong> Cannot measure static (DC) forces (charge leaks away), sensitive to temperature (Pyroelectric effect).</li>
                            </ul>
                        </div>
                    `}]},{unit:"IV",questionNumber:14,choices:[{question:"Explain the construction and working of a Solar Cell (Photovoltaic Cell).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Solar Cell</strong> is a PN junction diode that converts light energy directly into electrical energy (DC Voltage). It works on the <strong>Photovoltaic Effect</strong>.</p>

                            <h3>2. Construction</h3>
                            <ul>
                                <li><strong>Top Layer:</strong> Very thin N-type Silicon (heavily doped) to allow light to penetrate.</li>
                                <li><strong>Bottom Layer:</strong> P-type Silicon.</li>
                                <li><strong>Contacts:</strong> Metal finger grid on top (to allow light) and solid metal contact at the bottom.</li>
                                <li><strong>Anti-reflective Coating:</strong> Reduces light reflection to maximize absorption.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- P-Layer -->
                                    <rect x="50" y="100" width="300" height="50" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="200" y="130" text-anchor="middle">P-Type Si</text>
                                    
                                    <!-- N-Layer -->
                                    <rect x="50" y="80" width="300" height="20" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="360" y="95" font-size="12">N-Type</text>
                                    
                                    <!-- Fingers -->
                                    <rect x="80" y="75" width="10" height="5" fill="#333"/>
                                    <rect x="150" y="75" width="10" height="5" fill="#333"/>
                                    <rect x="220" y="75" width="10" height="5" fill="#333"/>
                                    <rect x="290" y="75" width="10" height="5" fill="#333"/>
                                    
                                    <!-- Light -->
                                    <path d="M 100 20 L 120 60" stroke="#fdd835" stroke-width="2"/>
                                    <path d="M 140 20 L 160 60" stroke="#fdd835" stroke-width="2"/>
                                    <path d="M 180 20 L 200 60" stroke="#fdd835" stroke-width="2"/>
                                    <circle cx="150" cy="20" r="10" fill="#fdd835"/>
                                    
                                    <!-- Load -->
                                    <path d="M 50 125 L 20 125 L 20 170 L 180 170" fill="none" stroke="#333"/>
                                    <path d="M 350 85 L 380 85 L 380 170 L 220 170" fill="none" stroke="#333"/>
                                    <rect x="180" y="160" width="40" height="20" fill="#fff" stroke="#333"/>
                                    <text x="200" y="175" text-anchor="middle">Load</text>
                                </svg>
                            </div>

                            <h3>3. Working</h3>
                            <ol>
                                <li>Light photons strike the junction and generate electron-hole pairs.</li>
                                <li>The internal electric field of the PN junction sweeps electrons to the N-side and holes to the P-side.</li>
                                <li>This accumulation of charges creates an open-circuit voltage (Voc ~ 0.5V to 0.6V for Silicon).</li>
                                <li>When a load is connected, current flows.</li>
                            </ol>

                            <h3>4. V-I Characteristics</h3>
                            <p>The curve passes through the 4th quadrant (Power generation).</p>
                            <ul>
                                <li><strong>Voc:</strong> Open Circuit Voltage (Max voltage, I=0).</li>
                                <li><strong>Isc:</strong> Short Circuit Current (Max current, V=0).</li>
                                <li><strong>MPP:</strong> Maximum Power Point (Knee of the curve).</li>
                            </ul>
                        </div>
                    `},{question:"Describe the measurement of Conductivity using a Conductivity Cell.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Electrolytic Conductivity</strong> is the ability of a solution to carry electric current. It is used to measure water purity, salinity, and chemical concentration.</p>

                            <h3>2. Principle</h3>
                            <p>Resistance of a solution is given by:</p>
                            <p class="formula">R = ρ * (L/A)</p>
                            <p>Conductivity (κ) is the reciprocal of resistivity (1/ρ).</p>
                            <p class="formula">κ = (1/R) * (L/A) = G * K</p>
                            <p>Where <strong>G</strong> is Conductance (Siemens) and <strong>K</strong> is the Cell Constant (cm⁻¹).</p>

                            <h3>3. Conductivity Cell Construction</h3>
                            <ul>
                                <li>Two parallel Platinum plates coated with Platinum Black (to increase area and reduce polarization).</li>
                                <li>Fixed in a glass or epoxy body to maintain a constant distance (L) and area (A).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Cell Body -->
                                    <rect x="100" y="50" width="100" height="120" fill="#e0f7fa" stroke="#006064"/>
                                    
                                    <!-- Plates -->
                                    <rect x="120" y="80" width="10" height="60" fill="#333"/>
                                    <rect x="170" y="80" width="10" height="60" fill="#333"/>
                                    
                                    <!-- Leads -->
                                    <line x1="125" y1="80" x2="125" y2="40" stroke="#333"/>
                                    <line x1="175" y1="80" x2="175" y2="40" stroke="#333"/>
                                    
                                    <!-- AC Source -->
                                    <circle cx="150" cy="20" r="15" fill="#fff" stroke="#333"/>
                                    <path d="M 140 20 Q 150 10 160 20" fill="none" stroke="#333"/>
                                    <line x1="125" y1="40" x2="135" y2="20" stroke="#333"/>
                                    <line x1="175" y1="40" x2="165" y2="20" stroke="#333"/>
                                    
                                    <text x="150" y="190" text-anchor="middle" font-size="12">Conductivity Cell</text>
                                </svg>
                            </div>

                            <h3>4. Measurement Circuit</h3>
                            <ul>
                                <li>A <strong>Wheatstone Bridge</strong> is used to measure the resistance R of the solution.</li>
                                <li><strong>AC Source</strong> (typically 1kHz) is used instead of DC to prevent electrolysis and polarization of electrodes.</li>
                            </ul>
                        </div>
                    `}]},{unit:"V",questionNumber:15,choices:[{question:"Explain the manufacturing process of MEMS (Bulk Micromachining).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>MEMS (Micro-Electro-Mechanical Systems)</strong> are fabricated using techniques derived from IC manufacturing. <strong>Bulk Micromachining</strong> involves removing material from the bulk silicon substrate to form 3D structures.</p>

                            <h3>2. Process Steps</h3>
                            <ol>
                                <li><strong>Wafer Preparation:</strong> Start with a clean Silicon wafer.</li>
                                <li><strong>Deposition:</strong> Deposit a masking layer (SiO₂ or Si₃N₄) on the surface.</li>
                                <li><strong>Photolithography:</strong> Apply photoresist, expose to UV light through a mask, and develop to define the pattern.</li>
                                <li><strong>Etching (The Key Step):</strong>
                                    <ul>
                                        <li><strong>Wet Etching:</strong> Use chemicals like KOH (Potassium Hydroxide) or TMAH.</li>
                                        <li><strong>Anisotropic Etching:</strong> Etches along specific crystal planes (e.g., <100> plane etches faster than <111>). This creates V-grooves or cavities with slanted walls (54.74°).</li>
                                    </ul>
                                </li>
                                <li><strong>Removal:</strong> Remove the masking layer to reveal the final structure (e.g., a diaphragm or cantilever beam).</li>
                            </ol>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Wafer -->
                                    <path d="M 50 50 L 350 50 L 300 120 L 100 120 Z" fill="#cfd8dc" stroke="#455a64"/>
                                    
                                    <!-- Etch Pit -->
                                    <path d="M 150 50 L 250 50 L 200 100 Z" fill="#fff" stroke="#455a64" stroke-dasharray="2,2"/>
                                    <text x="200" y="80" text-anchor="middle" font-size="10">Etched Cavity</text>
                                    
                                    <!-- Mask -->
                                    <rect x="50" y="40" width="100" height="10" fill="#ffcc80" stroke="#ef6c00"/>
                                    <rect x="250" y="40" width="100" height="10" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="100" y="35" font-size="10" fill="#ef6c00">Mask (SiO2)</text>
                                    
                                    <text x="200" y="140" text-anchor="middle" font-size="12">Bulk Micromachining (Anisotropic Etch)</text>
                                </svg>
                            </div>
                        </div>
                    `},{question:"Describe the working of an Oxygen Sensor (Lambda Sensor) in automobiles.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>The <strong>Oxygen Sensor (O2 Sensor)</strong>, or Lambda Sensor, is located in the exhaust manifold. It measures the oxygen concentration in exhaust gases to ensure the engine runs at the stoichiometric air-fuel ratio (14.7:1).</p>

                            <h3>2. Construction (Zirconia Type)</h3>
                            <ul>
                                <li><strong>Element:</strong> A thimble-shaped Zirconium Dioxide (ZrO₂) ceramic element.</li>
                                <li><strong>Electrodes:</strong> Coated with porous Platinum on both inner and outer surfaces.</li>
                                <li><strong>Inner Surface:</strong> Exposed to atmospheric air (Reference O₂).</li>
                                <li><strong>Outer Surface:</strong> Exposed to exhaust gases.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Thimble -->
                                    <path d="M 100 50 Q 150 50 200 50 L 200 150 Q 150 180 100 150 Z" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"/>
                                    
                                    <!-- Inner Air -->
                                    <text x="150" y="100" text-anchor="middle" font-size="12">Atmospheric Air</text>
                                    
                                    <!-- Exhaust -->
                                    <text x="250" y="100" text-anchor="middle" font-size="12" fill="#666">Exhaust Gas</text>
                                    <path d="M 220 80 L 210 100 L 220 120" fill="none" stroke="#666" stroke-width="2"/>
                                    
                                    <!-- Electrodes -->
                                    <path d="M 110 60 L 110 140" stroke="#333" stroke-width="2" stroke-dasharray="4"/>
                                    <path d="M 190 60 L 190 140" stroke="#333" stroke-width="2" stroke-dasharray="4"/>
                                    
                                    <!-- Voltmeter -->
                                    <circle cx="150" cy="30" r="15" fill="#fff" stroke="#333"/>
                                    <text x="150" y="35" text-anchor="middle">V</text>
                                    <line x1="110" y1="60" x2="135" y2="30" stroke="#333"/>
                                    <line x1="190" y1="60" x2="165" y2="30" stroke="#333"/>
                                </svg>
                            </div>

                            <h3>3. Working Principle</h3>
                            <p>It acts as a solid-state galvanic cell (Nernst Cell). At high temperatures (>300°C), Zirconia becomes conductive to Oxygen ions.</p>
                            <ul>
                                <li><strong>Rich Mixture:</strong> Low O₂ in exhaust. Large difference between inner and outer O₂. High Voltage (~0.9V).</li>
                                <li><strong>Lean Mixture:</strong> High O₂ in exhaust. Small difference. Low Voltage (~0.1V).</li>
                            </ul>
                            <p>The ECU uses this voltage to adjust the fuel injection pulse width.</p>
                        </div>
                    `}]}]},$0={title:"B.Tech IV Year I Semester Regular Examinations",subject:"ELECTRONIC SENSORS - MODEL PAPER 3",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Resolution and Threshold of a sensor.",answer:"<strong>Resolution:</strong> The smallest change in input that can be detected.<br><strong>Threshold:</strong> The minimum input value required to produce a detectable output from zero."},{unit:"I",id:2,question:"What is the principle of a Capacitive Transducer?",answer:"It works on the principle of variable capacitance: <strong>C = (εA) / d</strong>. Capacitance changes by varying Area (A), Distance (d), or Dielectric (ε)."},{unit:"II",id:3,question:"State the Law of Homogeneous Circuits.",answer:"It states that a thermoelectric current cannot be sustained in a circuit of a single homogeneous metal, however the temperature varies along its length."},{unit:"II",id:4,question:"What is a Bimetallic Strip?",answer:"A sensor made of two bonded metal strips with different coefficients of thermal expansion. It bends when heated, used in thermostats."},{unit:"III",id:5,question:"Define Hall Coefficient (Rh).",answer:"The Hall Coefficient is a material property that determines the magnitude of the Hall Voltage. <strong>Rh = 1 / (n * e)</strong>, where n is carrier density."},{unit:"III",id:6,question:"What is the Villari Effect?",answer:"The <strong>Villari Effect</strong> (Inverse Magnetostriction) is the change in magnetic permeability of a material when subjected to mechanical stress."},{unit:"IV",id:7,question:"Difference between Photodiode and Phototransistor?",answer:"A <strong>Photodiode</strong> converts light to current (fast response). A <strong>Phototransistor</strong> amplifies that current (higher sensitivity, slower response)."},{unit:"IV",id:8,question:"Define pH.",answer:"<strong>pH</strong> is the negative logarithm of the Hydrogen ion concentration in a solution. <strong>pH = -log[H+]</strong>. It measures acidity or alkalinity."},{unit:"V",id:9,question:"What is a Smart Transmitter?",answer:"A <strong>Smart Transmitter</strong> is a device that not only measures a variable but also performs signal conditioning, linearization, and two-way digital communication (e.g., HART)."},{unit:"V",id:10,question:"List two materials commonly used in MEMS.",answer:"1. <strong>Silicon</strong> (Single crystal or Polysilicon).<br>2. <strong>Silicon Dioxide (SiO₂)</strong> (Sacrificial layer or Insulator)."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the construction and working of LVDT (Linear Variable Differential Transformer).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>LVDT</strong> is an inductive transducer used to measure linear displacement. It is a passive transducer working on the principle of <strong>Mutual Induction</strong>.</p>

                            <h3>2. Construction</h3>
                            <ul>
                                <li><strong>Former:</strong> A cylindrical non-magnetic form.</li>
                                <li><strong>Primary Coil (P):</strong> Wound at the center, connected to an AC excitation source.</li>
                                <li><strong>Secondary Coils (S1, S2):</strong> Two identical coils wound on either side of P, connected in <strong>Series Opposition</strong>.</li>
                                <li><strong>Core:</strong> A movable soft iron core placed inside the former.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Coils -->
                                    <rect x="100" y="50" width="200" height="100" fill="#f5f5f5" stroke="#999"/>
                                    
                                    <!-- Primary -->
                                    <rect x="175" y="40" width="50" height="120" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="200" y="30" text-anchor="middle" font-size="12">Primary (P)</text>
                                    
                                    <!-- Secondaries -->
                                    <rect x="110" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="135" y="30" text-anchor="middle" font-size="12">S1</text>
                                    <rect x="240" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="265" y="30" text-anchor="middle" font-size="12">S2</text>
                                    
                                    <!-- Core -->
                                    <rect x="150" y="80" width="100" height="40" rx="5" fill="#616161" stroke="#333"/>
                                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="12">Soft Iron Core</text>
                                    
                                    <!-- Motion -->
                                    <line x1="150" y1="140" x2="250" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                                    <text x="200" y="155" text-anchor="middle" font-size="10">Displacement</text>
                                    
                                    <!-- Circuit -->
                                    <text x="200" y="180" text-anchor="middle" font-size="12">Vout = Vs1 - Vs2</text>
                                </svg>
                            </div>

                            <h3>3. Working Principle</h3>
                            <p>The output voltage is the differential voltage of the two secondaries:</p>
                            <p class="formula">Vout = Vs1 - Vs2</p>
                            <ul>
                                <li><strong>Null Position (Center):</strong> Flux linking S1 = Flux linking S2. Vs1 = Vs2. <strong>Vout = 0</strong>.</li>
                                <li><strong>Right Displacement:</strong> Core moves towards S2. Flux in S2 > S1. Vs2 > Vs1. Vout is negative (180° phase shift).</li>
                                <li><strong>Left Displacement:</strong> Core moves towards S1. Flux in S1 > S2. Vs1 > Vs2. Vout is positive (in phase).</li>
                            </ul>

                            <h3>4. Advantages</h3>
                            <ul>
                                <li>High linearity.</li>
                                <li>Infinite resolution.</li>
                                <li>Low hysteresis.</li>
                                <li>Rugged construction.</li>
                            </ul>
                        </div>
                    `},{question:"Explain the principle and operation of a Capacitive Transducer for Level Measurement.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>Capacitive transducers are widely used for liquid level measurement of both conducting and non-conducting liquids. They rely on the change in capacitance due to the change in dielectric constant or area.</p>

                            <h3>2. Principle</h3>
                            <p>Capacitance of a coaxial cylinder is given by:</p>
                            <p class="formula">C = (2π * ε₀ * εr * h) / ln(D/d)</p>
                            <p>Where <strong>h</strong> is the height of the liquid, <strong>D</strong> is outer diameter, and <strong>d</strong> is inner diameter.</p>

                            <h3>3. Construction & Working</h3>
                            <ul>
                                <li><strong>Non-Conducting Liquid:</strong> Two concentric cylinders act as plates. The liquid acts as the dielectric. As level rises, the effective dielectric constant changes from Air (ε=1) to Liquid (ε > 1).</li>
                                <li><strong>Conducting Liquid:</strong> An insulated rod acts as one plate, and the liquid itself acts as the other plate. The insulation acts as the dielectric.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Tank -->
                                    <rect x="50" y="50" width="200" height="150" fill="none" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Liquid -->
                                    <rect x="50" y="120" width="200" height="80" fill="#e1f5fe" stroke="none"/>
                                    <path d="M 50 120 Q 100 110 150 120 Q 200 130 250 120" fill="none" stroke="#0288d1"/>
                                    
                                    <!-- Probe -->
                                    <rect x="140" y="20" width="20" height="160" fill="#bdbdbd" stroke="#333"/>
                                    <text x="150" y="100" text-anchor="middle" font-size="10" transform="rotate(-90 150 100)">Probe</text>
                                    
                                    <!-- Connections -->
                                    <line x1="140" y1="20" x2="100" y2="20" stroke="#333"/>
                                    <line x1="50" y1="150" x2="20" y2="150" stroke="#333"/>
                                    
                                    <!-- Capacitance Symbol -->
                                    <line x1="20" y1="150" x2="20" y2="100" stroke="#333"/>
                                    <line x1="100" y1="20" x2="100" y2="100" stroke="#333"/>
                                    <line x1="10" y1="100" x2="30" y2="100" stroke="#333"/>
                                    <line x1="90" y1="100" x2="110" y2="100" stroke="#333"/>
                                    <text x="60" y="105" text-anchor="middle">C</text>
                                    
                                    <text x="150" y="220" text-anchor="middle" font-size="12">Capacitive Level Sensor</text>
                                </svg>
                            </div>
                            <p>The capacitance <strong>C</strong> is directly proportional to the liquid level <strong>h</strong>.</p>
                        </div>
                    `}]},{unit:"II",questionNumber:12,choices:[{question:"Explain the construction and working of a Thermocouple.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Thermocouple</strong> is an active temperature transducer based on the <strong>Seebeck Effect</strong>. It is widely used for high-temperature measurements.</p>

                            <h3>2. Principle: Seebeck Effect</h3>
                            <p>When two dissimilar metals are joined to form a closed circuit, and the two junctions are maintained at different temperatures (T1 and T2), an Electromotive Force (EMF) is generated.</p>
                            <p class="formula">E = a(ΔT) + b(ΔT)²</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Hot Junction (Measuring Junction):</strong> The joined end placed in the environment to be measured.</li>
                                <li><strong>Cold Junction (Reference Junction):</strong> The open ends maintained at a constant reference temperature (usually 0°C or compensated).</li>
                                <li><strong>Materials:</strong>
                                    <ul>
                                        <li>Type J: Iron - Constantan</li>
                                        <li>Type K: Chromel - Alumel (Most common)</li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Wires -->
                                    <path d="M 50 100 Q 150 50 250 100" fill="none" stroke="#d32f2f" stroke-width="3"/>
                                    <text x="150" y="60" text-anchor="middle" fill="#d32f2f" font-size="12">Metal A (Chromel)</text>
                                    
                                    <path d="M 50 100 Q 150 150 250 100" fill="none" stroke="#1976d2" stroke-width="3"/>
                                    <text x="150" y="140" text-anchor="middle" fill="#1976d2" font-size="12">Metal B (Alumel)</text>
                                    
                                    <!-- Hot Junction -->
                                    <circle cx="50" cy="100" r="5" fill="#333"/>
                                    <text x="50" y="120" text-anchor="middle" font-weight="bold">Hot Junction (T1)</text>
                                    <path d="M 40 130 L 60 130 L 50 110 Z" fill="red" opacity="0.5"/>
                                    
                                    <!-- Cold Junction -->
                                    <circle cx="250" cy="100" r="5" fill="#333"/>
                                    <text x="250" y="120" text-anchor="middle" font-weight="bold">Ref Junction (T2)</text>
                                    
                                    <!-- Meter -->
                                    <circle cx="350" cy="100" r="20" fill="#fff" stroke="#333" stroke-width="2"/>
                                    <text x="350" y="105" text-anchor="middle" font-weight="bold">mV</text>
                                    <line x1="250" y1="100" x2="330" y2="100" stroke="#333" stroke-width="2"/>
                                </svg>
                            </div>

                            <h3>4. Advantages</h3>
                            <ul>
                                <li>Wide temperature range (-200°C to 2000°C).</li>
                                <li>Fast response time.</li>
                                <li>Rugged and inexpensive.</li>
                                <li>No external power required.</li>
                            </ul>
                        </div>
                    `},{question:"Explain the construction and characteristics of an RTD (Resistance Temperature Detector).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>RTD</strong> is a passive temperature sensor that operates on the principle that the resistance of a metal increases with temperature (Positive Temperature Coefficient - PTC).</p>

                            <h3>2. Principle</h3>
                            <p>The relationship between resistance and temperature is linear:</p>
                            <p class="formula">Rt = R₀ (1 + αT)</p>
                            <p>Where <strong>α</strong> is the temperature coefficient of resistance. Platinum (Pt100) is the standard material due to its stability and linearity.</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li>A fine Platinum wire is wound on a ceramic or glass former.</li>
                                <li>The assembly is enclosed in a protective sheath (Stainless Steel).</li>
                                <li><strong>Lead Wire Compensation:</strong> To eliminate the error due to lead resistance, a 3-wire or 4-wire bridge configuration is used.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Sheath -->
                                    <rect x="50" y="80" width="200" height="40" rx="10" fill="#e0e0e0" stroke="#333"/>
                                    
                                    <!-- Element -->
                                    <path d="M 60 100 L 240 100" stroke="#d32f2f" stroke-width="2" stroke-dasharray="5,2"/>
                                    <text x="150" y="95" text-anchor="middle" fill="#d32f2f" font-size="10">Platinum Wire</text>
                                    
                                    <!-- Leads -->
                                    <line x1="250" y1="90" x2="290" y2="90" stroke="#333" stroke-width="2"/>
                                    <line x1="250" y1="110" x2="290" y2="110" stroke="#333" stroke-width="2"/>
                                    <text x="270" y="85" font-size="10">Leads</text>
                                    
                                    <!-- Graph -->
                                    <line x1="50" y1="180" x2="150" y2="180" stroke="#333"/>
                                    <line x1="50" y1="180" x2="50" y2="130" stroke="#333"/>
                                    <line x1="50" y1="150" x2="150" y2="130" stroke="blue" stroke-width="2"/>
                                    <text x="100" y="140" fill="blue" font-size="10">Linear (RTD)</text>
                                </svg>
                            </div>

                            <h3>4. Characteristics</h3>
                            <ul>
                                <li><strong>Linearity:</strong> Highly linear over a wide range.</li>
                                <li><strong>Stability:</strong> Very stable over time.</li>
                                <li><strong>Accuracy:</strong> Higher accuracy than thermocouples.</li>
                            </ul>
                        </div>
                    `}]},{unit:"III",questionNumber:13,choices:[{question:"Explain the working of a Hall Effect Sensor for Current Measurement.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Hall Effect Sensors</strong> are widely used for non-contact current measurement. They detect the magnetic field generated by a current-carrying conductor.</p>

                            <h3>2. Principle</h3>
                            <p>When a current-carrying conductor is placed in a magnetic field, a voltage (Hall Voltage) is generated perpendicular to both current and field.</p>
                            <p class="formula">Vh ∝ I * B</p>

                            <h3>3. Working (Open Loop Current Sensor)</h3>
                            <ul>
                                <li>The current to be measured flows through a busbar or wire.</li>
                                <li>This current generates a magnetic field surrounding it (Ampere's Law).</li>
                                <li>A soft magnetic core concentrates this field onto a Hall Sensor placed in an air gap.</li>
                                <li>The Hall Sensor outputs a voltage proportional to the magnetic field, and thus proportional to the current.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Core -->
                                    <path d="M 50 50 L 250 50 L 250 150 L 50 150 Z" fill="none" stroke="#616161" stroke-width="15"/>
                                    
                                    <!-- Gap -->
                                    <rect x="240" y="90" width="20" height="20" fill="#fff"/>
                                    
                                    <!-- Sensor -->
                                    <rect x="245" y="92" width="10" height="16" fill="#ef5350" stroke="#c62828"/>
                                    <text x="280" y="105" font-size="10">Hall IC</text>
                                    
                                    <!-- Conductor -->
                                    <circle cx="150" cy="100" r="15" fill="#ffca28" stroke="#f57f17"/>
                                    <text x="150" y="105" text-anchor="middle" font-weight="bold">I</text>
                                    <text x="150" y="130" text-anchor="middle" font-size="10">Conductor</text>
                                    
                                    <!-- Flux -->
                                    <path d="M 100 50 Q 150 20 200 50" fill="none" stroke="#2196f3" stroke-dasharray="4,2"/>
                                    <text x="150" y="40" fill="#2196f3" font-size="10">Flux (B)</text>
                                </svg>
                            </div>

                            <h3>4. Applications</h3>
                            <ul>
                                <li>Clamp meters.</li>
                                <li>Battery management systems (BMS).</li>
                                <li>Motor control.</li>
                            </ul>
                        </div>
                    `},{question:"Explain the principle of Magnetoresistive Sensors (AMR).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Magnetoresistive (MR) Sensors</strong> change their resistance when exposed to a magnetic field. <strong>AMR (Anisotropic Magnetoresistance)</strong> is the most common type.</p>

                            <h3>2. Principle</h3>
                            <p>In ferromagnetic materials (Permalloy), resistance depends on the angle (θ) between the current direction and the magnetization vector.</p>
                            <p class="formula">R = R₀ + ΔR cos²θ</p>
                            <p>Resistance is maximum when current is parallel to the magnetic field and minimum when perpendicular.</p>

                            <h3>3. Construction (Wheatstone Bridge)</h3>
                            <p>To increase sensitivity and linearity, four AMR elements are arranged in a Wheatstone bridge. The elements are often designed with "Barber Pole" structures (gold stripes) to linearize the response.</p>
                            
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Bridge -->
                                    <rect x="130" y="50" width="40" height="20" fill="#bdbdbd" stroke="#333"/>
                                    <rect x="130" y="130" width="40" height="20" fill="#bdbdbd" stroke="#333"/>
                                    <rect x="80" y="90" width="20" height="40" fill="#bdbdbd" stroke="#333"/>
                                    <rect x="200" y="90" width="20" height="40" fill="#bdbdbd" stroke="#333"/>
                                    
                                    <!-- Connections -->
                                    <line x1="150" y1="20" x2="150" y2="50" stroke="#333"/>
                                    <line x1="150" y1="150" x2="150" y2="180" stroke="#333"/>
                                    <line x1="50" y1="110" x2="80" y2="110" stroke="#333"/>
                                    <line x1="220" y1="110" x2="250" y2="110" stroke="#333"/>
                                    
                                    <text x="150" y="15" text-anchor="middle">Vcc</text>
                                    <text x="150" y="195" text-anchor="middle">GND</text>
                                    <text x="40" y="115">V+</text>
                                    <text x="260" y="115">V-</text>
                                    
                                    <text x="150" y="100" text-anchor="middle" font-size="12">AMR Bridge</text>
                                </svg>
                            </div>

                            <h3>4. Applications</h3>
                            <ul>
                                <li>Compass (Earth's magnetic field detection).</li>
                                <li>Wheel speed sensors (ABS).</li>
                                <li>Position sensing.</li>
                            </ul>
                        </div>
                    `}]},{unit:"IV",questionNumber:14,choices:[{question:"Explain the construction and working of a Photodiode.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Photodiode</strong> is a semiconductor device that converts light into electrical current. It is always operated in <strong>Reverse Bias</strong>.</p>

                            <h3>2. Working Principle</h3>
                            <p>When light (photons) falls on the depletion region of a reverse-biased PN junction, electron-hole pairs are generated. The electric field sweeps these carriers across the junction, creating a <strong>Reverse Current (Photocurrent)</strong>.</p>
                            <p>Current is directly proportional to Light Intensity.</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>P-Layer & N-Layer:</strong> Silicon or Germanium.</li>
                                <li><strong>Window:</strong> A glass or plastic lens allows light to focus on the junction.</li>
                                <li><strong>Dark Current:</strong> A small leakage current that flows even in the absence of light.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Diode Symbol -->
                                    <path d="M 100 100 L 100 140 L 140 120 Z" fill="#fff" stroke="#333" stroke-width="2"/>
                                    <line x1="140" y1="100" x2="140" y2="140" stroke="#333" stroke-width="2"/>
                                    <line x1="80" y1="120" x2="100" y2="120" stroke="#333" stroke-width="2"/>
                                    <line x1="140" y1="120" x2="160" y2="120" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Arrows -->
                                    <path d="M 80 80 L 110 110" stroke="#fbc02d" stroke-width="2" marker-end="url(#arrow)"/>
                                    <path d="M 90 70 L 120 100" stroke="#fbc02d" stroke-width="2" marker-end="url(#arrow)"/>
                                    
                                    <!-- Circuit -->
                                    <rect x="180" y="110" width="40" height="20" fill="#fff" stroke="#333"/>
                                    <text x="200" y="125" text-anchor="middle" font-size="10">Load</text>
                                    <line x1="160" y1="120" x2="180" y2="120" stroke="#333"/>
                                    <line x1="220" y1="120" x2="240" y2="120" stroke="#333"/>
                                    <line x1="240" y1="120" x2="240" y2="160" stroke="#333"/>
                                    <line x1="80" y1="120" x2="80" y2="160" stroke="#333"/>
                                    
                                    <!-- Battery -->
                                    <line x1="140" y1="160" x2="180" y2="160" stroke="#333"/>
                                    <line x1="150" y1="155" x2="150" y2="165" stroke="#333" stroke-width="2"/>
                                    <line x1="170" y1="150" x2="170" y2="170" stroke="#333" stroke-width="2"/>
                                    <text x="160" y="180" text-anchor="middle" font-size="10">Reverse Bias</text>
                                </svg>
                            </div>

                            <h3>4. Modes of Operation</h3>
                            <ul>
                                <li><strong>Photoconductive Mode:</strong> Reverse biased. Fast response. Linear.</li>
                                <li><strong>Photovoltaic Mode:</strong> Zero bias. Solar cell operation.</li>
                            </ul>
                        </div>
                    `},{question:"Explain the working of a pH Meter using a Glass Electrode.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>pH Meter</strong> measures the acidity or alkalinity of a solution. It uses a <strong>Glass Electrode</strong> as the sensing element.</p>

                            <h3>2. Principle</h3>
                            <p>When a thin glass membrane separates two solutions of different Hydrogen ion concentrations (Internal buffer vs Unknown solution), a potential difference is developed across the membrane.</p>
                            <p class="formula">E = E₀ - 0.0591 * pH</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Glass Electrode:</strong> Contains a pH-sensitive glass bulb, internal buffer (pH 7), and an Ag/AgCl internal wire.</li>
                                <li><strong>Reference Electrode:</strong> Provides a stable potential (Calomel or Ag/AgCl).</li>
                                <li><strong>Combination Electrode:</strong> Both electrodes combined in a single probe.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Beaker -->
                                    <path d="M 80 50 L 80 200 Q 80 220 100 220 L 200 220 Q 220 220 220 200 L 220 50" fill="none" stroke="#333" stroke-width="2"/>
                                    <path d="M 80 100 L 80 200 Q 80 220 100 220 L 200 220 Q 220 220 220 200 L 220 100 Z" fill="#e1f5fe" stroke="none"/>
                                    
                                    <!-- Electrode -->
                                    <rect x="140" y="20" width="20" height="160" fill="#fff" stroke="#333"/>
                                    <circle cx="150" cy="180" r="15" fill="#fff" stroke="#333"/>
                                    <text x="150" y="185" text-anchor="middle" font-size="8">Glass Bulb</text>
                                    
                                    <!-- Wire -->
                                    <line x1="150" y1="20" x2="150" y2="170" stroke="#333"/>
                                    
                                    <!-- Meter -->
                                    <rect x="120" y="-10" width="60" height="30" fill="#333"/>
                                    <text x="150" y="10" text-anchor="middle" fill="#0f0" font-family="monospace">pH 7.0</text>
                                </svg>
                            </div>

                            <h3>4. Working</h3>
                            <ul>
                                <li>The probe is dipped in the solution.</li>
                                <li>H+ ions interact with the glass surface (Ion Exchange).</li>
                                <li>The potential difference is measured by a high-impedance voltmeter.</li>
                                <li>The meter converts voltage to pH units.</li>
                            </ul>
                        </div>
                    `}]},{unit:"V",questionNumber:15,choices:[{question:"Explain the architecture of a Smart Sensor (IEEE 1451).",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Smart Sensor</strong> integrates the sensing element with signal processing and communication capabilities. The <strong>IEEE 1451</strong> standard defines a common interface for connecting smart transducers to networks.</p>

                            <h3>2. Architecture Blocks</h3>
                            <ul>
                                <li><strong>Sensing Element:</strong> Measures physical quantity.</li>
                                <li><strong>Signal Conditioning:</strong> Amplification, Filtering.</li>
                                <li><strong>ADC:</strong> Analog to Digital Converter.</li>
                                <li><strong>Microprocessor/DSP:</strong> Performs linearization, calibration, and data processing.</li>
                                <li><strong>Communication Interface:</strong> Connects to the bus (I2C, SPI, CAN).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <defs>
                                        <marker id="arrow-smart" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
                                    </defs>
                                    
                                    <!-- Blocks -->
                                    <rect x="50" y="50" width="80" height="50" rx="5" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="90" y="80" text-anchor="middle" font-size="12">Sensor</text>
                                    
                                    <rect x="160" y="50" width="80" height="50" rx="5" fill="#fff9c4" stroke="#fbc02d"/>
                                    <text x="200" y="80" text-anchor="middle" font-size="12">Sig Cond</text>
                                    
                                    <rect x="270" y="50" width="60" height="50" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                                    <text x="300" y="80" text-anchor="middle" font-size="12">ADC</text>
                                    
                                    <rect x="360" y="40" width="100" height="70" rx="5" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="410" y="80" text-anchor="middle" font-size="12" font-weight="bold">Processor</text>
                                    
                                    <rect x="490" y="50" width="80" height="50" rx="5" fill="#c8e6c9" stroke="#388e3c"/>
                                    <text x="530" y="80" text-anchor="middle" font-size="12">Comm</text>
                                    
                                    <!-- Arrows -->
                                    <line x1="130" y1="75" x2="160" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                    <line x1="240" y1="75" x2="270" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                    <line x1="330" y1="75" x2="360" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                    <line x1="460" y1="75" x2="490" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                </svg>
                            </div>

                            <h3>3. Features</h3>
                            <ul>
                                <li><strong>Self-Identification (TEDS):</strong> Stores calibration data.</li>
                                <li><strong>Self-Diagnosis:</strong> Detects faults.</li>
                                <li><strong>Digital Output:</strong> Noise immune.</li>
                            </ul>
                        </div>
                    `},{question:"Explain Surface Micromachining in MEMS.",answer:`
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Surface Micromachining</strong> is a MEMS fabrication technique where structures are built <strong>on top</strong> of the substrate by depositing and etching alternate layers of structural and sacrificial materials.</p>

                            <h3>2. Process Steps</h3>
                            <ol>
                                <li><strong>Substrate:</strong> Silicon wafer.</li>
                                <li><strong>Sacrificial Layer:</strong> Deposit a temporary layer (e.g., Phosphosilicate Glass - PSG).</li>
                                <li><strong>Patterning:</strong> Etch holes (anchor points) in the sacrificial layer.</li>
                                <li><strong>Structural Layer:</strong> Deposit the mechanical material (e.g., Polysilicon). It fills the anchor holes.</li>
                                <li><strong>Release Etch:</strong> Use a chemical to dissolve the sacrificial layer, leaving the structural layer free-standing.</li>
                            </ol>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Substrate -->
                                    <rect x="50" y="100" width="300" height="20" fill="#cfd8dc" stroke="#455a64"/>
                                    <text x="200" y="115" text-anchor="middle" font-size="10">Substrate</text>
                                    
                                    <!-- Anchors -->
                                    <rect x="80" y="80" width="20" height="20" fill="#90caf9" stroke="#1565c0"/>
                                    <rect x="300" y="80" width="20" height="20" fill="#90caf9" stroke="#1565c0"/>
                                    
                                    <!-- Beam -->
                                    <rect x="80" y="70" width="240" height="10" fill="#90caf9" stroke="#1565c0"/>
                                    <text x="200" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Cantilever Beam</text>
                                    
                                    <!-- Gap -->
                                    <text x="200" y="95" text-anchor="middle" font-size="10" fill="#666">Air Gap (Sacrificial Layer Removed)</text>
                                </svg>
                            </div>

                            <h3>3. Advantages</h3>
                            <ul>
                                <li>Allows complex, multi-layer moving structures (gears, motors).</li>
                                <li>Compatible with IC fabrication.</li>
                            </ul>
                        </div>
                    `}]}]},ey=[{category:"General Exam Strategy 🎯",tips:[{title:"The 'Diagram First' Rule",content:"In Electronic Sensors, **Diagrams are King**. Even if the question asks for 'Explain the principle', start with a neat circuit diagram or block diagram. It creates an immediate positive impression."},{title:"Structure Your Answers",content:`Don't write huge paragraphs. Use this standard structure for every sensor:
1. **Principle** (1-2 lines)
2. **Construction** (Diagram + Labels)
3. **Working** (Step-by-step points)
4. **Characteristics** (Graph)
5. **Applications** (Bullet points)`},{title:"Units & Axes",content:"Marks are often deducted for missing units. Always label graphs (e.g., 'Temp (°C)' on X-axis, 'Resistance (Ω)' on Y-axis). Never leave a graph floating without labels."}]},{category:"Subject-Specific Hacks ⚡",tips:[{title:"Active vs Passive Trick",content:"Confused? Remember: **Active** sensors are like 'Activists' - they generate their own energy (Voltage/Current) e.g., Thermocouple, Solar Cell. **Passive** sensors are 'Lazy' - they need external power to work e.g., Strain Gauge, LVDT."},{title:"The 'Transduction' Keyword",content:`For almost every question, you can add a point about the **Transduction Principle**. 
- Strain Gauge -> Piezoresistive
- LVDT -> Electromagnetic Induction
- Thermocouple -> Seebeck Effect
- Solar Cell -> Photovoltaic`},{title:"Linearity Defense",content:"If you forget the characteristics, most sensors aim to be **Linear**. You can safely write: 'Ideally, this sensor exhibits linear characteristics over a specific range.' (Exceptions: Thermistors are highly non-linear)."}]},{category:"Topic-Wise Shortcuts 🧠",tips:[{title:"Strain Gauge GF Formula",content:`Memorize **GF = 1 + 2ν**. 
- 1 comes from length change.
- 2ν comes from area change.
- If piezoresistive effect is included, add the resistivity term.`},{title:"LVDT Null Position",content:"The most important concept in LVDT is the **Null Position**. Always mention: 'At center, Vs1 = Vs2, so Vout = 0'. This is the heart of the working principle."},{title:"Thermocouple Laws",content:`Don't memorize definitions. Understand them:
- **Homogeneous:** Wire quality matters, not temp distribution.
- **Intermediate Metals:** Adding a meter doesn't hurt.
- **Intermediate Temp:** T1->T2 + T2->T3 = T1->T3.`},{title:"Hall Effect Direction",content:"Remember **FBI** (Force, B-field, I-current) are all perpendicular to each other. The Hall Voltage builds up 'sideways' across the conductor."}]},{category:"For Last-Minute Learners ⏳",tips:[{title:"Focus on 'The Big 5'",content:`If you have no time, master these 5 topics perfectly. They appear in almost every paper:
1. **Strain Gauge** (Derivation)
2. **LVDT** (Construction & Graph)
3. **Thermocouple** (Laws)
4. **Hall Effect**
5. **Smart Sensors** (Block Diagram)`},{title:"Definition + Diagram Strategy",content:"If you don't know the full answer, write a correct **Definition** and draw a relevant **Diagram**. This alone can fetch you 40-50% marks for that question."}]},{category:"For Toppers (90+ Aim) 🏆",tips:[{title:"Mention 'Compensation'",content:`To stand out, mention how to fix errors. 
- For Strain Gauges: Mention **Temperature Compensation** (Dummy Gauge).
- For Thermocouples: Mention **Cold Junction Compensation**.`},{title:"Bridge Circuits",content:"Don't just draw the sensor. Draw the **Signal Conditioning Circuit** (Wheatstone Bridge or Op-Amp) connected to it. This shows deep understanding."},{title:"Real-World Examples",content:"Add a 'Practical Note'. E.g., for Accelerometers, mention 'Used in Airbag deployment systems'. For LVDT, mention 'Used in CNC machines'."}]}],ty=[{id:1,unit:"I",front:"Sensor",back:'<div class="fc-content"><p>A device that detects a physical parameter and converts it into a signal (usually electrical).</p></div>'},{id:2,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>A device that converts energy from one form to another (e.g., Microphone: Sound -> Electrical).</p></div>'},{id:3,unit:"I",front:"Active Transducer",back:'<div class="fc-content"><p>Self-generating. Does NOT require external power.<br/><em>Ex: Thermocouple, Piezoelectric.</em></p></div>'},{id:4,unit:"I",front:"Passive Transducer",back:'<div class="fc-content"><p>Requires external power source to operate.<br/><em>Ex: Strain Gauge, LVDT, Thermistor.</em></p></div>'},{id:5,unit:"I",front:"Resolution",back:'<div class="fc-content"><p>The smallest change in input that a sensor can detect.</p></div>'},{id:6,unit:"I",front:"Sensitivity",back:'<div class="fc-content"><p>Ratio of change in output to change in input.<br/><strong>S = ΔOutput / ΔInput</strong></p></div>'},{id:7,unit:"I",front:"Linearity",back:'<div class="fc-content"><p>The closeness of the calibration curve to a straight line.</p></div>'},{id:8,unit:"I",front:"Hysteresis",back:'<div class="fc-content"><p>The difference in output for the same input when approached from increasing vs decreasing directions.</p></div>'},{id:9,unit:"I",front:"Piezoresistive Effect",back:'<div class="fc-content"><p>Change in electrical resistance of a material when mechanical strain is applied.</p></div>'},{id:10,unit:"I",front:"Gauge Factor (GF)",back:'<div class="fc-content"><p>Sensitivity of a Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong><br/>Ideally ~2 for metals.</p></div>'},{id:11,unit:"I",front:"Wheatstone Bridge",back:'<div class="fc-content"><p>Circuit used to convert small resistance changes (ΔR) into measurable voltage changes.</p></div>'},{id:12,unit:"I",front:"LVDT",back:'<div class="fc-content"><p><strong>Linear Variable Differential Transformer</strong>.<br/>Inductive sensor for linear displacement.</p></div>'},{id:13,unit:"I",front:"LVDT Principle",back:'<div class="fc-content"><p>Mutual Induction. Output voltage depends on the position of the magnetic core linking Primary and Secondary coils.</p></div>'},{id:14,unit:"I",front:"LVDT Null Position",back:'<div class="fc-content"><p>Core at center. Flux in S1 = Flux in S2.<br/><strong>Vout = Vs1 - Vs2 = 0</strong>.</p></div>'},{id:15,unit:"I",front:"Capacitive Sensor Formula",back:`<div class="fc-content"><p><strong>C = (εA) / d</strong><br/>Sensitivity is high for small changes in 'd'.</p></div>`},{id:16,unit:"II",front:"Bimetallic Strip",back:'<div class="fc-content"><p>Two metals with different coefficients of expansion bonded together. Bends when heated.</p></div>'},{id:17,unit:"II",front:"RTD",back:'<div class="fc-content"><p><strong>Resistance Temperature Detector</strong>.<br/>Metal (Platinum) resistance increases linearly with temperature (PTC).</p></div>'},{id:18,unit:"II",front:"Pt100",back:'<div class="fc-content"><p>Standard Platinum RTD with 100Ω resistance at 0°C.</p></div>'},{id:19,unit:"II",front:"Thermistor",back:'<div class="fc-content"><p><strong>Thermal Resistor</strong>.<br/>Semiconductor device. High sensitivity but non-linear.</p></div>'},{id:20,unit:"II",front:"NTC",back:'<div class="fc-content"><p><strong>Negative Temperature Coefficient</strong>.<br/>Resistance decreases as Temperature increases. Common in Thermistors.</p></div>'},{id:21,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Principle of Thermocouple. EMF generated when two dissimilar metals form a loop with junctions at different temps.</p></div>'},{id:22,unit:"II",front:"Peltier Effect",back:'<div class="fc-content"><p>Inverse of Seebeck. Current flowing through a junction causes heating or cooling.</p></div>'},{id:23,unit:"II",front:"Cold Junction Compensation",back:'<div class="fc-content"><p>Technique to correct Thermocouple errors caused by ambient temperature changes at the reference junction.</p></div>'},{id:24,unit:"II",front:"Law of Intermediate Metals",back:`<div class="fc-content"><p>Inserting a third metal (meter) into a thermocouple circuit doesn't affect reading if its junctions are at same temp.</p></div>`},{id:25,unit:"II",front:"Optical Pyrometer",back:'<div class="fc-content"><p>Non-contact sensor. Measures temperature by comparing brightness of source with a standard filament.</p></div>'},{id:26,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Generation of transverse voltage in a current-carrying conductor placed in a magnetic field.</p></div>'},{id:27,unit:"III",front:"Hall Voltage Formula",back:'<div class="fc-content"><p><strong>Vh = (Rh * I * B) / t</strong><br/>Directly proportional to Magnetic Field (B).</p></div>'},{id:28,unit:"III",front:"Hall Sensor Applications",back:'<div class="fc-content"><p>1. Current Sensing<br/>2. RPM Measurement<br/>3. Position Sensing (BLDC Motors)</p></div>'},{id:29,unit:"III",front:"Magnetoresistance",back:'<div class="fc-content"><p>Change in resistance of a material in the presence of a magnetic field.</p></div>'},{id:30,unit:"III",front:"Magnetostriction",back:'<div class="fc-content"><p>Change in physical dimensions (shape/size) of a ferromagnetic material when magnetized.</p></div>'},{id:31,unit:"III",front:"Wiedemann Effect",back:'<div class="fc-content"><p>Twisting of a wire due to interaction of longitudinal and circular magnetic fields. Used in Magnetostrictive Level Sensors.</p></div>'},{id:32,unit:"IV",front:"Photodiode",back:'<div class="fc-content"><p>Semiconductor PN junction operated in <strong>Reverse Bias</strong>. Light creates electron-hole pairs -> Current flows.</p></div>'},{id:33,unit:"IV",front:"Photovoltaic Effect",back:'<div class="fc-content"><p>Generation of voltage when light falls on a material (Solar Cell principle). No external power needed.</p></div>'},{id:34,unit:"IV",front:"LDR",back:'<div class="fc-content"><p><strong>Light Dependent Resistor</strong>.<br/>Resistance decreases as light intensity increases (Photoconductivity).</p></div>'},{id:35,unit:"IV",front:"pH",back:'<div class="fc-content"><p>Negative logarithm of Hydrogen ion concentration.<br/><strong>pH = -log[H+]</strong></p></div>'},{id:36,unit:"IV",front:"Glass Electrode",back:'<div class="fc-content"><p>The sensing electrode in a pH meter. Has a thin glass membrane sensitive to H+ ions.</p></div>'},{id:37,unit:"IV",front:"Nernst Equation (pH)",back:'<div class="fc-content"><p>Relates cell potential to pH.<br/><strong>E = E₀ - 0.0591 * pH</strong> (at 25°C).</p></div>'},{id:38,unit:"IV",front:"Conductivity Cell",back:'<div class="fc-content"><p>Measures ionic concentration. Uses AC excitation to prevent polarization (electrolysis) of the solution.</p></div>'},{id:39,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>A sensor with built-in intelligence.<br/><strong>Sensor + Signal Conditioning + ADC + Microprocessor + Comm.</strong></p></div>'},{id:40,unit:"V",front:"IEEE 1451",back:'<div class="fc-content"><p>Standard for Smart Transducer Interface. Defines TEDS (Transducer Electronic Data Sheet).</p></div>'},{id:41,unit:"V",front:"Self-Calibration",back:'<div class="fc-content"><p>Ability of a smart sensor to automatically adjust its zero and span settings.</p></div>'},{id:42,unit:"V",front:"MEMS",back:'<div class="fc-content"><p><strong>Micro-Electro-Mechanical Systems</strong>.<br/>Miniaturized devices with moving parts on a silicon chip.</p></div>'},{id:43,unit:"V",front:"Bulk Micromachining",back:'<div class="fc-content"><p>Fabrication technique where the silicon substrate itself is etched away to create structures.</p></div>'},{id:44,unit:"V",front:"Surface Micromachining",back:'<div class="fc-content"><p>Building structures ON TOP of the substrate using deposited layers (Sacrificial & Structural layers).</p></div>'},{id:45,unit:"V",front:"Anisotropic Etching",back:'<div class="fc-content"><p>Etching that depends on crystal orientation. Creates precise shapes like V-grooves.</p></div>'},{id:46,unit:"V",front:"Isotropic Etching",back:'<div class="fc-content"><p>Etching that proceeds at the same rate in all directions (like a spherical hole).</p></div>'},{id:47,unit:"V",front:"MEMS Accelerometer",back:'<div class="fc-content"><p>Uses a proof mass and springs. Displacement changes capacitance. Used in Airbags, Phones.</p></div>'},{id:48,unit:"V",front:"Sacrificial Layer",back:'<div class="fc-content"><p>A temporary layer in MEMS fabrication that is etched away to release moving parts.</p></div>'},{id:49,unit:"V",front:"TEDS",back:'<div class="fc-content"><p><strong>Transducer Electronic Data Sheet</strong>.<br/>Digital ID card of a smart sensor stored in memory.</p></div>'},{id:50,unit:"V",front:"Actuator",back:'<div class="fc-content"><p>Inverse of a sensor. Converts electrical signal into physical action (e.g., Motor, Valve).</p></div>'}],iy=[{unit:"I",title:"Professional Practice and Ethics",notes:"<h3>Unit I Overview</h3><p>This unit lays the foundation for ethical practice in engineering, distinguishing between personal and professional ethics, and defining the core responsibilities and liabilities of a professional.</p>",topics:[{title:"Definition of Professional Ethics",content:`
          <div class="study-guide-box">
            <h4>1. Definition</h4>
            <div class="definition-box">
              <strong>Professional Ethics:</strong> The standards of behavior and moral conduct expected of professionals in their specific field. It involves principles of integrity, honesty, and responsibility towards the public, clients, and employers.
            </div>
            
            <h4>2. Key Components</h4>
            <ul>
              <li><strong>Integrity:</strong> Adhering to moral principles.</li>
              <li><strong>Honesty:</strong> Being truthful in reporting and conduct.</li>
              <li><strong>Transparency:</strong> Openness in decision-making.</li>
              <li><strong>Accountability:</strong> Taking ownership of actions.</li>
            </ul>
          </div>
        `},{title:"Engineering Ethics & Personal Ethics",content:`
          <div class="study-guide-box">
            <h4>1. Engineering Ethics</h4>
            <p>The study of moral issues and decisions confronting individuals and organizations engaged in engineering. The paramount obligation is to <strong>protect the public safety, health, and welfare</strong>.</p>

            <h4>2. Personal Ethics</h4>
            <p>Moral principles that govern a person's individual life (e.g., religion, family values). These may differ from professional ethics but often overlap.</p>

            <h4>3. Comparison Table</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>Personal Ethics</th><th>Professional Ethics</th></tr>
              <tr><td><strong>Source</strong></td><td>Upbringing, Culture, Religion</td><td>Professional Bodies, Codes of Conduct</td></tr>
              <tr><td><strong>Scope</strong></td><td>Private Life</td><td>Workplace / Professional Dealings</td></tr>
              <tr><td><strong>Example</strong></td><td>Respecting elders</td><td>Not accepting bribes, Safety first</td></tr>
            </table>
          </div>
        `},{title:"Code of Ethics & Professionalism",content:`
          <div class="study-guide-box">
            <h4>1. Code of Ethics</h4>
            <p>A formal document outlining the ethical standards of a profession. Example: <strong>NSPE Code of Ethics</strong> for engineers.</p>
            <ul>
              <li>Hold paramount the safety of the public.</li>
              <li>Perform services only in areas of competence.</li>
              <li>Issue public statements only in an objective and truthful manner.</li>
            </ul>

            <h4>2. Profession vs. Professionalism</h4>
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Profession</h5>
                <p>A paid occupation, especially one that involves prolonged training and a formal qualification (e.g., Medicine, Law, Engineering).</p>
              </div>
              <div class="concept-card">
                <h5>Professionalism</h5>
                <p>The competence or skill expected of a professional. It includes behavior, attitude, and adherence to ethical standards.</p>
              </div>
            </div>
          </div>
        `},{title:"Professional Responsibility & Liability",content:`
          <div class="study-guide-box">
            <h4>1. Professional Responsibility</h4>
            <p>The obligation to perform duties competently and ethically. Includes:</p>
            <ul>
              <li><strong>Moral Responsibility:</strong> Doing what is right.</li>
              <li><strong>Legal Responsibility:</strong> Adhering to laws.</li>
              <li><strong>Social Responsibility:</strong> Contributing to societal welfare.</li>
            </ul>

            <h4>2. Professional Liability</h4>
            <p>Legal accountability for professional acts. Engineers can be sued for:</p>
            <ul>
              <li><strong>Negligence:</strong> Failure to exercise reasonable care.</li>
              <li><strong>Strict Liability:</strong> Liability regardless of fault (e.g., product defects).</li>
              <li><strong>Breach of Contract:</strong> Failing to fulfill contract terms.</li>
            </ul>
          </div>
        `}]},{unit:"II",title:"Law of Contract",notes:"<h3>Unit II Overview</h3><p>Understanding the legal framework of contracts is crucial for professionals. This unit covers the Indian Contract Act, 1872, and dispute resolution mechanisms.</p>",topics:[{title:"Nature & Elements of Valid Contract",content:`
          <div class="study-guide-box">
            <h4>1. Definition</h4>
            <div class="definition-box">
              <strong>Contract:</strong> An agreement enforceable by law. <br>
              <em>Formula: Agreement + Enforceability = Contract</em>
            </div>

            <h4>2. Essential Elements (Section 10)</h4>
            <ul class="checklist">
              <li><strong>Offer and Acceptance:</strong> Lawful offer and lawful acceptance.</li>
              <li><strong>Intention to create legal relationship:</strong> Social agreements are not contracts.</li>
              <li><strong>Lawful Consideration:</strong> Something in return (Quid Pro Quo).</li>
              <li><strong>Capacity of Parties:</strong> Age of majority, sound mind, not disqualified.</li>
              <li><strong>Free Consent:</strong> Not caused by coercion, undue influence, fraud, misrepresentation, or mistake.</li>
              <li><strong>Lawful Object:</strong> Purpose must not be illegal or immoral.</li>
            </ul>
          </div>
        `},{title:"Offer, Acceptance & Consideration",content:`
          <div class="study-guide-box">
            <h4>1. Offer (Proposal)</h4>
            <p>When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other.</p>

            <h4>2. Acceptance</h4>
            <p>When the person to whom the proposal is made signifies his assent thereto. Must be absolute and unqualified.</p>

            <h4>3. Consideration</h4>
            <p>"Something in return". It is the price for which the promise of the other is bought. It must be real and lawful.</p>
          </div>
        `},{title:"Negotiation, Mediation & Arbitration",content:`
          <div class="study-guide-box">
            <h4>Distinction Table</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>Negotiation</th><th>Mediation</th><th>Arbitration</th></tr>
              <tr><td><strong>Process</strong></td><td>Direct discussion between parties.</td><td>Facilitated by a neutral third party.</td><td>Adjudicated by a neutral third party (Arbitrator).</td></tr>
              <tr><td><strong>Control</strong></td><td>Parties have full control.</td><td>Parties control outcome, mediator controls process.</td><td>Arbitrator controls outcome and process.</td></tr>
              <tr><td><strong>Binding?</strong></td><td>No (unless agreement reached).</td><td>No (unless settlement signed).</td><td>Yes (Arbitral Award is binding).</td></tr>
              <tr><td><strong>Formality</strong></td><td>Informal.</td><td>Structured but informal.</td><td>Formal (Quasi-judicial).</td></tr>
            </table>
          </div>
        `},{title:"GST & Stakeholders",content:`
          <div class="study-guide-box">
            <h4>1. Introduction to GST</h4>
            <p><strong>Goods and Services Tax (GST):</strong> A comprehensive, multi-stage, destination-based tax levied on every value addition. It replaced multiple indirect taxes (VAT, Excise, Service Tax).</p>
            <ul>
              <li><strong>CGST:</strong> Central GST</li>
              <li><strong>SGST:</strong> State GST</li>
              <li><strong>IGST:</strong> Integrated GST (Inter-state)</li>
            </ul>

            <h4>2. Roles of Stakeholders</h4>
            <ul>
              <li><strong>Government:</strong> Policy making, tax collection.</li>
              <li><strong>Taxpayers (Businesses):</strong> Compliance, filing returns.</li>
              <li><strong>GST Council:</strong> Governing body deciding rates.</li>
              <li><strong>GSTN:</strong> IT backbone.</li>
            </ul>
          </div>
        `}]},{unit:"III",title:"Arbitration",notes:"<h3>Unit III Overview</h3><p>This unit delves deeper into the Arbitration and Conciliation Act, covering the tribunal's powers, appointment, and the role of courts.</p>",topics:[{title:"Arbitration Agreements & Tribunals",content:`
          <div class="study-guide-box">
            <h4>1. Arbitration Agreement</h4>
            <p>A written agreement by the parties to submit to arbitration all or certain disputes which have arisen or which may arise between them.</p>

            <h4>2. Arbitration Tribunal</h4>
            <p>The panel of one or more arbitrators.</p>
            <ul>
              <li><strong>Appointment:</strong> Parties are free to determine the number of arbitrators (must be odd). If they fail to agree, the Court appoints.</li>
              <li><strong>Jurisdiction:</strong> The tribunal can rule on its own jurisdiction (Kompetenz-Kompetenz).</li>
            </ul>
          </div>
        `},{title:"Powers & Challenges",content:`
          <div class="study-guide-box">
            <h4>1. Powers of Tribunal</h4>
            <ul>
              <li>Power to grant interim measures (e.g., preserving assets).</li>
              <li>Power to determine admissibility of evidence.</li>
              <li>Power to decide the place and language of arbitration.</li>
            </ul>

            <h4>2. Grounds of Challenge</h4>
            <p>An arbitrator can be challenged if:</p>
            <ul>
              <li>Circumstances exist that give rise to justifiable doubts as to their independence or impartiality.</li>
              <li>They do not possess the qualifications agreed to by the parties.</li>
            </ul>
          </div>
        `},{title:"Court Assistance & UNCITRAL",content:`
          <div class="study-guide-box">
            <h4>1. Court Assistance</h4>
            <p>Courts can assist in taking evidence or granting interim protection if the tribunal cannot.</p>

            <h4>2. Extent of Court Intervention</h4>
            <p>Minimal intervention. Courts can only intervene where explicitly provided in the Act (e.g., appointment, setting aside award).</p>

            <h4>3. UNCITRAL Model Law</h4>
            <p>The <strong>United Nations Commission on International Trade Law</strong> adopted a Model Law on International Commercial Arbitration (1985). India's Arbitration and Conciliation Act, 1996 is based on this model, ensuring global consistency.</p>
          </div>
        `}]},{unit:"IV",title:"Industrial Employment",notes:"<h3>Unit IV Overview</h3><p>Focuses on labor welfare, employment conditions, and specific acts like Workmen's Compensation and RERA.</p>",topics:[{title:"Role of Labour & Engagement",content:`
          <div class="study-guide-box">
            <h4>1. Role of Labour</h4>
            <p>Labour is a critical factor of production. Harmonious industrial relations lead to higher productivity.</p>

            <h4>2. Methods of Engaging Labour</h4>
            <table class="comparison-table">
              <tr><th>Method</th><th>Description</th><th>Pros/Cons</th></tr>
              <tr><td><strong>On Rolls (Permanent)</strong></td><td>Direct employees of the company. Enjoy all statutory benefits.</td><td>Stability / High Cost.</td></tr>
              <tr><td><strong>Contract Labour</strong></td><td>Hired through a contractor for specific period/work.</td><td>Flexibility / Less Job Security.</td></tr>
            </table>
          </div>
        `},{title:"Workmen Compensation Act, 1923",content:`
          <div class="study-guide-box">
            <h4>1. Objective</h4>
            <p>To provide social security to workmen. It imposes a statutory liability upon an employer to pay compensation in case of injury or death.</p>

            <h4>2. Key Provisions</h4>
            <ul>
              <li><strong>Coverage:</strong> Injury by accident arising out of and in the course of employment.</li>
              <li><strong>Compensation:</strong> Depends on nature of injury (Death, Permanent Total Disablement, Permanent Partial Disablement, Temporary Disablement) and monthly wages.</li>
              <li><strong>Not Liable:</strong> If injury is due to alcohol/drugs, willful disobedience of safety rules.</li>
            </ul>
          </div>
        `},{title:"Industrial Employment Act, 1946",content:`
          <div class="study-guide-box">
            <h4>1. Purpose</h4>
            <p>To require employers in industrial establishments to define with sufficient precision the conditions of employment under them and to make the said conditions known to workmen.</p>

            <h4>2. Standing Orders</h4>
            <p>Rules relating to:</p>
            <ul>
              <li>Classification of workmen (permanent, temporary, apprentice).</li>
              <li>Shift working.</li>
              <li>Attendance and late coming.</li>
              <li>Termination of employment.</li>
              <li>Redressal of grievances.</li>
            </ul>
          </div>
        `},{title:"RERA Act 2017",content:`
          <div class="study-guide-box">
            <h4>1. Full Form</h4>
            <p><strong>Real Estate (Regulation and Development) Act, 2017.</strong></p>

            <h4>2. Objectives</h4>
            <ul>
              <li>Protect the interest of home buyers.</li>
              <li>Ensure transparency and efficiency in the real estate sector.</li>
              <li>Establish an adjudicating mechanism for speedy dispute redressal.</li>
            </ul>

            <h4>3. Key Features</h4>
            <ul>
              <li><strong>Registration:</strong> Mandatory for projects > 500 sq meters or 8 apartments.</li>
              <li><strong>Escrow Account:</strong> 70% of funds collected must be kept in a separate bank account for construction.</li>
              <li><strong>Carpet Area:</strong> Standardized definition for selling.</li>
            </ul>
          </div>
        `}]},{unit:"V",title:"Law relating to Intellectual Property",notes:"<h3>Unit V Overview</h3><p>A comprehensive look at Intellectual Property Rights (IPR), international treaties, and the specific laws governing Copyright, Patents, and Trademarks in India.</p>",topics:[{title:"Introduction & Scope of IPR",content:`
          <div class="study-guide-box">
            <h4>1. Definition</h4>
            <p><strong>Intellectual Property (IP):</strong> Creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names and images used in commerce.</p>

            <h4>2. International Organizations</h4>
            <ul>
              <li><strong>WIPO (World Intellectual Property Organization):</strong> A specialized agency of the UN to promote the protection of IP throughout the world.</li>
              <li><strong>TRIPS (Trade-Related Aspects of Intellectual Property Rights):</strong> A WTO agreement that sets down minimum standards for many forms of IP regulation.</li>
            </ul>
          </div>
        `},{title:"Main Forms of IP",content:`
          <div class="study-guide-box">
            <h4>Comparison of IP Forms</h4>
            <table class="comparison-table">
              <tr><th>IP Type</th><th>Subject Matter</th><th>Protection Term</th></tr>
              <tr><td><strong>Copyright</strong></td><td>Literary, artistic, musical works, software.</td><td>Lifetime + 60 years.</td></tr>
              <tr><td><strong>Trademark</strong></td><td>Brand names, logos, slogans.</td><td>10 years (Renewable indefinitely).</td></tr>
              <tr><td><strong>Patent</strong></td><td>Inventions (Product/Process).</td><td>20 years.</td></tr>
              <tr><td><strong>Industrial Design</strong></td><td>Aesthetic shape/pattern.</td><td>10 years (+5 renewable).</td></tr>
              <tr><td><strong>Trade Secret</strong></td><td>Confidential business info.</td><td>Indefinite (as long as secret).</td></tr>
            </table>
          </div>
        `},{title:"Law relating to Copyright in India",content:`
          <div class="study-guide-box">
            <h4>1. The Copyright Act, 1957</h4>
            <p>Governs copyright law in India.</p>

            <h4>2. Rights of Copyright Owner</h4>
            <ul>
              <li><strong>Economic Rights:</strong> To reproduce, issue copies, perform in public, make translation/adaptation.</li>
              <li><strong>Moral Rights:</strong> Right to paternity (claim authorship) and integrity (prevent distortion).</li>
            </ul>

            <h4>3. Infringement</h4>
            <p>Using the work without permission. Exceptions exist under "Fair Dealing" (e.g., for research, news reporting).</p>
          </div>
        `},{title:"Agencies & Semiconductor Act",content:`
          <div class="study-guide-box">
            <h4>1. IPR Registration Agencies in India</h4>
            <ul>
              <li><strong>CGPDTM:</strong> Controller General of Patents, Designs and Trade Marks.</li>
              <li><strong>Copyright Office:</strong> Under Ministry of Education.</li>
            </ul>

            <h4>2. Semi-Conductor Integrated Circuits Layout Design Act, 2000</h4>
            <p>Protects the layout-designs (topographies) of integrated circuits. Essential for the electronics industry to prevent copying of chip designs.</p>
          </div>
        `},{title:"Ethical Decision Making",content:`
          <div class="study-guide-box">
            <h4>1. Process</h4>
            <ol>
              <li><strong>Identify the problem:</strong> What is the ethical dilemma?</li>
              <li><strong>Gather facts:</strong> Get all relevant information.</li>
              <li><strong>Evaluate alternatives:</strong> Use ethical theories (Utilitarianism, Duty ethics).</li>
              <li><strong>Make a decision:</strong> Choose the best course of action.</li>
              <li><strong>Act and reflect:</strong> Implement and review.</li>
            </ol>
          </div>
        `}]}],ny={I:[{id:1,question:"What is the primary focus of Engineering Ethics?",options:["Profit Maximization","Public Safety","Personal Gain","Corporate Loyalty"],answer:1}],II:[],III:[],IV:[],V:[]},ay={title:"Professional Practice, Law & Ethics - Model Paper 1",subject:"Professional Practice, Law & Ethics",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Professional Ethics.",answer:"<strong>Professional Ethics</strong> refers to the personal and corporate rules that govern behavior within the context of a particular profession. It involves principles of conduct, integrity, and responsibility towards the public, clients, and employers."},{id:2,question:"What is the main objective of Engineering Ethics?",answer:"The main objective is to ensure that engineers uphold the highest standards of integrity and prioritize the <strong>safety, health, and welfare of the public</strong> in the performance of their professional duties."},{id:3,question:"Define a 'Contract' as per the Indian Contract Act, 1872.",answer:"According to Section 2(h) of the Indian Contract Act, 1872, a <strong>Contract</strong> is an agreement enforceable by law. <br><em>Formula: Contract = Agreement + Enforceability.</em>"},{id:4,question:"What is meant by 'Quid Pro Quo' in a contract?",answer:"<strong>Quid Pro Quo</strong> means 'something in return'. In legal terms, it refers to <strong>Consideration</strong>, which is an essential element of a valid contract. Without consideration, a contract is generally void."},{id:5,question:"Define Arbitration.",answer:"<strong>Arbitration</strong> is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute."},{id:6,question:"What is an Arbitral Award?",answer:"An <strong>Arbitral Award</strong> is the final decision or judgment given by the arbitration tribunal. It is binding on the parties and is enforceable in the same manner as a court decree."},{id:7,question:"What is the purpose of the Industrial Employment (Standing Orders) Act, 1946?",answer:"Its purpose is to require employers in industrial establishments to formally define conditions of employment (standing orders) and make them known to workmen to prevent ambiguity and disputes."},{id:8,question:"Define 'Workman' under the Workmen's Compensation Act.",answer:"A <strong>Workman</strong> is any person (other than a person whose employment is of a casual nature) who is employed for the purposes of the employer's trade or business."},{id:9,question:"What does IPR stand for? Give two examples.",answer:"<strong>IPR</strong> stands for <strong>Intellectual Property Rights</strong>. Examples include: <br>1. <strong>Patents</strong> (for inventions). <br>2. <strong>Copyrights</strong> (for literary/artistic works)."},{id:10,question:"What is the validity period of a Patent in India?",answer:"The term of every patent granted in India is <strong>20 years</strong> from the date of filing of the application."}],partB:[{unit:"I",questionNumber:2,choices:[{question:"Explain the difference between Personal Ethics and Professional Ethics with suitable examples. Discuss the concept of Professional Responsibility.",answer:`
            <div class="answer-content">
              <h4>1. Introduction</h4>
              <p>Ethics are moral principles that govern a person's behavior. While they stem from similar roots, a clear distinction exists between personal ethics (private life) and professional ethics (workplace conduct).</p>

              <h4>2. Personal Ethics vs. Professional Ethics</h4>
              <table class="comparison-table">
                <tr>
                  <th>Aspect</th>
                  <th>Personal Ethics</th>
                  <th>Professional Ethics</th>
                </tr>
                <tr>
                  <td><strong>Definition</strong></td>
                  <td>Moral principles governing an individual's personal life and interactions.</td>
                  <td>Rules and standards governing the conduct of a professional group.</td>
                </tr>
                <tr>
                  <td><strong>Source</strong></td>
                  <td>Upbringing, family, religion, culture, and conscience.</td>
                  <td>Professional bodies, codes of conduct, and organizational policies.</td>
                </tr>
                <tr>
                  <td><strong>Scope</strong></td>
                  <td>Limited to private life and social circles.</td>
                  <td>Applicable to professional dealings, clients, and the public.</td>
                </tr>
                <tr>
                  <td><strong>Example</strong></td>
                  <td>Respecting elders, being kind to neighbors, honesty in friendship.</td>
                  <td>Maintaining client confidentiality, prioritizing public safety, avoiding conflicts of interest.</td>
                </tr>
                <tr>
                  <td><strong>Conflict</strong></td>
                  <td>A person might personally dislike someone but must treat them professionally at work.</td>
                  <td>A doctor must treat a criminal patient despite personal moral objections to the crime.</td>
                </tr>
              </table>

              <h4>3. Professional Responsibility</h4>
              <p>Professional responsibility is the obligation of professionals to perform their duties competently, ethically, and in the best interest of society. It encompasses:</p>
              <ul>
                <li><strong>Competence:</strong> Keeping skills updated and only accepting work within one's area of expertise.</li>
                <li><strong>Integrity:</strong> Being honest, objective, and avoiding deceptive acts.</li>
                <li><strong>Public Welfare:</strong> Engineers, for instance, must hold paramount the safety, health, and welfare of the public.</li>
                <li><strong>Confidentiality:</strong> Protecting the proprietary information of clients and employers.</li>
              </ul>

              <h4>4. Conclusion</h4>
              <p>While personal ethics shape a person's character, professional ethics ensure that their professional conduct meets the standards expected by society and the industry. Both are essential for a successful and honorable career.</p>
            </div>
          `},{question:"Discuss the various types of roles engineers play as practitioners. Explain the Code of Ethics they are expected to follow.",answer:`
            <div class="answer-content">
              <h4>1. Introduction</h4>
              <p>Engineers are not just technicians; they are professionals who play diverse roles in society. Their decisions impact public safety and economic progress, necessitating strict adherence to a Code of Ethics.</p>

              <h4>2. Roles of Engineers</h4>
              <ul>
                <li><strong>As Designers:</strong> Creating safe, efficient, and sustainable solutions.</li>
                <li><strong>As Managers:</strong> Overseeing projects, resources, and teams ethically.</li>
                <li><strong>As Consultants:</strong> Providing expert, unbiased advice to clients.</li>
                <li><strong>As Employees:</strong> Being loyal to employers while upholding ethical standards.</li>
                <li><strong>As Social Servants:</strong> Ensuring their work benefits society and does not harm the environment.</li>
                <li><strong>As Expert Witnesses:</strong> Providing truthful technical testimony in legal cases.</li>
              </ul>

              <h4>3. Code of Ethics (NSPE Model)</h4>
              <p>The National Society of Professional Engineers (NSPE) outlines fundamental canons that engineers must follow:</p>
              <div class="study-guide-box">
                <h5>Fundamental Canons</h5>
                <ol>
                  <li><strong>Public Safety:</strong> Hold paramount the safety, health, and welfare of the public.</li>
                  <li><strong>Competence:</strong> Perform services only in areas of their competence.</li>
                  <li><strong>Truthfulness:</strong> Issue public statements only in an objective and truthful manner.</li>
                  <li><strong>Loyalty:</strong> Act for each employer or client as faithful agents or trustees.</li>
                  <li><strong>Deception:</strong> Avoid deceptive acts.</li>
                  <li><strong>Honor:</strong> Conduct themselves honorably, responsibly, ethically, and lawfully so as to enhance the honor, reputation, and usefulness of the profession.</li>
                </ol>
              </div>

              <h4>4. Conclusion</h4>
              <p>By balancing these roles and strictly adhering to the Code of Ethics, engineers maintain public trust and contribute positively to the advancement of society.</p>
            </div>
          `}]},{unit:"II",questionNumber:3,choices:[{question:"Define a Valid Contract. Explain the essential elements of a valid contract under the Indian Contract Act, 1872.",answer:`
            <div class="answer-content">
              <h4>1. Definition of Contract</h4>
              <p>According to <strong>Section 2(h)</strong> of the Indian Contract Act, 1872, a contract is <em>"an agreement enforceable by law."</em></p>
              <p><strong>Contract = Agreement + Enforceability</strong></p>

              <h4>2. Essential Elements (Section 10)</h4>
              <p>For an agreement to be a valid contract, it must satisfy the following conditions:</p>
              
              <div class="concept-grid">
                <div class="concept-card">
                  <h5>1. Offer and Acceptance</h5>
                  <p>There must be a lawful offer by one party and a lawful acceptance by the other. The acceptance must be absolute and unqualified.</p>
                </div>
                <div class="concept-card">
                  <h5>2. Intention to Create Legal Relations</h5>
                  <p>The parties must intend to create a legal obligation. Social or domestic agreements (e.g., a promise to take a spouse to dinner) are not contracts.</p>
                </div>
                <div class="concept-card">
                  <h5>3. Lawful Consideration</h5>
                  <p>There must be <em>Quid Pro Quo</em> (something in return). It must be real and lawful.</p>
                </div>
                <div class="concept-card">
                  <h5>4. Capacity of Parties</h5>
                  <p>Parties must be competent to contract:
                    <ul>
                      <li>Age of majority (18+).</li>
                      <li>Sound mind.</li>
                      <li>Not disqualified by law.</li>
                    </ul>
                  </p>
                </div>
                <div class="concept-card">
                  <h5>5. Free Consent</h5>
                  <p>Consent must be free from:
                    <ul>
                      <li>Coercion</li>
                      <li>Undue Influence</li>
                      <li>Fraud</li>
                      <li>Misrepresentation</li>
                      <li>Mistake</li>
                    </ul>
                  </p>
                </div>
                <div class="concept-card">
                  <h5>6. Lawful Object</h5>
                  <p>The purpose of the agreement must not be illegal, immoral, or opposed to public policy.</p>
                </div>
              </div>

              <h4>3. Conclusion</h4>
              <p>If any of these elements are missing, the contract may be void, voidable, or illegal. A valid contract ensures that the rights and obligations of parties are protected by law.</p>
            </div>
          `},{question:"Distinguish between Negotiation, Mediation, and Arbitration. Briefly explain the role of various stakeholders in GST.",answer:`
            <div class="answer-content">
              <h4>Part A: Dispute Resolution Mechanisms</h4>
              <table class="comparison-table">
                <tr>
                  <th>Feature</th>
                  <th>Negotiation</th>
                  <th>Mediation</th>
                  <th>Arbitration</th>
                </tr>
                <tr>
                  <td><strong>Definition</strong></td>
                  <td>Direct discussion between parties to reach a settlement.</td>
                  <td>A neutral third party facilitates communication to help parties reach a settlement.</td>
                  <td>A neutral third party (Arbitrator) hears evidence and makes a binding decision.</td>
                </tr>
                <tr>
                  <td><strong>Third Party</strong></td>
                  <td>None.</td>
                  <td>Mediator (Facilitator, no decision power).</td>
                  <td>Arbitrator (Judge-like, has decision power).</td>
                </tr>
                <tr>
                  <td><strong>Outcome</strong></td>
                  <td>Mutual Agreement (Non-binding until signed).</td>
                  <td>Settlement Agreement (Non-binding until signed).</td>
                  <td>Arbitral Award (Binding and Enforceable).</td>
                </tr>
                <tr>
                  <td><strong>Formality</strong></td>
                  <td>Informal.</td>
                  <td>Structured but informal.</td>
                  <td>Formal, quasi-judicial.</td>
                </tr>
              </table>

              <h4>Part B: Stakeholders in GST</h4>
              <p>The Goods and Services Tax (GST) ecosystem involves several key stakeholders:</p>
              <ul>
                <li><strong>Government (Central & State):</strong> Responsible for policy-making, legislation, and tax collection (CGST, SGST, IGST).</li>
                <li><strong>GST Council:</strong> A constitutional body chaired by the Finance Minister that decides tax rates, exemptions, and rules.</li>
                <li><strong>Taxpayers (Businesses):</strong> Responsible for registering, collecting tax from consumers, and filing returns (GSTR-1, GSTR-3B).</li>
                <li><strong>GST Network (GSTN):</strong> The non-profit organization providing the IT infrastructure (portal) for registration, returns, and payments.</li>
                <li><strong>Practitioners/Consultants:</strong> Assist taxpayers in compliance and filing.</li>
                <li><strong>Banks:</strong> Facilitate tax payments.</li>
              </ul>
            </div>
          `}]},{unit:"III",questionNumber:4,choices:[{question:"Explain the composition, jurisdiction, and powers of an Arbitral Tribunal under the Arbitration and Conciliation Act, 1996.",answer:`
            <div class="answer-content">
              <h4>1. Composition of Arbitral Tribunal</h4>
              <ul>
                <li><strong>Number of Arbitrators:</strong> Parties are free to determine the number, provided it is not an even number (to avoid tie). If they fail to agree, it shall be a sole arbitrator.</li>
                <li><strong>Appointment:</strong> Parties can agree on a procedure. If they fail, they can approach the Court (High Court/Supreme Court) for appointment.</li>
              </ul>

              <h4>2. Jurisdiction (Kompetenz-Kompetenz)</h4>
              <p>The Arbitral Tribunal has the power to rule on its own jurisdiction, including ruling on any objections with respect to the existence or validity of the arbitration agreement. This principle minimizes court intervention.</p>

              <h4>3. Powers of the Tribunal</h4>
              <ul>
                <li><strong>Interim Measures (Section 17):</strong> The tribunal can grant interim protection (e.g., preserving assets, securing amount in dispute) during the proceedings.</li>
                <li><strong>Procedure:</strong> Power to determine the rules of procedure (if parties haven't agreed), admissibility, relevance, and weight of evidence.</li>
                <li><strong>Place & Language:</strong> Power to decide the place and language of arbitration if not agreed by parties.</li>
                <li><strong>Award:</strong> Power to make a final, binding award and award costs.</li>
              </ul>

              <h4>4. Conclusion</h4>
              <p>The Act empowers the tribunal to act as a private judge, ensuring a speedy and efficient resolution of disputes with minimal judicial interference.</p>
            </div>
          `},{question:"Discuss the grounds for challenging an arbitral award and the extent of court intervention.",answer:`
            <div class="answer-content">
              <h4>1. Introduction</h4>
              <p>An arbitral award is final and binding. However, to ensure justice, Section 34 of the Arbitration and Conciliation Act provides limited grounds to set aside an award.</p>

              <h4>2. Grounds for Challenge (Section 34)</h4>
              <p>An award can be set aside by the Court ONLY if:</p>
              <ul>
                <li><strong>Incapacity:</strong> A party was under some incapacity (e.g., minor).</li>
                <li><strong>Invalid Agreement:</strong> The arbitration agreement is not valid under law.</li>
                <li><strong>No Notice:</strong> The party was not given proper notice of the appointment of the arbitrator or proceedings.</li>
                <li><strong>Beyond Scope:</strong> The award deals with a dispute not contemplated by or falling within the terms of submission to arbitration.</li>
                <li><strong>Composition Error:</strong> The composition of the tribunal was not in accordance with the agreement.</li>
                <li><strong>Public Policy:</strong> The award is in conflict with the public policy of India (e.g., induced by fraud or corruption).</li>
                <li><strong>Patent Illegality:</strong> The award is vitiated by patent illegality appearing on the face of the award.</li>
              </ul>

              <h4>3. Extent of Court Intervention (Section 5)</h4>
              <p>The Act follows a policy of <strong>minimal court intervention</strong>. Section 5 states that <em>"no judicial authority shall intervene except where so provided in this Part."</em></p>
              <p>Courts intervene only for:</p>
              <ul>
                <li>Referring parties to arbitration (Sec 8).</li>
                <li>Interim measures (Sec 9).</li>
                <li>Appointment of arbitrators (Sec 11).</li>
                <li>Setting aside an award (Sec 34).</li>
              </ul>

              <h4>4. Conclusion</h4>
              <p>The limited scope of challenge ensures the finality of arbitration, making it an effective alternative to litigation.</p>
            </div>
          `}]},{unit:"IV",questionNumber:5,choices:[{question:"Explain the key provisions of the Workmen's Compensation Act, 1923. When is an employer NOT liable to pay compensation?",answer:`
            <div class="answer-content">
              <h4>1. Introduction</h4>
              <p>The Workmen's Compensation Act, 1923 (now Employee's Compensation Act) is a social security legislation that imposes a statutory liability on employers to compensate employees for work-related injuries.</p>

              <h4>2. Key Provisions</h4>
              <ul>
                <li><strong>Employer's Liability (Sec 3):</strong> Employer must pay compensation if personal injury is caused to a workman by accident <em>arising out of and in the course of his employment</em>.</li>
                <li><strong>Occupational Diseases:</strong> Contracting specific occupational diseases is deemed an "accident" and is compensable.</li>
                <li><strong>Amount of Compensation (Sec 4):</strong> Based on the nature of injury (Death, Permanent Total Disablement, Permanent Partial Disablement, Temporary Disablement) and the monthly wages of the workman.</li>
              </ul>

              <h4>3. When Employer is NOT Liable</h4>
              <p>The employer is not liable to pay compensation in the following cases:</p>
              <ul>
                <li><strong>Minor Injury:</strong> If the injury does not result in total or partial disablement for a period exceeding 3 days.</li>
                <li><strong>Intoxication:</strong> If the workman was under the influence of drink or drugs at the time of the accident.</li>
                <li><strong>Disobedience:</strong> Willful disobedience of an order expressly given for the purpose of securing safety.</li>
                <li><strong>Removal of Safety Guard:</strong> Willful removal or disregard of any safety guard or device provided.</li>
              </ul>

              <h4>4. Conclusion</h4>
              <p>The Act balances the need for social security for workers with specific defenses for employers against willful misconduct.</p>
            </div>
          `},{question:"Discuss the salient features and importance of the Real Estate (Regulation and Development) Act, 2017 (RERA).",answer:`
            <div class="answer-content">
              <h4>1. Introduction</h4>
              <p>RERA 2017 was enacted to regulate the real estate sector, ensure transparency, and protect the interests of home buyers.</p>

              <h4>2. Salient Features</h4>
              <ul>
                <li><strong>Establishment of RERA:</strong> Every state must establish a Real Estate Regulatory Authority to oversee the sector.</li>
                <li><strong>Mandatory Registration:</strong> All commercial and residential projects where the land is over 500 sq. meters or has 8 apartments must register with RERA.</li>
                <li><strong>Escrow Account:</strong> Promoters must deposit <strong>70%</strong> of the amounts realized from buyers in a separate scheduled bank account to cover construction and land costs. This prevents fund diversion.</li>
                <li><strong>Standardized Carpet Area:</strong> Promoters must sell properties based on "carpet area" (net usable floor area) rather than "super built-up area".</li>
                <li><strong>Title Representation:</strong> Promoters must provide a clear title to the land.</li>
                <li><strong>Penalties:</strong> Strict penalties (up to 10% of project cost) and imprisonment for non-compliance.</li>
              </ul>

              <h4>3. Importance</h4>
              <ul>
                <li><strong>Transparency:</strong> Buyers get accurate information about the project.</li>
                <li><strong>Timely Delivery:</strong> The escrow mechanism ensures funds are available for construction, reducing delays.</li>
                <li><strong>Accountability:</strong> Developers are held accountable for false promises and defects (5-year defect liability period).</li>
                <li><strong>Dispute Resolution:</strong> Fast-track mechanism for resolving disputes between buyers and developers.</li>
              </ul>

              <h4>4. Conclusion</h4>
              <p>RERA has transformed the real estate sector from unorganized to organized, boosting buyer confidence and investment.</p>
            </div>
          `}]},{unit:"V",questionNumber:6,choices:[{question:"Explain the different forms of Intellectual Property Rights (IPR) with examples.",answer:`
            <div class="answer-content">
              <h4>1. Introduction</h4>
              <p>Intellectual Property Rights (IPR) are legal rights granted to creators and inventors to control the use of their creations for a certain period.</p>

              <h4>2. Main Forms of IPR</h4>
              
              <div class="concept-grid">
                <div class="concept-card">
                  <h5>1. Patents</h5>
                  <p><strong>Protects:</strong> Inventions (new products or processes).</p>
                  <p><strong>Requirement:</strong> Novelty, Inventive Step, Industrial Application.</p>
                  <p><strong>Term:</strong> 20 years.</p>
                  <p><strong>Example:</strong> A new drug molecule, a new engine design.</p>
                </div>
                <div class="concept-card">
                  <h5>2. Copyright</h5>
                  <p><strong>Protects:</strong> Original literary, artistic, musical, and dramatic works.</p>
                  <p><strong>Requirement:</strong> Originality.</p>
                  <p><strong>Term:</strong> Author's life + 60 years.</p>
                  <p><strong>Example:</strong> Books, songs, software code, movies.</p>
                </div>
                <div class="concept-card">
                  <h5>3. Trademarks</h5>
                  <p><strong>Protects:</strong> Distinctive signs, logos, names identifying a brand.</p>
                  <p><strong>Requirement:</strong> Distinctiveness.</p>
                  <p><strong>Term:</strong> 10 years (Renewable indefinitely).</p>
                  <p><strong>Example:</strong> Apple logo, "Just Do It" slogan.</p>
                </div>
                <div class="concept-card">
                  <h5>4. Industrial Designs</h5>
                  <p><strong>Protects:</strong> Aesthetic aspect (shape, pattern, color) of an article.</p>
                  <p><strong>Requirement:</strong> New and original design.</p>
                  <p><strong>Term:</strong> 10 years (+5 years extension).</p>
                  <p><strong>Example:</strong> Shape of a Coca-Cola bottle, design of a smartphone.</p>
                </div>
                <div class="concept-card">
                  <h5>5. Trade Secrets</h5>
                  <p><strong>Protects:</strong> Confidential business information.</p>
                  <p><strong>Requirement:</strong> Must be secret and have commercial value.</p>
                  <p><strong>Term:</strong> Indefinite (as long as it remains secret).</p>
                  <p><strong>Example:</strong> KFC recipe, Google search algorithm.</p>
                </div>
              </div>

              <h4>3. Conclusion</h4>
              <p>Each form of IPR serves a specific purpose in protecting different types of intellectual assets, encouraging innovation and creativity.</p>
            </div>
          `},{question:"Discuss the Law relating to Copyright in India. What constitutes infringement and what are the remedies available?",answer:`
            <div class="answer-content">
              <h4>1. Copyright Act, 1957</h4>
              <p>Copyright law in India is governed by the Copyright Act, 1957. It grants authors exclusive rights over their original works.</p>

              <h4>2. Rights of Copyright Owner (Section 14)</h4>
              <ul>
                <li><strong>Reproduction:</strong> Right to make copies.</li>
                <li><strong>Communication:</strong> Right to perform in public or broadcast.</li>
                <li><strong>Adaptation:</strong> Right to make translations or adaptations (e.g., book to movie).</li>
                <li><strong>Moral Rights:</strong> Right to claim authorship (Paternity) and prevent distortion (Integrity).</li>
              </ul>

              <h4>3. Infringement of Copyright</h4>
              <p>Copyright is infringed if any person, without license from the owner:</p>
              <ul>
                <li>Does anything the owner has the exclusive right to do (e.g., printing pirated books).</li>
                <li>Permits for profit any place to be used for infringement.</li>
                <li>Distributes or imports infringing copies.</li>
              </ul>
              <p><strong>Exception:</strong> "Fair Dealing" (Section 52) allows use for research, criticism, news reporting, and education.</p>

              <h4>4. Remedies for Infringement</h4>
              <ul>
                <li><strong>Civil Remedies:</strong>
                  <ul>
                    <li>Injunction (Order to stop).</li>
                    <li>Damages (Monetary compensation).</li>
                    <li>Account of profits.</li>
                  </ul>
                </li>
                <li><strong>Criminal Remedies:</strong>
                  <ul>
                    <li>Imprisonment (6 months to 3 years).</li>
                    <li>Fine (₹50,000 to ₹2 Lakhs).</li>
                    <li>Seizure of infringing copies.</li>
                  </ul>
                </li>
              </ul>

              <h4>5. Conclusion</h4>
              <p>The Act provides a robust framework to protect creators while balancing public access through fair dealing provisions.</p>
            </div>
          `}]}]},oy=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],sy=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}],ry={I:{id:"root",label:"Mobile Computing",children:[{id:"gsm",label:"GSM Architecture",children:[{id:"rss",label:"Radio Subsystem (RSS)",children:[{id:"ms",label:"Mobile Station"},{id:"bss",label:"Base Station (BSS)"}]},{id:"nss",label:"Network Switching (NSS)",children:[{id:"msc",label:"MSC"},{id:"hlr",label:"HLR / VLR"}]},{id:"oss",label:"Operation (OSS)",children:[{id:"omc",label:"OMC"},{id:"eir",label:"EIR / AUC"}]}]},{id:"gprs",label:"GPRS",children:[{id:"pkt",label:"Packet Switching"},{id:"nodes",label:"New Nodes",children:[{id:"sgsn",label:"SGSN"},{id:"ggsn",label:"GGSN"}]}]}]},II:{id:"root",label:"Wireless MAC & IP",children:[{id:"mac",label:"MAC Layer",children:[{id:"sdma",label:"SDMA (Space)"},{id:"fdma",label:"FDMA (Freq)"},{id:"tdma",label:"TDMA (Time)"},{id:"cdma",label:"CDMA (Code)"}]},{id:"80211",label:"IEEE 802.11",children:[{id:"arch",label:"Architecture",children:[{id:"bss",label:"BSS/ESS"},{id:"ap",label:"Access Point"}]},{id:"mac_layer",label:"MAC",children:[{id:"dcf",label:"DCF"},{id:"pcf",label:"PCF"}]}]},{id:"mip",label:"Mobile IP",children:[{id:"entities",label:"Entities",children:[{id:"mn",label:"MN"},{id:"ha",label:"HA"},{id:"fa",label:"FA"}]},{id:"mech",label:"Mechanisms",children:[{id:"tunnel",label:"Tunneling"},{id:"tri",label:"Triangular Routing"}]}]}]},III:{id:"root",label:"Mobile Transport",children:[{id:"tcp_issues",label:"TCP Issues",children:[{id:"cong",label:"Congestion vs Error"},{id:"disc",label:"Frequent Disconnection"}]},{id:"solutions",label:"Solutions",children:[{id:"itcp",label:"Indirect TCP",children:[{id:"split",label:"Split Connection"}]},{id:"snoop",label:"Snooping TCP",children:[{id:"buffer",label:"Buffering at BS"}]},{id:"mtcp",label:"Mobile TCP",children:[{id:"persist",label:"Persist Mode"}]}]}]},IV:{id:"root",label:"Data Dissemination",children:[{id:"models",label:"Delivery Models",children:[{id:"push",label:"Push (Publish/Sub)"},{id:"pull",label:"Pull (On-Demand)"},{id:"hybrid",label:"Hybrid"}]},{id:"bdisk",label:"Broadcast Disk",children:[{id:"flat",label:"Flat Schedule"},{id:"skew",label:"Skewed Schedule"},{id:"index",label:"Indexing",children:[{id:"power",label:"Save Power"}]}]},{id:"cache",label:"Caching",children:[{id:"consist",label:"Consistency",children:[{id:"inv",label:"Invalidation Reports"}]}]}]},V:{id:"root",label:"MANETs & Platforms",children:[{id:"routing",label:"Routing Protocols",children:[{id:"pro",label:"Proactive",children:[{id:"dsdv",label:"DSDV"}]},{id:"reac",label:"Reactive",children:[{id:"dsr",label:"DSR"},{id:"aodv",label:"AODV"}]},{id:"hybrid",label:"Hybrid",children:[{id:"zrp",label:"ZRP"}]}]},{id:"security",label:"Security",children:[{id:"attacks",label:"Attacks",children:[{id:"black",label:"Blackhole"},{id:"worm",label:"Wormhole"}]}]},{id:"j2me",label:"J2ME",children:[{id:"config",label:"Config (CLDC)"},{id:"profile",label:"Profile (MIDP)"}]}]}},ly={I:{id:"root",label:"Sensors & Transducers",children:[{id:"basics",label:"Basics",children:[{id:"def",label:"Sensor vs Transducer"},{id:"class",label:"Classification",children:[{id:"act",label:"Active"},{id:"pass",label:"Passive"}]},{id:"char",label:"Characteristics",children:[{id:"stat",label:"Static (Accuracy, Precision)"},{id:"dyn",label:"Dynamic"}]}]},{id:"resistive",label:"Resistive Sensors",children:[{id:"pot",label:"Potentiometer"},{id:"strain",label:"Strain Gauge",children:[{id:"gf",label:"Gauge Factor"},{id:"bridge",label:"Wheatstone Bridge"}]}]},{id:"inductive",label:"Inductive Sensors",children:[{id:"lvdt",label:"LVDT",children:[{id:"core",label:"Movable Core"},{id:"out",label:"Vout = Vs1 - Vs2"}]}]},{id:"capacitive",label:"Capacitive Sensors",children:[{id:"var",label:"Variations",children:[{id:"dist",label:"Distance (d)"},{id:"area",label:"Area (A)"},{id:"diel",label:"Dielectric (ε)"}]}]}]},II:{id:"root",label:"Thermal Sensors",children:[{id:"expansion",label:"Expansion Type",children:[{id:"bimetal",label:"Bimetallic Strip"},{id:"liq",label:"Liquid in Glass"}]},{id:"electrical",label:"Electrical Type",children:[{id:"rtd",label:"RTD (Pt100)",children:[{id:"ptc",label:"PTC (Linear)"}]},{id:"thermistor",label:"Thermistor",children:[{id:"ntc",label:"NTC (Non-linear)"}]},{id:"tcouple",label:"Thermocouple",children:[{id:"seebeck",label:"Seebeck Effect"},{id:"types",label:"Types (J, K, T)"}]}]},{id:"radiation",label:"Radiation Type",children:[{id:"pyro",label:"Pyrometers",children:[{id:"opt",label:"Optical"},{id:"rad",label:"Total Radiation"}]}]}]},III:{id:"root",label:"Magnetic Sensors",children:[{id:"hall",label:"Hall Effect",children:[{id:"principle",label:"Lorentz Force"},{id:"app",label:"Applications",children:[{id:"rpm",label:"RPM"},{id:"curr",label:"Current Sensing"}]}]},{id:"magneto",label:"Magnetoresistive",children:[{id:"amr",label:"AMR"},{id:"gmr",label:"GMR (Giant MR)"}]},{id:"strictive",label:"Magnetostrictive",children:[{id:"wied",label:"Wiedemann Effect"},{id:"level",label:"Liquid Level Sensing"}]}]},IV:{id:"root",label:"Radiation & Electroanalytical",children:[{id:"optical",label:"Optical Sensors",children:[{id:"pdiode",label:"Photodiode"},{id:"ptrans",label:"Phototransistor"},{id:"ldr",label:"LDR"},{id:"solar",label:"Solar Cell"}]},{id:"nuclear",label:"Nuclear Radiation",children:[{id:"gm",label:"Geiger Muller Counter"},{id:"scint",label:"Scintillation Counter"}]},{id:"chem",label:"Chemical Sensors",children:[{id:"ph",label:"pH Sensor",children:[{id:"glass",label:"Glass Electrode"},{id:"nernst",label:"Nernst Eq"}]},{id:"cond",label:"Conductivity Cell"}]}]},V:{id:"root",label:"Smart Sensors & MEMS",children:[{id:"smart",label:"Smart Sensors",children:[{id:"std",label:"IEEE 1451"},{id:"blocks",label:"Blocks",children:[{id:"sens",label:"Sensor"},{id:"adc",label:"ADC"},{id:"dsp",label:"DSP"},{id:"comm",label:"Comm"}]}]},{id:"mems",label:"MEMS",children:[{id:"def",label:"Micro-Electro-Mechanical"},{id:"fab",label:"Fabrication",children:[{id:"bulk",label:"Bulk Micromachining"},{id:"surf",label:"Surface Micromachining"}]},{id:"apps",label:"Applications",children:[{id:"accel",label:"Accelerometer"},{id:"gyro",label:"Gyroscope"}]}]}]}},cy=r=>r==="sensors"?{id:"sensors",title:"Electronic Sensors",syllabus:K0,quizzes:X0,papers:[Z0,J0,$0],tips:ey,flashcards:ty,mindmaps:ly,progressKey:"electronicSensorsProgress"}:r==="pple"?{id:"pple",title:"Professional Practice, Law & Ethics",syllabus:iy,quizzes:ny,papers:[ay],tips:oy,flashcards:sy,mindmaps:null,progressKey:"ppleProgress"}:{id:"mobile",title:"Mobile Computing",syllabus:U0,quizzes:G0,papers:[V0,_0,W0,F0],tips:Y0,flashcards:Q0,mindmaps:ry,progressKey:"mobileComputingProgress"},zf=({node:r})=>h.jsxs("div",{className:"mm-node",children:[h.jsx("div",{className:"mm-content",children:r.label}),r.children&&r.children.length>0&&h.jsx("div",{className:"mm-children",children:r.children.map(d=>h.jsx(zf,{node:d},d.id))})]});function ms(){const{subjectId:r,viewMode:d,topicId:u,unitId:l}=qm(),f=ws();ci();const[p,S]=E0(),w=cy(r),[y,m]=k.useState(d||"study"),[D,M]=k.useState({}),[B,j]=k.useState(null),[G,Y]=k.useState(null),[W,_]=k.useState(1),[H,K]=k.useState(null),[pe,ke]=k.useState(0),[Ce,J]=k.useState(0),[Le,xe]=k.useState(!1),[$e,tt]=k.useState(0),[Ge,Bt]=k.useState({}),[wt,nt]=k.useState({}),[R,q]=k.useState(0),[X,de]=k.useState(!1),[he,b]=k.useState(0),[N,O]=k.useState([]),[U,ee]=k.useState([]),[te,ue]=k.useState({});if(k.useEffect(()=>{d?m(d):!u&&!l&&m("study")},[d,u,l]),k.useEffect(()=>{if(l){K(l);const P=parseInt(p.get("q")||"1");if(ke(P-1),l==="FINAL"&&U.length===0){let $=[];Object.values(w.quizzes).forEach(As=>{$=[...$,...As]});const Ye=$.sort(()=>.5-Math.random()).slice(0,10);ee(Ye)}}else K(null)},[l,p,w]),k.useEffect(()=>{if(w){const P=localStorage.getItem(w.progressKey);ue(P?JSON.parse(P):{}),w.flashcards&&O([...w.flashcards].sort(()=>.5-Math.random()))}},[w?.id]),k.useEffect(()=>{if(u&&w){let P=null;for(const $ of w.syllabus){const me=$.topics.find(Ye=>Ye.id===u||Ye.title.toLowerCase().replace(/\s+/g,"-")===u);if(me){P=me;break}}P&&j(P)}else j(null)},[u,w]),!w)return h.jsx("div",{className:"container",children:"Subject not found"});const Fe=(P,$,me)=>{const Ye={...te,[P]:{score:$,total:me}};ue(Ye),localStorage.setItem(w.progressKey,JSON.stringify(Ye))},Re=(P,$)=>{M(me=>({...me,[P]:me[P]===$?null:$}))},Bi=P=>{const $=P.id||P.title.toLowerCase().replace(/\s+/g,"-");f(`/subject/${r}/topic/${$}`)},Pi=()=>{f(`/subject/${r}`)},Fn=P=>{w.quizzes[P]?(f(`/subject/${r}/quiz/${P}?q=1`),J(0),xe(!1)):alert("Quiz coming soon for this unit!")},Ka=()=>{f(`/subject/${r}/quiz/FINAL?q=1`),J(0),xe(!1)},Gt=P=>{let $=!1;const me=H==="FINAL"?U:w.quizzes[H];P===me[pe].answer&&($=!0),$&&J(Ce+1);const Ye=pe+1;Ye<me.length?S({q:Ye+1}):(xe(!0),Fe(H,$?Ce+1:Ce,me.length))},nn=()=>{f(`/subject/${r}`),J(0),xe(!1),ee([])},an=P=>{Bt($=>({...$,[P]:!$[P]}))},Xa=(P,$)=>{nt(me=>({...me,[P]:$}))},Za=P=>{tt(P),Bt({}),nt({}),window.scrollTo(0,0)},Yn=()=>{de(!1),setTimeout(()=>b(P=>(P+1)%N.length),200)},Qn=()=>{de(!1),setTimeout(()=>b(P=>(P-1+N.length)%N.length),200)},Kn=()=>de(!X),Ts=()=>{de(!1),setTimeout(()=>{const P=[...w.flashcards].sort(()=>.5-Math.random());O(P),b(0)},200)},on=P=>{m(P),f(`/subject/${r}/${P}`)},Be=w.papers[$e];return h.jsxs("div",{className:"container",children:[h.jsxs("header",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[h.jsx("button",{className:"btn",onClick:()=>f("/"),children:"← Switch Subject"}),h.jsx("span",{className:"unit-badge",children:w.title})]}),h.jsxs("h1",{children:[w.title," Prep"]}),h.jsx("p",{className:"subtitle",children:"Comprehensive B.Tech Exam Preparation"}),h.jsxs("div",{className:"breadcrumbs",style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",color:"#64748b",margin:"1rem 0",justifyContent:"center"},children:[h.jsx("span",{style:{cursor:"pointer"},onClick:()=>f("/"),children:"Home"}),h.jsx("span",{children:">"}),h.jsx("span",{style:{fontWeight:"bold",color:"var(--primary-color)"},children:w.title}),y!=="study"&&h.jsxs(h.Fragment,{children:[h.jsx("span",{children:">"}),h.jsx("span",{children:y==="paper"?"Model Papers":y==="tips"?"Exam Tips":"Flashcards"})]}),u&&h.jsxs(h.Fragment,{children:[h.jsx("span",{children:">"}),h.jsx("span",{children:B?B.title:u})]})]}),h.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[h.jsx("button",{className:`btn ${y==="study"?"btn-primary":""}`,onClick:()=>on("study"),children:"Study Mode"}),h.jsx("button",{className:`btn ${y==="paper"?"btn-primary":""}`,onClick:()=>on("paper"),children:"Model Papers"}),h.jsx("button",{className:`btn ${y==="tips"?"btn-primary":""}`,onClick:()=>on("tips"),children:"Exam Tips"}),h.jsx("button",{className:`btn ${y==="flashcards"?"btn-primary":""}`,onClick:()=>on("flashcards"),children:"Flashcards"})]}),y==="study"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:Ka,children:"Start Final Exam (Mixed)"}),te.FINAL&&h.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",te.FINAL.score,"/",te.FINAL.total]})]})]}),y==="study"&&h.jsx("main",{className:"grid",children:w.syllabus.map(P=>h.jsxs("div",{className:"card",children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("span",{className:"unit-badge",children:["Unit ",P.unit]}),te[P.unit]&&h.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",te[P.unit].score,"/",te[P.unit].total]})]}),h.jsx("h2",{children:P.title}),D[P.unit]==="notes"&&P.notes?h.jsx("div",{className:"notes-content",children:h.jsx("div",{dangerouslySetInnerHTML:{__html:P.notes}})}):h.jsxs("div",{className:"topics-list-container",children:[h.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),h.jsx("div",{className:"topics-grid",children:P.topics.map(($,me)=>h.jsx("button",{className:"topic-btn",onClick:()=>Bi($),children:$.title},me))})]}),h.jsxs("div",{className:"actions",children:[h.jsx("button",{className:`btn ${D[P.unit]==="notes"?"btn-primary":""}`,onClick:()=>P.notes?Re(P.unit,"notes"):alert("Notes coming soon!"),children:D[P.unit]==="notes"?"Hide Overview":"Unit Overview"}),h.jsx("button",{className:"btn btn-primary",onClick:()=>{Y(P.unit),_(1)},children:"Mind Map"}),h.jsx("button",{className:"btn btn-primary",onClick:()=>Fn(P.unit),children:"Take Quiz"})]})]},P.unit))}),y==="paper"&&h.jsxs("main",{className:"paper-container",children:[h.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:w.papers.map((P,$)=>h.jsxs("button",{className:`btn ${$e===$?"btn-primary":""}`,onClick:()=>Za($),children:["Paper Set ",$+1]},$))}),h.jsxs("div",{className:"paper-header",children:[h.jsx("h2",{children:Be.title}),h.jsx("h3",{children:Be.subject}),h.jsxs("div",{className:"paper-meta",children:[h.jsxs("span",{children:["Time: ",Be.time]}),h.jsxs("span",{children:["Max Marks: ",Be.maxMarks]})]})]}),h.jsxs("div",{className:"paper-section",children:[h.jsx("h3",{children:"PART-A (Short Answer Questions)"}),h.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),h.jsx("div",{className:"questions-list",children:Be.partA.map(P=>h.jsxs("div",{className:"question-item",children:[h.jsxs("div",{className:"question-text",children:[h.jsxs("strong",{children:[P.id,"."]})," ",P.question," ",h.jsx("span",{className:"marks",children:"[1M]"})]}),h.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:wt[`A-${P.id}`]||"",onChange:$=>Xa(`A-${P.id}`,$.target.value)}),h.jsx("button",{className:"btn-text",onClick:()=>an(`A-${P.id}`),children:Ge[`A-${P.id}`]?"Hide Model Answer":"Show Model Answer"}),Ge[`A-${P.id}`]&&h.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:P.answer}})]},P.id))})]}),Be.partB&&h.jsxs("div",{className:"paper-section",children:[h.jsx("h3",{children:"PART-B (Long Answer Questions)"}),h.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),h.jsx("div",{className:"questions-list",children:Be.partB.map(P=>h.jsxs("div",{className:"question-group",children:[h.jsxs("h4",{children:["Unit ",P.unit]}),P.choices.map(($,me)=>h.jsxs("div",{children:[h.jsxs("div",{className:"question-item",children:[h.jsxs("div",{className:"question-text",children:[h.jsxs("strong",{children:[P.questionNumber," (",String.fromCharCode(97+me),")."]})," ",$.question," ",h.jsx("span",{className:"marks",children:"[10M]"})]}),h.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:wt[`B-${P.questionNumber}${me}`]||"",onChange:Ye=>Xa(`B-${P.questionNumber}${me}`,Ye.target.value)}),h.jsx("button",{className:"btn-text",onClick:()=>an(`B-${P.questionNumber}${me}`),children:Ge[`B-${P.questionNumber}${me}`]?"Hide Model Answer":"Show Model Answer"}),Ge[`B-${P.questionNumber}${me}`]&&h.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:$.answer}})]}),me===0&&h.jsx("div",{className:"or-divider",children:"OR"})]},me))]},P.questionNumber))})]})]}),y==="tips"&&h.jsxs("main",{className:"tips-container-pro",children:[h.jsxs("div",{className:"tips-sidebar",children:[h.jsx("h3",{children:"Exam Strategy"}),h.jsx("ul",{children:w.tips.map((P,$)=>h.jsxs("li",{className:R===$?"active":"",onClick:()=>q($),children:[P.category.split(" ")[0]," ",h.jsx("span",{className:"sidebar-subtitle",children:P.category})]},$))})]}),h.jsxs("div",{className:"tips-content-area",children:[h.jsxs("div",{className:"tips-header-pro",children:[h.jsx("h2",{children:w.tips[R].category}),h.jsx("div",{className:"progress-bar",children:h.jsx("div",{className:"progress-fill",style:{width:`${(R+1)/w.tips.length*100}%`}})})]}),h.jsx("div",{className:"tips-cards-pro",children:w.tips[R].tips.map((P,$)=>h.jsxs("div",{className:"tip-card-pro",children:[h.jsx("div",{className:"tip-icon-pro",children:$+1}),h.jsxs("div",{className:"tip-text-pro",children:[h.jsx("h4",{children:P.title}),h.jsx("div",{dangerouslySetInnerHTML:{__html:P.content}})]})]},$))}),h.jsxs("div",{className:"tips-navigation",children:[h.jsx("button",{className:"btn",disabled:R===0,onClick:()=>q(P=>P-1),children:"← Previous"}),h.jsxs("span",{className:"page-indicator",children:[R+1," of ",w.tips.length]}),h.jsx("button",{className:"btn btn-primary",disabled:R===w.tips.length-1,onClick:()=>q(P=>P+1),children:"Next →"})]})]})]}),y==="flashcards"&&N.length>0&&h.jsxs("main",{className:"flashcard-container",children:[h.jsxs("div",{className:"flashcard-header",children:[h.jsx("h2",{children:"Interactive Flashcards"}),h.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),h.jsx("div",{className:"flashcard-scene",children:h.jsxs("div",{className:`flashcard ${X?"flipped":""}`,onClick:Kn,children:[h.jsxs("div",{className:"flashcard-face flashcard-front",children:[h.jsxs("span",{className:"card-unit",children:["Unit ",N[he].unit]}),h.jsx("h3",{children:N[he].front}),h.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),h.jsx("div",{className:"flashcard-face flashcard-back",children:h.jsx("div",{dangerouslySetInnerHTML:{__html:N[he].back}})})]})}),h.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[h.jsx("button",{className:"btn btn-primary",onClick:Qn,children:"← Previous"}),h.jsxs("span",{className:"card-count",children:[he+1," / ",N.length]}),h.jsx("button",{className:"btn btn-primary",onClick:Yn,children:"Next →"})]}),h.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:h.jsx("button",{className:"btn btn-primary",onClick:Ts,children:"Shuffle Cards"})})]}),H&&h.jsx("div",{className:"quiz-overlay",children:h.jsxs("div",{className:"quiz-card",children:[h.jsx("button",{className:"close-btn",onClick:nn,style:{position:"absolute",right:"1.5rem",top:"1.5rem",zIndex:10},children:"×"}),Le?h.jsxs("div",{className:"score-container",children:[h.jsx("div",{className:"score-circle",style:{"--score-percent":`${Ce/(H==="FINAL"?U.length:w.quizzes[H].length)*100}%`},children:h.jsxs("div",{className:"score-text",children:[h.jsx("span",{className:"score-number",children:Ce}),h.jsxs("span",{className:"score-total",children:["of ",H==="FINAL"?U.length:w.quizzes[H].length]})]})}),h.jsx("h2",{className:"score-message",children:Ce/(H==="FINAL"?U.length:w.quizzes[H].length)>.7?"Excellent Work! 🎉":"Keep Practicing! 💪"}),h.jsxs("p",{className:"score-submessage",children:["You've completed the ",H==="FINAL"?"Final Exam":`Unit ${H}`," quiz."]}),h.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[h.jsx("button",{className:"btn btn-outline",onClick:nn,children:"Close"}),h.jsx("button",{className:"btn btn-primary",onClick:()=>{xe(!1),ke(0),J(0)},children:"Try Again"})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"quiz-header",children:[h.jsxs("div",{className:"quiz-meta",children:[h.jsx("span",{children:H==="FINAL"?"Final Exam":`Unit ${H} Quiz`}),h.jsxs("span",{children:["Question ",pe+1," / ",H==="FINAL"?U.length:w.quizzes[H].length]})]}),h.jsx("div",{className:"quiz-progress-track",children:h.jsx("div",{className:"quiz-progress-fill",style:{width:`${(pe+1)/(H==="FINAL"?U.length:w.quizzes[H].length)*100}%`}})})]}),h.jsx("div",{className:"quiz-content",children:(()=>{const P=H==="FINAL"?U:w.quizzes[H];return h.jsxs(h.Fragment,{children:[h.jsx("p",{className:"quiz-question",children:P[pe].question}),h.jsx("div",{className:"quiz-options",children:P[pe].options.map(($,me)=>h.jsx("button",{className:"quiz-option-btn",onClick:()=>Gt(me),children:$},me))})]})})()})]})]})}),B&&h.jsx("div",{className:"modal-overlay",children:h.jsxs("div",{className:"modal-content topic-modal",children:[h.jsx("button",{className:"close-btn",onClick:Pi,children:"×"}),h.jsxs("div",{className:"topic-content",children:[h.jsx("h2",{children:B.title}),h.jsx("div",{dangerouslySetInnerHTML:{__html:B.content}})]}),h.jsx("button",{className:"btn btn-primary",onClick:Pi,style:{marginTop:"2rem"},children:"Close"})]})}),G&&w.mindmaps&&w.mindmaps[G]&&h.jsx("div",{className:"modal-overlay",children:h.jsxs("div",{className:"modal-content",style:{width:"95%",height:"95%",maxWidth:"100%",display:"flex",flexDirection:"column",padding:"1rem"},children:[h.jsx("button",{className:"close-btn",onClick:()=>Y(null),style:{top:"10px",right:"10px"},children:"×"}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[h.jsxs("h2",{style:{color:"var(--primary-color)",fontSize:"1.5rem",margin:0},children:["🧠 Concept Map: Unit ",G]}),h.jsxs("div",{className:"zoom-controls",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[h.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>_(P=>Math.max(.5,P-.1)),children:"-"}),h.jsxs("span",{style:{minWidth:"3rem",textAlign:"center",fontWeight:"bold"},children:[Math.round(W*100),"%"]}),h.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>_(P=>Math.min(2,P+.1)),children:"+"}),h.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>_(1),children:"Reset"})]})]}),h.jsx("div",{className:"mindmap-container",style:{flex:1,overflow:"auto",marginTop:0,borderRadius:"12px",border:"1px solid #e2e8f0",position:"relative",display:"flex",alignItems:"flex-start",justifyContent:"flex-start"},children:h.jsx("div",{className:"mm-tree mm-root",style:{zoom:W,margin:"auto",transformOrigin:"top left"},children:h.jsx(zf,{node:w.mindmaps[G]})})}),h.jsx("button",{className:"btn btn-primary",onClick:()=>Y(null),style:{alignSelf:"center",marginTop:"1rem",padding:"0.8rem 2rem",width:"auto",height:"auto",flexShrink:0,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:"Close Map"})]})}),h.jsxs("footer",{style:{textAlign:"center",padding:"2rem",color:"#64748b",fontSize:"0.9rem",marginTop:"auto"},children:[h.jsxs("p",{children:["Designed & Developed by ",h.jsx("strong",{children:"BTK Creations"})," 🚀"]}),h.jsxs("p",{style:{fontSize:"0.8rem",opacity:.7},children:["© ",new Date().getFullYear()," Mobile Computing Prep"]})]}),h.jsx(Nf,{})]})}function uy(){return h.jsxs($m,{children:[h.jsx(_n,{path:"/",element:h.jsx(j0,{})}),h.jsx(_n,{path:"/subject/:subjectId",element:h.jsx(ms,{})}),h.jsx(_n,{path:"/subject/:subjectId/:viewMode",element:h.jsx(ms,{})}),h.jsx(_n,{path:"/subject/:subjectId/topic/:topicId",element:h.jsx(ms,{})}),h.jsx(_n,{path:"/subject/:subjectId/quiz/:unitId",element:h.jsx(ms,{})})]})}rm.createRoot(document.getElementById("root")).render(h.jsx(k.StrictMode,{children:h.jsx(T0,{children:h.jsx(uy,{})})}));
