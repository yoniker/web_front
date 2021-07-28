'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/camera.svg": "9d3ecc3420752852ae9386fafd2e4439",
"assets/assets/gallery.svg": "305233d3e48761e0814129574addf40b",
"assets/assets/images/edit_icon_filled_01.png": "65a455aa17acc55d2c5b06bbab7abeca",
"assets/assets/images/449px-Lakeyboy_Silhouette.png": "f79180d483cb335484ca55f24fa12a46",
"assets/assets/images/dislike_match_icon.png": "3922b8f1cc8f4a7325e5136afb21f531",
"assets/assets/images/star_icon.png": "6da3cab85acebac203fb40174c0f83b0",
"assets/assets/images/draft_message_icon.png": "9284f8bc665246caf7c7999916a08db1",
"assets/assets/images/heart_icon_filled.png": "765e0e001bed0beb744c4607876bbf22",
"assets/assets/images/settings_icon.png": "516678c3d6d5ec927fc0ac44973e966b",
"assets/assets/images/progeney_tree_divider.png": "b936b6d2eb9f08f11b196df416fe2e75",
"assets/assets/images/profile_tab_icon_inactive.png": "2b177ee08e9a0ad9466442f866569a7b",
"assets/assets/images/babies.png": "cc2231737659270a88e1b3db8e256685",
"assets/assets/images/edit_icon_01.png": "a538f00bc2cbb721089888659affce4a",
"assets/assets/images/profile_tab_icon_active.png": "a6d9e785ada6a3c7d2c4f3c5550ce8a5",
"assets/assets/images/messages_tab_icon_inactive.png": "acb12ad2d495bf5c6cd935ded25579b5",
"assets/assets/images/edit_icon_03.png": "696702da850d711a39654dc8ac34a443",
"assets/assets/images/therm_body.png": "5f753a2bbcb142d6e14f0d6e322038b8",
"assets/assets/images/edit_icon01.png": "a538f00bc2cbb721089888659affce4a",
"assets/assets/images/try_me_label.png": "cb2fe6814e446c72b81fb45412d079f1",
"assets/assets/images/default_profile_icon_02.png": "c368c4485ba153fbf5641f227c9436df",
"assets/assets/images/default_profile_icon.png": "caea815315a1346fca2778df1e822d8b",
"assets/assets/images/heart_united_01.png": "8fa17eb71cb90b5ae45476a8209f7710",
"assets/assets/images/edit_icon02.png": "b8a477a93e66287284bb90540f513c42",
"assets/assets/images/cancel_icon_01.png": "69f6a72f8cd41e71c4b868f5dbac2206",
"assets/assets/images/profile_icon_filled.png": "ef47ad4bb1916d6964b4f36234193a37",
"assets/assets/images/message_icon_01.png": "15ed7f61e43fbf7118dff0a8bd295ead",
"assets/assets/images/cancel_icon01.png": "69f6a72f8cd41e71c4b868f5dbac2206",
"assets/assets/images/messages_tab_icon_active.png": "1bfdd0380cb1be2ee47810fd2e7a20c4",
"assets/assets/images/like_match_icon.png": "99e83df2bddb4be941c8486151e38a75",
"assets/assets/images/settings_icon_filled.png": "437edbd543c98f47f2e82bf62e824eab",
"assets/assets/images/edit_icon_02.png": "b8a477a93e66287284bb90540f513c42",
"assets/assets/images/notification_icon_filled.png": "2776373e3e042fbc867adc8aa0061949",
"assets/assets/images/therm_body_old.png": "70839d548b2d44a7911dce67c0df3cd2",
"assets/assets/images/facebook_icon.png": "eff5061b3ff13adfdadd71257c4116e1",
"assets/assets/images/profile_icon.png": "2930dcba786d4adf13f3df76ed96bb6d",
"assets/assets/images/back_arrow.png": "8ecdbcc484a381285f05af38cd45eca4",
"assets/assets/images/match_tab_icon_inactive.png": "e189aee7038a521b5d2eb164aa4574ec",
"assets/assets/images/like_icon_filled.png": "f92b65dbbec94e5b15db734e66b35b10",
"assets/assets/images/ai_label.png": "a97780016cb1afc5500ecaccb74f30d3",
"assets/assets/images/likes_tab_icon_active.png": "20375289795e0bca8f7a067be81cb319",
"assets/assets/images/location_icon_filled.png": "23bd8dce717fedcd011f08ec14a4a79b",
"assets/assets/images/default_profile_icon_03.png": "bc6d447b721943f5b5356429c53d8661",
"assets/assets/images/like_scale_01.png": "8bee2759ee006e0824d63e52e76ab772",
"assets/assets/images/forward_arrow.png": "e858161905d84eddbf7c69a3d2c9397a",
"assets/assets/images/match_tab_icon_active.png": "600f922304caa4f1fd1723248b6d0acc",
"assets/assets/images/search_icon.png": "ff135f7809e968b06cd00f26b2de2a69",
"assets/assets/images/likes_tab_icon_inactive.png": "75d669fc8e2888590bc496ebd5126380",
"assets/assets/images/therm_border.png": "6e56663460f9373496daf6c8e77137b8",
"assets/assets/celebs.json": "305bf3a845a9f78418073f6aaea5d273",
"assets/assets/mock_images/brad.jpg": "95bf01e1c7e7bc0f163b730ce09be7c9",
"assets/assets/mock_images/jane.jpg": "2b7c080b3251d55ea704ecb3142e816f",
"assets/assets/mock_images/scarlet.jpg": "7a3760acc5825b3c4f6bc74d9484b298",
"assets/assets/mock_images/jennifer.jpg": "ac009c3efe0902b1ccbefb73d1ece8da",
"assets/assets/mock_images/john.jpg": "d5a7722735b48b1e19b1427b45755fb4",
"assets/assets/mock_images/glady.jpg": "1e5b81b9fa1913bf7ab2bc0f2fece89d",
"assets/assets/mock_images/will.jpg": "889483ba4a31d5b3fe5cda8f5c6022f5",
"assets/assets/celebs_hive.hive": "e18aa3b266f1fdbff37ad90b2cbb1010",
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
"assets/FontManifest.json": "ecb303210b9181a91de113512ee3c6e6",
"assets/AssetManifest.json": "a5c3ecacef263ea5c5b4a459e5ea3acd",
"assets/NOTICES": "0f3c3aa255552b97263da81c74a7ce2b",
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
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"styles.css": "ea230765c5c7da8c2f6ee28be40ecc7b",
"index.html": "b79aa3189c2506c7e93a8aa4d2fec066",
"/": "b79aa3189c2506c7e93a8aa4d2fec066",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "eb17973ba7a6a930c9d334c24727e7ec",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "89a5e033d47ca6bd10b6ddee60f6993b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/master": "c67cb1f5a082975c10ab9d83d081cec7",
".git/logs/refs/remotes/origin/HEAD": "c67cb1f5a082975c10ab9d83d081cec7",
".git/logs/HEAD": "c67cb1f5a082975c10ab9d83d081cec7",
".git/refs/heads/master": "1293c6025d76941085135b5478936d19",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/packed-refs": "cae5e411d82f5d420d48c03233f8e06c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "5d47872780e01054930d04a6ab44395c",
".git/index": "93781b1c989ab55e3cde5b30bce6aa37",
".git/objects/pack/pack-0cdf582f684ee5d453afa495a24521f1da76270a.pack": "be2530b8538b4d1a95b8c5fccd63f246",
".git/objects/pack/pack-0cdf582f684ee5d453afa495a24521f1da76270a.idx": "fb763139f5f213b108a2c33d9aac9744",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
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
