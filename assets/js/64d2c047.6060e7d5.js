"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[921],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8667:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(9624),a=r(42),l=(r(9496),r(9613)),o=["components"],i={id:"RoomMessage",title:"Class: RoomMessage",sidebar_label:"RoomMessage",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/classes/RoomMessage",id:"api/classes/RoomMessage",title:"Class: RoomMessage",description:"Represents a room message.",source:"@site/docs/api/classes/RoomMessage.md",sourceDirName:"api/classes",slug:"/api/classes/RoomMessage",permalink:"/transformice.js/docs/api/classes/RoomMessage",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RoomMessage",title:"Class: RoomMessage",sidebar_label:"RoomMessage",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Room",permalink:"/transformice.js/docs/api/classes/Room"},next:{title:"RoomPlayer",permalink:"/transformice.js/docs/api/classes/RoomPlayer"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"author",id:"author",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4}],level:3},{value:"client",id:"client",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4}],level:3},{value:"content",id:"content",children:[{value:"Inherited from",id:"inherited-from-2",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"reply",id:"reply",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4}],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents a room message."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"Message"},(0,l.kt)("inlineCode",{parentName:"a"},"Message"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"RoomMessage"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"author"},"author"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"author"),": ",(0,l.kt)("a",{parentName:"p",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player"))),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Message"},"Message"),".",(0,l.kt)("a",{parentName:"p",href:"Message#author"},"author")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"client"},"client"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"client"),": ",(0,l.kt)("a",{parentName:"p",href:"Client"},(0,l.kt)("inlineCode",{parentName:"a"},"Client"))),(0,l.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Message"},"Message"),".",(0,l.kt)("a",{parentName:"p",href:"Message#client"},"client")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"content"},"content"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"content"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Message"},"Message"),".",(0,l.kt)("a",{parentName:"p",href:"Message#content"},"content")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"reply"},"reply"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"reply"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Reply the author with a message."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"client.on('roomMessage', (message) => {\n    if (client.name === message.author.name)\n        return;\n    message.reply('Hello');\n")),(0,l.kt)("p",null,"}"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0}}]);