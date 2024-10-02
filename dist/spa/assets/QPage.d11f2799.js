import{a,c as g,h,g as f,i as m,e as i,l as p,b as C}from"./index.b711a1ee.js";import{h as y}from"./dom.c76468e4.js";const Q={dark:{type:Boolean,default:null}};function x(e,n){return a(()=>e.dark===null?n.dark.isActive:e.dark)}var k=g({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const r=a(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:r.value},y(n.default))}});const z={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},d={xs:2,sm:4,md:8,lg:16,xl:24};var b=g({name:"QSeparator",props:{...Q,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=f(),r=x(e,n.proxy.$q),t=a(()=>e.vertical===!0?"vertical":"horizontal"),c=a(()=>` q-separator--${t.value}`),l=a(()=>e.inset!==!1?`${c.value}-${z[e.inset]}`:""),u=a(()=>`q-separator${c.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?" q-separator--dark":"")),s=a(()=>{const o={};if(e.size!==void 0&&(o[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const $=e.spaced===!0?`${d.md}px`:e.spaced in d?`${d[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];o[`margin${v[0]}`]=o[`margin${v[1]}`]=$}return o});return()=>h("hr",{class:u.value,style:s.value,"aria-orientation":t.value})}}),B=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:r}}=f(),t=m(p,i);if(t===i)return console.error("QPage needs to be a deep child of QLayout"),i;if(m(C,i)===i)return console.error("QPage needs to be child of QPageContainer"),i;const l=a(()=>{const s=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const o=t.isContainer.value===!0?t.containerHeight.value:r.screen.height;return e.styleFn(s,o)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-s+"px":r.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":r.screen.height-s+"px"}}),u=a(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:l.value},y(n.default))}});export{B as Q,x as a,k as b,b as c,Q as u};
