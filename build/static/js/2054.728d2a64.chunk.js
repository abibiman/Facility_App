"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[2054],{24233:function(e,n,o){o.d(n,{GV:function(){return g},gq:function(){return F},ab:function(){return z},un:function(){return R}});var r=o(12065),i=o(64554),t=o(27938),s=o(4567),l=o(17070),a=o(18197),c=o(80184);function d(e){var n=e.fileRejections;return n.length?(0,c.jsx)(t.Z,{variant:"outlined",sx:{py:1,px:2,mt:3,textAlign:"left",borderStyle:"dashed",borderColor:"error.main",bgcolor:function(e){return(0,r.Fq)(e.palette.error.main,.08)}},children:n.map((function(e){var n=e.file,o=e.errors,r=(0,a.ht)(n),t=r.path,d=r.size;return(0,c.jsxs)(i.Z,{sx:{my:1},children:[(0,c.jsxs)(s.Z,{variant:"subtitle2",noWrap:!0,children:[t," - ",d?(0,l.oe)(d):""]}),o.map((function(e){return(0,c.jsxs)(i.Z,{component:"span",sx:{typography:"caption"},children:["- ",e.message]},e.code)}))]},t)}))}):null}var u=o(1413),p=o(83791),x=o(45358),h=o(36314),f=o(13400),Z=o(49900),m=o(40268),j=o(82486);function g(e){var n=e.thumbnail,o=e.files,i=e.onRemove,t=e.sx;return(0,c.jsx)(p.M,{initial:!1,children:null===o||void 0===o?void 0:o.map((function(e){var o=(0,a.ht)(e),s=o.key,d=o.name,p=void 0===d?"":d,g=o.size,v=void 0===g?0:g,b="string"===typeof e;return n?(0,c.jsxs)(h.Z,(0,u.Z)((0,u.Z)({component:x.m.div},(0,j.EU)().inUp),{},{alignItems:"center",display:"inline-flex",justifyContent:"center",sx:(0,u.Z)({m:.5,width:80,height:80,borderRadius:1.25,overflow:"hidden",position:"relative",border:function(e){return"solid 1px ".concat((0,r.Fq)(e.palette.grey[500],.16))}},t),children:[(0,c.jsx)(a.ZP,{tooltip:!0,imageView:!0,file:e,sx:{position:"absolute"},imgSx:{position:"absolute"}}),i&&(0,c.jsx)(f.Z,{size:"small",onClick:function(){return i(e)},sx:{p:.5,top:4,right:4,position:"absolute",color:"common.white",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[900],.48)},"&:hover":{bgcolor:function(e){return(0,r.Fq)(e.palette.grey[900],.72)}}},children:(0,c.jsx)(m.Z,{icon:"mingcute:close-line",width:14})})]}),s):(0,c.jsxs)(h.Z,(0,u.Z)((0,u.Z)({component:x.m.div},(0,j.EU)().inUp),{},{spacing:2,direction:"row",alignItems:"center",sx:(0,u.Z)({my:1,py:1,px:1.5,borderRadius:1,border:function(e){return"solid 1px ".concat((0,r.Fq)(e.palette.grey[500],.16))}},t),children:[(0,c.jsx)(a.ZP,{file:e}),(0,c.jsx)(Z.Z,{primary:b?e:p,secondary:b?"":(0,l.oe)(v),secondaryTypographyProps:{component:"span",typography:"caption"}}),i&&(0,c.jsx)(f.Z,{size:"small",onClick:function(){return i(e)},children:(0,c.jsx)(m.Z,{icon:"mingcute:close-line",width:16})})]}),s)}))})}var v=o(9546),b=o(45987),y=o(80788),C=o(5849),w=o(3597),k=["disabled","multiple","error","helperText","file","onDelete","files","thumbnail","onUpload","onRemove","onRemoveAll","sx"];function F(e){var n=e.disabled,o=e.multiple,t=void 0!==o&&o,l=e.error,a=e.helperText,p=e.file,x=e.onDelete,Z=e.files,j=e.thumbnail,F=e.onUpload,I=e.onRemove,R=e.onRemoveAll,T=e.sx,S=(0,b.Z)(e,k),z=(0,y.uI)((0,u.Z)({multiple:t,disabled:n},S)),D=z.getRootProps,P=z.getInputProps,q=z.isDragActive,U=z.isDragReject,E=z.fileRejections,A=!!p&&!t,W=!!Z&&t&&!!Z.length,L=U||!!l,O=(0,c.jsxs)(h.Z,{spacing:3,alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:[(0,c.jsx)(w.A2,{sx:{width:1,maxWidth:200}}),(0,c.jsxs)(h.Z,{spacing:1,sx:{textAlign:"center"},children:[(0,c.jsx)(s.Z,{variant:"h6",children:"Drop or Select file"}),(0,c.jsxs)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click",(0,c.jsx)(i.Z,{component:"span",sx:{mx:.5,color:"primary.main",textDecoration:"underline"},children:"browse"}),"thorough your machine"]})]})]}),N=(0,c.jsx)(v.Z,{imgUrl:"string"===typeof p?p:null===p||void 0===p?void 0:p.preview}),_=A&&x&&(0,c.jsx)(f.Z,{size:"small",onClick:x,sx:{top:16,right:16,zIndex:9,position:"absolute",color:function(e){return(0,r.Fq)(e.palette.common.white,.8)},bgcolor:function(e){return(0,r.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,r.Fq)(e.palette.grey[900],.48)}}},children:(0,c.jsx)(m.Z,{icon:"mingcute:close-line",width:18})}),G=W&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{sx:{my:3},children:(0,c.jsx)(g,{files:Z,thumbnail:j,onRemove:I})}),(0,c.jsxs)(h.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[R&&(0,c.jsx)(C.Z,{color:"inherit",variant:"outlined",size:"small",onClick:R,children:"Remove All"}),F&&(0,c.jsx)(C.Z,{size:"small",variant:"contained",onClick:F,startIcon:(0,c.jsx)(m.Z,{icon:"eva:cloud-upload-fill"}),children:"Upload"})]})]});return(0,c.jsxs)(i.Z,{sx:(0,u.Z)({width:1,position:"relative"},T),children:[(0,c.jsxs)(i.Z,(0,u.Z)((0,u.Z)({},D()),{},{sx:(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({p:5,outline:"none",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.08)},border:function(e){return"1px dashed ".concat((0,r.Fq)(e.palette.grey[500],.2))},transition:function(e){return e.transitions.create(["opacity","padding"])},"&:hover":{opacity:.72}},q&&{opacity:.72}),n&&{opacity:.48,pointerEvents:"none"}),L&&{color:"error.main",borderColor:"error.main",bgcolor:function(e){return(0,r.Fq)(e.palette.error.main,.08)}}),A&&{padding:"24% 0"}),children:[(0,c.jsx)("input",(0,u.Z)({},P())),A?N:O]})),_,a&&a,(0,c.jsx)(d,{fileRejections:E}),G]})}var I=["placeholder","error","disabled","sx"];function R(e){var n=e.placeholder,o=e.error,t=e.disabled,s=e.sx,l=(0,b.Z)(e,I),a=(0,y.uI)((0,u.Z)({disabled:t},l)),d=a.getRootProps,p=a.getInputProps,x=a.isDragActive,h=a.isDragReject||o;return(0,c.jsxs)(i.Z,(0,u.Z)((0,u.Z)({},d()),{},{sx:(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({m:.5,width:64,height:64,flexShrink:0,display:"flex",borderRadius:1,cursor:"pointer",alignItems:"center",color:"text.disabled",justifyContent:"center",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.08)},border:function(e){return"dashed 1px ".concat((0,r.Fq)(e.palette.grey[500],.16))}},x&&{opacity:.72}),t&&{opacity:.48,pointerEvents:"none"}),h&&{color:"error.main",borderColor:"error.main",bgcolor:function(e){return(0,r.Fq)(e.palette.error.main,.08)}}),{},{"&:hover":{opacity:.72}},s),children:[(0,c.jsx)("input",(0,u.Z)({},p())),n||(0,c.jsx)(m.Z,{icon:"eva:cloud-upload-fill",width:28})]}))}var T=o(32471),S=["error","file","disabled","helperText","sx"];function z(e){var n=e.error,o=e.file,t=e.disabled,l=e.helperText,a=e.sx,p=(0,b.Z)(e,S),x=(0,y.uI)((0,u.Z)({multiple:!1,disabled:t,accept:{"image/*":[]}},p)),f=x.getRootProps,Z=x.getInputProps,j=x.isDragActive,g=x.isDragReject,v=x.fileRejections,C=!!o,w=g||!!n,k="string"===typeof o?o:null===o||void 0===o?void 0:o.preview,F=C&&(0,c.jsx)(T.Z,{alt:"avatar",src:k,sx:{width:1,height:1,borderRadius:"50%"}}),I=(0,c.jsxs)(h.Z,{alignItems:"center",justifyContent:"center",spacing:1,className:"upload-placeholder",sx:(0,u.Z)((0,u.Z)({top:0,left:0,width:1,height:1,zIndex:9,borderRadius:"50%",position:"absolute",color:"text.disabled",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.08)},transition:function(e){return e.transitions.create(["opacity"],{duration:e.transitions.duration.shorter})},"&:hover":{opacity:.72}},w&&{color:"error.main",bgcolor:function(e){return(0,r.Fq)(e.palette.error.main,.08)}}),C&&{zIndex:9,opacity:0,color:"common.white",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[900],.64)}}),children:[(0,c.jsx)(m.Z,{icon:"solar:camera-add-bold",width:32}),(0,c.jsx)(s.Z,{variant:"caption",children:o?"Update photo":"Upload photo"})]}),R=(0,c.jsxs)(i.Z,{sx:{width:1,height:1,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[F,I]});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.Z,(0,u.Z)((0,u.Z)({},f()),{},{sx:(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({p:1,m:"auto",width:144,height:144,cursor:"pointer",overflow:"hidden",borderRadius:"50%",border:function(e){return"1px dashed ".concat((0,r.Fq)(e.palette.grey[500],.2))}},j&&{opacity:.72}),t&&{opacity:.48,pointerEvents:"none"}),w&&{borderColor:"error.main"}),C&&(0,u.Z)((0,u.Z)({},w&&{bgcolor:function(e){return(0,r.Fq)(e.palette.error.main,.08)}}),{},{"&:hover .upload-placeholder":{opacity:1}})),a),children:[(0,c.jsx)("input",(0,u.Z)({},Z())),R]})),l&&l,(0,c.jsx)(d,{fileRejections:v})]})}},9546:function(e,n,o){o.d(n,{Z:function(){return s}});var r=o(64554),i=o(32471),t=o(80184);function s(e){var n=e.imgUrl,o=void 0===n?"":n;return(0,t.jsx)(r.Z,{sx:{p:1,top:0,left:0,width:1,height:1,position:"absolute"},children:(0,t.jsx)(i.Z,{alt:"file preview",src:o,sx:{width:1,height:1,borderRadius:1}})})}},17914:function(e,n,o){o.d(n,{m:function(){return l}});var r=o(74165),i=o(15861),t=o(29439),s=o(72791);function l(){var e=(0,s.useState)(null),n=(0,t.Z)(e,2),o=n[0],l=n[1],a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(o=navigator)&&void 0!==o&&o.clipboard){e.next=3;break}return console.warn("Clipboard not supported"),e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,navigator.clipboard.writeText(n);case 6:return l(n),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),console.warn("Copy failed",e.t0),l(null),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}();return{copiedText:o,copy:a}}},30946:function(e,n,o){o.d(n,{Z:function(){return R}});var r=o(1413),i=o(29439),t=o(45987),s=o(72791),l=o(64554),a=o(85771),c=o(36314),d=o(5849),u=o(94721),p=o(13034),x=o(48550),h=o(13400),f=o(4567),Z=o(46314),m=o(88654),j=o(17070),g=o(9145),v=o(22459),b=o(40268),y=o(47974),C=o(18197),w=o(20763),k=o(98909),F=o(80184),I=["item","open","favorited","onFavorite","onCopyLink","onClose","onDelete"];function R(e){var n=e.item,o=e.open,R=e.favorited,T=e.onFavorite,S=e.onCopyLink,z=e.onClose,D=e.onDelete,P=(0,t.Z)(e,I),q=n.name,U=n.size,E=n.url,A=n.type,W=n.shared,L=n.modifiedAt,O=W&&!!W.length,N=(0,v.k)(!0),_=(0,v.k)(),G=(0,v.k)(!0),M=(0,s.useState)(""),V=(0,i.Z)(M,2),H=V[0],B=V[1],K=(0,s.useState)(n.tags.slice(0,3)),Q=(0,i.Z)(K,2),$=Q[0],J=Q[1],X=(0,s.useCallback)((function(e){B(e.target.value)}),[]),Y=(0,s.useCallback)((function(e){J(e)}),[]),ee=(0,F.jsxs)(c.Z,{spacing:1.5,children:[(0,F.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{typography:"subtitle2"},children:["Tags",(0,F.jsx)(h.Z,{size:"small",onClick:N.onToggle,children:(0,F.jsx)(b.Z,{icon:N.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})]}),N.value&&(0,F.jsx)(Z.Z,{multiple:!0,freeSolo:!0,options:n.tags.map((function(e){return e})),getOptionLabel:function(e){return e},defaultValue:n.tags.slice(0,3),value:$,onChange:function(e,n){Y(n)},renderOption:function(e,n){return(0,s.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:n}),n)},renderTags:function(e,n){return e.map((function(e,o){return(0,s.createElement)(a.Z,(0,r.Z)((0,r.Z)({},n({index:o})),{},{size:"small",variant:"soft",label:e,key:e}))}))},renderInput:function(e){return(0,F.jsx)(x.Z,(0,r.Z)((0,r.Z)({},e),{},{placeholder:"#Add a tags"}))}})]}),ne=(0,F.jsxs)(c.Z,{spacing:1.5,children:[(0,F.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{typography:"subtitle2"},children:["Properties",(0,F.jsx)(h.Z,{size:"small",onClick:G.onToggle,children:(0,F.jsx)(b.Z,{icon:G.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})]}),G.value&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(c.Z,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[(0,F.jsx)(l.Z,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Size"}),(0,j.oe)(U)]}),(0,F.jsxs)(c.Z,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[(0,F.jsx)(l.Z,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Modified"}),(0,g.zM)(L)]}),(0,F.jsxs)(c.Z,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[(0,F.jsx)(l.Z,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Type"}),(0,C.fH)(A)]})]})]}),oe=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[(0,F.jsx)(f.Z,{variant:"subtitle2",children:" File Share With "}),(0,F.jsx)(h.Z,{size:"small",color:"primary",onClick:_.onTrue,sx:{width:24,height:24,bgcolor:"primary.main",color:"primary.contrastText","&:hover":{bgcolor:"primary.dark"}},children:(0,F.jsx)(b.Z,{icon:"mingcute:add-line"})})]}),O&&(0,F.jsx)(l.Z,{sx:{pl:2.5,pr:1},children:W.map((function(e){return(0,F.jsx)(k.Z,{person:e},e.id)}))})]});return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(m.ZP,(0,r.Z)((0,r.Z)({open:o,onClose:z,anchor:"right",slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}}},P),{},{children:[(0,F.jsxs)(y.Z,{sx:{height:1},children:[(0,F.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[(0,F.jsx)(f.Z,{variant:"h6",children:" Info "}),(0,F.jsx)(p.Z,{color:"warning",icon:(0,F.jsx)(b.Z,{icon:"eva:star-outline"}),checkedIcon:(0,F.jsx)(b.Z,{icon:"eva:star-fill"}),checked:R,onChange:T})]}),(0,F.jsxs)(c.Z,{spacing:2.5,justifyContent:"center",sx:{p:2.5,bgcolor:"background.neutral"},children:[(0,F.jsx)(C.ZP,{imageView:!0,file:"folder"===A?A:E,sx:{width:64,height:64},imgSx:{borderRadius:1}}),(0,F.jsx)(f.Z,{variant:"subtitle1",sx:{wordBreak:"break-all"},children:q}),(0,F.jsx)(u.Z,{sx:{borderStyle:"dashed"}}),ee,ne]}),oe]}),(0,F.jsx)(l.Z,{sx:{p:2.5},children:(0,F.jsx)(d.Z,{fullWidth:!0,variant:"soft",color:"error",size:"large",startIcon:(0,F.jsx)(b.Z,{icon:"solar:trash-bin-trash-bold"}),onClick:D,children:"Delete"})})]})),(0,F.jsx)(w.Z,{open:_.value,shared:W,inviteEmail:H,onChangeInvite:X,onCopyLink:S,onClose:function(){_.onFalse(),B("")}})]})}},74471:function(e,n,o){o.d(n,{Z:function(){return D}});var r=o(1413),i=o(4942),t=o(29439),s=o(45987),l=o(72791),a=o(64554),c=o(27938),d=o(36314),u=o(5849),p=o(60220),x=o(94721),h=o(82626),f=o(13034),Z=o(13400),m=o(49900),j=o(76348),g=o(5951),v=o(22459),b=o(17914),y=o(17070),C=o(40268),w=o(32869),k=o(3352),F=o(52115),I=o(20763),R=o(30946),T=o(33991),S=o(80184),z=["folder","selected","onSelect","onDelete","sx"];function D(e){var n,o,D=e.folder,P=e.selected,q=e.onSelect,U=e.onDelete,E=e.sx,A=(0,s.Z)(e,z),W=(0,w.Ds)().enqueueSnackbar,L=(0,b.m)().copy,O=(0,l.useState)(""),N=(0,t.Z)(O,2),_=N[0],G=N[1],M=(0,l.useState)(D.name),V=(0,t.Z)(M,2),H=V[0],B=V[1],K=(0,v.k)(),Q=(0,v.k)(),$=(0,v.k)(),J=(0,F.S)(),X=(0,v.k)(),Y=(0,v.k)(),ee=(0,v.k)(D.isFavorited),ne=(0,l.useCallback)((function(e){G(e.target.value)}),[]),oe=(0,l.useCallback)((function(e){B(e.target.value)}),[]),re=(0,l.useCallback)((function(){W("Copied!"),L(D.url)}),[L,W,D.url]),ie=(0,S.jsxs)(d.Z,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[(0,S.jsx)(f.Z,{color:"warning",icon:(0,S.jsx)(C.Z,{icon:"eva:star-outline"}),checkedIcon:(0,S.jsx)(C.Z,{icon:"eva:star-fill"}),checked:ee.value,onChange:ee.onToggle}),(0,S.jsx)(Z.Z,{color:J.open?"inherit":"default",onClick:J.onOpen,children:(0,S.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})]}),te=(Q.value||P)&&q?(0,S.jsx)(f.Z,{size:"medium",checked:P,onClick:q,icon:(0,S.jsx)(C.Z,{icon:"eva:radio-button-off-fill"}),checkedIcon:(0,S.jsx)(C.Z,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):(0,S.jsx)(a.Z,{component:"img",src:"/assets/icons/files/ic_folder.svg",sx:{width:36,height:36}}),se=(0,S.jsx)(m.Z,{onClick:Y.onTrue,primary:D.name,secondary:(0,S.jsxs)(S.Fragment,{children:[(0,y.oe)(D.size),(0,S.jsx)(a.Z,{component:"span",sx:{mx:.75,width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),D.totalFiles," files"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,component:"span",alignItems:"center",typography:"caption",color:"text.disabled",display:"inline-flex"}}),le=(0,S.jsx)(j.Z,{max:3,sx:(0,i.Z)({},"& .".concat(g.Z.avatar),{width:24,height:24,"&:first-of-type":{fontSize:12}}),children:null===(n=D.shared)||void 0===n?void 0:n.map((function(e){return(0,S.jsx)(p.Z,{alt:e.name,src:e.avatarUrl},e.id)}))});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(d.Z,(0,r.Z)((0,r.Z)({component:c.Z,variant:"outlined",spacing:1,alignItems:"flex-start",sx:(0,r.Z)((0,r.Z)({p:2.5,maxWidth:222,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative"},(Q.value||P)&&{bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}),E)},A),{},{children:[(0,S.jsx)(a.Z,{onMouseEnter:Q.onTrue,onMouseLeave:Q.onFalse,children:te}),ie,se,!(null===D||void 0===D||null===(o=D.shared)||void 0===o||!o.length)&&le]})),(0,S.jsxs)(F.Z,{open:J.open,onClose:J.onClose,arrow:"right-top",sx:{width:160},children:[(0,S.jsxs)(h.Z,{onClick:function(){J.onClose(),re()},children:[(0,S.jsx)(C.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,S.jsxs)(h.Z,{onClick:function(){J.onClose(),$.onTrue()},children:[(0,S.jsx)(C.Z,{icon:"solar:share-bold"}),"Share"]}),(0,S.jsxs)(h.Z,{onClick:function(){J.onClose(),K.onTrue()},children:[(0,S.jsx)(C.Z,{icon:"solar:pen-bold"}),"Edit"]}),(0,S.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,S.jsxs)(h.Z,{onClick:function(){X.onTrue(),J.onClose()},sx:{color:"error.main"},children:[(0,S.jsx)(C.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),(0,S.jsx)(R.Z,{item:D,favorited:ee.value,onFavorite:ee.onToggle,onCopyLink:re,open:Y.value,onClose:Y.onFalse,onDelete:function(){Y.onFalse(),U()}}),(0,S.jsx)(I.Z,{open:$.value,shared:D.shared,inviteEmail:_,onChangeInvite:ne,onCopyLink:re,onClose:function(){$.onFalse(),G("")}}),(0,S.jsx)(T.Z,{open:K.value,onClose:K.onFalse,title:"Edit Folder",onUpdate:function(){K.onFalse(),B(H),console.info("UPDATE FOLDER",H)},folderName:H,onChangeFolderName:oe}),(0,S.jsx)(k.Q,{open:X.value,onClose:X.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,S.jsx)(u.Z,{variant:"contained",color:"error",onClick:U,children:"Delete"})})]})}},98909:function(e,n,o){o.d(n,{Z:function(){return Z}});var r=o(1413),i=o(29439),t=o(72791),s=o(5849),l=o(60220),a=o(94721),c=o(20068),d=o(45484),u=o(82626),p=o(49900),x=o(40268),h=o(52115),f=o(80184);function Z(e){var n=e.person,o=(0,t.useState)(n.permission),Z=(0,i.Z)(o,2),m=Z[0],j=Z[1],g=(0,h.S)(),v=(0,t.useCallback)((function(e){j(e)}),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(d.ZP,{sx:{px:0,py:1},children:[(0,f.jsx)(l.Z,{alt:n.name,src:n.avatarUrl,sx:{mr:2}}),(0,f.jsx)(p.Z,{primary:n.name,secondary:(0,f.jsx)(c.Z,{title:n.email,children:(0,f.jsx)("span",{children:n.email})}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span"},sx:{flexGrow:1,pr:1}}),(0,f.jsxs)(s.Z,{size:"small",color:"inherit",endIcon:(0,f.jsx)(x.Z,{width:20,icon:g.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-1}}),onClick:g.onOpen,sx:(0,r.Z)({flexShrink:0},g.open&&{bgcolor:"action.selected"}),children:["Can ",m]})]}),(0,f.jsx)(h.Z,{open:g.open,onClose:g.onClose,sx:{width:160},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(u.Z,{selected:"view"===m,onClick:function(){g.onClose(),v("view")},children:[(0,f.jsx)(x.Z,{icon:"solar:eye-bold"}),"Can view"]}),(0,f.jsxs)(u.Z,{selected:"edit"===m,onClick:function(){g.onClose(),v("edit")},children:[(0,f.jsx)(x.Z,{icon:"solar:pen-bold"}),"Can edit"]}),(0,f.jsx)(a.Z,{sx:{borderStyle:"dashed"}}),(0,f.jsxs)(u.Z,{onClick:function(){g.onClose()},sx:{color:"error.main"},children:[(0,f.jsx)(x.Z,{icon:"solar:trash-bin-trash-bold"}),"Remove"]})]})})]})}},33991:function(e,n,o){o.d(n,{Z:function(){return g}});var r=o(1413),i=o(93433),t=o(29439),s=o(45987),l=o(72791),a=o(36314),c=o(5849),d=o(48550),u=o(65661),p=o(97123),x=o(39157),h=o(5574),f=o(40268),Z=o(24233),m=o(80184),j=["title","open","onClose","onCreate","onUpdate","folderName","onChangeFolderName"];function g(e){var n=e.title,o=void 0===n?"Upload Files":n,g=e.open,v=e.onClose,b=e.onCreate,y=e.onUpdate,C=e.folderName,w=e.onChangeFolderName,k=(0,s.Z)(e,j),F=(0,l.useState)([]),I=(0,t.Z)(F,2),R=I[0],T=I[1];(0,l.useEffect)((function(){g||T([])}),[g]);var S=(0,l.useCallback)((function(e){var n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));T([].concat((0,i.Z)(R),(0,i.Z)(n)))}),[R]);return(0,m.jsxs)(h.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,maxWidth:"sm",open:g,onClose:v},k),{},{children:[(0,m.jsxs)(u.Z,{sx:{p:function(e){return e.spacing(3,3,2,3)}},children:[" ",o," "]}),(0,m.jsxs)(x.Z,{dividers:!0,sx:{pt:1,pb:0,border:"none"},children:[(b||y)&&(0,m.jsx)(d.Z,{fullWidth:!0,label:"Folder name",value:C,onChange:w,sx:{mb:3}}),(0,m.jsx)(Z.gq,{multiple:!0,files:R,onDrop:S,onRemove:function(e){var n=R.filter((function(n){return n!==e}));T(n)}})]}),(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(c.Z,{variant:"contained",startIcon:(0,m.jsx)(f.Z,{icon:"eva:cloud-upload-fill"}),onClick:function(){v(),console.info("ON UPLOAD")},children:"Upload"}),!!R.length&&(0,m.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:function(){T([])},children:"Remove all"}),(b||y)&&(0,m.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",flexGrow:1,children:(0,m.jsx)(c.Z,{variant:"soft",onClick:b||y,children:y?"Save":"Create"})})]})]}))}},64600:function(e,n,o){o.d(n,{Z:function(){return h}});var r=o(1413),i=o(45987),t=o(64554),s=o(5849),l=o(13400),a=o(4567),c=o(36314),d=o(83854),u=o(40268),p=o(80184),x=["title","subTitle","link","onOpen","collapse","onCollapse","sx"];function h(e){var n=e.title,o=e.subTitle,h=e.link,f=e.onOpen,Z=e.collapse,m=e.onCollapse,j=e.sx,g=(0,i.Z)(e,x);return(0,p.jsxs)(c.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",sx:(0,r.Z)({mb:3},j)},g),{},{children:[(0,p.jsxs)(c.Z,{flexGrow:1,children:[(0,p.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:1,flexGrow:1,children:[(0,p.jsxs)(a.Z,{variant:"h6",children:[" ",n," "]}),(0,p.jsx)(l.Z,{size:"small",color:"primary",onClick:f,sx:{width:24,height:24,bgcolor:"primary.main",color:"primary.contrastText","&:hover":{bgcolor:"primary.dark"}},children:(0,p.jsx)(u.Z,{icon:"mingcute:add-line"})})]}),(0,p.jsx)(t.Z,{sx:{typography:"body2",color:"text.disabled",mt:.5},children:o})]}),h&&(0,p.jsx)(s.Z,{href:h,component:d.r,size:"small",color:"inherit",endIcon:(0,p.jsx)(u.Z,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"}),m&&(0,p.jsx)(l.Z,{onClick:m,children:(0,p.jsx)(u.Z,{icon:Z?"eva:arrow-ios-downward-fill":"eva:arrow-ios-upward-fill"})})]}))}},20763:function(e,n,o){o.d(n,{Z:function(){return j}});var r=o(1413),i=o(45987),t=o(43236),s=o(5849),l=o(48550),a=o(65661),c=o(97123),d=o(39157),u=o(63466),p=o(5574),x=o(40268),h=o(47974),f=o(98909),Z=o(80184),m=["shared","inviteEmail","onCopyLink","onChangeInvite","open","onClose"];function j(e){var n=e.shared,o=e.inviteEmail,j=e.onCopyLink,g=e.onChangeInvite,v=e.open,b=e.onClose,y=(0,i.Z)(e,m),C=n&&!!n.length;return(0,Z.jsxs)(p.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,maxWidth:"xs",open:v,onClose:b},y),{},{children:[(0,Z.jsx)(a.Z,{children:" Invite "}),(0,Z.jsxs)(d.Z,{sx:{overflow:"unset"},children:[g&&(0,Z.jsx)(l.Z,{fullWidth:!0,value:o,placeholder:"Email",onChange:g,InputProps:{endAdornment:(0,Z.jsx)(u.Z,{position:"end",children:(0,Z.jsx)(s.Z,{color:"inherit",variant:"contained",disabled:!o,sx:{mr:-.75},children:"Send Invite"})})},sx:{mb:2}}),C&&(0,Z.jsx)(h.Z,{sx:{maxHeight:360},children:(0,Z.jsx)(t.Z,{disablePadding:!0,children:n.map((function(e){return(0,Z.jsx)(f.Z,{person:e},e.id)}))})})]}),(0,Z.jsxs)(c.Z,{sx:{justifyContent:"space-between"},children:[j&&(0,Z.jsx)(s.Z,{startIcon:(0,Z.jsx)(x.Z,{icon:"eva:link-2-fill"}),onClick:j,children:"Copy link"}),b&&(0,Z.jsx)(s.Z,{variant:"outlined",color:"inherit",onClick:b,children:"Close"})]})]}))}},17070:function(e,n,o){o.d(n,{FK:function(){return t},e_:function(){return s},f2:function(){return l},oe:function(){return c},v1:function(){return a}});var r=o(26098),i=o.n(r);function t(e){return i()(e).format()}function s(e){return d(e?i()(e).format("$0,0.00"):"",".00")}function l(e){return d(e?i()(Number(e)/100).format("0.0%"):"",".0")}function a(e){return d(e?i()(e).format("0.00a"):"",".00")}function c(e){return d(e?i()(e).format("0.0 b"):"",".0")}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(n)?e.replace(n,""):e}}}]);
//# sourceMappingURL=2054.728d2a64.chunk.js.map