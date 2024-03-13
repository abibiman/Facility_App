"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[3307],{53307:function(e,n,r){r.d(n,{ZL:function(){return _e},HR:function(){return Fe},Cd:function(){return me}});var t=r(4942),o=r(1413),s=r(74165),i=r(15861),a=r(29439),l=r(93433),c=r(72791),d=r(57621),u=r(79836),x=r(5849),p=r(20068),h=r(89164),m=r(53382),Z=r(13400),g=r(39281),j=r(38072),f=r(19208),y=r(57062),b=r(9145),v=r(22459),w=r(80160),C=r(40268),D=r(47974),S=r(3352),k=r(60720),P=r(50933),R=r(1382),A=r(64554),O=r(94721),I=r(82626),F=r(9195),T=r(68745),B=r(49900),W=r(52115),U=r(27938),L=r(36314),N=r(4567),M=r(5574),_=r(65661),E=r(97123),Q=r(39157),z=r(2102),H=r(16386),q=r(80184);function V(e){var n=e.row,r=e.openDialogBox,t=e.setOpenDialogBox,o=e.setOpenAppointmentBox,s=n.dateOrdered,i=n.labOrderId,a=n.appointmentDate,l=(n.providerContact,n.patientContact,n.providerName,n.labItems);new Date(s).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"});return console.log(n),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(M.Z,{open:r,onClose:function(){return t(!1)},sx:{"& .MuiDialog-paper":{width:"50%",maxWidth:"none",maxHeight:"90vh"}},children:[(0,q.jsx)(_.Z,{align:"center",children:(0,q.jsx)(B.Z,{primary:i,secondary:"General Laboratory Request Form",primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,q.jsx)(Q.Z,{children:(0,q.jsxs)(L.Z,{spacing:2,component:U.Z,variant:"outlined",sx:{p:2.5,minWidth:300,flexShrink:0,borderRadius:5,typography:"body1",borderStyle:"dashed"},children:[(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Patient Name"}),n.patientName]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Patient Phone Number"}),null===n||void 0===n?void 0:n.patientContact.phoneNumber]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Patient Email"}),null===n||void 0===n?void 0:n.patientContact.email]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Category and Test Type"}),l.map((function(e,n){return(0,q.jsxs)(N.Z,{children:[(0,q.jsx)(w.Z,{color:"success",children:e.category})," -"," ",(0,q.jsx)(w.Z,{color:"default",children:e.test})]},n)}))]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Provider Name"}),n.providerName]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Provider Phone Number"}),null===n||void 0===n?void 0:n.providerContact.phoneNumber]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Provider Email"}),null===n||void 0===n?void 0:n.providerContact.email]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Appointment Date"}),(0,H.Z)(new Date(a),"dd/MM/yyyy")]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Priority"}),n.priority]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Fee Paid"}),n.feeAmount]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed",my:1,borderColor:"primary.main"}}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Message"}),n.description]})]})}),(0,q.jsxs)(E.Z,{children:[(0,q.jsx)(x.Z,{onClick:function(){return o(!0)},variant:"outlined",color:"inherit",children:"pending"===n.status?"Schedule":"Reschedule"}),(0,q.jsx)(x.Z,{onClick:function(){return t(!1)},variant:"outlined",color:"inherit",children:"Cancel"})]})]})})}var G=r(48550),K=r(12258);function $(e){var n=e.row,r=e.onDeleteRow,t=e.fetchAllOrders,d=e.setOpenAppointmentBox,u=e.openAppointmentBox,p=n.id,h=n.labOrderId,m=n.labItems,Z=(0,v.k)();console.log(n);var g=(0,c.useState)(""),j=(0,a.Z)(g,2),f=j[0],y=j[1],b=(0,c.useState)(""),w=(0,a.Z)(b,2),C=w[0],D=w[1],k=(0,c.useState)(""),P=(0,a.Z)(k,2),R=(P[0],P[1],(0,c.useState)(m.map((function(e){return{listID:e._id,cost:e.cost||0}})))),A=(0,a.Z)(R,2),O=A[0],I=A[1];console.log(O);var F=(0,c.useState)(!1),T=(0,a.Z)(F,2),B=T[0],W=T[1],U=function(){return d(!1)},L=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),n={appointmentDate:f,appointmentTime:f,labItems:O,labOrderId:h},console.log(n),e.prev=3,e.next=6,z.Z.patch("/medical-labs/facility/approve/".concat(p),n);case 6:e.sent&&t(),W(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),W(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(M.Z,{open:u,onClose:U,sx:{"& .MuiDialog-paper":{width:"40%",maxWidth:"none"}},children:[(0,q.jsx)(_.Z,{align:"center",children:"Set Appointment"}),(0,q.jsxs)(Q.Z,{children:[(0,q.jsx)(N.Z,{sx:{mb:3},children:"Please fill the form below"}),(0,q.jsx)(G.Z,{autoFocus:!0,fullWidth:!0,type:"date",margin:"dense",variant:"outlined",value:f,onChange:function(e){return y(e.target.value)}}),(0,q.jsx)(G.Z,{autoFocus:!0,fullWidth:!0,type:"time",margin:"dense",variant:"outlined",value:C,onChange:function(e){return D(e.target.value)}}),m.map((function(e,n){return(0,q.jsx)(G.Z,{fullWidth:!0,type:"number",margin:"dense",variant:"outlined",label:"Cost for ".concat(e.category," - ").concat(e.test),value:0===O[n].cost?"":O[n].cost||"",onChange:function(e){return I((function(r){var t=(0,l.Z)(r);return t[n]=(0,o.Z)((0,o.Z)({},t[n]),{},{cost:parseFloat(e.target.value)||0}),t}))}},e._id)}))]}),(0,q.jsxs)(E.Z,{children:[(0,q.jsx)(x.Z,{onClick:U,variant:"outlined",color:"inherit",children:"Cancel"}),(0,q.jsx)(K.Z,{onClick:function(){return L()},variant:"contained",loading:B,children:"Book Appointment"})]})]}),(0,q.jsx)(S.Q,{open:Z.value,onClose:Z.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,q.jsx)(x.Z,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})}var Y=r(24233),J=r(58518);r(9546);function X(e){var n=e.row,r=(e.onDeleteRow,e.fetchAllOrders,e.setOpenAppointmentBox,e.openAppointmentBox,e.openUploadBox),t=e.handleClose,o=e.currentTest._id,d=e.setCompletedTests,u=e.setDownloadURL,p=((0,v.k)(),(0,c.useState)("")),h=(0,a.Z)(p,2),m=(h[0],h[1],n.labOrderId);console.log(n);var Z=(0,c.useState)([]),g=(0,a.Z)(Z,2),j=g[0],f=g[1],y=(0,c.useState)(null),b=(0,a.Z)(y,2),w=(b[0],b[1]),C=(0,c.useState)(null),D=(0,a.Z)(C,2),S=(D[0],D[1]),k=(0,c.useState)(null),P=(0,a.Z)(k,2),R=(P[0],P[1],(0,c.useState)(!1)),A=(0,a.Z)(R,2),O=A[0],I=A[1],F=(0,v.k)(),T=((0,c.useCallback)((function(e){var n=e[0];n&&w(Object.assign(n,{preview:URL.createObjectURL(n)}))}),[]),(0,c.useCallback)((function(e){var n=e[0];n&&S(Object.assign(n,{preview:URL.createObjectURL(n)}))}),[]),(0,c.useCallback)((function(e){if(e.length>0&&0===j.length){var n=e[0];f([Object.assign(n,{preview:URL.createObjectURL(n)})])}}),[j]));console.log(j);var B=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n,r,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.prev=1,n=new FormData,r=j[0],n.append("image",r),u((function(e){return[].concat((0,l.Z)(e),[{_id:o,singleFile:r}])})),n.append("labOrderId",m.trim()),console.log(n.get("image")),e.next=10,z.Z.patch("/medical-labs/facility/result/upload/".concat(o),n);case 10:i=e.sent,d((function(e){return[].concat((0,l.Z)(e),[o])})),t(),f([]),console.log(i),(0,J.yv)("Upload successful!"),I(!1),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),console.error(e.t0),I(!1);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}();return console.log(j),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(M.Z,{open:r,onClose:t,sx:{"& .MuiDialog-paper":{maxWidth:"500px"}},children:[(0,q.jsx)(_.Z,{align:"center",children:"Upload Results"}),(0,q.jsx)(Q.Z,{children:(0,q.jsx)(Y.gq,{multiple:!0,thumbnail:F.value,files:j,onDrop:T,onRemove:function(e){var n=j.filter((function(n){return n!==e}));f(n)},disabled:j.length>0})}),(0,q.jsxs)(E.Z,{children:[(0,q.jsx)(x.Z,{onClick:t,variant:"outlined",color:"inherit",children:"Discard"}),(0,q.jsx)(K.Z,{onClick:B,variant:"contained",loading:O,disabled:0===j.length,children:"Upload"})]})]})})}function ee(e){var n=e.row,r=e.onDeleteRow,t=e.fetchAllOrders,o=e.handleClose,l=e.openUploadList,d=(n.id,n.labOrderId),u=n.labItems,p=(0,v.k)();console.log(n);var h=(0,c.useState)(!1),m=(0,a.Z)(h,2),Z=(m[0],m[1],(0,c.useState)(!1)),g=(0,a.Z)(Z,2),j=g[0],f=g[1],y=(0,c.useState)({}),b=(0,a.Z)(y,2),w=b[0],C=b[1],D=(0,c.useState)(!1),k=(0,a.Z)(D,2),P=k[0],R=k[1],A=(0,c.useState)([]),O=(0,a.Z)(A,2),I=O[0],F=O[1],T=(0,c.useState)([]),W=(0,a.Z)(T,2),U=W[0],N=W[1],H=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,z.Z.patch("/medical-labs/facility/result/complete/".concat(d));case 4:(n=e.sent)&&t(),R(!1),console.log(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),R(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return console.log(w),console.log(I),console.log(U),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(M.Z,{open:l,onClose:o,sx:{"& .MuiDialog-paper":{width:"500px",maxWidth:"none"},"@media (max-width: 500px )":{width:"100%"}},children:[(0,q.jsx)(_.Z,{align:"center",children:"Upload Lab Results"}),(0,q.jsx)(Q.Z,{children:u.map((function(e){return(0,q.jsxs)(L.Z,{flexDirection:"row",sx:{margin:"25px 0"},children:[(0,q.jsx)(B.Z,{primary:e.category,secondary:e.test,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}}),I.includes(e._id)?(0,q.jsx)(x.Z,{variant:"outlined",color:"primary",onClick:function(){return function(e){var n=U.find((function(n){return n._id===e}));n?window.open(n.singleFile.preview,"_blank"):console.error("File not found for lab item with id: ".concat(e))}(e._id)},children:"Preview"}):(0,q.jsx)(x.Z,{variant:"outlined",color:"primary",onClick:function(){f(!0),C(e)},children:"Upload Result"})]},e.id)}))}),(0,q.jsxs)(E.Z,{children:[(0,q.jsx)(x.Z,{onClick:o,variant:"outlined",color:"inherit",children:"Close"}),(0,q.jsx)(K.Z,{onClick:function(){return H()},variant:"contained",loading:P,children:"Mark as Complete"})]})]}),(0,q.jsx)(S.Q,{open:p.value,onClose:p.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,q.jsx)(x.Z,{variant:"contained",color:"error",onClick:r,children:"Delete"})}),(0,q.jsx)(X,{row:n,currentTest:w,openUploadBox:j,handleClose:function(){return f(!1)},setCompletedTests:F,setDownloadURL:N})]})}function ne(e){var n=e.row,r=e.selected,t=e.onViewRow,o=(e.onSelectRow,e.onDeleteRow),s=(e.fetchAllOrders,n.orderType,n.priority),i=n.status,l=n.patientName,d=(n.id,n.labItems),u=(n.dateOrdered,n.appointmentDate),p=n.labOrderId,h=(0,v.k)(),m=(0,W.S)(),g=(0,c.useState)(!1),j=(0,a.Z)(g,2),f=j[0],y=j[1],b=(0,c.useState)(!1),D=(0,a.Z)(b,2),k=(D[0],D[1],(0,c.useState)(!1)),P=(0,a.Z)(k,2),R=(P[0],P[1]),U=(0,c.useState)(!1),L=(0,a.Z)(U,2),N=L[0],M=L[1],_=(0,c.useState)(!1),E=(0,a.Z)(_,2),Q=E[0],z=E[1],G=(0,c.useState)(!1),K=(0,a.Z)(G,2);K[0],K[1];console.log(n);var Y=(0,q.jsxs)(F.Z,{hover:!0,selected:r,children:[(0,q.jsx)(T.Z,{children:(0,q.jsx)(A.Z,{onClick:t,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"".concat(p)})}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(B.Z,{primary:l,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(B.Z,{primary:(0,H.Z)(new Date(u),"dd/MM/yyyy"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,q.jsxs)(T.Z,{align:"center",children:[" ",d.map((function(e){return e.category})).join(", ")," "]}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(w.Z,{variant:"soft",color:("approved"===i?"success":"pending"===i&&"warning")||"default",children:i})}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(w.Z,{variant:"soft",color:("regular"===s?"success":"urgent"===s&&"warning")||"emergency"===s&&"error"||"default",children:s})}),(0,q.jsx)(T.Z,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:(0,q.jsx)(Z.Z,{color:m.open?"inherit":"default",onClick:m.onOpen,children:(0,q.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})})]});return(0,q.jsxs)(q.Fragment,{children:[Y,(0,q.jsxs)(W.Z,{open:m.open,onClose:m.onClose,arrow:"right-top",sx:{maxWidth:200},children:[(0,q.jsxs)(I.Z,{onClick:function(){y(!0),m.onClose()},children:[(0,q.jsx)(C.Z,{icon:"solar:eye-bold"}),"View"]}),(0,q.jsxs)(I.Z,{onClick:function(){M(!0),m.onClose()},children:[(0,q.jsx)(C.Z,{icon:"material-symbols-light:upload-sharp"}),"Upload Results"]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed"}}),(0,q.jsxs)(I.Z,{onClick:function(){alert("Cancel Order")},children:[(0,q.jsx)(C.Z,{icon:"flat-color-icons:cancel"}),"Cancel"]})]}),(0,q.jsx)(V,{row:n,openDialogBox:f,setOpenDialogBox:y,setOpenAppointmentBox:z}),(0,q.jsx)($,{openAppointmentBox:Q,setOpenAppointmentBox:z,row:n}),(0,q.jsx)(ee,{openUploadList:N,handleClose:function(){return M(!1)},setOpenUploadBox:R,row:n}),(0,q.jsx)(S.Q,{open:h.value,onClose:h.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,q.jsx)(x.Z,{variant:"contained",color:"error",onClick:o,children:"Delete"})})]})}var re=r(53106),te=r(63466);function oe(e){var n=e.filters,r=e.onFilters,t=e.canReset,o=e.onResetFilters,s=(0,W.S)(),i=(0,c.useCallback)((function(e){r("orderType",e.target.value)}),[r]),a=(0,c.useCallback)((function(e){r("startDate",e)}),[r]),l=(0,c.useCallback)((function(e){r("endDate",e)}),[r]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(L.Z,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,q.jsx)(re.M,{label:"Start date",value:n.startDate,onChange:a,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),(0,q.jsx)(re.M,{label:"End date",value:n.endDate,onChange:l,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[(0,q.jsx)(G.Z,{fullWidth:!0,value:n.orderType,onChange:i,placeholder:"Search by order type...",InputProps:{startAdornment:(0,q.jsx)(te.Z,{position:"start",children:(0,q.jsx)(C.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),(0,q.jsx)(Z.Z,{onClick:s.onOpen,children:(0,q.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})]}),t&&(0,q.jsx)(x.Z,{color:"error",sx:{flexShrink:0},onClick:o,startIcon:(0,q.jsx)(C.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),(0,q.jsxs)(W.Z,{open:s.open,onClose:s.onClose,arrow:"right-top",sx:{width:140},children:[(0,q.jsxs)(I.Z,{onClick:function(){s.onClose()},children:[(0,q.jsx)(C.Z,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,q.jsxs)(I.Z,{onClick:function(){s.onClose()},children:[(0,q.jsx)(C.Z,{icon:"solar:export-bold"}),"Export"]})]})]})}var se=r(45987),ie=r(85771),ae=r(25265),le=["filters","onFilters","onResetFilters","results"],ce=["label","children","sx"];function de(e){var n=e.filters,r=e.onFilters,t=e.onResetFilters,s=e.results,i=(0,se.Z)(e,le),a=(0,ae.l2)(n.startDate,n.endDate);return(0,q.jsxs)(L.Z,(0,o.Z)((0,o.Z)({spacing:1.5},i),{},{children:[(0,q.jsxs)(A.Z,{sx:{typography:"body2"},children:[(0,q.jsx)("strong",{children:s}),(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,q.jsxs)(L.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:["all"!==n.status&&(0,q.jsx)(ue,{label:"Status:",children:(0,q.jsx)(ie.Z,{size:"small",label:n.status,onDelete:function(){r("status","all")}})}),n.startDate&&n.endDate&&(0,q.jsx)(ue,{label:"Date:",children:(0,q.jsx)(ie.Z,{size:"small",label:a,onDelete:function(){r("startDate",null),r("endDate",null)}})}),(0,q.jsx)(x.Z,{color:"error",onClick:t,startIcon:(0,q.jsx)(C.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]}))}function ue(e){var n=e.label,r=e.children,t=e.sx,s=(0,se.Z)(e,ce);return(0,q.jsxs)(L.Z,(0,o.Z)((0,o.Z)({component:U.Z,variant:"outlined",spacing:1,direction:"row",sx:(0,o.Z)({p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed"},t)},s),{},{children:[(0,q.jsx)(A.Z,{component:"span",sx:{typography:"subtitle2"},children:n}),(0,q.jsx)(L.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:r})]}))}var xe=r(8976),pe=([{value:"all",label:"All"}].concat((0,l.Z)(y.s8)),[{id:"orderNumber",label:"Appointment ID",width:110},{id:"name",label:"Patient",width:140},{id:"createdAt",label:"Date",width:120},{id:"totalQuantity",label:"Order Type",width:200,align:"center"},{id:"totalAmount",label:"Status",width:110},{id:"status",label:"Priority",width:110},{id:"",width:88}]),he={name:"",status:"all",startDate:null,endDate:null,orderType:"",labOrderId:""};function me(){var e=(0,R.x6)({defaultOrderBy:"orderNumber"}),n=(0,k.K$)(),r=(0,f.tv)(),l=(0,v.k)(),y=(0,c.useState)([]),w=(0,a.Z)(y,2),A=w[0],O=w[1],I=(0,c.useState)(he),F=(0,a.Z)(I,2),T=F[0],B=F[1],W=(0,xe.E)().user,U=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.Z.get("/medical-labs/facility/approved/".concat(null===W||void 0===W?void 0:W.facilityID));case 3:n=e.sent,r=n.data,O(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();console.log(A),(0,c.useEffect)((function(){U()}),[]);var L=!(!T.startDate||!T.endDate)&&T.startDate.getTime()>T.endDate.getTime(),N=function(e){var n=e.inputData,r=e.comparator,t=e.filters,o=e.dateError,s=t.status,i=(t.name,t.startDate),a=t.endDate,l=t.orderType,c=(t.labOrderId,n.map((function(e,n){return[e,n]})));c.sort((function(e,n){var t=r(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),n=c.map((function(e){return e[0]})),l&&(n=n.filter((function(e){return-1!==e.orderType.toLowerCase().indexOf(l.toLowerCase())})));"all"!==s&&(n=n.filter((function(e){return e.status===s})));o||i&&a&&(n=n.filter((function(e){return(0,b.IO)(e.createdAt)>=(0,b.IO)(i)&&(0,b.IO)(e.createdAt)<=(0,b.IO)(a)})));return n}({inputData:A,comparator:(0,R.sQ)(e.order,e.orderBy),filters:T,dateError:L}),M=N.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),_=e.dense?52:72,E=!!T.name||"all"!==T.status||!!T.startDate&&!!T.endDate,Q=!N.length&&E||!N.length,H=(0,c.useCallback)((function(n,r){e.onResetPage(),B((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,t.Z)({},n,r))}))}),[e]),V=(0,c.useCallback)((function(n){var r=A.filter((function(e){return e.id!==n}));O(r),e.onUpdatePageDeleteRow(M.length)}),[M.length,e,A]),G=(0,c.useCallback)((function(){var n=A.filter((function(n){return!e.selected.includes(n.id)}));O(n),e.onUpdatePageDeleteRows({totalRows:A.length,totalRowsInPage:M.length,totalRowsFiltered:N.length})}),[N.length,M.length,e,A]),K=(0,c.useCallback)((function(){B(he)}),[]),$=(0,c.useCallback)((function(e){r.push(j.H.dashboard.order.details(e))}),[r]);(0,c.useCallback)((function(e,n){H("status",n)}),[H]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(h.Z,{maxWidth:!n.themeStretch&&"lg",children:[(0,q.jsx)(P.Z,{heading:"All Appointments",links:[{name:"Dashboard",href:j.H.dashboard.root},{name:"Appointments",href:j.H.dashboard.order.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),(0,q.jsxs)(d.Z,{children:[(0,q.jsx)(oe,{filters:T,onFilters:H,canReset:E,onResetFilters:K}),E&&(0,q.jsx)(de,{filters:T,onFilters:H,onResetFilters:K,results:N.length,sx:{p:2.5,pt:0}}),(0,q.jsxs)(g.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,q.jsx)(R.Z4,{dense:e.dense,numSelected:e.selected.length,rowCount:A.length,onSelectAllRows:function(n){return e.onSelectAllRows(n,A.map((function(e){return e.id})))},action:(0,q.jsx)(p.Z,{title:"Delete",children:(0,q.jsx)(Z.Z,{color:"primary",onClick:l.onTrue,children:(0,q.jsx)(C.Z,{icon:"solar:trash-bin-trash-bold"})})})}),(0,q.jsx)(D.Z,{children:(0,q.jsxs)(u.Z,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[(0,q.jsx)(R.K,{order:e.order,orderBy:e.orderBy,headLabel:pe,rowCount:A.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:function(n){return e.onSelectAllRows(n,A.map((function(e){return e.id})))}}),(0,q.jsxs)(m.Z,{children:[N.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((function(n){return(0,q.jsx)(ne,{row:n,selected:e.selected.includes(n.id),onSelectRow:function(){return e.onSelectRow(n.id)},onDeleteRow:function(){return V(n.id)},onViewRow:function(){return $(n.id)},fetchAllOrders:U},n.id)})),(0,q.jsx)(R.$W,{height:_,emptyRows:(0,R.fQ)(e.page,e.rowsPerPage,A.length)}),(0,q.jsx)(R.et,{notFound:Q})]})]})})]}),(0,q.jsx)(R.S_,{count:N.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),(0,q.jsx)(S.Q,{open:l.value,onClose:l.onFalse,title:"Delete",content:(0,q.jsxs)(q.Fragment,{children:["Are you sure want to delete"," ",(0,q.jsxs)("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:(0,q.jsx)(x.Z,{variant:"contained",color:"error",onClick:function(){G(),l.onFalse()},children:"Delete"})})]})}var Ze=r(24308),ge=r(50533),je=r(60220),fe=r(9585);function ye(e){var n=e.customer,r=e.delivery,t=e.payment,o=e.shippingAddress,s=(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fe.Z,{title:"Customer Info",action:(0,q.jsx)(Z.Z,{children:(0,q.jsx)(C.Z,{icon:"solar:pen-bold"})})}),(0,q.jsxs)(L.Z,{direction:"row",sx:{p:3},children:[(0,q.jsx)(je.Z,{alt:n.name,src:n.avatarUrl,sx:{width:48,height:48,mr:2}}),(0,q.jsxs)(L.Z,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[(0,q.jsx)(N.Z,{variant:"subtitle2",children:n.name}),(0,q.jsx)(A.Z,{sx:{color:"text.secondary"},children:n.email}),(0,q.jsxs)(A.Z,{children:["IP Address:",(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:n.ipAddress})]}),(0,q.jsx)(x.Z,{size:"small",color:"error",startIcon:(0,q.jsx)(C.Z,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),i=(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fe.Z,{title:"Delivery",action:(0,q.jsx)(Z.Z,{children:(0,q.jsx)(C.Z,{icon:"solar:pen-bold"})})}),(0,q.jsxs)(L.Z,{spacing:1.5,sx:{p:3,typography:"body2"},children:[(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),r.shipBy]}),(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),r.speedy]}),(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),(0,q.jsx)(ge.Z,{underline:"always",color:"inherit",children:r.trackingNumber})]})]})]}),a=(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fe.Z,{title:"Shipping",action:(0,q.jsx)(Z.Z,{children:(0,q.jsx)(C.Z,{icon:"solar:pen-bold"})})}),(0,q.jsxs)(L.Z,{spacing:1.5,sx:{p:3,typography:"body2"},children:[(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),o.fullAddress]}),(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",children:[(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),o.phoneNumber]})]})]}),l=(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fe.Z,{title:"Payment",action:(0,q.jsx)(Z.Z,{children:(0,q.jsx)(C.Z,{icon:"solar:pen-bold"})})}),(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[(0,q.jsx)(A.Z,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),t.cardNumber,(0,q.jsx)(C.Z,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return(0,q.jsxs)(d.Z,{children:[s,(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed"}}),i,(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed"}}),a,(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed"}}),l]})}var be=r(17070);function ve(e){var n=e.items,r=e.shipping,t=e.discount,s=e.taxes,i=e.subTotal,a=e.totalAmount,l=(0,q.jsxs)(L.Z,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[(0,q.jsxs)(L.Z,{direction:"row",children:[(0,q.jsx)(A.Z,{sx:{color:"text.secondary"},children:"Subtotal"}),(0,q.jsx)(A.Z,{sx:{width:160,typography:"subtitle2"},children:(0,be.e_)(i)||"-"})]}),(0,q.jsxs)(L.Z,{direction:"row",children:[(0,q.jsx)(A.Z,{sx:{color:"text.secondary"},children:"Shipping"}),(0,q.jsx)(A.Z,{sx:(0,o.Z)({width:160},r&&{color:"error.main"}),children:r?"- ".concat((0,be.e_)(r)):"-"})]}),(0,q.jsxs)(L.Z,{direction:"row",children:[(0,q.jsx)(A.Z,{sx:{color:"text.secondary"},children:"Discount"}),(0,q.jsx)(A.Z,{sx:(0,o.Z)({width:160},t&&{color:"error.main"}),children:t?"- ".concat((0,be.e_)(t)):"-"})]}),(0,q.jsxs)(L.Z,{direction:"row",children:[(0,q.jsx)(A.Z,{sx:{color:"text.secondary"},children:"Taxes"}),(0,q.jsx)(A.Z,{sx:{width:160},children:s?(0,be.e_)(s):"-"})]}),(0,q.jsxs)(L.Z,{direction:"row",sx:{typography:"subtitle1"},children:[(0,q.jsx)(A.Z,{children:"Total"}),(0,q.jsx)(A.Z,{sx:{width:160},children:(0,be.e_)(a)||"-"})]})]});return(0,q.jsxs)(d.Z,{children:[(0,q.jsx)(fe.Z,{title:"Details"}),(0,q.jsxs)(L.Z,{sx:{px:3},children:[(0,q.jsx)(D.Z,{children:n.map((function(e){return(0,q.jsxs)(L.Z,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:function(e){return"dashed 2px ".concat(e.palette.background.neutral)}},children:[(0,q.jsx)(je.Z,{src:e.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),(0,q.jsx)(B.Z,{primary:e.name,secondary:e.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),(0,q.jsxs)(A.Z,{sx:{typography:"body2"},children:["x",e.quantity]}),(0,q.jsx)(A.Z,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:(0,be.e_)(e.price)})]},e.id)}))}),l]})]})}var we=r(83854);function Ce(e){var n=e.status,r=e.backLink,t=e.createdAt,o=e.orderNumber,s=e.statusOptions,i=e.onChangeStatus,a=(0,W.S)();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(L.Z,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[(0,q.jsxs)(L.Z,{spacing:1,direction:"row",alignItems:"flex-start",children:[(0,q.jsx)(Z.Z,{component:we.r,href:r,children:(0,q.jsx)(C.Z,{icon:"eva:arrow-ios-back-fill"})}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsxs)(L.Z,{spacing:1,direction:"row",alignItems:"center",children:[(0,q.jsxs)(N.Z,{variant:"h4",children:[" Order ",o," "]}),(0,q.jsx)(w.Z,{variant:"soft",color:("completed"===n?"success":"pending"===n&&"warning")||"cancelled"===n&&"error"||"default",children:n})]}),(0,q.jsx)(N.Z,{variant:"body2",sx:{color:"text.disabled"},children:(0,b.zM)(t)})]})]}),(0,q.jsxs)(L.Z,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(0,q.jsx)(x.Z,{color:"inherit",variant:"outlined",endIcon:(0,q.jsx)(C.Z,{icon:"eva:arrow-ios-downward-fill"}),onClick:a.onOpen,sx:{textTransform:"capitalize"},children:n}),(0,q.jsx)(x.Z,{color:"inherit",variant:"outlined",startIcon:(0,q.jsx)(C.Z,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),(0,q.jsx)(x.Z,{color:"inherit",variant:"contained",startIcon:(0,q.jsx)(C.Z,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),(0,q.jsx)(W.Z,{open:a.open,onClose:a.onClose,arrow:"top-right",sx:{width:140},children:s.map((function(e){return(0,q.jsx)(I.Z,{selected:e.value===n,onClick:function(){a.onClose(),i(e.value)},children:e.label},e.value)}))})]})}var De=r(36562),Se=r(35651),ke=r(27454),Pe=r(28666),Re=r(65552),Ae=r(21658),Oe=r(23454);function Ie(e){var n=e.history,r=(0,q.jsxs)(L.Z,{spacing:2,component:U.Z,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Order time"}),(0,b.zM)(n.orderTime)]}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Payment time"}),(0,b.zM)(n.orderTime)]}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),(0,b.zM)(n.orderTime)]}),(0,q.jsxs)(L.Z,{spacing:.5,children:[(0,q.jsx)(A.Z,{sx:{color:"text.disabled"},children:"Completion time"}),(0,b.zM)(n.orderTime)]})]}),o=(0,q.jsx)(De.Z,{sx:(0,t.Z)({p:0,m:0},"& .".concat(Ae.Z.root,":before"),{flex:0,padding:0}),children:n.timeline.map((function(e,r){var t=0===r,o=r===n.timeline.length-1;return(0,q.jsxs)(Oe.Z,{children:[(0,q.jsxs)(Pe.Z,{children:[(0,q.jsx)(Se.Z,{color:t?"primary":"grey"}),o?null:(0,q.jsx)(Re.Z,{})]}),(0,q.jsxs)(ke.Z,{children:[(0,q.jsx)(N.Z,{variant:"subtitle2",children:e.title}),(0,q.jsx)(A.Z,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:(0,b.zM)(e.time)})]})]},e.title)}))});return(0,q.jsxs)(d.Z,{children:[(0,q.jsx)(fe.Z,{title:"History"}),(0,q.jsxs)(L.Z,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[o,r]})]})}function Fe(e){var n=e.id,r=(0,k.K$)(),t=y._Q.filter((function(e){return e.id===n}))[0],o=(0,c.useState)(t.status),s=(0,a.Z)(o,2),i=s[0],l=s[1],d=(0,c.useCallback)((function(e){l(e)}),[]);return(0,q.jsxs)(h.Z,{maxWidth:!r.themeStretch&&"lg",children:[(0,q.jsx)(Ce,{backLink:j.H.dashboard.order.root,orderNumber:t.orderNumber,createdAt:t.createdAt,status:i,onChangeStatus:d,statusOptions:y.s8}),(0,q.jsxs)(Ze.Z,{container:!0,spacing:3,children:[(0,q.jsx)(Ze.Z,{xs:12,md:8,children:(0,q.jsxs)(L.Z,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[(0,q.jsx)(ve,{items:t.items,taxes:t.taxes,shipping:t.shipping,discount:t.discount,subTotal:t.subTotal,totalAmount:t.totalAmount}),(0,q.jsx)(Ie,{history:t.history})]})}),(0,q.jsx)(Ze.Z,{xs:12,md:4,children:(0,q.jsx)(ye,{customer:t.customer,delivery:t.delivery,payment:t.payment,shippingAddress:t.shippingAddress})})]})]})}var Te=r(12065),Be=r(61474),We=r(2101);function Ue(e){var n=e.row,r=e.selected,t=e.onViewRow,o=(e.onSelectRow,e.onDeleteRow),s=e.fetchAllOrders,i=(n.orderNo,n.doctor,n.reqDate,n.labItems),l=n.priority,d=(n.photo,n.status),u=(n.appointmentTime,n._id,n.providerID,n.userID,n.patientName),p=(n.facilityID,n.description,n.appointmentID,n.dateOrdered),h=(n.result,n.feeAmount,n.paid,n.labOrderId),m=(0,v.k)(),g=(0,W.S)(),j=(0,c.useState)(!1),f=(0,a.Z)(j,2),y=f[0],b=f[1],D=(0,c.useState)(!1),k=(0,a.Z)(D,2),P=k[0],R=k[1];console.log(n);var U=(0,q.jsxs)(F.Z,{hover:!0,selected:r,children:[(0,q.jsx)(T.Z,{children:(0,q.jsx)(A.Z,{onClick:t,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"".concat(h)})}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(B.Z,{primary:u,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"},sx:{whiteSpace:"nowrap"}})}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(B.Z,{primary:(0,H.Z)(new Date(p),"dd/MM/yyyy"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,q.jsxs)(T.Z,{align:"center",children:[i.map((function(e){return e.category})).join(", ")," "]}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(w.Z,{variant:"soft",color:("approved"===d?"success":"pending"===d&&"warning")||"default",children:d})}),(0,q.jsx)(T.Z,{children:(0,q.jsx)(w.Z,{variant:"soft",color:("regular"===l?"success":"urgent"===l&&"warning")||"emergency"===l&&"error"||"default",children:l})}),(0,q.jsx)(T.Z,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:(0,q.jsx)(Z.Z,{color:g.open?"inherit":"default",onClick:g.onOpen,children:(0,q.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})})]});return(0,q.jsxs)(q.Fragment,{children:[U,(0,q.jsxs)(W.Z,{open:g.open,onClose:g.onClose,arrow:"right-top",sx:{width:160},children:[(0,q.jsxs)(I.Z,{onClick:function(){b(!0),g.onClose()},children:[(0,q.jsx)(C.Z,{icon:"solar:eye-bold"}),"View Order"]}),(0,q.jsx)(O.Z,{sx:{borderStyle:"dashed"}}),(0,q.jsxs)(I.Z,{onClick:function(){alert("Cancel Order")},children:[(0,q.jsx)(C.Z,{icon:"flat-color-icons:cancel"}),"Cancel Order"]})]}),(0,q.jsx)(V,{row:n,openDialogBox:y,setOpenDialogBox:b,setOpenAppointmentBox:R}),(0,q.jsx)($,{openAppointmentBox:P,setOpenAppointmentBox:R,row:n,fetchAllOrders:function(){return s()}}),(0,q.jsx)(S.Q,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,q.jsx)(x.Z,{variant:"contained",color:"error",onClick:o,children:"Delete"})})]})}var Le=[{value:"all",label:"All"}].concat([{value:"pending",label:"Pending"},{value:"approved",label:"Approved"},{value:"cancelled",label:"Cancelled"}]),Ne=[{id:"orderNumber",label:"Order",width:120},{id:"name",label:"Patient",width:120},{id:"createdAt",label:"Requested Date (MM/DD/YYYY)",width:120},{id:"totalQuantity",label:"Order Type",width:200,align:"center"},{id:"totalAmount",label:"Status",width:110},{id:"status",label:"Priority",width:110},{id:"",width:88}],Me={labOrderId:"",status:"all",startDate:null,endDate:null,orderType:""};function _e(){var e=(0,R.x6)({defaultOrderBy:"orderNo"}),n=(0,k.K$)(),r=(0,f.tv)(),l=(0,v.k)(),y=(0,c.useState)([]),A=(0,a.Z)(y,2),O=A[0],I=A[1],F=(0,c.useState)(Me),T=(0,a.Z)(F,2),B=T[0],W=T[1],U=(0,xe.E)().user,L=(0,c.useState)([]),N=(0,a.Z)(L,2),M=(N[0],N[1],function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.Z.get("/medical-labs/faclity/pending/".concat(null===U||void 0===U?void 0:U.facilityID));case 3:n=e.sent,r=n.data,I(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}());(0,c.useEffect)((function(){M()}),[]);var _=!(!B.startDate||!B.endDate)&&B.startDate.getTime()>B.endDate.getTime(),E=function(e){var n=e.inputData,r=e.comparator,t=e.filters,o=e.dateError,s=t.status,i=t.startDate,a=t.endDate,l=(t.labOrderId,t.orderType),c=n.map((function(e,n){return[e,n]}));c.sort((function(e,n){var t=r(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),n=c.map((function(e){return e[0]})),l&&(n=n.filter((function(e){return-1!==e.orderType.toLowerCase().indexOf(l.toLowerCase())})));"all"!==s&&(n=n.filter((function(e){return e.status===s})));o||i&&a&&(n=n.filter((function(e){return(0,b.IO)(e.createdAt)>=(0,b.IO)(i)&&(0,b.IO)(e.createdAt)<=(0,b.IO)(a)})));return n}({inputData:O,comparator:(0,R.sQ)(e.order,e.orderBy),filters:B,dateError:_}),Q=E.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),H=e.dense?52:72,V=!!B.name||"all"!==B.status||!!B.startDate&&!!B.endDate,G=!E.length&&V||!E.length,K=(0,c.useCallback)((function(n,r){e.onResetPage(),W((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,t.Z)({},n,r))}))}),[e]),$=(0,c.useCallback)((function(n){var r=O.filter((function(e){return e.id!==n}));I(r),e.onUpdatePageDeleteRow(Q.length)}),[Q.length,e,O]),Y=(0,c.useCallback)((function(){var n=O.filter((function(n){return!e.selected.includes(n.id)}));I(n),e.onUpdatePageDeleteRows({totalRows:O.length,totalRowsInPage:Q.length,totalRowsFiltered:E.length})}),[E.length,Q.length,e,O]),J=(0,c.useCallback)((function(){W(Me)}),[]),X=(0,c.useCallback)((function(e){r.push(j.H.dashboard.order.details(e))}),[r]),ee=(0,c.useCallback)((function(e,n){K("status",n)}),[K]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(h.Z,{maxWidth:!n.themeStretch&&"lg",children:[(0,q.jsx)(P.Z,{heading:"All Orders",links:[{name:"Dashboard",href:j.H.dashboard.root},{name:"Orders",href:j.H.dashboard.order.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),(0,q.jsxs)(d.Z,{children:[(0,q.jsx)(We.Z,{value:B.status,onChange:ee,sx:{px:2.5,boxShadow:function(e){return"inset 0 -2px 0 0 ".concat((0,Te.Fq)(e.palette.grey[500],.08))}},children:Le.map((function(e){return(0,q.jsx)(Be.Z,{iconPosition:"end",value:e.value,label:e.label,icon:(0,q.jsxs)(w.Z,{variant:"all"===e.value||e.value===B.status?"filled":"soft",color:("approved"===e.value?"success":"pending"===e.value&&"warning")||"cancelled"===e.value&&"error"||"default",children:["all"===e.value&&O.length,"approved"===e.value&&O.filter((function(e){return"approved"===e.status})).length,"pending"===e.value&&O.filter((function(e){return"pending"===e.status})).length,"cancelled"===e.value&&O.filter((function(e){return"cancelled"===e.status})).length]})},e.value)}))}),(0,q.jsx)(oe,{filters:B,onFilters:K,canReset:V,onResetFilters:J}),V&&(0,q.jsx)(de,{filters:B,onFilters:K,onResetFilters:J,results:E.length,sx:{p:2.5,pt:0}}),(0,q.jsxs)(g.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,q.jsx)(R.Z4,{dense:e.dense,numSelected:e.selected.length,rowCount:O.length,onSelectAllRows:function(n){return e.onSelectAllRows(n,O.map((function(e){return e.id})))},action:(0,q.jsx)(p.Z,{title:"Delete",children:(0,q.jsx)(Z.Z,{color:"primary",onClick:l.onTrue,children:(0,q.jsx)(C.Z,{icon:"solar:trash-bin-trash-bold"})})})}),(0,q.jsx)(D.Z,{children:(0,q.jsxs)(u.Z,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[(0,q.jsx)(R.K,{order:e.order,orderBy:e.orderBy,headLabel:Ne,rowCount:O.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:function(n){return e.onSelectAllRows(n,O.map((function(e){return e.id})))}}),(0,q.jsxs)(m.Z,{children:[E.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((function(n){return(0,q.jsx)(Ue,{row:n,fetchAllOrders:M,selected:e.selected.includes(n.id),onSelectRow:function(){return e.onSelectRow(n.id)},onDeleteRow:function(){return $(n.id)},onViewRow:function(){return X(n.id)}},n.id)})),(0,q.jsx)(R.$W,{height:H,emptyRows:(0,R.fQ)(e.page,e.rowsPerPage,O.length)}),(0,q.jsx)(R.et,{notFound:G})]})]})})]}),(0,q.jsx)(R.S_,{count:E.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),(0,q.jsx)(S.Q,{open:l.value,onClose:l.onFalse,title:"Delete",content:(0,q.jsxs)(q.Fragment,{children:["Are you sure want to delete"," ",(0,q.jsxs)("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:(0,q.jsx)(x.Z,{variant:"contained",color:"error",onClick:function(){Y(),l.onFalse()},children:"Delete"})})]})}}}]);
//# sourceMappingURL=3307.2d0fd0eb.chunk.js.map