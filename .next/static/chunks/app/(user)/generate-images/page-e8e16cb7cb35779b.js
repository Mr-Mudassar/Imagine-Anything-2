(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{12929:function(e,r,n){Promise.resolve().then(n.bind(n,96054))},50129:function(e,r,n){"use strict";n.d(r,{Z:function(){return Loader}});var l=n(57437);n(2265);var components_Spin=function(){return(0,l.jsx)("div",{className:"flex justify-center items-center ",children:(0,l.jsxs)("div",{role:"status",children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,l.jsx)("span",{className:"sr-only",children:"Loading..."})]})})};function Loader(){return(0,l.jsx)("div",{className:"w-full flex items-center justify-center mt-20",children:(0,l.jsx)(components_Spin,{})})}},96054:function(e,r,n){"use strict";n.r(r);var l=n(57437),d=n(99761),c=n(16896),m=n(38891),f=n(16691),g=n.n(f),h=n(61396),x=n.n(h),b=n(2265),y=n(5925),_=n(59077),w=n(50129),C=n(77860);r.default=function(){let[e,r]=(0,b.useState)(null),[n,f]=(0,b.useState)(!1),[h,N]=(0,b.useState)(""),E=(0,c.o)(e=>e.setOpenLoginModal),L=(0,c.o)(e=>e.setAllImages),k=(0,c.o)(e=>e.imageGenerateLimit),[O,F]=(0,b.useState)(!0),S=(0,c.o)(e=>e.setImageDownloadLimit),A=(0,c.o)(e=>e.imageDownloadLimit),z=(0,c.o)(e=>e.userData);(0,c.o)(e=>e.isRemix);let P=(0,c.o)(e=>e.navOpen),R=(0,c.o)(e=>e.setNavOpen),H=(0,_.useMutation)({mutationKey:"generate-image",mutationFn:async e=>{let r=await m.x.post("/generate-image/",e);return r.data},onSuccess:e=>{f(!1),r(e),decrementLimit("image_generation")},onError:()=>{f(!1),y.default.error("Failed to generate image")}}),decrementLimit=async e=>{try{var r,n,l,d,c,f;let g=await m.x.post("/decrement_limit/",{user_id:null==z?void 0:null===(r=z.user_data)||void 0===r?void 0:r.user_id,action:e});y.default.success(null==g?void 0:null===(n=g.data)||void 0===n?void 0:n.message),L(null==g?void 0:null===(d=g.data)||void 0===d?void 0:null===(l=d.user_subscription)||void 0===l?void 0:l.max_generate_limit),S(null==g?void 0:null===(f=g.data)||void 0===f?void 0:null===(c=f.user_subscription)||void 0===c?void 0:c.max_download_limit)}catch(e){console.log(e)}},finishHandler=async e=>{var r,n,l;return z?0===k?y.default.success("Maximum image generation limit reached"):void(f(!0),H.mutate({...e,username:null==z?void 0:null===(r=z.user_data)||void 0===r?void 0:r.username,user_id:null==z?void 0:null===(n=z.user_data)||void 0===n?void 0:n.user_id,email:null==z?void 0:null===(l=z.user_data)||void 0===l?void 0:l.email})):E(!0)},U=(0,_.useMutation)({mutationKey:"generate-image-countdown",mutationFn:async e=>{var r,n,l,d,c;let f=await m.x.post("/decrement_limit/",e);return y.default.success(null==f?void 0:null===(r=f.data)||void 0===r?void 0:r.message),L(null==f?void 0:null===(l=f.data)||void 0===l?void 0:null===(n=l.user_subscription)||void 0===n?void 0:n.max_generate_limit),S(null==f?void 0:null===(c=f.data)||void 0===c?void 0:null===(d=c.user_subscription)||void 0===d?void 0:d.max_download_limit),f.data}}),q=(0,_.useMutation)({mutationKey:"/refine-prompt/",mutationFn:async e=>{let r=await m.x.post("/refine-prompt/",e);return F(!1),N(r.data.refined_prompt),r.data}});return P&&R(!1),(0,l.jsxs)("div",{className:"flex flex-col gap-y-8 mt-9 items-center justify-center pb-12",children:[(0,l.jsx)("div",{className:"relative flex flex-col gap-x-5 items-center w-full md:w-3/5",children:(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),z?finishHandler({prompt:h}):E(!0)},className:"flex w-full gap-y-3 justify-between !h-12",children:[(0,l.jsx)("input",{value:h,onChange:e=>{O&&N(e.target.value)},className:"w-full h-12 rounded-l-[140px] text-lg px-5 focus:border-transparent text-black",required:!0}),(0,l.jsx)("button",{type:"submit",className:"text-center px-5 bg-[#C970FF] text-base md:text-lg text-white rounded-e-3xl",children:"Generate"}),(null==z?void 0:z.user_data.usersubscription.ability_to_remix)&&(0,l.jsxs)("button",{onClick:()=>""!==h&&q.mutate({prompt:h}),className:"border-none transition-all duration-700 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[120%] bg-[#C970FF]/20 backdrop-blur-xl px-5 py-1 rounded-full flex items-center gap-x-6 -mt-2",children:[(0,l.jsx)("span",{className:"font-alumniRegular text-xl font-bold text-white",children:(null==q?void 0:q.isLoading)?"Refining Prompt":"Refine Prompt"}),(0,l.jsx)("div",{className:"".concat((null==q?void 0:q.isLoading)?"animate-spin":""),children:(0,l.jsx)(g(),{src:C.Z,width:20,height:20,alt:"remix icon"})})]})]})}),(0,l.jsx)("div",{className:"flex gap-4 z-50",children:(0,l.jsx)("section",{className:"relative overflow-hidden rounded-2xl cursor-pointer",children:n?(0,l.jsx)(w.Z,{}):e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g(),{className:"object-contain",src:null==e?void 0:e.generated_image_url,alt:"generated image",width:350,height:350,quality:100}),(0,l.jsx)("section",{className:"absolute bg-gradient-to-t from-black/95 to-transparent top-0 w-full h-full",children:(0,l.jsx)(x(),{onClick:e=>{if(A>0){var r;U.mutate({user_id:null==z?void 0:null===(r=z.user_data)||void 0===r?void 0:r.user_id,action:"image_download"})}else 0==A&&(e.preventDefault(),y.default.success("maximum downloads succeeded"))},href:null==e?void 0:e.generated_image_url,className:"absolute right-3 top-3 flex items-center justify-center  w-8 h-8 rounded-lg",children:(0,l.jsx)(g(),{src:d.Z,width:20,height:20,alt:"download icon"})})})]})})})]})}},16896:function(e,r,n){"use strict";n.d(r,{o:function(){return c}});var l=n(94660),d=n(74810);let c=(0,l.Ue)()((0,d.tJ)(e=>({selectedSortOption:"",isLogin:!1,openLoginModal:!1,allImages:[],clientFetchAllData:!1,planType:"",isRemix:!1,imageGenerateLimit:0,imageDownloadLimit:0,userData:void 0,categories:[],navOpen:!1,setSelectedSortOption:r=>e({selectedSortOption:r}),setNavOpen:r=>e({navOpen:r}),setIsLogin:r=>e({isLogin:r}),setIsRemix:r=>e({isRemix:r}),setOpenLoginModal:r=>e({openLoginModal:r}),setAllImages:r=>e({allImages:r}),setClientFetchAllData:r=>e({clientFetchAllData:r}),setPlanType:r=>e({planType:r}),setImageGenerateLimit:r=>e({imageGenerateLimit:r}),setImageDownloadLimit:r=>e({imageDownloadLimit:r}),setUserData:r=>e({userData:r}),setCategories:r=>e({categories:r})}),{name:"saved-states",storage:(0,d.FL)(()=>sessionStorage)}))},38891:function(e,r,n){"use strict";n.d(r,{x:function(){return d}});var l=n(92173);let d=l.Z.create({baseURL:"https://container-service-1.dj8hvpj05oal6.ap-southeast-1.cs.amazonlightsail.com/api/"})},99761:function(e,r){"use strict";r.Z={src:"/_next/static/media/Download.b5fb4e8a.svg",height:18,width:14,blurWidth:0,blurHeight:0}},77860:function(e,r){"use strict";r.Z={src:"/_next/static/media/Remix.a68e43d2.svg",height:24,width:25,blurWidth:0,blurHeight:0}},61396:function(e,r,n){e.exports=n(68326)},5925:function(e,r,n){"use strict";let l,d;n.r(r),n.d(r,{CheckmarkIcon:function(){return q},ErrorIcon:function(){return z},LoaderIcon:function(){return R},ToastBar:function(){return et},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return ea},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var c,m=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":l+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&d?r+"{"+d+"}":d)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let m=s(e),f=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[f]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);b[f]=o(d?{["@keyframes "+f]:r}:r,n?"":"."+f)}let y=n&&b.g?b.g:null;return n&&(b.g=b[f]),c=b[f],y?r.data=r.data.replace(y,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),f},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let y,_,w,C=u.bind({k:1});function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let m=Object.assign({},d),f=m.className||a.className;n.p=Object.assign({theme:_&&_()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,l)+(f?" "+f:""),r&&(m.ref=c);let g=e;return e[0]&&(g=m.as||e,delete m.as),w&&g[0]&&w(m),y(g,m)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,N=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},E=new Map,$=e=>{if(E.has(e))return;let r=setTimeout(()=>{E.delete(e),dist_u({type:4,toastId:e})},1e3);E.set(e,r)},J=e=>{let r=E.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},L=[],k={toasts:[],pausedAt:void 0},dist_u=e=>{k=v(k,e),L.forEach(e=>{e(k)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,m.useState)(k);(0,m.useEffect)(()=>(L.push(n),()=>{let e=L.indexOf(n);e>-1&&L.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||O[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||N()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,m.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,m.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),d=(0,m.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},m=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),f=m.findIndex(r=>r.id===e.id),g=m.filter((e,r)=>r<f&&e.visible).length;return m.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+d,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:d}}},F=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,S=C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,A=C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${S} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,P=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${P} 1s linear infinite;
`,H=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=C`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=j("div")`
  position: absolute;
`,K=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(Y,null,r):r:"blank"===n?null:m.createElement(K,null,m.createElement(R,{...l}),"loading"!==n&&m.createElement(B,null,"error"===n?m.createElement(z,{...l}):m.createElement(q,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${C(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=m.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),f=m.createElement(X,{...e.ariaProps},T(e.message,e));return m.createElement(Q,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:c,message:f}):m.createElement(m.Fragment,null,c,f))});c=m.createElement,o.p=void 0,y=c,_=void 0,w=void 0;var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:d})=>{let c=m.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return m.createElement("div",{ref:c,className:r,style:n},d)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},ei=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:c,containerClassName:f})=>{let{toasts:g,handlers:h}=D(n);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...c},className:f,onMouseEnter:h.startPause,onMouseLeave:h.endPause},g.map(n=>{let c=n.position||r,f=Re(c,h.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return m.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:h.updateHeight,className:n.visible?ei:"",style:f},"custom"===n.type?T(n.message,n):d?d(n):m.createElement(et,{toast:n,position:c}))}))},ea=dist_n}},function(e){e.O(0,[986,173,77,166,326,971,472,744],function(){return e(e.s=12929)}),_N_E=e.O()}]);