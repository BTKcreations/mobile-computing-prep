(function(){const K=document.createElement("link").relList;if(K&&K.supports&&K.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))h(O);new MutationObserver(O=>{for(const G of O)if(G.type==="childList")for(const P of G.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&h(P)}).observe(document,{childList:!0,subtree:!0});function V(O){const G={};return O.integrity&&(G.integrity=O.integrity),O.referrerPolicy&&(G.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?G.credentials="include":O.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function h(O){if(O.ep)return;O.ep=!0;const G=V(O);fetch(O.href,G)}})();var pr={exports:{}},Ha={};var vh;function Kf(){if(vh)return Ha;vh=1;var k=Symbol.for("react.transitional.element"),K=Symbol.for("react.fragment");function V(h,O,G){var P=null;if(G!==void 0&&(P=""+G),O.key!==void 0&&(P=""+O.key),"key"in O){G={};for(var Q in O)Q!=="key"&&(G[Q]=O[Q])}else G=O;return O=G.ref,{$$typeof:k,type:h,key:P,ref:O!==void 0?O:null,props:G}}return Ha.Fragment=K,Ha.jsx=V,Ha.jsxs=V,Ha}var bh;function Zf(){return bh||(bh=1,pr.exports=Kf()),pr.exports}var c=Zf(),mr={exports:{}},j={};var Sh;function Jf(){if(Sh)return j;Sh=1;var k=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),P=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),H=Symbol.iterator;function le(d){return d===null||typeof d!="object"?null:(d=H&&d[H]||d["@@iterator"],typeof d=="function"?d:null)}var ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xe=Object.assign,Le={};function Qe(d,S,D){this.props=d,this.context=S,this.refs=Le,this.updater=D||ye}Qe.prototype.isReactComponent={},Qe.prototype.setState=function(d,S){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,S,"setState")},Qe.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Pe(){}Pe.prototype=Qe.prototype;function Me(d,S,D){this.props=d,this.context=S,this.refs=Le,this.updater=D||ye}var Ke=Me.prototype=new Pe;Ke.constructor=Me,xe(Ke,Qe.prototype),Ke.isPureReactComponent=!0;var ot=Array.isArray;function ze(){}var X={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function st(d,S,D){var E=D.ref;return{$$typeof:k,type:d,key:S,ref:E!==void 0?E:null,props:D}}function It(d,S){return st(d.type,S,d.props)}function lt(d){return typeof d=="object"&&d!==null&&d.$$typeof===k}function Ie(d){var S={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(D){return S[D]})}var Et=/\/+/g;function yt(d,S){return typeof d=="object"&&d!==null&&d.key!=null?Ie(""+d.key):S.toString(36)}function Fe(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(ze,ze):(d.status="pending",d.then(function(S){d.status==="pending"&&(d.status="fulfilled",d.value=S)},function(S){d.status==="pending"&&(d.status="rejected",d.reason=S)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function v(d,S,D,E,U){var F=typeof d;(F==="undefined"||F==="boolean")&&(d=null);var ae=!1;if(d===null)ae=!0;else switch(F){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(d.$$typeof){case k:case K:ae=!0;break;case B:return ae=d._init,v(ae(d._payload),S,D,E,U)}}if(ae)return U=U(d),ae=E===""?"."+yt(d,0):E,ot(U)?(D="",ae!=null&&(D=ae.replace(Et,"$&/")+"/"),v(U,S,D,"",function(Ei){return Ei})):U!=null&&(lt(U)&&(U=It(U,D+(U.key==null||d&&d.key===U.key?"":(""+U.key).replace(Et,"$&/")+"/")+ae)),S.push(U)),1;ae=0;var Ue=E===""?".":E+":";if(ot(d))for(var Se=0;Se<d.length;Se++)E=d[Se],F=Ue+yt(E,Se),ae+=v(E,S,D,F,U);else if(Se=le(d),typeof Se=="function")for(d=Se.call(d),Se=0;!(E=d.next()).done;)E=E.value,F=Ue+yt(E,Se++),ae+=v(E,S,D,F,U);else if(F==="object"){if(typeof d.then=="function")return v(Fe(d),S,D,E,U);throw S=String(d),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return ae}function M(d,S,D){if(d==null)return d;var E=[],U=0;return v(d,E,"","",function(F){return S.call(D,F,U++)}),E}function q(d){if(d._status===-1){var S=d._result;S=S(),S.then(function(D){(d._status===0||d._status===-1)&&(d._status=1,d._result=D)},function(D){(d._status===0||d._status===-1)&&(d._status=2,d._result=D)}),d._status===-1&&(d._status=0,d._result=S)}if(d._status===1)return d._result.default;throw d._result}var ie=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},ce={map:M,forEach:function(d,S,D){M(d,function(){S.apply(this,arguments)},D)},count:function(d){var S=0;return M(d,function(){S++}),S},toArray:function(d){return M(d,function(S){return S})||[]},only:function(d){if(!lt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return j.Activity=R,j.Children=ce,j.Component=Qe,j.Fragment=V,j.Profiler=O,j.PureComponent=Me,j.StrictMode=h,j.Suspense=C,j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,j.__COMPILER_RUNTIME={__proto__:null,c:function(d){return X.H.useMemoCache(d)}},j.cache=function(d){return function(){return d.apply(null,arguments)}},j.cacheSignal=function(){return null},j.cloneElement=function(d,S,D){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var E=xe({},d.props),U=d.key;if(S!=null)for(F in S.key!==void 0&&(U=""+S.key),S)!Oe.call(S,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&S.ref===void 0||(E[F]=S[F]);var F=arguments.length-2;if(F===1)E.children=D;else if(1<F){for(var ae=Array(F),Ue=0;Ue<F;Ue++)ae[Ue]=arguments[Ue+2];E.children=ae}return st(d.type,U,E)},j.createContext=function(d){return d={$$typeof:P,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:G,_context:d},d},j.createElement=function(d,S,D){var E,U={},F=null;if(S!=null)for(E in S.key!==void 0&&(F=""+S.key),S)Oe.call(S,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(U[E]=S[E]);var ae=arguments.length-2;if(ae===1)U.children=D;else if(1<ae){for(var Ue=Array(ae),Se=0;Se<ae;Se++)Ue[Se]=arguments[Se+2];U.children=Ue}if(d&&d.defaultProps)for(E in ae=d.defaultProps,ae)U[E]===void 0&&(U[E]=ae[E]);return st(d,F,U)},j.createRef=function(){return{current:null}},j.forwardRef=function(d){return{$$typeof:Q,render:d}},j.isValidElement=lt,j.lazy=function(d){return{$$typeof:B,_payload:{_status:-1,_result:d},_init:q}},j.memo=function(d,S){return{$$typeof:T,type:d,compare:S===void 0?null:S}},j.startTransition=function(d){var S=X.T,D={};X.T=D;try{var E=d(),U=X.S;U!==null&&U(D,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(ze,ie)}catch(F){ie(F)}finally{S!==null&&D.types!==null&&(S.types=D.types),X.T=S}},j.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},j.use=function(d){return X.H.use(d)},j.useActionState=function(d,S,D){return X.H.useActionState(d,S,D)},j.useCallback=function(d,S){return X.H.useCallback(d,S)},j.useContext=function(d){return X.H.useContext(d)},j.useDebugValue=function(){},j.useDeferredValue=function(d,S){return X.H.useDeferredValue(d,S)},j.useEffect=function(d,S){return X.H.useEffect(d,S)},j.useEffectEvent=function(d){return X.H.useEffectEvent(d)},j.useId=function(){return X.H.useId()},j.useImperativeHandle=function(d,S,D){return X.H.useImperativeHandle(d,S,D)},j.useInsertionEffect=function(d,S){return X.H.useInsertionEffect(d,S)},j.useLayoutEffect=function(d,S){return X.H.useLayoutEffect(d,S)},j.useMemo=function(d,S){return X.H.useMemo(d,S)},j.useOptimistic=function(d,S){return X.H.useOptimistic(d,S)},j.useReducer=function(d,S,D){return X.H.useReducer(d,S,D)},j.useRef=function(d){return X.H.useRef(d)},j.useState=function(d){return X.H.useState(d)},j.useSyncExternalStore=function(d,S,D){return X.H.useSyncExternalStore(d,S,D)},j.useTransition=function(){return X.H.useTransition()},j.version="19.2.0",j}var wh;function wr(){return wh||(wh=1,mr.exports=Jf()),mr.exports}var he=wr(),yr={exports:{}},qa={},vr={exports:{}},br={};var xh;function $f(){return xh||(xh=1,(function(k){function K(v,M){var q=v.length;v.push(M);e:for(;0<q;){var ie=q-1>>>1,ce=v[ie];if(0<O(ce,M))v[ie]=M,v[q]=ce,q=ie;else break e}}function V(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var M=v[0],q=v.pop();if(q!==M){v[0]=q;e:for(var ie=0,ce=v.length,d=ce>>>1;ie<d;){var S=2*(ie+1)-1,D=v[S],E=S+1,U=v[E];if(0>O(D,q))E<ce&&0>O(U,D)?(v[ie]=U,v[E]=q,ie=E):(v[ie]=D,v[S]=q,ie=S);else if(E<ce&&0>O(U,q))v[ie]=U,v[E]=q,ie=E;else break e}}return M}function O(v,M){var q=v.sortIndex-M.sortIndex;return q!==0?q:v.id-M.id}if(k.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;k.unstable_now=function(){return G.now()}}else{var P=Date,Q=P.now();k.unstable_now=function(){return P.now()-Q}}var C=[],T=[],B=1,R=null,H=3,le=!1,ye=!1,xe=!1,Le=!1,Qe=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,Me=typeof setImmediate<"u"?setImmediate:null;function Ke(v){for(var M=V(T);M!==null;){if(M.callback===null)h(T);else if(M.startTime<=v)h(T),M.sortIndex=M.expirationTime,K(C,M);else break;M=V(T)}}function ot(v){if(xe=!1,Ke(v),!ye)if(V(C)!==null)ye=!0,ze||(ze=!0,Ie());else{var M=V(T);M!==null&&Fe(ot,M.startTime-v)}}var ze=!1,X=-1,Oe=5,st=-1;function It(){return Le?!0:!(k.unstable_now()-st<Oe)}function lt(){if(Le=!1,ze){var v=k.unstable_now();st=v;var M=!0;try{e:{ye=!1,xe&&(xe=!1,Pe(X),X=-1),le=!0;var q=H;try{t:{for(Ke(v),R=V(C);R!==null&&!(R.expirationTime>v&&It());){var ie=R.callback;if(typeof ie=="function"){R.callback=null,H=R.priorityLevel;var ce=ie(R.expirationTime<=v);if(v=k.unstable_now(),typeof ce=="function"){R.callback=ce,Ke(v),M=!0;break t}R===V(C)&&h(C),Ke(v)}else h(C);R=V(C)}if(R!==null)M=!0;else{var d=V(T);d!==null&&Fe(ot,d.startTime-v),M=!1}}break e}finally{R=null,H=q,le=!1}M=void 0}}finally{M?Ie():ze=!1}}}var Ie;if(typeof Me=="function")Ie=function(){Me(lt)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,yt=Et.port2;Et.port1.onmessage=lt,Ie=function(){yt.postMessage(null)}}else Ie=function(){Qe(lt,0)};function Fe(v,M){X=Qe(function(){v(k.unstable_now())},M)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(v){v.callback=null},k.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<v?Math.floor(1e3/v):5},k.unstable_getCurrentPriorityLevel=function(){return H},k.unstable_next=function(v){switch(H){case 1:case 2:case 3:var M=3;break;default:M=H}var q=H;H=M;try{return v()}finally{H=q}},k.unstable_requestPaint=function(){Le=!0},k.unstable_runWithPriority=function(v,M){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=H;H=v;try{return M()}finally{H=q}},k.unstable_scheduleCallback=function(v,M,q){var ie=k.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,v){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=q+ce,v={id:B++,callback:M,priorityLevel:v,startTime:q,expirationTime:ce,sortIndex:-1},q>ie?(v.sortIndex=q,K(T,v),V(C)===null&&v===V(T)&&(xe?(Pe(X),X=-1):xe=!0,Fe(ot,q-ie))):(v.sortIndex=ce,K(C,v),ye||le||(ye=!0,ze||(ze=!0,Ie()))),v},k.unstable_shouldYield=It,k.unstable_wrapCallback=function(v){var M=H;return function(){var q=H;H=M;try{return v.apply(this,arguments)}finally{H=q}}}})(br)),br}var Th;function ep(){return Th||(Th=1,vr.exports=$f()),vr.exports}var Sr={exports:{}},Xe={};var Ah;function tp(){if(Ah)return Xe;Ah=1;var k=wr();function K(C){var T="https://react.dev/errors/"+C;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)T+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+C+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V(){}var h={d:{f:V,r:function(){throw Error(K(522))},D:V,C:V,L:V,m:V,X:V,S:V,M:V},p:0,findDOMNode:null},O=Symbol.for("react.portal");function G(C,T,B){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:R==null?null:""+R,children:C,containerInfo:T,implementation:B}}var P=k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Q(C,T){if(C==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Xe.createPortal=function(C,T){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(K(299));return G(C,T,null,B)},Xe.flushSync=function(C){var T=P.T,B=h.p;try{if(P.T=null,h.p=2,C)return C()}finally{P.T=T,h.p=B,h.d.f()}},Xe.preconnect=function(C,T){typeof C=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(C,T))},Xe.prefetchDNS=function(C){typeof C=="string"&&h.d.D(C)},Xe.preinit=function(C,T){if(typeof C=="string"&&T&&typeof T.as=="string"){var B=T.as,R=Q(B,T.crossOrigin),H=typeof T.integrity=="string"?T.integrity:void 0,le=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;B==="style"?h.d.S(C,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:R,integrity:H,fetchPriority:le}):B==="script"&&h.d.X(C,{crossOrigin:R,integrity:H,fetchPriority:le,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Xe.preinitModule=function(C,T){if(typeof C=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var B=Q(T.as,T.crossOrigin);h.d.M(C,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(C)},Xe.preload=function(C,T){if(typeof C=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var B=T.as,R=Q(B,T.crossOrigin);h.d.L(C,B,{crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Xe.preloadModule=function(C,T){if(typeof C=="string")if(T){var B=Q(T.as,T.crossOrigin);h.d.m(C,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(C)},Xe.requestFormReset=function(C){h.d.r(C)},Xe.unstable_batchedUpdates=function(C,T){return C(T)},Xe.useFormState=function(C,T,B){return P.H.useFormState(C,T,B)},Xe.useFormStatus=function(){return P.H.useHostTransitionStatus()},Xe.version="19.2.0",Xe}var Ch;function ip(){if(Ch)return Sr.exports;Ch=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(K){console.error(K)}}return k(),Sr.exports=tp(),Sr.exports}var kh;function np(){if(kh)return qa;kh=1;var k=ep(),K=wr(),V=ip();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function G(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function P(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(G(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=G(e),t===null)throw Error(h(188));return t!==e?null:e}for(var i=e,n=t;;){var a=i.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){i=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===i)return C(a),e;if(o===n)return C(a),t;o=o.sibling}throw Error(h(188))}if(i.return!==n.return)i=a,n=o;else{for(var s=!1,l=a.child;l;){if(l===i){s=!0,i=a,n=o;break}if(l===n){s=!0,n=a,i=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===i){s=!0,i=o,n=a;break}if(l===n){s=!0,n=o,i=a;break}l=l.sibling}if(!s)throw Error(h(189))}}if(i.alternate!==n)throw Error(h(190))}if(i.tag!==3)throw Error(h(188));return i.stateNode.current===i?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,H=Symbol.for("react.element"),le=Symbol.for("react.transitional.element"),ye=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),Me=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),st=Symbol.for("react.activity"),It=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Et=Symbol.for("react.client.reference");function yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case Qe:return"Profiler";case Le:return"StrictMode";case ot:return"Suspense";case ze:return"SuspenseList";case st:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ye:return"Portal";case Me:return e.displayName||"Context";case Pe:return(e._context.displayName||"Context")+".Consumer";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:yt(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return yt(e(t))}catch{}}return null}var Fe=Array.isArray,v=K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ie=[],ce=-1;function d(e){return{current:e}}function S(e){0>ce||(e.current=ie[ce],ie[ce]=null,ce--)}function D(e,t){ce++,ie[ce]=e.current,e.current=t}var E=d(null),U=d(null),F=d(null),ae=d(null);function Ue(e,t){switch(D(F,t),D(U,e),D(E,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jd(t),e=Gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(E),D(E,e)}function Se(){S(E),S(U),S(F)}function Ei(e){e.memoizedState!==null&&D(ae,e);var t=E.current,i=Gd(t,e.type);t!==i&&(D(U,e),D(E,i))}function Fi(e){U.current===e&&(S(E),S(U)),ae.current===e&&(S(ae),Na._currentValue=q)}var Hn,qn;function Bt(e){if(Hn===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Hn=t&&t[1]||"",qn=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hn+e+qn}var Xi=!1;function Ln(e,t){if(!e||Xi)return"";Xi=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(y){var m=y}Reflect.construct(e,[],x)}else{try{x.call()}catch(y){m=y}e.call(x.prototype)}}else{try{throw Error()}catch(y){m=y}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(y){if(y&&m&&typeof y.stack=="string")return[y.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],l=o[1];if(s&&l){var r=s.split(`
`),p=l.split(`
`);for(a=n=0;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;for(;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;if(n===r.length||a===p.length)for(n=r.length-1,a=p.length-1;1<=n&&0<=a&&r[n]!==p[a];)a--;for(;1<=n&&0<=a;n--,a--)if(r[n]!==p[a]){if(n!==1||a!==1)do if(n--,a--,0>a||r[n]!==p[a]){var b=`
`+r[n].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=n&&0<=a);break}}}finally{Xi=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Bt(i):""}function ts(e,t){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==t&&t!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Ln(e.type,!1);case 11:return Ln(e.type.render,!1);case 1:return Ln(e.type,!0);case 31:return Bt("Activity");default:return""}}function La(e){try{var t="",i=null;do t+=ts(e,i),i=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Pn=Object.prototype.hasOwnProperty,On=k.unstable_scheduleCallback,Un=k.unstable_cancelCallback,jn=k.unstable_shouldYield,is=k.unstable_requestPaint,je=k.unstable_now,Ot=k.unstable_getCurrentPriorityLevel,A=k.unstable_ImmediatePriority,_=k.unstable_UserBlockingPriority,ne=k.unstable_NormalPriority,vt=k.unstable_LowPriority,Gn=k.unstable_IdlePriority,Nh=k.log,zh=k.unstable_setDisableYieldValue,Vn=null,rt=null;function ai(e){if(typeof Nh=="function"&&zh(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Vn,e)}catch{}}var ct=Math.clz32?Math.clz32:Hh,Ih=Math.log,Bh=Math.LN2;function Hh(e){return e>>>=0,e===0?32:31-(Ih(e)/Bh|0)|0}var Pa=256,Oa=262144,Ua=4194304;function Ri(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ja(e,t,i){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var l=n&134217727;return l!==0?(n=l&~o,n!==0?a=Ri(n):(s&=l,s!==0?a=Ri(s):i||(i=l&~e,i!==0&&(a=Ri(i))))):(l=n&~o,l!==0?a=Ri(l):s!==0?a=Ri(s):i||(i=n&~e,i!==0&&(a=Ri(i)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,i=t&-t,o>=i||o===32&&(i&4194048)!==0)?t:a}function _n(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(){var e=Ua;return Ua<<=1,(Ua&62914560)===0&&(Ua=4194304),e}function ns(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Wn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lh(e,t,i,n,a,o){var s=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var l=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(i=s&~i;0<i;){var b=31-ct(i),x=1<<b;l[b]=0,r[b]=-1;var m=p[b];if(m!==null)for(p[b]=null,b=0;b<m.length;b++){var y=m[b];y!==null&&(y.lane&=-536870913)}i&=~x}n!==0&&Tr(e,n,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function Tr(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|i&261930}function Ar(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-ct(i),a=1<<n;a&t|e[n]&t&&(e[n]|=t),i&=~a}}function Cr(e,t){var i=t&-t;return i=(i&42)!==0?1:as(i),(i&(e.suspendedLanes|t))!==0?0:i}function as(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kr(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:dh(e.type))}function Mr(e,t){var i=M.p;try{return M.p=e,t()}finally{M.p=i}}var oi=Math.random().toString(36).slice(2),Ge="__reactFiber$"+oi,Je="__reactProps$"+oi,Ki="__reactContainer$"+oi,ss="__reactEvents$"+oi,Ph="__reactListeners$"+oi,Oh="__reactHandles$"+oi,Dr="__reactResources$"+oi,Yn="__reactMarker$"+oi;function ls(e){delete e[Ge],delete e[Je],delete e[ss],delete e[Ph],delete e[Oh]}function Zi(e){var t=e[Ge];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ki]||i[Ge]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Xd(e);e!==null;){if(i=e[Ge])return i;e=Xd(e)}return t}e=i,i=e.parentNode}return null}function Ji(e){if(e=e[Ge]||e[Ki]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function $i(e){var t=e[Dr];return t||(t=e[Dr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Yn]=!0}var Er=new Set,Rr={};function Ni(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Er.add(t[e])}var Uh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nr={},zr={};function jh(e){return Pn.call(zr,e)?!0:Pn.call(Nr,e)?!1:Uh.test(e)?zr[e]=!0:(Nr[e]=!0,!1)}function Ga(e,t,i){if(jh(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function Va(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Ut(e,t,i,n){if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+n)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ir(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e,t,i){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){if(!e._valueTracker){var t=Ir(e)?"checked":"value";e._valueTracker=Gh(e,t,""+e[t])}}function Br(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=Ir(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function _a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vh=/[\n"\\]/g;function St(e){return e.replace(Vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cs(e,t,i,n,a,o,s,l){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?us(e,s,bt(t)):i!=null?us(e,s,bt(i)):n!=null&&e.removeAttribute("value"),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+bt(l):e.removeAttribute("name")}function Hr(e,t,i,n,a,o,s,l){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||i!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){rs(e);return}i=i!=null?""+bt(i):"",t=t!=null?""+bt(t):i,l||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),rs(e)}function us(e,t,i){t==="number"&&_a(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function tn(e,t,i,n){if(e=e.options,t){t={};for(var a=0;a<i.length;a++)t["$"+i[a]]=!0;for(i=0;i<e.length;i++)a=t.hasOwnProperty("$"+e[i].value),e[i].selected!==a&&(e[i].selected=a),a&&n&&(e[i].defaultSelected=!0)}else{for(i=""+bt(i),t=null,a=0;a<e.length;a++){if(e[a].value===i){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function qr(e,t,i){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+bt(i):""}function Lr(e,t,i,n){if(t==null){if(n!=null){if(i!=null)throw Error(h(92));if(Fe(n)){if(1<n.length)throw Error(h(93));n=n[0]}i=n}i==null&&(i=""),t=i}i=bt(t),e.defaultValue=i,n=e.textContent,n===i&&n!==""&&n!==null&&(e.value=n),rs(e)}function nn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var _h=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pr(e,t,i){var n=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,i):typeof i!="number"||i===0||_h.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Or(e,t,i){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&i[a]!==n&&Pr(e,a,n)}else for(var o in t)t.hasOwnProperty(o)&&Pr(e,o,t[o])}function ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wa(e){return Yh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var hs=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function Ur(e){var t=Ji(e);if(t&&(e=t.stateNode)){var i=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(cs(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var a=n[Je]||null;if(!a)throw Error(h(90));cs(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<i.length;t++)n=i[t],n.form===e.form&&Br(n)}break e;case"textarea":qr(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&tn(e,!!i.multiple,t,!1)}}}var fs=!1;function jr(e,t,i){if(fs)return e(t,i);fs=!0;try{var n=e(t);return n}finally{if(fs=!1,(an!==null||on!==null)&&(Io(),an&&(t=an,e=on,on=an=null,Ur(t),e)))for(t=0;t<e.length;t++)Ur(e[t])}}function Fn(e,t){var i=e.stateNode;if(i===null)return null;var n=i[Je]||null;if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(h(231,t,typeof i));return i}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=!1;if(Gt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{ps=!1}var si=null,ms=null,Ya=null;function Gr(){if(Ya)return Ya;var e,t=ms,i=t.length,n,a="value"in si?si.value:si.textContent,o=a.length;for(e=0;e<i&&t[e]===a[e];e++);var s=i-e;for(n=1;n<=s&&t[i-n]===a[o-n];n++);return Ya=a.slice(e,1<n?1-n:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function Vr(){return!1}function $e(e){function t(i,n,a,o,s){this._reactName=i,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(i=e[l],this[l]=i?i(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fa:Vr,this.isPropagationStopped=Vr,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),t}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=$e(zi),Kn=R({},zi,{view:0,detail:0}),Qh=$e(Kn),ys,vs,Zn,Ka=R({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(ys=e.screenX-Zn.screenX,vs=e.screenY-Zn.screenY):vs=ys=0,Zn=e),ys)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),_r=$e(Ka),Fh=R({},Ka,{dataTransfer:0}),Xh=$e(Fh),Kh=R({},Kn,{relatedTarget:0}),bs=$e(Kh),Zh=R({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=$e(Zh),$h=R({},zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=$e($h),tg=R({},zi,{data:0}),Wr=$e(tg),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ag[e])?!!t[e]:!1}function Ss(){return og}var sg=R({},Kn,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=$e(sg),rg=R({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yr=$e(rg),cg=R({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),ug=$e(cg),dg=R({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=$e(dg),gg=R({},Ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=$e(gg),pg=R({},zi,{newState:0,oldState:0}),mg=$e(pg),yg=[9,13,27,32],ws=Gt&&"CompositionEvent"in window,Jn=null;Gt&&"documentMode"in document&&(Jn=document.documentMode);var vg=Gt&&"TextEvent"in window&&!Jn,Qr=Gt&&(!ws||Jn&&8<Jn&&11>=Jn),Fr=" ",Xr=!1;function Kr(e,t){switch(e){case"keyup":return yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function bg(e,t){switch(e){case"compositionend":return Zr(t);case"keypress":return t.which!==32?null:(Xr=!0,Fr);case"textInput":return e=t.data,e===Fr&&Xr?null:e;default:return null}}function Sg(e,t){if(sn)return e==="compositionend"||!ws&&Kr(e,t)?(e=Gr(),Ya=ms=si=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qr&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function $r(e,t,i,n){an?on?on.push(n):on=[n]:an=n,t=Uo(t,"onChange"),0<t.length&&(i=new Xa("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var $n=null,ea=null;function xg(e){Hd(e,0)}function Za(e){var t=Qn(e);if(Br(t))return e}function ec(e,t){if(e==="change")return t}var tc=!1;if(Gt){var xs;if(Gt){var Ts="oninput"in document;if(!Ts){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),Ts=typeof ic.oninput=="function"}xs=Ts}else xs=!1;tc=xs&&(!document.documentMode||9<document.documentMode)}function nc(){$n&&($n.detachEvent("onpropertychange",ac),ea=$n=null)}function ac(e){if(e.propertyName==="value"&&Za(ea)){var t=[];$r(t,ea,e,gs(e)),jr(xg,t)}}function Tg(e,t,i){e==="focusin"?(nc(),$n=t,ea=i,$n.attachEvent("onpropertychange",ac)):e==="focusout"&&nc()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(ea)}function Cg(e,t){if(e==="click")return Za(t)}function kg(e,t){if(e==="input"||e==="change")return Za(t)}function Mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Mg;function ta(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var a=i[n];if(!Pn.call(t,a)||!ut(e[a],t[a]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,t){var i=oc(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=oc(i)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_a(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=_a(e.document)}return t}function As(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dg=Gt&&"documentMode"in document&&11>=document.documentMode,ln=null,Cs=null,ia=null,ks=!1;function cc(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ks||ln==null||ln!==_a(n)||(n=ln,"selectionStart"in n&&As(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ia&&ta(ia,n)||(ia=n,n=Uo(Cs,"onSelect"),0<n.length&&(t=new Xa("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=ln)))}function Ii(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var rn={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionrun:Ii("Transition","TransitionRun"),transitionstart:Ii("Transition","TransitionStart"),transitioncancel:Ii("Transition","TransitionCancel"),transitionend:Ii("Transition","TransitionEnd")},Ms={},uc={};Gt&&(uc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Bi(e){if(Ms[e])return Ms[e];if(!rn[e])return e;var t=rn[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in uc)return Ms[e]=t[i];return e}var dc=Bi("animationend"),hc=Bi("animationiteration"),gc=Bi("animationstart"),Eg=Bi("transitionrun"),Rg=Bi("transitionstart"),Ng=Bi("transitioncancel"),fc=Bi("transitionend"),pc=new Map,Ds="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ds.push("scrollEnd");function Rt(e,t){pc.set(e,t),Ni(t,[e])}var Ja=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],cn=0,Es=0;function $a(){for(var e=cn,t=Es=cn=0;t<e;){var i=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var o=wt[t];if(wt[t++]=null,n!==null&&a!==null){var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}o!==0&&mc(i,a,o)}}function eo(e,t,i,n){wt[cn++]=e,wt[cn++]=t,wt[cn++]=i,wt[cn++]=n,Es|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Rs(e,t,i,n){return eo(e,t,i,n),to(e)}function Hi(e,t){return eo(e,null,null,t),to(e)}function mc(e,t,i){e.lanes|=i;var n=e.alternate;n!==null&&(n.lanes|=i);for(var a=!1,o=e.return;o!==null;)o.childLanes|=i,n=o.alternate,n!==null&&(n.childLanes|=i),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&t!==null&&(a=31-ct(i),e=o.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=i|536870912),o):null}function to(e){if(50<Aa)throw Aa=0,Ol=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var un={};function zg(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,i,n){return new zg(e,t,i,n)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vt(e,t){var i=e.alternate;return i===null?(i=dt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function yc(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function io(e,t,i,n,a,o){var s=0;if(n=e,typeof e=="function")Ns(e)&&(s=1);else if(typeof e=="string")s=Pf(e,i,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case st:return e=dt(31,i,t,a),e.elementType=st,e.lanes=o,e;case xe:return qi(i.children,a,o,t);case Le:s=8,a|=24;break;case Qe:return e=dt(12,i,t,a|2),e.elementType=Qe,e.lanes=o,e;case ot:return e=dt(13,i,t,a),e.elementType=ot,e.lanes=o,e;case ze:return e=dt(19,i,t,a),e.elementType=ze,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:s=10;break e;case Pe:s=9;break e;case Ke:s=11;break e;case X:s=14;break e;case Oe:s=16,n=null;break e}s=29,i=Error(h(130,e===null?"null":typeof e,"")),n=null}return t=dt(s,i,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function qi(e,t,i,n){return e=dt(7,e,n,t),e.lanes=i,e}function zs(e,t,i){return e=dt(6,e,null,t),e.lanes=i,e}function vc(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Is(e,t,i){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bc=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var i=bc.get(e);return i!==void 0?i:(t={value:e,source:t,stack:La(t)},bc.set(e,t),t)}return{value:e,source:t,stack:La(t)}}var dn=[],hn=0,no=null,na=0,Tt=[],At=0,li=null,Ht=1,qt="";function _t(e,t){dn[hn++]=na,dn[hn++]=no,no=e,na=t}function Sc(e,t,i){Tt[At++]=Ht,Tt[At++]=qt,Tt[At++]=li,li=e;var n=Ht;e=qt;var a=32-ct(n)-1;n&=~(1<<a),i+=1;var o=32-ct(t)+a;if(30<o){var s=a-a%5;o=(n&(1<<s)-1).toString(32),n>>=s,a-=s,Ht=1<<32-ct(t)+a|i<<a|n,qt=o+e}else Ht=1<<o|i<<a|n,qt=e}function Bs(e){e.return!==null&&(_t(e,1),Sc(e,1,0))}function Hs(e){for(;e===no;)no=dn[--hn],dn[hn]=null,na=dn[--hn],dn[hn]=null;for(;e===li;)li=Tt[--At],Tt[At]=null,qt=Tt[--At],Tt[At]=null,Ht=Tt[--At],Tt[At]=null}function wc(e,t){Tt[At++]=Ht,Tt[At++]=qt,Tt[At++]=li,Ht=t.id,qt=t.overflow,li=e}var Ve=null,ve=null,te=!1,ri=null,Ct=!1,qs=Error(h(519));function ci(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw aa(xt(t,e)),qs}function xc(e){var t=e.stateNode,i=e.type,n=e.memoizedProps;switch(t[Ge]=e,t[Je]=n,i){case"dialog":J("cancel",t),J("close",t);break;case"iframe":case"object":case"embed":J("load",t);break;case"video":case"audio":for(i=0;i<ka.length;i++)J(ka[i],t);break;case"source":J("error",t);break;case"img":case"image":case"link":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"input":J("invalid",t),Hr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":J("invalid",t);break;case"textarea":J("invalid",t),Lr(t,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||n.suppressHydrationWarning===!0||Od(t.textContent,i)?(n.popover!=null&&(J("beforetoggle",t),J("toggle",t)),n.onScroll!=null&&J("scroll",t),n.onScrollEnd!=null&&J("scrollend",t),n.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||ci(e,!0)}function Tc(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ve=Ve.return}}function gn(e){if(e!==Ve)return!1;if(!te)return Tc(e),te=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||er(e.type,e.memoizedProps)),i=!i),i&&ve&&ci(e),Tc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Fd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Fd(e)}else t===27?(t=ve,Ti(e.type)?(e=or,or=null,ve=e):ve=t):ve=Ve?Mt(e.stateNode.nextSibling):null;return!0}function Li(){ve=Ve=null,te=!1}function Ls(){var e=ri;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),ri=null),e}function aa(e){ri===null?ri=[e]:ri.push(e)}var Ps=d(null),Pi=null,Wt=null;function ui(e,t,i){D(Ps,t._currentValue),t._currentValue=i}function Yt(e){e._currentValue=Ps.current,S(Ps)}function Os(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Us(e,t,i,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;e:for(;o!==null;){var l=o;o=a;for(var r=0;r<t.length;r++)if(l.context===t[r]){o.lanes|=i,l=o.alternate,l!==null&&(l.lanes|=i),Os(o.return,i,e),n||(s=null);break e}o=l.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(h(341));s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),Os(s,i,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fn(e,t,i,n){e=null;for(var a=t,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var l=a.type;ut(a.pendingProps.value,s.value)||(e!==null?e.push(l):e=[l])}}else if(a===ae.current){if(s=a.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Na):e=[Na])}a=a.return}e!==null&&Us(t,e,i,n),t.flags|=262144}function ao(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){Pi=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return Ac(Pi,e)}function oo(e,t){return Pi===null&&Oi(e),Ac(e,t)}function Ac(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Wt===null){if(e===null)throw Error(h(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return i}var Ig=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Bg=k.unstable_scheduleCallback,Hg=k.unstable_NormalPriority,De={$$typeof:Me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function js(){return{controller:new Ig,data:new Map,refCount:0}}function oa(e){e.refCount--,e.refCount===0&&Bg(Hg,function(){e.controller.abort()})}var sa=null,Gs=0,pn=0,mn=null;function qg(e,t){if(sa===null){var i=sa=[];Gs=0,pn=Wl(),mn={status:"pending",value:void 0,then:function(n){i.push(n)}}}return Gs++,t.then(Cc,Cc),t}function Cc(){if(--Gs===0&&sa!==null){mn!==null&&(mn.status="fulfilled");var e=sa;sa=null,pn=0,mn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lg(e,t){var i=[],n={status:"pending",value:null,reason:null,then:function(a){i.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<i.length;a++)(0,i[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<i.length;a++)(0,i[a])(void 0)}),n}var kc=v.S;v.S=function(e,t){cd=je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qg(e,t),kc!==null&&kc(e,t)};var Ui=d(null);function Vs(){var e=Ui.current;return e!==null?e:me.pooledCache}function so(e,t){t===null?D(Ui,Ui.current):D(Ui,t.pool)}function Mc(){var e=Vs();return e===null?null:{parent:De._currentValue,pool:e}}var yn=Error(h(460)),_s=Error(h(474)),lo=Error(h(542)),ro={then:function(){}};function Dc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ec(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(jt,jt),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nc(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nc(e),e}throw Gi=t,yn}}function ji(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Gi=i,yn):i}}var Gi=null;function Rc(){if(Gi===null)throw Error(h(459));var e=Gi;return Gi=null,e}function Nc(e){if(e===yn||e===lo)throw Error(h(483))}var vn=null,la=0;function co(e){var t=la;return la+=1,vn===null&&(vn=[]),Ec(vn,e,t)}function ra(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function uo(e,t){throw t.$$typeof===H?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zc(e){function t(g,u){if(e){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function i(g,u){if(!e)return null;for(;u!==null;)t(g,u),u=u.sibling;return null}function n(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function a(g,u){return g=Vt(g,u),g.index=0,g.sibling=null,g}function o(g,u,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=67108866,u):f):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function s(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function l(g,u,f,w){return u===null||u.tag!==6?(u=zs(f,g.mode,w),u.return=g,u):(u=a(u,f),u.return=g,u)}function r(g,u,f,w){var I=f.type;return I===xe?b(g,u,f.props.children,w,f.key):u!==null&&(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Oe&&ji(I)===u.type)?(u=a(u,f.props),ra(u,f),u.return=g,u):(u=io(f.type,f.key,f.props,null,g.mode,w),ra(u,f),u.return=g,u)}function p(g,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Is(f,g.mode,w),u.return=g,u):(u=a(u,f.children||[]),u.return=g,u)}function b(g,u,f,w,I){return u===null||u.tag!==7?(u=qi(f,g.mode,w,I),u.return=g,u):(u=a(u,f),u.return=g,u)}function x(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=zs(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case le:return f=io(u.type,u.key,u.props,null,g.mode,f),ra(f,u),f.return=g,f;case ye:return u=Is(u,g.mode,f),u.return=g,u;case Oe:return u=ji(u),x(g,u,f)}if(Fe(u)||Ie(u))return u=qi(u,g.mode,f,null),u.return=g,u;if(typeof u.then=="function")return x(g,co(u),f);if(u.$$typeof===Me)return x(g,oo(g,u),f);uo(g,u)}return null}function m(g,u,f,w){var I=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return I!==null?null:l(g,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case le:return f.key===I?r(g,u,f,w):null;case ye:return f.key===I?p(g,u,f,w):null;case Oe:return f=ji(f),m(g,u,f,w)}if(Fe(f)||Ie(f))return I!==null?null:b(g,u,f,w,null);if(typeof f.then=="function")return m(g,u,co(f),w);if(f.$$typeof===Me)return m(g,u,oo(g,f),w);uo(g,f)}return null}function y(g,u,f,w,I){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return g=g.get(f)||null,l(u,g,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case le:return g=g.get(w.key===null?f:w.key)||null,r(u,g,w,I);case ye:return g=g.get(w.key===null?f:w.key)||null,p(u,g,w,I);case Oe:return w=ji(w),y(g,u,f,w,I)}if(Fe(w)||Ie(w))return g=g.get(f)||null,b(u,g,w,I,null);if(typeof w.then=="function")return y(g,u,f,co(w),I);if(w.$$typeof===Me)return y(g,u,f,oo(u,w),I);uo(u,w)}return null}function N(g,u,f,w){for(var I=null,oe=null,z=u,Y=u=0,ee=null;z!==null&&Y<f.length;Y++){z.index>Y?(ee=z,z=null):ee=z.sibling;var se=m(g,z,f[Y],w);if(se===null){z===null&&(z=ee);break}e&&z&&se.alternate===null&&t(g,z),u=o(se,u,Y),oe===null?I=se:oe.sibling=se,oe=se,z=ee}if(Y===f.length)return i(g,z),te&&_t(g,Y),I;if(z===null){for(;Y<f.length;Y++)z=x(g,f[Y],w),z!==null&&(u=o(z,u,Y),oe===null?I=z:oe.sibling=z,oe=z);return te&&_t(g,Y),I}for(z=n(z);Y<f.length;Y++)ee=y(z,g,Y,f[Y],w),ee!==null&&(e&&ee.alternate!==null&&z.delete(ee.key===null?Y:ee.key),u=o(ee,u,Y),oe===null?I=ee:oe.sibling=ee,oe=ee);return e&&z.forEach(function(Di){return t(g,Di)}),te&&_t(g,Y),I}function L(g,u,f,w){if(f==null)throw Error(h(151));for(var I=null,oe=null,z=u,Y=u=0,ee=null,se=f.next();z!==null&&!se.done;Y++,se=f.next()){z.index>Y?(ee=z,z=null):ee=z.sibling;var Di=m(g,z,se.value,w);if(Di===null){z===null&&(z=ee);break}e&&z&&Di.alternate===null&&t(g,z),u=o(Di,u,Y),oe===null?I=Di:oe.sibling=Di,oe=Di,z=ee}if(se.done)return i(g,z),te&&_t(g,Y),I;if(z===null){for(;!se.done;Y++,se=f.next())se=x(g,se.value,w),se!==null&&(u=o(se,u,Y),oe===null?I=se:oe.sibling=se,oe=se);return te&&_t(g,Y),I}for(z=n(z);!se.done;Y++,se=f.next())se=y(z,g,Y,se.value,w),se!==null&&(e&&se.alternate!==null&&z.delete(se.key===null?Y:se.key),u=o(se,u,Y),oe===null?I=se:oe.sibling=se,oe=se);return e&&z.forEach(function(Xf){return t(g,Xf)}),te&&_t(g,Y),I}function pe(g,u,f,w){if(typeof f=="object"&&f!==null&&f.type===xe&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case le:e:{for(var I=f.key;u!==null;){if(u.key===I){if(I=f.type,I===xe){if(u.tag===7){i(g,u.sibling),w=a(u,f.props.children),w.return=g,g=w;break e}}else if(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Oe&&ji(I)===u.type){i(g,u.sibling),w=a(u,f.props),ra(w,f),w.return=g,g=w;break e}i(g,u);break}else t(g,u);u=u.sibling}f.type===xe?(w=qi(f.props.children,g.mode,w,f.key),w.return=g,g=w):(w=io(f.type,f.key,f.props,null,g.mode,w),ra(w,f),w.return=g,g=w)}return s(g);case ye:e:{for(I=f.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){i(g,u.sibling),w=a(u,f.children||[]),w.return=g,g=w;break e}else{i(g,u);break}else t(g,u);u=u.sibling}w=Is(f,g.mode,w),w.return=g,g=w}return s(g);case Oe:return f=ji(f),pe(g,u,f,w)}if(Fe(f))return N(g,u,f,w);if(Ie(f)){if(I=Ie(f),typeof I!="function")throw Error(h(150));return f=I.call(f),L(g,u,f,w)}if(typeof f.then=="function")return pe(g,u,co(f),w);if(f.$$typeof===Me)return pe(g,u,oo(g,f),w);uo(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(i(g,u.sibling),w=a(u,f),w.return=g,g=w):(i(g,u),w=zs(f,g.mode,w),w.return=g,g=w),s(g)):i(g,u)}return function(g,u,f,w){try{la=0;var I=pe(g,u,f,w);return vn=null,I}catch(z){if(z===yn||z===lo)throw z;var oe=dt(29,z,null,g.mode);return oe.lanes=w,oe.return=g,oe}finally{}}}var Vi=zc(!0),Ic=zc(!1),di=!1;function Ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gi(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(re&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=to(e),mc(e,null,i),t}return eo(e,n,t,i),to(e)}function ca(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,Ar(e,i)}}function Qs(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var a=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var s={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};o===null?a=o=s:o=o.next=s,i=i.next}while(i!==null);o===null?a=o=t:o=o.next=t}else a=o=t;i={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var Fs=!1;function ua(){if(Fs){var e=mn;if(e!==null)throw e}}function da(e,t,i,n){Fs=!1;var a=e.updateQueue;di=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var r=l,p=r.next;r.next=null,s===null?o=p:s.next=p,s=r;var b=e.alternate;b!==null&&(b=b.updateQueue,l=b.lastBaseUpdate,l!==s&&(l===null?b.firstBaseUpdate=p:l.next=p,b.lastBaseUpdate=r))}if(o!==null){var x=a.baseState;s=0,b=p=r=null,l=o;do{var m=l.lane&-536870913,y=m!==l.lane;if(y?($&m)===m:(n&m)===m){m!==0&&m===pn&&(Fs=!0),b!==null&&(b=b.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var N=e,L=l;m=t;var pe=i;switch(L.tag){case 1:if(N=L.payload,typeof N=="function"){x=N.call(pe,x,m);break e}x=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=L.payload,m=typeof N=="function"?N.call(pe,x,m):N,m==null)break e;x=R({},x,m);break e;case 2:di=!0}}m=l.callback,m!==null&&(e.flags|=64,y&&(e.flags|=8192),y=a.callbacks,y===null?a.callbacks=[m]:y.push(m))}else y={lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},b===null?(p=b=y,r=x):b=b.next=y,s|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;y=l,l=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);b===null&&(r=x),a.baseState=r,a.firstBaseUpdate=p,a.lastBaseUpdate=b,o===null&&(a.shared.lanes=0),vi|=s,e.lanes=s,e.memoizedState=x}}function Bc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Hc(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Bc(i[e],t)}var bn=d(null),ho=d(0);function qc(e,t){e=ti,D(ho,e),D(bn,t),ti=e|t.baseLanes}function Xs(){D(ho,ti),D(bn,bn.current)}function Ks(){ti=ho.current,S(bn),S(ho)}var ht=d(null),kt=null;function fi(e){var t=e.alternate;D(Ce,Ce.current&1),D(ht,e),kt===null&&(t===null||bn.current!==null||t.memoizedState!==null)&&(kt=e)}function Zs(e){D(Ce,Ce.current),D(ht,e),kt===null&&(kt=e)}function Lc(e){e.tag===22?(D(Ce,Ce.current),D(ht,e),kt===null&&(kt=e)):pi()}function pi(){D(Ce,Ce.current),D(ht,ht.current)}function gt(e){S(ht),kt===e&&(kt=null),S(Ce)}var Ce=d(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||nr(i)||ar(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,W=null,ge=null,Ee=null,fo=!1,Sn=!1,_i=!1,po=0,ha=0,wn=null,Pg=0;function Te(){throw Error(h(321))}function Js(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!ut(e[i],t[i]))return!1;return!0}function $s(e,t,i,n,a,o){return Qt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?Su:fl,_i=!1,o=i(n,a),_i=!1,Sn&&(o=Oc(t,i,n,a)),Pc(e),o}function Pc(e){v.H=pa;var t=ge!==null&&ge.next!==null;if(Qt=0,Ee=ge=W=null,fo=!1,ha=0,wn=null,t)throw Error(h(300));e===null||Re||(e=e.dependencies,e!==null&&ao(e)&&(Re=!0))}function Oc(e,t,i,n){W=e;var a=0;do{if(Sn&&(wn=null),ha=0,Sn=!1,25<=a)throw Error(h(301));if(a+=1,Ee=ge=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}v.H=wu,o=t(i,n)}while(Sn);return o}function Og(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?ga(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(W.flags|=1024),t}function el(){var e=po!==0;return po=0,e}function tl(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function il(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}Qt=0,Ee=ge=W=null,Sn=!1,ha=po=0,wn=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?W.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ke(){if(ge===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ee===null?W.memoizedState:Ee.next;if(t!==null)Ee=t,ge=e;else{if(e===null)throw W.alternate===null?Error(h(467)):Error(h(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ee===null?W.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ga(e){var t=ha;return ha+=1,wn===null&&(wn=[]),e=Ec(wn,e,t),t=W,(Ee===null?t.memoizedState:Ee.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?Su:fl),e}function yo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ga(e);if(e.$$typeof===Me)return _e(e)}throw Error(h(438,String(e)))}function nl(e){var t=null,i=W.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var n=W.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=mo(),W.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),n=0;n<e;n++)i[n]=It;return t.index++,i}function Ft(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=ke();return al(t,ge,e)}function al(e,t,i){var n=e.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=i;var a=e.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,n.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var l=s=null,r=null,p=t,b=!1;do{var x=p.lane&-536870913;if(x!==p.lane?($&x)===x:(Qt&x)===x){var m=p.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),x===pn&&(b=!0);else if((Qt&m)===m){p=p.next,m===pn&&(b=!0);continue}else x={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(l=r=x,s=o):r=r.next=x,W.lanes|=m,vi|=m;x=p.action,_i&&i(o,x),o=p.hasEagerState?p.eagerState:i(o,x)}else m={lane:x,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(l=r=m,s=o):r=r.next=m,W.lanes|=x,vi|=x;p=p.next}while(p!==null&&p!==t);if(r===null?s=o:r.next=l,!ut(o,e.memoizedState)&&(Re=!0,b&&(i=mn,i!==null)))throw i;e.memoizedState=o,e.baseState=s,e.baseQueue=r,n.lastRenderedState=o}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ol(e){var t=ke(),i=t.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=e;var n=i.dispatch,a=i.pending,o=t.memoizedState;if(a!==null){i.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);ut(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),i.lastRenderedState=o}return[o,n]}function Uc(e,t,i){var n=W,a=ke(),o=te;if(o){if(i===void 0)throw Error(h(407));i=i()}else i=t();var s=!ut((ge||a).memoizedState,i);if(s&&(a.memoizedState=i,Re=!0),a=a.queue,rl(Vc.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,xn(9,{destroy:void 0},Gc.bind(null,n,a,i,t),null),me===null)throw Error(h(349));o||(Qt&127)!==0||jc(n,t,i)}return i}function jc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=W.updateQueue,t===null?(t=mo(),W.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Gc(e,t,i,n){t.value=i,t.getSnapshot=n,_c(t)&&Wc(e)}function Vc(e,t,i){return i(function(){_c(t)&&Wc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!ut(e,i)}catch{return!0}}function Wc(e){var t=Hi(e,2);t!==null&&at(t,e,2)}function sl(e){var t=Ze();if(typeof e=="function"){var i=e;if(e=i(),_i){ai(!0);try{i()}finally{ai(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Yc(e,t,i,n){return e.baseState=i,al(e,ge,typeof n=="function"?n:Ft)}function Ug(e,t,i,n,a){if(wo(e))throw Error(h(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};v.T!==null?i(!0):o.isTransition=!1,n(o),i=t.pending,i===null?(o.next=t.pending=o,Qc(t,o)):(o.next=i.next,t.pending=i.next=o)}}function Qc(e,t){var i=t.action,n=t.payload,a=e.state;if(t.isTransition){var o=v.T,s={};v.T=s;try{var l=i(a,n),r=v.S;r!==null&&r(s,l),Fc(e,t,l)}catch(p){ll(e,t,p)}finally{o!==null&&s.types!==null&&(o.types=s.types),v.T=o}}else try{o=i(a,n),Fc(e,t,o)}catch(p){ll(e,t,p)}}function Fc(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){Xc(e,t,n)},function(n){return ll(e,t,n)}):Xc(e,t,i)}function Xc(e,t,i){t.status="fulfilled",t.value=i,Kc(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Qc(e,i)))}function ll(e,t,i){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=i,Kc(t),t=t.next;while(t!==n)}e.action=null}function Kc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zc(e,t){return t}function Jc(e,t){if(te){var i=me.formState;if(i!==null){e:{var n=W;if(te){if(ve){t:{for(var a=ve,o=Ct;a.nodeType!==8;){if(!o){a=null;break t}if(a=Mt(a.nextSibling),a===null){a=null;break t}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){ve=Mt(a.nextSibling),n=a.data==="F!";break e}}ci(n)}n=!1}n&&(t=i[0])}}return i=Ze(),i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zc,lastRenderedState:t},i.queue=n,i=yu.bind(null,W,n),n.dispatch=i,n=sl(!1),o=gl.bind(null,W,!1,n.queue),n=Ze(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,i=Ug.bind(null,W,a,o,i),a.dispatch=i,n.memoizedState=e,[t,i,!1]}function $c(e){var t=ke();return eu(t,ge,e)}function eu(e,t,i){if(t=al(e,t,Zc)[0],e=vo(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ga(t)}catch(s){throw s===yn?lo:s}else n=t;t=ke();var a=t.queue,o=a.dispatch;return i!==t.memoizedState&&(W.flags|=2048,xn(9,{destroy:void 0},jg.bind(null,a,i),null)),[n,o,e]}function jg(e,t){e.action=t}function tu(e){var t=ke(),i=ge;if(i!==null)return eu(t,i,e);ke(),t=t.memoizedState,i=ke();var n=i.queue.dispatch;return i.memoizedState=e,[t,n,!1]}function xn(e,t,i,n){return e={tag:e,create:i,deps:n,inst:t,next:null},t=W.updateQueue,t===null&&(t=mo(),W.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e),e}function iu(){return ke().memoizedState}function bo(e,t,i,n){var a=Ze();W.flags|=e,a.memoizedState=xn(1|t,{destroy:void 0},i,n===void 0?null:n)}function So(e,t,i,n){var a=ke();n=n===void 0?null:n;var o=a.memoizedState.inst;ge!==null&&n!==null&&Js(n,ge.memoizedState.deps)?a.memoizedState=xn(t,o,i,n):(W.flags|=e,a.memoizedState=xn(1|t,o,i,n))}function nu(e,t){bo(8390656,8,e,t)}function rl(e,t){So(2048,8,e,t)}function Gg(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=mo(),W.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function au(e){var t=ke().memoizedState;return Gg({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function ou(e,t){return So(4,2,e,t)}function su(e,t){return So(4,4,e,t)}function lu(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ru(e,t,i){i=i!=null?i.concat([e]):null,So(4,4,lu.bind(null,t,e),i)}function cl(){}function cu(e,t){var i=ke();t=t===void 0?null:t;var n=i.memoizedState;return t!==null&&Js(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function uu(e,t){var i=ke();t=t===void 0?null:t;var n=i.memoizedState;if(t!==null&&Js(t,n[1]))return n[0];if(n=e(),_i){ai(!0);try{e()}finally{ai(!1)}}return i.memoizedState=[n,t],n}function ul(e,t,i){return i===void 0||(Qt&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=dd(),W.lanes|=e,vi|=e,i)}function du(e,t,i,n){return ut(i,t)?i:bn.current!==null?(e=ul(e,i,n),ut(e,t)||(Re=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&($&261930)===0?(Re=!0,e.memoizedState=i):(e=dd(),W.lanes|=e,vi|=e,t)}function hu(e,t,i,n,a){var o=M.p;M.p=o!==0&&8>o?o:8;var s=v.T,l={};v.T=l,gl(e,!1,t,i);try{var r=a(),p=v.S;if(p!==null&&p(l,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Lg(r,n);fa(e,t,b,mt(e))}else fa(e,t,n,mt(e))}catch(x){fa(e,t,{then:function(){},status:"rejected",reason:x},mt())}finally{M.p=o,s!==null&&l.types!==null&&(s.types=l.types),v.T=s}}function Vg(){}function dl(e,t,i,n){if(e.tag!==5)throw Error(h(476));var a=gu(e).queue;hu(e,a,t,q,i===null?Vg:function(){return fu(e),i(n)})}function gu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:q},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fu(e){var t=gu(e);t.next===null&&(t=e.alternate.memoizedState),fa(e,t.next.queue,{},mt())}function hl(){return _e(Na)}function pu(){return ke().memoizedState}function mu(){return ke().memoizedState}function _g(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=mt();e=hi(i);var n=gi(t,e,i);n!==null&&(at(n,t,i),ca(n,t,i)),t={cache:js()},e.payload=t;return}t=t.return}}function Wg(e,t,i){var n=mt();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},wo(e)?vu(t,i):(i=Rs(e,t,i,n),i!==null&&(at(i,e,n),bu(i,t,n)))}function yu(e,t,i){var n=mt();fa(e,t,i,n)}function fa(e,t,i,n){var a={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(wo(e))vu(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,i);if(a.hasEagerState=!0,a.eagerState=l,ut(l,s))return eo(e,t,a,0),me===null&&$a(),!1}catch{}finally{}if(i=Rs(e,t,a,n),i!==null)return at(i,e,n),bu(i,t,n),!0}return!1}function gl(e,t,i,n){if(n={lane:2,revertLane:Wl(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wo(e)){if(t)throw Error(h(479))}else t=Rs(e,i,n,2),t!==null&&at(t,e,2)}function wo(e){var t=e.alternate;return e===W||t!==null&&t===W}function vu(e,t){Sn=fo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function bu(e,t,i){if((i&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,Ar(e,i)}}var pa={readContext:_e,use:yo,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};pa.useEffectEvent=Te;var Su={readContext:_e,use:yo,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:nu,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,bo(4194308,4,lu.bind(null,t,e),i)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){bo(4,2,e,t)},useMemo:function(e,t){var i=Ze();t=t===void 0?null:t;var n=e();if(_i){ai(!0);try{e()}finally{ai(!1)}}return i.memoizedState=[n,t],n},useReducer:function(e,t,i){var n=Ze();if(i!==void 0){var a=i(t);if(_i){ai(!0);try{i(t)}finally{ai(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Wg.bind(null,W,e),[n.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=sl(e);var t=e.queue,i=yu.bind(null,W,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:cl,useDeferredValue:function(e,t){var i=Ze();return ul(i,e,t)},useTransition:function(){var e=sl(!1);return e=hu.bind(null,W,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var n=W,a=Ze();if(te){if(i===void 0)throw Error(h(407));i=i()}else{if(i=t(),me===null)throw Error(h(349));($&127)!==0||jc(n,t,i)}a.memoizedState=i;var o={value:i,getSnapshot:t};return a.queue=o,nu(Vc.bind(null,n,o,e),[e]),n.flags|=2048,xn(9,{destroy:void 0},Gc.bind(null,n,o,i,t),null),i},useId:function(){var e=Ze(),t=me.identifierPrefix;if(te){var i=qt,n=Ht;i=(n&~(1<<32-ct(n)-1)).toString(32)+i,t="_"+t+"R_"+i,i=po++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Pg++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hl,useFormState:Jc,useActionState:Jc,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=gl.bind(null,W,!0,i),i.dispatch=t,[e,t]},useMemoCache:nl,useCacheRefresh:function(){return Ze().memoizedState=_g.bind(null,W)},useEffectEvent:function(e){var t=Ze(),i={impl:e};return t.memoizedState=i,function(){if((re&2)!==0)throw Error(h(440));return i.impl.apply(void 0,arguments)}}},fl={readContext:_e,use:yo,useCallback:cu,useContext:_e,useEffect:rl,useImperativeHandle:ru,useInsertionEffect:ou,useLayoutEffect:su,useMemo:uu,useReducer:vo,useRef:iu,useState:function(){return vo(Ft)},useDebugValue:cl,useDeferredValue:function(e,t){var i=ke();return du(i,ge.memoizedState,e,t)},useTransition:function(){var e=vo(Ft)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ga(e),t]},useSyncExternalStore:Uc,useId:pu,useHostTransitionStatus:hl,useFormState:$c,useActionState:$c,useOptimistic:function(e,t){var i=ke();return Yc(i,ge,e,t)},useMemoCache:nl,useCacheRefresh:mu};fl.useEffectEvent=au;var wu={readContext:_e,use:yo,useCallback:cu,useContext:_e,useEffect:rl,useImperativeHandle:ru,useInsertionEffect:ou,useLayoutEffect:su,useMemo:uu,useReducer:ol,useRef:iu,useState:function(){return ol(Ft)},useDebugValue:cl,useDeferredValue:function(e,t){var i=ke();return ge===null?ul(i,e,t):du(i,ge.memoizedState,e,t)},useTransition:function(){var e=ol(Ft)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ga(e),t]},useSyncExternalStore:Uc,useId:pu,useHostTransitionStatus:hl,useFormState:tu,useActionState:tu,useOptimistic:function(e,t){var i=ke();return ge!==null?Yc(i,ge,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:nl,useCacheRefresh:mu};wu.useEffectEvent=au;function pl(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:R({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var ml={enqueueSetState:function(e,t,i){e=e._reactInternals;var n=mt(),a=hi(n);a.payload=t,i!=null&&(a.callback=i),t=gi(e,a,n),t!==null&&(at(t,e,n),ca(t,e,n))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=mt(),a=hi(n);a.tag=1,a.payload=t,i!=null&&(a.callback=i),t=gi(e,a,n),t!==null&&(at(t,e,n),ca(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=mt(),n=hi(i);n.tag=2,t!=null&&(n.callback=t),t=gi(e,n,i),t!==null&&(at(t,e,i),ca(t,e,i))}};function xu(e,t,i,n,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!ta(i,n)||!ta(a,o):!0}function Tu(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function Wi(e,t){var i=t;if("ref"in t){i={};for(var n in t)n!=="ref"&&(i[n]=t[n])}if(e=e.defaultProps){i===t&&(i=R({},i));for(var a in e)i[a]===void 0&&(i[a]=e[a])}return i}function Au(e){Ja(e)}function Cu(e){console.error(e)}function ku(e){Ja(e)}function xo(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Mu(e,t,i){try{var n=e.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function yl(e,t,i){return i=hi(i),i.tag=3,i.payload={element:null},i.callback=function(){xo(e,t)},i}function Du(e){return e=hi(e),e.tag=3,e}function Eu(e,t,i,n){var a=i.type.getDerivedStateFromError;if(typeof a=="function"){var o=n.value;e.payload=function(){return a(o)},e.callback=function(){Mu(t,i,n)}}var s=i.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Mu(t,i,n),typeof a!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})})}function Yg(e,t,i,n,a){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=i.alternate,t!==null&&fn(t,i,a,!0),i=ht.current,i!==null){switch(i.tag){case 31:case 13:return kt===null?Bo():i.alternate===null&&Ae===0&&(Ae=3),i.flags&=-257,i.flags|=65536,i.lanes=a,n===ro?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([n]):t.add(n),Gl(e,n,a)),!1;case 22:return i.flags|=65536,n===ro?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([n]):i.add(n)),Gl(e,n,a)),!1}throw Error(h(435,i.tag))}return Gl(e,n,a),Bo(),!1}if(te)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==qs&&(e=Error(h(422),{cause:n}),aa(xt(e,i)))):(n!==qs&&(t=Error(h(423),{cause:n}),aa(xt(t,i))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=xt(n,i),a=yl(e.stateNode,n,a),Qs(e,a),Ae!==4&&(Ae=2)),!1;var o=Error(h(520),{cause:n});if(o=xt(o,i),Ta===null?Ta=[o]:Ta.push(o),Ae!==4&&(Ae=2),t===null)return!0;n=xt(n,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=a&-a,i.lanes|=e,e=yl(i.stateNode,n,e),Qs(i,e),!1;case 1:if(t=i.type,o=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(bi===null||!bi.has(o))))return i.flags|=65536,a&=-a,i.lanes|=a,a=Du(a),Eu(a,e,i,n),Qs(i,a),!1}i=i.return}while(i!==null);return!1}var vl=Error(h(461)),Re=!1;function We(e,t,i,n){t.child=e===null?Ic(t,null,i,n):Vi(t,e.child,i,n)}function Ru(e,t,i,n,a){i=i.render;var o=t.ref;if("ref"in n){var s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}else s=n;return Oi(t),n=$s(e,t,i,s,o,a),l=el(),e!==null&&!Re?(tl(e,t,a),Xt(e,t,a)):(te&&l&&Bs(t),t.flags|=1,We(e,t,n,a),t.child)}function Nu(e,t,i,n,a){if(e===null){var o=i.type;return typeof o=="function"&&!Ns(o)&&o.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=o,zu(e,t,o,n,a)):(e=io(i.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!kl(e,a)){var s=o.memoizedProps;if(i=i.compare,i=i!==null?i:ta,i(s,n)&&e.ref===t.ref)return Xt(e,t,a)}return t.flags|=1,e=Vt(o,n),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,i,n,a){if(e!==null){var o=e.memoizedProps;if(ta(o,n)&&e.ref===t.ref)if(Re=!1,t.pendingProps=n=o,kl(e,a))(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Xt(e,t,a)}return bl(e,t,i,n,a)}function Iu(e,t,i,n){var a=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|i:i,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~o}else n=0,t.child=null;return Bu(e,t,o,i,n)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&so(t,o!==null?o.cachePool:null),o!==null?qc(t,o):Xs(),Lc(t);else return n=t.lanes=536870912,Bu(e,t,o!==null?o.baseLanes|i:i,i,n)}else o!==null?(so(t,o.cachePool),qc(t,o),pi(),t.memoizedState=null):(e!==null&&so(t,null),Xs(),pi());return We(e,t,a,i),t.child}function ma(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bu(e,t,i,n,a){var o=Vs();return o=o===null?null:{parent:De._currentValue,pool:o},t.memoizedState={baseLanes:i,cachePool:o},e!==null&&so(t,null),Xs(),Lc(t),e!==null&&fn(e,t,n,!0),t.childLanes=a,null}function To(e,t){return t=Co({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hu(e,t,i){return Vi(t,e.child,null,i),e=To(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function Qg(e,t,i){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(n.mode==="hidden")return e=To(t,n),t.lanes=536870912,ma(null,e);if(Zs(t),(e=ve)?(e=Qd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:li!==null?{id:Ht,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},i=vc(e),i.return=t,t.child=i,Ve=t,ve=null)):e=null,e===null)throw ci(t);return t.lanes=536870912,null}return To(t,n)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Zs(t),a)if(t.flags&256)t.flags&=-257,t=Hu(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Re||fn(e,t,i,!1),a=(i&e.childLanes)!==0,Re||a){if(n=me,n!==null&&(s=Cr(n,i),s!==0&&s!==o.retryLane))throw o.retryLane=s,Hi(e,s),at(n,e,s),vl;Bo(),t=Hu(e,t,i)}else e=o.treeContext,ve=Mt(s.nextSibling),Ve=t,te=!0,ri=null,Ct=!1,e!==null&&wc(t,e),t=To(t,n),t.flags|=4096;return t}return e=Vt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ao(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(h(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function bl(e,t,i,n,a){return Oi(t),i=$s(e,t,i,n,void 0,a),n=el(),e!==null&&!Re?(tl(e,t,a),Xt(e,t,a)):(te&&n&&Bs(t),t.flags|=1,We(e,t,i,a),t.child)}function qu(e,t,i,n,a,o){return Oi(t),t.updateQueue=null,i=Oc(t,n,i,a),Pc(e),n=el(),e!==null&&!Re?(tl(e,t,o),Xt(e,t,o)):(te&&n&&Bs(t),t.flags|=1,We(e,t,i,o),t.child)}function Lu(e,t,i,n,a){if(Oi(t),t.stateNode===null){var o=un,s=i.contextType;typeof s=="object"&&s!==null&&(o=_e(s)),o=new i(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ml,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},Ws(t),s=i.contextType,o.context=typeof s=="object"&&s!==null?_e(s):un,o.state=t.memoizedState,s=i.getDerivedStateFromProps,typeof s=="function"&&(pl(t,i,s,n),o.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&ml.enqueueReplaceState(o,o.state,null),da(t,n,o,a),ua(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var l=t.memoizedProps,r=Wi(i,l);o.props=r;var p=o.context,b=i.contextType;s=un,typeof b=="object"&&b!==null&&(s=_e(b));var x=i.getDerivedStateFromProps;b=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,b||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l||p!==s)&&Tu(t,o,n,s),di=!1;var m=t.memoizedState;o.state=m,da(t,n,o,a),ua(),p=t.memoizedState,l||m!==p||di?(typeof x=="function"&&(pl(t,i,x,n),p=t.memoizedState),(r=di||xu(t,i,r,n,m,p,s))?(b||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=s,n=r):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Ys(e,t),s=t.memoizedProps,b=Wi(i,s),o.props=b,x=t.pendingProps,m=o.context,p=i.contextType,r=un,typeof p=="object"&&p!==null&&(r=_e(p)),l=i.getDerivedStateFromProps,(p=typeof l=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==x||m!==r)&&Tu(t,o,n,r),di=!1,m=t.memoizedState,o.state=m,da(t,n,o,a),ua();var y=t.memoizedState;s!==x||m!==y||di||e!==null&&e.dependencies!==null&&ao(e.dependencies)?(typeof l=="function"&&(pl(t,i,l,n),y=t.memoizedState),(b=di||xu(t,i,b,n,m,y,r)||e!==null&&e.dependencies!==null&&ao(e.dependencies))?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,r),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,r)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=r,n=b):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Ao(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Vi(t,e.child,null,a),t.child=Vi(t,null,i,a)):We(e,t,i,a),t.memoizedState=o.state,e=t.child):e=Xt(e,t,a),e}function Pu(e,t,i,n){return Li(),t.flags|=256,We(e,t,i,n),t.child}var Sl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wl(e){return{baseLanes:e,cachePool:Mc()}}function xl(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=pt),e}function Ou(e,t,i){var n=t.pendingProps,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(a?fi(t):pi(),(e=ve)?(e=Qd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:li!==null?{id:Ht,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},i=vc(e),i.return=t,t.child=i,Ve=t,ve=null)):e=null,e===null)throw ci(t);return ar(e)?t.lanes=32:t.lanes=536870912,null}var l=n.children;return n=n.fallback,a?(pi(),a=t.mode,l=Co({mode:"hidden",children:l},a),n=qi(n,a,i,null),l.return=t,n.return=t,l.sibling=n,t.child=l,n=t.child,n.memoizedState=wl(i),n.childLanes=xl(e,s,i),t.memoizedState=Sl,ma(null,n)):(fi(t),Tl(t,l))}var r=e.memoizedState;if(r!==null&&(l=r.dehydrated,l!==null)){if(o)t.flags&256?(fi(t),t.flags&=-257,t=Al(e,t,i)):t.memoizedState!==null?(pi(),t.child=e.child,t.flags|=128,t=null):(pi(),l=n.fallback,a=t.mode,n=Co({mode:"visible",children:n.children},a),l=qi(l,a,i,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,Vi(t,e.child,null,i),n=t.child,n.memoizedState=wl(i),n.childLanes=xl(e,s,i),t.memoizedState=Sl,t=ma(null,n));else if(fi(t),ar(l)){if(s=l.nextSibling&&l.nextSibling.dataset,s)var p=s.dgst;s=p,n=Error(h(419)),n.stack="",n.digest=s,aa({value:n,source:null,stack:null}),t=Al(e,t,i)}else if(Re||fn(e,t,i,!1),s=(i&e.childLanes)!==0,Re||s){if(s=me,s!==null&&(n=Cr(s,i),n!==0&&n!==r.retryLane))throw r.retryLane=n,Hi(e,n),at(s,e,n),vl;nr(l)||Bo(),t=Al(e,t,i)}else nr(l)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ve=Mt(l.nextSibling),Ve=t,te=!0,ri=null,Ct=!1,e!==null&&wc(t,e),t=Tl(t,n.children),t.flags|=4096);return t}return a?(pi(),l=n.fallback,a=t.mode,r=e.child,p=r.sibling,n=Vt(r,{mode:"hidden",children:n.children}),n.subtreeFlags=r.subtreeFlags&65011712,p!==null?l=Vt(p,l):(l=qi(l,a,i,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,ma(null,n),n=t.child,l=e.child.memoizedState,l===null?l=wl(i):(a=l.cachePool,a!==null?(r=De._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Mc(),l={baseLanes:l.baseLanes|i,cachePool:a}),n.memoizedState=l,n.childLanes=xl(e,s,i),t.memoizedState=Sl,ma(e.child,n)):(fi(t),i=e.child,e=i.sibling,i=Vt(i,{mode:"visible",children:n.children}),i.return=t,i.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=i,t.memoizedState=null,i)}function Tl(e,t){return t=Co({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Co(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Al(e,t,i){return Vi(t,e.child,null,i),e=Tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uu(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Os(e.return,t,i)}function Cl(e,t,i,n,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:a,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=a,s.treeForkCount=o)}function ju(e,t,i){var n=t.pendingProps,a=n.revealOrder,o=n.tail;n=n.children;var s=Ce.current,l=(s&2)!==0;if(l?(s=s&1|2,t.flags|=128):s&=1,D(Ce,s),We(e,t,n,i),n=te?na:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uu(e,i,t);else if(e.tag===19)Uu(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(i=t.child,a=null;i!==null;)e=i.alternate,e!==null&&go(e)===null&&(a=i),i=i.sibling;i=a,i===null?(a=t.child,t.child=null):(a=i.sibling,i.sibling=null),Cl(t,!1,a,i,o,n);break;case"backwards":case"unstable_legacy-backwards":for(i=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&go(e)===null){t.child=a;break}e=a.sibling,a.sibling=i,i=a,a=e}Cl(t,!0,i,null,o,n);break;case"together":Cl(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Xt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),vi|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(fn(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,i=Vt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Vt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function kl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ao(e)))}function Fg(e,t,i){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),ui(t,De,e.memoizedState.cache),Li();break;case 27:case 5:Ei(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:ui(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(fi(t),t.flags|=128,null):(i&t.child.childLanes)!==0?Ou(e,t,i):(fi(t),e=Xt(e,t,i),e!==null?e.sibling:null);fi(t);break;case 19:var a=(e.flags&128)!==0;if(n=(i&t.childLanes)!==0,n||(fn(e,t,i,!1),n=(i&t.childLanes)!==0),a){if(n)return ju(e,t,i);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),D(Ce,Ce.current),n)break;return null;case 22:return t.lanes=0,Iu(e,t,i,t.pendingProps);case 24:ui(t,De,e.memoizedState.cache)}return Xt(e,t,i)}function Gu(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)Re=!0;else{if(!kl(e,i)&&(t.flags&128)===0)return Re=!1,Fg(e,t,i);Re=(e.flags&131072)!==0}else Re=!1,te&&(t.flags&1048576)!==0&&Sc(t,na,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=ji(t.elementType),t.type=e,typeof e=="function")Ns(e)?(n=Wi(e,n),t.tag=1,t=Lu(null,t,e,n,i)):(t.tag=0,t=bl(null,t,e,n,i));else{if(e!=null){var a=e.$$typeof;if(a===Ke){t.tag=11,t=Ru(null,t,e,n,i);break e}else if(a===X){t.tag=14,t=Nu(null,t,e,n,i);break e}}throw t=yt(e)||e,Error(h(306,t,""))}}return t;case 0:return bl(e,t,t.type,t.pendingProps,i);case 1:return n=t.type,a=Wi(n,t.pendingProps),Lu(e,t,n,a,i);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(h(387));n=t.pendingProps;var o=t.memoizedState;a=o.element,Ys(e,t),da(t,n,null,i);var s=t.memoizedState;if(n=s.cache,ui(t,De,n),n!==o.cache&&Us(t,[De],i,!0),ua(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Pu(e,t,n,i);break e}else if(n!==a){a=xt(Error(h(424)),t),aa(a),t=Pu(e,t,n,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ve=Mt(e.firstChild),Ve=t,te=!0,ri=null,Ct=!0,i=Ic(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Li(),n===a){t=Xt(e,t,i);break e}We(e,t,n,i)}t=t.child}return t;case 26:return Ao(e,t),e===null?(i=$d(t.type,null,t.pendingProps,null))?t.memoizedState=i:te||(i=t.type,e=t.pendingProps,n=jo(F.current).createElement(i),n[Ge]=t,n[Je]=e,Ye(n,i,e),He(n),t.stateNode=n):t.memoizedState=$d(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ei(t),e===null&&te&&(n=t.stateNode=Kd(t.type,t.pendingProps,F.current),Ve=t,Ct=!0,a=ve,Ti(t.type)?(or=a,ve=Mt(n.firstChild)):ve=a),We(e,t,t.pendingProps.children,i),Ao(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((a=n=ve)&&(n=Cf(n,t.type,t.pendingProps,Ct),n!==null?(t.stateNode=n,Ve=t,ve=Mt(n.firstChild),Ct=!1,a=!0):a=!1),a||ci(t)),Ei(t),a=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,n=o.children,er(a,o)?n=null:s!==null&&er(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=$s(e,t,Og,null,null,i),Na._currentValue=a),Ao(e,t),We(e,t,n,i),t.child;case 6:return e===null&&te&&((e=i=ve)&&(i=kf(i,t.pendingProps,Ct),i!==null?(t.stateNode=i,Ve=t,ve=null,e=!0):e=!1),e||ci(t)),null;case 13:return Ou(e,t,i);case 4:return Ue(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vi(t,null,n,i):We(e,t,n,i),t.child;case 11:return Ru(e,t,t.type,t.pendingProps,i);case 7:return We(e,t,t.pendingProps,i),t.child;case 8:return We(e,t,t.pendingProps.children,i),t.child;case 12:return We(e,t,t.pendingProps.children,i),t.child;case 10:return n=t.pendingProps,ui(t,t.type,n.value),We(e,t,n.children,i),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Oi(t),a=_e(a),n=n(a),t.flags|=1,We(e,t,n,i),t.child;case 14:return Nu(e,t,t.type,t.pendingProps,i);case 15:return zu(e,t,t.type,t.pendingProps,i);case 19:return ju(e,t,i);case 31:return Qg(e,t,i);case 22:return Iu(e,t,i,t.pendingProps);case 24:return Oi(t),n=_e(De),e===null?(a=Vs(),a===null&&(a=me,o=js(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=i),a=o),t.memoizedState={parent:n,cache:a},Ws(t),ui(t,De,a)):((e.lanes&i)!==0&&(Ys(e,t),da(t,null,null,i),ua()),a=e.memoizedState,o=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ui(t,De,n)):(n=o.cache,ui(t,De,n),n!==a.cache&&Us(t,[De],i,!0))),We(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Kt(e){e.flags|=4}function Ml(e,t,i,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(pd())e.flags|=8192;else throw Gi=ro,_s}else e.flags&=-16777217}function Vu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ah(t))if(pd())e.flags|=8192;else throw Gi=ro,_s}function ko(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xr():536870912,e.lanes|=t,kn|=t)}function ya(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function Xg(e,t,i){var n=t.pendingProps;switch(Hs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return i=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(De),Se(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(gn(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ls())),be(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Kt(t),o!==null?(be(t),Vu(t,o)):(be(t),Ml(t,a,null,n,i))):o?o!==e.memoizedState?(Kt(t),be(t),Vu(t,o)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Kt(t),be(t),Ml(t,a,e,n,i)),null;case 27:if(Fi(t),i=F.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Kt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return be(t),null}e=E.current,gn(t)?xc(t):(e=Kd(a,n,i),t.stateNode=e,Kt(t))}return be(t),null;case 5:if(Fi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Kt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return be(t),null}if(o=E.current,gn(t))xc(t);else{var s=jo(F.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?s.createElement(a,{is:n.is}):s.createElement(a)}}o[Ge]=t,o[Je]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(Ye(o,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Kt(t)}}return be(t),Ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Kt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(e=F.current,gn(t)){if(e=t.stateNode,i=t.memoizedProps,n=null,a=Ve,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||Od(e.nodeValue,i)),e||ci(t,!0)}else e=jo(e).createTextNode(n),e[Ge]=t,t.stateNode=e}return be(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(n=gn(t),i!==null){if(e===null){if(!n)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Ge]=t}else Li(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else i=Ls(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(h(558))}return be(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=gn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Ge]=t}else Li(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=Ls(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=i,t):(i=n!==null,e=e!==null&&e.memoizedState!==null,i&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),ko(t,t.updateQueue),be(t),null);case 4:return Se(),e===null&&Xl(t.stateNode.containerInfo),be(t),null;case 10:return Yt(t.type),be(t),null;case 19:if(S(Ce),n=t.memoizedState,n===null)return be(t),null;if(a=(t.flags&128)!==0,o=n.rendering,o===null)if(a)ya(n,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,ya(n,!1),e=o.updateQueue,t.updateQueue=e,ko(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)yc(i,e),i=i.sibling;return D(Ce,Ce.current&1|2),te&&_t(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&je()>No&&(t.flags|=128,a=!0,ya(n,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ko(t,e),ya(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!te)return be(t),null}else 2*je()-n.renderingStartTime>No&&i!==536870912&&(t.flags|=128,a=!0,ya(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=je(),e.sibling=null,i=Ce.current,D(Ce,a?i&1|2:i&1),te&&_t(t,n.treeForkCount),e):(be(t),null);case 22:case 23:return gt(t),Ks(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(i&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),i=t.updateQueue,i!==null&&ko(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==i&&(t.flags|=2048),e!==null&&S(Ui),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yt(De),be(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Kg(e,t){switch(Hs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(De),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fi(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(h(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(Ce),null;case 4:return Se(),null;case 10:return Yt(t.type),null;case 22:case 23:return gt(t),Ks(),e!==null&&S(Ui),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(De),null;case 25:return null;default:return null}}function _u(e,t){switch(Hs(t),t.tag){case 3:Yt(De),Se();break;case 26:case 27:case 5:Fi(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:S(Ce);break;case 10:Yt(t.type);break;case 22:case 23:gt(t),Ks(),e!==null&&S(Ui);break;case 24:Yt(De)}}function va(e,t){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var a=n.next;i=a;do{if((i.tag&e)===e){n=void 0;var o=i.create,s=i.inst;n=o(),s.destroy=n}i=i.next}while(i!==a)}}catch(l){de(t,t.return,l)}}function mi(e,t,i){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){var s=n.inst,l=s.destroy;if(l!==void 0){s.destroy=void 0,a=t;var r=i,p=l;try{p()}catch(b){de(a,r,b)}}}n=n.next}while(n!==o)}}catch(b){de(t,t.return,b)}}function Wu(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{Hc(t,i)}catch(n){de(e,e.return,n)}}}function Yu(e,t,i){i.props=Wi(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(n){de(e,t,n)}}function ba(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof i=="function"?e.refCleanup=i(n):i.current=n}}catch(a){de(e,t,a)}}function Lt(e,t){var i=e.ref,n=e.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(a){de(e,t,a)}else i.current=null}function Qu(e){var t=e.type,i=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break e;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(a){de(e,e.return,a)}}function Dl(e,t,i){try{var n=e.stateNode;bf(n,e.type,i,t),n[Je]=t}catch(a){de(e,e.return,a)}}function Fu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ti(e.type)||e.tag===4}function El(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ti(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=jt));else if(n!==4&&(n===27&&Ti(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Rl(e,t,i),e=e.sibling;e!==null;)Rl(e,t,i),e=e.sibling}function Mo(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(n===27&&Ti(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Mo(e,t,i),e=e.sibling;e!==null;)Mo(e,t,i),e=e.sibling}function Xu(e){var t=e.stateNode,i=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ye(t,n,i),t[Ge]=e,t[Je]=i}catch(o){de(e,e.return,o)}}var Zt=!1,Ne=!1,Nl=!1,Ku=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Zg(e,t){if(e=e.containerInfo,Jl=Fo,e=rc(e),As(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var s=0,l=-1,r=-1,p=0,b=0,x=e,m=null;t:for(;;){for(var y;x!==i||a!==0&&x.nodeType!==3||(l=s+a),x!==o||n!==0&&x.nodeType!==3||(r=s+n),x.nodeType===3&&(s+=x.nodeValue.length),(y=x.firstChild)!==null;)m=x,x=y;for(;;){if(x===e)break t;if(m===i&&++p===a&&(l=s),m===o&&++b===n&&(r=s),(y=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=y}i=l===-1||r===-1?null:{start:l,end:r}}else i=null}i=i||{start:0,end:0}}else i=null;for($l={focusedElem:e,selectionRange:i},Fo=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)a=e[i],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,i=t,a=o.memoizedProps,o=o.memoizedState,n=i.stateNode;try{var N=Wi(i.type,a);e=n.getSnapshotBeforeUpdate(N,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(L){de(i,i.return,L)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)ir(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ir(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Zu(e,t,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:$t(e,i),n&4&&va(5,i);break;case 1:if($t(e,i),n&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(s){de(i,i.return,s)}else{var a=Wi(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){de(i,i.return,s)}}n&64&&Wu(i),n&512&&ba(i,i.return);break;case 3:if($t(e,i),n&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Hc(e,t)}catch(s){de(i,i.return,s)}}break;case 27:t===null&&n&4&&Xu(i);case 26:case 5:$t(e,i),t===null&&n&4&&Qu(i),n&512&&ba(i,i.return);break;case 12:$t(e,i);break;case 31:$t(e,i),n&4&&ed(e,i);break;case 13:$t(e,i),n&4&&td(e,i),n&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=lf.bind(null,i),Mf(e,i))));break;case 22:if(n=i.memoizedState!==null||Zt,!n){t=t!==null&&t.memoizedState!==null||Ne,a=Zt;var o=Ne;Zt=n,(Ne=t)&&!o?ei(e,i,(i.subtreeFlags&8772)!==0):$t(e,i),Zt=a,Ne=o}break;case 30:break;default:$t(e,i)}}function Ju(e){var t=e.alternate;t!==null&&(e.alternate=null,Ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ls(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,et=!1;function Jt(e,t,i){for(i=i.child;i!==null;)$u(e,t,i),i=i.sibling}function $u(e,t,i){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Vn,i)}catch{}switch(i.tag){case 26:Ne||Lt(i,t),Jt(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ne||Lt(i,t);var n=we,a=et;Ti(i.type)&&(we=i.stateNode,et=!1),Jt(e,t,i),Da(i.stateNode),we=n,et=a;break;case 5:Ne||Lt(i,t);case 6:if(n=we,a=et,we=null,Jt(e,t,i),we=n,et=a,we!==null)if(et)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(i.stateNode)}catch(o){de(i,t,o)}else try{we.removeChild(i.stateNode)}catch(o){de(i,t,o)}break;case 18:we!==null&&(et?(e=we,Wd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Bn(e)):Wd(we,i.stateNode));break;case 4:n=we,a=et,we=i.stateNode.containerInfo,et=!0,Jt(e,t,i),we=n,et=a;break;case 0:case 11:case 14:case 15:mi(2,i,t),Ne||mi(4,i,t),Jt(e,t,i);break;case 1:Ne||(Lt(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Yu(i,t,n)),Jt(e,t,i);break;case 21:Jt(e,t,i);break;case 22:Ne=(n=Ne)||i.memoizedState!==null,Jt(e,t,i),Ne=n;break;default:Jt(e,t,i)}}function ed(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bn(e)}catch(i){de(t,t.return,i)}}}function td(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bn(e)}catch(i){de(t,t.return,i)}}function Jg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ku),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ku),t;default:throw Error(h(435,e.tag))}}function Do(e,t){var i=Jg(e);t.forEach(function(n){if(!i.has(n)){i.add(n);var a=rf.bind(null,e,n);n.then(a,a)}})}function tt(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var a=i[n],o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 27:if(Ti(l.type)){we=l.stateNode,et=!1;break e}break;case 5:we=l.stateNode,et=!1;break e;case 3:case 4:we=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(we===null)throw Error(h(160));$u(o,s,a),we=null,et=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)id(t,e),t=t.sibling}var Nt=null;function id(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),it(e),n&4&&(mi(3,e,e.return),va(3,e),mi(5,e,e.return));break;case 1:tt(t,e),it(e),n&512&&(Ne||i===null||Lt(i,i.return)),n&64&&Zt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:var a=Nt;if(tt(t,e),it(e),n&512&&(Ne||i===null||Lt(i,i.return)),n&4){var o=i!==null?i.memoizedState:null;if(n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null){e:{n=e.type,i=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":o=a.getElementsByTagName("title")[0],(!o||o[Yn]||o[Ge]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=a.createElement(n),a.head.insertBefore(o,a.querySelector("head > title"))),Ye(o,n,i),o[Ge]=e,He(o),n=o;break e;case"link":var s=ih("link","href",a).get(n+(i.href||""));if(s){for(var l=0;l<s.length;l++)if(o=s[l],o.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&o.getAttribute("rel")===(i.rel==null?null:i.rel)&&o.getAttribute("title")===(i.title==null?null:i.title)&&o.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){s.splice(l,1);break t}}o=a.createElement(n),Ye(o,n,i),a.head.appendChild(o);break;case"meta":if(s=ih("meta","content",a).get(n+(i.content||""))){for(l=0;l<s.length;l++)if(o=s[l],o.getAttribute("content")===(i.content==null?null:""+i.content)&&o.getAttribute("name")===(i.name==null?null:i.name)&&o.getAttribute("property")===(i.property==null?null:i.property)&&o.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&o.getAttribute("charset")===(i.charSet==null?null:i.charSet)){s.splice(l,1);break t}}o=a.createElement(n),Ye(o,n,i),a.head.appendChild(o);break;default:throw Error(h(468,n))}o[Ge]=e,He(o),n=o}e.stateNode=n}else nh(a,e.type,e.stateNode);else e.stateNode=th(a,n,e.memoizedProps);else o!==n?(o===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):o.count--,n===null?nh(a,e.type,e.stateNode):th(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,i.memoizedProps)}break;case 27:tt(t,e),it(e),n&512&&(Ne||i===null||Lt(i,i.return)),i!==null&&n&4&&Dl(e,e.memoizedProps,i.memoizedProps);break;case 5:if(tt(t,e),it(e),n&512&&(Ne||i===null||Lt(i,i.return)),e.flags&32){a=e.stateNode;try{nn(a,"")}catch(N){de(e,e.return,N)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,Dl(e,a,i!==null?i.memoizedProps:a)),n&1024&&(Nl=!0);break;case 6:if(tt(t,e),it(e),n&4){if(e.stateNode===null)throw Error(h(162));n=e.memoizedProps,i=e.stateNode;try{i.nodeValue=n}catch(N){de(e,e.return,N)}}break;case 3:if(_o=null,a=Nt,Nt=Go(t.containerInfo),tt(t,e),Nt=a,it(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(N){de(e,e.return,N)}Nl&&(Nl=!1,nd(e));break;case 4:n=Nt,Nt=Go(e.stateNode.containerInfo),tt(t,e),it(e),Nt=n;break;case 12:tt(t,e),it(e);break;case 31:tt(t,e),it(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Do(e,n)));break;case 13:tt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ro=je()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Do(e,n)));break;case 22:a=e.memoizedState!==null;var r=i!==null&&i.memoizedState!==null,p=Zt,b=Ne;if(Zt=p||a,Ne=b||r,tt(t,e),Ne=b,Zt=p,it(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(i===null||r||Zt||Ne||Yi(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){r=i=t;try{if(o=r.stateNode,a)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{l=r.stateNode;var x=r.memoizedProps.style,m=x!=null&&x.hasOwnProperty("display")?x.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){de(r,r.return,N)}}}else if(t.tag===6){if(i===null){r=t;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(N){de(r,r.return,N)}}}else if(t.tag===18){if(i===null){r=t;try{var y=r.stateNode;a?Yd(y,!0):Yd(r.stateNode,!1)}catch(N){de(r,r.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Do(e,i))));break;case 19:tt(t,e),it(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Do(e,n)));break;case 30:break;case 21:break;default:tt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var i,n=e.return;n!==null;){if(Fu(n)){i=n;break}n=n.return}if(i==null)throw Error(h(160));switch(i.tag){case 27:var a=i.stateNode,o=El(e);Mo(e,o,a);break;case 5:var s=i.stateNode;i.flags&32&&(nn(s,""),i.flags&=-33);var l=El(e);Mo(e,l,s);break;case 3:case 4:var r=i.stateNode.containerInfo,p=El(e);Rl(e,p,r);break;default:throw Error(h(161))}}catch(b){de(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zu(e,t.alternate,t),t=t.sibling}function Yi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:mi(4,t,t.return),Yi(t);break;case 1:Lt(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Yu(t,t.return,i),Yi(t);break;case 27:Da(t.stateNode);case 26:case 5:Lt(t,t.return),Yi(t);break;case 22:t.memoizedState===null&&Yi(t);break;case 30:Yi(t);break;default:Yi(t)}e=e.sibling}}function ei(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:ei(a,o,i),va(4,o);break;case 1:if(ei(a,o,i),n=o,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(p){de(n,n.return,p)}if(n=o,a=n.updateQueue,a!==null){var l=n.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)Bc(r[a],l)}catch(p){de(n,n.return,p)}}i&&s&64&&Wu(o),ba(o,o.return);break;case 27:Xu(o);case 26:case 5:ei(a,o,i),i&&n===null&&s&4&&Qu(o),ba(o,o.return);break;case 12:ei(a,o,i);break;case 31:ei(a,o,i),i&&s&4&&ed(a,o);break;case 13:ei(a,o,i),i&&s&4&&td(a,o);break;case 22:o.memoizedState===null&&ei(a,o,i),ba(o,o.return);break;case 30:break;default:ei(a,o,i)}t=t.sibling}}function zl(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&oa(i))}function Il(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e))}function zt(e,t,i,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ad(e,t,i,n),t=t.sibling}function ad(e,t,i,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,i,n),a&2048&&va(9,t);break;case 1:zt(e,t,i,n);break;case 3:zt(e,t,i,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e)));break;case 12:if(a&2048){zt(e,t,i,n),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,l=o.onPostCommit;typeof l=="function"&&l(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){de(t,t.return,r)}}else zt(e,t,i,n);break;case 31:zt(e,t,i,n);break;case 13:zt(e,t,i,n);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?zt(e,t,i,n):Sa(e,t):o._visibility&2?zt(e,t,i,n):(o._visibility|=2,Tn(e,t,i,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&zl(s,t);break;case 24:zt(e,t,i,n),a&2048&&Il(t.alternate,t);break;default:zt(e,t,i,n)}}function Tn(e,t,i,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,l=i,r=n,p=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(o,s,l,r,a),va(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Tn(o,s,l,r,a):Sa(o,s):(b._visibility|=2,Tn(o,s,l,r,a)),a&&p&2048&&zl(s.alternate,s);break;case 24:Tn(o,s,l,r,a),a&&p&2048&&Il(s.alternate,s);break;default:Tn(o,s,l,r,a)}t=t.sibling}}function Sa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,n=t,a=n.flags;switch(n.tag){case 22:Sa(i,n),a&2048&&zl(n.alternate,n);break;case 24:Sa(i,n),a&2048&&Il(n.alternate,n);break;default:Sa(i,n)}t=t.sibling}}var wa=8192;function An(e,t,i){if(e.subtreeFlags&wa)for(e=e.child;e!==null;)od(e,t,i),e=e.sibling}function od(e,t,i){switch(e.tag){case 26:An(e,t,i),e.flags&wa&&e.memoizedState!==null&&Of(i,Nt,e.memoizedState,e.memoizedProps);break;case 5:An(e,t,i);break;case 3:case 4:var n=Nt;Nt=Go(e.stateNode.containerInfo),An(e,t,i),Nt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=wa,wa=16777216,An(e,t,i),wa=n):An(e,t,i));break;default:An(e,t,i)}}function sd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];qe=n,rd(n,e)}sd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ld(e),e=e.sibling}function ld(e){switch(e.tag){case 0:case 11:case 15:xa(e),e.flags&2048&&mi(9,e,e.return);break;case 3:xa(e);break;case 12:xa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Eo(e)):xa(e);break;default:xa(e)}}function Eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];qe=n,rd(n,e)}sd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:mi(8,t,t.return),Eo(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Eo(t));break;default:Eo(t)}e=e.sibling}}function rd(e,t){for(;qe!==null;){var i=qe;switch(i.tag){case 0:case 11:case 15:mi(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:oa(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,qe=n;else e:for(i=e;qe!==null;){n=qe;var a=n.sibling,o=n.return;if(Ju(n),n===i){qe=null;break e}if(a!==null){a.return=o,qe=a;break e}qe=o}}}var $g={getCacheForType:function(e){var t=_e(De),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return _e(De).controller.signal}},ef=typeof WeakMap=="function"?WeakMap:Map,re=0,me=null,Z=null,$=0,ue=0,ft=null,yi=!1,Cn=!1,Bl=!1,ti=0,Ae=0,vi=0,Qi=0,Hl=0,pt=0,kn=0,Ta=null,nt=null,ql=!1,Ro=0,cd=0,No=1/0,zo=null,bi=null,Be=0,Si=null,Mn=null,ii=0,Ll=0,Pl=null,ud=null,Aa=0,Ol=null;function mt(){return(re&2)!==0&&$!==0?$&-$:v.T!==null?Wl():kr()}function dd(){if(pt===0)if(($&536870912)===0||te){var e=Oa;Oa<<=1,(Oa&3932160)===0&&(Oa=262144),pt=e}else pt=536870912;return e=ht.current,e!==null&&(e.flags|=32),pt}function at(e,t,i){(e===me&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Dn(e,0),wi(e,$,pt,!1)),Wn(e,i),((re&2)===0||e!==me)&&(e===me&&((re&2)===0&&(Qi|=i),Ae===4&&wi(e,$,pt,!1)),Pt(e))}function hd(e,t,i){if((re&6)!==0)throw Error(h(327));var n=!i&&(t&127)===0&&(t&e.expiredLanes)===0||_n(e,t),a=n?af(e,t):jl(e,t,!0),o=n;do{if(a===0){Cn&&!n&&wi(e,t,0,!1);break}else{if(i=e.current.alternate,o&&!tf(i)){a=jl(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var l=e;a=Ta;var r=l.current.memoizedState.isDehydrated;if(r&&(Dn(l,s).flags|=256),s=jl(l,s,!1),s!==2){if(Bl&&!r){l.errorRecoveryDisabledLanes|=o,Qi|=o,a=4;break e}o=nt,nt=a,o!==null&&(nt===null?nt=o:nt.push.apply(nt,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Dn(e,0),wi(e,t,0,!0);break}e:{switch(n=e,o=a,o){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:wi(n,t,pt,!yi);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(a=Ro+300-je(),10<a)){if(wi(n,t,pt,!yi),ja(n,0,!0)!==0)break e;ii=t,n.timeoutHandle=Vd(gd.bind(null,n,i,nt,zo,ql,t,pt,Qi,kn,yi,o,"Throttled",-0,0),a);break e}gd(n,i,nt,zo,ql,t,pt,Qi,kn,yi,o,null,-0,0)}}break}while(!0);Pt(e)}function gd(e,t,i,n,a,o,s,l,r,p,b,x,m,y){if(e.timeoutHandle=-1,x=t.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},od(t,o,x);var N=(o&62914560)===o?Ro-je():(o&4194048)===o?cd-je():0;if(N=Uf(x,N),N!==null){ii=o,e.cancelPendingCommit=N(wd.bind(null,e,t,o,i,n,a,s,l,r,b,x,null,m,y)),wi(e,o,s,!p);return}}wd(e,t,o,i,n,a,s,l,r)}function tf(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var a=i[n],o=a.getSnapshot;a=a.value;try{if(!ut(o(),a))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wi(e,t,i,n){t&=~Hl,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var o=31-ct(a),s=1<<o;n[o]=-1,a&=~s}i!==0&&Tr(e,i,t)}function Io(){return(re&6)===0?(Ca(0),!1):!0}function Ul(){if(Z!==null){if(ue===0)var e=Z.return;else e=Z,Wt=Pi=null,il(e),vn=null,la=0,e=Z;for(;e!==null;)_u(e.alternate,e),e=e.return;Z=null}}function Dn(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,xf(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),ii=0,Ul(),me=e,Z=i=Vt(e.current,null),$=t,ue=0,ft=null,yi=!1,Cn=_n(e,t),Bl=!1,kn=pt=Hl=Qi=vi=Ae=0,nt=Ta=null,ql=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-ct(n),o=1<<a;t|=e[a],n&=~o}return ti=t,$a(),i}function fd(e,t){W=null,v.H=pa,t===yn||t===lo?(t=Rc(),ue=3):t===_s?(t=Rc(),ue=4):ue=t===vl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,Z===null&&(Ae=1,xo(e,xt(t,e.current)))}function pd(){var e=ht.current;return e===null?!0:($&4194048)===$?kt===null:($&62914560)===$||($&536870912)!==0?e===kt:!1}function md(){var e=v.H;return v.H=pa,e===null?pa:e}function yd(){var e=v.A;return v.A=$g,e}function Bo(){Ae=4,yi||($&4194048)!==$&&ht.current!==null||(Cn=!0),(vi&134217727)===0&&(Qi&134217727)===0||me===null||wi(me,$,pt,!1)}function jl(e,t,i){var n=re;re|=2;var a=md(),o=yd();(me!==e||$!==t)&&(zo=null,Dn(e,t)),t=!1;var s=Ae;e:do try{if(ue!==0&&Z!==null){var l=Z,r=ft;switch(ue){case 8:Ul(),s=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var p=ue;if(ue=0,ft=null,En(e,l,r,p),i&&Cn){s=0;break e}break;default:p=ue,ue=0,ft=null,En(e,l,r,p)}}nf(),s=Ae;break}catch(b){fd(e,b)}while(!0);return t&&e.shellSuspendCounter++,Wt=Pi=null,re=n,v.H=a,v.A=o,Z===null&&(me=null,$=0,$a()),s}function nf(){for(;Z!==null;)vd(Z)}function af(e,t){var i=re;re|=2;var n=md(),a=yd();me!==e||$!==t?(zo=null,No=je()+500,Dn(e,t)):Cn=_n(e,t);e:do try{if(ue!==0&&Z!==null){t=Z;var o=ft;t:switch(ue){case 1:ue=0,ft=null,En(e,t,o,1);break;case 2:case 9:if(Dc(o)){ue=0,ft=null,bd(t);break}t=function(){ue!==2&&ue!==9||me!==e||(ue=7),Pt(e)},o.then(t,t);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:Dc(o)?(ue=0,ft=null,bd(t)):(ue=0,ft=null,En(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var l=Z;if(s?ah(s):l.stateNode.complete){ue=0,ft=null;var r=l.sibling;if(r!==null)Z=r;else{var p=l.return;p!==null?(Z=p,Ho(p)):Z=null}break t}}ue=0,ft=null,En(e,t,o,5);break;case 6:ue=0,ft=null,En(e,t,o,6);break;case 8:Ul(),Ae=6;break e;default:throw Error(h(462))}}of();break}catch(b){fd(e,b)}while(!0);return Wt=Pi=null,v.H=n,v.A=a,re=i,Z!==null?0:(me=null,$=0,$a(),Ae)}function of(){for(;Z!==null&&!jn();)vd(Z)}function vd(e){var t=Gu(e.alternate,e,ti);e.memoizedProps=e.pendingProps,t===null?Ho(e):Z=t}function bd(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=qu(i,t,t.pendingProps,t.type,void 0,$);break;case 11:t=qu(i,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:il(t);default:_u(i,t),t=Z=yc(t,ti),t=Gu(i,t,ti)}e.memoizedProps=e.pendingProps,t===null?Ho(e):Z=t}function En(e,t,i,n){Wt=Pi=null,il(t),vn=null,la=0;var a=t.return;try{if(Yg(e,a,t,i,$)){Ae=1,xo(e,xt(i,e.current)),Z=null;return}}catch(o){if(a!==null)throw Z=a,o;Ae=1,xo(e,xt(i,e.current)),Z=null;return}t.flags&32768?(te||n===1?e=!0:Cn||($&536870912)!==0?e=!1:(yi=e=!0,(n===2||n===9||n===3||n===6)&&(n=ht.current,n!==null&&n.tag===13&&(n.flags|=16384))),Sd(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){Sd(t,yi);return}e=t.return;var i=Xg(t.alternate,t,ti);if(i!==null){Z=i;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Ae===0&&(Ae=5)}function Sd(e,t){do{var i=Kg(e.alternate,e);if(i!==null){i.flags&=32767,Z=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=i}while(e!==null);Ae=6,Z=null}function wd(e,t,i,n,a,o,s,l,r){e.cancelPendingCommit=null;do qo();while(Be!==0);if((re&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(o=t.lanes|t.childLanes,o|=Es,Lh(e,i,o,s,l,r),e===me&&(Z=me=null,$=0),Mn=t,Si=e,ii=i,Ll=o,Pl=a,ud=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cf(ne,function(){return kd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,a=M.p,M.p=2,s=re,re|=4;try{Zg(e,t,i)}finally{re=s,M.p=a,v.T=n}}Be=1,xd(),Td(),Ad()}}function xd(){if(Be===1){Be=0;var e=Si,t=Mn,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=v.T,v.T=null;var n=M.p;M.p=2;var a=re;re|=4;try{id(t,e);var o=$l,s=rc(e.containerInfo),l=o.focusedElem,r=o.selectionRange;if(s!==l&&l&&l.ownerDocument&&lc(l.ownerDocument.documentElement,l)){if(r!==null&&As(l)){var p=r.start,b=r.end;if(b===void 0&&(b=p),"selectionStart"in l)l.selectionStart=p,l.selectionEnd=Math.min(b,l.value.length);else{var x=l.ownerDocument||document,m=x&&x.defaultView||window;if(m.getSelection){var y=m.getSelection(),N=l.textContent.length,L=Math.min(r.start,N),pe=r.end===void 0?L:Math.min(r.end,N);!y.extend&&L>pe&&(s=pe,pe=L,L=s);var g=sc(l,L),u=sc(l,pe);if(g&&u&&(y.rangeCount!==1||y.anchorNode!==g.node||y.anchorOffset!==g.offset||y.focusNode!==u.node||y.focusOffset!==u.offset)){var f=x.createRange();f.setStart(g.node,g.offset),y.removeAllRanges(),L>pe?(y.addRange(f),y.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),y.addRange(f))}}}}for(x=[],y=l;y=y.parentNode;)y.nodeType===1&&x.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<x.length;l++){var w=x[l];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Fo=!!Jl,$l=Jl=null}finally{re=a,M.p=n,v.T=i}}e.current=t,Be=2}}function Td(){if(Be===2){Be=0;var e=Si,t=Mn,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=v.T,v.T=null;var n=M.p;M.p=2;var a=re;re|=4;try{Zu(e,t.alternate,t)}finally{re=a,M.p=n,v.T=i}}Be=3}}function Ad(){if(Be===4||Be===3){Be=0,is();var e=Si,t=Mn,i=ii,n=ud;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,Mn=Si=null,Cd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(bi=null),os(i),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Vn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,a=M.p,M.p=2,v.T=null;try{for(var o=e.onRecoverableError,s=0;s<n.length;s++){var l=n[s];o(l.value,{componentStack:l.stack})}}finally{v.T=t,M.p=a}}(ii&3)!==0&&qo(),Pt(e),a=e.pendingLanes,(i&261930)!==0&&(a&42)!==0?e===Ol?Aa++:(Aa=0,Ol=e):Aa=0,Ca(0)}}function Cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oa(t)))}function qo(){return xd(),Td(),Ad(),kd()}function kd(){if(Be!==5)return!1;var e=Si,t=Ll;Ll=0;var i=os(ii),n=v.T,a=M.p;try{M.p=32>i?32:i,v.T=null,i=Pl,Pl=null;var o=Si,s=ii;if(Be=0,Mn=Si=null,ii=0,(re&6)!==0)throw Error(h(331));var l=re;if(re|=4,ld(o.current),ad(o,o.current,s,i),re=l,Ca(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Vn,o)}catch{}return!0}finally{M.p=a,v.T=n,Cd(e,t)}}function Md(e,t,i){t=xt(i,t),t=yl(e.stateNode,t,2),e=gi(e,t,2),e!==null&&(Wn(e,2),Pt(e))}function de(e,t,i){if(e.tag===3)Md(e,e,i);else for(;t!==null;){if(t.tag===3){Md(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(bi===null||!bi.has(n))){e=xt(i,e),i=Du(2),n=gi(t,i,2),n!==null&&(Eu(i,n,t,e),Wn(n,2),Pt(n));break}}t=t.return}}function Gl(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new ef;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(i)||(Bl=!0,a.add(i),e=sf.bind(null,e,t,i),t.then(e,e))}function sf(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,me===e&&($&i)===i&&(Ae===4||Ae===3&&($&62914560)===$&&300>je()-Ro?(re&2)===0&&Dn(e,0):Hl|=i,kn===$&&(kn=0)),Pt(e)}function Dd(e,t){t===0&&(t=xr()),e=Hi(e,t),e!==null&&(Wn(e,t),Pt(e))}function lf(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Dd(e,i)}function rf(e,t){var i=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(i=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(t),Dd(e,i)}function cf(e,t){return On(e,t)}var Lo=null,Rn=null,Vl=!1,Po=!1,_l=!1,xi=0;function Pt(e){e!==Rn&&e.next===null&&(Rn===null?Lo=Rn=e:Rn=Rn.next=e),Po=!0,Vl||(Vl=!0,df())}function Ca(e,t){if(!_l&&Po){_l=!0;do for(var i=!1,n=Lo;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var o=0;else{var s=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-ct(42|e)+1)-1,o&=a&~(s&~l),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(i=!0,zd(n,o))}else o=$,o=ja(n,n===me?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||_n(n,o)||(i=!0,zd(n,o));n=n.next}while(i);_l=!1}}function uf(){Ed()}function Ed(){Po=Vl=!1;var e=0;xi!==0&&wf()&&(e=xi);for(var t=je(),i=null,n=Lo;n!==null;){var a=n.next,o=Rd(n,t);o===0?(n.next=null,i===null?Lo=a:i.next=a,a===null&&(Rn=i)):(i=n,(e!==0||(o&3)!==0)&&(Po=!0)),n=a}Be!==0&&Be!==5||Ca(e),xi!==0&&(xi=0)}function Rd(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-ct(o),l=1<<s,r=a[s];r===-1?((l&i)===0||(l&n)!==0)&&(a[s]=qh(l,t)):r<=t&&(e.expiredLanes|=l),o&=~l}if(t=me,i=$,i=ja(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,i===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Un(n),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||_n(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(n!==null&&Un(n),os(i)){case 2:case 8:i=_;break;case 32:i=ne;break;case 268435456:i=Gn;break;default:i=ne}return n=Nd.bind(null,e),i=On(i,n),e.callbackPriority=t,e.callbackNode=i,t}return n!==null&&n!==null&&Un(n),e.callbackPriority=2,e.callbackNode=null,2}function Nd(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(qo()&&e.callbackNode!==i)return null;var n=$;return n=ja(e,e===me?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(hd(e,n,t),Rd(e,je()),e.callbackNode!=null&&e.callbackNode===i?Nd.bind(null,e):null)}function zd(e,t){if(qo())return null;hd(e,t,!0)}function df(){Tf(function(){(re&6)!==0?On(A,uf):Ed()})}function Wl(){if(xi===0){var e=pn;e===0&&(e=Pa,Pa<<=1,(Pa&261888)===0&&(Pa=256)),xi=e}return xi}function Id(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wa(""+e)}function Bd(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function hf(e,t,i,n,a){if(t==="submit"&&i&&i.stateNode===a){var o=Id((a[Je]||null).action),s=n.submitter;s&&(t=(t=s[Je]||null)?Id(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var l=new Xa("action","action",null,n,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(xi!==0){var r=s?Bd(a,s):new FormData(a);dl(i,{pending:!0,data:r,method:a.method,action:o},null,r)}}else typeof o=="function"&&(l.preventDefault(),r=s?Bd(a,s):new FormData(a),dl(i,{pending:!0,data:r,method:a.method,action:o},o,r))},currentTarget:a}]})}}for(var Yl=0;Yl<Ds.length;Yl++){var Ql=Ds[Yl],gf=Ql.toLowerCase(),ff=Ql[0].toUpperCase()+Ql.slice(1);Rt(gf,"on"+ff)}Rt(dc,"onAnimationEnd"),Rt(hc,"onAnimationIteration"),Rt(gc,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Eg,"onTransitionRun"),Rt(Rg,"onTransitionStart"),Rt(Ng,"onTransitionCancel"),Rt(fc,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ka));function Hd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],r=l.instance,p=l.currentTarget;if(l=l.listener,r!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=p;try{o(a)}catch(b){Ja(b)}a.currentTarget=null,o=r}else for(s=0;s<n.length;s++){if(l=n[s],r=l.instance,p=l.currentTarget,l=l.listener,r!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=p;try{o(a)}catch(b){Ja(b)}a.currentTarget=null,o=r}}}}function J(e,t){var i=t[ss];i===void 0&&(i=t[ss]=new Set);var n=e+"__bubble";i.has(n)||(qd(t,e,2,!1),i.add(n))}function Fl(e,t,i){var n=0;t&&(n|=4),qd(i,e,n,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Xl(e){if(!e[Oo]){e[Oo]=!0,Er.forEach(function(i){i!=="selectionchange"&&(pf.has(i)||Fl(i,!1,e),Fl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,Fl("selectionchange",!1,t))}}function qd(e,t,i,n){switch(dh(t)){case 2:var a=Vf;break;case 8:a=_f;break;default:a=ur}i=a.bind(null,t,i,e),a=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,i,{capture:!0,passive:a}):e.addEventListener(t,i,!0):a!==void 0?e.addEventListener(t,i,{passive:a}):e.addEventListener(t,i,!1)}function Kl(e,t,i,n,a){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===a)break;if(s===4)for(s=n.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;l!==null;){if(s=Zi(l),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){n=o=s;continue e}l=l.parentNode}}n=n.return}jr(function(){var p=o,b=gs(i),x=[];e:{var m=pc.get(e);if(m!==void 0){var y=Xa,N=e;switch(e){case"keypress":if(Qa(i)===0)break e;case"keydown":case"keyup":y=lg;break;case"focusin":N="focus",y=bs;break;case"focusout":N="blur",y=bs;break;case"beforeblur":case"afterblur":y=bs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ug;break;case dc:case hc:case gc:y=Jh;break;case fc:y=hg;break;case"scroll":case"scrollend":y=Qh;break;case"wheel":y=fg;break;case"copy":case"cut":case"paste":y=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Yr;break;case"toggle":case"beforetoggle":y=mg}var L=(t&4)!==0,pe=!L&&(e==="scroll"||e==="scrollend"),g=L?m!==null?m+"Capture":null:m;L=[];for(var u=p,f;u!==null;){var w=u;if(f=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||f===null||g===null||(w=Fn(u,g),w!=null&&L.push(Ma(u,w,f))),pe)break;u=u.return}0<L.length&&(m=new y(m,N,null,i,b),x.push({event:m,listeners:L}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&i!==hs&&(N=i.relatedTarget||i.fromElement)&&(Zi(N)||N[Ki]))break e;if((y||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,y?(N=i.relatedTarget||i.toElement,y=p,N=N?Zi(N):null,N!==null&&(pe=G(N),L=N.tag,N!==pe||L!==5&&L!==27&&L!==6)&&(N=null)):(y=null,N=p),y!==N)){if(L=_r,w="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(L=Yr,w="onPointerLeave",g="onPointerEnter",u="pointer"),pe=y==null?m:Qn(y),f=N==null?m:Qn(N),m=new L(w,u+"leave",y,i,b),m.target=pe,m.relatedTarget=f,w=null,Zi(b)===p&&(L=new L(g,u+"enter",N,i,b),L.target=f,L.relatedTarget=pe,w=L),pe=w,y&&N)t:{for(L=mf,g=y,u=N,f=0,w=g;w;w=L(w))f++;w=0;for(var I=u;I;I=L(I))w++;for(;0<f-w;)g=L(g),f--;for(;0<w-f;)u=L(u),w--;for(;f--;){if(g===u||u!==null&&g===u.alternate){L=g;break t}g=L(g),u=L(u)}L=null}else L=null;y!==null&&Ld(x,m,y,L,!1),N!==null&&pe!==null&&Ld(x,pe,N,L,!0)}}e:{if(m=p?Qn(p):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var oe=ec;else if(Jr(m))if(tc)oe=kg;else{oe=Ag;var z=Tg}else y=m.nodeName,!y||y.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?p&&ds(p.elementType)&&(oe=ec):oe=Cg;if(oe&&(oe=oe(e,p))){$r(x,oe,i,b);break e}z&&z(e,m,p),e==="focusout"&&p&&m.type==="number"&&p.memoizedProps.value!=null&&us(m,"number",m.value)}switch(z=p?Qn(p):window,e){case"focusin":(Jr(z)||z.contentEditable==="true")&&(ln=z,Cs=p,ia=null);break;case"focusout":ia=Cs=ln=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,cc(x,i,b);break;case"selectionchange":if(Dg)break;case"keydown":case"keyup":cc(x,i,b)}var Y;if(ws)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else sn?Kr(e,i)&&(ee="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ee="onCompositionStart");ee&&(Qr&&i.locale!=="ko"&&(sn||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&sn&&(Y=Gr()):(si=b,ms="value"in si?si.value:si.textContent,sn=!0)),z=Uo(p,ee),0<z.length&&(ee=new Wr(ee,e,null,i,b),x.push({event:ee,listeners:z}),Y?ee.data=Y:(Y=Zr(i),Y!==null&&(ee.data=Y)))),(Y=vg?bg(e,i):Sg(e,i))&&(ee=Uo(p,"onBeforeInput"),0<ee.length&&(z=new Wr("onBeforeInput","beforeinput",null,i,b),x.push({event:z,listeners:ee}),z.data=Y)),hf(x,e,p,i,b)}Hd(x,t)})}function Ma(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Uo(e,t){for(var i=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=Fn(e,i),a!=null&&n.unshift(Ma(e,a,o)),a=Fn(e,t),a!=null&&n.push(Ma(e,a,o))),e.tag===3)return n;e=e.return}return[]}function mf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ld(e,t,i,n,a){for(var o=t._reactName,s=[];i!==null&&i!==n;){var l=i,r=l.alternate,p=l.stateNode;if(l=l.tag,r!==null&&r===n)break;l!==5&&l!==26&&l!==27||p===null||(r=p,a?(p=Fn(i,o),p!=null&&s.unshift(Ma(i,p,r))):a||(p=Fn(i,o),p!=null&&s.push(Ma(i,p,r)))),i=i.return}s.length!==0&&e.push({event:t,listeners:s})}var yf=/\r\n?/g,vf=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(yf,`
`).replace(vf,"")}function Od(e,t){return t=Pd(t),Pd(e)===t}function fe(e,t,i,n,a,o){switch(i){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||nn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&nn(e,""+n);break;case"className":Va(e,"class",n);break;case"tabIndex":Va(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Va(e,i,n);break;case"style":Or(e,n,o);break;case"data":if(t!=="object"){Va(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=Wa(""+n),e.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(i==="formAction"?(t!=="input"&&fe(e,t,"name",a.name,a,null),fe(e,t,"formEncType",a.formEncType,a,null),fe(e,t,"formMethod",a.formMethod,a,null),fe(e,t,"formTarget",a.formTarget,a,null)):(fe(e,t,"encType",a.encType,a,null),fe(e,t,"method",a.method,a,null),fe(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=Wa(""+n),e.setAttribute(i,n);break;case"onClick":n!=null&&(e.onclick=jt);break;case"onScroll":n!=null&&J("scroll",e);break;case"onScrollEnd":n!=null&&J("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(i=n.__html,i!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=i}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}i=Wa(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""+n):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":n===!0?e.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,n):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(i,n):e.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(i):e.setAttribute(i,n);break;case"popover":J("beforetoggle",e),J("toggle",e),Ga(e,"popover",n);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ga(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Wh.get(i)||i,Ga(e,i,n))}}function Zl(e,t,i,n,a,o){switch(i){case"style":Or(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(i=n.__html,i!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=i}}break;case"children":typeof n=="string"?nn(e,n):(typeof n=="number"||typeof n=="bigint")&&nn(e,""+n);break;case"onScroll":n!=null&&J("scroll",e);break;case"onScrollEnd":n!=null&&J("scrollend",e);break;case"onClick":n!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rr.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(a=i.endsWith("Capture"),t=i.slice(2,a?i.length-7:void 0),o=e[Je]||null,o=o!=null?o[i]:null,typeof o=="function"&&e.removeEventListener(t,o,a),typeof n=="function")){typeof o!="function"&&o!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,n,a);break e}i in e?e[i]=n:n===!0?e.setAttribute(i,""):Ga(e,i,n)}}}function Ye(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var n=!1,a=!1,o;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,o,s,i,null)}}a&&fe(e,t,"srcSet",i.srcSet,i,null),n&&fe(e,t,"src",i.src,i,null);return;case"input":J("invalid",e);var l=o=s=a=null,r=null,p=null;for(n in i)if(i.hasOwnProperty(n)){var b=i[n];if(b!=null)switch(n){case"name":a=b;break;case"type":s=b;break;case"checked":r=b;break;case"defaultChecked":p=b;break;case"value":o=b;break;case"defaultValue":l=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(h(137,t));break;default:fe(e,t,n,b,i,null)}}Hr(e,o,l,r,p,s,a,!1);return;case"select":J("invalid",e),n=s=o=null;for(a in i)if(i.hasOwnProperty(a)&&(l=i[a],l!=null))switch(a){case"value":o=l;break;case"defaultValue":s=l;break;case"multiple":n=l;default:fe(e,t,a,l,i,null)}t=o,i=s,e.multiple=!!n,t!=null?tn(e,!!n,t,!1):i!=null&&tn(e,!!n,i,!0);return;case"textarea":J("invalid",e),o=a=n=null;for(s in i)if(i.hasOwnProperty(s)&&(l=i[s],l!=null))switch(s){case"value":n=l;break;case"defaultValue":a=l;break;case"children":o=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:fe(e,t,s,l,i,null)}Lr(e,n,a,o);return;case"option":for(r in i)if(i.hasOwnProperty(r)&&(n=i[r],n!=null))switch(r){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:fe(e,t,r,n,i,null)}return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(n=0;n<ka.length;n++)J(ka[n],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in i)if(i.hasOwnProperty(p)&&(n=i[p],n!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,p,n,i,null)}return;default:if(ds(t)){for(b in i)i.hasOwnProperty(b)&&(n=i[b],n!==void 0&&Zl(e,t,b,n,i,void 0));return}}for(l in i)i.hasOwnProperty(l)&&(n=i[l],n!=null&&fe(e,t,l,n,i,null))}function bf(e,t,i,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,s=null,l=null,r=null,p=null,b=null;for(y in i){var x=i[y];if(i.hasOwnProperty(y)&&x!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=x;default:n.hasOwnProperty(y)||fe(e,t,y,null,n,x)}}for(var m in n){var y=n[m];if(x=i[m],n.hasOwnProperty(m)&&(y!=null||x!=null))switch(m){case"type":o=y;break;case"name":a=y;break;case"checked":p=y;break;case"defaultChecked":b=y;break;case"value":s=y;break;case"defaultValue":l=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:y!==x&&fe(e,t,m,y,n,x)}}cs(e,s,l,r,p,b,o,a);return;case"select":y=s=l=m=null;for(o in i)if(r=i[o],i.hasOwnProperty(o)&&r!=null)switch(o){case"value":break;case"multiple":y=r;default:n.hasOwnProperty(o)||fe(e,t,o,null,n,r)}for(a in n)if(o=n[a],r=i[a],n.hasOwnProperty(a)&&(o!=null||r!=null))switch(a){case"value":m=o;break;case"defaultValue":l=o;break;case"multiple":s=o;default:o!==r&&fe(e,t,a,o,n,r)}t=l,i=s,n=y,m!=null?tn(e,!!i,m,!1):!!n!=!!i&&(t!=null?tn(e,!!i,t,!0):tn(e,!!i,i?[]:"",!1));return;case"textarea":y=m=null;for(l in i)if(a=i[l],i.hasOwnProperty(l)&&a!=null&&!n.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:fe(e,t,l,null,n,a)}for(s in n)if(a=n[s],o=i[s],n.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case"value":m=a;break;case"defaultValue":y=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==o&&fe(e,t,s,a,n,o)}qr(e,m,y);return;case"option":for(var N in i)if(m=i[N],i.hasOwnProperty(N)&&m!=null&&!n.hasOwnProperty(N))switch(N){case"selected":e.selected=!1;break;default:fe(e,t,N,null,n,m)}for(r in n)if(m=n[r],y=i[r],n.hasOwnProperty(r)&&m!==y&&(m!=null||y!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:fe(e,t,r,m,n,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in i)m=i[L],i.hasOwnProperty(L)&&m!=null&&!n.hasOwnProperty(L)&&fe(e,t,L,null,n,m);for(p in n)if(m=n[p],y=i[p],n.hasOwnProperty(p)&&m!==y&&(m!=null||y!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:fe(e,t,p,m,n,y)}return;default:if(ds(t)){for(var pe in i)m=i[pe],i.hasOwnProperty(pe)&&m!==void 0&&!n.hasOwnProperty(pe)&&Zl(e,t,pe,void 0,n,m);for(b in n)m=n[b],y=i[b],!n.hasOwnProperty(b)||m===y||m===void 0&&y===void 0||Zl(e,t,b,m,n,y);return}}for(var g in i)m=i[g],i.hasOwnProperty(g)&&m!=null&&!n.hasOwnProperty(g)&&fe(e,t,g,null,n,m);for(x in n)m=n[x],y=i[x],!n.hasOwnProperty(x)||m===y||m==null&&y==null||fe(e,t,x,m,n,y)}function Ud(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var a=i[n],o=a.transferSize,s=a.initiatorType,l=a.duration;if(o&&l&&Ud(s)){for(s=0,l=a.responseEnd,n+=1;n<i.length;n++){var r=i[n],p=r.startTime;if(p>l)break;var b=r.transferSize,x=r.initiatorType;b&&Ud(x)&&(r=r.responseEnd,s+=b*(r<l?1:(l-p)/(r-p)))}if(--n,t+=8*(o+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jl=null,$l=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function jd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function er(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tr=null;function wf(){var e=window.event;return e&&e.type==="popstate"?e===tr?!1:(tr=e,!0):(tr=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,xf=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,Tf=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(Af)}:Vd;function Af(e){setTimeout(function(){throw e})}function Ti(e){return e==="head"}function Wd(e,t){var i=t,n=0;do{var a=i.nextSibling;if(e.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"||i==="/&"){if(n===0){e.removeChild(a),Bn(t);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")Da(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Da(i);for(var o=i.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Yn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&o.rel.toLowerCase()==="stylesheet"||i.removeChild(o),o=s}}else i==="body"&&Da(e.ownerDocument.body);i=a}while(i);Bn(t)}function Yd(e,t){var i=e;e=0;do{var n=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=n}while(i)}function ir(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":ir(i),ls(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Cf(e,t,i,n){for(;e.nodeType===1;){var a=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Yn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function kf(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Mt(e.nextSibling),e===null))return null;return e}function Qd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function nr(e){return e.data==="$?"||e.data==="$~"}function ar(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mf(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var n=function(){t(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var or=null;function Fd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Mt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Kd(e,t,i){switch(t=jo(i),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function Da(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ls(e)}var Dt=new Map,Zd=new Set;function Go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ni=M.d;M.d={f:Df,r:Ef,D:Rf,C:Nf,L:zf,m:If,X:Hf,S:Bf,M:qf};function Df(){var e=ni.f(),t=Io();return e||t}function Ef(e){var t=Ji(e);t!==null&&t.tag===5&&t.type==="form"?fu(t):ni.r(e)}var Nn=typeof document>"u"?null:document;function Jd(e,t,i){var n=Nn;if(n&&typeof t=="string"&&t){var a=St(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof i=="string"&&(a+='[crossorigin="'+i+'"]'),Zd.has(a)||(Zd.add(a),e={rel:e,crossOrigin:i,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),Ye(t,"link",e),He(t),n.head.appendChild(t)))}}function Rf(e){ni.D(e),Jd("dns-prefetch",e,null)}function Nf(e,t){ni.C(e,t),Jd("preconnect",e,t)}function zf(e,t,i){ni.L(e,t,i);var n=Nn;if(n&&e&&t){var a='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&i&&i.imageSrcSet?(a+='[imagesrcset="'+St(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(a+='[imagesizes="'+St(i.imageSizes)+'"]')):a+='[href="'+St(e)+'"]';var o=a;switch(t){case"style":o=zn(e);break;case"script":o=In(e)}Dt.has(o)||(e=R({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Dt.set(o,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Ea(o))||t==="script"&&n.querySelector(Ra(o))||(t=n.createElement("link"),Ye(t,"link",e),He(t),n.head.appendChild(t)))}}function If(e,t){ni.m(e,t);var i=Nn;if(i&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',o=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=In(e)}if(!Dt.has(o)&&(e=R({rel:"modulepreload",href:e},t),Dt.set(o,e),i.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ra(o)))return}n=i.createElement("link"),Ye(n,"link",e),He(n),i.head.appendChild(n)}}}function Bf(e,t,i){ni.S(e,t,i);var n=Nn;if(n&&e){var a=$i(n).hoistableStyles,o=zn(e);t=t||"default";var s=a.get(o);if(!s){var l={loading:0,preload:null};if(s=n.querySelector(Ea(o)))l.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Dt.get(o))&&sr(e,i);var r=s=n.createElement("link");He(r),Ye(r,"link",e),r._p=new Promise(function(p,b){r.onload=p,r.onerror=b}),r.addEventListener("load",function(){l.loading|=1}),r.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Vo(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:l},a.set(o,s)}}}function Hf(e,t){ni.X(e,t);var i=Nn;if(i&&e){var n=$i(i).hoistableScripts,a=In(e),o=n.get(a);o||(o=i.querySelector(Ra(a)),o||(e=R({src:e,async:!0},t),(t=Dt.get(a))&&lr(e,t),o=i.createElement("script"),He(o),Ye(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}function qf(e,t){ni.M(e,t);var i=Nn;if(i&&e){var n=$i(i).hoistableScripts,a=In(e),o=n.get(a);o||(o=i.querySelector(Ra(a)),o||(e=R({src:e,async:!0,type:"module"},t),(t=Dt.get(a))&&lr(e,t),o=i.createElement("script"),He(o),Ye(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}function $d(e,t,i,n){var a=(a=F.current)?Go(a):null;if(!a)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=zn(i.href),i=$i(a).hoistableStyles,n=i.get(t),n||(n={type:"style",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=zn(i.href);var o=$i(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Ea(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Dt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Dt.set(e,i),o||Lf(a,e,i,s.state))),t&&n===null)throw Error(h(528,""));return s}if(t&&n!==null)throw Error(h(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=In(i),i=$i(a).hoistableScripts,n=i.get(t),n||(n={type:"script",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function zn(e){return'href="'+St(e)+'"'}function Ea(e){return'link[rel="stylesheet"]['+e+"]"}function eh(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Lf(e,t,i,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ye(t,"link",i),He(t),e.head.appendChild(t))}function In(e){return'[src="'+St(e)+'"]'}function Ra(e){return"script[async]"+e}function th(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(i.href)+'"]');if(n)return t.instance=n,He(n),n;var a=R({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),He(n),Ye(n,"style",a),Vo(n,i.precedence,e),t.instance=n;case"stylesheet":a=zn(i.href);var o=e.querySelector(Ea(a));if(o)return t.state.loading|=4,t.instance=o,He(o),o;n=eh(i),(a=Dt.get(a))&&sr(n,a),o=(e.ownerDocument||e).createElement("link"),He(o);var s=o;return s._p=new Promise(function(l,r){s.onload=l,s.onerror=r}),Ye(o,"link",n),t.state.loading|=4,Vo(o,i.precedence,e),t.instance=o;case"script":return o=In(i.src),(a=e.querySelector(Ra(o)))?(t.instance=a,He(a),a):(n=i,(a=Dt.get(o))&&(n=R({},i),lr(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),He(a),Ye(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Vo(n,i.precedence,e));return t.instance}function Vo(e,t,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,o=a,s=0;s<n.length;s++){var l=n[s];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _o=null;function ih(e,t,i){if(_o===null){var n=new Map,a=_o=new Map;a.set(i,n)}else a=_o,n=a.get(i),n||(n=new Map,a.set(i,n));if(n.has(e))return n;for(n.set(e,null),i=i.getElementsByTagName(e),a=0;a<i.length;a++){var o=i[a];if(!(o[Yn]||o[Ge]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var l=n.get(s);l?l.push(o):n.set(s,[o])}}return n}function nh(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Pf(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ah(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Of(e,t,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var a=zn(n.href),o=t.querySelector(Ea(a));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wo.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=o,He(o);return}o=t.ownerDocument||t,n=eh(n),(a=Dt.get(a))&&sr(n,a),o=o.createElement("link"),He(o);var s=o;s._p=new Promise(function(l,r){s.onload=l,s.onerror=r}),Ye(o,"link",n),i.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Wo.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var rr=0;function Uf(e,t){return e.stylesheets&&e.count===0&&Qo(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var n=setTimeout(function(){if(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&rr===0&&(rr=62500*Sf());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>rr?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Wo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yo=null;function Qo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yo=new Map,t.forEach(jf,e),Yo=null,Wo.call(e))}function jf(e,t){if(!(t.state.loading&4)){var i=Yo.get(e);if(i)var n=i.get(null);else{i=new Map,Yo.set(e,i);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var s=a[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(i.set(s.dataset.precedence,s),n=s)}n&&i.set(null,n)}a=t.instance,s=a.getAttribute("data-precedence"),o=i.get(s)||n,o===n&&i.set(null,a),i.set(s,a),this.count++,n=Wo.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Na={$$typeof:Me,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Gf(e,t,i,n,a,o,s,l,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function oh(e,t,i,n,a,o,s,l,r,p,b,x){return e=new Gf(e,t,i,s,r,p,b,x,l),t=1,o===!0&&(t|=24),o=dt(3,null,null,t),e.current=o,o.stateNode=e,t=js(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:i,cache:t},Ws(o),e}function sh(e){return e?(e=un,e):un}function lh(e,t,i,n,a,o){a=sh(a),n.context===null?n.context=a:n.pendingContext=a,n=hi(t),n.payload={element:i},o=o===void 0?null:o,o!==null&&(n.callback=o),i=gi(e,n,t),i!==null&&(at(i,e,t),ca(i,e,t))}function rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function cr(e,t){rh(e,t),(e=e.alternate)&&rh(e,t)}function ch(e){if(e.tag===13||e.tag===31){var t=Hi(e,67108864);t!==null&&at(t,e,67108864),cr(e,67108864)}}function uh(e){if(e.tag===13||e.tag===31){var t=mt();t=as(t);var i=Hi(e,t);i!==null&&at(i,e,t),cr(e,t)}}var Fo=!0;function Vf(e,t,i,n){var a=v.T;v.T=null;var o=M.p;try{M.p=2,ur(e,t,i,n)}finally{M.p=o,v.T=a}}function _f(e,t,i,n){var a=v.T;v.T=null;var o=M.p;try{M.p=8,ur(e,t,i,n)}finally{M.p=o,v.T=a}}function ur(e,t,i,n){if(Fo){var a=dr(n);if(a===null)Kl(e,t,n,Xo,i),hh(e,n);else if(Yf(a,e,t,i,n))n.stopPropagation();else if(hh(e,n),t&4&&-1<Wf.indexOf(e)){for(;a!==null;){var o=Ji(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Ri(o.pendingLanes);if(s!==0){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;s;){var r=1<<31-ct(s);l.entanglements[1]|=r,s&=~r}Pt(o),(re&6)===0&&(No=je()+500,Ca(0))}}break;case 31:case 13:l=Hi(o,2),l!==null&&at(l,o,2),Io(),cr(o,2)}if(o=dr(n),o===null&&Kl(e,t,n,Xo,i),o===a)break;a=o}a!==null&&n.stopPropagation()}else Kl(e,t,n,null,i)}}function dr(e){return e=gs(e),hr(e)}var Xo=null;function hr(e){if(Xo=null,e=Zi(e),e!==null){var t=G(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=P(t),e!==null)return e;e=null}else if(i===31){if(e=Q(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xo=e,null}function dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case A:return 2;case _:return 8;case ne:case vt:return 32;case Gn:return 268435456;default:return 32}default:return 32}}var gr=!1,Ai=null,Ci=null,ki=null,za=new Map,Ia=new Map,Mi=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(t.pointerId)}}function Ba(e,t,i,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ji(t),t!==null&&ch(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Yf(e,t,i,n,a){switch(t){case"focusin":return Ai=Ba(Ai,e,t,i,n,a),!0;case"dragenter":return Ci=Ba(Ci,e,t,i,n,a),!0;case"mouseover":return ki=Ba(ki,e,t,i,n,a),!0;case"pointerover":var o=a.pointerId;return za.set(o,Ba(za.get(o)||null,e,t,i,n,a)),!0;case"gotpointercapture":return o=a.pointerId,Ia.set(o,Ba(Ia.get(o)||null,e,t,i,n,a)),!0}return!1}function gh(e){var t=Zi(e.target);if(t!==null){var i=G(t);if(i!==null){if(t=i.tag,t===13){if(t=P(i),t!==null){e.blockedOn=t,Mr(e.priority,function(){uh(i)});return}}else if(t===31){if(t=Q(i),t!==null){e.blockedOn=t,Mr(e.priority,function(){uh(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=dr(e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);hs=n,i.target.dispatchEvent(n),hs=null}else return t=Ji(i),t!==null&&ch(t),e.blockedOn=i,!1;t.shift()}return!0}function fh(e,t,i){Ko(e)&&i.delete(t)}function Qf(){gr=!1,Ai!==null&&Ko(Ai)&&(Ai=null),Ci!==null&&Ko(Ci)&&(Ci=null),ki!==null&&Ko(ki)&&(ki=null),za.forEach(fh),Ia.forEach(fh)}function Zo(e,t){e.blockedOn===t&&(e.blockedOn=null,gr||(gr=!0,k.unstable_scheduleCallback(k.unstable_NormalPriority,Qf)))}var Jo=null;function ph(e){Jo!==e&&(Jo=e,k.unstable_scheduleCallback(k.unstable_NormalPriority,function(){Jo===e&&(Jo=null);for(var t=0;t<e.length;t+=3){var i=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(hr(n||i)===null)continue;break}var o=Ji(i);o!==null&&(e.splice(t,3),t-=3,dl(o,{pending:!0,data:a,method:i.method,action:n},n,a))}}))}function Bn(e){function t(r){return Zo(r,e)}Ai!==null&&Zo(Ai,e),Ci!==null&&Zo(Ci,e),ki!==null&&Zo(ki,e),za.forEach(t),Ia.forEach(t);for(var i=0;i<Mi.length;i++){var n=Mi[i];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Mi.length&&(i=Mi[0],i.blockedOn===null);)gh(i),i.blockedOn===null&&Mi.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var a=i[n],o=i[n+1],s=a[Je]||null;if(typeof o=="function")s||ph(i);else if(s){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,s=o[Je]||null)l=s.formAction;else if(hr(a)!==null)continue}else l=s.action;typeof l=="function"?i[n+1]=l:(i.splice(n,3),n-=3),ph(i)}}}function mh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function fr(e){this._internalRoot=e}$o.prototype.render=fr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var i=t.current,n=mt();lh(i,n,e,t,null,null)},$o.prototype.unmount=fr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lh(e.current,2,null,e,null,null),Io(),t[Ki]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=kr();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Mi.length&&t!==0&&t<Mi[i].priority;i++);Mi.splice(i,0,e),i===0&&gh(e)}};var yh=K.version;if(yh!=="19.2.0")throw Error(h(527,yh,"19.2.0"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var Ff={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!es.isDisabled&&es.supportsFiber)try{Vn=es.inject(Ff),rt=es}catch{}}return qa.createRoot=function(e,t){if(!O(e))throw Error(h(299));var i=!1,n="",a=Au,o=Cu,s=ku;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=oh(e,1,!1,null,null,i,n,null,a,o,s,mh),e[Ki]=t.current,Xl(e),new fr(t)},qa.hydrateRoot=function(e,t,i){if(!O(e))throw Error(h(299));var n=!1,a="",o=Au,s=Cu,l=ku,r=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onUncaughtError!==void 0&&(o=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(l=i.onRecoverableError),i.formState!==void 0&&(r=i.formState)),t=oh(e,1,!0,t,i??null,n,a,r,o,s,l,mh),t.context=sh(null),i=t.current,n=mt(),n=as(n),a=hi(n),a.callback=null,gi(i,a,n),i=n,t.current.lanes=i,Wn(t,i),Pt(t),e[Ki]=t.current,Xl(e),new $o(t)},qa.version="19.2.0",qa}var Mh;function ap(){if(Mh)return yr.exports;Mh=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(K){console.error(K)}}return k(),yr.exports=np(),yr.exports}var op=ap();const sp=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
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
        `}]}],lp={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0},{question:"Which interface connects the BTS and BSC in GSM?",options:["Um Interface","A Interface","Abis Interface","B Interface"],answer:2},{question:"What is the maximum data rate of GPRS (theoretical)?",options:["9.6 kbps","56 kbps","171.2 kbps","2 Mbps"],answer:2},{question:"Which component in GPRS is equivalent to the MSC in GSM?",options:["GGSN","SGSN","PCU","HLR"],answer:1},{question:"In Mobile Computing, what does 'Ubiquitous Computing' refer to?",options:["Computing that is visible everywhere","Computing that is integrated into the environment and invisible to the user","Computing using only mobile phones","Cloud computing"],answer:1},{question:"What is the function of the Equipment Identity Register (EIR)?",options:["Stores user billing info","Stores the IMEI numbers of valid, stolen, or faulty devices","Stores the current location of the user","Stores SMS messages"],answer:1},{question:"Which multiple access technique does GSM use?",options:["FDMA only","TDMA only","CDMA","Combination of FDMA and TDMA"],answer:3},{question:"What is a 'Cell' in cellular networks?",options:["A battery","The geographic area covered by a single Base Station","A mobile phone","A packet of data"],answer:1}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1},{question:"What is the purpose of the NAV (Network Allocation Vector) in IEEE 802.11?",options:["To route packets","To assign IP addresses","To indicate how long the channel will be busy (Virtual Carrier Sensing)","To encrypt data"],answer:2},{question:"In Mobile IP, what is 'Triangular Routing'?",options:["Routing between 3 routers","The path CN -> HA -> FA -> MN -> CN","A routing loop","Routing using 3 antennas"],answer:1},{question:"Which protocol is used for Agent Discovery in Mobile IP?",options:["ARP","ICMP Router Discovery","DHCP","DNS"],answer:1},{question:"What is 'Minimal Encapsulation' in Mobile IP?",options:["No encryption","A tunneling method with less overhead than IP-in-IP","Sending small packets","Compressing headers"],answer:1},{question:"Which IEEE standard defines Wireless LANs (Wi-Fi)?",options:["802.3","802.15","802.11","802.16"],answer:2},{question:"What is the Near-Far problem primarily associated with?",options:["TDMA","FDMA","CDMA","SDMA"],answer:2},{question:"What is the function of the Foreign Agent (FA)?",options:["It stores the user's permanent profile","It acts as a router on the visited network and delivers packets to the MN","It assigns the Home Address","It manages the radio spectrum"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2},{question:"What is the main disadvantage of I-TCP?",options:["It is slow","It violates end-to-end TCP semantics","It requires new hardware","It doesn't work with IPv6"],answer:1},{question:"What is 'Fast Retransmit' in TCP?",options:["Retransmitting after timeout","Retransmitting after receiving 3 duplicate ACKs","Sending data twice","Using UDP for retransmission"],answer:1},{question:"Which TCP mechanism is designed to distinguish between congestion loss and wireless error loss?",options:["Standard TCP","TCP Reno","Explicit Congestion Notification (ECN) / TCP Westwood","UDP"],answer:2},{question:"In WAP, which layer replaces HTTP?",options:["WAE","WSP (Wireless Session Protocol)","WTP","WDP"],answer:1},{question:"What is a Piconet in Bluetooth?",options:["A large network","A network of up to 8 devices (1 Master, 7 Slaves)","A network of routers","A type of antenna"],answer:1},{question:"Which layer in WAP provides security equivalent to TLS/SSL?",options:["WDP","WTP","WTLS","WAE"],answer:2},{question:"What is the frequency band used by Bluetooth?",options:["5 GHz","900 MHz","2.4 GHz ISM","60 GHz"],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2},{question:"What is 'Data Hoarding'?",options:["Deleting data","Prefetching data into cache before disconnection","Compressing data","Encrypting data"],answer:1},{question:"Which synchronization protocol is 'Pessimistic'?",options:["One that allows conflicts","One that locks data to prevent conflicts","One that uses timestamps","One that uses version vectors"],answer:1},{question:"What is a 'Broadcast Disk'?",options:["A physical disk","A cyclic broadcast of data that simulates a rotating disk","A satellite dish","A CD-ROM"],answer:1},{question:"In the context of Mobile Databases, what is a 'Tentative Transaction'?",options:["A transaction that has been committed","A transaction executed on a disconnected mobile unit that is not yet confirmed by the server","A failed transaction","A read-only transaction"],answer:1},{question:"What is 'Kangaroo Transaction'?",options:["A fast transaction","A transaction that hops from one Base Station to another with the user","A transaction that jumps steps","A large transaction"],answer:1},{question:"What is the primary goal of Caching in mobile computing?",options:["To use more memory","To reduce access latency and bandwidth usage","To increase server load","To slow down the device"],answer:1},{question:"Which strategy is used to maintain cache consistency?",options:["Random Deletion","Invalidation Reports","Formatting","Rebooting"],answer:1}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1},{question:"What is a 'Blackhole Attack' in MANETs?",options:["A physical hole in the device","A malicious node drops all packets it receives","A virus","A power failure"],answer:1},{question:"What does DSR stand for?",options:["Dynamic Source Routing","Direct Source Routing","Distance Source Routing","Dynamic Static Routing"],answer:0},{question:"Which routing protocol uses a 'Height' metric and is loop-free?",options:["AODV","DSR","TORA","DSDV"],answer:2},{question:"What is J2ME primarily used for?",options:["Desktop applications","Server-side scripting","Mobile and embedded applications","Web design"],answer:2},{question:"In J2ME, what is a MIDlet?",options:["A small device","A Java application for mobile devices","A virus","A database"],answer:1},{question:"What is the 'Wormhole Attack'?",options:["Tunneling packets to another location to disrupt routing","Eating data","Creating a loop","Blocking signals"],answer:0},{question:"Which configuration in J2ME is for devices with limited resources (like cell phones)?",options:["CDC (Connected Device Configuration)","CLDC (Connected Limited Device Configuration)","J2SE","J2EE"],answer:1}]},rp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
          `}]}]},cp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 2",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is GPRS?",answer:"<strong>General Packet Radio Service (GPRS)</strong> is a packet-oriented mobile data standard on the 2G and 3G cellular communication network's global system for mobile communications (GSM)."},{unit:"I",id:2,question:"Define Handoff.",answer:"<strong>Handoff</strong> (or Handover) is the process of transferring an ongoing call or data session from one channel connected to the core network to another channel."},{unit:"II",id:3,question:"What is the Near-Far Problem?",answer:"<strong>Explanation:</strong> In CDMA, a strong signal from a near mobile unit masks the weak signal from a far mobile unit at the base station."},{unit:"II",id:4,question:"What is Tunneling?",answer:"<strong>Definition:</strong> Tunneling is a mechanism used to ship a packet to a mobile node. It involves encapsulation of the original IP packet inside another IP packet."},{unit:"III",id:5,question:"What is Mobile TCP?",answer:"<strong>Mobile TCP (M-TCP)</strong> is a protocol designed to handle frequent disconnections. It splits the connection and forces the sender into persist mode during disconnection."},{unit:"III",id:6,question:"Define Caching in Mobile Computing.",answer:"<strong>Caching:</strong> Storing frequently accessed data locally on the mobile device to reduce access latency and bandwidth usage."},{unit:"IV",id:7,question:"What is a Broadcast Disk?",answer:"<strong>Broadcast Disk:</strong> A technique where data is cyclically broadcasted, appearing like a rotating disk to the client. Popular data is repeated more often."},{unit:"IV",id:8,question:"What is Data Synchronization?",answer:"<strong>Definition:</strong> The process of establishing consistency among data from a source to a target data storage and vice versa and the continuous harmonization of the data over time."},{unit:"V",id:9,question:"What is AODV?",answer:"<strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive routing protocol for MANETs that establishes a route to a destination only on demand."},{unit:"V",id:10,question:"What is Service Discovery?",answer:"<strong>Service Discovery:</strong> The automatic detection of devices and services offered by these devices on a computer network."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GPRS Architecture with a neat diagram.",answer:`
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
          `}]}]},up={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 3",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Differentiate between User Mobility and Device Portability.",answer:"<strong>User Mobility:</strong> The user can move between different physical locations and use different devices (e.g., logging into Gmail from any PC).<br/><strong>Device Portability:</strong> The device itself can be moved to different locations while maintaining connectivity (e.g., a smartphone)."},{unit:"I",id:2,question:"What is Spread Spectrum?",answer:"<strong>Spread Spectrum:</strong> A technique where a signal is transmitted on a bandwidth much larger than the frequency content of the original information. This minimizes interference, prevents jamming, and improves security (e.g., CDMA)."},{unit:"II",id:3,question:"What is Frequency Reuse?",answer:"<strong>Frequency Reuse:</strong> The practice of using the same radio frequencies in different geographic areas (cells) that are separated by sufficient distance to avoid interference. This increases the total capacity of the network."},{unit:"II",id:4,question:"Define Agent Advertisement.",answer:"<strong>Agent Advertisement:</strong> A method in Mobile IP where Home Agents (HA) and Foreign Agents (FA) periodically broadcast their presence (using ICMP Router Discovery) to let Mobile Nodes know which network they are currently in."},{unit:"III",id:5,question:"What is Fast Retransmit?",answer:"<strong>Fast Retransmit:</strong> A TCP enhancement where the sender retransmits a packet immediately after receiving 3 duplicate ACKs, without waiting for the timeout timer to expire. It assumes the packet was lost, not delayed."},{unit:"III",id:6,question:"Define Transaction Oriented TCP.",answer:"<strong>T-TCP:</strong> A TCP extension designed to make TCP more efficient for short transactions (request-response). It combines the connection setup (SYN), data transfer, and connection teardown (FIN) into fewer packets."},{unit:"IV",id:7,question:"What is Indexing in data dissemination?",answer:"<strong>Indexing:</strong> A power-saving technique where a directory (index) of data locations is broadcasted before the actual data. Clients read the index, sleep, and wake up only when their desired data arrives."},{unit:"IV",id:8,question:"What is Cache Invalidation?",answer:"<strong>Cache Invalidation:</strong> The process of ensuring data consistency. When data on the server changes, the server must notify clients to remove or mark as invalid their local cached copies."},{unit:"V",id:9,question:"What is a Wormhole Attack?",answer:"<strong>Wormhole Attack:</strong> A severe attack in MANETs where two attackers connected by a high-speed link record packets at one location and replay them at another, creating a false shortcut that disrupts routing."},{unit:"V",id:10,question:"Define J2ME.",answer:"<strong>Java 2 Micro Edition (J2ME):</strong> A Java platform designed for embedded systems and mobile devices (like old Nokias). It provides a lightweight environment (KVM) for running applications with limited memory and processing power."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Discuss the evolution of Mobile Communication from 1G to 5G.",answer:`
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
          `}]}]},dp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 4 (Advanced)",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is the Hidden Terminal Problem?",answer:"<strong>Hidden Terminal Problem:</strong> Occurs when two nodes (A and C) can hear the Access Point (B) but cannot hear each other. If both transmit to B simultaneously, a collision occurs at B."},{unit:"I",id:2,question:"Define Multipath Propagation.",answer:"<strong>Multipath Propagation:</strong> A phenomenon where radio signals reach the receiving antenna by two or more paths (reflection, diffraction) causing fading and interference."},{unit:"II",id:3,question:"What is Triangular Routing?",answer:"<strong>Triangular Routing:</strong> The inefficient path a packet takes in Mobile IP: Correspondent -> Home Agent -> Foreign Agent -> Mobile Node, instead of a direct path."},{unit:"II",id:4,question:"Define Slow Start in TCP.",answer:"<strong>Slow Start:</strong> A TCP congestion control algorithm where the sender starts with a small congestion window and doubles it every round-trip time (exponential growth) to gauge network capacity."},{unit:"III",id:5,question:"What is Selective Tuning?",answer:"<strong>Selective Tuning:</strong> A power-saving technique where the mobile device powers on its receiver only for short periods to receive the specific data it requested, staying in 'doze' mode otherwise."},{unit:"III",id:6,question:"Define Hoarding.",answer:"<strong>Hoarding:</strong> Prefetching large amounts of data into the mobile device's cache before a predicted disconnection (e.g., entering a tunnel) to allow continued operation."},{unit:"IV",id:7,question:"What is a ZRP (Zone Routing Protocol)?",answer:"<strong>ZRP:</strong> A hybrid MANET routing protocol. It uses proactive routing within a local 'zone' (neighborhood) and reactive routing for destinations outside the zone."},{unit:"IV",id:8,question:"What is the count-to-infinity problem?",answer:"<strong>Count-to-Infinity:</strong> A routing loop problem in distance-vector protocols where nodes endlessly increment the hop count to a unreachable destination."},{unit:"V",id:9,question:"Define MIDP in J2ME.",answer:"<strong>MIDP (Mobile Information Device Profile):</strong> A J2ME profile that defines the user interface, networking, and storage APIs for mobile phones (MIDlets)."},{unit:"V",id:10,question:"What is Bluetooth profile?",answer:"<strong>Bluetooth Profile:</strong> A specification that defines how devices use Bluetooth to achieve a specific task (e.g., A2DP for audio, HFP for hands-free calling)."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the Hidden and Exposed Terminal Problems in IEEE 802.11 and the solution (MACA).",answer:`
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
          `}]}]},hp=[{category:"🏆 The Golden Answer Framework",tips:[{title:"The Universal 5-Step Structure",content:`
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
        `}]}],gp=[{id:1,unit:"I",front:"Mobile Computing Definition",back:`
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
    `}],fp=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundation of measurement systems, defining sensors and transducers, their classification, and static characteristics. It then dives deep into Electromechanical sensors, specifically Resistive (Potentiometers, Strain Gauges), Inductive (LVDT), and Capacitive sensors.</p>",topics:[{title:"1. Sensors & Transducers Basics",content:`
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
        `}]}],pp={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2},{question:"Gauge Factor of a Strain Gauge is given by:",options:["(ΔR/R) * ε","(ΔR/R) / ε","(ΔL/L) / ε","None"],answer:1},{question:"LVDT works on the principle of:",options:["Variable Resistance","Variable Capacitance","Variable Inductance (Mutual)","Piezoelectric Effect"],answer:2},{question:"Capacitive transducers are generally used for:",options:["Static measurement","Dynamic measurement","Both","None"],answer:1}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1},{question:"RTD is made of:",options:["Copper","Nickel","Platinum","All of the above"],answer:2},{question:"Thermistors generally have:",options:["Positive Temperature Coefficient","Negative Temperature Coefficient","Zero Temperature Coefficient","None"],answer:1},{question:"Which sensor is best for non-contact high temperature measurement?",options:["Thermocouple","RTD","Radiation Pyrometer","Thermistor"],answer:2},{question:"The relationship between Resistance and Temperature in a Thermistor is:",options:["Linear","Exponential","Parabolic","Constant"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1},{question:"Magnetostriction is the phenomenon where a material changes its:",options:["Color","Dimensions","Resistance","Capacitance"],answer:1},{question:"Which material is commonly used for Magnetostrictive sensors?",options:["Silicon","Quartz","Nickel / Terfenol-D","Platinum"],answer:2},{question:"Hall Voltage is proportional to:",options:["Current only","Magnetic Field only","Product of Current and Magnetic Field","None"],answer:2},{question:"Piezoelectric sensors cannot measure:",options:["Dynamic Pressure","Acceleration","Static Pressure","Vibration"],answer:2}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0},{question:"A Photodiode is operated in:",options:["Forward Bias","Reverse Bias","Zero Bias","None"],answer:1},{question:"pH is a measure of:",options:["OH- ion concentration","H+ ion concentration","Total ion concentration","Conductivity"],answer:1},{question:"The standard reference electrode used in pH measurement is:",options:["Hydrogen Electrode","Calomel Electrode","Glass Electrode","Platinum Electrode"],answer:1},{question:"Solar cells work on:",options:["Photoconductive Effect","Photovoltaic Effect","Photoemissive Effect","None"],answer:1}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1},{question:"MEMS stands for:",options:["Micro Electronic Magnetic Systems","Micro Electro Mechanical Systems","Miniature Energy Management System","None"],answer:1},{question:"Which etching technique creates V-grooves in Silicon?",options:["Isotropic Etching","Anisotropic Etching","Plasma Etching","Sputtering"],answer:1},{question:"The IEEE standard for Smart Transducer Interface is:",options:["IEEE 802.11","IEEE 1451","IEEE 754","IEEE 488"],answer:1},{question:"Bulk Micromachining involves removing material from:",options:["Surface layer","Substrate","Oxide layer","None"],answer:1}]},mp={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer with examples.",answer:`
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
                    `}]}]},yp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"ELECTRONIC SENSORS - MODEL PAPER 2",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Active and Passive Transducers with examples.",answer:"<strong>Active Transducers:</strong> Generate their own electrical output (voltage/current) without external power (e.g., Thermocouple, Piezoelectric).<br><strong>Passive Transducers:</strong> Require an external power source to operate (e.g., Strain Gauge, LVDT)."},{unit:"I",id:2,question:"What is the principle of an Inductive Transducer?",answer:"It works on the principle of change in inductance (L) due to a change in magnetic flux, permeability, or dimensions. <strong>L = (N²μA) / l</strong>."},{unit:"II",id:3,question:"What is a Thermistor? Mention its types.",answer:"A <strong>Thermistor</strong> (Thermal Resistor) is a temperature-sensitive resistor made of semiconductor material.<br>Types: <strong>NTC</strong> (Negative Temperature Coefficient) and <strong>PTC</strong> (Positive Temperature Coefficient)."},{unit:"II",id:4,question:"What is the Peltier Effect?",answer:"The <strong>Peltier Effect</strong> states that when an electric current flows through a junction of two dissimilar metals, heat is either absorbed or evolved at the junction, depending on the direction of current."},{unit:"III",id:5,question:"Define Magnetostriction.",answer:"<strong>Magnetostriction</strong> is the property of ferromagnetic materials that causes them to change their shape or dimensions during the process of magnetization."},{unit:"III",id:6,question:"What is the Piezoelectric Effect?",answer:"The generation of an electric charge across certain crystals (like Quartz) when subjected to mechanical stress is called the <strong>Piezoelectric Effect</strong>."},{unit:"IV",id:7,question:"What is a Phototransistor?",answer:"A <strong>Phototransistor</strong> is a light-sensitive transistor. It is similar to a BJT but with a large base area exposed to light. It amplifies the current generated by light."},{unit:"IV",id:8,question:"Define Conductivity of a solution.",answer:"<strong>Conductivity</strong> is the measure of a solution's ability to conduct electricity. It depends on the concentration of ions in the solution. Unit: Siemens per meter (S/m)."},{unit:"V",id:9,question:"What is MEMS?",answer:"<strong>MEMS (Micro-Electro-Mechanical Systems)</strong> is a technology that integrates mechanical and electrical components (sensors, actuators, electronics) on a microscopic scale (micrometers) on a silicon chip."},{unit:"V",id:10,question:"What is the function of a Knock Sensor?",answer:"A <strong>Knock Sensor</strong> detects engine knocking or detonation (abnormal combustion) by sensing high-frequency vibrations and sends a signal to the ECU to adjust ignition timing."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the construction and working of a Linear Potentiometer (Resistive Transducer).",answer:`
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
                    `}]}]},vp=[{category:"General Exam Strategy 🎯",tips:[{title:"The 'Diagram First' Rule",content:"In Electronic Sensors, **Diagrams are King**. Even if the question asks for 'Explain the principle', start with a neat circuit diagram or block diagram. It creates an immediate positive impression."},{title:"Structure Your Answers",content:`Don't write huge paragraphs. Use this standard structure for every sensor:
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
- For Thermocouples: Mention **Cold Junction Compensation**.`},{title:"Bridge Circuits",content:"Don't just draw the sensor. Draw the **Signal Conditioning Circuit** (Wheatstone Bridge or Op-Amp) connected to it. This shows deep understanding."},{title:"Real-World Examples",content:"Add a 'Practical Note'. E.g., for Accelerometers, mention 'Used in Airbag deployment systems'. For LVDT, mention 'Used in CNC machines'."}]}],bp=[{id:1,unit:"I",front:"Sensor",back:'<div class="fc-content"><p>A device that detects a physical parameter and converts it into a signal (usually electrical).</p></div>'},{id:2,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>A device that converts energy from one form to another (e.g., Microphone: Sound -> Electrical).</p></div>'},{id:3,unit:"I",front:"Active Transducer",back:'<div class="fc-content"><p>Self-generating. Does NOT require external power.<br/><em>Ex: Thermocouple, Piezoelectric.</em></p></div>'},{id:4,unit:"I",front:"Passive Transducer",back:'<div class="fc-content"><p>Requires external power source to operate.<br/><em>Ex: Strain Gauge, LVDT, Thermistor.</em></p></div>'},{id:5,unit:"I",front:"Resolution",back:'<div class="fc-content"><p>The smallest change in input that a sensor can detect.</p></div>'},{id:6,unit:"I",front:"Sensitivity",back:'<div class="fc-content"><p>Ratio of change in output to change in input.<br/><strong>S = ΔOutput / ΔInput</strong></p></div>'},{id:7,unit:"I",front:"Linearity",back:'<div class="fc-content"><p>The closeness of the calibration curve to a straight line.</p></div>'},{id:8,unit:"I",front:"Hysteresis",back:'<div class="fc-content"><p>The difference in output for the same input when approached from increasing vs decreasing directions.</p></div>'},{id:9,unit:"I",front:"Piezoresistive Effect",back:'<div class="fc-content"><p>Change in electrical resistance of a material when mechanical strain is applied.</p></div>'},{id:10,unit:"I",front:"Gauge Factor (GF)",back:'<div class="fc-content"><p>Sensitivity of a Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong><br/>Ideally ~2 for metals.</p></div>'},{id:11,unit:"I",front:"Wheatstone Bridge",back:'<div class="fc-content"><p>Circuit used to convert small resistance changes (ΔR) into measurable voltage changes.</p></div>'},{id:12,unit:"I",front:"LVDT",back:'<div class="fc-content"><p><strong>Linear Variable Differential Transformer</strong>.<br/>Inductive sensor for linear displacement.</p></div>'},{id:13,unit:"I",front:"LVDT Principle",back:'<div class="fc-content"><p>Mutual Induction. Output voltage depends on the position of the magnetic core linking Primary and Secondary coils.</p></div>'},{id:14,unit:"I",front:"LVDT Null Position",back:'<div class="fc-content"><p>Core at center. Flux in S1 = Flux in S2.<br/><strong>Vout = Vs1 - Vs2 = 0</strong>.</p></div>'},{id:15,unit:"I",front:"Capacitive Sensor Formula",back:`<div class="fc-content"><p><strong>C = (εA) / d</strong><br/>Sensitivity is high for small changes in 'd'.</p></div>`},{id:16,unit:"II",front:"Bimetallic Strip",back:'<div class="fc-content"><p>Two metals with different coefficients of expansion bonded together. Bends when heated.</p></div>'},{id:17,unit:"II",front:"RTD",back:'<div class="fc-content"><p><strong>Resistance Temperature Detector</strong>.<br/>Metal (Platinum) resistance increases linearly with temperature (PTC).</p></div>'},{id:18,unit:"II",front:"Pt100",back:'<div class="fc-content"><p>Standard Platinum RTD with 100Ω resistance at 0°C.</p></div>'},{id:19,unit:"II",front:"Thermistor",back:'<div class="fc-content"><p><strong>Thermal Resistor</strong>.<br/>Semiconductor device. High sensitivity but non-linear.</p></div>'},{id:20,unit:"II",front:"NTC",back:'<div class="fc-content"><p><strong>Negative Temperature Coefficient</strong>.<br/>Resistance decreases as Temperature increases. Common in Thermistors.</p></div>'},{id:21,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Principle of Thermocouple. EMF generated when two dissimilar metals form a loop with junctions at different temps.</p></div>'},{id:22,unit:"II",front:"Peltier Effect",back:'<div class="fc-content"><p>Inverse of Seebeck. Current flowing through a junction causes heating or cooling.</p></div>'},{id:23,unit:"II",front:"Cold Junction Compensation",back:'<div class="fc-content"><p>Technique to correct Thermocouple errors caused by ambient temperature changes at the reference junction.</p></div>'},{id:24,unit:"II",front:"Law of Intermediate Metals",back:`<div class="fc-content"><p>Inserting a third metal (meter) into a thermocouple circuit doesn't affect reading if its junctions are at same temp.</p></div>`},{id:25,unit:"II",front:"Optical Pyrometer",back:'<div class="fc-content"><p>Non-contact sensor. Measures temperature by comparing brightness of source with a standard filament.</p></div>'},{id:26,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Generation of transverse voltage in a current-carrying conductor placed in a magnetic field.</p></div>'},{id:27,unit:"III",front:"Hall Voltage Formula",back:'<div class="fc-content"><p><strong>Vh = (Rh * I * B) / t</strong><br/>Directly proportional to Magnetic Field (B).</p></div>'},{id:28,unit:"III",front:"Hall Sensor Applications",back:'<div class="fc-content"><p>1. Current Sensing<br/>2. RPM Measurement<br/>3. Position Sensing (BLDC Motors)</p></div>'},{id:29,unit:"III",front:"Magnetoresistance",back:'<div class="fc-content"><p>Change in resistance of a material in the presence of a magnetic field.</p></div>'},{id:30,unit:"III",front:"Magnetostriction",back:'<div class="fc-content"><p>Change in physical dimensions (shape/size) of a ferromagnetic material when magnetized.</p></div>'},{id:31,unit:"III",front:"Wiedemann Effect",back:'<div class="fc-content"><p>Twisting of a wire due to interaction of longitudinal and circular magnetic fields. Used in Magnetostrictive Level Sensors.</p></div>'},{id:32,unit:"IV",front:"Photodiode",back:'<div class="fc-content"><p>Semiconductor PN junction operated in <strong>Reverse Bias</strong>. Light creates electron-hole pairs -> Current flows.</p></div>'},{id:33,unit:"IV",front:"Photovoltaic Effect",back:'<div class="fc-content"><p>Generation of voltage when light falls on a material (Solar Cell principle). No external power needed.</p></div>'},{id:34,unit:"IV",front:"LDR",back:'<div class="fc-content"><p><strong>Light Dependent Resistor</strong>.<br/>Resistance decreases as light intensity increases (Photoconductivity).</p></div>'},{id:35,unit:"IV",front:"pH",back:'<div class="fc-content"><p>Negative logarithm of Hydrogen ion concentration.<br/><strong>pH = -log[H+]</strong></p></div>'},{id:36,unit:"IV",front:"Glass Electrode",back:'<div class="fc-content"><p>The sensing electrode in a pH meter. Has a thin glass membrane sensitive to H+ ions.</p></div>'},{id:37,unit:"IV",front:"Nernst Equation (pH)",back:'<div class="fc-content"><p>Relates cell potential to pH.<br/><strong>E = E₀ - 0.0591 * pH</strong> (at 25°C).</p></div>'},{id:38,unit:"IV",front:"Conductivity Cell",back:'<div class="fc-content"><p>Measures ionic concentration. Uses AC excitation to prevent polarization (electrolysis) of the solution.</p></div>'},{id:39,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>A sensor with built-in intelligence.<br/><strong>Sensor + Signal Conditioning + ADC + Microprocessor + Comm.</strong></p></div>'},{id:40,unit:"V",front:"IEEE 1451",back:'<div class="fc-content"><p>Standard for Smart Transducer Interface. Defines TEDS (Transducer Electronic Data Sheet).</p></div>'},{id:41,unit:"V",front:"Self-Calibration",back:'<div class="fc-content"><p>Ability of a smart sensor to automatically adjust its zero and span settings.</p></div>'},{id:42,unit:"V",front:"MEMS",back:'<div class="fc-content"><p><strong>Micro-Electro-Mechanical Systems</strong>.<br/>Miniaturized devices with moving parts on a silicon chip.</p></div>'},{id:43,unit:"V",front:"Bulk Micromachining",back:'<div class="fc-content"><p>Fabrication technique where the silicon substrate itself is etched away to create structures.</p></div>'},{id:44,unit:"V",front:"Surface Micromachining",back:'<div class="fc-content"><p>Building structures ON TOP of the substrate using deposited layers (Sacrificial & Structural layers).</p></div>'},{id:45,unit:"V",front:"Anisotropic Etching",back:'<div class="fc-content"><p>Etching that depends on crystal orientation. Creates precise shapes like V-grooves.</p></div>'},{id:46,unit:"V",front:"Isotropic Etching",back:'<div class="fc-content"><p>Etching that proceeds at the same rate in all directions (like a spherical hole).</p></div>'},{id:47,unit:"V",front:"MEMS Accelerometer",back:'<div class="fc-content"><p>Uses a proof mass and springs. Displacement changes capacitance. Used in Airbags, Phones.</p></div>'},{id:48,unit:"V",front:"Sacrificial Layer",back:'<div class="fc-content"><p>A temporary layer in MEMS fabrication that is etched away to release moving parts.</p></div>'},{id:49,unit:"V",front:"TEDS",back:'<div class="fc-content"><p><strong>Transducer Electronic Data Sheet</strong>.<br/>Digital ID card of a smart sensor stored in memory.</p></div>'},{id:50,unit:"V",front:"Actuator",back:'<div class="fc-content"><p>Inverse of a sensor. Converts electrical signal into physical action (e.g., Motor, Valve).</p></div>'}],Sp=[{unit:"I",title:"Professional Practice and Ethics",notes:"<h3>Unit I Overview</h3><p>This unit lays the foundation for ethical practice in engineering, distinguishing between personal and professional ethics, and defining the core responsibilities and liabilities of a professional.</p>",topics:[{title:"Definition of Professional Ethics",content:`
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
        `}]}],wp={I:[{id:1,question:"What is the primary focus of Engineering Ethics?",options:["Profit Maximization","Public Safety","Personal Gain","Corporate Loyalty"],answer:1}],II:[],III:[],IV:[],V:[]},xp={title:"Professional Practice, Law & Ethics - Model Paper 1",subject:"Professional Practice, Law & Ethics",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Professional Ethics.",answer:"<strong>Professional Ethics</strong> refers to the personal and corporate rules that govern behavior within the context of a particular profession. It involves principles of conduct, integrity, and responsibility towards the public, clients, and employers."},{id:2,question:"What is the main objective of Engineering Ethics?",answer:"The main objective is to ensure that engineers uphold the highest standards of integrity and prioritize the <strong>safety, health, and welfare of the public</strong> in the performance of their professional duties."},{id:3,question:"Define a 'Contract' as per the Indian Contract Act, 1872.",answer:"According to Section 2(h) of the Indian Contract Act, 1872, a <strong>Contract</strong> is an agreement enforceable by law. <br><em>Formula: Contract = Agreement + Enforceability.</em>"},{id:4,question:"What is meant by 'Quid Pro Quo' in a contract?",answer:"<strong>Quid Pro Quo</strong> means 'something in return'. In legal terms, it refers to <strong>Consideration</strong>, which is an essential element of a valid contract. Without consideration, a contract is generally void."},{id:5,question:"Define Arbitration.",answer:"<strong>Arbitration</strong> is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute."},{id:6,question:"What is an Arbitral Award?",answer:"An <strong>Arbitral Award</strong> is the final decision or judgment given by the arbitration tribunal. It is binding on the parties and is enforceable in the same manner as a court decree."},{id:7,question:"What is the purpose of the Industrial Employment (Standing Orders) Act, 1946?",answer:"Its purpose is to require employers in industrial establishments to formally define conditions of employment (standing orders) and make them known to workmen to prevent ambiguity and disputes."},{id:8,question:"Define 'Workman' under the Workmen's Compensation Act.",answer:"A <strong>Workman</strong> is any person (other than a person whose employment is of a casual nature) who is employed for the purposes of the employer's trade or business."},{id:9,question:"What does IPR stand for? Give two examples.",answer:"<strong>IPR</strong> stands for <strong>Intellectual Property Rights</strong>. Examples include: <br>1. <strong>Patents</strong> (for inventions). <br>2. <strong>Copyrights</strong> (for literary/artistic works)."},{id:10,question:"What is the validity period of a Patent in India?",answer:"The term of every patent granted in India is <strong>20 years</strong> from the date of filing of the application."}],partB:[{unit:"I",questionNumber:2,choices:[{question:"Explain the difference between Personal Ethics and Professional Ethics with suitable examples. Discuss the concept of Professional Responsibility.",answer:`
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
          `}]}]},Tp=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],Ap=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}],Cp={I:{id:"root",label:"Mobile Computing",children:[{id:"gsm",label:"GSM Architecture",children:[{id:"rss",label:"Radio Subsystem (RSS)",children:[{id:"ms",label:"Mobile Station"},{id:"bss",label:"Base Station (BSS)"}]},{id:"nss",label:"Network Switching (NSS)",children:[{id:"msc",label:"MSC"},{id:"hlr",label:"HLR / VLR"}]},{id:"oss",label:"Operation (OSS)",children:[{id:"omc",label:"OMC"},{id:"eir",label:"EIR / AUC"}]}]},{id:"gprs",label:"GPRS",children:[{id:"pkt",label:"Packet Switching"},{id:"nodes",label:"New Nodes",children:[{id:"sgsn",label:"SGSN"},{id:"ggsn",label:"GGSN"}]}]}]},II:{id:"root",label:"Wireless MAC & IP",children:[{id:"mac",label:"MAC Layer",children:[{id:"sdma",label:"SDMA (Space)"},{id:"fdma",label:"FDMA (Freq)"},{id:"tdma",label:"TDMA (Time)"},{id:"cdma",label:"CDMA (Code)"}]},{id:"80211",label:"IEEE 802.11",children:[{id:"arch",label:"Architecture",children:[{id:"bss",label:"BSS/ESS"},{id:"ap",label:"Access Point"}]},{id:"mac_layer",label:"MAC",children:[{id:"dcf",label:"DCF"},{id:"pcf",label:"PCF"}]}]},{id:"mip",label:"Mobile IP",children:[{id:"entities",label:"Entities",children:[{id:"mn",label:"MN"},{id:"ha",label:"HA"},{id:"fa",label:"FA"}]},{id:"mech",label:"Mechanisms",children:[{id:"tunnel",label:"Tunneling"},{id:"tri",label:"Triangular Routing"}]}]}]},III:{id:"root",label:"Mobile Transport",children:[{id:"tcp_issues",label:"TCP Issues",children:[{id:"cong",label:"Congestion vs Error"},{id:"disc",label:"Frequent Disconnection"}]},{id:"solutions",label:"Solutions",children:[{id:"itcp",label:"Indirect TCP",children:[{id:"split",label:"Split Connection"}]},{id:"snoop",label:"Snooping TCP",children:[{id:"buffer",label:"Buffering at BS"}]},{id:"mtcp",label:"Mobile TCP",children:[{id:"persist",label:"Persist Mode"}]}]}]},IV:{id:"root",label:"Data Dissemination",children:[{id:"models",label:"Delivery Models",children:[{id:"push",label:"Push (Publish/Sub)"},{id:"pull",label:"Pull (On-Demand)"},{id:"hybrid",label:"Hybrid"}]},{id:"bdisk",label:"Broadcast Disk",children:[{id:"flat",label:"Flat Schedule"},{id:"skew",label:"Skewed Schedule"},{id:"index",label:"Indexing",children:[{id:"power",label:"Save Power"}]}]},{id:"cache",label:"Caching",children:[{id:"consist",label:"Consistency",children:[{id:"inv",label:"Invalidation Reports"}]}]}]},V:{id:"root",label:"MANETs & Platforms",children:[{id:"routing",label:"Routing Protocols",children:[{id:"pro",label:"Proactive",children:[{id:"dsdv",label:"DSDV"}]},{id:"reac",label:"Reactive",children:[{id:"dsr",label:"DSR"},{id:"aodv",label:"AODV"}]},{id:"hybrid",label:"Hybrid",children:[{id:"zrp",label:"ZRP"}]}]},{id:"security",label:"Security",children:[{id:"attacks",label:"Attacks",children:[{id:"black",label:"Blackhole"},{id:"worm",label:"Wormhole"}]}]},{id:"j2me",label:"J2ME",children:[{id:"config",label:"Config (CLDC)"},{id:"profile",label:"Profile (MIDP)"}]}]}},kp={I:{id:"root",label:"Sensors & Transducers",children:[{id:"basics",label:"Basics",children:[{id:"def",label:"Sensor vs Transducer"},{id:"class",label:"Classification",children:[{id:"act",label:"Active"},{id:"pass",label:"Passive"}]},{id:"char",label:"Characteristics",children:[{id:"stat",label:"Static (Accuracy, Precision)"},{id:"dyn",label:"Dynamic"}]}]},{id:"resistive",label:"Resistive Sensors",children:[{id:"pot",label:"Potentiometer"},{id:"strain",label:"Strain Gauge",children:[{id:"gf",label:"Gauge Factor"},{id:"bridge",label:"Wheatstone Bridge"}]}]},{id:"inductive",label:"Inductive Sensors",children:[{id:"lvdt",label:"LVDT",children:[{id:"core",label:"Movable Core"},{id:"out",label:"Vout = Vs1 - Vs2"}]}]},{id:"capacitive",label:"Capacitive Sensors",children:[{id:"var",label:"Variations",children:[{id:"dist",label:"Distance (d)"},{id:"area",label:"Area (A)"},{id:"diel",label:"Dielectric (ε)"}]}]}]},II:{id:"root",label:"Thermal Sensors",children:[{id:"expansion",label:"Expansion Type",children:[{id:"bimetal",label:"Bimetallic Strip"},{id:"liq",label:"Liquid in Glass"}]},{id:"electrical",label:"Electrical Type",children:[{id:"rtd",label:"RTD (Pt100)",children:[{id:"ptc",label:"PTC (Linear)"}]},{id:"thermistor",label:"Thermistor",children:[{id:"ntc",label:"NTC (Non-linear)"}]},{id:"tcouple",label:"Thermocouple",children:[{id:"seebeck",label:"Seebeck Effect"},{id:"types",label:"Types (J, K, T)"}]}]},{id:"radiation",label:"Radiation Type",children:[{id:"pyro",label:"Pyrometers",children:[{id:"opt",label:"Optical"},{id:"rad",label:"Total Radiation"}]}]}]},III:{id:"root",label:"Magnetic Sensors",children:[{id:"hall",label:"Hall Effect",children:[{id:"principle",label:"Lorentz Force"},{id:"app",label:"Applications",children:[{id:"rpm",label:"RPM"},{id:"curr",label:"Current Sensing"}]}]},{id:"magneto",label:"Magnetoresistive",children:[{id:"amr",label:"AMR"},{id:"gmr",label:"GMR (Giant MR)"}]},{id:"strictive",label:"Magnetostrictive",children:[{id:"wied",label:"Wiedemann Effect"},{id:"level",label:"Liquid Level Sensing"}]}]},IV:{id:"root",label:"Radiation & Electroanalytical",children:[{id:"optical",label:"Optical Sensors",children:[{id:"pdiode",label:"Photodiode"},{id:"ptrans",label:"Phototransistor"},{id:"ldr",label:"LDR"},{id:"solar",label:"Solar Cell"}]},{id:"nuclear",label:"Nuclear Radiation",children:[{id:"gm",label:"Geiger Muller Counter"},{id:"scint",label:"Scintillation Counter"}]},{id:"chem",label:"Chemical Sensors",children:[{id:"ph",label:"pH Sensor",children:[{id:"glass",label:"Glass Electrode"},{id:"nernst",label:"Nernst Eq"}]},{id:"cond",label:"Conductivity Cell"}]}]},V:{id:"root",label:"Smart Sensors & MEMS",children:[{id:"smart",label:"Smart Sensors",children:[{id:"std",label:"IEEE 1451"},{id:"blocks",label:"Blocks",children:[{id:"sens",label:"Sensor"},{id:"adc",label:"ADC"},{id:"dsp",label:"DSP"},{id:"comm",label:"Comm"}]}]},{id:"mems",label:"MEMS",children:[{id:"def",label:"Micro-Electro-Mechanical"},{id:"fab",label:"Fabrication",children:[{id:"bulk",label:"Bulk Micromachining"},{id:"surf",label:"Surface Micromachining"}]},{id:"apps",label:"Applications",children:[{id:"accel",label:"Accelerometer"},{id:"gyro",label:"Gyroscope"}]}]}]}},Mp="modulepreload",Dp=function(k){return"/mobile-computing-prep/"+k},Dh={},Ep=function(K,V,h){let O=Promise.resolve();if(V&&V.length>0){let T=function(B){return Promise.all(B.map(R=>Promise.resolve(R).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};var P=T;document.getElementsByTagName("link");const Q=document.querySelector("meta[property=csp-nonce]"),C=Q?.nonce||Q?.getAttribute("nonce");O=T(V.map(B=>{if(B=Dp(B),B in Dh)return;Dh[B]=!0;const R=B.endsWith(".css"),H=R?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${B}"]${H}`))return;const le=document.createElement("link");if(le.rel=R?"stylesheet":Mp,R||(le.as="script"),le.crossOrigin="",le.href=B,C&&le.setAttribute("nonce",C),document.head.appendChild(le),R)return new Promise((ye,xe)=>{le.addEventListener("load",ye),le.addEventListener("error",()=>xe(new Error(`Unable to preload CSS for ${B}`)))})}))}function G(Q){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=Q,window.dispatchEvent(C),!C.defaultPrevented)throw Q}return O.then(Q=>{for(const C of Q||[])C.status==="rejected"&&G(C.reason);return K().catch(G)})};function Rp(k={}){const{immediate:K=!1,onNeedRefresh:V,onOfflineReady:h,onRegistered:O,onRegisteredSW:G,onRegisterError:P}=k;let Q,C,T;const B=async(H=!0)=>{await C,T?.()};async function R(){if("serviceWorker"in navigator){if(Q=await Ep(async()=>{const{Workbox:H}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:H}},[]).then(({Workbox:H})=>new H("/mobile-computing-prep/sw.js",{scope:"/mobile-computing-prep/",type:"classic"})).catch(H=>{P?.(H)}),!Q)return;T=()=>{Q?.messageSkipWaiting()};{let H=!1;const le=()=>{H=!0,Q?.addEventListener("controlling",ye=>{ye.isUpdate&&window.location.reload()}),V?.()};Q.addEventListener("installed",ye=>{typeof ye.isUpdate>"u"?typeof ye.isExternal<"u"&&ye.isExternal?le():!H&&h?.():ye.isUpdate||h?.()}),Q.addEventListener("waiting",le)}Q.register({immediate:K}).then(H=>{G?G("/mobile-computing-prep/sw.js",H):O?.(H)}).catch(H=>{P?.(H)})}}return C=R(),B}function Np(k={}){const{immediate:K=!0,onNeedRefresh:V,onOfflineReady:h,onRegistered:O,onRegisteredSW:G,onRegisterError:P}=k,[Q,C]=he.useState(!1),[T,B]=he.useState(!1),[R]=he.useState(()=>Rp({immediate:K,onOfflineReady(){B(!0),h?.()},onNeedRefresh(){C(!0),V?.()},onRegistered:O,onRegisteredSW:G,onRegisterError:P}));return{needRefresh:[Q,C],offlineReady:[T,B],updateServiceWorker:R}}function Eh(){const{offlineReady:[k,K],needRefresh:[V,h],updateServiceWorker:O}=Np({onRegistered(C){console.log("SW Registered: "+C)},onRegisterError(C){console.log("SW registration error",C)}}),[G,P]=he.useState("");he.useEffect(()=>{V&&fetch("./version.json?t="+Date.now()).then(C=>C.json()).then(C=>P(C.message)).catch(C=>console.error("Failed to fetch update info",C))},[V]);const Q=()=>{K(!1),h(!1)};return c.jsx("div",{className:"ReloadPrompt-container",children:(k||V)&&c.jsxs("div",{className:"ReloadPrompt-toast",children:[c.jsx("div",{className:"ReloadPrompt-message",children:k?c.jsx("span",{children:"App ready to work offline"}):c.jsxs("div",{children:[c.jsx("span",{style:{display:"block",fontWeight:"bold",marginBottom:"0.2rem"},children:"New Update Available!"}),c.jsx("span",{children:G||"New content available, click on reload button to update."})]})}),V&&c.jsx("button",{className:"ReloadPrompt-toast-button",onClick:()=>O(!0),children:"Reload"}),c.jsx("button",{className:"ReloadPrompt-toast-button",onClick:Q,children:"Close"})]})})}const zp=[{version:"1.3.0",date:"2025-12-02",title:"Electronic Sensors Content",changes:["Added Full Model Paper 1 & 2 for Electronic Sensors.","Included 11+ High-Quality SVG Diagrams for Exam Answers.","Enhanced Study Mode with Textbook-style notes & SVGs.","Added Interactive Mind Maps for Electronic Sensors.","Expanded Quiz with 25+ new questions.","Added 50+ Flashcards for quick revision."]},{version:"1.2.0",date:"2025-11-30",title:"Update History & PWA Enhancements",changes:["Added Update History feature to track app changes.","Implemented detailed update prompts showing exactly what changed.",'Added "About" page with developer info.','Renamed app to "B.Tech Exam Prep" to support multiple subjects.']},{version:"1.1.0",date:"2025-11-30",title:"Mind Maps & Offline Support",changes:["Added interactive Mind Maps for all 5 units.","Enabled Offline Support (PWA) - App works without internet!","Added Zoom and Pan controls to Mind Maps.",'Added "Developer Signature" footer.']},{version:"1.0.0",date:"2025-11-29",title:"Initial Release",changes:["Launched Mobile Computing Prep with Units I-V.","Added Model Papers (1-4) with detailed answers.","Implemented Quiz Mode with score tracking.","Added Flashcards and Exam Tips."]}],Rh=({node:k})=>c.jsxs("div",{className:"mm-node",children:[c.jsx("div",{className:"mm-content",children:k.label}),k.children&&k.children.length>0&&c.jsx("div",{className:"mm-children",children:k.children.map(K=>c.jsx(Rh,{node:K},K.id))})]});function Ip(){const[k,K]=he.useState(null),h=k==="sensors"?{title:"Electronic Sensors",syllabus:fp,quizzes:pp,papers:[mp,yp],tips:vp,flashcards:bp,mindmaps:kp,progressKey:"electronicSensorsProgress"}:k==="pple"?{title:"Professional Practice, Law & Ethics",syllabus:Sp,quizzes:wp,papers:[xp],tips:Tp,flashcards:Ap,mindmaps:null,progressKey:"ppleProgress"}:{title:"Mobile Computing",syllabus:sp,quizzes:lp,papers:[rp,cp,up,dp],tips:hp,flashcards:gp,mindmaps:Cp,progressKey:"mobileComputingProgress"},[O,G]=he.useState(null),[P,Q]=he.useState(null),[C,T]=he.useState("study"),[B,R]=he.useState(0),[H,le]=he.useState(0),[ye,xe]=he.useState(!1),[Le,Qe]=he.useState([]),[Pe,Me]=he.useState({}),[Ke,ot]=he.useState(0),[ze,X]=he.useState({}),[Oe,st]=he.useState({}),[It,lt]=he.useState(null),[Ie,Et]=he.useState(null),[yt,Fe]=he.useState(1),[v,M]=he.useState({}),[q,ie]=he.useState(0),[ce,d]=he.useState(!1),[S,D]=he.useState([]),[E,U]=he.useState(0);he.useEffect(()=>{if(k){const A=localStorage.getItem(h.progressKey);Me(A?JSON.parse(A):{}),T("study"),G(null),Q(null),D([...h.flashcards]),ie(0),ot(0)}},[k,h.progressKey,h.flashcards]);const F=(A,_,ne)=>{const vt=Pe[A]?.score||0;if(_>vt){const Gn={...Pe,[A]:{score:_,total:ne}};Me(Gn),localStorage.setItem(h.progressKey,JSON.stringify(Gn))}},ae=(A,_)=>{M(ne=>({...ne,[A]:ne[A]===_?null:_}))},Ue=A=>lt(A),Se=()=>lt(null),Ei=A=>{h.quizzes[A]?(Q(A),R(0),le(0),xe(!1)):alert("Quiz coming soon for this unit!")},Fi=()=>{let A=[];Object.values(h.quizzes).forEach(vt=>{A=[...A,...vt]});const ne=A.sort(()=>.5-Math.random()).slice(0,10);Qe(ne),Q("FINAL"),R(0),le(0),xe(!1)},Hn=A=>{let _=!1;const ne=P==="FINAL"?Le:h.quizzes[P];A===ne[B].answer&&(_=!0),_&&le(H+1);const vt=B+1;vt<ne.length?R(vt):(xe(!0),F(P,_?H+1:H,ne.length))},qn=()=>{Q(null),R(0),le(0),xe(!1),Qe([])},Bt=A=>{X(_=>({..._,[A]:!_[A]}))},Xi=(A,_)=>{st(ne=>({...ne,[A]:_}))},Ln=A=>{ot(A),X({}),st({}),window.scrollTo(0,0)},ts=()=>{d(!1),setTimeout(()=>ie(A=>(A+1)%S.length),200)},La=()=>{d(!1),setTimeout(()=>ie(A=>(A-1+S.length)%S.length),200)},Pn=()=>d(!ce),On=()=>{d(!1),setTimeout(()=>{const A=[...h.flashcards].sort(()=>.5-Math.random());D(A),ie(0)},200)},[Un,jn]=he.useState(!1),[is,je]=he.useState(!1);if(!k)return c.jsxs("div",{className:"container",style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[c.jsxs("div",{style:{position:"absolute",top:"1rem",right:"1rem",display:"flex",gap:"0.5rem"},children:[c.jsx("button",{className:"btn btn-outline",style:{borderRadius:"50%",width:"40px",height:"40px",padding:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},onClick:()=>je(!0),title:"Update History",children:"🕒"}),c.jsx("button",{className:"btn btn-outline",style:{borderRadius:"50%",width:"40px",height:"40px",padding:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},onClick:()=>jn(!0),title:"About App",children:"ℹ️"})]}),c.jsxs("div",{style:{textAlign:"center",marginTop:"4rem",flex:1},children:[c.jsx("h1",{children:"🎓 B.Tech Exam Prep"}),c.jsx("p",{style:{color:"#666",marginBottom:"2rem"},children:"Select a subject to start mastering concepts"}),c.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[c.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>K("mobile"),children:[c.jsx("h2",{children:"📱 Mobile Computing"}),c.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),c.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),c.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>K("sensors"),children:[c.jsx("h2",{children:"🌡️ Electronic Sensors"}),c.jsx("p",{children:"Unit I - V, Open Elective-II"}),c.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),c.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>K("pple"),children:[c.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),c.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),c.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]}),c.jsxs("footer",{style:{textAlign:"center",padding:"2rem",color:"#64748b",fontSize:"0.9rem"},children:[c.jsxs("p",{children:["Designed & Developed by ",c.jsx("strong",{children:"BTK Creations"})," 🚀"]}),c.jsxs("p",{style:{fontSize:"0.8rem",opacity:.7},children:["© ",new Date().getFullYear()," B.Tech Exam Prep"]})]}),is&&c.jsx("div",{className:"modal-overlay",children:c.jsxs("div",{className:"modal-content",style:{maxWidth:"600px",maxHeight:"80vh",display:"flex",flexDirection:"column"},children:[c.jsx("button",{className:"close-btn",onClick:()=>je(!1),children:"×"}),c.jsx("h2",{style:{color:"var(--primary-color)",marginBottom:"1rem",textAlign:"center"},children:"📅 Update History"}),c.jsx("div",{style:{overflowY:"auto",paddingRight:"0.5rem"},children:zp.map((A,_)=>c.jsxs("div",{style:{marginBottom:"1.5rem",borderLeft:"3px solid var(--primary-color)",paddingLeft:"1rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"0.5rem"},children:[c.jsx("h3",{style:{fontSize:"1.1rem",margin:0},children:A.title}),c.jsxs("span",{style:{fontSize:"0.8rem",color:"#64748b",background:"#f1f5f9",padding:"2px 8px",borderRadius:"12px"},children:["v",A.version]})]}),c.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",marginBottom:"0.5rem"},children:A.date}),c.jsx("ul",{style:{paddingLeft:"1.2rem",margin:0},children:A.changes.map((ne,vt)=>c.jsx("li",{style:{fontSize:"0.95rem",color:"#334155",marginBottom:"0.25rem"},children:ne},vt))})]},_))}),c.jsx("button",{className:"btn btn-primary",onClick:()=>je(!1),style:{alignSelf:"center",marginTop:"1rem"},children:"Close"})]})}),Un&&c.jsx("div",{className:"modal-overlay",children:c.jsxs("div",{className:"modal-content",style:{maxWidth:"500px",textAlign:"center"},children:[c.jsx("button",{className:"close-btn",onClick:()=>jn(!1),children:"×"}),c.jsx("h2",{style:{color:"var(--primary-color)",marginBottom:"1rem"},children:"About B.Tech Exam Prep"}),c.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:"This application is designed to help B.Tech students prepare for their exams effectively. It features comprehensive notes, interactive quizzes, model papers, and visual mind maps."}),c.jsxs("div",{style:{background:"#f8fafc",padding:"1.5rem",borderRadius:"12px",marginBottom:"1.5rem"},children:[c.jsx("h3",{style:{fontSize:"1.1rem",marginBottom:"0.5rem"},children:"👨‍💻 Developer"}),c.jsx("p",{style:{fontWeight:"bold",fontSize:"1.2rem",color:"var(--primary-color)"},children:"BTK Creations"}),c.jsx("p",{style:{fontSize:"0.9rem",color:"#64748b"},children:"Passionate about Education & Technology"})]}),c.jsx("button",{className:"btn btn-primary",onClick:()=>jn(!1),children:"Close"})]})}),c.jsx(Eh,{})]});const Ot=h.papers[Ke];return c.jsxs("div",{className:"container",children:[c.jsxs("header",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[c.jsx("button",{className:"btn",onClick:()=>K(null),children:"← Switch Subject"}),c.jsx("span",{className:"unit-badge",children:h.title})]}),c.jsxs("h1",{children:[h.title," Prep"]}),c.jsx("p",{className:"subtitle",children:"Comprehensive B.Tech Exam Preparation"}),c.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[c.jsx("button",{className:`btn ${C==="study"?"btn-primary":""}`,onClick:()=>T("study"),children:"Study Mode"}),c.jsx("button",{className:`btn ${C==="paper"?"btn-primary":""}`,onClick:()=>T("paper"),children:"Model Papers"}),c.jsx("button",{className:`btn ${C==="tips"?"btn-primary":""}`,onClick:()=>T("tips"),children:"Exam Tips"}),c.jsx("button",{className:`btn ${C==="flashcards"?"btn-primary":""}`,onClick:()=>T("flashcards"),children:"Flashcards"})]}),C==="study"&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:Fi,children:"Start Final Exam (Mixed)"}),Pe.FINAL&&c.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Pe.FINAL.score,"/",Pe.FINAL.total]})]})]}),C==="study"&&c.jsx("main",{className:"grid",children:h.syllabus.map(A=>c.jsxs("div",{className:"card",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("span",{className:"unit-badge",children:["Unit ",A.unit]}),Pe[A.unit]&&c.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Pe[A.unit].score,"/",Pe[A.unit].total]})]}),c.jsx("h2",{children:A.title}),v[A.unit]==="notes"&&A.notes?c.jsx("div",{className:"notes-content",children:c.jsx("div",{dangerouslySetInnerHTML:{__html:A.notes}})}):c.jsxs("div",{className:"topics-list-container",children:[c.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),c.jsx("div",{className:"topics-grid",children:A.topics.map((_,ne)=>c.jsx("button",{className:"topic-btn",onClick:()=>Ue(_),children:_.title},ne))})]}),c.jsxs("div",{className:"actions",children:[c.jsx("button",{className:`btn ${v[A.unit]==="notes"?"btn-primary":""}`,onClick:()=>A.notes?ae(A.unit,"notes"):alert("Notes coming soon!"),children:v[A.unit]==="notes"?"Hide Overview":"Unit Overview"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>{Et(A.unit),Fe(1)},children:"Mind Map"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>Ei(A.unit),children:"Take Quiz"})]})]},A.unit))}),C==="paper"&&c.jsxs("main",{className:"paper-container",children:[c.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:h.papers.map((A,_)=>c.jsxs("button",{className:`btn ${Ke===_?"btn-primary":""}`,onClick:()=>Ln(_),children:["Paper Set ",_+1]},_))}),c.jsxs("div",{className:"paper-header",children:[c.jsx("h2",{children:Ot.title}),c.jsx("h3",{children:Ot.subject}),c.jsxs("div",{className:"paper-meta",children:[c.jsxs("span",{children:["Time: ",Ot.time]}),c.jsxs("span",{children:["Max Marks: ",Ot.maxMarks]})]})]}),c.jsxs("div",{className:"paper-section",children:[c.jsx("h3",{children:"PART-A (Short Answer Questions)"}),c.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),c.jsx("div",{className:"questions-list",children:Ot.partA.map(A=>c.jsxs("div",{className:"question-item",children:[c.jsxs("div",{className:"question-text",children:[c.jsxs("strong",{children:[A.id,"."]})," ",A.question," ",c.jsx("span",{className:"marks",children:"[1M]"})]}),c.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:Oe[`A-${A.id}`]||"",onChange:_=>Xi(`A-${A.id}`,_.target.value)}),c.jsx("button",{className:"btn-text",onClick:()=>Bt(`A-${A.id}`),children:ze[`A-${A.id}`]?"Hide Model Answer":"Show Model Answer"}),ze[`A-${A.id}`]&&c.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:A.answer}})]},A.id))})]}),Ot.partB&&c.jsxs("div",{className:"paper-section",children:[c.jsx("h3",{children:"PART-B (Long Answer Questions)"}),c.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),c.jsx("div",{className:"questions-list",children:Ot.partB.map(A=>c.jsxs("div",{className:"question-group",children:[c.jsxs("h4",{children:["Unit ",A.unit]}),A.choices.map((_,ne)=>c.jsxs("div",{children:[c.jsxs("div",{className:"question-item",children:[c.jsxs("div",{className:"question-text",children:[c.jsxs("strong",{children:[A.questionNumber," (",String.fromCharCode(97+ne),")."]})," ",_.question," ",c.jsx("span",{className:"marks",children:"[10M]"})]}),c.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:Oe[`B-${A.questionNumber}${ne}`]||"",onChange:vt=>Xi(`B-${A.questionNumber}${ne}`,vt.target.value)}),c.jsx("button",{className:"btn-text",onClick:()=>Bt(`B-${A.questionNumber}${ne}`),children:ze[`B-${A.questionNumber}${ne}`]?"Hide Model Answer":"Show Model Answer"}),ze[`B-${A.questionNumber}${ne}`]&&c.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:_.answer}})]}),ne===0&&c.jsx("div",{className:"or-divider",children:"OR"})]},ne))]},A.questionNumber))})]})]}),C==="tips"&&c.jsxs("main",{className:"tips-container-pro",children:[c.jsxs("div",{className:"tips-sidebar",children:[c.jsx("h3",{children:"Exam Strategy"}),c.jsx("ul",{children:h.tips.map((A,_)=>c.jsxs("li",{className:E===_?"active":"",onClick:()=>U(_),children:[A.category.split(" ")[0]," ",c.jsx("span",{className:"sidebar-subtitle",children:A.category})]},_))})]}),c.jsxs("div",{className:"tips-content-area",children:[c.jsxs("div",{className:"tips-header-pro",children:[c.jsx("h2",{children:h.tips[E].category}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${(E+1)/h.tips.length*100}%`}})})]}),c.jsx("div",{className:"tips-cards-pro",children:h.tips[E].tips.map((A,_)=>c.jsxs("div",{className:"tip-card-pro",children:[c.jsx("div",{className:"tip-icon-pro",children:_+1}),c.jsxs("div",{className:"tip-text-pro",children:[c.jsx("h4",{children:A.title}),c.jsx("div",{dangerouslySetInnerHTML:{__html:A.content}})]})]},_))}),c.jsxs("div",{className:"tips-navigation",children:[c.jsx("button",{className:"btn",disabled:E===0,onClick:()=>U(A=>A-1),children:"← Previous"}),c.jsxs("span",{className:"page-indicator",children:[E+1," of ",h.tips.length]}),c.jsx("button",{className:"btn btn-primary",disabled:E===h.tips.length-1,onClick:()=>U(A=>A+1),children:"Next →"})]})]})]}),C==="flashcards"&&S.length>0&&c.jsxs("main",{className:"flashcard-container",children:[c.jsxs("div",{className:"flashcard-header",children:[c.jsx("h2",{children:"Interactive Flashcards"}),c.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),c.jsx("div",{className:"flashcard-scene",children:c.jsxs("div",{className:`flashcard ${ce?"flipped":""}`,onClick:Pn,children:[c.jsxs("div",{className:"flashcard-face flashcard-front",children:[c.jsxs("span",{className:"card-unit",children:["Unit ",S[q].unit]}),c.jsx("h3",{children:S[q].front}),c.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),c.jsx("div",{className:"flashcard-face flashcard-back",children:c.jsx("div",{dangerouslySetInnerHTML:{__html:S[q].back}})})]})}),c.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[c.jsx("button",{className:"btn btn-primary",onClick:La,children:"← Previous"}),c.jsxs("span",{className:"card-count",children:[q+1," / ",S.length]}),c.jsx("button",{className:"btn btn-primary",onClick:ts,children:"Next →"})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:c.jsx("button",{className:"btn btn-primary",onClick:On,children:"Shuffle Cards"})})]}),P&&c.jsx("div",{className:"quiz-overlay",children:c.jsxs("div",{className:"quiz-card",children:[c.jsx("button",{className:"close-btn",onClick:qn,style:{position:"absolute",right:"1.5rem",top:"1.5rem",zIndex:10},children:"×"}),ye?c.jsxs("div",{className:"score-container",children:[c.jsx("div",{className:"score-circle",style:{"--score-percent":`${H/(P==="FINAL"?Le.length:h.quizzes[P].length)*100}%`},children:c.jsxs("div",{className:"score-text",children:[c.jsx("span",{className:"score-number",children:H}),c.jsxs("span",{className:"score-total",children:["of ",P==="FINAL"?Le.length:h.quizzes[P].length]})]})}),c.jsx("h2",{className:"score-message",children:H/(P==="FINAL"?Le.length:h.quizzes[P].length)>.7?"Excellent Work! 🎉":"Keep Practicing! 💪"}),c.jsxs("p",{className:"score-submessage",children:["You've completed the ",P==="FINAL"?"Final Exam":`Unit ${P}`," quiz."]}),c.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[c.jsx("button",{className:"btn btn-outline",onClick:qn,children:"Close"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>{xe(!1),R(0),le(0)},children:"Try Again"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"quiz-header",children:[c.jsxs("div",{className:"quiz-meta",children:[c.jsx("span",{children:P==="FINAL"?"Final Exam":`Unit ${P} Quiz`}),c.jsxs("span",{children:["Question ",B+1," / ",P==="FINAL"?Le.length:h.quizzes[P].length]})]}),c.jsx("div",{className:"quiz-progress-track",children:c.jsx("div",{className:"quiz-progress-fill",style:{width:`${(B+1)/(P==="FINAL"?Le.length:h.quizzes[P].length)*100}%`}})})]}),c.jsx("div",{className:"quiz-content",children:(()=>{const A=P==="FINAL"?Le:h.quizzes[P];return c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"quiz-question",children:A[B].question}),c.jsx("div",{className:"quiz-options",children:A[B].options.map((_,ne)=>c.jsx("button",{className:"quiz-option-btn",onClick:()=>Hn(ne),children:_},ne))})]})})()})]})]})}),It&&c.jsx("div",{className:"modal-overlay",children:c.jsxs("div",{className:"modal-content topic-modal",children:[c.jsx("button",{className:"close-btn",onClick:Se,children:"×"}),c.jsxs("div",{className:"topic-content",children:[c.jsx("h2",{children:It.title}),c.jsx("div",{dangerouslySetInnerHTML:{__html:It.content}})]}),c.jsx("button",{className:"btn btn-primary",onClick:Se,style:{marginTop:"2rem"},children:"Close"})]})}),Ie&&h.mindmaps&&h.mindmaps[Ie]&&c.jsx("div",{className:"modal-overlay",children:c.jsxs("div",{className:"modal-content",style:{width:"95%",height:"95%",maxWidth:"100%",display:"flex",flexDirection:"column",padding:"1rem"},children:[c.jsx("button",{className:"close-btn",onClick:()=>Et(null),style:{top:"10px",right:"10px"},children:"×"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[c.jsxs("h2",{style:{color:"var(--primary-color)",fontSize:"1.5rem",margin:0},children:["🧠 Concept Map: Unit ",Ie]}),c.jsxs("div",{className:"zoom-controls",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[c.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>Fe(A=>Math.max(.5,A-.1)),children:"-"}),c.jsxs("span",{style:{minWidth:"3rem",textAlign:"center",fontWeight:"bold"},children:[Math.round(yt*100),"%"]}),c.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>Fe(A=>Math.min(2,A+.1)),children:"+"}),c.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>Fe(1),children:"Reset"})]})]}),c.jsx("div",{className:"mindmap-container",style:{flex:1,overflow:"auto",marginTop:0,borderRadius:"12px",border:"1px solid #e2e8f0",position:"relative",display:"flex",alignItems:"flex-start",justifyContent:"flex-start"},children:c.jsx("div",{className:"mm-tree mm-root",style:{zoom:yt,margin:"auto",transformOrigin:"top left"},children:c.jsx(Rh,{node:h.mindmaps[Ie]})})}),c.jsx("button",{className:"btn btn-primary",onClick:()=>Et(null),style:{alignSelf:"center",marginTop:"1rem",padding:"0.8rem 2rem",width:"auto",height:"auto",flexShrink:0,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:"Close Map"})]})}),c.jsxs("footer",{style:{textAlign:"center",padding:"2rem",color:"#64748b",fontSize:"0.9rem",marginTop:"auto"},children:[c.jsxs("p",{children:["Designed & Developed by ",c.jsx("strong",{children:"BTK Creations"})," 🚀"]}),c.jsxs("p",{style:{fontSize:"0.8rem",opacity:.7},children:["© ",new Date().getFullYear()," Mobile Computing Prep"]})]}),c.jsx(Eh,{})]})}op.createRoot(document.getElementById("root")).render(c.jsx(he.StrictMode,{children:c.jsx(Ip,{})}));
