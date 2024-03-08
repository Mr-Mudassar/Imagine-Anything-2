(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{8601:function(e,n,a){Promise.resolve().then(a.bind(a,18288))},18288:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return components_FaqData}});var c,f,p,h=a(57437),g=a(2265),v=a(12950),b=a(75606),E=a(8076),w=a(46618),S=a(25306),O=a(35863),P=a(60597),j=a(54851),N=a(11931);let D=null!=(p=g.startTransition)?p:function(e){e()};var A=a(93850),M=((c=M||{})[c.Open=0]="Open",c[c.Closed=1]="Closed",c),H=((f=H||{})[f.ToggleDisclosure=0]="ToggleDisclosure",f[f.CloseDisclosure=1]="CloseDisclosure",f[f.SetButtonId=2]="SetButtonId",f[f.SetPanelId=3]="SetPanelId",f[f.LinkPanel=4]="LinkPanel",f[f.UnlinkPanel=5]="UnlinkPanel",f);let L={0:e=>({...e,disclosureState:(0,P.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,n)=>e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId},3:(e,n)=>e.panelId===n.panelId?e:{...e,panelId:n.panelId}},B=(0,g.createContext)(null);function _(e){let n=(0,g.useContext)(B);if(null===n){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return n}B.displayName="DisclosureContext";let $=(0,g.createContext)(null);$.displayName="DisclosureAPIContext";let Y=(0,g.createContext)(null);function ee(e,n){return(0,P.E)(n.type,L,e,n)}Y.displayName="DisclosurePanelContext";let Z=g.Fragment,z=N.AN.RenderStrategy|N.AN.Static,W=Object.assign((0,N.yV)(function(e,n){let{defaultOpen:a=!1,...c}=e,f=(0,g.useRef)(null),p=(0,w.T)(n,(0,w.h)(e=>{f.current=e},void 0===e.as||e.as===g.Fragment)),h=(0,g.useRef)(null),b=(0,g.useRef)(null),E=(0,g.useReducer)(ee,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:b,panelRef:h,buttonId:null,panelId:null}),[{disclosureState:O,buttonId:D},A]=E,M=(0,v.z)(e=>{A({type:1});let n=(0,j.r)(f);if(!n||!D)return;let a=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:n.getElementById(D):n.getElementById(D);null==a||a.focus()}),H=(0,g.useMemo)(()=>({close:M}),[M]),L=(0,g.useMemo)(()=>({open:0===O,close:M}),[O,M]);return g.createElement(B.Provider,{value:E},g.createElement($.Provider,{value:H},g.createElement(S.up,{value:(0,P.E)(O,{0:S.ZM.Open,1:S.ZM.Closed})},(0,N.sY)({ourProps:{ref:p},theirProps:c,slot:L,defaultTag:Z,name:"Disclosure"}))))}),{Button:(0,N.yV)(function(e,n){let a=(0,b.M)(),{id:c=`headlessui-disclosure-button-${a}`,...f}=e,[p,h]=_("Disclosure.Button"),S=(0,g.useContext)(Y),P=null!==S&&S===p.panelId,j=(0,g.useRef)(null),D=(0,w.T)(j,n,P?null:p.buttonRef),M=(0,N.Y2)();(0,g.useEffect)(()=>{if(!P)return h({type:2,buttonId:c}),()=>{h({type:2,buttonId:null})}},[c,h,P]);let H=(0,v.z)(e=>{var n;if(P){if(1===p.disclosureState)return;switch(e.key){case A.R.Space:case A.R.Enter:e.preventDefault(),e.stopPropagation(),h({type:0}),null==(n=p.buttonRef.current)||n.focus()}}else switch(e.key){case A.R.Space:case A.R.Enter:e.preventDefault(),e.stopPropagation(),h({type:0})}}),L=(0,v.z)(e=>{e.key===A.R.Space&&e.preventDefault()}),B=(0,v.z)(n=>{var a;(0,O.P)(n.currentTarget)||e.disabled||(P?(h({type:0}),null==(a=p.buttonRef.current)||a.focus()):h({type:0}))}),$=(0,g.useMemo)(()=>({open:0===p.disclosureState}),[p]),Z=(0,E.f)(e,j),z=P?{ref:D,type:Z,onKeyDown:H,onClick:B}:{ref:D,id:c,type:Z,"aria-expanded":0===p.disclosureState,"aria-controls":p.linkedPanel?p.panelId:void 0,onKeyDown:H,onKeyUp:L,onClick:B};return(0,N.sY)({mergeRefs:M,ourProps:z,theirProps:f,slot:$,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,N.yV)(function(e,n){let a=(0,b.M)(),{id:c=`headlessui-disclosure-panel-${a}`,...f}=e,[p,h]=_("Disclosure.Panel"),{close:v}=function K(e){let n=(0,g.useContext)($);if(null===n){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}return n}("Disclosure.Panel"),E=(0,N.Y2)(),O=(0,w.T)(n,p.panelRef,e=>{D(()=>h({type:e?4:5}))});(0,g.useEffect)(()=>(h({type:3,panelId:c}),()=>{h({type:3,panelId:null})}),[c,h]);let P=(0,S.oJ)(),j=null!==P?(P&S.ZM.Open)===S.ZM.Open:0===p.disclosureState,A=(0,g.useMemo)(()=>({open:0===p.disclosureState,close:v}),[p,v]);return g.createElement(Y.Provider,{value:p.panelId},(0,N.sY)({mergeRefs:E,ourProps:{ref:O,id:c},theirProps:f,slot:A,defaultTag:"div",features:z,visible:j,name:"Disclosure.Panel"}))})}),V=g.forwardRef(function({title:e,titleId:n,...a},c){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},a),e?g.createElement("title",{id:n},e):null,g.createElement("path",{fillRule:"evenodd",d:"M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",clipRule:"evenodd"}))}),J=g.forwardRef(function({title:e,titleId:n,...a},c){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},a),e?g.createElement("title",{id:n},e):null,g.createElement("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"}))});var components_FaqData=function(){return(0,h.jsx)("div",{children:[{key:"1",label:"What features are included as a free user?",desc:"As a free user, you can generate 10 images and also download 10 images in high resolution."},{key:"2",label:"Is the payment auto renewed?",desc:"Yes, the payment is auto renewed every month. If you want to cancel your subscription, you can do so hassle-free."},{key:"3",label:"Is the amount refundable?",desc:"The amount is non-refundable."},{key:"4",label:"What model is used to generate these AI images?",desc:"We are using state-of-the-art generative AI models for generating high-quality AI images."},{key:"5",label:"What is Remix?",desc:"Remix allows you to generate similar images based on the prompt you like. It will generate multiple variations of it."},{key:"6",label:"Are there any more features in the pipeline?",desc:"There are many more exciting features in the pipeline like image2image, image2video, inpainting, cropping, storybook image generation, anime, cinematic, 3D, and many more. At ImagingAnything, you are only limited by your imagination."},{key:"7",label:"I have some recommendations",desc:"Sure, you can send your recommendations in the Contact Us page above."}].map(e=>(0,h.jsx)("div",{children:(0,h.jsx)(W,{children:n=>{let{open:a}=n;return(0,h.jsxs)("div",{className:"p-4 text-16 md:text-[20px] tracking-wide ",children:[(0,h.jsxs)(W.Button,{className:"flex items-center justify-between w-full font-bold ",children:[(0,h.jsx)("span",{className:"break-all text-left text-white",children:e.label}),a?(0,h.jsx)(V,{className:"w-5 ml-auto text-white"}):(0,h.jsx)(J,{className:"w-5 ml-auto text-white"})]}),(0,h.jsx)(W.Panel,{className:"text-gray-300  py-2",children:e.desc})]})}})},e.key))})}},30622:function(e,n,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=a(2265),f=Symbol.for("react.element"),p=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,g=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,a){var c,p={},b=null,E=null;for(c in void 0!==a&&(b=""+a),void 0!==n.key&&(b=""+n.key),void 0!==n.ref&&(E=n.ref),n)h.call(n,c)&&!v.hasOwnProperty(c)&&(p[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===p[c]&&(p[c]=n[c]);return{$$typeof:f,type:e,key:b,ref:E,props:p,_owner:g.current}}n.Fragment=p,n.jsx=q,n.jsxs=q},57437:function(e,n,a){"use strict";e.exports=a(30622)},93850:function(e,n,a){"use strict";a.d(n,{R:function(){return f}});var c,f=((c=f||{}).Space=" ",c.Enter="Enter",c.Escape="Escape",c.Backspace="Backspace",c.Delete="Delete",c.ArrowLeft="ArrowLeft",c.ArrowUp="ArrowUp",c.ArrowRight="ArrowRight",c.ArrowDown="ArrowDown",c.Home="Home",c.End="End",c.PageUp="PageUp",c.PageDown="PageDown",c.Tab="Tab",c)},12950:function(e,n,a){"use strict";a.d(n,{z:function(){return o}});var c=a(2265),f=a(61858);let o=function(e){let n=(0,f.E)(e);return c.useCallback((...e)=>n.current(...e),[n])}},75606:function(e,n,a){"use strict";a.d(n,{M:function(){return v}});var c,f=a(2265),p=a(52057),h=a(32600),g=a(48957);let v=null!=(c=f.useId)?c:function(){let e=(0,g.H)(),[n,a]=f.useState(e?()=>p.O.nextId():null);return(0,h.e)(()=>{null===n&&a(p.O.nextId())},[n]),null!=n?""+n:void 0}},32600:function(e,n,a){"use strict";a.d(n,{e:function(){return l}});var c=a(2265),f=a(52057);let l=(e,n)=>{f.O.isServer?(0,c.useEffect)(e,n):(0,c.useLayoutEffect)(e,n)}},61858:function(e,n,a){"use strict";a.d(n,{E:function(){return s}});var c=a(2265),f=a(32600);function s(e){let n=(0,c.useRef)(e);return(0,f.e)(()=>{n.current=e},[e]),n}},8076:function(e,n,a){"use strict";a.d(n,{f:function(){return T}});var c=a(2265),f=a(32600);function i(e){var n;if(e.type)return e.type;let a=null!=(n=e.as)?n:"button";if("string"==typeof a&&"button"===a.toLowerCase())return"button"}function T(e,n){let[a,p]=(0,c.useState)(()=>i(e));return(0,f.e)(()=>{p(i(e))},[e.type,e.as]),(0,f.e)(()=>{a||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&p("button")},[a,n]),a}},48957:function(e,n,a){"use strict";a.d(n,{H:function(){return l}});var c,f=a(2265),p=a(52057);function l(){let e;let n=(e="undefined"==typeof document,(0,(c||(c=a.t(f,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[h,g]=f.useState(p.O.isHandoffComplete);return h&&!1===p.O.isHandoffComplete&&g(!1),f.useEffect(()=>{!0!==h&&g(!0)},[h]),f.useEffect(()=>p.O.handoff(),[]),!n&&h}},46618:function(e,n,a){"use strict";a.d(n,{T:function(){return y},h:function(){return T}});var c=a(2265),f=a(12950);let p=Symbol();function T(e,n=!0){return Object.assign(e,{[p]:n})}function y(...e){let n=(0,c.useRef)(e);(0,c.useEffect)(()=>{n.current=e},[e]);let a=(0,f.z)(e=>{for(let a of n.current)null!=a&&("function"==typeof a?a(e):a.current=e)});return e.every(e=>null==e||(null==e?void 0:e[p]))?void 0:a}},25306:function(e,n,a){"use strict";a.d(n,{ZM:function(){return h},oJ:function(){return u},up:function(){return s}});var c,f=a(2265);let p=(0,f.createContext)(null);p.displayName="OpenClosedContext";var h=((c=h||{})[c.Open=1]="Open",c[c.Closed=2]="Closed",c[c.Closing=4]="Closing",c[c.Opening=8]="Opening",c);function u(){return(0,f.useContext)(p)}function s({value:e,children:n}){return f.createElement(p.Provider,{value:e},n)}},35863:function(e,n,a){"use strict";function r(e){let n=e.parentElement,a=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(a=n),n=n.parentElement;let c=(null==n?void 0:n.getAttribute("disabled"))==="";return!(c&&function(e){if(!e)return!1;let n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(a))&&c}a.d(n,{P:function(){return r}})},63960:function(e,n,a){"use strict";function t(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}a.d(n,{A:function(){return t}})},52057:function(e,n,a){"use strict";a.d(n,{O:function(){return f}});var c=Object.defineProperty,d=(e,n,a)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,r=(e,n,a)=>(d(e,"symbol"!=typeof n?n+"":n,a),a);let f=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},60597:function(e,n,a){"use strict";function u(e,n,...a){if(e in n){let c=n[e];return"function"==typeof c?c(...a):c}let c=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,u),c}a.d(n,{E:function(){return u}})},54851:function(e,n,a){"use strict";a.d(n,{r:function(){return o}});var c=a(52057);function o(e){return c.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},11931:function(e,n,a){"use strict";a.d(n,{AN:function(){return v},Y2:function(){return I},l4:function(){return b},sY:function(){return C},yV:function(){return U}});var c,f,p=a(2265),h=a(63960),g=a(60597),v=((c=v||{})[c.None=0]="None",c[c.RenderStrategy=1]="RenderStrategy",c[c.Static=2]="Static",c),b=((f=b||{})[f.Unmount=0]="Unmount",f[f.Hidden=1]="Hidden",f);function C({ourProps:e,theirProps:n,slot:a,defaultTag:c,features:f,visible:p=!0,name:h,mergeRefs:v}){v=null!=v?v:k;let b=R(n,e);if(p)return m(b,a,c,h,v);let E=null!=f?f:0;if(2&E){let{static:e=!1,...n}=b;if(e)return m(n,a,c,h,v)}if(1&E){let{unmount:e=!0,...n}=b;return(0,g.E)(e?0:1,{0:()=>null,1:()=>m({...n,hidden:!0,style:{display:"none"}},a,c,h,v)})}return m(b,a,c,h,v)}function m(e,n={},a,c,f){let{as:g=a,children:v,refName:b="ref",...E}=F(e,["unmount","static"]),w=void 0!==e.ref?{[b]:e.ref}:{},S="function"==typeof v?v(n):v;"className"in E&&E.className&&"function"==typeof E.className&&(E.className=E.className(n));let O={};if(n){let e=!1,a=[];for(let[c,f]of Object.entries(n))"boolean"==typeof f&&(e=!0),!0===f&&a.push(c);e&&(O["data-headlessui-state"]=a.join(" "))}if(g===p.Fragment&&Object.keys(x(E)).length>0){if(!(0,p.isValidElement)(S)||Array.isArray(S)&&S.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${c} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(E).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=S.props,n="function"==typeof(null==e?void 0:e.className)?(...n)=>(0,h.A)(null==e?void 0:e.className(...n),E.className):(0,h.A)(null==e?void 0:e.className,E.className),a=n?{className:n}:{};return(0,p.cloneElement)(S,Object.assign({},R(S.props,x(F(E,["ref"]))),O,w,{ref:f(S.ref,w.ref)},a))}return(0,p.createElement)(g,Object.assign({},F(E,["ref"]),g!==p.Fragment&&w,g!==p.Fragment&&O),S)}function I(){let e=(0,p.useRef)([]),n=(0,p.useCallback)(n=>{for(let a of e.current)null!=a&&("function"==typeof a?a(n):a.current=n)},[]);return(...a)=>{if(!a.every(e=>null==e))return e.current=a,n}}function k(...e){return e.every(e=>null==e)?void 0:n=>{for(let a of e)null!=a&&("function"==typeof a?a(n):a.current=n)}}function R(...e){if(0===e.length)return{};if(1===e.length)return e[0];let n={},a={};for(let c of e)for(let e in c)e.startsWith("on")&&"function"==typeof c[e]?(null!=a[e]||(a[e]=[]),a[e].push(c[e])):n[e]=c[e];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(a).map(e=>[e,void 0])));for(let e in a)Object.assign(n,{[e](n,...c){for(let f of a[e]){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;f(n,...c)}}});return n}function U(e){var n;return Object.assign((0,p.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function x(e){let n=Object.assign({},e);for(let e in n)void 0===n[e]&&delete n[e];return n}function F(e,n=[]){let a=Object.assign({},e);for(let e of n)e in a&&delete a[e];return a}}},function(e){e.O(0,[971,472,744],function(){return e(e.s=8601)}),_N_E=e.O()}]);