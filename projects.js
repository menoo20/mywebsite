/*! For license information please see projects.js.LICENSE.txt */
(()=>{var e,t,r,o,n={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="myportfolio3:",a.l=(r,o,n,i)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+n){l=p;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=r),e[r]=[o];var d=(t,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),r=e=>new Promise(((t,r)=>{var o=a.miniCssF(e),n=a.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(a=r[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var a;if((n=(a=i[o]).getAttribute("data-href"))===e||n===t)return a}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=i=>{if(n.onerror=n.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,n.parentNode.removeChild(n),o(s)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),o={projects:0},a.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{src_client_public_projects_style_style_css:1}[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={projects:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)s(a)}for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0},r=self.webpackChunkmyportfolio3=self.webpackChunkmyportfolio3||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.e("src_client_public_projects_style_style_css").then(a.bind(a,"./src/client/public/projects/style/style.css"))})();
//# sourceMappingURL=projects.js.map