(this["webpackJsonpsong-search-xstate-local"]=this["webpackJsonpsong-search-xstate-local"]||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/loading.0f51771c.svg"},33:function(e,t,n){e.exports=n.p+"static/media/search.fa72ba04.svg"},34:function(e,t,n){e.exports=n.p+"static/media/cross.4f744e82.svg"},35:function(e,t,n){e.exports=n(44)},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(29),c=n.n(o),i=(n(40),n(10)),s=n(21),u=n(7),l=n(30),d=n(23),f=n(13),g={searchPage:{on:{SET_KEYWORD:[{cond:"",actions:["setKeyword"],target:".searchBuffer.buffering",internal:!1},{cond:"",actions:["setKeyword"],target:".searchBuffer.buffering",internal:!1}],TOGGLE_CLEAN:[{cond:"withInput",actions:"cleanInput"},{actions:"cleanResult",target:"searchResult.idle"}]},initial:"idle",states:{idle:{initial:"idle",on:{HANDLE_SEARCH_RESULT:[{cond:"withError",target:"error"},{cond:"withoutData",target:"noData"},{target:"withData"}]},states:{idle:{},withData:{on:{READ_MORE:{actions:"readMore"}}},noData:{},error:{}}},buffering:{after:Object(f.a)({},1e3,"searching")},searching:{always:{target:"idle",actions:["searchResult","sandHandleSearchResult"]}}}}},h={root:{initial:"startup",states:{startup:{always:[{cond:"haveRawDataInLocalStorage",target:"idle",actions:["restoreRawData","filterData"]},{target:"fetchRawData"}]},fetchRawData:{invoke:{id:"fetch-initial-data",src:"fetchRawData",onDone:{target:"idle",actions:["storeRawData","filterData"]},onError:"error"}},idle:{type:"parallel",states:Object(i.a)(Object(i.a)({},{menu:{initial:"closed",on:{CLOSE_MENU:"closed",OPEN_MENU:"open"},states:{closed:{on:{TOGGLE_MENU:"opened"}},opened:{on:{TOGGLE_MENU:"closed"}}}}}),g)},error:{on:{RETRY:"fetchRawData"}}}}},m=function(e){return e.replace(/[\r\n\s]/g,"")},b=function(e){return/[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(e)},p=function(e){return Object(u.isString)(e)&&Object(u.isEmpty)(e)},v=function(e){return Object(u.isArray)(e)&&Object(u.isEmpty)(e)},E={shouldSkipDebounce:function(e,t){return t.skipDebounce||!1},withInput:function(e){return!p(e.input)},withResultOnly:function(e,t){return!v(e.result)&&(p(e.input)||p(t.input))},invalidParams:function(e){return p(e.input)||b(Object(u.last)(e.input.trim()))},isNoResult:function(e,t){return v(Object(u.get)(t,["data","songs","result"],[]))||!Object(u.get)(t,["data","songs","result"])}},w=n(27),O=n(19),j=n(3),R=O.actions.cancel,y={setInput:Object(j.b)({input:function(e,t){return t.input||""}}),cleanInput:Object(j.b)({input:""}),cleanResult:Object(j.b)({result:[]}),setResult:Object(j.b)({result:function(e,t){return Object(u.get)(t,["data","songs","pagination","currentPage"],1)>1?[].concat(Object(w.a)(e.result),Object(w.a)(Object(u.get)(t,["data","songs","result"],[]))):Object(u.get)(t,["data","songs","result"],[])},pagination:function(e,t){return Object(u.get)(t,["data","songs","pagination"],{})}}),setLoading:Object(j.b)({loading:!0}),setLoaded:Object(j.b)({loading:!1}),setNoError:Object(j.b)({error:null}),setError:Object(j.b)({error:function(e,t){return t.data||!0}}),setKeyword:Object(j.b)({variables:function(e,t){return{keyword:m(t.input||""),page:1}}}),setPage:Object(j.b)({variables:function(e,t){return Object(i.a)(Object(i.a)({},e.variables),{},{page:t.page||1})}})},N={sendSearchEventAfterDelay:Object(j.q)("VERIFY_PARAMS",{delay:100,id:"debounced-search"}),cancelSearch:R("debounced-search")},_=Object(i.a)(Object(i.a)({},y),N),L=Object(d.a)({id:"ZhuoZhuSearch",context:{input:"",result:[],pagination:{},loading:!1,error:null,variables:{keyword:"",page:1}},type:"parallel",states:h},{actions:_,guards:E,services:{fetchResult:function(e,t){}}}),C=Object(a.createContext)(),k=function(){return Object(a.useContext)(C)},x=function(e){var t=e.children,n=Object(l.useMachine)(L),a=Object(s.a)(n,2),o=a[0],c=a[1];return r.a.createElement(C.Provider,{value:function(){var e=o.context;return Object(i.a)({state:o,send:c,context:e,searchKeywordLoading:e.loading&&1===Object(u.get)(e,["variables","page"],1),fetchMoreLoading:e.loading&&1!==Object(u.get)(e,["variables","page"],1)},{sendChangeInput:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c({type:"CHANGE_INPUT",input:e,skipDebounce:t})},sendToggleClean:function(){return c("TOGGLE_CLEAN")},sendFetchMore:function(e){return c({type:"FETCH_MORE",page:e})},sendRetry:function(){return c({type:"RETRY",retry:!0})}})}()},t)},D=function(){return r.a.createElement("div",{className:"idle-result"},"Please enter something to search.")},S=function(){return r.a.createElement("div",{className:"no-result"},"Nothing found.")},T=function(){var e=k().sendRetry;return r.a.createElement("div",{className:"error-result"},"An error occurred, please\xa0",r.a.createElement("span",{className:"error-result__retry",onClick:e},"try again"),".")},A=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){var n=null,a=0,r=t.current,o=function(t){var r=(new Date).getTime(),o=r-a;clearTimeout(n),o>0&&o<450?(e(),t.preventDefault()):n=setTimeout((function(){clearTimeout(n)}),450),a=r};return r.addEventListener("click",o),function(){r.removeEventListener("click",o)}})),t},I=r.a.memo((function(e){var t,n=e.song,a=e.searchArtist,o=A((function(){var e=n.title,t=n.artist;!function(e,t){window.confirm('\u9023\u7d50\u81f3Youtube\u641c\u5c0b "'.concat(e,'" '))&&window.open("https://www.youtube.com/results?search_query=".concat(t),"_blank").focus()}(e,"".concat(e,"+").concat(t.replace(/[/+]/gi,"+")))})),c=A((function(){return a(n.artist)})),i={artist:""===(t=n).artist||"XXX"===t.artist?"-":t.artist.replace(/[/+]/gi,"\n"),position:""===t.volume?Number(t.page):"".concat(Number(t.volume),"/").concat(Number(t.page)),title:t.title},s=i.title,u=i.artist,l=i.position;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row__title",ref:o},s),r.a.createElement("div",{className:"row__artist",ref:c},u),r.a.createElement("div",{className:"row__position"},l))})),M=n(26),P=n.n(M),B=n(31),G=function(e){var t=Object(a.useState)(e),n=Object(s.a)(t,2),r=n[0],o=n[1],c=Object(a.useRef)(Object(u.debounce)(Object(B.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!1);case 1:case"end":return e.stop()}}),e)}))),1500));return Object(a.useEffect)((function(){e?o(!0):c.current()}),[e]),{showLoading:r,setShowLoading:o}},U=n(32),W=n.n(U),H=r.a.memo((function(e){var t=e.isLoading;return r.a.createElement("div",{className:"fetch-more-loading"},r.a.createElement("img",{src:W.a,alt:"icon",className:"fetch-more-loading__icon"+(t?"":" hide")}))})),K=r.a.memo((function(e){var t=e.isLoading;return r.a.createElement("div",{className:"loading-container"},r.a.createElement("div",{className:t?"loading-bar":""}))})),Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;Object(a.useEffect)((function(){var n=function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight-t&&e()};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}))},F=function(){var e=k(),t=e.context,n=e.searchKeywordLoading,o=e.fetchMoreLoading,c=e.sendFetchMore,i=e.sendChangeInput,s=Object(a.useCallback)((function(e){i(e,!0)}),[]);Y((function(){var e=t.pagination,n=e.currentPage;n<e.totalPages&&c(n+1)}));var u=G(n).showLoading;return r.a.createElement("div",null,r.a.createElement(K,{isLoading:u}),t.result.map((function(e){return r.a.createElement(I,{key:"".concat(e.title).concat(e.volume).concat(e.page),song:e,searchArtist:s})})),r.a.createElement(H,{isLoading:o}))},X=function(){var e=k().state.value.result;return"idle"===e?r.a.createElement(D,null):"errorResult"===e?r.a.createElement(T,null):"noResult"===e?r.a.createElement(S,null):r.a.createElement(F,null)},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;Object(a.useEffect)((function(){var n=function(n){e&&!e.current.contains(n.target)&&t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},J=function(){var e=k(),t=e.context,n=e.sendChangeInput,r=e.sendToggleClean,o=Object(a.useRef)(null),c=Object(a.useRef)(null);return q(c,(function(){o.current.blur()})),{inputText:t.input,inputRef:o,searchBoxRef:c,handleOnChange:function(e){n(e.target.value),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];window.scrollTo({top:0,behavior:e?"smooth":"auto"})}()},handleClearBtnClick:function(){r()},showSearchIcon:v(t.result)&&p(t.input),handleSearchBtnClick:function(){o.current.focus()}}},V=n(33),Z=n.n(V),$=n(34),z=n.n($),Q=function(){var e=J(),t=e.inputText,n=e.inputRef,a=e.searchBoxRef,o=e.handleOnChange,c=e.handleClearBtnClick,i=e.showSearchIcon,s=e.handleSearchBtnClick;return r.a.createElement("div",{className:"search-box",ref:a},r.a.createElement("input",{className:"search-box__input",type:"text",placeholder:"Title / Artist / Volume",value:t,ref:n,onChange:o}),i?r.a.createElement("img",{src:Z.a,alt:"icon",className:"search-box__icon search-box__icon--search",onClick:s}):r.a.createElement("img",{src:z.a,alt:"icon",className:"search-box__icon search-box__icon--cross",onClick:c}))},ee=function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"search-page-placeholder"}),r.a.createElement(Q,null),r.a.createElement(X,null))},te=function(){return r.a.createElement(x,null,r.a.createElement(ee,null))},ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/song-search-xstate-local",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/song-search-xstate-local","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(t,e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.961b6e05.chunk.js.map