/*! For license information please see 1faae7db.3ce03698.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),i=(n(0),n(228)),o=n(233),c=n(231),s=n.n(c),u={last_modified_on:"2020-04-18",$schema:"/.meta/.schemas/guides.json",title:"Adding a database",description:"How to add a database to your application",series_position:2,author_github:"https://github.com/pjeziorowski",tags:["type: guide","domain: services"]},l={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Adding a database",description:"How to add a database to your application",permalink:"/guides/getting-started/adding-a-database",readingTime:"1 min read",seriesPosition:2,source:"@site/guides/getting-started/adding-a-database.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"domain: services",permalink:"/guides/tags/domain-services"}],title:"Adding a database",truncated:!1,prevItem:{title:"Hello World. Deploy your first application.",permalink:"/guides/getting-started/deploy-your-first-application"},nextItem:{title:"Setting custom domain",permalink:"/guides/getting-started/setting-custom-domain"}},p=[],d={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.a,{src:"/img/components.svg",mdxType:"SVG"}),"Bla bla TODO",Object(i.b)(o.a,{to:"/guides/getting-started/",mdxType:"Jump"},"Get started"))}m.isMDXComponent=!0},227:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(39),c=n(234),s=n(29),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,l=n||s,p=Object(c.a)(l),d=Object(a.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,p]),l&&p?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(l),d.current=!0)},innerRef:function(e){var n,r;m&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):i.a.createElement("a",Object(r.a)({},e,{href:l}))}},233:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(230),o=n(227),c=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,d=c()("jump-to","jump-to--"+u,n),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:d},m):a.a.createElement(i.a,{to:p,className:d},m)}},234:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);