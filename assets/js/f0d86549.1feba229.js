"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[634],{9613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1054:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(9624),i=t(42),a=(t(9496),t(9613)),o=["components"],l={id:"Internal.ClientOptions",title:"Interface: ClientOptions",sidebar_label:"ClientOptions",custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/Internal.ClientOptions",id:"api/interfaces/Internal.ClientOptions",title:"Interface: ClientOptions",description:"Internal.ClientOptions",source:"@site/docs/api/interfaces/Internal.ClientOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Internal.ClientOptions",permalink:"/docs/api/interfaces/Internal.ClientOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"Internal.ClientOptions",title:"Interface: ClientOptions",sidebar_label:"ClientOptions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ClientIntentOptions",permalink:"/docs/api/interfaces/Internal.ClientIntentOptions"},next:{title:"ConnectionSettings",permalink:"/docs/api/interfaces/Internal.ConnectionSettings"}},s=[{value:"Properties",id:"properties",children:[{value:"autoReconnect",id:"autoreconnect",children:[],level:3},{value:"connectionSettings",id:"connectionsettings",children:[],level:3},{value:"intents",id:"intents",children:[],level:3},{value:"language",id:"language",children:[],level:3},{value:"loginRoom",id:"loginroom",children:[],level:3}],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/Internal"},"Internal"),".ClientOptions"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"autoreconnect"},"autoReconnect"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoReconnect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Will try to auto reconnect when disconnected if set to true (Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"connectionsettings"},"connectionSettings"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"connectionSettings"),": ",(0,a.kt)("a",{parentName:"p",href:"Internal.ConnectionSettings"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionSettings"))," ","|"," (...",(0,a.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,a.kt)("a",{parentName:"p",href:"Internal.ConnectionSettings"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionSettings"))," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"Internal.ConnectionSettings"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionSettings")),">"),(0,a.kt)("p",null,"The client connection settings. The default is to fetch these from an API endpoint (",(0,a.kt)("inlineCode",{parentName:"p"},"Client.fetchIP"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"intents"},"intents"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"intents"),": ",(0,a.kt)("a",{parentName:"p",href:"Internal.ClientIntentOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientIntentOptions"))),(0,a.kt)("p",null,"The client intents."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"language"},"language"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"language"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/enums.Language"},(0,a.kt)("inlineCode",{parentName:"a"},"Language"))),(0,a.kt)("p",null,"Which community to log in to (",(0,a.kt)("a",{parentName:"p",href:"/docs/api/globals#languages"},"language enum"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loginroom"},"loginRoom"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"loginRoom"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The room where the client will be logged in (Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),")"))}d.isMDXComponent=!0}}]);