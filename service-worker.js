if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>s(e,r),b={module:{uri:r},exports:n,require:l};i[r]=Promise.all(a.map((e=>b[e]||l(e)))).then((e=>(c(...e),n)))}}define(["./workbox-fa046058"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bundle.js",revision:"f43f7903f522855930096e2f5dc4162f"},{url:"bundle.js.LICENSE.txt",revision:"8668f0e2b8b1f93590449d4680d2b1a2"},{url:"images/4af3ec80f9bd2d9476b9.jpg",revision:null},{url:"images/9a14a903c13a254155ad.png",revision:null},{url:"images/Objects.png",revision:"fb6003d113d7aa5223952f9487ab8b73"},{url:"images/a69a4dd422ad6207c756.jpg",revision:null},{url:"images/about/eg.png",revision:"d2bdad72caf70967a3412148ad937276"},{url:"images/about/programmer.png",revision:"cbc57ce124ecef5b8f12ace30daf1c29"},{url:"images/about/us.png",revision:"5e6595b6a151235e8609ae0eec87ba55"},{url:"images/bg-hero-2.jpg",revision:"e9e709534bd7800d7e644d0c4b11172e"},{url:"images/certificates/0001.jpg",revision:"c375354f5239f9c0375a64310fc024b5"},{url:"images/certificates/1.png",revision:"150903687f4d2a181d3ac6a8183249ec"},{url:"images/certificates/2.png",revision:"7c000930bb939a2c524ca0c4e87acdd2"},{url:"images/certificates/3.png",revision:"5671a41dd28e44f1a883dcb2ad1a427e"},{url:"images/certificates/4.png",revision:"ddbd509a2be3dea5d7c4e8a9a63afd60"},{url:"images/certificates/5.png",revision:"8d38c94e1d87b8cf168bba1fd9512bc4"},{url:"images/certificates/bg-contacts.jpg",revision:"52356e0869b29a4b574906c86aaffbad"},{url:"images/certificates/bg.png",revision:"4bb0e0ebfaf62df31e4b092cdbb948af"},{url:"images/certificates/bg1.jpg",revision:"a87de00e82e79529b8249c1866519b68"},{url:"images/e38e38b4e9f6fdc5b919.jpg",revision:null},{url:"images/menu/3972190.jpg",revision:"7c94e50736ca3f302d256704abcfc741"},{url:"images/menu/Asset35.svg",revision:"974878dff3f66ecb31de2605c7b7b493"},{url:"images/menu/call.png",revision:"c8f987348f191377ce38c8328955ae29"},{url:"images/menu/call2.png",revision:"bf614bc5526c8e55fc0688a60452e685"},{url:"images/menu/cer2.png",revision:"235ff9c89fa0748928bf523a57491082"},{url:"images/menu/certificates.png",revision:"3f7a549134969211e6079802f1c5b519"},{url:"images/menu/projects.png",revision:"397b9e7a19b8106c57bdd1ba15949153"},{url:"images/menu/skills5.png",revision:"a41b4bb8fe5236eaf5238f915ed75049"},{url:"images/mypic.jpg",revision:"362d3accc88be4dfe5be5dad341142ff"},{url:"images/planet1.png",revision:"0ef9983ba4316eeacbee07a4768216ba"},{url:"images/planet2-lg.png",revision:"cbcaf6d26f5c02796b6704e2f628446f"},{url:"images/planet2.png",revision:"49f0f6e3bfb4abe214c8671705bc4735"},{url:"images/planet3.png",revision:"ce51928ad019213de26b3980dec1f02b"},{url:"images/planet4-xl.png",revision:"a8b6fb74459baf185d126a0ebf19dd58"},{url:"images/planet4.png",revision:"a778de703424f589c5a317596642da53"},{url:"images/planet5-lg-2.png",revision:"898e65079a79ed825bcd8677db13d8ff"},{url:"images/planet5-lg.png",revision:"bae7355ca1e1ba116c179687c27fcecf"},{url:"images/planet5.png",revision:"54474f4b646ddc868465df3e8ceab2bf"},{url:"images/planet6.png",revision:"56f5045d39550d8d18d95703916bb252"},{url:"images/planet7.png",revision:"0f611700205a953fef37c0facbf2aaba"},{url:"images/projects/easy-bank.png",revision:"61fd5468a59e7d893e32875eb7740520"},{url:"images/projects/prouct-landing.jpg",revision:"eef68ecdf1de44527e611f07599f65b3"},{url:"images/projects/restaurant5.svg",revision:"bf7174f26eac7a69414c17c41d614572"},{url:"images/projects/restaurantly.png",revision:"d09175aeea66e7969dbf596e11e87aa0"},{url:"images/projects/special.png",revision:"55c3a536ced9cb554db9570e990fb0b2"},{url:"images/satellite-png-40927 (1).png",revision:"7332782194399401dc3a8dc877c53c18"},{url:"images/satellite-png-40927.png",revision:"9ac438e7928d6b500c1efeb20c9dbbdc"},{url:"images/scroll-thumb.png",revision:"1e4e2fd51374e6ee085b3cccf9f1f37a"},{url:"images/scroll.png",revision:"7c166baadac26ea83543e04f88d1b808"},{url:"images/skills/584830f5cef1014c0b5e4aa1.png",revision:"b215b530b089a50270199ddcd98c8b93"},{url:"images/skills/Asset 1.png",revision:"553658b9db66b7b0c4842c6db4bd2036"},{url:"images/skills/bootstrap5.svg",revision:"70792d9206f216026195d39387cc0b20"},{url:"images/skills/github.svg",revision:"2075dad31775b27170f1fb4b55386851"},{url:"images/skills/jquery.svg",revision:"ec222e475d449bd879f23b2936d8664e"},{url:"images/skills/react.svg",revision:"2bf9e8036f3619a4dc5faa919216f777"},{url:"images/skills/redux.svg",revision:"2747cae2c3734d0c5955bca487cb9937"},{url:"images/skills/sass.svg",revision:"8759a53a72fafa90c05b855e55e48a63"},{url:"images/skills/webpack.svg",revision:"29af00aaf5f4a7634565855d0dbc3f92"},{url:"images/—Pngtree—space rocket simulation mockup picture_5423370.png",revision:"502578003da029e62037b8d5fd340d6a"},{url:"index.html",revision:"a1810d4c7b7a731e4716ee400b8e9ad6"},{url:"src_client_public_js_app_js.bundle.js",revision:"51f9fab6913ad982c0c4f484d1d8a7a7"},{url:"src_client_public_js_app_js.bundle.js.LICENSE.txt",revision:"85280227ff77d2dcff7681d3ff6fe4a0"},{url:"src_client_public_js_carousel_js.bundle.js",revision:"475fbc091d7e875c3c82b2997e274d75"},{url:"src_client_public_js_carousel_js.bundle.js.LICENSE.txt",revision:"5dd7c8ec1c7dc0c10e65a641cd4fbb1e"},{url:"src_client_public_js_form_js.bundle.js",revision:"8141087f3577687f9d6671eba2ebb032"},{url:"src_client_public_js_form_js.bundle.js.LICENSE.txt",revision:"29577db59fe54cdb3a39cdb30e3f42d5"},{url:"src_client_public_js_jqueryMod_js.bundle.js",revision:"8ab50333ecf85c70c0ca10aa985d6a21"},{url:"src_client_public_js_jqueryMod_js.bundle.js.LICENSE.txt",revision:"627596048a1f92bec4a3c9906cd7e361"},{url:"src_client_public_js_typeIt_js.bundle.js",revision:"f79995ec697394e4fb7d932b10289882"},{url:"src_client_public_js_typeIt_js.bundle.js.LICENSE.txt",revision:"b55bf2717ad34a7171f8aa7a3ebfd829"},{url:"src_client_public_style_style_css.bundle.js",revision:"f5eaf27d7afdc0f5ef99bc48850aabe8"},{url:"src_client_public_style_style_css.bundle.js.LICENSE.txt",revision:"cf02e5155f288f48d30aa13d29172ff3"},{url:"src_client_public_style_style_css.css",revision:"96e43a6fc1497d3b06d7a0ce0831121a"}],{})}));