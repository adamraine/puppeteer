"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,p(p({ref:t},s),{},{components:n})):r.createElement(g,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={sidebar_label:"Page.$$eval"},o="Page.$$eval() method",i={unversionedId:"api/puppeteer.page.__eval",id:"version-20.8.1/api/puppeteer.page.__eval",title:"Page.$$eval() method",description:"This method runs Array.from(document.querySelectorAll(selector)) within the page and passes the result as the first argument to the pageFunction.",source:"@site/versioned_docs/version-20.8.1/api/puppeteer.page.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.page.__eval",permalink:"/api/puppeteer.page.__eval",draft:!1,tags:[],version:"20.8.1",frontMatter:{sidebar_label:"Page.$$eval"},sidebar:"api",previous:{title:"Page.$$",permalink:"/api/puppeteer.page.__"},next:{title:"Page.$eval",permalink:"/api/puppeteer.page._eval"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],c={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pageeval-method"}),"Page.$$eval() method"),(0,r.kt)("p",null,"This method runs ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.from(document.querySelectorAll(selector))")," within the page and passes the result as the first argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"selector"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Selector"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"}),"selector")," to query for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"pageFunction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"the function to be evaluated in the page context. Will be passed the result of ",(0,r.kt)("code",null,"Array.from(document.querySelectorAll(selector))")," as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"args"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Params"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"any additional arguments to pass through to ",(0,r.kt)("code",null,"pageFunction"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,r.kt)("p",null,"The result of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If it returns an element it is wrapped in an ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),", else the raw value itself is returned."),(0,r.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a promise ",(0,r.kt)("inlineCode",{parentName:"p"},"$$eval")," will wait for the promise to resolve and then return its value."),(0,r.kt)("h2",a({},{id:"example-1"}),"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// get the amount of divs on the page\nconst divCount = await page.$$eval('div', divs => divs.length);\n\n// get the text content of all the `.options` elements:\nconst options = await page.$$eval('div > span.options', options => {\n  return options.map(option => option.textContent);\n});\n")),(0,r.kt)("p",null,"If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),". By default it is typed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Element[]"),", but you may need to provide a more specific sub-type:"),(0,r.kt)("h2",a({},{id:"example-2"}),"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nawait page.$$eval('input', (elements: HTMLInputElement[]) => {\n  return elements.map(e => e.value);\n});\n")),(0,r.kt)("p",null,"The compiler should be able to infer the return type from the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,r.kt)("inlineCode",{parentName:"p"},"$$eval"),":"),(0,r.kt)("h2",a({},{id:"example-3"}),"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst allInputValues = await page.$$eval<string[]>(\n  'input',\n  (elements: HTMLInputElement[]) => elements.map(e => e.textContent)\n);\n")))}m.isMDXComponent=!0}}]);