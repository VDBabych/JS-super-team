!function(){function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire5f1a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var r=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){i[e]=r},t.parcelRequire5f1a=a),a.register("iE7OH",(function(r,t){var n,i;e(r.exports,"register",(function(){return n}),(function(e){return n=e})),e(r.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)a[r[t]]=e[r[t]]},i=function(e){var r=a[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),a.register("aNJCr",(function(r,t){var n;e(r.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var r=i[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=r),r}})),a("iE7OH").register(JSON.parse('{"lNHiv":"library.f9cd369b.js","eUNyv":"no-poster.a2151f5f.png","8izZZ":"index.af8ee56c.js"}'));var o,s={gallery_library:document.querySelector(".library"),libraryWatched:document.querySelector(".header-library__btn.watched"),libraryQueue:document.querySelector(".header-library__btn.queue"),spinner:document.querySelector(".lds-roller"),library_empty:document.querySelector(".library_empty")},c=a("bpxeT"),l=a("2TvXO"),u=a("dDDEV"),d=a("5SJ0F");function p(e){var t=e.map((function(e){return r(u)({},e,{poster_path:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(r(o)),release_date:e.release_date.slice(0,4),vote_average:e.vote_average.toFixed(1),genre_names:e.genres.map((function(e){return e.name})).join(", "),overview:e.overview?"".concat(e.overview):"These is no description for now..."})}));s.gallery_library.insertAdjacentHTML("beforeend",(0,d.default)(t))}o=a("aNJCr").getBundleURL("lNHiv")+a("iE7OH").resolve("eUNyv");var f=a("3jHpi"),y=new(0,a("1Xlm1").MovieAPI);function v(){return(v=r(c)(r(l).mark((function e(){var t,n;return r(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.library_empty.classList.remove("library_empty","queue_empty"),s.gallery_library.innerHTML="",s.spinner.classList.remove("hidden"),t=(0,f.getWatched)(),console.log(t),0===t.length&&s.library_empty.classList.add("watched_empty"),n=t.map((function(e){return y.getMovieById(e)})),e.next=9,Promise.all(n);case 9:p(e.sent),s.spinner.classList.add("hidden");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c=a("bpxeT"),l=a("2TvXO"),f=a("3jHpi");var m=new(0,a("1Xlm1").MovieAPI);function b(){return(b=r(c)(r(l).mark((function e(){var t,n;return r(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.gallery_library.innerHTML="",s.library_empty.classList.remove("library_empty","watched_empty"),s.spinner.classList.remove("hidden"),0===(t=(0,f.getQueue)()).length&&s.library_empty.classList.add("queue_empty"),n=t.map((function(e){return m.getMovieById(e)})),e.next=8,Promise.all(n);case 8:p(e.sent),s.spinner.classList.add("hidden");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){s.spinner.classList.add("hidden")})),s.libraryWatched.addEventListener("click",(function(){return v.apply(this,arguments)})),s.libraryQueue.addEventListener("click",(function(){return b.apply(this,arguments)})),a("7Uufj")}();
//# sourceMappingURL=library.f9cd369b.js.map
