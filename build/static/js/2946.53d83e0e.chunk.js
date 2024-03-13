"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[2946],{2946:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(6907),r=n(64554),i=n(89164),s=n(4567),o=n(57062),l=n(1413),c=n(29439),u=n(45987),d=n(72791),h=n(12065),x=n(50533),p=n(36314),m=n(5849),f=n(94721),g=n(80237),Z=n(80160),j=n(40268),b=n(74165),v=n(15861),y=n(5574),w=n(65661),k=n(39157),S=n(48550),C=n(82626),D=n(97123),F=n(83314),P=n(75985),T=n(57459),W=n(2102),A=n(80184);function I(e){var t=e.price,n=e.openDialog,a=e.setOpenDialog,r=e.subscription,i=(0,d.useState)(""),o=(0,c.Z)(i,2),l=o[0],u=o[1],h=(0,d.useState)(""),x=(0,c.Z)(h,2),p=x[0],f=x[1],g=(0,d.useState)("1"),Z=(0,c.Z)(g,2),j=Z[0],I=Z[1],R=(0,d.useState)(j*t),_=(0,c.Z)(R,2),O=_[0],z=_[1],E=(0,d.useState)(r),L=(0,c.Z)(E,2),U=L[0],q=L[1],B=(0,d.useState)(""),N=(0,c.Z)(B,2),V=N[0],$=N[1],H=(0,d.useState)(""),K=(0,c.Z)(H,2),X=(K[0],K[1]),G=(0,d.useContext)(T.Vo).user,J=G||{},M=J.token,Q=J.userID,Y=(new Date).toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"}),ee=[{name:"1 month",value:1},{name:"3 months",value:3},{name:"6 months",value:6},{name:"12 months",value:12}],te=function(){return a(!1)},ne=function(){var e=(0,v.Z)((0,b.Z)().mark((function e(n){var a,r;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),G&&M&&Q){e.next=4;break}return console.error("User details are not available."),e.abrupt("return");case 4:return a={userID:Q,package:U,packageCost:t,packageDuration:j,amountPaid:O,paymentDate:Y,startDate:Y},e.prev=5,e.next=8,W.Z.post("/subscription",a);case 8:r=e.sent,console.log(r),(new F.Z).newTransaction({key:"pk_test_fbadd54b00942d1c274d2c3e1b447f5be9f02e85",amount:O,email:V,firstname:l,lastname:p,onSuccess:function(e){X(e),P.Am.success("Payment successful")}}),te(),u(""),f(""),I("1"),z(""),q(""),$(""),X(""),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[5,22]])})));return function(t){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){q(r)}),[r]),(0,d.useEffect)((function(){z(j*t)}),[j,t]),(0,A.jsxs)(y.Z,{open:!!n,onClose:te,children:[(0,A.jsx)(w.Z,{children:"Proceed to Payment"}),(0,A.jsxs)(k.Z,{children:[(0,A.jsx)(s.Z,{sx:{mb:3},children:"Please fill the form below"}),(0,A.jsx)(S.Z,{autoFocus:!0,fullWidth:!0,type:"text",margin:"dense",variant:"outlined",label:"First Name",value:l,onChange:function(e){return u(e.target.value)}}),(0,A.jsx)(S.Z,{autoFocus:!0,fullWidth:!0,type:"text",margin:"dense",variant:"outlined",label:"Last Name",value:p,onChange:function(e){return f(e.target.value)}}),(0,A.jsx)(S.Z,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address",value:V,onChange:function(e){return $(e.target.value)}}),(0,A.jsx)(S.Z,{autoFocus:!0,fullWidth:!0,type:"text",margin:"dense",variant:"outlined",sx:{textTransform:"capitalize"},value:U,readOnly:!0}),(0,A.jsx)(S.Z,{fullWidth:!0,select:!0,defaultValue:"Time",helperText:"Please select package duration",sx:{marginTop:1},value:j,onChange:function(e){return I(e.target.value)},children:ee.length>0&&ee.map((function(e,t){return(0,A.jsx)(C.Z,{value:e.value,children:e.name},t)}))}),(0,A.jsx)(S.Z,{autoFocus:!0,fullWidth:!0,type:"text",margin:"dense",helperText:"Amount to be paid",variant:"outlined",value:"$".concat(O)})]}),(0,A.jsx)(D.Z,{children:(0,A.jsx)(m.Z,{onClick:ne,variant:"contained",children:"Proceed"})})]})}var R=["card","sx"];function _(e){var t=e.card,n=e.sx,a=(0,u.Z)(e,R),i=t.subscription,o=t.price,b=t.caption,v=t.lists,y=t.labelAction,w=(0,d.useState)(!1),k=(0,c.Z)(w,2),S=k[0],C=k[1],D="basic"===i,F="starter"===i,P="premium"===i,T=(0,A.jsxs)(p.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,A.jsxs)(r.Z,{sx:{width:48,height:48},children:[D&&(0,A.jsx)(g.OC,{}),F&&(0,A.jsx)(g.Zk,{}),P&&(0,A.jsx)(g.Ku,{})]}),F&&(0,A.jsx)(Z.Z,{color:"info",children:"POPULAR"})]}),W=(0,A.jsxs)(p.Z,{spacing:1,children:[(0,A.jsx)(s.Z,{variant:"h4",sx:{textTransform:"capitalize"},children:i}),(0,A.jsx)(s.Z,{variant:"subtitle2",children:b})]}),_=D?(0,A.jsx)(s.Z,{variant:"h2",children:"Free"}):(0,A.jsxs)(p.Z,{direction:"row",children:[(0,A.jsx)(s.Z,{variant:"h4",children:"$"}),(0,A.jsx)(s.Z,{variant:"h2",children:o}),(0,A.jsx)(s.Z,{component:"span",sx:{alignSelf:"center",color:"text.disabled",ml:1,typography:"body2"},children:"/ mo"})]}),O=(0,A.jsxs)(p.Z,{spacing:2,children:[(0,A.jsxs)(p.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,A.jsx)(r.Z,{component:"span",sx:{typography:"overline"},children:"Features"}),(0,A.jsx)(x.Z,{variant:"body2",color:"inherit",underline:"always",children:"All"})]}),v.map((function(e){return(0,A.jsxs)(p.Z,{spacing:1,direction:"row",alignItems:"center",sx:{typography:"body2"},children:[(0,A.jsx)(j.Z,{icon:"eva:checkmark-fill",width:16,sx:{mr:1}}),e]},e)}))]});return(0,A.jsxs)(p.Z,(0,l.Z)((0,l.Z)({spacing:5,sx:(0,l.Z)((0,l.Z)((0,l.Z)({p:5,borderRadius:2,boxShadow:function(e){return{xs:e.customShadows.card,md:"none"}}},F&&{borderTopRightRadius:{md:0},borderBottomRightRadius:{md:0}}),(F||P)&&{boxShadow:function(e){return{xs:e.customShadows.card,md:"-40px 40px 80px 0px ".concat((0,h.Fq)("light"===e.palette.mode?e.palette.grey[500]:e.palette.common.black,.16))}}}),n)},a),{},{children:[T,W,_,(0,A.jsx)(f.Z,{sx:{borderStyle:"dashed"}}),O,(0,A.jsx)(m.Z,{fullWidth:!0,size:"large",variant:"contained",disabled:D,color:F?"primary":"inherit",onClick:function(){return C(!0)},children:y}),(0,A.jsx)(I,{openDialog:S,price:o,setOpenDialog:C,subscription:i})]}))}function O(){return(0,A.jsxs)(i.Z,{sx:{pt:15,pb:10,minHeight:1},children:[(0,A.jsxs)(s.Z,{variant:"h3",align:"center",sx:{mb:2},children:["Flexible plans for your",(0,A.jsx)("br",{})," ","community's size and needs"]}),(0,A.jsx)(s.Z,{align:"center",sx:{color:"text.secondary",marginBottom:"25px"},children:"Choose your plan and get the best of virtual healthcare"}),(0,A.jsx)(r.Z,{gap:{xs:3,md:0},display:"grid",alignItems:{md:"center"},gridTemplateColumns:{md:"repeat(2, 1fr)"},children:o.Xp.map((function(e,t){return(0,A.jsx)(_,{card:e,index:t},e.subscription)}))})]})}function z(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a.ql,{children:(0,A.jsx)("title",{children:" Pricing"})}),(0,A.jsx)(O,{})]})}}}]);
//# sourceMappingURL=2946.53d83e0e.chunk.js.map