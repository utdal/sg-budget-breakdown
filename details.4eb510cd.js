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
})({"hcyOz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "85a8650b4eb510cd";
"use strict";
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

},{}],"kq51T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _topLevelJson = require("../data/top_level.json");
var _topLevelJsonDefault = parcelHelpers.interopDefault(_topLevelJson);
var _edGenFundsInstructionJson = require("../data/ed-gen-funds_instruction.json");
var _edGenFundsInstructionJsonDefault = parcelHelpers.interopDefault(_edGenFundsInstructionJson);
var _edGenFundsOperMainJson = require("../data/ed-gen-funds_oper_main.json");
var _edGenFundsOperMainJsonDefault = parcelHelpers.interopDefault(_edGenFundsOperMainJson);
var _edGenFundsInstiSuppJson = require("../data/ed-gen-funds_insti_supp.json");
var _edGenFundsInstiSuppJsonDefault = parcelHelpers.interopDefault(_edGenFundsInstiSuppJson);
var _feesJson = require("../data/fees.json");
var _feesJsonDefault = parcelHelpers.interopDefault(_feesJson);
am4core.useTheme(am4themes_animated);
function buildSankey(divName, data, padRight) {
    let chart = am4core.create(divName, am4charts.SankeyDiagram);
    chart.data = data;
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.paddingRight = padRight;
    chart.paddingTop = 25;
    chart.paddingBottom = 25;
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.width = 15;
    nodeTemplate.nameLabel.locationX = 0.2;
    chart.nodes.template.nameLabel.label.truncate = false;
    chart.nodes.template.nameLabel.label.wrap = false;
}
function buildTreeMap(divName, data) {
    var chart = am4core.create(divName, am4charts.TreeMap);
    chart.data = data;
    /* Set color step */ chart.colors.step = 2;
    chart.paddingBottom = 25;
    /* Define data fields */ chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";
    // only one level visible initially
    chart.maxLevels = 2;
    chart.zoomable = false;
    let level0 = chart.seriesTemplates.create("0");
    let level0_column = level0.columns.template;
    level0_column.fillOpacity = 0.8;
    level0_column.stroke = am4core.color("#f1f5f9");
    let level1 = chart.seriesTemplates.create("1");
    let level1_column = level1.columns.template;
    level1_column.fillOpacity = 0;
    let level0_bullet = level0.bullets.push(new am4charts.LabelBullet());
    level0_bullet.locationY = 0.5;
    level0_bullet.locationX = 0.5;
    level0_bullet.label.text = "{name}";
    level0_bullet.label.fill = am4core.color("#f1f5f9");
}
buildSankey("sankey_top", (0, _topLevelJsonDefault.default), 200);
buildSankey("sankey_instruction", (0, _edGenFundsInstructionJsonDefault.default), 300);
buildSankey("sankey_operations", (0, _edGenFundsOperMainJsonDefault.default), 200);
buildTreeMap("treemap_fees", (0, _feesJsonDefault.default));
buildTreeMap("treemap_insti_supp", (0, _edGenFundsInstiSuppJsonDefault.default));

},{"../data/top_level.json":"gvIqa","../data/ed-gen-funds_instruction.json":"6m2tB","../data/ed-gen-funds_oper_main.json":"kEtEd","../data/ed-gen-funds_insti_supp.json":"cFEu8","../data/fees.json":"bCd6S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvIqa":[function(require,module,exports) {
module.exports = JSON.parse('[{"from":"Adjustments","to":"Educational and General","value":22024442.73,"sub":[]},{"from":"Adjustments","to":"Designated","value":107852933.32,"sub":[]},{"from":"Adjustments","to":"Auxiliary","value":632463,"sub":[]},{"from":"Adjustments","to":"Restricted","value":38718937.94,"sub":[]},{"from":"Designated","to":"Adjustments (Out)","value":1786830.22,"sub":[]},{"from":"Auxiliary","to":"Adjustments (Out)","value":1733097.87,"sub":[]},{"from":"Restricted","to":"Adjustments (Out)","value":11163.9,"sub":[]},{"from":"AUF/Approp. Transfers Received","to":"Educational and General","value":6379791,"sub":[]},{"from":"State Appropriations","to":"Educational and General","value":129486370,"sub":[]},{"from":"Tuition and Fees","to":"Educational and General","value":67861826,"sub":[]},{"from":"Tuition and Fees","to":"Designated","value":412021339,"sub":[]},{"from":"Tuition and Fees","to":"Auxiliary","value":32568558,"sub":[]},{"from":"Educational and General","to":"Discounts and Allowances","value":19778126.09,"sub":[]},{"from":"Designated","to":"Discounts and Allowances","value":120082386.15,"sub":[]},{"from":"Auxiliary","to":"Discounts and Allowances","value":9492008.76,"sub":[]},{"from":"Federal Sponsored Programs","to":"Designated","value":18517092,"sub":[]},{"from":"Federal Sponsored Programs","to":"Restricted","value":44416526,"sub":[]},{"from":"State Sponsored Programs","to":"Educational and General","value":16458054,"sub":[]},{"from":"State Sponsored Programs","to":"Restricted","value":2241656,"sub":[]},{"from":"Local/Private Sponsored Programs","to":"Designated","value":2178599,"sub":[]},{"from":"Local/Private Sponsored Programs","to":"Restricted","value":12621944,"sub":[]},{"from":"Sales/Services of Edu. Activities","to":"Educational and General","value":8081998,"sub":[]},{"from":"Sales/Services of Edu. Activities","to":"Designated","value":28193185,"sub":[]},{"from":"Sales/Services of Edu. Activities","to":"Restricted","value":923000,"sub":[]},{"from":"Auxiliary Enterprises (Revenues)","to":"Auxiliary","value":51523512,"sub":[]},{"from":"Other Operating Revenues","to":"Designated","value":7461361,"sub":[]},{"from":"Other Operating Revenues","to":"Restricted","value":1751000,"sub":[]},{"from":"Federal Sponsored Prog. (Nonoperating)","to":"Restricted","value":35952980,"sub":[]},{"from":"State/Local Sponsored Prog. (Nonoperating)","to":"Designated","value":11324826,"sub":[]},{"from":"Gifts for Operations","to":"Designated","value":3000,"sub":[]},{"from":"Gifts for Operations","to":"Restricted","value":12770000,"sub":[]},{"from":"Net Investment Income","to":"Educational and General","value":100000,"sub":[]},{"from":"Net Investment Income","to":"Designated","value":23615381,"sub":[]},{"from":"Net Investment Income","to":"Restricted","value":21632757,"sub":[]},{"from":"Educational and General","to":"Instruction","value":128617222,"sub":[]},{"from":"Designated","to":"Instruction","value":117520436,"sub":[]},{"from":"Restricted","to":"Instruction","value":1526635,"sub":[]},{"from":"Educational and General","to":"Academic Support","value":21110503,"sub":[]},{"from":"Designated","to":"Academic Support","value":66035930,"sub":[]},{"from":"Restricted","to":"Academic Support","value":5425446,"sub":[]},{"from":"Educational and General","to":"Research","value":14746822,"sub":[]},{"from":"Designated","to":"Research","value":53499676,"sub":[]},{"from":"Restricted","to":"Research","value":76539661,"sub":[]},{"from":"Educational and General","to":"Public Service","value":4262128,"sub":[]},{"from":"Designated","to":"Public Service","value":3427575,"sub":[]},{"from":"Restricted","to":"Public Service","value":2954151,"sub":[]},{"from":"Educational and General","to":"Institutional Support","value":19055992,"sub":[]},{"from":"Designated","to":"Institutional Support","value":31288006,"sub":[]},{"from":"Restricted","to":"Institutional Support","value":3231736,"sub":[]},{"from":"Educational and General","to":"Student Services","value":297290,"sub":[]},{"from":"Designated","to":"Student Services","value":22802879,"sub":[]},{"from":"Restricted","to":"Student Services","value":590077,"sub":[]},{"from":"Educational and General","to":"Operation & Maintenance","value":17943234,"sub":[]},{"from":"Designated","to":"Operation & Maintenance","value":39817738,"sub":[]},{"from":"Restricted","to":"Operation & Maintenance","value":1255039,"sub":[]},{"from":"Educational and General","to":"Unexpended Plant Funds","value":2000000,"sub":[]},{"from":"Unexpended Plant Funds","to":"Operation & Maintenance","value":2000000,"sub":[]},{"from":"Educational and General","to":"Scholarships & Fellowships","value":17099546,"sub":[]},{"from":"Designated","to":"Scholarships & Fellowships","value":124761905,"sub":[]},{"from":"Restricted","to":"Scholarships & Fellowships","value":39831329,"sub":[]},{"from":"Auxiliary","to":"Aux. Enterprises (Expenses)","value":48275378,"sub":[]},{"from":"Designated","to":"Debt (Interest)","value":5847851,"sub":[]},{"from":"Auxiliary","to":"Debt (Interest)","value":14243285,"sub":[]},{"from":"Restricted","to":"Debt (Interest)","value":95089,"sub":[]},{"from":"Designated","to":"Debt (Principal)","value":12016608,"sub":[]},{"from":"Auxiliary","to":"Debt (Principal)","value":10179915,"sub":[]},{"from":"Restricted","to":"Debt (Principal)","value":65000,"sub":[]},{"from":"Educational and General","to":"Depreciation & Amortization","value":20713151.49,"sub":[]},{"from":"Designated","to":"Depreciation & Amortization","value":44814998.4,"sub":[]},{"from":"Auxiliary","to":"Depreciation & Amortization","value":4378612.8,"sub":[]},{"from":"Restricted","to":"Depreciation & Amortization","value":18295230.32,"sub":[]}]');

},{}],"6m2tB":[function(require,module,exports) {
module.exports = JSON.parse('[{"from":"Provost","to":"Office Salaries (Provost)","value":905745,"sub":[]},{"from":"A&H","to":"Salaries (A&H)","value":7310426,"sub":[]},{"from":"A&H","to":"Maintenance & Operations (A&H)","value":1410,"sub":[]},{"from":"NSM","to":"Admin Salaries (NSM)","value":805784,"sub":[]},{"from":"NSM","to":"Faculty Salaries (NSM)","value":16078069,"sub":[]},{"from":"NSM","to":"Classified Salaries (NSM)","value":1827674,"sub":[]},{"from":"NSM","to":"Maintenance & Operations (NSM)","value":390000,"sub":[]},{"from":"EPPS","to":"Salaries (EPPS)","value":7068683,"sub":[]},{"from":"JSOM","to":"Admin Salaries (JSOM)","value":1763668,"sub":[]},{"from":"JSOM","to":"Faculty Salaries (JSOM)","value":18776479,"sub":[]},{"from":"JSOM","to":"Classified Salaries (JSOM)","value":4043792,"sub":[]},{"from":"BBS","to":"Admin Salaries (BBS)","value":811728,"sub":[]},{"from":"BBS","to":"Faculty Salaries (BBS)","value":7206933,"sub":[]},{"from":"BBS","to":"Classified Salaries (BBS)","value":978677,"sub":[]},{"from":"BBS","to":"Maintenance & Operations (BBS)","value":8220,"sub":[]},{"from":"IS","to":"Salaries (IS)","value":1274151,"sub":[]},{"from":"ECS","to":"Admin Salaries (ECS)","value":212406,"sub":[]},{"from":"ECS","to":"Faculty Salaries (ECS)","value":21210967,"sub":[]},{"from":"ECS","to":"Classified Salaries (ECS)","value":3508263,"sub":[]},{"from":"ECS","to":"Maintenance & Operations (ECS)","value":185000,"sub":[]},{"from":"ATEC","to":"Salaries (ATEC)","value":3999331,"sub":[]},{"from":"ATEC","to":"Maintenance & Operations (ATEC)","value":1680,"sub":[]},{"from":"Other Instructional Support","to":"McDermott Scholars Admin Salaries","value":157106,"sub":[]},{"from":"Other Instructional Support","to":"Research Salaries","value":6397389,"sub":[]},{"from":"Other Instructional Support","to":"Undergrad. Edu. Office Salaries","value":702165,"sub":[]},{"from":"Other Instructional Support","to":"Grad. Edu. Office Salaries","value":774384,"sub":[]},{"from":"Other Instructional Support","to":"Honors Prog. Salaries","value":103388,"sub":[]},{"from":"Other Instructional Support","to":"Merit Pool","value":4460948,"sub":[]}]');

},{}],"kEtEd":[function(require,module,exports) {
module.exports = JSON.parse('[{"from":"Operations & Maintenance","to":"Facilities Management","value":7450020,"sub":[]},{"from":"Operations & Maintenance","to":"EMS","value":779801,"sub":[]},{"from":"Operations & Maintenance","to":"University Police","value":4712925,"sub":[]}]');

},{}],"cFEu8":[function(require,module,exports) {
module.exports = JSON.parse('[{"name":"ICET Salaries","value":507647},{"name":"VP for Development Salaries","value":3748366},{"name":"Internal Audit Salaries","value":729108},{"name":"Planning & Analysis Salaries","value":549477},{"name":"Galerstein Gender Center Salaries","value":213518},{"name":"VP Communications Salaries","value":1879040},{"name":"Finance Salaries","value":508586},{"name":"AFR Salaries","value":1392088},{"name":"Budget Office","value":595705},{"name":"Procurement Salaries","value":852213},{"name":"Payroll Salaries","value":677372},{"name":"VP FED Salaries","value":253982},{"name":"HR Salaries","value":1913872},{"name":"Other Salaries","value":1743184}]');

},{}],"bCd6S":[function(require,module,exports) {
module.exports = JSON.parse('[{"name":"Student Services","children":[{"name":"AMP","value":53638},{"name":"Assessment","value":153084},{"name":"Athletic Supplement","value":550154},{"name":"Callier Center","value":10420},{"name":"Campus Events","value":171683},{"name":"Center for Students in Recovery","value":164647},{"name":"Child Care","value":33650},{"name":"Dean of Students","value":980181},{"name":"Debate","value":109000},{"name":"Drumline","value":6639},{"name":"Esports","value":40156},{"name":"Fraternity & Sorority Life","value":316492},{"name":"Gender Center","value":170811},{"name":"Graduate Student Assembly","value":55500},{"name":"Intercultural Programs","value":382653},{"name":"Legal Mediation","value":33011},{"name":"Marketing Administration","value":258806},{"name":"Mercury","value":65416},{"name":"Meteor Theatre","value":73752},{"name":"Military and Veteran Center","value":276944},{"name":"Mock Trial","value":87844},{"name":"Model UN","value":80114},{"name":"Moot Court","value":49458},{"name":"Multicultural Center","value":735076},{"name":"Pep Band","value":28699},{"name":"Radio UTD","value":55280},{"name":"Reunion","value":19608},{"name":"Spirit Program","value":179518},{"name":"Student AcessAbility","value":4500},{"name":"Student Government","value":300576},{"name":"Student Health Center","value":1867511},{"name":"Student Leadership Programs","value":127834},{"name":"Student Media Administration","value":268582},{"name":"Student Organizations (SOC)","value":417987},{"name":"Student Programs Administration","value":151214},{"name":"Student Transition Programs","value":631286},{"name":"Student Volunteerism","value":398030},{"name":"Student Wellness Center","value":380839},{"name":"SUAAB","value":517276},{"name":"University Career Center","value":1608699},{"name":"University Recreation","value":478304},{"name":"UTD TV","value":47685},{"name":"VPSA Office","value":450845},{"name":"Year Experience Program","value":103230}]},{"name":"Student Union","children":[{"name":"SU Administration","value":1241949},{"name":"Building Operations","value":564495}]},{"name":"SSB","children":[{"name":"Maintenance","value":583218},{"name":"Utilities","value":180696},{"name":"Building Debt Service","value":2352378}]},{"name":"Recreation","children":[{"name":"Activity Center","value":1638351},{"name":"Utilities & Debt Service","value":1480401},{"name":"Field Maintenance","value":395453}]},{"name":"Medical","children":[{"name":"Student Counseling Center","value":2241413}]},{"name":"Athletics","children":[{"name":"Athletic Operations","value":2381338},{"name":"Athletic Training Room","value":39000},{"name":"Baseball","value":95274},{"name":"Basketball (Men\'s)","value":79071},{"name":"Basketball (Women\'s)","value":80759},{"name":"Cross Country","value":32340},{"name":"Golf","value":82310},{"name":"Marketing","value":40000},{"name":"Soccer (Men\'s)","value":67993},{"name":"Soccer (Women\'s)","value":68143},{"name":"Softball ","value":73730},{"name":"Strength and Conditioning ","value":48940},{"name":"Tennis","value":47220},{"name":"Track & Field","value":36340},{"name":"Volleyball","value":63470}]},{"name":"Advising","value":15059797},{"name":"IT","value":26997584},{"name":"Infrastructure","value":13640756},{"name":"Library Aquisitions","value":9933998},{"name":"Transporation","value":1143148},{"name":"Student Business Services","value":13401749}]');

},{}],"gkKU3":[function(require,module,exports) {
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

},{}]},["hcyOz","kq51T"], "kq51T", "parcelRequire94c2")

//# sourceMappingURL=details.4eb510cd.js.map
