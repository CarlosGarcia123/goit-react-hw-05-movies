"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[518],{269:function(n,e,t){t.d(e,{Z:function(){return o}});var r="Message_message__fh13J",c=t(184),i=function(n){var e=n.children;return(0,c.jsx)("div",{className:r,children:e})};i.defaultProps={children:[]};var o=i},518:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(861),c=t(439),i=t(757),o=t.n(i),u=t(791),a=t(689),s=t(228),f=t(269),h="MovieDetailsReviews_item__8uFGb",v="MovieDetailsReviews_author__BRhsM",l="MovieDetailsReviews_review__ds7TL",d=t(184),p=function(){var n=(0,a.UO)().movieId,e=(0,u.useState)([]),t=(0,c.Z)(e,2),i=t[0],p=t[1],_=(0,u.useState)(null),m=(0,c.Z)(_,2),w=m[0],j=m[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.jW)(n);case 3:t=e.sent,p(t.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Smth wrong with fetch reviews on movie page",e.t0),j(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,d.jsxs)("div",{children:[i.length>0?(0,d.jsx)("ul",{className:l,children:i.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,d.jsxs)("li",{className:h,children:[(0,d.jsxs)("h3",{className:v,children:["Author: ",t," "]}),(0,d.jsx)("p",{children:r})]},e)}))}):(0,d.jsx)("p",{children:"We don't have any reviews for this movie"}),w&&(0,d.jsx)(f.Z,{children:(0,d.jsx)("h2",{children:"The service is temporarily unavailable. Please try again later."})})]})}},228:function(n,e,t){t.d(e,{Df:function(){return i},TP:function(){return u},V0:function(){return o},jW:function(){return s},z0:function(){return a}});var r="https://api.themoviedb.org/3/",c="94dbe73fcd84ac739d9a0f3a17326b65";function i(){return fetch("".concat(r,"trending/all/day?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.results}))}function o(n){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results}))}function u(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))}function a(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.cast}))}function s(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))}},861:function(n,e,t){function r(n,e,t,r,c,i,o){try{var u=n[i](o),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var o=n.apply(e,t);function u(n){r(o,c,i,u,a,"next",n)}function a(n){r(o,c,i,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=518.cb450608.chunk.js.map