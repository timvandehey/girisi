// @ts-nocheck
var staticCacheName = "girisi";

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(["index.html", "styles.css", "favicon.svg", "manifest.json"]);
	})
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	fetch(event.request).then(function (response) {
	// caches.match(event.request).then(function (response) {
	// return response || fetch(event.request);
	return response
	})
	.catch(function (e)
	 { 
		return caches.match(event.request);}
	)
	)
})
