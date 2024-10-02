import{j as i,c as s,h as u,g,i as l,e as r,x as y,y as v}from"./index.d46cf894.js";import{a as c}from"./render.82bb13de.js";import{u as q,a as m}from"./plugin-vue_export-helper.950591b0.js";var b=i({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const t=s(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>u(e.tag,{class:t.value},c(n.default))}}),x=i({name:"QCard",props:{...q,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=g(),a=m(e,t),d=s(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>u(e.tag,{class:d.value},c(n.default))}}),P=i({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:t}}=g(),a=l(y,r);if(a===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(l(v,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const h=s(()=>{const o=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const p=a.isContainer.value===!0?a.containerHeight.value:t.screen.height;return e.styleFn(o,p)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-o+"px":t.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":t.screen.height-o+"px"}}),f=s(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>u("main",{class:f.value,style:h.value},c(n.default))}});export{P as Q,b as a,x as b};