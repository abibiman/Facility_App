"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[6185],{50933:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1413),a=n(45987),o=n(64554),i=n(50533),s=n(36314),c=n(4567),l=n(93517),d=n(83854),u=n(80184);function p(e){var t=e.link,n=e.activeLast,a=e.disabled,s=t.name,c=t.href,l=t.icon,p=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),s]});return c?(0,u.jsx)(i.Z,{component:d.r,href:c,sx:p,children:x}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function h(e){var t=e.links,n=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,Z=e.sx,v=(0,a.Z)(e,x),g=t[t.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({},Z),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",sx:{"@media (max-width: 475px)":{flexDirection:"column"}},children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(m,{})},v),{},{children:t.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},30265:function(e,t,n){n.d(t,{YG:function(){return he},Ps:function(){return P},WW:function(){return Ze}});var r=n(74165),a=n(15861),o=n(29439),i=n(72791),s=n(31243),c=n(89164),l=n(38072),d=n(60720),u=n(50933),p=(n(93122),n(57459)),x=n(64554),h=n(11087),m=n(57621),f=n(60220),Z=n(49900),v=n(57062),g=n(3597),j=n(40268),y=n(5574),b=n(36314),w=n(4567),k=n(5849),C=n(32869),S=n(80184);function I(e){var t=e.open,n=e.data,o=e.close,c=((0,i.useContext)(p.Vo)||{}).user,l=(0,C.Ds)().enqueueSnackbar,d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("https://abibiman-api.onrender.com/primarycare",{userID:null===c||void 0===c?void 0:c.userID,providerID:n},{headers:{Authorization:"Basic ".concat(null===c||void 0===c?void 0:c.token)}});case 3:t=e.sent,a=t.data,l("Provider successfully selected"),o(),console.log(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,S.jsx)(y.Z,{open:t,onClose:o,children:(0,S.jsxs)(b.Z,{sx:{padding:"40px 20px 20px","@media (max-width: 425px )":{padding:"20px 10px",display:"flex",flexDirection:"column"}},children:[(0,S.jsxs)(w.Z,{children:["Would you like to select ",n.title," ",n.firstName," ",n.lastName," as your primary care provider?"]}),(0,S.jsxs)(x.Z,{sx:{width:"100%",display:"flex",justifyContent:"center",margin:"10px 0",gap:"10px"},children:[(0,S.jsx)(k.Z,{href:"#",variant:"contained",onClick:d,sx:{"@media (max-width: 425px )":{width:"100%"}},children:"Yes"}),(0,S.jsxs)(k.Z,{href:"#",variant:"contained",onClick:function(){return o()},sx:{"@media (max-width: 425px )":{width:"100%"}},children:["No"," "]})]})]})})}function N(e){var t=e.provider,n=t.firstName,r=t.lastName,a=t.specialization,s=t.photo,c=t.providerID,l=(0,i.useState)(!1),d=(0,o.Z)(l,2),u=d[0],p=d[1],v="".concat(n," ").concat(r);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(m.Z,{sx:{textAlign:"center",position:"relative"},children:[" ",(0,S.jsxs)(h.rU,{to:"/dashboard/primary-care/profile/".concat(c),style:{textDecoration:"none"},children:[(0,S.jsx)(f.Z,{alt:v,src:s,sx:{width:64,height:64,zIndex:11,left:0,right:0,mx:"auto",mt:2,position:"relative"}}),(0,S.jsx)(Z.Z,{sx:{mt:4,mb:1},primary:v,secondary:a,primaryTypographyProps:{typography:"subtitle1",color:"textPrimary"},secondaryTypographyProps:{component:"span",mt:.5,color:"textSecondary"}}),(0,S.jsx)(x.Z,{sx:{position:"relative"},children:(0,S.jsx)(g.oG,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:56,position:"absolute"}})})]})]}),(0,S.jsx)(I,{data:t,open:u,close:function(){return p(!1)}})]})}function A(e){var t=e.providers;return(0,S.jsx)(x.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:t.map((function(e){return(0,S.jsx)(N,{provider:e},e.id)}))})}function P(){var e=(0,d.K$)(),t=(0,i.useContext)(p.Vo).user.token,n=(0,i.useState)([]),x=(0,o.Z)(n,2),h=x[0],m=x[1],f=(0,i.useState)(!0),Z=(0,o.Z)(f,2),v=(Z[0],Z[1]);return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,s.Z.get("https://abibiman-api.onrender.com/providers/type/primary",{headers:{Authorization:"Basic ".concat(t)}});case 4:n=e.sent,console.log(n),m(null===n||void 0===n?void 0:n.data.data),v(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),v(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,S.jsxs)(c.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,S.jsx)(u.Z,{heading:"All Primary Care Providers",links:[{name:"Dashboard",href:l.H.dashboard.root},{name:"Providers",href:l.H.dashboard.providers.collection.root},{name:"All"}],sx:{mb:{xs:3,md:5}}}),(0,S.jsx)(A,{providers:h})]})}var T=n(4942),D=n(75985),W=n(61474),F=n(2101),B=n(85860),z=n(48550),M=n(82626),E=n(65661),L=n(97123),R=n(39157),U=n(57689),H=n(83854),V=n(14993),O=n(22459),_=n(50533),Y=n(94721),G=n(24308),K=n(9585),q=n(17070);function J(e){var t=e.info,n=(e.posts,(0,S.jsx)(m.Z,{sx:{py:3,textAlign:"center",typography:"h4"},children:(0,S.jsxs)(b.Z,{direction:"row",divider:(0,S.jsx)(Y.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[(0,S.jsxs)(b.Z,{width:1,children:[(0,q.FK)(t.yearsExperience),(0,S.jsx)(x.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Years Of Experience"})]}),(0,S.jsxs)(b.Z,{width:1,children:[23,(0,S.jsx)(x.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Patients"})]})]})})),r=(0,S.jsx)(m.Z,{sx:{py:3,textAlign:"center",typography:"h4"},children:(0,S.jsxs)(b.Z,{direction:"row",divider:(0,S.jsx)(Y.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[(0,S.jsxs)(b.Z,{width:1,children:[t.licenseNumber,(0,S.jsx)(x.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"License Number"})]}),(0,S.jsxs)(b.Z,{width:1,children:[t.operativeCountry,(0,S.jsx)(x.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Operative Country"})]})]})}),a=(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(K.Z,{title:"About Me"}),(0,S.jsxs)(b.Z,{spacing:2,sx:{p:3},children:[(0,S.jsx)(x.Z,{sx:{typography:"body2"},children:t.description}),(0,S.jsxs)(b.Z,{direction:"row",spacing:2,children:[(0,S.jsx)(j.Z,{icon:"mingcute:location-fill",width:24}),(0,S.jsxs)(x.Z,{sx:{typography:"body2"},children:[" ",(0,S.jsx)(_.Z,{variant:"subtitle2",color:"inherit",children:"Accra, Ghana"})]})]}),(0,S.jsxs)(b.Z,{direction:"row",sx:{typography:"body2"},children:[(0,S.jsx)(j.Z,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),t.email]}),(0,S.jsxs)(b.Z,{direction:"row",spacing:2,children:[(0,S.jsx)(j.Z,{icon:"ic:round-business-center",width:24}),(0,S.jsxs)(x.Z,{sx:{typography:"body2"},children:[t.role," ","at ",(0,S.jsx)(_.Z,{variant:"subtitle2",color:"inherit",children:t.employer})]})]}),(0,S.jsxs)(b.Z,{direction:"row",spacing:2,children:[(0,S.jsx)(j.Z,{icon:"ic:round-business-center",width:24}),(0,S.jsxs)(x.Z,{sx:{typography:"body2"},children:["Studied at ",(0,S.jsx)(_.Z,{variant:"subtitle2",color:"inherit",children:t.medicalSchool?t.medicalSchool[0]:"N/a"})]})]})]})]}),o=(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(K.Z,{title:"Certifications"}),(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{direction:"column",spacing:3,children:t.boardCertifications?t.boardCertifications.map((function(e){return(0,S.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center",typography:"body2"},children:[(0,S.jsx)(x.Z,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:"text.primary",mr:2}})," ",e]})})):(0,S.jsx)("a",{children:"."})})})})]}),i=(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(K.Z,{title:"Languages Spoken"}),(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{direction:"column",spacing:3,children:t.languages?t.languages.map((function(e){return(0,S.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center",typography:"body2"},children:[(0,S.jsx)(x.Z,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:"text.primary",mr:2}})," ",e]})})):(0,S.jsx)("a",{children:"."})})})})]}),s=(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(K.Z,{title:"Awards"}),(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{direction:"column",spacing:3,children:t.awards?t.awards.map((function(e){return(0,S.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center",typography:"body2"},children:[(0,S.jsx)(x.Z,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:"text.primary",mr:2}})," ",e]})})):(0,S.jsx)("a",{children:"."})})})]});return(0,S.jsxs)(G.Z,{container:!0,spacing:3,children:[(0,S.jsx)(G.Z,{xs:12,md:6,children:(0,S.jsxs)(b.Z,{spacing:3,children:[n,a,i]})}),(0,S.jsx)(G.Z,{xs:12,md:6,children:(0,S.jsxs)(b.Z,{spacing:3,children:[r,o,s]})})]})}var $=n(1413),X=n(13967),Q=n(12065),ee=n(74744);function te(e){var t=e.name,n=e.avatarUrl,r=e.role,a=e.coverUrl,o=(0,X.Z)();return(0,S.jsx)(x.Z,{sx:(0,$.Z)((0,$.Z)({},(0,ee.v3)({color:(0,Q.Fq)(o.palette.primary.darker,.8),imgUrl:a})),{},{height:1,color:"common.white"}),children:(0,S.jsxs)(b.Z,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[(0,S.jsx)(f.Z,{src:n,alt:t,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:"solid 2px ".concat(o.palette.common.white)}}),(0,S.jsx)(Z.Z,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:t,secondary:r,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}var ne=n(4834);function re(e){var t=e.info,n=e.hours,r=(0,i.useState)(""),a=(0,o.Z)(r,2),s=a[0],c=a[1],l=(0,i.useState)(""),d=(0,o.Z)(l,2),u=d[0],p=d[1],h=(0,i.useState)(null),f=(0,o.Z)(h,2),Z=(f[0],f[1],(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(K.Z,{title:"About Me"}),(0,S.jsxs)(b.Z,{spacing:2,sx:{p:3},children:[(0,S.jsxs)(b.Z,{direction:"row",spacing:2,children:[(0,S.jsx)(j.Z,{icon:"mingcute:location-fill",width:24}),(0,S.jsxs)(x.Z,{sx:{typography:"body2"},children:[" ",(0,S.jsx)(_.Z,{variant:"subtitle2",color:"inherit",children:"Greenfield Estate, 1M6A"})]})]}),(0,S.jsxs)(b.Z,{direction:"row",sx:{typography:"body2"},children:[(0,S.jsx)(j.Z,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),t.email]}),(0,S.jsxs)(b.Z,{direction:"row",spacing:2,children:[(0,S.jsx)(j.Z,{icon:"ic:phone",width:24}),(0,S.jsx)(x.Z,{sx:{typography:"body2"},children:(0,S.jsx)(_.Z,{variant:"subtitle2",color:"inherit",children:t.phoneNumber})})]})]})]})),v=(m.Z,K.Z,"Send ".concat(t.title," ").concat(t.lastName," A Message"),b.Z,x.Z,ne.ZP,x.Z,ne.ZP,x.Z,k.Z,Object.keys(n).map((function(e){return{availableDay:e,availableSessions:n[e]}}))),g=(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(K.Z,{title:"Work Hours"}),(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{spacing:6,sx:{p:3},children:(0,S.jsx)(b.Z,{direction:"column",spacing:3,children:v?v.map((function(e){return(0,S.jsx)(x.Z,{sx:{display:"flex",alignItems:"center",typography:"body2"},children:0===e.availableSessions.length?"":(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x.Z,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:"text.primary",mr:2}}),e.availableDay,":",(0,S.jsx)(x.Z,{sx:{display:"flex",flexDirection:"row",gap:"10px",marginLeft:"5px"},children:e.availableSessions.map((function(e){var t="".concat(e.startTime," - ").concat(e.endTime);return(0,S.jsx)(w.Z,{sx:{fontSize:"14px"},children:t})}))})]})})})):(0,S.jsx)("a",{children:"."})})})})]});return(0,S.jsxs)(G.Z,{container:!0,spacing:3,children:[(0,S.jsx)(G.Z,{xs:12,md:6,children:(0,S.jsx)(b.Z,{spacing:3,children:Z})}),(0,S.jsx)(G.Z,{xs:12,md:6,children:g})]})}var ae=n(93433),oe=n(2102),ie=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.Z.get("/providers/".concat(n),{headers:{Authorization:"Basic ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),se=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a,o){var i,s,c,l,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.Z.get("/providerschedules/PAC-58965t9");case 3:i=e.sent,s=i.data,t(s.data),c=s.data,l=Object.keys(c).map((function(e){return{availableDay:e,availableSessions:c[e]}})),d=[],l.forEach((function(e){var t=e.availableSessions;d=[].concat((0,ae.Z)(d),[{time:t}])})),u=[],d.length>0&&d.forEach((function(e){e.time.forEach((function(e){u.push({startTime:e.startTime,endTime:e.endTime})}))})),n(u),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ce=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var o,i,s,c,l,d,u,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new Date(t),i=["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()],s=o.getDate(),c=o.getFullYear(),l="".concat(s," ").concat(i," ").concat(c),d=(0,$.Z)((0,$.Z)({},a),{},{appointmentDate:l}),e.prev=7,e.next=10,oe.Z.post("/appointments",d);case 10:return u=e.sent,p=u.data,console.log(p),e.abrupt("return",p);case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0);case 19:return e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t,n,r){return e.apply(this,arguments)}}(),le=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.Z.get("/primarycare/user/fetchprovider/".concat(t));case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();function de(e){var t=e.actionBox,n=e.data,r=e.dialog,a=(0,X.Z)();return(0,S.jsx)(y.Z,{open:t.value,onClose:t.onFalse,sx:{maxWidth:"400px",margin:"0 auto","@media (max-width: 425px )":{maxWidth:"100%"}},children:(0,S.jsxs)(b.Z,{sx:{padding:"20px 20px 10px","@media (max-width: 425px )":{padding:"20px 10px"}},children:[(0,S.jsxs)(w.Z,{children:["Would you like to book an appointment with ",n.title," ",n.firstName," ",n.lastName,"?"]}),(0,S.jsx)(x.Z,{sx:{width:"100%",display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,S.jsx)(k.Z,{component:H.r,href:"#",variant:"contained",onClick:function(){t.onFalse(),r.onTrue()},sx:{"@media (max-width: 425px )":{width:"100%"},background:"".concat(a.palette.primary.main)},children:"Book Appointment"})})]})})}var ue=[{value:"profile",label:"Provider Information",icon:(0,S.jsx)(j.Z,{icon:"solar:user-id-bold",width:24})},{value:"contact",label:"Contact",icon:(0,S.jsx)(j.Z,{icon:"solar:users-group-rounded-bold",width:24})}];function pe(e){var t=e.data,n=(0,d.K$)(),s=(0,U.UO)().id,x=(0,i.useContext)(p.Vo).user,h=(0,i.useState)({}),f=(0,o.Z)(h,2),Z=f[0],g=f[1],b=(0,O.k)(),C=(0,O.k)(),I=(0,i.useState)(!0),N=(0,o.Z)(I,2),A=N[0],P=N[1],_=(0,i.useState)([]),Y=(0,o.Z)(_,2),G=Y[0],K=Y[1],q=(0,i.useState)(""),$=(0,o.Z)(q,2),X=$[0],Q=$[1],ee=(0,i.useState)(""),ne=(0,o.Z)(ee,2),ae=ne[0],oe=ne[1],ie=(0,i.useState)(""),le=(0,o.Z)(ie,2),pe=le[0],xe=le[1],he=(0,i.useState)(""),me=(0,o.Z)(he,2),fe=me[0],Ze=me[1],ve=(0,i.useState)(""),ge=(0,o.Z)(ve,2),je=ge[0],ye=ge[1],be=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,se(g,K,null===x||void 0===x?void 0:x.token,s);case 4:P(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),P(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.onFalse(),C.onFalse(),t={providerID:s,userID:null===x||void 0===x?void 0:x.userID,startTime:fe,appointmentType:je,status:"pending"},e.prev=3,e.next=6,ce(pe,null===x||void 0===x?void 0:x.token,t);case 6:n=e.sent,console.log(n),n&&D.Am.success("Appointment successfully booked"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){be()}),[]);var ke=(0,i.useState)("profile"),Ce=(0,o.Z)(ke,2),Se=Ce[0],Ie=Ce[1],Ne=(0,i.useCallback)((function(e,t){Ie(t)}),[]);return!A&&t.title&&t.firstName&&t.lastName?(0,S.jsxs)(c.Z,{maxWidth:!n.themeStretch&&"lg",children:[(0,S.jsx)(u.Z,{heading:"".concat(t.title," ").concat(t.firstName," ").concat(t.lastName),links:[{name:"Dashboard",href:l.H.dashboard.root},{name:"Provider",href:l.H.dashboard.providers.root},{name:"".concat(t.title," ").concat(t.firstName," ").concat(t.lastName)}],action:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(k.Z,{component:H.r,href:"#",variant:"contained",startIcon:(0,S.jsx)(j.Z,{icon:"gridicons:create"}),onClick:C.onTrue,children:"Book Appointment"}),(0,S.jsx)(k.Z,{component:H.r,href:"/dashboard/primary-care/chat/".concat(null===t||void 0===t?void 0:t.providerID),variant:"contained",startIcon:(0,S.jsx)(j.Z,{icon:"basil:chat-solid"}),sx:{marginLeft:"5px"},children:"Chat"})]}),sx:{mb:{xs:3,md:5}}}),(0,S.jsxs)(m.Z,{sx:{mb:3,height:290},children:[(0,S.jsx)(te,{role:(null===t||void 0===t?void 0:t.specialization)||" ",name:"".concat((null===t||void 0===t?void 0:t.title)||" "," ").concat((null===t||void 0===t?void 0:t.firstName)||" "," ").concat((null===t||void 0===t?void 0:t.lastName)||" "),avatarUrl:null===t||void 0===t?void 0:t.photo,coverUrl:"https://i.ibb.co/XC0WYHf/6302751-min.jpg"}),(0,S.jsx)(F.Z,{value:Se,onChange:Ne,sx:(0,T.Z)({width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper"},"& .".concat(B.Z.flexContainer),{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}),children:ue.map((function(e){return(0,S.jsx)(W.Z,{value:e.value,icon:e.icon,label:e.label},e.value)}))})]}),"profile"===Se&&(0,S.jsx)(J,{info:t,posts:v.Uw}),"contact"===Se&&(0,S.jsx)(re,{info:t,posts:v.Uw,hours:Z}),(0,S.jsxs)(y.Z,{open:b.value,onClose:b.onFalse,children:[(0,S.jsxs)(E.Z,{children:["Make An Appointment with ",t.title," ",t.firstName," ",t.lastName," "]}),(0,S.jsxs)(R.Z,{children:[(0,S.jsx)(w.Z,{sx:{mb:3},children:"Please fill the form below"}),(0,S.jsx)(z.Z,{autoFocus:!0,fullWidth:!0,type:"text",margin:"dense",variant:"outlined",label:"Full Name",value:X,onChange:function(e){return Q(e.target.value)}}),(0,S.jsx)(z.Z,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address",value:ae,onChange:function(e){return oe(e.target.value)}}),(0,S.jsx)(z.Z,{autoFocus:!0,fullWidth:!0,type:"date",margin:"dense",variant:"outlined",value:pe,onChange:function(e){return xe(e.target.value)}}),(0,S.jsx)(z.Z,{fullWidth:!0,select:!0,defaultValue:je,value:je,onChange:function(e){return ye(e.target.value)},sx:{marginTop:"15px"},children:["Audio","Video"].map((function(e){return(0,S.jsx)(M.Z,{value:e,children:e},e)}))}),(0,S.jsx)(w.Z,{variant:"body2",color:"textSecondary",sx:{marginTop:1},children:"Please select your appointment type"}),(0,S.jsx)(z.Z,{fullWidth:!0,select:!0,defaultValue:fe,InputLabelProps:{shrink:!0},value:fe,onChange:function(e){return Ze(e.target.value)},sx:{marginTop:"15px"},children:G.length>0&&G.map((function(e,t){return(0,S.jsx)(M.Z,{value:e.startTime,children:"".concat(e.startTime,"-").concat(e.endTime)},t)}))}),(0,S.jsx)(w.Z,{variant:"body2",color:"textSecondary",sx:{marginTop:1},children:"Please select your appointment time"})]}),(0,S.jsxs)(L.Z,{children:[(0,S.jsx)(k.Z,{onClick:b.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),(0,S.jsx)(k.Z,{onClick:we,variant:"contained",children:"Book Appointment"})]})]}),(0,S.jsx)(de,{actionBox:C,data:t,dialog:b})]}):(0,S.jsx)(V.c,{})}var xe=[{value:"profile",label:"Provider Information",icon:(0,S.jsx)(j.Z,{icon:"solar:user-id-bold",width:24})},{value:"contact",label:"Contact",icon:(0,S.jsx)(j.Z,{icon:"solar:users-group-rounded-bold",width:24})}];function he(){var e=(0,d.K$)(),t=(0,U.UO)().id,n=(0,i.useContext)(p.Vo).user,s=(0,i.useState)([]),x=(0,o.Z)(s,2),h=x[0],f=x[1],Z=(0,i.useState)({}),g=(0,o.Z)(Z,2),b=g[0],C=g[1],N=(0,O.k)(),A=(0,O.k)(),P=(0,i.useState)(!1),_=(0,o.Z)(P,2),Y=_[0],G=_[1],K=(0,i.useState)(!0),q=(0,o.Z)(K,2),$=q[0],X=q[1],Q=(0,i.useState)([]),ee=(0,o.Z)(Q,2),ne=ee[0],ae=ee[1],oe=(0,i.useState)(""),le=(0,o.Z)(oe,2),ue=le[0],pe=le[1],he=(0,i.useState)(""),me=(0,o.Z)(he,2),fe=me[0],Ze=me[1],ve=(0,i.useState)(""),ge=(0,o.Z)(ve,2),je=ge[0],ye=ge[1],be=(0,i.useState)(""),we=(0,o.Z)(be,2),ke=we[0],Ce=we[1],Se=(0,i.useState)(""),Ie=(0,o.Z)(Se,2),Ne=Ie[0],Ae=Ie[1],Pe=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.prev=1,e.next=4,ie(null===n||void 0===n?void 0:n.token,"PDA-81198625");case 4:t=e.sent,f(t),X(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),X(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.prev=1,e.next=4,se(C,ae,null===n||void 0===n?void 0:n.token,t);case 4:X(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),X(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N.onFalse(),A.onFalse(),a={providerID:t,userID:null===n||void 0===n?void 0:n.userID,startTime:ke,appointmentType:Ne,status:"pending"},e.prev=3,e.next=6,ce(je,null===n||void 0===n?void 0:n.token,a);case 6:o=e.sent,console.log(o),o&&D.Am.success("Appointment successfully booked"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){Pe()}),[]),(0,i.useEffect)((function(){Te()}),[]);var We=(0,i.useState)("profile"),Fe=(0,o.Z)(We,2),Be=Fe[0],ze=Fe[1],Me=(0,i.useCallback)((function(e,t){ze(t)}),[]);return!$&&h.title&&h.firstName&&h.lastName?(0,S.jsxs)(c.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,S.jsx)(u.Z,{heading:"".concat(h.title," ").concat(h.firstName," ").concat(h.lastName),links:[{name:"Dashboard",href:l.H.dashboard.root},{name:"Provider List",href:l.H.dashboard.primaryCare.list},{name:"".concat(h.title," ").concat(h.firstName," ").concat(h.lastName)}],action:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(k.Z,{component:H.r,href:"#",variant:"contained",startIcon:(0,S.jsx)(j.Z,{icon:"gridicons:create"}),onClick:N.onTrue,children:"Book Appointment"}),(0,S.jsx)(k.Z,{component:H.r,variant:"contained",startIcon:(0,S.jsx)(j.Z,{icon:"ep:select"}),sx:{marginLeft:"5px"},onClick:function(){return G(!0)},children:"Select Provider"})]}),sx:{mb:{xs:3,md:5}}}),(0,S.jsxs)(m.Z,{sx:{mb:3,height:290},children:[(0,S.jsx)(te,{role:(null===h||void 0===h?void 0:h.specialization)||" ",name:"".concat((null===h||void 0===h?void 0:h.title)||" "," ").concat((null===h||void 0===h?void 0:h.firstName)||" "," ").concat((null===h||void 0===h?void 0:h.lastName)||" "),avatarUrl:null===h||void 0===h?void 0:h.photo,coverUrl:"https://i.ibb.co/XC0WYHf/6302751-min.jpg"}),(0,S.jsx)(F.Z,{value:Be,onChange:Me,sx:(0,T.Z)({width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper"},"& .".concat(B.Z.flexContainer),{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}),children:xe.map((function(e){return(0,S.jsx)(W.Z,{value:e.value,icon:e.icon,label:e.label},e.value)}))})]}),"profile"===Be&&(0,S.jsx)(J,{info:h,posts:v.Uw}),"contact"===Be&&(0,S.jsx)(re,{info:h,posts:v.Uw,hours:b}),(0,S.jsxs)(y.Z,{open:N.value,onClose:N.onFalse,children:[(0,S.jsxs)(E.Z,{children:["Make An Appointment with ",h.title," ",h.firstName," ",h.lastName," "]}),(0,S.jsxs)(R.Z,{children:[(0,S.jsx)(w.Z,{sx:{mb:3},children:"Please fill the form below"}),(0,S.jsx)(z.Z,{autoFocus:!0,fullWidth:!0,type:"text",margin:"dense",variant:"outlined",label:"Full Name",value:ue,onChange:function(e){return pe(e.target.value)}}),(0,S.jsx)(z.Z,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address",value:fe,onChange:function(e){return Ze(e.target.value)}}),(0,S.jsx)(z.Z,{autoFocus:!0,fullWidth:!0,type:"date",margin:"dense",variant:"outlined",value:je,onChange:function(e){return ye(e.target.value)}}),(0,S.jsx)(z.Z,{fullWidth:!0,select:!0,defaultValue:Ne,value:Ne,onChange:function(e){return Ae(e.target.value)},sx:{marginTop:"15px"},children:["Audio","Video"].map((function(e){return(0,S.jsx)(M.Z,{value:e,children:e},e)}))}),(0,S.jsx)(w.Z,{variant:"body2",color:"textSecondary",sx:{marginTop:1},children:"Please select your appointment type"}),(0,S.jsx)(z.Z,{fullWidth:!0,select:!0,defaultValue:ke,InputLabelProps:{shrink:!0},value:ke,onChange:function(e){return Ce(e.target.value)},sx:{marginTop:"15px"},children:ne.length>0&&ne.map((function(e,t){return(0,S.jsx)(M.Z,{value:e.startTime,children:"".concat(e.startTime,"-").concat(e.endTime)},t)}))}),(0,S.jsx)(w.Z,{variant:"body2",color:"textSecondary",sx:{marginTop:1},children:"Please select your appointment time"})]}),(0,S.jsxs)(L.Z,{children:[(0,S.jsx)(k.Z,{onClick:N.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),(0,S.jsx)(k.Z,{onClick:De,variant:"contained",children:"Book Appointment"})]})]}),(0,S.jsx)(de,{actionBox:A,data:h,dialog:N}),(0,S.jsx)(I,{data:t,open:Y,close:function(){return G(!1)}})]}):(0,S.jsx)(V.c,{})}var me=n.p+"static/media/primary-care-min.e5a88ea28249ebfe43b5.png";function fe(){return(0,S.jsx)(c.Z,{maxWidth:"md",sx:{display:"flex",height:"80vh",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:(0,S.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",maxWidth:"700px !important",borderRadius:"20px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 5px 15px","@media (max-width: 700px)":{maxWidth:"100%",padding:"25px"}},children:[(0,S.jsx)(w.Z,{variant:"h4",paragraph:!0,sx:{maxWidth:"70%",marginTop:"40px","@media (max-width: 700px)":{maxWidth:"100%"}},children:"Select a Doctor for Your Best Healthcare Experience"}),(0,S.jsx)(x.Z,{sx:{my:3},children:(0,S.jsx)("img",{src:me,alt:"Select Doctor",style:{width:"250px",maxWidth:"100%",display:"block",margin:"auto"}})}),(0,S.jsx)(w.Z,{variant:"body1",paragraph:!0,sx:{maxWidth:"70%","@media (max-width: 700px)":{maxWidth:"100%"}},children:"Selecting a doctor allows you to enjoy personalized care and manage your health more effectively. Click the button below to choose a doctor now."}),(0,S.jsx)(x.Z,{sx:{width:"100%",display:"flex",justifyContent:"center",margin:"40px 0"},children:(0,S.jsx)(k.Z,{variant:"contained",color:"primary",href:"/dashboard/primary-care/list",children:"Select a Provider"})})]})})}function Ze(){var e,t=(0,i.useContext)(p.Vo).user,n=(0,i.useState)(null),s=(0,o.Z)(n,2),c=s[0],l=s[1],d=(0,i.useState)(!0),u=(0,o.Z)(d,2),x=u[0],h=u[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le(null===t||void 0===t?void 0:t.userID,null===t||void 0===t?void 0:t.token);case 3:n=e.sent,l(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,h(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),e=x?(0,S.jsx)(V.c,{}):null!==c&&"object"===typeof c?(0,S.jsx)(pe,{data:c}):(0,S.jsx)(fe,{}),(0,S.jsx)(b.Z,{children:e})}},17070:function(e,t,n){n.d(t,{FK:function(){return o},e_:function(){return i},f2:function(){return s},oe:function(){return l},v1:function(){return c}});var r=n(26098),a=n.n(r);function o(e){return a()(e).format()}function i(e){return d(e?a()(e).format("GHc0,0.00"):"",".00")}function s(e){return d(e?a()(Number(e)/100).format("0.0%"):"",".0")}function c(e){return d(e?a()(e).format("0.00a"):"",".00")}function l(e){return d(e?a()(e).format("0.0 b"):"",".0")}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(t)?e.replace(t,""):e}},93517:function(e,t,n){n.d(t,{Z:function(){return W}});var r=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),c=n(72791),l=(n(57441),n(59278)),d=n(94419),u=n(19735),p=n(66934),x=n(31402),h=n(4567),m=n(12065),f=n(74223),Z=n(80184),v=(0,f.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=n(95080),j=["slots","slotProps"],y=(0,p.ZP)(g.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),b=(0,p.ZP)(v)({width:24,height:16});var w=function(e){var t=e.slots,n=void 0===t?{}:t,r=e.slotProps,a=void 0===r?{}:r,o=(0,s.Z)(e,j),c=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(y,(0,i.Z)({focusRipple:!0},o,{ownerState:c,children:(0,Z.jsx)(b,(0,i.Z)({as:n.CollapsedIcon,ownerState:c},a.collapsedIcon))}))})},k=n(75878),C=n(21217);function S(e){return(0,C.Z)("MuiBreadcrumbs",e)}var I=(0,k.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),N=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],A=(0,p.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(I.li),t.li),t.root]}})({}),P=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),T=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function D(e,t,n,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,Z.jsx)(T,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var W=c.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,p=n.className,h=n.component,m=void 0===h?"nav":h,f=n.slots,v=void 0===f?{}:f,g=n.slotProps,j=void 0===g?{}:g,y=n.expandText,b=void 0===y?"Show path":y,k=n.itemsAfterCollapse,C=void 0===k?1:k,I=n.itemsBeforeCollapse,T=void 0===I?1:I,W=n.maxItems,F=void 0===W?8:W,B=n.separator,z=void 0===B?"/":B,M=(0,s.Z)(n,N),E=c.useState(!1),L=(0,a.Z)(E,2),R=L[0],U=L[1],H=(0,i.Z)({},n,{component:m,expanded:R,expandText:b,itemsAfterCollapse:C,itemsBeforeCollapse:T,maxItems:F,separator:z}),V=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,t)}(H),O=(0,u.y)({elementType:v.CollapsedIcon,externalSlotProps:j.collapsedIcon,ownerState:H}),_=c.useRef(null),Y=c.Children.toArray(o).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,Z.jsx)("li",{className:V.li,children:e},"child-".concat(t))}));return(0,Z.jsx)(A,(0,i.Z)({ref:t,component:m,color:"text.secondary",className:(0,l.Z)(V.root,p),ownerState:H},M,{children:(0,Z.jsx)(P,{className:V.ol,ref:_,ownerState:H,children:D(R||F&&Y.length<=F?Y:function(e){return T+C>=e.length?e:[].concat((0,r.Z)(e.slice(0,T)),[(0,Z.jsx)(w,{"aria-label":b,slots:{CollapsedIcon:v.CollapsedIcon},slotProps:{collapsedIcon:O},onClick:function(){U(!0);var e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-C,e.length)))}(Y),V.separator,z,H)})}))}))}}]);
//# sourceMappingURL=6185.b54ed593.chunk.js.map