"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89942],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),g=a,m=f["".concat(i,".").concat(g)]||f[g]||c[g]||p;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={sidebar_label:"Browser.pages"},s="Browser.pages() method",i={unversionedId:"api/puppeteer.browser.pages",id:"version-21.3.1/api/puppeteer.browser.pages",title:"Browser.pages() method",description:"Gets a list of all open pages inside this .",source:"@site/versioned_docs/version-21.3.1/api/puppeteer.browser.pages.md",sourceDirName:"api",slug:"/api/puppeteer.browser.pages",permalink:"/api/puppeteer.browser.pages",draft:!1,tags:[],version:"21.3.1",frontMatter:{sidebar_label:"Browser.pages"},sidebar:"api",previous:{title:"Browser.newPage",permalink:"/api/puppeteer.browser.newpage"},next:{title:"Browser.process",permalink:"/api/puppeteer.browser.process"}},l={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function f(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"browserpages-method"}),"Browser.pages() method"),(0,n.kt)("p",null,"Gets a list of all open ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page"}),"pages")," inside this ."),(0,n.kt)("p",null,"If there ar multiple ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.browsercontext"}),"browser contexts"),", this returns all ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page"}),"pages")," in all ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.browsercontext"}),"browser contexts"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  pages(): Promise<Page[]>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page"}),"Page"),"[","]",">"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Non-visible ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page"}),"pages"),", such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"background_page"'),", will not be listed here. You can find them using ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.target.page"}),"Target.page()"),"."))}f.isMDXComponent=!0}}]);