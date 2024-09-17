import{u as A,a as F,Q as $,b as m,c as r,d as k}from"./QPage.fbd6b847.js";import{j as L,c as x,h as z,r as _,b as G,s as U,g as P,C as d,D as p,E as s,G as a,F as t,X as o,Z as v,_ as h,$ as b,a0 as g}from"./index.feee9f42.js";import{a as T,b as X}from"./render.ede547ec.js";import{u as Z,a as H,Q as E}from"./QIcon.c872498d.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";var c=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(l,{slots:e}){const f=x(()=>`q-item__section column q-item__section--${l.avatar===!0||l.side===!0||l.thumbnail===!0?"side":"main"}`+(l.top===!0?" q-item__section--top justify-start":" justify-center")+(l.avatar===!0?" q-item__section--avatar":"")+(l.thumbnail===!0?" q-item__section--thumbnail":"")+(l.noWrap===!0?" q-item__section--nowrap":""));return()=>z("div",{class:f.value},T(e.default))}}),w=L({name:"QItem",props:{...A,...Z,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(l,{slots:e,emit:f}){const{proxy:{$q:u}}=P(),C=F(l,u),{hasLink:y,linkAttrs:i,linkClass:V,linkTag:D,navigateOnClick:N}=H(),I=_(null),B=_(null),Q=x(()=>l.clickable===!0||y.value===!0||l.tag==="label"),q=x(()=>l.disable!==!0&&Q.value===!0),R=x(()=>"q-item q-item-type row no-wrap"+(l.dense===!0?" q-item--dense":"")+(C.value===!0?" q-item--dark":"")+(y.value===!0&&l.active===null?V.value:l.active===!0?` q-item--active${l.activeClass!==void 0?` ${l.activeClass}`:""}`:"")+(l.disable===!0?" disabled":"")+(q.value===!0?" q-item--clickable q-link cursor-pointer "+(l.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(l.focused===!0?" q-manual-focusable--focused":""):"")),K=x(()=>{if(l.insetLevel===void 0)return null;const n=u.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+l.insetLevel*56+"px"}});function O(n){q.value===!0&&(B.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===I.value?B.value.focus():document.activeElement===B.value&&I.value.focus()),N(n))}function M(n){if(q.value===!0&&G(n,[13,32])===!0){U(n),n.qKeyEvent=!0;const j=new MouseEvent("click",n);j.qKeyEvent=!0,I.value.dispatchEvent(j)}f("keyup",n)}function W(){const n=X(e.default,[]);return q.value===!0&&n.unshift(z("div",{class:"q-focus-helper",tabindex:-1,ref:B})),n}return()=>{const n={ref:I,class:R.value,style:K.value,role:"listitem",onClick:O,onKeyup:M};return q.value===!0?(n.tabindex=l.tabindex||"0",Object.assign(n,i.value)):Q.value===!0&&(n["aria-disabled"]="true"),z(D.value,n,W())}}});const Y=["ul","ol"];var S=L({name:"QList",props:{...A,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(l,{slots:e}){const f=P(),u=F(l,f.proxy.$q),C=x(()=>Y.includes(l.tag)?null:"list"),y=x(()=>"q-list"+(l.bordered===!0?" q-list--bordered":"")+(l.dense===!0?" q-list--dense":"")+(l.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(l.padding===!0?" q-list--padding":""));return()=>z(l.tag,{class:y.value,role:C.value},T(e.default))}});const ee={name:"PricesPage",setup(){const l=_([{label:"Rough Lines",price:"10 \u20AC"},{label:"Sketched Lines",price:"15 \u20AC"},{label:"Solid Lines",price:"25 \u20AC"},{label:"Inked Lines",price:"35 \u20AC"}]),e=_([{label:"Monochrome",price:"None"},{label:"Flat Colors",price:"5 \u20AC"},{label:"Simple Tones",price:"15 \u20AC"},{label:"Complex Tones",price:"20 \u20AC"}]),f=_([{label:"No Shading",price:"None"},{label:"Basic Shading",price:"10 \u20AC"},{label:"Complex Shading",price:"15 \u20AC"},{label:"Rendered Shading",price:" 20\u20AC"}]);return{lineartEntries:l,colorEntries:e,shadingEntries:f}}},te={class:"column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"},ae={class:"column text-center col-shrink full-width"},se={class:"q-px-xl"},le={class:"column text-center col-grow full-width"},oe={class:"col-grow bg-accent"},ie={class:"row"},ne={class:"column col no-wrap text-center"},re={class:"column col text-center"},de={class:"row"},ce={class:"column col no-wrap text-center"},ue={class:"column col text-center"},me={class:"row"},fe={class:"column col no-wrap text-center"},pe={class:"column col text-center"},xe={class:"row col-grow"},ve={class:"row q-pa-md flex-center"},he={class:"col-6 text-h5 text-shadow text-center"},be={class:"row q-pa-md flex-center"},ge={class:"col-6 text-h5 text-shadow text-center"},we={class:"row q-pa-md flex-center"},ye={class:"col-6 text-h5 text-shadow text-center"},qe={class:"row q-pa-md flex-center"},ke={class:"col-6 text-h5 text-shadow text-center"};function _e(l,e,f,u,C,y){return d(),p($,{padding:"",class:"row justify-center items-stretch content-stretch q-pa-none"},{default:s(()=>[a("div",te,[a("div",ae,[t(k,{class:"bg-accent q-pb-md column"},{default:s(()=>[t(m,{flat:"",class:"text-h3 q-py-xs q-px-none bg-secondary column flex-center text-weight-medium text-primary text-shadow"},{default:s(()=>e[0]||(e[0]=[a("div",{class:"q-pa-md"},"Detailed Pricing Information",-1)])),_:1}),t(r,{class:"bg-blue-8",size:"5px"}),a("div",se,[t(m,null,{default:s(()=>e[1]||(e[1]=[o("In this page you can find a breakdown of how I tend to evaluate the cost for a commission. For information on contacting me, please use the links provided in the top bar, or refer to the About page. ")])),_:1}),t(m,null,{default:s(()=>e[2]||(e[2]=[o(" I tend to set the price based on the amount of effort and especially time that certain aspects of art can take. The tables set out in this page are the approximate cost I will be asking for based on the desired outcome, though it is flexible and will be discussed before agreeing to a commission. ")])),_:1}),t(m,null,{default:s(()=>e[3]||(e[3]=[o(" Before a commission is accepted, I will ask for a part of the payment in advance (after the price has been discussed). ")])),_:1})])]),_:1})]),a("div",le,[t(k,{class:"bg-accent q-pa-md column col"},{default:s(()=>[a("div",oe,[t(S,{class:"row q-gutter-lg"},{default:s(()=>[t(S,{class:"col-grow"},{default:s(()=>[a("div",null,[t(c,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:s(()=>e[4]||(e[4]=[o("Lineart")])),_:1}),t(r,{inline:"",size:"2px",color:"secondary"}),t(c,{class:"text-subtitle1 q-py-sm"},{default:s(()=>e[5]||(e[5]=[o("The lineart finishes I can offer")])),_:1}),t(r,{inline:"",size:"2px",color:"secondary"})]),a("div",ie,[a("div",ne,[(d(!0),v(b,null,h(u.lineartEntries,i=>(d(),p(w,{key:i.label},{default:s(()=>[t(c,{class:"col text-no-wrap"},{default:s(()=>[o(g(i.label),1)]),_:2},1024)]),_:2},1024))),128))]),t(r,{vertical:"",color:"grey-3",inset:""}),a("div",re,[(d(!0),v(b,null,h(u.lineartEntries,i=>(d(),p(w,{key:i.price},{default:s(()=>[t(c,null,{default:s(()=>[o(g(i.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),t(S,{class:"col-grow"},{default:s(()=>[a("div",null,[t(c,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:s(()=>e[6]||(e[6]=[o("Color")])),_:1}),t(r,{inline:"",size:"2px",color:"secondary"}),t(c,{class:"text-subtitle1 q-py-sm"},{default:s(()=>e[7]||(e[7]=[o("The color techniques I can offer")])),_:1}),t(r,{inline:"",size:"2px",color:"secondary"})]),a("div",de,[a("div",ce,[(d(!0),v(b,null,h(u.colorEntries,i=>(d(),p(w,{key:i.label},{default:s(()=>[t(c,{class:"col text-no-wrap"},{default:s(()=>[o(g(i.label),1)]),_:2},1024)]),_:2},1024))),128))]),t(r,{vertical:"",color:"grey-3",inset:""}),a("div",ue,[(d(!0),v(b,null,h(u.colorEntries,i=>(d(),p(w,{key:i.price},{default:s(()=>[t(c,null,{default:s(()=>[o(g(i.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1}),t(S,{class:"col-grow"},{default:s(()=>[a("div",null,[t(c,{class:"text-h2 text-primary bg-dark q-pb-sm"},{default:s(()=>e[8]||(e[8]=[o("Shading")])),_:1}),t(r,{inline:"",size:"2px",color:"secondary"}),t(c,{class:"text-subtitle1 q-py-sm"},{default:s(()=>e[9]||(e[9]=[o("The shading methods I can offer")])),_:1}),t(r,{inline:"",size:"2px",color:"secondary"})]),a("div",me,[a("div",fe,[(d(!0),v(b,null,h(u.shadingEntries,i=>(d(),p(w,{key:i.label},{default:s(()=>[t(c,{class:"col text-no-wrap"},{default:s(()=>[o(g(i.label),1)]),_:2},1024)]),_:2},1024))),128))]),t(r,{vertical:"",color:"grey-3",inset:""}),a("div",pe,[(d(!0),v(b,null,h(u.shadingEntries,i=>(d(),p(w,{key:i.price},{default:s(()=>[t(c,null,{default:s(()=>[o(g(i.price),1)]),_:2},1024)]),_:2},1024))),128))])])]),_:1})]),_:1})]),a("div",xe,[t(k,{class:"col-md-6 col-sm-12 bg-accent"},{default:s(()=>[t(m,{class:"bg-dark text-primary"},{default:s(()=>e[10]||(e[10]=[a("div",{class:"text-h2 text-weight-medium text-shadow"}," Characters ",-1),a("div",{class:"text-h4 text-weight-medium text-shadow"}," Subject related details which can modify the price ",-1)])),_:1}),t(m,{class:"text-left"},{default:s(()=>[t(r,{size:"1px",color:"secondary"}),e[19]||(e[19]=a("div",{class:"row q-pa-md flex-center"},[a("div",{class:"col-6 text-h5 q-pl-sm text-shadow"}," Additional Characters: "),a("div",{class:"col-6 row text-h5 flex-center text-shadow"},[a("div",null,[a("span",null,"An added 50% of"),a("span",{class:"q-pl-sm text-primary"},"base cost")])]),a("div",{class:"col-12 q-pt-md"}," While a single character (or subject) will carry no additional price, each additional character will incur an additional 50% of the base cost ")],-1)),t(r,{size:"1px",color:"secondary"}),a("div",ve,[e[13]||(e[13]=a("div",{class:"col-6 text-h5 flex-center text-shadow"}," Complex Bodies / Complex Patterns ",-1)),a("div",he,[e[11]||(e[11]=o(" Free ")),t(E,{name:"east"}),e[12]||(e[12]=o(" Variable "))]),e[14]||(e[14]=a("div",{class:"col-12 q-pt-md"}," In some cases where a character can be complex; Multiple limbs, highly detailed features, particularly complex shapes, etc., I may charge an additional fee depending on how much difficulty and work hours are added. This will be assesed ahead of payment and will be discussed. ",-1))]),t(r,{size:"1px",color:"secondary"}),a("div",be,[e[17]||(e[17]=a("div",{class:"col-6 text-h5 flex-center text-shadow"}," Outfits/Clothing and Objects ",-1)),a("div",ge,[e[15]||(e[15]=o(" Free ")),t(E,{name:"east"}),e[16]||(e[16]=o(" Variable "))]),e[18]||(e[18]=a("div",{class:"col-12 q-pt-md"}," Depending on what kind of apparel or objects are requested, they may or may not incur an additional cost depending on the level of complexity. In particular either very ornate (complex costume, intricate patterns) or technically robust (highly accurate depiction of complex equipment, vehicles, machines, etc.) which are likely to take a significant effort to draw will incur a cost that will be discussed ahead of payment. ",-1))]),t(r,{size:"1px",color:"secondary"})]),_:1})]),_:1}),t(k,{class:"col-md-6 col-sm-12 bg-accent"},{default:s(()=>[t(m,{class:"bg-dark text-primary"},{default:s(()=>e[20]||(e[20]=[a("div",{class:"text-h2 text-weight-medium text-shadow"},"Extras",-1),a("div",{class:"text-h4 text-weight-medium text-shadow"}," Additional Options that may be Chosen ",-1)])),_:1}),t(m,{class:"text-left"},{default:s(()=>[t(r,{size:"1px",color:"secondary"}),e[29]||(e[29]=a("div",{class:"row q-pa-md flex-center"},[a("div",{class:"col-6 text-h5 q-pl-sm text-shadow"}," Additional Views/Multiple Panels "),a("div",{class:"col-6 text-h5 text-shadow text-center"}," Variable "),a("div",{class:"col-12 q-pt-md"}," Depending on how different the angle, and thus the amount that is requires to be re-drawn is, it might not incur a cost. If a complex addition is wanted, the price will be discussed. ")],-1)),t(r,{size:"1px",color:"secondary"}),a("div",we,[e[23]||(e[23]=a("div",{class:"col-6 text-h5 flex-center text-shadow"}," Edited / Alternative Versions ",-1)),a("div",ye,[e[21]||(e[21]=o(" Free ")),t(E,{name:"east"}),e[22]||(e[22]=o(" Variable "))]),e[24]||(e[24]=a("div",{class:"col-12 q-pt-md"}," In most cases an alt version of an image can be provided at no charge, however if the desired result requires significant redrawing an additional cost may be incurred ",-1))]),t(r,{size:"1px",color:"secondary"}),a("div",qe,[e[27]||(e[27]=a("div",{class:"col-6 text-h5 flex-center text-shadow"}," Backgrounds ",-1)),a("div",ke,[e[25]||(e[25]=o(" Free ")),t(E,{name:"east"}),e[26]||(e[26]=o(" Variable "))]),e[28]||(e[28]=a("div",{class:"col-12 q-pt-md"}," If a background is not desired then either a transparent or flat color background can be provided, or alternatively a simplistic/sketchy background. If a detailed background, particularly one meant to be a significant aspect of the image, may incur an additional cost depending on the complexity. ",-1))]),t(r,{size:"1px",color:"secondary"})]),_:1})]),_:1}),t(k,{class:"col-12 row justify-around items-center bg-accent"},{default:s(()=>[t(m,{class:"row justify-around"},{default:s(()=>e[30]||(e[30]=[a("div",{class:"bg-dark col-md-8 col-sm-12 q-px-xl q-py-md text-h4 text-primary text-shadow text-weight-medium"}," Any NSFW commissions will incur an additional 10\u20AC flat price, not included in the base price. ",-1)])),_:1})]),_:1})])]),_:1})])])]),_:1})}var ze=J(ee,[["render",_e]]);export{ze as default};
