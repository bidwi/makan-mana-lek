if(!self.define){let e,a={};const n=(n,i)=>(n=new URL(n+".js",i).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const s=e=>n(e,c),l={module:{uri:c},exports:r,require:s};a[c]=Promise.all(i.map((e=>l[e]||s(e)))).then((e=>(d(...e),r)))}}define(["./workbox-67e6885d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"608.bundle.js",revision:"b584f30e9383838e578b385c7b372d06"},{url:"61.bundle.js",revision:"7ad3d97ed84aff711dcd45d4b1a1f7ee"},{url:"app.webmanifest",revision:"b6e1584d6c6e302f138bdf04d72f7aba"},{url:"app~309f7e27.bundle.js",revision:"5ec52b8cc6eb55bd39c1f1e8d7e8ef81"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~49ea73a0.bundle.js",revision:"e336f00d2fd0f7ac78e97cdefe9d8cc1"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"e90d448a52797973d060724c38c4489c"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"02e10a81b5a7a593e7dbcfa566aeac54"},{url:"app~e4317507.bundle.js",revision:"def8d4e12a06605d1a3f0145b49be722"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"10d72e4f95469746afcf72a4483ccbd7"},{url:"icons/icon-makan-mana-lek128.png",revision:"4095b0aa559326a231a966ec18833e4d"},{url:"icons/icon-makan-mana-lek144.png",revision:"10d72e4f95469746afcf72a4483ccbd7"},{url:"icons/icon-makan-mana-lek152.png",revision:"f8de032490844ed28fd6bbb5a813b019"},{url:"icons/icon-makan-mana-lek192.png",revision:"56783d0f2bce87b27b9acebdc3579a0b"},{url:"icons/icon-makan-mana-lek384.png",revision:"d10c2a05d7947012bbccc0190e010d5e"},{url:"icons/icon-makan-mana-lek512.png",revision:"bde5967e283b4b38452b7217ebac24cf"},{url:"icons/icon-makan-mana-lek72.png",revision:"fe7d11b29c88975a6d04dac7698672d6"},{url:"icons/icon-makan-mana-lek96.png",revision:"c8e95d3f367748f867bdbbb5d87130a7"},{url:"index.html",revision:"2f141d600420af81af31fae9af35e2b6"}],{}),e.registerRoute(/\/hero\/hero-1-large\.jpg$/,new e.CacheFirst({cacheName:"hero-makanmanalek",plugins:[]}),"GET"),e.registerRoute(/\/hero\/hero-1-small\.jpg$/,new e.StaleWhileRevalidate({cacheName:"hero-makanmanalek",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail")),new e.StaleWhileRevalidate({cacheName:"detail-makanmanalek",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/list")),new e.StaleWhileRevalidate({cacheName:"list-makanmanalek",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"image-makanmanalek",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map