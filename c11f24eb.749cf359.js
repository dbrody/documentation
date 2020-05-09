/*! For license information please see c11f24eb.749cf359.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{237:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),o=(r(0),r(272)),a=r(273),l={last_modified_on:"2020-04-22",title:"IDE Plugins",description:"Description of Qovery IDE plugins"},c={id:"using-qovery/integration/ide-plugins",title:"IDE Plugins",description:"Description of Qovery IDE plugins",source:"@site/docs/using-qovery/integration/ide-plugins.md",permalink:"/docs/using-qovery/integration/ide-plugins",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/ide-plugins.md",sidebar:"docs",previous:{title:"Project Templates",permalink:"/docs/using-qovery/integration/project-templates"},next:{title:"Troubleshoot",permalink:"/docs/using-qovery/troubleshoot"}},s=[{value:"IntelliJ",id:"intellij",children:[]},{value:"VSCode",id:"vscode",children:[]}],u={rightToc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Writing Qovery configuration is simple. If you like using IDE plugins to improve your workflows, you can be assisted by Qovery plugins to avoid typo mistakes, get auto-completion, and move even faster."),Object(o.b)(a.a,{mdxType:"Alert"},"A big shout out to a great contributor ",Object(o.b)("a",{href:"https://github.com/alexisvisco"},"Alexis Viscogliosi")," for creating these great plugins!"),Object(o.b)("h2",{id:"intellij"},"IntelliJ"),Object(o.b)("p",null,"You can easily install the Qovery Intellij plugin through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://plugins.jetbrains.com/plugin/14032-qovery"}),"Marketplace")," or directly from the IDE (",Object(o.b)("inlineCode",{parentName:"p"},"File")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"Plugins")," -> search ",Object(o.b)("inlineCode",{parentName:"p"},"Qovery"),")."),Object(o.b)("p",null,"Here's a quick demo to show you how it works:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/plugin-intellij.gif",alt:"Qovery InteliJ Plugin"})),Object(o.b)("h2",{id:"vscode"},"VSCode"),Object(o.b)("p",null,"VisualStudio Code has our module available on the Marketplace."),Object(o.b)("p",null,"Demo:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/vscode-module.gif",alt:"Qovery VSCode Plugin"})))}p.isMDXComponent=!0},271:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=i.apply(null,n);a&&e.push(a)}else if("object"===o)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},272:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return r?i.a.createElement(d,l({ref:t},s,{components:r})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},273:function(e,t,r){"use strict";r(276);var n=r(0),i=r.n(n),o=r(271),a=r.n(o);r(131);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return i.a.createElement("div",{className:a()(r,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&i.a.createElement("i",{className:a()("feather","icon-"+(o||c))}),t)}},276:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(277)}),r(75)("fill")},277:function(e,t,r){"use strict";var n=r(25),i=r(76),o=r(24);e.exports=function(e){for(var t=n(this),r=o(t.length),a=arguments.length,l=i(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,s=void 0===c?r:i(c,r);s>l;)t[l++]=e;return t}}}]);