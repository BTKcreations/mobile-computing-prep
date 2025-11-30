(function(){const ht=document.createElement("link").relList;if(ht&&ht.supports&&ht.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))f(j);new MutationObserver(j=>{for(const J of j)if(J.type==="childList")for(const P of J.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&f(P)}).observe(document,{childList:!0,subtree:!0});function it(j){const J={};return j.integrity&&(J.integrity=j.integrity),j.referrerPolicy&&(J.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?J.credentials="include":j.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function f(j){if(j.ep)return;j.ep=!0;const J=it(j);fetch(j.href,J)}})();var rr={exports:{}},Di={};var mf;function Zg(){if(mf)return Di;mf=1;var x=Symbol.for("react.transitional.element"),ht=Symbol.for("react.fragment");function it(f,j,J){var P=null;if(J!==void 0&&(P=""+J),j.key!==void 0&&(P=""+j.key),"key"in j){J={};for(var Tt in j)Tt!=="key"&&(J[Tt]=j[Tt])}else J=j;return j=J.ref,{$$typeof:x,type:f,key:P,ref:j!==void 0?j:null,props:J}}return Di.Fragment=ht,Di.jsx=it,Di.jsxs=it,Di}var pf;function Kg(){return pf||(pf=1,rr.exports=Zg()),rr.exports}var v=Kg(),ur={exports:{}},_={};var vf;function Jg(){if(vf)return _;vf=1;var x=Symbol.for("react.transitional.element"),ht=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),P=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),lt=Symbol.iterator;function Ot(c){return c===null||typeof c!="object"?null:(c=lt&&c[lt]||c["@@iterator"],typeof c=="function"?c:null)}var Qt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wt=Object.assign,Pt={};function It(c,T,E){this.props=c,this.context=T,this.refs=Pt,this.updater=E||Qt}It.prototype.isReactComponent={},It.prototype.setState=function(c,T){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,T,"setState")},It.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Ut(){}Ut.prototype=It.prototype;function Ct(c,T,E){this.props=c,this.context=T,this.refs=Pt,this.updater=E||Qt}var Kt=Ct.prototype=new Ut;Kt.constructor=Ct,wt(Kt,It.prototype),Kt.isPureReactComponent=!0;var ie=Array.isArray;function Rt(){}var Y={H:null,A:null,T:null,S:null},_t=Object.prototype.hasOwnProperty;function le(c,T,E){var R=E.ref;return{$$typeof:x,type:c,key:T,ref:R!==void 0?R:null,props:E}}function qe(c,T){return le(c.type,T,c.props)}function se(c){return typeof c=="object"&&c!==null&&c.$$typeof===x}function zt(c){var T={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(E){return T[E]})}var ve=/\/+/g;function ye(c,T){return typeof c=="object"&&c!==null&&c.key!=null?zt(""+c.key):T.toString(36)}function Xt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Rt,Rt):(c.status="pending",c.then(function(T){c.status==="pending"&&(c.status="fulfilled",c.value=T)},function(T){c.status==="pending"&&(c.status="rejected",c.reason=T)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function y(c,T,E,R,U){var L=typeof c;(L==="undefined"||L==="boolean")&&(c=null);var W=!1;if(c===null)W=!0;else switch(L){case"bigint":case"string":case"number":W=!0;break;case"object":switch(c.$$typeof){case x:case ht:W=!0;break;case I:return W=c._init,y(W(c._payload),T,E,R,U)}}if(W)return U=U(c),W=R===""?"."+ye(c,0):R,ie(U)?(E="",W!=null&&(E=W.replace(ve,"$&/")+"/"),y(U,T,E,"",function(Rn){return Rn})):U!=null&&(se(U)&&(U=qe(U,E+(U.key==null||c&&c.key===U.key?"":(""+U.key).replace(ve,"$&/")+"/")+W)),T.push(U)),1;W=0;var jt=R===""?".":R+":";if(ie(c))for(var vt=0;vt<c.length;vt++)R=c[vt],L=jt+ye(R,vt),W+=y(R,T,E,L,U);else if(vt=Ot(c),typeof vt=="function")for(c=vt.call(c),vt=0;!(R=c.next()).done;)R=R.value,L=jt+ye(R,vt++),W+=y(R,T,E,L,U);else if(L==="object"){if(typeof c.then=="function")return y(Xt(c),T,E,R,U);throw T=String(c),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return W}function M(c,T,E){if(c==null)return c;var R=[],U=0;return y(c,R,"","",function(L){return T.call(E,L,U++)}),R}function B(c){if(c._status===-1){var T=c._result;T=T(),T.then(function(E){(c._status===0||c._status===-1)&&(c._status=1,c._result=E)},function(E){(c._status===0||c._status===-1)&&(c._status=2,c._result=E)}),c._status===-1&&(c._status=0,c._result=T)}if(c._status===1)return c._result.default;throw c._result}var nt=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},st={map:M,forEach:function(c,T,E){M(c,function(){T.apply(this,arguments)},E)},count:function(c){var T=0;return M(c,function(){T++}),T},toArray:function(c){return M(c,function(T){return T})||[]},only:function(c){if(!se(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return _.Activity=q,_.Children=st,_.Component=It,_.Fragment=it,_.Profiler=j,_.PureComponent=Ct,_.StrictMode=f,_.Suspense=z,_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,_.__COMPILER_RUNTIME={__proto__:null,c:function(c){return Y.H.useMemoCache(c)}},_.cache=function(c){return function(){return c.apply(null,arguments)}},_.cacheSignal=function(){return null},_.cloneElement=function(c,T,E){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=wt({},c.props),U=c.key;if(T!=null)for(L in T.key!==void 0&&(U=""+T.key),T)!_t.call(T,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&T.ref===void 0||(R[L]=T[L]);var L=arguments.length-2;if(L===1)R.children=E;else if(1<L){for(var W=Array(L),jt=0;jt<L;jt++)W[jt]=arguments[jt+2];R.children=W}return le(c.type,U,R)},_.createContext=function(c){return c={$$typeof:P,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:J,_context:c},c},_.createElement=function(c,T,E){var R,U={},L=null;if(T!=null)for(R in T.key!==void 0&&(L=""+T.key),T)_t.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(U[R]=T[R]);var W=arguments.length-2;if(W===1)U.children=E;else if(1<W){for(var jt=Array(W),vt=0;vt<W;vt++)jt[vt]=arguments[vt+2];U.children=jt}if(c&&c.defaultProps)for(R in W=c.defaultProps,W)U[R]===void 0&&(U[R]=W[R]);return le(c,L,U)},_.createRef=function(){return{current:null}},_.forwardRef=function(c){return{$$typeof:Tt,render:c}},_.isValidElement=se,_.lazy=function(c){return{$$typeof:I,_payload:{_status:-1,_result:c},_init:B}},_.memo=function(c,T){return{$$typeof:w,type:c,compare:T===void 0?null:T}},_.startTransition=function(c){var T=Y.T,E={};Y.T=E;try{var R=c(),U=Y.S;U!==null&&U(E,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Rt,nt)}catch(L){nt(L)}finally{T!==null&&E.types!==null&&(T.types=E.types),Y.T=T}},_.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},_.use=function(c){return Y.H.use(c)},_.useActionState=function(c,T,E){return Y.H.useActionState(c,T,E)},_.useCallback=function(c,T){return Y.H.useCallback(c,T)},_.useContext=function(c){return Y.H.useContext(c)},_.useDebugValue=function(){},_.useDeferredValue=function(c,T){return Y.H.useDeferredValue(c,T)},_.useEffect=function(c,T){return Y.H.useEffect(c,T)},_.useEffectEvent=function(c){return Y.H.useEffectEvent(c)},_.useId=function(){return Y.H.useId()},_.useImperativeHandle=function(c,T,E){return Y.H.useImperativeHandle(c,T,E)},_.useInsertionEffect=function(c,T){return Y.H.useInsertionEffect(c,T)},_.useLayoutEffect=function(c,T){return Y.H.useLayoutEffect(c,T)},_.useMemo=function(c,T){return Y.H.useMemo(c,T)},_.useOptimistic=function(c,T){return Y.H.useOptimistic(c,T)},_.useReducer=function(c,T,E){return Y.H.useReducer(c,T,E)},_.useRef=function(c){return Y.H.useRef(c)},_.useState=function(c){return Y.H.useState(c)},_.useSyncExternalStore=function(c,T,E){return Y.H.useSyncExternalStore(c,T,E)},_.useTransition=function(){return Y.H.useTransition()},_.version="19.2.0",_}var yf;function gr(){return yf||(yf=1,ur.exports=Jg()),ur.exports}var Bt=gr(),cr={exports:{}},xi={},dr={exports:{}},fr={};var bf;function Pg(){return bf||(bf=1,(function(x){function ht(y,M){var B=y.length;y.push(M);t:for(;0<B;){var nt=B-1>>>1,st=y[nt];if(0<j(st,M))y[nt]=M,y[B]=st,B=nt;else break t}}function it(y){return y.length===0?null:y[0]}function f(y){if(y.length===0)return null;var M=y[0],B=y.pop();if(B!==M){y[0]=B;t:for(var nt=0,st=y.length,c=st>>>1;nt<c;){var T=2*(nt+1)-1,E=y[T],R=T+1,U=y[R];if(0>j(E,B))R<st&&0>j(U,E)?(y[nt]=U,y[R]=B,nt=R):(y[nt]=E,y[T]=B,nt=T);else if(R<st&&0>j(U,B))y[nt]=U,y[R]=B,nt=R;else break t}}return M}function j(y,M){var B=y.sortIndex-M.sortIndex;return B!==0?B:y.id-M.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;x.unstable_now=function(){return J.now()}}else{var P=Date,Tt=P.now();x.unstable_now=function(){return P.now()-Tt}}var z=[],w=[],I=1,q=null,lt=3,Ot=!1,Qt=!1,wt=!1,Pt=!1,It=typeof setTimeout=="function"?setTimeout:null,Ut=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function Kt(y){for(var M=it(w);M!==null;){if(M.callback===null)f(w);else if(M.startTime<=y)f(w),M.sortIndex=M.expirationTime,ht(z,M);else break;M=it(w)}}function ie(y){if(wt=!1,Kt(y),!Qt)if(it(z)!==null)Qt=!0,Rt||(Rt=!0,zt());else{var M=it(w);M!==null&&Xt(ie,M.startTime-y)}}var Rt=!1,Y=-1,_t=5,le=-1;function qe(){return Pt?!0:!(x.unstable_now()-le<_t)}function se(){if(Pt=!1,Rt){var y=x.unstable_now();le=y;var M=!0;try{t:{Qt=!1,wt&&(wt=!1,Ut(Y),Y=-1),Ot=!0;var B=lt;try{e:{for(Kt(y),q=it(z);q!==null&&!(q.expirationTime>y&&qe());){var nt=q.callback;if(typeof nt=="function"){q.callback=null,lt=q.priorityLevel;var st=nt(q.expirationTime<=y);if(y=x.unstable_now(),typeof st=="function"){q.callback=st,Kt(y),M=!0;break e}q===it(z)&&f(z),Kt(y)}else f(z);q=it(z)}if(q!==null)M=!0;else{var c=it(w);c!==null&&Xt(ie,c.startTime-y),M=!1}}break t}finally{q=null,lt=B,Ot=!1}M=void 0}}finally{M?zt():Rt=!1}}}var zt;if(typeof Ct=="function")zt=function(){Ct(se)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ye=ve.port2;ve.port1.onmessage=se,zt=function(){ye.postMessage(null)}}else zt=function(){It(se,0)};function Xt(y,M){Y=It(function(){y(x.unstable_now())},M)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(y){y.callback=null},x.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_t=0<y?Math.floor(1e3/y):5},x.unstable_getCurrentPriorityLevel=function(){return lt},x.unstable_next=function(y){switch(lt){case 1:case 2:case 3:var M=3;break;default:M=lt}var B=lt;lt=M;try{return y()}finally{lt=B}},x.unstable_requestPaint=function(){Pt=!0},x.unstable_runWithPriority=function(y,M){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var B=lt;lt=y;try{return M()}finally{lt=B}},x.unstable_scheduleCallback=function(y,M,B){var nt=x.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?nt+B:nt):B=nt,y){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=B+st,y={id:I++,callback:M,priorityLevel:y,startTime:B,expirationTime:st,sortIndex:-1},B>nt?(y.sortIndex=B,ht(w,y),it(z)===null&&y===it(w)&&(wt?(Ut(Y),Y=-1):wt=!0,Xt(ie,B-nt))):(y.sortIndex=st,ht(z,y),Qt||Ot||(Qt=!0,Rt||(Rt=!0,zt()))),y},x.unstable_shouldYield=qe,x.unstable_wrapCallback=function(y){var M=lt;return function(){var B=lt;lt=M;try{return y.apply(this,arguments)}finally{lt=B}}}})(fr)),fr}var Sf;function Wg(){return Sf||(Sf=1,dr.exports=Pg()),dr.exports}var hr={exports:{}},Zt={};var Af;function Fg(){if(Af)return Zt;Af=1;var x=gr();function ht(z){var w="https://react.dev/errors/"+z;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)w+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+z+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function it(){}var f={d:{f:it,r:function(){throw Error(ht(522))},D:it,C:it,L:it,m:it,X:it,S:it,M:it},p:0,findDOMNode:null},j=Symbol.for("react.portal");function J(z,w,I){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:q==null?null:""+q,children:z,containerInfo:w,implementation:I}}var P=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tt(z,w){if(z==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Zt.createPortal=function(z,w){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(ht(299));return J(z,w,null,I)},Zt.flushSync=function(z){var w=P.T,I=f.p;try{if(P.T=null,f.p=2,z)return z()}finally{P.T=w,f.p=I,f.d.f()}},Zt.preconnect=function(z,w){typeof z=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,f.d.C(z,w))},Zt.prefetchDNS=function(z){typeof z=="string"&&f.d.D(z)},Zt.preinit=function(z,w){if(typeof z=="string"&&w&&typeof w.as=="string"){var I=w.as,q=Tt(I,w.crossOrigin),lt=typeof w.integrity=="string"?w.integrity:void 0,Ot=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;I==="style"?f.d.S(z,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:q,integrity:lt,fetchPriority:Ot}):I==="script"&&f.d.X(z,{crossOrigin:q,integrity:lt,fetchPriority:Ot,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Zt.preinitModule=function(z,w){if(typeof z=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var I=Tt(w.as,w.crossOrigin);f.d.M(z,{crossOrigin:I,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&f.d.M(z)},Zt.preload=function(z,w){if(typeof z=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var I=w.as,q=Tt(I,w.crossOrigin);f.d.L(z,I,{crossOrigin:q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Zt.preloadModule=function(z,w){if(typeof z=="string")if(w){var I=Tt(w.as,w.crossOrigin);f.d.m(z,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:I,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else f.d.m(z)},Zt.requestFormReset=function(z){f.d.r(z)},Zt.unstable_batchedUpdates=function(z,w){return z(w)},Zt.useFormState=function(z,w,I){return P.H.useFormState(z,w,I)},Zt.useFormStatus=function(){return P.H.useHostTransitionStatus()},Zt.version="19.2.0",Zt}var Tf;function $g(){if(Tf)return hr.exports;Tf=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(ht){console.error(ht)}}return x(),hr.exports=Fg(),hr.exports}var wf;function tm(){if(wf)return xi;wf=1;var x=Wg(),ht=gr(),it=$g();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function J(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(J(t)!==t)throw Error(f(188))}function w(t){var e=t.alternate;if(!e){if(e=J(t),e===null)throw Error(f(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return z(i),t;if(l===a)return z(i),e;l=l.sibling}throw Error(f(188))}if(n.return!==a.return)n=i,a=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,a=l;break}if(o===a){s=!0,a=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,a=i;break}if(o===a){s=!0,a=l,n=i;break}o=o.sibling}if(!s)throw Error(f(189))}}if(n.alternate!==a)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?t:e}function I(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=I(t),e!==null)return e;t=t.sibling}return null}var q=Object.assign,lt=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),Qt=Symbol.for("react.portal"),wt=Symbol.for("react.fragment"),Pt=Symbol.for("react.strict_mode"),It=Symbol.for("react.profiler"),Ut=Symbol.for("react.consumer"),Ct=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),qe=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function zt(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wt:return"Fragment";case It:return"Profiler";case Pt:return"StrictMode";case ie:return"Suspense";case Rt:return"SuspenseList";case le:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Qt:return"Portal";case Ct:return t.displayName||"Context";case Ut:return(t._context.displayName||"Context")+".Consumer";case Kt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return e=t.displayName||null,e!==null?e:ye(t.type)||"Memo";case _t:e=t._payload,t=t._init;try{return ye(t(e))}catch{}}return null}var Xt=Array.isArray,y=ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},nt=[],st=-1;function c(t){return{current:t}}function T(t){0>st||(t.current=nt[st],nt[st]=null,st--)}function E(t,e){st++,nt[st]=t.current,t.current=e}var R=c(null),U=c(null),L=c(null),W=c(null);function jt(t,e){switch(E(L,e),E(U,t),E(R,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?_d(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=_d(e),t=jd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(R),E(R,t)}function vt(){T(R),T(U),T(L)}function Rn(t){t.memoizedState!==null&&E(W,t);var e=R.current,n=jd(e,t.type);e!==n&&(E(U,t),E(R,n))}function Kn(t){U.current===t&&(T(R),T(U)),W.current===t&&(T(W),wi._currentValue=B)}var qa,He;function C(t){if(qa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qa=e&&e[1]||"",He=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qa+t+He}var F=!1;function at(t,e){if(!t||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(p){var m=p}Reflect.construct(t,[],A)}else{try{A.call()}catch(p){m=p}t.call(A.prototype)}}else{try{throw Error()}catch(p){m=p}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(p){if(p&&m&&typeof p.stack=="string")return[p.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var r=s.split(`
`),g=o.split(`
`);for(i=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(a===r.length||i===g.length)for(a=r.length-1,i=g.length-1;1<=a&&0<=i&&r[a]!==g[i];)i--;for(;1<=a&&0<=i;a--,i--)if(r[a]!==g[i]){if(a!==1||i!==1)do if(a--,i--,0>i||r[a]!==g[i]){var b=`
`+r[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=i);break}}}finally{F=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?C(n):""}function be(t,e){switch(t.tag){case 26:case 27:case 5:return C(t.type);case 16:return C("Lazy");case 13:return t.child!==e&&e!==null?C("Suspense Fallback"):C("Suspense");case 19:return C("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return C("Activity");default:return""}}function Ha(t){try{var e="",n=null;do e+=be(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Xl=Object.prototype.hasOwnProperty,Zl=x.unstable_scheduleCallback,Kl=x.unstable_cancelCallback,Mf=x.unstable_shouldYield,Ef=x.unstable_requestPaint,oe=x.unstable_now,Df=x.unstable_getCurrentPriorityLevel,mr=x.unstable_ImmediatePriority,pr=x.unstable_UserBlockingPriority,Ri=x.unstable_NormalPriority,xf=x.unstable_LowPriority,vr=x.unstable_IdlePriority,Rf=x.log,zf=x.unstable_setDisableYieldValue,Ba=null,re=null;function an(t){if(typeof Rf=="function"&&zf(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(Ba,t)}catch{}}var ue=Math.clz32?Math.clz32:qf,Nf=Math.log,Of=Math.LN2;function qf(t){return t>>>=0,t===0?32:31-(Nf(t)/Of|0)|0}var zi=256,Ni=262144,Oi=4194304;function zn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qi(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,l=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~l,a!==0?i=zn(a):(s&=o,s!==0?i=zn(s):n||(n=o&~t,n!==0&&(i=zn(n))))):(o=a&~l,o!==0?i=zn(o):s!==0?i=zn(s):n||(n=a&~t,n!==0&&(i=zn(n)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:i}function Ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Hf(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var t=Oi;return Oi<<=1,(Oi&62914560)===0&&(Oi=4194304),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bf(t,e,n,a,i,l){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(n=s&~n;0<n;){var b=31-ue(n),A=1<<b;o[b]=0,r[b]=-1;var m=g[b];if(m!==null)for(g[b]=null,b=0;b<m.length;b++){var p=m[b];p!==null&&(p.lane&=-536870913)}n&=~A}a!==0&&br(t,a,0),l!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=l&~(s&~e))}function br(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ue(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function Sr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-ue(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function Ar(t,e){var n=e&-e;return n=(n&42)!==0?1:Pl(n),(n&(t.suspendedLanes|e))!==0?0:n}function Pl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tr(){var t=M.p;return t!==0?t:(t=window.event,t===void 0?32:rf(t.type))}function wr(t,e){var n=M.p;try{return M.p=t,e()}finally{M.p=n}}var ln=Math.random().toString(36).slice(2),kt="__reactFiber$"+ln,Wt="__reactProps$"+ln,Jn="__reactContainer$"+ln,Fl="__reactEvents$"+ln,Uf="__reactListeners$"+ln,_f="__reactHandles$"+ln,Cr="__reactResources$"+ln,ja="__reactMarker$"+ln;function $l(t){delete t[kt],delete t[Wt],delete t[Fl],delete t[Uf],delete t[_f]}function Pn(t){var e=t[kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Id(t);t!==null;){if(n=t[kt])return n;t=Id(t)}return e}t=n,n=t.parentNode}return null}function Wn(t){if(t=t[kt]||t[Jn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ka(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Fn(t){var e=t[Cr];return e||(e=t[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function qt(t){t[ja]=!0}var Mr=new Set,Er={};function Nn(t,e){$n(t,e),$n(t+"Capture",e)}function $n(t,e){for(Er[t]=e,t=0;t<e.length;t++)Mr.add(e[t])}var jf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dr={},xr={};function kf(t){return Xl.call(xr,t)?!0:Xl.call(Dr,t)?!1:jf.test(t)?xr[t]=!0:(Dr[t]=!0,!1)}function Hi(t,e,n){if(kf(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Bi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ke(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gf(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){if(!t._valueTracker){var e=Rr(t)?"checked":"value";t._valueTracker=Gf(t,e,""+t[e])}}function zr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Rr(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Ui(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lf=/[\n"\\]/g;function Ae(t){return t.replace(Lf,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function es(t,e,n,a,i,l,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ns(t,s,Se(e)):n!=null?ns(t,s,Se(n)):a!=null&&t.removeAttribute("value"),i==null&&l!=null&&(t.defaultChecked=!!l),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Se(o):t.removeAttribute("name")}function Nr(t,e,n,a,i,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ts(t);return}n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ts(t)}function ns(t,e,n){e==="number"&&Ui(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ta(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Or(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function qr(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(f(92));if(Xt(a)){if(1<a.length)throw Error(f(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),ts(t)}function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hr(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||Yf.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Br(t,e,n){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&Hr(t,i,a)}else for(var l in e)e.hasOwnProperty(l)&&Hr(t,l,e[l])}function as(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(t){return Qf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var is=null;function ls(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var na=null,aa=null;function Ur(t){var e=Wn(t);if(e&&(t=e.stateNode)){var n=t[Wt]||null;t:switch(t=e.stateNode,e.type){case"input":if(es(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ae(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[Wt]||null;if(!i)throw Error(f(90));es(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&zr(a)}break t;case"textarea":Or(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ta(t,!!n.multiple,e,!1)}}}var ss=!1;function _r(t,e,n){if(ss)return t(e,n);ss=!0;try{var a=t(e);return a}finally{if(ss=!1,(na!==null||aa!==null)&&(Cl(),na&&(e=na,t=aa,aa=na=null,Ur(e),t)))for(e=0;e<t.length;e++)Ur(t[e])}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var a=n[Wt]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(f(231,e,typeof n));return n}var Le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(Le)try{var La={};Object.defineProperty(La,"passive",{get:function(){os=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{os=!1}var sn=null,rs=null,ji=null;function jr(){if(ji)return ji;var t,e=rs,n=e.length,a,i="value"in sn?sn.value:sn.textContent,l=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===i[l-a];a++);return ji=i.slice(t,1<a?1-a:void 0)}function ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gi(){return!0}function kr(){return!1}function Ft(t){function e(n,a,i,l,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gi:kr,this.isPropagationStopped=kr,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),e}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=Ft(On),Ya=q({},On,{view:0,detail:0}),If=Ft(Ya),us,cs,Va,Yi=q({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Va&&(Va&&t.type==="mousemove"?(us=t.screenX-Va.screenX,cs=t.screenY-Va.screenY):cs=us=0,Va=t),us)},movementY:function(t){return"movementY"in t?t.movementY:cs}}),Gr=Ft(Yi),Xf=q({},Yi,{dataTransfer:0}),Zf=Ft(Xf),Kf=q({},Ya,{relatedTarget:0}),ds=Ft(Kf),Jf=q({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Ft(Jf),Wf=q({},On,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ff=Ft(Wf),$f=q({},On,{data:0}),Lr=Ft($f),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nh[t])?!!e[t]:!1}function fs(){return ah}var ih=q({},Ya,{key:function(t){if(t.key){var e=th[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(t){return t.type==="keypress"?ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lh=Ft(ih),sh=q({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yr=Ft(sh),oh=q({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),rh=Ft(oh),uh=q({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Ft(uh),dh=q({},Yi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=Ft(dh),hh=q({},On,{newState:0,oldState:0}),gh=Ft(hh),mh=[9,13,27,32],hs=Le&&"CompositionEvent"in window,Qa=null;Le&&"documentMode"in document&&(Qa=document.documentMode);var ph=Le&&"TextEvent"in window&&!Qa,Vr=Le&&(!hs||Qa&&8<Qa&&11>=Qa),Qr=" ",Ir=!1;function Xr(t,e){switch(t){case"keyup":return mh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ia=!1;function vh(t,e){switch(t){case"compositionend":return Zr(e);case"keypress":return e.which!==32?null:(Ir=!0,Qr);case"textInput":return t=e.data,t===Qr&&Ir?null:t;default:return null}}function yh(t,e){if(ia)return t==="compositionend"||!hs&&Xr(t,e)?(t=jr(),ji=rs=sn=null,ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vr&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bh[t.type]:e==="textarea"}function Jr(t,e,n,a){na?aa?aa.push(a):aa=[a]:na=a,e=Nl(e,"onChange"),0<e.length&&(n=new Li("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Ia=null,Xa=null;function Sh(t){Nd(t,0)}function Vi(t){var e=ka(t);if(zr(e))return t}function Pr(t,e){if(t==="change")return e}var Wr=!1;if(Le){var gs;if(Le){var ms="oninput"in document;if(!ms){var Fr=document.createElement("div");Fr.setAttribute("oninput","return;"),ms=typeof Fr.oninput=="function"}gs=ms}else gs=!1;Wr=gs&&(!document.documentMode||9<document.documentMode)}function $r(){Ia&&(Ia.detachEvent("onpropertychange",tu),Xa=Ia=null)}function tu(t){if(t.propertyName==="value"&&Vi(Xa)){var e=[];Jr(e,Xa,t,ls(t)),_r(Sh,e)}}function Ah(t,e,n){t==="focusin"?($r(),Ia=e,Xa=n,Ia.attachEvent("onpropertychange",tu)):t==="focusout"&&$r()}function Th(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vi(Xa)}function wh(t,e){if(t==="click")return Vi(e)}function Ch(t,e){if(t==="input"||t==="change")return Vi(e)}function Mh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ce=typeof Object.is=="function"?Object.is:Mh;function Za(t,e){if(ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Xl.call(e,i)||!ce(t[i],e[i]))return!1}return!0}function eu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nu(t,e){var n=eu(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=eu(n)}}function au(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?au(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ui(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ui(t.document)}return e}function ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Eh=Le&&"documentMode"in document&&11>=document.documentMode,la=null,vs=null,Ka=null,ys=!1;function lu(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||la==null||la!==Ui(a)||(a=la,"selectionStart"in a&&ps(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ka&&Za(Ka,a)||(Ka=a,a=Nl(vs,"onSelect"),0<a.length&&(e=new Li("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=la)))}function qn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sa={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionrun:qn("Transition","TransitionRun"),transitionstart:qn("Transition","TransitionStart"),transitioncancel:qn("Transition","TransitionCancel"),transitionend:qn("Transition","TransitionEnd")},bs={},su={};Le&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function Hn(t){if(bs[t])return bs[t];if(!sa[t])return t;var e=sa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in su)return bs[t]=e[n];return t}var ou=Hn("animationend"),ru=Hn("animationiteration"),uu=Hn("animationstart"),Dh=Hn("transitionrun"),xh=Hn("transitionstart"),Rh=Hn("transitioncancel"),cu=Hn("transitionend"),du=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function ze(t,e){du.set(t,e),Nn(e,[t])}var Qi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Te=[],oa=0,As=0;function Ii(){for(var t=oa,e=As=oa=0;e<t;){var n=Te[e];Te[e++]=null;var a=Te[e];Te[e++]=null;var i=Te[e];Te[e++]=null;var l=Te[e];if(Te[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&fu(n,i,l)}}function Xi(t,e,n,a){Te[oa++]=t,Te[oa++]=e,Te[oa++]=n,Te[oa++]=a,As|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ts(t,e,n,a){return Xi(t,e,n,a),Zi(t)}function Bn(t,e){return Xi(t,null,null,e),Zi(t)}function fu(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=t.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(i=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,i&&e!==null&&(i=31-ue(n),t=l.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),l):null}function Zi(t){if(50<pi)throw pi=0,Oo=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ra={};function zh(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,n,a){return new zh(t,e,n,a)}function ws(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ye(t,e){var n=t.alternate;return n===null?(n=de(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function hu(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ki(t,e,n,a,i,l){var s=0;if(a=t,typeof t=="function")ws(t)&&(s=1);else if(typeof t=="string")s=Bg(t,n,R.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case le:return t=de(31,n,e,i),t.elementType=le,t.lanes=l,t;case wt:return Un(n.children,i,l,e);case Pt:s=8,i|=24;break;case It:return t=de(12,n,e,i|2),t.elementType=It,t.lanes=l,t;case ie:return t=de(13,n,e,i),t.elementType=ie,t.lanes=l,t;case Rt:return t=de(19,n,e,i),t.elementType=Rt,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ct:s=10;break t;case Ut:s=9;break t;case Kt:s=11;break t;case Y:s=14;break t;case _t:s=16,a=null;break t}s=29,n=Error(f(130,t===null?"null":typeof t,"")),a=null}return e=de(s,n,e,i),e.elementType=t,e.type=a,e.lanes=l,e}function Un(t,e,n,a){return t=de(7,t,a,e),t.lanes=n,t}function Cs(t,e,n){return t=de(6,t,null,e),t.lanes=n,t}function gu(t){var e=de(18,null,null,0);return e.stateNode=t,e}function Ms(t,e,n){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var mu=new WeakMap;function we(t,e){if(typeof t=="object"&&t!==null){var n=mu.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Ha(e)},mu.set(t,e),e)}return{value:t,source:e,stack:Ha(e)}}var ua=[],ca=0,Ji=null,Ja=0,Ce=[],Me=0,on=null,Be=1,Ue="";function Ve(t,e){ua[ca++]=Ja,ua[ca++]=Ji,Ji=t,Ja=e}function pu(t,e,n){Ce[Me++]=Be,Ce[Me++]=Ue,Ce[Me++]=on,on=t;var a=Be;t=Ue;var i=32-ue(a)-1;a&=~(1<<i),n+=1;var l=32-ue(e)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Be=1<<32-ue(e)+i|n<<i|a,Ue=l+t}else Be=1<<l|n<<i|a,Ue=t}function Es(t){t.return!==null&&(Ve(t,1),pu(t,1,0))}function Ds(t){for(;t===Ji;)Ji=ua[--ca],ua[ca]=null,Ja=ua[--ca],ua[ca]=null;for(;t===on;)on=Ce[--Me],Ce[Me]=null,Ue=Ce[--Me],Ce[Me]=null,Be=Ce[--Me],Ce[Me]=null}function vu(t,e){Ce[Me++]=Be,Ce[Me++]=Ue,Ce[Me++]=on,Be=e.id,Ue=e.overflow,on=t}var Gt=null,gt=null,K=!1,rn=null,Ee=!1,xs=Error(f(519));function un(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(we(e,t)),xs}function yu(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[kt]=t,e[Wt]=a,n){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(n=0;n<yi.length;n++)Q(yi[n],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Q("invalid",e),Nr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Q("invalid",e);break;case"textarea":Q("invalid",e),qr(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Bd(e.textContent,n)?(a.popover!=null&&(Q("beforetoggle",e),Q("toggle",e)),a.onScroll!=null&&Q("scroll",e),a.onScrollEnd!=null&&Q("scrollend",e),a.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||un(t,!0)}function bu(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:Ee=!1;return;case 27:case 3:Ee=!0;return;default:Gt=Gt.return}}function da(t){if(t!==Gt)return!1;if(!K)return bu(t),K=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zo(t.type,t.memoizedProps)),n=!n),n&&gt&&un(t),bu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Qd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Qd(t)}else e===27?(e=gt,wn(t.type)?(t=Fo,Fo=null,gt=t):gt=e):gt=Gt?xe(t.stateNode.nextSibling):null;return!0}function _n(){gt=Gt=null,K=!1}function Rs(){var t=rn;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),rn=null),t}function Pa(t){rn===null?rn=[t]:rn.push(t)}var zs=c(null),jn=null,Qe=null;function cn(t,e,n){E(zs,e._currentValue),e._currentValue=n}function Ie(t){t._currentValue=zs.current,T(zs)}function Ns(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Os(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=i;for(var r=0;r<e.length;r++)if(o.context===e[r]){l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ns(l.return,n,t),a||(s=null);break t}l=o.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(f(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ns(s,n,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function fa(t,e,n,a){t=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var o=i.type;ce(i.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(i===W.current){if(s=i.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(wi):t=[wi])}i=i.return}t!==null&&Os(e,t,n,a),e.flags|=262144}function Pi(t){for(t=t.firstContext;t!==null;){if(!ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function kn(t){jn=t,Qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return Su(jn,t)}function Wi(t,e){return jn===null&&kn(t),Su(t,e)}function Su(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Qe===null){if(t===null)throw Error(f(308));Qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Qe=Qe.next=e;return n}var Nh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Oh=x.unstable_scheduleCallback,qh=x.unstable_NormalPriority,Mt={$$typeof:Ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new Nh,data:new Map,refCount:0}}function Wa(t){t.refCount--,t.refCount===0&&Oh(qh,function(){t.controller.abort()})}var Fa=null,Hs=0,ha=0,ga=null;function Hh(t,e){if(Fa===null){var n=Fa=[];Hs=0,ha=jo(),ga={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Hs++,e.then(Au,Au),e}function Au(){if(--Hs===0&&Fa!==null){ga!==null&&(ga.status="fulfilled");var t=Fa;Fa=null,ha=0,ga=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bh(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Tu=y.S;y.S=function(t,e){ld=oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Hh(t,e),Tu!==null&&Tu(t,e)};var Gn=c(null);function Bs(){var t=Gn.current;return t!==null?t:ft.pooledCache}function Fi(t,e){e===null?E(Gn,Gn.current):E(Gn,e.pool)}function wu(){var t=Bs();return t===null?null:{parent:Mt._currentValue,pool:t}}var ma=Error(f(460)),Us=Error(f(474)),$i=Error(f(542)),tl={then:function(){}};function Cu(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mu(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ge,Ge),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Du(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Du(t),t}throw Yn=e,ma}}function Ln(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Yn=n,ma):n}}var Yn=null;function Eu(){if(Yn===null)throw Error(f(459));var t=Yn;return Yn=null,t}function Du(t){if(t===ma||t===$i)throw Error(f(483))}var pa=null,$a=0;function el(t){var e=$a;return $a+=1,pa===null&&(pa=[]),Mu(pa,t,e)}function ti(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function nl(t,e){throw e.$$typeof===lt?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function xu(t){function e(d,u){if(t){var h=d.deletions;h===null?(d.deletions=[u],d.flags|=16):h.push(u)}}function n(d,u){if(!t)return null;for(;u!==null;)e(d,u),u=u.sibling;return null}function a(d){for(var u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(d,u){return d=Ye(d,u),d.index=0,d.sibling=null,d}function l(d,u,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<u?(d.flags|=67108866,u):h):(d.flags|=67108866,u)):(d.flags|=1048576,u)}function s(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,u,h,S){return u===null||u.tag!==6?(u=Cs(h,d.mode,S),u.return=d,u):(u=i(u,h),u.return=d,u)}function r(d,u,h,S){var O=h.type;return O===wt?b(d,u,h.props.children,S,h.key):u!==null&&(u.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===_t&&Ln(O)===u.type)?(u=i(u,h.props),ti(u,h),u.return=d,u):(u=Ki(h.type,h.key,h.props,null,d.mode,S),ti(u,h),u.return=d,u)}function g(d,u,h,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Ms(h,d.mode,S),u.return=d,u):(u=i(u,h.children||[]),u.return=d,u)}function b(d,u,h,S,O){return u===null||u.tag!==7?(u=Un(h,d.mode,S,O),u.return=d,u):(u=i(u,h),u.return=d,u)}function A(d,u,h){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Cs(""+u,d.mode,h),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ot:return h=Ki(u.type,u.key,u.props,null,d.mode,h),ti(h,u),h.return=d,h;case Qt:return u=Ms(u,d.mode,h),u.return=d,u;case _t:return u=Ln(u),A(d,u,h)}if(Xt(u)||zt(u))return u=Un(u,d.mode,h,null),u.return=d,u;if(typeof u.then=="function")return A(d,el(u),h);if(u.$$typeof===Ct)return A(d,Wi(d,u),h);nl(d,u)}return null}function m(d,u,h,S){var O=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return O!==null?null:o(d,u,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:return h.key===O?r(d,u,h,S):null;case Qt:return h.key===O?g(d,u,h,S):null;case _t:return h=Ln(h),m(d,u,h,S)}if(Xt(h)||zt(h))return O!==null?null:b(d,u,h,S,null);if(typeof h.then=="function")return m(d,u,el(h),S);if(h.$$typeof===Ct)return m(d,u,Wi(d,h),S);nl(d,h)}return null}function p(d,u,h,S,O){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(h)||null,o(u,d,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ot:return d=d.get(S.key===null?h:S.key)||null,r(u,d,S,O);case Qt:return d=d.get(S.key===null?h:S.key)||null,g(u,d,S,O);case _t:return S=Ln(S),p(d,u,h,S,O)}if(Xt(S)||zt(S))return d=d.get(h)||null,b(u,d,S,O,null);if(typeof S.then=="function")return p(d,u,h,el(S),O);if(S.$$typeof===Ct)return p(d,u,h,Wi(u,S),O);nl(u,S)}return null}function D(d,u,h,S){for(var O=null,$=null,N=u,G=u=0,Z=null;N!==null&&G<h.length;G++){N.index>G?(Z=N,N=null):Z=N.sibling;var tt=m(d,N,h[G],S);if(tt===null){N===null&&(N=Z);break}t&&N&&tt.alternate===null&&e(d,N),u=l(tt,u,G),$===null?O=tt:$.sibling=tt,$=tt,N=Z}if(G===h.length)return n(d,N),K&&Ve(d,G),O;if(N===null){for(;G<h.length;G++)N=A(d,h[G],S),N!==null&&(u=l(N,u,G),$===null?O=N:$.sibling=N,$=N);return K&&Ve(d,G),O}for(N=a(N);G<h.length;G++)Z=p(N,d,G,h[G],S),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?G:Z.key),u=l(Z,u,G),$===null?O=Z:$.sibling=Z,$=Z);return t&&N.forEach(function(xn){return e(d,xn)}),K&&Ve(d,G),O}function H(d,u,h,S){if(h==null)throw Error(f(151));for(var O=null,$=null,N=u,G=u=0,Z=null,tt=h.next();N!==null&&!tt.done;G++,tt=h.next()){N.index>G?(Z=N,N=null):Z=N.sibling;var xn=m(d,N,tt.value,S);if(xn===null){N===null&&(N=Z);break}t&&N&&xn.alternate===null&&e(d,N),u=l(xn,u,G),$===null?O=xn:$.sibling=xn,$=xn,N=Z}if(tt.done)return n(d,N),K&&Ve(d,G),O;if(N===null){for(;!tt.done;G++,tt=h.next())tt=A(d,tt.value,S),tt!==null&&(u=l(tt,u,G),$===null?O=tt:$.sibling=tt,$=tt);return K&&Ve(d,G),O}for(N=a(N);!tt.done;G++,tt=h.next())tt=p(N,d,G,tt.value,S),tt!==null&&(t&&tt.alternate!==null&&N.delete(tt.key===null?G:tt.key),u=l(tt,u,G),$===null?O=tt:$.sibling=tt,$=tt);return t&&N.forEach(function(Xg){return e(d,Xg)}),K&&Ve(d,G),O}function dt(d,u,h,S){if(typeof h=="object"&&h!==null&&h.type===wt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:t:{for(var O=h.key;u!==null;){if(u.key===O){if(O=h.type,O===wt){if(u.tag===7){n(d,u.sibling),S=i(u,h.props.children),S.return=d,d=S;break t}}else if(u.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===_t&&Ln(O)===u.type){n(d,u.sibling),S=i(u,h.props),ti(S,h),S.return=d,d=S;break t}n(d,u);break}else e(d,u);u=u.sibling}h.type===wt?(S=Un(h.props.children,d.mode,S,h.key),S.return=d,d=S):(S=Ki(h.type,h.key,h.props,null,d.mode,S),ti(S,h),S.return=d,d=S)}return s(d);case Qt:t:{for(O=h.key;u!==null;){if(u.key===O)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(d,u.sibling),S=i(u,h.children||[]),S.return=d,d=S;break t}else{n(d,u);break}else e(d,u);u=u.sibling}S=Ms(h,d.mode,S),S.return=d,d=S}return s(d);case _t:return h=Ln(h),dt(d,u,h,S)}if(Xt(h))return D(d,u,h,S);if(zt(h)){if(O=zt(h),typeof O!="function")throw Error(f(150));return h=O.call(h),H(d,u,h,S)}if(typeof h.then=="function")return dt(d,u,el(h),S);if(h.$$typeof===Ct)return dt(d,u,Wi(d,h),S);nl(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,u!==null&&u.tag===6?(n(d,u.sibling),S=i(u,h),S.return=d,d=S):(n(d,u),S=Cs(h,d.mode,S),S.return=d,d=S),s(d)):n(d,u)}return function(d,u,h,S){try{$a=0;var O=dt(d,u,h,S);return pa=null,O}catch(N){if(N===ma||N===$i)throw N;var $=de(29,N,null,d.mode);return $.lanes=S,$.return=d,$}finally{}}}var Vn=xu(!0),Ru=xu(!1),dn=!1;function _s(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function js(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(et&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Zi(t),fu(t,null,n),e}return Xi(t,a,e,n),Zi(t)}function ei(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Sr(t,n)}}function ks(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=e:l=l.next=e}else i=l=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Gs=!1;function ni(){if(Gs){var t=ga;if(t!==null)throw t}}function ai(t,e,n,a){Gs=!1;var i=t.updateQueue;dn=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var r=o,g=r.next;r.next=null,s===null?l=g:s.next=g,s=r;var b=t.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==s&&(o===null?b.firstBaseUpdate=g:o.next=g,b.lastBaseUpdate=r))}if(l!==null){var A=i.baseState;s=0,b=g=r=null,o=l;do{var m=o.lane&-536870913,p=m!==o.lane;if(p?(X&m)===m:(a&m)===m){m!==0&&m===ha&&(Gs=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var D=t,H=o;m=e;var dt=n;switch(H.tag){case 1:if(D=H.payload,typeof D=="function"){A=D.call(dt,A,m);break t}A=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=H.payload,m=typeof D=="function"?D.call(dt,A,m):D,m==null)break t;A=q({},A,m);break t;case 2:dn=!0}}m=o.callback,m!==null&&(t.flags|=64,p&&(t.flags|=8192),p=i.callbacks,p===null?i.callbacks=[m]:p.push(m))}else p={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(g=b=p,r=A):b=b.next=p,s|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);b===null&&(r=A),i.baseState=r,i.firstBaseUpdate=g,i.lastBaseUpdate=b,l===null&&(i.shared.lanes=0),yn|=s,t.lanes=s,t.memoizedState=A}}function zu(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Nu(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)zu(n[t],e)}var va=c(null),al=c(0);function Ou(t,e){t=tn,E(al,t),E(va,e),tn=t|e.baseLanes}function Ls(){E(al,tn),E(va,va.current)}function Ys(){tn=al.current,T(va),T(al)}var fe=c(null),De=null;function gn(t){var e=t.alternate;E(St,St.current&1),E(fe,t),De===null&&(e===null||va.current!==null||e.memoizedState!==null)&&(De=t)}function Vs(t){E(St,St.current),E(fe,t),De===null&&(De=t)}function qu(t){t.tag===22?(E(St,St.current),E(fe,t),De===null&&(De=t)):mn()}function mn(){E(St,St.current),E(fe,fe.current)}function he(t){T(fe),De===t&&(De=null),T(St)}var St=c(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Po(n)||Wo(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xe=0,k=null,ut=null,Et=null,ll=!1,ya=!1,Qn=!1,sl=0,ii=0,ba=null,Uh=0;function yt(){throw Error(f(321))}function Qs(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ce(t[n],e[n]))return!1;return!0}function Is(t,e,n,a,i,l){return Xe=l,k=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?pc:so,Qn=!1,l=n(a,i),Qn=!1,ya&&(l=Bu(e,n,a,i)),Hu(t),l}function Hu(t){y.H=oi;var e=ut!==null&&ut.next!==null;if(Xe=0,Et=ut=k=null,ll=!1,ii=0,ba=null,e)throw Error(f(300));t===null||Dt||(t=t.dependencies,t!==null&&Pi(t)&&(Dt=!0))}function Bu(t,e,n,a){k=t;var i=0;do{if(ya&&(ba=null),ii=0,ya=!1,25<=i)throw Error(f(301));if(i+=1,Et=ut=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=vc,l=e(n,a)}while(ya);return l}function _h(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?li(e):e,t=t.useState()[0],(ut!==null?ut.memoizedState:null)!==t&&(k.flags|=1024),e}function Xs(){var t=sl!==0;return sl=0,t}function Zs(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ks(t){if(ll){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ll=!1}Xe=0,Et=ut=k=null,ya=!1,ii=sl=0,ba=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?k.memoizedState=Et=t:Et=Et.next=t,Et}function At(){if(ut===null){var t=k.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=Et===null?k.memoizedState:Et.next;if(e!==null)Et=e,ut=t;else{if(t===null)throw k.alternate===null?Error(f(467)):Error(f(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Et===null?k.memoizedState=Et=t:Et=Et.next=t}return Et}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(t){var e=ii;return ii+=1,ba===null&&(ba=[]),t=Mu(ba,t,e),e=k,(Et===null?e.memoizedState:Et.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?pc:so),t}function rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return li(t);if(t.$$typeof===Ct)return Lt(t)}throw Error(f(438,String(t)))}function Js(t){var e=null,n=k.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=k.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ol(),k.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=qe;return e.index++,n}function Ze(t,e){return typeof e=="function"?e(t):e}function ul(t){var e=At();return Ps(e,ut,t)}function Ps(t,e,n){var a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=n;var i=t.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,a.pending=null}if(l=t.baseState,i===null)t.memoizedState=l;else{e=i.next;var o=s=null,r=null,g=e,b=!1;do{var A=g.lane&-536870913;if(A!==g.lane?(X&A)===A:(Xe&A)===A){var m=g.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===ha&&(b=!0);else if((Xe&m)===m){g=g.next,m===ha&&(b=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=A,s=l):r=r.next=A,k.lanes|=m,yn|=m;A=g.action,Qn&&n(l,A),l=g.hasEagerState?g.eagerState:n(l,A)}else m={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=m,s=l):r=r.next=m,k.lanes|=A,yn|=A;g=g.next}while(g!==null&&g!==e);if(r===null?s=l:r.next=o,!ce(l,t.memoizedState)&&(Dt=!0,b&&(n=ga,n!==null)))throw n;t.memoizedState=l,t.baseState=s,t.baseQueue=r,a.lastRenderedState=l}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ws(t){var e=At(),n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,l=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=t(l,s.action),s=s.next;while(s!==i);ce(l,e.memoizedState)||(Dt=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,a]}function Uu(t,e,n){var a=k,i=At(),l=K;if(l){if(n===void 0)throw Error(f(407));n=n()}else n=e();var s=!ce((ut||i).memoizedState,n);if(s&&(i.memoizedState=n,Dt=!0),i=i.queue,to(ku.bind(null,a,i,t),[t]),i.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Sa(9,{destroy:void 0},ju.bind(null,a,i,n,e),null),ft===null)throw Error(f(349));l||(Xe&127)!==0||_u(a,e,n)}return n}function _u(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=k.updateQueue,e===null?(e=ol(),k.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ju(t,e,n,a){e.value=n,e.getSnapshot=a,Gu(e)&&Lu(t)}function ku(t,e,n){return n(function(){Gu(e)&&Lu(t)})}function Gu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ce(t,n)}catch{return!0}}function Lu(t){var e=Bn(t,2);e!==null&&ae(e,t,2)}function Fs(t){var e=Jt();if(typeof t=="function"){var n=t;if(t=n(),Qn){an(!0);try{n()}finally{an(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},e}function Yu(t,e,n,a){return t.baseState=n,Ps(t,ut,typeof a=="function"?a:Ze)}function jh(t,e,n,a,i){if(fl(t))throw Error(f(485));if(t=e.action,t!==null){var l={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};y.T!==null?n(!0):l.isTransition=!1,a(l),n=e.pending,n===null?(l.next=e.pending=l,Vu(e,l)):(l.next=n.next,e.pending=n.next=l)}}function Vu(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var l=y.T,s={};y.T=s;try{var o=n(i,a),r=y.S;r!==null&&r(s,o),Qu(t,e,o)}catch(g){$s(t,e,g)}finally{l!==null&&s.types!==null&&(l.types=s.types),y.T=l}}else try{l=n(i,a),Qu(t,e,l)}catch(g){$s(t,e,g)}}function Qu(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Iu(t,e,a)},function(a){return $s(t,e,a)}):Iu(t,e,n)}function Iu(t,e,n){e.status="fulfilled",e.value=n,Xu(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Vu(t,n)))}function $s(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Xu(e),e=e.next;while(e!==a)}t.action=null}function Xu(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Zu(t,e){return e}function Ku(t,e){if(K){var n=ft.formState;if(n!==null){t:{var a=k;if(K){if(gt){e:{for(var i=gt,l=Ee;i.nodeType!==8;){if(!l){i=null;break e}if(i=xe(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){gt=xe(i.nextSibling),a=i.data==="F!";break t}}un(a)}a=!1}a&&(e=n[0])}}return n=Jt(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zu,lastRenderedState:e},n.queue=a,n=hc.bind(null,k,a),a.dispatch=n,a=Fs(!1),l=lo.bind(null,k,!1,a.queue),a=Jt(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=jh.bind(null,k,i,l,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function Ju(t){var e=At();return Pu(e,ut,t)}function Pu(t,e,n){if(e=Ps(t,e,Zu)[0],t=ul(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=li(e)}catch(s){throw s===ma?$i:s}else a=e;e=At();var i=e.queue,l=i.dispatch;return n!==e.memoizedState&&(k.flags|=2048,Sa(9,{destroy:void 0},kh.bind(null,i,n),null)),[a,l,t]}function kh(t,e){t.action=e}function Wu(t){var e=At(),n=ut;if(n!==null)return Pu(e,n,t);At(),e=e.memoizedState,n=At();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Sa(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=k.updateQueue,e===null&&(e=ol(),k.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Fu(){return At().memoizedState}function cl(t,e,n,a){var i=Jt();k.flags|=t,i.memoizedState=Sa(1|e,{destroy:void 0},n,a===void 0?null:a)}function dl(t,e,n,a){var i=At();a=a===void 0?null:a;var l=i.memoizedState.inst;ut!==null&&a!==null&&Qs(a,ut.memoizedState.deps)?i.memoizedState=Sa(e,l,n,a):(k.flags|=t,i.memoizedState=Sa(1|e,l,n,a))}function $u(t,e){cl(8390656,8,t,e)}function to(t,e){dl(2048,8,t,e)}function Gh(t){k.flags|=4;var e=k.updateQueue;if(e===null)e=ol(),k.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function tc(t){var e=At().memoizedState;return Gh({ref:e,nextImpl:t}),function(){if((et&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function ec(t,e){return dl(4,2,t,e)}function nc(t,e){return dl(4,4,t,e)}function ac(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ic(t,e,n){n=n!=null?n.concat([t]):null,dl(4,4,ac.bind(null,e,t),n)}function eo(){}function lc(t,e){var n=At();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Qs(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function sc(t,e){var n=At();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Qs(e,a[1]))return a[0];if(a=t(),Qn){an(!0);try{t()}finally{an(!1)}}return n.memoizedState=[a,e],a}function no(t,e,n){return n===void 0||(Xe&1073741824)!==0&&(X&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=od(),k.lanes|=t,yn|=t,n)}function oc(t,e,n,a){return ce(n,e)?n:va.current!==null?(t=no(t,n,a),ce(t,e)||(Dt=!0),t):(Xe&42)===0||(Xe&1073741824)!==0&&(X&261930)===0?(Dt=!0,t.memoizedState=n):(t=od(),k.lanes|=t,yn|=t,e)}function rc(t,e,n,a,i){var l=M.p;M.p=l!==0&&8>l?l:8;var s=y.T,o={};y.T=o,lo(t,!1,e,n);try{var r=i(),g=y.S;if(g!==null&&g(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Bh(r,a);si(t,e,b,pe(t))}else si(t,e,a,pe(t))}catch(A){si(t,e,{then:function(){},status:"rejected",reason:A},pe())}finally{M.p=l,s!==null&&o.types!==null&&(s.types=o.types),y.T=s}}function Lh(){}function ao(t,e,n,a){if(t.tag!==5)throw Error(f(476));var i=uc(t).queue;rc(t,i,e,B,n===null?Lh:function(){return cc(t),n(a)})}function uc(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:B},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function cc(t){var e=uc(t);e.next===null&&(e=t.alternate.memoizedState),si(t,e.next.queue,{},pe())}function io(){return Lt(wi)}function dc(){return At().memoizedState}function fc(){return At().memoizedState}function Yh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=pe();t=fn(n);var a=hn(e,t,n);a!==null&&(ae(a,e,n),ei(a,e,n)),e={cache:qs()},t.payload=e;return}e=e.return}}function Vh(t,e,n){var a=pe();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fl(t)?gc(e,n):(n=Ts(t,e,n,a),n!==null&&(ae(n,t,a),mc(n,e,a)))}function hc(t,e,n){var a=pe();si(t,e,n,a)}function si(t,e,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fl(t))gc(e,i);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,ce(o,s))return Xi(t,e,i,0),ft===null&&Ii(),!1}catch{}finally{}if(n=Ts(t,e,i,a),n!==null)return ae(n,t,a),mc(n,e,a),!0}return!1}function lo(t,e,n,a){if(a={lane:2,revertLane:jo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(e)throw Error(f(479))}else e=Ts(t,n,a,2),e!==null&&ae(e,t,2)}function fl(t){var e=t.alternate;return t===k||e!==null&&e===k}function gc(t,e){ya=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mc(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Sr(t,n)}}var oi={readContext:Lt,use:rl,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};oi.useEffectEvent=yt;var pc={readContext:Lt,use:rl,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:$u,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,cl(4194308,4,ac.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){cl(4,2,t,e)},useMemo:function(t,e){var n=Jt();e=e===void 0?null:e;var a=t();if(Qn){an(!0);try{t()}finally{an(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=Jt();if(n!==void 0){var i=n(e);if(Qn){an(!0);try{n(e)}finally{an(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Vh.bind(null,k,t),[a.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:function(t){t=Fs(t);var e=t.queue,n=hc.bind(null,k,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:eo,useDeferredValue:function(t,e){var n=Jt();return no(n,t,e)},useTransition:function(){var t=Fs(!1);return t=rc.bind(null,k,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=k,i=Jt();if(K){if(n===void 0)throw Error(f(407));n=n()}else{if(n=e(),ft===null)throw Error(f(349));(X&127)!==0||_u(a,e,n)}i.memoizedState=n;var l={value:n,getSnapshot:e};return i.queue=l,$u(ku.bind(null,a,l,t),[t]),a.flags|=2048,Sa(9,{destroy:void 0},ju.bind(null,a,l,n,e),null),n},useId:function(){var t=Jt(),e=ft.identifierPrefix;if(K){var n=Ue,a=Be;n=(a&~(1<<32-ue(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=sl++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Uh++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:io,useFormState:Ku,useActionState:Ku,useOptimistic:function(t){var e=Jt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lo.bind(null,k,!0,n),n.dispatch=e,[t,e]},useMemoCache:Js,useCacheRefresh:function(){return Jt().memoizedState=Yh.bind(null,k)},useEffectEvent:function(t){var e=Jt(),n={impl:t};return e.memoizedState=n,function(){if((et&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}},so={readContext:Lt,use:rl,useCallback:lc,useContext:Lt,useEffect:to,useImperativeHandle:ic,useInsertionEffect:ec,useLayoutEffect:nc,useMemo:sc,useReducer:ul,useRef:Fu,useState:function(){return ul(Ze)},useDebugValue:eo,useDeferredValue:function(t,e){var n=At();return oc(n,ut.memoizedState,t,e)},useTransition:function(){var t=ul(Ze)[0],e=At().memoizedState;return[typeof t=="boolean"?t:li(t),e]},useSyncExternalStore:Uu,useId:dc,useHostTransitionStatus:io,useFormState:Ju,useActionState:Ju,useOptimistic:function(t,e){var n=At();return Yu(n,ut,t,e)},useMemoCache:Js,useCacheRefresh:fc};so.useEffectEvent=tc;var vc={readContext:Lt,use:rl,useCallback:lc,useContext:Lt,useEffect:to,useImperativeHandle:ic,useInsertionEffect:ec,useLayoutEffect:nc,useMemo:sc,useReducer:Ws,useRef:Fu,useState:function(){return Ws(Ze)},useDebugValue:eo,useDeferredValue:function(t,e){var n=At();return ut===null?no(n,t,e):oc(n,ut.memoizedState,t,e)},useTransition:function(){var t=Ws(Ze)[0],e=At().memoizedState;return[typeof t=="boolean"?t:li(t),e]},useSyncExternalStore:Uu,useId:dc,useHostTransitionStatus:io,useFormState:Wu,useActionState:Wu,useOptimistic:function(t,e){var n=At();return ut!==null?Yu(n,ut,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Js,useCacheRefresh:fc};vc.useEffectEvent=tc;function oo(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ro={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=pe(),i=fn(a);i.payload=e,n!=null&&(i.callback=n),e=hn(t,i,a),e!==null&&(ae(e,t,a),ei(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=pe(),i=fn(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=hn(t,i,a),e!==null&&(ae(e,t,a),ei(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pe(),a=fn(n);a.tag=2,e!=null&&(a.callback=e),e=hn(t,a,n),e!==null&&(ae(e,t,n),ei(e,t,n))}};function yc(t,e,n,a,i,l,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!Za(n,a)||!Za(i,l):!0}function bc(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&ro.enqueueReplaceState(e,e.state,null)}function In(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=q({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}function Sc(t){Qi(t)}function Ac(t){console.error(t)}function Tc(t){Qi(t)}function hl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function wc(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function uo(t,e,n){return n=fn(n),n.tag=3,n.payload={element:null},n.callback=function(){hl(t,e)},n}function Cc(t){return t=fn(t),t.tag=3,t}function Mc(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;t.payload=function(){return i(l)},t.callback=function(){wc(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){wc(e,n,a),typeof i!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Qh(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&fa(e,n,i,!0),n=fe.current,n!==null){switch(n.tag){case 31:case 13:return De===null?Ml():n.alternate===null&&bt===0&&(bt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===tl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Bo(t,a,i)),!1;case 22:return n.flags|=65536,a===tl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Bo(t,a,i)),!1}throw Error(f(435,n.tag))}return Bo(t,a,i),Ml(),!1}if(K)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==xs&&(t=Error(f(422),{cause:a}),Pa(we(t,n)))):(a!==xs&&(e=Error(f(423),{cause:a}),Pa(we(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=we(a,n),i=uo(t.stateNode,a,i),ks(t,i),bt!==4&&(bt=2)),!1;var l=Error(f(520),{cause:a});if(l=we(l,n),mi===null?mi=[l]:mi.push(l),bt!==4&&(bt=2),e===null)return!0;a=we(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=uo(n.stateNode,a,t),ks(n,t),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(bn===null||!bn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Cc(i),Mc(i,t,n,a),ks(n,i),!1}n=n.return}while(n!==null);return!1}var co=Error(f(461)),Dt=!1;function Yt(t,e,n,a){e.child=t===null?Ru(e,null,n,a):Vn(e,t.child,n,a)}function Ec(t,e,n,a,i){n=n.render;var l=e.ref;if("ref"in a){var s={};for(var o in a)o!=="ref"&&(s[o]=a[o])}else s=a;return kn(e),a=Is(t,e,n,s,l,i),o=Xs(),t!==null&&!Dt?(Zs(t,e,i),Ke(t,e,i)):(K&&o&&Es(e),e.flags|=1,Yt(t,e,a,i),e.child)}function Dc(t,e,n,a,i){if(t===null){var l=n.type;return typeof l=="function"&&!ws(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,xc(t,e,l,a,i)):(t=Ki(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!bo(t,i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(s,a)&&t.ref===e.ref)return Ke(t,e,i)}return e.flags|=1,t=Ye(l,a),t.ref=e.ref,t.return=e,e.child=t}function xc(t,e,n,a,i){if(t!==null){var l=t.memoizedProps;if(Za(l,a)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=a=l,bo(t,i))(t.flags&131072)!==0&&(Dt=!0);else return e.lanes=t.lanes,Ke(t,e,i)}return fo(t,e,n,a,i)}function Rc(t,e,n,a){var i=a.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,e.child=null;return zc(t,e,l,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fi(e,l!==null?l.cachePool:null),l!==null?Ou(e,l):Ls(),qu(e);else return a=e.lanes=536870912,zc(t,e,l!==null?l.baseLanes|n:n,n,a)}else l!==null?(Fi(e,l.cachePool),Ou(e,l),mn(),e.memoizedState=null):(t!==null&&Fi(e,null),Ls(),mn());return Yt(t,e,i,n),e.child}function ri(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function zc(t,e,n,a,i){var l=Bs();return l=l===null?null:{parent:Mt._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&Fi(e,null),Ls(),qu(e),t!==null&&fa(t,e,a,!0),e.childLanes=i,null}function gl(t,e){return e=pl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Nc(t,e,n){return Vn(e,t.child,null,n),t=gl(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function Ih(t,e,n){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(K){if(a.mode==="hidden")return t=gl(e,a),e.lanes=536870912,ri(null,t);if(Vs(e),(t=gt)?(t=Vd(t,Ee),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:on!==null?{id:Be,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},n=gu(t),n.return=e,e.child=n,Gt=e,gt=null)):t=null,t===null)throw un(e);return e.lanes=536870912,null}return gl(e,a)}var l=t.memoizedState;if(l!==null){var s=l.dehydrated;if(Vs(e),i)if(e.flags&256)e.flags&=-257,e=Nc(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Dt||fa(t,e,n,!1),i=(n&t.childLanes)!==0,Dt||i){if(a=ft,a!==null&&(s=Ar(a,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,Bn(t,s),ae(a,t,s),co;Ml(),e=Nc(t,e,n)}else t=l.treeContext,gt=xe(s.nextSibling),Gt=e,K=!0,rn=null,Ee=!1,t!==null&&vu(e,t),e=gl(e,a),e.flags|=4096;return e}return t=Ye(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ml(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function fo(t,e,n,a,i){return kn(e),n=Is(t,e,n,a,void 0,i),a=Xs(),t!==null&&!Dt?(Zs(t,e,i),Ke(t,e,i)):(K&&a&&Es(e),e.flags|=1,Yt(t,e,n,i),e.child)}function Oc(t,e,n,a,i,l){return kn(e),e.updateQueue=null,n=Bu(e,a,n,i),Hu(t),a=Xs(),t!==null&&!Dt?(Zs(t,e,l),Ke(t,e,l)):(K&&a&&Es(e),e.flags|=1,Yt(t,e,n,l),e.child)}function qc(t,e,n,a,i){if(kn(e),e.stateNode===null){var l=ra,s=n.contextType;typeof s=="object"&&s!==null&&(l=Lt(s)),l=new n(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ro,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},_s(e),s=n.contextType,l.context=typeof s=="object"&&s!==null?Lt(s):ra,l.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(oo(e,n,s,a),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ro.enqueueReplaceState(l,l.state,null),ai(e,a,l,i),ni(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){l=e.stateNode;var o=e.memoizedProps,r=In(n,o);l.props=r;var g=l.context,b=n.contextType;s=ra,typeof b=="object"&&b!==null&&(s=Lt(b));var A=n.getDerivedStateFromProps;b=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||g!==s)&&bc(e,l,a,s),dn=!1;var m=e.memoizedState;l.state=m,ai(e,a,l,i),ni(),g=e.memoizedState,o||m!==g||dn?(typeof A=="function"&&(oo(e,n,A,a),g=e.memoizedState),(r=dn||yc(e,n,r,a,m,g,s))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=g),l.props=a,l.state=g,l.context=s,a=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,js(t,e),s=e.memoizedProps,b=In(n,s),l.props=b,A=e.pendingProps,m=l.context,g=n.contextType,r=ra,typeof g=="object"&&g!==null&&(r=Lt(g)),o=n.getDerivedStateFromProps,(g=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==A||m!==r)&&bc(e,l,a,r),dn=!1,m=e.memoizedState,l.state=m,ai(e,a,l,i),ni();var p=e.memoizedState;s!==A||m!==p||dn||t!==null&&t.dependencies!==null&&Pi(t.dependencies)?(typeof o=="function"&&(oo(e,n,o,a),p=e.memoizedState),(b=dn||yc(e,n,b,a,m,p,r)||t!==null&&t.dependencies!==null&&Pi(t.dependencies))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,p,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,p,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=p),l.props=a,l.state=p,l.context=r,a=b):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),a=!1)}return l=a,ml(t,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&a?(e.child=Vn(e,t.child,null,i),e.child=Vn(e,null,n,i)):Yt(t,e,n,i),e.memoizedState=l.state,t=e.child):t=Ke(t,e,i),t}function Hc(t,e,n,a){return _n(),e.flags|=256,Yt(t,e,n,a),e.child}var ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function go(t){return{baseLanes:t,cachePool:wu()}}function mo(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=me),t}function Bc(t,e,n){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(K){if(i?gn(e):mn(),(t=gt)?(t=Vd(t,Ee),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:on!==null?{id:Be,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},n=gu(t),n.return=e,e.child=n,Gt=e,gt=null)):t=null,t===null)throw un(e);return Wo(t)?e.lanes=32:e.lanes=536870912,null}var o=a.children;return a=a.fallback,i?(mn(),i=e.mode,o=pl({mode:"hidden",children:o},i),a=Un(a,i,n,null),o.return=e,a.return=e,o.sibling=a,e.child=o,a=e.child,a.memoizedState=go(n),a.childLanes=mo(t,s,n),e.memoizedState=ho,ri(null,a)):(gn(e),po(e,o))}var r=t.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(l)e.flags&256?(gn(e),e.flags&=-257,e=vo(t,e,n)):e.memoizedState!==null?(mn(),e.child=t.child,e.flags|=128,e=null):(mn(),o=a.fallback,i=e.mode,a=pl({mode:"visible",children:a.children},i),o=Un(o,i,n,null),o.flags|=2,a.return=e,o.return=e,a.sibling=o,e.child=a,Vn(e,t.child,null,n),a=e.child,a.memoizedState=go(n),a.childLanes=mo(t,s,n),e.memoizedState=ho,e=ri(null,a));else if(gn(e),Wo(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var g=s.dgst;s=g,a=Error(f(419)),a.stack="",a.digest=s,Pa({value:a,source:null,stack:null}),e=vo(t,e,n)}else if(Dt||fa(t,e,n,!1),s=(n&t.childLanes)!==0,Dt||s){if(s=ft,s!==null&&(a=Ar(s,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,Bn(t,a),ae(s,t,a),co;Po(o)||Ml(),e=vo(t,e,n)}else Po(o)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,gt=xe(o.nextSibling),Gt=e,K=!0,rn=null,Ee=!1,t!==null&&vu(e,t),e=po(e,a.children),e.flags|=4096);return e}return i?(mn(),o=a.fallback,i=e.mode,r=t.child,g=r.sibling,a=Ye(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,g!==null?o=Ye(g,o):(o=Un(o,i,n,null),o.flags|=2),o.return=e,a.return=e,a.sibling=o,e.child=a,ri(null,a),a=e.child,o=t.child.memoizedState,o===null?o=go(n):(i=o.cachePool,i!==null?(r=Mt._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=wu(),o={baseLanes:o.baseLanes|n,cachePool:i}),a.memoizedState=o,a.childLanes=mo(t,s,n),e.memoizedState=ho,ri(t.child,a)):(gn(e),n=t.child,t=n.sibling,n=Ye(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function po(t,e){return e=pl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function pl(t,e){return t=de(22,t,null,e),t.lanes=0,t}function vo(t,e,n){return Vn(e,t.child,null,n),t=po(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uc(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ns(t.return,e,n)}function yo(t,e,n,a,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i,s.treeForkCount=l)}function _c(t,e,n){var a=e.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=St.current,o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,E(St,s),Yt(t,e,a,n),a=K?Ja:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uc(t,n,e);else if(t.tag===19)Uc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yo(e,!1,i,n,l,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yo(e,!0,n,null,l,a);break;case"together":yo(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ke(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(fa(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,n=Ye(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ye(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pi(t)))}function Xh(t,e,n){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),cn(e,Mt,t.memoizedState.cache),_n();break;case 27:case 5:Rn(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:cn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Vs(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(gn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Bc(t,e,n):(gn(e),t=Ke(t,e,n),t!==null?t.sibling:null);gn(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(fa(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return _c(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(St,St.current),a)break;return null;case 22:return e.lanes=0,Rc(t,e,n,e.pendingProps);case 24:cn(e,Mt,t.memoizedState.cache)}return Ke(t,e,n)}function jc(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Dt=!0;else{if(!bo(t,n)&&(e.flags&128)===0)return Dt=!1,Xh(t,e,n);Dt=(t.flags&131072)!==0}else Dt=!1,K&&(e.flags&1048576)!==0&&pu(e,Ja,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Ln(e.elementType),e.type=t,typeof t=="function")ws(t)?(a=In(t,a),e.tag=1,e=qc(null,e,t,a,n)):(e.tag=0,e=fo(null,e,t,a,n));else{if(t!=null){var i=t.$$typeof;if(i===Kt){e.tag=11,e=Ec(null,e,t,a,n);break t}else if(i===Y){e.tag=14,e=Dc(null,e,t,a,n);break t}}throw e=ye(t)||t,Error(f(306,e,""))}}return e;case 0:return fo(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=In(a,e.pendingProps),qc(t,e,a,i,n);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,js(t,e),ai(e,a,null,n);var s=e.memoizedState;if(a=s.cache,cn(e,Mt,a),a!==l.cache&&Os(e,[Mt],n,!0),ni(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Hc(t,e,a,n);break t}else if(a!==i){i=we(Error(f(424)),e),Pa(i),e=Hc(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=xe(t.firstChild),Gt=e,K=!0,rn=null,Ee=!0,n=Ru(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_n(),a===i){e=Ke(t,e,n);break t}Yt(t,e,a,n)}e=e.child}return e;case 26:return ml(t,e),t===null?(n=Jd(e.type,null,e.pendingProps,null))?e.memoizedState=n:K||(n=e.type,t=e.pendingProps,a=Ol(L.current).createElement(n),a[kt]=e,a[Wt]=t,Vt(a,n,t),qt(a),e.stateNode=a):e.memoizedState=Jd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Rn(e),t===null&&K&&(a=e.stateNode=Xd(e.type,e.pendingProps,L.current),Gt=e,Ee=!0,i=gt,wn(e.type)?(Fo=i,gt=xe(a.firstChild)):gt=i),Yt(t,e,e.pendingProps.children,n),ml(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&K&&((i=a=gt)&&(a=Tg(a,e.type,e.pendingProps,Ee),a!==null?(e.stateNode=a,Gt=e,gt=xe(a.firstChild),Ee=!1,i=!0):i=!1),i||un(e)),Rn(e),i=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,a=l.children,Zo(i,l)?a=null:s!==null&&Zo(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=Is(t,e,_h,null,null,n),wi._currentValue=i),ml(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&K&&((t=n=gt)&&(n=wg(n,e.pendingProps,Ee),n!==null?(e.stateNode=n,Gt=e,gt=null,t=!0):t=!1),t||un(e)),null;case 13:return Bc(t,e,n);case 4:return jt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Vn(e,null,a,n):Yt(t,e,a,n),e.child;case 11:return Ec(t,e,e.type,e.pendingProps,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,cn(e,e.type,a.value),Yt(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,kn(e),i=Lt(i),a=a(i),e.flags|=1,Yt(t,e,a,n),e.child;case 14:return Dc(t,e,e.type,e.pendingProps,n);case 15:return xc(t,e,e.type,e.pendingProps,n);case 19:return _c(t,e,n);case 31:return Ih(t,e,n);case 22:return Rc(t,e,n,e.pendingProps);case 24:return kn(e),a=Lt(Mt),t===null?(i=Bs(),i===null&&(i=ft,l=qs(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),e.memoizedState={parent:a,cache:i},_s(e),cn(e,Mt,i)):((t.lanes&n)!==0&&(js(t,e),ai(e,null,null,n),ni()),i=t.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),cn(e,Mt,a)):(a=l.cache,cn(e,Mt,a),a!==i.cache&&Os(e,[Mt],n,!0))),Yt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Je(t){t.flags|=4}function So(t,e,n,a,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(dd())t.flags|=8192;else throw Yn=tl,Us}else t.flags&=-16777217}function kc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tf(e))if(dd())t.flags|=8192;else throw Yn=tl,Us}function vl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yr():536870912,t.lanes|=e,Ca|=e)}function ui(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function Zh(t,e,n){var a=e.pendingProps;switch(Ds(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ie(Mt),vt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(da(e)?Je(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Rs())),mt(e),null;case 26:var i=e.type,l=e.memoizedState;return t===null?(Je(e),l!==null?(mt(e),kc(e,l)):(mt(e),So(e,i,null,a,n))):l?l!==t.memoizedState?(Je(e),mt(e),kc(e,l)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Je(e),mt(e),So(e,i,t,a,n)),null;case 27:if(Kn(e),n=L.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Je(e);else{if(!a){if(e.stateNode===null)throw Error(f(166));return mt(e),null}t=R.current,da(e)?yu(e):(t=Xd(i,a,n),e.stateNode=t,Je(e))}return mt(e),null;case 5:if(Kn(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Je(e);else{if(!a){if(e.stateNode===null)throw Error(f(166));return mt(e),null}if(l=R.current,da(e))yu(e);else{var s=Ol(L.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[kt]=e,l[Wt]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;t:switch(Vt(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Je(e)}}return mt(e),So(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Je(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(f(166));if(t=L.current,da(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=Gt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[kt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Bd(t.nodeValue,n)),t||un(e,!0)}else t=Ol(t).createTextNode(a),t[kt]=e,e.stateNode=t}return mt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=da(e),n!==null){if(t===null){if(!a)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[kt]=e}else _n(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else n=Rs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(f(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=da(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(f(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[kt]=e}else _n(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else i=Rs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),vl(e,e.updateQueue),mt(e),null);case 4:return vt(),t===null&&Yo(e.stateNode.containerInfo),mt(e),null;case 10:return Ie(e.type),mt(e),null;case 19:if(T(St),a=e.memoizedState,a===null)return mt(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)ui(a,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=il(t),l!==null){for(e.flags|=128,ui(a,!1),t=l.updateQueue,e.updateQueue=t,vl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)hu(n,t),n=n.sibling;return E(St,St.current&1|2),K&&Ve(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&oe()>Tl&&(e.flags|=128,i=!0,ui(a,!1),e.lanes=4194304)}else{if(!i)if(t=il(l),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,vl(e,t),ui(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!K)return mt(e),null}else 2*oe()-a.renderingStartTime>Tl&&n!==536870912&&(e.flags|=128,i=!0,ui(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(t=a.last,t!==null?t.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=oe(),t.sibling=null,n=St.current,E(St,i?n&1|2:n&1),K&&Ve(e,a.treeForkCount),t):(mt(e),null);case 22:case 23:return he(e),Ys(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),n=e.updateQueue,n!==null&&vl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&T(Gn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ie(Mt),mt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function Kh(t,e){switch(Ds(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ie(Mt),vt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Kn(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(f(340));_n()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));_n()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(St),null;case 4:return vt(),null;case 10:return Ie(e.type),null;case 22:case 23:return he(e),Ys(),t!==null&&T(Gn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ie(Mt),null;case 25:return null;default:return null}}function Gc(t,e){switch(Ds(e),e.tag){case 3:Ie(Mt),vt();break;case 26:case 27:case 5:Kn(e);break;case 4:vt();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:T(St);break;case 10:Ie(e.type);break;case 22:case 23:he(e),Ys(),t!==null&&T(Gn);break;case 24:Ie(Mt)}}function ci(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var l=n.create,s=n.inst;a=l(),s.destroy=a}n=n.next}while(n!==i)}}catch(o){rt(e,e.return,o)}}function pn(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&t)===t){var s=a.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,i=e;var r=n,g=o;try{g()}catch(b){rt(i,r,b)}}}a=a.next}while(a!==l)}}catch(b){rt(e,e.return,b)}}function Lc(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Nu(e,n)}catch(a){rt(t,t.return,a)}}}function Yc(t,e,n){n.props=In(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){rt(t,e,a)}}function di(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){rt(t,e,i)}}function _e(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){rt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){rt(t,e,i)}else n.current=null}function Vc(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){rt(t,t.return,i)}}function Ao(t,e,n){try{var a=t.stateNode;pg(a,t.type,n,e),a[Wt]=e}catch(i){rt(t,t.return,i)}}function Qc(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wn(t.type)||t.tag===4}function To(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wo(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ge));else if(a!==4&&(a===27&&wn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(wo(t,e,n),t=t.sibling;t!==null;)wo(t,e,n),t=t.sibling}function yl(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&wn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(yl(t,e,n),t=t.sibling;t!==null;)yl(t,e,n),t=t.sibling}function Ic(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Vt(e,a,n),e[kt]=t,e[Wt]=n}catch(l){rt(t,t.return,l)}}var Pe=!1,xt=!1,Co=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function Jh(t,e){if(t=t.containerInfo,Io=kl,t=iu(t),ps(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var s=0,o=-1,r=-1,g=0,b=0,A=t,m=null;e:for(;;){for(var p;A!==n||i!==0&&A.nodeType!==3||(o=s+i),A!==l||a!==0&&A.nodeType!==3||(r=s+a),A.nodeType===3&&(s+=A.nodeValue.length),(p=A.firstChild)!==null;)m=A,A=p;for(;;){if(A===t)break e;if(m===n&&++g===i&&(o=s),m===l&&++b===a&&(r=s),(p=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=p}n=o===-1||r===-1?null:{start:o,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xo={focusedElem:t,selectionRange:n},kl=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)i=t[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,n=e,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var D=In(n.type,i);t=a.getSnapshotBeforeUpdate(D,l),a.__reactInternalSnapshotBeforeUpdate=t}catch(H){rt(n,n.return,H)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Jo(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function Zc(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Fe(t,n),a&4&&ci(5,n);break;case 1:if(Fe(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){rt(n,n.return,s)}else{var i=In(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){rt(n,n.return,s)}}a&64&&Lc(n),a&512&&di(n,n.return);break;case 3:if(Fe(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Nu(t,e)}catch(s){rt(n,n.return,s)}}break;case 27:e===null&&a&4&&Ic(n);case 26:case 5:Fe(t,n),e===null&&a&4&&Vc(n),a&512&&di(n,n.return);break;case 12:Fe(t,n);break;case 31:Fe(t,n),a&4&&Pc(t,n);break;case 13:Fe(t,n),a&4&&Wc(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=ig.bind(null,n),Cg(t,n))));break;case 22:if(a=n.memoizedState!==null||Pe,!a){e=e!==null&&e.memoizedState!==null||xt,i=Pe;var l=xt;Pe=a,(xt=e)&&!l?$e(t,n,(n.subtreeFlags&8772)!==0):Fe(t,n),Pe=i,xt=l}break;case 30:break;default:Fe(t,n)}}function Kc(t){var e=t.alternate;e!==null&&(t.alternate=null,Kc(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$l(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,$t=!1;function We(t,e,n){for(n=n.child;n!==null;)Jc(t,e,n),n=n.sibling}function Jc(t,e,n){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(Ba,n)}catch{}switch(n.tag){case 26:xt||_e(n,e),We(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||_e(n,e);var a=pt,i=$t;wn(n.type)&&(pt=n.stateNode,$t=!1),We(t,e,n),Si(n.stateNode),pt=a,$t=i;break;case 5:xt||_e(n,e);case 6:if(a=pt,i=$t,pt=null,We(t,e,n),pt=a,$t=i,pt!==null)if($t)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(n.stateNode)}catch(l){rt(n,e,l)}else try{pt.removeChild(n.stateNode)}catch(l){rt(n,e,l)}break;case 18:pt!==null&&($t?(t=pt,Ld(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Oa(t)):Ld(pt,n.stateNode));break;case 4:a=pt,i=$t,pt=n.stateNode.containerInfo,$t=!0,We(t,e,n),pt=a,$t=i;break;case 0:case 11:case 14:case 15:pn(2,n,e),xt||pn(4,n,e),We(t,e,n);break;case 1:xt||(_e(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Yc(n,e,a)),We(t,e,n);break;case 21:We(t,e,n);break;case 22:xt=(a=xt)||n.memoizedState!==null,We(t,e,n),xt=a;break;default:We(t,e,n)}}function Pc(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Oa(t)}catch(n){rt(e,e.return,n)}}}function Wc(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oa(t)}catch(n){rt(e,e.return,n)}}function Ph(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Xc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Xc),e;default:throw Error(f(435,t.tag))}}function bl(t,e){var n=Ph(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var i=lg.bind(null,t,a);a.then(i,i)}})}function te(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=t,s=e,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(wn(o.type)){pt=o.stateNode,$t=!1;break t}break;case 5:pt=o.stateNode,$t=!1;break t;case 3:case 4:pt=o.stateNode.containerInfo,$t=!0;break t}o=o.return}if(pt===null)throw Error(f(160));Jc(l,s,i),pt=null,$t=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Fc(e,t),e=e.sibling}var Ne=null;function Fc(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:te(e,t),ee(t),a&4&&(pn(3,t,t.return),ci(3,t),pn(5,t,t.return));break;case 1:te(e,t),ee(t),a&512&&(xt||n===null||_e(n,n.return)),a&64&&Pe&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ne;if(te(e,t),ee(t),a&512&&(xt||n===null||_e(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ja]||l[kt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Vt(l,a,n),l[kt]=t,qt(l),a=l;break t;case"link":var s=Fd("link","href",i).get(a+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}l=i.createElement(a),Vt(l,a,n),i.head.appendChild(l);break;case"meta":if(s=Fd("meta","content",i).get(a+(n.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}l=i.createElement(a),Vt(l,a,n),i.head.appendChild(l);break;default:throw Error(f(468,a))}l[kt]=t,qt(l),a=l}t.stateNode=a}else $d(i,t.type,t.stateNode);else t.stateNode=Wd(i,a,t.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?$d(i,t.type,t.stateNode):Wd(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ao(t,t.memoizedProps,n.memoizedProps)}break;case 27:te(e,t),ee(t),a&512&&(xt||n===null||_e(n,n.return)),n!==null&&a&4&&Ao(t,t.memoizedProps,n.memoizedProps);break;case 5:if(te(e,t),ee(t),a&512&&(xt||n===null||_e(n,n.return)),t.flags&32){i=t.stateNode;try{ea(i,"")}catch(D){rt(t,t.return,D)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Ao(t,i,n!==null?n.memoizedProps:i)),a&1024&&(Co=!0);break;case 6:if(te(e,t),ee(t),a&4){if(t.stateNode===null)throw Error(f(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(D){rt(t,t.return,D)}}break;case 3:if(Bl=null,i=Ne,Ne=ql(e.containerInfo),te(e,t),Ne=i,ee(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(D){rt(t,t.return,D)}Co&&(Co=!1,$c(t));break;case 4:a=Ne,Ne=ql(t.stateNode.containerInfo),te(e,t),ee(t),Ne=a;break;case 12:te(e,t),ee(t);break;case 31:te(e,t),ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bl(t,a)));break;case 13:te(e,t),ee(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Al=oe()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bl(t,a)));break;case 22:i=t.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,g=Pe,b=xt;if(Pe=g||i,xt=b||r,te(e,t),xt=b,Pe=g,ee(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||r||Pe||xt||Xn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){r=n=e;try{if(l=r.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=r.stateNode;var A=r.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(D){rt(r,r.return,D)}}}else if(e.tag===6){if(n===null){r=e;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(D){rt(r,r.return,D)}}}else if(e.tag===18){if(n===null){r=e;try{var p=r.stateNode;i?Yd(p,!0):Yd(r.stateNode,!1)}catch(D){rt(r,r.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,bl(t,n))));break;case 19:te(e,t),ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bl(t,a)));break;case 30:break;case 21:break;default:te(e,t),ee(t)}}function ee(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Qc(a)){n=a;break}a=a.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var i=n.stateNode,l=To(t);yl(t,l,i);break;case 5:var s=n.stateNode;n.flags&32&&(ea(s,""),n.flags&=-33);var o=To(t);yl(t,o,s);break;case 3:case 4:var r=n.stateNode.containerInfo,g=To(t);wo(t,g,r);break;default:throw Error(f(161))}}catch(b){rt(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $c(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$c(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Fe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Zc(t,e.alternate,e),e=e.sibling}function Xn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:pn(4,e,e.return),Xn(e);break;case 1:_e(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Yc(e,e.return,n),Xn(e);break;case 27:Si(e.stateNode);case 26:case 5:_e(e,e.return),Xn(e);break;case 22:e.memoizedState===null&&Xn(e);break;case 30:Xn(e);break;default:Xn(e)}t=t.sibling}}function $e(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,l=e,s=l.flags;switch(l.tag){case 0:case 11:case 15:$e(i,l,n),ci(4,l);break;case 1:if($e(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){rt(a,a.return,g)}if(a=l,i=a.updateQueue,i!==null){var o=a.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)zu(r[i],o)}catch(g){rt(a,a.return,g)}}n&&s&64&&Lc(l),di(l,l.return);break;case 27:Ic(l);case 26:case 5:$e(i,l,n),n&&a===null&&s&4&&Vc(l),di(l,l.return);break;case 12:$e(i,l,n);break;case 31:$e(i,l,n),n&&s&4&&Pc(i,l);break;case 13:$e(i,l,n),n&&s&4&&Wc(i,l);break;case 22:l.memoizedState===null&&$e(i,l,n),di(l,l.return);break;case 30:break;default:$e(i,l,n)}e=e.sibling}}function Mo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Wa(n))}function Eo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wa(t))}function Oe(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(t,e,n,a),e=e.sibling}function td(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Oe(t,e,n,a),i&2048&&ci(9,e);break;case 1:Oe(t,e,n,a);break;case 3:Oe(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wa(t)));break;case 12:if(i&2048){Oe(t,e,n,a),t=e.stateNode;try{var l=e.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){rt(e,e.return,r)}}else Oe(t,e,n,a);break;case 31:Oe(t,e,n,a);break;case 13:Oe(t,e,n,a);break;case 23:break;case 22:l=e.stateNode,s=e.alternate,e.memoizedState!==null?l._visibility&2?Oe(t,e,n,a):fi(t,e):l._visibility&2?Oe(t,e,n,a):(l._visibility|=2,Aa(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Mo(s,e);break;case 24:Oe(t,e,n,a),i&2048&&Eo(e.alternate,e);break;default:Oe(t,e,n,a)}}function Aa(t,e,n,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,s=e,o=n,r=a,g=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(l,s,o,r,i),ci(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Aa(l,s,o,r,i):fi(l,s):(b._visibility|=2,Aa(l,s,o,r,i)),i&&g&2048&&Mo(s.alternate,s);break;case 24:Aa(l,s,o,r,i),i&&g&2048&&Eo(s.alternate,s);break;default:Aa(l,s,o,r,i)}e=e.sibling}}function fi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:fi(n,a),i&2048&&Mo(a.alternate,a);break;case 24:fi(n,a),i&2048&&Eo(a.alternate,a);break;default:fi(n,a)}e=e.sibling}}var hi=8192;function Ta(t,e,n){if(t.subtreeFlags&hi)for(t=t.child;t!==null;)ed(t,e,n),t=t.sibling}function ed(t,e,n){switch(t.tag){case 26:Ta(t,e,n),t.flags&hi&&t.memoizedState!==null&&Ug(n,Ne,t.memoizedState,t.memoizedProps);break;case 5:Ta(t,e,n);break;case 3:case 4:var a=Ne;Ne=ql(t.stateNode.containerInfo),Ta(t,e,n),Ne=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=hi,hi=16777216,Ta(t,e,n),hi=a):Ta(t,e,n));break;default:Ta(t,e,n)}}function nd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Ht=a,id(a,t)}nd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ad(t),t=t.sibling}function ad(t){switch(t.tag){case 0:case 11:case 15:gi(t),t.flags&2048&&pn(9,t,t.return);break;case 3:gi(t);break;case 12:gi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Sl(t)):gi(t);break;default:gi(t)}}function Sl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Ht=a,id(a,t)}nd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:pn(8,e,e.return),Sl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Sl(e));break;default:Sl(e)}t=t.sibling}}function id(t,e){for(;Ht!==null;){var n=Ht;switch(n.tag){case 0:case 11:case 15:pn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Wa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ht=a;else t:for(n=t;Ht!==null;){a=Ht;var i=a.sibling,l=a.return;if(Kc(a),a===n){Ht=null;break t}if(i!==null){i.return=l,Ht=i;break t}Ht=l}}}var Wh={getCacheForType:function(t){var e=Lt(Mt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Lt(Mt).controller.signal}},Fh=typeof WeakMap=="function"?WeakMap:Map,et=0,ft=null,V=null,X=0,ot=0,ge=null,vn=!1,wa=!1,Do=!1,tn=0,bt=0,yn=0,Zn=0,xo=0,me=0,Ca=0,mi=null,ne=null,Ro=!1,Al=0,ld=0,Tl=1/0,wl=null,bn=null,Nt=0,Sn=null,Ma=null,en=0,zo=0,No=null,sd=null,pi=0,Oo=null;function pe(){return(et&2)!==0&&X!==0?X&-X:y.T!==null?jo():Tr()}function od(){if(me===0)if((X&536870912)===0||K){var t=Ni;Ni<<=1,(Ni&3932160)===0&&(Ni=262144),me=t}else me=536870912;return t=fe.current,t!==null&&(t.flags|=32),me}function ae(t,e,n){(t===ft&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(Ea(t,0),An(t,X,me,!1)),_a(t,n),((et&2)===0||t!==ft)&&(t===ft&&((et&2)===0&&(Zn|=n),bt===4&&An(t,X,me,!1)),je(t))}function rd(t,e,n){if((et&6)!==0)throw Error(f(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ua(t,e),i=a?eg(t,e):Ho(t,e,!0),l=a;do{if(i===0){wa&&!a&&An(t,e,0,!1);break}else{if(n=t.current.alternate,l&&!$h(n)){i=Ho(t,e,!1),l=!1;continue}if(i===2){if(l=e,t.errorRecoveryDisabledLanes&l)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var o=t;i=mi;var r=o.current.memoizedState.isDehydrated;if(r&&(Ea(o,s).flags|=256),s=Ho(o,s,!1),s!==2){if(Do&&!r){o.errorRecoveryDisabledLanes|=l,Zn|=l,i=4;break t}l=ne,ne=i,l!==null&&(ne===null?ne=l:ne.push.apply(ne,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Ea(t,0),An(t,e,0,!0);break}t:{switch(a=t,l=i,l){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:An(a,e,me,!vn);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(i=Al+300-oe(),10<i)){if(An(a,e,me,!vn),qi(a,0,!0)!==0)break t;en=e,a.timeoutHandle=kd(ud.bind(null,a,n,ne,wl,Ro,e,me,Zn,Ca,vn,l,"Throttled",-0,0),i);break t}ud(a,n,ne,wl,Ro,e,me,Zn,Ca,vn,l,null,-0,0)}}break}while(!0);je(t)}function ud(t,e,n,a,i,l,s,o,r,g,b,A,m,p){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},ed(e,l,A);var D=(l&62914560)===l?Al-oe():(l&4194048)===l?ld-oe():0;if(D=_g(A,D),D!==null){en=l,t.cancelPendingCommit=D(vd.bind(null,t,e,l,n,a,i,s,o,r,b,A,null,m,p)),An(t,l,s,!g);return}}vd(t,e,l,n,a,i,s,o,r)}function $h(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!ce(l(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function An(t,e,n,a){e&=~xo,e&=~Zn,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var l=31-ue(i),s=1<<l;a[l]=-1,i&=~s}n!==0&&br(t,n,e)}function Cl(){return(et&6)===0?(vi(0),!1):!0}function qo(){if(V!==null){if(ot===0)var t=V.return;else t=V,Qe=jn=null,Ks(t),pa=null,$a=0,t=V;for(;t!==null;)Gc(t.alternate,t),t=t.return;V=null}}function Ea(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,bg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),en=0,qo(),ft=t,V=n=Ye(t.current,null),X=e,ot=0,ge=null,vn=!1,wa=Ua(t,e),Do=!1,Ca=me=xo=Zn=yn=bt=0,ne=mi=null,Ro=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-ue(a),l=1<<i;e|=t[i],a&=~l}return tn=e,Ii(),n}function cd(t,e){k=null,y.H=oi,e===ma||e===$i?(e=Eu(),ot=3):e===Us?(e=Eu(),ot=4):ot=e===co?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,V===null&&(bt=1,hl(t,we(e,t.current)))}function dd(){var t=fe.current;return t===null?!0:(X&4194048)===X?De===null:(X&62914560)===X||(X&536870912)!==0?t===De:!1}function fd(){var t=y.H;return y.H=oi,t===null?oi:t}function hd(){var t=y.A;return y.A=Wh,t}function Ml(){bt=4,vn||(X&4194048)!==X&&fe.current!==null||(wa=!0),(yn&134217727)===0&&(Zn&134217727)===0||ft===null||An(ft,X,me,!1)}function Ho(t,e,n){var a=et;et|=2;var i=fd(),l=hd();(ft!==t||X!==e)&&(wl=null,Ea(t,e)),e=!1;var s=bt;t:do try{if(ot!==0&&V!==null){var o=V,r=ge;switch(ot){case 8:qo(),s=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var g=ot;if(ot=0,ge=null,Da(t,o,r,g),n&&wa){s=0;break t}break;default:g=ot,ot=0,ge=null,Da(t,o,r,g)}}tg(),s=bt;break}catch(b){cd(t,b)}while(!0);return e&&t.shellSuspendCounter++,Qe=jn=null,et=a,y.H=i,y.A=l,V===null&&(ft=null,X=0,Ii()),s}function tg(){for(;V!==null;)gd(V)}function eg(t,e){var n=et;et|=2;var a=fd(),i=hd();ft!==t||X!==e?(wl=null,Tl=oe()+500,Ea(t,e)):wa=Ua(t,e);t:do try{if(ot!==0&&V!==null){e=V;var l=ge;e:switch(ot){case 1:ot=0,ge=null,Da(t,e,l,1);break;case 2:case 9:if(Cu(l)){ot=0,ge=null,md(e);break}e=function(){ot!==2&&ot!==9||ft!==t||(ot=7),je(t)},l.then(e,e);break t;case 3:ot=7;break t;case 4:ot=5;break t;case 7:Cu(l)?(ot=0,ge=null,md(e)):(ot=0,ge=null,Da(t,e,l,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var o=V;if(s?tf(s):o.stateNode.complete){ot=0,ge=null;var r=o.sibling;if(r!==null)V=r;else{var g=o.return;g!==null?(V=g,El(g)):V=null}break e}}ot=0,ge=null,Da(t,e,l,5);break;case 6:ot=0,ge=null,Da(t,e,l,6);break;case 8:qo(),bt=6;break t;default:throw Error(f(462))}}ng();break}catch(b){cd(t,b)}while(!0);return Qe=jn=null,y.H=a,y.A=i,et=n,V!==null?0:(ft=null,X=0,Ii(),bt)}function ng(){for(;V!==null&&!Mf();)gd(V)}function gd(t){var e=jc(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?El(t):V=e}function md(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Oc(n,e,e.pendingProps,e.type,void 0,X);break;case 11:e=Oc(n,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:Ks(e);default:Gc(n,e),e=V=hu(e,tn),e=jc(n,e,tn)}t.memoizedProps=t.pendingProps,e===null?El(t):V=e}function Da(t,e,n,a){Qe=jn=null,Ks(e),pa=null,$a=0;var i=e.return;try{if(Qh(t,i,e,n,X)){bt=1,hl(t,we(n,t.current)),V=null;return}}catch(l){if(i!==null)throw V=i,l;bt=1,hl(t,we(n,t.current)),V=null;return}e.flags&32768?(K||a===1?t=!0:wa||(X&536870912)!==0?t=!1:(vn=t=!0,(a===2||a===9||a===3||a===6)&&(a=fe.current,a!==null&&a.tag===13&&(a.flags|=16384))),pd(e,t)):El(e)}function El(t){var e=t;do{if((e.flags&32768)!==0){pd(e,vn);return}t=e.return;var n=Zh(e.alternate,e,tn);if(n!==null){V=n;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);bt===0&&(bt=5)}function pd(t,e){do{var n=Kh(t.alternate,t);if(n!==null){n.flags&=32767,V=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=n}while(t!==null);bt=6,V=null}function vd(t,e,n,a,i,l,s,o,r){t.cancelPendingCommit=null;do Dl();while(Nt!==0);if((et&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(l=e.lanes|e.childLanes,l|=As,Bf(t,n,l,s,o,r),t===ft&&(V=ft=null,X=0),Ma=e,Sn=t,en=n,zo=l,No=i,sd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sg(Ri,function(){return Td(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,i=M.p,M.p=2,s=et,et|=4;try{Jh(t,e,n)}finally{et=s,M.p=i,y.T=a}}Nt=1,yd(),bd(),Sd()}}function yd(){if(Nt===1){Nt=0;var t=Sn,e=Ma,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var a=M.p;M.p=2;var i=et;et|=4;try{Fc(e,t);var l=Xo,s=iu(t.containerInfo),o=l.focusedElem,r=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&au(o.ownerDocument.documentElement,o)){if(r!==null&&ps(o)){var g=r.start,b=r.end;if(b===void 0&&(b=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(b,o.value.length);else{var A=o.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var p=m.getSelection(),D=o.textContent.length,H=Math.min(r.start,D),dt=r.end===void 0?H:Math.min(r.end,D);!p.extend&&H>dt&&(s=dt,dt=H,H=s);var d=nu(o,H),u=nu(o,dt);if(d&&u&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==u.node||p.focusOffset!==u.offset)){var h=A.createRange();h.setStart(d.node,d.offset),p.removeAllRanges(),H>dt?(p.addRange(h),p.extend(u.node,u.offset)):(h.setEnd(u.node,u.offset),p.addRange(h))}}}}for(A=[],p=o;p=p.parentNode;)p.nodeType===1&&A.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<A.length;o++){var S=A[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}kl=!!Io,Xo=Io=null}finally{et=i,M.p=a,y.T=n}}t.current=e,Nt=2}}function bd(){if(Nt===2){Nt=0;var t=Sn,e=Ma,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var a=M.p;M.p=2;var i=et;et|=4;try{Zc(t,e.alternate,e)}finally{et=i,M.p=a,y.T=n}}Nt=3}}function Sd(){if(Nt===4||Nt===3){Nt=0,Ef();var t=Sn,e=Ma,n=en,a=sd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Nt=5:(Nt=0,Ma=Sn=null,Ad(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(bn=null),Wl(n),e=e.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=y.T,i=M.p,M.p=2,y.T=null;try{for(var l=t.onRecoverableError,s=0;s<a.length;s++){var o=a[s];l(o.value,{componentStack:o.stack})}}finally{y.T=e,M.p=i}}(en&3)!==0&&Dl(),je(t),i=t.pendingLanes,(n&261930)!==0&&(i&42)!==0?t===Oo?pi++:(pi=0,Oo=t):pi=0,vi(0)}}function Ad(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wa(e)))}function Dl(){return yd(),bd(),Sd(),Td()}function Td(){if(Nt!==5)return!1;var t=Sn,e=zo;zo=0;var n=Wl(en),a=y.T,i=M.p;try{M.p=32>n?32:n,y.T=null,n=No,No=null;var l=Sn,s=en;if(Nt=0,Ma=Sn=null,en=0,(et&6)!==0)throw Error(f(331));var o=et;if(et|=4,ad(l.current),td(l,l.current,s,n),et=o,vi(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(Ba,l)}catch{}return!0}finally{M.p=i,y.T=a,Ad(t,e)}}function wd(t,e,n){e=we(n,e),e=uo(t.stateNode,e,2),t=hn(t,e,2),t!==null&&(_a(t,2),je(t))}function rt(t,e,n){if(t.tag===3)wd(t,t,n);else for(;e!==null;){if(e.tag===3){wd(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bn===null||!bn.has(a))){t=we(n,t),n=Cc(2),a=hn(e,n,2),a!==null&&(Mc(n,a,e,t),_a(a,2),je(a));break}}e=e.return}}function Bo(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new Fh;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(Do=!0,i.add(n),t=ag.bind(null,t,e,n),e.then(t,t))}function ag(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ft===t&&(X&n)===n&&(bt===4||bt===3&&(X&62914560)===X&&300>oe()-Al?(et&2)===0&&Ea(t,0):xo|=n,Ca===X&&(Ca=0)),je(t)}function Cd(t,e){e===0&&(e=yr()),t=Bn(t,e),t!==null&&(_a(t,e),je(t))}function ig(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cd(t,n)}function lg(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(e),Cd(t,n)}function sg(t,e){return Zl(t,e)}var xl=null,xa=null,Uo=!1,Rl=!1,_o=!1,Tn=0;function je(t){t!==xa&&t.next===null&&(xa===null?xl=xa=t:xa=xa.next=t),Rl=!0,Uo||(Uo=!0,rg())}function vi(t,e){if(!_o&&Rl){_o=!0;do for(var n=!1,a=xl;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,o=a.pingedLanes;l=(1<<31-ue(42|t)+1)-1,l&=i&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,xd(a,l))}else l=X,l=qi(a,a===ft?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Ua(a,l)||(n=!0,xd(a,l));a=a.next}while(n);_o=!1}}function og(){Md()}function Md(){Rl=Uo=!1;var t=0;Tn!==0&&yg()&&(t=Tn);for(var e=oe(),n=null,a=xl;a!==null;){var i=a.next,l=Ed(a,e);l===0?(a.next=null,n===null?xl=i:n.next=i,i===null&&(xa=n)):(n=a,(t!==0||(l&3)!==0)&&(Rl=!0)),a=i}Nt!==0&&Nt!==5||vi(t),Tn!==0&&(Tn=0)}function Ed(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var s=31-ue(l),o=1<<s,r=i[s];r===-1?((o&n)===0||(o&a)!==0)&&(i[s]=Hf(o,e)):r<=e&&(t.expiredLanes|=o),l&=~o}if(e=ft,n=X,n=qi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Kl(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ua(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Kl(a),Wl(n)){case 2:case 8:n=pr;break;case 32:n=Ri;break;case 268435456:n=vr;break;default:n=Ri}return a=Dd.bind(null,t),n=Zl(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Kl(a),t.callbackPriority=2,t.callbackNode=null,2}function Dd(t,e){if(Nt!==0&&Nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Dl()&&t.callbackNode!==n)return null;var a=X;return a=qi(t,t===ft?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(rd(t,a,e),Ed(t,oe()),t.callbackNode!=null&&t.callbackNode===n?Dd.bind(null,t):null)}function xd(t,e){if(Dl())return null;rd(t,e,!0)}function rg(){Sg(function(){(et&6)!==0?Zl(mr,og):Md()})}function jo(){if(Tn===0){var t=ha;t===0&&(t=zi,zi<<=1,(zi&261888)===0&&(zi=256)),Tn=t}return Tn}function Rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_i(""+t)}function zd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ug(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var l=Rd((i[Wt]||null).action),s=a.submitter;s&&(e=(e=s[Wt]||null)?Rd(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var o=new Li("action","action",null,a,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Tn!==0){var r=s?zd(i,s):new FormData(i);ao(n,{pending:!0,data:r,method:i.method,action:l},null,r)}}else typeof l=="function"&&(o.preventDefault(),r=s?zd(i,s):new FormData(i),ao(n,{pending:!0,data:r,method:i.method,action:l},l,r))},currentTarget:i}]})}}for(var ko=0;ko<Ss.length;ko++){var Go=Ss[ko],cg=Go.toLowerCase(),dg=Go[0].toUpperCase()+Go.slice(1);ze(cg,"on"+dg)}ze(ou,"onAnimationEnd"),ze(ru,"onAnimationIteration"),ze(uu,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(Dh,"onTransitionRun"),ze(xh,"onTransitionStart"),ze(Rh,"onTransitionCancel"),ze(cu,"onTransitionEnd"),$n("onMouseEnter",["mouseout","mouseover"]),$n("onMouseLeave",["mouseout","mouseover"]),$n("onPointerEnter",["pointerout","pointerover"]),$n("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yi));function Nd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;t:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var o=a[s],r=o.instance,g=o.currentTarget;if(o=o.listener,r!==l&&i.isPropagationStopped())break t;l=o,i.currentTarget=g;try{l(i)}catch(b){Qi(b)}i.currentTarget=null,l=r}else for(s=0;s<a.length;s++){if(o=a[s],r=o.instance,g=o.currentTarget,o=o.listener,r!==l&&i.isPropagationStopped())break t;l=o,i.currentTarget=g;try{l(i)}catch(b){Qi(b)}i.currentTarget=null,l=r}}}}function Q(t,e){var n=e[Fl];n===void 0&&(n=e[Fl]=new Set);var a=t+"__bubble";n.has(a)||(Od(e,t,2,!1),n.add(a))}function Lo(t,e,n){var a=0;e&&(a|=4),Od(n,t,a,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[zl]){t[zl]=!0,Mr.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||Lo(n,!1,t),Lo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Lo("selectionchange",!1,e))}}function Od(t,e,n,a){switch(rf(e)){case 2:var i=Gg;break;case 8:i=Lg;break;default:i=ar}n=i.bind(null,e,n,t),i=void 0,!os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vo(t,e,n,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===i)break;if(s===4)for(s=a.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;o!==null;){if(s=Pn(o),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){a=l=s;continue t}o=o.parentNode}}a=a.return}_r(function(){var g=l,b=ls(n),A=[];t:{var m=du.get(t);if(m!==void 0){var p=Li,D=t;switch(t){case"keypress":if(ki(n)===0)break t;case"keydown":case"keyup":p=lh;break;case"focusin":D="focus",p=ds;break;case"focusout":D="blur",p=ds;break;case"beforeblur":case"afterblur":p=ds;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rh;break;case ou:case ru:case uu:p=Pf;break;case cu:p=ch;break;case"scroll":case"scrollend":p=If;break;case"wheel":p=fh;break;case"copy":case"cut":case"paste":p=Ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yr;break;case"toggle":case"beforetoggle":p=gh}var H=(e&4)!==0,dt=!H&&(t==="scroll"||t==="scrollend"),d=H?m!==null?m+"Capture":null:m;H=[];for(var u=g,h;u!==null;){var S=u;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||d===null||(S=Ga(u,d),S!=null&&H.push(bi(u,S,h))),dt)break;u=u.return}0<H.length&&(m=new p(m,D,null,n,b),A.push({event:m,listeners:H}))}}if((e&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",m&&n!==is&&(D=n.relatedTarget||n.fromElement)&&(Pn(D)||D[Jn]))break t;if((p||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,p?(D=n.relatedTarget||n.toElement,p=g,D=D?Pn(D):null,D!==null&&(dt=J(D),H=D.tag,D!==dt||H!==5&&H!==27&&H!==6)&&(D=null)):(p=null,D=g),p!==D)){if(H=Gr,S="onMouseLeave",d="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(H=Yr,S="onPointerLeave",d="onPointerEnter",u="pointer"),dt=p==null?m:ka(p),h=D==null?m:ka(D),m=new H(S,u+"leave",p,n,b),m.target=dt,m.relatedTarget=h,S=null,Pn(b)===g&&(H=new H(d,u+"enter",D,n,b),H.target=h,H.relatedTarget=dt,S=H),dt=S,p&&D)e:{for(H=hg,d=p,u=D,h=0,S=d;S;S=H(S))h++;S=0;for(var O=u;O;O=H(O))S++;for(;0<h-S;)d=H(d),h--;for(;0<S-h;)u=H(u),S--;for(;h--;){if(d===u||u!==null&&d===u.alternate){H=d;break e}d=H(d),u=H(u)}H=null}else H=null;p!==null&&qd(A,m,p,H,!1),D!==null&&dt!==null&&qd(A,dt,D,H,!0)}}t:{if(m=g?ka(g):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var $=Pr;else if(Kr(m))if(Wr)$=Ch;else{$=Th;var N=Ah}else p=m.nodeName,!p||p.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?g&&as(g.elementType)&&($=Pr):$=wh;if($&&($=$(t,g))){Jr(A,$,n,b);break t}N&&N(t,m,g),t==="focusout"&&g&&m.type==="number"&&g.memoizedProps.value!=null&&ns(m,"number",m.value)}switch(N=g?ka(g):window,t){case"focusin":(Kr(N)||N.contentEditable==="true")&&(la=N,vs=g,Ka=null);break;case"focusout":Ka=vs=la=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,lu(A,n,b);break;case"selectionchange":if(Eh)break;case"keydown":case"keyup":lu(A,n,b)}var G;if(hs)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else ia?Xr(t,n)&&(Z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Vr&&n.locale!=="ko"&&(ia||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ia&&(G=jr()):(sn=b,rs="value"in sn?sn.value:sn.textContent,ia=!0)),N=Nl(g,Z),0<N.length&&(Z=new Lr(Z,t,null,n,b),A.push({event:Z,listeners:N}),G?Z.data=G:(G=Zr(n),G!==null&&(Z.data=G)))),(G=ph?vh(t,n):yh(t,n))&&(Z=Nl(g,"onBeforeInput"),0<Z.length&&(N=new Lr("onBeforeInput","beforeinput",null,n,b),A.push({event:N,listeners:Z}),N.data=G)),ug(A,t,g,n,b)}Nd(A,e)})}function bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ga(t,n),i!=null&&a.unshift(bi(t,i,l)),i=Ga(t,e),i!=null&&a.push(bi(t,i,l))),t.tag===3)return a;t=t.return}return[]}function hg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qd(t,e,n,a,i){for(var l=e._reactName,s=[];n!==null&&n!==a;){var o=n,r=o.alternate,g=o.stateNode;if(o=o.tag,r!==null&&r===a)break;o!==5&&o!==26&&o!==27||g===null||(r=g,i?(g=Ga(n,l),g!=null&&s.unshift(bi(n,g,r))):i||(g=Ga(n,l),g!=null&&s.push(bi(n,g,r)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var gg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(gg,`
`).replace(mg,"")}function Bd(t,e){return e=Hd(e),Hd(t)===e}function ct(t,e,n,a,i,l){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ea(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ea(t,""+a);break;case"className":Bi(t,"class",a);break;case"tabIndex":Bi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Bi(t,n,a);break;case"style":Br(t,a,l);break;case"data":if(e!=="object"){Bi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=_i(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&ct(t,e,"name",i.name,i,null),ct(t,e,"formEncType",i.formEncType,i,null),ct(t,e,"formMethod",i.formMethod,i,null),ct(t,e,"formTarget",i.formTarget,i,null)):(ct(t,e,"encType",i.encType,i,null),ct(t,e,"method",i.method,i,null),ct(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=_i(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=Ge);break;case"onScroll":a!=null&&Q("scroll",t);break;case"onScrollEnd":a!=null&&Q("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=_i(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":Q("beforetoggle",t),Q("toggle",t),Hi(t,"popover",a);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Hi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Vf.get(n)||n,Hi(t,n,a))}}function Qo(t,e,n,a,i,l){switch(n){case"style":Br(t,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ea(t,a):(typeof a=="number"||typeof a=="bigint")&&ea(t,""+a);break;case"onScroll":a!=null&&Q("scroll",t);break;case"onScrollEnd":a!=null&&Q("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),l=t[Wt]||null,l=l!=null?l[n]:null,typeof l=="function"&&t.removeEventListener(e,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Hi(t,n,a)}}}function Vt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",t),Q("load",t);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ct(t,e,l,s,n,null)}}i&&ct(t,e,"srcSet",n.srcSet,n,null),a&&ct(t,e,"src",n.src,n,null);return;case"input":Q("invalid",t);var o=l=s=i=null,r=null,g=null;for(a in n)if(n.hasOwnProperty(a)){var b=n[a];if(b!=null)switch(a){case"name":i=b;break;case"type":s=b;break;case"checked":r=b;break;case"defaultChecked":g=b;break;case"value":l=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:ct(t,e,a,b,n,null)}}Nr(t,l,o,r,g,s,i,!1);return;case"select":Q("invalid",t),a=s=l=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":a=o;default:ct(t,e,i,o,n,null)}e=l,n=s,t.multiple=!!a,e!=null?ta(t,!!a,e,!1):n!=null&&ta(t,!!a,n,!0);return;case"textarea":Q("invalid",t),l=i=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":i=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(f(91));break;default:ct(t,e,s,o,n,null)}qr(t,a,i,l);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(a=n[r],a!=null))switch(r){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ct(t,e,r,a,n,null)}return;case"dialog":Q("beforetoggle",t),Q("toggle",t),Q("cancel",t),Q("close",t);break;case"iframe":case"object":Q("load",t);break;case"video":case"audio":for(a=0;a<yi.length;a++)Q(yi[a],t);break;case"image":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"embed":case"source":case"link":Q("error",t),Q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ct(t,e,g,a,n,null)}return;default:if(as(e)){for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!==void 0&&Qo(t,e,b,a,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(a=n[o],a!=null&&ct(t,e,o,a,n,null))}function pg(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,o=null,r=null,g=null,b=null;for(p in n){var A=n[p];if(n.hasOwnProperty(p)&&A!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=A;default:a.hasOwnProperty(p)||ct(t,e,p,null,a,A)}}for(var m in a){var p=a[m];if(A=n[m],a.hasOwnProperty(m)&&(p!=null||A!=null))switch(m){case"type":l=p;break;case"name":i=p;break;case"checked":g=p;break;case"defaultChecked":b=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(f(137,e));break;default:p!==A&&ct(t,e,m,p,a,A)}}es(t,s,o,r,g,b,l,i);return;case"select":p=s=o=m=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":p=r;default:a.hasOwnProperty(l)||ct(t,e,l,null,a,r)}for(i in a)if(l=a[i],r=n[i],a.hasOwnProperty(i)&&(l!=null||r!=null))switch(i){case"value":m=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==r&&ct(t,e,i,l,a,r)}e=o,n=s,a=p,m!=null?ta(t,!!n,m,!1):!!a!=!!n&&(e!=null?ta(t,!!n,e,!0):ta(t,!!n,n?[]:"",!1));return;case"textarea":p=m=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ct(t,e,o,null,a,i)}for(s in a)if(i=a[s],l=n[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":m=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==l&&ct(t,e,s,i,a,l)}Or(t,m,p);return;case"option":for(var D in n)if(m=n[D],n.hasOwnProperty(D)&&m!=null&&!a.hasOwnProperty(D))switch(D){case"selected":t.selected=!1;break;default:ct(t,e,D,null,a,m)}for(r in a)if(m=a[r],p=n[r],a.hasOwnProperty(r)&&m!==p&&(m!=null||p!=null))switch(r){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ct(t,e,r,m,a,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in n)m=n[H],n.hasOwnProperty(H)&&m!=null&&!a.hasOwnProperty(H)&&ct(t,e,H,null,a,m);for(g in a)if(m=a[g],p=n[g],a.hasOwnProperty(g)&&m!==p&&(m!=null||p!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(137,e));break;default:ct(t,e,g,m,a,p)}return;default:if(as(e)){for(var dt in n)m=n[dt],n.hasOwnProperty(dt)&&m!==void 0&&!a.hasOwnProperty(dt)&&Qo(t,e,dt,void 0,a,m);for(b in a)m=a[b],p=n[b],!a.hasOwnProperty(b)||m===p||m===void 0&&p===void 0||Qo(t,e,b,m,a,p);return}}for(var d in n)m=n[d],n.hasOwnProperty(d)&&m!=null&&!a.hasOwnProperty(d)&&ct(t,e,d,null,a,m);for(A in a)m=a[A],p=n[A],!a.hasOwnProperty(A)||m===p||m==null&&p==null||ct(t,e,A,m,a,p)}function Ud(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],l=i.transferSize,s=i.initiatorType,o=i.duration;if(l&&o&&Ud(s)){for(s=0,o=i.responseEnd,a+=1;a<n.length;a++){var r=n[a],g=r.startTime;if(g>o)break;var b=r.transferSize,A=r.initiatorType;b&&Ud(A)&&(r=r.responseEnd,s+=b*(r<o?1:(o-g)/(r-g)))}if(--a,e+=8*(l+s)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Io=null,Xo=null;function Ol(t){return t.nodeType===9?t:t.ownerDocument}function _d(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ko=null;function yg(){var t=window.event;return t&&t.type==="popstate"?t===Ko?!1:(Ko=t,!0):(Ko=null,!1)}var kd=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(t){return Gd.resolve(null).then(t).catch(Ag)}:kd;function Ag(t){setTimeout(function(){throw t})}function wn(t){return t==="head"}function Ld(t,e){var n=e,a=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(i),Oa(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Si(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Si(n);for(var l=n.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[ja]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&Si(t.ownerDocument.body);n=i}while(n);Oa(e)}function Yd(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function Jo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jo(n),$l(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Tg(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ja])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=xe(t.nextSibling),t===null)break}return null}function wg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xe(t.nextSibling),t===null))return null;return t}function Vd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=xe(t.nextSibling),t===null))return null;return t}function Po(t){return t.data==="$?"||t.data==="$~"}function Wo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cg(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fo=null;function Qd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return xe(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Id(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Xd(t,e,n){switch(e=Ol(n),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Si(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$l(t)}var Re=new Map,Zd=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var nn=M.d;M.d={f:Mg,r:Eg,D:Dg,C:xg,L:Rg,m:zg,X:Og,S:Ng,M:qg};function Mg(){var t=nn.f(),e=Cl();return t||e}function Eg(t){var e=Wn(t);e!==null&&e.tag===5&&e.type==="form"?cc(e):nn.r(t)}var Ra=typeof document>"u"?null:document;function Kd(t,e,n){var a=Ra;if(a&&typeof e=="string"&&e){var i=Ae(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Zd.has(i)||(Zd.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Vt(e,"link",t),qt(e),a.head.appendChild(e)))}}function Dg(t){nn.D(t),Kd("dns-prefetch",t,null)}function xg(t,e){nn.C(t,e),Kd("preconnect",t,e)}function Rg(t,e,n){nn.L(t,e,n);var a=Ra;if(a&&t&&e){var i='link[rel="preload"][as="'+Ae(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ae(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ae(n.imageSizes)+'"]')):i+='[href="'+Ae(t)+'"]';var l=i;switch(e){case"style":l=za(t);break;case"script":l=Na(t)}Re.has(l)||(t=q({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Re.set(l,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Ai(l))||e==="script"&&a.querySelector(Ti(l))||(e=a.createElement("link"),Vt(e,"link",t),qt(e),a.head.appendChild(e)))}}function zg(t,e){nn.m(t,e);var n=Ra;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ae(a)+'"][href="'+Ae(t)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Na(t)}if(!Re.has(l)&&(t=q({rel:"modulepreload",href:t},e),Re.set(l,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ti(l)))return}a=n.createElement("link"),Vt(a,"link",t),qt(a),n.head.appendChild(a)}}}function Ng(t,e,n){nn.S(t,e,n);var a=Ra;if(a&&t){var i=Fn(a).hoistableStyles,l=za(t);e=e||"default";var s=i.get(l);if(!s){var o={loading:0,preload:null};if(s=a.querySelector(Ai(l)))o.loading=5;else{t=q({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Re.get(l))&&$o(t,n);var r=s=a.createElement("link");qt(r),Vt(r,"link",t),r._p=new Promise(function(g,b){r.onload=g,r.onerror=b}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hl(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:o},i.set(l,s)}}}function Og(t,e){nn.X(t,e);var n=Ra;if(n&&t){var a=Fn(n).hoistableScripts,i=Na(t),l=a.get(i);l||(l=n.querySelector(Ti(i)),l||(t=q({src:t,async:!0},e),(e=Re.get(i))&&tr(t,e),l=n.createElement("script"),qt(l),Vt(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function qg(t,e){nn.M(t,e);var n=Ra;if(n&&t){var a=Fn(n).hoistableScripts,i=Na(t),l=a.get(i);l||(l=n.querySelector(Ti(i)),l||(t=q({src:t,async:!0,type:"module"},e),(e=Re.get(i))&&tr(t,e),l=n.createElement("script"),qt(l),Vt(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Jd(t,e,n,a){var i=(i=L.current)?ql(i):null;if(!i)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=za(n.href),n=Fn(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=za(n.href);var l=Fn(i).hoistableStyles,s=l.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,s),(l=i.querySelector(Ai(t)))&&!l._p&&(s.instance=l,s.state.loading=5),Re.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Re.set(t,n),l||Hg(i,t,n,s.state))),e&&a===null)throw Error(f(528,""));return s}if(e&&a!==null)throw Error(f(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Na(n),n=Fn(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function za(t){return'href="'+Ae(t)+'"'}function Ai(t){return'link[rel="stylesheet"]['+t+"]"}function Pd(t){return q({},t,{"data-precedence":t.precedence,precedence:null})}function Hg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Vt(e,"link",n),qt(e),t.head.appendChild(e))}function Na(t){return'[src="'+Ae(t)+'"]'}function Ti(t){return"script[async]"+t}function Wd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ae(n.href)+'"]');if(a)return e.instance=a,qt(a),a;var i=q({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),qt(a),Vt(a,"style",i),Hl(a,n.precedence,t),e.instance=a;case"stylesheet":i=za(n.href);var l=t.querySelector(Ai(i));if(l)return e.state.loading|=4,e.instance=l,qt(l),l;a=Pd(n),(i=Re.get(i))&&$o(a,i),l=(t.ownerDocument||t).createElement("link"),qt(l);var s=l;return s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Vt(l,"link",a),e.state.loading|=4,Hl(l,n.precedence,t),e.instance=l;case"script":return l=Na(n.src),(i=t.querySelector(Ti(l)))?(e.instance=i,qt(i),i):(a=n,(i=Re.get(l))&&(a=q({},n),tr(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),qt(i),Vt(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Hl(a,n.precedence,t));return e.instance}function Hl(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var o=a[s];if(o.dataset.precedence===e)l=o;else if(l!==i)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function $o(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Bl=null;function Fd(t,e,n){if(Bl===null){var a=new Map,i=Bl=new Map;i.set(n,a)}else i=Bl,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var l=n[i];if(!(l[ja]||l[kt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=t+s;var o=a.get(s);o?o.push(l):a.set(s,[l])}}return a}function $d(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Bg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ug(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=za(a.href),l=e.querySelector(Ai(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ul.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=l,qt(l);return}l=e.ownerDocument||e,a=Pd(a),(i=Re.get(i))&&$o(a,i),l=l.createElement("link"),qt(l);var s=l;s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Vt(l,"link",a),n.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ul.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var er=0;function _g(t,e){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&er===0&&(er=62500*vg());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>er?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Ul(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _l=null;function jl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_l=new Map,e.forEach(jg,t),_l=null,Ul.call(t))}function jg(t,e){if(!(e.state.loading&4)){var n=_l.get(t);if(n)var a=n.get(null);else{n=new Map,_l.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),l=n.get(s)||a,l===a&&n.set(null,i),n.set(s,i),this.count++,a=Ul.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var wi={$$typeof:Ct,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function kg(t,e,n,a,i,l,s,o,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.hiddenUpdates=Jl(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ef(t,e,n,a,i,l,s,o,r,g,b,A){return t=new kg(t,e,n,s,r,g,b,A,o),e=1,l===!0&&(e|=24),l=de(3,null,null,e),t.current=l,l.stateNode=t,e=qs(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:e},_s(l),t}function nf(t){return t?(t=ra,t):ra}function af(t,e,n,a,i,l){i=nf(i),a.context===null?a.context=i:a.pendingContext=i,a=fn(e),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=hn(t,a,e),n!==null&&(ae(n,t,e),ei(n,t,e))}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nr(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function sf(t){if(t.tag===13||t.tag===31){var e=Bn(t,67108864);e!==null&&ae(e,t,67108864),nr(t,67108864)}}function of(t){if(t.tag===13||t.tag===31){var e=pe();e=Pl(e);var n=Bn(t,e);n!==null&&ae(n,t,e),nr(t,e)}}var kl=!0;function Gg(t,e,n,a){var i=y.T;y.T=null;var l=M.p;try{M.p=2,ar(t,e,n,a)}finally{M.p=l,y.T=i}}function Lg(t,e,n,a){var i=y.T;y.T=null;var l=M.p;try{M.p=8,ar(t,e,n,a)}finally{M.p=l,y.T=i}}function ar(t,e,n,a){if(kl){var i=ir(a);if(i===null)Vo(t,e,a,Gl,n),uf(t,a);else if(Vg(i,t,e,n,a))a.stopPropagation();else if(uf(t,a),e&4&&-1<Yg.indexOf(t)){for(;i!==null;){var l=Wn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=zn(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var r=1<<31-ue(s);o.entanglements[1]|=r,s&=~r}je(l),(et&6)===0&&(Tl=oe()+500,vi(0))}}break;case 31:case 13:o=Bn(l,2),o!==null&&ae(o,l,2),Cl(),nr(l,2)}if(l=ir(a),l===null&&Vo(t,e,a,Gl,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Vo(t,e,a,null,n)}}function ir(t){return t=ls(t),lr(t)}var Gl=null;function lr(t){if(Gl=null,t=Pn(t),t!==null){var e=J(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=P(e),t!==null)return t;t=null}else if(n===31){if(t=Tt(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gl=t,null}function rf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Df()){case mr:return 2;case pr:return 8;case Ri:case xf:return 32;case vr:return 268435456;default:return 32}default:return 32}}var sr=!1,Cn=null,Mn=null,En=null,Ci=new Map,Mi=new Map,Dn=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uf(t,e){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(e.pointerId)}}function Ei(t,e,n,a,i,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=Wn(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vg(t,e,n,a,i){switch(e){case"focusin":return Cn=Ei(Cn,t,e,n,a,i),!0;case"dragenter":return Mn=Ei(Mn,t,e,n,a,i),!0;case"mouseover":return En=Ei(En,t,e,n,a,i),!0;case"pointerover":var l=i.pointerId;return Ci.set(l,Ei(Ci.get(l)||null,t,e,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Mi.set(l,Ei(Mi.get(l)||null,t,e,n,a,i)),!0}return!1}function cf(t){var e=Pn(t.target);if(e!==null){var n=J(e);if(n!==null){if(e=n.tag,e===13){if(e=P(n),e!==null){t.blockedOn=e,wr(t.priority,function(){of(n)});return}}else if(e===31){if(e=Tt(n),e!==null){t.blockedOn=e,wr(t.priority,function(){of(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ir(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);is=a,n.target.dispatchEvent(a),is=null}else return e=Wn(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function df(t,e,n){Ll(t)&&n.delete(e)}function Qg(){sr=!1,Cn!==null&&Ll(Cn)&&(Cn=null),Mn!==null&&Ll(Mn)&&(Mn=null),En!==null&&Ll(En)&&(En=null),Ci.forEach(df),Mi.forEach(df)}function Yl(t,e){t.blockedOn===e&&(t.blockedOn=null,sr||(sr=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Qg)))}var Vl=null;function ff(t){Vl!==t&&(Vl=t,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(lr(a||n)===null)continue;break}var l=Wn(n);l!==null&&(t.splice(e,3),e-=3,ao(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Oa(t){function e(r){return Yl(r,t)}Cn!==null&&Yl(Cn,t),Mn!==null&&Yl(Mn,t),En!==null&&Yl(En,t),Ci.forEach(e),Mi.forEach(e);for(var n=0;n<Dn.length;n++){var a=Dn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)cf(n),n.blockedOn===null&&Dn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],s=i[Wt]||null;if(typeof l=="function")s||ff(n);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[Wt]||null)o=s.formAction;else if(lr(i)!==null)continue}else o=s.action;typeof o=="function"?n[a+1]=o:(n.splice(a,3),a-=3),ff(n)}}}function hf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function or(t){this._internalRoot=t}Ql.prototype.render=or.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var n=e.current,a=pe();af(n,a,t,e,null,null)},Ql.prototype.unmount=or.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;af(t.current,2,null,t,null,null),Cl(),e[Jn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tr();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&cf(t)}};var gf=ht.version;if(gf!=="19.2.0")throw Error(f(527,gf,"19.2.0"));M.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=w(e),t=t!==null?I(t):null,t=t===null?null:t.stateNode,t};var Ig={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Ba=Il.inject(Ig),re=Il}catch{}}return xi.createRoot=function(t,e){if(!j(t))throw Error(f(299));var n=!1,a="",i=Sc,l=Ac,s=Tc;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,a,null,i,l,s,hf),t[Jn]=e.current,Yo(t),new or(e)},xi.hydrateRoot=function(t,e,n){if(!j(t))throw Error(f(299));var a=!1,i="",l=Sc,s=Ac,o=Tc,r=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),e=ef(t,1,!0,e,n??null,a,i,r,l,s,o,hf),e.context=nf(null),n=e.current,a=pe(),a=Pl(a),i=fn(a),i.callback=null,hn(n,i,a),n=a,e.current.lanes=n,_a(e,n),je(e),t[Jn]=e.current,Yo(t),new Ql(e)},xi.version="19.2.0",xi}var Cf;function em(){if(Cf)return cr.exports;Cf=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(ht){console.error(ht)}}return x(),cr.exports=tm(),cr.exports}var nm=em();const am=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
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
        `}]}],im={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1}]},lm={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
- **Dynamic Topology**`}]},{category:"Diagram Hacks",tips:[{title:"Block Diagrams are King",content:"If you forget the specific architecture, draw a logical block diagram. Label boxes as 'Client', 'Server', 'Database', 'Network'. It earns partial marks."},{title:"Flowcharts for Algorithms",content:"Instead of writing paragraphs for algorithms (like DSR/AODV), draw a flowchart. It's faster to write and easier to check."}]}],um=[{id:1,unit:"I",front:"Mobile Computing",back:`
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
          `}]}]},ym=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],bm=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}];function Sm(){const[x,ht]=Bt.useState(null),f=x==="sensors"?{title:"Electronic Sensors",syllabus:cm,quizzes:dm,papers:[fm],tips:hm,flashcards:gm,progressKey:"electronicSensorsProgress"}:x==="pple"?{title:"Professional Practice, Law & Ethics",syllabus:mm,quizzes:pm,papers:[vm],tips:ym,flashcards:bm,progressKey:"ppleProgress"}:{title:"Mobile Computing",syllabus:am,quizzes:im,papers:[lm,sm,om],tips:rm,flashcards:um,progressKey:"mobileComputingProgress"},[j,J]=Bt.useState(null),[P,Tt]=Bt.useState(null),[z,w]=Bt.useState("study"),[I,q]=Bt.useState(0),[lt,Ot]=Bt.useState(0),[Qt,wt]=Bt.useState(!1),[Pt,It]=Bt.useState([]),[Ut,Ct]=Bt.useState({}),[Kt,ie]=Bt.useState(0),[Rt,Y]=Bt.useState({}),[_t,le]=Bt.useState({}),[qe,se]=Bt.useState(null),[zt,ve]=Bt.useState(0),[ye,Xt]=Bt.useState(!1),[y,M]=Bt.useState([]);Bt.useEffect(()=>{if(x){const C=localStorage.getItem(f.progressKey);Ct(C?JSON.parse(C):{}),w("study"),J(null),Tt(null),M([...f.flashcards]),ve(0),ie(0)}},[x,f.progressKey,f.flashcards]);const B=(C,F,at)=>{const be=Ut[C]?.score||0;if(F>be){const Ha={...Ut,[C]:{score:F,total:at}};Ct(Ha),localStorage.setItem(f.progressKey,JSON.stringify(Ha))}},nt=C=>{J(j===C?null:C)},st=C=>se(C),c=()=>se(null),T=C=>{f.quizzes[C]?(Tt(C),q(0),Ot(0),wt(!1)):alert("Quiz coming soon for this unit!")},E=()=>{let C=[];Object.values(f.quizzes).forEach(be=>{C=[...C,...be]});const at=C.sort(()=>.5-Math.random()).slice(0,10);It(at),Tt("FINAL"),q(0),Ot(0),wt(!1)},R=C=>{let F=!1;const at=P==="FINAL"?Pt:f.quizzes[P];C===at[I].answer&&(F=!0),F&&Ot(lt+1);const be=I+1;be<at.length?q(be):(wt(!0),B(P,F?lt+1:lt,at.length))},U=()=>{Tt(null),q(0),Ot(0),wt(!1),It([])},L=C=>{Y(F=>({...F,[C]:!F[C]}))},W=(C,F)=>{le(at=>({...at,[C]:F}))},jt=C=>{ie(C),Y({}),le({}),window.scrollTo(0,0)},vt=()=>{Xt(!1),setTimeout(()=>ve(C=>(C+1)%y.length),200)},Rn=()=>{Xt(!1),setTimeout(()=>ve(C=>(C-1+y.length)%y.length),200)},Kn=()=>Xt(!ye),qa=()=>{Xt(!1),setTimeout(()=>{const C=[...f.flashcards].sort(()=>.5-Math.random());M(C),ve(0)},200)};if(!x)return v.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[v.jsx("h1",{children:"Select Your Subject"}),v.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[v.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("mobile"),children:[v.jsx("h2",{children:"📱 Mobile Computing"}),v.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),v.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),v.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("sensors"),children:[v.jsx("h2",{children:"🌡️ Electronic Sensors"}),v.jsx("p",{children:"Unit I - V, Open Elective-II"}),v.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),v.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("pple"),children:[v.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),v.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),v.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const He=f.papers[Kt];return v.jsxs("div",{className:"container",children:[v.jsxs("header",{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[v.jsx("button",{className:"btn",onClick:()=>ht(null),children:"← Switch Subject"}),v.jsx("span",{className:"unit-badge",children:f.title})]}),v.jsxs("h1",{children:[f.title," Prep"]}),v.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),v.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[v.jsx("button",{className:`btn ${z==="study"?"btn-primary":""}`,onClick:()=>w("study"),children:"Study Mode"}),v.jsx("button",{className:`btn ${z==="paper"?"btn-primary":""}`,onClick:()=>w("paper"),children:"Model Papers"}),v.jsx("button",{className:`btn ${z==="tips"?"btn-primary":""}`,onClick:()=>w("tips"),children:"Exam Tips"}),v.jsx("button",{className:`btn ${z==="flashcards"?"btn-primary":""}`,onClick:()=>w("flashcards"),children:"Flashcards"})]}),z==="study"&&v.jsxs(v.Fragment,{children:[v.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:E,children:"Start Final Exam (Mixed)"}),Ut.FINAL&&v.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Ut.FINAL.score,"/",Ut.FINAL.total]})]})]}),z==="study"&&v.jsx("main",{className:"grid",children:f.syllabus.map(C=>v.jsxs("div",{className:"card",children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsxs("span",{className:"unit-badge",children:["Unit ",C.unit]}),Ut[C.unit]&&v.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Ut[C.unit].score,"/",Ut[C.unit].total]})]}),v.jsx("h2",{children:C.title}),j===C.unit&&C.notes?v.jsx("div",{className:"notes-content",children:v.jsx("div",{dangerouslySetInnerHTML:{__html:C.notes}})}):v.jsxs("div",{className:"topics-list-container",children:[v.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),v.jsx("div",{className:"topics-grid",children:C.topics.map((F,at)=>v.jsx("button",{className:"topic-btn",onClick:()=>st(F),children:F.title},at))})]}),v.jsxs("div",{className:"actions",children:[v.jsx("button",{className:`btn ${j===C.unit?"btn-primary":""}`,onClick:()=>C.notes?nt(C.unit):alert("Notes coming soon!"),children:j===C.unit?"Hide Overview":"Unit Overview"}),v.jsx("button",{className:"btn btn-primary",onClick:()=>T(C.unit),children:"Take Quiz"})]})]},C.unit))}),z==="paper"&&v.jsxs("main",{className:"paper-container",children:[v.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:f.papers.map((C,F)=>v.jsxs("button",{className:`btn ${Kt===F?"btn-primary":""}`,onClick:()=>jt(F),children:["Paper Set ",F+1]},F))}),v.jsxs("div",{className:"paper-header",children:[v.jsx("h2",{children:He.title}),v.jsx("h3",{children:He.subject}),v.jsxs("div",{className:"paper-meta",children:[v.jsxs("span",{children:["Time: ",He.time]}),v.jsxs("span",{children:["Max Marks: ",He.maxMarks]})]})]}),v.jsxs("div",{className:"paper-section",children:[v.jsx("h3",{children:"PART-A (Short Answer Questions)"}),v.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),v.jsx("div",{className:"questions-list",children:He.partA.map(C=>v.jsxs("div",{className:"question-item",children:[v.jsxs("div",{className:"question-text",children:[v.jsxs("strong",{children:[C.id,"."]})," ",C.question," ",v.jsx("span",{className:"marks",children:"[1M]"})]}),v.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:_t[`A-${C.id}`]||"",onChange:F=>W(`A-${C.id}`,F.target.value)}),v.jsx("button",{className:"btn-text",onClick:()=>L(`A-${C.id}`),children:Rt[`A-${C.id}`]?"Hide Model Answer":"Show Model Answer"}),Rt[`A-${C.id}`]&&v.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:C.answer}})]},C.id))})]}),He.partB&&v.jsxs("div",{className:"paper-section",children:[v.jsx("h3",{children:"PART-B (Long Answer Questions)"}),v.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),v.jsx("div",{className:"questions-list",children:He.partB.map(C=>v.jsxs("div",{className:"question-group",children:[v.jsxs("h4",{children:["Unit ",C.unit]}),C.choices.map((F,at)=>v.jsxs("div",{children:[v.jsxs("div",{className:"question-item",children:[v.jsxs("div",{className:"question-text",children:[v.jsxs("strong",{children:[C.questionNumber," (",String.fromCharCode(97+at),")."]})," ",F.question," ",v.jsx("span",{className:"marks",children:"[10M]"})]}),v.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:_t[`B-${C.questionNumber}${at}`]||"",onChange:be=>W(`B-${C.questionNumber}${at}`,be.target.value)}),v.jsx("button",{className:"btn-text",onClick:()=>L(`B-${C.questionNumber}${at}`),children:Rt[`B-${C.questionNumber}${at}`]?"Hide Model Answer":"Show Model Answer"}),Rt[`B-${C.questionNumber}${at}`]&&v.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:F.answer}})]}),at===0&&v.jsx("div",{className:"or-divider",children:"OR"})]},at))]},C.questionNumber))})]})]}),z==="tips"&&v.jsxs("main",{className:"tips-container",children:[v.jsxs("div",{className:"tips-header",children:[v.jsx("h2",{children:"Exam Tips & Hacks"}),v.jsx("p",{children:"Master the art of writing exams with these strategic insights."})]}),v.jsx("div",{className:"tips-grid",children:f.tips.map((C,F)=>v.jsxs("div",{className:"tip-section",children:[v.jsx("h3",{children:C.category}),v.jsx("div",{className:"tips-list",children:C.tips.map((at,be)=>v.jsxs("div",{className:"tip-card",children:[v.jsx("h4",{children:at.title}),v.jsx("div",{dangerouslySetInnerHTML:{__html:at.content.replace(/\n/g,"<br/>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}})]},be))})]},F))})]}),z==="flashcards"&&y.length>0&&v.jsxs("main",{className:"flashcard-container",children:[v.jsxs("div",{className:"flashcard-header",children:[v.jsx("h2",{children:"Interactive Flashcards"}),v.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),v.jsx("div",{className:"flashcard-scene",children:v.jsxs("div",{className:`flashcard ${ye?"flipped":""}`,onClick:Kn,children:[v.jsxs("div",{className:"flashcard-face flashcard-front",children:[v.jsxs("span",{className:"card-unit",children:["Unit ",y[zt].unit]}),v.jsx("h3",{children:y[zt].front}),v.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),v.jsx("div",{className:"flashcard-face flashcard-back",children:v.jsx("div",{dangerouslySetInnerHTML:{__html:y[zt].back}})})]})}),v.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[v.jsx("button",{className:"btn btn-primary",onClick:Rn,children:"← Previous"}),v.jsxs("span",{className:"card-count",children:[zt+1," / ",y.length]}),v.jsx("button",{className:"btn btn-primary",onClick:vt,children:"Next →"})]}),v.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:v.jsx("button",{className:"btn btn-primary",onClick:qa,children:"Shuffle Cards"})})]}),P&&v.jsx("div",{className:"modal-overlay",children:v.jsxs("div",{className:"modal-content",children:[v.jsx("button",{className:"close-btn",onClick:U,children:"×"}),Qt?v.jsxs("div",{className:"score-section",children:[v.jsx("h2",{children:"Quiz Completed!"}),v.jsxs("p",{children:["Your Score: ",lt," / ",P==="FINAL"?Pt.length:f.quizzes[P].length]}),v.jsx("button",{className:"btn btn-primary",onClick:U,children:"Close"})]}):v.jsxs("div",{className:"quiz-section",children:[v.jsxs("h3",{children:[P==="FINAL"?"Final Exam":`Unit ${P} Quiz`,"- Question ",I+1,"/",P==="FINAL"?Pt.length:f.quizzes[P].length]}),(()=>{const C=P==="FINAL"?Pt:f.quizzes[P];return v.jsxs(v.Fragment,{children:[v.jsx("p",{className:"question-text",children:C[I].question}),v.jsx("div",{className:"options-grid",children:C[I].options.map((F,at)=>v.jsx("button",{className:"option-btn",onClick:()=>R(at),children:F},at))})]})})()]})]})}),qe&&v.jsx("div",{className:"modal-overlay",children:v.jsxs("div",{className:"modal-content topic-modal",children:[v.jsx("button",{className:"close-btn",onClick:c,children:"×"}),v.jsxs("div",{className:"topic-content",children:[v.jsx("h2",{children:qe.title}),v.jsx("div",{dangerouslySetInnerHTML:{__html:qe.content}})]}),v.jsx("button",{className:"btn btn-primary",onClick:c,style:{marginTop:"2rem"},children:"Close"})]})})]})}nm.createRoot(document.getElementById("root")).render(v.jsx(Bt.StrictMode,{children:v.jsx(Sm,{})}));
