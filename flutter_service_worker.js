/* Retire the previous Flutter portfolio's offline cache. No new offline cache is installed. */
'use strict';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await Promise.all(['flutter-app-manifest', 'flutter-temp-cache', 'flutter-app-cache'].map(name => caches.delete(name)));
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window' });
    await Promise.all(windows.map(client => {
      const url = new URL(client.url);
      if (url.origin === self.location.origin && (url.pathname === '/' || url.pathname === '/index.html')) {
        return client.navigate(client.url);
      }
      return Promise.resolve();
    }));
  })());
});
