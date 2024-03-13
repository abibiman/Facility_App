"use strict";(self.webpackChunk_abibiman_telehealth=self.webpackChunk_abibiman_telehealth||[]).push([[2230],{73334:function(e,r,n){n.r(r),n.d(r,{default:function(){return t}});var i=n(6907),s=n(55645),a=n(80184);function t(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.ql,{children:(0,a.jsx)("title",{children:" Auth Classic: Login"})}),(0,a.jsx)(s.pf,{})]})}},55645:function(e,r,n){n.d(r,{m$:function(){return q},pf:function(){return v},rQ:function(){return P},i6:function(){return y},HE:function(){return w}});var i=n(74165),s=n(15861),a=n(8007),t=n(61134),o=n(44695),l=n(12258),c=n(50533),d=n(36314),u=n(13400),m=n(4567),h=n(63466),x=n(38072),p=n(83854),f=n(22459),j=n(40268),Z=n(39231),b=n(80184);function v(){var e=(0,f.k)(),r=a.Ry().shape({email:a.Z_().required("Email is required").email("Email must be a valid email address"),password:a.Z_().required("Password is required")}),n=(0,t.cI)({resolver:(0,o.X)(r),defaultValues:{email:"",password:""}}),v=n.handleSubmit,g=n.formState.isSubmitting,w=v(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.info("DATA",r),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()),y=(0,b.jsxs)(d.Z,{spacing:2,sx:{mb:5},children:[(0,b.jsx)(m.Z,{variant:"h4",children:"Sign in to Minimal"}),(0,b.jsxs)(d.Z,{direction:"row",spacing:.5,children:[(0,b.jsx)(m.Z,{variant:"body2",children:"New user?"}),(0,b.jsx)(c.Z,{component:p.r,href:x.H.authDemo.modern.register,variant:"subtitle2",children:"Create an account"})]})]}),P=(0,b.jsxs)(d.Z,{spacing:2.5,children:[(0,b.jsx)(Z.au,{name:"email",label:"Email address"}),(0,b.jsx)(Z.au,{name:"password",label:"Password",type:e.value?"text":"password",InputProps:{endAdornment:(0,b.jsx)(h.Z,{position:"end",children:(0,b.jsx)(u.Z,{onClick:e.onToggle,edge:"end",children:(0,b.jsx)(j.Z,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,b.jsx)(c.Z,{component:p.r,href:x.H.authDemo.modern.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),(0,b.jsx)(l.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:g,endIcon:(0,b.jsx)(j.Z,{icon:"eva:arrow-ios-forward-fill"}),sx:{justifyContent:"space-between",pl:2,pr:1.5},children:"Login"})]});return(0,b.jsxs)(Z.ZP,{methods:n,onSubmit:w,children:[y,P]})}var g=n(80237);function w(){var e=a.Ry().shape({code:a.Z_().min(6,"Code must be at least 6 characters").required("Code is required"),email:a.Z_().required("Email is required").email("Email must be a valid email address")}),r=(0,t.cI)({mode:"onChange",resolver:(0,o.X)(e),defaultValues:{code:"",email:""}}),n=r.handleSubmit,u=r.formState.isSubmitting,h=n(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.info("DATA",r),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()),f=(0,b.jsxs)(d.Z,{spacing:3,alignItems:"center",children:[(0,b.jsx)(Z.au,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),(0,b.jsx)(Z.Re,{name:"code"}),(0,b.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:u,children:"Verify"}),(0,b.jsxs)(m.Z,{variant:"body2",children:["Don\u2019t have a code? ",(0,b.jsx)(c.Z,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),(0,b.jsxs)(c.Z,{component:p.r,href:x.H.authDemo.classic.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[(0,b.jsx)(j.Z,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),v=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.yj,{sx:{height:96}}),(0,b.jsxs)(d.Z,{spacing:1,sx:{my:5},children:[(0,b.jsx)(m.Z,{variant:"h3",children:"Please check your email!"}),(0,b.jsx)(m.Z,{variant:"body2",sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."})]})]});return(0,b.jsxs)(Z.ZP,{methods:r,onSubmit:h,children:[v,f]})}function y(){var e=(0,f.k)(),r=a.Ry().shape({firstName:a.Z_().required("First name required"),lastName:a.Z_().required("Last name required"),email:a.Z_().required("Email is required").email("Email must be a valid email address"),password:a.Z_().required("Password is required")}),n=(0,t.cI)({resolver:(0,o.X)(r),defaultValues:{firstName:"",lastName:"",email:"",password:""}}),v=n.handleSubmit,g=n.formState.isSubmitting,w=v(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.info("DATA",r),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()),y=(0,b.jsxs)(d.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,b.jsx)(m.Z,{variant:"h4",children:"Get started absolutely free"}),(0,b.jsxs)(d.Z,{direction:"row",spacing:.5,children:[(0,b.jsx)(m.Z,{variant:"body2",children:" Already have an account? "}),(0,b.jsx)(c.Z,{href:x.H.authDemo.modern.login,component:p.r,variant:"subtitle2",children:"Sign in"})]})]}),P=(0,b.jsxs)(m.Z,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",(0,b.jsx)(c.Z,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",(0,b.jsx)(c.Z,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),q=(0,b.jsxs)(d.Z,{spacing:2.5,children:[(0,b.jsxs)(d.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,b.jsx)(Z.au,{name:"firstName",label:"First name"}),(0,b.jsx)(Z.au,{name:"lastName",label:"Last name"})]}),(0,b.jsx)(Z.au,{name:"email",label:"Email address"}),(0,b.jsx)(Z.au,{name:"password",label:"Password",type:e.value?"text":"password",InputProps:{endAdornment:(0,b.jsx)(h.Z,{position:"end",children:(0,b.jsx)(u.Z,{onClick:e.onToggle,edge:"end",children:(0,b.jsx)(j.Z,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,b.jsx)(l.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:g,endIcon:(0,b.jsx)(j.Z,{icon:"eva:arrow-ios-forward-fill"}),sx:{justifyContent:"space-between",pl:2,pr:1.5},children:"Create account"})]});return(0,b.jsxs)(Z.ZP,{methods:n,onSubmit:w,children:[y,q,P]})}function P(){var e=(0,f.k)(),r=a.Ry().shape({code:a.Z_().min(6,"Code must be at least 6 characters").required("Code is required"),email:a.Z_().required("Email is required").email("Email must be a valid email address"),password:a.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:a.Z_().required("Confirm password is required").oneOf([a.iH("password")],"Passwords must match")}),n=(0,t.cI)({mode:"onChange",resolver:(0,o.X)(r),defaultValues:{code:"",email:"",password:"",confirmPassword:""}}),v=n.handleSubmit,w=n.formState.isSubmitting,y=v(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.info("DATA",r),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()),P=(0,b.jsxs)(d.Z,{spacing:3,alignItems:"center",children:[(0,b.jsx)(Z.au,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),(0,b.jsx)(Z.Re,{name:"code"}),(0,b.jsx)(Z.au,{name:"password",label:"Password",type:e.value?"text":"password",InputProps:{endAdornment:(0,b.jsx)(h.Z,{position:"end",children:(0,b.jsx)(u.Z,{onClick:e.onToggle,edge:"end",children:(0,b.jsx)(j.Z,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,b.jsx)(Z.au,{name:"confirmPassword",label:"Confirm New Password",type:e.value?"text":"password",InputProps:{endAdornment:(0,b.jsx)(h.Z,{position:"end",children:(0,b.jsx)(u.Z,{onClick:e.onToggle,edge:"end",children:(0,b.jsx)(j.Z,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,b.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:w,children:"Update Password"}),(0,b.jsxs)(m.Z,{variant:"body2",children:["Don\u2019t have a code? ",(0,b.jsx)(c.Z,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),(0,b.jsxs)(c.Z,{component:p.r,href:x.H.authDemo.modern.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[(0,b.jsx)(j.Z,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),q=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.Jg,{sx:{height:96}}),(0,b.jsxs)(d.Z,{spacing:1,sx:{my:5},children:[(0,b.jsx)(m.Z,{variant:"h3",children:"Request sent successfully!"}),(0,b.jsxs)(m.Z,{variant:"body2",sx:{color:"text.secondary"},children:["We've sent a 6-digit confirmation email to your email.",(0,b.jsx)("br",{}),"Please enter the code in below box to verify your email."]})]})]});return(0,b.jsxs)(Z.ZP,{methods:n,onSubmit:y,children:[q,P]})}function q(){var e=a.Ry().shape({email:a.Z_().required("Email is required").email("Email must be a valid email address")}),r=(0,t.cI)({resolver:(0,o.X)(e),defaultValues:{email:""}}),n=r.handleSubmit,u=r.formState.isSubmitting,h=n(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.info("DATA",r),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()),f=(0,b.jsxs)(d.Z,{spacing:3,alignItems:"center",children:[(0,b.jsx)(Z.au,{name:"email",label:"Email address"}),(0,b.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:u,endIcon:(0,b.jsx)(j.Z,{icon:"eva:arrow-ios-forward-fill"}),sx:{justifyContent:"space-between",pl:2,pr:1.5},children:"Send Request"}),(0,b.jsxs)(c.Z,{component:p.r,href:x.H.authDemo.modern.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[(0,b.jsx)(j.Z,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),v=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.CW,{sx:{height:96}}),(0,b.jsxs)(d.Z,{spacing:1,sx:{my:5},children:[(0,b.jsx)(m.Z,{variant:"h3",children:"Forgot your password?"}),(0,b.jsx)(m.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return(0,b.jsxs)(Z.ZP,{methods:r,onSubmit:h,children:[v,f]})}}}]);
//# sourceMappingURL=2230.64e3f97f.chunk.js.map