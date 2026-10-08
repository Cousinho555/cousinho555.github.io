importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const VERSION = 'tol01-v8';

const STATIC_CACHE = [
  '/',
  '/index.html',
  '/logo.webp',
  '/equipo.webp',
  '/jugador1.webp',
  '/jugador2.webp',
  '/jugador3.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(STATIC_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
