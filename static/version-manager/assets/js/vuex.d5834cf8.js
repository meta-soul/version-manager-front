"use strict";(self.webpackChunkIDE_version=self.webpackChunkIDE_version||[]).push([[652],{894:function(t,e,n){n.d(e,{MT:function(){return E},nv:function(){return x},rn:function(){return M}});var o=n(6252),r=n(2262),i=n(5689);function a(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function s(t){return null!==t&&"object"==typeof t}function c(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);-1<n&&e.splice(n,1)}}function u(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;f(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var i,s=t._state,c=(t.getters={},t._makeLocalGettersCache=Object.create(null),t._wrappedGetters),u={};a(c,(function(e,n){var o,r;u[n]=(o=e,r=t,function(){return o(r)}),Object.defineProperty(t.getters,n,{get:function(){return u[n]()},enumerable:!0})})),t._state=(0,r.qj)({data:e}),t.strict&&(i=t,(0,o.YP)((function(){return i._state.data}),(function(){}),{deep:!0,flush:"sync"})),s&&n&&t._withCommit((function(){s.data=null}))}function f(t,e,n,o,r){var i,a,s,c,u,l,m=!n.length,y=t._modules.getNamespace(n),v=(o.namespaced&&(t._modulesNamespaceMap[y],t._modulesNamespaceMap[y]=o),m||r||(i=h(e,n.slice(0,-1)),a=n[n.length-1],t._withCommit((function(){i[a]=o.state}))),o.context=(s=t,u=n,l={dispatch:(m=""===(c=y))?s.dispatch:function(t,e,n){return e=(t=d(t,e,n)).payload,n=t.options,t=t.type,n&&n.root||(t=c+t),s.dispatch(t,e)},commit:m?s.commit:function(t,e,n){e=(t=d(t,e,n)).payload,n=t.options,t=t.type,n&&n.root||(t=c+t),s.commit(t,e,n)}},Object.defineProperties(l,{getters:{get:m?function(){return s.getters}:function(){return p(s,c)}},state:{get:function(){return h(s.state,u)}}}),l));o.forEachMutation((function(e,n){var o,r,i;n=y+n,r=e,i=v,((o=t)._mutations[n]||(o._mutations[n]=[])).push((function(t){r.call(o,i.state,t)}))})),o.forEachAction((function(e,n){var o,r,i;n=e.root?n:y+n,e=e.handler||e,r=e,i=v,((o=t)._actions[n]||(o._actions[n]=[])).push((function(t){var e;return(e=t=r.call(o,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:o.getters,rootState:o.state},t))&&"function"==typeof e.then||(t=Promise.resolve(t)),o._devtoolHook?t.catch((function(t){throw o._devtoolHook.emit("vuex:error",t),t})):t}))})),o.forEachGetter((function(e,n){var o,r;n=y+n,o=e,r=v,(e=t)._wrappedGetters[n]||(e._wrappedGetters[n]=function(t){return o(r.state,r.getters,t.state,t.getters)})})),o.forEachChild((function(o,i){f(t,e,n.concat(i),o,r)}))}function p(t,e){var n,o;return t._makeLocalGettersCache[e]||(n={},o=e.length,Object.keys(t.getters).forEach((function(r){var i;r.slice(0,o)===e&&(i=r.slice(o),Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0}))})),t._makeLocalGettersCache[e]=n),t._makeLocalGettersCache[e]}function h(t,e){return e.reduce((function(t,e){return t[e]}),t)}function d(t,e,n){return s(t)&&t.type&&(n=e,t=(e=t).type),{type:t,payload:e,options:n}}var m="vuex:mutations",y="vuex:actions",v="vuex",_=0,g=8702998,b={label:"namespaced",textColor:16777215,backgroundColor:6710886};function w(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function C(t){try{return t()}catch(t){return t}}function j(t,e){this.runtime=e,this._children=Object.create(null),e=(this._rawModule=t).state,this.state=("function"==typeof e?e():e)||{}}function k(t){this.register([],t,!1)}function E(t){return new O(t)}(e={namespaced:{configurable:!0}}).namespaced.get=function(){return!!this._rawModule.namespaced},j.prototype.addChild=function(t,e){this._children[t]=e},j.prototype.removeChild=function(t){delete this._children[t]},j.prototype.getChild=function(t){return this._children[t]},j.prototype.hasChild=function(t){return t in this._children},j.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},j.prototype.forEachChild=function(t){a(this._children,t)},j.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},j.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},j.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(j.prototype,e),k.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},k.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},k.prototype.update=function(t){!function t(e,n,o){if(n.update(o),o.modules)for(var r in o.modules){if(!n.getChild(r))return;t(e.concat(r),n.getChild(r),o.modules[r])}}([],this.root,t)},k.prototype.register=function(t,e,n){var o=this,r=new j(e,n=void 0===n||n);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r),e.modules&&a(e.modules,(function(e,r){o.register(t.concat(r),e,n)}))},k.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=(t=t[t.length-1],e.getChild(t));n&&n.runtime&&e.removeChild(t)},k.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1));return t=t[t.length-1],!!e&&e.hasChild(t)};var O=function(t){var e=this,n=(t=void 0===t?{}:t).plugins,o=(void 0===n&&(n=[]),t.strict),r=(void 0===o&&(o=!1),t.devtools),i=(this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new k(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r,this),a=this.dispatch,s=this.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return s.call(i,t,e,n)},this.strict=o,f(this,t=this._modules.root.state,[],this._modules.root),l(this,t),n.forEach((function(t){return t(e)}))},M=(n={state:{configurable:!0}},O.prototype.install=function(t,e){t.provide(e||"store",this),void 0!==(t.config.globalProperties.$store=this)._devtools&&this._devtools&&function(t,e){(0,i.F1)({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:m,label:"Vuex Mutations",color:g}),n.addTimelineLayer({id:y,label:"Vuex Actions",color:g}),n.addInspector({id:v,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){var o;n.app===t&&n.inspectorId===v&&(n.filter?(function t(e,n,o,r){r.includes(o)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:n.namespaced?[b]:[]}),Object.keys(n._children).forEach((function(i){t(e,n._children[i],o,r+i+"/")}))}(o=[],e._modules.root,n.filter,""),n.rootNodes=o):n.rootNodes=[function t(e,n){return{id:n||"root",label:w(n),tags:e.namespaced?[b]:[],children:Object.keys(e._children).map((function(o){return t(e._children[o],n+o+"/")}))}}(e._modules.root,"")])})),n.on.getInspectorState((function(n){var o,r,i;n.app===t&&n.inspectorId===v&&(o=n.nodeId,p(e,o),n.state=function(t,e,n){e="root"===n?e:e[n],n=Object.keys(e);var o,r={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};return n.length&&(o=function(t){var e={};return Object.keys(t).forEach((function(n){var o,r,i=n.split("/");1<i.length?(o=e,r=i.pop(),i.forEach((function(t){o[t]||(o[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),o=o[t]._custom.value})),o[r]=C((function(){return t[n]}))):e[n]=C((function(){return t[n]}))})),e}(e),r.getters=Object.keys(o).map((function(t){return{key:t.endsWith("/")?w(t):t,editable:!1,value:C((function(){return o[t]}))}}))),r}((n=e._modules,(i=(r=o).split("/").filter((function(t){return t}))).reduce((function(t,e,n){if(t=t[e])return n===i.length-1?t:t._children;throw new Error('Missing module "'+e+'" for path "'+r+'".')}),"root"===r?n:n.root._children)),"root"===o?e.getters:e._makeLocalGettersCache,o))})),n.on.editInspectorState((function(n){var o,r;n.app===t&&n.inspectorId===v&&(o=n.nodeId,r=n.path,"root"!==o&&(r=o.split("/").filter(Boolean).concat(r)),e._withCommit((function(){n.set(e._state.data,r,n.state.value)})))})),e.subscribe((function(t,e){var o={};t.payload&&(o.payload=t.payload),o.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(v),n.sendInspectorState(v),n.addTimelineEvent({layerId:m,event:{time:Date.now(),title:t.type,data:o}})})),e.subscribeAction({before:function(t,e){var o={};t.payload&&(o.payload=t.payload),t._id=_++,t._time=Date.now(),o.state=e,n.addTimelineEvent({layerId:y,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:o}})},after:function(t,e){var o={},r=Date.now()-t._time;o.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},t.payload&&(o.payload=t.payload),o.state=e,n.addTimelineEvent({layerId:y,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:o}})}})}))}(t,this)},n.state.get=function(){return this._state.data},n.state.set=function(t){},O.prototype.commit=function(t,e,n){var o=this,r=(e=(t=d(t,e,n)).type,t.payload),i=(t.options,{type:e,payload:r}),a=this._mutations[e];a&&(this._withCommit((function(){a.forEach((function(t){t(r)}))})),this._subscribers.slice().forEach((function(t){return t(i,o.state)})))},O.prototype.dispatch=function(t,e){var n=this,o=(e=(t=d(t,e)).type,t.payload),r={type:e,payload:o};if(t=this._actions[e]){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(r,n.state)}))}catch(t){}var i=1<t.length?Promise.all(t.map((function(t){return t(o)}))):t[0](o);return new Promise((function(t,e){i.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(r,n.state)}))}catch(e){}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(r,n.state,t)}))}catch(t){}e(t)}))}))}},O.prototype.subscribe=function(t,e){return c(t,this._subscribers,e)},O.prototype.subscribeAction=function(t,e){return c("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},O.prototype.watch=function(t,e,n){var r=this;return(0,o.YP)((function(){return t(r.state,r.getters)}),e,Object.assign({},n))},O.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},O.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),this._modules.register(t="string"==typeof t?[t]:t,e),f(this,this.state,t,this._modules.get(t),n.preserveState),l(this,this.state)},O.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete h(e.state,t.slice(0,-1))[t[t.length-1]]})),u(this)},O.prototype.hasModule=function(t){return this._modules.isRegistered(t="string"==typeof t?[t]:t)},O.prototype.hotUpdate=function(t){this._modules.update(t),u(this,!0)},O.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(O.prototype,n),G((function(t,e){var n={};return I(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=P(this.$store,0,t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0})),n}))),x=(G((function(t,e){var n={};return I(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var i=P(this.$store,0,t);if(!i)return;o=i.context.commit}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}})),n})),G((function(t,e){var n={};return I(e).forEach((function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||P(this.$store,0,t))return this.$store.getters[r]},n[o].vuex=!0})),n})),G((function(t,e){var n={};return I(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=P(this.$store,0,t);if(!i)return;o=i.context.dispatch}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}})),n})));function I(t){var e;return e=t,Array.isArray(e)||s(e)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function G(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function P(t,e,n){return t._modulesNamespaceMap[n]}}}]);