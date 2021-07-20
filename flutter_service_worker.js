'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/camera.svg": "9d3ecc3420752852ae9386fafd2e4439",
"assets/assets/gallery.svg": "305233d3e48761e0814129574addf40b",
"assets/assets/images/449px-Lakeyboy_Silhouette.png": "f79180d483cb335484ca55f24fa12a46",
"assets/assets/images/dislike_match_icon.png": "3922b8f1cc8f4a7325e5136afb21f531",
"assets/assets/images/star_icon.png": "6da3cab85acebac203fb40174c0f83b0",
"assets/assets/images/draft_message_icon.png": "9284f8bc665246caf7c7999916a08db1",
"assets/assets/images/heart_icon_filled.png": "765e0e001bed0beb744c4607876bbf22",
"assets/assets/images/settings_icon.png": "516678c3d6d5ec927fc0ac44973e966b",
"assets/assets/images/progeney_tree_divider.png": "b936b6d2eb9f08f11b196df416fe2e75",
"assets/assets/images/profile_tab_icon_inactive.png": "2b177ee08e9a0ad9466442f866569a7b",
"assets/assets/images/edit_icon_01.png": "a538f00bc2cbb721089888659affce4a",
"assets/assets/images/profile_tab_icon_active.png": "a6d9e785ada6a3c7d2c4f3c5550ce8a5",
"assets/assets/images/messages_tab_icon_inactive.png": "acb12ad2d495bf5c6cd935ded25579b5",
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
"assets/AssetManifest.json": "71b5b2392b9fb98be01653b4b8b0020d",
"assets/NOTICES": "04170dfaa1891afb5bb765e30c88fff5",
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
"index.html": "82215486971a0e3e2119a7aa689ac9c6",
"/": "82215486971a0e3e2119a7aa689ac9c6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "75dd4930d1712b8858fae590b2a18869",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "d8ffd314023cb5417a6fc7eba7a0d05f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/master": "35f9664231f9417b727cab842802a392",
".git/logs/refs/remotes/origin/master": "dd474ed01c44f0ad80187b39c5cfa522",
".git/logs/refs/remotes/origin/HEAD": "ff8629bae4b92c7de450f8937757252c",
".git/logs/HEAD": "35f9664231f9417b727cab842802a392",
".git/refs/heads/master": "149e5ff873c19f8a9d41989fcdc834d5",
".git/refs/remotes/origin/master": "149e5ff873c19f8a9d41989fcdc834d5",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/packed-refs": "0ca3e58812d1058d739785540ab7ab62",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "5d47872780e01054930d04a6ab44395c",
".git/index": "5271d42c09199dcc7ea214f404deb205",
".git/objects/06/08092c551f1f06b1f9dfb02dc85f86e1330a91": "80d0eed15ad627d6ed25864030350d41",
".git/objects/f2/0bdcae8ea41606b148c33fd1116fc6b66ade50": "43c4bb1e0c0d8c40b5be4889b085ad83",
".git/objects/00/cb8d3455cce524e64df13e51a25ceb9cb59525": "d23c33fa23c30ca24abeb63ce44c8fd2",
".git/objects/51/2db45a17fc406a84b84aed5aca165cef5fc12c": "1d18bf95dc1c64a730013404a7723a94",
".git/objects/37/a1cfab7ded7d640fe929f5d277e16f56778b04": "355d0c3450061a4f3253c291f6b74835",
".git/objects/92/df33876e6337533d3c8ab53130c11228f1b543": "340afe68b6f80f89538dbfc99ebb961c",
".git/objects/23/93dfdae213f20fd2fce4053f8d1eb5de411000": "b8467541941039ef4a05fffe5dc99c51",
".git/objects/8e/79b44ad82b3e5701347392316388fd43f2c158": "b411a4a68a3a053909fad29ae9de7c35",
".git/objects/cd/440839ec1bcd916bf8553898b01dd478655c00": "6aef294a348bd058bee312b9022bc2b0",
".git/objects/b8/13a7a6723334bfc7b7ccab33177f4cb4738ad8": "3b75abc7031e7af7c9625e2a923f5ecb",
".git/objects/5c/a0fd45ec5b21c154e01ab7db842cefec3a83ba": "f66461480f11fac8d8cf9eb7860e3f5f",
".git/objects/f6/26dc8cd8bb6a05413075c4baf4176a90a070d2": "b40be500137c8bf6668f60fd1644698b",
".git/objects/c8/67a227ae59862945e66add518a2fa24d6301fb": "3bca7bd769afcc5498e2d73b67d12924",
".git/objects/d4/a1eada555bfa6b1bb6b75fe544f5dede1258bd": "7e131e0ce34d116bb206008a6763e896",
".git/objects/dc/daddc9cf79bbd1eaa53c4c3ddf03a7deb71e6e": "3cea8d63f54ade6036b36660c864feee",
".git/objects/ce/2e2972aa04b2479b4e47fabab2c16142dd234e": "00238c8ba7e968af597c7ae2ab12fe18",
".git/objects/pack/pack-4cf03f192034ad36101edb83ce7cda9cfcfd6677.pack": "2d9e1d1ab72f667d0a5f0b00a4b1b864",
".git/objects/pack/pack-4cf03f192034ad36101edb83ce7cda9cfcfd6677.idx": "234f5460082ccf9db05cc25f45c6e5dd",
".git/objects/ae/040f054c71f893dc86525fdb04a5e392e95f9f": "3098c4ed7c525a7c89d737ca3eefa1e5",
".git/objects/2c/ba58e060ed7e64543f8f99f15d3dc0eb3eb85d": "f26022a66e8c9c212780f26329e67237",
".git/objects/05/eb5f7514d4383d60214e90eb0fa8a8e1a924d6": "bc107323945b88789225e82497fc2efe",
".git/objects/df/5f22ad58612b4881fef824816fc929fee02922": "3c8da0c9ae4d2d67a63156cc370967b7",
".git/objects/24/0c016b21ba15514e9fc2c365911d51ef81a472": "f3b8b29e3dc0e21188151ef52d485dd6",
".git/objects/6f/ad1c6332f2576c114e392512201f723c40ce3d": "0df456040cddc21e085dce0eb0754507",
".git/objects/a7/c11b4124808fba0fd41b5a96da8fb58e38f3fe": "2ace9d069e93d37ead01beb191bfd901",
".git/objects/9c/1c70067ea1f794d1190ea2339ca689a2e22468": "31cf12ac14d87e3ea2f2ed4f3821e29a",
".git/objects/fa/c139f5df2ec73ab70f8a0385cf23bd87d77d51": "96dc251d537150e59c57a8c6c5faac02",
".git/objects/be/11658f2cfde39a71ea8e9acd72ec835d08fd9e": "91a88b7471529e21992540f5172b9adc",
".git/objects/7f/e4f4d0b7edb0ec2ecd1a2c6ee32a4e29e497a0": "0ad6c2061c13539f6feca396587dd271",
".git/objects/ab/5e94acaa24298a921247a8317d6297e6bb92bf": "ad2fc46129dfcd9dbd82c4ae3b811afc",
".git/objects/d1/a5b27907b956139c5ba3ec4a2c054cc974611b": "b6d9fda0fcc42adb50275319d704bf73",
".git/objects/1d/2efe4d5f54bd7ce078c16b0270aea98d420a42": "f9a41d53927bd634d7b200d1be9b1e75",
".git/objects/e5/370e5e789e880f2c94981f592ff81dd5ff47ba": "e7f4354b157068052c5d77904d7965f3",
".git/objects/89/3209207bc991aa1318a4c8d9bc7edc55dc6112": "b2ebde9b0b5afb06bd2e1d430f6cbc62",
".git/objects/1f/469e6ae6fadf283fc3db0e09e9e28cc47c0dd4": "0d3aa8b881e1b56c191052be0210cb53",
".git/objects/c6/02217c539b22bffce5f0e862ef3c8858d4e074": "cc8cef5933a24559fcbae1b4f51bab33",
".git/objects/c6/b873a5b48bb48c5c87ac73aeca6e9ab36971ab": "91cf83364ac1d19cb1824da070255924",
".git/objects/c0/284102edd0f2f35b709f281a1a61e7ebedec10": "43597110da9cf8b8ba11efeaaab3787e",
".git/objects/f3/6e978ed84d94881560618d1a11b0e5a3645777": "dabb11c4e0b500df7beb2924d6043978",
".git/objects/7a/cb9457331c8c0c8a174be41c5c7a77a52e98ca": "4ca51be30dcae0b1254f2727b3a988b7",
".git/COMMIT_EDITMSG": "507f8b6340b8f15ca36af9246e37e9f4",
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
