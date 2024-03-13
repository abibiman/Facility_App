"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[322],{50933:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(1413),o=t(45987),l=t(64554),a=t(50533),i=t(36314),s=t(4567),c=t(93517),d=t(83854),u=t(80184);function p(e){var n=e.link,t=e.activeLast,o=e.disabled,i=n.name,s=n.href,c=n.icon,p=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(l.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),i]});return s?(0,u.jsx)(a.Z,{component:d.r,href:s,sx:p,children:h}):(0,u.jsxs)(l.Z,{sx:p,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(e){var n=e.links,t=e.action,d=e.heading,m=e.moreLink,f=e.activeLast,Z=e.sx,g=(0,o.Z)(e,h),v=n[n.length-1].name;return(0,u.jsxs)(l.Z,{sx:(0,r.Z)({},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",sx:{"@media (max-width: 475px)":{flexDirection:"column"}},children:[(0,u.jsxs)(l.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(x,{})},g),{},{children:n.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(l.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,u.jsx)(l.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},90322:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(6907),o=t(29439),l=t(72791),a=t(64554),i=t(31976),s=t(43236),c=t(5849),d=t(82626),u=t(89164),p=t(13400),h=t(49900),m=t(76278),x=t(38072),f=t(40268),Z=t(50933),g=t(31562),v=t(80184),j=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],b=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function C(){var e=(0,l.useState)(1),n=(0,o.Z)(e,2),t=n[0],r=n[1],C=(0,l.useState)(null),k=(0,o.Z)(C,2),y=k[0],S=k[1],w=(0,l.useState)(null),P=(0,o.Z)(w,2),I=P[0],M=P[1],B=(0,l.useState)(null),L=(0,o.Z)(B,2),R=L[0],T=L[1],N=(0,l.useCallback)((function(e){T(e.currentTarget)}),[]),_=(0,l.useCallback)((function(e){M(e.currentTarget)}),[]),A=(0,l.useCallback)((function(e,n){r(n),M(null)}),[]),H=(0,l.useCallback)((function(e){S(e.currentTarget)}),[]),E=(0,l.useCallback)((function(){S(null)}),[]),z=(0,l.useCallback)((function(){T(null)}),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,v.jsx)(u.Z,{children:(0,v.jsx)(Z.Z,{heading:"Menu",links:[{name:"Components",href:x.H.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})})}),(0,v.jsx)(u.Z,{sx:{my:10},children:(0,v.jsxs)(a.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[(0,v.jsxs)(g.Z,{title:"Simple",children:[(0,v.jsx)(c.Z,{variant:"outlined",onClick:H,children:"Open Menu"}),(0,v.jsx)(i.Z,{id:"simple-menu",anchorEl:y,onClose:E,open:Boolean(y),children:["Profile","My account","Logout"].map((function(e){return(0,v.jsx)(d.Z,{selected:"Profile"===e,onClick:E,children:e},e)}))})]}),(0,v.jsxs)(g.Z,{title:"Selected",children:[(0,v.jsx)(s.Z,{component:"nav","aria-label":"Device settings",children:(0,v.jsx)(m.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:_,children:(0,v.jsx)(h.Z,{primary:"When device is locked",secondary:j[t]})})}),(0,v.jsx)(i.Z,{id:"lock-menu",anchorEl:I,onClose:E,open:Boolean(I),children:j.map((function(e,n){return(0,v.jsx)(d.Z,{disabled:0===n,selected:n===t,onClick:function(e){return A(e,n)},children:e},e)}))})]}),(0,v.jsxs)(g.Z,{title:"Max height",children:[(0,v.jsx)(p.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:N,children:(0,v.jsx)(f.Z,{icon:"eva:more-vertical-fill"})}),(0,v.jsx)(i.Z,{id:"long-menu",anchorEl:R,onClose:z,open:Boolean(R),slotProps:{paper:{sx:{width:"20ch",maxHeight:216}}},children:b.map((function(e){return(0,v.jsx)(d.Z,{selected:"Pyxis"===e,onClick:z,children:e},e)}))})]})]})})]})}function k(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.ql,{children:(0,v.jsx)("title",{children:" MUI: Accordion"})}),(0,v.jsx)(C,{})]})}},93517:function(e,n,t){t.d(n,{Z:function(){return T}});var r=t(93433),o=t(29439),l=t(4942),a=t(87462),i=t(63366),s=t(72791),c=(t(57441),t(59278)),d=t(94419),u=t(19735),p=t(66934),h=t(31402),m=t(4567),x=t(12065),f=t(74223),Z=t(80184),g=(0,f.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=t(95080),j=["slots","slotProps"],b=(0,p.ZP)(v.Z)((function(e){var n=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,x._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(n.palette.grey[600],.12)})})})),C=(0,p.ZP)(g)({width:24,height:16});var k=function(e){var n=e.slots,t=void 0===n?{}:n,r=e.slotProps,o=void 0===r?{}:r,l=(0,i.Z)(e,j),s=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(b,(0,a.Z)({focusRipple:!0},l,{ownerState:s,children:(0,Z.jsx)(C,(0,a.Z)({as:t.CollapsedIcon,ownerState:s},o.collapsedIcon))}))})},y=t(75878),S=t(21217);function w(e){return(0,S.Z)("MuiBreadcrumbs",e)}var P=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),I=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,p.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,l.Z)({},"& .".concat(P.li),n.li),n.root]}})({}),B=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),L=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,n,t,r){return e.reduce((function(o,l,a){return a<e.length-1?o=o.concat(l,(0,Z.jsx)(L,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(a))):o.push(l),o}),[])}var T=s.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),l=t.children,p=t.className,m=t.component,x=void 0===m?"nav":m,f=t.slots,g=void 0===f?{}:f,v=t.slotProps,j=void 0===v?{}:v,b=t.expandText,C=void 0===b?"Show path":b,y=t.itemsAfterCollapse,S=void 0===y?1:y,P=t.itemsBeforeCollapse,L=void 0===P?1:P,T=t.maxItems,N=void 0===T?8:T,_=t.separator,A=void 0===_?"/":_,H=(0,i.Z)(t,I),E=s.useState(!1),z=(0,o.Z)(E,2),D=z[0],F=z[1],O=(0,a.Z)({},t,{component:x,expanded:D,expandText:C,itemsAfterCollapse:S,itemsBeforeCollapse:L,maxItems:N,separator:A}),U=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,n)}(O),q=(0,u.y)({elementType:g.CollapsedIcon,externalSlotProps:j.collapsedIcon,ownerState:O}),G=s.useRef(null),W=s.Children.toArray(l).filter((function(e){return s.isValidElement(e)})).map((function(e,n){return(0,Z.jsx)("li",{className:U.li,children:e},"child-".concat(n))}));return(0,Z.jsx)(M,(0,a.Z)({ref:n,component:x,color:"text.secondary",className:(0,c.Z)(U.root,p),ownerState:O},H,{children:(0,Z.jsx)(B,{className:U.ol,ref:G,ownerState:O,children:R(D||N&&W.length<=N?W:function(e){return L+S>=e.length?e:[].concat((0,r.Z)(e.slice(0,L)),[(0,Z.jsx)(k,{"aria-label":C,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:q},onClick:function(){F(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-S,e.length)))}(W),U.separator,A,O)})}))}))}}]);
//# sourceMappingURL=322.1034a7f5.chunk.js.map