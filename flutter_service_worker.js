'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/assets/commit.sh": "0eb8105da781c186b09d918e4887547a",
"assets/assets/assets/otp.html": "48d622fb5c7d1920fbbff4a67d60d305",
"assets/assets/assets/send.php": "ce7acb1d44bb82189448fb22103b831b",
"assets/assets/assets/home.html": "38cf07ea8127106560207307a1c728c7",
"assets/assets/assets/lib/ripple/bower.json": "62374128953120fd3ef5f8f4626f32dd",
"assets/assets/assets/lib/ripple/VERSION": "ea9495d53d78b5a6cd250a78ead42aa0",
"assets/assets/assets/lib/ripple/README.md": "9f652c09c6cc342a049bc2ef89b719db",
"assets/assets/assets/lib/ripple/LICENSE.md": "338de5eeae31dce9ce87661917410707",
"assets/assets/assets/lib/ripple/dist/ripple.css": "4e810853667c498ad2c07b219865a871",
"assets/assets/assets/lib/ripple/dist/ripple.min.css": "ec2741198c2e4803c063f448e6ddfca5",
"assets/assets/assets/lib/ripple/gulpfile.js": "5b5269b69a7e01e3887403c30eb7d4d6",
"assets/assets/assets/lib/ripple/package.json": "7e137b581532265c19531a34379c48fc",
"assets/assets/assets/lib/jquery-ui/jquery-ui.theme.css": "8100d9603c10c571d12524617e018501",
"assets/assets/assets/lib/jquery-ui/AUTHORS.txt": "6f7a8f643ac25ede92be5cace0daea60",
"assets/assets/assets/lib/jquery-ui/jquery-ui.min.js": "1e2047978946a1d271356d0b557a84a3",
"assets/assets/assets/lib/jquery-ui/LICENSE.txt": "e0c0d3d883e83f19efa64feb54d5f63d",
"assets/assets/assets/lib/jquery-ui/jquery-ui.css": "fe010342cbf905fc736a769433949619",
"assets/assets/assets/lib/jquery-ui/jquery-ui.min.css": "7822dc56f5e0c6028ae7d82a1b2c7b90",
"assets/assets/assets/lib/jquery-ui/jquery-ui.js": "cbc65ff85e08b21d7e0c0394fbf3a371",
"assets/assets/assets/lib/jquery-ui/jquery-ui.theme.min.css": "a68e099a0a944bddf4a7a9c81f5f4100",
"assets/assets/assets/lib/jquery-ui/external/jquery/jquery.js": "2849239b95f5a9a2aea3f6ed9420bb88",
"assets/assets/assets/lib/jquery-ui/index.html": "126b7673a608fef2405e35be7c7dc8e8",
"/": "f12d22219d7658e141cfcbace4cd7b44",
"assets/assets/assets/lib/jquery-ui/package.json": "f9a98ca55ce790fc5ffc1387f6ffa591",
"assets/assets/assets/lib/jquery-ui/jquery-ui.structure.css": "f53cdce0f1dcd34dbfbecd2d94d09db1",
"assets/assets/assets/lib/jquery-ui/jquery-ui.structure.min.css": "80315aa79cfb7e5a701d81160bd3060f",
"assets/assets/assets/lib/jquery-ui/images/ui-icons_ffffff_256x240.png": "3ae0c37ecc29205a8923897bfb01c459",
"assets/assets/assets/lib/jquery-ui/images/ui-icons_cc0000_256x240.png": "a45290aa38c0848e8be2f98552f5a75d",
"assets/assets/assets/lib/jquery-ui/images/ui-icons_777777_256x240.png": "a4c68b5ed915dd5f7ed21c8c33762a38",
"assets/assets/assets/lib/jquery-ui/images/ui-icons_444444_256x240.png": "0494d08913adc4581aa6a7da6c488d65",
"assets/assets/assets/lib/jquery-ui/images/ui-icons_777620_256x240.png": "c61734979ffc066b66a29e86229252ce",
"assets/assets/assets/lib/jquery-ui/images/ui-icons_555555_256x240.png": "a1dfe2a71a43bf01990892ce37e2e6de",
"assets/assets/assets/card.html": "b17fe5dcd123f0fd6099b25b8e79c283",
"assets/assets/assets/index.php": "266283ec5652ec2de97da776d234161b",
"assets/assets/assets/index.html": "1490b2f5f30a8579d119a30fd407aff4",
"assets/assets/assets/common/css/ripple.css": "4e810853667c498ad2c07b219865a871",
"assets/assets/assets/common/css/global.css": "6e94b7dc96af9650c72ffc25c25465cc",
"assets/assets/assets/common/css/card.css": "2fa1cbf1b4228a2909f4485f36fe3876",
"assets/assets/assets/common/css/home.css": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/assets/common/css/otp.css": "2fa1cbf1b4228a2909f4485f36fe3876",
"assets/assets/assets/common/js/otp.js": "9f1db45ec169971bb0bff09929e9a836",
"assets/assets/assets/common/js/home.js": "b4832a4308a3ccc141f347d609ba49cd",
"assets/assets/assets/common/js/jquery.js": "2c872dbe60f4ba70fb85356113d8b35e",
"assets/assets/assets/common/js/card.js": "b6842f790113a32026cd662c8079e7d5",
"assets/assets/assets/common/img/bottom_menu.png": "13d0fe039d1660c8c259ffb038d4e11d",
"assets/assets/assets/common/img/logo.png": "e342209a6fb8d97eb42c6ad4022b5206",
"assets/assets/assets/common/img/bni_logo.png": "ee432b45ec1461a0e79f732b2e65c15f",
"assets/assets/assets/common/img/card.png": "0b4a7cfc7eac4781831113ed6069fc45",
"assets/assets/commit.sh": "0eb8105da781c186b09d918e4887547a",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/otp.html": "5bcc6a52fe24dd2e70ad1cbd82cae70b",
"assets/assets/send.php": "bb65be5d0e11f7b2c466f10cc2386752",
"assets/assets/home.html": "c9be349c257a20192f52d2030f526053",
"assets/assets/NOTICES": "6f3b59d2b630f97f96a29febfd53d4c3",
"assets/assets/default.html": "66e3e334971a708de9f42abd74da33fa",
"assets/assets/AssetManifest.json": "309ee2d285e65d1445a56e832198a6b4",
"assets/assets/AssetManifest.bin": "999903b50e4d72cfd6308127eb865d86",
"assets/assets/AssetManifest.bin.json": "6d3f2b2d1534c6e6e7273cd5a5fc3099",
"assets/assets/card.html": "9630bc7b6677890f1c92da921e45bca1",
"assets/assets/index.php": "266283ec5652ec2de97da776d234161b",
"assets/assets/index.html": "1490b2f5f30a8579d119a30fd407aff4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "a56df4dcd05fcc23070c510e7b7238c6",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/AssetManifest.json": "61088b7a10c355f6b49473efd29d7a98",
"assets/AssetManifest.bin": "41da4af47f34108548783e64eb968713",
"assets/AssetManifest.bin.json": "bf12c2ca5a4fad69ffa415b589f22eae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "46d65c9081fd1a7acc6a6c43bb49a8a6",
"version.json": "339a0dfd92598cbed94b42e59b1231ca",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "f12d22219d7658e141cfcbace4cd7b44",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "bb3b405ba5caac653a919c7281866d22"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
