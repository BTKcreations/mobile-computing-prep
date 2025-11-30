(function(){const J=document.createElement("link").relList;if(J&&J.supports&&J.supports("modulepreload"))return;for(const G of document.querySelectorAll('link[rel="modulepreload"]'))h(G);new MutationObserver(G=>{for(const P of G)if(P.type==="childList")for(const O of P.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&h(O)}).observe(document,{childList:!0,subtree:!0});function Y(G){const P={};return G.integrity&&(P.integrity=G.integrity),G.referrerPolicy&&(P.referrerPolicy=G.referrerPolicy),G.crossOrigin==="use-credentials"?P.credentials="include":G.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function h(G){if(G.ep)return;G.ep=!0;const P=Y(G);fetch(G.href,P)}})();var hr={exports:{}},za={};var vh;function Zg(){if(vh)return za;vh=1;var x=Symbol.for("react.transitional.element"),J=Symbol.for("react.fragment");function Y(h,G,P){var O=null;if(P!==void 0&&(O=""+P),G.key!==void 0&&(O=""+G.key),"key"in G){P={};for(var K in G)K!=="key"&&(P[K]=G[K])}else P=G;return G=P.ref,{$$typeof:x,type:h,key:O,ref:G!==void 0?G:null,props:P}}return za.Fragment=J,za.jsx=Y,za.jsxs=Y,za}var yh;function Jg(){return yh||(yh=1,hr.exports=Zg()),hr.exports}var d=Jg(),fr={exports:{}},L={};var bh;function Fg(){if(bh)return L;bh=1;var x=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),q=Symbol.iterator;function oe(u){return u===null||typeof u!="object"?null:(u=q&&u[q]||u["@@iterator"],typeof u=="function"?u:null)}var me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ae=Object.assign,Oe={};function Qe(u,S,E){this.props=u,this.context=S,this.refs=Oe,this.updater=E||me}Qe.prototype.isReactComponent={},Qe.prototype.setState=function(u,S){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,S,"setState")},Qe.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Ue(){}Ue.prototype=Qe.prototype;function De(u,S,E){this.props=u,this.context=S,this.refs=Oe,this.updater=E||me}var Ke=De.prototype=new Ue;Ke.constructor=De,Ae(Ke,Qe.prototype),Ke.isPureReactComponent=!0;var at=Array.isArray;function ze(){}var Z={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function lt(u,S,E){var k=E.ref;return{$$typeof:x,type:u,key:S,ref:k!==void 0?k:null,props:E}}function zt(u,S){return lt(u.type,S,u.props)}function st(u){return typeof u=="object"&&u!==null&&u.$$typeof===x}function Be(u){var S={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(E){return S[E]})}var Dt=/\/+/g;function mt(u,S){return typeof u=="object"&&u!==null&&u.key!=null?Be(""+u.key):S.toString(36)}function We(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(ze,ze):(u.status="pending",u.then(function(S){u.status==="pending"&&(u.status="fulfilled",u.value=S)},function(S){u.status==="pending"&&(u.status="rejected",u.reason=S)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function y(u,S,E,k,j){var W=typeof u;(W==="undefined"||W==="boolean")&&(u=null);var ae=!1;if(u===null)ae=!0;else switch(W){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(u.$$typeof){case x:case J:ae=!0;break;case H:return ae=u._init,y(ae(u._payload),S,E,k,j)}}if(ae)return j=j(u),ae=k===""?"."+mt(u,0):k,at(j)?(E="",ae!=null&&(E=ae.replace(Dt,"$&/")+"/"),y(j,S,E,"",function(kn){return kn})):j!=null&&(st(j)&&(j=zt(j,E+(j.key==null||u&&u.key===j.key?"":(""+j.key).replace(Dt,"$&/")+"/")+ae)),S.push(j)),1;ae=0;var je=k===""?".":k+":";if(at(u))for(var Se=0;Se<u.length;Se++)k=u[Se],W=je+mt(k,Se),ae+=y(k,S,E,W,j);else if(Se=oe(u),typeof Se=="function")for(u=Se.call(u),Se=0;!(k=u.next()).done;)k=k.value,W=je+mt(k,Se++),ae+=y(k,S,E,W,j);else if(W==="object"){if(typeof u.then=="function")return y(We(u),S,E,k,j);throw S=String(u),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return ae}function D(u,S,E){if(u==null)return u;var k=[],j=0;return y(u,k,"","",function(W){return S.call(E,W,j++)}),k}function I(u){if(u._status===-1){var S=u._result;S=S(),S.then(function(E){(u._status===0||u._status===-1)&&(u._status=1,u._result=E)},function(E){(u._status===0||u._status===-1)&&(u._status=2,u._result=E)}),u._status===-1&&(u._status=0,u._result=S)}if(u._status===1)return u._result.default;throw u._result}var ie=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},ce={map:D,forEach:function(u,S,E){D(u,function(){S.apply(this,arguments)},E)},count:function(u){var S=0;return D(u,function(){S++}),S},toArray:function(u){return D(u,function(S){return S})||[]},only:function(u){if(!st(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return L.Activity=R,L.Children=ce,L.Component=Qe,L.Fragment=Y,L.Profiler=G,L.PureComponent=De,L.StrictMode=h,L.Suspense=M,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,L.__COMPILER_RUNTIME={__proto__:null,c:function(u){return Z.H.useMemoCache(u)}},L.cache=function(u){return function(){return u.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(u,S,E){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var k=Ae({},u.props),j=u.key;if(S!=null)for(W in S.key!==void 0&&(j=""+S.key),S)!Ge.call(S,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&S.ref===void 0||(k[W]=S[W]);var W=arguments.length-2;if(W===1)k.children=E;else if(1<W){for(var ae=Array(W),je=0;je<W;je++)ae[je]=arguments[je+2];k.children=ae}return lt(u.type,j,k)},L.createContext=function(u){return u={$$typeof:O,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:P,_context:u},u},L.createElement=function(u,S,E){var k,j={},W=null;if(S!=null)for(k in S.key!==void 0&&(W=""+S.key),S)Ge.call(S,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(j[k]=S[k]);var ae=arguments.length-2;if(ae===1)j.children=E;else if(1<ae){for(var je=Array(ae),Se=0;Se<ae;Se++)je[Se]=arguments[Se+2];j.children=je}if(u&&u.defaultProps)for(k in ae=u.defaultProps,ae)j[k]===void 0&&(j[k]=ae[k]);return lt(u,W,j)},L.createRef=function(){return{current:null}},L.forwardRef=function(u){return{$$typeof:K,render:u}},L.isValidElement=st,L.lazy=function(u){return{$$typeof:H,_payload:{_status:-1,_result:u},_init:I}},L.memo=function(u,S){return{$$typeof:T,type:u,compare:S===void 0?null:S}},L.startTransition=function(u){var S=Z.T,E={};Z.T=E;try{var k=u(),j=Z.S;j!==null&&j(E,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(ze,ie)}catch(W){ie(W)}finally{S!==null&&E.types!==null&&(S.types=E.types),Z.T=S}},L.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},L.use=function(u){return Z.H.use(u)},L.useActionState=function(u,S,E){return Z.H.useActionState(u,S,E)},L.useCallback=function(u,S){return Z.H.useCallback(u,S)},L.useContext=function(u){return Z.H.useContext(u)},L.useDebugValue=function(){},L.useDeferredValue=function(u,S){return Z.H.useDeferredValue(u,S)},L.useEffect=function(u,S){return Z.H.useEffect(u,S)},L.useEffectEvent=function(u){return Z.H.useEffectEvent(u)},L.useId=function(){return Z.H.useId()},L.useImperativeHandle=function(u,S,E){return Z.H.useImperativeHandle(u,S,E)},L.useInsertionEffect=function(u,S){return Z.H.useInsertionEffect(u,S)},L.useLayoutEffect=function(u,S){return Z.H.useLayoutEffect(u,S)},L.useMemo=function(u,S){return Z.H.useMemo(u,S)},L.useOptimistic=function(u,S){return Z.H.useOptimistic(u,S)},L.useReducer=function(u,S,E){return Z.H.useReducer(u,S,E)},L.useRef=function(u){return Z.H.useRef(u)},L.useState=function(u){return Z.H.useState(u)},L.useSyncExternalStore=function(u,S,E){return Z.H.useSyncExternalStore(u,S,E)},L.useTransition=function(){return Z.H.useTransition()},L.version="19.2.0",L}var Sh;function yr(){return Sh||(Sh=1,fr.exports=Fg()),fr.exports}var be=yr(),gr={exports:{}},Ba={},pr={exports:{}},mr={};var wh;function $g(){return wh||(wh=1,(function(x){function J(y,D){var I=y.length;y.push(D);e:for(;0<I;){var ie=I-1>>>1,ce=y[ie];if(0<G(ce,D))y[ie]=D,y[I]=ce,I=ie;else break e}}function Y(y){return y.length===0?null:y[0]}function h(y){if(y.length===0)return null;var D=y[0],I=y.pop();if(I!==D){y[0]=I;e:for(var ie=0,ce=y.length,u=ce>>>1;ie<u;){var S=2*(ie+1)-1,E=y[S],k=S+1,j=y[k];if(0>G(E,I))k<ce&&0>G(j,E)?(y[ie]=j,y[k]=I,ie=k):(y[ie]=E,y[S]=I,ie=S);else if(k<ce&&0>G(j,I))y[ie]=j,y[k]=I,ie=k;else break e}}return D}function G(y,D){var I=y.sortIndex-D.sortIndex;return I!==0?I:y.id-D.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var P=performance;x.unstable_now=function(){return P.now()}}else{var O=Date,K=O.now();x.unstable_now=function(){return O.now()-K}}var M=[],T=[],H=1,R=null,q=3,oe=!1,me=!1,Ae=!1,Oe=!1,Qe=typeof setTimeout=="function"?setTimeout:null,Ue=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function Ke(y){for(var D=Y(T);D!==null;){if(D.callback===null)h(T);else if(D.startTime<=y)h(T),D.sortIndex=D.expirationTime,J(M,D);else break;D=Y(T)}}function at(y){if(Ae=!1,Ke(y),!me)if(Y(M)!==null)me=!0,ze||(ze=!0,Be());else{var D=Y(T);D!==null&&We(at,D.startTime-y)}}var ze=!1,Z=-1,Ge=5,lt=-1;function zt(){return Oe?!0:!(x.unstable_now()-lt<Ge)}function st(){if(Oe=!1,ze){var y=x.unstable_now();lt=y;var D=!0;try{e:{me=!1,Ae&&(Ae=!1,Ue(Z),Z=-1),oe=!0;var I=q;try{t:{for(Ke(y),R=Y(M);R!==null&&!(R.expirationTime>y&&zt());){var ie=R.callback;if(typeof ie=="function"){R.callback=null,q=R.priorityLevel;var ce=ie(R.expirationTime<=y);if(y=x.unstable_now(),typeof ce=="function"){R.callback=ce,Ke(y),D=!0;break t}R===Y(M)&&h(M),Ke(y)}else h(M);R=Y(M)}if(R!==null)D=!0;else{var u=Y(T);u!==null&&We(at,u.startTime-y),D=!1}}break e}finally{R=null,q=I,oe=!1}D=void 0}}finally{D?Be():ze=!1}}}var Be;if(typeof De=="function")Be=function(){De(st)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,mt=Dt.port2;Dt.port1.onmessage=st,Be=function(){mt.postMessage(null)}}else Be=function(){Qe(st,0)};function We(y,D){Z=Qe(function(){y(x.unstable_now())},D)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(y){y.callback=null},x.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<y?Math.floor(1e3/y):5},x.unstable_getCurrentPriorityLevel=function(){return q},x.unstable_next=function(y){switch(q){case 1:case 2:case 3:var D=3;break;default:D=q}var I=q;q=D;try{return y()}finally{q=I}},x.unstable_requestPaint=function(){Oe=!0},x.unstable_runWithPriority=function(y,D){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var I=q;q=y;try{return D()}finally{q=I}},x.unstable_scheduleCallback=function(y,D,I){var ie=x.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ie+I:ie):I=ie,y){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=I+ce,y={id:H++,callback:D,priorityLevel:y,startTime:I,expirationTime:ce,sortIndex:-1},I>ie?(y.sortIndex=I,J(T,y),Y(M)===null&&y===Y(T)&&(Ae?(Ue(Z),Z=-1):Ae=!0,We(at,I-ie))):(y.sortIndex=ce,J(M,y),me||oe||(me=!0,ze||(ze=!0,Be()))),y},x.unstable_shouldYield=zt,x.unstable_wrapCallback=function(y){var D=q;return function(){var I=q;q=D;try{return y.apply(this,arguments)}finally{q=I}}}})(mr)),mr}var Ah;function ep(){return Ah||(Ah=1,pr.exports=$g()),pr.exports}var vr={exports:{}},Xe={};var Th;function tp(){if(Th)return Xe;Th=1;var x=yr();function J(M){var T="https://react.dev/errors/"+M;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)T+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+M+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Y(){}var h={d:{f:Y,r:function(){throw Error(J(522))},D:Y,C:Y,L:Y,m:Y,X:Y,S:Y,M:Y},p:0,findDOMNode:null},G=Symbol.for("react.portal");function P(M,T,H){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:R==null?null:""+R,children:M,containerInfo:T,implementation:H}}var O=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function K(M,T){if(M==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Xe.createPortal=function(M,T){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(J(299));return P(M,T,null,H)},Xe.flushSync=function(M){var T=O.T,H=h.p;try{if(O.T=null,h.p=2,M)return M()}finally{O.T=T,h.p=H,h.d.f()}},Xe.preconnect=function(M,T){typeof M=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(M,T))},Xe.prefetchDNS=function(M){typeof M=="string"&&h.d.D(M)},Xe.preinit=function(M,T){if(typeof M=="string"&&T&&typeof T.as=="string"){var H=T.as,R=K(H,T.crossOrigin),q=typeof T.integrity=="string"?T.integrity:void 0,oe=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;H==="style"?h.d.S(M,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:R,integrity:q,fetchPriority:oe}):H==="script"&&h.d.X(M,{crossOrigin:R,integrity:q,fetchPriority:oe,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Xe.preinitModule=function(M,T){if(typeof M=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var H=K(T.as,T.crossOrigin);h.d.M(M,{crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(M)},Xe.preload=function(M,T){if(typeof M=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var H=T.as,R=K(H,T.crossOrigin);h.d.L(M,H,{crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Xe.preloadModule=function(M,T){if(typeof M=="string")if(T){var H=K(T.as,T.crossOrigin);h.d.m(M,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(M)},Xe.requestFormReset=function(M){h.d.r(M)},Xe.unstable_batchedUpdates=function(M,T){return M(T)},Xe.useFormState=function(M,T,H){return O.H.useFormState(M,T,H)},Xe.useFormStatus=function(){return O.H.useHostTransitionStatus()},Xe.version="19.2.0",Xe}var Ch;function np(){if(Ch)return vr.exports;Ch=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(J){console.error(J)}}return x(),vr.exports=tp(),vr.exports}var xh;function ip(){if(xh)return Ba;xh=1;var x=ep(),J=yr(),Y=np();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function P(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function O(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function K(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(P(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=P(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return M(a),e;if(l===i)return M(a),t;l=l.sibling}throw Error(h(188))}if(n.return!==i.return)n=a,i=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=l;break}if(o===i){s=!0,i=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,i=a;break}if(o===i){s=!0,i=l,n=a;break}o=o.sibling}if(!s)throw Error(h(189))}}if(n.alternate!==i)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function H(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=H(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,q=Symbol.for("react.element"),oe=Symbol.for("react.transitional.element"),me=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Ue=Symbol.for("react.consumer"),De=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var Dt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ae:return"Fragment";case Qe:return"Profiler";case Oe:return"StrictMode";case at:return"Suspense";case ze:return"SuspenseList";case lt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case me:return"Portal";case De:return e.displayName||"Context";case Ue:return(e._context.displayName||"Context")+".Consumer";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:mt(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return mt(e(t))}catch{}}return null}var We=Array.isArray,y=J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ie=[],ce=-1;function u(e){return{current:e}}function S(e){0>ce||(e.current=ie[ce],ie[ce]=null,ce--)}function E(e,t){ce++,ie[ce]=e.current,e.current=t}var k=u(null),j=u(null),W=u(null),ae=u(null);function je(e,t){switch(E(W,t),E(j,e),E(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jd(t),e=Ld(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(k),E(k,e)}function Se(){S(k),S(j),S(W)}function kn(e){e.memoizedState!==null&&E(ae,e);var t=k.current,n=Ld(t,e.type);t!==n&&(E(j,e),E(k,n))}function Xn(e){j.current===e&&(S(k),S(j)),ae.current===e&&(S(ae),Ea._currentValue=I)}var Hi,qi;function Bt(e){if(Hi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hi=t&&t[1]||"",qi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hi+e+qi}var Kn=!1;function Ii(e,t){if(!e||Kn)return"";Kn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var m=v}Reflect.construct(e,[],A)}else{try{A.call()}catch(v){m=v}e.call(A.prototype)}}else{try{throw Error()}catch(v){m=v}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var r=s.split(`
`),p=o.split(`
`);for(a=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;if(i===r.length||a===p.length)for(i=r.length-1,a=p.length-1;1<=i&&0<=a&&r[i]!==p[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==p[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==p[a]){var b=`
`+r[i].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=i&&0<=a);break}}}finally{Kn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Fl(e,t){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==t&&t!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Ii(e.type,!1);case 11:return Ii(e.type.render,!1);case 1:return Ii(e.type,!0);case 31:return Bt("Activity");default:return""}}function Ha(e){try{var t="",n=null;do t+=Fl(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Oi=Object.prototype.hasOwnProperty,Ui=x.unstable_scheduleCallback,Et=x.unstable_cancelCallback,C=x.unstable_shouldYield,X=x.unstable_requestPaint,Q=x.unstable_now,Ht=x.unstable_getCurrentPriorityLevel,Gi=x.unstable_ImmediatePriority,br=x.unstable_UserBlockingPriority,qa=x.unstable_NormalPriority,Rh=x.unstable_LowPriority,Sr=x.unstable_IdlePriority,Nh=x.log,zh=x.unstable_setDisableYieldValue,ji=null,ot=null;function an(e){if(typeof Nh=="function"&&zh(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(ji,e)}catch{}}var rt=Math.clz32?Math.clz32:qh,Bh=Math.log,Hh=Math.LN2;function qh(e){return e>>>=0,e===0?32:31-(Bh(e)/Hh|0)|0}var Ia=256,Oa=262144,Ua=4194304;function Rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ga(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?a=Rn(i):(s&=o,s!==0?a=Rn(s):n||(n=o&~e,n!==0&&(a=Rn(n))))):(o=i&~l,o!==0?a=Rn(o):s!==0?a=Rn(s):n||(n=i&~e,n!==0&&(a=Rn(n)))),a===0?0:t!==0&&t!==a&&(t&l)===0&&(l=a&-a,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:a}function Li(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ih(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(){var e=Ua;return Ua<<=1,(Ua&62914560)===0&&(Ua=4194304),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oh(e,t,n,i,a,l){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(n=s&~n;0<n;){var b=31-rt(n),A=1<<b;o[b]=0,r[b]=-1;var m=p[b];if(m!==null)for(p[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}n&=~A}i!==0&&Ar(e,i,0),l!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function Ar(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Tr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-rt(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Cr(e,t){var n=t&-t;return n=(n&42)!==0?1:es(n),(n&(e.suspendedLanes|t))!==0?0:n}function es(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xr(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:uh(e.type))}function Mr(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ln=Math.random().toString(36).slice(2),Le="__reactFiber$"+ln,Je="__reactProps$"+ln,Zn="__reactContainer$"+ln,ns="__reactEvents$"+ln,Uh="__reactListeners$"+ln,Gh="__reactHandles$"+ln,Dr="__reactResources$"+ln,_i="__reactMarker$"+ln;function is(e){delete e[Le],delete e[Je],delete e[ns],delete e[Uh],delete e[Gh]}function Jn(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zn]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xd(e);e!==null;){if(n=e[Le])return n;e=Xd(e)}return t}e=n,n=e.parentNode}return null}function Fn(e){if(e=e[Le]||e[Zn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function $n(e){var t=e[Dr];return t||(t=e[Dr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[_i]=!0}var Er=new Set,kr={};function Nn(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(kr[e]=t,e=0;e<t.length;e++)Er.add(t[e])}var jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rr={},Nr={};function Lh(e){return Oi.call(Nr,e)?!0:Oi.call(Rr,e)?!1:jh.test(e)?Nr[e]=!0:(Rr[e]=!0,!1)}function ja(e,t,n){if(Lh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function La(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Gt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ph(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function as(e){if(!e._valueTracker){var t=zr(e)?"checked":"value";e._valueTracker=Ph(e,t,""+e[t])}}function Br(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=zr(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _h=/[\n"\\]/g;function yt(e){return e.replace(_h,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ls(e,t,n,i,a,l,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?ss(e,s,vt(t)):n!=null?ss(e,s,vt(n)):i!=null&&e.removeAttribute("value"),a==null&&l!=null&&(e.defaultChecked=!!l),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vt(o):e.removeAttribute("name")}function Hr(e,t,n,i,a,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){as(e);return}n=n!=null?""+vt(n):"",t=t!=null?""+vt(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),as(e)}function ss(e,t,n){t==="number"&&Pa(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ti(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function qr(e,t,n){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vt(n):""}function Ir(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(h(92));if(We(i)){if(1<i.length)throw Error(h(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=vt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),as(e)}function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Or(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Vh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ur(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Or(e,a,i)}else for(var l in t)t.hasOwnProperty(l)&&Or(e,l,t[l])}function os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _a(e){return Qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var rs=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,ai=null;function Gr(e){var t=Fn(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(ls(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Je]||null;if(!a)throw Error(h(90));ls(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Br(i)}break e;case"textarea":qr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ti(e,!!n.multiple,t,!1)}}}var us=!1;function jr(e,t,n){if(us)return e(t,n);us=!0;try{var i=e(t);return i}finally{if(us=!1,(ii!==null||ai!==null)&&(Rl(),ii&&(t=ii,e=ai,ai=ii=null,Gr(t),e)))for(t=0;t<e.length;t++)Gr(e[t])}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Je]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=!1;if(Lt)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ds=!1}var sn=null,hs=null,Va=null;function Lr(){if(Va)return Va;var e,t=hs,n=t.length,i,a="value"in sn?sn.value:sn.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[l-i];i++);return Va=a.slice(e,1<i?1-i:void 0)}function Ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function Pr(){return!1}function Fe(e){function t(n,i,a,l,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qa:Pr,this.isPropagationStopped=Pr,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Fe(zn),Wi=R({},zn,{view:0,detail:0}),Wh=Fe(Wi),fs,gs,Xi,Xa=R({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xi&&(Xi&&e.type==="mousemove"?(fs=e.screenX-Xi.screenX,gs=e.screenY-Xi.screenY):gs=fs=0,Xi=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:gs}}),_r=Fe(Xa),Xh=R({},Xa,{dataTransfer:0}),Kh=Fe(Xh),Zh=R({},Wi,{relatedTarget:0}),ps=Fe(Zh),Jh=R({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=Fe(Jh),$h=R({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=Fe($h),tf=R({},zn,{data:0}),Vr=Fe(tf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lf[e])?!!t[e]:!1}function ms(){return sf}var of=R({},Wi,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=Fe(of),cf=R({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yr=Fe(cf),uf=R({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),df=Fe(uf),hf=R({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=Fe(hf),gf=R({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Fe(gf),mf=R({},zn,{newState:0,oldState:0}),vf=Fe(mf),yf=[9,13,27,32],vs=Lt&&"CompositionEvent"in window,Ki=null;Lt&&"documentMode"in document&&(Ki=document.documentMode);var bf=Lt&&"TextEvent"in window&&!Ki,Qr=Lt&&(!vs||Ki&&8<Ki&&11>=Ki),Wr=" ",Xr=!1;function Kr(e,t){switch(e){case"keyup":return yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function Sf(e,t){switch(e){case"compositionend":return Zr(t);case"keypress":return t.which!==32?null:(Xr=!0,Wr);case"textInput":return e=t.data,e===Wr&&Xr?null:e;default:return null}}function wf(e,t){if(li)return e==="compositionend"||!vs&&Kr(e,t)?(e=Lr(),Va=hs=sn=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qr&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Fr(e,t,n,i){ii?ai?ai.push(i):ai=[i]:ii=i,t=Ol(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zi=null,Ji=null;function Tf(e){Hd(e,0)}function Ka(e){var t=Vi(e);if(Br(t))return e}function $r(e,t){if(e==="change")return t}var ec=!1;if(Lt){var ys;if(Lt){var bs="oninput"in document;if(!bs){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),bs=typeof tc.oninput=="function"}ys=bs}else ys=!1;ec=ys&&(!document.documentMode||9<document.documentMode)}function nc(){Zi&&(Zi.detachEvent("onpropertychange",ic),Ji=Zi=null)}function ic(e){if(e.propertyName==="value"&&Ka(Ji)){var t=[];Fr(t,Ji,e,cs(e)),jr(Tf,t)}}function Cf(e,t,n){e==="focusin"?(nc(),Zi=t,Ji=n,Zi.attachEvent("onpropertychange",ic)):e==="focusout"&&nc()}function xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ka(Ji)}function Mf(e,t){if(e==="click")return Ka(t)}function Df(e,t){if(e==="input"||e==="change")return Ka(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Ef;function Fi(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Oi.call(t,a)||!ct(e[a],t[a]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=ac(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pa(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pa(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kf=Lt&&"documentMode"in document&&11>=document.documentMode,si=null,ws=null,$i=null,As=!1;function rc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;As||si==null||si!==Pa(i)||(i=si,"selectionStart"in i&&Ss(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$i&&Fi($i,i)||($i=i,i=Ol(ws,"onSelect"),0<i.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=si)))}function Bn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oi={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionrun:Bn("Transition","TransitionRun"),transitionstart:Bn("Transition","TransitionStart"),transitioncancel:Bn("Transition","TransitionCancel"),transitionend:Bn("Transition","TransitionEnd")},Ts={},cc={};Lt&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Hn(e){if(Ts[e])return Ts[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cc)return Ts[e]=t[n];return e}var uc=Hn("animationend"),dc=Hn("animationiteration"),hc=Hn("animationstart"),Rf=Hn("transitionrun"),Nf=Hn("transitionstart"),zf=Hn("transitioncancel"),fc=Hn("transitionend"),gc=new Map,Cs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cs.push("scrollEnd");function kt(e,t){gc.set(e,t),Nn(t,[e])}var Za=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],ri=0,xs=0;function Ja(){for(var e=ri,t=xs=ri=0;t<e;){var n=bt[t];bt[t++]=null;var i=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var l=bt[t];if(bt[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}l!==0&&pc(n,a,l)}}function Fa(e,t,n,i){bt[ri++]=e,bt[ri++]=t,bt[ri++]=n,bt[ri++]=i,xs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ms(e,t,n,i){return Fa(e,t,n,i),$a(e)}function qn(e,t){return Fa(e,null,null,t),$a(e)}function pc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(a=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,a&&t!==null&&(a=31-rt(n),e=l.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),l):null}function $a(e){if(50<wa)throw wa=0,Io=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function Bf(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,i){return new Bf(e,t,n,i)}function Ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function el(e,t,n,i,a,l){var s=0;if(i=e,typeof e=="function")Ds(e)&&(s=1);else if(typeof e=="string")s=Ug(e,n,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case lt:return e=ut(31,n,t,a),e.elementType=lt,e.lanes=l,e;case Ae:return In(n.children,a,l,t);case Oe:s=8,a|=24;break;case Qe:return e=ut(12,n,t,a|2),e.elementType=Qe,e.lanes=l,e;case at:return e=ut(13,n,t,a),e.elementType=at,e.lanes=l,e;case ze:return e=ut(19,n,t,a),e.elementType=ze,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:s=10;break e;case Ue:s=9;break e;case Ke:s=11;break e;case Z:s=14;break e;case Ge:s=16,i=null;break e}s=29,n=Error(h(130,e===null?"null":typeof e,"")),i=null}return t=ut(s,n,t,a),t.elementType=e,t.type=i,t.lanes=l,t}function In(e,t,n,i){return e=ut(7,e,i,t),e.lanes=n,e}function Es(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function vc(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function ks(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yc=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var n=yc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ha(t)},yc.set(e,t),t)}return{value:e,source:t,stack:Ha(t)}}var ui=[],di=0,tl=null,ea=0,wt=[],At=0,on=null,qt=1,It="";function _t(e,t){ui[di++]=ea,ui[di++]=tl,tl=e,ea=t}function bc(e,t,n){wt[At++]=qt,wt[At++]=It,wt[At++]=on,on=e;var i=qt;e=It;var a=32-rt(i)-1;i&=~(1<<a),n+=1;var l=32-rt(t)+a;if(30<l){var s=a-a%5;l=(i&(1<<s)-1).toString(32),i>>=s,a-=s,qt=1<<32-rt(t)+a|n<<a|i,It=l+e}else qt=1<<l|n<<a|i,It=e}function Rs(e){e.return!==null&&(_t(e,1),bc(e,1,0))}function Ns(e){for(;e===tl;)tl=ui[--di],ui[di]=null,ea=ui[--di],ui[di]=null;for(;e===on;)on=wt[--At],wt[At]=null,It=wt[--At],wt[At]=null,qt=wt[--At],wt[At]=null}function Sc(e,t){wt[At++]=qt,wt[At++]=It,wt[At++]=on,qt=t.id,It=t.overflow,on=e}var Pe=null,ve=null,ne=!1,rn=null,Tt=!1,zs=Error(h(519));function cn(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ta(St(t,e)),zs}function wc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Le]=e,t[Je]=i,n){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(n=0;n<Ta.length;n++)$(Ta[n],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Hr(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Ir(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Ud(t.textContent,n)?(i.popover!=null&&($("beforetoggle",t),$("toggle",t)),i.onScroll!=null&&$("scroll",t),i.onScrollEnd!=null&&$("scrollend",t),i.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||cn(e,!0)}function Ac(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Pe=Pe.return}}function hi(e){if(e!==Pe)return!1;if(!ne)return Ac(e),ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Jo(e.type,e.memoizedProps)),n=!n),n&&ve&&cn(e),Ac(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Wd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Wd(e)}else t===27?(t=ve,Tn(e.type)?(e=nr,nr=null,ve=e):ve=t):ve=Pe?xt(e.stateNode.nextSibling):null;return!0}function On(){ve=Pe=null,ne=!1}function Bs(){var e=rn;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),rn=null),e}function ta(e){rn===null?rn=[e]:rn.push(e)}var Hs=u(null),Un=null,Vt=null;function un(e,t,n){E(Hs,t._currentValue),t._currentValue=n}function Yt(e){e._currentValue=Hs.current,S(Hs)}function qs(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Is(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){var s=a.child;l=l.firstContext;e:for(;l!==null;){var o=l;l=a;for(var r=0;r<t.length;r++)if(o.context===t[r]){l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),qs(l.return,n,e),i||(s=null);break e}l=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(h(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qs(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fi(e,t,n,i){e=null;for(var a=t,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var o=a.type;ct(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===ae.current){if(s=a.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ea):e=[Ea])}a=a.return}e!==null&&Is(t,e,n,i),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gn(e){Un=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return Tc(Un,e)}function il(e,t){return Un===null&&Gn(e),Tc(e,t)}function Tc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vt===null){if(e===null)throw Error(h(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return n}var Hf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qf=x.unstable_scheduleCallback,If=x.unstable_NormalPriority,Ee={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Os(){return{controller:new Hf,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&qf(If,function(){e.controller.abort()})}var ia=null,Us=0,gi=0,pi=null;function Of(e,t){if(ia===null){var n=ia=[];Us=0,gi=Po(),pi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Us++,t.then(Cc,Cc),t}function Cc(){if(--Us===0&&ia!==null){pi!==null&&(pi.status="fulfilled");var e=ia;ia=null,gi=0,pi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Uf(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var xc=y.S;y.S=function(e,t){rd=Q(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Of(e,t),xc!==null&&xc(e,t)};var jn=u(null);function Gs(){var e=jn.current;return e!==null?e:pe.pooledCache}function al(e,t){t===null?E(jn,jn.current):E(jn,t.pool)}function Mc(){var e=Gs();return e===null?null:{parent:Ee._currentValue,pool:e}}var mi=Error(h(460)),js=Error(h(474)),ll=Error(h(542)),sl={then:function(){}};function Dc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ec(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jt,jt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rc(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rc(e),e}throw Pn=t,mi}}function Ln(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Pn=n,mi):n}}var Pn=null;function kc(){if(Pn===null)throw Error(h(459));var e=Pn;return Pn=null,e}function Rc(e){if(e===mi||e===ll)throw Error(h(483))}var vi=null,aa=0;function ol(e){var t=aa;return aa+=1,vi===null&&(vi=[]),Ec(vi,e,t)}function la(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rl(e,t){throw t.$$typeof===q?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nc(e){function t(f,c){if(e){var g=f.deletions;g===null?(f.deletions=[c],f.flags|=16):g.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function i(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function a(f,c){return f=Pt(f,c),f.index=0,f.sibling=null,f}function l(f,c,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags|=67108866,c):g):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,c,g,w){return c===null||c.tag!==6?(c=Es(g,f.mode,w),c.return=f,c):(c=a(c,g),c.return=f,c)}function r(f,c,g,w){var B=g.type;return B===Ae?b(f,c,g.props.children,w,g.key):c!==null&&(c.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ge&&Ln(B)===c.type)?(c=a(c,g.props),la(c,g),c.return=f,c):(c=el(g.type,g.key,g.props,null,f.mode,w),la(c,g),c.return=f,c)}function p(f,c,g,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=ks(g,f.mode,w),c.return=f,c):(c=a(c,g.children||[]),c.return=f,c)}function b(f,c,g,w,B){return c===null||c.tag!==7?(c=In(g,f.mode,w,B),c.return=f,c):(c=a(c,g),c.return=f,c)}function A(f,c,g){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Es(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oe:return g=el(c.type,c.key,c.props,null,f.mode,g),la(g,c),g.return=f,g;case me:return c=ks(c,f.mode,g),c.return=f,c;case Ge:return c=Ln(c),A(f,c,g)}if(We(c)||Be(c))return c=In(c,f.mode,g,null),c.return=f,c;if(typeof c.then=="function")return A(f,ol(c),g);if(c.$$typeof===De)return A(f,il(f,c),g);rl(f,c)}return null}function m(f,c,g,w){var B=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return B!==null?null:o(f,c,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oe:return g.key===B?r(f,c,g,w):null;case me:return g.key===B?p(f,c,g,w):null;case Ge:return g=Ln(g),m(f,c,g,w)}if(We(g)||Be(g))return B!==null?null:b(f,c,g,w,null);if(typeof g.then=="function")return m(f,c,ol(g),w);if(g.$$typeof===De)return m(f,c,il(f,g),w);rl(f,g)}return null}function v(f,c,g,w,B){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return f=f.get(g)||null,o(c,f,""+w,B);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oe:return f=f.get(w.key===null?g:w.key)||null,r(c,f,w,B);case me:return f=f.get(w.key===null?g:w.key)||null,p(c,f,w,B);case Ge:return w=Ln(w),v(f,c,g,w,B)}if(We(w)||Be(w))return f=f.get(g)||null,b(c,f,w,B,null);if(typeof w.then=="function")return v(f,c,g,ol(w),B);if(w.$$typeof===De)return v(f,c,g,il(c,w),B);rl(c,w)}return null}function N(f,c,g,w){for(var B=null,le=null,z=c,V=c=0,te=null;z!==null&&V<g.length;V++){z.index>V?(te=z,z=null):te=z.sibling;var se=m(f,z,g[V],w);if(se===null){z===null&&(z=te);break}e&&z&&se.alternate===null&&t(f,z),c=l(se,c,V),le===null?B=se:le.sibling=se,le=se,z=te}if(V===g.length)return n(f,z),ne&&_t(f,V),B;if(z===null){for(;V<g.length;V++)z=A(f,g[V],w),z!==null&&(c=l(z,c,V),le===null?B=z:le.sibling=z,le=z);return ne&&_t(f,V),B}for(z=i(z);V<g.length;V++)te=v(z,f,V,g[V],w),te!==null&&(e&&te.alternate!==null&&z.delete(te.key===null?V:te.key),c=l(te,c,V),le===null?B=te:le.sibling=te,le=te);return e&&z.forEach(function(En){return t(f,En)}),ne&&_t(f,V),B}function U(f,c,g,w){if(g==null)throw Error(h(151));for(var B=null,le=null,z=c,V=c=0,te=null,se=g.next();z!==null&&!se.done;V++,se=g.next()){z.index>V?(te=z,z=null):te=z.sibling;var En=m(f,z,se.value,w);if(En===null){z===null&&(z=te);break}e&&z&&En.alternate===null&&t(f,z),c=l(En,c,V),le===null?B=En:le.sibling=En,le=En,z=te}if(se.done)return n(f,z),ne&&_t(f,V),B;if(z===null){for(;!se.done;V++,se=g.next())se=A(f,se.value,w),se!==null&&(c=l(se,c,V),le===null?B=se:le.sibling=se,le=se);return ne&&_t(f,V),B}for(z=i(z);!se.done;V++,se=g.next())se=v(z,f,V,se.value,w),se!==null&&(e&&se.alternate!==null&&z.delete(se.key===null?V:se.key),c=l(se,c,V),le===null?B=se:le.sibling=se,le=se);return e&&z.forEach(function(Kg){return t(f,Kg)}),ne&&_t(f,V),B}function ge(f,c,g,w){if(typeof g=="object"&&g!==null&&g.type===Ae&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oe:e:{for(var B=g.key;c!==null;){if(c.key===B){if(B=g.type,B===Ae){if(c.tag===7){n(f,c.sibling),w=a(c,g.props.children),w.return=f,f=w;break e}}else if(c.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ge&&Ln(B)===c.type){n(f,c.sibling),w=a(c,g.props),la(w,g),w.return=f,f=w;break e}n(f,c);break}else t(f,c);c=c.sibling}g.type===Ae?(w=In(g.props.children,f.mode,w,g.key),w.return=f,f=w):(w=el(g.type,g.key,g.props,null,f.mode,w),la(w,g),w.return=f,f=w)}return s(f);case me:e:{for(B=g.key;c!==null;){if(c.key===B)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),w=a(c,g.children||[]),w.return=f,f=w;break e}else{n(f,c);break}else t(f,c);c=c.sibling}w=ks(g,f.mode,w),w.return=f,f=w}return s(f);case Ge:return g=Ln(g),ge(f,c,g,w)}if(We(g))return N(f,c,g,w);if(Be(g)){if(B=Be(g),typeof B!="function")throw Error(h(150));return g=B.call(g),U(f,c,g,w)}if(typeof g.then=="function")return ge(f,c,ol(g),w);if(g.$$typeof===De)return ge(f,c,il(f,g),w);rl(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),w=a(c,g),w.return=f,f=w):(n(f,c),w=Es(g,f.mode,w),w.return=f,f=w),s(f)):n(f,c)}return function(f,c,g,w){try{aa=0;var B=ge(f,c,g,w);return vi=null,B}catch(z){if(z===mi||z===ll)throw z;var le=ut(29,z,null,f.mode);return le.lanes=w,le.return=f,le}finally{}}}var _n=Nc(!0),zc=Nc(!1),dn=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(re&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=$a(e),pc(e,null,n),t}return Fa(e,i,t,n),$a(e)}function sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Tr(e,n)}}function _s(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Vs=!1;function oa(){if(Vs){var e=pi;if(e!==null)throw e}}function ra(e,t,n,i){Vs=!1;var a=e.updateQueue;dn=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var r=o,p=r.next;r.next=null,s===null?l=p:s.next=p,s=r;var b=e.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==s&&(o===null?b.firstBaseUpdate=p:o.next=p,b.lastBaseUpdate=r))}if(l!==null){var A=a.baseState;s=0,b=p=r=null,o=l;do{var m=o.lane&-536870913,v=m!==o.lane;if(v?(ee&m)===m:(i&m)===m){m!==0&&m===gi&&(Vs=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var N=e,U=o;m=t;var ge=n;switch(U.tag){case 1:if(N=U.payload,typeof N=="function"){A=N.call(ge,A,m);break e}A=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=U.payload,m=typeof N=="function"?N.call(ge,A,m):N,m==null)break e;A=R({},A,m);break e;case 2:dn=!0}}m=o.callback,m!==null&&(e.flags|=64,v&&(e.flags|=8192),v=a.callbacks,v===null?a.callbacks=[m]:v.push(m))}else v={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(p=b=v,r=A):b=b.next=v,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);b===null&&(r=A),a.baseState=r,a.firstBaseUpdate=p,a.lastBaseUpdate=b,l===null&&(a.shared.lanes=0),yn|=s,e.lanes=s,e.memoizedState=A}}function Bc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Hc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Bc(n[e],t)}var yi=u(null),cl=u(0);function qc(e,t){e=en,E(cl,e),E(yi,t),en=e|t.baseLanes}function Ys(){E(cl,en),E(yi,yi.current)}function Qs(){en=cl.current,S(yi),S(cl)}var dt=u(null),Ct=null;function gn(e){var t=e.alternate;E(xe,xe.current&1),E(dt,e),Ct===null&&(t===null||yi.current!==null||t.memoizedState!==null)&&(Ct=e)}function Ws(e){E(xe,xe.current),E(dt,e),Ct===null&&(Ct=e)}function Ic(e){e.tag===22?(E(xe,xe.current),E(dt,e),Ct===null&&(Ct=e)):pn()}function pn(){E(xe,xe.current),E(dt,dt.current)}function ht(e){S(dt),Ct===e&&(Ct=null),S(xe)}var xe=u(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||er(n)||tr(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,_=null,he=null,ke=null,dl=!1,bi=!1,Vn=!1,hl=0,ca=0,Si=null,Gf=0;function Te(){throw Error(h(321))}function Xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ks(e,t,n,i,a,l){return Qt=l,_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?bu:uo,Vn=!1,l=n(i,a),Vn=!1,bi&&(l=Uc(t,n,i,a)),Oc(e),l}function Oc(e){y.H=ha;var t=he!==null&&he.next!==null;if(Qt=0,ke=he=_=null,dl=!1,ca=0,Si=null,t)throw Error(h(300));e===null||Re||(e=e.dependencies,e!==null&&nl(e)&&(Re=!0))}function Uc(e,t,n,i){_=e;var a=0;do{if(bi&&(Si=null),ca=0,bi=!1,25<=a)throw Error(h(301));if(a+=1,ke=he=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=Su,l=t(n,i)}while(bi);return l}function jf(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?ua(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(_.flags|=1024),t}function Zs(){var e=hl!==0;return hl=0,e}function Js(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fs(e){if(dl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dl=!1}Qt=0,ke=he=_=null,bi=!1,ca=hl=0,Si=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?_.memoizedState=ke=e:ke=ke.next=e,ke}function Me(){if(he===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ke===null?_.memoizedState:ke.next;if(t!==null)ke=t,he=e;else{if(e===null)throw _.alternate===null?Error(h(467)):Error(h(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ke===null?_.memoizedState=ke=e:ke=ke.next=e}return ke}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ua(e){var t=ca;return ca+=1,Si===null&&(Si=[]),e=Ec(Si,e,t),t=_,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?bu:uo),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ua(e);if(e.$$typeof===De)return _e(e)}throw Error(h(438,String(e)))}function $s(e){var t=null,n=_.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=_.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fl(),_.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=zt;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=Me();return eo(t,he,e)}function eo(e,t,n){var i=e.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=n;var a=e.baseQueue,l=i.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}t.baseQueue=a=l,i.pending=null}if(l=e.baseState,a===null)e.memoizedState=l;else{t=a.next;var o=s=null,r=null,p=t,b=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(ee&A)===A:(Qt&A)===A){var m=p.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===gi&&(b=!0);else if((Qt&m)===m){p=p.next,m===gi&&(b=!0);continue}else A={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(o=r=A,s=l):r=r.next=A,_.lanes|=m,yn|=m;A=p.action,Vn&&n(l,A),l=p.hasEagerState?p.eagerState:n(l,A)}else m={lane:A,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(o=r=m,s=l):r=r.next=m,_.lanes|=A,yn|=A;p=p.next}while(p!==null&&p!==t);if(r===null?s=l:r.next=o,!ct(l,e.memoizedState)&&(Re=!0,b&&(n=pi,n!==null)))throw n;e.memoizedState=l,e.baseState=s,e.baseQueue=r,i.lastRenderedState=l}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function to(e){var t=Me(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);ct(l,t.memoizedState)||(Re=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function Gc(e,t,n){var i=_,a=Me(),l=ne;if(l){if(n===void 0)throw Error(h(407));n=n()}else n=t();var s=!ct((he||a).memoizedState,n);if(s&&(a.memoizedState=n,Re=!0),a=a.queue,ao(Pc.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||ke!==null&&ke.memoizedState.tag&1){if(i.flags|=2048,wi(9,{destroy:void 0},Lc.bind(null,i,a,n,t),null),pe===null)throw Error(h(349));l||(Qt&127)!==0||jc(i,t,n)}return n}function jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_.updateQueue,t===null?(t=fl(),_.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lc(e,t,n,i){t.value=n,t.getSnapshot=i,_c(t)&&Vc(e)}function Pc(e,t,n){return n(function(){_c(t)&&Vc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Vc(e){var t=qn(e,2);t!==null&&it(t,e,2)}function no(e){var t=Ze();if(typeof e=="function"){var n=e;if(e=n(),Vn){an(!0);try{n()}finally{an(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Yc(e,t,n,i){return e.baseState=n,eo(e,he,typeof i=="function"?i:Wt)}function Lf(e,t,n,i,a){if(yl(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};y.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,Qc(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Qc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var l=y.T,s={};y.T=s;try{var o=n(a,i),r=y.S;r!==null&&r(s,o),Wc(e,t,o)}catch(p){io(e,t,p)}finally{l!==null&&s.types!==null&&(l.types=s.types),y.T=l}}else try{l=n(a,i),Wc(e,t,l)}catch(p){io(e,t,p)}}function Wc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Xc(e,t,i)},function(i){return io(e,t,i)}):Xc(e,t,n)}function Xc(e,t,n){t.status="fulfilled",t.value=n,Kc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qc(e,n)))}function io(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Kc(t),t=t.next;while(t!==i)}e.action=null}function Kc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zc(e,t){return t}function Jc(e,t){if(ne){var n=pe.formState;if(n!==null){e:{var i=_;if(ne){if(ve){t:{for(var a=ve,l=Tt;a.nodeType!==8;){if(!l){a=null;break t}if(a=xt(a.nextSibling),a===null){a=null;break t}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){ve=xt(a.nextSibling),i=a.data==="F!";break e}}cn(i)}i=!1}i&&(t=n[0])}}return n=Ze(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zc,lastRenderedState:t},n.queue=i,n=mu.bind(null,_,i),i.dispatch=n,i=no(!1),l=co.bind(null,_,!1,i.queue),i=Ze(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Lf.bind(null,_,a,l,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Fc(e){var t=Me();return $c(t,he,e)}function $c(e,t,n){if(t=eo(e,t,Zc)[0],e=pl(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ua(t)}catch(s){throw s===mi?ll:s}else i=t;t=Me();var a=t.queue,l=a.dispatch;return n!==t.memoizedState&&(_.flags|=2048,wi(9,{destroy:void 0},Pf.bind(null,a,n),null)),[i,l,e]}function Pf(e,t){e.action=t}function eu(e){var t=Me(),n=he;if(n!==null)return $c(t,n,e);Me(),t=t.memoizedState,n=Me();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function wi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=_.updateQueue,t===null&&(t=fl(),_.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function tu(){return Me().memoizedState}function ml(e,t,n,i){var a=Ze();_.flags|=e,a.memoizedState=wi(1|t,{destroy:void 0},n,i===void 0?null:i)}function vl(e,t,n,i){var a=Me();i=i===void 0?null:i;var l=a.memoizedState.inst;he!==null&&i!==null&&Xs(i,he.memoizedState.deps)?a.memoizedState=wi(t,l,n,i):(_.flags|=e,a.memoizedState=wi(1|t,l,n,i))}function nu(e,t){ml(8390656,8,e,t)}function ao(e,t){vl(2048,8,e,t)}function _f(e){_.flags|=4;var t=_.updateQueue;if(t===null)t=fl(),_.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function iu(e){var t=Me().memoizedState;return _f({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function au(e,t){return vl(4,2,e,t)}function lu(e,t){return vl(4,4,e,t)}function su(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ou(e,t,n){n=n!=null?n.concat([e]):null,vl(4,4,su.bind(null,t,e),n)}function lo(){}function ru(e,t){var n=Me();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Xs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function cu(e,t){var n=Me();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Xs(t,i[1]))return i[0];if(i=e(),Vn){an(!0);try{e()}finally{an(!1)}}return n.memoizedState=[i,t],i}function so(e,t,n){return n===void 0||(Qt&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ud(),_.lanes|=e,yn|=e,n)}function uu(e,t,n,i){return ct(n,t)?n:yi.current!==null?(e=so(e,n,i),ct(e,t)||(Re=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(ee&261930)===0?(Re=!0,e.memoizedState=n):(e=ud(),_.lanes|=e,yn|=e,t)}function du(e,t,n,i,a){var l=D.p;D.p=l!==0&&8>l?l:8;var s=y.T,o={};y.T=o,co(e,!1,t,n);try{var r=a(),p=y.S;if(p!==null&&p(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Uf(r,i);da(e,t,b,pt(e))}else da(e,t,i,pt(e))}catch(A){da(e,t,{then:function(){},status:"rejected",reason:A},pt())}finally{D.p=l,s!==null&&o.types!==null&&(s.types=o.types),y.T=s}}function Vf(){}function oo(e,t,n,i){if(e.tag!==5)throw Error(h(476));var a=hu(e).queue;du(e,a,t,I,n===null?Vf:function(){return fu(e),n(i)})}function hu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fu(e){var t=hu(e);t.next===null&&(t=e.alternate.memoizedState),da(e,t.next.queue,{},pt())}function ro(){return _e(Ea)}function gu(){return Me().memoizedState}function pu(){return Me().memoizedState}function Yf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pt();e=hn(n);var i=fn(t,e,n);i!==null&&(it(i,t,n),sa(i,t,n)),t={cache:Os()},e.payload=t;return}t=t.return}}function Qf(e,t,n){var i=pt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yl(e)?vu(t,n):(n=Ms(e,t,n,i),n!==null&&(it(n,e,i),yu(n,t,i)))}function mu(e,t,n){var i=pt();da(e,t,n,i)}function da(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yl(e))vu(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,ct(o,s))return Fa(e,t,a,0),pe===null&&Ja(),!1}catch{}finally{}if(n=Ms(e,t,a,i),n!==null)return it(n,e,i),yu(n,t,i),!0}return!1}function co(e,t,n,i){if(i={lane:2,revertLane:Po(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(t)throw Error(h(479))}else t=Ms(e,n,i,2),t!==null&&it(t,e,2)}function yl(e){var t=e.alternate;return e===_||t!==null&&t===_}function vu(e,t){bi=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yu(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Tr(e,n)}}var ha={readContext:_e,use:gl,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};ha.useEffectEvent=Te;var bu={readContext:_e,use:gl,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:nu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ml(4194308,4,su.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){ml(4,2,e,t)},useMemo:function(e,t){var n=Ze();t=t===void 0?null:t;var i=e();if(Vn){an(!0);try{e()}finally{an(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ze();if(n!==void 0){var a=n(t);if(Vn){an(!0);try{n(t)}finally{an(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Qf.bind(null,_,e),[i.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=no(e);var t=e.queue,n=mu.bind(null,_,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:lo,useDeferredValue:function(e,t){var n=Ze();return so(n,e,t)},useTransition:function(){var e=no(!1);return e=du.bind(null,_,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=_,a=Ze();if(ne){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),pe===null)throw Error(h(349));(ee&127)!==0||jc(i,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,nu(Pc.bind(null,i,l,e),[e]),i.flags|=2048,wi(9,{destroy:void 0},Lc.bind(null,i,l,n,t),null),n},useId:function(){var e=Ze(),t=pe.identifierPrefix;if(ne){var n=It,i=qt;n=(i&~(1<<32-rt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=hl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Gf++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ro,useFormState:Jc,useActionState:Jc,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=co.bind(null,_,!0,n),n.dispatch=t,[e,t]},useMemoCache:$s,useCacheRefresh:function(){return Ze().memoizedState=Yf.bind(null,_)},useEffectEvent:function(e){var t=Ze(),n={impl:e};return t.memoizedState=n,function(){if((re&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},uo={readContext:_e,use:gl,useCallback:ru,useContext:_e,useEffect:ao,useImperativeHandle:ou,useInsertionEffect:au,useLayoutEffect:lu,useMemo:cu,useReducer:pl,useRef:tu,useState:function(){return pl(Wt)},useDebugValue:lo,useDeferredValue:function(e,t){var n=Me();return uu(n,he.memoizedState,e,t)},useTransition:function(){var e=pl(Wt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:ua(e),t]},useSyncExternalStore:Gc,useId:gu,useHostTransitionStatus:ro,useFormState:Fc,useActionState:Fc,useOptimistic:function(e,t){var n=Me();return Yc(n,he,e,t)},useMemoCache:$s,useCacheRefresh:pu};uo.useEffectEvent=iu;var Su={readContext:_e,use:gl,useCallback:ru,useContext:_e,useEffect:ao,useImperativeHandle:ou,useInsertionEffect:au,useLayoutEffect:lu,useMemo:cu,useReducer:to,useRef:tu,useState:function(){return to(Wt)},useDebugValue:lo,useDeferredValue:function(e,t){var n=Me();return he===null?so(n,e,t):uu(n,he.memoizedState,e,t)},useTransition:function(){var e=to(Wt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:ua(e),t]},useSyncExternalStore:Gc,useId:gu,useHostTransitionStatus:ro,useFormState:eu,useActionState:eu,useOptimistic:function(e,t){var n=Me();return he!==null?Yc(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:$s,useCacheRefresh:pu};Su.useEffectEvent=iu;function ho(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=pt(),a=hn(i);a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,i),t!==null&&(it(t,e,i),sa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=pt(),a=hn(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,i),t!==null&&(it(t,e,i),sa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),i=hn(n);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,n),t!==null&&(it(t,e,n),sa(t,e,n))}};function wu(e,t,n,i,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,s):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,i)||!Fi(a,l):!0}function Au(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Yn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Tu(e){Za(e)}function Cu(e){console.error(e)}function xu(e){Za(e)}function bl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Mu(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function go(e,t,n){return n=hn(n),n.tag=3,n.payload={element:null},n.callback=function(){bl(e,t)},n}function Du(e){return e=hn(e),e.tag=3,e}function Eu(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;e.payload=function(){return a(l)},e.callback=function(){Mu(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Mu(t,n,i),typeof a!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Wf(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&fi(t,n,a,!0),n=dt.current,n!==null){switch(n.tag){case 31:case 13:return Ct===null?Nl():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===sl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Go(e,i,a)),!1;case 22:return n.flags|=65536,i===sl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Go(e,i,a)),!1}throw Error(h(435,n.tag))}return Go(e,i,a),Nl(),!1}if(ne)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==zs&&(e=Error(h(422),{cause:i}),ta(St(e,n)))):(i!==zs&&(t=Error(h(423),{cause:i}),ta(St(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=St(i,n),a=go(e.stateNode,i,a),_s(e,a),Ce!==4&&(Ce=2)),!1;var l=Error(h(520),{cause:i});if(l=St(l,n),Sa===null?Sa=[l]:Sa.push(l),Ce!==4&&(Ce=2),t===null)return!0;i=St(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=go(n.stateNode,i,e),_s(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(bn===null||!bn.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Du(a),Eu(a,e,n,i),_s(n,a),!1}n=n.return}while(n!==null);return!1}var po=Error(h(461)),Re=!1;function Ve(e,t,n,i){t.child=e===null?zc(t,null,n,i):_n(t,e.child,n,i)}function ku(e,t,n,i,a){n=n.render;var l=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Gn(t),i=Ks(e,t,n,s,l,a),o=Zs(),e!==null&&!Re?(Js(e,t,a),Xt(e,t,a)):(ne&&o&&Rs(t),t.flags|=1,Ve(e,t,i,a),t.child)}function Ru(e,t,n,i,a){if(e===null){var l=n.type;return typeof l=="function"&&!Ds(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Nu(e,t,l,i,a)):(e=el(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!To(e,a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(s,i)&&e.ref===t.ref)return Xt(e,t,a)}return t.flags|=1,e=Pt(l,i),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,n,i,a){if(e!==null){var l=e.memoizedProps;if(Fi(l,i)&&e.ref===t.ref)if(Re=!1,t.pendingProps=i=l,To(e,a))(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Xt(e,t,a)}return mo(e,t,n,i,a)}function zu(e,t,n,i){var a=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,t.child=null;return Bu(e,t,l,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(t,l!==null?l.cachePool:null),l!==null?qc(t,l):Ys(),Ic(t);else return i=t.lanes=536870912,Bu(e,t,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(al(t,l.cachePool),qc(t,l),pn(),t.memoizedState=null):(e!==null&&al(t,null),Ys(),pn());return Ve(e,t,a,n),t.child}function fa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bu(e,t,n,i,a){var l=Gs();return l=l===null?null:{parent:Ee._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&al(t,null),Ys(),Ic(t),e!==null&&fi(e,t,i,!0),t.childLanes=a,null}function Sl(e,t){return t=Al({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hu(e,t,n){return _n(t,e.child,null,n),e=Sl(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function Xf(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(i.mode==="hidden")return e=Sl(t,i),t.lanes=536870912,fa(null,e);if(Ws(t),(e=ve)?(e=Qd(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:on!==null?{id:qt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=vc(e),n.return=t,t.child=n,Pe=t,ve=null)):e=null,e===null)throw cn(t);return t.lanes=536870912,null}return Sl(t,i)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(Ws(t),a)if(t.flags&256)t.flags&=-257,t=Hu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Re||fi(e,t,n,!1),a=(n&e.childLanes)!==0,Re||a){if(i=pe,i!==null&&(s=Cr(i,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,qn(e,s),it(i,e,s),po;Nl(),t=Hu(e,t,n)}else e=l.treeContext,ve=xt(s.nextSibling),Pe=t,ne=!0,rn=null,Tt=!1,e!==null&&Sc(t,e),t=Sl(t,i),t.flags|=4096;return t}return e=Pt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mo(e,t,n,i,a){return Gn(t),n=Ks(e,t,n,i,void 0,a),i=Zs(),e!==null&&!Re?(Js(e,t,a),Xt(e,t,a)):(ne&&i&&Rs(t),t.flags|=1,Ve(e,t,n,a),t.child)}function qu(e,t,n,i,a,l){return Gn(t),t.updateQueue=null,n=Uc(t,i,n,a),Oc(e),i=Zs(),e!==null&&!Re?(Js(e,t,l),Xt(e,t,l)):(ne&&i&&Rs(t),t.flags|=1,Ve(e,t,n,l),t.child)}function Iu(e,t,n,i,a){if(Gn(t),t.stateNode===null){var l=ci,s=n.contextType;typeof s=="object"&&s!==null&&(l=_e(s)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=fo,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},Ls(t),s=n.contextType,l.context=typeof s=="object"&&s!==null?_e(s):ci,l.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ho(t,n,s,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&fo.enqueueReplaceState(l,l.state,null),ra(t,i,l,a),oa(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var o=t.memoizedProps,r=Yn(n,o);l.props=r;var p=l.context,b=n.contextType;s=ci,typeof b=="object"&&b!==null&&(s=_e(b));var A=n.getDerivedStateFromProps;b=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||p!==s)&&Au(t,l,i,s),dn=!1;var m=t.memoizedState;l.state=m,ra(t,i,l,a),oa(),p=t.memoizedState,o||m!==p||dn?(typeof A=="function"&&(ho(t,n,A,i),p=t.memoizedState),(r=dn||wu(t,n,r,i,m,p,s))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=p),l.props=i,l.state=p,l.context=s,i=r):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Ps(e,t),s=t.memoizedProps,b=Yn(n,s),l.props=b,A=t.pendingProps,m=l.context,p=n.contextType,r=ci,typeof p=="object"&&p!==null&&(r=_e(p)),o=n.getDerivedStateFromProps,(p=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==A||m!==r)&&Au(t,l,i,r),dn=!1,m=t.memoizedState,l.state=m,ra(t,i,l,a),oa();var v=t.memoizedState;s!==A||m!==v||dn||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof o=="function"&&(ho(t,n,o,i),v=t.memoizedState),(b=dn||wu(t,n,b,i,m,v,r)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,v,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,v,r)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),l.props=i,l.state=v,l.context=r,i=b):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,wl(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=_n(t,e.child,null,a),t.child=_n(t,null,n,a)):Ve(e,t,n,a),t.memoizedState=l.state,e=t.child):e=Xt(e,t,a),e}function Ou(e,t,n,i){return On(),t.flags|=256,Ve(e,t,n,i),t.child}var vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yo(e){return{baseLanes:e,cachePool:Mc()}}function bo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gt),e}function Uu(e,t,n){var i=t.pendingProps,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(a?gn(t):pn(),(e=ve)?(e=Qd(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:on!==null?{id:qt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=vc(e),n.return=t,t.child=n,Pe=t,ve=null)):e=null,e===null)throw cn(t);return tr(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(pn(),a=t.mode,o=Al({mode:"hidden",children:o},a),i=In(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=yo(n),i.childLanes=bo(e,s,n),t.memoizedState=vo,fa(null,i)):(gn(t),So(t,o))}var r=e.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(l)t.flags&256?(gn(t),t.flags&=-257,t=wo(e,t,n)):t.memoizedState!==null?(pn(),t.child=e.child,t.flags|=128,t=null):(pn(),o=i.fallback,a=t.mode,i=Al({mode:"visible",children:i.children},a),o=In(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,_n(t,e.child,null,n),i=t.child,i.memoizedState=yo(n),i.childLanes=bo(e,s,n),t.memoizedState=vo,t=fa(null,i));else if(gn(t),tr(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var p=s.dgst;s=p,i=Error(h(419)),i.stack="",i.digest=s,ta({value:i,source:null,stack:null}),t=wo(e,t,n)}else if(Re||fi(e,t,n,!1),s=(n&e.childLanes)!==0,Re||s){if(s=pe,s!==null&&(i=Cr(s,n),i!==0&&i!==r.retryLane))throw r.retryLane=i,qn(e,i),it(s,e,i),po;er(o)||Nl(),t=wo(e,t,n)}else er(o)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ve=xt(o.nextSibling),Pe=t,ne=!0,rn=null,Tt=!1,e!==null&&Sc(t,e),t=So(t,i.children),t.flags|=4096);return t}return a?(pn(),o=i.fallback,a=t.mode,r=e.child,p=r.sibling,i=Pt(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,p!==null?o=Pt(p,o):(o=In(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,fa(null,i),i=t.child,o=e.child.memoizedState,o===null?o=yo(n):(a=o.cachePool,a!==null?(r=Ee._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Mc(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=bo(e,s,n),t.memoizedState=vo,fa(e.child,i)):(gn(t),n=e.child,e=n.sibling,n=Pt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function So(e,t){return t=Al({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Al(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function wo(e,t,n){return _n(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),qs(e.return,t,n)}function Ao(e,t,n,i,a,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=l)}function ju(e,t,n){var i=t.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var s=xe.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,E(xe,s),Ve(e,t,i,n),i=ne?ea:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ao(t,!1,a,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ul(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ao(t,!0,n,null,l,i);break;case"together":Ao(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function To(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function Kf(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),un(t,Ee,e.memoizedState.cache),On();break;case 27:case 5:kn(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ws(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Uu(e,t,n):(gn(t),e=Xt(e,t,n),e!==null?e.sibling:null);gn(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(fi(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return ju(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),E(xe,xe.current),i)break;return null;case 22:return t.lanes=0,zu(e,t,n,t.pendingProps);case 24:un(t,Ee,e.memoizedState.cache)}return Xt(e,t,n)}function Lu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Re=!0;else{if(!To(e,n)&&(t.flags&128)===0)return Re=!1,Kf(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,ne&&(t.flags&1048576)!==0&&bc(t,ea,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ln(t.elementType),t.type=e,typeof e=="function")Ds(e)?(i=Yn(e,i),t.tag=1,t=Iu(null,t,e,i,n)):(t.tag=0,t=mo(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Ke){t.tag=11,t=ku(null,t,e,i,n);break e}else if(a===Z){t.tag=14,t=Ru(null,t,e,i,n);break e}}throw t=mt(e)||e,Error(h(306,t,""))}}return t;case 0:return mo(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Yn(i,t.pendingProps),Iu(e,t,i,a,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(h(387));i=t.pendingProps;var l=t.memoizedState;a=l.element,Ps(e,t),ra(t,i,null,n);var s=t.memoizedState;if(i=s.cache,un(t,Ee,i),i!==l.cache&&Is(t,[Ee],n,!0),oa(),i=s.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Ou(e,t,i,n);break e}else if(i!==a){a=St(Error(h(424)),t),ta(a),t=Ou(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ve=xt(e.firstChild),Pe=t,ne=!0,rn=null,Tt=!0,n=zc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(On(),i===a){t=Xt(e,t,n);break e}Ve(e,t,i,n)}t=t.child}return t;case 26:return wl(e,t),e===null?(n=Fd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ne||(n=t.type,e=t.pendingProps,i=Ul(W.current).createElement(n),i[Le]=t,i[Je]=e,Ye(i,n,e),qe(i),t.stateNode=i):t.memoizedState=Fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kn(t),e===null&&ne&&(i=t.stateNode=Kd(t.type,t.pendingProps,W.current),Pe=t,Tt=!0,a=ve,Tn(t.type)?(nr=a,ve=xt(i.firstChild)):ve=a),Ve(e,t,t.pendingProps.children,n),wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((a=i=ve)&&(i=xg(i,t.type,t.pendingProps,Tt),i!==null?(t.stateNode=i,Pe=t,ve=xt(i.firstChild),Tt=!1,a=!0):a=!1),a||cn(t)),kn(t),a=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,i=l.children,Jo(a,l)?i=null:s!==null&&Jo(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Ks(e,t,jf,null,null,n),Ea._currentValue=a),wl(e,t),Ve(e,t,i,n),t.child;case 6:return e===null&&ne&&((e=n=ve)&&(n=Mg(n,t.pendingProps,Tt),n!==null?(t.stateNode=n,Pe=t,ve=null,e=!0):e=!1),e||cn(t)),null;case 13:return Uu(e,t,n);case 4:return je(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_n(t,null,i,n):Ve(e,t,i,n),t.child;case 11:return ku(e,t,t.type,t.pendingProps,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,un(t,t.type,i.value),Ve(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Gn(t),a=_e(a),i=i(a),t.flags|=1,Ve(e,t,i,n),t.child;case 14:return Ru(e,t,t.type,t.pendingProps,n);case 15:return Nu(e,t,t.type,t.pendingProps,n);case 19:return ju(e,t,n);case 31:return Xf(e,t,n);case 22:return zu(e,t,n,t.pendingProps);case 24:return Gn(t),i=_e(Ee),e===null?(a=Gs(),a===null&&(a=pe,l=Os(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=n),a=l),t.memoizedState={parent:i,cache:a},Ls(t),un(t,Ee,a)):((e.lanes&n)!==0&&(Ps(e,t),ra(t,null,null,n),oa()),a=e.memoizedState,l=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),un(t,Ee,i)):(i=l.cache,un(t,Ee,i),i!==a.cache&&Is(t,[Ee],n,!0))),Ve(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Kt(e){e.flags|=4}function Co(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(gd())e.flags|=8192;else throw Pn=sl,js}else e.flags&=-16777217}function Pu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ih(t))if(gd())e.flags|=8192;else throw Pn=sl,js}function Tl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?wr():536870912,e.lanes|=t,xi|=t)}function ga(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Zf(e,t,n){var i=t.pendingProps;switch(Ns(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yt(Ee),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hi(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bs())),ye(t),null;case 26:var a=t.type,l=t.memoizedState;return e===null?(Kt(t),l!==null?(ye(t),Pu(t,l)):(ye(t),Co(t,a,null,i,n))):l?l!==e.memoizedState?(Kt(t),ye(t),Pu(t,l)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Kt(t),ye(t),Co(t,a,e,i,n)),null;case 27:if(Xn(t),n=W.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Kt(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return ye(t),null}e=k.current,hi(t)?wc(t):(e=Kd(a,i,n),t.stateNode=e,Kt(t))}return ye(t),null;case 5:if(Xn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Kt(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return ye(t),null}if(l=k.current,hi(t))wc(t);else{var s=Ul(W.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}l[Le]=t,l[Je]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(Ye(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Kt(t)}}return ye(t),Co(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Kt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(h(166));if(e=W.current,hi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Pe,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Le]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ud(e.nodeValue,n)),e||cn(t,!0)}else e=Ul(e).createTextNode(i),e[Le]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=hi(t),n!==null){if(e===null){if(!i)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Le]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=Bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=hi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Le]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),a=!1}else a=Bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Tl(t,t.updateQueue),ye(t),null);case 4:return Se(),e===null&&Qo(t.stateNode.containerInfo),ye(t),null;case 10:return Yt(t.type),ye(t),null;case 19:if(S(xe),i=t.memoizedState,i===null)return ye(t),null;if(a=(t.flags&128)!==0,l=i.rendering,l===null)if(a)ga(i,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ul(e),l!==null){for(t.flags|=128,ga(i,!1),e=l.updateQueue,t.updateQueue=e,Tl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mc(n,e),n=n.sibling;return E(xe,xe.current&1|2),ne&&_t(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Q()>El&&(t.flags|=128,a=!0,ga(i,!1),t.lanes=4194304)}else{if(!a)if(e=ul(l),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Tl(t,e),ga(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return ye(t),null}else 2*Q()-i.renderingStartTime>El&&n!==536870912&&(t.flags|=128,a=!0,ga(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Q(),e.sibling=null,n=xe.current,E(xe,a?n&1|2:n&1),ne&&_t(t,i.treeForkCount),e):(ye(t),null);case 22:case 23:return ht(t),Qs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&Tl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&S(jn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(Ee),ye(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Jf(e,t){switch(Ns(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(Ee),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xn(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(h(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(xe),null;case 4:return Se(),null;case 10:return Yt(t.type),null;case 22:case 23:return ht(t),Qs(),e!==null&&S(jn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(Ee),null;case 25:return null;default:return null}}function _u(e,t){switch(Ns(t),t.tag){case 3:Yt(Ee),Se();break;case 26:case 27:case 5:Xn(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:S(xe);break;case 10:Yt(t.type);break;case 22:case 23:ht(t),Qs(),e!==null&&S(jn);break;case 24:Yt(Ee)}}function pa(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var l=n.create,s=n.inst;i=l(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){de(t,t.return,o)}}function mn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var r=n,p=o;try{p()}catch(b){de(a,r,b)}}}i=i.next}while(i!==l)}}catch(b){de(t,t.return,b)}}function Vu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Hc(t,n)}catch(i){de(e,e.return,i)}}}function Yu(e,t,n){n.props=Yn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function ma(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){de(e,t,a)}}function Ot(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function Qu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){de(e,e.return,a)}}function xo(e,t,n){try{var i=e.stateNode;bg(i,e.type,n,t),i[Je]=t}catch(a){de(e,e.return,a)}}function Wu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tn(e.type)||e.tag===4}function Mo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jt));else if(i!==4&&(i===27&&Tn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}function Cl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Tn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}function Xu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ye(t,i,n),t[Le]=e,t[Je]=n}catch(l){de(e,e.return,l)}}var Zt=!1,Ne=!1,Eo=!1,Ku=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Ff(e,t){if(e=e.containerInfo,Ko=Yl,e=oc(e),Ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,r=-1,p=0,b=0,A=e,m=null;t:for(;;){for(var v;A!==n||a!==0&&A.nodeType!==3||(o=s+a),A!==l||i!==0&&A.nodeType!==3||(r=s+i),A.nodeType===3&&(s+=A.nodeValue.length),(v=A.firstChild)!==null;)m=A,A=v;for(;;){if(A===e)break t;if(m===n&&++p===a&&(o=s),m===l&&++b===i&&(r=s),(v=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=v}n=o===-1||r===-1?null:{start:o,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zo={focusedElem:e,selectionRange:n},Yl=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,a=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var N=Yn(n.type,a);e=i.getSnapshotBeforeUpdate(N,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(U){de(n,n.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)$o(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function Zu(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ft(e,n),i&4&&pa(5,n);break;case 1:if(Ft(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){de(n,n.return,s)}else{var a=Yn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){de(n,n.return,s)}}i&64&&Vu(n),i&512&&ma(n,n.return);break;case 3:if(Ft(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Hc(e,t)}catch(s){de(n,n.return,s)}}break;case 27:t===null&&i&4&&Xu(n);case 26:case 5:Ft(e,n),t===null&&i&4&&Qu(n),i&512&&ma(n,n.return);break;case 12:Ft(e,n);break;case 31:Ft(e,n),i&4&&$u(e,n);break;case 13:Ft(e,n),i&4&&ed(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=og.bind(null,n),Dg(e,n))));break;case 22:if(i=n.memoizedState!==null||Zt,!i){t=t!==null&&t.memoizedState!==null||Ne,a=Zt;var l=Ne;Zt=i,(Ne=t)&&!l?$t(e,n,(n.subtreeFlags&8772)!==0):Ft(e,n),Zt=a,Ne=l}break;case 30:break;default:Ft(e,n)}}function Ju(e){var t=e.alternate;t!==null&&(e.alternate=null,Ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&is(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,$e=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Fu(e,t,n),n=n.sibling}function Fu(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(ji,n)}catch{}switch(n.tag){case 26:Ne||Ot(n,t),Jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Ot(n,t);var i=we,a=$e;Tn(n.type)&&(we=n.stateNode,$e=!1),Jt(e,t,n),xa(n.stateNode),we=i,$e=a;break;case 5:Ne||Ot(n,t);case 6:if(i=we,a=$e,we=null,Jt(e,t,n),we=i,$e=a,we!==null)if($e)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(l){de(n,t,l)}else try{we.removeChild(n.stateNode)}catch(l){de(n,t,l)}break;case 18:we!==null&&($e?(e=we,Vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Bi(e)):Vd(we,n.stateNode));break;case 4:i=we,a=$e,we=n.stateNode.containerInfo,$e=!0,Jt(e,t,n),we=i,$e=a;break;case 0:case 11:case 14:case 15:mn(2,n,t),Ne||mn(4,n,t),Jt(e,t,n);break;case 1:Ne||(Ot(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Yu(n,t,i)),Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:Ne=(i=Ne)||n.memoizedState!==null,Jt(e,t,n),Ne=i;break;default:Jt(e,t,n)}}function $u(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bi(e)}catch(n){de(t,t.return,n)}}}function ed(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bi(e)}catch(n){de(t,t.return,n)}}function $f(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ku),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ku),t;default:throw Error(h(435,e.tag))}}function xl(e,t){var n=$f(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=rg.bind(null,e,i);i.then(a,a)}})}function et(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Tn(o.type)){we=o.stateNode,$e=!1;break e}break;case 5:we=o.stateNode,$e=!1;break e;case 3:case 4:we=o.stateNode.containerInfo,$e=!0;break e}o=o.return}if(we===null)throw Error(h(160));Fu(l,s,a),we=null,$e=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)td(t,e),t=t.sibling}var Rt=null;function td(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),i&4&&(mn(3,e,e.return),pa(3,e),mn(5,e,e.return));break;case 1:et(t,e),tt(e),i&512&&(Ne||n===null||Ot(n,n.return)),i&64&&Zt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Rt;if(et(t,e),tt(e),i&512&&(Ne||n===null||Ot(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[_i]||l[Le]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),Ye(l,i,n),l[Le]=e,qe(l),i=l;break e;case"link":var s=th("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}l=a.createElement(i),Ye(l,i,n),a.head.appendChild(l);break;case"meta":if(s=th("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}l=a.createElement(i),Ye(l,i,n),a.head.appendChild(l);break;default:throw Error(h(468,i))}l[Le]=e,qe(l),i=l}e.stateNode=i}else nh(a,e.type,e.stateNode);else e.stateNode=eh(a,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?nh(a,e.type,e.stateNode):eh(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xo(e,e.memoizedProps,n.memoizedProps)}break;case 27:et(t,e),tt(e),i&512&&(Ne||n===null||Ot(n,n.return)),n!==null&&i&4&&xo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(et(t,e),tt(e),i&512&&(Ne||n===null||Ot(n,n.return)),e.flags&32){a=e.stateNode;try{ni(a,"")}catch(N){de(e,e.return,N)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,xo(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Eo=!0);break;case 6:if(et(t,e),tt(e),i&4){if(e.stateNode===null)throw Error(h(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(N){de(e,e.return,N)}}break;case 3:if(Ll=null,a=Rt,Rt=Gl(t.containerInfo),et(t,e),Rt=a,tt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(N){de(e,e.return,N)}Eo&&(Eo=!1,nd(e));break;case 4:i=Rt,Rt=Gl(e.stateNode.containerInfo),et(t,e),tt(e),Rt=i;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xl(e,i)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dl=Q()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xl(e,i)));break;case 22:a=e.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,p=Zt,b=Ne;if(Zt=p||a,Ne=b||r,et(t,e),Ne=b,Zt=p,tt(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||r||Zt||Ne||Qn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){r=n=t;try{if(l=r.stateNode,a)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=r.stateNode;var A=r.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){de(r,r.return,N)}}}else if(t.tag===6){if(n===null){r=t;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(N){de(r,r.return,N)}}}else if(t.tag===18){if(n===null){r=t;try{var v=r.stateNode;a?Yd(v,!0):Yd(r.stateNode,!1)}catch(N){de(r,r.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,xl(e,n))));break;case 19:et(t,e),tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xl(e,i)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Wu(i)){n=i;break}i=i.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var a=n.stateNode,l=Mo(e);Cl(e,l,a);break;case 5:var s=n.stateNode;n.flags&32&&(ni(s,""),n.flags&=-33);var o=Mo(e);Cl(e,o,s);break;case 3:case 4:var r=n.stateNode.containerInfo,p=Mo(e);Do(e,p,r);break;default:throw Error(h(161))}}catch(b){de(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ft(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zu(e,t.alternate,t),t=t.sibling}function Qn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:mn(4,t,t.return),Qn(t);break;case 1:Ot(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yu(t,t.return,n),Qn(t);break;case 27:xa(t.stateNode);case 26:case 5:Ot(t,t.return),Qn(t);break;case 22:t.memoizedState===null&&Qn(t);break;case 30:Qn(t);break;default:Qn(t)}e=e.sibling}}function $t(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:$t(a,l,n),pa(4,l);break;case 1:if($t(a,l,n),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(p){de(i,i.return,p)}if(i=l,a=i.updateQueue,a!==null){var o=i.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)Bc(r[a],o)}catch(p){de(i,i.return,p)}}n&&s&64&&Vu(l),ma(l,l.return);break;case 27:Xu(l);case 26:case 5:$t(a,l,n),n&&i===null&&s&4&&Qu(l),ma(l,l.return);break;case 12:$t(a,l,n);break;case 31:$t(a,l,n),n&&s&4&&$u(a,l);break;case 13:$t(a,l,n),n&&s&4&&ed(a,l);break;case 22:l.memoizedState===null&&$t(a,l,n),ma(l,l.return);break;case 30:break;default:$t(a,l,n)}t=t.sibling}}function ko(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&na(n))}function Ro(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function Nt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)id(e,t,n,i),t=t.sibling}function id(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(e,t,n,i),a&2048&&pa(9,t);break;case 1:Nt(e,t,n,i);break;case 3:Nt(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(a&2048){Nt(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){de(t,t.return,r)}}else Nt(e,t,n,i);break;case 31:Nt(e,t,n,i);break;case 13:Nt(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?Nt(e,t,n,i):va(e,t):l._visibility&2?Nt(e,t,n,i):(l._visibility|=2,Ai(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&ko(s,t);break;case 24:Nt(e,t,n,i),a&2048&&Ro(t.alternate,t);break;default:Nt(e,t,n,i)}}function Ai(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,o=n,r=i,p=s.flags;switch(s.tag){case 0:case 11:case 15:Ai(l,s,o,r,a),pa(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Ai(l,s,o,r,a):va(l,s):(b._visibility|=2,Ai(l,s,o,r,a)),a&&p&2048&&ko(s.alternate,s);break;case 24:Ai(l,s,o,r,a),a&&p&2048&&Ro(s.alternate,s);break;default:Ai(l,s,o,r,a)}t=t.sibling}}function va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:va(n,i),a&2048&&ko(i.alternate,i);break;case 24:va(n,i),a&2048&&Ro(i.alternate,i);break;default:va(n,i)}t=t.sibling}}var ya=8192;function Ti(e,t,n){if(e.subtreeFlags&ya)for(e=e.child;e!==null;)ad(e,t,n),e=e.sibling}function ad(e,t,n){switch(e.tag){case 26:Ti(e,t,n),e.flags&ya&&e.memoizedState!==null&&Gg(n,Rt,e.memoizedState,e.memoizedProps);break;case 5:Ti(e,t,n);break;case 3:case 4:var i=Rt;Rt=Gl(e.stateNode.containerInfo),Ti(e,t,n),Rt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ya,ya=16777216,Ti(e,t,n),ya=i):Ti(e,t,n));break;default:Ti(e,t,n)}}function ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ba(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,od(i,e)}ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sd(e),e=e.sibling}function sd(e){switch(e.tag){case 0:case 11:case 15:ba(e),e.flags&2048&&mn(9,e,e.return);break;case 3:ba(e);break;case 12:ba(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):ba(e);break;default:ba(e)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,od(i,e)}ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:mn(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function od(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:na(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var a=i.sibling,l=i.return;if(Ju(i),i===n){Ie=null;break e}if(a!==null){a.return=l,Ie=a;break e}Ie=l}}}var eg={getCacheForType:function(e){var t=_e(Ee),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _e(Ee).controller.signal}},tg=typeof WeakMap=="function"?WeakMap:Map,re=0,pe=null,F=null,ee=0,ue=0,ft=null,vn=!1,Ci=!1,No=!1,en=0,Ce=0,yn=0,Wn=0,zo=0,gt=0,xi=0,Sa=null,nt=null,Bo=!1,Dl=0,rd=0,El=1/0,kl=null,bn=null,He=0,Sn=null,Mi=null,tn=0,Ho=0,qo=null,cd=null,wa=0,Io=null;function pt(){return(re&2)!==0&&ee!==0?ee&-ee:y.T!==null?Po():xr()}function ud(){if(gt===0)if((ee&536870912)===0||ne){var e=Oa;Oa<<=1,(Oa&3932160)===0&&(Oa=262144),gt=e}else gt=536870912;return e=dt.current,e!==null&&(e.flags|=32),gt}function it(e,t,n){(e===pe&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Di(e,0),wn(e,ee,gt,!1)),Pi(e,n),((re&2)===0||e!==pe)&&(e===pe&&((re&2)===0&&(Wn|=n),Ce===4&&wn(e,ee,gt,!1)),Ut(e))}function dd(e,t,n){if((re&6)!==0)throw Error(h(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Li(e,t),a=i?ag(e,t):Uo(e,t,!0),l=i;do{if(a===0){Ci&&!i&&wn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!ng(n)){a=Uo(e,t,!1),l=!1;continue}if(a===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;a=Sa;var r=o.current.memoizedState.isDehydrated;if(r&&(Di(o,s).flags|=256),s=Uo(o,s,!1),s!==2){if(No&&!r){o.errorRecoveryDisabledLanes|=l,Wn|=l,a=4;break e}l=nt,nt=a,l!==null&&(nt===null?nt=l:nt.push.apply(nt,l))}a=s}if(l=!1,a!==2)continue}}if(a===1){Di(e,0),wn(e,t,0,!0);break}e:{switch(i=e,l=a,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:wn(i,t,gt,!vn);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(a=Dl+300-Q(),10<a)){if(wn(i,t,gt,!vn),Ga(i,0,!0)!==0)break e;tn=t,i.timeoutHandle=Pd(hd.bind(null,i,n,nt,kl,Bo,t,gt,Wn,xi,vn,l,"Throttled",-0,0),a);break e}hd(i,n,nt,kl,Bo,t,gt,Wn,xi,vn,l,null,-0,0)}}break}while(!0);Ut(e)}function hd(e,t,n,i,a,l,s,o,r,p,b,A,m,v){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},ad(t,l,A);var N=(l&62914560)===l?Dl-Q():(l&4194048)===l?rd-Q():0;if(N=jg(A,N),N!==null){tn=l,e.cancelPendingCommit=N(Sd.bind(null,e,t,l,n,i,a,s,o,r,b,A,null,m,v)),wn(e,l,s,!p);return}}Sd(e,t,l,n,i,a,s,o,r)}function ng(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],l=a.getSnapshot;a=a.value;try{if(!ct(l(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t,n,i){t&=~zo,t&=~Wn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var l=31-rt(a),s=1<<l;i[l]=-1,a&=~s}n!==0&&Ar(e,n,t)}function Rl(){return(re&6)===0?(Aa(0),!1):!0}function Oo(){if(F!==null){if(ue===0)var e=F.return;else e=F,Vt=Un=null,Fs(e),vi=null,aa=0,e=F;for(;e!==null;)_u(e.alternate,e),e=e.return;F=null}}function Di(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ag(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tn=0,Oo(),pe=e,F=n=Pt(e.current,null),ee=t,ue=0,ft=null,vn=!1,Ci=Li(e,t),No=!1,xi=gt=zo=Wn=yn=Ce=0,nt=Sa=null,Bo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-rt(i),l=1<<a;t|=e[a],i&=~l}return en=t,Ja(),n}function fd(e,t){_=null,y.H=ha,t===mi||t===ll?(t=kc(),ue=3):t===js?(t=kc(),ue=4):ue=t===po?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,F===null&&(Ce=1,bl(e,St(t,e.current)))}function gd(){var e=dt.current;return e===null?!0:(ee&4194048)===ee?Ct===null:(ee&62914560)===ee||(ee&536870912)!==0?e===Ct:!1}function pd(){var e=y.H;return y.H=ha,e===null?ha:e}function md(){var e=y.A;return y.A=eg,e}function Nl(){Ce=4,vn||(ee&4194048)!==ee&&dt.current!==null||(Ci=!0),(yn&134217727)===0&&(Wn&134217727)===0||pe===null||wn(pe,ee,gt,!1)}function Uo(e,t,n){var i=re;re|=2;var a=pd(),l=md();(pe!==e||ee!==t)&&(kl=null,Di(e,t)),t=!1;var s=Ce;e:do try{if(ue!==0&&F!==null){var o=F,r=ft;switch(ue){case 8:Oo(),s=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var p=ue;if(ue=0,ft=null,Ei(e,o,r,p),n&&Ci){s=0;break e}break;default:p=ue,ue=0,ft=null,Ei(e,o,r,p)}}ig(),s=Ce;break}catch(b){fd(e,b)}while(!0);return t&&e.shellSuspendCounter++,Vt=Un=null,re=i,y.H=a,y.A=l,F===null&&(pe=null,ee=0,Ja()),s}function ig(){for(;F!==null;)vd(F)}function ag(e,t){var n=re;re|=2;var i=pd(),a=md();pe!==e||ee!==t?(kl=null,El=Q()+500,Di(e,t)):Ci=Li(e,t);e:do try{if(ue!==0&&F!==null){t=F;var l=ft;t:switch(ue){case 1:ue=0,ft=null,Ei(e,t,l,1);break;case 2:case 9:if(Dc(l)){ue=0,ft=null,yd(t);break}t=function(){ue!==2&&ue!==9||pe!==e||(ue=7),Ut(e)},l.then(t,t);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:Dc(l)?(ue=0,ft=null,yd(t)):(ue=0,ft=null,Ei(e,t,l,7));break;case 5:var s=null;switch(F.tag){case 26:s=F.memoizedState;case 5:case 27:var o=F;if(s?ih(s):o.stateNode.complete){ue=0,ft=null;var r=o.sibling;if(r!==null)F=r;else{var p=o.return;p!==null?(F=p,zl(p)):F=null}break t}}ue=0,ft=null,Ei(e,t,l,5);break;case 6:ue=0,ft=null,Ei(e,t,l,6);break;case 8:Oo(),Ce=6;break e;default:throw Error(h(462))}}lg();break}catch(b){fd(e,b)}while(!0);return Vt=Un=null,y.H=i,y.A=a,re=n,F!==null?0:(pe=null,ee=0,Ja(),Ce)}function lg(){for(;F!==null&&!C();)vd(F)}function vd(e){var t=Lu(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?zl(e):F=t}function yd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qu(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=qu(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:Fs(t);default:_u(n,t),t=F=mc(t,en),t=Lu(n,t,en)}e.memoizedProps=e.pendingProps,t===null?zl(e):F=t}function Ei(e,t,n,i){Vt=Un=null,Fs(t),vi=null,aa=0;var a=t.return;try{if(Wf(e,a,t,n,ee)){Ce=1,bl(e,St(n,e.current)),F=null;return}}catch(l){if(a!==null)throw F=a,l;Ce=1,bl(e,St(n,e.current)),F=null;return}t.flags&32768?(ne||i===1?e=!0:Ci||(ee&536870912)!==0?e=!1:(vn=e=!0,(i===2||i===9||i===3||i===6)&&(i=dt.current,i!==null&&i.tag===13&&(i.flags|=16384))),bd(t,e)):zl(t)}function zl(e){var t=e;do{if((t.flags&32768)!==0){bd(t,vn);return}e=t.return;var n=Zf(t.alternate,t,en);if(n!==null){F=n;return}if(t=t.sibling,t!==null){F=t;return}F=t=e}while(t!==null);Ce===0&&(Ce=5)}function bd(e,t){do{var n=Jf(e.alternate,e);if(n!==null){n.flags&=32767,F=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){F=e;return}F=e=n}while(e!==null);Ce=6,F=null}function Sd(e,t,n,i,a,l,s,o,r){e.cancelPendingCommit=null;do Bl();while(He!==0);if((re&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=xs,Oh(e,n,l,s,o,r),e===pe&&(F=pe=null,ee=0),Mi=t,Sn=e,tn=n,Ho=l,qo=a,cd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cg(qa,function(){return xd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=y.T,y.T=null,a=D.p,D.p=2,s=re,re|=4;try{Ff(e,t,n)}finally{re=s,D.p=a,y.T=i}}He=1,wd(),Ad(),Td()}}function wd(){if(He===1){He=0;var e=Sn,t=Mi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var i=D.p;D.p=2;var a=re;re|=4;try{td(t,e);var l=Zo,s=oc(e.containerInfo),o=l.focusedElem,r=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&sc(o.ownerDocument.documentElement,o)){if(r!==null&&Ss(o)){var p=r.start,b=r.end;if(b===void 0&&(b=p),"selectionStart"in o)o.selectionStart=p,o.selectionEnd=Math.min(b,o.value.length);else{var A=o.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var v=m.getSelection(),N=o.textContent.length,U=Math.min(r.start,N),ge=r.end===void 0?U:Math.min(r.end,N);!v.extend&&U>ge&&(s=ge,ge=U,U=s);var f=lc(o,U),c=lc(o,ge);if(f&&c&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var g=A.createRange();g.setStart(f.node,f.offset),v.removeAllRanges(),U>ge?(v.addRange(g),v.extend(c.node,c.offset)):(g.setEnd(c.node,c.offset),v.addRange(g))}}}}for(A=[],v=o;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<A.length;o++){var w=A[o];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Yl=!!Ko,Zo=Ko=null}finally{re=a,D.p=i,y.T=n}}e.current=t,He=2}}function Ad(){if(He===2){He=0;var e=Sn,t=Mi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var i=D.p;D.p=2;var a=re;re|=4;try{Zu(e,t.alternate,t)}finally{re=a,D.p=i,y.T=n}}He=3}}function Td(){if(He===4||He===3){He=0,X();var e=Sn,t=Mi,n=tn,i=cd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,Mi=Sn=null,Cd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(bn=null),ts(n),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(ji,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=y.T,a=D.p,D.p=2,y.T=null;try{for(var l=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];l(o.value,{componentStack:o.stack})}}finally{y.T=t,D.p=a}}(tn&3)!==0&&Bl(),Ut(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Io?wa++:(wa=0,Io=e):wa=0,Aa(0)}}function Cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function Bl(){return wd(),Ad(),Td(),xd()}function xd(){if(He!==5)return!1;var e=Sn,t=Ho;Ho=0;var n=ts(tn),i=y.T,a=D.p;try{D.p=32>n?32:n,y.T=null,n=qo,qo=null;var l=Sn,s=tn;if(He=0,Mi=Sn=null,tn=0,(re&6)!==0)throw Error(h(331));var o=re;if(re|=4,sd(l.current),id(l,l.current,s,n),re=o,Aa(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(ji,l)}catch{}return!0}finally{D.p=a,y.T=i,Cd(e,t)}}function Md(e,t,n){t=St(n,t),t=go(e.stateNode,t,2),e=fn(e,t,2),e!==null&&(Pi(e,2),Ut(e))}function de(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bn===null||!bn.has(i))){e=St(n,e),n=Du(2),i=fn(t,n,2),i!==null&&(Eu(n,i,t,e),Pi(i,2),Ut(i));break}}t=t.return}}function Go(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new tg;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(No=!0,a.add(n),e=sg.bind(null,e,t,n),t.then(e,e))}function sg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(ee&n)===n&&(Ce===4||Ce===3&&(ee&62914560)===ee&&300>Q()-Dl?(re&2)===0&&Di(e,0):zo|=n,xi===ee&&(xi=0)),Ut(e)}function Dd(e,t){t===0&&(t=wr()),e=qn(e,t),e!==null&&(Pi(e,t),Ut(e))}function og(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dd(e,n)}function rg(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(h(314))}i!==null&&i.delete(t),Dd(e,n)}function cg(e,t){return Ui(e,t)}var Hl=null,ki=null,jo=!1,ql=!1,Lo=!1,An=0;function Ut(e){e!==ki&&e.next===null&&(ki===null?Hl=ki=e:ki=ki.next=e),ql=!0,jo||(jo=!0,dg())}function Aa(e,t){if(!Lo&&ql){Lo=!0;do for(var n=!1,i=Hl;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var s=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-rt(42|e)+1)-1,l&=a&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Nd(i,l))}else l=ee,l=Ga(i,i===pe?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Li(i,l)||(n=!0,Nd(i,l));i=i.next}while(n);Lo=!1}}function ug(){Ed()}function Ed(){ql=jo=!1;var e=0;An!==0&&wg()&&(e=An);for(var t=Q(),n=null,i=Hl;i!==null;){var a=i.next,l=kd(i,t);l===0?(i.next=null,n===null?Hl=a:n.next=a,a===null&&(ki=n)):(n=i,(e!==0||(l&3)!==0)&&(ql=!0)),i=a}He!==0&&He!==5||Aa(e),An!==0&&(An=0)}function kd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-rt(l),o=1<<s,r=a[s];r===-1?((o&n)===0||(o&i)!==0)&&(a[s]=Ih(o,t)):r<=t&&(e.expiredLanes|=o),l&=~o}if(t=pe,n=ee,n=Ga(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Et(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Li(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Et(i),ts(n)){case 2:case 8:n=br;break;case 32:n=qa;break;case 268435456:n=Sr;break;default:n=qa}return i=Rd.bind(null,e),n=Ui(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Et(i),e.callbackPriority=2,e.callbackNode=null,2}function Rd(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bl()&&e.callbackNode!==n)return null;var i=ee;return i=Ga(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(dd(e,i,t),kd(e,Q()),e.callbackNode!=null&&e.callbackNode===n?Rd.bind(null,e):null)}function Nd(e,t){if(Bl())return null;dd(e,t,!0)}function dg(){Tg(function(){(re&6)!==0?Ui(Gi,ug):Ed()})}function Po(){if(An===0){var e=gi;e===0&&(e=Ia,Ia<<=1,(Ia&261888)===0&&(Ia=256)),An=e}return An}function zd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_a(""+e)}function Bd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hg(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var l=zd((a[Je]||null).action),s=i.submitter;s&&(t=(t=s[Je]||null)?zd(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var o=new Wa("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(An!==0){var r=s?Bd(a,s):new FormData(a);oo(n,{pending:!0,data:r,method:a.method,action:l},null,r)}}else typeof l=="function"&&(o.preventDefault(),r=s?Bd(a,s):new FormData(a),oo(n,{pending:!0,data:r,method:a.method,action:l},l,r))},currentTarget:a}]})}}for(var _o=0;_o<Cs.length;_o++){var Vo=Cs[_o],fg=Vo.toLowerCase(),gg=Vo[0].toUpperCase()+Vo.slice(1);kt(fg,"on"+gg)}kt(uc,"onAnimationEnd"),kt(dc,"onAnimationIteration"),kt(hc,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Rf,"onTransitionRun"),kt(Nf,"onTransitionStart"),kt(zf,"onTransitionCancel"),kt(fc,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ta));function Hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],r=o.instance,p=o.currentTarget;if(o=o.listener,r!==l&&a.isPropagationStopped())break e;l=o,a.currentTarget=p;try{l(a)}catch(b){Za(b)}a.currentTarget=null,l=r}else for(s=0;s<i.length;s++){if(o=i[s],r=o.instance,p=o.currentTarget,o=o.listener,r!==l&&a.isPropagationStopped())break e;l=o,a.currentTarget=p;try{l(a)}catch(b){Za(b)}a.currentTarget=null,l=r}}}}function $(e,t){var n=t[ns];n===void 0&&(n=t[ns]=new Set);var i=e+"__bubble";n.has(i)||(qd(t,e,2,!1),n.add(i))}function Yo(e,t,n){var i=0;t&&(i|=4),qd(n,e,i,t)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Il]){e[Il]=!0,Er.forEach(function(n){n!=="selectionchange"&&(pg.has(n)||Yo(n,!1,e),Yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Il]||(t[Il]=!0,Yo("selectionchange",!1,t))}}function qd(e,t,n,i){switch(uh(t)){case 2:var a=_g;break;case 8:a=Vg;break;default:a=or}n=a.bind(null,t,n,e),a=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wo(e,t,n,i,a){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Jn(o),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){i=l=s;continue e}o=o.parentNode}}i=i.return}jr(function(){var p=l,b=cs(n),A=[];e:{var m=gc.get(e);if(m!==void 0){var v=Wa,N=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":v=rf;break;case"focusin":N="focus",v=ps;break;case"focusout":N="blur",v=ps;break;case"beforeblur":case"afterblur":v=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=df;break;case uc:case dc:case hc:v=Fh;break;case fc:v=ff;break;case"scroll":case"scrollend":v=Wh;break;case"wheel":v=pf;break;case"copy":case"cut":case"paste":v=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yr;break;case"toggle":case"beforetoggle":v=vf}var U=(t&4)!==0,ge=!U&&(e==="scroll"||e==="scrollend"),f=U?m!==null?m+"Capture":null:m;U=[];for(var c=p,g;c!==null;){var w=c;if(g=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||g===null||f===null||(w=Yi(c,f),w!=null&&U.push(Ca(c,w,g))),ge)break;c=c.return}0<U.length&&(m=new v(m,N,null,n,b),A.push({event:m,listeners:U}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==rs&&(N=n.relatedTarget||n.fromElement)&&(Jn(N)||N[Zn]))break e;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(N=n.relatedTarget||n.toElement,v=p,N=N?Jn(N):null,N!==null&&(ge=P(N),U=N.tag,N!==ge||U!==5&&U!==27&&U!==6)&&(N=null)):(v=null,N=p),v!==N)){if(U=_r,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(U=Yr,w="onPointerLeave",f="onPointerEnter",c="pointer"),ge=v==null?m:Vi(v),g=N==null?m:Vi(N),m=new U(w,c+"leave",v,n,b),m.target=ge,m.relatedTarget=g,w=null,Jn(b)===p&&(U=new U(f,c+"enter",N,n,b),U.target=g,U.relatedTarget=ge,w=U),ge=w,v&&N)t:{for(U=mg,f=v,c=N,g=0,w=f;w;w=U(w))g++;w=0;for(var B=c;B;B=U(B))w++;for(;0<g-w;)f=U(f),g--;for(;0<w-g;)c=U(c),w--;for(;g--;){if(f===c||c!==null&&f===c.alternate){U=f;break t}f=U(f),c=U(c)}U=null}else U=null;v!==null&&Id(A,m,v,U,!1),N!==null&&ge!==null&&Id(A,ge,N,U,!0)}}e:{if(m=p?Vi(p):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var le=$r;else if(Jr(m))if(ec)le=Df;else{le=xf;var z=Cf}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?p&&os(p.elementType)&&(le=$r):le=Mf;if(le&&(le=le(e,p))){Fr(A,le,n,b);break e}z&&z(e,m,p),e==="focusout"&&p&&m.type==="number"&&p.memoizedProps.value!=null&&ss(m,"number",m.value)}switch(z=p?Vi(p):window,e){case"focusin":(Jr(z)||z.contentEditable==="true")&&(si=z,ws=p,$i=null);break;case"focusout":$i=ws=si=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,rc(A,n,b);break;case"selectionchange":if(kf)break;case"keydown":case"keyup":rc(A,n,b)}var V;if(vs)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else li?Kr(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Qr&&n.locale!=="ko"&&(li||te!=="onCompositionStart"?te==="onCompositionEnd"&&li&&(V=Lr()):(sn=b,hs="value"in sn?sn.value:sn.textContent,li=!0)),z=Ol(p,te),0<z.length&&(te=new Vr(te,e,null,n,b),A.push({event:te,listeners:z}),V?te.data=V:(V=Zr(n),V!==null&&(te.data=V)))),(V=bf?Sf(e,n):wf(e,n))&&(te=Ol(p,"onBeforeInput"),0<te.length&&(z=new Vr("onBeforeInput","beforeinput",null,n,b),A.push({event:z,listeners:te}),z.data=V)),hg(A,e,p,n,b)}Hd(A,t)})}function Ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ol(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Yi(e,n),a!=null&&i.unshift(Ca(e,a,l)),a=Yi(e,t),a!=null&&i.push(Ca(e,a,l))),e.tag===3)return i;e=e.return}return[]}function mg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Id(e,t,n,i,a){for(var l=t._reactName,s=[];n!==null&&n!==i;){var o=n,r=o.alternate,p=o.stateNode;if(o=o.tag,r!==null&&r===i)break;o!==5&&o!==26&&o!==27||p===null||(r=p,a?(p=Yi(n,l),p!=null&&s.unshift(Ca(n,p,r))):a||(p=Yi(n,l),p!=null&&s.push(Ca(n,p,r)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var vg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function Od(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(yg,"")}function Ud(e,t){return t=Od(t),Od(e)===t}function fe(e,t,n,i,a,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ni(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ni(e,""+i);break;case"className":La(e,"class",i);break;case"tabIndex":La(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":La(e,n,i);break;case"style":Ur(e,i,l);break;case"data":if(t!=="object"){La(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_a(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",a.name,a,null),fe(e,t,"formEncType",a.formEncType,a,null),fe(e,t,"formMethod",a.formMethod,a,null),fe(e,t,"formTarget",a.formTarget,a,null)):(fe(e,t,"encType",a.encType,a,null),fe(e,t,"method",a.method,a,null),fe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_a(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=jt);break;case"onScroll":i!=null&&$("scroll",e);break;case"onScrollEnd":i!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=_a(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":$("beforetoggle",e),$("toggle",e),ja(e,"popover",i);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ja(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yh.get(n)||n,ja(e,n,i))}}function Xo(e,t,n,i,a,l){switch(n){case"style":Ur(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ni(e,i):(typeof i=="number"||typeof i=="bigint")&&ni(e,""+i);break;case"onScroll":i!=null&&$("scroll",e);break;case"onScrollEnd":i!=null&&$("scrollend",e);break;case"onClick":i!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),l=e[Je]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ja(e,n,i)}}}function Ye(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var i=!1,a=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,l,s,n,null)}}a&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":$("invalid",e);var o=l=s=a=null,r=null,p=null;for(i in n)if(n.hasOwnProperty(i)){var b=n[i];if(b!=null)switch(i){case"name":a=b;break;case"type":s=b;break;case"checked":r=b;break;case"defaultChecked":p=b;break;case"value":l=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(h(137,t));break;default:fe(e,t,i,b,n,null)}}Hr(e,l,o,r,p,s,a,!1);return;case"select":$("invalid",e),i=s=l=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:fe(e,t,a,o,n,null)}t=l,n=s,e.multiple=!!i,t!=null?ti(e,!!i,t,!1):n!=null&&ti(e,!!i,n,!0);return;case"textarea":$("invalid",e),l=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:fe(e,t,s,o,n,null)}Ir(e,i,a,l);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(i=n[r],i!=null))switch(r){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,r,i,n,null)}return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(i=0;i<Ta.length;i++)$(Ta[i],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in n)if(n.hasOwnProperty(p)&&(i=n[p],i!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,p,i,n,null)}return;default:if(os(t)){for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!==void 0&&Xo(e,t,b,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function bg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,s=null,o=null,r=null,p=null,b=null;for(v in n){var A=n[v];if(n.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=A;default:i.hasOwnProperty(v)||fe(e,t,v,null,i,A)}}for(var m in i){var v=i[m];if(A=n[m],i.hasOwnProperty(m)&&(v!=null||A!=null))switch(m){case"type":l=v;break;case"name":a=v;break;case"checked":p=v;break;case"defaultChecked":b=v;break;case"value":s=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==A&&fe(e,t,m,v,i,A)}}ls(e,s,o,r,p,b,l,a);return;case"select":v=s=o=m=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":v=r;default:i.hasOwnProperty(l)||fe(e,t,l,null,i,r)}for(a in i)if(l=i[a],r=n[a],i.hasOwnProperty(a)&&(l!=null||r!=null))switch(a){case"value":m=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==r&&fe(e,t,a,l,i,r)}t=o,n=s,i=v,m!=null?ti(e,!!n,m,!1):!!i!=!!n&&(t!=null?ti(e,!!n,t,!0):ti(e,!!n,n?[]:"",!1));return;case"textarea":v=m=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,a)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":m=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==l&&fe(e,t,s,a,i,l)}qr(e,m,v);return;case"option":for(var N in n)if(m=n[N],n.hasOwnProperty(N)&&m!=null&&!i.hasOwnProperty(N))switch(N){case"selected":e.selected=!1;break;default:fe(e,t,N,null,i,m)}for(r in i)if(m=i[r],v=n[r],i.hasOwnProperty(r)&&m!==v&&(m!=null||v!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:fe(e,t,r,m,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in n)m=n[U],n.hasOwnProperty(U)&&m!=null&&!i.hasOwnProperty(U)&&fe(e,t,U,null,i,m);for(p in i)if(m=i[p],v=n[p],i.hasOwnProperty(p)&&m!==v&&(m!=null||v!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:fe(e,t,p,m,i,v)}return;default:if(os(t)){for(var ge in n)m=n[ge],n.hasOwnProperty(ge)&&m!==void 0&&!i.hasOwnProperty(ge)&&Xo(e,t,ge,void 0,i,m);for(b in i)m=i[b],v=n[b],!i.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Xo(e,t,b,m,i,v);return}}for(var f in n)m=n[f],n.hasOwnProperty(f)&&m!=null&&!i.hasOwnProperty(f)&&fe(e,t,f,null,i,m);for(A in i)m=i[A],v=n[A],!i.hasOwnProperty(A)||m===v||m==null&&v==null||fe(e,t,A,m,i,v)}function Gd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],l=a.transferSize,s=a.initiatorType,o=a.duration;if(l&&o&&Gd(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var r=n[i],p=r.startTime;if(p>o)break;var b=r.transferSize,A=r.initiatorType;b&&Gd(A)&&(r=r.responseEnd,s+=b*(r<o?1:(o-p)/(r-p)))}if(--i,t+=8*(l+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ko=null,Zo=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function jd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ld(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fo=null;function wg(){var e=window.event;return e&&e.type==="popstate"?e===Fo?!1:(Fo=e,!0):(Fo=null,!1)}var Pd=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(Cg)}:Pd;function Cg(e){setTimeout(function(){throw e})}function Tn(e){return e==="head"}function Vd(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Bi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")xa(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,xa(n);for(var l=n.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[_i]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&xa(e.ownerDocument.body);n=a}while(n);Bi(t)}function Yd(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function $o(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$o(n),is(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xg(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[_i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=xt(e.nextSibling),e===null)break}return null}function Mg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xt(e.nextSibling),e===null))return null;return e}function Qd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=xt(e.nextSibling),e===null))return null;return e}function er(e){return e.data==="$?"||e.data==="$~"}function tr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var nr=null;function Wd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return xt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kd(e,t,n){switch(t=Ul(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function xa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);is(e)}var Mt=new Map,Zd=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nn=D.d;D.d={f:Eg,r:kg,D:Rg,C:Ng,L:zg,m:Bg,X:qg,S:Hg,M:Ig};function Eg(){var e=nn.f(),t=Rl();return e||t}function kg(e){var t=Fn(e);t!==null&&t.tag===5&&t.type==="form"?fu(t):nn.r(e)}var Ri=typeof document>"u"?null:document;function Jd(e,t,n){var i=Ri;if(i&&typeof t=="string"&&t){var a=yt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Zd.has(a)||(Zd.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ye(t,"link",e),qe(t),i.head.appendChild(t)))}}function Rg(e){nn.D(e),Jd("dns-prefetch",e,null)}function Ng(e,t){nn.C(e,t),Jd("preconnect",e,t)}function zg(e,t,n){nn.L(e,t,n);var i=Ri;if(i&&e&&t){var a='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+yt(n.imageSizes)+'"]')):a+='[href="'+yt(e)+'"]';var l=a;switch(t){case"style":l=Ni(e);break;case"script":l=zi(e)}Mt.has(l)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(l,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ma(l))||t==="script"&&i.querySelector(Da(l))||(t=i.createElement("link"),Ye(t,"link",e),qe(t),i.head.appendChild(t)))}}function Bg(e,t){nn.m(e,t);var n=Ri;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+yt(i)+'"][href="'+yt(e)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=zi(e)}if(!Mt.has(l)&&(e=R({rel:"modulepreload",href:e},t),Mt.set(l,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Da(l)))return}i=n.createElement("link"),Ye(i,"link",e),qe(i),n.head.appendChild(i)}}}function Hg(e,t,n){nn.S(e,t,n);var i=Ri;if(i&&e){var a=$n(i).hoistableStyles,l=Ni(e);t=t||"default";var s=a.get(l);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Ma(l)))o.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(l))&&ir(e,n);var r=s=i.createElement("link");qe(r),Ye(r,"link",e),r._p=new Promise(function(p,b){r.onload=p,r.onerror=b}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,jl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(l,s)}}}function qg(e,t){nn.X(e,t);var n=Ri;if(n&&e){var i=$n(n).hoistableScripts,a=zi(e),l=i.get(a);l||(l=n.querySelector(Da(a)),l||(e=R({src:e,async:!0},t),(t=Mt.get(a))&&ar(e,t),l=n.createElement("script"),qe(l),Ye(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Ig(e,t){nn.M(e,t);var n=Ri;if(n&&e){var i=$n(n).hoistableScripts,a=zi(e),l=i.get(a);l||(l=n.querySelector(Da(a)),l||(e=R({src:e,async:!0,type:"module"},t),(t=Mt.get(a))&&ar(e,t),l=n.createElement("script"),qe(l),Ye(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Fd(e,t,n,i){var a=(a=W.current)?Gl(a):null;if(!a)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ni(n.href),n=$n(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ni(n.href);var l=$n(a).hoistableStyles,s=l.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=a.querySelector(Ma(e)))&&!l._p&&(s.instance=l,s.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),l||Og(a,e,n,s.state))),t&&i===null)throw Error(h(528,""));return s}if(t&&i!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zi(n),n=$n(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Ni(e){return'href="'+yt(e)+'"'}function Ma(e){return'link[rel="stylesheet"]['+e+"]"}function $d(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Og(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ye(t,"link",n),qe(t),e.head.appendChild(t))}function zi(e){return'[src="'+yt(e)+'"]'}function Da(e){return"script[async]"+e}function eh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(i)return t.instance=i,qe(i),i;var a=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),qe(i),Ye(i,"style",a),jl(i,n.precedence,e),t.instance=i;case"stylesheet":a=Ni(n.href);var l=e.querySelector(Ma(a));if(l)return t.state.loading|=4,t.instance=l,qe(l),l;i=$d(n),(a=Mt.get(a))&&ir(i,a),l=(e.ownerDocument||e).createElement("link"),qe(l);var s=l;return s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Ye(l,"link",i),t.state.loading|=4,jl(l,n.precedence,e),t.instance=l;case"script":return l=zi(n.src),(a=e.querySelector(Da(l)))?(t.instance=a,qe(a),a):(i=n,(a=Mt.get(l))&&(i=R({},n),ar(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),qe(a),Ye(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,jl(i,n.precedence,e));return t.instance}function jl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ir(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ar(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ll=null;function th(e,t,n){if(Ll===null){var i=new Map,a=Ll=new Map;a.set(n,i)}else a=Ll,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a];if(!(l[_i]||l[Le]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(l):i.set(s,[l])}}return i}function nh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ug(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ih(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gg(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ni(i.href),l=t.querySelector(Ma(a));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Pl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,qe(l);return}l=t.ownerDocument||t,i=$d(i),(a=Mt.get(a))&&ir(i,a),l=l.createElement("link"),qe(l);var s=l;s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Ye(l,"link",i),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Pl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var lr=0;function jg(e,t){return e.stylesheets&&e.count===0&&Vl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&lr===0&&(lr=62500*Sg());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>lr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _l=null;function Vl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_l=new Map,t.forEach(Lg,e),_l=null,Pl.call(e))}function Lg(e,t){if(!(t.state.loading&4)){var n=_l.get(e);if(n)var i=n.get(null);else{n=new Map,_l.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var s=a[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),l=n.get(s)||i,l===i&&n.set(null,a),n.set(s,a),this.count++,i=Pl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ea={$$typeof:De,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Pg(e,t,n,i,a,l,s,o,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$l(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.hiddenUpdates=$l(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ah(e,t,n,i,a,l,s,o,r,p,b,A){return e=new Pg(e,t,n,s,r,p,b,A,o),t=1,l===!0&&(t|=24),l=ut(3,null,null,t),e.current=l,l.stateNode=e,t=Os(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},Ls(l),e}function lh(e){return e?(e=ci,e):ci}function sh(e,t,n,i,a,l){a=lh(a),i.context===null?i.context=a:i.pendingContext=a,i=hn(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=fn(e,i,t),n!==null&&(it(n,e,t),sa(n,e,t))}function oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sr(e,t){oh(e,t),(e=e.alternate)&&oh(e,t)}function rh(e){if(e.tag===13||e.tag===31){var t=qn(e,67108864);t!==null&&it(t,e,67108864),sr(e,67108864)}}function ch(e){if(e.tag===13||e.tag===31){var t=pt();t=es(t);var n=qn(e,t);n!==null&&it(n,e,t),sr(e,t)}}var Yl=!0;function _g(e,t,n,i){var a=y.T;y.T=null;var l=D.p;try{D.p=2,or(e,t,n,i)}finally{D.p=l,y.T=a}}function Vg(e,t,n,i){var a=y.T;y.T=null;var l=D.p;try{D.p=8,or(e,t,n,i)}finally{D.p=l,y.T=a}}function or(e,t,n,i){if(Yl){var a=rr(i);if(a===null)Wo(e,t,i,Ql,n),dh(e,i);else if(Qg(a,e,t,n,i))i.stopPropagation();else if(dh(e,i),t&4&&-1<Yg.indexOf(e)){for(;a!==null;){var l=Fn(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Rn(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var r=1<<31-rt(s);o.entanglements[1]|=r,s&=~r}Ut(l),(re&6)===0&&(El=Q()+500,Aa(0))}}break;case 31:case 13:o=qn(l,2),o!==null&&it(o,l,2),Rl(),sr(l,2)}if(l=rr(i),l===null&&Wo(e,t,i,Ql,n),l===a)break;a=l}a!==null&&i.stopPropagation()}else Wo(e,t,i,null,n)}}function rr(e){return e=cs(e),cr(e)}var Ql=null;function cr(e){if(Ql=null,e=Jn(e),e!==null){var t=P(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=O(t),e!==null)return e;e=null}else if(n===31){if(e=K(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ql=e,null}function uh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case Gi:return 2;case br:return 8;case qa:case Rh:return 32;case Sr:return 268435456;default:return 32}default:return 32}}var ur=!1,Cn=null,xn=null,Mn=null,ka=new Map,Ra=new Map,Dn=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dh(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(t.pointerId)}}function Na(e,t,n,i,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},t!==null&&(t=Fn(t),t!==null&&rh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Qg(e,t,n,i,a){switch(t){case"focusin":return Cn=Na(Cn,e,t,n,i,a),!0;case"dragenter":return xn=Na(xn,e,t,n,i,a),!0;case"mouseover":return Mn=Na(Mn,e,t,n,i,a),!0;case"pointerover":var l=a.pointerId;return ka.set(l,Na(ka.get(l)||null,e,t,n,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Ra.set(l,Na(Ra.get(l)||null,e,t,n,i,a)),!0}return!1}function hh(e){var t=Jn(e.target);if(t!==null){var n=P(t);if(n!==null){if(t=n.tag,t===13){if(t=O(n),t!==null){e.blockedOn=t,Mr(e.priority,function(){ch(n)});return}}else if(t===31){if(t=K(n),t!==null){e.blockedOn=t,Mr(e.priority,function(){ch(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rr(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);rs=i,n.target.dispatchEvent(i),rs=null}else return t=Fn(n),t!==null&&rh(t),e.blockedOn=n,!1;t.shift()}return!0}function fh(e,t,n){Wl(e)&&n.delete(t)}function Wg(){ur=!1,Cn!==null&&Wl(Cn)&&(Cn=null),xn!==null&&Wl(xn)&&(xn=null),Mn!==null&&Wl(Mn)&&(Mn=null),ka.forEach(fh),Ra.forEach(fh)}function Xl(e,t){e.blockedOn===t&&(e.blockedOn=null,ur||(ur=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Wg)))}var Kl=null;function gh(e){Kl!==e&&(Kl=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(cr(i||n)===null)continue;break}var l=Fn(n);l!==null&&(e.splice(t,3),t-=3,oo(l,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Bi(e){function t(r){return Xl(r,e)}Cn!==null&&Xl(Cn,e),xn!==null&&Xl(xn,e),Mn!==null&&Xl(Mn,e),ka.forEach(t),Ra.forEach(t);for(var n=0;n<Dn.length;n++){var i=Dn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)hh(n),n.blockedOn===null&&Dn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],s=a[Je]||null;if(typeof l=="function")s||gh(n);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,s=l[Je]||null)o=s.formAction;else if(cr(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),gh(n)}}}function ph(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function dr(e){this._internalRoot=e}Zl.prototype.render=dr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,i=pt();sh(n,i,e,t,null,null)},Zl.prototype.unmount=dr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sh(e.current,2,null,e,null,null),Rl(),t[Zn]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=xr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&t!==0&&t<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&hh(e)}};var mh=J.version;if(mh!=="19.2.0")throw Error(h(527,mh,"19.2.0"));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var Xg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{ji=Jl.inject(Xg),ot=Jl}catch{}}return Ba.createRoot=function(e,t){if(!G(e))throw Error(h(299));var n=!1,i="",a=Tu,l=Cu,s=xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ah(e,1,!1,null,null,n,i,null,a,l,s,ph),e[Zn]=t.current,Qo(e),new dr(t)},Ba.hydrateRoot=function(e,t,n){if(!G(e))throw Error(h(299));var i=!1,a="",l=Tu,s=Cu,o=xu,r=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),t=ah(e,1,!0,t,n??null,i,a,r,l,s,o,ph),t.context=lh(null),n=t.current,i=pt(),i=es(i),a=hn(i),a.callback=null,fn(n,a,i),n=i,t.current.lanes=n,Pi(t,n),Ut(t),e[Zn]=t.current,Qo(e),new Zl(t)},Ba.version="19.2.0",Ba}var Mh;function ap(){if(Mh)return gr.exports;Mh=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(J){console.error(J)}}return x(),gr.exports=ip(),gr.exports}var lp=ap();const sp=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
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
        `}]}],op={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0},{question:"Which interface connects the BTS and BSC in GSM?",options:["Um Interface","A Interface","Abis Interface","B Interface"],answer:2},{question:"What is the maximum data rate of GPRS (theoretical)?",options:["9.6 kbps","56 kbps","171.2 kbps","2 Mbps"],answer:2},{question:"Which component in GPRS is equivalent to the MSC in GSM?",options:["GGSN","SGSN","PCU","HLR"],answer:1},{question:"In Mobile Computing, what does 'Ubiquitous Computing' refer to?",options:["Computing that is visible everywhere","Computing that is integrated into the environment and invisible to the user","Computing using only mobile phones","Cloud computing"],answer:1},{question:"What is the function of the Equipment Identity Register (EIR)?",options:["Stores user billing info","Stores the IMEI numbers of valid, stolen, or faulty devices","Stores the current location of the user","Stores SMS messages"],answer:1},{question:"Which multiple access technique does GSM use?",options:["FDMA only","TDMA only","CDMA","Combination of FDMA and TDMA"],answer:3},{question:"What is a 'Cell' in cellular networks?",options:["A battery","The geographic area covered by a single Base Station","A mobile phone","A packet of data"],answer:1}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1},{question:"What is the purpose of the NAV (Network Allocation Vector) in IEEE 802.11?",options:["To route packets","To assign IP addresses","To indicate how long the channel will be busy (Virtual Carrier Sensing)","To encrypt data"],answer:2},{question:"In Mobile IP, what is 'Triangular Routing'?",options:["Routing between 3 routers","The path CN -> HA -> FA -> MN -> CN","A routing loop","Routing using 3 antennas"],answer:1},{question:"Which protocol is used for Agent Discovery in Mobile IP?",options:["ARP","ICMP Router Discovery","DHCP","DNS"],answer:1},{question:"What is 'Minimal Encapsulation' in Mobile IP?",options:["No encryption","A tunneling method with less overhead than IP-in-IP","Sending small packets","Compressing headers"],answer:1},{question:"Which IEEE standard defines Wireless LANs (Wi-Fi)?",options:["802.3","802.15","802.11","802.16"],answer:2},{question:"What is the Near-Far problem primarily associated with?",options:["TDMA","FDMA","CDMA","SDMA"],answer:2},{question:"What is the function of the Foreign Agent (FA)?",options:["It stores the user's permanent profile","It acts as a router on the visited network and delivers packets to the MN","It assigns the Home Address","It manages the radio spectrum"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2},{question:"What is the main disadvantage of I-TCP?",options:["It is slow","It violates end-to-end TCP semantics","It requires new hardware","It doesn't work with IPv6"],answer:1},{question:"What is 'Fast Retransmit' in TCP?",options:["Retransmitting after timeout","Retransmitting after receiving 3 duplicate ACKs","Sending data twice","Using UDP for retransmission"],answer:1},{question:"Which TCP mechanism is designed to distinguish between congestion loss and wireless error loss?",options:["Standard TCP","TCP Reno","Explicit Congestion Notification (ECN) / TCP Westwood","UDP"],answer:2},{question:"In WAP, which layer replaces HTTP?",options:["WAE","WSP (Wireless Session Protocol)","WTP","WDP"],answer:1},{question:"What is a Piconet in Bluetooth?",options:["A large network","A network of up to 8 devices (1 Master, 7 Slaves)","A network of routers","A type of antenna"],answer:1},{question:"Which layer in WAP provides security equivalent to TLS/SSL?",options:["WDP","WTP","WTLS","WAE"],answer:2},{question:"What is the frequency band used by Bluetooth?",options:["5 GHz","900 MHz","2.4 GHz ISM","60 GHz"],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2},{question:"What is 'Data Hoarding'?",options:["Deleting data","Prefetching data into cache before disconnection","Compressing data","Encrypting data"],answer:1},{question:"Which synchronization protocol is 'Pessimistic'?",options:["One that allows conflicts","One that locks data to prevent conflicts","One that uses timestamps","One that uses version vectors"],answer:1},{question:"What is a 'Broadcast Disk'?",options:["A physical disk","A cyclic broadcast of data that simulates a rotating disk","A satellite dish","A CD-ROM"],answer:1},{question:"In the context of Mobile Databases, what is a 'Tentative Transaction'?",options:["A transaction that has been committed","A transaction executed on a disconnected mobile unit that is not yet confirmed by the server","A failed transaction","A read-only transaction"],answer:1},{question:"What is 'Kangaroo Transaction'?",options:["A fast transaction","A transaction that hops from one Base Station to another with the user","A transaction that jumps steps","A large transaction"],answer:1},{question:"What is the primary goal of Caching in mobile computing?",options:["To use more memory","To reduce access latency and bandwidth usage","To increase server load","To slow down the device"],answer:1},{question:"Which strategy is used to maintain cache consistency?",options:["Random Deletion","Invalidation Reports","Formatting","Rebooting"],answer:1}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1},{question:"What is a 'Blackhole Attack' in MANETs?",options:["A physical hole in the device","A malicious node drops all packets it receives","A virus","A power failure"],answer:1},{question:"What does DSR stand for?",options:["Dynamic Source Routing","Direct Source Routing","Distance Source Routing","Dynamic Static Routing"],answer:0},{question:"Which routing protocol uses a 'Height' metric and is loop-free?",options:["AODV","DSR","TORA","DSDV"],answer:2},{question:"What is J2ME primarily used for?",options:["Desktop applications","Server-side scripting","Mobile and embedded applications","Web design"],answer:2},{question:"In J2ME, what is a MIDlet?",options:["A small device","A Java application for mobile devices","A virus","A database"],answer:1},{question:"What is the 'Wormhole Attack'?",options:["Tunneling packets to another location to disrupt routing","Eating data","Creating a loop","Blocking signals"],answer:0},{question:"Which configuration in J2ME is for devices with limited resources (like cell phones)?",options:["CDC (Connected Device Configuration)","CLDC (Connected Limited Device Configuration)","J2SE","J2EE"],answer:1}]},rp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
        `}]}],fp=[{id:1,unit:"I",front:"Mobile Computing Definition",back:`
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
    `}],gp=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit covers the fundamental principles of sensors, their classification, and detailed study of electromechanical sensors like Strain Gauges and Capacitive Sensors.</p>",topics:[{title:"Sensors & Transducers Basics",content:`
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
        `}]}],pp={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1}]},mp={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer.",answer:"Sensor detects physical parameter. Transducer converts energy form."},{id:2,question:"What is Gauge Factor?",answer:"Sensitivity of strain gauge. GF = (dR/R)/strain."},{id:3,question:"State Seebeck Effect.",answer:"EMF generation at junction of dissimilar metals due to temp diff."},{id:4,question:"What is a Thermistor?",answer:"Resistor with high negative temp coefficient."},{id:5,question:"Define Hall Effect.",answer:"Voltage generation perpendicular to current and magnetic field."},{id:6,question:"What is LVDT?",answer:"Linear Variable Differential Transformer for displacement."},{id:7,question:"What is LDR?",answer:"Light Dependent Resistor."},{id:8,question:"Define SHE.",answer:"Standard Hydrogen Electrode (0V reference)."},{id:9,question:"What is a Smart Sensor?",answer:"Sensor with built-in processing and communication."},{id:10,question:"List 2 automotive sensors.",answer:"ABS sensor, Airbag sensor."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the working principle of Strain Gauge.",answer:"Detailed explanation of piezoresistive effect..."},{question:"Describe Capacitive Transducers.",answer:"Principle C=eA/d and applications..."}]}]},vp=[{category:"Sensor Diagrams",tips:[{title:"Draw the Block Diagram",content:"For any sensor (e.g., Smart Sensor), always draw: **Input -> Sensing Element -> Signal Conditioning -> ADC -> Output**."}]}],yp=[{id:1,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>Device converting energy from one form to another.</p></div>'},{id:2,unit:"I",front:"Gauge Factor",back:'<div class="fc-content"><p>Sensitivity of Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong></p></div>'},{id:3,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Generation of EMF when two dissimilar metals are kept at different temperatures.</p></div>'},{id:4,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Voltage generated perpendicular to both current and magnetic field.</p></div>'},{id:5,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>Sensor + Signal Conditioning + ADC + Processor.</p></div>'}],bp=[{unit:"I",title:"Professional Practice and Ethics",notes:"<h3>Unit I Overview</h3><p>This unit lays the foundation for ethical practice in engineering, distinguishing between personal and professional ethics, and defining the core responsibilities and liabilities of a professional.</p>",topics:[{title:"Definition of Professional Ethics",content:`
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
        `}]}],Sp={I:[{id:1,question:"What is the primary focus of Engineering Ethics?",options:["Profit Maximization","Public Safety","Personal Gain","Corporate Loyalty"],answer:1}],II:[],III:[],IV:[],V:[]},wp={title:"Professional Practice, Law & Ethics - Model Paper 1",subject:"Professional Practice, Law & Ethics",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Professional Ethics.",answer:"<strong>Professional Ethics</strong> refers to the personal and corporate rules that govern behavior within the context of a particular profession. It involves principles of conduct, integrity, and responsibility towards the public, clients, and employers."},{id:2,question:"What is the main objective of Engineering Ethics?",answer:"The main objective is to ensure that engineers uphold the highest standards of integrity and prioritize the <strong>safety, health, and welfare of the public</strong> in the performance of their professional duties."},{id:3,question:"Define a 'Contract' as per the Indian Contract Act, 1872.",answer:"According to Section 2(h) of the Indian Contract Act, 1872, a <strong>Contract</strong> is an agreement enforceable by law. <br><em>Formula: Contract = Agreement + Enforceability.</em>"},{id:4,question:"What is meant by 'Quid Pro Quo' in a contract?",answer:"<strong>Quid Pro Quo</strong> means 'something in return'. In legal terms, it refers to <strong>Consideration</strong>, which is an essential element of a valid contract. Without consideration, a contract is generally void."},{id:5,question:"Define Arbitration.",answer:"<strong>Arbitration</strong> is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute."},{id:6,question:"What is an Arbitral Award?",answer:"An <strong>Arbitral Award</strong> is the final decision or judgment given by the arbitration tribunal. It is binding on the parties and is enforceable in the same manner as a court decree."},{id:7,question:"What is the purpose of the Industrial Employment (Standing Orders) Act, 1946?",answer:"Its purpose is to require employers in industrial establishments to formally define conditions of employment (standing orders) and make them known to workmen to prevent ambiguity and disputes."},{id:8,question:"Define 'Workman' under the Workmen's Compensation Act.",answer:"A <strong>Workman</strong> is any person (other than a person whose employment is of a casual nature) who is employed for the purposes of the employer's trade or business."},{id:9,question:"What does IPR stand for? Give two examples.",answer:"<strong>IPR</strong> stands for <strong>Intellectual Property Rights</strong>. Examples include: <br>1. <strong>Patents</strong> (for inventions). <br>2. <strong>Copyrights</strong> (for literary/artistic works)."},{id:10,question:"What is the validity period of a Patent in India?",answer:"The term of every patent granted in India is <strong>20 years</strong> from the date of filing of the application."}],partB:[{unit:"I",questionNumber:2,choices:[{question:"Explain the difference between Personal Ethics and Professional Ethics with suitable examples. Discuss the concept of Professional Responsibility.",answer:`
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
          `}]}]},Ap=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],Tp=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}],Dh={I:{id:"root",label:"Mobile Computing",children:[{id:"gsm",label:"GSM Architecture",children:[{id:"rss",label:"Radio Subsystem (RSS)",children:[{id:"ms",label:"Mobile Station"},{id:"bss",label:"Base Station (BSS)"}]},{id:"nss",label:"Network Switching (NSS)",children:[{id:"msc",label:"MSC"},{id:"hlr",label:"HLR / VLR"}]},{id:"oss",label:"Operation (OSS)",children:[{id:"omc",label:"OMC"},{id:"eir",label:"EIR / AUC"}]}]},{id:"gprs",label:"GPRS",children:[{id:"pkt",label:"Packet Switching"},{id:"nodes",label:"New Nodes",children:[{id:"sgsn",label:"SGSN"},{id:"ggsn",label:"GGSN"}]}]}]},II:{id:"root",label:"Wireless MAC & IP",children:[{id:"mac",label:"MAC Layer",children:[{id:"sdma",label:"SDMA (Space)"},{id:"fdma",label:"FDMA (Freq)"},{id:"tdma",label:"TDMA (Time)"},{id:"cdma",label:"CDMA (Code)"}]},{id:"80211",label:"IEEE 802.11",children:[{id:"arch",label:"Architecture",children:[{id:"bss",label:"BSS/ESS"},{id:"ap",label:"Access Point"}]},{id:"mac_layer",label:"MAC",children:[{id:"dcf",label:"DCF"},{id:"pcf",label:"PCF"}]}]},{id:"mip",label:"Mobile IP",children:[{id:"entities",label:"Entities",children:[{id:"mn",label:"MN"},{id:"ha",label:"HA"},{id:"fa",label:"FA"}]},{id:"mech",label:"Mechanisms",children:[{id:"tunnel",label:"Tunneling"},{id:"tri",label:"Triangular Routing"}]}]}]},III:{id:"root",label:"Mobile Transport",children:[{id:"tcp_issues",label:"TCP Issues",children:[{id:"cong",label:"Congestion vs Error"},{id:"disc",label:"Frequent Disconnection"}]},{id:"solutions",label:"Solutions",children:[{id:"itcp",label:"Indirect TCP",children:[{id:"split",label:"Split Connection"}]},{id:"snoop",label:"Snooping TCP",children:[{id:"buffer",label:"Buffering at BS"}]},{id:"mtcp",label:"Mobile TCP",children:[{id:"persist",label:"Persist Mode"}]}]}]},IV:{id:"root",label:"Data Dissemination",children:[{id:"models",label:"Delivery Models",children:[{id:"push",label:"Push (Publish/Sub)"},{id:"pull",label:"Pull (On-Demand)"},{id:"hybrid",label:"Hybrid"}]},{id:"bdisk",label:"Broadcast Disk",children:[{id:"flat",label:"Flat Schedule"},{id:"skew",label:"Skewed Schedule"},{id:"index",label:"Indexing",children:[{id:"power",label:"Save Power"}]}]},{id:"cache",label:"Caching",children:[{id:"consist",label:"Consistency",children:[{id:"inv",label:"Invalidation Reports"}]}]}]},V:{id:"root",label:"MANETs & Platforms",children:[{id:"routing",label:"Routing Protocols",children:[{id:"pro",label:"Proactive",children:[{id:"dsdv",label:"DSDV"}]},{id:"reac",label:"Reactive",children:[{id:"dsr",label:"DSR"},{id:"aodv",label:"AODV"}]},{id:"hybrid",label:"Hybrid",children:[{id:"zrp",label:"ZRP"}]}]},{id:"security",label:"Security",children:[{id:"attacks",label:"Attacks",children:[{id:"black",label:"Blackhole"},{id:"worm",label:"Wormhole"}]}]},{id:"j2me",label:"J2ME",children:[{id:"config",label:"Config (CLDC)"},{id:"profile",label:"Profile (MIDP)"}]}]}},Cp="modulepreload",xp=function(x){return"/mobile-computing-prep/"+x},Eh={},Mp=function(J,Y,h){let G=Promise.resolve();if(Y&&Y.length>0){let T=function(H){return Promise.all(H.map(R=>Promise.resolve(R).then(q=>({status:"fulfilled",value:q}),q=>({status:"rejected",reason:q}))))};var O=T;document.getElementsByTagName("link");const K=document.querySelector("meta[property=csp-nonce]"),M=K?.nonce||K?.getAttribute("nonce");G=T(Y.map(H=>{if(H=xp(H),H in Eh)return;Eh[H]=!0;const R=H.endsWith(".css"),q=R?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${H}"]${q}`))return;const oe=document.createElement("link");if(oe.rel=R?"stylesheet":Cp,R||(oe.as="script"),oe.crossOrigin="",oe.href=H,M&&oe.setAttribute("nonce",M),document.head.appendChild(oe),R)return new Promise((me,Ae)=>{oe.addEventListener("load",me),oe.addEventListener("error",()=>Ae(new Error(`Unable to preload CSS for ${H}`)))})}))}function P(K){const M=new Event("vite:preloadError",{cancelable:!0});if(M.payload=K,window.dispatchEvent(M),!M.defaultPrevented)throw K}return G.then(K=>{for(const M of K||[])M.status==="rejected"&&P(M.reason);return J().catch(P)})};function Dp(x={}){const{immediate:J=!1,onNeedRefresh:Y,onOfflineReady:h,onRegistered:G,onRegisteredSW:P,onRegisterError:O}=x;let K,M,T;const H=async(q=!0)=>{await M,T?.()};async function R(){if("serviceWorker"in navigator){if(K=await Mp(async()=>{const{Workbox:q}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:q}},[]).then(({Workbox:q})=>new q("/mobile-computing-prep/sw.js",{scope:"/mobile-computing-prep/",type:"classic"})).catch(q=>{O?.(q)}),!K)return;T=()=>{K?.messageSkipWaiting()};{let q=!1;const oe=()=>{q=!0,K?.addEventListener("controlling",me=>{me.isUpdate&&window.location.reload()}),Y?.()};K.addEventListener("installed",me=>{typeof me.isUpdate>"u"?typeof me.isExternal<"u"&&me.isExternal?oe():!q&&h?.():me.isUpdate||h?.()}),K.addEventListener("waiting",oe)}K.register({immediate:J}).then(q=>{P?P("/mobile-computing-prep/sw.js",q):G?.(q)}).catch(q=>{O?.(q)})}}return M=R(),H}function Ep(x={}){const{immediate:J=!0,onNeedRefresh:Y,onOfflineReady:h,onRegistered:G,onRegisteredSW:P,onRegisterError:O}=x,[K,M]=be.useState(!1),[T,H]=be.useState(!1),[R]=be.useState(()=>Dp({immediate:J,onOfflineReady(){H(!0),h?.()},onNeedRefresh(){M(!0),Y?.()},onRegistered:G,onRegisteredSW:P,onRegisterError:O}));return{needRefresh:[K,M],offlineReady:[T,H],updateServiceWorker:R}}function kp(){const{offlineReady:[x,J],needRefresh:[Y,h],updateServiceWorker:G}=Ep({onRegistered(O){console.log("SW Registered: "+O)},onRegisterError(O){console.log("SW registration error",O)}}),P=()=>{J(!1),h(!1)};return d.jsx("div",{className:"ReloadPrompt-container",children:(x||Y)&&d.jsxs("div",{className:"ReloadPrompt-toast",children:[d.jsx("div",{className:"ReloadPrompt-message",children:x?d.jsx("span",{children:"App ready to work offline"}):d.jsx("span",{children:"New content available, click on reload button to update."})}),Y&&d.jsx("button",{className:"ReloadPrompt-toast-button",onClick:()=>G(!0),children:"Reload"}),d.jsx("button",{className:"ReloadPrompt-toast-button",onClick:P,children:"Close"})]})})}const kh=({node:x})=>d.jsxs("div",{className:"mm-node",children:[d.jsx("div",{className:"mm-content",children:x.label}),x.children&&x.children.length>0&&d.jsx("div",{className:"mm-children",children:x.children.map(J=>d.jsx(kh,{node:J},J.id))})]});function Rp(){const[x,J]=be.useState(null),h=x==="sensors"?{title:"Electronic Sensors",syllabus:gp,quizzes:pp,papers:[mp],tips:vp,flashcards:yp,progressKey:"electronicSensorsProgress"}:x==="pple"?{title:"Professional Practice, Law & Ethics",syllabus:bp,quizzes:Sp,papers:[wp],tips:Ap,flashcards:Tp,progressKey:"ppleProgress"}:{title:"Mobile Computing",syllabus:sp,quizzes:op,papers:[rp,cp,up,dp],tips:hp,flashcards:fp,progressKey:"mobileComputingProgress"},[G,P]=be.useState(null),[O,K]=be.useState(null),[M,T]=be.useState("study"),[H,R]=be.useState(0),[q,oe]=be.useState(0),[me,Ae]=be.useState(!1),[Oe,Qe]=be.useState([]),[Ue,De]=be.useState({}),[Ke,at]=be.useState(0),[ze,Z]=be.useState({}),[Ge,lt]=be.useState({}),[zt,st]=be.useState(null),[Be,Dt]=be.useState(null),[mt,We]=be.useState(1),[y,D]=be.useState({}),[I,ie]=be.useState(0),[ce,u]=be.useState(!1),[S,E]=be.useState([]),[k,j]=be.useState(0);be.useEffect(()=>{if(x){const C=localStorage.getItem(h.progressKey);De(C?JSON.parse(C):{}),T("study"),P(null),K(null),E([...h.flashcards]),ie(0),at(0)}},[x,h.progressKey,h.flashcards]);const W=(C,X,Q)=>{const Ht=Ue[C]?.score||0;if(X>Ht){const Gi={...Ue,[C]:{score:X,total:Q}};De(Gi),localStorage.setItem(h.progressKey,JSON.stringify(Gi))}},ae=(C,X)=>{D(Q=>({...Q,[C]:Q[C]===X?null:X}))},je=C=>st(C),Se=()=>st(null),kn=C=>{h.quizzes[C]?(K(C),R(0),oe(0),Ae(!1)):alert("Quiz coming soon for this unit!")},Xn=()=>{let C=[];Object.values(h.quizzes).forEach(Ht=>{C=[...C,...Ht]});const Q=C.sort(()=>.5-Math.random()).slice(0,10);Qe(Q),K("FINAL"),R(0),oe(0),Ae(!1)},Hi=C=>{let X=!1;const Q=O==="FINAL"?Oe:h.quizzes[O];C===Q[H].answer&&(X=!0),X&&oe(q+1);const Ht=H+1;Ht<Q.length?R(Ht):(Ae(!0),W(O,X?q+1:q,Q.length))},qi=()=>{K(null),R(0),oe(0),Ae(!1),Qe([])},Bt=C=>{Z(X=>({...X,[C]:!X[C]}))},Kn=(C,X)=>{lt(Q=>({...Q,[C]:X}))},Ii=C=>{at(C),Z({}),lt({}),window.scrollTo(0,0)},Fl=()=>{u(!1),setTimeout(()=>ie(C=>(C+1)%S.length),200)},Ha=()=>{u(!1),setTimeout(()=>ie(C=>(C-1+S.length)%S.length),200)},Oi=()=>u(!ce),Ui=()=>{u(!1),setTimeout(()=>{const C=[...h.flashcards].sort(()=>.5-Math.random());E(C),ie(0)},200)};if(!x)return d.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[d.jsx("h1",{children:"Select Your Subject"}),d.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[d.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>J("mobile"),children:[d.jsx("h2",{children:"📱 Mobile Computing"}),d.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),d.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),d.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>J("sensors"),children:[d.jsx("h2",{children:"🌡️ Electronic Sensors"}),d.jsx("p",{children:"Unit I - V, Open Elective-II"}),d.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),d.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>J("pple"),children:[d.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),d.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),d.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const Et=h.papers[Ke];return d.jsxs("div",{className:"container",children:[d.jsxs("header",{children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[d.jsx("button",{className:"btn",onClick:()=>J(null),children:"← Switch Subject"}),d.jsx("span",{className:"unit-badge",children:h.title})]}),d.jsxs("h1",{children:[h.title," Prep"]}),d.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),d.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[d.jsx("button",{className:`btn ${M==="study"?"btn-primary":""}`,onClick:()=>T("study"),children:"Study Mode"}),d.jsx("button",{className:`btn ${M==="paper"?"btn-primary":""}`,onClick:()=>T("paper"),children:"Model Papers"}),d.jsx("button",{className:`btn ${M==="tips"?"btn-primary":""}`,onClick:()=>T("tips"),children:"Exam Tips"}),d.jsx("button",{className:`btn ${M==="flashcards"?"btn-primary":""}`,onClick:()=>T("flashcards"),children:"Flashcards"})]}),M==="study"&&d.jsxs(d.Fragment,{children:[d.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:Xn,children:"Start Final Exam (Mixed)"}),Ue.FINAL&&d.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Ue.FINAL.score,"/",Ue.FINAL.total]})]})]}),M==="study"&&d.jsx("main",{className:"grid",children:h.syllabus.map(C=>d.jsxs("div",{className:"card",children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsxs("span",{className:"unit-badge",children:["Unit ",C.unit]}),Ue[C.unit]&&d.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Ue[C.unit].score,"/",Ue[C.unit].total]})]}),d.jsx("h2",{children:C.title}),y[C.unit]==="notes"&&C.notes?d.jsx("div",{className:"notes-content",children:d.jsx("div",{dangerouslySetInnerHTML:{__html:C.notes}})}):d.jsxs("div",{className:"topics-list-container",children:[d.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),d.jsx("div",{className:"topics-grid",children:C.topics.map((X,Q)=>d.jsx("button",{className:"topic-btn",onClick:()=>je(X),children:X.title},Q))})]}),d.jsxs("div",{className:"actions",children:[d.jsx("button",{className:`btn ${y[C.unit]==="notes"?"btn-primary":""}`,onClick:()=>C.notes?ae(C.unit,"notes"):alert("Notes coming soon!"),children:y[C.unit]==="notes"?"Hide Overview":"Unit Overview"}),d.jsx("button",{className:"btn btn-primary",onClick:()=>{Dt(C.unit),We(1)},children:"Mind Map"}),d.jsx("button",{className:"btn btn-primary",onClick:()=>kn(C.unit),children:"Take Quiz"})]})]},C.unit))}),M==="paper"&&d.jsxs("main",{className:"paper-container",children:[d.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:h.papers.map((C,X)=>d.jsxs("button",{className:`btn ${Ke===X?"btn-primary":""}`,onClick:()=>Ii(X),children:["Paper Set ",X+1]},X))}),d.jsxs("div",{className:"paper-header",children:[d.jsx("h2",{children:Et.title}),d.jsx("h3",{children:Et.subject}),d.jsxs("div",{className:"paper-meta",children:[d.jsxs("span",{children:["Time: ",Et.time]}),d.jsxs("span",{children:["Max Marks: ",Et.maxMarks]})]})]}),d.jsxs("div",{className:"paper-section",children:[d.jsx("h3",{children:"PART-A (Short Answer Questions)"}),d.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),d.jsx("div",{className:"questions-list",children:Et.partA.map(C=>d.jsxs("div",{className:"question-item",children:[d.jsxs("div",{className:"question-text",children:[d.jsxs("strong",{children:[C.id,"."]})," ",C.question," ",d.jsx("span",{className:"marks",children:"[1M]"})]}),d.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:Ge[`A-${C.id}`]||"",onChange:X=>Kn(`A-${C.id}`,X.target.value)}),d.jsx("button",{className:"btn-text",onClick:()=>Bt(`A-${C.id}`),children:ze[`A-${C.id}`]?"Hide Model Answer":"Show Model Answer"}),ze[`A-${C.id}`]&&d.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:C.answer}})]},C.id))})]}),Et.partB&&d.jsxs("div",{className:"paper-section",children:[d.jsx("h3",{children:"PART-B (Long Answer Questions)"}),d.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),d.jsx("div",{className:"questions-list",children:Et.partB.map(C=>d.jsxs("div",{className:"question-group",children:[d.jsxs("h4",{children:["Unit ",C.unit]}),C.choices.map((X,Q)=>d.jsxs("div",{children:[d.jsxs("div",{className:"question-item",children:[d.jsxs("div",{className:"question-text",children:[d.jsxs("strong",{children:[C.questionNumber," (",String.fromCharCode(97+Q),")."]})," ",X.question," ",d.jsx("span",{className:"marks",children:"[10M]"})]}),d.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:Ge[`B-${C.questionNumber}${Q}`]||"",onChange:Ht=>Kn(`B-${C.questionNumber}${Q}`,Ht.target.value)}),d.jsx("button",{className:"btn-text",onClick:()=>Bt(`B-${C.questionNumber}${Q}`),children:ze[`B-${C.questionNumber}${Q}`]?"Hide Model Answer":"Show Model Answer"}),ze[`B-${C.questionNumber}${Q}`]&&d.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:X.answer}})]}),Q===0&&d.jsx("div",{className:"or-divider",children:"OR"})]},Q))]},C.questionNumber))})]})]}),M==="tips"&&d.jsxs("main",{className:"tips-container-pro",children:[d.jsxs("div",{className:"tips-sidebar",children:[d.jsx("h3",{children:"Exam Strategy"}),d.jsx("ul",{children:h.tips.map((C,X)=>d.jsxs("li",{className:k===X?"active":"",onClick:()=>j(X),children:[C.category.split(" ")[0]," ",d.jsx("span",{className:"sidebar-subtitle",children:C.category})]},X))})]}),d.jsxs("div",{className:"tips-content-area",children:[d.jsxs("div",{className:"tips-header-pro",children:[d.jsx("h2",{children:h.tips[k].category}),d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-fill",style:{width:`${(k+1)/h.tips.length*100}%`}})})]}),d.jsx("div",{className:"tips-cards-pro",children:h.tips[k].tips.map((C,X)=>d.jsxs("div",{className:"tip-card-pro",children:[d.jsx("div",{className:"tip-icon-pro",children:X+1}),d.jsxs("div",{className:"tip-text-pro",children:[d.jsx("h4",{children:C.title}),d.jsx("div",{dangerouslySetInnerHTML:{__html:C.content}})]})]},X))}),d.jsxs("div",{className:"tips-navigation",children:[d.jsx("button",{className:"btn",disabled:k===0,onClick:()=>j(C=>C-1),children:"← Previous"}),d.jsxs("span",{className:"page-indicator",children:[k+1," of ",h.tips.length]}),d.jsx("button",{className:"btn btn-primary",disabled:k===h.tips.length-1,onClick:()=>j(C=>C+1),children:"Next →"})]})]})]}),M==="flashcards"&&S.length>0&&d.jsxs("main",{className:"flashcard-container",children:[d.jsxs("div",{className:"flashcard-header",children:[d.jsx("h2",{children:"Interactive Flashcards"}),d.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),d.jsx("div",{className:"flashcard-scene",children:d.jsxs("div",{className:`flashcard ${ce?"flipped":""}`,onClick:Oi,children:[d.jsxs("div",{className:"flashcard-face flashcard-front",children:[d.jsxs("span",{className:"card-unit",children:["Unit ",S[I].unit]}),d.jsx("h3",{children:S[I].front}),d.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),d.jsx("div",{className:"flashcard-face flashcard-back",children:d.jsx("div",{dangerouslySetInnerHTML:{__html:S[I].back}})})]})}),d.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[d.jsx("button",{className:"btn btn-primary",onClick:Ha,children:"← Previous"}),d.jsxs("span",{className:"card-count",children:[I+1," / ",S.length]}),d.jsx("button",{className:"btn btn-primary",onClick:Fl,children:"Next →"})]}),d.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:d.jsx("button",{className:"btn btn-primary",onClick:Ui,children:"Shuffle Cards"})})]}),O&&d.jsx("div",{className:"quiz-overlay",children:d.jsxs("div",{className:"quiz-card",children:[d.jsx("button",{className:"close-btn",onClick:qi,style:{position:"absolute",right:"1.5rem",top:"1.5rem",zIndex:10},children:"×"}),me?d.jsxs("div",{className:"score-container",children:[d.jsx("div",{className:"score-circle",style:{"--score-percent":`${q/(O==="FINAL"?Oe.length:h.quizzes[O].length)*100}%`},children:d.jsxs("div",{className:"score-text",children:[d.jsx("span",{className:"score-number",children:q}),d.jsxs("span",{className:"score-total",children:["of ",O==="FINAL"?Oe.length:h.quizzes[O].length]})]})}),d.jsx("h2",{className:"score-message",children:q/(O==="FINAL"?Oe.length:h.quizzes[O].length)>.7?"Excellent Work! 🎉":"Keep Practicing! 💪"}),d.jsxs("p",{className:"score-submessage",children:["You've completed the ",O==="FINAL"?"Final Exam":`Unit ${O}`," quiz."]}),d.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[d.jsx("button",{className:"btn btn-outline",onClick:qi,children:"Close"}),d.jsx("button",{className:"btn btn-primary",onClick:()=>{Ae(!1),R(0),oe(0)},children:"Try Again"})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"quiz-header",children:[d.jsxs("div",{className:"quiz-meta",children:[d.jsx("span",{children:O==="FINAL"?"Final Exam":`Unit ${O} Quiz`}),d.jsxs("span",{children:["Question ",H+1," / ",O==="FINAL"?Oe.length:h.quizzes[O].length]})]}),d.jsx("div",{className:"quiz-progress-track",children:d.jsx("div",{className:"quiz-progress-fill",style:{width:`${(H+1)/(O==="FINAL"?Oe.length:h.quizzes[O].length)*100}%`}})})]}),d.jsx("div",{className:"quiz-content",children:(()=>{const C=O==="FINAL"?Oe:h.quizzes[O];return d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"quiz-question",children:C[H].question}),d.jsx("div",{className:"quiz-options",children:C[H].options.map((X,Q)=>d.jsx("button",{className:"quiz-option-btn",onClick:()=>Hi(Q),children:X},Q))})]})})()})]})]})}),zt&&d.jsx("div",{className:"modal-overlay",children:d.jsxs("div",{className:"modal-content topic-modal",children:[d.jsx("button",{className:"close-btn",onClick:Se,children:"×"}),d.jsxs("div",{className:"topic-content",children:[d.jsx("h2",{children:zt.title}),d.jsx("div",{dangerouslySetInnerHTML:{__html:zt.content}})]}),d.jsx("button",{className:"btn btn-primary",onClick:Se,style:{marginTop:"2rem"},children:"Close"})]})}),Be&&Dh[Be]&&d.jsx("div",{className:"modal-overlay",children:d.jsxs("div",{className:"modal-content",style:{width:"95%",height:"95%",maxWidth:"100%",display:"flex",flexDirection:"column",padding:"1rem"},children:[d.jsx("button",{className:"close-btn",onClick:()=>Dt(null),style:{top:"10px",right:"10px"},children:"×"}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[d.jsxs("h2",{style:{color:"var(--primary-color)",fontSize:"1.5rem",margin:0},children:["🧠 Concept Map: Unit ",Be]}),d.jsxs("div",{className:"zoom-controls",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[d.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>We(C=>Math.max(.5,C-.1)),children:"-"}),d.jsxs("span",{style:{minWidth:"3rem",textAlign:"center",fontWeight:"bold"},children:[Math.round(mt*100),"%"]}),d.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>We(C=>Math.min(2,C+.1)),children:"+"}),d.jsx("button",{className:"btn btn-outline",style:{padding:"0.2rem 0.8rem"},onClick:()=>We(1),children:"Reset"})]})]}),d.jsx("div",{className:"mindmap-container",style:{flex:1,overflow:"auto",marginTop:0,borderRadius:"12px",border:"1px solid #e2e8f0",position:"relative",display:"flex",alignItems:"flex-start",justifyContent:"flex-start"},children:d.jsx("div",{className:"mm-tree mm-root",style:{zoom:mt,margin:"auto",transformOrigin:"top left"},children:d.jsx(kh,{node:Dh[Be]})})}),d.jsx("button",{className:"btn btn-primary",onClick:()=>Dt(null),style:{alignSelf:"center",marginTop:"1rem",padding:"0.8rem 2rem",width:"auto",height:"auto",flexShrink:0,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:"Close Map"})]})}),d.jsxs("footer",{style:{textAlign:"center",padding:"2rem",color:"#64748b",fontSize:"0.9rem",marginTop:"auto"},children:[d.jsxs("p",{children:["Designed & Developed by ",d.jsx("strong",{children:"BTK Creations"})," 🚀"]}),d.jsxs("p",{style:{fontSize:"0.8rem",opacity:.7},children:["© ",new Date().getFullYear()," Mobile Computing Prep"]})]}),d.jsx(kp,{})]})}lp.createRoot(document.getElementById("root")).render(d.jsx(be.StrictMode,{children:d.jsx(Rp,{})}));
