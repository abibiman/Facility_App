"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[8880],{78880:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var i=r(6907),s=r(64554),l=r(89164),t=r(24308),a=r(4567),o=r(1413),c=r(45987),d=r(36314),x=r(5849),h=r(89891),p=r(94721),u=r(80160),j=r(40268),Z=r(80184),m=["sx"];function b(e){var n=e.sx,r=(0,c.Z)(e,m),i=(0,Z.jsxs)(d.Z,{direction:"row",justifyContent:"flex-end",children:[(0,Z.jsx)(a.Z,{variant:"h4",children:"$"}),(0,Z.jsx)(a.Z,{variant:"h2",children:"9.99"}),(0,Z.jsx)(a.Z,{component:"span",sx:{alignSelf:"center",color:"text.disabled",ml:1,typography:"body2"},children:"/ mo"})]});return(0,Z.jsxs)(s.Z,(0,o.Z)((0,o.Z)({sx:(0,o.Z)({p:5,borderRadius:2,bgcolor:"background.neutral"},n)},r),{},{children:[(0,Z.jsx)(a.Z,{variant:"h6",sx:{mb:5},children:"Summary"}),(0,Z.jsxs)(d.Z,{spacing:2.5,children:[(0,Z.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,Z.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Subscription"}),(0,Z.jsx)(u.Z,{color:"error",children:"PREMIUM"})]}),(0,Z.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,Z.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Billed Monthly"}),(0,Z.jsx)(h.Z,{defaultChecked:!0})]}),i,(0,Z.jsx)(p.Z,{sx:{borderStyle:"dashed"}}),(0,Z.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(a.Z,{variant:"subtitle1",children:"Total Billed"}),(0,Z.jsx)(a.Z,{variant:"subtitle1",children:"$9.99*"})]}),(0,Z.jsx)(p.Z,{sx:{borderStyle:"dashed"}})]}),(0,Z.jsx)(a.Z,{component:"div",variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),(0,Z.jsx)(x.Z,{fullWidth:!0,size:"large",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade My Plan"}),(0,Z.jsxs)(d.Z,{alignItems:"center",spacing:1,children:[(0,Z.jsxs)(d.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,Z.jsx)(j.Z,{icon:"solar:shield-check-bold",sx:{color:"success.main"}}),(0,Z.jsx)(a.Z,{variant:"subtitle2",children:"Secure credit card payment"})]}),(0,Z.jsx)(a.Z,{variant:"caption",sx:{color:"text.disabled",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]}))}var g=r(29439),y=r(72791),f=r(48550),v=r(49900),C=r(27938),w=r(22459),k=r(51975),S=["option","selected","isCredit","onOpen"],P=[{value:"paypal",label:"Paypal"},{value:"credit",label:"Credit / Debit Card"}],X=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}];function I(){var e=(0,w.k)(),n=(0,y.useState)("paypal"),r=(0,g.Z)(n,2),i=r[0],s=r[1],l=(0,y.useCallback)((function(e){s(e)}),[]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(d.Z,{spacing:5,children:[(0,Z.jsx)(a.Z,{variant:"h6",children:"Payment Method"}),(0,Z.jsx)(d.Z,{spacing:3,children:P.map((function(n){return(0,Z.jsx)(A,{option:n,selected:i===n.value,isCredit:"credit"===n.value&&"credit"===i,onOpen:e.onTrue,onClick:function(){return l(n.value)}},n.label)}))})]}),(0,Z.jsx)(k.Z,{open:e.value,onClose:e.onFalse})]})}function A(e){var n=e.option,r=e.selected,i=e.isCredit,l=e.onOpen,t=(0,c.Z)(e,S),a=n.value,h=n.label;return(0,Z.jsxs)(C.Z,(0,o.Z)((0,o.Z)({variant:"outlined",sx:(0,o.Z)({p:2.5,cursor:"pointer"},r&&{boxShadow:function(e){return"0 0 0 2px ".concat(e.palette.text.primary)}})},t),{},{children:[(0,Z.jsx)(v.Z,{primary:(0,Z.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[(0,Z.jsx)(j.Z,{icon:r?"eva:checkmark-circle-2-fill":"eva:radio-button-off-fill",width:24,sx:{mr:2,color:r?"primary.main":"text.secondary"}}),(0,Z.jsx)(s.Z,{component:"span",sx:{flexGrow:1},children:h}),(0,Z.jsxs)(d.Z,{spacing:1,direction:"row",alignItems:"center",children:["credit"===a&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Z,{icon:"logos:mastercard",width:24}),",",(0,Z.jsx)(j.Z,{icon:"logos:visa",width:24})]}),"paypal"===a&&(0,Z.jsx)(j.Z,{icon:"logos:paypal",width:24}),"cash"===a&&(0,Z.jsx)(j.Z,{icon:"solar:wad-of-money-bold",width:24})]})]}),primaryTypographyProps:{typography:"subtitle2"}}),i&&(0,Z.jsxs)(d.Z,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[(0,Z.jsx)(f.Z,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:X.map((function(e){return(0,Z.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,Z.jsx)(x.Z,{size:"small",color:"primary",startIcon:(0,Z.jsx)(j.Z,{icon:"mingcute:add-line"}),onClick:l,children:"Add New Card"})]})]}),a)}function W(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(a.Z,{variant:"h6",children:"Billing Address"}),(0,Z.jsxs)(d.Z,{spacing:3,mt:5,children:[(0,Z.jsx)(f.Z,{fullWidth:!0,label:"Person name"}),(0,Z.jsx)(f.Z,{fullWidth:!0,label:"Phone number"}),(0,Z.jsx)(f.Z,{fullWidth:!0,label:"Email"}),(0,Z.jsx)(f.Z,{fullWidth:!0,label:"Address"})]})]})}function L(){return(0,Z.jsxs)(l.Z,{sx:{pt:15,pb:10,minHeight:1},children:[(0,Z.jsx)(a.Z,{variant:"h3",align:"center",sx:{mb:2},children:"Let's finish powering you up!"}),(0,Z.jsx)(a.Z,{align:"center",sx:{color:"text.secondary",mb:5},children:"Professional plan is right for you."}),(0,Z.jsxs)(t.Z,{container:!0,rowSpacing:{xs:5,md:0},columnSpacing:{xs:0,md:5},children:[(0,Z.jsx)(t.Z,{xs:12,md:8,children:(0,Z.jsxs)(s.Z,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:{md:5},borderRadius:2,border:function(e){return{md:"dashed 1px ".concat(e.palette.divider)}}},children:[(0,Z.jsx)(W,{}),(0,Z.jsx)(I,{})]})}),(0,Z.jsx)(t.Z,{xs:12,md:4,children:(0,Z.jsx)(b,{})})]})]})}function M(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(i.ql,{children:(0,Z.jsx)("title",{children:" Payment"})}),(0,Z.jsx)(L,{})]})}},51975:function(e,n,r){r.d(n,{Z:function(){return b}});var i=r(1413),s=r(45987),l=r(36314),t=r(5849),a=r(48550),o=r(13400),c=r(65661),d=r(97123),x=r(39157),h=r(63466),p=r(5574),u=r(40268),j=r(52115),Z=r(80184),m=["onClose"];function b(e){var n=e.onClose,r=(0,s.Z)(e,m),b=(0,j.S)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(p.Z,(0,i.Z)((0,i.Z)({maxWidth:"sm",onClose:n},r),{},{children:[(0,Z.jsx)(c.Z,{children:" New Card "}),(0,Z.jsx)(x.Z,{sx:{overflow:"unset"},children:(0,Z.jsxs)(l.Z,{spacing:2.5,children:[(0,Z.jsx)(a.Z,{autoFocus:!0,label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX",InputLabelProps:{shrink:!0}}),(0,Z.jsx)(a.Z,{label:"Card Holder",placeholder:"JOHN DOE",InputLabelProps:{shrink:!0}}),(0,Z.jsxs)(l.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(a.Z,{label:"Expiration Date",placeholder:"MM/YY",InputLabelProps:{shrink:!0}}),(0,Z.jsx)(a.Z,{label:"CVV/CVC",placeholder:"***",InputLabelProps:{shrink:!0},InputProps:{endAdornment:(0,Z.jsx)(h.Z,{position:"end",children:(0,Z.jsx)(o.Z,{size:"small",edge:"end",onClick:b.onOpen,children:(0,Z.jsx)(u.Z,{icon:"eva:info-outline"})})})}})]}),(0,Z.jsxs)(l.Z,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[(0,Z.jsx)(u.Z,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(t.Z,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"}),(0,Z.jsx)(t.Z,{variant:"contained",onClick:n,children:"Add"})]})]})),(0,Z.jsx)(j.Z,{open:b.open,onClose:b.onClose,arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}}}]);
//# sourceMappingURL=8880.6ca985d6.chunk.js.map