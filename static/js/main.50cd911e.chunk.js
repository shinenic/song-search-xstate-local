(this["webpackJsonpsong-search-xstate-local"]=this["webpackJsonpsong-search-xstate-local"]||[]).push([[0],{48:function(e,t,n){e.exports=n.p+"static/media/loading.0f51771c.svg"},49:function(e,t,n){e.exports=n.p+"static/media/search.fa72ba04.svg"},50:function(e,t,n){e.exports=n.p+"static/media/cross.4f744e82.svg"},53:function(e,t,n){e.exports=n(83)},58:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(43),i=n.n(r),c=(n(58),n(17)),s=Object(c.a)(),l=n(11),u=n(20),d=n(47),f=n(26),g=n(13),v=function(e,t){return Math.random()*(t-e)+e},m={searchPage:{on:{SET_KEYWORD:[{cond:"isEmptyKeyword",actions:["setKeyword","resetResult"],target:".idle.idle"},{cond:"isInvalidKeyword",actions:["setKeyword"]},{cond:"skipDebounceSearch",actions:["setKeyword"],target:".searching"},{actions:["setKeyword"],target:".buffering",internal:!1}],TOGGLE_CLEAR:[{cond:"hasNoResult",actions:"clearKeyword",target:".idle.idle"},{cond:"withKeyword",actions:"clearKeyword"},{actions:"resetResult",target:".idle.idle"}]},initial:"idle",states:{idle:{initial:"idle",states:{idle:{},withData:{on:{READ_MORE:{actions:"readMore"}}},noData:{}}},buffering:{after:Object(g.a)({},300,"searching")},searching:{entry:["searchSongList","scrollToTop"],exit:["updateKeywordParam","sendDimension","setPageview"],always:[{cond:"hasNoResult",target:"idle.noData"},{target:"idle.withData"}]}}}},h={root:{initial:"startup",states:{startup:{entry:["initialGA","sendDimension","setPageview"],always:[{cond:"withSettingInLocalStorage",target:"idle",actions:["restoreSetting","filterSongList"]},{target:"fetchRawData"}]},fetchRawData:{invoke:{id:"fetch-initial-data",src:"fetchInitialData",onDone:{target:"idle",actions:["initializeData","storeSetting","filterSongList"]},onError:"error"}},processData:{after:Object(g.a)({},v(2e3,4e3),"arrangeRawData")},arrangeRawData:{after:Object(g.a)({},v(2e3,4e3),"optimizeSearchSpeed")},optimizeSearchSpeed:{after:Object(g.a)({},v(1e3,3e3),"idle")},idle:{type:"parallel",states:Object(l.a)(Object(l.a)({},{menu:{initial:"closed",on:{CLOSE_MENU:".closed",OPEN_MENU:".opened"},states:{closed:{on:{TOGGLE_MENU:"opened"}},opened:{on:{TOGGLE_MENU:"closed",SAVE_AND_CLOSE:{target:"closed",actions:["setSelectedBooksVolumeRange","setSelectedBooks","filterSongList"]}}}}}}),m)},error:{on:{RETRY:"fetchRawData"}}}}},b=n(7),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=localStorage.getItem(e);return JSON.parse(t)},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.stringify(t);return localStorage.setItem(e,n),n},O={INITIAL_DATA:"initial-data",SELECTED_BOOKS_VOLUME_RANGE:"selected-books-volume-range",SELECTED_BOOKS:"selected-books"},p={"\u6700\u65b0\u6392\u884c(\u7c21\u8b5c)":[1,104]},k=["book","title","artist","volume"],y={withSettingInLocalStorage:function(){return Object(b.values)(O).every((function(e){return!Object(b.isEmpty)(E(e))}))},isEmptyKeyword:function(e,t){var n=t.keyword;return Object(b.isEmpty)(n)},isInvalidKeyword:function(e,t){var n,o=t.keyword;return n=Object(b.last)(o),/[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(n)||" "===Object(b.last)(o)},withKeyword:function(e){var t=e.keyword;return!Object(b.isEmpty)(t)},hasNoResult:function(e){var t=e.result;return Object(b.isEmpty)(t)},skipDebounceSearch:function(e,t){return t.skipDebounce}},j=n(3),S=function(e,t){var n=e.filter((function(e){return e.book===t})).map((function(e){var t=e.volume;return Object(b.toInteger)(t)}));return[Object(b.min)(n),Object(b.max)(n)]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return((null===e||void 0===e?void 0:e.booksWithVolumeFilter)||[]).reduce((function(t,n){var o;return Object(l.a)(Object(l.a)({},t),{},Object(g.a)({},n,S(null!==(o=null===e||void 0===e?void 0:e.songs)&&void 0!==o?o:[],n)))}),{})},_=n(44),L={initialGA:function(e){e.ReactGA.initialize("UA-192564086-1",{debug:!1})},setPageview:function(e){e.ReactGA.pageview(window.location.pathname+window.location.search)},sendDimension:function(e){var t=e.ReactGA,n=e.keyword,o=void 0===n?"":n;t.set({ua:navigator.userAgent}),t.set({k:o})}},D={updateKeywordParam:function(e){var t=e.keyword;s.push({search:"?k=".concat(t)})}},N={setKeyword:Object(j.b)({keyword:function(e,t){var n=t.keyword;return void 0===n?"":n}}),clearKeyword:Object(j.b)({keyword:""}),resetResult:Object(j.b)({result:[],pageNumber:1}),readMore:Object(j.b)({pageNumber:function(e){return e.pageNumber+1}}),setSelectedBooksVolumeRange:Object(j.b)({selectedBooksVolumeRange:function(e,t){var n=t.selectedBooksVolumeRange;return void 0===n?{}:n}}),setSelectedBooks:Object(j.b)({selectedBooks:function(e,t){var n=t.selectedBooks;return void 0===n?[]:n}}),searchSongList:Object(j.b)({result:function(e){var t=e.songList,n=e.keyword;return Object(_.a)(t,n.replace(/[\r\n\s]/g,""),{keys:k})}}),initializeData:Object(j.b)((function(e,t){var n=t.data.data,o=n.songs,a=void 0===o?[]:o,r=n.availableBooks,i=void 0===r?[]:r,c=R(n);return{initialData:n,allSongList:a,selectedBooks:i,availableBooks:i,booksVolumeRange:c,selectedBooksVolumeRange:Object(b.toPairs)(c).reduce((function(e,t){var n=Object(u.a)(t,2),o=n[0],a=n[1],r=Object(b.keys)(p).includes(o);return Object(l.a)(Object(l.a)({},e),{},Object(g.a)({},o,r?p[o]:a))}),{})}})),filterSongList:Object(j.b)((function(e){var t=e.allSongList,n=e.selectedBooksVolumeRange,o=e.selectedBooks;return{songList:t.filter((function(e){var t=e.book,a=e.volume;if(!o.includes(t))return!1;if(!Object(b.keys)(n).includes(t))return!0;if(Object(b.isEmpty)(n[t]))return!0;var r=Object(u.a)(n[t],2),i=r[0],c=r[1];return a>=i&&a<=c}))}}))},B={scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},restoreSetting:Object(j.b)((function(){var e,t,n=E(O.INITIAL_DATA);return{initialData:n,selectedBooksVolumeRange:E(O.SELECTED_BOOKS_VOLUME_RANGE),selectedBooks:E(O.SELECTED_BOOKS),booksVolumeRange:R(n),allSongList:null!==(e=null===n||void 0===n?void 0:n.songs)&&void 0!==e?e:[],availableBooks:null!==(t=null===n||void 0===n?void 0:n.availableBooks)&&void 0!==t?t:[]}})),storeSetting:function(e){var t=e.initialData,n=e.selectedBooksVolumeRange,o=e.selectedBooks;w(O.INITIAL_DATA,t),w(O.SELECTED_BOOKS,o),w(O.SELECTED_BOOKS_VOLUME_RANGE,n)}},A=Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},B),N),L),D),T=n(46),C=n.n(T),x={fetchInitialData:function(){return new Promise((function(e,t){C.a.get("/song-search-xstate-local/zhuo-zhu-data.json").then((function(t){e(t)})).catch((function(e){console.error(e),t(e)}))}))}},K=Object(f.a)({id:"ZhuoZhuSearch",context:{ReactGA:null,keyword:"",pageNumber:1,error:null,initialData:{},allSongList:[],availableBooks:[],booksVolumeRange:{},selectedBooksVolumeRange:{},selectedBooks:[],songList:[],result:[]},type:"parallel",states:h},{actions:A,guards:y,services:x}),I=n(52),M=Object(o.createContext)(),V=function(){return Object(o.useContext)(M)},G=function(e){var t=e.children,n=Object(d.useMachine)(K,{devTools:!1,context:{ReactGA:I.a}}),o=Object(u.a)(n,2),r=o[0],i=o[1];return a.a.createElement(M.Provider,{value:function(){var e=r.context;return{state:r,send:i,context:e,actions:Object(l.a)({},{openMenu:function(){return i("OPEN_MENU")},closeMenu:function(){return i("CLOSE_MENU")},toggleMenu:function(){return i("TOGGLE_MENU")},setKeyword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i({type:"SET_KEYWORD",keyword:e,skipDebounce:t})},toggleClear:function(){return i("TOGGLE_CLEAR")},saveOptionsAndClose:function(e){var t=e.selectedBooksVolumeRange,n=e.selectedBooks;return i({type:"SAVE_AND_CLOSE",selectedBooksVolumeRange:t,selectedBooks:n})},readMore:function(){return i("READ_MORE")},retry:function(){return i("RETRY")}})}}()},t)},P=function(){return a.a.createElement("div",{className:"idle-result"},"Please enter something to search.")},U=function(){return a.a.createElement("div",{className:"no-result"},"Nothing found.")},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;Object(o.useEffect)((function(){var n=function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight-t&&e()};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}))},z=function(e){var t=Object(o.useRef)();return Object(o.useEffect)((function(){var n=null,o=0,a=t.current,r=function(t){var a=(new Date).getTime(),r=a-o;clearTimeout(n),r>0&&r<450?(e(),t.preventDefault()):n=setTimeout((function(){clearTimeout(n)}),450),o=a};return a.addEventListener("click",r),function(){a.removeEventListener("click",r)}})),t},Y=a.a.memo((function(e){var t,n=e.searchArtist,o=e.title,r=e.artist,i=e.volume,c=e.page,s=z((function(){!function(e,t){window.confirm('\u9023\u7d50\u81f3Youtube\u641c\u5c0b "'.concat(e,'" '))&&window.open("https://www.youtube.com/results?search_query=".concat(t),"_blank").focus()}(o,"".concat(o,"+").concat(r.replace(/[/+]/gi,"+")))})),l=z((function(){return n(r)})),u={artist:""===(t={title:o,volume:i,page:c,artist:r}).artist||"XXX"===t.artist?"-":t.artist.replace(/[/+]/gi,"\n"),position:""===t.volume?Object(b.toInteger)(t.page):"".concat(Object(b.toInteger)(t.volume),"/").concat(Object(b.toInteger)(t.page)),title:t.title};return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"row__title",ref:s},u.title),a.a.createElement("div",{className:"row__artist",ref:l},u.artist),a.a.createElement("div",{className:"row__position"},u.position))})),J=function(){var e=V(),t=e.context,n=t.pageNumber,r=void 0===n?1:n,i=t.result,c=void 0===i?[]:i,s=e.actions,l=s.readMore,u=s.setKeyword;W(l);var d=Object(o.useCallback)((function(e){u(e,!0)}),[]),f=c.slice(0,15*r);return a.a.createElement("div",{className:"with-result"},f.map((function(e){var t=e.title,n=e.volume,o=e.page,r=e.artist;return a.a.createElement(Y,{key:"".concat(t).concat(n).concat(o),title:t,artist:r,volume:n,page:o,searchArtist:d})})))},X=n(48),H=n.n(X),Z=a.a.memo((function(e){var t=e.isLoading;return a.a.createElement("div",{className:"fetch-more-loading"},a.a.createElement("img",{src:H.a,alt:"icon",className:"fetch-more-loading__icon"+(t?"":" hide")}))})),q=function(){var e=V().state;switch(!0){case e.matches("root.idle.searchPage.idle.idle"):return a.a.createElement(P,null);case e.matches("root.idle.searchPage.idle.withData"):return a.a.createElement(J,null);case e.matches("root.idle.searchPage.idle.noData"):return a.a.createElement(U,null);case!e.matches("root.idle"):return a.a.createElement(Z,{isLoading:!0});default:return null}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;Object(o.useEffect)((function(){var n=function(n){e&&!e.current.contains(n.target)&&t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},$=function(){var e=V(),t=e.context,n=t.keyword,a=t.result,r=e.actions,i=r.setKeyword,c=r.toggleClear,s=Object(o.useRef)(null),l=Object(o.useRef)(null);return F(l,(function(){s.current.blur()})),{inputText:n,inputRef:s,searchBoxRef:l,handleOnChange:function(e){i(e.target.value)},handleClearBtnClick:function(){c()},showSearchIcon:Object(b.isEmpty)(a)&&Object(b.isEmpty)(n),handleSearchBtnClick:function(){s.current.focus()}}},Q=n(49),ee=n.n(Q),te=n(50),ne=n.n(te),oe=function(){var e=$(),t=e.inputText,n=e.inputRef,o=e.searchBoxRef,r=e.handleOnChange,i=e.handleClearBtnClick,c=e.showSearchIcon,s=e.handleSearchBtnClick;return a.a.createElement("div",{className:"search-box",ref:o},a.a.createElement("input",{className:"search-box__input",type:"text",placeholder:"Title / Artist / Volume",value:t,ref:n,onChange:r}),c?a.a.createElement("img",{src:ee.a,alt:"icon",className:"search-box__icon search-box__icon--search",onClick:s}):a.a.createElement("img",{src:ne.a,alt:"icon",className:"search-box__icon search-box__icon--cross",onClick:i}))},ae=function(){return a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"search-page-placeholder"}),a.a.createElement(oe,null),a.a.createElement(q,null))},re=function(){return a.a.createElement(G,null,a.a.createElement(ae,null))},ie=n(85),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ie.a,{history:s},a.a.createElement(re,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/song-search-xstate-local",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/song-search-xstate-local","/service-worker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.50cd911e.chunk.js.map