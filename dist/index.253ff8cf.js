// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9AvLK":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "92a129b5253ff8cf";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hqQHC":[function(require,module,exports) {
var _src = require("../src");
const variable = "Hello, World!";
let div = document.getElementById("greeting");
if (div) div.innerHTML = variable;
(0, _src.generateFunction)();

},{"../src":"h7u1C"}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _action = require("./action");
parcelHelpers.exportAll(_action, exports);
var _alert = require("./alert");
parcelHelpers.exportAll(_alert, exports);
var _common = require("./common");
parcelHelpers.exportAll(_common, exports);
var _content = require("./content");
parcelHelpers.exportAll(_content, exports);
var _device = require("./device");
parcelHelpers.exportAll(_device, exports);
var _editor = require("./editor");
parcelHelpers.exportAll(_editor, exports);
var _image = require("./image");
parcelHelpers.exportAll(_image, exports);
var _logo = require("./logo");
parcelHelpers.exportAll(_logo, exports);
var _navigation = require("./navigation");
parcelHelpers.exportAll(_navigation, exports);
var _search = require("./search");
parcelHelpers.exportAll(_search, exports);
var _social = require("./social");
parcelHelpers.exportAll(_social, exports);
var _toggle = require("./toggle");
parcelHelpers.exportAll(_toggle, exports);

},{"./action":"jObjv","./alert":"2WArk","./common":"eZRPe","./content":"rnuWZ","./device":"efCcb","./editor":"87WFb","./image":"kB9Ts","./logo":"5DECQ","./navigation":"7G38W","./search":"by10t","./social":"9LU2l","./toggle":"2bSqj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jObjv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag_indicator", ()=>drag_indicator);
parcelHelpers.export(exports, "hourglass_disabled", ()=>hourglass_disabled);
parcelHelpers.export(exports, "hourglass_empty", ()=>hourglass_empty);
parcelHelpers.export(exports, "hourglass_full", ()=>hourglass_full);
parcelHelpers.export(exports, "content_tab", ()=>content_tab);
parcelHelpers.export(exports, "split_internal_down", ()=>split_internal_down);
parcelHelpers.export(exports, "split_internal_left", ()=>split_internal_left);
parcelHelpers.export(exports, "split_internal_right", ()=>split_internal_right);
parcelHelpers.export(exports, "split_internal_up", ()=>split_internal_up);
parcelHelpers.export(exports, "split_external_down", ()=>split_external_down);
parcelHelpers.export(exports, "split_external_left", ()=>split_external_left);
parcelHelpers.export(exports, "split_external_right", ()=>split_external_right);
parcelHelpers.export(exports, "split_external_up", ()=>split_external_up);
parcelHelpers.export(exports, "delete_", ()=>delete_);
parcelHelpers.export(exports, "delete_outline", ()=>delete_outline);
parcelHelpers.export(exports, "delete_forever", ()=>delete_forever);
parcelHelpers.export(exports, "home", ()=>home);
parcelHelpers.export(exports, "settings", ()=>settings);
parcelHelpers.export(exports, "_3d_rotation", ()=>_3d_rotation);
parcelHelpers.export(exports, "accessibility", ()=>accessibility);
parcelHelpers.export(exports, "accessibility_new", ()=>accessibility_new);
parcelHelpers.export(exports, "accessible", ()=>accessible);
parcelHelpers.export(exports, "accessible_forward", ()=>accessible_forward);
parcelHelpers.export(exports, "account_balance", ()=>account_balance);
parcelHelpers.export(exports, "account_balance_wallet", ()=>account_balance_wallet);
parcelHelpers.export(exports, "account_box", ()=>account_box);
parcelHelpers.export(exports, "account_circle", ()=>account_circle);
parcelHelpers.export(exports, "add_shopping_cart", ()=>add_shopping_cart);
parcelHelpers.export(exports, "add_task", ()=>add_task);
parcelHelpers.export(exports, "addchart_black", ()=>addchart_black);
parcelHelpers.export(exports, "admin_panel_settings", ()=>admin_panel_settings);
parcelHelpers.export(exports, "ads_click", ()=>ads_click);
parcelHelpers.export(exports, "alarm_add", ()=>alarm_add);
parcelHelpers.export(exports, "alarm_black", ()=>alarm_black);
parcelHelpers.export(exports, "alarm_off", ()=>alarm_off);
parcelHelpers.export(exports, "alarm_on", ()=>alarm_on);
parcelHelpers.export(exports, "all_inbox", ()=>all_inbox);
parcelHelpers.export(exports, "all_out", ()=>all_out);
parcelHelpers.export(exports, "analytics_black", ()=>analytics_black);
parcelHelpers.export(exports, "anchor_black", ()=>anchor_black);
parcelHelpers.export(exports, "announcement_black", ()=>announcement_black);
parcelHelpers.export(exports, "api_black", ()=>api_black);
parcelHelpers.export(exports, "app_blocking", ()=>app_blocking);
parcelHelpers.export(exports, "arrow_circle_down", ()=>arrow_circle_down);
parcelHelpers.export(exports, "arrow_circle_left", ()=>arrow_circle_left);
parcelHelpers.export(exports, "arrow_circle_right", ()=>arrow_circle_right);
parcelHelpers.export(exports, "arrow_circle_up", ()=>arrow_circle_up);
parcelHelpers.export(exports, "arrow_right_alt", ()=>arrow_right_alt);
parcelHelpers.export(exports, "article_black", ()=>article_black);
parcelHelpers.export(exports, "aspect_ratio", ()=>aspect_ratio);
parcelHelpers.export(exports, "assessment", ()=>assessment);
parcelHelpers.export(exports, "assignment", ()=>assignment);
parcelHelpers.export(exports, "assignment_ind", ()=>assignment_ind);
parcelHelpers.export(exports, "assignment_late", ()=>assignment_late);
parcelHelpers.export(exports, "assignment_return", ()=>assignment_return);
parcelHelpers.export(exports, "assignment_returned", ()=>assignment_returned);
parcelHelpers.export(exports, "assignment_turned_in", ()=>assignment_turned_in);
parcelHelpers.export(exports, "autorenew", ()=>autorenew);
parcelHelpers.export(exports, "backup", ()=>backup);
parcelHelpers.export(exports, "backup_table", ()=>backup_table);
parcelHelpers.export(exports, "batch_prediction", ()=>batch_prediction);
parcelHelpers.export(exports, "book", ()=>book);
parcelHelpers.export(exports, "book_online", ()=>book_online);
parcelHelpers.export(exports, "bookmark_add", ()=>bookmark_add);
parcelHelpers.export(exports, "bookmark_added", ()=>bookmark_added);
parcelHelpers.export(exports, "bookmark", ()=>bookmark);
parcelHelpers.export(exports, "bookmark_border", ()=>bookmark_border);
parcelHelpers.export(exports, "bookmark_remove", ()=>bookmark_remove);
parcelHelpers.export(exports, "bookmarks", ()=>bookmarks);
parcelHelpers.export(exports, "bug_report", ()=>bug_report);
parcelHelpers.export(exports, "build", ()=>build);
parcelHelpers.export(exports, "build_circle", ()=>build_circle);
parcelHelpers.export(exports, "cached", ()=>cached);
parcelHelpers.export(exports, "calendar_today", ()=>calendar_today);
parcelHelpers.export(exports, "calendar_view_day", ()=>calendar_view_day);
parcelHelpers.export(exports, "calendar_view_month", ()=>calendar_view_month);
parcelHelpers.export(exports, "calendar_view_week", ()=>calendar_view_week);
parcelHelpers.export(exports, "camera_enhance", ()=>camera_enhance);
parcelHelpers.export(exports, "cancel_schedule_send", ()=>cancel_schedule_send);
parcelHelpers.export(exports, "card_travel", ()=>card_travel);
parcelHelpers.export(exports, "change_history", ()=>change_history);
parcelHelpers.export(exports, "check_circle", ()=>check_circle);
parcelHelpers.export(exports, "check_circle_outline", ()=>check_circle_outline);
parcelHelpers.export(exports, "circle_notifications", ()=>circle_notifications);
parcelHelpers.export(exports, "_class", ()=>_class);
parcelHelpers.export(exports, "close_fullscreen", ()=>close_fullscreen);
parcelHelpers.export(exports, "code", ()=>code);
parcelHelpers.export(exports, "code_off", ()=>code_off);
parcelHelpers.export(exports, "comment_bank", ()=>comment_bank);
parcelHelpers.export(exports, "commute", ()=>commute);
parcelHelpers.export(exports, "compare_arrows", ()=>compare_arrows);
parcelHelpers.export(exports, "compress", ()=>compress);
parcelHelpers.export(exports, "contact_page", ()=>contact_page);
parcelHelpers.export(exports, "contact_support", ()=>contact_support);
parcelHelpers.export(exports, "contactless", ()=>contactless);
parcelHelpers.export(exports, "copyright", ()=>copyright);
parcelHelpers.export(exports, "credit_card", ()=>credit_card);
parcelHelpers.export(exports, "credit_card_off", ()=>credit_card_off);
parcelHelpers.export(exports, "dangerous", ()=>dangerous);
parcelHelpers.export(exports, "dashboard", ()=>dashboard);
parcelHelpers.export(exports, "dashboard_customize", ()=>dashboard_customize);
parcelHelpers.export(exports, "data_exploration", ()=>data_exploration);
parcelHelpers.export(exports, "date_range", ()=>date_range);
parcelHelpers.export(exports, "description", ()=>description);
parcelHelpers.export(exports, "disabled_by_default", ()=>disabled_by_default);
parcelHelpers.export(exports, "disabled_visible", ()=>disabled_visible);
parcelHelpers.export(exports, "dns", ()=>dns);
parcelHelpers.export(exports, "done_all", ()=>done_all);
parcelHelpers.export(exports, "done", ()=>done);
parcelHelpers.export(exports, "done_outline", ()=>done_outline);
parcelHelpers.export(exports, "donut_large", ()=>donut_large);
parcelHelpers.export(exports, "donut_small", ()=>donut_small);
parcelHelpers.export(exports, "dynamic_form", ()=>dynamic_form);
parcelHelpers.export(exports, "edit_calendar", ()=>edit_calendar);
parcelHelpers.export(exports, "edit_off", ()=>edit_off);
parcelHelpers.export(exports, "eject", ()=>eject);
parcelHelpers.export(exports, "euro_symbol", ()=>euro_symbol);
parcelHelpers.export(exports, "event", ()=>event);
parcelHelpers.export(exports, "event_seat", ()=>event_seat);
parcelHelpers.export(exports, "exit_to_app", ()=>exit_to_app);
parcelHelpers.export(exports, "expand", ()=>expand);
parcelHelpers.export(exports, "explore", ()=>explore);
parcelHelpers.export(exports, "explore_off", ()=>explore_off);
parcelHelpers.export(exports, "extension", ()=>extension);
parcelHelpers.export(exports, "extension_off", ()=>extension_off);
parcelHelpers.export(exports, "face", ()=>face);
parcelHelpers.export(exports, "fact_check", ()=>fact_check);
parcelHelpers.export(exports, "favorite", ()=>favorite);
parcelHelpers.export(exports, "favorite_border", ()=>favorite_border);
parcelHelpers.export(exports, "fax", ()=>fax);
parcelHelpers.export(exports, "feedback", ()=>feedback);
parcelHelpers.export(exports, "file_present", ()=>file_present);
parcelHelpers.export(exports, "filter_alt", ()=>filter_alt);
parcelHelpers.export(exports, "find_in_page", ()=>find_in_page);
parcelHelpers.export(exports, "find_replace", ()=>find_replace);
parcelHelpers.export(exports, "fingerprint", ()=>fingerprint);
parcelHelpers.export(exports, "fit_screen", ()=>fit_screen);
parcelHelpers.export(exports, "flaky", ()=>flaky);
parcelHelpers.export(exports, "flight_land", ()=>flight_land);
parcelHelpers.export(exports, "flight_takeoff", ()=>flight_takeoff);
parcelHelpers.export(exports, "flip_to_back", ()=>flip_to_back);
parcelHelpers.export(exports, "flip_to_front", ()=>flip_to_front);
parcelHelpers.export(exports, "free_cancellation", ()=>free_cancellation);
parcelHelpers.export(exports, "gavel", ()=>gavel);
parcelHelpers.export(exports, "generating_tokens", ()=>generating_tokens);
parcelHelpers.export(exports, "get_app", ()=>get_app);
parcelHelpers.export(exports, "gif", ()=>gif);
parcelHelpers.export(exports, "gif_box", ()=>gif_box);
parcelHelpers.export(exports, "grade", ()=>grade);
parcelHelpers.export(exports, "grading", ()=>grading);
parcelHelpers.export(exports, "group_work", ()=>group_work);
parcelHelpers.export(exports, "help", ()=>help);
parcelHelpers.export(exports, "help_center", ()=>help_center);
parcelHelpers.export(exports, "help_outline", ()=>help_outline);
parcelHelpers.export(exports, "hide_source", ()=>hide_source);
parcelHelpers.export(exports, "highlight_alt", ()=>highlight_alt);
parcelHelpers.export(exports, "highlight_off", ()=>highlight_off);
parcelHelpers.export(exports, "history", ()=>history);
parcelHelpers.export(exports, "history_toggle", ()=>history_toggle);
parcelHelpers.export(exports, "horizontal_split", ()=>horizontal_split);
parcelHelpers.export(exports, "hotel_class", ()=>hotel_class);
parcelHelpers.export(exports, "http", ()=>http);
parcelHelpers.export(exports, "https", ()=>https);
parcelHelpers.export(exports, "important_devices", ()=>important_devices);
parcelHelpers.export(exports, "info", ()=>info);
parcelHelpers.export(exports, "input", ()=>input);
parcelHelpers.export(exports, "integration_instructions", ()=>integration_instructions);
parcelHelpers.export(exports, "invert_colors", ()=>invert_colors);
parcelHelpers.export(exports, "label", ()=>label);
parcelHelpers.export(exports, "label_important", ()=>label_important);
parcelHelpers.export(exports, "label_off", ()=>label_off);
parcelHelpers.export(exports, "language", ()=>language);
parcelHelpers.export(exports, "launch", ()=>launch);
parcelHelpers.export(exports, "leaderboard", ()=>leaderboard);
parcelHelpers.export(exports, "lightbulb", ()=>lightbulb);
parcelHelpers.export(exports, "line_style", ()=>line_style);
parcelHelpers.export(exports, "line_weight", ()=>line_weight);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "lock", ()=>lock);
parcelHelpers.export(exports, "lock_clock", ()=>lock_clock);
parcelHelpers.export(exports, "lock_open", ()=>lock_open);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "loyalty", ()=>loyalty);
parcelHelpers.export(exports, "manage_accounts", ()=>manage_accounts);
parcelHelpers.export(exports, "mark_as_unread", ()=>mark_as_unread);
parcelHelpers.export(exports, "markunread_mailbox", ()=>markunread_mailbox);
parcelHelpers.export(exports, "maximize", ()=>maximize);
parcelHelpers.export(exports, "mediation", ()=>mediation);
parcelHelpers.export(exports, "minimize", ()=>minimize);
parcelHelpers.export(exports, "model_training", ()=>model_training);
parcelHelpers.export(exports, "new_label", ()=>new_label);
parcelHelpers.export(exports, "next_plan", ()=>next_plan);
parcelHelpers.export(exports, "nightlight_round", ()=>nightlight_round);
parcelHelpers.export(exports, "no_accounts", ()=>no_accounts);
parcelHelpers.export(exports, "not_accessible", ()=>not_accessible);
parcelHelpers.export(exports, "not_started", ()=>not_started);
parcelHelpers.export(exports, "note_add", ()=>note_add);
parcelHelpers.export(exports, "offline_bolt", ()=>offline_bolt);
parcelHelpers.export(exports, "offline_pin", ()=>offline_pin);
parcelHelpers.export(exports, "online_prediction", ()=>online_prediction);
parcelHelpers.export(exports, "opacity", ()=>opacity);
parcelHelpers.export(exports, "open_in_browser", ()=>open_in_browser);
parcelHelpers.export(exports, "open_in_full", ()=>open_in_full);
parcelHelpers.export(exports, "open_in_new", ()=>open_in_new);
parcelHelpers.export(exports, "open_in_new_off", ()=>open_in_new_off);
parcelHelpers.export(exports, "open_with", ()=>open_with);
parcelHelpers.export(exports, "outbound", ()=>outbound);
parcelHelpers.export(exports, "outbox", ()=>outbox);
parcelHelpers.export(exports, "outlet", ()=>outlet);
parcelHelpers.export(exports, "pageview", ()=>pageview);
parcelHelpers.export(exports, "paid", ()=>paid);
parcelHelpers.export(exports, "pan_tool", ()=>pan_tool);
parcelHelpers.export(exports, "payment", ()=>payment);
parcelHelpers.export(exports, "pending_actions", ()=>pending_actions);
parcelHelpers.export(exports, "pending", ()=>pending);
parcelHelpers.export(exports, "perm_camera_mic", ()=>perm_camera_mic);
parcelHelpers.export(exports, "perm_contact_calendar", ()=>perm_contact_calendar);
parcelHelpers.export(exports, "perm_data_setting", ()=>perm_data_setting);
parcelHelpers.export(exports, "perm_device_information", ()=>perm_device_information);
parcelHelpers.export(exports, "perm_identity", ()=>perm_identity);
parcelHelpers.export(exports, "perm_media", ()=>perm_media);
parcelHelpers.export(exports, "perm_phone_msg", ()=>perm_phone_msg);
parcelHelpers.export(exports, "perm_scan_wifi", ()=>perm_scan_wifi);
parcelHelpers.export(exports, "pets", ()=>pets);
parcelHelpers.export(exports, "picture_in_picture_alt", ()=>picture_in_picture_alt);
parcelHelpers.export(exports, "picture_in_picture", ()=>picture_in_picture);
parcelHelpers.export(exports, "pin_end", ()=>pin_end);
parcelHelpers.export(exports, "pin_invoke", ()=>pin_invoke);
parcelHelpers.export(exports, "plagiarism", ()=>plagiarism);
parcelHelpers.export(exports, "play_for_work", ()=>play_for_work);
parcelHelpers.export(exports, "power_settings_new", ()=>power_settings_new);
parcelHelpers.export(exports, "pregnant_woman", ()=>pregnant_woman);
parcelHelpers.export(exports, "preview", ()=>preview);
parcelHelpers.export(exports, "print", ()=>print);
parcelHelpers.export(exports, "privacy_tip", ()=>privacy_tip);
parcelHelpers.export(exports, "private_connectivity", ()=>private_connectivity);
parcelHelpers.export(exports, "production_quantity_limits", ()=>production_quantity_limits);
parcelHelpers.export(exports, "published_with_changes", ()=>published_with_changes);
parcelHelpers.export(exports, "query_builder", ()=>query_builder);
parcelHelpers.export(exports, "question_answer", ()=>question_answer);
parcelHelpers.export(exports, "quickreply", ()=>quickreply);
parcelHelpers.export(exports, "radio_button_checked", ()=>radio_button_checked);
parcelHelpers.export(exports, "receipt", ()=>receipt);
parcelHelpers.export(exports, "record_voice_over", ()=>record_voice_over);
parcelHelpers.export(exports, "remove_done", ()=>remove_done);
parcelHelpers.export(exports, "remove_shopping_cart", ()=>remove_shopping_cart);
parcelHelpers.export(exports, "reorder", ()=>reorder);
parcelHelpers.export(exports, "report_problem", ()=>report_problem);
parcelHelpers.export(exports, "request_page", ()=>request_page);
parcelHelpers.export(exports, "restore", ()=>restore);
parcelHelpers.export(exports, "restore_from_trash", ()=>restore_from_trash);
parcelHelpers.export(exports, "restore_page", ()=>restore_page);
parcelHelpers.export(exports, "room", ()=>room);
parcelHelpers.export(exports, "rounded_corner", ()=>rounded_corner);
parcelHelpers.export(exports, "rowing", ()=>rowing);
parcelHelpers.export(exports, "rule", ()=>rule);
parcelHelpers.export(exports, "saved_search", ()=>saved_search);
parcelHelpers.export(exports, "savings", ()=>savings);
parcelHelpers.export(exports, "schedule", ()=>schedule);
parcelHelpers.export(exports, "schedule_send", ()=>schedule_send);
parcelHelpers.export(exports, "search", ()=>search);
parcelHelpers.export(exports, "search_off", ()=>search_off);
parcelHelpers.export(exports, "segment", ()=>segment);
parcelHelpers.export(exports, "send_and_archive", ()=>send_and_archive);
parcelHelpers.export(exports, "sensors", ()=>sensors);
parcelHelpers.export(exports, "sensors_off", ()=>sensors_off);
parcelHelpers.export(exports, "settings_accessibility", ()=>settings_accessibility);
parcelHelpers.export(exports, "settings_applications", ()=>settings_applications);
parcelHelpers.export(exports, "settings_backup_restore", ()=>settings_backup_restore);
parcelHelpers.export(exports, "settings_bluetooth", ()=>settings_bluetooth);
parcelHelpers.export(exports, "settings_brightness", ()=>settings_brightness);
parcelHelpers.export(exports, "settings_cell", ()=>settings_cell);
parcelHelpers.export(exports, "settings_ethernet", ()=>settings_ethernet);
parcelHelpers.export(exports, "settings_input_antenna", ()=>settings_input_antenna);
parcelHelpers.export(exports, "settings_input_component", ()=>settings_input_component);
parcelHelpers.export(exports, "settings_input_hdmi", ()=>settings_input_hdmi);
parcelHelpers.export(exports, "settings_input_svideo", ()=>settings_input_svideo);
parcelHelpers.export(exports, "settings_overscan", ()=>settings_overscan);
parcelHelpers.export(exports, "settings_phone", ()=>settings_phone);
parcelHelpers.export(exports, "settings_power", ()=>settings_power);
parcelHelpers.export(exports, "settings_remote", ()=>settings_remote);
parcelHelpers.export(exports, "settings_voice", ()=>settings_voice);
parcelHelpers.export(exports, "shop_two", ()=>shop_two);
parcelHelpers.export(exports, "shop", ()=>shop);
parcelHelpers.export(exports, "shopping_bag", ()=>shopping_bag);
parcelHelpers.export(exports, "shopping_basket", ()=>shopping_basket);
parcelHelpers.export(exports, "shopping_cart", ()=>shopping_cart);
parcelHelpers.export(exports, "smart_button", ()=>smart_button);
parcelHelpers.export(exports, "source", ()=>source);
parcelHelpers.export(exports, "space_dashboard", ()=>space_dashboard);
parcelHelpers.export(exports, "speaker_notes_off", ()=>speaker_notes_off);
parcelHelpers.export(exports, "speaker_notes", ()=>speaker_notes);
parcelHelpers.export(exports, "spellcheck", ()=>spellcheck);
parcelHelpers.export(exports, "star_rate", ()=>star_rate);
parcelHelpers.export(exports, "stars", ()=>stars);
parcelHelpers.export(exports, "sticky_note", ()=>sticky_note);
parcelHelpers.export(exports, "store", ()=>store);
parcelHelpers.export(exports, "subject", ()=>subject);
parcelHelpers.export(exports, "subtitles_off", ()=>subtitles_off);
parcelHelpers.export(exports, "supervised_user_circle", ()=>supervised_user_circle);
parcelHelpers.export(exports, "supervisor_account", ()=>supervisor_account);
parcelHelpers.export(exports, "support", ()=>support);
parcelHelpers.export(exports, "swap_horiz", ()=>swap_horiz);
parcelHelpers.export(exports, "swap_horizontal_circle", ()=>swap_horizontal_circle);
parcelHelpers.export(exports, "swap_vert", ()=>swap_vert);
parcelHelpers.export(exports, "swap_vertical_circle", ()=>swap_vertical_circle);
parcelHelpers.export(exports, "swipe", ()=>swipe);
parcelHelpers.export(exports, "switch_access_shortcut_add", ()=>switch_access_shortcut_add);
parcelHelpers.export(exports, "switch_access_shortcut", ()=>switch_access_shortcut);
parcelHelpers.export(exports, "sync_alt", ()=>sync_alt);
parcelHelpers.export(exports, "system_update_alt", ()=>system_update_alt);
parcelHelpers.export(exports, "tab_unselected", ()=>tab_unselected);
parcelHelpers.export(exports, "tab", ()=>tab);
parcelHelpers.export(exports, "table_view", ()=>table_view);
parcelHelpers.export(exports, "task_alt", ()=>task_alt);
parcelHelpers.export(exports, "text_rotate_up", ()=>text_rotate_up);
parcelHelpers.export(exports, "text_rotate_vertical", ()=>text_rotate_vertical);
parcelHelpers.export(exports, "text_rotation_angledown", ()=>text_rotation_angledown);
parcelHelpers.export(exports, "text_rotation_angleup", ()=>text_rotation_angleup);
parcelHelpers.export(exports, "text_rotation_down", ()=>text_rotation_down);
parcelHelpers.export(exports, "text_rotation_none", ()=>text_rotation_none);
parcelHelpers.export(exports, "theaters", ()=>theaters);
parcelHelpers.export(exports, "thumb_down", ()=>thumb_down);
parcelHelpers.export(exports, "thumb_up", ()=>thumb_up);
parcelHelpers.export(exports, "thumbs_up_down", ()=>thumbs_up_down);
parcelHelpers.export(exports, "timeline", ()=>timeline);
parcelHelpers.export(exports, "tips_and_updates", ()=>tips_and_updates);
parcelHelpers.export(exports, "toc", ()=>toc);
parcelHelpers.export(exports, "today", ()=>today);
parcelHelpers.export(exports, "token", ()=>token);
parcelHelpers.export(exports, "toll", ()=>toll);
parcelHelpers.export(exports, "touch_app", ()=>touch_app);
parcelHelpers.export(exports, "tour", ()=>tour);
parcelHelpers.export(exports, "track_changes", ()=>track_changes);
parcelHelpers.export(exports, "translate", ()=>translate);
parcelHelpers.export(exports, "trending_down", ()=>trending_down);
parcelHelpers.export(exports, "trending_up", ()=>trending_up);
parcelHelpers.export(exports, "_try", ()=>_try);
parcelHelpers.export(exports, "turned_in_not", ()=>turned_in_not);
parcelHelpers.export(exports, "turned_in", ()=>turned_in);
parcelHelpers.export(exports, "unpublished", ()=>unpublished);
parcelHelpers.export(exports, "update_disabled", ()=>update_disabled);
parcelHelpers.export(exports, "update", ()=>update);
parcelHelpers.export(exports, "upgrade", ()=>upgrade);
parcelHelpers.export(exports, "verified_user", ()=>verified_user);
parcelHelpers.export(exports, "verified", ()=>verified);
parcelHelpers.export(exports, "vertical_split", ()=>vertical_split);
parcelHelpers.export(exports, "view_agenda", ()=>view_agenda);
parcelHelpers.export(exports, "view_array", ()=>view_array);
parcelHelpers.export(exports, "view_carousel", ()=>view_carousel);
parcelHelpers.export(exports, "view_column", ()=>view_column);
parcelHelpers.export(exports, "view_day", ()=>view_day);
parcelHelpers.export(exports, "view_headline", ()=>view_headline);
parcelHelpers.export(exports, "view_in_ar", ()=>view_in_ar);
parcelHelpers.export(exports, "view_list", ()=>view_list);
parcelHelpers.export(exports, "view_module", ()=>view_module);
parcelHelpers.export(exports, "view_quilt", ()=>view_quilt);
parcelHelpers.export(exports, "view_sidebar", ()=>view_sidebar);
parcelHelpers.export(exports, "view_stream", ()=>view_stream);
parcelHelpers.export(exports, "view_week", ()=>view_week);
parcelHelpers.export(exports, "visibility_off", ()=>visibility_off);
parcelHelpers.export(exports, "visibility", ()=>visibility);
parcelHelpers.export(exports, "voice_over_off", ()=>voice_over_off);
parcelHelpers.export(exports, "watch_later", ()=>watch_later);
parcelHelpers.export(exports, "wifi_protected_setup", ()=>wifi_protected_setup);
parcelHelpers.export(exports, "work_off", ()=>work_off);
parcelHelpers.export(exports, "work_outline", ()=>work_outline);
parcelHelpers.export(exports, "work", ()=>work);
parcelHelpers.export(exports, "wysiwyg", ()=>wysiwyg);
parcelHelpers.export(exports, "zoom_in", ()=>zoom_in);
parcelHelpers.export(exports, "zoom_out", ()=>zoom_out);
var _common = require("./common");
let drag_indicator = (0, _common.generateFunction)("drag_indicator", '<path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>');
let hourglass_disabled = (0, _common.icons).registerIcon([
    "material",
    "action"
], "hourglass_disabled", '<path d="M2.81,2.81c-0.39-0.39-1.02-0.39-1.41,0C1,3.2,1,3.83,1.39,4.22l8.19,8.19l-3,3.01C6.21,15.8,6,16.31,6,16.84V20 c0,1.1,0.9,2,2,2h8c0.86,0,1.58-0.54,1.87-1.3l1.91,1.91c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L2.81,2.81z M16,19c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-2.5l2.84-2.84L16,18.83V19z"/><path d="M8,5c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v2.5l-2.84,2.84l1.25,1.25l3-2.99C17.79,8.22,18,7.71,18,7.18V4 c0-1.11-0.9-2-2-2H8C7.14,2,6.42,2.54,6.13,3.3L8,5.17V5z"/>');
let hourglass_empty = (0, _common.icons).registerIcon([
    "material",
    "action"
], "hourglass_empty", '<path d="M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4 4 4zm-4-5l-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5l-4 4z"/>');
let hourglass_full = (0, _common.icons).registerIcon([
    "material",
    "action"
], "hourglass_full", '<path d="M6 4v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2z"/>');
let content_tab = (0, _common.icons).registerIcon([
    "material",
    "action"
], "content_tab", '<path d="m3 1h18c1.1 0 2 0.9 2 2v18c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2zm0 20h18v-18h-10v4h-8z"/>');
let split_internal_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_internal_down", '<path d="m23 3c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-4zm-2 0v11h-18v-11zm0 13v5h-18v-5z"/>');
let split_internal_left = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_internal_left", '<path d="m21 1c1.1 0 2 0.9 2 2v18c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2h4zm0 2h-11v18h11zm-13 0h-5v18h5z"/>');
let split_internal_right = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_internal_right", '<path d="m3 1c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2h-4zm0 2h11v18h-11zm13 0h5v18h-5z"/>');
let split_internal_up = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_internal_up", '<path d="m23 21c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2h18c1.1 0 2 0.9 2 2v4zm-2 0v-11h-18v11zm0-13v-5h-18v5z"/>');
let split_external_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_external_down", '<path d="m23 3c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2zm0 14c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2zm-2-14v8h-18v-8zm0 14v4h-18v-4z"/>');
let split_external_left = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_external_left", '<path d="m21 1c1.1 0 2 0.9 2 2v18c0 1.1-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2zm-14 0c1.1 0 2 0.9 2 2v18c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2zm14 2h-8v18h8zm-14 0h-4v18h4z"/>');
let split_external_right = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_external_right", '<path d="m3 1c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2h-8zm14 0c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2h-4zm-14 2h8v18h-8v-18zm14 0h4v18h-4v-18z"/>');
let split_external_up = (0, _common.icons).registerIcon([
    "material",
    "action"
], "split_external_up", '<path d="m23 21c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h18c1.1 0 2 0.9 2 2zm0-14c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h18c1.1 0 2 0.9 2 2zm-2 14v-8h-18v8zm0-14v-4h-18v4z"/>');
let delete_ = (0, _common.icons).registerIcon([
    "material",
    "action"
], "delete_", '<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
let delete_outline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "delete_outline", '<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"/>');
let delete_forever = (0, _common.icons).registerIcon([
    "material",
    "action"
], "delete_forever", '<path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M9.17,12.59c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0 L12,12.59l1.41-1.41c0.39-0.39,1.02-0.39,1.41,0s0.39,1.02,0,1.41L13.41,14l1.41,1.41c0.39,0.39,0.39,1.02,0,1.41 s-1.02,0.39-1.41,0L12,15.41l-1.41,1.41c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,14L9.17,12.59z M18,4h-2.5 l-0.71-0.71C14.61,3.11,14.35,3,14.09,3H9.91c-0.26,0-0.52,0.11-0.7,0.29L8.5,4H6C5.45,4,5,4.45,5,5s0.45,1,1,1h12 c0.55,0,1-0.45,1-1S18.55,4,18,4z"/>');
let home = (0, _common.icons).registerIcon([
    "material",
    "action"
], "home", '<path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>');
let settings = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings", '<path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z"/>');
let _3d_rotation = (0, _common.icons).registerIcon([
    "material",
    "action"
], "_3d_rotation", '<path d="M8.41 14.96c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72.2-.61.2-.97c0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46s.07-.32.07-.48c0-.36-.06-.68-.18-.96s-.29-.51-.51-.69c-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34.23-.17.38-.22.3-.08.48-.08c.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49s-.14.27-.25.37c-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4s.1.35.1.57c0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm9.3-4.72c-.18-.47-.43-.87-.75-1.2-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27s.84-.43 1.16-.76c.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57zm-1.13 1.96c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85s-.43.41-.71.53c-.29.12-.62.18-.99.18h-.91V9.11h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.41zm-1.43-8.36l1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.81-2.96-7.01-6.24-8.75C15.94.49 13.78-.13 11.34.02l3.81 3.82zm-6.3 16.31l-1.33 1.33c-3.09-1.46-5.34-4.37-5.89-7.86-.06-.41-.44-.69-.86-.62-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.67.89 3.83 1.51 6.27 1.36l-3.81-3.82z"/>');
let accessibility = (0, _common.icons).registerIcon([
    "material",
    "action"
], "accessibility", '<path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 7h-5v12c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V9H4c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let accessibility_new = (0, _common.icons).registerIcon([
    "material",
    "action"
], "accessibility_new", '<path d="M20.75 6.99c-.14-.55-.69-.87-1.24-.75-2.38.53-5.03.76-7.51.76s-5.13-.23-7.51-.76c-.55-.12-1.1.2-1.24.75-.14.56.2 1.13.75 1.26 1.61.36 3.35.61 5 .75v12c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V9c1.65-.14 3.39-.39 4.99-.75.56-.13.9-.7.76-1.26zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>');
let accessible = (0, _common.icons).registerIcon([
    "material",
    "action"
], "accessible", '<path d="m12 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0.091797 5.0137c-0.11031-0.0042188-0.2243 6.25e-4 -0.3418 0.015625-1.02 0.12-1.75 1.0403-1.75 2.0703v5.9004c0 1.1 0.9 2 2 2h5v4c0 0.55 0.45 1 1 1s1-0.45 1-1v-4.5c0-1.1-0.9-2-2-2h-3v-3.4492c1 0.83 2.4008 1.5384 3.8008 1.8184 0.62 0.13 1.1992-0.33875 1.1992-0.96875 0-0.49-0.35984-0.8907-0.83984-0.9707-1.25-0.21-2.4305-0.87977-3.2305-1.7598l-1.2891-1.4297c-0.17-0.19-0.38133-0.34117-0.61133-0.45117-0.01 0-0.009531-0.0097656-0.019531-0.0097656h-0.009766c-0.2775-0.1575-0.57727-0.25297-0.9082-0.26562zm-3.0918 5.0859c-2.28 0.46-4 2.4804-4 4.9004 0 2.76 2.24 5 5 5 2.42 0 4.4404-1.72 4.9004-4h-2.0703c-0.41 1.16-1.5201 2-2.8301 2-1.66 0-3-1.34-3-3 0-1.31 0.84-2.4101 2-2.8301v-2.0703z"/>');
let accessible_forward = (0, _common.icons).registerIcon([
    "material",
    "action"
], "accessible_forward", '<path d="m18 2.54a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-7.24 4.46c-0.81 0-1.54 0.469-1.87 1.2l-0.281 0.762c-0.21 0.56 0.11 1.17 0.68 1.33 0.49 0.14 1-0.108 1.2-0.578l0.299-0.711h2.21l-1.83 4.1c-0.6 1.33 0.39 2.9 1.85 2.9h4.98v4c0 0.55 0.45 1 1 1s1-0.45 1-1v-4.5c0-1.1-0.9-2-2-2h-1.86l1.67-3.67c0.61-1.33-0.37-2.83-1.85-2.83h-5.2zm-0.76 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2z"/>');
let account_balance = (0, _common.icons).registerIcon([
    "material",
    "action"
], "account_balance", '<path d="M4 11.5v4c0 .83.67 1.5 1.5 1.5S7 16.33 7 15.5v-4c0-.83-.67-1.5-1.5-1.5S4 10.67 4 11.5zm6 0v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zM3.5 22h16c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5S2.67 22 3.5 22zM16 11.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zM10.57 1.49l-7.9 4.16c-.41.21-.67.64-.67 1.1C2 7.44 2.56 8 3.25 8h16.51C20.44 8 21 7.44 21 6.75c0-.46-.26-.89-.67-1.1l-7.9-4.16c-.58-.31-1.28-.31-1.86 0z"/>');
let account_balance_wallet = (0, _common.icons).registerIcon([
    "material",
    "action"
], "account_balance_wallet", '<path d="M10 16V8c0-1.1.89-2 2-2h9V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-1h-9c-1.11 0-2-.9-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>');
let account_box = (0, _common.icons).registerIcon([
    "material",
    "action"
], "account_box", '<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>');
let account_circle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "account_circle", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>');
let add_shopping_cart = (0, _common.icons).registerIcon([
    "material",
    "action"
], "add_shopping_cart", '<path d="M12,9L12,9c0.55,0,1-0.45,1-1V6h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2H9 C8.45,4,8,4.45,8,5v0c0,0.55,0.45,1,1,1h2v2C11,8.55,11.45,9,12,9z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18 z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14 c0.25-0.48,0.08-1.08-0.4-1.34v0c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.27,2H2C1.45,2,1,2.45,1,3v0c0,0.55,0.45,1,1,1h1 l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7L8.1,13z"/>');
let add_task = (0, _common.icons).registerIcon([
    "material",
    "action"
], "add_task", '<path d="M21.29,5.89l-10,10c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0 l2.12,2.12l9.29-9.29c0.39-0.39,1.02-0.39,1.41,0v0C21.68,4.87,21.68,5.5,21.29,5.89z M12,20c-4.71,0-8.48-4.09-7.95-8.9 c0.39-3.52,3.12-6.41,6.61-6.99c1.81-0.3,3.53,0.02,4.99,0.78c0.39,0.2,0.86,0.13,1.17-0.18l0,0c0.48-0.48,0.36-1.29-0.24-1.6 C15.11,2.36,13.45,1.95,11.68,2c-5.14,0.16-9.41,4.34-9.67,9.47C1.72,17.24,6.3,22,12,22c1.2,0,2.34-0.21,3.41-0.6 c0.68-0.25,0.87-1.13,0.35-1.65l0,0c-0.27-0.27-0.68-0.37-1.04-0.23C13.87,19.83,12.95,20,12,20z M19,15h-2c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-2c0-0.55-0.45-1-1-1 h0c-0.55,0-1,0.45-1,1V15z"/>');
let addchart_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "addchart_black", '<path d="M11,10c0-0.55,0.45-1,1-1s1,0.45,1,1v7h-2V10z M20,13c-0.55,0-1,0.45-1,1v5H5V5h5c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H5 C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-5C21,13.45,20.55,13,20,13z M21,5h-2V3c0-0.55-0.45-1-1-1s-1,0.45-1,1v2 h-2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V7h2c0.55,0,1-0.45,1-1C22,5.45,21.55,5,21,5z M16,13 c-0.55,0-1,0.45-1,1v3h2v-3C17,13.45,16.55,13,16,13z M7,12v5h2v-5c0-0.55-0.45-1-1-1S7,11.45,7,12z"/>');
let admin_panel_settings = (0, _common.icons).registerIcon([
    "material",
    "action"
], "admin_panel_settings", '<path d="m10.5 3.19c-0.272 0-0.546 0.0541-0.801 0.164l-5.5 2.4c-0.73 0.32-1.2 1.04-1.2 1.83v3.6c0 4.54 3.2 8.79 7.5 9.82 0.55-0.13 1.08-0.321 1.6-0.551-0.69-0.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6 0.34 0 0.67 0.0398 1 0.0898v-3.51c0-0.8-0.469-1.52-1.2-1.83l-5.5-2.4c-0.255-0.11-0.528-0.164-0.801-0.164zm6.5 9.81c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c0.62 0 1.12 0.509 1.12 1.12s-0.509 1.12-1.12 1.12-1.12-0.509-1.12-1.12 0.499-1.12 1.12-1.12zm0 3.12c0.73 0 2.19 0.36 2.24 1.08-0.5 0.71-1.31 1.17-2.24 1.17s-1.74-0.46-2.24-1.17c0.05-0.72 1.51-1.08 2.24-1.08z"/>');
let ads_click = (0, _common.icons).registerIcon([
    "material",
    "action"
], "ads_click", '<path d="M11.71,17.99C8.53,17.84,6,15.22,6,12c0-3.31,2.69-6,6-6c3.22,0,5.84,2.53,5.99,5.71l-2.1-0.63C15.48,9.31,13.89,8,12,8 c-2.21,0-4,1.79-4,4c0,1.89,1.31,3.48,3.08,3.89L11.71,17.99z M22,12c0,0.3-0.01,0.6-0.04,0.9l-1.97-0.59C20,12.21,20,12.1,20,12 c0-4.42-3.58-8-8-8s-8,3.58-8,8s3.58,8,8,8c0.1,0,0.21,0,0.31-0.01l0.59,1.97C12.6,21.99,12.3,22,12,22C6.48,22,2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.23,16.26l2.27-0.76c0.46-0.15,0.45-0.81-0.01-0.95l-7.6-2.28 c-0.38-0.11-0.74,0.24-0.62,0.62l2.28,7.6c0.14,0.47,0.8,0.48,0.95,0.01l0.76-2.27l3.91,3.91c0.2,0.2,0.51,0.2,0.71,0l1.27-1.27 c0.2-0.2,0.2-0.51,0-0.71L18.23,16.26z"/>');
let alarm_add = (0, _common.icons).registerIcon([
    "material",
    "action"
], "alarm_add", '<path d="M21.18 5.01L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm3-8h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
let alarm_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "alarm_black", '<path d="M15.87 15.25l-3.37-2V8.72c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24.21-.35.1-.8-.25-1zm5.31-10.24L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>');
let alarm_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "alarm_off", '<path d="M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7 0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52 0-4.97-4.03-9-9-9-1.25 0-2.44.26-3.53.72l1.57 1.57zm-6.33-3.5c-.38-.38-1-.38-1.39 0l-.02.03c-.39.39-.39 1.01 0 1.39l.68.68-.17.14c-.42.34-.47.96-.13 1.38l.03.03c.35.42.96.47 1.38.12l.31-.25.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.03 9 9 9 2.25 0 4.31-.83 5.89-2.2l1.41 1.41c.38.38 1 .38 1.39 0l.03-.03c.38-.38.38-1 0-1.39l-17.01-17zM12 20c-3.86 0-7-3.14-7-7 0-1.7.61-3.26 1.62-4.47l9.85 9.85C15.26 19.39 13.7 20 12 20zm7.91-13.44c.42.35 1.03.29 1.38-.12l.03-.03c.35-.42.29-1.03-.12-1.38l-3.1-2.59c-.42-.35-1.03-.29-1.38.12l-.03.03c-.35.42-.29 1.03.12 1.38l3.1 2.59zM7.43 3.68c.18-.34.15-.77-.11-1.09l-.03-.03c-.3-.36-.8-.43-1.2-.22l1.34 1.34z"/>');
let alarm_on = (0, _common.icons).registerIcon([
    "material",
    "action"
], "alarm_on", '<path d="M14.94 10.11l-4.4 4.42-1.6-1.6c-.29-.29-.77-.29-1.06 0-.29.29-.29.77 0 1.06L10 16.11c.29.29.77.29 1.06 0L16 11.17c.29-.29.29-.77 0-1.06-.29-.29-.77-.29-1.06 0zm6.24-5.1L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>');
let all_inbox = (0, _common.icons).registerIcon([
    "material",
    "action"
], "all_inbox", '<path d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6h-3.14c-.47 0-.84.33-.97.78C14.53 11.04 13.35 12 12 12s-2.53-.96-2.89-2.22c-.13-.45-.5-.78-.97-.78H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3zm-3.13 7H20c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2c0-.55.45-1 1-1h4.13c.47 0 .85.34.98.8.35 1.27 1.51 2.2 2.89 2.2s2.54-.93 2.89-2.2c.13-.46.51-.8.98-.8z"/>');
let all_out = (0, _common.icons).registerIcon([
    "material",
    "action"
], "all_out", '<path d="M4 4.5V8l4-4H4.5c-.28 0-.5.22-.5.5zM16 4l4 4V4.5c0-.28-.22-.5-.5-.5H16zm4 15.5V16l-4 4h3.5c.28 0 .5-.22.5-.5zM4.5 20H8l-4-4v3.5c0 .28.22.5.5.5zM19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>');
let analytics_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "analytics_black", '<path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8,17L8,17c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1s1,0.45,1,1v3C9,16.55,8.55,17,8,17z M12,17L12,17c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1 C13,16.55,12.55,17,12,17z M12,12c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,12,12,12z M16,17L16,17c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1s1,0.45,1,1v8C17,16.55,16.55,17,16,17z"/>');
let anchor_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "anchor_black", '<path d="M13,9V7.82C14.16,7.4,15,6.3,15,5c0-1.65-1.35-3-3-3S9,3.35,9,5c0,1.3,0.84,2.4,2,2.82V9H9c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h2v8.92c-2.22-0.33-4.59-1.68-5.55-3.37l1.14-1.14c0.22-0.22,0.19-0.57-0.05-0.75L3.8,12.6 C3.47,12.35,3,12.59,3,13v2c0,3.88,4.92,7,9,7s9-3.12,9-7v-2c0-0.41-0.47-0.65-0.8-0.4l-2.74,2.05c-0.24,0.18-0.27,0.54-0.05,0.75 l1.14,1.14c-0.96,1.69-3.33,3.04-5.55,3.37V11h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H13z M12,4c0.55,0,1,0.45,1,1s-0.45,1-1,1 s-1-0.45-1-1S11.45,4,12,4z"/>');
let announcement_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "announcement_black", '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 9c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>');
let api_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "api_black", '<path d="M13,13L13,13c-0.56,0.56-1.45,0.56-2,0.01L11,13c-0.55-0.55-0.55-1.44,0-1.99L11,11c0.55-0.55,1.44-0.55,1.99,0L13,11 C13.55,11.55,13.55,12.45,13,13z M12,6l2.12,2.12l2.5-2.5l-3.2-3.2c-0.78-0.78-2.05-0.78-2.83,0l-3.2,3.2l2.5,2.5L12,6z M6,12 l2.12-2.12l-2.5-2.5l-3.2,3.2c-0.78,0.78-0.78,2.05,0,2.83l3.2,3.2l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5l3.2-3.2 c0.78-0.78,0.78-2.05,0-2.83l-3.2-3.2l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5l3.2,3.2c0.78,0.78,2.05,0.78,2.83,0l3.2-3.2 l-2.5-2.5L12,18z"/>');
let app_blocking = (0, _common.icons).registerIcon([
    "material",
    "action"
], "app_blocking", '<path d="m7 1c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h10c1.1 0 2-0.9 2-2v-2-1-1h-2v1h-10v-12h10v1h2v-1-1-2c0-1.1-0.9-2-2-2h-10zm11 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.5c0.42 0 0.8 0.109 1.15 0.289l-3.36 3.36c-0.18-0.35-0.289-0.73-0.289-1.15 0-1.38 1.12-2.5 2.5-2.5zm2.21 1.35c0.18 0.35 0.289 0.73 0.289 1.15 0 1.38-1.12 2.5-2.5 2.5-0.42 0-0.8-0.109-1.15-0.289l3.36-3.36z"/>');
let arrow_circle_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "arrow_circle_down", '<path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1l0,3H9.21 c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.79c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79c0.31-0.31,0.09-0.85-0.35-0.85H13z"/>');
let arrow_circle_left = (0, _common.icons).registerIcon([
    "material",
    "action"
], "arrow_circle_left", '<path d="M2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2C6.48,2,2,6.48,2,12z M12,9.21L12,11l3,0c0.55,0,1,0.45,1,1 s-0.45,1-1,1l-3,0l0,1.79c0,0.45-0.54,0.67-0.85,0.35l-2.79-2.79c-0.2-0.2-0.2-0.51,0-0.71l2.79-2.79C11.46,8.54,12,8.76,12,9.21z"/>');
let arrow_circle_right = (0, _common.icons).registerIcon([
    "material",
    "action"
], "arrow_circle_right", '<path d="M22,12c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12s4.48,10,10,10C17.52,22,22,17.52,22,12z M12,14.79V13H9 c-0.55,0-1-0.45-1-1s0.45-1,1-1h3V9.21c0-0.45,0.54-0.67,0.85-0.35l2.79,2.79c0.2,0.2,0.2,0.51,0,0.71l-2.79,2.79 C12.54,15.46,12,15.24,12,14.79z"/>');
let arrow_circle_up = (0, _common.icons).registerIcon([
    "material",
    "action"
], "arrow_circle_up", '<path d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1l0-3h1.79 c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79c-0.2-0.2-0.51-0.2-0.71,0l-2.79,2.79C8.54,11.46,8.76,12,9.21,12H11z"/>');
let arrow_right_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "arrow_right_alt", '<path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/>');
let article_black = (0, _common.icons).registerIcon([
    "material",
    "action"
], "article_black", '<path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13,17H8c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1h5c0.55,0,1,0.45,1,1C14,16.55,13.55,17,13,17z M16,13H8c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h8 c0.55,0,1,0.45,1,1C17,12.55,16.55,13,16,13z M16,9H8C7.45,9,7,8.55,7,8c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1 C17,8.55,16.55,9,16,9z"/>');
let aspect_ratio = (0, _common.icons).registerIcon([
    "material",
    "action"
], "aspect_ratio", '<path d="M18 12c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM7 9h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16.01H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.02c0 .55-.45 1-1 1z"/>');
let assessment = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assessment", '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/>');
let assignment = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assignment", '<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let assignment_ind = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assignment_ind", '<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>');
let assignment_late = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assignment_late", '<path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5 C21,3.9,20.1,3,19,3z M12,2.75c0.41,0,0.75,0.34,0.75,0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75 C11.25,3.09,11.59,2.75,12,2.75z M12,13L12,13c-0.55,0-1-0.45-1-1V8c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v4 C13,12.55,12.55,13,12,13z M13,16c0,0.55-0.45,1-1,1s-1-0.45-1-1c0-0.55,0.45-1,1-1S13,15.45,13,16z"/>');
let assignment_return = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assignment_return", '<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-4.65-4.65c-.2-.2-.2-.51 0-.71L12 8v3h4v4z"/>');
let assignment_returned = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assignment_returned", '<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-.35 14.65L7 13h3V9h4v4h3l-4.65 4.65c-.19.19-.51.19-.7 0z"/>');
let assignment_turned_in = (0, _common.icons).registerIcon([
    "material",
    "action"
], "assignment_turned_in", '<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.29 16.29L6.7 13.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l5.88-5.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-6.59 6.59c-.38.39-1.02.39-1.41 0z"/>');
let autorenew = (0, _common.icons).registerIcon([
    "material",
    "action"
], "autorenew", '<path d="M12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V4c-4.42 0-8 3.58-8 8 0 1.04.2 2.04.57 2.95.27.67 1.13.85 1.64.34.27-.27.38-.68.23-1.04C6.15 13.56 6 12.79 6 12c0-3.31 2.69-6 6-6zm5.79 2.71c-.27.27-.38.69-.23 1.04.28.7.44 1.46.44 2.25 0 3.31-2.69 6-6 6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35V20c4.42 0 8-3.58 8-8 0-1.04-.2-2.04-.57-2.95-.27-.67-1.13-.85-1.64-.34z"/>');
let backup = (0, _common.icons).registerIcon([
    "material",
    "action"
], "backup", '<path d="M19,11c0-3.87-3.13-7-7-7C8.78,4,6.07,6.18,5.26,9.15C2.82,9.71,1,11.89,1,14.5C1,17.54,3.46,20,6.5,20 c1.76,0,10.25,0,12,0l0,0c2.49-0.01,4.5-2.03,4.5-4.52C23,13.15,21.25,11.26,19,11z M13,13v2c0,0.55-0.45,1-1,1h0 c-0.55,0-1-0.45-1-1v-2H9.21c-0.45,0-0.67-0.54-0.35-0.85l2.79-2.79c0.2-0.2,0.51-0.2,0.71,0l2.79,2.79 c0.31,0.31,0.09,0.85-0.35,0.85H13z"/>');
let backup_table = (0, _common.icons).registerIcon([
    "material",
    "action"
], "backup_table", '<path d="m8 2c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2h-12zm0 2h12v5h-12v-5zm-5 2c-0.55 0-1 0.45-1 1v13c0 1.1 0.9 2 2 2h13c0.55 0 1-0.45 1-1s-0.45-1-1-1h-13v-13c0-0.55-0.45-1-1-1zm5 5h5v5h-5v-5zm7 0h5v5h-5v-5z"/>');
let batch_prediction = (0, _common.icons).registerIcon([
    "material",
    "action"
], "batch_prediction", '<path d="M17,8H7c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V10C19,8.9,18.1,8,17,8z M12,20.5L12,20.5 c-0.55,0-1-0.45-1-1V19h2v0.5C13,20.05,12.55,20.5,12,20.5z M13,18h-2c0-1.5-2.5-3-2.5-5c0-1.93,1.57-3.5,3.5-3.5 c1.93,0,3.5,1.57,3.5,3.5C15.5,15,13,16.5,13,18z M18,6.5H6v0C6,5.67,6.67,5,7.5,5h9C17.33,5,18,5.67,18,6.5L18,6.5z M17,3.5H7v0 C7,2.67,7.67,2,8.5,2h7C16.33,2,17,2.67,17,3.5L17,3.5z"/>');
let book = (0, _common.icons).registerIcon([
    "material",
    "action"
], "book", '<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>');
let book_online = (0, _common.icons).registerIcon([
    "material",
    "action"
], "book_online", '<path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,6h10v12H7V6z M16,11V9.14 C16,8.51,15.55,8,15,8H9C8.45,8,8,8.51,8,9.14l0,1.96c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1l0,1.76C8,15.49,8.45,16,9,16h6 c0.55,0,1-0.51,1-1.14V13c-0.55,0-1-0.45-1-1C15,11.45,15.45,11,16,11z M12,14.5L12,14.5c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v0C12.5,14.28,12.28,14.5,12,14.5z M12,12.5L12,12.5c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v0C12.5,12.28,12.28,12.5,12,12.5z M12,10.5L12,10.5c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v0C12.5,10.28,12.28,10.5,12,10.5z"/>');
let bookmark_add = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bookmark_add", '<path d="M21,6c0,0.55-0.45,1-1,1h-1v1c0,0.55-0.45,1-1,1s-1-0.45-1-1V7h-1c-0.55,0-1-0.45-1-1s0.45-1,1-1h1V4c0-0.55,0.45-1,1-1 s1,0.45,1,1v1h1C20.55,5,21,5.45,21,6z M19,19.48c0,0.72-0.73,1.2-1.39,0.92L12,18l-5.61,2.4C5.73,20.69,5,20.2,5,19.48V5 c0-1.1,0.9-2,2-2l7,0c-0.63,0.84-1,1.87-1,3c0,2.76,2.24,5,5,5c0.34,0,0.68-0.03,1-0.1V19.48z"/>');
let bookmark_added = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bookmark_added", '<path d="M5,5c0-1.1,0.9-2,2-2l7,0c-0.63,0.84-1,1.87-1,3c0,2.76,2.24,5,5,5c0.34,0,0.68-0.03,1-0.1v8.58c0,0.72-0.73,1.2-1.39,0.92 L12,18l-5.61,2.4C5.73,20.69,5,20.2,5,19.48V5z M22.07,3.34c0.39,0.39,0.39,1.02,0,1.41l-3.54,3.54c-0.39,0.39-1.02,0.39-1.41,0 l-1.41-1.41c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71l2.83-2.83C21.05,2.95,21.68,2.95,22.07,3.34z"/>');
let bookmark = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bookmark", '<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>');
let bookmark_border = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bookmark_border", '<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"/>');
let bookmark_remove = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bookmark_remove", '<path d="M21,6c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1s0.45-1,1-1h4C20.55,5,21,5.45,21,6z M19,10.9c-0.32,0.07-0.66,0.1-1,0.1 c-2.76,0-5-2.24-5-5c0-1.13,0.37-2.16,1-3L7,3C5.9,3,5,3.9,5,5v14.48c0,0.72,0.73,1.2,1.39,0.92L12,18l5.61,2.4 c0.66,0.28,1.39-0.2,1.39-0.92V10.9z"/>');
let bookmarks = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bookmarks", '<path d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/>');
let bug_report = (0, _common.icons).registerIcon([
    "material",
    "action"
], "bug_report", '<path d="M19 8h-1.81c-.45-.78-1.07-1.45-1.82-1.96l.93-.93c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l.92.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1zm-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let build = (0, _common.icons).registerIcon([
    "material",
    "action"
], "build", '<path d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67L8.28 5.3c.39.39.39 1.02 0 1.41L6.69 8.3c-.39.4-1.02.4-1.41 0L1.65 4.67C.48 7.1.89 10.09 2.9 12.1c1.86 1.86 4.58 2.35 6.89 1.48l7.96 7.96c1.03 1.03 2.69 1.03 3.71 0 1.03-1.03 1.03-2.69 0-3.71L13.54 9.9c.92-2.34.44-5.1-1.45-6.99z"/>');
let build_circle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "build_circle", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M16.54,15.85l-0.69,0.69c-0.39,0.39-1.02,0.39-1.41,0l-3.05-3.05c-1.22,0.43-2.64,0.17-3.62-0.81 c-1.11-1.11-1.3-2.79-0.59-4.1l2.35,2.35l1.41-1.41L8.58,7.17c1.32-0.71,2.99-0.52,4.1,0.59c0.98,0.98,1.24,2.4,0.81,3.62 l3.05,3.05C16.93,14.82,16.93,15.46,16.54,15.85z" fill-rule="evenodd"/>');
let cached = (0, _common.icons).registerIcon([
    "material",
    "action"
], "cached", '<path d="M18.65 8.35l-2.79 2.79c-.32.32-.1.86.35.86H18c0 3.31-2.69 6-6 6-.79 0-1.56-.15-2.25-.44-.36-.15-.77-.04-1.04.23-.51.51-.33 1.37.34 1.64.91.37 1.91.57 2.95.57 4.42 0 8-3.58 8-8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01zM6 12c0-3.31 2.69-6 6-6 .79 0 1.56.15 2.25.44.36.15.77.04 1.04-.23.51-.51.33-1.37-.34-1.64C14.04 4.2 13.04 4 12 4c-4.42 0-8 3.58-8 8H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85H6z"/>');
let calendar_today = (0, _common.icons).registerIcon([
    "material",
    "action"
], "calendar_today", '<path d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1z"/>');
let calendar_view_day = (0, _common.icons).registerIcon([
    "material",
    "action"
], "calendar_view_day", '<path d="M5,7h14c1.1,0,2,0.9,2,2v6c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V9C3,7.9,3.9,7,5,7z M4,3h16c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H4C3.45,5,3,4.55,3,4v0C3,3.45,3.45,3,4,3z M4,19h16c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1 v0C3,19.45,3.45,19,4,19z"/>');
let calendar_view_month = (0, _common.icons).registerIcon([
    "material",
    "action"
], "calendar_view_month", '<path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z"/>');
let calendar_view_week = (0, _common.icons).registerIcon([
    "material",
    "action"
], "calendar_view_week", '<path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M13,6h2.5v12H13V6z M11,18H8.5V6H11 V18z M4,6h2.5v12H4V6z M20,18h-2.5V6H20V18z"/>');
let camera_enhance = (0, _common.icons).registerIcon([
    "material",
    "action"
], "camera_enhance", '<path d="M20 5h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-9l-1.25 2.75L8 13l2.75 1.25L12 17l1.25-2.75L16 13l-2.75-1.25z"/>');
let cancel_schedule_send = (0, _common.icons).registerIcon([
    "material",
    "action"
], "cancel_schedule_send", '<path d="m2.03 3.52c-0.535-0.014-1.02 0.417-1.02 0.994l-0.00977 4.69c0 0.47 0.329 0.88 0.779 0.98l8.22 1.82-8.22 1.83c-0.45 0.1-0.779 0.501-0.779 0.971l0.00977 4.68c0 0.72 0.731 1.2 1.39 0.92l6.68-2.86c0.51 3.65 3.63 6.46 7.42 6.46 4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5c-0.42 0-0.83 0.0394-1.24 0.109l-12.9-5.51c-0.124-0.0544-0.25-0.0808-0.373-0.084zm14.5 7.48c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5-5.5-2.47-5.5-5.5 2.47-5.5 5.5-5.5zm-1.77 3.23c-0.128 0-0.254 0.0504-0.354 0.15-0.2 0.2-0.2 0.509 0 0.709l1.41 1.41-1.41 1.41c-0.2 0.2-0.2 0.509 0 0.709s0.509 0.2 0.709 0l1.41-1.41 1.41 1.41c0.2 0.2 0.509 0.2 0.709 0s0.2-0.509 0-0.709l-1.41-1.41 1.41-1.41c0.2-0.2 0.2-0.519 0-0.709-0.2-0.2-0.509-0.2-0.709 0l-1.41 1.41-1.41-1.41c-0.1-0.1-0.228-0.15-0.355-0.15z"/>');
let card_travel = (0, _common.icons).registerIcon([
    "material",
    "action"
], "card_travel", '<path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V9c0-.55.45-1 1-1h2v1c0 .55.45 1 1 1s1-.45 1-1V8h6v1c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1 .45 1 1v5z"/>');
let change_history = (0, _common.icons).registerIcon([
    "material",
    "action"
], "change_history", '<path d="M12 7.77L18.39 18H5.61L12 7.77m-.85-2.41l-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4c.79 0 1.26-.86.85-1.53l-8.2-13.11c-.39-.63-1.31-.63-1.7 0z"/>');
let check_circle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "check_circle", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/>');
let check_circle_outline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "check_circle_outline", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/>');
let circle_notifications = (0, _common.icons).registerIcon([
    "material",
    "action"
], "circle_notifications", '<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18.5c-0.83,0-1.5-0.67-1.5-1.5h3 C13.5,17.83,12.83,18.5,12,18.5z M16,16H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1l0-3c0-1.86,1.28-3.41,3-3.86V6.5 c0-0.55,0.45-1,1-1s1,0.45,1,1v0.64c1.72,0.45,3,2,3,3.86l0,3c0.55,0,1,0.45,1,1v0C17,15.55,16.55,16,16,16z"/>');
let _class = (0, _common.icons).registerIcon([
    "material",
    "action"
], "_class", '<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>');
let close_fullscreen = (0, _common.icons).registerIcon([
    "material",
    "action"
], "close_fullscreen", '<path d="M21.29,4.12l-4.59,4.59l1.59,1.59c0.63,0.63,0.18,1.71-0.71,1.71H13c-0.55,0-1-0.45-1-1V6.41c0-0.89,1.08-1.34,1.71-0.71 l1.59,1.59l4.59-4.59c0.39-0.39,1.02-0.39,1.41,0v0C21.68,3.1,21.68,3.73,21.29,4.12z M4.12,21.29l4.59-4.59l1.59,1.59 c0.63,0.63,1.71,0.18,1.71-0.71V13c0-0.55-0.45-1-1-1H6.41c-0.89,0-1.34,1.08-0.71,1.71l1.59,1.59l-4.59,4.59 c-0.39,0.39-0.39,1.02,0,1.41l0,0C3.1,21.68,3.73,21.68,4.12,21.29z"/>');
let code = (0, _common.icons).registerIcon([
    "material",
    "action"
], "code", '<path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z"/>');
let code_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "code_off", '<path d="M19.17,12l-3.88-3.88c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0l4.59,4.59c0.39,0.39,0.39,1.02,0,1.41 l-2.88,2.88L17,14.17L19.17,12z M2.1,4.93l3.49,3.49l-2.88,2.88c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0 l0,0c0.39-0.39,0.39-1.02,0-1.41L4.83,12L7,9.83L19.07,21.9c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51 c-0.39-0.39-1.02-0.39-1.41,0l0,0C1.71,3.91,1.71,4.54,2.1,4.93z"/>');
let comment_bank = (0, _common.icons).registerIcon([
    "material",
    "action"
], "comment_bank", '<path d="M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.24,11.55 L16.5,10.5l-1.74,1.05c-0.33,0.2-0.76-0.04-0.76-0.43V4h5v7.12C19,11.51,18.58,11.75,18.24,11.55z"/>');
let commute = (0, _common.icons).registerIcon([
    "material",
    "action"
], "commute", '<path d="M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-.77.77c-.28.28-.28.72 0 1s.72.28 1 0L7 18h2v-5H4.5c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5V8h2V7c0-1.66-1.34-3-3-3zM5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s.99-.44 1-.99L22 13.77l-1.43-4.11zm-7.8.34h6.48c.21 0 .4.14.47.34l.69 2c.11.32-.13.66-.47.66h-7.85c-.34 0-.58-.34-.47-.66l.69-2c.05-.2.24-.34.46-.34zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>');
let compare_arrows = (0, _common.icons).registerIcon([
    "material",
    "action"
], "compare_arrows", '<path d="M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.31.85.09.85-.36z"/>');
let compress = (0, _common.icons).registerIcon([
    "material",
    "action"
], "compress", '<path d="m12 1c-0.55 0-1 0.45-1 1v2h-1.79c-0.45 0-0.671 0.54-0.361 0.85l2.79 2.79c0.2 0.2 0.509 0.2 0.709 0l2.79-2.79c0.32-0.31 0.0984-0.85-0.352-0.85h-1.79v-2c0-0.55-0.45-1-1-1zm-7 8c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-14zm0 3c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-14zm6.99 3.21c-0.128 0-0.254 0.0484-0.354 0.148l-2.79 2.79c-0.31 0.31-0.0887 0.85 0.361 0.85h1.79v2c0 0.55 0.45 1 1 1s1-0.45 1-1v-2h1.79c0.45 0 0.672-0.54 0.352-0.85l-2.79-2.79c-0.1-0.1-0.228-0.148-0.355-0.148z"/>');
let contact_page = (0, _common.icons).registerIcon([
    "material",
    "action"
], "contact_page", '<path d="M13.17,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.83c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83 C14.21,2.21,13.7,2,13.17,2z M12,10c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2C10,10.9,10.9,10,12,10z M16,18H8v-0.57 c0-0.81,0.48-1.53,1.22-1.85C10.07,15.21,11.01,15,12,15c0.99,0,1.93,0.21,2.78,0.58C15.52,15.9,16,16.62,16,17.43V18z"/>');
let contact_support = (0, _common.icons).registerIcon([
    "material",
    "action"
], "contact_support", '<path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm.4-4.78c-.01.01-.02.03-.03.05-.05.08-.1.16-.14.24-.02.03-.03.07-.04.11-.03.07-.06.14-.08.21-.07.21-.1.43-.1.68H10.5c0-.51.08-.94.2-1.3 0-.01 0-.02.01-.03.01-.04.04-.06.05-.1.06-.16.13-.3.22-.44.03-.05.07-.1.1-.15.03-.04.05-.09.08-.12l.01.01c.84-1.1 2.21-1.44 2.32-2.68.09-.98-.61-1.93-1.57-2.13-1.04-.22-1.98.39-2.3 1.28-.14.36-.47.65-.88.65h-.2c-.6 0-1.04-.59-.87-1.17.55-1.82 2.37-3.09 4.43-2.79 1.69.25 3.04 1.64 3.33 3.33.44 2.44-1.63 3.03-2.53 4.35z"/>');
let contactless = (0, _common.icons).registerIcon([
    "material",
    "action"
], "contactless", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M8.75,13.68 c-0.13,0.43-0.62,0.63-1.02,0.45l0,0c-0.34-0.16-0.51-0.54-0.4-0.9c0.12-0.41,0.18-0.83,0.17-1.24c-0.01-0.41-0.06-0.8-0.17-1.18 c-0.1-0.36,0.06-0.75,0.4-0.9l0,0c0.42-0.19,0.91,0.04,1.04,0.49c0.15,0.51,0.22,1.03,0.23,1.57C9,12.53,8.92,13.11,8.75,13.68z M11.89,15.27c-0.17,0.41-0.67,0.57-1.06,0.35l0,0c-0.33-0.19-0.46-0.59-0.32-0.94c0.33-0.77,0.49-1.63,0.49-2.56 c0-0.96-0.18-1.89-0.53-2.78c-0.14-0.36,0.02-0.76,0.36-0.94l0,0c0.39-0.2,0.87-0.02,1.03,0.39c0.42,1.06,0.63,2.18,0.63,3.33 C12.51,13.25,12.3,14.31,11.89,15.27z M15,16.6c-0.17,0.4-0.64,0.58-1.02,0.39l0,0c-0.35-0.17-0.52-0.59-0.37-0.95 c0.59-1.39,0.89-2.75,0.89-4.06c0-1.31-0.3-2.65-0.88-4.01c-0.16-0.36,0.01-0.78,0.36-0.95C14.37,6.82,14.83,7,15,7.4 c0.66,1.54,1,3.08,1,4.58C16,13.48,15.66,15.04,15,16.6z"/>');
let copyright = (0, _common.icons).registerIcon([
    "material",
    "action"
], "copyright", '<path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>');
let credit_card = (0, _common.icons).registerIcon([
    "material",
    "action"
], "credit_card", '<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1zm1-10H4V6h16v2z"/>');
let credit_card_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "credit_card_off", '<path d="M21.19,21.19L2.81,2.81c-0.39-0.39-1.02-0.39-1.41,0l0,0C1,3.2,1,3.83,1.39,4.22l0.84,0.84C2.09,5.34,2.01,5.66,2.01,6L2,18 c0,1.11,0.89,2,2,2h13.17l2.61,2.61c0.39,0.39,1.02,0.39,1.41,0v0C21.58,22.22,21.58,21.58,21.19,21.19z M4,12V8h1.17l4,4H4z M6.83,4H20c1.11,0,2,0.89,2,2v12c0,0.34-0.08,0.66-0.23,0.94L14.83,12H20V8h-9.17L6.83,4z"/>');
let dangerous = (0, _common.icons).registerIcon([
    "material",
    "action"
], "dangerous", '<path d="M14.9,3H9.1C8.57,3,8.06,3.21,7.68,3.59l-4.1,4.1C3.21,8.06,3,8.57,3,9.1v5.8c0,0.53,0.21,1.04,0.59,1.41l4.1,4.1 C8.06,20.79,8.57,21,9.1,21h5.8c0.53,0,1.04-0.21,1.41-0.59l4.1-4.1C20.79,15.94,21,15.43,21,14.9V9.1c0-0.53-0.21-1.04-0.59-1.41 l-4.1-4.1C15.94,3.21,15.43,3,14.9,3z M15.54,15.54L15.54,15.54c-0.39,0.39-1.02,0.39-1.41,0L12,13.41l-2.12,2.12 c-0.39,0.39-1.02,0.39-1.41,0l0,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,12L8.46,9.88c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0L12,10.59l2.12-2.12c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41L13.41,12l2.12,2.12 C15.93,14.51,15.93,15.15,15.54,15.54z"/>');
let dashboard = (0, _common.icons).registerIcon([
    "material",
    "action"
], "dashboard", '<path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/>');
let dashboard_customize = (0, _common.icons).registerIcon([
    "material",
    "action"
], "dashboard_customize", '<path d="M4,3h6c0.55,0,1,0.45,1,1v6c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1V4C3,3.45,3.45,3,4,3z M14,3h6c0.55,0,1,0.45,1,1v6 c0,0.55-0.45,1-1,1h-6c-0.55,0-1-0.45-1-1V4C13,3.45,13.45,3,14,3z M4,13h6c0.55,0,1,0.45,1,1v6c0,0.55-0.45,1-1,1H4 c-0.55,0-1-0.45-1-1v-6C3,13.45,3.45,13,4,13z M17,13L17,13c-0.55,0-1,0.45-1,1v2h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v2 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-2C18,13.45,17.55,13,17,13z"/>');
let data_exploration = (0, _common.icons).registerIcon([
    "material",
    "action"
], "data_exploration", '<path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,1.33,0.26,2.61,0.74,3.77l4.61-4.62c0.37-0.37,0.95-0.39,1.35-0.06l2.6,2.19 L14.58,10H14c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1s-1-0.45-1-1v-0.58l-3.94,3.93 c-0.37,0.37-0.96,0.39-1.35,0.05l-2.59-2.19l-4.4,4.4C5.52,20.26,8.56,22,12,22h8c1.1,0,2-0.9,2-2V12z M19.5,20.5 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S20.05,20.5,19.5,20.5z"/>');
let date_range = (0, _common.icons).registerIcon([
    "material",
    "action"
], "date_range", '<path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>');
let description = (0, _common.icons).registerIcon([
    "material",
    "action"
], "description", '<path d="M14.59 2.59c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM15 18H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm-2-6V3.5L18.5 9H14c-.55 0-1-.45-1-1z"/>');
let disabled_by_default = (0, _common.icons).registerIcon([
    "material",
    "action"
], "disabled_by_default", '<path d="M3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z M16.3,16.29L16.3,16.29 c-0.39,0.39-1.02,0.39-1.41,0L12,13.41l-2.89,2.89c-0.39,0.39-1.02,0.39-1.41,0l0,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,12L7.7,9.11 c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0L12,10.59l2.89-2.88c0.39-0.39,1.02-0.39,1.41,0l0,0 c0.39,0.39,0.39,1.02,0,1.41L13.41,12l2.89,2.88C16.68,15.27,16.68,15.91,16.3,16.29z"/>');
let disabled_visible = (0, _common.icons).registerIcon([
    "material",
    "action"
], "disabled_visible", '<path d="M21.99,12.34C22,12.23,22,12.11,22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,5.17,3.93,9.43,8.96,9.95 c-0.93-0.73-1.72-1.64-2.32-2.68C5.9,18,4,15.22,4,12c0-1.85,0.63-3.55,1.69-4.9l5.66,5.66c0.56-0.4,1.17-0.73,1.82-1L7.1,5.69 C8.45,4.63,10.15,4,12,4c4.24,0,7.7,3.29,7.98,7.45C20.69,11.67,21.37,11.97,21.99,12.34z M17,13c-3.18,0-5.9,1.87-7,4.5 c1.1,2.63,3.82,4.5,7,4.5s5.9-1.87,7-4.5C22.9,14.87,20.18,13,17,13z M17,20c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 s2.5,1.12,2.5,2.5C19.5,18.88,18.38,20,17,20z M18.5,17.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5 S18.5,16.67,18.5,17.5z"/>');
let dns = (0, _common.icons).registerIcon([
    "material",
    "action"
], "dns", '<path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>');
let done_all = (0, _common.icons).registerIcon([
    "material",
    "action"
], "done_all", '<path d="M17.3 6.3c-.39-.39-1.02-.39-1.41 0l-5.64 5.64 1.41 1.41L17.3 7.7c.38-.38.38-1.02 0-1.4zm4.24-.01l-9.88 9.88-3.48-3.47c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L22.95 7.71c.39-.39.39-1.02 0-1.41h-.01c-.38-.4-1.01-.4-1.4-.01zM1.12 14.12L5.3 18.3c.39.39 1.02.39 1.41 0l.7-.7-4.88-4.9c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42z"/>');
let done = (0, _common.icons).registerIcon([
    "material",
    "action"
], "done", '<path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"/>');
let done_outline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "done_outline", '<path d="M20.47 5.63c.39.39.39 1.01 0 1.4L9.13 18.37c-.39.39-1.01.39-1.4 0l-4.2-4.2c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l3.5 3.5L19.07 5.63c.39-.39 1.01-.39 1.4 0zm-2.11-2.12l-9.93 9.93-2.79-2.79c-.78-.78-2.05-.78-2.83 0l-1.4 1.4c-.78.78-.78 2.05 0 2.83l5.6 5.6c.78.78 2.05.78 2.83 0L22.59 7.74c.78-.78.78-2.05 0-2.83l-1.4-1.4c-.79-.78-2.05-.78-2.83 0z"/>');
let donut_large = (0, _common.icons).registerIcon([
    "material",
    "action"
], "donut_large", '<path d="M14.07 5.32C16.26 6 18 7.74 18.68 9.93c.19.63.76 1.07 1.41 1.07h.04c1 0 1.72-.96 1.43-1.91-.97-3.18-3.48-5.69-6.66-6.66-.94-.29-1.9.43-1.9 1.43v.04c0 .66.44 1.23 1.07 1.42zm4.61 8.75c-.68 2.2-2.42 3.93-4.61 4.61-.63.19-1.07.76-1.07 1.41v.04c0 1 .96 1.72 1.91 1.43 3.18-.97 5.69-3.48 6.66-6.66.29-.95-.43-1.91-1.42-1.91h-.05c-.66.01-1.23.45-1.42 1.08zM11 20.11c0-.67-.45-1.24-1.09-1.44C7.07 17.78 5 15.13 5 12s2.07-5.78 4.91-6.67c.64-.2 1.09-.77 1.09-1.44v-.01c0-1-.97-1.74-1.93-1.44C4.98 3.69 2 7.5 2 12c0 4.5 2.98 8.31 7.07 9.56.96.3 1.93-.44 1.93-1.45z"/>');
let donut_small = (0, _common.icons).registerIcon([
    "material",
    "action"
], "donut_small", '<path d="M11 3.18v17.64c0 .64-.59 1.12-1.21.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8c.62-.14 1.21.34 1.21.98zm2.03 0v6.81c0 .55.45 1 1 1h6.79c.64 0 1.12-.59.98-1.22-.85-3.76-3.8-6.72-7.55-7.57-.63-.14-1.22.34-1.22.98zm0 10.83v6.81c0 .64.59 1.12 1.22.98 3.76-.85 6.71-3.82 7.56-7.58.14-.62-.35-1.22-.98-1.22h-6.79c-.56.01-1.01.46-1.01 1.01z"/>');
let dynamic_form = (0, _common.icons).registerIcon([
    "material",
    "action"
], "dynamic_form", '<path d="M21.68,9.71l-3.72,8.19C17.73,18.39,17,18.23,17,17.69V11h-1.5c-0.28,0-0.5-0.22-0.5-0.5v-6C15,4.22,15.22,4,15.5,4h5.76 c0.35,0,0.6,0.36,0.46,0.69L20,9h1.22C21.59,9,21.83,9.38,21.68,9.71z M15,13v7H4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2H15z M6.25,16.5c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75c0,0.41,0.34,0.75,0.75,0.75S6.25,16.91,6.25,16.5z M13,4v7H4 c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2H13z M6.25,7.5c0-0.41-0.34-0.75-0.75-0.75S4.75,7.09,4.75,7.5c0,0.41,0.34,0.75,0.75,0.75 S6.25,7.91,6.25,7.5z"/>');
let edit_calendar = (0, _common.icons).registerIcon([
    "material",
    "action"
], "edit_calendar", '<path d="M12,22H5c-1.11,0-2-0.9-2-2L3.01,6c0-1.1,0.88-2,1.99-2h1V3c0-0.55,0.45-1,1-1s1,0.45,1,1v1h8V3c0-0.55,0.45-1,1-1 s1,0.45,1,1v1h1c1.1,0,2,0.9,2,2v6h-2v-2H5v10h7V22z M22.13,16.99l0.71-0.71c0.39-0.39,0.39-1.02,0-1.41l-0.71-0.71 c-0.39-0.39-1.02-0.39-1.41,0l-0.71,0.71L22.13,16.99z M21.42,17.7l-5.01,5.01c-0.18,0.18-0.44,0.29-0.7,0.29H14.5 c-0.28,0-0.5-0.22-0.5-0.5v-1.21c0-0.27,0.11-0.52,0.29-0.71l5.01-5.01L21.42,17.7z"/>');
let edit_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "edit_off", '<path d="m17.7 3c-0.255 0-0.508 0.096-0.703 0.291l-1.83 1.83 3.75 3.75 1.83-1.83c0.39-0.39 0.39-1.02 0-1.41l-2.34-2.34c-0.195-0.195-0.45-0.291-0.705-0.291zm-14.9 0.219c-0.256 0-0.512 0.098-0.707 0.293-0.39 0.39-0.39 1.02 0 1.41l6.61 6.61-5.56 5.57c-0.1 0.1-0.15 0.221-0.15 0.361v3.04c0 0.28 0.22 0.5 0.5 0.5h3.04c0.13 0 0.262-0.0504 0.352-0.15l5.56-5.56 6.61 6.61c0.39 0.39 1.02 0.39 1.41 0s0.39-1.02 0-1.41l-17-17c-0.2-0.195-0.457-0.293-0.713-0.293zm11.2 2.98-2.52 2.52 3.75 3.75 2.52-2.52-3.75-3.75z"/>');
let eject = (0, _common.icons).registerIcon([
    "material",
    "action"
], "eject", '<path d="M6 17h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.17-10.75l-4.8 7.2c-.45.66.03 1.55.83 1.55h9.6c.8 0 1.28-.89.83-1.55l-4.8-7.2c-.39-.6-1.27-.6-1.66 0z"/>');
let euro_symbol = (0, _common.icons).registerIcon([
    "material",
    "action"
], "euro_symbol", '<path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H14c.55 0 1-.45 1-1s-.45-1-1-1H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H14c.55 0 1-.45 1-1s-.45-1-1-1H9.24C10.32 6.92 12.5 5.5 15 5.5c1.25 0 2.42.36 3.42.97.5.31 1.15.26 1.57-.16.58-.58.45-1.53-.25-1.96C18.36 3.5 16.73 3 15 3c-3.92 0-7.24 2.51-8.48 6H4c-.55 0-1 .45-1 1s.45 1 1 1h2.06c-.04.33-.06.66-.06 1s.02.67.06 1H4c-.55 0-1 .45-1 1s.45 1 1 1h2.52c1.24 3.49 4.56 6 8.48 6 1.74 0 3.36-.49 4.74-1.35.69-.43.82-1.39.24-1.97-.42-.42-1.07-.47-1.57-.15-.99.62-2.15.97-3.41.97z"/>');
let event = (0, _common.icons).registerIcon([
    "material",
    "action"
], "event", '<path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z"/>');
let event_seat = (0, _common.icons).registerIcon([
    "material",
    "action"
], "event_seat", '<path d="M5.5 21c.83 0 1.5-.67 1.5-1.5V18h10v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2.5c0 .83.67 1.5 1.5 1.5zM20 10h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zM3 10h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zm14 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"/>');
let exit_to_app = (0, _common.icons).registerIcon([
    "material",
    "action"
], "exit_to_app", '<path d="M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59c.39-.39.39-1.02 0-1.41L12.2 7.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41zM19 3H5c-1.11 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
let expand = (0, _common.icons).registerIcon([
    "material",
    "action"
], "expand", '<path d="M5,20h14c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1v0C4,20.45,4.45,20,5,20z M5,2h14c0.55,0,1,0.45,1,1 v0c0,0.55-0.45,1-1,1H5C4.45,4,4,3.55,4,3v0C4,2.45,4.45,2,5,2z M13,9h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79 c-0.2-0.2-0.51-0.2-0.71,0L8.85,8.15C8.54,8.46,8.76,9,9.21,9H11v6H9.21c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.79 c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79c0.31-0.31,0.09-0.85-0.35-0.85H13V9z"/>');
let explore = (0, _common.icons).registerIcon([
    "material",
    "action"
], "explore", '<path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/>');
let explore_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "explore_off", '<path d="M18 6l-2.91 6.26 5.25 5.25C21.39 15.93 22 14.04 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l5.25 5.25L18 6zM2.81 5.64l.85.85c-1.37 2.07-2 4.68-1.48 7.45.75 3.95 3.92 7.13 7.88 7.88 2.77.52 5.38-.1 7.45-1.48l.85.85c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.22 4.22c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42zm6.1 6.1l3.35 3.35L6 18l2.91-6.26z"/>');
let extension = (0, _common.icons).registerIcon([
    "material",
    "action"
], "extension", '<path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>');
let extension_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "extension_off", '<path d="M20.49,21.9c-0.39,0.39-1.02,0.39-1.41,0l-0.92-0.92C18.1,20.98,18.05,21,18,21h-3.8c0-2.71-2.16-3-2.7-3s-2.7,0.29-2.7,3H5 c-1.1,0-2-0.9-2-2v-3.8c2.71,0,3-2.16,3-2.7c0-0.54-0.3-2.7-2.99-2.7V6c0-0.05,0.02-0.09,0.02-0.14L2.1,4.93 c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97C20.88,20.88,20.88,21.51,20.49,21.9L20.49,21.9z M20,17.17V15c1.38,0,2.5-1.12,2.5-2.5S21.38,10,20,10V6c0-1.1-0.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S9,2.62,9,4H6.83L20,17.17z"/>');
let face = (0, _common.icons).registerIcon([
    "material",
    "action"
], "face", '<path d="M10.25,13c0,0.69-0.56,1.25-1.25,1.25S7.75,13.69,7.75,13S8.31,11.75,9,11.75S10.25,12.31,10.25,13z M15,11.75 c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25s1.25-0.56,1.25-1.25S15.69,11.75,15,11.75z M22,12c0,5.52-4.48,10-10,10 S2,17.52,2,12S6.48,2,12,2S22,6.48,22,12z M20,12c0-0.78-0.12-1.53-0.33-2.24C18.97,9.91,18.25,10,17.5,10 c-3.13,0-5.92-1.44-7.76-3.69C8.69,8.87,6.6,10.88,4,11.86C4.01,11.9,4,11.95,4,12c0,4.41,3.59,8,8,8S20,16.41,20,12z"/>');
let fact_check = (0, _common.icons).registerIcon([
    "material",
    "action"
], "fact_check", '<path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M9,17H6c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1C10,16.55,9.55,17,9,17z M9,13H6 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1C10,12.55,9.55,13,9,13z M9,9H6C5.45,9,5,8.55,5,8c0-0.55,0.45-1,1-1h3 c0.55,0,1,0.45,1,1C10,8.55,9.55,9,9,9z M18.7,11.12l-3.17,3.17c-0.39,0.39-1.03,0.39-1.42,0l-1.41-1.42 c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71l2.47-2.47c0.39-0.39,1.02-0.39,1.41,0l0.01,0.01 C19.09,10.1,19.09,10.74,18.7,11.12z" fill-rule="evenodd"/>');
let favorite = (0, _common.icons).registerIcon([
    "material",
    "action"
], "favorite", '<path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/>');
let favorite_border = (0, _common.icons).registerIcon([
    "material",
    "action"
], "favorite_border", '<path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>');
let fax = (0, _common.icons).registerIcon([
    "material",
    "action"
], "fax", '<path d="m10 4c-1.1 0-2 0.9-2 2v14h12c1.1 0 2-0.9 2-2v-6c0-1.66-1.34-3-3-3h-1v-3c0-1.1-0.9-2-2-2h-6zm0 2h6v3h-6v-3zm-5.5 2c-1.38 0-2.5 1.12-2.5 2.5v8c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-8c0-1.38-1.12-2.5-2.5-2.5zm5.5 4h4v5h-4v-5zm6 0c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm3 0c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm-3 3c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm3 0c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"/>');
let feedback = (0, _common.icons).registerIcon([
    "material",
    "action"
], "feedback", '<path d="M20 2H4.01c-1.1 0-2 .9-2 2v18L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2z"/>');
let file_present = (0, _common.icons).registerIcon([
    "material",
    "action"
], "file_present", '<path d="M13.17,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.83c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83 C14.21,2.21,13.7,2,13.17,2z M16,15c0,2.34-2.01,4.21-4.39,3.98C9.53,18.78,8,16.92,8,14.83l0-5.19c0-1.31,0.94-2.5,2.24-2.63 C11.74,6.86,13,8.03,13,9.5V14c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1V9.5C11,9.22,10.78,9,10.5,9S10,9.22,10,9.5v5.39 c0,1,0.68,1.92,1.66,2.08C12.92,17.18,14,16.21,14,15v-3c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1V15z M14,7V4l4,4h-3 C14.45,8,14,7.55,14,7z"/>');
let filter_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "filter_alt", '<path d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>');
let find_in_page = (0, _common.icons).registerIcon([
    "material",
    "action"
], "find_in_page", '<path d="M20 19.59V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.86.56-1.89.88-3 .82-2.37-.11-4.4-1.96-4.72-4.31-.44-3.35 2.45-6.18 5.83-5.61 1.95.33 3.57 1.85 4 3.78.33 1.46.01 2.82-.7 3.9L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/>');
let find_replace = (0, _common.icons).registerIcon([
    "material",
    "action"
], "find_replace", '<path d="M11 6c1.38 0 2.63.56 3.54 1.46l-1.69 1.69c-.31.31-.09.85.36.85h4.29c.28 0 .5-.22.5-.5V5.21c0-.45-.54-.67-.85-.35l-1.2 1.2C14.68 4.78 12.93 4 11 4 7.96 4 5.38 5.94 4.42 8.64c-.24.66.23 1.36.93 1.36.42 0 .79-.26.93-.66C6.96 7.4 8.82 6 11 6zm5.64 9.14c.4-.54.72-1.15.95-1.8.23-.65-.25-1.34-.94-1.34-.42 0-.79.26-.93.66C15.04 14.6 13.18 16 11 16c-1.38 0-2.63-.56-3.54-1.46l1.69-1.69c.31-.31.09-.85-.36-.85H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.2-1.2C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36l4.11 4.11c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49l-4.1-4.12z"/>');
let fingerprint = (0, _common.icons).registerIcon([
    "material",
    "action"
], "fingerprint", '<path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>');
let fit_screen = (0, _common.icons).registerIcon([
    "material",
    "action"
], "fit_screen", '<path d="M18,4h2c1.1,0,2,0.9,2,2v2c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1V6h-2c-0.55,0-1-0.45-1-1v0C17,4.45,17.45,4,18,4z M4,8 l0-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C2.9,4,2,4.9,2,6l0,2c0,0.55,0.45,1,1,1h0C3.55,9,4,8.55,4,8z M20,16v2h-2 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2c1.1,0,2-0.9,2-2v-2c0-0.55-0.45-1-1-1h0C20.45,15,20,15.45,20,16z M6,18H4v-2 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2c0,1.1,0.9,2,2,2h2c0.55,0,1-0.45,1-1v0C7,18.45,6.55,18,6,18z M16,8H8c-1.1,0-2,0.9-2,2 v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-4C18,8.9,17.1,8,16,8z"/>');
let flaky = (0, _common.icons).registerIcon([
    "material",
    "action"
], "flaky", '<path d="M12.16,15.72c-0.29-0.29-0.29-0.77,0-1.06l0,0c0.29-0.29,0.77-0.29,1.06,0 l0.82,0.82l1.96-1.96c0.29-0.29,0.77-0.29,1.06,0l0,0c0.29,0.29,0.29,0.77,0,1.06l-2.65,2.65c-0.19,0.19-0.51,0.2-0.7,0 L12.16,15.72z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M7.87,6.81l0.88,0.88l0.88-0.88 c0.29-0.29,0.77-0.29,1.06,0l0,0c0.29,0.29,0.29,0.77,0,1.06L9.81,8.75l0.88,0.88c0.29,0.29,0.29,0.77,0,1.06l0,0 c-0.29,0.29-0.77,0.29-1.06,0L8.75,9.81l-0.88,0.88c-0.29,0.29-0.77,0.29-1.06,0l0,0c-0.29-0.29-0.29-0.77,0-1.06l0.88-0.88 L6.81,7.87c-0.29-0.29-0.29-0.77,0-1.06l0,0C7.1,6.51,7.57,6.51,7.87,6.81z M12,20c-2.2,0-4.2-0.9-5.7-2.3L17.7,6.3 C19.1,7.8,20,9.8,20,12C20,16.4,16.4,20,12,20z" fill-rule="evenodd"/>');
let flight_land = (0, _common.icons).registerIcon([
    "material",
    "action"
], "flight_land", '<path d="M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1zM3.51 11.61l15.83 4.24c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.58-8.45c-.11-.36-.39-.63-.75-.73-.68-.18-1.35.33-1.35 1.04v6.88L5.15 8.95 4.4 7.09c-.12-.29-.36-.51-.67-.59l-.33-.09c-.32-.09-.63.15-.63.48v3.75c0 .46.3.85.74.97z"/>');
let flight_takeoff = (0, _common.icons).registerIcon([
    "material",
    "action"
], "flight_takeoff", '<path d="M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1zm1.57-9.36c-.22-.8-1.04-1.27-1.84-1.06L14.92 10 8.46 3.98c-.27-.26-.66-.35-1.02-.25-.68.19-1 .97-.65 1.58l3.44 5.96-4.97 1.33-1.57-1.24c-.25-.19-.57-.26-.88-.18l-.33.09c-.32.08-.47.45-.3.73l1.88 3.25c.23.39.69.58 1.12.47L21 11.48c.8-.22 1.28-1.04 1.07-1.84z"/>');
let flip_to_back = (0, _common.icons).registerIcon([
    "material",
    "action"
], "flip_to_back", '<path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM4 7c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h11c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1V8c0-.55-.45-1-1-1zm11-2h2V3h-2v2zm0 12h2v-2h-2v2z"/>');
let flip_to_front = (0, _common.icons).registerIcon([
    "material",
    "action"
], "flip_to_front", '<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 12h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-7 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/>');
let free_cancellation = (0, _common.icons).registerIcon([
    "material",
    "action"
], "free_cancellation", '<path d="M10.79,20H5V10h14v2.96c0,0.89,1.08,1.34,1.71,0.71l0,0c0.19-0.19,0.29-0.44,0.29-0.71V6c0-1.1-0.9-2-2-2h-1V3 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1H8V3c0-0.55-0.45-1-1-1h0C6.45,2,6,2.45,6,3v1H5C3.89,4,3.01,4.9,3.01,6L3,20 c0,1.1,0.89,2,2,2h5.79c0.89,0,1.34-1.08,0.71-1.71l0,0C11.31,20.11,11.06,20,10.79,20z M13.71,18.26c0.39-0.39,1.02-0.39,1.41,0 l1.41,1.41l3.54-3.54c0.39-0.39,1.02-0.39,1.41,0c0.39,0.39,0.39,1.02,0,1.41l-4.24,4.24c-0.39,0.39-1.02,0.39-1.41,0l-2.12-2.12 C13.32,19.28,13.32,18.65,13.71,18.26z M11.29,16.29c-0.39,0.39-1.02,0.39-1.41,0L9,15.41l-0.88,0.88c-0.39,0.39-1.02,0.39-1.41,0 s-0.39-1.02,0-1.41L7.59,14l-0.88-0.88c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0L9,12.59l0.88-0.88c0.39-0.39,1.02-0.39,1.41,0 s0.39,1.02,0,1.41L10.41,14l0.88,0.88C11.68,15.27,11.68,15.9,11.29,16.29z"/>');
let gavel = (0, _common.icons).registerIcon([
    "material",
    "action"
], "gavel", '<path d="M2 21h10c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM5.24 8.07l2.83-2.83L20.8 17.97c.78.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0L5.24 8.07zm8.49-5.66l2.83 2.83c.78.78.78 2.05 0 2.83l-1.42 1.42-5.65-5.66 1.41-1.41c.78-.79 2.05-.79 2.83-.01zm-9.9 7.07l5.66 5.66-1.41 1.41c-.78.78-2.05.78-2.83 0l-2.83-2.83c-.78-.78-.78-2.05 0-2.83l1.41-1.41z"/>');
let generating_tokens = (0, _common.icons).registerIcon([
    "material",
    "action"
], "generating_tokens", '<path d="M9,4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8C17,7.58,13.42,4,9,4z M9,15.5c-0.55,0-1-0.45-1-1v-4H6.75 C6.34,10.5,6,10.16,6,9.75S6.34,9,6.75,9h4.5C11.66,9,12,9.34,12,9.75s-0.34,0.75-0.75,0.75H10v4C10,15.05,9.55,15.5,9,15.5z M20.25,3.75L22,4.54c0.39,0.18,0.39,0.73,0,0.91l-1.75,0.79L19.46,8c-0.18,0.39-0.73,0.39-0.91,0l-0.79-1.75L16,5.46 c-0.39-0.18-0.39-0.73,0-0.91l1.75-0.79L18.54,2c0.18-0.39,0.73-0.39,0.91,0L20.25,3.75z M20.25,17.75L22,18.54 c0.39,0.18,0.39,0.73,0,0.91l-1.75,0.79L19.46,22c-0.18,0.39-0.73,0.39-0.91,0l-0.79-1.75L16,19.46c-0.39-0.18-0.39-0.73,0-0.91 l1.75-0.79L18.54,16c0.18-0.39,0.73-0.39,0.91,0L20.25,17.75z"/>');
let get_app = (0, _common.icons).registerIcon([
    "material",
    "action"
], "get_app", '<path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/>');
let gif = (0, _common.icons).registerIcon([
    "material",
    "action"
], "gif", '<path d="M12.25 9c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75zM10 9.75c0-.41-.34-.75-.75-.75H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.75h-2v-3h2.75c.41 0 .75-.34.75-.75zm9 0c0-.41-.34-.75-.75-.75H15.5c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1h2.25c.41 0 .75-.34.75-.75z"/>');
let gif_box = (0, _common.icons).registerIcon([
    "material",
    "action"
], "gif_box", '<path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10.5,10.5c0,0.28-0.22,0.5-0.5,0.5 H8.5v2h1v-0.5c0-0.29,0.25-0.53,0.55-0.5c0.26,0.02,0.45,0.26,0.45,0.52V13c0,0.55-0.45,1-1,1h-1c-0.55,0-1-0.45-1-1v-2 c0-0.55,0.45-1,1-1H10C10.28,10,10.5,10.22,10.5,10.5z M12,10c0.28,0,0.5,0.22,0.5,0.5v3c0,0.28-0.22,0.5-0.5,0.5s-0.5-0.22-0.5-0.5 v-3C11.5,10.22,11.72,10,12,10z M14,14c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h2c0.28,0,0.5,0.22,0.5,0.5 S16.28,11,16,11h-1.5v0.5h1c0.28,0,0.5,0.22,0.5,0.5s-0.22,0.5-0.5,0.5h-1v1C14.5,13.78,14.28,14,14,14z"/>');
let grade = (0, _common.icons).registerIcon([
    "material",
    "action"
], "grade", '<path d="M12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z"/>');
let grading = (0, _common.icons).registerIcon([
    "material",
    "action"
], "grading", '<path d="m5 3c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-14zm0 4c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-14zm0 4c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-14zm0 4c-0.55 0-1 0.45-1 1s0.45 1 1 1h5c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5zm13.6 0.418c-0.255 0-0.51 0.098-0.705 0.293l-2.47 2.46-0.711-0.709c-0.39-0.39-1.02-0.39-1.41 0-0.39 0.39-0.39 1.02 0 1.41l1.42 1.42c0.39 0.39 1.02 0.39 1.41 0l3.17-3.17c0.39-0.39 0.39-1.02 0-1.41-0.195-0.195-0.448-0.293-0.703-0.293zm-13.6 3.58c-0.55 0-1 0.45-1 1s0.45 1 1 1h5c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5z"/>');
let group_work = (0, _common.icons).registerIcon([
    "material",
    "action"
], "group_work", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>');
let help = (0, _common.icons).registerIcon([
    "material",
    "action"
], "help", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"/>');
let help_center = (0, _common.icons).registerIcon([
    "material",
    "action"
], "help_center", '<path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12.01,18 c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25c0.71,0,1.25,0.54,1.25,1.25C13.25,17.43,12.72,18,12.01,18z M15.02,10.6 c-0.76,1.11-1.48,1.46-1.87,2.17c-0.1,0.18-0.16,0.32-0.19,0.63c-0.05,0.45-0.45,0.78-0.9,0.78H12c-0.52,0-0.93-0.44-0.88-0.96 c0.03-0.34,0.11-0.69,0.3-1.03c0.49-0.87,1.42-1.39,1.96-2.16c0.57-0.81,0.25-2.33-1.37-2.33c-0.71,0-1.18,0.36-1.47,0.79 c-0.25,0.36-0.69,0.53-1.1,0.36l0,0C8.91,8.64,8.72,8,9.04,7.54C9.65,6.65,10.67,6,11.99,6c1.48,0,2.49,0.67,3.01,1.52 C15.44,8.24,15.7,9.59,15.02,10.6z"/>');
let help_outline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "help_outline", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"/>');
let hide_source = (0, _common.icons).registerIcon([
    "material",
    "action"
], "hide_source", '<path d="M2.1,3.51L2.1,3.51C1.71,3.9,1.71,4.54,2.1,4.93l1.56,1.56c-1.25,1.88-1.88,4.2-1.59,6.69c0.52,4.54,4.21,8.23,8.75,8.75 c2.49,0.29,4.81-0.34,6.69-1.59l1.56,1.56c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51 C3.12,3.12,2.49,3.12,2.1,3.51z M12,20c-4.41,0-8-3.59-8-8c0-1.48,0.41-2.86,1.12-4.06l10.94,10.94C14.86,19.59,13.48,20,12,20z M7.94,5.12L6.49,3.66C8.07,2.61,9.96,2,12,2c5.52,0,10,4.48,10,10c0,2.04-0.61,3.93-1.66,5.51l-1.46-1.46 C19.59,14.86,20,13.48,20,12c0-4.41-3.59-8-8-8C10.52,4,9.14,4.41,7.94,5.12z"/>');
let highlight_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "highlight_alt", '<path d="M17,5h-2V3h2V5z M19,9h2V7h-2V9z M19,13h2v-2h-2V13z M11,21h2v-2h-2V21z M7,5h2V3H7V5z M3,17h2v-2H3V17z M5,21v-2H3 C3,20.1,3.9,21,5,21z M19,3v2h2C21,3.9,20.1,3,19,3z M11,5h2V3h-2V5z M3,9h2V7H3V9z M7,21h2v-2H7V21z M3,13h2v-2H3V13z M3,5h2V3 C3.9,3,3,3.9,3,5z M18.71,17.29l1.44-1.44c0.32-0.32,0.09-0.85-0.35-0.85H16c-0.55,0-1,0.45-1,1v3.79c0,0.45,0.54,0.67,0.85,0.35 l1.44-1.44l2,2c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L18.71,17.29z"/>');
let highlight_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "highlight_off", '<path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>');
let history = (0, _common.icons).registerIcon([
    "material",
    "action"
], "history", '<path d="M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.31-.31.09-.85-.36-.85H6c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.42-.39 1.13.08 1.49C9 20.29 10.91 21 13 21c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z"/>');
let history_toggle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "history_toggle", '<path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M12,7L12,7c-0.55,0-1,0.45-1,1v3.59c0,0.53,0.21,1.04,0.59,1.41l3,3 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41l-3-3V8C13,7.45,12.55,7,12,7z"/>');
let horizontal_split = (0, _common.icons).registerIcon([
    "material",
    "action"
], "horizontal_split", '<path d="M4 19h16c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>');
let hotel_class = (0, _common.icons).registerIcon([
    "material",
    "action"
], "hotel_class", '<path d="M8.58,10H2.56c-0.49,0-0.69,0.62-0.29,0.91l4.91,3.51l-1.89,6.1c-0.14,0.46,0.39,0.84,0.78,0.55L11,17.31l4.93,3.75 c0.39,0.29,0.92-0.08,0.78-0.55l-1.89-6.1l4.91-3.51c0.4-0.28,0.2-0.91-0.29-0.91h-6.02l-1.95-6.42c-0.14-0.47-0.81-0.47-0.96,0 L8.58,10z M20.9,20.51l-1.4-4.52l2.91-2.08c0.4-0.28,0.2-0.91-0.29-0.91h-1.88l-3.08,2.2l1.46,4.72l1.5,1.14 C20.51,21.35,21.04,20.97,20.9,20.51z M17,8l-1.34-4.42c-0.14-0.47-0.81-0.47-0.96,0l-0.57,1.87L14.91,8H17z"/>');
let http = (0, _common.icons).registerIcon([
    "material",
    "action"
], "http", '<path d="M4.5 11h-2V9.75c0-.41-.34-.75-.75-.75S1 9.34 1 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5C6 9.34 5.66 9 5.25 9s-.75.34-.75.75V11zm3.25-.5h.75v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h.75c.41 0 .75-.34.75-.75S11.16 9 10.75 9h-3c-.41 0-.75.34-.75.75s.34.75.75.75zm5.5 0H14v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h.75c.41 0 .75-.34.75-.75S16.66 9 16.25 9h-3c-.41 0-.75.34-.75.75s.34.75.75.75zM21.5 9H19c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h2c.83 0 1.5-.68 1.5-1.5v-1c0-.82-.67-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"/>');
let https = (0, _common.icons).registerIcon([
    "material",
    "action"
], "https", '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>');
let important_devices = (0, _common.icons).registerIcon([
    "material",
    "action"
], "important_devices", '<path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h7v2H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V4c0-1.1-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"/>');
let info = (0, _common.icons).registerIcon([
    "material",
    "action"
], "info", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"/>');
let input = (0, _common.icons).registerIcon([
    "material",
    "action"
], "input", '<path d="M21 3.01H3c-1.1 0-2 .9-2 2V8c0 .55.45 1 1 1s1-.45 1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V16c0-.55-.45-1-1-1s-1 .45-1 1v3.01c0 1.09.89 1.98 1.98 1.98H21c1.1 0 2-.9 2-2V5.01c0-1.1-.9-2-2-2zm-9.15 12.14l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.32-.85-.1-.85.35V11H2c-.55 0-1 .45-1 1s.45 1 1 1h9v1.79c0 .45.54.67.85.36z"/>');
let integration_instructions = (0, _common.icons).registerIcon([
    "material",
    "action"
], "integration_instructions", '<path d="m19 3h-4.18c-0.42-1.16-1.52-2-2.82-2s-2.4 0.84-2.82 2h-4.18c-0.14 0-0.27 0.01-0.4 0.04-0.39 0.08-0.74 0.28-1.01 0.55-0.18 0.18-0.33 0.4-0.43 0.64-0.1 0.23-0.16 0.49-0.16 0.77v14c0 0.27 0.06 0.54 0.16 0.78s0.25 0.45 0.43 0.64c0.27 0.27 0.62 0.47 1.01 0.55 0.13 0.02 0.26 0.03 0.4 0.03h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2zm-8.7 11.9c-0.39 0.39-1.03 0.39-1.42 0l-2.17-2.17c-0.39-0.39-0.39-1.02 0-1.41l2.17-2.17c0.39-0.39 1.03-0.39 1.42 0s0.39 1.02 0 1.41l-1.47 1.46 1.46 1.46c0.39 0.39 0.4 1.03 0.01 1.42zm1.7-10.6c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.75 0.75-0.75 0.75 0.34 0.75 0.75-0.34 0.75-0.75 0.75zm1.7 10.6c-0.39-0.39-0.39-1.02 0-1.41l1.47-1.47-1.47-1.47c-0.39-0.39-0.39-1.02 0-1.41s1.03-0.39 1.42 0l2.17 2.17c0.39 0.39 0.39 1.02 0 1.41l-2.17 2.17c-0.39 0.4-1.03 0.4-1.42 0.01z"/>');
let invert_colors = (0, _common.icons).registerIcon([
    "material",
    "action"
], "invert_colors", '<path d="M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M6.35,7.56L6.35,7.56C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12.7,2.69c-0.39-0.38-1.01-0.38-1.4,0L6.35,7.56z"/>');
let label = (0, _common.icons).registerIcon([
    "material",
    "action"
], "label", '<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58c.25-.35.25-.81 0-1.16l-3.96-5.58z"/>');
let label_important = (0, _common.icons).registerIcon([
    "material",
    "action"
], "label_important", '<path d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57c.25-.35.25-.81 0-1.16l-3.96-5.58C16.26 5.31 15.65 5 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58z"/>');
let label_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "label_off", '<path d="M21.59 12.58c.25-.35.25-.81 0-1.16l-3.96-5.58C17.27 5.33 16.67 5 16 5H8.66l10.7 10.73 2.23-3.15zM2.72 4.72l.87.87C3.23 5.95 3 6.45 3 7v10c0 1.1.9 2 2 2h12l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.14 3.31c-.38-.38-1.01-.39-1.4-.01-.41.38-.41 1.03-.02 1.42z"/>');
let language = (0, _common.icons).registerIcon([
    "material",
    "action"
], "language", '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>');
let launch = (0, _common.icons).registerIcon([
    "material",
    "action"
], "launch", '<path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"/>');
let leaderboard = (0, _common.icons).registerIcon([
    "material",
    "action"
], "leaderboard", '<path d="M6.5,21H3c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3.5c0.55,0,1,0.45,1,1v10C7.5,20.55,7.05,21,6.5,21z M13.75,3h-3.5 c-0.55,0-1,0.45-1,1v16c0,0.55,0.45,1,1,1h3.5c0.55,0,1-0.45,1-1V4C14.75,3.45,14.3,3,13.75,3z M21,11h-3.5c-0.55,0-1,0.45-1,1v8 c0,0.55,0.45,1,1,1H21c0.55,0,1-0.45,1-1v-8C22,11.45,21.55,11,21,11z"/>');
let lightbulb = (0, _common.icons).registerIcon([
    "material",
    "action"
], "lightbulb", '<path d="m12 2c-4.14 0-7.5 3.36-7.5 7.5 0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-0.64 3.77-2.68 3.77-6.5 0-4.14-3.36-7.5-7.5-7.5zm-3 15c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6zm1 3c0 1.1 0.9 2 2 2s2-0.9 2-2h-4z"/>');
let line_style = (0, _common.icons).registerIcon([
    "material",
    "action"
], "line_style", '<path d="M4 16h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zM4 20c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM4 12h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 0h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zM3 5v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>');
let line_weight = (0, _common.icons).registerIcon([
    "material",
    "action"
], "line_weight", '<path d="M20 15H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm.5 15h-17c-.28 0-.5.22-.5.5s.22.5.5.5h17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"/>');
let list = (0, _common.icons).registerIcon([
    "material",
    "action"
], "list", '<path d="M4 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm-3 5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"/>');
let lock = (0, _common.icons).registerIcon([
    "material",
    "action"
], "lock", '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>');
let lock_clock = (0, _common.icons).registerIcon([
    "material",
    "action"
], "lock_clock", '<path d="m12 1c-2.76 0-5 2.24-5 5v2h-1c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h6.26c-0.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7 0.7 0 1.37 0.0991 2 0.289v-1.29c0-1.1-0.9-2-2-2h-1v-2c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v2h-6v-2c0-1.66 1.34-3 3-3zm6 10c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-0.00977 2c0.28 0 0.5 0.22 0.5 0.5v2.29l1.5 1.5c0.21 0.2 0.21 0.511 0.00977 0.711s-0.511 0.2-0.711 0l-1.65-1.65c-0.09-0.09-0.15-0.22-0.15-0.35v-2.5c0-0.28 0.22-0.5 0.5-0.5z"/>');
let lock_open = (0, _common.icons).registerIcon([
    "material",
    "action"
], "lock_open", '<path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22.53.14 1.08-.18 1.22-.72C9.44 3.93 10.63 3 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8z"/>');
let login = (0, _common.icons).registerIcon([
    "material",
    "action"
], "login", '<path d="M10.3,7.7L10.3,7.7c-0.39,0.39-0.39,1.01,0,1.4l1.9,1.9H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h9.2l-1.9,1.9 c-0.39,0.39-0.39,1.01,0,1.4l0,0c0.39,0.39,1.01,0.39,1.4,0l3.59-3.59c0.39-0.39,0.39-1.02,0-1.41L11.7,7.7 C11.31,7.31,10.69,7.31,10.3,7.7z M20,19h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-7 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7V19z"/>');
let logout = (0, _common.icons).registerIcon([
    "material",
    "action"
], "logout", '<path d="m5 3c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6v-14h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6zm12.5 5.71c-0.264-0.00878-0.52 0.193-0.52 0.502v1.79h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7v1.79c0 0.45 0.54 0.672 0.85 0.352l2.79-2.79c0.2-0.19 0.2-0.509 0.00977-0.699l-2.79-2.79c-0.1-0.1-0.22-0.146-0.34-0.15z"/>');
let loyalty = (0, _common.icons).registerIcon([
    "material",
    "action"
], "loyalty", '<path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27l-3.92 3.92c-.2.2-.51.2-.71 0l-3.92-3.92c-.57-.58-.87-1.43-.67-2.34.19-.88.89-1.61 1.76-1.84.94-.25 1.85.04 2.44.65l.75.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/>');
let manage_accounts = (0, _common.icons).registerIcon([
    "material",
    "action"
], "manage_accounts", '<path d="m10 4a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm6.42 7.01c-0.24 0-0.44 0.17-0.49 0.4l-0.219 1.09c-0.4 0.15-0.76 0.361-1.08 0.631l-1.06-0.361c-0.23-0.08-0.47 0.0207-0.59 0.221l-0.59 1.02c-0.12 0.21-0.0804 0.471 0.0996 0.631l0.84 0.729c-0.03 0.21-0.0605 0.411-0.0605 0.631s0.0305 0.421 0.0605 0.631l-0.84 0.729c-0.18 0.16-0.22 0.421-0.0996 0.631l0.59 1.02c0.12 0.21 0.37 0.301 0.59 0.221l1.06-0.361c0.32 0.27 0.68 0.481 1.08 0.631l0.219 1.09c0.05 0.23 0.25 0.4 0.49 0.4h1.18c0.24 0 0.44-0.17 0.49-0.4l0.221-1.09c0.4-0.15 0.76-0.361 1.08-0.631l1.06 0.361c0.23 0.08 0.47-0.0207 0.59-0.221l0.592-1.02c0.12-0.21 0.0784-0.471-0.102-0.631l-0.84-0.729c0.03-0.21 0.0605-0.411 0.0605-0.631s-0.0305-0.421-0.0605-0.631l0.84-0.729c0.18-0.16 0.222-0.421 0.102-0.631l-0.592-1.02c-0.12-0.21-0.37-0.301-0.59-0.221l-1.06 0.361c-0.32-0.27-0.68-0.481-1.08-0.631l-0.221-1.09c-0.05-0.23-0.25-0.4-0.49-0.4h-1.18zm-6.42 1.99c-2.42 0-4.68 0.67-6.61 1.82-0.88 0.52-1.39 1.5-1.39 2.53v1.65c0 0.55 0.45 1 1 1h8.26c-0.79-1.13-1.26-2.51-1.26-4 0-1.07 0.25-2.07 0.67-2.98-0.22-0.01-0.44-0.0195-0.67-0.0195zm7 1c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z"/>');
let mark_as_unread = (0, _common.icons).registerIcon([
    "material",
    "action"
], "mark_as_unread", '<path d="m10.5 2.23c-0.309-0.00125-0.619 0.069-0.904 0.209l-6.8 3.39c-0.48 0.26-0.801 0.81-0.801 1.34v7.83c0 1.1 0.9 2 2 2v-9.6l6.5-3.4 5.73 3h2.6c-0.06-0.47-0.361-0.94-0.791-1.17l-6.64-3.38c-0.28-0.145-0.588-0.218-0.896-0.219zm-3.5 5.77c-1.1 0-2 0.9-2 2v9c0 1.1 0.9 2 2 2h13c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2h-13zm0.844 2.57c0.15-0.00719 0.307 0.0241 0.457 0.102l5.2 2.67 5.2-2.67c0.6-0.31 1.3 0.121 1.3 0.791 0 0.33-0.19 0.639-0.48 0.789l-5.61 2.88c-0.25 0.13-0.561 0.13-0.811 0l-5.61-2.88c-0.3-0.15-0.49-0.459-0.49-0.789 0-0.502 0.394-0.871 0.844-0.893z"/>');
let markunread_mailbox = (0, _common.icons).registerIcon([
    "material",
    "action"
], "markunread_mailbox", '<path d="M20 6H10v5c0 .55-.45 1-1 1s-1-.45-1-1V4h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>');
let maximize = (0, _common.icons).registerIcon([
    "material",
    "action"
], "maximize", '<path d="M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"/>');
let mediation = (0, _common.icons).registerIcon([
    "material",
    "action"
], "mediation", '<path d="M18,13h-5.06c-0.34,3.1-2.26,5.72-4.94,7.05c-0.03,1.81-1.66,3.23-3.55,2.9c-1.2-0.21-2.19-1.2-2.4-2.4 C1.71,18.65,3.16,17,5,17c0.95,0,1.78,0.45,2.33,1.14c1.9-1.03,3.26-2.91,3.58-5.14h-3.1c-0.48,1.34-1.86,2.24-3.42,1.94 c-1.18-0.23-2.13-1.2-2.35-2.38C1.7,10.66,3.16,9,5,9c1.3,0,2.4,0.84,2.82,2h3.1C10.6,8.77,9.23,6.9,7.33,5.86 c-0.64,0.8-1.67,1.28-2.81,1.1C3.29,6.77,2.26,5.77,2.05,4.54C1.72,2.65,3.17,1,5,1c1.64,0,2.96,1.31,2.99,2.95 c2.68,1.33,4.6,3.95,4.94,7.05H18V9.21c0-0.45,0.54-0.67,0.85-0.35l2.79,2.79c0.2,0.2,0.2,0.51,0,0.71l-2.79,2.79 C18.54,15.46,18,15.24,18,14.79V13z"/>');
let minimize = (0, _common.icons).registerIcon([
    "material",
    "action"
], "minimize", '<path d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z"/>');
let model_training = (0, _common.icons).registerIcon([
    "material",
    "action"
], "model_training", '<path d="M15.5,13.5c0,2-2.5,3.5-2.5,5h-2c0-1.5-2.5-3-2.5-5c0-1.93,1.57-3.5,3.5-3.5h0C13.93,10,15.5,11.57,15.5,13.5z M13,19.5h-2 V20c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V19.5z M19,13c0,1.39-0.41,2.69-1.12,3.78c-0.25,0.39-0.19,0.91,0.14,1.24l0,0 c0.44,0.44,1.2,0.38,1.54-0.15C20.47,16.47,21,14.8,21,13c0-2.36-0.91-4.51-2.4-6.12c-0.39-0.42-1.05-0.43-1.45-0.03l0,0 c-0.38,0.38-0.38,0.99-0.02,1.39C18.29,9.49,19,11.16,19,13z M15.65,4.65l-2.79-2.79C12.54,1.54,12,1.76,12,2.21V4l0,0 c-4.97,0-9,4.03-9,9c0,1.8,0.53,3.47,1.44,4.88c0.34,0.53,1.1,0.59,1.54,0.15l0,0c0.33-0.33,0.39-0.84,0.14-1.23 C4.73,14.65,4.48,11.7,6.25,8.8C7.45,6.85,9.71,5.81,12,6l0,0v1.79c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79 C15.84,5.16,15.84,4.84,15.65,4.65z"/>');
let new_label = (0, _common.icons).registerIcon([
    "material",
    "action"
], "new_label", '<path d="M20.18,13.16l-3.55,5C16.25,18.69,15.65,19,15,19h-3l0-2l0-1c0-1.66-1.34-3-3-3h0v0c0-1.66-1.34-3-3-3H3V7c0-1.1,0.9-2,2-2 h10c0.65,0,1.26,0.31,1.63,0.84l3.55,5C20.67,11.54,20.67,12.46,20.18,13.16z M10,16c0-0.55-0.45-1-1-1H7v-2c0-0.55-0.45-1-1-1 c-0.55,0-1,0.45-1,1v2H3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-2h2 C9.55,17,10,16.55,10,16z"/>');
let next_plan = (0, _common.icons).registerIcon([
    "material",
    "action"
], "next_plan", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M18,13.97h-5l2.26-2.26 c-0.91-1.06-2.25-1.74-3.76-1.74c-2.37,0-4.35,1.66-4.86,3.88l-0.96-0.32c0.64-2.62,3-4.56,5.82-4.56c1.78,0,3.37,0.79,4.47,2.03 L18,8.97V13.97z"/>');
let nightlight_round = (0, _common.icons).registerIcon([
    "material",
    "action"
], "nightlight_round", '<path d="M15.5,22c0.07,0,0.14,0,0.21,0c0.84-0.02,1.12-1.11,0.41-1.56c-2.78-1.77-4.63-4.89-4.63-8.43c0-3.55,1.85-6.66,4.63-8.44 c0.7-0.45,0.44-1.54-0.39-1.56c-0.04,0-0.09,0-0.13,0c-4.9-0.05-9.21,3.53-9.98,8.37C4.64,16.61,9.45,22,15.5,22L15.5,22z"/>');
let no_accounts = (0, _common.icons).registerIcon([
    "material",
    "action"
], "no_accounts", '<path d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 2c4.42 0 8 3.58 8 8 0 1.85-0.629 3.54-1.69 4.9l-11.2-11.2c1.35-1.06 3.05-1.69 4.9-1.69zm0 2c-0.52 0-0.999 0.12-1.44 0.32l4.62 4.62c0.2-0.44 0.32-0.919 0.32-1.44 0-1.93-1.57-3.5-3.5-3.5zm-6.31 1.1 2.86 2.86c0.21 1.56 1.43 2.79 2.99 2.99l2.2 2.2c-0.57-0.1-1.15-0.15-1.74-0.15-2.32 0-4.45 0.799-6.14 2.12-1.16-1.39-1.86-3.17-1.86-5.12 0-1.85 0.629-3.55 1.69-4.9z"/>');
let not_accessible = (0, _common.icons).registerIcon([
    "material",
    "action"
], "not_accessible", '<path d="M12,2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,2,12,2z M10,20c-1.66,0-3-1.34-3-3c0-1.31,0.84-2.41,2-2.83V12.1 c-2.28,0.46-4,2.48-4,4.9c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07C12.42,19.16,11.31,20,10,20z M20.49,20.49L3.51,3.51 c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l7.9,7.9V15c0,1.1,0.9,2,2,2h2.17l4.9,4.9c0.39,0.39,1.02,0.39,1.41,0 C20.88,21.51,20.88,20.88,20.49,20.49z M18.16,10.93c-1.25-0.21-2.43-0.88-3.23-1.76l-1.29-1.43C13.4,7.5,13.2,7.38,13.01,7.28 c-0.36-0.19-0.72-0.3-1.2-0.26c-0.49,0.04-0.91,0.27-1.23,0.61L14,11.05c1,0.83,2.4,1.54,3.8,1.82C18.42,13,19,12.53,19,11.9 C19,11.42,18.64,11.01,18.16,10.93z"/>');
let not_started = (0, _common.icons).registerIcon([
    "material",
    "action"
], "not_started", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11,15c0,0.55-0.45,1-1,1s-1-0.45-1-1 V9c0-0.55,0.45-1,1-1s1,0.45,1,1V15z M16.02,12.78l-2.4,1.92C12.97,15.22,12,14.76,12,13.92v-3.84c0-0.84,0.97-1.3,1.62-0.78 l2.4,1.92C16.52,11.62,16.52,12.38,16.02,12.78z"/>');
let note_add = (0, _common.icons).registerIcon([
    "material",
    "action"
], "note_add", '<path d="M14.59 2.59c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM15 16h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1zm-2-8V3.5L18.5 9H14c-.55 0-1-.45-1-1z"/>');
let offline_bolt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "offline_bolt", '<path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm-.52 15.86v-4.14H8.82c-.37 0-.62-.4-.44-.73l3.68-7.17c.23-.47.94-.3.94.23v4.19h2.54c.37 0 .61.39.45.72l-3.56 7.12c-.24.48-.95.31-.95-.22z"/>');
let offline_pin = (0, _common.icons).registerIcon([
    "material",
    "action"
], "offline_pin", '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 16H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-6.41-4.71L7.7 11.4c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l1.2 1.2 4.6-4.6c.39-.39 1.01-.39 1.4 0 .39.39.39 1.01 0 1.4l-5.29 5.29c-.39.39-1.03.39-1.42 0z"/>');
let online_prediction = (0, _common.icons).registerIcon([
    "material",
    "action"
], "online_prediction", '<path d="M15.5,11.5c0,2-2.5,3.5-2.5,5h-2c0-1.5-2.5-3-2.5-5C8.5,9.57,10.07,8,12,8S15.5,9.57,15.5,11.5z M13,17.5h-2V18 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V17.5z M22,12c0-2.46-0.89-4.71-2.36-6.45c-0.29-0.34-0.8-0.38-1.12-0.06l0,0 c-0.27,0.27-0.3,0.71-0.06,1C19.73,7.97,20.5,9.9,20.5,12c0,2.1-0.77,4.03-2.04,5.52c-0.25,0.29-0.21,0.73,0.06,1l0,0 c0.32,0.32,0.83,0.28,1.12-0.06C21.11,16.71,22,14.46,22,12z M3.5,12c0-2.1,0.77-4.03,2.04-5.52c0.25-0.29,0.21-0.73-0.06-1l0,0 C5.17,5.17,4.65,5.2,4.36,5.54C2.89,7.29,2,9.54,2,12c0,2.46,0.89,4.71,2.36,6.46c0.29,0.34,0.8,0.38,1.12,0.06l0,0 c0.27-0.27,0.3-0.71,0.06-1C4.27,16.03,3.5,14.1,3.5,12z M17.5,12c0,1.28-0.44,2.47-1.18,3.41c-0.23,0.29-0.2,0.71,0.07,0.98l0,0 c0.32,0.32,0.85,0.29,1.13-0.07C18.44,15.13,19,13.63,19,12c0-1.63-0.56-3.13-1.49-4.31c-0.28-0.36-0.81-0.39-1.13-0.07l0,0 c-0.26,0.26-0.3,0.68-0.07,0.98C17.06,9.53,17.5,10.72,17.5,12z M7.62,16.38L7.62,16.38c0.26-0.26,0.3-0.68,0.07-0.98 C6.94,14.47,6.5,13.28,6.5,12c0-1.28,0.44-2.47,1.18-3.41c0.23-0.29,0.2-0.71-0.07-0.98l0,0C7.3,7.3,6.77,7.33,6.49,7.68 C5.56,8.87,5,10.37,5,12c0,1.63,0.56,3.13,1.49,4.32C6.77,16.67,7.3,16.7,7.62,16.38z"/>');
let opacity = (0, _common.icons).registerIcon([
    "material",
    "action"
], "opacity", '<path d="M17.65,7.56L17.65,7.56L12.7,2.69c-0.39-0.38-1.01-0.38-1.4,0L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87C20,10.96,19.1,8.99,17.65,7.56z M7.75,8.99L12,4.81l4.25,4.18 c0.88,0.87,2.04,2.59,1.67,5.01H6.07C5.7,11.58,6.87,9.85,7.75,8.99z"/>');
let open_in_browser = (0, _common.icons).registerIcon([
    "material",
    "action"
], "open_in_browser", '<path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H5V8h14v10h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7.35 6.35l-2.79 2.79c-.32.32-.1.86.35.86H11v5c0 .55.45 1 1 1s1-.45 1-1v-5h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01z"/>');
let open_in_full = (0, _common.icons).registerIcon([
    "material",
    "action"
], "open_in_full", '<path d="M21,8.59V4c0-0.55-0.45-1-1-1h-4.59c-0.89,0-1.34,1.08-0.71,1.71l1.59,1.59l-10,10l-1.59-1.59C4.08,14.08,3,14.52,3,15.41 V20c0,0.55,0.45,1,1,1h4.59c0.89,0,1.34-1.08,0.71-1.71l-1.59-1.59l10-10l1.59,1.59C19.92,9.92,21,9.48,21,8.59z"/>');
let open_in_new = (0, _common.icons).registerIcon([
    "material",
    "action"
], "open_in_new", '<path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"/>');
let open_in_new_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "open_in_new_off", '<path d="M16.79,5.8l-1.94-1.94C14.54,3.54,14.76,3,15.21,3h5.29C20.78,3,21,3.22,21,3.5v5.29c0,0.45-0.54,0.67-0.85,0.35L18.21,7.2 l-4.09,4.09l-1.41-1.41L16.79,5.8z M19,13v3.17l2,2V13c0-0.55-0.45-1-1-1H20C19.45,12,19,12.45,19,13z M19.07,21.9l-0.9-0.9H5 c-1.11,0-2-0.9-2-2V5.83l-0.9-0.9c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97 c0.39,0.39,0.39,1.02,0,1.41l0,0C20.09,22.29,19.46,22.29,19.07,21.9z M16.17,19l-4.88-4.88L10.41,15c-0.39,0.39-1.02,0.39-1.41,0 l0,0c-0.39-0.39-0.39-1.02,0-1.41l0.88-0.88L5,7.83V19H16.17z M7.83,5H11c0.55,0,1-0.45,1-1V4c0-0.55-0.45-1-1-1H5.83L7.83,5z"/>');
let open_with = (0, _common.icons).registerIcon([
    "material",
    "action"
], "open_with", '<path d="M10.5 9h3c.28 0 .5-.22.5-.5V6h1.79c.45 0 .67-.54.35-.85l-3.79-3.79c-.2-.2-.51-.2-.71 0L7.85 5.15c-.31.31-.09.85.36.85H10v2.5c0 .28.22.5.5.5zm-2 1H6V8.21c0-.45-.54-.67-.85-.35l-3.79 3.79c-.2.2-.2.51 0 .71l3.79 3.79c.31.31.85.09.85-.36V14h2.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zm14.15 1.65l-3.79-3.79c-.32-.32-.86-.1-.86.35V10h-2.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5H18v1.79c0 .45.54.67.85.35l3.79-3.79c.2-.19.2-.51.01-.7zM13.5 15h-3c-.28 0-.5.22-.5.5V18H8.21c-.45 0-.67.54-.35.85l3.79 3.79c.2.2.51.2.71 0l3.79-3.79c.31-.31.09-.85-.35-.85H14v-2.5c0-.28-.22-.5-.5-.5z"/>');
let outbound = (0, _common.icons).registerIcon([
    "material",
    "action"
], "outbound", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13.88,11.54l-4.25,4.25 c-0.39,0.39-1.02,0.39-1.41,0l0,0c-0.39-0.39-0.39-1.02,0-1.41l4.25-4.25L11.2,8.86C10.88,8.54,11.11,8,11.55,8l3.94,0 c0.28,0,0.5,0.22,0.5,0.5l0,3.94c0,0.45-0.54,0.67-0.85,0.35L13.88,11.54z"/>');
let outbox = (0, _common.icons).registerIcon([
    "material",
    "action"
], "outbox", '<path d="m5 3c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2h-14zm0 2h14v9h-3.02c-0.63 0-1.22 0.301-1.6 0.801-0.54 0.73-1.4 1.2-2.38 1.2s-1.84-0.469-2.38-1.2c-0.38-0.5-0.97-0.801-1.6-0.801h-3.02v-9zm6.99 2.21c-0.128 0-0.254 0.0484-0.354 0.148l-2.79 2.79c-0.31 0.31-0.0887 0.85 0.361 0.85h1.79v2c0 0.55 0.45 1 1 1s1-0.45 1-1v-2h1.79c0.45 0 0.672-0.54 0.352-0.85l-2.79-2.79c-0.1-0.1-0.228-0.148-0.355-0.148z"/>');
let outlet = (0, _common.icons).registerIcon([
    "material",
    "action"
], "outlet", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M9,12c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1s1,0.45,1,1v3C10,11.55,9.55,12,9,12z M13,18h-2c-0.55,0-1-0.45-1-1v-0.89c0-1,0.68-1.92,1.66-2.08 C12.92,13.82,14,14.79,14,16v1C14,17.55,13.55,18,13,18z M16,11c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1V8c0-0.55,0.45-1,1-1 c0.55,0,1,0.45,1,1V11z"/>');
let pageview = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pageview", '<path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.92 13.5l-2.2-2.2c-.9.58-2.03.84-3.22.62-1.88-.35-3.38-1.93-3.62-3.83-.38-3.01 2.18-5.52 5.21-5.04 1.88.3 3.39 1.84 3.7 3.71.19 1.16-.08 2.23-.64 3.12l2.2 2.19c.39.39.39 1.03 0 1.42-.4.4-1.04.4-1.43.01z"/>');
let paid = (0, _common.icons).registerIcon([
    "material",
    "action"
], "paid", '<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12.88,17.76v0.36c0,0.48-0.39,0.88-0.88,0.88h0 c-0.48,0-0.88-0.39-0.88-0.88v-0.42c-0.63-0.15-1.93-0.61-2.69-2.1c-0.23-0.44-0.01-0.99,0.45-1.18l0.07-0.03 c0.41-0.17,0.87,0,1.08,0.39c0.32,0.61,0.95,1.37,2.12,1.37c0.93,0,1.98-0.48,1.98-1.61c0-0.96-0.7-1.46-2.28-2.03 c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5.88C11.12,5.39,11.52,5,12,5h0c0.48,0,0.88,0.39,0.88,0.88v0.37 c1.07,0.19,1.75,0.76,2.16,1.3c0.34,0.44,0.16,1.08-0.36,1.3l0,0C14.32,9,13.9,8.88,13.66,8.57c-0.28-0.38-0.78-0.77-1.6-0.77 c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45C15.9,17.17,13.4,17.67,12.88,17.76z"/>');
let pan_tool = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pan_tool", '<path d="M21.5 4c-.83 0-1.5.67-1.5 1.5v5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-8c0-.83-.67-1.5-1.5-1.5S16 1.67 16 2.5v8c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.83-.67-1.5-1.5-1.5S12 .67 12 1.5v8.99c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.5c0-.83-.67-1.5-1.5-1.5S8 3.67 8 4.5v11.41l-4.12-2.35c-.58-.33-1.3-.24-1.78.22-.6.58-.62 1.54-.03 2.13l6.78 6.89c.75.77 1.77 1.2 2.85 1.2H19c2.21 0 4-1.79 4-4V5.5c0-.83-.67-1.5-1.5-1.5z"/>');
let payment = (0, _common.icons).registerIcon([
    "material",
    "action"
], "payment", '<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1zm1-10H4V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v1z"/>');
let pending_actions = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pending_actions", '<path d="M18,3h-3.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H6C4.9,3,4,3.9,4,5v15c0,1.1,0.9,2,2,2h6.11 c-0.59-0.57-1.07-1.25-1.42-2H6V5h2v1c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V5h2v5.08c0.71,0.1,1.38,0.31,2,0.6V5C20,3.9,19.1,3,18,3z M12,5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C13,4.55,12.55,5,12,5z M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5 c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.29,19l-1.65-1.65c-0.09-0.09-0.15-0.22-0.15-0.35l0-2.49c0-0.28,0.22-0.5,0.5-0.5h0 c0.28,0,0.5,0.22,0.5,0.5l0,2.29l1.5,1.5c0.2,0.2,0.2,0.51,0,0.71v0C18.8,19.2,18.49,19.2,18.29,19z"/>');
let pending = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pending", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M7,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z"/>');
let perm_camera_mic = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_camera_mic", '<path d="M20 5h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.45-.42-4.41-2.32-4.89-4.75-.12-.61.38-1.16.99-1.16.49 0 .88.35.98.83C8.47 15.64 10.07 17 12 17s3.53-1.36 3.91-3.17c.1-.48.5-.83.98-.83.61 0 1.11.55.99 1.16-.48 2.43-2.44 4.34-4.89 4.75V21h7c1.1 0 2-.9 2-2V7C22 5.9 21.1 5 20 5zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"/>');
let perm_contact_calendar = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_contact_calendar", '<path d="M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/>');
let perm_data_setting = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_data_setting", '<path d="M18.99 11.5c.34 0 .68.03 1.01.07V2.42c0-.89-1.08-1.34-1.71-.71L1.71 18.29c-.63.63-.19 1.71.7 1.71h9.15c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49s-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49s.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>');
let perm_device_information = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_device_information", '<path d="M13 7h-2v2h2V7zm-1 4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm5-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>');
let perm_identity = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_identity", '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"/>');
let perm_media = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_media", '<path d="m7 2c-1.1 0-1.99 0.9-1.99 2l-0.00977 11c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2h-7l-1.41-1.41c-0.38-0.38-0.89-0.59-1.42-0.59h-4.17zm-5 4c-0.55 0-1 0.45-1 1v12c0 1.1 0.9 2 2 2h16c0.55 0 1-0.45 1-1s-0.45-1-1-1h-16v-12c0-0.55-0.45-1-1-1zm13.6 2.83c0.15 0 0.3 0.0662 0.4 0.201l2.38 3.17c0.25 0.33 0.00961 0.801-0.4 0.801h-8c-0.41 0-0.65-0.471-0.4-0.801l1.38-1.83c0.2-0.27 0.599-0.27 0.799 0l1.22 1.63 2.22-2.97c0.1-0.135 0.248-0.201 0.398-0.201z"/>');
let perm_phone_msg = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_phone_msg", '<path d="M20 3h-7c-.55 0-1 .45-1 1v9l3-3h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-.77 12.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>');
let perm_scan_wifi = (0, _common.icons).registerIcon([
    "material",
    "action"
], "perm_scan_wifi", '<path d="M12 3C7.41 3 3.86 4.53.89 6.59c-.49.33-.59 1-.22 1.46l9.78 12.04c.8.98 2.3.99 3.1 0l9.78-12.02c.37-.46.27-1.13-.22-1.46C20.14 4.54 16.59 3 12 3zm0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm-1-8V6h2v2h-2z"/>');
let pets = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pets", '<path d="m17.3 14.9c-0.87-1.02-1.6-1.89-2.48-2.91-0.46-0.54-1.05-1.08-1.75-1.32-0.11-0.04-0.22-0.07-0.33-0.09-0.25-0.04-0.52-0.04-0.78-0.04s-0.53 0-0.79 0.05c-0.11 0.02-0.22 0.05-0.33 0.09-0.7 0.24-1.28 0.78-1.75 1.32-0.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79 0.29 1.02 1.02 2.03 2.33 2.32 0.73 0.15 3.06-0.44 5.54-0.44h0.18c2.48 0 4.81 0.58 5.54 0.44 1.31-0.29 2.04-1.31 2.33-2.32 0.31-2.04-1.3-3.49-2.61-4.8zm4.66-5.36a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5zm-4.5-4a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5zm-6 0a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5zm-4.5 4a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5z"/>');
let picture_in_picture_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "picture_in_picture_alt", '<path d="M18 11h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm5 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-3 .02H4c-.55 0-1-.45-1-1V5.97c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.05c0 .55-.45 1-1 1z"/>');
let picture_in_picture = (0, _common.icons).registerIcon([
    "material",
    "action"
], "picture_in_picture", '<path d="M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1z"/>');
let pin_end = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pin_end", '<path d="M20,12V6H4v12h10l0,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v6H20z M19,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 c1.66,0,3-1.34,3-3S20.66,14,19,14z M14.66,13.66c0.39-0.39,0.39-1.02,0-1.41l-2.12-2.12l1.27-1.27C14.12,8.54,13.9,8,13.45,8H9.5 C9.22,8,9,8.22,9,8.5v3.95c0,0.45,0.54,0.67,0.85,0.35l1.27-1.27l2.12,2.12C13.63,14.05,14.27,14.05,14.66,13.66z"/>');
let pin_invoke = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pin_invoke", '<path d="M22,12v6c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10l0,2H4v12h16v-6H22z M22,7c0-1.66-1.34-3-3-3 c-1.66,0-3,1.34-3,3s1.34,3,3,3C20.66,10,22,8.66,22,7z M9.34,15.66c0.39,0.39,1.02,0.39,1.41,0l2.12-2.12l1.27,1.27 C14.46,15.12,15,14.9,15,14.45V10.5c0-0.28-0.22-0.5-0.5-0.5h-3.95c-0.45,0-0.67,0.54-0.35,0.85l1.27,1.27l-2.12,2.12 C8.95,14.63,8.95,15.27,9.34,15.66z"/>');
let plagiarism = (0, _common.icons).registerIcon([
    "material",
    "action"
], "plagiarism", '<path d="m6 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-11.2c0-0.53-0.21-1.04-0.59-1.42l-4.83-4.83c-0.37-0.37-0.88-0.58-1.41-0.58h-7.17zm7 1.5 5.5 5.5h-4.5c-0.55 0-1-0.45-1-1v-4.5zm-1.51 7.49c0.696 0 1.39 0.202 1.98 0.607 1.55 1.08 1.9 3.04 1.09 4.55l1.18 1.18c0.39 0.39 0.39 1.02 0 1.41s-1.02 0.39-1.41 0l-1.18-1.18c-1.33 0.71-3.01 0.53-4.13-0.59-1.52-1.52-1.35-4.08 0.5-5.37 0.58-0.405 1.28-0.607 1.97-0.607zm0.00781 2.01a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"/>');
let play_for_work = (0, _common.icons).registerIcon([
    "material",
    "action"
], "play_for_work", '<path d="M11 6v4.59H8.71c-.45 0-.67.54-.35.85l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.31-.31.09-.85-.35-.85H13V6c0-.55-.45-1-1-1s-1 .45-1 1zm-3.9 8c-.61 0-1.11.55-.99 1.15C6.65 17.91 9.08 20 12 20s5.35-2.09 5.89-4.85c.12-.6-.38-1.15-.99-1.15-.49 0-.88.35-.98.83C15.53 16.64 13.93 18 12 18s-3.53-1.36-3.91-3.17c-.1-.48-.5-.83-.99-.83z"/>');
let power_settings_new = (0, _common.icons).registerIcon([
    "material",
    "action"
], "power_settings_new", '<path d="M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm5.14 2.86c-.39.39-.38 1-.01 1.39 1.13 1.2 1.83 2.8 1.87 4.57.09 3.83-3.08 7.13-6.91 7.17C8.18 19.05 5 15.9 5 12c0-1.84.71-3.51 1.87-4.76.37-.39.37-1-.01-1.38-.4-.4-1.05-.39-1.43.02C3.98 7.42 3.07 9.47 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25 5.1.16 9.29-3.93 9.29-9 0-2.37-.92-4.51-2.42-6.11-.38-.41-1.04-.42-1.44-.02z"/>');
let pregnant_woman = (0, _common.icons).registerIcon([
    "material",
    "action"
], "pregnant_woman", '<path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.71-1.42-3.08-3.16-3C9.22 7.09 8 8.54 8 10.16V16c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h2c.55 0 1-.45 1-1v-3z"/>');
let preview = (0, _common.icons).registerIcon([
    "material",
    "action"
], "preview", '<path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z"/>');
let print = (0, _common.icons).registerIcon([
    "material",
    "action"
], "print", '<path d="M19 8H5c-1.66 0-3 1.34-3 3v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3zm-4 11H9c-.55 0-1-.45-1-1v-4h8v4c0 .55-.45 1-1 1zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-9H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/>');
let privacy_tip = (0, _common.icons).registerIcon([
    "material",
    "action"
], "privacy_tip", '<path d="M4.19,4.47C3.47,4.79,3,5.51,3,6.3V11c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V6.3c0-0.79-0.47-1.51-1.19-1.83 l-7-3.11c-0.52-0.23-1.11-0.23-1.62,0L4.19,4.47z M12,7L12,7c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v0 C11,7.45,11.45,7,12,7z M12,11L12,11c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-4C11,11.45,11.45,11,12,11z"/>');
let private_connectivity = (0, _common.icons).registerIcon([
    "material",
    "action"
], "private_connectivity", '<path d="M22,12c0-0.55-0.45-1-1-1h-2.07c-0.49-3.39-3.4-6-6.93-6s-6.44,2.61-6.93,6H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h2.07 c0.49,3.39,3.4,6,6.93,6s6.44-2.61,6.93-6H21C21.55,13,22,12.55,22,12z M15,14.5c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1v-1c0-1.21,1.08-2.18,2.34-1.97C13.32,7.69,14,8.61,14,9.61v0.89c0.55,0,1,0.45,1,1V14.5z M12.75,13 c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75S12.75,12.59,12.75,13z M13,9.5v1h-2v-1 c0-0.55,0.45-1,1-1S13,8.95,13,9.5z"/>');
let production_quantity_limits = (0, _common.icons).registerIcon([
    "material",
    "action"
], "production_quantity_limits", '<path d="M12,10L12,10c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C13,9.55,12.55,10,12,10z M12,6L12,6 c-0.55,0-1-0.45-1-1V2c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3C13,5.55,12.55,6,12,6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22 s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45 c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34v0c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.27,2H2 C1.45,2,1,2.45,1,3v0c0,0.55,0.45,1,1,1h1l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7 L8.1,13z"/>');
let published_with_changes = (0, _common.icons).registerIcon([
    "material",
    "action"
], "published_with_changes", '<path d="M16.95,10.23l-5.66,5.66c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0l2.12,2.12l4.95-4.95c0.39-0.39,1.02-0.39,1.41,0l0,0C17.34,9.21,17.34,9.84,16.95,10.23z M4,12 c0-2.33,1.02-4.42,2.62-5.88l1.53,1.53C8.46,7.96,9,7.74,9,7.29V3c0-0.28-0.22-0.5-0.5-0.5H4.21c-0.45,0-0.67,0.54-0.35,0.85 L5.2,4.7C3.24,6.52,2,9.11,2,12c0,4.75,3.32,8.73,7.76,9.75c0.63,0.14,1.24-0.33,1.24-0.98v0c0-0.47-0.33-0.87-0.79-0.98 C6.66,18.98,4,15.8,4,12z M22,12c0-4.75-3.32-8.73-7.76-9.75C13.61,2.11,13,2.58,13,3.23v0c0,0.47,0.33,0.87,0.79,0.98 C17.34,5.02,20,8.2,20,12c0,2.33-1.02,4.42-2.62,5.88l-1.53-1.53C15.54,16.04,15,16.26,15,16.71V21c0,0.28,0.22,0.5,0.5,0.5h4.29 c0.45,0,0.67-0.54,0.35-0.85L18.8,19.3C20.76,17.48,22,14.89,22,12z"/>');
let query_builder = (0, _common.icons).registerIcon([
    "material",
    "action"
], "query_builder", '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"/>');
let question_answer = (0, _common.icons).registerIcon([
    "material",
    "action"
], "question_answer", '<path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"/>');
let quickreply = (0, _common.icons).registerIcon([
    "material",
    "action"
], "quickreply", '<path d="m4 2c-1.1 0-1.99 0.9-1.99 2l-0.00977 18 4-4h9v-7c0-0.55 0.45-1 1-1h6v-6c0-1.1-0.9-2-2-2h-16zm13.5 10c-0.28 0-0.5 0.22-0.5 0.5v5c0 0.28 0.22 0.5 0.5 0.5h1.5v3.94c0 0.26 0.361 0.351 0.471 0.111l2.66-5.33c0.17-0.33-0.0714-0.721-0.441-0.721h-1.39l1.4-3.3c0.14-0.33-0.099-0.699-0.459-0.699h-3.74z"/>');
let radio_button_checked = (0, _common.icons).registerIcon([
    "material",
    "action"
], "radio_button_checked", '<path d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm0 3a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z"/>');
let receipt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "receipt", '<path d="M21 2.21c-.13 0-.26.05-.35.15l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.8-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8c-.09-.09-.22-.14-.35-.14V21.8c.13 0 .26-.05.35-.15l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.1.1.23.15.35.15V2.21zM17 17H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let record_voice_over = (0, _common.icons).registerIcon([
    "material",
    "action"
], "record_voice_over", '<path d="m20.1 2.55c-0.324-0.0175-0.657 0.0948-0.902 0.34-0.4 0.4-0.459 1.02-0.129 1.48 1.97 2.74 1.96 6.41-0.0312 9.25-0.32 0.45-0.249 1.07 0.141 1.46l0.0293 0.0293c0.49 0.49 1.32 0.45 1.74-0.0996 2.75-3.54 2.76-8.37 0-12-0.21-0.275-0.524-0.422-0.848-0.439zm-11.1 2.45a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm7.63 1.03c-0.329-0.0104-0.664 0.109-0.922 0.367l-0.0117 0.00977c-0.34 0.35-0.419 0.889-0.229 1.36 0.32 0.79 0.32 1.67 0 2.46-0.19 0.47-0.11 0.999 0.25 1.36l0.0293 0.0293c0.58 0.58 1.57 0.46 1.95-0.27 0.76-1.45 0.76-3.15-0.0195-4.66-0.214-0.416-0.624-0.643-1.05-0.656zm-7.63 8.97c-2.67 0-8 1.34-8 4v1c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-1c0-2.66-5.33-4-8-4z"/>');
let remove_done = (0, _common.icons).registerIcon([
    "material",
    "action"
], "remove_done", '<path d="M4.14,2.69L4.14,2.69c-0.39,0.39-0.39,1.02,0,1.41l9.67,9.67l-1.41,1.41l-3.54-3.53c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41l4.24,4.24c0.39,0.39,1.02,0.39,1.41,0l2.12-2.12l5.89,5.89c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L5.55,2.69C5.16,2.3,4.53,2.3,4.14,2.69z M18.05,12.36l4.24-4.24c0.39-0.39,0.39-1.03-0.01-1.42l0,0 c-0.39-0.38-1.02-0.38-1.41,0.01l-4.24,4.24L18.05,12.36z M16.64,6.7L16.64,6.7c-0.39-0.39-1.02-0.39-1.41,0l-1.42,1.42l1.41,1.41 l1.42-1.42C17.03,7.72,17.03,7.09,16.64,6.7z M1.79,13.06l4.95,4.95l1.41-1.41L3.2,11.65c-0.39-0.39-1.02-0.39-1.41,0l0,0 C1.4,12.04,1.4,12.67,1.79,13.06z"/>');
let remove_shopping_cart = (0, _common.icons).registerIcon([
    "material",
    "action"
], "remove_shopping_cart", '<path d="M.71 1.83c-.39.39-.39 1.02 0 1.41l3.68 3.68 2.21 4.66-1.35 2.45c-.19.33-.28.73-.24 1.15.1 1.06 1.06 1.82 2.12 1.82h7.33l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84l2.13 2.13c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L2.12 1.83c-.39-.39-1.02-.39-1.41 0zM7 15l1.1-2h2.36l2 2H7zm9.05-2.06c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4H7.12l8.93 8.94zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/>');
let reorder = (0, _common.icons).registerIcon([
    "material",
    "action"
], "reorder", '<path d="M4 15h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>');
let report_problem = (0, _common.icons).registerIcon([
    "material",
    "action"
], "report_problem", '<path d="M2.73 21h18.53c.77 0 1.25-.83.87-1.5l-9.27-16c-.39-.67-1.35-.67-1.73 0l-9.27 16c-.38.67.1 1.5.87 1.5zM13 18h-2v-2h2v2zm-1-4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/>');
let request_page = (0, _common.icons).registerIcon([
    "material",
    "action"
], "request_page", '<path d="M19.41,7.41l-4.83-4.83C14.21,2.21,13.7,2,13.17,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.83 C20,8.3,19.79,7.79,19.41,7.41z M14,12c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1c0,0.55-0.45,1-1,1s-1-0.45-1-1h-1 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3v-1h-3c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h1c0-0.55,0.45-1,1-1s1,0.45,1,1h1 c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1h-3v1H14z"/>');
let restore = (0, _common.icons).registerIcon([
    "material",
    "action"
], "restore", '<path d="M13.25 3c-5.09-.14-9.26 3.94-9.26 9H2.2c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.32-.31.09-.85-.35-.85h-1.8c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.43-.39 1.13.08 1.5 1.52 1.19 3.44 1.9 5.52 1.9 5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.33-.74-.75-.74z"/>');
let restore_from_trash = (0, _common.icons).registerIcon([
    "material",
    "action"
], "restore_from_trash", '<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm5.65-8.65c.2-.2.51-.2.71 0L16 14h-2v4h-4v-4H8l3.65-3.65zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"/>');
let restore_page = (0, _common.icons).registerIcon([
    "material",
    "action"
], "restore_page", '<path d="M19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM12 18c-1.65 0-3.19-.81-4.12-2.17-.23-.34-.15-.81.19-1.04.34-.24.81-.15 1.04.19.65.95 1.73 1.52 2.88 1.52 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.33 0-2.52.74-3.11 1.89L10.5 13H7c-.28 0-.5-.22-.5-.5V9l1.3 1.3C8.71 8.89 10.26 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"/>');
let room = (0, _common.icons).registerIcon([
    "material",
    "action"
], "room", '<path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/>');
let rounded_corner = (0, _common.icons).registerIcon([
    "material",
    "action"
], "rounded_corner", '<path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"/>');
let rowing = (0, _common.icons).registerIcon([
    "material",
    "action"
], "rowing", '<path d="M4.75 18.25c-.41.41-.41 1.09 0 1.5.41.41 1.09.41 1.5 0L9 17h2l-2.5-2.5-3.75 3.75zM15 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.29 15.3l-2-2.01c-.18-.18-.44-.29-.71-.29H16.5l-6.29-6.29c.79-.33 1.66-.87 2.29-1.39v2.27l3.58 3.58c.57-.55.92-1.32.92-2.16V8.26C17 7.02 15.98 6 14.74 6h-.02c-.34 0-.67.09-.96.23-.26.12-.5.29-.69.5l-1.4 1.55C10.61 9.45 8.66 10.35 7 10.32c-.6 0-1.08.48-1.08 1.08 0 .6.48 1.08 1.08 1.08.31 0 .61-.03.9-.07l7.11 7.09v1.08c0 .26.1.52.29.7l1.99 2.01c.39.39 1.02.39 1.42 0l1.58-1.58c.39-.38.39-1.02 0-1.41z"/>');
let rule = (0, _common.icons).registerIcon([
    "material",
    "action"
], "rule", '<path d="M15.83,10.29l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0l1.41,1.41l3.54-3.54 c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41l-4.24,4.24C16.85,10.68,16.22,10.68,15.83,10.29z M10,7H3 C2.45,7,2,7.45,2,8v0c0,0.55,0.45,1,1,1h7c0.55,0,1-0.45,1-1v0C11,7.45,10.55,7,10,7z M20.29,12.71L20.29,12.71 c-0.39-0.39-1.02-0.39-1.41,0L17,14.59l-1.88-1.88c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41L15.59,16 l-1.88,1.88c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0L17,17.41l1.88,1.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L18.41,16l1.88-1.88C20.68,13.73,20.68,13.1,20.29,12.71z M10,15H3c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h7c0.55,0,1-0.45,1-1v0C11,15.45,10.55,15,10,15z"/>');
let saved_search = (0, _common.icons).registerIcon([
    "material",
    "action"
], "saved_search", '<path d="m9.57 3c-4.07-0.0362-7.28 3.66-6.43 7.86 0.46 2.29 2.21 4.18 4.44 4.85 2.16 0.65 4.19 0.15 5.74-0.98l5.56 5.56c0.39 0.39 1.02 0.39 1.41 0 0.39-0.39 0.39-1.02 0-1.41l-5.56-5.57c1.13-1.55 1.63-3.58 0.98-5.74-0.68-2.23-2.57-3.98-4.85-4.44-0.436-0.0872-0.866-0.131-1.29-0.135zm-0.0723 2c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5zm0 1-0.789 2.44h-2.46l2.01 1.59-0.77 2.47 2.01-1.53 2.01 1.53-0.77-2.47 2.01-1.59h-2.46l-0.789-2.44z"/>');
let savings = (0, _common.icons).registerIcon([
    "material",
    "action"
], "savings", '<path d="M19.83,7.5l-2.27-2.27c0.07-0.42,0.18-0.81,0.32-1.15c0.11-0.26,0.15-0.56,0.09-0.87C17.84,2.49,17.14,1.99,16.4,2 c-1.59,0.03-3,0.81-3.9,2l-5,0C4.46,4,2,6.46,2,9.5c0,2.25,1.37,7.48,2.08,10.04C4.32,20.4,5.11,21,6.01,21L8,21c1.1,0,2-0.9,2-2v0 h2v0c0,1.1,0.9,2,2,2l2.01,0c0.88,0,1.66-0.58,1.92-1.43l1.25-4.16l2.14-0.72c0.41-0.14,0.68-0.52,0.68-0.95V8.5c0-0.55-0.45-1-1-1 H19.83z M12,9H9C8.45,9,8,8.55,8,8v0c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v0C13,8.55,12.55,9,12,9z M16,11c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C17,10.55,16.55,11,16,11z"/>');
let schedule = (0, _common.icons).registerIcon([
    "material",
    "action"
], "schedule", '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"/>');
let schedule_send = (0, _common.icons).registerIcon([
    "material",
    "action"
], "schedule_send", '<path d="m4.02 4.5c-0.535-0.00543-1.02 0.421-1.02 1.01v3.71c0 0.46 0.31 0.859 0.76 0.969l7.24 1.81-7.24 1.81c-0.45 0.11-0.76 0.509-0.76 0.969v3.71c0 0.72 0.731 1.2 1.39 0.92l5.61-2.36v-0.0508c0-3.86 3.14-7 7-7 0.1 0 0.189 0.00977 0.279 0.00977l-12.9-5.43c-0.124-0.0506-0.25-0.0749-0.373-0.0762zm13 7.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-0.00977 2c0.28 0 0.5 0.22 0.5 0.5v2.29l1.5 1.5c0.2 0.2 0.2 0.511 0 0.711-0.19 0.2-0.501 0.2-0.701 0l-1.65-1.65c-0.09-0.09-0.15-0.22-0.15-0.35v-2.5c0-0.28 0.22-0.5 0.5-0.5z"/>');
let search = (0, _common.icons).registerIcon([
    "material",
    "action"
], "search", '<path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>');
let search_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "search_off", '<path d="m9.63 3c-3.48-0.0664-6.34 2.61-6.6 6h2.02c0.24-2.12 1.92-3.8 4.06-3.98 2.54-0.22 4.89 1.93 4.89 4.48 0 2.49-2.01 4.5-4.5 4.5-0.17 0-0.33-0.0308-0.5-0.0508v2.02l0.00977 0.00977c1.8 0.13 3.47-0.471 4.72-1.55l0.27 0.281v0.789l4.25 4.25c0.41 0.41 1.08 0.41 1.49 0s0.41-1.08 0-1.49l-4.24-4.26h-0.789l-0.281-0.27c1.2-1.4 1.82-3.31 1.48-5.34-0.47-2.78-2.79-4.99-5.58-5.34-0.237-0.0294-0.471-0.0464-0.703-0.0508zm-8.1 8.02c-0.128 0-0.255 0.0504-0.355 0.15-0.2 0.2-0.2 0.511 0 0.711l2.12 2.12-2.12 2.12c-0.2 0.2-0.2 0.511 0 0.711 0.2 0.2 0.511 0.2 0.711 0l2.12-2.12 2.12 2.12c0.2 0.2 0.511 0.2 0.711 0s0.2-0.511 0-0.711l-2.12-2.12 2.12-2.12c0.2-0.2 0.2-0.511 0-0.711-0.2-0.19-0.511-0.19-0.711 0l-2.12 2.12-2.12-2.12c-0.1-0.1-0.228-0.15-0.355-0.15z"/>');
let segment = (0, _common.icons).registerIcon([
    "material",
    "action"
], "segment", '<path d="M10,18h10c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H10c-0.55,0-1,0.45-1,1v0C9,17.55,9.45,18,10,18z M3,7L3,7 c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M10,13h10c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H10c-0.55,0-1,0.45-1,1v0C9,12.55,9.45,13,10,13z"/>');
let send_and_archive = (0, _common.icons).registerIcon([
    "material",
    "action"
], "send_and_archive", '<path d="m3 4v6l8 2-8 2v6l7-2.95v-0.0508c0-3.87 3.13-7 7-7 0.1 0 0.189 0.00977 0.279 0.00977l-14.3-6.01zm14 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c0.28 0 0.5 0.22 0.5 0.5v2.5h1.29c0.45 0 0.671 0.54 0.361 0.85l-1.79 1.79c-0.2 0.2-0.509 0.2-0.709 0l-1.79-1.79c-0.32-0.31-0.0984-0.85 0.352-0.85h1.29v-2.5c0-0.28 0.22-0.5 0.5-0.5z"/>');
let sensors = (0, _common.icons).registerIcon([
    "material",
    "action"
], "sensors", '<path d="M8.54,8.54c0.35,0.35,0.37,0.88,0.1,1.29C8.24,10.45,8,11.2,8,12c0,0.8,0.24,1.55,0.64,2.17c0.27,0.41,0.24,0.95-0.11,1.29 c-0.43,0.43-1.17,0.4-1.51-0.11C6.38,14.4,6,13.24,6,12c0-1.21,0.36-2.33,0.97-3.28C7.33,8.18,8.08,8.08,8.54,8.54z M15.46,15.46 c0.43,0.43,1.17,0.4,1.51-0.11C17.62,14.4,18,13.24,18,12c0-1.24-0.38-2.4-1.03-3.36c-0.34-0.5-1.08-0.54-1.51-0.11 c-0.35,0.35-0.37,0.88-0.11,1.29C15.76,10.45,16,11.2,16,12c0,0.8-0.24,1.55-0.64,2.17C15.09,14.58,15.12,15.12,15.46,15.46z M12,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M18.32,18.32c0.42,0.42,1.12,0.39,1.5-0.08C21.18,16.53,22,14.36,22,12 s-0.82-4.53-2.18-6.24c-0.37-0.47-1.07-0.5-1.5-0.08c-0.36,0.36-0.4,0.92-0.08,1.32c1.1,1.37,1.76,3.11,1.76,5s-0.66,3.63-1.76,5 C17.92,17.39,17.96,17.96,18.32,18.32z M5.68,5.68c-0.42-0.42-1.12-0.39-1.5,0.08C2.82,7.47,2,9.64,2,12s0.82,4.53,2.18,6.24 c0.37,0.47,1.07,0.5,1.5,0.08c0.36-0.36,0.4-0.92,0.08-1.32C4.66,15.63,4,13.89,4,12s0.66-3.63,1.76-5 C6.08,6.61,6.04,6.04,5.68,5.68z"/>');
let sensors_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "sensors_off", '<path d="M5.68,18.32c-0.42,0.42-1.12,0.39-1.5-0.08C2.82,16.53,2,14.36,2,12c0-2.04,0.61-3.93,1.66-5.51L2.1,4.93 c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97c0.39,0.39,0.39,1.02,0,1.41s-1.02,0.39-1.41,0L8.14,10.96 C8.05,11.29,8,11.64,8,12c0,0.8,0.24,1.55,0.64,2.17c0.27,0.41,0.24,0.94-0.1,1.29c-0.43,0.43-1.17,0.4-1.51-0.11 C6.38,14.4,6,13.24,6,12c0-0.93,0.21-1.8,0.58-2.59L5.11,7.94C4.4,9.13,4,10.52,4,12c0,1.89,0.66,3.63,1.76,5 C6.08,17.39,6.04,17.96,5.68,18.32z M15.46,8.54c-0.35,0.35-0.37,0.88-0.11,1.29C15.76,10.45,16,11.2,16,12 c0,0.36-0.05,0.71-0.14,1.04l1.55,1.55C17.79,13.8,18,12.93,18,12c0-1.24-0.38-2.4-1.03-3.36C16.63,8.14,15.9,8.1,15.46,8.54z M18.32,5.68c-0.36,0.36-0.4,0.92-0.08,1.32c1.1,1.37,1.76,3.11,1.76,5c0,1.48-0.4,2.87-1.11,4.06l1.45,1.45 C21.39,15.93,22,14.04,22,12c0-2.36-0.82-4.53-2.18-6.24C19.44,5.29,18.74,5.26,18.32,5.68z"/>');
let settings_accessibility = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_accessibility", '<path d="M20.74,4.96c-0.13-0.53-0.67-0.85-1.2-0.73C17.16,4.77,14.49,5,12,5S6.84,4.77,4.46,4.24c-0.54-0.12-1.07,0.19-1.2,0.73 L3.24,5.02C3.11,5.56,3.43,6.12,3.97,6.24C5.59,6.61,7.34,6.86,9,7v11c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-5h2v5 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V7c1.66-0.14,3.41-0.39,5.03-0.76c0.54-0.12,0.86-0.68,0.73-1.22L20.74,4.96z M12,4 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z M8,24L8,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0 C7,23.55,7.45,24,8,24z M12,24L12,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C11,23.55,11.45,24,12,24z M16,24L16,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C15,23.55,15.45,24,16,24z"/>');
let settings_applications = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_applications", '<path d="m5 3c-1.11 0-2 0.9-2 2v14c0 1.1 0.89 2 2 2h14c1.11 0 2-0.9 2-2v-14c0-1.1-0.89-2-2-2h-14zm6.41 4h1.18c0.24 0 0.44 0.17 0.49 0.4l0.221 1.09c0.4 0.15 0.76 0.359 1.08 0.629l1.06-0.359c0.23-0.08 0.47 0.0207 0.59 0.221l0.59 1.02c0.12 0.21 0.0804 0.471-0.0996 0.631l-0.84 0.729c0.04 0.22 0.0703 0.421 0.0703 0.641s-0.0305 0.421-0.0605 0.631l0.84 0.729c0.18 0.16 0.222 0.421 0.102 0.631l-0.592 1.02c-0.12 0.21-0.37 0.301-0.59 0.221l-1.06-0.361c-0.32 0.27-0.68 0.481-1.08 0.631l-0.221 1.09c-0.05 0.23-0.25 0.4-0.49 0.4h-1.18c-0.24 0-0.44-0.17-0.49-0.4l-0.219-1.09c-0.4-0.15-0.76-0.361-1.08-0.631l-1.06 0.361c-0.23 0.08-0.47-0.0207-0.59-0.221l-0.59-1.02c-0.12-0.21-0.0804-0.471 0.0996-0.631l0.84-0.729c-0.05-0.21-0.0801-0.411-0.0801-0.631s0.0305-0.421 0.0605-0.631l-0.84-0.729c-0.18-0.16-0.222-0.421-0.102-0.631l0.592-1.02c0.12-0.21 0.37-0.301 0.59-0.221l1.06 0.361c0.32-0.27 0.68-0.481 1.08-0.631l0.221-1.09c0.06-0.24 0.26-0.41 0.5-0.41zm0.59 3a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z"/>');
let settings_backup_restore = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_backup_restore", '<path d="M11.77,3c-2.65,0.07-5,1.28-6.6,3.16L3.85,4.85C3.54,4.54,3,4.76,3,5.21V9.5C3,9.78,3.22,10,3.5,10h4.29 c0.45,0,0.67-0.54,0.35-0.85L6.59,7.59C7.88,6.02,9.82,5,12,5c4.32,0,7.74,3.94,6.86,8.41c-0.54,2.77-2.81,4.98-5.58,5.47 c-3.8,0.68-7.18-1.74-8.05-5.16C5.11,13.3,4.71,13,4.27,13h0c-0.65,0-1.14,0.61-0.98,1.23C4.28,18.12,7.8,21,12,21 c5.06,0,9.14-4.17,9-9.26C20.86,6.86,16.65,2.88,11.77,3z M14,12c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,13.1,14,12z"/>');
let settings_bluetooth = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_bluetooth", '<path d="m11.7 0c-0.39 0-0.711 0.321-0.711 0.711v6.88l-3.89-3.88c-0.39-0.39-1.02-0.39-1.41 0-0.39 0.39-0.39 1.02 0 1.41l4.89 4.88-4.89 4.89c-0.39 0.39-0.39 1.02 0 1.41 0.39 0.39 1.02 0.39 1.41 0l3.89-3.89v6.88c0 0.39 0.321 0.711 0.711 0.711 0.19 0 0.37-0.0709 0.5-0.211l4.79-4.79c0.39-0.39 0.39-1.02 0-1.42l-3.59-3.58 3.59-3.58c0.39-0.39 0.39-1.02 0-1.42l-4.79-4.79c-0.14-0.14-0.32-0.211-0.5-0.211zm1.29 3.83 1.88 1.88-1.88 1.88v-3.76zm0 8.58 1.88 1.88-1.88 1.88v-3.76zm-5 9.59a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>');
let settings_brightness = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_brightness", '<path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M17.15,12.35L16,13.5v2 c0,0.28-0.22,0.5-0.5,0.5h-2l-1.15,1.15c-0.2,0.2-0.51,0.2-0.71,0L10.5,16h-2C8.22,16,8,15.78,8,15.5v-2l-1.15-1.15 c-0.2-0.2-0.2-0.51,0-0.71L8,10.5v-2C8,8.22,8.22,8,8.5,8h2l1.15-1.15c0.2-0.2,0.51-0.2,0.71,0L13.5,8h2C15.78,8,16,8.22,16,8.5v2 l1.15,1.15C17.34,11.84,17.34,12.16,17.15,12.35z M12,9v6c1.66,0,3-1.34,3-3C15,10.34,13.66,9,12,9z"/>');
let settings_cell = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_cell", '<path d="M8,24L8,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C7,23.55,7.45,24,8,24z M12,24L12,24 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C11,23.55,11.45,24,12,24z M16,24L16,24c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C15,23.55,15.45,24,16,24z M16,0.01L8,0C6.9,0,6,0.9,6,2v16c0,1.1,0.9,2,2,2h8 c1.1,0,2-0.9,2-2V2C18,0.9,17.1,0.01,16,0.01z M16,16H8V4h8V16z"/>');
let settings_ethernet = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_ethernet", '<path d="M7.71,6.71L7.71,6.71c-0.39-0.39-1.02-0.39-1.41,0l-4.59,4.59c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.83,12l3.88-3.88C8.09,7.73,8.09,7.09,7.71,6.71z M16.29,6.71 L16.29,6.71c-0.39,0.39-0.39,1.02,0,1.41L20.17,12l-3.88,3.88c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0 l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59C17.32,6.32,16.68,6.32,16.29,6.71z M8,13L8,13c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C7,12.55,7.45,13,8,13z M12,13L12,13c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0 c-0.55,0-1,0.45-1,1v0C11,12.55,11.45,13,12,13z M16,11L16,11c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v0 C17,11.45,16.55,11,16,11z"/>');
let settings_input_antenna = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_input_antenna", '<path d="M12,5c-3.48,0-6.37,2.54-6.91,5.87c-0.1,0.59,0.39,1.13,1,1.13c0.49,0,0.9-0.36,0.98-0.85C7.48,8.79,9.53,7,12,7 s4.52,1.79,4.93,4.15c0.08,0.49,0.49,0.85,0.98,0.85c0.61,0,1.09-0.54,0.99-1.13C18.37,7.54,15.48,5,12,5z M13,14.29 c1.07-0.48,1.76-1.66,1.41-2.99c-0.22-0.81-0.87-1.47-1.68-1.7C11.04,9.12,9.5,10.38,9.5,12c0,1.02,0.62,1.9,1.5,2.29v3.3 l-2.71,2.7c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0l2.3-2.3l2.3,2.3c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41 L13,17.59V14.29z M12,1C6.3,1,1.61,5.34,1.05,10.9C1,11.49,1.46,12,2.05,12c0.51,0,0.94-0.38,0.99-0.88C3.48,6.56,7.33,3,12,3 s8.52,3.56,8.96,8.12c0.05,0.5,0.48,0.88,0.99,0.88c0.59,0,1.06-0.51,1-1.1C22.39,5.34,17.7,1,12,1z"/>');
let settings_input_component = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_input_component", '<path d="M5,2c0-0.55-0.45-1-1-1S3,1.45,3,2v4H2C1.45,6,1,6.45,1,7v5h6V7c0-0.55-0.45-1-1-1H5V2z M9,16c0,1.3,0.84,2.4,2,2.82V22 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3.18c1.16-0.41,2-1.51,2-2.82v-2H9V16z M1,16c0,1.3,0.84,2.4,2,2.82V22c0,0.55,0.45,1,1,1 h0c0.55,0,1-0.45,1-1v-3.18C6.16,18.4,7,17.3,7,16v-2H1V16z M21,6V2c0-0.55-0.45-1-1-1s-1,0.45-1,1v4h-1c-0.55,0-1,0.45-1,1v5h6V7 c0-0.55-0.45-1-1-1H21z M13,2c0-0.55-0.45-1-1-1s-1,0.45-1,1v4h-1C9.45,6,9,6.45,9,7v5h6V7c0-0.55-0.45-1-1-1h-1V2z M17,16 c0,1.3,0.84,2.4,2,2.82V22c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3.18c1.16-0.41,2-1.51,2-2.82v-2h-6V16z"/>');
let settings_input_hdmi = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_input_hdmi", '<path d="M18,7V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v3C5.45,7,5,7.45,5,8v4.7c0,0.2,0.06,0.39,0.17,0.55L8,19v2c0,0.55,0.45,1,1,1h6 c0.55,0,1-0.45,1-1v-2l2.83-5.75C18.94,13.09,19,12.89,19,12.7V8C19,7.45,18.55,7,18,7z M16,7h-2V5.5C14,5.22,13.78,5,13.5,5 S13,5.22,13,5.5V7h-2V5.5C11,5.22,10.78,5,10.5,5S10,5.22,10,5.5V7H8V4h8V7z"/>');
let settings_input_svideo = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_input_svideo", '<path d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm-1.5 2c-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5h3c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5h-3zm-3 4a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm-7.5 4.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm6 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"/>');
let settings_overscan = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_overscan", '<path d="M12.01,7L10,9h4L12.01,7z M17,10v4l2-1.99L17,10z M7,10l-2,2.01L7,14V10z M14,15h-4l2.01,2L14,15z M20,4H4C2.9,4,2,4.9,2,6 v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z"/>');
let settings_phone = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_phone", '<path d="m4 3c-0.56 0-1.03 0.469-1 1.03 0.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43 0.56 0.03 1.03-0.44 1.03-1v-4.15c0-0.48-0.341-0.89-0.801-0.98l-3.67-0.729c-0.33-0.07-0.668 0.0298-0.898 0.26l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c0.23-0.24 0.331-0.57 0.271-0.9l-0.75-3.68c-0.09-0.46-0.5-0.801-0.98-0.801h-4.15zm8 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>');
let settings_power = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_power", '<path d="M8,24L8,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C7,23.55,7.45,24,8,24z M12,24L12,24 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C11,23.55,11.45,24,12,24z M12,2c-0.55,0-1,0.45-1,1v8 c0,0.55,0.45,1,1,1s1-0.45,1-1V3C13,2.45,12.55,2,12,2z M15.94,5.06l-0.02,0.02C15.51,5.49,15.56,6.16,16,6.54 c1.51,1.34,2.33,3.43,1.88,5.7c-0.46,2.28-2.29,4.14-4.56,4.62C9.43,17.69,6,14.74,6,11c0-1.78,0.78-3.37,2.01-4.47 c0.43-0.39,0.47-1.04,0.07-1.45L8.06,5.06C7.69,4.69,7.1,4.67,6.7,5.02c-2.01,1.77-3.12,4.53-2.56,7.52 c0.59,3.15,3.11,5.7,6.26,6.31c5.12,0.99,9.6-2.9,9.6-7.85c0-2.38-1.05-4.52-2.71-5.99C16.9,4.67,16.31,4.69,15.94,5.06z M16,24 L16,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C15,23.55,15.45,24,16,24z"/>');
let settings_remote = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_remote", '<path d="m12 0c-2.64 0-5.06 0.931-6.95 2.47-0.46 0.38-0.5 1.07-0.0801 1.49 0.36 0.36 0.928 0.388 1.32 0.0684 1.55-1.26 3.54-2.03 5.71-2.03s4.16 0.769 5.7 2.04c0.39 0.32 0.96 0.292 1.32-0.0684 0.42-0.42 0.38-1.11-0.0801-1.49-1.88-1.55-4.3-2.48-6.94-2.48zm0 4c-1.53 0-2.94 0.49-4.09 1.32-0.49 0.35-0.52 1.07-0.0898 1.5 0.35 0.35 0.899 0.38 1.3 0.0996 0.81-0.58 1.81-0.92 2.88-0.92s2.07 0.34 2.88 0.91c0.4 0.28 0.949 0.26 1.3-0.0898 0.43-0.43 0.39-1.15-0.0898-1.5-1.15-0.83-2.56-1.32-4.09-1.32zm-3 5c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1h-6zm3 2.75c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25-1.25-0.56-1.25-1.25 0.56-1.25 1.25-1.25z"/>');
let settings_voice = (0, _common.icons).registerIcon([
    "material",
    "action"
], "settings_voice", '<path d="M8,24L8,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C7,23.55,7.45,24,8,24z M12,24L12,24 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C11,23.55,11.45,24,12,24z M16,24L16,24c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C15,23.55,15.45,24,16,24z M9,10V4c0-1.66,1.34-3,3-3s3,1.34,3,3v6c0,1.66-1.34,3-3,3 S9,11.66,9,10z M17.91,10c0.61,0,1.09,0.54,1,1.14c-0.49,3-2.89,5.34-5.91,5.78V19c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-2.08 c-3.02-0.44-5.42-2.78-5.91-5.78c-0.1-0.6,0.39-1.14,1-1.14h0c0.49,0,0.9,0.36,0.98,0.85C7.48,13.21,9.53,15,12,15 s4.52-1.79,4.93-4.15C17.01,10.36,17.42,10,17.91,10L17.91,10z"/>');
let shop_two = (0, _common.icons).registerIcon([
    "material",
    "action"
], "shop_two", '<path d="M2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h14c1.11 0 2-.89 2-2H4c-.55 0-1-.45-1-1v-9c0-.55-.45-1-1-1zm16-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3zm-6-2h4v2h-4V3zm0 11.02V8.84c0-.38.41-.62.74-.44l4.07 2.22c.32.18.35.63.05.84l-4.07 2.96c-.33.24-.79.01-.79-.4z"/>');
let shop = (0, _common.icons).registerIcon([
    "material",
    "action"
], "shop", '<path d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-4zm-6-2h4v2h-4V4zM9 17.07V9.83c0-.38.4-.62.74-.44l6.03 3.21c.33.18.36.65.04.86l-6.03 4.02c-.33.22-.78-.01-.78-.41z"/>');
let shopping_bag = (0, _common.icons).registerIcon([
    "material",
    "action"
], "shopping_bag", '<path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M10,10c0,0.55-0.45,1-1,1s-1-0.45-1-1V8h2V10z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,10c0,0.55-0.45,1-1,1 s-1-0.45-1-1V8h2V10z"/>');
let shopping_basket = (0, _common.icons).registerIcon([
    "material",
    "action"
], "shopping_basket", '<path d="M22 9h-4.79l-4.39-6.57c-.4-.59-1.27-.59-1.66 0L6.77 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM11.99 4.79L14.8 9H9.18l2.81-4.21zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>');
let shopping_cart = (0, _common.icons).registerIcon([
    "material",
    "action"
], "shopping_cart", '<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>');
let smart_button = (0, _common.icons).registerIcon([
    "material",
    "action"
], "smart_button", '<path d="M22,9v6c0,1.1-0.9,2-2,2h-1l0-2h1V9H4v6h6v2H4c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h16C21.1,7,22,7.9,22,9z M14.04,17.99 c0.18,0.39,0.73,0.39,0.91,0l0.63-1.4l1.4-0.63c0.39-0.18,0.39-0.73,0-0.91l-1.4-0.63l-0.63-1.4c-0.18-0.39-0.73-0.39-0.91,0 l-0.63,1.4l-1.4,0.63c-0.39,0.18-0.39,0.73,0,0.91l1.4,0.63L14.04,17.99z M16.74,13.43c0.1,0.22,0.42,0.22,0.52,0l0.36-0.8 l0.8-0.36c0.22-0.1,0.22-0.42,0-0.52l-0.8-0.36l-0.36-0.8c-0.1-0.22-0.42-0.22-0.52,0l-0.36,0.8l-0.8,0.36 c-0.22,0.1-0.22,0.42,0,0.52l0.8,0.36L16.74,13.43z"/>');
let source = (0, _common.icons).registerIcon([
    "material",
    "action"
], "source", '<path d="M20,6h-8l-1.41-1.41C10.21,4.21,9.7,4,9.17,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M14,16H6v-2h8V16z M18,12H6v-2h12V12z"/>');
let space_dashboard = (0, _common.icons).registerIcon([
    "material",
    "action"
], "space_dashboard", '<path d="M9,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v14C11,20.1,10.1,21,9,21z M15,21h4c1.1,0,2-0.9,2-2v-5 c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v5C13,20.1,13.9,21,15,21z M21,8V5c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h4 C20.1,10,21,9.1,21,8z"/>');
let speaker_notes_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "speaker_notes_off", '<path d="M1.91 2.36c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l1.38 1.38L2 22l4-4h9l5.09 5.09c.35.35.92.35 1.27 0s.35-.92 0-1.27L1.91 2.36zM7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13-9H4.08l7 7H17c.55 0 1 .45 1 1s-.45 1-1 1h-3.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2zm-3 6h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let speaker_notes = (0, _common.icons).registerIcon([
    "material",
    "action"
], "speaker_notes", '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm6 6h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm3-3h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm0-3h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let spellcheck = (0, _common.icons).registerIcon([
    "material",
    "action"
], "spellcheck", '<path d="M13.12 16c.69 0 1.15-.69.9-1.32L9.77 3.87C9.56 3.34 9.06 3 8.5 3s-1.06.34-1.27.87L2.98 14.68c-.25.63.22 1.32.9 1.32.4 0 .76-.25.91-.63L5.67 13h5.64l.9 2.38c.15.37.51.62.91.62zm-6.69-5L8.5 5.48 10.57 11H6.43zm14.46 1.29l-7.39 7.39-2.97-2.97c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.68 3.68c.39.39 1.02.39 1.41 0l8.08-8.09c.39-.39.39-1.02 0-1.41-.38-.39-1.02-.39-1.4-.01z"/>');
let star_rate = (0, _common.icons).registerIcon([
    "material",
    "action"
], "star_rate", '<path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z"/>');
let stars = (0, _common.icons).registerIcon([
    "material",
    "action"
], "stars", '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"/>');
let sticky_note = (0, _common.icons).registerIcon([
    "material",
    "action"
], "sticky_note", '<path d="M19,3H4.99C3.89,3,3,3.9,3,5l0.01,14c0,1.1,0.89,2,1.99,2h10l6-6V5C21,3.9,20.1,3,19,3z M8,8h8c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1v0C7,8.45,7.45,8,8,8z M11,14H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h3 c0.55,0,1,0.45,1,1v0C12,13.55,11.55,14,11,14z M14,19.5V15c0-0.55,0.45-1,1-1h4.5L14,19.5z"/>');
let store = (0, _common.icons).registerIcon([
    "material",
    "action"
], "store", '<path d="M5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm15.16 1.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H4v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5h.18c.63 0 1.1-.58.98-1.2l-1-5zM12 18H6v-4h6v4z"/>');
let subject = (0, _common.icons).registerIcon([
    "material",
    "action"
], "subject", '<path d="M13 17H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm6-8H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zM4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z"/>');
let subtitles_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "subtitles_off", '<path d="m2.46 2.87c-0.255 0-0.51 0.098-0.705 0.293-0.39 0.39-0.39 1.02 0 1.41l0.49 0.49c-0.15 0.29-0.24 0.599-0.24 0.939v12c0 1.1 0.9 2 2 2h13.2l2.25 2.25c0.39 0.39 1.02 0.39 1.41 0s0.39-1.02 0-1.41l-0.83-0.84-16.8-16.8c-0.195-0.195-0.45-0.293-0.705-0.293zm4.38 1.13 8 8h4.17c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2.17l4.93 4.93c0.15-0.28 0.24-0.59 0.24-0.93v-12c0-1.1-0.9-2-2-2h-13.2zm-1.83 8h2c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 4h8c0.08 0 0.141 0.0291 0.211 0.0391l0.738 0.74c0.02 0.08 0.0508 0.141 0.0508 0.221 0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1s0.45-1 1-1z"/>');
let supervised_user_circle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "supervised_user_circle", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.61 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93-1.93-.86-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36s-1.06 2.36-2.36 2.36-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM12 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15C18.28 17.88 15.39 20 12 20z"/>');
let supervisor_account = (0, _common.icons).registerIcon([
    "material",
    "action"
], "supervisor_account", '<path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V18c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h6v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>');
let support = (0, _common.icons).registerIcon([
    "material",
    "action"
], "support", '<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M19.46,9.12l-2.78,1.15 c-0.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78C16.98,5.35,18.65,7.02,19.46,9.12z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S13.66,15,12,15z M9.13,4.54l1.17,2.78c-1.38,0.5-2.47,1.59-2.98,2.97L4.54,9.13C5.35,7.02,7.02,5.35,9.13,4.54z M4.54,14.87 l2.78-1.15c0.51,1.38,1.59,2.46,2.97,2.96l-1.17,2.78C7.02,18.65,5.35,16.98,4.54,14.87z M14.88,19.46l-1.15-2.78 c1.37-0.51,2.45-1.59,2.95-2.97l2.78,1.17C18.65,16.98,16.98,18.65,14.88,19.46z"/>');
let swap_horiz = (0, _common.icons).registerIcon([
    "material",
    "action"
], "swap_horiz", '<path d="M6.14 11.86l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.32.85.09.85-.35V16H13c.55 0 1-.45 1-1s-.45-1-1-1H6.99v-1.79c0-.45-.54-.67-.85-.35zm14.51-3.21l-2.78-2.79c-.31-.32-.85-.09-.85.35V8H11c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.2-.19.2-.51.01-.7z"/>');
let swap_horizontal_circle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "swap_horizontal_circle", '<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5l3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4V6.5zm-6 11l-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9v2.5z"/>');
let swap_vert = (0, _common.icons).registerIcon([
    "material",
    "action"
], "swap_vert", '<path d="M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35c-.19-.19-.51-.19-.7 0z"/>');
let swap_vertical_circle = (0, _common.icons).registerIcon([
    "material",
    "action"
], "swap_vertical_circle", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9H6.5zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5l-3.15 3.15z"/>');
let swipe = (0, _common.icons).registerIcon([
    "material",
    "action"
], "swipe", '<path d="m12 1c-3.6 0-6.69 1.17-8.13 2.87l-1.02-1.02c-0.31-0.31-0.85-0.0887-0.85 0.361v3.29c0 0.28 0.22 0.5 0.5 0.5h3.29c0.45 0 0.672-0.54 0.352-0.85l-1.21-1.22c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43l-1.22 1.22c-0.31 0.31-0.0887 0.85 0.361 0.85h3.29c0.28 0 0.5-0.22 0.5-0.5v-3.29c0-0.45-0.54-0.671-0.85-0.361l-1.02 1.02c-1.44-1.7-4.53-2.87-8.13-2.87zm-0.5 4c-0.83 0-1.5 0.67-1.5 1.5v10.7l-3.44-0.721c-0.37-0.08-0.761 0.0405-1.03 0.311-0.43 0.44-0.43 1.14 0.00977 1.58l4.01 4.01c0.37 0.37 0.88 0.58 1.41 0.58h6.41c1 0 1.84-0.731 1.98-1.72l0.631-4.46c0.12-0.85-0.32-1.69-1.09-2.07l-4.39-2.04c-0.28-0.14-0.581-0.211-0.891-0.211h-0.609v-6c0-0.83-0.67-1.5-1.5-1.5z"/>');
let switch_access_shortcut_add = (0, _common.icons).registerIcon([
    "material",
    "action"
], "switch_access_shortcut_add", '<path d="M21,18c0.55,0,1-0.45,1-1v-1h1c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-1v-1c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1v1h-1 c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1v1C20,17.55,20.45,18,21,18z M7.06,8.94L5,8l2.06-0.94L8,5l0.94,2.06L11,8L8.94,8.94L8,11 L7.06,8.94z M8,21l0.94-2.06L11,18l-2.06-0.94L8,15l-0.94,2.06L5,18l2.06,0.94L8,21z M4.37,12.37L3,13l1.37,0.63L5,15l0.63-1.37 L7,13l-1.37-0.63L5,11L4.37,12.37z M19,20.41c0,0.78-0.84,1.25-1.51,0.86C14.21,19.36,12,15.79,12,12c0-2.73,1.08-5.27,2.75-7.25 l-1.9-1.9C12.54,2.54,12.76,2,13.21,2h5.29C18.78,2,19,2.22,19,2.5v5.29c0,0.45-0.54,0.67-0.85,0.35l-1.97-1.97 C14.84,7.82,14,9.88,14,12c0,3.13,1.86,6.01,4.51,7.55C18.81,19.73,19,20.06,19,20.41z"/>');
let switch_access_shortcut = (0, _common.icons).registerIcon([
    "material",
    "action"
], "switch_access_shortcut", '<path d="M7.06,8.94L5,8l2.06-0.94L8,5l0.94,2.06L11,8L8.94,8.94L8,11L7.06,8.94z M8,21l0.94-2.06L11,18l-2.06-0.94L8,15l-0.94,2.06 L5,18l2.06,0.94L8,21z M4.37,12.37L3,13l1.37,0.63L5,15l0.63-1.37L7,13l-1.37-0.63L5,11L4.37,12.37z M19,20.41 c0,0.78-0.84,1.25-1.51,0.86C14.21,19.36,12,15.79,12,12c0-2.73,1.08-5.27,2.75-7.25l-1.9-1.9C12.54,2.54,12.76,2,13.21,2h5.29 C18.78,2,19,2.22,19,2.5v5.29c0,0.45-0.54,0.67-0.85,0.35l-1.97-1.97C14.84,7.82,14,9.88,14,12c0,3.13,1.86,6.01,4.51,7.55 C18.81,19.73,19,20.06,19,20.41z"/>');
let sync_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "sync_alt", '<path d="m18.5 4.71c-0.264-0.00878-0.52 0.193-0.52 0.502v1.79h-14c-0.55 0-1 0.45-1 1s0.45 1 1 1h14v1.79c0 0.45 0.54 0.672 0.85 0.352l2.79-2.79c0.2-0.19 0.2-0.509 0.00977-0.699l-2.79-2.79c-0.1-0.1-0.22-0.146-0.34-0.15zm-13 8c-0.118 0.00399-0.237 0.0504-0.334 0.15l-2.79 2.79c-0.2 0.19-0.2 0.509-0.00977 0.699l2.79 2.79c0.32 0.32 0.859 0.0984 0.859-0.352v-1.79h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-14v-1.79c0-0.309-0.255-0.511-0.516-0.502z"/>');
let system_update_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "system_update_alt", '<path d="M12.35 15.65l2.79-2.79c.31-.31.09-.85-.35-.85H13V4c0-.55-.45-1-1-1s-1 .45-1 1v8H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.19.2.51.2.7.01zM21 3h-5.01c-.54 0-.99.45-.99.99 0 .55.45.99.99.99H20c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h4.01c.54 0 .99-.45.99-.99 0-.55-.45-1-.99-1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
let tab_unselected = (0, _common.icons).registerIcon([
    "material",
    "action"
], "tab_unselected", '<path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v5c0 .55.45 1 1 1h9V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"/>');
let tab = (0, _common.icons).registerIcon([
    "material",
    "action"
], "tab", '<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h9v3c0 .55.45 1 1 1h7v9c0 .55-.45 1-1 1z"/>');
let table_view = (0, _common.icons).registerIcon([
    "material",
    "action"
], "table_view", '<path d="M19,7H9C7.9,7,7,7.9,7,9v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z M19,10L19,10c0,0.55-0.45,1-1,1h-8 c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8C18.55,9,19,9.45,19,10z M13,15v-2h2v2H13z M15,17v2h-2v-2H15z M11,15H9v-2h2V15z M17,13 h2v2h-2V13z M9,17h2v2H9V17z M17,19v-2h2v2H17z M6,17H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v1h-2V5H5v10h1V17z"/>');
let task_alt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "task_alt", '<path d="M21.29,5.89l-10,10c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0 l2.12,2.12l9.29-9.29c0.39-0.39,1.02-0.39,1.41,0l0,0C21.68,4.87,21.68,5.5,21.29,5.89z M15.77,2.74c-1.69-0.69-3.61-0.93-5.61-0.57 C6.09,2.9,2.84,6.18,2.15,10.25C1.01,17,6.63,22.78,13.34,21.91c3.96-0.51,7.28-3.46,8.32-7.31c0.4-1.47,0.44-2.89,0.21-4.22 c-0.13-0.8-1.12-1.11-1.7-0.54v0c-0.23,0.23-0.33,0.57-0.27,0.89c0.22,1.33,0.12,2.75-0.52,4.26c-1.16,2.71-3.68,4.7-6.61,4.97 c-5.1,0.47-9.33-3.85-8.7-8.98c0.43-3.54,3.28-6.42,6.81-6.91c1.73-0.24,3.37,0.09,4.77,0.81c0.39,0.2,0.86,0.13,1.17-0.18l0,0 c0.48-0.48,0.36-1.29-0.24-1.6C16.31,2.98,16.04,2.85,15.77,2.74z"/>');
let text_rotate_up = (0, _common.icons).registerIcon([
    "material",
    "action"
], "text_rotate_up", '<path d="M18.35 4.35c-.2-.2-.51-.2-.71 0l-1.79 1.79c-.31.32-.09.86.36.86H17v12c0 .55.45 1 1 1s1-.45 1-1V7h.79c.45 0 .67-.54.35-.85l-1.79-1.8zM11.8 15.5v-5l1.6-.66c.36-.14.6-.49.6-.88 0-.69-.71-1.15-1.34-.88l-8.97 3.88c-.42.17-.69.58-.69 1.04 0 .46.27.87.69 1.05l8.97 3.88c.63.27 1.34-.2 1.34-.89 0-.39-.24-.74-.6-.89l-1.6-.65zM4.98 13L10 11.13v3.74L4.98 13z"/>');
let text_rotate_vertical = (0, _common.icons).registerIcon([
    "material",
    "action"
], "text_rotate_vertical", '<path d="M15 5c-.46 0-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34.39 0 .74-.24.89-.6l.66-1.6h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C15.87 5.27 15.46 5 15 5zm-1.87 7L15 6.98 16.87 12h-3.74zm-6.78 7.64l1.79-1.79c.32-.31.1-.85-.35-.85H7V5c0-.55-.45-1-1-1s-1 .44-1 1v12h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.19.2.51.2.7 0z"/>');
let text_rotation_angledown = (0, _common.icons).registerIcon([
    "material",
    "action"
], "text_rotation_angledown", '<path d="M15 20.5v-2.54c0-.45-.54-.67-.85-.35l-.56.56L5.1 9.68c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l8.49 8.49-.56.56c-.32.32-.1.86.34.86h2.54c.28 0 .5-.23.5-.5zM11.25 8.48l3.54 3.54-.67 1.6c-.15.36-.07.77.21 1.05.49.49 1.31.32 1.57-.32l3.61-9.09c.17-.42.07-.91-.25-1.23-.32-.32-.8-.42-1.23-.25l-9.1 3.6c-.64.25-.81 1.08-.32 1.57.27.27.68.35 1.04.2l1.6-.67zm6.59-3.05l-2.23 4.87-2.64-2.64 4.87-2.23z"/>');
let text_rotation_angleup = (0, _common.icons).registerIcon([
    "material",
    "action"
], "text_rotation_angleup", '<path d="M17.61 9.85l.56.56-8.48 8.49c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.49-8.49.56.56c.31.32.85.1.85-.34V9.5c0-.28-.22-.5-.5-.5h-2.54c-.44 0-.66.54-.35.85zm-9.13 2.9l3.54-3.54 1.6.67c.36.15.77.07 1.05-.21.49-.49.32-1.31-.32-1.57L5.26 4.5c-.43-.16-.91-.06-1.23.26-.32.32-.42.8-.25 1.23l3.61 9.09c.25.64 1.08.81 1.57.32.28-.28.36-.69.21-1.05l-.69-1.6zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z"/>');
let text_rotation_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "text_rotation_down", '<path d="M6.35 19.65l1.79-1.79c.32-.32.1-.86-.35-.86H7V5c0-.55-.45-1-1-1s-1 .45-1 1v12h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.19.2.51.2.7.01zM12.2 8.5v5l-1.6.66c-.36.15-.6.5-.6.89 0 .69.71 1.15 1.34.88l8.97-3.88c.42-.18.69-.59.69-1.05 0-.46-.27-.87-.69-1.05l-8.97-3.88c-.63-.27-1.34.2-1.34.89 0 .39.24.74.6.89l1.6.65zm6.82 2.5L14 12.87V9.13L19.02 11z"/>');
let text_rotation_none = (0, _common.icons).registerIcon([
    "material",
    "action"
], "text_rotation_none", '<path d="M20.65 17.65l-1.79-1.79c-.32-.32-.86-.1-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h12v.79c0 .45.54.67.85.35l1.79-1.79c.2-.19.2-.51.01-.7zM9.5 11.8h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C12.87 3.27 12.46 3 12 3c-.46 0-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34.39 0 .74-.24.89-.6l.65-1.6zM12 4.98L13.87 10h-3.74L12 4.98z"/>');
let theaters = (0, _common.icons).registerIcon([
    "material",
    "action"
], "theaters", '<path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>');
let thumb_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "thumb_down", '<path d="M10.88 21.94l5.53-5.54c.37-.37.58-.88.58-1.41V5c0-1.1-.9-2-2-2H6c-.8 0-1.52.48-1.83 1.21L.91 11.82C.06 13.8 1.51 16 3.66 16h5.65l-.95 4.58c-.1.5.05 1.01.41 1.37.59.58 1.53.58 2.11-.01zM21 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
let thumb_up = (0, _common.icons).registerIcon([
    "material",
    "action"
], "thumb_up", '<path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/>');
let thumbs_up_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "thumbs_up_down", '<path d="M10.06 5H5.82l.66-3.18c.08-.37-.04-.75-.3-1.02C5.74.36 5.03.36 4.6.8l-4 4c-.39.37-.6.88-.6 1.41V12c0 1.1.9 2 2 2h5.92c.8 0 1.52-.48 1.84-1.21l2.14-5C12.46 6.47 11.49 5 10.06 5zM22 10h-5.92c-.8 0-1.52.48-1.84 1.21l-2.14 5c-.56 1.32.4 2.79 1.84 2.79h4.24l-.66 3.18c-.08.37.04.75.3 1.02.44.44 1.15.44 1.58 0l4-4c.38-.38.59-.88.59-1.41V12c.01-1.1-.89-2-1.99-2z"/>');
let timeline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "timeline", '<path d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11c-0.18,0-0.36-0.02-0.52-0.07l-4.55,4.56 C4.98,15.65,5,15.82,5,16c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9 c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12c0.18,0,0.36,0.02,0.52,0.07 l3.55-3.56C19.02,8.35,19,8.18,19,8c0-1.1,0.9-2,2-2S23,6.9,23,8z M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55 C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11 c-0.18,0-0.36-0.02-0.52-0.07l-4.55,4.56C4.98,15.65,5,15.82,5,16c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2 c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55 C14.64,12.02,14.82,12,15,12c0.18,0,0.36,0.02,0.52,0.07l3.55-3.56C19.02,8.35,19,8.18,19,8c0-1.1,0.9-2,2-2S23,6.9,23,8z"/>');
let tips_and_updates = (0, _common.icons).registerIcon([
    "material",
    "action"
], "tips_and_updates", '<path d="M7,20h4c0,1.1-0.9,2-2,2S7,21.1,7,20z M5,18c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1s-0.45-1-1-1H6C5.45,17,5,17.45,5,18z M16.5,9.5c0,3.82-2.66,5.86-3.77,6.5H5.27C4.16,15.36,1.5,13.32,1.5,9.5C1.5,5.36,4.86,2,9,2S16.5,5.36,16.5,9.5z M21.37,7.37L20,8 l1.37,0.63L22,10l0.63-1.37L24,8l-1.37-0.63L22,6L21.37,7.37z M19,6l0.94-2.06L22,3l-2.06-0.94L19,0l-0.94,2.06L16,3l2.06,0.94L19,6 z"/>');
let toc = (0, _common.icons).registerIcon([
    "material",
    "action"
], "toc", '<path d="M4 9h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm15 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>');
let today = (0, _common.icons).registerIcon([
    "material",
    "action"
], "today", '<path d="M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1zM8 10h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1z"/>');
let token = (0, _common.icons).registerIcon([
    "material",
    "action"
], "token", '<path d="M12.97,2.54c-0.6-0.34-1.34-0.34-1.94,0l-7,3.89L9.1,9.24C9.83,8.48,10.86,8,12,8s2.17,0.48,2.9,1.24l5.07-2.82L12.97,2.54z M10,12c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S10,13.1,10,12z M3,8.14l5.13,2.85C8.04,11.31,8,11.65,8,12c0,1.86,1.27,3.43,3,3.87 v5.57l-6.97-3.87C3.39,17.22,3,16.55,3,15.82V8.14z M13,21.44v-5.57c1.73-0.44,3-2.01,3-3.87c0-0.35-0.04-0.69-0.13-1.01L21,8.14 l0,7.68c0,0.73-0.39,1.4-1.03,1.75L13,21.44z"/>');
let toll = (0, _common.icons).registerIcon([
    "material",
    "action"
], "toll", '<path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.39 1.4-4.46 3.43-5.42.34-.16.57-.47.57-.84v-.19c0-.68-.71-1.11-1.32-.82C2.92 5.99 1 8.77 1 12s1.92 6.01 4.68 7.27c.61.28 1.32-.14 1.32-.82v-.18c0-.37-.23-.69-.57-.85C4.4 16.46 3 14.39 3 12z"/>');
let touch_app = (0, _common.icons).registerIcon([
    "material",
    "action"
], "touch_app", '<path d="M8.79,9.24V5.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v3.74c1.21-0.81,2-2.18,2-3.74c0-2.49-2.01-4.5-4.5-4.5 s-4.5,2.01-4.5,4.5C6.79,7.06,7.58,8.43,8.79,9.24z M14.29,11.71c-0.28-0.14-0.58-0.21-0.89-0.21h-0.61v-6 c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v10.74l-3.44-0.72c-0.37-0.08-0.76,0.04-1.03,0.31c-0.43,0.44-0.43,1.14,0,1.58 l4.01,4.01C9.71,21.79,10.22,22,10.75,22h6.1c1,0,1.84-0.73,1.98-1.72l0.63-4.47c0.12-0.85-0.32-1.69-1.09-2.07L14.29,11.71z"/>');
let tour = (0, _common.icons).registerIcon([
    "material",
    "action"
], "tour", '<path d="M20.45,5.37C20.71,4.71,20.23,4,19.52,4H13h-1H7V3c0-0.55-0.45-1-1-1h0C5.45,2,5,2.45,5,3v1v10v8h2v-8h4h1h7.52 c0.71,0,1.19-0.71,0.93-1.37L19,9L20.45,5.37z M15,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S15,7.9,15,9z"/>');
let track_changes = (0, _common.icons).registerIcon([
    "material",
    "action"
], "track_changes", '<path d="M18.32 5.68c-.36.36-.39.92-.07 1.32 1.45 1.82 2.21 4.31 1.53 6.92-.79 3.05-3.18 5.33-6.21 5.94C8.47 20.87 4 16.93 4 12c0-4.08 3.05-7.44 7-7.93v2.02c-3.13.53-5.43 3.46-4.93 6.83.39 2.61 2.56 4.71 5.18 5.03C14.89 18.4 18 15.56 18 12c0-1.25-.38-2.4-1.03-3.36-.34-.5-1.07-.53-1.5-.11l-.01.01c-.34.34-.37.87-.11 1.27.6.92.84 2.1.49 3.32-.39 1.37-1.54 2.46-2.94 2.77-2.6.57-4.9-1.39-4.9-3.9 0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2.71c0-.39-.32-.71-.71-.71-5.36-.2-9.98 4.06-10.27 9.4-.36 6.55 5.41 11.82 12.01 10.4 3.88-.83 6.88-3.8 7.75-7.67.71-3.16-.2-6.16-1.97-8.37-.37-.47-1.07-.5-1.49-.08z"/>');
let translate = (0, _common.icons).registerIcon([
    "material",
    "action"
], "translate", '<path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18C11.5 7.92 10.44 9.75 9 11.35c-.81-.89-1.49-1.86-2.06-2.88-.16-.29-.45-.47-.78-.47-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87c-.4.39-.4 1.03 0 1.42.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z"/>');
let trending_down = (0, _common.icons).registerIcon([
    "material",
    "action"
], "trending_down", '<path d="M16.85 17.15l1.44-1.44-4.88-4.88-3.29 3.29c-.39.39-1.02.39-1.41 0l-6-6.01c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L9.41 12l3.29-3.29c.39-.39 1.02-.39 1.41 0l5.59 5.58 1.44-1.44c.31-.31.85-.09.85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84z"/>');
let trending_up = (0, _common.icons).registerIcon([
    "material",
    "action"
], "trending_up", '<path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29c-.39-.39-1.02-.39-1.41 0l-6 6.01c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44c.31.31.85.09.85-.35V6.5c.01-.28-.21-.5-.49-.5h-4.29c-.45 0-.67.54-.36.85z"/>');
let _try = (0, _common.icons).registerIcon([
    "material",
    "action"
], "_try", '<path d="M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57 l-1.12,2.44c-0.18,0.39-0.73,0.39-0.91,0l-1.12-2.44l-2.44-1.12c-0.39-0.18-0.39-0.73,0-0.91l2.44-1.12l1.12-2.44 c0.18-0.39,0.73-0.39,0.91,0l1.12,2.44l2.44,1.12c0.39,0.18,0.39,0.73,0,0.91L13.57,11.57z"/>');
let turned_in_not = (0, _common.icons).registerIcon([
    "material",
    "action"
], "turned_in_not", '<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"/>');
let turned_in = (0, _common.icons).registerIcon([
    "material",
    "action"
], "turned_in", '<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>');
let unpublished = (0, _common.icons).registerIcon([
    "material",
    "action"
], "unpublished", '<path d="M20.49,20.49L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l1.56,1.56 c-1.25,1.88-1.88,4.21-1.59,6.7c0.53,4.54,4.21,8.22,8.74,8.74c2.49,0.29,4.81-0.34,6.7-1.59l1.56,1.56c0.39,0.39,1.02,0.39,1.41,0 l0,0C20.88,21.51,20.88,20.88,20.49,20.49z M9.88,15.89l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0 l2.12,2.12l0.18-0.18l1.41,1.41l-0.88,0.88C10.9,16.28,10.27,16.28,9.88,15.89z M13.59,10.76l-7.1-7.1c1.88-1.25,4.21-1.88,6.7-1.59 c4.54,0.53,8.22,4.21,8.74,8.74c0.29,2.49-0.34,4.82-1.59,6.7l-5.34-5.34l1.94-1.94c0.39-0.39,0.39-1.02,0-1.41v0 c-0.39-0.39-1.02-0.39-1.41,0L13.59,10.76z"/>');
let update_disabled = (0, _common.icons).registerIcon([
    "material",
    "action"
], "update_disabled", '<path d="M20.49,20.49L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l2.31,2.31 C3.57,8.56,3.05,10.09,3,11.74C2.86,16.83,6.94,21,12,21c1.76,0,3.39-0.52,4.78-1.39l2.29,2.29c0.39,0.39,1.02,0.39,1.41,0l0,0 C20.88,21.51,20.88,20.88,20.49,20.49z M10.72,18.89c-2.78-0.49-5.04-2.71-5.58-5.47c-0.34-1.72-0.03-3.36,0.72-4.73l9.46,9.46 C13.98,18.87,12.4,19.18,10.72,18.89z M13,8v2.17l-2-2V8c0-0.55,0.45-1,1-1S13,7.45,13,8z M20.72,14.23 c-0.23,0.92-0.61,1.77-1.1,2.55l-1.47-1.47c0.27-0.5,0.49-1.03,0.63-1.59C18.89,13.3,19.29,13,19.73,13h0 C20.38,13,20.88,13.61,20.72,14.23z M7.24,4.41c1.46-0.93,3.18-1.45,5-1.41c2.65,0.07,5,1.28,6.6,3.16l1.31-1.31 C20.46,4.54,21,4.76,21,5.21V9.5c0,0.28-0.22,0.5-0.5,0.5h-4.29c-0.45,0-0.67-0.54-0.35-0.85l1.55-1.55C16.12,6.02,14.18,5,12,5 c-1.2,0-2.33,0.31-3.32,0.85L7.24,4.41z"/>');
let update = (0, _common.icons).registerIcon([
    "material",
    "action"
], "update", '<path d="M11,8.75v3.68c0,0.35,0.19,0.68,0.49,0.86l3.12,1.85c0.36,0.21,0.82,0.09,1.03-0.26c0.21-0.36,0.1-0.82-0.26-1.03 l-2.87-1.71v-3.4C12.5,8.34,12.16,8,11.75,8S11,8.34,11,8.75z M21,9.5V4.21c0-0.45-0.54-0.67-0.85-0.35l-1.78,1.78 c-1.81-1.81-4.39-2.85-7.21-2.6c-4.19,0.38-7.64,3.75-8.1,7.94C2.46,16.4,6.69,21,12,21c4.59,0,8.38-3.44,8.93-7.88 c0.07-0.6-0.4-1.12-1-1.12c-0.5,0-0.92,0.37-0.98,0.86c-0.43,3.49-3.44,6.19-7.05,6.14c-3.71-0.05-6.84-3.18-6.9-6.9 C4.94,8.2,8.11,5,12,5c1.93,0,3.68,0.79,4.95,2.05l-2.09,2.09C14.54,9.46,14.76,10,15.21,10h5.29C20.78,10,21,9.78,21,9.5z"/>');
let upgrade = (0, _common.icons).registerIcon([
    "material",
    "action"
], "upgrade", '<path d="M16,19L16,19c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h6C15.55,18,16,18.45,16,19z M11,7.99V15 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V7.99h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.78c-0.2-0.19-0.51-0.19-0.71,0L8.86,7.14 C8.54,7.45,8.76,7.99,9.21,7.99H11z"/>');
let verified_user = (0, _common.icons).registerIcon([
    "material",
    "action"
], "verified_user", '<path d="M11.19 1.36l-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0zm-1.9 14.93L6.7 13.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l5.88-5.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-6.59 6.59c-.38.39-1.02.39-1.41 0z"/>');
let verified = (0, _common.icons).registerIcon([
    "material",
    "action"
], "verified", '<path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z"/>');
let vertical_split = (0, _common.icons).registerIcon([
    "material",
    "action"
], "vertical_split", '<path d="M4 15h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm11-1h6c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"/>');
let view_agenda = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_agenda", '<path d="m5 3c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-14zm0 10c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-14z"/>');
let view_array = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_array", '<path d="M20,5h-1c-0.55,0-1,0.45-1,1v12c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1V6C21,5.45,20.55,5,20,5z M16,5H8C7.45,5,7,5.45,7,6 v12c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V6C17,5.45,16.55,5,16,5z M5,5H4C3.45,5,3,5.45,3,6v12c0,0.55,0.45,1,1,1h1 c0.55,0,1-0.45,1-1V6C6,5.45,5.55,5,5,5z"/>');
let view_carousel = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_carousel", '<path d="M3,7h2c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1H3c-0.55,0-1-0.45-1-1V8C2,7.45,2.45,7,3,7z M8,19h8c0.55,0,1-0.45,1-1V6 c0-0.55-0.45-1-1-1H8C7.45,5,7,5.45,7,6v12C7,18.55,7.45,19,8,19z M19,7h2c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1h-2 c-0.55,0-1-0.45-1-1V8C18,7.45,18.45,7,19,7z"/>');
let view_column = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_column", '<path d="M14.67,6v12c0,0.55-0.45,1-1,1h-3.33c-0.55,0-1-0.45-1-1V6c0-0.55,0.45-1,1-1h3.33C14.22,5,14.67,5.45,14.67,6z M16.67,19 H20c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1h-3.33c-0.55,0-1,0.45-1,1v12C15.67,18.55,16.11,19,16.67,19z M8.33,18V6 c0-0.55-0.45-1-1-1H4C3.45,5,3,5.45,3,6v12c0,0.55,0.45,1,1,1h3.33C7.89,19,8.33,18.55,8.33,18z"/>');
let view_day = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_day", '<path d="M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z"/>');
let view_headline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_headline", '<path d="M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zM4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z"/>');
let view_in_ar = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_in_ar", '<path d="m4 1c-1.66 0-3 1.34-3 3v1c0 0.55 0.45 1 1 1s1-0.45 1-1v-1c0-0.55 0.45-1 1-1h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1zm15 0c-0.55 0-1 0.45-1 1s0.45 1 1 1h1c0.55 0 1 0.45 1 1v1c0 0.55 0.45 1 1 1s1-0.45 1-1v-1c0-1.66-1.34-3-3-3h-1zm-7 3.25c-0.35 0-0.69 0.0895-1 0.27l-5 2.87c-0.62 0.36-1 1.02-1 1.74v5.74c0 0.72 0.38 1.38 1 1.73l5 2.88c0.31 0.18 0.65 0.27 1 0.27s0.69-0.0895 1-0.27l5-2.88c0.62-0.35 1-1.01 1-1.73v-5.74c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27zm0 2 3.96 2.28-3.96 2.31-3.96-2.31 3.96-2.28zm-5 3.99 4 2.33v4.6l-4-2.3v-4.63zm10 0v4.63l-4 2.3v-4.6l4-2.33zm-15 7.76c-0.55 0-1 0.45-1 1v1c0 1.66 1.34 3 3 3h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1c-0.55 0-1-0.45-1-1v-1c0-0.55-0.45-1-1-1zm20 0c-0.55 0-1 0.45-1 1v1c0 0.55-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h1c1.66 0 3-1.34 3-3v-1c0-0.55-0.45-1-1-1z"/>');
let view_list = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_list", '<path d="M4,14h2c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v2C3,13.55,3.45,14,4,14z M4,19h2c0.55,0,1-0.45,1-1 v-2c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v2C3,18.55,3.45,19,4,19z M4,9h2c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H4 C3.45,5,3,5.45,3,6v2C3,8.55,3.45,9,4,9z M9,14h11c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1H9c-0.55,0-1,0.45-1,1v2 C8,13.55,8.45,14,9,14z M9,19h11c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1H9c-0.55,0-1,0.45-1,1v2C8,18.55,8.45,19,9,19z M8,6v2 c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H9C8.45,5,8,5.45,8,6z"/>');
let view_module = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_module", '<path d="M14.67,6v4.5c0,0.55-0.45,1-1,1h-3.33c-0.55,0-1-0.45-1-1V6c0-0.55,0.45-1,1-1h3.33C14.22,5,14.67,5.45,14.67,6z M16.67,11.5H20c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1h-3.33c-0.55,0-1,0.45-1,1v4.5C15.67,11.05,16.11,11.5,16.67,11.5z M14.67,18v-4.5c0-0.55-0.45-1-1-1h-3.33c-0.55,0-1,0.45-1,1V18c0,0.55,0.45,1,1,1h3.33C14.22,19,14.67,18.55,14.67,18z M15.67,13.5V18c0,0.55,0.45,1,1,1H20c0.55,0,1-0.45,1-1v-4.5c0-0.55-0.45-1-1-1h-3.33C16.11,12.5,15.67,12.95,15.67,13.5z M7.33,12.5H4c-0.55,0-1,0.45-1,1V18c0,0.55,0.45,1,1,1h3.33c0.55,0,1-0.45,1-1v-4.5C8.33,12.95,7.89,12.5,7.33,12.5z M8.33,10.5V6 c0-0.55-0.45-1-1-1H4C3.45,5,3,5.45,3,6v4.5c0,0.55,0.45,1,1,1h3.33C7.89,11.5,8.33,11.05,8.33,10.5z"/>');
let view_quilt = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_quilt", '<path d="M21,6v4.5c0,0.55-0.45,1-1,1h-9.67c-0.55,0-1-0.45-1-1V6c0-0.55,0.45-1,1-1H20C20.55,5,21,5.45,21,6z M14.67,18v-4.5 c0-0.55-0.45-1-1-1h-3.33c-0.55,0-1,0.45-1,1V18c0,0.55,0.45,1,1,1h3.33C14.22,19,14.67,18.55,14.67,18z M15.67,13.5V18 c0,0.55,0.45,1,1,1H20c0.55,0,1-0.45,1-1v-4.5c0-0.55-0.45-1-1-1h-3.33C16.11,12.5,15.67,12.95,15.67,13.5z M8.33,18V6 c0-0.55-0.45-1-1-1H4C3.45,5,3,5.45,3,6v12c0,0.55,0.45,1,1,1h3.33C7.89,19,8.33,18.55,8.33,18z"/>');
let view_sidebar = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_sidebar", '<path d="M15,20H3c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h12c0.55,0,1,0.45,1,1v14C16,19.55,15.55,20,15,20z M19,8h2 c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v2C18,7.55,18.45,8,19,8z M19,20h2c0.55,0,1-0.45,1-1v-2 c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v2C18,19.55,18.45,20,19,20z M19,14h2c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-2 c-0.55,0-1,0.45-1,1v2C18,13.55,18.45,14,19,14z"/>');
let view_stream = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_stream", '<path d="M3,17v-2c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H5C3.9,19,3,18.1,3,17z M3,7v2c0,1.1,0.9,2,2,2h14 c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5C3.9,5,3,5.9,3,7z"/>');
let view_week = (0, _common.icons).registerIcon([
    "material",
    "action"
], "view_week", '<path d="M5.33,20H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h1.33c1.1,0,2,0.9,2,2v12C7.33,19.1,6.44,20,5.33,20z M22,18V6 c0-1.1-0.9-2-2-2h-1.33c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2H20C21.11,20,22,19.1,22,18z M14.67,18V6c0-1.1-0.9-2-2-2h-1.33 c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h1.33C13.77,20,14.67,19.1,14.67,18z"/>');
let visibility_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "visibility_off", '<path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"/>');
let visibility = (0, _common.icons).registerIcon([
    "material",
    "action"
], "visibility", '<path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>');
let voice_over_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "voice_over_off", '<path d="M15.72 6.41c-.35.35-.44.88-.25 1.35.3.75.32 1.58.05 2.34-.16.46-.06.98.29 1.32.6.6 1.66.47 2.02-.31.64-1.39.6-2.99-.12-4.41-.4-.75-1.41-.88-1.99-.29zm3.46-3.52c-.4.4-.46 1.02-.13 1.48 1.93 2.68 1.95 6.25.09 9.07-.31.46-.23 1.08.16 1.47.51.51 1.38.46 1.81-.13 2.57-3.51 2.52-8.2-.17-11.77-.43-.56-1.26-.62-1.76-.12zM9.43 5.04l3.53 3.53c-.2-1.86-1.67-3.33-3.53-3.53zM3.71 3.56c-.39.39-.39 1.02 0 1.41l1.91 1.91c-.56.89-.79 2.01-.47 3.2.36 1.33 1.44 2.4 2.77 2.77 1.19.33 2.31.09 3.2-.47l4.4 4.4C13.74 15.6 10.78 15 9 15c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-.37-.11-.7-.29-1.02l2.31 2.31c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.12 3.56c-.39-.39-1.02-.39-1.41 0z"/>');
let watch_later = (0, _common.icons).registerIcon([
    "material",
    "action"
], "watch_later", '<path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.55,15.8l-4.08-2.51c-0.3-0.18-0.48-0.5-0.48-0.85 V7.75C11,7.34,11.34,7,11.75,7s0.75,0.34,0.75,0.75v4.45l3.84,2.31c0.36,0.22,0.48,0.69,0.26,1.05 C16.38,15.91,15.91,16.02,15.55,15.8z"/>');
let wifi_protected_setup = (0, _common.icons).registerIcon([
    "material",
    "action"
], "wifi_protected_setup", '<path d="m11.5 3.01c-0.28 0-0.5 0.22-0.5 0.5v6.29c0 0.45 0.54 0.67 0.85 0.35l1.45-1.45c1.97 1.46 3.25 3.78 3.25 6.42 0 0.66-0.0802 1.31-0.24 1.92-0.12 0.5 0.48 0.86 0.84 0.49 1.48-1.53 2.4-3.61 2.4-5.91 0-2.51-1.11-4.76-2.85-6.32l1.44-1.44c0.32-0.32 0.0884-0.85-0.352-0.85h-6.29zm-4.27 3.31c-0.13-0.00895-0.266 0.0367-0.379 0.152-1.48 1.53-2.4 3.61-2.4 5.91 0 2.52 1.1 4.77 2.84 6.33l-1.44 1.44c-0.32 0.32-0.0904 0.85 0.35 0.85h6.29c0.28 0 0.5-0.22 0.5-0.5v-6.29c0.01-0.44-0.53-0.672-0.84-0.352l-1.45 1.44c-1.97-1.46-3.25-3.78-3.25-6.42 0-0.66 0.0802-1.31 0.24-1.92 0.0825-0.344-0.175-0.623-0.461-0.643z"/>');
let work_off = (0, _common.icons).registerIcon([
    "material",
    "action"
], "work_off", '<path d="M4.11 2.54c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.11 2.54zM10 4h4v2h-3.6L22 17.6V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4z"/>');
let work_outline = (0, _common.icons).registerIcon([
    "material",
    "action"
], "work_outline", '<path d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>');
let work = (0, _common.icons).registerIcon([
    "material",
    "action"
], "work", '<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>');
let wysiwyg = (0, _common.icons).registerIcon([
    "material",
    "action"
], "wysiwyg", '<path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M16,12H8 c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,11.55,16.55,12,16,12z M12,16H8c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v0C13,15.55,12.55,16,12,16z"/>');
let zoom_in = (0, _common.icons).registerIcon([
    "material",
    "action"
], "zoom_in", '<path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.78 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm0-7c-.28 0-.5.22-.5.5V9H7.5c-.28 0-.5.22-.5.5s.22.5.5.5H9v1.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7.5c0-.28-.22-.5-.5-.5z"/>');
let zoom_out = (0, _common.icons).registerIcon([
    "material",
    "action"
], "zoom_out", '<path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2-5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZRPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateFunction", ()=>generateFunction);
parcelHelpers.export(exports, "icons", ()=>icons);
function generateFunction(name, icon, width = 24, height = 24) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "");
    svg.innerHTML = '<svg class="icon" type="' + name + '" viewbox="0 0 ' + width + " " + height + '" width=' + width + " height=" + height + ">" + icon + "</svg>";
