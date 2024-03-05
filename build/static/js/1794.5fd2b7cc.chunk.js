"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[1794],{50933:function(e,n,r){r.d(n,{Z:function(){return f}});var i=r(1413),t=r(45987),a=r(64554),l=r(50533),o=r(36314),s=r(4567),c=r(93517),d=r(83854),u=r(80184);function m(e){var n=e.link,r=e.activeLast,t=e.disabled,o=n.name,s=n.href,c=n.icon,m=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return s?(0,u.jsx)(l.Z,{component:d.r,href:s,sx:m,children:h}):(0,u.jsxs)(a.Z,{sx:m,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,r=e.action,d=e.heading,f=e.moreLink,g=e.activeLast,p=e.sx,b=(0,t.Z)(e,h),j=n[n.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,i.Z)({},p),children:[(0,u.jsxs)(o.Z,{direction:"row",alignItems:"center",sx:{"@media (max-width: 475px)":{flexDirection:"column"}},children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(x,{})},b),{},{children:n.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:g,disabled:e.name===j},e.name||"")}))}))]}),r&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!f&&(0,u.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},21794:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var i=r(6907),t=r(93433),a=r(64554),l=r(50533),o=r(57621),s=r(36314),c=r(89164),d=r(9585),u=r(4567),m=r(38072),h=r(57062),f=r(50933),x=r(13400),g=r(99188),p=r(40268),b=r(80184),j=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:function(){return(0,b.jsx)(x.Z,{children:(0,b.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}}];function Z(e){var n=e.data;return(0,b.jsx)(g._,{columns:j,rows:n,checkboxSelection:!0,disableRowSelectionOnClick:!0})}var w=r(1413),v=r(29439),y=r(72791),C=r(56694),N=r(60220),k=r(40986),A=r(6054),L=r(70039),S=r(17070),I=r(80160),J=[{field:"id"},{field:"avatar",headerName:"Avatar",align:"center",headerAlign:"center",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,b.jsx)(N.Z,{alt:e.row.name,sx:{width:36,height:36},children:e.row.name.charAt(0).toUpperCase()})}},{field:"name",headerName:"Name",flex:1,editable:!0},{field:"email",headerName:"Email",flex:1,editable:!0,renderCell:function(e){return(0,b.jsx)(u.Z,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:e.row.email})}},{field:"lastLogin",type:"dateTime",headerName:"Last login",align:"right",headerAlign:"right",width:200},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:function(e){return(0,b.jsx)(C.Z,{size:"small",value:e.row.rating,precision:.5,readOnly:!0})}},{field:"status",type:"singleSelect",headerName:"Status",valueOptions:["online","alway","busy"],align:"center",headerAlign:"center",width:120,renderCell:function(e){return(0,b.jsx)(I.Z,{variant:"soft",color:("busy"===e.row.status?"error":"alway"===e.row.status&&"warning")||"success",sx:{mx:"auto"},children:e.row.status})}},{field:"isAdmin",type:"boolean",align:"center",headerAlign:"center",width:120,renderCell:function(e){return e.row.isAdmin?(0,b.jsx)(p.Z,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"}},{field:"performance",type:"number",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:function(e){return(0,b.jsxs)(s.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[(0,b.jsx)(k.Z,{value:e.row.performance,variant:"determinate",color:(e.row.performance<30?"error":e.row.performance>30&&e.row.performance<70&&"warning")||"primary",sx:{width:1,height:6}}),(0,b.jsx)(u.Z,{variant:"caption",sx:{width:80},children:(0,S.f2)(e.row.performance)})]})}},{field:"action",headerName:" ",align:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,b.jsx)(x.Z,{onClick:function(){return console.info("ID",e.row.id)},children:(0,b.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}}];function Q(e){var n=e.data,r=(0,y.useState)([]),i=(0,v.Z)(r,2),t=i[0],a=i[1],l=(0,y.useState)({id:!1}),o=(0,v.Z)(l,2),s=o[0],c=o[1];if(J.length){var d=J.find((function(e){return"rating"===e.field})),u=J.findIndex((function(e){return"rating"===e.field})),m=(0,A.U)().map((function(e){return(0,w.Z)((0,w.Z)({},e),{},{InputComponent:M})}));J[u]=(0,w.Z)((0,w.Z)({},d),{},{filterOperators:m})}var h=(0,y.useCallback)((function(e){c(e)}),[]),f=["id","action"],x=n.filter((function(e){return t.includes(e.id)}));return console.info("SELECTED ROWS",x),(0,b.jsx)(g._,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:n,columns:J,onRowSelectionModelChange:function(e){a(e)},columnVisibilityModel:s,onColumnVisibilityModelChange:h,slots:{toolbar:L.n},slotProps:{columnsPanel:{getTogglableColumns:function(){return J.filter((function(e){return!f.includes(e.field)})).map((function(e){return e.field}))}}}})}function M(e){var n=e.item,r=e.applyValue;return(0,b.jsx)(a.Z,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:(0,b.jsx)(C.Z,{size:"small",precision:.5,placeholder:"Filter value",value:Number(n.value),onChange:function(e,i){r((0,w.Z)((0,w.Z)({},n),{},{value:i}))}})})}var _=(0,t.Z)(Array(20)).map((function(e,n){var r=(n%2?"online":n%3&&"alway")||n%4&&"busy"||"offline";return{id:h.QJ.id(n),status:r,email:h.QJ.email(n),name:h.QJ.fullName(n),age:h.QJ.number.age(n),lastLogin:h.QJ.time(n),isAdmin:h.QJ.boolean(n),lastName:h.QJ.lastName(n),rating:h.QJ.number.rating(n),firstName:h.QJ.firstName(n),performance:h.QJ.number.percent(n)}}));function D(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(f.Z,{heading:"DataGrid",links:[{name:"Components",href:m.H.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),(0,b.jsxs)(u.Z,{variant:"body2",sx:{my:3},children:["This component includes 2 ",(0,b.jsx)("strong",{children:"Free"})," and ",(0,b.jsx)("strong",{children:"Paid"})," versions from MUI.",(0,b.jsx)("br",{}),"Paid version will have more features. Please read more"," ",(0,b.jsx)(l.Z,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]})}),(0,b.jsx)(c.Z,{sx:{my:10},children:(0,b.jsxs)(s.Z,{spacing:5,children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(d.Z,{title:"Basic",sx:{mb:2}}),(0,b.jsx)(a.Z,{sx:{height:390},children:(0,b.jsx)(Z,{data:_})})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(d.Z,{title:"Custom",sx:{mb:2}}),(0,b.jsx)(a.Z,{sx:{height:720},children:(0,b.jsx)(Q,{data:_})})]})]})})]})}function F(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" MUI: DataGrid"})}),(0,b.jsx)(D,{})]})}},17070:function(e,n,r){r.d(n,{FK:function(){return a},e_:function(){return l},f2:function(){return o},oe:function(){return c},v1:function(){return s}});var i=r(26098),t=r.n(i);function a(e){return t()(e).format()}function l(e){return d(e?t()(e).format("$0,0.00"):"",".00")}function o(e){return d(e?t()(Number(e)/100).format("0.0%"):"",".0")}function s(e){return d(e?t()(e).format("0.00a"):"",".00")}function c(e){return d(e?t()(e).format("0.0 b"):"",".0")}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(n)?e.replace(n,""):e}}}]);
//# sourceMappingURL=1794.5fd2b7cc.chunk.js.map