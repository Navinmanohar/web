(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3778],{4298:function(e,t,n){e.exports=n(32892)},746:function(e,t,n){"use strict";let o,r;n.d(t,{Hi:function(){return Q},J2:function(){return $},NO:function(){return q},O7:function(){return U}});var l=n(7775),u=n(18419),a=n(67294),s=n(9485),c=n(26668),i=n(10003),p=n(70940),d=n(1378),v=n(85508),f=n(30607),P=n(2196),b=n(54671),m=n(90961),E=n(29562),S=n(53956),y=n(51813),g=n(49946),h=n(87491),I=n(20260),T=n(24750),O=n(27524),k=n(24358),F=n(84480),M=n(78657),x=n(48844),w=n(78961),C=n(18287),B=n(90933),N=n(24286),_=((o=_||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),R=((r=R||{})[r.TogglePopover=0]="TogglePopover",r[r.ClosePopover=1]="ClosePopover",r[r.SetButton=2]="SetButton",r[r.SetButtonId=3]="SetButtonId",r[r.SetPanel=4]="SetPanel",r[r.SetPanelId=5]="SetPanelId",r);let z={0:e=>({...e,popoverState:(0,x.E)(e.popoverState,{0:1,1:0}),__demoMode:!1}),1:e=>1===e.popoverState?e:{...e,popoverState:1,__demoMode:!1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},D=(0,a.createContext)(null);function G(e){let t=(0,a.useContext)(D);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Popover /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}D.displayName="PopoverContext";let V=(0,a.createContext)(null);function A(e){let t=(0,a.useContext)(V);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Popover /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}V.displayName="PopoverAPIContext";let Y=(0,a.createContext)(null);function j(){return(0,a.useContext)(Y)}Y.displayName="PopoverGroupContext";let Z=(0,a.createContext)(null);function H(e,t){return(0,x.E)(t.type,z,e,t)}Z.displayName="PopoverPanelContext";let J=C.VN.RenderStrategy|C.VN.Static;function L(e,t){let n=(0,a.useId)(),{id:o="headlessui-popover-backdrop-".concat(n),transition:r=!1,...l}=e,[{popoverState:u},s]=G("Popover.Backdrop"),c=(0,a.useRef)(null),p=(0,y.T)(t,c),d=(0,k.oJ)(),[v,f]=(0,h.Y)(r,c,null!==d?(d&k.ZM.Open)===k.ZM.Open:0===u),P=(0,i.z)(e=>{if((0,F.P)(e.currentTarget))return e.preventDefault();s({type:1})}),b=(0,a.useMemo)(()=>({open:0===u}),[u]),m={ref:p,id:o,"aria-hidden":!0,onClick:P,...(0,h.X)(f)};return(0,C.sY)({ourProps:m,theirProps:l,slot:b,defaultTag:"div",features:J,visible:v,name:"Popover.Backdrop"})}let K=C.VN.RenderStrategy|C.VN.Static,X=(0,C.yV)(function(e,t){var n;let{__demoMode:o=!1,...r}=e,l=(0,a.useRef)(null),u=(0,y.T)(t,(0,y.h)(e=>{l.current=e})),s=(0,a.useRef)([]),c=(0,a.useReducer)(H,{__demoMode:o,popoverState:o?0:1,buttons:s,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,a.createRef)(),afterPanelSentinel:(0,a.createRef)(),afterButtonSentinel:(0,a.createRef)()}),[{popoverState:d,button:f,buttonId:m,panel:S,panelId:g,beforePanelSentinel:h,afterPanelSentinel:O,afterButtonSentinel:F},w]=c,B=(0,b.i)(null!=(n=l.current)?n:f),_=(0,a.useMemo)(()=>{if(!f||!S)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(f))^Number(null==e?void 0:e.contains(S)))return!0;let e=(0,M.GO)(),t=e.indexOf(f),n=(t+e.length-1)%e.length,o=(t+1)%e.length,r=e[n],l=e[o];return!S.contains(r)&&!S.contains(l)},[f,S]),R=(0,v.E)(m),z=(0,v.E)(g),G=(0,a.useMemo)(()=>({buttonId:R,panelId:z,close:()=>w({type:1})}),[R,z,w]),A=j(),Y=null==A?void 0:A.registerPopover,J=(0,i.z)(()=>{var e;return null!=(e=null==A?void 0:A.isFocusWithinPopoverGroup())?e:(null==B?void 0:B.activeElement)&&((null==f?void 0:f.contains(B.activeElement))||(null==S?void 0:S.contains(B.activeElement)))});(0,a.useEffect)(()=>null==Y?void 0:Y(G),[Y,G]);let[L,K]=(0,N.kF)(),X=(0,E.H1)(f),U=(0,E.vs)({mainTreeNode:X,portals:L,defaultContainers:[f,S]});(0,p.O)(null==B?void 0:B.defaultView,"focus",e=>{var t,n,o,r,l,u;e.target!==window&&e.target instanceof HTMLElement&&0===d&&(J()||f&&S&&(U.contains(e.target)||null!=(n=null==(t=h.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(r=null==(o=O.current)?void 0:o.contains)&&r.call(o,e.target)||null!=(u=null==(l=F.current)?void 0:l.contains)&&u.call(l,e.target)||w({type:1})))},!0),(0,P.O)(0===d,U.resolveContainers,(e,t)=>{w({type:1}),(0,M.sP)(t,M.tJ.Loose)||(e.preventDefault(),null==f||f.focus())});let W=(0,i.z)(e=>{w({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:f:f;null==t||t.focus()}),q=(0,a.useMemo)(()=>({close:W,isPortalled:_}),[W,_]),Q=(0,a.useMemo)(()=>({open:0===d,close:W}),[d,W]);return a.createElement(E.Jl,{node:X},a.createElement(T.HO,null,a.createElement(Z.Provider,{value:null},a.createElement(D.Provider,{value:c},a.createElement(V.Provider,{value:q},a.createElement(I.Z,{value:W},a.createElement(k.up,{value:(0,x.E)(d,{0:k.ZM.Open,1:k.ZM.Closed})},a.createElement(K,null,(0,C.sY)({ourProps:{ref:u},theirProps:r,slot:Q,defaultTag:"div",name:"Popover"})))))))))}),U=(0,C.yV)(function(e,t){let n=(0,a.useId)(),{id:o="headlessui-popover-button-".concat(n),disabled:r=!1,autoFocus:c=!1,...p}=e,[d,v]=G("Popover.Button"),{isPortalled:f}=A("Popover.Button"),P=(0,a.useRef)(null),E="headlessui-focus-sentinel-".concat((0,a.useId)()),S=j(),h=null==S?void 0:S.closeOthers,I=null!==(0,a.useContext)(Z);(0,a.useEffect)(()=>{if(!I)return v({type:3,buttonId:o}),()=>{v({type:3,buttonId:null})}},[I,o,v]);let[k]=(0,a.useState)(()=>Symbol()),w=(0,y.T)(P,t,(0,T.AZ)(),I?null:e=>{if(e)d.buttons.current.push(k);else{let e=d.buttons.current.indexOf(k);-1!==e&&d.buttons.current.splice(e,1)}d.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&v({type:2,button:e})}),N=(0,y.T)(P,t),_=(0,b.i)(P),R=(0,i.z)(e=>{var t,n,o;if(I){if(1===d.popoverState)return;switch(e.key){case B.R.Space:case B.R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),v({type:1}),null==(o=d.button)||o.focus()}}else switch(e.key){case B.R.Space:case B.R.Enter:e.preventDefault(),e.stopPropagation(),1===d.popoverState&&(null==h||h(d.buttonId)),v({type:0});break;case B.R.Escape:if(0!==d.popoverState)return null==h?void 0:h(d.buttonId);if(!P.current||null!=_&&_.activeElement&&!P.current.contains(_.activeElement))return;e.preventDefault(),e.stopPropagation(),v({type:1})}}),z=(0,i.z)(e=>{I||e.key===B.R.Space&&e.preventDefault()}),D=(0,i.z)(e=>{var t,n;(0,F.P)(e.currentTarget)||r||(I?(v({type:1}),null==(t=d.button)||t.focus()):(e.preventDefault(),e.stopPropagation(),1===d.popoverState&&(null==h||h(d.buttonId)),v({type:0}),null==(n=d.button)||n.focus()))}),V=(0,i.z)(e=>{e.preventDefault(),e.stopPropagation()}),{isFocusVisible:Y,focusProps:H}=(0,l.F)({autoFocus:c}),{isHovered:J,hoverProps:L}=(0,u.X)({isDisabled:r}),{pressed:K,pressProps:X}=(0,s.x)({disabled:r}),U=0===d.popoverState,W=(0,a.useMemo)(()=>({open:U,active:K||U,disabled:r,hover:J,focus:Y,autofocus:c}),[U,J,Y,K,r,c]),q=(0,m.f)(e,P),Q=I?(0,C.dG)({ref:N,type:q,onKeyDown:R,onClick:D,disabled:r||void 0,autoFocus:c},H,L,X):(0,C.dG)({ref:w,id:d.buttonId,type:q,"aria-expanded":0===d.popoverState,"aria-controls":d.panel?d.panelId:void 0,disabled:r||void 0,autoFocus:c,onKeyDown:R,onKeyUp:z,onClick:D,onMouseDown:V},H,L,X),$=(0,g.l)(),ee=(0,i.z)(()=>{let e=d.panel;e&&(0,x.E)($.current,{[g.N.Forwards]:()=>(0,M.jA)(e,M.TO.First),[g.N.Backwards]:()=>(0,M.jA)(e,M.TO.Last)})===M.fE.Error&&(0,M.jA)((0,M.GO)().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),(0,x.E)($.current,{[g.N.Forwards]:M.TO.Next,[g.N.Backwards]:M.TO.Previous}),{relativeTo:d.button})});return a.createElement(a.Fragment,null,(0,C.sY)({ourProps:Q,theirProps:p,slot:W,defaultTag:"button",name:"Popover.Button"}),U&&!I&&f&&a.createElement(O._,{id:E,ref:d.afterButtonSentinel,features:O.x.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:ee}))}),W=(0,C.yV)(L),q=(0,C.yV)(L),Q=(0,C.yV)(function(e,t){let n=(0,a.useId)(),{id:o="headlessui-popover-panel-".concat(n),focus:r=!1,anchor:l,portal:u=!1,modal:s=!1,transition:p=!1,...v}=e,[P,m]=G("Popover.Panel"),{close:E,isPortalled:I}=A("Popover.Panel"),F="headlessui-focus-sentinel-before-".concat(n),w="headlessui-focus-sentinel-after-".concat(n),_=(0,a.useRef)(null),R=(0,T.Vy)(l),[z,D]=(0,T.ES)(R),Y=(0,T.U8)();R&&(u=!0);let j=(0,y.T)(_,t,R?z:null,e=>{m({type:4,panel:e})}),H=(0,b.i)(_),J=(0,C.Y2)();(0,d.e)(()=>(m({type:5,panelId:o}),()=>{m({type:5,panelId:null})}),[o,m]);let L=(0,k.oJ)(),[X,U]=(0,h.Y)(p,_,null!==L?(L&k.ZM.Open)===k.ZM.Open:0===P.popoverState);(0,f.m)(X,P.button,()=>{m({type:1})});let W=!P.__demoMode&&s&&X;(0,S.P)(W,H);let q=(0,i.z)(e=>{var t;if(e.key===B.R.Escape){if(0!==P.popoverState||!_.current||null!=H&&H.activeElement&&!_.current.contains(H.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:1}),null==(t=P.button)||t.focus()}});(0,a.useEffect)(()=>{var t;e.static||1===P.popoverState&&(null==(t=e.unmount)||t)&&m({type:4,panel:null})},[P.popoverState,e.unmount,e.static,m]),(0,a.useEffect)(()=>{if(P.__demoMode||!r||0!==P.popoverState||!_.current)return;let e=null==H?void 0:H.activeElement;_.current.contains(e)||(0,M.jA)(_.current,M.TO.First)},[P.__demoMode,r,_.current,P.popoverState]);let Q=(0,a.useMemo)(()=>({open:0===P.popoverState,close:E}),[P.popoverState,E]),$=(0,C.dG)(R?Y():{},{ref:j,id:o,onKeyDown:q,onBlur:r&&0===P.popoverState?e=>{var t,n,o,r,l;let u=e.relatedTarget;u&&_.current&&(null!=(t=_.current)&&t.contains(u)||(m({type:1}),(null!=(o=null==(n=P.beforePanelSentinel.current)?void 0:n.contains)&&o.call(n,u)||null!=(l=null==(r=P.afterPanelSentinel.current)?void 0:r.contains)&&l.call(r,u))&&u.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...v.style,...D,"--button-width":(0,c.h)(P.button,!0).width},...(0,h.X)(U)}),ee=(0,g.l)(),et=(0,i.z)(()=>{let e=_.current;e&&(0,x.E)(ee.current,{[g.N.Forwards]:()=>{var t;(0,M.jA)(e,M.TO.First)===M.fE.Error&&(null==(t=P.afterPanelSentinel.current)||t.focus())},[g.N.Backwards]:()=>{var e;null==(e=P.button)||e.focus({preventScroll:!0})}})}),en=(0,i.z)(()=>{let e=_.current;e&&(0,x.E)(ee.current,{[g.N.Forwards]:()=>{var e;if(!P.button)return;let t=(0,M.GO)(),n=t.indexOf(P.button),o=t.slice(0,n+1),r=[...t.slice(n+1),...o];for(let t of r.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=P.panel)&&e.contains(t)){let e=r.indexOf(t);-1!==e&&r.splice(e,1)}(0,M.jA)(r,M.TO.First,{sorted:!1})},[g.N.Backwards]:()=>{var t;(0,M.jA)(e,M.TO.Previous)===M.fE.Error&&(null==(t=P.button)||t.focus())}})});return a.createElement(k.uu,null,a.createElement(Z.Provider,{value:o},a.createElement(V.Provider,{value:{close:E,isPortalled:I}},a.createElement(N.h_,{enabled:!!u&&(e.static||X)},X&&I&&a.createElement(O._,{id:F,ref:P.beforePanelSentinel,features:O.x.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:et}),(0,C.sY)({mergeRefs:J,ourProps:$,theirProps:v,slot:Q,defaultTag:"div",features:K,visible:X,name:"Popover.Panel"}),X&&I&&a.createElement(O._,{id:w,ref:P.afterPanelSentinel,features:O.x.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:en})))))}),$=Object.assign(X,{Button:U,Backdrop:q,Overlay:W,Panel:Q,Group:(0,C.yV)(function(e,t){let n=(0,a.useRef)(null),o=(0,y.T)(n,t),[r,l]=(0,a.useState)([]),u=(0,i.z)(e=>{l(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),s=(0,i.z)(e=>(l(t=>[...t,e]),()=>u(e))),c=(0,i.z)(()=>{var e;let t=(0,w.r)(n);if(!t)return!1;let o=t.activeElement;return!!(null!=(e=n.current)&&e.contains(o))||r.some(e=>{var n,r;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(o))||(null==(r=t.getElementById(e.panelId.current))?void 0:r.contains(o))})}),p=(0,i.z)(e=>{for(let t of r)t.buttonId.current!==e&&t.close()}),d=(0,a.useMemo)(()=>({registerPopover:s,unregisterPopover:u,isFocusWithinPopoverGroup:c,closeOthers:p}),[s,u,c,p]),v=(0,a.useMemo)(()=>({}),[]);return a.createElement(E.Jl,null,a.createElement(Y.Provider,{value:d},(0,C.sY)({ourProps:{ref:o},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"})))})})}}]);