(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{33584:function(e,t,s){Promise.resolve().then(s.bind(s,69855))},69855:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return page}});var a=s(57437),l=s(2265),r=s(16691),n=s.n(r),i=s(88110),c=s.n(i),d=s(68939),o=s(33116),u=s(59077),x=s(38891),p=s(28077),m={src:"/_next/static/media/edit.95ce1a24.svg",height:32,width:32,blurWidth:0,blurHeight:0},h=s(89033),f=s(33985),g=s(79404),b=s(43574),y=s(33071),j=s(45623),Modals_AddPackage=e=>{let{setIsOpen:t,isOpen:s,refetch:r,updateData:i,setUpdateData:d}=e,[p]=g.Z.useForm(),{Option:m}=j.default,h=(0,u.useMutation)({mutationKey:["create-package"],mutationFn:e=>x.x.post("/payment-plans/",e),onSuccess:()=>{o.ZP.success("Package is successfull created"),r(),p.resetFields(),t(!1)},onError:e=>{o.ZP.error("Failed to Create package"),console.log(e)}}),w=(0,u.useMutation)({mutationKey:["update-package"],mutationFn:async e=>x.x.patch("/payment-plans/".concat(i.payment_id,"/"),e).then(e=>{o.ZP.success("Package is updated created"),r(),p.resetFields(),t(!1)})});return(0,l.useEffect)(()=>{i?p.setFieldsValue(i):p.resetFields()},[i,p]),(0,a.jsx)(y.Z,{closeIcon:(0,a.jsx)(n(),{src:f.Z,alt:"small-cross-icon"}),className:"antd-selector-for-packages-dropdown",width:448,open:s,footer:null,onOk:()=>{p.resetFields(),d(null),t(!1)},onCancel:()=>{p.resetFields(),d(null),t(!1)},children:(0,a.jsxs)(g.Z,{form:p,onFinish:e=>{if(i){if(null==e?void 0:e.description){let t={description:null==e?void 0:e.description.split(",")};w.mutate(t)}else{o.ZP.error("Description is required");return}}else if(e.plan_type&&e.amount&&e.number_of_days&&e.description){let t={plan_type:e.plan_type,amount:+e.amount,number_of_days:+e.number_of_days,description:e.description.split(",")};console.log(t),h.mutate(t)}else o.ZP.error("All Field are required")},layout:"vertical",className:"flex flex-col items-center  bg-[#141414] p-5",children:[!i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{className:"text-white text-center self-start text-[22px] mt-10 pb-2 !text-xl font-bold",children:"Package Title"}),(0,a.jsx)(g.Z.Item,{className:"w-full",name:"plan_type",children:(0,a.jsxs)(j.default,{className:"packages-dropdown",defaultValue:"Free Users",style:{width:200},children:[(0,a.jsx)(m,{value:"Free Users",children:"Free Users"}),(0,a.jsx)(m,{value:"Premium Users",children:"Premium Users"}),(0,a.jsx)(m,{value:"Deluxe Users",children:"Deluxe Users"})]})}),(0,a.jsx)("label",{className:"text-white text-center self-start text-[22px] pb-2 !text-xl font-bold",children:"Package Price"}),(0,a.jsx)(g.Z.Item,{className:"w-full",name:"amount",children:(0,a.jsx)(b.default,{type:"text",placeholder:"Enter package price",required:!0,disabled:i&&!0,className:"w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl text-[18px]"})}),(0,a.jsx)("label",{className:"text-white text-center self-start text-[22px] pb-2 !text-xl font-bold",children:"Number of days"}),(0,a.jsx)(g.Z.Item,{className:"w-full",name:"number_of_days",children:(0,a.jsx)(b.default,{type:"text",placeholder:"Enter number of days",required:!0,disabled:i&&!0,className:"w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl text-[18px]"})})]}),(0,a.jsx)("label",{className:"text-white text-center self-start text-[22px] pb-2 !text-xl font-bold",children:"Description"}),(0,a.jsx)(g.Z.Item,{className:"w-full",name:"description",children:(0,a.jsx)(b.default.TextArea,{type:"text",autoSize:!1,placeholder:"Enter description (comma separated)",className:"w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl text-[18px]",required:!0})}),(0,a.jsxs)("div",{className:"flex flex-col w-full gap-y-4",children:[(0,a.jsx)(c(),{type:"tertuary",htmlType:"submit",loading:h.isLoading,className:"flex items-center justify-center bg-purple-500 w-full text-[20px] hover:!bg-white rounded-xl hover:!text-black text-white py-5",children:i?"Update Package":"Add package"}),(0,a.jsx)(c(),{type:"secondary",onClick:()=>{p.resetFields(),t(!1),d(null)},className:"cursor-pointer flex items-center justify-center w-full text-[20px] text-white !border-none",children:"Cancel"})]})]})})},page=()=>{let[e,t]=(0,l.useState)(!1),[s,r]=(0,l.useState)(null),handleDelete=(e,t)=>{e.stopPropagation(),y.mutate(t)},handleUpdate=(e,s)=>{e.stopPropagation(),r(s),t(!0)},i=[{key:"id",title:"Id",dataIndex:"payment_id",render:e=>(0,a.jsx)("span",{className:"text-white font-medium text-[18px]",children:e})},{key:"title",title:"Title",dataIndex:"plan_type",render:e=>(0,a.jsx)("span",{className:"text-white font-medium text-[18px]",children:e})},{key:"amount",title:"Amount",dataIndex:"amount",render:e=>(0,a.jsx)("span",{className:"text-white font-medium text-[18px]",children:e})},{key:"description",title:"Description",dataIndex:"description",render:e=>(0,a.jsx)("span",{className:"text-white font-medium text-[18px]",children:e})},{title:"Actions",dataIndex:"actions",key:"actions",render:(e,t)=>(0,a.jsxs)("div",{className:"flex gap-x-4 justify-start items-center",children:[(0,a.jsx)("span",{className:"font-medium text-[18px] text-[#FF7070] cursor-pointer",children:(0,a.jsx)(n(),{src:m,alt:"save-icon",width:22,height:22,onClick:e=>handleUpdate(e,t)})}),(0,a.jsx)("span",{onClick:e=>handleDelete(e,t.payment_id),className:"font-medium text-[18px] text-[#FF7070] cursor-pointer",children:(0,a.jsx)(n(),{src:h.Z,alt:"delete-icon"})})]})}],{data:f,isLoading:g,refetch:b}=(0,u.useQuery)({queryKey:["get-all-package"],queryFn:async()=>x.x.get("/payment-plans/").then(e=>{let{data:t}=e;return t}).catch(e=>console.log(e))}),y=(0,u.useMutation)({mutationKey:["delete-package"],mutationFn:e=>x.x.delete("/payment-plans/".concat(e)),onSuccess:()=>{o.ZP.success("Package Delete successfully"),b()},onError:e=>{o.ZP.error("Failed to delete pacakge"),console.log(e)}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Modals_AddPackage,{setIsOpen:t,isOpen:e,refetch:b,updateData:s,setUpdateData:r}),(0,a.jsx)("div",{className:"px-2 md:px-10 py-10 antd-table antd-selector-for-admin ",children:(0,a.jsxs)("div",{className:"flex flex-col border border-gray-600 rounded-2xl",children:[(0,a.jsxs)("header",{className:"p-5 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"text-white",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold ",children:"All Package"}),(0,a.jsx)("span",{children:"Manage your packages here"})]}),(0,a.jsx)(c(),{type:"primary",onClick:()=>t(!0),className:"bg-purple-500/20 border border-purple-600 text-purple-600 font-sans",icon:(0,a.jsx)(n(),{src:p.Z,alt:"plus-icon"}),children:"Add Package"})]}),(0,a.jsx)(d.Z,{dataSource:f,columns:i,loading:g,className:" min-w-[350px] overflow-x-auto rounded-2xl border-t border-[#7a7a7a]",pagination:!1})]})})]})}},38891:function(e,t,s){"use strict";s.d(t,{x:function(){return l}});var a=s(92173);let l=a.Z.create({baseURL:"http://54.237.156.251:8000/api"})},89033:function(e,t){"use strict";t.Z={src:"/_next/static/media/delete.f5b8a014.svg",height:20,width:18,blurWidth:0,blurHeight:0}},28077:function(e,t){"use strict";t.Z={src:"/_next/static/media/plus.a31b4988.svg",height:12,width:13,blurWidth:0,blurHeight:0}},33985:function(e,t){"use strict";t.Z={src:"/_next/static/media/small-cross.2ab7fe01.svg",height:7,width:7,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[986,173,77,783,266,116,896,125,939,71,404,971,472,744],function(){return e(e.s=33584)}),_N_E=e.O()}]);