(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8932:function(e,a,n){"use strict";var r=n(5893),t=(n(7294),n(9216)),o=n.n(t);a.Z=function(){return(0,r.jsx)("footer",{className:o().footer,id:"kontakt",children:(0,r.jsxs)("div",{className:o().footer__container,children:[(0,r.jsxs)("address",{className:o().address,children:[(0,r.jsxs)("p",{children:["Studio Pod Sufitem",(0,r.jsx)("br",{}),"ul. Skoczylasa 10/12 lok. 81",(0,r.jsx)("br",{}),"03-465 Warszawa"]}),(0,r.jsx)("a",{href:"tel:+48799079809",className:o().telMail,children:"+48 799 079 809"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"mailto:zapisy.podsufitem@gmail.com",className:o().telMail,children:"zapisy.podsufitem@gmail.com"})]}),(0,r.jsxs)("section",{className:o().media,children:[(0,r.jsx)("a",{href:"mailto:zapisy.podsufitem@gmail.com",className:o().fontAwesome,"aria-label":"Mail link",children:(0,r.jsx)("i",{"aria-hidden":"true",className:"fas fa-envelope fa-3x"})}),(0,r.jsx)("a",{href:"https://www.facebook.com/podsufitem",target:"_blank","aria-label":"Facebook link",className:o().fontAwesome,children:(0,r.jsx)("i",{"aria-hidden":"true",className:"fab fa-facebook-square fa-3x"})}),(0,r.jsx)("a",{href:"https://www.instagram.com/pod.sufitem/",target:"_blank","aria-label":"Instagram link",className:o().fontAwesome,children:(0,r.jsx)("i",{"aria-hidden":"true",className:"fab fa-instagram-square fa-3x"})})]})]})})}},6071:function(e,a,n){"use strict";var r=n(3038),t=n(862);a.default=void 0;var o=t(n(7294)),i=n(1689),s=n(2441),c=n(5749),l={};function u(e,a,n,r){if(e&&(0,i.isLocalURL)(a)){e.prefetch(a,n,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[a+"%"+n+(t?"%"+t:"")]=!0}}var f=function(e){var a=!1!==e.prefetch,n=(0,s.useRouter)(),t=n&&n.asPath||"/",f=o.default.useMemo((function(){var a=(0,i.resolveHref)(t,e.href,!0),n=r(a,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,i.resolveHref)(t,e.as):s||o}}),[t,e.href,e.as]),_=f.href,v=f.as,b=e.children,d=e.replace,m=e.shallow,p=e.scroll,h=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var g=o.Children.only(b),k=g&&"object"===typeof g&&g.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),x=r(j,2),N=x[0],y=x[1],w=o.default.useCallback((function(e){N(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,N]);(0,o.useEffect)((function(){var e=y&&a&&(0,i.isLocalURL)(_),r="undefined"!==typeof h?h:n&&n.locale,t=l[_+"%"+v+(r?"%"+r:"")];e&&!t&&u(n,_,v,{locale:r})}),[v,_,y,h,a,n]);var L={ref:w,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,a,n,r,t,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),a[t?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,n,_,v,d,m,p,h)},onMouseEnter:function(e){(0,i.isLocalURL)(_)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,_,v,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var O="undefined"!==typeof h?h:n&&n.locale,E=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(v,O,n&&n.locales,n&&n.domainLocales);L.href=E||(0,i.addBasePath)((0,i.addLocale)(v,O,n&&n.defaultLocale))}return o.default.cloneElement(g,L)};a.default=f},5749:function(e,a,n){"use strict";var r=n(3038);a.__esModule=!0,a.useIntersection=function(e){var a=e.rootMargin,n=e.disabled||!i,c=(0,t.useRef)(),l=(0,t.useState)(!1),u=r(l,2),f=u[0],_=u[1],v=(0,t.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,a,n){var r=function(e){var a=e.rootMargin||"",n=s.get(a);if(n)return n;var r=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var a=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;a&&n&&a(n)}))}),e);return s.set(a,n={id:a,observer:t,elements:r}),n}(n),t=r.id,o=r.observer,i=r.elements;return i.set(e,a),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(t))}}(e,(function(e){return e&&_(e)}),{rootMargin:a}))}),[n,a,f]);return(0,t.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return _(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[v,f]};var t=n(7294),o=n(8391),i="undefined"!==typeof IntersectionObserver;var s=new Map},1737:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return b}});var r=n(5893);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var o=n(7294),i=n(1163),s=n(1664),c=n(1512),l=n.n(c),u=function(){var e=(0,o.useState)(!1),a=e[0],n=e[1],t=(0,o.useState)(!1),c=t[0],u=t[1];function f(){n(!a),u(!c)}var _=[{id:"classes",name:"Zaj\u0119cia",url:"/#zajecia",isLink:!0},{id:"teachers",name:"Instruktorki",url:"/#instruktorki",isLink:!0},{id:"prices",name:"Cennik",url:"/#cennik",isLink:!0},{id:"gallery",name:"Galeria",url:"/galeria",isLink:!0},{id:"contact",name:"Kontakt",url:"/galeria"===(0,i.useRouter)().pathname?"/galeria#kontakt":"/#kontakt",isLink:!0},{id:"booking",name:"Grafik i zapisy",url:"https://app.fitssey.com/podsufitem/frontoffice",isLink:!1}].map((function(e){return(0,r.jsx)("li",{className:"".concat(l().navbar__navitem," ").concat(!e.isLink&&l().navbar__navitem_blue),onClick:f,children:e.isLink?(0,r.jsx)(s.default,{href:e.url,className:l().navbar__navlink,tabIndex:"0",children:e.name}):(0,r.jsx)("a",{href:e.url,target:"_blank",className:l().navbar__bookingLink,children:e.name})},e.id)}));return(0,r.jsx)("header",{className:l().navbar,children:(0,r.jsxs)("nav",{className:l().navbar__nav,children:[(0,r.jsx)(s.default,{href:"/#home",children:(0,r.jsx)("div",{alt:"Homepage",className:l().navbar__logo})}),(0,r.jsx)("ul",{className:"".concat(l().navbar__navlist," ").concat(c?l().navbar__navlist_active:""),children:_}),(0,r.jsx)("button",{className:"".concat(l().hamburger," ").concat(l()["hamburger--squeeze"]," ").concat(a?l()["is-active"]:""),onClick:f,type:"button",children:(0,r.jsx)("span",{className:l()["hamburger-box"],children:(0,r.jsx)("span",{className:l()["hamburger-inner"]})})})]})})},f=n(8932);n(347),n(8679);function _(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?_(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var b=function(e){var a=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(a,v({},n)),(0,r.jsx)(f.Z,{})]})}},1780:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1737)}])},9216:function(e){e.exports={fontAwesome:"Footer_fontAwesome__4Zwi4",footer:"Footer_footer__3f33N",footer__container:"Footer_footer__container__gghjw",telMail:"Footer_telMail__2iGIO",media:"Footer_media__1d6dW"}},1512:function(e){e.exports={navbar:"Navbar_navbar__1pVdo",navbar__bookingLink:"Navbar_navbar__bookingLink__2n4Lt",navbar__nav:"Navbar_navbar__nav__3-Gz3",navbar__logo:"Navbar_navbar__logo__1MwH_",navbar__navlist:"Navbar_navbar__navlist__1fuw_",navbar__navitem:"Navbar_navbar__navitem__2pbkA",navbar__navitem_blue:"Navbar_navbar__navitem_blue__1erUw",hamburger:"Navbar_hamburger__3GoM_","is-active":"Navbar_is-active__2s_7Q","hamburger-inner":"Navbar_hamburger-inner__2UzCV","hamburger-box":"Navbar_hamburger-box__2BYHU","hamburger--squeeze":"Navbar_hamburger--squeeze__3lEd4",navbar__navlist_active:"Navbar_navbar__navlist_active__2EYYQ"}},8679:function(){},347:function(){},1664:function(e,a,n){e.exports=n(6071)},1163:function(e,a,n){e.exports=n(2441)}},function(e){var a=function(a){return e(e.s=a)};e.O(0,[774,179],(function(){return a(1780),a(2441)}));var n=e.O();_N_E=n}]);