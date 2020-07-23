/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@uppy/companion-client/lib/AuthError.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/AuthError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AuthError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(AuthError, _Error);

  function AuthError() {
    var _this;

    _this = _Error.call(this, 'Authorization required') || this;
    _this.name = 'AuthError';
    _this.isAuthError = true;
    return _this;
  }

  return AuthError;
}(_wrapNativeSuper(Error));

module.exports = AuthError;

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/Provider.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/Provider.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var RequestClient = __webpack_require__(/*! ./RequestClient */ "./node_modules/@uppy/companion-client/lib/RequestClient.js");

var tokenStorage = __webpack_require__(/*! ./tokenStorage */ "./node_modules/@uppy/companion-client/lib/tokenStorage.js");

var _getName = function _getName(id) {
  return id.split('-').map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join(' ');
};

module.exports =
/*#__PURE__*/
function (_RequestClient) {
  _inheritsLoose(Provider, _RequestClient);

  function Provider(uppy, opts) {
    var _this;

    _this = _RequestClient.call(this, uppy, opts) || this;
    _this.provider = opts.provider;
    _this.id = _this.provider;
    _this.authProvider = opts.authProvider || _this.provider;
    _this.name = _this.opts.name || _getName(_this.id);
    _this.pluginId = _this.opts.pluginId;
    _this.tokenKey = "companion-" + _this.pluginId + "-auth-token";
    return _this;
  }

  var _proto = Provider.prototype;

  _proto.headers = function headers() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _RequestClient.prototype.headers.call(_this2).then(function (headers) {
        _this2.getAuthToken().then(function (token) {
          resolve(_extends({}, headers, {
            'uppy-auth-token': token
          }));
        });
      }).catch(reject);
    });
  };

  _proto.onReceiveResponse = function onReceiveResponse(response) {
    response = _RequestClient.prototype.onReceiveResponse.call(this, response);
    var plugin = this.uppy.getPlugin(this.pluginId);
    var oldAuthenticated = plugin.getPluginState().authenticated;
    var authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated: authenticated
    });
    return response;
  } // @todo(i.olarewaju) consider whether or not this method should be exposed
  ;

  _proto.setAuthToken = function setAuthToken(token) {
    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
  };

  _proto.getAuthToken = function getAuthToken() {
    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
  };

  _proto.authUrl = function authUrl() {
    return this.hostname + "/" + this.id + "/connect";
  };

  _proto.fileUrl = function fileUrl(id) {
    return this.hostname + "/" + this.id + "/get/" + id;
  };

  _proto.list = function list(directory) {
    return this.get(this.id + "/list/" + (directory || ''));
  };

  _proto.logout = function logout() {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      _this3.get(_this3.id + "/logout").then(function (res) {
        _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
          return resolve(res);
        }).catch(reject);
      }).catch(reject);
    });
  };

  Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
    plugin.type = 'acquirer';
    plugin.files = [];

    if (defaultOpts) {
      plugin.opts = _extends({}, defaultOpts, opts);
    }

    if (opts.serverUrl || opts.serverPattern) {
      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }

    if (opts.companionAllowedHosts) {
      var pattern = opts.companionAllowedHosts; // validate companionAllowedHosts param

      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
        throw new TypeError(plugin.id + ": the option \"companionAllowedHosts\" must be one of string, Array, RegExp");
      }

      plugin.opts.companionAllowedHosts = pattern;
    } else {
      // does not start with https://
      if (/^(?!https?:\/\/).*$/i.test(opts.companionUrl)) {
        plugin.opts.companionAllowedHosts = "https://" + opts.companionUrl.replace(/^\/\//, '');
      } else {
        plugin.opts.companionAllowedHosts = opts.companionUrl;
      }
    }

    plugin.storage = plugin.opts.storage || tokenStorage;
  };

  return Provider;
}(RequestClient);

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/RequestClient.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/RequestClient.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthError = __webpack_require__(/*! ./AuthError */ "./node_modules/@uppy/companion-client/lib/AuthError.js"); // Remove the trailing slash so we can always safely append /xyz.


function stripSlash(url) {
  return url.replace(/\/$/, '');
}

module.exports = (_temp = _class =
/*#__PURE__*/
function () {
  function RequestClient(uppy, opts) {
    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
    this.preflightDone = false;
  }

  var _proto = RequestClient.prototype;

  _proto.headers = function headers() {
    var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || {};
    return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
  };

  _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
    var _this = this;

    return function (response) {
      if (!skip) {
        return _this.onReceiveResponse(response);
      }

      return response;
    };
  };

  _proto.onReceiveResponse = function onReceiveResponse(response) {
    var state = this.uppy.getState();
    var companion = state.companion || {};
    var host = this.opts.companionUrl;
    var headers = response.headers; // Store the self-identified domain name for the Companion instance we just hit.

    if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
      var _extends2;

      this.uppy.setState({
        companion: _extends({}, companion, (_extends2 = {}, _extends2[host] = headers.get('i-am'), _extends2))
      });
    }

    return response;
  };

  _proto._getUrl = function _getUrl(url) {
    if (/^(https?:|)\/\//.test(url)) {
      return url;
    }

    return this.hostname + "/" + url;
  };

  _proto._json = function _json(res) {
    if (res.status === 401) {
      throw new AuthError();
    }

    if (res.status < 200 || res.status > 300) {
      var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
      return res.json().then(function (errData) {
        errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
        errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
        throw new Error(errMsg);
      }).catch(function () {
        throw new Error(errMsg);
      });
    }

    return res.json();
  };

  _proto.preflight = function preflight(path) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      if (_this2.preflightDone) {
        return resolve(_this2.allowedHeaders.slice());
      }

      fetch(_this2._getUrl(path), {
        method: 'OPTIONS'
      }).then(function (response) {
        if (response.headers.has('access-control-allow-headers')) {
          _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
            return headerName.trim().toLowerCase();
          });
        }

        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
      }).catch(function (err) {
        _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');

        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
      });
    });
  };

  _proto.preflightAndHeaders = function preflightAndHeaders(path) {
    var _this3 = this;

    return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
      var allowedHeaders = _ref[0],
          headers = _ref[1];
      // filter to keep only allowed Headers
      Object.keys(headers).forEach(function (header) {
        if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
          _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);

          delete headers[header];
        }
      });
      return headers;
    });
  };

  _proto.get = function get(path, skipPostResponse) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      _this4.preflightAndHeaders(path).then(function (headers) {
        fetch(_this4._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
          return _this4._json(res).then(resolve);
        }).catch(function (err) {
          err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
          reject(err);
        });
      }).catch(reject);
    });
  };

  _proto.post = function post(path, data, skipPostResponse) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      _this5.preflightAndHeaders(path).then(function (headers) {
        fetch(_this5._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
          return _this5._json(res).then(resolve);
        }).catch(function (err) {
          err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
          reject(err);
        });
      }).catch(reject);
    });
  };

  _proto.delete = function _delete(path, data, skipPostResponse) {
    var _this6 = this;

    return new Promise(function (resolve, reject) {
      _this6.preflightAndHeaders(path).then(function (headers) {
        fetch(_this6.hostname + "/" + path, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
          return _this6._json(res).then(resolve);
        }).catch(function (err) {
          err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
          reject(err);
        });
      }).catch(reject);
    });
  };

  _createClass(RequestClient, [{
    key: "hostname",
    get: function get() {
      var _this$uppy$getState = this.uppy.getState(),
          companion = _this$uppy$getState.companion;

      var host = this.opts.companionUrl;
      return stripSlash(companion && companion[host] ? companion[host] : host);
    }
  }, {
    key: "defaultHeaders",
    get: function get() {
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
      };
    }
  }]);

  return RequestClient;
}(), _class.VERSION = "1.4.2", _temp);

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/Socket.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/Socket.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ee = __webpack_require__(/*! namespace-emitter */ "./node_modules/namespace-emitter/index.js");

module.exports =
/*#__PURE__*/
function () {
  function UppySocket(opts) {
    this.opts = opts;
    this._queued = [];
    this.isOpen = false;
    this.emitter = ee();
    this._handleMessage = this._handleMessage.bind(this);
    this.close = this.close.bind(this);
    this.emit = this.emit.bind(this);
    this.on = this.on.bind(this);
    this.once = this.once.bind(this);
    this.send = this.send.bind(this);

    if (!opts || opts.autoOpen !== false) {
      this.open();
    }
  }

  var _proto = UppySocket.prototype;

  _proto.open = function open() {
    var _this = this;

    this.socket = new WebSocket(this.opts.target);

    this.socket.onopen = function (e) {
      _this.isOpen = true;

      while (_this._queued.length > 0 && _this.isOpen) {
        var first = _this._queued[0];

        _this.send(first.action, first.payload);

        _this._queued = _this._queued.slice(1);
      }
    };

    this.socket.onclose = function (e) {
      _this.isOpen = false;
    };

    this.socket.onmessage = this._handleMessage;
  };

  _proto.close = function close() {
    if (this.socket) {
      this.socket.close();
    }
  };

  _proto.send = function send(action, payload) {
    // attach uuid
    if (!this.isOpen) {
      this._queued.push({
        action: action,
        payload: payload
      });

      return;
    }

    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
  };

  _proto.on = function on(action, handler) {
    this.emitter.on(action, handler);
  };

  _proto.emit = function emit(action, payload) {
    this.emitter.emit(action, payload);
  };

  _proto.once = function once(action, handler) {
    this.emitter.once(action, handler);
  };

  _proto._handleMessage = function _handleMessage(e) {
    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }
  };

  return UppySocket;
}();

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Manages communications with Companion
 */

var RequestClient = __webpack_require__(/*! ./RequestClient */ "./node_modules/@uppy/companion-client/lib/RequestClient.js");

var Provider = __webpack_require__(/*! ./Provider */ "./node_modules/@uppy/companion-client/lib/Provider.js");

var Socket = __webpack_require__(/*! ./Socket */ "./node_modules/@uppy/companion-client/lib/Socket.js");

module.exports = {
  RequestClient: RequestClient,
  Provider: Provider,
  Socket: Socket
};

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/tokenStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/tokenStorage.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module serves as an Async wrapper for LocalStorage
 */

module.exports.setItem = function (key, value) {
  return new Promise(function (resolve) {
    localStorage.setItem(key, value);
    resolve();
  });
};

module.exports.getItem = function (key) {
  return Promise.resolve(localStorage.getItem(key));
};

module.exports.removeItem = function (key) {
  return new Promise(function (resolve) {
    localStorage.removeItem(key);
    resolve();
  });
};

/***/ }),

/***/ "./node_modules/@uppy/core/dist/style.css":
/*!************************************************!*\
  !*** ./node_modules/@uppy/core/dist/style.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/core/dist/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@uppy/core/lib/Plugin.js":
/*!***********************************************!*\
  !*** ./node_modules/@uppy/core/lib/Plugin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var preact = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");

var findDOMElement = __webpack_require__(/*! @uppy/utils/lib/findDOMElement */ "./node_modules/@uppy/utils/lib/findDOMElement.js");
/**
 * Defer a frequent call to the microtask queue.
 */


function debounce(fn) {
  var calling = null;
  var latestArgs = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    latestArgs = args;

    if (!calling) {
      calling = Promise.resolve().then(function () {
        calling = null; // At this point `args` may be different from the most
        // recent state, if multiple calls happened since this task
        // was queued. So we use the `latestArgs`, which definitely
        // is the most recent call.

        return fn.apply(void 0, latestArgs);
      });
    }

    return calling;
  };
}
/**
 * Boilerplate that all Plugins share - and should not be used
 * directly. It also shows which methods final plugins should implement/override,
 * this deciding on structure.
 *
 * @param {object} main Uppy core object
 * @param {object} object with plugin options
 * @returns {Array|string} files or success/fail message
 */


module.exports =
/*#__PURE__*/
function () {
  function Plugin(uppy, opts) {
    this.uppy = uppy;
    this.opts = opts || {};
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
  }

  var _proto = Plugin.prototype;

  _proto.getPluginState = function getPluginState() {
    var _this$uppy$getState = this.uppy.getState(),
        plugins = _this$uppy$getState.plugins;

    return plugins[this.id] || {};
  };

  _proto.setPluginState = function setPluginState(update) {
    var _extends2;

    var _this$uppy$getState2 = this.uppy.getState(),
        plugins = _this$uppy$getState2.plugins;

    this.uppy.setState({
      plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
    });
  };

  _proto.setOptions = function setOptions(newOpts) {
    this.opts = _extends({}, this.opts, {}, newOpts);
    this.setPluginState(); // so that UI re-renders with new options
  };

  _proto.update = function update(state) {
    if (typeof this.el === 'undefined') {
      return;
    }

    if (this._updateUI) {
      this._updateUI(state);
    }
  } // Called after every state update, after everything's mounted. Debounced.
  ;

  _proto.afterUpdate = function afterUpdate() {}
  /**
   * Called when plugin is mounted, whether in DOM or into another plugin.
   * Needed because sometimes plugins are mounted separately/after `install`,
   * so this.el and this.parent might not be available in `install`.
   * This is the case with @uppy/react plugins, for example.
   */
  ;

  _proto.onMount = function onMount() {}
  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   *
   * @param {string|object} target
   *
   */
  ;

  _proto.mount = function mount(target, plugin) {
    var _this = this;

    var callerPluginName = plugin.id;
    var targetElement = findDOMElement(target);

    if (targetElement) {
      this.isTargetDOMEl = true; // API for plugins that require a synchronous rerender.

      this.rerender = function (state) {
        // plugin could be removed, but this.rerender is debounced below,
        // so it could still be called even after uppy.removePlugin or uppy.close
        // hence the check
        if (!_this.uppy.getPlugin(_this.id)) return;
        _this.el = preact.render(_this.render(state), targetElement, _this.el);

        _this.afterUpdate();
      };

      this._updateUI = debounce(this.rerender);
      this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'"); // clear everything inside the target container

      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }

      this.el = preact.render(this.render(this.uppy.getState()), targetElement);
      this.onMount();
      return this.el;
    }

    var targetPlugin;

    if (typeof target === 'object' && target instanceof Plugin) {
      // Targeting a plugin *instance*
      targetPlugin = target;
    } else if (typeof target === 'function') {
      // Targeting a plugin type
      var Target = target; // Find the target plugin instance.

      this.uppy.iteratePlugins(function (plugin) {
        if (plugin instanceof Target) {
          targetPlugin = plugin;
          return false;
        }
      });
    }

    if (targetPlugin) {
      this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
      return this.el;
    }

    this.uppy.log("Not installing " + callerPluginName);
    throw new Error("Invalid target option given to " + callerPluginName + ". Please make sure that the element\n      exists on the page, or that the plugin you are targeting has been installed. Check that the <script> tag initializing Uppy\n      comes at the bottom of the page, before the closing </body> tag (see https://github.com/transloadit/uppy/issues/1042).");
  };

  _proto.render = function render(state) {
    throw new Error('Extend the render method to add your plugin to a DOM element');
  };

  _proto.addTarget = function addTarget(plugin) {
    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
  };

  _proto.unmount = function unmount() {
    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  };

  _proto.install = function install() {};

  _proto.uninstall = function uninstall() {
    this.unmount();
  };

  return Plugin;
}();

/***/ }),

/***/ "./node_modules/@uppy/core/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@uppy/core/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var ee = __webpack_require__(/*! namespace-emitter */ "./node_modules/namespace-emitter/index.js");

var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var prettyBytes = __webpack_require__(/*! @uppy/utils/lib/prettyBytes */ "./node_modules/@uppy/utils/lib/prettyBytes.js");

var match = __webpack_require__(/*! mime-match */ "./node_modules/mime-match/index.js");

var DefaultStore = __webpack_require__(/*! @uppy/store-default */ "./node_modules/@uppy/store-default/lib/index.js");

var getFileType = __webpack_require__(/*! @uppy/utils/lib/getFileType */ "./node_modules/@uppy/utils/lib/getFileType.js");

var getFileNameAndExtension = __webpack_require__(/*! @uppy/utils/lib/getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");

var generateFileID = __webpack_require__(/*! @uppy/utils/lib/generateFileID */ "./node_modules/@uppy/utils/lib/generateFileID.js");

var supportsUploadProgress = __webpack_require__(/*! ./supportsUploadProgress */ "./node_modules/@uppy/core/lib/supportsUploadProgress.js");

var _require = __webpack_require__(/*! ./loggers */ "./node_modules/@uppy/core/lib/loggers.js"),
    justErrorsLogger = _require.justErrorsLogger,
    debugLogger = _require.debugLogger;

var Plugin = __webpack_require__(/*! ./Plugin */ "./node_modules/@uppy/core/lib/Plugin.js"); // Exported from here.


var RestrictionError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(RestrictionError, _Error);

  function RestrictionError() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Error.call.apply(_Error, [this].concat(args)) || this;
    _this.isRestriction = true;
    return _this;
  }

  return RestrictionError;
}(_wrapNativeSuper(Error));
/**
 * Uppy Core module.
 * Manages plugins, state updates, acts as an event bus,
 * adds/removes files and metadata.
 */


var Uppy =
/*#__PURE__*/
function () {
  /**
   * Instantiate Uppy
   *
   * @param {object} opts — Uppy options
   */
  function Uppy(opts) {
    var _this2 = this;

    this.defaultLocale = {
      strings: {
        addBulkFilesFailed: {
          0: 'Failed to add %{smart_count} file due to an internal error',
          1: 'Failed to add %{smart_count} files due to internal errors'
        },
        youCanOnlyUploadX: {
          0: 'You can only upload %{smart_count} file',
          1: 'You can only upload %{smart_count} files',
          2: 'You can only upload %{smart_count} files'
        },
        youHaveToAtLeastSelectX: {
          0: 'You have to select at least %{smart_count} file',
          1: 'You have to select at least %{smart_count} files',
          2: 'You have to select at least %{smart_count} files'
        },
        exceedsSize: 'This file exceeds maximum allowed size of',
        youCanOnlyUploadFileTypes: 'You can only upload: %{types}',
        noNewAlreadyUploading: 'Cannot add new files: already uploading',
        noDuplicates: 'Cannot add the duplicate file \'%{fileName}\', it already exists',
        companionError: 'Connection with Companion failed',
        companionAuthError: 'Authorization required',
        companionUnauthorizeHint: 'To unauthorize to your %{provider} account, please go to %{url}',
        failedToUpload: 'Failed to upload %{file}',
        noInternetConnection: 'No Internet connection',
        connectedToInternet: 'Connected to the Internet',
        // Strings for remote providers
        noFilesFound: 'You have no files or folders here',
        selectX: {
          0: 'Select %{smart_count}',
          1: 'Select %{smart_count}',
          2: 'Select %{smart_count}'
        },
        selectAllFilesFromFolderNamed: 'Select all files from folder %{name}',
        unselectAllFilesFromFolderNamed: 'Unselect all files from folder %{name}',
        selectFileNamed: 'Select file %{name}',
        unselectFileNamed: 'Unselect file %{name}',
        openFolderNamed: 'Open folder %{name}',
        cancel: 'Cancel',
        logOut: 'Log out',
        filter: 'Filter',
        resetFilter: 'Reset filter',
        loading: 'Loading...',
        authenticateWithTitle: 'Please authenticate with %{pluginName} to select files',
        authenticateWith: 'Connect to %{pluginName}',
        emptyFolderAdded: 'No files were added from empty folder',
        folderAdded: {
          0: 'Added %{smart_count} file from %{folder}',
          1: 'Added %{smart_count} files from %{folder}',
          2: 'Added %{smart_count} files from %{folder}'
        }
      }
    };
    var defaultOptions = {
      id: 'uppy',
      autoProceed: false,
      allowMultipleUploads: true,
      debug: false,
      restrictions: {
        maxFileSize: null,
        maxNumberOfFiles: null,
        minNumberOfFiles: null,
        allowedFileTypes: null
      },
      meta: {},
      onBeforeFileAdded: function onBeforeFileAdded(currentFile, files) {
        return currentFile;
      },
      onBeforeUpload: function onBeforeUpload(files) {
        return files;
      },
      store: DefaultStore(),
      logger: justErrorsLogger
    }; // Merge default options with the ones set by user,
    // making sure to merge restrictions too

    this.opts = _extends({}, defaultOptions, {}, opts, {
      restrictions: _extends({}, defaultOptions.restrictions, {}, opts && opts.restrictions)
    }); // Support debug: true for backwards-compatability, unless logger is set in opts
    // opts instead of this.opts to avoid comparing objects — we set logger: justErrorsLogger in defaultOptions

    if (opts && opts.logger && opts.debug) {
      this.log('You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.', 'warning');
    } else if (opts && opts.debug) {
      this.opts.logger = debugLogger;
    }

    this.log("Using Core v" + this.constructor.VERSION);

    if (this.opts.restrictions.allowedFileTypes && this.opts.restrictions.allowedFileTypes !== null && !Array.isArray(this.opts.restrictions.allowedFileTypes)) {
      throw new TypeError('`restrictions.allowedFileTypes` must be an array');
    }

    this.i18nInit(); // Container for different types of plugins

    this.plugins = {};
    this.getState = this.getState.bind(this);
    this.getPlugin = this.getPlugin.bind(this);
    this.setFileMeta = this.setFileMeta.bind(this);
    this.setFileState = this.setFileState.bind(this);
    this.log = this.log.bind(this);
    this.info = this.info.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.addFile = this.addFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.pauseResume = this.pauseResume.bind(this); // ___Why throttle at 500ms?
    //    - We must throttle at >250ms for superfocus in Dashboard to work well (because animation takes 0.25s, and we want to wait for all animations to be over before refocusing).
    //    [Practical Check]: if thottle is at 100ms, then if you are uploading a file, and click 'ADD MORE FILES', - focus won't activate in Firefox.
    //    - We must throttle at around >500ms to avoid performance lags.
    //    [Practical Check] Firefox, try to upload a big file for a prolonged period of time. Laptop will start to heat up.

    this._calculateProgress = throttle(this._calculateProgress.bind(this), 500, {
      leading: true,
      trailing: true
    });
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
    this.resetProgress = this.resetProgress.bind(this);
    this.pauseAll = this.pauseAll.bind(this);
    this.resumeAll = this.resumeAll.bind(this);
    this.retryAll = this.retryAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);
    this.retryUpload = this.retryUpload.bind(this);
    this.upload = this.upload.bind(this);
    this.emitter = ee();
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.once = this.emitter.once.bind(this.emitter);
    this.emit = this.emitter.emit.bind(this.emitter);
    this.preProcessors = [];
    this.uploaders = [];
    this.postProcessors = [];
    this.store = this.opts.store;
    this.setState({
      plugins: {},
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      capabilities: {
        uploadProgress: supportsUploadProgress(),
        individualCancellation: true,
        resumableUploads: false
      },
      totalProgress: 0,
      meta: _extends({}, this.opts.meta),
      info: {
        isHidden: true,
        type: 'info',
        message: ''
      }
    });
    this._storeUnsubscribe = this.store.subscribe(function (prevState, nextState, patch) {
      _this2.emit('state-update', prevState, nextState, patch);

      _this2.updateAll(nextState);
    }); // Exposing uppy object on window for debugging and testing

    if (this.opts.debug && typeof window !== 'undefined') {
      window[this.opts.id] = this;
    }

    this._addListeners();
  }

  var _proto = Uppy.prototype;

  _proto.on = function on(event, callback) {
    this.emitter.on(event, callback);
    return this;
  };

  _proto.off = function off(event, callback) {
    this.emitter.off(event, callback);
    return this;
  }
  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */
  ;

  _proto.updateAll = function updateAll(state) {
    this.iteratePlugins(function (plugin) {
      plugin.update(state);
    });
  }
  /**
   * Updates state with a patch
   *
   * @param {object} patch {foo: 'bar'}
   */
  ;

  _proto.setState = function setState(patch) {
    this.store.setState(patch);
  }
  /**
   * Returns current state.
   *
   * @returns {object}
   */
  ;

  _proto.getState = function getState() {
    return this.store.getState();
  }
  /**
   * Back compat for when uppy.state is used instead of uppy.getState().
   */
  ;

  /**
   * Shorthand to set state for a specific file.
   */
  _proto.setFileState = function setFileState(fileID, state) {
    var _extends2;

    if (!this.getState().files[fileID]) {
      throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
    }

    this.setState({
      files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
    });
  };

  _proto.i18nInit = function i18nInit() {
    this.translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
  };

  _proto.setOptions = function setOptions(newOpts) {
    this.opts = _extends({}, this.opts, {}, newOpts, {
      restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
    });

    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }

    this.i18nInit();

    if (newOpts.locale) {
      this.iteratePlugins(function (plugin) {
        plugin.setOptions();
      });
    }

    this.setState(); // so that UI re-renders with new options
  };

  _proto.resetProgress = function resetProgress() {
    var defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };

    var files = _extends({}, this.getState().files);

    var updatedFiles = {};
    Object.keys(files).forEach(function (fileID) {
      var updatedFile = _extends({}, files[fileID]);

      updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
    });
    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });
    this.emit('reset-progress');
  };

  _proto.addPreProcessor = function addPreProcessor(fn) {
    this.preProcessors.push(fn);
  };

  _proto.removePreProcessor = function removePreProcessor(fn) {
    var i = this.preProcessors.indexOf(fn);

    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }
  };

  _proto.addPostProcessor = function addPostProcessor(fn) {
    this.postProcessors.push(fn);
  };

  _proto.removePostProcessor = function removePostProcessor(fn) {
    var i = this.postProcessors.indexOf(fn);

    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }
  };

  _proto.addUploader = function addUploader(fn) {
    this.uploaders.push(fn);
  };

  _proto.removeUploader = function removeUploader(fn) {
    var i = this.uploaders.indexOf(fn);

    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }
  };

  _proto.setMeta = function setMeta(data) {
    var updatedMeta = _extends({}, this.getState().meta, data);

    var updatedFiles = _extends({}, this.getState().files);

    Object.keys(updatedFiles).forEach(function (fileID) {
      updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
        meta: _extends({}, updatedFiles[fileID].meta, data)
      });
    });
    this.log('Adding metadata:');
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
  };

  _proto.setFileMeta = function setFileMeta(fileID, data) {
    var updatedFiles = _extends({}, this.getState().files);

    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that has been removed: ', fileID);
      return;
    }

    var newMeta = _extends({}, updatedFiles[fileID].meta, data);

    updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({
      files: updatedFiles
    });
  }
  /**
   * Get a file object.
   *
   * @param {string} fileID The ID of the file object to return.
   */
  ;

  _proto.getFile = function getFile(fileID) {
    return this.getState().files[fileID];
  }
  /**
   * Get all files in an array.
   */
  ;

  _proto.getFiles = function getFiles() {
    var _this$getState = this.getState(),
        files = _this$getState.files;

    return Object.keys(files).map(function (fileID) {
      return files[fileID];
    });
  }
  /**
   * Check if minNumberOfFiles restriction is reached before uploading.
   *
   * @private
   */
  ;

  _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
    var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;

    if (Object.keys(files).length < minNumberOfFiles) {
      throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
        smart_count: minNumberOfFiles
      }));
    }
  }
  /**
   * Check if file passes a set of restrictions set in options: maxFileSize,
   * maxNumberOfFiles and allowedFileTypes.
   *
   * @param {object} files Object of IDs → files already added
   * @param {object} file object to check
   * @private
   */
  ;

  _proto._checkRestrictions = function _checkRestrictions(files, file) {
    var _this$opts$restrictio = this.opts.restrictions,
        maxFileSize = _this$opts$restrictio.maxFileSize,
        maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles,
        allowedFileTypes = _this$opts$restrictio.allowedFileTypes;

    if (maxNumberOfFiles) {
      if (Object.keys(files).length + 1 > maxNumberOfFiles) {
        throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
          smart_count: maxNumberOfFiles
        }));
      }
    }

    if (allowedFileTypes) {
      var isCorrectFileType = allowedFileTypes.some(function (type) {
        // is this is a mime-type
        if (type.indexOf('/') > -1) {
          if (!file.type) return false;
          return match(file.type.replace(/;.*?$/, ''), type);
        } // otherwise this is likely an extension


        if (type[0] === '.') {
          return file.extension.toLowerCase() === type.substr(1).toLowerCase();
        }

        return false;
      });

      if (!isCorrectFileType) {
        var allowedFileTypesString = allowedFileTypes.join(', ');
        throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
          types: allowedFileTypesString
        }));
      }
    } // We can't check maxFileSize if the size is unknown.


    if (maxFileSize && file.data.size != null) {
      if (file.data.size > maxFileSize) {
        throw new RestrictionError(this.i18n('exceedsSize') + " " + prettyBytes(maxFileSize));
      }
    }
  }
  /**
   * Logs an error, sets Informer message, then throws the error.
   * Emits a 'restriction-failed' event if it’s a restriction error
   *
   * @param {object | string} err — Error object or plain string message
   * @param {object} [options]
   * @param {boolean} [options.showInformer=true] — Sometimes developer might want to show Informer manually
   * @param {object} [options.file=null] — File object used to emit the restriction error
   * @param {boolean} [options.throwErr=true] — Errors shouldn’t be thrown, for example, in `upload-error` event
   * @private
   */
  ;

  _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$showInformer = _ref.showInformer,
        showInformer = _ref$showInformer === void 0 ? true : _ref$showInformer,
        _ref$file = _ref.file,
        file = _ref$file === void 0 ? null : _ref$file,
        _ref$throwErr = _ref.throwErr,
        throwErr = _ref$throwErr === void 0 ? true : _ref$throwErr;

    var message = typeof err === 'object' ? err.message : err;
    var details = typeof err === 'object' && err.details ? err.details : ''; // Restriction errors should be logged, but not as errors,
    // as they are expected and shown in the UI.

    var logMessageWithDetails = message;

    if (details) {
      logMessageWithDetails += ' ' + details;
    }

    if (err.isRestriction) {
      this.log(logMessageWithDetails);
      this.emit('restriction-failed', file, err);
    } else {
      this.log(logMessageWithDetails, 'error');
    } // Sometimes informer has to be shown manually by the developer,
    // for example, in `onBeforeFileAdded`.


    if (showInformer) {
      this.info({
        message: message,
        details: details
      }, 'error', 5000);
    }

    if (throwErr) {
      throw typeof err === 'object' ? err : new Error(err);
    }
  };

  _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
    var _this$getState2 = this.getState(),
        allowNewUpload = _this$getState2.allowNewUpload;

    if (allowNewUpload === false) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
        file: file
      });
    }
  }
  /**
   * Create a file state object based on user-provided `addFile()` options.
   *
   * Note this is extremely side-effectful and should only be done when a file state object will be added to state immediately afterward!
   *
   * The `files` value is passed in because it may be updated by the caller without updating the store.
   */
  ;

  _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
    var fileType = getFileType(file);
    file.type = fileType;
    var onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);

    if (onBeforeFileAddedResult === false) {
      // Don’t show UI info for this error, as it should be done by the developer
      this._showOrLogErrorAndThrow(new RestrictionError('Cannot add the file because onBeforeFileAdded returned false.'), {
        showInformer: false,
        file: file
      });
    }

    if (typeof onBeforeFileAddedResult === 'object' && onBeforeFileAddedResult) {
      file = onBeforeFileAddedResult;
    }

    var fileName;

    if (file.name) {
      fileName = file.name;
    } else if (fileType.split('/')[0] === 'image') {
      fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
    } else {
      fileName = 'noname';
    }

    var fileExtension = getFileNameAndExtension(fileName).extension;
    var isRemote = file.isRemote || false;
    var fileID = generateFileID(file);

    if (files[fileID]) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noDuplicates', {
        fileName: fileName
      })), {
        file: file
      });
    }

    var meta = file.meta || {};
    meta.name = fileName;
    meta.type = fileType; // `null` means the size is unknown.

    var size = isFinite(file.data.size) ? file.data.size : null;
    var newFile = {
      source: file.source || '',
      id: fileID,
      name: fileName,
      extension: fileExtension || '',
      meta: _extends({}, this.getState().meta, {}, meta),
      type: fileType,
      data: file.data,
      progress: {
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: size,
        uploadComplete: false,
        uploadStarted: null
      },
      size: size,
      isRemote: isRemote,
      remote: file.remote || '',
      preview: file.preview
    };

    try {
      this._checkRestrictions(files, newFile);
    } catch (err) {
      this._showOrLogErrorAndThrow(err, {
        file: newFile
      });
    }

    return newFile;
  } // Schedule an upload if `autoProceed` is enabled.
  ;

  _proto._startIfAutoProceed = function _startIfAutoProceed() {
    var _this3 = this;

    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(function () {
        _this3.scheduledAutoProceed = null;

        _this3.upload().catch(function (err) {
          if (!err.isRestriction) {
            _this3.log(err.stack || err.message || err);
          }
        });
      }, 4);
    }
  }
  /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   *
   * @param {object} file object to add
   * @returns {string} id for the added file
   */
  ;

  _proto.addFile = function addFile(file) {
    var _extends3;

    this._assertNewUploadAllowed(file);

    var _this$getState3 = this.getState(),
        files = _this$getState3.files;

    var newFile = this._checkAndCreateFileStateObject(files, file);

    this.setState({
      files: _extends({}, files, (_extends3 = {}, _extends3[newFile.id] = newFile, _extends3))
    });
    this.emit('file-added', newFile);
    this.log("Added file: " + newFile.name + ", " + newFile.id + ", mime type: " + newFile.type);

    this._startIfAutoProceed();

    return newFile.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * This cuts some corners for performance, so should typically only be used in cases where there may be a lot of files.
   *
   * If an error occurs while adding a file, it is logged and the user is notified. This is good for UI plugins, but not for programmatic use. Programmatic users should usually still use `addFile()` on individual files.
   */
  ;

  _proto.addFiles = function addFiles(fileDescriptors) {
    var _this4 = this;

    this._assertNewUploadAllowed(); // create a copy of the files object only once


    var files = _extends({}, this.getState().files);

    var newFiles = [];
    var errors = [];

    for (var i = 0; i < fileDescriptors.length; i++) {
      try {
        var newFile = this._checkAndCreateFileStateObject(files, fileDescriptors[i]);

        newFiles.push(newFile);
        files[newFile.id] = newFile;
      } catch (err) {
        if (!err.isRestriction) {
          errors.push(err);
        }
      }
    }

    this.setState({
      files: files
    });
    newFiles.forEach(function (newFile) {
      _this4.emit('file-added', newFile);
    });

    if (newFiles.length > 5) {
      this.log("Added batch of " + newFiles.length + " files");
    } else {
      Object.keys(newFiles).forEach(function (fileID) {
        _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);
      });
    }

    this._startIfAutoProceed();

    if (errors.length > 0) {
      var message = 'Multiple errors occurred while adding files:\n';
      errors.forEach(function (subError) {
        message += "\n * " + subError.message;
      });
      this.info({
        message: this.i18n('addBulkFilesFailed', {
          smart_count: errors.length
        }),
        details: message
      }, 'error', 5000);
      var err = new Error(message);
      err.errors = errors;
      throw err;
    }
  };

  _proto.removeFiles = function removeFiles(fileIDs) {
    var _this5 = this;

    var _this$getState4 = this.getState(),
        files = _this$getState4.files,
        currentUploads = _this$getState4.currentUploads;

    var updatedFiles = _extends({}, files);

    var updatedUploads = _extends({}, currentUploads);

    var removedFiles = Object.create(null);
    fileIDs.forEach(function (fileID) {
      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
    }); // Remove files from the `fileIDs` list in each upload.

    function fileIsNotRemoved(uploadFileID) {
      return removedFiles[uploadFileID] === undefined;
    }

    var uploadsToRemove = [];
    Object.keys(updatedUploads).forEach(function (uploadID) {
      var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved); // Remove the upload if no files are associated with it anymore.

      if (newFileIDs.length === 0) {
        uploadsToRemove.push(uploadID);
        return;
      }

      updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
        fileIDs: newFileIDs
      });
    });
    uploadsToRemove.forEach(function (uploadID) {
      delete updatedUploads[uploadID];
    });
    var stateUpdate = {
      currentUploads: updatedUploads,
      files: updatedFiles
    }; // If all files were removed - allow new uploads!

    if (Object.keys(updatedFiles).length === 0) {
      stateUpdate.allowNewUpload = true;
      stateUpdate.error = null;
    }

    this.setState(stateUpdate);

    this._calculateTotalProgress();

    var removedFileIDs = Object.keys(removedFiles);
    removedFileIDs.forEach(function (fileID) {
      _this5.emit('file-removed', removedFiles[fileID]);
    });

    if (removedFileIDs.length > 5) {
      this.log("Removed " + removedFileIDs.length + " files");
    } else {
      this.log("Removed files: " + removedFileIDs.join(', '));
    }
  };

  _proto.removeFile = function removeFile(fileID) {
    this.removeFiles([fileID]);
  };

  _proto.pauseResume = function pauseResume(fileID) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
      return;
    }

    var wasPaused = this.getFile(fileID).isPaused || false;
    var isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused: isPaused
    });
    this.emit('upload-pause', fileID, isPaused);
    return isPaused;
  };

  _proto.pauseAll = function pauseAll() {
    var updatedFiles = _extends({}, this.getState().files);

    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: true
      });

      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit('pause-all');
  };

  _proto.resumeAll = function resumeAll() {
    var updatedFiles = _extends({}, this.getState().files);

    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });

      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit('resume-all');
  };

  _proto.retryAll = function retryAll() {
    var updatedFiles = _extends({}, this.getState().files);

    var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
      return updatedFiles[file].error;
    });
    filesToRetry.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });

      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit('retry-all', filesToRetry);

    var uploadID = this._createUpload(filesToRetry, {
      forceAllowNewUpload: true // create new upload even if allowNewUpload: false

    });

    return this._runUpload(uploadID);
  };

  _proto.cancelAll = function cancelAll() {
    this.emit('cancel-all');

    var _this$getState5 = this.getState(),
        files = _this$getState5.files;

    var fileIDs = Object.keys(files);

    if (fileIDs.length) {
      this.removeFiles(fileIDs);
    }

    this.setState({
      totalProgress: 0,
      error: null
    });
  };

  _proto.retryUpload = function retryUpload(fileID) {
    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit('upload-retry', fileID);

    var uploadID = this._createUpload([fileID], {
      forceAllowNewUpload: true // create new upload even if allowNewUpload: false

    });

    return this._runUpload(uploadID);
  };

  _proto.reset = function reset() {
    this.cancelAll();
  };

  _proto._calculateProgress = function _calculateProgress(file, data) {
    if (!this.getFile(file.id)) {
      this.log("Not setting progress for a file that has been removed: " + file.id);
      return;
    } // bytesTotal may be null or zero; in that case we can't divide by it


    var canHavePercentage = isFinite(data.bytesTotal) && data.bytesTotal > 0;
    this.setFileState(file.id, {
      progress: _extends({}, this.getFile(file.id).progress, {
        bytesUploaded: data.bytesUploaded,
        bytesTotal: data.bytesTotal,
        percentage: canHavePercentage // TODO(goto-bus-stop) flooring this should probably be the choice of the UI?
        // we get more accurate calculations if we don't round this at all.
        ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
      })
    });

    this._calculateTotalProgress();
  };

  _proto._calculateTotalProgress = function _calculateTotalProgress() {
    // calculate total progress, using the number of files currently uploading,
    // multiplied by 100 and the summ of individual progress of each file
    var files = this.getFiles();
    var inProgress = files.filter(function (file) {
      return file.progress.uploadStarted;
    });

    if (inProgress.length === 0) {
      this.emit('progress', 0);
      this.setState({
        totalProgress: 0
      });
      return;
    }

    var sizedFiles = inProgress.filter(function (file) {
      return file.progress.bytesTotal != null;
    });
    var unsizedFiles = inProgress.filter(function (file) {
      return file.progress.bytesTotal == null;
    });

    if (sizedFiles.length === 0) {
      var progressMax = inProgress.length * 100;
      var currentProgress = unsizedFiles.reduce(function (acc, file) {
        return acc + file.progress.percentage;
      }, 0);

      var _totalProgress = Math.round(currentProgress / progressMax * 100);

      this.setState({
        totalProgress: _totalProgress
      });
      return;
    }

    var totalSize = sizedFiles.reduce(function (acc, file) {
      return acc + file.progress.bytesTotal;
    }, 0);
    var averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    var uploadedSize = 0;
    sizedFiles.forEach(function (file) {
      uploadedSize += file.progress.bytesUploaded;
    });
    unsizedFiles.forEach(function (file) {
      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
    });
    var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100); // hot fix, because:
    // uploadedSize ended up larger than totalSize, resulting in 1325% total

    if (totalProgress > 100) {
      totalProgress = 100;
    }

    this.setState({
      totalProgress: totalProgress
    });
    this.emit('progress', totalProgress);
  }
  /**
   * Registers listeners for all global actions, like:
   * `error`, `file-removed`, `upload-progress`
   */
  ;

  _proto._addListeners = function _addListeners() {
    var _this6 = this;

    this.on('error', function (error) {
      var errorMsg = 'Unknown error';

      if (error.message) {
        errorMsg = error.message;
      }

      if (error.details) {
        errorMsg += ' ' + error.details;
      }

      _this6.setState({
        error: errorMsg
      });
    });
    this.on('upload-error', function (file, error, response) {
      var errorMsg = 'Unknown error';

      if (error.message) {
        errorMsg = error.message;
      }

      if (error.details) {
        errorMsg += ' ' + error.details;
      }

      _this6.setFileState(file.id, {
        error: errorMsg,
        response: response
      });

      _this6.setState({
        error: error.message
      });

      if (typeof error === 'object' && error.message) {
        var newError = new Error(error.message);
        newError.details = error.message;

        if (error.details) {
          newError.details += ' ' + error.details;
        }

        newError.message = _this6.i18n('failedToUpload', {
          file: file.name
        });

        _this6._showOrLogErrorAndThrow(newError, {
          throwErr: false
        });
      } else {
        _this6._showOrLogErrorAndThrow(error, {
          throwErr: false
        });
      }
    });
    this.on('upload', function () {
      _this6.setState({
        error: null
      });
    });
    this.on('upload-started', function (file, upload) {
      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        return;
      }

      _this6.setFileState(file.id, {
        progress: {
          uploadStarted: Date.now(),
          uploadComplete: false,
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: file.size
        }
      });
    });
    this.on('upload-progress', this._calculateProgress);
    this.on('upload-success', function (file, uploadResp) {
      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        return;
      }

      var currentProgress = _this6.getFile(file.id).progress;

      _this6.setFileState(file.id, {
        progress: _extends({}, currentProgress, {
          uploadComplete: true,
          percentage: 100,
          bytesUploaded: currentProgress.bytesTotal
        }),
        response: uploadResp,
        uploadURL: uploadResp.uploadURL,
        isPaused: false
      });

      _this6._calculateTotalProgress();
    });
    this.on('preprocess-progress', function (file, progress) {
      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        return;
      }

      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getFile(file.id).progress, {
          preprocess: progress
        })
      });
    });
    this.on('preprocess-complete', function (file) {
      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        return;
      }

      var files = _extends({}, _this6.getState().files);

      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.preprocess;

      _this6.setState({
        files: files
      });
    });
    this.on('postprocess-progress', function (file, progress) {
      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        return;
      }

      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getState().files[file.id].progress, {
          postprocess: progress
        })
      });
    });
    this.on('postprocess-complete', function (file) {
      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        return;
      }

      var files = _extends({}, _this6.getState().files);

      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.postprocess; // TODO should we set some kind of `fullyComplete` property on the file object
      // so it's easier to see that the file is upload…fully complete…rather than
      // what we have to do now (`uploadComplete && !postprocess`)

      _this6.setState({
        files: files
      });
    });
    this.on('restored', function () {
      // Files may have changed--ensure progress is still accurate.
      _this6._calculateTotalProgress();
    }); // show informer if offline

    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', function () {
        return _this6.updateOnlineStatus();
      });
      window.addEventListener('offline', function () {
        return _this6.updateOnlineStatus();
      });
      setTimeout(function () {
        return _this6.updateOnlineStatus();
      }, 3000);
    }
  };

  _proto.updateOnlineStatus = function updateOnlineStatus() {
    var online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;

    if (!online) {
      this.emit('is-offline');
      this.info(this.i18n('noInternetConnection'), 'error', 0);
      this.wasOffline = true;
    } else {
      this.emit('is-online');

      if (this.wasOffline) {
        this.emit('back-online');
        this.info(this.i18n('connectedToInternet'), 'success', 3000);
        this.wasOffline = false;
      }
    }
  };

  _proto.getID = function getID() {
    return this.opts.id;
  }
  /**
   * Registers a plugin with Core.
   *
   * @param {object} Plugin object
   * @param {object} [opts] object with options to be passed to Plugin
   * @returns {object} self for chaining
   */
  ;

  _proto.use = function use(Plugin, opts) {
    if (typeof Plugin !== 'function') {
      var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
      throw new TypeError(msg);
    } // Instantiate


    var plugin = new Plugin(this, opts);
    var pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];

    if (!pluginId) {
      throw new Error('Your plugin must have an id');
    }

    if (!plugin.type) {
      throw new Error('Your plugin must have a type');
    }

    var existsPluginAlready = this.getPlugin(pluginId);

    if (existsPluginAlready) {
      var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';

      throw new Error(_msg);
    }

    if (Plugin.VERSION) {
      this.log("Using " + pluginId + " v" + Plugin.VERSION);
    }

    this.plugins[plugin.type].push(plugin);
    plugin.install();
    return this;
  }
  /**
   * Find one Plugin by name.
   *
   * @param {string} id plugin id
   * @returns {object|boolean}
   */
  ;

  _proto.getPlugin = function getPlugin(id) {
    var foundPlugin = null;
    this.iteratePlugins(function (plugin) {
      if (plugin.id === id) {
        foundPlugin = plugin;
        return false;
      }
    });
    return foundPlugin;
  }
  /**
   * Iterate through all `use`d plugins.
   *
   * @param {Function} method that will be run on each plugin
   */
  ;

  _proto.iteratePlugins = function iteratePlugins(method) {
    var _this7 = this;

    Object.keys(this.plugins).forEach(function (pluginType) {
      _this7.plugins[pluginType].forEach(method);
    });
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  ;

  _proto.removePlugin = function removePlugin(instance) {
    this.log("Removing plugin " + instance.id);
    this.emit('plugin-remove', instance);

    if (instance.uninstall) {
      instance.uninstall();
    }

    var list = this.plugins[instance.type].slice();
    var index = list.indexOf(instance);

    if (index !== -1) {
      list.splice(index, 1);
      this.plugins[instance.type] = list;
    }

    var updatedState = this.getState();
    delete updatedState.plugins[instance.id];
    this.setState(updatedState);
  }
  /**
   * Uninstall all plugins and close down this Uppy instance.
   */
  ;

  _proto.close = function close() {
    var _this8 = this;

    this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
    this.reset();

    this._storeUnsubscribe();

    this.iteratePlugins(function (plugin) {
      _this8.removePlugin(plugin);
    });
  }
  /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   *
   * @param {string | object} message Message to be displayed by the informer
   * @param {string} [type]
   * @param {number} [duration]
   */
  ;

  _proto.info = function info(message, type, duration) {
    if (type === void 0) {
      type = 'info';
    }

    if (duration === void 0) {
      duration = 3000;
    }

    var isComplexMessage = typeof message === 'object';
    this.setState({
      info: {
        isHidden: false,
        type: type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }
    });
    this.emit('info-visible');
    clearTimeout(this.infoTimeoutID);

    if (duration === 0) {
      this.infoTimeoutID = undefined;
      return;
    } // hide the informer after `duration` milliseconds


    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
  };

  _proto.hideInfo = function hideInfo() {
    var newInfo = _extends({}, this.getState().info, {
      isHidden: true
    });

    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
  }
  /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   *
   * @param {string|object} message to log
   * @param {string} [type] optional `error` or `warning`
   */
  ;

  _proto.log = function log(message, type) {
    var logger = this.opts.logger;

    switch (type) {
      case 'error':
        logger.error(message);
        break;

      case 'warning':
        logger.warn(message);
        break;

      default:
        logger.debug(message);
        break;
    }
  }
  /**
   * Obsolete, event listeners are now added in the constructor.
   */
  ;

  _proto.run = function run() {
    this.log('Calling run() is no longer necessary.', 'warning');
    return this;
  }
  /**
   * Restore an upload by its ID.
   */
  ;

  _proto.restore = function restore(uploadID) {
    this.log("Core: attempting to restore upload \"" + uploadID + "\"");

    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);

      return Promise.reject(new Error('Nonexistent upload'));
    }

    return this._runUpload(uploadID);
  }
  /**
   * Create an upload for a bunch of files.
   *
   * @param {Array<string>} fileIDs File IDs to include in this upload.
   * @returns {string} ID of this upload.
   */
  ;

  _proto._createUpload = function _createUpload(fileIDs, opts) {
    var _extends4;

    if (opts === void 0) {
      opts = {};
    }

    var _opts = opts,
        _opts$forceAllowNewUp = _opts.forceAllowNewUpload,
        forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;

    var _this$getState6 = this.getState(),
        allowNewUpload = _this$getState6.allowNewUpload,
        currentUploads = _this$getState6.currentUploads;

    if (!allowNewUpload && !forceAllowNewUpload) {
      throw new Error('Cannot create a new upload: already uploading.');
    }

    var uploadID = cuid();
    this.emit('upload', {
      id: uploadID,
      fileIDs: fileIDs
    });
    this.setState({
      allowNewUpload: this.opts.allowMultipleUploads !== false,
      currentUploads: _extends({}, currentUploads, (_extends4 = {}, _extends4[uploadID] = {
        fileIDs: fileIDs,
        step: 0,
        result: {}
      }, _extends4))
    });
    return uploadID;
  };

  _proto._getUpload = function _getUpload(uploadID) {
    var _this$getState7 = this.getState(),
        currentUploads = _this$getState7.currentUploads;

    return currentUploads[uploadID];
  }
  /**
   * Add data to an upload's result object.
   *
   * @param {string} uploadID The ID of the upload.
   * @param {object} data Data properties to add to the result object.
   */
  ;

  _proto.addResultData = function addResultData(uploadID, data) {
    var _extends5;

    if (!this._getUpload(uploadID)) {
      this.log("Not setting result for an upload that has been removed: " + uploadID);
      return;
    }

    var currentUploads = this.getState().currentUploads;

    var currentUpload = _extends({}, currentUploads[uploadID], {
      result: _extends({}, currentUploads[uploadID].result, data)
    });

    this.setState({
      currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
    });
  }
  /**
   * Remove an upload, eg. if it has been canceled or completed.
   *
   * @param {string} uploadID The ID of the upload.
   */
  ;

  _proto._removeUpload = function _removeUpload(uploadID) {
    var currentUploads = _extends({}, this.getState().currentUploads);

    delete currentUploads[uploadID];
    this.setState({
      currentUploads: currentUploads
    });
  }
  /**
   * Run an upload. This picks up where it left off in case the upload is being restored.
   *
   * @private
   */
  ;

  _proto._runUpload = function _runUpload(uploadID) {
    var _this9 = this;

    var uploadData = this.getState().currentUploads[uploadID];
    var restoreStep = uploadData.step;
    var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
    var lastStep = Promise.resolve();
    steps.forEach(function (fn, step) {
      // Skip this step if we are restoring and have already completed this step before.
      if (step < restoreStep) {
        return;
      }

      lastStep = lastStep.then(function () {
        var _extends6;

        var _this9$getState = _this9.getState(),
            currentUploads = _this9$getState.currentUploads;

        var currentUpload = currentUploads[uploadID];

        if (!currentUpload) {
          return;
        }

        var updatedUpload = _extends({}, currentUpload, {
          step: step
        });

        _this9.setState({
          currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
        }); // TODO give this the `updatedUpload` object as its only parameter maybe?
        // Otherwise when more metadata may be added to the upload this would keep getting more parameters


        return fn(updatedUpload.fileIDs, uploadID);
      }).then(function (result) {
        return null;
      });
    }); // Not returning the `catch`ed promise, because we still want to return a rejected
    // promise from this method if the upload failed.

    lastStep.catch(function (err) {
      _this9.emit('error', err, uploadID);

      _this9._removeUpload(uploadID);
    });
    return lastStep.then(function () {
      // Set result data.
      var _this9$getState2 = _this9.getState(),
          currentUploads = _this9$getState2.currentUploads;

      var currentUpload = currentUploads[uploadID];

      if (!currentUpload) {
        return;
      }

      var files = currentUpload.fileIDs.map(function (fileID) {
        return _this9.getFile(fileID);
      });
      var successful = files.filter(function (file) {
        return !file.error;
      });
      var failed = files.filter(function (file) {
        return file.error;
      });

      _this9.addResultData(uploadID, {
        successful: successful,
        failed: failed,
        uploadID: uploadID
      });
    }).then(function () {
      // Emit completion events.
      // This is in a separate function so that the `currentUploads` variable
      // always refers to the latest state. In the handler right above it refers
      // to an outdated object without the `.result` property.
      var _this9$getState3 = _this9.getState(),
          currentUploads = _this9$getState3.currentUploads;

      if (!currentUploads[uploadID]) {
        return;
      }

      var currentUpload = currentUploads[uploadID];
      var result = currentUpload.result;

      _this9.emit('complete', result);

      _this9._removeUpload(uploadID);

      return result;
    }).then(function (result) {
      if (result == null) {
        _this9.log("Not setting result for an upload that has been removed: " + uploadID);
      }

      return result;
    });
  }
  /**
   * Start an upload for all the files that are not currently being uploaded.
   *
   * @returns {Promise}
   */
  ;

  _proto.upload = function upload() {
    var _this10 = this;

    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }

    var files = this.getState().files;
    var onBeforeUploadResult = this.opts.onBeforeUpload(files);

    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }

    if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
      files = onBeforeUploadResult; // Updating files in state, because uploader plugins receive file IDs,
      // and then fetch the actual file object from state

      this.setState({
        files: files
      });
    }

    return Promise.resolve().then(function () {
      return _this10._checkMinNumberOfFiles(files);
    }).then(function () {
      var _this10$getState = _this10.getState(),
          currentUploads = _this10$getState.currentUploads; // get a list of files that are currently assigned to uploads


      var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
        return prev.concat(currentUploads[curr].fileIDs);
      }, []);
      var waitingFileIDs = [];
      Object.keys(files).forEach(function (fileID) {
        var file = _this10.getFile(fileID); // if the file hasn't started uploading and hasn't already been assigned to an upload..


        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
      });

      var uploadID = _this10._createUpload(waitingFileIDs);

      return _this10._runUpload(uploadID);
    }).catch(function (err) {
      _this10._showOrLogErrorAndThrow(err);
    });
  };

  _createClass(Uppy, [{
    key: "state",
    get: function get() {
      return this.getState();
    }
  }]);

  return Uppy;
}();

Uppy.VERSION = "1.8.2";

module.exports = function (opts) {
  return new Uppy(opts);
}; // Expose class constructor.


module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;
module.exports.debugLogger = debugLogger;

/***/ }),

/***/ "./node_modules/@uppy/core/lib/loggers.js":
/*!************************************************!*\
  !*** ./node_modules/@uppy/core/lib/loggers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTimeStamp = __webpack_require__(/*! @uppy/utils/lib/getTimeStamp */ "./node_modules/@uppy/utils/lib/getTimeStamp.js"); // Swallow all logs, except errors.
// default if logger is not set or debug: false


var justErrorsLogger = {
  debug: function debug() {},
  warn: function warn() {},
  error: function error() {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_console = console).error.apply(_console, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
  }
}; // Print logs to console with namespace + timestamp,
// set by logger: Uppy.debugLogger or debug: true

var debugLogger = {
  debug: function debug() {
    // IE 10 doesn’t support console.debug
    var debug = console.debug || console.log;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    debug.call.apply(debug, [console, "[Uppy] [" + getTimeStamp() + "]"].concat(args));
  },
  warn: function warn() {
    var _console2;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (_console2 = console).warn.apply(_console2, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
  },
  error: function error() {
    var _console3;

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return (_console3 = console).error.apply(_console3, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
  }
};
module.exports = {
  justErrorsLogger: justErrorsLogger,
  debugLogger: debugLogger
};

/***/ }),

/***/ "./node_modules/@uppy/core/lib/supportsUploadProgress.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/core/lib/supportsUploadProgress.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Edge 15.x does not fire 'progress' events on uploads.
// See https://github.com/transloadit/uppy/issues/945
// And https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12224510/
module.exports = function supportsUploadProgress(userAgent) {
  // Allow passing in userAgent for tests
  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  } // Assume it works because basically everything supports progress events.


  if (!userAgent) return true;
  var m = /Edge\/(\d+\.\d+)/.exec(userAgent);
  if (!m) return true;
  var edgeVersion = m[1];

  var _edgeVersion$split = edgeVersion.split('.'),
      major = _edgeVersion$split[0],
      minor = _edgeVersion$split[1];

  major = parseInt(major, 10);
  minor = parseInt(minor, 10); // Worked before:
  // Edge 40.15063.0.0
  // Microsoft EdgeHTML 15.15063

  if (major < 15 || major === 15 && minor < 15063) {
    return true;
  } // Fixed in:
  // Microsoft EdgeHTML 18.18218


  if (major > 18 || major === 18 && minor >= 18218) {
    return true;
  } // other versions don't work.


  return false;
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/dist/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/dashboard/dist/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/dashboard/dist/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/AddFiles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! ./icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    localIcon = _require.localIcon;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require2.h,
    Component = _require2.Component;

var AddFiles =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(AddFiles, _Component);

  function AddFiles(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.triggerFileInputClick = _this.triggerFileInputClick.bind(_assertThisInitialized(_this));
    _this.onFileInputChange = _this.onFileInputChange.bind(_assertThisInitialized(_this));
    _this.renderPoweredByUppy = _this.renderPoweredByUppy.bind(_assertThisInitialized(_this));
    _this.renderHiddenFileInput = _this.renderHiddenFileInput.bind(_assertThisInitialized(_this));
    _this.renderDropPasteBrowseTagline = _this.renderDropPasteBrowseTagline.bind(_assertThisInitialized(_this));
    _this.renderMyDeviceAcquirer = _this.renderMyDeviceAcquirer.bind(_assertThisInitialized(_this));
    _this.renderAcquirer = _this.renderAcquirer.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AddFiles.prototype;

  _proto.triggerFileInputClick = function triggerFileInputClick() {
    this.fileInput.click();
  };

  _proto.onFileInputChange = function onFileInputChange(event) {
    this.props.handleInputChange(event); // We clear the input after a file is selected, because otherwise
    // change event is not fired in Chrome and Safari when a file
    // with the same name is selected.
    // ___Why not use value="" on <input/> instead?
    //    Because if we use that method of clearing the input,
    //    Chrome will not trigger change if we drop the same file twice (Issue #768).

    event.target.value = null;
  };

  _proto.renderPoweredByUppy = function renderPoweredByUppy() {
    return h("a", {
      tabindex: "-1",
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      class: "uppy-Dashboard-poweredBy"
    }, this.props.i18n('poweredBy') + ' ', h("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, h("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      "fill-rule": "evenodd"
    })), h("span", {
      class: "uppy-Dashboard-poweredByUppy"
    }, "Uppy"));
  };

  _proto.renderHiddenFileInput = function renderHiddenFileInput() {
    var _this2 = this;

    return h("input", {
      class: "uppy-Dashboard-input",
      hidden: true,
      "aria-hidden": "true",
      tabindex: -1,
      type: "file",
      name: "files[]",
      multiple: this.props.maxNumberOfFiles !== 1,
      onchange: this.onFileInputChange,
      accept: this.props.allowedFileTypes,
      ref: function ref(_ref) {
        _this2.fileInput = _ref;
      }
    });
  };

  _proto.renderDropPasteBrowseTagline = function renderDropPasteBrowseTagline() {
    var browse = h("button", {
      type: "button",
      class: "uppy-u-reset uppy-Dashboard-browse",
      onclick: this.triggerFileInputClick
    }, this.props.i18n('browse'));
    return h("div", {
      class: "uppy-Dashboard-dropFilesTitle"
    }, h("span", null, this.props.acquirers.length === 0 ? this.props.i18nArray('dropPaste', {
      browse: browse
    }) : this.props.i18nArray('dropPasteImport', {
      browse: browse
    })));
  };

  _proto.renderMyDeviceAcquirer = function renderMyDeviceAcquirer() {
    return h("div", {
      class: "uppy-DashboardTab",
      role: "presentation"
    }, h("button", {
      type: "button",
      class: "uppy-DashboardTab-btn",
      role: "tab",
      tabindex: 0,
      "data-uppy-super-focusable": true,
      onclick: this.triggerFileInputClick
    }, localIcon(), h("div", {
      class: "uppy-DashboardTab-name"
    }, this.props.i18n('myDevice'))));
  };

  _proto.renderAcquirer = function renderAcquirer(acquirer) {
    var _this3 = this;

    return h("div", {
      class: "uppy-DashboardTab",
      role: "presentation"
    }, h("button", {
      type: "button",
      class: "uppy-DashboardTab-btn",
      role: "tab",
      tabindex: 0,
      "aria-controls": "uppy-DashboardContent-panel--" + acquirer.id,
      "aria-selected": this.props.activePickerPanel.id === acquirer.id,
      "data-uppy-super-focusable": true,
      onclick: function onclick() {
        return _this3.props.showPanel(acquirer.id);
      }
    }, acquirer.icon(), h("div", {
      class: "uppy-DashboardTab-name"
    }, acquirer.name)));
  };

  _proto.render = function render() {
    var _this4 = this;

    return h("div", {
      class: "uppy-DashboardAddFiles"
    }, this.renderHiddenFileInput(), h("div", {
      class: "uppy-DashboardTabs"
    }, this.renderDropPasteBrowseTagline(), this.props.acquirers.length > 0 && h("div", {
      class: "uppy-DashboardTabs-list",
      role: "tablist"
    }, this.renderMyDeviceAcquirer(), this.props.acquirers.map(function (acquirer) {
      return _this4.renderAcquirer(acquirer);
    })), h("div", {
      class: "uppy-DashboardAddFiles-info"
    }, this.props.note && h("div", {
      class: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props))));
  };

  return AddFiles;
}(Component);

module.exports = AddFiles;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var AddFiles = __webpack_require__(/*! ./AddFiles */ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js");

var AddFilesPanel = function AddFilesPanel(props) {
  return h("div", {
    class: "uppy-Dashboard-AddFilesPanel",
    "data-uppy-panelType": "AddFiles",
    "aria-hidden": props.showAddFilesPanel
  }, h("div", {
    class: "uppy-DashboardContent-bar"
  }, h("div", {
    class: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n('addingMoreFiles')), h("button", {
    class: "uppy-DashboardContent-back",
    type: "button",
    onclick: function onclick(ev) {
      return props.toggleAddFilesPanel(false);
    }
  }, props.i18n('back'))), h(AddFiles, props));
};

module.exports = AddFilesPanel;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/Dashboard.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/Dashboard.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FileList = __webpack_require__(/*! ./FileList */ "./node_modules/@uppy/dashboard/lib/components/FileList.js");

var AddFiles = __webpack_require__(/*! ./AddFiles */ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js");

var AddFilesPanel = __webpack_require__(/*! ./AddFilesPanel */ "./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js");

var PickerPanelContent = __webpack_require__(/*! ./PickerPanelContent */ "./node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js");

var PanelTopBar = __webpack_require__(/*! ./PickerPanelTopBar */ "./node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js");

var FileCard = __webpack_require__(/*! ./FileCard */ "./node_modules/@uppy/dashboard/lib/components/FileCard/index.js");

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var isTouchDevice = __webpack_require__(/*! @uppy/utils/lib/isTouchDevice */ "./node_modules/@uppy/utils/lib/isTouchDevice.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var PreactCSSTransitionGroup = __webpack_require__(/*! preact-css-transition-group */ "./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js"); // http://dev.edenspiekermann.com/2016/02/11/introducing-accessible-modal-dialog
// https://github.com/ghosh/micromodal


function TransitionWrapper(props) {
  return h(PreactCSSTransitionGroup, {
    transitionName: "uppy-transition-slideDownUp",
    transitionEnterTimeout: 250,
    transitionLeaveTimeout: 250
  }, props.children);
}

var WIDTH_XL = 900;
var WIDTH_LG = 700;
var WIDTH_MD = 576;
var HEIGHT_MD = 576;

module.exports = function Dashboard(props) {
  var noFiles = props.totalFileCount === 0;
  var dashboardClassName = classNames({
    'uppy-Root': props.isTargetDOMEl,
    'uppy-Dashboard': true,
    'Uppy--isTouchDevice': isTouchDevice(),
    'uppy-Dashboard--animateOpenClose': props.animateOpenClose,
    'uppy-Dashboard--isClosing': props.isClosing,
    'uppy-Dashboard--isDraggingOver': props.isDraggingOver,
    'uppy-Dashboard--modal': !props.inline,
    'uppy-size--md': props.containerWidth > WIDTH_MD,
    'uppy-size--lg': props.containerWidth > WIDTH_LG,
    'uppy-size--xl': props.containerWidth > WIDTH_XL,
    'uppy-size--height-md': props.containerHeight > HEIGHT_MD,
    'uppy-Dashboard--isAddFilesPanelVisible': props.showAddFilesPanel,
    'uppy-Dashboard--isInnerWrapVisible': props.areInsidesReadyToBeVisible
  });
  var showFileList = props.showSelectedFiles && !noFiles;
  return h("div", {
    class: dashboardClassName,
    "aria-hidden": props.inline ? 'false' : props.isHidden,
    "aria-label": !props.inline ? props.i18n('dashboardWindowTitle') : props.i18n('dashboardTitle'),
    onpaste: props.handlePaste,
    onDragOver: props.handleDragOver,
    onDragLeave: props.handleDragLeave,
    onDrop: props.handleDrop
  }, h("div", {
    class: "uppy-Dashboard-overlay",
    tabindex: -1,
    onclick: props.handleClickOutside
  }), h("div", {
    class: "uppy-Dashboard-inner",
    "aria-modal": !props.inline && 'true',
    role: !props.inline && 'dialog',
    style: {
      width: props.inline && props.width ? props.width : '',
      height: props.inline && props.height ? props.height : ''
    }
  }, !props.inline ? h("button", {
    class: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": props.i18n('closeModal'),
    title: props.i18n('closeModal'),
    onclick: props.closeModal
  }, h("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, h("div", {
    class: "uppy-Dashboard-innerWrap"
  }, h("div", {
    class: "uppy-Dashboard-dropFilesHereHint"
  }, props.i18n('dropHint')), showFileList && h(PanelTopBar, props), showFileList ? h(FileList, props) : h(AddFiles, props), h(TransitionWrapper, null, props.showAddFilesPanel ? h(AddFilesPanel, _extends({
    key: "AddFilesPanel"
  }, props)) : null), h(TransitionWrapper, null, props.fileCardFor ? h(FileCard, _extends({
    key: "FileCard"
  }, props)) : null), h(TransitionWrapper, null, props.activePickerPanel ? h(PickerPanelContent, _extends({
    key: "PickerPanelContent"
  }, props)) : null), h("div", {
    class: "uppy-Dashboard-progressindicators"
  }, props.progressindicators.map(function (target) {
    return props.getPlugin(target.id).render(props.state);
  })))));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileCard/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileCard/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h,
    Component = _require.Component;

var getFileTypeIcon = __webpack_require__(/*! ../../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");

var ignoreEvent = __webpack_require__(/*! ../../utils/ignoreEvent.js */ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js");

var FilePreview = __webpack_require__(/*! ../FilePreview */ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js");

var FileCard =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FileCard, _Component);

  function FileCard(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.saveOnEnter = function (ev) {
      if (ev.keyCode === 13) {
        ev.stopPropagation();
        ev.preventDefault();
        var file = _this.props.files[_this.props.fileCardFor];

        _this.props.saveFileCard(_this.state.formState, file.id);
      }
    };

    _this.tempStoreMeta = function (ev, name) {
      var _extends2;

      _this.setState({
        formState: _extends({}, _this.state.formState, (_extends2 = {}, _extends2[name] = ev.target.value, _extends2))
      });
    };

    _this.handleSave = function () {
      var fileID = _this.props.fileCardFor;

      _this.props.saveFileCard(_this.state.formState, fileID);
    };

    _this.handleCancel = function () {
      _this.props.toggleFileCard();
    };

    _this.renderMetaFields = function () {
      var metaFields = _this.props.metaFields || [];
      return metaFields.map(function (field) {
        var id = "uppy-Dashboard-FileCard-input-" + field.id;
        return h("fieldset", {
          key: field.id,
          class: "uppy-Dashboard-FileCard-fieldset"
        }, h("label", {
          class: "uppy-Dashboard-FileCard-label",
          for: id
        }, field.name), h("input", {
          class: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input",
          id: id,
          type: "text",
          value: _this.state.formState[field.id],
          placeholder: field.placeholder,
          onkeyup: _this.saveOnEnter,
          onkeydown: _this.saveOnEnter,
          onkeypress: _this.saveOnEnter,
          oninput: function oninput(ev) {
            return _this.tempStoreMeta(ev, field.id);
          },
          "data-uppy-super-focusable": true
        }));
      });
    };

    var _file = _this.props.files[_this.props.fileCardFor];

    var _metaFields = _this.props.metaFields || [];

    var storedMetaData = {};

    _metaFields.forEach(function (field) {
      storedMetaData[field.id] = _file.meta[field.id] || '';
    });

    _this.state = {
      formState: storedMetaData
    };
    return _this;
  }

  var _proto = FileCard.prototype;

  _proto.render = function render() {
    var file = this.props.files[this.props.fileCardFor];
    return h("div", {
      class: "uppy-Dashboard-FileCard",
      "data-uppy-panelType": "FileCard",
      onDragOver: ignoreEvent,
      onDragLeave: ignoreEvent,
      onDrop: ignoreEvent,
      onPaste: ignoreEvent
    }, h("div", {
      class: "uppy-DashboardContent-bar"
    }, h("div", {
      class: "uppy-DashboardContent-title",
      role: "heading",
      "aria-level": "1"
    }, this.props.i18nArray('editing', {
      file: h("span", {
        class: "uppy-DashboardContent-titleFile"
      }, file.meta ? file.meta.name : file.name)
    })), h("button", {
      class: "uppy-DashboardContent-back",
      type: "button",
      title: this.props.i18n('finishEditingFile'),
      onclick: this.handleSave
    }, this.props.i18n('done'))), h("div", {
      class: "uppy-Dashboard-FileCard-inner"
    }, h("div", {
      class: "uppy-Dashboard-FileCard-preview",
      style: {
        backgroundColor: getFileTypeIcon(file.type).color
      }
    }, h(FilePreview, {
      file: file
    })), h("div", {
      class: "uppy-Dashboard-FileCard-info"
    }, this.renderMetaFields()), h("div", {
      class: "uppy-Dashboard-FileCard-actions"
    }, h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
      type: "button",
      onclick: this.handleSave
    }, this.props.i18n('saveChanges')), h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
      type: "button",
      onclick: this.handleCancel
    }, this.props.i18n('cancel')))));
  };

  return FileCard;
}(Component);

module.exports = FileCard;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem/Buttons/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem/Buttons/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var copyToClipboard = __webpack_require__(/*! ../../../utils/copyToClipboard */ "./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js");

var _require2 = __webpack_require__(/*! ../../icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconPencil = _require2.iconPencil,
    iconCross = _require2.iconCross,
    iconCopyLink = _require2.iconCopyLink;

var renderEditButton = function renderEditButton(props) {
  return !props.uploadInProgressOrComplete && props.metaFields && props.metaFields.length > 0 && h("button", {
    class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--edit",
    type: "button",
    "aria-label": props.i18n('editFile') + ' ' + props.file.meta.name,
    title: props.i18n('editFile'),
    onclick: function onclick(e) {
      return props.toggleFileCard(props.file.id);
    }
  }, iconPencil());
};

var renderRemoveButton = function renderRemoveButton(props) {
  return props.showRemoveButton && h("button", {
    class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--remove",
    type: "button",
    "aria-label": props.i18n('removeFile'),
    title: props.i18n('removeFile'),
    onclick: function onclick() {
      return props.removeFile(props.file.id);
    }
  }, iconCross());
};

var copyLinkToClipboard = function copyLinkToClipboard(event, props) {
  return copyToClipboard(props.file.uploadURL, props.i18n('copyLinkToClipboardFallback')).then(function () {
    props.log('Link copied to clipboard.');
    props.info(props.i18n('copyLinkToClipboardSuccess'), 'info', 3000);
  }).catch(props.log) // avoid losing focus
  .then(function () {
    return event.target.focus({
      preventScroll: true
    });
  });
};

var renderCopyLinkButton = function renderCopyLinkButton(props) {
  return props.showLinkToFileUploadResult && props.file.uploadURL && h("button", {
    class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--copyLink",
    type: "button",
    "aria-label": props.i18n('copyLink'),
    title: props.i18n('copyLink'),
    onclick: function onclick(event) {
      return copyLinkToClipboard(event, props);
    }
  }, iconCopyLink());
};

module.exports = function Buttons(props) {
  return h("div", {
    className: "uppy-DashboardItem-actionWrapper"
  }, renderEditButton(props), renderCopyLinkButton(props), renderRemoveButton(props));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var prettyBytes = __webpack_require__(/*! @uppy/utils/lib/prettyBytes */ "./node_modules/@uppy/utils/lib/prettyBytes.js");

var truncateString = __webpack_require__(/*! ../../../utils/truncateString */ "./node_modules/@uppy/dashboard/lib/utils/truncateString.js");

var renderAcquirerIcon = function renderAcquirerIcon(acquirer, props) {
  return h("span", {
    title: props.i18n('fileSource', {
      name: acquirer.name
    })
  }, acquirer.icon());
};

var renderFileSource = function renderFileSource(props) {
  return props.file.source && props.file.source !== props.id && h("div", {
    class: "uppy-DashboardItem-sourceIcon"
  }, props.acquirers.map(function (acquirer) {
    if (acquirer.id === props.file.source) {
      return renderAcquirerIcon(acquirer, props);
    }
  }));
};

var renderFileName = function renderFileName(props) {
  // Take up at most 2 lines on any screen
  var maxNameLength; // For very small mobile screens

  if (props.containerWidth <= 352) {
    maxNameLength = 35; // For regular mobile screens
  } else if (props.containerWidth <= 576) {
    maxNameLength = 60; // For desktops
  } else {
    maxNameLength = 30;
  }

  return h("div", {
    class: "uppy-DashboardItem-name",
    title: props.file.meta.name
  }, truncateString(props.file.meta.name, maxNameLength));
};

var renderFileSize = function renderFileSize(props) {
  return props.file.data.size && h("div", {
    class: "uppy-DashboardItem-statusSize"
  }, prettyBytes(props.file.data.size));
};

module.exports = function FileInfo(props) {
  return h("div", {
    class: "uppy-DashboardItem-fileInfo",
    "data-uppy-file-source": props.file.source
  }, renderFileName(props), h("div", {
    class: "uppy-DashboardItem-status"
  }, renderFileSize(props), renderFileSource(props)));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem/FilePreviewAndLink/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem/FilePreviewAndLink/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var FilePreview = __webpack_require__(/*! ../../FilePreview */ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js");

var getFileTypeIcon = __webpack_require__(/*! ../../../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");

module.exports = function FilePreviewAndLink(props) {
  return h("div", {
    class: "uppy-DashboardItem-previewInnerWrap",
    style: {
      backgroundColor: getFileTypeIcon(props.file.type).color
    }
  }, props.showLinkToFileUploadResult && props.file.uploadURL && h("a", {
    class: "uppy-DashboardItem-previewLink",
    href: props.file.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": props.file.meta.name
  }), h(FilePreview, {
    file: props.file
  }));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/PauseResumeCancelIcon.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/PauseResumeCancelIcon.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h; // http://codepen.io/Harkko/pen/rVxvNM
// https://css-tricks.com/svg-line-animation-works/
// https://gist.github.com/eswak/ad4ea57bcd5ff7aa5d42
// circle length equals 2 * PI * R


var circleLength = 2 * Math.PI * 15; // stroke-dashoffset is a percentage of the progress from circleLength,
// substracted from circleLength, because its an offset

module.exports = function PauseResumeCancelIcon(props) {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    class: "UppyIcon UppyIcon-progressCircle"
  }, h("g", {
    class: "progress-group"
  }, h("circle", {
    class: "bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), h("circle", {
    class: "progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    "stroke-width": "2",
    fill: "none",
    "stroke-dasharray": circleLength,
    "stroke-dashoffset": circleLength - circleLength / 100 * props.progress
  })), !props.hidePauseResumeCancelButtons && h("g", null, h("polygon", {
    class: "play",
    transform: "translate(3, 3)",
    points: "12 20 12 10 20 15"
  }), h("g", {
    class: "pause",
    transform: "translate(14.5, 13)"
  }, h("rect", {
    x: "0",
    y: "0",
    width: "2",
    height: "10",
    rx: "0"
  }), h("rect", {
    x: "5",
    y: "0",
    width: "2",
    height: "10",
    rx: "0"
  })), h("polygon", {
    class: "cancel",
    transform: "translate(2, 2)",
    points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
  })), h("polygon", {
    class: "check",
    transform: "translate(2, 3)",
    points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
  }));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var _require2 = __webpack_require__(/*! ../../icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconRetry = _require2.iconRetry;

var PauseResumeCancelIcon = __webpack_require__(/*! ./PauseResumeCancelIcon */ "./node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/PauseResumeCancelIcon.js");

function onPauseResumeCancelRetry(props) {
  if (props.isUploaded) return;

  if (props.error && !props.hideRetryButton) {
    props.retryUpload(props.file.id);
    return;
  }

  if (props.hidePauseResumeCancelButtons) {
    return;
  }

  if (props.resumableUploads) {
    props.pauseUpload(props.file.id);
  } else if (props.individualCancellation) {
    props.cancelUpload(props.file.id);
  }
}

function progressIndicatorTitle(props) {
  if (props.isUploaded) {
    return props.i18n('uploadComplete');
  }

  if (props.error) {
    return props.i18n('retryUpload');
  }

  if (props.resumableUploads) {
    if (props.file.isPaused) {
      return props.i18n('resumeUpload');
    }

    return props.i18n('pauseUpload');
  } else if (props.individualCancellation) {
    return props.i18n('cancelUpload');
  }

  return '';
}

module.exports = function FileProgress(props) {
  if (props.hideRetryButton && props.error) {
    return h("div", {
      class: "uppy-DashboardItem-progress"
    });
  } else if (props.isUploaded || props.hidePauseResumeCancelButtons && !props.error) {
    return h("div", {
      class: "uppy-DashboardItem-progress"
    }, h("div", {
      class: "uppy-DashboardItem-progressIndicator"
    }, h(PauseResumeCancelIcon, {
      progress: props.file.progress.percentage,
      hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons
    })));
  } else {
    return h("div", {
      class: "uppy-DashboardItem-progress"
    }, h("button", {
      class: "uppy-u-reset uppy-DashboardItem-progressIndicator",
      type: "button",
      "aria-label": progressIndicatorTitle(props),
      title: progressIndicatorTitle(props),
      onclick: function onclick() {
        return onPauseResumeCancelRetry(props);
      }
    }, props.error ? props.hideRetryButton ? null : iconRetry() : h(PauseResumeCancelIcon, {
      progress: props.file.progress.percentage,
      hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons
    })));
  }
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h,
    Component = _require.Component;

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var shallowEqual = __webpack_require__(/*! is-shallow-equal */ "./node_modules/is-shallow-equal/index.js");

var FilePreviewAndLink = __webpack_require__(/*! ./FilePreviewAndLink */ "./node_modules/@uppy/dashboard/lib/components/FileItem/FilePreviewAndLink/index.js");

var FileProgress = __webpack_require__(/*! ./FileProgress */ "./node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/index.js");

var FileInfo = __webpack_require__(/*! ./FileInfo */ "./node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js");

var Buttons = __webpack_require__(/*! ./Buttons */ "./node_modules/@uppy/dashboard/lib/components/FileItem/Buttons/index.js");

module.exports =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FileItem, _Component);

  function FileItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FileItem.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  };

  _proto.render = function render() {
    var file = this.props.file;
    var isProcessing = file.progress.preprocess || file.progress.postprocess;
    var isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
    var uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
    var uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    var isPaused = file.isPaused || false;
    var error = file.error || false;
    var showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
    var dashboardItemClass = classNames({
      'uppy-u-reset': true,
      'uppy-DashboardItem': true,
      'is-inprogress': uploadInProgress,
      'is-processing': isProcessing,
      'is-complete': isUploaded,
      'is-paused': isPaused,
      'is-error': !!error,
      'is-resumable': this.props.resumableUploads,
      'is-noIndividualCancellation': !this.props.individualCancellation
    });
    return h("li", {
      class: dashboardItemClass,
      id: "uppy_" + file.id
    }, h("div", {
      class: "uppy-DashboardItem-preview"
    }, h(FilePreviewAndLink, {
      file: file,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult
    }), h(FileProgress, _extends({}, this.props, {
      file: file,
      error: error,
      isUploaded: isUploaded
    }))), h("div", {
      class: "uppy-DashboardItem-fileInfoAndButtons"
    }, h(FileInfo, {
      file: file,
      id: this.props.id,
      acquirers: this.props.acquirers,
      containerWidth: this.props.containerWidth,
      i18n: this.props.i18n
    }), h(Buttons, {
      file: file,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton: showRemoveButton,
      uploadInProgressOrComplete: uploadInProgressOrComplete,
      removeFile: this.props.removeFile,
      toggleFileCard: this.props.toggleFileCard,
      i18n: this.props.i18n,
      log: this.props.log,
      info: this.props.info
    })));
  };

  return FileItem;
}(Component);

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileList.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FileItem = __webpack_require__(/*! ./FileItem/index.js */ "./node_modules/@uppy/dashboard/lib/components/FileItem/index.js");

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

module.exports = function (props) {
  var dashboardFilesClass = classNames({
    'uppy-Dashboard-files': true,
    'uppy-Dashboard-files--noFiles': props.totalFileCount === 0
  });
  var fileProps = {
    // FIXME This is confusing, it's actually the Dashboard's plugin ID
    id: props.id,
    error: props.error,
    // TODO move this to context
    i18n: props.i18n,
    log: props.log,
    info: props.info,
    // features
    acquirers: props.acquirers,
    resumableUploads: props.resumableUploads,
    individualCancellation: props.individualCancellation,
    // visual options
    hideRetryButton: props.hideRetryButton,
    hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons,
    showLinkToFileUploadResult: props.showLinkToFileUploadResult,
    isWide: props.isWide,
    metaFields: props.metaFields,
    // callbacks
    retryUpload: props.retryUpload,
    pauseUpload: props.pauseUpload,
    cancelUpload: props.cancelUpload,
    toggleFileCard: props.toggleFileCard,
    removeFile: props.removeFile,
    handleRequestThumbnail: props.handleRequestThumbnail
  };

  function renderItem(fileID) {
    return h(FileItem, _extends({
      key: fileID
    }, fileProps, {
      file: props.files[fileID]
    }));
  }

  return h("ul", {
    class: dashboardFilesClass
  }, Object.keys(props.files).map(renderItem));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FilePreview.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

module.exports = function FilePreview(props) {
  var file = props.file;

  if (file.preview) {
    return h("img", {
      class: "uppy-DashboardItem-previewImg",
      alt: file.name,
      src: file.preview
    });
  }

  var _getFileTypeIcon = getFileTypeIcon(file.type),
      color = _getFileTypeIcon.color,
      icon = _getFileTypeIcon.icon;

  return h("div", {
    class: "uppy-DashboardItem-previewIconWrap"
  }, h("span", {
    class: "uppy-DashboardItem-previewIcon",
    style: {
      color: color
    }
  }, icon), h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-DashboardItem-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, h("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    "fill-rule": "evenodd"
  })));
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var ignoreEvent = __webpack_require__(/*! ../utils/ignoreEvent.js */ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js");

function PickerPanelContent(props) {
  return h("div", {
    class: "uppy-DashboardContent-panel",
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: "uppy-DashboardContent-panel--" + props.activePickerPanel.id,
    onDragOver: ignoreEvent,
    onDragLeave: ignoreEvent,
    onDrop: ignoreEvent,
    onPaste: ignoreEvent
  }, h("div", {
    class: "uppy-DashboardContent-bar"
  }, h("div", {
    class: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n('importFrom', {
    name: props.activePickerPanel.name
  })), h("button", {
    class: "uppy-DashboardContent-back",
    type: "button",
    onclick: props.hideAllPanels
  }, props.i18n('done'))), h("div", {
    class: "uppy-DashboardContent-panelBody"
  }, props.getPlugin(props.activePickerPanel.id).render(props.state)));
}

module.exports = PickerPanelContent;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var _require2 = __webpack_require__(/*! ./icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconPlus = _require2.iconPlus;

var uploadStates = {
  STATE_ERROR: 'error',
  STATE_WAITING: 'waiting',
  STATE_PREPROCESSING: 'preprocessing',
  STATE_UPLOADING: 'uploading',
  STATE_POSTPROCESSING: 'postprocessing',
  STATE_COMPLETE: 'complete',
  STATE_PAUSED: 'paused'
};

function getUploadingState(isAllErrored, isAllComplete, isAllPaused, files) {
  if (files === void 0) {
    files = {};
  }

  if (isAllErrored) {
    return uploadStates.STATE_ERROR;
  }

  if (isAllComplete) {
    return uploadStates.STATE_COMPLETE;
  }

  if (isAllPaused) {
    return uploadStates.STATE_PAUSED;
  }

  var state = uploadStates.STATE_WAITING;
  var fileIDs = Object.keys(files);

  for (var i = 0; i < fileIDs.length; i++) {
    var progress = files[fileIDs[i]].progress; // If ANY files are being uploaded right now, show the uploading state.

    if (progress.uploadStarted && !progress.uploadComplete) {
      return uploadStates.STATE_UPLOADING;
    } // If files are being preprocessed AND postprocessed at this time, we show the
    // preprocess state. If any files are being uploaded we show uploading.


    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    } // If NO files are being preprocessed or uploaded right now, but some files are
    // being postprocessed, show the postprocess state.


    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }

  return state;
}

function UploadStatus(props) {
  var uploadingState = getUploadingState(props.isAllErrored, props.isAllComplete, props.isAllPaused, props.files);

  switch (uploadingState) {
    case 'uploading':
      return props.i18n('uploadingXFiles', {
        smart_count: props.inProgressNotPausedFiles.length
      });

    case 'preprocessing':
    case 'postprocessing':
      return props.i18n('processingXFiles', {
        smart_count: props.processingFiles.length
      });

    case 'paused':
      return props.i18n('uploadPaused');

    case 'waiting':
      return props.i18n('xFilesSelected', {
        smart_count: props.newFiles.length
      });

    case 'complete':
      return props.i18n('uploadComplete');
  }
}

function PanelTopBar(props) {
  var allowNewUpload = props.allowNewUpload; // TODO maybe this should be done in ../index.js, then just pass that down as `allowNewUpload`

  if (allowNewUpload && props.maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }

  return h("div", {
    class: "uppy-DashboardContent-bar"
  }, !props.isAllComplete && !props.hideCancelButton ? h("button", {
    class: "uppy-DashboardContent-back",
    type: "button",
    onclick: props.cancelAll
  }, props.i18n('cancel')) : h("div", null), h("div", {
    class: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, h(UploadStatus, props)), allowNewUpload ? h("button", {
    class: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": props.i18n('addMoreFiles'),
    title: props.i18n('addMoreFiles'),
    onclick: function onclick() {
      return props.toggleAddFilesPanel(true);
    }
  }, iconPlus(), h("span", {
    class: "uppy-DashboardContent-addMoreCaption"
  }, props.i18n('addMore'))) : h("div", null));
}

module.exports = PanelTopBar;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/icons.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h; // https://css-tricks.com/creating-svg-icon-system-react/


function defaultPickerIcon() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, h("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}

function iconCopy() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "51",
    height: "51",
    viewBox: "0 0 51 51"
  }, h("path", {
    d: "M17.21 45.765a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.774-6.775-2.404-2.404-6.775 6.776c-3.424 3.427-3.424 9 0 12.426l4.12 4.123a8.766 8.766 0 0 0 6.216 2.57c2.25 0 4.5-.858 6.214-2.57l13.55-13.552a8.72 8.72 0 0 0 2.575-6.213 8.73 8.73 0 0 0-2.575-6.213l-4.123-4.12-2.404 2.404 4.123 4.12a5.352 5.352 0 0 1 1.58 3.81c0 1.438-.562 2.79-1.58 3.808l-13.55 13.55z"
  }), h("path", {
    d: "M44.256 2.858A8.728 8.728 0 0 0 38.043.283h-.002a8.73 8.73 0 0 0-6.212 2.574l-13.55 13.55a8.725 8.725 0 0 0-2.575 6.214 8.73 8.73 0 0 0 2.574 6.216l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.437.562-2.79 1.58-3.808l13.55-13.55a5.348 5.348 0 0 1 3.81-1.58c1.44 0 2.792.562 3.81 1.58l4.12 4.12c2.1 2.1 2.1 5.518 0 7.617L39.2 23.775l2.404 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z"
  }));
}

function iconResume() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25",
    height: "25",
    viewBox: "0 0 44 44"
  }, h("polygon", {
    class: "play",
    transform: "translate(6, 5.5)",
    points: "13 21.6666667 13 11 21 16.3333333"
  }));
}

function iconPause() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25px",
    height: "25px",
    viewBox: "0 0 44 44"
  }, h("g", {
    transform: "translate(18, 17)",
    class: "pause"
  }, h("rect", {
    x: "0",
    y: "0",
    width: "2",
    height: "10",
    rx: "0"
  }), h("rect", {
    x: "6",
    y: "0",
    width: "2",
    height: "10",
    rx: "0"
  })));
}

function localIcon() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    fill: "#607d8b",
    width: "27",
    height: "25",
    viewBox: "0 0 27 25"
  }, h("path", {
    d: "M5.586 9.288a.313.313 0 0 0 .282.176h4.84v3.922c0 1.514 1.25 2.24 2.792 2.24 1.54 0 2.79-.726 2.79-2.24V9.464h4.84c.122 0 .23-.068.284-.176a.304.304 0 0 0-.046-.324L13.735.106a.316.316 0 0 0-.472 0l-7.63 8.857a.302.302 0 0 0-.047.325z"
  }), h("path", {
    d: "M24.3 5.093c-.218-.76-.54-1.187-1.208-1.187h-4.856l1.018 1.18h3.948l2.043 11.038h-7.193v2.728H9.114v-2.725h-7.36l2.66-11.04h3.33l1.018-1.18H3.907c-.668 0-1.06.46-1.21 1.186L0 16.456v7.062C0 24.338.676 25 1.51 25h23.98c.833 0 1.51-.663 1.51-1.482v-7.062L24.3 5.093z"
  }));
}

function iconRetry() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon retry",
    width: "28",
    height: "31",
    viewBox: "0 0 16 19"
  }, h("path", {
    d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
  }), h("path", {
    d: "M7.9 3H10v2H7.9z"
  }), h("path", {
    d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
  }), h("path", {
    d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
  }));
}

function checkIcon() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon UppyIcon-check",
    width: "13",
    height: "9",
    viewBox: "0 0 13 9"
  }, h("polygon", {
    points: "5 7.293 1.354 3.647 0.646 4.354 5 8.707 12.354 1.354 11.646 0.647"
  }));
}

function iconImage() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("g", {
    fill: "#686DE0",
    "fill-rule": "evenodd"
  }, h("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    "fill-rule": "nonzero"
  }), h("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    "fill-rule": "nonzero"
  }), h("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}

function iconAudio() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, h("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    "fill-rule": "nonzero"
  }));
}

function iconVideo() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, h("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    "fill-rule": "nonzero"
  }));
}

function iconPDF() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, h("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    "fill-rule": "nonzero"
  }));
}

function iconArchive() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    "fill-rule": "nonzero"
  }));
}

function iconFile() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, h("g", {
    fill: "#A7AFB7",
    "fill-rule": "nonzero"
  }, h("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), h("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}

function iconText() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, h("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    "fill-rule": "nonzero"
  }));
}

function iconCopyLink() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, h("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  }));
}

function iconPencil() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, h("g", {
    "fill-rule": "evenodd"
  }, h("path", {
    d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
    "fill-rule": "nonzero"
  }), h("rect", {
    x: "1",
    y: "12.293",
    width: "11",
    height: "1",
    rx: ".5"
  }), h("path", {
    "fill-rule": "nonzero",
    d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
  })));
}

function iconCross() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, h("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), h("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  }));
}

function iconPlus() {
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, h("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  }));
}

module.exports = {
  defaultPickerIcon: defaultPickerIcon,
  iconCopy: iconCopy,
  iconResume: iconResume,
  iconPause: iconPause,
  iconRetry: iconRetry,
  localIcon: localIcon,
  checkIcon: checkIcon,
  iconImage: iconImage,
  iconAudio: iconAudio,
  iconVideo: iconVideo,
  iconPDF: iconPDF,
  iconArchive: iconArchive,
  iconFile: iconFile,
  iconText: iconText,
  iconCopyLink: iconCopyLink,
  iconPencil: iconPencil,
  iconCross: iconCross,
  iconPlus: iconPlus
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var DashboardUI = __webpack_require__(/*! ./components/Dashboard */ "./node_modules/@uppy/dashboard/lib/components/Dashboard.js");

var StatusBar = __webpack_require__(/*! @uppy/status-bar */ "./node_modules/@uppy/status-bar/lib/index.js");

var Informer = __webpack_require__(/*! @uppy/informer */ "./node_modules/@uppy/informer/lib/index.js");

var ThumbnailGenerator = __webpack_require__(/*! @uppy/thumbnail-generator */ "./node_modules/@uppy/thumbnail-generator/lib/index.js");

var findAllDOMElements = __webpack_require__(/*! @uppy/utils/lib/findAllDOMElements */ "./node_modules/@uppy/utils/lib/findAllDOMElements.js");

var toArray = __webpack_require__(/*! @uppy/utils/lib/toArray */ "./node_modules/@uppy/utils/lib/toArray.js");

var getDroppedFiles = __webpack_require__(/*! @uppy/utils/lib/getDroppedFiles */ "./node_modules/@uppy/utils/lib/getDroppedFiles/index.js");

var trapFocus = __webpack_require__(/*! ./utils/trapFocus */ "./node_modules/@uppy/dashboard/lib/utils/trapFocus.js");

var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");

var ResizeObserver = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js").default || __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _require2 = __webpack_require__(/*! ./components/icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    defaultPickerIcon = _require2.defaultPickerIcon;

var createSuperFocus = __webpack_require__(/*! ./utils/createSuperFocus */ "./node_modules/@uppy/dashboard/lib/utils/createSuperFocus.js");

var memoize = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js").default || __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");

var TAB_KEY = 9;
var ESC_KEY = 27;

function createPromise() {
  var o = {};
  o.promise = new Promise(function (resolve, reject) {
    o.resolve = resolve;
    o.reject = reject;
  });
  return o;
}
/**
 * Dashboard UI with previews, metadata editing, tabs for various services and more
 */


module.exports = (_temp = _class =
/*#__PURE__*/
function (_Plugin) {
  _inheritsLoose(Dashboard, _Plugin);

  function Dashboard(uppy, opts) {
    var _this;

    _this = _Plugin.call(this, uppy, opts) || this;

    _this.cancelUpload = function (fileID) {
      _this.uppy.removeFile(fileID);
    };

    _this.saveFileCard = function (meta, fileID) {
      _this.uppy.setFileMeta(fileID, meta);

      _this.toggleFileCard();
    };

    _this._attachRenderFunctionToTarget = function (target) {
      var plugin = _this.uppy.getPlugin(target.id);

      return _extends({}, target, {
        icon: plugin.icon || _this.opts.defaultPickerIcon,
        render: plugin.render
      });
    };

    _this._isTargetSupported = function (target) {
      var plugin = _this.uppy.getPlugin(target.id); // If the plugin does not provide a `supported` check, assume the plugin works everywhere.


      if (typeof plugin.isSupported !== 'function') {
        return true;
      }

      return plugin.isSupported();
    };

    _this._getAcquirers = memoize(function (targets) {
      return targets.filter(function (target) {
        return target.type === 'acquirer' && _this._isTargetSupported(target);
      }).map(_this._attachRenderFunctionToTarget);
    });
    _this._getProgressIndicators = memoize(function (targets) {
      return targets.filter(function (target) {
        return target.type === 'progressindicator';
      }).map(_this._attachRenderFunctionToTarget);
    });
    _this.id = _this.opts.id || 'Dashboard';
    _this.title = 'Dashboard';
    _this.type = 'orchestrator';
    _this.modalName = "uppy-Dashboard-" + cuid();
    _this.defaultLocale = {
      strings: {
        closeModal: 'Close Modal',
        importFrom: 'Import from %{name}',
        addingMoreFiles: 'Adding more files',
        addMoreFiles: 'Add more files',
        dashboardWindowTitle: 'File Uploader Window (Press escape to close)',
        dashboardTitle: 'File Uploader',
        copyLinkToClipboardSuccess: 'Link copied to clipboard',
        copyLinkToClipboardFallback: 'Copy the URL below',
        copyLink: 'Copy link',
        link: 'Link',
        fileSource: 'File source: %{name}',
        done: 'Done',
        back: 'Back',
        addMore: 'Add more',
        removeFile: 'Remove file',
        editFile: 'Edit file',
        editing: 'Editing %{file}',
        edit: 'Edit',
        finishEditingFile: 'Finish editing file',
        saveChanges: 'Save changes',
        cancel: 'Cancel',
        myDevice: 'My Device',
        dropPasteImport: 'Drop files here, paste, %{browse} or import from',
        dropPaste: 'Drop files here, paste or %{browse}',
        dropHint: 'Drop your files here',
        browse: 'browse',
        uploadComplete: 'Upload complete',
        uploadPaused: 'Upload paused',
        resumeUpload: 'Resume upload',
        pauseUpload: 'Pause upload',
        retryUpload: 'Retry upload',
        cancelUpload: 'Cancel upload',
        xFilesSelected: {
          0: '%{smart_count} file selected',
          1: '%{smart_count} files selected',
          2: '%{smart_count} files selected'
        },
        uploadingXFiles: {
          0: 'Uploading %{smart_count} file',
          1: 'Uploading %{smart_count} files',
          2: 'Uploading %{smart_count} files'
        },
        processingXFiles: {
          0: 'Processing %{smart_count} file',
          1: 'Processing %{smart_count} files',
          2: 'Processing %{smart_count} files'
        },
        poweredBy: 'Powered by'
      }
    }; // set default options

    var defaultOptions = {
      target: 'body',
      metaFields: [],
      trigger: '#uppy-select-files',
      inline: false,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      waitForThumbnailsBeforeUpload: false,
      defaultPickerIcon: defaultPickerIcon,
      showLinkToFileUploadResult: true,
      showProgressDetails: false,
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeCancelButtons: false,
      hideProgressAfterFinish: false,
      note: null,
      closeModalOnClickOutside: false,
      closeAfterFinish: false,
      disableStatusBar: false,
      disableInformer: false,
      disableThumbnailGenerator: false,
      disablePageScrollWhenModalOpen: true,
      animateOpenClose: true,
      proudlyDisplayPoweredByUppy: true,
      onRequestCloseModal: function onRequestCloseModal() {
        return _this.closeModal();
      },
      showSelectedFiles: true,
      browserBackButtonClose: false
    }; // merge default options with the ones set by user

    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.requestCloseModal = _this.requestCloseModal.bind(_assertThisInitialized(_this));
    _this.isModalOpen = _this.isModalOpen.bind(_assertThisInitialized(_this));
    _this.addTarget = _this.addTarget.bind(_assertThisInitialized(_this));
    _this.removeTarget = _this.removeTarget.bind(_assertThisInitialized(_this));
    _this.hideAllPanels = _this.hideAllPanels.bind(_assertThisInitialized(_this));
    _this.showPanel = _this.showPanel.bind(_assertThisInitialized(_this));
    _this.toggleFileCard = _this.toggleFileCard.bind(_assertThisInitialized(_this));
    _this.toggleAddFilesPanel = _this.toggleAddFilesPanel.bind(_assertThisInitialized(_this));
    _this.initEvents = _this.initEvents.bind(_assertThisInitialized(_this));
    _this.handlePopState = _this.handlePopState.bind(_assertThisInitialized(_this));
    _this.handleKeyDownInModal = _this.handleKeyDownInModal.bind(_assertThisInitialized(_this));
    _this.handleKeyDownInInline = _this.handleKeyDownInInline.bind(_assertThisInitialized(_this));
    _this.handleComplete = _this.handleComplete.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.handlePaste = _this.handlePaste.bind(_assertThisInitialized(_this));
    _this.handlePasteOnBody = _this.handlePasteOnBody.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleDragOver = _this.handleDragOver.bind(_assertThisInitialized(_this));
    _this.handleDragLeave = _this.handleDragLeave.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    _this.superFocusOnEachUpdate = _this.superFocusOnEachUpdate.bind(_assertThisInitialized(_this));
    _this.recordIfFocusedOnUppyRecently = _this.recordIfFocusedOnUppyRecently.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.install = _this.install.bind(_assertThisInitialized(_this));
    _this.superFocus = createSuperFocus();
    _this.ifFocusedOnUppyRecently = false; // Timeouts

    _this.makeDashboardInsidesVisibleAnywayTimeout = null;
    _this.removeDragOverClassTimeout = null;
    return _this;
  }

  var _proto = Dashboard.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
  };

  _proto.i18nInit = function i18nInit() {
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState(); // so that UI re-renders and we see the updated locale
  };

  _proto.removeTarget = function removeTarget(plugin) {
    var pluginState = this.getPluginState(); // filter out the one we want to remove

    var newTargets = pluginState.targets.filter(function (target) {
      return target.id !== plugin.id;
    });
    this.setPluginState({
      targets: newTargets
    });
  };

  _proto.addTarget = function addTarget(plugin) {
    var callerPluginId = plugin.id || plugin.constructor.name;
    var callerPluginName = plugin.title || callerPluginId;
    var callerPluginType = plugin.type;

    if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
      var msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';
      this.uppy.log(msg, 'error');
      return;
    }

    var target = {
      id: callerPluginId,
      name: callerPluginName,
      type: callerPluginType
    };
    var state = this.getPluginState();
    var newTargets = state.targets.slice();
    newTargets.push(target);
    this.setPluginState({
      targets: newTargets
    });
    return this.el;
  };

  _proto.hideAllPanels = function hideAllPanels() {
    var update = {
      activePickerPanel: false,
      showAddFilesPanel: false,
      activeOverlayType: null
    };
    var current = this.getPluginState();

    if (current.activePickerPanel === update.activePickerPanel && current.showAddFilesPanel === update.showAddFilesPanel && current.activeOverlayType === update.activeOverlayType) {
      // avoid doing a state update if nothing changed
      return;
    }

    this.setPluginState(update);
  };

  _proto.showPanel = function showPanel(id) {
    var _this$getPluginState = this.getPluginState(),
        targets = _this$getPluginState.targets;

    var activePickerPanel = targets.filter(function (target) {
      return target.type === 'acquirer' && target.id === id;
    })[0];
    this.setPluginState({
      activePickerPanel: activePickerPanel,
      activeOverlayType: 'PickerPanel'
    });
  };

  _proto.openModal = function openModal() {
    var _this2 = this;

    var _createPromise = createPromise(),
        promise = _createPromise.promise,
        resolve = _createPromise.resolve; // save scroll position


    this.savedScrollPosition = window.pageYOffset; // save active element, so we can restore focus when modal is closed

    this.savedActiveElement = document.activeElement;

    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.add('uppy-Dashboard-isFixed');
    }

    if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
      var handler = function handler() {
        _this2.setPluginState({
          isHidden: false
        });

        _this2.el.removeEventListener('animationend', handler, false);

        resolve();
      };

      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: false
      });
      resolve();
    }

    if (this.opts.browserBackButtonClose) {
      this.updateBrowserHistory();
    } // handle ESC and TAB keys in modal dialog


    document.addEventListener('keydown', this.handleKeyDownInModal);
    this.uppy.emit('dashboard:modal-open');
    return promise;
  };

  _proto.closeModal = function closeModal(opts) {
    var _this3 = this;

    if (opts === void 0) {
      opts = {};
    }

    var _opts = opts,
        _opts$manualClose = _opts.manualClose,
        manualClose = _opts$manualClose === void 0 ? true : _opts$manualClose;

    var _this$getPluginState2 = this.getPluginState(),
        isHidden = _this$getPluginState2.isHidden,
        isClosing = _this$getPluginState2.isClosing;

    if (isHidden || isClosing) {
      // short-circuit if animation is ongoing
      return;
    }

    var _createPromise2 = createPromise(),
        promise = _createPromise2.promise,
        resolve = _createPromise2.resolve;

    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.remove('uppy-Dashboard-isFixed');
    }

    if (this.opts.animateOpenClose) {
      this.setPluginState({
        isClosing: true
      });

      var handler = function handler() {
        _this3.setPluginState({
          isHidden: true,
          isClosing: false
        });

        _this3.superFocus.cancel();

        _this3.savedActiveElement.focus();

        _this3.el.removeEventListener('animationend', handler, false);

        resolve();
      };

      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: true
      });
      this.superFocus.cancel();
      this.savedActiveElement.focus();
      resolve();
    } // handle ESC and TAB keys in modal dialog


    document.removeEventListener('keydown', this.handleKeyDownInModal);

    if (manualClose) {
      if (this.opts.browserBackButtonClose) {
        // Make sure that the latest entry in the history state is our modal name
        if (history.state && history.state[this.modalName]) {
          // Go back in history to clear out the entry we created (ultimately closing the modal)
          history.go(-1);
        }
      }
    }

    this.uppy.emit('dashboard:modal-closed');
    return promise;
  };

  _proto.isModalOpen = function isModalOpen() {
    return !this.getPluginState().isHidden || false;
  };

  _proto.requestCloseModal = function requestCloseModal() {
    if (this.opts.onRequestCloseModal) {
      return this.opts.onRequestCloseModal();
    }

    return this.closeModal();
  };

  _proto.toggleFileCard = function toggleFileCard(fileId) {
    if (fileId) {
      this.uppy.emit('dashboard:file-edit-start');
    } else {
      this.uppy.emit('dashboard:file-edit-complete');
    }

    this.setPluginState({
      fileCardFor: fileId || null,
      activeOverlayType: fileId ? 'FileCard' : null
    });
  };

  _proto.toggleAddFilesPanel = function toggleAddFilesPanel(show) {
    this.setPluginState({
      showAddFilesPanel: show,
      activeOverlayType: show ? 'AddFiles' : null
    });
  };

  _proto.addFiles = function addFiles(files) {
    var _this4 = this;

    var descriptors = files.map(function (file) {
      return {
        source: _this4.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: file.relativePath || null
        }
      };
    });

    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
  } // ___Why make insides of Dashboard invisible until first ResizeObserver event is emitted?
  //    ResizeOberserver doesn't emit the first resize event fast enough, users can see the jump from one .uppy-size-- to another (e.g. in Safari)
  // ___Why not apply visibility property to .uppy-Dashboard-inner?
  //    Because ideally, acc to specs, ResizeObserver should see invisible elements as of width 0. So even though applying invisibility to .uppy-Dashboard-inner works now, it may not work in the future.
  ;

  _proto.startListeningToResize = function startListeningToResize() {
    var _this5 = this;

    // Watch for Dashboard container (`.uppy-Dashboard-inner`) resize
    // and update containerWidth/containerHeight in plugin state accordingly.
    // Emits first event on initialization.
    this.resizeObserver = new ResizeObserver(function (entries, observer) {
      var uppyDashboardInnerEl = entries[0];
      var _uppyDashboardInnerEl = uppyDashboardInnerEl.contentRect,
          width = _uppyDashboardInnerEl.width,
          height = _uppyDashboardInnerEl.height;

      _this5.uppy.log("[Dashboard] resized: " + width + " / " + height, 'debug');

      _this5.setPluginState({
        containerWidth: width,
        containerHeight: height,
        areInsidesReadyToBeVisible: true
      });
    });
    this.resizeObserver.observe(this.el.querySelector('.uppy-Dashboard-inner')); // If ResizeObserver fails to emit an event telling us what size to use - default to the mobile view

    this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(function () {
      var pluginState = _this5.getPluginState();

      var isModalAndClosed = !_this5.opts.inline && pluginState.isHidden;

      if ( // if ResizeObserver hasn't yet fired,
      !pluginState.areInsidesReadyToBeVisible && // and it's not due to the modal being closed
      !isModalAndClosed) {
        _this5.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout", 'debug');

        _this5.setPluginState({
          areInsidesReadyToBeVisible: true
        });
      }
    }, 1000);
  };

  _proto.stopListeningToResize = function stopListeningToResize() {
    this.resizeObserver.disconnect();
    clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
  } // Records whether we have been interacting with uppy right now, which is then used to determine whether state updates should trigger a refocusing.
  ;

  _proto.recordIfFocusedOnUppyRecently = function recordIfFocusedOnUppyRecently(event) {
    if (this.el.contains(event.target)) {
      this.ifFocusedOnUppyRecently = true;
    } else {
      this.ifFocusedOnUppyRecently = false; // ___Why run this.superFocus.cancel here when it already runs in superFocusOnEachUpdate?
      //    Because superFocus is debounced, when we move from Uppy to some other element on the page,
      //    previously run superFocus sometimes hits and moves focus back to Uppy.

      this.superFocus.cancel();
    }
  };

  _proto.updateBrowserHistory = function updateBrowserHistory() {
    // Ensure history state does not already contain our modal name to avoid double-pushing
    if (!history.state || !history.state[this.modalName]) {
      var _extends2;

      // Push to history so that the page is not lost on browser back button press
      history.pushState(_extends({}, history.state, (_extends2 = {}, _extends2[this.modalName] = true, _extends2)), '');
    } // Listen for back button presses


    window.addEventListener('popstate', this.handlePopState, false);
  };

  _proto.handlePopState = function handlePopState(event) {
    // Close the modal if the history state no longer contains our modal name
    if (this.isModalOpen() && (!event.state || !event.state[this.modalName])) {
      this.closeModal({
        manualClose: false
      });
    } // When the browser back button is pressed and uppy is now the latest entry in the history but the modal is closed, fix the history by removing the uppy history entry
    // This occurs when another entry is added into the history state while the modal is open, and then the modal gets manually closed
    // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)


    if (!this.isModalOpen() && event.state && event.state[this.modalName]) {
      history.go(-1);
    }
  };

  _proto.handleKeyDownInModal = function handleKeyDownInModal(event) {
    // close modal on esc key press
    if (event.keyCode === ESC_KEY) this.requestCloseModal(event); // trap focus on tab key press

    if (event.keyCode === TAB_KEY) trapFocus.forModal(event, this.getPluginState().activeOverlayType, this.el);
  };

  _proto.handleClickOutside = function handleClickOutside() {
    if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
  };

  _proto.handlePaste = function handlePaste(event) {
    // 1. Let any acquirer plugin (Url/Webcam/etc.) handle pastes to the root
    this.uppy.iteratePlugins(function (plugin) {
      if (plugin.type === 'acquirer') {
        // Every Plugin with .type acquirer can define handleRootPaste(event)
        plugin.handleRootPaste && plugin.handleRootPaste(event);
      }
    }); // 2. Add all dropped files

    var files = toArray(event.clipboardData.files);
    this.addFiles(files);
  };

  _proto.handleInputChange = function handleInputChange(event) {
    event.preventDefault();
    var files = toArray(event.target.files);
    this.addFiles(files);
  };

  _proto.handleDragOver = function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation(); // 1. Add a small (+) icon on drop
    // (and prevent browsers from interpreting this as files being _moved_ into the browser, https://github.com/transloadit/uppy/issues/1978)

    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
  };

  _proto.handleDragLeave = function handleDragLeave(event) {
    var _this6 = this;

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout); // Timeout against flickering, this solution is taken from drag-drop library. Solution with 'pointer-events: none' didn't work across browsers.

    this.removeDragOverClassTimeout = setTimeout(function () {
      _this6.setPluginState({
        isDraggingOver: false
      });
    }, 50);
  };

  _proto.handleDrop = function handleDrop(event, dropCategory) {
    var _this7 = this;

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout); // 2. Remove dragover class

    this.setPluginState({
      isDraggingOver: false
    }); // 3. Let any acquirer plugin (Url/Webcam/etc.) handle drops to the root

    this.uppy.iteratePlugins(function (plugin) {
      if (plugin.type === 'acquirer') {
        // Every Plugin with .type acquirer can define handleRootDrop(event)
        plugin.handleRootDrop && plugin.handleRootDrop(event);
      }
    }); // 4. Add all dropped files

    var executedDropErrorOnce = false;

    var logDropError = function logDropError(error) {
      _this7.uppy.log(error, 'error'); // In practice all drop errors are most likely the same, so let's just show one to avoid overwhelming the user


      if (!executedDropErrorOnce) {
        _this7.uppy.info(error.message, 'error');

        executedDropErrorOnce = true;
      }
    };

    getDroppedFiles(event.dataTransfer, {
      logDropError: logDropError
    }).then(function (files) {
      if (files.length > 0) {
        _this7.uppy.log('[Dashboard] Files were dropped');

        _this7.addFiles(files);
      }
    });
  };

  _proto.handleKeyDownInInline = function handleKeyDownInInline(event) {
    // Trap focus on tab key press.
    if (event.keyCode === TAB_KEY) trapFocus.forInline(event, this.getPluginState().activeOverlayType, this.el);
  } // ___Why do we listen to the 'paste' event on a document instead of onPaste={props.handlePaste} prop, or this.el.addEventListener('paste')?
  //    Because (at least) Chrome doesn't handle paste if focus is on some button, e.g. 'My Device'.
  //    => Therefore, the best option is to listen to all 'paste' events, and only react to them when we are focused on our particular Uppy instance.
  // ___Why do we still need onPaste={props.handlePaste} for the DashboardUi?
  //    Because if we click on the 'Drop files here' caption e.g., `document.activeElement` will be 'body'. Which means our standard determination of whether we're pasting into our Uppy instance won't work.
  //    => Therefore, we need a traditional onPaste={props.handlePaste} handler too.
  ;

  _proto.handlePasteOnBody = function handlePasteOnBody(event) {
    var isFocusInOverlay = this.el.contains(document.activeElement);

    if (isFocusInOverlay) {
      this.handlePaste(event);
    }
  };

  _proto.handleComplete = function handleComplete(_ref) {
    var failed = _ref.failed,
        uploadID = _ref.uploadID;

    if (this.opts.closeAfterFinish && failed.length === 0) {
      // All uploads are done
      this.requestCloseModal();
    }
  };

  _proto.initEvents = function initEvents() {
    var _this8 = this;

    // Modal open button
    var showModalTrigger = findAllDOMElements(this.opts.trigger);

    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(function (trigger) {
        return trigger.addEventListener('click', _this8.openModal);
      });
    }

    if (!this.opts.inline && !showModalTrigger) {
      this.uppy.log('Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options unless you are planning to call openModal() method yourself', 'error');
    }

    this.startListeningToResize();
    document.addEventListener('paste', this.handlePasteOnBody);
    this.uppy.on('plugin-remove', this.removeTarget);
    this.uppy.on('file-added', this.hideAllPanels);
    this.uppy.on('dashboard:modal-closed', this.hideAllPanels);
    this.uppy.on('complete', this.handleComplete); // ___Why fire on capture?
    //    Because this.ifFocusedOnUppyRecently needs to change before onUpdate() fires.

    document.addEventListener('focus', this.recordIfFocusedOnUppyRecently, true);
    document.addEventListener('click', this.recordIfFocusedOnUppyRecently, true);

    if (this.opts.inline) {
      this.el.addEventListener('keydown', this.handleKeyDownInInline);
    }
  };

  _proto.removeEvents = function removeEvents() {
    var _this9 = this;

    var showModalTrigger = findAllDOMElements(this.opts.trigger);

    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(function (trigger) {
        return trigger.removeEventListener('click', _this9.openModal);
      });
    }

    this.stopListeningToResize();
    document.removeEventListener('paste', this.handlePasteOnBody);
    window.removeEventListener('popstate', this.handlePopState, false);
    this.uppy.off('plugin-remove', this.removeTarget);
    this.uppy.off('file-added', this.hideAllPanels);
    this.uppy.off('dashboard:modal-closed', this.hideAllPanels);
    this.uppy.off('complete', this.handleComplete);
    document.removeEventListener('focus', this.recordIfFocusedOnUppyRecently);
    document.removeEventListener('click', this.recordIfFocusedOnUppyRecently);

    if (this.opts.inline) {
      this.el.removeEventListener('keydown', this.handleKeyDownInInline);
    }
  };

  _proto.superFocusOnEachUpdate = function superFocusOnEachUpdate() {
    var isFocusInUppy = this.el.contains(document.activeElement); // When focus is lost on the page (== focus is on body for most browsers, or focus is null for IE11)

    var isFocusNowhere = document.activeElement === document.querySelector('body') || document.activeElement === null;
    var isInformerHidden = this.uppy.getState().info.isHidden;
    var isModal = !this.opts.inline;

    if ( // If update is connected to showing the Informer - let the screen reader calmly read it.
    isInformerHidden && ( // If we are in a modal - always superfocus without concern for other elements on the page (user is unlikely to want to interact with the rest of the page)
    isModal || // If we are already inside of Uppy, or
    isFocusInUppy || // If we are not focused on anything BUT we have already, at least once, focused on uppy
    //   1. We focus when isFocusNowhere, because when the element we were focused on disappears (e.g. an overlay), - focus gets lost. If user is typing something somewhere else on the page, - focus won't be 'nowhere'.
    //   2. We only focus when focus is nowhere AND this.ifFocusedOnUppyRecently, to avoid focus jumps if we do something else on the page.
    //   [Practical check] Without '&& this.ifFocusedOnUppyRecently', in Safari, in inline mode, when file is uploading, - navigate via tab to the checkbox, try to press space multiple times. Focus will jump to Uppy.
    isFocusNowhere && this.ifFocusedOnUppyRecently)) {
      this.superFocus(this.el, this.getPluginState().activeOverlayType);
    } else {
      this.superFocus.cancel();
    }
  };

  _proto.afterUpdate = function afterUpdate() {
    this.superFocusOnEachUpdate();
  };

  _proto.render = function render(state) {
    var pluginState = this.getPluginState();
    var files = state.files,
        capabilities = state.capabilities,
        allowNewUpload = state.allowNewUpload; // TODO: move this to Core, to share between Status Bar and Dashboard
    // (and any other plugin that might need it, too)

    var newFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadStarted;
    });
    var uploadStartedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted;
    });
    var pausedFiles = Object.keys(files).filter(function (file) {
      return files[file].isPaused;
    });
    var completeFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadComplete;
    });
    var erroredFiles = Object.keys(files).filter(function (file) {
      return files[file].error;
    });
    var inProgressFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
    });
    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      return !files[file].isPaused;
    });
    var processingFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.preprocess || files[file].progress.postprocess;
    });
    var isUploadStarted = uploadStartedFiles.length > 0;
    var isAllComplete = state.totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
    var isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;
    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;

    var acquirers = this._getAcquirers(pluginState.targets);

    var progressindicators = this._getProgressIndicators(pluginState.targets);

    return DashboardUI({
      state: state,
      isHidden: pluginState.isHidden,
      files: files,
      newFiles: newFiles,
      uploadStartedFiles: uploadStartedFiles,
      completeFiles: completeFiles,
      erroredFiles: erroredFiles,
      inProgressFiles: inProgressFiles,
      inProgressNotPausedFiles: inProgressNotPausedFiles,
      processingFiles: processingFiles,
      isUploadStarted: isUploadStarted,
      isAllComplete: isAllComplete,
      isAllErrored: isAllErrored,
      isAllPaused: isAllPaused,
      totalFileCount: Object.keys(files).length,
      totalProgress: state.totalProgress,
      allowNewUpload: allowNewUpload,
      acquirers: acquirers,
      activePickerPanel: pluginState.activePickerPanel,
      animateOpenClose: this.opts.animateOpenClose,
      isClosing: pluginState.isClosing,
      getPlugin: this.uppy.getPlugin,
      progressindicators: progressindicators,
      autoProceed: this.uppy.opts.autoProceed,
      id: this.id,
      closeModal: this.requestCloseModal,
      handleClickOutside: this.handleClickOutside,
      handleInputChange: this.handleInputChange,
      handlePaste: this.handlePaste,
      inline: this.opts.inline,
      showPanel: this.showPanel,
      hideAllPanels: this.hideAllPanels,
      log: this.uppy.log,
      i18n: this.i18n,
      i18nArray: this.i18nArray,
      removeFile: this.uppy.removeFile,
      info: this.uppy.info,
      note: this.opts.note,
      metaFields: pluginState.metaFields,
      resumableUploads: capabilities.resumableUploads || false,
      individualCancellation: capabilities.individualCancellation,
      pauseUpload: this.uppy.pauseResume,
      retryUpload: this.uppy.retryUpload,
      cancelUpload: this.cancelUpload,
      cancelAll: this.uppy.cancelAll,
      fileCardFor: pluginState.fileCardFor,
      toggleFileCard: this.toggleFileCard,
      toggleAddFilesPanel: this.toggleAddFilesPanel,
      showAddFilesPanel: pluginState.showAddFilesPanel,
      saveFileCard: this.saveFileCard,
      width: this.opts.width,
      height: this.opts.height,
      showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
      proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
      hideCancelButton: this.opts.hideCancelButton,
      containerWidth: pluginState.containerWidth,
      containerHeight: pluginState.containerHeight,
      areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
      isTargetDOMEl: this.isTargetDOMEl,
      parentElement: this.el,
      allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
      maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
      showSelectedFiles: this.opts.showSelectedFiles,
      // drag props
      isDraggingOver: pluginState.isDraggingOver,
      handleDragOver: this.handleDragOver,
      handleDragLeave: this.handleDragLeave,
      handleDrop: this.handleDrop
    });
  };

  _proto.discoverProviderPlugins = function discoverProviderPlugins() {
    var _this10 = this;

    this.uppy.iteratePlugins(function (plugin) {
      if (plugin && !plugin.target && plugin.opts && plugin.opts.target === _this10.constructor) {
        _this10.addTarget(plugin);
      }
    });
  };

  _proto.install = function install() {
    var _this11 = this;

    // Set default state for Dashboard
    this.setPluginState({
      isHidden: true,
      fileCardFor: null,
      activeOverlayType: null,
      showAddFilesPanel: false,
      activePickerPanel: false,
      metaFields: this.opts.metaFields,
      targets: [],
      // We'll make them visible once .containerWidth is determined
      areInsidesReadyToBeVisible: false,
      isDraggingOver: false
    });
    var _this$opts = this.opts,
        inline = _this$opts.inline,
        closeAfterFinish = _this$opts.closeAfterFinish;

    if (inline && closeAfterFinish) {
      throw new Error('[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.');
    }

    var allowMultipleUploads = this.uppy.opts.allowMultipleUploads;

    if (allowMultipleUploads && closeAfterFinish) {
      this.uppy.log('[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true', 'warning');
    }

    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    var plugins = this.opts.plugins || [];
    plugins.forEach(function (pluginID) {
      var plugin = _this11.uppy.getPlugin(pluginID);

      if (plugin) {
        plugin.mount(_this11, plugin);
      }
    });

    if (!this.opts.disableStatusBar) {
      this.uppy.use(StatusBar, {
        id: this.id + ":StatusBar",
        target: this,
        hideUploadButton: this.opts.hideUploadButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        hideCancelButton: this.opts.hideCancelButton,
        showProgressDetails: this.opts.showProgressDetails,
        hideAfterFinish: this.opts.hideProgressAfterFinish,
        locale: this.opts.locale
      });
    }

    if (!this.opts.disableInformer) {
      this.uppy.use(Informer, {
        id: this.id + ":Informer",
        target: this
      });
    }

    if (!this.opts.disableThumbnailGenerator) {
      this.uppy.use(ThumbnailGenerator, {
        id: this.id + ":ThumbnailGenerator",
        thumbnailWidth: this.opts.thumbnailWidth,
        waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload
      });
    }

    this.discoverProviderPlugins();
    this.initEvents();
  };

  _proto.uninstall = function uninstall() {
    var _this12 = this;

    if (!this.opts.disableInformer) {
      var informer = this.uppy.getPlugin(this.id + ":Informer"); // Checking if this plugin exists, in case it was removed by uppy-core
      // before the Dashboard was.

      if (informer) this.uppy.removePlugin(informer);
    }

    if (!this.opts.disableStatusBar) {
      var statusBar = this.uppy.getPlugin(this.id + ":StatusBar");
      if (statusBar) this.uppy.removePlugin(statusBar);
    }

    if (!this.opts.disableThumbnailGenerator) {
      var thumbnail = this.uppy.getPlugin(this.id + ":ThumbnailGenerator");
      if (thumbnail) this.uppy.removePlugin(thumbnail);
    }

    var plugins = this.opts.plugins || [];
    plugins.forEach(function (pluginID) {
      var plugin = _this12.uppy.getPlugin(pluginID);

      if (plugin) plugin.unmount();
    });
    this.unmount();
    this.removeEvents();
  };

  return Dashboard;
}(Plugin), _class.VERSION = "1.6.2", _temp);

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies text to clipboard by creating an almost invisible textarea,
 * adding text there, then running execCommand('copy').
 * Falls back to prompt() when the easy way fails (hello, Safari!)
 * From http://stackoverflow.com/a/30810322
 *
 * @param {string} textToCopy
 * @param {string} fallbackString
 * @returns {Promise}
 */
module.exports = function copyToClipboard(textToCopy, fallbackString) {
  fallbackString = fallbackString || 'Copy the URL below';
  return new Promise(function (resolve) {
    var textArea = document.createElement('textarea');
    textArea.setAttribute('style', {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '2em',
      height: '2em',
      padding: 0,
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      background: 'transparent'
    });
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    var magicCopyFailed = function magicCopyFailed() {
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
    };

    try {
      var successful = document.execCommand('copy');

      if (!successful) {
        return magicCopyFailed('copy command unavailable');
      }

      document.body.removeChild(textArea);
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return magicCopyFailed(err);
    }
  });
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/createSuperFocus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/createSuperFocus.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var FOCUSABLE_ELEMENTS = __webpack_require__(/*! @uppy/utils/lib/FOCUSABLE_ELEMENTS */ "./node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js");

var getActiveOverlayEl = __webpack_require__(/*! ./getActiveOverlayEl */ "./node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js");
/*
  Focuses on some element in the currently topmost overlay.

  1. If there are some [data-uppy-super-focusable] elements rendered already - focuses on the first superfocusable element, and leaves focus up to the control of a user (until currently focused element disappears from the screen [which can happen when overlay changes, or, e.g., when we click on a folder in googledrive]).
  2. If there are no [data-uppy-super-focusable] elements yet (or ever) - focuses on the first focusable element, but switches focus if superfocusable elements appear on next render.
*/


module.exports = function createSuperFocus() {
  var lastFocusWasOnSuperFocusableEl = false;

  var superFocus = function superFocus(dashboardEl, activeOverlayType) {
    var overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    var isFocusInOverlay = overlayEl.contains(document.activeElement); // If focus is already in the topmost overlay, AND on last update we focused on the superfocusable element - then leave focus up to the user.
    // [Practical check] without this line, typing in the search input in googledrive overlay won't work.

    if (isFocusInOverlay && lastFocusWasOnSuperFocusableEl) return;
    var superFocusableEl = overlayEl.querySelector('[data-uppy-super-focusable]'); // If we are already in the topmost overlay, AND there are no super focusable elements yet, - leave focus up to the user.
    // [Practical check] without this line, if you are in an empty folder in google drive, and something's uploading in the bg, - focus will be jumping to Done all the time.

    if (isFocusInOverlay && !superFocusableEl) return;

    if (superFocusableEl) {
      superFocusableEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = true;
    } else {
      var firstEl = overlayEl.querySelector(FOCUSABLE_ELEMENTS);
      firstEl && firstEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = false;
    }
  }; // ___Why do we need to debounce?
  //    1. To deal with animations: overlay changes via animations, which results in the DOM updating AFTER plugin.update() already executed.
  //    [Practical check] without debounce, if we open the Url overlay, and click 'Done', Dashboard won't get focused again.
  //    [Practical check] if we delay 250ms instead of 260ms - IE11 won't get focused in same situation.
  //    2. Performance: there can be many state update()s in a second, and this function is called every time.


  return debounce(superFocus, 260);
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @returns {HTMLElement} - either dashboard element, or the overlay that's most on top
 */
module.exports = function getActiveOverlayEl(dashboardEl, activeOverlayType) {
  if (activeOverlayType) {
    var overlayEl = dashboardEl.querySelector("[data-uppy-paneltype=\"" + activeOverlayType + "\"]"); // if an overlay is already mounted

    if (overlayEl) return overlayEl;
  }

  return dashboardEl;
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../components/icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconFile = _require.iconFile,
    iconText = _require.iconText,
    iconImage = _require.iconImage,
    iconAudio = _require.iconAudio,
    iconVideo = _require.iconVideo,
    iconPDF = _require.iconPDF,
    iconArchive = _require.iconArchive;

module.exports = function getIconByMime(fileType) {
  var defaultChoice = {
    color: '#838999',
    icon: iconFile()
  };
  if (!fileType) return defaultChoice;
  var fileTypeGeneral = fileType.split('/')[0];
  var fileTypeSpecific = fileType.split('/')[1]; // Text

  if (fileTypeGeneral === 'text') {
    return {
      color: '#5a5e69',
      icon: iconText()
    };
  } // Image


  if (fileTypeGeneral === 'image') {
    return {
      color: '#686de0',
      icon: iconImage()
    };
  } // Audio


  if (fileTypeGeneral === 'audio') {
    return {
      color: '#068dbb',
      icon: iconAudio()
    };
  } // Video


  if (fileTypeGeneral === 'video') {
    return {
      color: '#19af67',
      icon: iconVideo()
    };
  } // PDF


  if (fileTypeGeneral === 'application' && fileTypeSpecific === 'pdf') {
    return {
      color: '#e25149',
      icon: iconPDF()
    };
  } // Archive


  var archiveTypes = ['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-gtar', 'x-apple-diskimage', 'x-diskcopy'];

  if (fileTypeGeneral === 'application' && archiveTypes.indexOf(fileTypeSpecific) !== -1) {
    return {
      color: '#00C469',
      icon: iconArchive()
    };
  }

  return defaultChoice;
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ignore drop/paste events if they are not in input or textarea —
// otherwise when Url plugin adds drop/paste listeners to this.el,
// draging UI elements or pasting anything into any field triggers those events —
// Url treats them as URLs that need to be imported
function ignoreEvent(ev) {
  var tagName = ev.target.tagName;

  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    ev.stopPropagation();
    return;
  }

  ev.preventDefault();
  ev.stopPropagation();
}

module.exports = ignoreEvent;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/trapFocus.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/trapFocus.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toArray = __webpack_require__(/*! @uppy/utils/lib/toArray */ "./node_modules/@uppy/utils/lib/toArray.js");

var getActiveOverlayEl = __webpack_require__(/*! ./getActiveOverlayEl */ "./node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js");

var FOCUSABLE_ELEMENTS = __webpack_require__(/*! @uppy/utils/lib//FOCUSABLE_ELEMENTS */ "./node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js");

function focusOnFirstNode(event, nodes) {
  var node = nodes[0];

  if (node) {
    node.focus();
    event.preventDefault();
  }
}

function focusOnLastNode(event, nodes) {
  var node = nodes[nodes.length - 1];

  if (node) {
    node.focus();
    event.preventDefault();
  }
} // ___Why not just use (focusedItemIndex === -1)?
//    Firefox thinks <ul> is focusable, but we don't have <ul>s in our FOCUSABLE_ELEMENTS. Which means that if we tab into the <ul>, code will think that we are not in the active overlay, and we should focusOnFirstNode() of the currently active overlay!
//    [Practical check] if we use (focusedItemIndex === -1), instagram provider in firefox will never get focus on its pics in the <ul>.


function isFocusInOverlay(activeOverlayEl) {
  return activeOverlayEl.contains(document.activeElement);
}

function trapFocus(event, activeOverlayType, dashboardEl) {
  var activeOverlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
  var focusableNodes = toArray(activeOverlayEl.querySelectorAll(FOCUSABLE_ELEMENTS));
  var focusedItemIndex = focusableNodes.indexOf(document.activeElement); // If we pressed tab, and focus is not yet within the current overlay - focus on the first element within the current overlay.
  // This is a safety measure (for when user returns from another tab e.g.), most plugins will try to focus on some important element as it loads.

  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event, focusableNodes); // If we pressed shift + tab, and we're on the first element of a modal
  } else if (event.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event, focusableNodes); // If we pressed tab, and we're on the last element of the modal
  } else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event, focusableNodes);
  }
}

module.exports = {
  // Traps focus inside of the currently open overlay (e.g. Dashboard, or e.g. Instagram), never lets focus disappear from the modal.
  forModal: function forModal(event, activeOverlayType, dashboardEl) {
    trapFocus(event, activeOverlayType, dashboardEl);
  },
  // Traps focus inside of the currently open overlay, unless overlay is null - then let the user tab away.
  forInline: function forInline(event, activeOverlayType, dashboardEl) {
    // ___When we're in the bare 'Drop files here, paste, browse or import from' screen
    if (activeOverlayType === null) {// Do nothing and let the browser handle it, user can tab away from Uppy to other elements on the page
      // ___When there is some overlay with 'Done' button
    } else {
      // Trap the focus inside this overlay!
      // User can close the overlay (click 'Done') if they want to travel away from Uppy.
      trapFocus(event, activeOverlayType, dashboardEl);
    }
  }
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/truncateString.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/truncateString.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Truncates a string to the given number of chars (maxLength) by inserting '...' in the middle of that string.
 * Partially taken from https://stackoverflow.com/a/5723274/3192470.
 *
 * @param {string} string - string to be truncated
 * @param {number} maxLength - maximum size of the resulting string
 * @returns {string}
 */
module.exports = function truncateString(string, maxLength) {
  var separator = '...'; // Return original string if it's already shorter than maxLength

  if (string.length <= maxLength) {
    return string; // Return truncated substring without '...' if string can't be meaningfully truncated
  } else if (maxLength <= separator.length) {
    return string.substr(0, maxLength); // Return truncated string divided in half by '...'
  } else {
    var charsToShow = maxLength - separator.length;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    return string.substr(0, frontChars) + separator + string.substr(string.length - backChars);
  }
};

/***/ }),

/***/ "./node_modules/@uppy/informer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/informer/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require2.h;
/**
 * Informer
 * Shows rad message bubbles
 * used like this: `uppy.info('hello world', 'info', 5000)`
 * or for errors: `uppy.info('Error uploading img.jpg', 'error', 5000)`
 *
 */


module.exports = (_temp = _class =
/*#__PURE__*/
function (_Plugin) {
  _inheritsLoose(Informer, _Plugin);

  function Informer(uppy, opts) {
    var _this;

    _this = _Plugin.call(this, uppy, opts) || this;

    _this.render = function (state) {
      var _state$info = state.info,
          isHidden = _state$info.isHidden,
          message = _state$info.message,
          details = _state$info.details;

      function displayErrorAlert() {
        var errorMessage = message + " \n\n " + details;
        alert(errorMessage);
      }

      var handleMouseOver = function handleMouseOver() {
        clearTimeout(_this.uppy.infoTimeoutID);
      };

      var handleMouseLeave = function handleMouseLeave() {
        _this.uppy.infoTimeoutID = setTimeout(_this.uppy.hideInfo, 2000);
      };

      return h("div", {
        class: "uppy uppy-Informer",
        "aria-hidden": isHidden
      }, h("p", {
        role: "alert"
      }, message, ' ', details && h("span", {
        "aria-label": details,
        "data-microtip-position": "top-left",
        "data-microtip-size": "medium",
        role: "tooltip",
        onclick: displayErrorAlert,
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave
      }, "?")));
    };

    _this.type = 'progressindicator';
    _this.id = _this.opts.id || 'Informer';
    _this.title = 'Informer'; // set default options

    var defaultOptions = {}; // merge default options with the ones set by user

    _this.opts = _extends({}, defaultOptions, opts);
    return _this;
  }

  var _proto = Informer.prototype;

  _proto.install = function install() {
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }
  };

  return Informer;
}(Plugin), _class.VERSION = "1.4.2", _temp);

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/StatusBar.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/StatusBar.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var statusBarStates = __webpack_require__(/*! ./StatusBarStates */ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js");

var prettyBytes = __webpack_require__(/*! @uppy/utils/lib/prettyBytes */ "./node_modules/@uppy/utils/lib/prettyBytes.js");

var prettyETA = __webpack_require__(/*! @uppy/utils/lib/prettyETA */ "./node_modules/@uppy/utils/lib/prettyETA.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

function calculateProcessingProgress(files) {
  // Collect pre or postprocessing progress states.
  var progresses = [];
  Object.keys(files).forEach(function (fileID) {
    var progress = files[fileID].progress;

    if (progress.preprocess) {
      progresses.push(progress.preprocess);
    }

    if (progress.postprocess) {
      progresses.push(progress.postprocess);
    }
  }); // In the future we should probably do this differently. For now we'll take the
  // mode and message from the first file…

  var _progresses$ = progresses[0],
      mode = _progresses$.mode,
      message = _progresses$.message;
  var value = progresses.filter(isDeterminate).reduce(function (total, progress, index, all) {
    return total + progress.value / all.length;
  }, 0);

  function isDeterminate(progress) {
    return progress.mode === 'determinate';
  }

  return {
    mode: mode,
    message: message,
    value: value
  };
}

function togglePauseResume(props) {
  if (props.isAllComplete) return;

  if (!props.resumableUploads) {
    return props.cancelAll();
  }

  if (props.isAllPaused) {
    return props.resumeAll();
  }

  return props.pauseAll();
}

module.exports = function (props) {
  props = props || {};
  var _props = props,
      newFiles = _props.newFiles,
      allowNewUpload = _props.allowNewUpload,
      isUploadInProgress = _props.isUploadInProgress,
      isAllPaused = _props.isAllPaused,
      resumableUploads = _props.resumableUploads,
      error = _props.error,
      hideUploadButton = _props.hideUploadButton,
      hidePauseResumeButton = _props.hidePauseResumeButton,
      hideCancelButton = _props.hideCancelButton,
      hideRetryButton = _props.hideRetryButton;
  var uploadState = props.uploadState;
  var progressValue = props.totalProgress;
  var progressMode;
  var progressBarContent;

  if (uploadState === statusBarStates.STATE_PREPROCESSING || uploadState === statusBarStates.STATE_POSTPROCESSING) {
    var progress = calculateProcessingProgress(props.files);
    progressMode = progress.mode;

    if (progressMode === 'determinate') {
      progressValue = progress.value * 100;
    }

    progressBarContent = ProgressBarProcessing(progress);
  } else if (uploadState === statusBarStates.STATE_COMPLETE) {
    progressBarContent = ProgressBarComplete(props);
  } else if (uploadState === statusBarStates.STATE_UPLOADING) {
    if (!props.supportsUploadProgress) {
      progressMode = 'indeterminate';
      progressValue = null;
    }

    progressBarContent = ProgressBarUploading(props);
  } else if (uploadState === statusBarStates.STATE_ERROR) {
    progressValue = undefined;
    progressBarContent = ProgressBarError(props);
  }

  var width = typeof progressValue === 'number' ? progressValue : 100;
  var isHidden = uploadState === statusBarStates.STATE_WAITING && props.hideUploadButton || uploadState === statusBarStates.STATE_WAITING && !props.newFiles > 0 || uploadState === statusBarStates.STATE_COMPLETE && props.hideAfterFinish;
  var showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
  var showCancelBtn = !hideCancelButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_COMPLETE;
  var showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === statusBarStates.STATE_UPLOADING;
  var showRetryBtn = error && !hideRetryButton;
  var progressClassNames = "uppy-StatusBar-progress\n                           " + (progressMode ? 'is-' + progressMode : '');
  var statusBarClassNames = classNames({
    'uppy-Root': props.isTargetDOMEl
  }, 'uppy-StatusBar', "is-" + uploadState);
  return h("div", {
    class: statusBarClassNames,
    "aria-hidden": isHidden
  }, h("div", {
    class: progressClassNames,
    style: {
      width: width + '%'
    },
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": progressValue
  }), progressBarContent, h("div", {
    class: "uppy-StatusBar-actions"
  }, showUploadBtn ? h(UploadBtn, _extends({}, props, {
    uploadState: uploadState
  })) : null, showRetryBtn ? h(RetryBtn, props) : null, showPauseResumeBtn ? h(PauseResumeButton, props) : null, showCancelBtn ? h(CancelBtn, props) : null));
};

var UploadBtn = function UploadBtn(props) {
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--upload', {
    'uppy-c-btn-primary': props.uploadState === statusBarStates.STATE_WAITING
  });
  return h("button", {
    type: "button",
    class: uploadBtnClassNames,
    "aria-label": props.i18n('uploadXFiles', {
      smart_count: props.newFiles
    }),
    onclick: props.startUpload,
    "data-uppy-super-focusable": true
  }, props.newFiles && props.isUploadStarted ? props.i18n('uploadXNewFiles', {
    smart_count: props.newFiles
  }) : props.i18n('uploadXFiles', {
    smart_count: props.newFiles
  }));
};

var RetryBtn = function RetryBtn(props) {
  return h("button", {
    type: "button",
    class: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": props.i18n('retryUpload'),
    onclick: props.retryAll,
    "data-uppy-super-focusable": true
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, h("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), props.i18n('retry'));
};

var CancelBtn = function CancelBtn(props) {
  return h("button", {
    type: "button",
    class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: props.i18n('cancel'),
    "aria-label": props.i18n('cancel'),
    onclick: props.cancelAll,
    "data-uppy-super-focusable": true
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), h("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
};

var PauseResumeButton = function PauseResumeButton(props) {
  var isAllPaused = props.isAllPaused,
      i18n = props.i18n;
  var title = isAllPaused ? i18n('resume') : i18n('pause');
  return h("button", {
    title: title,
    "aria-label": title,
    class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onclick: function onclick() {
      return togglePauseResume(props);
    },
    "data-uppy-super-focusable": true
  }, isAllPaused ? h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), h("path", {
    fill: "#FFF",
    d: "M6 4.25L11.5 8 6 11.75z"
  }))) : h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), h("path", {
    d: "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z",
    fill: "#FFF"
  }))));
};

var LoadingSpinner = function LoadingSpinner() {
  return h("svg", {
    class: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, h("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    "fill-rule": "evenodd"
  }));
};

var ProgressBarProcessing = function ProgressBarProcessing(props) {
  var value = Math.round(props.value * 100);
  return h("div", {
    class: "uppy-StatusBar-content"
  }, h(LoadingSpinner, null), props.mode === 'determinate' ? value + "% \xB7 " : '', props.message);
};

var renderDot = function renderDot() {
  return " \xB7 ";
};

var ProgressDetails = function ProgressDetails(props) {
  var ifShowFilesUploadedOfTotal = props.numUploads > 1;
  return h("div", {
    class: "uppy-StatusBar-statusSecondary"
  }, ifShowFilesUploadedOfTotal && props.i18n('filesUploadedOfTotal', {
    complete: props.complete,
    smart_count: props.numUploads
  }), h("span", {
    class: "uppy-StatusBar-additionalInfo"
  }, ifShowFilesUploadedOfTotal && renderDot(), props.i18n('dataUploadedOfTotal', {
    complete: prettyBytes(props.totalUploadedSize),
    total: prettyBytes(props.totalSize)
  }), renderDot(), props.i18n('xTimeLeft', {
    time: prettyETA(props.totalETA)
  })));
};

var UnknownProgressDetails = function UnknownProgressDetails(props) {
  return h("div", {
    class: "uppy-StatusBar-statusSecondary"
  }, props.i18n('filesUploadedOfTotal', {
    complete: props.complete,
    smart_count: props.numUploads
  }));
};

var UploadNewlyAddedFiles = function UploadNewlyAddedFiles(props) {
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--uploadNewlyAdded');
  return h("div", {
    class: "uppy-StatusBar-statusSecondary"
  }, h("div", {
    class: "uppy-StatusBar-statusSecondaryHint"
  }, props.i18n('xMoreFilesAdded', {
    smart_count: props.newFiles
  })), h("button", {
    type: "button",
    class: uploadBtnClassNames,
    "aria-label": props.i18n('uploadXFiles', {
      smart_count: props.newFiles
    }),
    onclick: props.startUpload
  }, props.i18n('upload')));
};

var ThrottledProgressDetails = throttle(ProgressDetails, 500, {
  leading: true,
  trailing: true
});

var ProgressBarUploading = function ProgressBarUploading(props) {
  if (!props.isUploadStarted || props.isAllComplete) {
    return null;
  }

  var title = props.isAllPaused ? props.i18n('paused') : props.i18n('uploading');
  var showUploadNewlyAddedFiles = props.newFiles && props.isUploadStarted;
  return h("div", {
    class: "uppy-StatusBar-content",
    "aria-label": title,
    title: title
  }, !props.isAllPaused ? h(LoadingSpinner, null) : null, h("div", {
    class: "uppy-StatusBar-status"
  }, h("div", {
    class: "uppy-StatusBar-statusPrimary"
  }, props.supportsUploadProgress ? title + ": " + props.totalProgress + "%" : title), !props.isAllPaused && !showUploadNewlyAddedFiles && props.showProgressDetails ? props.supportsUploadProgress ? h(ThrottledProgressDetails, props) : h(UnknownProgressDetails, props) : null, showUploadNewlyAddedFiles ? h(UploadNewlyAddedFiles, props) : null));
};

var ProgressBarComplete = function ProgressBarComplete(_ref) {
  var totalProgress = _ref.totalProgress,
      i18n = _ref.i18n;
  return h("div", {
    class: "uppy-StatusBar-content",
    role: "status",
    title: i18n('complete')
  }, h("div", {
    class: "uppy-StatusBar-status"
  }, h("div", {
    class: "uppy-StatusBar-statusPrimary"
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-StatusBar-statusIndicator UppyIcon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, h("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), i18n('complete'))));
};

var ProgressBarError = function ProgressBarError(_ref2) {
  var error = _ref2.error,
      retryAll = _ref2.retryAll,
      hideRetryButton = _ref2.hideRetryButton,
      i18n = _ref2.i18n;

  function displayErrorAlert() {
    var errorMessage = i18n('uploadFailed') + " \n\n " + error;
    alert(errorMessage);
  }

  return h("div", {
    class: "uppy-StatusBar-content",
    role: "alert",
    title: i18n('uploadFailed')
  }, h("div", {
    class: "uppy-StatusBar-status"
  }, h("div", {
    class: "uppy-StatusBar-statusPrimary"
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-StatusBar-statusIndicator UppyIcon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, h("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), i18n('uploadFailed'))), h("span", {
    class: "uppy-StatusBar-details",
    "aria-label": error,
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    role: "tooltip",
    onclick: displayErrorAlert
  }, "?"));
};

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/StatusBarStates.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  STATE_ERROR: 'error',
  STATE_WAITING: 'waiting',
  STATE_PREPROCESSING: 'preprocessing',
  STATE_UPLOADING: 'uploading',
  STATE_POSTPROCESSING: 'postprocessing',
  STATE_COMPLETE: 'complete'
};

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var StatusBarUI = __webpack_require__(/*! ./StatusBar */ "./node_modules/@uppy/status-bar/lib/StatusBar.js");

var statusBarStates = __webpack_require__(/*! ./StatusBarStates */ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js");

var getSpeed = __webpack_require__(/*! @uppy/utils/lib/getSpeed */ "./node_modules/@uppy/utils/lib/getSpeed.js");

var getBytesRemaining = __webpack_require__(/*! @uppy/utils/lib/getBytesRemaining */ "./node_modules/@uppy/utils/lib/getBytesRemaining.js");
/**
 * StatusBar: renders a status bar with upload/pause/resume/cancel/retry buttons,
 * progress percentage and time remaining.
 */


module.exports = (_temp = _class =
/*#__PURE__*/
function (_Plugin) {
  _inheritsLoose(StatusBar, _Plugin);

  function StatusBar(uppy, opts) {
    var _this;

    _this = _Plugin.call(this, uppy, opts) || this;

    _this.startUpload = function () {
      return _this.uppy.upload().catch(function () {// Error logged in Core
      });
    };

    _this.id = _this.opts.id || 'StatusBar';
    _this.title = 'StatusBar';
    _this.type = 'progressindicator';
    _this.defaultLocale = {
      strings: {
        uploading: 'Uploading',
        upload: 'Upload',
        complete: 'Complete',
        uploadFailed: 'Upload failed',
        paused: 'Paused',
        retry: 'Retry',
        cancel: 'Cancel',
        pause: 'Pause',
        resume: 'Resume',
        filesUploadedOfTotal: {
          0: '%{complete} of %{smart_count} file uploaded',
          1: '%{complete} of %{smart_count} files uploaded',
          2: '%{complete} of %{smart_count} files uploaded'
        },
        dataUploadedOfTotal: '%{complete} of %{total}',
        xTimeLeft: '%{time} left',
        uploadXFiles: {
          0: 'Upload %{smart_count} file',
          1: 'Upload %{smart_count} files',
          2: 'Upload %{smart_count} files'
        },
        uploadXNewFiles: {
          0: 'Upload +%{smart_count} file',
          1: 'Upload +%{smart_count} files',
          2: 'Upload +%{smart_count} files'
        },
        xMoreFilesAdded: {
          0: '%{smart_count} more file added',
          1: '%{smart_count} more files added',
          2: '%{smart_count} more files added'
        }
      }
    }; // set default options

    var defaultOptions = {
      target: 'body',
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      showProgressDetails: false,
      hideAfterFinish: true
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.install = _this.install.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = StatusBar.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
  };

  _proto.i18nInit = function i18nInit() {
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState(); // so that UI re-renders and we see the updated locale
  };

  _proto.getTotalSpeed = function getTotalSpeed(files) {
    var totalSpeed = 0;
    files.forEach(function (file) {
      totalSpeed = totalSpeed + getSpeed(file.progress);
    });
    return totalSpeed;
  };

  _proto.getTotalETA = function getTotalETA(files) {
    var totalSpeed = this.getTotalSpeed(files);

    if (totalSpeed === 0) {
      return 0;
    }

    var totalBytesRemaining = files.reduce(function (total, file) {
      return total + getBytesRemaining(file.progress);
    }, 0);
    return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
  };

  _proto.getUploadingState = function getUploadingState(isAllErrored, isAllComplete, files) {
    if (isAllErrored) {
      return statusBarStates.STATE_ERROR;
    }

    if (isAllComplete) {
      return statusBarStates.STATE_COMPLETE;
    }

    var state = statusBarStates.STATE_WAITING;
    var fileIDs = Object.keys(files);

    for (var i = 0; i < fileIDs.length; i++) {
      var progress = files[fileIDs[i]].progress; // If ANY files are being uploaded right now, show the uploading state.

      if (progress.uploadStarted && !progress.uploadComplete) {
        return statusBarStates.STATE_UPLOADING;
      } // If files are being preprocessed AND postprocessed at this time, we show the
      // preprocess state. If any files are being uploaded we show uploading.


      if (progress.preprocess && state !== statusBarStates.STATE_UPLOADING) {
        state = statusBarStates.STATE_PREPROCESSING;
      } // If NO files are being preprocessed or uploaded right now, but some files are
      // being postprocessed, show the postprocess state.


      if (progress.postprocess && state !== statusBarStates.STATE_UPLOADING && state !== statusBarStates.STATE_PREPROCESSING) {
        state = statusBarStates.STATE_POSTPROCESSING;
      }
    }

    return state;
  };

  _proto.render = function render(state) {
    var capabilities = state.capabilities,
        files = state.files,
        allowNewUpload = state.allowNewUpload,
        totalProgress = state.totalProgress,
        error = state.error; // TODO: move this to Core, to share between Status Bar and Dashboard
    // (and any other plugin that might need it, too)

    var filesArray = Object.keys(files).map(function (file) {
      return files[file];
    });
    var newFiles = filesArray.filter(function (file) {
      return !file.progress.uploadStarted && !file.progress.preprocess && !file.progress.postprocess;
    });
    var uploadStartedFiles = filesArray.filter(function (file) {
      return file.progress.uploadStarted;
    });
    var pausedFiles = uploadStartedFiles.filter(function (file) {
      return file.isPaused;
    });
    var completeFiles = filesArray.filter(function (file) {
      return file.progress.uploadComplete;
    });
    var erroredFiles = filesArray.filter(function (file) {
      return file.error;
    });
    var inProgressFiles = filesArray.filter(function (file) {
      return !file.progress.uploadComplete && file.progress.uploadStarted;
    });
    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      return !file.isPaused;
    });
    var startedFiles = filesArray.filter(function (file) {
      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
    });
    var processingFiles = filesArray.filter(function (file) {
      return file.progress.preprocess || file.progress.postprocess;
    });
    var totalETA = this.getTotalETA(inProgressNotPausedFiles);
    var totalSize = 0;
    var totalUploadedSize = 0;
    uploadStartedFiles.forEach(function (file) {
      totalSize = totalSize + (file.progress.bytesTotal || 0);
      totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
    });
    var isUploadStarted = uploadStartedFiles.length > 0;
    var isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
    var isAllErrored = error && erroredFiles.length === filesArray.length;
    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    var isUploadInProgress = inProgressFiles.length > 0;
    var resumableUploads = capabilities.resumableUploads || false;
    var supportsUploadProgress = capabilities.uploadProgress !== false;
    return StatusBarUI({
      error: error,
      uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || {}),
      allowNewUpload: allowNewUpload,
      totalProgress: totalProgress,
      totalSize: totalSize,
      totalUploadedSize: totalUploadedSize,
      isAllComplete: isAllComplete,
      isAllPaused: isAllPaused,
      isAllErrored: isAllErrored,
      isUploadStarted: isUploadStarted,
      isUploadInProgress: isUploadInProgress,
      complete: completeFiles.length,
      newFiles: newFiles.length,
      numUploads: startedFiles.length,
      totalETA: totalETA,
      files: files,
      i18n: this.i18n,
      pauseAll: this.uppy.pauseAll,
      resumeAll: this.uppy.resumeAll,
      retryAll: this.uppy.retryAll,
      cancelAll: this.uppy.cancelAll,
      startUpload: this.startUpload,
      resumableUploads: resumableUploads,
      supportsUploadProgress: supportsUploadProgress,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
  };

  _proto.install = function install() {
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }
  };

  _proto.uninstall = function uninstall() {
    this.unmount();
  };

  return StatusBar;
}(Plugin), _class.VERSION = "1.5.2", _temp);

/***/ }),

/***/ "./node_modules/@uppy/store-default/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/store-default/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Default store that keeps state in a simple object.
 */
var DefaultStore =
/*#__PURE__*/
function () {
  function DefaultStore() {
    this.state = {};
    this.callbacks = [];
  }

  var _proto = DefaultStore.prototype;

  _proto.getState = function getState() {
    return this.state;
  };

  _proto.setState = function setState(patch) {
    var prevState = _extends({}, this.state);

    var nextState = _extends({}, this.state, patch);

    this.state = nextState;

    this._publish(prevState, nextState, patch);
  };

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    this.callbacks.push(listener);
    return function () {
      // Remove the listener.
      _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
    };
  };

  _proto._publish = function _publish() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.callbacks.forEach(function (listener) {
      listener.apply(void 0, args);
    });
  };

  return DefaultStore;
}();

DefaultStore.VERSION = "1.2.1";

module.exports = function defaultStore() {
  return new DefaultStore();
};

/***/ }),

/***/ "./node_modules/@uppy/thumbnail-generator/lib/exif.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/thumbnail-generator/lib/exif.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Adapted from https://github.com/exif-js/exif-js
// Removed XMP and IPTC metadata parsing and EXIF thumbnail generation
// MIT License (c) Jacob Seidelin https://github.com/exif-js/exif-js/blob/master/LICENSE.md
var ExifTags = {
  // version tags
  0x9000: 'ExifVersion',
  // EXIF version
  0xA000: 'FlashpixVersion',
  // Flashpix format version
  // colorspace tags
  0xA001: 'ColorSpace',
  // Color space information tag
  // image configuration
  0xA002: 'PixelXDimension',
  // Valid width of meaningful image
  0xA003: 'PixelYDimension',
  // Valid height of meaningful image
  0x9101: 'ComponentsConfiguration',
  // Information about channels
  0x9102: 'CompressedBitsPerPixel',
  // Compressed bits per pixel
  // user information
  0x927C: 'MakerNote',
  // Any desired information written by the manufacturer
  0x9286: 'UserComment',
  // Comments by user
  // related file
  0xA004: 'RelatedSoundFile',
  // Name of related sound file
  // date and time
  0x9003: 'DateTimeOriginal',
  // Date and time when the original image was generated
  0x9004: 'DateTimeDigitized',
  // Date and time when the image was stored digitally
  0x9290: 'SubsecTime',
  // Fractions of seconds for DateTime
  0x9291: 'SubsecTimeOriginal',
  // Fractions of seconds for DateTimeOriginal
  0x9292: 'SubsecTimeDigitized',
  // Fractions of seconds for DateTimeDigitized
  // picture-taking conditions
  0x829A: 'ExposureTime',
  // Exposure time (in seconds)
  0x829D: 'FNumber',
  // F number
  0x8822: 'ExposureProgram',
  // Exposure program
  0x8824: 'SpectralSensitivity',
  // Spectral sensitivity
  0x8827: 'ISOSpeedRatings',
  // ISO speed rating
  0x8828: 'OECF',
  // Optoelectric conversion factor
  0x9201: 'ShutterSpeedValue',
  // Shutter speed
  0x9202: 'ApertureValue',
  // Lens aperture
  0x9203: 'BrightnessValue',
  // Value of brightness
  0x9204: 'ExposureBias',
  // Exposure bias
  0x9205: 'MaxApertureValue',
  // Smallest F number of lens
  0x9206: 'SubjectDistance',
  // Distance to subject in meters
  0x9207: 'MeteringMode',
  // Metering mode
  0x9208: 'LightSource',
  // Kind of light source
  0x9209: 'Flash',
  // Flash status
  0x9214: 'SubjectArea',
  // Location and area of main subject
  0x920A: 'FocalLength',
  // Focal length of the lens in mm
  0xA20B: 'FlashEnergy',
  // Strobe energy in BCPS
  0xA20C: 'SpatialFrequencyResponse',
  //
  0xA20E: 'FocalPlaneXResolution',
  // Number of pixels in width direction per FocalPlaneResolutionUnit
  0xA20F: 'FocalPlaneYResolution',
  // Number of pixels in height direction per FocalPlaneResolutionUnit
  0xA210: 'FocalPlaneResolutionUnit',
  // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
  0xA214: 'SubjectLocation',
  // Location of subject in image
  0xA215: 'ExposureIndex',
  // Exposure index selected on camera
  0xA217: 'SensingMethod',
  // Image sensor type
  0xA300: 'FileSource',
  // Image source (3 === DSC)
  0xA301: 'SceneType',
  // Scene type (1 === directly photographed)
  0xA302: 'CFAPattern',
  // Color filter array geometric pattern
  0xA401: 'CustomRendered',
  // Special processing
  0xA402: 'ExposureMode',
  // Exposure mode
  0xA403: 'WhiteBalance',
  // 1 = auto white balance, 2 = manual
  0xA404: 'DigitalZoomRation',
  // Digital zoom ratio
  0xA405: 'FocalLengthIn35mmFilm',
  // Equivalent foacl length assuming 35mm film camera (in mm)
  0xA406: 'SceneCaptureType',
  // Type of scene
  0xA407: 'GainControl',
  // Degree of overall image gain adjustment
  0xA408: 'Contrast',
  // Direction of contrast processing applied by camera
  0xA409: 'Saturation',
  // Direction of saturation processing applied by camera
  0xA40A: 'Sharpness',
  // Direction of sharpness processing applied by camera
  0xA40B: 'DeviceSettingDescription',
  //
  0xA40C: 'SubjectDistanceRange',
  // Distance to subject
  // other tags
  0xA005: 'InteroperabilityIFDPointer',
  0xA420: 'ImageUniqueID' // Identifier assigned uniquely to each image

};
var TiffTags = {
  0x0100: 'ImageWidth',
  0x0101: 'ImageHeight',
  0x8769: 'ExifIFDPointer',
  0x8825: 'GPSInfoIFDPointer',
  0xA005: 'InteroperabilityIFDPointer',
  0x0102: 'BitsPerSample',
  0x0103: 'Compression',
  0x0106: 'PhotometricInterpretation',
  0x0112: 'Orientation',
  0x0115: 'SamplesPerPixel',
  0x011C: 'PlanarConfiguration',
  0x0212: 'YCbCrSubSampling',
  0x0213: 'YCbCrPositioning',
  0x011A: 'XResolution',
  0x011B: 'YResolution',
  0x0128: 'ResolutionUnit',
  0x0111: 'StripOffsets',
  0x0116: 'RowsPerStrip',
  0x0117: 'StripByteCounts',
  0x0201: 'JPEGInterchangeFormat',
  0x0202: 'JPEGInterchangeFormatLength',
  0x012D: 'TransferFunction',
  0x013E: 'WhitePoint',
  0x013F: 'PrimaryChromaticities',
  0x0211: 'YCbCrCoefficients',
  0x0214: 'ReferenceBlackWhite',
  0x0132: 'DateTime',
  0x010E: 'ImageDescription',
  0x010F: 'Make',
  0x0110: 'Model',
  0x0131: 'Software',
  0x013B: 'Artist',
  0x8298: 'Copyright'
};
var GPSTags = {
  0x0000: 'GPSVersionID',
  0x0001: 'GPSLatitudeRef',
  0x0002: 'GPSLatitude',
  0x0003: 'GPSLongitudeRef',
  0x0004: 'GPSLongitude',
  0x0005: 'GPSAltitudeRef',
  0x0006: 'GPSAltitude',
  0x0007: 'GPSTimeStamp',
  0x0008: 'GPSSatellites',
  0x0009: 'GPSStatus',
  0x000A: 'GPSMeasureMode',
  0x000B: 'GPSDOP',
  0x000C: 'GPSSpeedRef',
  0x000D: 'GPSSpeed',
  0x000E: 'GPSTrackRef',
  0x000F: 'GPSTrack',
  0x0010: 'GPSImgDirectionRef',
  0x0011: 'GPSImgDirection',
  0x0012: 'GPSMapDatum',
  0x0013: 'GPSDestLatitudeRef',
  0x0014: 'GPSDestLatitude',
  0x0015: 'GPSDestLongitudeRef',
  0x0016: 'GPSDestLongitude',
  0x0017: 'GPSDestBearingRef',
  0x0018: 'GPSDestBearing',
  0x0019: 'GPSDestDistanceRef',
  0x001A: 'GPSDestDistance',
  0x001B: 'GPSProcessingMethod',
  0x001C: 'GPSAreaInformation',
  0x001D: 'GPSDateStamp',
  0x001E: 'GPSDifferential'
};
var StringValues = {
  ExposureProgram: {
    0: 'Not defined',
    1: 'Manual',
    2: 'Normal program',
    3: 'Aperture priority',
    4: 'Shutter priority',
    5: 'Creative program',
    6: 'Action program',
    7: 'Portrait mode',
    8: 'Landscape mode'
  },
  MeteringMode: {
    0: 'Unknown',
    1: 'Average',
    2: 'CenterWeightedAverage',
    3: 'Spot',
    4: 'MultiSpot',
    5: 'Pattern',
    6: 'Partial',
    255: 'Other'
  },
  LightSource: {
    0: 'Unknown',
    1: 'Daylight',
    2: 'Fluorescent',
    3: 'Tungsten (incandescent light)',
    4: 'Flash',
    9: 'Fine weather',
    10: 'Cloudy weather',
    11: 'Shade',
    12: 'Daylight fluorescent (D 5700 - 7100K)',
    13: 'Day white fluorescent (N 4600 - 5400K)',
    14: 'Cool white fluorescent (W 3900 - 4500K)',
    15: 'White fluorescent (WW 3200 - 3700K)',
    17: 'Standard light A',
    18: 'Standard light B',
    19: 'Standard light C',
    20: 'D55',
    21: 'D65',
    22: 'D75',
    23: 'D50',
    24: 'ISO studio tungsten',
    255: 'Other'
  },
  Flash: {
    0x0000: 'Flash did not fire',
    0x0001: 'Flash fired',
    0x0005: 'Strobe return light not detected',
    0x0007: 'Strobe return light detected',
    0x0009: 'Flash fired, compulsory flash mode',
    0x000D: 'Flash fired, compulsory flash mode, return light not detected',
    0x000F: 'Flash fired, compulsory flash mode, return light detected',
    0x0010: 'Flash did not fire, compulsory flash mode',
    0x0018: 'Flash did not fire, auto mode',
    0x0019: 'Flash fired, auto mode',
    0x001D: 'Flash fired, auto mode, return light not detected',
    0x001F: 'Flash fired, auto mode, return light detected',
    0x0020: 'No flash function',
    0x0041: 'Flash fired, red-eye reduction mode',
    0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
    0x0047: 'Flash fired, red-eye reduction mode, return light detected',
    0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
    0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
    0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
    0x0059: 'Flash fired, auto mode, red-eye reduction mode',
    0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
    0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
  },
  SensingMethod: {
    1: 'Not defined',
    2: 'One-chip color area sensor',
    3: 'Two-chip color area sensor',
    4: 'Three-chip color area sensor',
    5: 'Color sequential area sensor',
    7: 'Trilinear sensor',
    8: 'Color sequential linear sensor'
  },
  SceneCaptureType: {
    0: 'Standard',
    1: 'Landscape',
    2: 'Portrait',
    3: 'Night scene'
  },
  SceneType: {
    1: 'Directly photographed'
  },
  CustomRendered: {
    0: 'Normal process',
    1: 'Custom process'
  },
  WhiteBalance: {
    0: 'Auto white balance',
    1: 'Manual white balance'
  },
  GainControl: {
    0: 'None',
    1: 'Low gain up',
    2: 'High gain up',
    3: 'Low gain down',
    4: 'High gain down'
  },
  Contrast: {
    0: 'Normal',
    1: 'Soft',
    2: 'Hard'
  },
  Saturation: {
    0: 'Normal',
    1: 'Low saturation',
    2: 'High saturation'
  },
  Sharpness: {
    0: 'Normal',
    1: 'Soft',
    2: 'Hard'
  },
  SubjectDistanceRange: {
    0: 'Unknown',
    1: 'Macro',
    2: 'Close view',
    3: 'Distant view'
  },
  FileSource: {
    3: 'DSC'
  },
  Components: {
    0: '',
    1: 'Y',
    2: 'Cb',
    3: 'Cr',
    4: 'R',
    5: 'G',
    6: 'B'
  }
};

function imageHasData(img) {
  return !!img.exifdata;
}

function base64ToArrayBuffer(base64, contentType) {
  contentType = contentType || base64.match(/^data:([^;]+);base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'

  base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
  var binary = atob(base64);
  var len = binary.length;
  var buffer = new ArrayBuffer(len); // eslint-disable-next-line compat/compat

  var view = new Uint8Array(buffer);

  for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }

  return buffer;
}

function objectURLToBlob(url, callback) {
  var http = new XMLHttpRequest();
  http.open('GET', url, true);
  http.responseType = 'blob';

  http.onload = function (e) {
    if (this.status === 200 || this.status === 0) {
      callback(this.response);
    }
  };

  http.send();
}

function getImageData(img, callback) {
  function handleBinaryFile(binFile) {
    var data = findEXIFinJPEG(binFile);
    img.exifdata = data || {};

    if (callback) {
      callback.call(img);
    }
  }

  if (img.src) {
    if (/^data:/i.test(img.src)) {
      // Data URI
      var arrayBuffer = base64ToArrayBuffer(img.src);
      handleBinaryFile(arrayBuffer);
    } else if (/^blob:/i.test(img.src)) {
      // Object URL
      var fileReader = new FileReader();

      fileReader.onload = function (e) {
        handleBinaryFile(e.target.result);
      };

      objectURLToBlob(img.src, function (blob) {
        fileReader.readAsArrayBuffer(blob);
      });
    } else {
      var http = new XMLHttpRequest();

      http.onload = function () {
        if (this.status === 200 || this.status === 0) {
          handleBinaryFile(http.response);
        } else {
          throw new Error('Could not load image');
        }

        http = null;
      };

      http.open('GET', img.src, true);
      http.responseType = 'arraybuffer';
      http.send(null);
    }
  } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
    var _fileReader = new FileReader();

    _fileReader.onload = function (e) {
      handleBinaryFile(e.target.result);
    };

    _fileReader.readAsArrayBuffer(img);
  }
}

function findEXIFinJPEG(file) {
  var dataView = new DataView(file);

  if (dataView.getUint8(0) !== 0xFF || dataView.getUint8(1) !== 0xD8) {
    return false; // not a valid jpeg
  }

  var offset = 2;
  var length = file.byteLength;
  var marker;

  while (offset < length) {
    if (dataView.getUint8(offset) !== 0xFF) {
      return false; // not a valid marker, something is wrong
    }

    marker = dataView.getUint8(offset + 1); // we could implement handling for other markers here,
    // but we're only looking for 0xFFE1 for EXIF data

    if (marker === 225) {
      return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);
    } else {
      offset += 2 + dataView.getUint16(offset + 2);
    }
  }
}

function readTags(file, tiffStart, dirStart, strings, bigEnd) {
  var entries = file.getUint16(dirStart, !bigEnd);
  var tags = {};
  var entryOffset;
  var tag;
  var i;

  for (i = 0; i < entries; i++) {
    entryOffset = dirStart + i * 12 + 2;
    tag = strings[file.getUint16(entryOffset, !bigEnd)];
    tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
  }

  return tags;
}

function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
  var type = file.getUint16(entryOffset + 2, !bigEnd);
  var numValues = file.getUint32(entryOffset + 4, !bigEnd);
  var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
  var offset;
  var vals;
  var val;
  var n;
  var numerator;
  var denominator;

  switch (type) {
    case 1: // byte, 8-bit unsigned int

    case 7:
      // undefined, 8-bit byte, value depending on field
      if (numValues === 1) {
        return file.getUint8(entryOffset + 8, !bigEnd);
      } else {
        offset = numValues > 4 ? valueOffset : entryOffset + 8;
        vals = [];

        for (n = 0; n < numValues; n++) {
          vals[n] = file.getUint8(offset + n);
        }

        return vals;
      }

    case 2:
      // ascii, 8-bit byte
      offset = numValues > 4 ? valueOffset : entryOffset + 8;
      return getStringFromDB(file, offset, numValues - 1);

    case 3:
      // short, 16 bit int
      if (numValues === 1) {
        return file.getUint16(entryOffset + 8, !bigEnd);
      } else {
        offset = numValues > 2 ? valueOffset : entryOffset + 8;
        vals = [];

        for (n = 0; n < numValues; n++) {
          vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
        }

        return vals;
      }

    case 4:
      // long, 32 bit int
      if (numValues === 1) {
        return file.getUint32(entryOffset + 8, !bigEnd);
      } else {
        vals = [];

        for (n = 0; n < numValues; n++) {
          vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
        }

        return vals;
      }

    case 5:
      // rational = two long values, first is numerator, second is denominator
      if (numValues === 1) {
        numerator = file.getUint32(valueOffset, !bigEnd);
        denominator = file.getUint32(valueOffset + 4, !bigEnd);
        val = +(numerator / denominator);
        return val;
      } else {
        vals = [];

        for (n = 0; n < numValues; n++) {
          numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
          denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
          vals[n] = +(numerator / denominator);
        }

        return vals;
      }

    case 9:
      // slong, 32 bit signed int
      if (numValues === 1) {
        return file.getInt32(entryOffset + 8, !bigEnd);
      } else {
        vals = [];

        for (n = 0; n < numValues; n++) {
          vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
        }

        return vals;
      }

    case 10:
      // signed rational, two slongs, first is numerator, second is denominator
      if (numValues === 1) {
        return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
      } else {
        vals = [];

        for (n = 0; n < numValues; n++) {
          vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
        }

        return vals;
      }

  }
}

function getStringFromDB(buffer, start, length) {
  var outstr = '';

  for (var n = start; n < start + length; n++) {
    outstr += String.fromCharCode(buffer.getUint8(n));
  }

  return outstr;
}

function readEXIFData(file, start) {
  if (getStringFromDB(file, start, 4) !== 'Exif') {
    return false;
  }

  var bigEnd;
  var tags;
  var tag;
  var exifData;
  var gpsData;
  var tiffOffset = start + 6; // test for TIFF validity and endianness

  if (file.getUint16(tiffOffset) === 0x4949) {
    bigEnd = false;
  } else if (file.getUint16(tiffOffset) === 0x4D4D) {
    bigEnd = true;
  } else {
    return false;
  }

  if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
    return false;
  }

  var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

  if (firstIFDOffset < 0x00000008) {
    return false;
  }

  tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

  if (tags.ExifIFDPointer) {
    exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);

    for (tag in exifData) {
      switch (tag) {
        case 'LightSource':
        case 'Flash':
        case 'MeteringMode':
        case 'ExposureProgram':
        case 'SensingMethod':
        case 'SceneCaptureType':
        case 'SceneType':
        case 'CustomRendered':
        case 'WhiteBalance':
        case 'GainControl':
        case 'Contrast':
        case 'Saturation':
        case 'Sharpness':
        case 'SubjectDistanceRange':
        case 'FileSource':
          exifData[tag] = StringValues[tag][exifData[tag]];
          break;

        case 'ExifVersion':
        case 'FlashpixVersion':
          exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
          break;

        case 'ComponentsConfiguration':
          exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
          break;
      }

      tags[tag] = exifData[tag];
    }
  }

  if (tags.GPSInfoIFDPointer) {
    gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);

    for (tag in gpsData) {
      switch (tag) {
        case 'GPSVersionID':
          gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
          break;
      }

      tags[tag] = gpsData[tag];
    }
  }

  return tags;
}

function getData(img, callback) {
  if ((self.Image && img instanceof self.Image || self.HTMLImageElement && img instanceof self.HTMLImageElement) && !img.complete) {
    return false;
  }

  if (!imageHasData(img)) {
    getImageData(img, callback);
  } else {
    if (callback) {
      callback.call(img);
    }
  }

  return true;
}

function getTag(img, tag) {
  if (!imageHasData(img)) return;
  return img.exifdata[tag];
}

function getAllTags(img) {
  if (!imageHasData(img)) return {};
  return img.exifdata;
}

module.exports = {
  getAllTags: getAllTags,
  getData: getData,
  getTag: getTag
};

/***/ }),

/***/ "./node_modules/@uppy/thumbnail-generator/lib/image-orientations.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uppy/thumbnail-generator/lib/image-orientations.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ORIENTATIONS = {
  1: {
    rotation: 0,
    xScale: 1,
    yScale: 1
  },
  2: {
    rotation: 0,
    xScale: -1,
    yScale: 1
  },
  3: {
    rotation: 180,
    xScale: 1,
    yScale: 1
  },
  4: {
    rotation: 180,
    xScale: -1,
    yScale: 1
  },
  5: {
    rotation: 90,
    xScale: 1,
    yScale: -1
  },
  6: {
    rotation: 90,
    xScale: 1,
    yScale: 1
  },
  7: {
    rotation: 270,
    xScale: 1,
    yScale: -1
  },
  8: {
    rotation: 270,
    xScale: 1,
    yScale: 1
  }
};
module.exports = ORIENTATIONS;

/***/ }),

/***/ "./node_modules/@uppy/thumbnail-generator/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/thumbnail-generator/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var dataURItoBlob = __webpack_require__(/*! @uppy/utils/lib/dataURItoBlob */ "./node_modules/@uppy/utils/lib/dataURItoBlob.js");

var isObjectURL = __webpack_require__(/*! @uppy/utils/lib/isObjectURL */ "./node_modules/@uppy/utils/lib/isObjectURL.js");

var isPreviewSupported = __webpack_require__(/*! @uppy/utils/lib/isPreviewSupported */ "./node_modules/@uppy/utils/lib/isPreviewSupported.js");

var ORIENTATIONS = __webpack_require__(/*! ./image-orientations */ "./node_modules/@uppy/thumbnail-generator/lib/image-orientations.js");

var Exif = __webpack_require__(/*! ./exif */ "./node_modules/@uppy/thumbnail-generator/lib/exif.js");
/**
 * The Thumbnail Generator plugin
 */


module.exports = (_temp = _class =
/*#__PURE__*/
function (_Plugin) {
  _inheritsLoose(ThumbnailGenerator, _Plugin);

  function ThumbnailGenerator(uppy, opts) {
    var _this;

    _this = _Plugin.call(this, uppy, opts) || this;

    _this.onFileAdded = function (file) {
      if (!file.preview && isPreviewSupported(file.type) && !file.isRemote) {
        _this.addToQueue(file);
      }
    };

    _this.onFileRemoved = function (file) {
      var index = _this.queue.indexOf(file);

      if (index !== -1) {
        _this.queue.splice(index, 1);
      } // Clean up object URLs.


      if (file.preview && isObjectURL(file.preview)) {
        URL.revokeObjectURL(file.preview);
      }
    };

    _this.onRestored = function () {
      var _this$uppy$getState = _this.uppy.getState(),
          files = _this$uppy$getState.files;

      var fileIDs = Object.keys(files);
      fileIDs.forEach(function (fileID) {
        var file = _this.uppy.getFile(fileID);

        if (!file.isRestored) return; // Only add blob URLs; they are likely invalid after being restored.

        if (!file.preview || isObjectURL(file.preview)) {
          _this.addToQueue(file);
        }
      });
    };

    _this.waitUntilAllProcessed = function (fileIDs) {
      fileIDs.forEach(function (fileID) {
        var file = _this.uppy.getFile(fileID);

        _this.uppy.emit('preprocess-progress', file, {
          mode: 'indeterminate',
          message: _this.i18n('generatingThumbnails')
        });
      });

      var emitPreprocessCompleteForAll = function emitPreprocessCompleteForAll() {
        fileIDs.forEach(function (fileID) {
          var file = _this.uppy.getFile(fileID);

          _this.uppy.emit('preprocess-complete', file);
        });
      };

      return new Promise(function (resolve, reject) {
        if (_this.queueProcessing) {
          _this.uppy.once('thumbnail:all-generated', function () {
            emitPreprocessCompleteForAll();
            resolve();
          });
        } else {
          emitPreprocessCompleteForAll();
          resolve();
        }
      });
    };

    _this.type = 'modifier';
    _this.id = _this.opts.id || 'ThumbnailGenerator';
    _this.title = 'Thumbnail Generator';
    _this.queue = [];
    _this.queueProcessing = false;
    _this.defaultThumbnailDimension = 200;
    _this.defaultLocale = {
      strings: {
        generatingThumbnails: 'Generating thumbnails...'
      }
    };
    var defaultOptions = {
      thumbnailWidth: null,
      thumbnailHeight: null,
      waitForThumbnailsBeforeUpload: false
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    return _this;
  }

  var _proto = ThumbnailGenerator.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
  };

  _proto.i18nInit = function i18nInit() {
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState(); // so that UI re-renders and we see the updated locale
  }
  /**
   * Create a thumbnail for the given Uppy file object.
   *
   * @param {{data: Blob}} file
   * @param {number} targetWidth
   * @param {number} targetHeight
   * @returns {Promise}
   */
  ;

  _proto.createThumbnail = function createThumbnail(file, targetWidth, targetHeight) {
    var _this2 = this;

    var originalUrl = URL.createObjectURL(file.data);
    var onload = new Promise(function (resolve, reject) {
      var image = new Image();
      image.src = originalUrl;
      image.addEventListener('load', function () {
        URL.revokeObjectURL(originalUrl);
        resolve(image);
      });
      image.addEventListener('error', function (event) {
        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error('Could not create thumbnail'));
      });
    });
    return Promise.all([onload, this.getOrientation(file)]).then(function (values) {
      var image = values[0];
      var orientation = values[1];

      var dimensions = _this2.getProportionalDimensions(image, targetWidth, targetHeight, orientation.rotation);

      var rotatedImage = _this2.rotateImage(image, orientation);

      var resizedImage = _this2.resizeImage(rotatedImage, dimensions.width, dimensions.height);

      return _this2.canvasToBlob(resizedImage, 'image/png');
    }).then(function (blob) {
      return URL.createObjectURL(blob);
    });
  }
  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */
  ;

  _proto.getProportionalDimensions = function getProportionalDimensions(img, width, height, rotation) {
    var aspect = img.width / img.height;

    if (rotation === 90 || rotation === 270) {
      aspect = img.height / img.width;
    }

    if (width != null) {
      return {
        width: width,
        height: Math.round(width / aspect)
      };
    }

    if (height != null) {
      return {
        width: Math.round(height * aspect),
        height: height
      };
    }

    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
  };

  _proto.getOrientation = function getOrientation(file) {
    var _this3 = this;

    return new Promise(function (resolve) {
      var uppy = _this3.uppy;
      Exif.getData(file.data, function exifGetDataCallback() {
        uppy.setFileMeta(file.id, {
          exifdata: Exif.getAllTags(this)
        });
        var orientation = Exif.getTag(this, 'Orientation') || 1;
        resolve(ORIENTATIONS[orientation]);
      });
    });
  }
  /**
   * Make sure the image doesn’t exceed browser/device canvas limits.
   * For ios with 256 RAM and ie
   */
  ;

  _proto.protect = function protect(image) {
    // https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element
    var ratio = image.width / image.height;
    var maxSquare = 5000000; // ios max canvas square

    var maxSize = 4096; // ie max canvas dimensions

    var maxW = Math.floor(Math.sqrt(maxSquare * ratio));
    var maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));

    if (maxW > maxSize) {
      maxW = maxSize;
      maxH = Math.round(maxW / ratio);
    }

    if (maxH > maxSize) {
      maxH = maxSize;
      maxW = Math.round(ratio * maxH);
    }

    if (image.width > maxW) {
      var canvas = document.createElement('canvas');
      canvas.width = maxW;
      canvas.height = maxH;
      canvas.getContext('2d').drawImage(image, 0, 0, maxW, maxH);
      image = canvas;
    }

    return image;
  }
  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */
  ;

  _proto.resizeImage = function resizeImage(image, targetWidth, targetHeight) {
    // Resizing in steps refactored to use a solution from
    // https://blog.uploadcare.com/image-resize-in-browsers-is-broken-e38eed08df01
    image = this.protect(image); // Use the Polyfill for Math.log2() since IE doesn't support log2
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2#Polyfill

    var steps = Math.ceil(Math.log(image.width / targetWidth) * Math.LOG2E);

    if (steps < 1) {
      steps = 1;
    }

    var sW = targetWidth * Math.pow(2, steps - 1);
    var sH = targetHeight * Math.pow(2, steps - 1);
    var x = 2;

    while (steps--) {
      var canvas = document.createElement('canvas');
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext('2d').drawImage(image, 0, 0, sW, sH);
      image = canvas;
      sW = Math.round(sW / x);
      sH = Math.round(sH / x);
    }

    return image;
  };

  _proto.rotateImage = function rotateImage(image, translate) {
    var w = image.width;
    var h = image.height;

    if (translate.rotation === 90 || translate.rotation === 270) {
      w = image.height;
      h = image.width;
    }

    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var context = canvas.getContext('2d');
    context.translate(w / 2, h / 2);
    context.rotate(translate.rotation * Math.PI / 180);
    context.scale(translate.xScale, translate.yScale);
    context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
    return canvas;
  }
  /**
   * Save a <canvas> element's content to a Blob object.
   *
   * @param {HTMLCanvasElement} canvas
   * @returns {Promise}
   */
  ;

  _proto.canvasToBlob = function canvasToBlob(canvas, type, quality) {
    try {
      canvas.getContext('2d').getImageData(0, 0, 1, 1);
    } catch (err) {
      if (err.code === 18) {
        return Promise.reject(new Error('cannot read image, probably an svg with external resources'));
      }
    }

    if (canvas.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(resolve, type, quality);
      }).then(function (blob) {
        if (blob === null) {
          throw new Error('cannot read image, probably an svg with external resources');
        }

        return blob;
      });
    }

    return Promise.resolve().then(function () {
      return dataURItoBlob(canvas.toDataURL(type, quality), {});
    }).then(function (blob) {
      if (blob === null) {
        throw new Error('could not extract blob, probably an old browser');
      }

      return blob;
    });
  }
  /**
   * Set the preview URL for a file.
   */
  ;

  _proto.setPreviewURL = function setPreviewURL(fileID, preview) {
    this.uppy.setFileState(fileID, {
      preview: preview
    });
  };

  _proto.addToQueue = function addToQueue(item) {
    this.queue.push(item);

    if (this.queueProcessing === false) {
      this.processQueue();
    }
  };

  _proto.processQueue = function processQueue() {
    var _this4 = this;

    this.queueProcessing = true;

    if (this.queue.length > 0) {
      var current = this.queue.shift();
      return this.requestThumbnail(current).catch(function (err) {}) // eslint-disable-line handle-callback-err
      .then(function () {
        return _this4.processQueue();
      });
    } else {
      this.queueProcessing = false;
      this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
      this.uppy.emit('thumbnail:all-generated');
    }
  };

  _proto.requestThumbnail = function requestThumbnail(file) {
    var _this5 = this;

    if (isPreviewSupported(file.type) && !file.isRemote) {
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (preview) {
        _this5.setPreviewURL(file.id, preview);

        _this5.uppy.log("[ThumbnailGenerator] Generated thumbnail for " + file.id);

        _this5.uppy.emit('thumbnail:generated', _this5.uppy.getFile(file.id), preview);
      }).catch(function (err) {
        _this5.uppy.log("[ThumbnailGenerator] Failed thumbnail for " + file.id + ":", 'warning');

        _this5.uppy.log(err, 'warning');

        _this5.uppy.emit('thumbnail:error', _this5.uppy.getFile(file.id), err);
      });
    }

    return Promise.resolve();
  };

  _proto.install = function install() {
    this.uppy.on('file-removed', this.onFileRemoved);
    this.uppy.on('file-added', this.onFileAdded);
    this.uppy.on('restored', this.onRestored);

    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.addPreProcessor(this.waitUntilAllProcessed);
    }
  };

  _proto.uninstall = function uninstall() {
    this.uppy.off('file-removed', this.onFileRemoved);
    this.uppy.off('file-added', this.onFileAdded);
    this.uppy.off('restored', this.onRestored);

    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.removePreProcessor(this.waitUntilAllProcessed);
    }
  };

  return ThumbnailGenerator;
}(Plugin), _class.VERSION = "1.5.5", _temp);

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/EventTracker.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/EventTracker.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Create a wrapper around an event emitter with a `remove` method to remove
 * all events that were added using the wrapped emitter.
 */
module.exports =
/*#__PURE__*/
function () {
  function EventTracker(emitter) {
    this._events = [];
    this._emitter = emitter;
  }

  var _proto = EventTracker.prototype;

  _proto.on = function on(event, fn) {
    this._events.push([event, fn]);

    return this._emitter.on(event, fn);
  };

  _proto.remove = function remove() {
    var _this = this;

    this._events.forEach(function (_ref) {
      var event = _ref[0],
          fn = _ref[1];

      _this._emitter.off(event, fn);
    });
  };

  return EventTracker;
}();

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'input:not([disabled]):not([inert]):not([aria-hidden])', 'select:not([disabled]):not([inert]):not([aria-hidden])', 'textarea:not([disabled]):not([inert]):not([aria-hidden])', 'button:not([disabled]):not([inert]):not([aria-hidden])', 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/ProgressTimeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/ProgressTimeout.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper to abort upload requests if there has not been any progress for `timeout` ms.
 * Create an instance using `timer = new ProgressTimeout(10000, onTimeout)`
 * Call `timer.progress()` to signal that there has been progress of any kind.
 * Call `timer.done()` when the upload has completed.
 */
var ProgressTimeout =
/*#__PURE__*/
function () {
  function ProgressTimeout(timeout, timeoutHandler) {
    this._timeout = timeout;
    this._onTimedOut = timeoutHandler;
    this._isDone = false;
    this._aliveTimer = null;
    this._onTimedOut = this._onTimedOut.bind(this);
  }

  var _proto = ProgressTimeout.prototype;

  _proto.progress = function progress() {
    // Some browsers fire another progress event when the upload is
    // cancelled, so we have to ignore progress after the timer was
    // told to stop.
    if (this._isDone) return;

    if (this._timeout > 0) {
      if (this._aliveTimer) clearTimeout(this._aliveTimer);
      this._aliveTimer = setTimeout(this._onTimedOut, this._timeout);
    }
  };

  _proto.done = function done() {
    if (this._aliveTimer) {
      clearTimeout(this._aliveTimer);
      this._aliveTimer = null;
    }

    this._isDone = true;
  };

  return ProgressTimeout;
}();

module.exports = ProgressTimeout;

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/RateLimitedQueue.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/RateLimitedQueue.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/*#__PURE__*/
function () {
  function RateLimitedQueue(limit) {
    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }

    this.activeRequests = 0;
    this.queuedHandlers = [];
  }

  var _proto = RateLimitedQueue.prototype;

  _proto._call = function _call(fn) {
    var _this = this;

    this.activeRequests += 1;
    var _done = false;
    var cancelActive;

    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
      throw err;
    }

    return {
      abort: function abort() {
        if (_done) return;
        _done = true;
        _this.activeRequests -= 1;
        cancelActive();

        _this._queueNext();
      },
      done: function done() {
        if (_done) return;
        _done = true;
        _this.activeRequests -= 1;

        _this._queueNext();
      }
    };
  };

  _proto._queueNext = function _queueNext() {
    var _this2 = this;

    // Do it soon but not immediately, this allows clearing out the entire queue synchronously
    // one by one without continuously _advancing_ it (and starting new tasks before immediately
    // aborting them)
    Promise.resolve().then(function () {
      _this2._next();
    });
  };

  _proto._next = function _next() {
    if (this.activeRequests >= this.limit) {
      return;
    }

    if (this.queuedHandlers.length === 0) {
      return;
    } // Dispatch the next request, and update the abort/done handlers
    // so that cancelling it does the Right Thing (and doesn't just try
    // to dequeue an already-running request).


    var next = this.queuedHandlers.shift();

    var handler = this._call(next.fn);

    next.abort = handler.abort;
    next.done = handler.done;
  };

  _proto._queue = function _queue(fn) {
    var _this3 = this;

    var handler = {
      fn: fn,
      abort: function abort() {
        _this3._dequeue(handler);
      },
      done: function done() {
        throw new Error('Cannot mark a queued request as done: this indicates a bug');
      }
    };
    this.queuedHandlers.push(handler);
    return handler;
  };

  _proto._dequeue = function _dequeue(handler) {
    var index = this.queuedHandlers.indexOf(handler);

    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }
  };

  _proto.run = function run(fn) {
    if (this.activeRequests < this.limit) {
      return this._call(fn);
    }

    return this._queue(fn);
  };

  _proto.wrapPromiseFunction = function wrapPromiseFunction(fn) {
    var _this4 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        var queuedRequest = _this4.run(function () {
          var cancelError;
          var promise;

          try {
            promise = Promise.resolve(fn.apply(void 0, args));
          } catch (err) {
            promise = Promise.reject(err);
          }

          promise.then(function (result) {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
          }, function (err) {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
          });
          return function () {
            cancelError = new Error('Cancelled');
          };
        });
      });
    };
  };

  return RateLimitedQueue;
}();

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/Translator.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/Translator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var has = __webpack_require__(/*! ./hasProperty */ "./node_modules/@uppy/utils/lib/hasProperty.js");
/**
 * Translates strings with interpolation & pluralization support.
 * Extensible with custom dictionaries and pluralization functions.
 *
 * Borrows heavily from and inspired by Polyglot https://github.com/airbnb/polyglot.js,
 * basically a stripped-down version of it. Differences: pluralization functions are not hardcoded
 * and can be easily added among with dictionaries, nested objects are used for pluralization
 * as opposed to `||||` delimeter
 *
 * Usage example: `translator.translate('files_chosen', {smart_count: 3})`
 */


module.exports =
/*#__PURE__*/
function () {
  /**
   * @param {object|Array<object>} locales - locale or list of locales.
   */
  function Translator(locales) {
    var _this = this;

    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
        if (n === 1) {
          return 0;
        }

        return 1;
      }
    };

    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
        return _this._apply(locale);
      });
    } else {
      this._apply(locales);
    }
  }

  var _proto = Translator.prototype;

  _proto._apply = function _apply(locale) {
    if (!locale || !locale.strings) {
      return;
    }

    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
  }
  /**
   * Takes a string with placeholder variables like `%{smart_count} file selected`
   * and replaces it with values from options `{smart_count: 5}`
   *
   * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
   * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
   *
   * @param {string} phrase that needs interpolation, with placeholders
   * @param {object} options with values that will be used to replace placeholders
   * @returns {string} interpolated
   */
  ;

  _proto.interpolate = function interpolate(phrase, options) {
    var _String$prototype = String.prototype,
        split = _String$prototype.split,
        replace = _String$prototype.replace;
    var dollarRegex = /\$/g;
    var dollarBillsYall = '$$$$';
    var interpolated = [phrase];

    for (var arg in options) {
      if (arg !== '_' && has(options, arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];

        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        } // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.


        interpolated = insertReplacement(interpolated, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }

    return interpolated;

    function insertReplacement(source, rx, replacement) {
      var newParts = [];
      source.forEach(function (chunk) {
        split.call(chunk, rx).forEach(function (raw, i, list) {
          if (raw !== '') {
            newParts.push(raw);
          } // Interlace with the `replacement` value


          if (i < list.length - 1) {
            newParts.push(replacement);
          }
        });
      });
      return newParts;
    }
  }
  /**
   * Public translate method
   *
   * @param {string} key
   * @param {object} options with values that will be used later to replace placeholders in string
   * @returns {string} translated (and interpolated)
   */
  ;

  _proto.translate = function translate(key, options) {
    return this.translateArray(key, options).join('');
  }
  /**
   * Get a translation and return the translated and interpolated parts as an array.
   *
   * @param {string} key
   * @param {object} options with values that will be used to replace placeholders
   * @returns {Array} The translated and interpolated parts, in order.
   */
  ;

  _proto.translateArray = function translateArray(key, options) {
    if (options && typeof options.smart_count !== 'undefined') {
      var plural = this.locale.pluralize(options.smart_count);
      return this.interpolate(this.locale.strings[key][plural], options);
    }

    return this.interpolate(this.locale.strings[key], options);
  };

  return Translator;
}();

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/dataURItoBlob.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/dataURItoBlob.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
  // get the base64 data
  var data = dataURI.split(',')[1]; // user may provide mime type, if not get it from data URI

  var mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0]; // default to plain/text if data URI has no mimeType

  if (mimeType == null) {
    mimeType = 'plain/text';
  }

  var binary = atob(data);
  var array = [];

  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  var bytes;

  try {
    bytes = new Uint8Array(array); // eslint-disable-line compat/compat
  } catch (err) {
    return null;
  } // Convert to a File?


  if (toFile) {
    return new File([bytes], opts.name || '', {
      type: mimeType
    });
  }

  return new Blob([bytes], {
    type: mimeType
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/emitSocketProgress.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/emitSocketProgress.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

function _emitSocketProgress(uploader, progressData, file) {
  var progress = progressData.progress,
      bytesUploaded = progressData.bytesUploaded,
      bytesTotal = progressData.bytesTotal;

  if (progress) {
    uploader.uppy.log("Upload progress: " + progress);
    uploader.uppy.emit('upload-progress', file, {
      uploader: uploader,
      bytesUploaded: bytesUploaded,
      bytesTotal: bytesTotal
    });
  }
}

module.exports = throttle(_emitSocketProgress, 300, {
  leading: true,
  trailing: true
});

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/findAllDOMElements.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/findAllDOMElements.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDOMElement = __webpack_require__(/*! ./isDOMElement */ "./node_modules/@uppy/utils/lib/isDOMElement.js");
/**
 * Find one or more DOM elements.
 *
 * @param {string} element
 * @returns {Array|null}
 */


module.exports = function findAllDOMElements(element) {
  if (typeof element === 'string') {
    var elements = [].slice.call(document.querySelectorAll(element));
    return elements.length > 0 ? elements : null;
  }

  if (typeof element === 'object' && isDOMElement(element)) {
    return [element];
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/findDOMElement.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/findDOMElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDOMElement = __webpack_require__(/*! ./isDOMElement */ "./node_modules/@uppy/utils/lib/isDOMElement.js");
/**
 * Find a DOM element.
 *
 * @param {Node|string} element
 * @returns {Node|null}
 */


module.exports = function findDOMElement(element, context) {
  if (context === void 0) {
    context = document;
  }

  if (typeof element === 'string') {
    return context.querySelector(element);
  }

  if (typeof element === 'object' && isDOMElement(element)) {
    return element;
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/generateFileID.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/generateFileID.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Takes a file object and turns it into fileID, by converting file.name to lowercase,
 * removing extra characters and adding type, size and lastModified
 *
 * @param {object} file
 * @returns {string} the fileID
 */
module.exports = function generateFileID(file) {
  // It's tempting to do `[items].filter(Boolean).join('-')` here, but that
  // is slower! simple string concatenation is fast
  var id = 'uppy';

  if (typeof file.name === 'string') {
    id += '-' + encodeFilename(file.name.toLowerCase());
  }

  if (file.type !== undefined) {
    id += '-' + file.type;
  }

  if (file.meta && typeof file.meta.relativePath === 'string') {
    id += '-' + encodeFilename(file.meta.relativePath.toLowerCase());
  }

  if (file.data.size !== undefined) {
    id += '-' + file.data.size;
  }

  if (file.data.lastModified !== undefined) {
    id += '-' + file.data.lastModified;
  }

  return id;
};

function encodeFilename(name) {
  var suffix = '';
  return name.replace(/[^A-Z0-9]/ig, function (character) {
    suffix += '-' + encodeCharacter(character);
    return '/';
  }) + suffix;
}

function encodeCharacter(character) {
  return character.charCodeAt(0).toString(32);
}

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getBytesRemaining.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getBytesRemaining.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getBytesRemaining(fileProgress) {
  return fileProgress.bytesTotal - fileProgress.bytesUploaded;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var webkitGetAsEntryApi = __webpack_require__(/*! ./utils/webkitGetAsEntryApi/index */ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js");

var fallbackApi = __webpack_require__(/*! ./utils/fallbackApi */ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js");
/**
 * Returns a promise that resolves to the array of dropped files (if a folder is dropped, and browser supports folder parsing - promise resolves to the flat array of all files in all directories).
 * Each file has .relativePath prop appended to it (e.g. "/docs/Prague/ticket_from_prague_to_ufa.pdf") if browser supports it. Otherwise it's undefined.
 *
 * @param {DataTransfer} dataTransfer
 * @param {Function} logDropError - a function that's called every time some folder or some file error out (e.g. because of the folder name being too long on Windows). Notice that resulting promise will always be resolved anyway.
 *
 * @returns {Promise} - Array<File>
 */


module.exports = function getDroppedFiles(dataTransfer, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$logDropError = _ref.logDropError,
      logDropError = _ref$logDropError === void 0 ? function () {} : _ref$logDropError;

  // Get all files from all subdirs. Works (at least) in Chrome, Mozilla, and Safari
  if (dataTransfer.items && dataTransfer.items[0] && 'webkitGetAsEntry' in dataTransfer.items[0]) {
    return webkitGetAsEntryApi(dataTransfer, logDropError); // Otherwise just return all first-order files
  } else {
    return fallbackApi(dataTransfer);
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toArray = __webpack_require__(/*! ../../toArray */ "./node_modules/@uppy/utils/lib/toArray.js"); // .files fallback, should be implemented in any browser


module.exports = function fallbackApi(dataTransfer) {
  var files = toArray(dataTransfer.files);
  return Promise.resolve(files);
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Recursive function, calls the original callback() when the directory is entirely parsed.
 *
 * @param {FileSystemDirectoryReader} directoryReader
 * @param {Array} oldEntries
 * @param {Function} logDropError
 * @param {Function} callback - called with ([ all files and directories in that directoryReader ])
 */
module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  var onSuccess = _ref.onSuccess;
  directoryReader.readEntries(function (entries) {
    var newEntries = [].concat(oldEntries, entries); // According to the FileSystem API spec, getFilesAndDirectoriesFromDirectory() must be called until it calls the onSuccess with an empty array.

    if (entries.length) {
      setTimeout(function () {
        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess: onSuccess
        });
      }, 0); // Done iterating this particular directory
    } else {
      onSuccess(newEntries);
    }
  }, // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
  function (error) {
    logDropError(error);
    onSuccess(oldEntries);
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getRelativePath.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getRelativePath.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Get the relative path from the FileEntry#fullPath, because File#webkitRelativePath is always '', at least onDrop.
 *
 * @param {FileEntry} fileEntry
 *
 * @returns {string|null} - if file is not in a folder - return null (this is to be consistent with .relativePath-s of files selected from My Device). If file is in a folder - return its fullPath, e.g. '/simpsons/hi.jpeg'.
 */
module.exports = function getRelativePath(fileEntry) {
  // fileEntry.fullPath - "/simpsons/hi.jpeg" or undefined (for browsers that don't support it)
  // fileEntry.name - "hi.jpeg"
  if (!fileEntry.fullPath || fileEntry.fullPath === '/' + fileEntry.name) {
    return null;
  } else {
    return fileEntry.fullPath;
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toArray = __webpack_require__(/*! ../../../toArray */ "./node_modules/@uppy/utils/lib/toArray.js");

var getRelativePath = __webpack_require__(/*! ./getRelativePath */ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getRelativePath.js");

var getFilesAndDirectoriesFromDirectory = __webpack_require__(/*! ./getFilesAndDirectoriesFromDirectory */ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js");

module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
  var files = [];
  var rootPromises = [];
  /**
   * Returns a resolved promise, when :files array is enhanced
   *
   * @param {(FileSystemFileEntry|FileSystemDirectoryEntry)} entry
   * @returns {Promise} - empty promise that resolves when :files is enhanced with a file
   */

  var createPromiseToAddFileOrParseDirectory = function createPromiseToAddFileOrParseDirectory(entry) {
    return new Promise(function (resolve) {
      // This is a base call
      if (entry.isFile) {
        // Creates a new File object which can be used to read the file.
        entry.file(function (file) {
          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
        }, // Make sure we resolve on error anyway, it's fine if only one file couldn't be read!
        function (error) {
          logDropError(error);
          resolve();
        }); // This is a recursive call
      } else if (entry.isDirectory) {
        var directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: function onSuccess(entries) {
            var promises = entries.map(function (entry) {
              return createPromiseToAddFileOrParseDirectory(entry);
            });
            Promise.all(promises).then(function () {
              return resolve();
            });
          }
        });
      }
    });
  }; // For each dropped item, - make sure it's a file/directory, and start deepening in!


  toArray(dataTransfer.items).forEach(function (item) {
    var entry = item.webkitGetAsEntry(); // :entry can be null when we drop the url e.g.

    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }
  });
  return Promise.all(rootPromises).then(function () {
    return files;
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getFileNameAndExtension.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Takes a full filename string and returns an object {name, extension}
 *
 * @param {string} fullFileName
 * @returns {object} {name, extension}
 */
module.exports = function getFileNameAndExtension(fullFileName) {
  var lastDot = fullFileName.lastIndexOf('.'); // these count as no extension: "no-dot", "trailing-dot."

  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
    return {
      name: fullFileName,
      extension: undefined
    };
  } else {
    return {
      name: fullFileName.slice(0, lastDot),
      extension: fullFileName.slice(lastDot + 1)
    };
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getFileType.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getFileType.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getFileNameAndExtension = __webpack_require__(/*! ./getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");

var mimeTypes = __webpack_require__(/*! ./mimeTypes */ "./node_modules/@uppy/utils/lib/mimeTypes.js");

module.exports = function getFileType(file) {
  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;

  if (file.type) {
    // if mime type is set in the file object already, use that
    return file.type;
  } else if (fileExtension && mimeTypes[fileExtension]) {
    // else, see if we can map extension to a mime type
    return mimeTypes[fileExtension];
  } else {
    // if all fails, fall back to a generic byte stream type
    return 'application/octet-stream';
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getSocketHost.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getSocketHost.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getSocketHost(url) {
  // get the host domain
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  var host = regex.exec(url)[1];
  var socketProtocol = /^http:\/\//i.test(url) ? 'ws' : 'wss';
  return socketProtocol + "://" + host;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getSpeed.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getSpeed.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getSpeed(fileProgress) {
  if (!fileProgress.bytesUploaded) return 0;
  var timeElapsed = new Date() - fileProgress.uploadStarted;
  var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
  return uploadSpeed;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getTimeStamp.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getTimeStamp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a timestamp in the format of `hours:minutes:seconds`
 */
module.exports = function getTimeStamp() {
  var date = new Date();
  var hours = pad(date.getHours().toString());
  var minutes = pad(date.getMinutes().toString());
  var seconds = pad(date.getSeconds().toString());
  return hours + ':' + minutes + ':' + seconds;
};
/**
 * Adds zero to strings shorter than two characters
 */


function pad(str) {
  return str.length !== 2 ? 0 + str : str;
}

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/hasProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/hasProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isDOMElement.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isDOMElement.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Check if an object is a DOM element. Duck-typing based on `nodeType`.
 *
 * @param {*} obj
 */
module.exports = function isDOMElement(obj) {
  return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isObjectURL.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isObjectURL.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Check if a URL string is an object URL from `URL.createObjectURL`.
 *
 * @param {string} url
 * @returns {boolean}
 */
module.exports = function isObjectURL(url) {
  return url.indexOf('blob:') === 0;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isPreviewSupported.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isPreviewSupported.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isPreviewSupported(fileType) {
  if (!fileType) return false;
  var fileTypeSpecific = fileType.split('/')[1]; // list of images that browsers can preview

  if (/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/.test(fileTypeSpecific)) {
    return true;
  }

  return false;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isTouchDevice.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isTouchDevice.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isTouchDevice() {
  // works on most browsers
  if ('ontouchstart' in window) {
    return true;
  } // works on IE10/11 and Surface
  // eslint-disable-next-line compat/compat


  return !!navigator.maxTouchPoints;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/mimeTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/mimeTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ___Why not add the mime-types package?
//    It's 19.7kB gzipped, and we only need mime types for well-known extensions (for file previews).
// ___Where to take new extensions from?
//    https://github.com/jshttp/mime-db/blob/master/db.json
module.exports = {
  md: 'text/markdown',
  markdown: 'text/markdown',
  mp4: 'video/mp4',
  mp3: 'audio/mp3',
  svg: 'image/svg+xml',
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  heic: 'image/heic',
  heif: 'image/heif',
  yaml: 'text/yaml',
  yml: 'text/yaml',
  csv: 'text/csv',
  tsv: 'text/tab-separated-values',
  tab: 'text/tab-separated-values',
  avi: 'video/x-msvideo',
  mks: 'video/x-matroska',
  mkv: 'video/x-matroska',
  mov: 'video/quicktime',
  doc: 'application/msword',
  docm: 'application/vnd.ms-word.document.macroenabled.12',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  dot: 'application/msword',
  dotm: 'application/vnd.ms-word.template.macroenabled.12',
  dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  xla: 'application/vnd.ms-excel',
  xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
  xlc: 'application/vnd.ms-excel',
  xlf: 'application/x-xliff+xml',
  xlm: 'application/vnd.ms-excel',
  xls: 'application/vnd.ms-excel',
  xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xlt: 'application/vnd.ms-excel',
  xltm: 'application/vnd.ms-excel.template.macroenabled.12',
  xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  xlw: 'application/vnd.ms-excel',
  txt: 'text/plain',
  text: 'text/plain',
  conf: 'text/plain',
  log: 'text/plain',
  pdf: 'application/pdf'
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/prettyBytes.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/prettyBytes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Adapted from https://github.com/Flet/prettier-bytes/
// Changing 1000 bytes to 1024, so we can keep uppercase KB vs kB
// ISC License (c) Dan Flettre https://github.com/Flet/prettier-bytes/blob/master/LICENSE
module.exports = prettierBytes;

function prettierBytes(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Expected a number, got ' + typeof num);
  }

  var neg = num < 0;
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (neg) {
    num = -num;
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B';
  }

  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
  num = Number(num / Math.pow(1024, exponent));
  var unit = units[exponent];

  if (num >= 10 || num % 1 === 0) {
    // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit;
  } else {
    return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit;
  }
}

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/prettyETA.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/prettyETA.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var secondsToTime = __webpack_require__(/*! ./secondsToTime */ "./node_modules/@uppy/utils/lib/secondsToTime.js");

module.exports = function prettyETA(seconds) {
  var time = secondsToTime(seconds); // Only display hours and minutes if they are greater than 0 but always
  // display minutes if hours is being displayed
  // Display a leading zero if the there is a preceding unit: 1m 05s, but 5s

  var hoursStr = time.hours ? time.hours + 'h ' : '';
  var minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
  var minutesStr = minutesVal ? minutesVal + 'm' : '';
  var secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
  var secondsStr = time.hours ? '' : minutesVal ? ' ' + secondsVal + 's' : secondsVal + 's';
  return "" + hoursStr + minutesStr + secondsStr;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/secondsToTime.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/secondsToTime.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function secondsToTime(rawSeconds) {
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/settle.js":
/*!************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/settle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function settle(promises) {
  var resolutions = [];
  var rejections = [];

  function resolved(value) {
    resolutions.push(value);
  }

  function rejected(error) {
    rejections.push(error);
  }

  var wait = Promise.all(promises.map(function (promise) {
    return promise.then(resolved, rejected);
  }));
  return wait.then(function () {
    return {
      successful: resolutions,
      failed: rejections
    };
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/toArray.js":
/*!*************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/toArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts list into array
 */
module.exports = function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
};

/***/ }),

/***/ "./node_modules/@uppy/xhr-upload/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/xhr-upload/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _class, _temp;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var _require2 = __webpack_require__(/*! @uppy/companion-client */ "./node_modules/@uppy/companion-client/lib/index.js"),
    Provider = _require2.Provider,
    RequestClient = _require2.RequestClient,
    Socket = _require2.Socket;

var emitSocketProgress = __webpack_require__(/*! @uppy/utils/lib/emitSocketProgress */ "./node_modules/@uppy/utils/lib/emitSocketProgress.js");

var getSocketHost = __webpack_require__(/*! @uppy/utils/lib/getSocketHost */ "./node_modules/@uppy/utils/lib/getSocketHost.js");

var settle = __webpack_require__(/*! @uppy/utils/lib/settle */ "./node_modules/@uppy/utils/lib/settle.js");

var EventTracker = __webpack_require__(/*! @uppy/utils/lib/EventTracker */ "./node_modules/@uppy/utils/lib/EventTracker.js");

var ProgressTimeout = __webpack_require__(/*! @uppy/utils/lib/ProgressTimeout */ "./node_modules/@uppy/utils/lib/ProgressTimeout.js");

var RateLimitedQueue = __webpack_require__(/*! @uppy/utils/lib/RateLimitedQueue */ "./node_modules/@uppy/utils/lib/RateLimitedQueue.js");

function buildResponseError(xhr, error) {
  // No error message
  if (!error) error = new Error('Upload error'); // Got an error message string

  if (typeof error === 'string') error = new Error(error); // Got something else

  if (!(error instanceof Error)) {
    error = _extends(new Error('Upload error'), {
      data: error
    });
  }

  error.request = xhr;
  return error;
}
/**
 * Set `data.type` in the blob to `file.meta.type`,
 * because we might have detected a more accurate file type in Uppy
 * https://stackoverflow.com/a/50875615
 *
 * @param {object} file File object with `data`, `size` and `meta` properties
 * @returns {object} blob updated with the new `type` set from `file.meta.type`
 */


function setTypeInBlob(file) {
  var dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
  return dataWithUpdatedType;
}

module.exports = (_temp = _class =
/*#__PURE__*/
function (_Plugin) {
  _inheritsLoose(XHRUpload, _Plugin);

  function XHRUpload(uppy, opts) {
    var _this;

    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'XHRUpload';
    _this.title = 'XHRUpload';
    _this.defaultLocale = {
      strings: {
        timedOut: 'Upload stalled for %{seconds} seconds, aborting.'
      }
    }; // Default options

    var defaultOptions = {
      formData: true,
      fieldName: 'files[]',
      method: 'post',
      metaFields: null,
      responseUrlFieldName: 'url',
      bundle: false,
      headers: {},
      timeout: 30 * 1000,
      limit: 0,
      withCredentials: false,
      responseType: '',

      /**
       * @typedef respObj
       * @property {string} responseText
       * @property {number} status
       * @property {string} statusText
       * @property {object.<string, string>} headers
       *
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      getResponseData: function getResponseData(responseText, response) {
        var parsedResponse = {};

        try {
          parsedResponse = JSON.parse(responseText);
        } catch (err) {
          console.log(err);
        }

        return parsedResponse;
      },

      /**
       *
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      getResponseError: function getResponseError(responseText, response) {
        return new Error('Upload error');
      },

      /**
       * @param {number} status the response status code
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      validateStatus: function validateStatus(status, responseText, response) {
        return status >= 200 && status < 300;
      }
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this)); // Simultaneous upload limiting is shared across all uploads with this plugin.
    // __queue is for internal Uppy use only!

    if (_this.opts.__queue instanceof RateLimitedQueue) {
      _this.requests = _this.opts.__queue;
    } else {
      _this.requests = new RateLimitedQueue(_this.opts.limit);
    }

    if (_this.opts.bundle && !_this.opts.formData) {
      throw new Error('`opts.formData` must be true when `opts.bundle` is enabled.');
    }

    _this.uploaderEvents = Object.create(null);
    return _this;
  }

  var _proto = XHRUpload.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
  };

  _proto.i18nInit = function i18nInit() {
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState(); // so that UI re-renders and we see the updated locale
  };

  _proto.getOptions = function getOptions(file) {
    var overrides = this.uppy.getState().xhrUpload;

    var opts = _extends({}, this.opts, {}, overrides || {}, {}, file.xhrUpload || {}, {
      headers: {}
    });

    _extends(opts.headers, this.opts.headers);

    if (overrides) {
      _extends(opts.headers, overrides.headers);
    }

    if (file.xhrUpload) {
      _extends(opts.headers, file.xhrUpload.headers);
    }

    return opts;
  };

  _proto.addMetadata = function addMetadata(formData, meta, opts) {
    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields // Send along all fields by default.
    : Object.keys(meta);
    metaFields.forEach(function (item) {
      formData.append(item, meta[item]);
    });
  };

  _proto.createFormDataUpload = function createFormDataUpload(file, opts) {
    var formPost = new FormData();
    this.addMetadata(formPost, file.meta, opts);
    var dataWithUpdatedType = setTypeInBlob(file);

    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }

    return formPost;
  };

  _proto.createBundledUpload = function createBundledUpload(files, opts) {
    var _this2 = this;

    var formPost = new FormData();

    var _this$uppy$getState = this.uppy.getState(),
        meta = _this$uppy$getState.meta;

    this.addMetadata(formPost, meta, opts);
    files.forEach(function (file) {
      var opts = _this2.getOptions(file);

      var dataWithUpdatedType = setTypeInBlob(file);

      if (file.name) {
        formPost.append(opts.fieldName, dataWithUpdatedType, file.name);
      } else {
        formPost.append(opts.fieldName, dataWithUpdatedType);
      }
    });
    return formPost;
  };

  _proto.createBareUpload = function createBareUpload(file, opts) {
    return file.data;
  };

  _proto.upload = function upload(file, current, total) {
    var _this3 = this;

    var opts = this.getOptions(file);
    this.uppy.log("uploading " + current + " of " + total);
    return new Promise(function (resolve, reject) {
      _this3.uppy.emit('upload-started', file);

      var data = opts.formData ? _this3.createFormDataUpload(file, opts) : _this3.createBareUpload(file, opts);
      var timer = new ProgressTimeout(opts.timeout, function () {
        xhr.abort();
        queuedRequest.done();
        var error = new Error(_this3.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));

        _this3.uppy.emit('upload-error', file, error);

        reject(error);
      });
      var xhr = new XMLHttpRequest();
      _this3.uploaderEvents[file.id] = new EventTracker(_this3.uppy);
      var id = cuid();
      xhr.upload.addEventListener('loadstart', function (ev) {
        _this3.uppy.log("[XHRUpload] " + id + " started");
      });
      xhr.upload.addEventListener('progress', function (ev) {
        _this3.uppy.log("[XHRUpload] " + id + " progress: " + ev.loaded + " / " + ev.total); // Begin checking for timeouts when progress starts, instead of loading,
        // to avoid timing out requests on browser concurrency queue


        timer.progress();

        if (ev.lengthComputable) {
          _this3.uppy.emit('upload-progress', file, {
            uploader: _this3,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
      });
      xhr.addEventListener('load', function (ev) {
        _this3.uppy.log("[XHRUpload] " + id + " finished");

        timer.done();
        queuedRequest.done();

        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();

          _this3.uploaderEvents[file.id] = null;
        }

        if (opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = opts.getResponseData(xhr.responseText, xhr);
          var uploadURL = body[opts.responseUrlFieldName];
          var uploadResp = {
            status: ev.target.status,
            body: body,
            uploadURL: uploadURL
          };

          _this3.uppy.emit('upload-success', file, uploadResp);

          if (uploadURL) {
            _this3.uppy.log("Download " + file.name + " from " + uploadURL);
          }

          return resolve(file);
        } else {
          var _body = opts.getResponseData(xhr.responseText, xhr);

          var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          var response = {
            status: ev.target.status,
            body: _body
          };

          _this3.uppy.emit('upload-error', file, error, response);

          return reject(error);
        }
      });
      xhr.addEventListener('error', function (ev) {
        _this3.uppy.log("[XHRUpload] " + id + " errored");

        timer.done();
        queuedRequest.done();

        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();

          _this3.uploaderEvents[file.id] = null;
        }

        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));

        _this3.uppy.emit('upload-error', file, error);

        return reject(error);
      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true); // IE10 does not allow setting `withCredentials` and `responseType`
      // before `open()` is called.

      xhr.withCredentials = opts.withCredentials;

      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }

      Object.keys(opts.headers).forEach(function (header) {
        xhr.setRequestHeader(header, opts.headers[header]);
      });

      var queuedRequest = _this3.requests.run(function () {
        xhr.send(data);
        return function () {
          timer.done();
          xhr.abort();
        };
      });

      _this3.onFileRemove(file.id, function () {
        queuedRequest.abort();
        reject(new Error('File removed'));
      });

      _this3.onCancelAll(file.id, function () {
        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
      });
    });
  };

  _proto.uploadRemote = function uploadRemote(file, current, total) {
    var _this4 = this;

    var opts = this.getOptions(file);
    return new Promise(function (resolve, reject) {
      _this4.uppy.emit('upload-started', file);

      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields // Send along all fields by default.
      : Object.keys(file.meta);
      metaFields.forEach(function (name) {
        fields[name] = file.meta[name];
      });
      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this4.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        endpoint: opts.endpoint,
        size: file.data.size,
        fieldname: opts.fieldName,
        metadata: fields,
        httpMethod: _this4.opts.method,
        headers: opts.headers
      })).then(function (res) {
        var token = res.token;
        var host = getSocketHost(file.remote.companionUrl);
        var socket = new Socket({
          target: host + "/api/" + token,
          autoOpen: false
        });
        _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);

        _this4.onFileRemove(file.id, function () {
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was removed");
        });

        _this4.onCancelAll(file.id, function () {
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was canceled");
        });

        _this4.onRetry(file.id, function () {
          socket.send('pause', {});
          socket.send('resume', {});
        });

        _this4.onRetryAll(file.id, function () {
          socket.send('pause', {});
          socket.send('resume', {});
        });

        socket.on('progress', function (progressData) {
          return emitSocketProgress(_this4, progressData, file);
        });
        socket.on('success', function (data) {
          var body = opts.getResponseData(data.response.responseText, data.response);
          var uploadURL = body[opts.responseUrlFieldName];
          var uploadResp = {
            status: data.response.status,
            body: body,
            uploadURL: uploadURL
          };

          _this4.uppy.emit('upload-success', file, uploadResp);

          queuedRequest.done();

          if (_this4.uploaderEvents[file.id]) {
            _this4.uploaderEvents[file.id].remove();

            _this4.uploaderEvents[file.id] = null;
          }

          return resolve();
        });
        socket.on('error', function (errData) {
          var resp = errData.response;
          var error = resp ? opts.getResponseError(resp.responseText, resp) : _extends(new Error(errData.error.message), {
            cause: errData.error
          });

          _this4.uppy.emit('upload-error', file, error);

          queuedRequest.done();

          if (_this4.uploaderEvents[file.id]) {
            _this4.uploaderEvents[file.id].remove();

            _this4.uploaderEvents[file.id] = null;
          }

          reject(error);
        });

        var queuedRequest = _this4.requests.run(function () {
          socket.open();

          if (file.isPaused) {
            socket.send('pause', {});
          }

          return function () {
            return socket.close();
          };
        });
      });
    });
  };

  _proto.uploadBundle = function uploadBundle(files) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      var endpoint = _this5.opts.endpoint;
      var method = _this5.opts.method;

      var optsFromState = _this5.uppy.getState().xhrUpload;

      var formData = _this5.createBundledUpload(files, _extends({}, _this5.opts, {}, optsFromState || {}));

      var xhr = new XMLHttpRequest();
      var timer = new ProgressTimeout(_this5.opts.timeout, function () {
        xhr.abort();
        var error = new Error(_this5.i18n('timedOut', {
          seconds: Math.ceil(_this5.opts.timeout / 1000)
        }));
        emitError(error);
        reject(error);
      });

      var emitError = function emitError(error) {
        files.forEach(function (file) {
          _this5.uppy.emit('upload-error', file, error);
        });
      };

      xhr.upload.addEventListener('loadstart', function (ev) {
        _this5.uppy.log('[XHRUpload] started uploading bundle');

        timer.progress();
      });
      xhr.upload.addEventListener('progress', function (ev) {
        timer.progress();
        if (!ev.lengthComputable) return;
        files.forEach(function (file) {
          _this5.uppy.emit('upload-progress', file, {
            uploader: _this5,
            bytesUploaded: ev.loaded / ev.total * file.size,
            bytesTotal: file.size
          });
        });
      });
      xhr.addEventListener('load', function (ev) {
        timer.done();

        if (_this5.opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = _this5.opts.getResponseData(xhr.responseText, xhr);

          var uploadResp = {
            status: ev.target.status,
            body: body
          };
          files.forEach(function (file) {
            _this5.uppy.emit('upload-success', file, uploadResp);
          });
          return resolve();
        }

        var error = _this5.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        error.request = xhr;
        emitError(error);
        return reject(error);
      });
      xhr.addEventListener('error', function (ev) {
        timer.done();
        var error = _this5.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        emitError(error);
        return reject(error);
      });

      _this5.uppy.on('cancel-all', function () {
        timer.done();
        xhr.abort();
      });

      xhr.open(method.toUpperCase(), endpoint, true); // IE10 does not allow setting `withCredentials` and `responseType`
      // before `open()` is called.

      xhr.withCredentials = _this5.opts.withCredentials;

      if (_this5.opts.responseType !== '') {
        xhr.responseType = _this5.opts.responseType;
      }

      Object.keys(_this5.opts.headers).forEach(function (header) {
        xhr.setRequestHeader(header, _this5.opts.headers[header]);
      });
      xhr.send(formData);
      files.forEach(function (file) {
        _this5.uppy.emit('upload-started', file);
      });
    });
  };

  _proto.uploadFiles = function uploadFiles(files) {
    var _this6 = this;

    var promises = files.map(function (file, i) {
      var current = parseInt(i, 10) + 1;
      var total = files.length;

      if (file.error) {
        return Promise.reject(new Error(file.error));
      } else if (file.isRemote) {
        return _this6.uploadRemote(file, current, total);
      } else {
        return _this6.upload(file, current, total);
      }
    });
    return settle(promises);
  };

  _proto.onFileRemove = function onFileRemove(fileID, cb) {
    this.uploaderEvents[fileID].on('file-removed', function (file) {
      if (fileID === file.id) cb(file.id);
    });
  };

  _proto.onRetry = function onRetry(fileID, cb) {
    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
      if (fileID === targetFileID) {
        cb();
      }
    });
  };

  _proto.onRetryAll = function onRetryAll(fileID, cb) {
    var _this7 = this;

    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
      if (!_this7.uppy.getFile(fileID)) return;
      cb();
    });
  };

  _proto.onCancelAll = function onCancelAll(fileID, cb) {
    var _this8 = this;

    this.uploaderEvents[fileID].on('cancel-all', function () {
      if (!_this8.uppy.getFile(fileID)) return;
      cb();
    });
  };

  _proto.handleUpload = function handleUpload(fileIDs) {
    var _this9 = this;

    if (fileIDs.length === 0) {
      this.uppy.log('[XHRUpload] No files to upload!');
      return Promise.resolve();
    } // no limit configured by the user, and no RateLimitedQueue passed in by a "parent" plugin (basically just AwsS3) using the top secret `__queue` option


    if (this.opts.limit === 0 && !this.opts.__queue) {
      this.uppy.log('[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0', 'warning');
    }

    this.uppy.log('[XHRUpload] Uploading...');
    var files = fileIDs.map(function (fileID) {
      return _this9.uppy.getFile(fileID);
    });

    if (this.opts.bundle) {
      // if bundle: true, we don’t support remote uploads
      var isSomeFileRemote = files.some(function (file) {
        return file.isRemote;
      });

      if (isSomeFileRemote) {
        throw new Error('Can’t upload remote files when bundle: true option is set');
      }

      return this.uploadBundle(files);
    }

    return this.uploadFiles(files).then(function () {
      return null;
    });
  };

  _proto.install = function install() {
    if (this.opts.bundle) {
      var _this$uppy$getState2 = this.uppy.getState(),
          capabilities = _this$uppy$getState2.capabilities;

      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: false
        })
      });
    }

    this.uppy.addUploader(this.handleUpload);
  };

  _proto.uninstall = function uninstall() {
    if (this.opts.bundle) {
      var _this$uppy$getState3 = this.uppy.getState(),
          capabilities = _this$uppy$getState3.capabilities;

      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: true
        })
      });
    }

    this.uppy.removeUploader(this.handleUpload);
  };

  return XHRUpload;
}(Plugin), _class.VERSION = "1.5.2", _temp);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/core/dist/style.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@uppy/core/dist/style.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n* General Uppy styles that apply to everything inside the .Uppy container\n*/\n.uppy-Root {\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: left;\n  position: relative;\n  color: #333; }\n\n.uppy-Root *, .uppy-Root *:before, .uppy-Root *:after {\n  box-sizing: inherit; }\n\n.uppy-Root [hidden] {\n  display: none; }\n\n.UppyIcon {\n  max-width: 100%;\n  max-height: 100%;\n  fill: currentColor;\n  /* no !important */\n  display: inline-block;\n  overflow: hidden; }\n\n.UppyIcon--svg-baseline {\n  bottom: -0.125em;\n  position: relative; }\n\n.uppy-u-reset {\n  -webkit-appearance: none;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible;\n  background: none;\n  border: medium none currentColor;\n  border-collapse: separate;\n  -o-border-image: none;\n     border-image: none;\n  border-radius: 0;\n  border-spacing: 0;\n  box-shadow: none;\n  clear: none;\n  cursor: auto;\n  display: inline;\n  empty-cells: show;\n  float: none;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  -webkit-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  left: auto;\n  letter-spacing: normal;\n  list-style: none;\n  margin: 0;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  opacity: 1;\n  outline: medium none invert;\n  overflow: visible;\n  overflow-x: visible;\n  overflow-y: visible;\n  text-align: left;\n  text-decoration: none;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  top: auto;\n  transform: none;\n  transform-origin: 50% 50% 0;\n  transform-style: flat;\n  transition: none 0s ease 0s;\n  unicode-bidi: normal;\n  vertical-align: baseline;\n  visibility: visible;\n  white-space: normal;\n  z-index: auto; }\n\n.uppy-c-textInput {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 1.5;\n  padding: 6px 8px;\n  background-color: #fff; }\n\n.uppy-size--md .uppy-c-textInput {\n  padding: 8px 10px; }\n\n.uppy-c-textInput:focus {\n  border-color: rgba(34, 117, 215, 0.6);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.15); }\n\n.uppy-c-btn {\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  transition: background-color 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.uppy-c-btn:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.uppy-c-btn::-moz-focus-inner {\n  border: 0; }\n\n.uppy-c-btn-primary {\n  font-size: 14px;\n  padding: 10px 18px;\n  border-radius: 4px;\n  background-color: #2275d7;\n  color: #fff; }\n\n.uppy-size--md .uppy-c-btn-primary {\n  padding: 13px 22px; }\n\n.uppy-c-btn-primary:hover {\n  background-color: #1b5dab; }\n\n.uppy-c-btn-primary:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.4); }\n\n.uppy-c-btn-link {\n  font-size: 14px;\n  line-height: 1;\n  padding: 10px 15px;\n  border-radius: 4px;\n  background-color: transparent;\n  color: #525252; }\n\n.uppy-size--md .uppy-c-btn-link {\n  padding: 13px 18px; }\n\n.uppy-c-btn-link:hover {\n  color: #333; }\n\n.uppy-c-btn-link:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.25); }\n\n.uppy-c-btn--small {\n  font-size: 0.9em;\n  padding: 7px 16px;\n  border-radius: 2px; }\n\n.uppy-size--md .uppy-c-btn--small {\n  padding: 8px 10px;\n  border-radius: 2px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/dashboard/dist/style.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@uppy/dashboard/dist/style.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uppy-Informer {\n  position: absolute;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  opacity: 1;\n  transform: none;\n  transition: all 250ms ease-in;\n  z-index: 1005; }\n\n.uppy-Informer[aria-hidden=true] {\n  opacity: 0;\n  transform: translateY(350%);\n  transition: all 300ms ease-in;\n  z-index: -1000; }\n\n.uppy-Informer p {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  line-height: 1.4;\n  font-weight: 400;\n  padding: 6px 15px;\n  background-color: #757575;\n  /* no !important */\n  color: #fff;\n  border-radius: 18px;\n  max-width: 90%; }\n  .uppy-size--md .uppy-Informer p {\n    font-size: 14px;\n    line-height: 1.3;\n    max-width: 500px;\n    padding: 10px 20px; }\n\n.uppy-Informer span {\n  line-height: 12px;\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #525252;\n  background-color: #fff;\n  border-radius: 50%;\n  position: relative;\n  top: -1px;\n  left: 3px;\n  font-size: 10px;\n  margin-left: -1px; }\n\n.uppy-Informer span:hover {\n  cursor: help; }\n\n.uppy-Informer span:after {\n  line-height: 1.3;\n  word-wrap: break-word; }\n\n/* -------------------------------------------------------------------\n  Microtip\n\n  Modern, lightweight css-only tooltips\n  Just 1kb minified and gzipped\n\n  @author Ghosh\n  @package Microtip\n\n----------------------------------------------------------------------\n  1. Base Styles\n  2. Direction Modifiers\n  3. Position Modifiers\n--------------------------------------------------------------------*/\n/* ------------------------------------------------\n  [1] Base Styles\n-------------------------------------------------*/\n.uppy-Root [aria-label][role~=\"tooltip\"] {\n  /* no important */\n  position: relative; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]::before,\n.uppy-Root [aria-label][role~=\"tooltip\"]::after {\n  /* no important */\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  will-change: transform;\n  opacity: 0;\n  pointer-events: none;\n  transition: all var(--microtip-transition-duration, 0.18s) var(--microtip-transition-easing, ease-in-out) var(--microtip-transition-delay, 0s);\n  position: absolute;\n  box-sizing: border-box;\n  z-index: 10;\n  transform-origin: top; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]::before {\n  /* no important */\n  background-size: 100% auto !important;\n  content: \"\"; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]::after {\n  /* no important */\n  background: rgba(17, 17, 17, 0.9);\n  border-radius: 4px;\n  color: #ffffff;\n  content: attr(aria-label);\n  font-size: var(--microtip-font-size, 13px);\n  font-weight: var(--microtip-font-weight, normal);\n  text-transform: var(--microtip-text-transform, none);\n  padding: .5em 1em;\n  white-space: nowrap;\n  box-sizing: content-box; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]:hover::before,\n.uppy-Root [aria-label][role~=\"tooltip\"]:hover::after,\n.uppy-Root [aria-label][role~=\"tooltip\"]:focus::before,\n.uppy-Root [aria-label][role~=\"tooltip\"]:focus::after {\n  /* no important */\n  opacity: 1;\n  pointer-events: auto; }\n\n/* ------------------------------------------------\n  [2] Position Modifiers\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 6px;\n  width: 18px;\n  margin-bottom: 5px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::after {\n  /* no important */\n  margin-bottom: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::before {\n  /* no important */\n  transform: translate3d(-50%, 0, 0);\n  bottom: 100%;\n  left: 50%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]:hover::before {\n  /* no important */\n  transform: translate3d(-50%, -5px, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::after {\n  /* no important */\n  transform: translate3d(-50%, 0, 0);\n  bottom: 100%;\n  left: 50%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top\"]:hover::after {\n  /* no important */\n  transform: translate3d(-50%, -5px, 0); }\n\n/* ------------------------------------------------\n  [2.1] Top Left\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-left\"]::after {\n  /* no important */\n  transform: translate3d(calc(-100% + 16px), 0, 0);\n  bottom: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-left\"]:hover::after {\n  /* no important */\n  transform: translate3d(calc(-100% + 16px), -5px, 0); }\n\n/* ------------------------------------------------\n  [2.2] Top Right\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-right\"]::after {\n  /* no important */\n  transform: translate3d(calc(0% + -16px), 0, 0);\n  bottom: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-right\"]:hover::after {\n  /* no important */\n  transform: translate3d(calc(0% + -16px), -5px, 0); }\n\n/* ------------------------------------------------\n  [2.3] Bottom\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 6px;\n  width: 18px;\n  margin-top: 5px;\n  margin-bottom: 0; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::after {\n  /* no important */\n  margin-top: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::before {\n  /* no important */\n  transform: translate3d(-50%, -10px, 0);\n  bottom: auto;\n  left: 50%;\n  top: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]:hover::before {\n  /* no important */\n  transform: translate3d(-50%, 0, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::after {\n  /* no important */\n  transform: translate3d(-50%, -10px, 0);\n  top: 100%;\n  left: 50%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom\"]:hover::after {\n  /* no important */\n  transform: translate3d(-50%, 0, 0); }\n\n/* ------------------------------------------------\n  [2.4] Bottom Left\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-left\"]::after {\n  /* no important */\n  transform: translate3d(calc(-100% + 16px), -10px, 0);\n  top: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-left\"]:hover::after {\n  /* no important */\n  transform: translate3d(calc(-100% + 16px), 0, 0); }\n\n/* ------------------------------------------------\n  [2.5] Bottom Right\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-right\"]::after {\n  /* no important */\n  transform: translate3d(calc(0% + -16px), -10px, 0);\n  top: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-right\"]:hover::after {\n  /* no important */\n  transform: translate3d(calc(0% + -16px), 0, 0); }\n\n/* ------------------------------------------------\n  [2.6] Left\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::after {\n  /* no important */\n  bottom: auto;\n  left: auto;\n  right: 100%;\n  top: 50%;\n  transform: translate3d(10px, -50%, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 18px;\n  width: 6px;\n  margin-right: 5px;\n  margin-bottom: 0; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::after {\n  /* no important */\n  margin-right: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]:hover::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]:hover::after {\n  /* no important */\n  transform: translate3d(0, -50%, 0); }\n\n/* ------------------------------------------------\n  [2.7] Right\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::after {\n  /* no important */\n  bottom: auto;\n  left: 100%;\n  top: 50%;\n  transform: translate3d(-10px, -50%, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 18px;\n  width: 6px;\n  margin-bottom: 0;\n  margin-left: 5px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::after {\n  /* no important */\n  margin-left: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]:hover::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]:hover::after {\n  /* no important */\n  transform: translate3d(0, -50%, 0); }\n\n/* ------------------------------------------------\n  [3] Size\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-size=\"small\"]::after {\n  /* no important */\n  white-space: initial;\n  width: 80px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-size=\"medium\"]::after {\n  /* no important */\n  white-space: initial;\n  width: 150px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-size=\"large\"]::after {\n  /* no important */\n  white-space: initial;\n  width: 260px; }\n\n.uppy-StatusBar {\n  display: flex;\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #fff;\n  background-color: #fff;\n  z-index: 1001;\n  transition: height .2s; }\n\n.uppy-size--md .uppy-StatusBar {\n  height: 46px; }\n\n.uppy-StatusBar:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #eaeaea; }\n\n.uppy-StatusBar[aria-hidden=true] {\n  overflow-y: hidden;\n  height: 0; }\n\n.uppy-StatusBar.is-complete .uppy-StatusBar-progress {\n  background-color: #1bb240; }\n\n.uppy-StatusBar.is-error .uppy-StatusBar-progress {\n  background-color: #e32437; }\n\n.uppy-StatusBar.is-complete .uppy-StatusBar-statusIndicator {\n  color: #1bb240; }\n\n.uppy-StatusBar.is-error .uppy-StatusBar-statusIndicator {\n  color: #e32437; }\n\n.uppy-StatusBar:not([aria-hidden=true]).is-waiting {\n  background-color: #fff;\n  height: 65px;\n  border-top: 1px solid #eaeaea; }\n\n.uppy-StatusBar-progress {\n  background-color: #2275d7;\n  height: 2px;\n  position: absolute;\n  z-index: 1001;\n  transition: background-color, width .3s ease-out; }\n  .uppy-StatusBar-progress.is-indeterminate {\n    background-size: 64px 64px;\n    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent);\n    -webkit-animation: uppy-StatusBar-ProgressStripes 1s linear infinite;\n            animation: uppy-StatusBar-ProgressStripes 1s linear infinite; }\n\n@-webkit-keyframes uppy-StatusBar-ProgressStripes {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 64px 0; } }\n\n@keyframes uppy-StatusBar-ProgressStripes {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 64px 0; } }\n\n.uppy-StatusBar.is-preprocessing .uppy-StatusBar-progress,\n.uppy-StatusBar.is-postprocessing .uppy-StatusBar-progress {\n  background-color: #f6a623; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-progress {\n  display: none; }\n\n.uppy-StatusBar-content {\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1002;\n  padding-left: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #333;\n  height: 100%; }\n  .uppy-size--md .uppy-StatusBar-content {\n    padding-left: 15px; }\n\n.uppy-StatusBar-status {\n  line-height: 1.4;\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 0.3em; }\n\n.uppy-Root:not(.uppy-size--md) .uppy-StatusBar-additionalInfo {\n  display: none; }\n\n.uppy-StatusBar-statusPrimary {\n  font-weight: 500;\n  line-height: 1; }\n\n.uppy-StatusBar-statusSecondary {\n  margin-top: 1px;\n  font-size: 11px;\n  line-height: 1.2;\n  display: inline-block;\n  color: #757575;\n  white-space: nowrap; }\n\n.uppy-StatusBar-statusSecondaryHint {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n  line-height: 1; }\n  .uppy-size--md .uppy-StatusBar-statusSecondaryHint {\n    margin-right: 8px; }\n\n.uppy-StatusBar-statusIndicator {\n  position: relative;\n  top: 1px;\n  color: #525252;\n  margin-right: 7px; }\n  .uppy-StatusBar-statusIndicator svg {\n    vertical-align: text-bottom; }\n\n.uppy-StatusBar-actions {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 10px;\n  z-index: 1004; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-actions {\n  width: 100%;\n  position: static;\n  padding: 0 15px;\n  background-color: #fafafa; }\n\n.uppy-StatusBar-actionCircleBtn {\n  line-height: 1;\n  cursor: pointer;\n  margin: 3px;\n  opacity: 0.9; }\n  .uppy-StatusBar-actionCircleBtn:focus {\n    outline: none; }\n  .uppy-StatusBar-actionCircleBtn::-moz-focus-inner {\n    border: 0; }\n  .uppy-StatusBar-actionCircleBtn:focus {\n    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.5); }\n  .uppy-StatusBar-actionCircleBtn:hover {\n    opacity: 1; }\n  .uppy-StatusBar-actionCircleBtn:focus {\n    border-radius: 50%; }\n\n.uppy-StatusBar-actionCircleBtn svg {\n  vertical-align: bottom; }\n\n.uppy-StatusBar-actionBtn {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 10px;\n  line-height: inherit;\n  color: #2275d7; }\n  .uppy-size--md .uppy-StatusBar-actionBtn {\n    font-size: 11px; }\n\n.uppy-StatusBar-actionBtn--retry {\n  height: 16px;\n  border-radius: 8px;\n  margin-right: 6px;\n  background-color: #ff4b23;\n  line-height: 1;\n  color: #fff;\n  padding: 1px 6px 3px 18px;\n  position: relative; }\n  .uppy-StatusBar-actionBtn--retry:focus {\n    outline: none; }\n  .uppy-StatusBar-actionBtn--retry::-moz-focus-inner {\n    border: 0; }\n  .uppy-StatusBar-actionBtn--retry:focus {\n    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.5); }\n  .uppy-StatusBar-actionBtn--retry:hover {\n    background-color: #f92d00; }\n  .uppy-StatusBar-actionBtn--retry svg {\n    position: absolute;\n    top: 3px;\n    left: 6px; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload {\n  font-size: 14px;\n  width: 100%;\n  padding: 15px 10px;\n  color: #fff;\n  background-color: #1bb240;\n  line-height: 1; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload:hover {\n  background-color: #148630; }\n\n.uppy-size--md .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload {\n  padding: 13px 22px;\n  width: auto; }\n\n.uppy-StatusBar:not(.is-waiting) .uppy-StatusBar-actionBtn--upload {\n  background-color: transparent;\n  color: #2275d7; }\n\n.uppy-StatusBar-actionBtn--uploadNewlyAdded {\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-bottom: 1px;\n  border-radius: 3px; }\n  .uppy-StatusBar-actionBtn--uploadNewlyAdded:focus {\n    outline: none; }\n  .uppy-StatusBar-actionBtn--uploadNewlyAdded::-moz-focus-inner {\n    border: 0; }\n  .uppy-StatusBar-actionBtn--uploadNewlyAdded:focus {\n    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.5); }\n\n.uppy-StatusBar-details {\n  line-height: 12px;\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #fff;\n  background-color: #939393;\n  border-radius: 50%;\n  position: relative;\n  top: 0;\n  left: 2px;\n  font-size: 10px;\n  font-weight: 600;\n  text-align: center;\n  cursor: help; }\n\n.uppy-StatusBar-details:after {\n  line-height: 1.3;\n  word-wrap: break-word; }\n\n.uppy-StatusBar-spinner {\n  -webkit-animation-name: uppy-StatusBar-spinnerAnimation;\n          animation-name: uppy-StatusBar-spinnerAnimation;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  margin-right: 10px;\n  fill: #2275d7; }\n\n.uppy-StatusBar.is-preprocessing .uppy-StatusBar-spinner,\n.uppy-StatusBar.is-postprocessing .uppy-StatusBar-spinner {\n  fill: #f6a623; }\n\n@-webkit-keyframes uppy-StatusBar-spinnerAnimation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes uppy-StatusBar-spinnerAnimation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.uppy-ProviderBrowser-viewType--grid ul.uppy-ProviderBrowser-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 6px; }\n  .uppy-ProviderBrowser-viewType--grid ul.uppy-ProviderBrowser-list::after {\n    content: '';\n    flex: auto; }\n\n.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem {\n  width: 50%;\n  position: relative;\n  margin: 0; }\n  .uppy-size--md .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem {\n    width: 33.3333%; }\n  .uppy-size--lg .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem {\n    width: 25%; }\n  .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem::before {\n    content: '';\n    padding-top: 100%;\n    display: block; }\n\n.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--selected img, .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--selected svg {\n  opacity: 0.85; }\n\n.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner {\n  background-color: rgba(147, 147, 147, 0.2); }\n\n.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview svg {\n  fill: rgba(0, 0, 0, 0.7);\n  width: 30%;\n  height: 30%; }\n\n.uppy-ProviderBrowser-viewType--grid button.uppy-ProviderBrowserItem-inner {\n  border-radius: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  text-align: center;\n  width: calc(100% - 14px);\n  height: calc(100% - 14px); }\n  .uppy-ProviderBrowser-viewType--grid button.uppy-ProviderBrowserItem-inner:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.9); }\n  .uppy-ProviderBrowser-viewType--grid button.uppy-ProviderBrowserItem-inner img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 4px; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-fakeCheckbox {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 26px;\n  height: 26px;\n  background-color: #2275d7;\n  border-radius: 50%;\n  z-index: 1002;\n  opacity: 0; }\n  .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-fakeCheckbox:after {\n    width: 12px;\n    height: 7px;\n    left: 7px;\n    top: 8px; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-fakeCheckbox--is-checked {\n  opacity: 1; }\n\n.uppy-ProviderBrowser-viewType--list {\n  background-color: #fff; }\n  .uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem {\n    display: flex;\n    align-items: center;\n    padding: 7px 15px;\n    margin: 0; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-fakeCheckbox {\n    margin-right: 15px;\n    height: 17px;\n    width: 17px;\n    border-radius: 3px;\n    background-color: #fff;\n    border: 1px solid #cfcfcf; }\n    .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-fakeCheckbox:focus {\n      border: 1px solid #2275d7;\n      box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.25);\n      outline: none; }\n    .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-fakeCheckbox::after {\n      opacity: 0;\n      height: 5px;\n      width: 9px;\n      left: 3px;\n      top: 4px; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-fakeCheckbox--is-checked {\n    background-color: #2275d7;\n    border-color: #2275d7; }\n    .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-fakeCheckbox--is-checked::after {\n      opacity: 1; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: 2px; }\n    .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner:focus {\n      outline: none;\n      text-decoration: underline; }\n    .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner img, .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner svg {\n      margin-right: 8px;\n      max-width: 20px;\n      max-height: 20px; }\n\n.uppy-ProviderBrowserItem-fakeCheckbox {\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0; }\n  .uppy-ProviderBrowserItem-fakeCheckbox::after {\n    content: '';\n    position: absolute;\n    cursor: pointer;\n    border-left: 2px solid #fff;\n    border-bottom: 2px solid #fff;\n    transform: rotate(-45deg); }\n\n.uppy-DashboardContent-panelBody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1; }\n\n.uppy-Provider-auth,\n.uppy-Provider-error,\n.uppy-Provider-loading,\n.uppy-Provider-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  flex: 1;\n  color: #939393; }\n\n.uppy-Provider-empty {\n  color: #939393; }\n\n.uppy-Provider-authIcon svg {\n  width: 100px;\n  height: 75px;\n  margin-bottom: 15px; }\n\n.uppy-Provider-authTitle {\n  font-size: 17px;\n  line-height: 1.4;\n  font-weight: 400;\n  margin-bottom: 30px;\n  padding: 0 15px;\n  max-width: 500px;\n  text-align: center;\n  color: #757575; }\n  .uppy-size--md .uppy-Provider-authTitle {\n    font-size: 20px; }\n\n.uppy-Provider-breadcrumbs {\n  flex: 1;\n  color: #525252;\n  font-size: 12px;\n  margin-bottom: 10px;\n  text-align: left; }\n  .uppy-size--md .uppy-Provider-breadcrumbs {\n    margin-bottom: 0; }\n\n.uppy-Provider-breadcrumbsIcon {\n  display: inline-block;\n  color: #525252;\n  vertical-align: middle;\n  margin-right: 4px;\n  line-height: 1; }\n\n.uppy-Provider-breadcrumbsIcon svg {\n  width: 13px;\n  height: 13px;\n  fill: #525252; }\n\n.uppy-Provider-breadcrumbs button {\n  display: inline-block;\n  line-height: inherit;\n  padding: 4px;\n  border-radius: 3px; }\n  .uppy-Provider-breadcrumbs button:focus {\n    outline: none; }\n  .uppy-Provider-breadcrumbs button::-moz-focus-inner {\n    border: 0; }\n  .uppy-Provider-breadcrumbs button:hover {\n    color: #1b5dab; }\n  .uppy-Provider-breadcrumbs button:focus {\n    background-color: #eceef2; }\n  .uppy-Provider-breadcrumbs button:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.uppy-ProviderBrowser {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  font-size: 14px;\n  font-weight: 400;\n  height: 100%; }\n\n.uppy-ProviderBrowser-user {\n  margin: 0 8px 0 0;\n  font-weight: 500;\n  color: #333; }\n\n.uppy-ProviderBrowser-user:after {\n  content: '\\B7';\n  position: relative;\n  left: 4px;\n  color: #939393;\n  font-weight: normal; }\n\n.uppy-ProviderBrowser-header {\n  z-index: 1001;\n  border-bottom: 1px solid #eaeaea;\n  position: relative; }\n\n.uppy-ProviderBrowser-headerBar {\n  padding: 7px 15px;\n  background-color: #fafafa;\n  z-index: 1001;\n  color: #757575;\n  line-height: 1.4;\n  font-size: 12px; }\n  .uppy-size--md .uppy-ProviderBrowser-headerBar {\n    display: flex;\n    align-items: center; }\n\n.uppy-ProviderBrowser-headerBar--simple {\n  text-align: center;\n  display: block;\n  justify-content: center; }\n\n.uppy-ProviderBrowser-headerBar--simple .uppy-Provider-breadcrumbsWrap {\n  flex: none;\n  display: inline-block;\n  vertical-align: middle; }\n\n.uppy-ProviderBrowser-search {\n  width: 100%;\n  background-color: #fff;\n  position: relative;\n  height: 30px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center; }\n\n.uppy-ProviderBrowser-searchIcon {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: 16px;\n  z-index: 1002;\n  color: #bbb; }\n\n.uppy-ProviderBrowser-searchInput {\n  width: 100%;\n  height: 30px;\n  background-color: transparent;\n  outline: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 12px;\n  line-height: 1.4;\n  border: 0;\n  margin: 0 8px;\n  padding-left: 27px;\n  z-index: 1001;\n  border-radius: 4px; }\n\n.uppy-ProviderBrowser-searchInput:focus {\n  outline: 0;\n  background-color: #f4f4f4; }\n\n.uppy-ProviderBrowser-searchClose {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  padding: 6px;\n  right: 12px;\n  top: 4px;\n  z-index: 1002;\n  color: #939393;\n  cursor: pointer; }\n  .uppy-ProviderBrowser-searchClose:hover {\n    color: #757575; }\n\n.uppy-ProviderBrowser-searchClose svg {\n  vertical-align: text-top; }\n\n.uppy-ProviderBrowser-searchInput:-ms-input-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::-webkit-input-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::-moz-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::-ms-input-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-userLogout {\n  cursor: pointer;\n  line-height: inherit;\n  color: #2275d7;\n  padding: 4px;\n  border-radius: 3px; }\n  .uppy-ProviderBrowser-userLogout:focus {\n    outline: none; }\n  .uppy-ProviderBrowser-userLogout::-moz-focus-inner {\n    border: 0; }\n  .uppy-ProviderBrowser-userLogout:hover {\n    color: #1b5dab; }\n  .uppy-ProviderBrowser-userLogout:focus {\n    background-color: #eceef2; }\n  .uppy-ProviderBrowser-userLogout:hover {\n    text-decoration: underline; }\n\n.uppy-ProviderBrowser-body {\n  flex: 1;\n  position: relative; }\n\n.uppy-ProviderBrowser-list {\n  flex: 1;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-spacing: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.uppy-ProviderBrowserItem-inner {\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 13px; }\n\n.uppy-ProviderBrowser-footer {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  height: 65px;\n  border-top: 1px solid #eaeaea;\n  padding: 0 15px; }\n  .uppy-ProviderBrowser-footer button {\n    margin-right: 8px; }\n\n.uppy-DashboardItem-previewInnerWrap {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 3px; }\n  .uppy-size--md .uppy-DashboardItem-previewInnerWrap {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); }\n\n.uppy-DashboardItem-previewInnerWrap:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n  display: none;\n  z-index: 1001; }\n\n.uppy-DashboardItem-previewLink {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1002; }\n  .uppy-DashboardItem-previewLink:focus {\n    box-shadow: inset 0 0 0 3px #76abe9; }\n\n.uppy-DashboardItem-preview img.uppy-DashboardItem-previewImg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transform: translateZ(0);\n  border-radius: 3px; }\n\n.uppy-DashboardItem-progress {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1002;\n  color: #fff;\n  text-align: center;\n  width: 120px;\n  transition: all .35 ease; }\n\n.uppy-DashboardItem-progressIndicator {\n  display: inline-block;\n  width: 38px;\n  height: 38px;\n  opacity: 0.9;\n  cursor: pointer; }\n  .uppy-DashboardItem-progressIndicator:focus {\n    outline: none; }\n  .uppy-DashboardItem-progressIndicator::-moz-focus-inner {\n    border: 0; }\n  .uppy-DashboardItem-progressIndicator:focus svg.UppyIcon-progressCircle .bg,\n  .uppy-DashboardItem-progressIndicator:focus svg.retry {\n    fill: #76abe9; }\n\nsvg.UppyIcon-progressCircle {\n  width: 100%;\n  height: 100%; }\n  svg.UppyIcon-progressCircle .bg {\n    stroke: rgba(255, 255, 255, 0.4);\n    opacity: 0; }\n  svg.UppyIcon-progressCircle .progress {\n    stroke: #fff;\n    transition: stroke-dashoffset .5s ease-out;\n    opacity: 0; }\n  svg.UppyIcon-progressCircle .play {\n    stroke: #fff;\n    fill: #fff;\n    opacity: 0;\n    transition: all 0.2s;\n    display: none; }\n  svg.UppyIcon-progressCircle .cancel {\n    fill: #fff;\n    opacity: 0;\n    transition: all 0.2s; }\n  svg.UppyIcon-progressCircle .pause {\n    stroke: #fff;\n    fill: #fff;\n    opacity: 0;\n    transition: all 0.2s;\n    display: none; }\n  svg.UppyIcon-progressCircle .check {\n    opacity: 0;\n    fill: #fff;\n    transition: all 0.2s; }\n\nsvg.UppyIcon.retry {\n  fill: #fff; }\n\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progress {\n  transform: initial;\n  top: -9px;\n  right: -8px;\n  left: initial;\n  width: auto; }\n\n.uppy-DashboardItem.is-inprogress .uppy-DashboardItem-progress,\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progress,\n.uppy-DashboardItem.is-error .uppy-DashboardItem-progress {\n  display: block; }\n\n.uppy-DashboardItem.is-error .uppy-DashboardItem-progressIndicator {\n  width: 18px;\n  height: 18px; }\n  .uppy-size--md .uppy-DashboardItem.is-error .uppy-DashboardItem-progressIndicator {\n    width: 28px;\n    height: 28px; }\n\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progressIndicator {\n  width: 18px;\n  height: 18px;\n  opacity: 1; }\n  .uppy-size--md .uppy-DashboardItem.is-complete .uppy-DashboardItem-progressIndicator {\n    width: 22px;\n    height: 22px; }\n\n.uppy-DashboardItem.is-paused svg.UppyIcon-progressCircle .pause {\n  opacity: 0; }\n\n.uppy-DashboardItem.is-paused svg.UppyIcon-progressCircle .play {\n  opacity: 1; }\n\n.uppy-DashboardItem.is-noIndividualCancellation .uppy-DashboardItem-progressIndicator {\n  cursor: default; }\n\n.uppy-DashboardItem.is-noIndividualCancellation .cancel {\n  display: none; }\n\n.uppy-DashboardItem.is-processing .uppy-DashboardItem-progress {\n  opacity: 0; }\n\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progressIndicator {\n  cursor: default; }\n\n.uppy-DashboardItem.is-complete .progress {\n  stroke: #1bb240;\n  fill: #1bb240;\n  opacity: 1; }\n\n.uppy-DashboardItem.is-complete .check {\n  opacity: 1; }\n\n.uppy-size--md .uppy-DashboardItem-progressIndicator {\n  width: 55px;\n  height: 55px; }\n\n.uppy-DashboardItem.is-resumable .pause, .uppy-DashboardItem.is-resumable .play {\n  display: block; }\n\n.uppy-DashboardItem.is-resumable .cancel {\n  display: none; }\n\n.uppy-DashboardItem.is-inprogress .bg, .uppy-DashboardItem.is-inprogress .progress, .uppy-DashboardItem.is-inprogress .pause, .uppy-DashboardItem.is-inprogress .cancel {\n  opacity: 1; }\n\n.uppy-DashboardItem-fileInfo {\n  padding-right: 5px; }\n\n.uppy-DashboardItem-name {\n  font-size: 12px;\n  line-height: 1.3;\n  font-weight: 500;\n  margin-bottom: 4px;\n  word-break: break-all;\n  word-wrap: anywhere; }\n\n.uppy-DashboardItem-status {\n  font-size: 11px;\n  line-height: 1.3;\n  font-weight: normal;\n  color: #757575; }\n\n.uppy-DashboardItem-statusSize {\n  display: inline-block;\n  vertical-align: bottom;\n  text-transform: uppercase; }\n\n.uppy-DashboardItem-sourceIcon {\n  display: none;\n  vertical-align: bottom;\n  color: #bbb; }\n  .uppy-DashboardItem-sourceIcon:not(:first-child) {\n    position: relative;\n    margin-left: 14px; }\n  .uppy-DashboardItem-sourceIcon svg,\n  .uppy-DashboardItem-sourceIcon svg * {\n    max-width: 100%;\n    max-height: 100%;\n    display: inline-block;\n    vertical-align: text-bottom;\n    overflow: hidden;\n    fill: currentColor;\n    width: 11px;\n    height: 12px; }\n\n.uppy-DashboardItem-action {\n  cursor: pointer;\n  color: #939393; }\n  .uppy-DashboardItem-action:focus {\n    outline: none; }\n  .uppy-DashboardItem-action::-moz-focus-inner {\n    border: 0; }\n  .uppy-DashboardItem-action:focus {\n    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.5); }\n  .uppy-DashboardItem-action:hover {\n    opacity: 1;\n    color: #1f1f1f; }\n\n.uppy-DashboardItem-action--remove {\n  color: #1f1f1f;\n  opacity: 0.95; }\n\n.uppy-Dashboard:not(.uppy-size--md) .uppy-DashboardItem-actionWrapper {\n  display: flex;\n  align-items: center; }\n\n.uppy-Dashboard:not(.uppy-size--md) .uppy-DashboardItem-action {\n  width: 22px;\n  height: 22px;\n  padding: 3px;\n  margin-left: 3px; }\n  .uppy-Dashboard:not(.uppy-size--md) .uppy-DashboardItem-action:focus {\n    border-radius: 3px; }\n\n.uppy-size--md .uppy-DashboardItem-action--copyLink,\n.uppy-size--md .uppy-DashboardItem-action--edit {\n  width: 16px;\n  height: 16px;\n  padding: 0; }\n  .uppy-size--md .uppy-DashboardItem-action--copyLink:focus,\n  .uppy-size--md .uppy-DashboardItem-action--edit:focus {\n    border-radius: 3px; }\n\n.uppy-size--md .uppy-DashboardItem-action--remove {\n  z-index: 1002;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 18px;\n  height: 18px;\n  padding: 0; }\n  .uppy-size--md .uppy-DashboardItem-action--remove:focus {\n    border-radius: 50%; }\n\n.uppy-Dashboard:not(.uppy-size--md) .uppy-DashboardItem {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 10px;\n  padding-right: 0; }\n\n.uppy-size--md .uppy-DashboardItem {\n  position: relative;\n  display: inline-block;\n  margin: 5px 15px;\n  width: calc(33.333% - 15px - 15px);\n  height: 215px; }\n\n.uppy-size--lg .uppy-DashboardItem {\n  margin: 5px 15px;\n  width: calc(25% - 15px - 15px);\n  height: 190px; }\n\n.uppy-size--xl .uppy-DashboardItem {\n  width: calc(20% - 15px - 15px);\n  height: 210px; }\n\n.uppy-DashboardItem-preview {\n  position: relative; }\n  .uppy-Dashboard:not(.uppy-size--md) .uppy-DashboardItem-preview {\n    flex-shrink: 0;\n    flex-grow: 0;\n    width: 50px;\n    height: 50px; }\n  .uppy-size--md .uppy-DashboardItem-preview {\n    width: 100%;\n    height: 140px; }\n  .uppy-size--lg .uppy-DashboardItem-preview {\n    height: 120px; }\n  .uppy-size--xl .uppy-DashboardItem-preview {\n    height: 140px; }\n\n.uppy-DashboardItem-fileInfoAndButtons {\n  flex-grow: 1;\n  padding-right: 8px;\n  padding-left: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .uppy-size--md .uppy-DashboardItem-fileInfoAndButtons {\n    align-items: flex-start;\n    width: 100%;\n    padding: 0;\n    padding-top: 9px; }\n\n.uppy-DashboardItem-fileInfo {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.uppy-DashboardItem-actionWrapper {\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.uppy-DashboardItem.is-inprogress .uppy-DashboardItem-previewInnerWrap:after {\n  display: block; }\n\n.uppy-DashboardItem.is-error .uppy-DashboardItem-previewInnerWrap:after {\n  display: block; }\n\n.uppy-DashboardItem.is-inprogress:not(.is-resumable) .uppy-DashboardItem-action--remove {\n  display: none; }\n\n.uppy-Dashboard-FileCard {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1005;\n  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column; }\n  .uppy-Dashboard-FileCard .uppy-DashboardContent-bar {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .uppy-Dashboard-FileCard .uppy-Dashboard-FileCard-actions {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.uppy-Dashboard-FileCard-inner {\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column; }\n\n.uppy-Dashboard-FileCard-preview {\n  height: 60%;\n  flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 0;\n  border-bottom: 1px solid #eaeaea;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.uppy-Dashboard-FileCard-preview img.uppy-DashboardItem-previewImg {\n  max-width: 90%;\n  max-height: 90%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  flex: 0 0 auto;\n  border-radius: 3px;\n  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.15); }\n\n.uppy-Dashboard-FileCard-info {\n  height: 40%;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 30px 20px 20px 20px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.uppy-Dashboard-FileCard-fieldset {\n  font-size: 0;\n  border: 0;\n  padding: 0;\n  max-width: 640px;\n  margin: auto;\n  margin-bottom: 12px; }\n\n.uppy-Dashboard-FileCard-label {\n  display: inline-block;\n  vertical-align: middle;\n  width: 22%;\n  font-size: 12px;\n  color: #525252; }\n  .uppy-size--md .uppy-Dashboard-FileCard-label {\n    font-size: 14px; }\n\n.uppy-Dashboard-FileCard-input {\n  display: inline-block;\n  vertical-align: middle;\n  width: 78%; }\n\n.uppy-Dashboard-FileCard-actions {\n  height: 55px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-top: 1px solid #eaeaea;\n  padding: 0 15px;\n  background-color: #fafafa;\n  display: flex;\n  align-items: center; }\n  .uppy-size--md .uppy-Dashboard-FileCard-actions {\n    height: 65px; }\n\n.uppy-Dashboard-FileCard-actionsBtn {\n  margin-right: 10px; }\n\n.uppy-transition-slideDownUp-enter {\n  opacity: 0.01;\n  transform: translate3d(0, -105%, 0);\n  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out; }\n\n.uppy-transition-slideDownUp-enter.uppy-transition-slideDownUp-enter-active {\n  opacity: 1;\n  transform: translate3d(0, 0, 0); }\n\n.uppy-transition-slideDownUp-leave {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out; }\n\n.uppy-transition-slideDownUp-leave.uppy-transition-slideDownUp-leave-active {\n  opacity: 0.01;\n  transform: translate3d(0, -105%, 0); }\n\n.uppy-Dashboard--modal {\n  z-index: 1001; }\n\n.uppy-Dashboard--modal[aria-hidden=true] {\n  display: none; }\n\n@-webkit-keyframes uppy-Dashboard-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes uppy-Dashboard-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes uppy-Dashboard-fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes uppy-Dashboard-fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes uppy-Dashboard-slideDownAndFadeIn {\n  from {\n    transform: translate3d(-50%, -70%, 0);\n    opacity: 0; }\n  to {\n    transform: translate3d(-50%, -50%, 0);\n    opacity: 1; } }\n\n@keyframes uppy-Dashboard-slideDownAndFadeIn {\n  from {\n    transform: translate3d(-50%, -70%, 0);\n    opacity: 0; }\n  to {\n    transform: translate3d(-50%, -50%, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes uppy-Dashboard-slideDownAndFadeIn--small {\n  from {\n    transform: translate3d(0, -20%, 0);\n    opacity: 0; }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@keyframes uppy-Dashboard-slideDownAndFadeIn--small {\n  from {\n    transform: translate3d(0, -20%, 0);\n    opacity: 0; }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes uppy-Dashboard-slideUpFadeOut {\n  from {\n    transform: translate3d(-50%, -50%, 0);\n    opacity: 1; }\n  to {\n    transform: translate3d(-50%, -70%, 0);\n    opacity: 0; } }\n\n@keyframes uppy-Dashboard-slideUpFadeOut {\n  from {\n    transform: translate3d(-50%, -50%, 0);\n    opacity: 1; }\n  to {\n    transform: translate3d(-50%, -70%, 0);\n    opacity: 0; } }\n\n@-webkit-keyframes uppy-Dashboard-slideUpFadeOut--small {\n  from {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; }\n  to {\n    transform: translate3d(0, -20%, 0);\n    opacity: 0; } }\n\n@keyframes uppy-Dashboard-slideUpFadeOut--small {\n  from {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; }\n  to {\n    transform: translate3d(0, -20%, 0);\n    opacity: 0; } }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose > .uppy-Dashboard-inner {\n  -webkit-animation: uppy-Dashboard-slideDownAndFadeIn--small 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-slideDownAndFadeIn--small 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose > .uppy-Dashboard-inner {\n      -webkit-animation: uppy-Dashboard-slideDownAndFadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);\n              animation: uppy-Dashboard-slideDownAndFadeIn 0.3s cubic-bezier(0, 0, 0.2, 1); } }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose > .uppy-Dashboard-overlay {\n  -webkit-animation: uppy-Dashboard-fadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-fadeIn 0.3s cubic-bezier(0, 0, 0.2, 1); }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing > .uppy-Dashboard-inner {\n  -webkit-animation: uppy-Dashboard-slideUpFadeOut--small 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-slideUpFadeOut--small 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing > .uppy-Dashboard-inner {\n      -webkit-animation: uppy-Dashboard-slideUpFadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);\n              animation: uppy-Dashboard-slideUpFadeOut 0.3s cubic-bezier(0, 0, 0.2, 1); } }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing > .uppy-Dashboard-overlay {\n  -webkit-animation: uppy-Dashboard-fadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-fadeOut 0.3s cubic-bezier(0, 0, 0.2, 1); }\n\n.uppy-Dashboard-isFixed {\n  overflow: hidden;\n  height: 100vh; }\n\n.uppy-Dashboard--modal .uppy-Dashboard-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1001; }\n\n.uppy-Dashboard-inner {\n  position: relative;\n  background-color: #fafafa;\n  max-width: 100%;\n  max-height: 100%;\n  outline: none;\n  border: 1px solid #eaeaea;\n  border-radius: 5px; }\n  .uppy-size--md .uppy-Dashboard-inner {\n    min-height: auto; }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard-inner {\n      width: 750px;\n      height: 550px; } }\n  .uppy-Dashboard--modal .uppy-Dashboard-inner {\n    z-index: 1002; }\n\n.uppy-Dashboard-innerWrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  border-radius: 5px;\n  opacity: 0; }\n\n.uppy-Dashboard--isInnerWrapVisible .uppy-Dashboard-innerWrap {\n  opacity: 1; }\n\n.uppy-Dashboard--modal .uppy-Dashboard-inner {\n  position: fixed;\n  top: 35px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border: none; }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard--modal .uppy-Dashboard-inner {\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      box-shadow: 0 5px 15px 4px rgba(0, 0, 0, 0.15); } }\n\n.uppy-Dashboard-close {\n  display: block;\n  position: absolute;\n  top: -33px;\n  right: -2px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 27px;\n  z-index: 1005; }\n  .uppy-Dashboard-close:focus {\n    outline: none; }\n  .uppy-Dashboard-close::-moz-focus-inner {\n    border: 0; }\n  .uppy-Dashboard-close:focus {\n    color: #8cb8ed; }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard-close {\n      font-size: 35px;\n      top: -10px;\n      right: -35px; } }\n\n.uppy-DashboardAddFiles {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  position: relative;\n  text-align: center;\n  flex: 1; }\n  .uppy-size--md .uppy-DashboardAddFiles {\n    margin: 7px;\n    border-radius: 3px;\n    border: 1px dashed #dfdfdf; }\n  .uppy-Dashboard-AddFilesPanel .uppy-DashboardAddFiles {\n    border: none; }\n  .uppy-Dashboard--modal .uppy-DashboardAddFiles {\n    border-color: #cfcfcf; }\n\n.uppy-DashboardTabs {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n  .uppy-size--md .uppy-DashboardTabs {\n    align-items: center;\n    height: auto; }\n\n.uppy-DashboardTabs-title {\n  font-size: 14px;\n  line-height: 30px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  color: #525252; }\n  .uppy-size--md .uppy-DashboardTabs-title {\n    font-size: 16px;\n    line-height: 40px; }\n\n.uppy-DashboardAddFiles-info {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-basis: 0%;\n  display: none; }\n  .uppy-size--height-md .uppy-DashboardAddFiles-info {\n    display: block; }\n  .uppy-size--md .uppy-DashboardAddFiles-info {\n    position: absolute;\n    bottom: 30px;\n    left: 0;\n    right: 0;\n    padding-top: 30px;\n    padding-bottom: 0; }\n\n.uppy-Dashboard-browse {\n  cursor: pointer;\n  color: rgba(34, 117, 215, 0.9); }\n  .uppy-Dashboard-browse:focus {\n    outline: none; }\n  .uppy-Dashboard-browse::-moz-focus-inner {\n    border: 0; }\n  .uppy-Dashboard-browse:hover, .uppy-Dashboard-browse:focus {\n    border-bottom: 2px solid #2275d7; }\n\n.uppy-DashboardTabs-list {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 2;\n  flex-shrink: 1;\n  flex-basis: 0%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  margin-top: 10px;\n  padding: 2px 0; }\n  .uppy-size--md .uppy-DashboardTabs-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 600px;\n    overflow-y: initial;\n    margin-top: 15px;\n    padding-top: 0; }\n\n.uppy-DashboardTab {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 0px 2px; }\n  .uppy-size--md .uppy-DashboardTab {\n    width: initial;\n    margin-bottom: 20px;\n    border-bottom: none;\n    padding: 0; }\n\n.uppy-DashboardTab-btn {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  color: #525252;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 15px;\n  line-height: 1;\n  text-align: center; }\n  .uppy-size--md .uppy-DashboardTab-btn {\n    width: 86px;\n    margin-right: 1px;\n    flex-direction: column;\n    padding: 10px 3px;\n    border-radius: 5px; }\n\n.uppy-DashboardTab-btn::-moz-focus-inner {\n  border: 0; }\n\n.uppy-DashboardTab-btn:hover {\n  background-color: #f1f3f6; }\n\n.uppy-DashboardTab-btn:active,\n.uppy-DashboardTab-btn:focus {\n  background-color: #eceef2;\n  outline: none; }\n\n.uppy-DashboardTab-btn svg {\n  margin-right: 10px; }\n  .uppy-size--md .uppy-DashboardTab-btn svg {\n    margin-right: 0; }\n\n.uppy-DashboardTab-btn svg {\n  max-width: 100%;\n  max-height: 100%;\n  display: inline-block;\n  vertical-align: text-top;\n  overflow: hidden;\n  transition: transform ease-in-out .15s; }\n\n.uppy-DashboardTab-name {\n  font-size: 14px;\n  font-weight: 500; }\n  .uppy-size--md .uppy-DashboardTab-name {\n    font-size: 11px;\n    line-height: 14px;\n    margin-top: 8px;\n    margin-bottom: 0; }\n\n.uppy-DashboardTab svg {\n  width: 18px;\n  height: 18px;\n  vertical-align: middle; }\n  .uppy-size--md .uppy-DashboardTab svg {\n    width: 27px;\n    height: 27px; }\n\n.uppy-Dashboard-input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.uppy-DashboardContent-bar {\n  flex-shrink: 0;\n  height: 40px;\n  width: 100%;\n  padding: 0 10px;\n  z-index: 1004;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  border-bottom: 1px solid #eaeaea;\n  background-color: #fafafa; }\n  .uppy-size--md .uppy-DashboardContent-bar {\n    height: 50px;\n    padding: 0 15px; }\n\n.uppy-DashboardContent-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 12px;\n  line-height: 40px;\n  font-weight: 500;\n  width: 100%;\n  max-width: 170px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n  margin: auto; }\n  .uppy-size--md .uppy-DashboardContent-title {\n    font-size: 14px;\n    line-height: 50px;\n    max-width: 300px; }\n\n.uppy-DashboardContent-back {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 400;\n  cursor: pointer;\n  color: #2275d7;\n  padding: 7px 6px;\n  margin-left: -6px; }\n  .uppy-DashboardContent-back:focus {\n    outline: none; }\n  .uppy-DashboardContent-back::-moz-focus-inner {\n    border: 0; }\n  .uppy-DashboardContent-back:hover {\n    color: #1b5dab; }\n  .uppy-DashboardContent-back:focus {\n    background-color: #eceef2; }\n  .uppy-size--md .uppy-DashboardContent-back {\n    font-size: 14px; }\n\n.uppy-DashboardContent-addMore {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  border-radius: 3px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #2275d7;\n  width: 29px;\n  height: 29px;\n  padding: 7px 8px;\n  margin-right: -5px; }\n  .uppy-DashboardContent-addMore:focus {\n    outline: none; }\n  .uppy-DashboardContent-addMore::-moz-focus-inner {\n    border: 0; }\n  .uppy-DashboardContent-addMore:hover {\n    color: #1b5dab; }\n  .uppy-DashboardContent-addMore:focus {\n    background-color: #eceef2; }\n  .uppy-size--md .uppy-DashboardContent-addMore {\n    font-size: 14px;\n    width: auto;\n    height: auto;\n    margin-right: -8px; }\n\n.uppy-DashboardContent-addMore svg {\n  vertical-align: baseline;\n  margin-right: 4px; }\n  .uppy-size--md .uppy-DashboardContent-addMore svg {\n    width: 11px;\n    height: 11px; }\n\n.uppy-DashboardContent-addMoreCaption {\n  display: none; }\n  .uppy-size--md .uppy-DashboardContent-addMoreCaption {\n    display: inline; }\n\n.uppy-DashboardContent-panel {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: whitesmoke;\n  overflow: hidden;\n  z-index: 1005;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n.uppy-Dashboard-AddFilesPanel {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fafafa;\n  background: linear-gradient(0deg, #fafafa 35%, rgba(250, 250, 250, 0.85) 100%);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  z-index: 1005;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column; }\n\n.uppy-Dashboard--isAddFilesPanelVisible .uppy-Dashboard-files {\n  -webkit-filter: blur(2px);\n          filter: blur(2px); }\n\n.uppy-Dashboard-progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 12%; }\n\n.uppy-Dashboard-progressBarContainer.is-active {\n  z-index: 1004;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.uppy-Dashboard-filesContainer {\n  position: relative;\n  overflow-y: hidden;\n  margin: 0;\n  flex: 1; }\n  .uppy-Dashboard-filesContainer:after {\n    content: '';\n    display: table;\n    clear: both; }\n\n.uppy-Dashboard-files {\n  margin: 0;\n  padding: 0 0 10px 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  flex: 1; }\n\n.uppy-size--md .uppy-Dashboard-files {\n  padding-top: 10px; }\n\n.uppy-Dashboard-dropFilesHereHint {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  bottom: 7px;\n  left: 7px;\n  padding-top: 90px;\n  border: 1px dashed #2275d7;\n  border-radius: 3px;\n  z-index: 2000;\n  text-align: center;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 1v1C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2V1zm0 0V0c13.254 0 24 10.746 24 24S37.254 48 24 48 0 37.254 0 24 10.746 0 24 0v1zm7.707 19.293a.999.999 0 1 1-1.414 1.414L25 16.414V34a1 1 0 1 1-2 0V16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l7-7a.999.999 0 0 1 1.414 0l7 7z' fill='%232275D7' fill-rule='nonzero'/%3E%3C/svg%3E\");\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  color: #707070;\n  font-size: 16px; }\n\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-dropFilesHereHint {\n  visibility: visible; }\n\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-DashboardContent-bar,\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-files,\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-progressindicators {\n  opacity: 0.15; }\n\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-DashboardAddFiles {\n  opacity: 0.03; }\n\n.uppy-Dashboard-dropFilesTitle {\n  max-width: 300px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1.35;\n  font-weight: 400;\n  color: #525252;\n  margin: auto;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 0%; }\n  .uppy-size--md .uppy-Dashboard-dropFilesTitle {\n    max-width: 470px;\n    font-size: 27px; }\n\n.uppy-Dashboard-note {\n  font-size: 14px;\n  line-height: 1.25;\n  text-align: center;\n  color: #757575;\n  max-width: 350px;\n  margin: auto;\n  padding: 0 15px; }\n  .uppy-size--md .uppy-Dashboard-note {\n    font-size: 16px;\n    line-height: 1.35;\n    max-width: 600px; }\n\na.uppy-Dashboard-poweredBy {\n  display: inline-block;\n  text-align: center;\n  font-size: 11px;\n  color: #939393;\n  text-decoration: none;\n  margin-top: 8px; }\n\n.uppy-Dashboard-poweredByIcon {\n  stroke: #939393;\n  fill: none;\n  margin-left: 1px;\n  margin-right: 1px;\n  position: relative;\n  top: 1px;\n  opacity: 0.9;\n  vertical-align: text-top; }\n\n.uppy-DashboardItem-previewIcon {\n  width: 25px;\n  height: 25px;\n  z-index: 100;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  .uppy-size--md .uppy-DashboardItem-previewIcon {\n    width: 38px;\n    height: 38px; }\n  .uppy-DashboardItem-previewIcon svg {\n    width: 100%;\n    height: 100%; }\n\n.uppy-DashboardItem-previewIconWrap {\n  height: 76px;\n  max-height: 75%;\n  position: relative; }\n\n.uppy-DashboardItem-previewIconBg {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 1px);\n          filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 1px); }\n\n.uppy-Dashboard-upload {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .uppy-size--md .uppy-Dashboard-upload {\n    width: 60px;\n    height: 60px; }\n\n.uppy-Dashboard-upload .UppyIcon {\n  position: relative;\n  top: 1px;\n  width: 50%; }\n\n.uppy-Dashboard-uploadCount {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  background-color: #1bb240;\n  color: #fff;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 8px; }\n  .uppy-size--md .uppy-Dashboard-uploadCount {\n    width: 18px;\n    height: 18px;\n    line-height: 18px;\n    font-size: 9px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/cuid/index.js":
/*!************************************!*\
  !*** ./node_modules/cuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

var fingerprint = __webpack_require__(/*! ./lib/fingerprint.js */ "./node_modules/cuid/lib/fingerprint.browser.js");
var pad = __webpack_require__(/*! ./lib/pad.js */ "./node_modules/cuid/lib/pad.js");
var getRandomValue = __webpack_require__(/*! ./lib/getRandomValue.js */ "./node_modules/cuid/lib/getRandomValue.browser.js");

var c = 0,
  blockSize = 4,
  base = 36,
  discreteValues = Math.pow(base, blockSize);

function randomBlock () {
  return pad((getRandomValue() *
    discreteValues << 0)
    .toString(base), blockSize);
}

function safeCounter () {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal
  return c - 1;
}

function cuid () {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c', // hard-coded allows for sequential access

    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    timestamp = (new Date().getTime()).toString(base),

    // Prevent same-machine collisions.
    counter = pad(safeCounter().toString(base), blockSize),

    // A few chars to generate distinct ids for different
    // clients (so different computers are far less
    // likely to generate the same id)
    print = fingerprint(),

    // Grab some more chars from Math.random()
    random = randomBlock() + randomBlock();

  return letter + timestamp + counter + print + random;
}

cuid.slug = function slug () {
  var date = new Date().getTime().toString(36),
    counter = safeCounter().toString(36).slice(-4),
    print = fingerprint().slice(0, 1) +
      fingerprint().slice(-1),
    random = randomBlock().slice(-2);

  return date.slice(-2) +
    counter + print + random;
};

cuid.isCuid = function isCuid (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  if (stringToCheck.startsWith('c')) return true;
  return false;
};

cuid.isSlug = function isSlug (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  var stringLength = stringToCheck.length;
  if (stringLength >= 7 && stringLength <= 10) return true;
  return false;
};

cuid.fingerprint = fingerprint;

module.exports = cuid;


/***/ }),

/***/ "./node_modules/cuid/lib/fingerprint.browser.js":
/*!******************************************************!*\
  !*** ./node_modules/cuid/lib/fingerprint.browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pad = __webpack_require__(/*! ./pad.js */ "./node_modules/cuid/lib/pad.js");

var env = typeof window === 'object' ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  navigator.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};


/***/ }),

/***/ "./node_modules/cuid/lib/getRandomValue.browser.js":
/*!*********************************************************!*\
  !*** ./node_modules/cuid/lib/getRandomValue.browser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var getRandomValue;

var crypto = typeof window !== 'undefined' &&
  (window.crypto || window.msCrypto) ||
  typeof self !== 'undefined' &&
  self.crypto;

if (crypto) {
    var lim = Math.pow(2, 32) - 1;
    getRandomValue = function () {
        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
    };
} else {
    getRandomValue = Math.random;
}

module.exports = getRandomValue;


/***/ }),

/***/ "./node_modules/cuid/lib/pad.js":
/*!**************************************!*\
  !*** ./node_modules/cuid/lib/pad.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function pad (num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};


/***/ }),

/***/ "./node_modules/is-shallow-equal/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-shallow-equal/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isShallowEqual (a, b) {
  if (a === b) return true
  for (var i in a) if (!(i in b)) return false
  for (var i in b) if (a[i] !== b[i]) return false
  return true
}


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/mime-match/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-match/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wildcard = __webpack_require__(/*! wildcard */ "./node_modules/wildcard/index.js");
var reMimePartSplit = /[\/\+\.]/;

/**
  # mime-match

  A simple function to checker whether a target mime type matches a mime-type
  pattern (e.g. image/jpeg matches image/jpeg OR image/*).

  ## Example Usage

  <<< example.js

**/
module.exports = function(target, pattern) {
  function test(pattern) {
    var result = wildcard(pattern, target, reMimePartSplit);

    // ensure that we have a valid mime type (should have two parts)
    return result && result.length >= 2;
  }

  return pattern ? test(pattern.split(';')[0]) : test;
};


/***/ }),

/***/ "./node_modules/namespace-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/namespace-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Create an event emitter with namespaces
* @name createNamespaceEmitter
* @example
* var emitter = require('./index')()
*
* emitter.on('*', function () {
*   console.log('all events emitted', this.event)
* })
*
* emitter.on('example', function () {
*   console.log('example event emitted')
* })
*/
module.exports = function createNamespaceEmitter () {
  var emitter = {}
  var _fns = emitter._fns = {}

  /**
  * Emit an event. Optionally namespace the event. Handlers are fired in the order in which they were added with exact matches taking precedence. Separate the namespace and event with a `:`
  * @name emit
  * @param {String} event – the name of the event, with optional namespace
  * @param {...*} data – up to 6 arguments that are passed to the event listener
  * @example
  * emitter.emit('example')
  * emitter.emit('demo:test')
  * emitter.emit('data', { example: true}, 'a string', 1)
  */
  emitter.emit = function emit (event, arg1, arg2, arg3, arg4, arg5, arg6) {
    var toEmit = getListeners(event)

    if (toEmit.length) {
      emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6])
    }
  }

  /**
  * Create en event listener.
  * @name on
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.on('example', function () {})
  * emitter.on('demo', function () {})
  */
  emitter.on = function on (event, fn) {
    if (!_fns[event]) {
      _fns[event] = []
    }

    _fns[event].push(fn)
  }

  /**
  * Create en event listener that fires once.
  * @name once
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.once('example', function () {})
  * emitter.once('demo', function () {})
  */
  emitter.once = function once (event, fn) {
    function one () {
      fn.apply(this, arguments)
      emitter.off(event, one)
    }
    this.on(event, one)
  }

  /**
  * Stop listening to an event. Stop all listeners on an event by only passing the event name. Stop a single listener by passing that event handler as a callback.
  * You must be explicit about what will be unsubscribed: `emitter.off('demo')` will unsubscribe an `emitter.on('demo')` listener,
  * `emitter.off('demo:example')` will unsubscribe an `emitter.on('demo:example')` listener
  * @name off
  * @param {String} event
  * @param {Function} [fn] – the specific handler
  * @example
  * emitter.off('example')
  * emitter.off('demo', function () {})
  */
  emitter.off = function off (event, fn) {
    var keep = []

    if (event && fn) {
      var fns = this._fns[event]
      var i = 0
      var l = fns ? fns.length : 0

      for (i; i < l; i++) {
        if (fns[i] !== fn) {
          keep.push(fns[i])
        }
      }
    }

    keep.length ? this._fns[event] = keep : delete this._fns[event]
  }

  function getListeners (e) {
    var out = _fns[e] ? _fns[e] : []
    var idx = e.indexOf(':')
    var args = (idx === -1) ? [e] : [e.substring(0, idx), e.substring(idx + 1)]

    var keys = Object.keys(_fns)
    var i = 0
    var l = keys.length

    for (i; i < l; i++) {
      var key = keys[i]
      if (key === '*') {
        out = out.concat(_fns[key])
      }

      if (args.length === 2 && args[0] === key) {
        out = out.concat(_fns[key])
        break
      }
    }

    return out
  }

  function emitAll (e, fns, args) {
    var i = 0
    var l = fns.length

    for (i; i < l; i++) {
      if (!fns[i]) break
      fns[i].event = e
      fns[i].apply(fns[i], args)
    }
  }

  return emitter
}


/***/ }),

/***/ "./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js")) :
  undefined;
}(this, (function (preact) { 'use strict';

function getKey(vnode) {
	return vnode.attributes && vnode.attributes.key;
}

function getComponentBase(component) {
	return component.base;
}

function onlyChild(children) {
	return children && children[0];
}

function filterNullChildren(children) {
	return children && children.filter(function (i) {
		return i !== null;
	});
}

function find(arr, iter) {
	for (var i = arr.length; i--;) {
		if (iter(arr[i])) return true;
	}
	return false;
}

function inChildrenByKey(children, key) {
	return find(children, function (c) {
		return getKey(c) === key;
	});
}

function inChildren(children, child) {
	return inChildrenByKey(children, getKey(child));
}

function isShownInChildrenByKey(children, key, showProp) {
	return find(children, function (c) {
		return getKey(c) === key && c.props[showProp];
	});
}

function isShownInChildren(children, child, showProp) {
	return isShownInChildrenByKey(children, getKey(child), showProp);
}

function mergeChildMappings(prev, next) {
	var ret = [];

	var nextChildrenPending = {},
	    pendingChildren = [];
	prev.forEach(function (c) {
		var key = getKey(c);
		if (inChildrenByKey(next, key)) {
			if (pendingChildren.length) {
				nextChildrenPending[key] = pendingChildren;
				pendingChildren = [];
			}
		} else {
			pendingChildren.push(c);
		}
	});

	next.forEach(function (c) {
		var key = getKey(c);
		if (nextChildrenPending.hasOwnProperty(key)) {
			ret = ret.concat(nextChildrenPending[key]);
		}
		ret.push(c);
	});

	return ret.concat(pendingChildren);
}

var SPACE = ' ';
var RE_CLASS = /[\n\t\r]+/g;

var norm = function (elemClass) {
	return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
};

function addClass(elem, className) {
	if (elem.classList) {
		var _elem$classList;

		(_elem$classList = elem.classList).add.apply(_elem$classList, className.split(' '));
	} else {
		elem.className += ' ' + className;
	}
}

function removeClass(elem, needle) {
	needle = needle.trim();
	if (elem.classList) {
		var _elem$classList2;

		(_elem$classList2 = elem.classList).remove.apply(_elem$classList2, needle.split(' '));
	} else {
		var elemClass = elem.className.trim();
		var className = norm(elemClass);
		needle = SPACE + needle + SPACE;
		while (className.indexOf(needle) >= 0) {
			className = className.replace(needle, SPACE);
		}
		elem.className = className.trim();
	}
}

var EVENT_NAME_MAP = {
	transitionend: {
		transition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
		MozTransition: 'mozTransitionEnd',
		OTransition: 'oTransitionEnd',
		msTransition: 'MSTransitionEnd'
	},

	animationend: {
		animation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd',
		MozAnimation: 'mozAnimationEnd',
		OAnimation: 'oAnimationEnd',
		msAnimation: 'MSAnimationEnd'
	}
};

var endEvents = [];

function detectEvents() {
	var testEl = document.createElement('div'),
	    style = testEl.style;

	if (!('AnimationEvent' in window)) {
		delete EVENT_NAME_MAP.animationend.animation;
	}

	if (!('TransitionEvent' in window)) {
		delete EVENT_NAME_MAP.transitionend.transition;
	}

	for (var baseEventName in EVENT_NAME_MAP) {
		var baseEvents = EVENT_NAME_MAP[baseEventName];
		for (var styleName in baseEvents) {
			if (styleName in style) {
				endEvents.push(baseEvents[styleName]);
				break;
			}
		}
	}
}

if (typeof window !== 'undefined') {
	detectEvents();
}

function addEndEventListener(node, eventListener) {
	if (!endEvents.length) {
		return window.setTimeout(eventListener, 0);
	}
	endEvents.forEach(function (endEvent) {
		node.addEventListener(endEvent, eventListener, false);
	});
}

function removeEndEventListener(node, eventListener) {
	if (!endEvents.length) return;
	endEvents.forEach(function (endEvent) {
		node.removeEventListener(endEvent, eventListener, false);
	});
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var TICK = 17;

var CSSTransitionGroupChild = function (_Component) {
	inherits(CSSTransitionGroupChild, _Component);

	function CSSTransitionGroupChild() {
		var _temp, _this, _ret;

		classCallCheck(this, CSSTransitionGroupChild);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.flushClassNameQueue = function () {
			if (getComponentBase(_this)) {
				addClass(getComponentBase(_this), _this.classNameQueue.join(' '));
			}
			_this.classNameQueue.length = 0;
			_this.timeout = null;
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
		var _this2 = this;

		var node = getComponentBase(this);

		var className = this.props.name[animationType] || this.props.name + '-' + animationType;
		var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
		var timer = null;

		if (this.endListener) {
			this.endListener();
		}

		this.endListener = function (e) {
			if (e && e.target !== node) return;

			clearTimeout(timer);
			removeClass(node, className);
			removeClass(node, activeClassName);
			removeEndEventListener(node, _this2.endListener);
			_this2.endListener = null;

			if (finishCallback) {
				finishCallback();
			}
		};

		if (timeout) {
			timer = setTimeout(this.endListener, timeout);
			this.transitionTimeouts.push(timer);
		} else {
			addEndEventListener(node, this.endListener);
		}

		addClass(node, className);

		this.queueClass(activeClassName);
	};

	CSSTransitionGroupChild.prototype.queueClass = function queueClass(className) {
		this.classNameQueue.push(className);

		if (!this.timeout) {
			this.timeout = setTimeout(this.flushClassNameQueue, TICK);
		}
	};

	CSSTransitionGroupChild.prototype.stop = function stop() {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.classNameQueue.length = 0;
			this.timeout = null;
		}
		if (this.endListener) {
			this.endListener();
		}
	};

	CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
		this.classNameQueue = [];
		this.transitionTimeouts = [];
	};

	CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.transitionTimeouts.forEach(function (timeout) {
			clearTimeout(timeout);
		});
	};

	CSSTransitionGroupChild.prototype.componentWillEnter = function componentWillEnter(done) {
		if (this.props.enter) {
			this.transition('enter', done, this.props.enterTimeout);
		} else {
			done();
		}
	};

	CSSTransitionGroupChild.prototype.componentWillLeave = function componentWillLeave(done) {
		if (this.props.leave) {
			this.transition('leave', done, this.props.leaveTimeout);
		} else {
			done();
		}
	};

	CSSTransitionGroupChild.prototype.render = function render() {
		return onlyChild(this.props.children);
	};

	return CSSTransitionGroupChild;
}(preact.Component);

var CSSTransitionGroup = function (_Component) {
	inherits(CSSTransitionGroup, _Component);

	function CSSTransitionGroup(props) {
		classCallCheck(this, CSSTransitionGroup);

		var _this = possibleConstructorReturn(this, _Component.call(this));

		_this.renderChild = function (child) {
			var _this$props = _this.props;
			var transitionName = _this$props.transitionName;
			var transitionEnter = _this$props.transitionEnter;
			var transitionLeave = _this$props.transitionLeave;
			var transitionEnterTimeout = _this$props.transitionEnterTimeout;
			var transitionLeaveTimeout = _this$props.transitionLeaveTimeout;
			var key = getKey(child);
			return preact.h(
				CSSTransitionGroupChild,
				{
					key: key,
					ref: function (c) {
						if (!(_this.refs[key] = c)) child = null;
					},
					name: transitionName,
					enter: transitionEnter,
					leave: transitionLeave,
					enterTimeout: transitionEnterTimeout,
					leaveTimeout: transitionLeaveTimeout },
				child
			);
		};

		_this.refs = {};
		_this.state = {
			children: (props.children || []).slice()
		};
		return _this;
	}

	CSSTransitionGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate(_, _ref) {
		var children = _ref.children;

		return children !== this.state.children;
	};

	CSSTransitionGroup.prototype.componentWillMount = function componentWillMount() {
		this.currentlyTransitioningKeys = {};
		this.keysToEnter = [];
		this.keysToLeave = [];
	};

	CSSTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
		var _this2 = this;

		var children = _ref2.children;
		var exclusive = _ref2.exclusive;
		var showProp = _ref2.showProp;

		var nextChildMapping = filterNullChildren(children || []).slice();

		var prevChildMapping = filterNullChildren(exclusive ? this.props.children : this.state.children);

		var newChildren = mergeChildMappings(prevChildMapping, nextChildMapping);

		if (showProp) {
			newChildren = newChildren.map(function (c) {
				if (!c.props[showProp] && isShownInChildren(prevChildMapping, c, showProp)) {
					var _cloneElement;

					c = preact.cloneElement(c, (_cloneElement = {}, _cloneElement[showProp] = true, _cloneElement));
				}
				return c;
			});
		}

		if (exclusive) {
			newChildren.forEach(function (c) {
				return _this2.stop(getKey(c));
			});
		}

		this.setState({ children: newChildren });
		this.forceUpdate();

		nextChildMapping.forEach(function (c) {
			var key = c.key;
			var hasPrev = prevChildMapping && inChildren(prevChildMapping, c);
			if (showProp) {
				if (hasPrev) {
					var showInPrev = isShownInChildren(prevChildMapping, c, showProp),
					    showInNow = c.props[showProp];
					if (!showInPrev && showInNow && !_this2.currentlyTransitioningKeys[key]) {
						_this2.keysToEnter.push(key);
					}
				}
			} else if (!hasPrev && !_this2.currentlyTransitioningKeys[key]) {
				_this2.keysToEnter.push(key);
			}
		});

		prevChildMapping.forEach(function (c) {
			var key = c.key;
			var hasNext = nextChildMapping && inChildren(nextChildMapping, c);
			if (showProp) {
				if (hasNext) {
					var showInNext = isShownInChildren(nextChildMapping, c, showProp);
					var showInNow = c.props[showProp];
					if (!showInNext && showInNow && !_this2.currentlyTransitioningKeys[key]) {
						_this2.keysToLeave.push(key);
					}
				}
			} else if (!hasNext && !_this2.currentlyTransitioningKeys[key]) {
				_this2.keysToLeave.push(key);
			}
		});
	};

	CSSTransitionGroup.prototype.performEnter = function performEnter(key) {
		var _this3 = this;

		this.currentlyTransitioningKeys[key] = true;
		var component = this.refs[key];
		if (component.componentWillEnter) {
			component.componentWillEnter(function () {
				return _this3._handleDoneEntering(key);
			});
		} else {
			this._handleDoneEntering(key);
		}
	};

	CSSTransitionGroup.prototype._handleDoneEntering = function _handleDoneEntering(key) {
		delete this.currentlyTransitioningKeys[key];
		var currentChildMapping = filterNullChildren(this.props.children),
		    showProp = this.props.showProp;
		if (!currentChildMapping || !showProp && !inChildrenByKey(currentChildMapping, key) || showProp && !isShownInChildrenByKey(currentChildMapping, key, showProp)) {
			this.performLeave(key);
		} else {
			this.setState({ children: currentChildMapping });
		}
	};

	CSSTransitionGroup.prototype.stop = function stop(key) {
		delete this.currentlyTransitioningKeys[key];
		var component = this.refs[key];
		if (component) component.stop();
	};

	CSSTransitionGroup.prototype.performLeave = function performLeave(key) {
		var _this4 = this;

		this.currentlyTransitioningKeys[key] = true;
		var component = this.refs[key];
		if (component && component.componentWillLeave) {
			component.componentWillLeave(function () {
				return _this4._handleDoneLeaving(key);
			});
		} else {
			this._handleDoneLeaving(key);
		}
	};

	CSSTransitionGroup.prototype._handleDoneLeaving = function _handleDoneLeaving(key) {
		delete this.currentlyTransitioningKeys[key];
		var showProp = this.props.showProp,
		    currentChildMapping = filterNullChildren(this.props.children);
		if (showProp && currentChildMapping && isShownInChildrenByKey(currentChildMapping, key, showProp)) {
			this.performEnter(key);
		} else if (!showProp && currentChildMapping && inChildrenByKey(currentChildMapping, key)) {
			this.performEnter(key);
		} else {
			this.setState({ children: currentChildMapping });
		}
	};

	CSSTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
		var _this5 = this;

		var keysToEnter = this.keysToEnter;
		var keysToLeave = this.keysToLeave;

		this.keysToEnter = [];
		keysToEnter.forEach(function (k) {
			return _this5.performEnter(k);
		});
		this.keysToLeave = [];
		keysToLeave.forEach(function (k) {
			return _this5.performLeave(k);
		});
	};

	CSSTransitionGroup.prototype.render = function render(_ref3, _ref4) {
		var Component = _ref3.component;
		var transitionName = _ref3.transitionName;
		var transitionEnter = _ref3.transitionEnter;
		var transitionLeave = _ref3.transitionLeave;
		var transitionEnterTimeout = _ref3.transitionEnterTimeout;
		var transitionLeaveTimeout = _ref3.transitionLeaveTimeout;
		var c = _ref3.children;
		var props = objectWithoutProperties(_ref3, ['component', 'transitionName', 'transitionEnter', 'transitionLeave', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'children']);
		var children = _ref4.children;

		return preact.h(
			Component,
			props,
			filterNullChildren(children).map(this.renderChild)
		);
	};

	return CSSTransitionGroup;
}(preact.Component);
CSSTransitionGroup.defaultProps = {
	component: 'span',
	transitionEnter: true,
	transitionLeave: true
};

return CSSTransitionGroup;

})));
//# sourceMappingURL=preact-css-transition-group.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.esm.js":
/*!************************************************!*\
  !*** ./node_modules/preact/dist/preact.esm.js ***!
  \************************************************/
/*! exports provided: default, h, createElement, cloneElement, Component, render, rerender, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virtual DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;

  var defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.esm.js.map


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.10.9
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array ob object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(step);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['title', 'titleText', 'text', 'html', 'icon', 'hideClass', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
      ;
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding);
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
    iOSfix();
    IEfix();
    setAriaHidden();

    if (scrollbarPadding) {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (isPromise(params.inputOptions)) {
      showLoading();
      params.inputOptions.then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    params.inputValue.then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);
      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1];
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        select.appendChild(option);
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        result.push([key, value]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        result.push([key, inputOptions[key]]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return innerParams.inputValidator(inputValue, innerParams.validationMessage);
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return innerParams.preConfirm(value, innerParams.validationMessage);
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

      domCache.container.scrollTop = 0;
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance; // SweetAlert constructor

  function SweetAlert() {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (typeof window === 'undefined') {
      return;
    } // Check for the existence of Promise

    /* istanbul ignore if */


    if (typeof Promise === 'undefined') {
      error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
    }

    currentInstance = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var outerParams = Object.freeze(this.constructor.argsToParams(args));
    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    });

    var promise = this._main(this.params);

    privateProps.promise.set(this, promise);
  } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


  SweetAlert.prototype.then = function (onFulfilled) {
    var promise = privateProps.promise.get(this);
    return promise.then(onFulfilled);
  };

  SweetAlert.prototype["finally"] = function (onFinally) {
    var promise = privateProps.promise.get(this);
    return promise["finally"](onFinally);
  }; // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.10.9';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/wildcard/index.js":
/*!****************************************!*\
  !*** ./node_modules/wildcard/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true */


/**
  # wildcard

  Very simple wildcard matching, which is designed to provide the same
  functionality that is found in the
  [eve](https://github.com/adobe-webplatform/eve) eventing library.

  ## Usage

  It works with strings:

  <<< examples/strings.js

  Arrays:

  <<< examples/arrays.js

  Objects (matching against keys):

  <<< examples/objects.js

  While the library works in Node, if you are are looking for file-based
  wildcard matching then you should have a look at:

  <https://github.com/isaacs/node-glob>
**/

function WildcardMatcher(text, separator) {
  this.text = text = text || '';
  this.hasWild = ~text.indexOf('*');
  this.separator = separator;
  this.parts = text.split(separator);
}

WildcardMatcher.prototype.match = function(input) {
  var matches = true;
  var parts = this.parts;
  var ii;
  var partsCount = parts.length;
  var testParts;

  if (typeof input == 'string' || input instanceof String) {
    if (!this.hasWild && this.text != input) {
      matches = false;
    } else {
      testParts = (input || '').split(this.separator);
      for (ii = 0; matches && ii < partsCount; ii++) {
        if (parts[ii] === '*')  {
          continue;
        } else if (ii < testParts.length) {
          matches = parts[ii] === testParts[ii];
        } else {
          matches = false;
        }
      }

      // If matches, then return the component parts
      matches = matches && testParts;
    }
  }
  else if (typeof input.splice == 'function') {
    matches = [];

    for (ii = input.length; ii--; ) {
      if (this.match(input[ii])) {
        matches[matches.length] = input[ii];
      }
    }
  }
  else if (typeof input == 'object') {
    matches = {};

    for (var key in input) {
      if (this.match(key)) {
        matches[key] = input[key];
      }
    }
  }

  return matches;
};

module.exports = function(text, test, separator) {
  var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
  if (typeof test != 'undefined') {
    return matcher.match(test);
  }

  return matcher;
};


/***/ }),

/***/ "./resources/js/components/ajax-error.js":
/*!***********************************************!*\
  !*** ./resources/js/components/ajax-error.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

module.exports = function AjaxError() {
  /**
   * Error status and their text.
   *
   * @var object
   */
  this.errorTexts = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Reserved for WebDAV advanced collections expired proposal',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    510: 'Not Extended',
    511: 'Network Authentication Required'
  };
  /**
   * Handle the error.
   *
   * @param  obj  axiosError
   *
   * @return void
   */

  this.handleError = function (axiosError) {
    if (!axiosError.hasOwnProperty('response')) {
      return;
    }

    var error = axiosError.response;

    if (axiosError.statusText == 'abort') {
      return;
    }

    if (axiosError.status == 422) {
      return this.handleValidationErrors(error);
    }

    if (axiosError.status == 401) {
      return this.handleInvalidatedSessionError(error);
    }

    if (axiosError.status == 403) {
      return this.handleUnauthorizedError(error);
    }

    return this.handleOtherErrors(error);
  };
  /**
   * Handle the validation errors.
   *
   * @param  obj  error
   *
   * @return void
   */


  this.handleValidationErrors = function (error) {
    var errors = [];
    var validationErrors = error.request.responseJSON.errors;

    for (var key in validationErrors) {
      if (!validationErrors.hasOwnProperty(key)) {
        return;
      }

      validationErrors[key].forEach(function (value) {
        errors.push(value);
      });
    }

    ;
    return Swal.fire({
      title: 'Validation Errors',
      text: errors.join('<br>'),
      icon: 'error'
    });
  };
  /**
   * Handle the unauthenticated session error.
   *
   * @param  obj  error
   *
   * @return void
   */


  this.handleInvalidatedSessionError = function (error) {
    return Swal.fire({
      title: 'Unauthenticated Session',
      text: 'Your session has been invalidated due to inactivity. Please refresh the page and re-login.',
      icon: 'error'
    });
  };
  /**
   * Handle unauthorized error.
   *
   * @param  obj  error
   *
   * @return void
   */


  this.handleUnauthorizedError = function (error) {
    return Swal.fire({
      title: 'Unauthorized Action',
      text: 'You are not authorized to perform that action.',
      icon: 'error'
    });
  };
  /**
   * Handle errors that are not explicitly defined above.
   *
   * @param  obj  error
   *
   * @return void
   */


  this.handleOtherErrors = function (error) {
    var message = [];
    message.push('Oops, something went wrong!');
    message.push('Refresh the page and try again or contact your website administrator if the problem persists.');
    message.push(error.status + ' - ' + this.errorTexts[error.status] + '.');
    return Swal.fire({
      title: 'Error',
      text: message.join(' '),
      icon: 'error'
    });
  };
};

/***/ }),

/***/ "./resources/js/components/csrf-token.js":
/*!***********************************************!*\
  !*** ./resources/js/components/csrf-token.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function CsrfToken() {
  /**
   * Get the CSRF Token.
   *
   * @return string
   */
  this.get = function () {
    return document.head.querySelector("meta[name='csrf-token']").getAttribute('content');
  };
};

/***/ }),

/***/ "./resources/js/components/events.js":
/*!*******************************************!*\
  !*** ./resources/js/components/events.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

module.exports = function Events() {
  /**
   * Hold our events subscribers.
   *
   * @var obj
   */
  this.events = {};
  /**
   * Subscribe to an event.
   *
   * @param  string|array  events
   * @param  callable  callable
   *
   * @return void
   */

  this.on = function (events, callable) {
    var self = this;

    if (!Array.isArray(events)) {
      events = [events];
    }

    events.forEach(function (event) {
      if (!self.events.hasOwnProperty(event)) {
        self.events[event] = [];
      }

      self.events[event].push(callable);
    });
  };
  /**
   * Fire off the event.
   *
   * @param  string  event
   * @param  array  params
   *
   * @return mixed
   */


  this.fire = function (event, params) {
    // Do nothing if no event registered
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    this.events[event].forEach(function (callable) {
      if (typeof params == 'undefined') {
        callable();
      } else {
        callable.apply(void 0, _toConsumableArray(params));
      }
    });
  };
};

/***/ }),

/***/ "./resources/js/components/spinner.js":
/*!********************************************!*\
  !*** ./resources/js/components/spinner.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function Spinner() {
  /**
   * Start up the spinner.
   *
   * @return void
   */
  this.start = function () {
    this.removeFromDom(); // Do the html markup on the fly

    var markup = document.createElement('div');
    markup.setAttribute('id', 'laramedia-spinner-overlay');
    markup.innerHTML = "<div id='laramedia-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>"; // Show the spinner

    document.querySelector('body').appendChild(markup);
  };
  /**
   * Remove the spinner from view.
   *
   * @return void
   */


  this.stop = function () {
    this.removeFromDom();
  };
  /**
   * Remove the spinner from the dom.
   *
   * @return void
   */


  this.removeFromDom = function () {
    var element = document.getElementById('laramedia-spinner-overlay');

    if (element != null) {
      element.remove();
    }
  };
};

/***/ }),

/***/ "./resources/js/laramedia.js":
/*!***********************************!*\
  !*** ./resources/js/laramedia.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Spinner = __webpack_require__(/*! ./components/spinner */ "./resources/js/components/spinner.js");

var MediaLoader = __webpack_require__(/*! ./media-loader */ "./resources/js/media-loader.js");

var MediaUploader = __webpack_require__(/*! ./media-uploader */ "./resources/js/media-uploader.js");

var spinner = new Spinner();
/**
 * Start up the spinner to let the user know to wait on the content.
 * The media loader will kill the spinner once it is finished, so we don't need to terminate it here.
 */

spinner.start(); // Send the request to get the upload options

var request = window.axios.get(document.head.querySelector("meta[name='media-options-route']").getAttribute('content')); // Do your thing once the options have been returned in a response

request.then(function (response) {
  var loader = new MediaLoader(); // Get the upload options

  var uploadOptions = response.data; // Add options to the loader please

  loader.init(uploadOptions);
  loader.loadFreshContent(); // Upload files when upload button is clicked

  document.getElementById('laramedia-upload-files-button').addEventListener('click', function (event) {
    loader.files_container_is_hidden = true;
    loader.hideFilesContainer();
    var uploader = new MediaUploader();
    uploader.init(uploadOptions);
    uploader.events.on('uploader-closed', function () {
      if (uploader.fileUploaded === true) {
        loader.loadFreshContent();
      }

      loader.files_container_is_hidden = false;
      loader.showFilesContainer();
    });
    uploader.open();
  });
});

/***/ }),

/***/ "./resources/js/media-crud.js":
/*!************************************!*\
  !*** ./resources/js/media-crud.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AjaxError = __webpack_require__(/*! ./components/ajax-error */ "./resources/js/components/ajax-error.js");

var CsrfToken = __webpack_require__(/*! ./components/csrf-token */ "./resources/js/components/csrf-token.js");

var Events = __webpack_require__(/*! ./components/events */ "./resources/js/components/events.js");

var Spinner = __webpack_require__(/*! ./components/spinner */ "./resources/js/components/spinner.js");

var CancelToken = window.axios.CancelToken;
var CancelTokenSource = CancelToken.source();

module.exports = function MediaCrud() {
  /**
   * The ajax error instance.
   *
   * @var object
   */
  this.ajaxError = new AjaxError();
  /**
   * The spinner instance.
   *
   * @var object
   */

  this.spinner = new Spinner();
  /**
   * The events instance.
   *
   * @var object
   */

  this.events = new Events();
  /**
   * Save a given file.
   *
   * @param  obj  file
   *
   * @return void
   */

  this.saveFile = function (file, contents) {
    var self = this;
    self.spinner.start();
    var request = window.axios.patch(file.update_route, contents);
    request.then(function (response) {
      self.events.fire('file-saved', [response.data.data]);
    });
    request["catch"](function (error) {
      self.ajaxError.handleError(error);
    });
    request.then(function () {
      self.spinner.stop();
    });
  };
  /**
   * Trash a given file.
   *
   * @param  obj  file
   *
   * @return void
   */


  this.trashFile = function (file) {
    this.doSingleAction('trash', file);
  };
  /**
   * Restore a given file.
   *
   * @param  obj  file
   *
   * @return void
   */


  this.restoreFile = function (file) {
    this.doSingleAction('restore', file);
  };
  /**
   * Delete a given file.
   *
   * @param  obj  file
   *
   * @return void
   */


  this.deleteFile = function (file) {
    this.doSingleAction('delete', file);
  };
  /**
   * Bulk trash a given list of files.
   *
   * @param  array  files
   *
   * @return void
   */


  this.bulkTrashFiles = function (files) {
    this.doBulkAction('trash', files);
  };
  /**
   * Bulk restore a given list of files.
   *
   * @param  array  files
   *
   * @return void
   */


  this.bulkRestoreFiles = function (files) {
    this.doBulkAction('restore', files);
  };
  /**
   * Bulk delete a given list of files.
   *
   * @param  array  files
   *
   * @return void
   */


  this.bulkDeleteFiles = function (files) {
    this.doBulkAction('delete', files);
  };
  /**
   * Carry out a single trash, restore or delete action.
   *
   * @param  string  action
   * @param  obj  file
   *
   * @return void
   */


  this.doSingleAction = function (action, file) {
    var self = this;
    this.spinner.start(); // Make the request

    var request = window.axios({
      method: self.getActionMethod(action),
      url: self.getActionUrl(action, file)
    }); // Handle the request

    request.then(function (response) {
      if (response.data.success == false) {
        return self.events.fire('file-not-' + self.getActionText(action), [file, action]);
      }

      self.events.fire('file-' + self.getActionText(action), [file, action]);
    }); // Handle the error

    request["catch"](function (error) {
      self.ajaxError.handleError(error);
    }); // Finish the request

    request.then(function () {
      self.spinner.stop();
    });
  };
  /**
   * Do the bulk action.
   *
   * @param  string  action
   * @param  array  files
   *
   * @return void
   */


  this.doBulkAction = function (action, files) {
    var self = this;
    var passedCount = 0;
    var failedCount = 0;
    var passedFiles = [];
    var failedFiles = [];
    var requests = [];
    this.spinner.start();
    files.forEach(function (file) {
      // Carry out the individual file action request
      var axios = window.axios({
        method: self.getActionMethod(action),
        url: self.getActionUrl(action, file)
      }); // Process the response

      axios.then(function (response) {
        if (response.data == 0) {
          failedCount++;
          failedFiles.push(file);
          self.events.fire(self.getBulkActionFailedEventName(action), [file, action]);
        } else {
          passedCount++;
          passedFiles.push(file);
          self.events.fire(self.getBulkActionPassedEventName(action), [file, action]);
        }
      }); // Process the error

      axios["catch"](function (error) {
        self.ajaxError.handleError(error);
      }); // Finish the request

      axios.then(function () {
        self.spinner.stop();
      }); // Add the request to the queue so we can know when they're all completed

      requests.push(axios);
    }); // When all the actions are completed on the files

    window.axios.all(requests).then(function () {
      self.events.fire(self.getBulkActionFinalPassedEventName(action), [passedFiles, passedCount, failedFiles, failedCount, action]);
      self.events.fire(self.getBulkActionFinalFailedEventName(action), [failedFiles, failedCount, passedFiles, passedCount, action]);
    });
  };
  /**
   * Get the action text for the bulk action.
   *
   * @param  string  action
   *
   * @return string
   */


  this.getActionText = function (action) {
    if (action == 'trash') {
      return 'trashed';
    } else if (action == 'restore') {
      return 'restored';
    } else if (action == 'delete') {
      return 'deleted';
    }
  };
  /**
   * Get the bulk action url.
   *
   * @param  string  action
   * @param  obj  file
   *
   * @return string
   */


  this.getActionUrl = function (action, file) {
    if (action == 'trash') {
      return file.trash_route;
    } else if (action == 'restore') {
      return file.restore_route;
    } else if (action == 'delete') {
      return file.destroy_route;
    }
  };
  /**
   * Get the bulk action method
   *
   * @param  string  action
   *
   * @return string
   */


  this.getActionMethod = function (action) {
    if (action == 'trash' || action == 'delete') {
      return 'DELETE';
    } else if (action == 'restore') {
      return 'PATCH';
    }
  };
  /**
   * Get the bulk action single failed event name.
   *
   * @param  string  action
   *
   * @return string
   */


  this.getBulkActionFailedEventName = function (action) {
    return 'bulk-file-not-' + this.getActionText(action);
  };
  /**
   * Get the bulk action single passed event name.
   *
   * @param  string  action
   *
   * @return string
   */


  this.getBulkActionPassedEventName = function (action) {
    return 'bulk-file-' + this.getActionText(action);
  };
  /**
   * Get the bulk action final failed event name.
   *
   * @param  string  action
   *
   * @return string
   */


  this.getBulkActionFinalFailedEventName = function (action) {
    return 'files-not-' + this.getActionText(action);
  };
  /**
   * Get the bulk action final passed event name.
   *
   * @param  string  action
   *
   * @return string
   */


  this.getBulkActionFinalPassedEventName = function (action) {
    return 'files-' + this.getActionText(action);
  };
};

/***/ }),

/***/ "./resources/js/media-loader.js":
/*!**************************************!*\
  !*** ./resources/js/media-loader.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AjaxError = __webpack_require__(/*! ./components/ajax-error */ "./resources/js/components/ajax-error.js");

var Spinner = __webpack_require__(/*! ./components/spinner */ "./resources/js/components/spinner.js");

var Crud = __webpack_require__(/*! ./media-crud */ "./resources/js/media-crud.js");

var Events = __webpack_require__(/*! ./components/events */ "./resources/js/components/events.js");

var CancelToken = window.axios.CancelToken;
var CancelTokenSource = CancelToken.source();

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

module.exports = function MediaLoader() {
  /**
   * The ajax error instance.
   *
   * @var object
   */
  this.ajaxError = new AjaxError();
  /**
   * The spinner instance.
   *
   * @var object
   */

  this.spinner = new Spinner();
  /**
   * The crud instance.
   *
   * @var object
   */

  this.crud = new Crud();
  /**
   * The events instance.
   *
   * @var object
   */

  this.events = new Events();
  /**
   * The options.
   *
   * @var object
   */

  this.options = {
    select_multiple: true,
    is_in_modal: false,
    no_files_container_id: 'laramedia-no-files-container',
    files_container_id: 'laramedia-files-container',
    files_scrollable_container_id: 'laramedia-files-container',
    single_image_template_id: 'laramedia-template-item-image',
    single_file_template_id: 'laramedia-template-item-file',
    file_container_class: 'laramedia-item-container',
    file_inner_container_class: 'laramedia-item-inner-container',
    file_image_preview_class: 'laramedia-item-preview-image',
    file_name_class: 'laramedia-item-file-name',
    file_checkbox_container_class: 'laramedia-item-checkbox-container',
    file_checkbox_class: 'laramedia-item-checkbox',
    file_checkbox_name: 'laramedia_checked_items',
    file_id_attribute: 'media-id',
    file_state_attribute: 'media-state'
  };
  /**
   * The bulk action options.
   *
   * @var object
   */

  this.bulkActionOptions = {
    bulk_select_box_class: 'laramedia-bulk-select-box',
    active_bulk_options_container_id: 'laramedia-active-bulk-options-container',
    trash_bulk_options_container_id: 'laramedia-trash-bulk-options-container'
  };
  /**
   * The filter options.
   *
   * @var object
   */

  this.filterOptions = {
    type_select_box_id: 'laramedia-type-select-box',
    visibility_select_box_id: 'laramedia-visibility-select-box',
    ownership_select_box_id: 'laramedia-ownership-select-box',
    active_filter_container_id: 'laramedia-active-icon-container',
    trash_filter_container_id: 'laramedia-trash-icon-container',
    search_input_id: 'laramedia-search'
  };
  /**
   * The file editor options.
   *
   * @var object
   */

  this.editorOptions = {
    close_button_identifier: '#laramedia-file-editor-close-button',
    previous_button_identifier: '[laramedia-bar-label="previous"]',
    next_button_identifier: '[laramedia-bar-label="next"]',
    save_button_identifier: '[laramedia-bar-label="save"]',
    trash_button_identifier: '[laramedia-bar-label="trash"]',
    restore_button_identifier: '[laramedia-bar-label="restore"]',
    delete_button_identifier: '[laramedia-bar-label="delete"]',
    template_id: 'laramedia-file-editor-template',
    container_id: 'laramedia-file-editor-container',
    body_left_id: 'laramedia-file-editor-body-left',
    disable_fields_on_trash_class: 'laramedia-disable-on-trash',
    public_path_identifier: "[editor-title='public_path']",
    button_links_container_id: 'laramedia-buttons-container'
  };
  /**
   * The parameters for when we are sending off a load request.
   *
   * @var object
   */

  this.loadFilters = {
    page: 0,
    type: null,
    visibility: null,
    ownership: null,
    section: 'active',
    search: null
  };
  /**
   * Whether we have attempted an initial load.
   *
   * @var bool
   */

  this.hasAttemptedInitialLoad = false;
  /**
   * Whether content is currently loading.
   *
   * @var bool
   */

  this.isLoadingContent = false;
  /**
   * The queue to store the loaded files.
   *
   * @var object
   */

  this.filesQueue = {};
  /**
   * The last load response returned from the server.
   *
   * @var object
   */

  this.lastResponse = {};
  /**
   * Indicate whether the files container is hidden.
   *
   * @var bool
   */

  this.files_container_is_hidden = false;
  /**
   * The files to mark as selected when they are loaded.
   *
   * @var array
   */

  this.preSelectedFileIds = [];
  /**
   * To store the axios cancel instance.
   *
   * @var obj|null
   */

  this.cancel = null;
  /**
   * The danger hex color.
   *
   * @var string
   */

  this.swalDangerHex = '#C0392B';
  /**
   * Initiate the loader.
   *
   * @param  obj  options
   *
   * @return void
   */

  this.init = function (options) {
    // Set the options
    this.handleInitOptions(options); // Register the loader events

    this.registerEvents(); // Bulk Actions

    this.registerBulkEvents(); // Filters

    this.registerFiltersEvents(); // File Editor

    this.registerFileEditorCrudEvents();
  };
  /**
   * Handle the options passed to init.
   *
   * @param  object  options
   *
   * @return void
   */


  this.handleInitOptions = function (options) {
    var self = this;

    for (var key in options) {
      if (!options.hasOwnProperty(key)) {
        return;
      }

      if (key == 'filter_default_type') {
        self.loadFilters.type = options[key];
      }

      if (key == 'filter_default_visibility') {
        self.loadFilters.visibility = options[key];
      }

      if (key == 'filter_default_ownership') {
        self.loadFilters.ownership = options[key];
      }

      if (key == 'filter_default_section') {
        self.loadFilters.section = options[key];
      }

      if (key == 'filter_default_search') {
        self.loadFilters.search = options[key];
      }
    }

    this.options = window._.assign(this.options, options);
  };
  /**
   * Register the loader event handlers.
   *
   * @return void
   */


  this.registerEvents = function () {
    var self = this;
    window.addEventListener('scroll', this.debounce(function () {
      self.shouldLoadMoreContent() == true ? self.loadContent() : null;
    }, 250));
    window.addEventListener('resize', this.debounce(function () {
      self.shouldLoadMoreContent() == true ? self.loadContent() : null;
    }, 250));

    if (this.options.is_in_modal) {
      document.getElementById(this.options.files_container_id).addEventListener('scroll', this.debounce(function () {
        self.shouldLoadMoreContent() == true ? self.loadContent() : null;
      }, 250));
      document.getElementById(this.options.files_container_id).addEventListener('resize', this.debounce(function () {
        self.shouldLoadMoreContent() == true ? self.loadContent() : null;
      }, 250));
    }
  };
  /**
   * Load up content. This bulds upon the loadFilters property.
   *
   * @return void
   */


  this.loadContent = function () {
    var self = this;
    this.spinner.start();
    this.hasAttemptedInitialLoad = true;
    this.isLoadingContent = true;
    this.loadFilters.page = this.loadFilters.page + 1;
    var url = document.head.querySelector("meta[name='media-files-route']").getAttribute('content');
    var request = window.axios.get(url, {
      cancelToken: new CancelToken(function executor(c) {
        self.cancel = c;
      }),
      params: self.loadFilters
    });
    request.then(function (response) {
      self.lastResponse = response.data;
      self.processLoadedFiles(response.data);
    });
    request["catch"](function (error) {
      self.ajaxError.handleError(error);
    });
    request.then(function () {
      self.spinner.stop();
      self.isLoadingContent = false;

      if (self.shouldLoadMoreContent()) {
        self.loadContent();
      }
    });
  };
  /**
   * Load up content from the start.
   *
   * @return void
   */


  this.loadFreshContent = function () {
    this.loadFilters.page = 0;
    this.hasAttemptedInitialLoad = false;
    this.lastResponse = {};
    this.filesQueue = {};

    if (this.cancel != null) {
      this.cancel();
    }

    this.clearFilesContainer();
    this.loadContent();
  };
  /**
   * Load content from a given filter.
   *
   * @param  obj  options
   *
   * @return void
   */


  this.loadContentFromFilter = function (options) {
    this.loadFilters = window._.assign(this.loadFilters, options);
    this.loadFreshContent();
  };
  /**
   * Check whether more content should be loaded.
   *
   * @return bool
   */


  this.shouldLoadMoreContent = function () {
    if (this.files_container_is_hidden) {
      return false;
    }

    if (this.isLoadingContent) {
      return false;
    }

    if (!this.hasAttemptedInitialLoad) {
      return true;
    } // This means the last load didn't contain anything


    if (!this.lastResponse.hasOwnProperty('data')) {
      return false;
    } // If we're already on the last page, then no need to load again


    if (this.lastResponse['meta']['last_page'] == this.loadFilters.page) {
      return false;
    }

    if (this.shouldLoadMoreIfFileIsOpen()) {
      console.log('here');
      return true;
    }

    if (this.shouldLoadMoreContentBasedOnContainerHeight()) {
      return true;
    }

    return false;
  };
  /**
   * Check whether we should load more content based on the files container current height.
   *
   * @return bool
   */


  this.shouldLoadMoreContentBasedOnContainerHeight = function () {
    var windowHeight = window.outerHeight;
    var containerHeight = document.getElementById(this.options.files_container_id).scrollHeight;
    var containerTop = document.getElementById(this.options.files_container_id).offsetTop;
    var containerScrollTop = document.getElementById(this.options.files_container_id).scrollTop; // If the bottom of the files container is within view, we scroll

    if (!this.options.is_in_modal && containerHeight <= window.scrollY + window.outerHeight + 900) {
      return true;
    }

    var viewableHeight = windowHeight - containerTop - 250;
    var unviewableHeight = containerHeight - containerScrollTop - viewableHeight;

    if (this.options.is_in_modal && containerHeight <= viewableHeight) {
      return true;
    }

    if (this.options.is_in_modal && unviewableHeight < 900) {
      return true;
    }

    return false;
  };
  /**
   * Process the loaded files.
   *
   * @param  obj  response
   *
   * @return void
   */


  this.processLoadedFiles = function (response) {
    var self = this;

    if (this.loadFilters.page == 1 && response.meta.total >= 1) {
      this.hideNoFilesContainer();
      this.showFilesContainer();
    }

    if (this.loadFilters.page == 1 && response.meta.total < 1) {
      this.showNoFilesContainer();
      this.hideFilesContainer();
    }

    response.data.forEach(function (media) {
      self.setFileInQueue(media);

      if (media.type == 'image') {
        return self.processLoadedImage(media);
      }

      self.processLoadedFile(media);
    });
  };
  /**
   * Process the loaded image.
   *
   * @param  obj  response
   *
   * @return void
   */


  this.processLoadedImage = function (media) {
    var self = this;
    var id = 'laramedia-media-item-' + media.id; // Get the template for the markup

    var template = document.importNode(document.getElementById(this.options.single_image_template_id).content, true); // Set an id on the fly

    template.querySelector('.' + this.options.file_container_class).setAttribute('id', id); // Add the image preview

    template.querySelector('.' + this.options.file_image_preview_class).setAttribute('src', media.thumbnail_path); // Add the id as an attribute

    template.querySelector('.' + this.options.file_container_class).setAttribute(this.options.file_id_attribute, media.id); // Add the file id to the checkbox

    template.querySelector('.' + this.options.file_checkbox_class).value = media.id;
    template.querySelector('.' + this.options.file_checkbox_class).setAttribute('id', 'laramedia-file-checkbox-' + media.id); // Mark as preselected

    if (this.preSelectedFileIds.indexOf(media.id) != '-1') {
      self.events.fire('file-selected', [media]);
      template.querySelector('.' + this.options.file_checkbox_class).setAttribute('checked', true);
      template.querySelector('.' + this.options.file_checkbox_class).parentElement.style.display = 'flex';
    } // Hover over file


    template.querySelector('.' + this.options.file_container_class).addEventListener('mouseenter', function (event) {
      event.srcElement.lastElementChild.style.display = 'flex';
    }); // Mouse leave file

    template.querySelector('.' + this.options.file_container_class).addEventListener('mouseleave', function (event) {
      if (event.srcElement.lastElementChild.querySelector('input').checked == false) {
        event.srcElement.lastElementChild.style.display = 'none';
        event.srcElement.classList.remove('laramedia-file-selected');
      } else {
        event.srcElement.classList.add('laramedia-file-selected');
      }
    }); // Checkbox

    template.querySelector('.' + this.options.file_checkbox_class).addEventListener('change', function (event) {
      var file = self.getFileFromQueue(this.value); // If multiple selection not allowed, de select all previously selected files

      if (this.checked && self.options.select_multiple === false) {
        document.querySelectorAll('.' + self.options.file_checkbox_class).forEach(function (element) {
          if (element.value != file.id && element.checked == true) {
            element.checked = false;
            self.events.fire('file-deselected', [self.getFileFromQueue(element.value)]);
          }
        });
      } // Fire file deelected event


      if (!this.checked) {
        self.events.fire('file-deselected', [file]);
      } // Fire file is selected event when item is checked


      if (this.checked) {
        self.events.fire('file-selected', [file]);
      }
    }); // Open the editor when file is clicked

    template.querySelector('.' + this.options.file_inner_container_class).addEventListener('click', function (event) {
      self.openEditor(event.srcElement.parentElement.parentElement);
    });
    document.getElementById(this.options.files_container_id).appendChild(template);
  };
  /**
   * Process the loaded none image file.
   *
   * @param  obj  media
   *
   * @return void
   */


  this.processLoadedFile = function (media) {
    var self = this;
    var id = 'laramedia-media-item-' + media.id; // Get the file template

    var template = document.importNode(document.getElementById(this.options.single_file_template_id).content, true);
    template.querySelector('.' + this.options.file_container_class).setAttribute('id', id); // Add the file name

    template.querySelector('.' + this.options.file_name_class).appendChild(document.createTextNode(media.name)); // Add the id as an attribute

    template.querySelector('.' + this.options.file_container_class).setAttribute(this.options.file_id_attribute, media.id); // Add the id to the checkbox

    template.querySelector('.' + this.options.file_checkbox_class).value = media.id;
    template.querySelector('.' + this.options.file_checkbox_class).setAttribute('id', 'laramedia-file-checkbox-' + media.id); // Mark as preselected

    if (this.preSelectedFileIds.indexOf(media.id) != '-1') {
      self.events.fire('file-selected', [media]);
      template.querySelector('.' + this.options.file_checkbox_class).setAttribute('checked', true);
      template.querySelector('.' + this.options.file_checkbox_class).parentElement.style.display = 'flex';
    } // Add the preview image


    template.querySelector('.' + this.options.file_image_preview_class).setAttribute('src', media.icon_url); // Hover over file

    template.querySelector('.' + this.options.file_container_class).addEventListener('mouseenter', function (event) {
      event.srcElement.lastElementChild.style.display = 'flex';
    }); // Mouseleave file

    template.querySelector('.' + this.options.file_container_class).addEventListener('mouseleave', function (event) {
      if (event.srcElement.lastElementChild.querySelector('input').checked == false) {
        event.srcElement.lastElementChild.style.display = 'none';
        event.srcElement.classList.remove('laramedia-file-selected');
      } else {
        event.srcElement.classList.add('laramedia-file-selected');
      }
    }); // Checkbox

    template.querySelector('.' + this.options.file_checkbox_class).addEventListener('change', function (event) {
      var file = self.getFileFromQueue(this.value); // If multiple selection not allowed, de select all previously selected files

      if (this.checked && self.options.select_multiple === false) {
        document.querySelectorAll('.' + self.options.file_checkbox_class).forEach(function (element) {
          if (element.value != file.id && element.checked == true) {
            element.checked = false;
            self.events.fire('file-deselected', [self.getFileFromQueue(element.value)]);
          }
        });
      } // Fire file deelected event


      if (!this.checked) {
        self.events.fire('file-deselected', [file]);
      } // Fire file is selected event when item is checked


      if (this.checked) {
        self.events.fire('file-selected', [file]);
      }
    }); // Open the editor when file is clicked

    template.querySelector('.' + this.options.file_inner_container_class).addEventListener('click', function (event) {
      if (event.srcElement.className == 'laramedia-item-file-icon' || event.srcElement.className == 'laramedia-item-file-name-container') {
        self.openEditor(event.srcElement.parentElement.parentElement);
      } else {
        self.openEditor(event.srcElement.parentElement.parentElement.parentElement);
      }
    });
    document.getElementById(this.options.files_container_id).appendChild(template);
  };
  /**
   * Get the file from the queue.
   *
   * @param  int  fileId
   *
   * @return obj
   */


  this.getFileFromQueue = function (fileId) {
    return this.filesQueue[fileId];
  };
  /**
   * Set the file in the queue.
   *
   * @param  obj  file
   *
   * @return void
   */


  this.setFileInQueue = function (file) {
    this.filesQueue[file.id] = file;
  };
  /**
   * Remove the file from queue.
   *
   * @param  obj  fileId
   *
   * @return void
   */


  this.removeFileFromQueue = function (fileId) {
    delete this.filesQueue[fileId];
  };
  /**
   * Check if the files queue is empty.
   *
   * @return void
   */


  this.filesQueueIsEmpty = function () {
    return Object.keys(this.filesQueue).length === 0;
  };
  /**
   * Remove a file from view.
   *
   * @param  int  fileId
   *
   * @return void
   */


  this.removeFileFromView = function (fileId) {
    document.querySelector("[" + this.options.file_id_attribute + "='" + fileId + "']").remove();
  };
  /**
   * Show the no files container.
   *
   * @return void
   */


  this.showNoFilesContainer = function () {
    document.getElementById(this.options.no_files_container_id).style.display = 'flex';
  };
  /**
   * Hide the no files container.
   *
   * @return void
   */


  this.hideNoFilesContainer = function () {
    document.getElementById(this.options.no_files_container_id).style.display = 'none';
  };
  /**
   * Show the files container.
   *
   * @return void
   */


  this.showFilesContainer = function () {
    document.getElementById(this.options.files_container_id).style.display = 'flex';
  };
  /**
   * Hide the files container.
   *
   * @return void
   */


  this.hideFilesContainer = function () {
    document.getElementById(this.options.files_container_id).style.display = 'none';
  };
  /**
   * Clear the files container.
   *
   * @return void
   */


  this.clearFilesContainer = function () {
    document.getElementById(this.options.files_container_id).innerHTML = '';
  };
  /**
   * Get the checked ids.
   *
   * @return array
   */


  this.getCheckedIds = function () {
    var ids = [];
    document.querySelectorAll('.' + this.options.file_checkbox_class).forEach(function (element) {
      if (element.checked == true) {
        ids.push(element.getAttribute('value'));
      }
    });
    return ids;
  };
  /**
   * Get the files for a given set of ids.
   *
   * @param  array  fileIds
   *
   * @return array
   */


  this.getFilesFromIds = function (fileIds) {
    var self = this;
    var list = [];
    fileIds.forEach(function (fileId) {
      list.push(self.getFileFromQueue(fileId));
    });
    return list;
  };
  /**
   * Get the files from a given list.
   *
   * @param  object  files
   *
   * @return array
   */


  this.getFilesFromList = function (files) {
    var self = this;
    var list = [];

    for (var key in files) {
      if (!files.hasOwnProperty(key)) {
        return;
      }

      list.push(files[key]);
    }

    return list;
  };
  /**
   * Mark files as checked.
   *
   * @param  array  files  An array of files or an array of file ids
   *
   * @return void
   */


  this.markFilesAsSelected = function (files) {
    var self = this;
    files.forEach(function (file) {
      if (typeof file == 'number') {
        var file = self.getFileFromQueue(file);
      }

      var element = document.getElementById('laramedia-file-checkbox-' + file.id);

      if (element == null) {
        return;
      }

      element.checked = true;
      self.events.fire('file-selected', [file]);
    });
  };
  /**
   * Set the files to mark as selected.
   *
   * @param  array  files
   *
   * @return void
   */


  this.setFilesToMarkAsSelected = function (files) {
    var self = this;
    this.preSelectedFileIds = [];
    files.forEach(function (file) {
      if (typeof file == 'number') {
        self.preSelectedFileIds.push(file);
      } else {
        self.preSelectedFileIds.push(file.id);
      }
    });
  };
  /**
   * *************************************************************************
   * Bulk Actions
   * *************************************************************************
   *
   * From here on in contains everything that is related to the bulk actions.
   */

  /**
   * Register the bulk events.
   *
   * @return void
   */


  this.registerBulkEvents = function () {
    var self = this;
    var elements = document.querySelectorAll('.' + this.bulkActionOptions.bulk_select_box_class);

    if (elements == null) {
      return;
    } // Register the bulk actions event handlers


    elements.forEach(function (element) {
      element.addEventListener('change', function (event) {
        self.handleBulkAction(event.srcElement, self.getFilesFromIds(self.getCheckedIds()));
      });
    });
    var singleEventNames = ['bulk-file-trashed', 'bulk-file-restored', 'bulk-file-deleted'];
    var multipleEventNames = ['files-trashed', 'files-restored', 'files-deleted']; // file trashed, restored & deleted through bulk action

    this.crud.events.on(singleEventNames, function (file) {
      self.removeFileFromView(file.id);
      self.removeFileFromQueue(file.id);
    }); // Files trashed, restored & deleted through bulk actions

    this.crud.events.on(multipleEventNames, function (passedFiles, passedCount, failedFiles, failedCount, action) {
      var text = 'item';

      if (passedCount > 1) {
        text = 'items';
      } // Let the user know the amount of files that were actioned successfully


      var swal = Swal.fire({
        title: 'Success',
        icon: 'success',
        text: passedCount + ' ' + text + ' ' + self.getBulkActionText(action) + ' successfully!'
      }); // Let the user know which file failed if any

      swal.then(function () {
        if (failedCount == 0) {
          return;
        }

        var failedFileNames = [];
        failedFiles.forEach(function (file) {
          failedFileNames.push(file.name);
        });
        Swal.fire({
          title: 'Failed',
          icon: 'error',
          text: 'The following failed to ' + action + ': ' + failedFileNames.join(', ')
        });
      });

      if (self.filesQueueIsEmpty()) {
        self.showNoFilesContainer();
      }
    });
  };
  /**
   * Handle the bulk action.
   *
   * @param  obj  element
   * @param  array  files
   *
   * @return void
   */


  this.handleBulkAction = function (element, files) {
    var self = this; // Get the bulk action type

    var action = element.value; // Change back bulk option to empty

    element.value = ''; // Let user know no files were selected for the action

    if (files.length == 0) {
      return Swal.fire({
        title: 'Error',
        text: 'No files have been selected for the ' + action + ' bulk action!',
        icon: 'error'
      });
    } // Ask for confirmation to perform the bulk action, then carry it out


    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to perform the ' + action + ' bulk action?',
      icon: 'warning',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true,
      focusConfirm: false,
      focusCancel: true,
      confirmButtonColor: self.swalDangerHex
    }).then(function (response) {
      if (response.hasOwnProperty('value')) {
        self.doBulkAction(action, files);
      }
    });
  };
  /**
   * Do the bulk action.
   *
   * @param  string  action
   * @param  array  files
   *
   * @return void
   */


  this.doBulkAction = function (action, files) {
    var self = this;
    var text = this.getBulkActionText(action);

    if (action == 'trash') {
      this.crud.bulkTrashFiles(files);
    } else if (action == 'restore') {
      this.crud.bulkRestoreFiles(files);
    } else if (action == 'delete') {
      this.crud.bulkDeleteFiles(files);
    }
  };
  /**
   * Get the bulk action text for the bulk action.
   *
   * @param  string  action
   *
   * @return string
   */


  this.getBulkActionText = function (action) {
    if (action == 'trash') {
      return 'trashed';
    } else if (action == 'restore') {
      return 'restored';
    } else if (action == 'delete') {
      return 'deleted';
    }
  };
  /**
   * *************************************************************************
   * Filters
   * *************************************************************************
   *
   * From here on in contains everything that is related to the filters.
   */

  /**
   * Register the filters events.
   *
   * @return void
   */


  this.registerFiltersEvents = function () {
    this.registerFilterTypeEvents();
    this.registerFilterVisibilityEvents();
    this.registerFilterOwnershipEvents();
    this.registerFilterActiveEvents();
    this.registerFilterTrashEvents();
    this.registerFilterSearchEvents();
  };
  /**
   * Register the type filter events.
   *
   * @return void
   */


  this.registerFilterTypeEvents = function () {
    var self = this;
    var element = document.getElementById(this.filterOptions.type_select_box_id);

    if (element == null) {
      return;
    } // Set the default type


    if (this.options.hasOwnProperty('filter_default_type')) {
      element.value = this.options.filter_default_type;
    }

    element.addEventListener('change', function (event) {
      self.loadContentFromFilter({
        type: event.srcElement.value
      });
    });
  };
  /**
   * Register the visibility filter events.
   *
   * @return void
   */


  this.registerFilterVisibilityEvents = function () {
    var self = this;

    if (this.options.hide_visibility == true) {
      return;
    }

    var element = document.getElementById(this.filterOptions.visibility_select_box_id);

    if (element == null) {
      return;
    } // Set the default visibility


    if (this.options.hasOwnProperty('filter_default_visibility')) {
      element.value = this.options.filter_default_visibility;
    }

    element.addEventListener('change', function (event) {
      self.loadContentFromFilter({
        visibility: event.srcElement.value
      });
    });
  };
  /**
   * Register the ownership filter events.
   *
   * @return void
   */


  this.registerFilterOwnershipEvents = function () {
    var self = this;
    var element = document.getElementById(this.filterOptions.ownership_select_box_id);

    if (element == null) {
      return;
    } // Set the default ownership


    if (this.options.hasOwnProperty('filter_default_ownership')) {
      element.value = this.options.filter_default_ownership;
    }

    element.addEventListener('change', function (event) {
      self.loadContentFromFilter({
        ownership: event.srcElement.value
      });
    });
  };
  /**
   * Register the active filter events.
   *
   * @return void
   */


  this.registerFilterActiveEvents = function () {
    var self = this;
    var activeElement = document.getElementById(this.filterOptions.active_filter_container_id);
    var trashElement = document.getElementById(this.filterOptions.trash_filter_container_id);

    if (activeElement == null) {
      return;
    } // Set the default section


    if (this.options.hasOwnProperty('filter_default_section') && this.options.filter_default_section == 'active') {
      // Show the trash section as inactive
      if (trashElement != null) {
        trashElement.classList.remove('active');
      } // Show the action section as active


      activeElement.classList.add('active');
    }

    document.getElementById(this.filterOptions.active_filter_container_id).addEventListener('click', function (event) {
      // Show the trash section as inactive
      if (trashElement != null) {
        trashElement.classList.remove('active');
      } // Show the active section as active


      activeElement.classList.add('active'); // Show the relevant bulk options

      var activeBulkContainer = document.getElementById(self.bulkActionOptions.active_bulk_options_container_id);
      var trashBulkContainer = document.getElementById(self.bulkActionOptions.trash_bulk_options_container_id);

      if (trashBulkContainer != null) {
        trashBulkContainer.style.display = 'none';
      }

      if (activeBulkContainer != null) {
        activeBulkContainer.style.display = 'flex';
      }

      self.loadContentFromFilter({
        section: 'active'
      });
    });
  };
  /**
   * Register the trash filter events.
   *
   * @return void
   */


  this.registerFilterTrashEvents = function () {
    var self = this;
    var trashElement = document.getElementById(this.filterOptions.trash_filter_container_id);
    var activeElement = document.getElementById(this.filterOptions.active_filter_container_id);

    if (trashElement == null) {
      return;
    } // Set the default section


    if (this.options.hasOwnProperty('filter_default_section') && this.options.filter_default_section == 'trash') {
      // Show the active section as inactive
      if (activeElement != null) {
        activeElement.classList.remove('active');
      } // Show the trash section as active


      trashElement.classList.add('active');
    }

    document.getElementById(this.filterOptions.trash_filter_container_id).addEventListener('click', function (event) {
      // Show the active section as inactive
      if (activeElement != null) {
        activeElement.classList.remove('active');
      } // Show the trash section as active


      trashElement.classList.add('active'); // Show the relevant bulk options

      var activeBulkContainer = document.getElementById(self.bulkActionOptions.active_bulk_options_container_id);
      var trashBulkContainer = document.getElementById(self.bulkActionOptions.trash_bulk_options_container_id);

      if (trashBulkContainer != null) {
        trashBulkContainer.style.display = 'flex';
      }

      if (activeBulkContainer != null) {
        activeBulkContainer.style.display = 'none';
      }

      self.loadContentFromFilter({
        section: 'trash'
      });
    });
  };
  /**
   * Register the search filter events.
   *
   * @return void
   */


  this.registerFilterSearchEvents = function () {
    var self = this;
    var element = document.getElementById(this.filterOptions.search_input_id);

    if (element == null) {
      return;
    } // Set the default search


    if (this.options.hasOwnProperty('filter_default_search')) {
      element.value = this.options.filter_default_search;
    }

    element.addEventListener('keyup', this.debounce(function (event) {
      self.loadContentFromFilter({
        search: event.srcElement.value
      });
    }, 250));
    element.addEventListener('search', this.debounce(function (event) {
      self.loadContentFromFilter({
        search: event.srcElement.value
      });
    }, 250));
  };
  /**
   * Show the type filter.
   *
   * @return void
   */


  this.showTypeFilter = function () {
    var element = document.getElementById(this.filterOptions.type_select_box_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'flex';
  };
  /**
   * Hide the type filter.
   *
   * @return void
   */


  this.hideTypeFilter = function () {
    var element = document.getElementById(this.filterOptions.type_select_box_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'none';
  };
  /**
   * Show the visibility filter.
   *
   * @return void
   */


  this.showVisibilityFilter = function () {
    var element = document.getElementById(this.filterOptions.visibility_select_box_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'flex';
  };
  /**
   * Hide the visibility filter.
   *
   * @return void
   */


  this.hideVisibilityFilter = function () {
    var element = document.getElementById(this.filterOptions.visibility_select_box_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'none';
  };
  /**
   * Show the ownership filter.
   *
   * @return void
   */


  this.showOwnershipFilter = function () {
    var element = document.getElementById(this.filterOptions.ownership_select_box_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'flex';
  };
  /**
   * Hide the ownership filter.
   *
   * @return void
   */


  this.hideOwnershipFilter = function () {
    var element = document.getElementById(this.filterOptions.ownership_select_box_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'none';
  };
  /**
   * Show the search filter.
   *
   * @return void
   */


  this.showSearchFilter = function () {
    var element = document.getElementById(this.filterOptions.search_input_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'flex';
  };
  /**
   * Hide the search filter.
   *
   * @return void
   */


  this.hideSearchFilter = function () {
    var element = document.getElementById(this.filterOptions.search_input_id);

    if (element == null) {
      return;
    }

    element.parentElement.style.display = 'none';
  };
  /**
   * *************************************************************************
   * File Editor
   * *************************************************************************
   *
   * From here on in contains everything that is related to the file editor.
   */

  /**
   * Register the file editor events.
   *
   * @return void
   */


  this.registerFileEditorEvents = function () {
    var self = this; // Close the editor

    document.querySelector(this.editorOptions.close_button_identifier).addEventListener('click', function () {
      self.closeEditor();
    }); // Go to previous file

    document.querySelector(this.editorOptions.previous_button_identifier).addEventListener('click', function () {
      self.goToPreviousFile();
    }); // Go to next file

    document.querySelector(this.editorOptions.next_button_identifier).addEventListener('click', function () {
      self.goToNextFile();
    }); // Save file

    document.querySelector(this.editorOptions.save_button_identifier).addEventListener('click', function () {
      self.saveFileFromEditor();
    }); // Trash file

    document.querySelector(this.editorOptions.trash_button_identifier).addEventListener('click', function () {
      self.trashFileFromEditor();
    }); // Restore file

    document.querySelector(this.editorOptions.restore_button_identifier).addEventListener('click', function () {
      self.restoreFileFromEditor();
    }); // Delete file

    document.querySelector(this.editorOptions.delete_button_identifier).addEventListener('click', function () {
      self.deleteFileFromEditor();
    });
  };
  /**
   * Register the file editor crud events.
   *
   * @return void
   */


  this.registerFileEditorCrudEvents = function () {
    var self = this; // For when file saved

    this.crud.events.on('file-saved', function (file) {
      self.setFileInQueue(file);
      Swal.fire({
        title: 'Success',
        text: 'The file was updated successfully!',
        icon: 'success'
      });
    }); // For when file trashed

    this.crud.events.on('file-trashed', function (file) {
      Swal.fire({
        title: 'Success',
        text: 'File was trashed successfully!',
        icon: 'success'
      });
      self.getOpenFile().remove();
      self.removeFileFromQueue(file.id);
      self.closeEditor();

      if (self.filesQueueIsEmpty()) {
        self.showNoFilesContainer();
      }
    }); // For when file not trashed

    this.crud.events.on('file-not-trashed', function (file) {
      Swal.fire({
        title: 'Error',
        text: 'File was not trashed!',
        icon: 'error'
      });
    }); // For when file restored

    this.crud.events.on('file-restored', function (file) {
      Swal.fire({
        title: 'Success',
        text: 'File was restored successfully!',
        icon: 'success'
      });
      self.getOpenFile().remove();
      self.removeFileFromQueue(file.id);
      self.closeEditor();

      if (self.filesQueueIsEmpty()) {
        self.showNoFilesContainer();
      }
    }); // For when file not restored

    this.crud.events.on('file-not-restored', function (file) {
      Swal.fire({
        title: 'Error',
        text: 'File was not restored!',
        icon: 'error'
      });
    }); // For when file deleted

    this.crud.events.on('file-deleted', function (file) {
      Swal.fire({
        title: 'Success',
        text: 'File was deleted successfully!',
        icon: 'success'
      });
      self.getOpenFile().remove();
      self.removeFileFromQueue(file.id);
      self.closeEditor();

      if (self.filesQueueIsEmpty()) {
        self.showNoFilesContainer();
      }
    }); // For when file not deleted

    this.crud.events.on('file-not-deleted', function (file) {
      Swal.fire({
        title: 'Error',
        text: 'File was not deleted!',
        icon: 'error'
      });
    });
  };
  /**
   * Get the file editor template.
   *
   * @return obj
   */


  this.getEditorTemplate = function () {
    return document.importNode(document.getElementById(this.editorOptions.template_id).content, true);
  };
  /**
   * Close the file editor.
   *
   * @return void
   */


  this.closeEditor = function () {
    var self = this; // Mark all files as closed

    document.querySelectorAll('.' + this.options.file_container_class).forEach(function (item) {
      item.setAttribute(self.options.file_state_attribute, 'close');
    });
    document.getElementById(this.editorOptions.container_id).remove();
    this.events.fire('editor-closed');
  };
  /**
   * Open the file editor.
   *
   * @param  obj  element
   *
   * @return void
   */


  this.openEditor = function (element) {
    var self = this; // Add the file editor to the dom

    document.querySelector('body').appendChild(this.getEditorTemplate()); // Set all the media files listed as closed to the file editor

    document.querySelectorAll('.' + this.options.file_container_class).forEach(function (item, index) {
      item.setAttribute(self.options.file_state_attribute, 'close');
    }); // Set the current file selected as open

    element.setAttribute(this.options.file_state_attribute, 'open'); // Get the current file object

    var file = this.getFileFromQueue(element.getAttribute(this.options.file_id_attribute));
    this.enablePreviousButton();
    this.enableNextButton();

    if (!this.hasPreviousFile()) {
      this.disablePreviousButton();
    }

    if (!this.hasNextFile()) {
      this.disableNextButton();
    }

    this.addEditorFilePreview(file);
    this.addEditorFileContents(file);
    this.registerFileEditorEvents();
    this.events.fire('editor-opened');
  };
  /**
   * Check if we have an open file.
   *
   * @return bool
   */


  this.hasOpenFile = function () {
    return this.getOpenFile() != null;
  };
  /**
   * Get the open file.
   *
   * @return obj
   */


  this.getOpenFile = function () {
    return document.querySelector('[' + this.options.file_state_attribute + '="open"]');
  };
  /**
   * Get the file for the next file.
   *
   * @return obj
   */


  this.getNextFile = function () {
    return this.getOpenFile().nextElementSibling;
  };
  /**
   * Get the previous file.
   *
   * @return obj
   */


  this.getPreviousFile = function () {
    return this.getOpenFile().previousElementSibling;
  };
  /**
   * Check if we have a netx file for the file editor to access.
   *
   * @return bool
   */


  this.hasNextFile = function () {
    return this.getNextFile() != null;
  };
  /**
   * Check if we have a previous file for the file editor to access.
   *
   * @return bool
   */


  this.hasPreviousFile = function () {
    return this.getPreviousFile() != null;
  };
  /**
   * Disable the previous button.
   *
   * @return void
   */


  this.disablePreviousButton = function () {
    document.querySelector(this.editorOptions.previous_button_identifier).setAttribute('disabled', true);
  };
  /**
   * Disable the next button.
   *
   * @return void
   */


  this.disableNextButton = function () {
    document.querySelector(this.editorOptions.next_button_identifier).setAttribute('disabled', true);
  };
  /**
   * Change the previous button state from being disabled.
   *
   * @return void
   */


  this.enablePreviousButton = function () {
    document.querySelector(this.editorOptions.previous_button_identifier).removeAttribute('disabled');
  };
  /**
   * Change the next button state from being disabled.
   *
   * @return void
   */


  this.enableNextButton = function () {
    document.querySelector(this.editorOptions.next_button_identifier).removeAttribute('disabled');
  };
  /**
   * Go to the next file in the file editor.
   *
   * @return void
   */


  this.goToNextFile = function () {
    if (!this.hasNextFile()) {
      return;
    }

    var nextElement = this.getNextFile();
    var file = this.getFileFromQueue(nextElement.getAttribute(this.options.file_id_attribute));
    this.closeEditor();
    this.openEditor(nextElement);

    if (this.shouldLoadMoreContent()) {
      this.loadContent();
    }
  };
  /**
   * Go to the previous file in the file editor.
   *
   * @return void
   */


  this.goToPreviousFile = function () {
    if (!this.hasPreviousFile()) {
      return;
    }

    var previousElement = this.getPreviousFile();
    var file = this.getFileFromQueue(previousElement.getAttribute(this.options.file_id_attribute));
    this.closeEditor();
    this.openEditor(previousElement);

    if (this.shouldLoadMoreContent()) {
      this.loadContent();
    }
  };
  /**
   * Add the file preview to the editor.
   *
   * @param obj  file
   *
   * @return void
   */


  this.addEditorFilePreview = function (file) {
    var img = document.createElement('img');

    if (file.type == 'image') {
      img.setAttribute('src', file.large_path);
    } else {
      img.setAttribute('src', file.icon_url);
    }

    document.getElementById(this.editorOptions.body_left_id).appendChild(img);
  };
  /**
   * Populate the file contents.
   *
   * @param  obj  file
   *
   * @return void
   */


  this.addEditorFileContents = function (file) {
    var textFields = ['name', 'mimetype', 'readable_created_at', 'readable_size', 'readable_dimensions', 'caption', 'description', 'seo_description'];
    var valueFields = ['title', 'alt_text', 'copyright', 'visibility', 'seo_title', 'seo_keywords', 'public_path'];
    var imageOnlyFields = ['alt_text', 'copyright', 'readable_dimensions'];
    var linkFields = ['preview_route', 'download_route'];
    var hiddenFieldsIfPrivate = ['public_path']; // Populate the text fields

    textFields.forEach(function (value, index) {
      document.querySelector("[editor-title='" + value + "']").appendChild(document.createTextNode(file[value] != null ? file[value] : ''));
    }); // Populate the value fields

    valueFields.forEach(function (value) {
      var element = document.querySelector("[editor-title='" + value + "']");

      if (element == null) {
        return;
      }

      element.value = file[value] != null ? file[value] : '';
    }); // Set button links

    linkFields.forEach(function (value) {
      document.querySelector("[editor-title='" + value + "']").setAttribute('href', file[value]);
    }); // Show image only fields

    if (file.type == 'image') {
      imageOnlyFields.forEach(function (value) {
        document.querySelector("[editor-title='" + value + "']").parentElement.style.cssText = 'display: block;';
      });
    } // Hide fields if file is private


    if (file.visibility == 'private') {
      hiddenFieldsIfPrivate.forEach(function (value) {
        document.querySelector("[editor-title='" + value + "']").parentElement.style.cssText = 'display: none;';
      });
    } // Things specifically for the active section


    if (this.loadFilters.section == 'active') {
      if (file.can_trash) {
        document.querySelector(this.editorOptions.trash_button_identifier).style.display = 'flex';
      }

      if (file.can_update) {
        document.querySelector(this.editorOptions.save_button_identifier).style.display = 'flex';
      }
    } // Things specifically for the trash section


    if (this.loadFilters.section == 'trash') {
      // Disable editable fields when on trash
      document.querySelectorAll('.' + this.editorOptions.disable_fields_on_trash_class).forEach(function (element) {
        element.setAttribute('disabled', true);
      }); // Hide public link

      document.querySelector(this.editorOptions.public_path_identifier).parentElement.style.display = 'none'; // Hide the buttons

      document.getElementById(this.editorOptions.button_links_container_id).style.display = 'none'; // Show/hide footer buttons

      if (file.can_restore) {
        document.querySelector(this.editorOptions.restore_button_identifier).style.display = 'flex';
      }

      if (file.can_delete) {
        document.querySelector(this.editorOptions.delete_button_identifier).style.display = 'flex';
      }

      document.querySelector(this.editorOptions.trash_button_identifier).style.display = 'none';
      document.querySelector(this.editorOptions.save_button_identifier).style.display = 'none';
    }
  };
  /**
   * Save the file from the editor.
   *
   * @return void
   */


  this.saveFileFromEditor = function () {
    var contents = {};
    var textFields = ['title', 'caption', 'alt_text', 'description', 'copyright', 'visibility', 'seo_title', 'seo_keywords', 'seo_description'];
    textFields.forEach(function (value) {
      var element = document.querySelector("[editor-title='" + value + "']");

      if (element == null) {
        return;
      }

      contents[value] = element.value;
    });
    var file = this.getFileFromQueue(this.getOpenFile().getAttribute(this.options.file_id_attribute));
    this.crud.saveFile(file, contents);
  };
  /**
   * Trash the file from the editor.
   *
   * @return void
   */


  this.trashFileFromEditor = function () {
    var self = this;
    var file = this.getFileFromQueue(this.getOpenFile().getAttribute(this.options.file_id_attribute)); // Get confirmation from the user to trash the file

    var swal = Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to trash this file?',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No',
      focusConfirm: false,
      focusCancel: true,
      confirmButtonColor: self.swalDangerHex
    }); // Handle the confirmation

    swal.then(function (response) {
      if (!response.hasOwnProperty('value')) {
        return;
      }

      self.crud.trashFile(file);
    });
  };
  /**
   * Restore the file from the editor.
   *
   * @return void
   */


  this.restoreFileFromEditor = function () {
    var self = this;
    var file = this.getFileFromQueue(this.getOpenFile().getAttribute(this.options.file_id_attribute)); // Get confirmation from the user to trash the file

    var swal = Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to restore this file?',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No',
      focusConfirm: false,
      focusCancel: true,
      confirmButtonColor: self.swalDangerHex
    }); // Handle the confirmation

    swal.then(function (response) {
      if (!response.hasOwnProperty('value')) {
        return;
      }

      self.crud.restoreFile(file);
    });
  };
  /**
   * Delete the file from the editor.
   *
   * @return void
   */


  this.deleteFileFromEditor = function () {
    var self = this;
    var file = this.getFileFromQueue(this.getOpenFile().getAttribute(this.options.file_id_attribute)); // Get confirmation from the user to trash the file

    var swal = Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this file? You will not be able to retrieve it.',
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No',
      focusConfirm: false,
      focusCancel: true,
      confirmButtonColor: self.swalDangerHex
    }); // Handle the confirmation

    swal.then(function (response) {
      if (!response.hasOwnProperty('value')) {
        return;
      }

      self.crud.deleteFile(file);
    });
  };
  /**
   * Whether we should load more content when the file is open in the editor.
   *
   * @return void
   */


  this.shouldLoadMoreIfFileIsOpen = function () {
    if (!this.hasOpenFile()) {
      return false;
    }

    var counter = function counter() {
      this.total = 0;

      this.count = function (element) {
        if (element.nextElementSibling != null) {
          this.total++;
          this.count(element.nextElementSibling);
        }

        return this.total;
      };
    };

    var count = new counter().count(this.getOpenFile());

    if (count <= 15) {
      return true;
    }

    return false;
  };
  /**
   * Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   */


  this.debounce = function (func, wait, immediate) {
    var timeout; // This is the function that is actually executed when
    // the DOM event is triggered.

    return function executedFunction() {
      // Store the context of this and any
      // parameters passed to executedFunction
      var context = this;
      var args = arguments; // The function to be called after
      // the debounce time has elapsed

      var later = function later() {
        // null timeout to indicate the debounce ended
        timeout = null; // Call function now if you did not on the leading end

        if (!immediate) func.apply(context, args);
      }; // Determine if you should call the function
      // on the leading or trail end


      var callNow = immediate && !timeout; // This will reset the waiting every function execution.
      // This is the step that prevents the function from
      // being executed because it will never reach the
      // inside of the previous setTimeout

      clearTimeout(timeout); // Restart the debounce waiting period.
      // setTimeout returns a truthy value (it differs in web vs node)

      timeout = setTimeout(later, wait); // Call immediately if you're dong a leading
      // end execution

      if (callNow) func.apply(context, args);
    };
  };
};

/***/ }),

/***/ "./resources/js/media-uploader.js":
/*!****************************************!*\
  !*** ./resources/js/media-uploader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uppy = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js");

var XHRUpload = __webpack_require__(/*! @uppy/xhr-upload */ "./node_modules/@uppy/xhr-upload/lib/index.js");

var Dashboard = __webpack_require__(/*! @uppy/dashboard */ "./node_modules/@uppy/dashboard/lib/index.js");

var CsrfToken = __webpack_require__(/*! ./components/csrf-token */ "./resources/js/components/csrf-token.js");

var Events = __webpack_require__(/*! ./components/events */ "./resources/js/components/events.js"); // And their styles (for UI plugins)


__webpack_require__(/*! @uppy/core/dist/style.css */ "./node_modules/@uppy/core/dist/style.css");

__webpack_require__(/*! @uppy/dashboard/dist/style.css */ "./node_modules/@uppy/dashboard/dist/style.css");

module.exports = function MediaUploader() {
  /**
   * The uppy instance.
   *
   * @var obj|null
   */
  this.uppy;
  /**
   * The csrf token instance.
   *
   * @var obj
   */

  this.csrfToken = new CsrfToken();
  /**
   * The events instance.
   *
   * @var obj
   */

  this.events = new Events();
  /**
   * Uppy options.
   *
   * @var object
   */

  this.uppyOptions = {
    autoProceed: true,
    allowMultipleUploads: true,
    debug: false,
    restrictions: {
      maxFileSize: 128048,
      maxNumberOfFiles: null,
      allowedFileTypes: null
    }
  };
  /**
   * Uppy dashboard options.
   *
   * @var object
   */

  this.dashboardOptions = {
    id: 'Dashboard',
    target: '#laramedia-drag-drop-area',
    inline: true,
    trigger: '#laramedia-upload-trigger-button',
    metaFields: [{
      id: 'name',
      name: 'Name',
      placeholder: 'The file name'
    }, {
      id: 'title',
      name: 'Title',
      placeholder: 'The file title'
    }],
    width: '100%',
    height: '100%',
    thumbnailWidth: 280,
    showLinkToFileUploadResult: false,
    showProgressDetails: true,
    hideUploadButton: false,
    hideRetryButton: false,
    hidePauseResumeButton: false,
    hideCancelButton: false,
    hideProgressAfterFinish: false,
    note: null,
    closeModalOnClickOutside: false,
    closeAfterFinish: false,
    disableStatusBar: false,
    disableInformer: false,
    disableThumbnailGenerator: false,
    disablePageScrollWhenModalOpen: true,
    animateOpenClose: true,
    proudlyDisplayPoweredByUppy: false,
    showSelectedFiles: true,
    browserBackButtonClose: false,
    theme: 'light'
  };
  /**
   * The uploader options.
   *
   * @var object
   */

  this.options = {
    default_visibility: 'private',
    hide_visibility: false
  };
  /**
   * Indicate whether a file has been recently uploaded since the uploader has been opened.
   *
   * @var bool
   */

  this.fileUploaded = false;
  /**
   * Get the files that were recently uploaded when the uploader is opened.
   *
   * @var obj
   */

  this.filesUploaded = {};
  /**
   * Get the last file that was uploaded when the uploader is open.
   *
   * @var obj
   */

  this.lastFileUploaded = {};
  /**
   * Initiate the uploader.
   *
   * @param  obj  options
   *
   * @return void
   */

  this.init = function (options) {
    for (var key in options) {
      if (!options.hasOwnProperty(key)) {
        return;
      }

      if (this.uppyOptions.hasOwnProperty(key)) {
        this.uppyOptions[key] = options[key];
      } else if (this.dashboardOptions.hasOwnProperty(key)) {
        this.dashboardOptions[key] = options[key];
      } else {
        this.options[key] = options[key];
      }
    }

    this.registerOpenEventHandler();
  };
  /**
   * Register the open event handler
   *
   * @return void
   */


  this.registerOpenEventHandler = function () {
    var self = this;

    if (!this.options.hasOwnProperty('upload_button_id')) {
      return;
    }

    var element = document.getElementById(this.options.upload_button_id);

    if (element == null) {
      return;
    }

    element.addEventListener('click', function () {
      self.open();
    });
  };
  /**
   * Get the template for the uploader.
   *
   * @return obj
   */


  this.getTemplate = function () {
    return document.importNode(document.getElementById(this.getUploaderOption('template_id')).content, true);
  };
  /**
   * Close the file uploader.
   *
   * @return void
   */


  this.close = function () {
    document.getElementById(this.getUploaderOption('container_id')).remove();
    this.events.fire('uploader-closed');
  };
  /**
   * Open up the uploader.
   *
   * @return void
   */


  this.open = function () {
    var self = this; // Reset some properties

    this.fileUploaded = false;
    this.filesUploaded = {};
    this.lastUpload = {}; // Show the modal

    document.querySelector('body').appendChild(this.getTemplate()); // Handle the visibility

    element = document.getElementById(this.getUploaderOption('visibility_select_box_id'));

    if (element != null) {
      element.value = this.options.default_visibility; // Show/hide the visibility

      if (this.options.hide_visibility) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    }

    self.initiateUppy();
    self.registerUppyEventHandlers();
    document.querySelector(this.getUploaderOption('close_button_identifier')).addEventListener('click', function () {
      self.close();
    });
    this.events.fire('uploader-opened');
  };
  /**
   * Initiate the uppy instance.
   *
   * @return void
   */


  this.initiateUppy = function () {
    var self = this; // Disable the visibility before the upload is started so that it cannot be changed during the upload

    this.uppyOptions.onBeforeFileAdded = function (currentFile, files) {
      var element = document.getElementById(self.getUploaderOption('visibility_select_box_id'));

      if (element != null) {
        element.setAttribute('disabled', true);
      }
    }; // Get the visibility to use


    this.uppyOptions.onBeforeUpload = function (files) {
      if (self.options.hide_visibility) {
        var visibility = self.options.default_visibility;
      } else {
        var visibility = document.getElementById(self.getUploaderOption('visibility_select_box_id')).value;
      }

      self.uppy.setMeta({
        visibility: visibility
      });
    };

    this.uppy = Uppy(this.uppyOptions);
    this.uppy.use(Dashboard, this.dashboardOptions).use(XHRUpload, {
      endpoint: self.getUploadEndpoint(),
      headers: {
        'X-CSRF-TOKEN': self.csrfToken.get()
      }
    });
  };
  /**
   * Register the uppy event handlers.
   *
   * @return void
   */


  this.registerUppyEventHandlers = function () {
    var _this = this;

    var self = this; // Display file errors when they're failed on the server upload

    this.uppy.on('upload-success', function (file, response) {
      if (response.body.success === true) {
        return;
      }

      self.uppy.setFileState(file.id, {
        error: response.body.error,
        response: response
      });
      return self.uppy.info('failed to upload on server ' + file.name + ', ' + response.body.error, 'error', 5000);
    }); // File uploaded successfully.

    this.uppy.on('upload-success', function (file, response) {
      if (response.body.success === false) {
        return;
      }

      self.fileUploaded = true;
      self.filesUploaded[response.body.file.id] = response.body.file;
      self.lastFileUploaded = response.body.file;
      self.events.fire('file-uploaded', [response.body.file]);
    }); // When upload is finished - not an indicator that it was all successful

    this.uppy.on('complete', function (result) {
      var element = document.getElementById(self.getUploaderOption('visibility_select_box_id'));

      if (element != null) {
        element.removeAttribute('disabled');
      }

      self.events.fire('upload-complete', [_this.filesUploaded]);
    });
  };
  /**
   * Get all the files that were recently uploaded.
   *
   * @return obj
   */


  this.getFilesUploaded = function () {
    return this.filesUploaded;
  };
  /**
   * Get the last file that was uploaded.
   *
   * @return obj
   */


  this.getLastFileUploaded = function () {
    return this.lastFileUploaded;
  };
  /**
   * Get the upload endpoint.
   *
   * @return string
   */


  this.getUploadEndpoint = function () {
    return document.head.querySelector("meta[name='media-upload-route']").content;
  };
  /**
   * Get the uploader option.
   *
   * @param  mixed  option
   *
   * @return mixed
   */


  this.getUploaderOption = function (option) {
    var options = this.getDefaultOptions();

    if (!options.hasOwnProperty(option)) {
      return null;
    }

    return options[option];
  };
  /**
   * Get the default uploader options.
   *
   * @return obj
   */


  this.getDefaultOptions = function () {
    return {
      template_id: 'laramedia-file-uploader-template',
      container_id: 'laramedia-file-uploader-container',
      visibility_select_box_id: 'laramedia-uploader-visibility-select-box',
      close_button_identifier: "#laramedia-file-uploader-close-button"
    };
  };
};

/***/ }),

/***/ "./resources/sass/laramedia.scss":
/*!***************************************!*\
  !*** ./resources/sass/laramedia.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./resources/js/laramedia.js ./resources/sass/laramedia.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jenryollivierre/Dropbox/iMac-Code/laravel-packages/laramedia/resources/js/laramedia.js */"./resources/js/laramedia.js");
module.exports = __webpack_require__(/*! /Users/jenryollivierre/Dropbox/iMac-Code/laravel-packages/laramedia/resources/sass/laramedia.scss */"./resources/sass/laramedia.scss");


/***/ })

/******/ });