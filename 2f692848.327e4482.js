/*! For license information please see 2f692848.327e4482.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),o=(a(0),a(257)),i=a(258),c={last_modified_on:"2020-04-28",title:"MongoDB",description:"How to use MongoDB"},l={id:"using-qovery/configuration/databases/mongodb",title:"MongoDB",description:"How to use MongoDB",source:"@site/docs/using-qovery/configuration/databases/mongodb.md",permalink:"/docs/using-qovery/configuration/databases/mongodb",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/databases/mongodb.md",sidebar:"docs",previous:{title:"Databases",permalink:"/docs/using-qovery/configuration/databases"},next:{title:"PostgreSQL",permalink:"/docs/using-qovery/configuration/databases/postgresql"}},s=[{value:"Add a database to your application",id:"add-a-database-to-your-application",children:[]},{value:"Get access to a database",id:"get-access-to-a-database",children:[]},{value:"Get database status",id:"get-database-status",children:[]},{value:"Delete a database",id:"delete-a-database",children:[]},{value:"Backups",id:"backups",children:[]}],u={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL, MongoDB uses JSON-like documents with schema."),Object(o.b)("h2",{id:"add-a-database-to-your-application"},"Add a database to your application"),Object(o.b)("p",null,"To add a dedicated MongoDB instance to your existing application, simply add these lines to your configuration file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {4-6}',title:'".qovery.yml"',"{4-6}":!0}),'application:\n...\ndatabases:\n- type: mongodb\n  version: "latest"\n  name: my-mongodb\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"name: select a name for your database"),Object(o.b)("li",{parentName:"ul"},"version: choose the version of the database"),Object(o.b)("li",{parentName:"ul"},"type: the database engine (mongodb in this case)")),Object(o.b)("p",null,"Alternatively, if you are creating a new application, use ",Object(o.b)("inlineCode",{parentName:"p"},"qovery init")," to interactively add a database (the CLI asks if you need one)."),Object(o.b)("h2",{id:"get-access-to-a-database"},"Get access to a database"),Object(o.b)("p",null,"To get the connection information of your database, you can use the CLI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env list -c\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"$ qovery application env list -c\n  SCOPE       | KEY                                                           | VALUE     \n--------------+---------------------------------------------------------------+-----------\n  BUILT_IN    | QOVERY_BRANCH_NAME                                            | master    \n  BUILT_IN    | QOVERY_IS_PRODUCTION                                          | true      \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_NAME                               | my-mongodb\n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_TYPE                               | mongodb     \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_VERSION                            | 3.6       \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_CONNECTION_URI                     | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_HOST                               | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_FQDN                               | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_PORT                               | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_USERNAME                           | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_PASSWORD                           | <hidden>  \n  BUILT_IN    | QOVERY_DATABASE_MY_MONGODB_DATABASE                           | mongodb \n")),Object(o.b)("p",null,"In the output, you get all data you need to use the database. Those environment variables are available in the runtime of your application."),Object(o.b)("h2",{id:"get-database-status"},"Get database status"),Object(o.b)("p",null,"To know more about your database status, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery status -c\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"DATABASE NAME | STATUS  | TYPE    | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS    \n----------------+---------+---------+---------+----------+----------+----------+----------+-----------------\n  my-mongo      | running | mongodb | 3.6     | <hidden> | <hidden> | <hidden> | <hidden> | simple-example \n")),Object(o.b)("h2",{id:"delete-a-database"},"Delete a database"),Object(o.b)("p",null,"To delete a database, you have two options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Remove it from the configuration file, commit and push"),Object(o.b)("li",{parentName:"ul"},"If you worked on a feature branch, delete the branch, and the database instance automatically deletes as well")),Object(o.b)(i.a,{type:"danger",mdxType:"Alert"},Object(o.b)("p",null,"Delete action drops the service and its data!")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Backups are kept for 1 month if you need to recover.")),Object(o.b)("h2",{id:"backups"},"Backups"),Object(o.b)(i.a,{mdxType:"Alert"},Object(o.b)("p",null,"By default, backups are made daily between 1h and 5h.")),Object(o.b)("p",null,"You can change the window very easily (use 24h format):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {6}',title:'".qovery.yml"',"{6}":!0}),"application:\n  ...\ndatabases:\n  - name: my-mongodb\n    type: mongodb\n    backup-window: 21-23\n")),Object(o.b)("p",null,"As described in the configuration file, the backup occurs between 9 PM and 11 PM."))}d.isMDXComponent=!0},256:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},257:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,O=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return a?r.a.createElement(O,c({ref:t},s,{components:a})):r.a.createElement(O,c({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},258:function(e,t,a){"use strict";a(262);var n=a(0),r=a.n(n),o=a(256),i=a.n(o);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},262:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(265)}),a(75)("fill")},265:function(e,t,a){"use strict";var n=a(26),r=a(76),o=a(24);e.exports=function(e){for(var t=n(this),a=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,s=void 0===l?a:r(l,a);s>c;)t[c++]=e;return t}}}]);