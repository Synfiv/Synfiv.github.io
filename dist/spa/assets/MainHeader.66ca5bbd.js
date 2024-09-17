import{Q as K,u as it,a as st,v as ut}from"./QIcon.c872498d.js";import{R as ct,c as ze,g as dt,Q as de}from"./QBtn.d8e97345.js";import{h as He,a as we,b as ft}from"./render.ede547ec.js";import{i as xe,e as O,r as _,c as v,o as U,a as Y,t as Ve,w as vt,h as x,s as Be,b as ht,d as bt,g as j,f as mt,j as N,k as I,l as Fe,n as Oe,m as ge,p as ye,q as De,u as Te,v as gt,x as _e,y as yt,z as ne,A as wt,B as xt,C as Tt,D as _t,E as Q,F as R,G as oe}from"./index.feee9f42.js";import{u as Ae,Q as fe}from"./QImg.948e5fc3.js";import{_ as qt}from"./plugin-vue_export-helper.21dcd24c.js";let ve,le=0;const k=new Array(256);for(let e=0;e<256;e++)k[e]=(e+256).toString(16).substring(1);const pt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return u=>{const l=new Uint8Array(u);return e.getRandomValues(l),l}}return u=>{const l=[];for(let t=u;t>0;t--)l.push(Math.floor(Math.random()*256));return l}})(),Ie=4096;function Ct(){(ve===void 0||le+16>Ie)&&(le=0,ve=pt(Ie));const e=Array.prototype.slice.call(ve,le,le+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,k[e[0]]+k[e[1]]+k[e[2]]+k[e[3]]+"-"+k[e[4]]+k[e[5]]+"-"+k[e[6]]+k[e[7]]+"-"+k[e[8]]+k[e[9]]+"-"+k[e[10]]+k[e[11]]+k[e[12]]+k[e[13]]+k[e[14]]+k[e[15]]}let St=0;const Lt=["click","keydown"],Rt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${St++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Pt(e,u,l,t){const o=xe(Ve,O);if(o===O)return console.error("QTab/QRouteTab component needs to be child of QTabs"),O;const{proxy:b}=j(),m=_(null),L=_(null),g=_(null),d=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),S=v(()=>o.currentModel.value===e.name),z=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(S.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0?t.linkClass.value:"")),$=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),f=v(()=>e.disable===!0||o.hasFocus.value===!0||S.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function q(r,i){if(i!==!0&&m.value!==null&&m.value.focus(),e.disable===!0){t!==void 0&&t.hasRouterLink.value===!0&&Be(r);return}if(t===void 0){o.updateModel({name:e.name}),l("click",r);return}if(t.hasRouterLink.value===!0){const y=(T={})=>{let P;const A=T.to===void 0||mt(T.to,e.to)===!0?o.avoidRouteWatcher=Ct():null;return t.navigateToRouterLink(r,{...T,returnRouterError:!0}).catch(H=>{P=H}).then(H=>{if(A===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,P===void 0&&(H===void 0||H.message!==void 0&&H.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),T.returnRouterError===!0)return P!==void 0?Promise.reject(P):H})};l("click",r,y),r.defaultPrevented!==!0&&y();return}l("click",r)}function E(r){ht(r,[13,32])?q(r,!0):bt(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&o.onKbdNavigate(r.keyCode,b.$el)===!0&&Be(r),l("keydown",r)}function V(){const r=o.tabProps.value.narrowIndicator,i=[],y=x("div",{ref:g,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(x(K,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(x("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?x(K,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):x("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&i.push(y);const T=[x("div",{class:"q-focus-helper",tabindex:-1,ref:m}),x("div",{class:$.value},He(u.default,i))];return r===!1&&T.push(y),T}const M={name:v(()=>e.name),rootRef:L,tabIndicatorRef:g,routeData:t};U(()=>{o.unregisterTab(M)}),Y(()=>{o.registerTab(M)});function s(r,i){const y={ref:L,class:z.value,tabindex:f.value,role:"tab","aria-selected":S.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:E,...i};return vt(x(r,y,V()),[[ct,d.value]])}return{renderTab:s,$tabs:o}}var he=N({name:"QRouteTab",props:{...it,...Rt},emits:Lt,setup(e,{slots:u,emit:l}){const t=st({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:b}=Pt(e,u,l,{exact:v(()=>e.exact),...t});return I(()=>`${e.name} | ${e.exact} | ${(t.resolvedLink.value||{}).href}`,()=>{b.verifyRouteModel()}),()=>o(t.linkTag.value,t.linkAttrs.value)}});function kt(){const e=_(!Fe.value);return e.value===!1&&Y(()=>{e.value=!0}),{isHydrated:e}}const We=typeof ResizeObserver!="undefined",Ee=We===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var re=N({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let l=null,t,o={width:-1,height:-1};function b(g){g===!0||e.debounce===0||e.debounce==="0"?m():l===null&&(l=setTimeout(m,e.debounce))}function m(){if(l!==null&&(clearTimeout(l),l=null),t){const{offsetWidth:g,offsetHeight:d}=t;(g!==o.width||d!==o.height)&&(o={width:g,height:d},u("resize",o))}}const{proxy:L}=j();if(L.trigger=b,We===!0){let g;const d=S=>{t=L.$el.parentNode,t?(g=new ResizeObserver(b),g.observe(t),m()):S!==!0&&ge(()=>{d(!0)})};return Y(()=>{d()}),U(()=>{l!==null&&clearTimeout(l),g!==void 0&&(g.disconnect!==void 0?g.disconnect():t&&g.unobserve(t))}),Oe}else{let S=function(){l!==null&&(clearTimeout(l),l=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",b,ye.passive),d=void 0)},z=function(){S(),t&&t.contentDocument&&(d=t.contentDocument.defaultView,d.addEventListener("resize",b,ye.passive),m())};const{isHydrated:g}=kt();let d;return Y(()=>{ge(()=>{t=L.$el,t&&z()})}),U(S),()=>{if(g.value===!0)return x("object",{class:"q--avoid-card-border",style:Ee.style,tabindex:-1,type:"text/html",data:Ee.url,"aria-hidden":"true",onLoad:z})}}}});function be(){let e;const u=j();function l(){e=void 0}return De(l),U(l),{removeTick:l,registerTick(t){e=t,ge(()=>{e===t&&(ut(u)===!1&&e(),e=void 0)})}}}let je=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const u=document.createElement("div");Object.assign(u.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(u),e.scrollLeft=-1e3,je=e.scrollLeft>=0,e.remove()}function $t(e,u,l){const t=l===!0?["left","right"]:["top","bottom"];return`absolute-${u===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const zt=["left","center","right","justify"];var Me=N({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:u,emit:l}){const{proxy:t}=j(),{$q:o}=t,{registerTick:b}=be(),{registerTick:m}=be(),{registerTick:L}=be(),{registerTimeout:g,removeTimeout:d}=Ae(),{registerTimeout:S,removeTimeout:z}=Ae(),$=_(null),f=_(null),q=_(e.modelValue),E=_(!1),V=_(!0),M=_(!1),s=_(!1),r=[],i=_(0),y=_(!1);let T=null,P=null,A;const H=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:$t(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ne=v(()=>{const n=i.value,a=q.value;for(let c=0;c<n;c++)if(r[c].name.value===a)return!0;return!1}),Ke=v(()=>`q-tabs__content--align-${E.value===!0?"left":s.value===!0?"justify":e.align}`),Ue=v(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Xe=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ke.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Z=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),J=v(()=>e.vertical!==!0&&o.lang.rtl===!0),ie=v(()=>je===!1&&J.value===!0);I(J,G),I(()=>e.modelValue,n=>{se({name:n,setCurrent:!0,skipEmit:!0})}),I(()=>e.outsideArrows,ee);function se({name:n,setCurrent:a,skipEmit:c}){q.value!==n&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",n),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Ge(q.value,n),q.value=n))}function ee(){b(()=>{qe({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function qe(n){if(Z.value===void 0||f.value===null)return;const a=n[Z.value.container],c=Math.min(f.value[Z.value.scroll],Array.prototype.reduce.call(f.value.children,(C,w)=>C+(w[Z.value.content]||0),0)),p=a>0&&c>a;E.value=p,p===!0&&m(G),s.value=a<parseInt(e.breakpoint,10)}function Ge(n,a){const c=n!=null&&n!==""?r.find(C=>C.name.value===n):null,p=a!=null&&a!==""?r.find(C=>C.name.value===a):null;if(c&&p){const C=c.tabIndicatorRef.value,w=p.tabIndicatorRef.value;T!==null&&(clearTimeout(T),T=null),C.style.transition="none",C.style.transform="none",w.style.transition="none",w.style.transform="none";const h=C.getBoundingClientRect(),B=w.getBoundingClientRect();w.style.transform=e.vertical===!0?`translate3d(0,${h.top-B.top}px,0) scale3d(1,${B.height?h.height/B.height:1},1)`:`translate3d(${h.left-B.left}px,0,0) scale3d(${B.width?h.width/B.width:1},1,1)`,L(()=>{T=setTimeout(()=>{T=null,w.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",w.style.transform="none"},70)})}p&&E.value===!0&&X(p.rootRef.value)}function X(n){const{left:a,width:c,top:p,height:C}=f.value.getBoundingClientRect(),w=n.getBoundingClientRect();let h=e.vertical===!0?w.top-p:w.left-a;if(h<0){f.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),G();return}h+=e.vertical===!0?w.height-C:w.width-c,h>0&&(f.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),G())}function G(){const n=f.value;if(n===null)return;const a=n.getBoundingClientRect(),c=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);J.value===!0?(V.value=Math.ceil(c+a.width)<n.scrollWidth-1,M.value=c>0):(V.value=c>0,M.value=e.vertical===!0?Math.ceil(c+a.height)<n.scrollHeight:Math.ceil(c+a.width)<n.scrollWidth)}function pe(n){P!==null&&clearInterval(P),P=setInterval(()=>{Je(n)===!0&&D()},5)}function Ce(){pe(ie.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){pe(ie.value===!0?0:Number.MAX_SAFE_INTEGER)}function D(){P!==null&&(clearInterval(P),P=null)}function Ye(n,a){const c=Array.prototype.filter.call(f.value.children,B=>B===a||B.matches&&B.matches(".q-tab.q-focusable")===!0),p=c.length;if(p===0)return;if(n===36)return X(c[0]),c[0].focus(),!0;if(n===35)return X(c[p-1]),c[p-1].focus(),!0;const C=n===(e.vertical===!0?38:37),w=n===(e.vertical===!0?40:39),h=C===!0?-1:w===!0?1:void 0;if(h!==void 0){const B=J.value===!0?-1:1,F=c.indexOf(a)+h*B;return F>=0&&F<p&&(X(c[F]),c[F].focus({preventScroll:!0})),!0}}const Ze=v(()=>ie.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,a)=>{n.scrollLeft=-a}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,a)=>{n.scrollTop=a}}:{get:n=>n.scrollLeft,set:(n,a)=>{n.scrollLeft=a}});function Je(n){const a=f.value,{get:c,set:p}=Ze.value;let C=!1,w=c(a);const h=n<w?-1:1;return w+=h*5,w<0?(C=!0,w=0):(h===-1&&w<=n||h===1&&w>=n)&&(C=!0,w=n),p(a,w),G(),C}function Le(n,a){for(const c in n)if(n[c]!==a[c])return!1;return!0}function et(){let n=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const c=r.filter(h=>h.routeData!==void 0&&h.routeData.hasRouterLink.value===!0),{hash:p,query:C}=t.$route,w=Object.keys(C).length;for(const h of c){const B=h.routeData.exact.value===!0;if(h.routeData[B===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:ue,matched:at,href:rt}=h.routeData.resolvedLink.value,ce=Object.keys(ue).length;if(B===!0){if(F!==p||ce!==w||Le(C,ue)===!1)continue;n=h.name.value;break}if(F!==""&&F!==p||ce!==0&&Le(ue,C)===!1)continue;const W={matchedLen:at.length,queryDiff:w-ce,hrefLen:rt.length-F.length};if(W.matchedLen>a.matchedLen){n=h.name.value,a=W;continue}else if(W.matchedLen!==a.matchedLen)continue;if(W.queryDiff<a.queryDiff)n=h.name.value,a=W;else if(W.queryDiff!==a.queryDiff)continue;W.hrefLen>a.hrefLen&&(n=h.name.value,a=W)}n===null&&r.some(h=>h.routeData===void 0&&h.name.value===q.value)===!0||se({name:n,setCurrent:!0})}function tt(n){if(d(),y.value!==!0&&$.value!==null&&n.target&&typeof n.target.closest=="function"){const a=n.target.closest(".q-tab");a&&$.value.contains(a)===!0&&(y.value=!0,E.value===!0&&X(a))}}function nt(){g(()=>{y.value=!1},30)}function te(){Pe.avoidRouteWatcher===!1?S(et):z()}function Re(){if(A===void 0){const n=I(()=>t.$route.fullPath,te);A=()=>{n(),A=void 0}}}function ot(n){r.push(n),i.value++,ee(),n.routeData===void 0||t.$route===void 0?S(()=>{if(E.value===!0){const a=q.value,c=a!=null&&a!==""?r.find(p=>p.name.value===a):null;c&&X(c.rootRef.value)}}):(Re(),n.routeData.hasRouterLink.value===!0&&te())}function lt(n){r.splice(r.indexOf(n),1),i.value--,ee(),A!==void 0&&n.routeData!==void 0&&(r.every(a=>a.routeData===void 0)===!0&&A(),te())}const Pe={currentModel:q,tabProps:H,hasFocus:y,hasActiveTab:Ne,registerTab:ot,unregisterTab:lt,verifyRouteModel:te,updateModel:se,onKbdNavigate:Ye,avoidRouteWatcher:!1};Te(Ve,Pe);function ke(){T!==null&&clearTimeout(T),D(),A!==void 0&&A()}let $e;return U(ke),De(()=>{$e=A!==void 0,ke()}),gt(()=>{$e===!0&&Re(),ee()}),()=>x("div",{ref:$,class:Ue.value,role:"tablist",onFocusin:tt,onFocusout:nt},[x(re,{onResize:qe}),x("div",{ref:f,class:Xe.value,onScroll:G},we(u.default)),x(K,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D}),x(K,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D})])}}),Bt=N({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const l=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:l.value,role:"toolbar"},we(u.default))}}),At=N({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:l}){const{proxy:{$q:t}}=j(),o=xe(_e,O);if(o===O)return console.error("QHeader needs to be child of QLayout"),O;const b=_(parseInt(e.heightHint,10)),m=_(!0),L=v(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),g=v(()=>{if(e.modelValue!==!0)return 0;if(L.value===!0)return m.value===!0?b.value:0;const s=b.value-o.scroll.value.position;return s>0?s:0}),d=v(()=>e.modelValue!==!0||L.value===!0&&m.value!==!0),S=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),z=v(()=>"q-header q-layout__section--marginal "+(L.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),$=v(()=>{const s=o.rows.value.top,r={};return s[0]==="l"&&o.left.space===!0&&(r[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),s[2]==="r"&&o.right.space===!0&&(r[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),r});function f(s,r){o.update("header",s,r)}function q(s,r){s.value!==r&&(s.value=r)}function E({height:s}){q(b,s),f("size",s)}function V(s){S.value===!0&&q(m,!0),l("focusin",s)}I(()=>e.modelValue,s=>{f("space",s),q(m,!0),o.animate()}),I(g,s=>{f("offset",s)}),I(()=>e.reveal,s=>{s===!1&&q(m,e.modelValue)}),I(m,s=>{o.animate(),l("reveal",s)}),I(o.scroll,s=>{e.reveal===!0&&q(m,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const M={};return o.instances.header=M,e.modelValue===!0&&f("size",b.value),f("space",e.modelValue),f("offset",g.value),U(()=>{o.instances.header===M&&(o.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const s=ft(u.default,[]);return e.elevated===!0&&s.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(x(re,{debounce:0,onResize:E})),x("header",{class:z.value,style:$.value,onFocusin:V},s)}}}),It=N({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:l}}=j(),t=xe(_e,O);if(t===O)return console.error("QPageContainer needs to be child of QLayout"),O;Te(yt,!0);const o=v(()=>{const b={};return t.header.space===!0&&(b.paddingTop=`${t.header.size}px`),t.right.space===!0&&(b[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(b.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(b[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),b});return()=>x("div",{class:"q-page-container",style:o.value},we(u.default))}});const Et=[Element,String],Mt=[null,document,document.body,document.scrollingElement,document.documentElement];function Qt(e,u){let l=dt(u);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Mt.includes(l)?window:l}function Ht(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Vt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ae;function me(){if(ae!==void 0)return ae;const e=document.createElement("p"),u=document.createElement("div");ze(e,{width:"100%",height:"200px"}),ze(u,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),u.appendChild(e),document.body.appendChild(u);const l=e.offsetWidth;u.style.overflow="scroll";let t=e.offsetWidth;return l===t&&(t=u.clientWidth),u.remove(),ae=l-t,ae}const{passive:Qe}=ye,Ft=["both","horizontal","vertical"];var Ot=N({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ft.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Et},emits:["scroll"],setup(e,{emit:u}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,b;I(()=>e.scrollTarget,()=>{g(),L()});function m(){t!==null&&t();const z=Math.max(0,Ht(o)),$=Vt(o),f={top:z-l.position.top,left:$-l.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const q=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";l.position={top:z,left:$},l.directionChanged=l.direction!==q,l.delta=f,l.directionChanged===!0&&(l.direction=q,l.inflectionPoint=l.position),u("scroll",{...l})}function L(){o=Qt(b,e.scrollTarget),o.addEventListener("scroll",d,Qe),d(!0)}function g(){o!==void 0&&(o.removeEventListener("scroll",d,Qe),o=void 0)}function d(z){if(z===!0||e.debounce===0||e.debounce==="0")m();else if(t===null){const[$,f]=e.debounce?[setTimeout(m,e.debounce),clearTimeout]:[requestAnimationFrame(m),cancelAnimationFrame];t=()=>{f($),t=null}}}const{proxy:S}=j();return I(()=>S.$q.lang.rtl,m),Y(()=>{b=S.$el.parentNode,L()}),U(()=>{t!==null&&t(),g()}),Object.assign(S,{trigger:d,getPosition:()=>l}),Oe}}),Dt=N({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:l}){const{proxy:{$q:t}}=j(),o=_(null),b=_(t.screen.height),m=_(e.container===!0?0:t.screen.width),L=_({position:0,direction:"down",inflectionPoint:0}),g=_(0),d=_(Fe.value===!0?0:me()),S=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),$=v(()=>d.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),f=v(()=>d.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function q(i){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};L.value=y,e.onScroll!==void 0&&l("scroll",y)}}function E(i){const{height:y,width:T}=i;let P=!1;b.value!==y&&(P=!0,b.value=y,e.onScrollHeight!==void 0&&l("scrollHeight",y),M()),m.value!==T&&(P=!0,m.value=T),P===!0&&e.onResize!==void 0&&l("resize",i)}function V({height:i}){g.value!==i&&(g.value=i,M())}function M(){if(e.container===!0){const i=b.value>g.value?me():0;d.value!==i&&(d.value=i)}}let s=null;const r={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:o,height:b,containerHeight:g,scrollbarWidth:d,totalWidth:v(()=>m.value+d.value),rows:v(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:L,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,y,T){r[i][y]=T}};if(Te(_e,r),me()>0){let T=function(){i=null,y.classList.remove("hide-scrollbar")},P=function(){if(i===null){if(y.scrollHeight>t.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(T,300)},A=function(H){i!==null&&H==="remove"&&(clearTimeout(i),T()),window[`${H}EventListener`]("resize",P)},i=null;const y=document.body;I(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),wt(()=>{A("remove")})}return()=>{const i=He(u.default,[x(Ot,{onScroll:q}),x(re,{onResize:E})]),y=x("div",{class:S.value,style:z.value,ref:e.container===!0?void 0:o,tabindex:-1},i);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:o},[x(re,{onResize:V}),x("div",{class:"absolute-full",style:$.value},[x("div",{class:"scroll",style:f.value},[y])])]):y}}}),Wt="/assets/bluesky.fb845680.svg",jt="/assets/twitter.6cb482dc.svg",Nt="/assets/furaffinity.6c637a24.svg";const Kt={setup(){return{tab:_("images")}}},Ut={class:"row col-12"},Xt={class:"col-xs-12 col-sm-4 col-md-4"},Gt={class:"flex col-xs-12 col-sm-4 col-md-4 flex-center"};function Yt(e,u,l,t,o,b){const m=xt("router-view");return Tt(),_t(Dt,{view:"lHh lpr lFf"},{default:Q(()=>[R(At,null,{default:Q(()=>[R(Bt,{class:"text-accent"},{default:Q(()=>[oe("div",Ut,[u[0]||(u[0]=oe("div",{class:"col-xs-0 col-sm-4 col-md-4"},null,-1)),oe("div",Xt,[R(Me,{class:"text-h5 text-weight-bold"},{default:Q(()=>[R(he,{label:"Main",to:"/",exact:""}),R(he,{label:"About",to:"/AboutPage",exact:""}),R(he,{label:"Prices",to:"/PricesPage",exact:""})]),_:1})]),oe("div",Gt,[R(Me,{class:"row q-gutter-x-sm q-my-sm flex-center justify-center"},{default:Q(()=>[R(de,{href:"https://twitter.com/SynfIV",target:"_blank",size:"max-content","no-caps":"",outline:"",class:"q-mx-xs bg-secondary"},{default:Q(()=>[R(K,null,{default:Q(()=>[R(fe,{src:Wt})]),_:1})]),_:1}),R(de,{href:"https://bsky.app/profile/synfiv.bsky.social",target:"_blank",size:"max-content","no-caps":"",outline:"",class:"q-mx-xs bg-secondary"},{default:Q(()=>[R(K,null,{default:Q(()=>[R(fe,{src:jt})]),_:1})]),_:1}),R(de,{href:"https://www.furaffinity.net/user/synfiv",target:"_blank",size:"max-content","no-caps":"",outline:"",class:"q-mx-xs bg-secondary"},{default:Q(()=>[R(K,null,{default:Q(()=>[R(fe,{src:Nt})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1}),R(It,null,{default:Q(()=>[R(m)]),_:1})]),_:1})}var ln=qt(Kt,[["render",Yt]]);export{ln as default};
