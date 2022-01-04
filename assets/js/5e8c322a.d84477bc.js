"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[597],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6525:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(9624),o=n(42),a=(n(9496),n(9613)),i=["components"],l={id:"index",title:"@cheeseformice/transformice.js",slug:"/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s="Transformice.js (WIP)",c={unversionedId:"api/index",id:"api/index",title:"@cheeseformice/transformice.js",description:"Transformice.js is a Node.js Client for Transformice that allows you to create bots. It comes with full support for CommonJS and Typescript typings.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@cheeseformice/transformice.js",slug:"/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Exports",permalink:"/docs/api/modules"}},u=[{value:"Authentication",id:"authentication",children:[],level:2},{value:"Development",id:"development",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Similar projects",id:"similar-projects",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transformicejs-wip"},"Transformice.js (WIP)"),(0,a.kt)("p",null,"Transformice.js is a ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," Client for Transformice that allows you to create bots. It comes with full support for CommonJS and Typescript typings."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cheeseformice/transformice.js/blob/main/CHANGELOG.md"},"Read the changelogs")),(0,a.kt)("p",null,"Transformice.js is originally created and maintained by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuspiciousLookingOwl/transformice.js"},"SuspiciousLookingOwl"),". This is the maintained continuation on Cheeseformice."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"To use this client, you must have an authenticated account in-game. You will need to ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/N6Et1hLGQ9hmg95F6"},"apply on this form"),". If you get accepted, you will be able to choose an account (except your main account) to get the ",(0,a.kt)("em",{parentName:"p"},"bot role")," - and thus, being able to use the client."),(0,a.kt)("p",null,"See below to know the names of Transfromage managers who handle the token system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Tocutoeltuco"},"Tocutoeltuco"))," @discord=> ",(0,a.kt)("inlineCode",{parentName:"li"},"Tocu#0018")," ",(0,a.kt)("sub",null,(0,a.kt)("inlineCode",{parentName:"li"},"212634414021214209")),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Blank3495"},"Blank3495"))," @discord=> ",(0,a.kt)("inlineCode",{parentName:"li"},"\udb40\udcaa\udb40\udcaa \udb40\udcaa\udb40\udcaa \udb40\udcaa\udb40\udcaa\udb40\udcaa\udb40\udcaa \udb40\udcaa\udb40\udcaa \udb40\udcaa\udb40\udcaa\udb40\udcaa\udb40\udcaa \udb40\udcaa\udb40\udcaa \udb40\udcaa\udb40\udcaa#8737")," ",(0,a.kt)("sub",null,(0,a.kt)("inlineCode",{parentName:"li"},"436703225140346881")),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Lautenschlager-id"},"Bolodefchoco"))," @discord=> ",(0,a.kt)("inlineCode",{parentName:"li"},"Lautenschlager#2555")," ",(0,a.kt)("sub",null,(0,a.kt)("inlineCode",{parentName:"li"},"285878295759814656")),".")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/cheeseformice/transformice.js\n")),(0,a.kt)("p",null,"Install dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i\n")),(0,a.kt)("p",null,"Watch and compile files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Client, enums } = require("@cheeseformice/transformice.js");\n\nconst client = new Client("username", "password", {\n    language: enums.Language.en\n});\n\nclient.on("roomMessage", (message) => {\n    if (client.name === message.author.name) return;\n    client.sendRoomMessage(message.author.look);\n});\n\nclient.run();\n')),(0,a.kt)("h2",{id:"similar-projects"},"Similar projects"),(0,a.kt)("p",null,"If you would like a different flavor to write your bot in, you may check out the other similar Transformice clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Athesdrake/aiotfm"},"aiotfm")," - Python"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Lautenschlager-id/Transfromage"},"Transfromage")," - Lua"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Turkitutu/cheesy.js"},"cheesy.js")," - Another Node.js client")))}m.isMDXComponent=!0}}]);