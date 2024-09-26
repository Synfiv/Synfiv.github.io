import{Q as U,a as f,b as B}from"./QPage.2d00e765.js";import{u as Q,a as I,_ as G,Q as r}from"./plugin-vue_export-helper.5d89cf97.js";import{j as L,c as y,h as E,r as q,b as H,s as X,g as P,C as d,D as x,E as a,G as t,F as l,_ as n,X as p,Y as v,Z as b,$ as g}from"./index.feb9849c.js";import{a as A,b as Y}from"./render.38f15285.js";import{u as Z,a as J,Q as F}from"./QIcon.1e26b101.js";var u=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(s,{slots:e}){const m=y(()=>`q-item__section column q-item__section--${s.avatar===!0||s.side===!0||s.thumbnail===!0?"side":"main"}`+(s.top===!0?" q-item__section--top justify-start":" justify-center")+(s.avatar===!0?" q-item__section--avatar":"")+(s.thumbnail===!0?" q-item__section--thumbnail":"")+(s.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:m.value},A(e.default))}}),h=L({name:"QItem",props:{...Q,...Z,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(s,{slots:e,emit:m}){const{proxy:{$q:c}}=P(),w=I(s,c),{hasLink:_,linkAttrs:o,linkClass:N,linkTag:R,navigateOnClick:T}=J(),S=q(null),z=q(null),D=y(()=>s.clickable===!0||_.value===!0||s.tag==="label"),k=y(()=>s.disable!==!0&&D.value===!0),K=y(()=>"q-item q-item-type row no-wrap"+(s.dense===!0?" q-item--dense":"")+(w.value===!0?" q-item--dark":"")+(_.value===!0&&s.active===null?N.value:s.active===!0?` q-item--active${s.activeClass!==void 0?` ${s.activeClass}`:""}`:"")+(s.disable===!0?" disabled":"")+(k.value===!0?" q-item--clickable q-link cursor-pointer "+(s.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(s.focused===!0?" q-manual-focusable--focused":""):"")),$=y(()=>{if(s.insetLevel===void 0)return null;const i=c.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+s.insetLevel*56+"px"}});function O(i){k.value===!0&&(z.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===S.value?z.value.focus():document.activeElement===z.value&&S.value.focus()),T(i))}function W(i){if(k.value===!0&&H(i,[13,32])===!0){X(i),i.qKeyEvent=!0;const V=new MouseEvent("click",i);V.qKeyEvent=!0,S.value.dispatchEvent(V)}m("keyup",i)}function M(){const i=Y(e.default,[]);return k.value===!0&&i.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:z})),i}return()=>{const i={ref:S,class:K.value,style:$.value,role:"listitem",onClick:O,onKeyup:W};return k.value===!0?(i.tabindex=s.tabindex||"0",Object.assign(i,o.value)):D.value===!0&&(i["aria-disabled"]="true"),E(R.value,i,M())}}});const ee=["ul","ol"];var C=L({name:"QList",props:{...Q,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(s,{slots:e}){const m=P(),c=I(s,m.proxy.$q),w=y(()=>ee.includes(s.tag)?null:"list"),_=y(()=>"q-list"+(s.bordered===!0?" q-list--bordered":"")+(s.dense===!0?" q-list--dense":"")+(s.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(s.padding===!0?" q-list--padding":""));return()=>E(s.tag,{class:_.value,role:w.value},A(e.default))}}),j=L({name:"QBar",props:{...Q,dense:Boolean},setup(s,{slots:e}){const{proxy:{$q:m}}=P(),c=I(s,m),w=y(()=>`q-bar row no-wrap items-center q-bar--${s.dense===!0?"dense":"standard"}  q-bar--${c.value===!0?"dark":"light"}`);return()=>E("div",{class:w.value,role:"toolbar"},A(e.default))}});const te={name:"PricesPage",setup(){const s=q([{label:"Rough Lines",price:"5 \u20AC"},{label:"Sketched Lines",price:"10 \u20AC"},{label:"Solid Lines",price:"20 \u20AC"},{label:"Inked Lines",price:"30 \u20AC"}]),e=q([{label:"Monochrome",price:"None"},{label:"Flat Colors",price:"5 \u20AC"},{label:"Simple Tones",price:"10 \u20AC"},{label:"Complex Tones",price:"20 \u20AC"}]),m=q([{label:"No Shading",price:"None"},{label:"Basic Shading",price:"5 \u20AC"},{label:"Complex Shading",price:"10 \u20AC"},{label:"Rendered Shading",price:"20 \u20AC"}]),c=q([{label:"Headshot",price:"5 \u20AC"},{label:"Upper-Body",price:"10 \u20AC"},{label:"\xBE-Body",price:"15 \u20AC"},{label:"Full-Body",price:" 20\u20AC"}]);return{lineartEntries:s,colorEntries:e,shadingEntries:m,framingEntries:c}}},le={class:"column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"},ae={class:"column text-center col-shrink full-width"},se={class:"q-px-xl"},oe={class:"column text-center col-grow full-width"},ne={class:"col-grow bg-accent"},re={class:"row"},ie={class:"column col no-wrap text-center"},ce={class:"column col text-center"},de={class:"row"},ue={class:"column col no-wrap text-center"},me={class:"column col text-center"},fe={class:"row"},xe={class:"column col no-wrap text-center"},pe={class:"column col text-center"},ve={class:"row"},be={class:"column col no-wrap text-center"},ge={class:"column col text-center"},he={class:"row col-grow"},ye={class:"col"},we={class:"col"},qe={class:"row q-pa-md bg-accent flex-center fit"},_e={class:"col-6 text-h5 text-shadow text-center"},ke={class:"col"},Be={class:"row q-pa-md bg-accent flex-center fit"},Ce={class:"col-6 text-h5 text-shadow text-center"},Ee={class:"col"},Se={class:"col"},ze={class:"row q-pa-md bg-accent flex-center fit"},Fe={class:"col-6 text-h5 text-shadow text-center"},Le={class:"col"},Qe={class:"row q-pa-md bg-accent flex-center fit"},Ie={class:"col-6 text-h5 text-shadow text-center"};function Pe(s,e,m,c,w,_){return d(),x(U,{padding:"",class:"row justify-center items-stretch content-stretch q-pa-none"},{default:a(()=>[t("div",le,[t("div",ae,[l(B,{class:"bg-accent q-pb-md column"},{default:a(()=>[l(f,{flat:"",class:"text-h3 q-py-xs q-px-none bg-secondary column flex-center text-weight-medium text-primary text-shadow"},{default:a(()=>e[0]||(e[0]=[t("div",{class:"q-pa-md"},"Detailed Pricing Information",-1)])),_:1}),l(r,{class:"bg-blue-8",size:"5px"}),t("div",se,[l(f,null,{default:a(()=>e[1]||(e[1]=[n("In this page you can find the rough guideliens of how I evaluate the cost for a commission. To contact me, please message my social media accounts, or use my E-mail: "),t("div",{class:"text-primary text-weight-regular text-shadow"}," synfiv@gmail.com ",-1)])),_:1}),l(f,null,{default:a(()=>e[2]||(e[2]=[n(" I tend to set the price based on the amount of effort as-well as time that certain aspects of a piece take. The tables set out in this page are guidelines for the prince range I will be asking based on the desired outcome. It is flexible and depends on the piece in question. ")])),_:1}),l(f,null,{default:a(()=>e[3]||(e[3]=[n(" A very basic sketch can be provided ahead of the payment being transferred to demonstrate the skeleton of the piece at no charge or commitment (within reason), and once a satisfactory price is agreed on a partial payment of the price will be asked for before work starts. ")])),_:1}),l(f,{class:"text-primary text-shadow"},{default:a(()=>e[4]||(e[4]=[n(" For questions and inquiries regarding 3D modelling or animation, please contact me directly. ")])),_:1})])]),_:1})]),t("div",oe,[l(B,{flat:"",square:"",class:"bg-accent q-py-md column col"},{default:a(()=>[l(r,{inline:"",size:"4px",color:"primary"}),l(f,{flat:"",class:"text-h3 q-py-xs q-px-none bg-dark column flex-center text-weight-medium text-primary text-shadow"},{default:a(()=>e[5]||(e[5]=[t("div",{class:"q-pa-md"},"Base Cost",-1)])),_:1}),l(r,{inline:"",size:"4px",color:"primary"}),l(r,{inline:"",size:"10px",color:"accent"}),t("div",ne,[l(C,{class:"row"},{default:a(()=>[l(C,{class:"col-grow"},{default:a(()=>[t("div",null,[l(u,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:a(()=>e[6]||(e[6]=[n("Framing")])),_:1}),l(r,{inline:"",size:"2px",color:"secondary"})]),t("div",re,[t("div",ie,[(d(!0),p(b,null,v(c.framingEntries,o=>(d(),x(h,{key:o.label},{default:a(()=>[l(u,{class:"col text-no-wrap smallerFont"},{default:a(()=>[n(g(o.label),1)]),_:2},1024)]),_:2},1024))),128))]),l(r,{vertical:"",color:"grey-3",inset:""}),t("div",ce,[(d(!0),p(b,null,v(c.framingEntries,o=>(d(),x(h,{key:o.price},{default:a(()=>[l(u,null,{default:a(()=>[n(g(o.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),l(C,{class:"col-grow"},{default:a(()=>[t("div",null,[l(u,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:a(()=>e[7]||(e[7]=[n("Lineart")])),_:1}),l(r,{inline:"",size:"2px",color:"secondary"})]),t("div",de,[t("div",ue,[(d(!0),p(b,null,v(c.lineartEntries,o=>(d(),x(h,{key:o.label},{default:a(()=>[l(u,{class:"col text-no-wrap smallerFont"},{default:a(()=>[n(g(o.label),1)]),_:2},1024)]),_:2},1024))),128))]),l(r,{vertical:"",color:"grey-3",inset:""}),t("div",me,[(d(!0),p(b,null,v(c.lineartEntries,o=>(d(),x(h,{key:o.price},{default:a(()=>[l(u,null,{default:a(()=>[n(g(o.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),l(C,{class:"col-grow"},{default:a(()=>[t("div",null,[l(u,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:a(()=>e[8]||(e[8]=[n("Color")])),_:1}),l(r,{inline:"",size:"2px",color:"secondary"})]),t("div",fe,[t("div",xe,[(d(!0),p(b,null,v(c.colorEntries,o=>(d(),x(h,{key:o.label},{default:a(()=>[l(u,{class:"col text-no-wrap smallerFont"},{default:a(()=>[n(g(o.label),1)]),_:2},1024)]),_:2},1024))),128))]),l(r,{vertical:"",color:"grey-3",inset:""}),t("div",pe,[(d(!0),p(b,null,v(c.colorEntries,o=>(d(),x(h,{key:o.price},{default:a(()=>[l(u,null,{default:a(()=>[n(g(o.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),l(C,{class:"col-grow"},{default:a(()=>[t("div",null,[l(u,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:a(()=>e[9]||(e[9]=[n("Shading")])),_:1}),l(r,{inline:"",size:"2px",color:"secondary"})]),t("div",ve,[t("div",be,[(d(!0),p(b,null,v(c.shadingEntries,o=>(d(),x(h,{key:o.label},{default:a(()=>[l(u,{class:"col text-no-wrap smallerFont"},{default:a(()=>[n(g(o.label),1)]),_:2},1024)]),_:2},1024))),128))]),l(r,{vertical:"",color:"grey-3",inset:""}),t("div",ge,[(d(!0),p(b,null,v(c.shadingEntries,o=>(d(),x(h,{key:o.price},{default:a(()=>[l(u,null,{default:a(()=>[n(g(o.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1})]),_:1})]),l(r,{inline:"",size:"4px",color:"primary"}),l(f,{flat:"",class:"text-h3 q-py-xs q-px-none bg-dark column flex-center text-weight-medium text-primary text-shadow"},{default:a(()=>e[10]||(e[10]=[t("div",{class:"q-pa-md"},"Additional Costs",-1)])),_:1}),l(r,{inline:"",size:"4px",color:"primary"}),l(r,{inline:"",size:"10px",color:"accent"}),t("div",he,[l(B,{flat:"",class:"col-md-6 col-sm-12 bg-accent column"},{default:a(()=>[e[20]||(e[20]=t("div",{class:"text-h2 bg-dark q-pb-sm text-primary text-shadow"}," Characters ",-1)),l(j,{style:{height:"2px"},class:"bg-secondary"}),l(f,{class:"text-left no-wrap column bg-info col"},{default:a(()=>[t("div",ye,[e[11]||(e[11]=t("div",{class:"row q-pa-md bg-accent flex-center fit"},[t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Additional Characters: "),t("div",{class:"col-6 row text-h5 flex-center text-shadow"},[t("div",null,[t("span",null,"An added 50% of"),t("span",{class:"q-pl-sm text-primary"},"base cost")])]),t("div",{class:"col-12 q-pt-md"}," Each additional character will add an extra 50% of the base (Lineart, Color, Shading) cost ")],-1)),l(r,{size:"1px",color:"secondary"})]),t("div",we,[t("div",qe,[e[14]||(e[14]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Complex Bodies / Complex Patterns ",-1)),t("div",_e,[e[12]||(e[12]=n(" Free ")),l(F,{name:"east"}),e[13]||(e[13]=n(" Variable "))]),e[15]||(e[15]=t("div",{class:"col-12 q-pt-md"}," With particularly compelx characters there may be an additional charge depending on the added time and effort required ",-1))]),l(r,{size:"1px",color:"secondary"})]),t("div",ke,[t("div",Be,[e[18]||(e[18]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Outfits/Clothing and Objects ",-1)),t("div",Ce,[e[16]||(e[16]=n(" Free ")),l(F,{name:"east"}),e[17]||(e[17]=n(" Variable "))]),e[19]||(e[19]=t("div",{class:"col-12 q-pt-md"}," Depending on technical complexity these may be free, or incur a charge based on the time and effort required ",-1))]),l(r,{size:"1px",color:"secondary"})])]),_:1})]),_:1}),l(B,{square:"",flat:"",class:"col-md-6 col-sm-12 bg-accent column"},{default:a(()=>[e[30]||(e[30]=t("div",{class:"text-h2 bg-dark text-primary q-pb-sm text-shadow"}," Extras ",-1)),l(j,{style:{height:"2px"},class:"bg-secondary q-pb-none"}),l(f,{class:"text-left column bg-info col"},{default:a(()=>[t("div",Ee,[e[21]||(e[21]=t("div",{class:"row q-pa-md bg-accent flex-center fit"},[t("div",{class:"col-6 text-h5 q-pl-sm text-shadow"}," Additional Views/Multiple Panels "),t("div",{class:"col-6 text-h5 text-shadow text-center"}," Variable "),t("div",{class:"col-12 q-pt-md"}," Price will depend on how much re-drawing is necessary for the additional views ")],-1)),l(r,{size:"1px",color:"secondary"})]),t("div",Se,[t("div",ze,[e[24]||(e[24]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Edited / Alternative Versions ",-1)),t("div",Fe,[e[22]||(e[22]=n(" Free ")),l(F,{name:"east"}),e[23]||(e[23]=n(" Variable "))]),e[25]||(e[25]=t("div",{class:"col-12 q-pt-md"}," Simple edits can be included for no charge, however complex changes may incur a charge ",-1))]),l(r,{size:"1px",color:"secondary"})]),t("div",Le,[t("div",Qe,[e[28]||(e[28]=t("div",{class:"col-6 text-h5 flex-center text-shadow"}," Backgrounds ",-1)),t("div",Ie,[e[26]||(e[26]=n(" Free ")),l(F,{name:"east"}),e[27]||(e[27]=n(" Variable "))]),e[29]||(e[29]=t("div",{class:"col-12 q-pt-md"}," A basic background (color, simplistic scene) is provided for free, a detailed background may incure a charge ",-1))]),l(r,{size:"1px",color:"secondary"})])]),_:1})]),_:1}),l(B,{flat:"",class:"col-12 row justify-around items-center bg-accent"},{default:a(()=>[l(f,{class:"row justify-around"},{default:a(()=>e[31]||(e[31]=[t("div",{class:"bg-dark q-px-xl q-py-md text-h4 text-primary text-shadow text-weight-medium"}," NSFW subjects add +5 \u20AC to the final price ",-1)])),_:1})]),_:1})])]),_:1})])])]),_:1})}var Re=G(te,[["render",Pe]]);export{Re as default};
