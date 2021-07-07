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
"index.html": "0e308f8c7eccc4b8013ad65cf54d71f9",
"/": "0e308f8c7eccc4b8013ad65cf54d71f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "c6e0319cf5ca65872bcb5cd023a3426e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "d8ffd314023cb5417a6fc7eba7a0d05f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/master": "eda48c2ef9441081dfdb1193ed20b3b3",
".git/logs/refs/remotes/origin/master": "2cd99c8000204aed2fee3e177d570bc0",
".git/logs/HEAD": "eda48c2ef9441081dfdb1193ed20b3b3",
".git/refs/heads/master": "ed452c38f9216f694ca7bb73493fa85f",
".git/refs/remotes/origin/master": "ed452c38f9216f694ca7bb73493fa85f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "5d47872780e01054930d04a6ab44395c",
".git/index": "007acfcf06cfb7f038c4523ab257edf5",
".git/objects/b4/4ef01452895a66e9939cc6a3702ddbccb31dbb": "7cc41a19106c0f1fd087d7c2cd7bcbe2",
".git/objects/b4/fd9a473a18d0e155f8c73c2ff5c3cbeaaa1760": "8b70feef9edbc0cafe8391c3dd114c8b",
".git/objects/4c/39c0ae412800397f3637d2e4b1c623aab438c2": "371a2a27718bf0e8882a943ba6e39311",
".git/objects/ad/56724f956a4e9c6c19657f5d9090f27277136e": "651041479b22adda12c827e9c44953ed",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/0a/ade0a65d68ee20e01a34f2b3465b0bc3143ea4": "c82e4de70d8a27f066163de5877f78f6",
".git/objects/0a/e558603d07ed6bd515b09b76c4c3f1968b052f": "31fbcb568633b8c155220dfc93393d44",
".git/objects/51/f1f11c4a37cd7d6b0d55138809a0719a837f55": "6b7b65bd8764baadc056a6bb59321334",
".git/objects/97/7794a1002eb5ac95369bb730ac824a82c1c170": "4f9543af10a53bcaf24163ff3ff8f0bc",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/b0/831e5fd39757180c23ca0c01ac89d0054990c4": "74787df24896f0820da0f34cf2bd79e8",
".git/objects/3a/30359dc759aac83f1750fd9804323930c47157": "7a18082afe2decf75321bdedd7c0af6a",
".git/objects/1e/df2005539b9972cd5aa75e5ff1a4d5d358a7dc": "4541223f631c4cec877d15574fe0e553",
".git/objects/8e/a647a7ce87bc85f81b87e10e8cb574f01a7360": "18dc0a1f10aba2d1b53ec29461331cf0",
".git/objects/19/629f2128260ec9e679f746a20c5e4a5ff47533": "f938deb661ae6b86734a98264a98aca2",
".git/objects/03/24f501105b45aa73f982a1bc915f3f2388ae68": "5d9710755e5651c35f2917754caff9d1",
".git/objects/9e/5e2bcb5529a157626f83a9222be3b8259c364c": "d26dae77ecd98f552612a386a5bb4a67",
".git/objects/98/75aa26af82150243dcd14de2a2b0d94e64f268": "c0870e0625d30d15170c10b669164865",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/f5/0452d9c4dbc3895d08a4b4fa34ab2f402b4495": "8cebd3b6f0210d2ef1a038c36461af12",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/35/d1f11d6f598b00994bebfbf82db17e286afbbc": "66a68c672189c2d0da5f68399d319f61",
".git/objects/76/fa99d790305669b93f671cc03f361e6ac1b32d": "ff8858237755620ca5c6ae24d1d694f5",
".git/objects/76/70a8bfd835578c8557b44510c14ed7e4e66871": "7d5bff6866fc5a8be0b31c07154ed66b",
".git/objects/18/b363f5f8cc27efb9838528d648ad072b6f4b90": "123587fcbb06041ef1988a177781eaf5",
".git/objects/d4/988c3fc88f2f52cbf4dd869b205dda56b61cdc": "af84603f75d9d435be4008396886ddd3",
".git/objects/d4/17117ab4a557332f6975d04ff7f175864e27ba": "ba2362c34b900fe49afcb994a8deb2ae",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/33d8cd552b43c4cf8c0a8737a1d2e2b07fd808": "5b57ba628d2020a421d44cb871ae32d4",
".git/objects/85/9295789ece9b1806953b8c68c98e43ad92d57c": "82334fa6f87f14fdc4a7032411e674a8",
".git/objects/85/de1605fa253a00f25b1e9193521cde2c2ea8f3": "e2cd84658f0922b042fef693aab132c3",
".git/objects/84/bf15309723969ca2491cef0088b18724e5c0ad": "5b86f884105ca1b7cc4ef9fe9c53a4c3",
".git/objects/8f/5e1f62303b044e0c1fe799395e4111c5adf5c9": "3792ef732dc5079fdc54c13616836369",
".git/objects/d8/607c40c53076b13cb2ceebfed46c75a0875353": "fbfa60af09221bf819049c3a0118972a",
".git/objects/25/1c471196503a74974f033fb5d90ff8b972343e": "15a7e1952043ba77c77fefe8084cabd6",
".git/objects/9f/19076ae7adf44fbaecb12bd58dc0580c52dee9": "2ea0dace3430c4e9a16bfe2295f2eec6",
".git/objects/b1/74c95e7d0f5836f58cf8d1ead0752f82cd437d": "c5a37259aa38aeb42438bf3a69fd790b",
".git/objects/34/a7a3a7cbe1d288494ec68566b33a5888449eb5": "d2989bb376381cb75473b86ab1bdb8f1",
".git/objects/b3/fa2f816f7c06e85d7b662a212371ee32ad4667": "7bf77aa5ac33dd4dc6086f44847fa9a7",
".git/objects/b9/7e529ede8d91ed6949886e2bdbc37d2a67818a": "4c5acd71004fcc86ee654a107bc6d046",
".git/objects/df/d2b5ecd8df817e42ceb210a9c9ea55a75816e3": "98705548d1ee4e2d64ff1f9473142218",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/6e56ee9a05db2011d93f5bfb357c3fc5b281de": "b8c9db02b132165719243330fffb7616",
".git/objects/50/bd28f75fcb7c0eaa297f3f48e0db2810d16bec": "8f104842ec94cfd01feb46f0792d93c4",
".git/objects/21/5f5d1acf841a5a1df212f3335346b76a1cce51": "df923255f37b258117890dae8729afb9",
".git/objects/91/a88ea59c92fe69a3ea00d3e09a4a34f53cae3b": "430a94b06b25baac579dc281da7bd264",
".git/objects/1a/7f3b0bba45b7470a4240c3ec67595eeeb02192": "ac15319d47a37f9c7a950395d0777c21",
".git/objects/e4/fac8cf86552ba3cc7cb414bb190a6ecce25cb1": "aa06331647b3f2ff7425b9d70d7aa4e8",
".git/objects/e4/fe5d0b0fdbaf0ba9d2f3bf1cc0ebeefef2dd59": "8125381578663e10ee7e2d98f18b2697",
".git/objects/e4/7521fcdd11d78fb4b4bdaa219213f566a60fae": "c4de03c03f2e458cb17434657ad60b53",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/e7/6c521c26a42b5b6c8797b9ae64a7eb923b22fe": "2a124797430be56b673c16d0d47ab80a",
".git/objects/75/b9bee442beb25bee62efe99126cadc8b639171": "266fc8d79522e6d1d6006e1840cbc91e",
".git/objects/3b/d61fb784e346ed1695add87405cf63e51252c1": "058ea99e7af2a638e622fcb7a9873131",
".git/objects/af/d3cede428b148f5c2094ea96f87130a1d9e093": "fae86511cef7d641d4f2ffbbff26ed2d",
".git/objects/af/8c7820e526536171ebb4a7ee1f04d835ed9ed8": "5f7e1d7be2872510c04e7c2a2df58df2",
".git/objects/4d/1d82a3cfa900463a3c58c5ce504fad3ed8f6a4": "e0fc57e54975084b5dd9c738707594b7",
".git/objects/ee/4fe32a450ccca4d953ecf5af0742730cb1cdd0": "0252765552b2219ce9d226a20b74aafc",
".git/objects/b2/a88a0ef60a298b397f44451b0412efcae011c0": "aa27ae8899c35b80fd2e3f6e9e3722fd",
".git/objects/bc/c4c48de73b09837eb7cc736465fc2c5894376d": "17f1787ddff2ad244969871c3685f7a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/71a9c089752d24ac1c1893181e6ac388ba8515": "361bc93bb5243c21953f0006f0bba5d4",
".git/objects/8b/393f2680793088f12fe93bf9a9ce13986f603c": "132b96a6936227d07b139cba68fa9b9d",
".git/objects/0e/a51ac8a29c5de5ec54c71d25eefee722d8dfbd": "97be2e667d6203c0d283494aac472958",
".git/objects/b5/eebc812d6bb83f2c60fc84548d4372d34e82a6": "a7398b689a96ae63526e79b1fd32affb",
".git/objects/d2/2562f211a627f4a9f2406e8c8bfa75d0a26228": "56bb49ef9d952fd10e98a1baa1d369b7",
".git/objects/fa/f9ae0f5fa79698b19b6e8b7642a1d1453f44d1": "a91c334bc67692fe73a5862f92287946",
".git/objects/d1/704eb663c510f83db6b5b80c78fa56e637f6c1": "6d82490ea151bcda9ae8f86fcc49efc1",
".git/objects/f7/a0f7e444166640169f1ea29d29d77dd8a2d3fc": "fcd953682f9fb2863fa69479d237c541",
".git/objects/1d/d2f0b9f4eee51c4ff7eaa6d3b5b17b4d87f662": "3b58b6629d16f56e222533d74250fbf2",
".git/objects/bd/abb23ee9bca2df6958e801accb62f7ff81f3cf": "3807655d0bf41b120b507cea5a48b04a",
".git/objects/bd/6f2576997164b29377c46c7e041ac746a4caae": "d9cc0757f39ae222c3b8f58534cd6c87",
".git/objects/79/4ca72711c958f9f6a052897b15475698931460": "1a8f016a8bc8f57ae58ece39a43d9fe6",
".git/objects/e8/fc26d130769471464030b6932cb0b269a0fb6b": "718750fda5d0bc495d18bc71b1cc7716",
".git/objects/e8/845a28576c6c77c31de65db4abbe463d6fcee9": "5561817988059a4b544e13a5638ca844",
".git/objects/71/79fcfb353fb578864140d6867d3e3f1c021509": "12d90c7d303828230bece94971698465",
".git/objects/3d/9672972b9fe770a1de2fc0252a0fbfbc4ad3f0": "fa69df993f9d65addcd197b24e07befb",
".git/objects/f1/664ed1906f66c2f0e3bee4fa4f6a085aa54dfa": "e61f5f4ff98d277de2c5dff97e76b724",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/30/a99cfaef81b29c3b47dea2e60ea8eaeaf30ea9": "d5578d48b3a26d5218c05821b03a0a4c",
".git/objects/7e/044489d5fb9de3fba21b2d362c0589f1a1eae0": "5fc2ce82949de164d8adbbc9308524ed",
".git/objects/10/e5df76020ca30d64ee36be8ebf520b08becf7c": "14a93e9a10722179b8997b38af0a83fe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/36186984327cee9706ac9cf596653329c0e626": "b59fd593a98812c56b623b94cb7eec22",
".git/objects/90/b4ba29f6374a1e76ab11fa042d33a32a64d53c": "00e94f1f736456e493d5207ac3df95b6",
".git/objects/ed/562635b4869242817f0018097addac37c6294d": "7b3f6d2f76411be20412572978b48b8c",
".git/objects/d0/7018fb6fda91f1fdb73df03849aa0406b26894": "a38b772b15bf8d601826eb6566ca8047",
".git/objects/33/86ee4b8f0a32db1479bc4fc463f6cf3ed9c895": "64ada493549eac67b7b4b6a60678ad6c",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/COMMIT_EDITMSG": "fbc798a49fe2654f140bb01e1f7631e0",
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
