(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{58730:function(e,r,n){Promise.resolve().then(n.bind(n,76044))},50129:function(e,r,n){"use strict";n.d(r,{Z:function(){return Loader}});var l=n(57437);n(2265);var components_Spin=function(){return(0,l.jsx)("div",{className:"flex justify-center items-center ",children:(0,l.jsxs)("div",{role:"status",children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,l.jsx)("span",{className:"sr-only",children:"Loading..."})]})})};function Loader(){return(0,l.jsx)("div",{className:"w-full flex items-center justify-center mt-20",children:(0,l.jsx)(components_Spin,{})})}},76044:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return UserDetail}});var l=n(57437),c=n(25511),d=n(60980),m=n(81547),f=n(89033),g=n(57694),h=n(64966),x=n(16896),b=n(38891),y=n(16691),w=n.n(y),_=n(61396),C=n.n(_),N=n(5925),k=n(59077),E=n(50129);function UserDetail(){let e=(0,h.Z)("userInfo")[0],r=(0,x.o)(e=>e.planType),n=(0,x.o)(e=>e.imageGenerateLimit),{data:y,isLoading:_,refetch:L}=(0,k.useQuery)({queryKey:["get-user-all-images"],queryFn:async()=>{var r;return b.x.get("/user-images/".concat(null==e?void 0:null===(r=e.user_data)||void 0===r?void 0:r.user_id)).then(e=>{let{data:r}=e;return r}).catch(e=>console.log(e))}}),O=(0,k.useMutation)({mutationKey:"delete-user-image-by-id",mutationFn:async e=>{await b.x.delete("/delete-image/".concat(e,"/"))},onSuccess:async()=>{await L(),N.default.success("Image successfully deleted")},onError:()=>{N.default.error("Failed to delete image")}});return(0,l.jsx)("section",{className:"flex flex-col items-center justify-center w-full h-full",children:_?(0,l.jsx)(E.Z,{}):(0,l.jsxs)("div",{className:"flex flex-col gap-y-4 py-8 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-y-2 items-center justify-between",children:[(0,l.jsxs)("h1",{className:"text-2xl sm:text-3xl text-white font-bold",children:["Generated Images (",null==y?void 0:y.length,")"]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-5",children:["free"===r&&(0,l.jsxs)("span",{className:"text-lg text-yellow",children:["You have ",n," credits left"]}),(0,l.jsx)(C(),{href:0==n?"/subscriptions-offers":"/generate-images/generating-from-prompt",children:(0,l.jsxs)("button",{className:"flex items-center justify-center primary-btn py-2 px-4 text-base font-bold gap-2 tracking-widest",children:[(0,l.jsx)(w(),{src:m.Z,alt:"bulbicon"}),(0,l.jsx)("span",{children:" Generate Image"})]})})]})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 cursor-pointer",children:null==y?void 0:y.map((r,n)=>{var m,h,x,b,y,_;return(0,l.jsx)(C(),{href:"/".concat(null==r?void 0:r.caption[0].replace(/\s+/g,"-"),"/").concat(null==r?void 0:r.image_id),children:(0,l.jsxs)("div",{className:"relative items-center justify-center h-[320px] overflow-hidden rounded-2xl",children:[(0,l.jsx)(w(),{className:"h-full w-full object-cover",src:null==r?void 0:r.image_path,alt:null==r?void 0:r.image_path,width:350,height:100,quality:100}),(0,l.jsxs)("section",{className:"absolute bg-gradient-to-t from-black/95 to-transparent top-0 w-full h-full",children:[(0,l.jsxs)("section",{className:"absolute left-3 top-3 flex items-center justify-center bg-black/30 text-lg backdrop-blur-lg text-white px-2 py-1.5 rounded-lg",children:[null==r?void 0:null===(m=r.username)||void 0===m?void 0:m.split(" ")[0]," ",null==r?void 0:null===(x=r.username)||void 0===x?void 0:null===(h=x.split(" ")[1])||void 0===h?void 0:h.charAt(0).toUpperCase()]}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),null==O||O.mutate(null==r?void 0:r.image_id)},className:"absolute right-3 top-3 flex items-center justify-center w-8 h-8 rounded-lg bg-black/50 backdrop-blur-xl",children:(0,l.jsx)(w(),{src:f.Z,alt:"delete icon"})})]}),(0,l.jsx)("section",{className:"absolute w-fulll left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2  text-white socails",children:(0,l.jsxs)("div",{className:"flex items-center justify-center gap-x-10 text-xl",children:[(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(null==r?void 0:null===(b=r.likes)||void 0===b?void 0:b.some(r=>{var n;return r===(null==e?void 0:null===(n=e.user_data)||void 0===n?void 0:n.user_id)}))?(0,l.jsx)(w(),{src:g.Z,alt:"LikeFill",width:20,height:20}):(0,l.jsx)(w(),{src:d.Z,alt:"LikeFill",width:20,height:20}),(0,l.jsx)("span",{children:null==r?void 0:null===(y=r.likes)||void 0===y?void 0:y.length})]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,l.jsx)(w(),{src:c.Z,alt:"Comment",width:20,height:20}),(0,l.jsx)("span",{children:null==r?void 0:null===(_=r.comments)||void 0===_?void 0:_.length})]})]})})]})},n)})})]})})}},64966:function(e,r,n){"use strict";var l=n(2265);r.Z=function(e,r){let[n,c]=(0,l.useState)(()=>{{let n=window.localStorage.getItem(e);return"undefined"!==n&&null!==n?JSON.parse(n):r}});return(0,l.useEffect)(()=>{window.localStorage.setItem(e,JSON.stringify(n))},[n,e]),[n,c]}},16896:function(e,r,n){"use strict";n.d(r,{o:function(){return d}});var l=n(94660),c=n(74810);let d=(0,l.Ue)()((0,c.tJ)(e=>({selectedSortOption:"",isLogin:!1,openLoginModal:!1,allImages:[],clientFetchAllData:!1,planType:"",isRemix:!1,imageGenerateLimit:0,imageDownloadLimit:0,userData:void 0,categories:[],navOpen:!1,setSelectedSortOption:r=>e({selectedSortOption:r}),setNavOpen:r=>e({navOpen:r}),setIsLogin:r=>e({isLogin:r}),setIsRemix:r=>e({isRemix:r}),setOpenLoginModal:r=>e({openLoginModal:r}),setAllImages:r=>e({allImages:r}),setClientFetchAllData:r=>e({clientFetchAllData:r}),setPlanType:r=>e({planType:r}),setImageGenerateLimit:r=>e({imageGenerateLimit:r}),setImageDownloadLimit:r=>e({imageDownloadLimit:r}),setUserData:r=>e({userData:r}),setCategories:r=>e({categories:r})}),{name:"saved-states",storage:(0,c.FL)(()=>sessionStorage)}))},38891:function(e,r,n){"use strict";n.d(r,{x:function(){return c}});var l=n(92173);let c=l.Z.create({baseURL:"https://container-service-1.dj8hvpj05oal6.ap-southeast-1.cs.amazonlightsail.com/api/"})},25511:function(e,r){"use strict";r.Z={src:"/_next/static/media/Comment.6b9b5e46.svg",height:22,width:22,blurWidth:0,blurHeight:0}},60980:function(e,r){"use strict";r.Z={src:"/_next/static/media/Like.7031d992.svg",height:22,width:20,blurWidth:0,blurHeight:0}},81547:function(e,r){"use strict";r.Z={src:"/_next/static/media/bulb.07cba8b5.svg",height:20,width:20,blurWidth:0,blurHeight:0}},89033:function(e,r){"use strict";r.Z={src:"/_next/static/media/delete.f5b8a014.svg",height:20,width:18,blurWidth:0,blurHeight:0}},57694:function(e,r){"use strict";r.Z={src:"/_next/static/media/like-fill.3f39089f.svg",height:22,width:20,blurWidth:0,blurHeight:0}},61396:function(e,r,n){e.exports=n(68326)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return q},ErrorIcon:function(){return z},LoaderIcon:function(){return P},ToastBar:function(){return et},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return es},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var d,m=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let m=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+m+";":l+="f"==d[1]?o(m,d):d+"{"+o(m,"k"==d[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=m&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,m):d+":"+m+";")}return n+(r&&c?r+"{"+c+"}":c)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let m=s(e),f=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[f]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);b[f]=o(c?{["@keyframes "+f]:r}:r,n?"":"."+f)}let y=n&&b.g?b.g:null;return n&&(b.g=b[f]),d=b[f],y?r.data=r.data.replace(y,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),f},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let y,w,_,C=u.bind({k:1});function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let m=Object.assign({},c),f=m.className||a.className;n.p=Object.assign({theme:w&&w()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,l)+(f?" "+f:""),r&&(m.ref=d);let g=e;return e[0]&&(g=m.as||e,delete m.as),_&&g[0]&&_(m),y(g,m)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,N=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},k=new Map,$=e=>{if(k.has(e))return;let r=setTimeout(()=>{k.delete(e),dist_u({type:4,toastId:e})},1e3);k.set(e,r)},J=e=>{let r=k.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},E=[],L={toasts:[],pausedAt:void 0},dist_u=e=>{L=v(L,e),E.forEach(e=>{e(L)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,m.useState)(L);(0,m.useEffect)(()=>(E.push(n),()=>{let e=E.indexOf(n);e>-1&&E.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||O[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||N()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,m.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,m.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,m.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},m=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),f=m.findIndex(r=>r.id===e.id),g=m.filter((e,r)=>r<f&&e.visible).length;return m.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},S=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=C`
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
}`,z=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
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
`,H=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,P=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,U=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=C`
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

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
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
`,Y=C`
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
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(Q,null,r):r:"blank"===n?null:m.createElement(K,null,m.createElement(P,{...l}),"loading"!==n&&m.createElement(B,null,"error"===n?m.createElement(z,{...l}):m.createElement(q,{...l})))},ye=e=>`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${C(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=m.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},d=m.createElement(M,{toast:e}),f=m.createElement(X,{...e.ariaProps},T(e.message,e));return m.createElement(V,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:d,message:f}):m.createElement(m.Fragment,null,d,f))});d=m.createElement,o.p=void 0,y=d,w=void 0,_=void 0;var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let d=m.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return m.createElement("div",{ref:d,className:r,style:n},c)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},ei=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:d,containerClassName:f})=>{let{toasts:g,handlers:h}=D(n);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...d},className:f,onMouseEnter:h.startPause,onMouseLeave:h.endPause},g.map(n=>{let d=n.position||r,f=Re(d,h.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return m.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:h.updateHeight,className:n.visible?ei:"",style:f},"custom"===n.type?T(n.message,n):c?c(n):m.createElement(et,{toast:n,position:d}))}))},es=dist_n}},function(e){e.O(0,[986,173,77,166,326,971,472,744],function(){return e(e.s=58730)}),_N_E=e.O()}]);