(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{39:function(e,t,c){"use strict";var n=c(8),s=c(40),i=c.n(s),o=c(1);t.a=function(){return Object(o.jsxs)("div",{className:i.a.noquotes,children:[Object(o.jsx)("p",{children:"No quotes found!"}),Object(o.jsx)(n.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})}},40:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__36GQP"}},51:function(e,t,c){e.exports={item:"QuoteItem_item__xuGSY"}},52:function(e,t,c){e.exports={list:"QuoteList_list__39pDE",sorting:"QuoteList_sorting__3TnQ2"}},56:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),i=c(8),o=c(51),r=c.n(o),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:r.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(52),j=c.n(d),l=function(e){var t=e.quotes,c=Object(s.h)(),i=Object(s.i)(),o="asc"===new URLSearchParams(i.search).get("sort"),r=function(e,t){return e.sort((function(e,c){return t?e.id>c.id?1:-1:e.id<c.id?1:-1}))}(t,o);return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){c.push({pathname:i.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:r.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(39),h=c(35),x=c(36),O=c(14);t.default=function(){var e=Object(h.a)(x.d,!0),t=e.sendRequest,c=e.status,s=e.data,i=e.error;return Object(n.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(O.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"===c&&0===s.length?Object(a.jsx)(b.a,{}):Object(a.jsx)(l,{quotes:s})}}}]);
//# sourceMappingURL=5.626ea870.chunk.js.map