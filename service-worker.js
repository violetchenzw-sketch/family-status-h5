const CACHE_NAME = "manyoujian-v8-city-themes";
const APP_FILES = ["./", "./index.html", "./styles.css", "./app.js", "./icon.svg", "./assets/couple-sprites.svg", "./assets/couple-sprites-beijing.svg", "./assets/couple-sprites-hangzhou.svg", "./assets/couple-sprites-nanjing.svg", "./assets/scene-wuhan.svg", "./assets/scene-beijing.svg", "./assets/scene-hangzhou.svg", "./assets/scene-nanjing.svg", "./manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
