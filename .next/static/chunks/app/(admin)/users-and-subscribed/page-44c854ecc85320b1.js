(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{79029:function(e,t,r){var n=r(42242).Symbol;e.exports=n},86714:function(e,t,r){var n=r(79029),o=r(35078),l=r(76276),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):l(e)}},13225:function(e,t,r){var n=r(20121),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},66503:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},35078:function(e,t,r){var n=r(79029),o=Object.prototype,l=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=l.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[i]=r:delete e[i]),o}},76276:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},42242:function(e,t,r){var n=r(66503),o="object"==typeof self&&self&&self.Object===Object&&self,l=n||o||Function("return this")();e.exports=l},20121:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},68143:function(e,t,r){var n=r(36905),o=r(14752),l=r(71573),a=Math.max,i=Math.min;e.exports=function(e,t,r){var s,u,c,d,f,p,x=0,v=!1,m=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(t){var r=s,n=u;return s=u=void 0,x=t,d=e.apply(n,r)}function shouldInvoke(e){var r=e-p,n=e-x;return void 0===p||r>=t||r<0||m&&n>=c}function timerExpired(){var e,r,n,l=o();if(shouldInvoke(l))return trailingEdge(l);f=setTimeout(timerExpired,(e=l-p,r=l-x,n=t-e,m?i(n,c-r):n))}function trailingEdge(e){return(f=void 0,g&&s)?invokeFunc(e):(s=u=void 0,d)}function debounced(){var e,r=o(),n=shouldInvoke(r);if(s=arguments,u=this,p=r,n){if(void 0===f)return x=e=p,f=setTimeout(timerExpired,t),v?invokeFunc(e):d;if(m)return clearTimeout(f),f=setTimeout(timerExpired,t),invokeFunc(p)}return void 0===f&&(f=setTimeout(timerExpired,t)),d}return t=l(t)||0,n(r)&&(v=!!r.leading,c=(m="maxWait"in r)?a(l(r.maxWait)||0,t):c,g="trailing"in r?!!r.trailing:g),debounced.cancel=function(){void 0!==f&&clearTimeout(f),x=0,s=p=u=f=void 0},debounced.flush=function(){return void 0===f?d:trailingEdge(o())},debounced}},36905:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},12387:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},71087:function(e,t,r){var n=r(86714),o=r(12387);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},14752:function(e,t,r){var n=r(42242);e.exports=function(){return n.Date.now()}},71573:function(e,t,r){var n=r(13225),o=r(36905),l=r(71087),a=0/0,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||u.test(e)?c(e.slice(2),r?2:8):i.test(e)?a:+e}},54843:function(e,t,r){Promise.resolve().then(r.bind(r,33650))},33650:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return SubscribedUsers}});var n=r(57437),o=r(2265),l=r(16691),a=r.n(l),i=r(90986),s=r(88110),u=r.n(s),c=r(43574),d=r(45623),f=r(68939),p=r(33116),x=r(59077),v=r(38891),m={src:"/_next/static/media/filters.d6206511.svg",height:16,width:28,blurWidth:0,blurHeight:0};let g=[{value:"all",label:"All Users"},{value:"free",label:"Free Users"},{value:"premium",label:"Premium Users"},{value:"deluxe",label:"Deluxe Users"}];var b=r(68143),h=r.n(b);function SubscribedUsers(){var e;let[t,r]=(0,o.useState)(1),[l,s]=(0,o.useState)(""),[b,y]=(0,o.useState)("all"),[j,w]=(0,o.useState)(!1),deleteUser=e=>{console.log(e),S.mutate(e)},k=h()(e=>{s(e)},500),onPageChange=e=>{console.log(e),r(e)},N=[{title:"Name",dataIndex:"username",key:"username",render:e=>(0,n.jsx)("span",{className:"text-white  font-medium text-[18px]",children:e})},{title:"Email",dataIndex:"email",key:"email",render:e=>(0,n.jsx)("span",{className:"text-white  font-medium text-[18px]",children:e})},{title:"Subscription",dataIndex:"subscription",key:"subscription",render:(e,t)=>{var r,o;return(0,n.jsx)(u(),{type:"primary",className:"text-white ".concat((null==t?void 0:null===(r=t.usersubscription)||void 0===r?void 0:r.plan_type)==="free"?"bg-white/10 border-gray-600 backdrop-blur-3xl":"primary-btn"," !py-1 !px-5 !rounded-xl text-base font-bold"),children:null==t?void 0:null===(o=t.usersubscription)||void 0===o?void 0:o.plan_type})}},{title:"Actions",dataIndex:"actions",key:"actions",render:(e,t)=>(0,n.jsx)("span",{onClick:()=>deleteUser(t.user_id),className:" font-medium text-[18px] text-[#FF7070] cursor-pointer",children:"Remove"})}],S=(0,x.useMutation)({mutationKey:["delete-user"],mutationFn:async e=>v.x.delete("/users/delete/".concat(e,"/")).then(()=>{p.ZP.success("User is successfully deleted"),F()}).catch(t=>{console.log(t),p.ZP.error("Failed to delete the user with id=".concat(e," "))})}),{data:E,isLoading:C,refetch:F}=(0,x.useQuery)({queryKey:["get-users",t,b,l],queryFn:async()=>v.x.get("/users/all/",{params:{page:t}}).then(e=>{let{data:t}=e,r=null==t?void 0:t.map(e=>{var t;return{...e,subscription:null==e?void 0:null===(t=e.usersubscription)||void 0===t?void 0:t.plan_type}});console.log(r);let n="all"===b?r:r.filter(e=>e.subscription===b),o=""===l.trim()?n:n.filter(e=>e.username.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase()));return{...null==t?void 0:t.data,results:o}}).catch(e=>console.log("Failed to get users",e))}),handleToggleAccess=async()=>{console.log("function run");try{let e=await v.x.post("/toggle_global_mode/"),t=e.data.mode;console.log(t),w(t),console.log("value set",j)}catch(e){console.log(e)}};return(0,n.jsx)("div",{className:"px-2 md:px-10 py-10 antd-table antd-selector-for-admin",children:(0,n.jsxs)("div",{className:"pagination-line-black flex flex-col border border-gray-600 rounded-2xl min-w-[350px] overflow-x-auto",children:[(0,n.jsxs)("header",{className:"p-5 flex flex-col md:flex-row gap-3 justify-between items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col w-full md:w-1/3 text-white",children:[(0,n.jsxs)("h1",{className:"text-2xl font-bold",children:["Users ","(".concat(null==E?void 0:null===(e=E.results)||void 0===e?void 0:e.length,")")]}),(0,n.jsx)("span",{children:"Manage your users here"})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/3 flex gap-2",children:[(0,n.jsx)("span",{className:"text-xl text-white",children:"Users access"}),(0,n.jsxs)("label",{className:"inline-flex items-center justify-center cursor-pointer ",children:[(0,n.jsx)("input",{type:"checkbox",className:"sr-only peer",checked:j,onChange:handleToggleAccess}),(0,n.jsx)("div",{className:"relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row w-full md:w-1/2  gap-4 ",children:[(0,n.jsx)(d.default,{defaultValue:"Apply Filters",className:"h-full",onChange:e=>{y(e)},options:g,suffixIcon:(0,n.jsx)(a(),{src:m,alt:"filtered icon"})}),(0,n.jsx)(c.default,{size:"large",placeholder:"search...",prefix:(0,n.jsx)(i.default,{className:"mr-2"}),onChange:e=>k(e.target.value),className:"bg-transparent"})]})]}),(0,n.jsx)(f.Z,{dataSource:null==E?void 0:E.results,columns:N,loading:C,className:"rounded-lg border-t border-[#7a7a7a]",pagination:{pageSize:10,total:null==E?void 0:E.count,onChange:e=>{r(e),onPageChange(e)}}})]})})}},38891:function(e,t,r){"use strict";r.d(t,{x:function(){return o}});var n=r(92173);let o=n.Z.create({baseURL:"http://54.237.156.251:8000/api"})}},function(e){e.O(0,[986,173,77,783,266,116,896,125,939,971,472,744],function(){return e(e.s=54843)}),_N_E=e.O()}]);