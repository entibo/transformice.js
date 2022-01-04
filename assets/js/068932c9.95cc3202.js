"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[857],{9613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3364:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=r(9624),a=r(42),l=(r(9496),r(9613)),i=["components"],p={id:"Player",title:"Class: Player",sidebar_label:"Player",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/Player",id:"api/classes/Player",title:"Class: Player",description:"Represents a player from the room.",source:"@site/docs/api/classes/Player.md",sourceDirName:"api/classes",slug:"/api/classes/Player",permalink:"/docs/api/classes/Player",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Player",title:"Class: Player",sidebar_label:"Player",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Message",permalink:"/docs/api/classes/Message"},next:{title:"Profile",permalink:"/docs/api/classes/Profile"}},d=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4}],level:3},{value:"name",id:"name",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"friend",id:"friend",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:"unfriend",id:"unfriend",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:"whisper",id:"whisper",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4}],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents a player from the room."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"Base"},(0,l.kt)("inlineCode",{parentName:"a"},"Base"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Player"))),(0,l.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"RoomPlayer"},(0,l.kt)("inlineCode",{parentName:"a"},"RoomPlayer"))),(0,l.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"TribullePlayer"},(0,l.kt)("inlineCode",{parentName:"a"},"TribullePlayer"))),(0,l.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"Profile"},(0,l.kt)("inlineCode",{parentName:"a"},"Profile"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"client"},"client"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"client"),": ",(0,l.kt)("a",{parentName:"p",href:"Client"},(0,l.kt)("inlineCode",{parentName:"a"},"Client"))),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Base"},"Base"),".",(0,l.kt)("a",{parentName:"p",href:"Base#client"},"client")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The player's name."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"friend"},"friend"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"friend"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Add player to the friend list"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unfriend"},"unfriend"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"unfriend"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Remove player from the friend list"),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"whisper"},"whisper"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"whisper"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Send a whisper to the player"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);