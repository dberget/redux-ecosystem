
          window.__NEXT_REGISTER_PAGE('/topic', function() {
            var comp = module.exports=webpackJsonp([4],{242:function(e,t,r){e.exports=r(243)},243:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(21),a=n(u),o=r(26),c=n(o),s=r(0),f=n(s),l=r(75),i=n(l),d=r(116),p=n(d),m=r(71),g=n(m),h=r(118),v=(n(h),function(e){var t=e.categories;return f.default.createElement(g.default,{header:t.name},t.subcategories.map(function(e){return f.default.createElement(p.default,{key:e.name,resource:e})}))});v.getInitialProps=function(){var e=(0,c.default)(a.default.mark(function e(t){var r,n,u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.category,e.next=3,(0,i.default)("http://localhost:3000/category.json/"+r);case 3:return n=e.sent,e.next=6,n.json();case 6:return u=e.sent,e.abrupt("return",{categories:u});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.default=v}},[242]);
            return { page: comp.default }
          })
        