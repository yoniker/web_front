'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/camera.svg": "9d3ecc3420752852ae9386fafd2e4439",
"assets/assets/gallery.svg": "305233d3e48761e0814129574addf40b",
"assets/assets/images/dislike_match_icon.png": "3922b8f1cc8f4a7325e5136afb21f531",
"assets/assets/images/draft_message_icon.png": "9284f8bc665246caf7c7999916a08db1",
"assets/assets/images/settings_icon.png": "516678c3d6d5ec927fc0ac44973e966b",
"assets/assets/images/profile_tab_icon_inactive.png": "2b177ee08e9a0ad9466442f866569a7b",
"assets/assets/images/profile_tab_icon_active.png": "a6d9e785ada6a3c7d2c4f3c5550ce8a5",
"assets/assets/images/messages_tab_icon_inactive.png": "acb12ad2d495bf5c6cd935ded25579b5",
"assets/assets/images/edit_icon01.png": "a538f00bc2cbb721089888659affce4a",
"assets/assets/images/edit_icon02.png": "b8a477a93e66287284bb90540f513c42",
"assets/assets/images/cancel_icon01.png": "69f6a72f8cd41e71c4b868f5dbac2206",
"assets/assets/images/messages_tab_icon_active.png": "1bfdd0380cb1be2ee47810fd2e7a20c4",
"assets/assets/images/like_match_icon.png": "99e83df2bddb4be941c8486151e38a75",
"assets/assets/images/profile_icon.png": "2930dcba786d4adf13f3df76ed96bb6d",
"assets/assets/images/back_arrow.png": "8ecdbcc484a381285f05af38cd45eca4",
"assets/assets/images/match_tab_icon_inactive.png": "e189aee7038a521b5d2eb164aa4574ec",
"assets/assets/images/likes_tab_icon_active.png": "20375289795e0bca8f7a067be81cb319",
"assets/assets/images/forward_arrow.png": "e858161905d84eddbf7c69a3d2c9397a",
"assets/assets/images/match_tab_icon_active.png": "600f922304caa4f1fd1723248b6d0acc",
"assets/assets/images/search_icon.png": "ff135f7809e968b06cd00f26b2de2a69",
"assets/assets/images/likes_tab_icon_inactive.png": "75d669fc8e2888590bc496ebd5126380",
"assets/assets/mock_images/brad.jpg": "95bf01e1c7e7bc0f163b730ce09be7c9",
"assets/assets/mock_images/jane.jpg": "2b7c080b3251d55ea704ecb3142e816f",
"assets/assets/mock_images/scarlet.jpg": "7a3760acc5825b3c4f6bc74d9484b298",
"assets/assets/mock_images/jennifer.jpg": "ac009c3efe0902b1ccbefb73d1ece8da",
"assets/assets/mock_images/john.jpg": "d5a7722735b48b1e19b1427b45755fb4",
"assets/assets/mock_images/glady.jpg": "1e5b81b9fa1913bf7ab2bc0f2fece89d",
"assets/assets/mock_images/will.jpg": "889483ba4a31d5b3fe5cda8f5c6022f5",
"assets/assets/beta_logo_01.png": "220bcbaba60d8079f3b6ddd143b8473c",
"assets/assets/fonts/Nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/Nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/assets/fonts/Nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/assets/fonts/Nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/assets/fonts/Nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/assets/fonts/Nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/RougeScript-Regular.ttf": "8861cdc29d259bdc9a93a83418a25439",
"assets/assets/fonts/Yantramanav/Yantramanav-Thin.ttf": "18474f8b74da5aad380b239c6ebcd342",
"assets/assets/fonts/Yantramanav/Yantramanav-Black.ttf": "db9bf429e9ff134af63444e222b2eb9c",
"assets/assets/fonts/Yantramanav/Yantramanav-Medium.ttf": "c30b000de81d69a5ddc613a375b9476c",
"assets/assets/fonts/Yantramanav/Yantramanav-Light.ttf": "e7f65fcb5ebb73ea77160cc3a4b12034",
"assets/assets/fonts/Yantramanav/Yantramanav-Regular.ttf": "fe211ddc0f1b060d7632fb83756be113",
"assets/assets/fonts/Yantramanav/Yantramanav-Bold.ttf": "ef2d31ead84495c3afecba6847adfdce",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/bigD.png": "f66235816011cd64528c1d2785784654",
"assets/assets/mobile_celebs.db": "6100ba38282ab6ee7c5304489a8f9840",
"assets/FontManifest.json": "58f65eaf2d762500e7e06a1532892b77",
"assets/AssetManifest.json": "7cc3370b45a5e618fd9db3fff935c0c9",
"assets/NOTICES": "4a5df90156d38f6436329687e539e8e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "25e26b49492089deea672175452d50df",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"index.html": "e30be9cf8f50f0f26b434481c86034bb",
"/": "e30be9cf8f50f0f26b434481c86034bb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "c6e0319cf5ca65872bcb5cd023a3426e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "d8ffd314023cb5417a6fc7eba7a0d05f",
"manifest.json": "4bda602ae159c4e9ee4c13ff9ff7cdba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
