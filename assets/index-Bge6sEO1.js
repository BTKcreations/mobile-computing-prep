(function(){const ht=document.createElement("link").relList;if(ht&&ht.supports&&ht.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))f(_);new MutationObserver(_=>{for(const J of _)if(J.type==="childList")for(const P of J.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&f(P)}).observe(document,{childList:!0,subtree:!0});function at(_){const J={};return _.integrity&&(J.integrity=_.integrity),_.referrerPolicy&&(J.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?J.credentials="include":_.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function f(_){if(_.ep)return;_.ep=!0;const J=at(_);fetch(_.href,J)}})();var rr={exports:{}},Ea={};var mf;function Zg(){if(mf)return Ea;mf=1;var R=Symbol.for("react.transitional.element"),ht=Symbol.for("react.fragment");function at(f,_,J){var P=null;if(J!==void 0&&(P=""+J),_.key!==void 0&&(P=""+_.key),"key"in _){J={};for(var Tt in _)Tt!=="key"&&(J[Tt]=_[Tt])}else J=_;return _=J.ref,{$$typeof:R,type:f,key:P,ref:_!==void 0?_:null,props:J}}return Ea.Fragment=ht,Ea.jsx=at,Ea.jsxs=at,Ea}var pf;function Kg(){return pf||(pf=1,rr.exports=Zg()),rr.exports}var v=Kg(),ur={exports:{}},k={};var vf;function Jg(){if(vf)return k;vf=1;var R=Symbol.for("react.transitional.element"),ht=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),P=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),lt=Symbol.iterator;function Ot(c){return c===null||typeof c!="object"?null:(c=lt&&c[lt]||c["@@iterator"],typeof c=="function"?c:null)}var Yt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wt=Object.assign,Pt={};function Qt(c,T,D){this.props=c,this.context=T,this.refs=Pt,this.updater=D||Yt}Qt.prototype.isReactComponent={},Qt.prototype.setState=function(c,T){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,T,"setState")},Qt.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Ut(){}Ut.prototype=Qt.prototype;function Ct(c,T,D){this.props=c,this.context=T,this.refs=Pt,this.updater=D||Yt}var Kt=Ct.prototype=new Ut;Kt.constructor=Ct,wt(Kt,Qt.prototype),Kt.isPureReactComponent=!0;var ae=Array.isArray;function xt(){}var I={H:null,A:null,T:null,S:null},kt=Object.prototype.hasOwnProperty;function le(c,T,D){var x=D.ref;return{$$typeof:R,type:c,key:T,ref:x!==void 0?x:null,props:D}}function qe(c,T){return le(c.type,T,c.props)}function se(c){return typeof c=="object"&&c!==null&&c.$$typeof===R}function zt(c){var T={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(D){return T[D]})}var ve=/\/+/g;function ye(c,T){return typeof c=="object"&&c!==null&&c.key!=null?zt(""+c.key):T.toString(36)}function Xt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(xt,xt):(c.status="pending",c.then(function(T){c.status==="pending"&&(c.status="fulfilled",c.value=T)},function(T){c.status==="pending"&&(c.status="rejected",c.reason=T)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function y(c,T,D,x,U){var L=typeof c;(L==="undefined"||L==="boolean")&&(c=null);var W=!1;if(c===null)W=!0;else switch(L){case"bigint":case"string":case"number":W=!0;break;case"object":switch(c.$$typeof){case R:case ht:W=!0;break;case Q:return W=c._init,y(W(c._payload),T,D,x,U)}}if(W)return U=U(c),W=x===""?"."+ye(c,0):x,ae(U)?(D="",W!=null&&(D=W.replace(ve,"$&/")+"/"),y(U,T,D,"",function(xn){return xn})):U!=null&&(se(U)&&(U=qe(U,D+(U.key==null||c&&c.key===U.key?"":(""+U.key).replace(ve,"$&/")+"/")+W)),T.push(U)),1;W=0;var _t=x===""?".":x+":";if(ae(c))for(var vt=0;vt<c.length;vt++)x=c[vt],L=_t+ye(x,vt),W+=y(x,T,D,L,U);else if(vt=Ot(c),typeof vt=="function")for(c=vt.call(c),vt=0;!(x=c.next()).done;)x=x.value,L=_t+ye(x,vt++),W+=y(x,T,D,L,U);else if(L==="object"){if(typeof c.then=="function")return y(Xt(c),T,D,x,U);throw T=String(c),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return W}function M(c,T,D){if(c==null)return c;var x=[],U=0;return y(c,x,"","",function(L){return T.call(D,L,U++)}),x}function B(c){if(c._status===-1){var T=c._result;T=T(),T.then(function(D){(c._status===0||c._status===-1)&&(c._status=1,c._result=D)},function(D){(c._status===0||c._status===-1)&&(c._status=2,c._result=D)}),c._status===-1&&(c._status=0,c._result=T)}if(c._status===1)return c._result.default;throw c._result}var nt=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},st={map:M,forEach:function(c,T,D){M(c,function(){T.apply(this,arguments)},D)},count:function(c){var T=0;return M(c,function(){T++}),T},toArray:function(c){return M(c,function(T){return T})||[]},only:function(c){if(!se(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return k.Activity=q,k.Children=st,k.Component=Qt,k.Fragment=at,k.Profiler=_,k.PureComponent=Ct,k.StrictMode=f,k.Suspense=z,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,k.__COMPILER_RUNTIME={__proto__:null,c:function(c){return I.H.useMemoCache(c)}},k.cache=function(c){return function(){return c.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(c,T,D){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var x=wt({},c.props),U=c.key;if(T!=null)for(L in T.key!==void 0&&(U=""+T.key),T)!kt.call(T,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&T.ref===void 0||(x[L]=T[L]);var L=arguments.length-2;if(L===1)x.children=D;else if(1<L){for(var W=Array(L),_t=0;_t<L;_t++)W[_t]=arguments[_t+2];x.children=W}return le(c.type,U,x)},k.createContext=function(c){return c={$$typeof:P,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:J,_context:c},c},k.createElement=function(c,T,D){var x,U={},L=null;if(T!=null)for(x in T.key!==void 0&&(L=""+T.key),T)kt.call(T,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(U[x]=T[x]);var W=arguments.length-2;if(W===1)U.children=D;else if(1<W){for(var _t=Array(W),vt=0;vt<W;vt++)_t[vt]=arguments[vt+2];U.children=_t}if(c&&c.defaultProps)for(x in W=c.defaultProps,W)U[x]===void 0&&(U[x]=W[x]);return le(c,L,U)},k.createRef=function(){return{current:null}},k.forwardRef=function(c){return{$$typeof:Tt,render:c}},k.isValidElement=se,k.lazy=function(c){return{$$typeof:Q,_payload:{_status:-1,_result:c},_init:B}},k.memo=function(c,T){return{$$typeof:w,type:c,compare:T===void 0?null:T}},k.startTransition=function(c){var T=I.T,D={};I.T=D;try{var x=c(),U=I.S;U!==null&&U(D,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(xt,nt)}catch(L){nt(L)}finally{T!==null&&D.types!==null&&(T.types=D.types),I.T=T}},k.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},k.use=function(c){return I.H.use(c)},k.useActionState=function(c,T,D){return I.H.useActionState(c,T,D)},k.useCallback=function(c,T){return I.H.useCallback(c,T)},k.useContext=function(c){return I.H.useContext(c)},k.useDebugValue=function(){},k.useDeferredValue=function(c,T){return I.H.useDeferredValue(c,T)},k.useEffect=function(c,T){return I.H.useEffect(c,T)},k.useEffectEvent=function(c){return I.H.useEffectEvent(c)},k.useId=function(){return I.H.useId()},k.useImperativeHandle=function(c,T,D){return I.H.useImperativeHandle(c,T,D)},k.useInsertionEffect=function(c,T){return I.H.useInsertionEffect(c,T)},k.useLayoutEffect=function(c,T){return I.H.useLayoutEffect(c,T)},k.useMemo=function(c,T){return I.H.useMemo(c,T)},k.useOptimistic=function(c,T){return I.H.useOptimistic(c,T)},k.useReducer=function(c,T,D){return I.H.useReducer(c,T,D)},k.useRef=function(c){return I.H.useRef(c)},k.useState=function(c){return I.H.useState(c)},k.useSyncExternalStore=function(c,T,D){return I.H.useSyncExternalStore(c,T,D)},k.useTransition=function(){return I.H.useTransition()},k.version="19.2.0",k}var yf;function gr(){return yf||(yf=1,ur.exports=Jg()),ur.exports}var Bt=gr(),cr={exports:{}},Ra={},dr={exports:{}},fr={};var bf;function Pg(){return bf||(bf=1,(function(R){function ht(y,M){var B=y.length;y.push(M);t:for(;0<B;){var nt=B-1>>>1,st=y[nt];if(0<_(st,M))y[nt]=M,y[B]=st,B=nt;else break t}}function at(y){return y.length===0?null:y[0]}function f(y){if(y.length===0)return null;var M=y[0],B=y.pop();if(B!==M){y[0]=B;t:for(var nt=0,st=y.length,c=st>>>1;nt<c;){var T=2*(nt+1)-1,D=y[T],x=T+1,U=y[x];if(0>_(D,B))x<st&&0>_(U,D)?(y[nt]=U,y[x]=B,nt=x):(y[nt]=D,y[T]=B,nt=T);else if(x<st&&0>_(U,B))y[nt]=U,y[x]=B,nt=x;else break t}}return M}function _(y,M){var B=y.sortIndex-M.sortIndex;return B!==0?B:y.id-M.id}if(R.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;R.unstable_now=function(){return J.now()}}else{var P=Date,Tt=P.now();R.unstable_now=function(){return P.now()-Tt}}var z=[],w=[],Q=1,q=null,lt=3,Ot=!1,Yt=!1,wt=!1,Pt=!1,Qt=typeof setTimeout=="function"?setTimeout:null,Ut=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function Kt(y){for(var M=at(w);M!==null;){if(M.callback===null)f(w);else if(M.startTime<=y)f(w),M.sortIndex=M.expirationTime,ht(z,M);else break;M=at(w)}}function ae(y){if(wt=!1,Kt(y),!Yt)if(at(z)!==null)Yt=!0,xt||(xt=!0,zt());else{var M=at(w);M!==null&&Xt(ae,M.startTime-y)}}var xt=!1,I=-1,kt=5,le=-1;function qe(){return Pt?!0:!(R.unstable_now()-le<kt)}function se(){if(Pt=!1,xt){var y=R.unstable_now();le=y;var M=!0;try{t:{Yt=!1,wt&&(wt=!1,Ut(I),I=-1),Ot=!0;var B=lt;try{e:{for(Kt(y),q=at(z);q!==null&&!(q.expirationTime>y&&qe());){var nt=q.callback;if(typeof nt=="function"){q.callback=null,lt=q.priorityLevel;var st=nt(q.expirationTime<=y);if(y=R.unstable_now(),typeof st=="function"){q.callback=st,Kt(y),M=!0;break e}q===at(z)&&f(z),Kt(y)}else f(z);q=at(z)}if(q!==null)M=!0;else{var c=at(w);c!==null&&Xt(ae,c.startTime-y),M=!1}}break t}finally{q=null,lt=B,Ot=!1}M=void 0}}finally{M?zt():xt=!1}}}var zt;if(typeof Ct=="function")zt=function(){Ct(se)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ye=ve.port2;ve.port1.onmessage=se,zt=function(){ye.postMessage(null)}}else zt=function(){Qt(se,0)};function Xt(y,M){I=Qt(function(){y(R.unstable_now())},M)}R.unstable_IdlePriority=5,R.unstable_ImmediatePriority=1,R.unstable_LowPriority=4,R.unstable_NormalPriority=3,R.unstable_Profiling=null,R.unstable_UserBlockingPriority=2,R.unstable_cancelCallback=function(y){y.callback=null},R.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):kt=0<y?Math.floor(1e3/y):5},R.unstable_getCurrentPriorityLevel=function(){return lt},R.unstable_next=function(y){switch(lt){case 1:case 2:case 3:var M=3;break;default:M=lt}var B=lt;lt=M;try{return y()}finally{lt=B}},R.unstable_requestPaint=function(){Pt=!0},R.unstable_runWithPriority=function(y,M){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var B=lt;lt=y;try{return M()}finally{lt=B}},R.unstable_scheduleCallback=function(y,M,B){var nt=R.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?nt+B:nt):B=nt,y){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=B+st,y={id:Q++,callback:M,priorityLevel:y,startTime:B,expirationTime:st,sortIndex:-1},B>nt?(y.sortIndex=B,ht(w,y),at(z)===null&&y===at(w)&&(wt?(Ut(I),I=-1):wt=!0,Xt(ae,B-nt))):(y.sortIndex=st,ht(z,y),Yt||Ot||(Yt=!0,xt||(xt=!0,zt()))),y},R.unstable_shouldYield=qe,R.unstable_wrapCallback=function(y){var M=lt;return function(){var B=lt;lt=M;try{return y.apply(this,arguments)}finally{lt=B}}}})(fr)),fr}var Sf;function Wg(){return Sf||(Sf=1,dr.exports=Pg()),dr.exports}var hr={exports:{}},Zt={};var Af;function Fg(){if(Af)return Zt;Af=1;var R=gr();function ht(z){var w="https://react.dev/errors/"+z;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)w+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+z+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function at(){}var f={d:{f:at,r:function(){throw Error(ht(522))},D:at,C:at,L:at,m:at,X:at,S:at,M:at},p:0,findDOMNode:null},_=Symbol.for("react.portal");function J(z,w,Q){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:q==null?null:""+q,children:z,containerInfo:w,implementation:Q}}var P=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tt(z,w){if(z==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Zt.createPortal=function(z,w){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(ht(299));return J(z,w,null,Q)},Zt.flushSync=function(z){var w=P.T,Q=f.p;try{if(P.T=null,f.p=2,z)return z()}finally{P.T=w,f.p=Q,f.d.f()}},Zt.preconnect=function(z,w){typeof z=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,f.d.C(z,w))},Zt.prefetchDNS=function(z){typeof z=="string"&&f.d.D(z)},Zt.preinit=function(z,w){if(typeof z=="string"&&w&&typeof w.as=="string"){var Q=w.as,q=Tt(Q,w.crossOrigin),lt=typeof w.integrity=="string"?w.integrity:void 0,Ot=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;Q==="style"?f.d.S(z,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:q,integrity:lt,fetchPriority:Ot}):Q==="script"&&f.d.X(z,{crossOrigin:q,integrity:lt,fetchPriority:Ot,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Zt.preinitModule=function(z,w){if(typeof z=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var Q=Tt(w.as,w.crossOrigin);f.d.M(z,{crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&f.d.M(z)},Zt.preload=function(z,w){if(typeof z=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var Q=w.as,q=Tt(Q,w.crossOrigin);f.d.L(z,Q,{crossOrigin:q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Zt.preloadModule=function(z,w){if(typeof z=="string")if(w){var Q=Tt(w.as,w.crossOrigin);f.d.m(z,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else f.d.m(z)},Zt.requestFormReset=function(z){f.d.r(z)},Zt.unstable_batchedUpdates=function(z,w){return z(w)},Zt.useFormState=function(z,w,Q){return P.H.useFormState(z,w,Q)},Zt.useFormStatus=function(){return P.H.useHostTransitionStatus()},Zt.version="19.2.0",Zt}var Tf;function $g(){if(Tf)return hr.exports;Tf=1;function R(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R)}catch(ht){console.error(ht)}}return R(),hr.exports=Fg(),hr.exports}var wf;function tm(){if(wf)return Ra;wf=1;var R=Wg(),ht=gr(),at=$g();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function J(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(J(t)!==t)throw Error(f(188))}function w(t){var e=t.alternate;if(!e){if(e=J(t),e===null)throw Error(f(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return z(a),t;if(l===i)return z(a),e;l=l.sibling}throw Error(f(188))}if(n.return!==i.return)n=a,i=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=l;break}if(o===i){s=!0,i=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,i=a;break}if(o===i){s=!0,i=l,n=a;break}o=o.sibling}if(!s)throw Error(f(189))}}if(n.alternate!==i)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?t:e}function Q(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Q(t),e!==null)return e;t=t.sibling}return null}var q=Object.assign,lt=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),Yt=Symbol.for("react.portal"),wt=Symbol.for("react.fragment"),Pt=Symbol.for("react.strict_mode"),Qt=Symbol.for("react.profiler"),Ut=Symbol.for("react.consumer"),Ct=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),xt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),qe=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function zt(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wt:return"Fragment";case Qt:return"Profiler";case Pt:return"StrictMode";case ae:return"Suspense";case xt:return"SuspenseList";case le:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Yt:return"Portal";case Ct:return t.displayName||"Context";case Ut:return(t._context.displayName||"Context")+".Consumer";case Kt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:ye(t.type)||"Memo";case kt:e=t._payload,t=t._init;try{return ye(t(e))}catch{}}return null}var Xt=Array.isArray,y=ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},nt=[],st=-1;function c(t){return{current:t}}function T(t){0>st||(t.current=nt[st],nt[st]=null,st--)}function D(t,e){st++,nt[st]=t.current,t.current=e}var x=c(null),U=c(null),L=c(null),W=c(null);function _t(t,e){switch(D(L,e),D(U,t),D(x,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?kd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=kd(e),t=_d(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(x),D(x,t)}function vt(){T(x),T(U),T(L)}function xn(t){t.memoizedState!==null&&D(W,t);var e=x.current,n=_d(e,t.type);e!==n&&(D(U,t),D(x,n))}function Kn(t){U.current===t&&(T(x),T(U)),W.current===t&&(T(W),wa._currentValue=B)}var qi,He;function C(t){if(qi===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qi=e&&e[1]||"",He=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qi+t+He}var F=!1;function it(t,e){if(!t||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(p){var m=p}Reflect.construct(t,[],A)}else{try{A.call()}catch(p){m=p}t.call(A.prototype)}}else{try{throw Error()}catch(p){m=p}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(p){if(p&&m&&typeof p.stack=="string")return[p.stack,m.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var r=s.split(`
`),g=o.split(`
`);for(a=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(i===r.length||a===g.length)for(i=r.length-1,a=g.length-1;1<=i&&0<=a&&r[i]!==g[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==g[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==g[a]){var b=`
`+r[i].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=i&&0<=a);break}}}finally{F=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?C(n):""}function be(t,e){switch(t.tag){case 26:case 27:case 5:return C(t.type);case 16:return C("Lazy");case 13:return t.child!==e&&e!==null?C("Suspense Fallback"):C("Suspense");case 19:return C("SuspenseList");case 0:case 15:return it(t.type,!1);case 11:return it(t.type.render,!1);case 1:return it(t.type,!0);case 31:return C("Activity");default:return""}}function Hi(t){try{var e="",n=null;do e+=be(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xl=Object.prototype.hasOwnProperty,Zl=R.unstable_scheduleCallback,Kl=R.unstable_cancelCallback,Mf=R.unstable_shouldYield,Df=R.unstable_requestPaint,oe=R.unstable_now,Ef=R.unstable_getCurrentPriorityLevel,mr=R.unstable_ImmediatePriority,pr=R.unstable_UserBlockingPriority,xa=R.unstable_NormalPriority,Rf=R.unstable_LowPriority,vr=R.unstable_IdlePriority,xf=R.log,zf=R.unstable_setDisableYieldValue,Bi=null,re=null;function an(t){if(typeof xf=="function"&&zf(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(Bi,t)}catch{}}var ue=Math.clz32?Math.clz32:qf,Nf=Math.log,Of=Math.LN2;function qf(t){return t>>>=0,t===0?32:31-(Nf(t)/Of|0)|0}var za=256,Na=262144,Oa=4194304;function zn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qa(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,l=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?a=zn(i):(s&=o,s!==0?a=zn(s):n||(n=o&~t,n!==0&&(a=zn(n))))):(o=i&~l,o!==0?a=zn(o):s!==0?a=zn(s):n||(n=i&~t,n!==0&&(a=zn(n)))),a===0?0:e!==0&&e!==a&&(e&l)===0&&(l=a&-a,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:a}function Ui(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Hf(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var t=Oa;return Oa<<=1,(Oa&62914560)===0&&(Oa=4194304),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ki(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bf(t,e,n,i,a,l){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(n=s&~n;0<n;){var b=31-ue(n),A=1<<b;o[b]=0,r[b]=-1;var m=g[b];if(m!==null)for(g[b]=null,b=0;b<m.length;b++){var p=m[b];p!==null&&(p.lane&=-536870913)}n&=~A}i!==0&&br(t,i,0),l!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=l&~(s&~e))}function br(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ue(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Sr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ue(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Ar(t,e){var n=e&-e;return n=(n&42)!==0?1:Pl(n),(n&(t.suspendedLanes|e))!==0?0:n}function Pl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tr(){var t=M.p;return t!==0?t:(t=window.event,t===void 0?32:rf(t.type))}function wr(t,e){var n=M.p;try{return M.p=t,e()}finally{M.p=n}}var ln=Math.random().toString(36).slice(2),jt="__reactFiber$"+ln,Wt="__reactProps$"+ln,Jn="__reactContainer$"+ln,Fl="__reactEvents$"+ln,Uf="__reactListeners$"+ln,kf="__reactHandles$"+ln,Cr="__reactResources$"+ln,_i="__reactMarker$"+ln;function $l(t){delete t[jt],delete t[Wt],delete t[Fl],delete t[Uf],delete t[kf]}function Pn(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qd(t);t!==null;){if(n=t[jt])return n;t=Qd(t)}return e}t=n,n=t.parentNode}return null}function Wn(t){if(t=t[jt]||t[Jn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ji(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Fn(t){var e=t[Cr];return e||(e=t[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function qt(t){t[_i]=!0}var Mr=new Set,Dr={};function Nn(t,e){$n(t,e),$n(t+"Capture",e)}function $n(t,e){for(Dr[t]=e,t=0;t<e.length;t++)Mr.add(e[t])}var _f=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Er={},Rr={};function jf(t){return Xl.call(Rr,t)?!0:Xl.call(Er,t)?!1:_f.test(t)?Rr[t]=!0:(Er[t]=!0,!1)}function Ha(t,e,n){if(jf(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ba(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function je(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gf(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){if(!t._valueTracker){var e=xr(t)?"checked":"value";t._valueTracker=Gf(t,e,""+t[e])}}function zr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xr(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lf=/[\n"\\]/g;function Ae(t){return t.replace(Lf,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function es(t,e,n,i,a,l,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ns(t,s,Se(e)):n!=null?ns(t,s,Se(n)):i!=null&&t.removeAttribute("value"),a==null&&l!=null&&(t.defaultChecked=!!l),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Se(o):t.removeAttribute("name")}function Nr(t,e,n,i,a,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ts(t);return}n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ts(t)}function ns(t,e,n){e==="number"&&Ua(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ti(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Or(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function qr(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(f(92));if(Xt(i)){if(1<i.length)throw Error(f(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),ts(t)}function ei(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var If=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hr(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||If.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Br(t,e,n){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Hr(t,a,i)}else for(var l in e)e.hasOwnProperty(l)&&Hr(t,l,e[l])}function is(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ka(t){return Yf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var as=null;function ls(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ni=null,ii=null;function Ur(t){var e=Wn(t);if(e&&(t=e.stateNode)){var n=t[Wt]||null;t:switch(t=e.stateNode,e.type){case"input":if(es(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ae(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Wt]||null;if(!a)throw Error(f(90));es(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&zr(i)}break t;case"textarea":Or(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}}}var ss=!1;function kr(t,e,n){if(ss)return t(e,n);ss=!0;try{var i=t(e);return i}finally{if(ss=!1,(ni!==null||ii!==null)&&(Cl(),ni&&(e=ni,t=ii,ii=ni=null,Ur(e),t)))for(e=0;e<t.length;e++)Ur(t[e])}}function Gi(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Wt]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(f(231,e,typeof n));return n}var Le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(Le)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){os=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{os=!1}var sn=null,rs=null,_a=null;function _r(){if(_a)return _a;var t,e=rs,n=e.length,i,a="value"in sn?sn.value:sn.textContent,l=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[l-i];i++);return _a=a.slice(t,1<i?1-i:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function jr(){return!1}function Ft(t){function e(n,i,a,l,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ga:jr,this.isPropagationStopped=jr,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Ft(On),Ii=q({},On,{view:0,detail:0}),Qf=Ft(Ii),us,cs,Vi,Ia=q({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(us=t.screenX-Vi.screenX,cs=t.screenY-Vi.screenY):cs=us=0,Vi=t),us)},movementY:function(t){return"movementY"in t?t.movementY:cs}}),Gr=Ft(Ia),Xf=q({},Ia,{dataTransfer:0}),Zf=Ft(Xf),Kf=q({},Ii,{relatedTarget:0}),ds=Ft(Kf),Jf=q({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Ft(Jf),Wf=q({},On,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ff=Ft(Wf),$f=q({},On,{data:0}),Lr=Ft($f),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nh[t])?!!e[t]:!1}function fs(){return ih}var ah=q({},Ii,{key:function(t){if(t.key){var e=th[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lh=Ft(ah),sh=q({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ir=Ft(sh),oh=q({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),rh=Ft(oh),uh=q({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Ft(uh),dh=q({},Ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=Ft(dh),hh=q({},On,{newState:0,oldState:0}),gh=Ft(hh),mh=[9,13,27,32],hs=Le&&"CompositionEvent"in window,Yi=null;Le&&"documentMode"in document&&(Yi=document.documentMode);var ph=Le&&"TextEvent"in window&&!Yi,Vr=Le&&(!hs||Yi&&8<Yi&&11>=Yi),Yr=" ",Qr=!1;function Xr(t,e){switch(t){case"keyup":return mh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function vh(t,e){switch(t){case"compositionend":return Zr(e);case"keypress":return e.which!==32?null:(Qr=!0,Yr);case"textInput":return t=e.data,t===Yr&&Qr?null:t;default:return null}}function yh(t,e){if(ai)return t==="compositionend"||!hs&&Xr(t,e)?(t=_r(),_a=rs=sn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vr&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bh[t.type]:e==="textarea"}function Jr(t,e,n,i){ni?ii?ii.push(i):ii=[i]:ni=i,e=Nl(e,"onChange"),0<e.length&&(n=new La("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qi=null,Xi=null;function Sh(t){Nd(t,0)}function Va(t){var e=ji(t);if(zr(e))return t}function Pr(t,e){if(t==="change")return e}var Wr=!1;if(Le){var gs;if(Le){var ms="oninput"in document;if(!ms){var Fr=document.createElement("div");Fr.setAttribute("oninput","return;"),ms=typeof Fr.oninput=="function"}gs=ms}else gs=!1;Wr=gs&&(!document.documentMode||9<document.documentMode)}function $r(){Qi&&(Qi.detachEvent("onpropertychange",tu),Xi=Qi=null)}function tu(t){if(t.propertyName==="value"&&Va(Xi)){var e=[];Jr(e,Xi,t,ls(t)),kr(Sh,e)}}function Ah(t,e,n){t==="focusin"?($r(),Qi=e,Xi=n,Qi.attachEvent("onpropertychange",tu)):t==="focusout"&&$r()}function Th(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Va(Xi)}function wh(t,e){if(t==="click")return Va(e)}function Ch(t,e){if(t==="input"||t==="change")return Va(e)}function Mh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ce=typeof Object.is=="function"?Object.is:Mh;function Zi(t,e){if(ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Xl.call(e,a)||!ce(t[a],e[a]))return!1}return!0}function eu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nu(t,e){var n=eu(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=eu(n)}}function iu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function au(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ua(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Dh=Le&&"documentMode"in document&&11>=document.documentMode,li=null,vs=null,Ki=null,ys=!1;function lu(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||li==null||li!==Ua(i)||(i=li,"selectionStart"in i&&ps(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Zi(Ki,i)||(Ki=i,i=Nl(vs,"onSelect"),0<i.length&&(e=new La("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=li)))}function qn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionrun:qn("Transition","TransitionRun"),transitionstart:qn("Transition","TransitionStart"),transitioncancel:qn("Transition","TransitionCancel"),transitionend:qn("Transition","TransitionEnd")},bs={},su={};Le&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Hn(t){if(bs[t])return bs[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in su)return bs[t]=e[n];return t}var ou=Hn("animationend"),ru=Hn("animationiteration"),uu=Hn("animationstart"),Eh=Hn("transitionrun"),Rh=Hn("transitionstart"),xh=Hn("transitioncancel"),cu=Hn("transitionend"),du=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function ze(t,e){du.set(t,e),Nn(e,[t])}var Ya=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Te=[],oi=0,As=0;function Qa(){for(var t=oi,e=As=oi=0;e<t;){var n=Te[e];Te[e++]=null;var i=Te[e];Te[e++]=null;var a=Te[e];Te[e++]=null;var l=Te[e];if(Te[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}l!==0&&fu(n,a,l)}}function Xa(t,e,n,i){Te[oi++]=t,Te[oi++]=e,Te[oi++]=n,Te[oi++]=i,As|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Ts(t,e,n,i){return Xa(t,e,n,i),Za(t)}function Bn(t,e){return Xa(t,null,null,e),Za(t)}function fu(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,l=t.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(a=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,a&&e!==null&&(a=31-ue(n),t=l.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),l):null}function Za(t){if(50<pa)throw pa=0,Oo=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ri={};function zh(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,n,i){return new zh(t,e,n,i)}function ws(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ie(t,e){var n=t.alternate;return n===null?(n=de(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function hu(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ka(t,e,n,i,a,l){var s=0;if(i=t,typeof t=="function")ws(t)&&(s=1);else if(typeof t=="string")s=Bg(t,n,x.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case le:return t=de(31,n,e,a),t.elementType=le,t.lanes=l,t;case wt:return Un(n.children,a,l,e);case Pt:s=8,a|=24;break;case Qt:return t=de(12,n,e,a|2),t.elementType=Qt,t.lanes=l,t;case ae:return t=de(13,n,e,a),t.elementType=ae,t.lanes=l,t;case xt:return t=de(19,n,e,a),t.elementType=xt,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ct:s=10;break t;case Ut:s=9;break t;case Kt:s=11;break t;case I:s=14;break t;case kt:s=16,i=null;break t}s=29,n=Error(f(130,t===null?"null":typeof t,"")),i=null}return e=de(s,n,e,a),e.elementType=t,e.type=i,e.lanes=l,e}function Un(t,e,n,i){return t=de(7,t,i,e),t.lanes=n,t}function Cs(t,e,n){return t=de(6,t,null,e),t.lanes=n,t}function gu(t){var e=de(18,null,null,0);return e.stateNode=t,e}function Ms(t,e,n){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var mu=new WeakMap;function we(t,e){if(typeof t=="object"&&t!==null){var n=mu.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Hi(e)},mu.set(t,e),e)}return{value:t,source:e,stack:Hi(e)}}var ui=[],ci=0,Ja=null,Ji=0,Ce=[],Me=0,on=null,Be=1,Ue="";function Ve(t,e){ui[ci++]=Ji,ui[ci++]=Ja,Ja=t,Ji=e}function pu(t,e,n){Ce[Me++]=Be,Ce[Me++]=Ue,Ce[Me++]=on,on=t;var i=Be;t=Ue;var a=32-ue(i)-1;i&=~(1<<a),n+=1;var l=32-ue(e)+a;if(30<l){var s=a-a%5;l=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Be=1<<32-ue(e)+a|n<<a|i,Ue=l+t}else Be=1<<l|n<<a|i,Ue=t}function Ds(t){t.return!==null&&(Ve(t,1),pu(t,1,0))}function Es(t){for(;t===Ja;)Ja=ui[--ci],ui[ci]=null,Ji=ui[--ci],ui[ci]=null;for(;t===on;)on=Ce[--Me],Ce[Me]=null,Ue=Ce[--Me],Ce[Me]=null,Be=Ce[--Me],Ce[Me]=null}function vu(t,e){Ce[Me++]=Be,Ce[Me++]=Ue,Ce[Me++]=on,Be=e.id,Ue=e.overflow,on=t}var Gt=null,gt=null,K=!1,rn=null,De=!1,Rs=Error(f(519));function un(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pi(we(e,t)),Rs}function yu(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[jt]=t,e[Wt]=i,n){case"dialog":Y("cancel",e),Y("close",e);break;case"iframe":case"object":case"embed":Y("load",e);break;case"video":case"audio":for(n=0;n<ya.length;n++)Y(ya[n],e);break;case"source":Y("error",e);break;case"img":case"image":case"link":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"input":Y("invalid",e),Nr(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Y("invalid",e);break;case"textarea":Y("invalid",e),qr(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Bd(e.textContent,n)?(i.popover!=null&&(Y("beforetoggle",e),Y("toggle",e)),i.onScroll!=null&&Y("scroll",e),i.onScrollEnd!=null&&Y("scrollend",e),i.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||un(t,!0)}function bu(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:De=!1;return;case 27:case 3:De=!0;return;default:Gt=Gt.return}}function di(t){if(t!==Gt)return!1;if(!K)return bu(t),K=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zo(t.type,t.memoizedProps)),n=!n),n&&gt&&un(t),bu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Yd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Yd(t)}else e===27?(e=gt,wn(t.type)?(t=Fo,Fo=null,gt=t):gt=e):gt=Gt?Re(t.stateNode.nextSibling):null;return!0}function kn(){gt=Gt=null,K=!1}function xs(){var t=rn;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),rn=null),t}function Pi(t){rn===null?rn=[t]:rn.push(t)}var zs=c(null),_n=null,Ye=null;function cn(t,e,n){D(zs,e._currentValue),e._currentValue=n}function Qe(t){t._currentValue=zs.current,T(zs)}function Ns(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){var s=a.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=a;for(var r=0;r<e.length;r++)if(o.context===e[r]){l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ns(l.return,n,t),i||(s=null);break t}l=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(f(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ns(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fi(t,e,n,i){t=null;for(var a=e,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var o=a.type;ce(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===W.current){if(s=a.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(wa):t=[wa])}a=a.return}t!==null&&Os(e,t,n,i),e.flags|=262144}function Pa(t){for(t=t.firstContext;t!==null;){if(!ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jn(t){_n=t,Ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return Su(_n,t)}function Wa(t,e){return _n===null&&jn(t),Su(t,e)}function Su(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ye===null){if(t===null)throw Error(f(308));Ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ye=Ye.next=e;return n}var Nh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Oh=R.unstable_scheduleCallback,qh=R.unstable_NormalPriority,Mt={$$typeof:Ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new Nh,data:new Map,refCount:0}}function Wi(t){t.refCount--,t.refCount===0&&Oh(qh,function(){t.controller.abort()})}var Fi=null,Hs=0,hi=0,gi=null;function Hh(t,e){if(Fi===null){var n=Fi=[];Hs=0,hi=_o(),gi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Hs++,e.then(Au,Au),e}function Au(){if(--Hs===0&&Fi!==null){gi!==null&&(gi.status="fulfilled");var t=Fi;Fi=null,hi=0,gi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bh(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Tu=y.S;y.S=function(t,e){ld=oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Hh(t,e),Tu!==null&&Tu(t,e)};var Gn=c(null);function Bs(){var t=Gn.current;return t!==null?t:ft.pooledCache}function Fa(t,e){e===null?D(Gn,Gn.current):D(Gn,e.pool)}function wu(){var t=Bs();return t===null?null:{parent:Mt._currentValue,pool:t}}var mi=Error(f(460)),Us=Error(f(474)),$a=Error(f(542)),tl={then:function(){}};function Cu(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mu(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ge,Ge),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Eu(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Eu(t),t}throw In=e,mi}}function Ln(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(In=n,mi):n}}var In=null;function Du(){if(In===null)throw Error(f(459));var t=In;return In=null,t}function Eu(t){if(t===mi||t===$a)throw Error(f(483))}var pi=null,$i=0;function el(t){var e=$i;return $i+=1,pi===null&&(pi=[]),Mu(pi,t,e)}function ta(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function nl(t,e){throw e.$$typeof===lt?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ru(t){function e(d,u){if(t){var h=d.deletions;h===null?(d.deletions=[u],d.flags|=16):h.push(u)}}function n(d,u){if(!t)return null;for(;u!==null;)e(d,u),u=u.sibling;return null}function i(d){for(var u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function a(d,u){return d=Ie(d,u),d.index=0,d.sibling=null,d}function l(d,u,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<u?(d.flags|=67108866,u):h):(d.flags|=67108866,u)):(d.flags|=1048576,u)}function s(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,u,h,S){return u===null||u.tag!==6?(u=Cs(h,d.mode,S),u.return=d,u):(u=a(u,h),u.return=d,u)}function r(d,u,h,S){var O=h.type;return O===wt?b(d,u,h.props.children,S,h.key):u!==null&&(u.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===kt&&Ln(O)===u.type)?(u=a(u,h.props),ta(u,h),u.return=d,u):(u=Ka(h.type,h.key,h.props,null,d.mode,S),ta(u,h),u.return=d,u)}function g(d,u,h,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Ms(h,d.mode,S),u.return=d,u):(u=a(u,h.children||[]),u.return=d,u)}function b(d,u,h,S,O){return u===null||u.tag!==7?(u=Un(h,d.mode,S,O),u.return=d,u):(u=a(u,h),u.return=d,u)}function A(d,u,h){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Cs(""+u,d.mode,h),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ot:return h=Ka(u.type,u.key,u.props,null,d.mode,h),ta(h,u),h.return=d,h;case Yt:return u=Ms(u,d.mode,h),u.return=d,u;case kt:return u=Ln(u),A(d,u,h)}if(Xt(u)||zt(u))return u=Un(u,d.mode,h,null),u.return=d,u;if(typeof u.then=="function")return A(d,el(u),h);if(u.$$typeof===Ct)return A(d,Wa(d,u),h);nl(d,u)}return null}function m(d,u,h,S){var O=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return O!==null?null:o(d,u,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:return h.key===O?r(d,u,h,S):null;case Yt:return h.key===O?g(d,u,h,S):null;case kt:return h=Ln(h),m(d,u,h,S)}if(Xt(h)||zt(h))return O!==null?null:b(d,u,h,S,null);if(typeof h.then=="function")return m(d,u,el(h),S);if(h.$$typeof===Ct)return m(d,u,Wa(d,h),S);nl(d,h)}return null}function p(d,u,h,S,O){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(h)||null,o(u,d,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ot:return d=d.get(S.key===null?h:S.key)||null,r(u,d,S,O);case Yt:return d=d.get(S.key===null?h:S.key)||null,g(u,d,S,O);case kt:return S=Ln(S),p(d,u,h,S,O)}if(Xt(S)||zt(S))return d=d.get(h)||null,b(u,d,S,O,null);if(typeof S.then=="function")return p(d,u,h,el(S),O);if(S.$$typeof===Ct)return p(d,u,h,Wa(u,S),O);nl(u,S)}return null}function E(d,u,h,S){for(var O=null,$=null,N=u,G=u=0,Z=null;N!==null&&G<h.length;G++){N.index>G?(Z=N,N=null):Z=N.sibling;var tt=m(d,N,h[G],S);if(tt===null){N===null&&(N=Z);break}t&&N&&tt.alternate===null&&e(d,N),u=l(tt,u,G),$===null?O=tt:$.sibling=tt,$=tt,N=Z}if(G===h.length)return n(d,N),K&&Ve(d,G),O;if(N===null){for(;G<h.length;G++)N=A(d,h[G],S),N!==null&&(u=l(N,u,G),$===null?O=N:$.sibling=N,$=N);return K&&Ve(d,G),O}for(N=i(N);G<h.length;G++)Z=p(N,d,G,h[G],S),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?G:Z.key),u=l(Z,u,G),$===null?O=Z:$.sibling=Z,$=Z);return t&&N.forEach(function(Rn){return e(d,Rn)}),K&&Ve(d,G),O}function H(d,u,h,S){if(h==null)throw Error(f(151));for(var O=null,$=null,N=u,G=u=0,Z=null,tt=h.next();N!==null&&!tt.done;G++,tt=h.next()){N.index>G?(Z=N,N=null):Z=N.sibling;var Rn=m(d,N,tt.value,S);if(Rn===null){N===null&&(N=Z);break}t&&N&&Rn.alternate===null&&e(d,N),u=l(Rn,u,G),$===null?O=Rn:$.sibling=Rn,$=Rn,N=Z}if(tt.done)return n(d,N),K&&Ve(d,G),O;if(N===null){for(;!tt.done;G++,tt=h.next())tt=A(d,tt.value,S),tt!==null&&(u=l(tt,u,G),$===null?O=tt:$.sibling=tt,$=tt);return K&&Ve(d,G),O}for(N=i(N);!tt.done;G++,tt=h.next())tt=p(N,d,G,tt.value,S),tt!==null&&(t&&tt.alternate!==null&&N.delete(tt.key===null?G:tt.key),u=l(tt,u,G),$===null?O=tt:$.sibling=tt,$=tt);return t&&N.forEach(function(Xg){return e(d,Xg)}),K&&Ve(d,G),O}function dt(d,u,h,S){if(typeof h=="object"&&h!==null&&h.type===wt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:t:{for(var O=h.key;u!==null;){if(u.key===O){if(O=h.type,O===wt){if(u.tag===7){n(d,u.sibling),S=a(u,h.props.children),S.return=d,d=S;break t}}else if(u.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===kt&&Ln(O)===u.type){n(d,u.sibling),S=a(u,h.props),ta(S,h),S.return=d,d=S;break t}n(d,u);break}else e(d,u);u=u.sibling}h.type===wt?(S=Un(h.props.children,d.mode,S,h.key),S.return=d,d=S):(S=Ka(h.type,h.key,h.props,null,d.mode,S),ta(S,h),S.return=d,d=S)}return s(d);case Yt:t:{for(O=h.key;u!==null;){if(u.key===O)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(d,u.sibling),S=a(u,h.children||[]),S.return=d,d=S;break t}else{n(d,u);break}else e(d,u);u=u.sibling}S=Ms(h,d.mode,S),S.return=d,d=S}return s(d);case kt:return h=Ln(h),dt(d,u,h,S)}if(Xt(h))return E(d,u,h,S);if(zt(h)){if(O=zt(h),typeof O!="function")throw Error(f(150));return h=O.call(h),H(d,u,h,S)}if(typeof h.then=="function")return dt(d,u,el(h),S);if(h.$$typeof===Ct)return dt(d,u,Wa(d,h),S);nl(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,u!==null&&u.tag===6?(n(d,u.sibling),S=a(u,h),S.return=d,d=S):(n(d,u),S=Cs(h,d.mode,S),S.return=d,d=S),s(d)):n(d,u)}return function(d,u,h,S){try{$i=0;var O=dt(d,u,h,S);return pi=null,O}catch(N){if(N===mi||N===$a)throw N;var $=de(29,N,null,d.mode);return $.lanes=S,$.return=d,$}finally{}}}var Vn=Ru(!0),xu=Ru(!1),dn=!1;function ks(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _s(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(et&2)!==0){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Za(t),fu(t,null,n),e}return Xa(t,i,e,n),Za(t)}function ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sr(t,n)}}function js(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=e:l=l.next=e}else a=l=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Gs=!1;function na(){if(Gs){var t=gi;if(t!==null)throw t}}function ia(t,e,n,i){Gs=!1;var a=t.updateQueue;dn=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var r=o,g=r.next;r.next=null,s===null?l=g:s.next=g,s=r;var b=t.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==s&&(o===null?b.firstBaseUpdate=g:o.next=g,b.lastBaseUpdate=r))}if(l!==null){var A=a.baseState;s=0,b=g=r=null,o=l;do{var m=o.lane&-536870913,p=m!==o.lane;if(p?(X&m)===m:(i&m)===m){m!==0&&m===hi&&(Gs=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var E=t,H=o;m=e;var dt=n;switch(H.tag){case 1:if(E=H.payload,typeof E=="function"){A=E.call(dt,A,m);break t}A=E;break t;case 3:E.flags=E.flags&-65537|128;case 0:if(E=H.payload,m=typeof E=="function"?E.call(dt,A,m):E,m==null)break t;A=q({},A,m);break t;case 2:dn=!0}}m=o.callback,m!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[m]:p.push(m))}else p={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(g=b=p,r=A):b=b.next=p,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);b===null&&(r=A),a.baseState=r,a.firstBaseUpdate=g,a.lastBaseUpdate=b,l===null&&(a.shared.lanes=0),yn|=s,t.lanes=s,t.memoizedState=A}}function zu(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Nu(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)zu(n[t],e)}var vi=c(null),il=c(0);function Ou(t,e){t=tn,D(il,t),D(vi,e),tn=t|e.baseLanes}function Ls(){D(il,tn),D(vi,vi.current)}function Is(){tn=il.current,T(vi),T(il)}var fe=c(null),Ee=null;function gn(t){var e=t.alternate;D(St,St.current&1),D(fe,t),Ee===null&&(e===null||vi.current!==null||e.memoizedState!==null)&&(Ee=t)}function Vs(t){D(St,St.current),D(fe,t),Ee===null&&(Ee=t)}function qu(t){t.tag===22?(D(St,St.current),D(fe,t),Ee===null&&(Ee=t)):mn()}function mn(){D(St,St.current),D(fe,fe.current)}function he(t){T(fe),Ee===t&&(Ee=null),T(St)}var St=c(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Po(n)||Wo(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xe=0,j=null,ut=null,Dt=null,ll=!1,yi=!1,Yn=!1,sl=0,aa=0,bi=null,Uh=0;function yt(){throw Error(f(321))}function Ys(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ce(t[n],e[n]))return!1;return!0}function Qs(t,e,n,i,a,l){return Xe=l,j=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?pc:so,Yn=!1,l=n(i,a),Yn=!1,yi&&(l=Bu(e,n,i,a)),Hu(t),l}function Hu(t){y.H=oa;var e=ut!==null&&ut.next!==null;if(Xe=0,Dt=ut=j=null,ll=!1,aa=0,bi=null,e)throw Error(f(300));t===null||Et||(t=t.dependencies,t!==null&&Pa(t)&&(Et=!0))}function Bu(t,e,n,i){j=t;var a=0;do{if(yi&&(bi=null),aa=0,yi=!1,25<=a)throw Error(f(301));if(a+=1,Dt=ut=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=vc,l=e(n,i)}while(yi);return l}function kh(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?la(e):e,t=t.useState()[0],(ut!==null?ut.memoizedState:null)!==t&&(j.flags|=1024),e}function Xs(){var t=sl!==0;return sl=0,t}function Zs(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ks(t){if(ll){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ll=!1}Xe=0,Dt=ut=j=null,yi=!1,aa=sl=0,bi=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?j.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function At(){if(ut===null){var t=j.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=Dt===null?j.memoizedState:Dt.next;if(e!==null)Dt=e,ut=t;else{if(t===null)throw j.alternate===null?Error(f(467)):Error(f(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Dt===null?j.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(t){var e=aa;return aa+=1,bi===null&&(bi=[]),t=Mu(bi,t,e),e=j,(Dt===null?e.memoizedState:Dt.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?pc:so),t}function rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return la(t);if(t.$$typeof===Ct)return Lt(t)}throw Error(f(438,String(t)))}function Js(t){var e=null,n=j.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=j.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ol(),j.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=qe;return e.index++,n}function Ze(t,e){return typeof e=="function"?e(t):e}function ul(t){var e=At();return Ps(e,ut,t)}function Ps(t,e,n){var i=t.queue;if(i===null)throw Error(f(311));i.lastRenderedReducer=n;var a=t.baseQueue,l=i.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}e.baseQueue=a=l,i.pending=null}if(l=t.baseState,a===null)t.memoizedState=l;else{e=a.next;var o=s=null,r=null,g=e,b=!1;do{var A=g.lane&-536870913;if(A!==g.lane?(X&A)===A:(Xe&A)===A){var m=g.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===hi&&(b=!0);else if((Xe&m)===m){g=g.next,m===hi&&(b=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=A,s=l):r=r.next=A,j.lanes|=m,yn|=m;A=g.action,Yn&&n(l,A),l=g.hasEagerState?g.eagerState:n(l,A)}else m={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=m,s=l):r=r.next=m,j.lanes|=A,yn|=A;g=g.next}while(g!==null&&g!==e);if(r===null?s=l:r.next=o,!ce(l,t.memoizedState)&&(Et=!0,b&&(n=gi,n!==null)))throw n;t.memoizedState=l,t.baseState=s,t.baseQueue=r,i.lastRenderedState=l}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Ws(t){var e=At(),n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,l=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=t(l,s.action),s=s.next;while(s!==a);ce(l,e.memoizedState)||(Et=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,i]}function Uu(t,e,n){var i=j,a=At(),l=K;if(l){if(n===void 0)throw Error(f(407));n=n()}else n=e();var s=!ce((ut||a).memoizedState,n);if(s&&(a.memoizedState=n,Et=!0),a=a.queue,to(ju.bind(null,i,a,t),[t]),a.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(i.flags|=2048,Si(9,{destroy:void 0},_u.bind(null,i,a,n,e),null),ft===null)throw Error(f(349));l||(Xe&127)!==0||ku(i,e,n)}return n}function ku(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=j.updateQueue,e===null?(e=ol(),j.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _u(t,e,n,i){e.value=n,e.getSnapshot=i,Gu(e)&&Lu(t)}function ju(t,e,n){return n(function(){Gu(e)&&Lu(t)})}function Gu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ce(t,n)}catch{return!0}}function Lu(t){var e=Bn(t,2);e!==null&&ie(e,t,2)}function Fs(t){var e=Jt();if(typeof t=="function"){var n=t;if(t=n(),Yn){an(!0);try{n()}finally{an(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},e}function Iu(t,e,n,i){return t.baseState=n,Ps(t,ut,typeof i=="function"?i:Ze)}function _h(t,e,n,i,a){if(fl(t))throw Error(f(485));if(t=e.action,t!==null){var l={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};y.T!==null?n(!0):l.isTransition=!1,i(l),n=e.pending,n===null?(l.next=e.pending=l,Vu(e,l)):(l.next=n.next,e.pending=n.next=l)}}function Vu(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var l=y.T,s={};y.T=s;try{var o=n(a,i),r=y.S;r!==null&&r(s,o),Yu(t,e,o)}catch(g){$s(t,e,g)}finally{l!==null&&s.types!==null&&(l.types=s.types),y.T=l}}else try{l=n(a,i),Yu(t,e,l)}catch(g){$s(t,e,g)}}function Yu(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qu(t,e,i)},function(i){return $s(t,e,i)}):Qu(t,e,n)}function Qu(t,e,n){e.status="fulfilled",e.value=n,Xu(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Vu(t,n)))}function $s(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Xu(e),e=e.next;while(e!==i)}t.action=null}function Xu(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Zu(t,e){return e}function Ku(t,e){if(K){var n=ft.formState;if(n!==null){t:{var i=j;if(K){if(gt){e:{for(var a=gt,l=De;a.nodeType!==8;){if(!l){a=null;break e}if(a=Re(a.nextSibling),a===null){a=null;break e}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){gt=Re(a.nextSibling),i=a.data==="F!";break t}}un(i)}i=!1}i&&(e=n[0])}}return n=Jt(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zu,lastRenderedState:e},n.queue=i,n=hc.bind(null,j,i),i.dispatch=n,i=Fs(!1),l=lo.bind(null,j,!1,i.queue),i=Jt(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=_h.bind(null,j,a,l,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Ju(t){var e=At();return Pu(e,ut,t)}function Pu(t,e,n){if(e=Ps(t,e,Zu)[0],t=ul(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=la(e)}catch(s){throw s===mi?$a:s}else i=e;e=At();var a=e.queue,l=a.dispatch;return n!==e.memoizedState&&(j.flags|=2048,Si(9,{destroy:void 0},jh.bind(null,a,n),null)),[i,l,t]}function jh(t,e){t.action=e}function Wu(t){var e=At(),n=ut;if(n!==null)return Pu(e,n,t);At(),e=e.memoizedState,n=At();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Si(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=j.updateQueue,e===null&&(e=ol(),j.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Fu(){return At().memoizedState}function cl(t,e,n,i){var a=Jt();j.flags|=t,a.memoizedState=Si(1|e,{destroy:void 0},n,i===void 0?null:i)}function dl(t,e,n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState.inst;ut!==null&&i!==null&&Ys(i,ut.memoizedState.deps)?a.memoizedState=Si(e,l,n,i):(j.flags|=t,a.memoizedState=Si(1|e,l,n,i))}function $u(t,e){cl(8390656,8,t,e)}function to(t,e){dl(2048,8,t,e)}function Gh(t){j.flags|=4;var e=j.updateQueue;if(e===null)e=ol(),j.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function tc(t){var e=At().memoizedState;return Gh({ref:e,nextImpl:t}),function(){if((et&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function ec(t,e){return dl(4,2,t,e)}function nc(t,e){return dl(4,4,t,e)}function ic(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ac(t,e,n){n=n!=null?n.concat([t]):null,dl(4,4,ic.bind(null,e,t),n)}function eo(){}function lc(t,e){var n=At();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Ys(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sc(t,e){var n=At();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Ys(e,i[1]))return i[0];if(i=t(),Yn){an(!0);try{t()}finally{an(!1)}}return n.memoizedState=[i,e],i}function no(t,e,n){return n===void 0||(Xe&1073741824)!==0&&(X&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=od(),j.lanes|=t,yn|=t,n)}function oc(t,e,n,i){return ce(n,e)?n:vi.current!==null?(t=no(t,n,i),ce(t,e)||(Et=!0),t):(Xe&42)===0||(Xe&1073741824)!==0&&(X&261930)===0?(Et=!0,t.memoizedState=n):(t=od(),j.lanes|=t,yn|=t,e)}function rc(t,e,n,i,a){var l=M.p;M.p=l!==0&&8>l?l:8;var s=y.T,o={};y.T=o,lo(t,!1,e,n);try{var r=a(),g=y.S;if(g!==null&&g(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Bh(r,i);sa(t,e,b,pe(t))}else sa(t,e,i,pe(t))}catch(A){sa(t,e,{then:function(){},status:"rejected",reason:A},pe())}finally{M.p=l,s!==null&&o.types!==null&&(s.types=o.types),y.T=s}}function Lh(){}function io(t,e,n,i){if(t.tag!==5)throw Error(f(476));var a=uc(t).queue;rc(t,a,e,B,n===null?Lh:function(){return cc(t),n(i)})}function uc(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:B},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function cc(t){var e=uc(t);e.next===null&&(e=t.alternate.memoizedState),sa(t,e.next.queue,{},pe())}function ao(){return Lt(wa)}function dc(){return At().memoizedState}function fc(){return At().memoizedState}function Ih(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=pe();t=fn(n);var i=hn(e,t,n);i!==null&&(ie(i,e,n),ea(i,e,n)),e={cache:qs()},t.payload=e;return}e=e.return}}function Vh(t,e,n){var i=pe();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fl(t)?gc(e,n):(n=Ts(t,e,n,i),n!==null&&(ie(n,t,i),mc(n,e,i)))}function hc(t,e,n){var i=pe();sa(t,e,n,i)}function sa(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fl(t))gc(e,a);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,ce(o,s))return Xa(t,e,a,0),ft===null&&Qa(),!1}catch{}finally{}if(n=Ts(t,e,a,i),n!==null)return ie(n,t,i),mc(n,e,i),!0}return!1}function lo(t,e,n,i){if(i={lane:2,revertLane:_o(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(e)throw Error(f(479))}else e=Ts(t,n,i,2),e!==null&&ie(e,t,2)}function fl(t){var e=t.alternate;return t===j||e!==null&&e===j}function gc(t,e){yi=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mc(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sr(t,n)}}var oa={readContext:Lt,use:rl,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};oa.useEffectEvent=yt;var pc={readContext:Lt,use:rl,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:$u,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,cl(4194308,4,ic.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){cl(4,2,t,e)},useMemo:function(t,e){var n=Jt();e=e===void 0?null:e;var i=t();if(Yn){an(!0);try{t()}finally{an(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Jt();if(n!==void 0){var a=n(e);if(Yn){an(!0);try{n(e)}finally{an(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=Vh.bind(null,j,t),[i.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:function(t){t=Fs(t);var e=t.queue,n=hc.bind(null,j,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:eo,useDeferredValue:function(t,e){var n=Jt();return no(n,t,e)},useTransition:function(){var t=Fs(!1);return t=rc.bind(null,j,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=j,a=Jt();if(K){if(n===void 0)throw Error(f(407));n=n()}else{if(n=e(),ft===null)throw Error(f(349));(X&127)!==0||ku(i,e,n)}a.memoizedState=n;var l={value:n,getSnapshot:e};return a.queue=l,$u(ju.bind(null,i,l,t),[t]),i.flags|=2048,Si(9,{destroy:void 0},_u.bind(null,i,l,n,e),null),n},useId:function(){var t=Jt(),e=ft.identifierPrefix;if(K){var n=Ue,i=Be;n=(i&~(1<<32-ue(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=sl++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Uh++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ao,useFormState:Ku,useActionState:Ku,useOptimistic:function(t){var e=Jt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lo.bind(null,j,!0,n),n.dispatch=e,[t,e]},useMemoCache:Js,useCacheRefresh:function(){return Jt().memoizedState=Ih.bind(null,j)},useEffectEvent:function(t){var e=Jt(),n={impl:t};return e.memoizedState=n,function(){if((et&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}},so={readContext:Lt,use:rl,useCallback:lc,useContext:Lt,useEffect:to,useImperativeHandle:ac,useInsertionEffect:ec,useLayoutEffect:nc,useMemo:sc,useReducer:ul,useRef:Fu,useState:function(){return ul(Ze)},useDebugValue:eo,useDeferredValue:function(t,e){var n=At();return oc(n,ut.memoizedState,t,e)},useTransition:function(){var t=ul(Ze)[0],e=At().memoizedState;return[typeof t=="boolean"?t:la(t),e]},useSyncExternalStore:Uu,useId:dc,useHostTransitionStatus:ao,useFormState:Ju,useActionState:Ju,useOptimistic:function(t,e){var n=At();return Iu(n,ut,t,e)},useMemoCache:Js,useCacheRefresh:fc};so.useEffectEvent=tc;var vc={readContext:Lt,use:rl,useCallback:lc,useContext:Lt,useEffect:to,useImperativeHandle:ac,useInsertionEffect:ec,useLayoutEffect:nc,useMemo:sc,useReducer:Ws,useRef:Fu,useState:function(){return Ws(Ze)},useDebugValue:eo,useDeferredValue:function(t,e){var n=At();return ut===null?no(n,t,e):oc(n,ut.memoizedState,t,e)},useTransition:function(){var t=Ws(Ze)[0],e=At().memoizedState;return[typeof t=="boolean"?t:la(t),e]},useSyncExternalStore:Uu,useId:dc,useHostTransitionStatus:ao,useFormState:Wu,useActionState:Wu,useOptimistic:function(t,e){var n=At();return ut!==null?Iu(n,ut,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Js,useCacheRefresh:fc};vc.useEffectEvent=tc;function oo(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ro={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pe(),a=fn(i);a.payload=e,n!=null&&(a.callback=n),e=hn(t,a,i),e!==null&&(ie(e,t,i),ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pe(),a=fn(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=hn(t,a,i),e!==null&&(ie(e,t,i),ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pe(),i=fn(n);i.tag=2,e!=null&&(i.callback=e),e=hn(t,i,n),e!==null&&(ie(e,t,n),ea(e,t,n))}};function yc(t,e,n,i,a,l,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,s):e.prototype&&e.prototype.isPureReactComponent?!Zi(n,i)||!Zi(a,l):!0}function bc(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ro.enqueueReplaceState(e,e.state,null)}function Qn(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=q({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function Sc(t){Ya(t)}function Ac(t){console.error(t)}function Tc(t){Ya(t)}function hl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function wc(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function uo(t,e,n){return n=fn(n),n.tag=3,n.payload={element:null},n.callback=function(){hl(t,e)},n}function Cc(t){return t=fn(t),t.tag=3,t}function Mc(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;t.payload=function(){return a(l)},t.callback=function(){wc(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){wc(e,n,i),typeof a!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Yh(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&fi(e,n,a,!0),n=fe.current,n!==null){switch(n.tag){case 31:case 13:return Ee===null?Ml():n.alternate===null&&bt===0&&(bt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===tl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Bo(t,i,a)),!1;case 22:return n.flags|=65536,i===tl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Bo(t,i,a)),!1}throw Error(f(435,n.tag))}return Bo(t,i,a),Ml(),!1}if(K)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Rs&&(t=Error(f(422),{cause:i}),Pi(we(t,n)))):(i!==Rs&&(e=Error(f(423),{cause:i}),Pi(we(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=we(i,n),a=uo(t.stateNode,i,a),js(t,a),bt!==4&&(bt=2)),!1;var l=Error(f(520),{cause:i});if(l=we(l,n),ma===null?ma=[l]:ma.push(l),bt!==4&&(bt=2),e===null)return!0;i=we(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=uo(n.stateNode,i,t),js(n,t),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(bn===null||!bn.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Cc(a),Mc(a,t,n,i),js(n,a),!1}n=n.return}while(n!==null);return!1}var co=Error(f(461)),Et=!1;function It(t,e,n,i){e.child=t===null?xu(e,null,n,i):Vn(e,t.child,n,i)}function Dc(t,e,n,i,a){n=n.render;var l=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return jn(e),i=Qs(t,e,n,s,l,a),o=Xs(),t!==null&&!Et?(Zs(t,e,a),Ke(t,e,a)):(K&&o&&Ds(e),e.flags|=1,It(t,e,i,a),e.child)}function Ec(t,e,n,i,a){if(t===null){var l=n.type;return typeof l=="function"&&!ws(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,Rc(t,e,l,i,a)):(t=Ka(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!bo(t,a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(s,i)&&t.ref===e.ref)return Ke(t,e,a)}return e.flags|=1,t=Ie(l,i),t.ref=e.ref,t.return=e,e.child=t}function Rc(t,e,n,i,a){if(t!==null){var l=t.memoizedProps;if(Zi(l,i)&&t.ref===e.ref)if(Et=!1,e.pendingProps=i=l,bo(t,a))(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,Ke(t,e,a)}return fo(t,e,n,i,a)}function xc(t,e,n,i){var a=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,e.child=null;return zc(t,e,l,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fa(e,l!==null?l.cachePool:null),l!==null?Ou(e,l):Ls(),qu(e);else return i=e.lanes=536870912,zc(t,e,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(Fa(e,l.cachePool),Ou(e,l),mn(),e.memoizedState=null):(t!==null&&Fa(e,null),Ls(),mn());return It(t,e,a,n),e.child}function ra(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function zc(t,e,n,i,a){var l=Bs();return l=l===null?null:{parent:Mt._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&Fa(e,null),Ls(),qu(e),t!==null&&fi(t,e,i,!0),e.childLanes=a,null}function gl(t,e){return e=pl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Nc(t,e,n){return Vn(e,t.child,null,n),t=gl(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function Qh(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(K){if(i.mode==="hidden")return t=gl(e,i),e.lanes=536870912,ra(null,t);if(Vs(e),(t=gt)?(t=Vd(t,De),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:on!==null?{id:Be,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},n=gu(t),n.return=e,e.child=n,Gt=e,gt=null)):t=null,t===null)throw un(e);return e.lanes=536870912,null}return gl(e,i)}var l=t.memoizedState;if(l!==null){var s=l.dehydrated;if(Vs(e),a)if(e.flags&256)e.flags&=-257,e=Nc(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Et||fi(t,e,n,!1),a=(n&t.childLanes)!==0,Et||a){if(i=ft,i!==null&&(s=Ar(i,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,Bn(t,s),ie(i,t,s),co;Ml(),e=Nc(t,e,n)}else t=l.treeContext,gt=Re(s.nextSibling),Gt=e,K=!0,rn=null,De=!1,t!==null&&vu(e,t),e=gl(e,i),e.flags|=4096;return e}return t=Ie(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ml(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function fo(t,e,n,i,a){return jn(e),n=Qs(t,e,n,i,void 0,a),i=Xs(),t!==null&&!Et?(Zs(t,e,a),Ke(t,e,a)):(K&&i&&Ds(e),e.flags|=1,It(t,e,n,a),e.child)}function Oc(t,e,n,i,a,l){return jn(e),e.updateQueue=null,n=Bu(e,i,n,a),Hu(t),i=Xs(),t!==null&&!Et?(Zs(t,e,l),Ke(t,e,l)):(K&&i&&Ds(e),e.flags|=1,It(t,e,n,l),e.child)}function qc(t,e,n,i,a){if(jn(e),e.stateNode===null){var l=ri,s=n.contextType;typeof s=="object"&&s!==null&&(l=Lt(s)),l=new n(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ro,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},ks(e),s=n.contextType,l.context=typeof s=="object"&&s!==null?Lt(s):ri,l.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(oo(e,n,s,i),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ro.enqueueReplaceState(l,l.state,null),ia(e,i,l,a),na(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var o=e.memoizedProps,r=Qn(n,o);l.props=r;var g=l.context,b=n.contextType;s=ri,typeof b=="object"&&b!==null&&(s=Lt(b));var A=n.getDerivedStateFromProps;b=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||g!==s)&&bc(e,l,i,s),dn=!1;var m=e.memoizedState;l.state=m,ia(e,i,l,a),na(),g=e.memoizedState,o||m!==g||dn?(typeof A=="function"&&(oo(e,n,A,i),g=e.memoizedState),(r=dn||yc(e,n,r,i,m,g,s))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=g),l.props=i,l.state=g,l.context=s,i=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,_s(t,e),s=e.memoizedProps,b=Qn(n,s),l.props=b,A=e.pendingProps,m=l.context,g=n.contextType,r=ri,typeof g=="object"&&g!==null&&(r=Lt(g)),o=n.getDerivedStateFromProps,(g=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==A||m!==r)&&bc(e,l,i,r),dn=!1,m=e.memoizedState,l.state=m,ia(e,i,l,a),na();var p=e.memoizedState;s!==A||m!==p||dn||t!==null&&t.dependencies!==null&&Pa(t.dependencies)?(typeof o=="function"&&(oo(e,n,o,i),p=e.memoizedState),(b=dn||yc(e,n,b,i,m,p,r)||t!==null&&t.dependencies!==null&&Pa(t.dependencies))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,p,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,p,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),l.props=i,l.state=p,l.context=r,i=b):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,ml(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=Vn(e,t.child,null,a),e.child=Vn(e,null,n,a)):It(t,e,n,a),e.memoizedState=l.state,t=e.child):t=Ke(t,e,a),t}function Hc(t,e,n,i){return kn(),e.flags|=256,It(t,e,n,i),e.child}var ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function go(t){return{baseLanes:t,cachePool:wu()}}function mo(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=me),t}function Bc(t,e,n){var i=e.pendingProps,a=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(K){if(a?gn(e):mn(),(t=gt)?(t=Vd(t,De),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:on!==null?{id:Be,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},n=gu(t),n.return=e,e.child=n,Gt=e,gt=null)):t=null,t===null)throw un(e);return Wo(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(mn(),a=e.mode,o=pl({mode:"hidden",children:o},a),i=Un(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=go(n),i.childLanes=mo(t,s,n),e.memoizedState=ho,ra(null,i)):(gn(e),po(e,o))}var r=t.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(l)e.flags&256?(gn(e),e.flags&=-257,e=vo(t,e,n)):e.memoizedState!==null?(mn(),e.child=t.child,e.flags|=128,e=null):(mn(),o=i.fallback,a=e.mode,i=pl({mode:"visible",children:i.children},a),o=Un(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,Vn(e,t.child,null,n),i=e.child,i.memoizedState=go(n),i.childLanes=mo(t,s,n),e.memoizedState=ho,e=ra(null,i));else if(gn(e),Wo(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var g=s.dgst;s=g,i=Error(f(419)),i.stack="",i.digest=s,Pi({value:i,source:null,stack:null}),e=vo(t,e,n)}else if(Et||fi(t,e,n,!1),s=(n&t.childLanes)!==0,Et||s){if(s=ft,s!==null&&(i=Ar(s,n),i!==0&&i!==r.retryLane))throw r.retryLane=i,Bn(t,i),ie(s,t,i),co;Po(o)||Ml(),e=vo(t,e,n)}else Po(o)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,gt=Re(o.nextSibling),Gt=e,K=!0,rn=null,De=!1,t!==null&&vu(e,t),e=po(e,i.children),e.flags|=4096);return e}return a?(mn(),o=i.fallback,a=e.mode,r=t.child,g=r.sibling,i=Ie(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,g!==null?o=Ie(g,o):(o=Un(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,ra(null,i),i=e.child,o=t.child.memoizedState,o===null?o=go(n):(a=o.cachePool,a!==null?(r=Mt._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=wu(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=mo(t,s,n),e.memoizedState=ho,ra(t.child,i)):(gn(e),n=t.child,t=n.sibling,n=Ie(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function po(t,e){return e=pl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function pl(t,e){return t=de(22,t,null,e),t.lanes=0,t}function vo(t,e,n){return Vn(e,t.child,null,n),t=po(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uc(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ns(t.return,e,n)}function yo(t,e,n,i,a,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=l)}function kc(t,e,n){var i=e.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var s=St.current,o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,D(St,s),It(t,e,i,n),i=K?Ji:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uc(t,n,e);else if(t.tag===19)Uc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),yo(e,!1,a,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&al(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}yo(e,!0,n,null,l,i);break;case"together":yo(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Ke(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(fi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,n=Ie(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ie(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pa(t)))}function Xh(t,e,n){switch(e.tag){case 3:_t(e,e.stateNode.containerInfo),cn(e,Mt,t.memoizedState.cache),kn();break;case 27:case 5:xn(e);break;case 4:_t(e,e.stateNode.containerInfo);break;case 10:cn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Vs(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(gn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Bc(t,e,n):(gn(e),t=Ke(t,e,n),t!==null?t.sibling:null);gn(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(fi(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return kc(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),D(St,St.current),i)break;return null;case 22:return e.lanes=0,xc(t,e,n,e.pendingProps);case 24:cn(e,Mt,t.memoizedState.cache)}return Ke(t,e,n)}function _c(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!bo(t,n)&&(e.flags&128)===0)return Et=!1,Xh(t,e,n);Et=(t.flags&131072)!==0}else Et=!1,K&&(e.flags&1048576)!==0&&pu(e,Ji,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=Ln(e.elementType),e.type=t,typeof t=="function")ws(t)?(i=Qn(t,i),e.tag=1,e=qc(null,e,t,i,n)):(e.tag=0,e=fo(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Kt){e.tag=11,e=Dc(null,e,t,i,n);break t}else if(a===I){e.tag=14,e=Ec(null,e,t,i,n);break t}}throw e=ye(t)||t,Error(f(306,e,""))}}return e;case 0:return fo(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Qn(i,e.pendingProps),qc(t,e,i,a,n);case 3:t:{if(_t(e,e.stateNode.containerInfo),t===null)throw Error(f(387));i=e.pendingProps;var l=e.memoizedState;a=l.element,_s(t,e),ia(e,i,null,n);var s=e.memoizedState;if(i=s.cache,cn(e,Mt,i),i!==l.cache&&Os(e,[Mt],n,!0),na(),i=s.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Hc(t,e,i,n);break t}else if(i!==a){a=we(Error(f(424)),e),Pi(a),e=Hc(t,e,i,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=Re(t.firstChild),Gt=e,K=!0,rn=null,De=!0,n=xu(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(kn(),i===a){e=Ke(t,e,n);break t}It(t,e,i,n)}e=e.child}return e;case 26:return ml(t,e),t===null?(n=Jd(e.type,null,e.pendingProps,null))?e.memoizedState=n:K||(n=e.type,t=e.pendingProps,i=Ol(L.current).createElement(n),i[jt]=e,i[Wt]=t,Vt(i,n,t),qt(i),e.stateNode=i):e.memoizedState=Jd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return xn(e),t===null&&K&&(i=e.stateNode=Xd(e.type,e.pendingProps,L.current),Gt=e,De=!0,a=gt,wn(e.type)?(Fo=a,gt=Re(i.firstChild)):gt=a),It(t,e,e.pendingProps.children,n),ml(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&K&&((a=i=gt)&&(i=Tg(i,e.type,e.pendingProps,De),i!==null?(e.stateNode=i,Gt=e,gt=Re(i.firstChild),De=!1,a=!0):a=!1),a||un(e)),xn(e),a=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,i=l.children,Zo(a,l)?i=null:s!==null&&Zo(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Qs(t,e,kh,null,null,n),wa._currentValue=a),ml(t,e),It(t,e,i,n),e.child;case 6:return t===null&&K&&((t=n=gt)&&(n=wg(n,e.pendingProps,De),n!==null?(e.stateNode=n,Gt=e,gt=null,t=!0):t=!1),t||un(e)),null;case 13:return Bc(t,e,n);case 4:return _t(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vn(e,null,i,n):It(t,e,i,n),e.child;case 11:return Dc(t,e,e.type,e.pendingProps,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,cn(e,e.type,i.value),It(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,jn(e),a=Lt(a),i=i(a),e.flags|=1,It(t,e,i,n),e.child;case 14:return Ec(t,e,e.type,e.pendingProps,n);case 15:return Rc(t,e,e.type,e.pendingProps,n);case 19:return kc(t,e,n);case 31:return Qh(t,e,n);case 22:return xc(t,e,n,e.pendingProps);case 24:return jn(e),i=Lt(Mt),t===null?(a=Bs(),a===null&&(a=ft,l=qs(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=n),a=l),e.memoizedState={parent:i,cache:a},ks(e),cn(e,Mt,a)):((t.lanes&n)!==0&&(_s(t,e),ia(e,null,null,n),na()),a=t.memoizedState,l=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),cn(e,Mt,i)):(i=l.cache,cn(e,Mt,i),i!==a.cache&&Os(e,[Mt],n,!0))),It(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Je(t){t.flags|=4}function So(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(dd())t.flags|=8192;else throw In=tl,Us}else t.flags&=-16777217}function jc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tf(e))if(dd())t.flags|=8192;else throw In=tl,Us}function vl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yr():536870912,t.lanes|=e,Ci|=e)}function ua(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Zh(t,e,n){var i=e.pendingProps;switch(Es(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Qe(Mt),vt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(di(e)?Je(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xs())),mt(e),null;case 26:var a=e.type,l=e.memoizedState;return t===null?(Je(e),l!==null?(mt(e),jc(e,l)):(mt(e),So(e,a,null,i,n))):l?l!==t.memoizedState?(Je(e),mt(e),jc(e,l)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Je(e),mt(e),So(e,a,t,i,n)),null;case 27:if(Kn(e),n=L.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Je(e);else{if(!i){if(e.stateNode===null)throw Error(f(166));return mt(e),null}t=x.current,di(e)?yu(e):(t=Xd(a,i,n),e.stateNode=t,Je(e))}return mt(e),null;case 5:if(Kn(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Je(e);else{if(!i){if(e.stateNode===null)throw Error(f(166));return mt(e),null}if(l=x.current,di(e))yu(e);else{var s=Ol(L.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}l[jt]=e,l[Wt]=i;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;t:switch(Vt(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Je(e)}}return mt(e),So(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Je(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(f(166));if(t=L.current,di(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=Gt,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[jt]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Bd(t.nodeValue,n)),t||un(e,!0)}else t=Ol(t).createTextNode(i),t[jt]=e,e.stateNode=t}return mt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=di(e),n!==null){if(t===null){if(!i)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[jt]=e}else kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else n=xs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(f(558))}return mt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=di(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(f(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[jt]=e}else kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),a=!1}else a=xs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),vl(e,e.updateQueue),mt(e),null);case 4:return vt(),t===null&&Io(e.stateNode.containerInfo),mt(e),null;case 10:return Qe(e.type),mt(e),null;case 19:if(T(St),i=e.memoizedState,i===null)return mt(e),null;if(a=(e.flags&128)!==0,l=i.rendering,l===null)if(a)ua(i,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=al(t),l!==null){for(e.flags|=128,ua(i,!1),t=l.updateQueue,e.updateQueue=t,vl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)hu(n,t),n=n.sibling;return D(St,St.current&1|2),K&&Ve(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&oe()>Tl&&(e.flags|=128,a=!0,ua(i,!1),e.lanes=4194304)}else{if(!a)if(t=al(l),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,vl(e,t),ua(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return mt(e),null}else 2*oe()-i.renderingStartTime>Tl&&n!==536870912&&(e.flags|=128,a=!0,ua(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=St.current,D(St,a?n&1|2:n&1),K&&Ve(e,i.treeForkCount),t):(mt(e),null);case 22:case 23:return he(e),Is(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),n=e.updateQueue,n!==null&&vl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&T(Gn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Qe(Mt),mt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function Kh(t,e){switch(Es(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(Mt),vt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Kn(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(f(340));kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(St),null;case 4:return vt(),null;case 10:return Qe(e.type),null;case 22:case 23:return he(e),Is(),t!==null&&T(Gn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(Mt),null;case 25:return null;default:return null}}function Gc(t,e){switch(Es(e),e.tag){case 3:Qe(Mt),vt();break;case 26:case 27:case 5:Kn(e);break;case 4:vt();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:T(St);break;case 10:Qe(e.type);break;case 22:case 23:he(e),Is(),t!==null&&T(Gn);break;case 24:Qe(Mt)}}function ca(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var l=n.create,s=n.inst;i=l(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){rt(e,e.return,o)}}function pn(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var r=n,g=o;try{g()}catch(b){rt(a,r,b)}}}i=i.next}while(i!==l)}}catch(b){rt(e,e.return,b)}}function Lc(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Nu(e,n)}catch(i){rt(t,t.return,i)}}}function Ic(t,e,n){n.props=Qn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){rt(t,e,i)}}function da(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){rt(t,e,a)}}function ke(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){rt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){rt(t,e,a)}else n.current=null}function Vc(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){rt(t,t.return,a)}}function Ao(t,e,n){try{var i=t.stateNode;pg(i,t.type,n,e),i[Wt]=e}catch(a){rt(t,t.return,a)}}function Yc(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wn(t.type)||t.tag===4}function To(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wo(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ge));else if(i!==4&&(i===27&&wn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(wo(t,e,n),t=t.sibling;t!==null;)wo(t,e,n),t=t.sibling}function yl(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&wn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(yl(t,e,n),t=t.sibling;t!==null;)yl(t,e,n),t=t.sibling}function Qc(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vt(e,i,n),e[jt]=t,e[Wt]=n}catch(l){rt(t,t.return,l)}}var Pe=!1,Rt=!1,Co=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function Jh(t,e){if(t=t.containerInfo,Qo=jl,t=au(t),ps(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var s=0,o=-1,r=-1,g=0,b=0,A=t,m=null;e:for(;;){for(var p;A!==n||a!==0&&A.nodeType!==3||(o=s+a),A!==l||i!==0&&A.nodeType!==3||(r=s+i),A.nodeType===3&&(s+=A.nodeValue.length),(p=A.firstChild)!==null;)m=A,A=p;for(;;){if(A===t)break e;if(m===n&&++g===a&&(o=s),m===l&&++b===i&&(r=s),(p=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=p}n=o===-1||r===-1?null:{start:o,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xo={focusedElem:t,selectionRange:n},jl=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,n=e,a=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var E=Qn(n.type,a);t=i.getSnapshotBeforeUpdate(E,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(H){rt(n,n.return,H)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Jo(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function Zc(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Fe(t,n),i&4&&ca(5,n);break;case 1:if(Fe(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){rt(n,n.return,s)}else{var a=Qn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){rt(n,n.return,s)}}i&64&&Lc(n),i&512&&da(n,n.return);break;case 3:if(Fe(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Nu(t,e)}catch(s){rt(n,n.return,s)}}break;case 27:e===null&&i&4&&Qc(n);case 26:case 5:Fe(t,n),e===null&&i&4&&Vc(n),i&512&&da(n,n.return);break;case 12:Fe(t,n);break;case 31:Fe(t,n),i&4&&Pc(t,n);break;case 13:Fe(t,n),i&4&&Wc(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=ag.bind(null,n),Cg(t,n))));break;case 22:if(i=n.memoizedState!==null||Pe,!i){e=e!==null&&e.memoizedState!==null||Rt,a=Pe;var l=Rt;Pe=i,(Rt=e)&&!l?$e(t,n,(n.subtreeFlags&8772)!==0):Fe(t,n),Pe=a,Rt=l}break;case 30:break;default:Fe(t,n)}}function Kc(t){var e=t.alternate;e!==null&&(t.alternate=null,Kc(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$l(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,$t=!1;function We(t,e,n){for(n=n.child;n!==null;)Jc(t,e,n),n=n.sibling}function Jc(t,e,n){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(Bi,n)}catch{}switch(n.tag){case 26:Rt||ke(n,e),We(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Rt||ke(n,e);var i=pt,a=$t;wn(n.type)&&(pt=n.stateNode,$t=!1),We(t,e,n),Sa(n.stateNode),pt=i,$t=a;break;case 5:Rt||ke(n,e);case 6:if(i=pt,a=$t,pt=null,We(t,e,n),pt=i,$t=a,pt!==null)if($t)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(n.stateNode)}catch(l){rt(n,e,l)}else try{pt.removeChild(n.stateNode)}catch(l){rt(n,e,l)}break;case 18:pt!==null&&($t?(t=pt,Ld(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Oi(t)):Ld(pt,n.stateNode));break;case 4:i=pt,a=$t,pt=n.stateNode.containerInfo,$t=!0,We(t,e,n),pt=i,$t=a;break;case 0:case 11:case 14:case 15:pn(2,n,e),Rt||pn(4,n,e),We(t,e,n);break;case 1:Rt||(ke(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ic(n,e,i)),We(t,e,n);break;case 21:We(t,e,n);break;case 22:Rt=(i=Rt)||n.memoizedState!==null,We(t,e,n),Rt=i;break;default:We(t,e,n)}}function Pc(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Oi(t)}catch(n){rt(e,e.return,n)}}}function Wc(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oi(t)}catch(n){rt(e,e.return,n)}}function Ph(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Xc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Xc),e;default:throw Error(f(435,t.tag))}}function bl(t,e){var n=Ph(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=lg.bind(null,t,i);i.then(a,a)}})}function te(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],l=t,s=e,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(wn(o.type)){pt=o.stateNode,$t=!1;break t}break;case 5:pt=o.stateNode,$t=!1;break t;case 3:case 4:pt=o.stateNode.containerInfo,$t=!0;break t}o=o.return}if(pt===null)throw Error(f(160));Jc(l,s,a),pt=null,$t=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Fc(e,t),e=e.sibling}var Ne=null;function Fc(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:te(e,t),ee(t),i&4&&(pn(3,t,t.return),ca(3,t),pn(5,t,t.return));break;case 1:te(e,t),ee(t),i&512&&(Rt||n===null||ke(n,n.return)),i&64&&Pe&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Ne;if(te(e,t),ee(t),i&512&&(Rt||n===null||ke(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[_i]||l[jt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),Vt(l,i,n),l[jt]=t,qt(l),i=l;break t;case"link":var s=Fd("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}l=a.createElement(i),Vt(l,i,n),a.head.appendChild(l);break;case"meta":if(s=Fd("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}l=a.createElement(i),Vt(l,i,n),a.head.appendChild(l);break;default:throw Error(f(468,i))}l[jt]=t,qt(l),i=l}t.stateNode=i}else $d(a,t.type,t.stateNode);else t.stateNode=Wd(a,i,t.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?$d(a,t.type,t.stateNode):Wd(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Ao(t,t.memoizedProps,n.memoizedProps)}break;case 27:te(e,t),ee(t),i&512&&(Rt||n===null||ke(n,n.return)),n!==null&&i&4&&Ao(t,t.memoizedProps,n.memoizedProps);break;case 5:if(te(e,t),ee(t),i&512&&(Rt||n===null||ke(n,n.return)),t.flags&32){a=t.stateNode;try{ei(a,"")}catch(E){rt(t,t.return,E)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Ao(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Co=!0);break;case 6:if(te(e,t),ee(t),i&4){if(t.stateNode===null)throw Error(f(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(E){rt(t,t.return,E)}}break;case 3:if(Bl=null,a=Ne,Ne=ql(e.containerInfo),te(e,t),Ne=a,ee(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(e.containerInfo)}catch(E){rt(t,t.return,E)}Co&&(Co=!1,$c(t));break;case 4:i=Ne,Ne=ql(t.stateNode.containerInfo),te(e,t),ee(t),Ne=i;break;case 12:te(e,t),ee(t);break;case 31:te(e,t),ee(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,bl(t,i)));break;case 13:te(e,t),ee(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Al=oe()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,bl(t,i)));break;case 22:a=t.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,g=Pe,b=Rt;if(Pe=g||a,Rt=b||r,te(e,t),Rt=b,Pe=g,ee(t),i&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||r||Pe||Rt||Xn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){r=n=e;try{if(l=r.stateNode,a)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=r.stateNode;var A=r.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(E){rt(r,r.return,E)}}}else if(e.tag===6){if(n===null){r=e;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(E){rt(r,r.return,E)}}}else if(e.tag===18){if(n===null){r=e;try{var p=r.stateNode;a?Id(p,!0):Id(r.stateNode,!1)}catch(E){rt(r,r.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,bl(t,n))));break;case 19:te(e,t),ee(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,bl(t,i)));break;case 30:break;case 21:break;default:te(e,t),ee(t)}}function ee(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Yc(i)){n=i;break}i=i.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var a=n.stateNode,l=To(t);yl(t,l,a);break;case 5:var s=n.stateNode;n.flags&32&&(ei(s,""),n.flags&=-33);var o=To(t);yl(t,o,s);break;case 3:case 4:var r=n.stateNode.containerInfo,g=To(t);wo(t,g,r);break;default:throw Error(f(161))}}catch(b){rt(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $c(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$c(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Fe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Zc(t,e.alternate,e),e=e.sibling}function Xn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:pn(4,e,e.return),Xn(e);break;case 1:ke(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ic(e,e.return,n),Xn(e);break;case 27:Sa(e.stateNode);case 26:case 5:ke(e,e.return),Xn(e);break;case 22:e.memoizedState===null&&Xn(e);break;case 30:Xn(e);break;default:Xn(e)}t=t.sibling}}function $e(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,l=e,s=l.flags;switch(l.tag){case 0:case 11:case 15:$e(a,l,n),ca(4,l);break;case 1:if($e(a,l,n),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){rt(i,i.return,g)}if(i=l,a=i.updateQueue,a!==null){var o=i.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)zu(r[a],o)}catch(g){rt(i,i.return,g)}}n&&s&64&&Lc(l),da(l,l.return);break;case 27:Qc(l);case 26:case 5:$e(a,l,n),n&&i===null&&s&4&&Vc(l),da(l,l.return);break;case 12:$e(a,l,n);break;case 31:$e(a,l,n),n&&s&4&&Pc(a,l);break;case 13:$e(a,l,n),n&&s&4&&Wc(a,l);break;case 22:l.memoizedState===null&&$e(a,l,n),da(l,l.return);break;case 30:break;default:$e(a,l,n)}e=e.sibling}}function Mo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Wi(n))}function Do(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wi(t))}function Oe(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(t,e,n,i),e=e.sibling}function td(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Oe(t,e,n,i),a&2048&&ca(9,e);break;case 1:Oe(t,e,n,i);break;case 3:Oe(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wi(t)));break;case 12:if(a&2048){Oe(t,e,n,i),t=e.stateNode;try{var l=e.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){rt(e,e.return,r)}}else Oe(t,e,n,i);break;case 31:Oe(t,e,n,i);break;case 13:Oe(t,e,n,i);break;case 23:break;case 22:l=e.stateNode,s=e.alternate,e.memoizedState!==null?l._visibility&2?Oe(t,e,n,i):fa(t,e):l._visibility&2?Oe(t,e,n,i):(l._visibility|=2,Ai(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Mo(s,e);break;case 24:Oe(t,e,n,i),a&2048&&Do(e.alternate,e);break;default:Oe(t,e,n,i)}}function Ai(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,s=e,o=n,r=i,g=s.flags;switch(s.tag){case 0:case 11:case 15:Ai(l,s,o,r,a),ca(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Ai(l,s,o,r,a):fa(l,s):(b._visibility|=2,Ai(l,s,o,r,a)),a&&g&2048&&Mo(s.alternate,s);break;case 24:Ai(l,s,o,r,a),a&&g&2048&&Do(s.alternate,s);break;default:Ai(l,s,o,r,a)}e=e.sibling}}function fa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:fa(n,i),a&2048&&Mo(i.alternate,i);break;case 24:fa(n,i),a&2048&&Do(i.alternate,i);break;default:fa(n,i)}e=e.sibling}}var ha=8192;function Ti(t,e,n){if(t.subtreeFlags&ha)for(t=t.child;t!==null;)ed(t,e,n),t=t.sibling}function ed(t,e,n){switch(t.tag){case 26:Ti(t,e,n),t.flags&ha&&t.memoizedState!==null&&Ug(n,Ne,t.memoizedState,t.memoizedProps);break;case 5:Ti(t,e,n);break;case 3:case 4:var i=Ne;Ne=ql(t.stateNode.containerInfo),Ti(t,e,n),Ne=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ha,ha=16777216,Ti(t,e,n),ha=i):Ti(t,e,n));break;default:Ti(t,e,n)}}function nd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ga(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Ht=i,ad(i,t)}nd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)id(t),t=t.sibling}function id(t){switch(t.tag){case 0:case 11:case 15:ga(t),t.flags&2048&&pn(9,t,t.return);break;case 3:ga(t);break;case 12:ga(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Sl(t)):ga(t);break;default:ga(t)}}function Sl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Ht=i,ad(i,t)}nd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:pn(8,e,e.return),Sl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Sl(e));break;default:Sl(e)}t=t.sibling}}function ad(t,e){for(;Ht!==null;){var n=Ht;switch(n.tag){case 0:case 11:case 15:pn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Wi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ht=i;else t:for(n=t;Ht!==null;){i=Ht;var a=i.sibling,l=i.return;if(Kc(i),i===n){Ht=null;break t}if(a!==null){a.return=l,Ht=a;break t}Ht=l}}}var Wh={getCacheForType:function(t){var e=Lt(Mt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Lt(Mt).controller.signal}},Fh=typeof WeakMap=="function"?WeakMap:Map,et=0,ft=null,V=null,X=0,ot=0,ge=null,vn=!1,wi=!1,Eo=!1,tn=0,bt=0,yn=0,Zn=0,Ro=0,me=0,Ci=0,ma=null,ne=null,xo=!1,Al=0,ld=0,Tl=1/0,wl=null,bn=null,Nt=0,Sn=null,Mi=null,en=0,zo=0,No=null,sd=null,pa=0,Oo=null;function pe(){return(et&2)!==0&&X!==0?X&-X:y.T!==null?_o():Tr()}function od(){if(me===0)if((X&536870912)===0||K){var t=Na;Na<<=1,(Na&3932160)===0&&(Na=262144),me=t}else me=536870912;return t=fe.current,t!==null&&(t.flags|=32),me}function ie(t,e,n){(t===ft&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(Di(t,0),An(t,X,me,!1)),ki(t,n),((et&2)===0||t!==ft)&&(t===ft&&((et&2)===0&&(Zn|=n),bt===4&&An(t,X,me,!1)),_e(t))}function rd(t,e,n){if((et&6)!==0)throw Error(f(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ui(t,e),a=i?eg(t,e):Ho(t,e,!0),l=i;do{if(a===0){wi&&!i&&An(t,e,0,!1);break}else{if(n=t.current.alternate,l&&!$h(n)){a=Ho(t,e,!1),l=!1;continue}if(a===2){if(l=e,t.errorRecoveryDisabledLanes&l)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var o=t;a=ma;var r=o.current.memoizedState.isDehydrated;if(r&&(Di(o,s).flags|=256),s=Ho(o,s,!1),s!==2){if(Eo&&!r){o.errorRecoveryDisabledLanes|=l,Zn|=l,a=4;break t}l=ne,ne=a,l!==null&&(ne===null?ne=l:ne.push.apply(ne,l))}a=s}if(l=!1,a!==2)continue}}if(a===1){Di(t,0),An(t,e,0,!0);break}t:{switch(i=t,l=a,l){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:An(i,e,me,!vn);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(a=Al+300-oe(),10<a)){if(An(i,e,me,!vn),qa(i,0,!0)!==0)break t;en=e,i.timeoutHandle=jd(ud.bind(null,i,n,ne,wl,xo,e,me,Zn,Ci,vn,l,"Throttled",-0,0),a);break t}ud(i,n,ne,wl,xo,e,me,Zn,Ci,vn,l,null,-0,0)}}break}while(!0);_e(t)}function ud(t,e,n,i,a,l,s,o,r,g,b,A,m,p){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},ed(e,l,A);var E=(l&62914560)===l?Al-oe():(l&4194048)===l?ld-oe():0;if(E=kg(A,E),E!==null){en=l,t.cancelPendingCommit=E(vd.bind(null,t,e,l,n,i,a,s,o,r,b,A,null,m,p)),An(t,l,s,!g);return}}vd(t,e,l,n,i,a,s,o,r)}function $h(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],l=a.getSnapshot;a=a.value;try{if(!ce(l(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function An(t,e,n,i){e&=~Ro,e&=~Zn,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var l=31-ue(a),s=1<<l;i[l]=-1,a&=~s}n!==0&&br(t,n,e)}function Cl(){return(et&6)===0?(va(0),!1):!0}function qo(){if(V!==null){if(ot===0)var t=V.return;else t=V,Ye=_n=null,Ks(t),pi=null,$i=0,t=V;for(;t!==null;)Gc(t.alternate,t),t=t.return;V=null}}function Di(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,bg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),en=0,qo(),ft=t,V=n=Ie(t.current,null),X=e,ot=0,ge=null,vn=!1,wi=Ui(t,e),Eo=!1,Ci=me=Ro=Zn=yn=bt=0,ne=ma=null,xo=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-ue(i),l=1<<a;e|=t[a],i&=~l}return tn=e,Qa(),n}function cd(t,e){j=null,y.H=oa,e===mi||e===$a?(e=Du(),ot=3):e===Us?(e=Du(),ot=4):ot=e===co?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,V===null&&(bt=1,hl(t,we(e,t.current)))}function dd(){var t=fe.current;return t===null?!0:(X&4194048)===X?Ee===null:(X&62914560)===X||(X&536870912)!==0?t===Ee:!1}function fd(){var t=y.H;return y.H=oa,t===null?oa:t}function hd(){var t=y.A;return y.A=Wh,t}function Ml(){bt=4,vn||(X&4194048)!==X&&fe.current!==null||(wi=!0),(yn&134217727)===0&&(Zn&134217727)===0||ft===null||An(ft,X,me,!1)}function Ho(t,e,n){var i=et;et|=2;var a=fd(),l=hd();(ft!==t||X!==e)&&(wl=null,Di(t,e)),e=!1;var s=bt;t:do try{if(ot!==0&&V!==null){var o=V,r=ge;switch(ot){case 8:qo(),s=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var g=ot;if(ot=0,ge=null,Ei(t,o,r,g),n&&wi){s=0;break t}break;default:g=ot,ot=0,ge=null,Ei(t,o,r,g)}}tg(),s=bt;break}catch(b){cd(t,b)}while(!0);return e&&t.shellSuspendCounter++,Ye=_n=null,et=i,y.H=a,y.A=l,V===null&&(ft=null,X=0,Qa()),s}function tg(){for(;V!==null;)gd(V)}function eg(t,e){var n=et;et|=2;var i=fd(),a=hd();ft!==t||X!==e?(wl=null,Tl=oe()+500,Di(t,e)):wi=Ui(t,e);t:do try{if(ot!==0&&V!==null){e=V;var l=ge;e:switch(ot){case 1:ot=0,ge=null,Ei(t,e,l,1);break;case 2:case 9:if(Cu(l)){ot=0,ge=null,md(e);break}e=function(){ot!==2&&ot!==9||ft!==t||(ot=7),_e(t)},l.then(e,e);break t;case 3:ot=7;break t;case 4:ot=5;break t;case 7:Cu(l)?(ot=0,ge=null,md(e)):(ot=0,ge=null,Ei(t,e,l,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var o=V;if(s?tf(s):o.stateNode.complete){ot=0,ge=null;var r=o.sibling;if(r!==null)V=r;else{var g=o.return;g!==null?(V=g,Dl(g)):V=null}break e}}ot=0,ge=null,Ei(t,e,l,5);break;case 6:ot=0,ge=null,Ei(t,e,l,6);break;case 8:qo(),bt=6;break t;default:throw Error(f(462))}}ng();break}catch(b){cd(t,b)}while(!0);return Ye=_n=null,y.H=i,y.A=a,et=n,V!==null?0:(ft=null,X=0,Qa(),bt)}function ng(){for(;V!==null&&!Mf();)gd(V)}function gd(t){var e=_c(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?Dl(t):V=e}function md(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Oc(n,e,e.pendingProps,e.type,void 0,X);break;case 11:e=Oc(n,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:Ks(e);default:Gc(n,e),e=V=hu(e,tn),e=_c(n,e,tn)}t.memoizedProps=t.pendingProps,e===null?Dl(t):V=e}function Ei(t,e,n,i){Ye=_n=null,Ks(e),pi=null,$i=0;var a=e.return;try{if(Yh(t,a,e,n,X)){bt=1,hl(t,we(n,t.current)),V=null;return}}catch(l){if(a!==null)throw V=a,l;bt=1,hl(t,we(n,t.current)),V=null;return}e.flags&32768?(K||i===1?t=!0:wi||(X&536870912)!==0?t=!1:(vn=t=!0,(i===2||i===9||i===3||i===6)&&(i=fe.current,i!==null&&i.tag===13&&(i.flags|=16384))),pd(e,t)):Dl(e)}function Dl(t){var e=t;do{if((e.flags&32768)!==0){pd(e,vn);return}t=e.return;var n=Zh(e.alternate,e,tn);if(n!==null){V=n;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);bt===0&&(bt=5)}function pd(t,e){do{var n=Kh(t.alternate,t);if(n!==null){n.flags&=32767,V=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=n}while(t!==null);bt=6,V=null}function vd(t,e,n,i,a,l,s,o,r){t.cancelPendingCommit=null;do El();while(Nt!==0);if((et&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(l=e.lanes|e.childLanes,l|=As,Bf(t,n,l,s,o,r),t===ft&&(V=ft=null,X=0),Mi=e,Sn=t,en=n,zo=l,No=a,sd=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sg(xa,function(){return Td(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=y.T,y.T=null,a=M.p,M.p=2,s=et,et|=4;try{Jh(t,e,n)}finally{et=s,M.p=a,y.T=i}}Nt=1,yd(),bd(),Sd()}}function yd(){if(Nt===1){Nt=0;var t=Sn,e=Mi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var i=M.p;M.p=2;var a=et;et|=4;try{Fc(e,t);var l=Xo,s=au(t.containerInfo),o=l.focusedElem,r=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&iu(o.ownerDocument.documentElement,o)){if(r!==null&&ps(o)){var g=r.start,b=r.end;if(b===void 0&&(b=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(b,o.value.length);else{var A=o.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var p=m.getSelection(),E=o.textContent.length,H=Math.min(r.start,E),dt=r.end===void 0?H:Math.min(r.end,E);!p.extend&&H>dt&&(s=dt,dt=H,H=s);var d=nu(o,H),u=nu(o,dt);if(d&&u&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==u.node||p.focusOffset!==u.offset)){var h=A.createRange();h.setStart(d.node,d.offset),p.removeAllRanges(),H>dt?(p.addRange(h),p.extend(u.node,u.offset)):(h.setEnd(u.node,u.offset),p.addRange(h))}}}}for(A=[],p=o;p=p.parentNode;)p.nodeType===1&&A.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<A.length;o++){var S=A[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}jl=!!Qo,Xo=Qo=null}finally{et=a,M.p=i,y.T=n}}t.current=e,Nt=2}}function bd(){if(Nt===2){Nt=0;var t=Sn,e=Mi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var i=M.p;M.p=2;var a=et;et|=4;try{Zc(t,e.alternate,e)}finally{et=a,M.p=i,y.T=n}}Nt=3}}function Sd(){if(Nt===4||Nt===3){Nt=0,Df();var t=Sn,e=Mi,n=en,i=sd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Nt=5:(Nt=0,Mi=Sn=null,Ad(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(bn=null),Wl(n),e=e.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=y.T,a=M.p,M.p=2,y.T=null;try{for(var l=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];l(o.value,{componentStack:o.stack})}}finally{y.T=e,M.p=a}}(en&3)!==0&&El(),_e(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Oo?pa++:(pa=0,Oo=t):pa=0,va(0)}}function Ad(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wi(e)))}function El(){return yd(),bd(),Sd(),Td()}function Td(){if(Nt!==5)return!1;var t=Sn,e=zo;zo=0;var n=Wl(en),i=y.T,a=M.p;try{M.p=32>n?32:n,y.T=null,n=No,No=null;var l=Sn,s=en;if(Nt=0,Mi=Sn=null,en=0,(et&6)!==0)throw Error(f(331));var o=et;if(et|=4,id(l.current),td(l,l.current,s,n),et=o,va(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(Bi,l)}catch{}return!0}finally{M.p=a,y.T=i,Ad(t,e)}}function wd(t,e,n){e=we(n,e),e=uo(t.stateNode,e,2),t=hn(t,e,2),t!==null&&(ki(t,2),_e(t))}function rt(t,e,n){if(t.tag===3)wd(t,t,n);else for(;e!==null;){if(e.tag===3){wd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bn===null||!bn.has(i))){t=we(n,t),n=Cc(2),i=hn(e,n,2),i!==null&&(Mc(n,i,e,t),ki(i,2),_e(i));break}}e=e.return}}function Bo(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fh;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Eo=!0,a.add(n),t=ig.bind(null,t,e,n),e.then(t,t))}function ig(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ft===t&&(X&n)===n&&(bt===4||bt===3&&(X&62914560)===X&&300>oe()-Al?(et&2)===0&&Di(t,0):Ro|=n,Ci===X&&(Ci=0)),_e(t)}function Cd(t,e){e===0&&(e=yr()),t=Bn(t,e),t!==null&&(ki(t,e),_e(t))}function ag(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cd(t,n)}function lg(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(f(314))}i!==null&&i.delete(e),Cd(t,n)}function sg(t,e){return Zl(t,e)}var Rl=null,Ri=null,Uo=!1,xl=!1,ko=!1,Tn=0;function _e(t){t!==Ri&&t.next===null&&(Ri===null?Rl=Ri=t:Ri=Ri.next=t),xl=!0,Uo||(Uo=!0,rg())}function va(t,e){if(!ko&&xl){ko=!0;do for(var n=!1,i=Rl;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var s=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-ue(42|t)+1)-1,l&=a&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Rd(i,l))}else l=X,l=qa(i,i===ft?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Ui(i,l)||(n=!0,Rd(i,l));i=i.next}while(n);ko=!1}}function og(){Md()}function Md(){xl=Uo=!1;var t=0;Tn!==0&&yg()&&(t=Tn);for(var e=oe(),n=null,i=Rl;i!==null;){var a=i.next,l=Dd(i,e);l===0?(i.next=null,n===null?Rl=a:n.next=a,a===null&&(Ri=n)):(n=i,(t!==0||(l&3)!==0)&&(xl=!0)),i=a}Nt!==0&&Nt!==5||va(t),Tn!==0&&(Tn=0)}function Dd(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var s=31-ue(l),o=1<<s,r=a[s];r===-1?((o&n)===0||(o&i)!==0)&&(a[s]=Hf(o,e)):r<=e&&(t.expiredLanes|=o),l&=~o}if(e=ft,n=X,n=qa(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Kl(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ui(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Kl(i),Wl(n)){case 2:case 8:n=pr;break;case 32:n=xa;break;case 268435456:n=vr;break;default:n=xa}return i=Ed.bind(null,t),n=Zl(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Kl(i),t.callbackPriority=2,t.callbackNode=null,2}function Ed(t,e){if(Nt!==0&&Nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(El()&&t.callbackNode!==n)return null;var i=X;return i=qa(t,t===ft?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(rd(t,i,e),Dd(t,oe()),t.callbackNode!=null&&t.callbackNode===n?Ed.bind(null,t):null)}function Rd(t,e){if(El())return null;rd(t,e,!0)}function rg(){Sg(function(){(et&6)!==0?Zl(mr,og):Md()})}function _o(){if(Tn===0){var t=hi;t===0&&(t=za,za<<=1,(za&261888)===0&&(za=256)),Tn=t}return Tn}function xd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ka(""+t)}function zd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ug(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var l=xd((a[Wt]||null).action),s=i.submitter;s&&(e=(e=s[Wt]||null)?xd(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var o=new La("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Tn!==0){var r=s?zd(a,s):new FormData(a);io(n,{pending:!0,data:r,method:a.method,action:l},null,r)}}else typeof l=="function"&&(o.preventDefault(),r=s?zd(a,s):new FormData(a),io(n,{pending:!0,data:r,method:a.method,action:l},l,r))},currentTarget:a}]})}}for(var jo=0;jo<Ss.length;jo++){var Go=Ss[jo],cg=Go.toLowerCase(),dg=Go[0].toUpperCase()+Go.slice(1);ze(cg,"on"+dg)}ze(ou,"onAnimationEnd"),ze(ru,"onAnimationIteration"),ze(uu,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(Eh,"onTransitionRun"),ze(Rh,"onTransitionStart"),ze(xh,"onTransitionCancel"),ze(cu,"onTransitionEnd"),$n("onMouseEnter",["mouseout","mouseover"]),$n("onMouseLeave",["mouseout","mouseover"]),$n("onPointerEnter",["pointerout","pointerover"]),$n("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya));function Nd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],r=o.instance,g=o.currentTarget;if(o=o.listener,r!==l&&a.isPropagationStopped())break t;l=o,a.currentTarget=g;try{l(a)}catch(b){Ya(b)}a.currentTarget=null,l=r}else for(s=0;s<i.length;s++){if(o=i[s],r=o.instance,g=o.currentTarget,o=o.listener,r!==l&&a.isPropagationStopped())break t;l=o,a.currentTarget=g;try{l(a)}catch(b){Ya(b)}a.currentTarget=null,l=r}}}}function Y(t,e){var n=e[Fl];n===void 0&&(n=e[Fl]=new Set);var i=t+"__bubble";n.has(i)||(Od(e,t,2,!1),n.add(i))}function Lo(t,e,n){var i=0;e&&(i|=4),Od(n,t,i,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[zl]){t[zl]=!0,Mr.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||Lo(n,!1,t),Lo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Lo("selectionchange",!1,e))}}function Od(t,e,n,i){switch(rf(e)){case 2:var a=Gg;break;case 8:a=Lg;break;default:a=ir}n=a.bind(null,e,n,t),a=void 0,!os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Vo(t,e,n,i,a){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Pn(o),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){i=l=s;continue t}o=o.parentNode}}i=i.return}kr(function(){var g=l,b=ls(n),A=[];t:{var m=du.get(t);if(m!==void 0){var p=La,E=t;switch(t){case"keypress":if(ja(n)===0)break t;case"keydown":case"keyup":p=lh;break;case"focusin":E="focus",p=ds;break;case"focusout":E="blur",p=ds;break;case"beforeblur":case"afterblur":p=ds;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rh;break;case ou:case ru:case uu:p=Pf;break;case cu:p=ch;break;case"scroll":case"scrollend":p=Qf;break;case"wheel":p=fh;break;case"copy":case"cut":case"paste":p=Ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ir;break;case"toggle":case"beforetoggle":p=gh}var H=(e&4)!==0,dt=!H&&(t==="scroll"||t==="scrollend"),d=H?m!==null?m+"Capture":null:m;H=[];for(var u=g,h;u!==null;){var S=u;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||d===null||(S=Gi(u,d),S!=null&&H.push(ba(u,S,h))),dt)break;u=u.return}0<H.length&&(m=new p(m,E,null,n,b),A.push({event:m,listeners:H}))}}if((e&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",m&&n!==as&&(E=n.relatedTarget||n.fromElement)&&(Pn(E)||E[Jn]))break t;if((p||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,p?(E=n.relatedTarget||n.toElement,p=g,E=E?Pn(E):null,E!==null&&(dt=J(E),H=E.tag,E!==dt||H!==5&&H!==27&&H!==6)&&(E=null)):(p=null,E=g),p!==E)){if(H=Gr,S="onMouseLeave",d="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(H=Ir,S="onPointerLeave",d="onPointerEnter",u="pointer"),dt=p==null?m:ji(p),h=E==null?m:ji(E),m=new H(S,u+"leave",p,n,b),m.target=dt,m.relatedTarget=h,S=null,Pn(b)===g&&(H=new H(d,u+"enter",E,n,b),H.target=h,H.relatedTarget=dt,S=H),dt=S,p&&E)e:{for(H=hg,d=p,u=E,h=0,S=d;S;S=H(S))h++;S=0;for(var O=u;O;O=H(O))S++;for(;0<h-S;)d=H(d),h--;for(;0<S-h;)u=H(u),S--;for(;h--;){if(d===u||u!==null&&d===u.alternate){H=d;break e}d=H(d),u=H(u)}H=null}else H=null;p!==null&&qd(A,m,p,H,!1),E!==null&&dt!==null&&qd(A,dt,E,H,!0)}}t:{if(m=g?ji(g):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var $=Pr;else if(Kr(m))if(Wr)$=Ch;else{$=Th;var N=Ah}else p=m.nodeName,!p||p.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?g&&is(g.elementType)&&($=Pr):$=wh;if($&&($=$(t,g))){Jr(A,$,n,b);break t}N&&N(t,m,g),t==="focusout"&&g&&m.type==="number"&&g.memoizedProps.value!=null&&ns(m,"number",m.value)}switch(N=g?ji(g):window,t){case"focusin":(Kr(N)||N.contentEditable==="true")&&(li=N,vs=g,Ki=null);break;case"focusout":Ki=vs=li=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,lu(A,n,b);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":lu(A,n,b)}var G;if(hs)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else ai?Xr(t,n)&&(Z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Vr&&n.locale!=="ko"&&(ai||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ai&&(G=_r()):(sn=b,rs="value"in sn?sn.value:sn.textContent,ai=!0)),N=Nl(g,Z),0<N.length&&(Z=new Lr(Z,t,null,n,b),A.push({event:Z,listeners:N}),G?Z.data=G:(G=Zr(n),G!==null&&(Z.data=G)))),(G=ph?vh(t,n):yh(t,n))&&(Z=Nl(g,"onBeforeInput"),0<Z.length&&(N=new Lr("onBeforeInput","beforeinput",null,n,b),A.push({event:N,listeners:Z}),N.data=G)),ug(A,t,g,n,b)}Nd(A,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Gi(t,n),a!=null&&i.unshift(ba(t,a,l)),a=Gi(t,e),a!=null&&i.push(ba(t,a,l))),t.tag===3)return i;t=t.return}return[]}function hg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qd(t,e,n,i,a){for(var l=e._reactName,s=[];n!==null&&n!==i;){var o=n,r=o.alternate,g=o.stateNode;if(o=o.tag,r!==null&&r===i)break;o!==5&&o!==26&&o!==27||g===null||(r=g,a?(g=Gi(n,l),g!=null&&s.unshift(ba(n,g,r))):a||(g=Gi(n,l),g!=null&&s.push(ba(n,g,r)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var gg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(gg,`
`).replace(mg,"")}function Bd(t,e){return e=Hd(e),Hd(t)===e}function ct(t,e,n,i,a,l){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ei(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ei(t,""+i);break;case"className":Ba(t,"class",i);break;case"tabIndex":Ba(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ba(t,n,i);break;case"style":Br(t,i,l);break;case"data":if(e!=="object"){Ba(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=ka(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&ct(t,e,"name",a.name,a,null),ct(t,e,"formEncType",a.formEncType,a,null),ct(t,e,"formMethod",a.formMethod,a,null),ct(t,e,"formTarget",a.formTarget,a,null)):(ct(t,e,"encType",a.encType,a,null),ct(t,e,"method",a.method,a,null),ct(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=ka(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Ge);break;case"onScroll":i!=null&&Y("scroll",t);break;case"onScrollEnd":i!=null&&Y("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(f(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=ka(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Y("beforetoggle",t),Y("toggle",t),Ha(t,"popover",i);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ha(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Vf.get(n)||n,Ha(t,n,i))}}function Yo(t,e,n,i,a,l){switch(n){case"style":Br(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(f(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ei(t,i):(typeof i=="number"||typeof i=="bigint")&&ei(t,""+i);break;case"onScroll":i!=null&&Y("scroll",t);break;case"onScrollEnd":i!=null&&Y("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),l=t[Wt]||null,l=l!=null?l[n]:null,typeof l=="function"&&t.removeEventListener(e,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Ha(t,n,i)}}}function Vt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",t),Y("load",t);var i=!1,a=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ct(t,e,l,s,n,null)}}a&&ct(t,e,"srcSet",n.srcSet,n,null),i&&ct(t,e,"src",n.src,n,null);return;case"input":Y("invalid",t);var o=l=s=a=null,r=null,g=null;for(i in n)if(n.hasOwnProperty(i)){var b=n[i];if(b!=null)switch(i){case"name":a=b;break;case"type":s=b;break;case"checked":r=b;break;case"defaultChecked":g=b;break;case"value":l=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:ct(t,e,i,b,n,null)}}Nr(t,l,o,r,g,s,a,!1);return;case"select":Y("invalid",t),i=s=l=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ct(t,e,a,o,n,null)}e=l,n=s,t.multiple=!!i,e!=null?ti(t,!!i,e,!1):n!=null&&ti(t,!!i,n,!0);return;case"textarea":Y("invalid",t),l=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(f(91));break;default:ct(t,e,s,o,n,null)}qr(t,i,a,l);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(i=n[r],i!=null))switch(r){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ct(t,e,r,i,n,null)}return;case"dialog":Y("beforetoggle",t),Y("toggle",t),Y("cancel",t),Y("close",t);break;case"iframe":case"object":Y("load",t);break;case"video":case"audio":for(i=0;i<ya.length;i++)Y(ya[i],t);break;case"image":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"embed":case"source":case"link":Y("error",t),Y("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(i=n[g],i!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ct(t,e,g,i,n,null)}return;default:if(is(e)){for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!==void 0&&Yo(t,e,b,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ct(t,e,o,i,n,null))}function pg(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,s=null,o=null,r=null,g=null,b=null;for(p in n){var A=n[p];if(n.hasOwnProperty(p)&&A!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=A;default:i.hasOwnProperty(p)||ct(t,e,p,null,i,A)}}for(var m in i){var p=i[m];if(A=n[m],i.hasOwnProperty(m)&&(p!=null||A!=null))switch(m){case"type":l=p;break;case"name":a=p;break;case"checked":g=p;break;case"defaultChecked":b=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(f(137,e));break;default:p!==A&&ct(t,e,m,p,i,A)}}es(t,s,o,r,g,b,l,a);return;case"select":p=s=o=m=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":p=r;default:i.hasOwnProperty(l)||ct(t,e,l,null,i,r)}for(a in i)if(l=i[a],r=n[a],i.hasOwnProperty(a)&&(l!=null||r!=null))switch(a){case"value":m=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==r&&ct(t,e,a,l,i,r)}e=o,n=s,i=p,m!=null?ti(t,!!n,m,!1):!!i!=!!n&&(e!=null?ti(t,!!n,e,!0):ti(t,!!n,n?[]:"",!1));return;case"textarea":p=m=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ct(t,e,o,null,i,a)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":m=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==l&&ct(t,e,s,a,i,l)}Or(t,m,p);return;case"option":for(var E in n)if(m=n[E],n.hasOwnProperty(E)&&m!=null&&!i.hasOwnProperty(E))switch(E){case"selected":t.selected=!1;break;default:ct(t,e,E,null,i,m)}for(r in i)if(m=i[r],p=n[r],i.hasOwnProperty(r)&&m!==p&&(m!=null||p!=null))switch(r){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ct(t,e,r,m,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in n)m=n[H],n.hasOwnProperty(H)&&m!=null&&!i.hasOwnProperty(H)&&ct(t,e,H,null,i,m);for(g in i)if(m=i[g],p=n[g],i.hasOwnProperty(g)&&m!==p&&(m!=null||p!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(137,e));break;default:ct(t,e,g,m,i,p)}return;default:if(is(e)){for(var dt in n)m=n[dt],n.hasOwnProperty(dt)&&m!==void 0&&!i.hasOwnProperty(dt)&&Yo(t,e,dt,void 0,i,m);for(b in i)m=i[b],p=n[b],!i.hasOwnProperty(b)||m===p||m===void 0&&p===void 0||Yo(t,e,b,m,i,p);return}}for(var d in n)m=n[d],n.hasOwnProperty(d)&&m!=null&&!i.hasOwnProperty(d)&&ct(t,e,d,null,i,m);for(A in i)m=i[A],p=n[A],!i.hasOwnProperty(A)||m===p||m==null&&p==null||ct(t,e,A,m,i,p)}function Ud(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],l=a.transferSize,s=a.initiatorType,o=a.duration;if(l&&o&&Ud(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var r=n[i],g=r.startTime;if(g>o)break;var b=r.transferSize,A=r.initiatorType;b&&Ud(A)&&(r=r.responseEnd,s+=b*(r<o?1:(o-g)/(r-g)))}if(--i,e+=8*(l+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qo=null,Xo=null;function Ol(t){return t.nodeType===9?t:t.ownerDocument}function kd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _d(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ko=null;function yg(){var t=window.event;return t&&t.type==="popstate"?t===Ko?!1:(Ko=t,!0):(Ko=null,!1)}var jd=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(t){return Gd.resolve(null).then(t).catch(Ag)}:jd;function Ag(t){setTimeout(function(){throw t})}function wn(t){return t==="head"}function Ld(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Oi(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Sa(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Sa(n);for(var l=n.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[_i]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&Sa(t.ownerDocument.body);n=a}while(n);Oi(e)}function Id(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Jo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jo(n),$l(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Tg(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[_i])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Re(t.nextSibling),t===null)break}return null}function wg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Re(t.nextSibling),t===null))return null;return t}function Vd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Re(t.nextSibling),t===null))return null;return t}function Po(t){return t.data==="$?"||t.data==="$~"}function Wo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cg(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Re(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fo=null;function Yd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Re(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Qd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Xd(t,e,n){switch(e=Ol(n),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Sa(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$l(t)}var xe=new Map,Zd=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var nn=M.d;M.d={f:Mg,r:Dg,D:Eg,C:Rg,L:xg,m:zg,X:Og,S:Ng,M:qg};function Mg(){var t=nn.f(),e=Cl();return t||e}function Dg(t){var e=Wn(t);e!==null&&e.tag===5&&e.type==="form"?cc(e):nn.r(t)}var xi=typeof document>"u"?null:document;function Kd(t,e,n){var i=xi;if(i&&typeof e=="string"&&e){var a=Ae(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Zd.has(a)||(Zd.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Vt(e,"link",t),qt(e),i.head.appendChild(e)))}}function Eg(t){nn.D(t),Kd("dns-prefetch",t,null)}function Rg(t,e){nn.C(t,e),Kd("preconnect",t,e)}function xg(t,e,n){nn.L(t,e,n);var i=xi;if(i&&t&&e){var a='link[rel="preload"][as="'+Ae(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ae(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ae(n.imageSizes)+'"]')):a+='[href="'+Ae(t)+'"]';var l=a;switch(e){case"style":l=zi(t);break;case"script":l=Ni(t)}xe.has(l)||(t=q({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),xe.set(l,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Aa(l))||e==="script"&&i.querySelector(Ta(l))||(e=i.createElement("link"),Vt(e,"link",t),qt(e),i.head.appendChild(e)))}}function zg(t,e){nn.m(t,e);var n=xi;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ae(i)+'"][href="'+Ae(t)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ni(t)}if(!xe.has(l)&&(t=q({rel:"modulepreload",href:t},e),xe.set(l,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ta(l)))return}i=n.createElement("link"),Vt(i,"link",t),qt(i),n.head.appendChild(i)}}}function Ng(t,e,n){nn.S(t,e,n);var i=xi;if(i&&t){var a=Fn(i).hoistableStyles,l=zi(t);e=e||"default";var s=a.get(l);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Aa(l)))o.loading=5;else{t=q({rel:"stylesheet",href:t,"data-precedence":e},n),(n=xe.get(l))&&$o(t,n);var r=s=i.createElement("link");qt(r),Vt(r,"link",t),r._p=new Promise(function(g,b){r.onload=g,r.onerror=b}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hl(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(l,s)}}}function Og(t,e){nn.X(t,e);var n=xi;if(n&&t){var i=Fn(n).hoistableScripts,a=Ni(t),l=i.get(a);l||(l=n.querySelector(Ta(a)),l||(t=q({src:t,async:!0},e),(e=xe.get(a))&&tr(t,e),l=n.createElement("script"),qt(l),Vt(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function qg(t,e){nn.M(t,e);var n=xi;if(n&&t){var i=Fn(n).hoistableScripts,a=Ni(t),l=i.get(a);l||(l=n.querySelector(Ta(a)),l||(t=q({src:t,async:!0,type:"module"},e),(e=xe.get(a))&&tr(t,e),l=n.createElement("script"),qt(l),Vt(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Jd(t,e,n,i){var a=(a=L.current)?ql(a):null;if(!a)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=zi(n.href),n=Fn(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=zi(n.href);var l=Fn(a).hoistableStyles,s=l.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,s),(l=a.querySelector(Aa(t)))&&!l._p&&(s.instance=l,s.state.loading=5),xe.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xe.set(t,n),l||Hg(a,t,n,s.state))),e&&i===null)throw Error(f(528,""));return s}if(e&&i!==null)throw Error(f(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ni(n),n=Fn(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function zi(t){return'href="'+Ae(t)+'"'}function Aa(t){return'link[rel="stylesheet"]['+t+"]"}function Pd(t){return q({},t,{"data-precedence":t.precedence,precedence:null})}function Hg(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Vt(e,"link",n),qt(e),t.head.appendChild(e))}function Ni(t){return'[src="'+Ae(t)+'"]'}function Ta(t){return"script[async]"+t}function Wd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Ae(n.href)+'"]');if(i)return e.instance=i,qt(i),i;var a=q({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),qt(i),Vt(i,"style",a),Hl(i,n.precedence,t),e.instance=i;case"stylesheet":a=zi(n.href);var l=t.querySelector(Aa(a));if(l)return e.state.loading|=4,e.instance=l,qt(l),l;i=Pd(n),(a=xe.get(a))&&$o(i,a),l=(t.ownerDocument||t).createElement("link"),qt(l);var s=l;return s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Vt(l,"link",i),e.state.loading|=4,Hl(l,n.precedence,t),e.instance=l;case"script":return l=Ni(n.src),(a=t.querySelector(Ta(l)))?(e.instance=a,qt(a),a):(i=n,(a=xe.get(l))&&(i=q({},n),tr(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),qt(a),Vt(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Hl(i,n.precedence,t));return e.instance}function Hl(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function $o(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Bl=null;function Fd(t,e,n){if(Bl===null){var i=new Map,a=Bl=new Map;a.set(n,i)}else a=Bl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var l=n[a];if(!(l[_i]||l[jt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(l):i.set(s,[l])}}return i}function $d(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Bg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ug(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=zi(i.href),l=e.querySelector(Aa(a));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ul.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=l,qt(l);return}l=e.ownerDocument||e,i=Pd(i),(a=xe.get(a))&&$o(i,a),l=l.createElement("link"),qt(l);var s=l;s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Vt(l,"link",i),n.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ul.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var er=0;function kg(t,e){return t.stylesheets&&t.count===0&&_l(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&_l(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&er===0&&(er=62500*vg());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_l(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>er?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Ul(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function _l(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,e.forEach(_g,t),kl=null,Ul.call(t))}function _g(t,e){if(!(e.state.loading&4)){var n=kl.get(t);if(n)var i=n.get(null);else{n=new Map,kl.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var s=a[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),l=n.get(s)||i,l===i&&n.set(null,a),n.set(s,a),this.count++,i=Ul.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var wa={$$typeof:Ct,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function jg(t,e,n,i,a,l,s,o,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.hiddenUpdates=Jl(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ef(t,e,n,i,a,l,s,o,r,g,b,A){return t=new jg(t,e,n,s,r,g,b,A,o),e=1,l===!0&&(e|=24),l=de(3,null,null,e),t.current=l,l.stateNode=t,e=qs(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:e},ks(l),t}function nf(t){return t?(t=ri,t):ri}function af(t,e,n,i,a,l){a=nf(a),i.context===null?i.context=a:i.pendingContext=a,i=fn(e),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=hn(t,i,e),n!==null&&(ie(n,t,e),ea(n,t,e))}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nr(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function sf(t){if(t.tag===13||t.tag===31){var e=Bn(t,67108864);e!==null&&ie(e,t,67108864),nr(t,67108864)}}function of(t){if(t.tag===13||t.tag===31){var e=pe();e=Pl(e);var n=Bn(t,e);n!==null&&ie(n,t,e),nr(t,e)}}var jl=!0;function Gg(t,e,n,i){var a=y.T;y.T=null;var l=M.p;try{M.p=2,ir(t,e,n,i)}finally{M.p=l,y.T=a}}function Lg(t,e,n,i){var a=y.T;y.T=null;var l=M.p;try{M.p=8,ir(t,e,n,i)}finally{M.p=l,y.T=a}}function ir(t,e,n,i){if(jl){var a=ar(i);if(a===null)Vo(t,e,i,Gl,n),uf(t,i);else if(Vg(a,t,e,n,i))i.stopPropagation();else if(uf(t,i),e&4&&-1<Ig.indexOf(t)){for(;a!==null;){var l=Wn(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=zn(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var r=1<<31-ue(s);o.entanglements[1]|=r,s&=~r}_e(l),(et&6)===0&&(Tl=oe()+500,va(0))}}break;case 31:case 13:o=Bn(l,2),o!==null&&ie(o,l,2),Cl(),nr(l,2)}if(l=ar(i),l===null&&Vo(t,e,i,Gl,n),l===a)break;a=l}a!==null&&i.stopPropagation()}else Vo(t,e,i,null,n)}}function ar(t){return t=ls(t),lr(t)}var Gl=null;function lr(t){if(Gl=null,t=Pn(t),t!==null){var e=J(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=P(e),t!==null)return t;t=null}else if(n===31){if(t=Tt(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gl=t,null}function rf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ef()){case mr:return 2;case pr:return 8;case xa:case Rf:return 32;case vr:return 268435456;default:return 32}default:return 32}}var sr=!1,Cn=null,Mn=null,Dn=null,Ca=new Map,Ma=new Map,En=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uf(t,e){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Da(t,e,n,i,a,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},e!==null&&(e=Wn(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Vg(t,e,n,i,a){switch(e){case"focusin":return Cn=Da(Cn,t,e,n,i,a),!0;case"dragenter":return Mn=Da(Mn,t,e,n,i,a),!0;case"mouseover":return Dn=Da(Dn,t,e,n,i,a),!0;case"pointerover":var l=a.pointerId;return Ca.set(l,Da(Ca.get(l)||null,t,e,n,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Ma.set(l,Da(Ma.get(l)||null,t,e,n,i,a)),!0}return!1}function cf(t){var e=Pn(t.target);if(e!==null){var n=J(e);if(n!==null){if(e=n.tag,e===13){if(e=P(n),e!==null){t.blockedOn=e,wr(t.priority,function(){of(n)});return}}else if(e===31){if(e=Tt(n),e!==null){t.blockedOn=e,wr(t.priority,function(){of(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ar(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);as=i,n.target.dispatchEvent(i),as=null}else return e=Wn(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function df(t,e,n){Ll(t)&&n.delete(e)}function Yg(){sr=!1,Cn!==null&&Ll(Cn)&&(Cn=null),Mn!==null&&Ll(Mn)&&(Mn=null),Dn!==null&&Ll(Dn)&&(Dn=null),Ca.forEach(df),Ma.forEach(df)}function Il(t,e){t.blockedOn===e&&(t.blockedOn=null,sr||(sr=!0,R.unstable_scheduleCallback(R.unstable_NormalPriority,Yg)))}var Vl=null;function ff(t){Vl!==t&&(Vl=t,R.unstable_scheduleCallback(R.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(lr(i||n)===null)continue;break}var l=Wn(n);l!==null&&(t.splice(e,3),e-=3,io(l,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Oi(t){function e(r){return Il(r,t)}Cn!==null&&Il(Cn,t),Mn!==null&&Il(Mn,t),Dn!==null&&Il(Dn,t),Ca.forEach(e),Ma.forEach(e);for(var n=0;n<En.length;n++){var i=En[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<En.length&&(n=En[0],n.blockedOn===null);)cf(n),n.blockedOn===null&&En.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],s=a[Wt]||null;if(typeof l=="function")s||ff(n);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,s=l[Wt]||null)o=s.formAction;else if(lr(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ff(n)}}}function hf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function or(t){this._internalRoot=t}Yl.prototype.render=or.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var n=e.current,i=pe();af(n,i,t,e,null,null)},Yl.prototype.unmount=or.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;af(t.current,2,null,t,null,null),Cl(),e[Jn]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tr();t={blockedOn:null,target:t,priority:e};for(var n=0;n<En.length&&e!==0&&e<En[n].priority;n++);En.splice(n,0,t),n===0&&cf(t)}};var gf=ht.version;if(gf!=="19.2.0")throw Error(f(527,gf,"19.2.0"));M.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=w(e),t=t!==null?Q(t):null,t=t===null?null:t.stateNode,t};var Qg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Bi=Ql.inject(Qg),re=Ql}catch{}}return Ra.createRoot=function(t,e){if(!_(t))throw Error(f(299));var n=!1,i="",a=Sc,l=Ac,s=Tc;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,i,null,a,l,s,hf),t[Jn]=e.current,Io(t),new or(e)},Ra.hydrateRoot=function(t,e,n){if(!_(t))throw Error(f(299));var i=!1,a="",l=Sc,s=Ac,o=Tc,r=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),e=ef(t,1,!0,e,n??null,i,a,r,l,s,o,hf),e.context=nf(null),n=e.current,i=pe(),i=Pl(i),a=fn(i),a.callback=null,hn(n,a,i),n=i,e.current.lanes=n,ki(e,n),_e(e),t[Jn]=e.current,Io(t),new Yl(e)},Ra.version="19.2.0",Ra}var Cf;function em(){if(Cf)return cr.exports;Cf=1;function R(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R)}catch(ht){console.error(ht)}}return R(),cr.exports=tm(),cr.exports}var nm=em();const im=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
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
        `}]}],am={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1}]},lm={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
          `}]}]},om={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING - SET 3",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Differentiate between User Mobility and Device Portability.",answer:"<strong>User Mobility:</strong> The user can move between different physical locations and use different devices.<br/><strong>Device Portability:</strong> The device can be moved to different locations while maintaining connectivity."},{unit:"I",id:2,question:"What is Spread Spectrum?",answer:"<strong>Spread Spectrum:</strong> A technique where a signal is transmitted on a bandwidth much larger than the frequency content of the original information, to minimize interference and improve security."},{unit:"II",id:3,question:"What is Frequency Reuse?",answer:"<strong>Frequency Reuse:</strong> The practice of using the same radio frequencies in different geographic areas (cells) that are separated by sufficient distance to avoid interference."},{unit:"II",id:4,question:"Define Agent Advertisement.",answer:"<strong>Agent Advertisement:</strong> A method in Mobile IP where Home Agents and Foreign Agents periodically broadcast their presence to let Mobile Nodes know which network they are in."},{unit:"III",id:5,question:"What is Fast Retransmit?",answer:"<strong>Fast Retransmit:</strong> A TCP enhancement where the sender retransmits a packet after receiving 3 duplicate ACKs, without waiting for the timeout timer to expire."},{unit:"III",id:6,question:"Define Transaction Oriented TCP.",answer:"<strong>T-TCP:</strong> A TCP extension designed to make TCP more efficient for transactions (request-response) by combining the connection setup, data transfer, and connection teardown."},{unit:"IV",id:7,question:"What is Indexing in data dissemination?",answer:"<strong>Indexing:</strong> A technique where a directory of data locations is broadcasted before the actual data, allowing clients to know exactly when their desired data will arrive."},{unit:"IV",id:8,question:"What is Cache Invalidation?",answer:"<strong>Cache Invalidation:</strong> The process of removing or marking as invalid the data in the local cache when the original data on the server has changed."},{unit:"V",id:9,question:"What is a Wormhole Attack?",answer:"<strong>Wormhole Attack:</strong> A severe attack in MANETs where an attacker records packets at one location and tunnels them to another location to replay them, disrupting routing."},{unit:"V",id:10,question:"Define J2ME.",answer:"<strong>Java 2 Micro Edition (J2ME):</strong> A Java platform designed for embedded systems and mobile devices, providing a robust environment for application development."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Discuss the evolution of Mobile Communication from 1G to 5G.",answer:`
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
          `}]}]},rm=[{category:"General Exam Strategy",tips:[{title:"The 15-Minute Rule",content:"Use the first 15 minutes to read the paper. Don't write. Just plan. Mark the questions you know 100% and attempt them first."},{title:"Time Management",content:"Allocate time based on marks. Don't spend 30 minutes on a 2-mark question. For a 10-mark question, aim for 15-20 minutes max."},{title:"Presentation Matters",content:"Examiners scan papers. Use bullet points, bold keywords, and leave space between answers. A messy paper is hard to grade."}]},{category:"Universal Answering Hacks (When You Forget)",tips:[{title:"The 'Definition-Diagram-Application' Framework",content:`Even if you don't know the exact answer, follow this structure:
1. **Define** the keywords in the question.
2. **Draw** a generic block diagram (Input -> Process -> Output).
3. **List** 3-4 general advantages (Speed, Efficiency, Cost) and applications.`},{title:"The 'Comparison' Hack",content:"If asked about a specific technology (e.g., 'Explain AODV'), compare it with something else (e.g., 'Unlike DSDV which is proactive...'). This fills space and shows conceptual understanding."},{title:"Generic Mobile Computing Points",content:`For almost any Mobile Computing question, you can mention these challenges/features:
- **Bandwidth Constraints**
- **Battery Limitations**
- **Security Risks**
- **Mobility Management**
- **Dynamic Topology**`}]},{category:"Diagram Hacks",tips:[{title:"Block Diagrams are King",content:"If you forget the specific architecture, draw a logical block diagram. Label boxes as 'Client', 'Server', 'Database', 'Network'. It earns partial marks."},{title:"Flowcharts for Algorithms",content:"Instead of writing paragraphs for algorithms (like DSR/AODV), draw a flowchart. It's faster to write and easier to check."}]}],um=[{id:1,unit:"I",front:"Mobile Computing Definition",back:`
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
    `}],cm=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit covers the fundamental principles of sensors, their classification, and detailed study of electromechanical sensors like Strain Gauges and Capacitive Sensors.</p>",topics:[{title:"Sensors & Transducers Basics",content:`
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
        `}]}],dm={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1}]},fm={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer.",answer:"Sensor detects physical parameter. Transducer converts energy form."},{id:2,question:"What is Gauge Factor?",answer:"Sensitivity of strain gauge. GF = (dR/R)/strain."},{id:3,question:"State Seebeck Effect.",answer:"EMF generation at junction of dissimilar metals due to temp diff."},{id:4,question:"What is a Thermistor?",answer:"Resistor with high negative temp coefficient."},{id:5,question:"Define Hall Effect.",answer:"Voltage generation perpendicular to current and magnetic field."},{id:6,question:"What is LVDT?",answer:"Linear Variable Differential Transformer for displacement."},{id:7,question:"What is LDR?",answer:"Light Dependent Resistor."},{id:8,question:"Define SHE.",answer:"Standard Hydrogen Electrode (0V reference)."},{id:9,question:"What is a Smart Sensor?",answer:"Sensor with built-in processing and communication."},{id:10,question:"List 2 automotive sensors.",answer:"ABS sensor, Airbag sensor."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the working principle of Strain Gauge.",answer:"Detailed explanation of piezoresistive effect..."},{question:"Describe Capacitive Transducers.",answer:"Principle C=eA/d and applications..."}]}]},hm=[{category:"Sensor Diagrams",tips:[{title:"Draw the Block Diagram",content:"For any sensor (e.g., Smart Sensor), always draw: **Input -> Sensing Element -> Signal Conditioning -> ADC -> Output**."}]}],gm=[{id:1,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>Device converting energy from one form to another.</p></div>'},{id:2,unit:"I",front:"Gauge Factor",back:'<div class="fc-content"><p>Sensitivity of Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong></p></div>'},{id:3,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Generation of EMF when two dissimilar metals are kept at different temperatures.</p></div>'},{id:4,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Voltage generated perpendicular to both current and magnetic field.</p></div>'},{id:5,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>Sensor + Signal Conditioning + ADC + Processor.</p></div>'}],mm=[{unit:"I",title:"Professional Practice and Ethics",notes:"<h3>Unit I Overview</h3><p>This unit lays the foundation for ethical practice in engineering, distinguishing between personal and professional ethics, and defining the core responsibilities and liabilities of a professional.</p>",topics:[{title:"Definition of Professional Ethics",content:`
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
        `}]}],pm={I:[{id:1,question:"What is the primary focus of Engineering Ethics?",options:["Profit Maximization","Public Safety","Personal Gain","Corporate Loyalty"],answer:1}],II:[],III:[],IV:[],V:[]},vm={title:"Professional Practice, Law & Ethics - Model Paper 1",subject:"Professional Practice, Law & Ethics",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Professional Ethics.",answer:"<strong>Professional Ethics</strong> refers to the personal and corporate rules that govern behavior within the context of a particular profession. It involves principles of conduct, integrity, and responsibility towards the public, clients, and employers."},{id:2,question:"What is the main objective of Engineering Ethics?",answer:"The main objective is to ensure that engineers uphold the highest standards of integrity and prioritize the <strong>safety, health, and welfare of the public</strong> in the performance of their professional duties."},{id:3,question:"Define a 'Contract' as per the Indian Contract Act, 1872.",answer:"According to Section 2(h) of the Indian Contract Act, 1872, a <strong>Contract</strong> is an agreement enforceable by law. <br><em>Formula: Contract = Agreement + Enforceability.</em>"},{id:4,question:"What is meant by 'Quid Pro Quo' in a contract?",answer:"<strong>Quid Pro Quo</strong> means 'something in return'. In legal terms, it refers to <strong>Consideration</strong>, which is an essential element of a valid contract. Without consideration, a contract is generally void."},{id:5,question:"Define Arbitration.",answer:"<strong>Arbitration</strong> is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute."},{id:6,question:"What is an Arbitral Award?",answer:"An <strong>Arbitral Award</strong> is the final decision or judgment given by the arbitration tribunal. It is binding on the parties and is enforceable in the same manner as a court decree."},{id:7,question:"What is the purpose of the Industrial Employment (Standing Orders) Act, 1946?",answer:"Its purpose is to require employers in industrial establishments to formally define conditions of employment (standing orders) and make them known to workmen to prevent ambiguity and disputes."},{id:8,question:"Define 'Workman' under the Workmen's Compensation Act.",answer:"A <strong>Workman</strong> is any person (other than a person whose employment is of a casual nature) who is employed for the purposes of the employer's trade or business."},{id:9,question:"What does IPR stand for? Give two examples.",answer:"<strong>IPR</strong> stands for <strong>Intellectual Property Rights</strong>. Examples include: <br>1. <strong>Patents</strong> (for inventions). <br>2. <strong>Copyrights</strong> (for literary/artistic works)."},{id:10,question:"What is the validity period of a Patent in India?",answer:"The term of every patent granted in India is <strong>20 years</strong> from the date of filing of the application."}],partB:[{unit:"I",questionNumber:2,choices:[{question:"Explain the difference between Personal Ethics and Professional Ethics with suitable examples. Discuss the concept of Professional Responsibility.",answer:`
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
          `}]}]},ym=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],bm=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}];function Sm(){const[R,ht]=Bt.useState(null),f=R==="sensors"?{title:"Electronic Sensors",syllabus:cm,quizzes:dm,papers:[fm],tips:hm,flashcards:gm,progressKey:"electronicSensorsProgress"}:R==="pple"?{title:"Professional Practice, Law & Ethics",syllabus:mm,quizzes:pm,papers:[vm],tips:ym,flashcards:bm,progressKey:"ppleProgress"}:{title:"Mobile Computing",syllabus:im,quizzes:am,papers:[lm,sm,om],tips:rm,flashcards:um,progressKey:"mobileComputingProgress"},[_,J]=Bt.useState(null),[P,Tt]=Bt.useState(null),[z,w]=Bt.useState("study"),[Q,q]=Bt.useState(0),[lt,Ot]=Bt.useState(0),[Yt,wt]=Bt.useState(!1),[Pt,Qt]=Bt.useState([]),[Ut,Ct]=Bt.useState({}),[Kt,ae]=Bt.useState(0),[xt,I]=Bt.useState({}),[kt,le]=Bt.useState({}),[qe,se]=Bt.useState(null),[zt,ve]=Bt.useState(0),[ye,Xt]=Bt.useState(!1),[y,M]=Bt.useState([]);Bt.useEffect(()=>{if(R){const C=localStorage.getItem(f.progressKey);Ct(C?JSON.parse(C):{}),w("study"),J(null),Tt(null),M([...f.flashcards]),ve(0),ae(0)}},[R,f.progressKey,f.flashcards]);const B=(C,F,it)=>{const be=Ut[C]?.score||0;if(F>be){const Hi={...Ut,[C]:{score:F,total:it}};Ct(Hi),localStorage.setItem(f.progressKey,JSON.stringify(Hi))}},nt=C=>{J(_===C?null:C)},st=C=>se(C),c=()=>se(null),T=C=>{f.quizzes[C]?(Tt(C),q(0),Ot(0),wt(!1)):alert("Quiz coming soon for this unit!")},D=()=>{let C=[];Object.values(f.quizzes).forEach(be=>{C=[...C,...be]});const it=C.sort(()=>.5-Math.random()).slice(0,10);Qt(it),Tt("FINAL"),q(0),Ot(0),wt(!1)},x=C=>{let F=!1;const it=P==="FINAL"?Pt:f.quizzes[P];C===it[Q].answer&&(F=!0),F&&Ot(lt+1);const be=Q+1;be<it.length?q(be):(wt(!0),B(P,F?lt+1:lt,it.length))},U=()=>{Tt(null),q(0),Ot(0),wt(!1),Qt([])},L=C=>{I(F=>({...F,[C]:!F[C]}))},W=(C,F)=>{le(it=>({...it,[C]:F}))},_t=C=>{ae(C),I({}),le({}),window.scrollTo(0,0)},vt=()=>{Xt(!1),setTimeout(()=>ve(C=>(C+1)%y.length),200)},xn=()=>{Xt(!1),setTimeout(()=>ve(C=>(C-1+y.length)%y.length),200)},Kn=()=>Xt(!ye),qi=()=>{Xt(!1),setTimeout(()=>{const C=[...f.flashcards].sort(()=>.5-Math.random());M(C),ve(0)},200)};if(!R)return v.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[v.jsx("h1",{children:"Select Your Subject"}),v.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[v.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("mobile"),children:[v.jsx("h2",{children:"📱 Mobile Computing"}),v.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),v.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),v.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("sensors"),children:[v.jsx("h2",{children:"🌡️ Electronic Sensors"}),v.jsx("p",{children:"Unit I - V, Open Elective-II"}),v.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),v.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("pple"),children:[v.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),v.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),v.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const He=f.papers[Kt];return v.jsxs("div",{className:"container",children:[v.jsxs("header",{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[v.jsx("button",{className:"btn",onClick:()=>ht(null),children:"← Switch Subject"}),v.jsx("span",{className:"unit-badge",children:f.title})]}),v.jsxs("h1",{children:[f.title," Prep"]}),v.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),v.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[v.jsx("button",{className:`btn ${z==="study"?"btn-primary":""}`,onClick:()=>w("study"),children:"Study Mode"}),v.jsx("button",{className:`btn ${z==="paper"?"btn-primary":""}`,onClick:()=>w("paper"),children:"Model Papers"}),v.jsx("button",{className:`btn ${z==="tips"?"btn-primary":""}`,onClick:()=>w("tips"),children:"Exam Tips"}),v.jsx("button",{className:`btn ${z==="flashcards"?"btn-primary":""}`,onClick:()=>w("flashcards"),children:"Flashcards"})]}),z==="study"&&v.jsxs(v.Fragment,{children:[v.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:D,children:"Start Final Exam (Mixed)"}),Ut.FINAL&&v.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Ut.FINAL.score,"/",Ut.FINAL.total]})]})]}),z==="study"&&v.jsx("main",{className:"grid",children:f.syllabus.map(C=>v.jsxs("div",{className:"card",children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsxs("span",{className:"unit-badge",children:["Unit ",C.unit]}),Ut[C.unit]&&v.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Ut[C.unit].score,"/",Ut[C.unit].total]})]}),v.jsx("h2",{children:C.title}),_===C.unit&&C.notes?v.jsx("div",{className:"notes-content",children:v.jsx("div",{dangerouslySetInnerHTML:{__html:C.notes}})}):v.jsxs("div",{className:"topics-list-container",children:[v.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),v.jsx("div",{className:"topics-grid",children:C.topics.map((F,it)=>v.jsx("button",{className:"topic-btn",onClick:()=>st(F),children:F.title},it))})]}),v.jsxs("div",{className:"actions",children:[v.jsx("button",{className:`btn ${_===C.unit?"btn-primary":""}`,onClick:()=>C.notes?nt(C.unit):alert("Notes coming soon!"),children:_===C.unit?"Hide Overview":"Unit Overview"}),v.jsx("button",{className:"btn btn-primary",onClick:()=>T(C.unit),children:"Take Quiz"})]})]},C.unit))}),z==="paper"&&v.jsxs("main",{className:"paper-container",children:[v.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:f.papers.map((C,F)=>v.jsxs("button",{className:`btn ${Kt===F?"btn-primary":""}`,onClick:()=>_t(F),children:["Paper Set ",F+1]},F))}),v.jsxs("div",{className:"paper-header",children:[v.jsx("h2",{children:He.title}),v.jsx("h3",{children:He.subject}),v.jsxs("div",{className:"paper-meta",children:[v.jsxs("span",{children:["Time: ",He.time]}),v.jsxs("span",{children:["Max Marks: ",He.maxMarks]})]})]}),v.jsxs("div",{className:"paper-section",children:[v.jsx("h3",{children:"PART-A (Short Answer Questions)"}),v.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),v.jsx("div",{className:"questions-list",children:He.partA.map(C=>v.jsxs("div",{className:"question-item",children:[v.jsxs("div",{className:"question-text",children:[v.jsxs("strong",{children:[C.id,"."]})," ",C.question," ",v.jsx("span",{className:"marks",children:"[1M]"})]}),v.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:kt[`A-${C.id}`]||"",onChange:F=>W(`A-${C.id}`,F.target.value)}),v.jsx("button",{className:"btn-text",onClick:()=>L(`A-${C.id}`),children:xt[`A-${C.id}`]?"Hide Model Answer":"Show Model Answer"}),xt[`A-${C.id}`]&&v.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:C.answer}})]},C.id))})]}),He.partB&&v.jsxs("div",{className:"paper-section",children:[v.jsx("h3",{children:"PART-B (Long Answer Questions)"}),v.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),v.jsx("div",{className:"questions-list",children:He.partB.map(C=>v.jsxs("div",{className:"question-group",children:[v.jsxs("h4",{children:["Unit ",C.unit]}),C.choices.map((F,it)=>v.jsxs("div",{children:[v.jsxs("div",{className:"question-item",children:[v.jsxs("div",{className:"question-text",children:[v.jsxs("strong",{children:[C.questionNumber," (",String.fromCharCode(97+it),")."]})," ",F.question," ",v.jsx("span",{className:"marks",children:"[10M]"})]}),v.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:kt[`B-${C.questionNumber}${it}`]||"",onChange:be=>W(`B-${C.questionNumber}${it}`,be.target.value)}),v.jsx("button",{className:"btn-text",onClick:()=>L(`B-${C.questionNumber}${it}`),children:xt[`B-${C.questionNumber}${it}`]?"Hide Model Answer":"Show Model Answer"}),xt[`B-${C.questionNumber}${it}`]&&v.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:F.answer}})]}),it===0&&v.jsx("div",{className:"or-divider",children:"OR"})]},it))]},C.questionNumber))})]})]}),z==="tips"&&v.jsxs("main",{className:"tips-container",children:[v.jsxs("div",{className:"tips-header",children:[v.jsx("h2",{children:"Exam Tips & Hacks"}),v.jsx("p",{children:"Master the art of writing exams with these strategic insights."})]}),v.jsx("div",{className:"tips-grid",children:f.tips.map((C,F)=>v.jsxs("div",{className:"tip-section",children:[v.jsx("h3",{children:C.category}),v.jsx("div",{className:"tips-list",children:C.tips.map((it,be)=>v.jsxs("div",{className:"tip-card",children:[v.jsx("h4",{children:it.title}),v.jsx("div",{dangerouslySetInnerHTML:{__html:it.content.replace(/\n/g,"<br/>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}})]},be))})]},F))})]}),z==="flashcards"&&y.length>0&&v.jsxs("main",{className:"flashcard-container",children:[v.jsxs("div",{className:"flashcard-header",children:[v.jsx("h2",{children:"Interactive Flashcards"}),v.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),v.jsx("div",{className:"flashcard-scene",children:v.jsxs("div",{className:`flashcard ${ye?"flipped":""}`,onClick:Kn,children:[v.jsxs("div",{className:"flashcard-face flashcard-front",children:[v.jsxs("span",{className:"card-unit",children:["Unit ",y[zt].unit]}),v.jsx("h3",{children:y[zt].front}),v.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),v.jsx("div",{className:"flashcard-face flashcard-back",children:v.jsx("div",{dangerouslySetInnerHTML:{__html:y[zt].back}})})]})}),v.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[v.jsx("button",{className:"btn btn-primary",onClick:xn,children:"← Previous"}),v.jsxs("span",{className:"card-count",children:[zt+1," / ",y.length]}),v.jsx("button",{className:"btn btn-primary",onClick:vt,children:"Next →"})]}),v.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:v.jsx("button",{className:"btn btn-primary",onClick:qi,children:"Shuffle Cards"})})]}),P&&v.jsx("div",{className:"modal-overlay",children:v.jsxs("div",{className:"modal-content",children:[v.jsx("button",{className:"close-btn",onClick:U,children:"×"}),Yt?v.jsxs("div",{className:"score-section",children:[v.jsx("h2",{children:"Quiz Completed!"}),v.jsxs("p",{children:["Your Score: ",lt," / ",P==="FINAL"?Pt.length:f.quizzes[P].length]}),v.jsx("button",{className:"btn btn-primary",onClick:U,children:"Close"})]}):v.jsxs("div",{className:"quiz-section",children:[v.jsxs("h3",{children:[P==="FINAL"?"Final Exam":`Unit ${P} Quiz`,"- Question ",Q+1,"/",P==="FINAL"?Pt.length:f.quizzes[P].length]}),(()=>{const C=P==="FINAL"?Pt:f.quizzes[P];return v.jsxs(v.Fragment,{children:[v.jsx("p",{className:"question-text",children:C[Q].question}),v.jsx("div",{className:"options-grid",children:C[Q].options.map((F,it)=>v.jsx("button",{className:"option-btn",onClick:()=>x(it),children:F},it))})]})})()]})]})}),qe&&v.jsx("div",{className:"modal-overlay",children:v.jsxs("div",{className:"modal-content topic-modal",children:[v.jsx("button",{className:"close-btn",onClick:c,children:"×"}),v.jsxs("div",{className:"topic-content",children:[v.jsx("h2",{children:qe.title}),v.jsx("div",{dangerouslySetInnerHTML:{__html:qe.content}})]}),v.jsx("button",{className:"btn btn-primary",onClick:c,style:{marginTop:"2rem"},children:"Close"})]})})]})}nm.createRoot(document.getElementById("root")).render(v.jsx(Bt.StrictMode,{children:v.jsx(Sm,{})}));