// return function (): SVGElement {
//     if (this.buffer) {
//         //@ts-expect-error
//         return this.buffer.cloneNode(true);
//     }
//     let div = document.createElement('div');
//     if (div.firstChild instanceof SVGElement) {
//         return this.buffer = div.firstChild;
//     } else {
//         console.warn('Failed while generating ' + name + ' icon');
//         return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     }
// }
}
let icons = new class Icons {
    constructor(){
        this.categories = {
            $icons$: {},
            $name$: "icons"
        };
    }
    /**
     * @param category 
     * @param  name 
     * @param  icon 
     * @param  width 
     * @param  height */ registerIcon(category, name, icon, width = 24, height = 24) {
        if (name.includes("/")) {
            console.warn("Icon name must not contain /");
            return;
        }
        let path = [
            this.categories
        ];
        let div = document.createElement("div");
        div.innerHTML = '<svg class="icon" type="' + name + '" viewbox="0 0 ' + width + " " + height + '" width=' + width + " height=" + height + ">" + icon + "</svg>";
        if (div.firstChild instanceof SVGElement) {
            let svg = div.firstChild;
            return function() {
                return svg.cloneNode(true);
            };
        } else console.warn("Failed while generating " + name + " icon");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2WArk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add_alert", ()=>add_alert);
parcelHelpers.export(exports, "auto_delete", ()=>auto_delete);
parcelHelpers.export(exports, "error_outline", ()=>error_outline);
parcelHelpers.export(exports, "error", ()=>error);
parcelHelpers.export(exports, "notification_important", ()=>notification_important);
parcelHelpers.export(exports, "warning_amber", ()=>warning_amber);
parcelHelpers.export(exports, "warning", ()=>warning);
var _common = require("./common");
let add_alert = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "add_alert", '<path d="m12 2c-0.83 0-1.5 0.67-1.5 1.5v0.699c-2.59 0.66-4.5 3.01-4.5 5.8v7h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-7c0-2.79-1.91-5.14-4.5-5.8v-0.699c0-0.83-0.67-1.5-1.5-1.5zm0 7c0.55 0 1 0.45 1 1v1h1c0.55 0 1 0.45 1 1s-0.45 1-1 1h-1v1c0 0.55-0.45 1-1 1s-1-0.45-1-1v-1h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1v-1c0-0.55 0.45-1 1-1zm-2 11c0 1.1 0.9 2 2 2s2-0.9 2-2h-4z"/>');
let auto_delete = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "auto_delete", '<path d="m5.91 1c-0.26 0-0.519 0.109-0.699 0.289l-0.711 0.711h-2.5c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2.5l-0.711-0.711c-0.18-0.18-0.439-0.289-0.699-0.289h-4.18zm-1.91 4c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h5.68c1.12 2.36 3.53 4 6.32 4 3.87 0 7-3.13 7-7s-3.13-7-7-7c-0.7 0-1.37 0.0991-2 0.289v-2.29c0-1.1-0.9-2-2-2h-8zm12 6c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-0.25 1c-0.41 0-0.75 0.34-0.75 0.75v3.68c0 0.36 0.19 0.679 0.5 0.859l2.52 1.47c0.33 0.19 0.751 0.0893 0.961-0.221 0.23-0.34 0.12-0.81-0.24-1.02l-2.24-1.32v-3.45c0-0.41-0.34-0.75-0.75-0.75z"/>');
let error_outline = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "error_outline", '<path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-3h-2v-2h2v2z"/>');
let error = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "error", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>');
let notification_important = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "notification_important", '<path d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99zm8.29-4.71L19 17v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-1.29 1.29c-.63.63-.19 1.71.7 1.71h15.17c.9 0 1.34-1.08.71-1.71zM13 16h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v2z"/>');
let warning_amber = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "warning_amber", '<path d="M12 5.99L19.53 19H4.47L12 5.99M2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zm0 5h2v2h-2z"/>');
let warning = (0, _common.icons).registerIcon([
    "material",
    "alert"
], "warning", '<path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rnuWZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "remove", ()=>remove);
var _common = require("./common");
let add = (0, _common.icons).registerIcon([
    "material",
    "content"
], "add", '<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
let remove = (0, _common.icons).registerIcon([
    "material",
    "content"
], "remove", '<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"efCcb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "light_mode", ()=>light_mode);
parcelHelpers.export(exports, "mode_night", ()=>mode_night);
parcelHelpers.export(exports, "brightness_high", ()=>brightness_high);
parcelHelpers.export(exports, "brightness_low", ()=>brightness_low);
parcelHelpers.export(exports, "brightness_medium", ()=>brightness_medium);
parcelHelpers.export(exports, "brightness_auto", ()=>brightness_auto);
var _common = require("./common");
let light_mode = (0, _common.icons).registerIcon([
    "material",
    "device"
], "light_mode", '<path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>');
let mode_night = (0, _common.icons).registerIcon([
    "material",
    "device"
], "mode_night", '<path d="M11.93,2.3C9.89,1.8,7.91,1.95,6.16,2.58C5.44,2.84,5.25,3.8,5.85,4.29C8.08,6.12,9.5,8.89,9.5,12 c0,3.11-1.42,5.88-3.65,7.71c-0.59,0.49-0.42,1.45,0.31,1.7C7.2,21.79,8.33,22,9.5,22c6.05,0,10.85-5.38,9.87-11.6 C18.76,6.48,15.78,3.24,11.93,2.3z"/>');
let brightness_high = (0, _common.icons).registerIcon([
    "material",
    "device"
], "brightness_high", '<path d="M20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>');
let brightness_low = (0, _common.icons).registerIcon([
    "material",
    "device"
], "brightness_low", '<path d="M20 15.31l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>');
let brightness_medium = (0, _common.icons).registerIcon([
    "material",
    "device"
], "brightness_medium", '<path d="M20 15.31l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99z"/>');
let brightness_auto = (0, _common.icons).registerIcon([
    "material",
    "device"
], "brightness_auto", '<path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69zm-5.91 6.71L13.6 14h-3.2l-.49 1.4c-.13.36-.46.6-.84.6-.62 0-1.05-.61-.84-1.19l2.44-6.86c.2-.57.73-.95 1.33-.95.6 0 1.13.38 1.34.94l2.44 6.86c.21.58-.22 1.19-.84 1.19-.39.01-.72-.23-.85-.59z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87WFb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag_handle", ()=>drag_handle);
parcelHelpers.export(exports, "drag_handle_horz", ()=>drag_handle_horz);
parcelHelpers.export(exports, "drag_handle_vert", ()=>drag_handle_vert);
var _common = require("./common");
let drag_handle = (0, _common.icons).registerIcon([
    "material",
    "editor"
], "drag_handle", '<path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>');
let drag_handle_horz = (0, _common.icons).registerIcon([
    "material",
    "editor"
], "drag_handle_horz", '<path d="m30 0h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2h28c1.1 0 2-0.9 2-2s-0.9-2-2-2zm-28 12h28c1.1 0 2-0.9 2-2s-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2z"/>');
let drag_handle_vert = (0, _common.icons).registerIcon([
    "material",
    "editor"
], "drag_handle_vert", '<path d="m0 2v28c0 1.1 0.9 2 2 2s2-0.9 2-2v-28c0-1.1-0.9-2-2-2s-2 0.9-2 2zm12 28v-28c0-1.1-0.9-2-2-2s-2 0.9-2 2v28c0 1.1 0.9 2 2 2s2-0.9 2-2z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kB9Ts":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "brightness_1", ()=>brightness_1);
parcelHelpers.export(exports, "brightness_2", ()=>brightness_2);
parcelHelpers.export(exports, "brightness_3", ()=>brightness_3);
parcelHelpers.export(exports, "brightness_4", ()=>brightness_4);
parcelHelpers.export(exports, "brightness_5", ()=>brightness_5);
parcelHelpers.export(exports, "brightness_6", ()=>brightness_6);
parcelHelpers.export(exports, "brightness_7", ()=>brightness_7);
var _common = require("./common");
let brightness_1 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_1", '<circle cx="12" cy="12" r="10"/>');
let brightness_2 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_2", '<path d="M12.43 2.3c-2.38-.59-4.68-.27-6.63.64-.35.16-.41.64-.1.86C8.3 5.6 10 8.6 10 12c0 3.4-1.7 6.4-4.3 8.2-.32.22-.26.7.09.86 1.28.6 2.71.94 4.21.94 6.05 0 10.85-5.38 9.87-11.6-.61-3.92-3.59-7.16-7.44-8.1z"/>');
let brightness_3 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_3", '<path d="M8.93,2C8.88,2,8.84,2,8.79,2C7.96,2.02,7.7,3.12,8.4,3.56c2.78,1.77,4.63,4.89,4.63,8.44c0,3.55-1.84,6.66-4.62,8.43 C7.7,20.89,7.98,21.98,8.82,22c0.07,0,0.14,0,0.21,0c6.05,0,10.86-5.39,9.87-11.63C18.14,5.53,13.83,1.95,8.93,2z"/>');
let brightness_4 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_4", '<path d="M22.6,11.29L20,8.69V5c0-0.55-0.45-1-1-1h-3.69l-2.6-2.6c-0.39-0.39-1.02-0.39-1.41,0L8.69,4H5C4.45,4,4,4.45,4,5v3.69 l-2.6,2.6c-0.39,0.39-0.39,1.02,0,1.41L4,15.3V19c0,0.55,0.45,1,1,1h3.69l2.6,2.6c0.39,0.39,1.02,0.39,1.41,0l2.6-2.6H19 c0.55,0,1-0.45,1-1v-3.69l2.6-2.6C22.99,12.32,22.99,11.68,22.6,11.29z M17.92,12.98c-0.34,2.12-1.85,3.94-3.88,4.66 c-1.21,0.43-2.41,0.45-3.5,0.18c-0.41-0.1-0.48-0.65-0.13-0.9C11.98,15.84,13,14.04,13,12s-1.02-3.84-2.58-4.92 c-0.35-0.24-0.29-0.79,0.13-0.9c1.09-0.27,2.29-0.25,3.5,0.18c2.02,0.72,3.54,2.54,3.88,4.66C17.98,11.35,18,11.68,18,12 C17.99,12.32,17.97,12.65,17.92,12.98z"/>');
let brightness_5 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_5", '<path d="M20 15.31l2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6c-.39-.39-1.02-.39-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>');
let brightness_6 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_6", '<path d="M20 15.31l2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6c-.39-.39-1.02-.39-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99z"/>');
let brightness_7 = (0, _common.icons).registerIcon([
    "material",
    "image"
], "brightness_7", '<path d="M20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6c-.39-.39-1.02-.39-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DECQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svgLogo", ()=>svgLogo);
var _common = require("./common");
let svgLogo = (0, _common.icons).registerIcon([
    "logos"
], "svgLogo", '<path d="M 35.769531,0.01489543 C 33.289964,0.15317034 30.70905,1.2598245 28.7685,3.1797864 26.643752,5.2815693 25.664818,8.0912799 25.736765,10.883327 24.705244,9.808055 23.541246,8.8805459 22.208027,8.3340252 18.56554,6.8410623 13.825241,7.445239 10.62374,10.612658 7.4223461,13.780087 6.8117016,18.470201 8.3206735,22.074044 8.8831892,23.417446 9.8423673,24.589287 10.95782,25.621086 9.4318499,25.570602 7.916036,25.729745 6.5584423,26.286293 2.9164906,27.779256 0,31.52113 0,35.999913 c -2.0181111e-8,4.478677 2.9164906,8.220656 6.5584423,9.713619 1.3570592,0.556294 2.8720179,0.715374 4.3973467,0.665207 -1.1143839,1.031228 -2.0727922,2.202583 -2.6350085,3.545033 -1.5092927,3.603419 -0.8974615,8.291524 2.3030665,11.45927 3.200539,3.167747 7.937417,3.772654 11.58001,2.280643 1.359197,-0.556686 2.545635,-1.504492 3.589247,-2.609169 -0.05134,1.510521 0.109568,3.010888 0.67234,4.354819 1.508972,3.603314 5.29097,6.488862 9.817779,6.488862 4.526809,0 8.308807,-2.885548 9.817779,-6.488862 0.562516,-1.343296 0.723355,-2.842923 0.67234,-4.352703 1.042939,1.103195 2.227377,2.050907 3.585078,2.607053 3.642165,1.492116 8.381289,0.888246 11.582148,-2.278633 3.20086,-3.166901 3.811184,-7.85564 2.303067,-11.45927 -0.562195,-1.343297 -1.52009,-2.515138 -2.635008,-3.547043 1.52597,0.05048 3.041783,-0.108659 4.399377,-0.665207 3.641952,-1.492963 6.558442,-5.234836 6.558442,-9.713619 0,-4.478783 -2.91649,-8.220657 -6.558442,-9.71362 -1.358235,-0.556802 -2.874797,-0.715998 -4.401516,-0.665207 1.116522,-1.032603 2.074503,-2.206496 2.637147,-3.551168 1.507903,-3.603947 0.896542,-8.290571 -2.305098,-11.457154 -3.201715,-3.1665837 -7.94009,-3.7719132 -11.582148,-2.278633 -1.314618,0.5389792 -2.46428,1.4497024 -3.486939,2.50382 0.0064,-0.252371 0.142163,-0.509374 0.127367,-0.758169 C 46.833092,7.3260241 45.581067,4.943947 43.797989,3.1798921 42.014911,1.4157315 39.607398,0.17704294 36.824112,0.0150012 c -0.347914,-0.02024887 -0.700221,-0.0197528 -1.054442,0 z m 58.368298,0.47308361 c -11.685847,0 -21.16837,9.37631466 -21.16837,20.94378896 0,5.781357 2.371379,11.016088 6.203409,14.805876 3.830854,3.791375 9.295652,5.277463 14.96464,6.137596 v 0.0041 c 2.338025,0.430658 4.615862,0.972356 6.203412,2.543061 h 0.006 c 1.58178,1.570705 2.56403,3.734152 2.56403,6.127335 0,4.790914 -3.930278,8.678647 -8.773742,8.678647 -4.842287,0 -8.7654,-3.887733 -8.7654,-8.678647 H 72.968925 c 10e-7,11.567157 9.48263,20.950136 21.168369,20.950136 11.691196,0 21.174786,-9.382556 21.174786,-20.950136 0,-5.781357 -2.37138,-11.016088 -6.20341,-14.807992 -3.83085,-3.790211 -9.121824,-5.533535 -14.971055,-6.135585 -3.288201,-0.516334 -4.609661,-0.972843 -6.197208,-2.549302 h -0.0063 c -1.580598,-1.564993 -2.561991,-3.732037 -2.561991,-6.12522 0,-4.790914 3.923113,-8.674521 8.7654,-8.674521 4.843464,0 8.773744,3.883607 8.773744,8.674521 h 12.40104 c 0,-11.5671568 -9.48316,-20.94378873 -21.174784,-20.94378873 z m 21.174781,0 14.96251,71.51096596 h 12.40104 L 157.65149,0.48797904 H 145.25045 L 136.48708,42.369211 127.71334,0.48797904 Z m 63.5126,0 c -11.69226,0 -21.17265,9.37631466 -21.17265,20.94378896 h 0.004 v 29.618099 c 0,11.568215 9.47568,20.950135 21.16837,20.950135 11.69119,1e-6 21.17478,-9.381391 21.17478,-20.950135 h -0.006 V 30.106078 h -21.16837 v 12.274768 h 8.76754 v 8.674521 c -0.005,4.786366 -3.93092,8.668281 -8.76754,8.668281 -4.84347,0 -8.76754,-3.882444 -8.76754,-8.674521 V 21.431028 c 0,-4.786366 3.92407,-8.674522 8.76754,-8.674522 4.83651,0 8.76754,3.888156 8.76754,8.674522 h 12.40104 c 0,-11.5671574 -9.48263,-20.94378936 -21.16837,-20.94378936 z M 35.785567,4.9460307 a 5.7521606,5.6911343 0 0 1 4.568502,9.6929943 v 11.647543 l 8.324843,-8.236522 a 5.751626,5.6906055 0 1 1 5.750343,5.691451 l -8.322811,8.234513 h 11.770302 a 5.751626,5.6906055 0 1 1 0,8.048567 H 46.106444 l 8.322811,8.236522 a 5.751626,5.6906055 0 1 1 -5.750343,5.689336 l -8.324843,-8.236522 v 11.647543 a 5.751626,5.6906055 0 1 1 -8.134871,0 V 45.716028 l -8.322812,8.234513 a 5.751626,5.6906055 0 1 1 -5.752481,-5.689336 l 8.324843,-8.236522 H 14.696307 a 5.751626,5.6906055 0 1 1 0,-8.048567 h 11.772441 l -8.324843,-8.234513 a 5.751626,5.6906055 0 1 1 5.752481,-5.691451 l 8.322812,8.234512 V 14.639236 a 5.751626,5.6906055 0 0 1 0,-8.0485662 5.7521606,5.6911343 0 0 1 3.566262,-1.6444275 z"/>', 200, 72);

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7G38W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "close", ()=>close);
parcelHelpers.export(exports, "menu", ()=>menu);
parcelHelpers.export(exports, "menu_open", ()=>menu_open);
parcelHelpers.export(exports, "unfold_more", ()=>unfold_more);
parcelHelpers.export(exports, "unfold_less", ()=>unfold_less);
parcelHelpers.export(exports, "chevron_left", ()=>chevron_left);
parcelHelpers.export(exports, "chevron_right", ()=>chevron_right);
parcelHelpers.export(exports, "expand_less", ()=>expand_less);
parcelHelpers.export(exports, "expand_more", ()=>expand_more);
var _common = require("./common");
let close = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "close", '<path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>');
let menu = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "menu", '<path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>');
let menu_open = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "menu_open", '<path d="M4,18h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h8c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M20.3,14.88L17.42,12l2.88-2.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-3.59,3.59c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59c0.39,0.39,1.02,0.39,1.41,0l0,0 C20.68,15.91,20.69,15.27,20.3,14.88z"/>');
let unfold_more = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "unfold_more", '<path d="M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7c-.39-.39-1.02-.39-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12 18.17z"/>');
let unfold_less = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "unfold_less", '<path d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z"/>');
let chevron_left = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "chevron_left", '<path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/>');
let chevron_right = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "chevron_right", '<path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>');
let expand_less = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "expand_less", '<path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"/>');
let expand_more = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "expand_more", '<path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"by10t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bathroom", ()=>bathroom);
parcelHelpers.export(exports, "bed", ()=>bed);
parcelHelpers.export(exports, "bedroom_baby", ()=>bedroom_baby);
parcelHelpers.export(exports, "bedroom_child", ()=>bedroom_child);
parcelHelpers.export(exports, "bedroom_parent", ()=>bedroom_parent);
parcelHelpers.export(exports, "blender", ()=>blender);
parcelHelpers.export(exports, "camera_indoor", ()=>camera_indoor);
parcelHelpers.export(exports, "camera_outdoor", ()=>camera_outdoor);
parcelHelpers.export(exports, "chair_alt", ()=>chair_alt);
parcelHelpers.export(exports, "chair", ()=>chair);
parcelHelpers.export(exports, "coffee_maker", ()=>coffee_maker);
parcelHelpers.export(exports, "coffee", ()=>coffee);
parcelHelpers.export(exports, "dining", ()=>dining);
parcelHelpers.export(exports, "door_back", ()=>door_back);
parcelHelpers.export(exports, "door_front", ()=>door_front);
parcelHelpers.export(exports, "door_sliding", ()=>door_sliding);
parcelHelpers.export(exports, "doorbell", ()=>doorbell);
parcelHelpers.export(exports, "feed", ()=>feed);
parcelHelpers.export(exports, "flatware", ()=>flatware);
parcelHelpers.export(exports, "garage", ()=>garage);
parcelHelpers.export(exports, "light", ()=>light);
parcelHelpers.export(exports, "living", ()=>living);
parcelHelpers.export(exports, "manage_search", ()=>manage_search);
parcelHelpers.export(exports, "podcasts", ()=>podcasts);
parcelHelpers.export(exports, "shower", ()=>shower);
parcelHelpers.export(exports, "table_bar", ()=>table_bar);
parcelHelpers.export(exports, "table_restaurant", ()=>table_restaurant);
parcelHelpers.export(exports, "window", ()=>window);
parcelHelpers.export(exports, "yard", ()=>yard);
var _common = require("./common");
let bathroom = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "bathroom", '<path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M9,18c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S9.55,18,9,18z M9,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S9.55,15,9,15z M12,18c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S12.55,18,12,18z M12,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,15,12,15z M15,18 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,18,15,18z M15,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,15,15,15z M7,11L7,11c0-2.76,2.24-5,5-5h0c2.76,0,5,2.24,5,5v0c0,0.55-0.45,1-1,1H8C7.45,12,7,11.55,7,11z"/>');
let bed = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "bed", '<path d="M21,10.78V8c0-1.65-1.35-3-3-3h-4c-0.77,0-1.47,0.3-2,0.78C11.47,5.3,10.77,5,10,5H6C4.35,5,3,6.35,3,8v2.78 C2.39,11.33,2,12.12,2,13v5c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h16v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-5 C22,12.12,21.61,11.33,21,10.78z M14,7h4c0.55,0,1,0.45,1,1v2h-6V8C13,7.45,13.45,7,14,7z M5,8c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v2H5V8z M4,15v-2c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v2H4z"/>');
let bedroom_baby = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "bedroom_baby", '<path d="m4 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16zm3.68 4.96c0.84 0.00625 1.68 0.0273 1.68 0.0273 0.18 0 0.34 0.1 0.43 0.25l1.44 2.5c0.09 0.15 0.25 0.25 0.43 0.25h4.83c0.28 0 0.5 0.22 0.5 0.5s-0.22 0.5-0.5 0.5h-0.49v2.5l0.84 1.46c0.2-0.15 0.4-0.299 0.6-0.459 0.3-0.25 0.73-0.231 1.01 0.0391 0.31 0.31 0.291 0.821-0.0391 1.11-1.8 1.52-4.04 2.35-6.41 2.35s-4.61-0.83-6.4-2.35c-0.33-0.28-0.349-0.801-0.0391-1.11 0.27-0.27 0.71-0.289 1.01-0.0391 0.19 0.16 0.39 0.309 0.6 0.459l0.83-1.46v-3.99l-1 0.65c-0.32 0.21-0.73 0.159-0.99-0.121l-0.00977-0.0195c-0.29-0.3-0.299-0.77-0.0293-1.08 0.3-0.33 0.649-0.74 0.859-0.98 0.09-0.11 0.069-0.279-0.041-0.359 0 0-0.809-0.31-0.789-0.57 0-0.055 0.84-0.0629 1.68-0.0566zm1.61 7.28-0.809 1.41-0.0312 0.0605c1.1 0.52 2.28 0.789 3.53 0.789s2.45-0.279 3.55-0.789l-0.0293-0.0605-0.811-1.41c-1.74 0.65-3.66 0.65-5.4 0z"/>');
let bedroom_child = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "bedroom_child", '<path d="m4 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16zm5.5 5h5c1.1 0 2 0.9 2 2v1.67c0.88 0.35 1.5 1.2 1.5 2.2v3.38c0 0.41-0.34 0.75-0.75 0.75s-0.75-0.34-0.75-0.75v-0.75h-9v0.75c0 0.41-0.34 0.75-0.75 0.75s-0.75-0.34-0.75-0.75v-3.38c0-1 0.62-1.85 1.5-2.2v-1.67c0-1.1 0.9-2 2-2zm-0.5 1.5v2h6v-2h-6zm-0.631 3.5c-0.48 0-0.869 0.389-0.869 0.869h0.00977v1.13h9v-1.13c0-0.48-0.389-0.869-0.869-0.869h-7.27z"/>');
let bedroom_parent = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "bedroom_parent", '<path d="m4 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16zm3.65 5h3.35c0.37 0 0.72 0.12 1 0.32 0.28-0.2 0.63-0.32 1-0.32h3.35c1.1 0 2 0.9 2 2v2.45c0.4 0.46 0.65 1.06 0.65 1.72v3.08c0 0.41-0.34 0.75-0.75 0.75s-0.75-0.34-0.75-0.75v-0.75h-11v0.75c0 0.41-0.34 0.75-0.75 0.75s-0.75-0.34-0.75-0.75v-3.08c0-0.66 0.25-1.26 0.65-1.72v-2.45c0-1.1 0.9-2 2-2zm-0.4 1.5v2h4v-2h-4zm5.5 0v2h4v-2h-4zm-5.25 3.5c-0.55 0-1 0.45-1 1v1h11v-1c0-0.55-0.45-1-1-1h-9z"/>');
let blender = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "blender", '<path d="M16.13,15.13l1.69-10.98C17.92,3.55,17.45,3,16.83,3H14v0c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v0H5C3.9,3,3,3.9,3,5v4 c0,1.1,0.9,2,2,2h2.23l0.64,4.13C6.74,16.05,6,17.43,6,19v1c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-1 C18,17.43,17.26,16.05,16.13,15.13z M5,9V5h1.31l0.62,4H5z M12,19c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,19,12,19z M14.29,14H9.72L8.33,5h7.34L14.29,14z"/>');
let camera_indoor = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "camera_indoor", '<path d="M10.8,3.65l-6,4.5C4.3,8.53,4,9.12,4,9.75v9c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.12,11.51,3.12,10.8,3.65z M15.27,15.67L14,15v1c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1l1.27-0.67C15.6,12.15,16,12.39,16,12.77v2.46C16,15.61,15.6,15.85,15.27,15.67z"/>');
let camera_outdoor = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "camera_outdoor", '<path d="M18,13c0-0.55-0.45-1-1-1h-4c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-1l1.27,0.67 C19.6,16.85,20,16.61,20,16.23v-2.46c0-0.38-0.4-0.62-0.73-0.44L18,14V13z M10.8,3.9l-6,4.5C4.3,8.78,4,9.37,4,10v9 c0,1.1,0.9,2,2,2h13c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6v-9l6-4.5l6,4.5l0,1h2v-1c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.37,11.51,3.37,10.8,3.9z"/>');
let chair_alt = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "chair_alt", '<path d="M17,10c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v3c0,1.1,0.9,2,2,2h1v2H7c-1.1,0-2,0.9-2,2v6 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h10v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-6c0-1.1-0.9-2-2-2h-1v-2H17z M7,8V5h10v3 H7z M17,16H7v-2h10V16z M14,12h-4v-2h4V12z"/>');
let chair = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "chair", '<path d="m7 3c-1.65 0-3 1.35-3 3v1.14c1.72 0.45 3 2 3 3.86v2h10v-2c0-1.86 1.28-3.41 3-3.86v-1.14c0-1.65-1.35-3-3-3h-10zm-4 6c-1.1 0-2 0.9-2 2v5c0 1.65 1.35 3 3 3v1c0 0.55 0.45 1 1 1s1-0.45 1-1v-1h12v1c0 0.55 0.45 1 1 1s1-0.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-0.9-2-2-2s-2 0.9-2 2v4h-14v-4c0-1.1-0.9-2-2-2z"/>');
let coffee_maker = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "coffee_maker", '<path d="m6 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h13c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3.03c1.23-0.91 2.03-2.36 2.03-4v-3c0-1.1-0.9-2-2-2h-6c-1.1 0-2 0.9-2 2v3c0 1.64 0.809 3.09 2.03 4h-4.03v-16h2v2c0 0.55 0.45 1 1 1h8c0.55 0 1-0.45 1-1v-2h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-13zm7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>');
let coffee = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "coffee", '<path d="M18.5,3H6C4.9,3,4,3.9,4,5v5.71c0,3.83,2.95,7.18,6.78,7.29c3.96,0.12,7.22-3.06,7.22-7v-1h0.5c1.93,0,3.5-1.57,3.5-3.5 S20.43,3,18.5,3z M16,5v3H6V5H16z M18.5,8H18V5h0.5C19.33,5,20,5.67,20,6.5S19.33,8,18.5,8z M5,19h14c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1v0C4,19.45,4.45,19,5,19z"/>');
let dining = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "dining", '<path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M11,10.3c0,0.93-0.64,1.71-1.5,1.93 v6.02C9.5,18.66,9.16,19,8.75,19h0C8.34,19,8,18.66,8,18.25v-6.02c-0.86-0.22-1.5-1-1.5-1.93V6.5C6.5,6.22,6.72,6,7,6 s0.5,0.22,0.5,0.5V9h0.75V6.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V9H10V6.5C10,6.22,10.23,6,10.5,6C10.78,6,11,6.22,11,6.5 V10.3z M15.58,12.59l-0.08,0.03v5.63c0,0.41-0.34,0.75-0.75,0.75h0C14.34,19,14,18.66,14,18.25v-5.63l-0.08-0.04 c-0.97-0.47-1.67-1.7-1.67-3.18c0-1.88,1.13-3.4,2.5-3.4c1.38,0,2.5,1.53,2.5,3.41C17.25,10.89,16.55,12.12,15.58,12.59z"/>');
let door_back = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "door_back", '<path d="M20,19h-1V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1 C21,19.45,20.55,19,20,19z M10,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C11,12.55,10.55,13,10,13z"/>');
let door_front = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "door_front", '<path d="M20,19h-1V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1 C21,19.45,20.55,19,20,19z M14,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C15,12.55,14.55,13,14,13z"/>');
let door_sliding = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "door_sliding", '<path d="M20,19V5c0-1.1-0.9-2-2-2h-5.25v16h-1.5V3H6C4.9,3,4,3.9,4,5v14c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16 c0.55,0,1-0.45,1-1C21,19.45,20.55,19,20,19z M9,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C10,12.55,9.55,13,9,13z M15,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C16,12.55,15.55,13,15,13z"/>');
let doorbell = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "doorbell", '<path d="M10.8,3.9l-6,4.5C4.3,8.78,4,9.37,4,10v9c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.37,11.51,3.37,10.8,3.9z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M15.5,16h-7C8.22,16,8,15.78,8,15.5 v0C8,15.22,8.22,15,8.5,15H9v-2.34c0-1.54,0.82-2.82,2.25-3.16V9.25c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75V9.5 C14.19,9.84,15,11.12,15,12.66V15h0.5c0.28,0,0.5,0.22,0.5,0.5v0C16,15.78,15.78,16,15.5,16z"/>');
let feed = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "feed", ' <path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M8,7h3c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8 C7.45,9,7,8.55,7,8v0C7,7.45,7.45,7,8,7z M16,17H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0 C17,16.55,16.55,17,16,17z M16,13H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,12.55,16.55,13,16,13z M15,8 V5l4,4h-3C15.45,9,15,8.55,15,8z"/>');
let flatware = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "flatware", '<path d="M16,7.08c0,1.77-0.84,3.25-2,3.82V20c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-9.1c-1.16-0.57-2-2.05-2-3.82 C10.01,4.83,11.35,3,13,3C14.66,3,16,4.83,16,7.08z M18.27,3.18C17.64,2.99,17,3.49,17,4.15L17,20c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-7h1c0.55,0,1-0.45,1-1V7C21,5.54,20.14,3.74,18.27,3.18z M8.28,3c-0.4,0-0.72,0.32-0.72,0.72V7H6.72V3.72 C6.72,3.32,6.4,3,6,3S5.28,3.32,5.28,3.72V7H4.44V3.72C4.44,3.32,4.12,3,3.72,3S3,3.32,3,3.72V9c0,1.1,0.9,2,2,2v9 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-9c1.1,0,2-0.9,2-2V3.72C9,3.32,8.68,3,8.28,3z"/>');
let garage = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "garage", '<path d="m4 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16zm3.72 3.5h8.56s0.54 0.0093 0.92 0.529c0.02 0.03 0.0308 0.0503 0.0508 0.0703 0.07 0.11 0.139 0.24 0.189 0.4 0.22 0.66 0.741 2.23 1.56 4.69v6.5c0 0.45-0.349 0.811-0.779 0.811h-0.441c-0.44 0-0.779-0.361-0.779-0.811v-1.19h-10v1.19c0 0.45-0.349 0.811-0.779 0.811h-0.441c-0.43 0-0.779-0.361-0.779-0.811v-6.5c0.82-2.47 1.34-4.03 1.56-4.69 0.05-0.16 0.119-0.29 0.189-0.4 0.02-0.02 0.0308-0.0405 0.0508-0.0605 0.38-0.53 0.92-0.539 0.92-0.539zm0.609 2-0.66 2h8.66l-0.66-2h-7.34zm0.67 4.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>');
let light = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "light", '<path d="M13,6.06V4c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2.06c-4.5,0.5-8,4.31-8,8.93C3,16.1,3.9,17,5.01,17L8,17 c0,2.21,1.79,4,4,4s4-1.79,4-4l2.99,0C20.1,17,21,16.1,21,14.99C21,10.37,17.5,6.56,13,6.06z M12,15l-7,0c0-3.86,3.14-7,7-7 s7,3.14,7,7L12,15z"/>');
let living = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "living", '<path d="m4 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16zm5.25 4h5.5c1.66 0 3 1.34 3 3v1.35c0.74 0.43 1.25 1.23 1.25 2.15v3.5c0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2v-3.5c0-0.92 0.51-1.72 1.25-2.15v-1.35c0-1.66 1.34-3 3-3zm0 1.5c-0.83 0-1.5 0.67-1.5 1.5v1.03c1.26 0.12 2.25 1.17 2.25 2.47v0.5h4v-0.5c0-1.3 0.99-2.35 2.25-2.47v-1.03c0-0.83-0.67-1.5-1.5-1.5h-5.5zm-1.75 4c-0.55 0-1 0.45-1 1v3.5c0 0.28 0.22 0.5 0.5 0.5h10c0.28 0 0.5-0.22 0.5-0.5v-3.5c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-7v-2c0-0.55-0.45-1-1-1z"/>');
let manage_search = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "manage_search", '<path d="M6,9H3C2.45,9,2,8.55,2,8v0c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v0C7,8.55,6.55,9,6,9z M6,12H3c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v0C7,12.45,6.55,12,6,12z M19.88,18.29l-3.12-3.12c-0.86,0.56-1.89,0.88-3,0.82 c-2.37-0.11-4.4-1.96-4.72-4.31C8.6,8.33,11.49,5.5,14.87,6.07c1.95,0.33,3.57,1.85,4,3.78c0.33,1.46,0.01,2.82-0.7,3.9l3.13,3.13 c0.39,0.39,0.39,1.02,0,1.41l0,0C20.91,18.68,20.27,18.68,19.88,18.29z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3 S17,12.65,17,11z M3,19h8c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3c-0.55,0-1,0.45-1,1v0C2,18.55,2.45,19,3,19z"/>');
let podcasts = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "podcasts", '<path d="M14,12c0,0.74-0.4,1.38-1,1.72V21c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-7.28c-0.6-0.35-1-0.98-1-1.72c0-1.1,0.9-2,2-2 S14,10.9,14,12z M10.75,6.13c-2.27,0.46-4.12,2.28-4.61,4.55c-0.4,1.86,0.07,3.62,1.08,4.94c0.35,0.45,1.03,0.47,1.43,0.07 l0.07-0.07c0.34-0.34,0.34-0.87,0.06-1.25c-0.68-0.9-0.98-2.1-0.66-3.37c0.35-1.42,1.52-2.57,2.95-2.88C13.69,7.52,16,9.49,16,12 c0,0.87-0.28,1.67-0.76,2.32c-0.3,0.41-0.29,0.97,0.07,1.33l0,0c0.44,0.44,1.17,0.37,1.54-0.14C17.57,14.53,18,13.31,18,12 C18,8.28,14.61,5.35,10.75,6.13z M10.83,2.07C6.3,2.58,2.61,6.25,2.07,10.78c-0.35,2.95,0.59,5.67,2.32,7.7 c0.37,0.43,1.03,0.46,1.43,0.06l0.05-0.05c0.35-0.35,0.38-0.92,0.05-1.3c-1.56-1.83-2.33-4.37-1.7-7.06 c0.7-3.01,3.18-5.39,6.22-5.97C15.53,3.18,20,7.08,20,12c0,1.96-0.72,3.76-1.9,5.16c-0.34,0.4-0.31,0.98,0.05,1.35l0,0 c0.42,0.42,1.11,0.39,1.49-0.07C21.11,16.7,22,14.46,22,12C22,6.09,16.87,1.38,10.83,2.07z"/>');
let shower = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "shower", '<path d="m12 3c-0.55 0-1 0.45-1 1v1.08c-3.39 0.49-6 3.39-6 6.92v1c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1v-1c0-3.53-2.61-6.43-6-6.92v-1.08c0-0.55-0.45-1-1-1zm-4 13a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-8 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>');
let table_bar = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "table_bar", '<path d="M22,7.5C22,5.57,17.52,4,12,4S2,5.57,2,7.5c0,1.81,3.95,3.31,9,3.48V15H9.35c-0.82,0-1.55,0.5-1.86,1.26l-0.99,2.47 C6.27,19.34,6.71,20,7.37,20h0c0.38,0,0.72-0.23,0.86-0.58L9.2,17h5.6l0.97,2.42c0.14,0.35,0.48,0.58,0.86,0.58h0 c0.66,0,1.11-0.66,0.86-1.27l-0.99-2.47C16.2,15.5,15.46,15,14.65,15H13v-4.02C18.05,10.81,22,9.31,22,7.5z"/>');
let table_restaurant = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "table_restaurant", '<path d="M21.96,9.73l-1.43-5C20.41,4.3,20.02,4,19.57,4H4.43C3.98,4,3.59,4.3,3.47,4.73l-1.43,5C1.86,10.36,2.34,11,3,11h2.2 l-1.05,7.88C4.07,19.47,4.53,20,5.13,20h0c0.5,0,0.92-0.37,0.98-0.86L6.67,15h10.67l0.55,4.14c0.07,0.49,0.49,0.86,0.98,0.86h0 c0.6,0,1.06-0.53,0.98-1.12L18.8,11H21C21.66,11,22.14,10.36,21.96,9.73z M6.93,13l0.27-2h9.6l0.27,2H6.93z"/>');
let window = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "window", '<path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,11h-7V4h7V11z M11,4v7H4V4H11z M4,13h7v7H4V13z M13,20v-7h7v7H13z"/>');
let yard = (0, _common.icons).registerIcon([
    "material",
    "navigation"
], "yard", '<path d="m4 2c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16zm8 3.26c0.86 0 1.56 0.701 1.56 1.56l-0.00977 0.119c0.26-0.18 0.559-0.279 0.889-0.279 0.86 0 1.56 0.701 1.56 1.56 0 0.62-0.371 1.16-0.891 1.4 0.52 0.25 0.891 0.79 0.891 1.41 0 0.86-0.701 1.56-1.56 1.56-0.33 0-0.639-0.109-0.889-0.279l0.00977 0.119c0 0.86-0.701 1.56-1.56 1.56s-1.56-0.701-1.56-1.56l0.00977-0.119c-0.26 0.18-0.559 0.279-0.889 0.279-0.86 0-1.56-0.701-1.56-1.56 0-0.62 0.371-1.16 0.891-1.4-0.52-0.25-0.891-0.79-0.891-1.41 0-0.86 0.701-1.56 1.56-1.56 0.33 0 0.639 0.0993 0.889 0.279l-0.00977-0.119c0-0.86 0.701-1.56 1.56-1.56zm0 2.8a1.56 1.56 0 0 0-1.56 1.56 1.56 1.56 0 0 0 1.56 1.56 1.56 1.56 0 0 0 1.56-1.56 1.56 1.56 0 0 0-1.56-1.56zm4.88 5.07c0.62 0.0178 1.11 0.612 0.957 1.26-0.63 2.64-3.01 4.61-5.84 4.61s-5.21-1.97-5.84-4.61c-0.18-0.74 0.49-1.4 1.23-1.23 2.64 0.63 4.61 3.01 4.61 5.84 0-2.83 1.97-5.21 4.61-5.84 0.0925-0.0225 0.185-0.0318 0.273-0.0293z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LU2l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "edit_notifications", ()=>edit_notifications);
parcelHelpers.export(exports, "notification_add", ()=>notification_add);
parcelHelpers.export(exports, "notifications_active", ()=>notifications_active);
parcelHelpers.export(exports, "notifications", ()=>notifications);
parcelHelpers.export(exports, "notifications_none", ()=>notifications_none);
parcelHelpers.export(exports, "notifications_off", ()=>notifications_off);
parcelHelpers.export(exports, "notifications_paused", ()=>notifications_paused);
var _common = require("./common");
let edit_notifications = (0, _common.icons).registerIcon([
    "material",
    "social"
], "edit_notifications", '<path d="M17.58,6.25l1.77,1.77l-4.84,4.84C14.42,12.95,14.29,13,14.16,13H13.1c-0.28,0-0.5-0.22-0.5-0.5v-1.06 c0-0.13,0.05-0.26,0.15-0.35L17.58,6.25z M20.85,5.81l-1.06-1.06c-0.2-0.2-0.51-0.2-0.71,0l-0.85,0.85l1.77,1.77l0.85-0.85 C21.05,6.32,21.05,6,20.85,5.81z M20,18c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1s0.45-1,1-1h1v-7c0-2.79,1.91-5.14,4.5-5.8V3.5 C10.5,2.67,11.17,2,12,2s1.5,0.67,1.5,1.5v0.7c0.82,0.21,1.57,0.59,2.21,1.09l-4.52,4.52c-0.38,0.38-0.59,0.88-0.59,1.41V13 c0,1.1,0.9,2,2,2h1.77c0.53,0,1.04-0.21,1.41-0.59L18,12.2V17h1C19.55,17,20,17.45,20,18z M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z"/>');
let notification_add = (0, _common.icons).registerIcon([
    "material",
    "social"
], "notification_add", '<path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M14,9c0,2.61,1.67,4.83,4,5.66L18,17h1c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H5 c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h1v-7c0-2.79,1.91-5.14,4.5-5.8V3.5C10.5,2.67,11.17,2,12,2s1.5,0.67,1.5,1.5v0.7 c0.71,0.18,1.36,0.49,1.95,0.9C14.54,6.14,14,7.51,14,9z M23,8h-2V6c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2h-2 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0 C24,8.45,23.55,8,23,8z"/>');
let notifications_active = (0, _common.icons).registerIcon([
    "material",
    "social"
], "notifications_active", '<path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16zm-6.01 6c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zM6.77 4.73c.42-.38.43-1.03.03-1.43-.38-.38-1-.39-1.39-.02C3.7 4.84 2.52 6.96 2.14 9.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83.3-1.94 1.26-3.67 2.65-4.94zM18.6 3.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05z"/>');
let notifications = (0, _common.icons).registerIcon([
    "material",
    "social"
], "notifications", '<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z"/>');
let notifications_none = (0, _common.icons).registerIcon([
    "material",
    "social"
], "notifications_none", '<path d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"/>');
let notifications_off = (0, _common.icons).registerIcon([
    "material",
    "social"
], "notifications_off", '<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23L18 13.1V11zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.73 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h12.83l1.74 1.74 1.41-1.41L5.41 3.35z"/>');
let notifications_paused = (0, _common.icons).registerIcon([
    "material",
    "social"
], "notifications_paused", '<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm7.29-4.71L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM14.5 9.33c0 .31-.11.6-.3.84l-2.5 3.03h1.9c.5 0 .9.4.9.9s-.4.9-.9.9h-2.78c-.73 0-1.32-.59-1.32-1.32v-.01c0-.31.11-.6.3-.84l2.5-3.03h-1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.78c.73 0 1.32.59 1.32 1.33z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bSqj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "star", ()=>star);
parcelHelpers.export(exports, "check_box", ()=>check_box);
parcelHelpers.export(exports, "check_box_outline_blank", ()=>check_box_outline_blank);
parcelHelpers.export(exports, "radio_button_unchecked", ()=>radio_button_unchecked);
parcelHelpers.export(exports, "toggle_on", ()=>toggle_on);
parcelHelpers.export(exports, "star_outline", ()=>star_outline);
parcelHelpers.export(exports, "toggle_off", ()=>toggle_off);
parcelHelpers.export(exports, "star_half", ()=>star_half);
parcelHelpers.export(exports, "indeterminate_check_box", ()=>indeterminate_check_box);
var _common = require("./common");
let star = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "star", '<path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"/>');
let check_box = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "check_box", '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29c-.39.39-1.02.39-1.41 0L5.71 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.58 7.59z"/>');
let check_box_outline_blank = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "check_box_outline_blank", '<path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
let radio_button_unchecked = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "radio_button_unchecked", '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>');
let toggle_on = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "toggle_on", '<path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>');
let star_outline = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "star_outline", '<path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>');
let toggle_off = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "toggle_off", '<path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>');
let star_half = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "star_half", '<path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>');
let indeterminate_check_box = (0, _common.icons).registerIcon([
    "material",
    "toggle"
], "indeterminate_check_box", '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>');

},{"./common":"eZRPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9AvLK","hqQHC"], "hqQHC", "parcelRequire3efb")

//# sourceMappingURL=index.253ff8cf.js.map
