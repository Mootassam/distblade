import{x as j,y as s,A as g,u,i as d,r as l,k as m,j as e,L as N}from"./index-e5203b7d.js";import{y as a,u as b,a as v,F as y,I as r}from"./InputFormItem-26696f11.js";import{B as P}from"./ButtonIcon-53a11226.js";import{u as S}from"./useDispatch-9b5b3439.js";const C=j().shape({email:a.string(s("user.fields.username"),{required:!0}),password:a.string(s("user.fields.password"),{required:!0}),newPasswordConfirmation:a.string(s("user.fields.newPasswordConfirmation"),{required:!0}).oneOf([g("password"),null],s("auth.passwordChange.mustMatch")),phoneNumber:a.string(s("user.fields.phoneNumber"),{required:!0}),withdrawPassword:a.string(s("user.fields.withdrawPassword"),{required:!0}),invitationcode:a.string(s("user.fields.invitationcode"),{required:!0}),rememberMe:a.boolean(s("user.fields.rememberMe"))});function F(){const t=S(),i=u(d.selectLoading),[c]=l.useState({email:"",password:"",phoneNumber:"",withdrawPassword:"",invitationcode:"",rememberMe:!0});l.useEffect(()=>{t(m.doClearErrorMessage())},[t]);const o=b({resolver:v.yupResolver(C),mode:"onSubmit",defaultValues:c}),n=u(d.selectErrorMessage),h=({email:p,password:w,phoneNumber:_,withdrawPassword:f,invitationcode:x})=>{t(m.doRegisterEmailAndPassword(p,w,_,f,x))};return e.jsxs("div",{className:"auth__page",children:[e.jsxs("div",{className:"auth__header header__signup ",children:[e.jsx("h1",{className:"auth__title",children:" Create Account"}),e.jsx("span",{className:"auth__description __v2",children:"Create an account with CJ Affiliate Marketing."})]}),e.jsx(y,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(h),children:[e.jsxs("div",{className:"auth__form",children:[e.jsx(r,{type:"text",name:"email",placeholder:s("user.fields.username"),className:"auth__input",externalErrorMessage:n}),e.jsx(r,{type:"text",name:"phoneNumber",placeholder:s("user.fields.phoneNumber"),className:"auth__input"}),e.jsx(r,{type:"password",name:"withdrawPassword",placeholder:s("user.fields.withdrawPassword"),className:"auth__input"}),e.jsx(r,{type:"password",name:"password",placeholder:s("user.fields.password"),className:"auth__input"}),e.jsx(r,{type:"password",name:"newPasswordConfirmation",autoComplete:"new-password",placeholder:s("user.fields.confirmPassword"),className:"auth__input"}),e.jsx(r,{type:"text",name:"invitationcode",placeholder:s("user.fields.invitationcode"),className:"auth__input",externalErrorMessage:n})]}),e.jsxs("div",{className:"auth__bottom",children:[e.jsxs("button",{className:"auth__button",disabled:i,type:"submit",children:[e.jsx(P,{loading:i}),e.jsx("span",{children:"Sign up"})]}),e.jsx(N,{to:"/auth/signin",className:"remove__ligne",children:e.jsx("span",{className:"auth__link",children:"Already have an account"})})]})]})})]})}export{F as default};
