// 홈 화면 앱 설치용. 페이지는 열 때마다 서버에 새 버전이 있는지 확인한다(저장해 둔 예전 버전을 쓰지 않음)
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request, { cache: "no-cache" }).catch(function () { return fetch(e.request); }));
});
