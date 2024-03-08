(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{32918:function(e,t,l){Promise.resolve().then(l.bind(l,35946))},35946:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ImageCategories}});var a=l(57437),s=l(2265),r=l(88110),n=l.n(r),i=l(49385),o=l(65137),c=l(33116),d=l(68143),u=l.n(d),g=l(59077),x=l(4327),m=l(16896),p=l(28077),h=l(89033),f=l(38891),v=l(16691),b=l.n(v),y=l(33071),j=l(33985);function AddCategory(e){let{setIsOpen:t,isOpen:l,refetch:r}=e,[n,i]=(0,s.useState)(""),o=(0,g.useMutation)({mutationKey:["create-mutation"],mutationFn:e=>f.x.post("/categories/create/",e),onSuccess:()=>{c.ZP.success("Category is created successfully"),r(),t(!1),i("")},onError:e=>{console.log("Error message from API",e),c.ZP.error("Category already exist")}});return(0,a.jsx)(y.Z,{closeIcon:(0,a.jsx)(b(),{src:j.Z,alt:"cross-icon"}),className:"h-[300px]",width:348,open:l,footer:null,onOk:()=>{t(!1)},children:(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o.mutate({categories_name:n})},layout:"vertical",className:"flex flex-col items-center  bg-[#141414] p-5",children:[(0,a.jsx)("label",{className:" text-white text-center self-start text-[22px] mt-10 pb-2 !text-xl font-bold",children:"Category Name"}),(0,a.jsx)("input",{type:"text",required:!0,placeholder:"Enter category name",value:n,onChange:e=>i(e.target.value),className:"w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl px-4 text-[18px]"}),(0,a.jsxs)("div",{className:"flex flex-col w-full gap-y-4 mt-6",children:[(0,a.jsx)("button",{type:"submit",loading:o.isLoading,className:"ant-btn-tertuary flex items-center justify-center bg-purple-500 w-full text-[20px] text-white py-2 hover:!bg-[#c779d0] rounded-xl",children:"Add"}),(0,a.jsx)("button",{type:"button",onClick:()=>{t(!1),i("")},className:"ant-btn-secondary flex items-center justify-center w-full text-[20px] text-white cursor-pointer",children:"Cancel"})]})]})})}let w=[{tabKey:1,tabText:"Images",content:(0,a.jsx)(function(){var e,t;let l=(0,g.useQueryClient)(),{ref:r,inView:d}=(0,x.YD)(),[v,y]=(0,s.useState)(""),[j,w]=(0,s.useState)(!1),[N,C]=(0,s.useState)(!1),[_,I]=(0,s.useState)(0),[Z,P]=(0,s.useState)(""),[S,L]=(0,s.useState)({page:1,page_size:20}),{adminAllImages:k,setAdminAllImages:D,adminFetchAllData:A,setAdminFetchAllData:F}=(0,m.o)();u()(()=>{let{scrollTop:e,scrollHeight:t,clientHeight:l}=document.documentElement,a=+(e/(t-l)*100).toFixed(1);console.log(a>90,N,A),!(a>90)||N||A?a<90&&N&&C(!1):(C(!0),L(e=>({...e,page:e.page+1})))},200);let O=(0,g.useMutation)({mutationKey:["upload-csv"],mutationFn:async e=>{var t,l;let a=await f.x.post("/process-csv/",e);return I((null==a?void 0:null===(l=a.data)||void 0===l?void 0:null===(t=l.response)||void 0===t?void 0:t.length)||0),a},onSuccess:async e=>{var t;let{data:l}=e;w(!0);let a=null==l?void 0:null===(t=l.response)||void 0===t?void 0:t.map(async e=>{try{var t,l;let a=await f.x.post("/generate-image/",{prompt:e});a&&I(e=>e-1);let s={imageId:null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.image_id,imageUrl:null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.generated_image_url};D([s,...k])}catch(e){console.error("Error in generate-image API call",e)}});await Promise.all(a),w(!1)}});console.log(_,"original length");let{data:K,fetchNextPage:E,hasNextPage:M,isFetchingNextPage:H}=(0,g.useInfiniteQuery)({queryKey:["get-all-images"],queryFn:e=>{let{pageParam:t=1}=e;return f.x.get("categories/all/images/?page=".concat(t,"&page_size=10")).then(e=>{let{data:t}=e;return t})},getNextPageParam:(e,t)=>{let l=(null==t?void 0:t.length)?(null==t?void 0:t.length)+1:void 0;return l},getPreviousPageParam:(e,t)=>e.prevCursor});(0,s.useEffect)(()=>{d&&M&&E()},[d,M,E]);let T=(0,g.useMutation)({mutationKey:["delete-image-by-id"],mutationFn:async e=>f.x.delete("/delete-image/".concat(e,"/")),onSuccess:()=>{c.ZP.success("Image successfull deleted"),l.invalidateQueries("get-all-images")},onError:e=>{c.ZP.error("Failed to delete image")}});return(0,a.jsxs)("div",{className:"flex flex-col border border-gray-600 rounded-2xl w-full text-white",children:[(0,a.jsxs)("header",{className:"flex items-center justify-between p-5 border-b border-gray-600",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Images (".concat(null==K?void 0:null===(e=K.pages[0])||void 0===e?void 0:e.count,")")}),(0,a.jsx)("span",{children:"Generate Images By Uploading Prompts"})]}),(0,a.jsx)(o.Z,{onChange(e){let{file:t,fileList:l}=e;if(console.log("Props function fired"),"uploading"!==t.status){var a,s;y(null===(a=l[0])||void 0===a?void 0:a.name);let e=new FormData;e.append("file",null===(s=l[0])||void 0===s?void 0:s.originFileObj),O.mutateAsync(e)}},multiple:!0,children:(0,a.jsxs)(n(),{type:"primary",className:"bg-purple-500/20 border border-purple-600 text-purple-600 font-sans",children:[(0,a.jsx)(b(),{src:p.Z,alt:"plus-icon",className:"mr-2 !text-purple-600"}),"  Upload .csv"]})})]}),(0,a.jsxs)("main",{className:"p-2 md:p-5 flex flex-col gap-y-4 w-full",children:[v&&(0,a.jsxs)("section",{className:"flex justify-between text-xl",children:[(0,a.jsx)("h1",{className:"",children:v||"New Promt files.csv"}),(0,a.jsx)("h1",{className:"text-yellow",children:"Generate Images"})]}),(0,a.jsxs)("section",{className:"w-full grid gap-x-2 md:gap-x-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:[j&&Array.from({length:_}).map((e,t)=>(0,a.jsx)("div",{role:"status",className:"w-full h-[205px] border border-gray-200 relative overflow-hidden rounded-xl shadow animate-pulse  dark:border-gray-700",children:(0,a.jsx)("div",{className:"flex items-center h-full justify-center bg-yellow rounded dark:bg-gray-700",children:(0,a.jsxs)("svg",{className:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[(0,a.jsx)("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),(0,a.jsx)("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})]})})},t)),null==K?void 0:null===(t=K.pages)||void 0===t?void 0:t.map((e,t)=>{var l;return null==e?void 0:null===(l=e.results)||void 0===l?void 0:l.map((e,t)=>(0,a.jsxs)("div",{className:"relative overflow-hidden rounded-xl h-[205px] select-none",children:[(0,a.jsx)(b(),{className:"h-full w-full  object-cover",src:null==e?void 0:e.image_path,alt:null==e?void 0:e.image_id,width:400,height:400},null==e?void 0:e.image_id),(0,a.jsx)("div",{className:"absolute bg-gradient-to-b from-black/80 to-transparent top-0 w-full h-full z-20",children:(0,a.jsx)(n(),{loading:T.isLoading&&T.variables===(null==e?void 0:e.image_id),icon:(0,a.jsx)(b(),{src:h.Z,alt:"alt-icon"}),onClick:()=>{P(null==e?void 0:e.image_id),null==T||T.mutate(null==e?void 0:e.image_id)},className:"absolute right-3 top-3 flex items-center justify-center w-8 h-8 rounded-lg bg-black/50 backdrop-blur-xl"})})]},null==e?void 0:e.image_id))})]}),(0,a.jsx)("div",{ref:r,className:"flex items-center w-full justify-center",children:H&&(0,a.jsx)(i.default,{})})]})]})},{})},{tabKey:2,tabText:"Categories",content:(0,a.jsx)(function(){let[e,t]=(0,s.useState)(!1),handleDeleteCategory=e=>{o.mutate(e)},{data:l,isLoading:r,refetch:i}=(0,g.useQuery)({queryKey:["get-all-category"],queryFn:async()=>f.x.get("/categories/").then(e=>{let{data:t}=e;return t||[]}).catch(e=>console.log(e,"this is error"))}),o=(0,g.useMutation)({mutationKey:["delete-category"],mutationFn:e=>f.x.delete("/categories/delete/".concat(e)),onSuccess:()=>{c.ZP.success("Category is successfully deleted"),i()},onError:(e,t)=>{console.log(e),c.ZP.error("Failed to delete category with id=".concat(t))}});return(0,a.jsxs)("div",{className:"flex flex-col border border-gray-600 rounded-2xl text-white",children:[(0,a.jsxs)("header",{className:"flex items-center justify-between p-5 border-b border-gray-600",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h1",{className:"text-2xl font-bold",children:["Categories (",null==l?void 0:l.length,")"]}),(0,a.jsx)("span",{children:"Manage Your Categories Here"}),(0,a.jsx)("span",{})]}),(0,a.jsx)(n(),{type:"primary",onClick:()=>t(!0),className:"bg-purple-500/20 border border-purple-600 text-purple-600 font-sans",icon:(0,a.jsx)(b(),{src:p.Z,alt:"plus-icon"}),children:"Add Category"})]}),r?(0,a.jsx)("h1",{className:"text-center px-8 py-12 text-lg",children:"loading..."}):(0,a.jsx)("main",{className:"flex flex-col gap-y-4 pb-10",children:null==l?void 0:l.map(e=>{let{categories_id:t,categories_name:l}=e;return(0,a.jsxs)("section",{className:"flex justify-between text-xl border-b border-gray-600 p-5",children:[(0,a.jsx)("h1",{className:"",children:l}),(0,a.jsx)("span",{onClick:()=>handleDeleteCategory(t),className:"text-red-600 cursor-pointer uppercase font-bold tracking-widest pr-1  md:pr-8",children:"Remove"})]},t)})}),(0,a.jsx)(AddCategory,{setIsOpen:t,isOpen:e,refetch:i})]})},{})}];function ImageCategories(){let[e,t]=(0,s.useState)(1),l=(0,m.o)(e=>e.userData);return console.log("userData",l),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"grid grid-cols-[100px_100px] px-10 items-center border-b border-gray-600 text-center pt-5 text-white ",children:w.map(l=>(0,a.jsx)("div",{className:"".concat(e===l.tabKey?"transition-all duration-800 delay-100 text-yellow font-bold tab-gradient border-b-4 border-yellow":""," cursor-pointer w-full text-base lg:text-xl py-2"),onClick:()=>t(l.tabKey),children:l.tabText},l.tabKey))}),(0,a.jsx)("div",{className:"relative py-5 px-3 md:px-10",children:(e=>{let t=w.find(t=>t.tabKey===e);return t?(0,a.jsx)("h1",{children:t.content}):(0,a.jsx)("h1",{children:"No Tabs found"})})(e)})]})}},16896:function(e,t,l){"use strict";l.d(t,{o:function(){return r}});var a=l(94660),s=l(74810);let r=(0,a.Ue)()((0,s.tJ)(e=>({selectedSortOption:"",isLogin:!1,openLoginModal:!1,allImages:[],clientFetchAllData:!1,planType:"",isRemix:!1,imageGenerateLimit:0,imageDownloadLimit:0,userData:void 0,categories:[],navOpen:!1,setSelectedSortOption:t=>e({selectedSortOption:t}),setNavOpen:t=>e({navOpen:t}),setIsLogin:t=>e({isLogin:t}),setIsRemix:t=>e({isRemix:t}),setOpenLoginModal:t=>e({openLoginModal:t}),setAllImages:t=>e({allImages:t}),setClientFetchAllData:t=>e({clientFetchAllData:t}),setPlanType:t=>e({planType:t}),setImageGenerateLimit:t=>e({imageGenerateLimit:t}),setImageDownloadLimit:t=>e({imageDownloadLimit:t}),setUserData:t=>e({userData:t}),setCategories:t=>e({categories:t})}),{name:"saved-states",storage:(0,s.FL)(()=>sessionStorage)}))},38891:function(e,t,l){"use strict";l.d(t,{x:function(){return s}});var a=l(92173);let s=a.Z.create({baseURL:"http://54.237.156.251:8000/api"})},89033:function(e,t){"use strict";t.Z={src:"/_next/static/media/delete.f5b8a014.svg",height:20,width:18,blurWidth:0,blurHeight:0}},28077:function(e,t){"use strict";t.Z={src:"/_next/static/media/plus.a31b4988.svg",height:12,width:13,blurWidth:0,blurHeight:0}},33985:function(e,t){"use strict";t.Z={src:"/_next/static/media/small-cross.2ab7fe01.svg",height:7,width:7,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[986,173,77,166,783,266,116,125,71,548,971,472,744],function(){return e(e.s=32918)}),_N_E=e.O()}]);