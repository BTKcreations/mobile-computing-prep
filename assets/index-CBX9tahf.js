(function(){const ft=document.createElement("link").relList;if(ft&&ft.supports&&ft.supports("modulepreload"))return;for(const G of document.querySelectorAll('link[rel="modulepreload"]'))f(G);new MutationObserver(G=>{for(const J of G)if(J.type==="childList")for(const W of J.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&f(W)}).observe(document,{childList:!0,subtree:!0});function it(G){const J={};return G.integrity&&(J.integrity=G.integrity),G.referrerPolicy&&(J.referrerPolicy=G.referrerPolicy),G.crossOrigin==="use-credentials"?J.credentials="include":G.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function f(G){if(G.ep)return;G.ep=!0;const J=it(G);fetch(G.href,J)}})();var rr={exports:{}},Ea={};var pf;function Xg(){if(pf)return Ea;pf=1;var E=Symbol.for("react.transitional.element"),ft=Symbol.for("react.fragment");function it(f,G,J){var W=null;if(J!==void 0&&(W=""+J),G.key!==void 0&&(W=""+G.key),"key"in G){J={};for(var wt in G)wt!=="key"&&(J[wt]=G[wt])}else J=G;return G=J.ref,{$$typeof:E,type:f,key:W,ref:G!==void 0?G:null,props:J}}return Ea.Fragment=ft,Ea.jsx=it,Ea.jsxs=it,Ea}var mf;function Kg(){return mf||(mf=1,rr.exports=Xg()),rr.exports}var m=Kg(),cr={exports:{}},U={};var vf;function Zg(){if(vf)return U;vf=1;var E=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),W=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),at=Symbol.iterator;function Ht(u){return u===null||typeof u!="object"?null:(u=at&&u[at]||u["@@iterator"],typeof u=="function"?u:null)}var Yt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},At=Object.assign,Jt={};function Pt(u,w,M){this.props=u,this.context=w,this.refs=Jt,this.updater=M||Yt}Pt.prototype.isReactComponent={},Pt.prototype.setState=function(u,w){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,w,"setState")},Pt.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Ut(){}Ut.prototype=Pt.prototype;function Ct(u,w,M){this.props=u,this.context=w,this.refs=Jt,this.updater=M||Yt}var Kt=Ct.prototype=new Ut;Kt.constructor=Ct,At(Kt,Pt.prototype),Kt.isPureReactComponent=!0;var ae=Array.isArray;function Rt(){}var L={H:null,A:null,T:null,S:null},Gt=Object.prototype.hasOwnProperty;function le(u,w,M){var R=M.ref;return{$$typeof:E,type:u,key:w,ref:R!==void 0?R:null,props:M}}function Be(u,w){return le(u.type,w,u.props)}function se(u){return typeof u=="object"&&u!==null&&u.$$typeof===E}function kt(u){var w={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(M){return w[M]})}var ve=/\/+/g;function ye(u,w){return typeof u=="object"&&u!==null&&u.key!=null?kt(""+u.key):w.toString(36)}function Qt(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Rt,Rt):(u.status="pending",u.then(function(w){u.status==="pending"&&(u.status="fulfilled",u.value=w)},function(w){u.status==="pending"&&(u.status="rejected",u.reason=w)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function y(u,w,M,R,q){var _=typeof u;(_==="undefined"||_==="boolean")&&(u=null);var F=!1;if(u===null)F=!0;else switch(_){case"bigint":case"string":case"number":F=!0;break;case"object":switch(u.$$typeof){case E:case ft:F=!0;break;case P:return F=u._init,y(F(u._payload),w,M,R,q)}}if(F)return q=q(u),F=R===""?"."+ye(u,0):R,ae(q)?(M="",F!=null&&(M=F.replace(ve,"$&/")+"/"),y(q,w,M,"",function(kn){return kn})):q!=null&&(se(q)&&(q=Be(q,M+(q.key==null||u&&u.key===q.key?"":(""+q.key).replace(ve,"$&/")+"/")+F)),w.push(q)),1;F=0;var Bt=R===""?".":R+":";if(ae(u))for(var mt=0;mt<u.length;mt++)R=u[mt],_=Bt+ye(R,mt),F+=y(R,w,M,_,q);else if(mt=Ht(u),typeof mt=="function")for(u=mt.call(u),mt=0;!(R=u.next()).done;)R=R.value,_=Bt+ye(R,mt++),F+=y(R,w,M,_,q);else if(_==="object"){if(typeof u.then=="function")return y(Qt(u),w,M,R,q);throw w=String(u),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return F}function x(u,w,M){if(u==null)return u;var R=[],q=0;return y(u,R,"","",function(_){return w.call(M,_,q++)}),R}function z(u){if(u._status===-1){var w=u._result;w=w(),w.then(function(M){(u._status===0||u._status===-1)&&(u._status=1,u._result=M)},function(M){(u._status===0||u._status===-1)&&(u._status=2,u._result=M)}),u._status===-1&&(u._status=0,u._result=w)}if(u._status===1)return u._result.default;throw u._result}var $=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},lt={map:x,forEach:function(u,w,M){x(u,function(){w.apply(this,arguments)},M)},count:function(u){var w=0;return x(u,function(){w++}),w},toArray:function(u){return x(u,function(w){return w})||[]},only:function(u){if(!se(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return U.Activity=B,U.Children=lt,U.Component=Pt,U.Fragment=it,U.Profiler=G,U.PureComponent=Ct,U.StrictMode=f,U.Suspense=k,U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,U.__COMPILER_RUNTIME={__proto__:null,c:function(u){return L.H.useMemoCache(u)}},U.cache=function(u){return function(){return u.apply(null,arguments)}},U.cacheSignal=function(){return null},U.cloneElement=function(u,w,M){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var R=At({},u.props),q=u.key;if(w!=null)for(_ in w.key!==void 0&&(q=""+w.key),w)!Gt.call(w,_)||_==="key"||_==="__self"||_==="__source"||_==="ref"&&w.ref===void 0||(R[_]=w[_]);var _=arguments.length-2;if(_===1)R.children=M;else if(1<_){for(var F=Array(_),Bt=0;Bt<_;Bt++)F[Bt]=arguments[Bt+2];R.children=F}return le(u.type,q,R)},U.createContext=function(u){return u={$$typeof:W,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:J,_context:u},u},U.createElement=function(u,w,M){var R,q={},_=null;if(w!=null)for(R in w.key!==void 0&&(_=""+w.key),w)Gt.call(w,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(q[R]=w[R]);var F=arguments.length-2;if(F===1)q.children=M;else if(1<F){for(var Bt=Array(F),mt=0;mt<F;mt++)Bt[mt]=arguments[mt+2];q.children=Bt}if(u&&u.defaultProps)for(R in F=u.defaultProps,F)q[R]===void 0&&(q[R]=F[R]);return le(u,_,q)},U.createRef=function(){return{current:null}},U.forwardRef=function(u){return{$$typeof:wt,render:u}},U.isValidElement=se,U.lazy=function(u){return{$$typeof:P,_payload:{_status:-1,_result:u},_init:z}},U.memo=function(u,w){return{$$typeof:A,type:u,compare:w===void 0?null:w}},U.startTransition=function(u){var w=L.T,M={};L.T=M;try{var R=u(),q=L.S;q!==null&&q(M,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Rt,$)}catch(_){$(_)}finally{w!==null&&M.types!==null&&(w.types=M.types),L.T=w}},U.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},U.use=function(u){return L.H.use(u)},U.useActionState=function(u,w,M){return L.H.useActionState(u,w,M)},U.useCallback=function(u,w){return L.H.useCallback(u,w)},U.useContext=function(u){return L.H.useContext(u)},U.useDebugValue=function(){},U.useDeferredValue=function(u,w){return L.H.useDeferredValue(u,w)},U.useEffect=function(u,w){return L.H.useEffect(u,w)},U.useEffectEvent=function(u){return L.H.useEffectEvent(u)},U.useId=function(){return L.H.useId()},U.useImperativeHandle=function(u,w,M){return L.H.useImperativeHandle(u,w,M)},U.useInsertionEffect=function(u,w){return L.H.useInsertionEffect(u,w)},U.useLayoutEffect=function(u,w){return L.H.useLayoutEffect(u,w)},U.useMemo=function(u,w){return L.H.useMemo(u,w)},U.useOptimistic=function(u,w){return L.H.useOptimistic(u,w)},U.useReducer=function(u,w,M){return L.H.useReducer(u,w,M)},U.useRef=function(u){return L.H.useRef(u)},U.useState=function(u){return L.H.useState(u)},U.useSyncExternalStore=function(u,w,M){return L.H.useSyncExternalStore(u,w,M)},U.useTransition=function(){return L.H.useTransition()},U.version="19.2.0",U}var yf;function gr(){return yf||(yf=1,cr.exports=Zg()),cr.exports}var zt=gr(),ur={exports:{}},Ra={},dr={exports:{}},fr={};var bf;function Jg(){return bf||(bf=1,(function(E){function ft(y,x){var z=y.length;y.push(x);t:for(;0<z;){var $=z-1>>>1,lt=y[$];if(0<G(lt,x))y[$]=x,y[z]=lt,z=$;else break t}}function it(y){return y.length===0?null:y[0]}function f(y){if(y.length===0)return null;var x=y[0],z=y.pop();if(z!==x){y[0]=z;t:for(var $=0,lt=y.length,u=lt>>>1;$<u;){var w=2*($+1)-1,M=y[w],R=w+1,q=y[R];if(0>G(M,z))R<lt&&0>G(q,M)?(y[$]=q,y[R]=z,$=R):(y[$]=M,y[w]=z,$=w);else if(R<lt&&0>G(q,z))y[$]=q,y[R]=z,$=R;else break t}}return x}function G(y,x){var z=y.sortIndex-x.sortIndex;return z!==0?z:y.id-x.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;E.unstable_now=function(){return J.now()}}else{var W=Date,wt=W.now();E.unstable_now=function(){return W.now()-wt}}var k=[],A=[],P=1,B=null,at=3,Ht=!1,Yt=!1,At=!1,Jt=!1,Pt=typeof setTimeout=="function"?setTimeout:null,Ut=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function Kt(y){for(var x=it(A);x!==null;){if(x.callback===null)f(A);else if(x.startTime<=y)f(A),x.sortIndex=x.expirationTime,ft(k,x);else break;x=it(A)}}function ae(y){if(At=!1,Kt(y),!Yt)if(it(k)!==null)Yt=!0,Rt||(Rt=!0,kt());else{var x=it(A);x!==null&&Qt(ae,x.startTime-y)}}var Rt=!1,L=-1,Gt=5,le=-1;function Be(){return Jt?!0:!(E.unstable_now()-le<Gt)}function se(){if(Jt=!1,Rt){var y=E.unstable_now();le=y;var x=!0;try{t:{Yt=!1,At&&(At=!1,Ut(L),L=-1),Ht=!0;var z=at;try{e:{for(Kt(y),B=it(k);B!==null&&!(B.expirationTime>y&&Be());){var $=B.callback;if(typeof $=="function"){B.callback=null,at=B.priorityLevel;var lt=$(B.expirationTime<=y);if(y=E.unstable_now(),typeof lt=="function"){B.callback=lt,Kt(y),x=!0;break e}B===it(k)&&f(k),Kt(y)}else f(k);B=it(k)}if(B!==null)x=!0;else{var u=it(A);u!==null&&Qt(ae,u.startTime-y),x=!1}}break t}finally{B=null,at=z,Ht=!1}x=void 0}}finally{x?kt():Rt=!1}}}var kt;if(typeof Ct=="function")kt=function(){Ct(se)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ye=ve.port2;ve.port1.onmessage=se,kt=function(){ye.postMessage(null)}}else kt=function(){Pt(se,0)};function Qt(y,x){L=Pt(function(){y(E.unstable_now())},x)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(y){y.callback=null},E.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gt=0<y?Math.floor(1e3/y):5},E.unstable_getCurrentPriorityLevel=function(){return at},E.unstable_next=function(y){switch(at){case 1:case 2:case 3:var x=3;break;default:x=at}var z=at;at=x;try{return y()}finally{at=z}},E.unstable_requestPaint=function(){Jt=!0},E.unstable_runWithPriority=function(y,x){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var z=at;at=y;try{return x()}finally{at=z}},E.unstable_scheduleCallback=function(y,x,z){var $=E.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,y){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=z+lt,y={id:P++,callback:x,priorityLevel:y,startTime:z,expirationTime:lt,sortIndex:-1},z>$?(y.sortIndex=z,ft(A,y),it(k)===null&&y===it(A)&&(At?(Ut(L),L=-1):At=!0,Qt(ae,z-$))):(y.sortIndex=lt,ft(k,y),Yt||Ht||(Yt=!0,Rt||(Rt=!0,kt()))),y},E.unstable_shouldYield=Be,E.unstable_wrapCallback=function(y){var x=at;return function(){var z=at;at=x;try{return y.apply(this,arguments)}finally{at=z}}}})(fr)),fr}var Sf;function Wg(){return Sf||(Sf=1,dr.exports=Jg()),dr.exports}var hr={exports:{}},Xt={};var Tf;function Fg(){if(Tf)return Xt;Tf=1;var E=gr();function ft(k){var A="https://react.dev/errors/"+k;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)A+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+k+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function it(){}var f={d:{f:it,r:function(){throw Error(ft(522))},D:it,C:it,L:it,m:it,X:it,S:it,M:it},p:0,findDOMNode:null},G=Symbol.for("react.portal");function J(k,A,P){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:B==null?null:""+B,children:k,containerInfo:A,implementation:P}}var W=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wt(k,A){if(k==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Xt.createPortal=function(k,A){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(ft(299));return J(k,A,null,P)},Xt.flushSync=function(k){var A=W.T,P=f.p;try{if(W.T=null,f.p=2,k)return k()}finally{W.T=A,f.p=P,f.d.f()}},Xt.preconnect=function(k,A){typeof k=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,f.d.C(k,A))},Xt.prefetchDNS=function(k){typeof k=="string"&&f.d.D(k)},Xt.preinit=function(k,A){if(typeof k=="string"&&A&&typeof A.as=="string"){var P=A.as,B=wt(P,A.crossOrigin),at=typeof A.integrity=="string"?A.integrity:void 0,Ht=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;P==="style"?f.d.S(k,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:B,integrity:at,fetchPriority:Ht}):P==="script"&&f.d.X(k,{crossOrigin:B,integrity:at,fetchPriority:Ht,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Xt.preinitModule=function(k,A){if(typeof k=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var P=wt(A.as,A.crossOrigin);f.d.M(k,{crossOrigin:P,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&f.d.M(k)},Xt.preload=function(k,A){if(typeof k=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var P=A.as,B=wt(P,A.crossOrigin);f.d.L(k,P,{crossOrigin:B,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Xt.preloadModule=function(k,A){if(typeof k=="string")if(A){var P=wt(A.as,A.crossOrigin);f.d.m(k,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:P,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else f.d.m(k)},Xt.requestFormReset=function(k){f.d.r(k)},Xt.unstable_batchedUpdates=function(k,A){return k(A)},Xt.useFormState=function(k,A,P){return W.H.useFormState(k,A,P)},Xt.useFormStatus=function(){return W.H.useHostTransitionStatus()},Xt.version="19.2.0",Xt}var wf;function $g(){if(wf)return hr.exports;wf=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(ft){console.error(ft)}}return E(),hr.exports=Fg(),hr.exports}var Af;function tp(){if(Af)return Ra;Af=1;var E=Wg(),ft=gr(),it=$g();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function J(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k(t){if(J(t)!==t)throw Error(f(188))}function A(t){var e=t.alternate;if(!e){if(e=J(t),e===null)throw Error(f(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return k(a),t;if(l===i)return k(a),e;l=l.sibling}throw Error(f(188))}if(n.return!==i.return)n=a,i=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=l;break}if(o===i){s=!0,i=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,i=a;break}if(o===i){s=!0,i=l,n=a;break}o=o.sibling}if(!s)throw Error(f(189))}}if(n.alternate!==i)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var B=Object.assign,at=Symbol.for("react.element"),Ht=Symbol.for("react.transitional.element"),Yt=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Jt=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),Ut=Symbol.for("react.consumer"),Ct=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function kt(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case At:return"Fragment";case Pt:return"Profiler";case Jt:return"StrictMode";case ae:return"Suspense";case Rt:return"SuspenseList";case le:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Yt:return"Portal";case Ct:return t.displayName||"Context";case Ut:return(t._context.displayName||"Context")+".Consumer";case Kt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return e=t.displayName||null,e!==null?e:ye(t.type)||"Memo";case Gt:e=t._payload,t=t._init;try{return ye(t(e))}catch{}}return null}var Qt=Array.isArray,y=ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},$=[],lt=-1;function u(t){return{current:t}}function w(t){0>lt||(t.current=$[lt],$[lt]=null,lt--)}function M(t,e){lt++,$[lt]=t.current,t.current=e}var R=u(null),q=u(null),_=u(null),F=u(null);function Bt(t,e){switch(M(_,e),M(q,t),M(R,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ud(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ud(e),t=Gd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}w(R),M(R,t)}function mt(){w(R),w(q),w(_)}function kn(t){t.memoizedState!==null&&M(F,t);var e=R.current,n=Gd(e,t.type);e!==n&&(M(q,t),M(R,n))}function Zn(t){q.current===t&&(w(R),w(q)),F.current===t&&(w(F),Ca._currentValue=z)}var Oi,ka;function Ie(t){if(Oi===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oi=e&&e[1]||"",ka=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oi+t+ka}var ke=!1;function C(t,e){if(!t||ke)return"";ke=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(v){var p=v}Reflect.construct(t,[],T)}else{try{T.call()}catch(v){p=v}t.call(T.prototype)}}else{try{throw Error()}catch(v){p=v}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var r=s.split(`
`),g=o.split(`
`);for(a=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(i===r.length||a===g.length)for(i=r.length-1,a=g.length-1;1<=i&&0<=a&&r[i]!==g[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==g[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==g[a]){var b=`
`+r[i].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=i&&0<=a);break}}}finally{ke=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ie(n):""}function Q(t,e){switch(t.tag){case 26:case 27:case 5:return Ie(t.type);case 16:return Ie("Lazy");case 13:return t.child!==e&&e!==null?Ie("Suspense Fallback"):Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 15:return C(t.type,!1);case 11:return C(t.type.render,!1);case 1:return C(t.type,!0);case 31:return Ie("Activity");default:return""}}function ht(t){try{var e="",n=null;do e+=Q(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var be=Object.prototype.hasOwnProperty,Jn=E.unstable_scheduleCallback,Kl=E.unstable_cancelCallback,xf=E.unstable_shouldYield,Mf=E.unstable_requestPaint,oe=E.unstable_now,Df=E.unstable_getCurrentPriorityLevel,pr=E.unstable_ImmediatePriority,mr=E.unstable_UserBlockingPriority,Na=E.unstable_NormalPriority,Ef=E.unstable_LowPriority,vr=E.unstable_IdlePriority,Rf=E.log,kf=E.unstable_setDisableYieldValue,qi=null,re=null;function ln(t){if(typeof Rf=="function"&&kf(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(qi,t)}catch{}}var ce=Math.clz32?Math.clz32:Hf,Nf=Math.log,zf=Math.LN2;function Hf(t){return t>>>=0,t===0?32:31-(Nf(t)/zf|0)|0}var za=256,Ha=262144,Ba=4194304;function Nn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Oa(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,l=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?a=Nn(i):(s&=o,s!==0?a=Nn(s):n||(n=o&~t,n!==0&&(a=Nn(n))))):(o=i&~l,o!==0?a=Nn(o):s!==0?a=Nn(s):n||(n=i&~t,n!==0&&(a=Nn(n)))),a===0?0:e!==0&&e!==a&&(e&l)===0&&(l=a&-a,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:a}function Ui(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bf(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Of(t,e,n,i,a,l){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(n=s&~n;0<n;){var b=31-ce(n),T=1<<b;o[b]=0,r[b]=-1;var p=g[b];if(p!==null)for(g[b]=null,b=0;b<p.length;b++){var v=p[b];v!==null&&(v.lane&=-536870913)}n&=~T}i!==0&&br(t,i,0),l!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=l&~(s&~e))}function br(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ce(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Sr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ce(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Tr(t,e){var n=e&-e;return n=(n&42)!==0?1:Jl(n),(n&(t.suspendedLanes|e))!==0?0:n}function Jl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wr(){var t=x.p;return t!==0?t:(t=window.event,t===void 0?32:rf(t.type))}function Ar(t,e){var n=x.p;try{return x.p=t,e()}finally{x.p=n}}var sn=Math.random().toString(36).slice(2),It="__reactFiber$"+sn,Wt="__reactProps$"+sn,Wn="__reactContainer$"+sn,Fl="__reactEvents$"+sn,qf="__reactListeners$"+sn,Uf="__reactHandles$"+sn,Cr="__reactResources$"+sn,Ii="__reactMarker$"+sn;function $l(t){delete t[It],delete t[Wt],delete t[Fl],delete t[qf],delete t[Uf]}function Fn(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pd(t);t!==null;){if(n=t[It])return n;t=Pd(t)}return e}t=n,n=t.parentNode}return null}function $n(t){if(t=t[It]||t[Wn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ji(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function ti(t){var e=t[Cr];return e||(e=t[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ot(t){t[Ii]=!0}var xr=new Set,Mr={};function zn(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(Mr[t]=e,t=0;t<e.length;t++)xr.add(e[t])}var Gf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dr={},Er={};function If(t){return be.call(Er,t)?!0:be.call(Dr,t)?!1:Gf.test(t)?Er[t]=!0:(Dr[t]=!0,!1)}function qa(t,e,n){if(If(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ua(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function je(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jf(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){if(!t._valueTracker){var e=Rr(t)?"checked":"value";t._valueTracker=jf(t,e,""+t[e])}}function kr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rr(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _f=/[\n"\\]/g;function Te(t){return t.replace(_f,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function es(t,e,n,i,a,l,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ns(t,s,Se(e)):n!=null?ns(t,s,Se(n)):i!=null&&t.removeAttribute("value"),a==null&&l!=null&&(t.defaultChecked=!!l),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Se(o):t.removeAttribute("name")}function Nr(t,e,n,i,a,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ts(t);return}n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ts(t)}function ns(t,e,n){e==="number"&&Ga(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ni(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function zr(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function Hr(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(f(92));if(Qt(i)){if(1<i.length)throw Error(f(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),ts(t)}function ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Lf.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Or(t,e,n){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Br(t,a,i)}else for(var l in e)e.hasOwnProperty(l)&&Br(t,l,e[l])}function is(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ia(t){return Yf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _e(){}var as=null;function ls(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ai=null,li=null;function qr(t){var e=$n(t);if(e&&(t=e.stateNode)){var n=t[Wt]||null;t:switch(t=e.stateNode,e.type){case"input":if(es(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Te(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Wt]||null;if(!a)throw Error(f(90));es(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&kr(i)}break t;case"textarea":zr(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ni(t,!!n.multiple,e,!1)}}}var ss=!1;function Ur(t,e,n){if(ss)return t(e,n);ss=!0;try{var i=t(e);return i}finally{if(ss=!1,(ai!==null||li!==null)&&(Ml(),ai&&(e=ai,t=li,li=ai=null,qr(e),t)))for(e=0;e<t.length;e++)qr(t[e])}}function _i(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Wt]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(f(231,e,typeof n));return n}var Le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(Le)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){os=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{os=!1}var on=null,rs=null,ja=null;function Gr(){if(ja)return ja;var t,e=rs,n=e.length,i,a="value"in on?on.value:on.textContent,l=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[l-i];i++);return ja=a.slice(t,1<i?1-i:void 0)}function _a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Ir(){return!1}function Ft(t){function e(n,i,a,l,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?La:Ir,this.isPropagationStopped=Ir,this}return B(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=Ft(Hn),Vi=B({},Hn,{view:0,detail:0}),Pf=Ft(Vi),cs,us,Yi,Ya=B({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(cs=t.screenX-Yi.screenX,us=t.screenY-Yi.screenY):us=cs=0,Yi=t),cs)},movementY:function(t){return"movementY"in t?t.movementY:us}}),jr=Ft(Ya),Qf=B({},Ya,{dataTransfer:0}),Xf=Ft(Qf),Kf=B({},Vi,{relatedTarget:0}),ds=Ft(Kf),Zf=B({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jf=Ft(Zf),Wf=B({},Hn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ff=Ft(Wf),$f=B({},Hn,{data:0}),_r=Ft($f),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nh[t])?!!e[t]:!1}function fs(){return ih}var ah=B({},Vi,{key:function(t){if(t.key){var e=th[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(t){return t.type==="keypress"?_a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lh=Ft(ah),sh=B({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lr=Ft(sh),oh=B({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),rh=Ft(oh),ch=B({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=Ft(ch),dh=B({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=Ft(dh),hh=B({},Hn,{newState:0,oldState:0}),gh=Ft(hh),ph=[9,13,27,32],hs=Le&&"CompositionEvent"in window,Pi=null;Le&&"documentMode"in document&&(Pi=document.documentMode);var mh=Le&&"TextEvent"in window&&!Pi,Vr=Le&&(!hs||Pi&&8<Pi&&11>=Pi),Yr=" ",Pr=!1;function Qr(t,e){switch(t){case"keyup":return ph.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function vh(t,e){switch(t){case"compositionend":return Xr(e);case"keypress":return e.which!==32?null:(Pr=!0,Yr);case"textInput":return t=e.data,t===Yr&&Pr?null:t;default:return null}}function yh(t,e){if(si)return t==="compositionend"||!hs&&Qr(t,e)?(t=Gr(),ja=rs=on=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vr&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bh[t.type]:e==="textarea"}function Zr(t,e,n,i){ai?li?li.push(i):li=[i]:ai=i,e=Hl(e,"onChange"),0<e.length&&(n=new Va("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qi=null,Xi=null;function Sh(t){Nd(t,0)}function Pa(t){var e=ji(t);if(kr(e))return t}function Jr(t,e){if(t==="change")return e}var Wr=!1;if(Le){var gs;if(Le){var ps="oninput"in document;if(!ps){var Fr=document.createElement("div");Fr.setAttribute("oninput","return;"),ps=typeof Fr.oninput=="function"}gs=ps}else gs=!1;Wr=gs&&(!document.documentMode||9<document.documentMode)}function $r(){Qi&&(Qi.detachEvent("onpropertychange",tc),Xi=Qi=null)}function tc(t){if(t.propertyName==="value"&&Pa(Xi)){var e=[];Zr(e,Xi,t,ls(t)),Ur(Sh,e)}}function Th(t,e,n){t==="focusin"?($r(),Qi=e,Xi=n,Qi.attachEvent("onpropertychange",tc)):t==="focusout"&&$r()}function wh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pa(Xi)}function Ah(t,e){if(t==="click")return Pa(e)}function Ch(t,e){if(t==="input"||t==="change")return Pa(e)}function xh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ue=typeof Object.is=="function"?Object.is:xh;function Ki(t,e){if(ue(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!be.call(e,a)||!ue(t[a],e[a]))return!1}return!0}function ec(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nc(t,e){var n=ec(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ec(n)}}function ic(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ic(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ac(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ga(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function ms(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mh=Le&&"documentMode"in document&&11>=document.documentMode,oi=null,vs=null,Zi=null,ys=!1;function lc(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||oi==null||oi!==Ga(i)||(i=oi,"selectionStart"in i&&ms(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zi&&Ki(Zi,i)||(Zi=i,i=Hl(vs,"onSelect"),0<i.length&&(e=new Va("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=oi)))}function Bn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionrun:Bn("Transition","TransitionRun"),transitionstart:Bn("Transition","TransitionStart"),transitioncancel:Bn("Transition","TransitionCancel"),transitionend:Bn("Transition","TransitionEnd")},bs={},sc={};Le&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function On(t){if(bs[t])return bs[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sc)return bs[t]=e[n];return t}var oc=On("animationend"),rc=On("animationiteration"),cc=On("animationstart"),Dh=On("transitionrun"),Eh=On("transitionstart"),Rh=On("transitioncancel"),uc=On("transitionend"),dc=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function Ne(t,e){dc.set(t,e),zn(e,[t])}var Qa=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},we=[],ci=0,Ts=0;function Xa(){for(var t=ci,e=Ts=ci=0;e<t;){var n=we[e];we[e++]=null;var i=we[e];we[e++]=null;var a=we[e];we[e++]=null;var l=we[e];if(we[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}l!==0&&fc(n,a,l)}}function Ka(t,e,n,i){we[ci++]=t,we[ci++]=e,we[ci++]=n,we[ci++]=i,Ts|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function ws(t,e,n,i){return Ka(t,e,n,i),Za(t)}function qn(t,e){return Ka(t,null,null,e),Za(t)}function fc(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,l=t.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(a=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,a&&e!==null&&(a=31-ce(n),t=l.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),l):null}function Za(t){if(50<va)throw va=0,zo=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ui={};function kh(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,n,i){return new kh(t,e,n,i)}function As(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ve(t,e){var n=t.alternate;return n===null?(n=de(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function hc(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ja(t,e,n,i,a,l){var s=0;if(i=t,typeof t=="function")As(t)&&(s=1);else if(typeof t=="string")s=Og(t,n,R.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case le:return t=de(31,n,e,a),t.elementType=le,t.lanes=l,t;case At:return Un(n.children,a,l,e);case Jt:s=8,a|=24;break;case Pt:return t=de(12,n,e,a|2),t.elementType=Pt,t.lanes=l,t;case ae:return t=de(13,n,e,a),t.elementType=ae,t.lanes=l,t;case Rt:return t=de(19,n,e,a),t.elementType=Rt,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ct:s=10;break t;case Ut:s=9;break t;case Kt:s=11;break t;case L:s=14;break t;case Gt:s=16,i=null;break t}s=29,n=Error(f(130,t===null?"null":typeof t,"")),i=null}return e=de(s,n,e,a),e.elementType=t,e.type=i,e.lanes=l,e}function Un(t,e,n,i){return t=de(7,t,i,e),t.lanes=n,t}function Cs(t,e,n){return t=de(6,t,null,e),t.lanes=n,t}function gc(t){var e=de(18,null,null,0);return e.stateNode=t,e}function xs(t,e,n){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pc=new WeakMap;function Ae(t,e){if(typeof t=="object"&&t!==null){var n=pc.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ht(e)},pc.set(t,e),e)}return{value:t,source:e,stack:ht(e)}}var di=[],fi=0,Wa=null,Ji=0,Ce=[],xe=0,rn=null,Oe=1,qe="";function Ye(t,e){di[fi++]=Ji,di[fi++]=Wa,Wa=t,Ji=e}function mc(t,e,n){Ce[xe++]=Oe,Ce[xe++]=qe,Ce[xe++]=rn,rn=t;var i=Oe;t=qe;var a=32-ce(i)-1;i&=~(1<<a),n+=1;var l=32-ce(e)+a;if(30<l){var s=a-a%5;l=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Oe=1<<32-ce(e)+a|n<<a|i,qe=l+t}else Oe=1<<l|n<<a|i,qe=t}function Ms(t){t.return!==null&&(Ye(t,1),mc(t,1,0))}function Ds(t){for(;t===Wa;)Wa=di[--fi],di[fi]=null,Ji=di[--fi],di[fi]=null;for(;t===rn;)rn=Ce[--xe],Ce[xe]=null,qe=Ce[--xe],Ce[xe]=null,Oe=Ce[--xe],Ce[xe]=null}function vc(t,e){Ce[xe++]=Oe,Ce[xe++]=qe,Ce[xe++]=rn,Oe=e.id,qe=e.overflow,rn=t}var jt=null,gt=null,Z=!1,cn=null,Me=!1,Es=Error(f(519));function un(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wi(Ae(e,t)),Es}function yc(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[It]=t,e[Wt]=i,n){case"dialog":Y("cancel",e),Y("close",e);break;case"iframe":case"object":case"embed":Y("load",e);break;case"video":case"audio":for(n=0;n<ba.length;n++)Y(ba[n],e);break;case"source":Y("error",e);break;case"img":case"image":case"link":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"input":Y("invalid",e),Nr(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Y("invalid",e);break;case"textarea":Y("invalid",e),Hr(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Od(e.textContent,n)?(i.popover!=null&&(Y("beforetoggle",e),Y("toggle",e)),i.onScroll!=null&&Y("scroll",e),i.onScrollEnd!=null&&Y("scrollend",e),i.onClick!=null&&(e.onclick=_e),e=!0):e=!1,e||un(t,!0)}function bc(t){for(jt=t.return;jt;)switch(jt.tag){case 5:case 31:case 13:Me=!1;return;case 27:case 3:Me=!0;return;default:jt=jt.return}}function hi(t){if(t!==jt)return!1;if(!Z)return bc(t),Z=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Xo(t.type,t.memoizedProps)),n=!n),n&&gt&&un(t),bc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Yd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));gt=Yd(t)}else e===27?(e=gt,Cn(t.type)?(t=Fo,Fo=null,gt=t):gt=e):gt=jt?Ee(t.stateNode.nextSibling):null;return!0}function Gn(){gt=jt=null,Z=!1}function Rs(){var t=cn;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),cn=null),t}function Wi(t){cn===null?cn=[t]:cn.push(t)}var ks=u(null),In=null,Pe=null;function dn(t,e,n){M(ks,e._currentValue),e._currentValue=n}function Qe(t){t._currentValue=ks.current,w(ks)}function Ns(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){var s=a.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=a;for(var r=0;r<e.length;r++)if(o.context===e[r]){l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ns(l.return,n,t),i||(s=null);break t}l=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(f(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ns(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function gi(t,e,n,i){t=null;for(var a=e,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var o=a.type;ue(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===F.current){if(s=a.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ca):t=[Ca])}a=a.return}t!==null&&zs(e,t,n,i),e.flags|=262144}function Fa(t){for(t=t.firstContext;t!==null;){if(!ue(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jn(t){In=t,Pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _t(t){return Sc(In,t)}function $a(t,e){return In===null&&jn(t),Sc(t,e)}function Sc(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Pe===null){if(t===null)throw Error(f(308));Pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Pe=Pe.next=e;return n}var Nh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},zh=E.unstable_scheduleCallback,Hh=E.unstable_NormalPriority,xt={$$typeof:Ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hs(){return{controller:new Nh,data:new Map,refCount:0}}function Fi(t){t.refCount--,t.refCount===0&&zh(Hh,function(){t.controller.abort()})}var $i=null,Bs=0,pi=0,mi=null;function Bh(t,e){if($i===null){var n=$i=[];Bs=0,pi=Go(),mi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Bs++,e.then(Tc,Tc),e}function Tc(){if(--Bs===0&&$i!==null){mi!==null&&(mi.status="fulfilled");var t=$i;$i=null,pi=0,mi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Oh(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var wc=y.S;y.S=function(t,e){ld=oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Bh(t,e),wc!==null&&wc(t,e)};var _n=u(null);function Os(){var t=_n.current;return t!==null?t:dt.pooledCache}function tl(t,e){e===null?M(_n,_n.current):M(_n,e.pool)}function Ac(){var t=Os();return t===null?null:{parent:xt._currentValue,pool:t}}var vi=Error(f(460)),qs=Error(f(474)),el=Error(f(542)),nl={then:function(){}};function Cc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xc(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(_e,_e),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Dc(t),t;default:if(typeof e.status=="string")e.then(_e,_e);else{if(t=dt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Dc(t),t}throw Vn=e,vi}}function Ln(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Vn=n,vi):n}}var Vn=null;function Mc(){if(Vn===null)throw Error(f(459));var t=Vn;return Vn=null,t}function Dc(t){if(t===vi||t===el)throw Error(f(483))}var yi=null,ta=0;function il(t){var e=ta;return ta+=1,yi===null&&(yi=[]),xc(yi,t,e)}function ea(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function al(t,e){throw e.$$typeof===at?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ec(t){function e(d,c){if(t){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function i(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function a(d,c){return d=Ve(d,c),d.index=0,d.sibling=null,d}function l(d,c,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=67108866,c):h):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,c,h,S){return c===null||c.tag!==6?(c=Cs(h,d.mode,S),c.return=d,c):(c=a(c,h),c.return=d,c)}function r(d,c,h,S){var H=h.type;return H===At?b(d,c,h.props.children,S,h.key):c!==null&&(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Gt&&Ln(H)===c.type)?(c=a(c,h.props),ea(c,h),c.return=d,c):(c=Ja(h.type,h.key,h.props,null,d.mode,S),ea(c,h),c.return=d,c)}function g(d,c,h,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=xs(h,d.mode,S),c.return=d,c):(c=a(c,h.children||[]),c.return=d,c)}function b(d,c,h,S,H){return c===null||c.tag!==7?(c=Un(h,d.mode,S,H),c.return=d,c):(c=a(c,h),c.return=d,c)}function T(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Cs(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ht:return h=Ja(c.type,c.key,c.props,null,d.mode,h),ea(h,c),h.return=d,h;case Yt:return c=xs(c,d.mode,h),c.return=d,c;case Gt:return c=Ln(c),T(d,c,h)}if(Qt(c)||kt(c))return c=Un(c,d.mode,h,null),c.return=d,c;if(typeof c.then=="function")return T(d,il(c),h);if(c.$$typeof===Ct)return T(d,$a(d,c),h);al(d,c)}return null}function p(d,c,h,S){var H=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:o(d,c,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ht:return h.key===H?r(d,c,h,S):null;case Yt:return h.key===H?g(d,c,h,S):null;case Gt:return h=Ln(h),p(d,c,h,S)}if(Qt(h)||kt(h))return H!==null?null:b(d,c,h,S,null);if(typeof h.then=="function")return p(d,c,il(h),S);if(h.$$typeof===Ct)return p(d,c,$a(d,h),S);al(d,h)}return null}function v(d,c,h,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(h)||null,o(c,d,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ht:return d=d.get(S.key===null?h:S.key)||null,r(c,d,S,H);case Yt:return d=d.get(S.key===null?h:S.key)||null,g(c,d,S,H);case Gt:return S=Ln(S),v(d,c,h,S,H)}if(Qt(S)||kt(S))return d=d.get(h)||null,b(c,d,S,H,null);if(typeof S.then=="function")return v(d,c,h,il(S),H);if(S.$$typeof===Ct)return v(d,c,h,$a(c,S),H);al(c,S)}return null}function D(d,c,h,S){for(var H=null,tt=null,N=c,j=c=0,K=null;N!==null&&j<h.length;j++){N.index>j?(K=N,N=null):K=N.sibling;var et=p(d,N,h[j],S);if(et===null){N===null&&(N=K);break}t&&N&&et.alternate===null&&e(d,N),c=l(et,c,j),tt===null?H=et:tt.sibling=et,tt=et,N=K}if(j===h.length)return n(d,N),Z&&Ye(d,j),H;if(N===null){for(;j<h.length;j++)N=T(d,h[j],S),N!==null&&(c=l(N,c,j),tt===null?H=N:tt.sibling=N,tt=N);return Z&&Ye(d,j),H}for(N=i(N);j<h.length;j++)K=v(N,d,j,h[j],S),K!==null&&(t&&K.alternate!==null&&N.delete(K.key===null?j:K.key),c=l(K,c,j),tt===null?H=K:tt.sibling=K,tt=K);return t&&N.forEach(function(Rn){return e(d,Rn)}),Z&&Ye(d,j),H}function O(d,c,h,S){if(h==null)throw Error(f(151));for(var H=null,tt=null,N=c,j=c=0,K=null,et=h.next();N!==null&&!et.done;j++,et=h.next()){N.index>j?(K=N,N=null):K=N.sibling;var Rn=p(d,N,et.value,S);if(Rn===null){N===null&&(N=K);break}t&&N&&Rn.alternate===null&&e(d,N),c=l(Rn,c,j),tt===null?H=Rn:tt.sibling=Rn,tt=Rn,N=K}if(et.done)return n(d,N),Z&&Ye(d,j),H;if(N===null){for(;!et.done;j++,et=h.next())et=T(d,et.value,S),et!==null&&(c=l(et,c,j),tt===null?H=et:tt.sibling=et,tt=et);return Z&&Ye(d,j),H}for(N=i(N);!et.done;j++,et=h.next())et=v(N,d,j,et.value,S),et!==null&&(t&&et.alternate!==null&&N.delete(et.key===null?j:et.key),c=l(et,c,j),tt===null?H=et:tt.sibling=et,tt=et);return t&&N.forEach(function(Qg){return e(d,Qg)}),Z&&Ye(d,j),H}function ut(d,c,h,S){if(typeof h=="object"&&h!==null&&h.type===At&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ht:t:{for(var H=h.key;c!==null;){if(c.key===H){if(H=h.type,H===At){if(c.tag===7){n(d,c.sibling),S=a(c,h.props.children),S.return=d,d=S;break t}}else if(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Gt&&Ln(H)===c.type){n(d,c.sibling),S=a(c,h.props),ea(S,h),S.return=d,d=S;break t}n(d,c);break}else e(d,c);c=c.sibling}h.type===At?(S=Un(h.props.children,d.mode,S,h.key),S.return=d,d=S):(S=Ja(h.type,h.key,h.props,null,d.mode,S),ea(S,h),S.return=d,d=S)}return s(d);case Yt:t:{for(H=h.key;c!==null;){if(c.key===H)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),S=a(c,h.children||[]),S.return=d,d=S;break t}else{n(d,c);break}else e(d,c);c=c.sibling}S=xs(h,d.mode,S),S.return=d,d=S}return s(d);case Gt:return h=Ln(h),ut(d,c,h,S)}if(Qt(h))return D(d,c,h,S);if(kt(h)){if(H=kt(h),typeof H!="function")throw Error(f(150));return h=H.call(h),O(d,c,h,S)}if(typeof h.then=="function")return ut(d,c,il(h),S);if(h.$$typeof===Ct)return ut(d,c,$a(d,h),S);al(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),S=a(c,h),S.return=d,d=S):(n(d,c),S=Cs(h,d.mode,S),S.return=d,d=S),s(d)):n(d,c)}return function(d,c,h,S){try{ta=0;var H=ut(d,c,h,S);return yi=null,H}catch(N){if(N===vi||N===el)throw N;var tt=de(29,N,null,d.mode);return tt.lanes=S,tt.return=d,tt}finally{}}}var Yn=Ec(!0),Rc=Ec(!1),fn=!1;function Us(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gs(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function gn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(nt&2)!==0){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Za(t),fc(t,null,n),e}return Ka(t,i,e,n),Za(t)}function na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sr(t,n)}}function Is(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=e:l=l.next=e}else a=l=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var js=!1;function ia(){if(js){var t=mi;if(t!==null)throw t}}function aa(t,e,n,i){js=!1;var a=t.updateQueue;fn=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var r=o,g=r.next;r.next=null,s===null?l=g:s.next=g,s=r;var b=t.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==s&&(o===null?b.firstBaseUpdate=g:o.next=g,b.lastBaseUpdate=r))}if(l!==null){var T=a.baseState;s=0,b=g=r=null,o=l;do{var p=o.lane&-536870913,v=p!==o.lane;if(v?(X&p)===p:(i&p)===p){p!==0&&p===pi&&(js=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var D=t,O=o;p=e;var ut=n;switch(O.tag){case 1:if(D=O.payload,typeof D=="function"){T=D.call(ut,T,p);break t}T=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=O.payload,p=typeof D=="function"?D.call(ut,T,p):D,p==null)break t;T=B({},T,p);break t;case 2:fn=!0}}p=o.callback,p!==null&&(t.flags|=64,v&&(t.flags|=8192),v=a.callbacks,v===null?a.callbacks=[p]:v.push(p))}else v={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(g=b=v,r=T):b=b.next=v,s|=p;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);b===null&&(r=T),a.baseState=r,a.firstBaseUpdate=g,a.lastBaseUpdate=b,l===null&&(a.shared.lanes=0),bn|=s,t.lanes=s,t.memoizedState=T}}function kc(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Nc(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)kc(n[t],e)}var bi=u(null),ll=u(0);function zc(t,e){t=en,M(ll,t),M(bi,e),en=t|e.baseLanes}function _s(){M(ll,en),M(bi,bi.current)}function Ls(){en=ll.current,w(bi),w(ll)}var fe=u(null),De=null;function pn(t){var e=t.alternate;M(St,St.current&1),M(fe,t),De===null&&(e===null||bi.current!==null||e.memoizedState!==null)&&(De=t)}function Vs(t){M(St,St.current),M(fe,t),De===null&&(De=t)}function Hc(t){t.tag===22?(M(St,St.current),M(fe,t),De===null&&(De=t)):mn()}function mn(){M(St,St.current),M(fe,fe.current)}function he(t){w(fe),De===t&&(De=null),w(St)}var St=u(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Jo(n)||Wo(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xe=0,I=null,rt=null,Mt=null,ol=!1,Si=!1,Pn=!1,rl=0,la=0,Ti=null,qh=0;function yt(){throw Error(f(321))}function Ys(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ue(t[n],e[n]))return!1;return!0}function Ps(t,e,n,i,a,l){return Xe=l,I=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?mu:so,Pn=!1,l=n(i,a),Pn=!1,Si&&(l=Oc(e,n,i,a)),Bc(t),l}function Bc(t){y.H=ra;var e=rt!==null&&rt.next!==null;if(Xe=0,Mt=rt=I=null,ol=!1,la=0,Ti=null,e)throw Error(f(300));t===null||Dt||(t=t.dependencies,t!==null&&Fa(t)&&(Dt=!0))}function Oc(t,e,n,i){I=t;var a=0;do{if(Si&&(Ti=null),la=0,Si=!1,25<=a)throw Error(f(301));if(a+=1,Mt=rt=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=vu,l=e(n,i)}while(Si);return l}function Uh(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?sa(e):e,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(I.flags|=1024),e}function Qs(){var t=rl!==0;return rl=0,t}function Xs(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ks(t){if(ol){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ol=!1}Xe=0,Mt=rt=I=null,Si=!1,la=rl=0,Ti=null}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?I.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Tt(){if(rt===null){var t=I.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=Mt===null?I.memoizedState:Mt.next;if(e!==null)Mt=e,rt=t;else{if(t===null)throw I.alternate===null?Error(f(467)):Error(f(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Mt===null?I.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sa(t){var e=la;return la+=1,Ti===null&&(Ti=[]),t=xc(Ti,t,e),e=I,(Mt===null?e.memoizedState:Mt.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?mu:so),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sa(t);if(t.$$typeof===Ct)return _t(t)}throw Error(f(438,String(t)))}function Zs(t){var e=null,n=I.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=I.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=cl(),I.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=Be;return e.index++,n}function Ke(t,e){return typeof e=="function"?e(t):e}function dl(t){var e=Tt();return Js(e,rt,t)}function Js(t,e,n){var i=t.queue;if(i===null)throw Error(f(311));i.lastRenderedReducer=n;var a=t.baseQueue,l=i.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}e.baseQueue=a=l,i.pending=null}if(l=t.baseState,a===null)t.memoizedState=l;else{e=a.next;var o=s=null,r=null,g=e,b=!1;do{var T=g.lane&-536870913;if(T!==g.lane?(X&T)===T:(Xe&T)===T){var p=g.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),T===pi&&(b=!0);else if((Xe&p)===p){g=g.next,p===pi&&(b=!0);continue}else T={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=T,s=l):r=r.next=T,I.lanes|=p,bn|=p;T=g.action,Pn&&n(l,T),l=g.hasEagerState?g.eagerState:n(l,T)}else p={lane:T,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=p,s=l):r=r.next=p,I.lanes|=T,bn|=T;g=g.next}while(g!==null&&g!==e);if(r===null?s=l:r.next=o,!ue(l,t.memoizedState)&&(Dt=!0,b&&(n=mi,n!==null)))throw n;t.memoizedState=l,t.baseState=s,t.baseQueue=r,i.lastRenderedState=l}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Ws(t){var e=Tt(),n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,l=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=t(l,s.action),s=s.next;while(s!==a);ue(l,e.memoizedState)||(Dt=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,i]}function qc(t,e,n){var i=I,a=Tt(),l=Z;if(l){if(n===void 0)throw Error(f(407));n=n()}else n=e();var s=!ue((rt||a).memoizedState,n);if(s&&(a.memoizedState=n,Dt=!0),a=a.queue,to(Ic.bind(null,i,a,t),[t]),a.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(i.flags|=2048,wi(9,{destroy:void 0},Gc.bind(null,i,a,n,e),null),dt===null)throw Error(f(349));l||(Xe&127)!==0||Uc(i,e,n)}return n}function Uc(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=I.updateQueue,e===null?(e=cl(),I.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gc(t,e,n,i){e.value=n,e.getSnapshot=i,jc(e)&&_c(t)}function Ic(t,e,n){return n(function(){jc(e)&&_c(t)})}function jc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ue(t,n)}catch{return!0}}function _c(t){var e=qn(t,2);e!==null&&ie(e,t,2)}function Fs(t){var e=Zt();if(typeof t=="function"){var n=t;if(t=n(),Pn){ln(!0);try{n()}finally{ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:t},e}function Lc(t,e,n,i){return t.baseState=n,Js(t,rt,typeof i=="function"?i:Ke)}function Gh(t,e,n,i,a){if(gl(t))throw Error(f(485));if(t=e.action,t!==null){var l={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};y.T!==null?n(!0):l.isTransition=!1,i(l),n=e.pending,n===null?(l.next=e.pending=l,Vc(e,l)):(l.next=n.next,e.pending=n.next=l)}}function Vc(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var l=y.T,s={};y.T=s;try{var o=n(a,i),r=y.S;r!==null&&r(s,o),Yc(t,e,o)}catch(g){$s(t,e,g)}finally{l!==null&&s.types!==null&&(l.types=s.types),y.T=l}}else try{l=n(a,i),Yc(t,e,l)}catch(g){$s(t,e,g)}}function Yc(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Pc(t,e,i)},function(i){return $s(t,e,i)}):Pc(t,e,n)}function Pc(t,e,n){e.status="fulfilled",e.value=n,Qc(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Vc(t,n)))}function $s(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Qc(e),e=e.next;while(e!==i)}t.action=null}function Qc(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Xc(t,e){return e}function Kc(t,e){if(Z){var n=dt.formState;if(n!==null){t:{var i=I;if(Z){if(gt){e:{for(var a=gt,l=Me;a.nodeType!==8;){if(!l){a=null;break e}if(a=Ee(a.nextSibling),a===null){a=null;break e}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){gt=Ee(a.nextSibling),i=a.data==="F!";break t}}un(i)}i=!1}i&&(e=n[0])}}return n=Zt(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:e},n.queue=i,n=hu.bind(null,I,i),i.dispatch=n,i=Fs(!1),l=lo.bind(null,I,!1,i.queue),i=Zt(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=Gh.bind(null,I,a,l,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Zc(t){var e=Tt();return Jc(e,rt,t)}function Jc(t,e,n){if(e=Js(t,e,Xc)[0],t=dl(Ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=sa(e)}catch(s){throw s===vi?el:s}else i=e;e=Tt();var a=e.queue,l=a.dispatch;return n!==e.memoizedState&&(I.flags|=2048,wi(9,{destroy:void 0},Ih.bind(null,a,n),null)),[i,l,t]}function Ih(t,e){t.action=e}function Wc(t){var e=Tt(),n=rt;if(n!==null)return Jc(e,n,t);Tt(),e=e.memoizedState,n=Tt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function wi(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=I.updateQueue,e===null&&(e=cl(),I.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Fc(){return Tt().memoizedState}function fl(t,e,n,i){var a=Zt();I.flags|=t,a.memoizedState=wi(1|e,{destroy:void 0},n,i===void 0?null:i)}function hl(t,e,n,i){var a=Tt();i=i===void 0?null:i;var l=a.memoizedState.inst;rt!==null&&i!==null&&Ys(i,rt.memoizedState.deps)?a.memoizedState=wi(e,l,n,i):(I.flags|=t,a.memoizedState=wi(1|e,l,n,i))}function $c(t,e){fl(8390656,8,t,e)}function to(t,e){hl(2048,8,t,e)}function jh(t){I.flags|=4;var e=I.updateQueue;if(e===null)e=cl(),I.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function tu(t){var e=Tt().memoizedState;return jh({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function eu(t,e){return hl(4,2,t,e)}function nu(t,e){return hl(4,4,t,e)}function iu(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function au(t,e,n){n=n!=null?n.concat([t]):null,hl(4,4,iu.bind(null,e,t),n)}function eo(){}function lu(t,e){var n=Tt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Ys(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function su(t,e){var n=Tt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Ys(e,i[1]))return i[0];if(i=t(),Pn){ln(!0);try{t()}finally{ln(!1)}}return n.memoizedState=[i,e],i}function no(t,e,n){return n===void 0||(Xe&1073741824)!==0&&(X&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=od(),I.lanes|=t,bn|=t,n)}function ou(t,e,n,i){return ue(n,e)?n:bi.current!==null?(t=no(t,n,i),ue(t,e)||(Dt=!0),t):(Xe&42)===0||(Xe&1073741824)!==0&&(X&261930)===0?(Dt=!0,t.memoizedState=n):(t=od(),I.lanes|=t,bn|=t,e)}function ru(t,e,n,i,a){var l=x.p;x.p=l!==0&&8>l?l:8;var s=y.T,o={};y.T=o,lo(t,!1,e,n);try{var r=a(),g=y.S;if(g!==null&&g(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Oh(r,i);oa(t,e,b,me(t))}else oa(t,e,i,me(t))}catch(T){oa(t,e,{then:function(){},status:"rejected",reason:T},me())}finally{x.p=l,s!==null&&o.types!==null&&(s.types=o.types),y.T=s}}function _h(){}function io(t,e,n,i){if(t.tag!==5)throw Error(f(476));var a=cu(t).queue;ru(t,a,e,z,n===null?_h:function(){return uu(t),n(i)})}function cu(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:z},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function uu(t){var e=cu(t);e.next===null&&(e=t.alternate.memoizedState),oa(t,e.next.queue,{},me())}function ao(){return _t(Ca)}function du(){return Tt().memoizedState}function fu(){return Tt().memoizedState}function Lh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=me();t=hn(n);var i=gn(e,t,n);i!==null&&(ie(i,e,n),na(i,e,n)),e={cache:Hs()},t.payload=e;return}e=e.return}}function Vh(t,e,n){var i=me();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gl(t)?gu(e,n):(n=ws(t,e,n,i),n!==null&&(ie(n,t,i),pu(n,e,i)))}function hu(t,e,n){var i=me();oa(t,e,n,i)}function oa(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gl(t))gu(e,a);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,ue(o,s))return Ka(t,e,a,0),dt===null&&Xa(),!1}catch{}finally{}if(n=ws(t,e,a,i),n!==null)return ie(n,t,i),pu(n,e,i),!0}return!1}function lo(t,e,n,i){if(i={lane:2,revertLane:Go(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(e)throw Error(f(479))}else e=ws(t,n,i,2),e!==null&&ie(e,t,2)}function gl(t){var e=t.alternate;return t===I||e!==null&&e===I}function gu(t,e){Si=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pu(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sr(t,n)}}var ra={readContext:_t,use:ul,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};ra.useEffectEvent=yt;var mu={readContext:_t,use:ul,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:$c,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,fl(4194308,4,iu.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){fl(4,2,t,e)},useMemo:function(t,e){var n=Zt();e=e===void 0?null:e;var i=t();if(Pn){ln(!0);try{t()}finally{ln(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Zt();if(n!==void 0){var a=n(e);if(Pn){ln(!0);try{n(e)}finally{ln(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=Vh.bind(null,I,t),[i.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:function(t){t=Fs(t);var e=t.queue,n=hu.bind(null,I,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:eo,useDeferredValue:function(t,e){var n=Zt();return no(n,t,e)},useTransition:function(){var t=Fs(!1);return t=ru.bind(null,I,t.queue,!0,!1),Zt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=I,a=Zt();if(Z){if(n===void 0)throw Error(f(407));n=n()}else{if(n=e(),dt===null)throw Error(f(349));(X&127)!==0||Uc(i,e,n)}a.memoizedState=n;var l={value:n,getSnapshot:e};return a.queue=l,$c(Ic.bind(null,i,l,t),[t]),i.flags|=2048,wi(9,{destroy:void 0},Gc.bind(null,i,l,n,e),null),n},useId:function(){var t=Zt(),e=dt.identifierPrefix;if(Z){var n=qe,i=Oe;n=(i&~(1<<32-ce(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=qh++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ao,useFormState:Kc,useActionState:Kc,useOptimistic:function(t){var e=Zt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lo.bind(null,I,!0,n),n.dispatch=e,[t,e]},useMemoCache:Zs,useCacheRefresh:function(){return Zt().memoizedState=Lh.bind(null,I)},useEffectEvent:function(t){var e=Zt(),n={impl:t};return e.memoizedState=n,function(){if((nt&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}},so={readContext:_t,use:ul,useCallback:lu,useContext:_t,useEffect:to,useImperativeHandle:au,useInsertionEffect:eu,useLayoutEffect:nu,useMemo:su,useReducer:dl,useRef:Fc,useState:function(){return dl(Ke)},useDebugValue:eo,useDeferredValue:function(t,e){var n=Tt();return ou(n,rt.memoizedState,t,e)},useTransition:function(){var t=dl(Ke)[0],e=Tt().memoizedState;return[typeof t=="boolean"?t:sa(t),e]},useSyncExternalStore:qc,useId:du,useHostTransitionStatus:ao,useFormState:Zc,useActionState:Zc,useOptimistic:function(t,e){var n=Tt();return Lc(n,rt,t,e)},useMemoCache:Zs,useCacheRefresh:fu};so.useEffectEvent=tu;var vu={readContext:_t,use:ul,useCallback:lu,useContext:_t,useEffect:to,useImperativeHandle:au,useInsertionEffect:eu,useLayoutEffect:nu,useMemo:su,useReducer:Ws,useRef:Fc,useState:function(){return Ws(Ke)},useDebugValue:eo,useDeferredValue:function(t,e){var n=Tt();return rt===null?no(n,t,e):ou(n,rt.memoizedState,t,e)},useTransition:function(){var t=Ws(Ke)[0],e=Tt().memoizedState;return[typeof t=="boolean"?t:sa(t),e]},useSyncExternalStore:qc,useId:du,useHostTransitionStatus:ao,useFormState:Wc,useActionState:Wc,useOptimistic:function(t,e){var n=Tt();return rt!==null?Lc(n,rt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Zs,useCacheRefresh:fu};vu.useEffectEvent=tu;function oo(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:B({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ro={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=me(),a=hn(i);a.payload=e,n!=null&&(a.callback=n),e=gn(t,a,i),e!==null&&(ie(e,t,i),na(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=me(),a=hn(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=gn(t,a,i),e!==null&&(ie(e,t,i),na(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=me(),i=hn(n);i.tag=2,e!=null&&(i.callback=e),e=gn(t,i,n),e!==null&&(ie(e,t,n),na(e,t,n))}};function yu(t,e,n,i,a,l,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,s):e.prototype&&e.prototype.isPureReactComponent?!Ki(n,i)||!Ki(a,l):!0}function bu(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ro.enqueueReplaceState(e,e.state,null)}function Qn(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=B({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function Su(t){Qa(t)}function Tu(t){console.error(t)}function wu(t){Qa(t)}function pl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Au(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function co(t,e,n){return n=hn(n),n.tag=3,n.payload={element:null},n.callback=function(){pl(t,e)},n}function Cu(t){return t=hn(t),t.tag=3,t}function xu(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;t.payload=function(){return a(l)},t.callback=function(){Au(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Au(e,n,i),typeof a!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Yh(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&gi(e,n,a,!0),n=fe.current,n!==null){switch(n.tag){case 31:case 13:return De===null?Dl():n.alternate===null&&bt===0&&(bt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===nl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Oo(t,i,a)),!1;case 22:return n.flags|=65536,i===nl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Oo(t,i,a)),!1}throw Error(f(435,n.tag))}return Oo(t,i,a),Dl(),!1}if(Z)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Es&&(t=Error(f(422),{cause:i}),Wi(Ae(t,n)))):(i!==Es&&(e=Error(f(423),{cause:i}),Wi(Ae(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Ae(i,n),a=co(t.stateNode,i,a),Is(t,a),bt!==4&&(bt=2)),!1;var l=Error(f(520),{cause:i});if(l=Ae(l,n),ma===null?ma=[l]:ma.push(l),bt!==4&&(bt=2),e===null)return!0;i=Ae(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=co(n.stateNode,i,t),Is(n,t),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Sn===null||!Sn.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Cu(a),xu(a,t,n,i),Is(n,a),!1}n=n.return}while(n!==null);return!1}var uo=Error(f(461)),Dt=!1;function Lt(t,e,n,i){e.child=t===null?Rc(e,null,n,i):Yn(e,t.child,n,i)}function Mu(t,e,n,i,a){n=n.render;var l=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return jn(e),i=Ps(t,e,n,s,l,a),o=Qs(),t!==null&&!Dt?(Xs(t,e,a),Ze(t,e,a)):(Z&&o&&Ms(e),e.flags|=1,Lt(t,e,i,a),e.child)}function Du(t,e,n,i,a){if(t===null){var l=n.type;return typeof l=="function"&&!As(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,Eu(t,e,l,i,a)):(t=Ja(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!bo(t,a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ki,n(s,i)&&t.ref===e.ref)return Ze(t,e,a)}return e.flags|=1,t=Ve(l,i),t.ref=e.ref,t.return=e,e.child=t}function Eu(t,e,n,i,a){if(t!==null){var l=t.memoizedProps;if(Ki(l,i)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=i=l,bo(t,a))(t.flags&131072)!==0&&(Dt=!0);else return e.lanes=t.lanes,Ze(t,e,a)}return fo(t,e,n,i,a)}function Ru(t,e,n,i){var a=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,e.child=null;return ku(t,e,l,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(e,l!==null?l.cachePool:null),l!==null?zc(e,l):_s(),Hc(e);else return i=e.lanes=536870912,ku(t,e,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(tl(e,l.cachePool),zc(e,l),mn(),e.memoizedState=null):(t!==null&&tl(e,null),_s(),mn());return Lt(t,e,a,n),e.child}function ca(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ku(t,e,n,i,a){var l=Os();return l=l===null?null:{parent:xt._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&tl(e,null),_s(),Hc(e),t!==null&&gi(t,e,i,!0),e.childLanes=a,null}function ml(t,e){return e=yl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Nu(t,e,n){return Yn(e,t.child,null,n),t=ml(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function Ph(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Z){if(i.mode==="hidden")return t=ml(e,i),e.lanes=536870912,ca(null,t);if(Vs(e),(t=gt)?(t=Vd(t,Me),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:rn!==null?{id:Oe,overflow:qe}:null,retryLane:536870912,hydrationErrors:null},n=gc(t),n.return=e,e.child=n,jt=e,gt=null)):t=null,t===null)throw un(e);return e.lanes=536870912,null}return ml(e,i)}var l=t.memoizedState;if(l!==null){var s=l.dehydrated;if(Vs(e),a)if(e.flags&256)e.flags&=-257,e=Nu(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Dt||gi(t,e,n,!1),a=(n&t.childLanes)!==0,Dt||a){if(i=dt,i!==null&&(s=Tr(i,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,qn(t,s),ie(i,t,s),uo;Dl(),e=Nu(t,e,n)}else t=l.treeContext,gt=Ee(s.nextSibling),jt=e,Z=!0,cn=null,Me=!1,t!==null&&vc(e,t),e=ml(e,i),e.flags|=4096;return e}return t=Ve(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function fo(t,e,n,i,a){return jn(e),n=Ps(t,e,n,i,void 0,a),i=Qs(),t!==null&&!Dt?(Xs(t,e,a),Ze(t,e,a)):(Z&&i&&Ms(e),e.flags|=1,Lt(t,e,n,a),e.child)}function zu(t,e,n,i,a,l){return jn(e),e.updateQueue=null,n=Oc(e,i,n,a),Bc(t),i=Qs(),t!==null&&!Dt?(Xs(t,e,l),Ze(t,e,l)):(Z&&i&&Ms(e),e.flags|=1,Lt(t,e,n,l),e.child)}function Hu(t,e,n,i,a){if(jn(e),e.stateNode===null){var l=ui,s=n.contextType;typeof s=="object"&&s!==null&&(l=_t(s)),l=new n(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ro,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},Us(e),s=n.contextType,l.context=typeof s=="object"&&s!==null?_t(s):ui,l.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(oo(e,n,s,i),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ro.enqueueReplaceState(l,l.state,null),aa(e,i,l,a),ia(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var o=e.memoizedProps,r=Qn(n,o);l.props=r;var g=l.context,b=n.contextType;s=ui,typeof b=="object"&&b!==null&&(s=_t(b));var T=n.getDerivedStateFromProps;b=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||g!==s)&&bu(e,l,i,s),fn=!1;var p=e.memoizedState;l.state=p,aa(e,i,l,a),ia(),g=e.memoizedState,o||p!==g||fn?(typeof T=="function"&&(oo(e,n,T,i),g=e.memoizedState),(r=fn||yu(e,n,r,i,p,g,s))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=g),l.props=i,l.state=g,l.context=s,i=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Gs(t,e),s=e.memoizedProps,b=Qn(n,s),l.props=b,T=e.pendingProps,p=l.context,g=n.contextType,r=ui,typeof g=="object"&&g!==null&&(r=_t(g)),o=n.getDerivedStateFromProps,(g=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==T||p!==r)&&bu(e,l,i,r),fn=!1,p=e.memoizedState,l.state=p,aa(e,i,l,a),ia();var v=e.memoizedState;s!==T||p!==v||fn||t!==null&&t.dependencies!==null&&Fa(t.dependencies)?(typeof o=="function"&&(oo(e,n,o,i),v=e.memoizedState),(b=fn||yu(e,n,b,i,p,v,r)||t!==null&&t.dependencies!==null&&Fa(t.dependencies))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,v,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,v,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),l.props=i,l.state=v,l.context=r,i=b):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,vl(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=Yn(e,t.child,null,a),e.child=Yn(e,null,n,a)):Lt(t,e,n,a),e.memoizedState=l.state,t=e.child):t=Ze(t,e,a),t}function Bu(t,e,n,i){return Gn(),e.flags|=256,Lt(t,e,n,i),e.child}var ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function go(t){return{baseLanes:t,cachePool:Ac()}}function po(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=pe),t}function Ou(t,e,n){var i=e.pendingProps,a=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Z){if(a?pn(e):mn(),(t=gt)?(t=Vd(t,Me),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:rn!==null?{id:Oe,overflow:qe}:null,retryLane:536870912,hydrationErrors:null},n=gc(t),n.return=e,e.child=n,jt=e,gt=null)):t=null,t===null)throw un(e);return Wo(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(mn(),a=e.mode,o=yl({mode:"hidden",children:o},a),i=Un(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=go(n),i.childLanes=po(t,s,n),e.memoizedState=ho,ca(null,i)):(pn(e),mo(e,o))}var r=t.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(l)e.flags&256?(pn(e),e.flags&=-257,e=vo(t,e,n)):e.memoizedState!==null?(mn(),e.child=t.child,e.flags|=128,e=null):(mn(),o=i.fallback,a=e.mode,i=yl({mode:"visible",children:i.children},a),o=Un(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,Yn(e,t.child,null,n),i=e.child,i.memoizedState=go(n),i.childLanes=po(t,s,n),e.memoizedState=ho,e=ca(null,i));else if(pn(e),Wo(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var g=s.dgst;s=g,i=Error(f(419)),i.stack="",i.digest=s,Wi({value:i,source:null,stack:null}),e=vo(t,e,n)}else if(Dt||gi(t,e,n,!1),s=(n&t.childLanes)!==0,Dt||s){if(s=dt,s!==null&&(i=Tr(s,n),i!==0&&i!==r.retryLane))throw r.retryLane=i,qn(t,i),ie(s,t,i),uo;Jo(o)||Dl(),e=vo(t,e,n)}else Jo(o)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,gt=Ee(o.nextSibling),jt=e,Z=!0,cn=null,Me=!1,t!==null&&vc(e,t),e=mo(e,i.children),e.flags|=4096);return e}return a?(mn(),o=i.fallback,a=e.mode,r=t.child,g=r.sibling,i=Ve(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,g!==null?o=Ve(g,o):(o=Un(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,ca(null,i),i=e.child,o=t.child.memoizedState,o===null?o=go(n):(a=o.cachePool,a!==null?(r=xt._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Ac(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=po(t,s,n),e.memoizedState=ho,ca(t.child,i)):(pn(e),n=t.child,t=n.sibling,n=Ve(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function mo(t,e){return e=yl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yl(t,e){return t=de(22,t,null,e),t.lanes=0,t}function vo(t,e,n){return Yn(e,t.child,null,n),t=mo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qu(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ns(t.return,e,n)}function yo(t,e,n,i,a,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=l)}function Uu(t,e,n){var i=e.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var s=St.current,o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,M(St,s),Lt(t,e,i,n),i=Z?Ji:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qu(t,n,e);else if(t.tag===19)qu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),yo(e,!1,a,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&sl(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}yo(e,!0,n,null,l,i);break;case"together":yo(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Ze(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(gi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,n=Ve(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ve(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Fa(t)))}function Qh(t,e,n){switch(e.tag){case 3:Bt(e,e.stateNode.containerInfo),dn(e,xt,t.memoizedState.cache),Gn();break;case 27:case 5:kn(e);break;case 4:Bt(e,e.stateNode.containerInfo);break;case 10:dn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Vs(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(pn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Ou(t,e,n):(pn(e),t=Ze(t,e,n),t!==null?t.sibling:null);pn(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(gi(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return Uu(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),M(St,St.current),i)break;return null;case 22:return e.lanes=0,Ru(t,e,n,e.pendingProps);case 24:dn(e,xt,t.memoizedState.cache)}return Ze(t,e,n)}function Gu(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Dt=!0;else{if(!bo(t,n)&&(e.flags&128)===0)return Dt=!1,Qh(t,e,n);Dt=(t.flags&131072)!==0}else Dt=!1,Z&&(e.flags&1048576)!==0&&mc(e,Ji,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=Ln(e.elementType),e.type=t,typeof t=="function")As(t)?(i=Qn(t,i),e.tag=1,e=Hu(null,e,t,i,n)):(e.tag=0,e=fo(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Kt){e.tag=11,e=Mu(null,e,t,i,n);break t}else if(a===L){e.tag=14,e=Du(null,e,t,i,n);break t}}throw e=ye(t)||t,Error(f(306,e,""))}}return e;case 0:return fo(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Qn(i,e.pendingProps),Hu(t,e,i,a,n);case 3:t:{if(Bt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));i=e.pendingProps;var l=e.memoizedState;a=l.element,Gs(t,e),aa(e,i,null,n);var s=e.memoizedState;if(i=s.cache,dn(e,xt,i),i!==l.cache&&zs(e,[xt],n,!0),ia(),i=s.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Bu(t,e,i,n);break t}else if(i!==a){a=Ae(Error(f(424)),e),Wi(a),e=Bu(t,e,i,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=Ee(t.firstChild),jt=e,Z=!0,cn=null,Me=!0,n=Rc(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gn(),i===a){e=Ze(t,e,n);break t}Lt(t,e,i,n)}e=e.child}return e;case 26:return vl(t,e),t===null?(n=Zd(e.type,null,e.pendingProps,null))?e.memoizedState=n:Z||(n=e.type,t=e.pendingProps,i=Bl(_.current).createElement(n),i[It]=e,i[Wt]=t,Vt(i,n,t),Ot(i),e.stateNode=i):e.memoizedState=Zd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return kn(e),t===null&&Z&&(i=e.stateNode=Qd(e.type,e.pendingProps,_.current),jt=e,Me=!0,a=gt,Cn(e.type)?(Fo=a,gt=Ee(i.firstChild)):gt=a),Lt(t,e,e.pendingProps.children,n),vl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Z&&((a=i=gt)&&(i=wg(i,e.type,e.pendingProps,Me),i!==null?(e.stateNode=i,jt=e,gt=Ee(i.firstChild),Me=!1,a=!0):a=!1),a||un(e)),kn(e),a=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,i=l.children,Xo(a,l)?i=null:s!==null&&Xo(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Ps(t,e,Uh,null,null,n),Ca._currentValue=a),vl(t,e),Lt(t,e,i,n),e.child;case 6:return t===null&&Z&&((t=n=gt)&&(n=Ag(n,e.pendingProps,Me),n!==null?(e.stateNode=n,jt=e,gt=null,t=!0):t=!1),t||un(e)),null;case 13:return Ou(t,e,n);case 4:return Bt(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yn(e,null,i,n):Lt(t,e,i,n),e.child;case 11:return Mu(t,e,e.type,e.pendingProps,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,dn(e,e.type,i.value),Lt(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,jn(e),a=_t(a),i=i(a),e.flags|=1,Lt(t,e,i,n),e.child;case 14:return Du(t,e,e.type,e.pendingProps,n);case 15:return Eu(t,e,e.type,e.pendingProps,n);case 19:return Uu(t,e,n);case 31:return Ph(t,e,n);case 22:return Ru(t,e,n,e.pendingProps);case 24:return jn(e),i=_t(xt),t===null?(a=Os(),a===null&&(a=dt,l=Hs(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=n),a=l),e.memoizedState={parent:i,cache:a},Us(e),dn(e,xt,a)):((t.lanes&n)!==0&&(Gs(t,e),aa(e,null,null,n),ia()),a=t.memoizedState,l=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),dn(e,xt,i)):(i=l.cache,dn(e,xt,i),i!==a.cache&&zs(e,[xt],n,!0))),Lt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Je(t){t.flags|=4}function So(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(dd())t.flags|=8192;else throw Vn=nl,qs}else t.flags&=-16777217}function Iu(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tf(e))if(dd())t.flags|=8192;else throw Vn=nl,qs}function bl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yr():536870912,t.lanes|=e,Mi|=e)}function ua(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xh(t,e,n){var i=e.pendingProps;switch(Ds(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return pt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Qe(xt),mt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(hi(e)?Je(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Rs())),pt(e),null;case 26:var a=e.type,l=e.memoizedState;return t===null?(Je(e),l!==null?(pt(e),Iu(e,l)):(pt(e),So(e,a,null,i,n))):l?l!==t.memoizedState?(Je(e),pt(e),Iu(e,l)):(pt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Je(e),pt(e),So(e,a,t,i,n)),null;case 27:if(Zn(e),n=_.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Je(e);else{if(!i){if(e.stateNode===null)throw Error(f(166));return pt(e),null}t=R.current,hi(e)?yc(e):(t=Qd(a,i,n),e.stateNode=t,Je(e))}return pt(e),null;case 5:if(Zn(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Je(e);else{if(!i){if(e.stateNode===null)throw Error(f(166));return pt(e),null}if(l=R.current,hi(e))yc(e);else{var s=Bl(_.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}l[It]=e,l[Wt]=i;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;t:switch(Vt(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Je(e)}}return pt(e),So(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Je(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(f(166));if(t=_.current,hi(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=jt,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[It]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Od(t.nodeValue,n)),t||un(e,!0)}else t=Bl(t).createTextNode(i),t[It]=e,e.stateNode=t}return pt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=hi(e),n!==null){if(t===null){if(!i)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[It]=e}else Gn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;pt(e),t=!1}else n=Rs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(f(558))}return pt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=hi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(f(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[It]=e}else Gn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;pt(e),a=!1}else a=Rs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),bl(e,e.updateQueue),pt(e),null);case 4:return mt(),t===null&&Lo(e.stateNode.containerInfo),pt(e),null;case 10:return Qe(e.type),pt(e),null;case 19:if(w(St),i=e.memoizedState,i===null)return pt(e),null;if(a=(e.flags&128)!==0,l=i.rendering,l===null)if(a)ua(i,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=sl(t),l!==null){for(e.flags|=128,ua(i,!1),t=l.updateQueue,e.updateQueue=t,bl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)hc(n,t),n=n.sibling;return M(St,St.current&1|2),Z&&Ye(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&oe()>Cl&&(e.flags|=128,a=!0,ua(i,!1),e.lanes=4194304)}else{if(!a)if(t=sl(l),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,bl(e,t),ua(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return pt(e),null}else 2*oe()-i.renderingStartTime>Cl&&n!==536870912&&(e.flags|=128,a=!0,ua(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=St.current,M(St,a?n&1|2:n&1),Z&&Ye(e,i.treeForkCount),t):(pt(e),null);case 22:case 23:return he(e),Ls(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),n=e.updateQueue,n!==null&&bl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&w(_n),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Qe(xt),pt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function Kh(t,e){switch(Ds(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(xt),mt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Zn(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(f(340));Gn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Gn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return w(St),null;case 4:return mt(),null;case 10:return Qe(e.type),null;case 22:case 23:return he(e),Ls(),t!==null&&w(_n),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(xt),null;case 25:return null;default:return null}}function ju(t,e){switch(Ds(e),e.tag){case 3:Qe(xt),mt();break;case 26:case 27:case 5:Zn(e);break;case 4:mt();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:w(St);break;case 10:Qe(e.type);break;case 22:case 23:he(e),Ls(),t!==null&&w(_n);break;case 24:Qe(xt)}}function da(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var l=n.create,s=n.inst;i=l(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){ot(e,e.return,o)}}function vn(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var r=n,g=o;try{g()}catch(b){ot(a,r,b)}}}i=i.next}while(i!==l)}}catch(b){ot(e,e.return,b)}}function _u(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Nc(e,n)}catch(i){ot(t,t.return,i)}}}function Lu(t,e,n){n.props=Qn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ot(t,e,i)}}function fa(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){ot(t,e,a)}}function Ue(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ot(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ot(t,e,a)}else n.current=null}function Vu(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ot(t,t.return,a)}}function To(t,e,n){try{var i=t.stateNode;mg(i,t.type,n,e),i[Wt]=e}catch(a){ot(t,t.return,a)}}function Yu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Cn(t.type)||t.tag===4}function wo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Cn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ao(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_e));else if(i!==4&&(i===27&&Cn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ao(t,e,n),t=t.sibling;t!==null;)Ao(t,e,n),t=t.sibling}function Sl(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Cn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Sl(t,e,n),t=t.sibling;t!==null;)Sl(t,e,n),t=t.sibling}function Pu(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vt(e,i,n),e[It]=t,e[Wt]=n}catch(l){ot(t,t.return,l)}}var We=!1,Et=!1,Co=!1,Qu=typeof WeakSet=="function"?WeakSet:Set,qt=null;function Zh(t,e){if(t=t.containerInfo,Po=_l,t=ac(t),ms(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var s=0,o=-1,r=-1,g=0,b=0,T=t,p=null;e:for(;;){for(var v;T!==n||a!==0&&T.nodeType!==3||(o=s+a),T!==l||i!==0&&T.nodeType!==3||(r=s+i),T.nodeType===3&&(s+=T.nodeValue.length),(v=T.firstChild)!==null;)p=T,T=v;for(;;){if(T===t)break e;if(p===n&&++g===a&&(o=s),p===l&&++b===i&&(r=s),(v=T.nextSibling)!==null)break;T=p,p=T.parentNode}T=v}n=o===-1||r===-1?null:{start:o,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:t,selectionRange:n},_l=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,n=e,a=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var D=Qn(n.type,a);t=i.getSnapshotBeforeUpdate(D,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(O){ot(n,n.return,O)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Zo(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function Xu(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$e(t,n),i&4&&da(5,n);break;case 1:if($e(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){ot(n,n.return,s)}else{var a=Qn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){ot(n,n.return,s)}}i&64&&_u(n),i&512&&fa(n,n.return);break;case 3:if($e(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Nc(t,e)}catch(s){ot(n,n.return,s)}}break;case 27:e===null&&i&4&&Pu(n);case 26:case 5:$e(t,n),e===null&&i&4&&Vu(n),i&512&&fa(n,n.return);break;case 12:$e(t,n);break;case 31:$e(t,n),i&4&&Ju(t,n);break;case 13:$e(t,n),i&4&&Wu(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=ag.bind(null,n),Cg(t,n))));break;case 22:if(i=n.memoizedState!==null||We,!i){e=e!==null&&e.memoizedState!==null||Et,a=We;var l=Et;We=i,(Et=e)&&!l?tn(t,n,(n.subtreeFlags&8772)!==0):$e(t,n),We=a,Et=l}break;case 30:break;default:$e(t,n)}}function Ku(t){var e=t.alternate;e!==null&&(t.alternate=null,Ku(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$l(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,$t=!1;function Fe(t,e,n){for(n=n.child;n!==null;)Zu(t,e,n),n=n.sibling}function Zu(t,e,n){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 26:Et||Ue(n,e),Fe(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Et||Ue(n,e);var i=vt,a=$t;Cn(n.type)&&(vt=n.stateNode,$t=!1),Fe(t,e,n),Ta(n.stateNode),vt=i,$t=a;break;case 5:Et||Ue(n,e);case 6:if(i=vt,a=$t,vt=null,Fe(t,e,n),vt=i,$t=a,vt!==null)if($t)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(n.stateNode)}catch(l){ot(n,e,l)}else try{vt.removeChild(n.stateNode)}catch(l){ot(n,e,l)}break;case 18:vt!==null&&($t?(t=vt,_d(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Bi(t)):_d(vt,n.stateNode));break;case 4:i=vt,a=$t,vt=n.stateNode.containerInfo,$t=!0,Fe(t,e,n),vt=i,$t=a;break;case 0:case 11:case 14:case 15:vn(2,n,e),Et||vn(4,n,e),Fe(t,e,n);break;case 1:Et||(Ue(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Lu(n,e,i)),Fe(t,e,n);break;case 21:Fe(t,e,n);break;case 22:Et=(i=Et)||n.memoizedState!==null,Fe(t,e,n),Et=i;break;default:Fe(t,e,n)}}function Ju(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bi(t)}catch(n){ot(e,e.return,n)}}}function Wu(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bi(t)}catch(n){ot(e,e.return,n)}}function Jh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Qu),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Qu),e;default:throw Error(f(435,t.tag))}}function Tl(t,e){var n=Jh(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=lg.bind(null,t,i);i.then(a,a)}})}function te(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],l=t,s=e,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Cn(o.type)){vt=o.stateNode,$t=!1;break t}break;case 5:vt=o.stateNode,$t=!1;break t;case 3:case 4:vt=o.stateNode.containerInfo,$t=!0;break t}o=o.return}if(vt===null)throw Error(f(160));Zu(l,s,a),vt=null,$t=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Fu(e,t),e=e.sibling}var ze=null;function Fu(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:te(e,t),ee(t),i&4&&(vn(3,t,t.return),da(3,t),vn(5,t,t.return));break;case 1:te(e,t),ee(t),i&512&&(Et||n===null||Ue(n,n.return)),i&64&&We&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ze;if(te(e,t),ee(t),i&512&&(Et||n===null||Ue(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Ii]||l[It]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),Vt(l,i,n),l[It]=t,Ot(l),i=l;break t;case"link":var s=Fd("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}l=a.createElement(i),Vt(l,i,n),a.head.appendChild(l);break;case"meta":if(s=Fd("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}l=a.createElement(i),Vt(l,i,n),a.head.appendChild(l);break;default:throw Error(f(468,i))}l[It]=t,Ot(l),i=l}t.stateNode=i}else $d(a,t.type,t.stateNode);else t.stateNode=Wd(a,i,t.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?$d(a,t.type,t.stateNode):Wd(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&To(t,t.memoizedProps,n.memoizedProps)}break;case 27:te(e,t),ee(t),i&512&&(Et||n===null||Ue(n,n.return)),n!==null&&i&4&&To(t,t.memoizedProps,n.memoizedProps);break;case 5:if(te(e,t),ee(t),i&512&&(Et||n===null||Ue(n,n.return)),t.flags&32){a=t.stateNode;try{ii(a,"")}catch(D){ot(t,t.return,D)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,To(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Co=!0);break;case 6:if(te(e,t),ee(t),i&4){if(t.stateNode===null)throw Error(f(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(D){ot(t,t.return,D)}}break;case 3:if(Ul=null,a=ze,ze=Ol(e.containerInfo),te(e,t),ze=a,ee(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(e.containerInfo)}catch(D){ot(t,t.return,D)}Co&&(Co=!1,$u(t));break;case 4:i=ze,ze=Ol(t.stateNode.containerInfo),te(e,t),ee(t),ze=i;break;case 12:te(e,t),ee(t);break;case 31:te(e,t),ee(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Tl(t,i)));break;case 13:te(e,t),ee(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Al=oe()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Tl(t,i)));break;case 22:a=t.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,g=We,b=Et;if(We=g||a,Et=b||r,te(e,t),Et=b,We=g,ee(t),i&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||r||We||Et||Xn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){r=n=e;try{if(l=r.stateNode,a)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=r.stateNode;var T=r.memoizedProps.style,p=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(D){ot(r,r.return,D)}}}else if(e.tag===6){if(n===null){r=e;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(D){ot(r,r.return,D)}}}else if(e.tag===18){if(n===null){r=e;try{var v=r.stateNode;a?Ld(v,!0):Ld(r.stateNode,!1)}catch(D){ot(r,r.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Tl(t,n))));break;case 19:te(e,t),ee(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Tl(t,i)));break;case 30:break;case 21:break;default:te(e,t),ee(t)}}function ee(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Yu(i)){n=i;break}i=i.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var a=n.stateNode,l=wo(t);Sl(t,l,a);break;case 5:var s=n.stateNode;n.flags&32&&(ii(s,""),n.flags&=-33);var o=wo(t);Sl(t,o,s);break;case 3:case 4:var r=n.stateNode.containerInfo,g=wo(t);Ao(t,g,r);break;default:throw Error(f(161))}}catch(b){ot(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $u(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$u(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Xu(t,e.alternate,e),e=e.sibling}function Xn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:vn(4,e,e.return),Xn(e);break;case 1:Ue(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Lu(e,e.return,n),Xn(e);break;case 27:Ta(e.stateNode);case 26:case 5:Ue(e,e.return),Xn(e);break;case 22:e.memoizedState===null&&Xn(e);break;case 30:Xn(e);break;default:Xn(e)}t=t.sibling}}function tn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,l=e,s=l.flags;switch(l.tag){case 0:case 11:case 15:tn(a,l,n),da(4,l);break;case 1:if(tn(a,l,n),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){ot(i,i.return,g)}if(i=l,a=i.updateQueue,a!==null){var o=i.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)kc(r[a],o)}catch(g){ot(i,i.return,g)}}n&&s&64&&_u(l),fa(l,l.return);break;case 27:Pu(l);case 26:case 5:tn(a,l,n),n&&i===null&&s&4&&Vu(l),fa(l,l.return);break;case 12:tn(a,l,n);break;case 31:tn(a,l,n),n&&s&4&&Ju(a,l);break;case 13:tn(a,l,n),n&&s&4&&Wu(a,l);break;case 22:l.memoizedState===null&&tn(a,l,n),fa(l,l.return);break;case 30:break;default:tn(a,l,n)}e=e.sibling}}function xo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Fi(n))}function Mo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fi(t))}function He(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(t,e,n,i),e=e.sibling}function td(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:He(t,e,n,i),a&2048&&da(9,e);break;case 1:He(t,e,n,i);break;case 3:He(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fi(t)));break;case 12:if(a&2048){He(t,e,n,i),t=e.stateNode;try{var l=e.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){ot(e,e.return,r)}}else He(t,e,n,i);break;case 31:He(t,e,n,i);break;case 13:He(t,e,n,i);break;case 23:break;case 22:l=e.stateNode,s=e.alternate,e.memoizedState!==null?l._visibility&2?He(t,e,n,i):ha(t,e):l._visibility&2?He(t,e,n,i):(l._visibility|=2,Ai(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&xo(s,e);break;case 24:He(t,e,n,i),a&2048&&Mo(e.alternate,e);break;default:He(t,e,n,i)}}function Ai(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,s=e,o=n,r=i,g=s.flags;switch(s.tag){case 0:case 11:case 15:Ai(l,s,o,r,a),da(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?Ai(l,s,o,r,a):ha(l,s):(b._visibility|=2,Ai(l,s,o,r,a)),a&&g&2048&&xo(s.alternate,s);break;case 24:Ai(l,s,o,r,a),a&&g&2048&&Mo(s.alternate,s);break;default:Ai(l,s,o,r,a)}e=e.sibling}}function ha(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:ha(n,i),a&2048&&xo(i.alternate,i);break;case 24:ha(n,i),a&2048&&Mo(i.alternate,i);break;default:ha(n,i)}e=e.sibling}}var ga=8192;function Ci(t,e,n){if(t.subtreeFlags&ga)for(t=t.child;t!==null;)ed(t,e,n),t=t.sibling}function ed(t,e,n){switch(t.tag){case 26:Ci(t,e,n),t.flags&ga&&t.memoizedState!==null&&qg(n,ze,t.memoizedState,t.memoizedProps);break;case 5:Ci(t,e,n);break;case 3:case 4:var i=ze;ze=Ol(t.stateNode.containerInfo),Ci(t,e,n),ze=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ga,ga=16777216,Ci(t,e,n),ga=i):Ci(t,e,n));break;default:Ci(t,e,n)}}function nd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function pa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,ad(i,t)}nd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)id(t),t=t.sibling}function id(t){switch(t.tag){case 0:case 11:case 15:pa(t),t.flags&2048&&vn(9,t,t.return);break;case 3:pa(t);break;case 12:pa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wl(t)):pa(t);break;default:pa(t)}}function wl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,ad(i,t)}nd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:vn(8,e,e.return),wl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,wl(e));break;default:wl(e)}t=t.sibling}}function ad(t,e){for(;qt!==null;){var n=qt;switch(n.tag){case 0:case 11:case 15:vn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,qt=i;else t:for(n=t;qt!==null;){i=qt;var a=i.sibling,l=i.return;if(Ku(i),i===n){qt=null;break t}if(a!==null){a.return=l,qt=a;break t}qt=l}}}var Wh={getCacheForType:function(t){var e=_t(xt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return _t(xt).controller.signal}},Fh=typeof WeakMap=="function"?WeakMap:Map,nt=0,dt=null,V=null,X=0,st=0,ge=null,yn=!1,xi=!1,Do=!1,en=0,bt=0,bn=0,Kn=0,Eo=0,pe=0,Mi=0,ma=null,ne=null,Ro=!1,Al=0,ld=0,Cl=1/0,xl=null,Sn=null,Nt=0,Tn=null,Di=null,nn=0,ko=0,No=null,sd=null,va=0,zo=null;function me(){return(nt&2)!==0&&X!==0?X&-X:y.T!==null?Go():wr()}function od(){if(pe===0)if((X&536870912)===0||Z){var t=Ha;Ha<<=1,(Ha&3932160)===0&&(Ha=262144),pe=t}else pe=536870912;return t=fe.current,t!==null&&(t.flags|=32),pe}function ie(t,e,n){(t===dt&&(st===2||st===9)||t.cancelPendingCommit!==null)&&(Ei(t,0),wn(t,X,pe,!1)),Gi(t,n),((nt&2)===0||t!==dt)&&(t===dt&&((nt&2)===0&&(Kn|=n),bt===4&&wn(t,X,pe,!1)),Ge(t))}function rd(t,e,n){if((nt&6)!==0)throw Error(f(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ui(t,e),a=i?eg(t,e):Bo(t,e,!0),l=i;do{if(a===0){xi&&!i&&wn(t,e,0,!1);break}else{if(n=t.current.alternate,l&&!$h(n)){a=Bo(t,e,!1),l=!1;continue}if(a===2){if(l=e,t.errorRecoveryDisabledLanes&l)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var o=t;a=ma;var r=o.current.memoizedState.isDehydrated;if(r&&(Ei(o,s).flags|=256),s=Bo(o,s,!1),s!==2){if(Do&&!r){o.errorRecoveryDisabledLanes|=l,Kn|=l,a=4;break t}l=ne,ne=a,l!==null&&(ne===null?ne=l:ne.push.apply(ne,l))}a=s}if(l=!1,a!==2)continue}}if(a===1){Ei(t,0),wn(t,e,0,!0);break}t:{switch(i=t,l=a,l){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:wn(i,e,pe,!yn);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(a=Al+300-oe(),10<a)){if(wn(i,e,pe,!yn),Oa(i,0,!0)!==0)break t;nn=e,i.timeoutHandle=Id(cd.bind(null,i,n,ne,xl,Ro,e,pe,Kn,Mi,yn,l,"Throttled",-0,0),a);break t}cd(i,n,ne,xl,Ro,e,pe,Kn,Mi,yn,l,null,-0,0)}}break}while(!0);Ge(t)}function cd(t,e,n,i,a,l,s,o,r,g,b,T,p,v){if(t.timeoutHandle=-1,T=e.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_e},ed(e,l,T);var D=(l&62914560)===l?Al-oe():(l&4194048)===l?ld-oe():0;if(D=Ug(T,D),D!==null){nn=l,t.cancelPendingCommit=D(vd.bind(null,t,e,l,n,i,a,s,o,r,b,T,null,p,v)),wn(t,l,s,!g);return}}vd(t,e,l,n,i,a,s,o,r)}function $h(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],l=a.getSnapshot;a=a.value;try{if(!ue(l(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e,n,i){e&=~Eo,e&=~Kn,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var l=31-ce(a),s=1<<l;i[l]=-1,a&=~s}n!==0&&br(t,n,e)}function Ml(){return(nt&6)===0?(ya(0),!1):!0}function Ho(){if(V!==null){if(st===0)var t=V.return;else t=V,Pe=In=null,Ks(t),yi=null,ta=0,t=V;for(;t!==null;)ju(t.alternate,t),t=t.return;V=null}}function Ei(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,bg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),nn=0,Ho(),dt=t,V=n=Ve(t.current,null),X=e,st=0,ge=null,yn=!1,xi=Ui(t,e),Do=!1,Mi=pe=Eo=Kn=bn=bt=0,ne=ma=null,Ro=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-ce(i),l=1<<a;e|=t[a],i&=~l}return en=e,Xa(),n}function ud(t,e){I=null,y.H=ra,e===vi||e===el?(e=Mc(),st=3):e===qs?(e=Mc(),st=4):st=e===uo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,V===null&&(bt=1,pl(t,Ae(e,t.current)))}function dd(){var t=fe.current;return t===null?!0:(X&4194048)===X?De===null:(X&62914560)===X||(X&536870912)!==0?t===De:!1}function fd(){var t=y.H;return y.H=ra,t===null?ra:t}function hd(){var t=y.A;return y.A=Wh,t}function Dl(){bt=4,yn||(X&4194048)!==X&&fe.current!==null||(xi=!0),(bn&134217727)===0&&(Kn&134217727)===0||dt===null||wn(dt,X,pe,!1)}function Bo(t,e,n){var i=nt;nt|=2;var a=fd(),l=hd();(dt!==t||X!==e)&&(xl=null,Ei(t,e)),e=!1;var s=bt;t:do try{if(st!==0&&V!==null){var o=V,r=ge;switch(st){case 8:Ho(),s=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var g=st;if(st=0,ge=null,Ri(t,o,r,g),n&&xi){s=0;break t}break;default:g=st,st=0,ge=null,Ri(t,o,r,g)}}tg(),s=bt;break}catch(b){ud(t,b)}while(!0);return e&&t.shellSuspendCounter++,Pe=In=null,nt=i,y.H=a,y.A=l,V===null&&(dt=null,X=0,Xa()),s}function tg(){for(;V!==null;)gd(V)}function eg(t,e){var n=nt;nt|=2;var i=fd(),a=hd();dt!==t||X!==e?(xl=null,Cl=oe()+500,Ei(t,e)):xi=Ui(t,e);t:do try{if(st!==0&&V!==null){e=V;var l=ge;e:switch(st){case 1:st=0,ge=null,Ri(t,e,l,1);break;case 2:case 9:if(Cc(l)){st=0,ge=null,pd(e);break}e=function(){st!==2&&st!==9||dt!==t||(st=7),Ge(t)},l.then(e,e);break t;case 3:st=7;break t;case 4:st=5;break t;case 7:Cc(l)?(st=0,ge=null,pd(e)):(st=0,ge=null,Ri(t,e,l,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var o=V;if(s?tf(s):o.stateNode.complete){st=0,ge=null;var r=o.sibling;if(r!==null)V=r;else{var g=o.return;g!==null?(V=g,El(g)):V=null}break e}}st=0,ge=null,Ri(t,e,l,5);break;case 6:st=0,ge=null,Ri(t,e,l,6);break;case 8:Ho(),bt=6;break t;default:throw Error(f(462))}}ng();break}catch(b){ud(t,b)}while(!0);return Pe=In=null,y.H=i,y.A=a,nt=n,V!==null?0:(dt=null,X=0,Xa(),bt)}function ng(){for(;V!==null&&!xf();)gd(V)}function gd(t){var e=Gu(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?El(t):V=e}function pd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=zu(n,e,e.pendingProps,e.type,void 0,X);break;case 11:e=zu(n,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:Ks(e);default:ju(n,e),e=V=hc(e,en),e=Gu(n,e,en)}t.memoizedProps=t.pendingProps,e===null?El(t):V=e}function Ri(t,e,n,i){Pe=In=null,Ks(e),yi=null,ta=0;var a=e.return;try{if(Yh(t,a,e,n,X)){bt=1,pl(t,Ae(n,t.current)),V=null;return}}catch(l){if(a!==null)throw V=a,l;bt=1,pl(t,Ae(n,t.current)),V=null;return}e.flags&32768?(Z||i===1?t=!0:xi||(X&536870912)!==0?t=!1:(yn=t=!0,(i===2||i===9||i===3||i===6)&&(i=fe.current,i!==null&&i.tag===13&&(i.flags|=16384))),md(e,t)):El(e)}function El(t){var e=t;do{if((e.flags&32768)!==0){md(e,yn);return}t=e.return;var n=Xh(e.alternate,e,en);if(n!==null){V=n;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);bt===0&&(bt=5)}function md(t,e){do{var n=Kh(t.alternate,t);if(n!==null){n.flags&=32767,V=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=n}while(t!==null);bt=6,V=null}function vd(t,e,n,i,a,l,s,o,r){t.cancelPendingCommit=null;do Rl();while(Nt!==0);if((nt&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(l=e.lanes|e.childLanes,l|=Ts,Of(t,n,l,s,o,r),t===dt&&(V=dt=null,X=0),Di=e,Tn=t,nn=n,ko=l,No=a,sd=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sg(Na,function(){return wd(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=y.T,y.T=null,a=x.p,x.p=2,s=nt,nt|=4;try{Zh(t,e,n)}finally{nt=s,x.p=a,y.T=i}}Nt=1,yd(),bd(),Sd()}}function yd(){if(Nt===1){Nt=0;var t=Tn,e=Di,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var i=x.p;x.p=2;var a=nt;nt|=4;try{Fu(e,t);var l=Qo,s=ac(t.containerInfo),o=l.focusedElem,r=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&ic(o.ownerDocument.documentElement,o)){if(r!==null&&ms(o)){var g=r.start,b=r.end;if(b===void 0&&(b=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(b,o.value.length);else{var T=o.ownerDocument||document,p=T&&T.defaultView||window;if(p.getSelection){var v=p.getSelection(),D=o.textContent.length,O=Math.min(r.start,D),ut=r.end===void 0?O:Math.min(r.end,D);!v.extend&&O>ut&&(s=ut,ut=O,O=s);var d=nc(o,O),c=nc(o,ut);if(d&&c&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var h=T.createRange();h.setStart(d.node,d.offset),v.removeAllRanges(),O>ut?(v.addRange(h),v.extend(c.node,c.offset)):(h.setEnd(c.node,c.offset),v.addRange(h))}}}}for(T=[],v=o;v=v.parentNode;)v.nodeType===1&&T.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var S=T[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}_l=!!Po,Qo=Po=null}finally{nt=a,x.p=i,y.T=n}}t.current=e,Nt=2}}function bd(){if(Nt===2){Nt=0;var t=Tn,e=Di,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var i=x.p;x.p=2;var a=nt;nt|=4;try{Xu(t,e.alternate,e)}finally{nt=a,x.p=i,y.T=n}}Nt=3}}function Sd(){if(Nt===4||Nt===3){Nt=0,Mf();var t=Tn,e=Di,n=nn,i=sd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Nt=5:(Nt=0,Di=Tn=null,Td(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Sn=null),Wl(n),e=e.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=y.T,a=x.p,x.p=2,y.T=null;try{for(var l=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];l(o.value,{componentStack:o.stack})}}finally{y.T=e,x.p=a}}(nn&3)!==0&&Rl(),Ge(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===zo?va++:(va=0,zo=t):va=0,ya(0)}}function Td(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Fi(e)))}function Rl(){return yd(),bd(),Sd(),wd()}function wd(){if(Nt!==5)return!1;var t=Tn,e=ko;ko=0;var n=Wl(nn),i=y.T,a=x.p;try{x.p=32>n?32:n,y.T=null,n=No,No=null;var l=Tn,s=nn;if(Nt=0,Di=Tn=null,nn=0,(nt&6)!==0)throw Error(f(331));var o=nt;if(nt|=4,id(l.current),td(l,l.current,s,n),nt=o,ya(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(qi,l)}catch{}return!0}finally{x.p=a,y.T=i,Td(t,e)}}function Ad(t,e,n){e=Ae(n,e),e=co(t.stateNode,e,2),t=gn(t,e,2),t!==null&&(Gi(t,2),Ge(t))}function ot(t,e,n){if(t.tag===3)Ad(t,t,n);else for(;e!==null;){if(e.tag===3){Ad(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))){t=Ae(n,t),n=Cu(2),i=gn(e,n,2),i!==null&&(xu(n,i,e,t),Gi(i,2),Ge(i));break}}e=e.return}}function Oo(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fh;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Do=!0,a.add(n),t=ig.bind(null,t,e,n),e.then(t,t))}function ig(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,dt===t&&(X&n)===n&&(bt===4||bt===3&&(X&62914560)===X&&300>oe()-Al?(nt&2)===0&&Ei(t,0):Eo|=n,Mi===X&&(Mi=0)),Ge(t)}function Cd(t,e){e===0&&(e=yr()),t=qn(t,e),t!==null&&(Gi(t,e),Ge(t))}function ag(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cd(t,n)}function lg(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(f(314))}i!==null&&i.delete(e),Cd(t,n)}function sg(t,e){return Jn(t,e)}var kl=null,ki=null,qo=!1,Nl=!1,Uo=!1,An=0;function Ge(t){t!==ki&&t.next===null&&(ki===null?kl=ki=t:ki=ki.next=t),Nl=!0,qo||(qo=!0,rg())}function ya(t,e){if(!Uo&&Nl){Uo=!0;do for(var n=!1,i=kl;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var s=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-ce(42|t)+1)-1,l&=a&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Ed(i,l))}else l=X,l=Oa(i,i===dt?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Ui(i,l)||(n=!0,Ed(i,l));i=i.next}while(n);Uo=!1}}function og(){xd()}function xd(){Nl=qo=!1;var t=0;An!==0&&yg()&&(t=An);for(var e=oe(),n=null,i=kl;i!==null;){var a=i.next,l=Md(i,e);l===0?(i.next=null,n===null?kl=a:n.next=a,a===null&&(ki=n)):(n=i,(t!==0||(l&3)!==0)&&(Nl=!0)),i=a}Nt!==0&&Nt!==5||ya(t),An!==0&&(An=0)}function Md(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var s=31-ce(l),o=1<<s,r=a[s];r===-1?((o&n)===0||(o&i)!==0)&&(a[s]=Bf(o,e)):r<=e&&(t.expiredLanes|=o),l&=~o}if(e=dt,n=X,n=Oa(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(st===2||st===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Kl(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ui(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Kl(i),Wl(n)){case 2:case 8:n=mr;break;case 32:n=Na;break;case 268435456:n=vr;break;default:n=Na}return i=Dd.bind(null,t),n=Jn(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Kl(i),t.callbackPriority=2,t.callbackNode=null,2}function Dd(t,e){if(Nt!==0&&Nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Rl()&&t.callbackNode!==n)return null;var i=X;return i=Oa(t,t===dt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(rd(t,i,e),Md(t,oe()),t.callbackNode!=null&&t.callbackNode===n?Dd.bind(null,t):null)}function Ed(t,e){if(Rl())return null;rd(t,e,!0)}function rg(){Sg(function(){(nt&6)!==0?Jn(pr,og):xd()})}function Go(){if(An===0){var t=pi;t===0&&(t=za,za<<=1,(za&261888)===0&&(za=256)),An=t}return An}function Rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ia(""+t)}function kd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function cg(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var l=Rd((a[Wt]||null).action),s=i.submitter;s&&(e=(e=s[Wt]||null)?Rd(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var o=new Va("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(An!==0){var r=s?kd(a,s):new FormData(a);io(n,{pending:!0,data:r,method:a.method,action:l},null,r)}}else typeof l=="function"&&(o.preventDefault(),r=s?kd(a,s):new FormData(a),io(n,{pending:!0,data:r,method:a.method,action:l},l,r))},currentTarget:a}]})}}for(var Io=0;Io<Ss.length;Io++){var jo=Ss[Io],ug=jo.toLowerCase(),dg=jo[0].toUpperCase()+jo.slice(1);Ne(ug,"on"+dg)}Ne(oc,"onAnimationEnd"),Ne(rc,"onAnimationIteration"),Ne(cc,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(Dh,"onTransitionRun"),Ne(Eh,"onTransitionStart"),Ne(Rh,"onTransitionCancel"),Ne(uc,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function Nd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],r=o.instance,g=o.currentTarget;if(o=o.listener,r!==l&&a.isPropagationStopped())break t;l=o,a.currentTarget=g;try{l(a)}catch(b){Qa(b)}a.currentTarget=null,l=r}else for(s=0;s<i.length;s++){if(o=i[s],r=o.instance,g=o.currentTarget,o=o.listener,r!==l&&a.isPropagationStopped())break t;l=o,a.currentTarget=g;try{l(a)}catch(b){Qa(b)}a.currentTarget=null,l=r}}}}function Y(t,e){var n=e[Fl];n===void 0&&(n=e[Fl]=new Set);var i=t+"__bubble";n.has(i)||(zd(e,t,2,!1),n.add(i))}function _o(t,e,n){var i=0;e&&(i|=4),zd(n,t,i,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[zl]){t[zl]=!0,xr.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||_o(n,!1,t),_o(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,_o("selectionchange",!1,e))}}function zd(t,e,n,i){switch(rf(e)){case 2:var a=jg;break;case 8:a=_g;break;default:a=ir}n=a.bind(null,e,n,t),a=void 0,!os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Vo(t,e,n,i,a){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Fn(o),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){i=l=s;continue t}o=o.parentNode}}i=i.return}Ur(function(){var g=l,b=ls(n),T=[];t:{var p=dc.get(t);if(p!==void 0){var v=Va,D=t;switch(t){case"keypress":if(_a(n)===0)break t;case"keydown":case"keyup":v=lh;break;case"focusin":D="focus",v=ds;break;case"focusout":D="blur",v=ds;break;case"beforeblur":case"afterblur":v=ds;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=rh;break;case oc:case rc:case cc:v=Jf;break;case uc:v=uh;break;case"scroll":case"scrollend":v=Pf;break;case"wheel":v=fh;break;case"copy":case"cut":case"paste":v=Ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Lr;break;case"toggle":case"beforetoggle":v=gh}var O=(e&4)!==0,ut=!O&&(t==="scroll"||t==="scrollend"),d=O?p!==null?p+"Capture":null:p;O=[];for(var c=g,h;c!==null;){var S=c;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||d===null||(S=_i(c,d),S!=null&&O.push(Sa(c,S,h))),ut)break;c=c.return}0<O.length&&(p=new v(p,D,null,n,b),T.push({event:p,listeners:O}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==as&&(D=n.relatedTarget||n.fromElement)&&(Fn(D)||D[Wn]))break t;if((v||p)&&(p=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,v?(D=n.relatedTarget||n.toElement,v=g,D=D?Fn(D):null,D!==null&&(ut=J(D),O=D.tag,D!==ut||O!==5&&O!==27&&O!==6)&&(D=null)):(v=null,D=g),v!==D)){if(O=jr,S="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(O=Lr,S="onPointerLeave",d="onPointerEnter",c="pointer"),ut=v==null?p:ji(v),h=D==null?p:ji(D),p=new O(S,c+"leave",v,n,b),p.target=ut,p.relatedTarget=h,S=null,Fn(b)===g&&(O=new O(d,c+"enter",D,n,b),O.target=h,O.relatedTarget=ut,S=O),ut=S,v&&D)e:{for(O=hg,d=v,c=D,h=0,S=d;S;S=O(S))h++;S=0;for(var H=c;H;H=O(H))S++;for(;0<h-S;)d=O(d),h--;for(;0<S-h;)c=O(c),S--;for(;h--;){if(d===c||c!==null&&d===c.alternate){O=d;break e}d=O(d),c=O(c)}O=null}else O=null;v!==null&&Hd(T,p,v,O,!1),D!==null&&ut!==null&&Hd(T,ut,D,O,!0)}}t:{if(p=g?ji(g):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var tt=Jr;else if(Kr(p))if(Wr)tt=Ch;else{tt=wh;var N=Th}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&is(g.elementType)&&(tt=Jr):tt=Ah;if(tt&&(tt=tt(t,g))){Zr(T,tt,n,b);break t}N&&N(t,p,g),t==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&ns(p,"number",p.value)}switch(N=g?ji(g):window,t){case"focusin":(Kr(N)||N.contentEditable==="true")&&(oi=N,vs=g,Zi=null);break;case"focusout":Zi=vs=oi=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,lc(T,n,b);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":lc(T,n,b)}var j;if(hs)t:{switch(t){case"compositionstart":var K="onCompositionStart";break t;case"compositionend":K="onCompositionEnd";break t;case"compositionupdate":K="onCompositionUpdate";break t}K=void 0}else si?Qr(t,n)&&(K="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Vr&&n.locale!=="ko"&&(si||K!=="onCompositionStart"?K==="onCompositionEnd"&&si&&(j=Gr()):(on=b,rs="value"in on?on.value:on.textContent,si=!0)),N=Hl(g,K),0<N.length&&(K=new _r(K,t,null,n,b),T.push({event:K,listeners:N}),j?K.data=j:(j=Xr(n),j!==null&&(K.data=j)))),(j=mh?vh(t,n):yh(t,n))&&(K=Hl(g,"onBeforeInput"),0<K.length&&(N=new _r("onBeforeInput","beforeinput",null,n,b),T.push({event:N,listeners:K}),N.data=j)),cg(T,t,g,n,b)}Nd(T,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=_i(t,n),a!=null&&i.unshift(Sa(t,a,l)),a=_i(t,e),a!=null&&i.push(Sa(t,a,l))),t.tag===3)return i;t=t.return}return[]}function hg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hd(t,e,n,i,a){for(var l=e._reactName,s=[];n!==null&&n!==i;){var o=n,r=o.alternate,g=o.stateNode;if(o=o.tag,r!==null&&r===i)break;o!==5&&o!==26&&o!==27||g===null||(r=g,a?(g=_i(n,l),g!=null&&s.unshift(Sa(n,g,r))):a||(g=_i(n,l),g!=null&&s.push(Sa(n,g,r)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var gg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(gg,`
`).replace(pg,"")}function Od(t,e){return e=Bd(e),Bd(t)===e}function ct(t,e,n,i,a,l){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ii(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ii(t,""+i);break;case"className":Ua(t,"class",i);break;case"tabIndex":Ua(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ua(t,n,i);break;case"style":Or(t,i,l);break;case"data":if(e!=="object"){Ua(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ia(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&ct(t,e,"name",a.name,a,null),ct(t,e,"formEncType",a.formEncType,a,null),ct(t,e,"formMethod",a.formMethod,a,null),ct(t,e,"formTarget",a.formTarget,a,null)):(ct(t,e,"encType",a.encType,a,null),ct(t,e,"method",a.method,a,null),ct(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ia(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=_e);break;case"onScroll":i!=null&&Y("scroll",t);break;case"onScrollEnd":i!=null&&Y("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(f(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Ia(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Y("beforetoggle",t),Y("toggle",t),qa(t,"popover",i);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qa(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Vf.get(n)||n,qa(t,n,i))}}function Yo(t,e,n,i,a,l){switch(n){case"style":Or(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(f(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ii(t,i):(typeof i=="number"||typeof i=="bigint")&&ii(t,""+i);break;case"onScroll":i!=null&&Y("scroll",t);break;case"onScrollEnd":i!=null&&Y("scrollend",t);break;case"onClick":i!=null&&(t.onclick=_e);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),l=t[Wt]||null,l=l!=null?l[n]:null,typeof l=="function"&&t.removeEventListener(e,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):qa(t,n,i)}}}function Vt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",t),Y("load",t);var i=!1,a=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ct(t,e,l,s,n,null)}}a&&ct(t,e,"srcSet",n.srcSet,n,null),i&&ct(t,e,"src",n.src,n,null);return;case"input":Y("invalid",t);var o=l=s=a=null,r=null,g=null;for(i in n)if(n.hasOwnProperty(i)){var b=n[i];if(b!=null)switch(i){case"name":a=b;break;case"type":s=b;break;case"checked":r=b;break;case"defaultChecked":g=b;break;case"value":l=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:ct(t,e,i,b,n,null)}}Nr(t,l,o,r,g,s,a,!1);return;case"select":Y("invalid",t),i=s=l=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ct(t,e,a,o,n,null)}e=l,n=s,t.multiple=!!i,e!=null?ni(t,!!i,e,!1):n!=null&&ni(t,!!i,n,!0);return;case"textarea":Y("invalid",t),l=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(f(91));break;default:ct(t,e,s,o,n,null)}Hr(t,i,a,l);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(i=n[r],i!=null))switch(r){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ct(t,e,r,i,n,null)}return;case"dialog":Y("beforetoggle",t),Y("toggle",t),Y("cancel",t),Y("close",t);break;case"iframe":case"object":Y("load",t);break;case"video":case"audio":for(i=0;i<ba.length;i++)Y(ba[i],t);break;case"image":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"embed":case"source":case"link":Y("error",t),Y("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(i=n[g],i!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ct(t,e,g,i,n,null)}return;default:if(is(e)){for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!==void 0&&Yo(t,e,b,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ct(t,e,o,i,n,null))}function mg(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,s=null,o=null,r=null,g=null,b=null;for(v in n){var T=n[v];if(n.hasOwnProperty(v)&&T!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=T;default:i.hasOwnProperty(v)||ct(t,e,v,null,i,T)}}for(var p in i){var v=i[p];if(T=n[p],i.hasOwnProperty(p)&&(v!=null||T!=null))switch(p){case"type":l=v;break;case"name":a=v;break;case"checked":g=v;break;case"defaultChecked":b=v;break;case"value":s=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,e));break;default:v!==T&&ct(t,e,p,v,i,T)}}es(t,s,o,r,g,b,l,a);return;case"select":v=s=o=p=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":v=r;default:i.hasOwnProperty(l)||ct(t,e,l,null,i,r)}for(a in i)if(l=i[a],r=n[a],i.hasOwnProperty(a)&&(l!=null||r!=null))switch(a){case"value":p=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==r&&ct(t,e,a,l,i,r)}e=o,n=s,i=v,p!=null?ni(t,!!n,p,!1):!!i!=!!n&&(e!=null?ni(t,!!n,e,!0):ni(t,!!n,n?[]:"",!1));return;case"textarea":v=p=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ct(t,e,o,null,i,a)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":p=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==l&&ct(t,e,s,a,i,l)}zr(t,p,v);return;case"option":for(var D in n)if(p=n[D],n.hasOwnProperty(D)&&p!=null&&!i.hasOwnProperty(D))switch(D){case"selected":t.selected=!1;break;default:ct(t,e,D,null,i,p)}for(r in i)if(p=i[r],v=n[r],i.hasOwnProperty(r)&&p!==v&&(p!=null||v!=null))switch(r){case"selected":t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ct(t,e,r,p,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in n)p=n[O],n.hasOwnProperty(O)&&p!=null&&!i.hasOwnProperty(O)&&ct(t,e,O,null,i,p);for(g in i)if(p=i[g],v=n[g],i.hasOwnProperty(g)&&p!==v&&(p!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(f(137,e));break;default:ct(t,e,g,p,i,v)}return;default:if(is(e)){for(var ut in n)p=n[ut],n.hasOwnProperty(ut)&&p!==void 0&&!i.hasOwnProperty(ut)&&Yo(t,e,ut,void 0,i,p);for(b in i)p=i[b],v=n[b],!i.hasOwnProperty(b)||p===v||p===void 0&&v===void 0||Yo(t,e,b,p,i,v);return}}for(var d in n)p=n[d],n.hasOwnProperty(d)&&p!=null&&!i.hasOwnProperty(d)&&ct(t,e,d,null,i,p);for(T in i)p=i[T],v=n[T],!i.hasOwnProperty(T)||p===v||p==null&&v==null||ct(t,e,T,p,i,v)}function qd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],l=a.transferSize,s=a.initiatorType,o=a.duration;if(l&&o&&qd(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var r=n[i],g=r.startTime;if(g>o)break;var b=r.transferSize,T=r.initiatorType;b&&qd(T)&&(r=r.responseEnd,s+=b*(r<o?1:(o-g)/(r-g)))}if(--i,e+=8*(l+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Po=null,Qo=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function Ud(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Xo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ko=null;function yg(){var t=window.event;return t&&t.type==="popstate"?t===Ko?!1:(Ko=t,!0):(Ko=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(Tg)}:Id;function Tg(t){setTimeout(function(){throw t})}function Cn(t){return t==="head"}function _d(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Bi(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ta(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ta(n);for(var l=n.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[Ii]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&Ta(t.ownerDocument.body);n=a}while(n);Bi(e)}function Ld(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Zo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Zo(n),$l(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function wg(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ii])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Ee(t.nextSibling),t===null)break}return null}function Ag(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ee(t.nextSibling),t===null))return null;return t}function Vd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ee(t.nextSibling),t===null))return null;return t}function Jo(t){return t.data==="$?"||t.data==="$~"}function Wo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cg(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fo=null;function Yd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ee(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Pd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Qd(t,e,n){switch(e=Bl(n),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Ta(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$l(t)}var Re=new Map,Xd=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var an=x.d;x.d={f:xg,r:Mg,D:Dg,C:Eg,L:Rg,m:kg,X:zg,S:Ng,M:Hg};function xg(){var t=an.f(),e=Ml();return t||e}function Mg(t){var e=$n(t);e!==null&&e.tag===5&&e.type==="form"?uu(e):an.r(t)}var Ni=typeof document>"u"?null:document;function Kd(t,e,n){var i=Ni;if(i&&typeof e=="string"&&e){var a=Te(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Xd.has(a)||(Xd.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Vt(e,"link",t),Ot(e),i.head.appendChild(e)))}}function Dg(t){an.D(t),Kd("dns-prefetch",t,null)}function Eg(t,e){an.C(t,e),Kd("preconnect",t,e)}function Rg(t,e,n){an.L(t,e,n);var i=Ni;if(i&&t&&e){var a='link[rel="preload"][as="'+Te(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Te(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Te(n.imageSizes)+'"]')):a+='[href="'+Te(t)+'"]';var l=a;switch(e){case"style":l=zi(t);break;case"script":l=Hi(t)}Re.has(l)||(t=B({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Re.set(l,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(wa(l))||e==="script"&&i.querySelector(Aa(l))||(e=i.createElement("link"),Vt(e,"link",t),Ot(e),i.head.appendChild(e)))}}function kg(t,e){an.m(t,e);var n=Ni;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Te(i)+'"][href="'+Te(t)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Hi(t)}if(!Re.has(l)&&(t=B({rel:"modulepreload",href:t},e),Re.set(l,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Aa(l)))return}i=n.createElement("link"),Vt(i,"link",t),Ot(i),n.head.appendChild(i)}}}function Ng(t,e,n){an.S(t,e,n);var i=Ni;if(i&&t){var a=ti(i).hoistableStyles,l=zi(t);e=e||"default";var s=a.get(l);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(wa(l)))o.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Re.get(l))&&$o(t,n);var r=s=i.createElement("link");Ot(r),Vt(r,"link",t),r._p=new Promise(function(g,b){r.onload=g,r.onerror=b}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ql(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(l,s)}}}function zg(t,e){an.X(t,e);var n=Ni;if(n&&t){var i=ti(n).hoistableScripts,a=Hi(t),l=i.get(a);l||(l=n.querySelector(Aa(a)),l||(t=B({src:t,async:!0},e),(e=Re.get(a))&&tr(t,e),l=n.createElement("script"),Ot(l),Vt(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Hg(t,e){an.M(t,e);var n=Ni;if(n&&t){var i=ti(n).hoistableScripts,a=Hi(t),l=i.get(a);l||(l=n.querySelector(Aa(a)),l||(t=B({src:t,async:!0,type:"module"},e),(e=Re.get(a))&&tr(t,e),l=n.createElement("script"),Ot(l),Vt(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Zd(t,e,n,i){var a=(a=_.current)?Ol(a):null;if(!a)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=zi(n.href),n=ti(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=zi(n.href);var l=ti(a).hoistableStyles,s=l.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,s),(l=a.querySelector(wa(t)))&&!l._p&&(s.instance=l,s.state.loading=5),Re.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Re.set(t,n),l||Bg(a,t,n,s.state))),e&&i===null)throw Error(f(528,""));return s}if(e&&i!==null)throw Error(f(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Hi(n),n=ti(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function zi(t){return'href="'+Te(t)+'"'}function wa(t){return'link[rel="stylesheet"]['+t+"]"}function Jd(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function Bg(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Vt(e,"link",n),Ot(e),t.head.appendChild(e))}function Hi(t){return'[src="'+Te(t)+'"]'}function Aa(t){return"script[async]"+t}function Wd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Te(n.href)+'"]');if(i)return e.instance=i,Ot(i),i;var a=B({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ot(i),Vt(i,"style",a),ql(i,n.precedence,t),e.instance=i;case"stylesheet":a=zi(n.href);var l=t.querySelector(wa(a));if(l)return e.state.loading|=4,e.instance=l,Ot(l),l;i=Jd(n),(a=Re.get(a))&&$o(i,a),l=(t.ownerDocument||t).createElement("link"),Ot(l);var s=l;return s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Vt(l,"link",i),e.state.loading|=4,ql(l,n.precedence,t),e.instance=l;case"script":return l=Hi(n.src),(a=t.querySelector(Aa(l)))?(e.instance=a,Ot(a),a):(i=n,(a=Re.get(l))&&(i=B({},n),tr(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Ot(a),Vt(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ql(i,n.precedence,t));return e.instance}function ql(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function $o(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ul=null;function Fd(t,e,n){if(Ul===null){var i=new Map,a=Ul=new Map;a.set(n,i)}else a=Ul,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var l=n[a];if(!(l[Ii]||l[It]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(l):i.set(s,[l])}}return i}function $d(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Og(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qg(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=zi(i.href),l=e.querySelector(wa(a));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Gl.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=l,Ot(l);return}l=e.ownerDocument||e,i=Jd(i),(a=Re.get(a))&&$o(i,a),l=l.createElement("link"),Ot(l);var s=l;s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Vt(l,"link",i),n.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Gl.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var er=0;function Ug(t,e){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&er===0&&(er=62500*vg());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>er?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function jl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,e.forEach(Gg,t),Il=null,Gl.call(t))}function Gg(t,e){if(!(e.state.loading&4)){var n=Il.get(t);if(n)var i=n.get(null);else{n=new Map,Il.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var s=a[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),l=n.get(s)||i,l===i&&n.set(null,a),n.set(s,a),this.count++,i=Gl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ca={$$typeof:Ct,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Ig(t,e,n,i,a,l,s,o,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.hiddenUpdates=Zl(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ef(t,e,n,i,a,l,s,o,r,g,b,T){return t=new Ig(t,e,n,s,r,g,b,T,o),e=1,l===!0&&(e|=24),l=de(3,null,null,e),t.current=l,l.stateNode=t,e=Hs(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:e},Us(l),t}function nf(t){return t?(t=ui,t):ui}function af(t,e,n,i,a,l){a=nf(a),i.context===null?i.context=a:i.pendingContext=a,i=hn(e),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=gn(t,i,e),n!==null&&(ie(n,t,e),na(n,t,e))}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nr(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function sf(t){if(t.tag===13||t.tag===31){var e=qn(t,67108864);e!==null&&ie(e,t,67108864),nr(t,67108864)}}function of(t){if(t.tag===13||t.tag===31){var e=me();e=Jl(e);var n=qn(t,e);n!==null&&ie(n,t,e),nr(t,e)}}var _l=!0;function jg(t,e,n,i){var a=y.T;y.T=null;var l=x.p;try{x.p=2,ir(t,e,n,i)}finally{x.p=l,y.T=a}}function _g(t,e,n,i){var a=y.T;y.T=null;var l=x.p;try{x.p=8,ir(t,e,n,i)}finally{x.p=l,y.T=a}}function ir(t,e,n,i){if(_l){var a=ar(i);if(a===null)Vo(t,e,i,Ll,n),cf(t,i);else if(Vg(a,t,e,n,i))i.stopPropagation();else if(cf(t,i),e&4&&-1<Lg.indexOf(t)){for(;a!==null;){var l=$n(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Nn(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var r=1<<31-ce(s);o.entanglements[1]|=r,s&=~r}Ge(l),(nt&6)===0&&(Cl=oe()+500,ya(0))}}break;case 31:case 13:o=qn(l,2),o!==null&&ie(o,l,2),Ml(),nr(l,2)}if(l=ar(i),l===null&&Vo(t,e,i,Ll,n),l===a)break;a=l}a!==null&&i.stopPropagation()}else Vo(t,e,i,null,n)}}function ar(t){return t=ls(t),lr(t)}var Ll=null;function lr(t){if(Ll=null,t=Fn(t),t!==null){var e=J(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=W(e),t!==null)return t;t=null}else if(n===31){if(t=wt(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ll=t,null}function rf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Df()){case pr:return 2;case mr:return 8;case Na:case Ef:return 32;case vr:return 268435456;default:return 32}default:return 32}}var sr=!1,xn=null,Mn=null,Dn=null,xa=new Map,Ma=new Map,En=[],Lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cf(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Da(t,e,n,i,a,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},e!==null&&(e=$n(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Vg(t,e,n,i,a){switch(e){case"focusin":return xn=Da(xn,t,e,n,i,a),!0;case"dragenter":return Mn=Da(Mn,t,e,n,i,a),!0;case"mouseover":return Dn=Da(Dn,t,e,n,i,a),!0;case"pointerover":var l=a.pointerId;return xa.set(l,Da(xa.get(l)||null,t,e,n,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Ma.set(l,Da(Ma.get(l)||null,t,e,n,i,a)),!0}return!1}function uf(t){var e=Fn(t.target);if(e!==null){var n=J(e);if(n!==null){if(e=n.tag,e===13){if(e=W(n),e!==null){t.blockedOn=e,Ar(t.priority,function(){of(n)});return}}else if(e===31){if(e=wt(n),e!==null){t.blockedOn=e,Ar(t.priority,function(){of(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ar(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);as=i,n.target.dispatchEvent(i),as=null}else return e=$n(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function df(t,e,n){Vl(t)&&n.delete(e)}function Yg(){sr=!1,xn!==null&&Vl(xn)&&(xn=null),Mn!==null&&Vl(Mn)&&(Mn=null),Dn!==null&&Vl(Dn)&&(Dn=null),xa.forEach(df),Ma.forEach(df)}function Yl(t,e){t.blockedOn===e&&(t.blockedOn=null,sr||(sr=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,Yg)))}var Pl=null;function ff(t){Pl!==t&&(Pl=t,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Pl===t&&(Pl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(lr(i||n)===null)continue;break}var l=$n(n);l!==null&&(t.splice(e,3),e-=3,io(l,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Bi(t){function e(r){return Yl(r,t)}xn!==null&&Yl(xn,t),Mn!==null&&Yl(Mn,t),Dn!==null&&Yl(Dn,t),xa.forEach(e),Ma.forEach(e);for(var n=0;n<En.length;n++){var i=En[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<En.length&&(n=En[0],n.blockedOn===null);)uf(n),n.blockedOn===null&&En.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],s=a[Wt]||null;if(typeof l=="function")s||ff(n);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,s=l[Wt]||null)o=s.formAction;else if(lr(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ff(n)}}}function hf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function or(t){this._internalRoot=t}Ql.prototype.render=or.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var n=e.current,i=me();af(n,i,t,e,null,null)},Ql.prototype.unmount=or.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;af(t.current,2,null,t,null,null),Ml(),e[Wn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=wr();t={blockedOn:null,target:t,priority:e};for(var n=0;n<En.length&&e!==0&&e<En[n].priority;n++);En.splice(n,0,t),n===0&&uf(t)}};var gf=ft.version;if(gf!=="19.2.0")throw Error(f(527,gf,"19.2.0"));x.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=A(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var Pg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{qi=Xl.inject(Pg),re=Xl}catch{}}return Ra.createRoot=function(t,e){if(!G(t))throw Error(f(299));var n=!1,i="",a=Su,l=Tu,s=wu;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,i,null,a,l,s,hf),t[Wn]=e.current,Lo(t),new or(e)},Ra.hydrateRoot=function(t,e,n){if(!G(t))throw Error(f(299));var i=!1,a="",l=Su,s=Tu,o=wu,r=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),e=ef(t,1,!0,e,n??null,i,a,r,l,s,o,hf),e.context=nf(null),n=e.current,i=me(),i=Jl(i),a=hn(i),a.callback=null,gn(n,a,i),n=i,e.current.lanes=n,Gi(e,n),Ge(e),t[Wn]=e.current,Lo(t),new Ql(e)},Ra.version="19.2.0",Ra}var Cf;function ep(){if(Cf)return ur.exports;Cf=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(ft){console.error(ft)}}return E(),ur.exports=tp(),ur.exports}var np=ep();const ip=[{unit:"I",title:"Introduction to Mobile Computing",notes:"<h3>Unit I Overview</h3><p>This unit establishes the foundational concepts of mobile computing, including the paradigm, architecture, devices, and the GSM standard.</p>",topics:[{title:"Mobile Computing Paradigm",content:`
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
        `}]}],ap={I:[{question:"What is the primary difference between Mobile Computing and Mobile Communication?",options:["Mobile Computing involves data processing, while Mobile Communication involves data transmission.","Mobile Computing is only for laptops.","Mobile Communication is only for phones.","There is no difference."],answer:0},{question:"Which of the following is NOT a subsystem of GSM Architecture?",options:["Mobile Station (MS)","Base Station Subsystem (BSS)","Network and Switching Subsystem (NSS)","Global Positioning System (GPS)"],answer:3},{question:"What does HLR stand for in GSM?",options:["Home Location Register","Home Local Radio","Host Location Register","High Level Register"],answer:0}],II:[{question:"Which problem occurs when two terminals can hear the base station but not each other?",options:["Exposed Terminal Problem","Hidden Terminal Problem","Near-Far Problem","Far-Near Problem"],answer:1},{question:"What is the temporary IP address assigned to a mobile node in a foreign network called?",options:["Home Address","Foreign Address","Care-of Address (CoA)","Mobile Address"],answer:2},{question:"Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",options:["Routing","Tunneling","Switching","Bridging"],answer:1}],III:[{question:"Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",options:["Mobile TCP","Snooping TCP","Indirect TCP (I-TCP)","Fast Retransmit TCP"],answer:2},{question:"In Snooping TCP, where are the packets buffered?",options:["Mobile Node","Base Station","Home Agent","Foreign Agent"],answer:1},{question:"What does M-TCP do when the mobile client disconnects?",options:["It terminates the connection.","It keeps sending packets.","It forces the sender into Persist Mode.","It switches to UDP."],answer:2}],IV:[{question:"Which data delivery mechanism is best for highly popular data like stock quotes?",options:["Pull-based (On-demand)","Push-based (Publish-Subscribe)","Hybrid","Selective Tuning"],answer:1},{question:"What is the main advantage of Selective Tuning?",options:["Increases bandwidth","Reduces latency","Conserves battery power","Increases security"],answer:2},{question:"In Index-based selective tuning, what does the device do after reading the index?",options:["Immediately downloads all data","Disconnects from the network","Sleeps until the desired data arrives","Sends an acknowledgement"],answer:2}],V:[{question:"Which of the following is a characteristic of MANETs?",options:["Centralized Administration","Static Topology","Multi-hop Routing","Unlimited Power Supply"],answer:2},{question:"DSDV is an example of which type of routing protocol?",options:["Reactive (On-demand)","Proactive (Table-driven)","Hybrid","Static"],answer:1},{question:"Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",options:["DSDV","AODV","OSPF","BGP"],answer:1}]},lp={title:"B.Tech IV Year I Semester Regular Examinations",subject:"MOBILE COMPUTING",time:"3 Hours",maxMarks:75,partA:[{unit:"I",id:1,question:"Define Mobile Computing.",answer:"<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link.<br/><br/><strong>Key Aspects:</strong><br/>1. <strong>Mobile Communication:</strong> The infrastructure (networks).<br/>2. <strong>Mobile Hardware:</strong> The devices (Sensors, Smartphones).<br/>3. <strong>Mobile Software:</strong> The OS and Apps."},{unit:"I",id:2,question:"List the limitations of Mobile Devices.",answer:"<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft.<br/>5. <strong>Transmission Interferences:</strong> Weather, terrain, and obstacles affect signal."},{unit:"II",id:3,question:"What is the Hidden Terminal Problem?",answer:"<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions.<br/><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send) mechanism."},{unit:"II",id:4,question:"Define Care-of Address (CoA).",answer:"<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location.<br/><strong>Types:</strong><br/>1. <strong>Foreign Agent CoA:</strong> Address of the FA.<br/>2. <strong>Co-located CoA:</strong> Temporarily assigned directly to the MN (via DHCP)."},{unit:"III",id:5,question:"What is Snooping TCP?",answer:"<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link. It 'snoops' (monitors) the TCP segments and ACKs to handle wireless errors locally, hiding them from the sender."},{unit:"III",id:6,question:"Define Database Hoarding.",answer:"<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network. It enables <strong>Disconnected Operations</strong>."},{unit:"IV",id:7,question:"Differentiate between Push and Pull mechanisms.",answer:"<strong>Push (Publish-Subscribe):</strong> Server sends data without request. Best for popular data (News, Stock tickers). Scalable but may spam clients.<br/><br/><strong>Pull (On-Demand):</strong> Client explicitly requests data. Best for personalized data (Email). High server load but customized."},{unit:"IV",id:8,question:"What is Selective Tuning?",answer:"<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time (Doze mode) and wake up only when the data of interest is being broadcast. It requires an <strong>Index</strong> to tell the client <em>when</em> to wake up."},{unit:"V",id:9,question:"Define MANET.",answer:"<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers, forwarding packets for each other."},{unit:"V",id:10,question:"What is a Proactive Routing Protocol?",answer:"<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV). Routes are available immediately, but overhead is high."}],partB:[{unit:"I",questionNumber:11,choices:[{type:"a",question:"Explain the GSM System Architecture with a neat diagram.",answer:`
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
          `}]}]},rp=[{category:"🏆 The Golden Answer Framework",tips:[{title:"The Universal 5-Step Structure",content:`
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
        `}]}],cp=[{id:1,unit:"I",front:"Mobile Computing Definition",back:`
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
    `}],up=[{unit:"I",title:"Sensors / Transducers & Electromechanical Sensors",notes:"<h3>Unit I Overview</h3><p>This unit covers the fundamental principles of sensors, their classification, and detailed study of electromechanical sensors like Strain Gauges and Capacitive Sensors.</p>",topics:[{title:"Sensors & Transducers Basics",content:`
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
        `}]}],dp={I:[{question:"Which of the following is an Active Sensor?",options:["Thermocouple","Strain Gauge","LDR","Thermistor"],answer:0},{question:"The sensitivity of a sensor is defined as:",options:["Output / Input","Input / Output","Change in Output / Change in Input","Max Output"],answer:2}],II:[{question:"Which effect is used in Thermocouples?",options:["Peltier Effect","Seebeck Effect","Hall Effect","Piezoelectric Effect"],answer:1}],III:[{question:"Hall Effect sensors are used to measure:",options:["Temperature","Magnetic Field","Humidity","Pressure"],answer:1}],IV:[{question:"LDR stands for:",options:["Light Dependent Resistor","Low Density Resistor","Light Detecting Radar","None"],answer:0}],V:[{question:"A Smart Sensor typically includes:",options:["Only sensing element","Sensing element + ADC + Processor","Only ADC","None"],answer:1}]},fp={title:"ELECTRONIC SENSORS - MODEL PAPER 1",subject:"Electronic Sensors (Open Elective-II)",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Sensor and Transducer.",answer:"Sensor detects physical parameter. Transducer converts energy form."},{id:2,question:"What is Gauge Factor?",answer:"Sensitivity of strain gauge. GF = (dR/R)/strain."},{id:3,question:"State Seebeck Effect.",answer:"EMF generation at junction of dissimilar metals due to temp diff."},{id:4,question:"What is a Thermistor?",answer:"Resistor with high negative temp coefficient."},{id:5,question:"Define Hall Effect.",answer:"Voltage generation perpendicular to current and magnetic field."},{id:6,question:"What is LVDT?",answer:"Linear Variable Differential Transformer for displacement."},{id:7,question:"What is LDR?",answer:"Light Dependent Resistor."},{id:8,question:"Define SHE.",answer:"Standard Hydrogen Electrode (0V reference)."},{id:9,question:"What is a Smart Sensor?",answer:"Sensor with built-in processing and communication."},{id:10,question:"List 2 automotive sensors.",answer:"ABS sensor, Airbag sensor."}],partB:[{unit:"I",questionNumber:11,choices:[{question:"Explain the working principle of Strain Gauge.",answer:"Detailed explanation of piezoresistive effect..."},{question:"Describe Capacitive Transducers.",answer:"Principle C=eA/d and applications..."}]}]},hp=[{category:"Sensor Diagrams",tips:[{title:"Draw the Block Diagram",content:"For any sensor (e.g., Smart Sensor), always draw: **Input -> Sensing Element -> Signal Conditioning -> ADC -> Output**."}]}],gp=[{id:1,unit:"I",front:"Transducer",back:'<div class="fc-content"><p>Device converting energy from one form to another.</p></div>'},{id:2,unit:"I",front:"Gauge Factor",back:'<div class="fc-content"><p>Sensitivity of Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong></p></div>'},{id:3,unit:"II",front:"Seebeck Effect",back:'<div class="fc-content"><p>Generation of EMF when two dissimilar metals are kept at different temperatures.</p></div>'},{id:4,unit:"III",front:"Hall Effect",back:'<div class="fc-content"><p>Voltage generated perpendicular to both current and magnetic field.</p></div>'},{id:5,unit:"V",front:"Smart Sensor",back:'<div class="fc-content"><p>Sensor + Signal Conditioning + ADC + Processor.</p></div>'}],pp=[{unit:"I",title:"Professional Practice and Ethics",notes:"<h3>Unit I Overview</h3><p>This unit lays the foundation for ethical practice in engineering, distinguishing between personal and professional ethics, and defining the core responsibilities and liabilities of a professional.</p>",topics:[{title:"Definition of Professional Ethics",content:`
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
        `}]}],mp={I:[{id:1,question:"What is the primary focus of Engineering Ethics?",options:["Profit Maximization","Public Safety","Personal Gain","Corporate Loyalty"],answer:1}],II:[],III:[],IV:[],V:[]},vp={title:"Professional Practice, Law & Ethics - Model Paper 1",subject:"Professional Practice, Law & Ethics",time:"3 Hours",maxMarks:75,partA:[{id:1,question:"Define Professional Ethics.",answer:"<strong>Professional Ethics</strong> refers to the personal and corporate rules that govern behavior within the context of a particular profession. It involves principles of conduct, integrity, and responsibility towards the public, clients, and employers."},{id:2,question:"What is the main objective of Engineering Ethics?",answer:"The main objective is to ensure that engineers uphold the highest standards of integrity and prioritize the <strong>safety, health, and welfare of the public</strong> in the performance of their professional duties."},{id:3,question:"Define a 'Contract' as per the Indian Contract Act, 1872.",answer:"According to Section 2(h) of the Indian Contract Act, 1872, a <strong>Contract</strong> is an agreement enforceable by law. <br><em>Formula: Contract = Agreement + Enforceability.</em>"},{id:4,question:"What is meant by 'Quid Pro Quo' in a contract?",answer:"<strong>Quid Pro Quo</strong> means 'something in return'. In legal terms, it refers to <strong>Consideration</strong>, which is an essential element of a valid contract. Without consideration, a contract is generally void."},{id:5,question:"Define Arbitration.",answer:"<strong>Arbitration</strong> is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute."},{id:6,question:"What is an Arbitral Award?",answer:"An <strong>Arbitral Award</strong> is the final decision or judgment given by the arbitration tribunal. It is binding on the parties and is enforceable in the same manner as a court decree."},{id:7,question:"What is the purpose of the Industrial Employment (Standing Orders) Act, 1946?",answer:"Its purpose is to require employers in industrial establishments to formally define conditions of employment (standing orders) and make them known to workmen to prevent ambiguity and disputes."},{id:8,question:"Define 'Workman' under the Workmen's Compensation Act.",answer:"A <strong>Workman</strong> is any person (other than a person whose employment is of a casual nature) who is employed for the purposes of the employer's trade or business."},{id:9,question:"What does IPR stand for? Give two examples.",answer:"<strong>IPR</strong> stands for <strong>Intellectual Property Rights</strong>. Examples include: <br>1. <strong>Patents</strong> (for inventions). <br>2. <strong>Copyrights</strong> (for literary/artistic works)."},{id:10,question:"What is the validity period of a Patent in India?",answer:"The term of every patent granted in India is <strong>20 years</strong> from the date of filing of the application."}],partB:[{unit:"I",questionNumber:2,choices:[{question:"Explain the difference between Personal Ethics and Professional Ethics with suitable examples. Discuss the concept of Professional Responsibility.",answer:`
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
          `}]}]},yp=[{category:"General Strategy",tips:[{title:"Understand the Act",content:"For law-related questions, always mention the specific Act (e.g., Contract Act 1872) to score higher."}]}],bp=[{unit:"I",front:"What is Engineering Ethics?",back:"The study of moral issues and decisions confronting individuals and organizations engaged in engineering."}];function Sp(){const[E,ft]=zt.useState(null),f=E==="sensors"?{title:"Electronic Sensors",syllabus:up,quizzes:dp,papers:[fp],tips:hp,flashcards:gp,progressKey:"electronicSensorsProgress"}:E==="pple"?{title:"Professional Practice, Law & Ethics",syllabus:pp,quizzes:mp,papers:[vp],tips:yp,flashcards:bp,progressKey:"ppleProgress"}:{title:"Mobile Computing",syllabus:ip,quizzes:ap,papers:[lp,sp,op],tips:rp,flashcards:cp,progressKey:"mobileComputingProgress"},[G,J]=zt.useState(null),[W,wt]=zt.useState(null),[k,A]=zt.useState("study"),[P,B]=zt.useState(0),[at,Ht]=zt.useState(0),[Yt,At]=zt.useState(!1),[Jt,Pt]=zt.useState([]),[Ut,Ct]=zt.useState({}),[Kt,ae]=zt.useState(0),[Rt,L]=zt.useState({}),[Gt,le]=zt.useState({}),[Be,se]=zt.useState(null),[kt,ve]=zt.useState(0),[ye,Qt]=zt.useState(!1),[y,x]=zt.useState([]),[z,$]=zt.useState(0);zt.useEffect(()=>{if(E){const C=localStorage.getItem(f.progressKey);Ct(C?JSON.parse(C):{}),A("study"),J(null),wt(null),x([...f.flashcards]),ve(0),ae(0)}},[E,f.progressKey,f.flashcards]);const lt=(C,Q,ht)=>{const be=Ut[C]?.score||0;if(Q>be){const Jn={...Ut,[C]:{score:Q,total:ht}};Ct(Jn),localStorage.setItem(f.progressKey,JSON.stringify(Jn))}},u=C=>{J(G===C?null:C)},w=C=>se(C),M=()=>se(null),R=C=>{f.quizzes[C]?(wt(C),B(0),Ht(0),At(!1)):alert("Quiz coming soon for this unit!")},q=()=>{let C=[];Object.values(f.quizzes).forEach(be=>{C=[...C,...be]});const ht=C.sort(()=>.5-Math.random()).slice(0,10);Pt(ht),wt("FINAL"),B(0),Ht(0),At(!1)},_=C=>{let Q=!1;const ht=W==="FINAL"?Jt:f.quizzes[W];C===ht[P].answer&&(Q=!0),Q&&Ht(at+1);const be=P+1;be<ht.length?B(be):(At(!0),lt(W,Q?at+1:at,ht.length))},F=()=>{wt(null),B(0),Ht(0),At(!1),Pt([])},Bt=C=>{L(Q=>({...Q,[C]:!Q[C]}))},mt=(C,Q)=>{le(ht=>({...ht,[C]:Q}))},kn=C=>{ae(C),L({}),le({}),window.scrollTo(0,0)},Zn=()=>{Qt(!1),setTimeout(()=>ve(C=>(C+1)%y.length),200)},Oi=()=>{Qt(!1),setTimeout(()=>ve(C=>(C-1+y.length)%y.length),200)},ka=()=>Qt(!ye),Ie=()=>{Qt(!1),setTimeout(()=>{const C=[...f.flashcards].sort(()=>.5-Math.random());x(C),ve(0)},200)};if(!E)return m.jsxs("div",{className:"container",style:{textAlign:"center",marginTop:"4rem"},children:[m.jsx("h1",{children:"Select Your Subject"}),m.jsxs("div",{className:"grid",style:{maxWidth:"800px",margin:"2rem auto"},children:[m.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ft("mobile"),children:[m.jsx("h2",{children:"📱 Mobile Computing"}),m.jsx("p",{children:"Unit I - V, Quizzes, Model Papers"}),m.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),m.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ft("sensors"),children:[m.jsx("h2",{children:"🌡️ Electronic Sensors"}),m.jsx("p",{children:"Unit I - V, Open Elective-II"}),m.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]}),m.jsxs("div",{className:"card",style:{cursor:"pointer"},onClick:()=>ft("pple"),children:[m.jsx("h2",{children:"⚖️ Professional Practice & Ethics"}),m.jsx("p",{children:"Unit I - V, Law, IPR & Contracts"}),m.jsx("button",{className:"btn btn-primary",children:"Start Learning"})]})]})]});const ke=f.papers[Kt];return m.jsxs("div",{className:"container",children:[m.jsxs("header",{children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[m.jsx("button",{className:"btn",onClick:()=>ft(null),children:"← Switch Subject"}),m.jsx("span",{className:"unit-badge",children:f.title})]}),m.jsxs("h1",{children:[f.title," Prep"]}),m.jsx("p",{className:"subtitle",children:"B.Tech Exam Preparation Companion"}),m.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"1rem",flexWrap:"wrap"},children:[m.jsx("button",{className:`btn ${k==="study"?"btn-primary":""}`,onClick:()=>A("study"),children:"Study Mode"}),m.jsx("button",{className:`btn ${k==="paper"?"btn-primary":""}`,onClick:()=>A("paper"),children:"Model Papers"}),m.jsx("button",{className:`btn ${k==="tips"?"btn-primary":""}`,onClick:()=>A("tips"),children:"Exam Tips"}),m.jsx("button",{className:`btn ${k==="flashcards"?"btn-primary":""}`,onClick:()=>A("flashcards"),children:"Flashcards"})]}),k==="study"&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"btn btn-primary",style:{marginTop:"1rem"},onClick:q,children:"Start Final Exam (Mixed)"}),Ut.FINAL&&m.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--primary-color)"},children:["Best Final Exam Score: ",Ut.FINAL.score,"/",Ut.FINAL.total]})]})]}),k==="study"&&m.jsx("main",{className:"grid",children:f.syllabus.map(C=>m.jsxs("div",{className:"card",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("span",{className:"unit-badge",children:["Unit ",C.unit]}),Ut[C.unit]&&m.jsxs("span",{style:{fontSize:"0.8rem",color:"green",fontWeight:"bold"},children:["Score: ",Ut[C.unit].score,"/",Ut[C.unit].total]})]}),m.jsx("h2",{children:C.title}),G===C.unit&&C.notes?m.jsx("div",{className:"notes-content",children:m.jsx("div",{dangerouslySetInnerHTML:{__html:C.notes}})}):m.jsxs("div",{className:"topics-list-container",children:[m.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.5rem"},children:"Select a topic to learn:"}),m.jsx("div",{className:"topics-grid",children:C.topics.map((Q,ht)=>m.jsx("button",{className:"topic-btn",onClick:()=>w(Q),children:Q.title},ht))})]}),m.jsxs("div",{className:"actions",children:[m.jsx("button",{className:`btn ${G===C.unit?"btn-primary":""}`,onClick:()=>C.notes?u(C.unit):alert("Notes coming soon!"),children:G===C.unit?"Hide Overview":"Unit Overview"}),m.jsx("button",{className:"btn btn-primary",onClick:()=>R(C.unit),children:"Take Quiz"})]})]},C.unit))}),k==="paper"&&m.jsxs("main",{className:"paper-container",children:[m.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:f.papers.map((C,Q)=>m.jsxs("button",{className:`btn ${Kt===Q?"btn-primary":""}`,onClick:()=>kn(Q),children:["Paper Set ",Q+1]},Q))}),m.jsxs("div",{className:"paper-header",children:[m.jsx("h2",{children:ke.title}),m.jsx("h3",{children:ke.subject}),m.jsxs("div",{className:"paper-meta",children:[m.jsxs("span",{children:["Time: ",ke.time]}),m.jsxs("span",{children:["Max Marks: ",ke.maxMarks]})]})]}),m.jsxs("div",{className:"paper-section",children:[m.jsx("h3",{children:"PART-A (Short Answer Questions)"}),m.jsx("p",{children:"Answer all 10 questions. Each question carries 1 mark."}),m.jsx("div",{className:"questions-list",children:ke.partA.map(C=>m.jsxs("div",{className:"question-item",children:[m.jsxs("div",{className:"question-text",children:[m.jsxs("strong",{children:[C.id,"."]})," ",C.question," ",m.jsx("span",{className:"marks",children:"[1M]"})]}),m.jsx("textarea",{className:"answer-input",placeholder:"Write your answer here...",value:Gt[`A-${C.id}`]||"",onChange:Q=>mt(`A-${C.id}`,Q.target.value)}),m.jsx("button",{className:"btn-text",onClick:()=>Bt(`A-${C.id}`),children:Rt[`A-${C.id}`]?"Hide Model Answer":"Show Model Answer"}),Rt[`A-${C.id}`]&&m.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:C.answer}})]},C.id))})]}),ke.partB&&m.jsxs("div",{className:"paper-section",children:[m.jsx("h3",{children:"PART-B (Long Answer Questions)"}),m.jsx("p",{children:"Answer any 5 questions. Each question carries 10 marks."}),m.jsx("div",{className:"questions-list",children:ke.partB.map(C=>m.jsxs("div",{className:"question-group",children:[m.jsxs("h4",{children:["Unit ",C.unit]}),C.choices.map((Q,ht)=>m.jsxs("div",{children:[m.jsxs("div",{className:"question-item",children:[m.jsxs("div",{className:"question-text",children:[m.jsxs("strong",{children:[C.questionNumber," (",String.fromCharCode(97+ht),")."]})," ",Q.question," ",m.jsx("span",{className:"marks",children:"[10M]"})]}),m.jsx("textarea",{className:"answer-input large",placeholder:"Write your answer here...",value:Gt[`B-${C.questionNumber}${ht}`]||"",onChange:be=>mt(`B-${C.questionNumber}${ht}`,be.target.value)}),m.jsx("button",{className:"btn-text",onClick:()=>Bt(`B-${C.questionNumber}${ht}`),children:Rt[`B-${C.questionNumber}${ht}`]?"Hide Model Answer":"Show Model Answer"}),Rt[`B-${C.questionNumber}${ht}`]&&m.jsx("div",{className:"model-answer",dangerouslySetInnerHTML:{__html:Q.answer}})]}),ht===0&&m.jsx("div",{className:"or-divider",children:"OR"})]},ht))]},C.questionNumber))})]})]}),k==="tips"&&m.jsxs("main",{className:"tips-container-pro",children:[m.jsxs("div",{className:"tips-sidebar",children:[m.jsx("h3",{children:"Exam Strategy"}),m.jsx("ul",{children:f.tips.map((C,Q)=>m.jsxs("li",{className:z===Q?"active":"",onClick:()=>$(Q),children:[C.category.split(" ")[0]," ",m.jsx("span",{className:"sidebar-subtitle",children:C.category})]},Q))})]}),m.jsxs("div",{className:"tips-content-area",children:[m.jsxs("div",{className:"tips-header-pro",children:[m.jsx("h2",{children:f.tips[z].category}),m.jsx("div",{className:"progress-bar",children:m.jsx("div",{className:"progress-fill",style:{width:`${(z+1)/f.tips.length*100}%`}})})]}),m.jsx("div",{className:"tips-cards-pro",children:f.tips[z].tips.map((C,Q)=>m.jsxs("div",{className:"tip-card-pro",children:[m.jsx("div",{className:"tip-icon-pro",children:Q+1}),m.jsxs("div",{className:"tip-text-pro",children:[m.jsx("h4",{children:C.title}),m.jsx("div",{dangerouslySetInnerHTML:{__html:C.content}})]})]},Q))}),m.jsxs("div",{className:"tips-navigation",children:[m.jsx("button",{className:"btn",disabled:z===0,onClick:()=>$(C=>C-1),children:"← Previous"}),m.jsxs("span",{className:"page-indicator",children:[z+1," of ",f.tips.length]}),m.jsx("button",{className:"btn btn-primary",disabled:z===f.tips.length-1,onClick:()=>$(C=>C+1),children:"Next →"})]})]})]}),k==="flashcards"&&y.length>0&&m.jsxs("main",{className:"flashcard-container",children:[m.jsxs("div",{className:"flashcard-header",children:[m.jsx("h2",{children:"Interactive Flashcards"}),m.jsx("p",{children:"Test your knowledge with active recall. Click the card to flip."})]}),m.jsx("div",{className:"flashcard-scene",children:m.jsxs("div",{className:`flashcard ${ye?"flipped":""}`,onClick:ka,children:[m.jsxs("div",{className:"flashcard-face flashcard-front",children:[m.jsxs("span",{className:"card-unit",children:["Unit ",y[kt].unit]}),m.jsx("h3",{children:y[kt].front}),m.jsx("p",{className:"tap-hint",children:"Tap to flip"})]}),m.jsx("div",{className:"flashcard-face flashcard-back",children:m.jsx("div",{dangerouslySetInnerHTML:{__html:y[kt].back}})})]})}),m.jsxs("div",{className:"flashcard-controls",style:{gap:"1rem"},children:[m.jsx("button",{className:"btn btn-primary",onClick:Oi,children:"← Previous"}),m.jsxs("span",{className:"card-count",children:[kt+1," / ",y.length]}),m.jsx("button",{className:"btn btn-primary",onClick:Zn,children:"Next →"})]}),m.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:m.jsx("button",{className:"btn btn-primary",onClick:Ie,children:"Shuffle Cards"})})]}),W&&m.jsx("div",{className:"modal-overlay",children:m.jsxs("div",{className:"modal-content",children:[m.jsx("button",{className:"close-btn",onClick:F,children:"×"}),Yt?m.jsxs("div",{className:"score-section",children:[m.jsx("h2",{children:"Quiz Completed!"}),m.jsxs("p",{children:["Your Score: ",at," / ",W==="FINAL"?Jt.length:f.quizzes[W].length]}),m.jsx("button",{className:"btn btn-primary",onClick:F,children:"Close"})]}):m.jsxs("div",{className:"quiz-section",children:[m.jsxs("h3",{children:[W==="FINAL"?"Final Exam":`Unit ${W} Quiz`,"- Question ",P+1,"/",W==="FINAL"?Jt.length:f.quizzes[W].length]}),(()=>{const C=W==="FINAL"?Jt:f.quizzes[W];return m.jsxs(m.Fragment,{children:[m.jsx("p",{className:"question-text",children:C[P].question}),m.jsx("div",{className:"options-grid",children:C[P].options.map((Q,ht)=>m.jsx("button",{className:"option-btn",onClick:()=>_(ht),children:Q},ht))})]})})()]})]})}),Be&&m.jsx("div",{className:"modal-overlay",children:m.jsxs("div",{className:"modal-content topic-modal",children:[m.jsx("button",{className:"close-btn",onClick:M,children:"×"}),m.jsxs("div",{className:"topic-content",children:[m.jsx("h2",{children:Be.title}),m.jsx("div",{dangerouslySetInnerHTML:{__html:Be.content}})]}),m.jsx("button",{className:"btn btn-primary",onClick:M,style:{marginTop:"2rem"},children:"Close"})]})})]})}np.createRoot(document.getElementById("root")).render(m.jsx(zt.StrictMode,{children:m.jsx(Sp,{})}));
