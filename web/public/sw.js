// Clean-up service worker. This site does not use a service worker.
//
// Why this file exists: aroneenergy.com may have been served by a build
// that installed a caching service worker at /sw.js. Browsers that visited
// back then still have it, and it keeps serving its saved copy of the OLD site.
// It never updated itself because /sw.js stopped existing (the address returned
// the web page instead of a script), so visitors stayed stuck until they
// cleared their cache by hand.
//
// A browser holding the old worker re-downloads /sw.js to check for updates and
// gets this script instead. It deletes the saved copies, uninstalls itself and
// reloads open tabs onto the current site. Browsers that never had the old
// worker never load this file (nothing on the site registers it).
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
    await self.registration.unregister();
    const openTabs = await self.clients.matchAll({ type: 'window' });
    openTabs.forEach((tab) => tab.navigate(tab.url));
  })());
});
