// 홈 화면 앱 설치용. 저장(캐시)은 하지 않고 항상 최신 사이트를 불러온다
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
