/*! For license information please see 2f692848.37443b7f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),o=a(9),r=(a(0),a(255)),i=a(258),c={last_modified_on:"2020-04-22",title:"MongoDB",description:"How to use MongoDB"},l={id:"using-qovery/configuration/databases/mongodb",title:"MongoDB",description:"How to use MongoDB",source:"@site/docs/using-qovery/configuration/databases/mongodb.md",permalink:"/docs/using-qovery/configuration/databases/mongodb",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/databases/mongodb.md",sidebar:"docs",previous:{title:"Env Vars",permalink:"/docs/using-qovery/configuration/env-vars"},next:{title:"PostgreSQL",permalink:"/docs/using-qovery/configuration/databases/postgresql"}},s=[{value:"Add a database to your application",id:"add-a-database-to-your-application",children:[]},{value:"Get access to the database",id:"get-access-to-the-database",children:[]},{value:"Get the database status",id:"get-the-database-status",children:[]},{value:"Delete the database",id:"delete-the-database",children:[]},{value:"Backups",id:"backups",children:[]}],d={rightToc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL, MongoDB uses JSON-like documents with schema."),Object(r.b)("h2",{id:"add-a-database-to-your-application"},"Add a database to your application"),Object(r.b)("p",null,"To add a dedicated MongoDB instance to your existing application, simply add these lines to your configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {4-6}',title:'".qovery.yml"',"{4-6}":!0}),'application:\n...\ndatabases:\n- type: mongodb\n  version: "latest"\n  name: my-mongodb\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"name: select a name for your database"),Object(r.b)("li",{parentName:"ul"},"version: choose the version of the database"),Object(r.b)("li",{parentName:"ul"},"type: the database engine (mongodb in this case)")),Object(r.b)("p",null,"Alternatively, if you are creating a new application, use ",Object(r.b)("inlineCode",{parentName:"p"},"qovery init")," to interactively add a database (the CLI will ask if you need one)."),Object(r.b)("h2",{id:"get-access-to-the-database"},"Get access to the database"),Object(r.b)("p",null,"To get the connection information of your database, you can use the CLI:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env list -c\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"$ qovery application env list -c\n  SCOPE       | KEY                                                           | VALUE     \n--------------+---------------------------------------------------------------+-----------\n  BUILT_IN    | QOVERY_BRANCH_NAME                                            | master    \n  BUILT_IN    | QOVERY_IS_PRODUCTION                                          | true      \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_NAME                               | my-mongodb\n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_TYPE                               | mongodb     \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_VERSION                            | 3.6       \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_CONNECTION_URI                     | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_HOST                               | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_FQDN                               | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_PORT                               | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_USERNAME                           | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_PASSWORD                           | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_mongodb_DATABASE                           | mongodb \n")),Object(r.b)("p",null,"In the output you get all data you need to use the database. Those environment variables are available in the runtime of your application."),Object(r.b)("h2",{id:"get-the-database-status"},"Get the database status"),Object(r.b)("p",null,"To know more about your database status, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery status -c\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"DATABASE NAME | STATUS  | TYPE    | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS    \n----------------+---------+---------+---------+----------+----------+----------+----------+-----------------\n  my-mongo      | running | mongodb | 3.6     | <hidden> | <hidden> | <hidden> | <hidden> | simple-example \n")),Object(r.b)("h2",{id:"delete-the-database"},"Delete the database"),Object(r.b)("p",null,"To delete a database, you have two options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Remove it from the configuration file, commit and push"),Object(r.b)("li",{parentName:"ul"},"If you worked on feature branch, delete the branch and the database instance will automatically be deleted as well")),Object(r.b)(i.a,{type:"danger",mdxType:"Alert"},Object(r.b)("p",null,"Delete action will drop the service and its data!")),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Backups will be kept for 1 month if you need to recover.")),Object(r.b)("h2",{id:"backups"},"Backups"),Object(r.b)(i.a,{mdxType:"Alert"},Object(r.b)("p",null,"By default, backups are made daily between 1h and 5h.")),Object(r.b)("p",null,"You can change the window very easily (use 24h format):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {6}',title:'".qovery.yml"',"{6}":!0}),"application:\n  ...\ndatabases:\n  - name: my-mongodb\n    type: mongodb\n    backup-window: 21-23\n")),Object(r.b)("p",null,"As described in the configuration file, the backup will occur between 9PM and 11PM."))}b.isMDXComponent=!0},254:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},255:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||r;return a?o.a.createElement(m,c({ref:t},s,{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},258:function(e,t,a){"use strict";a(262);var n=a(0),o=a.n(n),r=a(254),i=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||l))}),t)}},262:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(263)}),a(75)("fill")},263:function(e,t,a){"use strict";var n=a(25),o=a(76),r=a(24);e.exports=function(e){for(var t=n(this),a=r(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,s=void 0===l?a:o(l,a);s>c;)t[c++]=e;return t}}}]);