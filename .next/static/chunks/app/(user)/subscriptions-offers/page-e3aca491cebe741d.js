(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{27106:function(e,r,n){"use strict";n.d(r,{J:function(){return loadStripe}});var l,c="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,findScript=function(){for(var e=document.querySelectorAll('script[src^="'.concat(c,'"]')),r=0;r<e.length;r++){var n=e[r];if(d.test(n.src))return n}return null},injectScript=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(c).concat(r);var l=document.head||document.body;if(!l)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return l.appendChild(n),n},registerWrapper=function(e,r){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:r})},m=null,f=null,h=null,initStripe=function(e,r,n){if(null===e)return null;var l=e.apply(void 0,r);return registerWrapper(l,n),l},g=!1,getStripePromise=function(){return l||(l=(null!==m?m:(m=new Promise(function(e,r){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var n,l=findScript();l?l&&null!==h&&null!==f&&(l.removeEventListener("load",h),l.removeEventListener("error",f),null===(n=l.parentNode)||void 0===n||n.removeChild(l),l=injectScript(null)):l=injectScript(null),h=function(){window.Stripe?e(window.Stripe):r(Error("Stripe.js not available"))},f=function(){r(Error("Failed to load Stripe.js"))},l.addEventListener("load",h),l.addEventListener("error",f)}catch(e){r(e);return}})).catch(function(e){return m=null,Promise.reject(e)})).catch(function(e){return l=null,Promise.reject(e)}))};Promise.resolve().then(function(){return getStripePromise()}).catch(function(e){g||console.warn(e)});var loadStripe=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];g=!0;var l=Date.now();return getStripePromise().then(function(e){return initStripe(e,r,l)})}},50798:function(e,r,n){Promise.resolve().then(n.bind(n,27318))},27318:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Subscriptions}});var l=n(57437),c=n(24033),d={src:"/_next/static/media/back-double.fff87204.svg",height:16,width:12,blurWidth:0,blurHeight:0},m=n(50129),f=n(64966),h=n(16896),g=n(38891),x=n(27106),y=n(5925),b=n(59077);function PlanOffer(e){var r,n;let{title:c,amount:d,days:m,description:w}=e,_=(0,h.o)(e=>e.setOpenLoginModal),C=(0,h.o)(e=>e.setPlanType),k=(0,h.o)(e=>e.setIsRemix),N=(0,h.o)(e=>e.setImageDownloadLimit),S=(0,h.o)(e=>e.setImageGenerateLimit),E="".concat(window.location.origin,"/?success=true"),L="".concat(window.location.origin,"/success=false"),O=(0,h.o)(e=>e.setUserData),[P,F]=(0,f.Z)("userInfo"),returnPriceId=()=>"premium"===c?"price_1ObQ4bLq5Ym0U1PnhL0YSMUW":"deluxe"===c?"price_1ObQ4vLq5Ym0U1PnFzwOlCZ1":"",{mutate:A,isLoading:z}=(0,b.useMutation)({mutationKey:["user-plan-subscription"],mutationFn:async e=>g.x.post("/change-plan/",e).then(e=>{var r,n,l,c,d,m,f,h;let{data:g}=e;F(g),O(g),C(null==g?void 0:null===(n=g.user_data)||void 0===n?void 0:null===(r=n.usersubscription)||void 0===r?void 0:r.plan_type),k(null==g?void 0:null===(c=g.user_data)||void 0===c?void 0:null===(l=c.usersubscription)||void 0===l?void 0:l.ability_to_remix),N(null==g?void 0:null===(m=g.user_data)||void 0===m?void 0:null===(d=m.usersubscription)||void 0===d?void 0:d.max_download_limit),S(null==g?void 0:null===(h=g.user_data)||void 0===h?void 0:null===(f=h.usersubscription)||void 0===f?void 0:f.max_generate_limit)})}),handleCheckout=async()=>{localStorage.setItem("plan_name",c);let e=await (0,x.J)("pk_test_51OU3TkLq5Ym0U1Pnkxk2VIrX9yRsFyFYILt2CkwbNTaYTKp4ylgZitmJJhAnGXJijMVNGhhjaBvklIxCRWZEChxL00AeIczLO3"),r=await g.x.post("create-checkout-session/",{price_id:returnPriceId(),num_days:m||1,success_url:E,cancel_url:L}),n=await r.data,l=await (null==e?void 0:e.redirectToCheckout({sessionId:n.session_id}));(null==l?void 0:l.error)?y.default.error("Error redirecting to checkout"):y.default.success("Checkout completed successfully")};return(0,l.jsxs)("div",{className:"bg-white/5 backdrop-blur-3xl w-full md:w-[320px] py-4 rounded-2xl h-[480px]",children:[(0,l.jsxs)("header",{className:"flex flex-col gap-y-1 border-b border-yellow/20 px-4 pb-4",children:[(0,l.jsx)("h1",{className:"text-yellow text-4xl font-bold capitalize",children:c}),(0,l.jsxs)("div",{className:"flex items-baseline gap-x-1",children:[(0,l.jsx)("span",{className:"text-4xl",children:"$"}),(0,l.jsx)("span",{className:"text-4xl font-bold",children:d}),(0,l.jsx)("span",{className:"text-xl",children:"/month"})]})]}),(0,l.jsxs)("section",{className:"flex flex-col gap-y-6 px-4 pt-4",children:[(0,l.jsx)("div",{className:"flex flex-col gap-y-3",children:null==w?void 0:w.map((e,r)=>(0,l.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,l.jsx)("span",{className:"bg-yellow w-3 h-3 rounded-full"}),(0,l.jsx)("span",{className:"text-lg",children:e})]},r))}),"free"!==c&&(0,l.jsx)(l.Fragment,{children:(null==P?void 0:null===(n=P.user_data)||void 0===n?void 0:null===(r=n.usersubscription)||void 0===r?void 0:r.plan_type)===c?(0,l.jsx)("button",{onClick:()=>{var e,r;let n={user_id:(null==P?void 0:null===(e=P.user_data)||void 0===e?void 0:e.user_id)||null,new_plan_type:"free",email:(null==P?void 0:null===(r=P.user_data)||void 0===r?void 0:r.email)||null};A(n)},disabled:z,className:"self-center text-xl text-black font-semibold hover:bg-yellow/50 transition-all bg-yellow px-20 py-2 rounded-2xl",children:z?"Unsubscribing...":"Cancel Plan"}):(0,l.jsx)("button",{onClick:P?handleCheckout:()=>_(!0),className:"absolute bottom-10 self-center text-xl text-black font-semibold hover:bg-yellow/50 transition-all bg-yellow px-20 py-2 rounded-2xl",children:"Select Plan"})})]})]})}var w=n(16691),_=n.n(w);function Subscriptions(){let e=(0,c.useRouter)(),{data:r,isLoading:n}=(0,b.useQuery)({queryKey:["get-all-package"],queryFn:async()=>{try{let{data:e}=await g.x.get("/payment-plans/");return e}catch(e){throw Error(e)}}});return(0,l.jsx)(l.Fragment,{children:n?(0,l.jsx)(m.Z,{}):(0,l.jsxs)("div",{className:"relative flex flex-col w-full gap-y-6 items-center justify-center text-white pb-20 md:pb-0",children:[(0,l.jsxs)("button",{className:"flex text-md md:text-2xl absolute left-0 top-2 md:top-12 cursor-pointer !w-[25px] md:w-full",onClick:()=>e.back(),children:[(0,l.jsx)(_(),{alt:"back icon",src:d,className:"text-white mr-1 mb-[2px] w-[10px] md:w-full"}),"Back"]}),(0,l.jsxs)("div",{className:"flex flex-col text-center pt-12",children:[(0,l.jsx)("h1",{className:"text-3xl md:text-4xl font-semibold",children:"Unlock Imagine Anything"}),(0,l.jsx)("span",{className:"text-xl md:text-2xl font-normal",children:"Pick The Plan That Is Best For You"})]}),(0,l.jsx)("div",{className:"flex flex-wrap w-full gap-y-5 items-start gap-x-5 justify-center h-full pb-10",children:null==r?void 0:r.map(e=>{let{payment_id:r,plan_type:n,amount:c,number_of_days:d,description:m}=e;return(0,l.jsx)(PlanOffer,{title:n,amount:c,days:d,description:m},r)})})]})})}},50129:function(e,r,n){"use strict";n.d(r,{Z:function(){return Loader}});var l=n(57437);n(2265);var components_Spin=function(){return(0,l.jsx)("div",{className:"flex justify-center items-center ",children:(0,l.jsxs)("div",{role:"status",children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,l.jsx)("span",{className:"sr-only",children:"Loading..."})]})})};function Loader(){return(0,l.jsx)("div",{className:"w-full flex items-center justify-center mt-20",children:(0,l.jsx)(components_Spin,{})})}},64966:function(e,r,n){"use strict";var l=n(2265);r.Z=function(e,r){let[n,c]=(0,l.useState)(()=>{{let n=window.localStorage.getItem(e);return"undefined"!==n&&null!==n?JSON.parse(n):r}});return(0,l.useEffect)(()=>{window.localStorage.setItem(e,JSON.stringify(n))},[n,e]),[n,c]}},16896:function(e,r,n){"use strict";n.d(r,{o:function(){return d}});var l=n(94660),c=n(74810);let d=(0,l.Ue)()((0,c.tJ)(e=>({selectedSortOption:"",isLogin:!1,openLoginModal:!1,allImages:[],clientFetchAllData:!1,planType:"",isRemix:!1,imageGenerateLimit:0,imageDownloadLimit:0,userData:void 0,categories:[],navOpen:!1,setSelectedSortOption:r=>e({selectedSortOption:r}),setNavOpen:r=>e({navOpen:r}),setIsLogin:r=>e({isLogin:r}),setIsRemix:r=>e({isRemix:r}),setOpenLoginModal:r=>e({openLoginModal:r}),setAllImages:r=>e({allImages:r}),setClientFetchAllData:r=>e({clientFetchAllData:r}),setPlanType:r=>e({planType:r}),setImageGenerateLimit:r=>e({imageGenerateLimit:r}),setImageDownloadLimit:r=>e({imageDownloadLimit:r}),setUserData:r=>e({userData:r}),setCategories:r=>e({categories:r})}),{name:"saved-states",storage:(0,c.FL)(()=>sessionStorage)}))},38891:function(e,r,n){"use strict";n.d(r,{x:function(){return c}});var l=n(92173);let c=l.Z.create({baseURL:"https://container-service-1.dj8hvpj05oal6.ap-southeast-1.cs.amazonlightsail.com/api/"})},24033:function(e,r,n){e.exports=n(50094)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return Y},ErrorIcon:function(){return A},LoaderIcon:function(){return U},ToastBar:function(){return et},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return ei},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var d,m=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let m=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+m+";":l+="f"==d[1]?o(m,d):d+"{"+o(m,"k"==d[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=m&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,m):d+":"+m+";")}return n+(r&&c?r+"{"+c+"}":c)+l},y={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let m=s(e),f=y[m]||(y[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!y[f]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=h.exec(e.replace(g,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);y[f]=o(c?{["@keyframes "+f]:r}:r,n?"":"."+f)}let b=n&&y.g?y.g:null;return n&&(y.g=y[f]),d=y[f],b?r.data=r.data.replace(b,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),f},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let b,w,_,C=u.bind({k:1});function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let m=Object.assign({},c),f=m.className||a.className;n.p=Object.assign({theme:w&&w()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,l)+(f?" "+f:""),r&&(m.ref=d);let h=e;return e[0]&&(h=m.as||e,delete m.as),_&&h[0]&&_(m),b(h,m)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,k=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},N=new Map,$=e=>{if(N.has(e))return;let r=setTimeout(()=>{N.delete(e),dist_u({type:4,toastId:e})},1e3);N.set(e,r)},J=e=>{let r=N.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},S=[],E={toasts:[],pausedAt:void 0},dist_u=e=>{E=v(E,e),S.forEach(e=>{e(E)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,m.useState)(E);(0,m.useEffect)(()=>(S.push(n),()=>{let e=S.indexOf(n);e>-1&&S.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||L[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||k()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,m.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,m.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,m.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},m=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),f=m.findIndex(r=>r.id===e.id),h=m.filter((e,r)=>r<f&&e.visible).length;return m.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},O=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,A=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
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
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${z} 1s linear infinite;
`,R=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=C`
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
}`,Y=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
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
`,H=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(Q,null,r):r:"blank"===n?null:m.createElement(H,null,m.createElement(U,{...l}),"loading"!==n&&m.createElement(B,null,"error"===n?m.createElement(A,{...l}):m.createElement(Y,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=j("div")`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${C(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=m.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},d=m.createElement(M,{toast:e}),f=m.createElement(X,{...e.ariaProps},T(e.message,e));return m.createElement(V,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:d,message:f}):m.createElement(m.Fragment,null,d,f))});d=m.createElement,o.p=void 0,b=d,w=void 0,_=void 0;var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let d=m.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return m.createElement("div",{ref:d,className:r,style:n},c)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},er=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:d,containerClassName:f})=>{let{toasts:h,handlers:g}=D(n);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...d},className:f,onMouseEnter:g.startPause,onMouseLeave:g.endPause},h.map(n=>{let d=n.position||r,f=Re(d,g.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return m.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:g.updateHeight,className:n.visible?er:"",style:f},"custom"===n.type?T(n.message,n):c?c(n):m.createElement(et,{toast:n,position:d}))}))},ei=dist_n}},function(e){e.O(0,[986,173,77,166,971,472,744],function(){return e(e.s=50798)}),_N_E=e.O()}]);