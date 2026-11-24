const scope = self.registration.scope;
const cachePrefix = `colorcam:${scope}:`;
const cacheName = `${cachePrefix}v1`;
const appUrl = new URL('./', scope).href;
const indexUrl = new URL('index.html', scope).href;
const assets = new Set([
  new URL('manifest.webmanifest', scope).href,
  new URL('icons/colorcam-180.png', scope).href,
  new URL('icons/colorcam-192.png', scope).href,
  new URL('icons/colorcam-512.png', scope).href,
]);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    const files = [appUrl, ...assets].map(url => new Request(url, { cache: 'reload' }));
    await cache.addAll(files);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(cachePrefix) && key !== cacheName)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  url.search = '';

  if (event.request.mode === 'navigate' && (url.href === appUrl || url.href === indexUrl)) {
    event.respondWith((async () => {
      const cache = await caches.open(cacheName);
      try {
        const response = await fetch(event.request);
        if (response.ok && response.url.startsWith(scope)) {
          await cache.put(appUrl, response.clone());
        }
        return response;
      } catch {
        return (await cache.match(appUrl)) ?? Response.error();
      }
    })());
  } else if (assets.has(url.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(url.href)) ?? fetch(event.request);
    })());
  }
});
