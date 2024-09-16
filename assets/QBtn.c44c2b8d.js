import{H as J,I as Y,b as M,J as G,K as Z,L as D,M as ee,c as s,j as I,h as d,r as j,o as te,w as ne,g as ae,s as E,T as le,p as ue,N as re}from"./index.8fd41bcc.js";import{b as z,c as ie,d as oe,e as se,a as ce,Q as N}from"./QIcon.b9549778.js";import{h as de}from"./render.bd5abf5f.js";function fe(e,n){const l=e.style;for(const r in n)l[r]=n[r]}function Pe(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=J(e);if(n)return n.$el||n}function ve(e,n=250){let l=!1,r;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},n),r=e.apply(this,arguments)),r}}function A(e,n,l,r){l.modifiers.stop===!0&&D(e);const i=l.modifiers.color;let h=l.modifiers.center;h=h===!0||r===!0;const m=document.createElement("span"),c=document.createElement("span"),x=ee(e),{left:S,top:q,width:k,height:a}=n.getBoundingClientRect(),g=Math.sqrt(k*k+a*a),f=g/2,p=`${(k-g)/2}px`,u=h?p:`${x.left-S-f}px`,v=`${(a-g)/2}px`,R=h?v:`${x.top-q-f}px`;c.className="q-ripple__inner",fe(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${u},${R},0) scale3d(.2,.2,1)`,opacity:0}),m.className=`q-ripple${i?" text-"+i:""}`,m.setAttribute("dir","ltr"),m.appendChild(c),n.appendChild(m);const _=()=>{m.remove(),clearTimeout($)};l.abort.push(_);let $=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${p},${v},0) scale3d(1,1,1)`,c.style.opacity=.2,$=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,$=setTimeout(()=>{m.remove(),l.abort.splice(l.abort.indexOf(_),1)},275)},250)},50)}function K(e,{modifiers:n,value:l,arg:r}){const i=Object.assign({},e.cfg.ripple,n,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var be=Y({name:"ripple",beforeMount(e,n){const l=n.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const r={cfg:l,enabled:n.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&A(i,e,r,i.qKeyEvent===!0)},keystart:ve(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&M(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&A(i,e,r,!0)},300)};K(r,n),e.__qripple=r,G(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const l=e.__qripple;l!==void 0&&(l.enabled=n.value!==!1,l.enabled===!0&&Object(n.value)===n.value&&K(l,n))}},beforeUnmount(e){const n=e.__qripple;n!==void 0&&(n.abort.forEach(l=>{l()}),Z(n,"main"),delete e._qripple)}});const me={size:{type:[String,Number],default:"1em"},color:String};function ge(e){return{cSize:s(()=>e.size in z?`${z[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ye=I({name:"QSpinner",props:{...me,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:l}=ge(e);return()=>d("svg",{class:l.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[d("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const W={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},he=Object.keys(W),ke={align:{type:String,validator:e=>he.includes(e)}};function pe(e){return s(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${W[n]}`})}const Q={none:0,xs:4,sm:8,md:16,lg:24,xl:32},qe={xs:8,sm:10,md:14,lg:20,xl:24},xe=["button","submit","reset"],Ee=/[^\s]\/[^\s]/,we=["flat","outline","push","unelevated"];function Ce(e,n){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":n}const Le={...ie,...oe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...we.reduce((e,n)=>(e[n]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Se={...Le,round:Boolean};function $e(e){const n=se(e,qe),l=pe(e),{hasRouterLink:r,hasLink:i,linkTag:h,linkAttrs:m,navigateOnClick:c}=ce({fallbackTag:"button"}),x=s(()=>{const u=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(v=>v in Q?Q[v]+"px":v).join(" "),minWidth:"0",minHeight:"0"}):u}),S=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),q=s(()=>e.disable!==!0&&e.loading!==!0),k=s(()=>q.value===!0?e.tabindex||0:-1),a=s(()=>Ce(e,"standard")),g=s(()=>{const u={tabindex:k.value};return i.value===!0?Object.assign(u,m.value):xe.includes(e.type)===!0&&(u.type=e.type),h.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),r.value!==!0&&Ee.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),f=s(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const v=e.round===!0?"round":`rectangle${S.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${a.value} q-btn--${v}`+(u!==void 0?" "+u:"")+(q.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:f,style:x,innerClasses:p,attributes:g,hasLink:i,linkTag:h,navigateOnClick:c,isActionable:q}}const{passiveCapture:b}=ue;let w=null,C=null,L=null;var Re=I({name:"QBtn",props:{...Se,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:n,emit:l}){const{proxy:r}=ae(),{classes:i,style:h,innerClasses:m,attributes:c,hasLink:x,linkTag:S,navigateOnClick:q,isActionable:k}=$e(e),a=j(null),g=j(null);let f=null,p,u=null;const v=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:x.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=s(()=>({center:e.round})),$=s(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),H=s(()=>{if(e.loading===!0)return{onMousedown:B,onTouchstart:B,onClick:B,onKeydown:B,onKeyup:B};if(k.value===!0){const t={onClick:O,onKeydown:V,onMousedown:F};if(r.$q.platform.has.touch===!0){const o=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${o}`]=X}return t}return{onClick:E}}),U=s(()=>({ref:a,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:h.value,...c.value,...H.value}));function O(t){if(a.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const o=document.activeElement;if(e.type==="submit"&&o!==document.body&&a.value.contains(o)===!1&&o.contains(a.value)===!1){a.value.focus();const P=()=>{document.removeEventListener("keydown",E,!0),document.removeEventListener("keyup",P,b),a.value!==null&&a.value.removeEventListener("blur",P,b)};document.addEventListener("keydown",E,!0),document.addEventListener("keyup",P,b),a.value.addEventListener("blur",P,b)}}q(t)}}function V(t){a.value!==null&&(l("keydown",t),M(t,[13,32])===!0&&C!==a.value&&(C!==null&&T(),t.defaultPrevented!==!0&&(a.value.focus(),C=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("keyup",y,!0),a.value.addEventListener("blur",y,b)),E(t)))}function X(t){a.value!==null&&(l("touchstart",t),t.defaultPrevented!==!0&&(w!==a.value&&(w!==null&&T(),w=a.value,f=t.target,f.addEventListener("touchcancel",y,b),f.addEventListener("touchend",y,b)),p=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,p=!1},200)))}function F(t){a.value!==null&&(t.qSkipRipple=p===!0,l("mousedown",t),t.defaultPrevented!==!0&&L!==a.value&&(L!==null&&T(),L=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("mouseup",y,b)))}function y(t){if(a.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===a.value)){if(t!==void 0&&t.type==="keyup"){if(C===a.value&&M(t,[13,32])===!0){const o=new MouseEvent("click",t);o.qKeyEvent=!0,t.defaultPrevented===!0&&re(o),t.cancelBubble===!0&&D(o),a.value.dispatchEvent(o),E(t),t.qKeyEvent=!0}l("keyup",t)}T()}}function T(t){const o=g.value;t!==!0&&(w===a.value||L===a.value)&&o!==null&&o!==document.activeElement&&(o.setAttribute("tabindex",-1),o.focus()),w===a.value&&(f!==null&&(f.removeEventListener("touchcancel",y,b),f.removeEventListener("touchend",y,b)),w=f=null),L===a.value&&(document.removeEventListener("mouseup",y,b),L=null),C===a.value&&(document.removeEventListener("keyup",y,!0),a.value!==null&&a.value.removeEventListener("blur",y,b),C=null),a.value!==null&&a.value.classList.remove("q-btn--active")}function B(t){E(t),t.qSkipRipple=!0}return te(()=>{T(!0)}),Object.assign(r,{click:t=>{k.value===!0&&O(t)}}),()=>{let t=[];e.icon!==void 0&&t.push(d(N,{name:e.icon,left:e.stack!==!0&&v.value===!0,role:"img"})),v.value===!0&&t.push(d("span",{class:"block"},[e.label])),t=de(n.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(d(N,{name:e.iconRight,right:e.stack!==!0&&v.value===!0,role:"img"}));const o=[d("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&o.push(d("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[d("span",{class:"q-btn__progress-indicator fit block",style:$.value})])),o.push(d("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+m.value},t)),e.loading!==null&&o.push(d(le,{name:"q-transition--fade"},()=>e.loading===!0?[d("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[d(ye)])]:null)),ne(d(S.value,U.value,o),[[be,R.value,void 0,_.value]])}}});export{Re as Q,be as R,ye as a,fe as c,Pe as g};
