"use strict";var precacheConfig=[["/crios-landing/index.html","a8924412b8916b29857c18d0363ccfdf"],["/crios-landing/static/css/main.ea35eea4.css","906967f500b7c307eaebb14592fd98e1"],["/crios-landing/static/js/main.48c7dece.js","9c9f166796f8bf66ec308fb676580cac"],["/crios-landing/static/media/Header.ab821b5e.jpg","ab821b5e0b62c331646817958b5d7d29"],["/crios-landing/static/media/app-screen-1.50eb2bea.png","50eb2bea6daf87c56a11cd63078a3483"],["/crios-landing/static/media/app-screen-2.871f21fc.png","871f21fc1826b1d91a02ea566be5b8a2"],["/crios-landing/static/media/box1.6c84eaef.jpg","6c84eaefa348a42cc485c95d1d4cf34e"],["/crios-landing/static/media/box2.e4c93836.jpg","e4c93836ab7173a883e0e9d3c4722bd6"],["/crios-landing/static/media/footer.984c27ee.jpg","984c27ee03cd3190513762022c56eeb5"],["/crios-landing/static/media/response.bf1bdfad.png","bf1bdfadd9a7f354ec2463948467ffdf"],["/crios-landing/static/media/snowflake.4fcd3b92.png","4fcd3b927a009639f90762f90dc3cbbd"],["/crios-landing/static/media/snowflake2.8a08b510.png","8a08b510b7f32f6ed8ae8112ce22ca20"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var r="/crios-landing/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});