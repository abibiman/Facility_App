"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[9891],{89891:function(e,t,a){var o=a(4942),n=a(63366),c=a(87462),r=a(72791),i=a(59278),d=a(94419),s=a(12065),l=a(14036),u=a(97278),h=a(31402),p=a(66934),v=a(93785),m=a(80184),Z=["className","color","edge","size","sx"],g=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat((0,l.Z)(a.edge))],t["size".concat((0,l.Z)(a.size))]]}})((function(e){var t,a=e.ownerState;return(0,c.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},(0,o.Z)(t,"& .".concat(v.Z.thumb),{width:16,height:16}),(0,o.Z)(t,"& .".concat(v.Z.switchBase),(0,o.Z)({padding:4},"&.".concat(v.Z.checked),{transform:"translateX(16px)"})),t))})),b=(0,p.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,(0,o.Z)({},"& .".concat(v.Z.input),t.input),"default"!==a.color&&t["color".concat((0,l.Z)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat("light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},(0,o.Z)(t,"&.".concat(v.Z.checked),{transform:"translateX(20px)"}),(0,o.Z)(t,"&.".concat(v.Z.disabled),{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat("light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600])}),(0,o.Z)(t,"&.".concat(v.Z.checked," + .").concat(v.Z.track),{opacity:.5}),(0,o.Z)(t,"&.".concat(v.Z.disabled," + .").concat(v.Z.track),{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat("light"===a.palette.mode?.12:.2)}),(0,o.Z)(t,"& .".concat(v.Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,n=e.ownerState;return(0,c.Z)({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,o.Z)(t,"&.".concat(v.Z.checked),(0,o.Z)({color:(a.vars||a).palette[n.color].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[n.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(v.Z.disabled),{color:a.vars?a.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===a.palette.mode?(0,s.$n)(a.palette[n.color].main,.62):(0,s._j)(a.palette[n.color].main,.55))})),(0,o.Z)(t,"&.".concat(v.Z.checked," + .").concat(v.Z.track),{backgroundColor:(a.vars||a).palette[n.color].main}),t))})),f=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),k=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),w=r.forwardRef((function(e,t){var a=(0,h.Z)({props:e,name:"MuiSwitch"}),o=a.className,r=a.color,s=void 0===r?"primary":r,u=a.edge,p=void 0!==u&&u,w=a.size,x=void 0===w?"medium":w,S=a.sx,y=(0,n.Z)(a,Z),C=(0,c.Z)({},a,{color:s,edge:p,size:x}),R=function(e){var t=e.classes,a=e.edge,o=e.size,n=e.color,r=e.checked,i=e.disabled,s={root:["root",a&&"edge".concat((0,l.Z)(a)),"size".concat((0,l.Z)(o))],switchBase:["switchBase","color".concat((0,l.Z)(n)),r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,d.Z)(s,v.H,t);return(0,c.Z)({},t,u)}(C),B=(0,m.jsx)(k,{className:R.thumb,ownerState:C});return(0,m.jsxs)(g,{className:(0,i.Z)(R.root,o),sx:S,ownerState:C,children:[(0,m.jsx)(b,(0,c.Z)({type:"checkbox",icon:B,checkedIcon:B,ref:t,ownerState:C},y,{classes:(0,c.Z)({},R,{root:R.switchBase})})),(0,m.jsx)(f,{className:R.track,ownerState:C})]})}));t.Z=w},97278:function(e,t,a){a.d(t,{Z:function(){return w}});var o=a(29439),n=a(63366),c=a(87462),r=a(72791),i=a(59278),d=a(94419),s=a(14036),l=a(66934),u=a(98278),h=a(52930),p=a(95080),v=a(75878),m=a(21217);function Z(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=a(80184),b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=(0,l.ZP)(p.Z)((function(e){var t=e.ownerState;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),k=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),w=r.forwardRef((function(e,t){var a=e.autoFocus,r=e.checked,l=e.checkedIcon,p=e.className,v=e.defaultChecked,m=e.disabled,w=e.disableFocusRipple,x=void 0!==w&&w,S=e.edge,y=void 0!==S&&S,C=e.icon,R=e.id,B=e.inputProps,z=e.inputRef,F=e.name,I=e.onBlur,P=e.onChange,N=e.onFocus,j=e.readOnly,O=e.required,q=void 0!==O&&O,M=e.tabIndex,_=e.type,T=e.value,D=(0,n.Z)(e,b),A=(0,u.Z)({controlled:r,default:Boolean(v),name:"SwitchBase",state:"checked"}),E=(0,o.Z)(A,2),L=E[0],X=E[1],H=(0,h.Z)(),$=m;H&&"undefined"===typeof $&&($=H.disabled);var G="checkbox"===_||"radio"===_,J=(0,c.Z)({},e,{checked:L,disabled:$,disableFocusRipple:x,edge:y}),K=function(e){var t=e.classes,a=e.checked,o=e.disabled,n=e.edge,c={root:["root",a&&"checked",o&&"disabled",n&&"edge".concat((0,s.Z)(n))],input:["input"]};return(0,d.Z)(c,Z,t)}(J);return(0,g.jsxs)(f,(0,c.Z)({component:"span",className:(0,i.Z)(K.root,p),centerRipple:!0,focusRipple:!x,disabled:$,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){I&&I(e),H&&H.onBlur&&H.onBlur(e)},ownerState:J,ref:t},D,{children:[(0,g.jsx)(k,(0,c.Z)({autoFocus:a,checked:r,defaultChecked:v,className:K.input,disabled:$,id:G?R:void 0,name:F,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;X(t),P&&P(e,t)}},readOnly:j,ref:z,required:q,ownerState:J,tabIndex:M,type:_},"checkbox"===_&&void 0===T?{}:{value:T},B)),L?l:C]}))}))}}]);
//# sourceMappingURL=9891.ddc621f8.chunk.js.map