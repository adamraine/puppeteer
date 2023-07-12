"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||p;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"Page.setRequestInterception"},i="Page.setRequestInterception() method",s={unversionedId:"api/puppeteer.page.setrequestinterception",id:"version-20.8.1/api/puppeteer.page.setrequestinterception",title:"Page.setRequestInterception() method",description:"Activating request interception enables HTTPRequest.abort(), HTTPRequest.continue() and HTTPRequest.respond() methods. This provides the capability to modify network requests that are made by a page.",source:"@site/versioned_docs/version-20.8.1/api/puppeteer.page.setrequestinterception.md",sourceDirName:"api",slug:"/api/puppeteer.page.setrequestinterception",permalink:"/api/puppeteer.page.setrequestinterception",draft:!1,tags:[],version:"20.8.1",frontMatter:{sidebar_label:"Page.setRequestInterception"},sidebar:"api",previous:{title:"Page.setOfflineMode",permalink:"/api/puppeteer.page.setofflinemode"},next:{title:"Page.setUserAgent",permalink:"/api/puppeteer.page.setuseragent"}},l={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"pagesetrequestinterception-method"}),"Page.setRequestInterception() method"),(0,n.kt)("p",null,"Activating request interception enables ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.httprequest.abort"}),"HTTPRequest.abort()"),", ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.httprequest.continue"}),"HTTPRequest.continue()")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.httprequest.respond"}),"HTTPRequest.respond()")," methods. This provides the capability to modify network requests that are made by a page."),(0,n.kt)("p",null,"Once request interception is enabled, every request will stall unless it's continued, responded or aborted; or completed using the browser cache."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://pptr.dev/next/guides/request-interception"}),"Request interception guide")," for more details."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  setRequestInterception(value: boolean): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Whether to enable request interception.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"An example of a na\xefve request interceptor that aborts all image requests:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (\n      interceptedRequest.url().endsWith('.png') ||\n      interceptedRequest.url().endsWith('.jpg')\n    )\n      interceptedRequest.abort();\n    else interceptedRequest.continue();\n  });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")))}m.isMDXComponent=!0}}]);