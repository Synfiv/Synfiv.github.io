import{Q as G,a as f,b as k}from"./QPage.dddf0f73.js";import{u as I,a as P,_ as U,Q as c}from"./plugin-vue_export-helper.93aa4a6d.js";import{j as F,c as v,h as C,r as B,b as X,s as Y,g as z,C as d,D as x,E as l,G as t,F as a,_ as o,X as b,Y as g,Z as h,$ as y}from"./index.345c79b8.js";import{a as A,b as Z}from"./render.691e36ca.js";import{u as H,a as J,Q as L}from"./QIcon.d764389a.js";var m=F({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(s,{slots:e}){const u=v(()=>`q-item__section column q-item__section--${s.avatar===!0||s.side===!0||s.thumbnail===!0?"side":"main"}`+(s.top===!0?" q-item__section--top justify-start":" justify-center")+(s.avatar===!0?" q-item__section--avatar":"")+(s.thumbnail===!0?" q-item__section--thumbnail":"")+(s.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:u.value},A(e.default))}}),w=F({name:"QItem",props:{...I,...H,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(s,{slots:e,emit:u}){const{proxy:{$q:i}}=z(),p=P(s,i),{hasLink:q,linkAttrs:n,linkClass:N,linkTag:R,navigateOnClick:T}=J(),E=B(null),S=B(null),D=v(()=>s.clickable===!0||q.value===!0||s.tag==="label"),_=v(()=>s.disable!==!0&&D.value===!0),$=v(()=>"q-item q-item-type row no-wrap"+(s.dense===!0?" q-item--dense":"")+(p.value===!0?" q-item--dark":"")+(q.value===!0&&s.active===null?N.value:s.active===!0?` q-item--active${s.activeClass!==void 0?` ${s.activeClass}`:""}`:"")+(s.disable===!0?" disabled":"")+(_.value===!0?" q-item--clickable q-link cursor-pointer "+(s.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(s.focused===!0?" q-manual-focusable--focused":""):"")),K=v(()=>{if(s.insetLevel===void 0)return null;const r=i.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+s.insetLevel*56+"px"}});function O(r){_.value===!0&&(S.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===E.value?S.value.focus():document.activeElement===S.value&&E.value.focus()),T(r))}function W(r){if(_.value===!0&&X(r,[13,32])===!0){Y(r),r.qKeyEvent=!0;const V=new MouseEvent("click",r);V.qKeyEvent=!0,E.value.dispatchEvent(V)}u("keyup",r)}function M(){const r=Z(e.default,[]);return _.value===!0&&r.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:S})),r}return()=>{const r={ref:E,class:$.value,style:K.value,role:"listitem",onClick:O,onKeyup:W};return _.value===!0?(r.tabindex=s.tabindex||"0",Object.assign(r,n.value)):D.value===!0&&(r["aria-disabled"]="true"),C(R.value,r,M())}}});const ee=["ul","ol"];var Q=F({name:"QList",props:{...I,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(s,{slots:e}){const u=z(),i=P(s,u.proxy.$q),p=v(()=>ee.includes(s.tag)?null:"list"),q=v(()=>"q-list"+(s.bordered===!0?" q-list--bordered":"")+(s.dense===!0?" q-list--dense":"")+(s.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(s.padding===!0?" q-list--padding":""));return()=>C(s.tag,{class:q.value,role:p.value},A(e.default))}}),j=F({name:"QBar",props:{...I,dense:Boolean},setup(s,{slots:e}){const{proxy:{$q:u}}=z(),i=P(s,u),p=v(()=>`q-bar row no-wrap items-center q-bar--${s.dense===!0?"dense":"standard"}  q-bar--${i.value===!0?"dark":"light"}`);return()=>C("div",{class:p.value,role:"toolbar"},A(e.default))}});const te={name:"PricesPage",setup(){const s=B([{label:"Rough Lines",price:"10 \u20AC"},{label:"Sketched Lines",price:"15 \u20AC"},{label:"Solid Lines",price:"25 \u20AC"},{label:"Inked Lines",price:"35 \u20AC"}]),e=B([{label:"Monochrome",price:"None"},{label:"Flat Colors",price:"5 \u20AC"},{label:"Simple Tones",price:"15 \u20AC"},{label:"Complex Tones",price:"20 \u20AC"}]),u=B([{label:"No Shading",price:"None"},{label:"Basic Shading",price:"10 \u20AC"},{label:"Complex Shading",price:"15 \u20AC"},{label:"Rendered Shading",price:" 20\u20AC"}]);return{lineartEntries:s,colorEntries:e,shadingEntries:u}}},ae={class:"column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"},se={class:"column text-center col-shrink full-width"},le={class:"q-px-xl"},oe={class:"column text-center col-grow full-width"},ne={class:"col-grow bg-accent"},re={class:"row"},ie={class:"column col no-wrap text-center"},ce={class:"column col text-center"},de={class:"row"},ue={class:"column col no-wrap text-center"},me={class:"column col text-center"},fe={class:"row"},ve={class:"column col no-wrap text-center"},xe={class:"column col text-center"},pe={class:"row col-grow"},be={class:"col"},ge={class:"col"},he={class:"row q-pa-md bg-accent flex-center fit"},ye={class:"col-6 text-h5 text-shadow text-center"},we={class:"col"},qe={class:"row q-pa-md bg-accent flex-center fit"},_e={class:"col-6 text-h5 text-shadow text-center"},ke={class:"col"},Be={class:"col"},Ce={class:"row q-pa-md bg-accent flex-center fit"},Ee={class:"col-6 text-h5 text-shadow text-center"},Se={class:"col"},Le={class:"row q-pa-md bg-accent flex-center fit"},Qe={class:"col-6 text-h5 text-shadow text-center"};function Fe(s,e,u,i,p,q){return d(),x(G,{padding:"",class:"row justify-center items-stretch content-stretch q-pa-none"},{default:l(()=>[t("div",ae,[t("div",se,[a(k,{class:"bg-accent q-pb-md column"},{default:l(()=>[a(f,{flat:"",class:"text-h3 q-py-xs q-px-none bg-secondary column flex-center text-weight-medium text-primary text-shadow"},{default:l(()=>e[0]||(e[0]=[t("div",{class:"q-pa-md"},"Detailed Pricing Information",-1)])),_:1}),a(c,{class:"bg-blue-8",size:"5px"}),t("div",le,[a(f,null,{default:l(()=>e[1]||(e[1]=[o("In this page you can find the rough guideliens of how I evaluate the cost for a commission. To contact me, please message my social media accounts, or use my E-mail: "),t("div",{class:"text-primary text-weight-regular text-shadow"}," synfiv@gmail.com ",-1)])),_:1}),a(f,null,{default:l(()=>e[2]||(e[2]=[o(" I tend to set the price based on the amount of effort as-well as time that certain aspects of a piece take. The tables set out in this page are guidelines for the prince range I will be asking based on the desired outcome. It is flexible and depends on the piece in question. ")])),_:1}),a(f,null,{default:l(()=>e[3]||(e[3]=[o(" A very basic sketch can be provided ahead of the payment being transferred to demonstrate the skeleton of the piece at no charge or commitment (within reason), and once a satisfactory price is agreed on a partial payment of the price will be asked for before work starts. ")])),_:1}),a(f,{class:"text-primary text-shadow"},{default:l(()=>e[4]||(e[4]=[o(" For questions and inquiries regarding 3D modelling or animation, please contact me directly. ")])),_:1})])]),_:1})]),t("div",oe,[a(k,{flat:"",square:"",class:"bg-accent q-py-md column col"},{default:l(()=>[t("div",ne,[a(Q,{class:"row"},{default:l(()=>[a(Q,{class:"col-grow"},{default:l(()=>[t("div",null,[a(m,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:l(()=>e[5]||(e[5]=[o("Lineart")])),_:1}),a(c,{inline:"",size:"2px",color:"secondary"})]),t("div",re,[t("div",ie,[(d(!0),b(h,null,g(i.lineartEntries,n=>(d(),x(w,{key:n.label},{default:l(()=>[a(m,{class:"col text-no-wrap smallerFont"},{default:l(()=>[o(y(n.label),1)]),_:2},1024)]),_:2},1024))),128))]),a(c,{vertical:"",color:"grey-3",inset:""}),t("div",ce,[(d(!0),b(h,null,g(i.lineartEntries,n=>(d(),x(w,{key:n.price},{default:l(()=>[a(m,null,{default:l(()=>[o(y(n.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),a(Q,{class:"col-grow"},{default:l(()=>[t("div",null,[a(m,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:l(()=>e[6]||(e[6]=[o("Color")])),_:1}),a(c,{inline:"",size:"2px",color:"secondary"})]),t("div",de,[t("div",ue,[(d(!0),b(h,null,g(i.colorEntries,n=>(d(),x(w,{key:n.label},{default:l(()=>[a(m,{class:"col text-no-wrap smallerFont"},{default:l(()=>[o(y(n.label),1)]),_:2},1024)]),_:2},1024))),128))]),a(c,{vertical:"",color:"grey-3",inset:""}),t("div",me,[(d(!0),b(h,null,g(i.colorEntries,n=>(d(),x(w,{key:n.price},{default:l(()=>[a(m,null,{default:l(()=>[o(y(n.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),a(Q,{class:"col-grow"},{default:l(()=>[t("div",null,[a(m,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:l(()=>e[7]||(e[7]=[o("Shading")])),_:1}),a(c,{inline:"",size:"2px",color:"secondary"})]),t("div",fe,[t("div",ve,[(d(!0),b(h,null,g(i.shadingEntries,n=>(d(),x(w,{key:n.label},{default:l(()=>[a(m,{class:"col text-no-wrap smallerFont"},{default:l(()=>[o(y(n.label),1)]),_:2},1024)]),_:2},1024))),128))]),a(c,{vertical:"",color:"grey-3",inset:""}),t("div",xe,[(d(!0),b(h,null,g(i.shadingEntries,n=>(d(),x(w,{key:n.price},{default:l(()=>[a(m,null,{default:l(()=>[o(y(n.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1})]),_:1})]),t("div",pe,[a(k,{flat:"",class:"col-md-6 col-sm-12 bg-accent column"},{default:l(()=>[e[17]||(e[17]=t("div",{class:"text-h2 bg-dark q-pb-sm text-primary text-shadow"}," Characters ",-1)),a(j,{style:{height:"2px"},class:"bg-secondary"}),a(f,{class:"text-left no-wrap column bg-info col"},{default:l(()=>[t("div",be,[e[8]||(e[8]=t("div",{class:"row q-pa-md bg-accent flex-center fit"},[t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Additional Characters: "),t("div",{class:"col-6 row text-h5 flex-center text-shadow"},[t("div",null,[t("span",null,"An added 50% of"),t("span",{class:"q-pl-sm text-primary"},"base cost")])]),t("div",{class:"col-12 q-pt-md"}," Each additional character will add an extra 50% of the base (Lineart, Color, Shading) cost ")],-1)),a(c,{size:"1px",color:"secondary"})]),t("div",ge,[t("div",he,[e[11]||(e[11]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Complex Bodies / Complex Patterns ",-1)),t("div",ye,[e[9]||(e[9]=o(" Free ")),a(L,{name:"east"}),e[10]||(e[10]=o(" Variable "))]),e[12]||(e[12]=t("div",{class:"col-12 q-pt-md"}," With particularly compelx characters there may be an additional charge depending on the added time and effort required ",-1))]),a(c,{size:"1px",color:"secondary"})]),t("div",we,[t("div",qe,[e[15]||(e[15]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Outfits/Clothing and Objects ",-1)),t("div",_e,[e[13]||(e[13]=o(" Free ")),a(L,{name:"east"}),e[14]||(e[14]=o(" Variable "))]),e[16]||(e[16]=t("div",{class:"col-12 q-pt-md"}," Depending on technical complexity these may be free, or incur a charge based on the time and effort required ",-1))]),a(c,{size:"1px",color:"secondary"})])]),_:1})]),_:1}),a(k,{square:"",flat:"",class:"col-md-6 col-sm-12 bg-accent column"},{default:l(()=>[e[27]||(e[27]=t("div",{class:"text-h2 bg-dark text-primary q-pb-sm text-shadow"}," Extras ",-1)),a(j,{style:{height:"2px"},class:"bg-secondary q-pb-none"}),a(f,{class:"text-left column bg-info col"},{default:l(()=>[t("div",ke,[e[18]||(e[18]=t("div",{class:"row q-pa-md bg-accent flex-center fit"},[t("div",{class:"col-6 text-h5 q-pl-sm text-shadow"}," Additional Views/Multiple Panels "),t("div",{class:"col-6 text-h5 text-shadow text-center"}," Variable "),t("div",{class:"col-12 q-pt-md"}," Price will depend on how much re-drawing is necessary for the additional views ")],-1)),a(c,{size:"1px",color:"secondary"})]),t("div",Be,[t("div",Ce,[e[21]||(e[21]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Edited / Alternative Versions ",-1)),t("div",Ee,[e[19]||(e[19]=o(" Free ")),a(L,{name:"east"}),e[20]||(e[20]=o(" Variable "))]),e[22]||(e[22]=t("div",{class:"col-12 q-pt-md"}," Simple edits can be included for no charge, however complex changes may incur a charge ",-1))]),a(c,{size:"1px",color:"secondary"})]),t("div",Se,[t("div",Le,[e[25]||(e[25]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Backgrounds ",-1)),t("div",Qe,[e[23]||(e[23]=o(" Free ")),a(L,{name:"east"}),e[24]||(e[24]=o(" Variable "))]),e[26]||(e[26]=t("div",{class:"col-12 q-pt-md"}," A basic background (color, simplistic scene) is provided for free, a detailed background may incure a charge ",-1))]),a(c,{size:"1px",color:"secondary"})])]),_:1})]),_:1}),a(k,{flat:"",class:"col-12 row justify-around items-center bg-accent"},{default:l(()=>[a(f,{class:"row justify-around"},{default:l(()=>e[28]||(e[28]=[t("div",{class:"bg-dark q-px-xl q-py-md text-h4 text-primary text-shadow text-weight-medium"}," NSFW subjects add +5 \u20AC to the final price ",-1)])),_:1})]),_:1})])]),_:1})])])]),_:1})}var Ve=U(te,[["render",Fe]]);export{Ve as default};
