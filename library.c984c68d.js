function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire5f1a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var r=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){i[e]=r},t.parcelRequire5f1a=a),a.register("kyEFX",(function(r,t){var n,i;e(r.exports,"register",(function(){return n}),(function(e){return n=e})),e(r.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)a[r[t]]=e[r[t]]},i=function(e){var r=a[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),a("kyEFX").register(JSON.parse('{"dyE3l":"library.c984c68d.js","9bKPF":"no-poster.a2151f5f.png","ggbzi":"index.f897df34.js"}'));const o={gallery_library:document.querySelector(".library"),libraryWatched:document.querySelector(".header-library__btn.watched"),libraryQueue:document.querySelector(".header-library__btn.queue"),spinner:document.querySelector(".lds-roller"),library_empty:document.querySelector(".library_empty")};var l,s=a("cSII7");function d(e){const t=e.map((e=>({...e,poster_path:e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`${r(l)}`,release_date:e.release_date.slice(0,4),vote_average:e.vote_average.toFixed(1),genre_names:e.genres.map((({name:e})=>e)).join(", "),overview:e.overview?`${e.overview}`:"These is no description for now..."})));o.gallery_library.insertAdjacentHTML("beforeend",(0,s.default)(t))}l=new URL(a("kyEFX").resolve("9bKPF"),import.meta.url).toString();var c=a("eTE7F");const u=new(0,a("hQJwd").MovieAPI);c=a("eTE7F");const y=new(0,a("hQJwd").MovieAPI);document.addEventListener("DOMContentLoaded",(()=>{o.spinner.classList.add("hidden")})),o.libraryWatched.addEventListener("click",(async function(){o.library_empty.classList.remove("library_empty","queue_empty"),o.gallery_library.innerHTML="",o.spinner.classList.remove("hidden");const e=(0,c.getWatched)();console.log(e),0===e.length&&o.library_empty.classList.add("watched_empty");const r=e.map((e=>u.getMovieById(e)));d(await Promise.all(r)),o.spinner.classList.add("hidden")})),o.libraryQueue.addEventListener("click",(async function(){o.gallery_library.innerHTML="",o.library_empty.classList.remove("library_empty","watched_empty"),o.spinner.classList.remove("hidden");const e=(0,c.getQueue)();0===e.length&&o.library_empty.classList.add("queue_empty");const r=e.map((e=>y.getMovieById(e)));d(await Promise.all(r)),o.spinner.classList.add("hidden")})),a("8y7EH");
//# sourceMappingURL=library.c984c68d.js.map
