(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,a,i){var n=i(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,a,i){var n=i(3646),t=i(6860),o=i(379),c=i(8206);e.exports=function(e){return n(e)||t(e)||o(e)||c()}},3367:function(e,a,i){"use strict";var n;a.__esModule=!0,a.AmpStateContext=void 0;var t=((n=i(7294))&&n.__esModule?n:{default:n}).default.createContext({});a.AmpStateContext=t},7845:function(e,a,i){"use strict";a.__esModule=!0,a.isInAmpMode=c,a.useAmp=function(){return c(t.default.useContext(o.AmpStateContext))};var n,t=(n=i(7294))&&n.__esModule?n:{default:n},o=i(3367);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ampFirst,i=void 0!==a&&a,n=e.hybrid,t=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return i||t&&c}},7947:function(e,a,i){"use strict";var n=i(9713);function t(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}a.__esModule=!0,a.defaultHead=u,a.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=m();if(a&&a.has(e))return a.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=n?Object.getOwnPropertyDescriptor(e,t):null;o&&(o.get||o.set)?Object.defineProperty(i,t,o):i[t]=e[t]}i.default=e,a&&a.set(e,i);return i}(i(7294)),s=(o=i(617))&&o.__esModule?o:{default:o},r=i(3367),l=i(4287),d=i(7845);function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[c.default.createElement("meta",{charSet:"utf-8"})];return e||a.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function p(e,a){return"string"===typeof a||"number"===typeof a?e:a.type===c.default.Fragment?e.concat(c.default.Children.toArray(a.props.children).reduce((function(e,a){return"string"===typeof a||"number"===typeof a?e:e.concat(a)}),[])):e.concat(a)}var z=["name","httpEquiv","charSet","itemProp"];function w(e,a){return e.reduce((function(e,a){var i=c.default.Children.toArray(a.props.children);return e.concat(i)}),[]).reduce(p,[]).reverse().concat(u(a.inAmpMode)).filter(function(){var e=new Set,a=new Set,i=new Set,n={};return function(t){var o=!0,c=!1;if(t.key&&"number"!==typeof t.key&&t.key.indexOf("$")>0){c=!0;var s=t.key.slice(t.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(t.type){case"title":case"base":a.has(t.type)?o=!1:a.add(t.type);break;case"meta":for(var r=0,l=z.length;r<l;r++){var d=z[r];if(t.props.hasOwnProperty(d))if("charSet"===d)i.has(d)?o=!1:i.add(d);else{var m=t.props[d],u=n[d]||new Set;"name"===d&&c||!u.has(m)?(u.add(m),n[d]=u):o=!1}}}return o}}()).reverse().map((function(e,i){var o=e.key||i;if(!a.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(a){return e.props.href.startsWith(a)}))){var s=function(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?t(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,c.default.cloneElement(e,s)}return c.default.cloneElement(e,{key:o})}))}function _(e){var a=e.children,i=(0,c.useContext)(r.AmpStateContext),n=(0,c.useContext)(l.HeadManagerContext);return c.default.createElement(s.default,{reduceComponentsToState:w,headManager:n,inAmpMode:(0,d.isInAmpMode)(i)},a)}_.rewind=function(){};var j=_;a.default=j},617:function(e,a,i){"use strict";var n=i(319),t=i(4575),o=i(3913),c=(i(1506),i(2205)),s=i(8585),r=i(9754);function l(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=r(e);if(a){var t=r(this).constructor;i=Reflect.construct(n,arguments,t)}else i=n.apply(this,arguments);return s(this,i)}}a.__esModule=!0,a.default=void 0;var d=i(7294),m=function(e){c(i,e);var a=l(i);function i(e){var o;return t(this,i),(o=a.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(i,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),i}(d.Component);a.default=m},9434:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return O}});var n=i(5893),t=i(7294),o=i(9008),c=i(8907),s=i.n(c),r=function(e){var a=e.id,i=e.title,t=e.black,o=e.border,c=e.prices,r=e.children;return(0,n.jsxs)("div",{className:"".concat(s().container," ").concat(t?s().container_black:""," ").concat(c?s().container__prices:""),children:[(0,n.jsx)("div",{"aria-hidden":"true",className:s().scrollHelper,id:a}),(0,n.jsxs)("div",{className:"".concat(s().content," ").concat(o?s().content_border:""),children:[i&&(0,n.jsx)("h1",{className:s().title,children:i}),r,c&&(0,n.jsxs)("div",{className:s().moreInfo,children:[(0,n.jsx)("div",{children:"* - Studenci 10% \u017cni\u017cki"})," ",(0,n.jsx)("div",{children:"** - Wszystkie karnety s\u0105 wa\u017cne 30 dni"})]})]})]})},l=i(1999),d=i.n(l),m=function(){var e=[{id:"poleDance",name:"Pole Dance",desc:(0,n.jsx)("p",{children:"Zaj\u0119cia \u0142\u0105cz\u0105ce w sobie elementy gimnastyki, akrobatyki i ta\u0144ca przy u\u017cyciu dr\u0105\u017cka pionowego. Po\u0142\u0105czenie si\u0142y, gracji, gibko\u015bci i dynamiki. Na tych zaj\u0119ciach nie tylko nauczysz si\u0119 obrot\xf3w, wspinaczki i kombinacji figur, ale tak\u017ce wyrze\u017abisz sylwetk\u0119, zyskasz pewno\u015b\u0107 siebie i poprawisz samopoczucie. Zaj\u0119cia odbywaj\u0105 si\u0119 na r\xf3\u017cnych poziomach zaawansowania oraz w kameralnych grupach, 1 osoba do rurki."})},{id:"poleChoreo",name:"Pole Choreo",desc:(0,n.jsx)("p",{children:"Zaj\u0119cia z nauk\u0105 choreografii przy u\u017cyciu pionowego dr\u0105\u017cka, z elementami floorwork oraz ta\u0144ca wsp\xf3\u0142czesnego. Polecane dla wszystkich os\xf3b trenuj\u0105cych pole dance, kt\xf3re chcia\u0142yby \u0107wiczy\u0107 p\u0142ynno\u015b\u0107, czysto\u015b\u0107 ruchu i pami\u0119\u0107 ruchow\u0105. Zaj\u0119cia przeznaczone dla os\xf3b, kt\xf3re maj\u0105 opanowane podstawy pole dance."})},{id:"aerialHoop",name:"Aerial Hoop",desc:(0,n.jsx)("p",{children:"Zaj\u0119cia gimnastyczno-akrobatyczne na kole cyrkowym, na kt\xf3rych nauczysz si\u0119 wykonywa\u0107 efektowne triki w powietrzu. Dzi\u0119ki temu, \u017ce ko\u0142o pracuje w r\xf3\u017cnych p\u0142aszczyznach ruchu, zaanga\u017cowane jest ca\u0142\u0119 cia\u0142o, a kombinacje s\u0105 bardzo widowiskowe."})},{id:"spineYoga",name:"Joga kr\u0119gos\u0142upa",desc:(0,n.jsx)("p",{children:"Zaj\u0119cia prozdrowotne, zawieraj\u0105ce zar\xf3wno \u0107wiczenia wzmacniaj\u0105ce, jak i elementy mobilno\u015bci i stabilno\u015bci. Pomagaj\u0105 poprawi\u0107 postaw\u0119 cia\u0142a oraz wyeliminowa\u0107 nieprawid\u0142owe nawyki ruchowe i dolegliwo\u015bci b\xf3lowe narz\u0105du ruchu. Niweluj\u0105 skutki siedz\u0105cego trybu \u017cycia. \u0106wiczenia wykonywane s\u0105 wolno i dok\u0142adnie, w po\u0142\u0105czeniu z oddechem oraz du\u017cym naciskiem na poprawn\u0105 technik\u0119."})},{id:"stretching",name:"Stretching",desc:(0,n.jsx)("p",{children:"Zaj\u0119cia wzmacniaj\u0105co-rozci\u0105gaj\u0105ce dla wszystkich, nie tylko trenuj\u0105cych akrobatyk\u0119 powietrzn\u0105. Na tych zaj\u0119ciach nauczysz si\u0119 aktywnie pracowa\u0107 nad zwi\u0119kszeniem ruchomo\u015bci staw\xf3w, przygotujesz si\u0119 do figur gimnastycznych, takich jak szpagat wykroczno-zakroczny, szpagat poprzeczny, mostek, cheststand, poprawisz postaw\u0119 cia\u0142a oraz \u015bwiadomo\u015b\u0107 ruchu. Poznasz r\xf3\u017cnorodne techniki rozci\u0105gania, wysmuklisz sylwetk\u0119 oraz popracujesz nad pi\u0119knymi liniami i wyko\u0144czeniem ruchu."})},{id:"strechingRoll",name:"Stretching z rolowaniem",desc:(0,n.jsx)("p",{children:"Zaj\u0119cia s\u0142u\u017c\u0105ce przede wszystkim rozlu\u017anieniu i regeneracji organizmu. Pierwsza cz\u0119\u015b\u0107 zaj\u0119\u0107 po\u015bwi\u0119cona jest rolowaniu, czyli automasa\u017cowi z wykorzystaniem r\xf3\u017cnej wielko\u015bci rolek i pi\u0142eczek. W drugiej cz\u0119\u015bci pojawia si\u0119 stretching, g\u0142\xf3wnie pasywny i relaksacyjny. Dzi\u0119ki takiej kombinacji poczujesz ulg\u0119 po ca\u0142ym tygodniu pracy i trening\xf3w."})},{id:"pilates",name:"Pilates",desc:(0,n.jsx)("p",{children:"Pilates stanowi jedn\u0105 z najbezpieczniejszych form aktywno\u015bci, dlatego zaj\u0119\u0107ia przeznaczone s\u0105 dla wszystkich, Trening oparty jest na aktywizacji mi\u0119\u015bni g\u0142\u0119bokich, stabilizuj\u0105cych, w po\u0142\u0105czeniu z \u0107wiczeniami oddechowymi. W szczeg\xf3lno\u015bci wzmocnieniu ulegaj\u0105 mi\u0119\u015bnie plec\xf3w i brzucha. Efektem jest szczuplejsza, wyrze\u017abiona sylwetka, lepsza postawa cia\u0142a, eliminacja b\xf3lu kr\u0119gos\u0142upa, mniejsza podatno\u015b\u0107 na kontuzje."})}].map((function(e){var a=e.name,i=e.desc;return(0,n.jsxs)("section",{className:d().classes__singleClass,children:[(0,n.jsx)("h3",{children:a}),i]},a)}));return(0,n.jsx)("article",{className:d().classes,children:e})},u=i(5295),p=i.n(u),z=function(e){return e.show?(0,n.jsx)("div",{className:p().overlay,onClick:e.clicked}):null},w=i(5125),_=i.n(w),j=function(e){var a=e.show,i=e.closeModal,t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{show:a,clicked:i}),(0,n.jsx)("div",{className:"".concat(_().modal," ").concat(a?_().modal_show:""),onClick:i,children:t})]})},h=i(8231),y=i.n(h),k=JSON.parse('[{"name":"Anna \u0141ukasiak","desc":"Za\u0142o\u017cycielka studia Pod Sufitem, instruktorka pole dance, aerial hoop i stretchingu, absolwentka Akademii Wychowania Fizycznego w Warszawie na kierunkach: fizjoterapia i wychowanie fizyczne.<br>Jako nastolatka ta\u0144czy\u0142a, gra\u0142a w siatk\xf3wk\u0119 i biega\u0142a. Na pole dance trafi\u0142a do\u015b\u0107 p\xf3\u017ano, ale lepiej p\xf3\u017ano ni\u017c wcale ;) W gimnastyce powietrznej najbardziej ceni jej nieko\u0144cz\u0105ce si\u0119 mo\u017cliwo\u015bci rozwoju. Uwielbia figury gibko\u015bciowe, ale nieustannie pracuje nad si\u0142\u0105, dynamik\u0105 i nowymi kombinacjami, aby sta\u0107 si\u0119 wszechstronnym sportowcem. Jej zaj\u0119cia charakteryzuj\u0105 si\u0119 porz\u0105dn\u0105 rozgrzewk\u0105, profesjonalnym podej\u015bciem i swobodn\u0105 atmosfer\u0105. Jako instruktor dba o to, aby regularnie zdobywa\u0107 now\u0105 wiedz\u0119 i uczestniczy\u0107 w szkoleniach.<br><br>Osi\u0105gni\u0119cia:<ul><li>I miejsce Sensual Championships 2018</li><li>III miejsce II Akademickie zawody pole dance 2018</li><li>III miejsce Vertical fit Championschip 2018</li><li>II miejsce Duende International Contest 2017</li></ul>Ponadto bra\u0142a udzia\u0142 w wielu treningach, warsztatach, szkoleniach, kursach, sesjach zdj\u0119ciowych i pokazach ca\u0142y czas poszerzaj\u0105c swoj\u0105 wiedz\u0119 oraz propaguj\u0105c pi\u0119kny sport, kt\xf3rym jest pole dance."},{"name":"Agnieszka Piaskowska","desc":"Jest certyfikowan\u0105 instruktork\u0105 Fitness, Pole Dance i Stretchingu. Jako dziecko trenowa\u0142a amatorsko gimnastyk\u0119 i akrobatyk\u0119 oraz wiele innych dyscyplin sportowych. Na rur\u0119 trafi\u0142a w wieku 26 lat, jako \\"drewno\\" i totalny s\u0142abiak po wieloletniej przerwie od jakiejkolwiek aktywno\u015bci.<br>Agnieszka na co dzie\u0144 jest trenerk\u0105 \u2013 na ka\u017cdym treningu oddana ca\u0142ym sercem swoim podopiecznym! Motywuje i wyciska ze swoich kursantek si\xf3dme poty.<br>Jej g\u0142\xf3wne motto: \u017ceby robi\u0107 fajne rzeczy, trzeba robi\u0107 du\u017co upierdliwych rzeczy, wi\u0119c na swoich zaj\u0119ciach m\u0119czy swoje podopieczne, pokazuj\u0105c, \u017ce ci\u0119\u017ck\u0105 prac\u0105 mo\u017cna doj\u015b\u0107 do sukcesu.<br>Specjalizuje si\u0119 w akro trickach, tych statycznych i dynamicznych, opracowuje r\xf3\u017cne progresje trick\xf3w, kt\xf3re na pierwszy rzut oka wydaj\u0105 si\u0119 na maxa trudne i \\"nie do zrobienia\\", a po kilku \u0107wiczeniach okazuj\u0105 si\u0119 po prostu \u0142atwe.<br><br>Osi\u0105gni\u0119cia:<ul><li>I miejsce Sensual Championships 2018</li><li>III miejsce II Akademickie zawody pole dance 2018</li><li>III miejsce Vertical fit Championschip 2018</li><li>II miejsce Duende International Contest 2017</li></ul>Ponadto bra\u0142a udzia\u0142 w wielu treningach, warsztatach, szkoleniach, kursach, sesjach zdj\u0119ciowych i pokazach ca\u0142y czas poszerzaj\u0105c swoj\u0105 wiedz\u0119 oraz propaguj\u0105c pi\u0119kny sport, kt\xf3rym jest pole dance."},{"name":"Agata Szmidt","desc":"Moim nadrz\u0119dnym celem na zaj\u0119ciach pole dance, kt\xf3re prowadz\u0119 jest zara\u017canie pasj\u0105 - pasj\u0105 do pole dance oczywi\u015bcie :) Obecnie jestem certyfikowan\u0105 instruktork\u0105 pole sport, a od 2012 roku d\u0105\u017c\u0119 do ci\u0105g\u0142ego rozwoju w tym sporcie - poprzez regularne treningi, udzia\u0142 w obozach szkoleniowych oraz warsztatach pole dance. Treningowej nudzie m\xf3wi\u0119 stanowcze NIE, za to bezpiecze\u0144stwo na treningu no i jak\u017ce potrzebny dobry nastr\xf3j \u2013 to podstawa! Czego mo\u017cesz oczekiwa\u0107 od moich zaj\u0119\u0107? Elementem sta\u0142ym s\u0105 na pewno triki si\u0142owe (oczywi\u015bcie dostosowane do poziomu zaawansowania), c\xf3\u017c \u2013 si\u0142a to m\xf3j g\u0142\xf3wny atrybut! Ale nie uciekam przed rurk\u0105 obrotow\u0105 i przed standardowymi pole-kombinacjami ;)"},{"name":"Marta Kaczorek","desc":"Pole dance zacz\u0119\u0142am trenowa\u0107 pod koniec 2016 roku, zauroczona pe\u0142nymi gracji dziewczynami kr\u0119c\u0105cymi si\u0119 na rurce i uk\u0142adaj\u0105cymi swoje cia\u0142a w spos\xf3b, o jakim nawet mi si\u0119 nie \u015bni\u0142o. Mimo braku wi\u0119kszego do\u015bwiadczenia sportowego stwierdzi\u0142am, \u017ce musz\u0119 spr\xf3bowa\u0107 swoich si\u0142. Od pierwszych zaj\u0119\u0107 by\u0142am zachwycona tym sportem i ka\u017cdy, nawet najmniejszy sukces, przynosi\u0142 mi ogrom satysfakcji. Rurka towarzyszy\u0142a mi przy pisaniu matury i aplikacji na medycyn\u0119 na Warszawskim Uniwersytecie Medycznym i nadal stanowi dla mnie priorytet. Kieruj\u0119 si\u0119 my\u015bl\u0105, \u017ce chcie\u0107 to m\xf3c i przy odrobinie zaparcia wszystko jest mo\u017cliwe. Najbardziej w rurce lubi\u0119 to, \u017ce nauka tego sportu tak naprawd\u0119 nigdy si\u0119 nie ko\u0144czy. Nadal si\u0119 rozwijam, ucz\u0119 nowych trik\xf3w, a tak\u017ce mierz\u0119 z wyzwaniem jakim jest prowadzenie w\u0142asnych zaj\u0119\u0107 jako instruktorka. Podczas trening\xf3w stawiam na dobr\u0105 zabaw\u0119 i bezpieczne przygotowanie kursantek do odkrywania nowych figurek. Moimi faworytami s\u0105 elementy rozci\u0105gni\u0119cia, zw\u0142aszcza figurki typu bendy, ciekawe przej\u015bcia i combosy."},{"name":"Aleksandra Szczepa\u0144ska","desc":"Jestem certyfikowan\u0105 instruktork\u0105 Pole Sport. Na co dzie\u0144 studiuj\u0119 filologi\u0119 hiszpa\u0144sk\u0105. Od ponad 6 lat trenuj\u0119 pole dance, a od 4 prowadz\u0119 zaj\u0119cia. Podczas treningu priorytetem s\u0105 dla mnie bezpiecze\u0144stwo i dobry nastr\xf3j uczestnik\xf3w. Od 2015 regularnie ucz\u0119szczam na warsztaty. Na swoim koncie mam ich ponad 20, a lista nadal ro\u015bnie. Szkoli\u0142am si\u0119 mi\u0119dzy innymi u czterokrotnej mistrzyni \u015bwiata - Pink Pumy oraz u innych gwiazd pole dance, takich jak: Bendy Kate , Lea Roth, Sarah Scott, Phoenix Kazree, Alex Shchukin."},{"name":"Agata Wo\u017anicka","desc":"Instruktor fitness - Nowoczesne Formy Rekreacji Ruchowej, trener kr\u0119gos\u0142upa, trener tenisa ziemnego, trener trx, fizjoterapeuta. Od najm\u0142odszych lat jestem zwi\u0105zana ze sportem. Specjalizuj\u0119 si\u0119 w treningach prozdrowotnych, w kt\xf3rych koncentruj\u0119 si\u0119 na dolegliwo\u015bciach zwi\u0105zanych z narz\u0105dem ruchu. Szeroki zakres wiedzy i du\u017ca praktyka w zakresie usprawniania i odnowy biologicznej przyczyni\u0142y si\u0119 do mojego profesjonalnego i indywidualnego podej\u015bcia do klienta. Prowadz\u0119 zaj\u0119cia grupowe i treningi personalne. Nabyta wiedz\u0119 wykorzystuj\u0119 r\xf3wnie\u017c na zaj\u0119ciach mentalnych. Masz problem z kr\u0119gos\u0142upem? Boli kolano lub bark? Pomog\u0119 Ci pozby\u0107 si\u0119 b\xf3lu i dysfunkcji."},{"name":"Karolina Banaszek","desc":"Absolwentka Pa\u0144stwowej Szko\u0142y Sztuki Cyrkowej w Warszawie oraz Wydzia\u0142u Choreografii Akademii Muzycznej w \u0141odzi.<br>Ze sportem i ta\u0144cem zwi\u0105zana jestem \u201eod zawsze\u201d. Jako dziecko wyczynowo trenowa\u0142am \u0142y\u017cwiarstwo figurowe, potem jednak moje zainteresowania posz\u0142y w stron\u0119 ta\u0144ca, sztuki cyrkowej i teatru, co zaowocowa\u0142o wyst\u0119pami w przedstawieniach akrobatycznych w Polsce i za granic\u0105. 7 lat temu zacz\u0119\u0142am prac\u0119 instruktora Pole Dance oraz Aerial w szkole ta\u0144ca OH LALA, co pozwoli\u0142o mi wypracowa\u0107 swoj\u0105 metodyk\u0119 nauczania tych dziedzin. Uwa\u017cam, \u017ce o jako\u015bci instruktora \u015bwiadczy poziom najs\u0142abszej osoby w grupie ;) ale najwa\u017cniejsze jest, \u017ceby instruktor potrafi\u0142 zarazi\u0107 pasj\u0105 do sportu i...do ci\u0119\u017ckiej pracy. Na co dzie\u0144  mo\u017cecie mnie zobaczy\u0107 mi\u0119dzy innymi w spektaklach Teatru AKT (z kt\xf3rym regularnie wsp\xf3\u0142pracuj\u0119 od 10 lat, wykorzystuj\u0105c swoje umiej\u0119tno\u015bci taneczne i akrobatyczne), a tak\u017ce na deskach Warszawskiej Opery Kameralnej."},{"name":"Paulina Zelman","desc":"Pierwsze taneczne kroki stawia\u0142am jako cheerleaderka zespo\u0142u Focus, b\u0119d\u0105c jeszcze nastolatk\u0105. Swoje umiej\u0119tno\u015bci w Pole Dance zdobywa\u0142am u mistrzyni stylu Pole Dance i Exotic Martyny Dominikowskiej. Nieustannie si\u0119 szkol\u0119 i uczestnicz\u0119 w mi\u0119dzynarodowych warsztatach. Dodatkowo rozwijam swoje umiej\u0119tno\u015bci z ta\u0144ca klasycznego, akrobatyki i gimnastyki. Zawsze interesowa\u0142am si\u0119 sportem i ta\u0144cem. Pole dance jest dla mnie po\u0142\u0105czeniem pi\u0119kna i si\u0142y. Przez ten styl odkrywam w sobie wszystkie zmys\u0142y, kt\xf3re pozwalaj\u0105 mi osi\u0105gn\u0105\u0107 wewn\u0119trzne spe\u0142nienie. Treningi nauczy\u0142y mnie pracy nad \u015bwiadomo\u015bci\u0105 cia\u0142a, wci\u0105\u017c ucz\u0105 wytrwa\u0142o\u015bci i pokory."}]'),f=function(){var e=(0,t.useState)(!1),a=e[0],i=e[1],o=(0,t.useState)({}),c=o[0],s=o[1],r=(0,t.useState)(null),l=r[0],d=r[1];function m(e){l.body.style.overflowY="hidden",s(e),i(!0)}function u(){s({}),i(!1)}return(0,t.useEffect)((function(){d(document)}),[]),(0,n.jsxs)("section",{className:y().container,children:[k.map((function(e){return(0,n.jsxs)("figure",{className:y().teacher__container,onClick:function(){return m(e)},onKeyDown:function(a){return function(e,a){13===e.keyCode&&m(a),27===e.keyCode&&u()}(a,e)},tabIndex:"0",children:[(0,n.jsx)("img",{src:"/static/images/portrait.jpeg",alt:"Picture of a doggo",className:y().teacher__thumbnail}),(0,n.jsx)("figcaption",{className:y().teacher__name,children:e.name})]},e.name)})),(0,n.jsx)(j,{show:a,closeModal:u,children:(0,n.jsxs)("div",{className:y().modal__container,children:[(0,n.jsx)("img",{src:"/static/images/portrait.jpeg",alt:"doggo",className:y().modal__photo}),(0,n.jsxs)("aside",{className:y().modal__content,children:[(0,n.jsx)("h4",{className:y().modal__title,children:c.name}),(0,n.jsx)("p",{className:y().modal__desc,dangerouslySetInnerHTML:{__html:c.desc}})]})]})})]})},g=JSON.parse('{"AR":[{"id":1,"name":"Wej\u015bcie jednorazowe","price":40},{"id":2,"name":"Karnet 4 wej\u015bcia","price":120},{"id":3,"name":"Karnet 8 wej\u015b\u0107","price":220},{"id":4,"name":"Karnet 12 wej\u015b\u0107","price":300}],"KN":[{"id":1,"name":"Wej\u015bcie jednorazowe","price":50}],"CD":[{"id":1,"name":"Karnet 8 wej\u015b\u0107","price":260},{"id":2,"name":"Karnet 12 wej\u015b\u0107","price":360},{"id":3,"name":"Karnet 16 wej\u015b\u0107","price":460},{"id":4,"name":"Karnet 20 wej\u015b\u0107","price":500}],"KK":[{"id":1,"name":"Wynajem Pole Room SOLO (osoby z aktywnym karnetem)","price":30},{"id":2,"name":"Wynajem Pole Room DUET","price":50},{"id":3,"name":"Wynajem Pole Room SOLO (osoby spoza studia/bez karnetu)","price":40},{"id":4,"name":"Wolna sala","price":20}]}'),b=i(5645),x=i.n(b),P=i(8311),v=i.n(P),N=function(e){var a=e.name,i=e.price;return(0,n.jsxs)("li",{className:v().priceItem,children:[(0,n.jsx)("a",{href:"https://app.fitssey.com/podsufitem/frontoffice/pricing/cards",target:"_blank",tabIndex:"0",className:v().priceItem__name,children:a}),(0,n.jsxs)("span",{children:[" - ",i,"z\u0142"]})]})},S=function(){return(0,n.jsxs)("section",{className:x().content,children:[(0,n.jsxs)("div",{className:x().content__section,children:[(0,n.jsx)("h3",{className:x().content__sectionTitle,children:"Pole Dance/Aerial Hoop"}),(0,n.jsx)("h4",{children:"(Obowi\u0105zuje na zaj\u0119cia pole dance, aerial)"}),(0,n.jsx)("ul",{className:x().content__priceList,children:g.KN.map((function(e){var a=e.id,i=e.name,t=e.price;return(0,n.jsx)(N,{name:i,price:t},a)}))})]}),(0,n.jsxs)("div",{className:x().content__section,children:[(0,n.jsx)("h3",{className:x().content__sectionTitle,children:"Fitness"}),(0,n.jsx)("h4",{children:"(Obowi\u0105zuje na zaj\u0119cia z wy\u0142\u0105czeniem pole dance i aerial hoop)"}),(0,n.jsx)("ul",{className:x().content__priceList,children:g.AR.map((function(e){var a=e.id,i=e.name,t=e.price;return(0,n.jsx)(N,{name:i,price:t},a)}))})]}),(0,n.jsxs)("div",{className:x().content__section,children:[(0,n.jsx)("h3",{className:x().content__sectionTitle,children:"Mix"}),(0,n.jsx)("h4",{children:"(Obowi\u0105zuje na wszystkie zaj\u0119cia)"}),(0,n.jsx)("ul",{className:x().content__priceList,children:g.CD.map((function(e){var a=e.id,i=e.name,t=e.price;return(0,n.jsx)(N,{name:i,price:t},a)}))})]}),(0,n.jsxs)("div",{className:x().content__section,children:[(0,n.jsx)("h3",{className:x().content__sectionTitle,children:"Wynajem sali"}),(0,n.jsx)("ul",{className:x().content__priceList,children:g.KK.map((function(e){var a=e.id,i=e.name,t=e.price;return(0,n.jsx)(N,{name:i,price:t},a)}))})]})]})},A=(i(8932),i(2025)),I=i.n(A),O=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"pod sufitem // Szko\u0142a akrobatyki powietrznej"})}),(0,n.jsx)("div",{id:"home"}),(0,n.jsxs)("main",{className:I().container,children:[(0,n.jsx)("div",{className:I().landing,children:(0,n.jsxs)("article",{className:I().lead__text,children:[(0,n.jsxs)("p",{children:["Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w Warszawie, w samym centrum Pragi P\xf3\u0142noc.",(0,n.jsx)("br",{}),"Za\u0142o\u017cycielk\u0105 studia jest Anna \u0141ukasiak - mistrzyni Polski Pole Sport Professional POSA 2019, mistrzyni Polski i \u015awiata Aerial Hoop Amateur POSA 2019."]}),(0,n.jsxs)("p",{children:["Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w Warszawie, w samym centrum Pragi P\xf3\u0142noc.",(0,n.jsx)("br",{}),"Za\u0142o\u017cycielk\u0105 studia jest Anna \u0141ukasiak - mistrzyni Polski Pole Sport Professional POSA 2019, mistrzyni Polski i \u015awiata Aerial Hoop Amateur POSA 2019."]}),(0,n.jsxs)("p",{children:["Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w Warszawie, w samym centrum Pragi P\xf3\u0142noc.",(0,n.jsx)("br",{}),"Za\u0142o\u017cycielk\u0105 studia jest Anna \u0141ukasiak - mistrzyni Polski Pole Sport Professional POSA 2019, mistrzyni Polski i \u015awiata Aerial Hoop Amateur POSA 2019."]})]})}),(0,n.jsx)("a",{href:"https://app.fitssey.com/podsufitem/frontoffice",className:I().bookBtn,children:"Zapisy na zaj\u0119cia"}),(0,n.jsx)("section",{className:I().equipment__container,children:(0,n.jsxs)("div",{className:I().equipment__content,children:[(0,n.jsxs)("div",{className:I().equipment__item,children:[(0,n.jsx)("span",{className:I().fontAwesome,children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fas fa-check fa-7x"})}),(0,n.jsxs)("p",{className:I().equipment__desc,children:["Specjalizujemy si\u0119 w zaj\u0119ciach",(0,n.jsxs)("strong",{className:I().bold,children:[" ","pole dance i aerial hoop"]}),", ale w naszej ofercie znajdziesz r\xf3wnie\u017c szereg zaj\u0119\u0107 uzupe\u0142niaj\u0105cych, takich jak:"]}),(0,n.jsxs)("ul",{className:I().equipment__list,children:[(0,n.jsx)("li",{children:"Pole Choreo"}),(0,n.jsx)("li",{children:"Spinning Pole"}),(0,n.jsx)("li",{children:"Stretching"}),(0,n.jsx)("li",{children:" Kalistenika"}),(0,n.jsx)("li",{children:"Joga Kr\u0119gos\u0142upa"})]})]}),(0,n.jsxs)("div",{className:I().equipment__item,children:[(0,n.jsx)("span",{className:I().fontAwesome,children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fas fa-check fa-7x"})}),(0,n.jsxs)("section",{className:I().equipment__desc,children:["Posiadamy sprz\u0119t najwy\u017cszej\xa0jako\u015bci.",(0,n.jsx)("p",{children:"Rurki SunPole o wysoko\u015bci 4 m: chromowo-niklowe, malowane proszkowo i mosi\u0119\u017cne,"}),(0,n.jsx)("p",{children:"Ko\u0142a oraz osprz\u0119t aerial hoop firmy Flying Rose."}),(0,n.jsx)("p",{children:"Bezpiecze\u0144stwo zapewniaj\u0105 certyfikowane materace asekuracyjne o wielko\u015bci 160cmx160cm i grubo\u015bci 15 cm."})]})]}),(0,n.jsxs)("div",{className:I().equipment__item,children:[(0,n.jsx)("span",{className:I().fontAwesome,children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fas fa-check fa-7x"})}),(0,n.jsxs)("section",{className:I().equipment__desc,children:["Na pierwszym miejscu stawiamy jako\u015b\u0107 zaj\u0119\u0107 oraz komfort uczestnik\xf3w, dlatego pracujemy w kameralnych grupach i gwarantujemy indywidualne podej\u015bcie do kursanta.",(0,n.jsx)("p",{children:"Wiek, rozmiar i p\u0142e\u0107 nie ma znaczenia - u nas poczujesz si\u0119 jak w domu!"})]})]})]})}),(0,n.jsxs)("section",{className:I().contact,children:[(0,n.jsxs)("div",{className:"".concat(I().contact__column," ").concat(I().contact__tel),children:[(0,n.jsx)("span",{className:I().contact__column_title,children:"Skontaktuj si\u0119 z nami"}),(0,n.jsx)("div",{className:I().contact__column_content,children:(0,n.jsx)("address",{children:(0,n.jsxs)("ul",{className:I().contact__tel_list,children:[(0,n.jsxs)("li",{className:I().contact__tel_listItem,children:[(0,n.jsx)("a",{href:"tel:+48799079809",className:I().fontAwesome,children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fas fa-phone-alt fa-3x"})}),(0,n.jsx)("a",{href:"tel:+48799079809",children:"+48 799 079 809"})]}),(0,n.jsxs)("li",{className:I().contact__tel_listItem,children:[(0,n.jsx)("a",{href:"mailto:zapisy.podsufitem@gmail.com",className:I().fontAwesome,children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fas fa-envelope fa-3x"})}),(0,n.jsx)("a",{href:"mailto:zapisy.podsufitem@gmail.com",children:"zapisy.podsufitem@gmail.com"})]})]})})})]}),(0,n.jsxs)("div",{className:"".concat(I().contact__column," ").concat(I().contact__social),children:[(0,n.jsx)("span",{className:I().contact__column_title,children:"Znajd\u017a nas w sieci"}),(0,n.jsxs)("div",{className:I().contact__column_content,children:[(0,n.jsx)("a",{href:"https://www.facebook.com/podsufitem",target:"_blank",className:I().fontAwesome,"aria-label":"Facebook link",children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fab fa-facebook-square fa-3x"})}),(0,n.jsx)("a",{href:"https://www.instagram.com/pod.sufitem/",target:"_blank",className:I().fontAwesome,"aria-label":"Instagram link",children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fab fa-instagram-square fa-3x"})})]})]}),(0,n.jsxs)("div",{className:"".concat(I().contact__column," ").concat(I().contact__address),children:[(0,n.jsx)("span",{className:I().contact__column_title,children:"Odwied\u017a nas"}),(0,n.jsxs)("div",{className:I().contact__column_content,children:[(0,n.jsx)("a",{href:"https://goo.gl/maps/vRQJRCQE7JP4J6CWA",target:"_blank",className:I().fontAwesome,"aria-label":"Google Maps Address Link",children:(0,n.jsx)("i",{"aria-hidden":"true",className:"fas fa-map-marker-alt fa-3x"})}),(0,n.jsxs)("address",{children:[(0,n.jsx)("p",{children:"Skoczylasa 10/12 lok. 81"}),(0,n.jsx)("p",{children:"03-465 Warszawa"})]})]})]})]}),(0,n.jsx)(r,{title:"Zaj\u0119cia",id:"zajecia",children:(0,n.jsx)(m,{})}),(0,n.jsx)(r,{title:"Instruktorki",id:"instruktorki",children:(0,n.jsx)(f,{})}),(0,n.jsx)(r,{title:"Cennik",id:"cennik",prices:!0,children:(0,n.jsx)(S,{})})]})]})}},8581:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9434)}])},1999:function(e){e.exports={classes:"Classes_classes__3BDtu",classes__singleClass:"Classes_classes__singleClass__1bvT8",classes__selectionBtn:"Classes_classes__selectionBtn__2NA49"}},8907:function(e){e.exports={container:"InfoBox_container__3iVjI",container_black:"InfoBox_container_black__3sc1g",scrollHelper:"InfoBox_scrollHelper__3m6Dp",title:"InfoBox_title__2-x87",content:"InfoBox_content__17Vbc",content_border:"InfoBox_content_border__1jvru",moreInfo:"InfoBox_moreInfo__gmSqo"}},8311:function(e){e.exports={priceItem:"PriceItem_priceItem__2EnlZ",descList:"PriceItem_descList__ivC7Q"}},5645:function(e){e.exports={content:"Prices_content__3DJK_",content__section:"Prices_content__section__2sk2d",content__sectionTitle:"Prices_content__sectionTitle__Aqbyr",content__priceList:"Prices_content__priceList__2F9-l"}},8231:function(e){e.exports={container:"Teachers_container__1VX6w",teacher__container:"Teachers_teacher__container__3u3Q6",teacher__thumbnail:"Teachers_teacher__thumbnail__g6lMA",teacher__name:"Teachers_teacher__name__3PM5v",modal__container:"Teachers_modal__container__1kI1W",modal__photo:"Teachers_modal__photo__2OC7P",modal__content:"Teachers_modal__content__1zelv",modal__title:"Teachers_modal__title__keNiZ",modal__desc:"Teachers_modal__desc__OB4c2"}},5125:function(e){e.exports={modal:"Modal_modal__YoGDb",modal_show:"Modal_modal_show__2pVHd"}},5295:function(e){e.exports={overlay:"Overlay_overlay__3P2gN"}},2025:function(e){e.exports={fontAwesome:"landingPage_fontAwesome__2OF9K",scrollHelper:"landingPage_scrollHelper__3WPo7",container:"landingPage_container__1Spr0",landing:"landingPage_landing__23z9b",lead__text:"landingPage_lead__text__yH1P7",bookBtn:"landingPage_bookBtn__3_TOT",equipment__container:"landingPage_equipment__container__27lsi",equipment__content:"landingPage_equipment__content__2aPvw",equipment__item:"landingPage_equipment__item__2Gr16",equipment__desc:"landingPage_equipment__desc__23ID6",equipment__list:"landingPage_equipment__list__3P7p7",contact:"landingPage_contact__1UzX1",contact__column_title:"landingPage_contact__column_title__3RbcF",contact__column_content:"landingPage_contact__column_content__3vvFm",contact__tel_list:"landingPage_contact__tel_list__3mlC8",contact__tel_listItem:"landingPage_contact__tel_listItem__2ygbP",contact__social:"landingPage_contact__social__27g5i",contact__address:"landingPage_contact__address__3Lx0_",contact__tel:"landingPage_contact__tel__3tEe9",contact__column:"landingPage_contact__column__2GuIT"}},9008:function(e,a,i){e.exports=i(7947)}},function(e){e.O(0,[774,888,179],(function(){return a=8581,e(e.s=a);var a}));var a=e.O();_N_E=a}]);