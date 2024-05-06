var staticCacheName = "girisi";

self.addEventListener("install", function (e) {
// @ts-ignore
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(["/"]);
	})
);
});

self.addEventListener("fetch", function (event) {
// @ts-ignore
console.log(event.request.url);

// @ts-ignore
event.respondWith(
	// @ts-ignore
	caches.match(event.request).then(function (response) {
	// @ts-ignore
	return response || fetch(event.request);
	})
);
});
