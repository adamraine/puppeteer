"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={},s="Query Selectors",i={unversionedId:"guides/query-selectors",id:"version-21.3.1/guides/query-selectors",title:"Query Selectors",description:"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:",source:"@site/versioned_docs/version-21.3.1/guides/query-selectors.mdx",sourceDirName:"guides",slug:"/guides/query-selectors",permalink:"/guides/query-selectors",draft:!1,tags:[],version:"21.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/guides/configuration"},next:{title:"Locators",permalink:"/guides/locators"}},p={},c=[{value:"<code>P</code> Selectors",id:"p-selectors",level:2},{value:"<code>&gt;&gt;&gt;</code> and <code>&gt;&gt;&gt;&gt;</code> combinators",id:"-and--combinators",level:3},{value:"Example",id:"example",level:4},{value:"<code>P</code>-elements",id:"p-elements",level:3},{value:"Text selectors (<code>-p-text</code>)",id:"text-selectors--p-text",level:4},{value:"Example",id:"example-1",level:5},{value:"XPath selectors (<code>-p-xpath</code>)",id:"xpath-selectors--p-xpath",level:4},{value:"Example",id:"example-2",level:5},{value:"ARIA selectors (<code>-p-aria</code>)",id:"aria-selectors--p-aria",level:4},{value:"Example",id:"example-3",level:5},{value:"Custom selectors",id:"custom-selectors",level:3},{value:"Custom Selectors",id:"custom-selectors-1",level:4},{value:"Custom framework components selector",id:"custom-framework-components-selector",level:4},{value:"Web Components",id:"web-components",level:4}],m={toc:c};function u(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"query-selectors"}),"Query Selectors"),(0,o.kt)("p",null,"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Query for an element handle.\n  const element = await page.waitForSelector('div > .class-name');\n\n  // Do something with element...\n  await element.click(); // Just an example.\n\n  // Dispose of handle\n  await element.dispose();\n\n  // Close browser.\n  await browser.close();\n})();\n")),(0,o.kt)("h2",r({},{id:"p-selectors"}),(0,o.kt)("inlineCode",{parentName:"h2"},"P")," Selectors"),(0,o.kt)("p",null,"Puppeteer uses a superset of the CSS selector syntax for querying. We call this syntax ",(0,o.kt)("em",{parentName:"p"},"P selectors")," and it's supercharged with extra capabilities such as deep combinators and text selection."),(0,o.kt)("admonition",r({},{type:"caution"}),(0,o.kt)("p",{parentName:"admonition"},"Although P selectors look like real CSS selectors (we intentionally designed it this way), they should not be used for actually CSS styling. They are designed only for Puppeteer.")),(0,o.kt)("admonition",r({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},'P selectors only work on the first "depth" of selectors; for example, ',(0,o.kt)("inlineCode",{parentName:"p"},":is(div >>> a)")," will not work.")),(0,o.kt)("h3",r({},{id:"-and--combinators"}),(0,o.kt)("inlineCode",{parentName:"h3"},">>>")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},">>>>")," combinators"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},">>>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},">>>>")," are called ",(0,o.kt)("em",{parentName:"p"},"deep descendent")," and ",(0,o.kt)("em",{parentName:"p"},"deep")," combinators respectively. Both combinators have the effect of going into shadow hosts with ",(0,o.kt)("inlineCode",{parentName:"p"},">>>")," going into every shadow host under a node and ",(0,o.kt)("inlineCode",{parentName:"p"},">>>>")," going into the immediate one (if the node is a shadow host; otherwise, it's a no-op)."),(0,o.kt)("admonition",r({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"A common question is when should ",(0,o.kt)("inlineCode",{parentName:"p"},">>>>")," be chosen over ",(0,o.kt)("inlineCode",{parentName:"p"},">>>")," considering the flexibility of ",(0,o.kt)("inlineCode",{parentName:"p"},">>>"),". A similar question can be asked about ",(0,o.kt)("inlineCode",{parentName:"p"},">")," and a space; choose ",(0,o.kt)("inlineCode",{parentName:"p"},">")," if you do not need to query all elements under a given node and a space otherwise. This answer extends to ",(0,o.kt)("inlineCode",{parentName:"p"},">>>>")," (",(0,o.kt)("inlineCode",{parentName:"p"},">"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},">>>")," (space) naturally.")),(0,o.kt)("h4",r({},{id:"example"}),"Example"),(0,o.kt)("p",null,"Suppose we have the markup"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<custom-element>\n  <template shadowrootmode="open">\n    <slot></slot>\n  </template>\n  <custom-element>\n    <template shadowrootmode="open">\n      <slot></slot>\n    </template>\n    <custom-element>\n      <template shadowrootmode="open">\n        <slot></slot>\n      </template>\n      <h2>Light content</h2>\n    </custom-element>\n  </custom-element>\n</custom-element>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},'<template shadowrootmode="open">')," is not supported on Firefox.\nYou can read more about it ",(0,o.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#attributes"}),"here"),".")),(0,o.kt)("p",null,"Then ",(0,o.kt)("inlineCode",{parentName:"p"},"custom-element >>> h2")," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"h2"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"custom-element >>>> h2")," will return nothing since the inner ",(0,o.kt)("inlineCode",{parentName:"p"},"h2")," is in a deeper shadow root."),(0,o.kt)("h3",r({},{id:"p-elements"}),(0,o.kt)("inlineCode",{parentName:"h3"},"P"),"-elements"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"P")," elements are ",(0,o.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"}),"pseudo-elements")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," vendor prefix. It allows you to enhance your selectors with Puppeteer-specific query engines such as XPath, text queries, and ARIA."),(0,o.kt)("h4",r({},{id:"text-selectors--p-text"}),"Text selectors (",(0,o.kt)("inlineCode",{parentName:"h4"},"-p-text"),")"),(0,o.kt)("p",null,'Text selectors will select "minimal" elements containing the given text, even within (open) shadow roots. Here, "minimum" means the deepest elements that contain a given text, but not their parents (which technically will also contain the given text).'),(0,o.kt)("h5",r({},{id:"example-1"}),"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const element = await page.waitForSelector('div ::-p-text(My name is Jun)');\n// You can also use escapes.\nconst element = await page.waitForSelector(\n  ':scope >>> ::-p-text(My name is Jun \\\\(pronounced like \"June\"\\\\))'\n);\n// or quotes\nconst element = await page.waitForSelector(\n  'div >>>> ::-p-text(\"My name is Jun (pronounced like \\\\\"June\\\\\")\"):hover'\n);\n")),(0,o.kt)("h4",r({},{id:"xpath-selectors--p-xpath"}),"XPath selectors (",(0,o.kt)("inlineCode",{parentName:"h4"},"-p-xpath"),")"),(0,o.kt)("p",null,"XPath selectors will use the browser's native ",(0,o.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate"}),(0,o.kt)("inlineCode",{parentName:"a"},"Document.evaluate"))," to query for elements."),(0,o.kt)("h5",r({},{id:"example-2"}),"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const element = await page.waitForSelector('::-p-xpath(h2)');\n")),(0,o.kt)("h4",r({},{id:"aria-selectors--p-aria"}),"ARIA selectors (",(0,o.kt)("inlineCode",{parentName:"h4"},"-p-aria"),")"),(0,o.kt)("p",null,"ARIA selectors can be used to find elements with a given ARIA label. These labels are computed using Chrome's internal representation."),(0,o.kt)("h5",r({},{id:"example-3"}),"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const node = await page.waitForSelector('::-p-aria(Submit)');\nconst node = await page.waitForSelector(\n  '::-p-aria([name=\"Click me\"][role=\"button\"])'\n);\n")),(0,o.kt)("h3",r({},{id:"custom-selectors"}),"Custom selectors"),(0,o.kt)("p",null,"Puppeteer provides users the ability to add their own query selectors to Puppeteer using ",(0,o.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.registercustomqueryhandler"}),"Puppeteer.registerCustomQueryHandler"),". This is useful for creating custom selectors based on framework objects or other vendor-specific objects."),(0,o.kt)("h4",r({},{id:"custom-selectors-1"}),"Custom Selectors"),(0,o.kt)("p",null,"You can register a custom query handler that allows you to create custom selectors. For example, define a query handler for ",(0,o.kt)("inlineCode",{parentName:"p"},"getById")," selectors:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),'Puppeteer.registerCustomQueryHandler(\'getById\', {\n  queryOne: (elementOrDocument, selector) => {\n    return elementOrDocument.querySelector(`[id="${CSS.escape(selector)}"]`);\n  },\n  // Note: for demonstation perpose only `id` should be page unique\n  queryAll: (elementOrDocument, selector) => {\n    return elementOrDocument.querySelectorAll(`[id="${CSS.escape(selector)}"]`);\n  },\n});\n')),(0,o.kt)("p",null,"You can now use it as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const node = await page.waitForSelector('::-p-getById(elementId)');\n// OR used in conjunction with other selectors\nconst moreSpecificNode = await page.waitForSelector(\n  '.side-bar ::-p-getById(elementId)'\n);\n")),(0,o.kt)("h4",r({},{id:"custom-framework-components-selector"}),"Custom framework components selector"),(0,o.kt)("admonition",r({},{type:"caution"}),(0,o.kt)("p",{parentName:"admonition"},"Be careful when relying on internal APIs of libraries or frameworks. They can change at any time.")),(0,o.kt)("p",null,"Find Vue components by name by using Vue internals for querying:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"Puppeteer.registerCustomQueryHandler('vue', {\n  queryOne: (element, name) => {\n    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);\n    do {\n      const currentNode = walker.currentNode;\n      if (\n        currentNode.__vnode?.ctx?.type?.name.toLowerCase() ===\n        name.toLocaleLowerCase()\n      ) {\n        return currentNode;\n      }\n    } while (walker.nextNode());\n\n    return null;\n  },\n});\n")),(0,o.kt)("p",null,"Query the Vue component as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const element = await page.$('::-p-vue(MyComponent)');\n")),(0,o.kt)("h4",r({},{id:"web-components"}),"Web Components"),(0,o.kt)("p",null,"Web Components create their own tag so you can query them by the tag name:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const element = await page.$('my-web-component');\n")),(0,o.kt)("p",null,"Extend ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElementTagNameMap")," to define types for custom tags. This allows Puppeteer to infer the return type for the ElementHandle:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"declare global {\n  interface HTMLElementTagNameMap {\n    'my-web-component': MyWebComponent;\n  }\n}\n")))}u.isMDXComponent=!0}}]);