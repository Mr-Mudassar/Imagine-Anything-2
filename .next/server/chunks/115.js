exports.id=115,exports.ids=[115],exports.modules={8934:(e,s,t)=>{Promise.resolve().then(t.bind(t,59454))},59454:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>components_AdminLayout});var a=t(30784),l=t(9885),i=t(52451),r=t.n(i),n=t(11440),c=t.n(n),d=t(79636),o=t.n(d),x=t(81216),u=t(51377),m=t(72442),A=t(34791),h=t(79595);let g={src:"/_next/static/media/cartoon1.100a68da.png",height:450,width:392,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AQA1V/mWQQEG8ejWAHmi2QBPPQoABgEbAA0WJPoBFjdT/5BHBQDh2MsA28PuANns/gDF+/EAPUBNAAEtN0//a0MMAEg2GQDRzN8AtJawAA5EOQATFx8AAXVgUv8pIxkATkAYANrO1gCbfqcAXIxyAPL3+gABKgAf/2FzQQBMNg0A5N/iAEV4sQCGZEQA5+4JAAGdimb/PzAWANbAwwAPDA8ArqfJAKjT6QBNPCUAAdekYf/k5vgAwayxAEA8MADh6vYAmq/gAPQF+wABkE8V+ScLEAbjBQQANSb2ANXSAQC7zfcAutzy+kQGWvkuP9I9AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8};var f=t(64677),b=t(57114);let p={src:"/_next/static/media/imagine-logo.27895f7f.svg",height:53,width:56,blurWidth:0,blurHeight:0};var j=t(31065);let N=[{label:a.jsx("span",{className:" text-xl font-semibold text-white px-3",children:"Images / Categories"}),key:"/image-and-categories"},{label:a.jsx("span",{className:" text-xl font-semibold text-white px-3",children:"Users / Subscribed Users"}),key:"/users-and-subscribed"},{label:a.jsx("span",{className:" text-xl font-semibold text-white px-3",children:"Packages"}),key:"/packages"}],activeRoute=e=>{switch(e){case"image-and-categories":return"/image-and-categories";case"users-and-subscribed":return"/users-and-subscribed";case"packages":return"/packages";default:return}};function AdminNav(){let[e,s]=(0,l.useState)(!1),[t,i]=(0,l.useState)(!1),n=(0,b.useRouter)(),c=(0,b.usePathname)(),d=c?.split("/")[2],[o,x]=(0,l.useState)(!1);return(0,a.jsxs)("div",{className:`hidden lg:flex flex-col fixed transition-all duration-500 h-screen !border-r ${o?"w-[81px]":"w-[254px]"} portal-sidebar `,children:[o?a.jsx("div",{className:"flex items-center h-24",children:a.jsx(r(),{src:p,alt:"imagin-anything-logo"})}):a.jsx("div",{className:"flex flex-col gap-y-2 items-center justify-center h-32",children:a.jsx(r(),{src:f.Z,alt:"imagin-anything-logo"})}),a.jsx(j.default,{className:"",onClick:({key:e})=>{n.push(e)},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",inlineCollapsed:o,items:N,selectedKeys:activeRoute(d)})]})}var v=t(23458);let y=[{label:"Images / Categories",key:"/image-and-categories"},{label:"Users / Subscribed Users",key:"/users-and-subscribed"},{label:"Packages",key:"/packages"}],components_AdminLayout=({children:e})=>{let s=(0,v.o)(e=>e.userData),t=(0,v.o)(e=>e.setUserData),[i,n]=(0,l.useState)(!1),[d,p]=(0,l.useState)(!1),j=(0,b.useRouter)(),N=(0,b.usePathname)(),k=[{label:a.jsx("span",{className:" text-xl",onClick:()=>{t(void 0),j.push("/admin/login")},children:"Logout"}),key:"2"}];return a.jsx("div",{className:"flex flex-row relative min-h-screen  text-white",children:(0,a.jsxs)(A.default,{theme:{token:{fontFamily:"alumni-regular"}},children:[a.jsx(AdminNav,{}),a.jsx("div",{className:"",children:a.jsx(x.Z,{width:280,closeIcon:a.jsx(r(),{src:f.Z,alt:"imagin-anything-logo"}),className:"!bg-[#141414]",placement:"left",onClose:()=>{p(!1)},open:d,children:a.jsx("div",{className:"relative flex flex-col gap-y-2 w-[220px] text-base md:text-2xl",children:y?.map(e=>a.jsx(c(),{className:`py-1 px-2 w-full text-white ${N==e?.key?"mr-2 bg-purple-600 before:content-[''] before:h-7 before:w-1 before:bg-purple-400 before:absolute before:left-0":""}`,href:e?.key,children:e?.label},e.key))})})}),a.jsx("div",{className:"flex flex-col w-full lg:!ml-[254px]",children:(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{onClick:()=>n(!i),className:"relative cursor-pointer w-full flex items-center gap-x-6 justify-end px-10 py-3 border-b border-gray-600",children:[a.jsx(u.default,{className:"h-[50px]",menu:{items:k,onClick:e=>{console.log("click",e)}},children:a.jsx(o(),{children:a.jsx(m.default,{className:"flex items-center gap-x-4 ",children:a.jsx("div",{onClick:()=>n(!i),className:"relative cursor-pointer w-full flex items-end justify-end",children:(0,a.jsxs)("div",{className:"flex items-center gap-x-4",children:[a.jsx(r(),{className:"rounded-full w-10 h-10",src:g,alt:"user picture"}),(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[a.jsx("span",{className:"font-bold text-white text-lg",children:s?.email}),a.jsx("span",{className:"text-xl text-[#9926f8] font-bold -mt-2",children:s?.username})]})]})})})})}),a.jsx("span",{className:"block lg:hidden",onClick:()=>p(!d),children:a.jsx(r(),{src:h.Z,alt:"hamburger-icon"})})]}),e]})})]})})}},42430:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>layout});var a=t(4656);t(3542);var l=t(95153);let i=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\imagin for personal\src\components\AdminLayout.tsx`),{__esModule:r,$$typeof:n}=i,c=i.default,layout=({children:e})=>a.jsx("div",{children:a.jsx(c,{children:e})})},79595:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});let a={src:"/_next/static/media/hamberger.a5daf8e2.svg",height:24,width:27,blurWidth:0,blurHeight:0}},64677:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});let a={src:"/_next/static/media/logo-primary.f8408658.svg",height:37,width:153,blurWidth:0,blurHeight:0}}};