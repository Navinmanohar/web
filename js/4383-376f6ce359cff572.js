(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4383],{28864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},noSSR:function(){return u}});let r=n(38754);n(85893),n(67294);let l=r._(n(56016));function o(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let i=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=i?i().then(o):Promise.resolve(o(()=>null))}):(delete r.webpack,delete r.modules,u(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},60572:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=n(38754)._(n(67294)).default.createContext(null)},56016:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let r=n(38754)._(n(67294)),l=n(60572),o=[],u=[],i=!1;function a(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function a(){if(!o){let t=new s(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!i){let e=n.webpack?n.webpack():n.modules;e&&u.push(t=>{for(let n of e)if(t.includes(n))return a()})}function c(e,t){!function(){a();let e=r.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let u=r.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),r.default.useMemo(()=>{var t;return u.loading||u.error?r.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:o.retry}):u.loaded?r.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return c.preload=()=>a(),c.displayName="LoadableComponent",r.default.forwardRef(c)}(a,e)}function d(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(o).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(i=!0,t());d(u,e).then(n,n)})),window.__NEXT_PRELOADREADY=c.preloadReady;let f=c},5152:function(e,t,n){e.exports=n(28864)},58896:function(e,t,n){"use strict";n.d(t,{dk:function(){return f},fw:function(){return d},zH:function(){return c}});var r=n(67294),l=n(10003),o=n(1378),u=n(51813),i=n(26486),a=n(18287);let s=(0,r.createContext)(null);function c(){var e,t;return null!=(t=null==(e=(0,r.useContext)(s))?void 0:e.value)?t:void 0}function d(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,l.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),o=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props,value:e.value}),[n,e.slot,e.name,e.props,e.value]);return r.createElement(s.Provider,{value:o},e.children)},[t])]}s.displayName="DescriptionContext";let f=Object.assign((0,a.yV)(function(e,t){let n=(0,r.useId)(),l=(0,i.B)(),{id:c="headlessui-description-".concat(n),...d}=e,f=function e(){let t=(0,r.useContext)(s);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),p=(0,u.T)(t);(0,o.e)(()=>f.register(c),[c,f.register]);let m=l||!1,v=(0,r.useMemo)(()=>({...f.slot,disabled:m}),[f.slot,m]),h={ref:p,...f.props,id:c};return(0,a.sY)({ourProps:h,theirProps:d,slot:v,defaultTag:"p",name:f.name||"Description"})}),{})},31104:function(e,t,n){"use strict";let r,l,o;n.d(t,{Vq:function(){return $},ZR:function(){return Q},EM:function(){return W}});var u=n(67294),i=n(90933),a=n(70940),s=n(8604),c=n(10003),d=n(24826),f=n(1378),p=n(30607),m=n(2196),v=n(54671),h=n(29562),g=n(53956),b=n(62047),E=n(51813),y=n(20260),w=n(24358),T=n(556),C=n(48844),_=n(18287),F=n(58896),P=n(23285),O=n(42308),k=n(3334),M=n(49946);function D(e,t){let n=(0,u.useRef)([]),r=(0,c.z)(e);(0,u.useEffect)(()=>{let e=[...n.current];for(let[l,o]of t.entries())if(n.current[l]!==o){let l=r(t,e);return n.current=t,l}},[r,...t])}var R=n(27524),L=n(78657);let x=[];!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){if(!(e.target instanceof HTMLElement)||e.target===document.body||x[0]===e.target)return;let t=e.target;t=t.closest(L.y),x.unshift(null!=t?t:e.target),(x=x.filter(e=>null!=e&&e.isConnected)).splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var S=n(11291);function A(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var N=((r=N||{})[r.None=0]="None",r[r.InitialFocus=1]="InitialFocus",r[r.TabLock=2]="TabLock",r[r.FocusLock=4]="FocusLock",r[r.RestoreFocus=8]="RestoreFocus",r[r.AutoFocus=16]="AutoFocus",r);let V=Object.assign((0,_.yV)(function(e,t){let n=(0,u.useRef)(null),r=(0,E.T)(n,t),{initialFocus:l,initialFocusFallback:o,containers:i,features:d=15,...f}=e;(0,b.H)()||(d=0);let p=(0,v.i)(n);!function(e,t){let{ownerDocument:n}=t,r=!!(8&e),l=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,u.useRef)(x.slice());return D((e,n)=>{let[r]=e,[l]=n;!0===l&&!1===r&&(0,S.Y)(()=>{t.current.splice(0)}),!1===l&&!0===r&&(t.current=x.slice())},[e,x,t]),(0,c.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(r);D(()=>{r||(null==n?void 0:n.activeElement)===(null==n?void 0:n.body)&&(0,L.C5)(l())},[r]),(0,k.L)(()=>{r&&(0,L.C5)(l())})}(d,{ownerDocument:p});let m=function(e,t){let{ownerDocument:n,container:r,initialFocus:l,initialFocusFallback:o}=t,i=(0,u.useRef)(null),a=(0,s.g)(!!(1&e),"focus-trap#initial-focus"),c=(0,O.t)();return D(()=>{if(0===e)return;if(!a){null!=o&&o.current&&(0,L.C5)(o.current);return}let t=r.current;t&&(0,S.Y)(()=>{if(!c.current)return;let r=null==n?void 0:n.activeElement;if(null!=l&&l.current){if((null==l?void 0:l.current)===r){i.current=r;return}}else if(t.contains(r)){i.current=r;return}if(null!=l&&l.current)(0,L.C5)(l.current);else{if(16&e){if((0,L.jA)(t,L.TO.First|L.TO.AutoFocus)!==L.fE.Error)return}else if((0,L.jA)(t,L.TO.First)!==L.fE.Error)return;if(null!=o&&o.current&&((0,L.C5)(o.current),(null==n?void 0:n.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}i.current=null==n?void 0:n.activeElement})},[o,a,e]),i}(d,{ownerDocument:p,container:n,initialFocus:l,initialFocusFallback:o});!function(e,t){let{ownerDocument:n,container:r,containers:l,previousActiveElement:o}=t,u=(0,O.t)(),i=!!(4&e);(0,a.O)(null==n?void 0:n.defaultView,"focus",e=>{if(!i||!u.current)return;let t=A(l);r.current instanceof HTMLElement&&t.add(r.current);let n=o.current;if(!n)return;let a=e.target;a&&a instanceof HTMLElement?j(t,a)?(o.current=a,(0,L.C5)(a)):(e.preventDefault(),e.stopPropagation(),(0,L.C5)(n)):(0,L.C5)(o.current)},!0)}(d,{ownerDocument:p,container:n,containers:i,previousActiveElement:m});let h=(0,M.l)(),g=(0,c.z)(e=>{let t=n.current;t&&(0,C.E)(h.current,{[M.N.Forwards]:()=>{(0,L.jA)(t,L.TO.First,{skipElements:[e.relatedTarget,o]})},[M.N.Backwards]:()=>{(0,L.jA)(t,L.TO.Last,{skipElements:[e.relatedTarget,o]})}})}),y=(0,s.g)(!!(2&d),"focus-trap#tab-lock"),w=(0,P.G)(),T=(0,u.useRef)(!1);return u.createElement(u.Fragment,null,y&&u.createElement(R._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:R.x.Focusable}),(0,_.sY)({ourProps:{ref:r,onKeyDown(e){"Tab"==e.key&&(T.current=!0,w.requestAnimationFrame(()=>{T.current=!1}))},onBlur(e){if(!(4&d))return;let t=A(i);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(j(t,r)||(T.current?(0,L.jA)(n.current,(0,C.E)(h.current,{[M.N.Forwards]:()=>L.TO.Next,[M.N.Backwards]:()=>L.TO.Previous})|L.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,L.C5)(e.target)))}},theirProps:f,defaultTag:"div",name:"FocusTrap"}),y&&u.createElement(R._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:R.x.Focusable}))}),{features:N});function j(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var I=n(24286),H=n(88903),z=((l=z||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l),Y=((o=Y||{})[o.SetTitleId=0]="SetTitleId",o);let Z={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},B=(0,u.createContext)(null);function G(e){let t=(0,u.useContext)(B);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Dialog /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function J(e,t){return(0,C.E)(t.type,Z,e,t)}B.displayName="DialogContext";let U=(0,_.yV)(function(e,t){let n=(0,u.useId)(),{id:r="headlessui-dialog-".concat(n),open:l,onClose:o,initialFocus:C,role:P="dialog",autoFocus:O=!0,__demoMode:k=!1,unmount:M=!1,...D}=e,R=(0,u.useRef)(!1);P="dialog"===P||"alertdialog"===P?P:(R.current||(R.current=!0,console.warn("Invalid role [".concat(P,"] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."))),"dialog");let L=(0,w.oJ)();void 0===l&&null!==L&&(l=(L&w.ZM.Open)===w.ZM.Open);let x=(0,u.useRef)(null),S=(0,E.T)(x,t),A=(0,v.i)(x),j=l?0:1,[H,z]=(0,u.useReducer)(J,{titleId:null,descriptionId:null,panelRef:(0,u.createRef)()}),Y=(0,c.z)(()=>o(!1)),Z=(0,c.z)(e=>z({type:0,id:e})),G=!!(0,b.H)()&&0===j,[U,K]=(0,I.kF)(),W=(0,h.H1)(),{resolveContainers:Q}=(0,h.vs)({mainTreeNode:W,portals:U,defaultContainers:[{get current(){var $;return null!=($=H.panelRef.current)?$:x.current}}]}),ee=null!==L&&(L&w.ZM.Closing)===w.ZM.Closing;(0,d.s)(!k&&!ee&&G,{allowed:(0,c.z)(()=>{var e,t;return[null!=(t=null==(e=x.current)?void 0:e.closest("[data-headlessui-portal]"))?t:null]}),disallowed:(0,c.z)(()=>{var e;return[null!=(e=null==W?void 0:W.closest("body > *:not(#headlessui-portal-root)"))?e:null]})}),(0,m.O)(G,Q,e=>{e.preventDefault(),Y()}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"!=typeof document?document.defaultView:null,n=arguments.length>2?arguments[2]:void 0,r=(0,s.g)(e,"escape");(0,a.O)(t,"keydown",e=>{r&&(e.defaultPrevented||e.key===i.R.Escape&&n(e))})}(G,null==A?void 0:A.defaultView,e=>{e.preventDefault(),e.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur(),Y()}),(0,g.P)(!k&&!ee&&G,A,Q),(0,p.m)(G,x,Y);let[et,en]=(0,F.fw)(),er=(0,u.useMemo)(()=>[{dialogState:j,close:Y,setTitleId:Z,unmount:M},H],[j,H,Y,Z,M]),el=(0,u.useMemo)(()=>({open:0===j}),[j]),eo={ref:S,id:r,role:P,tabIndex:-1,"aria-modal":k?void 0:0===j||void 0,"aria-labelledby":H.titleId,"aria-describedby":et,unmount:M},eu=!function(){var e;let[t]=(0,u.useState)(()=>"function"==typeof window.matchMedia?window.matchMedia("(pointer: coarse)"):null),[n,r]=(0,u.useState)(null!=(e=null==t?void 0:t.matches)&&e);return(0,f.e)(()=>{if(t)return t.addEventListener("change",e),()=>t.removeEventListener("change",e);function e(e){r(e.matches)}},[t]),n}(),ei=N.None;return G&&!k&&(ei|=N.RestoreFocus,ei|=N.TabLock,O&&(ei|=N.AutoFocus),eu&&(ei|=N.InitialFocus)),u.createElement(w.uu,null,u.createElement(T.O,{force:!0},u.createElement(I.h_,null,u.createElement(B.Provider,{value:er},u.createElement(I.wA,{target:x},u.createElement(T.O,{force:!1},u.createElement(en,{slot:el},u.createElement(K,null,u.createElement(V,{initialFocus:C,initialFocusFallback:x,containers:Q,features:ei},u.createElement(y.Z,{value:Y},(0,_.sY)({ourProps:eo,theirProps:D,slot:el,defaultTag:q,features:X,visible:0===j,name:"Dialog"})))))))))))}),q="div",X=_.VN.RenderStrategy|_.VN.Static,K=(0,_.yV)(function(e,t){let{transition:n=!1,open:r,...l}=e,o=(0,w.oJ)(),i=e.hasOwnProperty("open")||null!==o,a=e.hasOwnProperty("onClose");if(!i&&!a)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!a)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!o&&"boolean"!=typeof e.open)throw Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(e.open));if("function"!=typeof e.onClose)throw Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(e.onClose));return(void 0!==r||n)&&!l.static?u.createElement(h.Jl,null,u.createElement(H.u,{show:r,transition:n,unmount:l.unmount},u.createElement(U,{ref:t,...l}))):u.createElement(h.Jl,null,u.createElement(U,{ref:t,open:r,...l}))}),W=(0,_.yV)(function(e,t){let n=(0,u.useId)(),{id:r="headlessui-dialog-panel-".concat(n),transition:l=!1,...o}=e,[{dialogState:i,unmount:a},s]=G("Dialog.Panel"),d=(0,E.T)(t,s.panelRef),f=(0,u.useMemo)(()=>({open:0===i}),[i]),p=(0,c.z)(e=>{e.stopPropagation()});return u.createElement(l?H.x:u.Fragment,{...l?{unmount:a}:{}},(0,_.sY)({ourProps:{ref:d,id:r,onClick:p},theirProps:o,slot:f,defaultTag:"div",name:"Dialog.Panel"}))}),Q=(0,_.yV)(function(e,t){let{transition:n=!1,...r}=e,[{dialogState:l,unmount:o}]=G("Dialog.Backdrop"),i=(0,u.useMemo)(()=>({open:0===l}),[l]);return u.createElement(n?H.x:u.Fragment,{...n?{unmount:o}:{}},(0,_.sY)({ourProps:{ref:t,"aria-hidden":!0},theirProps:r,slot:i,defaultTag:"div",name:"Dialog.Backdrop"}))}),$=Object.assign(K,{Panel:W,Title:(0,_.yV)(function(e,t){let n=(0,u.useId)(),{id:r="headlessui-dialog-title-".concat(n),...l}=e,[{dialogState:o,setTitleId:i}]=G("Dialog.Title"),a=(0,E.T)(t);(0,u.useEffect)(()=>(i(r),()=>i(null)),[r,i]);let s=(0,u.useMemo)(()=>({open:0===o}),[o]);return(0,_.sY)({ourProps:{ref:a,id:r},theirProps:l,slot:s,defaultTag:"h2",name:"Dialog.Title"})}),Description:F.dk})},88903:function(e,t,n){"use strict";let r;n.d(t,{u:function(){return M},x:function(){return k}});var l=n(67294),o=n(23285),u=n(10003),i=n(42308),a=n(1378),s=n(85508),c=n(30607),d=n(62047),f=n(51813),p=n(87491),m=n(24358),v=n(25602),h=n(48844),g=n(18287);function b(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||(null!=(t=e.as)?t:_)!==l.Fragment||1===l.Children.count(e.children)}let E=(0,l.createContext)(null);E.displayName="TransitionContext";var y=((r=y||{}).Visible="visible",r.Hidden="hidden",r);let w=(0,l.createContext)(null);function T(e){return"children"in e?T(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function C(e,t){let n=(0,s.E)(e),r=(0,l.useRef)([]),a=(0,i.t)(),c=(0,o.G)(),d=(0,u.z)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.l4.Hidden,l=r.current.findIndex(t=>{let{el:n}=t;return n===e});-1!==l&&((0,h.E)(t,{[g.l4.Unmount](){r.current.splice(l,1)},[g.l4.Hidden](){r.current[l].state="hidden"}}),c.microTask(()=>{var e;!T(r)&&a.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,u.z)(e=>{let t=r.current.find(t=>{let{el:n}=t;return n===e});return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,g.l4.Unmount)}),p=(0,l.useRef)([]),m=(0,l.useRef)(Promise.resolve()),v=(0,l.useRef)({enter:[],leave:[]}),b=(0,u.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(t=>{let[n]=t;return n!==e})),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(e=>{let[t,n]=e;return n})).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),E=(0,u.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(e=>{let[t,n]=e;return n})).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,l.useMemo)(()=>({children:r,register:f,unregister:d,onStart:b,onStop:E,wait:m,chains:v}),[f,d,r,b,E,v,m])}w.displayName="NestingContext";let _=l.Fragment,F=g.VN.RenderStrategy,P=(0,g.yV)(function(e,t){let{show:n,appear:r=!1,unmount:o=!0,...i}=e,s=(0,l.useRef)(null),p=b(e),v=(0,f.T)(...p?[s,t]:null===t?[]:[t]);(0,d.H)();let h=(0,m.oJ)();if(void 0===n&&null!==h&&(n=(h&m.ZM.Open)===m.ZM.Open),void 0===n)throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[y,_]=(0,l.useState)(n?"visible":"hidden"),P=C(()=>{n||_("hidden")}),[k,M]=(0,l.useState)(!0),D=(0,l.useRef)([n]);(0,a.e)(()=>{!1!==k&&D.current[D.current.length-1]!==n&&(D.current.push(n),M(!1))},[D,n]);let R=(0,l.useMemo)(()=>({show:n,appear:r,initial:k}),[n,r,k]);(0,c.m)(n,s,()=>_("hidden")),(0,a.e)(()=>{n?_("visible"):T(P)||null===s.current||_("hidden")},[n,P]);let L={unmount:o},x=(0,u.z)(()=>{var t;k&&M(!1),null==(t=e.beforeEnter)||t.call(e)}),S=(0,u.z)(()=>{var t;k&&M(!1),null==(t=e.beforeLeave)||t.call(e)});return l.createElement(w.Provider,{value:P},l.createElement(E.Provider,{value:R},(0,g.sY)({ourProps:{...L,as:l.Fragment,children:l.createElement(O,{ref:v,...L,...i,beforeEnter:x,beforeLeave:S})},theirProps:{},defaultTag:l.Fragment,features:F,visible:"visible"===y,name:"Transition"})))}),O=(0,g.yV)(function(e,t){var n,r;let{transition:o=!0,beforeEnter:i,afterEnter:s,beforeLeave:c,afterLeave:y,enter:P,enterFrom:O,enterTo:k,entered:M,leave:D,leaveFrom:R,leaveTo:L,...x}=e,S=(0,l.useRef)(null),A=b(e),N=(0,f.T)(...A?[S,t]:null===t?[]:[t]),V=null==(n=x.unmount)||n?g.l4.Unmount:g.l4.Hidden,{show:j,appear:I,initial:H}=function(){let e=(0,l.useContext)(E);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[z,Y]=(0,l.useState)(j?"visible":"hidden"),Z=function(){let e=(0,l.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:G}=Z;(0,a.e)(()=>B(S),[B,S]),(0,a.e)(()=>{if(V===g.l4.Hidden&&S.current){if(j&&"visible"!==z){Y("visible");return}return(0,h.E)(z,{hidden:()=>G(S),visible:()=>B(S)})}},[z,S,B,G,j,V]);let J=(0,d.H)();(0,a.e)(()=>{if(A&&J&&"visible"===z&&null===S.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[S,z,J,A]);let U=H&&!I,q=I&&j&&H,X=(0,l.useRef)(!1),K=C(()=>{X.current||(Y("hidden"),G(S))},Z),W=(0,u.z)(e=>{X.current=!0,K.onStart(S,e?"enter":"leave",e=>{"enter"===e?null==i||i():"leave"===e&&(null==c||c())})}),Q=(0,u.z)(e=>{let t=e?"enter":"leave";X.current=!1,K.onStop(S,t,e=>{"enter"===e?null==s||s():"leave"===e&&(null==y||y())}),"leave"!==t||T(K)||(Y("hidden"),G(S))});(0,l.useEffect)(()=>{A&&o||(W(j),Q(j))},[j,A,o]);let $=!(!o||!A||!J||U),[,ee]=(0,p.Y)($,S,j,{start:W,end:Q}),et=(0,g.oA)({ref:N,className:(null==(r=(0,v.A)(x.className,q&&P,q&&O,ee.enter&&P,ee.enter&&ee.closed&&O,ee.enter&&!ee.closed&&k,ee.leave&&D,ee.leave&&!ee.closed&&R,ee.leave&&ee.closed&&L,!ee.transition&&j&&M))?void 0:r.trim())||void 0,...(0,p.X)(ee)}),en=0;return"visible"===z&&(en|=m.ZM.Open),"hidden"===z&&(en|=m.ZM.Closed),ee.enter&&(en|=m.ZM.Opening),ee.leave&&(en|=m.ZM.Closing),l.createElement(w.Provider,{value:K},l.createElement(m.up,{value:en},(0,g.sY)({ourProps:et,theirProps:x,defaultTag:_,features:F,visible:"visible"===z,name:"Transition.Child"})))}),k=(0,g.yV)(function(e,t){let n=null!==(0,l.useContext)(E),r=null!==(0,m.oJ)();return l.createElement(l.Fragment,null,!n&&r?l.createElement(P,{ref:t,...e}):l.createElement(O,{ref:t,...e}))}),M=Object.assign(P,{Child:k,Root:P})},24826:function(e,t,n){"use strict";n.d(t,{s:function(){return c}});var r=n(93580),l=n(78961),o=n(8604),u=n(1378);let i=new Map,a=new Map;function s(e){var t;let n=null!=(t=a.get(e))?t:0;return a.set(e,n+1),0!==n||(i.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),()=>(function(e){var t;let n=null!=(t=a.get(e))?t:1;if(1===n?a.delete(e):a.set(e,n-1),1!==n)return;let r=i.get(e);r&&(null===r["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,i.delete(e))})(e)}function c(e){let{allowed:t,disallowed:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,o.g)(e,"inert-others");(0,u.e)(()=>{var e,o;if(!i)return;let u=(0,r.k)();for(let t of null!=(e=null==n?void 0:n())?e:[])t&&u.add(s(t));let a=null!=(o=null==t?void 0:t())?o:[];for(let e of a){if(!e)continue;let t=(0,l.r)(e);if(!t)continue;let n=e.parentElement;for(;n&&n!==t.body;){for(let e of n.children)a.some(t=>e.contains(t))||u.add(s(e));n=n.parentElement}}return u.dispose},[i,t,n])}},42308:function(e,t,n){"use strict";n.d(t,{t:function(){return o}});var r=n(67294),l=n(1378);function o(){let e=(0,r.useRef)(!1);return(0,l.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},26486:function(e,t,n){"use strict";n.d(t,{B:function(){return o},G:function(){return u}});var r=n(67294);let l=(0,r.createContext)(void 0);function o(){return(0,r.useContext)(l)}function u(e){let{value:t,children:n}=e;return r.createElement(l.Provider,{value:t},n)}}}]);