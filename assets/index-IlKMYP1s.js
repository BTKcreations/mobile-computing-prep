(function(){const he=document.createElement("link").relList;if(he&&he.supports&&he.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))h(U);new MutationObserver(U=>{for(const J of U)if(J.type==="childList")for(const G of J.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&h(G)}).observe(document,{childList:!0,subtree:!0});function ae(U){const J={};return U.integrity&&(J.integrity=U.integrity),U.referrerPolicy&&(J.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?J.credentials="include":U.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function h(U){if(U.ep)return;U.ep=!0;const J=ae(U);fetch(U.href,J)}})();var rr={exports:{}},Ea={};var gh;function Xg(){if(gh)return Ea;gh=1;var E=Symbol.for("react.transitional.element"),he=Symbol.for("react.fragment");function ae(h,U,J){var G=null;if(J!==void 0&&(G=""+J),U.key!==void 0&&(G=""+U.key),"key"in U){J={};for(var Te in U)Te!=="key"&&(J[Te]=U[Te])}else J=U;return U=J.ref,{$$typeof:E,type:h,key:G,ref:U!==void 0?U:null,props:J}}return Ea.Fragment=he,Ea.jsx=ae,Ea.jsxs=ae,Ea}var ph;function Wg(){return ph||(ph=1,rr.exports=Xg()),rr.exports}var p=Wg(),cr={exports:{}},O={};var mh;function Kg(){if(mh)return O;mh=1;var E=Symbol.for("react.transitional.element"),he=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),ne=Symbol.iterator;function ke(u){return u===null||typeof u!="object"?null:(u=ne&&u[ne]||u["@@iterator"],typeof u=="function"?u:null)}var Ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Se=Object.assign,Oe={};function Qe(u,A,M){this.props=u,this.context=A,this.refs=Oe,this.updater=M||Ye}Qe.prototype.isReactComponent={},Qe.prototype.setState=function(u,A){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,A,"setState")},Qe.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Ue(){}Ue.prototype=Qe.prototype;function Ce(u,A,M){this.props=u,this.context=A,this.refs=Oe,this.updater=M||Ye}var Ke=Ce.prototype=new Ue;Ke.constructor=Ce,Se(Ke,Qe.prototype),Ke.isPureReactComponent=!0;var at=Array.isArray;function Re(){}var P={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function lt(u,A,M){var k=M.ref;return{$$typeof:E,type:u,key:A,ref:k!==void 0?k:null,props:M}}function Bt(u,A){return lt(u.type,A,u.props)}function st(u){return typeof u=="object"&&u!==null&&u.$$typeof===E}function Ne(u){var A={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(M){return A[M]})}var vt=/\/+/g;function yt(u,A){return typeof u=="object"&&u!==null&&u.key!=null?Ne(""+u.key):A.toString(36)}function Xe(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Re,Re):(u.status="pending",u.then(function(A){u.status==="pending"&&(u.status="fulfilled",u.value=A)},function(A){u.status==="pending"&&(u.status="rejected",u.reason=A)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function y(u,A,M,k,I){var _=typeof u;(_==="undefined"||_==="boolean")&&(u=null);var F=!1;if(u===null)F=!0;else switch(_){case"bigint":case"string":case"number":F=!0;break;case"object":switch(u.$$typeof){case E:case he:F=!0;break;case V:return F=u._init,y(F(u._payload),A,M,k,I)}}if(F)return I=I(u),F=k===""?"."+yt(u,0):k,at(I)?(M="",F!=null&&(M=F.replace(vt,"$&/")+"/"),y(I,A,M,"",function(Rn){return Rn})):I!=null&&(st(I)&&(I=Bt(I,M+(I.key==null||u&&u.key===I.key?"":(""+I.key).replace(vt,"$&/")+"/")+F)),A.push(I)),1;F=0;var Be=k===""?".":k+":";if(at(u))for(var me=0;me<u.length;me++)k=u[me],_=Be+yt(k,me),F+=y(k,A,M,_,I);else if(me=ke(u),typeof me=="function")for(u=me.call(u),me=0;!(k=u.next()).done;)k=k.value,_=Be+yt(k,me++),F+=y(k,A,M,_,I);else if(_==="object"){if(typeof u.then=="function")return y(Xe(u),A,M,k,I);throw A=String(u),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return F}function x(u,A,M){if(u==null)return u;var k=[],I=0;return y(u,k,"","",function(_){return A.call(M,_,I++)}),k}function z(u){if(u._status===-1){var A=u._result;A=A(),A.then(function(M){(u._status===0||u._status===-1)&&(u._status=1,u._result=M)},function(M){(u._status===0||u._status===-1)&&(u._status=2,u._result=M)}),u._status===-1&&(u._status=0,u._result=A)}if(u._status===1)return u._result.default;throw u._result}var $=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},le={map:x,forEach:function(u,A,M){x(u,function(){A.apply(this,arguments)},M)},count:function(u){var A=0;return x(u,function(){A++}),A},toArray:function(u){return x(u,function(A){return A})||[]},only:function(u){if(!st(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return O.Activity=B,O.Children=le,O.Component=Qe,O.Fragment=ae,O.Profiler=U,O.PureComponent=Ce,O.StrictMode=h,O.Suspense=R,O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,O.__COMPILER_RUNTIME={__proto__:null,c:function(u){return P.H.useMemoCache(u)}},O.cache=function(u){return function(){return u.apply(null,arguments)}},O.cacheSignal=function(){return null},O.cloneElement=function(u,A,M){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var k=Se({},u.props),I=u.key;if(A!=null)for(_ in A.key!==void 0&&(I=""+A.key),A)!Ge.call(A,_)||_==="key"||_==="__self"||_==="__source"||_==="ref"&&A.ref===void 0||(k[_]=A[_]);var _=arguments.length-2;if(_===1)k.children=M;else if(1<_){for(var F=Array(_),Be=0;Be<_;Be++)F[Be]=arguments[Be+2];k.children=F}return lt(u.type,I,k)},O.createContext=function(u){return u={$$typeof:G,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:J,_context:u},u},O.createElement=function(u,A,M){var k,I={},_=null;if(A!=null)for(k in A.key!==void 0&&(_=""+A.key),A)Ge.call(A,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(I[k]=A[k]);var F=arguments.length-2;if(F===1)I.children=M;else if(1<F){for(var Be=Array(F),me=0;me<F;me++)Be[me]=arguments[me+2];I.children=Be}if(u&&u.defaultProps)for(k in F=u.defaultProps,F)I[k]===void 0&&(I[k]=F[k]);return lt(u,_,I)},O.createRef=function(){return{current:null}},O.forwardRef=function(u){return{$$typeof:Te,render:u}},O.isValidElement=st,O.lazy=function(u){return{$$typeof:V,_payload:{_status:-1,_result:u},_init:z}},O.memo=function(u,A){return{$$typeof:T,type:u,compare:A===void 0?null:A}},O.startTransition=function(u){var A=P.T,M={};P.T=M;try{var k=u(),I=P.S;I!==null&&I(M,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(Re,$)}catch(_){$(_)}finally{A!==null&&M.types!==null&&(A.types=M.types),P.T=A}},O.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},O.use=function(u){return P.H.use(u)},O.useActionState=function(u,A,M){return P.H.useActionState(u,A,M)},O.useCallback=function(u,A){return P.H.useCallback(u,A)},O.useContext=function(u){return P.H.useContext(u)},O.useDebugValue=function(){},O.useDeferredValue=function(u,A){return P.H.useDeferredValue(u,A)},O.useEffect=function(u,A){return P.H.useEffect(u,A)},O.useEffectEvent=function(u){return P.H.useEffectEvent(u)},O.useId=function(){return P.H.useId()},O.useImperativeHandle=function(u,A,M){return P.H.useImperativeHandle(u,A,M)},O.useInsertionEffect=function(u,A){return P.H.useInsertionEffect(u,A)},O.useLayoutEffect=function(u,A){return P.H.useLayoutEffect(u,A)},O.useMemo=function(u,A){return P.H.useMemo(u,A)},O.useOptimistic=function(u,A){return P.H.useOptimistic(u,A)},O.useReducer=function(u,A,M){return P.H.useReducer(u,A,M)},O.useRef=function(u){return P.H.useRef(u)},O.useState=function(u){return P.H.useState(u)},O.useSyncExternalStore=function(u,A,M){return P.H.useSyncExternalStore(u,A,M)},O.useTransition=function(){return P.H.useTransition()},O.version="19.2.0",O}var vh;function gr(){return vh||(vh=1,cr.exports=Kg()),cr.exports}var He=gr(),ur={exports:{}},ka={},dr={exports:{}},hr={};var yh;function Zg(){return yh||(yh=1,(function(E){function he(y,x){var z=y.length;y.push(x);e:for(;0<z;){var $=z-1>>>1,le=y[$];if(0<U(le,x))y[$]=x,y[z]=le,z=$;else break e}}function ae(y){return y.length===0?null:y[0]}function h(y){if(y.length===0)return null;var x=y[0],z=y.pop();if(z!==x){y[0]=z;e:for(var $=0,le=y.length,u=le>>>1;$<u;){var A=2*($+1)-1,M=y[A],k=A+1,I=y[k];if(0>U(M,z))k<le&&0>U(I,M)?(y[$]=I,y[k]=z,$=k):(y[$]=M,y[A]=z,$=A);else if(k<le&&0>U(I,z))y[$]=I,y[k]=z,$=k;else break e}}return x}function U(y,x){var z=y.sortIndex-x.sortIndex;return z!==0?z:y.id-x.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;E.unstable_now=function(){return J.now()}}else{var G=Date,Te=G.now();E.unstable_now=function(){return G.now()-Te}}var R=[],T=[],V=1,B=null,ne=3,ke=!1,Ye=!1,Se=!1,Oe=!1,Qe=typeof setTimeout=="function"?setTimeout:null,Ue=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function Ke(y){for(var x=ae(T);x!==null;){if(x.callback===null)h(T);else if(x.startTime<=y)h(T),x.sortIndex=x.expirationTime,he(R,x);else break;x=ae(T)}}function at(y){if(Se=!1,Ke(y),!Ye)if(ae(R)!==null)Ye=!0,Re||(Re=!0,Ne());else{var x=ae(T);x!==null&&Xe(at,x.startTime-y)}}var Re=!1,P=-1,Ge=5,lt=-1;function Bt(){return Oe?!0:!(E.unstable_now()-lt<Ge)}function st(){if(Oe=!1,Re){var y=E.unstable_now();lt=y;var x=!0;try{e:{Ye=!1,Se&&(Se=!1,Ue(P),P=-1),ke=!0;var z=ne;try{t:{for(Ke(y),B=ae(R);B!==null&&!(B.expirationTime>y&&Bt());){var $=B.callback;if(typeof $=="function"){B.callback=null,ne=B.priorityLevel;var le=$(B.expirationTime<=y);if(y=E.unstable_now(),typeof le=="function"){B.callback=le,Ke(y),x=!0;break t}B===ae(R)&&h(R),Ke(y)}else h(R);B=ae(R)}if(B!==null)x=!0;else{var u=ae(T);u!==null&&Xe(at,u.startTime-y),x=!1}}break e}finally{B=null,ne=z,ke=!1}x=void 0}}finally{x?Ne():Re=!1}}}var Ne;if(typeof Ce=="function")Ne=function(){Ce(st)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,yt=vt.port2;vt.port1.onmessage=st,Ne=function(){yt.postMessage(null)}}else Ne=function(){Qe(st,0)};function Xe(y,x){P=Qe(function(){y(E.unstable_now())},x)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(y){y.callback=null},E.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<y?Math.floor(1e3/y):5},E.unstable_getCurrentPriorityLevel=function(){return ne},E.unstable_next=function(y){switch(ne){case 1:case 2:case 3:var x=3;break;default:x=ne}var z=ne;ne=x;try{return y()}finally{ne=z}},E.unstable_requestPaint=function(){Oe=!0},E.unstable_runWithPriority=function(y,x){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var z=ne;ne=y;try{return x()}finally{ne=z}},E.unstable_scheduleCallback=function(y,x,z){var $=E.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,y){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=z+le,y={id:V++,callback:x,priorityLevel:y,startTime:z,expirationTime:le,sortIndex:-1},z>$?(y.sortIndex=z,he(T,y),ae(R)===null&&y===ae(T)&&(Se?(Ue(P),P=-1):Se=!0,Xe(at,z-$))):(y.sortIndex=le,he(R,y),Ye||ke||(Ye=!0,Re||(Re=!0,Ne()))),y},E.unstable_shouldYield=Bt,E.unstable_wrapCallback=function(y){var x=ne;return function(){var z=ne;ne=x;try{return y.apply(this,arguments)}finally{ne=z}}}})(hr)),hr}var bh;function Jg(){return bh||(bh=1,dr.exports=Zg()),dr.exports}var fr={exports:{}},We={};var Sh;function Fg(){if(Sh)return We;Sh=1;var E=gr();function he(R){var T="https://react.dev/errors/"+R;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)T+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+R+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ae(){}var h={d:{f:ae,r:function(){throw Error(he(522))},D:ae,C:ae,L:ae,m:ae,X:ae,S:ae,M:ae},p:0,findDOMNode:null},U=Symbol.for("react.portal");function J(R,T,V){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:B==null?null:""+B,children:R,containerInfo:T,implementation:V}}var G=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Te(R,T){if(R==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,We.createPortal=function(R,T){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(he(299));return J(R,T,null,V)},We.flushSync=function(R){var T=G.T,V=h.p;try{if(G.T=null,h.p=2,R)return R()}finally{G.T=T,h.p=V,h.d.f()}},We.preconnect=function(R,T){typeof R=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(R,T))},We.prefetchDNS=function(R){typeof R=="string"&&h.d.D(R)},We.preinit=function(R,T){if(typeof R=="string"&&T&&typeof T.as=="string"){var V=T.as,B=Te(V,T.crossOrigin),ne=typeof T.integrity=="string"?T.integrity:void 0,ke=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;V==="style"?h.d.S(R,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:B,integrity:ne,fetchPriority:ke}):V==="script"&&h.d.X(R,{crossOrigin:B,integrity:ne,fetchPriority:ke,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},We.preinitModule=function(R,T){if(typeof R=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var V=Te(T.as,T.crossOrigin);h.d.M(R,{crossOrigin:V,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(R)},We.preload=function(R,T){if(typeof R=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var V=T.as,B=Te(V,T.crossOrigin);h.d.L(R,V,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},We.preloadModule=function(R,T){if(typeof R=="string")if(T){var V=Te(T.as,T.crossOrigin);h.d.m(R,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:V,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(R)},We.requestFormReset=function(R){h.d.r(R)},We.unstable_batchedUpdates=function(R,T){return R(T)},We.useFormState=function(R,T,V){return G.H.useFormState(R,T,V)},We.useFormStatus=function(){return G.H.useHostTransitionStatus()},We.version="19.2.0",We}var wh;function $g(){if(wh)return fr.exports;wh=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(he){console.error(he)}}return E(),fr.exports=Fg(),fr.exports}var Ah;function ep(){if(Ah)return ka;Ah=1;var E=Jg(),he=gr(),ae=$g();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function G(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Te(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(J(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return R(a),e;if(l===i)return R(a),t;l=l.sibling}throw Error(h(188))}if(n.return!==i.return)n=a,i=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=l;break}if(o===i){s=!0,i=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,i=a;break}if(o===i){s=!0,i=l,n=a;break}o=o.sibling}if(!s)throw Error(h(189))}}if(n.alternate!==i)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,ne=Symbol.for("react.element"),ke=Symbol.for("react.transitional.element"),Ye=Symbol.for("react.portal"),Se=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Ue=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),Bt=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var vt=Symbol.for("react.client.reference");function yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Se:return"Fragment";case Qe:return"Profiler";case Oe:return"StrictMode";case at:return"Suspense";case Re:return"SuspenseList";case lt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ye:return"Portal";case Ce:return e.displayName||"Context";case Ue:return(e._context.displayName||"Context")+".Consumer";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:yt(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return yt(e(t))}catch{}}return null}var Xe=Array.isArray,y=he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},$=[],le=-1;function u(e){return{current:e}}function A(e){0>le||(e.current=$[le],$[le]=null,le--)}function M(e,t){le++,$[le]=e.current,e.current=t}var k=u(null),I=u(null),_=u(null),F=u(null);function Be(e,t){switch(M(_,t),M(I,e),M(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Od(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Od(t),e=Ud(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(k),M(k,e)}function me(){A(k),A(I),A(_)}function Rn(e){e.memoizedState!==null&&M(F,e);var t=k.current,n=Ud(t,e.type);t!==n&&(M(I,e),M(k,n))}function Kn(e){I.current===e&&(A(k),A(I)),F.current===e&&(A(F),Ca._currentValue=z)}var qi,Ra;function Gt(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||"",Ra=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qi+e+Ra}var Rt=!1;function C(e,t){if(!e||Rt)return"";Rt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(v){var m=v}Reflect.construct(e,[],w)}else{try{w.call()}catch(v){m=v}e.call(w.prototype)}}else{try{throw Error()}catch(v){m=v}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var r=s.split(`
`),g=o.split(`
`);for(a=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(i===r.length||a===g.length)for(i=r.length-1,a=g.length-1;1<=i&&0<=a&&r[i]!==g[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==g[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==g[a]){var b=`
`+r[i].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=i&&0<=a);break}}}finally{Rt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Gt(n):""}function X(e,t){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==t&&t!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return C(e.type,!1);case 11:return C(e.type.render,!1);case 1:return C(e.type,!0);case 31:return Gt("Activity");default:return""}}function fe(e){try{var t="",n=null;do t+=X(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var bt=Object.prototype.hasOwnProperty,Zn=E.unstable_scheduleCallback,Wl=E.unstable_cancelCallback,Ch=E.unstable_shouldYield,xh=E.unstable_requestPaint,ot=E.unstable_now,Mh=E.unstable_getCurrentPriorityLevel,pr=E.unstable_ImmediatePriority,mr=E.unstable_UserBlockingPriority,Na=E.unstable_NormalPriority,Dh=E.unstable_LowPriority,vr=E.unstable_IdlePriority,Eh=E.log,kh=E.unstable_setDisableYieldValue,Ii=null,rt=null;function ln(e){if(typeof Eh=="function"&&kh(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Ii,e)}catch{}}var ct=Math.clz32?Math.clz32:zh,Rh=Math.log,Nh=Math.LN2;function zh(e){return e>>>=0,e===0?32:31-(Rh(e)/Nh|0)|0}var za=256,Ha=262144,Ba=4194304;function Nn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qa(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?a=Nn(i):(s&=o,s!==0?a=Nn(s):n||(n=o&~e,n!==0&&(a=Nn(n))))):(o=i&~l,o!==0?a=Nn(o):s!==0?a=Nn(s):n||(n=i&~e,n!==0&&(a=Nn(n)))),a===0?0:t!==0&&t!==a&&(t&l)===0&&(l=a&-a,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:a}function Oi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var e=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bh(e,t,n,i,a,l){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(n=s&~n;0<n;){var b=31-ct(n),w=1<<b;o[b]=0,r[b]=-1;var m=g[b];if(m!==null)for(g[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}n&=~w}i!==0&&br(e,i,0),l!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function br(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Sr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ct(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function wr(e,t){var n=t&-t;return n=(n&42)!==0?1:Zl(n),(n&(e.suspendedLanes|t))!==0?0:n}function Zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ar(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:oh(e.type))}function Tr(e,t){var n=x.p;try{return x.p=e,t()}finally{x.p=n}}var sn=Math.random().toString(36).slice(2),Le="__reactFiber$"+sn,Je="__reactProps$"+sn,Jn="__reactContainer$"+sn,Fl="__reactEvents$"+sn,qh="__reactListeners$"+sn,Ih="__reactHandles$"+sn,Cr="__reactResources$"+sn,Gi="__reactMarker$"+sn;function $l(e){delete e[Le],delete e[Je],delete e[Fl],delete e[qh],delete e[Ih]}function Fn(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jn]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yd(e);e!==null;){if(n=e[Le])return n;e=Yd(e)}return t}e=n,n=e.parentNode}return null}function $n(e){if(e=e[Le]||e[Jn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function ei(e){var t=e[Cr];return t||(t=e[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Gi]=!0}var xr=new Set,Mr={};function zn(e,t){ti(e,t),ti(e+"Capture",t)}function ti(e,t){for(Mr[e]=t,e=0;e<t.length;e++)xr.add(t[e])}var Oh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dr={},Er={};function Uh(e){return bt.call(Er,e)?!0:bt.call(Dr,e)?!1:Oh.test(e)?Er[e]=!0:(Dr[e]=!0,!1)}function Ia(e,t,n){if(Uh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Oa(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Lt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function es(e){if(!e._valueTracker){var t=kr(e)?"checked":"value";e._valueTracker=Gh(e,t,""+e[t])}}function Rr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=kr(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lh=/[\n"\\]/g;function wt(e){return e.replace(Lh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ts(e,t,n,i,a,l,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?ns(e,s,St(t)):n!=null?ns(e,s,St(n)):i!=null&&e.removeAttribute("value"),a==null&&l!=null&&(e.defaultChecked=!!l),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+St(o):e.removeAttribute("name")}function Nr(e,t,n,i,a,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){es(e);return}n=n!=null?""+St(n):"",t=t!=null?""+St(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),es(e)}function ns(e,t,n){t==="number"&&Ua(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ni(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function zr(e,t,n){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+St(n):""}function Hr(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(h(92));if(Xe(i)){if(1<i.length)throw Error(h(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=St(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),es(e)}function ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function qr(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Br(e,a,i)}else for(var l in t)t.hasOwnProperty(l)&&Br(e,l,t[l])}function is(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ga(e){return Ph.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var as=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,li=null;function Ir(e){var t=$n(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(ts(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Je]||null;if(!a)throw Error(h(90));ts(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Rr(i)}break e;case"textarea":zr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}}}var ss=!1;function Or(e,t,n){if(ss)return e(t,n);ss=!0;try{var i=e(t);return i}finally{if(ss=!1,(ai!==null||li!==null)&&(Ml(),ai&&(t=ai,e=li,li=ai=null,Ir(t),e)))for(t=0;t<e.length;t++)Ir(e[t])}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Je]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(_t)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){os=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{os=!1}var on=null,rs=null,La=null;function Ur(){if(La)return La;var e,t=rs,n=t.length,i,a="value"in on?on.value:on.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[l-i];i++);return La=a.slice(e,1<i?1-i:void 0)}function ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function Gr(){return!1}function Fe(e){function t(n,i,a,l,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_a:Gr,this.isPropagationStopped=Gr,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=Fe(Hn),Pi=B({},Hn,{view:0,detail:0}),Vh=Fe(Pi),cs,us,Vi,Va=B({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vi&&(Vi&&e.type==="mousemove"?(cs=e.screenX-Vi.screenX,us=e.screenY-Vi.screenY):us=cs=0,Vi=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:us}}),Lr=Fe(Va),Yh=B({},Va,{dataTransfer:0}),Qh=Fe(Yh),Xh=B({},Pi,{relatedTarget:0}),ds=Fe(Xh),Wh=B({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kh=Fe(Wh),Zh=B({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jh=Fe(Zh),Fh=B({},Hn,{data:0}),jr=Fe(Fh),$h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function hs(){return nf}var af=B({},Pi,{key:function(e){if(e.key){var t=$h[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=Fe(af),sf=B({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_r=Fe(sf),of=B({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),rf=Fe(of),cf=B({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=Fe(cf),df=B({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=Fe(df),ff=B({},Hn,{newState:0,oldState:0}),gf=Fe(ff),pf=[9,13,27,32],fs=_t&&"CompositionEvent"in window,Yi=null;_t&&"documentMode"in document&&(Yi=document.documentMode);var mf=_t&&"TextEvent"in window&&!Yi,Pr=_t&&(!fs||Yi&&8<Yi&&11>=Yi),Vr=" ",Yr=!1;function Qr(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var si=!1;function vf(e,t){switch(e){case"compositionend":return Xr(t);case"keypress":return t.which!==32?null:(Yr=!0,Vr);case"textInput":return e=t.data,e===Vr&&Yr?null:e;default:return null}}function yf(e,t){if(si)return e==="compositionend"||!fs&&Qr(e,t)?(e=Ur(),La=rs=on=null,si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pr&&t.locale!=="ko"?null:t.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bf[e.type]:t==="textarea"}function Kr(e,t,n,i){ai?li?li.push(i):li=[i]:ai=i,t=Hl(t,"onChange"),0<t.length&&(n=new Pa("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Qi=null,Xi=null;function Sf(e){Nd(e,0)}function Ya(e){var t=Li(e);if(Rr(t))return e}function Zr(e,t){if(e==="change")return t}var Jr=!1;if(_t){var gs;if(_t){var ps="oninput"in document;if(!ps){var Fr=document.createElement("div");Fr.setAttribute("oninput","return;"),ps=typeof Fr.oninput=="function"}gs=ps}else gs=!1;Jr=gs&&(!document.documentMode||9<document.documentMode)}function $r(){Qi&&(Qi.detachEvent("onpropertychange",ec),Xi=Qi=null)}function ec(e){if(e.propertyName==="value"&&Ya(Xi)){var t=[];Kr(t,Xi,e,ls(e)),Or(Sf,t)}}function wf(e,t,n){e==="focusin"?($r(),Qi=t,Xi=n,Qi.attachEvent("onpropertychange",ec)):e==="focusout"&&$r()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Xi)}function Tf(e,t){if(e==="click")return Ya(t)}function Cf(e,t){if(e==="input"||e==="change")return Ya(t)}function xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:xf;function Wi(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!bt.call(t,a)||!ut(e[a],t[a]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,t){var n=tc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tc(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ua(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ua(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mf=_t&&"documentMode"in document&&11>=document.documentMode,oi=null,vs=null,Ki=null,ys=!1;function lc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||oi==null||oi!==Ua(i)||(i=oi,"selectionStart"in i&&ms(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Wi(Ki,i)||(Ki=i,i=Hl(vs,"onSelect"),0<i.length&&(t=new Pa("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=oi)))}function Bn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ri={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionrun:Bn("Transition","TransitionRun"),transitionstart:Bn("Transition","TransitionStart"),transitioncancel:Bn("Transition","TransitionCancel"),transitionend:Bn("Transition","TransitionEnd")},bs={},sc={};_t&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function qn(e){if(bs[e])return bs[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sc)return bs[e]=t[n];return e}var oc=qn("animationend"),rc=qn("animationiteration"),cc=qn("animationstart"),Df=qn("transitionrun"),Ef=qn("transitionstart"),kf=qn("transitioncancel"),uc=qn("transitionend"),dc=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function Nt(e,t){dc.set(e,t),zn(t,[e])}var Qa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],ci=0,ws=0;function Xa(){for(var e=ci,t=ws=ci=0;t<e;){var n=At[t];At[t++]=null;var i=At[t];At[t++]=null;var a=At[t];At[t++]=null;var l=At[t];if(At[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}l!==0&&hc(n,a,l)}}function Wa(e,t,n,i){At[ci++]=e,At[ci++]=t,At[ci++]=n,At[ci++]=i,ws|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function As(e,t,n,i){return Wa(e,t,n,i),Ka(e)}function In(e,t){return Wa(e,null,null,t),Ka(e)}function hc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(a=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,a&&t!==null&&(a=31-ct(n),e=l.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),l):null}function Ka(e){if(50<va)throw va=0,zo=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function Rf(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,i){return new Rf(e,t,n,i)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Za(e,t,n,i,a,l){var s=0;if(i=e,typeof e=="function")Ts(e)&&(s=1);else if(typeof e=="string")s=qg(e,n,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case lt:return e=dt(31,n,t,a),e.elementType=lt,e.lanes=l,e;case Se:return On(n.children,a,l,t);case Oe:s=8,a|=24;break;case Qe:return e=dt(12,n,t,a|2),e.elementType=Qe,e.lanes=l,e;case at:return e=dt(13,n,t,a),e.elementType=at,e.lanes=l,e;case Re:return e=dt(19,n,t,a),e.elementType=Re,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:s=10;break e;case Ue:s=9;break e;case Ke:s=11;break e;case P:s=14;break e;case Ge:s=16,i=null;break e}s=29,n=Error(h(130,e===null?"null":typeof e,"")),i=null}return t=dt(s,n,t,a),t.elementType=e,t.type=i,t.lanes=l,t}function On(e,t,n,i){return e=dt(7,e,i,t),e.lanes=n,e}function Cs(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function gc(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function xs(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pc=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=pc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:fe(t)},pc.set(e,t),t)}return{value:e,source:t,stack:fe(t)}}var di=[],hi=0,Ja=null,Zi=0,Ct=[],xt=0,rn=null,qt=1,It="";function Vt(e,t){di[hi++]=Zi,di[hi++]=Ja,Ja=e,Zi=t}function mc(e,t,n){Ct[xt++]=qt,Ct[xt++]=It,Ct[xt++]=rn,rn=e;var i=qt;e=It;var a=32-ct(i)-1;i&=~(1<<a),n+=1;var l=32-ct(t)+a;if(30<l){var s=a-a%5;l=(i&(1<<s)-1).toString(32),i>>=s,a-=s,qt=1<<32-ct(t)+a|n<<a|i,It=l+e}else qt=1<<l|n<<a|i,It=e}function Ms(e){e.return!==null&&(Vt(e,1),mc(e,1,0))}function Ds(e){for(;e===Ja;)Ja=di[--hi],di[hi]=null,Zi=di[--hi],di[hi]=null;for(;e===rn;)rn=Ct[--xt],Ct[xt]=null,It=Ct[--xt],Ct[xt]=null,qt=Ct[--xt],Ct[xt]=null}function vc(e,t){Ct[xt++]=qt,Ct[xt++]=It,Ct[xt++]=rn,qt=t.id,It=t.overflow,rn=e}var je=null,ge=null,Z=!1,cn=null,Mt=!1,Es=Error(h(519));function un(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ji(Tt(t,e)),Es}function yc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Le]=e,t[Je]=i,n){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(n=0;n<ba.length;n++)Q(ba[n],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Nr(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),Hr(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||qd(t.textContent,n)?(i.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),i.onScroll!=null&&Q("scroll",t),i.onScrollEnd!=null&&Q("scrollend",t),i.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||un(e,!0)}function bc(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:je=je.return}}function fi(e){if(e!==je)return!1;if(!Z)return bc(e),Z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xo(e.type,e.memoizedProps)),n=!n),n&&ge&&un(e),bc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ge=Vd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ge=Vd(e)}else t===27?(t=ge,Cn(e.type)?(e=Fo,Fo=null,ge=e):ge=t):ge=je?Et(e.stateNode.nextSibling):null;return!0}function Un(){ge=je=null,Z=!1}function ks(){var e=cn;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),cn=null),e}function Ji(e){cn===null?cn=[e]:cn.push(e)}var Rs=u(null),Gn=null,Yt=null;function dn(e,t,n){M(Rs,t._currentValue),t._currentValue=n}function Qt(e){e._currentValue=Rs.current,A(Rs)}function Ns(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function zs(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){var s=a.child;l=l.firstContext;e:for(;l!==null;){var o=l;l=a;for(var r=0;r<t.length;r++)if(o.context===t[r]){l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ns(l.return,n,e),i||(s=null);break e}l=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(h(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ns(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function gi(e,t,n,i){e=null;for(var a=t,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var o=a.type;ut(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===F.current){if(s=a.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ca):e=[Ca])}a=a.return}e!==null&&zs(t,e,n,i),t.flags|=262144}function Fa(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ln(e){Gn=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return Sc(Gn,e)}function $a(e,t){return Gn===null&&Ln(e),Sc(e,t)}function Sc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yt===null){if(e===null)throw Error(h(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return n}var Nf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},zf=E.unstable_scheduleCallback,Hf=E.unstable_NormalPriority,xe={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hs(){return{controller:new Nf,data:new Map,refCount:0}}function Fi(e){e.refCount--,e.refCount===0&&zf(Hf,function(){e.controller.abort()})}var $i=null,Bs=0,pi=0,mi=null;function Bf(e,t){if($i===null){var n=$i=[];Bs=0,pi=Uo(),mi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Bs++,t.then(wc,wc),t}function wc(){if(--Bs===0&&$i!==null){mi!==null&&(mi.status="fulfilled");var e=$i;$i=null,pi=0,mi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qf(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Ac=y.S;y.S=function(e,t){ld=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bf(e,t),Ac!==null&&Ac(e,t)};var jn=u(null);function qs(){var e=jn.current;return e!==null?e:de.pooledCache}function el(e,t){t===null?M(jn,jn.current):M(jn,t.pool)}function Tc(){var e=qs();return e===null?null:{parent:xe._currentValue,pool:e}}var vi=Error(h(460)),Is=Error(h(474)),tl=Error(h(542)),nl={then:function(){}};function Cc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jt,jt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e}throw Pn=t,vi}}function _n(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Pn=n,vi):n}}var Pn=null;function Mc(){if(Pn===null)throw Error(h(459));var e=Pn;return Pn=null,e}function Dc(e){if(e===vi||e===tl)throw Error(h(483))}var yi=null,ea=0;function il(e){var t=ea;return ea+=1,yi===null&&(yi=[]),xc(yi,e,t)}function ta(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function al(e,t){throw t.$$typeof===ne?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ec(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function i(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function a(d,c){return d=Pt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=67108866,c):f):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,c,f,S){return c===null||c.tag!==6?(c=Cs(f,d.mode,S),c.return=d,c):(c=a(c,f),c.return=d,c)}function r(d,c,f,S){var H=f.type;return H===Se?b(d,c,f.props.children,S,f.key):c!==null&&(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ge&&_n(H)===c.type)?(c=a(c,f.props),ta(c,f),c.return=d,c):(c=Za(f.type,f.key,f.props,null,d.mode,S),ta(c,f),c.return=d,c)}function g(d,c,f,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=xs(f,d.mode,S),c.return=d,c):(c=a(c,f.children||[]),c.return=d,c)}function b(d,c,f,S,H){return c===null||c.tag!==7?(c=On(f,d.mode,S,H),c.return=d,c):(c=a(c,f),c.return=d,c)}function w(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Cs(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ke:return f=Za(c.type,c.key,c.props,null,d.mode,f),ta(f,c),f.return=d,f;case Ye:return c=xs(c,d.mode,f),c.return=d,c;case Ge:return c=_n(c),w(d,c,f)}if(Xe(c)||Ne(c))return c=On(c,d.mode,f,null),c.return=d,c;if(typeof c.then=="function")return w(d,il(c),f);if(c.$$typeof===Ce)return w(d,$a(d,c),f);al(d,c)}return null}function m(d,c,f,S){var H=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return H!==null?null:o(d,c,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ke:return f.key===H?r(d,c,f,S):null;case Ye:return f.key===H?g(d,c,f,S):null;case Ge:return f=_n(f),m(d,c,f,S)}if(Xe(f)||Ne(f))return H!==null?null:b(d,c,f,S,null);if(typeof f.then=="function")return m(d,c,il(f),S);if(f.$$typeof===Ce)return m(d,c,$a(d,f),S);al(d,f)}return null}function v(d,c,f,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(f)||null,o(c,d,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ke:return d=d.get(S.key===null?f:S.key)||null,r(c,d,S,H);case Ye:return d=d.get(S.key===null?f:S.key)||null,g(c,d,S,H);case Ge:return S=_n(S),v(d,c,f,S,H)}if(Xe(S)||Ne(S))return d=d.get(f)||null,b(c,d,S,H,null);if(typeof S.then=="function")return v(d,c,f,il(S),H);if(S.$$typeof===Ce)return v(d,c,f,$a(c,S),H);al(c,S)}return null}function D(d,c,f,S){for(var H=null,ee=null,N=c,j=c=0,K=null;N!==null&&j<f.length;j++){N.index>j?(K=N,N=null):K=N.sibling;var te=m(d,N,f[j],S);if(te===null){N===null&&(N=K);break}e&&N&&te.alternate===null&&t(d,N),c=l(te,c,j),ee===null?H=te:ee.sibling=te,ee=te,N=K}if(j===f.length)return n(d,N),Z&&Vt(d,j),H;if(N===null){for(;j<f.length;j++)N=w(d,f[j],S),N!==null&&(c=l(N,c,j),ee===null?H=N:ee.sibling=N,ee=N);return Z&&Vt(d,j),H}for(N=i(N);j<f.length;j++)K=v(N,d,j,f[j],S),K!==null&&(e&&K.alternate!==null&&N.delete(K.key===null?j:K.key),c=l(K,c,j),ee===null?H=K:ee.sibling=K,ee=K);return e&&N.forEach(function(kn){return t(d,kn)}),Z&&Vt(d,j),H}function q(d,c,f,S){if(f==null)throw Error(h(151));for(var H=null,ee=null,N=c,j=c=0,K=null,te=f.next();N!==null&&!te.done;j++,te=f.next()){N.index>j?(K=N,N=null):K=N.sibling;var kn=m(d,N,te.value,S);if(kn===null){N===null&&(N=K);break}e&&N&&kn.alternate===null&&t(d,N),c=l(kn,c,j),ee===null?H=kn:ee.sibling=kn,ee=kn,N=K}if(te.done)return n(d,N),Z&&Vt(d,j),H;if(N===null){for(;!te.done;j++,te=f.next())te=w(d,te.value,S),te!==null&&(c=l(te,c,j),ee===null?H=te:ee.sibling=te,ee=te);return Z&&Vt(d,j),H}for(N=i(N);!te.done;j++,te=f.next())te=v(N,d,j,te.value,S),te!==null&&(e&&te.alternate!==null&&N.delete(te.key===null?j:te.key),c=l(te,c,j),ee===null?H=te:ee.sibling=te,ee=te);return e&&N.forEach(function(Qg){return t(d,Qg)}),Z&&Vt(d,j),H}function ue(d,c,f,S){if(typeof f=="object"&&f!==null&&f.type===Se&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ke:e:{for(var H=f.key;c!==null;){if(c.key===H){if(H=f.type,H===Se){if(c.tag===7){n(d,c.sibling),S=a(c,f.props.children),S.return=d,d=S;break e}}else if(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ge&&_n(H)===c.type){n(d,c.sibling),S=a(c,f.props),ta(S,f),S.return=d,d=S;break e}n(d,c);break}else t(d,c);c=c.sibling}f.type===Se?(S=On(f.props.children,d.mode,S,f.key),S.return=d,d=S):(S=Za(f.type,f.key,f.props,null,d.mode,S),ta(S,f),S.return=d,d=S)}return s(d);case Ye:e:{for(H=f.key;c!==null;){if(c.key===H)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),S=a(c,f.children||[]),S.return=d,d=S;break e}else{n(d,c);break}else t(d,c);c=c.sibling}S=xs(f,d.mode,S),S.return=d,d=S}return s(d);case Ge:return f=_n(f),ue(d,c,f,S)}if(Xe(f))return D(d,c,f,S);if(Ne(f)){if(H=Ne(f),typeof H!="function")throw Error(h(150));return f=H.call(f),q(d,c,f,S)}if(typeof f.then=="function")return ue(d,c,il(f),S);if(f.$$typeof===Ce)return ue(d,c,$a(d,f),S);al(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),S=a(c,f),S.return=d,d=S):(n(d,c),S=Cs(f,d.mode,S),S.return=d,d=S),s(d)):n(d,c)}return function(d,c,f,S){try{ea=0;var H=ue(d,c,f,S);return yi=null,H}catch(N){if(N===vi||N===tl)throw N;var ee=dt(29,N,null,d.mode);return ee.lanes=S,ee.return=d,ee}finally{}}}var Vn=Ec(!0),kc=Ec(!1),hn=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ie&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Ka(e),hc(e,null,n),t}return Wa(e,i,t,n),Ka(e)}function na(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Sr(e,n)}}function Gs(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ls=!1;function ia(){if(Ls){var e=mi;if(e!==null)throw e}}function aa(e,t,n,i){Ls=!1;var a=e.updateQueue;hn=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var r=o,g=r.next;r.next=null,s===null?l=g:s.next=g,s=r;var b=e.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==s&&(o===null?b.firstBaseUpdate=g:o.next=g,b.lastBaseUpdate=r))}if(l!==null){var w=a.baseState;s=0,b=g=r=null,o=l;do{var m=o.lane&-536870913,v=m!==o.lane;if(v?(W&m)===m:(i&m)===m){m!==0&&m===pi&&(Ls=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var D=e,q=o;m=t;var ue=n;switch(q.tag){case 1:if(D=q.payload,typeof D=="function"){w=D.call(ue,w,m);break e}w=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=q.payload,m=typeof D=="function"?D.call(ue,w,m):D,m==null)break e;w=B({},w,m);break e;case 2:hn=!0}}m=o.callback,m!==null&&(e.flags|=64,v&&(e.flags|=8192),v=a.callbacks,v===null?a.callbacks=[m]:v.push(m))}else v={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(g=b=v,r=w):b=b.next=v,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);b===null&&(r=w),a.baseState=r,a.firstBaseUpdate=g,a.lastBaseUpdate=b,l===null&&(a.shared.lanes=0),bn|=s,e.lanes=s,e.memoizedState=w}}function Rc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Nc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rc(n[e],t)}var bi=u(null),ll=u(0);function zc(e,t){e=tn,M(ll,e),M(bi,t),tn=e|t.baseLanes}function js(){M(ll,tn),M(bi,bi.current)}function _s(){tn=ll.current,A(bi),A(ll)}var ht=u(null),Dt=null;function pn(e){var t=e.alternate;M(we,we.current&1),M(ht,e),Dt===null&&(t===null||bi.current!==null||t.memoizedState!==null)&&(Dt=e)}function Ps(e){M(we,we.current),M(ht,e),Dt===null&&(Dt=e)}function Hc(e){e.tag===22?(M(we,we.current),M(ht,e),Dt===null&&(Dt=e)):mn()}function mn(){M(we,we.current),M(ht,ht.current)}function ft(e){A(ht),Dt===e&&(Dt=null),A(we)}var we=u(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zo(n)||Jo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,L=null,re=null,Me=null,ol=!1,Si=!1,Yn=!1,rl=0,la=0,wi=null,If=0;function ye(){throw Error(h(321))}function Vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Ys(e,t,n,i,a,l){return Xt=l,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?mu:so,Yn=!1,l=n(i,a),Yn=!1,Si&&(l=qc(t,n,i,a)),Bc(e),l}function Bc(e){y.H=ra;var t=re!==null&&re.next!==null;if(Xt=0,Me=re=L=null,ol=!1,la=0,wi=null,t)throw Error(h(300));e===null||De||(e=e.dependencies,e!==null&&Fa(e)&&(De=!0))}function qc(e,t,n,i){L=e;var a=0;do{if(Si&&(wi=null),la=0,Si=!1,25<=a)throw Error(h(301));if(a+=1,Me=re=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=vu,l=t(n,i)}while(Si);return l}function Of(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?sa(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(L.flags|=1024),t}function Qs(){var e=rl!==0;return rl=0,e}function Xs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ws(e){if(ol){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ol=!1}Xt=0,Me=re=L=null,Si=!1,la=rl=0,wi=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?L.memoizedState=Me=e:Me=Me.next=e,Me}function Ae(){if(re===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Me===null?L.memoizedState:Me.next;if(t!==null)Me=t,re=e;else{if(e===null)throw L.alternate===null?Error(h(467)):Error(h(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Me===null?L.memoizedState=Me=e:Me=Me.next=e}return Me}function cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sa(e){var t=la;return la+=1,wi===null&&(wi=[]),e=xc(wi,e,t),t=L,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?mu:so),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sa(e);if(e.$$typeof===Ce)return _e(e)}throw Error(h(438,String(e)))}function Ks(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=L.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=cl(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Bt;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Ae();return Zs(t,re,e)}function Zs(e,t,n){var i=e.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=n;var a=e.baseQueue,l=i.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}t.baseQueue=a=l,i.pending=null}if(l=e.baseState,a===null)e.memoizedState=l;else{t=a.next;var o=s=null,r=null,g=t,b=!1;do{var w=g.lane&-536870913;if(w!==g.lane?(W&w)===w:(Xt&w)===w){var m=g.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),w===pi&&(b=!0);else if((Xt&m)===m){g=g.next,m===pi&&(b=!0);continue}else w={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=w,s=l):r=r.next=w,L.lanes|=m,bn|=m;w=g.action,Yn&&n(l,w),l=g.hasEagerState?g.eagerState:n(l,w)}else m={lane:w,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=m,s=l):r=r.next=m,L.lanes|=w,bn|=w;g=g.next}while(g!==null&&g!==t);if(r===null?s=l:r.next=o,!ut(l,e.memoizedState)&&(De=!0,b&&(n=mi,n!==null)))throw n;e.memoizedState=l,e.baseState=s,e.baseQueue=r,i.lastRenderedState=l}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Js(e){var t=Ae(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);ut(l,t.memoizedState)||(De=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function Ic(e,t,n){var i=L,a=Ae(),l=Z;if(l){if(n===void 0)throw Error(h(407));n=n()}else n=t();var s=!ut((re||a).memoizedState,n);if(s&&(a.memoizedState=n,De=!0),a=a.queue,eo(Gc.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(i.flags|=2048,Ai(9,{destroy:void 0},Uc.bind(null,i,a,n,t),null),de===null)throw Error(h(349));l||(Xt&127)!==0||Oc(i,t,n)}return n}function Oc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=cl(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uc(e,t,n,i){t.value=n,t.getSnapshot=i,Lc(t)&&jc(e)}function Gc(e,t,n){return n(function(){Lc(t)&&jc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function jc(e){var t=In(e,2);t!==null&&it(t,e,2)}function Fs(e){var t=Ze();if(typeof e=="function"){var n=e;if(e=n(),Yn){ln(!0);try{n()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function _c(e,t,n,i){return e.baseState=n,Zs(e,re,typeof i=="function"?i:Wt)}function Uf(e,t,n,i,a){if(gl(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};y.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,Pc(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Pc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var l=y.T,s={};y.T=s;try{var o=n(a,i),r=y.S;r!==null&&r(s,o),Vc(e,t,o)}catch(g){$s(e,t,g)}finally{l!==null&&s.types!==null&&(l.types=s.types),y.T=l}}else try{l=n(a,i),Vc(e,t,l)}catch(g){$s(e,t,g)}}function Vc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yc(e,t,i)},function(i){return $s(e,t,i)}):Yc(e,t,n)}function Yc(e,t,n){t.status="fulfilled",t.value=n,Qc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Pc(e,n)))}function $s(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Qc(t),t=t.next;while(t!==i)}e.action=null}function Qc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xc(e,t){return t}function Wc(e,t){if(Z){var n=de.formState;if(n!==null){e:{var i=L;if(Z){if(ge){t:{for(var a=ge,l=Mt;a.nodeType!==8;){if(!l){a=null;break t}if(a=Et(a.nextSibling),a===null){a=null;break t}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){ge=Et(a.nextSibling),i=a.data==="F!";break e}}un(i)}i=!1}i&&(t=n[0])}}return n=Ze(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:t},n.queue=i,n=fu.bind(null,L,i),i.dispatch=n,i=Fs(!1),l=lo.bind(null,L,!1,i.queue),i=Ze(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Uf.bind(null,L,a,l,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Kc(e){var t=Ae();return Zc(t,re,e)}function Zc(e,t,n){if(t=Zs(e,t,Xc)[0],e=dl(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=sa(t)}catch(s){throw s===vi?tl:s}else i=t;t=Ae();var a=t.queue,l=a.dispatch;return n!==t.memoizedState&&(L.flags|=2048,Ai(9,{destroy:void 0},Gf.bind(null,a,n),null)),[i,l,e]}function Gf(e,t){e.action=t}function Jc(e){var t=Ae(),n=re;if(n!==null)return Zc(t,n,e);Ae(),t=t.memoizedState,n=Ae();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ai(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=L.updateQueue,t===null&&(t=cl(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fc(){return Ae().memoizedState}function hl(e,t,n,i){var a=Ze();L.flags|=e,a.memoizedState=Ai(1|t,{destroy:void 0},n,i===void 0?null:i)}function fl(e,t,n,i){var a=Ae();i=i===void 0?null:i;var l=a.memoizedState.inst;re!==null&&i!==null&&Vs(i,re.memoizedState.deps)?a.memoizedState=Ai(t,l,n,i):(L.flags|=e,a.memoizedState=Ai(1|t,l,n,i))}function $c(e,t){hl(8390656,8,e,t)}function eo(e,t){fl(2048,8,e,t)}function Lf(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=cl(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function eu(e){var t=Ae().memoizedState;return Lf({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function tu(e,t){return fl(4,2,e,t)}function nu(e,t){return fl(4,4,e,t)}function iu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function au(e,t,n){n=n!=null?n.concat([e]):null,fl(4,4,iu.bind(null,t,e),n)}function to(){}function lu(e,t){var n=Ae();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Vs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function su(e,t){var n=Ae();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Vs(t,i[1]))return i[0];if(i=e(),Yn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[i,t],i}function no(e,t,n){return n===void 0||(Xt&1073741824)!==0&&(W&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=od(),L.lanes|=e,bn|=e,n)}function ou(e,t,n,i){return ut(n,t)?n:bi.current!==null?(e=no(e,n,i),ut(e,t)||(De=!0),e):(Xt&42)===0||(Xt&1073741824)!==0&&(W&261930)===0?(De=!0,e.memoizedState=n):(e=od(),L.lanes|=e,bn|=e,t)}function ru(e,t,n,i,a){var l=x.p;x.p=l!==0&&8>l?l:8;var s=y.T,o={};y.T=o,lo(e,!1,t,n);try{var r=a(),g=y.S;if(g!==null&&g(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=qf(r,i);oa(e,t,b,mt(e))}else oa(e,t,i,mt(e))}catch(w){oa(e,t,{then:function(){},status:"rejected",reason:w},mt())}finally{x.p=l,s!==null&&o.types!==null&&(s.types=o.types),y.T=s}}function jf(){}function io(e,t,n,i){if(e.tag!==5)throw Error(h(476));var a=cu(e).queue;ru(e,a,t,z,n===null?jf:function(){return uu(e),n(i)})}function cu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uu(e){var t=cu(e);t.next===null&&(t=e.alternate.memoizedState),oa(e,t.next.queue,{},mt())}function ao(){return _e(Ca)}function du(){return Ae().memoizedState}function hu(){return Ae().memoizedState}function _f(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mt();e=fn(n);var i=gn(t,e,n);i!==null&&(it(i,t,n),na(i,t,n)),t={cache:Hs()},e.payload=t;return}t=t.return}}function Pf(e,t,n){var i=mt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gl(e)?gu(t,n):(n=As(e,t,n,i),n!==null&&(it(n,e,i),pu(n,t,i)))}function fu(e,t,n){var i=mt();oa(e,t,n,i)}function oa(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gl(e))gu(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,ut(o,s))return Wa(e,t,a,0),de===null&&Xa(),!1}catch{}finally{}if(n=As(e,t,a,i),n!==null)return it(n,e,i),pu(n,t,i),!0}return!1}function lo(e,t,n,i){if(i={lane:2,revertLane:Uo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(t)throw Error(h(479))}else t=As(e,n,i,2),t!==null&&it(t,e,2)}function gl(e){var t=e.alternate;return e===L||t!==null&&t===L}function gu(e,t){Si=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pu(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Sr(e,n)}}var ra={readContext:_e,use:ul,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ra.useEffectEvent=ye;var mu={readContext:_e,use:ul,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:$c,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hl(4194308,4,iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hl(4194308,4,e,t)},useInsertionEffect:function(e,t){hl(4,2,e,t)},useMemo:function(e,t){var n=Ze();t=t===void 0?null:t;var i=e();if(Yn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ze();if(n!==void 0){var a=n(t);if(Yn){ln(!0);try{n(t)}finally{ln(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Pf.bind(null,L,e),[i.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Fs(e);var t=e.queue,n=fu.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:to,useDeferredValue:function(e,t){var n=Ze();return no(n,e,t)},useTransition:function(){var e=Fs(!1);return e=ru.bind(null,L,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=L,a=Ze();if(Z){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),de===null)throw Error(h(349));(W&127)!==0||Oc(i,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,$c(Gc.bind(null,i,l,e),[e]),i.flags|=2048,Ai(9,{destroy:void 0},Uc.bind(null,i,l,n,t),null),n},useId:function(){var e=Ze(),t=de.identifierPrefix;if(Z){var n=It,i=qt;n=(i&~(1<<32-ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=rl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=If++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:Wc,useActionState:Wc,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lo.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ks,useCacheRefresh:function(){return Ze().memoizedState=_f.bind(null,L)},useEffectEvent:function(e){var t=Ze(),n={impl:e};return t.memoizedState=n,function(){if((ie&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},so={readContext:_e,use:ul,useCallback:lu,useContext:_e,useEffect:eo,useImperativeHandle:au,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:su,useReducer:dl,useRef:Fc,useState:function(){return dl(Wt)},useDebugValue:to,useDeferredValue:function(e,t){var n=Ae();return ou(n,re.memoizedState,e,t)},useTransition:function(){var e=dl(Wt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:sa(e),t]},useSyncExternalStore:Ic,useId:du,useHostTransitionStatus:ao,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var n=Ae();return _c(n,re,e,t)},useMemoCache:Ks,useCacheRefresh:hu};so.useEffectEvent=eu;var vu={readContext:_e,use:ul,useCallback:lu,useContext:_e,useEffect:eo,useImperativeHandle:au,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:su,useReducer:Js,useRef:Fc,useState:function(){return Js(Wt)},useDebugValue:to,useDeferredValue:function(e,t){var n=Ae();return re===null?no(n,e,t):ou(n,re.memoizedState,e,t)},useTransition:function(){var e=Js(Wt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:sa(e),t]},useSyncExternalStore:Ic,useId:du,useHostTransitionStatus:ao,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,t){var n=Ae();return re!==null?_c(n,re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ks,useCacheRefresh:hu};vu.useEffectEvent=eu;function oo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=mt(),a=fn(i);a.payload=t,n!=null&&(a.callback=n),t=gn(e,a,i),t!==null&&(it(t,e,i),na(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=mt(),a=fn(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=gn(e,a,i),t!==null&&(it(t,e,i),na(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),i=fn(n);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,n),t!==null&&(it(t,e,n),na(t,e,n))}};function yu(e,t,n,i,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,s):t.prototype&&t.prototype.isPureReactComponent?!Wi(n,i)||!Wi(a,l):!0}function bu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Qn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=B({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Su(e){Qa(e)}function wu(e){console.error(e)}function Au(e){Qa(e)}function pl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Tu(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function co(e,t,n){return n=fn(n),n.tag=3,n.payload={element:null},n.callback=function(){pl(e,t)},n}function Cu(e){return e=fn(e),e.tag=3,e}function xu(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;e.payload=function(){return a(l)},e.callback=function(){Tu(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Tu(t,n,i),typeof a!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Vf(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&gi(t,n,a,!0),n=ht.current,n!==null){switch(n.tag){case 31:case 13:return Dt===null?Dl():n.alternate===null&&be===0&&(be=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===nl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),qo(e,i,a)),!1;case 22:return n.flags|=65536,i===nl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),qo(e,i,a)),!1}throw Error(h(435,n.tag))}return qo(e,i,a),Dl(),!1}if(Z)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Es&&(e=Error(h(422),{cause:i}),Ji(Tt(e,n)))):(i!==Es&&(t=Error(h(423),{cause:i}),Ji(Tt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Tt(i,n),a=co(e.stateNode,i,a),Gs(e,a),be!==4&&(be=2)),!1;var l=Error(h(520),{cause:i});if(l=Tt(l,n),ma===null?ma=[l]:ma.push(l),be!==4&&(be=2),t===null)return!0;i=Tt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=co(n.stateNode,i,e),Gs(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Sn===null||!Sn.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Cu(a),xu(a,e,n,i),Gs(n,a),!1}n=n.return}while(n!==null);return!1}var uo=Error(h(461)),De=!1;function Pe(e,t,n,i){t.child=e===null?kc(t,null,n,i):Vn(t,e.child,n,i)}function Mu(e,t,n,i,a){n=n.render;var l=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Ln(t),i=Ys(e,t,n,s,l,a),o=Qs(),e!==null&&!De?(Xs(e,t,a),Kt(e,t,a)):(Z&&o&&Ms(t),t.flags|=1,Pe(e,t,i,a),t.child)}function Du(e,t,n,i,a){if(e===null){var l=n.type;return typeof l=="function"&&!Ts(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Eu(e,t,l,i,a)):(e=Za(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!bo(e,a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(s,i)&&e.ref===t.ref)return Kt(e,t,a)}return t.flags|=1,e=Pt(l,i),e.ref=t.ref,e.return=t,t.child=e}function Eu(e,t,n,i,a){if(e!==null){var l=e.memoizedProps;if(Wi(l,i)&&e.ref===t.ref)if(De=!1,t.pendingProps=i=l,bo(e,a))(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Kt(e,t,a)}return ho(e,t,n,i,a)}function ku(e,t,n,i){var a=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,t.child=null;return Ru(e,t,l,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(t,l!==null?l.cachePool:null),l!==null?zc(t,l):js(),Hc(t);else return i=t.lanes=536870912,Ru(e,t,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(el(t,l.cachePool),zc(t,l),mn(),t.memoizedState=null):(e!==null&&el(t,null),js(),mn());return Pe(e,t,a,n),t.child}function ca(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ru(e,t,n,i,a){var l=qs();return l=l===null?null:{parent:xe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&el(t,null),js(),Hc(t),e!==null&&gi(e,t,i,!0),t.childLanes=a,null}function ml(e,t){return t=yl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nu(e,t,n){return Vn(t,e.child,null,n),e=ml(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function Yf(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(i.mode==="hidden")return e=ml(t,i),t.lanes=536870912,ca(null,e);if(Ps(t),(e=ge)?(e=Pd(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rn!==null?{id:qt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=gc(e),n.return=t,t.child=n,je=t,ge=null)):e=null,e===null)throw un(t);return t.lanes=536870912,null}return ml(t,i)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(Ps(t),a)if(t.flags&256)t.flags&=-257,t=Nu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(De||gi(e,t,n,!1),a=(n&e.childLanes)!==0,De||a){if(i=de,i!==null&&(s=wr(i,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,In(e,s),it(i,e,s),uo;Dl(),t=Nu(e,t,n)}else e=l.treeContext,ge=Et(s.nextSibling),je=t,Z=!0,cn=null,Mt=!1,e!==null&&vc(t,e),t=ml(t,i),t.flags|=4096;return t}return e=Pt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ho(e,t,n,i,a){return Ln(t),n=Ys(e,t,n,i,void 0,a),i=Qs(),e!==null&&!De?(Xs(e,t,a),Kt(e,t,a)):(Z&&i&&Ms(t),t.flags|=1,Pe(e,t,n,a),t.child)}function zu(e,t,n,i,a,l){return Ln(t),t.updateQueue=null,n=qc(t,i,n,a),Bc(e),i=Qs(),e!==null&&!De?(Xs(e,t,l),Kt(e,t,l)):(Z&&i&&Ms(t),t.flags|=1,Pe(e,t,n,l),t.child)}function Hu(e,t,n,i,a){if(Ln(t),t.stateNode===null){var l=ui,s=n.contextType;typeof s=="object"&&s!==null&&(l=_e(s)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ro,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},Os(t),s=n.contextType,l.context=typeof s=="object"&&s!==null?_e(s):ui,l.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(oo(t,n,s,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ro.enqueueReplaceState(l,l.state,null),aa(t,i,l,a),ia(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var o=t.memoizedProps,r=Qn(n,o);l.props=r;var g=l.context,b=n.contextType;s=ui,typeof b=="object"&&b!==null&&(s=_e(b));var w=n.getDerivedStateFromProps;b=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||g!==s)&&bu(t,l,i,s),hn=!1;var m=t.memoizedState;l.state=m,aa(t,i,l,a),ia(),g=t.memoizedState,o||m!==g||hn?(typeof w=="function"&&(oo(t,n,w,i),g=t.memoizedState),(r=hn||yu(t,n,r,i,m,g,s))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=g),l.props=i,l.state=g,l.context=s,i=r):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Us(e,t),s=t.memoizedProps,b=Qn(n,s),l.props=b,w=t.pendingProps,m=l.context,g=n.contextType,r=ui,typeof g=="object"&&g!==null&&(r=_e(g)),o=n.getDerivedStateFromProps,(g=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==w||m!==r)&&bu(t,l,i,r),hn=!1,m=t.memoizedState,l.state=m,aa(t,i,l,a),ia();var v=t.memoizedState;s!==w||m!==v||hn||e!==null&&e.dependencies!==null&&Fa(e.dependencies)?(typeof o=="function"&&(oo(t,n,o,i),v=t.memoizedState),(b=hn||yu(t,n,b,i,m,v,r)||e!==null&&e.dependencies!==null&&Fa(e.dependencies))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,v,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,v,r)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),l.props=i,l.state=v,l.context=r,i=b):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,vl(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=Vn(t,e.child,null,a),t.child=Vn(t,null,n,a)):Pe(e,t,n,a),t.memoizedState=l.state,e=t.child):e=Kt(e,t,a),e}function Bu(e,t,n,i){return Un(),t.flags|=256,Pe(e,t,n,i),t.child}var fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function go(e){return{baseLanes:e,cachePool:Tc()}}function po(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pt),e}function qu(e,t,n){var i=t.pendingProps,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(a?pn(t):mn(),(e=ge)?(e=Pd(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rn!==null?{id:qt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=gc(e),n.return=t,t.child=n,je=t,ge=null)):e=null,e===null)throw un(t);return Jo(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(mn(),a=t.mode,o=yl({mode:"hidden",children:o},a),i=On(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=go(n),i.childLanes=po(e,s,n),t.memoizedState=fo,ca(null,i)):(pn(t),mo(t,o))}var r=e.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(l)t.flags&256?(pn(t),t.flags&=-257,t=vo(e,t,n)):t.memoizedState!==null?(mn(),t.child=e.child,t.flags|=128,t=null):(mn(),o=i.fallback,a=t.mode,i=yl({mode:"visible",children:i.children},a),o=On(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Vn(t,e.child,null,n),i=t.child,i.memoizedState=go(n),i.childLanes=po(e,s,n),t.memoizedState=fo,t=ca(null,i));else if(pn(t),Jo(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var g=s.dgst;s=g,i=Error(h(419)),i.stack="",i.digest=s,Ji({value:i,source:null,stack:null}),t=vo(e,t,n)}else if(De||gi(e,t,n,!1),s=(n&e.childLanes)!==0,De||s){if(s=de,s!==null&&(i=wr(s,n),i!==0&&i!==r.retryLane))throw r.retryLane=i,In(e,i),it(s,e,i),uo;Zo(o)||Dl(),t=vo(e,t,n)}else Zo(o)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ge=Et(o.nextSibling),je=t,Z=!0,cn=null,Mt=!1,e!==null&&vc(t,e),t=mo(t,i.children),t.flags|=4096);return t}return a?(mn(),o=i.fallback,a=t.mode,r=e.child,g=r.sibling,i=Pt(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,g!==null?o=Pt(g,o):(o=On(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,ca(null,i),i=t.child,o=e.child.memoizedState,o===null?o=go(n):(a=o.cachePool,a!==null?(r=xe._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Tc(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=po(e,s,n),t.memoizedState=fo,ca(e.child,i)):(pn(t),n=e.child,e=n.sibling,n=Pt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function mo(e,t){return t=yl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yl(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function vo(e,t,n){return Vn(t,e.child,null,n),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ns(e.return,t,n)}function yo(e,t,n,i,a,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=l)}function Ou(e,t,n){var i=t.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var s=we.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,M(we,s),Pe(e,t,i,n),i=Z?Zi:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,n,t);else if(e.tag===19)Iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),yo(t,!1,a,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&sl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}yo(t,!0,n,null,l,i);break;case"together":yo(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(gi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fa(e)))}function Qf(e,t,n){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),dn(t,xe,e.memoizedState.cache),Un();break;case 27:case 5:Rn(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:dn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ps(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(pn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?qu(e,t,n):(pn(t),e=Kt(e,t,n),e!==null?e.sibling:null);pn(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(gi(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Ou(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),M(we,we.current),i)break;return null;case 22:return t.lanes=0,ku(e,t,n,t.pendingProps);case 24:dn(t,xe,e.memoizedState.cache)}return Kt(e,t,n)}function Uu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)De=!0;else{if(!bo(e,n)&&(t.flags&128)===0)return De=!1,Qf(e,t,n);De=(e.flags&131072)!==0}else De=!1,Z&&(t.flags&1048576)!==0&&mc(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=_n(t.elementType),t.type=e,typeof e=="function")Ts(e)?(i=Qn(e,i),t.tag=1,t=Hu(null,t,e,i,n)):(t.tag=0,t=ho(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Ke){t.tag=11,t=Mu(null,t,e,i,n);break e}else if(a===P){t.tag=14,t=Du(null,t,e,i,n);break e}}throw t=yt(e)||e,Error(h(306,t,""))}}return t;case 0:return ho(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Qn(i,t.pendingProps),Hu(e,t,i,a,n);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(h(387));i=t.pendingProps;var l=t.memoizedState;a=l.element,Us(e,t),aa(t,i,null,n);var s=t.memoizedState;if(i=s.cache,dn(t,xe,i),i!==l.cache&&zs(t,[xe],n,!0),ia(),i=s.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Bu(e,t,i,n);break e}else if(i!==a){a=Tt(Error(h(424)),t),Ji(a),t=Bu(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ge=Et(e.firstChild),je=t,Z=!0,cn=null,Mt=!0,n=kc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Un(),i===a){t=Kt(e,t,n);break e}Pe(e,t,i,n)}t=t.child}return t;case 26:return vl(e,t),e===null?(n=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Z||(n=t.type,e=t.pendingProps,i=Bl(_.current).createElement(n),i[Le]=t,i[Je]=e,Ve(i,n,e),qe(i),t.stateNode=i):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Rn(t),e===null&&Z&&(i=t.stateNode=Qd(t.type,t.pendingProps,_.current),je=t,Mt=!0,a=ge,Cn(t.type)?(Fo=a,ge=Et(i.firstChild)):ge=a),Pe(e,t,t.pendingProps.children,n),vl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((a=i=ge)&&(i=Ag(i,t.type,t.pendingProps,Mt),i!==null?(t.stateNode=i,je=t,ge=Et(i.firstChild),Mt=!1,a=!0):a=!1),a||un(t)),Rn(t),a=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,i=l.children,Xo(a,l)?i=null:s!==null&&Xo(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Ys(e,t,Of,null,null,n),Ca._currentValue=a),vl(e,t),Pe(e,t,i,n),t.child;case 6:return e===null&&Z&&((e=n=ge)&&(n=Tg(n,t.pendingProps,Mt),n!==null?(t.stateNode=n,je=t,ge=null,e=!0):e=!1),e||un(t)),null;case 13:return qu(e,t,n);case 4:return Be(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Vn(t,null,i,n):Pe(e,t,i,n),t.child;case 11:return Mu(e,t,t.type,t.pendingProps,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,dn(t,t.type,i.value),Pe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ln(t),a=_e(a),i=i(a),t.flags|=1,Pe(e,t,i,n),t.child;case 14:return Du(e,t,t.type,t.pendingProps,n);case 15:return Eu(e,t,t.type,t.pendingProps,n);case 19:return Ou(e,t,n);case 31:return Yf(e,t,n);case 22:return ku(e,t,n,t.pendingProps);case 24:return Ln(t),i=_e(xe),e===null?(a=qs(),a===null&&(a=de,l=Hs(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=n),a=l),t.memoizedState={parent:i,cache:a},Os(t),dn(t,xe,a)):((e.lanes&n)!==0&&(Us(e,t),aa(t,null,null,n),ia()),a=e.memoizedState,l=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),dn(t,xe,i)):(i=l.cache,dn(t,xe,i),i!==a.cache&&zs(t,[xe],n,!0))),Pe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Zt(e){e.flags|=4}function So(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw Pn=nl,Is}else e.flags&=-16777217}function Gu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!eh(t))if(dd())e.flags|=8192;else throw Pn=nl,Is}function bl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yr():536870912,e.lanes|=t,Mi|=t)}function ua(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Xf(e,t,n){var i=t.pendingProps;switch(Ds(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Qt(xe),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fi(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ks())),pe(t),null;case 26:var a=t.type,l=t.memoizedState;return e===null?(Zt(t),l!==null?(pe(t),Gu(t,l)):(pe(t),So(t,a,null,i,n))):l?l!==e.memoizedState?(Zt(t),pe(t),Gu(t,l)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Zt(t),pe(t),So(t,a,e,i,n)),null;case 27:if(Kn(t),n=_.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zt(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return pe(t),null}e=k.current,fi(t)?yc(t):(e=Qd(a,i,n),t.stateNode=e,Zt(t))}return pe(t),null;case 5:if(Kn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zt(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return pe(t),null}if(l=k.current,fi(t))yc(t);else{var s=Bl(_.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}l[Le]=t,l[Je]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(Ve(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Zt(t)}}return pe(t),So(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Zt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(h(166));if(e=_.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=je,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Le]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||qd(e.nodeValue,n)),e||un(t,!0)}else e=Bl(e).createTextNode(i),e[Le]=t,t.stateNode=e}return pe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=fi(t),n!==null){if(e===null){if(!i)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Le]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else n=ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(h(558))}return pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Le]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),a=!1}else a=ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),bl(t,t.updateQueue),pe(t),null);case 4:return me(),e===null&&_o(t.stateNode.containerInfo),pe(t),null;case 10:return Qt(t.type),pe(t),null;case 19:if(A(we),i=t.memoizedState,i===null)return pe(t),null;if(a=(t.flags&128)!==0,l=i.rendering,l===null)if(a)ua(i,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=sl(e),l!==null){for(t.flags|=128,ua(i,!1),e=l.updateQueue,t.updateQueue=e,bl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fc(n,e),n=n.sibling;return M(we,we.current&1|2),Z&&Vt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ot()>Cl&&(t.flags|=128,a=!0,ua(i,!1),t.lanes=4194304)}else{if(!a)if(e=sl(l),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,bl(t,e),ua(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return pe(t),null}else 2*ot()-i.renderingStartTime>Cl&&n!==536870912&&(t.flags|=128,a=!0,ua(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ot(),e.sibling=null,n=we.current,M(we,a?n&1|2:n&1),Z&&Vt(t,i.treeForkCount),e):(pe(t),null);case 22:case 23:return ft(t),_s(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),n=t.updateQueue,n!==null&&bl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&A(jn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qt(xe),pe(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Wf(e,t){switch(Ds(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(xe),me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kn(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(h(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(we),null;case 4:return me(),null;case 10:return Qt(t.type),null;case 22:case 23:return ft(t),_s(),e!==null&&A(jn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(xe),null;case 25:return null;default:return null}}function Lu(e,t){switch(Ds(t),t.tag){case 3:Qt(xe),me();break;case 26:case 27:case 5:Kn(t);break;case 4:me();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:A(we);break;case 10:Qt(t.type);break;case 22:case 23:ft(t),_s(),e!==null&&A(jn);break;case 24:Qt(xe)}}function da(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var l=n.create,s=n.inst;i=l(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){oe(t,t.return,o)}}function vn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var r=n,g=o;try{g()}catch(b){oe(a,r,b)}}}i=i.next}while(i!==l)}}catch(b){oe(t,t.return,b)}}function ju(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nc(t,n)}catch(i){oe(e,e.return,i)}}}function _u(e,t,n){n.props=Qn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function ha(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){oe(e,t,a)}}function Ot(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){oe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){oe(e,t,a)}else n.current=null}function Pu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){oe(e,e.return,a)}}function wo(e,t,n){try{var i=e.stateNode;mg(i,e.type,n,t),i[Je]=t}catch(a){oe(e,e.return,a)}}function Vu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Ao(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function To(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jt));else if(i!==4&&(i===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(To(e,t,n),e=e.sibling;e!==null;)To(e,t,n),e=e.sibling}function Sl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}function Yu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ve(t,i,n),t[Le]=e,t[Je]=n}catch(l){oe(e,e.return,l)}}var Jt=!1,Ee=!1,Co=!1,Qu=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Kf(e,t){if(e=e.containerInfo,Yo=jl,e=ac(e),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,r=-1,g=0,b=0,w=e,m=null;t:for(;;){for(var v;w!==n||a!==0&&w.nodeType!==3||(o=s+a),w!==l||i!==0&&w.nodeType!==3||(r=s+i),w.nodeType===3&&(s+=w.nodeValue.length),(v=w.firstChild)!==null;)m=w,w=v;for(;;){if(w===e)break t;if(m===n&&++g===a&&(o=s),m===l&&++b===i&&(r=s),(v=w.nextSibling)!==null)break;w=m,m=w.parentNode}w=v}n=o===-1||r===-1?null:{start:o,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},jl=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,a=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var D=Qn(n.type,a);e=i.getSnapshotBeforeUpdate(D,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(q){oe(n,n.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ko(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ko(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function Xu(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$t(e,n),i&4&&da(5,n);break;case 1:if($t(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){oe(n,n.return,s)}else{var a=Qn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){oe(n,n.return,s)}}i&64&&ju(n),i&512&&ha(n,n.return);break;case 3:if($t(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nc(e,t)}catch(s){oe(n,n.return,s)}}break;case 27:t===null&&i&4&&Yu(n);case 26:case 5:$t(e,n),t===null&&i&4&&Pu(n),i&512&&ha(n,n.return);break;case 12:$t(e,n);break;case 31:$t(e,n),i&4&&Zu(e,n);break;case 13:$t(e,n),i&4&&Ju(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ag.bind(null,n),Cg(e,n))));break;case 22:if(i=n.memoizedState!==null||Jt,!i){t=t!==null&&t.memoizedState!==null||Ee,a=Jt;var l=Ee;Jt=i,(Ee=t)&&!l?en(e,n,(n.subtreeFlags&8772)!==0):$t(e,n),Jt=a,Ee=l}break;case 30:break;default:$t(e,n)}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$l(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,$e=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Ku(e,t,n),n=n.sibling}function Ku(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 26:Ee||Ot(n,t),Ft(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||Ot(n,t);var i=ve,a=$e;Cn(n.type)&&(ve=n.stateNode,$e=!1),Ft(e,t,n),wa(n.stateNode),ve=i,$e=a;break;case 5:Ee||Ot(n,t);case 6:if(i=ve,a=$e,ve=null,Ft(e,t,n),ve=i,$e=a,ve!==null)if($e)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(n.stateNode)}catch(l){oe(n,t,l)}else try{ve.removeChild(n.stateNode)}catch(l){oe(n,t,l)}break;case 18:ve!==null&&($e?(e=ve,jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Bi(e)):jd(ve,n.stateNode));break;case 4:i=ve,a=$e,ve=n.stateNode.containerInfo,$e=!0,Ft(e,t,n),ve=i,$e=a;break;case 0:case 11:case 14:case 15:vn(2,n,t),Ee||vn(4,n,t),Ft(e,t,n);break;case 1:Ee||(Ot(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&_u(n,t,i)),Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:Ee=(i=Ee)||n.memoizedState!==null,Ft(e,t,n),Ee=i;break;default:Ft(e,t,n)}}function Zu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bi(e)}catch(n){oe(t,t.return,n)}}}function Ju(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bi(e)}catch(n){oe(t,t.return,n)}}function Zf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qu),t;default:throw Error(h(435,e.tag))}}function wl(e,t){var n=Zf(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=lg.bind(null,e,i);i.then(a,a)}})}function et(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Cn(o.type)){ve=o.stateNode,$e=!1;break e}break;case 5:ve=o.stateNode,$e=!1;break e;case 3:case 4:ve=o.stateNode.containerInfo,$e=!0;break e}o=o.return}if(ve===null)throw Error(h(160));Ku(l,s,a),ve=null,$e=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fu(t,e),t=t.sibling}var zt=null;function Fu(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),i&4&&(vn(3,e,e.return),da(3,e),vn(5,e,e.return));break;case 1:et(t,e),tt(e),i&512&&(Ee||n===null||Ot(n,n.return)),i&64&&Jt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=zt;if(et(t,e),tt(e),i&512&&(Ee||n===null||Ot(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Gi]||l[Le]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),Ve(l,i,n),l[Le]=e,qe(l),i=l;break e;case"link":var s=Fd("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}l=a.createElement(i),Ve(l,i,n),a.head.appendChild(l);break;case"meta":if(s=Fd("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}l=a.createElement(i),Ve(l,i,n),a.head.appendChild(l);break;default:throw Error(h(468,i))}l[Le]=e,qe(l),i=l}e.stateNode=i}else $d(a,e.type,e.stateNode);else e.stateNode=Jd(a,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?$d(a,e.type,e.stateNode):Jd(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&wo(e,e.memoizedProps,n.memoizedProps)}break;case 27:et(t,e),tt(e),i&512&&(Ee||n===null||Ot(n,n.return)),n!==null&&i&4&&wo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(et(t,e),tt(e),i&512&&(Ee||n===null||Ot(n,n.return)),e.flags&32){a=e.stateNode;try{ii(a,"")}catch(D){oe(e,e.return,D)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,wo(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Co=!0);break;case 6:if(et(t,e),tt(e),i&4){if(e.stateNode===null)throw Error(h(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(D){oe(e,e.return,D)}}break;case 3:if(Ol=null,a=zt,zt=ql(t.containerInfo),et(t,e),zt=a,tt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(D){oe(e,e.return,D)}Co&&(Co=!1,$u(e));break;case 4:i=zt,zt=ql(e.stateNode.containerInfo),et(t,e),tt(e),zt=i;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wl(e,i)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Tl=ot()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wl(e,i)));break;case 22:a=e.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,g=Jt,b=Ee;if(Jt=g||a,Ee=b||r,et(t,e),Ee=b,Jt=g,tt(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||r||Jt||Ee||Xn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){r=n=t;try{if(l=r.stateNode,a)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=r.stateNode;var w=r.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(D){oe(r,r.return,D)}}}else if(t.tag===6){if(n===null){r=t;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(D){oe(r,r.return,D)}}}else if(t.tag===18){if(n===null){r=t;try{var v=r.stateNode;a?_d(v,!0):_d(r.stateNode,!1)}catch(D){oe(r,r.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,wl(e,n))));break;case 19:et(t,e),tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wl(e,i)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Vu(i)){n=i;break}i=i.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var a=n.stateNode,l=Ao(e);Sl(e,l,a);break;case 5:var s=n.stateNode;n.flags&32&&(ii(s,""),n.flags&=-33);var o=Ao(e);Sl(e,o,s);break;case 3:case 4:var r=n.stateNode.containerInfo,g=Ao(e);To(e,g,r);break;default:throw Error(h(161))}}catch(b){oe(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $u(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$u(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xu(e,t.alternate,t),t=t.sibling}function Xn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vn(4,t,t.return),Xn(t);break;case 1:Ot(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_u(t,t.return,n),Xn(t);break;case 27:wa(t.stateNode);case 26:case 5:Ot(t,t.return),Xn(t);break;case 22:t.memoizedState===null&&Xn(t);break;case 30:Xn(t);break;default:Xn(t)}e=e.sibling}}function en(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:en(a,l,n),da(4,l);break;case 1:if(en(a,l,n),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){oe(i,i.return,g)}if(i=l,a=i.updateQueue,a!==null){var o=i.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)Rc(r[a],o)}catch(g){oe(i,i.return,g)}}n&&s&64&&ju(l),ha(l,l.return);break;case 27:Yu(l);case 26:case 5:en(a,l,n),n&&i===null&&s&4&&Pu(l),ha(l,l.return);break;case 12:en(a,l,n);break;case 31:en(a,l,n),n&&s&4&&Zu(a,l);break;case 13:en(a,l,n),n&&s&4&&Ju(a,l);break;case 22:l.memoizedState===null&&en(a,l,n),ha(l,l.return);break;case 30:break;default:en(a,l,n)}t=t.sibling}}function xo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fi(n))}function Mo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fi(e))}function Ht(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ed(e,t,n,i),t=t.sibling}function ed(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,n,i),a&2048&&da(9,t);break;case 1:Ht(e,t,n,i);break;case 3:Ht(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fi(e)));break;case 12:if(a&2048){Ht(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){oe(t,t.return,r)}}else Ht(e,t,n,i);break;case 31:Ht(e,t,n,i);break;case 13:Ht(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?Ht(e,t,n,i):fa(e,t):l._visibility&2?Ht(e,t,n,i):(l._visibility|=2,Ti(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&xo(s,t);break;case 24:Ht(e,t,n,i),a&2048&&Mo(t.alternate,t);break;default:Ht(e,t,n,i)}}function Ti(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,o=n,r=i,g=s.flags;switch(s.tag){case 0:case 11:case 15:Ti(l,s,o,r,a),da(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Ti(l,s,o,r,a):fa(l,s):(b._visibility|=2,Ti(l,s,o,r,a)),a&&g&2048&&xo(s.alternate,s);break;case 24:Ti(l,s,o,r,a),a&&g&2048&&Mo(s.alternate,s);break;default:Ti(l,s,o,r,a)}t=t.sibling}}function fa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:fa(n,i),a&2048&&xo(i.alternate,i);break;case 24:fa(n,i),a&2048&&Mo(i.alternate,i);break;default:fa(n,i)}t=t.sibling}}var ga=8192;function Ci(e,t,n){if(e.subtreeFlags&ga)for(e=e.child;e!==null;)td(e,t,n),e=e.sibling}function td(e,t,n){switch(e.tag){case 26:Ci(e,t,n),e.flags&ga&&e.memoizedState!==null&&Ig(n,zt,e.memoizedState,e.memoizedProps);break;case 5:Ci(e,t,n);break;case 3:case 4:var i=zt;zt=ql(e.stateNode.containerInfo),Ci(e,t,n),zt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ga,ga=16777216,Ci(e,t,n),ga=i):Ci(e,t,n));break;default:Ci(e,t,n)}}function nd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,ad(i,e)}nd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(e),e=e.sibling}function id(e){switch(e.tag){case 0:case 11:case 15:pa(e),e.flags&2048&&vn(9,e,e.return);break;case 3:pa(e);break;case 12:pa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Al(e)):pa(e);break;default:pa(e)}}function Al(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,ad(i,e)}nd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vn(8,t,t.return),Al(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Al(t));break;default:Al(t)}e=e.sibling}}function ad(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var a=i.sibling,l=i.return;if(Wu(i),i===n){Ie=null;break e}if(a!==null){a.return=l,Ie=a;break e}Ie=l}}}var Jf={getCacheForType:function(e){var t=_e(xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _e(xe).controller.signal}},Ff=typeof WeakMap=="function"?WeakMap:Map,ie=0,de=null,Y=null,W=0,se=0,gt=null,yn=!1,xi=!1,Do=!1,tn=0,be=0,bn=0,Wn=0,Eo=0,pt=0,Mi=0,ma=null,nt=null,ko=!1,Tl=0,ld=0,Cl=1/0,xl=null,Sn=null,ze=0,wn=null,Di=null,nn=0,Ro=0,No=null,sd=null,va=0,zo=null;function mt(){return(ie&2)!==0&&W!==0?W&-W:y.T!==null?Uo():Ar()}function od(){if(pt===0)if((W&536870912)===0||Z){var e=Ha;Ha<<=1,(Ha&3932160)===0&&(Ha=262144),pt=e}else pt=536870912;return e=ht.current,e!==null&&(e.flags|=32),pt}function it(e,t,n){(e===de&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(Ei(e,0),An(e,W,pt,!1)),Ui(e,n),((ie&2)===0||e!==de)&&(e===de&&((ie&2)===0&&(Wn|=n),be===4&&An(e,W,pt,!1)),Ut(e))}function rd(e,t,n){if((ie&6)!==0)throw Error(h(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Oi(e,t),a=i?tg(e,t):Bo(e,t,!0),l=i;do{if(a===0){xi&&!i&&An(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!$f(n)){a=Bo(e,t,!1),l=!1;continue}if(a===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;a=ma;var r=o.current.memoizedState.isDehydrated;if(r&&(Ei(o,s).flags|=256),s=Bo(o,s,!1),s!==2){if(Do&&!r){o.errorRecoveryDisabledLanes|=l,Wn|=l,a=4;break e}l=nt,nt=a,l!==null&&(nt===null?nt=l:nt.push.apply(nt,l))}a=s}if(l=!1,a!==2)continue}}if(a===1){Ei(e,0),An(e,t,0,!0);break}e:{switch(i=e,l=a,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:An(i,t,pt,!yn);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(a=Tl+300-ot(),10<a)){if(An(i,t,pt,!yn),qa(i,0,!0)!==0)break e;nn=t,i.timeoutHandle=Gd(cd.bind(null,i,n,nt,xl,ko,t,pt,Wn,Mi,yn,l,"Throttled",-0,0),a);break e}cd(i,n,nt,xl,ko,t,pt,Wn,Mi,yn,l,null,-0,0)}}break}while(!0);Ut(e)}function cd(e,t,n,i,a,l,s,o,r,g,b,w,m,v){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},td(t,l,w);var D=(l&62914560)===l?Tl-ot():(l&4194048)===l?ld-ot():0;if(D=Og(w,D),D!==null){nn=l,e.cancelPendingCommit=D(vd.bind(null,e,t,l,n,i,a,s,o,r,b,w,null,m,v)),An(e,l,s,!g);return}}vd(e,t,l,n,i,a,s,o,r)}function $f(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],l=a.getSnapshot;a=a.value;try{if(!ut(l(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t,n,i){t&=~Eo,t&=~Wn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var l=31-ct(a),s=1<<l;i[l]=-1,a&=~s}n!==0&&br(e,n,t)}function Ml(){return(ie&6)===0?(ya(0),!1):!0}function Ho(){if(Y!==null){if(se===0)var e=Y.return;else e=Y,Yt=Gn=null,Ws(e),yi=null,ea=0,e=Y;for(;e!==null;)Lu(e.alternate,e),e=e.return;Y=null}}function Ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,bg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),nn=0,Ho(),de=e,Y=n=Pt(e.current,null),W=t,se=0,gt=null,yn=!1,xi=Oi(e,t),Do=!1,Mi=pt=Eo=Wn=bn=be=0,nt=ma=null,ko=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-ct(i),l=1<<a;t|=e[a],i&=~l}return tn=t,Xa(),n}function ud(e,t){L=null,y.H=ra,t===vi||t===tl?(t=Mc(),se=3):t===Is?(t=Mc(),se=4):se=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,Y===null&&(be=1,pl(e,Tt(t,e.current)))}function dd(){var e=ht.current;return e===null?!0:(W&4194048)===W?Dt===null:(W&62914560)===W||(W&536870912)!==0?e===Dt:!1}function hd(){var e=y.H;return y.H=ra,e===null?ra:e}function fd(){var e=y.A;return y.A=Jf,e}function Dl(){be=4,yn||(W&4194048)!==W&&ht.current!==null||(xi=!0),(bn&134217727)===0&&(Wn&134217727)===0||de===null||An(de,W,pt,!1)}function Bo(e,t,n){var i=ie;ie|=2;var a=hd(),l=fd();(de!==e||W!==t)&&(xl=null,Ei(e,t)),t=!1;var s=be;e:do try{if(se!==0&&Y!==null){var o=Y,r=gt;switch(se){case 8:Ho(),s=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var g=se;if(se=0,gt=null,ki(e,o,r,g),n&&xi){s=0;break e}break;default:g=se,se=0,gt=null,ki(e,o,r,g)}}eg(),s=be;break}catch(b){ud(e,b)}while(!0);return t&&e.shellSuspendCounter++,Yt=Gn=null,ie=i,y.H=a,y.A=l,Y===null&&(de=null,W=0,Xa()),s}function eg(){for(;Y!==null;)gd(Y)}function tg(e,t){var n=ie;ie|=2;var i=hd(),a=fd();de!==e||W!==t?(xl=null,Cl=ot()+500,Ei(e,t)):xi=Oi(e,t);e:do try{if(se!==0&&Y!==null){t=Y;var l=gt;t:switch(se){case 1:se=0,gt=null,ki(e,t,l,1);break;case 2:case 9:if(Cc(l)){se=0,gt=null,pd(t);break}t=function(){se!==2&&se!==9||de!==e||(se=7),Ut(e)},l.then(t,t);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:Cc(l)?(se=0,gt=null,pd(t)):(se=0,gt=null,ki(e,t,l,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var o=Y;if(s?eh(s):o.stateNode.complete){se=0,gt=null;var r=o.sibling;if(r!==null)Y=r;else{var g=o.return;g!==null?(Y=g,El(g)):Y=null}break t}}se=0,gt=null,ki(e,t,l,5);break;case 6:se=0,gt=null,ki(e,t,l,6);break;case 8:Ho(),be=6;break e;default:throw Error(h(462))}}ng();break}catch(b){ud(e,b)}while(!0);return Yt=Gn=null,y.H=i,y.A=a,ie=n,Y!==null?0:(de=null,W=0,Xa(),be)}function ng(){for(;Y!==null&&!Ch();)gd(Y)}function gd(e){var t=Uu(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?El(e):Y=t}function pd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zu(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=zu(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Ws(t);default:Lu(n,t),t=Y=fc(t,tn),t=Uu(n,t,tn)}e.memoizedProps=e.pendingProps,t===null?El(e):Y=t}function ki(e,t,n,i){Yt=Gn=null,Ws(t),yi=null,ea=0;var a=t.return;try{if(Vf(e,a,t,n,W)){be=1,pl(e,Tt(n,e.current)),Y=null;return}}catch(l){if(a!==null)throw Y=a,l;be=1,pl(e,Tt(n,e.current)),Y=null;return}t.flags&32768?(Z||i===1?e=!0:xi||(W&536870912)!==0?e=!1:(yn=e=!0,(i===2||i===9||i===3||i===6)&&(i=ht.current,i!==null&&i.tag===13&&(i.flags|=16384))),md(t,e)):El(t)}function El(e){var t=e;do{if((t.flags&32768)!==0){md(t,yn);return}e=t.return;var n=Xf(t.alternate,t,tn);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);be===0&&(be=5)}function md(e,t){do{var n=Wf(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);be=6,Y=null}function vd(e,t,n,i,a,l,s,o,r){e.cancelPendingCommit=null;do kl();while(ze!==0);if((ie&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=ws,Bh(e,n,l,s,o,r),e===de&&(Y=de=null,W=0),Di=t,wn=e,nn=n,Ro=l,No=a,sd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sg(Na,function(){return Ad(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=y.T,y.T=null,a=x.p,x.p=2,s=ie,ie|=4;try{Kf(e,t,n)}finally{ie=s,x.p=a,y.T=i}}ze=1,yd(),bd(),Sd()}}function yd(){if(ze===1){ze=0;var e=wn,t=Di,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var i=x.p;x.p=2;var a=ie;ie|=4;try{Fu(t,e);var l=Qo,s=ac(e.containerInfo),o=l.focusedElem,r=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&ic(o.ownerDocument.documentElement,o)){if(r!==null&&ms(o)){var g=r.start,b=r.end;if(b===void 0&&(b=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(b,o.value.length);else{var w=o.ownerDocument||document,m=w&&w.defaultView||window;if(m.getSelection){var v=m.getSelection(),D=o.textContent.length,q=Math.min(r.start,D),ue=r.end===void 0?q:Math.min(r.end,D);!v.extend&&q>ue&&(s=ue,ue=q,q=s);var d=nc(o,q),c=nc(o,ue);if(d&&c&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var f=w.createRange();f.setStart(d.node,d.offset),v.removeAllRanges(),q>ue?(v.addRange(f),v.extend(c.node,c.offset)):(f.setEnd(c.node,c.offset),v.addRange(f))}}}}for(w=[],v=o;v=v.parentNode;)v.nodeType===1&&w.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<w.length;o++){var S=w[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}jl=!!Yo,Qo=Yo=null}finally{ie=a,x.p=i,y.T=n}}e.current=t,ze=2}}function bd(){if(ze===2){ze=0;var e=wn,t=Di,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var i=x.p;x.p=2;var a=ie;ie|=4;try{Xu(e,t.alternate,t)}finally{ie=a,x.p=i,y.T=n}}ze=3}}function Sd(){if(ze===4||ze===3){ze=0,xh();var e=wn,t=Di,n=nn,i=sd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ze=5:(ze=0,Di=wn=null,wd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Sn=null),Jl(n),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Ii,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=y.T,a=x.p,x.p=2,y.T=null;try{for(var l=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];l(o.value,{componentStack:o.stack})}}finally{y.T=t,x.p=a}}(nn&3)!==0&&kl(),Ut(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===zo?va++:(va=0,zo=e):va=0,ya(0)}}function wd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fi(t)))}function kl(){return yd(),bd(),Sd(),Ad()}function Ad(){if(ze!==5)return!1;var e=wn,t=Ro;Ro=0;var n=Jl(nn),i=y.T,a=x.p;try{x.p=32>n?32:n,y.T=null,n=No,No=null;var l=wn,s=nn;if(ze=0,Di=wn=null,nn=0,(ie&6)!==0)throw Error(h(331));var o=ie;if(ie|=4,id(l.current),ed(l,l.current,s,n),ie=o,ya(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Ii,l)}catch{}return!0}finally{x.p=a,y.T=i,wd(e,t)}}function Td(e,t,n){t=Tt(n,t),t=co(e.stateNode,t,2),e=gn(e,t,2),e!==null&&(Ui(e,2),Ut(e))}function oe(e,t,n){if(e.tag===3)Td(e,e,n);else for(;t!==null;){if(t.tag===3){Td(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))){e=Tt(n,e),n=Cu(2),i=gn(t,n,2),i!==null&&(xu(n,i,t,e),Ui(i,2),Ut(i));break}}t=t.return}}function qo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ff;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Do=!0,a.add(n),e=ig.bind(null,e,t,n),t.then(e,e))}function ig(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(W&n)===n&&(be===4||be===3&&(W&62914560)===W&&300>ot()-Tl?(ie&2)===0&&Ei(e,0):Eo|=n,Mi===W&&(Mi=0)),Ut(e)}function Cd(e,t){t===0&&(t=yr()),e=In(e,t),e!==null&&(Ui(e,t),Ut(e))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function lg(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(h(314))}i!==null&&i.delete(t),Cd(e,n)}function sg(e,t){return Zn(e,t)}var Rl=null,Ri=null,Io=!1,Nl=!1,Oo=!1,Tn=0;function Ut(e){e!==Ri&&e.next===null&&(Ri===null?Rl=Ri=e:Ri=Ri.next=e),Nl=!0,Io||(Io=!0,rg())}function ya(e,t){if(!Oo&&Nl){Oo=!0;do for(var n=!1,i=Rl;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var s=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-ct(42|e)+1)-1,l&=a&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Ed(i,l))}else l=W,l=qa(i,i===de?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Oi(i,l)||(n=!0,Ed(i,l));i=i.next}while(n);Oo=!1}}function og(){xd()}function xd(){Nl=Io=!1;var e=0;Tn!==0&&yg()&&(e=Tn);for(var t=ot(),n=null,i=Rl;i!==null;){var a=i.next,l=Md(i,t);l===0?(i.next=null,n===null?Rl=a:n.next=a,a===null&&(Ri=n)):(n=i,(e!==0||(l&3)!==0)&&(Nl=!0)),i=a}ze!==0&&ze!==5||ya(e),Tn!==0&&(Tn=0)}function Md(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-ct(l),o=1<<s,r=a[s];r===-1?((o&n)===0||(o&i)!==0)&&(a[s]=Hh(o,t)):r<=t&&(e.expiredLanes|=o),l&=~o}if(t=de,n=W,n=qa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Wl(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Oi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Wl(i),Jl(n)){case 2:case 8:n=mr;break;case 32:n=Na;break;case 268435456:n=vr;break;default:n=Na}return i=Dd.bind(null,e),n=Zn(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Wl(i),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kl()&&e.callbackNode!==n)return null;var i=W;return i=qa(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(rd(e,i,t),Md(e,ot()),e.callbackNode!=null&&e.callbackNode===n?Dd.bind(null,e):null)}function Ed(e,t){if(kl())return null;rd(e,t,!0)}function rg(){Sg(function(){(ie&6)!==0?Zn(pr,og):xd()})}function Uo(){if(Tn===0){var e=pi;e===0&&(e=za,za<<=1,(za&261888)===0&&(za=256)),Tn=e}return Tn}function kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ga(""+e)}function Rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cg(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var l=kd((a[Je]||null).action),s=i.submitter;s&&(t=(t=s[Je]||null)?kd(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var o=new Pa("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Tn!==0){var r=s?Rd(a,s):new FormData(a);io(n,{pending:!0,data:r,method:a.method,action:l},null,r)}}else typeof l=="function"&&(o.preventDefault(),r=s?Rd(a,s):new FormData(a),io(n,{pending:!0,data:r,method:a.method,action:l},l,r))},currentTarget:a}]})}}for(var Go=0;Go<Ss.length;Go++){var Lo=Ss[Go],ug=Lo.toLowerCase(),dg=Lo[0].toUpperCase()+Lo.slice(1);Nt(ug,"on"+dg)}Nt(oc,"onAnimationEnd"),Nt(rc,"onAnimationIteration"),Nt(cc,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Df,"onTransitionRun"),Nt(Ef,"onTransitionStart"),Nt(kf,"onTransitionCancel"),Nt(uc,"onTransitionEnd"),ti("onMouseEnter",["mouseout","mouseover"]),ti("onMouseLeave",["mouseout","mouseover"]),ti("onPointerEnter",["pointerout","pointerover"]),ti("onPointerLeave",["pointerout","pointerover"]),zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function Nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],r=o.instance,g=o.currentTarget;if(o=o.listener,r!==l&&a.isPropagationStopped())break e;l=o,a.currentTarget=g;try{l(a)}catch(b){Qa(b)}a.currentTarget=null,l=r}else for(s=0;s<i.length;s++){if(o=i[s],r=o.instance,g=o.currentTarget,o=o.listener,r!==l&&a.isPropagationStopped())break e;l=o,a.currentTarget=g;try{l(a)}catch(b){Qa(b)}a.currentTarget=null,l=r}}}}function Q(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var i=e+"__bubble";n.has(i)||(zd(t,e,2,!1),n.add(i))}function jo(e,t,n){var i=0;t&&(i|=4),zd(n,e,i,t)}var zl="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[zl]){e[zl]=!0,xr.forEach(function(n){n!=="selectionchange"&&(hg.has(n)||jo(n,!1,e),jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zl]||(t[zl]=!0,jo("selectionchange",!1,t))}}function zd(e,t,n,i){switch(oh(t)){case 2:var a=Lg;break;case 8:a=jg;break;default:a=ir}n=a.bind(null,t,n,e),a=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Po(e,t,n,i,a){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Fn(o),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){i=l=s;continue e}o=o.parentNode}}i=i.return}Or(function(){var g=l,b=ls(n),w=[];e:{var m=dc.get(e);if(m!==void 0){var v=Pa,D=e;switch(e){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":v=lf;break;case"focusin":D="focus",v=ds;break;case"focusout":D="blur",v=ds;break;case"beforeblur":case"afterblur":v=ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=rf;break;case oc:case rc:case cc:v=Kh;break;case uc:v=uf;break;case"scroll":case"scrollend":v=Vh;break;case"wheel":v=hf;break;case"copy":case"cut":case"paste":v=Jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=_r;break;case"toggle":case"beforetoggle":v=gf}var q=(t&4)!==0,ue=!q&&(e==="scroll"||e==="scrollend"),d=q?m!==null?m+"Capture":null:m;q=[];for(var c=g,f;c!==null;){var S=c;if(f=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||f===null||d===null||(S=ji(c,d),S!=null&&q.push(Sa(c,S,f))),ue)break;c=c.return}0<q.length&&(m=new v(m,D,null,n,b),w.push({event:m,listeners:q}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==as&&(D=n.relatedTarget||n.fromElement)&&(Fn(D)||D[Jn]))break e;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(D=n.relatedTarget||n.toElement,v=g,D=D?Fn(D):null,D!==null&&(ue=J(D),q=D.tag,D!==ue||q!==5&&q!==27&&q!==6)&&(D=null)):(v=null,D=g),v!==D)){if(q=Lr,S="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(q=_r,S="onPointerLeave",d="onPointerEnter",c="pointer"),ue=v==null?m:Li(v),f=D==null?m:Li(D),m=new q(S,c+"leave",v,n,b),m.target=ue,m.relatedTarget=f,S=null,Fn(b)===g&&(q=new q(d,c+"enter",D,n,b),q.target=f,q.relatedTarget=ue,S=q),ue=S,v&&D)t:{for(q=fg,d=v,c=D,f=0,S=d;S;S=q(S))f++;S=0;for(var H=c;H;H=q(H))S++;for(;0<f-S;)d=q(d),f--;for(;0<S-f;)c=q(c),S--;for(;f--;){if(d===c||c!==null&&d===c.alternate){q=d;break t}d=q(d),c=q(c)}q=null}else q=null;v!==null&&Hd(w,m,v,q,!1),D!==null&&ue!==null&&Hd(w,ue,D,q,!0)}}e:{if(m=g?Li(g):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var ee=Zr;else if(Wr(m))if(Jr)ee=Cf;else{ee=Af;var N=wf}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?g&&is(g.elementType)&&(ee=Zr):ee=Tf;if(ee&&(ee=ee(e,g))){Kr(w,ee,n,b);break e}N&&N(e,m,g),e==="focusout"&&g&&m.type==="number"&&g.memoizedProps.value!=null&&ns(m,"number",m.value)}switch(N=g?Li(g):window,e){case"focusin":(Wr(N)||N.contentEditable==="true")&&(oi=N,vs=g,Ki=null);break;case"focusout":Ki=vs=oi=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,lc(w,n,b);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":lc(w,n,b)}var j;if(fs)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else si?Qr(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Pr&&n.locale!=="ko"&&(si||K!=="onCompositionStart"?K==="onCompositionEnd"&&si&&(j=Ur()):(on=b,rs="value"in on?on.value:on.textContent,si=!0)),N=Hl(g,K),0<N.length&&(K=new jr(K,e,null,n,b),w.push({event:K,listeners:N}),j?K.data=j:(j=Xr(n),j!==null&&(K.data=j)))),(j=mf?vf(e,n):yf(e,n))&&(K=Hl(g,"onBeforeInput"),0<K.length&&(N=new jr("onBeforeInput","beforeinput",null,n,b),w.push({event:N,listeners:K}),N.data=j)),cg(w,e,g,n,b)}Nd(w,t)})}function Sa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hl(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=ji(e,n),a!=null&&i.unshift(Sa(e,a,l)),a=ji(e,t),a!=null&&i.push(Sa(e,a,l))),e.tag===3)return i;e=e.return}return[]}function fg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,n,i,a){for(var l=t._reactName,s=[];n!==null&&n!==i;){var o=n,r=o.alternate,g=o.stateNode;if(o=o.tag,r!==null&&r===i)break;o!==5&&o!==26&&o!==27||g===null||(r=g,a?(g=ji(n,l),g!=null&&s.unshift(Sa(n,g,r))):a||(g=ji(n,l),g!=null&&s.push(Sa(n,g,r)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var gg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(pg,"")}function qd(e,t){return t=Bd(t),Bd(e)===t}function ce(e,t,n,i,a,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ii(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ii(e,""+i);break;case"className":Oa(e,"class",i);break;case"tabIndex":Oa(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Oa(e,n,i);break;case"style":qr(e,i,l);break;case"data":if(t!=="object"){Oa(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ga(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",a.name,a,null),ce(e,t,"formEncType",a.formEncType,a,null),ce(e,t,"formMethod",a.formMethod,a,null),ce(e,t,"formTarget",a.formTarget,a,null)):(ce(e,t,"encType",a.encType,a,null),ce(e,t,"method",a.method,a,null),ce(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ga(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=jt);break;case"onScroll":i!=null&&Q("scroll",e);break;case"onScrollEnd":i!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ga(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Q("beforetoggle",e),Q("toggle",e),Ia(e,"popover",i);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ia(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_h.get(n)||n,Ia(e,n,i))}}function Vo(e,t,n,i,a,l){switch(n){case"style":qr(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ii(e,i):(typeof i=="number"||typeof i=="bigint")&&ii(e,""+i);break;case"onScroll":i!=null&&Q("scroll",e);break;case"onScrollEnd":i!=null&&Q("scrollend",e);break;case"onClick":i!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),l=e[Je]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ia(e,n,i)}}}function Ve(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var i=!1,a=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ce(e,t,l,s,n,null)}}a&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Q("invalid",e);var o=l=s=a=null,r=null,g=null;for(i in n)if(n.hasOwnProperty(i)){var b=n[i];if(b!=null)switch(i){case"name":a=b;break;case"type":s=b;break;case"checked":r=b;break;case"defaultChecked":g=b;break;case"value":l=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(h(137,t));break;default:ce(e,t,i,b,n,null)}}Nr(e,l,o,r,g,s,a,!1);return;case"select":Q("invalid",e),i=s=l=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ce(e,t,a,o,n,null)}t=l,n=s,e.multiple=!!i,t!=null?ni(e,!!i,t,!1):n!=null&&ni(e,!!i,n,!0);return;case"textarea":Q("invalid",e),l=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:ce(e,t,s,o,n,null)}Hr(e,i,a,l);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(i=n[r],i!=null))switch(r){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ce(e,t,r,i,n,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(i=0;i<ba.length;i++)Q(ba[i],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(i=n[g],i!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ce(e,t,g,i,n,null)}return;default:if(is(t)){for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!==void 0&&Vo(e,t,b,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}function mg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,s=null,o=null,r=null,g=null,b=null;for(v in n){var w=n[v];if(n.hasOwnProperty(v)&&w!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=w;default:i.hasOwnProperty(v)||ce(e,t,v,null,i,w)}}for(var m in i){var v=i[m];if(w=n[m],i.hasOwnProperty(m)&&(v!=null||w!=null))switch(m){case"type":l=v;break;case"name":a=v;break;case"checked":g=v;break;case"defaultChecked":b=v;break;case"value":s=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==w&&ce(e,t,m,v,i,w)}}ts(e,s,o,r,g,b,l,a);return;case"select":v=s=o=m=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":v=r;default:i.hasOwnProperty(l)||ce(e,t,l,null,i,r)}for(a in i)if(l=i[a],r=n[a],i.hasOwnProperty(a)&&(l!=null||r!=null))switch(a){case"value":m=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==r&&ce(e,t,a,l,i,r)}t=o,n=s,i=v,m!=null?ni(e,!!n,m,!1):!!i!=!!n&&(t!=null?ni(e,!!n,t,!0):ni(e,!!n,n?[]:"",!1));return;case"textarea":v=m=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,a)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":m=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==l&&ce(e,t,s,a,i,l)}zr(e,m,v);return;case"option":for(var D in n)if(m=n[D],n.hasOwnProperty(D)&&m!=null&&!i.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:ce(e,t,D,null,i,m)}for(r in i)if(m=i[r],v=n[r],i.hasOwnProperty(r)&&m!==v&&(m!=null||v!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ce(e,t,r,m,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in n)m=n[q],n.hasOwnProperty(q)&&m!=null&&!i.hasOwnProperty(q)&&ce(e,t,q,null,i,m);for(g in i)if(m=i[g],v=n[g],i.hasOwnProperty(g)&&m!==v&&(m!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:ce(e,t,g,m,i,v)}return;default:if(is(t)){for(var ue in n)m=n[ue],n.hasOwnProperty(ue)&&m!==void 0&&!i.hasOwnProperty(ue)&&Vo(e,t,ue,void 0,i,m);for(b in i)m=i[b],v=n[b],!i.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Vo(e,t,b,m,i,v);return}}for(var d in n)m=n[d],n.hasOwnProperty(d)&&m!=null&&!i.hasOwnProperty(d)&&ce(e,t,d,null,i,m);for(w in i)m=i[w],v=n[w],!i.hasOwnProperty(w)||m===v||m==null&&v==null||ce(e,t,w,m,i,v)}function Id(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],l=a.transferSize,s=a.initiatorType,o=a.duration;if(l&&o&&Id(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var r=n[i],g=r.startTime;if(g>o)break;var b=r.transferSize,w=r.initiatorType;b&&Id(w)&&(r=r.responseEnd,s+=b*(r<o?1:(o-g)/(r-g)))}if(--i,t+=8*(l+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yo=null,Qo=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function Od(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=null;function yg(){var e=window.event;return e&&e.type==="popstate"?e===Wo?!1:(Wo=e,!0):(Wo=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(e){return Ld.resolve(null).then(e).catch(wg)}:Gd;function wg(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function jd(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Bi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")wa(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,wa(n);for(var l=n.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[Gi]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&wa(e.ownerDocument.body);n=a}while(n);Bi(t)}function _d(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Ko(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ko(n),$l(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ag(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Gi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function Tg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Et(e.nextSibling),e===null))return null;return e}function Pd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function Zo(e){return e.data==="$?"||e.data==="$~"}function Jo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fo=null;function Vd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Et(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Yd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Qd(e,t,n){switch(t=Bl(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function wa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$l(e)}var kt=new Map,Xd=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var an=x.d;x.d={f:xg,r:Mg,D:Dg,C:Eg,L:kg,m:Rg,X:zg,S:Ng,M:Hg};function xg(){var e=an.f(),t=Ml();return e||t}function Mg(e){var t=$n(e);t!==null&&t.tag===5&&t.type==="form"?uu(t):an.r(e)}var Ni=typeof document>"u"?null:document;function Wd(e,t,n){var i=Ni;if(i&&typeof t=="string"&&t){var a=wt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Xd.has(a)||(Xd.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ve(t,"link",e),qe(t),i.head.appendChild(t)))}}function Dg(e){an.D(e),Wd("dns-prefetch",e,null)}function Eg(e,t){an.C(e,t),Wd("preconnect",e,t)}function kg(e,t,n){an.L(e,t,n);var i=Ni;if(i&&e&&t){var a='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+wt(n.imageSizes)+'"]')):a+='[href="'+wt(e)+'"]';var l=a;switch(t){case"style":l=zi(e);break;case"script":l=Hi(e)}kt.has(l)||(e=B({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),kt.set(l,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Aa(l))||t==="script"&&i.querySelector(Ta(l))||(t=i.createElement("link"),Ve(t,"link",e),qe(t),i.head.appendChild(t)))}}function Rg(e,t){an.m(e,t);var n=Ni;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+wt(i)+'"][href="'+wt(e)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Hi(e)}if(!kt.has(l)&&(e=B({rel:"modulepreload",href:e},t),kt.set(l,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ta(l)))return}i=n.createElement("link"),Ve(i,"link",e),qe(i),n.head.appendChild(i)}}}function Ng(e,t,n){an.S(e,t,n);var i=Ni;if(i&&e){var a=ei(i).hoistableStyles,l=zi(e);t=t||"default";var s=a.get(l);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Aa(l)))o.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kt.get(l))&&$o(e,n);var r=s=i.createElement("link");qe(r),Ve(r,"link",e),r._p=new Promise(function(g,b){r.onload=g,r.onerror=b}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Il(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(l,s)}}}function zg(e,t){an.X(e,t);var n=Ni;if(n&&e){var i=ei(n).hoistableScripts,a=Hi(e),l=i.get(a);l||(l=n.querySelector(Ta(a)),l||(e=B({src:e,async:!0},t),(t=kt.get(a))&&er(e,t),l=n.createElement("script"),qe(l),Ve(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Hg(e,t){an.M(e,t);var n=Ni;if(n&&e){var i=ei(n).hoistableScripts,a=Hi(e),l=i.get(a);l||(l=n.querySelector(Ta(a)),l||(e=B({src:e,async:!0,type:"module"},t),(t=kt.get(a))&&er(e,t),l=n.createElement("script"),qe(l),Ve(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Kd(e,t,n,i){var a=(a=_.current)?ql(a):null;if(!a)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zi(n.href),n=ei(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zi(n.href);var l=ei(a).hoistableStyles,s=l.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=a.querySelector(Aa(e)))&&!l._p&&(s.instance=l,s.state.loading=5),kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kt.set(e,n),l||Bg(a,e,n,s.state))),t&&i===null)throw Error(h(528,""));return s}if(t&&i!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hi(n),n=ei(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function zi(e){return'href="'+wt(e)+'"'}function Aa(e){return'link[rel="stylesheet"]['+e+"]"}function Zd(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Bg(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ve(t,"link",n),qe(t),e.head.appendChild(t))}function Hi(e){return'[src="'+wt(e)+'"]'}function Ta(e){return"script[async]"+e}function Jd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(i)return t.instance=i,qe(i),i;var a=B({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),qe(i),Ve(i,"style",a),Il(i,n.precedence,e),t.instance=i;case"stylesheet":a=zi(n.href);var l=e.querySelector(Aa(a));if(l)return t.state.loading|=4,t.instance=l,qe(l),l;i=Zd(n),(a=kt.get(a))&&$o(i,a),l=(e.ownerDocument||e).createElement("link"),qe(l);var s=l;return s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Ve(l,"link",i),t.state.loading|=4,Il(l,n.precedence,e),t.instance=l;case"script":return l=Hi(n.src),(a=e.querySelector(Ta(l)))?(t.instance=a,qe(a),a):(i=n,(a=kt.get(l))&&(i=B({},n),er(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),qe(a),Ve(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Il(i,n.precedence,e));return t.instance}function Il(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function er(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ol=null;function Fd(e,t,n){if(Ol===null){var i=new Map,a=Ol=new Map;a.set(n,i)}else a=Ol,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a];if(!(l[Gi]||l[Le]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(l):i.set(s,[l])}}return i}function $d(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function eh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ig(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=zi(i.href),l=t.querySelector(Aa(a));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ul.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,qe(l);return}l=t.ownerDocument||t,i=Zd(i),(a=kt.get(a))&&$o(i,a),l=l.createElement("link"),qe(l);var s=l;s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Ve(l,"link",i),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ul.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var tr=0;function Og(e,t){return e.stylesheets&&e.count===0&&Ll(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ll(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&tr===0&&(tr=62500*vg());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ll(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>tr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Ul(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ll(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Ll(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,t.forEach(Ug,e),Gl=null,Ul.call(e))}function Ug(e,t){if(!(t.state.loading&4)){var n=Gl.get(e);if(n)var i=n.get(null);else{n=new Map,Gl.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var s=a[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),l=n.get(s)||i,l===i&&n.set(null,a),n.set(s,a),this.count++,i=Ul.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ca={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Gg(e,t,n,i,a,l,s,o,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.hiddenUpdates=Kl(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function th(e,t,n,i,a,l,s,o,r,g,b,w){return e=new Gg(e,t,n,s,r,g,b,w,o),t=1,l===!0&&(t|=24),l=dt(3,null,null,t),e.current=l,l.stateNode=e,t=Hs(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},Os(l),e}function nh(e){return e?(e=ui,e):ui}function ih(e,t,n,i,a,l){a=nh(a),i.context===null?i.context=a:i.pendingContext=a,i=fn(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=gn(e,i,t),n!==null&&(it(n,e,t),na(n,e,t))}function ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nr(e,t){ah(e,t),(e=e.alternate)&&ah(e,t)}function lh(e){if(e.tag===13||e.tag===31){var t=In(e,67108864);t!==null&&it(t,e,67108864),nr(e,67108864)}}function sh(e){if(e.tag===13||e.tag===31){var t=mt();t=Zl(t);var n=In(e,t);n!==null&&it(n,e,t),nr(e,t)}}var jl=!0;function Lg(e,t,n,i){var a=y.T;y.T=null;var l=x.p;try{x.p=2,ir(e,t,n,i)}finally{x.p=l,y.T=a}}function jg(e,t,n,i){var a=y.T;y.T=null;var l=x.p;try{x.p=8,ir(e,t,n,i)}finally{x.p=l,y.T=a}}function ir(e,t,n,i){if(jl){var a=ar(i);if(a===null)Po(e,t,i,_l,n),rh(e,i);else if(Pg(a,e,t,n,i))i.stopPropagation();else if(rh(e,i),t&4&&-1<_g.indexOf(e)){for(;a!==null;){var l=$n(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Nn(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var r=1<<31-ct(s);o.entanglements[1]|=r,s&=~r}Ut(l),(ie&6)===0&&(Cl=ot()+500,ya(0))}}break;case 31:case 13:o=In(l,2),o!==null&&it(o,l,2),Ml(),nr(l,2)}if(l=ar(i),l===null&&Po(e,t,i,_l,n),l===a)break;a=l}a!==null&&i.stopPropagation()}else Po(e,t,i,null,n)}}function ar(e){return e=ls(e),lr(e)}var _l=null;function lr(e){if(_l=null,e=Fn(e),e!==null){var t=J(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=G(t),e!==null)return e;e=null}else if(n===31){if(e=Te(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _l=e,null}function oh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mh()){case pr:return 2;case mr:return 8;case Na:case Dh:return 32;case vr:return 268435456;default:return 32}default:return 32}}var sr=!1,xn=null,Mn=null,Dn=null,xa=new Map,Ma=new Map,En=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function Da(e,t,n,i,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},t!==null&&(t=$n(t),t!==null&&lh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Pg(e,t,n,i,a){switch(t){case"focusin":return xn=Da(xn,e,t,n,i,a),!0;case"dragenter":return Mn=Da(Mn,e,t,n,i,a),!0;case"mouseover":return Dn=Da(Dn,e,t,n,i,a),!0;case"pointerover":var l=a.pointerId;return xa.set(l,Da(xa.get(l)||null,e,t,n,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Ma.set(l,Da(Ma.get(l)||null,e,t,n,i,a)),!0}return!1}function ch(e){var t=Fn(e.target);if(t!==null){var n=J(t);if(n!==null){if(t=n.tag,t===13){if(t=G(n),t!==null){e.blockedOn=t,Tr(e.priority,function(){sh(n)});return}}else if(t===31){if(t=Te(n),t!==null){e.blockedOn=t,Tr(e.priority,function(){sh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ar(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);as=i,n.target.dispatchEvent(i),as=null}else return t=$n(n),t!==null&&lh(t),e.blockedOn=n,!1;t.shift()}return!0}function uh(e,t,n){Pl(e)&&n.delete(t)}function Vg(){sr=!1,xn!==null&&Pl(xn)&&(xn=null),Mn!==null&&Pl(Mn)&&(Mn=null),Dn!==null&&Pl(Dn)&&(Dn=null),xa.forEach(uh),Ma.forEach(uh)}function Vl(e,t){e.blockedOn===t&&(e.blockedOn=null,sr||(sr=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,Vg)))}var Yl=null;function dh(e){Yl!==e&&(Yl=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(lr(i||n)===null)continue;break}var l=$n(n);l!==null&&(e.splice(t,3),t-=3,io(l,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Bi(e){function t(r){return Vl(r,e)}xn!==null&&Vl(xn,e),Mn!==null&&Vl(Mn,e),Dn!==null&&Vl(Dn,e),xa.forEach(t),Ma.forEach(t);for(var n=0;n<En.length;n++){var i=En[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<En.length&&(n=En[0],n.blockedOn===null);)ch(n),n.blockedOn===null&&En.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],s=a[Je]||null;if(typeof l=="function")s||dh(n);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,s=l[Je]||null)o=s.formAction;else if(lr(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),dh(n)}}}function hh(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function or(e){this._internalRoot=e}Ql.prototype.render=or.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,i=mt();ih(n,i,e,t,null,null)},Ql.prototype.unmount=or.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ih(e.current,2,null,e,null,null),Ml(),t[Jn]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ar();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&ch(e)}};var fh=he.version;if(fh!=="19.2.0")throw Error(h(527,fh,"19.2.0"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var Yg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Ii=Xl.inject(Yg),rt=Xl}catch{}}return ka.createRoot=function(e,t){if(!U(e))throw Error(h(299));var n=!1,i="",a=Su,l=wu,s=Au;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=th(e,1,!1,null,null,n,i,null,a,l,s,hh),e[Jn]=t.current,_o(e),new or(t)},ka.hydrateRoot=function(e,t,n){if(!U(e))throw Error(h(299));var i=!1,a="",l=Su,s=wu,o=Au,r=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),t=th(e,1,!0,t,n??null,i,a,r,l,s,o,hh),t.context=nh(null),n=t.current,i=mt(),i=Zl(i),a=fn(i),a.callback=null,gn(n,a,i),n=i,t.current.lanes=n,Ui(t,n),Ut(t),e[Jn]=t.current,_o(e),new Ql(t)},ka.version="19.2.0",ka}var Th;function tp(){if(Th)return ur.exports;Th=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(he){console.error(he)}}return E(),ur.exports=ep(),ur.exports}var np=tp();const ip=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
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
        `}]}],ap={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0},{question:"Which interface connects the BTS and BSC in GSM?",options:["Um Interface","A Interface","Abis Interface","B Interface"],answer:2},{question:"What is the maximum data rate of GPRS (theoretical)?",options:["9.6 kbps","56 kbps","171.2 kbps","2 Mbps"],answer:2},{question:"Which component in GPRS is equivalent to the MSC in GSM?",options:["GGSN","SGSN","PCU","HLR"],answer:1},{question:"In Mobile Computing, what does 'Ubiquitous Computing' refer to?",options:["Computing that is visible everywhere","Computing that is integrated into the environment and invisible to the user","Computing using only mobile phones","Cloud computing"],answer:1},{question:"What is the function of the Equipment Identity Register (EIR)?",options:["Stores user billing info","Stores the IMEI numbers of valid, stolen, or faulty devices","Stores the current location of the user","Stores SMS messages"],answer:1},{question:"Which multiple access technique does GSM use?",options:["FDMA only","TDMA only","CDMA","Combination of FDMA and TDMA"],answer:3},{question:"What is a 'Cell' in cellular networks?",options:["A battery","The geographic area covered by a single Base Station","A mobile phone","A packet of data"],answer:1}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1},{question:"What is the purpose of the NAV (Network Allocation Vector) in IEEE 802.11?",options:["To route packets","To assign IP addresses","To indicate how long the channel will be busy (Virtual Carrier Sensing)","To encrypt data"],answer:2},{question:"In Mobile IP, what is 'Triangular Routing'?",options:["Routing between 3 routers","The path CN -> HA -> FA -> MN -> CN","A routing loop","Routing using 3 antennas"],answer:1},{question:"Which protocol is used for Agent Discovery in Mobile IP?",options:["ARP","ICMP Router Discovery","DHCP","DNS"],answer:1},{question:"What is 'Minimal Encapsulation' in Mobile IP?",options:["No encryption","A tunneling method with less overhead than IP-in-IP","Sending small packets","Compressing headers"],answer:1},{question:"Which IEEE standard defines Wireless LANs (Wi-Fi)?",options:["802.3","802.15","802.11","802.16"],answer:2},{question:"What is the Near-Far problem primarily associated with?",options:["TDMA","FDMA","CDMA","SDMA"],answer:2},{question:"What is the function of the Foreign Agent (FA)?",options:["It stores the user's permanent profile","It acts as a router on the visited network and delivers packets to the MN","It assigns the Home Address","It manages the radio spectrum"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2},{question:"What is the main disadvantage of I-TCP?",options:["It is slow","It violates end-to-end TCP semantics","It requires new hardware","It doesn't work with IPv6"],answer:1},{question:"What is 'Fast Retransmit' in TCP?",options:["Retransmitting after timeout","Retransmitting after receiving 3 duplicate ACKs","Sending data twice","Using UDP for retransmission"],answer:1},{question:"Which TCP mechanism is designed to distinguish between congestion loss and wireless error loss?",options:["Standard TCP","TCP Reno","Explicit Congestion Notification (ECN) / TCP Westwood","UDP"],answer:2},{question:"In WAP, which layer replaces HTTP?",options:["WAE","WSP (Wireless Session Protocol)","WTP","WDP"],answer:1},{question:"What is a Piconet in Bluetooth?",options:["A large network","A network of up to 8 devices (1 Master, 7 Slaves)","A network of routers","A type of antenna"],answer:1},{question:"Which layer in WAP provides security equivalent to TLS/SSL?",options:["WDP","WTP","WTLS","WAE"],answer:2},{question:"What is the frequency band used by Bluetooth?",options:["5 GHz","900 MHz","2.4 GHz ISM","60 GHz"],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2},{question:"What is 'Data Hoarding'?",options:["Deleting data","Prefetching data into cache before disconnection","Compressing data","Encrypting data"],answer:1},{question:"Which synchronization protocol is 'Pessimistic'?",options:["One that allows conflicts","One that locks data to prevent conflicts","One that uses timestamps","One that uses version vectors"],answer:1},{question:"What is a 'Broadcast Disk'?",options:["A physical disk","A cyclic broadcast of data that simulates a rotating disk","A satellite dish","A CD-ROM"],answer:1},{question:"In the context of Mobile Databases, what is a 'Tentative Transaction'?",options:["A transaction that has been committed","A transaction executed on a disconnected mobile unit that is not yet confirmed by the server","A failed transaction","A read-only transaction"],answer:1},{question:"What is 'Kangaroo Transaction'?",options:["A fast transaction","A transaction that hops from one Base Station to another with the user","A transaction that jumps steps","A large transaction"],answer:1},{question:"What is the primary goal of Caching in mobile computing?",options:["To use more memory","To reduce access latency and bandwidth usage","To increase server load","To slow down the device"],answer:1},{question:"Which strategy is used to maintain cache consistency?",options:["Random Deletion","Invalidation Reports","Formatting","Rebooting"],answer:1}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1},{question:"What is a 'Blackhole Attack' in MANETs?",options:["A physical hole in the device","A malicious node drops all packets it receives","A virus","A power failure"],answer:1},{question:"What does DSR stand for?",options:["Dynamic Source Routing","Direct Source Routing","Distance Source Routing","Dynamic Static Routing"],answer:0},{question:"Which routing protocol uses a 'Height' metric and is loop-free?",options:["AODV","DSR","TORA","DSDV"],answer:2},{question:"What is J2ME primarily used for?",options:["Desktop applications","Server-side scripting","Mobile and embedded applications","Web design"],answer:2},{question:"In J2ME, what is a MIDlet?",options:["A small device","A Java application for mobile devices","A virus","A database"],answer:1},{question:"What is the 'Wormhole Attack'?",options:["Tunneling packets to another location to disrupt routing","Eating data","Creating a loop","Blocking signals"],answer:0},{question:"Which configuration in J2ME is for devices with limited resources (like cell phones)?",options:["CDC (Connected Device Configuration)","CLDC (Connected Limited Device Configuration)","J2SE","J2EE"],answer:1}]},lp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
          `}]}]},sp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 2",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is GPRS?",answer:"<strong>General Packet Radio Service (GPRS)</strong> is a packet-oriented mobile data standard on the 2G and 3G cellular communication network's global system for mobile communications (GSM)."},{unit:"I",id:2,question:"Define Handoff.",answer:"<strong>Handoff</strong> (or Handover) is the process of transferring an ongoing call or data session from one channel connected to the core network to another channel."},{unit:"II",id:3,question:"What is the Near-Far Problem?",answer:"<strong>Explanation:</strong> In CDMA, a strong signal from a near mobile unit masks the weak signal from a far mobile unit at the base station."},{unit:"II",id:4,question:"What is Tunneling?",answer:"<strong>Definition:</strong> Tunneling is a mechanism used to ship a packet to a mobile node. It involves encapsulation of the original IP packet inside another IP packet."},{unit:"III",id:5,question:"What is Mobile TCP?",answer:"<strong>Mobile TCP (M-TCP)</strong> is a protocol designed to handle frequent disconnections. It splits the connection and forces the sender into persist mode during disconnection."},{unit:"III",id:6,question:"Define Caching in Mobile Computing.",answer:"<strong>Caching:</strong> Storing frequently accessed data locally on the mobile device to reduce access latency and bandwidth usage."},{unit:"IV",id:7,question:"What is a Broadcast Disk?",answer:"<strong>Broadcast Disk:</strong> A technique where data is cyclically broadcasted, appearing like a rotating disk to the client. Popular data is repeated more often."},{unit:"IV",id:8,question:"What is Data Synchronization?",answer:"<strong>Definition:</strong> The process of establishing consistency among data from a source to a target data storage and vice versa and the continuous harmonization of the data over time."},{unit:"V",id:9,question:"What is AODV?",answer:"<strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive routing protocol for MANETs that establishes a route to a destination only on demand."},{unit:"V",id:10,question:"What is Service Discovery?",answer:"<strong>Service Discovery:</strong> The automatic detection of devices and services offered by these devices on a computer network."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GPRS Architecture with a neat diagram.",answer:`
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
          `}]}]},op={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 3",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Differentiate between User Mobility and Device Portability.",answer:"<strong>User Mobility:</strong> The user can move between different physical locations and use different devices (e.g., logging into Gmail from any PC).<br/><strong>Device Portability:</strong> The device itself can be moved to different locations while maintaining connectivity (e.g., a smartphone)."},{unit:"I",id:2,question:"What is Spread Spectrum?",answer:"<strong>Spread Spectrum:</strong> A technique where a signal is transmitted on a bandwidth much larger than the frequency content of the original information. This minimizes interference, prevents jamming, and improves security (e.g., CDMA)."},{unit:"II",id:3,question:"What is Frequency Reuse?",answer:"<strong>Frequency Reuse:</strong> The practice of using the same radio frequencies in different geographic areas (cells) that are separated by sufficient distance to avoid interference. This increases the total capacity of the network."},{unit:"II",id:4,question:"Define Agent Advertisement.",answer:"<strong>Agent Advertisement:</strong> A method in Mobile IP where Home Agents (HA) and Foreign Agents (FA) periodically broadcast their presence (using ICMP Router Discovery) to let Mobile Nodes know which network they are currently in."},{unit:"III",id:5,question:"What is Fast Retransmit?",answer:"<strong>Fast Retransmit:</strong> A TCP enhancement where the sender retransmits a packet immediately after receiving 3 duplicate ACKs, without waiting for the timeout timer to expire. It assumes the packet was lost, not delayed."},{unit:"III",id:6,question:"Define Transaction Oriented TCP.",answer:"<strong>T-TCP:</strong> A TCP extension designed to make TCP more efficient for short transactions (request-response). It combines the connection setup (SYN), data transfer, and connection teardown (FIN) into fewer packets."},{unit:"IV",id:7,question:"What is Indexing in data dissemination?",answer:"<strong>Indexing:</strong> A power-saving technique where a directory (index) of data locations is broadcasted before the actual data. Clients read the index, sleep, and wake up only when their desired data arrives."},{unit:"IV",id:8,question:"What is Cache Invalidation?",answer:"<strong>Cache Invalidation:</strong> The process of ensuring data consistency. When data on the server changes, the server must notify clients to remove or mark as invalid their local cached copies."},{unit:"V",id:9,question:"What is a Wormhole Attack?",answer:"<strong>Wormhole Attack:</strong> A severe attack in MANETs where two attackers connected by a high-speed link record packets at one location and replay them at another, creating a false shortcut that disrupts routing."},{unit:"V",id:10,question:"Define J2ME.",answer:"<strong>Java 2 Micro Edition (J2ME):</strong> A Java platform designed for embedded systems and mobile devices (like old Nokias). It provides a lightweight environment (KVM) for running applications with limited memory and processing power."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Discuss the evolution of Mobile Communication from 1G to 5G.",answer:`
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
          `}]}]},rp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 4 (Advanced)",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"What is the Hidden Terminal Problem?",answer:"<strong>Hidden Terminal Problem:</strong> Occurs when two nodes (A and C) can hear the Access Point (B) but cannot hear each other. If both transmit to B simultaneously, a collision occurs at B."},{unit:"I",id:2,question:"Define Multipath Propagation.",answer:"<strong>Multipath Propagation:</strong> A phenomenon where radio signals reach the receiving antenna by two or more paths (reflection, diffraction) causing fading and interference."},{unit:"II",id:3,question:"What is Triangular Routing?",answer:"<strong>Triangular Routing:</strong> The inefficient path a packet takes in Mobile IP: Correspondent -> Home Agent -> Foreign Agent -> Mobile Node, instead of a direct path."},{unit:"II",id:4,question:"Define Slow Start in TCP.",answer:"<strong>Slow Start:</strong> A TCP congestion control algorithm where the sender starts with a small congestion window and doubles it every round-trip time (exponential growth) to gauge network capacity."},{unit:"III",id:5,question:"What is Selective Tuning?",answer:"<strong>Selective Tuning:</strong> A power-saving technique where the mobile device powers on its receiver only for short periods to receive the specific data it requested, staying in 'doze' mode otherwise."},{unit:"III",id:6,question:"Define Hoarding.",answer:"<strong>Hoarding:</strong> Prefetching large amounts of data into the mobile device's cache before a predicted disconnection (e.g., entering a tunnel) to allow continued operation."},{unit:"IV",id:7,question:"What is a ZRP (Zone Routing Protocol)?",answer:"<strong>ZRP:</strong> A hybrid MANET routing protocol. It uses proactive routing within a local 'zone' (neighborhood) and reactive routing for destinations outside the zone."},{unit:"IV",id:8,question:"What is the count-to-infinity problem?",answer:"<strong>Count-to-Infinity:</strong> A routing loop problem in distance-vector protocols where nodes endlessly increment the hop count to a unreachable destination."},{unit:"V",id:9,question:"Define MIDP in J2ME.",answer:"<strong>MIDP (Mobile Information Device Profile):</strong> A J2ME profile that defines the user interface, networking, and storage APIs for mobile phones (MIDlets)."},{unit:"V",id:10,question:"What is Bluetooth profile?",answer:"<strong>Bluetooth Profile:</strong> A specification that defines how devices use Bluetooth to achieve a specific task (e.g., A2DP for audio, HFP for hands-free calling)."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the Hidden and Exposed Terminal Problems in IEEE 802.11 and the solution (MACA).",answer:`
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
          `}]}]},cp=[{category:"🏆 The Golden Answer Framework",tips:[{title:"The Universal 5-Step Structure",content:`
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
        `}]}],up=[{id:1,unit:"I",front:"Mobile Computing Definition",back:`
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
    `}],dp=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit covers the fundamental principles of sensors, their classification, and detailed study of electromechanical sensors like Strain Gauges and Capacitive Sensors.</p>",topics:[{title:"Sensors & Transducers Basics",content:`
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
        `}]}],hp={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1}]},fp={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer.",answer:"Sensor detects physical parameter. Transducer converts energy form."},{id:2,question:"What is Gauge Factor?",answer:"Sensitivity of strain gauge. GF = (dR/R)/strain."},{id:3,question:"State Seebeck Effect.",answer:"EMF generation at junction of dissimilar metals due to temp diff."},{id:4,question:"What is a Thermistor?",answer:"Resistor with high negative temp coefficient."},{id:5,question:"Define Hall Effect.",answer:"Voltage generation perpendicular to current and magnetic field."},{id:6,question:"What is LVDT?",answer:"Linear Variable Differential Transformer for displacement."},{id:7,question:"What is LDR?",answer:"Light Dependent Resistor."},{id:8,question:"Define SHE.",answer:"Standard Hydrogen Electrode (0V reference)."},{id:9,question:"What is a Smart Sensor?",answer:"Sensor with built-in processing and communication."},{id:10,question:"List 2 automotive sensors.",answer:"ABS sensor, Airbag sensor."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the working principle of Strain Gauge.",answer:"Detailed explanation of piezoresistive effect..."},{question:"Describe Capacitive Transducers.",answer:"Principle C=eA/d and applications..."}]}]},gp=[{category:"Sensor Diagrams",tips:[{title:"Draw the Block Diagram",content:"For any sensor (e.g., Smart Sensor), always draw: **Input -> Sensing Element -> Signal Conditioning -> ADC -> Output**."}]}],pp=[{id:1,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>Device converting energy from one form to another.</p></div>'},{id:2,unit:"I",front:"Gauge Factor",back:'<div class="fc-content"><p>Sensitivity of Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong></p></div>'},{id:3,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Generation of EMF when two dissimilar metals are kept at different temperatures.</p></div>'},{id:4,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Voltage generated perpendicular to both current and magnetic field.</p></div>'},{id:5,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>Sensor + Signal Conditioning + ADC + Processor.</p></div>'}],mp=[{unit:"I",title:"Professional Practice and Ethics",notes:"<h3>Unit I Overview</h3><p>This unit lays the foundation for ethical practice in engineering, distinguishing between personal and professional ethics, and defining the core responsibilities and liabilities of a professional.</p>",topics:[{title:"Definition of Professional Ethics",content:`
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
        `}]}],vp={I:[{id:1,question:"What is the primary focus of Engineering Ethics?",options:["Profit Maximization","Public Safety","Personal Gain","Corporate Loyalty"],answer:1}],II:[],III:[],IV:[],V:[]},yp={title:"Professional Practice, Law & Ethics - Model Paper 1",subject:"Professional Practice, Law & Ethics",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Professional Ethics.",answer:"<strong>Professional Ethics</strong> refers to the personal and corporate rules that govern behavior within the context of a particular profession. It involves principles of conduct, integrity, and responsibility towards the public, clients, and employers."},{id:2,question:"What is the main objective of Engineering Ethics?",answer:"The main objective is to ensure that engineers uphold the highest standards of integrity and prioritize the <strong>safety, health, and welfare of the public</strong> in the performance of their professional duties."},{id:3,question:"Define a 'Contract' as per the Indian Contract Act, 1872.",answer:"According to Section 2(h) of the Indian Contract Act, 1872, a <strong>Contract</strong> is an agreement enforceable by law. <br><em>Formula: Contract = Agreement + Enforceability.</em>"},{id:4,question:"What is meant by 'Quid Pro Quo' in a contract?",answer:"<strong>Quid Pro Quo</strong> means 'something in return'. In legal terms, it refers to <strong>Consideration</strong>, which is an essential element of a valid contract. Without consideration, a contract is generally void."},{id:5,question:"Define Arbitration.",answer:"<strong>Arbitration</strong> is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute."},{id:6,question:"What is an Arbitral Award?",answer:"An <strong>Arbitral Award</strong> is the final decision or judgment given by the arbitration tribunal. It is binding on the parties and is enforceable in the same manner as a court decree."},{id:7,question:"What is the purpose of the Industrial Employment (Standing Orders) Act, 1946?",answer:"Its purpose is to require employers in industrial establishments to formally define conditions of employment (standing orders) and make them known to workmen to prevent ambiguity and disputes."},{id:8,question:"Define 'Workman' under the Workmen's Compensation Act.",answer:"A <strong>Workman</strong> is any person (other than a person whose employment is of a casual nature) who is employed for the purposes of the employer's trade or business."},{id:9,question:"What does IPR stand for? Give two examples.",answer:"<strong>IPR</strong> stands for <strong>Intellectual Property Rights</strong>. Examples include: <br>1. <strong>Patents</strong> (for inventions). <br>2. <strong>Copyrights</strong> (for literary/artistic works)."},{id:10,question:"What is the validity period of a Patent in India?",answer:"The term of every patent granted in India is <strong>20 years</strong> from the date of filing of the application."}],partB:[{unit:"I",questionNumber:2,choices:[{question:"Explain the difference between Personal Ethics and Professional Ethics with suitable examples. Discuss the concept of Professional Responsibility.",answer:`
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
          `}]}]},bp=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],Sp=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}];function wp(){const[E,he]=He.useState(null),h=E==="sensors"?{title:"Electronic Sensors",syllabus:dp,quizzes:hp,papers:[fp],tips:gp,flashcards:pp,progressKey:"electronicSensorsProgress"}:E==="pple"?{title:"Professional Practice, Law & Ethics",syllabus:mp,quizzes:vp,papers:[yp],tips:bp,flashcards:Sp,progressKey:"ppleProgress"}:{title:"Mobile Computing",syllabus:ip,quizzes:ap,papers:[lp,sp,op,rp],tips:cp,flashcards:up,progressKey:"mobileComputingProgress"},[U,J]=He.useState(null),[G,Te]=He.useState(null),[R,T]=He.useState("study"),[V,B]=He.useState(0),[ne,ke]=He.useState(0),[Ye,Se]=He.useState(!1),[Oe,Qe]=He.useState([]),[Ue,Ce]=He.useState({}),[Ke,at]=He.useState(0),[Re,P]=He.useState({}),[Ge,lt]=He.useState({}),[Bt,st]=He.useState(null),[Ne,vt]=He.useState(0),[yt,Xe]=He.useState(!1),[y,x]=He.useState([]),[z,$]=He.useState(0);He.useEffect(()=>{if(E){const C=localStorage.getItem(h.progressKey);Ce(C?JSON.parse(C):{}),T("study"),J(null),Te(null),x([...h.flashcards]),vt(0),at(0)}},[E,h.progressKey,h.flashcards]);const le=(C,X,fe)=>{const bt=Ue[C]?.score||0;if(X>bt){const Zn={...Ue,[C]:{score:X,total:fe}};Ce(Zn),localStorage.setItem(h.progressKey,JSON.stringify(Zn))}},u=C=>{J(U===C?null:C)},A=C=>st(C),M=()=>st(null),k=C=>{h.quizzes[C]?(Te(C),B(0),ke(0),Se(!1)):alert("Quiz coming soon for this unit!")},I=()=>{let C=[];Object.values(h.quizzes).forEach(bt=>{C=[...C,...bt]});const fe=C.sort(()=>.5-Math.random()).slice(0,10);Qe(fe),Te("FINAL"),B(0),ke(0),Se(!1)},_=C=>{let X=!1;const fe=G==="FINAL"?Oe:h.quizzes[G];C===fe[V].answer&&(X=!0),X&&ke(ne+1);const bt=V+1;bt<fe.length?B(bt):(Se(!0),le(G,X?ne+1:ne,fe.length))},F=()=>{Te(null),B(0),ke(0),Se(!1),Qe([])},Be=C=>{P(X=>({...X,[C]:!X[C]}))},me=(C,X)=>{lt(fe=>({...fe,[C]:X}))},Rn=C=>{at(C),P({}),lt({}),window.scrollTo(0,0)},Kn=()=>{Xe(!1),setTimeout(()=>vt(C=>(C+1)%y.length),200)},qi=()=>{Xe(!1),setTimeout(()=>vt(C=>(C-1+y.length)%y.length),200)},Ra=()=>Xe(!yt),Gt=()=>{Xe(!1),setTimeout(()=>{const C=[...h.flashcards].sort(()=>.5-Math.random());x(C),vt(0)},200)};if(!E)return p.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[p.jsx("h1",{children:"Select Your Subject"}),p.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[p.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>he("mobile"),children:[p.jsx("h2",{children:"📱 Mobile Computing"}),p.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),p.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),p.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>he("sensors"),children:[p.jsx("h2",{children:"🌡️ Electronic Sensors"}),p.jsx("p",{children:"Unit I - V, Open Elective-II"}),p.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),p.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>he("pple"),children:[p.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),p.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),p.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const Rt=h.papers[Ke];return p.jsxs("div",{className:"container",children:[p.jsxs("header",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[p.jsx("button",{className:"btn",onClick:()=>he(null),children:"← Switch Subject"}),p.jsx("span",{className:"unit-badge",children:h.title})]}),p.jsxs("h1",{children:[h.title," Prep"]}),p.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),p.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[p.jsx("button",{className:`btn ${R==="study"?"btn-primary":""}`,onClick:()=>T("study"),children:"Study Mode"}),p.jsx("button",{className:`btn ${R==="paper"?"btn-primary":""}`,onClick:()=>T("paper"),children:"Model Papers"}),p.jsx("button",{className:`btn ${R==="tips"?"btn-primary":""}`,onClick:()=>T("tips"),children:"Exam Tips"}),p.jsx("button",{className:`btn ${R==="flashcards"?"btn-primary":""}`,onClick:()=>T("flashcards"),children:"Flashcards"})]}),R==="study"&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:I,children:"Start Final Exam (Mixed)"}),Ue.FINAL&&p.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Ue.FINAL.score,"/",Ue.FINAL.total]})]})]}),R==="study"&&p.jsx("main",{className:"grid",children:h.syllabus.map(C=>p.jsxs("div",{className:"card",children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("span",{className:"unit-badge",children:["Unit ",C.unit]}),Ue[C.unit]&&p.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Ue[C.unit].score,"/",Ue[C.unit].total]})]}),p.jsx("h2",{children:C.title}),U===C.unit&&C.notes?p.jsx("div",{className:"notes-content",children:p.jsx("div",{dangerouslySetInnerHTML:{__html:C.notes}})}):p.jsxs("div",{className:"topics-list-container",children:[p.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),p.jsx("div",{className:"topics-grid",children:C.topics.map((X,fe)=>p.jsx("button",{className:"topic-btn",onClick:()=>A(X),children:X.title},fe))})]}),p.jsxs("div",{className:"actions",children:[p.jsx("button",{className:`btn ${U===C.unit?"btn-primary":""}`,onClick:()=>C.notes?u(C.unit):alert("Notes coming soon!"),children:U===C.unit?"Hide Overview":"Unit Overview"}),p.jsx("button",{className:"btn btn-primary",onClick:()=>k(C.unit),children:"Take Quiz"})]})]},C.unit))}),R==="paper"&&p.jsxs("main",{className:"paper-container",children:[p.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:h.papers.map((C,X)=>p.jsxs("button",{className:`btn ${Ke===X?"btn-primary":""}`,onClick:()=>Rn(X),children:["Paper Set ",X+1]},X))}),p.jsxs("div",{className:"paper-header",children:[p.jsx("h2",{children:Rt.title}),p.jsx("h3",{children:Rt.subject}),p.jsxs("div",{className:"paper-meta",children:[p.jsxs("span",{children:["Time: ",Rt.time]}),p.jsxs("span",{children:["Max Marks: ",Rt.maxMarks]})]})]}),p.jsxs("div",{className:"paper-section",children:[p.jsx("h3",{children:"PART-A (Short Answer Questions)"}),p.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),p.jsx("div",{className:"questions-list",children:Rt.partA.map(C=>p.jsxs("div",{className:"question-item",children:[p.jsxs("div",{className:"question-text",children:[p.jsxs("strong",{children:[C.id,"."]})," ",C.question," ",p.jsx("span",{className:"marks",children:"[1M]"})]}),p.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:Ge[`A-${C.id}`]||"",onChange:X=>me(`A-${C.id}`,X.target.value)}),p.jsx("button",{className:"btn-text",onClick:()=>Be(`A-${C.id}`),children:Re[`A-${C.id}`]?"Hide Model Answer":"Show Model Answer"}),Re[`A-${C.id}`]&&p.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:C.answer}})]},C.id))})]}),Rt.partB&&p.jsxs("div",{className:"paper-section",children:[p.jsx("h3",{children:"PART-B (Long Answer Questions)"}),p.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),p.jsx("div",{className:"questions-list",children:Rt.partB.map(C=>p.jsxs("div",{className:"question-group",children:[p.jsxs("h4",{children:["Unit ",C.unit]}),C.choices.map((X,fe)=>p.jsxs("div",{children:[p.jsxs("div",{className:"question-item",children:[p.jsxs("div",{className:"question-text",children:[p.jsxs("strong",{children:[C.questionNumber," (",String.fromCharCode(97+fe),")."]})," ",X.question," ",p.jsx("span",{className:"marks",children:"[10M]"})]}),p.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:Ge[`B-${C.questionNumber}${fe}`]||"",onChange:bt=>me(`B-${C.questionNumber}${fe}`,bt.target.value)}),p.jsx("button",{className:"btn-text",onClick:()=>Be(`B-${C.questionNumber}${fe}`),children:Re[`B-${C.questionNumber}${fe}`]?"Hide Model Answer":"Show Model Answer"}),Re[`B-${C.questionNumber}${fe}`]&&p.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:X.answer}})]}),fe===0&&p.jsx("div",{className:"or-divider",children:"OR"})]},fe))]},C.questionNumber))})]})]}),R==="tips"&&p.jsxs("main",{className:"tips-container-pro",children:[p.jsxs("div",{className:"tips-sidebar",children:[p.jsx("h3",{children:"Exam Strategy"}),p.jsx("ul",{children:h.tips.map((C,X)=>p.jsxs("li",{className:z===X?"active":"",onClick:()=>$(X),children:[C.category.split(" ")[0]," ",p.jsx("span",{className:"sidebar-subtitle",children:C.category})]},X))})]}),p.jsxs("div",{className:"tips-content-area",children:[p.jsxs("div",{className:"tips-header-pro",children:[p.jsx("h2",{children:h.tips[z].category}),p.jsx("div",{className:"progress-bar",children:p.jsx("div",{className:"progress-fill",style:{width:`${(z+1)/h.tips.length*100}%`}})})]}),p.jsx("div",{className:"tips-cards-pro",children:h.tips[z].tips.map((C,X)=>p.jsxs("div",{className:"tip-card-pro",children:[p.jsx("div",{className:"tip-icon-pro",children:X+1}),p.jsxs("div",{className:"tip-text-pro",children:[p.jsx("h4",{children:C.title}),p.jsx("div",{dangerouslySetInnerHTML:{__html:C.content}})]})]},X))}),p.jsxs("div",{className:"tips-navigation",children:[p.jsx("button",{className:"btn",disabled:z===0,onClick:()=>$(C=>C-1),children:"← Previous"}),p.jsxs("span",{className:"page-indicator",children:[z+1," of ",h.tips.length]}),p.jsx("button",{className:"btn btn-primary",disabled:z===h.tips.length-1,onClick:()=>$(C=>C+1),children:"Next →"})]})]})]}),R==="flashcards"&&y.length>0&&p.jsxs("main",{className:"flashcard-container",children:[p.jsxs("div",{className:"flashcard-header",children:[p.jsx("h2",{children:"Interactive Flashcards"}),p.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),p.jsx("div",{className:"flashcard-scene",children:p.jsxs("div",{className:`flashcard ${yt?"flipped":""}`,onClick:Ra,children:[p.jsxs("div",{className:"flashcard-face flashcard-front",children:[p.jsxs("span",{className:"card-unit",children:["Unit ",y[Ne].unit]}),p.jsx("h3",{children:y[Ne].front}),p.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),p.jsx("div",{className:"flashcard-face flashcard-back",children:p.jsx("div",{dangerouslySetInnerHTML:{__html:y[Ne].back}})})]})}),p.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[p.jsx("button",{className:"btn btn-primary",onClick:qi,children:"← Previous"}),p.jsxs("span",{className:"card-count",children:[Ne+1," / ",y.length]}),p.jsx("button",{className:"btn btn-primary",onClick:Kn,children:"Next →"})]}),p.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:p.jsx("button",{className:"btn btn-primary",onClick:Gt,children:"Shuffle Cards"})})]}),G&&p.jsx("div",{className:"quiz-overlay",children:p.jsxs("div",{className:"quiz-card",children:[p.jsx("button",{className:"close-btn",onClick:F,style:{position:"absolute",right:"1.5rem",top:"1.5rem",zIndex:10},children:"×"}),Ye?p.jsxs("div",{className:"score-container",children:[p.jsx("div",{className:"score-circle",style:{"--score-percent":`${ne/(G==="FINAL"?Oe.length:h.quizzes[G].length)*100}%`},children:p.jsxs("div",{className:"score-text",children:[p.jsx("span",{className:"score-number",children:ne}),p.jsxs("span",{className:"score-total",children:["of ",G==="FINAL"?Oe.length:h.quizzes[G].length]})]})}),p.jsx("h2",{className:"score-message",children:ne/(G==="FINAL"?Oe.length:h.quizzes[G].length)>.7?"Excellent Work! 🎉":"Keep Practicing! 💪"}),p.jsxs("p",{className:"score-submessage",children:["You've completed the ",G==="FINAL"?"Final Exam":`Unit ${G}`," quiz."]}),p.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[p.jsx("button",{className:"btn btn-outline",onClick:F,children:"Close"}),p.jsx("button",{className:"btn btn-primary",onClick:()=>{Se(!1),B(0),ke(0)},children:"Try Again"})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"quiz-header",children:[p.jsxs("div",{className:"quiz-meta",children:[p.jsx("span",{children:G==="FINAL"?"Final Exam":`Unit ${G} Quiz`}),p.jsxs("span",{children:["Question ",V+1," / ",G==="FINAL"?Oe.length:h.quizzes[G].length]})]}),p.jsx("div",{className:"quiz-progress-track",children:p.jsx("div",{className:"quiz-progress-fill",style:{width:`${(V+1)/(G==="FINAL"?Oe.length:h.quizzes[G].length)*100}%`}})})]}),p.jsx("div",{className:"quiz-content",children:(()=>{const C=G==="FINAL"?Oe:h.quizzes[G];return p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"quiz-question",children:C[V].question}),p.jsx("div",{className:"quiz-options",children:C[V].options.map((X,fe)=>p.jsx("button",{className:"quiz-option-btn",onClick:()=>_(fe),children:X},fe))})]})})()})]})]})}),Bt&&p.jsx("div",{className:"modal-overlay",children:p.jsxs("div",{className:"modal-content topic-modal",children:[p.jsx("button",{className:"close-btn",onClick:M,children:"×"}),p.jsxs("div",{className:"topic-content",children:[p.jsx("h2",{children:Bt.title}),p.jsx("div",{dangerouslySetInnerHTML:{__html:Bt.content}})]}),p.jsx("button",{className:"btn btn-primary",onClick:M,style:{marginTop:"2rem"},children:"Close"})]})})]})}np.createRoot(document.getElementById("root")).render(p.jsx(He.StrictMode,{children:p.jsx(wp,{})}));
