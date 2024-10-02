import{u as C,a as I,Q as T,c as i,b as r}from"./QPage.434e2246.js";import{d as N,e as W,c as h}from"./QBtn.97bf2ce6.js";import{c as B,r as y,a as u,h as g,F as _,C as K,g as P,t as O,u as R,v as a,y as l,x as t,D as d}from"./index.27b8e97f.js";import{e as F,h as G}from"./dom.70443329.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";var o=B({name:"QItem",props:{...C,...N,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(s,{slots:e,emit:f}){const{proxy:{$q:c}}=P(),b=I(s,c),{hasLink:x,linkAttrs:S,linkClass:z,linkTag:L,navigateOnClick:D}=W(),p=y(null),v=y(null),w=u(()=>s.clickable===!0||x.value===!0||s.tag==="label"),m=u(()=>s.disable!==!0&&w.value===!0),E=u(()=>"q-item q-item-type row no-wrap"+(s.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(x.value===!0&&s.active===null?z.value:s.active===!0?` q-item--active${s.activeClass!==void 0?` ${s.activeClass}`:""}`:"")+(s.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(s.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(s.focused===!0?" q-manual-focusable--focused":""):"")),Q=u(()=>{if(s.insetLevel===void 0)return null;const n=c.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+s.insetLevel*56+"px"}});function A(n){m.value===!0&&(v.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===p.value?v.value.focus():document.activeElement===v.value&&p.value.focus()),D(n))}function $(n){if(m.value===!0&&_(n,[13,32])===!0){K(n),n.qKeyEvent=!0;const q=new MouseEvent("click",n);q.qKeyEvent=!0,p.value.dispatchEvent(q)}f("keyup",n)}function j(){const n=F(e.default,[]);return m.value===!0&&n.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:v})),n}return()=>{const n={ref:p,class:E.value,style:Q.value,role:"listitem",onClick:A,onKeyup:$};return m.value===!0?(n.tabindex=s.tabindex||"0",Object.assign(n,S.value)):w.value===!0&&(n["aria-disabled"]="true"),g(L.value,n,j())}}});const V=["ul","ol"];var k=B({name:"QList",props:{...C,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(s,{slots:e}){const f=P(),c=I(s,f.proxy.$q),b=u(()=>V.includes(s.tag)?null:"list"),x=u(()=>"q-list"+(s.bordered===!0?" q-list--bordered":"")+(s.dense===!0?" q-list--dense":"")+(s.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(s.padding===!0?" q-list--padding":""));return()=>g(s.tag,{class:x.value,role:b.value},G(e.default))}});y(!0);const M={name:"TermsPage"},H={style:{"max-width":"1000px"},class:"column flex-center primary-transparent q-py-md rounded-borders"},J={class:"q-py-md full-width flex-center justify-center text-no-wrap row"},X={class:"q-py-md full-width flex-center justify-center text-no-wrap q-gutter-y-md q-gutter-x-xs row"};function Y(s,e,f,c,b,x){return O(),R(T,{style:{"max-width":"100%"},padding:""},{default:a(()=>[l("div",H,[t(i,{size:"4px",style:{width:"95%"},class:"rounded-borders bg-accent"}),t(r,null,{default:a(()=>e[0]||(e[0]=[l("div",{style:{"border-radius":"100px"},class:"q-pa-md text-h5 text-center text-secondary text-weight-bold bg-accent"}," Terms of Service ",-1)])),_:1}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>e[1]||(e[1]=[l("div",{class:"dense-text text-h5 q-pb-sm"}," Commission Process ",-1)])),_:1}),t(i,{size:"2px",style:{width:"30%"},class:"rounded-borders bg-accent"}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>e[2]||(e[2]=[l("div",{class:"dense-text q-pb-sm"}," When accepting a commission I first require a prompt - This can be as detailed or ambiguous as you'd like - along with any references should any be relevant. ",-1),l("div",{class:"dense-text q-pb-sm"}," Once I get an understanding of what it should be, I provide a very primitive sketch that conveys the broad strokes of what it would look like, for confirmation and any initial adjustments. ",-1),l("div",{class:"dense-text q-pb-sm"}," Should you find it satisfactory, a price will be agreed upon and paid in advance, and once the payment is transferred it will be added to my work queue. ",-1),l("div",{class:"dense-text q-pb-sm"}," During my work I tend to send frequent updates, the frequency can be toned down should that be desired. ",-1),l("div",{class:"dense-text q-pb-sm"}," In earlier stages of the drawing adjustments can be done at no cost. After lines are solidified and in particular after coloring and shading, changes may incure a cost depending on the effort required. ",-1),l("div",{class:"dense-text q-pb-sm"}," Once a piece is finalized, I will send it in the desired format (Usually JPEG/PNG) along with any relevant variances, exported at the resolution they are made in (Approximated 3000px on either side) via an archive file. ",-1)])),_:1}),t(i,{size:"2px",style:{width:"30%"},class:"rounded-borders bg-accent"}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>e[3]||(e[3]=[l("div",{class:"dense-text text-h5 q-pb-sm"}," What I Will Draw ",-1)])),_:1}),t(i,{size:"2px",style:{width:"30%"},class:"rounded-borders bg-accent"}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>[t(k,{separator:"",class:"column"},{default:a(()=>[t(o,null,{default:a(()=>e[4]||(e[4]=[d(" Human Characters ")])),_:1}),t(o,null,{default:a(()=>e[5]||(e[5]=[d(" Most Furry species ")])),_:1}),t(o,null,{default:a(()=>e[6]||(e[6]=[d(" Objects, Landscapes ")])),_:1}),t(o,null,{default:a(()=>e[7]||(e[7]=[d(" Designs ")])),_:1})]),_:1})]),_:1}),t(i,{size:"2px",style:{width:"30%"},class:"rounded-borders bg-accent"}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>e[8]||(e[8]=[l("div",{class:"dense-text text-h5 q-pb-sm"}," What I Won't Draw ",-1)])),_:1}),t(i,{size:"2px",style:{width:"30%"},class:"rounded-borders bg-accent"}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>[t(k,{separator:"",class:"column"},{default:a(()=>[t(o,{class:"text-left"},{default:a(()=>e[9]||(e[9]=[d(" Uncomfortable subjects such as Gore ")])),_:1}),t(o,null,{default:a(()=>e[10]||(e[10]=[d(" Certain kinks (Can be inquired) ")])),_:1}),t(o,null,{default:a(()=>e[11]||(e[11]=[d(" Underage Content ")])),_:1}),t(o,null,{default:a(()=>e[12]||(e[12]=[d(" Anime ")])),_:1})]),_:1})]),_:1}),t(i,{size:"2px",style:{width:"30%"},class:"rounded-borders bg-accent"}),t(r,{style:{width:"75%","min-width":"300px"},class:"flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent"},{default:a(()=>e[13]||(e[13]=[l("div",{class:"dense-text text-h6 q-pb-sm"}," I reserve the right to deny a commission should I be too uncomfortable with it. In such a case, a full/partial refund (depending on the amount of work) will be provided. ",-1)])),_:1}),t(r),t(i,{size:"4px",style:{width:"95%"},class:"rounded-borders bg-accent"}),l("div",J,[t(h,{to:"/",exact:"",style:{"min-height":"50px"},"no-caps":"",class:"col-xs-9 col-md-3 text-h6","text-color":"accent",color:"secondary",label:"Go Back"}),l("div",X,[t(h,{disable:"",to:"/Showcase",exact:"",style:{"min-height":"50px"},"no-caps":"",class:"col-xs-9 col-md-5 text-h5 text-weight-medium","text-color":"secondary",color:"accent",label:"Showcase (WIP)"}),t(h,{to:"/aboutPage",exact:"",style:{"min-height":"50px"},"no-caps":"",class:"col-xs-9 col-md-3 text-h6","text-color":"secondary",color:"accent",label:"About"}),t(h,{to:"/PricesPage",exact:"",style:{"min-height":"50px"},"no-caps":"",class:"col-xs-9 col-md-3 text-h6","text-color":"secondary",color:"accent",label:"Commissions"})])]),t(i,{size:"4px",style:{width:"95%"},class:"rounded-borders bg-accent"})])]),_:1})}var ne=U(M,[["render",Y]]);export{ne as default};
