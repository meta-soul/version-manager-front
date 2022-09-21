/*! For license information please see vue-router.6b6ba0b7.js.LICENSE.txt */
"use strict";(self.webpackChunkIDE_version=self.webpackChunkIDE_version||[]).push([[517],{2119:function(e,t,n){n.d(t,{PO:function(){return $},p7:function(){return we}});var r=n(6252),o=n(2262);const a="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;var s,l;const c=(t=e=>a?Symbol(e):"_vr_"+e)("rvlm"),i=t("rvd"),u=t("r"),f=t("rl"),p=t("rvl"),h="undefined"!=typeof window,d=Object.assign;function v(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const m=()=>{},g=/\/$/;function y(e,t,n="/"){let r,o={},a="",s="";var l=t.indexOf("?"),c=t.indexOf("#",-1<l?l:0);return-1<l&&(r=t.slice(0,l),a=t.slice(l+1,-1<c?c:t.length),o=e(a)),-1<c&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),{fullPath:(r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==s&&"."!==a){if(".."!==a)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n))+(a&&"?")+a+s,path:r,query:o,hash:s}}function b(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(n=e[o],r=t[o],!(Array.isArray(n)?k(n,r):Array.isArray(r)?k(r,n):n===r))return!1;var n,r;return!0}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}(n=s=s||{}).pop="pop",n.push="push",(n=l=l||{}).back="back",n.forward="forward",n.unknown="";const A=/^[^#]+#/;function R(e,t){return e.replace(A,"#")+t}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e,t){return(history.state?history.state.position-t:-1)+e}const C=new Map;function x(e,t){const{pathname:n,search:r,hash:o}=t;if(-1<(t=e.indexOf("#"))){t=o.includes(e.slice(t))?e.slice(t).length:1;let n=o.slice(t);return b(n="/"!==n[0]?"/"+n:n,"")}return b(n,e)+r+o}function S(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?O():null}}function $(e){const t=function(e){const{history:t,location:n}=window,r={value:x(e,n)},o={value:t.state};function a(r,a,s){var l=-1<(l=e.indexOf("#"))?(n.host&&document.querySelector("base")?e:e.slice(l))+r:location.protocol+"//"+location.host+e+r;try{t[s?"replaceState":"pushState"](a,"",l),o.value=a}catch(r){n[s?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){a((s=d({},o.value,t.state,{forward:e,scroll:O()})).current,s,!0);var s=d({},S(r.value,e,null),{position:s.position+1},n);a(e,s,!1),r.value=e},replace:function(e,n){a(e,d({},t.state,S(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(h){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),(e=>e.replace(g,""))(e)}(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const i=({state:a})=>{var i=x(e,location);const u=n.value;var f=t.value;let p=0;if(a){if(n.value=i,t.value=a,c&&c===u)return void(c=null);p=f?a.position-f.position:0}else r(i);o.forEach((e=>{e(n.value,u,{delta:p,type:s.pop,direction:p?0<p?l.forward:l.back:l.unknown})}))};function u(){const e=window.history;e.state&&e.replaceState(d({},e.state,{scroll:O()}),"")}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:function(){c=n.value},listen:function(e){o.push(e);var t=()=>{var t=o.indexOf(e);-1<t&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}}}(e,t.state,t.location,t.replace);return e=d({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:R.bind(null,e)},t,n),Object.defineProperty(e,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>t.state.value}),e}function j(e){return"string"==typeof e||"symbol"==typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F=t("nf");function _(e,t){return d(new Error,{type:e,[F]:!0},t)}function L(e,t){return e instanceof Error&&F in e&&(null==t||e.type&t)}const B={sensitive:!1,strict:!1,start:!0,end:!0},I=/[.+*?^${}()[\]/\\]/g;function U(e,t){let n=0;for(var r=e.score,o=t.score;n<r.length&&n<o.length;){var a=function(e,t){let n=0;for(;n<e.length&&n<t.length;){var r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}(r[n],o[n]);if(a)return a;n++}return o.length-r.length}const G={type:0,value:""},M=/[a-zA-Z0-9_]/;function D(e,t,n){return n=function(e,t){var n=d({},B,t);const r=[];let o=n.start?"^":"";const a=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let r=0;r<u.length;r++){const f=u[r];let p=40+(n.sensitive?.25:0);if(0===f.type)r||(o+="/"),o+=f.value.replace(I,"\\$&"),p+=40;else if(1===f.type){var{value:s,repeatable:l,optional:c,regexp:i}=f;a.push({name:s,repeatable:l,optional:c});const e=i||"[^/]+?";if("[^/]+?"!==e){p+=10;try{new RegExp(`(${e})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${s}" (${e}): `+t.message)}}let n=l?`((?:${e})(?:/(?:${e}))*)`:`(${e})`;r||(n=c&&u.length<2?`(?:/${n})`:"/"+n),c&&(n+="?"),o+=n,p+=20,c&&(p+=-8),l&&(p+=-20),".*"===e&&(p+=-50)}e.push(p)}r.push(e)}n.strict&&n.end&&(r[t=r.length-1][r[t].length-1]+=.7000000000000001),n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const u=new RegExp(o,n.sensitive?"":"i");return{re:u,score:r,keys:a,parse:function(e){var t=e.match(u);const n={};if(!t)return null;for(let e=1;e<t.length;e++){const o=t[e]||"";var r=a[e-1];n[r.name]=o&&r.repeatable?o.split("/"):o}return n},stringify:function(t){let n="",r=!1;for(const l of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of l)if(0===e.type)n+=e.value;else if(1===e.type){var{value:o,repeatable:a,optional:s}=e;const c=o in t?t[o]:"";if(Array.isArray(c)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);if(a=Array.isArray(c)?c.join("/"):c,!a){if(!s)throw new Error(`Missing required param "${o}"`);l.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=a}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[G]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": `+e)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let l,c=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(1<a.length&&("*"===l||"+"===l)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===l||"+"===l,optional:"*"===l||"?"===l})):t("Invalid state to consume buffer"),i="")}function p(){i+=l}for(;c<e.length;)if("\\"===(l=e[c++])&&2!==n)r=n,n=4;else switch(n){case 0:"/"===l?(i&&f(),s()):":"===l?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===l?n=2:M.test(l)?p():(f(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&c--);break;case 2:")"===l?"\\"==u[u.length-1]?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&c--,u="";break;default:t("Unknown state")}return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),s(),o}(e.path),n),n=d(n,{record:e,parent:t,children:[],alias:[]}),t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function T(e,t){const n=[],r=new Map;function o(e,s,l){var c,i=!l;const u={path:(c=e).path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:function(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||{}:{default:c.component}};u.aliasOf=l&&l.record;var f,p=W(t,e);const h=[u];if("alias"in e)for(const t of"string"==typeof e.alias?[e.alias]:e.alias)h.push(d({},u,{components:(l?l.record:u).components,path:t,aliasOf:l?l.record:u}));let v;for(const t of h){var g,y=t.path;if(s&&"/"!==y[0]&&(g="/"===(g=s.record.path)[g.length-1]?"":"/",t.path=s.record.path+(y&&g+y)),f=D(t,s,p),l?l.alias.push(f):((v=v||f)!==f&&v.alias.push(f),i&&e.name&&!J(f)&&a(e.name)),"children"in u){var b=u.children;for(let e=0;e<b.length;e++)o(b[e],f,l&&l.children[e])}l=l||f;{var w=f;let e=0;for(;e<n.length&&0<=U(w,n[e])&&(w.record.path!==n[e].record.path||!function e(t,n){return n.children.some((n=>n===t||e(t,n)))}(w,n[e]));)e++;n.splice(e,0,w),w.record.name&&!J(w)&&r.set(w.record.name,w)}}return v?()=>{a(v)}:m}function a(e){if(j(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{var t=n.indexOf(e);-1<t&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}return t=W({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,l={};if("name"in e&&e.name){if(!(o=r.get(e.name)))throw _(1,{location:e});s=o.record.name,l=d(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(l)}else if("path"in e)a=e.path,(o=n.find((e=>e.re.test(a))))&&(l=o.parse(a),s=o.record.name);else{if(!(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path)))))throw _(1,{location:e,currentLocation:t});s=o.record.name,l=d({},t.params,e.params),a=o.stringify(l)}const c=[];let i=o;for(;i;)c.unshift(i.record),i=i.parent;return{name:s,path:a,params:l,matched:c,meta:c.reduce(((e,t)=>d(e,t.meta)),{})}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function J(e){for(;e;){if(e.record.aliasOf)return 1;e=e.parent}}function W(e,t){const n={};for(const r in e)n[r]=(r in t?t:e)[r];return n}const V=/#/g,z=/&/g,H=/\//g,K=/=/g,Y=/\?/g,X=/\+/g,Z=/%5B/g,Q=/%5D/g,N=/%5E/g,ee=/%60/g,te=/%7B/g,ne=/%7C/g,re=/%7D/g,oe=/%20/g;function ae(e){return encodeURI(""+e).replace(ne,"|").replace(Z,"[").replace(Q,"]")}function se(e){return ae(e).replace(X,"%2B").replace(oe,"+").replace(V,"%23").replace(z,"%26").replace(ee,"`").replace(te,"{").replace(re,"}").replace(N,"^")}function le(e){return null==e?"":ae(e).replace(V,"%23").replace(Y,"%3F").replace(H,"%2F")}function ce(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ie(e){const t={};if(""!==e&&"?"!==e){const o=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<o.length;++e){const a=o[e].replace(X," ");var n=a.indexOf("="),r=ce(n<0?a:a.slice(0,n));if(n=n<0?null:ce(a.slice(n+1)),r in t){let e=t[r];(e=Array.isArray(e)?e:t[r]=[e]).push(n)}else t[r]=n}}return t}function ue(e){let t="";for(let n in e){const r=e[n];if(n=se(n).replace(K,"%3D"),null==r)void 0!==r&&(t+=(t.length?"&":"")+n);else{const e=Array.isArray(r)?r.map((e=>e&&se(e))):[r&&se(r)];e.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}}return t}function fe(){let e=[];return{add:function(t){return e.push(t),()=>{var n=e.indexOf(t);-1<n&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function pe(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,l)=>{var c=e=>{var c;!1===e?l(_(4,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(c=e)||c&&"object"==typeof c?l(_(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},i=e.call(r&&r.instances[o],t,n,c);let u=Promise.resolve(i);(u=e.length<3?u.then(c):u).catch((e=>l(e)))}))}function he(e,t,n,r){const o=[];for(const l of e)for(const e in l.components){let c=l.components[e];if("beforeRouteEnter"===t||l.instances[e])if("object"==typeof(s=c)||"displayName"in s||"props"in s||"__vccOpts"in s)s=(c.__vccOpts||c)[t],s&&o.push(pe(s,n,r,l,e));else{let s=c();o.push((()=>s.then((o=>{var s;return o?(s=(s=o).__esModule||a&&"Module"===s[Symbol.toStringTag]?o.default:o,(o=((l.components[e]=s).__vccOpts||s)[t])&&pe(o,n,r,l,e)()):Promise.reject(new Error(`Couldn't resolve component "${e}" at "${l.path}"`))}))))}}var s;return o}function de(e){const t=(0,r.f3)(u),n=(0,r.f3)(f),a=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),s=(0,r.Fl)((()=>{var e,t,r=a.value.matched,o=r.length,s=r[o-1];const l=n.matched;return s&&l.length?!(-1<(e=l.findIndex(w.bind(null,s))))&&(t=me(r[o-2]),1<o&&me(s)===t&&l[l.length-1].path!==t)?l.findIndex(w.bind(null,r[o-2])):e:-1}));var l=(0,r.Fl)((()=>-1<s.value&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,a.value.params))),c=(0,r.Fl)((()=>-1<s.value&&s.value===n.matched.length-1&&E(n.params,a.value.params)));return{route:a,href:(0,r.Fl)((()=>a.value.href)),isActive:l,isExactActive:c,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),1}}(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(m):Promise.resolve()}}}const ve=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:de,setup(e,{slots:t}){const n=(0,o.qj)(de(e)),a=(0,r.f3)(u).options,s=(0,r.Fl)((()=>({[ge(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[ge(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{var o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}});function me(e){return e?(e.aliasOf||e).path:""}const ge=(e,t,n)=>null!=e?e:null!=t?t:n;function ye(e,t){return e?1===(e=e(t)).length?e[0]:e:null}const be=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const a=(0,r.f3)(p),s=(0,r.Fl)((()=>e.route||a.value)),l=(0,r.f3)(i,0),u=(0,r.Fl)((()=>s.value.matched[l])),f=((0,r.JJ)(i,l+1),(0,r.JJ)(c,u),(0,r.JJ)(p,s),(0,o.iH)());return(0,r.YP)((()=>[f.value,u.value,e.name]),(([e,t,n],[r,o])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&w(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{var o=s.value;const a=u.value;var l=a&&a.components[e.name];const c=e.name;if(!l)return ye(n.default,{Component:l,route:o});const i=a.props[e.name];var p=i?!0===i?o.params:"function"==typeof i?i(o):i:null;return l=(0,r.h)(l,d({},p,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[c]=null)},ref:f})),ye(n.default,{Component:l,route:o})||l}}});function we(e){const t=T(e.routes,e),n=e.parseQuery||ie,a=e.stringifyQuery||ue,l=e.history,c=fe(),i=fe(),g=fe(),b=(0,o.XI)(q);let k=q;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const A=v.bind(null,(e=>""+e)),R=v.bind(null,le),x=v.bind(null,ce);function S(e,r){if(r=d({},r||b.value),"string"==typeof e){var o=y(n,e,r.path);const a=t.resolve({path:o.path},r),s=l.createHref(o.fullPath);return d(o,a,{params:x(a.params),hash:ce(o.hash),redirectedFrom:void 0,href:s})}let s;if("path"in e)s=d({},e,{path:y(n,e.path,r.path).path});else{const t=d({},e.params);for(const e in t)null==t[e]&&delete t[e];s=d({},e,{params:R(e.params)}),r.params=R(r.params)}const c=t.resolve(s,r);var i;o=e.hash||"",c.params=A(x(c.params)),r=a,r=(i=d({},e,{hash:ae(o).replace(te,"{").replace(re,"}").replace(N,"^"),path:c.path})).query?r(i.query):"",r=i.path+(r&&"?")+r+(i.hash||"");const u=l.createHref(r);return d({fullPath:r,hash:o,query:a===ue?function(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}(e.query):e.query||{}},c,{redirectedFrom:void 0,href:u})}function $(e){return"string"==typeof e?y(n,e,b.value.path):d({},e)}function F(e,t){if(k!==e)return _(8,{from:t,to:e})}function B(e){return U(e)}function I(e){var t=e.matched[e.matched.length-1];if(t&&t.redirect){const n=t.redirect;let r="function"==typeof n?n(e):n;return"string"==typeof r&&((r=r.includes("?")||r.includes("#")?r=$(r):{path:r}).params={}),d({query:e.query,hash:e.hash,params:e.params},r)}}function U(e,t){var n=k=S(e);const r=b.value,o=e.state,s=e.force,l=!0===e.replace;var c,i,u;if(e=I(n))return U(d($(e),{state:o,force:s,replace:l}),t||n);const f=n;let p;return f.redirectedFrom=t,!s&&(e=a,i=(c=r).matched.length-1,u=n.matched.length-1,-1<i&&i==u&&w(c.matched[i],n.matched[u])&&E(c.params,n.params)&&e(c.query)===e(n.query)&&c.hash===n.hash)&&(p=_(16,{to:f,from:r}),Y(r,r,!0,!1)),(p?Promise.resolve(p):G(f,r)).catch((e=>L(e)?L(e,2)?e:K(e):H(e,f,r))).then((e=>{if(e){if(L(e,2))return U(d($(e.to),{state:o,force:s,replace:l}),t||f)}else e=D(f,r,!0,l,o);return M(f,r,e),e}))}function G(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s],l=(a&&(e.matched.find((e=>w(e,a)))?r:n).push(a),e.matched[s]);!l||t.matched.find((e=>w(e,l)))||o.push(l)}return[n,r,o]}(e,t);n=he(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(pe(r,e,t))}));const s=function(e,t){return(e=F(e,t))?Promise.reject(e):Promise.resolve()}.bind(null,e,t);return n.push(s),Ee(n).then((()=>{n=[];for(const r of c.list())n.push(pe(r,e,t));return n.push(s),Ee(n)})).then((()=>{n=he(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(pe(r,e,t))}));return n.push(s),Ee(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(pe(o,e,t));else n.push(pe(r.beforeEnter,e,t));return n.push(s),Ee(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),(n=he(a,"beforeRouteEnter",e,t)).push(s),Ee(n)))).then((()=>{n=[];for(const r of i.list())n.push(pe(r,e,t));return n.push(s),Ee(n)})).catch((e=>L(e,8)?e:Promise.reject(e)))}function M(e,t,n){for(const r of g.list())r(e,t,n)}function D(e,t,n,r,o){if(a=F(e,t))return a;var a=t===q,s=h?history.state:{};n&&(r||a?l.replace(e.fullPath,d({scroll:a&&s&&s.scroll},o)):l.push(e.fullPath,o)),Y(b.value=e,t,n,a),K()}let J,W,V=fe(),z=fe();function H(e,t,n){K(e);const r=z.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function K(e){return W||(W=!e,J=l.listen(((e,t,n)=>{const r=S(e);var o;if(e=I(r))U(d(e,{replace:!0}),r).catch(m);else{k=r;const t=b.value;h&&(e=P(t.fullPath,n.delta),o=O(),C.set(e,o)),G(r,t).catch((e=>L(e,12)?e:L(e,2)?(U(e.to,r).then((e=>{L(e,20)&&!n.delta&&n.type===s.pop&&l.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&l.go(-n.delta,!1),H(e,r,t)))).then((e=>{(e=e||D(r,t,!1))&&(n.delta?l.go(-n.delta,!1):n.type===s.pop&&L(e,20)&&l.go(-1,!1)),M(r,t,e)})).catch(m)}})),V.list().forEach((([t,n])=>e?n(e):t())),V.reset()),e}function Y(t,n,o,a){const s=e.scrollBehavior;if(!h||!s)return Promise.resolve();const l=!o&&(c=P(t.fullPath,0),i=C.get(c),C.delete(c),i)||(a||!o)&&history.state&&history.state.scroll||null;var c,i;(0,r.Y3)().then((()=>s(t,n,l))).then((e=>e&&function(e){let t;if("el"in e){const a=e.el;var n="string"==typeof a&&a.startsWith("#");if(n="string"==typeof a?n?document.getElementById(a.slice(1)):document.querySelector(a):a,!n)return;r=e,o=document.documentElement.getBoundingClientRect(),n=n.getBoundingClientRect(),t={behavior:r.behavior,left:n.left-o.left-(r.left||0),top:n.top-o.top-(r.top||0)}}else t=e;var r,o;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>H(e,t,n)))}const X=e=>l.go(e);let Z;const Q=new Set;return{currentRoute:b,addRoute:function(e,n){let r,o;return o=j(e)?(r=t.getRecordMatcher(e),n):e,t.addRoute(o,r)},removeRoute:function(e){(e=t.getRecordMatcher(e))&&t.removeRoute(e)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:S,options:e,push:B,replace:function(e){return B(d($(e),{replace:!0}))},go:X,back:()=>X(-1),forward:()=>X(1),beforeEach:c.add,beforeResolve:i.add,afterEach:g.add,onError:z.add,isReady:function(){return W&&b.value!==q?Promise.resolve():new Promise(((e,t)=>{V.add([e,t])}))},install(e){e.component("RouterLink",ve),e.component("RouterView",be),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(b)}),h&&!Z&&b.value===q&&(Z=!0,B(l.location).catch((e=>{})));const t={};for(const e in q)t[e]=(0,r.Fl)((()=>b.value[e]));e.provide(u,this),e.provide(f,(0,o.qj)(t)),e.provide(p,b);const n=e.unmount;Q.add(e),e.unmount=function(){Q.delete(e),Q.size<1&&(k=q,J&&J(),b.value=q,Z=!1,W=!1),n()}}}}function Ee(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}]);