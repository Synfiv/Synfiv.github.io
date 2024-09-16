import{u as ve,a as fe,Q as me,b as z,c as ge,d as he}from"./QPage.2540f017.js";import{c as f,j as U,r as q,l as ye,a as ee,h as m,k as R,T as ce,g as X,P as pe,I as Se,O as F,n as be,Q as xe,J as H,R as Y,M as ne,s as K,K as W,m as _e,S as we,U as Ce,o as de,V as oe,W as qe,C as G,D as ie,E as _,G as N,F as b,X as J,Y as Pe,Z as ke,_ as Te,$ as Ie}from"./index.8fd41bcc.js";import{a as $e,Q as O}from"./QBtn.c44c2b8d.js";import{a as M,c as Be,h as Ne}from"./render.bd5abf5f.js";import{v as Z,g as Ae,f as Ee}from"./QIcon.b9549778.js";import{u as ae}from"./use-timeout.63de8106.js";import{_ as De}from"./plugin-vue_export-helper.21dcd24c.js";const Le={ratio:[String,Number]};function ze(e,t){return f(()=>{const a=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const Re=1.7778;var le=U({name:"QImg",props:{...Le,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Re},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:a}){const r=q(e.initialRatio),l=ze(e,r),n=X(),{registerTimeout:i,removeTimeout:u}=ae(),{registerTimeout:y,removeTimeout:p}=ae(),c=f(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),S=f(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),v=[q(null),q(c.value)],g=q(0),x=q(!1),P=q(!1),k=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),A=f(()=>({width:e.width,height:e.height})),V=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),T=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function $(){if(p(),e.loadingShowDelay===0){x.value=!0;return}y(()=>{x.value=!0},e.loadingShowDelay)}function E(){p(),x.value=!1}function B({target:s}){Z(n)===!1&&(u(),r.value=s.naturalHeight===0?.5:s.naturalWidth/s.naturalHeight,w(s,1))}function w(s,o){o===1e3||Z(n)===!0||(s.complete===!0?D(s):i(()=>{w(s,o+1)},50))}function D(s){Z(n)!==!0&&(g.value=g.value^1,v[g.value].value=null,E(),s.getAttribute("__qerror")!=="true"&&(P.value=!1),a("load",s.currentSrc||s.src))}function j(s){u(),E(),P.value=!0,v[g.value].value=S.value,v[g.value^1].value=c.value,a("error",s)}function h(s){const o=v[s].value,d={key:"img_"+s,class:V.value,style:T.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...o};return g.value===s?Object.assign(d,{class:d.class+"current",onLoad:B,onError:j}):d.class+="loaded",m("div",{class:"q-img__container absolute-full",key:"img"+s},m("img",d))}function I(){return x.value===!1?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},M(t[P.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[m($e,{color:e.spinnerColor,size:e.spinnerSize})])}{let s=function(){R(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,o=>{u(),P.value=!1,o===null?(E(),v[g.value^1].value=c.value):$(),v[g.value].value=o},{immediate:!0})};ye.value===!0?ee(s):s()}return()=>{const s=[];return l.value!==null&&s.push(m("div",{key:"filler",style:l.value})),v[0].value!==null&&s.push(h(0)),v[1].value!==null&&s.push(h(1)),s.push(m(ce,{name:"q-transition--fade"},I)),m("div",{key:"main",class:k.value,style:A.value,role:"img","aria-label":e.alt},s)}}}),Ve=U({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const a=f(()=>`q-carousel__control absolute absolute-${e.position}`),r=f(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>m("div",{class:a.value,style:r.value},M(t.default))}});const te={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},je=Object.keys(te);te.all=!0;function re(e){const t={};for(const a of je)e[a]===!0&&(t[a]=!0);return Object.keys(t).length===0?te:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Fe=["INPUT","TEXTAREA"];function se(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Fe.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Qe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),pe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Oe(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,r)=>{const l=parseFloat(a);l&&(t[r]=l)}),t}var Me=Se({name:"touch-swipe",beforeMount(e,{value:t,arg:a,modifiers:r}){if(r.mouse!==!0&&F.has.touch!==!0)return;const l=r.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Oe(a),direction:re(r),noop:be,mouseStart(i){se(i,n)&&xe(i)&&(H(n,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(se(i,n)){const u=i.target;H(n,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,u){F.is.firefox===!0&&Y(e,!0);const y=ne(i);n.event={x:y.left,y:y.top,time:Date.now(),mouse:u===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){K(i);return}const u=Date.now()-n.event.time;if(u===0)return;const y=ne(i),p=y.left-n.event.x,c=Math.abs(p),S=y.top-n.event.y,v=Math.abs(S);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&v<n.sensitivity[1]){n.end(i);return}}else if(window.getSelection().toString()!==""){n.end(i);return}else if(c<n.sensitivity[2]&&v<n.sensitivity[2])return;const g=c/u,x=v/u;n.direction.vertical===!0&&c<v&&c<100&&x>n.sensitivity[0]&&(n.event.dir=S<0?"up":"down"),n.direction.horizontal===!0&&c>v&&v<100&&g>n.sensitivity[0]&&(n.event.dir=p<0?"left":"right"),n.direction.up===!0&&c<v&&S<0&&c<100&&x>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<v&&S>0&&c<100&&x>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>v&&p<0&&v<100&&g>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>v&&p>0&&v<100&&g>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(K(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qe(),n.styleCleanup=P=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const k=()=>{document.body.classList.remove("no-pointer-events--children")};P===!0?setTimeout(k,50):k()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:u,distance:{x:c,y:v}})):n.end(i)},end(i){n.event!==void 0&&(W(n,"temp"),F.is.firefox===!0&&Y(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&K(i),n.event=void 0)}};if(e.__qtouchswipe=n,r.mouse===!0){const i=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";H(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}F.has.touch===!0&&H(n,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const a=e.__qtouchswipe;a!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&a.end(),a.handler=t.value),a.direction=re(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(W(t,"main"),W(t,"temp"),F.is.firefox===!0&&Y(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function He(){let e=Object.create(null);return{getCache:(t,a)=>e[t]===void 0?e[t]=typeof a=="function"?a():a:e[t],setCache(t,a){e[t]=a},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const Ue={name:{required:!0},disable:Boolean},ue={setup(e,{slots:t}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},M(t.default))}},Xe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ye=["update:modelValue","beforeTransition","transition"];function Ke(){const{props:e,emit:t,proxy:a}=X(),{getCache:r}=He();let l,n;const i=q(null),u=q(null);function y(o){const d=e.vertical===!0?"up":"left";w((a.$q.lang.rtl===!0?-1:1)*(o.direction===d?1:-1))}const p=f(()=>[[Me,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),S=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),g=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),P=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);R(()=>e.modelValue,(o,d)=>{const C=T(o)===!0?$(o):-1;n!==!0&&B(C===-1?0:C<$(d)?-1:1),i.value!==C&&(i.value=C,t("beforeTransition",o,d),_e(()=>{t("transition",o,d)}))});function k(){w(1)}function A(){w(-1)}function V(o){t("update:modelValue",o)}function T(o){return o!=null&&o!==""}function $(o){return l.findIndex(d=>d.props.name===o&&d.props.disable!==""&&d.props.disable!==!0)}function E(){return l.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function B(o){const d=o!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(o===-1?c.value:S.value):null;u.value!==d&&(u.value=d)}function w(o,d=i.value){let C=d+o;for(;C!==-1&&C<l.length;){const L=l[C];if(L!==void 0&&L.props.disable!==""&&L.props.disable!==!0){B(o),n=!0,t("update:modelValue",L.props.name),setTimeout(()=>{n=!1});return}C+=o}e.infinite===!0&&l.length!==0&&d!==-1&&d!==l.length&&w(o,o===-1?l.length:-1)}function D(){const o=$(e.modelValue);return i.value!==o&&(i.value=o),!0}function j(){const o=T(e.modelValue)===!0&&D()&&l[i.value];return e.keepAlive===!0?[m(we,x.value,[m(P.value===!0?r(g.value,()=>({...ue,name:g.value})):ue,{key:g.value,style:v.value},()=>o)])]:[m("div",{class:"q-panel scroll",style:v.value,key:g.value,role:"tabpanel"},[o])]}function h(){if(l.length!==0)return e.animated===!0?[m(ce,{name:u.value},j)]:j()}function I(o){return l=Ae(M(o.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&T(d.props.name)===!0),l.length}function s(){return l}return Object.assign(a,{next:k,previous:A,goTo:V}),{panelIndex:i,panelDirectives:p,updatePanelsList:I,updatePanelIndex:D,getPanelContent:h,getEnabledPanels:E,getPanels:s,isValidPanelName:T,keepAliveProps:x,needsUniqueKeepAliveWrapper:P,goToPanelByOffset:w,goToPanel:V,nextPanel:k,previousPanel:A}}var We=U({name:"QCarouselSlide",props:{...Ue,imgSrc:String},setup(e,{slots:t}){const a=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:a.value},M(t.default))}});let Q=0;const Ge={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Je=["update:fullscreen","fullscreen"];function Ze(){const e=X(),{props:t,emit:a,proxy:r}=e;let l,n,i;const u=q(!1);Ee(e)===!0&&R(()=>r.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),R(()=>t.fullscreen,S=>{u.value!==S&&y()}),R(u,S=>{a("update:fullscreen",S),a("fullscreen",S)});function y(){u.value===!0?c():p()}function p(){u.value!==!0&&(u.value=!0,i=r.$el.parentNode,i.replaceChild(n,r.$el),document.body.appendChild(r.$el),Q++,Q===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:c},oe.add(l))}function c(){u.value===!0&&(l!==void 0&&(oe.remove(l),l=void 0),i.replaceChild(r.$el,n),u.value=!1,Q=Math.max(0,Q-1),Q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return Ce(()=>{n=document.createElement("span")}),ee(()=>{t.fullscreen===!0&&p()}),de(c),Object.assign(r,{toggleFullscreen:y,setFullscreen:p,exitFullscreen:c}),{inFullscreen:u,toggleFullscreen:y}}const et=["top","right","bottom","left"],tt=["regular","flat","outline","push","unelevated"];var nt=U({name:"QCarousel",props:{...ve,...Xe,...Ge,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>tt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>et.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Je,...Ye],setup(e,{slots:t}){const{proxy:{$q:a}}=X(),r=fe(e,a);let l=null,n;const{updatePanelsList:i,getPanelContent:u,panelDirectives:y,goToPanel:p,previousPanel:c,nextPanel:S,getEnabledPanels:v,panelIndex:g}=Ke(),{inFullscreen:x}=Ze(),P=f(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),k=f(()=>e.vertical===!0?"vertical":"horizontal"),A=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),V=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${k.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${A.value}`:"")),T=f(()=>{const h=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?h.reverse():h}),$=f(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),E=f(()=>e.navigationActiveIcon||$.value),B=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));R(()=>e.modelValue,()=>{e.autoplay&&w()}),R(()=>e.autoplay,h=>{h?w():l!==null&&(clearTimeout(l),l=null)});function w(){const h=qe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,h>=0?S():c()},h)}ee(()=>{e.autoplay&&w()}),de(()=>{l!==null&&clearTimeout(l)});function D(h,I){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${h} q-carousel__navigation--${A.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(I))])}function j(){const h=[];if(e.navigation===!0){const I=t["navigation-icon"]!==void 0?t["navigation-icon"]:o=>m(O,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),s=n-1;h.push(D("buttons",(o,d)=>{const C=o.props.name,L=g.value===d;return I({index:d,maxIndex:s,name:C,active:L,btnProps:{icon:L===!0?E.value:$.value,size:"sm",...B.value},onClick:()=>{p(C)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";h.push(D("thumbnails",s=>{const o=s.props;return m("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+I,src:o.imgSrc||o["img-src"],onClick:()=>{p(o.name)}})}))}return e.arrows===!0&&g.value>=0&&((e.infinite===!0||g.value>0)&&h.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${k.value} absolute flex flex-center`},[m(O,{icon:T.value[0],...B.value,onClick:c})])),(e.infinite===!0||g.value<n-1)&&h.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${k.value} absolute flex flex-center`},[m(O,{icon:T.value[1],...B.value,onClick:S})]))),Ne(t.control,h)}return()=>(n=i(t),m("div",{class:V.value,style:P.value},[Be("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>y.value)].concat(j())))}});q(!0);const ot={name:"IndexPage",setup(){const e=q(!1),t=q("one");return{fullscreen:e,slides:[{name:"one",title:"One",imgSrc1:"src/assets/gallery/gallery1.jpg"},{name:"two",title:"Two",imgSrc1:"src/assets/gallery/gallery3.jpg"},{name:"three",title:"Three",imgSrc1:"src/assets/gallery/gallery2.jpg"},{name:"four",title:"Four",imgSrc1:"src/assets/gallery/gallery4.jpg"}],currentSlide:t}}},it={class:"column bg-accent items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"},at={class:"column text-center col-shrink full-width"},lt={class:"col-grow column"},rt={class:"flex flex-center q-pb-md col"};function st(e,t,a,r,l,n){return G(),ie(me,{class:"row justify-center items-stretch content-stretch"},{default:_(()=>[N("div",it,[N("div",at,[b(he,{flat:"",square:"",class:"column bg-accent"},{default:_(()=>[b(z,{flat:"",class:"text-h3 q-pa-xs bg-secondary column flex-center text-weight-medium text-primary text-shadow"},{default:_(()=>t[2]||(t[2]=[N("div",{class:"q-pa-md"},"Hi! I'm Saru",-1)])),_:1}),b(ge,{class:"bg-blue-8",size:"5px"}),b(z,null,{default:_(()=>[b(le,{src:"src/assets/website/SaruAvatar.svg",style:{width:"256px",height:"auto"}})]),_:1}),b(z,{flat:"",class:"q-px-auto q-py-none"},{default:_(()=>t[3]||(t[3]=[J(" I'm a digital 2D and 3D artist living in Berlin and work mostly with drawing, sketching, animation and more. Here you can find my works and if you like what you see feel free to commission me. ")])),_:1}),b(z,{flat:"",class:"row q-gutter-x-sm q-py-md text-h3 flex-center text-weight-medium text-primary self-center text-shadow"},{default:_(()=>t[4]||(t[4]=[N("div",null,"I'm currently",-1),N("div",{class:"text-weight-bold text-secondary"},"accepting",-1),N("div",null,"commissions!",-1)])),_:1}),b(z,{class:"q-py-none"},{default:_(()=>t[5]||(t[5]=[J(" You can contact me through my accounts on social media, or alternatively via E-mail at: ")])),_:1}),b(z,{class:"text-primary text-weight-bold text-shadow q-py-none"},{default:_(()=>t[6]||(t[6]=[J("synfiv@gmail.com")])),_:1}),b(z)]),_:1})]),N("div",lt,[b(nt,{modelValue:r.currentSlide,"onUpdate:modelValue":t[1]||(t[1]=i=>r.currentSlide=i),animated:"",class:"bg-accent col","transition-next":"slide-left","transition-prev":"slide-right",navigation:"","control-color":"secondary",swipeable:"",padding:"",autoplay:"",infinite:"",fullscreen:r.fullscreen},{"navigation-icon":_(({active:i,btnProps:u,onClick:y})=>[b(O,Pe(u,{size:"lg",icon:i?"circle":"radio_button_unchecked",onClick:y}),null,16,["icon","onClick"])]),control:_(()=>[b(Ve,{position:"top-left",class:"text-center"},{default:_(()=>[b(O,{color:"secondary","text-color":"grey-3",icon:"fullscreen",dense:"",onClick:t[0]||(t[0]=i=>r.fullscreen=!r.fullscreen)})]),_:1})]),default:_(()=>[(G(!0),ke(Ie,null,Te(r.slides,i=>(G(),ie(We,{key:i.name,name:i.name,class:"column col"},{default:_(()=>[N("div",rt,[b(le,{fit:"contain",class:"col",src:i.imgSrc1,position:"top"},null,8,["src"])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","fullscreen"])])])]),_:1})}var ht=De(ot,[["render",st]]);export{ht as default};
