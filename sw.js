self.addEventListener("fetch", e => e.respondWith(
    caches.match(e.request).then(cachedResponse => {
        const networkFetch = fetch(e.request).then(response => { caches.open("static").then(cache => cache.put(e.request, response.clone()).then(t => console.log("@ @ @ stored done"))) }).catch(err => console.log(err))
        return cachedResponse || networkFetch || fetch(e.request);
    })));