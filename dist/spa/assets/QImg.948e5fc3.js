import{q as M,o as E,g as C,c as u,j as F,r as s,l as O,a as P,h as l,k as A,T as U}from"./index.feee9f42.js";import{a as W}from"./QBtn.d8e97345.js";import{a as x}from"./render.ede547ec.js";import{v}from"./QIcon.c872498d.js";function q(){let e=null;const n=C();function i(){e!==null&&(clearTimeout(e),e=null)}return M(i),E(i),{removeTimeout:i,registerTimeout(c,g){i(),v(n)===!1&&(e=setTimeout(()=>{e=null,c()},g))}}}const G={ratio:[String,Number]};function J(e,n){return u(()=>{const i=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const K=1.7778;var p=F({name:"QImg",props:{...G,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:K},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:i}){const c=s(e.initialRatio),g=J(e,c),S=C(),{registerTimeout:k,removeTimeout:h}=q(),{registerTimeout:z,removeTimeout:_}=q(),y=u(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),L=u(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),a=[s(null),s(y.value)],r=s(0),m=s(!1),d=s(!1),N=u(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),I=u(()=>({width:e.width,height:e.height})),R=u(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),B=u(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function j(){if(_(),e.loadingShowDelay===0){m.value=!0;return}z(()=>{m.value=!0},e.loadingShowDelay)}function T(){_(),m.value=!1}function D({target:t}){v(S)===!1&&(h(),c.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,b(t,1))}function b(t,o){o===1e3||v(S)===!0||(t.complete===!0?Q(t):k(()=>{b(t,o+1)},50))}function Q(t){v(S)!==!0&&(r.value=r.value^1,a[r.value].value=null,T(),t.getAttribute("__qerror")!=="true"&&(d.value=!1),i("load",t.currentSrc||t.src))}function $(t){h(),T(),d.value=!0,a[r.value].value=L.value,a[r.value^1].value=y.value,i("error",t)}function w(t){const o=a[t].value,f={key:"img_"+t,class:R.value,style:B.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...o};return r.value===t?Object.assign(f,{class:f.class+"current",onLoad:D,onError:$}):f.class+="loaded",l("div",{class:"q-img__container absolute-full",key:"img"+t},l("img",f))}function H(){return m.value===!1?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},x(n[d.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[l(W,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){A(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,o=>{h(),d.value=!1,o===null?(T(),a[r.value^1].value=y.value):j(),a[r.value].value=o},{immediate:!0})};O.value===!0?P(t):t()}return()=>{const t=[];return g.value!==null&&t.push(l("div",{key:"filler",style:g.value})),a[0].value!==null&&t.push(w(0)),a[1].value!==null&&t.push(w(1)),t.push(l(U,{name:"q-transition--fade"},H)),l("div",{key:"main",class:N.value,style:I.value,role:"img","aria-label":e.alt},t)}}});export{p as Q,q as u};
