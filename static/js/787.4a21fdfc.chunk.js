"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{155:function(e,t,n){n.d(t,{O:function(){return l}});n(791);var r=n(689),a=n(87),i="MoviesList_moviesList__P6SP5",s="MoviesList_moviesListItem__OFqms",c="MoviesList_moviesListImg__F+Cfs",o="MoviesList_moviesListTitle__fjOf0",u="MoviesList_moviesListLink__8Ci-i",p=n(184),l=function(e){var t=e.movies,n=(e.id,(0,r.TH)());return(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,r=e.original_title,i=e.poster_path,l=e.title;return(0,p.jsx)("li",{className:s,children:(0,p.jsxs)(a.rU,{className:u,to:"/movies/".concat(t),state:{from:n},children:[i?(0,p.jsx)("img",{className:c,src:"https://image.tmdb.org/t/p/w500".concat(i),alt:l}):(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:"https://th.bing.com/th/id/OIP.7qni1YNN24OiR3n0YCp0QgHaEo?rs=1&pid=ImgDetMain",alt:"movie",width:200,height:300})}),(0,p.jsx)("p",{className:o,children:r})]})},t)}))})})}},787:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(791),a=n(439),i="moviesGallery_moviesListContainer__6ugLJ",s="moviesGallery_pageTitle__DZzKQ",c=n(155),o=n(635),u=n(784),p=n(532),l=n(184),f=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],f=t[1],m=(0,r.useState)(p.n$.idle),d=(0,a.Z)(m,2),h=d[0],v=d[1];return(0,r.useEffect)((function(){v(p.n$.pending),(0,o.Df)().then((function(e){var t=e.data;t&&Array.isArray(t.results)&&f(t.results),v(p.n$.success)})).catch((function(e){console.error("Error:",e)})).finally((function(){v(p.n$.idle)}))}),[]),(0,l.jsxs)("div",{className:i,children:[h===p.n$.pending&&(0,l.jsx)(u.a,{status:h}),(0,l.jsx)("h2",{className:s,children:"Only trending today"}),(0,l.jsx)(c.O,{movies:n})]})},m=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(f,{})})}},635:function(e,t,n){n.d(t,{Df:function(){return o},M1:function(){return l},V0:function(){return u},t2:function(){return p},tx:function(){return f}});var r=n(861),a=n(757),i=n.n(a),s=n(532),c=n(294),o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(s.HQ,"/trending/movie/day"),params:{language:"en-US",api_key:s.q1},headers:{accept:"application/json",Authorization:"Bearer ".concat(s.LT)}},e.next=3,(0,c.Z)(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(s.HQ,"/search/movie"),params:{language:"en-US",api_key:s.q1,query:t,page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(s.LT)}},e.next=3,(0,c.Z)(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(s.HQ,"/movie/").concat(t),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(s.LT)}},e.next=3,c.Z.request(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(s.HQ,"/movie/").concat(t,"/credits"),params:{language:"en-US","\u0430pi_key":s.q1},headers:{accept:"application/json",Authorization:"Bearer ".concat(s.LT)}},e.next=3,c.Z.request(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(s.HQ,"/movie/").concat(t,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(s.LT)}},e.next=3,c.Z.request(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=787.4a21fdfc.chunk.js.map