(function(){const ht=document.createElement("link").relList;if(ht&&ht.supports&&ht.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))f(j);new MutationObserver(j=>{for(const I of j)if(I.type==="childList")for(const W of I.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&f(W)}).observe(document,{childList:!0,subtree:!0});function nt(j){const I={};return j.integrity&&(I.integrity=j.integrity),j.referrerPolicy&&(I.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?I.credentials="include":j.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function f(j){if(j.ep)return;j.ep=!0;const I=nt(j);fetch(j.href,I)}})();var uo={exports:{}},zn={};var mf;function Kg(){if(mf)return zn;mf=1;var x=Symbol.for("react.transitional.element"),ht=Symbol.for("react.fragment");function nt(f,j,I){var W=null;if(I!==void 0&&(W=""+I),j.key!==void 0&&(W=""+j.key),"key"in j){I={};for(var Tt in j)Tt!=="key"&&(I[Tt]=j[Tt])}else I=j;return j=I.ref,{$$typeof:x,type:f,key:W,ref:j!==void 0?j:null,props:I}}return zn.Fragment=ht,zn.jsx=nt,zn.jsxs=nt,zn}var vf;function Jg(){return vf||(vf=1,uo.exports=Kg()),uo.exports}var y=Jg(),oo={exports:{}},B={};var pf;function Ig(){if(pf)return B;pf=1;var x=Symbol.for("react.transitional.element"),ht=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),W=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),it=Symbol.iterator;function Ot(r){return r===null||typeof r!="object"?null:(r=it&&r[it]||r["@@iterator"],typeof r=="function"?r:null)}var Xt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mt=Object.assign,Wt={};function kt(r,T,E){this.props=r,this.context=T,this.refs=Wt,this.updater=E||Xt}kt.prototype.isReactComponent={},kt.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},kt.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ut(){}Ut.prototype=kt.prototype;function Dt(r,T,E){this.props=r,this.context=T,this.refs=Wt,this.updater=E||Xt}var Jt=Dt.prototype=new Ut;Jt.constructor=Dt,Mt(Jt,kt.prototype),Jt.isPureReactComponent=!0;var ne=Array.isArray;function xt(){}var V={H:null,A:null,T:null,S:null},Bt=Object.prototype.hasOwnProperty;function ie(r,T,E){var w=E.ref;return{$$typeof:x,type:r,key:T,ref:w!==void 0?w:null,props:E}}function He(r,T){return ie(r.type,T,r.props)}function se(r){return typeof r=="object"&&r!==null&&r.$$typeof===x}function Nt(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(E){return T[E]})}var pe=/\/+/g;function ye(r,T){return typeof r=="object"&&r!==null&&r.key!=null?Nt(""+r.key):T.toString(36)}function Zt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(xt,xt):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function p(r,T,E,w,U){var Y=typeof r;(Y==="undefined"||Y==="boolean")&&(r=null);var F=!1;if(r===null)F=!0;else switch(Y){case"bigint":case"string":case"number":F=!0;break;case"object":switch(r.$$typeof){case x:case ht:F=!0;break;case k:return F=r._init,p(F(r._payload),T,E,w,U)}}if(F)return U=U(r),F=w===""?"."+ye(r,0):w,ne(U)?(E="",F!=null&&(E=F.replace(pe,"$&/")+"/"),p(U,T,E,"",function(wa){return wa})):U!=null&&(se(U)&&(U=He(U,E+(U.key==null||r&&r.key===U.key?"":(""+U.key).replace(pe,"$&/")+"/")+F)),T.push(U)),1;F=0;var jt=w===""?".":w+":";if(ne(r))for(var pt=0;pt<r.length;pt++)w=r[pt],Y=jt+ye(w,pt),F+=p(w,T,E,Y,U);else if(pt=Ot(r),typeof pt=="function")for(r=pt.call(r),pt=0;!(w=r.next()).done;)w=w.value,Y=jt+ye(w,pt++),F+=p(w,T,E,Y,U);else if(Y==="object"){if(typeof r.then=="function")return p(Zt(r),T,E,w,U);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return F}function C(r,T,E){if(r==null)return r;var w=[],U=0;return p(r,w,"","",function(Y){return T.call(E,Y,U++)}),w}function _(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(E){(r._status===0||r._status===-1)&&(r._status=1,r._result=E)},function(E){(r._status===0||r._status===-1)&&(r._status=2,r._result=E)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var at=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},st={map:C,forEach:function(r,T,E){C(r,function(){T.apply(this,arguments)},E)},count:function(r){var T=0;return C(r,function(){T++}),T},toArray:function(r){return C(r,function(T){return T})||[]},only:function(r){if(!se(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return B.Activity=H,B.Children=st,B.Component=kt,B.Fragment=nt,B.Profiler=j,B.PureComponent=Dt,B.StrictMode=f,B.Suspense=N,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,B.__COMPILER_RUNTIME={__proto__:null,c:function(r){return V.H.useMemoCache(r)}},B.cache=function(r){return function(){return r.apply(null,arguments)}},B.cacheSignal=function(){return null},B.cloneElement=function(r,T,E){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var w=Mt({},r.props),U=r.key;if(T!=null)for(Y in T.key!==void 0&&(U=""+T.key),T)!Bt.call(T,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&T.ref===void 0||(w[Y]=T[Y]);var Y=arguments.length-2;if(Y===1)w.children=E;else if(1<Y){for(var F=Array(Y),jt=0;jt<Y;jt++)F[jt]=arguments[jt+2];w.children=F}return ie(r.type,U,w)},B.createContext=function(r){return r={$$typeof:W,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:I,_context:r},r},B.createElement=function(r,T,E){var w,U={},Y=null;if(T!=null)for(w in T.key!==void 0&&(Y=""+T.key),T)Bt.call(T,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(U[w]=T[w]);var F=arguments.length-2;if(F===1)U.children=E;else if(1<F){for(var jt=Array(F),pt=0;pt<F;pt++)jt[pt]=arguments[pt+2];U.children=jt}if(r&&r.defaultProps)for(w in F=r.defaultProps,F)U[w]===void 0&&(U[w]=F[w]);return ie(r,Y,U)},B.createRef=function(){return{current:null}},B.forwardRef=function(r){return{$$typeof:Tt,render:r}},B.isValidElement=se,B.lazy=function(r){return{$$typeof:k,_payload:{_status:-1,_result:r},_init:_}},B.memo=function(r,T){return{$$typeof:M,type:r,compare:T===void 0?null:T}},B.startTransition=function(r){var T=V.T,E={};V.T=E;try{var w=r(),U=V.S;U!==null&&U(E,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(xt,at)}catch(Y){at(Y)}finally{T!==null&&E.types!==null&&(T.types=E.types),V.T=T}},B.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},B.use=function(r){return V.H.use(r)},B.useActionState=function(r,T,E){return V.H.useActionState(r,T,E)},B.useCallback=function(r,T){return V.H.useCallback(r,T)},B.useContext=function(r){return V.H.useContext(r)},B.useDebugValue=function(){},B.useDeferredValue=function(r,T){return V.H.useDeferredValue(r,T)},B.useEffect=function(r,T){return V.H.useEffect(r,T)},B.useEffectEvent=function(r){return V.H.useEffectEvent(r)},B.useId=function(){return V.H.useId()},B.useImperativeHandle=function(r,T,E){return V.H.useImperativeHandle(r,T,E)},B.useInsertionEffect=function(r,T){return V.H.useInsertionEffect(r,T)},B.useLayoutEffect=function(r,T){return V.H.useLayoutEffect(r,T)},B.useMemo=function(r,T){return V.H.useMemo(r,T)},B.useOptimistic=function(r,T){return V.H.useOptimistic(r,T)},B.useReducer=function(r,T,E){return V.H.useReducer(r,T,E)},B.useRef=function(r){return V.H.useRef(r)},B.useState=function(r){return V.H.useState(r)},B.useSyncExternalStore=function(r,T,E){return V.H.useSyncExternalStore(r,T,E)},B.useTransition=function(){return V.H.useTransition()},B.version="19.2.0",B}var yf;function go(){return yf||(yf=1,oo.exports=Ig()),oo.exports}var _t=go(),co={exports:{}},wn={},ro={exports:{}},fo={};var bf;function Wg(){return bf||(bf=1,(function(x){function ht(p,C){var _=p.length;p.push(C);t:for(;0<_;){var at=_-1>>>1,st=p[at];if(0<j(st,C))p[at]=C,p[_]=st,_=at;else break t}}function nt(p){return p.length===0?null:p[0]}function f(p){if(p.length===0)return null;var C=p[0],_=p.pop();if(_!==C){p[0]=_;t:for(var at=0,st=p.length,r=st>>>1;at<r;){var T=2*(at+1)-1,E=p[T],w=T+1,U=p[w];if(0>j(E,_))w<st&&0>j(U,E)?(p[at]=U,p[w]=_,at=w):(p[at]=E,p[T]=_,at=T);else if(w<st&&0>j(U,_))p[at]=U,p[w]=_,at=w;else break t}}return C}function j(p,C){var _=p.sortIndex-C.sortIndex;return _!==0?_:p.id-C.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var I=performance;x.unstable_now=function(){return I.now()}}else{var W=Date,Tt=W.now();x.unstable_now=function(){return W.now()-Tt}}var N=[],M=[],k=1,H=null,it=3,Ot=!1,Xt=!1,Mt=!1,Wt=!1,kt=typeof setTimeout=="function"?setTimeout:null,Ut=typeof clearTimeout=="function"?clearTimeout:null,Dt=typeof setImmediate<"u"?setImmediate:null;function Jt(p){for(var C=nt(M);C!==null;){if(C.callback===null)f(M);else if(C.startTime<=p)f(M),C.sortIndex=C.expirationTime,ht(N,C);else break;C=nt(M)}}function ne(p){if(Mt=!1,Jt(p),!Xt)if(nt(N)!==null)Xt=!0,xt||(xt=!0,Nt());else{var C=nt(M);C!==null&&Zt(ne,C.startTime-p)}}var xt=!1,V=-1,Bt=5,ie=-1;function He(){return Wt?!0:!(x.unstable_now()-ie<Bt)}function se(){if(Wt=!1,xt){var p=x.unstable_now();ie=p;var C=!0;try{t:{Xt=!1,Mt&&(Mt=!1,Ut(V),V=-1),Ot=!0;var _=it;try{e:{for(Jt(p),H=nt(N);H!==null&&!(H.expirationTime>p&&He());){var at=H.callback;if(typeof at=="function"){H.callback=null,it=H.priorityLevel;var st=at(H.expirationTime<=p);if(p=x.unstable_now(),typeof st=="function"){H.callback=st,Jt(p),C=!0;break e}H===nt(N)&&f(N),Jt(p)}else f(N);H=nt(N)}if(H!==null)C=!0;else{var r=nt(M);r!==null&&Zt(ne,r.startTime-p),C=!1}}break t}finally{H=null,it=_,Ot=!1}C=void 0}}finally{C?Nt():xt=!1}}}var Nt;if(typeof Dt=="function")Nt=function(){Dt(se)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ye=pe.port2;pe.port1.onmessage=se,Nt=function(){ye.postMessage(null)}}else Nt=function(){kt(se,0)};function Zt(p,C){V=kt(function(){p(x.unstable_now())},C)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(p){p.callback=null},x.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bt=0<p?Math.floor(1e3/p):5},x.unstable_getCurrentPriorityLevel=function(){return it},x.unstable_next=function(p){switch(it){case 1:case 2:case 3:var C=3;break;default:C=it}var _=it;it=C;try{return p()}finally{it=_}},x.unstable_requestPaint=function(){Wt=!0},x.unstable_runWithPriority=function(p,C){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var _=it;it=p;try{return C()}finally{it=_}},x.unstable_scheduleCallback=function(p,C,_){var at=x.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?at+_:at):_=at,p){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=_+st,p={id:k++,callback:C,priorityLevel:p,startTime:_,expirationTime:st,sortIndex:-1},_>at?(p.sortIndex=_,ht(M,p),nt(N)===null&&p===nt(M)&&(Mt?(Ut(V),V=-1):Mt=!0,Zt(ne,_-at))):(p.sortIndex=st,ht(N,p),Xt||Ot||(Xt=!0,xt||(xt=!0,Nt()))),p},x.unstable_shouldYield=He,x.unstable_wrapCallback=function(p){var C=it;return function(){var _=it;it=C;try{return p.apply(this,arguments)}finally{it=_}}}})(fo)),fo}var Sf;function Fg(){return Sf||(Sf=1,ro.exports=Wg()),ro.exports}var ho={exports:{}},Kt={};var Af;function Pg(){if(Af)return Kt;Af=1;var x=go();function ht(N){var M="https://react.dev/errors/"+N;if(1<arguments.length){M+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)M+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+N+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function nt(){}var f={d:{f:nt,r:function(){throw Error(ht(522))},D:nt,C:nt,L:nt,m:nt,X:nt,S:nt,M:nt},p:0,findDOMNode:null},j=Symbol.for("react.portal");function I(N,M,k){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:H==null?null:""+H,children:N,containerInfo:M,implementation:k}}var W=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tt(N,M){if(N==="font")return"";if(typeof M=="string")return M==="use-credentials"?M:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Kt.createPortal=function(N,M){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error(ht(299));return I(N,M,null,k)},Kt.flushSync=function(N){var M=W.T,k=f.p;try{if(W.T=null,f.p=2,N)return N()}finally{W.T=M,f.p=k,f.d.f()}},Kt.preconnect=function(N,M){typeof N=="string"&&(M?(M=M.crossOrigin,M=typeof M=="string"?M==="use-credentials"?M:"":void 0):M=null,f.d.C(N,M))},Kt.prefetchDNS=function(N){typeof N=="string"&&f.d.D(N)},Kt.preinit=function(N,M){if(typeof N=="string"&&M&&typeof M.as=="string"){var k=M.as,H=Tt(k,M.crossOrigin),it=typeof M.integrity=="string"?M.integrity:void 0,Ot=typeof M.fetchPriority=="string"?M.fetchPriority:void 0;k==="style"?f.d.S(N,typeof M.precedence=="string"?M.precedence:void 0,{crossOrigin:H,integrity:it,fetchPriority:Ot}):k==="script"&&f.d.X(N,{crossOrigin:H,integrity:it,fetchPriority:Ot,nonce:typeof M.nonce=="string"?M.nonce:void 0})}},Kt.preinitModule=function(N,M){if(typeof N=="string")if(typeof M=="object"&&M!==null){if(M.as==null||M.as==="script"){var k=Tt(M.as,M.crossOrigin);f.d.M(N,{crossOrigin:k,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0})}}else M==null&&f.d.M(N)},Kt.preload=function(N,M){if(typeof N=="string"&&typeof M=="object"&&M!==null&&typeof M.as=="string"){var k=M.as,H=Tt(k,M.crossOrigin);f.d.L(N,k,{crossOrigin:H,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0,type:typeof M.type=="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority=="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy=="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet=="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes=="string"?M.imageSizes:void 0,media:typeof M.media=="string"?M.media:void 0})}},Kt.preloadModule=function(N,M){if(typeof N=="string")if(M){var k=Tt(M.as,M.crossOrigin);f.d.m(N,{as:typeof M.as=="string"&&M.as!=="script"?M.as:void 0,crossOrigin:k,integrity:typeof M.integrity=="string"?M.integrity:void 0})}else f.d.m(N)},Kt.requestFormReset=function(N){f.d.r(N)},Kt.unstable_batchedUpdates=function(N,M){return N(M)},Kt.useFormState=function(N,M,k){return W.H.useFormState(N,M,k)},Kt.useFormStatus=function(){return W.H.useHostTransitionStatus()},Kt.version="19.2.0",Kt}var Tf;function $g(){if(Tf)return ho.exports;Tf=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(ht){console.error(ht)}}return x(),ho.exports=Pg(),ho.exports}var Mf;function tm(){if(Mf)return wn;Mf=1;var x=Fg(),ht=go(),nt=$g();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function I(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function W(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N(t){if(I(t)!==t)throw Error(f(188))}function M(t){var e=t.alternate;if(!e){if(e=I(t),e===null)throw Error(f(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return N(n),t;if(i===l)return N(n),e;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,u=n.child;u;){if(u===a){s=!0,a=n,l=i;break}if(u===l){s=!0,l=n,a=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===a){s=!0,a=i,l=n;break}if(u===l){s=!0,l=i,a=n;break}u=u.sibling}if(!s)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?t:e}function k(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=k(t),e!==null)return e;t=t.sibling}return null}var H=Object.assign,it=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),Xt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Wt=Symbol.for("react.strict_mode"),kt=Symbol.for("react.profiler"),Ut=Symbol.for("react.consumer"),Dt=Symbol.for("react.context"),Jt=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),xt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),He=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function Nt(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mt:return"Fragment";case kt:return"Profiler";case Wt:return"StrictMode";case ne:return"Suspense";case xt:return"SuspenseList";case ie:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Xt:return"Portal";case Dt:return t.displayName||"Context";case Ut:return(t._context.displayName||"Context")+".Consumer";case Jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return e=t.displayName||null,e!==null?e:ye(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return ye(t(e))}catch{}}return null}var Zt=Array.isArray,p=ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},at=[],st=-1;function r(t){return{current:t}}function T(t){0>st||(t.current=at[st],at[st]=null,st--)}function E(t,e){st++,at[st]=t.current,t.current=e}var w=r(null),U=r(null),Y=r(null),F=r(null);function jt(t,e){switch(E(Y,e),E(U,t),E(w,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Bd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Bd(e),t=jd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(w),E(w,t)}function pt(){T(w),T(U),T(Y)}function wa(t){t.memoizedState!==null&&E(F,t);var e=w.current,a=jd(e,t.type);e!==a&&(E(U,t),E(w,a))}function Ka(t){U.current===t&&(T(w),T(U)),F.current===t&&(T(F),Mn._currentValue=_)}var Ol,qe;function D(t){if(Ol===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||"",qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ol+t+qe}var P=!1;function lt(t,e){if(!t||P)return"";P=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var m=v}Reflect.construct(t,[],A)}else{try{A.call()}catch(v){m=v}t.call(A.prototype)}}else{try{throw Error()}catch(v){m=v}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var o=s.split(`
`),g=u.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===g.length)for(l=o.length-1,n=g.length-1;1<=l&&0<=n&&o[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==g[n]){var b=`
`+o[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=n);break}}}finally{P=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?D(a):""}function be(t,e){switch(t.tag){case 26:case 27:case 5:return D(t.type);case 16:return D("Lazy");case 13:return t.child!==e&&e!==null?D("Suspense Fallback"):D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return D("Activity");default:return""}}function Hl(t){try{var e="",a=null;do e+=be(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=x.unstable_scheduleCallback,Ji=x.unstable_cancelCallback,Cf=x.unstable_shouldYield,Ef=x.unstable_requestPaint,ue=x.unstable_now,zf=x.unstable_getCurrentPriorityLevel,mo=x.unstable_ImmediatePriority,vo=x.unstable_UserBlockingPriority,xn=x.unstable_NormalPriority,wf=x.unstable_LowPriority,po=x.unstable_IdlePriority,xf=x.log,Nf=x.unstable_setDisableYieldValue,ql=null,oe=null;function la(t){if(typeof xf=="function"&&Nf(t),oe&&typeof oe.setStrictMode=="function")try{oe.setStrictMode(ql,t)}catch{}}var ce=Math.clz32?Math.clz32:Hf,Rf=Math.log,Of=Math.LN2;function Hf(t){return t>>>=0,t===0?32:31-(Rf(t)/Of|0)|0}var Nn=256,Rn=262144,On=4194304;function xa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Hn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=xa(l):(s&=u,s!==0?n=xa(s):a||(a=u&~t,a!==0&&(n=xa(a))))):(u=l&~i,u!==0?n=xa(u):s!==0?n=xa(s):a||(a=l&~t,a!==0&&(n=xa(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function _l(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qf(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var t=On;return On<<=1,(On&62914560)===0&&(On=4194304),t}function Ii(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ul(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _f(t,e,a,l,n,i){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var u=t.entanglements,o=t.expirationTimes,g=t.hiddenUpdates;for(a=s&~a;0<a;){var b=31-ce(a),A=1<<b;u[b]=0,o[b]=-1;var m=g[b];if(m!==null)for(g[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}a&=~A}l!==0&&bo(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function bo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-ce(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function So(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-ce(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Ao(t,e){var a=e&-e;return a=(a&42)!==0?1:Wi(a),(a&(t.suspendedLanes|e))!==0?0:a}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function To(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:of(t.type))}function Mo(t,e){var a=C.p;try{return C.p=t,e()}finally{C.p=a}}var na=Math.random().toString(36).slice(2),Gt="__reactFiber$"+na,Ft="__reactProps$"+na,Ja="__reactContainer$"+na,Pi="__reactEvents$"+na,Uf="__reactListeners$"+na,Bf="__reactHandles$"+na,Do="__reactResources$"+na,Bl="__reactMarker$"+na;function $i(t){delete t[Gt],delete t[Ft],delete t[Pi],delete t[Uf],delete t[Bf]}function Ia(t){var e=t[Gt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ja]||a[Gt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=kd(t);t!==null;){if(a=t[Gt])return a;t=kd(t)}return e}t=a,a=t.parentNode}return null}function Wa(t){if(t=t[Gt]||t[Ja]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function jl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Fa(t){var e=t[Do];return e||(e=t[Do]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ht(t){t[Bl]=!0}var Co=new Set,Eo={};function Na(t,e){Pa(t,e),Pa(t+"Capture",e)}function Pa(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Co.add(e[t])}var jf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zo={},wo={};function Gf(t){return Zi.call(wo,t)?!0:Zi.call(zo,t)?!1:jf.test(t)?wo[t]=!0:(zo[t]=!0,!1)}function qn(t,e,a){if(Gf(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function _n(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ge(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lf(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){if(!t._valueTracker){var e=xo(t)?"checked":"value";t._valueTracker=Lf(t,e,""+t[e])}}function No(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=xo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yf=/[\n"\\]/g;function Ae(t){return t.replace(Yf,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function es(t,e,a,l,n,i,s,u){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?as(t,s,Se(e)):a!=null?as(t,s,Se(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+Se(u):t.removeAttribute("name")}function Ro(t,e,a,l,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){ts(t);return}a=a!=null?""+Se(a):"",e=e!=null?""+Se(e):a,u||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=u?t.checked:!!l,t.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ts(t)}function as(t,e,a){e==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $a(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Oo(t,e,a){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Se(a):""}function Ho(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(f(92));if(Zt(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Se(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),ts(t)}function tl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Vf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qo(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Vf.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function _o(t,e,a){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&qo(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&qo(t,i,e[i])}function ls(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(t){return Xf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Le(){}var ns=null;function is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var el=null,al=null;function Uo(t){var e=Wa(t);if(e&&(t=e.stateNode)){var a=t[Ft]||null;t:switch(t=e.stateNode,e.type){case"input":if(es(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ae(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Ft]||null;if(!n)throw Error(f(90));es(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&No(l)}break t;case"textarea":Oo(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&$a(t,!!a.multiple,e,!1)}}}var ss=!1;function Bo(t,e,a){if(ss)return t(e,a);ss=!0;try{var l=t(e);return l}finally{if(ss=!1,(el!==null||al!==null)&&(Di(),el&&(e=el,t=al,al=el=null,Uo(e),t)))for(e=0;e<t.length;e++)Uo(t[e])}}function Gl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Ft]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(f(231,e,typeof a));return a}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),us=!1;if(Ye)try{var Ll={};Object.defineProperty(Ll,"passive",{get:function(){us=!0}}),window.addEventListener("test",Ll,Ll),window.removeEventListener("test",Ll,Ll)}catch{us=!1}var ia=null,os=null,jn=null;function jo(){if(jn)return jn;var t,e=os,a=e.length,l,n="value"in ia?ia.value:ia.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(l=1;l<=s&&e[a-l]===n[i-l];l++);return jn=n.slice(t,1<l?1-l:void 0)}function Gn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ln(){return!0}function Go(){return!1}function Pt(t){function e(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(a=t[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ln:Go,this.isPropagationStopped=Go,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Pt(Ra),Yl=H({},Ra,{view:0,detail:0}),kf=Pt(Yl),cs,rs,Vl,Vn=H({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vl&&(Vl&&t.type==="mousemove"?(cs=t.screenX-Vl.screenX,rs=t.screenY-Vl.screenY):rs=cs=0,Vl=t),cs)},movementY:function(t){return"movementY"in t?t.movementY:rs}}),Lo=Pt(Vn),Zf=H({},Vn,{dataTransfer:0}),Kf=Pt(Zf),Jf=H({},Yl,{relatedTarget:0}),ds=Pt(Jf),If=H({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Wf=Pt(If),Ff=H({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pf=Pt(Ff),$f=H({},Ra,{data:0}),Yo=Pt($f),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ah[t])?!!e[t]:!1}function fs(){return lh}var nh=H({},Yl,{key:function(t){if(t.key){var e=th[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(t){return t.type==="keypress"?Gn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ih=Pt(nh),sh=H({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=Pt(sh),uh=H({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),oh=Pt(uh),ch=H({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Pt(ch),dh=H({},Vn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=Pt(dh),hh=H({},Ra,{newState:0,oldState:0}),gh=Pt(hh),mh=[9,13,27,32],hs=Ye&&"CompositionEvent"in window,Ql=null;Ye&&"documentMode"in document&&(Ql=document.documentMode);var vh=Ye&&"TextEvent"in window&&!Ql,Qo=Ye&&(!hs||Ql&&8<Ql&&11>=Ql),Xo=" ",ko=!1;function Zo(t,e){switch(t){case"keyup":return mh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ko(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ll=!1;function ph(t,e){switch(t){case"compositionend":return Ko(e);case"keypress":return e.which!==32?null:(ko=!0,Xo);case"textInput":return t=e.data,t===Xo&&ko?null:t;default:return null}}function yh(t,e){if(ll)return t==="compositionend"||!hs&&Zo(t,e)?(t=jo(),jn=os=ia=null,ll=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qo&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bh[t.type]:e==="textarea"}function Io(t,e,a,l){el?al?al.push(l):al=[l]:el=l,e=Ri(e,"onChange"),0<e.length&&(a=new Yn("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Xl=null,kl=null;function Sh(t){Rd(t,0)}function Qn(t){var e=jl(t);if(No(e))return t}function Wo(t,e){if(t==="change")return e}var Fo=!1;if(Ye){var gs;if(Ye){var ms="oninput"in document;if(!ms){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),ms=typeof Po.oninput=="function"}gs=ms}else gs=!1;Fo=gs&&(!document.documentMode||9<document.documentMode)}function $o(){Xl&&(Xl.detachEvent("onpropertychange",tc),kl=Xl=null)}function tc(t){if(t.propertyName==="value"&&Qn(kl)){var e=[];Io(e,kl,t,is(t)),Bo(Sh,e)}}function Ah(t,e,a){t==="focusin"?($o(),Xl=e,kl=a,Xl.attachEvent("onpropertychange",tc)):t==="focusout"&&$o()}function Th(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn(kl)}function Mh(t,e){if(t==="click")return Qn(e)}function Dh(t,e){if(t==="input"||t==="change")return Qn(e)}function Ch(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:Ch;function Zl(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Zi.call(e,n)||!re(t[n],e[n]))return!1}return!0}function ec(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ac(t,e){var a=ec(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ec(a)}}function lc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Un(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Un(t.document)}return e}function vs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Eh=Ye&&"documentMode"in document&&11>=document.documentMode,nl=null,ps=null,Kl=null,ys=!1;function ic(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ys||nl==null||nl!==Un(l)||(l=nl,"selectionStart"in l&&vs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kl&&Zl(Kl,l)||(Kl=l,l=Ri(ps,"onSelect"),0<l.length&&(e=new Yn("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=nl)))}function Oa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var il={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},bs={},sc={};Ye&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Ha(t){if(bs[t])return bs[t];if(!il[t])return t;var e=il[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in sc)return bs[t]=e[a];return t}var uc=Ha("animationend"),oc=Ha("animationiteration"),cc=Ha("animationstart"),zh=Ha("transitionrun"),wh=Ha("transitionstart"),xh=Ha("transitioncancel"),rc=Ha("transitionend"),dc=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function Ne(t,e){dc.set(t,e),Na(e,[t])}var Xn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Te=[],sl=0,As=0;function kn(){for(var t=sl,e=As=sl=0;e<t;){var a=Te[e];Te[e++]=null;var l=Te[e];Te[e++]=null;var n=Te[e];Te[e++]=null;var i=Te[e];if(Te[e++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&fc(a,n,i)}}function Zn(t,e,a,l){Te[sl++]=t,Te[sl++]=e,Te[sl++]=a,Te[sl++]=l,As|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ts(t,e,a,l){return Zn(t,e,a,l),Kn(t)}function qa(t,e){return Zn(t,null,null,e),Kn(t)}function fc(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ce(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Kn(t){if(50<vn)throw vn=0,Ru=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ul={};function Nh(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,a,l){return new Nh(t,e,a,l)}function Ms(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ve(t,e){var a=t.alternate;return a===null?(a=de(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hc(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Jn(t,e,a,l,n,i){var s=0;if(l=t,typeof t=="function")Ms(t)&&(s=1);else if(typeof t=="string")s=_g(t,a,w.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ie:return t=de(31,a,e,n),t.elementType=ie,t.lanes=i,t;case Mt:return _a(a.children,n,i,e);case Wt:s=8,n|=24;break;case kt:return t=de(12,a,e,n|2),t.elementType=kt,t.lanes=i,t;case ne:return t=de(13,a,e,n),t.elementType=ne,t.lanes=i,t;case xt:return t=de(19,a,e,n),t.elementType=xt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dt:s=10;break t;case Ut:s=9;break t;case Jt:s=11;break t;case V:s=14;break t;case Bt:s=16,l=null;break t}s=29,a=Error(f(130,t===null?"null":typeof t,"")),l=null}return e=de(s,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function _a(t,e,a,l){return t=de(7,t,l,e),t.lanes=a,t}function Ds(t,e,a){return t=de(6,t,null,e),t.lanes=a,t}function gc(t){var e=de(18,null,null,0);return e.stateNode=t,e}function Cs(t,e,a){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var mc=new WeakMap;function Me(t,e){if(typeof t=="object"&&t!==null){var a=mc.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Hl(e)},mc.set(t,e),e)}return{value:t,source:e,stack:Hl(e)}}var ol=[],cl=0,In=null,Jl=0,De=[],Ce=0,sa=null,_e=1,Ue="";function Qe(t,e){ol[cl++]=Jl,ol[cl++]=In,In=t,Jl=e}function vc(t,e,a){De[Ce++]=_e,De[Ce++]=Ue,De[Ce++]=sa,sa=t;var l=_e;t=Ue;var n=32-ce(l)-1;l&=~(1<<n),a+=1;var i=32-ce(e)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,_e=1<<32-ce(e)+n|a<<n|l,Ue=i+t}else _e=1<<i|a<<n|l,Ue=t}function Es(t){t.return!==null&&(Qe(t,1),vc(t,1,0))}function zs(t){for(;t===In;)In=ol[--cl],ol[cl]=null,Jl=ol[--cl],ol[cl]=null;for(;t===sa;)sa=De[--Ce],De[Ce]=null,Ue=De[--Ce],De[Ce]=null,_e=De[--Ce],De[Ce]=null}function pc(t,e){De[Ce++]=_e,De[Ce++]=Ue,De[Ce++]=sa,_e=e.id,Ue=e.overflow,sa=t}var Lt=null,gt=null,J=!1,ua=null,Ee=!1,ws=Error(f(519));function oa(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(Me(e,t)),ws}function yc(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Gt]=t,e[Ft]=l,a){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(a=0;a<yn.length;a++)X(yn[a],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),Ro(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),Ho(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||_d(e.textContent,a)?(l.popover!=null&&(X("beforetoggle",e),X("toggle",e)),l.onScroll!=null&&X("scroll",e),l.onScrollEnd!=null&&X("scrollend",e),l.onClick!=null&&(e.onclick=Le),e=!0):e=!1,e||oa(t,!0)}function bc(t){for(Lt=t.return;Lt;)switch(Lt.tag){case 5:case 31:case 13:Ee=!1;return;case 27:case 3:Ee=!0;return;default:Lt=Lt.return}}function rl(t){if(t!==Lt)return!1;if(!J)return bc(t),J=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zu(t.type,t.memoizedProps)),a=!a),a&&gt&&oa(t),bc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Xd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Xd(t)}else e===27?(e=gt,Ta(t.type)?(t=Fu,Fu=null,gt=t):gt=e):gt=Lt?we(t.stateNode.nextSibling):null;return!0}function Ua(){gt=Lt=null,J=!1}function xs(){var t=ua;return t!==null&&(ae===null?ae=t:ae.push.apply(ae,t),ua=null),t}function Il(t){ua===null?ua=[t]:ua.push(t)}var Ns=r(null),Ba=null,Xe=null;function ca(t,e,a){E(Ns,e._currentValue),e._currentValue=a}function ke(t){t._currentValue=Ns.current,T(Ns)}function Rs(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Os(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;t:for(;i!==null;){var u=i;i=n;for(var o=0;o<e.length;o++)if(u.context===e[o]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Rs(i.return,a,t),l||(s=null);break t}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(f(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Rs(s,a,t),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function dl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var u=n.type;re(n.pendingProps.value,s.value)||(t!==null?t.push(u):t=[u])}}else if(n===F.current){if(s=n.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Mn):t=[Mn])}n=n.return}t!==null&&Os(e,t,a,l),e.flags|=262144}function Wn(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Ba=t,Xe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Yt(t){return Sc(Ba,t)}function Fn(t,e){return Ba===null&&ja(t),Sc(t,e)}function Sc(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Xe===null){if(t===null)throw Error(f(308));Xe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xe=Xe.next=e;return a}var Rh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Oh=x.unstable_scheduleCallback,Hh=x.unstable_NormalPriority,Ct={$$typeof:Dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hs(){return{controller:new Rh,data:new Map,refCount:0}}function Wl(t){t.refCount--,t.refCount===0&&Oh(Hh,function(){t.controller.abort()})}var Fl=null,qs=0,fl=0,hl=null;function qh(t,e){if(Fl===null){var a=Fl=[];qs=0,fl=Bu(),hl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qs++,e.then(Ac,Ac),e}function Ac(){if(--qs===0&&Fl!==null){hl!==null&&(hl.status="fulfilled");var t=Fl;Fl=null,fl=0,hl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function _h(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Tc=p.S;p.S=function(t,e){id=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&qh(t,e),Tc!==null&&Tc(t,e)};var Ga=r(null);function _s(){var t=Ga.current;return t!==null?t:ft.pooledCache}function Pn(t,e){e===null?E(Ga,Ga.current):E(Ga,e.pool)}function Mc(){var t=_s();return t===null?null:{parent:Ct._currentValue,pool:t}}var gl=Error(f(460)),Us=Error(f(474)),$n=Error(f(542)),ti={then:function(){}};function Dc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cc(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Le,Le),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zc(t),t;default:if(typeof e.status=="string")e.then(Le,Le);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zc(t),t}throw Ya=e,gl}}function La(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ya=a,gl):a}}var Ya=null;function Ec(){if(Ya===null)throw Error(f(459));var t=Ya;return Ya=null,t}function zc(t){if(t===gl||t===$n)throw Error(f(483))}var ml=null,Pl=0;function ei(t){var e=Pl;return Pl+=1,ml===null&&(ml=[]),Cc(ml,t,e)}function $l(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ai(t,e){throw e.$$typeof===it?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function wc(t){function e(d,c){if(t){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function a(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function l(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function n(d,c){return d=Ve(d,c),d.index=0,d.sibling=null,d}function i(d,c,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=67108866,c):h):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function u(d,c,h,S){return c===null||c.tag!==6?(c=Ds(h,d.mode,S),c.return=d,c):(c=n(c,h),c.return=d,c)}function o(d,c,h,S){var O=h.type;return O===Mt?b(d,c,h.props.children,S,h.key):c!==null&&(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Bt&&La(O)===c.type)?(c=n(c,h.props),$l(c,h),c.return=d,c):(c=Jn(h.type,h.key,h.props,null,d.mode,S),$l(c,h),c.return=d,c)}function g(d,c,h,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Cs(h,d.mode,S),c.return=d,c):(c=n(c,h.children||[]),c.return=d,c)}function b(d,c,h,S,O){return c===null||c.tag!==7?(c=_a(h,d.mode,S,O),c.return=d,c):(c=n(c,h),c.return=d,c)}function A(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ds(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ot:return h=Jn(c.type,c.key,c.props,null,d.mode,h),$l(h,c),h.return=d,h;case Xt:return c=Cs(c,d.mode,h),c.return=d,c;case Bt:return c=La(c),A(d,c,h)}if(Zt(c)||Nt(c))return c=_a(c,d.mode,h,null),c.return=d,c;if(typeof c.then=="function")return A(d,ei(c),h);if(c.$$typeof===Dt)return A(d,Fn(d,c),h);ai(d,c)}return null}function m(d,c,h,S){var O=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return O!==null?null:u(d,c,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:return h.key===O?o(d,c,h,S):null;case Xt:return h.key===O?g(d,c,h,S):null;case Bt:return h=La(h),m(d,c,h,S)}if(Zt(h)||Nt(h))return O!==null?null:b(d,c,h,S,null);if(typeof h.then=="function")return m(d,c,ei(h),S);if(h.$$typeof===Dt)return m(d,c,Fn(d,h),S);ai(d,h)}return null}function v(d,c,h,S,O){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(h)||null,u(c,d,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ot:return d=d.get(S.key===null?h:S.key)||null,o(c,d,S,O);case Xt:return d=d.get(S.key===null?h:S.key)||null,g(c,d,S,O);case Bt:return S=La(S),v(d,c,h,S,O)}if(Zt(S)||Nt(S))return d=d.get(h)||null,b(c,d,S,O,null);if(typeof S.then=="function")return v(d,c,h,ei(S),O);if(S.$$typeof===Dt)return v(d,c,h,Fn(c,S),O);ai(c,S)}return null}function z(d,c,h,S){for(var O=null,$=null,R=c,L=c=0,K=null;R!==null&&L<h.length;L++){R.index>L?(K=R,R=null):K=R.sibling;var tt=m(d,R,h[L],S);if(tt===null){R===null&&(R=K);break}t&&R&&tt.alternate===null&&e(d,R),c=i(tt,c,L),$===null?O=tt:$.sibling=tt,$=tt,R=K}if(L===h.length)return a(d,R),J&&Qe(d,L),O;if(R===null){for(;L<h.length;L++)R=A(d,h[L],S),R!==null&&(c=i(R,c,L),$===null?O=R:$.sibling=R,$=R);return J&&Qe(d,L),O}for(R=l(R);L<h.length;L++)K=v(R,d,L,h[L],S),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?L:K.key),c=i(K,c,L),$===null?O=K:$.sibling=K,$=K);return t&&R.forEach(function(za){return e(d,za)}),J&&Qe(d,L),O}function q(d,c,h,S){if(h==null)throw Error(f(151));for(var O=null,$=null,R=c,L=c=0,K=null,tt=h.next();R!==null&&!tt.done;L++,tt=h.next()){R.index>L?(K=R,R=null):K=R.sibling;var za=m(d,R,tt.value,S);if(za===null){R===null&&(R=K);break}t&&R&&za.alternate===null&&e(d,R),c=i(za,c,L),$===null?O=za:$.sibling=za,$=za,R=K}if(tt.done)return a(d,R),J&&Qe(d,L),O;if(R===null){for(;!tt.done;L++,tt=h.next())tt=A(d,tt.value,S),tt!==null&&(c=i(tt,c,L),$===null?O=tt:$.sibling=tt,$=tt);return J&&Qe(d,L),O}for(R=l(R);!tt.done;L++,tt=h.next())tt=v(R,d,L,tt.value,S),tt!==null&&(t&&tt.alternate!==null&&R.delete(tt.key===null?L:tt.key),c=i(tt,c,L),$===null?O=tt:$.sibling=tt,$=tt);return t&&R.forEach(function(Zg){return e(d,Zg)}),J&&Qe(d,L),O}function dt(d,c,h,S){if(typeof h=="object"&&h!==null&&h.type===Mt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:t:{for(var O=h.key;c!==null;){if(c.key===O){if(O=h.type,O===Mt){if(c.tag===7){a(d,c.sibling),S=n(c,h.props.children),S.return=d,d=S;break t}}else if(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Bt&&La(O)===c.type){a(d,c.sibling),S=n(c,h.props),$l(S,h),S.return=d,d=S;break t}a(d,c);break}else e(d,c);c=c.sibling}h.type===Mt?(S=_a(h.props.children,d.mode,S,h.key),S.return=d,d=S):(S=Jn(h.type,h.key,h.props,null,d.mode,S),$l(S,h),S.return=d,d=S)}return s(d);case Xt:t:{for(O=h.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){a(d,c.sibling),S=n(c,h.children||[]),S.return=d,d=S;break t}else{a(d,c);break}else e(d,c);c=c.sibling}S=Cs(h,d.mode,S),S.return=d,d=S}return s(d);case Bt:return h=La(h),dt(d,c,h,S)}if(Zt(h))return z(d,c,h,S);if(Nt(h)){if(O=Nt(h),typeof O!="function")throw Error(f(150));return h=O.call(h),q(d,c,h,S)}if(typeof h.then=="function")return dt(d,c,ei(h),S);if(h.$$typeof===Dt)return dt(d,c,Fn(d,h),S);ai(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,c!==null&&c.tag===6?(a(d,c.sibling),S=n(c,h),S.return=d,d=S):(a(d,c),S=Ds(h,d.mode,S),S.return=d,d=S),s(d)):a(d,c)}return function(d,c,h,S){try{Pl=0;var O=dt(d,c,h,S);return ml=null,O}catch(R){if(R===gl||R===$n)throw R;var $=de(29,R,null,d.mode);return $.lanes=S,$.return=d,$}finally{}}}var Va=wc(!0),xc=wc(!1),ra=!1;function Bs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function js(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(et&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Kn(t),fc(t,null,a),e}return Zn(t,l,e,a),Kn(t)}function tn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,So(t,a)}}function Gs(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ls=!1;function en(){if(Ls){var t=hl;if(t!==null)throw t}}function an(t,e,a,l){Ls=!1;var n=t.updateQueue;ra=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,g=o.next;o.next=null,s===null?i=g:s.next=g,s=o;var b=t.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==s&&(u===null?b.firstBaseUpdate=g:u.next=g,b.lastBaseUpdate=o))}if(i!==null){var A=n.baseState;s=0,b=g=o=null,u=i;do{var m=u.lane&-536870913,v=m!==u.lane;if(v?(Z&m)===m:(l&m)===m){m!==0&&m===fl&&(Ls=!0),b!==null&&(b=b.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var z=t,q=u;m=e;var dt=a;switch(q.tag){case 1:if(z=q.payload,typeof z=="function"){A=z.call(dt,A,m);break t}A=z;break t;case 3:z.flags=z.flags&-65537|128;case 0:if(z=q.payload,m=typeof z=="function"?z.call(dt,A,m):z,m==null)break t;A=H({},A,m);break t;case 2:ra=!0}}m=u.callback,m!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[m]:v.push(m))}else v={lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(g=b=v,o=A):b=b.next=v,s|=m;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;v=u,u=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);b===null&&(o=A),n.baseState=o,n.firstBaseUpdate=g,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),pa|=s,t.lanes=s,t.memoizedState=A}}function Nc(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Rc(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Nc(a[t],e)}var vl=r(null),li=r(0);function Oc(t,e){t=ta,E(li,t),E(vl,e),ta=t|e.baseLanes}function Ys(){E(li,ta),E(vl,vl.current)}function Vs(){ta=li.current,T(vl),T(li)}var fe=r(null),ze=null;function ha(t){var e=t.alternate;E(St,St.current&1),E(fe,t),ze===null&&(e===null||vl.current!==null||e.memoizedState!==null)&&(ze=t)}function Qs(t){E(St,St.current),E(fe,t),ze===null&&(ze=t)}function Hc(t){t.tag===22?(E(St,St.current),E(fe,t),ze===null&&(ze=t)):ga()}function ga(){E(St,St.current),E(fe,fe.current)}function he(t){T(fe),ze===t&&(ze=null),T(St)}var St=r(0);function ni(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Iu(a)||Wu(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ze=0,G=null,ct=null,Et=null,ii=!1,pl=!1,Qa=!1,si=0,ln=0,yl=null,Uh=0;function yt(){throw Error(f(321))}function Xs(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!re(t[a],e[a]))return!1;return!0}function ks(t,e,a,l,n,i){return Ze=i,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,p.H=t===null||t.memoizedState===null?vr:su,Qa=!1,i=a(l,n),Qa=!1,pl&&(i=_c(e,a,l,n)),qc(t),i}function qc(t){p.H=un;var e=ct!==null&&ct.next!==null;if(Ze=0,Et=ct=G=null,ii=!1,ln=0,yl=null,e)throw Error(f(300));t===null||zt||(t=t.dependencies,t!==null&&Wn(t)&&(zt=!0))}function _c(t,e,a,l){G=t;var n=0;do{if(pl&&(yl=null),ln=0,pl=!1,25<=n)throw Error(f(301));if(n+=1,Et=ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}p.H=pr,i=e(a,l)}while(pl);return i}function Bh(){var t=p.H,e=t.useState()[0];return e=typeof e.then=="function"?nn(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(G.flags|=1024),e}function Zs(){var t=si!==0;return si=0,t}function Ks(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Js(t){if(ii){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ii=!1}Ze=0,Et=ct=G=null,pl=!1,ln=si=0,yl=null}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?G.memoizedState=Et=t:Et=Et.next=t,Et}function At(){if(ct===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=Et===null?G.memoizedState:Et.next;if(e!==null)Et=e,ct=t;else{if(t===null)throw G.alternate===null?Error(f(467)):Error(f(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Et===null?G.memoizedState=Et=t:Et=Et.next=t}return Et}function ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var e=ln;return ln+=1,yl===null&&(yl=[]),t=Cc(yl,t,e),e=G,(Et===null?e.memoizedState:Et.next)===null&&(e=e.alternate,p.H=e===null||e.memoizedState===null?vr:su),t}function oi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===Dt)return Yt(t)}throw Error(f(438,String(t)))}function Is(t){var e=null,a=G.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=G.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ui(),G.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=He;return e.index++,a}function Ke(t,e){return typeof e=="function"?e(t):e}function ci(t){var e=At();return Ws(e,ct,t)}function Ws(t,e,a){var l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var u=s=null,o=null,g=e,b=!1;do{var A=g.lane&-536870913;if(A!==g.lane?(Z&A)===A:(Ze&A)===A){var m=g.revertLane;if(m===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===fl&&(b=!0);else if((Ze&m)===m){g=g.next,m===fl&&(b=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(u=o=A,s=i):o=o.next=A,G.lanes|=m,pa|=m;A=g.action,Qa&&a(i,A),i=g.hasEagerState?g.eagerState:a(i,A)}else m={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(u=o=m,s=i):o=o.next=m,G.lanes|=A,pa|=A;g=g.next}while(g!==null&&g!==e);if(o===null?s=i:o.next=u,!re(i,t.memoizedState)&&(zt=!0,b&&(a=hl,a!==null)))throw a;t.memoizedState=i,t.baseState=s,t.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Fs(t){var e=At(),a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=t(i,s.action),s=s.next;while(s!==n);re(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function Uc(t,e,a){var l=G,n=At(),i=J;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=e();var s=!re((ct||n).memoizedState,a);if(s&&(n.memoizedState=a,zt=!0),n=n.queue,tu(Gc.bind(null,l,n,t),[t]),n.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,bl(9,{destroy:void 0},jc.bind(null,l,n,a,e),null),ft===null)throw Error(f(349));i||(Ze&127)!==0||Bc(l,e,a)}return a}function Bc(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=G.updateQueue,e===null?(e=ui(),G.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function jc(t,e,a,l){e.value=a,e.getSnapshot=l,Lc(e)&&Yc(t)}function Gc(t,e,a){return a(function(){Lc(e)&&Yc(t)})}function Lc(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!re(t,a)}catch{return!0}}function Yc(t){var e=qa(t,2);e!==null&&le(e,t,2)}function Ps(t){var e=It();if(typeof t=="function"){var a=t;if(t=a(),Qa){la(!0);try{a()}finally{la(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:t},e}function Vc(t,e,a,l){return t.baseState=a,Ws(t,ct,typeof l=="function"?l:Ke)}function jh(t,e,a,l,n){if(fi(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};p.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Qc(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Qc(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=p.T,s={};p.T=s;try{var u=a(n,l),o=p.S;o!==null&&o(s,u),Xc(t,e,u)}catch(g){$s(t,e,g)}finally{i!==null&&s.types!==null&&(i.types=s.types),p.T=i}}else try{i=a(n,l),Xc(t,e,i)}catch(g){$s(t,e,g)}}function Xc(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kc(t,e,l)},function(l){return $s(t,e,l)}):kc(t,e,a)}function kc(t,e,a){e.status="fulfilled",e.value=a,Zc(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Qc(t,a)))}function $s(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Zc(e),e=e.next;while(e!==l)}t.action=null}function Zc(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Kc(t,e){return e}function Jc(t,e){if(J){var a=ft.formState;if(a!==null){t:{var l=G;if(J){if(gt){e:{for(var n=gt,i=Ee;n.nodeType!==8;){if(!i){n=null;break e}if(n=we(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){gt=we(n.nextSibling),l=n.data==="F!";break t}}oa(l)}l=!1}l&&(e=a[0])}}return a=It(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kc,lastRenderedState:e},a.queue=l,a=hr.bind(null,G,l),l.dispatch=a,l=Ps(!1),i=iu.bind(null,G,!1,l.queue),l=It(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=jh.bind(null,G,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Ic(t){var e=At();return Wc(e,ct,t)}function Wc(t,e,a){if(e=Ws(t,e,Kc)[0],t=ci(Ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=nn(e)}catch(s){throw s===gl?$n:s}else l=e;e=At();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(G.flags|=2048,bl(9,{destroy:void 0},Gh.bind(null,n,a),null)),[l,i,t]}function Gh(t,e){t.action=e}function Fc(t){var e=At(),a=ct;if(a!==null)return Wc(e,a,t);At(),e=e.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function bl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=G.updateQueue,e===null&&(e=ui(),G.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Pc(){return At().memoizedState}function ri(t,e,a,l){var n=It();G.flags|=t,n.memoizedState=bl(1|e,{destroy:void 0},a,l===void 0?null:l)}function di(t,e,a,l){var n=At();l=l===void 0?null:l;var i=n.memoizedState.inst;ct!==null&&l!==null&&Xs(l,ct.memoizedState.deps)?n.memoizedState=bl(e,i,a,l):(G.flags|=t,n.memoizedState=bl(1|e,i,a,l))}function $c(t,e){ri(8390656,8,t,e)}function tu(t,e){di(2048,8,t,e)}function Lh(t){G.flags|=4;var e=G.updateQueue;if(e===null)e=ui(),G.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function tr(t){var e=At().memoizedState;return Lh({ref:e,nextImpl:t}),function(){if((et&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function er(t,e){return di(4,2,t,e)}function ar(t,e){return di(4,4,t,e)}function lr(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nr(t,e,a){a=a!=null?a.concat([t]):null,di(4,4,lr.bind(null,e,t),a)}function eu(){}function ir(t,e){var a=At();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Xs(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function sr(t,e){var a=At();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Xs(e,l[1]))return l[0];if(l=t(),Qa){la(!0);try{t()}finally{la(!1)}}return a.memoizedState=[l,e],l}function au(t,e,a){return a===void 0||(Ze&1073741824)!==0&&(Z&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=ud(),G.lanes|=t,pa|=t,a)}function ur(t,e,a,l){return re(a,e)?a:vl.current!==null?(t=au(t,a,l),re(t,e)||(zt=!0),t):(Ze&42)===0||(Ze&1073741824)!==0&&(Z&261930)===0?(zt=!0,t.memoizedState=a):(t=ud(),G.lanes|=t,pa|=t,e)}function or(t,e,a,l,n){var i=C.p;C.p=i!==0&&8>i?i:8;var s=p.T,u={};p.T=u,iu(t,!1,e,a);try{var o=n(),g=p.S;if(g!==null&&g(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=_h(o,l);sn(t,e,b,ve(t))}else sn(t,e,l,ve(t))}catch(A){sn(t,e,{then:function(){},status:"rejected",reason:A},ve())}finally{C.p=i,s!==null&&u.types!==null&&(s.types=u.types),p.T=s}}function Yh(){}function lu(t,e,a,l){if(t.tag!==5)throw Error(f(476));var n=cr(t).queue;or(t,n,e,_,a===null?Yh:function(){return rr(t),a(l)})}function cr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:_},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rr(t){var e=cr(t);e.next===null&&(e=t.alternate.memoizedState),sn(t,e.next.queue,{},ve())}function nu(){return Yt(Mn)}function dr(){return At().memoizedState}function fr(){return At().memoizedState}function Vh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ve();t=da(a);var l=fa(e,t,a);l!==null&&(le(l,e,a),tn(l,e,a)),e={cache:Hs()},t.payload=e;return}e=e.return}}function Qh(t,e,a){var l=ve();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)?gr(e,a):(a=Ts(t,e,a,l),a!==null&&(le(a,t,l),mr(a,e,l)))}function hr(t,e,a){var l=ve();sn(t,e,a,l)}function sn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fi(t))gr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,u=i(s,a);if(n.hasEagerState=!0,n.eagerState=u,re(u,s))return Zn(t,e,n,0),ft===null&&kn(),!1}catch{}finally{}if(a=Ts(t,e,n,l),a!==null)return le(a,t,l),mr(a,e,l),!0}return!1}function iu(t,e,a,l){if(l={lane:2,revertLane:Bu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(e)throw Error(f(479))}else e=Ts(t,a,l,2),e!==null&&le(e,t,2)}function fi(t){var e=t.alternate;return t===G||e!==null&&e===G}function gr(t,e){pl=ii=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function mr(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,So(t,a)}}var un={readContext:Yt,use:oi,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};un.useEffectEvent=yt;var vr={readContext:Yt,use:oi,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:$c,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ri(4194308,4,lr.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ri(4194308,4,t,e)},useInsertionEffect:function(t,e){ri(4,2,t,e)},useMemo:function(t,e){var a=It();e=e===void 0?null:e;var l=t();if(Qa){la(!0);try{t()}finally{la(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=It();if(a!==void 0){var n=a(e);if(Qa){la(!0);try{a(e)}finally{la(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Qh.bind(null,G,t),[l.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:function(t){t=Ps(t);var e=t.queue,a=hr.bind(null,G,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:eu,useDeferredValue:function(t,e){var a=It();return au(a,t,e)},useTransition:function(){var t=Ps(!1);return t=or.bind(null,G,t.queue,!0,!1),It().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=G,n=It();if(J){if(a===void 0)throw Error(f(407));a=a()}else{if(a=e(),ft===null)throw Error(f(349));(Z&127)!==0||Bc(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,$c(Gc.bind(null,l,i,t),[t]),l.flags|=2048,bl(9,{destroy:void 0},jc.bind(null,l,i,a,e),null),a},useId:function(){var t=It(),e=ft.identifierPrefix;if(J){var a=Ue,l=_e;a=(l&~(1<<32-ce(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=si++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Uh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:nu,useFormState:Jc,useActionState:Jc,useOptimistic:function(t){var e=It();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=iu.bind(null,G,!0,a),a.dispatch=e,[t,e]},useMemoCache:Is,useCacheRefresh:function(){return It().memoizedState=Vh.bind(null,G)},useEffectEvent:function(t){var e=It(),a={impl:t};return e.memoizedState=a,function(){if((et&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},su={readContext:Yt,use:oi,useCallback:ir,useContext:Yt,useEffect:tu,useImperativeHandle:nr,useInsertionEffect:er,useLayoutEffect:ar,useMemo:sr,useReducer:ci,useRef:Pc,useState:function(){return ci(Ke)},useDebugValue:eu,useDeferredValue:function(t,e){var a=At();return ur(a,ct.memoizedState,t,e)},useTransition:function(){var t=ci(Ke)[0],e=At().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:Uc,useId:dr,useHostTransitionStatus:nu,useFormState:Ic,useActionState:Ic,useOptimistic:function(t,e){var a=At();return Vc(a,ct,t,e)},useMemoCache:Is,useCacheRefresh:fr};su.useEffectEvent=tr;var pr={readContext:Yt,use:oi,useCallback:ir,useContext:Yt,useEffect:tu,useImperativeHandle:nr,useInsertionEffect:er,useLayoutEffect:ar,useMemo:sr,useReducer:Fs,useRef:Pc,useState:function(){return Fs(Ke)},useDebugValue:eu,useDeferredValue:function(t,e){var a=At();return ct===null?au(a,t,e):ur(a,ct.memoizedState,t,e)},useTransition:function(){var t=Fs(Ke)[0],e=At().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:Uc,useId:dr,useHostTransitionStatus:nu,useFormState:Fc,useActionState:Fc,useOptimistic:function(t,e){var a=At();return ct!==null?Vc(a,ct,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Is,useCacheRefresh:fr};pr.useEffectEvent=tr;function uu(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:H({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ou={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ve(),n=da(l);n.payload=e,a!=null&&(n.callback=a),e=fa(t,n,l),e!==null&&(le(e,t,l),tn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ve(),n=da(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=fa(t,n,l),e!==null&&(le(e,t,l),tn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ve(),l=da(a);l.tag=2,e!=null&&(l.callback=e),e=fa(t,l,a),e!==null&&(le(e,t,a),tn(e,t,a))}};function yr(t,e,a,l,n,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,s):e.prototype&&e.prototype.isPureReactComponent?!Zl(a,l)||!Zl(n,i):!0}function br(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function Xa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=H({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Sr(t){Xn(t)}function Ar(t){console.error(t)}function Tr(t){Xn(t)}function hi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Mr(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cu(t,e,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){hi(t,e)},a}function Dr(t){return t=da(t),t.tag=3,t}function Cr(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Mr(e,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Mr(e,a,l),typeof n!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Xh(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&dl(e,a,n,!0),a=fe.current,a!==null){switch(a.tag){case 31:case 13:return ze===null?Ci():a.alternate===null&&bt===0&&(bt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ti?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),qu(t,l,n)),!1;case 22:return a.flags|=65536,l===ti?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),qu(t,l,n)),!1}throw Error(f(435,a.tag))}return qu(t,l,n),Ci(),!1}if(J)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==ws&&(t=Error(f(422),{cause:l}),Il(Me(t,a)))):(l!==ws&&(e=Error(f(423),{cause:l}),Il(Me(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Me(l,a),n=cu(t.stateNode,l,n),Gs(t,n),bt!==4&&(bt=2)),!1;var i=Error(f(520),{cause:l});if(i=Me(i,a),mn===null?mn=[i]:mn.push(i),bt!==4&&(bt=2),e===null)return!0;l=Me(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=cu(a.stateNode,l,t),Gs(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Dr(n),Cr(n,t,a,l),Gs(a,n),!1}a=a.return}while(a!==null);return!1}var ru=Error(f(461)),zt=!1;function Vt(t,e,a,l){e.child=t===null?xc(e,null,a,l):Va(e,t.child,a,l)}function Er(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var s={};for(var u in l)u!=="ref"&&(s[u]=l[u])}else s=l;return ja(e),l=ks(t,e,a,s,i,n),u=Zs(),t!==null&&!zt?(Ks(t,e,n),Je(t,e,n)):(J&&u&&Es(e),e.flags|=1,Vt(t,e,l,n),e.child)}function zr(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Ms(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,wr(t,e,i,l,n)):(t=Jn(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!yu(t,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Zl,a(s,l)&&t.ref===e.ref)return Je(t,e,n)}return e.flags|=1,t=Ve(i,l),t.ref=e.ref,t.return=e,e.child=t}function wr(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Zl(i,l)&&t.ref===e.ref)if(zt=!1,e.pendingProps=l=i,yu(t,n))(t.flags&131072)!==0&&(zt=!0);else return e.lanes=t.lanes,Je(t,e,n)}return du(t,e,a,l,n)}function xr(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return Nr(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pn(e,i!==null?i.cachePool:null),i!==null?Oc(e,i):Ys(),Hc(e);else return l=e.lanes=536870912,Nr(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Pn(e,i.cachePool),Oc(e,i),ga(),e.memoizedState=null):(t!==null&&Pn(e,null),Ys(),ga());return Vt(t,e,n,a),e.child}function on(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Nr(t,e,a,l,n){var i=_s();return i=i===null?null:{parent:Ct._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Pn(e,null),Ys(),Hc(e),t!==null&&dl(t,e,l,!0),e.childLanes=n,null}function gi(t,e){return e=vi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(t,e,a){return Va(e,t.child,null,a),t=gi(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function kh(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(J){if(l.mode==="hidden")return t=gi(e,l),e.lanes=536870912,on(null,t);if(Qs(e),(t=gt)?(t=Qd(t,Ee),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sa!==null?{id:_e,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},a=gc(t),a.return=e,e.child=a,Lt=e,gt=null)):t=null,t===null)throw oa(e);return e.lanes=536870912,null}return gi(e,l)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(Qs(e),n)if(e.flags&256)e.flags&=-257,e=Rr(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(zt||dl(t,e,a,!1),n=(a&t.childLanes)!==0,zt||n){if(l=ft,l!==null&&(s=Ao(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,qa(t,s),le(l,t,s),ru;Ci(),e=Rr(t,e,a)}else t=i.treeContext,gt=we(s.nextSibling),Lt=e,J=!0,ua=null,Ee=!1,t!==null&&pc(e,t),e=gi(e,l),e.flags|=4096;return e}return t=Ve(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function mi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function du(t,e,a,l,n){return ja(e),a=ks(t,e,a,l,void 0,n),l=Zs(),t!==null&&!zt?(Ks(t,e,n),Je(t,e,n)):(J&&l&&Es(e),e.flags|=1,Vt(t,e,a,n),e.child)}function Or(t,e,a,l,n,i){return ja(e),e.updateQueue=null,a=_c(e,l,a,n),qc(t),l=Zs(),t!==null&&!zt?(Ks(t,e,i),Je(t,e,i)):(J&&l&&Es(e),e.flags|=1,Vt(t,e,a,i),e.child)}function Hr(t,e,a,l,n){if(ja(e),e.stateNode===null){var i=ul,s=a.contextType;typeof s=="object"&&s!==null&&(i=Yt(s)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Bs(e),s=a.contextType,i.context=typeof s=="object"&&s!==null?Yt(s):ul,i.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(uu(e,a,s,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ou.enqueueReplaceState(i,i.state,null),an(e,l,i,n),en(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var u=e.memoizedProps,o=Xa(a,u);i.props=o;var g=i.context,b=a.contextType;s=ul,typeof b=="object"&&b!==null&&(s=Yt(b));var A=a.getDerivedStateFromProps;b=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||g!==s)&&br(e,i,l,s),ra=!1;var m=e.memoizedState;i.state=m,an(e,l,i,n),en(),g=e.memoizedState,u||m!==g||ra?(typeof A=="function"&&(uu(e,a,A,l),g=e.memoizedState),(o=ra||yr(e,a,o,l,m,g,s))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=g),i.props=l,i.state=g,i.context=s,l=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,js(t,e),s=e.memoizedProps,b=Xa(a,s),i.props=b,A=e.pendingProps,m=i.context,g=a.contextType,o=ul,typeof g=="object"&&g!==null&&(o=Yt(g)),u=a.getDerivedStateFromProps,(g=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==A||m!==o)&&br(e,i,l,o),ra=!1,m=e.memoizedState,i.state=m,an(e,l,i,n),en();var v=e.memoizedState;s!==A||m!==v||ra||t!==null&&t.dependencies!==null&&Wn(t.dependencies)?(typeof u=="function"&&(uu(e,a,u,l),v=e.memoizedState),(b=ra||yr(e,a,b,l,m,v,o)||t!==null&&t.dependencies!==null&&Wn(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=v),i.props=l,i.state=v,i.context=o,l=b):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,mi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Va(e,t.child,null,n),e.child=Va(e,null,a,n)):Vt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Je(t,e,n),t}function qr(t,e,a,l){return Ua(),e.flags|=256,Vt(t,e,a,l),e.child}var fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hu(t){return{baseLanes:t,cachePool:Mc()}}function gu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=me),t}function _r(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(J){if(n?ha(e):ga(),(t=gt)?(t=Qd(t,Ee),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sa!==null?{id:_e,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},a=gc(t),a.return=e,e.child=a,Lt=e,gt=null)):t=null,t===null)throw oa(e);return Wu(t)?e.lanes=32:e.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(ga(),n=e.mode,u=vi({mode:"hidden",children:u},n),l=_a(l,n,a,null),u.return=e,l.return=e,u.sibling=l,e.child=u,l=e.child,l.memoizedState=hu(a),l.childLanes=gu(t,s,a),e.memoizedState=fu,on(null,l)):(ha(e),mu(e,u))}var o=t.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)e.flags&256?(ha(e),e.flags&=-257,e=vu(t,e,a)):e.memoizedState!==null?(ga(),e.child=t.child,e.flags|=128,e=null):(ga(),u=l.fallback,n=e.mode,l=vi({mode:"visible",children:l.children},n),u=_a(u,n,a,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,Va(e,t.child,null,a),l=e.child,l.memoizedState=hu(a),l.childLanes=gu(t,s,a),e.memoizedState=fu,e=on(null,l));else if(ha(e),Wu(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var g=s.dgst;s=g,l=Error(f(419)),l.stack="",l.digest=s,Il({value:l,source:null,stack:null}),e=vu(t,e,a)}else if(zt||dl(t,e,a,!1),s=(a&t.childLanes)!==0,zt||s){if(s=ft,s!==null&&(l=Ao(s,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,qa(t,l),le(s,t,l),ru;Iu(u)||Ci(),e=vu(t,e,a)}else Iu(u)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,gt=we(u.nextSibling),Lt=e,J=!0,ua=null,Ee=!1,t!==null&&pc(e,t),e=mu(e,l.children),e.flags|=4096);return e}return n?(ga(),u=l.fallback,n=e.mode,o=t.child,g=o.sibling,l=Ve(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,g!==null?u=Ve(g,u):(u=_a(u,n,a,null),u.flags|=2),u.return=e,l.return=e,l.sibling=u,e.child=l,on(null,l),l=e.child,u=t.child.memoizedState,u===null?u=hu(a):(n=u.cachePool,n!==null?(o=Ct._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Mc(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=gu(t,s,a),e.memoizedState=fu,on(t.child,l)):(ha(e),a=t.child,t=a.sibling,a=Ve(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function mu(t,e){return e=vi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vi(t,e){return t=de(22,t,null,e),t.lanes=0,t}function vu(t,e,a){return Va(e,t.child,null,a),t=mu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ur(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Rs(t.return,e,a)}function pu(t,e,a,l,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function Br(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=St.current,u=(s&2)!==0;if(u?(s=s&1|2,e.flags|=128):s&=1,E(St,s),Vt(t,e,l,a),l=J?Jl:0,!u&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ur(t,a,e);else if(t.tag===19)Ur(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ni(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),pu(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ni(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}pu(e,!0,a,null,i,l);break;case"together":pu(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Je(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),pa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(dl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,a=Ve(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ve(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function yu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Wn(t)))}function Zh(t,e,a){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),ca(e,Ct,t.memoizedState.cache),Ua();break;case 27:case 5:wa(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:ca(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Qs(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ha(e),e.flags|=128,null):(a&e.child.childLanes)!==0?_r(t,e,a):(ha(e),t=Je(t,e,a),t!==null?t.sibling:null);ha(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(dl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Br(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),E(St,St.current),l)break;return null;case 22:return e.lanes=0,xr(t,e,a,e.pendingProps);case 24:ca(e,Ct,t.memoizedState.cache)}return Je(t,e,a)}function jr(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)zt=!0;else{if(!yu(t,a)&&(e.flags&128)===0)return zt=!1,Zh(t,e,a);zt=(t.flags&131072)!==0}else zt=!1,J&&(e.flags&1048576)!==0&&vc(e,Jl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=La(e.elementType),e.type=t,typeof t=="function")Ms(t)?(l=Xa(t,l),e.tag=1,e=Hr(null,e,t,l,a)):(e.tag=0,e=du(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===Jt){e.tag=11,e=Er(null,e,t,l,a);break t}else if(n===V){e.tag=14,e=zr(null,e,t,l,a);break t}}throw e=ye(t)||t,Error(f(306,e,""))}}return e;case 0:return du(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=Xa(l,e.pendingProps),Hr(t,e,l,n,a);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,js(t,e),an(e,l,null,a);var s=e.memoizedState;if(l=s.cache,ca(e,Ct,l),l!==i.cache&&Os(e,[Ct],a,!0),en(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=qr(t,e,l,a);break t}else if(l!==n){n=Me(Error(f(424)),e),Il(n),e=qr(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=we(t.firstChild),Lt=e,J=!0,ua=null,Ee=!0,a=xc(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ua(),l===n){e=Je(t,e,a);break t}Vt(t,e,l,a)}e=e.child}return e;case 26:return mi(t,e),t===null?(a=Id(e.type,null,e.pendingProps,null))?e.memoizedState=a:J||(a=e.type,t=e.pendingProps,l=Oi(Y.current).createElement(a),l[Gt]=e,l[Ft]=t,Qt(l,a,t),Ht(l),e.stateNode=l):e.memoizedState=Id(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return wa(e),t===null&&J&&(l=e.stateNode=Zd(e.type,e.pendingProps,Y.current),Lt=e,Ee=!0,n=gt,Ta(e.type)?(Fu=n,gt=we(l.firstChild)):gt=n),Vt(t,e,e.pendingProps.children,a),mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&J&&((n=l=gt)&&(l=Tg(l,e.type,e.pendingProps,Ee),l!==null?(e.stateNode=l,Lt=e,gt=we(l.firstChild),Ee=!1,n=!0):n=!1),n||oa(e)),wa(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Zu(n,i)?l=null:s!==null&&Zu(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=ks(t,e,Bh,null,null,a),Mn._currentValue=n),mi(t,e),Vt(t,e,l,a),e.child;case 6:return t===null&&J&&((t=a=gt)&&(a=Mg(a,e.pendingProps,Ee),a!==null?(e.stateNode=a,Lt=e,gt=null,t=!0):t=!1),t||oa(e)),null;case 13:return _r(t,e,a);case 4:return jt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Va(e,null,l,a):Vt(t,e,l,a),e.child;case 11:return Er(t,e,e.type,e.pendingProps,a);case 7:return Vt(t,e,e.pendingProps,a),e.child;case 8:return Vt(t,e,e.pendingProps.children,a),e.child;case 12:return Vt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,ca(e,e.type,l.value),Vt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,ja(e),n=Yt(n),l=l(n),e.flags|=1,Vt(t,e,l,a),e.child;case 14:return zr(t,e,e.type,e.pendingProps,a);case 15:return wr(t,e,e.type,e.pendingProps,a);case 19:return Br(t,e,a);case 31:return kh(t,e,a);case 22:return xr(t,e,a,e.pendingProps);case 24:return ja(e),l=Yt(Ct),t===null?(n=_s(),n===null&&(n=ft,i=Hs(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Bs(e),ca(e,Ct,n)):((t.lanes&a)!==0&&(js(t,e),an(e,null,null,a),en()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ca(e,Ct,l)):(l=i.cache,ca(e,Ct,l),l!==n.cache&&Os(e,[Ct],a,!0))),Vt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Ie(t){t.flags|=4}function bu(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(dd())t.flags|=8192;else throw Ya=ti,Us}else t.flags&=-16777217}function Gr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tf(e))if(dd())t.flags|=8192;else throw Ya=ti,Us}function pi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yo():536870912,t.lanes|=e,Ml|=e)}function cn(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Kh(t,e,a){var l=e.pendingProps;switch(zs(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ke(Ct),pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(rl(e)?Ie(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xs())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ie(e),i!==null?(mt(e),Gr(e,i)):(mt(e),bu(e,n,null,l,a))):i?i!==t.memoizedState?(Ie(e),mt(e),Gr(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ie(e),mt(e),bu(e,n,t,l,a)),null;case 27:if(Ka(e),a=Y.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ie(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return mt(e),null}t=w.current,rl(e)?yc(e):(t=Zd(n,l,a),e.stateNode=t,Ie(e))}return mt(e),null;case 5:if(Ka(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ie(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return mt(e),null}if(i=w.current,rl(e))yc(e);else{var s=Oi(Y.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Gt]=e,i[Ft]=l;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=i;t:switch(Qt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ie(e)}}return mt(e),bu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ie(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(t=Y.current,rl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Lt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Gt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_d(t.nodeValue,a)),t||oa(e,!0)}else t=Oi(t).createTextNode(l),t[Gt]=e,e.stateNode=t}return mt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=rl(e),a!==null){if(t===null){if(!l)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[Gt]=e}else Ua(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else a=xs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(f(558))}return mt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=rl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Gt]=e}else Ua(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=xs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),pi(e,e.updateQueue),mt(e),null);case 4:return pt(),t===null&&Yu(e.stateNode.containerInfo),mt(e),null;case 10:return ke(e.type),mt(e),null;case 19:if(T(St),l=e.memoizedState,l===null)return mt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)cn(l,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ni(t),i!==null){for(e.flags|=128,cn(l,!1),t=i.updateQueue,e.updateQueue=t,pi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)hc(a,t),a=a.sibling;return E(St,St.current&1|2),J&&Qe(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&ue()>Ti&&(e.flags|=128,n=!0,cn(l,!1),e.lanes=4194304)}else{if(!n)if(t=ni(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,pi(e,t),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!J)return mt(e),null}else 2*ue()-l.renderingStartTime>Ti&&a!==536870912&&(e.flags|=128,n=!0,cn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,a=St.current,E(St,n?a&1|2:a&1),J&&Qe(e,l.treeForkCount),t):(mt(e),null);case 22:case 23:return he(e),Vs(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),a=e.updateQueue,a!==null&&pi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&T(Ga),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ke(Ct),mt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function Jh(t,e){switch(zs(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ke(Ct),pt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ka(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(f(340));Ua()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Ua()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(St),null;case 4:return pt(),null;case 10:return ke(e.type),null;case 22:case 23:return he(e),Vs(),t!==null&&T(Ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ke(Ct),null;case 25:return null;default:return null}}function Lr(t,e){switch(zs(e),e.tag){case 3:ke(Ct),pt();break;case 26:case 27:case 5:Ka(e);break;case 4:pt();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:T(St);break;case 10:ke(e.type);break;case 22:case 23:he(e),Vs(),t!==null&&T(Ga);break;case 24:ke(Ct)}}function rn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(u){ot(e,e.return,u)}}function ma(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var s=l.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=e;var o=a,g=u;try{g()}catch(b){ot(n,o,b)}}}l=l.next}while(l!==i)}}catch(b){ot(e,e.return,b)}}function Yr(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Rc(e,a)}catch(l){ot(t,t.return,l)}}}function Vr(t,e,a){a.props=Xa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ot(t,e,l)}}function dn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){ot(t,e,n)}}function Be(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ot(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ot(t,e,n)}else a.current=null}function Qr(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ot(t,t.return,n)}}function Su(t,e,a){try{var l=t.stateNode;vg(l,t.type,a,e),l[Ft]=e}catch(n){ot(t,t.return,n)}}function Xr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Au(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Le));else if(l!==4&&(l===27&&Ta(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Tu(t,e,a),t=t.sibling;t!==null;)Tu(t,e,a),t=t.sibling}function yi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yi(t,e,a),t=t.sibling;t!==null;)yi(t,e,a),t=t.sibling}function kr(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qt(e,l,a),e[Gt]=t,e[Ft]=a}catch(i){ot(t,t.return,i)}}var We=!1,wt=!1,Mu=!1,Zr=typeof WeakSet=="function"?WeakSet:Set,qt=null;function Ih(t,e){if(t=t.containerInfo,Xu=Gi,t=nc(t),vs(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var s=0,u=-1,o=-1,g=0,b=0,A=t,m=null;e:for(;;){for(var v;A!==a||n!==0&&A.nodeType!==3||(u=s+n),A!==i||l!==0&&A.nodeType!==3||(o=s+l),A.nodeType===3&&(s+=A.nodeValue.length),(v=A.firstChild)!==null;)m=A,A=v;for(;;){if(A===t)break e;if(m===a&&++g===n&&(u=s),m===i&&++b===l&&(o=s),(v=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=v}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(ku={focusedElem:t,selectionRange:a},Gi=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var z=Xa(a.type,n);t=l.getSnapshotBeforeUpdate(z,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(q){ot(a,a.return,q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Ju(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ju(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function Kr(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pe(t,a),l&4&&rn(5,a);break;case 1:if(Pe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){ot(a,a.return,s)}else{var n=Xa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){ot(a,a.return,s)}}l&64&&Yr(a),l&512&&dn(a,a.return);break;case 3:if(Pe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Rc(t,e)}catch(s){ot(a,a.return,s)}}break;case 27:e===null&&l&4&&kr(a);case 26:case 5:Pe(t,a),e===null&&l&4&&Qr(a),l&512&&dn(a,a.return);break;case 12:Pe(t,a);break;case 31:Pe(t,a),l&4&&Wr(t,a);break;case 13:Pe(t,a),l&4&&Fr(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ng.bind(null,a),Dg(t,a))));break;case 22:if(l=a.memoizedState!==null||We,!l){e=e!==null&&e.memoizedState!==null||wt,n=We;var i=wt;We=l,(wt=e)&&!i?$e(t,a,(a.subtreeFlags&8772)!==0):Pe(t,a),We=n,wt=i}break;case 30:break;default:Pe(t,a)}}function Jr(t){var e=t.alternate;e!==null&&(t.alternate=null,Jr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$i(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,$t=!1;function Fe(t,e,a){for(a=a.child;a!==null;)Ir(t,e,a),a=a.sibling}function Ir(t,e,a){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:wt||Be(a,e),Fe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:wt||Be(a,e);var l=vt,n=$t;Ta(a.type)&&(vt=a.stateNode,$t=!1),Fe(t,e,a),Sn(a.stateNode),vt=l,$t=n;break;case 5:wt||Be(a,e);case 6:if(l=vt,n=$t,vt=null,Fe(t,e,a),vt=l,$t=n,vt!==null)if($t)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(i){ot(a,e,i)}else try{vt.removeChild(a.stateNode)}catch(i){ot(a,e,i)}break;case 18:vt!==null&&($t?(t=vt,Yd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Rl(t)):Yd(vt,a.stateNode));break;case 4:l=vt,n=$t,vt=a.stateNode.containerInfo,$t=!0,Fe(t,e,a),vt=l,$t=n;break;case 0:case 11:case 14:case 15:ma(2,a,e),wt||ma(4,a,e),Fe(t,e,a);break;case 1:wt||(Be(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Vr(a,e,l)),Fe(t,e,a);break;case 21:Fe(t,e,a);break;case 22:wt=(l=wt)||a.memoizedState!==null,Fe(t,e,a),wt=l;break;default:Fe(t,e,a)}}function Wr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rl(t)}catch(a){ot(e,e.return,a)}}}function Fr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rl(t)}catch(a){ot(e,e.return,a)}}function Wh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Zr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Zr),e;default:throw Error(f(435,t.tag))}}function bi(t,e){var a=Wh(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=ig.bind(null,t,l);l.then(n,n)}})}function te(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,s=e,u=s;t:for(;u!==null;){switch(u.tag){case 27:if(Ta(u.type)){vt=u.stateNode,$t=!1;break t}break;case 5:vt=u.stateNode,$t=!1;break t;case 3:case 4:vt=u.stateNode.containerInfo,$t=!0;break t}u=u.return}if(vt===null)throw Error(f(160));Ir(i,s,n),vt=null,$t=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Pr(e,t),e=e.sibling}var Re=null;function Pr(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:te(e,t),ee(t),l&4&&(ma(3,t,t.return),rn(3,t),ma(5,t,t.return));break;case 1:te(e,t),ee(t),l&512&&(wt||a===null||Be(a,a.return)),l&64&&We&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Re;if(te(e,t),ee(t),l&512&&(wt||a===null||Be(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Bl]||i[Gt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Qt(i,l,a),i[Gt]=t,Ht(i),l=i;break t;case"link":var s=Pd("link","href",n).get(l+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break e}}i=n.createElement(l),Qt(i,l,a),n.head.appendChild(i);break;case"meta":if(s=Pd("meta","content",n).get(l+(a.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break e}}i=n.createElement(l),Qt(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[Gt]=t,Ht(i),l=i}t.stateNode=l}else $d(n,t.type,t.stateNode);else t.stateNode=Fd(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?$d(n,t.type,t.stateNode):Fd(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Su(t,t.memoizedProps,a.memoizedProps)}break;case 27:te(e,t),ee(t),l&512&&(wt||a===null||Be(a,a.return)),a!==null&&l&4&&Su(t,t.memoizedProps,a.memoizedProps);break;case 5:if(te(e,t),ee(t),l&512&&(wt||a===null||Be(a,a.return)),t.flags&32){n=t.stateNode;try{tl(n,"")}catch(z){ot(t,t.return,z)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Su(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Mu=!0);break;case 6:if(te(e,t),ee(t),l&4){if(t.stateNode===null)throw Error(f(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(z){ot(t,t.return,z)}}break;case 3:if(_i=null,n=Re,Re=Hi(e.containerInfo),te(e,t),Re=n,ee(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Rl(e.containerInfo)}catch(z){ot(t,t.return,z)}Mu&&(Mu=!1,$r(t));break;case 4:l=Re,Re=Hi(t.stateNode.containerInfo),te(e,t),ee(t),Re=l;break;case 12:te(e,t),ee(t);break;case 31:te(e,t),ee(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bi(t,l)));break;case 13:te(e,t),ee(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ai=ue()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bi(t,l)));break;case 22:n=t.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,g=We,b=wt;if(We=g||n,wt=b||o,te(e,t),wt=b,We=g,ee(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||o||We||wt||ka(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){o=a=e;try{if(i=o.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var A=o.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(z){ot(o,o.return,z)}}}else if(e.tag===6){if(a===null){o=e;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(z){ot(o,o.return,z)}}}else if(e.tag===18){if(a===null){o=e;try{var v=o.stateNode;n?Vd(v,!0):Vd(o.stateNode,!1)}catch(z){ot(o,o.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,bi(t,a))));break;case 19:te(e,t),ee(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bi(t,l)));break;case 30:break;case 21:break;default:te(e,t),ee(t)}}function ee(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Xr(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=Au(t);yi(t,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(tl(s,""),a.flags&=-33);var u=Au(t);yi(t,u,s);break;case 3:case 4:var o=a.stateNode.containerInfo,g=Au(t);Tu(t,g,o);break;default:throw Error(f(161))}}catch(b){ot(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $r(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$r(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Pe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Kr(t,e.alternate,e),e=e.sibling}function ka(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ma(4,e,e.return),ka(e);break;case 1:Be(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Vr(e,e.return,a),ka(e);break;case 27:Sn(e.stateNode);case 26:case 5:Be(e,e.return),ka(e);break;case 22:e.memoizedState===null&&ka(e);break;case 30:ka(e);break;default:ka(e)}t=t.sibling}}function $e(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,s=i.flags;switch(i.tag){case 0:case 11:case 15:$e(n,i,a),rn(4,i);break;case 1:if($e(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ot(l,l.return,g)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Nc(o[n],u)}catch(g){ot(l,l.return,g)}}a&&s&64&&Yr(i),dn(i,i.return);break;case 27:kr(i);case 26:case 5:$e(n,i,a),a&&l===null&&s&4&&Qr(i),dn(i,i.return);break;case 12:$e(n,i,a);break;case 31:$e(n,i,a),a&&s&4&&Wr(n,i);break;case 13:$e(n,i,a),a&&s&4&&Fr(n,i);break;case 22:i.memoizedState===null&&$e(n,i,a),dn(i,i.return);break;case 30:break;default:$e(n,i,a)}e=e.sibling}}function Du(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wl(a))}function Cu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wl(t))}function Oe(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(t,e,a,l),e=e.sibling}function td(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Oe(t,e,a,l),n&2048&&rn(9,e);break;case 1:Oe(t,e,a,l);break;case 3:Oe(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wl(t)));break;case 12:if(n&2048){Oe(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){ot(e,e.return,o)}}else Oe(t,e,a,l);break;case 31:Oe(t,e,a,l);break;case 13:Oe(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,s=e.alternate,e.memoizedState!==null?i._visibility&2?Oe(t,e,a,l):fn(t,e):i._visibility&2?Oe(t,e,a,l):(i._visibility|=2,Sl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Du(s,e);break;case 24:Oe(t,e,a,l),n&2048&&Cu(e.alternate,e);break;default:Oe(t,e,a,l)}}function Sl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,s=e,u=a,o=l,g=s.flags;switch(s.tag){case 0:case 11:case 15:Sl(i,s,u,o,n),rn(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Sl(i,s,u,o,n):fn(i,s):(b._visibility|=2,Sl(i,s,u,o,n)),n&&g&2048&&Du(s.alternate,s);break;case 24:Sl(i,s,u,o,n),n&&g&2048&&Cu(s.alternate,s);break;default:Sl(i,s,u,o,n)}e=e.sibling}}function fn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Du(l.alternate,l);break;case 24:fn(a,l),n&2048&&Cu(l.alternate,l);break;default:fn(a,l)}e=e.sibling}}var hn=8192;function Al(t,e,a){if(t.subtreeFlags&hn)for(t=t.child;t!==null;)ed(t,e,a),t=t.sibling}function ed(t,e,a){switch(t.tag){case 26:Al(t,e,a),t.flags&hn&&t.memoizedState!==null&&Ug(a,Re,t.memoizedState,t.memoizedProps);break;case 5:Al(t,e,a);break;case 3:case 4:var l=Re;Re=Hi(t.stateNode.containerInfo),Al(t,e,a),Re=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=hn,hn=16777216,Al(t,e,a),hn=l):Al(t,e,a));break;default:Al(t,e,a)}}function ad(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function gn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];qt=l,nd(l,t)}ad(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ld(t),t=t.sibling}function ld(t){switch(t.tag){case 0:case 11:case 15:gn(t),t.flags&2048&&ma(9,t,t.return);break;case 3:gn(t);break;case 12:gn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Si(t)):gn(t);break;default:gn(t)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];qt=l,nd(l,t)}ad(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ma(8,e,e.return),Si(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Si(e));break;default:Si(e)}t=t.sibling}}function nd(t,e){for(;qt!==null;){var a=qt;switch(a.tag){case 0:case 11:case 15:ma(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qt=l;else t:for(a=t;qt!==null;){l=qt;var n=l.sibling,i=l.return;if(Jr(l),l===a){qt=null;break t}if(n!==null){n.return=i,qt=n;break t}qt=i}}}var Fh={getCacheForType:function(t){var e=Yt(Ct),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Yt(Ct).controller.signal}},Ph=typeof WeakMap=="function"?WeakMap:Map,et=0,ft=null,Q=null,Z=0,ut=0,ge=null,va=!1,Tl=!1,Eu=!1,ta=0,bt=0,pa=0,Za=0,zu=0,me=0,Ml=0,mn=null,ae=null,wu=!1,Ai=0,id=0,Ti=1/0,Mi=null,ya=null,Rt=0,ba=null,Dl=null,ea=0,xu=0,Nu=null,sd=null,vn=0,Ru=null;function ve(){return(et&2)!==0&&Z!==0?Z&-Z:p.T!==null?Bu():To()}function ud(){if(me===0)if((Z&536870912)===0||J){var t=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),me=t}else me=536870912;return t=fe.current,t!==null&&(t.flags|=32),me}function le(t,e,a){(t===ft&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Cl(t,0),Sa(t,Z,me,!1)),Ul(t,a),((et&2)===0||t!==ft)&&(t===ft&&((et&2)===0&&(Za|=a),bt===4&&Sa(t,Z,me,!1)),je(t))}function od(t,e,a){if((et&6)!==0)throw Error(f(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||_l(t,e),n=l?eg(t,e):Hu(t,e,!0),i=l;do{if(n===0){Tl&&!l&&Sa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!$h(a)){n=Hu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var u=t;n=mn;var o=u.current.memoizedState.isDehydrated;if(o&&(Cl(u,s).flags|=256),s=Hu(u,s,!1),s!==2){if(Eu&&!o){u.errorRecoveryDisabledLanes|=i,Za|=i,n=4;break t}i=ae,ae=n,i!==null&&(ae===null?ae=i:ae.push.apply(ae,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Cl(t,0),Sa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:Sa(l,e,me,!va);break t;case 2:ae=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=Ai+300-ue(),10<n)){if(Sa(l,e,me,!va),Hn(l,0,!0)!==0)break t;ea=e,l.timeoutHandle=Gd(cd.bind(null,l,a,ae,Mi,wu,e,me,Za,Ml,va,i,"Throttled",-0,0),n);break t}cd(l,a,ae,Mi,wu,e,me,Za,Ml,va,i,null,-0,0)}}break}while(!0);je(t)}function cd(t,e,a,l,n,i,s,u,o,g,b,A,m,v){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Le},ed(e,i,A);var z=(i&62914560)===i?Ai-ue():(i&4194048)===i?id-ue():0;if(z=Bg(A,z),z!==null){ea=i,t.cancelPendingCommit=z(pd.bind(null,t,e,i,a,l,n,s,u,o,b,A,null,m,v)),Sa(t,i,s,!g);return}}pd(t,e,i,a,l,n,s,u,o)}function $h(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!re(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sa(t,e,a,l){e&=~zu,e&=~Za,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-ce(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&bo(t,a,e)}function Di(){return(et&6)===0?(pn(0),!1):!0}function Ou(){if(Q!==null){if(ut===0)var t=Q.return;else t=Q,Xe=Ba=null,Js(t),ml=null,Pl=0,t=Q;for(;t!==null;)Lr(t.alternate,t),t=t.return;Q=null}}function Cl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,bg(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,Ou(),ft=t,Q=a=Ve(t.current,null),Z=e,ut=0,ge=null,va=!1,Tl=_l(t,e),Eu=!1,Ml=me=zu=Za=pa=bt=0,ae=mn=null,wu=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-ce(l),i=1<<n;e|=t[n],l&=~i}return ta=e,kn(),a}function rd(t,e){G=null,p.H=un,e===gl||e===$n?(e=Ec(),ut=3):e===Us?(e=Ec(),ut=4):ut=e===ru?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,Q===null&&(bt=1,hi(t,Me(e,t.current)))}function dd(){var t=fe.current;return t===null?!0:(Z&4194048)===Z?ze===null:(Z&62914560)===Z||(Z&536870912)!==0?t===ze:!1}function fd(){var t=p.H;return p.H=un,t===null?un:t}function hd(){var t=p.A;return p.A=Fh,t}function Ci(){bt=4,va||(Z&4194048)!==Z&&fe.current!==null||(Tl=!0),(pa&134217727)===0&&(Za&134217727)===0||ft===null||Sa(ft,Z,me,!1)}function Hu(t,e,a){var l=et;et|=2;var n=fd(),i=hd();(ft!==t||Z!==e)&&(Mi=null,Cl(t,e)),e=!1;var s=bt;t:do try{if(ut!==0&&Q!==null){var u=Q,o=ge;switch(ut){case 8:Ou(),s=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var g=ut;if(ut=0,ge=null,El(t,u,o,g),a&&Tl){s=0;break t}break;default:g=ut,ut=0,ge=null,El(t,u,o,g)}}tg(),s=bt;break}catch(b){rd(t,b)}while(!0);return e&&t.shellSuspendCounter++,Xe=Ba=null,et=l,p.H=n,p.A=i,Q===null&&(ft=null,Z=0,kn()),s}function tg(){for(;Q!==null;)gd(Q)}function eg(t,e){var a=et;et|=2;var l=fd(),n=hd();ft!==t||Z!==e?(Mi=null,Ti=ue()+500,Cl(t,e)):Tl=_l(t,e);t:do try{if(ut!==0&&Q!==null){e=Q;var i=ge;e:switch(ut){case 1:ut=0,ge=null,El(t,e,i,1);break;case 2:case 9:if(Dc(i)){ut=0,ge=null,md(e);break}e=function(){ut!==2&&ut!==9||ft!==t||(ut=7),je(t)},i.then(e,e);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:Dc(i)?(ut=0,ge=null,md(e)):(ut=0,ge=null,El(t,e,i,7));break;case 5:var s=null;switch(Q.tag){case 26:s=Q.memoizedState;case 5:case 27:var u=Q;if(s?tf(s):u.stateNode.complete){ut=0,ge=null;var o=u.sibling;if(o!==null)Q=o;else{var g=u.return;g!==null?(Q=g,Ei(g)):Q=null}break e}}ut=0,ge=null,El(t,e,i,5);break;case 6:ut=0,ge=null,El(t,e,i,6);break;case 8:Ou(),bt=6;break t;default:throw Error(f(462))}}ag();break}catch(b){rd(t,b)}while(!0);return Xe=Ba=null,p.H=l,p.A=n,et=a,Q!==null?0:(ft=null,Z=0,kn(),bt)}function ag(){for(;Q!==null&&!Cf();)gd(Q)}function gd(t){var e=jr(t.alternate,t,ta);t.memoizedProps=t.pendingProps,e===null?Ei(t):Q=e}function md(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Or(a,e,e.pendingProps,e.type,void 0,Z);break;case 11:e=Or(a,e,e.pendingProps,e.type.render,e.ref,Z);break;case 5:Js(e);default:Lr(a,e),e=Q=hc(e,ta),e=jr(a,e,ta)}t.memoizedProps=t.pendingProps,e===null?Ei(t):Q=e}function El(t,e,a,l){Xe=Ba=null,Js(e),ml=null,Pl=0;var n=e.return;try{if(Xh(t,n,e,a,Z)){bt=1,hi(t,Me(a,t.current)),Q=null;return}}catch(i){if(n!==null)throw Q=n,i;bt=1,hi(t,Me(a,t.current)),Q=null;return}e.flags&32768?(J||l===1?t=!0:Tl||(Z&536870912)!==0?t=!1:(va=t=!0,(l===2||l===9||l===3||l===6)&&(l=fe.current,l!==null&&l.tag===13&&(l.flags|=16384))),vd(e,t)):Ei(e)}function Ei(t){var e=t;do{if((e.flags&32768)!==0){vd(e,va);return}t=e.return;var a=Kh(e.alternate,e,ta);if(a!==null){Q=a;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);bt===0&&(bt=5)}function vd(t,e){do{var a=Jh(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);bt=6,Q=null}function pd(t,e,a,l,n,i,s,u,o){t.cancelPendingCommit=null;do zi();while(Rt!==0);if((et&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=As,_f(t,a,i,s,u,o),t===ft&&(Q=ft=null,Z=0),Dl=e,ba=t,ea=a,xu=i,Nu=n,sd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sg(xn,function(){return Td(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=p.T,p.T=null,n=C.p,C.p=2,s=et,et|=4;try{Ih(t,e,a)}finally{et=s,C.p=n,p.T=l}}Rt=1,yd(),bd(),Sd()}}function yd(){if(Rt===1){Rt=0;var t=ba,e=Dl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=p.T,p.T=null;var l=C.p;C.p=2;var n=et;et|=4;try{Pr(e,t);var i=ku,s=nc(t.containerInfo),u=i.focusedElem,o=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&lc(u.ownerDocument.documentElement,u)){if(o!==null&&vs(u)){var g=o.start,b=o.end;if(b===void 0&&(b=g),"selectionStart"in u)u.selectionStart=g,u.selectionEnd=Math.min(b,u.value.length);else{var A=u.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var v=m.getSelection(),z=u.textContent.length,q=Math.min(o.start,z),dt=o.end===void 0?q:Math.min(o.end,z);!v.extend&&q>dt&&(s=dt,dt=q,q=s);var d=ac(u,q),c=ac(u,dt);if(d&&c&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var h=A.createRange();h.setStart(d.node,d.offset),v.removeAllRanges(),q>dt?(v.addRange(h),v.extend(c.node,c.offset)):(h.setEnd(c.node,c.offset),v.addRange(h))}}}}for(A=[],v=u;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var S=A[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Gi=!!Xu,ku=Xu=null}finally{et=n,C.p=l,p.T=a}}t.current=e,Rt=2}}function bd(){if(Rt===2){Rt=0;var t=ba,e=Dl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=p.T,p.T=null;var l=C.p;C.p=2;var n=et;et|=4;try{Kr(t,e.alternate,e)}finally{et=n,C.p=l,p.T=a}}Rt=3}}function Sd(){if(Rt===4||Rt===3){Rt=0,Ef();var t=ba,e=Dl,a=ea,l=sd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Rt=5:(Rt=0,Dl=ba=null,Ad(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ya=null),Fi(a),e=e.stateNode,oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(ql,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=p.T,n=C.p,C.p=2,p.T=null;try{for(var i=t.onRecoverableError,s=0;s<l.length;s++){var u=l[s];i(u.value,{componentStack:u.stack})}}finally{p.T=e,C.p=n}}(ea&3)!==0&&zi(),je(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Ru?vn++:(vn=0,Ru=t):vn=0,pn(0)}}function Ad(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wl(e)))}function zi(){return yd(),bd(),Sd(),Td()}function Td(){if(Rt!==5)return!1;var t=ba,e=xu;xu=0;var a=Fi(ea),l=p.T,n=C.p;try{C.p=32>a?32:a,p.T=null,a=Nu,Nu=null;var i=ba,s=ea;if(Rt=0,Dl=ba=null,ea=0,(et&6)!==0)throw Error(f(331));var u=et;if(et|=4,ld(i.current),td(i,i.current,s,a),et=u,pn(0,!1),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{C.p=n,p.T=l,Ad(t,e)}}function Md(t,e,a){e=Me(a,e),e=cu(t.stateNode,e,2),t=fa(t,e,2),t!==null&&(Ul(t,2),je(t))}function ot(t,e,a){if(t.tag===3)Md(t,t,a);else for(;e!==null;){if(e.tag===3){Md(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ya===null||!ya.has(l))){t=Me(a,t),a=Dr(2),l=fa(e,a,2),l!==null&&(Cr(a,l,e,t),Ul(l,2),je(l));break}}e=e.return}}function qu(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ph;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Eu=!0,n.add(a),t=lg.bind(null,t,e,a),e.then(t,t))}function lg(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ft===t&&(Z&a)===a&&(bt===4||bt===3&&(Z&62914560)===Z&&300>ue()-Ai?(et&2)===0&&Cl(t,0):zu|=a,Ml===Z&&(Ml=0)),je(t)}function Dd(t,e){e===0&&(e=yo()),t=qa(t,e),t!==null&&(Ul(t,e),je(t))}function ng(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Dd(t,a)}function ig(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),Dd(t,a)}function sg(t,e){return Ki(t,e)}var wi=null,zl=null,_u=!1,xi=!1,Uu=!1,Aa=0;function je(t){t!==zl&&t.next===null&&(zl===null?wi=zl=t:zl=zl.next=t),xi=!0,_u||(_u=!0,og())}function pn(t,e){if(!Uu&&xi){Uu=!0;do for(var a=!1,l=wi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-ce(42|t)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,wd(l,i))}else i=Z,i=Hn(l,l===ft?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||_l(l,i)||(a=!0,wd(l,i));l=l.next}while(a);Uu=!1}}function ug(){Cd()}function Cd(){xi=_u=!1;var t=0;Aa!==0&&yg()&&(t=Aa);for(var e=ue(),a=null,l=wi;l!==null;){var n=l.next,i=Ed(l,e);i===0?(l.next=null,a===null?wi=n:a.next=n,n===null&&(zl=a)):(a=l,(t!==0||(i&3)!==0)&&(xi=!0)),l=n}Rt!==0&&Rt!==5||pn(t),Aa!==0&&(Aa=0)}function Ed(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-ce(i),u=1<<s,o=n[s];o===-1?((u&a)===0||(u&l)!==0)&&(n[s]=qf(u,e)):o<=e&&(t.expiredLanes|=u),i&=~u}if(e=ft,a=Z,a=Hn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||_l(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Ji(l),Fi(a)){case 2:case 8:a=vo;break;case 32:a=xn;break;case 268435456:a=po;break;default:a=xn}return l=zd.bind(null,t),a=Ki(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Ji(l),t.callbackPriority=2,t.callbackNode=null,2}function zd(t,e){if(Rt!==0&&Rt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zi()&&t.callbackNode!==a)return null;var l=Z;return l=Hn(t,t===ft?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(od(t,l,e),Ed(t,ue()),t.callbackNode!=null&&t.callbackNode===a?zd.bind(null,t):null)}function wd(t,e){if(zi())return null;od(t,e,!0)}function og(){Sg(function(){(et&6)!==0?Ki(mo,ug):Cd()})}function Bu(){if(Aa===0){var t=fl;t===0&&(t=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),Aa=t}return Aa}function xd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bn(""+t)}function Nd(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function cg(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=xd((n[Ft]||null).action),s=l.submitter;s&&(e=(e=s[Ft]||null)?xd(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var u=new Yn("action","action",null,l,n);t.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Aa!==0){var o=s?Nd(n,s):new FormData(n);lu(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=s?Nd(n,s):new FormData(n),lu(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var ju=0;ju<Ss.length;ju++){var Gu=Ss[ju],rg=Gu.toLowerCase(),dg=Gu[0].toUpperCase()+Gu.slice(1);Ne(rg,"on"+dg)}Ne(uc,"onAnimationEnd"),Ne(oc,"onAnimationIteration"),Ne(cc,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(zh,"onTransitionRun"),Ne(wh,"onTransitionStart"),Ne(xh,"onTransitionCancel"),Ne(rc,"onTransitionEnd"),Pa("onMouseEnter",["mouseout","mouseover"]),Pa("onMouseLeave",["mouseout","mouseover"]),Pa("onPointerEnter",["pointerout","pointerover"]),Pa("onPointerLeave",["pointerout","pointerover"]),Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Na("onBeforeInput",["compositionend","keypress","textInput","paste"]),Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn));function Rd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var s=l.length-1;0<=s;s--){var u=l[s],o=u.instance,g=u.currentTarget;if(u=u.listener,o!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=g;try{i(n)}catch(b){Xn(b)}n.currentTarget=null,i=o}else for(s=0;s<l.length;s++){if(u=l[s],o=u.instance,g=u.currentTarget,u=u.listener,o!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=g;try{i(n)}catch(b){Xn(b)}n.currentTarget=null,i=o}}}}function X(t,e){var a=e[Pi];a===void 0&&(a=e[Pi]=new Set);var l=t+"__bubble";a.has(l)||(Od(e,t,2,!1),a.add(l))}function Lu(t,e,a){var l=0;e&&(l|=4),Od(a,t,l,e)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Yu(t){if(!t[Ni]){t[Ni]=!0,Co.forEach(function(a){a!=="selectionchange"&&(fg.has(a)||Lu(a,!1,t),Lu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ni]||(e[Ni]=!0,Lu("selectionchange",!1,e))}}function Od(t,e,a,l){switch(of(e)){case 2:var n=Lg;break;case 8:n=Yg;break;default:n=ao}a=n.bind(null,e,a,t),n=void 0,!us||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Vu(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var u=l.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=l.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=Ia(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){l=i=s;continue t}u=u.parentNode}}l=l.return}Bo(function(){var g=i,b=is(a),A=[];t:{var m=dc.get(t);if(m!==void 0){var v=Yn,z=t;switch(t){case"keypress":if(Gn(a)===0)break t;case"keydown":case"keyup":v=ih;break;case"focusin":z="focus",v=ds;break;case"focusout":z="blur",v=ds;break;case"beforeblur":case"afterblur":v=ds;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=oh;break;case uc:case oc:case cc:v=Wf;break;case rc:v=rh;break;case"scroll":case"scrollend":v=kf;break;case"wheel":v=fh;break;case"copy":case"cut":case"paste":v=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vo;break;case"toggle":case"beforetoggle":v=gh}var q=(e&4)!==0,dt=!q&&(t==="scroll"||t==="scrollend"),d=q?m!==null?m+"Capture":null:m;q=[];for(var c=g,h;c!==null;){var S=c;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||d===null||(S=Gl(c,d),S!=null&&q.push(bn(c,S,h))),dt)break;c=c.return}0<q.length&&(m=new v(m,z,null,a,b),A.push({event:m,listeners:q}))}}if((e&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&a!==ns&&(z=a.relatedTarget||a.fromElement)&&(Ia(z)||z[Ja]))break t;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(z=a.relatedTarget||a.toElement,v=g,z=z?Ia(z):null,z!==null&&(dt=I(z),q=z.tag,z!==dt||q!==5&&q!==27&&q!==6)&&(z=null)):(v=null,z=g),v!==z)){if(q=Lo,S="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(q=Vo,S="onPointerLeave",d="onPointerEnter",c="pointer"),dt=v==null?m:jl(v),h=z==null?m:jl(z),m=new q(S,c+"leave",v,a,b),m.target=dt,m.relatedTarget=h,S=null,Ia(b)===g&&(q=new q(d,c+"enter",z,a,b),q.target=h,q.relatedTarget=dt,S=q),dt=S,v&&z)e:{for(q=hg,d=v,c=z,h=0,S=d;S;S=q(S))h++;S=0;for(var O=c;O;O=q(O))S++;for(;0<h-S;)d=q(d),h--;for(;0<S-h;)c=q(c),S--;for(;h--;){if(d===c||c!==null&&d===c.alternate){q=d;break e}d=q(d),c=q(c)}q=null}else q=null;v!==null&&Hd(A,m,v,q,!1),z!==null&&dt!==null&&Hd(A,dt,z,q,!0)}}t:{if(m=g?jl(g):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var $=Wo;else if(Jo(m))if(Fo)$=Dh;else{$=Th;var R=Ah}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?g&&ls(g.elementType)&&($=Wo):$=Mh;if($&&($=$(t,g))){Io(A,$,a,b);break t}R&&R(t,m,g),t==="focusout"&&g&&m.type==="number"&&g.memoizedProps.value!=null&&as(m,"number",m.value)}switch(R=g?jl(g):window,t){case"focusin":(Jo(R)||R.contentEditable==="true")&&(nl=R,ps=g,Kl=null);break;case"focusout":Kl=ps=nl=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,ic(A,a,b);break;case"selectionchange":if(Eh)break;case"keydown":case"keyup":ic(A,a,b)}var L;if(hs)t:{switch(t){case"compositionstart":var K="onCompositionStart";break t;case"compositionend":K="onCompositionEnd";break t;case"compositionupdate":K="onCompositionUpdate";break t}K=void 0}else ll?Zo(t,a)&&(K="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(Qo&&a.locale!=="ko"&&(ll||K!=="onCompositionStart"?K==="onCompositionEnd"&&ll&&(L=jo()):(ia=b,os="value"in ia?ia.value:ia.textContent,ll=!0)),R=Ri(g,K),0<R.length&&(K=new Yo(K,t,null,a,b),A.push({event:K,listeners:R}),L?K.data=L:(L=Ko(a),L!==null&&(K.data=L)))),(L=vh?ph(t,a):yh(t,a))&&(K=Ri(g,"onBeforeInput"),0<K.length&&(R=new Yo("onBeforeInput","beforeinput",null,a,b),A.push({event:R,listeners:K}),R.data=L)),cg(A,t,g,a,b)}Rd(A,e)})}function bn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ri(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Gl(t,a),n!=null&&l.unshift(bn(t,n,i)),n=Gl(t,e),n!=null&&l.push(bn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function hg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hd(t,e,a,l,n){for(var i=e._reactName,s=[];a!==null&&a!==l;){var u=a,o=u.alternate,g=u.stateNode;if(u=u.tag,o!==null&&o===l)break;u!==5&&u!==26&&u!==27||g===null||(o=g,n?(g=Gl(a,i),g!=null&&s.unshift(bn(a,g,o))):n||(g=Gl(a,i),g!=null&&s.push(bn(a,g,o)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var gg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function qd(t){return(typeof t=="string"?t:""+t).replace(gg,`
`).replace(mg,"")}function _d(t,e){return e=qd(e),qd(t)===e}function rt(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||tl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&tl(t,""+l);break;case"className":_n(t,"class",l);break;case"tabIndex":_n(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(t,a,l);break;case"style":_o(t,l,i);break;case"data":if(e!=="object"){_n(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Bn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&rt(t,e,"name",n.name,n,null),rt(t,e,"formEncType",n.formEncType,n,null),rt(t,e,"formMethod",n.formMethod,n,null),rt(t,e,"formTarget",n.formTarget,n,null)):(rt(t,e,"encType",n.encType,n,null),rt(t,e,"method",n.method,n,null),rt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Bn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Le);break;case"onScroll":l!=null&&X("scroll",t);break;case"onScrollEnd":l!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Bn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":X("beforetoggle",t),X("toggle",t),qn(t,"popover",l);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qf.get(a)||a,qn(t,a,l))}}function Qu(t,e,a,l,n,i){switch(a){case"style":_o(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"children":typeof l=="string"?tl(t,l):(typeof l=="number"||typeof l=="bigint")&&tl(t,""+l);break;case"onScroll":l!=null&&X("scroll",t);break;case"onScrollEnd":l!=null&&X("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Le);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Ft]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):qn(t,a,l)}}}function Qt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:rt(t,e,i,s,a,null)}}n&&rt(t,e,"srcSet",a.srcSet,a,null),l&&rt(t,e,"src",a.src,a,null);return;case"input":X("invalid",t);var u=i=s=n=null,o=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":s=b;break;case"checked":o=b;break;case"defaultChecked":g=b;break;case"value":i=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:rt(t,e,l,b,a,null)}}Ro(t,i,u,o,g,s,n,!1);return;case"select":X("invalid",t),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":l=u;default:rt(t,e,n,u,a,null)}e=i,a=s,t.multiple=!!l,e!=null?$a(t,!!l,e,!1):a!=null&&$a(t,!!l,a,!0);return;case"textarea":X("invalid",t),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:rt(t,e,s,u,a,null)}Ho(t,l,n,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:rt(t,e,o,l,a,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(l=0;l<yn.length;l++)X(yn[l],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:rt(t,e,g,l,a,null)}return;default:if(ls(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Qu(t,e,b,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&rt(t,e,u,l,a,null))}function vg(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,o=null,g=null,b=null;for(v in a){var A=a[v];if(a.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=A;default:l.hasOwnProperty(v)||rt(t,e,v,null,l,A)}}for(var m in l){var v=l[m];if(A=a[m],l.hasOwnProperty(m)&&(v!=null||A!=null))switch(m){case"type":i=v;break;case"name":n=v;break;case"checked":g=v;break;case"defaultChecked":b=v;break;case"value":s=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,e));break;default:v!==A&&rt(t,e,m,v,l,A)}}es(t,s,u,o,g,b,i,n);return;case"select":v=s=u=m=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":v=o;default:l.hasOwnProperty(i)||rt(t,e,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":m=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==o&&rt(t,e,n,i,l,o)}e=u,a=s,l=v,m!=null?$a(t,!!a,m,!1):!!l!=!!a&&(e!=null?$a(t,!!a,e,!0):$a(t,!!a,a?[]:"",!1));return;case"textarea":v=m=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:rt(t,e,u,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":m=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&rt(t,e,s,n,l,i)}Oo(t,m,v);return;case"option":for(var z in a)if(m=a[z],a.hasOwnProperty(z)&&m!=null&&!l.hasOwnProperty(z))switch(z){case"selected":t.selected=!1;break;default:rt(t,e,z,null,l,m)}for(o in l)if(m=l[o],v=a[o],l.hasOwnProperty(o)&&m!==v&&(m!=null||v!=null))switch(o){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:rt(t,e,o,m,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in a)m=a[q],a.hasOwnProperty(q)&&m!=null&&!l.hasOwnProperty(q)&&rt(t,e,q,null,l,m);for(g in l)if(m=l[g],v=a[g],l.hasOwnProperty(g)&&m!==v&&(m!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(137,e));break;default:rt(t,e,g,m,l,v)}return;default:if(ls(e)){for(var dt in a)m=a[dt],a.hasOwnProperty(dt)&&m!==void 0&&!l.hasOwnProperty(dt)&&Qu(t,e,dt,void 0,l,m);for(b in l)m=l[b],v=a[b],!l.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Qu(t,e,b,m,l,v);return}}for(var d in a)m=a[d],a.hasOwnProperty(d)&&m!=null&&!l.hasOwnProperty(d)&&rt(t,e,d,null,l,m);for(A in l)m=l[A],v=a[A],!l.hasOwnProperty(A)||m===v||m==null&&v==null||rt(t,e,A,m,l,v)}function Ud(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&Ud(s)){for(s=0,u=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],g=o.startTime;if(g>u)break;var b=o.transferSize,A=o.initiatorType;b&&Ud(A)&&(o=o.responseEnd,s+=b*(o<u?1:(u-g)/(o-g)))}if(--l,e+=8*(i+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xu=null,ku=null;function Oi(t){return t.nodeType===9?t:t.ownerDocument}function Bd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=null;function yg(){var t=window.event;return t&&t.type==="popstate"?t===Ku?!1:(Ku=t,!0):(Ku=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch(Ag)}:Gd;function Ag(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Yd(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Rl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Sn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Sn(a);for(var i=a.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Bl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&Sn(t.ownerDocument.body);a=n}while(a);Rl(e)}function Vd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Ju(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ju(a),$i(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tg(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Bl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=we(t.nextSibling),t===null)break}return null}function Mg(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=we(t.nextSibling),t===null))return null;return t}function Qd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=we(t.nextSibling),t===null))return null;return t}function Iu(t){return t.data==="$?"||t.data==="$~"}function Wu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Dg(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function we(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fu=null;function Xd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return we(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Zd(t,e,a){switch(e=Oi(a),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Sn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$i(t)}var xe=new Map,Kd=new Set;function Hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=C.d;C.d={f:Cg,r:Eg,D:zg,C:wg,L:xg,m:Ng,X:Og,S:Rg,M:Hg};function Cg(){var t=aa.f(),e=Di();return t||e}function Eg(t){var e=Wa(t);e!==null&&e.tag===5&&e.type==="form"?rr(e):aa.r(t)}var wl=typeof document>"u"?null:document;function Jd(t,e,a){var l=wl;if(l&&typeof e=="string"&&e){var n=Ae(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Kd.has(n)||(Kd.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Qt(e,"link",t),Ht(e),l.head.appendChild(e)))}}function zg(t){aa.D(t),Jd("dns-prefetch",t,null)}function wg(t,e){aa.C(t,e),Jd("preconnect",t,e)}function xg(t,e,a){aa.L(t,e,a);var l=wl;if(l&&t&&e){var n='link[rel="preload"][as="'+Ae(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ae(a.imageSizes)+'"]')):n+='[href="'+Ae(t)+'"]';var i=n;switch(e){case"style":i=xl(t);break;case"script":i=Nl(t)}xe.has(i)||(t=H({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),xe.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(An(i))||e==="script"&&l.querySelector(Tn(i))||(e=l.createElement("link"),Qt(e,"link",t),Ht(e),l.head.appendChild(e)))}}function Ng(t,e){aa.m(t,e);var a=wl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Ae(l)+'"][href="'+Ae(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nl(t)}if(!xe.has(i)&&(t=H({rel:"modulepreload",href:t},e),xe.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Qt(l,"link",t),Ht(l),a.head.appendChild(l)}}}function Rg(t,e,a){aa.S(t,e,a);var l=wl;if(l&&t){var n=Fa(l).hoistableStyles,i=xl(t);e=e||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=l.querySelector(An(i)))u.loading=5;else{t=H({rel:"stylesheet",href:t,"data-precedence":e},a),(a=xe.get(i))&&Pu(t,a);var o=s=l.createElement("link");Ht(o),Qt(o,"link",t),o._p=new Promise(function(g,b){o.onload=g,o.onerror=b}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,qi(s,e,l)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function Og(t,e){aa.X(t,e);var a=wl;if(a&&t){var l=Fa(a).hoistableScripts,n=Nl(t),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(t=H({src:t,async:!0},e),(e=xe.get(n))&&$u(t,e),i=a.createElement("script"),Ht(i),Qt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hg(t,e){aa.M(t,e);var a=wl;if(a&&t){var l=Fa(a).hoistableScripts,n=Nl(t),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(t=H({src:t,async:!0,type:"module"},e),(e=xe.get(n))&&$u(t,e),i=a.createElement("script"),Ht(i),Qt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Id(t,e,a,l){var n=(n=Y.current)?Hi(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=xl(a.href),a=Fa(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xl(a.href);var i=Fa(n).hoistableStyles,s=i.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=n.querySelector(An(t)))&&!i._p&&(s.instance=i,s.state.loading=5),xe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xe.set(t,a),i||qg(n,t,a,s.state))),e&&l===null)throw Error(f(528,""));return s}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Nl(a),a=Fa(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function xl(t){return'href="'+Ae(t)+'"'}function An(t){return'link[rel="stylesheet"]['+t+"]"}function Wd(t){return H({},t,{"data-precedence":t.precedence,precedence:null})}function qg(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Qt(e,"link",a),Ht(e),t.head.appendChild(e))}function Nl(t){return'[src="'+Ae(t)+'"]'}function Tn(t){return"script[async]"+t}function Fd(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ae(a.href)+'"]');if(l)return e.instance=l,Ht(l),l;var n=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ht(l),Qt(l,"style",n),qi(l,a.precedence,t),e.instance=l;case"stylesheet":n=xl(a.href);var i=t.querySelector(An(n));if(i)return e.state.loading|=4,e.instance=i,Ht(i),i;l=Wd(a),(n=xe.get(n))&&Pu(l,n),i=(t.ownerDocument||t).createElement("link"),Ht(i);var s=i;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),Qt(i,"link",l),e.state.loading|=4,qi(i,a.precedence,t),e.instance=i;case"script":return i=Nl(a.src),(n=t.querySelector(Tn(i)))?(e.instance=n,Ht(n),n):(l=a,(n=xe.get(i))&&(l=H({},a),$u(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ht(n),Qt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,qi(l,a.precedence,t));return e.instance}function qi(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var u=l[s];if(u.dataset.precedence===e)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Pu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $u(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _i=null;function Pd(t,e,a){if(_i===null){var l=new Map,n=_i=new Map;n.set(a,l)}else n=_i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Bl]||i[Gt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var u=l.get(s);u?u.push(i):l.set(s,[i])}}return l}function $d(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function _g(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ug(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=xl(l.href),i=e.querySelector(An(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ui.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Ht(i);return}i=e.ownerDocument||e,l=Wd(l),(n=xe.get(n))&&Pu(l,n),i=i.createElement("link"),Ht(i);var s=i;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),Qt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ui.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var to=0;function Bg(t,e){return t.stylesheets&&t.count===0&&ji(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&ji(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&to===0&&(to=62500*pg());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ji(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>to?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ji(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bi=null;function ji(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bi=new Map,e.forEach(jg,t),Bi=null,Ui.call(t))}function jg(t,e){if(!(e.state.loading&4)){var a=Bi.get(t);if(a)var l=a.get(null);else{a=new Map,Bi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=e.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=Ui.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Mn={$$typeof:Dt,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Gg(t,e,a,l,n,i,s,u,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ef(t,e,a,l,n,i,s,u,o,g,b,A){return t=new Gg(t,e,a,s,o,g,b,A,u),e=1,i===!0&&(e|=24),i=de(3,null,null,e),t.current=i,i.stateNode=t,e=Hs(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Bs(i),t}function af(t){return t?(t=ul,t):ul}function lf(t,e,a,l,n,i){n=af(n),l.context===null?l.context=n:l.pendingContext=n,l=da(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=fa(t,l,e),a!==null&&(le(a,t,e),tn(a,t,e))}function nf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function eo(t,e){nf(t,e),(t=t.alternate)&&nf(t,e)}function sf(t){if(t.tag===13||t.tag===31){var e=qa(t,67108864);e!==null&&le(e,t,67108864),eo(t,67108864)}}function uf(t){if(t.tag===13||t.tag===31){var e=ve();e=Wi(e);var a=qa(t,e);a!==null&&le(a,t,e),eo(t,e)}}var Gi=!0;function Lg(t,e,a,l){var n=p.T;p.T=null;var i=C.p;try{C.p=2,ao(t,e,a,l)}finally{C.p=i,p.T=n}}function Yg(t,e,a,l){var n=p.T;p.T=null;var i=C.p;try{C.p=8,ao(t,e,a,l)}finally{C.p=i,p.T=n}}function ao(t,e,a,l){if(Gi){var n=lo(l);if(n===null)Vu(t,e,l,Li,a),cf(t,l);else if(Qg(n,t,e,a,l))l.stopPropagation();else if(cf(t,l),e&4&&-1<Vg.indexOf(t)){for(;n!==null;){var i=Wa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=xa(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-ce(s);u.entanglements[1]|=o,s&=~o}je(i),(et&6)===0&&(Ti=ue()+500,pn(0))}}break;case 31:case 13:u=qa(i,2),u!==null&&le(u,i,2),Di(),eo(i,2)}if(i=lo(l),i===null&&Vu(t,e,l,Li,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Vu(t,e,l,null,a)}}function lo(t){return t=is(t),no(t)}var Li=null;function no(t){if(Li=null,t=Ia(t),t!==null){var e=I(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=W(e),t!==null)return t;t=null}else if(a===31){if(t=Tt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Li=t,null}function of(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zf()){case mo:return 2;case vo:return 8;case xn:case wf:return 32;case po:return 268435456;default:return 32}default:return 32}}var io=!1,Ma=null,Da=null,Ca=null,Dn=new Map,Cn=new Map,Ea=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cf(t,e){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Dn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(e.pointerId)}}function En(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Wa(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Qg(t,e,a,l,n){switch(e){case"focusin":return Ma=En(Ma,t,e,a,l,n),!0;case"dragenter":return Da=En(Da,t,e,a,l,n),!0;case"mouseover":return Ca=En(Ca,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Dn.set(i,En(Dn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,En(Cn.get(i)||null,t,e,a,l,n)),!0}return!1}function rf(t){var e=Ia(t.target);if(e!==null){var a=I(e);if(a!==null){if(e=a.tag,e===13){if(e=W(a),e!==null){t.blockedOn=e,Mo(t.priority,function(){uf(a)});return}}else if(e===31){if(e=Tt(a),e!==null){t.blockedOn=e,Mo(t.priority,function(){uf(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=lo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ns=l,a.target.dispatchEvent(l),ns=null}else return e=Wa(a),e!==null&&sf(e),t.blockedOn=a,!1;e.shift()}return!0}function df(t,e,a){Yi(t)&&a.delete(e)}function Xg(){io=!1,Ma!==null&&Yi(Ma)&&(Ma=null),Da!==null&&Yi(Da)&&(Da=null),Ca!==null&&Yi(Ca)&&(Ca=null),Dn.forEach(df),Cn.forEach(df)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,io||(io=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Xg)))}var Qi=null;function ff(t){Qi!==t&&(Qi=t,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Qi===t&&(Qi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(no(l||a)===null)continue;break}var i=Wa(a);i!==null&&(t.splice(e,3),e-=3,lu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Rl(t){function e(o){return Vi(o,t)}Ma!==null&&Vi(Ma,t),Da!==null&&Vi(Da,t),Ca!==null&&Vi(Ca,t),Dn.forEach(e),Cn.forEach(e);for(var a=0;a<Ea.length;a++){var l=Ea[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)rf(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[Ft]||null;if(typeof i=="function")s||ff(a);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[Ft]||null)u=s.formAction;else if(no(n)!==null)continue}else u=s.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),ff(a)}}}function hf(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function so(t){this._internalRoot=t}Xi.prototype.render=so.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var a=e.current,l=ve();lf(a,l,t,e,null,null)},Xi.prototype.unmount=so.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lf(t.current,2,null,t,null,null),Di(),e[Ja]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var e=To();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ea.length&&e!==0&&e<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&rf(t)}};var gf=ht.version;if(gf!=="19.2.0")throw Error(f(527,gf,"19.2.0"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=M(e),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var kg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ql=ki.inject(kg),oe=ki}catch{}}return wn.createRoot=function(t,e){if(!j(t))throw Error(f(299));var a=!1,l="",n=Sr,i=Ar,s=Tr;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ef(t,1,!1,null,null,a,l,null,n,i,s,hf),t[Ja]=e.current,Yu(t),new so(e)},wn.hydrateRoot=function(t,e,a){if(!j(t))throw Error(f(299));var l=!1,n="",i=Sr,s=Ar,u=Tr,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),e=ef(t,1,!0,e,a??null,l,n,o,i,s,u,hf),e.context=af(null),a=e.current,l=ve(),l=Wi(l),n=da(l),n.callback=null,fa(a,n,l),a=l,e.current.lanes=a,Ul(e,a),je(e),t[Ja]=e.current,Yu(t),new Xi(e)},wn.version="19.2.0",wn}var Df;function em(){if(Df)return co.exports;Df=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(ht){console.error(ht)}}return x(),co.exports=tm(),co.exports}var am=em();const lm=[{unit:"I",title:"Introduction",notes:"<h3>Unit I Overview</h3><p>This unit covers the basics of Mobile Computing, including paradigms, devices, and the GSM architecture.</p>",topics:[{title:"Mobile Communications",content:`
          <div class="study-guide-box">
            <h4>1. Introduction to Mobile Communication</h4>
            <div class="definition-box">
              <strong>Definition:</strong> Mobile Communication refers to the technology that allows the transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link.
            </div>
            
            <p>It enables users to communicate from any location without being tethered to a specific physical location. This flexibility has revolutionized how we work, socialize, and access information.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Mobility</strong>
                The ability to move freely while maintaining communication.
              </div>
              <div class="concept-card">
                <strong>Portability</strong>
                The ability to easily carry devices (handhelds, wearables).
              </div>
              <div class="concept-card">
                <strong>Connectivity</strong>
                Seamless access to networks (Wi-Fi, Cellular).
              </div>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>2. Evolution of Mobile Radio Communication</h4>
            <p>The journey from analog voice to ultra-fast 5G data has been marked by distinct generations.</p>
            
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Generation</th>
                  <th>Primary Service</th>
                  <th>Key Technology</th>
                  <th>Data Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1G (1980s)</strong></td>
                  <td>Analog Voice</td>
                  <td>AMPS, FDMA</td>
                  <td>2.4 kbps</td>
                </tr>
                <tr>
                  <td><strong>2G (1990s)</strong></td>
                  <td>Digital Voice + SMS</td>
                  <td>GSM, CDMA, TDMA</td>
                  <td>64 kbps</td>
                </tr>
                <tr>
                  <td><strong>3G (2000s)</strong></td>
                  <td>Mobile Internet</td>
                  <td>WCDMA, UMTS</td>
                  <td>2 Mbps</td>
                </tr>
                <tr>
                  <td><strong>4G (2010s)</strong></td>
                  <td>High-Speed IP Data</td>
                  <td>LTE, WiMAX, OFDM</td>
                  <td>100 Mbps - 1 Gbps</td>
                </tr>
                <tr>
                  <td><strong>5G (2020s)</strong></td>
                  <td>IoT, Ultra-Low Latency</td>
                  <td>NR (New Radio), mmWave</td>
                  <td>10 Gbps+</td>
                </tr>
              </tbody>
            </table>

            <div class="deep-dive-box">
              <h5>🚀 Deep Dive: Why 5G is a Game Changer</h5>
              <p>5G isn't just faster 4G. It introduces <strong>Network Slicing</strong>, allowing operators to create virtual networks for specific use cases (e.g., a low-latency slice for autonomous cars and a high-bandwidth slice for 4K streaming) on the same physical infrastructure.</p>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>3. Wireless Transmission Basics</h4>
            <p>Understanding how signals travel is crucial.</p>
            
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Transmitter</div>
                <div class="diagram-arrow">Signal (EM Waves)</div>
                <div class="diagram-box">Receiver</div>
              </div>
            </div>

            <ul>
              <li><strong>Frequencies:</strong> Mobile networks operate in the Radio Frequency (RF) spectrum (e.g., 900 MHz, 1800 MHz, 2.4 GHz).</li>
              <li><strong>Signals:</strong> Physical representation of data. Can be Analog (continuous) or Digital (discrete).</li>
              <li><strong>Antennas:</strong> Convert electrical signals into electromagnetic waves and vice-versa.</li>
            </ul>

            <div class="example-box">
              <strong>Real World Example:</strong> When you talk on your phone, your voice (analog) is converted to digital data, modulated onto a radio wave by the antenna, and transmitted to the nearest cell tower.
            </div>
          </div>
        `},{title:"Mobile Computing - Paradigm & Architecture",content:`
          <div class="study-guide-box">
            <h4>1. The Mobile Computing Paradigm</h4>
            <p>Mobile Computing is a generic term describing your ability to use technology while moving, as opposed to portable computers, which are only practical for use while deployed in a stationary configuration.</p>

            <div class="definition-box">
              <strong>Core Concept:</strong> "Anytime, Anywhere" computing. It brings the power of a desktop computer to a handheld device, untethered by wires.
            </div>

            <h5>Key Characteristics:</h5>
            <ul>
              <li><strong>Ubiquity:</strong> Available everywhere.</li>
              <li><strong>Location Awareness:</strong> Devices know where they are (GPS).</li>
              <li><strong>Adaptation:</strong> Systems adapt to changing bandwidth and resources.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>2. 3-Tier Architecture</h4>
            <p>Mobile applications typically follow a 3-tier structure to manage resources efficiently.</p>

            <div class="diagram-container">
              <div class="diagram-box" style="background:#e0f2fe">Tier 1: Presentation (Client)</div>
              <div class="diagram-arrow">⬇⬆ User Interface / Input</div>
              <div class="diagram-box" style="background:#f0fdf4">Tier 2: Application (Middle)</div>
              <div class="diagram-arrow">⬇⬆ Business Logic / Processing</div>
              <div class="diagram-box" style="background:#fff7ed">Tier 3: Data (Database)</div>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Tier 1: Client</strong>
                Runs on the mobile device. Handles UI and user input. Lightweight to save battery.
              </div>
              <div class="concept-card">
                <strong>Tier 2: Application</strong>
                Runs on a server (e.g., Web Server). Processes data, handles logic, and formats content for the mobile.
              </div>
              <div class="concept-card">
                <strong>Tier 3: Data</strong>
                The backend database. Stores user profiles, content, and logs. Secure and scalable.
              </div>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>3. Novel Applications</h4>
            <p>Mobile computing enables applications that were previously impossible.</p>
            <ul>
              <li><strong>LBS (Location Based Services):</strong> Uber, Google Maps, "Find my Friends".</li>
              <li><strong>M-Commerce:</strong> Mobile banking, NFC payments (Apple Pay).</li>
              <li><strong>Tele-medicine:</strong> Remote patient monitoring via wearable sensors.</li>
              <li><strong>Smart Cities:</strong> Traffic management, pollution monitoring sensors.</li>
            </ul>
          </div>
        `},{title:"Mobile and Handheld Devices",content:`
          <div class="study-guide-box">
            <h4>Types of Mobile Devices</h4>
            <p>The ecosystem of mobile hardware is vast.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Smartphones</strong>
                General-purpose computers with cellular connectivity. (iPhone, Pixel).
              </div>
              <div class="concept-card">
                <strong>Tablets</strong>
                Larger screens, bridging the gap between phones and laptops. (iPad).
              </div>
              <div class="concept-card">
                <strong>Wearables</strong>
                Body-borne computers. (Smartwatches, AR Glasses).
              </div>
              <div class="concept-card">
                <strong>Sensors (IoT)</strong>
                Low-power devices that gather environmental data. (Temp sensors, GPS trackers).
              </div>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>Limitations of Mobile Devices</h4>
            <p>Designing for mobile is challenging due to inherent hardware constraints.</p>

            <div class="deep-dive-box">
              <h5>1. Battery Power 🔋</h5>
              <p>The biggest bottleneck. Processors and screens are power-hungry. Battery technology (Li-Ion) improves slowly compared to CPU speed (Moore's Law).</p>
              <p><strong>Implication:</strong> Apps must be energy-efficient. Avoid polling; use push notifications.</p>
            </div>

            <div class="deep-dive-box">
              <h5>2. Bandwidth & Connectivity 📶</h5>
              <p>Wireless connections are unstable, slower than wired, and have high latency.</p>
              <p><strong>Implication:</strong> Apps must handle "Offline Mode" gracefully and sync data when connection returns.</p>
            </div>

            <div class="deep-dive-box">
              <h5>3. Screen Size & UI 📱</h5>
              <p>Small screens limit the amount of information displayed.</p>
              <p><strong>Implication:</strong> UI must be simple, uncluttered, and touch-friendly.</p>
            </div>
          </div>
        `},{title:"GSM Architecture & Services",content:`
          <div class="study-guide-box">
            <h4>1. GSM Overview</h4>
            <div class="definition-box">
              <strong>GSM (Global System for Mobile Communications)</strong> is the world's most popular standard for mobile telephony systems. It is a 2G digital technology.
            </div>
          </div>

          <div class="study-guide-box">
            <h4>2. GSM System Architecture</h4>
            <p>The network is divided into three major subsystems.</p>

            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box" style="border-color: #2563eb">Mobile Station (MS)</div>
                <div class="diagram-arrow">Air Interface (Um)</div>
                <div class="diagram-box" style="border-color: #16a34a">Base Station Subsystem (BSS)</div>
                <div class="diagram-arrow">A Interface</div>
                <div class="diagram-box" style="border-color: #dc2626">Network Subsystem (NSS)</div>
              </div>
            </div>

            <h5>A. Mobile Station (MS)</h5>
            <ul>
              <li><strong>Mobile Equipment (ME):</strong> The physical phone. Identified by IMEI.</li>
              <li><strong>Subscriber Identity Module (SIM):</strong> A smart card containing the user's identity (IMSI) and secret keys (Ki) for authentication.</li>
            </ul>

            <h5>B. Base Station Subsystem (BSS)</h5>
            <ul>
              <li><strong>BTS (Base Transceiver Station):</strong> The radio equipment (antennas). Handles signal transmission/reception.</li>
              <li><strong>BSC (Base Station Controller):</strong> The "brain" of the BSS. Manages radio resources, frequency hopping, and handovers between BTSs.</li>
            </ul>

            <h5>C. Network and Switching Subsystem (NSS)</h5>
            <ul>
              <li><strong>MSC (Mobile Switching Center):</strong> The core switch. Routes calls to other MSCs or the PSTN (landline network).</li>
              <li><strong>HLR (Home Location Register):</strong> Database of all permanent subscriber data and their current location (VLR address).</li>
              <li><strong>VLR (Visitor Location Register):</strong> Temporary database of users currently roaming in the MSC's area.</li>
              <li><strong>AuC (Authentication Center):</strong> Stores secret keys for security.</li>
              <li><strong>EIR (Equipment Identity Register):</strong> Database of valid/stolen IMEIs.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>3. GSM Services</h4>
            <table class="comparison-table">
              <tr>
                <th>Service Type</th>
                <th>Description</th>
                <th>Examples</th>
              </tr>
              <tr>
                <td><strong>Teleservices</strong></td>
                <td>End-to-end communication services.</td>
                <td>Voice Calls, SMS, MMS, Fax.</td>
              </tr>
              <tr>
                <td><strong>Bearer Services</strong></td>
                <td>Data transmission services (lower layers).</td>
                <td>Circuit-switched data (9.6 kbps), Packet data (GPRS).</td>
              </tr>
              <tr>
                <td><strong>Supplementary Services</strong></td>
                <td>Add-on features.</td>
                <td>Call Forwarding, Call Waiting, Caller ID, Conference Calling.</td>
              </tr>
            </table>
          </div>
        `}]},{unit:"II",title:"(Wireless) Medium Access Control (MAC)",notes:"<h3>Unit II Overview</h3><p>Focuses on how multiple users share the wireless medium (MAC) and how IP works in mobile environments (Mobile IP).</p>",topics:[{title:"Motivation for Specialized MAC",content:`
          <div class="study-guide-box">
            <h4>Why Standard Ethernet (CSMA/CD) Fails in Wireless</h4>
            <p>In wired networks, we use CSMA/CD (Carrier Sense Multiple Access with Collision Detection). If a collision occurs, the voltage spikes, and everyone stops. In wireless, this is impossible because:</p>
            <ul>
              <li><strong>Signal Attenuation:</strong> The transmitted signal is millions of times stronger than the received signal. A node cannot "hear" a collision while it is transmitting (it deafens itself).</li>
              <li><strong>Hidden Terminal Problem:</strong> Nodes may not hear each other.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>The Hidden Terminal Problem</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">A</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">B</div>
                <div class="diagram-arrow">⬅</div>
                <div class="diagram-box">C</div>
              </div>
            </div>
            <p><strong>Scenario:</strong> A is in range of B. C is in range of B. But A and C are <em>not</em> in range of each other.</p>
            <p><strong>Problem:</strong> A transmits to B. C checks the medium, hears nothing (since A is out of range), and transmits to B. <strong>Collision at B!</strong></p>
          </div>

          <div class="study-guide-box">
            <h4>The Exposed Terminal Problem</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">A</div>
                <div class="diagram-arrow">⬅</div>
                <div class="diagram-box">B</div>
                <div class="diagram-box">C</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">D</div>
              </div>
            </div>
            <p><strong>Scenario:</strong> B sends to A. C wants to send to D.</p>
            <p><strong>Problem:</strong> C hears B transmitting and waits. But C's transmission to D would <em>not</em> interfere with B's transmission to A (since A is out of C's range). <strong>Result:</strong> Unnecessary waiting (wasted bandwidth). </p>
          </div>

          <div class="key-takeaway">
            <strong>Solution:</strong> Wireless networks use <strong>CSMA/CA (Collision Avoidance)</strong> with RTS/CTS (Request to Send / Clear to Send) packets to reserve the medium.
          </div>
        `},{title:"SDMA, FDMA, TDMA, CDMA",content:`
          <div class="study-guide-box">
            <h4>Multiple Access Techniques</h4>
            <p>How do we allow multiple users to talk at the same time?</p>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>SDMA (Space)</strong>
                Control radiated energy into specific sectors.
                <em>Analogy:</em> Two people talking in different rooms.
              </div>
              <div class="concept-card">
                <strong>FDMA (Frequency)</strong>
                Assign distinct frequencies.
                <em>Analogy:</em> Two people talking at different pitches (bass vs soprano).
              </div>
              <div class="concept-card">
                <strong>TDMA (Time)</strong>
                Assign distinct time slots.
                <em>Analogy:</em> Two people taking turns talking.
              </div>
              <div class="concept-card">
                <strong>CDMA (Code)</strong>
                Assign unique mathematical codes.
                <em>Analogy:</em> Two people speaking different languages in the same room.
              </div>
            </div>

            <div class="deep-dive-box">
              <h5>🚀 Deep Dive: CDMA (Code Division Multiple Access)</h5>
              <p>CDMA uses <strong>Spread Spectrum</strong> technology. Each user is assigned a unique <strong>Orthogonal Code</strong> (Chipping Sequence).</p>
              <ul>
                <li>Sender multiplies data bits by the code.</li>
                <li>Receiver multiplies the incoming signal by the same code.</li>
                <li>Other users' signals appear as random noise (interference) and are filtered out.</li>
              </ul>
              <p><strong>Advantage:</strong> Secure, resistant to jamming, and allows soft handovers.</p>
            </div>
          </div>
        `},{title:"Mobile Network Layer (Mobile IP)",content:`
          <div class="study-guide-box">
            <h4>The Problem with Standard IP</h4>
            <p>In standard IP, your IP address identifies <strong>who you are</strong> AND <strong>where you are</strong> (network prefix). If you move to a new network, your IP must change. If your IP changes, all active TCP connections break.</p>
            <div class="definition-box">
              <strong>Mobile IP</strong> is a standard (RFC 3344) that allows a Mobile Node to keep the same IP address (Home Address) while moving across networks.
            </div>
          </div>

          <div class="study-guide-box">
            <h4>Mobile IP Entities</h4>
            <ul>
              <li><strong>Mobile Node (MN):</strong> The device (e.g., laptop) moving around.</li>
              <li><strong>Home Agent (HA):</strong> A router in the MN's home network. It intercepts packets destined for the MN and tunnels them.</li>
              <li><strong>Foreign Agent (FA):</strong> A router in the visited network. It receives tunneled packets and delivers them to the MN.</li>
              <li><strong>Care-of Address (CoA):</strong> A temporary IP address that identifies the MN's current location in the foreign network.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>How It Works (The Process)</h4>
            <ol>
              <li><strong>Agent Discovery:</strong> HA and FA broadcast advertisements. MN listens to determine if it's at home or away.</li>
              <li><strong>Registration:</strong>
                <ul>
                  <li>MN gets a CoA from the FA.</li>
                  <li>MN sends a Registration Request to HA (via FA) saying "I am now at this CoA".</li>
                  <li>HA updates its routing table.</li>
                </ul>
              </li>
              <li><strong>Tunneling (Data Transfer):</strong>
                <ul>
                  <li>Correspondent Node (CN) sends packet to MN's Home Address.</li>
                  <li>HA intercepts the packet.</li>
                  <li>HA <strong>encapsulates</strong> the packet (IP-in-IP) and sends it to the CoA.</li>
                  <li>FA receives, <strong>decapsulates</strong>, and delivers the original packet to MN.</li>
                </ul>
              </li>
            </ol>
          </div>
        `},{title:"DHCP",content:`
          <div class="study-guide-box">
            <h4>DHCP (Dynamic Host Configuration Protocol)</h4>
            <p>A protocol used to automatically assign IP addresses and other network configuration parameters (Subnet mask, Gateway, DNS) to devices.</p>
            
            <div class="example-box">
              <strong>The DORA Process:</strong>
              <ul>
                <li><strong>D</strong>iscover: Client broadcasts "Is there a DHCP server?"</li>
                <li><strong>O</strong>ffer: Server says "Yes, here is an IP (192.168.1.5)."</li>
                <li><strong>R</strong>equest: Client says "I'll take it."</li>
                <li><strong>A</strong>cknowledge: Server says "Confirmed. It's yours for 24 hours."</li>
              </ul>
            </div>
          </div>
        `}]},{unit:"III",title:"Mobile Transport Layer",notes:"<h3>Unit III Overview</h3><p>Covers TCP adaptations for mobile networks and database issues like hoarding and caching.</p>",topics:[{title:"Conventional TCP vs Mobile",content:`
          <div class="study-guide-box">
            <h4>The TCP Problem</h4>
            <p>TCP (Transmission Control Protocol) is tuned for wired networks. It assumes that <strong>Packet Loss = Network Congestion</strong>.</p>
            <p><strong>Reaction:</strong> When a packet is lost, TCP invokes congestion control (slow start), drastically reducing the transmission speed.</p>
            
            <div class="deep-dive-box">
              <h5>Why this is bad for Mobile</h5>
              <p>In wireless networks, packet loss is rarely due to congestion. It is usually due to:</p>
              <ul>
                <li><strong>Bit Errors:</strong> Noise/Interference on the radio link.</li>
                <li><strong>Handovers:</strong> Brief disconnection while switching towers.</li>
              </ul>
              <p><strong>Result:</strong> TCP "thinks" the network is congested and slows down unnecessarily, leading to poor throughput.</p>
            </div>
          </div>
        `},{title:"Indirect TCP (I-TCP)",content:`
          <div class="study-guide-box">
            <h4>Indirect TCP (I-TCP)</h4>
            <p><strong>Idea:</strong> Split the connection into two separate connections.</p>
            
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Fixed Host</div>
                <div class="diagram-arrow">Connection 1 (Standard TCP)</div>
                <div class="diagram-box">Base Station (BS)</div>
                <div class="diagram-arrow">Connection 2 (Wireless TCP)</div>
                <div class="diagram-box">Mobile Host</div>
              </div>
            </div>

            <ul>
              <li><strong>Connection 1:</strong> Between Fixed Host and BS. Uses standard TCP. BS acts as the receiver for the Fixed Host.</li>
              <li><strong>Connection 2:</strong> Between BS and Mobile Host. Uses a protocol optimized for wireless (e.g., fast retransmission, selective ACKs).</li>
            </ul>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Advantage</strong>
                Isolates the fixed network from wireless errors.
              </div>
              <div class="concept-card">
                <strong>Disadvantage</strong>
                Breaks end-to-end semantics. If BS crashes after ACKing, data is lost.
              </div>
            </div>
          </div>
        `},{title:"Snooping TCP",content:`
          <div class="study-guide-box">
            <h4>Snooping TCP</h4>
            <p><strong>Idea:</strong> The Base Station is "smart". It monitors (snoops) packets flowing through it.</p>
            <ul>
              <li>BS buffers packets sent to the Mobile Host.</li>
              <li>If BS sees a duplicate ACK (indicating loss), it retransmits the packet from its buffer <strong>locally</strong> to the Mobile Host.</li>
              <li>It suppresses the duplicate ACK from reaching the Fixed Host.</li>
            </ul>
            <p><strong>Benefit:</strong> The Fixed Host never knows a loss occurred, so it doesn't slow down. End-to-end semantics are preserved (BS doesn't ACK, it just buffers).</p>
          </div>
        `},{title:"Database Hoarding & Caching",content:`
          <div class="study-guide-box">
            <h4>Disconnected Operations</h4>
            <p>Mobile devices frequently disconnect. How do we keep apps working?</p>

            <h5>1. Hoarding (Prefetching)</h5>
            <div class="definition-box">
              The process of predictively downloading data that the user <em>is likely to need</em> in the future, before the device disconnects.
            </div>
            <p><strong>Example:</strong> Google Maps downloading the map of your route before you enter a tunnel.</p>

            <h5>2. Caching</h5>
            <p>Storing accessed data locally.</p>
            <div class="deep-dive-box">
              <h5>Cache Consistency Issue</h5>
              <p>If the data changes on the server, the mobile cache becomes stale. How do we fix this?</p>
              <ul>
                <li><strong>Invalidation Reports:</strong> Server broadcasts a list of changed items. Clients check this list.</li>
                <li><strong>Polling:</strong> Client asks server "Has this changed?" every time it accesses data. (High overhead).</li>
              </ul>
            </div>
          </div>
        `}]},{unit:"IV",title:"Data Dissemination and Synchronization",notes:"<h3>Unit IV Overview</h3><p>Explores how data is delivered to mobile devices (Push/Pull) and how synchronization is handled.</p>",topics:[{title:"Data Delivery Mechanisms",content:`
          <div class="study-guide-box">
            <h4>Communication Asymmetry</h4>
            <p>In mobile networks, Downlink (Server -> Client) is fast. Uplink (Client -> Server) is slow and power-consuming.</p>
          </div>

          <div class="study-guide-box">
            <h4>1. Push-Based (Publish-Subscribe)</h4>
            <p>Server sends data without a specific request.</p>
            <ul>
              <li><strong>Pros:</strong> Highly scalable. Server load doesn't increase with more clients (Broadcast).</li>
              <li><strong>Cons:</strong> "Spam" factor. User might get irrelevant data.</li>
              <li><strong>Use Case:</strong> Emergency alerts, Stock tickers, Traffic updates.</li>
            </ul>

            <h4>2. Pull-Based (On-Demand)</h4>
            <p>Client requests specific data.</p>
            <ul>
              <li><strong>Pros:</strong> Personalized. No junk data.</li>
              <li><strong>Cons:</strong> Server bottleneck. High energy cost for client (sending requests).</li>
              <li><strong>Use Case:</strong> Web browsing, Database queries.</li>
            </ul>

            <h4>3. Hybrid</h4>
            <p>Push popular data. Pull specific data.</p>
          </div>
        `},{title:"Selective Tuning & Indexing",content:`
          <div class="study-guide-box">
            <h4>The Problem: Battery Drain</h4>
            <p>Listening to a broadcast channel consumes power. We want the device to sleep and wake up <em>only</em> when its data is on air.</p>

            <h4>Solution: Indexing</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Index</div>
                <div class="diagram-arrow">...Data...</div>
                <div class="diagram-box">Item A</div>
                <div class="diagram-arrow">...</div>
                <div class="diagram-box">Item B</div>
              </div>
            </div>
            <ol>
              <li>Mobile wakes up and reads the <strong>Index</strong>.</li>
              <li>Index says: "Item B will be broadcast at t=50ms".</li>
              <li>Mobile goes to <strong>Sleep</strong>.</li>
              <li>Mobile wakes up at t=50ms, downloads Item B.</li>
            </ol>
            <p><strong>Trade-off:</strong> Index takes up bandwidth, making the broadcast cycle longer (Access Latency increases), but Tuning Time (Power) decreases.</p>
          </div>
        `},{title:"Data Synchronization",content:`
          <div class="study-guide-box">
            <h4>Data Synchronization</h4>
            <p>When a mobile device modifies data while offline, it must reconcile these changes with the server upon reconnection.</p>

            <h5>Conflict Resolution</h5>
            <p>What if two users edit the same file?</p>
            <ul>
              <li><strong>Timestamp:</strong> Last write wins.</li>
              <li><strong>User Intervention:</strong> Ask the user to merge.</li>
              <li><strong>Application Logic:</strong> Merge automatically (e.g., appending to a log).</li>
            </ul>

            <h5>SyncML</h5>
            <p>An industry-standard XML-based protocol for synchronizing data (contacts, calendar, emails) across different devices and networks.</p>
          </div>
        `}]},{unit:"V",title:"Mobile Ad hoc Networks (MANETs)",notes:"<h3>Unit V Overview</h3><p>Introduction to MANETs, their characteristics, and routing protocols (DSDV, DSR, AODV).</p>",topics:[{title:"MANET Introduction",content:`
          <div class="study-guide-box">
            <h4>What is a MANET?</h4>
            <div class="definition-box">
              <strong>Mobile Ad hoc Network (MANET)</strong> is a decentralized network of mobile devices connected by wireless links. Each node acts as both a host and a router.
            </div>

            <h5>Characteristics:</h5>
            <ul>
              <li><strong>Dynamic Topology:</strong> Nodes move, links break and form continuously.</li>
              <li><strong>Multi-hop Routing:</strong> No base stations. Packets jump from node to node.</li>
              <li><strong>Energy Constrained:</strong> Battery operated.</li>
              <li><strong>Security:</strong> Vulnerable to eavesdropping and denial of service.</li>
            </ul>
          </div>
        `},{title:"Routing Protocols Classification",content:`
          <div class="study-guide-box">
            <h4>Routing in MANETs</h4>
            <p>Standard routing (OSPF, RIP) fails because topology changes too fast.</p>

            <table class="comparison-table">
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Examples</th>
                <th>Pros/Cons</th>
              </tr>
              <tr>
                <td><strong>Proactive (Table-Driven)</strong></td>
                <td>Maintain routes to ALL destinations at ALL times. Periodic updates.</td>
                <td>DSDV</td>
                <td>✅ Low latency (route ready).<br/>❌ High overhead (wasted updates).</td>
              </tr>
              <tr>
                <td><strong>Reactive (On-Demand)</strong></td>
                <td>Find route only when needed.</td>
                <td>DSR, AODV</td>
                <td>✅ Low overhead.<br/>❌ High latency (Route Discovery delay).</td>
              </tr>
            </table>
          </div>
        `},{title:"AODV vs DSR",content:`
          <div class="study-guide-box">
            <h4>DSR (Dynamic Source Routing)</h4>
            <p>Uses <strong>Source Routing</strong>. The sender decides the full path and puts the list of all nodes in the packet header.</p>
            <p><strong>Route Discovery:</strong> Flood RREQ. Destination replies with RREP containing the path.</p>
            <p><strong>Pros:</strong> Loop-free. <strong>Cons:</strong> Large packet headers.</p>
          </div>

          <div class="study-guide-box">
            <h4>AODV (Ad hoc On-Demand Distance Vector)</h4>
            <p>Combines on-demand mechanism of DSR with hop-by-hop routing of DSDV.</p>
            <p>Nodes maintain a routing table. Packet header only contains destination IP.</p>
            <p><strong>Pros:</strong> Lower header overhead. Good for dynamic environments.</p>
          </div>
        `}]}],nm={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1}]},im={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location and is used for packet delivery via tunneling."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link, effectively hiding these errors from the sender to prevent unnecessary congestion control."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network, to support disconnected operations."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push:</strong> Server sends data without request (e.g., TV). Best for popular data.<br/><strong>Pull:</strong> Client explicitly requests data (e.g., Web browsing). Best for personalized data."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time and wake up only when the data of interest is being broadcast, significantly saving battery power."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV), ensuring routes are available immediately when needed."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
            <h4>1. Introduction</h4>
            <p>GSM (Global System for Mobile Communications) is a standard developed by ETSI to describe protocols for second-generation (2G) digital cellular networks.</p>

            <h4>2. GSM Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Station (MS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Base Station Subsystem (BSS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Network & Switching Subsystem (NSS)</div>
            </div>

            <h4>3. Subsystems Explanation</h4>
            <ul>
              <li><strong>Mobile Station (MS):</strong>
                <ul>
                  <li><strong>Mobile Equipment (ME):</strong> The physical phone.</li>
                  <li><strong>Subscriber Identity Module (SIM):</strong> Stores IMSI and keys.</li>
                </ul>
              </li>
              <li><strong>Base Station Subsystem (BSS):</strong>
                <ul>
                  <li><strong>Base Transceiver Station (BTS):</strong> Handles radio signals.</li>
                  <li><strong>Base Station Controller (BSC):</strong> Manages radio resources and handovers.</li>
                </ul>
              </li>
              <li><strong>Network and Switching Subsystem (NSS):</strong>
                <ul>
                  <li><strong>Mobile Switching Center (MSC):</strong> Handles call routing.</li>
                  <li><strong>Home Location Register (HLR):</strong> Permanent user database.</li>
                  <li><strong>Visitor Location Register (VLR):</strong> Temporary roaming database.</li>
                </ul>
              </li>
            </ul>

            <div class="conclusion">
              <strong>Conclusion:</strong> GSM architecture separates radio functions (BSS) from switching functions (NSS), allowing for scalability and efficient mobility management.
            </div>
          `},{type:"b",question:"Discuss the 3-Tier Architecture of Mobile Computing.",answer:`
            <h4>1. Definition</h4>
            <p>The 3-Tier Architecture is a client-server software architecture pattern in which the user interface (presentation), functional process logic (business rules), and computer data storage and data access are developed and maintained as independent modules.</p>

            <h4>2. Block Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Presentation Tier (Client)</div>
              <div class="diagram-arrow">⬇⬆</div>
              <div class="diagram-box">Application Tier (Middle)</div>
              <div class="diagram-arrow">⬇⬆</div>
              <div class="diagram-box">Data Tier (Database)</div>
            </div>

            <h4>3. Detailed Explanation</h4>
            <ul>
              <li><strong>Presentation Tier (Client):</strong>
                <ul>
                  <li>Runs on the mobile device.</li>
                  <li>Handles UI and user input.</li>
                  <li><strong>Challenge:</strong> Limited resources (battery, screen).</li>
                </ul>
              </li>
              <li><strong>Application Tier (Middle Tier):</strong>
                <ul>
                  <li>Runs on a server (e.g., Web Server).</li>
                  <li>Contains business logic.</li>
                  <li>Handles data adaptation for mobile clients (e.g., compressing images).</li>
                </ul>
              </li>
              <li><strong>Data Tier (Database):</strong>
                <ul>
                  <li>Stores enterprise data.</li>
                  <li>Ensures data integrity and security.</li>
                </ul>
              </li>
            </ul>

            <h4>4. Advantages</h4>
            <ul>
              <li>Scalability</li>
              <li>Ease of maintenance</li>
              <li>Security (Client doesn't access DB directly)</li>
            </ul>
          `}]},{unit:"II",questionNumber:12,choices:[{type:"a",question:"Explain Mobile IP operation with respect to Agent Discovery, Registration, and Tunneling.",answer:`
            <h4>1. Overview</h4>
            <p>Mobile IP allows a device to move from one network to another while maintaining a permanent IP address.</p>

            <h4>2. Steps of Operation</h4>
            
            <h5>Step 1: Agent Discovery</h5>
            <p>Mobile Node (MN) needs to know if it is in the Home Network or Foreign Network.</p>
            <ul>
              <li><strong>Agent Advertisement:</strong> HA and FA periodically broadcast their presence.</li>
              <li><strong>Agent Solicitation:</strong> If MN doesn't hear an advertisement, it sends a solicitation request.</li>
            </ul>

            <h5>Step 2: Registration</h5>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">MN</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">FA</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">HA</div>
              </div>
              <div style="font-size: 0.8rem; margin-top: 0.5rem">(Registration Request)</div>
            </div>
            <ul>
              <li>MN sends its Care-of Address (CoA) to HA (via FA).</li>
              <li>HA updates its routing table: <em>Home Address -> CoA</em>.</li>
              <li>HA sends Registration Reply.</li>
            </ul>

            <h5>Step 3: Tunneling</h5>
            <p>Packet delivery from Correspondent Node (CN) to MN:</p>
            <ol>
              <li>CN sends packet to MN's Home Address.</li>
              <li>HA intercepts packet.</li>
              <li>HA <strong>encapsulates</strong> packet (puts it inside a new IP packet) with destination = CoA.</li>
              <li>Packet routed to FA.</li>
              <li>FA <strong>decapsulates</strong> and delivers original packet to MN.</li>
            </ol>
          `},{type:"b",question:"Compare SDMA, FDMA, TDMA, and CDMA.",answer:`
            <h4>Comparison Table</h4>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SDMA</th>
                  <th>FDMA</th>
                  <th>TDMA</th>
                  <th>CDMA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Full Name</strong></td>
                  <td>Space Division Multiple Access</td>
                  <td>Frequency Division Multiple Access</td>
                  <td>Time Division Multiple Access</td>
                  <td>Code Division Multiple Access</td>
                </tr>
                <tr>
                  <td><strong>Separation</strong></td>
                  <td>Space (Angle/Sector)</td>
                  <td>Frequency</td>
                  <td>Time</td>
                  <td>Code</td>
                </tr>
                <tr>
                  <td><strong>Resource</strong></td>
                  <td>Antenna Sector</td>
                  <td>Frequency Band</td>
                  <td>Time Slot</td>
                  <td>Orthogonal Code</td>
                </tr>
                <tr>
                  <td><strong>Synchronization</strong></td>
                  <td>Not strict</td>
                  <td>Not strict</td>
                  <td>Strict needed</td>
                  <td>Chip-level needed</td>
                </tr>
                <tr>
                  <td><strong>Interference</strong></td>
                  <td>Co-channel</td>
                  <td>Adjacent channel</td>
                  <td>Adjacent slot</td>
                  <td>Multi-user</td>
                </tr>
              </tbody>
            </table>

            <div class="conclusion">
              <strong>Summary:</strong> SDMA optimizes space, FDMA splits frequencies, TDMA splits time, and CDMA uses codes. 4G/5G often use combinations (e.g., OFDMA).
            </div>
          `}]},{unit:"III",questionNumber:13,choices:[{type:"a",question:"Explain Indirect TCP (I-TCP) and its advantages/disadvantages.",answer:`
            <h4>1. Concept</h4>
            <p>Indirect TCP (I-TCP) splits the TCP connection into two separate connections to isolate the wireless link from the fixed network.</p>

            <h4>2. Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Fixed Host</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">Base Station (BS)</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">Mobile Host</div>
              </div>
              <div style="display: flex; gap: 4rem; font-size: 0.8rem; margin-top: 0.5rem">
                <span>Standard TCP</span>
                <span>Wireless TCP</span>
              </div>
            </div>

            <h4>3. Working Principle</h4>
            <ul>
              <li><strong>Connection 1:</strong> Between Fixed Host and BS. Standard TCP is used. BS acts as the receiver for the Fixed Host.</li>
              <li><strong>Connection 2:</strong> Between BS and Mobile Host. An optimized protocol for wireless (handling errors/handovers) is used.</li>
            </ul>

            <h4>4. Advantages</h4>
            <ul>
              <li><strong>Isolation:</strong> Wireless errors are handled locally by BS. Fixed Host doesn't see them.</li>
              <li><strong>Optimization:</strong> Wireless link can use a different transport protocol.</li>
              <li><strong>Performance:</strong> Prevents unnecessary congestion control triggering on the sender side.</li>
            </ul>

            <h4>5. Disadvantages</h4>
            <ul>
              <li><strong>Loss of End-to-End Semantics:</strong> BS acknowledges a packet before the Mobile Host actually receives it. If BS crashes, data is lost.</li>
              <li><strong>Handover Latency:</strong> State (buffers, sequence numbers) must be migrated from old BS to new BS during handover.</li>
            </ul>
          `},{type:"b",question:"Discuss Data Hoarding and Caching techniques in mobile environments.",answer:`
            <h4>1. Introduction</h4>
            <p>Mobile devices often face disconnection or low bandwidth. Data management techniques are required to ensure availability.</p>

            <h4>2. Data Hoarding (Prefetching)</h4>
            <ul>
              <li><strong>Definition:</strong> Predictively downloading data that the user <em>might</em> need in the future, before the device disconnects.</li>
              <li><strong>Steps:</strong>
                <ol>
                  <li>Determine user access patterns.</li>
                  <li>Select relevant data.</li>
                  <li>Download and store locally.</li>
                </ol>
              </li>
              <li><strong>Advantage:</strong> Supports disconnected operations.</li>
              <li><strong>Limitation:</strong> Wastes storage and bandwidth if predicted data is not used.</li>
            </ul>

            <h4>3. Caching</h4>
            <ul>
              <li><strong>Definition:</strong> Storing frequently or recently accessed data locally on the mobile device.</li>
              <li><strong>Benefit:</strong> Reduces bandwidth usage and access latency.</li>
              <li><strong>Challenge:</strong> <strong>Cache Consistency</strong>. Keeping the local copy in sync with the server.</li>
            </ul>

            <h4>4. Cache Consistency Techniques</h4>
            <table class="comparison-table">
              <tr>
                <th>Technique</th>
                <th>Description</th>
              </tr>
              <tr>
                <td><strong>Time-to-Live (TTL)</strong></td>
                <td>Data is valid for a specific time. Expired data is refreshed.</td>
              </tr>
              <tr>
                <td><strong>Invalidation Reports</strong></td>
                <td>Server broadcasts a list of changed data items. Clients check this list to invalidate local cache.</td>
              </tr>
            </table>
          `}]},{unit:"IV",questionNumber:14,choices:[{type:"a",question:"Explain the Push-based and Pull-based data delivery mechanisms.",answer:`
            <h4>1. Classification of Delivery Mechanisms</h4>
            <p>Data delivery in mobile systems depends on the asymmetry of the communication channel.</p>

            <h4>2. Push-based (Publish-Subscribe)</h4>
            <ul>
              <li><strong>Mechanism:</strong> Server broadcasts data to all clients without explicit request.</li>
              <li><strong>Example:</strong> News tickers, Stock quotes, Traffic updates.</li>
              <li><strong>Flow:</strong>
                <div class="diagram-container">
                  <div class="diagram-box">Server</div>
                  <div class="diagram-arrow">➡➡➡</div>
                  <div class="diagram-box">Many Clients</div>
                </div>
              </li>
              <li><strong>Advantages:</strong> Scalable (Server load independent of number of clients).</li>
              <li><strong>Disadvantages:</strong> "Spam" (Clients receive unwanted data); High access latency (Wait for data to appear in cycle).</li>
            </ul>

            <h4>3. Pull-based (On-demand)</h4>
            <ul>
              <li><strong>Mechanism:</strong> Client explicitly requests specific data from the server.</li>
              <li><strong>Example:</strong> Web browsing, Database query.</li>
              <li><strong>Flow:</strong>
                <div class="diagram-container">
                  <div class="diagram-box">Client</div>
                  <div class="diagram-arrow">➡ (Request)</div>
                  <div class="diagram-box">Server</div>
                  <div class="diagram-arrow">⬅ (Response)</div>
                  <div class="diagram-box">Client</div>
                </div>
              </li>
              <li><strong>Advantages:</strong> Personalized data; No unnecessary traffic.</li>
              <li><strong>Disadvantages:</strong> Server bottleneck with many requests; Energy consuming for client (Uplink transmission).</li>
            </ul>

            <h4>4. Hybrid Mechanism</h4>
            <p>Combines both: Push for popular data, Pull for specific/long-tail data.</p>
          `},{type:"b",question:"What is Selective Tuning? Explain Index-based method.",answer:`
            <h4>1. Selective Tuning Definition</h4>
            <p>Selective Tuning is a power conservation technique where the mobile receiver stays in "doze mode" (low power) and wakes up only when the data of interest is being broadcast.</p>

            <h4>2. Index-based Method</h4>
            <p>The broadcast channel sends a directory (Index) at the beginning of a broadcast cycle.</p>

            <h4>3. Structure</h4>
            <div class="diagram-container">
              <div class="diagram-box">Index</div>
              <div class="diagram-arrow">... Data ...</div>
              <div class="diagram-box">Data Item 1</div>
              <div class="diagram-arrow">...</div>
              <div class="diagram-box">Data Item N</div>
            </div>

            <h4>4. Steps</h4>
            <ol>
              <li><strong>Wake Up:</strong> Mobile wakes up at the start of the cycle.</li>
              <li><strong>Read Index:</strong> Reads the index to find the time offset of the desired data.</li>
              <li><strong>Sleep:</strong> Goes into doze mode to save power.</li>
              <li><strong>Wake Up:</strong> Wakes up exactly at the calculated time.</li>
              <li><strong>Read Data:</strong> Downloads the data.</li>
              <li><strong>Sleep:</strong> Returns to sleep.</li>
            </ol>

            <h4>5. Advantages & Disadvantages</h4>
            <ul>
              <li><strong>Advantage:</strong> Significant energy saving.</li>
              <li><strong>Disadvantage:</strong> Increases broadcast cycle length (Index overhead).</li>
            </ul>
          `}]},{unit:"V",questionNumber:15,choices:[{type:"a",question:"Explain the DSDV routing protocol.",answer:`
            <h4>1. Introduction</h4>
            <p><strong>DSDV (Destination-Sequenced Distance-Vector)</strong> is a <strong>Proactive (Table-driven)</strong> routing protocol for MANETs based on the Bellman-Ford algorithm.</p>

            <h4>2. Key Features</h4>
            <ul>
              <li><strong>Table-Driven:</strong> Every node maintains a routing table with entries for <em>all</em> destinations in the network.</li>
              <li><strong>Periodic Updates:</strong> Nodes broadcast their tables periodically to neighbors.</li>
              <li><strong>Sequence Numbers:</strong> Used to distinguish stale routes from fresh ones and prevent routing loops.</li>
            </ul>

            <h4>3. Routing Table Structure</h4>
            <table class="comparison-table">
              <tr><th>Dest</th><th>Next Hop</th><th>Metric</th><th>Seq No</th></tr>
              <tr><td>A</td><td>B</td><td>2</td><td>100</td></tr>
              <tr><td>C</td><td>B</td><td>3</td><td>102</td></tr>
            </table>

            <h4>4. Route Selection Rule</h4>
            <ul>
              <li>Always select the route with the <strong>Highest Sequence Number</strong> (Most recent).</li>
              <li>If Sequence Numbers are equal, select the route with the <strong>Lowest Metric</strong> (Shortest path).</li>
            </ul>

            <h4>5. Pros & Cons</h4>
            <ul>
              <li><strong>Pros:</strong> Low latency for route discovery (routes are always available). Loop-free.</li>
              <li><strong>Cons:</strong> High overhead due to periodic updates. Wastes bandwidth if topology changes frequently.</li>
            </ul>
          `},{type:"b",question:"Explain the DSR routing protocol.",answer:`
            <h4>1. Introduction</h4>
            <p><strong>DSR (Dynamic Source Routing)</strong> is a <strong>Reactive (On-demand)</strong> routing protocol.</p>

            <h4>2. Concept: Source Routing</h4>
            <p>The sender determines the complete sequence of nodes (path) to the destination. This path is listed in the packet header.</p>

            <h4>3. Phases of Operation</h4>
            
            <h5>Phase 1: Route Discovery</h5>
            <ul>
              <li>Sender broadcasts <strong>Route Request (RREQ)</strong>.</li>
              <li>Intermediate nodes append their ID to the RREQ and rebroadcast.</li>
              <li>Destination receives RREQ, reverses the path, and sends <strong>Route Reply (RREP)</strong>.</li>
            </ul>
            <div class="diagram-container">
              <div class="diagram-box">Source</div>
              <div class="diagram-arrow">➡ RREQ ➡</div>
              <div class="diagram-box">Dest</div>
            </div>

            <h5>Phase 2: Route Maintenance</h5>
            <ul>
              <li>Nodes monitor link status.</li>
              <li>If a link breaks, a <strong>Route Error (RERR)</strong> is sent to the source.</li>
              <li>Source initiates new discovery.</li>
            </ul>

            <h4>4. Pros & Cons</h4>
            <ul>
              <li><strong>Pros:</strong> No overhead for idle routes. Loop-free by design.</li>
              <li><strong>Cons:</strong> Packet header overhead (stores full path). Route discovery delay for new destinations.</li>
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
        `}]}],dm={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1}]},fm={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer.",answer:"Sensor detects physical parameter. Transducer converts energy form."},{id:2,question:"What is Gauge Factor?",answer:"Sensitivity of strain gauge. GF = (dR/R)/strain."},{id:3,question:"State Seebeck Effect.",answer:"EMF generation at junction of dissimilar metals due to temp diff."},{id:4,question:"What is a Thermistor?",answer:"Resistor with high negative temp coefficient."},{id:5,question:"Define Hall Effect.",answer:"Voltage generation perpendicular to current and magnetic field."},{id:6,question:"What is LVDT?",answer:"Linear Variable Differential Transformer for displacement."},{id:7,question:"What is LDR?",answer:"Light Dependent Resistor."},{id:8,question:"Define SHE.",answer:"Standard Hydrogen Electrode (0V reference)."},{id:9,question:"What is a Smart Sensor?",answer:"Sensor with built-in processing and communication."},{id:10,question:"List 2 automotive sensors.",answer:"ABS sensor, Airbag sensor."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the working principle of Strain Gauge.",answer:"Detailed explanation of piezoresistive effect..."},{question:"Describe Capacitive Transducers.",answer:"Principle C=eA/d and applications..."}]}]},hm=[{category:"Sensor Diagrams",tips:[{title:"Draw the Block Diagram",content:"For any sensor (e.g., Smart Sensor), always draw: **Input -> Sensing Element -> Signal Conditioning -> ADC -> Output**."}]}],gm=[{id:1,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>Device converting energy from one form to another.</p></div>'},{id:2,unit:"I",front:"Gauge Factor",back:'<div class="fc-content"><p>Sensitivity of Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong></p></div>'},{id:3,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Generation of EMF when two dissimilar metals are kept at different temperatures.</p></div>'},{id:4,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Voltage generated perpendicular to both current and magnetic field.</p></div>'},{id:5,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>Sensor + Signal Conditioning + ADC + Processor.</p></div>'}];function mm(){const[x,ht]=_t.useState(null),f=x==="sensors"?{title:"Electronic Sensors",syllabus:rm,quizzes:dm,papers:[fm],tips:hm,flashcards:gm,progressKey:"electronicSensorsProgress"}:{title:"Mobile Computing",syllabus:lm,quizzes:nm,papers:[im,sm,um],tips:om,flashcards:cm,progressKey:"mobileComputingProgress"},[j,I]=_t.useState(null),[W,Tt]=_t.useState(null),[N,M]=_t.useState("study"),[k,H]=_t.useState(0),[it,Ot]=_t.useState(0),[Xt,Mt]=_t.useState(!1),[Wt,kt]=_t.useState([]),[Ut,Dt]=_t.useState({}),[Jt,ne]=_t.useState(0),[xt,V]=_t.useState({}),[Bt,ie]=_t.useState({}),[He,se]=_t.useState(null),[Nt,pe]=_t.useState(0),[ye,Zt]=_t.useState(!1),[p,C]=_t.useState([]);_t.useEffect(()=>{if(x){const D=localStorage.getItem(f.progressKey);Dt(D?JSON.parse(D):{}),M("study"),I(null),Tt(null),C([...f.flashcards]),pe(0),ne(0)}},[x,f.progressKey,f.flashcards]);const _=(D,P,lt)=>{const be=Ut[D]?.score||0;if(P>be){const Hl={...Ut,[D]:{score:P,total:lt}};Dt(Hl),localStorage.setItem(f.progressKey,JSON.stringify(Hl))}},at=D=>{I(j===D?null:D)},st=D=>se(D),r=()=>se(null),T=D=>{f.quizzes[D]?(Tt(D),H(0),Ot(0),Mt(!1)):alert("Quiz coming soon for this unit!")},E=()=>{let D=[];Object.values(f.quizzes).forEach(be=>{D=[...D,...be]});const lt=D.sort(()=>.5-Math.random()).slice(0,10);kt(lt),Tt("FINAL"),H(0),Ot(0),Mt(!1)},w=D=>{let P=!1;const lt=W==="FINAL"?Wt:f.quizzes[W];D===lt[k].answer&&(P=!0),P&&Ot(it+1);const be=k+1;be<lt.length?H(be):(Mt(!0),_(W,P?it+1:it,lt.length))},U=()=>{Tt(null),H(0),Ot(0),Mt(!1),kt([])},Y=D=>{V(P=>({...P,[D]:!P[D]}))},F=(D,P)=>{ie(lt=>({...lt,[D]:P}))},jt=D=>{ne(D),V({}),ie({}),window.scrollTo(0,0)},pt=()=>{Zt(!1),setTimeout(()=>pe(D=>(D+1)%p.length),200)},wa=()=>{Zt(!1),setTimeout(()=>pe(D=>(D-1+p.length)%p.length),200)},Ka=()=>Zt(!ye),Ol=()=>{Zt(!1),setTimeout(()=>{const D=[...f.flashcards].sort(()=>.5-Math.random());C(D),pe(0)},200)};if(!x)return y.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[y.jsx("h1",{children:"Select Your Subject"}),y.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[y.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("mobile"),children:[y.jsx("h2",{children:"📱 Mobile Computing"}),y.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),y.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),y.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ht("sensors"),children:[y.jsx("h2",{children:"🌡️ Electronic Sensors"}),y.jsx("p",{children:"Unit I - V, Open Elective-II"}),y.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const qe=f.papers[Jt];return y.jsxs("div",{className:"container",children:[y.jsxs("header",{children:[y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[y.jsx("button",{className:"btn",onClick:()=>ht(null),children:"← Switch Subject"}),y.jsx("span",{className:"unit-badge",children:f.title})]}),y.jsxs("h1",{children:[f.title," Prep"]}),y.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),y.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[y.jsx("button",{className:`btn ${N==="study"?"btn-primary":""}`,onClick:()=>M("study"),children:"Study Mode"}),y.jsx("button",{className:`btn ${N==="paper"?"btn-primary":""}`,onClick:()=>M("paper"),children:"Model Papers"}),y.jsx("button",{className:`btn ${N==="tips"?"btn-primary":""}`,onClick:()=>M("tips"),children:"Exam Tips"}),y.jsx("button",{className:`btn ${N==="flashcards"?"btn-primary":""}`,onClick:()=>M("flashcards"),children:"Flashcards"})]}),N==="study"&&y.jsxs(y.Fragment,{children:[y.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:E,children:"Start Final Exam (Mixed)"}),Ut.FINAL&&y.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Ut.FINAL.score,"/",Ut.FINAL.total]})]})]}),N==="study"&&y.jsx("main",{className:"grid",children:f.syllabus.map(D=>y.jsxs("div",{className:"card",children:[y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{className:"unit-badge",children:["Unit ",D.unit]}),Ut[D.unit]&&y.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Ut[D.unit].score,"/",Ut[D.unit].total]})]}),y.jsx("h2",{children:D.title}),j===D.unit&&D.notes?y.jsx("div",{className:"notes-content",children:y.jsx("div",{dangerouslySetInnerHTML:{__html:D.notes}})}):y.jsxs("div",{className:"topics-list-container",children:[y.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),y.jsx("div",{className:"topics-grid",children:D.topics.map((P,lt)=>y.jsx("button",{className:"topic-btn",onClick:()=>st(P),children:P.title},lt))})]}),y.jsxs("div",{className:"actions",children:[y.jsx("button",{className:`btn ${j===D.unit?"btn-primary":""}`,onClick:()=>D.notes?at(D.unit):alert("Notes coming soon!"),children:j===D.unit?"Hide Overview":"Unit Overview"}),y.jsx("button",{className:"btn btn-primary",onClick:()=>T(D.unit),children:"Take Quiz"})]})]},D.unit))}),N==="paper"&&y.jsxs("main",{className:"paper-container",children:[y.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:f.papers.map((D,P)=>y.jsxs("button",{className:`btn ${Jt===P?"btn-primary":""}`,onClick:()=>jt(P),children:["Paper Set ",P+1]},P))}),y.jsxs("div",{className:"paper-header",children:[y.jsx("h2",{children:qe.title}),y.jsx("h3",{children:qe.subject}),y.jsxs("div",{className:"paper-meta",children:[y.jsxs("span",{children:["Time: ",qe.time]}),y.jsxs("span",{children:["Max Marks: ",qe.maxMarks]})]})]}),y.jsxs("div",{className:"paper-section",children:[y.jsx("h3",{children:"PART-A (Short Answer Questions)"}),y.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),y.jsx("div",{className:"questions-list",children:qe.partA.map(D=>y.jsxs("div",{className:"question-item",children:[y.jsxs("div",{className:"question-text",children:[y.jsxs("strong",{children:[D.id,"."]})," ",D.question," ",y.jsx("span",{className:"marks",children:"[1M]"})]}),y.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:Bt[`A-${D.id}`]||"",onChange:P=>F(`A-${D.id}`,P.target.value)}),y.jsx("button",{className:"btn-text",onClick:()=>Y(`A-${D.id}`),children:xt[`A-${D.id}`]?"Hide Model Answer":"Show Model Answer"}),xt[`A-${D.id}`]&&y.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:D.answer}})]},D.id))})]}),qe.partB&&y.jsxs("div",{className:"paper-section",children:[y.jsx("h3",{children:"PART-B (Long Answer Questions)"}),y.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),y.jsx("div",{className:"questions-list",children:qe.partB.map(D=>y.jsxs("div",{className:"question-group",children:[y.jsxs("h4",{children:["Unit ",D.unit]}),D.choices.map((P,lt)=>y.jsxs("div",{children:[y.jsxs("div",{className:"question-item",children:[y.jsxs("div",{className:"question-text",children:[y.jsxs("strong",{children:[D.questionNumber," (",String.fromCharCode(97+lt),")."]})," ",P.question," ",y.jsx("span",{className:"marks",children:"[10M]"})]}),y.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:Bt[`B-${D.questionNumber}${lt}`]||"",onChange:be=>F(`B-${D.questionNumber}${lt}`,be.target.value)}),y.jsx("button",{className:"btn-text",onClick:()=>Y(`B-${D.questionNumber}${lt}`),children:xt[`B-${D.questionNumber}${lt}`]?"Hide Model Answer":"Show Model Answer"}),xt[`B-${D.questionNumber}${lt}`]&&y.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:P.answer}})]}),lt===0&&y.jsx("div",{className:"or-divider",children:"OR"})]},lt))]},D.questionNumber))})]})]}),N==="tips"&&y.jsxs("main",{className:"tips-container",children:[y.jsxs("div",{className:"tips-header",children:[y.jsx("h2",{children:"Exam Tips & Hacks"}),y.jsx("p",{children:"Master the art of writing exams with these strategic insights."})]}),y.jsx("div",{className:"tips-grid",children:f.tips.map((D,P)=>y.jsxs("div",{className:"tip-section",children:[y.jsx("h3",{children:D.category}),y.jsx("div",{className:"tips-list",children:D.tips.map((lt,be)=>y.jsxs("div",{className:"tip-card",children:[y.jsx("h4",{children:lt.title}),y.jsx("div",{dangerouslySetInnerHTML:{__html:lt.content.replace(/\n/g,"<br/>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}})]},be))})]},P))})]}),N==="flashcards"&&p.length>0&&y.jsxs("main",{className:"flashcard-container",children:[y.jsxs("div",{className:"flashcard-header",children:[y.jsx("h2",{children:"Interactive Flashcards"}),y.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),y.jsx("div",{className:"flashcard-scene",children:y.jsxs("div",{className:`flashcard ${ye?"flipped":""}`,onClick:Ka,children:[y.jsxs("div",{className:"flashcard-face flashcard-front",children:[y.jsxs("span",{className:"card-unit",children:["Unit ",p[Nt].unit]}),y.jsx("h3",{children:p[Nt].front}),y.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),y.jsx("div",{className:"flashcard-face flashcard-back",children:y.jsx("div",{dangerouslySetInnerHTML:{__html:p[Nt].back}})})]})}),y.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[y.jsx("button",{className:"btn btn-primary",onClick:wa,children:"← Previous"}),y.jsxs("span",{className:"card-count",children:[Nt+1," / ",p.length]}),y.jsx("button",{className:"btn btn-primary",onClick:pt,children:"Next →"})]}),y.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:y.jsx("button",{className:"btn btn-primary",onClick:Ol,children:"Shuffle Cards"})})]}),W&&y.jsx("div",{className:"modal-overlay",children:y.jsxs("div",{className:"modal-content",children:[y.jsx("button",{className:"close-btn",onClick:U,children:"×"}),Xt?y.jsxs("div",{className:"score-section",children:[y.jsx("h2",{children:"Quiz Completed!"}),y.jsxs("p",{children:["Your Score: ",it," / ",W==="FINAL"?Wt.length:f.quizzes[W].length]}),y.jsx("button",{className:"btn btn-primary",onClick:U,children:"Close"})]}):y.jsxs("div",{className:"quiz-section",children:[y.jsxs("h3",{children:[W==="FINAL"?"Final Exam":`Unit ${W} Quiz`,"- Question ",k+1,"/",W==="FINAL"?Wt.length:f.quizzes[W].length]}),(()=>{const D=W==="FINAL"?Wt:f.quizzes[W];return y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"question-text",children:D[k].question}),y.jsx("div",{className:"options-grid",children:D[k].options.map((P,lt)=>y.jsx("button",{className:"option-btn",onClick:()=>w(lt),children:P},lt))})]})})()]})]})}),He&&y.jsx("div",{className:"modal-overlay",children:y.jsxs("div",{className:"modal-content topic-modal",children:[y.jsx("button",{className:"close-btn",onClick:r,children:"×"}),y.jsxs("div",{className:"topic-content",children:[y.jsx("h2",{children:He.title}),y.jsx("div",{dangerouslySetInnerHTML:{__html:He.content}})]}),y.jsx("button",{className:"btn btn-primary",onClick:r,style:{marginTop:"2rem"},children:"Close"})]})})]})}am.createRoot(document.getElementById("root")).render(y.jsx(_t.StrictMode,{children:y.jsx(mm,{})}));
