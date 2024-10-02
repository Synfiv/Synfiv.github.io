import{c as L,i as J,e as P,p as A,a as g,h as m,l as K,b as Z,g as C,w as _,o as $,d as q,n as U,f as O,r as p,j as X,k as F,m as S,q as ee,s as te,t as ne,u as oe,v as B,x as M,y as H}from"./index.ab955d38.js";import{h as ie,c as N,g as le,a as re}from"./dom.f506c7b4.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";var ae=L({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:n}}=C(),t=J(K,P);if(t===P)return console.error("QPageContainer needs to be child of QLayout"),P;A(Z,!0);const s=g(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>m("div",{class:"q-page-container",style:s.value},ie(r.default))}});const ce=[Element,String],ue=[null,document,document.body,document.scrollingElement,document.documentElement];function de(e,r){let n=le(r);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ue.includes(n)?window:n}function fe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ve(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function R(){if(T!==void 0)return T;const e=document.createElement("p"),r=document.createElement("div");N(e,{width:"100%",height:"200px"}),N(r,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),r.appendChild(e),document.body.appendChild(r);const n=e.offsetWidth;r.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=r.clientWidth),r.remove(),T=n-t,T}const{passive:V}=O,he=["both","horizontal","vertical"];var ge=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>he.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ce},emits:["scroll"],setup(e,{emit:r}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,s,a;_(()=>e.scrollTarget,()=>{l(),v()});function c(){t!==null&&t();const h=Math.max(0,fe(s)),b=ve(s),d={top:h-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const x=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:h,left:b},n.directionChanged=n.direction!==x,n.delta=d,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),r("scroll",{...n})}function v(){s=de(a,e.scrollTarget),s.addEventListener("scroll",i,V),i(!0)}function l(){s!==void 0&&(s.removeEventListener("scroll",i,V),s=void 0)}function i(h){if(h===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[b,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{d(b),t=null}}}const{proxy:f}=C();return _(()=>f.$q.lang.rtl,c),$(()=>{a=f.$el.parentNode,v()}),q(()=>{t!==null&&t(),l()}),Object.assign(f,{trigger:i,getPosition:()=>n}),U}});function me(){const e=p(!X.value);return e.value===!1&&$(()=>{e.value=!0}),{isHydrated:e}}const Y=typeof ResizeObserver!="undefined",j=Y===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var D=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let n=null,t,s={width:-1,height:-1};function a(l){l===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:l,offsetHeight:i}=t;(l!==s.width||i!==s.height)&&(s={width:l,height:i},r("resize",s))}}const{proxy:v}=C();if(v.trigger=a,Y===!0){let l;const i=f=>{t=v.$el.parentNode,t?(l=new ResizeObserver(a),l.observe(t),c()):f!==!0&&F(()=>{i(!0)})};return $(()=>{i()}),q(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():t&&l.unobserve(t))}),U}else{let f=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,O.passive),i=void 0)},h=function(){f(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",a,O.passive),c())};const{isHydrated:l}=me();let i;return $(()=>{F(()=>{t=v.$el,t&&h()})}),q(f),()=>{if(l.value===!0)return m("object",{class:"q--avoid-card-border",style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:h})}}}}),pe=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:n}){const{proxy:{$q:t}}=C(),s=p(null),a=p(t.screen.height),c=p(e.container===!0?0:t.screen.width),v=p({position:0,direction:"down",inflectionPoint:0}),l=p(0),i=p(X.value===!0?0:R()),f=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),b=g(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=g(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function x(o){if(e.container===!0||document.qScrollPrevented!==!0){const u={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};v.value=u,e.onScroll!==void 0&&n("scroll",u)}}function I(o){const{height:u,width:w}=o;let y=!1;a.value!==u&&(y=!0,a.value=u,e.onScrollHeight!==void 0&&n("scrollHeight",u),Q()),c.value!==w&&(y=!0,c.value=w),y===!0&&e.onResize!==void 0&&n("resize",o)}function G({height:o}){l.value!==o&&(l.value=o,Q())}function Q(){if(e.container===!0){const o=a.value>l.value?R():0;i.value!==o&&(i.value=o)}}let z=null;const W={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:s,height:a,containerHeight:l,scrollbarWidth:i,totalWidth:g(()=>c.value+i.value),rows:g(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:S({size:0,offset:0,space:!1}),right:S({size:300,offset:0,space:!1}),footer:S({size:0,offset:0,space:!1}),left:S({size:300,offset:0,space:!1}),scroll:v,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,u,w){W[o][u]=w}};if(A(K,W),R()>0){let w=function(){o=null,u.classList.remove("hide-scrollbar")},y=function(){if(o===null){if(u.scrollHeight>t.screen.height)return;u.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(w,300)},E=function(k){o!==null&&k==="remove"&&(clearTimeout(o),w()),window[`${k}EventListener`]("resize",y)},o=null;const u=document.body;_(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),ee(()=>{E("remove")})}return()=>{const o=re(r.default,[m(ge,{onScroll:x}),m(D,{onResize:I})]),u=m("div",{class:f.value,style:h.value,ref:e.container===!0?void 0:s,tabindex:-1},o);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:s},[m(D,{onResize:G}),m("div",{class:"absolute-full",style:b.value},[m("div",{class:"scroll",style:d.value},[u])])]):u}}});const we={setup(){return{tab:p("images")}}},be={style:{width:"100%","min-width":"300px"},class:"flex flex-center flex-no-wrap"};function ye(e,r,n,t,s,a){const c=te("router-view");return ne(),oe(pe,{view:"hHh lpr fFf"},{default:B(()=>[M(ae,null,{default:B(()=>[r[0]||(r[0]=H("div",{class:"site-background"},[H("div",{class:"primary-transparent fit"})],-1)),H("div",be,[M(c)])]),_:1})]),_:1})}var Te=se(we,[["render",ye]]);export{Te as default};
