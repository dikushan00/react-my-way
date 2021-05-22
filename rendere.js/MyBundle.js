(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MyBundle"] = factory(require("react"));
	else
		root["MyBundle"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var fs = _interopRequireWildcard(_fs);

	var _prettier = __webpack_require__(1);

	var _prettier2 = _interopRequireDefault(_prettier);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	render();

	function render() {
	  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(HelloWorldPage, null));
	  var htmlWDoc = "<!DOCTYPE html>" + html;
	  var prettyHtml = _prettier2.default.format(htmlWDoc, { parser: "html" });
	  var outputFile = "./output.html";
	  fs.writeFileSync(outputFile, prettyHtml);
	  console.log("Wrote " + outputFile);
	}

	function HelloWorldPage() {
	  return _react2.default.createElement(
	    "html",
	    { lang: "en" },
	    _react2.default.createElement(
	      "head",
	      null,
	      _react2.default.createElement("meta", { charSet: "utf-8" }),
	      _react2.default.createElement(
	        "title",
	        null,
	        "Hello world"
	      )
	    ),
	    _react2.default.createElement(
	      "body",
	      null,
	      _react2.default.createElement(
	        "h1",
	        null,
	        "Hello world"
	      )
	    )
	  );
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e = "undefined" != typeof globalThis ? globalThis : e || self).prettier = t();
	}(undefined, function () {
	  "use strict";
	  function e(e, t) {
	    if (null == e) return {};var n,
	        r,
	        u = {},
	        o = Object.keys(e);for (r = 0; r < o.length; r++) {
	      n = o[r], t.indexOf(n) >= 0 || (u[n] = e[n]);
	    }return u;
	  }function t(e, t) {
	    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
	  }var n = "Prettier is an opinionated code formatter",
	      r = "./bin/prettier.js",
	      u = { node: ">=10.13.0" },
	      o = ["index.js", "standalone.js", "src", "bin"],
	      a = { "@angular/compiler": "10.0.12", "@babel/code-frame": "7.10.4", "@babel/parser": "7.11.2", "@glimmer/syntax": "0.59.0", "@iarna/toml": "2.2.5", "@typescript-eslint/typescript-estree": "3.10.0", "angular-estree-parser": "2.2.0", "angular-html-parser": "1.7.1", camelcase: "6.0.0", chalk: "4.1.0", "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540", "cjk-regex": "2.0.0", cosmiconfig: "7.0.0", dashify: "2.0.0", diff: "4.0.2", editorconfig: "0.15.3", "editorconfig-to-prettier": "0.1.1", "escape-string-regexp": "4.0.0", esutils: "2.0.3", "fast-glob": "3.2.4", "fast-json-stable-stringify": "2.1.0", "find-parent-dir": "0.3.0", "flow-parser": "0.132.0", "get-stream": "6.0.0", globby: "11.0.1", graphql: "15.3.0", "html-element-attributes": "2.2.1", "html-styles": "1.0.0", "html-tag-names": "1.1.5", "html-void-elements": "1.0.5", ignore: "4.0.6", "jest-docblock": "26.0.0", json5: "2.1.3", leven: "3.1.0", "lines-and-columns": "1.1.6", "linguist-languages": "7.10.0", lodash: "4.17.20", mem: "6.1.0", minimatch: "3.0.4", minimist: "1.2.5", "n-readlines": "1.0.0", outdent: "0.7.1", "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee", "please-upgrade-node": "3.2.0", "postcss-less": "3.1.4", "postcss-media-query-parser": "0.2.3", "postcss-scss": "2.1.1", "postcss-selector-parser": "2.2.3", "postcss-values-parser": "2.0.1", "regexp-util": "1.2.2", "remark-footnotes": "2.0.0", "remark-math": "1.0.6", "remark-parse": "8.0.3", resolve: "1.17.0", semver: "7.3.2", "string-width": "4.2.0", typescript: "4.0.2", "unicode-regex": "3.0.0", unified: "9.2.0", vnopts: "1.0.2", "yaml-unist-parser": "1.3.1" },
	      i = { "@babel/core": "7.11.4", "@babel/preset-env": "7.11.0", "@babel/types": "7.11.0", "@glimmer/reference": "0.59.0", "@rollup/plugin-alias": "3.1.1", "@rollup/plugin-babel": "5.2.0", "@rollup/plugin-commonjs": "14.0.0", "@rollup/plugin-json": "4.1.0", "@rollup/plugin-node-resolve": "9.0.0", "@rollup/plugin-replace": "2.3.3", "@types/estree": "0.0.45", "@types/node": "14.6.0", "@typescript-eslint/types": "3.10.0", "babel-loader": "8.1.0", benchmark: "2.1.4", "builtin-modules": "3.1.0", "cross-env": "7.0.2", cspell: "4.1.0", eslint: "7.7.0", "eslint-config-prettier": "6.11.0", "eslint-formatter-friendly": "7.0.0", "eslint-plugin-import": "2.22.0", "eslint-plugin-jest": "23.20.0", "eslint-plugin-prettier-internal-rules": "file:scripts/tools/eslint-plugin-prettier-internal-rules", "eslint-plugin-react": "7.20.6", "eslint-plugin-unicorn": "21.0.0", execa: "4.0.3", jest: "26.4.2", "jest-snapshot-serializer-ansi": "1.0.0", "jest-snapshot-serializer-raw": "1.1.0", "jest-watch-typeahead": "0.6.0", "npm-run-all": "4.1.5", prettier: "2.1.1", rimraf: "3.0.2", rollup: "2.26.5", "rollup-plugin-node-globals": "1.4.0", "rollup-plugin-terser": "7.0.0", shelljs: "0.8.4", "snapshot-diff": "0.8.1", "strip-ansi": "6.0.0", "synchronous-promise": "2.0.13", tempy: "0.6.0", "terser-webpack-plugin": "4.1.0", webpack: "4.44.1" },
	      s = { prepublishOnly: 'echo "Error: must publish from dist/" && exit 1', "prepare-release": "yarn && yarn build && yarn test:dist", test: "jest", "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest", "test:dist": "cross-env NODE_ENV=production jest", "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest", "test:integration": "jest tests_integration", "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", lint: "run-p lint:*", "lint:typecheck": "tsc", "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly", "lint:changelog": "node ./scripts/lint-changelog.js", "lint:prettier": 'prettier . "!test*" --check', "lint:dist": 'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2016 "dist/!(bin-prettier|index|third-party).js"', "lint:spellcheck": 'cspell "**/*" ".github/**/*"', "lint:deps": "node ./scripts/check-deps.js", fix: "run-s fix:eslint fix:prettier", "fix:eslint": "yarn lint:eslint --fix", "fix:prettier": "yarn lint:prettier --write", build: "node ./scripts/build/build.js", "build-docs": "node ./scripts/build-docs.js" },
	      l = { name: "prettier", version: "2.1.2", description: n, bin: r, repository: "prettier/prettier", homepage: "https://prettier.io", author: "James Long", license: "MIT", main: "./index.js", browser: "./standalone.js", unpkg: "./standalone.js", engines: u, files: o, dependencies: a, devDependencies: i, scripts: s },
	      c = Object.freeze({ __proto__: null, name: "prettier", version: "2.1.2", description: n, bin: r, repository: "prettier/prettier", homepage: "https://prettier.io", author: "James Long", license: "MIT", main: "./index.js", browser: "./standalone.js", unpkg: "./standalone.js", engines: u, files: o, dependencies: a, devDependencies: i, scripts: s, default: l });function p() {}function d(e, t, n, r, u) {
	    for (var o = 0, a = t.length, i = 0, s = 0; o < a; o++) {
	      var l = t[o];if (l.removed) {
	        if (l.value = e.join(r.slice(s, s + l.count)), s += l.count, o && t[o - 1].added) {
	          var c = t[o - 1];t[o - 1] = t[o], t[o] = c;
	        }
	      } else {
	        if (!l.added && u) {
	          var p = n.slice(i, i + l.count);p = p.map(function (e, t) {
	            var n = r[s + t];return n.length > e.length ? n : e;
	          }), l.value = e.join(p);
	        } else l.value = e.join(n.slice(i, i + l.count));i += l.count, l.added || (s += l.count);
	      }
	    }var d = t[a - 1];return a > 1 && "string" == typeof d.value && (d.added || d.removed) && e.equals("", d.value) && (t[a - 2].value += d.value, t.pop()), t;
	  }function f(e) {
	    return { newPos: e.newPos, components: e.components.slice(0) };
	  }p.prototype = { diff: function diff(e, t) {
	      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
	          r = n.callback;"function" == typeof n && (r = n, n = {}), this.options = n;var u = this;function o(e) {
	        return r ? (setTimeout(function () {
	          r(void 0, e);
	        }, 0), !0) : e;
	      }e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e));var a = (t = this.removeEmpty(this.tokenize(t))).length,
	          i = e.length,
	          s = 1,
	          l = a + i,
	          c = [{ newPos: -1, components: [] }],
	          p = this.extractCommon(c[0], t, e, 0);if (c[0].newPos + 1 >= a && p + 1 >= i) return o([{ value: this.join(t), count: t.length }]);function h() {
	        for (var n = -1 * s; n <= s; n += 2) {
	          var r = void 0,
	              l = c[n - 1],
	              p = c[n + 1],
	              h = (p ? p.newPos : 0) - n;l && (c[n - 1] = void 0);var m = l && l.newPos + 1 < a,
	              g = p && 0 <= h && h < i;if (m || g) {
	            if (!m || g && l.newPos < p.newPos ? (r = f(p), u.pushComponent(r.components, void 0, !0)) : ((r = l).newPos++, u.pushComponent(r.components, !0, void 0)), h = u.extractCommon(r, t, e, n), r.newPos + 1 >= a && h + 1 >= i) return o(d(u, r.components, t, e, u.useLongestToken));c[n] = r;
	          } else c[n] = void 0;
	        }s++;
	      }if (r) !function e() {
	        setTimeout(function () {
	          if (s > l) return r();h() || e();
	        }, 0);
	      }();else for (; s <= l;) {
	        var m = h();if (m) return m;
	      }
	    }, pushComponent: function pushComponent(e, t, n) {
	      var r = e[e.length - 1];r && r.added === t && r.removed === n ? e[e.length - 1] = { count: r.count + 1, added: t, removed: n } : e.push({ count: 1, added: t, removed: n });
	    }, extractCommon: function extractCommon(e, t, n, r) {
	      for (var u = t.length, o = n.length, a = e.newPos, i = a - r, s = 0; a + 1 < u && i + 1 < o && this.equals(t[a + 1], n[i + 1]);) {
	        a++, i++, s++;
	      }return s && e.components.push({ count: s }), e.newPos = a, i;
	    }, equals: function equals(e, t) {
	      return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
	    }, removeEmpty: function removeEmpty(e) {
	      for (var t = [], n = 0; n < e.length; n++) {
	        e[n] && t.push(e[n]);
	      }return t;
	    }, castInput: function castInput(e) {
	      return e;
	    }, tokenize: function tokenize(e) {
	      return e.split("");
	    }, join: function join(e) {
	      return e.join("");
	    } };var h = new p();function m(e, t) {
	    if ("function" == typeof e) t.callback = e;else if (e) for (var n in e) {
	      e.hasOwnProperty(n) && (t[n] = e[n]);
	    }return t;
	  }var g = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
	      D = /\S/,
	      y = new p();y.equals = function (e, t) {
	    return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !D.test(e) && !D.test(t);
	  }, y.tokenize = function (e) {
	    for (var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0; n < t.length - 1; n++) {
	      !t[n + 1] && t[n + 2] && g.test(t[n]) && g.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
	    }return t;
	  };var E = new p();function C(e, t, n) {
	    return E.diff(e, t, n);
	  }E.tokenize = function (e) {
	    var t = [],
	        n = e.split(/(\n|\r\n)/);n[n.length - 1] || n.pop();for (var r = 0; r < n.length; r++) {
	      var u = n[r];r % 2 && !this.options.newlineIsToken ? t[t.length - 1] += u : (this.options.ignoreWhitespace && (u = u.trim()), t.push(u));
	    }return t;
	  };var b = new p();b.tokenize = function (e) {
	    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
	  };var A = new p();function v(e) {
	    return (v = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    })(e);
	  }function F(e) {
	    return function (e) {
	      if (Array.isArray(e)) {
	        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
	          n[t] = e[t];
	        }return n;
	      }
	    }(e) || function (e) {
	      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
	    }(e) || function () {
	      throw new TypeError("Invalid attempt to spread non-iterable instance");
	    }();
	  }A.tokenize = function (e) {
	    return e.split(/([{}:;,]|\s+)/);
	  };var x = Object.prototype.toString,
	      S = new p();function w(e, t, n, r, u) {
	    var o, a;for (t = t || [], n = n || [], r && (e = r(u, e)), o = 0; o < t.length; o += 1) {
	      if (t[o] === e) return n[o];
	    }if ("[object Array]" === x.call(e)) {
	      for (t.push(e), a = new Array(e.length), n.push(a), o = 0; o < e.length; o += 1) {
	        a[o] = w(e[o], t, n, r, u);
	      }return t.pop(), n.pop(), a;
	    }if (e && e.toJSON && (e = e.toJSON()), "object" === v(e) && null !== e) {
	      t.push(e), a = {}, n.push(a);var i,
	          s = [];for (i in e) {
	        e.hasOwnProperty(i) && s.push(i);
	      }for (s.sort(), o = 0; o < s.length; o += 1) {
	        a[i = s[o]] = w(e[i], t, n, r, i);
	      }t.pop(), n.pop();
	    } else a = e;return a;
	  }S.useLongestToken = !0, S.tokenize = E.tokenize, S.castInput = function (e) {
	    var t = this.options,
	        n = t.undefinedReplacement,
	        r = t.stringifyReplacer,
	        u = void 0 === r ? function (e, t) {
	      return void 0 === t ? n : t;
	    } : r;return "string" == typeof e ? e : JSON.stringify(w(e, null, null, u), u, "  ");
	  }, S.equals = function (e, t) {
	    return p.prototype.equals.call(S, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
	  };var B = new p();function T(e) {
	    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
	        n = e.split(/\r\n|[\n\v\f\r\x85]/),
	        r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	        u = [],
	        o = 0;function a() {
	      var e = {};for (u.push(e); o < n.length;) {
	        var r = n[o];if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) break;var a = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);a && (e.index = a[1]), o++;
	      }for (i(e), i(e), e.hunks = []; o < n.length;) {
	        var l = n[o];if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(l)) break;if (/^@@/.test(l)) e.hunks.push(s());else {
	          if (l && t.strict) throw new Error("Unknown line " + (o + 1) + " " + JSON.stringify(l));o++;
	        }
	      }
	    }function i(e) {
	      var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[o]);if (t) {
	        var r = "---" === t[1] ? "old" : "new",
	            u = t[2].split("\t", 2),
	            a = u[0].replace(/\\\\/g, "\\");/^".*"$/.test(a) && (a = a.substr(1, a.length - 2)), e[r + "FileName"] = a, e[r + "Header"] = (u[1] || "").trim(), o++;
	      }
	    }function s() {
	      for (var e = o, u = n[o++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), a = { oldStart: +u[1], oldLines: +u[2] || 1, newStart: +u[3], newLines: +u[4] || 1, lines: [], linedelimiters: [] }, i = 0, s = 0; o < n.length && !(0 === n[o].indexOf("--- ") && o + 2 < n.length && 0 === n[o + 1].indexOf("+++ ") && 0 === n[o + 2].indexOf("@@")); o++) {
	        var l = 0 == n[o].length && o != n.length - 1 ? " " : n[o][0];if ("+" !== l && "-" !== l && " " !== l && "\\" !== l) break;a.lines.push(n[o]), a.linedelimiters.push(r[o] || "\n"), "+" === l ? i++ : "-" === l ? s++ : " " === l && (i++, s++);
	      }if (i || 1 !== a.newLines || (a.newLines = 0), s || 1 !== a.oldLines || (a.oldLines = 0), t.strict) {
	        if (i !== a.newLines) throw new Error("Added line count did not match for hunk at line " + (e + 1));if (s !== a.oldLines) throw new Error("Removed line count did not match for hunk at line " + (e + 1));
	      }return a;
	    }for (; o < n.length;) {
	      a();
	    }return u;
	  }function k(e, t, n) {
	    var r = !0,
	        u = !1,
	        o = !1,
	        a = 1;return function i() {
	      if (r && !o) {
	        if (u ? a++ : r = !1, e + a <= n) return a;o = !0;
	      }if (!u) return o || (r = !0), t <= e - a ? -a++ : (u = !0, i());
	    };
	  }function N(e, t) {
	    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if ("string" == typeof t && (t = T(t)), Array.isArray(t)) {
	      if (t.length > 1) throw new Error("applyPatch only works with a single input.");t = t[0];
	    }var r,
	        u,
	        o = e.split(/\r\n|[\n\v\f\r\x85]/),
	        a = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	        i = t.hunks,
	        s = n.compareLine || function (e, t, n, r) {
	      return t === r;
	    },
	        l = 0,
	        c = n.fuzzFactor || 0,
	        p = 0,
	        d = 0;function f(e, t) {
	      for (var n = 0; n < e.lines.length; n++) {
	        var r = e.lines[n],
	            u = r.length > 0 ? r[0] : " ",
	            a = r.length > 0 ? r.substr(1) : r;if (" " === u || "-" === u) {
	          if (!s(t + 1, o[t], u, a) && ++l > c) return !1;t++;
	        }
	      }return !0;
	    }for (var h = 0; h < i.length; h++) {
	      for (var m = i[h], g = o.length - m.oldLines, D = 0, y = d + m.oldStart - 1, E = k(y, p, g); void 0 !== D; D = E()) {
	        if (f(m, y + D)) {
	          m.offset = d += D;break;
	        }
	      }if (void 0 === D) return !1;p = m.offset + m.oldStart + m.oldLines;
	    }for (var C = 0, b = 0; b < i.length; b++) {
	      var A = i[b],
	          v = A.oldStart + A.offset + C - 1;C += A.newLines - A.oldLines, v < 0 && (v = 0);for (var F = 0; F < A.lines.length; F++) {
	        var x = A.lines[F],
	            S = x.length > 0 ? x[0] : " ",
	            w = x.length > 0 ? x.substr(1) : x,
	            B = A.linedelimiters[F];if (" " === S) v++;else if ("-" === S) o.splice(v, 1), a.splice(v, 1);else if ("+" === S) o.splice(v, 0, w), a.splice(v, 0, B), v++;else if ("\\" === S) {
	          var N = A.lines[F - 1] ? A.lines[F - 1][0] : null;"+" === N ? r = !0 : "-" === N && (u = !0);
	        }
	      }
	    }if (r) for (; !o[o.length - 1];) {
	      o.pop(), a.pop();
	    } else u && (o.push(""), a.push("\n"));for (var O = 0; O < o.length - 1; O++) {
	      o[O] = o[O] + a[O];
	    }return o.join("");
	  }function O(e, t, n, r, u, o, a) {
	    a || (a = {}), void 0 === a.context && (a.context = 4);var i = C(n, r, a);function s(e) {
	      return e.map(function (e) {
	        return " " + e;
	      });
	    }i.push({ value: "", lines: [] });for (var l = [], c = 0, p = 0, d = [], f = 1, h = 1, m = function m(e) {
	      var t = i[e],
	          u = t.lines || t.value.replace(/\n$/, "").split("\n");if (t.lines = u, t.added || t.removed) {
	        var o;if (!c) {
	          var m = i[e - 1];c = f, p = h, m && (d = a.context > 0 ? s(m.lines.slice(-a.context)) : [], c -= d.length, p -= d.length);
	        }(o = d).push.apply(o, F(u.map(function (e) {
	          return (t.added ? "+" : "-") + e;
	        }))), t.added ? h += u.length : f += u.length;
	      } else {
	        if (c) if (u.length <= 2 * a.context && e < i.length - 2) {
	          var g;(g = d).push.apply(g, F(s(u)));
	        } else {
	          var D,
	              y = Math.min(u.length, a.context);(D = d).push.apply(D, F(s(u.slice(0, y))));var E = { oldStart: c, oldLines: f - c + y, newStart: p, newLines: h - p + y, lines: d };if (e >= i.length - 2 && u.length <= a.context) {
	            var C = /\n$/.test(n),
	                b = /\n$/.test(r),
	                A = 0 == u.length && d.length > E.oldLines;!C && A && d.splice(E.oldLines, 0, "\\ No newline at end of file"), (C || A) && b || d.push("\\ No newline at end of file");
	          }l.push(E), c = 0, p = 0, d = [];
	        }f += u.length, h += u.length;
	      }
	    }, g = 0; g < i.length; g++) {
	      m(g);
	    }return { oldFileName: e, newFileName: t, oldHeader: u, newHeader: o, hunks: l };
	  }function P(e, t, n, r, u, o, a) {
	    var i = O(e, t, n, r, u, o, a),
	        s = [];e == t && s.push("Index: " + e), s.push("==================================================================="), s.push("--- " + i.oldFileName + (void 0 === i.oldHeader ? "" : "\t" + i.oldHeader)), s.push("+++ " + i.newFileName + (void 0 === i.newHeader ? "" : "\t" + i.newHeader));for (var l = 0; l < i.hunks.length; l++) {
	      var c = i.hunks[l];s.push("@@ -" + c.oldStart + "," + c.oldLines + " +" + c.newStart + "," + c.newLines + " @@"), s.push.apply(s, c.lines);
	    }return s.join("\n") + "\n";
	  }function _(e, t) {
	    if (t.length > e.length) return !1;for (var n = 0; n < t.length; n++) {
	      if (t[n] !== e[n]) return !1;
	    }return !0;
	  }function I(e) {
	    var t = function e(t) {
	      var n = 0,
	          r = 0;return t.forEach(function (t) {
	        if ("string" != typeof t) {
	          var u = e(t.mine),
	              o = e(t.theirs);void 0 !== n && (u.oldLines === o.oldLines ? n += u.oldLines : n = void 0), void 0 !== r && (u.newLines === o.newLines ? r += u.newLines : r = void 0);
	        } else void 0 === r || "+" !== t[0] && " " !== t[0] || r++, void 0 === n || "-" !== t[0] && " " !== t[0] || n++;
	      }), { oldLines: n, newLines: r };
	    }(e.lines),
	        n = t.oldLines,
	        r = t.newLines;void 0 !== n ? e.oldLines = n : delete e.oldLines, void 0 !== r ? e.newLines = r : delete e.newLines;
	  }function j(e, t) {
	    if ("string" == typeof e) {
	      if (/^@@/m.test(e) || /^Index:/m.test(e)) return T(e)[0];if (!t) throw new Error("Must provide a base reference or pass in a patch");return O(void 0, void 0, t, e);
	    }return e;
	  }function M(e) {
	    return e.newFileName && e.newFileName !== e.oldFileName;
	  }function L(e, t, n) {
	    return t === n ? t : (e.conflict = !0, { mine: t, theirs: n });
	  }function R(e, t) {
	    return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart;
	  }function q(e, t) {
	    return { oldStart: e.oldStart, oldLines: e.oldLines, newStart: e.newStart + t, newLines: e.newLines, lines: e.lines };
	  }function V(e, t, n, r, u) {
	    var o = { offset: t, lines: n, index: 0 },
	        a = { offset: r, lines: u, index: 0 };for (z(e, o, a), z(e, a, o); o.index < o.lines.length && a.index < a.lines.length;) {
	      var i = o.lines[o.index],
	          s = a.lines[a.index];if ("-" !== i[0] && "+" !== i[0] || "-" !== s[0] && "+" !== s[0]) {
	        if ("+" === i[0] && " " === s[0]) {
	          var l;(l = e.lines).push.apply(l, F(G(o)));
	        } else if ("+" === s[0] && " " === i[0]) {
	          var c;(c = e.lines).push.apply(c, F(G(a)));
	        } else "-" === i[0] && " " === s[0] ? $(e, o, a) : "-" === s[0] && " " === i[0] ? $(e, a, o, !0) : i === s ? (e.lines.push(i), o.index++, a.index++) : U(e, G(o), G(a));
	      } else W(e, o, a);
	    }J(e, o), J(e, a), I(e);
	  }function W(e, t, n) {
	    var r = G(t),
	        u = G(n);if (H(r) && H(u)) {
	      var o, a;if (_(r, u) && X(n, r, r.length - u.length)) return void (o = e.lines).push.apply(o, F(r));if (_(u, r) && X(t, u, u.length - r.length)) return void (a = e.lines).push.apply(a, F(u));
	    } else if (function (e, t) {
	      return e.length === t.length && _(e, t);
	    }(r, u)) {
	      var i;return void (i = e.lines).push.apply(i, F(r));
	    }U(e, r, u);
	  }function $(e, t, n, r) {
	    var u,
	        o = G(t),
	        a = function (e, t) {
	      var n = [],
	          r = [],
	          u = 0,
	          o = !1,
	          a = !1;for (; u < t.length && e.index < e.lines.length;) {
	        var i = e.lines[e.index],
	            s = t[u];if ("+" === s[0]) break;if (o = o || " " !== i[0], r.push(s), u++, "+" === i[0]) for (a = !0; "+" === i[0];) {
	          n.push(i), i = e.lines[++e.index];
	        }s.substr(1) === i.substr(1) ? (n.push(i), e.index++) : a = !0;
	      }"+" === (t[u] || "")[0] && o && (a = !0);if (a) return n;for (; u < t.length;) {
	        r.push(t[u++]);
	      }return { merged: r, changes: n };
	    }(n, o);a.merged ? (u = e.lines).push.apply(u, F(a.merged)) : U(e, r ? a : o, r ? o : a);
	  }function U(e, t, n) {
	    e.conflict = !0, e.lines.push({ conflict: !0, mine: t, theirs: n });
	  }function z(e, t, n) {
	    for (; t.offset < n.offset && t.index < t.lines.length;) {
	      var r = t.lines[t.index++];e.lines.push(r), t.offset++;
	    }
	  }function J(e, t) {
	    for (; t.index < t.lines.length;) {
	      var n = t.lines[t.index++];e.lines.push(n);
	    }
	  }function G(e) {
	    for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length;) {
	      var r = e.lines[e.index];if ("-" === n && "+" === r[0] && (n = "+"), n !== r[0]) break;t.push(r), e.index++;
	    }return t;
	  }function H(e) {
	    return e.reduce(function (e, t) {
	      return e && "-" === t[0];
	    }, !0);
	  }function X(e, t, n) {
	    for (var r = 0; r < n; r++) {
	      var u = t[t.length - n + r].substr(1);if (e.lines[e.index + r] !== " " + u) return !1;
	    }return e.index += n, !0;
	  }function Y(e) {
	    var t = e;return t = (t = (t = (t = t.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
	  }B.tokenize = function (e) {
	    return e.slice();
	  }, B.join = B.removeEmpty = function (e) {
	    return e;
	  };var K = Object.freeze({ __proto__: null, Diff: p, diffChars: function diffChars(e, t, n) {
	      return h.diff(e, t, n);
	    }, diffWords: function diffWords(e, t, n) {
	      return n = m(n, { ignoreWhitespace: !0 }), y.diff(e, t, n);
	    }, diffWordsWithSpace: function diffWordsWithSpace(e, t, n) {
	      return y.diff(e, t, n);
	    }, diffLines: C, diffTrimmedLines: function diffTrimmedLines(e, t, n) {
	      var r = m(n, { ignoreWhitespace: !0 });return E.diff(e, t, r);
	    }, diffSentences: function diffSentences(e, t, n) {
	      return b.diff(e, t, n);
	    }, diffCss: function diffCss(e, t, n) {
	      return A.diff(e, t, n);
	    }, diffJson: function diffJson(e, t, n) {
	      return S.diff(e, t, n);
	    }, diffArrays: function diffArrays(e, t, n) {
	      return B.diff(e, t, n);
	    }, structuredPatch: O, createTwoFilesPatch: P, createPatch: function createPatch(e, t, n, r, u, o) {
	      return P(e, e, t, n, r, u, o);
	    }, applyPatch: N, applyPatches: function applyPatches(e, t) {
	      "string" == typeof e && (e = T(e));var n = 0;!function r() {
	        var u = e[n++];if (!u) return t.complete();t.loadFile(u, function (e, n) {
	          if (e) return t.complete(e);var o = N(n, u, t);t.patched(u, o, function (e) {
	            if (e) return t.complete(e);r();
	          });
	        });
	      }();
	    }, parsePatch: T, merge: function merge(e, t, n) {
	      e = j(e, n), t = j(t, n);var r = {};(e.index || t.index) && (r.index = e.index || t.index), (e.newFileName || t.newFileName) && (M(e) ? M(t) ? (r.oldFileName = L(r, e.oldFileName, t.oldFileName), r.newFileName = L(r, e.newFileName, t.newFileName), r.oldHeader = L(r, e.oldHeader, t.oldHeader), r.newHeader = L(r, e.newHeader, t.newHeader)) : (r.oldFileName = e.oldFileName, r.newFileName = e.newFileName, r.oldHeader = e.oldHeader, r.newHeader = e.newHeader) : (r.oldFileName = t.oldFileName || e.oldFileName, r.newFileName = t.newFileName || e.newFileName, r.oldHeader = t.oldHeader || e.oldHeader, r.newHeader = t.newHeader || e.newHeader)), r.hunks = [];for (var u = 0, o = 0, a = 0, i = 0; u < e.hunks.length || o < t.hunks.length;) {
	        var s = e.hunks[u] || { oldStart: 1 / 0 },
	            l = t.hunks[o] || { oldStart: 1 / 0 };if (R(s, l)) r.hunks.push(q(s, a)), u++, i += s.newLines - s.oldLines;else if (R(l, s)) r.hunks.push(q(l, i)), o++, a += l.newLines - l.oldLines;else {
	          var c = { oldStart: Math.min(s.oldStart, l.oldStart), oldLines: 0, newStart: Math.min(s.newStart + a, l.oldStart + i), newLines: 0, lines: [] };V(c, s.oldStart, s.lines, l.oldStart, l.lines), o++, u++, r.hunks.push(c);
	        }
	      }return r;
	    }, convertChangesToDMP: function convertChangesToDMP(e) {
	      for (var t, n, r = [], u = 0; u < e.length; u++) {
	        n = (t = e[u]).added ? 1 : t.removed ? -1 : 0, r.push([n, t.value]);
	      }return r;
	    }, convertChangesToXML: function convertChangesToXML(e) {
	      for (var t = [], n = 0; n < e.length; n++) {
	        var r = e[n];r.added ? t.push("<ins>") : r.removed && t.push("<del>"), t.push(Y(r.value)), r.added ? t.push("</ins>") : r.removed && t.push("</del>");
	      }return t.join("");
	    }, canonicalize: w });function Q(e) {
	    return { type: "concat", parts: e };
	  }function Z(e) {
	    return { type: "indent", contents: e };
	  }function ee(e, t) {
	    return { type: "align", contents: t, n: e };
	  }function te(e, t) {
	    return { type: "group", id: (t = t || {}).id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
	  }var ne = { type: "break-parent" },
	      re = Q([{ type: "line", hard: !0 }, ne]),
	      ue = Q([{ type: "line", hard: !0, literal: !0 }, ne]);var oe = { concat: Q, join: function join(e, t) {
	      var n = [];for (var _r2 = 0; _r2 < t.length; _r2++) {
	        0 !== _r2 && n.push(e), n.push(t[_r2]);
	      }return Q(n);
	    }, line: { type: "line" }, softline: { type: "line", soft: !0 }, hardline: re, literalline: ue, group: te, conditionalGroup: function conditionalGroup(e, t) {
	      return te(e[0], Object.assign({}, t, { expandedStates: e }));
	    }, fill: function fill(e) {
	      return { type: "fill", parts: e };
	    }, lineSuffix: function lineSuffix(e) {
	      return { type: "line-suffix", contents: e };
	    }, lineSuffixBoundary: { type: "line-suffix-boundary" }, cursor: { type: "cursor", placeholder: Symbol("cursor") }, breakParent: ne, ifBreak: function ifBreak(e, t, n) {
	      return { type: "if-break", breakContents: e, flatContents: t, groupId: (n = n || {}).groupId };
	    }, trim: { type: "trim" }, indent: Z, align: ee, addAlignmentToDoc: function addAlignmentToDoc(e, t, n) {
	      var r = e;if (t > 0) {
	        for (var _e2 = 0; _e2 < Math.floor(t / n); ++_e2) {
	          r = Z(r);
	        }r = ee(t % n, r), r = ee(-1 / 0, r);
	      }return r;
	    }, markAsRoot: function markAsRoot(e) {
	      return ee({ type: "root" }, e);
	    }, dedentToRoot: function dedentToRoot(e) {
	      return ee(-1 / 0, e);
	    }, dedent: function dedent(e) {
	      return ee(-1, e);
	    } },
	      ae = function ae(e) {
	    return "string" == typeof e ? e.replace(function () {
	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$onlyFirst = _ref.onlyFirst,
	          e = _ref$onlyFirst === undefined ? !1 : _ref$onlyFirst;

	      var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t, e ? void 0 : "g");
	    }(), "") : e;
	  };var ie = function ie(e) {
	    return !Number.isNaN(e) && e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141);
	  };var se = ie,
	      le = ie;se.default = le;var ce = function ce(e) {
	    if ("string" != typeof (e = e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) || 0 === e.length) return 0;e = ae(e);var t = 0;for (var _n2 = 0; _n2 < e.length; _n2++) {
	      var _r3 = e.codePointAt(_n2);_r3 <= 31 || _r3 >= 127 && _r3 <= 159 || _r3 >= 768 && _r3 <= 879 || (_r3 > 65535 && _n2++, t += se(_r3) ? 2 : 1);
	    }return t;
	  };var pe = ce,
	      de = ce;pe.default = de;var fe = function fe(e) {
	    if ("string" != typeof e) throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
	  },
	      he = function he(e) {
	    return e[e.length - 1];
	  },
	      me = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};function ge() {
	    throw new Error("setTimeout has not been defined");
	  }function De() {
	    throw new Error("clearTimeout has not been defined");
	  }var ye = ge,
	      Ee = De;function Ce(e) {
	    if (ye === setTimeout) return setTimeout(e, 0);if ((ye === ge || !ye) && setTimeout) return ye = setTimeout, setTimeout(e, 0);try {
	      return ye(e, 0);
	    } catch (t) {
	      try {
	        return ye.call(null, e, 0);
	      } catch (t) {
	        return ye.call(this, e, 0);
	      }
	    }
	  }"function" == typeof me.setTimeout && (ye = setTimeout), "function" == typeof me.clearTimeout && (Ee = clearTimeout);var be,
	      Ae = [],
	      ve = !1,
	      Fe = -1;function xe() {
	    ve && be && (ve = !1, be.length ? Ae = be.concat(Ae) : Fe = -1, Ae.length && Se());
	  }function Se() {
	    if (!ve) {
	      var e = Ce(xe);ve = !0;for (var t = Ae.length; t;) {
	        for (be = Ae, Ae = []; ++Fe < t;) {
	          be && be[Fe].run();
	        }Fe = -1, t = Ae.length;
	      }be = null, ve = !1, function (e) {
	        if (Ee === clearTimeout) return clearTimeout(e);if ((Ee === De || !Ee) && clearTimeout) return Ee = clearTimeout, clearTimeout(e);try {
	          Ee(e);
	        } catch (t) {
	          try {
	            return Ee.call(null, e);
	          } catch (t) {
	            return Ee.call(this, e);
	          }
	        }
	      }(e);
	    }
	  }function we(e, t) {
	    this.fun = e, this.array = t;
	  }we.prototype.run = function () {
	    this.fun.apply(null, this.array);
	  };function Be() {}var Te = Be,
	      ke = Be,
	      Ne = Be,
	      Oe = Be,
	      Pe = Be,
	      _e = Be,
	      Ie = Be;var je = me.performance || {},
	      Me = je.now || je.mozNow || je.msNow || je.oNow || je.webkitNow || function () {
	    return new Date().getTime();
	  };var Le = new Date();var Re = { nextTick: function nextTick(e) {
	      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
	        t[n - 1] = arguments[n];
	      }Ae.push(new we(e, t)), 1 !== Ae.length || ve || Ce(Se);
	    }, title: "browser", browser: !0, env: {}, argv: [], version: "", versions: {}, on: Te, addListener: ke, once: Ne, off: Oe, removeListener: Pe, removeAllListeners: _e, emit: Ie, binding: function binding(e) {
	      throw new Error("process.binding is not supported");
	    }, cwd: function cwd() {
	      return "/";
	    }, chdir: function chdir(e) {
	      throw new Error("process.chdir is not supported");
	    }, umask: function umask() {
	      return 0;
	    }, hrtime: function hrtime(e) {
	      var t = .001 * Me.call(je),
	          n = Math.floor(t),
	          r = Math.floor(t % 1 * 1e9);return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r];
	    }, platform: "browser", release: {}, config: {}, uptime: function uptime() {
	      return (new Date() - Le) / 1e3;
	    } };var qe = "object" == (typeof Re === "undefined" ? "undefined" : _typeof(Re)) && Re.env && Re.env.NODE_DEBUG && /\bsemver\b/i.test(Re.env.NODE_DEBUG) ? function () {
	    var _console;

	    for (var _len = arguments.length, e = Array(_len), _key = 0; _key < _len; _key++) {
	      e[_key] = arguments[_key];
	    }

	    return (_console = console).error.apply(_console, ["SEMVER"].concat(e));
	  } : function () {};var Ve = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 },
	      We = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function $e(e, t, n) {
	    return e(n = { path: t, exports: {}, require: function require(e, t) {
	        return function () {
	          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
	        }(null == t && n.path);
	      } }, n.exports), n.exports;
	  }function Ue(e) {
	    return e && e.default || e;
	  }var ze = $e(function (e, t) {
	    var n = Ve.MAX_SAFE_COMPONENT_LENGTH,
	        r = (t = e.exports = {}).re = [],
	        u = t.src = [],
	        o = t.t = {};var a = 0;var i = function i(e, t, n) {
	      var i = a++;qe(i, t), o[e] = i, u[i] = t, r[i] = new RegExp(t, n ? "g" : void 0);
	    };i("NUMERICIDENTIFIER", "0|[1-9]\\d*"), i("NUMERICIDENTIFIERLOOSE", "[0-9]+"), i("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), i("MAINVERSION", "(".concat(u[o.NUMERICIDENTIFIER], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIER], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIER], ")")), i("MAINVERSIONLOOSE", "(".concat(u[o.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIERLOOSE], ")")), i("PRERELEASEIDENTIFIER", "(?:".concat(u[o.NUMERICIDENTIFIER], "|").concat(u[o.NONNUMERICIDENTIFIER], ")")), i("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(u[o.NUMERICIDENTIFIERLOOSE], "|").concat(u[o.NONNUMERICIDENTIFIER], ")")), i("PRERELEASE", "(?:-(".concat(u[o.PRERELEASEIDENTIFIER], "(?:\\.").concat(u[o.PRERELEASEIDENTIFIER], ")*))")), i("PRERELEASELOOSE", "(?:-?(".concat(u[o.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(u[o.PRERELEASEIDENTIFIERLOOSE], ")*))")), i("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), i("BUILD", "(?:\\+(".concat(u[o.BUILDIDENTIFIER], "(?:\\.").concat(u[o.BUILDIDENTIFIER], ")*))")), i("FULLPLAIN", "v?".concat(u[o.MAINVERSION]).concat(u[o.PRERELEASE], "?").concat(u[o.BUILD], "?")), i("FULL", "^".concat(u[o.FULLPLAIN], "$")), i("LOOSEPLAIN", "[v=\\s]*".concat(u[o.MAINVERSIONLOOSE]).concat(u[o.PRERELEASELOOSE], "?").concat(u[o.BUILD], "?")), i("LOOSE", "^".concat(u[o.LOOSEPLAIN], "$")), i("GTLT", "((?:<|>)?=?)"), i("XRANGEIDENTIFIERLOOSE", "".concat(u[o.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), i("XRANGEIDENTIFIER", "".concat(u[o.NUMERICIDENTIFIER], "|x|X|\\*")), i("XRANGEPLAIN", "[v=\\s]*(".concat(u[o.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIER], ")") + "(?:".concat(u[o.PRERELEASE], ")?").concat(u[o.BUILD], "?") + ")?)?"), i("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(u[o.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(u[o.PRERELEASELOOSE], ")?").concat(u[o.BUILD], "?") + ")?)?"), i("XRANGE", "^".concat(u[o.GTLT], "\\s*").concat(u[o.XRANGEPLAIN], "$")), i("XRANGELOOSE", "^".concat(u[o.GTLT], "\\s*").concat(u[o.XRANGEPLAINLOOSE], "$")), i("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:$|[^\\d])"), i("COERCERTL", u[o.COERCE], !0), i("LONETILDE", "(?:~>?)"), i("TILDETRIM", "(\\s*)".concat(u[o.LONETILDE], "\\s+"), !0), t.tildeTrimReplace = "$1~", i("TILDE", "^".concat(u[o.LONETILDE]).concat(u[o.XRANGEPLAIN], "$")), i("TILDELOOSE", "^".concat(u[o.LONETILDE]).concat(u[o.XRANGEPLAINLOOSE], "$")), i("LONECARET", "(?:\\^)"), i("CARETTRIM", "(\\s*)".concat(u[o.LONECARET], "\\s+"), !0), t.caretTrimReplace = "$1^", i("CARET", "^".concat(u[o.LONECARET]).concat(u[o.XRANGEPLAIN], "$")), i("CARETLOOSE", "^".concat(u[o.LONECARET]).concat(u[o.XRANGEPLAINLOOSE], "$")), i("COMPARATORLOOSE", "^".concat(u[o.GTLT], "\\s*(").concat(u[o.LOOSEPLAIN], ")$|^$")), i("COMPARATOR", "^".concat(u[o.GTLT], "\\s*(").concat(u[o.FULLPLAIN], ")$|^$")), i("COMPARATORTRIM", "(\\s*)".concat(u[o.GTLT], "\\s*(").concat(u[o.LOOSEPLAIN], "|").concat(u[o.XRANGEPLAIN], ")"), !0), t.comparatorTrimReplace = "$1$2$3", i("HYPHENRANGE", "^\\s*(".concat(u[o.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(u[o.XRANGEPLAIN], ")") + "\\s*$"), i("HYPHENRANGELOOSE", "^\\s*(".concat(u[o.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(u[o.XRANGEPLAINLOOSE], ")") + "\\s*$"), i("STAR", "(<|>)?=?\\s*\\*"), i("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), i("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
	  });var Je = /^[0-9]+$/,
	      Ge = function Ge(e, t) {
	    var n = Je.test(e),
	        r = Je.test(t);return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
	  };var He = { compareIdentifiers: Ge, rcompareIdentifiers: function rcompareIdentifiers(e, t) {
	      return Ge(t, e);
	    } };var Xe = Ve.MAX_LENGTH,
	      Ye = Ve.MAX_SAFE_INTEGER,
	      Ke = ze.re,
	      Qe = ze.t,
	      Ze = He.compareIdentifiers;

	  var et = function () {
	    function et(e, t) {
	      _classCallCheck(this, et);

	      if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof et) {
	        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;e = e.version;
	      } else if ("string" != typeof e) throw new TypeError("Invalid Version: ".concat(e));if (e.length > Xe) throw new TypeError("version is longer than ".concat(Xe, " characters"));qe("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;var n = e.trim().match(t.loose ? Ke[Qe.LOOSE] : Ke[Qe.FULL]);if (!n) throw new TypeError("Invalid Version: ".concat(e));if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Ye || this.major < 0) throw new TypeError("Invalid major version");if (this.minor > Ye || this.minor < 0) throw new TypeError("Invalid minor version");if (this.patch > Ye || this.patch < 0) throw new TypeError("Invalid patch version");n[4] ? this.prerelease = n[4].split(".").map(function (e) {
	        if (/^[0-9]+$/.test(e)) {
	          var _t2 = +e;if (_t2 >= 0 && _t2 < Ye) return _t2;
	        }return e;
	      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
	    }

	    _createClass(et, [{
	      key: "format",
	      value: function format() {
	        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
	      }
	    }, {
	      key: "toString",
	      value: function toString() {
	        return this.version;
	      }
	    }, {
	      key: "compare",
	      value: function compare(e) {
	        if (qe("SemVer.compare", this.version, this.options, e), !(e instanceof et)) {
	          if ("string" == typeof e && e === this.version) return 0;e = new et(e, this.options);
	        }return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
	      }
	    }, {
	      key: "compareMain",
	      value: function compareMain(e) {
	        return e instanceof et || (e = new et(e, this.options)), Ze(this.major, e.major) || Ze(this.minor, e.minor) || Ze(this.patch, e.patch);
	      }
	    }, {
	      key: "comparePre",
	      value: function comparePre(e) {
	        if (e instanceof et || (e = new et(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;if (!this.prerelease.length && e.prerelease.length) return 1;if (!this.prerelease.length && !e.prerelease.length) return 0;var t = 0;do {
	          var _n3 = this.prerelease[t],
	              _r4 = e.prerelease[t];if (qe("prerelease compare", t, _n3, _r4), void 0 === _n3 && void 0 === _r4) return 0;if (void 0 === _r4) return 1;if (void 0 === _n3) return -1;if (_n3 !== _r4) return Ze(_n3, _r4);
	        } while (++t);
	      }
	    }, {
	      key: "compareBuild",
	      value: function compareBuild(e) {
	        e instanceof et || (e = new et(e, this.options));var t = 0;do {
	          var _n4 = this.build[t],
	              _r5 = e.build[t];if (qe("prerelease compare", t, _n4, _r5), void 0 === _n4 && void 0 === _r5) return 0;if (void 0 === _r5) return 1;if (void 0 === _n4) return -1;if (_n4 !== _r5) return Ze(_n4, _r5);
	        } while (++t);
	      }
	    }, {
	      key: "inc",
	      value: function inc(e, t) {
	        switch (e) {case "premajor":
	            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);break;case "preminor":
	            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);break;case "prepatch":
	            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);break;case "prerelease":
	            0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);break;case "major":
	            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];break;case "minor":
	            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];break;case "patch":
	            0 === this.prerelease.length && this.patch++, this.prerelease = [];break;case "pre":
	            if (0 === this.prerelease.length) this.prerelease = [0];else {
	              var _e3 = this.prerelease.length;for (; --_e3 >= 0;) {
	                "number" == typeof this.prerelease[_e3] && (this.prerelease[_e3]++, _e3 = -2);
	              }-1 === _e3 && this.prerelease.push(0);
	            }t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);break;default:
	            throw new Error("invalid increment argument: ".concat(e));}return this.format(), this.raw = this.version, this;
	      }
	    }]);

	    return et;
	  }();

	  var tt = et;var nt = function nt(e, t, n) {
	    return new tt(e, n).compare(new tt(t, n));
	  };var rt = function rt(e, t, n) {
	    return nt(e, t, n) < 0;
	  };var ut = function ut(e, t, n) {
	    return nt(e, t, n) >= 0;
	  },
	      ot = $e(function (e, t) {
	    function n() {
	      for (var e = [], t = 0; t < arguments.length; t++) {
	        e[t] = arguments[t];
	      }
	    }function r() {
	      return "undefined" != typeof WeakMap ? new WeakMap() : { add: n, delete: n, get: n, set: n, has: function has(e) {
	          return !1;
	        } };
	    }Object.defineProperty(t, "__esModule", { value: !0 });var u = Object.prototype.hasOwnProperty,
	        o = function o(e, t) {
	      return u.call(e, t);
	    };function a(e, t) {
	      for (var n in t) {
	        o(t, n) && (e[n] = t[n]);
	      }return e;
	    }var i = /^[ \t]*(?:\r\n|\r|\n)/,
	        s = /(?:\r\n|\r|\n)[ \t]*$/,
	        l = /^(?:[\r\n]|$)/,
	        c = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
	        p = /^[ \t]*[\r\n][ \t\r\n]*$/;function d(e, t, n) {
	      var r = 0,
	          u = e[0].match(c);u && (r = u[1].length);var o = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");t && (e = e.slice(1));var a = n.newline,
	          l = n.trimLeadingNewline,
	          p = n.trimTrailingNewline,
	          d = "string" == typeof a,
	          f = e.length;return e.map(function (e, t) {
	        return e = e.replace(o, "$1"), 0 === t && l && (e = e.replace(i, "")), t === f - 1 && p && (e = e.replace(s, "")), d && (e = e.replace(/\r\n|\n|\r/g, function (e) {
	          return a;
	        })), e;
	      });
	    }function f(e, t) {
	      for (var n = "", r = 0, u = e.length; r < u; r++) {
	        n += e[r], r < u - 1 && (n += t[r]);
	      }return n;
	    }function h(e) {
	      return o(e, "raw") && o(e, "length");
	    }var m = function e(t) {
	      var n = r(),
	          u = r();return a(function r(o) {
	        for (var i = [], s = 1; s < arguments.length; s++) {
	          i[s - 1] = arguments[s];
	        }if (h(o)) {
	          var c = o,
	              g = (i[0] === r || i[0] === m) && p.test(c[0]) && l.test(c[1]),
	              D = g ? u : n,
	              y = D.get(c);if (y || (y = d(c, g, t), D.set(c, y)), 0 === i.length) return y[0];var E = f(y, g ? i.slice(1) : i);return E;
	        }return e(a(a({}, t), o || {}));
	      }, { string: function string(e) {
	          return d([e], !1, t)[0];
	        } });
	    }({ trimLeadingNewline: !0, trimTrailingNewline: !0 });t.outdent = m, t.default = m;try {
	      e.exports = m, Object.defineProperty(m, "__esModule", { value: !0 }), m.default = m, m.outdent = m;
	    } catch (e) {}
	  });function at() {
	    var e = t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);return at = function at() {
	      return e;
	    }, e;
	  }function it() {
	    var e = t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);return it = function it() {
	      return e;
	    }, e;
	  }function st() {
	    var e = t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);return st = function st() {
	      return e;
	    }, e;
	  }function lt() {
	    var e = t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);return lt = function lt() {
	      return e;
	    }, e;
	  }function ct() {
	    var e = t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);return ct = function ct() {
	      return e;
	    }, e;
	  }function pt() {
	    var e = t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);return pt = function pt() {
	      return e;
	    }, e;
	  }var dt = ot.outdent;
	  var ft = { CATEGORY_CONFIG: "Config", CATEGORY_EDITOR: "Editor", CATEGORY_FORMAT: "Format", CATEGORY_OTHER: "Other", CATEGORY_OUTPUT: "Output", CATEGORY_GLOBAL: "Global", CATEGORY_SPECIAL: "Special", options: { cursorOffset: { since: "1.4.0", category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: dt(pt()), cliCategory: "Editor" }, endOfLine: { since: "1.15.0", category: "Global", type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: dt(ct()) }] }, filepath: { since: "1.4.0", category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { since: "0.0.10", category: "Global", type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: function exception(e) {
	          return "string" == typeof e || "function" == typeof e;
	        }, choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: null, description: "Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: function exception(e) {
	          return "string" == typeof e || "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	        }, cliName: "plugin", cliCategory: "Config" }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: "Global", description: dt(lt()), exception: function exception(e) {
	          return "string" == typeof e || "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	        }, cliName: "plugin-search-dir", cliCategory: "Config" }, printWidth: { since: "0.0.0", category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { since: "1.4.0", category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: dt(st()), cliCategory: "Editor" }, rangeStart: { since: "1.4.0", category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: dt(it()), cliCategory: "Editor" }, requirePragma: { since: "1.7.0", category: "Special", type: "boolean", default: !1, description: dt(at()), cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { since: "1.0.0", category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: "Global", type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } } },
	      ht = Ue(c);var mt = { compare: nt, lt: rt, gte: ut },
	      gt = ht.version,
	      Dt = ft.options;var yt = { getSupportInfo: function getSupportInfo() {
	      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref2$plugins = _ref2.plugins,
	          t = _ref2$plugins === undefined ? [] : _ref2$plugins,
	          _ref2$showUnreleased = _ref2.showUnreleased,
	          n = _ref2$showUnreleased === undefined ? !1 : _ref2$showUnreleased,
	          _ref2$showDeprecated = _ref2.showDeprecated,
	          r = _ref2$showDeprecated === undefined ? !1 : _ref2$showDeprecated,
	          _ref2$showInternal = _ref2.showInternal,
	          u = _ref2$showInternal === undefined ? !1 : _ref2$showInternal;

	      var o = gt.split("-", 1)[0],
	          a = t.reduce(function (e, t) {
	        return e.concat(t.languages || []);
	      }, []).filter(s),
	          i = function (e, t) {
	        return Object.entries(e).map(function (_ref3) {
	          var _ref4 = _slicedToArray(_ref3, 2),
	              e = _ref4[0],
	              n = _ref4[1];

	          return Object.assign(_defineProperty({}, t, e), n);
	        });
	      }(Object.assign.apply(Object, [{}].concat(_toConsumableArray(t.map(function (_ref5) {
	        var e = _ref5.options;
	        return e;
	      })), [Dt])), "name").filter(function (e) {
	        return s(e) && l(e);
	      }).sort(function (e, t) {
	        return e.name === t.name ? 0 : e.name < t.name ? -1 : 1;
	      }).map(function (t) {
	        if (u) return t;return e(t, ["cliName", "cliCategory", "cliDescription"]);
	      }).map(function (e) {
	        e = Object.assign({}, e), Array.isArray(e.default) && (e.default = 1 === e.default.length ? e.default[0].value : e.default.filter(s).sort(function (e, t) {
	          return mt.compare(t.since, e.since);
	        })[0].value), Array.isArray(e.choices) && (e.choices = e.choices.filter(function (e) {
	          return s(e) && l(e);
	        }), "parser" === e.name && function (e, t, n) {
	          var r = new Set(e.choices.map(function (e) {
	            return e.value;
	          }));var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var _u2 = _step.value;
	              if (_u2.parsers) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                  var _loop = function _loop() {
	                    var t = _step2.value;
	                    if (!r.has(t)) {
	                      r.add(t);var _o2 = n.find(function (e) {
	                        return e.parsers && e.parsers[t];
	                      });var _a2 = _u2.name;_o2 && _o2.name && (_a2 += " (plugin: ".concat(_o2.name, ")")), e.choices.push({ value: t, description: _a2 });
	                    }
	                  };

	                  for (var _iterator2 = _u2.parsers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    _loop();
	                  }
	                } catch (err) {
	                  _didIteratorError2 = true;
	                  _iteratorError2 = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                      _iterator2.return();
	                    }
	                  } finally {
	                    if (_didIteratorError2) {
	                      throw _iteratorError2;
	                    }
	                  }
	                }
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        }(e, a, t));var n = t.filter(function (t) {
	          return t.defaultOptions && void 0 !== t.defaultOptions[e.name];
	        }).reduce(function (t, n) {
	          return t[n.name] = n.defaultOptions[e.name], t;
	        }, {});return Object.assign({}, e, { pluginDefaults: n });
	      });return { languages: a, options: i };function s(e) {
	        return n || !("since" in e) || e.since && mt.gte(o, e.since);
	      }function l(e) {
	        return r || !("deprecated" in e) || e.deprecated && mt.lt(o, e.deprecated);
	      }
	    } };var Et = /[^\x20-\x7F]/;function Ct(e) {
	    return function (t, n, r) {
	      var u = r && r.backwards;if (!1 === n) return !1;var o = t.length;
	      var a = n;for (; a >= 0 && a < o;) {
	        var _n5 = t.charAt(a);if (e instanceof RegExp) {
	          if (!e.test(_n5)) return a;
	        } else if (!e.includes(_n5)) return a;u ? a-- : a++;
	      }return (-1 === a || a === o) && a;
	    };
	  }var bt = Ct(/\s/),
	      At = Ct(" \t"),
	      vt = Ct(",; \t"),
	      Ft = Ct(/[^\n\r]/);function xt(e, t) {
	    if (!1 === t) return !1;if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) for (var _n6 = t + 2; _n6 < e.length; ++_n6) {
	      if ("*" === e.charAt(_n6) && "/" === e.charAt(_n6 + 1)) return _n6 + 2;
	    }return t;
	  }function St(e, t) {
	    return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? Ft(e, t) : t);
	  }function wt(e, t, n) {
	    var r = n && n.backwards;if (!1 === t) return !1;var u = e.charAt(t);if (r) {
	      if ("\r" === e.charAt(t - 1) && "\n" === u) return t - 2;if ("\n" === u || "\r" === u || "\u2028" === u || "\u2029" === u) return t - 1;
	    } else {
	      if ("\r" === u && "\n" === e.charAt(t + 1)) return t + 2;if ("\n" === u || "\r" === u || "\u2028" === u || "\u2029" === u) return t + 1;
	    }return t;
	  }function Bt(e, t, n) {
	    var r = At(e, (n = n || {}).backwards ? t - 1 : t, n);return r !== wt(e, r, n);
	  }function Tt(e, t) {
	    var n = null,
	        r = t;for (; r !== n;) {
	      n = r, r = vt(e, r), r = xt(e, r), r = At(e, r);
	    }return r = St(e, r), r = wt(e, r), !1 !== r && Bt(e, r);
	  }function kt(e, t) {
	    var n = null,
	        r = t;for (; r !== n;) {
	      n = r, r = At(e, r), r = xt(e, r), r = St(e, r), r = wt(e, r);
	    }return r;
	  }function Nt(e, t, n) {
	    return kt(e, n(t));
	  }function Ot(e, t, n) {
	    var r = 0;for (var _u3 = n = n || 0; _u3 < e.length; ++_u3) {
	      "\t" === e[_u3] ? r = r + t - r % t : r++;
	    }return r;
	  }function Pt(e, t) {
	    var n = e.slice(1, -1),
	        r = { quote: '"', regex: /"/g },
	        u = { quote: "'", regex: /'/g },
	        o = "'" === t ? u : r,
	        a = o === u ? r : u;var i = o.quote;if (n.includes(o.quote) || n.includes(a.quote)) {
	      i = (n.match(o.regex) || []).length > (n.match(a.regex) || []).length ? a.quote : o.quote;
	    }return i;
	  }function _t(e, t, n) {
	    var r = '"' === t ? "'" : '"',
	        u = e.replace(/\\([\S\s])|(["'])/g, function (e, u, o) {
	      return u === r ? u : o === t ? "\\" + o : o || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(u) ? u : "\\" + u);
	    });return t + u + t;
	  }function It(e) {
	    return e && (e.comments && e.comments.length > 0 && e.comments.some(function (e) {
	      return jt(e) && !e.unignore;
	    }) || e.prettierIgnore);
	  }function jt(e) {
	    return "prettier-ignore" === e.value.trim();
	  }function Mt(e, t) {
	    (e.comments || (e.comments = [])).push(t), t.printed = !1, "JSXText" === e.type && (t.printed = !0);
	  }var Lt = { replaceEndOfLineWith: function replaceEndOfLineWith(e, t) {
	      var n = [];var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = e.split("\n")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var _r6 = _step3.value;
	          0 !== n.length && n.push(t), n.push(_r6);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      return n;
	    }, getStringWidth: function getStringWidth(e) {
	      return e ? Et.test(e) ? pe(e) : e.length : 0;
	    }, getMaxContinuousCount: function getMaxContinuousCount(e, t) {
	      var n = e.match(new RegExp("(".concat(fe(t), ")+"), "g"));return null === n ? 0 : n.reduce(function (e, n) {
	        return Math.max(e, n.length / t.length);
	      }, 0);
	    }, getMinNotPresentContinuousCount: function getMinNotPresentContinuousCount(e, t) {
	      var n = e.match(new RegExp("(".concat(fe(t), ")+"), "g"));if (null === n) return 0;var r = new Map();var u = 0;var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;

	      try {
	        for (var _iterator4 = n[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var _e5 = _step4.value;
	          var _n7 = _e5.length / t.length;r.set(_n7, !0), _n7 > u && (u = _n7);
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }

	      for (var _e4 = 1; _e4 < u; _e4++) {
	        if (!r.get(_e4)) return _e4;
	      }return u + 1;
	    }, getParserName: function getParserName(e, t) {
	      var n = yt.getSupportInfo({ plugins: t.plugins }).languages.find(function (t) {
	        return t.name.toLowerCase() === e || t.aliases && t.aliases.includes(e) || t.extensions && t.extensions.some(function (t) {
	          return t === ".".concat(e);
	        });
	      });return n ? n.parsers[0] : null;
	    }, getPenultimate: function getPenultimate(e) {
	      return e[e.length - 2];
	    }, getLast: he, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: kt, getNextNonSpaceNonCommentCharacterIndex: Nt, getNextNonSpaceNonCommentCharacter: function getNextNonSpaceNonCommentCharacter(e, t, n) {
	      return e.charAt(Nt(e, t, n));
	    }, skip: Ct, skipWhitespace: bt, skipSpaces: At, skipToLineEnd: vt, skipEverythingButNewLine: Ft, skipInlineComment: xt, skipTrailingComment: St, skipNewline: wt, isNextLineEmptyAfterIndex: Tt, isNextLineEmpty: function isNextLineEmpty(e, t, n) {
	      return Tt(e, n(t));
	    }, isPreviousLineEmpty: function isPreviousLineEmpty(e, t, n) {
	      var r = n(t) - 1;return r = At(e, r, { backwards: !0 }), r = wt(e, r, { backwards: !0 }), r = At(e, r, { backwards: !0 }), r !== wt(e, r, { backwards: !0 });
	    }, hasNewline: Bt, hasNewlineInRange: function hasNewlineInRange(e, t, n) {
	      for (var _r7 = t; _r7 < n; ++_r7) {
	        if ("\n" === e.charAt(_r7)) return !0;
	      }return !1;
	    }, hasSpaces: function hasSpaces(e, t, n) {
	      return At(e, (n = n || {}).backwards ? t - 1 : t, n) !== t;
	    }, getAlignmentSize: Ot, getIndentSize: function getIndentSize(e, t) {
	      var n = e.lastIndexOf("\n");return -1 === n ? 0 : Ot(e.slice(n + 1).match(/^[\t ]*/)[0], t);
	    }, getPreferredQuote: Pt, printString: function printString(e, t, n) {
	      var r = e.slice(1, -1),
	          u = !r.includes('"') && !r.includes("'"),
	          o = "json" === t.parser ? '"' : t.__isInHtmlAttribute ? "'" : Pt(e, t.singleQuote ? "'" : '"');return n ? u ? o + r + o : e : _t(r, o, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.embeddedInHtml));
	    }, printNumber: function printNumber(e) {
	      return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
	    }, hasIgnoreComment: function hasIgnoreComment(e) {
	      return It(e.getValue());
	    }, hasNodeIgnoreComment: It, isNodeIgnoreComment: jt, makeString: _t, addLeadingComment: function addLeadingComment(e, t) {
	      t.leading = !0, t.trailing = !1, Mt(e, t);
	    }, addDanglingComment: function addDanglingComment(e, t, n) {
	      t.leading = !1, t.trailing = !1, n && (t.marker = n), Mt(e, t);
	    }, addTrailingComment: function addTrailingComment(e, t) {
	      t.leading = !1, t.trailing = !0, Mt(e, t);
	    }, isWithinParentArrayProperty: function isWithinParentArrayProperty(e, t) {
	      var n = e.getValue(),
	          r = e.getParentNode();if (null == r) return !1;if (!Array.isArray(r[t])) return !1;var u = e.getName();return r[t][u] === n;
	    }, isFrontMatterNode: function isFrontMatterNode(e) {
	      return e && "front-matter" === e.type;
	    }, getShebang: function getShebang(e) {
	      if (!e.startsWith("#!")) return "";var t = e.indexOf("\n");return -1 === t ? e : e.slice(0, t);
	    } };var Rt = { guessEndOfLine: function guessEndOfLine(e) {
	      var t = e.indexOf("\r");return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf";
	    }, convertEndOfLineToChars: function convertEndOfLineToChars(e) {
	      switch (e) {case "cr":
	          return "\r";case "crlf":
	          return "\r\n";default:
	          return "\n";}
	    }, countEndOfLineChars: function countEndOfLineChars(e, t) {
	      var n = void 0;if ("\n" === t) n = /\n/g;else if ("\r" === t) n = /\r/g;else {
	        if ("\r\n" !== t) throw new Error('Unexpected "eol" '.concat(JSON.stringify(t), "."));n = /\r\n/g;
	      }var r = e.match(n);return r ? r.length : 0;
	    }, normalizeEndOfLine: function normalizeEndOfLine(e) {
	      return e.replace(/\r\n?/g, "\n");
	    } };var qt = Lt.getStringWidth,
	      Vt = Rt.convertEndOfLineToChars,
	      Wt = oe.concat,
	      $t = oe.fill,
	      Ut = oe.cursor;var zt = void 0;function Jt(e, t) {
	    return Ht(e, { type: "indent" }, t);
	  }function Gt(e, t, n) {
	    if (t === -1 / 0) return e.root || { value: "", length: 0, queue: [] };if (t < 0) return Ht(e, { type: "dedent" }, n);if (!t) return e;if ("root" === t.type) return Object.assign({}, e, { root: e });return Ht(e, { type: "string" == typeof t ? "stringAlign" : "numberAlign", n: t }, n);
	  }function Ht(e, t, n) {
	    var r = "dedent" === t.type ? e.queue.slice(0, -1) : e.queue.concat(t);var u = "",
	        o = 0,
	        a = 0,
	        i = 0;var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = r[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var _e6 = _step5.value;
	        switch (_e6.type) {case "indent":
	            c(), n.useTabs ? s(1) : l(n.tabWidth);break;case "stringAlign":
	            c(), u += _e6.n, o += _e6.n.length;break;case "numberAlign":
	            a += 1, i += _e6.n;break;default:
	            throw new Error("Unexpected type '".concat(_e6.type, "'"));}
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	          _iterator5.return();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }

	    return p(), Object.assign({}, e, { value: u, length: o, queue: r });function s(e) {
	      u += "\t".repeat(e), o += n.tabWidth * e;
	    }function l(e) {
	      u += " ".repeat(e), o += e;
	    }function c() {
	      n.useTabs ? function () {
	        a > 0 && s(a);d();
	      }() : p();
	    }function p() {
	      i > 0 && l(i), d();
	    }function d() {
	      a = 0, i = 0;
	    }
	  }function Xt(e) {
	    if (0 === e.length) return 0;var t = 0;for (; e.length > 0 && "string" == typeof e[e.length - 1] && e[e.length - 1].match(/^[\t ]*$/);) {
	      t += e.pop().length;
	    }if (e.length && "string" == typeof e[e.length - 1]) {
	      var _n8 = e[e.length - 1].replace(/[\t ]*$/, "");t += e[e.length - 1].length - _n8.length, e[e.length - 1] = _n8;
	    }return t;
	  }function Yt(e, t, n, r, u) {
	    var o = t.length;var a = [e],
	        i = [];for (; n >= 0;) {
	      if (0 === a.length) {
	        if (0 === o) return !0;a.push(t[o - 1]), o--;continue;
	      }
	      var _a$pop = a.pop(),
	          _a$pop2 = _slicedToArray(_a$pop, 3),
	          _e7 = _a$pop2[0],
	          _s2 = _a$pop2[1],
	          _l2 = _a$pop2[2];

	      if ("string" == typeof _l2) i.push(_l2), n -= qt(_l2);else switch (_l2.type) {case "concat":
	          for (var _t3 = _l2.parts.length - 1; _t3 >= 0; _t3--) {
	            a.push([_e7, _s2, _l2.parts[_t3]]);
	          }break;case "indent":
	          a.push([Jt(_e7, r), _s2, _l2.contents]);break;case "align":
	          a.push([Gt(_e7, _l2.n, r), _s2, _l2.contents]);break;case "trim":
	          n += Xt(i);break;case "group":
	          if (u && _l2.break) return !1;a.push([_e7, _l2.break ? 1 : _s2, _l2.contents]), _l2.id && (zt[_l2.id] = a[a.length - 1][1]);break;case "fill":
	          for (var _t4 = _l2.parts.length - 1; _t4 >= 0; _t4--) {
	            a.push([_e7, _s2, _l2.parts[_t4]]);
	          }break;case "if-break":
	          {
	            var _t5 = _l2.groupId ? zt[_l2.groupId] : _s2;1 === _t5 && _l2.breakContents && a.push([_e7, _s2, _l2.breakContents]), 2 === _t5 && _l2.flatContents && a.push([_e7, _s2, _l2.flatContents]);break;
	          }case "line":
	          switch (_s2) {case 2:
	              if (!_l2.hard) {
	                _l2.soft || (i.push(" "), n -= 1);break;
	              }return !0;case 1:
	              return !0;}}
	    }return !1;
	  }var Kt = { printDocToString: function printDocToString(e, t) {
	      zt = {};var n = t.printWidth,
	          r = Vt(t.endOfLine);var u = 0;var o = [[{ value: "", length: 0, queue: [] }, 1, e]],
	          a = [];var i = !1,
	          s = [];for (; 0 !== o.length;) {
	        var _o$pop = o.pop(),
	            _o$pop2 = _slicedToArray(_o$pop, 3),
	            _e8 = _o$pop2[0],
	            _l3 = _o$pop2[1],
	            _c2 = _o$pop2[2];

	        if ("string" == typeof _c2) {
	          var _e9 = "\n" !== r && _c2.includes("\n") ? _c2.replace(/\n/g, r) : _c2;a.push(_e9), u += qt(_e9);
	        } else switch (_c2.type) {case "cursor":
	            a.push(Ut.placeholder);break;case "concat":
	            for (var _t6 = _c2.parts.length - 1; _t6 >= 0; _t6--) {
	              o.push([_e8, _l3, _c2.parts[_t6]]);
	            }break;case "indent":
	            o.push([Jt(_e8, t), _l3, _c2.contents]);break;case "align":
	            o.push([Gt(_e8, _c2.n, t), _l3, _c2.contents]);break;case "trim":
	            u -= Xt(a);break;case "group":
	            switch (_l3) {case 2:
	                if (!i) {
	                  o.push([_e8, _c2.break ? 1 : 2, _c2.contents]);break;
	                }case 1:
	                {
	                  i = !1;var _r8 = [_e8, 2, _c2.contents],
	                      _a3 = n - u;if (!_c2.break && Yt(_r8, o, _a3, t)) o.push(_r8);else if (_c2.expandedStates) {
	                    var _n9 = _c2.expandedStates[_c2.expandedStates.length - 1];if (_c2.break) {
	                      o.push([_e8, 1, _n9]);break;
	                    }for (var _r9 = 1; _r9 < _c2.expandedStates.length + 1; _r9++) {
	                      if (_r9 >= _c2.expandedStates.length) {
	                        o.push([_e8, 1, _n9]);break;
	                      }{
	                        var _n10 = [_e8, 2, _c2.expandedStates[_r9]];if (Yt(_n10, o, _a3, t)) {
	                          o.push(_n10);break;
	                        }
	                      }
	                    }
	                  } else o.push([_e8, 1, _c2.contents]);break;
	                }}_c2.id && (zt[_c2.id] = o[o.length - 1][1]);break;case "fill":
	            {
	              var _r10 = n - u,
	                  _a4 = _c2.parts;if (0 === _a4.length) break;
	              var _a5 = _slicedToArray(_a4, 2),
	                  _i2 = _a5[0],
	                  _s3 = _a5[1],
	                  _p2 = [_e8, 2, _i2],
	                  _d2 = [_e8, 1, _i2],
	                  _f2 = Yt(_p2, [], _r10, t, !0);

	              if (1 === _a4.length) {
	                _f2 ? o.push(_p2) : o.push(_d2);break;
	              }var _h2 = [_e8, 2, _s3],
	                  _m2 = [_e8, 1, _s3];if (2 === _a4.length) {
	                _f2 ? (o.push(_h2), o.push(_p2)) : (o.push(_m2), o.push(_d2));break;
	              }_a4.splice(0, 2);var _g2 = [_e8, _l3, $t(_a4)],
	                  _D2 = _a4[0];Yt([_e8, 2, Wt([_i2, _s3, _D2])], [], _r10, t, !0) ? (o.push(_g2), o.push(_h2), o.push(_p2)) : _f2 ? (o.push(_g2), o.push(_m2), o.push(_p2)) : (o.push(_g2), o.push(_m2), o.push(_d2));break;
	            }case "if-break":
	            {
	              var _t7 = _c2.groupId ? zt[_c2.groupId] : _l3;1 === _t7 && _c2.breakContents && o.push([_e8, _l3, _c2.breakContents]), 2 === _t7 && _c2.flatContents && o.push([_e8, _l3, _c2.flatContents]);break;
	            }case "line-suffix":
	            s.push([_e8, _l3, _c2.contents]);break;case "line-suffix-boundary":
	            s.length > 0 && o.push([_e8, _l3, { type: "line", hard: !0 }]);break;case "line":
	            switch (_l3) {case 2:
	                if (!_c2.hard) {
	                  _c2.soft || (a.push(" "), u += 1);break;
	                }i = !0;case 1:
	                if (s.length) {
	                  o.push([_e8, _l3, _c2]), o.push.apply(o, _toConsumableArray(s.reverse())), s = [];break;
	                }_c2.literal ? _e8.root ? (a.push(r, _e8.root.value), u = _e8.root.length) : (a.push(r), u = 0) : (u -= Xt(a), a.push(r + _e8.value), u = _e8.length);}}
	      }var l = a.indexOf(Ut.placeholder);if (-1 !== l) {
	        var _e10 = a.indexOf(Ut.placeholder, l + 1),
	            _t8 = a.slice(0, l).join(""),
	            _n11 = a.slice(l + 1, _e10).join("");return { formatted: _t8 + _n11 + a.slice(_e10 + 1).join(""), cursorNodeStart: _t8.length, cursorNodeText: _n11 };
	      }return { formatted: a.join("") };
	    } };var Qt = oe.literalline,
	      Zt = oe.concat,
	      en = {};
	  function tn(e, t, n, r) {
	    var u = [e];for (; 0 !== u.length;) {
	      var _e11 = u.pop();if (_e11 !== en) {
	        if (n && u.push(_e11, en), !t || !1 !== t(_e11)) if ("concat" === _e11.type || "fill" === _e11.type) for (var _t9 = _e11.parts.length - 1; _t9 >= 0; --_t9) {
	          u.push(_e11.parts[_t9]);
	        } else if ("if-break" === _e11.type) _e11.flatContents && u.push(_e11.flatContents), _e11.breakContents && u.push(_e11.breakContents);else if ("group" === _e11.type && _e11.expandedStates) {
	          if (r) for (var _t10 = _e11.expandedStates.length - 1; _t10 >= 0; --_t10) {
	            u.push(_e11.expandedStates[_t10]);
	          } else u.push(_e11.contents);
	        } else _e11.contents && u.push(_e11.contents);
	      } else n(u.pop());
	    }
	  }function nn(e, t) {
	    if ("concat" === e.type || "fill" === e.type) {
	      var _n12 = e.parts.map(function (e) {
	        return nn(e, t);
	      });return t(Object.assign({}, e, { parts: _n12 }));
	    }if ("if-break" === e.type) {
	      var _n13 = e.breakContents && nn(e.breakContents, t),
	          _r11 = e.flatContents && nn(e.flatContents, t);return t(Object.assign({}, e, { breakContents: _n13, flatContents: _r11 }));
	    }if (e.contents) {
	      var _n14 = nn(e.contents, t);return t(Object.assign({}, e, { contents: _n14 }));
	    }return t(e);
	  }function rn(e, t, n) {
	    var r = n,
	        u = !1;return tn(e, function (e) {
	      var n = t(e);if (void 0 !== n && (u = !0, r = n), u) return !1;
	    }), r;
	  }function un(e) {
	    return "string" != typeof e && ("line" === e.type || void 0);
	  }function on(e) {
	    return !("group" !== e.type || !e.break) || !("line" !== e.type || !e.hard) || "break-parent" === e.type || void 0;
	  }function an(e) {
	    if (e.length > 0) {
	      var _t11 = e[e.length - 1];_t11.expandedStates || (_t11.break = !0);
	    }return null;
	  }function sn(e) {
	    return "line" !== e.type || e.hard ? "if-break" === e.type ? e.flatContents || "" : e : e.soft ? "" : " ";
	  }function ln(e) {
	    var t = [],
	        n = e.filter(Boolean);for (; 0 !== n.length;) {
	      var _e12 = n.shift();_e12 && ("concat" !== _e12.type ? 0 === t.length || "string" != typeof t[t.length - 1] || "string" != typeof _e12 ? t.push(_e12) : t[t.length - 1] += _e12 : n.unshift.apply(n, _toConsumableArray(_e12.parts)));
	    }return t;
	  }function cn(e) {
	    if ("concat" === e.type) {
	      var _t12 = [];for (var _n15 = 0; _n15 < e.parts.length; ++_n15) {
	        var _r12 = e.parts[_n15];if ("string" != typeof _r12 && "concat" === _r12.type) _t12.push.apply(_t12, _toConsumableArray(cn(_r12).parts));else {
	          var _e13 = cn(_r12);"" !== _e13 && _t12.push(_e13);
	        }
	      }return Object.assign({}, e, { parts: _t12 });
	    }return "if-break" === e.type ? Object.assign({}, e, { breakContents: null != e.breakContents ? cn(e.breakContents) : null, flatContents: null != e.flatContents ? cn(e.flatContents) : null }) : "group" === e.type ? Object.assign({}, e, { contents: cn(e.contents), expandedStates: e.expandedStates ? e.expandedStates.map(cn) : e.expandedStates }) : e.contents ? Object.assign({}, e, { contents: cn(e.contents) }) : e;
	  }function pn(e) {
	    if ("string" == typeof e) return JSON.stringify(e);if ("line" === e.type) return e.literal ? "literalline" : e.hard ? "hardline" : e.soft ? "softline" : "line";if ("break-parent" === e.type) return "breakParent";if ("trim" === e.type) return "trim";if ("concat" === e.type) return "[" + e.parts.map(pn).join(", ") + "]";if ("indent" === e.type) return "indent(" + pn(e.contents) + ")";if ("align" === e.type) return e.n === -1 / 0 ? "dedentToRoot(" + pn(e.contents) + ")" : e.n < 0 ? "dedent(" + pn(e.contents) + ")" : "root" === e.n.type ? "markAsRoot(" + pn(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + pn(e.contents) + ")";if ("if-break" === e.type) return "ifBreak(" + pn(e.breakContents) + (e.flatContents ? ", " + pn(e.flatContents) : "") + ")";if ("group" === e.type) return e.expandedStates ? "conditionalGroup([" + e.expandedStates.map(pn).join(",") + "])" : (e.break ? "wrappedGroup" : "group") + "(" + pn(e.contents) + ")";if ("fill" === e.type) return "fill(" + e.parts.map(pn).join(", ") + ")";if ("line-suffix" === e.type) return "lineSuffix(" + pn(e.contents) + ")";if ("line-suffix-boundary" === e.type) return "lineSuffixBoundary";throw new Error("Unknown doc type " + e.type);
	  }var dn = { builders: oe, printer: Kt, utils: { isEmpty: function isEmpty(e) {
	        return "string" == typeof e && 0 === e.length;
	      }, willBreak: function willBreak(e) {
	        return rn(e, on, !1);
	      }, isLineNext: function isLineNext(e) {
	        return rn(e, un, !1);
	      }, traverseDoc: tn, findInDoc: rn, mapDoc: nn, propagateBreaks: function propagateBreaks(e) {
	        var t = new Set(),
	            n = [];tn(e, function (e) {
	          if ("break-parent" === e.type && an(n), "group" === e.type) {
	            if (n.push(e), t.has(e)) return !1;t.add(e);
	          }
	        }, function (e) {
	          if ("group" === e.type) {
	            n.pop().break && an(n);
	          }
	        }, !0);
	      }, removeLines: function removeLines(e) {
	        return nn(e, sn);
	      }, stripTrailingHardline: function e(t) {
	        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
	        if ("concat" === t.type && 0 !== t.parts.length) {
	          var _r13 = n ? function (e) {
	            var t = void 0,
	                n = e.parts;for (var _r14 = e.parts.length; _r14 > 0 && !t; _r14--) {
	              t = n[_r14 - 1];
	            }return "group" === t.type && (n = t.contents.parts), n;
	          }(t) : t.parts,
	              _u4 = _r13[_r13.length - 1];if ("concat" === _u4.type) return 2 === _u4.parts.length && _u4.parts[0].hard && "break-parent" === _u4.parts[1].type ? { type: "concat", parts: _r13.slice(0, -1) } : { type: "concat", parts: t.parts.slice(0, -1).concat(e(_u4)) };
	        }return t;
	      }, normalizeParts: ln, normalizeDoc: function normalizeDoc(e) {
	        return nn(e, function (e) {
	          return e.parts ? Object.assign({}, e, { parts: ln(e.parts) }) : e;
	        });
	      }, replaceNewlinesWithLiterallines: function replaceNewlinesWithLiterallines(e) {
	        return nn(e, function (e) {
	          return "string" == typeof e && e.includes("\n") ? Zt(e.split(/(\n)/g).map(function (e, t) {
	            return t % 2 == 0 ? e : Qt;
	          })) : e;
	        });
	      } }, debug: { printDocToDebug: function printDocToDebug(e) {
	        return pn(cn(e));
	      } } },
	      fn = Object.freeze({ __proto__: null, default: {} });var hn = /[/\\]/;function mn(e) {
	    return e.split(hn).pop();
	  }var gn = Object.freeze({ __proto__: null, extname: function extname(e) {
	      var t = mn(e),
	          n = t.lastIndexOf(".");return -1 === n ? "" : t.slice(n);
	    }, basename: mn, isAbsolute: function isAbsolute() {
	      return !0;
	    } }),
	      Dn = [],
	      yn = [],
	      En = "undefined" != typeof Uint8Array ? Uint8Array : Array,
	      Cn = !1;function bn() {
	    Cn = !0;for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) {
	      Dn[t] = e[t], yn[e.charCodeAt(t)] = t;
	    }yn["-".charCodeAt(0)] = 62, yn["_".charCodeAt(0)] = 63;
	  }function An(e, t, n) {
	    for (var r, u, o = [], a = t; a < n; a += 3) {
	      r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(Dn[(u = r) >> 18 & 63] + Dn[u >> 12 & 63] + Dn[u >> 6 & 63] + Dn[63 & u]);
	    }return o.join("");
	  }function vn(e) {
	    var t;Cn || bn();for (var n = e.length, r = n % 3, u = "", o = [], a = 0, i = n - r; a < i; a += 16383) {
	      o.push(An(e, a, a + 16383 > i ? i : a + 16383));
	    }return 1 === r ? (t = e[n - 1], u += Dn[t >> 2], u += Dn[t << 4 & 63], u += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], u += Dn[t >> 10], u += Dn[t >> 4 & 63], u += Dn[t << 2 & 63], u += "="), o.push(u), o.join("");
	  }function Fn(e, t, n, r, u) {
	    var o,
	        a,
	        i = 8 * u - r - 1,
	        s = (1 << i) - 1,
	        l = s >> 1,
	        c = -7,
	        p = n ? u - 1 : 0,
	        d = n ? -1 : 1,
	        f = e[t + p];for (p += d, o = f & (1 << -c) - 1, f >>= -c, c += i; c > 0; o = 256 * o + e[t + p], p += d, c -= 8) {}for (a = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; a = 256 * a + e[t + p], p += d, c -= 8) {}if (0 === o) o = 1 - l;else {
	      if (o === s) return a ? NaN : 1 / 0 * (f ? -1 : 1);a += Math.pow(2, r), o -= l;
	    }return (f ? -1 : 1) * a * Math.pow(2, o - r);
	  }function xn(e, t, n, r, u, o) {
	    var a,
	        i,
	        s,
	        l = 8 * o - u - 1,
	        c = (1 << l) - 1,
	        p = c >> 1,
	        d = 23 === u ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
	        f = r ? 0 : o - 1,
	        h = r ? 1 : -1,
	        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + p >= 1 ? d / s : d * Math.pow(2, 1 - p)) * s >= 2 && (a++, s /= 2), a + p >= c ? (i = 0, a = c) : a + p >= 1 ? (i = (t * s - 1) * Math.pow(2, u), a += p) : (i = t * Math.pow(2, p - 1) * Math.pow(2, u), a = 0)); u >= 8; e[n + f] = 255 & i, f += h, i /= 256, u -= 8) {}for (a = a << u | i, l += u; l > 0; e[n + f] = 255 & a, f += h, a /= 256, l -= 8) {}e[n + f - h] |= 128 * m;
	  }var Sn = {}.toString,
	      wn = Array.isArray || function (e) {
	    return "[object Array]" == Sn.call(e);
	  };function Bn() {
	    return kn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
	  }function Tn(e, t) {
	    if (Bn() < t) throw new RangeError("Invalid typed array length");return kn.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = kn.prototype : (null === e && (e = new kn(t)), e.length = t), e;
	  }function kn(e, t, n) {
	    if (!(kn.TYPED_ARRAY_SUPPORT || this instanceof kn)) return new kn(e, t, n);if ("number" == typeof e) {
	      if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");return Pn(this, e);
	    }return Nn(this, e, t, n);
	  }function Nn(e, t, n, r) {
	    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
	      if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);kn.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = kn.prototype : e = _n(e, t);return e;
	    }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
	      "string" == typeof n && "" !== n || (n = "utf8");if (!kn.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var r = 0 | Mn(t, n),
	          u = (e = Tn(e, r)).write(t, n);u !== r && (e = e.slice(0, u));return e;
	    }(e, t, n) : function (e, t) {
	      if (jn(t)) {
	        var n = 0 | In(t.length);return 0 === (e = Tn(e, n)).length || t.copy(e, 0, 0, n), e;
	      }if (t) {
	        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? Tn(e, 0) : _n(e, t);if ("Buffer" === t.type && wn(t.data)) return _n(e, t.data);
	      }var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
	    }(e, t);
	  }function On(e) {
	    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');if (e < 0) throw new RangeError('"size" argument must not be negative');
	  }function Pn(e, t) {
	    if (On(t), e = Tn(e, t < 0 ? 0 : 0 | In(t)), !kn.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) {
	      e[n] = 0;
	    }return e;
	  }function _n(e, t) {
	    var n = t.length < 0 ? 0 : 0 | In(t.length);e = Tn(e, n);for (var r = 0; r < n; r += 1) {
	      e[r] = 255 & t[r];
	    }return e;
	  }function In(e) {
	    if (e >= Bn()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Bn().toString(16) + " bytes");return 0 | e;
	  }function jn(e) {
	    return !(null == e || !e._isBuffer);
	  }function Mn(e, t) {
	    if (jn(e)) return e.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;"string" != typeof e && (e = "" + e);var n = e.length;if (0 === n) return 0;for (var r = !1;;) {
	      switch (t) {case "ascii":case "latin1":case "binary":
	          return n;case "utf8":case "utf-8":case void 0:
	          return lr(e).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	          return 2 * n;case "hex":
	          return n >>> 1;case "base64":
	          return cr(e).length;default:
	          if (r) return lr(e).length;t = ("" + t).toLowerCase(), r = !0;}
	    }
	  }function Ln(e, t, n) {
	    var r = !1;if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";if ((n >>>= 0) <= (t >>>= 0)) return "";for (e || (e = "utf8");;) {
	      switch (e) {case "hex":
	          return Qn(this, t, n);case "utf8":case "utf-8":
	          return Xn(this, t, n);case "ascii":
	          return Yn(this, t, n);case "latin1":case "binary":
	          return Kn(this, t, n);case "base64":
	          return Hn(this, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	          return Zn(this, t, n);default:
	          if (r) throw new TypeError("Unknown encoding: " + e);e = (e + "").toLowerCase(), r = !0;}
	    }
	  }function Rn(e, t, n) {
	    var r = e[t];e[t] = e[n], e[n] = r;
	  }function qn(e, t, n, r, u) {
	    if (0 === e.length) return -1;if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = u ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
	      if (u) return -1;n = e.length - 1;
	    } else if (n < 0) {
	      if (!u) return -1;n = 0;
	    }if ("string" == typeof t && (t = kn.from(t, r)), jn(t)) return 0 === t.length ? -1 : Vn(e, t, n, r, u);if ("number" == typeof t) return t &= 255, kn.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? u ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Vn(e, [t], n, r, u);throw new TypeError("val must be string, number or Buffer");
	  }function Vn(e, t, n, r, u) {
	    var o,
	        a = 1,
	        i = e.length,
	        s = t.length;if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
	      if (e.length < 2 || t.length < 2) return -1;a = 2, i /= 2, s /= 2, n /= 2;
	    }function l(e, t) {
	      return 1 === a ? e[t] : e.readUInt16BE(t * a);
	    }if (u) {
	      var c = -1;for (o = n; o < i; o++) {
	        if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
	          if (-1 === c && (c = o), o - c + 1 === s) return c * a;
	        } else -1 !== c && (o -= o - c), c = -1;
	      }
	    } else for (n + s > i && (n = i - s), o = n; o >= 0; o--) {
	      for (var p = !0, d = 0; d < s; d++) {
	        if (l(e, o + d) !== l(t, d)) {
	          p = !1;break;
	        }
	      }if (p) return o;
	    }return -1;
	  }function Wn(e, t, n, r) {
	    n = Number(n) || 0;var u = e.length - n;r ? (r = Number(r)) > u && (r = u) : r = u;var o = t.length;if (o % 2 != 0) throw new TypeError("Invalid hex string");r > o / 2 && (r = o / 2);for (var a = 0; a < r; ++a) {
	      var i = parseInt(t.substr(2 * a, 2), 16);if (isNaN(i)) return a;e[n + a] = i;
	    }return a;
	  }function $n(e, t, n, r) {
	    return pr(lr(t, e.length - n), e, n, r);
	  }function Un(e, t, n, r) {
	    return pr(function (e) {
	      for (var t = [], n = 0; n < e.length; ++n) {
	        t.push(255 & e.charCodeAt(n));
	      }return t;
	    }(t), e, n, r);
	  }function zn(e, t, n, r) {
	    return Un(e, t, n, r);
	  }function Jn(e, t, n, r) {
	    return pr(cr(t), e, n, r);
	  }function Gn(e, t, n, r) {
	    return pr(function (e, t) {
	      for (var n, r, u, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
	        r = (n = e.charCodeAt(a)) >> 8, u = n % 256, o.push(u), o.push(r);
	      }return o;
	    }(t, e.length - n), e, n, r);
	  }function Hn(e, t, n) {
	    return 0 === t && n === e.length ? vn(e) : vn(e.slice(t, n));
	  }function Xn(e, t, n) {
	    n = Math.min(e.length, n);for (var r = [], u = t; u < n;) {
	      var o,
	          a,
	          i,
	          s,
	          l = e[u],
	          c = null,
	          p = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;if (u + p <= n) switch (p) {case 1:
	          l < 128 && (c = l);break;case 2:
	          128 == (192 & (o = e[u + 1])) && (s = (31 & l) << 6 | 63 & o) > 127 && (c = s);break;case 3:
	          o = e[u + 1], a = e[u + 2], 128 == (192 & o) && 128 == (192 & a) && (s = (15 & l) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (c = s);break;case 4:
	          o = e[u + 1], a = e[u + 2], i = e[u + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & i) && (s = (15 & l) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & i) > 65535 && s < 1114112 && (c = s);}null === c ? (c = 65533, p = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), u += p;
	    }return function (e) {
	      var t = e.length;if (t <= 4096) return String.fromCharCode.apply(String, e);var n = "",
	          r = 0;for (; r < t;) {
	        n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
	      }return n;
	    }(r);
	  }kn.TYPED_ARRAY_SUPPORT = void 0 === me.TYPED_ARRAY_SUPPORT || me.TYPED_ARRAY_SUPPORT, kn.poolSize = 8192, kn._augment = function (e) {
	    return e.__proto__ = kn.prototype, e;
	  }, kn.from = function (e, t, n) {
	    return Nn(null, e, t, n);
	  }, kn.TYPED_ARRAY_SUPPORT && (kn.prototype.__proto__ = Uint8Array.prototype, kn.__proto__ = Uint8Array), kn.alloc = function (e, t, n) {
	    return function (e, t, n, r) {
	      return On(t), t <= 0 ? Tn(e, t) : void 0 !== n ? "string" == typeof r ? Tn(e, t).fill(n, r) : Tn(e, t).fill(n) : Tn(e, t);
	    }(null, e, t, n);
	  }, kn.allocUnsafe = function (e) {
	    return Pn(null, e);
	  }, kn.allocUnsafeSlow = function (e) {
	    return Pn(null, e);
	  }, kn.isBuffer = function (e) {
	    return null != e && (!!e._isBuffer || dr(e) || function (e) {
	      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && dr(e.slice(0, 0));
	    }(e));
	  }, kn.compare = function (e, t) {
	    if (!jn(e) || !jn(t)) throw new TypeError("Arguments must be Buffers");if (e === t) return 0;for (var n = e.length, r = t.length, u = 0, o = Math.min(n, r); u < o; ++u) {
	      if (e[u] !== t[u]) {
	        n = e[u], r = t[u];break;
	      }
	    }return n < r ? -1 : r < n ? 1 : 0;
	  }, kn.isEncoding = function (e) {
	    switch (String(e).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	        return !0;default:
	        return !1;}
	  }, kn.concat = function (e, t) {
	    if (!wn(e)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === e.length) return kn.alloc(0);var n;if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) {
	      t += e[n].length;
	    }var r = kn.allocUnsafe(t),
	        u = 0;for (n = 0; n < e.length; ++n) {
	      var o = e[n];if (!jn(o)) throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r, u), u += o.length;
	    }return r;
	  }, kn.byteLength = Mn, kn.prototype._isBuffer = !0, kn.prototype.swap16 = function () {
	    var e = this.length;if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var t = 0; t < e; t += 2) {
	      Rn(this, t, t + 1);
	    }return this;
	  }, kn.prototype.swap32 = function () {
	    var e = this.length;if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var t = 0; t < e; t += 4) {
	      Rn(this, t, t + 3), Rn(this, t + 1, t + 2);
	    }return this;
	  }, kn.prototype.swap64 = function () {
	    var e = this.length;if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var t = 0; t < e; t += 8) {
	      Rn(this, t, t + 7), Rn(this, t + 1, t + 6), Rn(this, t + 2, t + 5), Rn(this, t + 3, t + 4);
	    }return this;
	  }, kn.prototype.toString = function () {
	    var e = 0 | this.length;return 0 === e ? "" : 0 === arguments.length ? Xn(this, 0, e) : Ln.apply(this, arguments);
	  }, kn.prototype.equals = function (e) {
	    if (!jn(e)) throw new TypeError("Argument must be a Buffer");return this === e || 0 === kn.compare(this, e);
	  }, kn.prototype.inspect = function () {
	    var e = "";return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
	  }, kn.prototype.compare = function (e, t, n, r, u) {
	    if (!jn(e)) throw new TypeError("Argument must be a Buffer");if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === u && (u = this.length), t < 0 || n > e.length || r < 0 || u > this.length) throw new RangeError("out of range index");if (r >= u && t >= n) return 0;if (r >= u) return -1;if (t >= n) return 1;if (this === e) return 0;for (var o = (u >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), i = Math.min(o, a), s = this.slice(r, u), l = e.slice(t, n), c = 0; c < i; ++c) {
	      if (s[c] !== l[c]) {
	        o = s[c], a = l[c];break;
	      }
	    }return o < a ? -1 : a < o ? 1 : 0;
	  }, kn.prototype.includes = function (e, t, n) {
	    return -1 !== this.indexOf(e, t, n);
	  }, kn.prototype.indexOf = function (e, t, n) {
	    return qn(this, e, t, n, !0);
	  }, kn.prototype.lastIndexOf = function (e, t, n) {
	    return qn(this, e, t, n, !1);
	  }, kn.prototype.write = function (e, t, n, r) {
	    if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
	      if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
	    }var u = this.length - t;if ((void 0 === n || n > u) && (n = u), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var o = !1;;) {
	      switch (r) {case "hex":
	          return Wn(this, e, t, n);case "utf8":case "utf-8":
	          return $n(this, e, t, n);case "ascii":
	          return Un(this, e, t, n);case "latin1":case "binary":
	          return zn(this, e, t, n);case "base64":
	          return Jn(this, e, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	          return Gn(this, e, t, n);default:
	          if (o) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), o = !0;}
	    }
	  }, kn.prototype.toJSON = function () {
	    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
	  };function Yn(e, t, n) {
	    var r = "";n = Math.min(e.length, n);for (var u = t; u < n; ++u) {
	      r += String.fromCharCode(127 & e[u]);
	    }return r;
	  }function Kn(e, t, n) {
	    var r = "";n = Math.min(e.length, n);for (var u = t; u < n; ++u) {
	      r += String.fromCharCode(e[u]);
	    }return r;
	  }function Qn(e, t, n) {
	    var r = e.length;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);for (var u = "", o = t; o < n; ++o) {
	      u += sr(e[o]);
	    }return u;
	  }function Zn(e, t, n) {
	    for (var r = e.slice(t, n), u = "", o = 0; o < r.length; o += 2) {
	      u += String.fromCharCode(r[o] + 256 * r[o + 1]);
	    }return u;
	  }function er(e, t, n) {
	    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
	  }function tr(e, t, n, r, u, o) {
	    if (!jn(e)) throw new TypeError('"buffer" argument must be a Buffer instance');if (t > u || t < o) throw new RangeError('"value" argument is out of bounds');if (n + r > e.length) throw new RangeError("Index out of range");
	  }function nr(e, t, n, r) {
	    t < 0 && (t = 65535 + t + 1);for (var u = 0, o = Math.min(e.length - n, 2); u < o; ++u) {
	      e[n + u] = (t & 255 << 8 * (r ? u : 1 - u)) >>> 8 * (r ? u : 1 - u);
	    }
	  }function rr(e, t, n, r) {
	    t < 0 && (t = 4294967295 + t + 1);for (var u = 0, o = Math.min(e.length - n, 4); u < o; ++u) {
	      e[n + u] = t >>> 8 * (r ? u : 3 - u) & 255;
	    }
	  }function ur(e, t, n, r, u, o) {
	    if (n + r > e.length) throw new RangeError("Index out of range");if (n < 0) throw new RangeError("Index out of range");
	  }function or(e, t, n, r, u) {
	    return u || ur(e, 0, n, 4), xn(e, t, n, r, 23, 4), n + 4;
	  }function ar(e, t, n, r, u) {
	    return u || ur(e, 0, n, 8), xn(e, t, n, r, 52, 8), n + 8;
	  }kn.prototype.slice = function (e, t) {
	    var n,
	        r = this.length;if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), kn.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = kn.prototype;else {
	      var u = t - e;n = new kn(u, void 0);for (var o = 0; o < u; ++o) {
	        n[o] = this[o + e];
	      }
	    }return n;
	  }, kn.prototype.readUIntLE = function (e, t, n) {
	    e |= 0, t |= 0, n || er(e, t, this.length);for (var r = this[e], u = 1, o = 0; ++o < t && (u *= 256);) {
	      r += this[e + o] * u;
	    }return r;
	  }, kn.prototype.readUIntBE = function (e, t, n) {
	    e |= 0, t |= 0, n || er(e, t, this.length);for (var r = this[e + --t], u = 1; t > 0 && (u *= 256);) {
	      r += this[e + --t] * u;
	    }return r;
	  }, kn.prototype.readUInt8 = function (e, t) {
	    return t || er(e, 1, this.length), this[e];
	  }, kn.prototype.readUInt16LE = function (e, t) {
	    return t || er(e, 2, this.length), this[e] | this[e + 1] << 8;
	  }, kn.prototype.readUInt16BE = function (e, t) {
	    return t || er(e, 2, this.length), this[e] << 8 | this[e + 1];
	  }, kn.prototype.readUInt32LE = function (e, t) {
	    return t || er(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
	  }, kn.prototype.readUInt32BE = function (e, t) {
	    return t || er(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	  }, kn.prototype.readIntLE = function (e, t, n) {
	    e |= 0, t |= 0, n || er(e, t, this.length);for (var r = this[e], u = 1, o = 0; ++o < t && (u *= 256);) {
	      r += this[e + o] * u;
	    }return r >= (u *= 128) && (r -= Math.pow(2, 8 * t)), r;
	  }, kn.prototype.readIntBE = function (e, t, n) {
	    e |= 0, t |= 0, n || er(e, t, this.length);for (var r = t, u = 1, o = this[e + --r]; r > 0 && (u *= 256);) {
	      o += this[e + --r] * u;
	    }return o >= (u *= 128) && (o -= Math.pow(2, 8 * t)), o;
	  }, kn.prototype.readInt8 = function (e, t) {
	    return t || er(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
	  }, kn.prototype.readInt16LE = function (e, t) {
	    t || er(e, 2, this.length);var n = this[e] | this[e + 1] << 8;return 32768 & n ? 4294901760 | n : n;
	  }, kn.prototype.readInt16BE = function (e, t) {
	    t || er(e, 2, this.length);var n = this[e + 1] | this[e] << 8;return 32768 & n ? 4294901760 | n : n;
	  }, kn.prototype.readInt32LE = function (e, t) {
	    return t || er(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	  }, kn.prototype.readInt32BE = function (e, t) {
	    return t || er(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	  }, kn.prototype.readFloatLE = function (e, t) {
	    return t || er(e, 4, this.length), Fn(this, e, !0, 23, 4);
	  }, kn.prototype.readFloatBE = function (e, t) {
	    return t || er(e, 4, this.length), Fn(this, e, !1, 23, 4);
	  }, kn.prototype.readDoubleLE = function (e, t) {
	    return t || er(e, 8, this.length), Fn(this, e, !0, 52, 8);
	  }, kn.prototype.readDoubleBE = function (e, t) {
	    return t || er(e, 8, this.length), Fn(this, e, !1, 52, 8);
	  }, kn.prototype.writeUIntLE = function (e, t, n, r) {
	    (e = +e, t |= 0, n |= 0, r) || tr(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);var u = 1,
	        o = 0;for (this[t] = 255 & e; ++o < n && (u *= 256);) {
	      this[t + o] = e / u & 255;
	    }return t + n;
	  }, kn.prototype.writeUIntBE = function (e, t, n, r) {
	    (e = +e, t |= 0, n |= 0, r) || tr(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);var u = n - 1,
	        o = 1;for (this[t + u] = 255 & e; --u >= 0 && (o *= 256);) {
	      this[t + u] = e / o & 255;
	    }return t + n;
	  }, kn.prototype.writeUInt8 = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 1, 255, 0), kn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
	  }, kn.prototype.writeUInt16LE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 2, 65535, 0), kn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : nr(this, e, t, !0), t + 2;
	  }, kn.prototype.writeUInt16BE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 2, 65535, 0), kn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : nr(this, e, t, !1), t + 2;
	  }, kn.prototype.writeUInt32LE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 4, 4294967295, 0), kn.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : rr(this, e, t, !0), t + 4;
	  }, kn.prototype.writeUInt32BE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 4, 4294967295, 0), kn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : rr(this, e, t, !1), t + 4;
	  }, kn.prototype.writeIntLE = function (e, t, n, r) {
	    if (e = +e, t |= 0, !r) {
	      var u = Math.pow(2, 8 * n - 1);tr(this, e, t, n, u - 1, -u);
	    }var o = 0,
	        a = 1,
	        i = 0;for (this[t] = 255 & e; ++o < n && (a *= 256);) {
	      e < 0 && 0 === i && 0 !== this[t + o - 1] && (i = 1), this[t + o] = (e / a >> 0) - i & 255;
	    }return t + n;
	  }, kn.prototype.writeIntBE = function (e, t, n, r) {
	    if (e = +e, t |= 0, !r) {
	      var u = Math.pow(2, 8 * n - 1);tr(this, e, t, n, u - 1, -u);
	    }var o = n - 1,
	        a = 1,
	        i = 0;for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
	      e < 0 && 0 === i && 0 !== this[t + o + 1] && (i = 1), this[t + o] = (e / a >> 0) - i & 255;
	    }return t + n;
	  }, kn.prototype.writeInt8 = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 1, 127, -128), kn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
	  }, kn.prototype.writeInt16LE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 2, 32767, -32768), kn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : nr(this, e, t, !0), t + 2;
	  }, kn.prototype.writeInt16BE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 2, 32767, -32768), kn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : nr(this, e, t, !1), t + 2;
	  }, kn.prototype.writeInt32LE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 4, 2147483647, -2147483648), kn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : rr(this, e, t, !0), t + 4;
	  }, kn.prototype.writeInt32BE = function (e, t, n) {
	    return e = +e, t |= 0, n || tr(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), kn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : rr(this, e, t, !1), t + 4;
	  }, kn.prototype.writeFloatLE = function (e, t, n) {
	    return or(this, e, t, !0, n);
	  }, kn.prototype.writeFloatBE = function (e, t, n) {
	    return or(this, e, t, !1, n);
	  }, kn.prototype.writeDoubleLE = function (e, t, n) {
	    return ar(this, e, t, !0, n);
	  }, kn.prototype.writeDoubleBE = function (e, t, n) {
	    return ar(this, e, t, !1, n);
	  }, kn.prototype.copy = function (e, t, n, r) {
	    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;if (0 === e.length || 0 === this.length) return 0;if (t < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (r < 0) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);var u,
	        o = r - n;if (this === e && n < t && t < r) for (u = o - 1; u >= 0; --u) {
	      e[u + t] = this[u + n];
	    } else if (o < 1e3 || !kn.TYPED_ARRAY_SUPPORT) for (u = 0; u < o; ++u) {
	      e[u + t] = this[u + n];
	    } else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);return o;
	  }, kn.prototype.fill = function (e, t, n, r) {
	    if ("string" == typeof e) {
	      if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
	        var u = e.charCodeAt(0);u < 256 && (e = u);
	      }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !kn.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
	    } else "number" == typeof e && (e &= 255);if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");if (n <= t) return this;var o;if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) {
	      this[o] = e;
	    } else {
	      var a = jn(e) ? e : lr(new kn(e, r).toString()),
	          i = a.length;for (o = 0; o < n - t; ++o) {
	        this[o + t] = a[o % i];
	      }
	    }return this;
	  };var ir = /[^+\/0-9A-Za-z-_]/g;function sr(e) {
	    return e < 16 ? "0" + e.toString(16) : e.toString(16);
	  }function lr(e, t) {
	    var n;t = t || 1 / 0;for (var r = e.length, u = null, o = [], a = 0; a < r; ++a) {
	      if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
	        if (!u) {
	          if (n > 56319) {
	            (t -= 3) > -1 && o.push(239, 191, 189);continue;
	          }if (a + 1 === r) {
	            (t -= 3) > -1 && o.push(239, 191, 189);continue;
	          }u = n;continue;
	        }if (n < 56320) {
	          (t -= 3) > -1 && o.push(239, 191, 189), u = n;continue;
	        }n = 65536 + (u - 55296 << 10 | n - 56320);
	      } else u && (t -= 3) > -1 && o.push(239, 191, 189);if (u = null, n < 128) {
	        if ((t -= 1) < 0) break;o.push(n);
	      } else if (n < 2048) {
	        if ((t -= 2) < 0) break;o.push(n >> 6 | 192, 63 & n | 128);
	      } else if (n < 65536) {
	        if ((t -= 3) < 0) break;o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
	      } else {
	        if (!(n < 1114112)) throw new Error("Invalid code point");if ((t -= 4) < 0) break;o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
	      }
	    }return o;
	  }function cr(e) {
	    return function (e) {
	      var t, n, r, u, o, a;Cn || bn();var i = e.length;if (i % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");o = "=" === e[i - 2] ? 2 : "=" === e[i - 1] ? 1 : 0, a = new En(3 * i / 4 - o), r = o > 0 ? i - 4 : i;var s = 0;for (t = 0, n = 0; t < r; t += 4, n += 3) {
	        u = yn[e.charCodeAt(t)] << 18 | yn[e.charCodeAt(t + 1)] << 12 | yn[e.charCodeAt(t + 2)] << 6 | yn[e.charCodeAt(t + 3)], a[s++] = u >> 16 & 255, a[s++] = u >> 8 & 255, a[s++] = 255 & u;
	      }return 2 === o ? (u = yn[e.charCodeAt(t)] << 2 | yn[e.charCodeAt(t + 1)] >> 4, a[s++] = 255 & u) : 1 === o && (u = yn[e.charCodeAt(t)] << 10 | yn[e.charCodeAt(t + 1)] << 4 | yn[e.charCodeAt(t + 2)] >> 2, a[s++] = u >> 8 & 255, a[s++] = 255 & u), a;
	    }(function (e) {
	      if ((e = function (e) {
	        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
	      }(e).replace(ir, "")).length < 2) return "";for (; e.length % 4 != 0;) {
	        e += "=";
	      }return e;
	    }(e));
	  }function pr(e, t, n, r) {
	    for (var u = 0; u < r && !(u + n >= t.length || u >= e.length); ++u) {
	      t[u + n] = e[u];
	    }return u;
	  }function dr(e) {
	    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
	  }var fr = Ue(fn);var hr = function () {
	    function hr(e, t) {
	      _classCallCheck(this, hr);

	      (t = t || {}).readChunk || (t.readChunk = 1024), t.newLineCharacter ? t.newLineCharacter = t.newLineCharacter.charCodeAt(0) : t.newLineCharacter = 10, this.fd = "number" == typeof e ? e : fr.openSync(e, "r"), this.options = t, this.newLineCharacter = t.newLineCharacter, this.reset();
	    }

	    _createClass(hr, [{
	      key: "_searchInBuffer",
	      value: function _searchInBuffer(e, t) {
	        var n = -1;for (var _r15 = 0; _r15 <= e.length; _r15++) {
	          if (e[_r15] === t) {
	            n = _r15;break;
	          }
	        }return n;
	      }
	    }, {
	      key: "reset",
	      value: function reset() {
	        this.eofReached = !1, this.linesCache = [], this.fdPosition = 0;
	      }
	    }, {
	      key: "close",
	      value: function close() {
	        fr.closeSync(this.fd), this.fd = null;
	      }
	    }, {
	      key: "_extractLines",
	      value: function _extractLines(e) {
	        var t = void 0;var n = [];var r = 0,
	            u = 0;for (;;) {
	          var _o3 = e[r++];if (_o3 === this.newLineCharacter) t = e.slice(u, r), n.push(t), u = r;else if (!_o3) break;
	        }var o = e.slice(u, r);return o.length && n.push(o), n;
	      }
	    }, {
	      key: "_readChunk",
	      value: function _readChunk(e) {
	        var t = void 0,
	            n = 0;var r = [];do {
	          var _e14 = new kn(this.options.readChunk);t = fr.readSync(this.fd, _e14, 0, this.options.readChunk, this.fdPosition), n += t, this.fdPosition = this.fdPosition + t, r.push(_e14);
	        } while (t && -1 === this._searchInBuffer(r[r.length - 1], this.options.newLineCharacter));var u = kn.concat(r);return t < this.options.readChunk && (this.eofReached = !0, u = u.slice(0, n)), n && (this.linesCache = this._extractLines(u), e && (this.linesCache[0] = kn.concat([e, this.linesCache[0]]))), n;
	      }
	    }, {
	      key: "next",
	      value: function next() {
	        if (!this.fd) return !1;var e = void 0,
	            t = !1;if (this.eofReached && 0 === this.linesCache.length) return t;if (this.linesCache.length || (e = this._readChunk()), this.linesCache.length) {
	          t = this.linesCache.shift();10 !== t[t.length - 1] && (e = this._readChunk(t), e && (t = this.linesCache.shift()));
	        }return this.eofReached && 0 === this.linesCache.length && this.close(), t && t[t.length - 1] === this.newLineCharacter && (t = t.slice(0, t.length - 1)), t;
	      }
	    }]);

	    return hr;
	  }();var mr = function mr(e) {
	    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
	      var u = e[t];r[u[0]] = u[1];
	    }return r;
	  };
	  var gr = function (_Error) {
	    _inherits(gr, _Error);

	    function gr() {
	      _classCallCheck(this, gr);

	      return _possibleConstructorReturn(this, (gr.__proto__ || Object.getPrototypeOf(gr)).apply(this, arguments));
	    }

	    return gr;
	  }(Error);

	  var Dr = function (_Error2) {
	    _inherits(Dr, _Error2);

	    function Dr() {
	      _classCallCheck(this, Dr);

	      return _possibleConstructorReturn(this, (Dr.__proto__ || Object.getPrototypeOf(Dr)).apply(this, arguments));
	    }

	    return Dr;
	  }(Error);

	  var yr = function (_Error3) {
	    _inherits(yr, _Error3);

	    function yr() {
	      _classCallCheck(this, yr);

	      return _possibleConstructorReturn(this, (yr.__proto__ || Object.getPrototypeOf(yr)).apply(this, arguments));
	    }

	    return yr;
	  }(Error);

	  var Er = { ConfigError: gr, DebugError: Dr, UndefinedParserError: yr },
	      _Cr = function Cr(e, t) {
	    return (_Cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
	      e.__proto__ = t;
	    } || function (e, t) {
	      for (var n in t) {
	        t.hasOwnProperty(n) && (e[n] = t[n]);
	      }
	    })(e, t);
	  };
	  /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.
	  
	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.
	  
	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */var _br = function br() {
	    return (_br = Object.assign || function (e) {
	      for (var t, n = 1, r = arguments.length; n < r; n++) {
	        for (var u in t = arguments[n]) {
	          Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
	        }
	      }return e;
	    }).apply(this, arguments);
	  };function Ar(e) {
	    var t = "function" == typeof Symbol && Symbol.iterator,
	        n = t && e[t],
	        r = 0;if (n) return n.call(e);if (e && "number" == typeof e.length) return { next: function next() {
	        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
	      } };throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	  }function vr(e, t) {
	    var n = "function" == typeof Symbol && e[Symbol.iterator];if (!n) return e;var r,
	        u,
	        o = n.call(e),
	        a = [];try {
	      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) {
	        a.push(r.value);
	      }
	    } catch (e) {
	      u = { error: e };
	    } finally {
	      try {
	        r && !r.done && (n = o.return) && n.call(o);
	      } finally {
	        if (u) throw u.error;
	      }
	    }return a;
	  }function Fr(e) {
	    return this instanceof Fr ? (this.v = e, this) : new Fr(e);
	  }var xr = Object.freeze({ __proto__: null, __extends: function __extends(e, t) {
	      function n() {
	        this.constructor = e;
	      }_Cr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
	    }, get __assign() {
	      return _br;
	    }, __rest: function __rest(e, t) {
	      var n = {};for (var r in e) {
	        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	      }if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
	        var u = 0;for (r = Object.getOwnPropertySymbols(e); u < r.length; u++) {
	          t.indexOf(r[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[u]) && (n[r[u]] = e[r[u]]);
	        }
	      }return n;
	    }, __decorate: function __decorate(e, t, n, r) {
	      var u,
	          o = arguments.length,
	          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);else for (var i = e.length - 1; i >= 0; i--) {
	        (u = e[i]) && (a = (o < 3 ? u(a) : o > 3 ? u(t, n, a) : u(t, n)) || a);
	      }return o > 3 && a && Object.defineProperty(t, n, a), a;
	    }, __param: function __param(e, t) {
	      return function (n, r) {
	        t(n, r, e);
	      };
	    }, __metadata: function __metadata(e, t) {
	      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
	    }, __awaiter: function __awaiter(e, t, n, r) {
	      return new (n || (n = Promise))(function (u, o) {
	        function a(e) {
	          try {
	            s(r.next(e));
	          } catch (e) {
	            o(e);
	          }
	        }function i(e) {
	          try {
	            s(r.throw(e));
	          } catch (e) {
	            o(e);
	          }
	        }function s(e) {
	          var t;e.done ? u(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
	            e(t);
	          })).then(a, i);
	        }s((r = r.apply(e, t || [])).next());
	      });
	    }, __generator: function __generator(e, t) {
	      var n,
	          r,
	          u,
	          o,
	          a = { label: 0, sent: function sent() {
	          if (1 & u[0]) throw u[1];return u[1];
	        }, trys: [], ops: [] };return o = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
	        return this;
	      }), o;function i(o) {
	        return function (i) {
	          return function (o) {
	            if (n) throw new TypeError("Generator is already executing.");for (; a;) {
	              try {
	                if (n = 1, r && (u = 2 & o[0] ? r.return : o[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, o[1])).done) return u;switch (r = 0, u && (o = [2 & o[0], u.value]), o[0]) {case 0:case 1:
	                    u = o;break;case 4:
	                    return a.label++, { value: o[1], done: !1 };case 5:
	                    a.label++, r = o[1], o = [0];continue;case 7:
	                    o = a.ops.pop(), a.trys.pop();continue;default:
	                    if (!(u = a.trys, (u = u.length > 0 && u[u.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
	                      a = 0;continue;
	                    }if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
	                      a.label = o[1];break;
	                    }if (6 === o[0] && a.label < u[1]) {
	                      a.label = u[1], u = o;break;
	                    }if (u && a.label < u[2]) {
	                      a.label = u[2], a.ops.push(o);break;
	                    }u[2] && a.ops.pop(), a.trys.pop();continue;}o = t.call(e, a);
	              } catch (e) {
	                o = [6, e], r = 0;
	              } finally {
	                n = u = 0;
	              }
	            }if (5 & o[0]) throw o[1];return { value: o[0] ? o[1] : void 0, done: !0 };
	          }([o, i]);
	        };
	      }
	    }, __createBinding: function __createBinding(e, t, n, r) {
	      void 0 === r && (r = n), e[r] = t[n];
	    }, __exportStar: function __exportStar(e, t) {
	      for (var n in e) {
	        "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
	      }
	    }, __values: Ar, __read: vr, __spread: function __spread() {
	      for (var e = [], t = 0; t < arguments.length; t++) {
	        e = e.concat(vr(arguments[t]));
	      }return e;
	    }, __spreadArrays: function __spreadArrays() {
	      for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
	        e += arguments[t].length;
	      }var r = Array(e),
	          u = 0;for (t = 0; t < n; t++) {
	        for (var o = arguments[t], a = 0, i = o.length; a < i; a++, u++) {
	          r[u] = o[a];
	        }
	      }return r;
	    }, __await: Fr, __asyncGenerator: function __asyncGenerator(e, t, n) {
	      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var r,
	          u = n.apply(e, t || []),
	          o = [];return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function () {
	        return this;
	      }, r;function a(e) {
	        u[e] && (r[e] = function (t) {
	          return new Promise(function (n, r) {
	            o.push([e, t, n, r]) > 1 || i(e, t);
	          });
	        });
	      }function i(e, t) {
	        try {
	          (n = u[e](t)).value instanceof Fr ? Promise.resolve(n.value.v).then(s, l) : c(o[0][2], n);
	        } catch (e) {
	          c(o[0][3], e);
	        }var n;
	      }function s(e) {
	        i("next", e);
	      }function l(e) {
	        i("throw", e);
	      }function c(e, t) {
	        e(t), o.shift(), o.length && i(o[0][0], o[0][1]);
	      }
	    }, __asyncDelegator: function __asyncDelegator(e) {
	      var t, n;return t = {}, r("next"), r("throw", function (e) {
	        throw e;
	      }), r("return"), t[Symbol.iterator] = function () {
	        return this;
	      }, t;function r(r, u) {
	        t[r] = e[r] ? function (t) {
	          return (n = !n) ? { value: Fr(e[r](t)), done: "return" === r } : u ? u(t) : t;
	        } : u;
	      }
	    }, __asyncValues: function __asyncValues(e) {
	      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var t,
	          n = e[Symbol.asyncIterator];return n ? n.call(e) : (e = Ar(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
	        return this;
	      }, t);function r(n) {
	        t[n] = e[n] && function (t) {
	          return new Promise(function (r, u) {
	            (function (e, t, n, r) {
	              Promise.resolve(r).then(function (t) {
	                e({ value: t, done: n });
	              }, t);
	            })(r, u, (t = e[n](t)).done, t.value);
	          });
	        };
	      }
	    }, __makeTemplateObject: function __makeTemplateObject(e, t) {
	      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	    }, __importStar: function __importStar(e) {
	      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
	        Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
	      }return t.default = e, t;
	    }, __importDefault: function __importDefault(e) {
	      return e && e.__esModule ? e : { default: e };
	    }, __classPrivateFieldGet: function __classPrivateFieldGet(e, t) {
	      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");return t.get(e);
	    }, __classPrivateFieldSet: function __classPrivateFieldSet(e, t, n) {
	      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");return t.set(e, n), n;
	    } }),
	      Sr = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.apiDescriptor = { key: function key(e) {
	        return (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)
	        );
	      }, value: function value(e) {
	        if (null === e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return JSON.stringify(e);if (Array.isArray(e)) return "[".concat(e.map(function (e) {
	          return t.apiDescriptor.value(e);
	        }).join(", "), "]");var n = Object.keys(e);return 0 === n.length ? "{}" : "{ ".concat(n.map(function (n) {
	          return "".concat(t.apiDescriptor.key(n), ": ").concat(t.apiDescriptor.value(e[n]));
	        }).join(", "), " }");
	      },
	      pair: function pair(_ref6) {
	        var e = _ref6.key,
	            n = _ref6.value;
	        return t.apiDescriptor.value(_defineProperty({}, e, n));
	      } };
	  }),
	      wr = Ue(xr),
	      Br = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(Sr, t);
	  }),
	      Tr = /[|\\{}()[\]^$+*?.]/g,
	      kr = function kr(e) {
	    if ("string" != typeof e) throw new TypeError("Expected a string");return e.replace(Tr, "\\$&");
	  },
	      Nr = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
	      Or = $e(function (e) {
	    var t = {};for (var n in Nr) {
	      Nr.hasOwnProperty(n) && (t[Nr[n]] = n);
	    }var r = e.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };for (var u in r) {
	      if (r.hasOwnProperty(u)) {
	        if (!("channels" in r[u])) throw new Error("missing channels property: " + u);if (!("labels" in r[u])) throw new Error("missing channel labels property: " + u);if (r[u].labels.length !== r[u].channels) throw new Error("channel and label counts mismatch: " + u);var o = r[u].channels,
	            a = r[u].labels;delete r[u].channels, delete r[u].labels, Object.defineProperty(r[u], "channels", { value: o }), Object.defineProperty(r[u], "labels", { value: a });
	      }
	    }r.rgb.hsl = function (e) {
	      var t,
	          n,
	          r = e[0] / 255,
	          u = e[1] / 255,
	          o = e[2] / 255,
	          a = Math.min(r, u, o),
	          i = Math.max(r, u, o),
	          s = i - a;return i === a ? t = 0 : r === i ? t = (u - o) / s : u === i ? t = 2 + (o - r) / s : o === i && (t = 4 + (r - u) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + i) / 2, [t, 100 * (i === a ? 0 : n <= .5 ? s / (i + a) : s / (2 - i - a)), 100 * n];
	    }, r.rgb.hsv = function (e) {
	      var t,
	          n,
	          r,
	          u,
	          o,
	          a = e[0] / 255,
	          i = e[1] / 255,
	          s = e[2] / 255,
	          l = Math.max(a, i, s),
	          c = l - Math.min(a, i, s),
	          p = function p(e) {
	        return (l - e) / 6 / c + .5;
	      };return 0 === c ? u = o = 0 : (o = c / l, t = p(a), n = p(i), r = p(s), a === l ? u = r - n : i === l ? u = 1 / 3 + t - r : s === l && (u = 2 / 3 + n - t), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * o, 100 * l];
	    }, r.rgb.hwb = function (e) {
	      var t = e[0],
	          n = e[1],
	          u = e[2];return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, u))), 100 * (u = 1 - 1 / 255 * Math.max(t, Math.max(n, u)))];
	    }, r.rgb.cmyk = function (e) {
	      var t,
	          n = e[0] / 255,
	          r = e[1] / 255,
	          u = e[2] / 255;return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - u))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - u - t) / (1 - t) || 0), 100 * t];
	    }, r.rgb.keyword = function (e) {
	      var n = t[e];if (n) return n;var r,
	          u,
	          o,
	          a = 1 / 0;for (var i in Nr) {
	        if (Nr.hasOwnProperty(i)) {
	          var s = Nr[i],
	              l = (u = e, o = s, Math.pow(u[0] - o[0], 2) + Math.pow(u[1] - o[1], 2) + Math.pow(u[2] - o[2], 2));l < a && (a = l, r = i);
	        }
	      }return r;
	    }, r.keyword.rgb = function (e) {
	      return Nr[e];
	    }, r.rgb.xyz = function (e) {
	      var t = e[0] / 255,
	          n = e[1] / 255,
	          r = e[2] / 255;return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
	    }, r.rgb.lab = function (e) {
	      var t = r.rgb.xyz(e),
	          n = t[0],
	          u = t[1],
	          o = t[2];return u /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116) - 16, 500 * (n - u), 200 * (u - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))];
	    }, r.hsl.rgb = function (e) {
	      var t,
	          n,
	          r,
	          u,
	          o,
	          a = e[0] / 360,
	          i = e[1] / 100,
	          s = e[2] / 100;if (0 === i) return [o = 255 * s, o, o];t = 2 * s - (n = s < .5 ? s * (1 + i) : s + i - s * i), u = [0, 0, 0];for (var l = 0; l < 3; l++) {
	        (r = a + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, u[l] = 255 * o;
	      }return u;
	    }, r.hsl.hsv = function (e) {
	      var t = e[0],
	          n = e[1] / 100,
	          r = e[2] / 100,
	          u = n,
	          o = Math.max(r, .01);return n *= (r *= 2) <= 1 ? r : 2 - r, u *= o <= 1 ? o : 2 - o, [t, 100 * (0 === r ? 2 * u / (o + u) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
	    }, r.hsv.rgb = function (e) {
	      var t = e[0] / 60,
	          n = e[1] / 100,
	          r = e[2] / 100,
	          u = Math.floor(t) % 6,
	          o = t - Math.floor(t),
	          a = 255 * r * (1 - n),
	          i = 255 * r * (1 - n * o),
	          s = 255 * r * (1 - n * (1 - o));switch (r *= 255, u) {case 0:
	          return [r, s, a];case 1:
	          return [i, r, a];case 2:
	          return [a, r, s];case 3:
	          return [a, i, r];case 4:
	          return [s, a, r];case 5:
	          return [r, a, i];}
	    }, r.hsv.hsl = function (e) {
	      var t,
	          n,
	          r,
	          u = e[0],
	          o = e[1] / 100,
	          a = e[2] / 100,
	          i = Math.max(a, .01);return r = (2 - o) * a, n = o * i, [u, 100 * (n = (n /= (t = (2 - o) * i) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
	    }, r.hwb.rgb = function (e) {
	      var t,
	          n,
	          r,
	          u,
	          o,
	          a,
	          i,
	          s = e[0] / 360,
	          l = e[1] / 100,
	          c = e[2] / 100,
	          p = l + c;switch (p > 1 && (l /= p, c /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), u = l + r * ((n = 1 - c) - l), t) {default:case 6:case 0:
	          o = n, a = u, i = l;break;case 1:
	          o = u, a = n, i = l;break;case 2:
	          o = l, a = n, i = u;break;case 3:
	          o = l, a = u, i = n;break;case 4:
	          o = u, a = l, i = n;break;case 5:
	          o = n, a = l, i = u;}return [255 * o, 255 * a, 255 * i];
	    }, r.cmyk.rgb = function (e) {
	      var t = e[0] / 100,
	          n = e[1] / 100,
	          r = e[2] / 100,
	          u = e[3] / 100;return [255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u)), 255 * (1 - Math.min(1, r * (1 - u) + u))];
	    }, r.xyz.rgb = function (e) {
	      var t,
	          n,
	          r,
	          u = e[0] / 100,
	          o = e[1] / 100,
	          a = e[2] / 100;return n = -.9689 * u + 1.8758 * o + .0415 * a, r = .0557 * u + -.204 * o + 1.057 * a, t = (t = 3.2406 * u + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
	    }, r.xyz.lab = function (e) {
	      var t = e[0],
	          n = e[1],
	          r = e[2];return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
	    }, r.lab.xyz = function (e) {
	      var t,
	          n,
	          r,
	          u = e[0];t = e[1] / 500 + (n = (u + 16) / 116), r = n - e[2] / 200;var o = Math.pow(n, 3),
	          a = Math.pow(t, 3),
	          i = Math.pow(r, 3);return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = a > .008856 ? a : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883];
	    }, r.lab.lch = function (e) {
	      var t,
	          n = e[0],
	          r = e[1],
	          u = e[2];return (t = 360 * Math.atan2(u, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + u * u), t];
	    }, r.lch.lab = function (e) {
	      var t,
	          n = e[0],
	          r = e[1];return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)];
	    }, r.rgb.ansi16 = function (e) {
	      var t = e[0],
	          n = e[1],
	          u = e[2],
	          o = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];if (0 === (o = Math.round(o / 50))) return 30;var a = 30 + (Math.round(u / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));return 2 === o && (a += 60), a;
	    }, r.hsv.ansi16 = function (e) {
	      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
	    }, r.rgb.ansi256 = function (e) {
	      var t = e[0],
	          n = e[1],
	          r = e[2];return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
	    }, r.ansi16.rgb = function (e) {
	      var t = e % 10;if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];var n = .5 * (1 + ~~(e > 50));return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
	    }, r.ansi256.rgb = function (e) {
	      if (e >= 232) {
	        var t = 10 * (e - 232) + 8;return [t, t, t];
	      }var n;return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
	    }, r.rgb.hex = function (e) {
	      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();return "000000".substring(t.length) + t;
	    }, r.hex.rgb = function (e) {
	      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if (!t) return [0, 0, 0];var n = t[0];3 === t[0].length && (n = n.split("").map(function (e) {
	        return e + e;
	      }).join(""));var r = parseInt(n, 16);return [r >> 16 & 255, r >> 8 & 255, 255 & r];
	    }, r.rgb.hcg = function (e) {
	      var t,
	          n = e[0] / 255,
	          r = e[1] / 255,
	          u = e[2] / 255,
	          o = Math.max(Math.max(n, r), u),
	          a = Math.min(Math.min(n, r), u),
	          i = o - a;return t = i <= 0 ? 0 : o === n ? (r - u) / i % 6 : o === r ? 2 + (u - n) / i : 4 + (n - r) / i + 4, t /= 6, [360 * (t %= 1), 100 * i, 100 * (i < 1 ? a / (1 - i) : 0)];
	    }, r.hsl.hcg = function (e) {
	      var t = e[1] / 100,
	          n = e[2] / 100,
	          r = 1,
	          u = 0;return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (u = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * u];
	    }, r.hsv.hcg = function (e) {
	      var t = e[1] / 100,
	          n = e[2] / 100,
	          r = t * n,
	          u = 0;return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
	    }, r.hcg.rgb = function (e) {
	      var t = e[0] / 360,
	          n = e[1] / 100,
	          r = e[2] / 100;if (0 === n) return [255 * r, 255 * r, 255 * r];var u,
	          o = [0, 0, 0],
	          a = t % 1 * 6,
	          i = a % 1,
	          s = 1 - i;switch (Math.floor(a)) {case 0:
	          o[0] = 1, o[1] = i, o[2] = 0;break;case 1:
	          o[0] = s, o[1] = 1, o[2] = 0;break;case 2:
	          o[0] = 0, o[1] = 1, o[2] = i;break;case 3:
	          o[0] = 0, o[1] = s, o[2] = 1;break;case 4:
	          o[0] = i, o[1] = 0, o[2] = 1;break;default:
	          o[0] = 1, o[1] = 0, o[2] = s;}return u = (1 - n) * r, [255 * (n * o[0] + u), 255 * (n * o[1] + u), 255 * (n * o[2] + u)];
	    }, r.hcg.hsv = function (e) {
	      var t = e[1] / 100,
	          n = t + e[2] / 100 * (1 - t),
	          r = 0;return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
	    }, r.hcg.hsl = function (e) {
	      var t = e[1] / 100,
	          n = e[2] / 100 * (1 - t) + .5 * t,
	          r = 0;return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
	    }, r.hcg.hwb = function (e) {
	      var t = e[1] / 100,
	          n = t + e[2] / 100 * (1 - t);return [e[0], 100 * (n - t), 100 * (1 - n)];
	    }, r.hwb.hcg = function (e) {
	      var t = e[1] / 100,
	          n = 1 - e[2] / 100,
	          r = n - t,
	          u = 0;return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
	    }, r.apple.rgb = function (e) {
	      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
	    }, r.rgb.apple = function (e) {
	      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
	    }, r.gray.rgb = function (e) {
	      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
	    }, r.gray.hsl = r.gray.hsv = function (e) {
	      return [0, 0, e[0]];
	    }, r.gray.hwb = function (e) {
	      return [0, 100, e[0]];
	    }, r.gray.cmyk = function (e) {
	      return [0, 0, 0, e[0]];
	    }, r.gray.lab = function (e) {
	      return [e[0], 0, 0];
	    }, r.gray.hex = function (e) {
	      var t = 255 & Math.round(e[0] / 100 * 255),
	          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();return "000000".substring(n.length) + n;
	    }, r.rgb.gray = function (e) {
	      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
	    };
	  });function Pr(e) {
	    var t = function () {
	      for (var e = {}, t = Object.keys(Or), n = t.length, r = 0; r < n; r++) {
	        e[t[r]] = { distance: -1, parent: null };
	      }return e;
	    }(),
	        n = [e];for (t[e].distance = 0; n.length;) {
	      for (var r = n.pop(), u = Object.keys(Or[r]), o = u.length, a = 0; a < o; a++) {
	        var i = u[a],
	            s = t[i];-1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(i));
	      }
	    }return t;
	  }function _r(e, t) {
	    return function (n) {
	      return t(e(n));
	    };
	  }function Ir(e, t) {
	    for (var n = [t[e].parent, e], r = Or[t[e].parent][e], u = t[e].parent; t[u].parent;) {
	      n.unshift(t[u].parent), r = _r(Or[t[u].parent][u], r), u = t[u].parent;
	    }return r.conversion = n, r;
	  }var jr = {};Object.keys(Or).forEach(function (e) {
	    jr[e] = {}, Object.defineProperty(jr[e], "channels", { value: Or[e].channels }), Object.defineProperty(jr[e], "labels", { value: Or[e].labels });var t = function (e) {
	      for (var t = Pr(e), n = {}, r = Object.keys(t), u = r.length, o = 0; o < u; o++) {
	        var a = r[o];null !== t[a].parent && (n[a] = Ir(a, t));
	      }return n;
	    }(e);Object.keys(t).forEach(function (n) {
	      var r = t[n];jr[e][n] = function (e) {
	        var t = function t(_t13) {
	          if (null == _t13) return _t13;arguments.length > 1 && (_t13 = Array.prototype.slice.call(arguments));var n = e(_t13);if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) for (var r = n.length, u = 0; u < r; u++) {
	            n[u] = Math.round(n[u]);
	          }return n;
	        };return "conversion" in e && (t.conversion = e.conversion), t;
	      }(r), jr[e][n].raw = function (e) {
	        var t = function t(_t14) {
	          return null == _t14 ? _t14 : (arguments.length > 1 && (_t14 = Array.prototype.slice.call(arguments)), e(_t14));
	        };return "conversion" in e && (t.conversion = e.conversion), t;
	      }(r);
	    });
	  });var Mr = jr,
	      Lr = $e(function (e) {
	    var t = function t(e, _t15) {
	      return function () {
	        var n = e.apply(Mr, arguments);return "[".concat(n + _t15, "m");
	      };
	    },
	        n = function n(e, t) {
	      return function () {
	        var n = e.apply(Mr, arguments);return "[".concat(38 + t, ";5;").concat(n, "m");
	      };
	    },
	        r = function r(e, t) {
	      return function () {
	        var n = e.apply(Mr, arguments);return "[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
	      };
	    };Object.defineProperty(e, "exports", { enumerable: !0, get: function get() {
	        var e = new Map(),
	            u = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };u.color.grey = u.color.gray;var _iteratorNormalCompletion6 = true;
	        var _didIteratorError6 = false;
	        var _iteratorError6 = undefined;

	        try {
	          for (var _iterator6 = Object.keys(u)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	            var _t16 = _step6.value;
	            var _n16 = u[_t16];var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;

	            try {
	              for (var _iterator8 = Object.keys(_n16)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                var _t17 = _step8.value;
	                var _r16 = _n16[_t17];u[_t17] = { open: "[".concat(_r16[0], "m"), close: "[".concat(_r16[1], "m") }, _n16[_t17] = u[_t17], e.set(_r16[0], _r16[1]);
	              }
	            } catch (err) {
	              _didIteratorError8 = true;
	              _iteratorError8 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                  _iterator8.return();
	                }
	              } finally {
	                if (_didIteratorError8) {
	                  throw _iteratorError8;
	                }
	              }
	            }

	            Object.defineProperty(u, _t16, { value: _n16, enumerable: !1 }), Object.defineProperty(u, "codes", { value: e, enumerable: !1 });
	          }
	        } catch (err) {
	          _didIteratorError6 = true;
	          _iteratorError6 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	              _iterator6.return();
	            }
	          } finally {
	            if (_didIteratorError6) {
	              throw _iteratorError6;
	            }
	          }
	        }

	        var o = function o(e) {
	          return e;
	        },
	            a = function a(e, t, n) {
	          return [e, t, n];
	        };u.color.close = "[39m", u.bgColor.close = "[49m", u.color.ansi = { ansi: t(o, 0) }, u.color.ansi256 = { ansi256: n(o, 0) }, u.color.ansi16m = { rgb: r(a, 0) }, u.bgColor.ansi = { ansi: t(o, 10) }, u.bgColor.ansi256 = { ansi256: n(o, 10) }, u.bgColor.ansi16m = { rgb: r(a, 10) };var _iteratorNormalCompletion7 = true;
	        var _didIteratorError7 = false;
	        var _iteratorError7 = undefined;

	        try {
	          for (var _iterator7 = Object.keys(Mr)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	            var _e15 = _step7.value;
	            if ("object" != _typeof(Mr[_e15])) continue;var _o4 = Mr[_e15];"ansi16" === _e15 && (_e15 = "ansi"), "ansi16" in _o4 && (u.color.ansi[_e15] = t(_o4.ansi16, 0), u.bgColor.ansi[_e15] = t(_o4.ansi16, 10)), "ansi256" in _o4 && (u.color.ansi256[_e15] = n(_o4.ansi256, 0), u.bgColor.ansi256[_e15] = n(_o4.ansi256, 10)), "rgb" in _o4 && (u.color.ansi16m[_e15] = r(_o4.rgb, 0), u.bgColor.ansi16m[_e15] = r(_o4.rgb, 10));
	          }
	        } catch (err) {
	          _didIteratorError7 = true;
	          _iteratorError7 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	              _iterator7.return();
	            }
	          } finally {
	            if (_didIteratorError7) {
	              throw _iteratorError7;
	            }
	          }
	        }

	        return u;
	      } });
	  }),
	      Rr = { EOL: "\n" },
	      qr = function qr(e, t) {
	    t = t || Re.argv;var n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
	        r = t.indexOf(n + e),
	        u = t.indexOf("--");return -1 !== r && (-1 === u || r < u);
	  };var Vr = Re.env;var Wr = void 0;function $r(e) {
	    return function (e) {
	      return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
	    }(function (e) {
	      if (!1 === Wr) return 0;if (qr("color=16m") || qr("color=full") || qr("color=truecolor")) return 3;if (qr("color=256")) return 2;if (e && !e.isTTY && !0 !== Wr) return 0;var t = Wr ? 1 : 0;if ("win32" === Re.platform) {
	        var _e16 = Rr.release().split(".");return Number(Re.versions.node.split(".")[0]) >= 8 && Number(_e16[0]) >= 10 && Number(_e16[2]) >= 10586 ? Number(_e16[2]) >= 14931 ? 3 : 2 : 1;
	      }if ("CI" in Vr) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
	        return e in Vr;
	      }) || "codeship" === Vr.CI_NAME ? 1 : t;if ("TEAMCITY_VERSION" in Vr) return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Vr.TEAMCITY_VERSION) ? 1 : 0
	      );if ("truecolor" === Vr.COLORTERM) return 3;if ("TERM_PROGRAM" in Vr) {
	        var _e17 = parseInt((Vr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);switch (Vr.TERM_PROGRAM) {case "iTerm.app":
	            return _e17 >= 3 ? 3 : 2;case "Apple_Terminal":
	            return 2;}
	      }return (/-256(color)?$/i.test(Vr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Vr.TERM) || "COLORTERM" in Vr ? 1 : (Vr.TERM, t)
	      );
	    }(e));
	  }qr("no-color") || qr("no-colors") || qr("color=false") ? Wr = !1 : (qr("color") || qr("colors") || qr("color=true") || qr("color=always")) && (Wr = !0), "FORCE_COLOR" in Vr && (Wr = 0 === Vr.FORCE_COLOR.length || 0 !== parseInt(Vr.FORCE_COLOR, 10));var Ur = { supportsColor: $r, stdout: $r(Re.stdout), stderr: $r(Re.stderr) };var zr = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
	      Jr = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
	      Gr = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
	      Hr = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
	      Xr = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);function Yr(e) {
	    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Xr.get(e) || e;
	  }function Kr(e, t) {
	    var n = [],
	        r = t.trim().split(/\s*,\s*/g);var u = void 0;var _iteratorNormalCompletion9 = true;
	    var _didIteratorError9 = false;
	    var _iteratorError9 = undefined;

	    try {
	      for (var _iterator9 = r[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	        var _t18 = _step9.value;
	        if (isNaN(_t18)) {
	          if (!(u = _t18.match(Gr))) throw new Error("Invalid Chalk template style argument: ".concat(_t18, " (in style '").concat(e, "')"));n.push(u[2].replace(Hr, function (e, t, n) {
	            return t ? Yr(t) : n;
	          }));
	        } else n.push(Number(_t18));
	      }
	    } catch (err) {
	      _didIteratorError9 = true;
	      _iteratorError9 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion9 && _iterator9.return) {
	          _iterator9.return();
	        }
	      } finally {
	        if (_didIteratorError9) {
	          throw _iteratorError9;
	        }
	      }
	    }

	    return n;
	  }function Qr(e) {
	    Jr.lastIndex = 0;var t = [];var n = void 0;for (; null !== (n = Jr.exec(e));) {
	      var _e18 = n[1];if (n[2]) {
	        var _r17 = Kr(_e18, n[2]);t.push([_e18].concat(_r17));
	      } else t.push([_e18]);
	    }return t;
	  }function Zr(e, t) {
	    var n = {};var _iteratorNormalCompletion10 = true;
	    var _didIteratorError10 = false;
	    var _iteratorError10 = undefined;

	    try {
	      for (var _iterator10 = t[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	        var _e19 = _step10.value;
	        var _iteratorNormalCompletion12 = true;
	        var _didIteratorError12 = false;
	        var _iteratorError12 = undefined;

	        try {
	          for (var _iterator12 = _e19.styles[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	            var _t19 = _step12.value;
	            n[_t19[0]] = _e19.inverse ? null : _t19.slice(1);
	          }
	        } catch (err) {
	          _didIteratorError12 = true;
	          _iteratorError12 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion12 && _iterator12.return) {
	              _iterator12.return();
	            }
	          } finally {
	            if (_didIteratorError12) {
	              throw _iteratorError12;
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError10 = true;
	      _iteratorError10 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion10 && _iterator10.return) {
	          _iterator10.return();
	        }
	      } finally {
	        if (_didIteratorError10) {
	          throw _iteratorError10;
	        }
	      }
	    }

	    var r = e;var _iteratorNormalCompletion11 = true;
	    var _didIteratorError11 = false;
	    var _iteratorError11 = undefined;

	    try {
	      for (var _iterator11 = Object.keys(n)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	        var _e20 = _step11.value;
	        if (Array.isArray(n[_e20])) {
	          if (!(_e20 in r)) throw new Error("Unknown Chalk style: ".concat(_e20));r = n[_e20].length > 0 ? r[_e20].apply(r, n[_e20]) : r[_e20];
	        }
	      }
	    } catch (err) {
	      _didIteratorError11 = true;
	      _iteratorError11 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion11 && _iterator11.return) {
	          _iterator11.return();
	        }
	      } finally {
	        if (_didIteratorError11) {
	          throw _iteratorError11;
	        }
	      }
	    }

	    return r;
	  }var eu = function eu(e, t) {
	    var n = [],
	        r = [];var u = [];if (t.replace(zr, function (t, o, a, i, s, l) {
	      if (o) u.push(Yr(o));else if (i) {
	        var _t20 = u.join("");u = [], r.push(0 === n.length ? _t20 : Zr(e, n)(_t20)), n.push({ inverse: a, styles: Qr(i) });
	      } else if (s) {
	        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");r.push(Zr(e, n)(u.join(""))), u = [], n.pop();
	      } else u.push(l);
	    }), r.push(u.join("")), n.length > 0) {
	      var _e21 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");throw new Error(_e21);
	    }return r.join("");
	  },
	      tu = $e(function (e) {
	    var t = Ur.stdout,
	        n = "win32" === Re.platform && !(Re.env.TERM || "").toLowerCase().startsWith("xterm"),
	        r = ["ansi", "ansi", "ansi256", "ansi16m"],
	        u = new Set(["gray"]),
	        o = Object.create(null);function a(e, n) {
	      n = n || {};var r = t ? t.level : 0;e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0;
	    }function i(e) {
	      if (!this || !(this instanceof i) || this.template) {
	        var _t21 = {};return a(_t21, e), _t21.template = function () {
	          var e = [].slice.call(arguments);return p.apply(null, [_t21.template].concat(e));
	        }, Object.setPrototypeOf(_t21, i.prototype), Object.setPrototypeOf(_t21.template, _t21), _t21.template.constructor = i, _t21.template;
	      }a(this, e);
	    }n && (Lr.blue.open = "[94m");var _iteratorNormalCompletion13 = true;
	    var _didIteratorError13 = false;
	    var _iteratorError13 = undefined;

	    try {
	      var _loop2 = function _loop2() {
	        var e = _step13.value;
	        Lr[e].closeRe = new RegExp(kr(Lr[e].close), "g"), o[e] = {
	          get: function get() {
	            var t = Lr[e];return l.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
	          }
	        };
	      };

	      for (var _iterator13 = Object.keys(Lr)[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	        _loop2();
	      }
	    } catch (err) {
	      _didIteratorError13 = true;
	      _iteratorError13 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion13 && _iterator13.return) {
	          _iterator13.return();
	        }
	      } finally {
	        if (_didIteratorError13) {
	          throw _iteratorError13;
	        }
	      }
	    }

	    o.visible = {
	      get: function get() {
	        return l.call(this, this._styles || [], !0, "visible");
	      }
	    }, Lr.color.closeRe = new RegExp(kr(Lr.color.close), "g");var _iteratorNormalCompletion14 = true;
	    var _didIteratorError14 = false;
	    var _iteratorError14 = undefined;

	    try {
	      var _loop3 = function _loop3() {
	        var e = _step14.value;
	        u.has(e) || (o[e] = {
	          get: function get() {
	            var t = this.level;return function () {
	              var n = Lr.color[r[t]][e].apply(null, arguments),
	                  u = { open: n, close: Lr.color.close, closeRe: Lr.color.closeRe };return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
	            };
	          }
	        });
	      };

	      for (var _iterator14 = Object.keys(Lr.color.ansi)[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
	        _loop3();
	      }
	    } catch (err) {
	      _didIteratorError14 = true;
	      _iteratorError14 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion14 && _iterator14.return) {
	          _iterator14.return();
	        }
	      } finally {
	        if (_didIteratorError14) {
	          throw _iteratorError14;
	        }
	      }
	    }

	    Lr.bgColor.closeRe = new RegExp(kr(Lr.bgColor.close), "g");var _iteratorNormalCompletion15 = true;
	    var _didIteratorError15 = false;
	    var _iteratorError15 = undefined;

	    try {
	      var _loop4 = function _loop4() {
	        var e = _step15.value;
	        if (u.has(e)) return "continue";o["bg" + e[0].toUpperCase() + e.slice(1)] = {
	          get: function get() {
	            var t = this.level;return function () {
	              var n = Lr.bgColor[r[t]][e].apply(null, arguments),
	                  u = { open: n, close: Lr.bgColor.close, closeRe: Lr.bgColor.closeRe };return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
	            };
	          }
	        };
	      };

	      for (var _iterator15 = Object.keys(Lr.bgColor.ansi)[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
	        var _ret4 = _loop4();

	        if (_ret4 === "continue") continue;
	      }
	    } catch (err) {
	      _didIteratorError15 = true;
	      _iteratorError15 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion15 && _iterator15.return) {
	          _iterator15.return();
	        }
	      } finally {
	        if (_didIteratorError15) {
	          throw _iteratorError15;
	        }
	      }
	    }

	    var s = Object.defineProperties(function () {}, o);function l(e, t, n) {
	      var r = function e() {
	        return c.apply(e, arguments);
	      };r._styles = e, r._empty = t;var u = this;return Object.defineProperty(r, "level", { enumerable: !0, get: function get() {
	          return u.level;
	        }, set: function set(e) {
	          u.level = e;
	        }
	      }), Object.defineProperty(r, "enabled", { enumerable: !0, get: function get() {
	          return u.enabled;
	        }, set: function set(e) {
	          u.enabled = e;
	        }
	      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r;
	    }function c() {
	      var e = arguments,
	          t = e.length;var r = String(arguments[0]);if (0 === t) return "";if (t > 1) for (var _n17 = 1; _n17 < t; _n17++) {
	        r += " " + e[_n17];
	      }if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;var u = Lr.dim.open;n && this.hasGrey && (Lr.dim.open = "");var _iteratorNormalCompletion16 = true;
	      var _didIteratorError16 = false;
	      var _iteratorError16 = undefined;

	      try {
	        for (var _iterator16 = this._styles.slice().reverse()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
	          var _e22 = _step16.value;
	          r = _e22.open + r.replace(_e22.closeRe, _e22.open) + _e22.close, r = r.replace(/\r?\n/g, "".concat(_e22.close, "$&").concat(_e22.open));
	        }
	      } catch (err) {
	        _didIteratorError16 = true;
	        _iteratorError16 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion16 && _iterator16.return) {
	            _iterator16.return();
	          }
	        } finally {
	          if (_didIteratorError16) {
	            throw _iteratorError16;
	          }
	        }
	      }

	      return Lr.dim.open = u, r;
	    }function p(e, t) {
	      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");var n = [].slice.call(arguments, 2),
	          r = [t.raw[0]];for (var _e23 = 1; _e23 < t.length; _e23++) {
	        r.push(String(n[_e23 - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[_e23]));
	      }return eu(e, r.join(""));
	    }Object.defineProperties(i.prototype, o), e.exports = i(), e.exports.supportsColor = t, e.exports.default = e.exports;
	  }),
	      nu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.commonDeprecatedHandler = function (e, t, _ref7) {
	      var n = _ref7.descriptor;
	      var r = ["".concat(tu.default.yellow("string" == typeof e ? n.key(e) : n.pair(e)), " is deprecated")];return t && r.push("we now treat it as ".concat(tu.default.blue("string" == typeof t ? n.key(t) : n.pair(t)))), r.join("; ") + ".";
	    };
	  }),
	      ru = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(nu, t);
	  }),
	      uu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.commonInvalidHandler = function (e, t, n) {
	      return ["Invalid ".concat(tu.default.red(n.descriptor.key(e)), " value."), "Expected ".concat(tu.default.blue(n.schemas[e].expected(n)), ","), "but received ".concat(tu.default.red(n.descriptor.value(t)), ".")].join(" ");
	    };
	  }),
	      ou = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(uu, t);
	  }),
	      au = [],
	      iu = [],
	      su = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.levenUnknownHandler = function (e, t, _ref8) {
	      var n = _ref8.descriptor,
	          r = _ref8.logger,
	          u = _ref8.schemas;
	      var o = ["Ignored unknown option ".concat(tu.default.yellow(n.pair({ key: e, value: t })), ".")],
	          a = Object.keys(u).sort().find(function (t) {
	        return function (e, t) {
	          if (e === t) return 0;var n = e;e.length > t.length && (e = t, t = n);var r = e.length,
	              u = t.length;if (0 === r) return u;if (0 === u) return r;for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-u);) {
	            r--, u--;
	          }if (0 === r) return u;for (var o, a, i, s, l = 0; l < r && e.charCodeAt(l) === t.charCodeAt(l);) {
	            l++;
	          }if (u -= l, 0 == (r -= l)) return u;for (var c = 0, p = 0; c < r;) {
	            iu[l + c] = e.charCodeAt(l + c), au[c] = ++c;
	          }for (; p < u;) {
	            for (o = t.charCodeAt(l + p), i = p++, a = p, c = 0; c < r; c++) {
	              s = o === iu[l + c] ? i : i + 1, i = au[c], a = au[c] = i > a ? s > a ? a + 1 : s : s > i ? i + 1 : s;
	            }
	          }return a;
	        }(e, t) < 3;
	      });a && o.push("Did you mean ".concat(tu.default.blue(n.key(a)), "?")), r.warn(o.join(" "));
	    };
	  }),
	      lu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(su, t);
	  }),
	      cu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(ru, t), wr.__exportStar(ou, t), wr.__exportStar(lu, t);
	  }),
	      pu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });var n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];function r(e, t) {
	      var r = new e(t),
	          a = Object.create(r);var _iteratorNormalCompletion17 = true;
	      var _didIteratorError17 = false;
	      var _iteratorError17 = undefined;

	      try {
	        for (var _iterator17 = n[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
	          var _e24 = _step17.value;
	          _e24 in t && (a[_e24] = o(t[_e24], r, u.prototype[_e24].length));
	        }
	      } catch (err) {
	        _didIteratorError17 = true;
	        _iteratorError17 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion17 && _iterator17.return) {
	            _iterator17.return();
	          }
	        } finally {
	          if (_didIteratorError17) {
	            throw _iteratorError17;
	          }
	        }
	      }

	      return a;
	    }t.createSchema = r;
	    var u = function () {
	      function u(e) {
	        _classCallCheck(this, u);

	        this.name = e.name;
	      }

	      _createClass(u, [{
	        key: "default",
	        value: function _default(e) {}
	      }, {
	        key: "expected",
	        value: function expected(e) {
	          return "nothing";
	        }
	      }, {
	        key: "validate",
	        value: function validate(e, t) {
	          return !1;
	        }
	      }, {
	        key: "deprecated",
	        value: function deprecated(e, t) {
	          return !1;
	        }
	      }, {
	        key: "forward",
	        value: function forward(e, t) {}
	      }, {
	        key: "redirect",
	        value: function redirect(e, t) {}
	      }, {
	        key: "overlap",
	        value: function overlap(e, t, n) {
	          return e;
	        }
	      }, {
	        key: "preprocess",
	        value: function preprocess(e, t) {
	          return e;
	        }
	      }, {
	        key: "postprocess",
	        value: function postprocess(e, t) {
	          return e;
	        }
	      }], [{
	        key: "create",
	        value: function create(e) {
	          return r(this, e);
	        }
	      }]);

	      return u;
	    }();

	    function o(e, t, n) {
	      return "function" == typeof e ? function () {
	        for (var _len2 = arguments.length, r = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          r[_key2] = arguments[_key2];
	        }

	        return e.apply(undefined, _toConsumableArray(r.slice(0, n - 1)).concat([t], _toConsumableArray(r.slice(n - 1))));
	      } : function () {
	        return e;
	      };
	    }t.Schema = u;
	  }),
	      du = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema) {
	      _inherits(n, _pu$Schema);

	      function n(e) {
	        var _this4;

	        _classCallCheck(this, n);

	        (_this4 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)), _this4), _this4._sourceName = e.sourceName;return _this4;
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected(e) {
	          return e.schemas[this._sourceName].expected(e);
	        }
	      }, {
	        key: "validate",
	        value: function validate(e, t) {
	          return t.schemas[this._sourceName].validate(e, t);
	        }
	      }, {
	        key: "redirect",
	        value: function redirect(e, t) {
	          return this._sourceName;
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    t.AliasSchema = n;
	  }),
	      fu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema2) {
	      _inherits(n, _pu$Schema2);

	      function n() {
	        _classCallCheck(this, n);

	        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected() {
	          return "anything";
	        }
	      }, {
	        key: "validate",
	        value: function validate() {
	          return !0;
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    t.AnySchema = n;
	  }),
	      hu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema3) {
	      _inherits(n, _pu$Schema3);

	      function n(e) {
	        var _this6;

	        _classCallCheck(this, n);

	        var t = e.valueSchema,
	            _e$name = e.name,
	            _n18 = _e$name === undefined ? t.name : _e$name,
	            r = wr.__rest(e, ["valueSchema", "name"]);

	        (_this6 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, Object.assign({}, r, { name: _n18 }))), _this6), _this6._valueSchema = t;return _this6;
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected(e) {
	          return "an array of ".concat(this._valueSchema.expected(e));
	        }
	      }, {
	        key: "validate",
	        value: function validate(e, t) {
	          if (!Array.isArray(e)) return !1;var n = [];var _iteratorNormalCompletion18 = true;
	          var _didIteratorError18 = false;
	          var _iteratorError18 = undefined;

	          try {
	            for (var _iterator18 = e[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
	              var _r18 = _step18.value;
	              var _e25 = t.normalizeValidateResult(this._valueSchema.validate(_r18, t), _r18);!0 !== _e25 && n.push(_e25.value);
	            }
	          } catch (err) {
	            _didIteratorError18 = true;
	            _iteratorError18 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion18 && _iterator18.return) {
	                _iterator18.return();
	              }
	            } finally {
	              if (_didIteratorError18) {
	                throw _iteratorError18;
	              }
	            }
	          }

	          return 0 === n.length || { value: n };
	        }
	      }, {
	        key: "deprecated",
	        value: function deprecated(e, t) {
	          var n = [];var _iteratorNormalCompletion19 = true;
	          var _didIteratorError19 = false;
	          var _iteratorError19 = undefined;

	          try {
	            for (var _iterator19 = e[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
	              var _r19 = _step19.value;
	              var _e26 = t.normalizeDeprecatedResult(this._valueSchema.deprecated(_r19, t), _r19);!1 !== _e26 && n.push.apply(n, _toConsumableArray(_e26.map(function (_ref9) {
	                var e = _ref9.value;
	                return { value: [e] };
	              })));
	            }
	          } catch (err) {
	            _didIteratorError19 = true;
	            _iteratorError19 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion19 && _iterator19.return) {
	                _iterator19.return();
	              }
	            } finally {
	              if (_didIteratorError19) {
	                throw _iteratorError19;
	              }
	            }
	          }

	          return n;
	        }
	      }, {
	        key: "forward",
	        value: function forward(e, t) {
	          var n = [];var _iteratorNormalCompletion20 = true;
	          var _didIteratorError20 = false;
	          var _iteratorError20 = undefined;

	          try {
	            for (var _iterator20 = e[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
	              var _u5 = _step20.value;
	              var _e27 = t.normalizeForwardResult(this._valueSchema.forward(_u5, t), _u5);n.push.apply(n, _toConsumableArray(_e27.map(r)));
	            }
	          } catch (err) {
	            _didIteratorError20 = true;
	            _iteratorError20 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion20 && _iterator20.return) {
	                _iterator20.return();
	              }
	            } finally {
	              if (_didIteratorError20) {
	                throw _iteratorError20;
	              }
	            }
	          }

	          return n;
	        }
	      }, {
	        key: "redirect",
	        value: function redirect(e, t) {
	          var n = [],
	              u = [];var _iteratorNormalCompletion21 = true;
	          var _didIteratorError21 = false;
	          var _iteratorError21 = undefined;

	          try {
	            for (var _iterator21 = e[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
	              var _o5 = _step21.value;
	              var _e28 = t.normalizeRedirectResult(this._valueSchema.redirect(_o5, t), _o5);"remain" in _e28 && n.push(_e28.remain), u.push.apply(u, _toConsumableArray(_e28.redirect.map(r)));
	            }
	          } catch (err) {
	            _didIteratorError21 = true;
	            _iteratorError21 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion21 && _iterator21.return) {
	                _iterator21.return();
	              }
	            } finally {
	              if (_didIteratorError21) {
	                throw _iteratorError21;
	              }
	            }
	          }

	          return 0 === n.length ? { redirect: u } : { redirect: u, remain: n };
	        }
	      }, {
	        key: "overlap",
	        value: function overlap(e, t) {
	          return e.concat(t);
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    function r(_ref10) {
	      var e = _ref10.from,
	          t = _ref10.to;
	      return { from: [e], to: t };
	    }t.ArraySchema = n;
	  }),
	      mu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema4) {
	      _inherits(n, _pu$Schema4);

	      function n() {
	        _classCallCheck(this, n);

	        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected() {
	          return "true or false";
	        }
	      }, {
	        key: "validate",
	        value: function validate(e) {
	          return "boolean" == typeof e;
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    t.BooleanSchema = n;
	  }),
	      gu = $e(function (e, t) {
	    function n(e, t) {
	      return "string" == typeof e || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
	    }function r(e, t) {
	      return void 0 === e ? [] : Array.isArray(e) ? e.map(function (e) {
	        return n(e, t);
	      }) : [n(e, t)];
	    }Object.defineProperty(t, "__esModule", { value: !0 }), t.recordFromArray = function (e, t) {
	      var n = Object.create(null);var _iteratorNormalCompletion22 = true;
	      var _didIteratorError22 = false;
	      var _iteratorError22 = undefined;

	      try {
	        for (var _iterator22 = e[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
	          var _r20 = _step22.value;
	          var _e29 = _r20[t];if (n[_e29]) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(_e29)));n[_e29] = _r20;
	        }
	      } catch (err) {
	        _didIteratorError22 = true;
	        _iteratorError22 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion22 && _iterator22.return) {
	            _iterator22.return();
	          }
	        } finally {
	          if (_didIteratorError22) {
	            throw _iteratorError22;
	          }
	        }
	      }

	      return n;
	    }, t.mapFromArray = function (e, t) {
	      var n = new Map();var _iteratorNormalCompletion23 = true;
	      var _didIteratorError23 = false;
	      var _iteratorError23 = undefined;

	      try {
	        for (var _iterator23 = e[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
	          var _r21 = _step23.value;
	          var _e30 = _r21[t];if (n.has(_e30)) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(_e30)));n.set(_e30, _r21);
	        }
	      } catch (err) {
	        _didIteratorError23 = true;
	        _iteratorError23 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion23 && _iterator23.return) {
	            _iterator23.return();
	          }
	        } finally {
	          if (_didIteratorError23) {
	            throw _iteratorError23;
	          }
	        }
	      }

	      return n;
	    }, t.createAutoChecklist = function () {
	      var e = Object.create(null);return function (t) {
	        var n = JSON.stringify(t);return !!e[n] || (e[n] = !0, !1);
	      };
	    }, t.partition = function (e, t) {
	      var n = [],
	          r = [];var _iteratorNormalCompletion24 = true;
	      var _didIteratorError24 = false;
	      var _iteratorError24 = undefined;

	      try {
	        for (var _iterator24 = e[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
	          var _u6 = _step24.value;
	          t(_u6) ? n.push(_u6) : r.push(_u6);
	        }
	      } catch (err) {
	        _didIteratorError24 = true;
	        _iteratorError24 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion24 && _iterator24.return) {
	            _iterator24.return();
	          }
	        } finally {
	          if (_didIteratorError24) {
	            throw _iteratorError24;
	          }
	        }
	      }

	      return [n, r];
	    }, t.isInt = function (e) {
	      return e === Math.floor(e);
	    }, t.comparePrimitive = function (e, t) {
	      if (e === t) return 0;var n = typeof e === "undefined" ? "undefined" : _typeof(e),
	          r = typeof t === "undefined" ? "undefined" : _typeof(t),
	          u = ["undefined", "object", "boolean", "number", "string"];return n !== r ? u.indexOf(n) - u.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t);
	    }, t.normalizeDefaultResult = function (e) {
	      return void 0 === e ? {} : e;
	    }, t.normalizeValidateResult = function (e, t) {
	      return !0 === e || (!1 === e ? { value: t } : e);
	    }, t.normalizeDeprecatedResult = function (e, t) {
	      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
	      return !1 !== e && (!0 === e ? !!n || [{ value: t }] : "value" in e ? [e] : 0 !== e.length && e);
	    }, t.normalizeTransferResult = n, t.normalizeForwardResult = r, t.normalizeRedirectResult = function (e, t) {
	      var n = r("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "redirect" in e ? e.redirect : e, t);return 0 === n.length ? { remain: t, redirect: n } : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
	    };
	  }),
	      Du = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema5) {
	      _inherits(n, _pu$Schema5);

	      function n(e) {
	        var _this8;

	        _classCallCheck(this, n);

	        (_this8 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)), _this8), _this8._choices = gu.mapFromArray(e.choices.map(function (e) {
	          return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : { value: e };
	        }), "value");return _this8;
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected(_ref11) {
	          var _this9 = this;

	          var e = _ref11.descriptor;
	          var t = Array.from(this._choices.keys()).map(function (e) {
	            return _this9._choices.get(e);
	          }).filter(function (e) {
	            return !e.deprecated;
	          }).map(function (e) {
	            return e.value;
	          }).sort(gu.comparePrimitive).map(e.value),
	              n = t.slice(0, -2),
	              r = t.slice(-2);return n.concat(r.join(" or ")).join(", ");
	        }
	      }, {
	        key: "validate",
	        value: function validate(e) {
	          return this._choices.has(e);
	        }
	      }, {
	        key: "deprecated",
	        value: function deprecated(e) {
	          var t = this._choices.get(e);return !(!t || !t.deprecated) && { value: e };
	        }
	      }, {
	        key: "forward",
	        value: function forward(e) {
	          var t = this._choices.get(e);return t ? t.forward : void 0;
	        }
	      }, {
	        key: "redirect",
	        value: function redirect(e) {
	          var t = this._choices.get(e);return t ? t.redirect : void 0;
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    t.ChoiceSchema = n;
	  }),
	      yu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema6) {
	      _inherits(n, _pu$Schema6);

	      function n() {
	        _classCallCheck(this, n);

	        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected() {
	          return "a number";
	        }
	      }, {
	        key: "validate",
	        value: function validate(e, t) {
	          return "number" == typeof e;
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    t.NumberSchema = n;
	  }),
	      Eu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_yu$NumberSchema) {
	      _inherits(n, _yu$NumberSchema);

	      function n() {
	        _classCallCheck(this, n);

	        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected() {
	          return "an integer";
	        }
	      }, {
	        key: "validate",
	        value: function validate(e, t) {
	          return !0 === t.normalizeValidateResult(_get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "validate", this).call(this, e, t), e) && gu.isInt(e);
	        }
	      }]);

	      return n;
	    }(yu.NumberSchema);

	    t.IntegerSchema = n;
	  }),
	      Cu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	    var n = function (_pu$Schema7) {
	      _inherits(n, _pu$Schema7);

	      function n() {
	        _classCallCheck(this, n);

	        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
	      }

	      _createClass(n, [{
	        key: "expected",
	        value: function expected() {
	          return "a string";
	        }
	      }, {
	        key: "validate",
	        value: function validate(e) {
	          return "string" == typeof e;
	        }
	      }]);

	      return n;
	    }(pu.Schema);

	    t.StringSchema = n;
	  }),
	      bu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(du, t), wr.__exportStar(fu, t), wr.__exportStar(hu, t), wr.__exportStar(mu, t), wr.__exportStar(Du, t), wr.__exportStar(Eu, t), wr.__exportStar(yu, t), wr.__exportStar(Cu, t);
	  }),
	      Au = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultDescriptor = Sr.apiDescriptor, t.defaultUnknownHandler = su.levenUnknownHandler, t.defaultInvalidHandler = ou.commonInvalidHandler, t.defaultDeprecatedHandler = nu.commonDeprecatedHandler;
	  }),
	      vu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.normalize = function (e, t, r) {
	      return new n(t, r).normalize(e);
	    };
	    var n = function () {
	      function n(e, t) {
	        _classCallCheck(this, n);

	        var _ref12 = t || {},
	            _ref12$logger = _ref12.logger,
	            _n19 = _ref12$logger === undefined ? console : _ref12$logger,
	            _ref12$descriptor = _ref12.descriptor,
	            r = _ref12$descriptor === undefined ? Au.defaultDescriptor : _ref12$descriptor,
	            _ref12$unknown = _ref12.unknown,
	            u = _ref12$unknown === undefined ? Au.defaultUnknownHandler : _ref12$unknown,
	            _ref12$invalid = _ref12.invalid,
	            o = _ref12$invalid === undefined ? Au.defaultInvalidHandler : _ref12$invalid,
	            _ref12$deprecated = _ref12.deprecated,
	            a = _ref12$deprecated === undefined ? Au.defaultDeprecatedHandler : _ref12$deprecated;

	        this._utils = { descriptor: r, logger: _n19 || { warn: function warn() {} }, schemas: gu.recordFromArray(e, "name"), normalizeDefaultResult: gu.normalizeDefaultResult, normalizeDeprecatedResult: gu.normalizeDeprecatedResult, normalizeForwardResult: gu.normalizeForwardResult, normalizeRedirectResult: gu.normalizeRedirectResult, normalizeValidateResult: gu.normalizeValidateResult }, this._unknownHandler = u, this._invalidHandler = o, this._deprecatedHandler = a, this.cleanHistory();
	      }

	      _createClass(n, [{
	        key: "cleanHistory",
	        value: function cleanHistory() {
	          this._hasDeprecationWarned = gu.createAutoChecklist();
	        }
	      }, {
	        key: "normalize",
	        value: function normalize(e) {
	          var _this13 = this;

	          var t = {},
	              n = [e],
	              r = function r() {
	            for (; 0 !== n.length;) {
	              var _e31 = n.shift(),
	                  _r22 = _this13._applyNormalization(_e31, t);n.push.apply(n, _toConsumableArray(_r22));
	            }
	          };r();var _iteratorNormalCompletion25 = true;
	          var _didIteratorError25 = false;
	          var _iteratorError25 = undefined;

	          try {
	            for (var _iterator25 = Object.keys(this._utils.schemas)[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
	              var _e32 = _step25.value;
	              var _r23 = this._utils.schemas[_e32];if (!(_e32 in t)) {
	                var _t22 = gu.normalizeDefaultResult(_r23.default(this._utils));"value" in _t22 && n.push(_defineProperty({}, _e32, _t22.value));
	              }
	            }
	          } catch (err) {
	            _didIteratorError25 = true;
	            _iteratorError25 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion25 && _iterator25.return) {
	                _iterator25.return();
	              }
	            } finally {
	              if (_didIteratorError25) {
	                throw _iteratorError25;
	              }
	            }
	          }

	          r();var _iteratorNormalCompletion26 = true;
	          var _didIteratorError26 = false;
	          var _iteratorError26 = undefined;

	          try {
	            for (var _iterator26 = Object.keys(this._utils.schemas)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
	              var _e33 = _step26.value;
	              var _n20 = this._utils.schemas[_e33];_e33 in t && (t[_e33] = _n20.postprocess(t[_e33], this._utils));
	            }
	          } catch (err) {
	            _didIteratorError26 = true;
	            _iteratorError26 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion26 && _iterator26.return) {
	                _iterator26.return();
	              }
	            } finally {
	              if (_didIteratorError26) {
	                throw _iteratorError26;
	              }
	            }
	          }

	          return t;
	        }
	      }, {
	        key: "_applyNormalization",
	        value: function _applyNormalization(e, t) {
	          var _this14 = this;

	          var n = [],
	              _gu$partition = gu.partition(Object.keys(e), function (e) {
	            return e in _this14._utils.schemas;
	          }),
	              _gu$partition2 = _slicedToArray(_gu$partition, 2),
	              r = _gu$partition2[0],
	              u = _gu$partition2[1];var _iteratorNormalCompletion27 = true;
	          var _didIteratorError27 = false;
	          var _iteratorError27 = undefined;

	          try {
	            var _loop5 = function _loop5() {
	              var u = _step27.value;
	              var r = _this14._utils.schemas[u],
	                  o = r.preprocess(e[u], _this14._utils),
	                  a = gu.normalizeValidateResult(r.validate(o, _this14._utils), o);if (!0 !== a) {
	                var _e34 = a.value,
	                    _t23 = _this14._invalidHandler(u, _e34, _this14._utils);throw "string" == typeof _t23 ? new Error(_t23) : _t23;
	              }var i = function i(_ref13) {
	                var e = _ref13.from,
	                    t = _ref13.to;
	                n.push("string" == typeof t ? _defineProperty({}, t, e) : _defineProperty({}, t.key, t.value));
	              },
	                  s = function s(_ref16) {
	                var e = _ref16.value,
	                    t = _ref16.redirectTo;
	                var n = gu.normalizeDeprecatedResult(r.deprecated(e, _this14._utils), o, !0);if (!1 !== n) if (!0 === n) _this14._hasDeprecationWarned(u) || _this14._utils.logger.warn(_this14._deprecatedHandler(u, t, _this14._utils));else {
	                  var _iteratorNormalCompletion29 = true;
	                  var _didIteratorError29 = false;
	                  var _iteratorError29 = undefined;

	                  try {
	                    for (var _iterator29 = n[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
	                      var _ref18 = _step29.value;
	                      var _e35 = _ref18.value;
	                      var _n21 = { key: u, value: _e35 };if (!_this14._hasDeprecationWarned(_n21)) {
	                        var _r24 = "string" == typeof t ? { key: t, value: _e35 } : t;_this14._utils.logger.warn(_this14._deprecatedHandler(_n21, _r24, _this14._utils));
	                      }
	                    }
	                  } catch (err) {
	                    _didIteratorError29 = true;
	                    _iteratorError29 = err;
	                  } finally {
	                    try {
	                      if (!_iteratorNormalCompletion29 && _iterator29.return) {
	                        _iterator29.return();
	                      }
	                    } finally {
	                      if (_didIteratorError29) {
	                        throw _iteratorError29;
	                      }
	                    }
	                  }
	                }
	              };gu.normalizeForwardResult(r.forward(o, _this14._utils), o).forEach(i);var l = gu.normalizeRedirectResult(r.redirect(o, _this14._utils), o);if (l.redirect.forEach(i), "remain" in l) {
	                var _e36 = l.remain;t[u] = u in t ? r.overlap(t[u], _e36, _this14._utils) : _e36, s({ value: _e36 });
	              }var _iteratorNormalCompletion30 = true;
	              var _didIteratorError30 = false;
	              var _iteratorError30 = undefined;

	              try {
	                for (var _iterator30 = l.redirect[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
	                  var _ref20 = _step30.value;
	                  var _e37 = _ref20.from,
	                      _t24 = _ref20.to;
	                  s({ value: _e37, redirectTo: _t24 });
	                }
	              } catch (err) {
	                _didIteratorError30 = true;
	                _iteratorError30 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion30 && _iterator30.return) {
	                    _iterator30.return();
	                  }
	                } finally {
	                  if (_didIteratorError30) {
	                    throw _iteratorError30;
	                  }
	                }
	              }
	            };

	            for (var _iterator27 = r[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
	              _loop5();
	            }
	          } catch (err) {
	            _didIteratorError27 = true;
	            _iteratorError27 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion27 && _iterator27.return) {
	                _iterator27.return();
	              }
	            } finally {
	              if (_didIteratorError27) {
	                throw _iteratorError27;
	              }
	            }
	          }

	          var _iteratorNormalCompletion28 = true;
	          var _didIteratorError28 = false;
	          var _iteratorError28 = undefined;

	          try {
	            for (var _iterator28 = u[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
	              var _r25 = _step28.value;
	              var _u7 = e[_r25],
	                  _o6 = this._unknownHandler(_r25, _u7, this._utils);if (_o6) {
	                var _iteratorNormalCompletion31 = true;
	                var _didIteratorError31 = false;
	                var _iteratorError31 = undefined;

	                try {
	                  for (var _iterator31 = Object.keys(_o6)[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
	                    var _e38 = _step31.value;
	                    var _r26 = _defineProperty({}, _e38, _o6[_e38]);_e38 in this._utils.schemas ? n.push(_r26) : Object.assign(t, _r26);
	                  }
	                } catch (err) {
	                  _didIteratorError31 = true;
	                  _iteratorError31 = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion31 && _iterator31.return) {
	                      _iterator31.return();
	                    }
	                  } finally {
	                    if (_didIteratorError31) {
	                      throw _iteratorError31;
	                    }
	                  }
	                }
	              }
	            }
	          } catch (err) {
	            _didIteratorError28 = true;
	            _iteratorError28 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion28 && _iterator28.return) {
	                _iterator28.return();
	              }
	            } finally {
	              if (_didIteratorError28) {
	                throw _iteratorError28;
	              }
	            }
	          }

	          return n;
	        }
	      }]);

	      return n;
	    }();

	    t.Normalizer = n;
	  }),
	      Fu = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), wr.__exportStar(Br, t), wr.__exportStar(cu, t), wr.__exportStar(bu, t), wr.__exportStar(vu, t), wr.__exportStar(pu, t);
	  });var xu = [],
	      Su = [],
	      wu = function wu(e, t) {
	    if (e === t) return 0;var n = e;e.length > t.length && (e = t, t = n);var r = e.length,
	        u = t.length;for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-u);) {
	      r--, u--;
	    }var o = void 0,
	        a = void 0,
	        i = void 0,
	        s = void 0,
	        l = 0;for (; l < r && e.charCodeAt(l) === t.charCodeAt(l);) {
	      l++;
	    }if (r -= l, u -= l, 0 === r) return u;var c = 0,
	        p = 0;for (; c < r;) {
	      Su[c] = e.charCodeAt(l + c), xu[c] = ++c;
	    }for (; p < u;) {
	      for (o = t.charCodeAt(l + p), i = p++, a = p, c = 0; c < r; c++) {
	        s = o === Su[c] ? i : i + 1, i = xu[c], a = xu[c] = i > a ? s > a ? a + 1 : s : s > i ? i + 1 : s;
	      }
	    }return a;
	  };var Bu = wu,
	      Tu = wu;Bu.default = Tu;var ku = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };var Nu = {};var _iteratorNormalCompletion32 = true;
	  var _didIteratorError32 = false;
	  var _iteratorError32 = undefined;

	  try {
	    for (var _iterator32 = Object.keys(ku)[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
	      var e = _step32.value;
	      Nu[ku[e]] = e;
	    }
	  } catch (err) {
	    _didIteratorError32 = true;
	    _iteratorError32 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion32 && _iterator32.return) {
	        _iterator32.return();
	      }
	    } finally {
	      if (_didIteratorError32) {
	        throw _iteratorError32;
	      }
	    }
	  }

	  var Ou = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };var Pu = Ou;var _iteratorNormalCompletion33 = true;
	  var _didIteratorError33 = false;
	  var _iteratorError33 = undefined;

	  try {
	    for (var _iterator33 = Object.keys(Ou)[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
	      var _e146 = _step33.value;
	      if (!("channels" in Ou[_e146])) throw new Error("missing channels property: " + _e146);if (!("labels" in Ou[_e146])) throw new Error("missing channel labels property: " + _e146);if (Ou[_e146].labels.length !== Ou[_e146].channels) throw new Error("channel and label counts mismatch: " + _e146);var _Ou$_e = Ou[_e146],
	          _t128 = _Ou$_e.channels,
	          _n95 = _Ou$_e.labels;
	      delete Ou[_e146].channels, delete Ou[_e146].labels, Object.defineProperty(Ou[_e146], "channels", { value: _t128 }), Object.defineProperty(Ou[_e146], "labels", { value: _n95 });
	    }
	  } catch (err) {
	    _didIteratorError33 = true;
	    _iteratorError33 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion33 && _iterator33.return) {
	        _iterator33.return();
	      }
	    } finally {
	      if (_didIteratorError33) {
	        throw _iteratorError33;
	      }
	    }
	  }

	  function _u(e) {
	    var t = function () {
	      var e = {},
	          t = Object.keys(Pu);for (var _n22 = t.length, _r28 = 0; _r28 < _n22; _r28++) {
	        e[t[_r28]] = { distance: -1, parent: null };
	      }return e;
	    }(),
	        n = [e];for (t[e].distance = 0; n.length;) {
	      var _e39 = n.pop(),
	          _r29 = Object.keys(Pu[_e39]);for (var _u8 = _r29.length, _o7 = 0; _o7 < _u8; _o7++) {
	        var _u9 = _r29[_o7],
	            _a6 = t[_u9];-1 === _a6.distance && (_a6.distance = t[_e39].distance + 1, _a6.parent = _e39, n.unshift(_u9));
	      }
	    }return t;
	  }function Iu(e, t) {
	    return function (n) {
	      return t(e(n));
	    };
	  }function ju(e, t) {
	    var n = [t[e].parent, e];var r = Pu[t[e].parent][e],
	        u = t[e].parent;for (; t[u].parent;) {
	      n.unshift(t[u].parent), r = Iu(Pu[t[u].parent][u], r), u = t[u].parent;
	    }return r.conversion = n, r;
	  }Ou.rgb.hsl = function (e) {
	    var t = e[0] / 255,
	        n = e[1] / 255,
	        r = e[2] / 255,
	        u = Math.min(t, n, r),
	        o = Math.max(t, n, r),
	        a = o - u;var i = void 0,
	        s = void 0;o === u ? i = 0 : t === o ? i = (n - r) / a : n === o ? i = 2 + (r - t) / a : r === o && (i = 4 + (t - n) / a), i = Math.min(60 * i, 360), i < 0 && (i += 360);var l = (u + o) / 2;return s = o === u ? 0 : l <= .5 ? a / (o + u) : a / (2 - o - u), [i, 100 * s, 100 * l];
	  }, Ou.rgb.hsv = function (e) {
	    var t = void 0,
	        n = void 0,
	        r = void 0,
	        u = void 0,
	        o = void 0;var a = e[0] / 255,
	        i = e[1] / 255,
	        s = e[2] / 255,
	        l = Math.max(a, i, s),
	        c = l - Math.min(a, i, s),
	        p = function p(e) {
	      return (l - e) / 6 / c + .5;
	    };return 0 === c ? (u = 0, o = 0) : (o = c / l, t = p(a), n = p(i), r = p(s), a === l ? u = r - n : i === l ? u = 1 / 3 + t - r : s === l && (u = 2 / 3 + n - t), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * o, 100 * l];
	  }, Ou.rgb.hwb = function (e) {
	    var t = e[0],
	        n = e[1];var r = e[2];var u = Ou.rgb.hsl(e)[0],
	        o = 1 / 255 * Math.min(t, Math.min(n, r));return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [u, 100 * o, 100 * r];
	  }, Ou.rgb.cmyk = function (e) {
	    var t = e[0] / 255,
	        n = e[1] / 255,
	        r = e[2] / 255,
	        u = Math.min(1 - t, 1 - n, 1 - r);return [100 * ((1 - t - u) / (1 - u) || 0), 100 * ((1 - n - u) / (1 - u) || 0), 100 * ((1 - r - u) / (1 - u) || 0), 100 * u];
	  }, Ou.rgb.keyword = function (e) {
	    var t = Nu[e];if (t) return t;var n = void 0,
	        r = 1 / 0;var _iteratorNormalCompletion34 = true;
	    var _didIteratorError34 = false;
	    var _iteratorError34 = undefined;

	    try {
	      for (var _iterator34 = Object.keys(ku)[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
	        var _t25 = _step34.value;
	        var _a7 = (o = ku[_t25], Math.pow((u = e)[0] - o[0], 2) + Math.pow(u[1] - o[1], 2) + Math.pow(u[2] - o[2], 2));_a7 < r && (r = _a7, n = _t25);
	      }
	    } catch (err) {
	      _didIteratorError34 = true;
	      _iteratorError34 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion34 && _iterator34.return) {
	          _iterator34.return();
	        }
	      } finally {
	        if (_didIteratorError34) {
	          throw _iteratorError34;
	        }
	      }
	    }

	    var u, o;return n;
	  }, Ou.keyword.rgb = function (e) {
	    return ku[e];
	  }, Ou.rgb.xyz = function (e) {
	    var t = e[0] / 255,
	        n = e[1] / 255,
	        r = e[2] / 255;t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;return [100 * (.4124 * t + .3576 * n + .1805 * r), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
	  }, Ou.rgb.lab = function (e) {
	    var t = Ou.rgb.xyz(e);var n = t[0],
	        r = t[1],
	        u = t[2];n /= 95.047, r /= 100, u /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116;return [116 * r - 16, 500 * (n - r), 200 * (r - u)];
	  }, Ou.hsl.rgb = function (e) {
	    var t = e[0] / 360,
	        n = e[1] / 100,
	        r = e[2] / 100;var u = void 0,
	        o = void 0,
	        a = void 0;if (0 === n) return a = 255 * r, [a, a, a];u = r < .5 ? r * (1 + n) : r + n - r * n;var i = 2 * r - u,
	        s = [0, 0, 0];for (var _e40 = 0; _e40 < 3; _e40++) {
	      o = t + 1 / 3 * -(_e40 - 1), o < 0 && o++, o > 1 && o--, a = 6 * o < 1 ? i + 6 * (u - i) * o : 2 * o < 1 ? u : 3 * o < 2 ? i + (u - i) * (2 / 3 - o) * 6 : i, s[_e40] = 255 * a;
	    }return s;
	  }, Ou.hsl.hsv = function (e) {
	    var t = e[0];var n = e[1] / 100,
	        r = e[2] / 100,
	        u = n;var o = Math.max(r, .01);r *= 2, n *= r <= 1 ? r : 2 - r, u *= o <= 1 ? o : 2 - o;return [t, 100 * (0 === r ? 2 * u / (o + u) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
	  }, Ou.hsv.rgb = function (e) {
	    var t = e[0] / 60,
	        n = e[1] / 100;var r = e[2] / 100;var u = Math.floor(t) % 6,
	        o = t - Math.floor(t),
	        a = 255 * r * (1 - n),
	        i = 255 * r * (1 - n * o),
	        s = 255 * r * (1 - n * (1 - o));switch (r *= 255, u) {case 0:
	        return [r, s, a];case 1:
	        return [i, r, a];case 2:
	        return [a, r, s];case 3:
	        return [a, i, r];case 4:
	        return [s, a, r];case 5:
	        return [r, a, i];}
	  }, Ou.hsv.hsl = function (e) {
	    var t = e[0],
	        n = e[1] / 100,
	        r = e[2] / 100,
	        u = Math.max(r, .01);var o = void 0,
	        a = void 0;a = (2 - n) * r;var i = (2 - n) * u;return o = n * u, o /= i <= 1 ? i : 2 - i, o = o || 0, a /= 2, [t, 100 * o, 100 * a];
	  }, Ou.hwb.rgb = function (e) {
	    var t = e[0] / 360;var n = e[1] / 100,
	        r = e[2] / 100;var u = n + r;var o = void 0;u > 1 && (n /= u, r /= u);var a = Math.floor(6 * t),
	        i = 1 - r;o = 6 * t - a, 0 != (1 & a) && (o = 1 - o);var s = n + o * (i - n);var l = void 0,
	        c = void 0,
	        p = void 0;switch (a) {default:case 6:case 0:
	        l = i, c = s, p = n;break;case 1:
	        l = s, c = i, p = n;break;case 2:
	        l = n, c = i, p = s;break;case 3:
	        l = n, c = s, p = i;break;case 4:
	        l = s, c = n, p = i;break;case 5:
	        l = i, c = n, p = s;}return [255 * l, 255 * c, 255 * p];
	  }, Ou.cmyk.rgb = function (e) {
	    var t = e[0] / 100,
	        n = e[1] / 100,
	        r = e[2] / 100,
	        u = e[3] / 100;return [255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u)), 255 * (1 - Math.min(1, r * (1 - u) + u))];
	  }, Ou.xyz.rgb = function (e) {
	    var t = e[0] / 100,
	        n = e[1] / 100,
	        r = e[2] / 100;var u = void 0,
	        o = void 0,
	        a = void 0;return u = 3.2406 * t + -1.5372 * n + -.4986 * r, o = -.9689 * t + 1.8758 * n + .0415 * r, a = .0557 * t + -.204 * n + 1.057 * r, u = u > .0031308 ? 1.055 * Math.pow(u, 1 / 2.4) - .055 : 12.92 * u, o = o > .0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - .055 : 12.92 * o, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, u = Math.min(Math.max(0, u), 1), o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), [255 * u, 255 * o, 255 * a];
	  }, Ou.xyz.lab = function (e) {
	    var t = e[0],
	        n = e[1],
	        r = e[2];t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116;return [116 * n - 16, 500 * (t - n), 200 * (n - r)];
	  }, Ou.lab.xyz = function (e) {
	    var t = void 0,
	        n = void 0,
	        r = void 0;n = (e[0] + 16) / 116, t = e[1] / 500 + n, r = n - e[2] / 200;var u = Math.pow(n, 3),
	        o = Math.pow(t, 3),
	        a = Math.pow(r, 3);return n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = o > .008856 ? o : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [t, n, r];
	  }, Ou.lab.lch = function (e) {
	    var t = e[0],
	        n = e[1],
	        r = e[2];var u = void 0;u = 360 * Math.atan2(r, n) / 2 / Math.PI, u < 0 && (u += 360);return [t, Math.sqrt(n * n + r * r), u];
	  }, Ou.lch.lab = function (e) {
	    var t = e[0],
	        n = e[1],
	        r = e[2] / 360 * 2 * Math.PI;return [t, n * Math.cos(r), n * Math.sin(r)];
	  }, Ou.rgb.ansi16 = function (e) {
	    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	    var _e41 = _slicedToArray(e, 3),
	        n = _e41[0],
	        r = _e41[1],
	        u = _e41[2];

	    var o = null === t ? Ou.rgb.hsv(e)[2] : t;if (o = Math.round(o / 50), 0 === o) return 30;var a = 30 + (Math.round(u / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));return 2 === o && (a += 60), a;
	  }, Ou.hsv.ansi16 = function (e) {
	    return Ou.rgb.ansi16(Ou.hsv.rgb(e), e[2]);
	  }, Ou.rgb.ansi256 = function (e) {
	    var t = e[0],
	        n = e[1],
	        r = e[2];if (t === n && n === r) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
	  }, Ou.ansi16.rgb = function (e) {
	    var t = e % 10;if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];var n = .5 * (1 + ~~(e > 50));return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
	  }, Ou.ansi256.rgb = function (e) {
	    if (e >= 232) {
	      var _t26 = 10 * (e - 232) + 8;return [_t26, _t26, _t26];
	    }var t = void 0;e -= 16;return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
	  }, Ou.rgb.hex = function (e) {
	    var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();return "000000".substring(t.length) + t;
	  }, Ou.hex.rgb = function (e) {
	    var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if (!t) return [0, 0, 0];var n = t[0];3 === t[0].length && (n = n.split("").map(function (e) {
	      return e + e;
	    }).join(""));var r = parseInt(n, 16);return [r >> 16 & 255, r >> 8 & 255, 255 & r];
	  }, Ou.rgb.hcg = function (e) {
	    var t = e[0] / 255,
	        n = e[1] / 255,
	        r = e[2] / 255,
	        u = Math.max(Math.max(t, n), r),
	        o = Math.min(Math.min(t, n), r),
	        a = u - o;var i = void 0,
	        s = void 0;return i = a < 1 ? o / (1 - a) : 0, s = a <= 0 ? 0 : u === t ? (n - r) / a % 6 : u === n ? 2 + (r - t) / a : 4 + (t - n) / a, s /= 6, s %= 1, [360 * s, 100 * a, 100 * i];
	  }, Ou.hsl.hcg = function (e) {
	    var t = e[1] / 100,
	        n = e[2] / 100,
	        r = n < .5 ? 2 * t * n : 2 * t * (1 - n);var u = 0;return r < 1 && (u = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * u];
	  }, Ou.hsv.hcg = function (e) {
	    var t = e[1] / 100,
	        n = e[2] / 100,
	        r = t * n;var u = 0;return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
	  }, Ou.hcg.rgb = function (e) {
	    var t = e[0] / 360,
	        n = e[1] / 100,
	        r = e[2] / 100;if (0 === n) return [255 * r, 255 * r, 255 * r];var u = [0, 0, 0],
	        o = t % 1 * 6,
	        a = o % 1,
	        i = 1 - a;var s = 0;switch (Math.floor(o)) {case 0:
	        u[0] = 1, u[1] = a, u[2] = 0;break;case 1:
	        u[0] = i, u[1] = 1, u[2] = 0;break;case 2:
	        u[0] = 0, u[1] = 1, u[2] = a;break;case 3:
	        u[0] = 0, u[1] = i, u[2] = 1;break;case 4:
	        u[0] = a, u[1] = 0, u[2] = 1;break;default:
	        u[0] = 1, u[1] = 0, u[2] = i;}return s = (1 - n) * r, [255 * (n * u[0] + s), 255 * (n * u[1] + s), 255 * (n * u[2] + s)];
	  }, Ou.hcg.hsv = function (e) {
	    var t = e[1] / 100,
	        n = t + e[2] / 100 * (1 - t);var r = 0;return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
	  }, Ou.hcg.hsl = function (e) {
	    var t = e[1] / 100,
	        n = e[2] / 100 * (1 - t) + .5 * t;var r = 0;return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
	  }, Ou.hcg.hwb = function (e) {
	    var t = e[1] / 100,
	        n = t + e[2] / 100 * (1 - t);return [e[0], 100 * (n - t), 100 * (1 - n)];
	  }, Ou.hwb.hcg = function (e) {
	    var t = e[1] / 100,
	        n = 1 - e[2] / 100,
	        r = n - t;var u = 0;return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
	  }, Ou.apple.rgb = function (e) {
	    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
	  }, Ou.rgb.apple = function (e) {
	    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
	  }, Ou.gray.rgb = function (e) {
	    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
	  }, Ou.gray.hsl = function (e) {
	    return [0, 0, e[0]];
	  }, Ou.gray.hsv = Ou.gray.hsl, Ou.gray.hwb = function (e) {
	    return [0, 100, e[0]];
	  }, Ou.gray.cmyk = function (e) {
	    return [0, 0, 0, e[0]];
	  }, Ou.gray.lab = function (e) {
	    return [e[0], 0, 0];
	  }, Ou.gray.hex = function (e) {
	    var t = 255 & Math.round(e[0] / 100 * 255),
	        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();return "000000".substring(n.length) + n;
	  }, Ou.rgb.gray = function (e) {
	    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
	  };var Mu = {};Object.keys(Pu).forEach(function (e) {
	    Mu[e] = {}, Object.defineProperty(Mu[e], "channels", { value: Pu[e].channels }), Object.defineProperty(Mu[e], "labels", { value: Pu[e].labels });var t = function (e) {
	      var t = _u(e),
	          n = {},
	          r = Object.keys(t);for (var _e42 = r.length, _u10 = 0; _u10 < _e42; _u10++) {
	        var _e43 = r[_u10];null !== t[_e43].parent && (n[_e43] = ju(_e43, t));
	      }return n;
	    }(e);Object.keys(t).forEach(function (n) {
	      var r = t[n];Mu[e][n] = function (e) {
	        var t = function t() {
	          for (var _len3 = arguments.length, _t28 = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            _t28[_key3] = arguments[_key3];
	          }

	          var n = _t28[0];if (null == n) return n;n.length > 1 && (_t28 = n);var r = e(_t28);if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) for (var _e44 = r.length, _t27 = 0; _t27 < _e44; _t27++) {
	            r[_t27] = Math.round(r[_t27]);
	          }return r;
	        };return "conversion" in e && (t.conversion = e.conversion), t;
	      }(r), Mu[e][n].raw = function (e) {
	        var t = function t() {
	          for (var _len4 = arguments.length, _t29 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            _t29[_key4] = arguments[_key4];
	          }

	          var n = _t29[0];return null == n ? n : (n.length > 1 && (_t29 = n), e(_t29));
	        };return "conversion" in e && (t.conversion = e.conversion), t;
	      }(r);
	    });
	  });var Lu = Mu,
	      Ru = $e(function (e) {
	    var t = function t(e, _t30) {
	      return function () {
	        var r = e.apply(undefined, arguments);return "[".concat(r + _t30, "m");
	      };
	    },
	        n = function n(e, t) {
	      return function () {
	        var r = e.apply(undefined, arguments);return "[".concat(38 + t, ";5;").concat(r, "m");
	      };
	    },
	        r = function r(e, t) {
	      return function () {
	        var r = e.apply(undefined, arguments);return "[".concat(38 + t, ";2;").concat(r[0], ";").concat(r[1], ";").concat(r[2], "m");
	      };
	    },
	        u = function u(e) {
	      return e;
	    },
	        o = function o(e, t, n) {
	      return [e, t, n];
	    },
	        a = function a(e, t, n) {
	      Object.defineProperty(e, t, { get: function get() {
	          var r = n();return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0 }), r;
	        }, enumerable: !0, configurable: !0 });
	    };var i = void 0;var s = function s(e, t, n, r) {
	      void 0 === i && (i = Lu);var u = r ? 10 : 0,
	          o = {};var _iteratorNormalCompletion35 = true;
	      var _didIteratorError35 = false;
	      var _iteratorError35 = undefined;

	      try {
	        for (var _iterator35 = Object.entries(i)[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
	          var _step35$value = _slicedToArray(_step35.value, 2),
	              _r30 = _step35$value[0],
	              _a8 = _step35$value[1];

	          var _i3 = "ansi16" === _r30 ? "ansi" : _r30;_r30 === t ? o[_i3] = e(n, u) : "object" == (typeof _a8 === "undefined" ? "undefined" : _typeof(_a8)) && (o[_i3] = e(_a8[t], u));
	        }
	      } catch (err) {
	        _didIteratorError35 = true;
	        _iteratorError35 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion35 && _iterator35.return) {
	            _iterator35.return();
	          }
	        } finally {
	          if (_didIteratorError35) {
	            throw _iteratorError35;
	          }
	        }
	      }

	      return o;
	    };Object.defineProperty(e, "exports", { enumerable: !0, get: function get() {
	        var e = new Map(),
	            i = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;var _iteratorNormalCompletion36 = true;
	        var _didIteratorError36 = false;
	        var _iteratorError36 = undefined;

	        try {
	          for (var _iterator36 = Object.entries(i)[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
	            var _step36$value = _slicedToArray(_step36.value, 2),
	                _t31 = _step36$value[0],
	                _n23 = _step36$value[1];

	            var _iteratorNormalCompletion37 = true;
	            var _didIteratorError37 = false;
	            var _iteratorError37 = undefined;

	            try {
	              for (var _iterator37 = Object.entries(_n23)[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
	                var _step37$value = _slicedToArray(_step37.value, 2),
	                    _t32 = _step37$value[0],
	                    _r31 = _step37$value[1];

	                i[_t32] = { open: "[".concat(_r31[0], "m"), close: "[".concat(_r31[1], "m") }, _n23[_t32] = i[_t32], e.set(_r31[0], _r31[1]);
	              }
	            } catch (err) {
	              _didIteratorError37 = true;
	              _iteratorError37 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion37 && _iterator37.return) {
	                  _iterator37.return();
	                }
	              } finally {
	                if (_didIteratorError37) {
	                  throw _iteratorError37;
	                }
	              }
	            }

	            Object.defineProperty(i, _t31, { value: _n23, enumerable: !1 });
	          }
	        } catch (err) {
	          _didIteratorError36 = true;
	          _iteratorError36 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion36 && _iterator36.return) {
	              _iterator36.return();
	            }
	          } finally {
	            if (_didIteratorError36) {
	              throw _iteratorError36;
	            }
	          }
	        }

	        return Object.defineProperty(i, "codes", { value: e, enumerable: !1 }), i.color.close = "[39m", i.bgColor.close = "[49m", a(i.color, "ansi", function () {
	          return s(t, "ansi16", u, !1);
	        }), a(i.color, "ansi256", function () {
	          return s(n, "ansi256", u, !1);
	        }), a(i.color, "ansi16m", function () {
	          return s(r, "rgb", o, !1);
	        }), a(i.bgColor, "ansi", function () {
	          return s(t, "ansi16", u, !0);
	        }), a(i.bgColor, "ansi256", function () {
	          return s(n, "ansi256", u, !0);
	        }), a(i.bgColor, "ansi16m", function () {
	          return s(r, "rgb", o, !0);
	        }), i;
	      } });
	  }),
	      qu = { isatty: function isatty() {
	      return !1;
	    } },
	      Vu = function Vu(e) {
	    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Re.argv;
	    var n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
	        r = t.indexOf(n + e),
	        u = t.indexOf("--");return -1 !== r && (-1 === u || r < u);
	  };var Wu = Re.env;
	  var $u = void 0;function Uu(e) {
	    return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
	  }function zu(e, t) {
	    if (0 === $u) return 0;if (Vu("color=16m") || Vu("color=full") || Vu("color=truecolor")) return 3;if (Vu("color=256")) return 2;if (e && !t && void 0 === $u) return 0;var n = $u || 0;if ("dumb" === Wu.TERM) return n;if ("win32" === Re.platform) {
	      var _e45 = Rr.release().split(".");return Number(_e45[0]) >= 10 && Number(_e45[2]) >= 10586 ? Number(_e45[2]) >= 14931 ? 3 : 2 : 1;
	    }if ("CI" in Wu) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
	      return e in Wu;
	    }) || "codeship" === Wu.CI_NAME ? 1 : n;if ("TEAMCITY_VERSION" in Wu) return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Wu.TEAMCITY_VERSION) ? 1 : 0
	    );if ("GITHUB_ACTIONS" in Wu) return 1;if ("truecolor" === Wu.COLORTERM) return 3;if ("TERM_PROGRAM" in Wu) {
	      var _e46 = parseInt((Wu.TERM_PROGRAM_VERSION || "").split(".")[0], 10);switch (Wu.TERM_PROGRAM) {case "iTerm.app":
	          return _e46 >= 3 ? 3 : 2;case "Apple_Terminal":
	          return 2;}
	    }return (/-256(color)?$/i.test(Wu.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Wu.TERM) || "COLORTERM" in Wu ? 1 : n
	    );
	  }Vu("no-color") || Vu("no-colors") || Vu("color=false") || Vu("color=never") ? $u = 0 : (Vu("color") || Vu("colors") || Vu("color=true") || Vu("color=always")) && ($u = 1), "FORCE_COLOR" in Wu && ($u = "true" === Wu.FORCE_COLOR ? 1 : "false" === Wu.FORCE_COLOR ? 0 : 0 === Wu.FORCE_COLOR.length ? 1 : Math.min(parseInt(Wu.FORCE_COLOR, 10), 3));var Ju = { supportsColor: function supportsColor(e) {
	      return Uu(zu(e, e && e.isTTY));
	    }, stdout: Uu(zu(!0, qu.isatty(1))), stderr: Uu(zu(!0, qu.isatty(2))) };var Gu = { stringReplaceAll: function stringReplaceAll(e, t, n) {
	      var r = e.indexOf(t);if (-1 === r) return e;var u = t.length;var o = 0,
	          a = "";do {
	        a += e.substr(o, r - o) + t + n, o = r + u, r = e.indexOf(t, o);
	      } while (-1 !== r);return a += e.substr(o), a;
	    }, stringEncaseCRLFWithFirstIndex: function stringEncaseCRLFWithFirstIndex(e, t, n, r) {
	      var u = 0,
	          o = "";do {
	        var _a9 = "\r" === e[r - 1];o += e.substr(u, (_a9 ? r - 1 : r) - u) + t + (_a9 ? "\r\n" : "\n") + n, u = r + 1, r = e.indexOf("\n", u);
	      } while (-1 !== r);return o += e.substr(u), o;
	    } };var Hu = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
	      Xu = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
	      Yu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
	      Ku = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
	      Qu = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);function Zu(e) {
	    var t = "u" === e[0],
	        n = "{" === e[1];return t && !n && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : Qu.get(e) || e;
	  }function eo(e, t) {
	    var n = [],
	        r = t.trim().split(/\s*,\s*/g);var u = void 0;var _iteratorNormalCompletion38 = true;
	    var _didIteratorError38 = false;
	    var _iteratorError38 = undefined;

	    try {
	      for (var _iterator38 = r[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
	        var _t33 = _step38.value;
	        var _r32 = Number(_t33);if (Number.isNaN(_r32)) {
	          if (!(u = _t33.match(Yu))) throw new Error("Invalid Chalk template style argument: ".concat(_t33, " (in style '").concat(e, "')"));n.push(u[2].replace(Ku, function (e, t, n) {
	            return t ? Zu(t) : n;
	          }));
	        } else n.push(_r32);
	      }
	    } catch (err) {
	      _didIteratorError38 = true;
	      _iteratorError38 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion38 && _iterator38.return) {
	          _iterator38.return();
	        }
	      } finally {
	        if (_didIteratorError38) {
	          throw _iteratorError38;
	        }
	      }
	    }

	    return n;
	  }function to(e) {
	    Xu.lastIndex = 0;var t = [];var n = void 0;for (; null !== (n = Xu.exec(e));) {
	      var _e47 = n[1];if (n[2]) {
	        var _r33 = eo(_e47, n[2]);t.push([_e47].concat(_r33));
	      } else t.push([_e47]);
	    }return t;
	  }function no(e, t) {
	    var n = {};var _iteratorNormalCompletion39 = true;
	    var _didIteratorError39 = false;
	    var _iteratorError39 = undefined;

	    try {
	      for (var _iterator39 = t[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
	        var _e48 = _step39.value;
	        var _iteratorNormalCompletion41 = true;
	        var _didIteratorError41 = false;
	        var _iteratorError41 = undefined;

	        try {
	          for (var _iterator41 = _e48.styles[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
	            var _t34 = _step41.value;
	            n[_t34[0]] = _e48.inverse ? null : _t34.slice(1);
	          }
	        } catch (err) {
	          _didIteratorError41 = true;
	          _iteratorError41 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion41 && _iterator41.return) {
	              _iterator41.return();
	            }
	          } finally {
	            if (_didIteratorError41) {
	              throw _iteratorError41;
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError39 = true;
	      _iteratorError39 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion39 && _iterator39.return) {
	          _iterator39.return();
	        }
	      } finally {
	        if (_didIteratorError39) {
	          throw _iteratorError39;
	        }
	      }
	    }

	    var r = e;var _iteratorNormalCompletion40 = true;
	    var _didIteratorError40 = false;
	    var _iteratorError40 = undefined;

	    try {
	      for (var _iterator40 = Object.entries(n)[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
	        var _step40$value = _slicedToArray(_step40.value, 2),
	            _e49 = _step40$value[0],
	            _t35 = _step40$value[1];

	        if (Array.isArray(_t35)) {
	          var _r34;

	          if (!(_e49 in r)) throw new Error("Unknown Chalk style: ".concat(_e49));r = _t35.length > 0 ? (_r34 = r)[_e49].apply(_r34, _toConsumableArray(_t35)) : r[_e49];
	        }
	      }
	    } catch (err) {
	      _didIteratorError40 = true;
	      _iteratorError40 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion40 && _iterator40.return) {
	          _iterator40.return();
	        }
	      } finally {
	        if (_didIteratorError40) {
	          throw _iteratorError40;
	        }
	      }
	    }

	    return r;
	  }var ro = function ro(e, t) {
	    var n = [],
	        r = [];var u = [];if (t.replace(Hu, function (t, o, a, i, s, l) {
	      if (o) u.push(Zu(o));else if (i) {
	        var _t36 = u.join("");u = [], r.push(0 === n.length ? _t36 : no(e, n)(_t36)), n.push({ inverse: a, styles: to(i) });
	      } else if (s) {
	        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");r.push(no(e, n)(u.join(""))), u = [], n.pop();
	      } else u.push(l);
	    }), r.push(u.join("")), n.length > 0) {
	      var _e50 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");throw new Error(_e50);
	    }return r.join("");
	  };var uo = Ju.stdout,
	      oo = Ju.stderr,
	      ao = Gu.stringReplaceAll,
	      io = Gu.stringEncaseCRLFWithFirstIndex,
	      so = Array.isArray,
	      lo = ["ansi", "ansi", "ansi256", "ansi16m"],
	      co = Object.create(null);

	  var po = function po(e) {
	    _classCallCheck(this, po);

	    return fo(e);
	  };

	  var fo = function fo(e) {
	    var t = {};return function (e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");var n = uo ? uo.level : 0;e.level = void 0 === t.level ? n : t.level;
	    }(t, e), t.template = function () {
	      for (var _len5 = arguments.length, e = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        e[_key5] = arguments[_key5];
	      }

	      return bo.apply(undefined, [t.template].concat(e));
	    }, Object.setPrototypeOf(t, ho.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = function () {
	      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
	    }, t.template.Instance = po, t.template;
	  };function ho(e) {
	    return fo(e);
	  }var _iteratorNormalCompletion42 = true;
	  var _didIteratorError42 = false;
	  var _iteratorError42 = undefined;

	  try {
	    var _loop9 = function _loop9() {
	      var _step42$value = _slicedToArray(_step42.value, 2),
	          e = _step42$value[0],
	          t = _step42$value[1];

	      co[e] = {
	        get: function get() {
	          var n = yo(this, Do(t.open, t.close, this._styler), this._isEmpty);return Object.defineProperty(this, e, { value: n }), n;
	        }
	      };
	    };

	    for (var _iterator42 = Object.entries(Ru)[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
	      _loop9();
	    }
	  } catch (err) {
	    _didIteratorError42 = true;
	    _iteratorError42 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion42 && _iterator42.return) {
	        _iterator42.return();
	      }
	    } finally {
	      if (_didIteratorError42) {
	        throw _iteratorError42;
	      }
	    }
	  }

	  co.visible = {
	    get: function get() {
	      var e = yo(this, this._styler, !0);return Object.defineProperty(this, "visible", { value: e }), e;
	    }
	  };var mo = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];var _iteratorNormalCompletion43 = true;
	  var _didIteratorError43 = false;
	  var _iteratorError43 = undefined;

	  try {
	    var _loop10 = function _loop10() {
	      var e = _step43.value;
	      co[e] = {
	        get: function get() {
	          var t = this.level;
	          return function () {
	            var _Ru$color$lo$t;

	            var r = Do((_Ru$color$lo$t = Ru.color[lo[t]])[e].apply(_Ru$color$lo$t, arguments), Ru.color.close, this._styler);return yo(this, r, this._isEmpty);
	          };
	        }
	      };
	    };

	    for (var _iterator43 = mo[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
	      _loop10();
	    }
	  } catch (err) {
	    _didIteratorError43 = true;
	    _iteratorError43 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion43 && _iterator43.return) {
	        _iterator43.return();
	      }
	    } finally {
	      if (_didIteratorError43) {
	        throw _iteratorError43;
	      }
	    }
	  }

	  var _iteratorNormalCompletion44 = true;
	  var _didIteratorError44 = false;
	  var _iteratorError44 = undefined;

	  try {
	    var _loop11 = function _loop11() {
	      var e = _step44.value;
	      co["bg" + e[0].toUpperCase() + e.slice(1)] = {
	        get: function get() {
	          var t = this.level;
	          return function () {
	            var _Ru$bgColor$lo$t;

	            var r = Do((_Ru$bgColor$lo$t = Ru.bgColor[lo[t]])[e].apply(_Ru$bgColor$lo$t, arguments), Ru.bgColor.close, this._styler);return yo(this, r, this._isEmpty);
	          };
	        }
	      };
	    };

	    for (var _iterator44 = mo[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
	      _loop11();
	    }
	  } catch (err) {
	    _didIteratorError44 = true;
	    _iteratorError44 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion44 && _iterator44.return) {
	        _iterator44.return();
	      }
	    } finally {
	      if (_didIteratorError44) {
	        throw _iteratorError44;
	      }
	    }
	  }

	  var go = Object.defineProperties(function () {}, Object.assign({}, co, { level: { enumerable: !0, get: function get() {
	        return this._generator.level;
	      },
	      set: function set(e) {
	        this._generator.level = e;
	      }
	    } })),
	      Do = function Do(e, t, n) {
	    var r = void 0,
	        u = void 0;return void 0 === n ? (r = e, u = t) : (r = n.openAll + e, u = t + n.closeAll), { open: e, close: t, openAll: r, closeAll: u, parent: n };
	  },
	      yo = function yo(e, t, n) {
	    var r = function r() {
	      for (var _len6 = arguments.length, e = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        e[_key6] = arguments[_key6];
	      }

	      return so(e[0]) && so(e[0].raw) ? Eo(r, bo.apply(undefined, [r].concat(e))) : Eo(r, 1 === e.length ? "" + e[0] : e.join(" "));
	    };return Object.setPrototypeOf(r, go), r._generator = e, r._styler = t, r._isEmpty = n, r;
	  },
	      Eo = function Eo(e, t) {
	    if (e.level <= 0 || !t) return e._isEmpty ? "" : t;var n = e._styler;if (void 0 === n) return t;var _n24 = n,
	        r = _n24.openAll,
	        u = _n24.closeAll;
	    if (-1 !== t.indexOf("")) for (; void 0 !== n;) {
	      t = ao(t, n.close, n.open), n = n.parent;
	    }var o = t.indexOf("\n");return -1 !== o && (t = io(t, u, r, o)), r + t + u;
	  };var Co = void 0;var bo = function bo(e) {
	    for (var _len7 = arguments.length, t = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	      t[_key7 - 1] = arguments[_key7];
	    }

	    var n = t[0];
	    if (!so(n) || !so(n.raw)) return t.join(" ");var r = t.slice(1),
	        u = [n.raw[0]];for (var _e51 = 1; _e51 < n.length; _e51++) {
	      u.push(String(r[_e51 - 1]).replace(/[{}\\]/g, "\\$&"), String(n.raw[_e51]));
	    }return void 0 === Co && (Co = ro), Co(e, u.join(""));
	  };Object.defineProperties(ho.prototype, co);var Ao = ho();Ao.supportsColor = uo, Ao.stderr = ho({ level: oo ? oo.level : 0 }), Ao.stderr.supportsColor = oo;var vo = Ao;var Fo = function Fo(e, t) {
	    for (var n = -1, r = t.length, u = e.length; ++n < r;) {
	      e[u + n] = t[n];
	    }return e;
	  },
	      xo = "object" == (typeof We === "undefined" ? "undefined" : _typeof(We)) && We && We.Object === Object && We,
	      So = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
	      wo = (xo || So || Function("return this")()).Symbol,
	      Bo = Object.prototype,
	      To = Bo.hasOwnProperty,
	      ko = Bo.toString,
	      No = wo ? wo.toStringTag : void 0;var Oo = function Oo(e) {
	    var t = To.call(e, No),
	        n = e[No];try {
	      e[No] = void 0;var r = !0;
	    } catch (e) {}var u = ko.call(e);return r && (t ? e[No] = n : delete e[No]), u;
	  },
	      Po = Object.prototype.toString;var _o = function _o(e) {
	    return Po.call(e);
	  },
	      Io = wo ? wo.toStringTag : void 0;var jo = function jo(e) {
	    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Io && Io in Object(e) ? Oo(e) : _o(e);
	  };var Mo = function Mo(e) {
	    return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	  };var Lo = function Lo(e) {
	    return Mo(e) && "[object Arguments]" == jo(e);
	  },
	      Ro = Object.prototype,
	      qo = Ro.hasOwnProperty,
	      Vo = Ro.propertyIsEnumerable,
	      Wo = Lo(function () {
	    return arguments;
	  }()) ? Lo : function (e) {
	    return Mo(e) && qo.call(e, "callee") && !Vo.call(e, "callee");
	  },
	      $o = Array.isArray,
	      Uo = wo ? wo.isConcatSpreadable : void 0;var zo = function zo(e) {
	    return $o(e) || Wo(e) || !!(Uo && e && e[Uo]);
	  };var Jo = function e(t, n, r, u, o) {
	    var a = -1,
	        i = t.length;for (r || (r = zo), o || (o = []); ++a < i;) {
	      var s = t[a];n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, u, o) : Fo(o, s) : u || (o[o.length] = s);
	    }return o;
	  };var Go = function Go(e) {
	    return (null == e ? 0 : e.length) ? Jo(e, 1) : [];
	  };var Ho = { key: function key(e) {
	      return 1 === e.length ? "-".concat(e) : "--".concat(e);
	    }, value: function value(e) {
	      return Fu.apiDescriptor.value(e);
	    }, pair: function pair(_ref21) {
	      var e = _ref21.key,
	          t = _ref21.value;
	      return !1 === t ? "--no-".concat(e) : !0 === t ? Ho.key(e) : "" === t ? "".concat(Ho.key(e), " without an argument") : "".concat(Ho.key(e), "=").concat(t);
	    } };
	  var Xo = function (_Fu$ChoiceSchema) {
	    _inherits(Xo, _Fu$ChoiceSchema);

	    function Xo(_ref22) {
	      var _this15;

	      var e = _ref22.name,
	          t = _ref22.flags;

	      _classCallCheck(this, Xo);

	      (_this15 = _possibleConstructorReturn(this, (Xo.__proto__ || Object.getPrototypeOf(Xo)).call(this, { name: e, choices: t })), _this15), _this15._flags = t.slice().sort();return _this15;
	    }

	    _createClass(Xo, [{
	      key: "preprocess",
	      value: function preprocess(e, t) {
	        if ("string" == typeof e && 0 !== e.length && !this._flags.includes(e)) {
	          var _n25 = this._flags.find(function (t) {
	            return Bu(t, e) < 3;
	          });if (_n25) return t.logger.warn(["Unknown flag ".concat(vo.yellow(t.descriptor.value(e)), ","), "did you mean ".concat(vo.blue(t.descriptor.value(_n25)), "?")].join(" ")), _n25;
	        }return e;
	      }
	    }, {
	      key: "expected",
	      value: function expected() {
	        return "a flag";
	      }
	    }]);

	    return Xo;
	  }(Fu.ChoiceSchema);

	  var Yo = void 0;function Ko(t, n) {
	    var _ref23 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	        r = _ref23.logger,
	        _ref23$isCLI = _ref23.isCLI,
	        u = _ref23$isCLI === undefined ? !1 : _ref23$isCLI,
	        _ref23$passThrough = _ref23.passThrough,
	        o = _ref23$passThrough === undefined ? !1 : _ref23$passThrough;

	    var a = o ? Array.isArray(o) ? function (e, t) {
	      return o.includes(e) ? _defineProperty({}, e, t) : void 0;
	    } : function (e, t) {
	      return _defineProperty({}, e, t);
	    } : function (t, n, r) {
	      var u = e(r.schemas, ["_"]);return Fu.levenUnknownHandler(t, n, Object.assign({}, r, { schemas: u }));
	    },
	        i = u ? Ho : Fu.apiDescriptor,
	        s = function (e, _ref26) {
	      var t = _ref26.isCLI;
	      var n = [];t && n.push(Fu.AnySchema.create({ name: "_" }));var _iteratorNormalCompletion45 = true;
	      var _didIteratorError45 = false;
	      var _iteratorError45 = undefined;

	      try {
	        for (var _iterator45 = e[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
	          var _r35 = _step45.value;
	          n.push(Qo(_r35, { isCLI: t, optionInfos: e })), _r35.alias && t && n.push(Fu.AliasSchema.create({ name: _r35.alias, sourceName: _r35.name }));
	        }
	      } catch (err) {
	        _didIteratorError45 = true;
	        _iteratorError45 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion45 && _iterator45.return) {
	            _iterator45.return();
	          }
	        } finally {
	          if (_didIteratorError45) {
	            throw _iteratorError45;
	          }
	        }
	      }

	      return n;
	    }(n, { isCLI: u }),
	        l = new Fu.Normalizer(s, { logger: r, unknown: a, descriptor: i }),
	        c = !1 !== r;c && Yo && (l._hasDeprecationWarned = Yo);var p = l.normalize(t);return c && (Yo = l._hasDeprecationWarned), p;
	  }function Qo(e, _ref27) {
	    var t = _ref27.isCLI,
	        n = _ref27.optionInfos;
	    var r = void 0;var u = { name: e.name },
	        o = {};switch (e.type) {case "int":
	        r = Fu.IntegerSchema, t && (u.preprocess = function (e) {
	          return Number(e);
	        });break;case "string":
	        r = Fu.StringSchema;break;case "choice":
	        r = Fu.ChoiceSchema, u.choices = e.choices.map(function (t) {
	          return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.redirect ? Object.assign({}, t, { redirect: { to: { key: e.name, value: t.redirect } } }) : t;
	        });break;case "boolean":
	        r = Fu.BooleanSchema;break;case "flag":
	        r = Xo, u.flags = Go(n.map(function (e) {
	          return [e.alias, e.description && e.name, e.oppositeDescription && "no-".concat(e.name)].filter(Boolean);
	        }));break;case "path":
	        r = Fu.StringSchema;break;default:
	        throw new Error("Unexpected type ".concat(e.type));}if (e.exception ? u.validate = function (t, n, r) {
	      return e.exception(t) || n.validate(t, r);
	    } : u.validate = function (e, t, n) {
	      return void 0 === e || t.validate(e, n);
	    }, e.redirect && (o.redirect = function (t) {
	      return t ? { to: { key: e.redirect.option, value: e.redirect.value } } : void 0;
	    }), e.deprecated && (o.deprecated = !0), t && !e.array) {
	      var _e52 = u.preprocess || function (e) {
	        return e;
	      };u.preprocess = function (t, n, r) {
	        return n.preprocess(_e52(Array.isArray(t) ? t[t.length - 1] : t), r);
	      };
	    }return e.array ? Fu.ArraySchema.create(Object.assign({}, t ? { preprocess: function preprocess(e) {
	        return [].concat(e);
	      } } : {}, o, { valueSchema: r.create(u) })) : r.create(Object.assign({}, u, o));
	  }var Zo = { normalizeApiOptions: function normalizeApiOptions(e, t, n) {
	      return Ko(e, t, n);
	    }, normalizeCliOptions: function normalizeCliOptions(e, t, n) {
	      return Ko(e, t, Object.assign({ isCLI: !0 }, n));
	    } };function ea(e, t) {
	    var _ref28 = t || {},
	        n = _ref28.ignoreDecorators;

	    if (!n) {
	      var _t37 = e.declaration && e.declaration.decorators || e.decorators;if (_t37 && _t37.length > 0) return ea(_t37[0]);
	    }return e.range ? e.range[0] : e.start;
	  }function ta(e) {
	    var t = e.range ? e.range[1] : e.end;return e.typeAnnotation ? Math.max(t, ta(e.typeAnnotation)) : t;
	  }var na = { locStart: ea, locEnd: ta, composeLoc: function composeLoc(e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
	      var n = ea(e);return [n, "number" == typeof t ? n + t : ta(t)];
	    } },
	      ra = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
	      var t = { type: "invalid", value: e[0], closed: void 0 };return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t;
	    };
	  }),
	      ua = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.isIdentifierStart = l, t.isIdentifierChar = c, t.isIdentifierName = function (e) {
	      var t = !0;for (var _n26 = 0, _r36 = Array.from(e); _n26 < _r36.length; _n26++) {
	        var _e53 = _r36[_n26].codePointAt(0);if (t) {
	          if (!l(_e53)) return !1;t = !1;
	        } else if (!c(_e53)) return !1;
	      }return !t;
	    };var n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
	        r = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";var u = new RegExp("[" + n + "]"),
	        o = new RegExp("[" + n + r + "]");n = r = null;var a = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
	        i = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];function s(e, t) {
	      var n = 65536;for (var _r37 = 0, _u11 = t.length; _r37 < _u11; _r37 += 2) {
	        if (n += t[_r37], n > e) return !1;if (n += t[_r37 + 1], n >= e) return !0;
	      }return !1;
	    }function l(e) {
	      return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : s(e, a)));
	    }function c(e) {
	      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : s(e, a) || s(e, i))));
	    }
	  }),
	      oa = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.isReservedWord = i, t.isStrictReservedWord = s, t.isStrictBindOnlyReservedWord = l, t.isStrictBindReservedWord = function (e, t) {
	      return s(e, t) || l(e);
	    }, t.isKeyword = function (e) {
	      return u.has(e);
	    };var n = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
	        r = ["eval", "arguments"],
	        u = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]),
	        o = new Set(n),
	        a = new Set(r);function i(e, t) {
	      return t && "await" === e || "enum" === e;
	    }function s(e, t) {
	      return i(e, t) || o.has(e);
	    }function l(e) {
	      return a.has(e);
	    }
	  }),
	      aa = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "isIdentifierName", { enumerable: !0, get: function get() {
	        return ua.isIdentifierName;
	      } }), Object.defineProperty(t, "isIdentifierChar", { enumerable: !0, get: function get() {
	        return ua.isIdentifierChar;
	      } }), Object.defineProperty(t, "isIdentifierStart", { enumerable: !0, get: function get() {
	        return ua.isIdentifierStart;
	      } }), Object.defineProperty(t, "isReservedWord", { enumerable: !0, get: function get() {
	        return oa.isReservedWord;
	      } }), Object.defineProperty(t, "isStrictBindOnlyReservedWord", { enumerable: !0, get: function get() {
	        return oa.isStrictBindOnlyReservedWord;
	      } }), Object.defineProperty(t, "isStrictBindReservedWord", { enumerable: !0, get: function get() {
	        return oa.isStrictBindReservedWord;
	      } }), Object.defineProperty(t, "isStrictReservedWord", { enumerable: !0, get: function get() {
	        return oa.isStrictReservedWord;
	      } }), Object.defineProperty(t, "isKeyword", { enumerable: !0, get: function get() {
	        return oa.isKeyword;
	      } });
	  }),
	      ia = /[|\\{}()[\]^$+*?.]/g,
	      sa = function sa(e) {
	    if ("string" != typeof e) throw new TypeError("Expected a string");return e.replace(ia, "\\$&");
	  },
	      la = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
	      ca = $e(function (e) {
	    var t = {};for (var n in la) {
	      la.hasOwnProperty(n) && (t[la[n]] = n);
	    }var r = e.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };for (var u in r) {
	      if (r.hasOwnProperty(u)) {
	        if (!("channels" in r[u])) throw new Error("missing channels property: " + u);if (!("labels" in r[u])) throw new Error("missing channel labels property: " + u);if (r[u].labels.length !== r[u].channels) throw new Error("channel and label counts mismatch: " + u);var o = r[u].channels,
	            a = r[u].labels;delete r[u].channels, delete r[u].labels, Object.defineProperty(r[u], "channels", { value: o }), Object.defineProperty(r[u], "labels", { value: a });
	      }
	    }r.rgb.hsl = function (e) {
	      var t,
	          n,
	          r = e[0] / 255,
	          u = e[1] / 255,
	          o = e[2] / 255,
	          a = Math.min(r, u, o),
	          i = Math.max(r, u, o),
	          s = i - a;return i === a ? t = 0 : r === i ? t = (u - o) / s : u === i ? t = 2 + (o - r) / s : o === i && (t = 4 + (r - u) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + i) / 2, [t, 100 * (i === a ? 0 : n <= .5 ? s / (i + a) : s / (2 - i - a)), 100 * n];
	    }, r.rgb.hsv = function (e) {
	      var t,
	          n,
	          r,
	          u,
	          o,
	          a = e[0] / 255,
	          i = e[1] / 255,
	          s = e[2] / 255,
	          l = Math.max(a, i, s),
	          c = l - Math.min(a, i, s),
	          p = function p(e) {
	        return (l - e) / 6 / c + .5;
	      };return 0 === c ? u = o = 0 : (o = c / l, t = p(a), n = p(i), r = p(s), a === l ? u = r - n : i === l ? u = 1 / 3 + t - r : s === l && (u = 2 / 3 + n - t), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * o, 100 * l];
	    }, r.rgb.hwb = function (e) {
	      var t = e[0],
	          n = e[1],
	          u = e[2];return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, u))), 100 * (u = 1 - 1 / 255 * Math.max(t, Math.max(n, u)))];
	    }, r.rgb.cmyk = function (e) {
	      var t,
	          n = e[0] / 255,
	          r = e[1] / 255,
	          u = e[2] / 255;return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - u))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - u - t) / (1 - t) || 0), 100 * t];
	    }, r.rgb.keyword = function (e) {
	      var n = t[e];if (n) return n;var r,
	          u,
	          o,
	          a = 1 / 0;for (var i in la) {
	        if (la.hasOwnProperty(i)) {
	          var s = la[i],
	              l = (u = e, o = s, Math.pow(u[0] - o[0], 2) + Math.pow(u[1] - o[1], 2) + Math.pow(u[2] - o[2], 2));l < a && (a = l, r = i);
	        }
	      }return r;
	    }, r.keyword.rgb = function (e) {
	      return la[e];
	    }, r.rgb.xyz = function (e) {
	      var t = e[0] / 255,
	          n = e[1] / 255,
	          r = e[2] / 255;return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
	    }, r.rgb.lab = function (e) {
	      var t = r.rgb.xyz(e),
	          n = t[0],
	          u = t[1],
	          o = t[2];return u /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116) - 16, 500 * (n - u), 200 * (u - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))];
	    }, r.hsl.rgb = function (e) {
	      var t,
	          n,
	          r,
	          u,
	          o,
	          a = e[0] / 360,
	          i = e[1] / 100,
	          s = e[2] / 100;if (0 === i) return [o = 255 * s, o, o];t = 2 * s - (n = s < .5 ? s * (1 + i) : s + i - s * i), u = [0, 0, 0];for (var l = 0; l < 3; l++) {
	        (r = a + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, u[l] = 255 * o;
	      }return u;
	    }, r.hsl.hsv = function (e) {
	      var t = e[0],
	          n = e[1] / 100,
	          r = e[2] / 100,
	          u = n,
	          o = Math.max(r, .01);return n *= (r *= 2) <= 1 ? r : 2 - r, u *= o <= 1 ? o : 2 - o, [t, 100 * (0 === r ? 2 * u / (o + u) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
	    }, r.hsv.rgb = function (e) {
	      var t = e[0] / 60,
	          n = e[1] / 100,
	          r = e[2] / 100,
	          u = Math.floor(t) % 6,
	          o = t - Math.floor(t),
	          a = 255 * r * (1 - n),
	          i = 255 * r * (1 - n * o),
	          s = 255 * r * (1 - n * (1 - o));switch (r *= 255, u) {case 0:
	          return [r, s, a];case 1:
	          return [i, r, a];case 2:
	          return [a, r, s];case 3:
	          return [a, i, r];case 4:
	          return [s, a, r];case 5:
	          return [r, a, i];}
	    }, r.hsv.hsl = function (e) {
	      var t,
	          n,
	          r,
	          u = e[0],
	          o = e[1] / 100,
	          a = e[2] / 100,
	          i = Math.max(a, .01);return r = (2 - o) * a, n = o * i, [u, 100 * (n = (n /= (t = (2 - o) * i) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
	    }, r.hwb.rgb = function (e) {
	      var t,
	          n,
	          r,
	          u,
	          o,
	          a,
	          i,
	          s = e[0] / 360,
	          l = e[1] / 100,
	          c = e[2] / 100,
	          p = l + c;switch (p > 1 && (l /= p, c /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), u = l + r * ((n = 1 - c) - l), t) {default:case 6:case 0:
	          o = n, a = u, i = l;break;case 1:
	          o = u, a = n, i = l;break;case 2:
	          o = l, a = n, i = u;break;case 3:
	          o = l, a = u, i = n;break;case 4:
	          o = u, a = l, i = n;break;case 5:
	          o = n, a = l, i = u;}return [255 * o, 255 * a, 255 * i];
	    }, r.cmyk.rgb = function (e) {
	      var t = e[0] / 100,
	          n = e[1] / 100,
	          r = e[2] / 100,
	          u = e[3] / 100;return [255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u)), 255 * (1 - Math.min(1, r * (1 - u) + u))];
	    }, r.xyz.rgb = function (e) {
	      var t,
	          n,
	          r,
	          u = e[0] / 100,
	          o = e[1] / 100,
	          a = e[2] / 100;return n = -.9689 * u + 1.8758 * o + .0415 * a, r = .0557 * u + -.204 * o + 1.057 * a, t = (t = 3.2406 * u + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
	    }, r.xyz.lab = function (e) {
	      var t = e[0],
	          n = e[1],
	          r = e[2];return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
	    }, r.lab.xyz = function (e) {
	      var t,
	          n,
	          r,
	          u = e[0];t = e[1] / 500 + (n = (u + 16) / 116), r = n - e[2] / 200;var o = Math.pow(n, 3),
	          a = Math.pow(t, 3),
	          i = Math.pow(r, 3);return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = a > .008856 ? a : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883];
	    }, r.lab.lch = function (e) {
	      var t,
	          n = e[0],
	          r = e[1],
	          u = e[2];return (t = 360 * Math.atan2(u, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + u * u), t];
	    }, r.lch.lab = function (e) {
	      var t,
	          n = e[0],
	          r = e[1];return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)];
	    }, r.rgb.ansi16 = function (e) {
	      var t = e[0],
	          n = e[1],
	          u = e[2],
	          o = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];if (0 === (o = Math.round(o / 50))) return 30;var a = 30 + (Math.round(u / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));return 2 === o && (a += 60), a;
	    }, r.hsv.ansi16 = function (e) {
	      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
	    }, r.rgb.ansi256 = function (e) {
	      var t = e[0],
	          n = e[1],
	          r = e[2];return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
	    }, r.ansi16.rgb = function (e) {
	      var t = e % 10;if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];var n = .5 * (1 + ~~(e > 50));return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
	    }, r.ansi256.rgb = function (e) {
	      if (e >= 232) {
	        var t = 10 * (e - 232) + 8;return [t, t, t];
	      }var n;return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
	    }, r.rgb.hex = function (e) {
	      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();return "000000".substring(t.length) + t;
	    }, r.hex.rgb = function (e) {
	      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if (!t) return [0, 0, 0];var n = t[0];3 === t[0].length && (n = n.split("").map(function (e) {
	        return e + e;
	      }).join(""));var r = parseInt(n, 16);return [r >> 16 & 255, r >> 8 & 255, 255 & r];
	    }, r.rgb.hcg = function (e) {
	      var t,
	          n = e[0] / 255,
	          r = e[1] / 255,
	          u = e[2] / 255,
	          o = Math.max(Math.max(n, r), u),
	          a = Math.min(Math.min(n, r), u),
	          i = o - a;return t = i <= 0 ? 0 : o === n ? (r - u) / i % 6 : o === r ? 2 + (u - n) / i : 4 + (n - r) / i + 4, t /= 6, [360 * (t %= 1), 100 * i, 100 * (i < 1 ? a / (1 - i) : 0)];
	    }, r.hsl.hcg = function (e) {
	      var t = e[1] / 100,
	          n = e[2] / 100,
	          r = 1,
	          u = 0;return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (u = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * u];
	    }, r.hsv.hcg = function (e) {
	      var t = e[1] / 100,
	          n = e[2] / 100,
	          r = t * n,
	          u = 0;return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
	    }, r.hcg.rgb = function (e) {
	      var t = e[0] / 360,
	          n = e[1] / 100,
	          r = e[2] / 100;if (0 === n) return [255 * r, 255 * r, 255 * r];var u,
	          o = [0, 0, 0],
	          a = t % 1 * 6,
	          i = a % 1,
	          s = 1 - i;switch (Math.floor(a)) {case 0:
	          o[0] = 1, o[1] = i, o[2] = 0;break;case 1:
	          o[0] = s, o[1] = 1, o[2] = 0;break;case 2:
	          o[0] = 0, o[1] = 1, o[2] = i;break;case 3:
	          o[0] = 0, o[1] = s, o[2] = 1;break;case 4:
	          o[0] = i, o[1] = 0, o[2] = 1;break;default:
	          o[0] = 1, o[1] = 0, o[2] = s;}return u = (1 - n) * r, [255 * (n * o[0] + u), 255 * (n * o[1] + u), 255 * (n * o[2] + u)];
	    }, r.hcg.hsv = function (e) {
	      var t = e[1] / 100,
	          n = t + e[2] / 100 * (1 - t),
	          r = 0;return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
	    }, r.hcg.hsl = function (e) {
	      var t = e[1] / 100,
	          n = e[2] / 100 * (1 - t) + .5 * t,
	          r = 0;return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
	    }, r.hcg.hwb = function (e) {
	      var t = e[1] / 100,
	          n = t + e[2] / 100 * (1 - t);return [e[0], 100 * (n - t), 100 * (1 - n)];
	    }, r.hwb.hcg = function (e) {
	      var t = e[1] / 100,
	          n = 1 - e[2] / 100,
	          r = n - t,
	          u = 0;return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
	    }, r.apple.rgb = function (e) {
	      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
	    }, r.rgb.apple = function (e) {
	      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
	    }, r.gray.rgb = function (e) {
	      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
	    }, r.gray.hsl = r.gray.hsv = function (e) {
	      return [0, 0, e[0]];
	    }, r.gray.hwb = function (e) {
	      return [0, 100, e[0]];
	    }, r.gray.cmyk = function (e) {
	      return [0, 0, 0, e[0]];
	    }, r.gray.lab = function (e) {
	      return [e[0], 0, 0];
	    }, r.gray.hex = function (e) {
	      var t = 255 & Math.round(e[0] / 100 * 255),
	          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();return "000000".substring(n.length) + n;
	    }, r.rgb.gray = function (e) {
	      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
	    };
	  });function pa(e) {
	    var t = function () {
	      for (var e = {}, t = Object.keys(ca), n = t.length, r = 0; r < n; r++) {
	        e[t[r]] = { distance: -1, parent: null };
	      }return e;
	    }(),
	        n = [e];for (t[e].distance = 0; n.length;) {
	      for (var r = n.pop(), u = Object.keys(ca[r]), o = u.length, a = 0; a < o; a++) {
	        var i = u[a],
	            s = t[i];-1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(i));
	      }
	    }return t;
	  }function da(e, t) {
	    return function (n) {
	      return t(e(n));
	    };
	  }function fa(e, t) {
	    for (var n = [t[e].parent, e], r = ca[t[e].parent][e], u = t[e].parent; t[u].parent;) {
	      n.unshift(t[u].parent), r = da(ca[t[u].parent][u], r), u = t[u].parent;
	    }return r.conversion = n, r;
	  }var ha = {};Object.keys(ca).forEach(function (e) {
	    ha[e] = {}, Object.defineProperty(ha[e], "channels", { value: ca[e].channels }), Object.defineProperty(ha[e], "labels", { value: ca[e].labels });var t = function (e) {
	      for (var t = pa(e), n = {}, r = Object.keys(t), u = r.length, o = 0; o < u; o++) {
	        var a = r[o];null !== t[a].parent && (n[a] = fa(a, t));
	      }return n;
	    }(e);Object.keys(t).forEach(function (n) {
	      var r = t[n];ha[e][n] = function (e) {
	        var t = function t(_t38) {
	          if (null == _t38) return _t38;arguments.length > 1 && (_t38 = Array.prototype.slice.call(arguments));var n = e(_t38);if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) for (var r = n.length, u = 0; u < r; u++) {
	            n[u] = Math.round(n[u]);
	          }return n;
	        };return "conversion" in e && (t.conversion = e.conversion), t;
	      }(r), ha[e][n].raw = function (e) {
	        var t = function t(_t39) {
	          return null == _t39 ? _t39 : (arguments.length > 1 && (_t39 = Array.prototype.slice.call(arguments)), e(_t39));
	        };return "conversion" in e && (t.conversion = e.conversion), t;
	      }(r);
	    });
	  });var ma = ha,
	      ga = $e(function (e) {
	    var t = function t(e, _t40) {
	      return function () {
	        var n = e.apply(ma, arguments);return "[".concat(n + _t40, "m");
	      };
	    },
	        n = function n(e, t) {
	      return function () {
	        var n = e.apply(ma, arguments);return "[".concat(38 + t, ";5;").concat(n, "m");
	      };
	    },
	        r = function r(e, t) {
	      return function () {
	        var n = e.apply(ma, arguments);return "[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
	      };
	    };Object.defineProperty(e, "exports", { enumerable: !0, get: function get() {
	        var e = new Map(),
	            u = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };u.color.grey = u.color.gray;var _iteratorNormalCompletion46 = true;
	        var _didIteratorError46 = false;
	        var _iteratorError46 = undefined;

	        try {
	          for (var _iterator46 = Object.keys(u)[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
	            var _t41 = _step46.value;
	            var _n27 = u[_t41];var _iteratorNormalCompletion48 = true;
	            var _didIteratorError48 = false;
	            var _iteratorError48 = undefined;

	            try {
	              for (var _iterator48 = Object.keys(_n27)[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
	                var _t42 = _step48.value;
	                var _r38 = _n27[_t42];u[_t42] = { open: "[".concat(_r38[0], "m"), close: "[".concat(_r38[1], "m") }, _n27[_t42] = u[_t42], e.set(_r38[0], _r38[1]);
	              }
	            } catch (err) {
	              _didIteratorError48 = true;
	              _iteratorError48 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion48 && _iterator48.return) {
	                  _iterator48.return();
	                }
	              } finally {
	                if (_didIteratorError48) {
	                  throw _iteratorError48;
	                }
	              }
	            }

	            Object.defineProperty(u, _t41, { value: _n27, enumerable: !1 }), Object.defineProperty(u, "codes", { value: e, enumerable: !1 });
	          }
	        } catch (err) {
	          _didIteratorError46 = true;
	          _iteratorError46 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion46 && _iterator46.return) {
	              _iterator46.return();
	            }
	          } finally {
	            if (_didIteratorError46) {
	              throw _iteratorError46;
	            }
	          }
	        }

	        var o = function o(e) {
	          return e;
	        },
	            a = function a(e, t, n) {
	          return [e, t, n];
	        };u.color.close = "[39m", u.bgColor.close = "[49m", u.color.ansi = { ansi: t(o, 0) }, u.color.ansi256 = { ansi256: n(o, 0) }, u.color.ansi16m = { rgb: r(a, 0) }, u.bgColor.ansi = { ansi: t(o, 10) }, u.bgColor.ansi256 = { ansi256: n(o, 10) }, u.bgColor.ansi16m = { rgb: r(a, 10) };var _iteratorNormalCompletion47 = true;
	        var _didIteratorError47 = false;
	        var _iteratorError47 = undefined;

	        try {
	          for (var _iterator47 = Object.keys(ma)[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
	            var _e54 = _step47.value;
	            if ("object" != _typeof(ma[_e54])) continue;var _o8 = ma[_e54];"ansi16" === _e54 && (_e54 = "ansi"), "ansi16" in _o8 && (u.color.ansi[_e54] = t(_o8.ansi16, 0), u.bgColor.ansi[_e54] = t(_o8.ansi16, 10)), "ansi256" in _o8 && (u.color.ansi256[_e54] = n(_o8.ansi256, 0), u.bgColor.ansi256[_e54] = n(_o8.ansi256, 10)), "rgb" in _o8 && (u.color.ansi16m[_e54] = r(_o8.rgb, 0), u.bgColor.ansi16m[_e54] = r(_o8.rgb, 10));
	          }
	        } catch (err) {
	          _didIteratorError47 = true;
	          _iteratorError47 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion47 && _iterator47.return) {
	              _iterator47.return();
	            }
	          } finally {
	            if (_didIteratorError47) {
	              throw _iteratorError47;
	            }
	          }
	        }

	        return u;
	      } });
	  });var Da = Re.env;var ya = void 0;function Ea(e) {
	    return function (e) {
	      return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
	    }(function (e) {
	      if (!1 === ya) return 0;if (qr("color=16m") || qr("color=full") || qr("color=truecolor")) return 3;if (qr("color=256")) return 2;if (e && !e.isTTY && !0 !== ya) return 0;var t = ya ? 1 : 0;if ("win32" === Re.platform) {
	        var _e55 = Rr.release().split(".");return Number(Re.versions.node.split(".")[0]) >= 8 && Number(_e55[0]) >= 10 && Number(_e55[2]) >= 10586 ? Number(_e55[2]) >= 14931 ? 3 : 2 : 1;
	      }if ("CI" in Da) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
	        return e in Da;
	      }) || "codeship" === Da.CI_NAME ? 1 : t;if ("TEAMCITY_VERSION" in Da) return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Da.TEAMCITY_VERSION) ? 1 : 0
	      );if ("truecolor" === Da.COLORTERM) return 3;if ("TERM_PROGRAM" in Da) {
	        var _e56 = parseInt((Da.TERM_PROGRAM_VERSION || "").split(".")[0], 10);switch (Da.TERM_PROGRAM) {case "iTerm.app":
	            return _e56 >= 3 ? 3 : 2;case "Apple_Terminal":
	            return 2;}
	      }return (/-256(color)?$/i.test(Da.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Da.TERM) || "COLORTERM" in Da ? 1 : (Da.TERM, t)
	      );
	    }(e));
	  }qr("no-color") || qr("no-colors") || qr("color=false") ? ya = !1 : (qr("color") || qr("colors") || qr("color=true") || qr("color=always")) && (ya = !0), "FORCE_COLOR" in Da && (ya = 0 === Da.FORCE_COLOR.length || 0 !== parseInt(Da.FORCE_COLOR, 10));var Ca = { supportsColor: Ea, stdout: Ea(Re.stdout), stderr: Ea(Re.stderr) };var ba = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
	      Aa = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
	      va = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
	      Fa = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
	      xa = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);function Sa(e) {
	    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : xa.get(e) || e;
	  }function wa(e, t) {
	    var n = [],
	        r = t.trim().split(/\s*,\s*/g);var u = void 0;var _iteratorNormalCompletion49 = true;
	    var _didIteratorError49 = false;
	    var _iteratorError49 = undefined;

	    try {
	      for (var _iterator49 = r[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
	        var _t43 = _step49.value;
	        if (isNaN(_t43)) {
	          if (!(u = _t43.match(va))) throw new Error("Invalid Chalk template style argument: ".concat(_t43, " (in style '").concat(e, "')"));n.push(u[2].replace(Fa, function (e, t, n) {
	            return t ? Sa(t) : n;
	          }));
	        } else n.push(Number(_t43));
	      }
	    } catch (err) {
	      _didIteratorError49 = true;
	      _iteratorError49 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion49 && _iterator49.return) {
	          _iterator49.return();
	        }
	      } finally {
	        if (_didIteratorError49) {
	          throw _iteratorError49;
	        }
	      }
	    }

	    return n;
	  }function Ba(e) {
	    Aa.lastIndex = 0;var t = [];var n = void 0;for (; null !== (n = Aa.exec(e));) {
	      var _e57 = n[1];if (n[2]) {
	        var _r39 = wa(_e57, n[2]);t.push([_e57].concat(_r39));
	      } else t.push([_e57]);
	    }return t;
	  }function Ta(e, t) {
	    var n = {};var _iteratorNormalCompletion50 = true;
	    var _didIteratorError50 = false;
	    var _iteratorError50 = undefined;

	    try {
	      for (var _iterator50 = t[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
	        var _e58 = _step50.value;
	        var _iteratorNormalCompletion52 = true;
	        var _didIteratorError52 = false;
	        var _iteratorError52 = undefined;

	        try {
	          for (var _iterator52 = _e58.styles[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
	            var _t44 = _step52.value;
	            n[_t44[0]] = _e58.inverse ? null : _t44.slice(1);
	          }
	        } catch (err) {
	          _didIteratorError52 = true;
	          _iteratorError52 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion52 && _iterator52.return) {
	              _iterator52.return();
	            }
	          } finally {
	            if (_didIteratorError52) {
	              throw _iteratorError52;
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError50 = true;
	      _iteratorError50 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion50 && _iterator50.return) {
	          _iterator50.return();
	        }
	      } finally {
	        if (_didIteratorError50) {
	          throw _iteratorError50;
	        }
	      }
	    }

	    var r = e;var _iteratorNormalCompletion51 = true;
	    var _didIteratorError51 = false;
	    var _iteratorError51 = undefined;

	    try {
	      for (var _iterator51 = Object.keys(n)[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
	        var _e59 = _step51.value;
	        if (Array.isArray(n[_e59])) {
	          if (!(_e59 in r)) throw new Error("Unknown Chalk style: ".concat(_e59));r = n[_e59].length > 0 ? r[_e59].apply(r, n[_e59]) : r[_e59];
	        }
	      }
	    } catch (err) {
	      _didIteratorError51 = true;
	      _iteratorError51 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion51 && _iterator51.return) {
	          _iterator51.return();
	        }
	      } finally {
	        if (_didIteratorError51) {
	          throw _iteratorError51;
	        }
	      }
	    }

	    return r;
	  }var ka = function ka(e, t) {
	    var n = [],
	        r = [];var u = [];if (t.replace(ba, function (t, o, a, i, s, l) {
	      if (o) u.push(Sa(o));else if (i) {
	        var _t45 = u.join("");u = [], r.push(0 === n.length ? _t45 : Ta(e, n)(_t45)), n.push({ inverse: a, styles: Ba(i) });
	      } else if (s) {
	        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");r.push(Ta(e, n)(u.join(""))), u = [], n.pop();
	      } else u.push(l);
	    }), r.push(u.join("")), n.length > 0) {
	      var _e60 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");throw new Error(_e60);
	    }return r.join("");
	  },
	      Na = $e(function (e) {
	    var t = Ca.stdout,
	        n = "win32" === Re.platform && !(Re.env.TERM || "").toLowerCase().startsWith("xterm"),
	        r = ["ansi", "ansi", "ansi256", "ansi16m"],
	        u = new Set(["gray"]),
	        o = Object.create(null);function a(e, n) {
	      n = n || {};var r = t ? t.level : 0;e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0;
	    }function i(e) {
	      if (!this || !(this instanceof i) || this.template) {
	        var _t46 = {};return a(_t46, e), _t46.template = function () {
	          var e = [].slice.call(arguments);return p.apply(null, [_t46.template].concat(e));
	        }, Object.setPrototypeOf(_t46, i.prototype), Object.setPrototypeOf(_t46.template, _t46), _t46.template.constructor = i, _t46.template;
	      }a(this, e);
	    }n && (ga.blue.open = "[94m");var _iteratorNormalCompletion53 = true;
	    var _didIteratorError53 = false;
	    var _iteratorError53 = undefined;

	    try {
	      var _loop6 = function _loop6() {
	        var e = _step53.value;
	        ga[e].closeRe = new RegExp(sa(ga[e].close), "g"), o[e] = {
	          get: function get() {
	            var t = ga[e];return l.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
	          }
	        };
	      };

	      for (var _iterator53 = Object.keys(ga)[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
	        _loop6();
	      }
	    } catch (err) {
	      _didIteratorError53 = true;
	      _iteratorError53 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion53 && _iterator53.return) {
	          _iterator53.return();
	        }
	      } finally {
	        if (_didIteratorError53) {
	          throw _iteratorError53;
	        }
	      }
	    }

	    o.visible = {
	      get: function get() {
	        return l.call(this, this._styles || [], !0, "visible");
	      }
	    }, ga.color.closeRe = new RegExp(sa(ga.color.close), "g");var _iteratorNormalCompletion54 = true;
	    var _didIteratorError54 = false;
	    var _iteratorError54 = undefined;

	    try {
	      var _loop7 = function _loop7() {
	        var e = _step54.value;
	        u.has(e) || (o[e] = {
	          get: function get() {
	            var t = this.level;return function () {
	              var n = ga.color[r[t]][e].apply(null, arguments),
	                  u = { open: n, close: ga.color.close, closeRe: ga.color.closeRe };return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
	            };
	          }
	        });
	      };

	      for (var _iterator54 = Object.keys(ga.color.ansi)[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
	        _loop7();
	      }
	    } catch (err) {
	      _didIteratorError54 = true;
	      _iteratorError54 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion54 && _iterator54.return) {
	          _iterator54.return();
	        }
	      } finally {
	        if (_didIteratorError54) {
	          throw _iteratorError54;
	        }
	      }
	    }

	    ga.bgColor.closeRe = new RegExp(sa(ga.bgColor.close), "g");var _iteratorNormalCompletion55 = true;
	    var _didIteratorError55 = false;
	    var _iteratorError55 = undefined;

	    try {
	      var _loop8 = function _loop8() {
	        var e = _step55.value;
	        if (u.has(e)) return "continue";o["bg" + e[0].toUpperCase() + e.slice(1)] = {
	          get: function get() {
	            var t = this.level;return function () {
	              var n = ga.bgColor[r[t]][e].apply(null, arguments),
	                  u = { open: n, close: ga.bgColor.close, closeRe: ga.bgColor.closeRe };return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
	            };
	          }
	        };
	      };

	      for (var _iterator55 = Object.keys(ga.bgColor.ansi)[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
	        var _ret8 = _loop8();

	        if (_ret8 === "continue") continue;
	      }
	    } catch (err) {
	      _didIteratorError55 = true;
	      _iteratorError55 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion55 && _iterator55.return) {
	          _iterator55.return();
	        }
	      } finally {
	        if (_didIteratorError55) {
	          throw _iteratorError55;
	        }
	      }
	    }

	    var s = Object.defineProperties(function () {}, o);function l(e, t, n) {
	      var r = function e() {
	        return c.apply(e, arguments);
	      };r._styles = e, r._empty = t;var u = this;return Object.defineProperty(r, "level", { enumerable: !0, get: function get() {
	          return u.level;
	        }, set: function set(e) {
	          u.level = e;
	        }
	      }), Object.defineProperty(r, "enabled", { enumerable: !0, get: function get() {
	          return u.enabled;
	        }, set: function set(e) {
	          u.enabled = e;
	        }
	      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r;
	    }function c() {
	      var e = arguments,
	          t = e.length;var r = String(arguments[0]);if (0 === t) return "";if (t > 1) for (var _n28 = 1; _n28 < t; _n28++) {
	        r += " " + e[_n28];
	      }if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;var u = ga.dim.open;n && this.hasGrey && (ga.dim.open = "");var _iteratorNormalCompletion56 = true;
	      var _didIteratorError56 = false;
	      var _iteratorError56 = undefined;

	      try {
	        for (var _iterator56 = this._styles.slice().reverse()[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
	          var _e61 = _step56.value;
	          r = _e61.open + r.replace(_e61.closeRe, _e61.open) + _e61.close, r = r.replace(/\r?\n/g, "".concat(_e61.close, "$&").concat(_e61.open));
	        }
	      } catch (err) {
	        _didIteratorError56 = true;
	        _iteratorError56 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion56 && _iterator56.return) {
	            _iterator56.return();
	          }
	        } finally {
	          if (_didIteratorError56) {
	            throw _iteratorError56;
	          }
	        }
	      }

	      return ga.dim.open = u, r;
	    }function p(e, t) {
	      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");var n = [].slice.call(arguments, 2),
	          r = [t.raw[0]];for (var _e62 = 1; _e62 < t.length; _e62++) {
	        r.push(String(n[_e62 - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[_e62]));
	      }return ka(e, r.join(""));
	    }Object.defineProperties(i.prototype, o), e.exports = i(), e.exports.supportsColor = t, e.exports.default = e.exports;
	  }),
	      Oa = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.shouldHighlight = l, t.getChalk = c, t.default = function (e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (l(t)) {
	        var _n29 = c(t);return function (e, t) {
	          return t.replace(r.default, function () {
	            for (var _len8 = arguments.length, t = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	              t[_key8] = arguments[_key8];
	            }

	            var n = function (e) {
	              var _e$slice = e.slice(-2),
	                  _e$slice2 = _slicedToArray(_e$slice, 2),
	                  t = _e$slice2[0],
	                  n = _e$slice2[1],
	                  u = (0, r.matchToToken)(e);

	              if ("name" === u.type) {
	                if ((0, aa.isKeyword)(u.value) || (0, aa.isReservedWord)(u.value)) return "keyword";if (i.test(u.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) return "jsx_tag";if (u.value[0] !== u.value[0].toLowerCase()) return "capitalized";
	              }if ("punctuator" === u.type && s.test(u.value)) return "bracket";if ("invalid" === u.type && ("@" === u.value || "#" === u.value)) return "punctuator";return u.type;
	            }(t),
	                u = e[n];return u ? t[0].split(a).map(function (e) {
	              return u(e);
	            }).join("\n") : t[0];
	          });
	        }(function (e) {
	          return { keyword: e.cyan, capitalized: e.yellow, jsx_tag: e.yellow, punctuator: e.yellow, number: e.magenta, string: e.green, regex: e.magenta, comment: e.grey, invalid: e.white.bgRed.bold };
	        }(_n29), e);
	      }return e;
	    };var n,
	        r = function (e) {
	      if (e && e.__esModule) return e;if (null === e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e) return { default: e };var t = o();if (t && t.has(e)) return t.get(e);var n = {},
	          r = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) {
	        if (Object.prototype.hasOwnProperty.call(e, u)) {
	          var a = r ? Object.getOwnPropertyDescriptor(e, u) : null;a && (a.get || a.set) ? Object.defineProperty(n, u, a) : n[u] = e[u];
	        }
	      }n.default = e, t && t.set(e, n);return n;
	    }(ra),
	        u = (n = Na) && n.__esModule ? n : { default: n };function o() {
	      if ("function" != typeof WeakMap) return null;var e = new WeakMap();return o = function o() {
	        return e;
	      }, e;
	    }var a = /\r\n|[\n\r\u2028\u2029]/,
	        i = /^[a-z][\w-]*$/i,
	        s = /^[()[\]{}]$/;function l(e) {
	      return u.default.supportsColor || e.forceColor;
	    }function c(e) {
	      var t = u.default;return e.forceColor && (t = new u.default.constructor({ enabled: !0, level: 1 })), t;
	    }
	  }),
	      Pa = $e(function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t.codeFrameColumns = a, t.default = function (e, t, n) {
	      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	      if (!u) {
	        u = !0;var _e63 = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if (Re.emitWarning) Re.emitWarning(_e63, "DeprecationWarning");else {
	          new Error(_e63).name = "DeprecationWarning", console.warn(new Error(_e63));
	        }
	      }n = Math.max(n, 0);return a(e, { start: { column: n, line: t } }, r);
	    };var n = function (e) {
	      if (e && e.__esModule) return e;if (null === e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e) return { default: e };var t = r();if (t && t.has(e)) return t.get(e);var n = {},
	          u = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var o in e) {
	        if (Object.prototype.hasOwnProperty.call(e, o)) {
	          var a = u ? Object.getOwnPropertyDescriptor(e, o) : null;a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o];
	        }
	      }n.default = e, t && t.set(e, n);return n;
	    }(Oa);function r() {
	      if ("function" != typeof WeakMap) return null;var e = new WeakMap();return r = function r() {
	        return e;
	      }, e;
	    }var u = !1;var o = /\r\n|[\n\r\u2028\u2029]/;function a(e, t) {
	      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var u = (r.highlightCode || r.forceColor) && (0, n.shouldHighlight)(r),
	          a = (0, n.getChalk)(r),
	          i = function (e) {
	        return { gutter: e.grey, marker: e.red.bold, message: e.red.bold };
	      }(a),
	          s = function s(e, t) {
	        return u ? e(t) : t;
	      },
	          l = e.split(o),
	          _ref29 = function (e, t, n) {
	        var r = Object.assign({ column: 0, line: -1 }, e.start),
	            u = Object.assign({}, r, e.end),
	            _ref30 = n || {},
	            _ref30$linesAbove = _ref30.linesAbove,
	            o = _ref30$linesAbove === undefined ? 2 : _ref30$linesAbove,
	            _ref30$linesBelow = _ref30.linesBelow,
	            a = _ref30$linesBelow === undefined ? 3 : _ref30$linesBelow,
	            i = r.line,
	            s = r.column,
	            l = u.line,
	            c = u.column;var p = Math.max(i - (o + 1), 0),
	            d = Math.min(t.length, l + a);-1 === i && (p = 0), -1 === l && (d = t.length);var f = l - i,
	            h = {};if (f) for (var _e64 = 0; _e64 <= f; _e64++) {
	          var _n30 = _e64 + i;if (s) {
	            if (0 === _e64) {
	              var _e65 = t[_n30 - 1].length;h[_n30] = [s, _e65 - s + 1];
	            } else if (_e64 === f) h[_n30] = [0, c];else {
	              var _r40 = t[_n30 - _e64].length;h[_n30] = [0, _r40];
	            }
	          } else h[_n30] = !0;
	        } else h[i] = s === c ? !s || [s, 0] : [s, c - s];return { start: p, end: d, markerLines: h };
	      }(t, l, r),
	          c = _ref29.start,
	          p = _ref29.end,
	          d = _ref29.markerLines,
	          f = t.start && "number" == typeof t.start.column,
	          h = String(p).length;var m = (u ? (0, n.default)(e, r) : e).split(o).slice(c, p).map(function (e, t) {
	        var n = c + 1 + t,
	            u = " ".concat(n).slice(-h),
	            o = " ".concat(u, " | "),
	            a = d[n],
	            l = !d[n + 1];if (a) {
	          var _t47 = "";if (Array.isArray(a)) {
	            var _n31 = e.slice(0, Math.max(a[0] - 1, 0)).replace(/[^\t]/g, " "),
	                _u12 = a[1] || 1;_t47 = ["\n ", s(i.gutter, o.replace(/\d/g, " ")), _n31, s(i.marker, "^").repeat(_u12)].join(""), l && r.message && (_t47 += " " + s(i.message, r.message));
	          }return [s(i.marker, ">"), s(i.gutter, o), e, _t47].join("");
	        }return " ".concat(s(i.gutter, o)).concat(e);
	      }).join("\n");return r.message && !f && (m = "".concat(" ".repeat(h + 1)).concat(r.message, "\n").concat(m)), u ? a.reset(m) : m;
	    }
	  });var _a = Er.ConfigError,
	      Ia = na.locStart,
	      ja = na.locEnd,
	      Ma = Object.getOwnPropertyNames,
	      La = Object.getOwnPropertyDescriptor;function Ra(e) {
	    var t = {};var _iteratorNormalCompletion57 = true;
	    var _didIteratorError57 = false;
	    var _iteratorError57 = undefined;

	    try {
	      for (var _iterator57 = e.plugins[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
	        var _n32 = _step57.value;
	        if (_n32.parsers) {
	          var _iteratorNormalCompletion58 = true;
	          var _didIteratorError58 = false;
	          var _iteratorError58 = undefined;

	          try {
	            for (var _iterator58 = Ma(_n32.parsers)[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
	              var _e66 = _step58.value;
	              Object.defineProperty(t, _e66, La(_n32.parsers, _e66));
	            }
	          } catch (err) {
	            _didIteratorError58 = true;
	            _iteratorError58 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion58 && _iterator58.return) {
	                _iterator58.return();
	              }
	            } finally {
	              if (_didIteratorError58) {
	                throw _iteratorError58;
	              }
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError57 = true;
	      _iteratorError57 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion57 && _iterator57.return) {
	          _iterator57.return();
	        }
	      } finally {
	        if (_didIteratorError57) {
	          throw _iteratorError57;
	        }
	      }
	    }

	    return t;
	  }function qa(e, t) {
	    if (t = t || Ra(e), "function" == typeof e.parser) return { parse: e.parser, astFormat: "estree", locStart: Ia, locEnd: ja };if ("string" == typeof e.parser) {
	      if (Object.prototype.hasOwnProperty.call(t, e.parser)) return t[e.parser];throw new _a("Couldn't resolve parser \"".concat(e.parser, '". Parsers must be explicitly added to the standalone bundle.'));
	    }
	  }var Va = { parse: function parse(e, t) {
	      var n = Ra(t),
	          r = Object.keys(n).reduce(function (e, t) {
	        return Object.defineProperty(e, t, { enumerable: !0, get: function get() {
	            return n[t].parse;
	          } });
	      }, {}),
	          u = qa(t, n);try {
	        return u.preprocess && (e = u.preprocess(e, t)), { text: e, ast: u.parse(e, r, t) };
	      } catch (t) {
	        var _n33 = t.loc;
	        if (_n33) {
	          var _r41 = Pa;throw t.codeFrame = _r41.codeFrameColumns(e, _n33, { highlightCode: !0 }), t.message += "\n" + t.codeFrame, t;
	        }throw t.stack;
	      }
	    }, resolveParser: qa };var Wa = Er.UndefinedParserError,
	      $a = yt.getSupportInfo,
	      Ua = Va.resolveParser,
	      za = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };function Ja(e, t) {
	    var n = gn.basename(e).toLowerCase(),
	        r = $a({ plugins: t }).languages.filter(function (e) {
	      return null !== e.since;
	    });var u = r.find(function (e) {
	      return e.extensions && e.extensions.some(function (e) {
	        return n.endsWith(e);
	      }) || e.filenames && e.filenames.some(function (e) {
	        return e.toLowerCase() === n;
	      });
	    });if (!u && !n.includes(".")) {
	      var _t48 = function (e) {
	        if ("string" != typeof e) return "";var t = void 0;try {
	          t = fr.openSync(e, "r");
	        } catch (e) {
	          return "";
	        }try {
	          var _e67 = new hr(t).next().toString("utf8"),
	              _n34 = _e67.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);if (_n34) return _n34[1];var _r42 = _e67.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);return _r42 ? _r42[1] : "";
	        } catch (e) {
	          return "";
	        } finally {
	          try {
	            fr.closeSync(t);
	          } catch (e) {}
	        }
	      }(e);u = r.find(function (e) {
	        return e.interpreters && e.interpreters.includes(_t48);
	      });
	    }return u && u.parsers[0];
	  }var Ga = { normalize: function normalize(e, t) {
	      t = t || {};var n = Object.assign({}, e),
	          r = $a({ plugins: e.plugins, showUnreleased: !0, showDeprecated: !0 }).options,
	          u = Object.assign({}, za, mr(r.filter(function (e) {
	        return void 0 !== e.default;
	      }).map(function (e) {
	        return [e.name, e.default];
	      })));if (!n.parser) if (n.filepath) {
	        if (n.parser = Ja(n.filepath, n.plugins), !n.parser) throw new Wa("No parser could be inferred for file: ".concat(n.filepath));
	      } else {
	        (t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n.parser = "babel";
	      }var o = Ua(Zo.normalizeApiOptions(n, [r.find(function (e) {
	        return "parser" === e.name;
	      })], { passThrough: !0, logger: !1 }));n.astFormat = o.astFormat, n.locEnd = o.locEnd, n.locStart = o.locStart;var a = function (e) {
	        var t = e.astFormat;
	        if (!t) throw new Error("getPlugin() requires astFormat to be set");var n = e.plugins.find(function (e) {
	          return e.printers && e.printers[t];
	        });if (!n) throw new Error("Couldn't find plugin for AST format \"".concat(t, '"'));return n;
	      }(n);n.printer = a.printers[n.astFormat];var i = r.filter(function (e) {
	        return e.pluginDefaults && void 0 !== e.pluginDefaults[a.name];
	      }).reduce(function (e, t) {
	        return Object.assign(e, _defineProperty({}, t.name, t.pluginDefaults[a.name]));
	      }, {}),
	          s = Object.assign({}, u, i);return Object.keys(s).forEach(function (e) {
	        null == n[e] && (n[e] = s[e]);
	      }), "json" === n.parser && (n.trailingComma = "none"), Zo.normalizeApiOptions(n, r, Object.assign({ passThrough: Object.keys(za) }, t));
	    }, hiddenDefaults: za, inferParser: Ja };var Ha = function e(t, n, r) {
	    if (Array.isArray(t)) return t.map(function (t) {
	      return e(t, n, r);
	    }).filter(Boolean);if (!t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var u = {};var _iteratorNormalCompletion59 = true;
	    var _didIteratorError59 = false;
	    var _iteratorError59 = undefined;

	    try {
	      for (var _iterator59 = Object.keys(t)[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
	        var _r43 = _step59.value;
	        "function" != typeof t[_r43] && (u[_r43] = e(t[_r43], n, t));
	      }
	    } catch (err) {
	      _didIteratorError59 = true;
	      _iteratorError59 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion59 && _iterator59.return) {
	          _iterator59.return();
	        }
	      } finally {
	        if (_didIteratorError59) {
	          throw _iteratorError59;
	        }
	      }
	    }

	    if (n.printer.massageAstNode) {
	      var _e68 = n.printer.massageAstNode(t, u, r);if (null === _e68) return;if (_e68) return _e68;
	    }return u;
	  };function Xa() {}Xa.ok = function () {}, Xa.strictEqual = function () {};var _dn$builders = dn.builders,
	      Ya = _dn$builders.concat,
	      Ka = _dn$builders.line,
	      Qa = _dn$builders.hardline,
	      Za = _dn$builders.breakParent,
	      ei = _dn$builders.indent,
	      ti = _dn$builders.lineSuffix,
	      ni = _dn$builders.join,
	      ri = _dn$builders.cursor,
	      ui = Lt.hasNewline,
	      oi = Lt.skipNewline,
	      ai = Lt.skipSpaces,
	      ii = Lt.isPreviousLineEmpty,
	      si = Lt.addLeadingComment,
	      li = Lt.addDanglingComment,
	      ci = Lt.addTrailingComment,
	      pi = Symbol("child-nodes");
	  function di(e, t, n) {
	    if (!e) return;var r = t.printer,
	        u = t.locStart,
	        o = t.locEnd;
	    if (n) {
	      if (r.canAttachComment && r.canAttachComment(e)) {
	        var _t49 = void 0;for (_t49 = n.length - 1; _t49 >= 0 && !(u(n[_t49]) <= u(e) && o(n[_t49]) <= o(e)); --_t49) {}return void n.splice(_t49 + 1, 0, e);
	      }
	    } else if (e[pi]) return e[pi];var a = r.getCommentChildNodes && r.getCommentChildNodes(e, t) || "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && Object.keys(e).filter(function (e) {
	      return "enclosingNode" !== e && "precedingNode" !== e && "followingNode" !== e && "tokens" !== e && "comments" !== e;
	    }).map(function (t) {
	      return e[t];
	    });return a ? (n || Object.defineProperty(e, pi, { value: n = [], enumerable: !1 }), a.forEach(function (e) {
	      di(e, t, n);
	    }), n) : void 0;
	  }function fi(e, t, n) {
	    var r = e.length;if (0 === r) return;var _e$ = e[0],
	        u = _e$.precedingNode,
	        o = _e$.followingNode,
	        a = _e$.enclosingNode,
	        i = n.printer.getGapRegex && n.printer.getGapRegex(a) || /^[\s(]*$/;
	    var s = void 0,
	        l = n.locStart(o);for (s = r; s > 0; --s) {
	      var _r44 = e[s - 1];Xa.strictEqual(_r44.precedingNode, u), Xa.strictEqual(_r44.followingNode, o);var _a10 = t.slice(n.locEnd(_r44), l);if (!i.test(_a10)) break;l = n.locStart(_r44);
	    }e.forEach(function (e, t) {
	      t < s ? ci(u, e) : si(o, e);
	    });var _arr = [u, o];
	    for (var _i4 = 0; _i4 < _arr.length; _i4++) {
	      var _e69 = _arr[_i4];_e69.comments && _e69.comments.length > 1 && _e69.comments.sort(function (e, t) {
	        return n.locStart(e) - n.locStart(t);
	      });
	    }e.length = 0;
	  }function hi(e, t) {
	    return e.getValue().printed = !0, t.printer.printComment(e, t);
	  }function mi(e, t, n) {
	    var r = n.locStart(t) - 1;for (var _t50 = 1; _t50 < e.length; ++_t50) {
	      if (r < n.locStart(e[_t50])) return _t50 - 1;
	    }return 0;
	  }function gi(e, t, n) {
	    return e.getNode() === t.cursorNode && e.getValue() ? Ya([ri, n, ri]) : n;
	  }var Di = { attach: function attach(e, t, n, r) {
	      if (!Array.isArray(e)) return;var u = [],
	          o = r.locStart,
	          a = r.locEnd;e.forEach(function (i, s) {
	        if ("json" === r.parser || "json5" === r.parser || "__js_expression" === r.parser || "__vue_expression" === r.parser) {
	          if (o(i) - o(t) <= 0) return void si(t, i);if (a(i) - a(t) >= 0) return void ci(t, i);
	        }!function e(t, n, r) {
	          var u = r.locStart,
	              o = r.locEnd,
	              a = di(t, r);
	          var i = void 0,
	              s = void 0,
	              l = 0,
	              c = a.length;for (; l < c;) {
	            var _t51 = l + c >> 1,
	                _p3 = a[_t51];if (u(_p3) - u(n) <= 0 && o(n) - o(_p3) <= 0) return n.enclosingNode = _p3, void e(_p3, n, r);if (o(_p3) - u(n) <= 0) i = _p3, l = _t51 + 1;else {
	              if (!(o(n) - u(_p3) <= 0)) throw new Error("Comment location overlaps with node location");s = _p3, c = _t51;
	            }
	          }if (n.enclosingNode && "TemplateLiteral" === n.enclosingNode.type) {
	            var _e70 = n.enclosingNode.quasis,
	                _t52 = mi(_e70, n, r);i && mi(_e70, i, r) !== _t52 && (i = null), s && mi(_e70, s, r) !== _t52 && (s = null);
	          }i && (n.precedingNode = i), s && (n.followingNode = s);
	        }(t, i, r);var l = i.precedingNode,
	            c = i.enclosingNode,
	            p = i.followingNode,
	            d = r.printer.handleComments && r.printer.handleComments.ownLine ? r.printer.handleComments.ownLine : function () {
	          return !1;
	        },
	            f = r.printer.handleComments && r.printer.handleComments.endOfLine ? r.printer.handleComments.endOfLine : function () {
	          return !1;
	        },
	            h = r.printer.handleComments && r.printer.handleComments.remaining ? r.printer.handleComments.remaining : function () {
	          return !1;
	        },
	            m = e.length - 1 === s;
	        if (ui(n, o(i), { backwards: !0 })) d(i, n, r, t, m) || (p ? si(p, i) : l ? ci(l, i) : li(c || t, i));else if (ui(n, a(i))) f(i, n, r, t, m) || (l ? ci(l, i) : p ? si(p, i) : li(c || t, i));else if (h(i, n, r, t, m)) ;else if (l && p) {
	          var _e71 = u.length;if (_e71 > 0) {
	            u[_e71 - 1].followingNode !== i.followingNode && fi(u, n, r);
	          }u.push(i);
	        } else l ? ci(l, i) : p ? si(p, i) : li(c || t, i);
	      }), fi(u, n, r), e.forEach(function (e) {
	        delete e.precedingNode, delete e.enclosingNode, delete e.followingNode;
	      });
	    }, printComments: function printComments(e, t, n, r) {
	      var u = e.getValue(),
	          o = t(e),
	          a = u && u.comments;if (!a || 0 === a.length) return gi(e, n, o);var i = [],
	          s = [r ? ";" : "", o];return e.each(function (e) {
	        var t = e.getValue(),
	            r = t.leading,
	            u = t.trailing;if (r) {
	          var _r45 = function (e, t) {
	            var n = e.getValue(),
	                r = hi(e, t);if (!r) return "";if (t.printer.isBlockComment && t.printer.isBlockComment(n)) {
	              var _e72 = ui(t.originalText, t.locEnd(n)) ? ui(t.originalText, t.locStart(n), { backwards: !0 }) ? Qa : Ka : " ";return Ya([r, _e72]);
	            }return Ya([r, Qa]);
	          }(e, n);if (!_r45) return;i.push(_r45);var _u13 = n.originalText,
	              _o9 = oi(_u13, ai(_u13, n.locEnd(t)));!1 !== _o9 && ui(_u13, _o9) && i.push(Qa);
	        } else u && s.push(function (e, t) {
	          var n = e.getValue(),
	              r = hi(e, t);if (!r) return "";var u = t.printer,
	              o = t.originalText,
	              a = t.locStart,
	              i = u.isBlockComment && u.isBlockComment(n);
	          if (ui(o, a(n), { backwards: !0 })) {
	            var _e73 = ii(o, n, a);return ti(Ya([Qa, _e73 ? Qa : "", r]));
	          }var s = Ya([" ", r]);return i || (s = Ya([ti(s), Za])), s;
	        }(e, n));
	      }, "comments"), gi(e, n, Ya(i.concat(s)));
	    }, printDanglingComments: function printDanglingComments(e, t, n, r) {
	      var u = [],
	          o = e.getValue();return o && o.comments ? (e.each(function (e) {
	        var n = e.getValue();!n || n.leading || n.trailing || r && !r(n) || u.push(hi(e, t));
	      }, "comments"), 0 === u.length ? "" : n ? ni(Qa, u) : ei(Ya([Qa, ni(Qa, u)]))) : "";
	    }, getSortedChildNodes: di, ensureAllCommentsPrinted: function ensureAllCommentsPrinted(e) {
	      e && e.forEach(function (e) {
	        if (!e.printed) throw new Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');delete e.printed;
	      });
	    } };function yi(e, t) {
	    var n = Ei(e.stack, t);return -1 === n ? null : e.stack[n];
	  }function Ei(e, t) {
	    for (var _n35 = e.length - 1; _n35 >= 0; _n35 -= 2) {
	      var _r46 = e[_n35];if (_r46 && !Array.isArray(_r46) && --t < 0) return _n35;
	    }return -1;
	  }var Ci = function () {
	    function Ci(e) {
	      _classCallCheck(this, Ci);

	      this.stack = [e];
	    }

	    _createClass(Ci, [{
	      key: "getName",
	      value: function getName() {
	        var e = this.stack,
	            t = e.length;return t > 1 ? e[t - 2] : null;
	      }
	    }, {
	      key: "getValue",
	      value: function getValue() {
	        return he(this.stack);
	      }
	    }, {
	      key: "getNode",
	      value: function getNode() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        return yi(this, e);
	      }
	    }, {
	      key: "getParentNode",
	      value: function getParentNode() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        return yi(this, e + 1);
	      }
	    }, {
	      key: "call",
	      value: function call(e) {
	        var n = this.stack,
	            r = n.length;var u = he(n);
	        for (var _len9 = arguments.length, t = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
	          t[_key9 - 1] = arguments[_key9];
	        }

	        var _iteratorNormalCompletion60 = true;
	        var _didIteratorError60 = false;
	        var _iteratorError60 = undefined;

	        try {
	          for (var _iterator60 = t[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
	            var _e74 = _step60.value;
	            u = u[_e74], n.push(_e74, u);
	          }
	        } catch (err) {
	          _didIteratorError60 = true;
	          _iteratorError60 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion60 && _iterator60.return) {
	              _iterator60.return();
	            }
	          } finally {
	            if (_didIteratorError60) {
	              throw _iteratorError60;
	            }
	          }
	        }

	        var o = e(this);return n.length = r, o;
	      }
	    }, {
	      key: "callParent",
	      value: function callParent(e) {
	        var _stack;

	        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var n = Ei(this.stack, t + 1),
	            r = this.stack.splice(n + 1),
	            u = e(this);return (_stack = this.stack).push.apply(_stack, _toConsumableArray(r)), u;
	      }
	    }, {
	      key: "each",
	      value: function each(e) {
	        var n = this.stack,
	            r = n.length;var u = he(n);
	        for (var _len10 = arguments.length, t = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
	          t[_key10 - 1] = arguments[_key10];
	        }

	        var _iteratorNormalCompletion61 = true;
	        var _didIteratorError61 = false;
	        var _iteratorError61 = undefined;

	        try {
	          for (var _iterator61 = t[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
	            var _e75 = _step61.value;
	            u = u[_e75], n.push(_e75, u);
	          }
	        } catch (err) {
	          _didIteratorError61 = true;
	          _iteratorError61 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion61 && _iterator61.return) {
	              _iterator61.return();
	            }
	          } finally {
	            if (_didIteratorError61) {
	              throw _iteratorError61;
	            }
	          }
	        }

	        for (var _t53 = 0; _t53 < u.length; ++_t53) {
	          _t53 in u && (n.push(_t53, u[_t53]), e(this), n.length -= 2);
	        }n.length = r;
	      }
	    }, {
	      key: "map",
	      value: function map(e) {
	        var n = this.stack,
	            r = n.length;var u = he(n);
	        for (var _len11 = arguments.length, t = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
	          t[_key11 - 1] = arguments[_key11];
	        }

	        var _iteratorNormalCompletion62 = true;
	        var _didIteratorError62 = false;
	        var _iteratorError62 = undefined;

	        try {
	          for (var _iterator62 = t[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
	            var _e76 = _step62.value;
	            u = u[_e76], n.push(_e76, u);
	          }
	        } catch (err) {
	          _didIteratorError62 = true;
	          _iteratorError62 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion62 && _iterator62.return) {
	              _iterator62.return();
	            }
	          } finally {
	            if (_didIteratorError62) {
	              throw _iteratorError62;
	            }
	          }
	        }

	        var o = new Array(u.length);for (var _t54 = 0; _t54 < u.length; ++_t54) {
	          _t54 in u && (n.push(_t54, u[_t54]), o[_t54] = e(this, _t54), n.length -= 2);
	        }return n.length = r, o;
	      }
	    }, {
	      key: "match",
	      value: function match() {
	        var t = this.stack.length - 1,
	            n = null,
	            r = this.stack[t--];
	        for (var _len12 = arguments.length, e = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	          e[_key12] = arguments[_key12];
	        }

	        var _iteratorNormalCompletion63 = true;
	        var _didIteratorError63 = false;
	        var _iteratorError63 = undefined;

	        try {
	          for (var _iterator63 = e[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
	            var _u14 = _step63.value;
	            if (void 0 === r) return !1;var _e77 = null;if ("number" == typeof n && (_e77 = n, n = this.stack[t--], r = this.stack[t--]), _u14 && !_u14(r, n, _e77)) return !1;n = this.stack[t--], r = this.stack[t--];
	          }
	        } catch (err) {
	          _didIteratorError63 = true;
	          _iteratorError63 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion63 && _iterator63.return) {
	              _iterator63.return();
	            }
	          } finally {
	            if (_didIteratorError63) {
	              throw _iteratorError63;
	            }
	          }
	        }

	        return !0;
	      }
	    }]);

	    return Ci;
	  }();var bi = dn.utils.stripTrailingHardline,
	      Ai = Ga.normalize;var vi = { printSubtree: function printSubtree(e, t, n, r) {
	      if (n.printer.embed && "auto" === n.embeddedLanguageFormatting) return n.printer.embed(e, t, function (e, t, u) {
	        return function (e, t, n, r) {
	          var _ref31 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
	              _ref31$stripTrailingH = _ref31.stripTrailingHardline,
	              u = _ref31$stripTrailingH === undefined ? !1 : _ref31$stripTrailingH;

	          var o = Ai(Object.assign({}, n, t, { parentParser: n.parser, embeddedInHtml: !(!n.embeddedInHtml && "html" !== n.parser && "vue" !== n.parser && "angular" !== n.parser && "lwc" !== n.parser), originalText: e }), { passThrough: !0 }),
	              a = Va.parse(e, o),
	              i = a.ast;e = a.text;var s = i.comments;delete i.comments, Di.attach(s, i, e, o), o[Symbol.for("comments")] = s || [], o[Symbol.for("tokens")] = i.tokens || [];var l = r(i, o);if (Di.ensureAllCommentsPrinted(s), u) return "string" == typeof l ? l.replace(/(?:\r?\n)*$/, "") : bi(l, !0);return l;
	        }(e, t, n, r, u);
	      }, n);
	    } };var Fi = dn,
	      xi = Fi.builders,
	      Si = xi.concat,
	      wi = xi.hardline,
	      Bi = xi.addAlignmentToDoc,
	      Ti = Fi.utils;function ki(e, t) {
	    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var r = t.printer;
	    r.preprocess && (e = r.preprocess(e, t));var u = new Map();var o = function e(n, o) {
	      var a = n.getValue(),
	          i = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && void 0 === o;if (i && u.has(a)) return u.get(a);var s = void 0;return s = r.willPrintOwnComments && r.willPrintOwnComments(n, t) ? Ni(n, t, e, o) : Di.printComments(n, function (n) {
	        return Ni(n, t, e, o);
	      }, t, o && o.needsSemi), i && u.set(a, s), s;
	    }(new Ci(e));return n > 0 && (o = Bi(Si([wi, o]), n, t.tabWidth)), Ti.propagateBreaks(o), o;
	  }function Ni(e, t, n, r) {
	    Xa.ok(e instanceof Ci);var u = e.getValue(),
	        o = t.printer;if (o.hasPrettierIgnore && o.hasPrettierIgnore(e)) return function (e, t) {
	      var n = t.originalText,
	          r = t[Symbol.for("comments")],
	          u = t.locStart,
	          o = t.locEnd,
	          a = u(e),
	          i = o(e);
	      var _iteratorNormalCompletion64 = true;
	      var _didIteratorError64 = false;
	      var _iteratorError64 = undefined;

	      try {
	        for (var _iterator64 = r[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
	          var _e78 = _step64.value;
	          u(_e78) >= a && o(_e78) <= i && (_e78.printed = !0);
	        }
	      } catch (err) {
	        _didIteratorError64 = true;
	        _iteratorError64 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion64 && _iterator64.return) {
	            _iterator64.return();
	          }
	        } finally {
	          if (_didIteratorError64) {
	            throw _iteratorError64;
	          }
	        }
	      }

	      return n.slice(a, i);
	    }(u, t);if (u) try {
	      var _r47 = vi.printSubtree(e, n, t, ki);if (_r47) return _r47;
	    } catch (e) {
	      if (We.PRETTIER_DEBUG) throw e;
	    }return o.print(e, t, n, r);
	  }var Oi = ki;function Pi(e, t, n, r) {
	    var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	    if (!(t < n.locStart(e) || t > n.locEnd(e))) {
	      var _iteratorNormalCompletion65 = true;
	      var _didIteratorError65 = false;
	      var _iteratorError65 = undefined;

	      try {
	        for (var _iterator65 = Di.getSortedChildNodes(e, n)[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
	          var _o10 = _step65.value;
	          var _a11 = Pi(_o10, t, n, r, [e].concat(_toConsumableArray(u)));if (_a11) return _a11;
	        }
	      } catch (err) {
	        _didIteratorError65 = true;
	        _iteratorError65 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion65 && _iterator65.return) {
	            _iterator65.return();
	          }
	        } finally {
	          if (_didIteratorError65) {
	            throw _iteratorError65;
	          }
	        }
	      }

	      return !r || r(e) ? { node: e, parentNodes: u } : void 0;
	    }
	  }var _i = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"]),
	      Ii = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);function ji(e, t) {
	    if (null == t) return !1;switch (e.parser) {case "flow":case "babel":case "babel-flow":case "babel-ts":case "typescript":
	        return function (e) {
	          return "Directive" === e || "TypeAlias" === e || "TSExportAssignment" === e || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration");
	        }(t.type);case "json":
	        return _i.has(t.type);case "graphql":
	        return Ii.has(t.kind);case "vue":
	        return "root" !== t.tag;}return !1;
	  }var Mi = { calculateRange: function calculateRange(e, t, n) {
	      var r = e.slice(t.rangeStart, t.rangeEnd),
	          u = Math.max(t.rangeStart + r.search(/\S/), t.rangeStart);var o = void 0;for (o = t.rangeEnd; o > t.rangeStart && !/\S/.test(e[o - 1]); --o) {}var a = Pi(n, u, t, function (e) {
	        return ji(t, e);
	      }),
	          i = Pi(n, o, t, function (e) {
	        return ji(t, e);
	      });if (!a || !i) return { rangeStart: 0, rangeEnd: 0 };
	      var _ref32 = function (e, t, n) {
	        var r = e.node,
	            u = t.node;if (r === u) return { startNode: r, endNode: u };var _iteratorNormalCompletion66 = true;
	        var _didIteratorError66 = false;
	        var _iteratorError66 = undefined;

	        try {
	          for (var _iterator66 = t.parentNodes[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
	            var _r48 = _step66.value;
	            if (!("Program" !== _r48.type && "File" !== _r48.type && n.locStart(_r48) >= n.locStart(e.node))) break;u = _r48;
	          }
	        } catch (err) {
	          _didIteratorError66 = true;
	          _iteratorError66 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion66 && _iterator66.return) {
	              _iterator66.return();
	            }
	          } finally {
	            if (_didIteratorError66) {
	              throw _iteratorError66;
	            }
	          }
	        }

	        var _iteratorNormalCompletion67 = true;
	        var _didIteratorError67 = false;
	        var _iteratorError67 = undefined;

	        try {
	          for (var _iterator67 = e.parentNodes[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
	            var _u15 = _step67.value;
	            if (!("Program" !== _u15.type && "File" !== _u15.type && n.locEnd(_u15) <= n.locEnd(t.node))) break;r = _u15;
	          }
	        } catch (err) {
	          _didIteratorError67 = true;
	          _iteratorError67 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion67 && _iterator67.return) {
	              _iterator67.return();
	            }
	          } finally {
	            if (_didIteratorError67) {
	              throw _iteratorError67;
	            }
	          }
	        }

	        return { startNode: r, endNode: u };
	      }(a, i, t),
	          s = _ref32.startNode,
	          l = _ref32.endNode;

	      return { rangeStart: Math.min(t.locStart(s), t.locStart(l)), rangeEnd: Math.max(t.locEnd(s), t.locEnd(l)) };
	    }, findNodeAtOffset: Pi },
	      Li = Ue(K);var Ri = dn.printer.printDocToString,
	      qi = dn.debug.printDocToDebug,
	      Vi = Lt.getAlignmentSize,
	      Wi = Rt.guessEndOfLine,
	      $i = Rt.convertEndOfLineToChars,
	      Ui = Rt.countEndOfLineChars,
	      zi = Rt.normalizeEndOfLine,
	      Ji = Ga.normalize,
	      Gi = Symbol("cursor");
	  function Hi(e, t, n) {
	    var r = t.comments;return r && (delete t.comments, Di.attach(r, t, e, n)), n[Symbol.for("comments")] = r || [], n[Symbol.for("tokens")] = t.tokens || [], n.originalText = e, r;
	  }function Xi(e, t, n) {
	    if (!e || !e.trim().length) return { formatted: "", cursorOffset: -1 };n = n || 0;var r = Va.parse(e, t),
	        u = r.ast;if (e = r.text, t.cursorOffset >= 0) {
	      var _e79 = Mi.findNodeAtOffset(u, t.cursorOffset, t);_e79 && _e79.node && (t.cursorNode = _e79.node);
	    }var o = Hi(e, u, t),
	        a = Oi(u, t, n),
	        i = Ri(a, t);if (Di.ensureAllCommentsPrinted(o), n > 0) {
	      var _e80 = i.formatted.trim();void 0 !== i.cursorNodeStart && (i.cursorNodeStart -= i.formatted.indexOf(_e80)), i.formatted = _e80 + $i(t.endOfLine);
	    }if (t.cursorOffset >= 0) {
	      var _n36 = void 0,
	          _r49 = void 0,
	          _u16 = void 0,
	          _o11 = void 0,
	          _a12 = void 0;if (t.cursorNode && i.cursorNodeText ? (_n36 = t.locStart(t.cursorNode), _r49 = e.slice(_n36, t.locEnd(t.cursorNode)), _u16 = t.cursorOffset - _n36, _o11 = i.cursorNodeStart, _a12 = i.cursorNodeText) : (_n36 = 0, _r49 = e, _u16 = t.cursorOffset, _o11 = 0, _a12 = i.formatted), _r49 === _a12) return { formatted: i.formatted, cursorOffset: _o11 + _u16 };var _s4 = _r49.split("");_s4.splice(_u16, 0, Gi);var _l4 = _a12.split(""),
	          _c3 = Li.diffArrays(_s4, _l4);var _p4 = _o11;var _iteratorNormalCompletion68 = true;
	      var _didIteratorError68 = false;
	      var _iteratorError68 = undefined;

	      try {
	        for (var _iterator68 = _c3[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
	          var _e81 = _step68.value;
	          if (_e81.removed) {
	            if (_e81.value.includes(Gi)) break;
	          } else _p4 += _e81.count;
	        }
	      } catch (err) {
	        _didIteratorError68 = true;
	        _iteratorError68 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion68 && _iterator68.return) {
	            _iterator68.return();
	          }
	        } finally {
	          if (_didIteratorError68) {
	            throw _iteratorError68;
	          }
	        }
	      }

	      return { formatted: i.formatted, cursorOffset: _p4 };
	    }return { formatted: i.formatted, cursorOffset: -1 };
	  }function Yi(e, t) {
	    var n = Va.resolveParser(t),
	        r = "\uFEFF" === e.charAt(0);var u = r ? e.slice(1) : e;var o = t.cursorOffset >= 0;o || (t.cursorOffset = -1);var a = !n.hasPragma || n.hasPragma(u);if (t.requirePragma && !a) return { formatted: e, cursorOffset: t.cursorOffset };"auto" === t.endOfLine && (t.endOfLine = Wi(u));var i = t.rangeStart > 0,
	        s = t.rangeEnd < u.length;if (r && (o && t.cursorOffset--, i && t.rangeStart--, s && t.rangeEnd--), u.includes("\r")) {
	      var _e82 = function _e82(e) {
	        return Ui(u.slice(0, e), "\r\n");
	      };o && (t.cursorOffset -= _e82(t.cursorOffset)), i && (t.rangeStart -= _e82(t.rangeStart)), s && (t.rangeEnd -= _e82(t.rangeEnd)), u = zi(u);
	    }var l = void 0;return t.rangeStart < 0 && (t.rangeStart = 0), t.rangeEnd > u.length && (t.rangeEnd = u.length), i || s ? l = function (e, t) {
	      var n = Va.parse(e, t),
	          r = n.ast;e = n.text;
	      var _Mi$calculateRange = Mi.calculateRange(e, t, r),
	          u = _Mi$calculateRange.rangeStart,
	          o = _Mi$calculateRange.rangeEnd,
	          a = e.slice(u, o),
	          i = Math.min(u, e.lastIndexOf("\n", u) + 1),
	          s = e.slice(i, u).match(/^\s*/)[0],
	          l = Vi(s, t.tabWidth),
	          c = Xi(a, Object.assign({}, t, { rangeStart: 0, rangeEnd: 1 / 0, cursorOffset: t.cursorOffset > u && t.cursorOffset < o ? t.cursorOffset - u : -1, endOfLine: "lf" }), l),
	          p = c.formatted.trimEnd();

	      var d = t.cursorOffset;
	      d >= o ? d = t.cursorOffset + (p.length - a.length) : c.cursorOffset >= 0 && (d = c.cursorOffset + u);var f = e.slice(0, u) + p + e.slice(o);if ("lf" !== t.endOfLine) {
	        var _e83 = $i(t.endOfLine);d >= 0 && "\r\n" === _e83 && (d += Ui(f.slice(0, d), "\n")), f = f.replace(/\n/g, _e83);
	      }return { formatted: f, cursorOffset: d };
	    }(u, t) : (!a && t.insertPragma && t.printer.insertPragma && (u = t.printer.insertPragma(u)), l = Xi(u, t)), r && (l.formatted = "\uFEFF" + l.formatted, o && l.cursorOffset >= 0 && l.cursorOffset++), l;
	  }var Ki = { formatWithCursor: function formatWithCursor(e, t) {
	      return Yi(e, t = Ji(t));
	    }, parse: function parse(e, t, n) {
	      t = Ji(t), e = zi("\uFEFF" === e.charAt(0) ? e.slice(1) : e);var r = Va.parse(e, t);return n && (r.ast = Ha(r.ast, t)), r;
	    },
	    formatAST: function formatAST(e, t) {
	      t = Ji(t);var n = Oi(e, t);return Ri(n, t);
	    },
	    formatDoc: function formatDoc(e, t) {
	      t = Ji(Object.assign({}, t, { parser: "babel" }));return Yi(qi(e), t).formatted;
	    },
	    printToDoc: function printToDoc(e, t) {
	      t = Ji(t);var n = Va.parse(e, t),
	          r = n.ast,
	          u = n.text;return Hi(u, r, t), Oi(r, t);
	    },
	    printDocToString: function printDocToString(e, t) {
	      return Ri(e, Ji(t));
	    } };var Qi = Lt.getMaxContinuousCount,
	      Zi = Lt.getStringWidth,
	      es = Lt.getAlignmentSize,
	      ts = Lt.getIndentSize,
	      ns = Lt.skip,
	      rs = Lt.skipWhitespace,
	      us = Lt.skipSpaces,
	      os = Lt.skipNewline,
	      as = Lt.skipToLineEnd,
	      is = Lt.skipEverythingButNewLine,
	      ss = Lt.skipInlineComment,
	      ls = Lt.skipTrailingComment,
	      cs = Lt.hasNewline,
	      ps = Lt.hasNewlineInRange,
	      ds = Lt.hasSpaces,
	      fs = Lt.isNextLineEmpty,
	      hs = Lt.isNextLineEmptyAfterIndex,
	      ms = Lt.isPreviousLineEmpty,
	      gs = Lt.getNextNonSpaceNonCommentCharacterIndex,
	      Ds = Lt.makeString,
	      ys = Lt.addLeadingComment,
	      Es = Lt.addDanglingComment,
	      Cs = Lt.addTrailingComment;
	  var bs = { getMaxContinuousCount: Qi, getStringWidth: Zi, getAlignmentSize: es, getIndentSize: ts, skip: ns, skipWhitespace: rs, skipSpaces: us, skipNewline: os, skipToLineEnd: as, skipEverythingButNewLine: is, skipInlineComment: ss, skipTrailingComment: ls, hasNewline: cs, hasNewlineInRange: ps, hasSpaces: ds, isNextLineEmpty: fs, isNextLineEmptyAfterIndex: hs, isPreviousLineEmpty: ms, getNextNonSpaceNonCommentCharacterIndex: gs, makeString: Ds, addLeadingComment: ys, addDanglingComment: Es, addTrailingComment: Cs },
	      As = function As(t, n) {
	    var r = t.languageId,
	        u = e(t, ["languageId"]);return Object.assign({ linguistLanguageId: r }, u, n(t));
	  };var vs = Lt.getLast,
	      Fs = Lt.hasNewline,
	      xs = Lt.getNextNonSpaceNonCommentCharacterIndexWithStartIndex,
	      Ss = Lt.getNextNonSpaceNonCommentCharacter,
	      ws = Lt.hasNewlineInRange,
	      Bs = Lt.isNodeIgnoreComment,
	      Ts = Lt.addLeadingComment,
	      ks = Lt.addTrailingComment,
	      Ns = Lt.addDanglingComment,
	      Os = Lt.getNextNonSpaceNonCommentCharacterIndex;
	  function Ps(e, t) {
	    var n = (e.body || e.properties).filter(function (e) {
	      return "EmptyStatement" !== e.type;
	    });0 === n.length ? Ns(e, t) : Ts(n[0], t);
	  }function _s(e, t) {
	    "BlockStatement" === e.type ? Ps(e, t) : Ts(e, t);
	  }function Is(e, t, n, r, u, o) {
	    if (!n || "IfStatement" !== n.type || !r) return !1;return ")" === Ss(e, u, o.locEnd) ? (ks(t, u), !0) : t === n.consequent && r === n.alternate ? ("BlockStatement" === t.type ? ks(t, u) : Ns(n, u), !0) : "BlockStatement" === r.type ? (Ps(r, u), !0) : "IfStatement" === r.type ? (_s(r.consequent, u), !0) : n.consequent === r && (Ts(r, u), !0);
	  }function js(e, t, n, r, u, o) {
	    if (!n || "WhileStatement" !== n.type || !r) return !1;return ")" === Ss(e, u, o.locEnd) ? (ks(t, u), !0) : "BlockStatement" === r.type && (Ps(r, u), !0);
	  }function Ms(e, t, n, r) {
	    return !(!e || "TryStatement" !== e.type && "CatchClause" !== e.type || !n) && ("CatchClause" === e.type && t ? (ks(t, r), !0) : "BlockStatement" === n.type ? (Ps(n, r), !0) : "TryStatement" === n.type ? (_s(n.finalizer, r), !0) : "CatchClause" === n.type && (_s(n.body, r), !0));
	  }function Ls(e, t, n, r) {
	    if (e && ("ClassDeclaration" === e.type || "ClassExpression" === e.type || "DeclareClass" === e.type || "DeclareInterface" === e.type || "InterfaceDeclaration" === e.type || "TSInterfaceDeclaration" === e.type)) {
	      if (e.decorators && e.decorators.length > 0 && (!n || "Decorator" !== n.type)) return ks(e.decorators[e.decorators.length - 1], r), !0;if (e.body && n === e.body) return Ps(e.body, r), !0;if (n) {
	        var _arr2 = ["implements", "extends", "mixins"];
	        for (var _i5 = 0; _i5 < _arr2.length; _i5++) {
	          var _u17 = _arr2[_i5];if (e[_u17] && n === e[_u17][0]) return !t || t !== e.id && t !== e.typeParameters && t !== e.superClass ? Ns(e, r, _u17) : ks(t, r), !0;
	        }
	      }
	    }return !1;
	  }function Rs(e, t, n, r, u) {
	    return (t && n && ("Property" === t.type || "TSDeclareMethod" === t.type || "TSAbstractMethodDefinition" === t.type) && "Identifier" === n.type && t.key === n && ":" !== Ss(e, n, u.locEnd) || !(!n || !t || "Decorator" !== n.type || "ClassMethod" !== t.type && "ClassProperty" !== t.type && "TSAbstractClassProperty" !== t.type && "TSAbstractMethodDefinition" !== t.type && "TSDeclareMethod" !== t.type && "MethodDefinition" !== t.type)) && (ks(n, r), !0);
	  }function qs(e, t, n, r, u, o) {
	    if (t && "FunctionTypeParam" === t.type && n && "FunctionTypeAnnotation" === n.type && r && "FunctionTypeParam" !== r.type) return ks(t, u), !0;if (t && ("Identifier" === t.type || "AssignmentPattern" === t.type) && n && zs(n) && ")" === Ss(e, u, o.locEnd)) return ks(t, u), !0;if (n && "FunctionDeclaration" === n.type && r && "BlockStatement" === r.type) {
	      var _t55 = function () {
	        if (0 !== (n.params || n.parameters).length) return xs(e, o.locEnd(vs(n.params || n.parameters)));var t = xs(e, o.locEnd(n.id));return !1 !== t && xs(e, t + 1);
	      }();if (o.locStart(u) > _t55) return Ps(r, u), !0;
	    }return !1;
	  }function Vs(e, t) {
	    return !(!e || "ImportSpecifier" !== e.type) && (Ts(e, t), !0);
	  }function Ws(e, t) {
	    return !(!e || "LabeledStatement" !== e.type) && (Ts(e, t), !0);
	  }function $s(e, t, n, r) {
	    return t && t.body && 0 === t.body.length ? (r ? Ns(t, n) : Ts(t, n), !0) : !(!e || "Program" !== e.type || 0 !== e.body.length || !e.directives || 0 !== e.directives.length) && (r ? Ns(e, n) : Ts(e, n), !0);
	  }function Us(e) {
	    return "Block" === e.type || "CommentBlock" === e.type;
	  }function zs(e) {
	    return "ArrowFunctionExpression" === e.type || "FunctionExpression" === e.type || "FunctionDeclaration" === e.type || "ObjectMethod" === e.type || "ClassMethod" === e.type || "TSDeclareFunction" === e.type || "TSCallSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSMethodSignature" === e.type || "TSConstructorType" === e.type || "TSFunctionType" === e.type || "TSDeclareMethod" === e.type;
	  }function Js(e) {
	    return Us(e) && "*" === e.value[0] && /@type\b/.test(e.value);
	  }var Gs = { handleOwnLineComment: function handleOwnLineComment(e, t, n, r, u) {
	      var o = e.precedingNode,
	          a = e.enclosingNode,
	          i = e.followingNode;
	      return qs(t, o, a, i, e, n) || function (e, t, n) {
	        if (e && ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) && t && "Identifier" === t.type) return Ts(e, n), !0;return !1;
	      }(a, i, e) || Is(t, o, a, i, e, n) || js(t, o, a, i, e, n) || Ms(a, o, i, e) || Ls(a, o, i, e) || Vs(a, e) || function (e, t, n) {
	        if (e && ("ForInStatement" === e.type || "ForOfStatement" === e.type)) return Ts(e, n), !0;return !1;
	      }(a, 0, e) || function (e, t, n, r) {
	        if (t && ("UnionTypeAnnotation" === t.type || "TSUnionType" === t.type)) return Bs(r) && (n.prettierIgnore = !0, r.unignore = !0), !!e && (ks(e, r), !0);n && ("UnionTypeAnnotation" === n.type || "TSUnionType" === n.type) && Bs(r) && (n.types[0].prettierIgnore = !0, r.unignore = !0);return !1;
	      }(o, a, i, e) || $s(a, r, e, u) || function (e, t, n, r, u) {
	        if (n && "ImportSpecifier" === n.type && t && "ImportDeclaration" === t.type && Fs(e, u.locEnd(r))) return ks(n, r), !0;return !1;
	      }(t, a, o, e, n) || function (e, t) {
	        if (e && "AssignmentPattern" === e.type) return Ts(e, t), !0;return !1;
	      }(a, e) || Rs(t, a, o, e, n) || Ws(a, e);
	    }, handleEndOfLineComment: function handleEndOfLineComment(e, t, n, r, u) {
	      var o = e.precedingNode,
	          a = e.enclosingNode,
	          i = e.followingNode;
	      return function (e, t) {
	        if (e && Js(t)) return Ts(e, t), !0;return !1;
	      }(i, e) || qs(t, o, a, i, e, n) || function (e, t, n, r, u, o) {
	        var a = t && !ws(u, o.locEnd(t), o.locStart(r));if ((!t || !a) && e && ("ConditionalExpression" === e.type || "TSConditionalType" === e.type) && n) return Ts(n, r), !0;return !1;
	      }(a, o, i, e, t, n) || Vs(a, e) || Is(t, o, a, i, e, n) || js(t, o, a, i, e, n) || Ms(a, o, i, e) || Ls(a, o, i, e) || Ws(a, e) || function (e, t, n) {
	        if (t && ("CallExpression" === t.type || "OptionalCallExpression" === t.type) && e && t.callee === e && t.arguments.length > 0) return Ts(t.arguments[0], n), !0;return !1;
	      }(o, a, e) || function (e, t) {
	        if (e && ("Property" === e.type || "ObjectProperty" === e.type)) return Ts(e, t), !0;return !1;
	      }(a, e) || $s(a, r, e, u) || function (e, t, n) {
	        if (e && "TypeAlias" === e.type) return Ts(e, n), !0;return !1;
	      }(a, 0, e) || function (e, t, n) {
	        if (e && ("VariableDeclarator" === e.type || "AssignmentExpression" === e.type) && t && ("ObjectExpression" === t.type || "ArrayExpression" === t.type || "TemplateLiteral" === t.type || "TaggedTemplateExpression" === t.type || Us(n))) return Ts(t, n), !0;return !1;
	      }(a, i, e);
	    }, handleRemainingComment: function handleRemainingComment(e, t, n, r, u) {
	      var o = e.precedingNode,
	          a = e.enclosingNode,
	          i = e.followingNode;
	      return !!(Is(t, o, a, i, e, n) || js(t, o, a, i, e, n) || function (e, t, n) {
	        if (e && ("ObjectProperty" === e.type || "Property" === e.type) && e.shorthand && e.key === t && "AssignmentPattern" === e.value.type) return ks(e.value.left, n), !0;return !1;
	      }(a, o, e) || function (e, t, n, r) {
	        if (")" !== Ss(e, n, r.locEnd)) return !1;if (t && (zs(t) && 0 === (t.params || t.parameters).length || ("CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type) && 0 === t.arguments.length)) return Ns(t, n), !0;if (t && "MethodDefinition" === t.type && 0 === t.value.params.length) return Ns(t.value, n), !0;return !1;
	      }(t, a, e, n) || Rs(t, a, o, e, n) || $s(a, r, e, u) || function (e, t, n, r) {
	        if (!t || "ArrowFunctionExpression" !== t.type) return !1;var u = Os(e, n, r.locEnd);if (!1 !== u && "=>" === e.slice(u, u + 2)) return Ns(t, n), !0;return !1;
	      }(t, a, e, n) || function (e, t, n, r, u) {
	        if ("(" !== Ss(e, r, u.locEnd)) return !1;if (n && t && ("FunctionDeclaration" === t.type || "FunctionExpression" === t.type || "ClassMethod" === t.type || "MethodDefinition" === t.type || "ObjectMethod" === t.type)) return ks(n, r), !0;return !1;
	      }(t, a, o, e, n) || function (e, t, n, r, u) {
	        if (!t || "TSMappedType" !== t.type) return !1;if (r && "TSTypeParameter" === r.type && r.name) return Ts(r.name, u), !0;if (n && "TSTypeParameter" === n.type && n.constraint) return ks(n.constraint, u), !0;return !1;
	      }(0, a, o, i, e) || function (e, t) {
	        if (e && ("ContinueStatement" === e.type || "BreakStatement" === e.type) && !e.label) return ks(e, t), !0;return !1;
	      }(a, e) || function (e, t, n, r, u) {
	        if (!n && t && ("TSMethodSignature" === t.type || "TSDeclareFunction" === t.type || "TSAbstractMethodDefinition" === t.type) && ";" === Ss(e, r, u.locEnd)) return ks(t, r), !0;return !1;
	      }(t, a, i, e, n));
	    }, hasLeadingComment: function hasLeadingComment(e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	        return !0;
	      };
	      return e.leadingComments ? e.leadingComments.some(t) : !!e.comments && e.comments.some(function (e) {
	        return e.leading && t(e);
	      });
	    }, isBlockComment: Us, isTypeCastComment: Js, getGapRegex: function getGapRegex(e) {
	      if (e && "BinaryExpression" !== e.type && "LogicalExpression" !== e.type) return (/^[\s&(|]*$/
	      );
	    }, getCommentChildNodes: function getCommentChildNodes(e, t) {
	      if (("typescript" === t.parser || "flow" === t.parser) && "MethodDefinition" === e.type && e.value && "FunctionExpression" === e.value.type && 0 === e.value.params.length && !e.value.returnType && (!e.value.typeParameters || 0 === e.value.typeParameters.length) && e.value.body) return [].concat(_toConsumableArray(e.decorators || []), [e.key, e.value.body]);
	    } };var _dn$builders2 = dn.builders,
	      Hs = _dn$builders2.indent,
	      Xs = _dn$builders2.join,
	      Ys = _dn$builders2.line,
	      Ks = _dn$builders2.hardline,
	      Qs = _dn$builders2.softline,
	      Zs = _dn$builders2.literalline,
	      el = _dn$builders2.concat,
	      tl = _dn$builders2.group,
	      nl = _dn$builders2.dedentToRoot,
	      _dn$utils = dn.utils,
	      rl = _dn$utils.mapDoc,
	      ul = _dn$utils.replaceNewlinesWithLiterallines,
	      ol = Gs.isBlockComment,
	      al = Gs.hasLeadingComment;
	  function il(e) {
	    return e.replace(/([\\`]|\${)/g, "\\$1");
	  }function sl(e, t) {
	    return rl(e, function (e) {
	      if (!e.parts) return e;var n = e.parts.map(function (e) {
	        return "string" == typeof e ? t ? e.replace(/(\\*)`/g, "$1$1\\`") : il(e) : e;
	      });return Object.assign({}, e, { parts: n });
	    });
	  }function ll(e) {
	    var t = [];var n = !1;return e.map(function (e) {
	      return e.trim();
	    }).forEach(function (e, r, u) {
	      "" !== e && ("" === u[r - 1] && n ? t.push(el([Ks, e])) : t.push(e), n = !0);
	    }), 0 === t.length ? null : Xs(Ks, t);
	  }function cl(e) {
	    var t = e.getValue(),
	        n = e.getParentNode(),
	        r = e.getParentNode(1);return r && t.quasis && "JSXExpressionContainer" === n.type && "JSXElement" === r.type && "style" === r.openingElement.name.name && r.openingElement.attributes.some(function (e) {
	      return "jsx" === e.name.name;
	    }) || n && "TaggedTemplateExpression" === n.type && "Identifier" === n.tag.type && "css" === n.tag.name || n && "TaggedTemplateExpression" === n.type && "MemberExpression" === n.tag.type && "css" === n.tag.object.name && ("global" === n.tag.property.name || "resolve" === n.tag.property.name);
	  }function pl(e) {
	    return e.match.apply(e, [function (e) {
	      return "TemplateLiteral" === e.type;
	    }, function (e, t) {
	      return "ArrayExpression" === e.type && "elements" === t;
	    }, function (e, t) {
	      return ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t;
	    }].concat(dl));
	  }var dl = [function (e, t) {
	    return "ObjectExpression" === e.type && "properties" === t;
	  }, function (e, t) {
	    return "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t;
	  }, function (e, t) {
	    return "Decorator" === e.type && "expression" === t;
	  }];function fl(e) {
	    var t = e.getParentNode();if (!t || "TaggedTemplateExpression" !== t.type) return !1;var n = t.tag;
	    switch (n.type) {case "MemberExpression":
	        return ml(n.object) || gl(n);case "CallExpression":
	        return ml(n.callee) || "MemberExpression" === n.callee.type && ("MemberExpression" === n.callee.object.type && (ml(n.callee.object.object) || gl(n.callee.object)) || "CallExpression" === n.callee.object.type && ml(n.callee.object.callee));case "Identifier":
	        return "css" === n.name;default:
	        return !1;}
	  }function hl(e) {
	    var t = e.getParentNode(),
	        n = e.getParentNode(1);return n && "JSXExpressionContainer" === t.type && "JSXAttribute" === n.type && "JSXIdentifier" === n.name.type && "css" === n.name.name;
	  }function ml(e) {
	    return "Identifier" === e.type && "styled" === e.name;
	  }function gl(e) {
	    return (/^[A-Z]/.test(e.object.name) && "extend" === e.property.name
	    );
	  }function Dl(e, t) {
	    return al(e, function (e) {
	      return ol(e) && e.value === " ".concat(t, " ");
	    });
	  }var yl = 0;var El = function El(e, t, n, r) {
	    var u = e.getValue(),
	        o = e.getParentNode(),
	        a = e.getParentNode(1);switch (u.type) {case "TemplateLiteral":
	        {
	          if ([cl, fl, hl, pl].some(function (t) {
	            return t(e);
	          })) {
	            var _r50 = u.quasis.map(function (e) {
	              return e.value.raw;
	            });var _o13 = 0;var _a13 = _r50.reduce(function (e, t, n) {
	              return 0 === n ? t : e + "@prettier-placeholder-" + _o13++ + "-id" + t;
	            }, "");return function (e, t, n) {
	              var r = t.getValue();if (1 === r.quasis.length && !r.quasis[0].value.raw.trim()) return "``";var u = r.expressions ? t.map(n, "expressions") : [],
	                  o = function (e, t) {
	                if (!t || !t.length) return e;var n = 0;var r = rl(e, function (e) {
	                  if (!e || !e.parts || !e.parts.length) return e;var r = e.parts;
	                  var u = r.indexOf("@"),
	                      o = u + 1;if (u > -1 && "string" == typeof r[o] && r[o].startsWith("prettier-placeholder")) {
	                    var _e84 = r[u],
	                        _t56 = r[o],
	                        _n37 = r.slice(o + 1);r = r.slice(0, u).concat([_e84 + _t56]).concat(_n37);
	                  }var a = [];return r.forEach(function (e) {
	                    "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).forEach(function (e, r) {
	                      r % 2 != 0 ? (a.push("${", t[e], "}"), n++) : a.push(ul(e));
	                    }) : a.push(e);
	                  }), Object.assign({}, e, { parts: a });
	                });return t.length === n ? r : null;
	              }(e, u);if (!o) throw new Error("Couldn't insert all the expressions");return el(["`", Hs(el([Ks, o])), Qs, "`"]);
	            }(n(_a13, { parser: "scss" }, { stripTrailingHardline: !0 }), e, t);
	          }if (function (e) {
	            var t = e.getValue(),
	                n = e.getParentNode();return Dl(t, "GraphQL") || n && ("TaggedTemplateExpression" === n.type && ("MemberExpression" === n.tag.type && "graphql" === n.tag.object.name && "experimental" === n.tag.property.name || "Identifier" === n.tag.type && ("gql" === n.tag.name || "graphql" === n.tag.name)) || "CallExpression" === n.type && "Identifier" === n.callee.type && "graphql" === n.callee.name);
	          }(e)) {
	            var _r51 = u.expressions ? e.map(t, "expressions") : [],
	                _o14 = u.quasis.length;if (1 === _o14 && "" === u.quasis[0].value.raw.trim()) return "``";var _a14 = [];for (var _e85 = 0; _e85 < _o14; _e85++) {
	              var _t57 = 0 === _e85,
	                  _i6 = _e85 === _o14 - 1,
	                  _s5 = u.quasis[_e85].value.cooked;if ("string" != typeof _s5) return null;var _l5 = _s5.split("\n"),
	                  _c4 = _l5.length,
	                  _p5 = _r51[_e85],
	                  _d3 = _c4 > 2 && "" === _l5[0].trim() && "" === _l5[1].trim(),
	                  _f3 = _c4 > 2 && "" === _l5[_c4 - 1].trim() && "" === _l5[_c4 - 2].trim(),
	                  _h3 = _l5.every(function (e) {
	                return (/^\s*(?:#[^\n\r]*)?$/.test(e)
	                );
	              });if (!_i6 && /#[^\n\r]*$/.test(_l5[_c4 - 1])) return null;var _m3 = null;_m3 = _h3 ? ll(_l5) : n(_s5, { parser: "graphql" }, { stripTrailingHardline: !0 }), _m3 ? (_m3 = sl(_m3, !1), !_t57 && _d3 && _a14.push(""), _a14.push(_m3), !_i6 && _f3 && _a14.push("")) : _t57 || _i6 || !_d3 || _a14.push(""), _p5 && _a14.push(el(["${", _p5, "}"]));
	            }return el(["`", Hs(el([Ks, Xs(Ks, _a14)])), Ks, "`"]);
	          }var _o12 = function (e) {
	            return Dl(e.getValue(), "HTML") || e.match(function (e) {
	              return "TemplateLiteral" === e.type;
	            }, function (e, t) {
	              return "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t;
	            });
	          }(e) ? "html" : function (e) {
	            return e.match.apply(e, [function (e) {
	              return "TemplateLiteral" === e.type;
	            }, function (e, t) {
	              return ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "template" === e.key.name && "value" === t;
	            }].concat(dl));
	          }(e) ? "angular" : void 0;if (_o12) return function (e, t, n, r, u) {
	            var o = e.getValue(),
	                a = yl;yl = yl + 1 >>> 0;var i = function i(e) {
	              return "PRETTIER_HTML_PLACEHOLDER_".concat(e, "_").concat(a, "_IN_JS");
	            },
	                s = o.quasis.map(function (e, t, n) {
	              return t === n.length - 1 ? e.value.cooked : e.value.cooked + i(t);
	            }).join(""),
	                l = e.map(t, "expressions");if (0 === l.length && 0 === s.trim().length) return "``";var c = new RegExp(i("(\\d+)"), "g");var p = 0;var d = rl(n(s, { parser: r, __onHtmlRoot: function __onHtmlRoot(e) {
	                p = e.children.length;
	              }
	            }, { stripTrailingHardline: !0 }), function (e) {
	              if ("string" != typeof e) return e;var t = [],
	                  n = e.split(c);for (var _e86 = 0; _e86 < n.length; _e86++) {
	                var _r52 = n[_e86];if (_e86 % 2 == 0) {
	                  _r52 && (_r52 = il(_r52), u.embeddedInHtml && (_r52 = _r52.replace(/<\/(script)\b/gi, "<\\/$1")), t.push(_r52));continue;
	                }var _o15 = +_r52;t.push(el(["${", tl(l[_o15]), "}"]));
	              }return el(t);
	            }),
	                f = /^\s/.test(s) ? " " : "",
	                h = /\s$/.test(s) ? " " : "",
	                m = "ignore" === u.htmlWhitespaceSensitivity ? Ks : f && h ? Ys : null;if (m) return tl(el(["`", Hs(el([m, tl(d)])), m, "`"]));return tl(el(["`", f, p > 1 ? Hs(tl(d)) : tl(d), h, "`"]));
	          }(e, t, n, _o12, r);break;
	        }case "TemplateElement":
	        if (a && "TaggedTemplateExpression" === a.type && 1 === o.quasis.length && "Identifier" === a.tag.type && ("md" === a.tag.name || "markdown" === a.tag.name)) {
	          var _e87 = o.quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function (e, t) {
	            return "\\".repeat(t.length / 2) + "`";
	          }),
	              _t58 = function (e) {
	            var t = e.match(/^([^\S\n]*)\S/m);return null === t ? "" : t[1];
	          }(_e87);return el(["" !== _t58 ? Hs(el([Qs, i(_e87.replace(new RegExp("^".concat(_t58), "gm"), ""))])) : el([Zs, nl(i(_e87))]), Qs]);
	        }}function i(e) {
	      return sl(n(e, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
	    }
	  };var Cl = function Cl(e, t, n) {
	    if (["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"].forEach(function (e) {
	      delete t[e];
	    }), "Program" === e.type && delete t.sourceType, "BigIntLiteral" === e.type && (t.value && (t.value = t.value.toLowerCase()), t.bigint && (t.bigint = t.bigint.toLowerCase())), "DecimalLiteral" === e.type && (t.value = Number(t.value)), "EmptyStatement" === e.type) return null;if ("JSXText" === e.type) return null;if ("JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;if ("Property" !== e.type && "ObjectProperty" !== e.type && "MethodDefinition" !== e.type && "ClassProperty" !== e.type && "ClassMethod" !== e.type && "TSDeclareMethod" !== e.type && "TSPropertySignature" !== e.type && "ObjectTypeProperty" !== e.type || "object" != _typeof(e.key) || !e.key || "Literal" !== e.key.type && "NumericLiteral" !== e.key.type && "StringLiteral" !== e.key.type && "Identifier" !== e.key.type || delete t.key, "OptionalMemberExpression" === e.type && !1 === e.optional && (t.type = "MemberExpression", delete t.optional), "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(function (e) {
	      return "jsx" === e.name.name;
	    })) {
	      t.children.filter(function (e) {
	        return "JSXExpressionContainer" === e.type && "TemplateLiteral" === e.expression.type;
	      }).map(function (e) {
	        return e.expression;
	      }).reduce(function (e, t) {
	        return e.concat(t.quasis);
	      }, []).forEach(function (e) {
	        return delete e.value;
	      });
	    }"JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && t.value.expression.quasis.forEach(function (e) {
	      return delete e.value;
	    }), "JSXAttribute" === e.type && e.value && "Literal" === e.value.type && /["']|&quot;|&apos;/.test(e.value.value) && (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"'));var r = e.expression || e.callee;if ("Decorator" === e.type && "CallExpression" === r.type && "Component" === r.callee.name && 1 === r.arguments.length) {
	      var _n38 = e.expression.arguments[0].properties;t.expression.arguments[0].properties.forEach(function (e, t) {
	        var r = null;switch (_n38[t].key.name) {case "styles":
	            "ArrayExpression" === e.value.type && (r = e.value.elements[0]);break;case "template":
	            "TemplateLiteral" === e.value.type && (r = e.value);}r && r.quasis.forEach(function (e) {
	          return delete e.value;
	        });
	      });
	    }if ("TaggedTemplateExpression" !== e.type || "MemberExpression" !== e.tag.type && ("Identifier" !== e.tag.type || "gql" !== e.tag.name && "graphql" !== e.tag.name && "css" !== e.tag.name && "md" !== e.tag.name && "markdown" !== e.tag.name && "html" !== e.tag.name) && "CallExpression" !== e.tag.type || t.quasi.quasis.forEach(function (e) {
	      return delete e.value;
	    }), "TemplateLiteral" === e.type) {
	      (e.leadingComments && e.leadingComments.some(function (e) {
	        return "CommentBlock" === e.type && ["GraphQL", "HTML"].some(function (t) {
	          return e.value === " ".concat(t, " ");
	        });
	      }) || "CallExpression" === n.type && "graphql" === n.callee.name) && t.quasis.forEach(function (e) {
	        return delete e.value;
	      }), e.leadingComments || t.quasis.forEach(function (e) {
	        e.value && delete e.value.cooked;
	      });
	    }"InterpreterDirective" === e.type && (t.value = t.value.trimEnd());
	  };var bl = function bl(e) {
	    if ("string" != typeof e) throw new TypeError("Expected a string");var t = e.match(/(?:\r?\n)/g) || [];if (0 === t.length) return;var n = t.filter(function (e) {
	      return "\r\n" === e;
	    }).length;return n > t.length - n ? "\r\n" : "\n";
	  };var Al = bl;Al.graceful = function (e) {
	    return "string" == typeof e && bl(e) || "\n";
	  };var vl = $e(function (e, t) {
	    function n() {
	      var e = Rr;return n = function n() {
	        return e;
	      }, e;
	    }function r() {
	      var e = (t = Al) && t.__esModule ? t : { default: t };var t;return r = function r() {
	        return e;
	      }, e;
	    }Object.defineProperty(t, "__esModule", { value: !0 }), t.extract = function (e) {
	      var t = e.match(a);return t ? t[0].trimLeft() : "";
	    }, t.strip = function (e) {
	      var t = e.match(a);return t && t[0] ? e.substring(t[0].length) : e;
	    }, t.parse = function (e) {
	      return f(e).pragmas;
	    }, t.parseWithComments = f, t.print = function (_ref33) {
	      var _ref33$comments = _ref33.comments,
	          e = _ref33$comments === undefined ? "" : _ref33$comments,
	          _ref33$pragmas = _ref33.pragmas,
	          t = _ref33$pragmas === undefined ? {} : _ref33$pragmas;
	      var u = (0, r().default)(e) || n().EOL,
	          o = Object.keys(t),
	          a = o.map(function (e) {
	        return h(e, t[e]);
	      }).reduce(function (e, t) {
	        return e.concat(t);
	      }, []).map(function (e) {
	        return " * " + e + u;
	      }).join("");if (!e) {
	        if (0 === o.length) return "";if (1 === o.length && !Array.isArray(t[o[0]])) {
	          var _e88 = t[o[0]];return "".concat("/**", " ").concat(h(o[0], _e88)[0]).concat(" */");
	        }
	      }var i = e.split(u).map(function (e) {
	        return "".concat(" *", " ").concat(e);
	      }).join(u) + u;return "/**" + u + (e ? i : "") + (e && o.length ? " *" + u : "") + a + " */";
	    };var u = /\*\/$/,
	        o = /^\/\*\*/,
	        a = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
	        i = /(^|\s+)\/\/([^\r\n]*)/g,
	        s = /^(\r?\n)+/,
	        l = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
	        c = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
	        p = /(\r?\n|^) *\* ?/g,
	        d = [];function f(e) {
	      var t = (0, r().default)(e) || n().EOL;e = e.replace(o, "").replace(u, "").replace(p, "$1");var a = "";for (; a !== e;) {
	        a = e, e = e.replace(l, "".concat(t, "$1 $2").concat(t));
	      }e = e.replace(s, "").trimRight();var f = Object.create(null),
	          h = e.replace(c, "").replace(s, "").trimRight();var m = void 0;for (; m = c.exec(e);) {
	        var _e89 = m[2].replace(i, "");"string" == typeof f[m[1]] || Array.isArray(f[m[1]]) ? f[m[1]] = d.concat(f[m[1]], _e89) : f[m[1]] = _e89;
	      }return { comments: h, pragmas: f };
	    }function h(e, t) {
	      return d.concat(t).map(function (t) {
	        return "@".concat(e, " ").concat(t).trim();
	      });
	    }
	  });var Fl = vl.parseWithComments,
	      xl = vl.strip,
	      Sl = vl.extract,
	      wl = vl.print,
	      Bl = Lt.getShebang,
	      Tl = Rt.normalizeEndOfLine;
	  function kl(e) {
	    var t = Bl(e);t && (e = e.slice(t.length + 1));var n = Sl(e),
	        _Fl = Fl(n),
	        r = _Fl.pragmas,
	        u = _Fl.comments;return { shebang: t, text: e, pragmas: r, comments: u };
	  }var Nl = { hasPragma: function hasPragma(e) {
	      var t = Object.keys(kl(e).pragmas);return t.includes("prettier") || t.includes("format");
	    }, insertPragma: function insertPragma(e) {
	      var _kl = kl(e),
	          t = _kl.shebang,
	          n = _kl.text,
	          r = _kl.pragmas,
	          u = _kl.comments,
	          o = xl(n),
	          a = wl({ pragmas: Object.assign({ format: "" }, r), comments: u.trimStart() });

	      return (t ? "".concat(t, "\n") : "") + Tl(a) + (o.startsWith("\n") ? "\n" : "\n\n") + o;
	    } },
	      Ol = $e(function (e) {
	    !function () {
	      function t(e) {
	        if (null == e) return !1;switch (e.type) {case "BlockStatement":case "BreakStatement":case "ContinueStatement":case "DebuggerStatement":case "DoWhileStatement":case "EmptyStatement":case "ExpressionStatement":case "ForInStatement":case "ForStatement":case "IfStatement":case "LabeledStatement":case "ReturnStatement":case "SwitchStatement":case "ThrowStatement":case "TryStatement":case "VariableDeclaration":case "WhileStatement":case "WithStatement":
	            return !0;}return !1;
	      }function n(e) {
	        switch (e.type) {case "IfStatement":
	            return null != e.alternate ? e.alternate : e.consequent;case "LabeledStatement":case "ForStatement":case "ForInStatement":case "WhileStatement":case "WithStatement":
	            return e.body;}return null;
	      }e.exports = { isExpression: function isExpression(e) {
	          if (null == e) return !1;switch (e.type) {case "ArrayExpression":case "AssignmentExpression":case "BinaryExpression":case "CallExpression":case "ConditionalExpression":case "FunctionExpression":case "Identifier":case "Literal":case "LogicalExpression":case "MemberExpression":case "NewExpression":case "ObjectExpression":case "SequenceExpression":case "ThisExpression":case "UnaryExpression":case "UpdateExpression":
	              return !0;}return !1;
	        }, isStatement: t, isIterationStatement: function isIterationStatement(e) {
	          if (null == e) return !1;switch (e.type) {case "DoWhileStatement":case "ForInStatement":case "ForStatement":case "WhileStatement":
	              return !0;}return !1;
	        }, isSourceElement: function isSourceElement(e) {
	          return t(e) || null != e && "FunctionDeclaration" === e.type;
	        }, isProblematicIfStatement: function isProblematicIfStatement(e) {
	          var t;if ("IfStatement" !== e.type) return !1;if (null == e.alternate) return !1;t = e.consequent;do {
	            if ("IfStatement" === t.type && null == t.alternate) return !0;t = n(t);
	          } while (t);return !1;
	        }, trailingStatement: n };
	    }();
	  }),
	      Pl = $e(function (e) {
	    !function () {
	      var t, n, r, u, o, a;function i(e) {
	        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320);
	      }for (n = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], u = new Array(128), a = 0; a < 128; ++a) {
	        u[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || 36 === a || 95 === a;
	      }for (o = new Array(128), a = 0; a < 128; ++a) {
	        o[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || 36 === a || 95 === a;
	      }e.exports = { isDecimalDigit: function isDecimalDigit(e) {
	          return 48 <= e && e <= 57;
	        }, isHexDigit: function isHexDigit(e) {
	          return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70;
	        }, isOctalDigit: function isOctalDigit(e) {
	          return e >= 48 && e <= 55;
	        }, isWhiteSpace: function isWhiteSpace(e) {
	          return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && r.indexOf(e) >= 0;
	        }, isLineTerminator: function isLineTerminator(e) {
	          return 10 === e || 13 === e || 8232 === e || 8233 === e;
	        }, isIdentifierStartES5: function isIdentifierStartES5(e) {
	          return e < 128 ? u[e] : n.NonAsciiIdentifierStart.test(i(e));
	        }, isIdentifierPartES5: function isIdentifierPartES5(e) {
	          return e < 128 ? o[e] : n.NonAsciiIdentifierPart.test(i(e));
	        }, isIdentifierStartES6: function isIdentifierStartES6(e) {
	          return e < 128 ? u[e] : t.NonAsciiIdentifierStart.test(i(e));
	        }, isIdentifierPartES6: function isIdentifierPartES6(e) {
	          return e < 128 ? o[e] : t.NonAsciiIdentifierPart.test(i(e));
	        } };
	    }();
	  }),
	      _l = $e(function (e) {
	    !function () {
	      var t = Pl;function n(e, t) {
	        return !(!t && "yield" === e) && r(e, t);
	      }function r(e, t) {
	        if (t && function (e) {
	          switch (e) {case "implements":case "interface":case "package":case "private":case "protected":case "public":case "static":case "let":
	              return !0;default:
	              return !1;}
	        }(e)) return !0;switch (e.length) {case 2:
	            return "if" === e || "in" === e || "do" === e;case 3:
	            return "var" === e || "for" === e || "new" === e || "try" === e;case 4:
	            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;case 5:
	            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;case 6:
	            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;case 7:
	            return "default" === e || "finally" === e || "extends" === e;case 8:
	            return "function" === e || "continue" === e || "debugger" === e;case 10:
	            return "instanceof" === e;default:
	            return !1;}
	      }function u(e, t) {
	        return "null" === e || "true" === e || "false" === e || n(e, t);
	      }function o(e, t) {
	        return "null" === e || "true" === e || "false" === e || r(e, t);
	      }function a(e) {
	        var n, r, u;if (0 === e.length) return !1;if (u = e.charCodeAt(0), !t.isIdentifierStartES5(u)) return !1;for (n = 1, r = e.length; n < r; ++n) {
	          if (u = e.charCodeAt(n), !t.isIdentifierPartES5(u)) return !1;
	        }return !0;
	      }function i(e) {
	        var n, r, u, o, a;if (0 === e.length) return !1;for (a = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
	          if (55296 <= (u = e.charCodeAt(n)) && u <= 56319) {
	            if (++n >= r) return !1;if (!(56320 <= (o = e.charCodeAt(n)) && o <= 57343)) return !1;u = 1024 * (u - 55296) + (o - 56320) + 65536;
	          }if (!a(u)) return !1;a = t.isIdentifierPartES6;
	        }return !0;
	      }e.exports = { isKeywordES5: n, isKeywordES6: r, isReservedWordES5: u, isReservedWordES6: o, isRestrictedWord: function isRestrictedWord(e) {
	          return "eval" === e || "arguments" === e;
	        }, isIdentifierNameES5: a, isIdentifierNameES6: i, isIdentifierES5: function isIdentifierES5(e, t) {
	          return a(e) && !u(e, t);
	        }, isIdentifierES6: function isIdentifierES6(e, t) {
	          return i(e) && !o(e, t);
	        } };
	    }();
	  });var Il = $e(function (e, t) {
	    t.ast = Ol, t.code = Pl, t.keyword = _l;
	  }).keyword.isIdentifierNameES5,
	      jl = Lt.getLast,
	      Ml = Lt.hasNewline,
	      Ll = Lt.hasNewlineInRange,
	      Rl = Lt.hasIgnoreComment,
	      ql = Lt.hasNodeIgnoreComment,
	      Vl = Lt.skipWhitespace,
	      Wl = new RegExp("^".concat("(?:(?=.)\\s)", "*:")),
	      $l = new RegExp("^".concat("(?:(?=.)\\s)", "*::"));function Ul(e, t) {
	    if (!e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return !1;if (Array.isArray(e)) return e.some(function (e) {
	      return Ul(e, t);
	    });var n = t(e);return "boolean" == typeof n ? n : Object.keys(e).some(function (n) {
	      return Ul(e[n], t);
	    });
	  }function zl(e) {
	    return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || "CallExpression" === e.type || "OptionalCallExpression" === e.type || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || "TSAsExpression" === e.type || "TSNonNullExpression" === e.type;
	  }var Jl = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);function Gl(e) {
	    return e && Jl.has(e.type);
	  }function Hl(e) {
	    return "BooleanLiteral" === e.type || "DirectiveLiteral" === e.type || "Literal" === e.type || "NullLiteral" === e.type || "NumericLiteral" === e.type || "BigIntLiteral" === e.type || "DecimalLiteral" === e.type || "RegExpLiteral" === e.type || "StringLiteral" === e.type || "TemplateLiteral" === e.type || "TSTypeLiteral" === e.type || "JSXText" === e.type;
	  }function Xl(e) {
	    return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value;
	  }function Yl(e) {
	    return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value;
	  }function Kl(e) {
	    return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type;
	  }function Ql(e) {
	    return !("CallExpression" !== e.type && "OptionalCallExpression" !== e.type || "Identifier" !== e.callee.type || "async" !== e.callee.name && "inject" !== e.callee.name && "fakeAsync" !== e.callee.name);
	  }function Zl(e) {
	    return "JSXElement" === e.type || "JSXFragment" === e.type;
	  }function ec(e) {
	    return "get" === e.kind || "set" === e.kind;
	  }function tc(e, t, n) {
	    return n.locStart(e) === n.locStart(t);
	  }function nc(e, t) {
	    return ec(e) || tc(e, e.value, t);
	  }var rc = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);var uc = new Set(["AnyTypeAnnotation", "NullLiteralTypeAnnotation", "GenericTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation", "BooleanTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringTypeAnnotation"]);var oc = /^(skip|[fx]?(it|describe|test))$/;function ac(e) {
	    return "CallExpression" === e.type || "OptionalCallExpression" === e.type;
	  }var ic = new RegExp("([ \n\r\t]+)"),
	      sc = new RegExp("[^ \n\r\t]");function lc(e) {
	    return Hl(e) && (sc.test(fc(e)) || !/\n/.test(fc(e)));
	  }function cc(e, t, n) {
	    if (Zl(t)) return ql(t);return t.comments && t.comments.some(function (t) {
	      return t.leading && Ml(e, n.locEnd(t));
	    });
	  }function pc(e) {
	    return (/^(\d+|\d+\.\d+)$/.test(e)
	    );
	  }function dc(e) {
	    return e.quasis.some(function (e) {
	      return e.value.raw.includes("\n");
	    });
	  }function fc(e) {
	    return e.extra ? e.extra.raw : e.raw;
	  }var hc = { "==": !0, "!=": !0, "===": !0, "!==": !0 },
	      mc = { "*": !0, "/": !0, "%": !0 },
	      gc = { ">>": !0, ">>>": !0, "<<": !0 };var Dc = {};function yc(e) {
	    return Dc[e];
	  }[["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].forEach(function (e, t) {
	    e.forEach(function (e) {
	      Dc[e] = t;
	    });
	  });var Ec = { classChildNeedsASIProtection: function classChildNeedsASIProtection(e) {
	      if (e) {
	        if (e.static || e.accessibility) return !1;if (!e.computed) {
	          var _t59 = e.key && e.key.name;if ("in" === _t59 || "instanceof" === _t59) return !0;
	        }switch (e.type) {case "ClassProperty":case "TSAbstractClassProperty":
	            return e.computed;case "MethodDefinition":case "TSAbstractMethodDefinition":case "ClassMethod":case "ClassPrivateMethod":
	            {
	              var _t60 = e.value ? e.value.async : e.async,
	                  _n39 = e.value ? e.value.generator : e.generator;return !_t60 && "get" !== e.kind && "set" !== e.kind && !(!e.computed && !_n39);
	            }case "TSIndexSignature":
	            return !0;default:
	            return !1;}
	      }
	    }, classPropMayCauseASIProblems: function classPropMayCauseASIProblems(e) {
	      var t = e.getNode();if ("ClassProperty" !== t.type) return !1;var n = t.key && t.key.name;return !("static" !== n && "get" !== n && "set" !== n || t.value || t.typeAnnotation) || void 0;
	    }, getFlowVariance: function getFlowVariance(e) {
	      if (!e.variance) return null;var t = e.variance.kind || e.variance;switch (t) {case "plus":
	          return "+";case "minus":
	          return "-";default:
	          return t;}
	    }, getLeftSidePathName: function getLeftSidePathName(e, t) {
	      if (t.expressions) return ["expressions", 0];if (t.left) return ["left"];if (t.test) return ["test"];if (t.object) return ["object"];if (t.callee) return ["callee"];if (t.tag) return ["tag"];if (t.argument) return ["argument"];if (t.expression) return ["expression"];throw new Error("Unexpected node has no left side.");
	    }, getParentExportDeclaration: function getParentExportDeclaration(e) {
	      var t = e.getParentNode();return "declaration" === e.getName() && Gl(t) ? t : null;
	    }, getTypeScriptMappedTypeModifier: function getTypeScriptMappedTypeModifier(e, t) {
	      return "+" === e ? "+" + t : "-" === e ? "-" + t : t;
	    }, hasDanglingComments: function hasDanglingComments(e) {
	      return e.comments && e.comments.some(function (e) {
	        return !e.leading && !e.trailing;
	      });
	    }, hasFlowAnnotationComment: function hasFlowAnnotationComment(e) {
	      return e && $l.test(e[0].value);
	    }, hasFlowShorthandAnnotationComment: function hasFlowShorthandAnnotationComment(e) {
	      return e.extra && e.extra.parenthesized && e.trailingComments && Wl.test(e.trailingComments[0].value);
	    }, hasLeadingComment: function hasLeadingComment(e) {
	      return e.comments && e.comments.some(function (e) {
	        return e.leading;
	      });
	    }, hasLeadingOwnLineComment: cc, hasNakedLeftSide: zl, hasNewlineBetweenOrAfterDecorators: function hasNewlineBetweenOrAfterDecorators(e, t) {
	      return Ll(t.originalText, t.locStart(e.decorators[0]), t.locEnd(jl(e.decorators))) || Ml(t.originalText, t.locEnd(jl(e.decorators)));
	    }, hasNgSideEffect: function hasNgSideEffect(e) {
	      return Ul(e.getValue(), function (e) {
	        switch (e.type) {case void 0:
	            return !1;case "CallExpression":case "OptionalCallExpression":case "AssignmentExpression":
	            return !0;}
	      });
	    }, hasNode: Ul, hasPrettierIgnore: function hasPrettierIgnore(e) {
	      return Rl(e) || function (e) {
	        var t = e.getValue(),
	            n = e.getParentNode();if (!(n && t && Zl(t) && Zl(n))) return !1;var r = null;for (var _e90 = n.children.indexOf(t); _e90 > 0; _e90--) {
	          var _t61 = n.children[_e90 - 1];if ("JSXText" !== _t61.type || lc(_t61)) {
	            r = _t61;break;
	          }
	        }return r && "JSXExpressionContainer" === r.type && "JSXEmptyExpression" === r.expression.type && r.expression.comments && r.expression.comments.some(function (e) {
	          return "prettier-ignore" === e.value.trim();
	        });
	      }(e);
	    }, hasTrailingComment: function hasTrailingComment(e) {
	      return e.comments && e.comments.some(function (e) {
	        return e.trailing;
	      });
	    }, hasTrailingLineComment: function hasTrailingLineComment(e) {
	      return e.comments && e.comments.some(function (e) {
	        return e.trailing && !Gs.isBlockComment(e);
	      });
	    }, identity: function identity(e) {
	      return e;
	    }, isBinaryish: function isBinaryish(e) {
	      return rc.has(e.type);
	    }, isCallOrOptionalCallExpression: ac, isEmptyJSXElement: function isEmptyJSXElement(e) {
	      if (0 === e.children.length) return !0;if (e.children.length > 1) return !1;var t = e.children[0];return Hl(t) && !lc(t);
	    }, isExportDeclaration: Gl, isFlowAnnotationComment: function isFlowAnnotationComment(e, t, n) {
	      var r = n.locStart(t),
	          u = Vl(e, n.locEnd(t));return !1 !== u && "/*" === e.slice(r, r + 2) && "*/" === e.slice(u, u + 2);
	    }, isFunctionCompositionArgs: function isFunctionCompositionArgs(e) {
	      if (e.length <= 1) return !1;var t = 0;var _iteratorNormalCompletion69 = true;
	      var _didIteratorError69 = false;
	      var _iteratorError69 = undefined;

	      try {
	        for (var _iterator69 = e[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
	          var _n40 = _step69.value;
	          if (Kl(_n40)) {
	            if (t += 1, t > 1) return !0;
	          } else if (ac(_n40)) {
	            var _iteratorNormalCompletion70 = true;
	            var _didIteratorError70 = false;
	            var _iteratorError70 = undefined;

	            try {
	              for (var _iterator70 = _n40.arguments[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
	                var _e91 = _step70.value;
	                if (Kl(_e91)) return !0;
	              }
	            } catch (err) {
	              _didIteratorError70 = true;
	              _iteratorError70 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion70 && _iterator70.return) {
	                  _iterator70.return();
	                }
	              } finally {
	                if (_didIteratorError70) {
	                  throw _iteratorError70;
	                }
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError69 = true;
	        _iteratorError69 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion69 && _iterator69.return) {
	            _iterator69.return();
	          }
	        } finally {
	          if (_didIteratorError69) {
	            throw _iteratorError69;
	          }
	        }
	      }

	      return !1;
	    }, isFunctionNotation: nc, isFunctionOrArrowExpression: Kl, isGetterOrSetter: ec, isJestEachTemplateLiteral: function isJestEachTemplateLiteral(e, t) {
	      var n = /^[fx]?(describe|it|test)$/;return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name));
	    }, isJSXNode: Zl, isJSXWhitespaceExpression: function isJSXWhitespaceExpression(e) {
	      return "JSXExpressionContainer" === e.type && Hl(e.expression) && " " === e.expression.value && !e.expression.comments;
	    }, isLastStatement: function isLastStatement(e) {
	      var t = e.getParentNode();if (!t) return !0;var n = e.getValue(),
	          r = (t.body || t.consequent).filter(function (e) {
	        return "EmptyStatement" !== e.type;
	      });return r[r.length - 1] === n;
	    }, isLiteral: Hl, isLongCurriedCallExpression: function isLongCurriedCallExpression(e) {
	      var t = e.getValue(),
	          n = e.getParentNode();return ac(t) && ac(n) && n.callee === t && t.arguments.length > n.arguments.length && n.arguments.length > 0;
	    }, isSimpleCallArgument: function e(t, n) {
	      if (n >= 2) return !1;var r = function r(t) {
	        return e(t, n + 1);
	      },
	          u = "Literal" === t.type && "regex" in t && t.regex.pattern || "RegExpLiteral" === t.type && t.pattern;return !(u && u.length > 5) && ("Literal" === t.type || "BigIntLiteral" === t.type || "DecimalLiteral" === t.type || "BooleanLiteral" === t.type || "NullLiteral" === t.type || "NumericLiteral" === t.type || "RegExpLiteral" === t.type || "StringLiteral" === t.type || "Identifier" === t.type || "ThisExpression" === t.type || "Super" === t.type || "PrivateName" === t.type || "ArgumentPlaceholder" === t.type || "Import" === t.type || ("TemplateLiteral" === t.type ? t.expressions.every(r) : "ObjectExpression" === t.type ? t.properties.every(function (e) {
	        return !e.computed && (e.shorthand || e.value && r(e.value));
	      }) : "ArrayExpression" === t.type ? t.elements.every(function (e) {
	        return null === e || r(e);
	      }) : "ImportExpression" === t.type ? r(t.source) : "CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type ? e(t.callee, n) && t.arguments.every(r) : "MemberExpression" === t.type || "OptionalMemberExpression" === t.type ? e(t.object, n) && e(t.property, n) : "UnaryExpression" !== t.type || "!" !== t.operator && "-" !== t.operator ? "TSNonNullExpression" === t.type && e(t.expression, n) : e(t.argument, n)));
	    }, isMeaningfulJSXText: lc, isMemberExpressionChain: function e(t) {
	      return ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && ("Identifier" === t.object.type || e(t.object));
	    }, isMemberish: function isMemberish(e) {
	      return "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "BindExpression" === e.type && Boolean(e.object);
	    }, isNgForOf: function isNgForOf(e, t, n) {
	      return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t && "NGMicrosyntaxLet" === n.body[0].type && null === n.body[0].value;
	    }, isNumericLiteral: Xl, isObjectType: function isObjectType(e) {
	      return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type;
	    }, isObjectTypePropertyAFunction: function isObjectTypePropertyAFunction(e, t) {
	      return !("ObjectTypeProperty" !== e.type && "ObjectTypeInternalSlot" !== e.type || "FunctionTypeAnnotation" !== e.value.type || e.static || nc(e, t));
	    }, isSimpleFlowType: function isSimpleFlowType(e) {
	      return e && uc.has(e.type) && !("GenericTypeAnnotation" === e.type && e.typeParameters);
	    }, isSimpleNumber: pc, isSimpleTemplateLiteral: function isSimpleTemplateLiteral(e) {
	      return 0 !== e.expressions.length && e.expressions.every(function (e) {
	        if (e.comments) return !1;if ("Identifier" === e.type || "ThisExpression" === e.type) return !0;if ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) {
	          var _t62 = e;for (; "MemberExpression" === _t62.type || "OptionalMemberExpression" === _t62.type;) {
	            if ("Identifier" !== _t62.property.type && "Literal" !== _t62.property.type && "StringLiteral" !== _t62.property.type && "NumericLiteral" !== _t62.property.type) return !1;if (_t62 = _t62.object, _t62.comments) return !1;
	          }return "Identifier" === _t62.type || "ThisExpression" === _t62.type;
	        }return !1;
	      });
	    }, isStringLiteral: Yl, isStringPropSafeToUnquote: function isStringPropSafeToUnquote(e, t) {
	      return "json" !== t.parser && Yl(e.key) && fc(e.key).slice(1, -1) === e.key.value && (Il(e.key.value) && !(("typescript" === t.parser || "babel-ts" === t.parser) && "ClassProperty" === e.type) || pc(e.key.value) && String(Number(e.key.value)) === e.key.value && "babel" === t.parser);
	    }, isTemplateOnItsOwnLine: function isTemplateOnItsOwnLine(e, t, n) {
	      return ("TemplateLiteral" === e.type && dc(e) || "TaggedTemplateExpression" === e.type && dc(e.quasi)) && !Ml(t, n.locStart(e), { backwards: !0 });
	    }, isTestCall: function e(t, n) {
	      if ("CallExpression" !== t.type) return !1;if (1 === t.arguments.length) {
	        if (Ql(t) && n && e(n)) return Kl(t.arguments[0]);if ("Identifier" === (r = t).callee.type && /^(before|after)(Each|All)$/.test(r.callee.name) && 1 === r.arguments.length) return Ql(t.arguments[0]);
	      } else if ((2 === t.arguments.length || 3 === t.arguments.length) && ("Identifier" === t.callee.type && oc.test(t.callee.name) || function (e) {
	        return ("MemberExpression" === e.callee.type || "OptionalMemberExpression" === e.callee.type) && "Identifier" === e.callee.object.type && "Identifier" === e.callee.property.type && oc.test(e.callee.object.name) && ("only" === e.callee.property.name || "skip" === e.callee.property.name);
	      }(t)) && (function (e) {
	        return "TemplateLiteral" === e.type;
	      }(t.arguments[0]) || Yl(t.arguments[0]))) return !(t.arguments[2] && !Xl(t.arguments[2])) && ((2 === t.arguments.length ? Kl(t.arguments[1]) : function (e) {
	        return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type;
	      }(t.arguments[1]) && t.arguments[1].params.length <= 1) || Ql(t.arguments[1]));var r;return !1;
	    }, isTheOnlyJSXElementInMarkdown: function isTheOnlyJSXElementInMarkdown(e, t) {
	      if ("markdown" !== e.parentParser && "mdx" !== e.parentParser) return !1;var n = t.getNode();if (!n.expression || !Zl(n.expression)) return !1;var r = t.getParentNode();return "Program" === r.type && 1 === r.body.length;
	    }, isTSXFile: function isTSXFile(e) {
	      return e.filepath && /\.tsx$/i.test(e.filepath);
	    }, isTypeAnnotationAFunction: function isTypeAnnotationAFunction(e, t) {
	      return !("TypeAnnotation" !== e.type && "TSTypeAnnotation" !== e.type || "FunctionTypeAnnotation" !== e.typeAnnotation.type || e.static || tc(e, e.typeAnnotation, t));
	    }, matchJsxWhitespaceRegex: ic, needsHardlineAfterDanglingComment: function needsHardlineAfterDanglingComment(e) {
	      if (!e.comments) return !1;var t = jl(e.comments.filter(function (e) {
	        return !e.leading && !e.trailing;
	      }));return t && !Gs.isBlockComment(t);
	    }, rawText: fc, returnArgumentHasLeadingComment: function returnArgumentHasLeadingComment(e, t) {
	      if (cc(e.originalText, t, e)) return !0;if (zl(t)) {
	        var _r53 = void 0,
	            _u18 = t;for (; _r53 = (n = _u18).expressions ? n.expressions[0] : n.left || n.test || n.callee || n.object || n.tag || n.argument || n.expression;) {
	          if (_u18 = _r53, cc(e.originalText, _u18, e)) return !0;
	        }
	      }var n;return !1;
	    }, shouldPrintComma: function shouldPrintComma(e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "es5";
	      return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t);
	    }, isBitwiseOperator: function isBitwiseOperator(e) {
	      return !!gc[e] || "|" === e || "^" === e || "&" === e;
	    }, shouldFlatten: function shouldFlatten(e, t) {
	      return yc(t) === yc(e) && "**" !== e && (!hc[e] || !hc[t]) && !("%" === t && mc[e] || "%" === e && mc[t]) && (t === e || !mc[t] || !mc[e]) && (!gc[e] || !gc[t]);
	    }, startsWithNoLookaheadToken: function e(t, n) {
	      switch ((t = function (e) {
	        for (; e.left;) {
	          e = e.left;
	        }return e;
	      }(t)).type) {case "FunctionExpression":case "ClassExpression":case "DoExpression":
	          return n;case "ObjectExpression":
	          return !0;case "MemberExpression":case "OptionalMemberExpression":
	          return e(t.object, n);case "TaggedTemplateExpression":
	          return "FunctionExpression" !== t.tag.type && e(t.tag, n);case "CallExpression":case "OptionalCallExpression":
	          return "FunctionExpression" !== t.callee.type && e(t.callee, n);case "ConditionalExpression":
	          return e(t.test, n);case "UpdateExpression":
	          return !t.prefix && e(t.argument, n);case "BindExpression":
	          return t.object && e(t.object, n);case "SequenceExpression":
	          return e(t.expressions[0], n);case "TSAsExpression":
	          return e(t.expression, n);default:
	          return !1;}
	    }, getPrecedence: yc };var Cc = Ec.getLeftSidePathName,
	      bc = Ec.hasFlowShorthandAnnotationComment,
	      Ac = Ec.hasNakedLeftSide,
	      vc = Ec.hasNode,
	      Fc = Ec.isBitwiseOperator,
	      xc = Ec.startsWithNoLookaheadToken,
	      Sc = Ec.shouldFlatten,
	      wc = Ec.getPrecedence;
	  function Bc(e, t) {
	    var n = e.getParentNode();if (!n) return !1;var r = e.getName(),
	        u = e.getNode();if (e.getValue() !== u) return !1;if (t.__isInHtmlInterpolation && !t.bracketSpacing && function (e) {
	      switch (e.type) {case "ObjectExpression":
	          return !0;default:
	          return !1;}
	    }(u) && Tc(e)) return !0;if (function (e) {
	      return "BlockStatement" === e.type || "BreakStatement" === e.type || "ClassBody" === e.type || "ClassDeclaration" === e.type || "ClassMethod" === e.type || "ClassProperty" === e.type || "ClassPrivateProperty" === e.type || "ContinueStatement" === e.type || "DebuggerStatement" === e.type || "DeclareClass" === e.type || "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type || "DeclareFunction" === e.type || "DeclareInterface" === e.type || "DeclareModule" === e.type || "DeclareModuleExports" === e.type || "DeclareVariable" === e.type || "DoWhileStatement" === e.type || "EnumDeclaration" === e.type || "ExportAllDeclaration" === e.type || "ExportDefaultDeclaration" === e.type || "ExportNamedDeclaration" === e.type || "ExpressionStatement" === e.type || "ForInStatement" === e.type || "ForOfStatement" === e.type || "ForStatement" === e.type || "FunctionDeclaration" === e.type || "IfStatement" === e.type || "ImportDeclaration" === e.type || "InterfaceDeclaration" === e.type || "LabeledStatement" === e.type || "MethodDefinition" === e.type || "ReturnStatement" === e.type || "SwitchStatement" === e.type || "ThrowStatement" === e.type || "TryStatement" === e.type || "TSDeclareFunction" === e.type || "TSEnumDeclaration" === e.type || "TSImportEqualsDeclaration" === e.type || "TSInterfaceDeclaration" === e.type || "TSModuleDeclaration" === e.type || "TSNamespaceExportDeclaration" === e.type || "TypeAlias" === e.type || "VariableDeclaration" === e.type || "WhileStatement" === e.type || "WithStatement" === e.type;
	    }(u)) return !1;if ("flow" !== t.parser && bc(e.getValue())) return !0;if ("Identifier" === u.type) return !!(u.extra && u.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(u.name));if ("ParenthesizedExpression" === n.type) return !1;if (!("ClassDeclaration" !== n.type && "ClassExpression" !== n.type || n.superClass !== u || "ArrowFunctionExpression" !== u.type && "AssignmentExpression" !== u.type && "AwaitExpression" !== u.type && "BinaryExpression" !== u.type && "ConditionalExpression" !== u.type && "LogicalExpression" !== u.type && "NewExpression" !== u.type && "ObjectExpression" !== u.type && "ParenthesizedExpression" !== u.type && "SequenceExpression" !== u.type && "TaggedTemplateExpression" !== u.type && "UnaryExpression" !== u.type && "UpdateExpression" !== u.type && "YieldExpression" !== u.type)) return !0;if ("ExportDefaultDeclaration" === n.type) return function e(t, n) {
	      var r = t.getValue(),
	          u = t.getParentNode();if ("FunctionExpression" === r.type || "ClassExpression" === r.type) return "ExportDefaultDeclaration" === u.type || !Bc(t, n);if (!Ac(r) || "ExportDefaultDeclaration" !== u.type && Bc(t, n)) return !1;return t.call.apply(t, [function (t) {
	        return e(t, n);
	      }].concat(_toConsumableArray(Cc(t, r))));
	    }(e, t) || "SequenceExpression" === u.type;if ("Decorator" === n.type && n.expression === u) {
	      var _e92 = !1,
	          _t63 = !1,
	          _n41 = u;for (; _n41;) {
	        switch (_n41.type) {case "MemberExpression":
	            _t63 = !0, _n41 = _n41.object;break;case "CallExpression":
	            if (_t63 || _e92) return !0;_e92 = !0, _n41 = _n41.callee;break;case "Identifier":
	            return !1;default:
	            return !0;}
	      }return !0;
	    }if ("ArrowFunctionExpression" === n.type && n.body === u && "SequenceExpression" !== u.type && xc(u, !1) || "ExpressionStatement" === n.type && xc(u, !0)) return !0;switch (u.type) {case "SpreadElement":case "SpreadProperty":
	        return "MemberExpression" === n.type && "object" === r && n.object === u;case "UpdateExpression":
	        if ("UnaryExpression" === n.type) return u.prefix && ("++" === u.operator && "+" === n.operator || "--" === u.operator && "-" === n.operator);case "UnaryExpression":
	        switch (n.type) {case "UnaryExpression":
	            return u.operator === n.operator && ("+" === u.operator || "-" === u.operator);case "BindExpression":
	            return !0;case "MemberExpression":case "OptionalMemberExpression":
	            return "object" === r;case "TaggedTemplateExpression":
	            return !0;case "NewExpression":case "CallExpression":case "OptionalCallExpression":
	            return "callee" === r;case "BinaryExpression":
	            return "**" === n.operator && "left" === r;case "TSNonNullExpression":
	            return !0;default:
	            return !1;}case "BinaryExpression":
	        {
	          if ("UpdateExpression" === n.type || "PipelineTopicExpression" === n.type && "|>" === u.operator) return !0;var _t64 = function _t64(t) {
	            var n = 0;for (; t;) {
	              var _r54 = e.getParentNode(n++);if (!_r54) return !1;if ("ForStatement" === _r54.type && _r54.init === t) return !0;t = _r54;
	            }return !1;
	          };if ("in" === u.operator && _t64(u)) return !0;if ("|>" === u.operator && u.extra && u.extra.parenthesized) {
	            var _t65 = e.getParentNode(1);if ("BinaryExpression" === _t65.type && "|>" === _t65.operator) return !0;
	          }
	        }case "TSTypeAssertion":case "TSAsExpression":case "LogicalExpression":
	        switch (n.type) {case "ConditionalExpression":
	            return "TSAsExpression" === u.type;case "CallExpression":case "NewExpression":case "OptionalCallExpression":
	            return "callee" === r;case "ClassExpression":case "ClassDeclaration":
	            return "superClass" === r && n.superClass === u;case "TSTypeAssertion":case "TaggedTemplateExpression":case "UnaryExpression":case "JSXSpreadAttribute":case "SpreadElement":case "SpreadProperty":case "BindExpression":case "AwaitExpression":case "TSAsExpression":case "TSNonNullExpression":case "UpdateExpression":
	            return !0;case "MemberExpression":case "OptionalMemberExpression":
	            return "object" === r;case "AssignmentExpression":
	            return n.left === u && ("TSTypeAssertion" === u.type || "TSAsExpression" === u.type);case "LogicalExpression":
	            if ("LogicalExpression" === u.type) return n.operator !== u.operator;case "BinaryExpression":
	            {
	              if (!u.operator && "TSTypeAssertion" !== u.type) return !0;var _e93 = n.operator,
	                  _t66 = wc(_e93),
	                  _o16 = u.operator,
	                  _a15 = wc(_o16);return _t66 > _a15 || (_t66 === _a15 && "right" === r ? (Xa.strictEqual(n.right, u), !0) : _t66 === _a15 && !Sc(_e93, _o16) || (_t66 < _a15 && "%" === _o16 ? "+" === _e93 || "-" === _e93 : !!Fc(_e93)));
	            }default:
	            return !1;}case "SequenceExpression":
	        switch (n.type) {case "ReturnStatement":case "ForStatement":
	            return !1;case "ExpressionStatement":
	            return "expression" !== r;case "ArrowFunctionExpression":
	            return "body" !== r;default:
	            return !0;}case "YieldExpression":
	        if ("UnaryExpression" === n.type || "AwaitExpression" === n.type || "TSAsExpression" === n.type || "TSNonNullExpression" === n.type) return !0;case "AwaitExpression":
	        switch (n.type) {case "TaggedTemplateExpression":case "UnaryExpression":case "LogicalExpression":case "SpreadElement":case "SpreadProperty":case "TSAsExpression":case "TSNonNullExpression":case "BindExpression":
	            return !0;case "MemberExpression":case "OptionalMemberExpression":
	            return "object" === r;case "NewExpression":case "CallExpression":case "OptionalCallExpression":
	            return "callee" === r;case "ConditionalExpression":
	            return n.test === u;case "BinaryExpression":
	            return !(!u.argument && "|>" === n.operator);default:
	            return !1;}case "TSJSDocFunctionType":case "TSConditionalType":
	        if ("TSConditionalType" === n.type && u === n.extendsType) return !0;case "TSFunctionType":case "TSConstructorType":
	        if ("TSConditionalType" === n.type && u === n.checkType) return !0;case "TSUnionType":case "TSIntersectionType":
	        if ("TSUnionType" === n.type || "TSIntersectionType" === n.type) return !0;case "TSInferType":
	        if ("TSInferType" === u.type && "TSRestType" === n.type) return !1;case "TSTypeOperator":
	        return "TSArrayType" === n.type || "TSOptionalType" === n.type || "TSRestType" === n.type || "TSIndexedAccessType" === n.type && u === n.objectType || "TSTypeOperator" === n.type || "TSTypeAnnotation" === n.type && /^TSJSDoc/.test(e.getParentNode(1).type);case "ArrayTypeAnnotation":
	        return "NullableTypeAnnotation" === n.type;case "IntersectionTypeAnnotation":case "UnionTypeAnnotation":
	        return "ArrayTypeAnnotation" === n.type || "NullableTypeAnnotation" === n.type || "IntersectionTypeAnnotation" === n.type || "UnionTypeAnnotation" === n.type;case "NullableTypeAnnotation":
	        return "ArrayTypeAnnotation" === n.type;case "FunctionTypeAnnotation":
	        {
	          var _t67 = "NullableTypeAnnotation" === n.type ? e.getParentNode(1) : n;return "UnionTypeAnnotation" === _t67.type || "IntersectionTypeAnnotation" === _t67.type || "ArrayTypeAnnotation" === _t67.type || "NullableTypeAnnotation" === _t67.type || "FunctionTypeParam" === n.type && null === n.name && u.params && u.params.some(function (e) {
	            return e.typeAnnotation && "NullableTypeAnnotation" === e.typeAnnotation.type;
	          });
	        }case "StringLiteral":case "NumericLiteral":case "Literal":
	        if ("string" == typeof u.value && "ExpressionStatement" === n.type && !n.directive) {
	          var _t68 = e.getParentNode(1);return "Program" === _t68.type || "BlockStatement" === _t68.type;
	        }return "MemberExpression" === n.type && "number" == typeof u.value && "object" === r && n.object === u;case "AssignmentExpression":
	        {
	          var _t69 = e.getParentNode(1);return "ArrowFunctionExpression" === n.type && n.body === u || ("ClassProperty" !== n.type || n.key !== u || !n.computed) && ("TSPropertySignature" !== n.type || n.name !== u) && ("ForStatement" !== n.type || n.init !== u && n.update !== u) && ("ExpressionStatement" === n.type ? "ObjectPattern" === u.left.type : ("TSPropertySignature" !== n.type || n.key !== u) && "AssignmentExpression" !== n.type && ("SequenceExpression" !== n.type || !_t69 || "ForStatement" !== _t69.type || _t69.init !== n && _t69.update !== n) && ("Property" !== n.type || n.value !== u) && "NGChainedExpression" !== n.type);
	        }case "ConditionalExpression":
	        switch (n.type) {case "TaggedTemplateExpression":case "UnaryExpression":case "SpreadElement":case "SpreadProperty":case "BinaryExpression":case "LogicalExpression":case "NGPipeExpression":case "ExportDefaultDeclaration":case "AwaitExpression":case "JSXSpreadAttribute":case "TSTypeAssertion":case "TypeCastExpression":case "TSAsExpression":case "TSNonNullExpression":
	            return !0;case "NewExpression":case "CallExpression":case "OptionalCallExpression":
	            return "callee" === r;case "ConditionalExpression":
	            return "test" === r && n.test === u;case "MemberExpression":case "OptionalMemberExpression":
	            return "object" === r;default:
	            return !1;}case "FunctionExpression":
	        switch (n.type) {case "NewExpression":case "CallExpression":case "OptionalCallExpression":
	            return "callee" === r;case "TaggedTemplateExpression":
	            return !0;default:
	            return !1;}case "ArrowFunctionExpression":
	        switch (n.type) {case "PipelineTopicExpression":
	            return !(!u.extra || !u.extra.parenthesized);case "BinaryExpression":
	            return "|>" !== n.operator || u.extra && u.extra.parenthesized;case "NewExpression":case "CallExpression":case "OptionalCallExpression":
	            return "callee" === r;case "MemberExpression":case "OptionalMemberExpression":
	            return "object" === r;case "TSAsExpression":case "BindExpression":case "TaggedTemplateExpression":case "UnaryExpression":case "LogicalExpression":case "AwaitExpression":case "TSTypeAssertion":
	            return !0;case "ConditionalExpression":
	            return "test" === r;default:
	            return !1;}case "ClassExpression":
	        switch (n.type) {case "NewExpression":
	            return "callee" === r && n.callee === u;default:
	            return !1;}case "OptionalMemberExpression":case "OptionalCallExpression":
	        {
	          var _t70 = e.getParentNode(1);if ("MemberExpression" === n.type && "object" === r || ("CallExpression" === n.type || "NewExpression" === n.type) && "callee" === r || "TSNonNullExpression" === n.type && "MemberExpression" === _t70.type && _t70.object === n) return !0;
	        }case "CallExpression":case "MemberExpression":case "TaggedTemplateExpression":case "TSNonNullExpression":
	        if (("BindExpression" === n.type || "NewExpression" === n.type) && "callee" === r) {
	          var _e94 = u;for (; _e94;) {
	            switch (_e94.type) {case "CallExpression":case "OptionalCallExpression":
	                return !0;case "MemberExpression":case "OptionalMemberExpression":case "BindExpression":
	                _e94 = _e94.object;break;case "TaggedTemplateExpression":
	                _e94 = _e94.tag;break;case "TSNonNullExpression":
	                _e94 = _e94.expression;break;default:
	                return !1;}
	          }
	        }return !1;case "BindExpression":
	        return ("BindExpression" === n.type || "NewExpression" === n.type) && "callee" === r || ("MemberExpression" === n.type || "OptionalMemberExpression" === n.type) && "object" === r;case "NGPipeExpression":
	        return !("NGRoot" === n.type || "NGMicrosyntaxExpression" === n.type || !("ObjectProperty" !== n.type || u.extra && u.extra.parenthesized) || "ArrayExpression" === n.type || ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && n.arguments[r] === u || "NGPipeExpression" === n.type && "right" === r || "MemberExpression" === n.type && "property" === r || "AssignmentExpression" === n.type);case "JSXFragment":case "JSXElement":
	        return "callee" === r || "BinaryExpression" === n.type && "<" === n.operator && "left" === r || "ArrayExpression" !== n.type && "ArrowFunctionExpression" !== n.type && "AssignmentExpression" !== n.type && "AssignmentPattern" !== n.type && "BinaryExpression" !== n.type && "CallExpression" !== n.type && "NewExpression" !== n.type && "ConditionalExpression" !== n.type && "ExpressionStatement" !== n.type && "JsExpressionRoot" !== n.type && "JSXAttribute" !== n.type && "JSXElement" !== n.type && "JSXExpressionContainer" !== n.type && "JSXFragment" !== n.type && "LogicalExpression" !== n.type && "ObjectProperty" !== n.type && "OptionalCallExpression" !== n.type && "Property" !== n.type && "ReturnStatement" !== n.type && "ThrowStatement" !== n.type && "TypeCastExpression" !== n.type && "VariableDeclarator" !== n.type;case "TypeAnnotation":
	        return "returnType" === r && "ArrowFunctionExpression" === n.type && function (e) {
	          return vc(e, function (e) {
	            return "ObjectTypeAnnotation" === e.type && vc(e, function (e) {
	              return "FunctionTypeAnnotation" === e.type || void 0;
	            }) || void 0;
	          });
	        }(u);}return !1;
	  }function Tc(e) {
	    var t = e.getValue(),
	        n = e.getParentNode(),
	        r = e.getName();switch (n.type) {case "NGPipeExpression":
	        if ("number" == typeof r && n.arguments[r] === t && n.arguments.length - 1 === r) return e.callParent(Tc);break;case "ObjectProperty":
	        if ("value" === r) {
	          var _t71 = e.getParentNode(1);return _t71.properties[_t71.properties.length - 1] === n;
	        }break;case "BinaryExpression":case "LogicalExpression":
	        if ("right" === r) return e.callParent(Tc);break;case "ConditionalExpression":
	        if ("alternate" === r) return e.callParent(Tc);break;case "UnaryExpression":
	        if (n.prefix) return e.callParent(Tc);}return !1;
	  }var kc = Bc;var _dn$builders3 = dn.builders,
	      Nc = _dn$builders3.concat,
	      Oc = _dn$builders3.join,
	      Pc = _dn$builders3.line;
	  var _c = { isVueEventBindingExpression: function e(t) {
	      switch (t.type) {case "MemberExpression":
	          switch (t.property.type) {case "Identifier":case "NumericLiteral":case "StringLiteral":
	              return e(t.object);}return !1;case "Identifier":
	          return !0;default:
	          return !1;}
	    }, printHtmlBinding: function printHtmlBinding(e, t, n) {
	      var r = e.getValue();if (t.__onHtmlBindingRoot && null === e.getName() && t.__onHtmlBindingRoot(r, t), "File" === r.type) return t.__isVueForBindingLeft ? e.call(function (e) {
	        var _e$getValue = e.getValue(),
	            t = _e$getValue.params;

	        return Nc([t.length > 1 ? "(" : "", Oc(Nc([",", Pc]), e.map(n, "params")), t.length > 1 ? ")" : ""]);
	      }, "program", "body", 0) : t.__isVueSlotScope ? e.call(function (e) {
	        return Oc(Nc([",", Pc]), e.map(n, "params"));
	      }, "program", "body", 0) : void 0;
	    } };var Ic = function Ic(e, t) {
	    switch (t.parser) {case "json":case "json5":case "json-stringify":case "__js_expression":case "__vue_expression":
	        return Object.assign({}, e, { type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: e, comments: [], rootMarker: t.rootMarker });default:
	        return e;}
	  };var jc = Lt.getLast,
	      Mc = Lt.getPenultimate,
	      Lc = Lt.isNextLineEmpty,
	      Rc = Ec.hasLeadingComment,
	      qc = Ec.hasTrailingComment,
	      Vc = Ec.isFunctionCompositionArgs,
	      Wc = Ec.isJSXNode,
	      $c = Ec.isLongCurriedCallExpression,
	      Uc = Ec.shouldPrintComma,
	      _dn$builders4 = dn.builders,
	      zc = _dn$builders4.concat,
	      Jc = _dn$builders4.line,
	      Gc = _dn$builders4.hardline,
	      Hc = _dn$builders4.softline,
	      Xc = _dn$builders4.group,
	      Yc = _dn$builders4.indent,
	      Kc = _dn$builders4.conditionalGroup,
	      Qc = _dn$builders4.ifBreak,
	      Zc = _dn$builders4.breakParent,
	      ep = dn.utils.willBreak;
	  function tp(e) {
	    return "ObjectExpression" === e.type && (e.properties.length > 0 || e.comments) || "ArrayExpression" === e.type && (e.elements.length > 0 || e.comments) || "TSTypeAssertion" === e.type && tp(e.expression) || "TSAsExpression" === e.type && tp(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type || "ObjectExpression" === e.body.type || "ArrayExpression" === e.body.type || "CallExpression" === e.body.type || "OptionalCallExpression" === e.body.type || "ConditionalExpression" === e.body.type || Wc(e.body));
	  }var np = function np(e, t, n) {
	    var r = e.getValue(),
	        u = "ImportExpression" === r.type,
	        o = u ? [r.source] : r.arguments;if (0 === o.length) return zc(["(", Di.printDanglingComments(e, t, !0), ")"]);if (2 === o.length && "ArrowFunctionExpression" === o[0].type && 0 === o[0].params.length && "BlockStatement" === o[0].body.type && "ArrayExpression" === o[1].type && !o.some(function (e) {
	      return e.comments;
	    })) return zc(["(", e.call(n, "arguments", 0), ", ", e.call(n, "arguments", 1), ")"]);var a = !1,
	        i = !1,
	        s = !1;var l = o.length - 1,
	        c = function c(e, r) {
	      var u = e.getNode(),
	          o = [n(e)];return r === l || (Lc(t.originalText, u, t.locEnd) ? (0 === r && (s = !0), a = !0, o.push(",", Gc, Gc)) : o.push(",", Jc)), i = function (e, t) {
	        if (!e || "ArrowFunctionExpression" !== e.type || !e.body || "BlockStatement" !== e.body.type || !e.params || e.params.length < 1) return !1;var r = !1;return t.each(function (e) {
	          var t = zc([n(e)]);r = r || ep(t);
	        }, "params"), r;
	      }(u, e), zc(o);
	    },
	        p = u ? [e.call(function (e) {
	      return c(e, 0);
	    }, "source")] : e.map(c, "arguments"),
	        d = u || r.callee && "Import" === r.callee.type || !Uc(t, "all") ? "" : ",";function f() {
	      return Xc(zc(["(", Yc(zc([Jc, zc(p)])), d, Jc, ")"]), { shouldBreak: !0 });
	    }if ("Decorator" !== e.getParentNode().type && Vc(o)) return f();var h = function (e) {
	      if (2 !== e.length) return !1;
	      var _e95 = _slicedToArray(e, 2),
	          t = _e95[0],
	          n = _e95[1];

	      return !(t.comments && t.comments.length || "FunctionExpression" !== t.type && ("ArrowFunctionExpression" !== t.type || "BlockStatement" !== t.body.type) || "FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type || "ConditionalExpression" === n.type || tp(n));
	    }(o),
	        m = function (e) {
	      var t = jc(e),
	          n = Mc(e);return !Rc(t) && !qc(t) && tp(t) && (!n || n.type !== t.type);
	    }(o);if (h || m) {
	      var _t72 = (h ? p.slice(1).some(ep) : p.slice(0, -1).some(ep)) || a || i;var _l6 = [],
	          _c5 = 0;var _d4 = function _d4(e) {
	        h && 0 === _c5 && (_l6 = [zc([e.call(function (e) {
	          return n(e, { expandFirstArg: !0 });
	        }), p.length > 1 ? "," : "", s ? Gc : Jc, s ? Gc : ""])].concat(p.slice(1))), m && _c5 === o.length - 1 && (_l6 = p.slice(0, -1).concat(e.call(function (e) {
	          return n(e, { expandLastArg: !0 });
	        }))), _c5++;
	      };u ? e.call(_d4, "source") : e.each(_d4, "arguments");var _g3 = p.some(ep),
	          _D3 = zc(["(", zc(_l6), ")"]);return zc([_g3 ? Zc : "", Kc([_g3 || r.typeArguments || r.typeParameters ? Qc(f(), _D3) : _D3, zc(h ? ["(", Xc(_l6[0], { shouldBreak: !0 }), zc(_l6.slice(1)), ")"] : ["(", zc(p.slice(0, -1)), Xc(jc(_l6), { shouldBreak: !0 }), ")"]), f()], { shouldBreak: _t72 })]);
	    }var g = zc(["(", Yc(zc([Hc, zc(p)])), Qc(d), Hc, ")"]);return $c(e) ? g : Xc(g, { shouldBreak: p.some(ep) || a });
	  };var rp = Ec.isNumericLiteral,
	      _dn$builders5 = dn.builders,
	      up = _dn$builders5.concat,
	      op = _dn$builders5.softline,
	      ap = _dn$builders5.group,
	      ip = _dn$builders5.indent;function sp(e) {
	    var t = e.getValue();return !t.optional || "Identifier" === t.type && t === e.getParentNode().key ? "" : "OptionalCallExpression" === t.type || "OptionalMemberExpression" === t.type && t.computed ? "?." : "?";
	  }var lp = { printOptionalToken: sp, printFunctionTypeParameters: function printFunctionTypeParameters(e, t, n) {
	      var r = e.getValue();return r.typeArguments ? e.call(n, "typeArguments") : r.typeParameters ? e.call(n, "typeParameters") : "";
	    }, printMemberLookup: function printMemberLookup(e, t, n) {
	      var r = e.call(n, "property"),
	          u = e.getValue(),
	          o = sp(e);return u.computed ? !u.property || rp(u.property) ? up([o, "[", r, "]"]) : ap(up([o, "[", ip(up([op, r])), op, "]"])) : up([o, ".", r]);
	    }, printBindExpressionCallee: function printBindExpressionCallee(e, t, n) {
	      return up(["::", e.call(n, "callee")]);
	    } };var cp = Lt.getLast,
	      pp = Lt.isNextLineEmpty,
	      dp = Lt.isNextLineEmptyAfterIndex,
	      fp = Lt.getNextNonSpaceNonCommentCharacterIndex,
	      hp = Ec.hasLeadingComment,
	      mp = Ec.hasTrailingComment,
	      gp = Ec.isCallOrOptionalCallExpression,
	      Dp = Ec.isFunctionOrArrowExpression,
	      yp = Ec.isLongCurriedCallExpression,
	      Ep = Ec.isMemberish,
	      Cp = Ec.isNumericLiteral,
	      bp = Ec.isSimpleCallArgument,
	      _dn$builders6 = dn.builders,
	      Ap = _dn$builders6.concat,
	      vp = _dn$builders6.join,
	      Fp = _dn$builders6.hardline,
	      xp = _dn$builders6.group,
	      Sp = _dn$builders6.indent,
	      wp = _dn$builders6.conditionalGroup,
	      Bp = _dn$builders6.breakParent,
	      Tp = dn.utils.willBreak,
	      kp = lp.printOptionalToken,
	      Np = lp.printFunctionTypeParameters,
	      Op = lp.printMemberLookup,
	      Pp = lp.printBindExpressionCallee;
	  var _p = function _p(e, t, n) {
	    var r = e.getParentNode(),
	        u = !r || "ExpressionStatement" === r.type,
	        o = [];function a(e) {
	      var n = t.originalText,
	          r = fp(n, e, t.locEnd);return ")" === n.charAt(r) ? !1 !== r && dp(n, r + 1) : pp(n, e, t.locEnd);
	    }var i = e.getValue();o.unshift({ node: i, printed: Ap([kp(e), Np(e, t, n), np(e, t, n)]) }), i.callee && e.call(function (e) {
	      return function e(r) {
	        var u = r.getValue();gp(u) && (Ep(u.callee) || gp(u.callee)) ? (o.unshift({ node: u, printed: Ap([Di.printComments(r, function () {
	            return Ap([kp(r), Np(r, t, n), np(r, t, n)]);
	          }, t), a(u) ? Fp : ""]) }), r.call(function (t) {
	          return e(t);
	        }, "callee")) : Ep(u) ? (o.unshift({ node: u, needsParens: kc(r, t), printed: Di.printComments(r, function () {
	            return "OptionalMemberExpression" === u.type || "MemberExpression" === u.type ? Op(r, t, n) : Pp(r, t, n);
	          }, t) }), r.call(function (t) {
	          return e(t);
	        }, "object")) : "TSNonNullExpression" === u.type ? (o.unshift({ node: u, printed: Di.printComments(r, function () {
	            return "!";
	          }, t) }), r.call(function (t) {
	          return e(t);
	        }, "expression")) : o.unshift({ node: u, printed: r.call(n) });
	      }(e);
	    }, "callee");var s = [];var l = [o[0]],
	        c = 1;for (; c < o.length && ("TSNonNullExpression" === o[c].node.type || gp(o[c].node) || ("MemberExpression" === o[c].node.type || "OptionalMemberExpression" === o[c].node.type) && o[c].node.computed && Cp(o[c].node.property)); ++c) {
	      l.push(o[c]);
	    }if (!gp(o[0].node)) for (; c + 1 < o.length && Ep(o[c].node) && Ep(o[c + 1].node); ++c) {
	      l.push(o[c]);
	    }s.push(l), l = [];var p = !1;for (; c < o.length; ++c) {
	      if (p && Ep(o[c].node)) {
	        if (o[c].node.computed && Cp(o[c].node.property)) {
	          l.push(o[c]);continue;
	        }s.push(l), l = [], p = !1;
	      }(gp(o[c].node) || "ImportExpression" === o[c].node.type) && (p = !0), l.push(o[c]), o[c].node.comments && o[c].node.comments.some(function (e) {
	        return e.trailing;
	      }) && (s.push(l), l = [], p = !1);
	    }function d(e) {
	      return (/^[A-Z]|^[$_]+$/.test(e)
	      );
	    }l.length > 0 && s.push(l);var f = s.length >= 2 && !s[1][0].node.comments && function (e) {
	      var n = e[1].length && e[1][0].node.computed;if (1 === e[0].length) {
	        var _r55 = e[0][0].node;return "ThisExpression" === _r55.type || "Identifier" === _r55.type && (d(_r55.name) || u && function (e) {
	          return e.length <= t.tabWidth;
	        }(_r55.name) || n);
	      }var r = cp(e[0]).node;return ("MemberExpression" === r.type || "OptionalMemberExpression" === r.type) && "Identifier" === r.property.type && (d(r.property.name) || n);
	    }(s);function h(e) {
	      var t = e.map(function (e) {
	        return e.printed;
	      });return e.length > 0 && e[e.length - 1].needsParens ? Ap(["("].concat(_toConsumableArray(t), [")"])) : Ap(t);
	    }var m = s.map(h),
	        g = Ap(m),
	        D = f ? 3 : 2,
	        y = Go(s),
	        E = y.slice(1, -1).some(function (e) {
	      return hp(e.node);
	    }) || y.slice(0, -1).some(function (e) {
	      return mp(e.node);
	    }) || s[D] && hp(s[D][0].node);if (s.length <= D && !E) return yp(e) ? g : xp(g);var C = cp(s[f ? 1 : 0]).node,
	        b = !gp(C) && a(C),
	        A = Ap([h(s[0]), f ? Ap(s.slice(1, 2).map(h)) : "", b ? Fp : "", function (e) {
	      return 0 === e.length ? "" : Sp(xp(Ap([Fp, vp(Fp, e.map(h))])));
	    }(s.slice(f ? 2 : 1))]),
	        v = o.map(function (_ref34) {
	      var e = _ref34.node;
	      return e;
	    }).filter(gp);return E || v.length > 2 && v.some(function (e) {
	      return !e.arguments.every(function (e) {
	        return bp(e, 0);
	      });
	    }) || m.slice(0, -1).some(Tp) || function () {
	      var e = cp(cp(s)).node,
	          t = cp(m);return gp(e) && Tp(t) && v.slice(0, -1).some(function (e) {
	        return e.arguments.some(Dp);
	      });
	    }() ? xp(A) : Ap([Tp(g) || b ? Bp : "", wp([g, A])]);
	  };var _dn$builders7 = dn.builders,
	      Ip = _dn$builders7.concat,
	      jp = _dn$builders7.softline,
	      Mp = _dn$builders7.group,
	      Lp = _dn$builders7.indent,
	      Rp = _dn$builders7.join,
	      qp = _dn$builders7.line,
	      Vp = _dn$builders7.ifBreak,
	      Wp = Ec.shouldPrintComma;
	  var $p = { printModuleSource: function printModuleSource(e, t, n) {
	      return e.getValue().source ? Ip([" from ", e.call(n, "source")]) : "";
	    }, printModuleSpecifiers: function printModuleSpecifiers(e, t, n) {
	      var r = e.getValue(),
	          u = ["ImportDeclaration" === r.type ? " " : ""];if (r.specifiers && r.specifiers.length > 0) {
	        var _o17 = [],
	            _a16 = [];if (e.each(function (t) {
	          var r = e.getValue().type;if ("ExportNamespaceSpecifier" === r || "ExportDefaultSpecifier" === r || "ImportNamespaceSpecifier" === r || "ImportDefaultSpecifier" === r) _o17.push(n(t));else {
	            if ("ExportSpecifier" !== r && "ImportSpecifier" !== r) throw new Error("Unknown specifier type ".concat(JSON.stringify(r)));_a16.push(n(t));
	          }
	        }, "specifiers"), u.push(Rp(", ", _o17)), 0 !== _a16.length) {
	          0 !== _o17.length && u.push(", ");_a16.length > 1 || _o17.length > 0 || r.specifiers.some(function (e) {
	            return e.comments;
	          }) ? u.push(Mp(Ip(["{", Lp(Ip([t.bracketSpacing ? qp : jp, Rp(Ip([",", qp]), _a16)])), Vp(Wp(t) ? "," : ""), t.bracketSpacing ? qp : jp, "}"]))) : u.push(Ip(["{", t.bracketSpacing ? " " : "", Ip(_a16), t.bracketSpacing ? " " : "", "}"]));
	        }
	      } else u.push("{}");return Ip(u);
	    } };var Up = Ec.isJSXNode,
	      zp = Lt.hasNewlineInRange,
	      _dn$builders8 = dn.builders,
	      Jp = _dn$builders8.concat,
	      Gp = _dn$builders8.line,
	      Hp = _dn$builders8.softline,
	      Xp = _dn$builders8.group,
	      Yp = _dn$builders8.indent,
	      Kp = _dn$builders8.align,
	      Qp = _dn$builders8.ifBreak,
	      Zp = _dn$builders8.dedent,
	      ed = _dn$builders8.breakParent;var td = function td(e, t, n, r) {
	    var u = e.getValue(),
	        o = u[r.consequentNodePropertyName],
	        a = u[r.alternateNodePropertyName],
	        i = [];var s = !1;var l = e.getParentNode(),
	        c = l.type === r.conditionalNodeType && r.testNodePropertyNames.some(function (e) {
	      return l[e] === u;
	    });var p = void 0,
	        d = void 0,
	        f = l.type === r.conditionalNodeType && !c,
	        h = 0;do {
	      d = p || u, p = e.getParentNode(h), h++;
	    } while (p && p.type === r.conditionalNodeType && r.testNodePropertyNames.every(function (e) {
	      return p[e] !== d;
	    }));var m = p || l,
	        g = d;if (r.shouldCheckJsx && (Up(u[r.testNodePropertyNames[0]]) || Up(o) || Up(a) || function (e) {
	      return function (e) {
	        var t = [];return function e(n) {
	          "ConditionalExpression" === n.type ? (e(n.test), e(n.consequent), e(n.alternate)) : t.push(n);
	        }(e), t;
	      }(e).some(Up);
	    }(g))) {
	      s = !0, f = !0;var _t73 = function _t73(e) {
	        return Jp([Qp("(", ""), Yp(Jp([Hp, e])), Hp, Qp(")", "")]);
	      },
	          _u19 = function _u19(e) {
	        return "NullLiteral" === e.type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name;
	      };i.push(" ? ", _u19(o) ? e.call(n, r.consequentNodePropertyName) : _t73(e.call(n, r.consequentNodePropertyName)), " : ", a.type === r.conditionalNodeType || _u19(a) ? e.call(n, r.alternateNodePropertyName) : _t73(e.call(n, r.alternateNodePropertyName)));
	    } else {
	      var _s6 = Jp([Gp, "? ", o.type === r.conditionalNodeType ? Qp("", "(") : "", Kp(2, e.call(n, r.consequentNodePropertyName)), o.type === r.conditionalNodeType ? Qp("", ")") : "", Gp, ": ", a.type === r.conditionalNodeType ? e.call(n, r.alternateNodePropertyName) : Kp(2, e.call(n, r.alternateNodePropertyName))]);i.push(l.type !== r.conditionalNodeType || l[r.alternateNodePropertyName] === u || c ? _s6 : t.useTabs ? Zp(Yp(_s6)) : Kp(Math.max(0, t.tabWidth - 2), _s6));
	    }var D = Go([].concat(_toConsumableArray(r.testNodePropertyNames.map(function (e) {
	      return u[e].comments;
	    })), [o.comments, a.comments])).filter(Boolean).some(function (e) {
	      return Gs.isBlockComment(e) && zp(t.originalText, t.locStart(e), t.locEnd(e));
	    }),
	        y = !s && ("MemberExpression" === l.type || "OptionalMemberExpression" === l.type || "NGPipeExpression" === l.type && l.left === u) && !l.computed,
	        E = function (e) {
	      return l === m ? Xp(e, { shouldBreak: D }) : D ? Jp([e, ed]) : e;
	    }(Jp([].concat((C = Jp(r.beforeParts()), l.type === r.conditionalNodeType && l[r.alternateNodePropertyName] === u ? Kp(2, C) : C), f ? Jp(i) : Yp(Jp(i)), r.afterParts(y))));var C;return c ? Xp(Jp([Yp(Jp([Hp, E])), Hp])) : E;
	  };var nd = Lt.getNextNonSpaceNonCommentCharacter,
	      rd = Lt.hasNewline,
	      ud = Lt.hasNewlineInRange,
	      od = Lt.getLast,
	      ad = Lt.getStringWidth,
	      id = Lt.printString,
	      sd = Lt.printNumber,
	      ld = Lt.hasIgnoreComment,
	      cd = Lt.hasNodeIgnoreComment,
	      pd = Lt.getIndentSize,
	      dd = Lt.getPreferredQuote,
	      fd = bs.isNextLineEmpty,
	      hd = bs.getNextNonSpaceNonCommentCharacterIndex,
	      _dn$builders9 = dn.builders,
	      md = _dn$builders9.concat,
	      gd = _dn$builders9.join,
	      Dd = _dn$builders9.line,
	      yd = _dn$builders9.hardline,
	      Ed = _dn$builders9.softline,
	      Cd = _dn$builders9.literalline,
	      bd = _dn$builders9.group,
	      Ad = _dn$builders9.indent,
	      vd = _dn$builders9.align,
	      Fd = _dn$builders9.conditionalGroup,
	      xd = _dn$builders9.fill,
	      Sd = _dn$builders9.ifBreak,
	      wd = _dn$builders9.lineSuffixBoundary,
	      Bd = _dn$builders9.addAlignmentToDoc,
	      _dn$utils2 = dn.utils,
	      Td = _dn$utils2.willBreak,
	      kd = _dn$utils2.isLineNext,
	      Nd = _dn$utils2.isEmpty,
	      Od = _dn$utils2.removeLines,
	      Pd = _dn$utils2.normalizeParts,
	      _d = dn.printer.printDocToString,
	      Id = Nl.insertPragma,
	      jd = _c.printHtmlBinding,
	      Md = _c.isVueEventBindingExpression,
	      Ld = Ec.classChildNeedsASIProtection,
	      Rd = Ec.classPropMayCauseASIProblems,
	      qd = Ec.getFlowVariance,
	      Vd = Ec.getLeftSidePathName,
	      Wd = Ec.getParentExportDeclaration,
	      $d = Ec.getTypeScriptMappedTypeModifier,
	      Ud = Ec.hasDanglingComments,
	      zd = Ec.hasFlowAnnotationComment,
	      Jd = Ec.hasFlowShorthandAnnotationComment,
	      Gd = Ec.hasLeadingOwnLineComment,
	      Hd = Ec.hasNakedLeftSide,
	      Xd = Ec.hasNewlineBetweenOrAfterDecorators,
	      Yd = Ec.hasNgSideEffect,
	      Kd = Ec.hasPrettierIgnore,
	      Qd = Ec.hasTrailingComment,
	      Zd = Ec.hasTrailingLineComment,
	      ef = Ec.identity,
	      tf = Ec.isBinaryish,
	      nf = Ec.isCallOrOptionalCallExpression,
	      rf = Ec.isEmptyJSXElement,
	      uf = Ec.isExportDeclaration,
	      of = Ec.isFlowAnnotationComment,
	      af = Ec.isFunctionNotation,
	      sf = Ec.isGetterOrSetter,
	      lf = Ec.isJestEachTemplateLiteral,
	      cf = Ec.isJSXNode,
	      pf = Ec.isJSXWhitespaceExpression,
	      df = Ec.isLastStatement,
	      ff = Ec.isLiteral,
	      hf = Ec.isMeaningfulJSXText,
	      mf = Ec.isMemberExpressionChain,
	      gf = Ec.isMemberish,
	      Df = Ec.isNgForOf,
	      yf = Ec.isNumericLiteral,
	      Ef = Ec.isObjectType,
	      Cf = Ec.isObjectTypePropertyAFunction,
	      bf = Ec.isSimpleFlowType,
	      Af = Ec.isSimpleNumber,
	      vf = Ec.isSimpleTemplateLiteral,
	      Ff = Ec.isStringLiteral,
	      xf = Ec.isStringPropSafeToUnquote,
	      Sf = Ec.isTemplateOnItsOwnLine,
	      wf = Ec.isTestCall,
	      Bf = Ec.isTheOnlyJSXElementInMarkdown,
	      Tf = Ec.isTSXFile,
	      kf = Ec.isTypeAnnotationAFunction,
	      Nf = Ec.matchJsxWhitespaceRegex,
	      Of = Ec.needsHardlineAfterDanglingComment,
	      Pf = Ec.rawText,
	      _f = Ec.returnArgumentHasLeadingComment,
	      If = Ec.shouldPrintComma,
	      jf = Ec.shouldFlatten,
	      Mf = Ec.startsWithNoLookaheadToken,
	      Lf = lp.printOptionalToken,
	      Rf = lp.printFunctionTypeParameters,
	      qf = lp.printMemberLookup,
	      Vf = lp.printBindExpressionCallee,
	      Wf = $p.printModuleSource,
	      $f = $p.printModuleSpecifiers,
	      Uf = new WeakMap();
	  var zf = 0;function Jf(e, t, n) {
	    var r = e.getValue();return bd(md([gd(Dd, e.map(n, "decorators")), Xd(r, t) ? yd : Dd]));
	  }function Gf(e, t, n) {
	    var r = [],
	        u = e.getNode(),
	        o = "ClassBody" === u.type;return e.map(function (e, a) {
	      var i = e.getValue();if (!i) return;if ("EmptyStatement" === i.type) return;var s = n(e),
	          l = t.originalText,
	          c = [];if (t.semi || o || Bf(t, e) || !function (e, t) {
	        if ("ExpressionStatement" !== e.getNode().type) return !1;return e.call(function (e) {
	          return function e(t, n) {
	            var r = t.getValue();if (kc(t, n) || "ParenthesizedExpression" === r.type || "TypeCastExpression" === r.type || "ArrowFunctionExpression" === r.type && !Zf(t, n) || "ArrayExpression" === r.type || "ArrayPattern" === r.type || "UnaryExpression" === r.type && r.prefix && ("+" === r.operator || "-" === r.operator) || "TemplateLiteral" === r.type || "TemplateElement" === r.type || cf(r) || "BindExpression" === r.type && !r.object || "RegExpLiteral" === r.type || "Literal" === r.type && r.pattern || "Literal" === r.type && r.regex) return !0;if (!Hd(r)) return !1;return t.call.apply(t, [function (t) {
	              return e(t, n);
	            }].concat(_toConsumableArray(Vd(t, r))));
	          }(e, t);
	        }, "expression");
	      }(e, t) ? c.push(s) : i.comments && i.comments.some(function (e) {
	        return e.leading;
	      }) ? c.push(n(e, { needsSemi: !0 })) : c.push(";", s), !t.semi && o) if (Rd(e)) c.push(";");else if ("ClassProperty" === i.type) {
	        var _e96 = u.body[a + 1];Ld(_e96) && c.push(";");
	      }fd(l, i, t.locEnd) && !df(e) && c.push(yd), r.push(md(c));
	    }), gd(yd, r);
	  }function Hf(e, t, n) {
	    var r = e.getNode();if (r.computed) return md(["[", e.call(n, "key"), "]"]);var u = e.getParentNode(),
	        o = r.key;if ("ClassPrivateProperty" === r.type && "Identifier" === o.type) return md(["#", e.call(n, "key")]);if ("consistent" === t.quoteProps && !Uf.has(u)) {
	      var _e97 = (u.properties || u.body || u.members).some(function (e) {
	        return !e.computed && e.key && Ff(e.key) && !xf(e, t);
	      });Uf.set(u, _e97);
	    }if (("Identifier" === o.type || yf(o) && Af(sd(Pf(o))) && String(o.value) === sd(Pf(o)) && "typescript" !== t.parser && "babel-ts" !== t.parser) && ("json" === t.parser || "consistent" === t.quoteProps && Uf.get(u))) {
	      var _n42 = id(JSON.stringify("Identifier" === o.type ? o.name : o.value.toString()), t);return e.call(function (e) {
	        return Di.printComments(e, function () {
	          return _n42;
	        }, t);
	      }, "key");
	    }return xf(r, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !Uf.get(u)) ? e.call(function (e) {
	      return Di.printComments(e, function () {
	        return (/^\d/.test(o.value) ? sd(o.value) : o.value
	        );
	      }, t);
	    }, "key") : e.call(n, "key");
	  }function Xf(e, t, n) {
	    var r = e.getNode(),
	        u = r.kind,
	        o = r.value || r,
	        a = [];return u && "init" !== u && "method" !== u && "constructor" !== u ? (Xa.ok("get" === u || "set" === u), a.push(u, " ")) : (o.async && a.push("async "), o.generator && a.push("*")), a.push(Hf(e, t, n), r.optional || r.key.optional ? "?" : "", r === o ? Yf(e, t, n) : e.call(function (e) {
	      return Yf(e, t, n);
	    }, "value")), md(a);
	  }function Yf(e, t, n) {
	    var r = [Rf(e, t, n), bd(md([Qf(e, n, t), th(e, n, t)]))];return e.getNode().body ? r.push(" ", e.call(n, "body")) : r.push(t.semi ? ";" : ""), md(r);
	  }function Kf(e, t, n) {
	    var r = e.getValue();if (!r.typeAnnotation) return "";var u = e.getParentNode(),
	        o = r.definite || u && "VariableDeclarator" === u.type && u.definite,
	        a = "DeclareFunction" === u.type && u.id === r;return of(t.originalText, r.typeAnnotation, t) ? md([" /*: ", e.call(n, "typeAnnotation"), " */"]) : md([a ? "" : o ? "!: " : ": ", e.call(n, "typeAnnotation")]);
	  }function Qf(e, t, n, r, u) {
	    var o = e.getValue(),
	        a = e.getParentNode(),
	        i = o.parameters ? "parameters" : "params",
	        s = wf(a),
	        l = yh(o),
	        c = r && !(o[i] && o[i].some(function (e) {
	      return e.comments;
	    })),
	        p = u ? Rf(e, n, t) : "";var d = [];if (o[i]) {
	      var _r56 = o[i].length - 1;d = e.map(function (e, u) {
	        var a = [],
	            i = e.getValue();return a.push(t(e)), u === _r56 ? o.rest && a.push(",", Dd) : s || l || c ? a.push(", ") : fd(n.originalText, i, n.locEnd) ? a.push(",", yd, yd) : a.push(",", Dd), md(a);
	      }, i);
	    }if (o.rest && d.push(md(["...", e.call(t, "rest")])), 0 === d.length) return md([p, "(", Di.printDanglingComments(e, n, !0, function (e) {
	      return ")" === nd(n.originalText, e, n.locEnd);
	    }), ")"]);var f = od(o[i]);if (c) return bd(md([Od(p), "(", md(d.map(Od)), ")"]));var h = o[i].every(function (e) {
	      return !e.decorators;
	    });if (l && h) return md([p, "(", md(d), ")"]);if (s) return md([p, "(", md(d), ")"]);if ((Cf(a, n) || kf(a, n) || "TypeAlias" === a.type || "UnionTypeAnnotation" === a.type || "TSUnionType" === a.type || "IntersectionTypeAnnotation" === a.type || "FunctionTypeAnnotation" === a.type && a.returnType === o) && 1 === o[i].length && null === o[i][0].name && o[i][0].typeAnnotation && null === o.typeParameters && bf(o[i][0].typeAnnotation) && !o.rest) return "always" === n.arrowParens ? md(["(", md(d), ")"]) : md(d);var m = !(f && "RestElement" === f.type || o.rest);return md([p, "(", Ad(md([Ed, md(d)])), Sd(m && If(n, "all") ? "," : ""), Ed, ")"]);
	  }function Zf(e, t) {
	    if ("always" === t.arrowParens) return !1;if ("avoid" === t.arrowParens) {
	      return function (e) {
	        return !(1 !== e.params.length || e.rest || e.typeParameters || Ud(e) || "Identifier" !== e.params[0].type || e.params[0].typeAnnotation || e.params[0].comments || e.params[0].optional || e.predicate || e.returnType);
	      }(e.getValue());
	    }return !1;
	  }function eh(e, t, n) {
	    var r = e.getValue(),
	        u = [];return r.async && u.push("async "), r.generator ? u.push("function* ") : u.push("function "), r.id && u.push(e.call(t, "id")), u.push(Rf(e, n, t), bd(md([Qf(e, t, n), th(e, t, n)])), r.body ? " " : "", e.call(t, "body")), md(u);
	  }function th(e, t, n) {
	    var r = e.getValue(),
	        u = e.call(t, "returnType");if (r.returnType && of(n.originalText, r.returnType, n)) return md([" /*: ", u, " */"]);var o = [u];return r.returnType && r.returnType.typeAnnotation && o.unshift(": "), r.predicate && o.push(r.returnType ? " " : ": ", e.call(t, "predicate")), md(o);
	  }function nh(e, t, n) {
	    var r = e.getValue(),
	        u = t.semi ? ";" : "",
	        o = ["export "],
	        a = r.default || "ExportDefaultDeclaration" === r.type;return a && o.push("default "), o.push(Di.printDanglingComments(e, t, !0)), Of(r) && o.push(yd), r.declaration ? (o.push(e.call(n, "declaration")), a && "ClassDeclaration" !== r.declaration.type && "FunctionDeclaration" !== r.declaration.type && "TSInterfaceDeclaration" !== r.declaration.type && "DeclareClass" !== r.declaration.type && "DeclareFunction" !== r.declaration.type && "TSDeclareFunction" !== r.declaration.type && "EnumDeclaration" !== r.declaration.type && o.push(u)) : (o.push("type" === r.exportKind ? "type " : ""), o.push($f(e, t, n)), o.push(Wf(e, t, n)), o.push(u)), md(o);
	  }function rh(e, t) {
	    var n = Wd(e);return n ? Xa.strictEqual(n.type, "DeclareExportDeclaration") : t.unshift("declare "), md(t);
	  }function uh(e, t, n) {
	    var r = e.getValue();return r.modifiers && r.modifiers.length ? md([gd(" ", e.map(n, "modifiers")), " "]) : "";
	  }var oh = new WeakMap();function ah(e) {
	    return oh.has(e) || oh.set(e, Symbol("typeParameters")), oh.get(e);
	  }function ih(e, t, n, r) {
	    var u = e.getValue();if (!u[r]) return "";if (!Array.isArray(u[r])) return e.call(n, r);var o = e.getNode(2),
	        a = e.getNode(3),
	        i = e.getNode(4);return null != o && wf(o) || 0 === u[r].length || 1 === u[r].length && (Dh(u[r][0]) || "GenericTypeAnnotation" === u[r][0].type && Dh(u[r][0].id) || "TSTypeReference" === u[r][0].type && Dh(u[r][0].typeName) || "NullableTypeAnnotation" === u[r][0].type || i && "VariableDeclarator" === i.type && "TSTypeAnnotation" === o.type && "ArrowFunctionExpression" !== a.type && "TSUnionType" !== u[r][0].type && "UnionTypeAnnotation" !== u[r][0].type && "TSIntersectionType" !== u[r][0].type && "IntersectionTypeAnnotation" !== u[r][0].type && "TSConditionalType" !== u[r][0].type && "TSMappedType" !== u[r][0].type && "TSTypeOperator" !== u[r][0].type && "TSIndexedAccessType" !== u[r][0].type && "TSArrayType" !== u[r][0].type) ? md(["<", gd(", ", e.map(n, r)), function (n) {
	      if (!Ud(n)) return "";var r = n.comments.every(Gs.isBlockComment),
	          u = Di.printDanglingComments(e, t, r);return r ? u : md([u, yd]);
	    }(u), ">"]) : bd(md(["<", Ad(md([Ed, gd(md([",", Dd]), e.map(n, r))])), Sd("typescript" !== t.parser && "babel-ts" !== t.parser && If(t, "all") ? "," : ""), Ed, ">"]), { id: ah(u) });
	  }function sh(e, t, n) {
	    var r = e.getValue(),
	        u = [];r.abstract && u.push("abstract "), u.push("class");var o = r.id && Qd(r.id) || r.superClass && r.superClass.comments && 0 !== r.superClass.comments.length || r.extends && 0 !== r.extends.length || r.mixins && 0 !== r.mixins.length || r.implements && 0 !== r.implements.length,
	        a = [],
	        i = [];r.id && a.push(" ", e.call(n, "id")), a.push(e.call(n, "typeParameters"));var s = ["superClass", "extends", "mixins", "implements"].filter(function (e) {
	      return !!r[e];
	    }).length > 1,
	        l = r.typeParameters && !Zd(r.typeParameters) && !s;function c(u) {
	      if (r[u] && 0 !== r[u].length) {
	        var _o18 = Di.printDanglingComments(e, t, !0, function (_ref35) {
	          var e = _ref35.marker;
	          return e === u;
	        });i.push(l ? Sd(" ", Dd, { groupId: ah(r.typeParameters) }) : Dd, _o18, _o18 && yd, u, bd(Ad(md([Dd, gd(md([",", Dd]), e.map(n, u))]))));
	      }
	    }if (r.superClass) {
	      var _r57 = md(["extends ", e.call(n, "superClass"), e.call(n, "superTypeParameters")]),
	          _u20 = e.call(function (e) {
	        return Di.printComments(e, function () {
	          return _r57;
	        }, t);
	      }, "superClass");o ? i.push(Dd, bd(_u20)) : i.push(" ", _u20);
	    } else c("extends");if (c("mixins"), c("implements"), o) {
	      var _e98 = md(i);l ? u.push(bd(md(a.concat(Sd(Ad(_e98), _e98))))) : u.push(bd(Ad(md(a.concat(_e98)))));
	    } else u.push.apply(u, a.concat(i));return u.push(" ", e.call(n, "body")), u;
	  }function lh(e, t, n, r) {
	    return e ? "" : "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? 1 === t.length ? Ed : yd : Ed;
	  }function ch(e, t, n, r) {
	    return e ? yd : 1 === t.length ? "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? yd : Ed : yd;
	  }function ph(e) {
	    return "LogicalExpression" === e.type && ("ObjectExpression" === e.right.type && 0 !== e.right.properties.length || "ArrayExpression" === e.right.type && 0 !== e.right.elements.length || !!cf(e.right));
	  }function dh(e, t, n, r) {
	    if (Gd(r.originalText, t, r)) return Ad(md([Dd, n]));return tf(t) && !ph(t) || "ConditionalExpression" === t.type && tf(t.test) && !ph(t.test) || "StringLiteralTypeAnnotation" === t.type || "ClassExpression" === t.type && t.decorators && t.decorators.length || ("Identifier" === e.type || Ff(e) || "MemberExpression" === e.type) && (Ff(t) || mf(t)) && "json" !== r.parser && "json5" !== r.parser || "SequenceExpression" === t.type ? bd(Ad(md([Dd, n]))) : md([" ", n]);
	  }function fh(e, t, n, r, u, o) {
	    if (!r) return t;var a = dh(e, r, u, o);return bd(md([t, n, a]));
	  }function hh(e, t, n) {
	    return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? md([" ", t]) : Ad(md([Dd, t]));
	  }function mh(e, t, n) {
	    var r = Pf(e),
	        u = n || "DirectiveLiteral" === e.type;return id(r, t, u);
	  }function gh(e) {
	    var t = e.flags.split("").sort().join("");return "/".concat(e.pattern, "/").concat(t);
	  }function Dh(e) {
	    if (bf(e) || Ef(e)) return !0;if ("UnionTypeAnnotation" === e.type || "TSUnionType" === e.type) {
	      var _t74 = e.types.filter(function (e) {
	        return "VoidTypeAnnotation" === e.type || "TSVoidKeyword" === e.type || "NullLiteralTypeAnnotation" === e.type || "TSNullKeyword" === e.type;
	      }).length,
	          _n43 = e.types.some(function (e) {
	        return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type;
	      });if (e.types.length - 1 === _t74 && _n43) return !0;
	    }return !1;
	  }function yh(e) {
	    if (!e || e.rest) return !1;var t = e.params || e.parameters;if (!t || 1 !== t.length) return !1;var n = t[0];return !n.comments && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && Ef(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && Ef(n.typeAnnotation) || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || "ObjectExpression" === n.right.type && 0 === n.right.properties.length || "ArrayExpression" === n.right.type && 0 === n.right.elements.length));
	  }function Eh(e, t, n, r) {
	    var u = [];var o = [];return e.each(function (e) {
	      u.push(md(o)), u.push(bd(r(e))), o = [",", Dd], e.getValue() && fd(t.originalText, e.getValue(), t.locEnd) && o.push(Ed);
	    }, n), md(u);
	  }function Ch(e, t, n) {
	    var r = e.getValue(),
	        u = t.semi ? ";" : "",
	        o = [];r.argument && (_f(t, r.argument) ? o.push(md([" (", Ad(md([yd, e.call(n, "argument")])), yd, ")"])) : tf(r.argument) || "SequenceExpression" === r.argument.type ? o.push(bd(md([Sd(" (", " "), Ad(md([Ed, e.call(n, "argument")])), Ed, Sd(")")]))) : o.push(" ", e.call(n, "argument")));var a = Array.isArray(r.comments) && r.comments[r.comments.length - 1],
	        i = a && ("CommentLine" === a.type || "Line" === a.type);return i && o.push(u), Ud(r) && o.push(" ", Di.printDanglingComments(e, t, !0)), i || o.push(u), md(o);
	  }function bh(e) {
	    var t = e.getValue(),
	        n = e.getParentNode();return (t && (cf(t) || Jd(t) || n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && (zd(t.leadingComments) || zd(t.trailingComments))) || n && ("JSXSpreadAttribute" === n.type || "JSXSpreadChild" === n.type || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type || ("ClassDeclaration" === n.type || "ClassExpression" === n.type) && n.superClass === t)) && (!ld(e) || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type);
	  }var Ah = { preprocess: Ic, print: function print(e, t, n, r) {
	      var u = e.getValue();var o = !1;var a = function (e, t, n, r) {
	        var u = e.getValue(),
	            o = t.semi ? ";" : "";if (!u) return "";if ("string" == typeof u) return u;var a = jd(e, t, n);if (a) return a;var i = [];switch (u.type) {case "JsExpressionRoot":
	            return e.call(n, "node");case "JsonRoot":
	            return md([e.call(n, "node"), yd]);case "File":
	            return u.program && u.program.interpreter && i.push(e.call(function (e) {
	              return e.call(n, "interpreter");
	            }, "program")), i.push(e.call(n, "program")), md(i);case "Program":
	            {
	              var _r58 = !u.body.every(function (_ref36) {
	                var e = _ref36.type;
	                return "EmptyStatement" === e;
	              }) || u.comments;if (u.directives) {
	                var _a17 = u.directives.length;e.map(function (e, u) {
	                  i.push(n(e), o, yd), (u < _a17 - 1 || _r58) && fd(t.originalText, e.getValue(), t.locEnd) && i.push(yd);
	                }, "directives");
	              }return i.push(e.call(function (e) {
	                return Gf(e, t, n);
	              }, "body")), i.push(Di.printDanglingComments(e, t, !0)), _r58 && i.push(yd), md(i);
	            }case "EmptyStatement":
	            return "";case "ExpressionStatement":
	            if (u.directive) return md([mh(u.expression, t, !0), o]);if ("__vue_event_binding" === t.parser) {
	              var _t75 = e.getParentNode();if ("Program" === _t75.type && 1 === _t75.body.length && _t75.body[0] === u) return md([e.call(n, "expression"), Md(u.expression) ? ";" : ""]);
	            }return md([e.call(n, "expression"), Bf(t, e) ? "" : o]);case "ParenthesizedExpression":
	            return !u.expression.comments ? md(["(", e.call(n, "expression"), ")"]) : bd(md(["(", Ad(md([Ed, e.call(n, "expression")])), Ed, ")"]));case "AssignmentExpression":
	            return fh(u.left, e.call(n, "left"), md([" ", u.operator]), u.right, e.call(n, "right"), t);case "BinaryExpression":case "LogicalExpression":case "NGPipeExpression":
	            {
	              var _r59 = e.getParentNode(),
	                  _o19 = e.getParentNode(1),
	                  _a18 = u !== _r59.body && ("IfStatement" === _r59.type || "WhileStatement" === _r59.type || "SwitchStatement" === _r59.type || "DoWhileStatement" === _r59.type),
	                  _i7 = function e(t, n, r, u, o) {
	                var a = [];var i = t.getValue();if (tf(i)) {
	                  jf(i.operator, i.left.operator) ? a = a.concat(t.call(function (t) {
	                    return e(t, n, r, !0, o);
	                  }, "left")) : a.push(bd(t.call(n, "left")));var _s8 = ph(i),
	                      _l8 = ("|>" === i.operator || "NGPipeExpression" === i.type || "|" === i.operator && "__vue_expression" === r.parser) && !Gd(r.originalText, i.right, r),
	                      _c7 = "NGPipeExpression" === i.type ? "|" : i.operator,
	                      _p7 = "NGPipeExpression" === i.type && 0 !== i.arguments.length ? bd(Ad(md([Ed, ": ", gd(md([Ed, ":", Sd(" ")]), t.map(n, "arguments").map(function (e) {
	                    return vd(2, bd(e));
	                  }))]))) : "",
	                      _d6 = md(_s8 ? [_c7, " ", t.call(n, "right"), _p7] : [_l8 ? Dd : "", _c7, _l8 ? " " : Dd, t.call(n, "right"), _p7]),
	                      _f5 = t.getParentNode(),
	                      _h5 = Zd(i.left),
	                      _m5 = _h5 || !(o && "LogicalExpression" === i.type) && _f5.type !== i.type && i.left.type !== i.type && i.right.type !== i.type;a.push(_l8 ? "" : " ", _m5 ? bd(_d6, { shouldBreak: _h5 }) : _d6), u && i.comments && (a = Pd(Di.printComments(t, function () {
	                    return md(a);
	                  }, r).parts));
	                } else a.push(bd(t.call(n)));return a;
	              }(e, n, t, !1, _a18);if (_a18) return md(_i7);if (("CallExpression" === _r59.type || "OptionalCallExpression" === _r59.type) && _r59.callee === u || "UnaryExpression" === _r59.type || ("MemberExpression" === _r59.type || "OptionalMemberExpression" === _r59.type) && !_r59.computed) return bd(md([Ad(md([Ed, md(_i7)])), Ed]));var _s7 = "ReturnStatement" === _r59.type || "ThrowStatement" === _r59.type || "JSXExpressionContainer" === _r59.type && "JSXAttribute" === _o19.type || "|" !== u.operator && "JsExpressionRoot" === _r59.type || "NGPipeExpression" !== u.type && ("NGRoot" === _r59.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === _r59.type && "NGMicrosyntax" === _o19.type && 1 === _o19.body.length) || u === _r59.body && "ArrowFunctionExpression" === _r59.type || u !== _r59.body && "ForStatement" === _r59.type || "ConditionalExpression" === _r59.type && "ReturnStatement" !== _o19.type && "ThrowStatement" !== _o19.type && "CallExpression" !== _o19.type && "OptionalCallExpression" !== _o19.type || "TemplateLiteral" === _r59.type,
	                  _l7 = "AssignmentExpression" === _r59.type || "VariableDeclarator" === _r59.type || "ClassProperty" === _r59.type || "TSAbstractClassProperty" === _r59.type || "ClassPrivateProperty" === _r59.type || "ObjectProperty" === _r59.type || "Property" === _r59.type,
	                  _c6 = tf(u.left) && jf(u.operator, u.left.operator);if (_s7 || ph(u) && !_c6 || !ph(u) && _l7) return bd(md(_i7));if (0 === _i7.length) return "";var _p6 = cf(u.right),
	                  _d5 = _i7.findIndex(function (e) {
	                return "string" != typeof e && "group" === e.type;
	              }),
	                  _f4 = _i7.slice(0, -1 === _d5 ? 1 : _d5 + 1),
	                  _h4 = md(_i7.slice(_f4.length, _p6 ? -1 : void 0)),
	                  _m4 = Symbol("logicalChain-" + ++zf),
	                  _g4 = bd(md([].concat(_toConsumableArray(_f4), [Ad(_h4)])), { id: _m4 });if (!_p6) return _g4;var _D4 = od(_i7);return bd(md([_g4, Sd(Ad(_D4), _D4, { groupId: _m4 })]));
	            }case "AssignmentPattern":
	            return md([e.call(n, "left"), " = ", e.call(n, "right")]);case "TSTypeAssertion":
	            {
	              var _t76 = !("ArrayExpression" === u.expression.type || "ObjectExpression" === u.expression.type),
	                  _r60 = bd(md(["<", Ad(md([Ed, e.call(n, "typeAnnotation")])), Ed, ">"])),
	                  _o20 = md([Sd("("), Ad(md([Ed, e.call(n, "expression")])), Ed, Sd(")")]);return _t76 ? Fd([md([_r60, e.call(n, "expression")]), md([_r60, bd(_o20, { shouldBreak: !0 })]), md([_r60, e.call(n, "expression")])]) : bd(md([_r60, e.call(n, "expression")]));
	            }case "OptionalMemberExpression":case "MemberExpression":
	            {
	              var _r61 = e.getParentNode();var _o21 = void 0,
	                  _a19 = 0;do {
	                _o21 = e.getParentNode(_a19), _a19++;
	              } while (_o21 && ("MemberExpression" === _o21.type || "OptionalMemberExpression" === _o21.type || "TSNonNullExpression" === _o21.type));var _i8 = _o21 && ("NewExpression" === _o21.type || "BindExpression" === _o21.type || "VariableDeclarator" === _o21.type && "Identifier" !== _o21.id.type || "AssignmentExpression" === _o21.type && "Identifier" !== _o21.left.type) || u.computed || "Identifier" === u.object.type && "Identifier" === u.property.type && "MemberExpression" !== _r61.type && "OptionalMemberExpression" !== _r61.type;return md([e.call(n, "object"), _i8 ? qf(e, t, n) : bd(Ad(md([Ed, qf(e, t, n)])))]);
	            }case "MetaProperty":
	            return md([e.call(n, "meta"), ".", e.call(n, "property")]);case "BindExpression":
	            return u.object && i.push(e.call(n, "object")), i.push(bd(Ad(md([Ed, Vf(e, t, n)])))), md(i);case "Identifier":
	            return md([u.name, Lf(e), Kf(e, t, n)]);case "V8IntrinsicIdentifier":
	            return md(["%", u.name]);case "SpreadElement":case "SpreadElementPattern":case "SpreadProperty":case "SpreadPropertyPattern":case "RestElement":case "ObjectTypeSpreadProperty":
	            return md(["...", e.call(n, "argument"), Kf(e, t, n)]);case "FunctionDeclaration":case "FunctionExpression":
	            return i.push(eh(e, n, t)), u.body || i.push(o), md(i);case "ArrowFunctionExpression":
	            {
	              u.async && i.push("async "), Zf(e, t) ? i.push(e.call(n, "params", 0)) : i.push(bd(md([Qf(e, n, t, r && (r.expandLastArg || r.expandFirstArg), !0), th(e, n, t)])));var _o22 = Di.printDanglingComments(e, t, !0, function (e) {
	                var n = hd(t.originalText, e, t.locEnd);return !1 !== n && "=>" === t.originalText.slice(n, n + 2);
	              });_o22 && i.push(" ", _o22), i.push(" =>");var _a20 = e.call(function (e) {
	                return n(e, r);
	              }, "body");if (!Gd(t.originalText, u.body, t) && ("ArrayExpression" === u.body.type || "ObjectExpression" === u.body.type || "BlockStatement" === u.body.type || cf(u.body) || Sf(u.body, t.originalText, t) || "ArrowFunctionExpression" === u.body.type || "DoExpression" === u.body.type)) return bd(md([md(i), " ", _a20]));if ("SequenceExpression" === u.body.type) return bd(md([md(i), bd(md([" (", Ad(md([Ed, _a20])), Ed, ")"]))]));var _s9 = (r && r.expandLastArg || "JSXExpressionContainer" === e.getParentNode().type) && !(u.comments && u.comments.length),
	                  _l9 = r && r.expandLastArg && If(t, "all"),
	                  _c8 = "ConditionalExpression" === u.body.type && !Mf(u.body, !1);return bd(md([md(i), bd(md([Ad(md([Dd, _c8 ? Sd("", "(") : "", _a20, _c8 ? Sd("", ")") : ""])), _s9 ? md([Sd(_l9 ? "," : ""), Ed]) : ""]))]));
	            }case "YieldExpression":
	            return i.push("yield"), u.delegate && i.push("*"), u.argument && i.push(" ", e.call(n, "argument")), md(i);case "AwaitExpression":
	            {
	              i.push("await"), u.argument && i.push(" ", e.call(n, "argument"));var _t77 = e.getParentNode();return ("CallExpression" === _t77.type || "OptionalCallExpression" === _t77.type) && _t77.callee === u || ("MemberExpression" === _t77.type || "OptionalMemberExpression" === _t77.type) && _t77.object === u ? bd(md([Ad(md([Ed, md(i)])), Ed])) : md(i);
	            }case "ImportSpecifier":
	            return u.importKind && i.push(e.call(n, "importKind"), " "), i.push(e.call(n, "imported")), u.local && u.local.name !== u.imported.name && i.push(" as ", e.call(n, "local")), md(i);case "ExportSpecifier":
	            return i.push(e.call(n, "local")), u.exported && u.exported.name !== u.local.name && i.push(" as ", e.call(n, "exported")), md(i);case "ImportNamespaceSpecifier":
	            return i.push("* as "), i.push(e.call(n, "local")), md(i);case "ImportDefaultSpecifier":
	            return e.call(n, "local");case "TSExportAssignment":
	            return md(["export = ", e.call(n, "expression"), o]);case "ExportDefaultDeclaration":case "ExportNamedDeclaration":
	            return nh(e, t, n);case "DeclareExportDeclaration":
	            return md(["declare ", nh(e, t, n)]);case "ExportAllDeclaration":
	            return i.push("export"), "type" === u.exportKind && i.push(" type"), i.push(" *"), u.exported && i.push(" as ", e.call(n, "exported")), i.push(Wf(e, t, n), o), md(i);case "ExportNamespaceSpecifier":
	            return md(["* as ", e.call(n, "exported")]);case "ExportDefaultSpecifier":
	            return e.call(n, "exported");case "ImportDeclaration":
	            return i.push("import"), u.importKind && "value" !== u.importKind && i.push(" ", u.importKind), u.specifiers && u.specifiers.length > 0 ? (i.push($f(e, t, n)), i.push(Wf(e, t, n))) : u.importKind && "type" === u.importKind || /{\s*}/.test(t.originalText.slice(t.locStart(u), t.locStart(u.source))) ? i.push(" {}", Wf(e, t, n)) : i.push(" ", e.call(n, "source")), Array.isArray(u.attributes) && 0 !== u.attributes.length && i.push(" with ", md(e.map(n, "attributes"))), i.push(o), md(i);case "ImportAttribute":
	            return md([e.call(n, "key"), ": ", e.call(n, "value")]);case "Import":
	            return "import";case "TSModuleBlock":case "BlockStatement":
	            {
	              var _r62 = e.call(function (e) {
	                return Gf(e, t, n);
	              }, "body"),
	                  _a21 = u.body.some(function (e) {
	                return "EmptyStatement" !== e.type;
	              }),
	                  _s10 = u.directives && u.directives.length > 0,
	                  _l10 = e.getParentNode(),
	                  _c9 = e.getParentNode(1);return _a21 || _s10 || Ud(u) || "ArrowFunctionExpression" !== _l10.type && "FunctionExpression" !== _l10.type && "FunctionDeclaration" !== _l10.type && "ObjectMethod" !== _l10.type && "ClassMethod" !== _l10.type && "ClassPrivateMethod" !== _l10.type && "ForStatement" !== _l10.type && "WhileStatement" !== _l10.type && "DoWhileStatement" !== _l10.type && "DoExpression" !== _l10.type && ("CatchClause" !== _l10.type || _c9.finalizer) && "TSModuleDeclaration" !== _l10.type ? (i.push("{"), _s10 && e.each(function (e) {
	                i.push(Ad(md([yd, n(e), o]))), fd(t.originalText, e.getValue(), t.locEnd) && i.push(yd);
	              }, "directives"), _a21 && i.push(Ad(md([yd, _r62]))), i.push(Di.printDanglingComments(e, t)), i.push(yd, "}"), md(i)) : "{}";
	            }case "ReturnStatement":
	            return md(["return", Ch(e, t, n)]);case "NewExpression":case "ImportExpression":case "OptionalCallExpression":case "CallExpression":
	            {
	              var _r63 = "NewExpression" === u.type,
	                  _o23 = "ImportExpression" === u.type,
	                  _a22 = Lf(e),
	                  _i9 = _o23 ? [u.source] : u.arguments;if (!_o23 && !_r63 && "Identifier" === u.callee.type && ("require" === u.callee.name || "define" === u.callee.name) || 1 === _i9.length && Sf(_i9[0], t.originalText, t) || !_r63 && wf(u, e.getParentNode())) return md([_r63 ? "new " : "", e.call(n, "callee"), _a22, Rf(e, t, n), md(["(", _o23 ? e.call(n, "source") : gd(", ", e.map(n, "arguments")), ")"])]);var _s11 = u.callee && "Identifier" === u.callee.type && zd(u.callee.trailingComments);if (_s11 && (u.callee.trailingComments[0].printed = !0), !_o23 && !_r63 && gf(u.callee) && !e.call(function (e) {
	                return kc(e, t);
	              }, "callee")) return _p(e, t, n);var _l11 = md([_r63 ? "new " : "", _o23 ? "import" : e.call(n, "callee"), _a22, _s11 ? "/*:: ".concat(u.callee.trailingComments[0].value.slice(2).trim(), " */") : "", Rf(e, t, n), np(e, t, n)]);return _o23 || nf(u.callee) ? bd(_l11) : _l11;
	            }case "ObjectTypeInternalSlot":
	            return md([u.static ? "static " : "", "[[", e.call(n, "id"), "]]", Lf(e), u.method ? "" : ": ", e.call(n, "value")]);case "ObjectExpression":case "ObjectPattern":case "ObjectTypeAnnotation":case "TSInterfaceBody":case "TSTypeLiteral":case "RecordExpression":
	            {
	              var _r64 = void 0;_r64 = "TSTypeLiteral" === u.type ? "members" : "TSInterfaceBody" === u.type ? "body" : "properties";var _a23 = "ObjectTypeAnnotation" === u.type,
	                  _i10 = [];_a23 && _i10.push("indexers", "callProperties", "internalSlots"), _i10.push(_r64);var _s12 = _i10.map(function (e) {
	                return u[e][0];
	              }).sort(function (e, n) {
	                return t.locStart(e) - t.locStart(n);
	              })[0],
	                  _l12 = e.getParentNode(0),
	                  _c10 = _a23 && _l12 && ("InterfaceDeclaration" === _l12.type || "DeclareInterface" === _l12.type || "DeclareClass" === _l12.type) && "body" === e.getName(),
	                  _p8 = "TSInterfaceBody" === u.type || _c10 || "ObjectPattern" === u.type && "FunctionDeclaration" !== _l12.type && "FunctionExpression" !== _l12.type && "ArrowFunctionExpression" !== _l12.type && "ObjectMethod" !== _l12.type && "ClassMethod" !== _l12.type && "ClassPrivateMethod" !== _l12.type && "AssignmentPattern" !== _l12.type && "CatchClause" !== _l12.type && u.properties.some(function (e) {
	                return e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type);
	              }) || "ObjectPattern" !== u.type && _s12 && ud(t.originalText, t.locStart(u), t.locStart(_s12)),
	                  _d7 = _c10 ? ";" : "TSInterfaceBody" === u.type || "TSTypeLiteral" === u.type ? Sd(o, ";") : ",",
	                  _f6 = "RecordExpression" === u.type ? "#{" : u.exact ? "{|" : "{",
	                  _h6 = u.exact ? "|}" : "}",
	                  _m6 = [];_i10.forEach(function (r) {
	                e.each(function (e) {
	                  var r = e.getValue();_m6.push({ node: r, printed: n(e), loc: t.locStart(r) });
	                }, r);
	              });var _g5 = [];var _D5 = _m6.sort(function (e, t) {
	                return e.loc - t.loc;
	              }).map(function (e) {
	                var n = md(_g5.concat(bd(e.printed)));return _g5 = [_d7, Dd], "TSPropertySignature" !== e.node.type && "TSMethodSignature" !== e.node.type && "TSConstructSignatureDeclaration" !== e.node.type || !cd(e.node) || _g5.shift(), fd(t.originalText, e.node, t.locEnd) && _g5.push(yd), n;
	              });if (u.inexact) {
	                var _n44 = void 0;if (Ud(u)) {
	                  var _r65 = !u.comments.every(Gs.isBlockComment),
	                      _o24 = Di.printDanglingComments(e, t, !0);_n44 = md([_o24, _r65 || rd(t.originalText, t.locEnd(u.comments[u.comments.length - 1])) ? yd : Dd, "..."]);
	                } else _n44 = "...";_D5.push(md(_g5.concat(_n44)));
	              }var _y2 = od(u[_r64]),
	                  _E2 = !(u.inexact || _y2 && "RestElement" === _y2.type);var _C2 = void 0;if (0 === _D5.length) {
	                if (!Ud(u)) return md([_f6, _h6, Kf(e, t, n)]);_C2 = bd(md([_f6, Di.printDanglingComments(e, t), Ed, _h6, Lf(e), Kf(e, t, n)]));
	              } else _C2 = md([_f6, Ad(md([t.bracketSpacing ? Dd : Ed, md(_D5)])), Sd(_E2 && ("," !== _d7 || If(t)) ? _d7 : ""), md([t.bracketSpacing ? Dd : Ed, _h6]), Lf(e), Kf(e, t, n)]);return e.match(function (e) {
	                return "ObjectPattern" === e.type && !e.decorators;
	              }, function (e, t, n) {
	                return yh(e) && ("params" === t || "parameters" === t) && 0 === n;
	              }) || e.match(Dh, function (e, t) {
	                return "typeAnnotation" === t;
	              }, function (e, t) {
	                return "typeAnnotation" === t;
	              }, function (e, t, n) {
	                return yh(e) && ("params" === t || "parameters" === t) && 0 === n;
	              }) ? _C2 : bd(_C2, { shouldBreak: _p8 });
	            }case "ObjectProperty":case "Property":
	            return u.method || "get" === u.kind || "set" === u.kind ? Xf(e, t, n) : (u.shorthand ? i.push(e.call(n, "value")) : i.push(fh(u.key, Hf(e, t, n), ":", u.value, e.call(n, "value"), t)), md(i));case "ClassMethod":case "ClassPrivateMethod":case "MethodDefinition":case "TSAbstractMethodDefinition":case "TSDeclareMethod":
	            return u.decorators && 0 !== u.decorators.length && i.push(Jf(e, t, n)), u.accessibility && i.push(u.accessibility + " "), u.static && i.push("static "), ("TSAbstractMethodDefinition" === u.type || u.abstract) && i.push("abstract "), i.push(Xf(e, t, n)), md(i);case "ObjectMethod":
	            return Xf(e, t, n);case "Decorator":
	            return md(["@", e.call(n, "expression"), e.call(n, "callee")]);case "ArrayExpression":case "ArrayPattern":case "TupleExpression":
	            {
	              var _r66 = "TupleExpression" === u.type ? "#[" : "[",
	                  _o25 = "]";if (0 === u.elements.length) Ud(u) ? i.push(bd(md([_r66, Di.printDanglingComments(e, t), Ed, _o25]))) : i.push(_r66, _o25);else {
	                var _a24 = od(u.elements),
	                    _s13 = !(_a24 && "RestElement" === _a24.type),
	                    _l13 = _s13 && null === _a24,
	                    _c11 = !t.__inJestEach && u.elements.length > 1 && u.elements.every(function (e, t, n) {
	                  var r = e && e.type;if ("ArrayExpression" !== r && "ObjectExpression" !== r) return !1;var u = n[t + 1];if (u && r !== u.type) return !1;var o = "ArrayExpression" === r ? "elements" : "properties";return e[o] && e[o].length > 1;
	                });i.push(bd(md([_r66, Ad(md([Ed, Eh(e, t, "elements", n)])), _l13 ? "," : "", Sd(_s13 && !_l13 && If(t) ? "," : ""), Di.printDanglingComments(e, t, !0), Ed, _o25]), { shouldBreak: _c11 }));
	              }return i.push(Lf(e), Kf(e, t, n)), md(i);
	            }case "SequenceExpression":
	            {
	              var _t78 = e.getParentNode(0);if ("ExpressionStatement" === _t78.type || "ForStatement" === _t78.type) {
	                var _t79 = [];return e.each(function (e) {
	                  0 === e.getName() ? _t79.push(n(e)) : _t79.push(",", Ad(md([Dd, n(e)])));
	                }, "expressions"), bd(md(_t79));
	              }return bd(md([gd(md([",", Dd]), e.map(n, "expressions"))]));
	            }case "ThisExpression":
	            return "this";case "Super":
	            return "super";case "NullLiteral":
	            return "null";case "RegExpLiteral":
	            return gh(u);case "NumericLiteral":
	            return sd(u.extra.raw);case "DecimalLiteral":
	            return sd(u.value) + "m";case "BigIntLiteral":
	            return (u.bigint || u.extra.raw).toLowerCase();case "BooleanLiteral":case "StringLiteral":case "Literal":
	            return u.regex ? gh(u.regex) : u.bigint ? u.raw.toLowerCase() : "number" == typeof u.value ? sd(u.raw) : "string" != typeof u.value ? "" + u.value : mh(u, t);case "Directive":
	            return e.call(n, "value");case "DirectiveLiteral":
	            return mh(u, t);case "UnaryExpression":
	            return i.push(u.operator), /[a-z]$/.test(u.operator) && i.push(" "), u.argument.comments && u.argument.comments.length > 0 ? i.push(bd(md(["(", Ad(md([Ed, e.call(n, "argument")])), Ed, ")"]))) : i.push(e.call(n, "argument")), md(i);case "UpdateExpression":
	            return i.push(e.call(n, "argument"), u.operator), u.prefix && i.reverse(), md(i);case "ConditionalExpression":
	            return td(e, t, n, { beforeParts: function beforeParts() {
	                return [e.call(n, "test")];
	              }, afterParts: function afterParts(e) {
	                return [e ? Ed : ""];
	              }, shouldCheckJsx: !0, conditionalNodeType: "ConditionalExpression", consequentNodePropertyName: "consequent", alternateNodePropertyName: "alternate", testNodePropertyNames: ["test"] });case "VariableDeclaration":
	            {
	              var _t80 = e.map(function (e) {
	                return n(e);
	              }, "declarations"),
	                  _r67 = e.getParentNode(),
	                  _a25 = "ForStatement" === _r67.type || "ForInStatement" === _r67.type || "ForOfStatement" === _r67.type,
	                  _s14 = u.declarations.some(function (e) {
	                return e.init;
	              });var _l14 = void 0;return 1 !== _t80.length || u.declarations[0].comments ? _t80.length > 0 && (_l14 = Ad(_t80[0])) : _l14 = _t80[0], i = [u.declare ? "declare " : "", u.kind, _l14 ? md([" ", _l14]) : "", Ad(md(_t80.slice(1).map(function (e) {
	                return md([",", _s14 && !_a25 ? yd : Dd, e]);
	              })))], _a25 && _r67.body !== u || i.push(o), bd(md(i));
	            }case "TSTypeAliasDeclaration":
	            {
	              u.declare && i.push("declare ");var _r68 = dh(u.id, u.typeAnnotation, u.typeAnnotation && e.call(n, "typeAnnotation"), t);return i.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", _r68, o), bd(md(i));
	            }case "VariableDeclarator":
	            return fh(u.id, e.call(n, "id"), " =", u.init, u.init && e.call(n, "init"), t);case "WithStatement":
	            return bd(md(["with (", e.call(n, "object"), ")", hh(u.body, e.call(n, "body"))]));case "IfStatement":
	            {
	              var _r69 = hh(u.consequent, e.call(n, "consequent")),
	                  _o26 = bd(md(["if (", bd(md([Ad(md([Ed, e.call(n, "test")])), Ed])), ")", _r69]));if (i.push(_o26), u.alternate) {
	                var _r70 = Qd(u.consequent) && u.consequent.comments.some(function (e) {
	                  return e.trailing && !Gs.isBlockComment(e);
	                }) || Of(u),
	                    _o27 = "BlockStatement" === u.consequent.type && !_r70;i.push(_o27 ? " " : yd), Ud(u) && i.push(Di.printDanglingComments(e, t, !0), _r70 ? yd : " "), i.push("else", bd(hh(u.alternate, e.call(n, "alternate"), "IfStatement" === u.alternate.type)));
	              }return md(i);
	            }case "ForStatement":
	            {
	              var _r71 = hh(u.body, e.call(n, "body")),
	                  _o28 = Di.printDanglingComments(e, t, !0),
	                  _a26 = _o28 ? md([_o28, Ed]) : "";return u.init || u.test || u.update ? md([_a26, bd(md(["for (", bd(md([Ad(md([Ed, e.call(n, "init"), ";", Dd, e.call(n, "test"), ";", Dd, e.call(n, "update")])), Ed])), ")", _r71]))]) : md([_a26, bd(md(["for (;;)", _r71]))]);
	            }case "WhileStatement":
	            return bd(md(["while (", bd(md([Ad(md([Ed, e.call(n, "test")])), Ed])), ")", hh(u.body, e.call(n, "body"))]));case "ForInStatement":
	            return bd(md([u.each ? "for each (" : "for (", e.call(n, "left"), " in ", e.call(n, "right"), ")", hh(u.body, e.call(n, "body"))]));case "ForOfStatement":
	            return bd(md(["for", u.await ? " await" : "", " (", e.call(n, "left"), " of ", e.call(n, "right"), ")", hh(u.body, e.call(n, "body"))]));case "DoWhileStatement":
	            {
	              var _t81 = hh(u.body, e.call(n, "body")),
	                  _r72 = bd(md(["do", _t81]));return i = [_r72], "BlockStatement" === u.body.type ? i.push(" ") : i.push(yd), i.push("while ("), i.push(bd(md([Ad(md([Ed, e.call(n, "test")])), Ed])), ")", o), md(i);
	            }case "DoExpression":
	            return md(["do ", e.call(n, "body")]);case "BreakStatement":
	            return i.push("break"), u.label && i.push(" ", e.call(n, "label")), i.push(o), md(i);case "ContinueStatement":
	            return i.push("continue"), u.label && i.push(" ", e.call(n, "label")), i.push(o), md(i);case "LabeledStatement":
	            return "EmptyStatement" === u.body.type ? md([e.call(n, "label"), ":;"]) : md([e.call(n, "label"), ": ", e.call(n, "body")]);case "TryStatement":
	            return md(["try ", e.call(n, "block"), u.handler ? md([" ", e.call(n, "handler")]) : "", u.finalizer ? md([" finally ", e.call(n, "finalizer")]) : ""]);case "CatchClause":
	            if (u.param) {
	              var _r73 = u.param.comments && u.param.comments.some(function (e) {
	                return !Gs.isBlockComment(e) || e.leading && rd(t.originalText, t.locEnd(e)) || e.trailing && rd(t.originalText, t.locStart(e), { backwards: !0 });
	              }),
	                  _o29 = e.call(n, "param");return md(["catch ", md(_r73 ? ["(", Ad(md([Ed, _o29])), Ed, ") "] : ["(", _o29, ") "]), e.call(n, "body")]);
	            }return md(["catch ", e.call(n, "body")]);case "ThrowStatement":
	            return md(["throw", Ch(e, t, n)]);case "SwitchStatement":
	            return md([bd(md(["switch (", Ad(md([Ed, e.call(n, "discriminant")])), Ed, ")"])), " {", u.cases.length > 0 ? Ad(md([yd, gd(yd, e.map(function (e) {
	              var r = e.getValue();return md([e.call(n), u.cases.indexOf(r) !== u.cases.length - 1 && fd(t.originalText, r, t.locEnd) ? yd : ""]);
	            }, "cases"))])) : "", yd, "}"]);case "SwitchCase":
	            {
	              u.test ? i.push("case ", e.call(n, "test"), ":") : i.push("default:");var _r74 = u.consequent.filter(function (e) {
	                return "EmptyStatement" !== e.type;
	              });if (_r74.length > 0) {
	                var _u21 = e.call(function (e) {
	                  return Gf(e, t, n);
	                }, "consequent");i.push(1 === _r74.length && "BlockStatement" === _r74[0].type ? md([" ", _u21]) : Ad(md([yd, _u21])));
	              }return md(i);
	            }case "DebuggerStatement":
	            return md(["debugger", o]);case "JSXAttribute":
	            if (i.push(e.call(n, "name")), u.value) {
	              var _r75 = void 0;if (Ff(u.value)) {
	                var _e99 = Pf(u.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"');var _n45 = dd(_e99, t.jsxSingleQuote ? "'" : '"'),
	                    _o30 = "'" === _n45 ? "&apos;" : "&quot;";_e99 = _e99.slice(1, -1).replace(new RegExp(_n45, "g"), _o30), _r75 = md([_n45, _e99, _n45]);
	              } else _r75 = e.call(n, "value");i.push("=", _r75);
	            }return md(i);case "JSXIdentifier":
	            return "" + u.name;case "JSXNamespacedName":
	            return gd(":", [e.call(n, "namespace"), e.call(n, "name")]);case "JSXMemberExpression":
	            return gd(".", [e.call(n, "object"), e.call(n, "property")]);case "TSQualifiedName":
	            return gd(".", [e.call(n, "left"), e.call(n, "right")]);case "JSXSpreadAttribute":case "JSXSpreadChild":
	            return md(["{", e.call(function (e) {
	              var r = md(["...", n(e)]),
	                  u = e.getValue();return u.comments && u.comments.length && bh(e) ? md([Ad(md([Ed, Di.printComments(e, function () {
	                return r;
	              }, t)])), Ed]) : r;
	            }, "JSXSpreadAttribute" === u.type ? "argument" : "expression"), "}"]);case "JSXExpressionContainer":
	            {
	              var _t82 = e.getParentNode(0),
	                  _r76 = u.expression.comments && u.expression.comments.length > 0,
	                  _o31 = "JSXEmptyExpression" === u.expression.type || !_r76 && ("ArrayExpression" === u.expression.type || "ObjectExpression" === u.expression.type || "ArrowFunctionExpression" === u.expression.type || "CallExpression" === u.expression.type || "OptionalCallExpression" === u.expression.type || "FunctionExpression" === u.expression.type || "TemplateLiteral" === u.expression.type || "TaggedTemplateExpression" === u.expression.type || "DoExpression" === u.expression.type || cf(_t82) && ("ConditionalExpression" === u.expression.type || tf(u.expression)));return bd(_o31 ? md(["{", e.call(n, "expression"), wd, "}"]) : md(["{", Ad(md([Ed, e.call(n, "expression")])), Ed, wd, "}"]));
	            }case "JSXFragment":case "JSXElement":
	            {
	              var _r77 = Di.printComments(e, function () {
	                return function (e, t, n) {
	                  var r = e.getValue();if ("JSXElement" === r.type && rf(r)) return md([e.call(n, "openingElement"), e.call(n, "closingElement")]);var u = "JSXElement" === r.type ? e.call(n, "openingElement") : e.call(n, "openingFragment"),
	                      o = "JSXElement" === r.type ? e.call(n, "closingElement") : e.call(n, "closingFragment");if (1 === r.children.length && "JSXExpressionContainer" === r.children[0].type && ("TemplateLiteral" === r.children[0].expression.type || "TaggedTemplateExpression" === r.children[0].expression.type)) return md([u, md(e.map(n, "children")), o]);r.children = r.children.map(function (e) {
	                    return pf(e) ? { type: "JSXText", value: " ", raw: " " } : e;
	                  });var a = r.children.filter(cf).length > 0,
	                      i = r.children.filter(function (e) {
	                    return "JSXExpressionContainer" === e.type;
	                  }).length > 1,
	                      s = "JSXElement" === r.type && r.openingElement.attributes.length > 1;var l = Td(u) || a || s || i;var c = "mdx" === e.getParentNode().rootMarker,
	                      p = t.singleQuote ? "{' '}" : '{" "}',
	                      d = c ? md([" "]) : Sd(md([p, Ed]), " "),
	                      f = r.openingElement && r.openingElement.name && "fbt" === r.openingElement.name.name,
	                      h = function (e, t, n, r, u) {
	                    var o = e.getValue(),
	                        a = [];return e.map(function (e, t) {
	                      var i = e.getValue();if (ff(i)) {
	                        var _e100 = Pf(i);if (hf(i)) {
	                          var _n46 = _e100.split(Nf);if ("" === _n46[0]) {
	                            if (a.push(""), _n46.shift(), /\n/.test(_n46[0])) {
	                              var _e101 = o.children[t + 1];a.push(ch(u, _n46[1], i, _e101));
	                            } else a.push(r);_n46.shift();
	                          }var _s15 = void 0;if ("" === od(_n46) && (_n46.pop(), _s15 = _n46.pop()), 0 === _n46.length) return;if (_n46.forEach(function (e, t) {
	                            t % 2 == 1 ? a.push(Dd) : a.push(e);
	                          }), void 0 !== _s15) {
	                            if (/\n/.test(_s15)) {
	                              var _e102 = o.children[t + 1];a.push(ch(u, od(a), i, _e102));
	                            } else a.push(r);
	                          } else {
	                            var _e103 = o.children[t + 1];a.push(lh(u, od(a), i, _e103));
	                          }
	                        } else /\n/.test(_e100) ? _e100.match(/\n/g).length > 1 && (a.push(""), a.push(yd)) : (a.push(""), a.push(r));
	                      } else {
	                        var _r78 = n(e);a.push(_r78);var _s16 = o.children[t + 1];if (_s16 && hf(_s16)) {
	                          var _e104 = Pf(_s16).trim().split(Nf)[0];a.push(lh(u, _e104, i, _s16));
	                        } else a.push(yd);
	                      }
	                    }, "children"), a;
	                  }(e, 0, n, d, f),
	                      m = r.children.some(function (e) {
	                    return hf(e);
	                  });for (var _e105 = h.length - 2; _e105 >= 0; _e105--) {
	                    var _t83 = "" === h[_e105] && "" === h[_e105 + 1],
	                        _n47 = h[_e105] === yd && "" === h[_e105 + 1] && h[_e105 + 2] === yd,
	                        _r79 = (h[_e105] === Ed || h[_e105] === yd) && "" === h[_e105 + 1] && h[_e105 + 2] === d,
	                        _u22 = h[_e105] === d && "" === h[_e105 + 1] && (h[_e105 + 2] === Ed || h[_e105 + 2] === yd),
	                        _o32 = h[_e105] === d && "" === h[_e105 + 1] && h[_e105 + 2] === d,
	                        _a27 = h[_e105] === Ed && "" === h[_e105 + 1] && h[_e105 + 2] === yd || h[_e105] === yd && "" === h[_e105 + 1] && h[_e105 + 2] === Ed;_n47 && m || _t83 || _r79 || _o32 || _a27 ? h.splice(_e105, 2) : _u22 && h.splice(_e105 + 1, 2);
	                  }for (; h.length && (kd(od(h)) || Nd(od(h)));) {
	                    h.pop();
	                  }for (; h.length && (kd(h[0]) || Nd(h[0])) && (kd(h[1]) || Nd(h[1]));) {
	                    h.shift(), h.shift();
	                  }var g = [];h.forEach(function (e, t) {
	                    if (e === d) {
	                      if (1 === t && "" === h[t - 1]) return 2 === h.length ? void g.push(p) : void g.push(md([p, yd]));if (t === h.length - 1) return void g.push(p);if ("" === h[t - 1] && h[t - 2] === yd) return void g.push(p);
	                    }g.push(e), Td(e) && (l = !0);
	                  });var D = m ? xd(g) : bd(md(g), { shouldBreak: !0 });if (c) return D;var y = bd(md([u, Ad(md([yd, D])), yd, o]));if (l) return y;return Fd([bd(md([u, md(h), o])), y]);
	                }(e, t, n);
	              }, t);return function (e, t, n) {
	                var r = e.getParentNode();if (!r) return t;if ({ ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[r.type]) return t;var u = e.match(void 0, function (e) {
	                  return "ArrowFunctionExpression" === e.type;
	                }, nf, function (e) {
	                  return "JSXExpressionContainer" === e.type;
	                }),
	                    o = kc(e, n);return bd(md([o ? "" : Sd("("), Ad(md([Ed, t])), Ed, o ? "" : Sd(")")]), { shouldBreak: u });
	              }(e, _r77, t);
	            }case "JSXOpeningElement":
	            {
	              var _r80 = e.getValue(),
	                  _u23 = _r80.name && _r80.name.comments && _r80.name.comments.length > 0 || _r80.typeParameters && _r80.typeParameters.comments && _r80.typeParameters.comments.length > 0;if (_r80.selfClosing && !_r80.attributes.length && !_u23) return md(["<", e.call(n, "name"), e.call(n, "typeParameters"), " />"]);if (_r80.attributes && 1 === _r80.attributes.length && _r80.attributes[0].value && Ff(_r80.attributes[0].value) && !_r80.attributes[0].value.value.includes("\n") && !_u23 && (!_r80.attributes[0].comments || !_r80.attributes[0].comments.length)) return bd(md(["<", e.call(n, "name"), e.call(n, "typeParameters"), " ", md(e.map(n, "attributes")), _r80.selfClosing ? " />" : ">"]));var _o33 = _r80.attributes.length && Qd(od(_r80.attributes)),
	                  _a28 = !_r80.attributes.length && !_u23 || t.jsxBracketSameLine && (!_u23 || _r80.attributes.length) && !_o33,
	                  _i11 = _r80.attributes && _r80.attributes.some(function (e) {
	                return e.value && Ff(e.value) && e.value.value.includes("\n");
	              });return bd(md(["<", e.call(n, "name"), e.call(n, "typeParameters"), md([Ad(md(e.map(function (e) {
	                return md([Dd, n(e)]);
	              }, "attributes"))), _r80.selfClosing ? Dd : _a28 ? ">" : Ed]), _r80.selfClosing ? "/>" : _a28 ? "" : ">"]), { shouldBreak: _i11 });
	            }case "JSXClosingElement":
	            return md(["</", e.call(n, "name"), ">"]);case "JSXOpeningFragment":case "JSXClosingFragment":
	            {
	              var _n48 = u.comments && u.comments.length,
	                  _r81 = _n48 && !u.comments.every(Gs.isBlockComment),
	                  _o34 = "JSXOpeningFragment" === u.type;return md([_o34 ? "<" : "</", Ad(md([_r81 ? yd : _n48 && !_o34 ? " " : "", Di.printDanglingComments(e, t, !0)])), _r81 ? yd : "", ">"]);
	            }case "JSXText":
	            throw new Error("JSXTest should be handled by JSXElement");case "JSXEmptyExpression":
	            {
	              var _n49 = u.comments && !u.comments.every(Gs.isBlockComment);return md([Di.printDanglingComments(e, t, !_n49), _n49 ? yd : ""]);
	            }case "ClassBody":
	            return u.comments || 0 !== u.body.length ? md(["{", u.body.length > 0 ? Ad(md([yd, e.call(function (e) {
	              return Gf(e, t, n);
	            }, "body")])) : Di.printDanglingComments(e, t), yd, "}"]) : "{}";case "ClassProperty":case "TSAbstractClassProperty":case "ClassPrivateProperty":
	            {
	              u.decorators && 0 !== u.decorators.length && i.push(Jf(e, t, n)), u.accessibility && i.push(u.accessibility + " "), u.declare && i.push("declare "), u.static && i.push("static "), ("TSAbstractClassProperty" === u.type || u.abstract) && i.push("abstract "), u.readonly && i.push("readonly ");var _r82 = qd(u);return _r82 && i.push(_r82), i.push(Hf(e, t, n), Lf(e), Kf(e, t, n)), u.value && i.push(" =", dh(u.key, u.value, e.call(n, "value"), t)), i.push(o), bd(md(i));
	            }case "ClassDeclaration":case "ClassExpression":
	            return u.declare && i.push("declare "), i.push(md(sh(e, t, n))), md(i);case "TSInterfaceHeritage":case "TSExpressionWithTypeArguments":
	            return i.push(e.call(n, "expression")), u.typeParameters && i.push(e.call(n, "typeParameters")), md(i);case "TemplateElement":
	            return gd(Cd, u.value.raw.split(/\r?\n/g));case "TemplateLiteral":
	            {
	              var _r83 = e.getParentNode();if (lf(u, _r83)) {
	                var _r84 = function (e, t, n) {
	                  var r = e.getNode(),
	                      u = r.quasis[0].value.raw.trim().split(/\s*\|\s*/);if (u.length > 1 || u.some(function (e) {
	                    return 0 !== e.length;
	                  })) {
	                    var _ret9 = function () {
	                      t.__inJestEach = !0;var o = e.map(n, "expressions");t.__inJestEach = !1;var a = [],
	                          i = o.map(function (e) {
	                        return "${" + _d(e, Object.assign({}, t, { printWidth: 1 / 0, endOfLine: "lf" })).formatted + "}";
	                      }),
	                          s = [{ hasLineBreak: !1, cells: [] }];for (var _e106 = 1; _e106 < r.quasis.length; _e106++) {
	                        var _t84 = s[s.length - 1],
	                            _n50 = i[_e106 - 1];_t84.cells.push(_n50), _n50.includes("\n") && (_t84.hasLineBreak = !0), r.quasis[_e106].value.raw.includes("\n") && s.push({ hasLineBreak: !1, cells: [] });
	                      }var l = Math.max.apply(Math, [u.length].concat(_toConsumableArray(s.map(function (e) {
	                        return e.cells.length;
	                      })))),
	                          c = Array.from({ length: l }).fill(0),
	                          p = [{ cells: u }].concat(_toConsumableArray(s.filter(function (e) {
	                        return 0 !== e.cells.length;
	                      })));var _iteratorNormalCompletion71 = true;
	                      var _didIteratorError71 = false;
	                      var _iteratorError71 = undefined;

	                      try {
	                        for (var _iterator71 = p.filter(function (e) {
	                          return !e.hasLineBreak;
	                        })[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
	                          var _ref38 = _step71.value;
	                          var _e107 = _ref38.cells;
	                          _e107.forEach(function (e, t) {
	                            c[t] = Math.max(c[t], ad(e));
	                          });
	                        }
	                      } catch (err) {
	                        _didIteratorError71 = true;
	                        _iteratorError71 = err;
	                      } finally {
	                        try {
	                          if (!_iteratorNormalCompletion71 && _iterator71.return) {
	                            _iterator71.return();
	                          }
	                        } finally {
	                          if (_didIteratorError71) {
	                            throw _iteratorError71;
	                          }
	                        }
	                      }

	                      return {
	                        v: (a.push(wd, "`", Ad(md([yd, gd(yd, p.map(function (e) {
	                          return gd(" | ", e.cells.map(function (t, n) {
	                            return e.hasLineBreak ? t : t + " ".repeat(c[n] - ad(t));
	                          }));
	                        }))])), yd, "`"), md(a))
	                      };
	                    }();

	                    if ((typeof _ret9 === "undefined" ? "undefined" : _typeof(_ret9)) === "object") return _ret9.v;
	                  }
	                }(e, t, n);if (_r84) return _r84;
	              }var _o35 = e.map(n, "expressions");var _a29 = vf(u);return _a29 && (_o35 = _o35.map(function (e) {
	                return _d(e, Object.assign({}, t, { printWidth: 1 / 0 })).formatted;
	              })), i.push(wd, "`"), e.each(function (e) {
	                var r = e.getName();if (i.push(n(e)), r < _o35.length) {
	                  var _n51 = t.tabWidth,
	                      _s17 = e.getValue(),
	                      _l15 = pd(_s17.value.raw, _n51);var _c12 = _o35[r];_a29 || (u.expressions[r].comments && u.expressions[r].comments.length || "MemberExpression" === u.expressions[r].type || "OptionalMemberExpression" === u.expressions[r].type || "ConditionalExpression" === u.expressions[r].type || "SequenceExpression" === u.expressions[r].type || "TSAsExpression" === u.expressions[r].type || tf(u.expressions[r])) && (_c12 = md([Ad(md([Ed, _c12])), Ed]));var _p9 = 0 === _l15 && _s17.value.raw.endsWith("\n") ? vd(-1 / 0, _c12) : Bd(_c12, _l15, _n51);i.push(bd(md(["${", _p9, wd, "}"])));
	                }
	              }, "quasis"), i.push("`"), md(i);
	            }case "TaggedTemplateExpression":
	            return md([e.call(n, "tag"), e.call(n, "typeParameters"), e.call(n, "quasi")]);case "Node":case "Printable":case "SourceLocation":case "Position":case "Statement":case "Function":case "Pattern":case "Expression":case "Declaration":case "Specifier":case "NamedSpecifier":case "Comment":case "MemberTypeAnnotation":case "Type":
	            throw new Error("unprintable type: " + JSON.stringify(u.type));case "TypeAnnotation":case "TSTypeAnnotation":
	            return u.typeAnnotation ? e.call(n, "typeAnnotation") : "";case "TSNamedTupleMember":
	            return md([e.call(n, "label"), u.optional ? "?" : "", ": ", e.call(n, "elementType")]);case "TSTupleType":case "TupleTypeAnnotation":
	            {
	              var _r85 = "TSTupleType" === u.type ? "elementTypes" : "types",
	                  _o36 = u[_r85].length > 0 && "TSRestType" === od(u[_r85]).type;return bd(md(["[", Ad(md([Ed, Eh(e, t, _r85, n)])), Sd(If(t, "all") && !_o36 ? "," : ""), Di.printDanglingComments(e, t, !0), Ed, "]"]));
	            }case "ExistsTypeAnnotation":
	            return "*";case "EmptyTypeAnnotation":
	            return "empty";case "AnyTypeAnnotation":
	            return "any";case "MixedTypeAnnotation":
	            return "mixed";case "ArrayTypeAnnotation":
	            return md([e.call(n, "elementType"), "[]"]);case "BooleanTypeAnnotation":
	            return "boolean";case "BooleanLiteralTypeAnnotation":
	            return "" + u.value;case "DeclareClass":
	            return rh(e, sh(e, t, n));case "TSDeclareFunction":
	            return md([u.declare ? "declare " : "", eh(e, n, t), o]);case "DeclareFunction":
	            return rh(e, ["function ", e.call(n, "id"), u.predicate ? " " : "", e.call(n, "predicate"), o]);case "DeclareModule":
	            return rh(e, ["module ", e.call(n, "id"), " ", e.call(n, "body")]);case "DeclareModuleExports":
	            return rh(e, ["module.exports", ": ", e.call(n, "typeAnnotation"), o]);case "DeclareVariable":
	            return rh(e, ["var ", e.call(n, "id"), o]);case "DeclareExportAllDeclaration":
	            return md(["declare export *", Wf(e, t, n)]);case "DeclareOpaqueType":case "OpaqueType":
	            return i.push("opaque type ", e.call(n, "id"), e.call(n, "typeParameters")), u.supertype && i.push(": ", e.call(n, "supertype")), u.impltype && i.push(" = ", e.call(n, "impltype")), i.push(o), "DeclareOpaqueType" === u.type ? rh(e, i) : md(i);case "EnumDeclaration":
	            return md(["enum ", e.call(n, "id"), " ", e.call(n, "body")]);case "EnumBooleanBody":case "EnumNumberBody":case "EnumStringBody":case "EnumSymbolBody":
	            if ("EnumSymbolBody" === u.type || u.explicitType) {
	              var _e108 = null;switch (u.type) {case "EnumBooleanBody":
	                  _e108 = "boolean";break;case "EnumNumberBody":
	                  _e108 = "number";break;case "EnumStringBody":
	                  _e108 = "string";break;case "EnumSymbolBody":
	                  _e108 = "symbol";}i.push("of ", _e108, " ");
	            }return 0 === u.members.length ? i.push(bd(md(["{", Di.printDanglingComments(e, t), Ed, "}"]))) : i.push(bd(md(["{", Ad(md([yd, Eh(e, t, "members", n), If(t) ? "," : ""])), Di.printDanglingComments(e, t, !0), yd, "}"]))), md(i);case "EnumBooleanMember":case "EnumNumberMember":case "EnumStringMember":
	            return md([e.call(n, "id"), " = ", "object" == _typeof(u.init) ? e.call(n, "init") : String(u.init)]);case "EnumDefaultedMember":
	            return e.call(n, "id");case "FunctionTypeAnnotation":case "TSFunctionType":
	            {
	              var _r86 = e.getParentNode(0),
	                  _o37 = e.getParentNode(1),
	                  _a30 = e.getParentNode(2);var _s18 = "TSFunctionType" === u.type || !(("ObjectTypeProperty" === _r86.type || "ObjectTypeInternalSlot" === _r86.type) && !qd(_r86) && !_r86.optional && t.locStart(_r86) === t.locStart(u) || "ObjectTypeCallProperty" === _r86.type || _a30 && "DeclareFunction" === _a30.type),
	                  _l16 = _s18 && ("TypeAnnotation" === _r86.type || "TSTypeAnnotation" === _r86.type);var _c13 = _l16 && _s18 && ("TypeAnnotation" === _r86.type || "TSTypeAnnotation" === _r86.type) && "ArrowFunctionExpression" === _o37.type;return Cf(_r86, t) && (_s18 = !0, _l16 = !0), _c13 && i.push("("), i.push(Qf(e, n, t, !1, !0)), (u.returnType || u.predicate || u.typeAnnotation) && i.push(_s18 ? " => " : ": ", e.call(n, "returnType"), e.call(n, "predicate"), e.call(n, "typeAnnotation")), _c13 && i.push(")"), bd(md(i));
	            }case "TSRestType":
	            return md(["...", e.call(n, "typeAnnotation")]);case "TSOptionalType":
	            return md([e.call(n, "typeAnnotation"), "?"]);case "FunctionTypeParam":
	            return md([e.call(n, "name"), Lf(e), u.name ? ": " : "", e.call(n, "typeAnnotation")]);case "GenericTypeAnnotation":
	            return md([e.call(n, "id"), e.call(n, "typeParameters")]);case "DeclareInterface":case "InterfaceDeclaration":case "InterfaceTypeAnnotation":case "TSInterfaceDeclaration":
	            {
	              var _i12;

	              ("DeclareInterface" === u.type || u.declare) && i.push("declare "), "TSInterfaceDeclaration" === u.type && i.push(u.abstract ? "abstract " : "", uh(e, t, n)), i.push("interface");var _r87 = [],
	                  _o38 = [];"InterfaceTypeAnnotation" !== u.type && _r87.push(" ", e.call(n, "id"), e.call(n, "typeParameters"));var _a31 = u.typeParameters && !Zd(u.typeParameters);if (u.extends && 0 !== u.extends.length && _o38.push(_a31 ? Sd(" ", Dd, { groupId: ah(u.typeParameters) }) : Dd, "extends ", (1 === u.extends.length ? ef : Ad)(gd(md([",", Dd]), e.map(n, "extends")))), u.id && Qd(u.id) || u.extends && 0 !== u.extends.length) {
	                var _e109 = md(_o38);_a31 ? i.push(bd(md(_r87.concat(Sd(Ad(_e109), _e109))))) : i.push(bd(Ad(md(_r87.concat(_e109)))));
	              } else (_i12 = i).push.apply(_i12, _r87.concat(_o38));return i.push(" ", e.call(n, "body")), bd(md(i));
	            }case "ClassImplements":case "InterfaceExtends":
	            return md([e.call(n, "id"), e.call(n, "typeParameters")]);case "TSClassImplements":
	            return md([e.call(n, "expression"), e.call(n, "typeParameters")]);case "TSIntersectionType":case "IntersectionTypeAnnotation":
	            {
	              var _t85 = e.map(n, "types"),
	                  _r88 = [];var _o39 = !1;for (var _e110 = 0; _e110 < _t85.length; ++_e110) {
	                0 === _e110 ? _r88.push(_t85[_e110]) : Ef(u.types[_e110 - 1]) && Ef(u.types[_e110]) ? _r88.push(md([" & ", _o39 ? Ad(_t85[_e110]) : _t85[_e110]])) : Ef(u.types[_e110 - 1]) || Ef(u.types[_e110]) ? (_e110 > 1 && (_o39 = !0), _r88.push(" & ", _e110 > 1 ? Ad(_t85[_e110]) : _t85[_e110])) : _r88.push(Ad(md([" &", Dd, _t85[_e110]])));
	              }return bd(md(_r88));
	            }case "TSUnionType":case "UnionTypeAnnotation":
	            {
	              var _r89 = e.getParentNode(),
	                  _o40 = !("TypeParameterInstantiation" === _r89.type || "TSTypeParameterInstantiation" === _r89.type || "GenericTypeAnnotation" === _r89.type || "TSTypeReference" === _r89.type || "TSTypeAssertion" === _r89.type || "TupleTypeAnnotation" === _r89.type || "TSTupleType" === _r89.type || "FunctionTypeParam" === _r89.type && !_r89.name || ("TypeAlias" === _r89.type || "VariableDeclarator" === _r89.type || "TSTypeAliasDeclaration" === _r89.type) && Gd(t.originalText, u, t)),
	                  _a32 = Dh(u),
	                  _i13 = e.map(function (e) {
	                var r = e.call(n);return _a32 || (r = vd(2, r)), Di.printComments(e, function () {
	                  return r;
	                }, t);
	              }, "types");if (_a32) return gd(" | ", _i13);var _s19 = _o40 && !Gd(t.originalText, u, t),
	                  _l17 = md([Sd(md([_s19 ? Dd : "", "| "])), gd(md([Dd, "| "]), _i13)]);return kc(e, t) ? bd(md([Ad(_l17), Ed])) : "TupleTypeAnnotation" === _r89.type && _r89.types.length > 1 || "TSTupleType" === _r89.type && _r89.elementTypes.length > 1 ? bd(md([Ad(md([Sd(md(["(", Ed])), _l17])), Ed, Sd(")")])) : bd(_o40 ? Ad(_l17) : _l17);
	            }case "NullableTypeAnnotation":
	            return md(["?", e.call(n, "typeAnnotation")]);case "TSNullKeyword":case "NullLiteralTypeAnnotation":
	            return "null";case "ThisTypeAnnotation":
	            return "this";case "NumberTypeAnnotation":
	            return "number";case "SymbolTypeAnnotation":
	            return "symbol";case "ObjectTypeCallProperty":
	            return u.static && i.push("static "), i.push(e.call(n, "value")), md(i);case "ObjectTypeIndexer":
	            {
	              var _t86 = qd(u);return md([_t86 || "", "[", e.call(n, "id"), u.id ? ": " : "", e.call(n, "key"), "]: ", e.call(n, "value")]);
	            }case "ObjectTypeProperty":
	            {
	              var _r90 = qd(u);var _o41 = "";return u.proto ? _o41 = "proto " : u.static && (_o41 = "static "), md([_o41, sf(u) ? u.kind + " " : "", _r90 || "", Hf(e, t, n), Lf(e), af(u, t) ? "" : ": ", e.call(n, "value")]);
	            }case "QualifiedTypeIdentifier":
	            return md([e.call(n, "qualification"), ".", e.call(n, "id")]);case "StringLiteralTypeAnnotation":
	            return mh(u, t);case "NumberLiteralTypeAnnotation":
	            return Xa.strictEqual(_typeof(u.value), "number"), null != u.extra ? sd(u.extra.raw) : sd(u.raw);case "StringTypeAnnotation":
	            return "string";case "DeclareTypeAlias":case "TypeAlias":
	            {
	              ("DeclareTypeAlias" === u.type || u.declare) && i.push("declare ");var _r91 = dh(u.id, u.right, e.call(n, "right"), t);return i.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", _r91, o), bd(md(i));
	            }case "TypeCastExpression":
	            return md(["(", e.call(n, "expression"), Kf(e, t, n), ")"]);case "TypeParameterDeclaration":case "TypeParameterInstantiation":
	            {
	              var _r92 = e.getValue(),
	                  _u24 = t.originalText.slice(0, t.locStart(_r92)).lastIndexOf("/*");return _u24 >= 0 && t.originalText.slice(_u24).match(/^\/\*\s*::/) ? md(["/*:: ", ih(e, t, n, "params"), " */"]) : ih(e, t, n, "params");
	            }case "TSTypeParameterDeclaration":case "TSTypeParameterInstantiation":
	            return ih(e, t, n, "params");case "TSTypeParameter":case "TypeParameter":
	            {
	              var _r93 = e.getParentNode();if ("TSMappedType" === _r93.type) return i.push("[", e.call(n, "name")), u.constraint && i.push(" in ", e.call(n, "constraint")), i.push("]"), md(i);var _o42 = qd(u);_o42 && i.push(_o42), i.push(e.call(n, "name")), u.bound && (i.push(": "), i.push(e.call(n, "bound"))), u.constraint && i.push(" extends ", e.call(n, "constraint")), u.default && i.push(" = ", e.call(n, "default"));var _a33 = e.getNode(2);return _r93.params && 1 === _r93.params.length && Tf(t) && !u.constraint && "ArrowFunctionExpression" === _a33.type && i.push(","), md(i);
	            }case "TypeofTypeAnnotation":
	            return md(["typeof ", e.call(n, "argument")]);case "VoidTypeAnnotation":
	            return "void";case "InferredPredicate":
	            return "%checks";case "DeclaredPredicate":
	            return md(["%checks(", e.call(n, "value"), ")"]);case "TSAbstractKeyword":
	            return "abstract";case "TSAnyKeyword":
	            return "any";case "TSAsyncKeyword":
	            return "async";case "TSBooleanKeyword":
	            return "boolean";case "TSBigIntKeyword":
	            return "bigint";case "TSConstKeyword":
	            return "const";case "TSDeclareKeyword":
	            return "declare";case "TSExportKeyword":
	            return "export";case "TSNeverKeyword":
	            return "never";case "TSNumberKeyword":
	            return "number";case "TSObjectKeyword":
	            return "object";case "TSProtectedKeyword":
	            return "protected";case "TSPrivateKeyword":
	            return "private";case "TSPublicKeyword":
	            return "public";case "TSReadonlyKeyword":
	            return "readonly";case "TSSymbolKeyword":
	            return "symbol";case "TSStaticKeyword":
	            return "static";case "TSStringKeyword":
	            return "string";case "TSUndefinedKeyword":
	            return "undefined";case "TSUnknownKeyword":
	            return "unknown";case "TSVoidKeyword":
	            return "void";case "TSAsExpression":
	            return md([e.call(n, "expression"), " as ", e.call(n, "typeAnnotation")]);case "TSArrayType":
	            return md([e.call(n, "elementType"), "[]"]);case "TSPropertySignature":
	            return u.export && i.push("export "), u.accessibility && i.push(u.accessibility + " "), u.static && i.push("static "), u.readonly && i.push("readonly "), i.push(Hf(e, t, n), Lf(e)), u.typeAnnotation && (i.push(": "), i.push(e.call(n, "typeAnnotation"))), u.initializer && i.push(" = ", e.call(n, "initializer")), md(i);case "TSParameterProperty":
	            return u.accessibility && i.push(u.accessibility + " "), u.export && i.push("export "), u.static && i.push("static "), u.readonly && i.push("readonly "), i.push(e.call(n, "parameter")), md(i);case "TSTypeReference":
	            return md([e.call(n, "typeName"), ih(e, t, n, "typeParameters")]);case "TSTypeQuery":
	            return md(["typeof ", e.call(n, "exprName")]);case "TSIndexSignature":
	            {
	              var _r94 = e.getParentNode(),
	                  _a34 = u.parameters.length > 1 ? Sd(If(t) ? "," : "") : "",
	                  _i14 = bd(md([Ad(md([Ed, gd(md([", ", Ed]), e.map(n, "parameters"))])), _a34, Ed]));return md([u.export ? "export " : "", u.accessibility ? md([u.accessibility, " "]) : "", u.static ? "static " : "", u.readonly ? "readonly " : "", "[", u.parameters ? _i14 : "", u.typeAnnotation ? "]: " : "]", u.typeAnnotation ? e.call(n, "typeAnnotation") : "", "ClassBody" === _r94.type ? o : ""]);
	            }case "TSTypePredicate":
	            return md([u.asserts ? "asserts " : "", e.call(n, "parameterName"), u.typeAnnotation ? md([" is ", e.call(n, "typeAnnotation")]) : ""]);case "TSNonNullExpression":
	            return md([e.call(n, "expression"), "!"]);case "TSThisType":
	            return "this";case "TSImportType":
	            return md([u.isTypeOf ? "typeof " : "", "import(", e.call(n, u.parameter ? "parameter" : "argument"), ")", u.qualifier ? md([".", e.call(n, "qualifier")]) : "", ih(e, t, n, "typeParameters")]);case "TSLiteralType":
	            return e.call(n, "literal");case "TSIndexedAccessType":
	            return md([e.call(n, "objectType"), "[", e.call(n, "indexType"), "]"]);case "TSConstructSignatureDeclaration":case "TSCallSignatureDeclaration":case "TSConstructorType":
	            if ("TSCallSignatureDeclaration" !== u.type && i.push("new "), i.push(bd(Qf(e, n, t, !1, !0))), u.returnType || u.typeAnnotation) {
	              var _t87 = "TSConstructorType" === u.type;i.push(_t87 ? " => " : ": ", e.call(n, "returnType"), e.call(n, "typeAnnotation"));
	            }return md(i);case "TSTypeOperator":
	            return md([u.operator, " ", e.call(n, "typeAnnotation")]);case "TSMappedType":
	            {
	              var _r95 = ud(t.originalText, t.locStart(u), t.locEnd(u));return bd(md(["{", Ad(md([t.bracketSpacing ? Dd : Ed, u.readonly ? md([$d(u.readonly, "readonly"), " "]) : "", uh(e, t, n), e.call(n, "typeParameter"), u.optional ? $d(u.optional, "?") : "", u.typeAnnotation ? ": " : "", e.call(n, "typeAnnotation"), Sd(o, "")])), Di.printDanglingComments(e, t, !0), t.bracketSpacing ? Dd : Ed, "}"]), { shouldBreak: _r95 });
	            }case "TSMethodSignature":
	            return i.push(u.accessibility ? md([u.accessibility, " "]) : "", u.export ? "export " : "", u.static ? "static " : "", u.readonly ? "readonly " : "", u.computed ? "[" : "", e.call(n, "key"), u.computed ? "]" : "", Lf(e), Qf(e, n, t, !1, !0)), (u.returnType || u.typeAnnotation) && i.push(": ", e.call(n, "returnType"), e.call(n, "typeAnnotation")), bd(md(i));case "TSNamespaceExportDeclaration":
	            return i.push("export as namespace ", e.call(n, "id")), t.semi && i.push(";"), bd(md(i));case "TSEnumDeclaration":
	            return u.declare && i.push("declare "), u.modifiers && i.push(uh(e, t, n)), u.const && i.push("const "), i.push("enum ", e.call(n, "id"), " "), 0 === u.members.length ? i.push(bd(md(["{", Di.printDanglingComments(e, t), Ed, "}"]))) : i.push(bd(md(["{", Ad(md([yd, Eh(e, t, "members", n), If(t, "es5") ? "," : ""])), Di.printDanglingComments(e, t, !0), yd, "}"]))), md(i);case "TSEnumMember":
	            return i.push(e.call(n, "id")), u.initializer && i.push(" = ", e.call(n, "initializer")), md(i);case "TSImportEqualsDeclaration":
	            return u.isExport && i.push("export "), i.push("import ", e.call(n, "id"), " = ", e.call(n, "moduleReference")), t.semi && i.push(";"), bd(md(i));case "TSExternalModuleReference":
	            return md(["require(", e.call(n, "expression"), ")"]);case "TSModuleDeclaration":
	            {
	              var _r96 = e.getParentNode(),
	                  _a35 = ff(u.id),
	                  _s20 = "TSModuleDeclaration" === _r96.type,
	                  _l18 = u.body && "TSModuleDeclaration" === u.body.type;if (_s20) i.push(".");else {
	                u.declare && i.push("declare "), i.push(uh(e, t, n));var _r97 = t.originalText.slice(t.locStart(u), t.locStart(u.id));"Identifier" === u.id.type && "global" === u.id.name && !/namespace|module/.test(_r97) || i.push(_a35 || /(^|\s)module(\s|$)/.test(_r97) ? "module " : "namespace ");
	              }return i.push(e.call(n, "id")), _l18 ? i.push(e.call(n, "body")) : u.body ? i.push(" ", bd(e.call(n, "body"))) : i.push(o), md(i);
	            }case "PrivateName":
	            return md(["#", e.call(n, "id")]);case "TSPrivateIdentifier":
	            return u.escapedText;case "TSConditionalType":
	            return td(e, t, n, { beforeParts: function beforeParts() {
	                return [e.call(n, "checkType"), " ", "extends", " ", e.call(n, "extendsType")];
	              }, afterParts: function afterParts() {
	                return [];
	              }, shouldCheckJsx: !1, conditionalNodeType: "TSConditionalType", consequentNodePropertyName: "trueType", alternateNodePropertyName: "falseType", testNodePropertyNames: ["checkType", "extendsType"] });case "TSInferType":
	            return md(["infer", " ", e.call(n, "typeParameter")]);case "InterpreterDirective":
	            return i.push("#!", u.value, yd), fd(t.originalText, u, t.locEnd) && i.push(yd), md(i);case "NGRoot":
	            return md([].concat(e.call(n, "node"), u.node.comments && 0 !== u.node.comments.length ? md([" //", u.node.comments[0].value.trimEnd()]) : []));case "NGChainedExpression":
	            return bd(gd(md([";", Dd]), e.map(function (e) {
	              return Yd(e) ? n(e) : md(["(", n(e), ")"]);
	            }, "expressions")));case "NGEmptyExpression":
	            return "";case "NGQuotedExpression":
	            return md([u.prefix, ": ", u.value.trim()]);case "NGMicrosyntax":
	            return md(e.map(function (e, t) {
	              return md([0 === t ? "" : Df(e.getValue(), t, u) ? " " : md([";", Dd]), n(e)]);
	            }, "body"));case "NGMicrosyntaxKey":
	            return (/^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(u.name) ? u.name : JSON.stringify(u.name)
	            );case "NGMicrosyntaxExpression":
	            return md([e.call(n, "expression"), null === u.alias ? "" : md([" as ", e.call(n, "alias")])]);case "NGMicrosyntaxKeyedExpression":
	            {
	              var _t88 = e.getName(),
	                  _r98 = e.getParentNode(),
	                  _o43 = Df(u, _t88, _r98) || (1 === _t88 && ("then" === u.key.name || "else" === u.key.name) || 2 === _t88 && "else" === u.key.name && "NGMicrosyntaxKeyedExpression" === _r98.body[_t88 - 1].type && "then" === _r98.body[_t88 - 1].key.name) && "NGMicrosyntaxExpression" === _r98.body[0].type;return md([e.call(n, "key"), _o43 ? " " : ": ", e.call(n, "expression")]);
	            }case "NGMicrosyntaxLet":
	            return md(["let ", e.call(n, "key"), null === u.value ? "" : md([" = ", e.call(n, "value")])]);case "NGMicrosyntaxAs":
	            return md([e.call(n, "key"), " as ", e.call(n, "alias")]);case "PipelineBareFunction":
	            return e.call(n, "callee");case "PipelineTopicExpression":
	            return e.call(n, "expression");case "PipelinePrimaryTopicReference":
	            return i.push("#"), md(i);case "ArgumentPlaceholder":
	            return "?";case "TSJSDocAllType":
	            return "*";case "TSJSDocUnknownType":
	            return "?";case "TSJSDocNullableType":
	            return md(["?", e.call(n, "typeAnnotation")]);case "TSJSDocNonNullableType":
	            return md(["!", e.call(n, "typeAnnotation")]);case "TSJSDocFunctionType":
	            return md(["function(", "): ", e.call(n, "typeAnnotation")]);default:
	            throw new Error("unknown type: " + JSON.stringify(u.type));}
	      }(e, t, n, r);if (!u || Nd(a)) return a;var i = Wd(e),
	          s = [];if ("ClassMethod" === u.type || "ClassPrivateMethod" === u.type || "ClassProperty" === u.type || "TSAbstractClassProperty" === u.type || "ClassPrivateProperty" === u.type || "MethodDefinition" === u.type || "TSAbstractMethodDefinition" === u.type || "TSDeclareMethod" === u.type) ;else if (u.decorators && u.decorators.length > 0 && !(i && t.locStart(i, { ignoreDecorators: !0 }) > t.locStart(u.decorators[0]))) {
	        var _r99 = "ClassExpression" === u.type || "ClassDeclaration" === u.type || Xd(u, t) ? yd : Dd;e.each(function (e) {
	          var t = e.getValue();t = t.expression ? t.expression : t.callee, s.push(n(e), _r99);
	        }, "decorators"), i && s.unshift(yd);
	      } else uf(u) && u.declaration && u.declaration.decorators && u.declaration.decorators.length > 0 && t.locStart(u, { ignoreDecorators: !0 }) > t.locStart(u.declaration.decorators[0]) ? e.each(function (e) {
	        var t = "Decorator" === e.getValue().type ? "" : "@";s.push(t, n(e), yd);
	      }, "declaration", "decorators") : o = kc(e, t);var l = [];if (o && l.unshift("("), l.push(a), o) {
	        var _t89 = e.getValue();Jd(_t89) && (l.push(" /*"), l.push(_t89.trailingComments[0].value.trimStart()), l.push("*/"), _t89.trailingComments[0].printed = !0), l.push(")");
	      }return s.length > 0 ? bd(md(s.concat(l))) : md(l);
	    }, embed: El, insertPragma: Id, massageAstNode: Cl, hasPrettierIgnore: Kd, willPrintOwnComments: bh, canAttachComment: function canAttachComment(e) {
	      return e.type && "CommentBlock" !== e.type && "CommentLine" !== e.type && "Line" !== e.type && "Block" !== e.type && "EmptyStatement" !== e.type && "TemplateElement" !== e.type && "Import" !== e.type;
	    }, printComment: function printComment(e, t) {
	      var n = e.getValue();switch (n.type) {case "CommentBlock":case "Block":
	          {
	            if (function (e) {
	              var t = "*".concat(e.value, "*").split("\n");return t.length > 1 && t.every(function (e) {
	                return "*" === e.trim()[0];
	              });
	            }(n)) {
	              var _e112 = function (e) {
	                var t = e.value.split("\n");return md(["/*", gd(yd, t.map(function (e, n) {
	                  return 0 === n ? e.trimEnd() : " " + (n < t.length - 1 ? e.trim() : e.trimStart());
	                })), "*/"]);
	              }(n);return n.trailing && !rd(t.originalText, t.locStart(n), { backwards: !0 }) ? md([yd, _e112]) : _e112;
	            }var _e111 = t.locEnd(n),
	                _r100 = "*-/" === t.originalText.slice(_e111 - 3, _e111);return "/*" + n.value + (_r100 ? "*-/" : "*/");
	          }case "CommentLine":case "Line":
	          return t.originalText.slice(t.locStart(n), t.locEnd(n)).trimEnd();default:
	          throw new Error("Not a comment: " + JSON.stringify(n));}
	    }, isBlockComment: Gs.isBlockComment, handleComments: { ownLine: Gs.handleOwnLineComment, endOfLine: Gs.handleEndOfLineComment, remaining: Gs.handleRemainingComment }, getGapRegex: Gs.getGapRegex, getCommentChildNodes: Gs.getCommentChildNodes };var _dn$builders10 = dn.builders,
	      vh = _dn$builders10.concat,
	      Fh = _dn$builders10.hardline,
	      xh = _dn$builders10.indent,
	      Sh = _dn$builders10.join;
	  var wh = { preprocess: Ic, print: function print(e, t, n) {
	      var r = e.getValue();switch (r.type) {case "JsonRoot":
	          return vh([e.call(n, "node"), Fh]);case "ArrayExpression":
	          return 0 === r.elements.length ? "[]" : vh(["[", xh(vh([Fh, Sh(vh([",", Fh]), e.map(n, "elements"))])), Fh, "]"]);case "ObjectExpression":
	          return 0 === r.properties.length ? "{}" : vh(["{", xh(vh([Fh, Sh(vh([",", Fh]), e.map(n, "properties"))])), Fh, "}"]);case "ObjectProperty":
	          return vh([e.call(n, "key"), ": ", e.call(n, "value")]);case "UnaryExpression":
	          return vh(["+" === r.operator ? "" : r.operator, e.call(n, "argument")]);case "NullLiteral":
	          return "null";case "BooleanLiteral":
	          return r.value ? "true" : "false";case "StringLiteral":case "NumericLiteral":
	          return JSON.stringify(r.value);case "Identifier":
	          return JSON.stringify(r.name);default:
	          throw new Error("unknown type: " + JSON.stringify(r.type));}
	    }, massageAstNode: function massageAstNode(e, t) {
	      return delete t.start, delete t.end, delete t.extra, delete t.loc, delete t.comments, delete t.errors, delete t.range, "Identifier" === e.type ? { type: "StringLiteral", value: e.name } : "UnaryExpression" === e.type && "+" === e.operator ? t.argument : void 0;
	    } };var Bh = { bracketSpacing: { since: "0.0.0", category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: "Common", type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] } };var Th = { arrowParens: { since: "1.9.0", category: "JavaScript", type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSpacing: Bh.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: "JavaScript", type: "boolean", default: !1, description: "Put > on the last line instead of at a new line." }, semi: { since: "1.0.0", category: "JavaScript", type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: Bh.singleQuote, jsxSingleQuote: { since: "1.15.0", category: "JavaScript", type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: "JavaScript", type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: "JavaScript", type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] } },
	      kh = ["js", "node"],
	      Nh = [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"],
	      Oh = ["Jakefile"],
	      Ph = ["chakra", "d8", "gjs", "js", "node", "qjs", "rhino", "v8", "v8-shell"],
	      _h = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: kh, extensions: Nh, filenames: Oh, interpreters: Ph, languageId: 183 },
	      Ih = Object.freeze({ __proto__: null, name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: kh, extensions: Nh, filenames: Oh, interpreters: Ph, languageId: 183, default: _h }),
	      jh = [".jsx"],
	      Mh = { name: "JSX", type: "programming", group: "JavaScript", extensions: jh, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 178 },
	      Lh = Object.freeze({ __proto__: null, name: "JSX", type: "programming", group: "JavaScript", extensions: jh, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 178, default: Mh }),
	      Rh = ["ts"],
	      qh = ["deno", "ts-node"],
	      Vh = [".ts"],
	      Wh = { name: "TypeScript", type: "programming", color: "#2b7489", aliases: Rh, interpreters: qh, extensions: Vh, tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 },
	      $h = Object.freeze({ __proto__: null, name: "TypeScript", type: "programming", color: "#2b7489", aliases: Rh, interpreters: qh, extensions: Vh, tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378, default: Wh }),
	      Uh = [".tsx"],
	      zh = { name: "TSX", type: "programming", group: "TypeScript", extensions: Uh, tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 },
	      Jh = Object.freeze({ __proto__: null, name: "TSX", type: "programming", group: "TypeScript", extensions: Uh, tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924, default: zh }),
	      Gh = [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
	      Hh = [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "composer.lock", "mcmod.info"],
	      Xh = { name: "JSON", type: "data", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", searchable: false, extensions: Gh, filenames: Hh, languageId: 174 },
	      Yh = Object.freeze({ __proto__: null, name: "JSON", type: "data", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", searchable: false, extensions: Gh, filenames: Hh, languageId: 174, default: Xh }),
	      Kh = ["jsonc"],
	      Qh = [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
	      Zh = [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "jsconfig.json", "language-configuration.json", "tsconfig.json"],
	      em = { name: "JSON with Comments", type: "data", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: Kh, extensions: Qh, filenames: Zh, languageId: 423 },
	      tm = Object.freeze({ __proto__: null, name: "JSON with Comments", type: "data", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: Kh, extensions: Qh, filenames: Zh, languageId: 423, default: em }),
	      nm = [".json5"],
	      rm = { name: "JSON5", type: "data", extensions: nm, tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 },
	      um = Object.freeze({ __proto__: null, name: "JSON5", type: "data", extensions: nm, tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175, default: rm }),
	      om = Ue(Ih),
	      am = Ue(Lh),
	      im = Ue($h),
	      sm = Ue(Jh),
	      lm = Ue(Yh),
	      cm = Ue(tm),
	      pm = Ue(um);var dm = { languages: [As(om, function (e) {
	      return { since: "0.0.0", parsers: ["babel", "flow"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: e.interpreters.concat(["nodejs"]) };
	    }), As(om, function () {
	      return { name: "Flow", since: "0.0.0", parsers: ["babel", "flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] };
	    }), As(am, function () {
	      return { since: "0.0.0", parsers: ["babel", "flow"], vscodeLanguageIds: ["javascriptreact"] };
	    }), As(im, function () {
	      return { since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] };
	    }), As(sm, function () {
	      return { since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] };
	    }), As(lm, function () {
	      return { name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [], filenames: ["package.json", "package-lock.json", "composer.json"] };
	    }), As(lm, function (e) {
	      return { since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], filenames: e.filenames.concat([".prettierrc"]) };
	    }), As(cm, function (e) {
	      return { since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: e.filenames.concat([".eslintrc"]) };
	    }), As(pm, function () {
	      return { since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] };
	    })], options: Th, printers: { estree: Ah, "estree-json": wh }, parsers: { get babel() {
	        return {}.parsers.babel;
	      }, get "babel-flow"() {
	        return {}.parsers["babel-flow"];
	      }, get "babel-ts"() {
	        return {}.parsers["babel-ts"];
	      }, get json() {
	        return {}.parsers.json;
	      }, get json5() {
	        return {}.parsers.json5;
	      }, get "json-stringify"() {
	        return {}.parsers["json-stringify"];
	      }, get __js_expression() {
	        return {}.parsers.__js_expression;
	      }, get __vue_expression() {
	        return {}.parsers.__vue_expression;
	      }, get __vue_event_binding() {
	        return {}.parsers.__vue_event_binding;
	      }, get flow() {
	        return {}.parsers.flow;
	      }, get typescript() {
	        return {}.parsers.typescript;
	      }, get __ng_action() {
	        return {}.parsers.__ng_action;
	      }, get __ng_binding() {
	        return {}.parsers.__ng_binding;
	      }, get __ng_interpolation() {
	        return {}.parsers.__ng_interpolation;
	      }, get __ng_directive() {
	        return {}.parsers.__ng_directive;
	      } } };var fm = Lt.isFrontMatterNode;
	  var hm = function hm(e, t, n) {
	    if (["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"].forEach(function (e) {
	      delete t[e];
	    }), fm(e) && "yaml" === e.lang && delete t.value, "css-comment" === e.type && "css-root" === n.type && 0 !== n.nodes.length) {
	      if ((n.nodes[0] === e || fm(n.nodes[0]) && n.nodes[1] === e) && (delete t.text, /^\*\s*@(format|prettier)\s*$/.test(e.text))) return null;if ("css-root" === n.type && he(n.nodes) === e) return null;
	    }if ("value-root" === e.type && delete t.text, "media-query" !== e.type && "media-query-list" !== e.type && "media-feature-expression" !== e.type || delete t.value, "css-rule" === e.type && delete t.params, "selector-combinator" === e.type && (t.value = t.value.replace(/\s+/g, " ")), "media-feature" === e.type && (t.value = t.value.replace(/ /g, "")), ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.replace().toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()), "css-decl" === e.type && (t.prop = t.prop.toLowerCase()), "css-atrule" !== e.type && "css-import" !== e.type || (t.name = t.name.toLowerCase()), "value-number" === e.type && (t.unit = t.unit.toLowerCase()), "media-feature" !== e.type && "media-keyword" !== e.type && "media-type" !== e.type && "media-unknown" !== e.type && "media-url" !== e.type && "media-value" !== e.type && "selector-attribute" !== e.type && "selector-string" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "value-string" !== e.type || !t.value || (t.value = t.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), "selector-attribute" === e.type && (t.attribute = t.attribute.trim(), t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(), 0 === t.namespace.length && (t.namespace = !0)), t.value && (t.value = t.value.trim().replace(/^["']|["']$/g, ""), delete t.quoted)), "media-value" !== e.type && "media-type" !== e.type && "value-number" !== e.type && "selector-root-invalid" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "selector-tag" !== e.type || !t.value || (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, function (e, t, n) {
	      var r = Number(t);return isNaN(r) ? e : r + n.toLowerCase();
	    })), "selector-tag" === e.type) {
	      var _n52 = e.value.toLowerCase();["from", "to"].includes(_n52) && (t.value = _n52);
	    }"css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value;
	  };var _dn$builders11 = dn.builders,
	      mm = _dn$builders11.hardline,
	      gm = _dn$builders11.concat,
	      Dm = _dn$builders11.markAsRoot,
	      ym = { "---": "yaml", "+++": "toml" };
	  var Em = { parse: function parse(e) {
	      var t = Object.keys(ym).map(fe).join("|"),
	          n = e.match(new RegExp("^(".concat(t, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));if (null === n) return { frontMatter: null, content: e };
	      var _n53 = _slicedToArray(n, 4),
	          r = _n53[0],
	          u = _n53[1],
	          o = _n53[2],
	          a = _n53[3];

	      var i = ym[u];return "toml" !== i && o && o.trim() && (i = o.trim()), { frontMatter: { type: "front-matter", lang: i, value: a, raw: r.replace(/\n$/, "") }, content: r.replace(/[^\n]/g, " ") + e.slice(r.length) };
	    }, print: function print(e, t) {
	      if ("yaml" === e.lang) {
	        var _n54 = e.value.trim(),
	            _r101 = _n54 ? t(_n54, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";return Dm(gm(["---", mm, _r101, _r101 ? mm : "", "---"]));
	      }
	    } };var _dn$builders12 = dn.builders,
	      Cm = _dn$builders12.hardline,
	      bm = _dn$builders12.concat,
	      Am = Em.print;
	  var vm = function vm(e, t, n) {
	    var r = e.getValue();if ("front-matter" === r.type) {
	      var _e113 = Am(r, n);return _e113 ? bm([_e113, Cm]) : "";
	    }
	  };var Fm = Em.parse;
	  var xm = { hasPragma: function hasPragma(e) {
	      return Nl.hasPragma(Fm(e).content);
	    }, insertPragma: function insertPragma(e) {
	      var _Fm = Fm(e),
	          t = _Fm.frontMatter,
	          n = _Fm.content;

	      return (t ? t.raw + "\n\n" : "") + Nl.insertPragma(n);
	    } };var Sm = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);function wm(e, t) {
	    var n = [].concat(t);var r = void 0,
	        u = -1;for (; r = e.getParentNode(++u);) {
	      if (n.includes(r.type)) return u;
	    }return -1;
	  }function Bm(e, t) {
	    var n = wm(e, t);return -1 === n ? null : e.getParentNode(n);
	  }function Tm(e) {
	    return "value-operator" === e.type && "*" === e.value;
	  }function km(e) {
	    return "value-operator" === e.type && "/" === e.value;
	  }function Nm(e) {
	    return "value-operator" === e.type && "+" === e.value;
	  }function Om(e) {
	    return "value-operator" === e.type && "-" === e.value;
	  }function Pm(e) {
	    return "value-operator" === e.type && "%" === e.value;
	  }function _m(e) {
	    return "value-comma_group" === e.type && e.groups && e.groups[1] && "value-colon" === e.groups[1].type;
	  }function Im(e) {
	    return "value-paren_group" === e.type && e.groups && e.groups[0] && _m(e.groups[0]);
	  }var jm = { getAncestorCounter: wm, getAncestorNode: Bm, getPropOfDeclNode: function getPropOfDeclNode(e) {
	      var t = Bm(e, "css-decl");return t && t.prop && t.prop.toLowerCase();
	    }, hasSCSSInterpolation: function hasSCSSInterpolation(e) {
	      if (e && e.length) for (var _t90 = e.length - 1; _t90 > 0; _t90--) {
	        if ("word" === e[_t90].type && "{" === e[_t90].value && "word" === e[_t90 - 1].type && e[_t90 - 1].value.endsWith("#")) return !0;
	      }return !1;
	    }, hasStringOrFunction: function hasStringOrFunction(e) {
	      if (e && e.length) for (var _t91 = 0; _t91 < e.length; _t91++) {
	        if ("string" === e[_t91].type || "func" === e[_t91].type) return !0;
	      }return !1;
	    }, maybeToLowerCase: function maybeToLowerCase(e) {
	      return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
	    }, insideValueFunctionNode: function insideValueFunctionNode(e, t) {
	      var n = Bm(e, "value-func");return n && n.value && n.value.toLowerCase() === t;
	    }, insideICSSRuleNode: function insideICSSRuleNode(e) {
	      var t = Bm(e, "css-rule");return t && t.raws && t.raws.selector && (t.raws.selector.startsWith(":import") || t.raws.selector.startsWith(":export"));
	    }, insideAtRuleNode: function insideAtRuleNode(e, t) {
	      var n = [].concat(t),
	          r = Bm(e, "css-atrule");return r && n.includes(r.name.toLowerCase());
	    }, insideURLFunctionInImportAtRuleNode: function insideURLFunctionInImportAtRuleNode(e) {
	      var t = e.getValue(),
	          n = Bm(e, "css-atrule");return n && "import" === n.name && "url" === t.groups[0].value && 2 === t.groups.length;
	    }, isKeyframeAtRuleKeywords: function isKeyframeAtRuleKeywords(e, t) {
	      var n = Bm(e, "css-atrule");return n && n.name && n.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase());
	    }, isWideKeywords: function isWideKeywords(e) {
	      return ["initial", "inherit", "unset", "revert"].includes(e.toLowerCase());
	    }, isSCSS: function isSCSS(e, t) {
	      return "less" === e || "scss" === e ? "scss" === e : /(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t);
	    }, isSCSSVariable: function isSCSSVariable(e) {
	      return !(!e || "word" !== e.type || !e.value.startsWith("$"));
	    }, isLastNode: function isLastNode(e, t) {
	      var n = e.getParentNode();if (!n) return !1;var r = n.nodes;
	      return r && r.indexOf(t) === r.length - 1;
	    }, isLessParser: function isLessParser(e) {
	      return "css" === e.parser || "less" === e.parser;
	    }, isSCSSControlDirectiveNode: function isSCSSControlDirectiveNode(e) {
	      return "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name);
	    }, isDetachedRulesetDeclarationNode: function isDetachedRulesetDeclarationNode(e) {
	      return !!e.selector && ("string" == typeof e.selector && /^@.+:.*$/.test(e.selector) || e.selector.value && /^@.+:.*$/.test(e.selector.value));
	    }, isRelationalOperatorNode: function isRelationalOperatorNode(e) {
	      return "value-word" === e.type && ["<", ">", "<=", ">="].includes(e.value);
	    }, isEqualityOperatorNode: function isEqualityOperatorNode(e) {
	      return "value-word" === e.type && ["==", "!="].includes(e.value);
	    }, isMultiplicationNode: Tm, isDivisionNode: km, isAdditionNode: Nm, isSubtractionNode: Om, isModuloNode: Pm, isMathOperatorNode: function isMathOperatorNode(e) {
	      return Tm(e) || km(e) || Nm(e) || Om(e) || Pm(e);
	    }, isEachKeywordNode: function isEachKeywordNode(e) {
	      return "value-word" === e.type && "in" === e.value;
	    }, isForKeywordNode: function isForKeywordNode(e) {
	      return "value-word" === e.type && ["from", "through", "end"].includes(e.value);
	    }, isURLFunctionNode: function isURLFunctionNode(e) {
	      return "value-func" === e.type && "url" === e.value.toLowerCase();
	    }, isIfElseKeywordNode: function isIfElseKeywordNode(e) {
	      return "value-word" === e.type && ["and", "or", "not"].includes(e.value);
	    }, hasComposesNode: function hasComposesNode(e) {
	      return e.value && "value-root" === e.value.type && e.value.group && "value-value" === e.value.group.type && "composes" === e.prop.toLowerCase();
	    }, hasParensAroundNode: function hasParensAroundNode(e) {
	      return e.value && e.value.group && e.value.group.group && "value-paren_group" === e.value.group.group.type && null !== e.value.group.group.open && null !== e.value.group.group.close;
	    }, hasEmptyRawBefore: function hasEmptyRawBefore(e) {
	      return e.raws && "" === e.raws.before;
	    }, isSCSSNestedPropertyNode: function isSCSSNestedPropertyNode(e) {
	      return !!e.selector && e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
	    }, isDetachedRulesetCallNode: function isDetachedRulesetCallNode(e) {
	      return e.raws && e.raws.params && /^\(\s*\)$/.test(e.raws.params);
	    }, isTemplatePlaceholderNode: function isTemplatePlaceholderNode(e) {
	      return e.name.startsWith("prettier-placeholder");
	    }, isTemplatePropNode: function isTemplatePropNode(e) {
	      return e.prop.startsWith("@prettier-placeholder");
	    }, isPostcssSimpleVarNode: function isPostcssSimpleVarNode(e, t) {
	      return "$$" === e.value && "value-func" === e.type && t && "value-word" === t.type && !t.raws.before;
	    }, isKeyValuePairNode: _m, isKeyValuePairInParenGroupNode: Im, isSCSSMapItemNode: function isSCSSMapItemNode(e) {
	      var t = e.getValue();if (0 === t.groups.length) return !1;var n = e.getParentNode(1);if (!(Im(t) || n && Im(n))) return !1;var r = Bm(e, "css-decl");return !!(r && r.prop && r.prop.startsWith("$")) || !!Im(n) || "value-func" === n.type;
	    }, isInlineValueCommentNode: function isInlineValueCommentNode(e) {
	      return "value-comment" === e.type && e.inline;
	    }, isHashNode: function isHashNode(e) {
	      return "value-word" === e.type && "#" === e.value;
	    }, isLeftCurlyBraceNode: function isLeftCurlyBraceNode(e) {
	      return "value-word" === e.type && "{" === e.value;
	    }, isRightCurlyBraceNode: function isRightCurlyBraceNode(e) {
	      return "value-word" === e.type && "}" === e.value;
	    }, isWordNode: function isWordNode(e) {
	      return ["value-word", "value-atword"].includes(e.type);
	    }, isColonNode: function isColonNode(e) {
	      return "value-colon" === e.type;
	    }, isMediaAndSupportsKeywords: function isMediaAndSupportsKeywords(e) {
	      return e.value && ["not", "and", "or"].includes(e.value.toLowerCase());
	    }, isColorAdjusterFuncNode: function isColorAdjusterFuncNode(e) {
	      return "value-func" === e.type && Sm.has(e.value.toLowerCase());
	    }, lastLineHasInlineComment: function lastLineHasInlineComment(e) {
	      return (/\/\//.test(e.split(/[\n\r]/).pop())
	      );
	    }, stringifyNode: function e(t) {
	      if (t.groups) {
	        return (t.open && t.open.value ? t.open.value : "") + t.groups.reduce(function (n, r, u) {
	          return n + e(r) + ("comma_group" === t.groups[0].type && u !== t.groups.length - 1 ? "," : "");
	        }, "") + (t.close && t.close.value ? t.close.value : "");
	      }var n = t.raws && t.raws.before ? t.raws.before : "",
	          r = t.raws && t.raws.quote ? t.raws.quote : "";return n + r + ("atword" === t.type ? "@" : "") + (t.value ? t.value : "") + r + (t.unit ? t.unit : "") + (t.group ? e(t.group) : "") + (t.raws && t.raws.after ? t.raws.after : "");
	    } };var Mm = Lt.printNumber,
	      Lm = Lt.printString,
	      Rm = Lt.hasIgnoreComment,
	      qm = Lt.hasNewline,
	      Vm = Lt.isFrontMatterNode,
	      Wm = Lt.isNextLineEmpty,
	      _dn$builders13 = dn.builders,
	      $m = _dn$builders13.concat,
	      Um = _dn$builders13.join,
	      zm = _dn$builders13.line,
	      Jm = _dn$builders13.hardline,
	      Gm = _dn$builders13.softline,
	      Hm = _dn$builders13.group,
	      Xm = _dn$builders13.fill,
	      Ym = _dn$builders13.indent,
	      Km = _dn$builders13.dedent,
	      Qm = _dn$builders13.ifBreak,
	      Zm = _dn$builders13.breakParent,
	      eg = dn.utils.removeLines,
	      tg = xm.insertPragma,
	      ng = jm.getAncestorNode,
	      rg = jm.getPropOfDeclNode,
	      ug = jm.maybeToLowerCase,
	      og = jm.insideValueFunctionNode,
	      ag = jm.insideICSSRuleNode,
	      ig = jm.insideAtRuleNode,
	      sg = jm.insideURLFunctionInImportAtRuleNode,
	      lg = jm.isKeyframeAtRuleKeywords,
	      cg = jm.isWideKeywords,
	      pg = jm.isSCSS,
	      dg = jm.isLastNode,
	      fg = jm.isLessParser,
	      hg = jm.isSCSSControlDirectiveNode,
	      mg = jm.isDetachedRulesetDeclarationNode,
	      gg = jm.isRelationalOperatorNode,
	      Dg = jm.isEqualityOperatorNode,
	      yg = jm.isMultiplicationNode,
	      Eg = jm.isDivisionNode,
	      Cg = jm.isAdditionNode,
	      bg = jm.isSubtractionNode,
	      Ag = jm.isMathOperatorNode,
	      vg = jm.isEachKeywordNode,
	      Fg = jm.isForKeywordNode,
	      xg = jm.isURLFunctionNode,
	      Sg = jm.isIfElseKeywordNode,
	      wg = jm.hasComposesNode,
	      Bg = jm.hasParensAroundNode,
	      Tg = jm.hasEmptyRawBefore,
	      kg = jm.isKeyValuePairNode,
	      Ng = jm.isDetachedRulesetCallNode,
	      Og = jm.isTemplatePlaceholderNode,
	      Pg = jm.isTemplatePropNode,
	      _g = jm.isPostcssSimpleVarNode,
	      Ig = jm.isSCSSMapItemNode,
	      jg = jm.isInlineValueCommentNode,
	      Mg = jm.isHashNode,
	      Lg = jm.isLeftCurlyBraceNode,
	      Rg = jm.isRightCurlyBraceNode,
	      qg = jm.isWordNode,
	      Vg = jm.isColonNode,
	      Wg = jm.isMediaAndSupportsKeywords,
	      $g = jm.isColorAdjusterFuncNode,
	      Ug = jm.lastLineHasInlineComment;
	  function zg(e) {
	    return "es5" === e.trailingComma || "all" === e.trailingComma;
	  }function Jg(e, t, n) {
	    var r = e.getValue(),
	        u = [];var o = 0;return e.map(function (e) {
	      var a = r.nodes[o - 1];if (a && "css-comment" === a.type && "prettier-ignore" === a.text.trim()) {
	        var _n55 = e.getValue();u.push(t.originalText.slice(t.locStart(_n55), t.locEnd(_n55)));
	      } else u.push(e.call(n));o !== r.nodes.length - 1 && ("css-comment" === r.nodes[o + 1].type && !qm(t.originalText, t.locStart(r.nodes[o + 1]), { backwards: !0 }) && !Vm(r.nodes[o]) || "css-atrule" === r.nodes[o + 1].type && "else" === r.nodes[o + 1].name && "css-comment" !== r.nodes[o].type ? u.push(" ") : (u.push(t.__isHTMLStyleAttribute ? zm : Jm), Wm(t.originalText, e.getValue(), t.locEnd) && !Vm(r.nodes[o]) && u.push(Jm))), o++;
	    }, "nodes"), $m(u);
	  }var Gg = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g,
	      Hg = new RegExp(Gg.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");function Xg(e, t) {
	    return e.replace(Gg, function (e) {
	      return Lm(e, t);
	    });
	  }function Yg(e, t) {
	    var n = t.singleQuote ? "'" : '"';return e.includes('"') || e.includes("'") ? e : n + e + n;
	  }function Kg(e) {
	    return e.replace(Hg, function (e, t, n, r, u) {
	      return !n && r ? Qg(r) + ug(u || "") : e;
	    });
	  }function Qg(e) {
	    return Mm(e).replace(/\.0(?=$|e)/, "");
	  }var Zg = { print: function print(e, t, n) {
	      var r = e.getValue();if (!r) return "";if ("string" == typeof r) return r;switch (r.type) {case "front-matter":
	          return $m([r.raw, Jm]);case "css-root":
	          {
	            var _u25 = Jg(e, t, n),
	                _o44 = r.raws.after.trim();return $m([_u25, _o44 ? " ".concat(_o44) : "", _u25.parts.length && !t.__isHTMLStyleAttribute ? Jm : ""]);
	          }case "css-comment":
	          {
	            var _e114 = r.inline || r.raws.inline,
	                _n56 = t.originalText.slice(t.locStart(r), t.locEnd(r));return _e114 ? _n56.trimEnd() : _n56;
	          }case "css-rule":
	          return $m([e.call(n, "selector"), r.important ? " !important" : "", r.nodes ? $m([r.selector && "selector-unknown" === r.selector.type && Ug(r.selector.value) ? zm : " ", "{", r.nodes.length > 0 ? Ym($m([Jm, Jg(e, t, n)])) : "", Jm, "}", mg(r) ? ";" : ""]) : ";"]);case "css-decl":
	          {
	            var _u26 = e.getParentNode(),
	                _o45 = r.raws.between,
	                _a36 = _o45.trim(),
	                _i15 = ":" === _a36;var _s21 = wg(r) ? eg(e.call(n, "value")) : e.call(n, "value");return !_i15 && Ug(_a36) && (_s21 = Ym($m([Jm, Km(_s21)]))), $m([r.raws.before.replace(/[\s;]/g, ""), ag(e) ? r.prop : ug(r.prop), _a36.startsWith("//") ? " " : "", _a36, r.extend ? "" : " ", fg(t) && r.extend && r.selector ? $m(["extend(", e.call(n, "selector"), ")"]) : "", _s21, r.raws.important ? r.raws.important.replace(/\s*!\s*important/i, " !important") : r.important ? " !important" : "", r.raws.scssDefault ? r.raws.scssDefault.replace(/\s*!default/i, " !default") : r.scssDefault ? " !default" : "", r.raws.scssGlobal ? r.raws.scssGlobal.replace(/\s*!global/i, " !global") : r.scssGlobal ? " !global" : "", r.nodes ? $m([" {", Ym($m([Gm, Jg(e, t, n)])), Gm, "}"]) : Pg(r) && !_u26.raws.semicolon && ";" !== t.originalText[t.locEnd(r) - 1] ? "" : t.__isHTMLStyleAttribute && dg(e, r) ? Qm(";", "") : ";"]);
	          }case "css-atrule":
	          {
	            var _u27 = e.getParentNode(),
	                _o46 = Og(r) && !_u27.raws.semicolon && ";" !== t.originalText[t.locEnd(r) - 1];if (fg(t)) {
	              if (r.mixin) return $m([e.call(n, "selector"), r.important ? " !important" : "", _o46 ? "" : ";"]);if (r.function) return $m([r.name, $m([e.call(n, "params")]), _o46 ? "" : ";"]);if (r.variable) return $m(["@", r.name, ": ", r.value ? $m([e.call(n, "value")]) : "", r.raws.between.trim() ? r.raws.between.trim() + " " : "", r.nodes ? $m(["{", Ym($m([r.nodes.length > 0 ? Gm : "", Jg(e, t, n)])), Gm, "}"]) : "", _o46 ? "" : ";"]);
	            }return $m(["@", Ng(r) || r.name.endsWith(":") ? r.name : ug(r.name), r.params ? $m([Ng(r) ? "" : Og(r) ? "" === r.raws.afterName ? "" : r.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(r.raws.afterName) ? $m([Jm, Jm]) : /^\s*\n/.test(r.raws.afterName) ? Jm : " " : " ", e.call(n, "params")]) : "", r.selector ? Ym($m([" ", e.call(n, "selector")])) : "", r.value ? Hm($m([" ", e.call(n, "value"), hg(r) ? Bg(r) ? " " : zm : ""])) : "else" === r.name ? " " : "", r.nodes ? $m([hg(r) ? "" : r.selector && !r.selector.nodes && "string" == typeof r.selector.value && Ug(r.selector.value) || !r.selector && "string" == typeof r.params && Ug(r.params) ? zm : " ", "{", Ym($m([r.nodes.length > 0 ? Gm : "", Jg(e, t, n)])), Gm, "}"]) : _o46 ? "" : ";"]);
	          }case "media-query-list":
	          {
	            var _t92 = [];return e.each(function (e) {
	              var r = e.getValue();"media-query" === r.type && "" === r.value || _t92.push(e.call(n));
	            }, "nodes"), Hm(Ym(Um(zm, _t92)));
	          }case "media-query":
	          return $m([Um(" ", e.map(n, "nodes")), dg(e, r) ? "" : ","]);case "media-type":
	          return Kg(Xg(r.value, t));case "media-feature-expression":
	          return r.nodes ? $m(["(", $m(e.map(n, "nodes")), ")"]) : r.value;case "media-feature":
	          return ug(Xg(r.value.replace(/ +/g, " "), t));case "media-colon":
	          return $m([r.value, " "]);case "media-value":
	          return Kg(Xg(r.value, t));case "media-keyword":
	          return Xg(r.value, t);case "media-url":
	          return Xg(r.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t);case "media-unknown":
	          return r.value;case "selector-root":
	          return Hm($m([ig(e, "custom-selector") ? $m([ng(e, "css-atrule").customSelector, zm]) : "", Um($m([",", ig(e, ["extend", "custom-selector", "nest"]) ? zm : Jm]), e.map(n, "nodes"))]));case "selector-selector":
	          return Hm(Ym($m(e.map(n, "nodes"))));case "selector-comment":
	          return r.value;case "selector-string":
	          return Xg(r.value, t);case "selector-tag":
	          {
	            var _t93 = e.getParentNode(),
	                _n57 = _t93 && _t93.nodes.indexOf(r),
	                _u28 = _n57 && _t93.nodes[_n57 - 1];return $m([r.namespace ? $m([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", "selector-nesting" === _u28.type ? r.value : Kg(lg(e, r.value) ? r.value.toLowerCase() : r.value)]);
	          }case "selector-id":
	          return $m(["#", r.value]);case "selector-class":
	          return $m([".", Kg(Xg(r.value, t))]);case "selector-attribute":
	          return $m(["[", r.namespace ? $m([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.attribute.trim(), r.operator ? r.operator : "", r.value ? Yg(Xg(r.value.trim(), t), t) : "", r.insensitive ? " i" : "", "]"]);case "selector-combinator":
	          {
	            if ("+" === r.value || ">" === r.value || "~" === r.value || ">>>" === r.value) {
	              var _t94 = e.getParentNode(),
	                  _n59 = "selector-selector" === _t94.type && _t94.nodes[0] === r ? "" : zm;return $m([_n59, r.value, dg(e, r) ? "" : " "]);
	            }var _n58 = r.value.trim().startsWith("(") ? zm : "",
	                _u29 = Kg(Xg(r.value.trim(), t)) || zm;return $m([_n58, _u29]);
	          }case "selector-universal":
	          return $m([r.namespace ? $m([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.value]);case "selector-pseudo":
	          return $m([ug(r.value), r.nodes && r.nodes.length > 0 ? $m(["(", Um(", ", e.map(n, "nodes")), ")"]) : ""]);case "selector-nesting":
	          return r.value;case "selector-unknown":
	          {
	            var _n60 = ng(e, "css-rule");if (_n60 && _n60.isSCSSNesterProperty) return Kg(Xg(ug(r.value), t));var _u30 = e.getParentNode();if (_u30.raws && _u30.raws.selector) {
	              var _e115 = t.locStart(_u30),
	                  _n61 = _e115 + _u30.raws.selector.length;return t.originalText.slice(_e115, _n61).trim();
	            }var _o47 = e.getParentNode(1);if ("value-paren_group" === _u30.type && _o47 && "value-func" === _o47.type && "selector" === _o47.value) {
	              var _e116 = t.locStart(_u30.open) + 1,
	                  _n62 = t.locEnd(_u30.close) - 1,
	                  _r102 = t.originalText.slice(_e116, _n62).trim();return Ug(_r102) ? $m([Zm, _r102]) : _r102;
	            }return r.value;
	          }case "value-value":case "value-root":
	          return e.call(n, "group");case "value-comment":
	          return t.originalText.slice(t.locStart(r), t.locEnd(r));case "value-comma_group":
	          {
	            var _t95 = e.getParentNode(),
	                _u31 = e.getParentNode(1),
	                _o48 = rg(e),
	                _a37 = _o48 && "value-value" === _t95.type && ("grid" === _o48 || _o48.startsWith("grid-template")),
	                _i16 = ng(e, "css-atrule"),
	                _s22 = _i16 && hg(_i16),
	                _l19 = e.map(n, "groups"),
	                _c14 = [],
	                _p10 = og(e, "url");var _d8 = !1,
	                _f7 = !1;for (var _n63 = 0; _n63 < r.groups.length; ++_n63) {
	              _c14.push(_l19[_n63]);var _o49 = r.groups[_n63 - 1],
	                  _h7 = r.groups[_n63],
	                  _m7 = r.groups[_n63 + 1],
	                  _g6 = r.groups[_n63 + 2];if (_p10) {
	                (_m7 && Cg(_m7) || Cg(_h7)) && _c14.push(" ");continue;
	              }if (!_m7) continue;if ("value-word" === _h7.type && _h7.value.endsWith("-") && "value-atword" === _m7.type && _m7.value.startsWith("prettier-placeholder-")) continue;var _D6 = "value-string" === _h7.type && _h7.value.startsWith("#{"),
	                  _y3 = _d8 && "value-string" === _m7.type && _m7.value.endsWith("}");if (_D6 || _y3) {
	                _d8 = !_d8;continue;
	              }if (_d8) continue;if (Vg(_h7) || Vg(_m7)) continue;if ("value-atword" === _h7.type && "" === _h7.value) continue;if ("~" === _h7.value) continue;if (_h7.value && _h7.value.includes("\\") && _m7 && "value-comment" !== _m7.type) continue;if (_o49 && _o49.value && _o49.value.indexOf("\\") === _o49.value.length - 1 && "value-operator" === _h7.type && "/" === _h7.value) continue;if ("\\" === _h7.value) continue;if (_g(_h7, _m7)) continue;if (Mg(_h7) || Lg(_h7) || Rg(_m7) || Lg(_m7) && Tg(_m7) || Rg(_h7) && Tg(_m7)) continue;if ("--" === _h7.value && Mg(_m7)) continue;var _E3 = Ag(_h7),
	                  _C3 = Ag(_m7);if ((_E3 && Mg(_m7) || _C3 && Rg(_h7)) && Tg(_m7)) continue;if (og(e, "calc") && (Cg(_h7) || Cg(_m7) || bg(_h7) || bg(_m7)) && Tg(_m7)) continue;var _b2 = (Cg(_h7) || bg(_h7)) && 0 === _n63 && ("value-number" === _m7.type || _m7.isHex) && _u31 && $g(_u31) && !Tg(_m7),
	                  _A2 = _g6 && "value-func" === _g6.type || _g6 && qg(_g6) || "value-func" === _h7.type || qg(_h7),
	                  _v2 = "value-func" === _m7.type || qg(_m7) || _o49 && "value-func" === _o49.type || _o49 && qg(_o49);if (yg(_m7) || yg(_h7) || og(e, "calc") || _b2 || !(Eg(_m7) && !_A2 || Eg(_h7) && !_v2 || Cg(_m7) && !_A2 || Cg(_h7) && !_v2 || bg(_m7) || bg(_h7)) || !(Tg(_m7) || _E3 && (!_o49 || _o49 && Ag(_o49)))) if (jg(_h7)) {
	                if ("value-paren_group" === _t95.type) {
	                  _c14.push(Km(Jm));continue;
	                }_c14.push(Jm);
	              } else _s22 && (Dg(_m7) || gg(_m7) || Sg(_m7) || vg(_h7) || Fg(_h7)) || _i16 && "namespace" === _i16.name.toLowerCase() ? _c14.push(" ") : _a37 ? _h7.source && _m7.source && _h7.source.start.line !== _m7.source.start.line ? (_c14.push(Jm), _f7 = !0) : _c14.push(" ") : _C3 ? _c14.push(" ") : _m7 && "..." === _m7.value || _c14.push(zm);
	            }return _f7 && _c14.unshift(Jm), _s22 ? Hm(Ym($m(_c14))) : sg(e) ? Hm(Xm(_c14)) : Hm(Ym(Xm(_c14)));
	          }case "value-paren_group":
	          {
	            var _u32 = e.getParentNode();if (_u32 && xg(_u32) && (1 === r.groups.length || r.groups.length > 0 && "value-comma_group" === r.groups[0].type && r.groups[0].groups.length > 0 && "value-word" === r.groups[0].groups[0].type && r.groups[0].groups[0].value.startsWith("data:"))) return $m([r.open ? e.call(n, "open") : "", Um(",", e.map(n, "groups")), r.close ? e.call(n, "close") : ""]);if (!r.open) {
	              var _t96 = e.map(n, "groups"),
	                  _r103 = [];for (var _e117 = 0; _e117 < _t96.length; _e117++) {
	                0 !== _e117 && _r103.push($m([",", zm])), _r103.push(_t96[_e117]);
	              }return Hm(Ym(Xm(_r103)));
	            }var _o50 = Ig(e),
	                _a38 = r.groups[r.groups.length - 1],
	                _i17 = _a38 && "value-comment" === _a38.type;return Hm($m([r.open ? e.call(n, "open") : "", Ym($m([Gm, Um($m([",", zm]), e.map(function (e) {
	              var t = e.getValue(),
	                  r = n(e);return kg(t) && "value-comma_group" === t.type && t.groups && t.groups[2] && "value-paren_group" === t.groups[2].type ? (r.contents.contents.parts[1] = Hm(r.contents.contents.parts[1]), Hm(Km(r))) : r;
	            }, "groups"))])), Qm(!_i17 && pg(t.parser, t.originalText) && _o50 && zg(t) ? "," : ""), Gm, r.close ? e.call(n, "close") : ""]), { shouldBreak: _o50 });
	          }case "value-func":
	          return $m([r.value, ig(e, "supports") && Wg(r) ? " " : "", e.call(n, "group")]);case "value-paren":
	          return r.value;case "value-number":
	          return $m([Qg(r.value), ug(r.unit)]);case "value-operator":
	          return r.value;case "value-word":
	          return r.isColor && r.isHex || cg(r.value) ? r.value.toLowerCase() : r.value;case "value-colon":
	          {
	            var _t97 = e.getParentNode(),
	                _n64 = _t97 && _t97.groups.indexOf(r),
	                _u33 = _n64 && _t97.groups[_n64 - 1];return $m([r.value, _u33 && "\\" === _u33.value[_u33.value.length - 1] || og(e, "url") ? "" : zm]);
	          }case "value-comma":
	          return $m([r.value, " "]);case "value-string":
	          return Lm(r.raws.quote + r.value + r.raws.quote, t);case "value-atword":
	          return $m(["@", r.value]);case "value-unicode-range":case "value-unknown":
	          return r.value;default:
	          throw new Error("Unknown postcss type ".concat(JSON.stringify(r.type)));}
	    }, embed: vm, insertPragma: tg, hasPrettierIgnore: Rm, massageAstNode: hm },
	      eD = { singleQuote: Bh.singleQuote },
	      tD = [".css"],
	      nD = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: tD, languageId: 50 },
	      rD = Object.freeze({ __proto__: null, name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: tD, languageId: 50, default: nD }),
	      uD = [".pcss", ".postcss"],
	      oD = { name: "PostCSS", type: "markup", tmScope: "source.postcss", group: "CSS", extensions: uD, aceMode: "text", languageId: 262764437 },
	      aD = Object.freeze({ __proto__: null, name: "PostCSS", type: "markup", tmScope: "source.postcss", group: "CSS", extensions: uD, aceMode: "text", languageId: 262764437, default: oD }),
	      iD = [".less"],
	      sD = { name: "Less", type: "markup", group: "CSS", extensions: iD, tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 },
	      lD = Object.freeze({ __proto__: null, name: "Less", type: "markup", group: "CSS", extensions: iD, tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198, default: sD }),
	      cD = [".scss"],
	      pD = { name: "SCSS", type: "markup", tmScope: "source.css.scss", group: "CSS", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: cD, languageId: 329 },
	      dD = Object.freeze({ __proto__: null, name: "SCSS", type: "markup", tmScope: "source.css.scss", group: "CSS", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: cD, languageId: 329, default: pD }),
	      fD = Ue(rD),
	      hD = Ue(aD),
	      mD = Ue(lD),
	      gD = Ue(dD);var DD = { languages: [As(fD, function () {
	      return { since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"] };
	    }), As(hD, function () {
	      return { since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] };
	    }), As(mD, function () {
	      return { since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] };
	    }), As(gD, function () {
	      return { since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] };
	    })], options: eD, printers: { postcss: Zg }, parsers: { get css() {
	        return {}.parsers.css;
	      }, get less() {
	        return {}.parsers.less;
	      }, get scss() {
	        return {}.parsers.scss;
	      } } },
	      yD = Ue(Object.freeze({ __proto__: null, default: ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"] }));var ED = new Set(yD);function CD(e) {
	    return bD(e, ["TextNode"]) && !/\S/.test(e.chars);
	  }function bD(e, t) {
	    return e && t.some(function (t) {
	      return e.type === t;
	    });
	  }function AD(e, t) {
	    var n = e.getValue(),
	        r = e.getParentNode(0) || {},
	        u = r.children || r.body || r.parts || [],
	        o = u.indexOf(n);return -1 !== o && u[o + t];
	  }function vD(e) {
	    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	    return AD(e, -t);
	  }function FD(e) {
	    return AD(e, 1);
	  }function xD(e) {
	    return bD(e, ["MustacheCommentStatement"]) && "string" == typeof e.value && "prettier-ignore" === e.value.trim();
	  }var SD = { getNextNode: FD, getPreviousNode: vD, hasPrettierIgnore: function hasPrettierIgnore(e) {
	      var t = e.getValue(),
	          n = vD(e, 2);return xD(t) || xD(n);
	    }, isNextNodeOfSomeType: function isNextNodeOfSomeType(e, t) {
	      return bD(FD(e), t);
	    }, isNodeOfSomeType: bD, isParentOfSomeType: function isParentOfSomeType(e, t) {
	      return bD(e.getParentNode(0), t);
	    }, isPreviousNodeOfSomeType: function isPreviousNodeOfSomeType(e, t) {
	      return bD(vD(e), t);
	    }, isVoid: function isVoid(e) {
	      return function (e) {
	        return bD(e, ["ElementNode"]) && "string" == typeof e.tag && (function (e) {
	          return e.toUpperCase() === e;
	        }(e.tag[0]) || e.tag.includes("."));
	      }(e) && (0 === e.children || e.children.every(function (e) {
	        return CD(e);
	      })) || ED.has(e.tag);
	    }, isWhitespaceNode: CD };var _dn$builders14 = dn.builders,
	      wD = _dn$builders14.concat,
	      BD = _dn$builders14.group,
	      TD = _dn$builders14.hardline,
	      kD = _dn$builders14.ifBreak,
	      ND = _dn$builders14.indent,
	      OD = _dn$builders14.join,
	      PD = _dn$builders14.line,
	      _D = _dn$builders14.softline,
	      ID = SD.getNextNode,
	      jD = SD.getPreviousNode,
	      MD = SD.hasPrettierIgnore,
	      LD = SD.isNextNodeOfSomeType,
	      RD = SD.isNodeOfSomeType,
	      qD = SD.isParentOfSomeType,
	      VD = SD.isPreviousNodeOfSomeType,
	      WD = SD.isVoid,
	      $D = SD.isWhitespaceNode;
	  function UD(e, t) {
	    var n = e.getValue();return wD(["<", n.tag, zD(e, t), Dy(n), GD(n)]);
	  }function zD(e, t) {
	    var n = e.getValue();return ND(wD([n.attributes.length ? PD : "", OD(PD, e.map(t, "attributes")), n.modifiers.length ? PD : "", OD(PD, e.map(t, "modifiers")), n.comments.length ? PD : "", OD(PD, e.map(t, "comments"))]));
	  }function JD(e, t, n) {
	    return wD(e.map(function (e, r) {
	      return 0 === r ? wD([_D, n(e, t, n)]) : n(e, t, n);
	    }, "children"));
	  }function GD(e) {
	    return WD(e) ? kD(wD([_D, "/>"]), wD([" />", _D])) : kD(wD([_D, ">"]), ">");
	  }function HD(e) {
	    var t = !1 === e.escaped ? "{{{" : "{{",
	        n = e.strip && e.strip.open ? "~" : "";return wD([t, n]);
	  }function XD(e) {
	    var t = !1 === e.escaped ? "}}}" : "}}",
	        n = e.strip && e.strip.close ? "~" : "";return wD([n, t]);
	  }function YD(e) {
	    var t = HD(e),
	        n = e.openStrip.open ? "~" : "";return wD([t, n, "#"]);
	  }function KD(e) {
	    var t = XD(e),
	        n = e.openStrip.close ? "~" : "";return wD([n, t]);
	  }function QD(e) {
	    var t = HD(e),
	        n = e.closeStrip.open ? "~" : "";return wD([t, n, "/"]);
	  }function ZD(e) {
	    var t = XD(e),
	        n = e.closeStrip.close ? "~" : "";return wD([n, t]);
	  }function ey(e) {
	    var t = HD(e),
	        n = e.inverseStrip.open ? "~" : "";return wD([t, n]);
	  }function ty(e) {
	    var t = XD(e),
	        n = e.inverseStrip.close ? "~" : "";return wD([n, t]);
	  }function ny(e, t) {
	    var n = e.getValue();return BD(wD([YD(n), hy(e, t), Dy(n.program), _D, KD(n)]));
	  }function ry(e) {
	    return wD([TD, ey(e), "else", ty(e)]);
	  }function uy(e, t) {
	    var n = e.getParentNode(1);return wD([ey(n), "else ", hy(e, t), ty(n)]);
	  }function oy(e, t) {
	    var n = e.getValue();return wD([ay(n) ? _D : TD, QD(n), e.call(t, "path"), ZD(n)]);
	  }function ay(e) {
	    return RD(e, ["BlockStatement"]) && e.program.body.every(function (e) {
	      return $D(e);
	    });
	  }function iy(e) {
	    return RD(e, ["BlockStatement"]) && e.inverse;
	  }function sy(e, t) {
	    if (ay(e.getValue())) return "";var n = e.call(t, "program");return ND(wD([TD, n]));
	  }function ly(e, t) {
	    var n = e.getValue(),
	        r = e.call(t, "inverse"),
	        u = wD([TD, r]);return function (e) {
	      return iy(e) && 1 === e.inverse.body.length && RD(e.inverse.body[0], ["BlockStatement"]) && "if" === e.inverse.body[0].path.parts[0];
	    }(n) ? u : iy(n) ? wD([ry(n), ND(u)]) : "";
	  }function cy(e) {
	    return (e = "string" == typeof e ? e : "").split("\n").length - 1;
	  }function py() {
	    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return new Array(Math.min(e, t)).fill(TD);
	  }function dy(e, t) {
	    var n = { quote: '"', regex: /"/g },
	        r = { quote: "'", regex: /'/g },
	        u = t.singleQuote ? r : n,
	        o = u === r ? n : r;var a = !1;if (e.includes(u.quote) || e.includes(o.quote)) {
	      a = (e.match(u.regex) || []).length > (e.match(o.regex) || []).length;
	    }var i = a ? o : u,
	        s = e.replace(i.regex, "\\".concat(i.quote));return wD([i.quote, s, i.quote]);
	  }function fy(e, t) {
	    var n = my(e, t),
	        r = gy(e, t);return r ? ND(wD([n, PD, BD(r)])) : n;
	  }function hy(e, t) {
	    var n = my(e, t),
	        r = gy(e, t);return r ? ND(BD(wD([n, PD, r]))) : n;
	  }function my(e, t) {
	    return e.call(t, "path");
	  }function gy(e, t) {
	    var n = e.getValue(),
	        r = [];if (n.params.length) {
	      var _n65 = e.map(t, "params");r.push.apply(r, _toConsumableArray(_n65));
	    }if (n.hash && n.hash.pairs.length > 0) {
	      var _n66 = e.call(t, "hash");r.push(_n66);
	    }return r.length ? OD(PD, r) : "";
	  }function Dy(e) {
	    return e && e.blockParams.length ? wD([" as |", e.blockParams.join(" "), "|"]) : "";
	  }function yy(e, t, n) {
	    var r = 0,
	        u = 0;for (;;) {
	      if (u === e.length) return null;var _o51 = e.indexOf("\n", u);if (-1 === _o51 && (_o51 = e.length), r === t) return u + n > _o51 ? null : u + n;if (-1 === _o51) return null;r += 1, u = _o51 + 1;
	    }
	  }var Ey = { print: function print(e, t, n) {
	      var r = e.getValue();if (!r) return "";if (MD(e)) {
	        var _e118 = yy(t.originalText, r.loc.start.line - 1, r.loc.start.column),
	            _n67 = yy(t.originalText, r.loc.end.line - 1, r.loc.end.column);return t.originalText.slice(_e118, _n67);
	      }switch (r.type) {case "Block":case "Program":case "Template":
	          return BD(wD(e.map(n, "body")));case "ElementNode":
	          {
	            var _u34 = LD(e, ["ElementNode"]) ? TD : "";if (WD(r)) return wD([BD(UD(e, n)), _u34]);var _o52 = r.children.every(function (e) {
	              return $D(e);
	            });return wD([BD(UD(e, n)), BD(wD([_o52 ? "" : ND(JD(e, t, n)), r.children.length ? TD : "", wD(["</", r.tag, ">"])])), _u34]);
	          }case "BlockStatement":
	          {
	            var _t98 = e.getParentNode(1),
	                _u35 = _t98 && _t98.inverse && 1 === _t98.inverse.body.length && _t98.inverse.body[0] === r && "if" === _t98.inverse.body[0].path.parts[0];return wD(_u35 ? [uy(e, n), sy(e, n), ly(e, n)] : [ny(e, n), BD(wD([sy(e, n), ly(e, n), oy(e, n)]))]);
	          }case "ElementModifierStatement":
	          return BD(wD(["{{", hy(e, n), _D, "}}"]));case "MustacheStatement":
	          {
	            var _t99 = qD(e, ["AttrNode", "ConcatStatement"]),
	                _u36 = qD(e, ["ElementNode"]) && 0 === r.hash.pairs.length && function (e) {
	              return 0 === e.params.length;
	            }(r),
	                _o53 = _t99 || _u36;return BD(wD([HD(r), _o53 ? ND(_D) : "", hy(e, n), _D, XD(r)]));
	          }case "SubExpression":
	          return BD(wD(["(", fy(e, n), _D, ")"]));case "AttrNode":
	          {
	            var _u37 = "TextNode" === r.value.type;if (_u37 && "" === r.value.chars && r.value.loc.start.column === r.value.loc.end.column) return wD([r.name]);var _o54 = e.call(n, "value"),
	                _a39 = _u37 ? dy(_o54.parts.join(), t) : _o54;return wD([r.name, "=", _a39]);
	          }case "ConcatStatement":
	          {
	            var _r104 = t.singleQuote ? "'" : '"';return wD([_r104].concat(_toConsumableArray(e.map(function (e) {
	              return n(e);
	            }, "parts")), [_r104]));
	          }case "Hash":
	          return wD([OD(PD, e.map(n, "pairs"))]);case "HashPair":
	          return wD([r.key, "=", e.call(n, "value")]);case "TextNode":
	          {
	            var _t100 = 2,
	                _n68 = !jD(e),
	                _u38 = !ID(e),
	                _o55 = !/\S/.test(r.chars),
	                _a40 = cy(r.chars);var _i18 = function (e) {
	              return cy(((e = "string" == typeof e ? e : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
	            }(r.chars),
	                _s23 = function (e) {
	              return cy(((e = "string" == typeof e ? e : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
	            }(r.chars);if ((_n68 || _u38) && _o55 && qD(e, ["Block", "ElementNode", "Template"])) return "";_o55 && _a40 ? (_i18 = Math.min(_a40, _t100), _s23 = 0) : (LD(e, ["BlockStatement", "ElementNode"]) && (_s23 = Math.max(_s23, 1)), VD(e, ["BlockStatement", "ElementNode"]) && (_i18 = Math.max(_i18, 1)));if (e.stack.includes("attributes")) {
	              if (!function (e, t) {
	                return qD(e, ["AttrNode"]) && e.getParentNode().name.toLowerCase() === t || qD(e, ["ConcatStatement"]) && e.getParentNode(1).name.toLowerCase() === t;
	              }(e, "class")) return wD([r.chars]);var _n69 = "",
	                  _u39 = "";return qD(e, ["ConcatStatement"]) && (VD(e, ["MustacheStatement"]) && (_n69 = " "), LD(e, ["MustacheStatement"]) && (_u39 = " ")), wD([].concat(_toConsumableArray(py(_i18, _t100)), [r.chars.replace(/^\s+/g, _n69).replace(/\s+$/, _u39)], _toConsumableArray(py(_s23, _t100))));
	            }var _l20 = "",
	                _c15 = "";0 === _s23 && LD(e, ["MustacheStatement"]) && (_c15 = " "), 0 === _i18 && VD(e, ["MustacheStatement"]) && (_l20 = " "), _n68 && (_i18 = 0, _l20 = ""), _u38 && (_s23 = 0, _c15 = "");var _p11 = r.chars;return _p11.startsWith("{{") && _p11.includes("}}") && (_p11 = "\\" + _p11), wD([].concat(_toConsumableArray(py(_i18, _t100)), [_p11.replace(/^\s+/g, _l20).replace(/\s+$/, _c15)], _toConsumableArray(py(_s23, _t100))));
	          }case "MustacheCommentStatement":
	          {
	            var _e119 = r.value.includes("}}") ? "--" : "";return wD(["{{!", _e119, r.value, _e119, "}}"]);
	          }case "PathExpression":
	          return r.original;case "BooleanLiteral":
	          return String(r.value);case "CommentStatement":
	          return wD(["\x3c!--", r.value, "--\x3e"]);case "StringLiteral":
	          return dy(r.value, t);case "NumberLiteral":
	          return String(r.value);case "UndefinedLiteral":
	          return "undefined";case "NullLiteral":
	          return "null";default:
	          throw new Error("unknown glimmer type: " + JSON.stringify(r.type));}
	    }, massageAstNode: function massageAstNode(e, t) {
	      if (delete t.loc, delete t.selfClosing, "TextNode" === e.type) {
	        var _n70 = e.chars.trim();if (!_n70) return null;t.chars = _n70;
	      }
	    } },
	      Cy = ["hbs", "htmlbars"],
	      by = [".handlebars", ".hbs"],
	      Ay = { name: "Handlebars", type: "markup", group: "HTML", aliases: Cy, extensions: by, tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };var vy = { languages: [As(Ue(Object.freeze({ __proto__: null, name: "Handlebars", type: "markup", group: "HTML", aliases: Cy, extensions: by, tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155, default: Ay })), function () {
	      return { since: null, parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] };
	    })], printers: { glimmer: Ey }, parsers: { get glimmer() {
	        return {}.parsers.glimmer;
	      } } };var Fy = { hasPragma: function hasPragma(e) {
	      return (/^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e)
	      );
	    }, insertPragma: function insertPragma(e) {
	      return "# @format\n\n" + e;
	    } };var _dn$builders15 = dn.builders,
	      xy = _dn$builders15.concat,
	      Sy = _dn$builders15.join,
	      wy = _dn$builders15.hardline,
	      By = _dn$builders15.line,
	      Ty = _dn$builders15.softline,
	      ky = _dn$builders15.group,
	      Ny = _dn$builders15.indent,
	      Oy = _dn$builders15.ifBreak,
	      Py = Lt.hasIgnoreComment,
	      _y = Lt.isNextLineEmpty,
	      Iy = Fy.insertPragma;
	  function jy(e, t, n) {
	    if (0 === n.directives.length) return "";var r = Sy(By, e.map(t, "directives"));return "FragmentDefinition" === n.kind || "OperationDefinition" === n.kind ? ky(xy([By, r])) : xy([" ", ky(Ny(xy([Ty, r])))]);
	  }function My(e, t, n) {
	    var r = e.getValue().length;return e.map(function (e, u) {
	      var o = n(e);return _y(t.originalText, e.getValue(), t.locEnd) && u < r - 1 ? xy([o, wy]) : o;
	    });
	  }function Ly(e, t, n) {
	    var r = e.getNode(),
	        u = [],
	        o = r.interfaces,
	        a = e.map(function (e) {
	      return n(e);
	    }, "interfaces");for (var _e120 = 0; _e120 < o.length; _e120++) {
	      var _n71 = o[_e120];u.push(a[_e120]);var _r105 = o[_e120 + 1];if (_r105) {
	        var _e121 = t.originalText.slice(_n71.loc.end, _r105.loc.start),
	            _o56 = _e121.includes("#"),
	            _a41 = _e121.replace(/#.*/g, "").trim();u.push("," === _a41 ? "," : " &"), u.push(_o56 ? By : " ");
	      }
	    }return u;
	  }var Ry = { print: function print(e, t, n) {
	      var r = e.getValue();if (!r) return "";if ("string" == typeof r) return r;switch (r.kind) {case "Document":
	          {
	            var _u40 = [];return e.map(function (e, o) {
	              _u40.push(xy([e.call(n)])), o !== r.definitions.length - 1 && (_u40.push(wy), _y(t.originalText, e.getValue(), t.locEnd) && _u40.push(wy));
	            }, "definitions"), xy([xy(_u40), wy]);
	          }case "OperationDefinition":
	          {
	            var _u41 = "{" !== t.originalText[t.locStart(r)],
	                _o57 = !!r.name;return xy([_u41 ? r.operation : "", _u41 && _o57 ? xy([" ", e.call(n, "name")]) : "", r.variableDefinitions && r.variableDefinitions.length ? ky(xy(["(", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.map(n, "variableDefinitions"))])), Ty, ")"])) : "", jy(e, n, r), r.selectionSet && (_u41 || _o57) ? " " : "", e.call(n, "selectionSet")]);
	          }case "FragmentDefinition":
	          return xy(["fragment ", e.call(n, "name"), r.variableDefinitions && r.variableDefinitions.length ? ky(xy(["(", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.map(n, "variableDefinitions"))])), Ty, ")"])) : "", " on ", e.call(n, "typeCondition"), jy(e, n, r), " ", e.call(n, "selectionSet")]);case "SelectionSet":
	          return xy(["{", Ny(xy([wy, Sy(wy, e.call(function (e) {
	            return My(e, t, n);
	          }, "selections"))])), wy, "}"]);case "Field":
	          return ky(xy([r.alias ? xy([e.call(n, "alias"), ": "]) : "", e.call(n, "name"), r.arguments.length > 0 ? ky(xy(["(", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.call(function (e) {
	            return My(e, t, n);
	          }, "arguments"))])), Ty, ")"])) : "", jy(e, n, r), r.selectionSet ? " " : "", e.call(n, "selectionSet")]));case "Name":
	          return r.value;case "StringValue":
	          return r.block ? xy(['"""', wy, Sy(wy, r.value.replace(/"""/g, "\\$&").split("\n")), wy, '"""']) : xy(['"', r.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);case "IntValue":case "FloatValue":case "EnumValue":
	          return r.value;case "BooleanValue":
	          return r.value ? "true" : "false";case "NullValue":
	          return "null";case "Variable":
	          return xy(["$", e.call(n, "name")]);case "ListValue":
	          return ky(xy(["[", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.map(n, "values"))])), Ty, "]"]));case "ObjectValue":
	          return ky(xy(["{", t.bracketSpacing && r.fields.length > 0 ? " " : "", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.map(n, "fields"))])), Ty, Oy("", t.bracketSpacing && r.fields.length > 0 ? " " : ""), "}"]));case "ObjectField":case "Argument":
	          return xy([e.call(n, "name"), ": ", e.call(n, "value")]);case "Directive":
	          return xy(["@", e.call(n, "name"), r.arguments.length > 0 ? ky(xy(["(", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.call(function (e) {
	            return My(e, t, n);
	          }, "arguments"))])), Ty, ")"])) : ""]);case "NamedType":
	          return e.call(n, "name");case "VariableDefinition":
	          return xy([e.call(n, "variable"), ": ", e.call(n, "type"), r.defaultValue ? xy([" = ", e.call(n, "defaultValue")]) : "", jy(e, n, r)]);case "ObjectTypeExtension":case "ObjectTypeDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", "ObjectTypeExtension" === r.kind ? "extend " : "", "type ", e.call(n, "name"), r.interfaces.length > 0 ? xy([" implements ", xy(Ly(e, t, n))]) : "", jy(e, n, r), r.fields.length > 0 ? xy([" {", Ny(xy([wy, Sy(wy, e.call(function (e) {
	            return My(e, t, n);
	          }, "fields"))])), wy, "}"]) : ""]);case "FieldDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", e.call(n, "name"), r.arguments.length > 0 ? ky(xy(["(", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.call(function (e) {
	            return My(e, t, n);
	          }, "arguments"))])), Ty, ")"])) : "", ": ", e.call(n, "type"), jy(e, n, r)]);case "DirectiveDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", "directive ", "@", e.call(n, "name"), r.arguments.length > 0 ? ky(xy(["(", Ny(xy([Ty, Sy(xy([Oy("", ", "), Ty]), e.call(function (e) {
	            return My(e, t, n);
	          }, "arguments"))])), Ty, ")"])) : "", r.repeatable ? " repeatable" : "", xy([" on ", Sy(" | ", e.map(n, "locations"))])]);case "EnumTypeExtension":case "EnumTypeDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", "EnumTypeExtension" === r.kind ? "extend " : "", "enum ", e.call(n, "name"), jy(e, n, r), r.values.length > 0 ? xy([" {", Ny(xy([wy, Sy(wy, e.call(function (e) {
	            return My(e, t, n);
	          }, "values"))])), wy, "}"]) : ""]);case "EnumValueDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", e.call(n, "name"), jy(e, n, r)]);case "InputValueDefinition":
	          return xy([e.call(n, "description"), r.description ? r.description.block ? wy : By : "", e.call(n, "name"), ": ", e.call(n, "type"), r.defaultValue ? xy([" = ", e.call(n, "defaultValue")]) : "", jy(e, n, r)]);case "InputObjectTypeExtension":case "InputObjectTypeDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", "InputObjectTypeExtension" === r.kind ? "extend " : "", "input ", e.call(n, "name"), jy(e, n, r), r.fields.length > 0 ? xy([" {", Ny(xy([wy, Sy(wy, e.call(function (e) {
	            return My(e, t, n);
	          }, "fields"))])), wy, "}"]) : ""]);case "SchemaDefinition":
	          return xy(["schema", jy(e, n, r), " {", r.operationTypes.length > 0 ? Ny(xy([wy, Sy(wy, e.call(function (e) {
	            return My(e, t, n);
	          }, "operationTypes"))])) : "", wy, "}"]);case "OperationTypeDefinition":
	          return xy([e.call(n, "operation"), ": ", e.call(n, "type")]);case "InterfaceTypeExtension":case "InterfaceTypeDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", "InterfaceTypeExtension" === r.kind ? "extend " : "", "interface ", e.call(n, "name"), r.interfaces.length > 0 ? xy([" implements ", xy(Ly(e, t, n))]) : "", jy(e, n, r), r.fields.length > 0 ? xy([" {", Ny(xy([wy, Sy(wy, e.call(function (e) {
	            return My(e, t, n);
	          }, "fields"))])), wy, "}"]) : ""]);case "FragmentSpread":
	          return xy(["...", e.call(n, "name"), jy(e, n, r)]);case "InlineFragment":
	          return xy(["...", r.typeCondition ? xy([" on ", e.call(n, "typeCondition")]) : "", jy(e, n, r), " ", e.call(n, "selectionSet")]);case "UnionTypeExtension":case "UnionTypeDefinition":
	          return ky(xy([e.call(n, "description"), r.description ? wy : "", ky(xy(["UnionTypeExtension" === r.kind ? "extend " : "", "union ", e.call(n, "name"), jy(e, n, r), r.types.length > 0 ? xy([" =", Oy("", " "), Ny(xy([Oy(xy([By, "  "])), Sy(xy([By, "| "]), e.map(n, "types"))]))]) : ""]))]));case "ScalarTypeExtension":case "ScalarTypeDefinition":
	          return xy([e.call(n, "description"), r.description ? wy : "", "ScalarTypeExtension" === r.kind ? "extend " : "", "scalar ", e.call(n, "name"), jy(e, n, r)]);case "NonNullType":
	          return xy([e.call(n, "type"), "!"]);case "ListType":
	          return xy(["[", e.call(n, "type"), "]"]);default:
	          throw new Error("unknown graphql type: " + JSON.stringify(r.kind));}
	    }, massageAstNode: function massageAstNode(e, t) {
	      delete t.loc, delete t.comments;
	    }, hasPrettierIgnore: Py, insertPragma: Iy, printComment: function printComment(e) {
	      var t = e.getValue();if ("Comment" === t.kind) return "#" + t.value.trimEnd();throw new Error("Not a comment: " + JSON.stringify(t));
	    }, canAttachComment: function canAttachComment(e) {
	      return e.kind && "Comment" !== e.kind;
	    } },
	      qy = { bracketSpacing: Bh.bracketSpacing },
	      Vy = [".graphql", ".gql", ".graphqls"],
	      Wy = { name: "GraphQL", type: "data", extensions: Vy, tmScope: "source.graphql", aceMode: "text", languageId: 139 };var $y = { languages: [As(Ue(Object.freeze({ __proto__: null, name: "GraphQL", type: "data", extensions: Vy, tmScope: "source.graphql", aceMode: "text", languageId: 139, default: Wy })), function () {
	      return { since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] };
	    })], options: qy, printers: { graphql: Ry }, parsers: { get graphql() {
	        return {}.parsers.graphql;
	      } } };var Uy = Lt.getLast,
	      _cjkPattern$kPattern$ = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" },
	      zy = _cjkPattern$kPattern$.cjkPattern,
	      Jy = _cjkPattern$kPattern$.kPattern,
	      Gy = _cjkPattern$kPattern$.punctuationPattern,
	      Hy = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"],
	      Xy = Hy.concat(["tableCell", "paragraph", "heading"]),
	      Yy = new RegExp(Jy),
	      Ky = new RegExp(Gy);function Qy(e, t) {
	    var _t$slice$match = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/),
	        _t$slice$match2 = _slicedToArray(_t$slice$match, 4),
	        n = _t$slice$match2[1],
	        r = _t$slice$match2[2],
	        u = _t$slice$match2[3];

	    return { numberText: n, marker: r, leadingSpaces: u };
	  }var Zy = { mapAst: function mapAst(e, t) {
	      return function e(n, r, u) {
	        u = u || [];var o = Object.assign({}, t(n, r, u));return o.children && (o.children = o.children.map(function (t, n) {
	          return e(t, n, [o].concat(u));
	        })), o;
	      }(e, null, null);
	    }, splitText: function splitText(e, t) {
	      var n = [];return ("preserve" === t.proseWrap ? e : e.replace(new RegExp("(".concat(zy, ")\n(").concat(zy, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach(function (e, t, u) {
	        t % 2 != 1 ? (0 !== t && t !== u.length - 1 || "" !== e) && e.split(new RegExp("(".concat(zy, ")"))).forEach(function (e, t, n) {
	          (0 !== t && t !== n.length - 1 || "" !== e) && (t % 2 != 0 ? r(Ky.test(e) ? { type: "word", value: e, kind: "cjk-punctuation", hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: e, kind: Yy.test(e) ? "k-letter" : "cj-letter", hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 }) : "" !== e && r({ type: "word", value: e, kind: "non-cjk", hasLeadingPunctuation: Ky.test(e[0]), hasTrailingPunctuation: Ky.test(Uy(e)) }));
	        }) : n.push({ type: "whitespace", value: /\n/.test(e) ? "\n" : " " });
	      }), n;function r(e) {
	        var t = Uy(n);var r, u;t && "word" === t.type && ("non-cjk" === t.kind && "cj-letter" === e.kind && !t.hasTrailingPunctuation || "cj-letter" === t.kind && "non-cjk" === e.kind && !e.hasLeadingPunctuation ? n.push({ type: "whitespace", value: " " }) : (r = "non-cjk", u = "cjk-punctuation", t.kind === r && e.kind === u || t.kind === u && e.kind === r || [t.value, e.value].some(function (e) {
	          return (/\u3000/.test(e)
	          );
	        }) || n.push({ type: "whitespace", value: "" }))), n.push(e);
	      }
	    }, punctuationPattern: Gy, getFencedCodeBlockValue: function getFencedCodeBlockValue(e, t) {
	      var n = t.trimEnd().slice(e.position.start.offset, e.position.end.offset),
	          r = n.match(/^\s*/)[0].length,
	          u = new RegExp("^\\s{0,".concat(r, "}")),
	          o = n.split("\n"),
	          a = n[r],
	          i = n.slice(r).match(new RegExp("^[".concat(a, "]+")))[0],
	          s = new RegExp("^\\s{0,3}".concat(i)).test(o[o.length - 1].slice(l(o.length - 1)));return o.slice(1, s ? -1 : void 0).map(function (e, t) {
	        return e.slice(l(t + 1)).replace(u, "");
	      }).join("\n");function l(t) {
	        return e.position.indent[t - 1] - 1;
	      }
	    }, getOrderedListItemInfo: Qy, hasGitDiffFriendlyOrderedList: function hasGitDiffFriendlyOrderedList(e, t) {
	      if (!e.ordered) return !1;if (e.children.length < 2) return !1;var n = Number(Qy(e.children[0], t.originalText).numberText),
	          r = Number(Qy(e.children[1], t.originalText).numberText);if (0 === n && e.children.length > 2) {
	        var _n72 = Number(Qy(e.children[2], t.originalText).numberText);return 1 === r && 1 === _n72;
	      }return 1 === r;
	    }, INLINE_NODE_TYPES: Hy, INLINE_NODE_WRAPPER_TYPES: Xy, isAutolink: function isAutolink(e, t) {
	      if (!e || "link" !== e.type || 1 !== e.children.length) return !1;var n = e.children[0];return n && t.locStart(e) === t.locStart(n) && t.locEnd(e) === t.locEnd(n);
	    } };var eE = Lt.getParserName,
	      tE = Lt.getMaxContinuousCount,
	      _dn$builders16 = dn.builders,
	      nE = _dn$builders16.hardline,
	      rE = _dn$builders16.concat,
	      uE = _dn$builders16.markAsRoot,
	      oE = dn.utils.replaceNewlinesWithLiterallines,
	      aE = Em.print,
	      iE = Zy.getFencedCodeBlockValue;
	  var sE = function sE(e, t, n, r) {
	    var u = e.getValue();if ("code" === u.type && null !== u.lang) {
	      var _e122 = u.lang.match(/^[\w-]+/),
	          _t101 = _e122 ? _e122[0] : "",
	          _o58 = eE(_t101, r);if (_o58) {
	        var _e123 = r.__inJsTemplate ? "~" : "`",
	            _t102 = _e123.repeat(Math.max(3, tE(u.value, _e123) + 1)),
	            _a42 = n(iE(u, r.originalText), { parser: _o58 }, { stripTrailingHardline: !0 });return uE(rE([_t102, u.lang, u.meta ? " " + u.meta : "", nE, oE(_a42), nE, _t102]));
	      }
	    }switch (u.type) {case "front-matter":
	        return aE(u, n);case "importExport":
	        return rE([n(u.value, { parser: "babel" }, { stripTrailingHardline: !0 }), nE]);case "jsx":
	        return n("<$>".concat(u.value, "</$>"), { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 });}return null;
	  };var lE = Em.parse,
	      cE = ["format", "prettier"];function pE(e) {
	    var t = "@(".concat(cE.join("|"), ")"),
	        n = new RegExp(["\x3c!--\\s*".concat(t, "\\s*--\x3e"), "\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t, "[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e")].join("|"), "m"),
	        r = e.match(n);return r && 0 === r.index;
	  }var dE = { startWithPragma: pE, hasPragma: function hasPragma(e) {
	      return pE(lE(e).content.trimStart());
	    }, insertPragma: function insertPragma(e) {
	      var t = lE(e),
	          n = "\x3c!-- @".concat(cE[0], " --\x3e");return t.frontMatter ? "".concat(t.frontMatter.raw, "\n\n").concat(n, "\n\n").concat(t.content) : "".concat(n, "\n\n").concat(t.content);
	    } };var fE = Zy.getOrderedListItemInfo,
	      hE = Zy.mapAst,
	      mE = Zy.splitText,
	      gE = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;
	  function DE(e, t, n) {
	    return hE(e, function (e) {
	      if (!e.children) return e;var r = e.children.reduce(function (e, r) {
	        var u = e[e.length - 1];return u && t(u, r) ? e.splice(-1, 1, n(u, r)) : e.push(r), e;
	      }, []);return Object.assign({}, e, { children: r });
	    });
	  }var yE = function yE(e, t) {
	    return e = function (e) {
	      return DE(e, function (e, t) {
	        return "importExport" === e.type && "importExport" === t.type;
	      }, function (e, t) {
	        return { type: "importExport", value: e.value + "\n\n" + t.value, position: { start: e.position.start, end: t.position.end } };
	      });
	    }(e = function (e) {
	      return hE(e, function (e) {
	        return "import" !== e.type && "export" !== e.type ? e : Object.assign({}, e, { type: "importExport" });
	      });
	    }(e = function (e, t) {
	      return hE(e, function (e, n, _ref39) {
	        var _ref40 = _slicedToArray(_ref39, 1),
	            r = _ref40[0];

	        if ("text" !== e.type) return e;var u = e.value;
	        return "paragraph" === r.type && (0 === n && (u = u.trimStart()), n === r.children.length - 1 && (u = u.trimEnd())), { type: "sentence", position: e.position, children: mE(u, t) };
	      });
	    }(e = function (e, t) {
	      return hE(e, function (e, t, n) {
	        if ("list" === e.type && 0 !== e.children.length) {
	          for (var _t103 = 0; _t103 < n.length; _t103++) {
	            var _r106 = n[_t103];if ("list" === _r106.type && !_r106.isAligned) return e.isAligned = !1, e;
	          }e.isAligned = r(e);
	        }return e;
	      });function n(e) {
	        return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1;
	      }function r(e) {
	        if (!e.ordered) return !0;
	        var _e$children = _slicedToArray(e.children, 2),
	            r = _e$children[0],
	            u = _e$children[1];

	        if (fE(r, t.originalText).leadingSpaces.length > 1) return !0;var o = n(r);if (-1 === o) return !1;if (1 === e.children.length) return o % t.tabWidth == 0;if (o !== n(u)) return !1;if (o % t.tabWidth == 0) return !0;return fE(u, t.originalText).leadingSpaces.length > 1;
	      }
	    }(e = function (e, t) {
	      return hE(e, function (e, n, r) {
	        if ("code" === e.type) {
	          var _n73 = /^\n?( {4,}|\t)/.test(t.originalText.slice(e.position.start.offset, e.position.end.offset));if (e.isIndented = _n73, _n73) for (var _e124 = 0; _e124 < r.length; _e124++) {
	            var _t104 = r[_e124];if (_t104.hasIndentedCodeblock) break;"list" === _t104.type && (_t104.hasIndentedCodeblock = !0);
	          }
	        }return e;
	      });
	    }(e = function (e) {
	      return hE(e, function (e) {
	        return "inlineCode" !== e.type ? e : Object.assign({}, e, { value: e.value.replace(/\s+/g, " ") });
	      });
	    }(e = function (e) {
	      return DE(e, function (e, t) {
	        return "text" === e.type && "text" === t.type;
	      }, function (e, t) {
	        return { type: "text", value: e.value + t.value, position: { start: e.position.start, end: t.position.end } };
	      });
	    }(e = function (e, t) {
	      return hE(e, function (e) {
	        return "text" !== e.type ? e : Object.assign({}, e, { value: "*" !== e.value && "_" !== e.value && "$" !== e.value && gE.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length ? t.originalText.slice(e.position.start.offset, e.position.end.offset) : e.value });
	      });
	    }(e, t))), t), t), t)));
	  };var EE = Lt.getLast,
	      CE = Lt.getMinNotPresentContinuousCount,
	      bE = Lt.getMaxContinuousCount,
	      AE = Lt.getStringWidth,
	      _dn$builders17 = dn.builders,
	      vE = _dn$builders17.breakParent,
	      FE = _dn$builders17.concat,
	      xE = _dn$builders17.join,
	      SE = _dn$builders17.line,
	      wE = _dn$builders17.literalline,
	      BE = _dn$builders17.markAsRoot,
	      TE = _dn$builders17.hardline,
	      kE = _dn$builders17.softline,
	      NE = _dn$builders17.ifBreak,
	      OE = _dn$builders17.fill,
	      PE = _dn$builders17.align,
	      _E = _dn$builders17.indent,
	      IE = _dn$builders17.group,
	      jE = dn.utils.normalizeDoc,
	      ME = dn.printer.printDocToString,
	      LE = Lt.replaceEndOfLineWith,
	      RE = Lt.isFrontMatterNode,
	      qE = Zy.getFencedCodeBlockValue,
	      VE = Zy.hasGitDiffFriendlyOrderedList,
	      WE = Zy.splitText,
	      $E = Zy.punctuationPattern,
	      UE = Zy.INLINE_NODE_TYPES,
	      zE = Zy.INLINE_NODE_WRAPPER_TYPES,
	      JE = Zy.isAutolink,
	      GE = new Set(["importExport"]),
	      HE = ["heading", "tableCell", "link"],
	      XE = new Set(["listItem", "definition", "footnoteDefinition"]);
	  function YE(e, t, n, r) {
	    var u = e.getValue(),
	        o = null === u.checked ? "" : u.checked ? "[x] " : "[ ] ";return FE([o, nC(e, t, n, { processor: function processor(e, u) {
	        if (0 === u && "list" !== e.getValue().type) return PE(" ".repeat(o.length), e.call(n));var a = " ".repeat((i = t.tabWidth - r.length, l = 3, i < (s = 0) ? s : i > l ? l : i));var i, s, l;return FE([a, PE(a, e.call(n))]);
	      } })]);
	  }function KE(e, t) {
	    return function (e, t, n) {
	      n = n || function () {
	        return !0;
	      };var r = -1;var _iteratorNormalCompletion72 = true;
	      var _didIteratorError72 = false;
	      var _iteratorError72 = undefined;

	      try {
	        for (var _iterator72 = t.children[Symbol.iterator](), _step72; !(_iteratorNormalCompletion72 = (_step72 = _iterator72.next()).done); _iteratorNormalCompletion72 = true) {
	          var _u42 = _step72.value;
	          if (_u42.type === e.type && n(_u42) ? r++ : r = -1, _u42 === e) return r;
	        }
	      } catch (err) {
	        _didIteratorError72 = true;
	        _iteratorError72 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion72 && _iterator72.return) {
	            _iterator72.return();
	          }
	        } finally {
	          if (_didIteratorError72) {
	            throw _iteratorError72;
	          }
	        }
	      }
	    }(e, t, function (t) {
	      return t.ordered === e.ordered;
	    });
	  }function QE(e, t) {
	    var n = [].concat(t);var r = void 0,
	        u = -1;for (; r = e.getParentNode(++u);) {
	      if (n.includes(r.type)) return u;
	    }return -1;
	  }function ZE(e, t) {
	    var n = QE(e, t);return -1 === n ? null : e.getParentNode(n);
	  }function eC(e, t, n) {
	    if ("preserve" === n.proseWrap && "\n" === t) return TE;var r = "always" === n.proseWrap && !ZE(e, HE);return "" !== t ? r ? SE : " " : r ? kE : "";
	  }function tC(e, t, n) {
	    var r = [];var u = null;
	    var _e$getValue2 = e.getValue(),
	        o = _e$getValue2.children;

	    return o.forEach(function (e, t) {
	      switch (uC(e)) {case "start":
	          null === u && (u = { index: t, offset: e.position.end.offset });break;case "end":
	          null !== u && (r.push({ start: u, end: { index: t, offset: e.position.start.offset } }), u = null);}
	    }), nC(e, t, n, { processor: function processor(e, u) {
	        if (0 !== r.length) {
	          var _e125 = r[0];if (u === _e125.start.index) return FE([o[_e125.start.index].value, t.originalText.slice(_e125.start.offset, _e125.end.offset), o[_e125.end.index].value]);if (_e125.start.index < u && u < _e125.end.index) return !1;if (u === _e125.end.index) return r.shift(), !1;
	        }return e.call(n);
	      } });
	  }function nC(e, t, n, r) {
	    var u = (r = r || {}).postprocessor || FE,
	        o = r.processor || function (e) {
	      return e.call(n);
	    },
	        a = e.getValue(),
	        i = [];var s = void 0;return e.map(function (e, n) {
	      var r = e.getValue(),
	          u = o(e, n);if (!1 !== u) {
	        var _e126 = { parts: i, prevNode: s, parentNode: a, options: t };(function (e, t) {
	          var n = 0 === t.parts.length,
	              r = UE.includes(e.type),
	              u = "html" === e.type && zE.includes(t.parentNode.type);return n || r || u;
	        })(r, _e126) || (i.push(TE), s && GE.has(s.type) || (function (e, t) {
	          var n = (t.prevNode && t.prevNode.type) === e.type && XE.has(e.type),
	              r = "listItem" === t.parentNode.type && !t.parentNode.loose,
	              u = t.prevNode && "listItem" === t.prevNode.type && t.prevNode.loose,
	              o = "next" === uC(t.prevNode),
	              a = "html" === e.type && t.prevNode && "html" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line,
	              i = "html" === e.type && "listItem" === t.parentNode.type && t.prevNode && "paragraph" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line;return u || !(n || r || o || a || i);
	        }(r, _e126) || oC(r, _e126)) && i.push(TE), oC(r, _e126) && i.push(TE)), i.push(u), s = r;
	      }
	    }, "children"), u(i);
	  }function rC(e) {
	    var t = e;for (; t.children && 0 !== t.children.length;) {
	      t = t.children[t.children.length - 1];
	    }return t;
	  }function uC(e) {
	    if ("html" !== e.type) return !1;var t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);return null !== t && (t[1] ? t[1] : "next");
	  }function oC(e, t) {
	    var n = t.prevNode && "list" === t.prevNode.type,
	        r = "code" === e.type && e.isIndented;return n && r;
	  }function aC(e, t) {
	    var n = [" "].concat(t || []);return new RegExp(n.map(function (e) {
	      return "\\".concat(e);
	    }).join("|")).test(e) ? "<".concat(e, ">") : e;
	  }function iC(e, t, n) {
	    if (null == n && (n = !0), !e) return "";if (n) return " " + iC(e, t, !1);if ((e = e.replace(/\\(["')])/g, "$1")).includes('"') && e.includes("'") && !e.includes(")")) return "(".concat(e, ")");var r = e.split("'").length - 1,
	        u = e.split('"').length - 1,
	        o = r > u ? '"' : u > r || t.singleQuote ? "'" : '"';return e = (e = e.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(o, ")"), "g"), "\\$1"), "".concat(o).concat(e).concat(o);
	  }var sC = { preprocess: yE, print: function print(e, t, n) {
	      var r = e.getValue();if (function (e) {
	        var t = ZE(e, ["linkReference", "imageReference"]);return t && ("linkReference" !== t.type || "full" !== t.referenceType);
	      }(e)) return FE(WE(t.originalText.slice(r.position.start.offset, r.position.end.offset), t).map(function (n) {
	        return "word" === n.type ? n.value : "" === n.value ? "" : eC(e, n.value, t);
	      }));switch (r.type) {case "front-matter":
	          return t.originalText.slice(r.position.start.offset, r.position.end.offset);case "root":
	          return 0 === r.children.length ? "" : FE([jE(tC(e, t, n)), GE.has(rC(r).type) ? "" : TE]);case "paragraph":
	          return nC(e, t, n, { postprocessor: OE });case "sentence":
	          return nC(e, t, n);case "word":
	          {
	            var _n74 = r.value.replace(/[$*]/g, "\\$&").replace(new RegExp(["(^|".concat($E, ")(_+)"), "(_+)(".concat($E, "|$)")].join("|"), "g"), function (e, t, n, r, u) {
	              return (n ? "".concat(t).concat(n) : "".concat(r).concat(u)).replace(/_/g, "\\_");
	            });var _u43 = function _u43(e, t, n) {
	              return "sentence" === e.type && 0 === n;
	            },
	                _o59 = function _o59(e, n, r) {
	              return JE(e.children[r - 1], t);
	            };return _n74 !== r.value && (e.match(void 0, _u43, _o59) || e.match(void 0, _u43, function (e, t, n) {
	              return "emphasis" === e.type && 0 === n;
	            }, _o59)) && (_n74 = _n74.replace(/^(\\?[*_])+/, function (e) {
	              return e.replace(/\\/g, "");
	            })), _n74;
	          }case "whitespace":
	          {
	            var _n75 = e.getParentNode(),
	                _u44 = _n75.children.indexOf(r),
	                _o60 = _n75.children[_u44 + 1],
	                _a43 = _o60 && /^>|^([*+-]|#{1,6}|\d+[).])$/.test(_o60.value) ? "never" : t.proseWrap;return eC(e, r.value, { proseWrap: _a43 });
	          }case "emphasis":
	          {
	            var _u45 = void 0;if (JE(r.children[0], t)) _u45 = t.originalText[r.position.start.offset];else {
	              var _t105 = e.getParentNode(),
	                  _n76 = _t105.children.indexOf(r),
	                  _o61 = _t105.children[_n76 - 1],
	                  _a44 = _t105.children[_n76 + 1];_u45 = _o61 && "sentence" === _o61.type && _o61.children.length > 0 && "word" === EE(_o61.children).type && !EE(_o61.children).hasTrailingPunctuation || _a44 && "sentence" === _a44.type && _a44.children.length > 0 && "word" === _a44.children[0].type && !_a44.children[0].hasLeadingPunctuation || ZE(e, "emphasis") ? "*" : "_";
	            }return FE([_u45, nC(e, t, n), _u45]);
	          }case "strong":
	          return FE(["**", nC(e, t, n), "**"]);case "delete":
	          return FE(["~~", nC(e, t, n), "~~"]);case "inlineCode":
	          {
	            var _e127 = CE(r.value, "`"),
	                _t106 = "`".repeat(_e127 || 1),
	                _n77 = _e127 && !/^\s/.test(r.value) ? " " : "";return FE([_t106, _n77, r.value, _n77, _t106]);
	          }case "link":
	          switch (t.originalText[r.position.start.offset]) {case "<":
	              {
	                var _e128 = "mailto:",
	                    _n78 = r.url.startsWith(_e128) && t.originalText.slice(r.position.start.offset + 1, r.position.start.offset + 1 + _e128.length) !== _e128 ? r.url.slice(_e128.length) : r.url;return FE(["<", _n78, ">"]);
	              }case "[":
	              return FE(["[", nC(e, t, n), "](", aC(r.url, ")"), iC(r.title, t), ")"]);default:
	              return t.originalText.slice(r.position.start.offset, r.position.end.offset);}case "image":
	          return FE(["![", r.alt || "", "](", aC(r.url, ")"), iC(r.title, t), ")"]);case "blockquote":
	          return FE(["> ", PE("> ", nC(e, t, n))]);case "heading":
	          return FE(["#".repeat(r.depth) + " ", nC(e, t, n)]);case "code":
	          {
	            if (r.isIndented) {
	              var _e130 = " ".repeat(4);return PE(_e130, FE([_e130, FE(LE(r.value, TE))]));
	            }var _e129 = t.__inJsTemplate ? "~" : "`",
	                _n79 = _e129.repeat(Math.max(3, bE(r.value, _e129) + 1));return FE([_n79, r.lang || "", r.meta ? " " + r.meta : "", TE, FE(LE(qE(r, t.originalText), TE)), TE, _n79]);
	          }case "html":
	          {
	            var _t107 = e.getParentNode(),
	                _n80 = "root" === _t107.type && EE(_t107.children) === r ? r.value.trimEnd() : r.value,
	                _u46 = /^<!--[\S\s]*-->$/.test(_n80);return FE(LE(_n80, _u46 ? TE : BE(wE)));
	          }case "list":
	          {
	            var _u47 = KE(r, e.getParentNode()),
	                _o62 = VE(r, t);return nC(e, t, n, { processor: function processor(e, a) {
	                var i = function () {
	                  var e = r.ordered ? (0 === a ? r.start : _o62 ? 1 : r.start + a) + (_u47 % 2 == 0 ? ". " : ") ") : _u47 % 2 == 0 ? "- " : "* ";return r.isAligned || r.hasIndentedCodeblock ? function (e, t) {
	                    var n = r();return e + " ".repeat(n >= 4 ? 0 : n);function r() {
	                      var n = e.length % t.tabWidth;return 0 === n ? 0 : t.tabWidth - n;
	                    }
	                  }(e, t) : e;
	                }(),
	                    s = e.getValue();return 2 === s.children.length && "html" === s.children[1].type && s.children[0].position.start.column !== s.children[1].position.start.column ? FE([i, YE(e, t, n, i)]) : FE([i, PE(" ".repeat(i.length), YE(e, t, n, i))]);
	              } });
	          }case "thematicBreak":
	          {
	            var _t108 = QE(e, "list");if (-1 === _t108) return "---";return KE(e.getParentNode(_t108), e.getParentNode(_t108 + 1)) % 2 == 0 ? "***" : "---";
	          }case "linkReference":
	          return FE(["[", nC(e, t, n), "]", "full" === r.referenceType ? FE(["[", r.identifier, "]"]) : "collapsed" === r.referenceType ? "[]" : ""]);case "imageReference":
	          switch (r.referenceType) {case "full":
	              return FE(["![", r.alt || "", "][", r.identifier, "]"]);default:
	              return FE(["![", r.alt, "]", "collapsed" === r.referenceType ? "[]" : ""]);}case "definition":
	          {
	            var _e131 = "always" === t.proseWrap ? SE : " ";return IE(FE([FE(["[", r.identifier, "]:"]), _E(FE([_e131, aC(r.url), null === r.title ? "" : FE([_e131, iC(r.title, t, !1)])]))]));
	          }case "footnote":
	          return FE(["[^", nC(e, t, n), "]"]);case "footnoteReference":
	          return FE(["[^", r.identifier, "]"]);case "footnoteDefinition":
	          {
	            var _u48 = e.getParentNode().children[e.getName() + 1],
	                _o63 = 1 === r.children.length && "paragraph" === r.children[0].type && ("never" === t.proseWrap || "preserve" === t.proseWrap && r.children[0].position.start.line === r.children[0].position.end.line);return FE(["[^", r.identifier, "]: ", _o63 ? nC(e, t, n) : IE(FE([PE(" ".repeat(4), nC(e, t, n, { processor: function processor(e, t) {
	                return 0 === t ? IE(FE([kE, e.call(n)])) : e.call(n);
	              } })), _u48 && "footnoteDefinition" === _u48.type ? kE : ""]))]);
	          }case "table":
	          return function (e, t, n) {
	            var r = TE.parts[0],
	                u = e.getValue(),
	                o = [];e.map(function (e) {
	              var r = [];e.map(function (e) {
	                r.push(ME(e.call(n), t).formatted);
	              }, "children"), o.push(r);
	            }, "children");var a = o.reduce(function (e, t) {
	              return e.map(function (e, n) {
	                return Math.max(e, AE(t[n]));
	              });
	            }, o[0].map(function () {
	              return 3;
	            })),
	                i = xE(r, [c(o[0]), l(), xE(r, o.slice(1).map(function (e) {
	              return c(e);
	            }))]);if ("never" !== t.proseWrap) return FE([vE, i]);var s = xE(r, [c(o[0], !0), l(!0), xE(r, o.slice(1).map(function (e) {
	              return c(e, !0);
	            }))]);return FE([vE, IE(NE(s, i))]);function l(e) {
	              return FE(["| ", xE(" | ", a.map(function (t, n) {
	                var r = e ? 3 : t;switch (u.align[n]) {case "left":
	                    return ":" + "-".repeat(r - 1);case "right":
	                    return "-".repeat(r - 1) + ":";case "center":
	                    return ":" + "-".repeat(r - 2) + ":";default:
	                    return "-".repeat(r);}
	              })), " |"]);
	            }function c(e, t) {
	              return FE(["| ", xE(" | ", t ? e : e.map(function (e, t) {
	                switch (u.align[t]) {case "right":
	                    return d(e, a[t]);case "center":
	                    return f(e, a[t]);default:
	                    return p(e, a[t]);}
	              })), " |"]);
	            }function p(e, t) {
	              var n = t - AE(e);return FE([e, " ".repeat(n)]);
	            }function d(e, t) {
	              var n = t - AE(e);return FE([" ".repeat(n), e]);
	            }function f(e, t) {
	              var n = t - AE(e),
	                  r = Math.floor(n / 2),
	                  u = n - r;return FE([" ".repeat(r), e, " ".repeat(u)]);
	            }
	          }(e, t, n);case "tableCell":
	          return nC(e, t, n);case "break":
	          return (/\s/.test(t.originalText[r.position.start.offset]) ? FE(["  ", BE(wE)]) : FE(["\\", TE])
	          );case "liquidNode":
	          return FE(LE(r.value, TE));case "importExport":case "jsx":
	          return FE([r.value, TE]);case "math":
	          return FE(["$$", TE, r.value ? FE([FE(LE(r.value, TE)), TE]) : "", "$$"]);case "inlineMath":
	          return t.originalText.slice(t.locStart(r), t.locEnd(r));case "tableRow":case "listItem":default:
	          throw new Error("Unknown markdown type ".concat(JSON.stringify(r.type)));}
	    }, embed: sE, massageAstNode: function massageAstNode(e, t, n) {
	      return delete t.position, delete t.raw, "front-matter" !== e.type && "code" !== e.type && "yaml" !== e.type && "import" !== e.type && "export" !== e.type && "jsx" !== e.type || delete t.value, "list" === e.type && delete t.isAligned, "list" !== e.type && "listItem" !== e.type || (delete t.spread, delete t.loose), "text" === e.type ? null : ("inlineCode" === e.type && (t.value = e.value.replace(/[\t\n ]+/g, " ")), "definition" !== e.type && "linkReference" !== e.type || (t.label = e.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), "definition" !== e.type && "link" !== e.type && "image" !== e.type || !e.title || (t.title = e.title.replace(/\\(["')])/g, "$1")), n && "root" === n.type && n.children.length > 0 && (n.children[0] === e || RE(n.children[0]) && n.children[1] === e) && "html" === e.type && dE.startWithPragma(e.value) ? null : void 0);
	    }, hasPrettierIgnore: function hasPrettierIgnore(e) {
	      var t = +e.getName();return 0 !== t && "next" === uC(e.getParentNode().children[t - 1]);
	    }, insertPragma: dE.insertPragma },
	      lC = { proseWrap: Bh.proseWrap, singleQuote: Bh.singleQuote },
	      cC = ["pandoc"],
	      pC = [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"],
	      dC = ["contents.lr"],
	      fC = { name: "Markdown", type: "prose", aliases: cC, aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: pC, filenames: dC, tmScope: "source.gfm", languageId: 222 },
	      hC = Ue(Object.freeze({ __proto__: null, name: "Markdown", type: "prose", aliases: cC, aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: pC, filenames: dC, tmScope: "source.gfm", languageId: 222, default: fC }));var mC = { languages: [As(hC, function (e) {
	      return { since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: e.filenames.concat(["README"]), extensions: e.extensions.filter(function (e) {
	          return ".mdx" !== e;
	        }) };
	    }), As(hC, function () {
	      return { name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] };
	    })], options: lC, printers: { mdast: sC }, parsers: { get remark() {
	        return {}.parsers.remark;
	      }, get markdown() {
	        return {}.parsers.remark;
	      }, get mdx() {
	        return {}.parsers.mdx;
	      } } };var gC = Lt.isFrontMatterNode;
	  var DC = Object.freeze({ __proto__: null, default: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] }),
	      yC = ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"],
	      EC = ["title"],
	      CC = ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"],
	      bC = ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"],
	      AC = ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
	      vC = ["href", "target"],
	      FC = ["color", "face", "size"],
	      xC = ["dir"],
	      SC = ["cite"],
	      wC = ["alink", "background", "bgcolor", "link", "text", "vlink"],
	      BC = ["clear"],
	      TC = ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"],
	      kC = ["height", "width"],
	      NC = ["align"],
	      OC = ["align", "char", "charoff", "span", "valign", "width"],
	      PC = ["align", "char", "charoff", "span", "valign", "width"],
	      _C = ["value"],
	      IC = ["cite", "datetime"],
	      jC = ["open"],
	      MC = ["title"],
	      LC = ["open"],
	      RC = ["compact"],
	      qC = ["align"],
	      VC = ["compact"],
	      WC = ["height", "src", "type", "width"],
	      $C = ["disabled", "form", "name"],
	      UC = ["color", "face", "size"],
	      zC = ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"],
	      JC = ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"],
	      GC = ["cols", "rows"],
	      HC = ["align"],
	      XC = ["align"],
	      YC = ["align"],
	      KC = ["align"],
	      QC = ["align"],
	      ZC = ["align"],
	      eb = ["profile"],
	      tb = ["align", "noshade", "size", "width"],
	      nb = ["manifest", "version"],
	      rb = ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"],
	      ub = ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"],
	      ob = ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"],
	      ab = ["cite", "datetime"],
	      ib = ["prompt"],
	      sb = ["accesskey", "for", "form"],
	      lb = ["accesskey", "align"],
	      cb = ["type", "value"],
	      pb = ["as", "charset", "color", "crossorigin", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"],
	      db = ["name"],
	      fb = ["compact"],
	      hb = ["charset", "content", "http-equiv", "name", "scheme"],
	      mb = ["high", "low", "max", "min", "optimum", "value"],
	      gb = ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"],
	      Db = ["compact", "reversed", "start", "type"],
	      yb = ["disabled", "label"],
	      Eb = ["disabled", "label", "selected", "value"],
	      Cb = ["for", "form", "name"],
	      bb = ["align"],
	      Ab = ["name", "type", "value", "valuetype"],
	      vb = ["width"],
	      Fb = ["max", "value"],
	      xb = ["cite"],
	      Sb = ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"],
	      wb = ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"],
	      Bb = ["name"],
	      Tb = ["media", "sizes", "src", "srcset", "type"],
	      kb = ["media", "nonce", "title", "type"],
	      Nb = ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"],
	      Ob = ["align", "char", "charoff", "valign"],
	      Pb = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
	      _b = ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"],
	      Ib = ["align", "char", "charoff", "valign"],
	      jb = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
	      Mb = ["align", "char", "charoff", "valign"],
	      Lb = ["datetime"],
	      Rb = ["align", "bgcolor", "char", "charoff", "valign"],
	      qb = ["default", "kind", "label", "src", "srclang"],
	      Vb = ["compact", "type"],
	      Wb = ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"],
	      $b = { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: yC, abbr: EC, applet: CC, area: bC, audio: AC, base: vC, basefont: FC, bdo: xC, blockquote: SC, body: wC, br: BC, button: TC, canvas: kC, caption: NC, col: OC, colgroup: PC, data: _C, del: IC, details: jC, dfn: MC, dialog: LC, dir: RC, div: qC, dl: VC, embed: WC, fieldset: $C, font: UC, form: zC, frame: JC, frameset: GC, h1: HC, h2: XC, h3: YC, h4: KC, h5: QC, h6: ZC, head: eb, hr: tb, html: nb, iframe: rb, img: ub, input: ob, ins: ab, isindex: ib, label: sb, legend: lb, li: cb, link: pb, map: db, menu: fb, meta: hb, meter: mb, object: gb, ol: Db, optgroup: yb, option: Eb, output: Cb, p: bb, param: Ab, pre: vb, progress: Fb, q: xb, script: Sb, select: wb, slot: Bb, source: Tb, style: kb, table: Nb, tbody: Ob, td: Pb, textarea: _b, tfoot: Ib, th: jb, thead: Mb, time: Lb, tr: Rb, track: qb, ul: Vb, video: Wb },
	      Ub = Object.freeze({ __proto__: null, a: yC, abbr: EC, applet: CC, area: bC, audio: AC, base: vC, basefont: FC, bdo: xC, blockquote: SC, body: wC, br: BC, button: TC, canvas: kC, caption: NC, col: OC, colgroup: PC, data: _C, del: IC, details: jC, dfn: MC, dialog: LC, dir: RC, div: qC, dl: VC, embed: WC, fieldset: $C, font: UC, form: zC, frame: JC, frameset: GC, h1: HC, h2: XC, h3: YC, h4: KC, h5: QC, h6: ZC, head: eb, hr: tb, html: nb, iframe: rb, img: ub, input: ob, ins: ab, isindex: ib, label: sb, legend: lb, li: cb, link: pb, map: db, menu: fb, meta: hb, meter: mb, object: gb, ol: Db, optgroup: yb, option: Eb, output: Cb, p: bb, param: Ab, pre: vb, progress: Fb, q: xb, script: Sb, select: wb, slot: Bb, source: Tb, style: kb, table: Nb, tbody: Ob, td: Pb, textarea: _b, tfoot: Ib, th: jb, thead: Mb, time: Lb, tr: Rb, track: qb, ul: Vb, video: Wb, default: $b }),
	      zb = Ue(DC),
	      Jb = Ue(Ub);
	  var Gb = Lt.getParserName,
	      Hb = Lt.isFrontMatterNode,
	      _CSS_DISPLAY_TAGS$CSS = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" },
	      Xb = _CSS_DISPLAY_TAGS$CSS.CSS_DISPLAY_TAGS,
	      Yb = _CSS_DISPLAY_TAGS$CSS.CSS_DISPLAY_DEFAULT,
	      Kb = _CSS_DISPLAY_TAGS$CSS.CSS_WHITE_SPACE_TAGS,
	      Qb = _CSS_DISPLAY_TAGS$CSS.CSS_WHITE_SPACE_DEFAULT,
	      Zb = uA(zb),
	      eA = function (e, t) {
	    var n = Object.create(null);var _iteratorNormalCompletion73 = true;
	    var _didIteratorError73 = false;
	    var _iteratorError73 = undefined;

	    try {
	      for (var _iterator73 = Object.keys(e)[Symbol.iterator](), _step73; !(_iteratorNormalCompletion73 = (_step73 = _iterator73.next()).done); _iteratorNormalCompletion73 = true) {
	        var _r107 = _step73.value;
	        n[_r107] = t(e[_r107], _r107);
	      }
	    } catch (err) {
	      _didIteratorError73 = true;
	      _iteratorError73 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion73 && _iterator73.return) {
	          _iterator73.return();
	        }
	      } finally {
	        if (_didIteratorError73) {
	          throw _iteratorError73;
	        }
	      }
	    }

	    return n;
	  }(Jb, uA),
	      tA = new Set(["\t", "\n", "\f", "\r", " "]),
	      nA = function nA(e) {
	    return e.replace(/[\t\n\f\r ]+$/, "");
	  },
	      rA = function rA(e) {
	    return e.match(/^[\t\n\f\r ]*/)[0];
	  };

	  function uA(e) {
	    var t = Object.create(null);var _iteratorNormalCompletion74 = true;
	    var _didIteratorError74 = false;
	    var _iteratorError74 = undefined;

	    try {
	      for (var _iterator74 = e[Symbol.iterator](), _step74; !(_iteratorNormalCompletion74 = (_step74 = _iterator74.next()).done); _iteratorNormalCompletion74 = true) {
	        var _n81 = _step74.value;
	        t[_n81] = !0;
	      }
	    } catch (err) {
	      _didIteratorError74 = true;
	      _iteratorError74 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion74 && _iterator74.return) {
	          _iterator74.return();
	        }
	      } finally {
	        if (_didIteratorError74) {
	          throw _iteratorError74;
	        }
	      }
	    }

	    return t;
	  }function oA(e, t) {
	    return !("ieConditionalComment" !== e.type || !e.lastChild || e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) || "ieConditionalComment" === e.type && !e.complete || !(!DA(e) || !e.children.some(function (e) {
	      return "text" !== e.type && "interpolation" !== e.type;
	    })) || !(!vA(e, t) || iA(e) || "interpolation" === e.type);
	  }function aA(e) {
	    if ("attribute" === e.type) return !1;if (!e.parent) return !1;if ("number" != typeof e.index || 0 === e.index) return !1;return function (e) {
	      return "comment" === e.type && "prettier-ignore" === e.value.trim();
	    }(e.parent.children[e.index - 1]);
	  }function iA(e) {
	    return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || yA(e) && ("script" === e.name || "style" === e.name));
	  }function sA(e) {
	    return EA(e).startsWith("pre");
	  }function lA(e) {
	    return "element" === e.type && 0 !== e.children.length && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay);
	  }function cA(e) {
	    return hA(e) || "element" === e.type && "br" === e.fullName || pA(e);
	  }function pA(e) {
	    return dA(e) && fA(e);
	  }function dA(e) {
	    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
	  }function fA(e) {
	    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
	  }function hA(e) {
	    switch (e.type) {case "ieConditionalComment":case "comment":case "directive":
	        return !0;case "element":
	        return ["script", "select"].includes(e.name);}return !1;
	  }function mA(e) {
	    var _e$attrMap = e.attrMap,
	        t = _e$attrMap.type,
	        n = _e$attrMap.lang;
	    return "module" === t || "text/javascript" === t || "text/babel" === t || "application/javascript" === t || "jsx" === n ? "babel" : "application/x-typescript" === t || "ts" === n || "tsx" === n ? "typescript" : "text/markdown" === t ? "markdown" : "text/html" === t ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) ? "json" : "text/x-handlebars-template" === t ? "glimmer" : void 0;
	  }function gA(e) {
	    return "block" === e || "list-item" === e || e.startsWith("table");
	  }function DA(e) {
	    return EA(e).startsWith("pre");
	  }function yA(e) {
	    return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
	  }function EA(e) {
	    return "element" === e.type && (!e.namespace || yA(e)) && Kb[e.name] || Qb;
	  }var CA = new Set(["template", "style", "script"]);function bA(e, t) {
	    return AA(e, t) && !CA.has(e.fullName);
	  }function AA(e, t) {
	    return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
	  }function vA(e, t) {
	    return AA(e, t) && (bA(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang);
	  }var FA = { HTML_ELEMENT_ATTRIBUTES: eA, HTML_TAGS: Zb, htmlTrim: function htmlTrim(e) {
	      return function (e) {
	        return e.replace(/^[\t\n\f\r ]+/, "");
	      }(nA(e));
	    }, htmlTrimPreserveIndentation: function htmlTrimPreserveIndentation(e) {
	      return function (e) {
	        return e.replace(/^[\t\f\r ]*?\n/g, "");
	      }(nA(e));
	    }, splitByHtmlWhitespace: function splitByHtmlWhitespace(e) {
	      return e.split(/[\t\n\f\r ]+/);
	    }, hasHtmlWhitespace: function hasHtmlWhitespace(e) {
	      return (/[\t\n\f\r ]/.test(e)
	      );
	    }, getLeadingAndTrailingHtmlWhitespace: function getLeadingAndTrailingHtmlWhitespace(e) {
	      var _e$match = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/),
	          _e$match2 = _slicedToArray(_e$match, 4),
	          t = _e$match2[1],
	          n = _e$match2[2],
	          r = _e$match2[3];

	      return { leadingWhitespace: t, trailingWhitespace: r, text: n };
	    }, canHaveInterpolation: function canHaveInterpolation(e) {
	      return e.children && !iA(e);
	    }, countChars: function countChars(e, t) {
	      var n = 0;for (var _r108 = 0; _r108 < e.length; _r108++) {
	        e[_r108] === t && n++;
	      }return n;
	    }, countParents: function countParents(e, t) {
	      var n = 0;for (var _r109 = e.stack.length - 1; _r109 >= 0; _r109--) {
	        var _u49 = e.stack[_r109];_u49 && "object" == (typeof _u49 === "undefined" ? "undefined" : _typeof(_u49)) && !Array.isArray(_u49) && t(_u49) && n++;
	      }return n;
	    }, dedentString: function dedentString(e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {
	        var t = 1 / 0;var _iteratorNormalCompletion75 = true;
	        var _didIteratorError75 = false;
	        var _iteratorError75 = undefined;

	        try {
	          for (var _iterator75 = e.split("\n")[Symbol.iterator](), _step75; !(_iteratorNormalCompletion75 = (_step75 = _iterator75.next()).done); _iteratorNormalCompletion75 = true) {
	            var _n82 = _step75.value;
	            if (0 === _n82.length) continue;if (!tA.has(_n82[0])) return 0;var _e132 = rA(_n82).length;_n82.length !== _e132 && _e132 < t && (t = _e132);
	          }
	        } catch (err) {
	          _didIteratorError75 = true;
	          _iteratorError75 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion75 && _iterator75.return) {
	              _iterator75.return();
	            }
	          } finally {
	            if (_didIteratorError75) {
	              throw _iteratorError75;
	            }
	          }
	        }

	        return t === 1 / 0 ? 0 : t;
	      }(e);
	      return 0 === t ? e : e.split("\n").map(function (e) {
	        return e.slice(t);
	      }).join("\n");
	    }, forceBreakChildren: lA, forceBreakContent: function forceBreakContent(e) {
	      return lA(e) || "element" === e.type && 0 !== e.children.length && (["body", "script", "style"].includes(e.name) || e.children.some(function (e) {
	        return function (e) {
	          return e.children && e.children.some(function (e) {
	            return "text" !== e.type;
	          });
	        }(e);
	      })) || e.firstChild && e.firstChild === e.lastChild && "text" !== e.firstChild.type && dA(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || fA(e.lastChild));
	    }, forceNextEmptyLine: function forceNextEmptyLine(e) {
	      return Hb(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
	    }, getLastDescendant: function e(t) {
	      return t.lastChild ? e(t.lastChild) : t;
	    }, getNodeCssStyleDisplay: function getNodeCssStyleDisplay(e, t) {
	      if (e.prev && "comment" === e.prev.type) {
	        var _t109 = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);if (_t109) return _t109[1];
	      }var n = !1;if ("element" === e.type && "svg" === e.namespace) {
	        if (!function (e, t) {
	          var n = e;for (; n;) {
	            if (t(n)) return !0;n = n.parent;
	          }return !1;
	        }(e, function (e) {
	          return "svg:foreignObject" === e.fullName;
	        })) return "svg" === e.name ? "inline-block" : "block";n = !0;
	      }switch (t.htmlWhitespaceSensitivity) {case "strict":
	          return "inline";case "ignore":
	          return "block";default:
	          return "vue" === t.parser && e.parent && "root" === e.parent.type ? "block" : "element" === e.type && (!e.namespace || n || yA(e)) && Xb[e.name] || Yb;}
	    }, getNodeCssStyleWhiteSpace: EA, getPrettierIgnoreAttributeCommentData: function getPrettierIgnoreAttributeCommentData(e) {
	      var t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);return !!t && (!t[1] || t[1].split(/\s+/));
	    }, hasPrettierIgnore: aA, inferScriptParser: function inferScriptParser(e, t) {
	      return "script" !== e.name || e.attrMap.src ? "style" === e.name ? function (e) {
	        var t = e.attrMap.lang;
	        return t && "postcss" !== t && "css" !== t ? "scss" === t ? "scss" : "less" === t ? "less" : void 0 : "css";
	      }(e) : t && vA(e, t) ? mA(e) || !("src" in e.attrMap) && Gb(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? mA(e) : "babel";
	    }, isVueCustomBlock: bA, isVueNonHtmlBlock: vA, isDanglingSpaceSensitiveNode: function isDanglingSpaceSensitiveNode(e) {
	      return !(t = e.cssDisplay, gA(t) || "inline-block" === t || iA(e));var t;
	    }, isIndentationSensitiveNode: sA, isLeadingSpaceSensitiveNode: function isLeadingSpaceSensitiveNode(e, t) {
	      var n = function () {
	        if (Hb(e)) return !1;if (("text" === e.type || "interpolation" === e.type) && e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type)) return !0;if (!e.parent || "none" === e.parent.cssDisplay) return !1;if (DA(e.parent)) return !0;if (!e.prev && ("root" === e.parent.type || DA(e) && e.parent || iA(e.parent) || bA(e.parent, t) || (n = e.parent.cssDisplay, gA(n) || "inline-block" === n))) return !1;var n;if (e.prev && !function (e) {
	          return !gA(e);
	        }(e.prev.cssDisplay)) return !1;return !0;
	      }();return n && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : n;
	    }, isPreLikeNode: DA, isScriptLikeTag: iA, isTextLikeNode: function isTextLikeNode(e) {
	      return "text" === e.type || "comment" === e.type;
	    }, isTrailingSpaceSensitiveNode: function isTrailingSpaceSensitiveNode(e, t) {
	      return !Hb(e) && (!("text" !== e.type && "interpolation" !== e.type || !e.next || "text" !== e.next.type && "interpolation" !== e.next.type) || !(!e.parent || "none" === e.parent.cssDisplay) && (!!DA(e.parent) || !(!e.next && ("root" === e.parent.type || DA(e) && e.parent || iA(e.parent) || bA(e.parent, t) || (n = e.parent.cssDisplay, gA(n) || "inline-block" === n))) && !(e.next && !function (e) {
	        return !gA(e);
	      }(e.next.cssDisplay))));var n;
	    }, isWhitespaceSensitiveNode: function isWhitespaceSensitiveNode(e) {
	      return iA(e) || "interpolation" === e.type || sA(e);
	    }, isUnknownNamespace: yA, preferHardlineAsLeadingSpaces: function preferHardlineAsLeadingSpaces(e) {
	      return hA(e) || e.prev && cA(e.prev) || pA(e);
	    }, preferHardlineAsTrailingSpaces: cA, shouldNotPrintClosingTag: function shouldNotPrintClosingTag(e, t) {
	      return !e.isSelfClosing && !e.endSourceSpan && (aA(e) || oA(e.parent, t));
	    }, shouldPreserveContent: oA, unescapeQuoteEntities: function unescapeQuoteEntities(e) {
	      return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
	    } };var xA = FA.htmlTrim,
	      SA = FA.getLeadingAndTrailingHtmlWhitespace,
	      wA = FA.hasHtmlWhitespace,
	      BA = FA.canHaveInterpolation,
	      TA = FA.getNodeCssStyleDisplay,
	      kA = FA.isDanglingSpaceSensitiveNode,
	      NA = FA.isIndentationSensitiveNode,
	      OA = FA.isLeadingSpaceSensitiveNode,
	      PA = FA.isTrailingSpaceSensitiveNode,
	      _A = FA.isWhitespaceSensitiveNode,
	      IA = [function (e) {
	    return e.map(function (e) {
	      if ("element" === e.type && e.tagDefinition.ignoreFirstLf && 0 !== e.children.length && "text" === e.children[0].type && "\n" === e.children[0].value[0]) {
	        var _e$children2 = _toArray(e.children),
	            _t110 = _e$children2[0],
	            _n83 = _e$children2.slice(1);

	        return e.clone({ children: 1 === _t110.value.length ? _n83 : [_t110.clone({ value: _t110.value.slice(1) })].concat(_toConsumableArray(_n83)) });
	      }return e;
	    });
	  }, function (e) {
	    var t = function t(e) {
	      return "element" === e.type && e.prev && "ieConditionalStartComment" === e.prev.type && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild && "ieConditionalEndComment" === e.firstChild.type && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
	    };return e.map(function (e) {
	      if (e.children) {
	        var _n84 = e.children.map(t);if (_n84.some(Boolean)) {
	          var _t111 = [];for (var _r110 = 0; _r110 < e.children.length; _r110++) {
	            var _u50 = e.children[_r110];if (!_n84[_r110 + 1]) if (_n84[_r110]) {
	              var _e133 = _u50.prev,
	                  _n85 = _u50.firstChild,
	                  _r111 = _u50.sourceSpan.constructor,
	                  _o64 = new _r111(_e133.sourceSpan.start, _n85.sourceSpan.end),
	                  _a45 = new _r111(_o64.start, _u50.sourceSpan.end);_t111.push(_u50.clone({ condition: _e133.condition, sourceSpan: _a45, startSourceSpan: _o64, children: _u50.children.slice(1) }));
	            } else _t111.push(_u50);
	          }return e.clone({ children: _t111 });
	        }
	      }return e;
	    });
	  }, function (e) {
	    return function (e, t, n) {
	      return e.map(function (e) {
	        if (e.children) {
	          var _r112 = e.children.map(t);if (_r112.some(Boolean)) {
	            var _t112 = [];for (var _u51 = 0; _u51 < e.children.length; _u51++) {
	              var _o65 = e.children[_u51];if ("text" !== _o65.type && !_r112[_u51]) {
	                _t112.push(_o65);continue;
	              }var _a46 = "text" === _o65.type ? _o65 : _o65.clone({ type: "text", value: n(_o65) });if (0 === _t112.length || "text" !== _t112[_t112.length - 1].type) {
	                _t112.push(_a46);continue;
	              }var _i19 = _t112.pop(),
	                  _s24 = _i19.sourceSpan.constructor;_t112.push(_i19.clone({ value: _i19.value + _a46.value, sourceSpan: new _s24(_i19.sourceSpan.start, _a46.sourceSpan.end) }));
	            }return e.clone({ children: _t112 });
	          }
	        }return e;
	      });
	    }(e, function (e) {
	      return "cdata" === e.type;
	    }, function (e) {
	      return "<![CDATA[".concat(e.value, "]]>");
	    });
	  }, function (e, t) {
	    if ("html" === t.parser) return e;var n = /{{([\S\s]+?)}}/g;return e.map(function (e) {
	      if (!BA(e)) return e;var t = [];var _iteratorNormalCompletion76 = true;
	      var _didIteratorError76 = false;
	      var _iteratorError76 = undefined;

	      try {
	        for (var _iterator76 = e.children[Symbol.iterator](), _step76; !(_iteratorNormalCompletion76 = (_step76 = _iterator76.next()).done); _iteratorNormalCompletion76 = true) {
	          var _r113 = _step76.value;
	          if ("text" !== _r113.type) {
	            t.push(_r113);continue;
	          }var _e134 = _r113.sourceSpan.constructor;var _u52 = _r113.sourceSpan.start,
	              _o66 = null;var _a47 = _r113.value.split(n);for (var _n86 = 0; _n86 < _a47.length; _n86++, _u52 = _o66) {
	            var _r114 = _a47[_n86];_n86 % 2 != 0 ? (_o66 = _u52.moveBy(_r114.length + 4), t.push({ type: "interpolation", sourceSpan: new _e134(_u52, _o66), children: 0 === _r114.length ? [] : [{ type: "text", value: _r114, sourceSpan: new _e134(_u52.moveBy(2), _o66.moveBy(-2)) }] })) : (_o66 = _u52.moveBy(_r114.length), 0 !== _r114.length && t.push({ type: "text", value: _r114, sourceSpan: new _e134(_u52, _o66) }));
	          }
	        }
	      } catch (err) {
	        _didIteratorError76 = true;
	        _iteratorError76 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion76 && _iterator76.return) {
	            _iterator76.return();
	          }
	        } finally {
	          if (_didIteratorError76) {
	            throw _iteratorError76;
	          }
	        }
	      }

	      return e.clone({ children: t });
	    });
	  }, function (e) {
	    return e.map(function (e) {
	      if (!e.children) return e;if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === xA(e.children[0].value).length) return e.clone({ children: [], hasDanglingSpaces: 0 !== e.children.length });var t = _A(e),
	          n = NA(e);return e.clone({ isWhitespaceSensitive: t, isIndentationSensitive: n, children: e.children.reduce(function (e, n) {
	          if ("text" !== n.type || t) return e.concat(n);var r = [],
	              _SA = SA(n.value),
	              u = _SA.leadingWhitespace,
	              o = _SA.text,
	              a = _SA.trailingWhitespace;u && r.push({ type: "whitespace" });var i = n.sourceSpan.constructor;return o && r.push({ type: "text", value: o, sourceSpan: new i(n.sourceSpan.start.moveBy(u.length), n.sourceSpan.end.moveBy(-a.length)) }), a && r.push({ type: "whitespace" }), e.concat(r);
	        }, []).reduce(function (e, t, n, r) {
	          if ("whitespace" === t.type) return e;var u = 0 !== n && "whitespace" === r[n - 1].type,
	              o = n !== r.length - 1 && "whitespace" === r[n + 1].type;return e.concat(Object.assign({}, t, { hasLeadingSpaces: u, hasTrailingSpaces: o }));
	        }, []) });
	    });
	  }, function (e, t) {
	    return e.map(function (e) {
	      return Object.assign(e, { cssDisplay: TA(e, t) });
	    });
	  }, function (e) {
	    return e.map(function (e) {
	      return Object.assign(e, { isSelfClosing: !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan) });
	    });
	  }, function (e, t) {
	    return e.map(function (e) {
	      return "element" !== e.type ? e : Object.assign(e, { hasHtmComponentClosingTag: e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)) });
	    });
	  }, function (e, t) {
	    return e.map(function (e) {
	      return e.children ? 0 === e.children.length ? e.clone({ isDanglingSpaceSensitive: kA(e) }) : e.clone({ children: e.children.map(function (e) {
	          return Object.assign({}, e, { isLeadingSpaceSensitive: OA(e, t), isTrailingSpaceSensitive: PA(e, t) });
	        }).map(function (e, t, n) {
	          return Object.assign({}, e, { isLeadingSpaceSensitive: (0 === t || n[t - 1].isTrailingSpaceSensitive) && e.isLeadingSpaceSensitive, isTrailingSpaceSensitive: (t === n.length - 1 || n[t + 1].isLeadingSpaceSensitive) && e.isTrailingSpaceSensitive });
	        }) }) : e;
	    });
	  }, function (e) {
	    var t = function t(e) {
	      return "element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !wA(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev && "text" === e.prev.type && e.next && "text" === e.next.type;
	    };return e.map(function (e) {
	      if (e.children) {
	        var _n87 = e.children.map(t);if (_n87.some(Boolean)) {
	          var _t113 = [];for (var _r115 = 0; _r115 < e.children.length; _r115++) {
	            var _u53 = e.children[_r115];if (_n87[_r115]) {
	              var _n88 = _t113.pop(),
	                  _o67 = e.children[++_r115],
	                  _a48 = e.sourceSpan.constructor,
	                  _i20 = _o67.isTrailingSpaceSensitive,
	                  _s25 = _o67.hasTrailingSpaces;_t113.push(_n88.clone({ value: _n88.value + "<".concat(_u53.rawName, ">") + _u53.firstChild.value + "</".concat(_u53.rawName, ">") + _o67.value, sourceSpan: new _a48(_n88.sourceSpan.start, _o67.sourceSpan.end), isTrailingSpaceSensitive: _i20, hasTrailingSpaces: _s25 }));
	            } else _t113.push(_u53);
	          }return e.clone({ children: _t113 });
	        }
	      }return e;
	    });
	  }];
	  var jA = function jA(e, t) {
	    var _iteratorNormalCompletion77 = true;
	    var _didIteratorError77 = false;
	    var _iteratorError77 = undefined;

	    try {
	      for (var _iterator77 = IA[Symbol.iterator](), _step77; !(_iteratorNormalCompletion77 = (_step77 = _iterator77.next()).done); _iteratorNormalCompletion77 = true) {
	        var _n89 = _step77.value;
	        e = _n89(e, t);
	      }
	    } catch (err) {
	      _didIteratorError77 = true;
	      _iteratorError77 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion77 && _iterator77.return) {
	          _iterator77.return();
	        }
	      } finally {
	        if (_didIteratorError77) {
	          throw _iteratorError77;
	        }
	      }
	    }

	    return e;
	  };var MA = { hasPragma: function hasPragma(e) {
	      return (/^\s*<!--\s*@(format|prettier)\s*-->/.test(e)
	      );
	    }, insertPragma: function insertPragma(e) {
	      return "\x3c!-- @format --\x3e\n\n" + e.replace(/^\s*\n/, "");
	    } };var _dn$builders18 = dn.builders,
	      LA = _dn$builders18.concat,
	      RA = _dn$builders18.group;
	  var qA = { isVueEventBindingExpression: function isVueEventBindingExpression(e) {
	      var t = e.trim();return (/^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t)
	      );
	    }, printVueFor: function printVueFor(e, t) {
	      var _ref41 = function (e) {
	        var t = /([^]*?)\s+(in|of)\s+([^]*)/,
	            n = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
	            r = /^\(|\)$/g,
	            u = e.match(t);if (!u) return;var o = {};o.for = u[3].trim();var a = u[1].trim().replace(r, ""),
	            i = a.match(n);i ? (o.alias = a.replace(n, ""), o.iterator1 = i[1].trim(), i[2] && (o.iterator2 = i[2].trim())) : o.alias = a;return { left: "".concat([o.alias, o.iterator1, o.iterator2].filter(Boolean).join(",")), operator: u[2], right: o.for };
	      }(e),
	          n = _ref41.left,
	          r = _ref41.operator,
	          u = _ref41.right;

	      return LA([RA(t("function _(".concat(n, ") {}"), { parser: "babel", __isVueForBindingLeft: !0 })), " ", r, " ", t(u, { parser: "__js_expression" }, { stripTrailingHardline: !0 })]);
	    }, printVueSlotScope: function printVueSlotScope(e, t) {
	      return t("function _(".concat(e, ") {}"), { parser: "babel", __isVueSlotScope: !0 }, { stripTrailingHardline: !0 });
	    } },
	      VA = $e(function (e) {
	    !function (t, n) {
	      e.exports ? e.exports = n() : t.parseSrcset = n();
	    }(We, function () {
	      return function (e, t) {
	        var n = t && t.logger || console;function r(e) {
	          return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
	        }function u(t) {
	          var n,
	              r = t.exec(e.substring(D));if (r) return n = r[0], D += n.length, n;
	        }for (var o, a, i, s, l, c = e.length, p = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, f = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, m = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D = 0, y = [];;) {
	          if (u(d), D >= c) return y;o = u(f), a = [], "," === o.slice(-1) ? (o = o.replace(h, ""), C()) : E();
	        }function E() {
	          for (u(p), i = "", s = "in descriptor";;) {
	            if (l = e.charAt(D), "in descriptor" === s) {
	              if (r(l)) i && (a.push(i), i = "", s = "after descriptor");else {
	                if ("," === l) return D += 1, i && a.push(i), void C();if ("(" === l) i += l, s = "in parens";else {
	                  if ("" === l) return i && a.push(i), void C();i += l;
	                }
	              }
	            } else if ("in parens" === s) {
	              if (")" === l) i += l, s = "in descriptor";else {
	                if ("" === l) return a.push(i), void C();i += l;
	              }
	            } else if ("after descriptor" === s) if (r(l)) ;else {
	              if ("" === l) return void C();s = "in descriptor", D -= 1;
	            }D += 1;
	          }
	        }function C() {
	          var t,
	              r,
	              u,
	              i,
	              s,
	              l,
	              c,
	              p,
	              d,
	              f = !1,
	              h = {};for (i = 0; i < a.length; i++) {
	            l = (s = a[i])[s.length - 1], c = s.substring(0, s.length - 1), p = parseInt(c, 10), d = parseFloat(c), m.test(c) && "w" === l ? ((t || r) && (f = !0), 0 === p ? f = !0 : t = p) : g.test(c) && "x" === l ? ((t || r || u) && (f = !0), d < 0 ? f = !0 : r = d) : m.test(c) && "h" === l ? ((u || r) && (f = !0), 0 === p ? f = !0 : u = p) : f = !0;
	          }f ? n && n.error && n.error("Invalid srcset descriptor found in '" + e + "' at '" + s + "'.") : (h.url = o, t && (h.w = t), r && (h.d = r), u && (h.h = u), y.push(h));
	        }
	      };
	    });
	  });var _dn$builders19 = dn.builders,
	      WA = _dn$builders19.concat,
	      $A = _dn$builders19.ifBreak,
	      UA = _dn$builders19.join,
	      zA = _dn$builders19.line;
	  var JA = { printImgSrcset: function printImgSrcset(e) {
	      var t = VA(e, { logger: {
	          error: function error(e) {
	            throw new Error(e);
	          }
	        } }),
	          n = t.some(function (_ref42) {
	        var e = _ref42.w;
	        return e;
	      }),
	          r = t.some(function (_ref43) {
	        var e = _ref43.h;
	        return e;
	      });if (n + r + t.some(function (_ref44) {
	        var e = _ref44.d;
	        return e;
	      }) > 1) throw new Error("Mixed descriptor in srcset is not supported");var u = n ? "w" : r ? "h" : "d",
	          o = n ? "w" : r ? "h" : "x",
	          a = function a(e) {
	        return Math.max.apply(Math, _toConsumableArray(e));
	      },
	          i = t.map(function (e) {
	        return e.url;
	      }),
	          s = a(i.map(function (e) {
	        return e.length;
	      })),
	          l = t.map(function (e) {
	        return e[u];
	      }).map(function (e) {
	        return e ? e.toString() : "";
	      }),
	          c = l.map(function (e) {
	        var t = e.indexOf(".");return -1 === t ? e.length : t;
	      }),
	          p = a(c);return UA(WA([",", zA]), i.map(function (e, t) {
	        var n = [e],
	            r = l[t];if (r) {
	          var _u54 = s - e.length + 1,
	              _a49 = p - c[t],
	              _i21 = " ".repeat(_u54 + _a49);n.push($A(_i21, " "), r + o);
	        }return WA(n);
	      }));
	    }, printClassNames: function printClassNames(e) {
	      return e.trim().split(/\s+/).join(" ");
	    } };var GA = dn.builders,
	      _dn$utils3 = dn.utils,
	      HA = _dn$utils3.mapDoc,
	      XA = _dn$utils3.normalizeParts,
	      YA = Lt.replaceEndOfLineWith,
	      KA = Em.print,
	      QA = GA.breakParent,
	      ZA = GA.dedentToRoot,
	      ev = GA.fill,
	      tv = GA.group,
	      nv = GA.hardline,
	      rv = GA.ifBreak,
	      uv = GA.indent,
	      ov = GA.join,
	      av = GA.line,
	      iv = GA.literalline,
	      sv = GA.softline,
	      lv = FA.htmlTrimPreserveIndentation,
	      cv = FA.splitByHtmlWhitespace,
	      pv = FA.countChars,
	      dv = FA.countParents,
	      fv = FA.dedentString,
	      hv = FA.forceBreakChildren,
	      mv = FA.forceBreakContent,
	      gv = FA.forceNextEmptyLine,
	      Dv = FA.getLastDescendant,
	      yv = FA.getPrettierIgnoreAttributeCommentData,
	      Ev = FA.hasPrettierIgnore,
	      Cv = FA.inferScriptParser,
	      bv = FA.isVueCustomBlock,
	      Av = FA.isVueNonHtmlBlock,
	      vv = FA.isScriptLikeTag,
	      Fv = FA.isTextLikeNode,
	      xv = FA.preferHardlineAsLeadingSpaces,
	      Sv = FA.shouldNotPrintClosingTag,
	      wv = FA.shouldPreserveContent,
	      Bv = FA.unescapeQuoteEntities,
	      Tv = FA.isPreLikeNode,
	      kv = MA.insertPragma,
	      Nv = qA.printVueFor,
	      Ov = qA.printVueSlotScope,
	      Pv = qA.isVueEventBindingExpression,
	      _v = JA.printImgSrcset,
	      Iv = JA.printClassNames;
	  function jv(e) {
	    var t = XA(e);return 0 === t.length ? "" : 1 === t.length ? t[0] : GA.concat(t);
	  }function Mv(e, t, n) {
	    var r = e.getValue();if (hv(r)) return jv([QA, jv(e.map(function (e) {
	      var t = e.getValue(),
	          n = t.prev ? a(t.prev, t) : "";return jv([n ? jv([n, gv(t.prev) ? nv : ""]) : "", o(e)]);
	    }, "children"))]);var u = r.children.map(function () {
	      return Symbol("");
	    });return jv(e.map(function (e, t) {
	      var n = e.getValue();if (Fv(n)) {
	        if (n.prev && Fv(n.prev)) {
	          var _t114 = a(n.prev, n);if (_t114) return gv(n.prev) ? jv([nv, nv, o(e)]) : jv([_t114, o(e)]);
	        }return o(e);
	      }var r = [],
	          i = [],
	          s = [],
	          l = [],
	          c = n.prev ? a(n.prev, n) : "",
	          p = n.next ? a(n, n.next) : "";return c && (gv(n.prev) ? r.push(nv, nv) : c === nv ? r.push(nv) : Fv(n.prev) ? i.push(c) : i.push(rv("", sv, { groupId: u[t - 1] }))), p && (gv(n) ? Fv(n.next) && l.push(nv, nv) : p === nv ? Fv(n.next) && l.push(nv) : s.push(p)), jv([].concat(r, tv(jv([jv(i), tv(jv([o(e), jv(s)]), { id: u[t] })])), l));
	    }, "children"));function o(e) {
	      var r = e.getValue();return Ev(r) ? jv([].concat(Kv(r, t), YA(t.originalText.slice(t.locStart(r) + (r.prev && Jv(r.prev) ? eF(r).length : 0), t.locEnd(r) - (r.next && Hv(r.next) ? rF(r, t).length : 0)), iv), Zv(r, t))) : n(e);
	    }function a(e, t) {
	      return Fv(e) && Fv(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? xv(t) ? nv : av : "" : xv(t) ? nv : sv : Jv(e) && (Ev(t) || t.firstChild || t.isSelfClosing || "element" === t.type && 0 !== t.attrs.length) || "element" === e.type && e.isSelfClosing && Hv(t) ? "" : !t.isLeadingSpaceSensitive || xv(t) || Hv(t) && e.lastChild && Yv(e.lastChild) && e.lastChild.lastChild && Yv(e.lastChild.lastChild) ? nv : t.hasLeadingSpaces ? av : sv;
	    }
	  }function Lv(e, t) {
	    var n = e.startSourceSpan.end.offset;e.firstChild && Gv(e.firstChild) && (n -= tF(e).length);var r = e.endSourceSpan.start.offset;return e.lastChild && Yv(e.lastChild) ? r += nF(e, t).length : Xv(e) && (r -= rF(e.lastChild, t).length), t.originalText.slice(n, r);
	  }function Rv(e, t, n) {
	    var r = e.getValue();if (!r.attrs || 0 === r.attrs.length) return r.isSelfClosing ? " " : "";var u = r.prev && "comment" === r.prev.type && yv(r.prev.value),
	        o = "boolean" == typeof u ? function () {
	      return u;
	    } : Array.isArray(u) ? function (e) {
	      return u.includes(e.rawName);
	    } : function () {
	      return !1;
	    },
	        a = e.map(function (e) {
	      var r = e.getValue();return o(r) ? jv(YA(t.originalText.slice(t.locStart(r), t.locEnd(r)), iv)) : n(e);
	    }, "attrs"),
	        i = "element" === r.type && "script" === r.fullName && 1 === r.attrs.length && "src" === r.attrs[0].fullName && 0 === r.children.length,
	        s = [uv(jv([i ? " " : av, ov(av, a)]))];return r.firstChild && Gv(r.firstChild) || r.isSelfClosing && Xv(r.parent) || i ? s.push(r.isSelfClosing ? " " : "") : s.push(r.isSelfClosing ? av : sv), jv(s);
	  }function qv(e, t, n) {
	    var r = e.getValue();return jv([Vv(r, t), Rv(e, t, n), r.isSelfClosing ? "" : Wv(r)]);
	  }function Vv(e, t) {
	    return e.prev && Jv(e.prev) ? "" : jv([Kv(e, t), eF(e)]);
	  }function Wv(e) {
	    return e.firstChild && Gv(e.firstChild) ? "" : tF(e);
	  }function $v(e, t) {
	    return jv([e.isSelfClosing ? "" : Uv(e, t), zv(e, t)]);
	  }function Uv(e, t) {
	    return e.lastChild && Yv(e.lastChild) ? "" : jv([Qv(e, t), nF(e, t)]);
	  }function zv(e, t) {
	    return (e.next ? Hv(e.next) : Xv(e.parent)) ? "" : jv([rF(e, t), Zv(e, t)]);
	  }function Jv(e) {
	    return e.next && !Fv(e.next) && Fv(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
	  }function Gv(e) {
	    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
	  }function Hv(e) {
	    return e.prev && "docType" !== e.prev.type && !Fv(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
	  }function Xv(e) {
	    return e.lastChild && e.lastChild.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !Fv(Dv(e.lastChild)) && !Tv(e);
	  }function Yv(e) {
	    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Fv(Dv(e));
	  }function Kv(e, t) {
	    return Gv(e) ? tF(e.parent) : Hv(e) ? rF(e.prev, t) : "";
	  }function Qv(e, t) {
	    return Xv(e) ? rF(e.lastChild, t) : "";
	  }function Zv(e, t) {
	    return Yv(e) ? nF(e.parent, t) : Jv(e) ? eF(e.next) : "";
	  }function eF(e) {
	    switch (e.type) {case "ieConditionalComment":case "ieConditionalStartComment":
	        return "\x3c!--[if ".concat(e.condition);case "ieConditionalEndComment":
	        return "\x3c!--<!";case "interpolation":
	        return "{{";case "docType":
	        return "<!DOCTYPE";case "element":
	        if (e.condition) return "\x3c!--[if ".concat(e.condition, "]>\x3c!--\x3e<").concat(e.rawName);default:
	        return "<".concat(e.rawName);}
	  }function tF(e) {
	    switch (e.isSelfClosing, e.type) {case "ieConditionalComment":
	        return "]>";case "element":
	        if (e.condition) return ">\x3c!--<![endif]--\x3e";default:
	        return ">";}
	  }function nF(e, t) {
	    if (e.isSelfClosing, Sv(e, t)) return "";switch (e.type) {case "ieConditionalComment":
	        return "<!";case "element":
	        if (e.hasHtmComponentClosingTag) return "<//";default:
	        return "</".concat(e.rawName);}
	  }function rF(e, t) {
	    if (Sv(e, t)) return "";switch (e.type) {case "ieConditionalComment":case "ieConditionalEndComment":
	        return "[endif]--\x3e";case "ieConditionalStartComment":
	        return "]>\x3c!--\x3e";case "interpolation":
	        return "}}";case "element":
	        if (e.isSelfClosing) return "/>";default:
	        return ">";}
	  }function uF(e) {
	    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.value;
	    return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? YA(t, iv) : YA(fv(lv(t)), nv) : ov(av, cv(t)).parts;
	  }var oF = { preprocess: jA, print: function print(e, t, n) {
	      var r = e.getValue();switch (r.type) {case "front-matter":
	          return jv(YA(r.raw, iv));case "root":
	          return t.__onHtmlRoot && t.__onHtmlRoot(r), GA.concat([tv(Mv(e, t, n)), nv]);case "element":case "ieConditionalComment":
	          {
	            if (wv(r, t)) return jv([].concat(Kv(r, t), tv(qv(e, t, n)), YA(Lv(r, t), iv), $v(r, t), Zv(r, t)));var _o68 = 1 === r.children.length && "interpolation" === r.firstChild.type && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces,
	                _a50 = Symbol("element-attr-group-id");return jv([tv(jv([tv(qv(e, t, n), { id: _a50 }), 0 === r.children.length ? r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? av : "" : jv([mv(r) ? QA : "", (u = jv([_o68 ? rv(sv, "", { groupId: _a50 }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? av : "text" === r.firstChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive ? ZA(sv) : sv, Mv(e, t, n)]), _o68 ? rv(uv(u), u, { groupId: _a50 }) : !vv(r) && !bv(r, t) || "root" !== r.parent.type || "vue" !== t.parser || t.vueIndentScriptAndStyle ? uv(u) : u), (r.next ? Hv(r.next) : Xv(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : _o68 ? rv(sv, "", { groupId: _a50 }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? av : ("comment" === r.lastChild.type || "text" === r.lastChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t.tabWidth * dv(e, function (e) {
	              return e.parent && "root" !== e.parent.type;
	            }), "}$")).test(r.lastChild.value) ? "" : sv])])), $v(r, t)]);
	          }case "ieConditionalStartComment":case "ieConditionalEndComment":
	          return jv([Vv(r), zv(r)]);case "interpolation":
	          return jv([Vv(r, t), jv(e.map(n, "children")), zv(r, t)]);case "text":
	          if ("interpolation" === r.parent.type) {
	            var _e135 = /\n[^\S\n]*?$/,
	                _t115 = _e135.test(r.value),
	                _n90 = _t115 ? r.value.replace(_e135, "") : r.value;return jv([jv(YA(_n90, iv)), _t115 ? nv : ""]);
	          }return ev(XA([].concat(Kv(r, t), uF(r), Zv(r, t))));case "docType":
	          return jv([tv(jv([Vv(r, t), " ", r.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), zv(r, t)]);case "comment":
	          return jv([Kv(r, t), jv(YA(t.originalText.slice(t.locStart(r), t.locEnd(r)), iv)), Zv(r, t)]);case "attribute":
	          {
	            if (null === r.value) return r.rawName;var _e136 = Bv(r.value),
	                _t116 = pv(_e136, "'") < pv(_e136, '"') ? "'" : '"';return jv([r.rawName, jv(["=", _t116, jv(YA('"' === _t116 ? _e136.replace(/"/g, "&quot;") : _e136.replace(/'/g, "&apos;"), iv)), _t116])]);
	          }default:
	          throw new Error("Unexpected node type ".concat(r.type));}var u;
	    }, insertPragma: kv, massageAstNode: function massageAstNode(e, t) {
	      return delete t.sourceSpan, delete t.startSourceSpan, delete t.endSourceSpan, delete t.nameSpan, delete t.valueSpan, "text" === e.type || "comment" === e.type || gC(e) || "yaml" === e.type || "toml" === e.type ? null : ("attribute" === e.type && delete t.value, void ("docType" === e.type && delete t.value));
	    }, embed: function embed(e, t, n, r) {
	      var u = e.getValue();switch (u.type) {case "element":
	          if (vv(u) || "interpolation" === u.type) return;if (!u.isSelfClosing && Av(u, r)) {
	            var _o69 = Cv(u, r);if (!_o69) return;var _a51 = Lv(u, r);var _i22 = /^\s*$/.test(_a51),
	                _s26 = "";return _i22 || (_s26 = n(lv(_a51), { parser: _o69 }, { stripTrailingHardline: !0 }), _i22 = "" === _s26), jv([Kv(u, r), tv(qv(e, r, t)), _i22 ? "" : nv, _s26, _i22 ? "" : nv, $v(u, r), Zv(u, r)]);
	          }break;case "text":
	          if (vv(u.parent)) {
	            var _e137 = Cv(u.parent);if (_e137) {
	              var _t117 = "markdown" === _e137 ? fv(u.value.replace(/^[^\S\n]*?\n/, "")) : u.value,
	                  _o70 = { parser: _e137 };if ("html" === r.parser && "babel" === _e137) {
	                var _e138 = "script";var _t118 = u.parent.attrMap;
	                _t118 && ("module" === _t118.type || "text/babel" === _t118.type && "module" === _t118["data-type"]) && (_e138 = "module"), _o70.__babelSourceType = _e138;
	              }return GA.concat([jv([QA, Kv(u, r), n(_t117, _o70, { stripTrailingHardline: !0 }), Zv(u, r)])]);
	            }
	          } else if ("interpolation" === u.parent.type) return jv([uv(jv([av, n(u.value, Object.assign({ __isInHtmlInterpolation: !0 }, "angular" === r.parser ? { parser: "__ng_interpolation", trailingComma: "none" } : "vue" === r.parser ? { parser: "__vue_expression" } : { parser: "__js_expression" }), { stripTrailingHardline: !0 })])), u.parent.next && Hv(u.parent.next) ? " " : av]);break;case "attribute":
	          {
	            if (!u.value) break;if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r.originalText.slice(u.valueSpan.start.offset, u.valueSpan.end.offset))) return jv([u.rawName, "=", u.value]);if ("lwc" === r.parser) {
	              if (/^{[\S\s]*}$/.test(r.originalText.slice(u.valueSpan.start.offset, u.valueSpan.end.offset))) return jv([u.rawName, "=", u.value]);
	            }var _e139 = function (e, t, n) {
	              var r = function r(t) {
	                return new RegExp(t.join("|")).test(e.fullName);
	              },
	                  u = function u() {
	                return Bv(e.value);
	              };var o = !1;var a = function a(e, t) {
	                var n = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;!n || "ObjectExpression" !== n.type && "ArrayExpression" !== n.type && ("__vue_expression" !== t.parser || "TemplateLiteral" !== n.type && "StringLiteral" !== n.type) || (o = !0);
	              },
	                  i = function i(e) {
	                return tv(e);
	              },
	                  s = function s(e) {
	                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
	                return tv(jv([uv(jv([sv, e])), t ? sv : ""]));
	              },
	                  l = function l(e) {
	                return o ? i(e) : s(e);
	              },
	                  c = function c(e, n) {
	                return t(e, Object.assign({ __onHtmlBindingRoot: a }, n), { stripTrailingHardline: !0 });
	              };if ("srcset" === e.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName)) return s(_v(u()));if ("class" === e.fullName && !n.parentParser) {
	                var _e140 = u();if (!_e140.includes("{{")) return Iv(_e140);
	              }if ("style" === e.fullName && !n.parentParser) {
	                var _e141 = u();if (!_e141.includes("{{")) return s(c(_e141, { parser: "css", __isHTMLStyleAttribute: !0 }));
	              }if ("vue" === n.parser) {
	                if ("v-for" === e.fullName) return Nv(u(), c);if ("slot-scope" === e.fullName) return Ov(u(), c);var _t119 = ["^:", "^v-bind:"],
	                    _n91 = ["^v-", "^#"];if (r(["^@", "^v-on:"])) {
	                  var _e142 = u();return l(c(_e142, { parser: Pv(_e142) ? "__js_expression" : "__vue_event_binding" }));
	                }if (r(_t119)) return l(c(u(), { parser: "__vue_expression" }));if (r(_n91)) return l(c(u(), { parser: "__js_expression" }));
	              }if ("angular" === n.parser) {
	                var _t120 = function _t120(e, t) {
	                  return c(e, Object.assign({}, t, { trailingComma: "none" }));
	                },
	                    _n92 = ["^\\*"],
	                    _o71 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"],
	                    _a52 = ["^i18n(-.+)?$"];if (r(["^\\(.+\\)$", "^on-"])) return l(_t120(u(), { parser: "__ng_action" }));if (r(_o71)) return l(_t120(u(), { parser: "__ng_binding" }));if (r(_a52)) {
	                  var _t121 = u().trim();return s(ev(uF(e, _t121)), !_t121.includes("@@"));
	                }if (r(_n92)) return l(_t120(u(), { parser: "__ng_directive" }));var _i23 = /{{([\S\s]+?)}}/g,
	                    _p12 = u();if (_i23.test(_p12)) {
	                  var _e143 = [];return _p12.split(_i23).forEach(function (n, r) {
	                    if (r % 2 == 0) _e143.push(jv(YA(n, iv)));else try {
	                      _e143.push(tv(jv(["{{", uv(jv([av, _t120(n, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })])), av, "}}"])));
	                    } catch (t) {
	                      _e143.push("{{", jv(YA(n, iv)), "}}");
	                    }
	                  }), tv(jv(_e143));
	                }
	              }return null;
	            }(u, function (e, t) {
	              return n(e, Object.assign({ __isInHtmlAttribute: !0 }, t), { stripTrailingHardline: !0 });
	            }, r);if (_e139) return jv([u.rawName, '="', tv(HA(_e139, function (e) {
	              return "string" == typeof e ? e.replace(/"/g, "&quot;") : e;
	            })), '"']);break;
	          }case "front-matter":
	          return KA(u, n);}
	    } };var aF = { htmlWhitespaceSensitivity: { since: "1.15.0", category: "HTML", type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, vueIndentScriptAndStyle: { since: "1.19.0", category: "HTML", type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } },
	      iF = ["xhtml"],
	      sF = [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"],
	      lF = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: iF, extensions: sF, languageId: 146 },
	      cF = Object.freeze({ __proto__: null, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: iF, extensions: sF, languageId: 146, default: lF }),
	      pF = [".vue"],
	      dF = { name: "Vue", type: "markup", color: "#2c3e50", extensions: pF, tmScope: "text.html.vue", aceMode: "html", languageId: 391 },
	      fF = Object.freeze({ __proto__: null, name: "Vue", type: "markup", color: "#2c3e50", extensions: pF, tmScope: "text.html.vue", aceMode: "html", languageId: 391, default: dF }),
	      hF = Ue(cF),
	      mF = Ue(fF);var gF = { languages: [As(hF, function () {
	      return { name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] };
	    }), As(hF, function (e) {
	      return { since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: e.extensions.concat([".mjml"]) };
	    }), As(hF, function () {
	      return { name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] };
	    }), As(mF, function () {
	      return { since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] };
	    })], printers: { html: oF }, options: aF, parsers: { get html() {
	        return {}.parsers.html;
	      }, get vue() {
	        return {}.parsers.vue;
	      }, get angular() {
	        return {}.parsers.angular;
	      }, get lwc() {
	        return {}.parsers.lwc;
	      } } };var DF = { isPragma: function isPragma(e) {
	      return (/^\s*@(prettier|format)\s*$/.test(e)
	      );
	    }, hasPragma: function hasPragma(e) {
	      return (/^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e)
	      );
	    }, insertPragma: function insertPragma(e) {
	      return "# @format\n\n".concat(e);
	    } };var yF = Lt.getLast;
	  function EF(e, t) {
	    return e && "string" == typeof e.type && (!t || t.includes(e.type));
	  }function CF(e) {
	    return "prettier-ignore" === e.value.trim();
	  }function bF(e) {
	    return e && e.leadingComments && 0 !== e.leadingComments.length;
	  }function AF(e) {
	    return e && e.middleComments && 0 !== e.middleComments.length;
	  }function vF(e) {
	    return e && e.indicatorComment;
	  }function FF(e) {
	    return e && e.trailingComment;
	  }function xF(e) {
	    return e && e.endComments && 0 !== e.endComments.length;
	  }function SF(e) {
	    var t = [];var n = void 0;var _iteratorNormalCompletion78 = true;
	    var _didIteratorError78 = false;
	    var _iteratorError78 = undefined;

	    try {
	      for (var _iterator78 = e.split(/( +)/g)[Symbol.iterator](), _step78; !(_iteratorNormalCompletion78 = (_step78 = _iterator78.next()).done); _iteratorNormalCompletion78 = true) {
	        var _r116 = _step78.value;
	        " " !== _r116 ? " " === n ? t.push(_r116) : t.push((t.pop() || "") + _r116) : void 0 === n && t.unshift(""), n = _r116;
	      }
	    } catch (err) {
	      _didIteratorError78 = true;
	      _iteratorError78 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion78 && _iterator78.return) {
	          _iterator78.return();
	        }
	      } finally {
	        if (_didIteratorError78) {
	          throw _iteratorError78;
	        }
	      }
	    }

	    return " " === n && t.push((t.pop() || "") + " "), "" === t[0] && (t.shift(), t.unshift(" " + (t.shift() || ""))), t;
	  }var wF = { getLast: yF, getAncestorCount: function getAncestorCount(e, t) {
	      var n = 0;var r = e.stack.length - 1;for (var _u55 = 0; _u55 < r; _u55++) {
	        var _r117 = e.stack[_u55];EF(_r117) && t(_r117) && n++;
	      }return n;
	    }, isNode: EF, isEmptyNode: function isEmptyNode(e) {
	      return !(e.children && 0 !== e.children.length || function (e) {
	        return bF(e) || AF(e) || vF(e) || FF(e) || xF(e);
	      }(e));
	    }, mapNode: function e(t, n, r) {
	      return n("children" in t ? Object.assign({}, t, { children: t.children.map(function (r) {
	          return e(r, n, t);
	        }) }) : t, r);
	    }, defineShortcut: function defineShortcut(e, t, n) {
	      Object.defineProperty(e, t, { get: n, enumerable: !1 });
	    }, isNextLineEmpty: function isNextLineEmpty(e, t) {
	      var n = 0;var r = t.length;for (var _u56 = e.position.end.offset - 1; _u56 < r; _u56++) {
	        var _e144 = t[_u56];if ("\n" === _e144 && n++, 1 === n && /\S/.test(_e144)) return !1;if (2 === n) return !0;
	      }return !1;
	    }, isLastDescendantNode: function isLastDescendantNode(e) {
	      switch (e.getValue().type) {case "tag":case "anchor":case "comment":
	          return !1;}var t = e.stack.length;for (var _n93 = 1; _n93 < t; _n93++) {
	        var _t122 = e.stack[_n93],
	            _r118 = e.stack[_n93 - 1];if (Array.isArray(_r118) && "number" == typeof _t122 && _t122 !== _r118.length - 1) return !1;
	      }return !0;
	    }, getBlockValueLineContents: function getBlockValueLineContents(e, _ref45) {
	      var t = _ref45.parentIndent,
	          n = _ref45.isLastDescendant,
	          r = _ref45.options;
	      var u = e.position.start.line === e.position.end.line ? "" : r.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1],
	          o = null === e.indent ? (a = u.match(/^( *)\S/m)) ? a[1].length : 1 / 0 : e.indent - 1 + t;var a;var i = u.split("\n").map(function (e) {
	        return e.slice(o);
	      });return "preserve" === r.proseWrap || "blockLiteral" === e.type ? s(i.map(function (e) {
	        return 0 === e.length ? [] : [e];
	      })) : s(i.map(function (e) {
	        return 0 === e.length ? [] : SF(e);
	      }).reduce(function (e, t, n) {
	        return 0 === n || 0 === i[n - 1].length || 0 === t.length || /^\s/.test(t[0]) || /^\s|\s$/.test(yF(e)) ? e.concat([t]) : e.concat([e.pop().concat(t)]);
	      }, []).map(function (e) {
	        return e.reduce(function (e, t) {
	          return 0 !== e.length && /\s$/.test(yF(e)) ? e.concat(e.pop() + " " + t) : e.concat(t);
	        }, []);
	      }).map(function (e) {
	        return "never" === r.proseWrap ? [e.join(" ")] : e;
	      }));function s(t) {
	        if ("keep" === e.chomping) return 0 === yF(t).length ? t.slice(0, -1) : t;var r = 0;for (var _e145 = t.length - 1; _e145 >= 0 && 0 === t[_e145].length; _e145--) {
	          r++;
	        }return 0 === r ? t : r >= 2 && !n ? t.slice(0, -(r - 1)) : t.slice(0, -r);
	      }
	    }, getFlowScalarLineContents: function getFlowScalarLineContents(e, t, n) {
	      var r = t.split("\n").map(function (e, t, n) {
	        return 0 === t && t === n.length - 1 ? e : 0 !== t && t !== n.length - 1 ? e.trim() : 0 === t ? e.trimEnd() : e.trimStart();
	      });return "preserve" === n.proseWrap ? r.map(function (e) {
	        return 0 === e.length ? [] : [e];
	      }) : r.map(function (e) {
	        return 0 === e.length ? [] : SF(e);
	      }).reduce(function (t, n, u) {
	        return 0 === u || 0 === r[u - 1].length || 0 === n.length || "quoteDouble" === e && yF(yF(t)).endsWith("\\") ? t.concat([n]) : t.concat([t.pop().concat(n)]);
	      }, []).map(function (e) {
	        return "never" === n.proseWrap ? [e.join(" ")] : e;
	      });
	    }, getLastDescendantNode: function e(t) {
	      return "children" in t && 0 !== t.children.length ? e(yF(t.children)) : t;
	    }, hasPrettierIgnore: function hasPrettierIgnore(e) {
	      var t = e.getValue();if ("documentBody" === t.type) {
	        var _t123 = e.getParentNode();return xF(_t123.head) && CF(yF(_t123.head.endComments));
	      }return bF(t) && CF(yF(t.leadingComments));
	    }, hasLeadingComments: bF, hasMiddleComments: AF, hasIndicatorComment: vF, hasTrailingComment: FF, hasEndComments: xF };var BF = dn.builders,
	      TF = BF.conditionalGroup,
	      kF = BF.breakParent,
	      NF = BF.concat,
	      OF = BF.dedent,
	      PF = BF.dedentToRoot,
	      _F = BF.fill,
	      IF = BF.group,
	      jF = BF.hardline,
	      MF = BF.ifBreak,
	      LF = BF.join,
	      RF = BF.line,
	      qF = BF.lineSuffix,
	      VF = BF.literalline,
	      WF = BF.markAsRoot,
	      $F = BF.softline,
	      UF = Lt.replaceEndOfLineWith,
	      zF = Lt.isPreviousLineEmpty,
	      JF = DF.insertPragma,
	      GF = DF.isPragma,
	      HF = wF.getAncestorCount,
	      XF = wF.getBlockValueLineContents,
	      YF = wF.getFlowScalarLineContents,
	      KF = wF.getLast,
	      QF = wF.getLastDescendantNode,
	      ZF = wF.hasLeadingComments,
	      ex = wF.hasMiddleComments,
	      tx = wF.hasIndicatorComment,
	      nx = wF.hasTrailingComment,
	      rx = wF.hasEndComments,
	      ux = wF.hasPrettierIgnore,
	      ox = wF.isLastDescendantNode,
	      ax = wF.isNextLineEmpty,
	      ix = wF.isNode,
	      sx = wF.isEmptyNode,
	      lx = wF.defineShortcut,
	      cx = wF.mapNode;function px(e) {
	    switch (e.type) {case "document":
	        lx(e, "head", function () {
	          return e.children[0];
	        }), lx(e, "body", function () {
	          return e.children[1];
	        });break;case "documentBody":case "sequenceItem":case "flowSequenceItem":case "mappingKey":case "mappingValue":
	        lx(e, "content", function () {
	          return e.children[0];
	        });break;case "mappingItem":case "flowMappingItem":
	        lx(e, "key", function () {
	          return e.children[0];
	        }), lx(e, "value", function () {
	          return e.children[1];
	        });}return e;
	  }function dx(e, t, n, r, u) {
	    switch (e.type) {case "root":
	        return NF([LF(jF, n.map(function (t, r) {
	          var o = e.children[r],
	              a = e.children[r + 1];return NF([u(t), gx(o, a) ? NF([jF, "...", nx(o) ? NF([" ", n.call(u, "trailingComment")]) : ""]) : !a || nx(a.head) ? "" : NF([jF, "---"])]);
	        }, "children")), 0 === e.children.length || (a = QF(e), ix(a, ["blockLiteral", "blockFolded"]) && "keep" === a.chomping) ? "" : jF]);case "document":
	        {
	          var _o72 = t.children[n.getName() + 1];return LF(jF, ["head" === Dx(e, _o72, t, r) ? LF(jF, [0 === e.head.children.length && 0 === e.head.endComments.length ? "" : n.call(u, "head"), NF(["---", nx(e.head) ? NF([" ", n.call(u, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", mx(e) ? n.call(u, "body") : ""].filter(Boolean));
	        }case "documentHead":
	        return LF(jF, [].concat(n.map(u, "children"), n.map(u, "endComments")));case "documentBody":
	        {
	          var _t124 = LF(jF, n.map(u, "children")).parts,
	              _r119 = LF(jF, n.map(u, "endComments")).parts,
	              _o73 = 0 === _t124.length || 0 === _r119.length ? "" : function (e) {
	            return ix(e, ["blockFolded", "blockLiteral"]) ? "keep" === e.chomping ? "" : NF([jF, jF]) : jF;
	          }(QF(e));return NF([].concat(_t124, _o73, _r119));
	        }case "directive":
	        return NF(["%", LF(" ", [e.name].concat(e.parameters))]);case "comment":
	        return NF(["#", e.value]);case "alias":
	        return NF(["*", e.value]);case "tag":
	        return r.originalText.slice(e.position.start.offset, e.position.end.offset);case "anchor":
	        return NF(["&", e.value]);case "plain":
	        return Ax(e.type, r.originalText.slice(e.position.start.offset, e.position.end.offset), r);case "quoteDouble":case "quoteSingle":
	        {
	          var _t125 = "'",
	              _n94 = '"',
	              _u57 = r.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);if ("quoteSingle" === e.type && _u57.includes("\\") || "quoteDouble" === e.type && /\\[^"]/.test(_u57)) {
	            var _o75 = "quoteDouble" === e.type ? _n94 : _t125;return NF([_o75, Ax(e.type, _u57, r), _o75]);
	          }if (_u57.includes(_n94)) return NF([_t125, Ax(e.type, "quoteDouble" === e.type ? _u57.replace(/\\"/g, _n94).replace(/'/g, _t125.repeat(2)) : _u57, r), _t125]);if (_u57.includes(_t125)) return NF([_n94, Ax(e.type, "quoteSingle" === e.type ? _u57.replace(/''/g, _t125) : _u57, r), _n94]);var _o74 = r.singleQuote ? _t125 : _n94;return NF([_o74, Ax(e.type, _u57, r), _o74]);
	        }case "blockFolded":case "blockLiteral":
	        {
	          var _t126 = HF(n, function (e) {
	            return ix(e, ["sequence", "mapping"]);
	          }),
	              _o76 = ox(n);return NF(["blockFolded" === e.type ? ">" : "|", null === e.indent ? "" : e.indent.toString(), "clip" === e.chomping ? "" : "keep" === e.chomping ? "+" : "-", tx(e) ? NF([" ", n.call(u, "indicatorComment")]) : "", (null === e.indent ? OF : PF)(fx(null === e.indent ? r.tabWidth : e.indent - 1 + _t126, NF(XF(e, { parentIndent: _t126, isLastDescendant: _o76, options: r }).reduce(function (t, n, r, u) {
	            return t.concat(0 === r ? jF : "", _F(LF(RF, n).parts), r !== u.length - 1 ? 0 === n.length ? jF : WF(VF) : "keep" === e.chomping && _o76 ? 0 === n.length ? PF(jF) : PF(VF) : "");
	          }, []))))]);
	        }case "sequence":
	        return LF(jF, n.map(u, "children"));case "sequenceItem":
	        return NF(["- ", fx(2, e.content ? n.call(u, "content") : "")]);case "mappingKey":case "mappingValue":
	        return e.content ? n.call(u, "content") : "";case "mapping":
	        return LF(jF, n.map(u, "children"));case "mappingItem":case "flowMappingItem":
	        {
	          var _o77 = sx(e.key),
	              _a53 = sx(e.value);if (_o77 && _a53) return NF([": "]);var _s27 = n.call(u, "key"),
	              _l21 = n.call(u, "value");if (_a53) return "flowMappingItem" === e.type && "flowMapping" === t.type ? _s27 : "mappingItem" !== e.type || !yx(e.key.content, r) || nx(e.key.content) || t.tag && "tag:yaml.org,2002:set" === t.tag.value ? NF(["? ", fx(2, _s27)]) : NF([_s27, Ex(e) ? " " : "", ":"]);if (_o77) return NF([": ", fx(2, _l21)]);var _c16 = Symbol("mappingKey");return ZF(e.value) || !hx(e.key.content) ? NF(["? ", fx(2, _s27), jF, LF("", n.map(u, "value", "leadingComments").map(function (e) {
	            return NF([e, jF]);
	          })), ": ", fx(2, _l21)]) : !function (e) {
	            if (!e) return !0;switch (e.type) {case "plain":case "quoteDouble":case "quoteSingle":
	                return e.position.start.line === e.position.end.line;case "alias":
	                return !0;default:
	                return !1;}
	          }(e.key.content) || ZF(e.key.content) || ex(e.key.content) || nx(e.key.content) || rx(e.key) || ZF(e.value.content) || ex(e.value.content) || rx(e.value) || !yx(e.value.content, r) ? TF([NF([IF(NF([MF("? "), IF(fx(2, _s27), { id: _c16 })])), MF(NF([jF, ": ", fx(2, _l21)]), i(NF([Ex(e) ? " " : "", ":", ZF(e.value.content) || rx(e.value) && e.value.content && !ix(e.value.content, ["mapping", "sequence"]) || "mapping" === t.type && nx(e.key.content) && hx(e.value.content) || ix(e.value.content, ["mapping", "sequence"]) && null === e.value.content.tag && null === e.value.content.anchor ? jF : e.value.content ? RF : "", _l21])), { groupId: _c16 })])]) : NF([_s27, Ex(e) ? " " : "", ": ", _l21]);
	        }case "flowMapping":case "flowSequence":
	        {
	          var _t127 = "flowMapping" === e.type ? "{" : "[",
	              _a54 = "flowMapping" === e.type ? "}" : "]",
	              _s28 = "flowMapping" === e.type && 0 !== e.children.length && r.bracketSpacing ? RF : $F,
	              _l22 = 0 !== e.children.length && "flowMappingItem" === (o = KF(e.children)).type && sx(o.key) && sx(o.value);return NF([_t127, i(NF([_s28, NF(n.map(function (t, n) {
	            return NF([u(t), n === e.children.length - 1 ? "" : NF([",", RF, e.children[n].position.start.line !== e.children[n + 1].position.start.line ? bx(t, r.originalText) : ""])]);
	          }, "children")), MF(",", "")])), _l22 ? "" : _s28, _a54]);
	        }case "flowSequenceItem":
	        return n.call(u, "content");default:
	        throw new Error("Unexpected node type ".concat(e.type));}var o, a;function i(e) {
	      return BF.align(" ".repeat(r.tabWidth), e);
	    }
	  }function fx(e, t) {
	    return "number" == typeof e && e > 0 ? BF.align(" ".repeat(e), t) : BF.align(e, t);
	  }function hx(e) {
	    if (!e) return !0;switch (e.type) {case "plain":case "quoteDouble":case "quoteSingle":case "alias":case "flowMapping":case "flowSequence":
	        return !0;default:
	        return !1;}
	  }function mx(e) {
	    return 0 !== e.body.children.length || rx(e.body);
	  }function gx(e, t) {
	    return nx(e) || t && (0 !== t.head.children.length || rx(t.head));
	  }function Dx(e, t, n, r) {
	    return n.children[0] === e && /---(\s|$)/.test(r.originalText.slice(r.locStart(e), r.locStart(e) + 4)) || 0 !== e.head.children.length || rx(e.head) || nx(e.head) ? "head" : !gx(e, t) && !!t && "root";
	  }function yx(e, t) {
	    if (!e) return !0;switch (e.type) {case "plain":case "quoteSingle":case "quoteDouble":
	        break;case "alias":
	        return !0;default:
	        return !1;}if ("preserve" === t.proseWrap) return e.position.start.line === e.position.end.line;if (/\\$/m.test(t.originalText.slice(e.position.start.offset, e.position.end.offset))) return !1;switch (t.proseWrap) {case "never":
	        return !e.value.includes("\n");case "always":
	        return !/[\n ]/.test(e.value);default:
	        return !1;}
	  }function Ex(e) {
	    return e.key.content && "alias" === e.key.content.type;
	  }function Cx(e) {
	    return rx(e) && !ix(e, ["documentHead", "documentBody"]);
	  }function bx(e, t) {
	    var n = e.getValue(),
	        r = e.stack[0];return r.isNextEmptyLinePrintedChecklist = r.isNextEmptyLinePrintedChecklist || [], r.isNextEmptyLinePrintedChecklist[n.position.end.line] || !ax(n, t) || (r.isNextEmptyLinePrintedChecklist[n.position.end.line] = !0, Cx(e.getParentNode())) ? "" : $F;
	  }function Ax(e, t, n) {
	    var r = YF(e, t, n);return LF(jF, r.map(function (e) {
	      return _F(LF(RF, e).parts);
	    }));
	  }var vx = { preprocess: function preprocess(e) {
	      return cx(e, px);
	    }, print: function print(e, t, n) {
	      var r = e.getValue(),
	          u = e.getParentNode(),
	          o = r.tag ? e.call(n, "tag") : "",
	          a = r.anchor ? e.call(n, "anchor") : "",
	          i = ix(r, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !ox(e) ? bx(e, t.originalText) : "";return NF(["mappingValue" !== r.type && ZF(r) ? NF([LF(jF, e.map(n, "leadingComments")), jF]) : "", o, o && a ? " " : "", a, o || a ? ix(r, ["sequence", "mapping"]) && !ex(r) ? jF : " " : "", ex(r) ? NF([1 === r.middleComments.length ? "" : jF, LF(jF, e.map(n, "middleComments")), jF]) : "", ux(e) ? NF(UF(t.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd(), VF)) : IF(dx(r, u, e, t, n)), nx(r) && !ix(r, ["document", "documentHead"]) ? qF(NF(["mappingValue" !== r.type || r.content ? " " : "", "mappingKey" === u.type && "mapping" === e.getParentNode(2).type && hx(r) ? "" : kF, e.call(n, "trailingComment")])) : "", Cx(r) ? fx("sequenceItem" === r.type ? 2 : 0, NF([jF, LF(jF, e.map(function (e) {
	        return NF([zF(t.originalText, e.getValue(), t.locStart) ? jF : "", n(e)]);
	      }, "endComments"))])) : "", i]);
	    }, massageAstNode: function massageAstNode(e, t) {
	      if (ix(t)) switch (delete t.position, t.type) {case "comment":
	          if (GF(t.value)) return null;break;case "quoteDouble":case "quoteSingle":
	          t.type = "quote";}
	    }, insertPragma: JF },
	      Fx = { bracketSpacing: Bh.bracketSpacing, singleQuote: Bh.singleQuote, proseWrap: Bh.proseWrap },
	      xx = ["yml"],
	      Sx = [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"],
	      wx = [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"],
	      Bx = { name: "YAML", type: "data", tmScope: "source.yaml", aliases: xx, extensions: Sx, filenames: wx, aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };var Tx = [dm, DD, vy, $y, mC, gF, { languages: [As(Ue(Object.freeze({ __proto__: null, name: "YAML", type: "data", tmScope: "source.yaml", aliases: xx, extensions: Sx, filenames: wx, aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407, default: Bx })), function (e) {
	      return { since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: e.filenames.filter(function (e) {
	          return "yarn.lock" !== e;
	        }) };
	    })], printers: { yaml: vx }, options: Fx, parsers: { get yaml() {
	        return {}.parsers.yaml;
	      } } }];var kx = ht.version,
	      Nx = yt.getSupportInfo,
	      Ox = Tx.map(function (t) {
	    return e(t, ["parsers"]);
	  });function Px(e) {
	    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	    return function () {
	      for (var _len13 = arguments.length, n = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
	        n[_key13] = arguments[_key13];
	      }

	      var r = n[t] || {},
	          u = r.plugins || [];return n[t] = Object.assign({}, r, { plugins: [].concat(_toConsumableArray(Ox), _toConsumableArray(Array.isArray(u) ? u : Object.values(u))) }), e.apply(undefined, n);
	    };
	  }var _x = Px(Ki.formatWithCursor);return { formatWithCursor: _x, format: function format(e, t) {
	      return _x(e, t).formatted;
	    }, check: function check(e, t) {
	      var _x29 = _x(e, t),
	          n = _x29.formatted;

	      return n === e;
	    },
	    doc: dn, getSupportInfo: Px(Nx, 0), version: kx, util: bs, __debug: { parse: Px(Ki.parse), formatAST: Px(Ki.formatAST), formatDoc: Px(Ki.formatDoc), printToDoc: Px(Ki.printToDoc), printDocToString: Px(Ki.printDocToString) } };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(5);
	} else {
	  module.exports = __webpack_require__(7);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.13.1
	 * react-dom-server.browser.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var k = __webpack_require__(6),
	    l = __webpack_require__(2);function q(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
	    b += "&args[]=" + encodeURIComponent(arguments[c]);
	  }return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var t = "function" === typeof Symbol && Symbol.for,
	    aa = t ? Symbol.for("react.portal") : 60106,
	    u = t ? Symbol.for("react.fragment") : 60107,
	    ba = t ? Symbol.for("react.strict_mode") : 60108,
	    ca = t ? Symbol.for("react.profiler") : 60114,
	    v = t ? Symbol.for("react.provider") : 60109,
	    da = t ? Symbol.for("react.context") : 60110,
	    ea = t ? Symbol.for("react.concurrent_mode") : 60111,
	    fa = t ? Symbol.for("react.forward_ref") : 60112,
	    B = t ? Symbol.for("react.suspense") : 60113,
	    ha = t ? Symbol.for("react.suspense_list") : 60120,
	    ia = t ? Symbol.for("react.memo") : 60115,
	    ja = t ? Symbol.for("react.lazy") : 60116,
	    ka = t ? Symbol.for("react.block") : 60121,
	    la = t ? Symbol.for("react.fundamental") : 60117,
	    ma = t ? Symbol.for("react.scope") : 60119;function na(a) {
	  if (-1 === a._status) {
	    a._status = 0;var b = a._ctor;b = b();a._result = b;b.then(function (c) {
	      0 === a._status && (c = c.default, a._status = 1, a._result = c);
	    }, function (c) {
	      0 === a._status && (a._status = 2, a._result = c);
	    });
	  }
	}
	function C(a) {
	  if (null == a) return null;if ("function" === typeof a) return a.displayName || a.name || null;if ("string" === typeof a) return a;switch (a) {case u:
	      return "Fragment";case aa:
	      return "Portal";case ca:
	      return "Profiler";case ba:
	      return "StrictMode";case B:
	      return "Suspense";case ha:
	      return "SuspenseList";}if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) switch (a.$$typeof) {case da:
	      return "Context.Consumer";case v:
	      return "Context.Provider";case fa:
	      var b = a.render;b = b.displayName || b.name || "";return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
	    case ia:
	      return C(a.type);case ka:
	      return C(a.render);case ja:
	      if (a = 1 === a._status ? a._result : null) return C(a);}return null;
	}var D = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher") || (D.ReactCurrentDispatcher = { current: null });D.hasOwnProperty("ReactCurrentBatchConfig") || (D.ReactCurrentBatchConfig = { suspense: null });var oa = {};function E(a, b) {
	  for (var c = a._threadCount | 0; c <= b; c++) {
	    a[c] = a._currentValue2, a._threadCount = c + 1;
	  }
	}
	function pa(a, b, c, d) {
	  if (d && (d = a.contextType, "object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && null !== d)) return E(d, c), d[c];if (a = a.contextTypes) {
	    c = {};for (var f in a) {
	      c[f] = b[f];
	    }b = c;
	  } else b = oa;return b;
	}for (var F = new Uint16Array(16), H = 0; 15 > H; H++) {
	  F[H] = H + 1;
	}F[15] = 0;
	var qa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    ra = Object.prototype.hasOwnProperty,
	    sa = {},
	    ta = {};
	function ua(a) {
	  if (ra.call(ta, a)) return !0;if (ra.call(sa, a)) return !1;if (qa.test(a)) return ta[a] = !0;sa[a] = !0;return !1;
	}function va(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "function":case "symbol":
	      return !0;case "boolean":
	      if (d) return !1;if (null !== c) return !c.acceptsBooleans;a = a.toLowerCase().slice(0, 5);return "data-" !== a && "aria-" !== a;default:
	      return !1;}
	}
	function wa(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || va(a, b, c, d)) return !0;if (d) return !1;if (null !== c) switch (c.type) {case 3:
	      return !b;case 4:
	      return !1 === b;case 5:
	      return isNaN(b);case 6:
	      return isNaN(b) || 1 > b;}return !1;
	}function J(a, b, c, d, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;this.attributeName = d;this.attributeNamespace = f;this.mustUseProperty = c;this.propertyName = a;this.type = b;this.sanitizeURL = g;
	}var K = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  K[a] = new J(a, 0, !1, a, null, !1);
	});[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];K[b] = new J(b, 1, !1, a[1], null, !1);
	});["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  K[a] = new J(a, 2, !1, a.toLowerCase(), null, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  K[a] = new J(a, 2, !1, a, null, !1);
	});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  K[a] = new J(a, 3, !1, a.toLowerCase(), null, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  K[a] = new J(a, 3, !0, a, null, !1);
	});["capture", "download"].forEach(function (a) {
	  K[a] = new J(a, 4, !1, a, null, !1);
	});["cols", "rows", "size", "span"].forEach(function (a) {
	  K[a] = new J(a, 6, !1, a, null, !1);
	});["rowSpan", "start"].forEach(function (a) {
	  K[a] = new J(a, 5, !1, a.toLowerCase(), null, !1);
	});var L = /[\-:]([a-z])/g;function M(a) {
	  return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(L, M);K[b] = new J(b, 1, !1, a, null, !1);
	});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(L, M);K[b] = new J(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
	});["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(L, M);K[b] = new J(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
	});["tabIndex", "crossOrigin"].forEach(function (a) {
	  K[a] = new J(a, 1, !1, a.toLowerCase(), null, !1);
	});
	K.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);["src", "href", "action", "formAction"].forEach(function (a) {
	  K[a] = new J(a, 1, !1, a.toLowerCase(), null, !0);
	});var xa = /["'&<>]/;
	function N(a) {
	  if ("boolean" === typeof a || "number" === typeof a) return "" + a;a = "" + a;var b = xa.exec(a);if (b) {
	    var c = "",
	        d,
	        f = 0;for (d = b.index; d < a.length; d++) {
	      switch (a.charCodeAt(d)) {case 34:
	          b = "&quot;";break;case 38:
	          b = "&amp;";break;case 39:
	          b = "&#x27;";break;case 60:
	          b = "&lt;";break;case 62:
	          b = "&gt;";break;default:
	          continue;}f !== d && (c += a.substring(f, d));f = d + 1;c += b;
	    }a = f !== d ? c + a.substring(f, d) : c;
	  }return a;
	}
	function ya(a, b) {
	  var c = K.hasOwnProperty(a) ? K[a] : null;var d;if (d = "style" !== a) d = null !== c ? 0 === c.type : !(2 < a.length) || "o" !== a[0] && "O" !== a[0] || "n" !== a[1] && "N" !== a[1] ? !1 : !0;if (d || wa(a, b, c, !1)) return "";if (null !== c) {
	    a = c.attributeName;d = c.type;if (3 === d || 4 === d && !0 === b) return a + '=""';c.sanitizeURL && (b = "" + b);return a + '="' + (N(b) + '"');
	  }return ua(a) ? a + '="' + (N(b) + '"') : "";
	}function za(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var Aa = "function" === typeof Object.is ? Object.is : za,
	    O = null,
	    P = null,
	    Q = null,
	    R = !1,
	    S = !1,
	    U = null,
	    V = 0;function W() {
	  if (null === O) throw Error(q(321));return O;
	}function Ba() {
	  if (0 < V) throw Error(q(312));return { memoizedState: null, queue: null, next: null };
	}function Ca() {
	  null === Q ? null === P ? (R = !1, P = Q = Ba()) : (R = !0, Q = P) : null === Q.next ? (R = !1, Q = Q.next = Ba()) : (R = !0, Q = Q.next);return Q;
	}function Da(a, b, c, d) {
	  for (; S;) {
	    S = !1, V += 1, Q = null, c = a(b, d);
	  }P = O = null;V = 0;Q = U = null;return c;
	}function Ea(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}
	function Fa(a, b, c) {
	  O = W();Q = Ca();if (R) {
	    var d = Q.queue;b = d.dispatch;if (null !== U && (c = U.get(d), void 0 !== c)) {
	      U.delete(d);d = Q.memoizedState;do {
	        d = a(d, c.action), c = c.next;
	      } while (null !== c);Q.memoizedState = d;return [d, b];
	    }return [Q.memoizedState, b];
	  }a = a === Ea ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;Q.memoizedState = a;a = Q.queue = { last: null, dispatch: null };a = a.dispatch = Ga.bind(null, O, a);return [Q.memoizedState, a];
	}
	function Ga(a, b, c) {
	  if (!(25 > V)) throw Error(q(301));if (a === O) if (S = !0, a = { action: c, next: null }, null === U && (U = new Map()), c = U.get(b), void 0 === c) U.set(b, a);else {
	    for (b = c; null !== b.next;) {
	      b = b.next;
	    }b.next = a;
	  }
	}function Ha() {}
	var X = 0,
	    Ia = { readContext: function readContext(a) {
	    var b = X;E(a, b);return a[b];
	  }, useContext: function useContext(a) {
	    W();var b = X;E(a, b);return a[b];
	  }, useMemo: function useMemo(a, b) {
	    O = W();Q = Ca();b = void 0 === b ? null : b;if (null !== Q) {
	      var c = Q.memoizedState;if (null !== c && null !== b) {
	        a: {
	          var d = c[1];if (null === d) d = !1;else {
	            for (var f = 0; f < d.length && f < b.length; f++) {
	              if (!Aa(b[f], d[f])) {
	                d = !1;break a;
	              }
	            }d = !0;
	          }
	        }if (d) return c[0];
	      }
	    }a = a();Q.memoizedState = [a, b];return a;
	  }, useReducer: Fa, useRef: function useRef(a) {
	    O = W();Q = Ca();var b = Q.memoizedState;return null === b ? (a = { current: a }, Q.memoizedState = a) : b;
	  }, useState: function useState(a) {
	    return Fa(Ea, a);
	  }, useLayoutEffect: function useLayoutEffect() {}, useCallback: function useCallback(a) {
	    return a;
	  }, useImperativeHandle: Ha, useEffect: Ha, useDebugValue: Ha, useResponder: function useResponder(a, b) {
	    return { props: b, responder: a };
	  }, useDeferredValue: function useDeferredValue(a) {
	    W();return a;
	  }, useTransition: function useTransition() {
	    W();return [function (a) {
	      a();
	    }, !1];
	  } },
	    Ja = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
	function Ka(a) {
	  switch (a) {case "svg":
	      return "http://www.w3.org/2000/svg";case "math":
	      return "http://www.w3.org/1998/Math/MathML";default:
	      return "http://www.w3.org/1999/xhtml";}
	}
	var La = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
	    Ma = k({ menuitem: !0 }, La),
	    Y = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0,
	  gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
	    Na = ["Webkit", "ms", "Moz", "O"];Object.keys(Y).forEach(function (a) {
	  Na.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);Y[b] = Y[a];
	  });
	});
	var Oa = /([A-Z])/g,
	    Pa = /^ms-/,
	    Z = l.Children.toArray,
	    Qa = D.ReactCurrentDispatcher,
	    Ra = { listing: !0, pre: !0, textarea: !0 },
	    Sa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
	    Ta = {},
	    Ua = {};function Va(a) {
	  if (void 0 === a || null === a) return a;var b = "";l.Children.forEach(a, function (a) {
	    null != a && (b += a);
	  });return b;
	}var Wa = Object.prototype.hasOwnProperty,
	    Xa = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };function Ya(a, b) {
	  if (void 0 === a) throw Error(q(152, C(b) || "Component"));
	}
	function Za(a, b, c) {
	  function d(d, g) {
	    var e = g.prototype && g.prototype.isReactComponent,
	        f = pa(g, b, c, e),
	        x = [],
	        h = !1,
	        m = { isMounted: function isMounted() {
	        return !1;
	      }, enqueueForceUpdate: function enqueueForceUpdate() {
	        if (null === x) return null;
	      }, enqueueReplaceState: function enqueueReplaceState(a, c) {
	        h = !0;x = [c];
	      }, enqueueSetState: function enqueueSetState(a, c) {
	        if (null === x) return null;x.push(c);
	      } };if (e) {
	      if (e = new g(d.props, f, m), "function" === typeof g.getDerivedStateFromProps) {
	        var w = g.getDerivedStateFromProps.call(null, d.props, e.state);null != w && (e.state = k({}, e.state, w));
	      }
	    } else if (O = {}, e = g(d.props, f, m), e = Da(g, d.props, e, f), null == e || null == e.render) {
	      a = e;Ya(a, g);return;
	    }e.props = d.props;e.context = f;e.updater = m;m = e.state;void 0 === m && (e.state = m = null);if ("function" === typeof e.UNSAFE_componentWillMount || "function" === typeof e.componentWillMount) if ("function" === typeof e.componentWillMount && "function" !== typeof g.getDerivedStateFromProps && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && "function" !== typeof g.getDerivedStateFromProps && e.UNSAFE_componentWillMount(), x.length) {
	      m = x;var r = h;x = null;h = !1;if (r && 1 === m.length) e.state = m[0];else {
	        w = r ? m[0] : e.state;var y = !0;for (r = r ? 1 : 0; r < m.length; r++) {
	          var p = m[r];p = "function" === typeof p ? p.call(e, w, d.props, f) : p;null != p && (y ? (y = !1, w = k({}, w, p)) : k(w, p));
	        }e.state = w;
	      }
	    } else x = null;a = e.render();Ya(a, g);if ("function" === typeof e.getChildContext && (d = g.childContextTypes, "object" === (typeof d === "undefined" ? "undefined" : _typeof(d)))) {
	      var A = e.getChildContext();for (var T in A) {
	        if (!(T in d)) throw Error(q(108, C(g) || "Unknown", T));
	      }
	    }A && (b = k({}, b, A));
	  }for (; l.isValidElement(a);) {
	    var f = a,
	        g = f.type;if ("function" !== typeof g) break;d(f, g);
	  }return { child: a, context: b };
	}
	var $a = function () {
	  function a(a, b) {
	    l.isValidElement(a) ? a.type !== u ? a = [a] : (a = a.props.children, a = l.isValidElement(a) ? [a] : Z(a)) : a = Z(a);a = { type: null, domNamespace: Ja.html, children: a, childIndex: 0, context: oa, footer: "" };var c = F[0];if (0 === c) {
	      var g = F;c = g.length;var d = 2 * c;if (!(65536 >= d)) throw Error(q(304));var h = new Uint16Array(d);h.set(g);F = h;F[0] = c + 1;for (g = c; g < d - 1; g++) {
	        F[g] = g + 1;
	      }F[d - 1] = 0;
	    } else F[0] = F[c];this.threadID = c;this.stack = [a];this.exhausted = !1;this.currentSelectValue = null;this.previousWasTextNode = !1;this.makeStaticMarkup = b;this.suspenseDepth = 0;this.contextIndex = -1;this.contextStack = [];this.contextValueStack = [];
	  }var b = a.prototype;b.destroy = function () {
	    if (!this.exhausted) {
	      this.exhausted = !0;this.clearProviders();var a = this.threadID;F[a] = F[0];F[0] = a;
	    }
	  };b.pushProvider = function (a) {
	    var c = ++this.contextIndex,
	        b = a.type._context,
	        g = this.threadID;E(b, g);var x = b[g];this.contextStack[c] = b;this.contextValueStack[c] = x;b[g] = a.props.value;
	  };b.popProvider = function () {
	    var a = this.contextIndex,
	        b = this.contextStack[a],
	        f = this.contextValueStack[a];
	    this.contextStack[a] = null;this.contextValueStack[a] = null;this.contextIndex--;b[this.threadID] = f;
	  };b.clearProviders = function () {
	    for (var a = this.contextIndex; 0 <= a; a--) {
	      this.contextStack[a][this.threadID] = this.contextValueStack[a];
	    }
	  };b.read = function (a) {
	    if (this.exhausted) return null;var b = X;X = this.threadID;var c = Qa.current;Qa.current = Ia;try {
	      for (var g = [""], x = !1; g[0].length < a;) {
	        if (0 === this.stack.length) {
	          this.exhausted = !0;var h = this.threadID;F[h] = F[0];F[0] = h;break;
	        }var e = this.stack[this.stack.length - 1];if (x || e.childIndex >= e.children.length) {
	          var I = e.footer;"" !== I && (this.previousWasTextNode = !1);this.stack.pop();if ("select" === e.type) this.currentSelectValue = null;else if (null != e.type && null != e.type.type && e.type.type.$$typeof === v) this.popProvider(e.type);else if (e.type === B) {
	            this.suspenseDepth--;var G = g.pop();if (x) {
	              x = !1;var n = e.fallbackFrame;if (!n) throw Error(q(303));this.stack.push(n);g[this.suspenseDepth] += "\x3c!--$!--\x3e";continue;
	            } else g[this.suspenseDepth] += G;
	          }g[this.suspenseDepth] += I;
	        } else {
	          var m = e.children[e.childIndex++],
	              w = "";try {
	            w += this.render(m, e.context, e.domNamespace);
	          } catch (r) {
	            if (null != r && "function" === typeof r.then) throw Error(q(294));throw r;
	          } finally {}g.length <= this.suspenseDepth && g.push("");g[this.suspenseDepth] += w;
	        }
	      }return g[0];
	    } finally {
	      Qa.current = c, X = b;
	    }
	  };b.render = function (a, b, f) {
	    if ("string" === typeof a || "number" === typeof a) {
	      f = "" + a;if ("" === f) return "";if (this.makeStaticMarkup) return N(f);if (this.previousWasTextNode) return "\x3c!-- --\x3e" + N(f);this.previousWasTextNode = !0;return N(f);
	    }b = Za(a, b, this.threadID);a = b.child;
	    b = b.context;if (null === a || !1 === a) return "";if (!l.isValidElement(a)) {
	      if (null != a && null != a.$$typeof) {
	        f = a.$$typeof;if (f === aa) throw Error(q(257));throw Error(q(258, f.toString()));
	      }a = Z(a);this.stack.push({ type: null, domNamespace: f, children: a, childIndex: 0, context: b, footer: "" });return "";
	    }var c = a.type;if ("string" === typeof c) return this.renderDOM(a, b, f);switch (c) {case ba:case ea:case ca:case ha:case u:
	        return a = Z(a.props.children), this.stack.push({ type: null, domNamespace: f, children: a, childIndex: 0, context: b, footer: "" }), "";case B:
	        throw Error(q(294));}if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) && null !== c) switch (c.$$typeof) {case fa:
	        O = {};var d = c.render(a.props, a.ref);d = Da(c.render, a.props, d, a.ref);d = Z(d);this.stack.push({ type: null, domNamespace: f, children: d, childIndex: 0, context: b, footer: "" });return "";case ia:
	        return a = [l.createElement(c.type, k({ ref: a.ref }, a.props))], this.stack.push({ type: null, domNamespace: f, children: a, childIndex: 0, context: b, footer: "" }), "";case v:
	        return c = Z(a.props.children), f = { type: a, domNamespace: f, children: c, childIndex: 0,
	          context: b, footer: "" }, this.pushProvider(a), this.stack.push(f), "";case da:
	        c = a.type;d = a.props;var h = this.threadID;E(c, h);c = Z(d.children(c[h]));this.stack.push({ type: a, domNamespace: f, children: c, childIndex: 0, context: b, footer: "" });return "";case la:
	        throw Error(q(338));case ja:
	        switch (c = a.type, na(c), c._status) {case 1:
	            return a = [l.createElement(c._result, k({ ref: a.ref }, a.props))], this.stack.push({ type: null, domNamespace: f, children: a, childIndex: 0, context: b, footer: "" }), "";case 2:
	            throw c._result;default:
	            throw Error(q(295));
	        }case ma:
	        throw Error(q(343));}throw Error(q(130, null == c ? c : typeof c === "undefined" ? "undefined" : _typeof(c), ""));
	  };b.renderDOM = function (a, b, f) {
	    var c = a.type.toLowerCase();f === Ja.html && Ka(c);if (!Ta.hasOwnProperty(c)) {
	      if (!Sa.test(c)) throw Error(q(65, c));Ta[c] = !0;
	    }var d = a.props;if ("input" === c) d = k({ type: void 0 }, d, { defaultChecked: void 0, defaultValue: void 0, value: null != d.value ? d.value : d.defaultValue, checked: null != d.checked ? d.checked : d.defaultChecked });else if ("textarea" === c) {
	      var h = d.value;if (null == h) {
	        h = d.defaultValue;var e = d.children;if (null != e) {
	          if (null != h) throw Error(q(92));if (Array.isArray(e)) {
	            if (!(1 >= e.length)) throw Error(q(93));e = e[0];
	          }h = "" + e;
	        }null == h && (h = "");
	      }d = k({}, d, { value: void 0, children: "" + h });
	    } else if ("select" === c) this.currentSelectValue = null != d.value ? d.value : d.defaultValue, d = k({}, d, { value: void 0 });else if ("option" === c) {
	      e = this.currentSelectValue;var I = Va(d.children);if (null != e) {
	        var G = null != d.value ? d.value + "" : I;h = !1;if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
	          if ("" + e[n] === G) {
	            h = !0;break;
	          }
	        } else h = "" + e === G;d = k({ selected: void 0, children: void 0 }, d, { selected: h, children: I });
	      }
	    }if (h = d) {
	      if (Ma[c] && (null != h.children || null != h.dangerouslySetInnerHTML)) throw Error(q(137, c, ""));if (null != h.dangerouslySetInnerHTML) {
	        if (null != h.children) throw Error(q(60));if (!("object" === _typeof(h.dangerouslySetInnerHTML) && "__html" in h.dangerouslySetInnerHTML)) throw Error(q(61));
	      }if (null != h.style && "object" !== _typeof(h.style)) throw Error(q(62, ""));
	    }h = d;e = this.makeStaticMarkup;I = 1 === this.stack.length;G = "<" + a.type;for (z in h) {
	      if (Wa.call(h, z)) {
	        var m = h[z];if (null != m) {
	          if ("style" === z) {
	            n = void 0;var w = "",
	                r = "";for (n in m) {
	              if (m.hasOwnProperty(n)) {
	                var y = 0 === n.indexOf("--"),
	                    p = m[n];if (null != p) {
	                  if (y) var A = n;else if (A = n, Ua.hasOwnProperty(A)) A = Ua[A];else {
	                    var T = A.replace(Oa, "-$1").toLowerCase().replace(Pa, "-ms-");A = Ua[A] = T;
	                  }w += r + A + ":";r = n;y = null == p || "boolean" === typeof p || "" === p ? "" : y || "number" !== typeof p || 0 === p || Y.hasOwnProperty(r) && Y[r] ? ("" + p).trim() : p + "px";w += y;r = ";";
	                }
	              }
	            }m = w || null;
	          }n = null;b: if (y = c, p = h, -1 === y.indexOf("-")) y = "string" === typeof p.is;else switch (y) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
	              y = !1;break b;default:
	              y = !0;}y ? Xa.hasOwnProperty(z) || (n = z, n = ua(n) && null != m ? n + '="' + (N(m) + '"') : "") : n = ya(z, m);n && (G += " " + n);
	        }
	      }
	    }e || I && (G += ' data-reactroot=""');var z = G;h = "";La.hasOwnProperty(c) ? z += "/>" : (z += ">", h = "</" + a.type + ">");a: {
	      e = d.dangerouslySetInnerHTML;if (null != e) {
	        if (null != e.__html) {
	          e = e.__html;break a;
	        }
	      } else if (e = d.children, "string" === typeof e || "number" === typeof e) {
	        e = N(e);break a;
	      }e = null;
	    }null != e ? (d = [], Ra.hasOwnProperty(c) && "\n" === e.charAt(0) && (z += "\n"), z += e) : d = Z(d.children);a = a.type;f = null == f || "http://www.w3.org/1999/xhtml" === f ? Ka(a) : "http://www.w3.org/2000/svg" === f && "foreignObject" === a ? "http://www.w3.org/1999/xhtml" : f;this.stack.push({ domNamespace: f, type: c, children: d, childIndex: 0, context: b, footer: h });this.previousWasTextNode = !1;return z;
	  };return a;
	}(),
	    ab = { renderToString: function renderToString(a) {
	    a = new $a(a, !1);try {
	      return a.read(Infinity);
	    } finally {
	      a.destroy();
	    }
	  }, renderToStaticMarkup: function renderToStaticMarkup(a) {
	    a = new $a(a, !0);try {
	      return a.read(Infinity);
	    } finally {
	      a.destroy();
	    }
	  }, renderToNodeStream: function renderToNodeStream() {
	    throw Error(q(207));
	  }, renderToStaticNodeStream: function renderToStaticNodeStream() {
	    throw Error(q(208));
	  }, version: "16.13.1" };module.exports = ab.default || ab;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
	 * react-dom-server.browser.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (process.env.NODE_ENV !== "production") {
	  (function () {
	    'use strict';

	    var React = __webpack_require__(2);
	    var _assign = __webpack_require__(6);
	    var checkPropTypes = __webpack_require__(8);

	    // Do not require this module directly! Use normal `invariant` calls with
	    // template literal strings. The messages will be replaced with error codes
	    // during build.
	    function formatProdErrorMessage(code) {
	      var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

	      for (var i = 1; i < arguments.length; i++) {
	        url += '&args[]=' + encodeURIComponent(arguments[i]);
	      }

	      return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
	    }

	    var ReactVersion = '16.13.1';

	    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
	    // Current owner and dispatcher used to share the same ref,
	    // but PR #14548 split them out to better support the react-debug-tools package.

	    if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
	      ReactSharedInternals.ReactCurrentDispatcher = {
	        current: null
	      };
	    }

	    if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
	      ReactSharedInternals.ReactCurrentBatchConfig = {
	        suspense: null
	      };
	    }

	    // by calls to these methods by a Babel plugin.
	    //
	    // In PROD (or in packages without access to React internals),
	    // they are left as they are instead.

	    function warn(format) {
	      {
	        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        printWarning('warn', format, args);
	      }
	    }
	    function error(format) {
	      {
	        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          args[_key2 - 1] = arguments[_key2];
	        }

	        printWarning('error', format, args);
	      }
	    }

	    function printWarning(level, format, args) {
	      // When changing this logic, you might want to also
	      // update consoleWithStackDev.www.js as well.
	      {
	        var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

	        if (!hasExistingStack) {
	          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	          var stack = ReactDebugCurrentFrame.getStackAddendum();

	          if (stack !== '') {
	            format += '%s';
	            args = args.concat([stack]);
	          }
	        }

	        var argsWithFormat = args.map(function (item) {
	          return '' + item;
	        }); // Careful: RN currently depends on this prefix

	        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	        // breaks IE9: https://github.com/facebook/react/issues/13610
	        // eslint-disable-next-line react-internal/no-production-logging

	        Function.prototype.apply.call(console[level], console, argsWithFormat);

	        try {
	          // --- Welcome to debugging React ---
	          // This error was thrown as a convenience so that you can use this stack
	          // to find the callsite that caused this warning to fire.
	          var argIndex = 0;
	          var message = 'Warning: ' + format.replace(/%s/g, function () {
	            return args[argIndex++];
	          });
	          throw new Error(message);
	        } catch (x) {}
	      }
	    }

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	    var Uninitialized = -1;
	    var Pending = 0;
	    var Resolved = 1;
	    var Rejected = 2;
	    function refineResolvedLazyComponent(lazyComponent) {
	      return lazyComponent._status === Resolved ? lazyComponent._result : null;
	    }
	    function initializeLazyComponentType(lazyComponent) {
	      if (lazyComponent._status === Uninitialized) {
	        lazyComponent._status = Pending;
	        var ctor = lazyComponent._ctor;
	        var thenable = ctor();
	        lazyComponent._result = thenable;
	        thenable.then(function (moduleObject) {
	          if (lazyComponent._status === Pending) {
	            var defaultExport = moduleObject.default;

	            {
	              if (defaultExport === undefined) {
	                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
	              }
	            }

	            lazyComponent._status = Resolved;
	            lazyComponent._result = defaultExport;
	          }
	        }, function (error) {
	          if (lazyComponent._status === Pending) {
	            lazyComponent._status = Rejected;
	            lazyComponent._result = error;
	          }
	        });
	      }
	    }

	    function getWrappedName(outerType, innerType, wrapperName) {
	      var functionName = innerType.displayName || innerType.name || '';
	      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
	    }

	    function getComponentName(type) {
	      if (type == null) {
	        // Host root, text node or just invalid type.
	        return null;
	      }

	      {
	        if (typeof type.tag === 'number') {
	          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
	        }
	      }

	      if (typeof type === 'function') {
	        return type.displayName || type.name || null;
	      }

	      if (typeof type === 'string') {
	        return type;
	      }

	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return 'Fragment';

	        case REACT_PORTAL_TYPE:
	          return 'Portal';

	        case REACT_PROFILER_TYPE:
	          return "Profiler";

	        case REACT_STRICT_MODE_TYPE:
	          return 'StrictMode';

	        case REACT_SUSPENSE_TYPE:
	          return 'Suspense';

	        case REACT_SUSPENSE_LIST_TYPE:
	          return 'SuspenseList';
	      }

	      if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
	        switch (type.$$typeof) {
	          case REACT_CONTEXT_TYPE:
	            return 'Context.Consumer';

	          case REACT_PROVIDER_TYPE:
	            return 'Context.Provider';

	          case REACT_FORWARD_REF_TYPE:
	            return getWrappedName(type, type.render, 'ForwardRef');

	          case REACT_MEMO_TYPE:
	            return getComponentName(type.type);

	          case REACT_BLOCK_TYPE:
	            return getComponentName(type.render);

	          case REACT_LAZY_TYPE:
	            {
	              var thenable = type;
	              var resolvedThenable = refineResolvedLazyComponent(thenable);

	              if (resolvedThenable) {
	                return getComponentName(resolvedThenable);
	              }

	              break;
	            }
	        }
	      }

	      return null;
	    }

	    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
	    function describeComponentFrame(name, source, ownerName) {
	      var sourceInfo = '';

	      if (source) {
	        var path = source.fileName;
	        var fileName = path.replace(BEFORE_SLASH_RE, '');

	        {
	          // In DEV, include code for a common special case:
	          // prefer "folder/index.js" instead of just "index.js".
	          if (/^index\./.test(fileName)) {
	            var match = path.match(BEFORE_SLASH_RE);

	            if (match) {
	              var pathBeforeSlash = match[1];

	              if (pathBeforeSlash) {
	                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
	                fileName = folderName + '/' + fileName;
	              }
	            }
	          }
	        }

	        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
	      } else if (ownerName) {
	        sourceInfo = ' (created by ' + ownerName + ')';
	      }

	      return '\n    in ' + (name || 'Unknown') + sourceInfo;
	    }

	    var enableSuspenseServerRenderer = false;

	    var enableDeprecatedFlareAPI = false; // Experimental Host Component support.

	    var ReactDebugCurrentFrame;
	    var didWarnAboutInvalidateContextType;

	    {
	      ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	      didWarnAboutInvalidateContextType = new Set();
	    }

	    var emptyObject = {};

	    {
	      Object.freeze(emptyObject);
	    }

	    function maskContext(type, context) {
	      var contextTypes = type.contextTypes;

	      if (!contextTypes) {
	        return emptyObject;
	      }

	      var maskedContext = {};

	      for (var contextName in contextTypes) {
	        maskedContext[contextName] = context[contextName];
	      }

	      return maskedContext;
	    }

	    function checkContextTypes(typeSpecs, values, location) {
	      {
	        checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame.getCurrentStack);
	      }
	    }

	    function validateContextBounds(context, threadID) {
	      // If we don't have enough slots in this context to store this threadID,
	      // fill it in without leaving any holes to ensure that the VM optimizes
	      // this as non-holey index properties.
	      // (Note: If `react` package is < 16.6, _threadCount is undefined.)
	      for (var i = context._threadCount | 0; i <= threadID; i++) {
	        // We assume that this is the same as the defaultValue which might not be
	        // true if we're rendering inside a secondary renderer but they are
	        // secondary because these use cases are very rare.
	        context[i] = context._currentValue2;
	        context._threadCount = i + 1;
	      }
	    }
	    function processContext(type, context, threadID, isClass) {
	      if (isClass) {
	        var contextType = type.contextType;

	        {
	          if ('contextType' in type) {
	            var isValid = // Allow null for conditional declaration
	            contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

	            if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
	              didWarnAboutInvalidateContextType.add(type);
	              var addendum = '';

	              if (contextType === undefined) {
	                addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
	              } else if ((typeof contextType === 'undefined' ? 'undefined' : _typeof(contextType)) !== 'object') {
	                addendum = ' However, it is set to a ' + (typeof contextType === 'undefined' ? 'undefined' : _typeof(contextType)) + '.';
	              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
	                addendum = ' Did you accidentally pass the Context.Provider instead?';
	              } else if (contextType._context !== undefined) {
	                // <Context.Consumer>
	                addendum = ' Did you accidentally pass the Context.Consumer instead?';
	              } else {
	                addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
	              }

	              error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
	            }
	          }
	        }

	        if ((typeof contextType === 'undefined' ? 'undefined' : _typeof(contextType)) === 'object' && contextType !== null) {
	          validateContextBounds(contextType, threadID);
	          return contextType[threadID];
	        }

	        {
	          var maskedContext = maskContext(type, context);

	          {
	            if (type.contextTypes) {
	              checkContextTypes(type.contextTypes, maskedContext, 'context');
	            }
	          }

	          return maskedContext;
	        }
	      } else {
	        {
	          var _maskedContext = maskContext(type, context);

	          {
	            if (type.contextTypes) {
	              checkContextTypes(type.contextTypes, _maskedContext, 'context');
	            }
	          }

	          return _maskedContext;
	        }
	      }
	    }

	    var nextAvailableThreadIDs = new Uint16Array(16);

	    for (var i = 0; i < 15; i++) {
	      nextAvailableThreadIDs[i] = i + 1;
	    }

	    nextAvailableThreadIDs[15] = 0;

	    function growThreadCountAndReturnNextAvailable() {
	      var oldArray = nextAvailableThreadIDs;
	      var oldSize = oldArray.length;
	      var newSize = oldSize * 2;

	      if (!(newSize <= 0x10000)) {
	        {
	          throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
	        }
	      }

	      var newArray = new Uint16Array(newSize);
	      newArray.set(oldArray);
	      nextAvailableThreadIDs = newArray;
	      nextAvailableThreadIDs[0] = oldSize + 1;

	      for (var _i = oldSize; _i < newSize - 1; _i++) {
	        nextAvailableThreadIDs[_i] = _i + 1;
	      }

	      nextAvailableThreadIDs[newSize - 1] = 0;
	      return oldSize;
	    }

	    function allocThreadID() {
	      var nextID = nextAvailableThreadIDs[0];

	      if (nextID === 0) {
	        return growThreadCountAndReturnNextAvailable();
	      }

	      nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
	      return nextID;
	    }
	    function freeThreadID(id) {
	      nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
	      nextAvailableThreadIDs[0] = id;
	    }

	    // A reserved attribute.
	    // It is handled by React separately and shouldn't be written to the DOM.
	    var RESERVED = 0; // A simple string attribute.
	    // Attributes that aren't in the whitelist are presumed to have this type.

	    var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
	    // "enumerated" attributes with "true" and "false" as possible values.
	    // When true, it should be set to a "true" string.
	    // When false, it should be set to a "false" string.

	    var BOOLEANISH_STRING = 2; // A real boolean attribute.
	    // When true, it should be present (set either to an empty string or its name).
	    // When false, it should be omitted.

	    var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
	    // When true, it should be present (set either to an empty string or its name).
	    // When false, it should be omitted.
	    // For any other value, should be present with that value.

	    var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
	    // When falsy, it should be removed.

	    var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
	    // When falsy, it should be removed.

	    var POSITIVE_NUMERIC = 6;

	    /* eslint-disable max-len */
	    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	    /* eslint-enable max-len */

	    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	    var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
	    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
	    var hasOwnProperty = Object.prototype.hasOwnProperty;
	    var illegalAttributeNameCache = {};
	    var validatedAttributeNameCache = {};
	    function isAttributeNameSafe(attributeName) {
	      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
	        return true;
	      }

	      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
	        return false;
	      }

	      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	        validatedAttributeNameCache[attributeName] = true;
	        return true;
	      }

	      illegalAttributeNameCache[attributeName] = true;

	      {
	        error('Invalid attribute name: `%s`', attributeName);
	      }

	      return false;
	    }
	    function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
	      if (propertyInfo !== null) {
	        return propertyInfo.type === RESERVED;
	      }

	      if (isCustomComponentTag) {
	        return false;
	      }

	      if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	        return true;
	      }

	      return false;
	    }
	    function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
	      if (propertyInfo !== null && propertyInfo.type === RESERVED) {
	        return false;
	      }

	      switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
	        case 'function': // $FlowIssue symbol is perfectly valid here

	        case 'symbol':
	          // eslint-disable-line
	          return true;

	        case 'boolean':
	          {
	            if (isCustomComponentTag) {
	              return false;
	            }

	            if (propertyInfo !== null) {
	              return !propertyInfo.acceptsBooleans;
	            } else {
	              var prefix = name.toLowerCase().slice(0, 5);
	              return prefix !== 'data-' && prefix !== 'aria-';
	            }
	          }

	        default:
	          return false;
	      }
	    }
	    function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
	      if (value === null || typeof value === 'undefined') {
	        return true;
	      }

	      if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
	        return true;
	      }

	      if (isCustomComponentTag) {
	        return false;
	      }

	      if (propertyInfo !== null) {
	        switch (propertyInfo.type) {
	          case BOOLEAN:
	            return !value;

	          case OVERLOADED_BOOLEAN:
	            return value === false;

	          case NUMERIC:
	            return isNaN(value);

	          case POSITIVE_NUMERIC:
	            return isNaN(value) || value < 1;
	        }
	      }

	      return false;
	    }
	    function getPropertyInfo(name) {
	      return properties.hasOwnProperty(name) ? properties[name] : null;
	    }

	    function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
	      this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
	      this.attributeName = attributeName;
	      this.attributeNamespace = attributeNamespace;
	      this.mustUseProperty = mustUseProperty;
	      this.propertyName = name;
	      this.type = type;
	      this.sanitizeURL = sanitizeURL;
	    } // When adding attributes to this list, be sure to also add them to
	    // the `possibleStandardNames` module to ensure casing and incorrect
	    // name warnings.


	    var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

	    var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
	    // elements (not just inputs). Now that ReactDOMInput assigns to the
	    // defaultValue property -- do we need this?
	    'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

	    reservedProps.forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
	      name, // attributeName
	      null, // attributeNamespace
	      false);
	    }); // A few React string attributes have a different name.
	    // This is a mapping from React prop names to the attribute names.

	    [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
	      var name = _ref[0],
	          attributeName = _ref[1];
	      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	      attributeName, // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are "enumerated" HTML attributes that accept "true" and "false".
	    // In React, we let users pass `true` and `false` even though technically
	    // these aren't boolean attributes (they are coerced to strings).

	    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	      name.toLowerCase(), // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are "enumerated" SVG attributes that accept "true" and "false".
	    // In React, we let users pass `true` and `false` even though technically
	    // these aren't boolean attributes (they are coerced to strings).
	    // Since these are SVG attributes, their attribute names are case-sensitive.

	    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	      name, // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are HTML boolean attributes.

	    ['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
	    // on the client side because the browsers are inconsistent. Instead we call focus().
	    'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
	    'itemScope'].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
	      name.toLowerCase(), // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are the few React props that we set as DOM properties
	    // rather than attributes. These are all booleans.

	    ['checked', // Note: `option.selected` is not updated if `select.multiple` is
	    // disabled with `removeAttribute`. We have special logic for handling this.
	    'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
	    // you'll need to set attributeName to name.toLowerCase()
	    // instead in the assignment below.
	    ].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
	      name, // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are HTML attributes that are "overloaded booleans": they behave like
	    // booleans, but can also accept a string value.

	    ['capture', 'download' // NOTE: if you add a camelCased prop to this list,
	    // you'll need to set attributeName to name.toLowerCase()
	    // instead in the assignment below.
	    ].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
	      name, // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are HTML attributes that must be positive numbers.

	    ['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
	    // you'll need to set attributeName to name.toLowerCase()
	    // instead in the assignment below.
	    ].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
	      name, // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These are HTML attributes that must be numbers.

	    ['rowSpan', 'start'].forEach(function (name) {
	      properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
	      name.toLowerCase(), // attributeName
	      null, // attributeNamespace
	      false);
	    });
	    var CAMELIZE = /[\-\:]([a-z])/g;

	    var capitalize = function capitalize(token) {
	      return token[1].toUpperCase();
	    }; // This is a list of all SVG attributes that need special casing, namespacing,
	    // or boolean value assignment. Regular attributes that just accept strings
	    // and have the same names are omitted, just like in the HTML whitelist.
	    // Some of these attributes can be hard to find. This list was created by
	    // scraping the MDN documentation.


	    ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
	    // you'll need to set attributeName to name.toLowerCase()
	    // instead in the assignment below.
	    ].forEach(function (attributeName) {
	      var name = attributeName.replace(CAMELIZE, capitalize);
	      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	      attributeName, null, // attributeNamespace
	      false);
	    }); // String SVG attributes with the xlink namespace.

	    ['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
	    // you'll need to set attributeName to name.toLowerCase()
	    // instead in the assignment below.
	    ].forEach(function (attributeName) {
	      var name = attributeName.replace(CAMELIZE, capitalize);
	      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	      attributeName, 'http://www.w3.org/1999/xlink', false);
	    }); // String SVG attributes with the xml namespace.

	    ['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
	    // you'll need to set attributeName to name.toLowerCase()
	    // instead in the assignment below.
	    ].forEach(function (attributeName) {
	      var name = attributeName.replace(CAMELIZE, capitalize);
	      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	      attributeName, 'http://www.w3.org/XML/1998/namespace', false);
	    }); // These attribute exists both in HTML and SVG.
	    // The attribute name is case-sensitive in SVG so we can't just use
	    // the React name like we do for attributes that exist only in HTML.

	    ['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
	      properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	      attributeName.toLowerCase(), // attributeName
	      null, // attributeNamespace
	      false);
	    }); // These attributes accept URLs. These must not allow javascript: URLS.
	    // These will also need to accept Trusted Types object in the future.

	    var xlinkHref = 'xlinkHref';
	    properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
	    'xlink:href', 'http://www.w3.org/1999/xlink', true);
	    ['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
	      properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	      attributeName.toLowerCase(), // attributeName
	      null, // attributeNamespace
	      true);
	    });

	    var ReactDebugCurrentFrame$1 = null;

	    {
	      ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
	    } // A javascript: URL can contain leading C0 control or \u0020 SPACE,
	    // and any newline or tab are filtered out as if they're not part of the URL.
	    // https://url.spec.whatwg.org/#url-parsing
	    // Tab or newline are defined as \r\n\t:
	    // https://infra.spec.whatwg.org/#ascii-tab-or-newline
	    // A C0 control is a code point in the range \u0000 NULL to \u001F
	    // INFORMATION SEPARATOR ONE, inclusive:
	    // https://infra.spec.whatwg.org/#c0-control-or-space

	    /* eslint-disable max-len */

	    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
	    var didWarn = false;

	    function sanitizeURL(url) {
	      {
	        if (!didWarn && isJavaScriptProtocol.test(url)) {
	          didWarn = true;

	          error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
	        }
	      }
	    }

	    // code copied and modified from escape-html

	    /**
	     * Module variables.
	     * @private
	     */
	    var matchHtmlRegExp = /["'&<>]/;
	    /**
	     * Escapes special characters and HTML entities in a given html string.
	     *
	     * @param  {string} string HTML string to escape for later insertion
	     * @return {string}
	     * @public
	     */

	    function escapeHtml(string) {
	      var str = '' + string;
	      var match = matchHtmlRegExp.exec(str);

	      if (!match) {
	        return str;
	      }

	      var escape;
	      var html = '';
	      var index;
	      var lastIndex = 0;

	      for (index = match.index; index < str.length; index++) {
	        switch (str.charCodeAt(index)) {
	          case 34:
	            // "
	            escape = '&quot;';
	            break;

	          case 38:
	            // &
	            escape = '&amp;';
	            break;

	          case 39:
	            // '
	            escape = '&#x27;'; // modified from escape-html; used to be '&#39'

	            break;

	          case 60:
	            // <
	            escape = '&lt;';
	            break;

	          case 62:
	            // >
	            escape = '&gt;';
	            break;

	          default:
	            continue;
	        }

	        if (lastIndex !== index) {
	          html += str.substring(lastIndex, index);
	        }

	        lastIndex = index + 1;
	        html += escape;
	      }

	      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	    } // end code copied and modified from escape-html

	    /**
	     * Escapes text to prevent scripting attacks.
	     *
	     * @param {*} text Text value to escape.
	     * @return {string} An escaped string.
	     */

	    function escapeTextForBrowser(text) {
	      if (typeof text === 'boolean' || typeof text === 'number') {
	        // this shortcircuit helps perf for types that we know will never have
	        // special characters, especially given that this function is used often
	        // for numeric dom ids.
	        return '' + text;
	      }

	      return escapeHtml(text);
	    }

	    /**
	     * Escapes attribute value to prevent scripting attacks.
	     *
	     * @param {*} value Value to escape.
	     * @return {string} An escaped string.
	     */

	    function quoteAttributeValueForBrowser(value) {
	      return '"' + escapeTextForBrowser(value) + '"';
	    }

	    function createMarkupForRoot() {
	      return ROOT_ATTRIBUTE_NAME + '=""';
	    }
	    /**
	     * Creates markup for a property.
	     *
	     * @param {string} name
	     * @param {*} value
	     * @return {?string} Markup string, or null if the property was invalid.
	     */

	    function createMarkupForProperty(name, value) {
	      var propertyInfo = getPropertyInfo(name);

	      if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
	        return '';
	      }

	      if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
	        return '';
	      }

	      if (propertyInfo !== null) {
	        var attributeName = propertyInfo.attributeName;
	        var type = propertyInfo.type;

	        if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
	          return attributeName + '=""';
	        } else {
	          if (propertyInfo.sanitizeURL) {
	            value = '' + value;
	            sanitizeURL(value);
	          }

	          return attributeName + '=' + quoteAttributeValueForBrowser(value);
	        }
	      } else if (isAttributeNameSafe(name)) {
	        return name + '=' + quoteAttributeValueForBrowser(value);
	      }

	      return '';
	    }
	    /**
	     * Creates markup for a custom property.
	     *
	     * @param {string} name
	     * @param {*} value
	     * @return {string} Markup string, or empty string if the property was invalid.
	     */

	    function createMarkupForCustomAttribute(name, value) {
	      if (!isAttributeNameSafe(name) || value == null) {
	        return '';
	      }

	      return name + '=' + quoteAttributeValueForBrowser(value);
	    }

	    /**
	     * inlined Object.is polyfill to avoid requiring consumers ship their own
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	     */
	    function is(x, y) {
	      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	      ;
	    }

	    var objectIs = typeof Object.is === 'function' ? Object.is : is;

	    var currentlyRenderingComponent = null;
	    var firstWorkInProgressHook = null;
	    var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

	    var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

	    var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

	    var renderPhaseUpdates = null; // Counter to prevent infinite loops.

	    var numberOfReRenders = 0;
	    var RE_RENDER_LIMIT = 25;
	    var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

	    var currentHookNameInDev;

	    function resolveCurrentlyRenderingComponent() {
	      if (!(currentlyRenderingComponent !== null)) {
	        {
	          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
	        }
	      }

	      {
	        if (isInHookUserCodeInDev) {
	          error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks');
	        }
	      }

	      return currentlyRenderingComponent;
	    }

	    function areHookInputsEqual(nextDeps, prevDeps) {
	      if (prevDeps === null) {
	        {
	          error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
	        }

	        return false;
	      }

	      {
	        // Don't bother comparing lengths in prod because these arrays should be
	        // passed inline.
	        if (nextDeps.length !== prevDeps.length) {
	          error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
	        }
	      }

	      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
	        if (objectIs(nextDeps[i], prevDeps[i])) {
	          continue;
	        }

	        return false;
	      }

	      return true;
	    }

	    function createHook() {
	      if (numberOfReRenders > 0) {
	        {
	          {
	            throw Error("Rendered more hooks than during the previous render");
	          }
	        }
	      }

	      return {
	        memoizedState: null,
	        queue: null,
	        next: null
	      };
	    }

	    function createWorkInProgressHook() {
	      if (workInProgressHook === null) {
	        // This is the first hook in the list
	        if (firstWorkInProgressHook === null) {
	          isReRender = false;
	          firstWorkInProgressHook = workInProgressHook = createHook();
	        } else {
	          // There's already a work-in-progress. Reuse it.
	          isReRender = true;
	          workInProgressHook = firstWorkInProgressHook;
	        }
	      } else {
	        if (workInProgressHook.next === null) {
	          isReRender = false; // Append to the end of the list

	          workInProgressHook = workInProgressHook.next = createHook();
	        } else {
	          // There's already a work-in-progress. Reuse it.
	          isReRender = true;
	          workInProgressHook = workInProgressHook.next;
	        }
	      }

	      return workInProgressHook;
	    }

	    function prepareToUseHooks(componentIdentity) {
	      currentlyRenderingComponent = componentIdentity;

	      {
	        isInHookUserCodeInDev = false;
	      } // The following should have already been reset
	      // didScheduleRenderPhaseUpdate = false;
	      // firstWorkInProgressHook = null;
	      // numberOfReRenders = 0;
	      // renderPhaseUpdates = null;
	      // workInProgressHook = null;
	    }
	    function finishHooks(Component, props, children, refOrContext) {
	      // This must be called after every function component to prevent hooks from
	      // being used in classes.
	      while (didScheduleRenderPhaseUpdate) {
	        // Updates were scheduled during the render phase. They are stored in
	        // the `renderPhaseUpdates` map. Call the component again, reusing the
	        // work-in-progress hooks and applying the additional updates on top. Keep
	        // restarting until no more updates are scheduled.
	        didScheduleRenderPhaseUpdate = false;
	        numberOfReRenders += 1; // Start over from the beginning of the list

	        workInProgressHook = null;
	        children = Component(props, refOrContext);
	      }

	      currentlyRenderingComponent = null;
	      firstWorkInProgressHook = null;
	      numberOfReRenders = 0;
	      renderPhaseUpdates = null;
	      workInProgressHook = null;

	      {
	        isInHookUserCodeInDev = false;
	      } // These were reset above
	      // currentlyRenderingComponent = null;
	      // didScheduleRenderPhaseUpdate = false;
	      // firstWorkInProgressHook = null;
	      // numberOfReRenders = 0;
	      // renderPhaseUpdates = null;
	      // workInProgressHook = null;


	      return children;
	    }

	    function readContext(context, observedBits) {
	      var threadID = currentThreadID;
	      validateContextBounds(context, threadID);

	      {
	        if (isInHookUserCodeInDev) {
	          error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
	        }
	      }

	      return context[threadID];
	    }

	    function useContext(context, observedBits) {
	      {
	        currentHookNameInDev = 'useContext';
	      }

	      resolveCurrentlyRenderingComponent();
	      var threadID = currentThreadID;
	      validateContextBounds(context, threadID);
	      return context[threadID];
	    }

	    function basicStateReducer(state, action) {
	      // $FlowFixMe: Flow doesn't like mixed types
	      return typeof action === 'function' ? action(state) : action;
	    }

	    function useState(initialState) {
	      {
	        currentHookNameInDev = 'useState';
	      }

	      return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
	      initialState);
	    }
	    function useReducer(reducer, initialArg, init) {
	      {
	        if (reducer !== basicStateReducer) {
	          currentHookNameInDev = 'useReducer';
	        }
	      }

	      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	      workInProgressHook = createWorkInProgressHook();

	      if (isReRender) {
	        // This is a re-render. Apply the new render phase updates to the previous
	        // current hook.
	        var queue = workInProgressHook.queue;
	        var dispatch = queue.dispatch;

	        if (renderPhaseUpdates !== null) {
	          // Render phase updates are stored in a map of queue -> linked list
	          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	          if (firstRenderPhaseUpdate !== undefined) {
	            renderPhaseUpdates.delete(queue);
	            var newState = workInProgressHook.memoizedState;
	            var update = firstRenderPhaseUpdate;

	            do {
	              // Process this render phase update. We don't have to check the
	              // priority because it will always be the same as the current
	              // render's.
	              var action = update.action;

	              {
	                isInHookUserCodeInDev = true;
	              }

	              newState = reducer(newState, action);

	              {
	                isInHookUserCodeInDev = false;
	              }

	              update = update.next;
	            } while (update !== null);

	            workInProgressHook.memoizedState = newState;
	            return [newState, dispatch];
	          }
	        }

	        return [workInProgressHook.memoizedState, dispatch];
	      } else {
	        {
	          isInHookUserCodeInDev = true;
	        }

	        var initialState;

	        if (reducer === basicStateReducer) {
	          // Special case for `useState`.
	          initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
	        } else {
	          initialState = init !== undefined ? init(initialArg) : initialArg;
	        }

	        {
	          isInHookUserCodeInDev = false;
	        }

	        workInProgressHook.memoizedState = initialState;

	        var _queue = workInProgressHook.queue = {
	          last: null,
	          dispatch: null
	        };

	        var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

	        return [workInProgressHook.memoizedState, _dispatch];
	      }
	    }

	    function useMemo(nextCreate, deps) {
	      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	      workInProgressHook = createWorkInProgressHook();
	      var nextDeps = deps === undefined ? null : deps;

	      if (workInProgressHook !== null) {
	        var prevState = workInProgressHook.memoizedState;

	        if (prevState !== null) {
	          if (nextDeps !== null) {
	            var prevDeps = prevState[1];

	            if (areHookInputsEqual(nextDeps, prevDeps)) {
	              return prevState[0];
	            }
	          }
	        }
	      }

	      {
	        isInHookUserCodeInDev = true;
	      }

	      var nextValue = nextCreate();

	      {
	        isInHookUserCodeInDev = false;
	      }

	      workInProgressHook.memoizedState = [nextValue, nextDeps];
	      return nextValue;
	    }

	    function useRef(initialValue) {
	      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	      workInProgressHook = createWorkInProgressHook();
	      var previousRef = workInProgressHook.memoizedState;

	      if (previousRef === null) {
	        var ref = {
	          current: initialValue
	        };

	        {
	          Object.seal(ref);
	        }

	        workInProgressHook.memoizedState = ref;
	        return ref;
	      } else {
	        return previousRef;
	      }
	    }

	    function useLayoutEffect(create, inputs) {
	      {
	        currentHookNameInDev = 'useLayoutEffect';

	        error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
	      }
	    }

	    function dispatchAction(componentIdentity, queue, action) {
	      if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
	        {
	          throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
	        }
	      }

	      if (componentIdentity === currentlyRenderingComponent) {
	        // This is a render phase update. Stash it in a lazily-created map of
	        // queue -> linked list of updates. After this render pass, we'll restart
	        // and apply the stashed updates on top of the work-in-progress hook.
	        didScheduleRenderPhaseUpdate = true;
	        var update = {
	          action: action,
	          next: null
	        };

	        if (renderPhaseUpdates === null) {
	          renderPhaseUpdates = new Map();
	        }

	        var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	        if (firstRenderPhaseUpdate === undefined) {
	          renderPhaseUpdates.set(queue, update);
	        } else {
	          // Append the update to the end of the list.
	          var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

	          while (lastRenderPhaseUpdate.next !== null) {
	            lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
	          }

	          lastRenderPhaseUpdate.next = update;
	        }
	      }
	    }

	    function useCallback(callback, deps) {
	      // Callbacks are passed as they are in the server environment.
	      return callback;
	    }

	    function useResponder(responder, props) {
	      return {
	        props: props,
	        responder: responder
	      };
	    }

	    function useDeferredValue(value, config) {
	      resolveCurrentlyRenderingComponent();
	      return value;
	    }

	    function useTransition(config) {
	      resolveCurrentlyRenderingComponent();

	      var startTransition = function startTransition(callback) {
	        callback();
	      };

	      return [startTransition, false];
	    }

	    function noop() {}

	    var currentThreadID = 0;
	    function setCurrentThreadID(threadID) {
	      currentThreadID = threadID;
	    }
	    var Dispatcher = {
	      readContext: readContext,
	      useContext: useContext,
	      useMemo: useMemo,
	      useReducer: useReducer,
	      useRef: useRef,
	      useState: useState,
	      useLayoutEffect: useLayoutEffect,
	      useCallback: useCallback,
	      // useImperativeHandle is not run in the server environment
	      useImperativeHandle: noop,
	      // Effects are not run in the server environment.
	      useEffect: noop,
	      // Debugging effect
	      useDebugValue: noop,
	      useResponder: useResponder,
	      useDeferredValue: useDeferredValue,
	      useTransition: useTransition
	    };

	    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
	    var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
	    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
	    var Namespaces = {
	      html: HTML_NAMESPACE,
	      mathml: MATH_NAMESPACE,
	      svg: SVG_NAMESPACE
	    }; // Assumes there is no parent namespace.

	    function getIntrinsicNamespace(type) {
	      switch (type) {
	        case 'svg':
	          return SVG_NAMESPACE;

	        case 'math':
	          return MATH_NAMESPACE;

	        default:
	          return HTML_NAMESPACE;
	      }
	    }
	    function getChildNamespace(parentNamespace, type) {
	      if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
	        // No (or default) parent namespace: potential entry point.
	        return getIntrinsicNamespace(type);
	      }

	      if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
	        // We're leaving SVG.
	        return HTML_NAMESPACE;
	      } // By default, pass namespace below.


	      return parentNamespace;
	    }

	    var ReactDebugCurrentFrame$2 = null;
	    var ReactControlledValuePropTypes = {
	      checkPropTypes: null
	    };

	    {
	      ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
	      var hasReadOnlyValue = {
	        button: true,
	        checkbox: true,
	        image: true,
	        hidden: true,
	        radio: true,
	        reset: true,
	        submit: true
	      };
	      var propTypes = {
	        value: function value(props, propName, componentName) {
	          if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI) {
	            return null;
	          }

	          return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	        },
	        checked: function checked(props, propName, componentName) {
	          if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI) {
	            return null;
	          }

	          return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	        }
	      };
	      /**
	       * Provide a linked `value` attribute for controlled forms. You should not use
	       * this outside of the ReactDOM controlled form components.
	       */

	      ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
	        checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
	      };
	    }

	    // For HTML, certain tags should omit their close tag. We keep a whitelist for
	    // those special-case tags.
	    var omittedCloseTags = {
	      area: true,
	      base: true,
	      br: true,
	      col: true,
	      embed: true,
	      hr: true,
	      img: true,
	      input: true,
	      keygen: true,
	      link: true,
	      meta: true,
	      param: true,
	      source: true,
	      track: true,
	      wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

	    };

	    // `omittedCloseTags` except that `menuitem` should still have its closing tag.

	    var voidElementTags = _assign({
	      menuitem: true
	    }, omittedCloseTags);

	    var HTML = '__html';
	    var ReactDebugCurrentFrame$3 = null;

	    {
	      ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
	    }

	    function assertValidProps(tag, props) {
	      if (!props) {
	        return;
	      } // Note the use of `==` which checks for null or undefined.


	      if (voidElementTags[tag]) {
	        if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
	          {
	            throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + ReactDebugCurrentFrame$3.getStackAddendum());
	          }
	        }
	      }

	      if (props.dangerouslySetInnerHTML != null) {
	        if (!(props.children == null)) {
	          {
	            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
	          }
	        }

	        if (!(_typeof(props.dangerouslySetInnerHTML) === 'object' && HTML in props.dangerouslySetInnerHTML)) {
	          {
	            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
	          }
	        }
	      }

	      {
	        if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
	          error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
	        }
	      }

	      if (!(props.style == null || _typeof(props.style) === 'object')) {
	        {
	          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + ReactDebugCurrentFrame$3.getStackAddendum());
	        }
	      }
	    }

	    /**
	     * CSS properties which accept numbers but are not in units of "px".
	     */
	    var isUnitlessNumber = {
	      animationIterationCount: true,
	      borderImageOutset: true,
	      borderImageSlice: true,
	      borderImageWidth: true,
	      boxFlex: true,
	      boxFlexGroup: true,
	      boxOrdinalGroup: true,
	      columnCount: true,
	      columns: true,
	      flex: true,
	      flexGrow: true,
	      flexPositive: true,
	      flexShrink: true,
	      flexNegative: true,
	      flexOrder: true,
	      gridArea: true,
	      gridRow: true,
	      gridRowEnd: true,
	      gridRowSpan: true,
	      gridRowStart: true,
	      gridColumn: true,
	      gridColumnEnd: true,
	      gridColumnSpan: true,
	      gridColumnStart: true,
	      fontWeight: true,
	      lineClamp: true,
	      lineHeight: true,
	      opacity: true,
	      order: true,
	      orphans: true,
	      tabSize: true,
	      widows: true,
	      zIndex: true,
	      zoom: true,
	      // SVG-related properties
	      fillOpacity: true,
	      floodOpacity: true,
	      stopOpacity: true,
	      strokeDasharray: true,
	      strokeDashoffset: true,
	      strokeMiterlimit: true,
	      strokeOpacity: true,
	      strokeWidth: true
	    };
	    /**
	     * @param {string} prefix vendor-specific prefix, eg: Webkit
	     * @param {string} key style name, eg: transitionDuration
	     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	     * WebkitTransitionDuration
	     */

	    function prefixKey(prefix, key) {
	      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	    }
	    /**
	     * Support style names that may come passed in prefixed by adding permutations
	     * of vendor prefixes.
	     */

	    var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	    // infinite loop, because it iterates over the newly added props too.

	    Object.keys(isUnitlessNumber).forEach(function (prop) {
	      prefixes.forEach(function (prefix) {
	        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	      });
	    });

	    /**
	     * Convert a value into the proper css writable value. The style name `name`
	     * should be logical (no hyphens), as specified
	     * in `CSSProperty.isUnitlessNumber`.
	     *
	     * @param {string} name CSS property name such as `topMargin`.
	     * @param {*} value CSS property value such as `10px`.
	     * @return {string} Normalized style value with dimensions applied.
	     */

	    function dangerousStyleValue(name, value, isCustomProperty) {
	      // Note that we've removed escapeTextForBrowser() calls here since the
	      // whole string will be escaped when the attribute is injected into
	      // the markup. If you provide unsafe user data here they can inject
	      // arbitrary CSS which may be problematic (I couldn't repro this):
	      // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	      // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	      // This is not an XSS hole but instead a potential CSS injection issue
	      // which has lead to a greater discussion about how we're going to
	      // trust URLs moving forward. See #2115901
	      var isEmpty = value == null || typeof value === 'boolean' || value === '';

	      if (isEmpty) {
	        return '';
	      }

	      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
	        return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
	      }

	      return ('' + value).trim();
	    }

	    var uppercasePattern = /([A-Z])/g;
	    var msPattern = /^ms-/;
	    /**
	     * Hyphenates a camelcased CSS property name, for example:
	     *
	     *   > hyphenateStyleName('backgroundColor')
	     *   < "background-color"
	     *   > hyphenateStyleName('MozTransition')
	     *   < "-moz-transition"
	     *   > hyphenateStyleName('msTransition')
	     *   < "-ms-transition"
	     *
	     * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	     * is converted to `-ms-`.
	     */

	    function hyphenateStyleName(name) {
	      return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
	    }

	    function isCustomComponent(tagName, props) {
	      if (tagName.indexOf('-') === -1) {
	        return typeof props.is === 'string';
	      }

	      switch (tagName) {
	        // These are reserved SVG and MathML elements.
	        // We don't mind this whitelist too much because we expect it to never grow.
	        // The alternative is to track the namespace in a few places which is convoluted.
	        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	        case 'annotation-xml':
	        case 'color-profile':
	        case 'font-face':
	        case 'font-face-src':
	        case 'font-face-uri':
	        case 'font-face-format':
	        case 'font-face-name':
	        case 'missing-glyph':
	          return false;

	        default:
	          return true;
	      }
	    }

	    var warnValidStyle = function warnValidStyle() {};

	    {
	      // 'msTransform' is correct, but the other prefixes should be capitalized
	      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	      var msPattern$1 = /^-ms-/;
	      var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

	      var badStyleValueWithSemicolonPattern = /;\s*$/;
	      var warnedStyleNames = {};
	      var warnedStyleValues = {};
	      var warnedForNaNValue = false;
	      var warnedForInfinityValue = false;

	      var camelize = function camelize(string) {
	        return string.replace(hyphenPattern, function (_, character) {
	          return character.toUpperCase();
	        });
	      };

	      var warnHyphenatedStyleName = function warnHyphenatedStyleName(name) {
	        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	          return;
	        }

	        warnedStyleNames[name] = true;

	        error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
	        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	        // is converted to lowercase `ms`.
	        camelize(name.replace(msPattern$1, 'ms-')));
	      };

	      var warnBadVendoredStyleName = function warnBadVendoredStyleName(name) {
	        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	          return;
	        }

	        warnedStyleNames[name] = true;

	        error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
	      };

	      var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value) {
	        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	          return;
	        }

	        warnedStyleValues[value] = true;

	        error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
	      };

	      var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value) {
	        if (warnedForNaNValue) {
	          return;
	        }

	        warnedForNaNValue = true;

	        error('`NaN` is an invalid value for the `%s` css style property.', name);
	      };

	      var warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value) {
	        if (warnedForInfinityValue) {
	          return;
	        }

	        warnedForInfinityValue = true;

	        error('`Infinity` is an invalid value for the `%s` css style property.', name);
	      };

	      warnValidStyle = function warnValidStyle(name, value) {
	        if (name.indexOf('-') > -1) {
	          warnHyphenatedStyleName(name);
	        } else if (badVendoredStyleNamePattern.test(name)) {
	          warnBadVendoredStyleName(name);
	        } else if (badStyleValueWithSemicolonPattern.test(value)) {
	          warnStyleValueWithSemicolon(name, value);
	        }

	        if (typeof value === 'number') {
	          if (isNaN(value)) {
	            warnStyleValueIsNaN(name, value);
	          } else if (!isFinite(value)) {
	            warnStyleValueIsInfinity(name, value);
	          }
	        }
	      };
	    }

	    var warnValidStyle$1 = warnValidStyle;

	    var ariaProperties = {
	      'aria-current': 0,
	      // state
	      'aria-details': 0,
	      'aria-disabled': 0,
	      // state
	      'aria-hidden': 0,
	      // state
	      'aria-invalid': 0,
	      // state
	      'aria-keyshortcuts': 0,
	      'aria-label': 0,
	      'aria-roledescription': 0,
	      // Widget Attributes
	      'aria-autocomplete': 0,
	      'aria-checked': 0,
	      'aria-expanded': 0,
	      'aria-haspopup': 0,
	      'aria-level': 0,
	      'aria-modal': 0,
	      'aria-multiline': 0,
	      'aria-multiselectable': 0,
	      'aria-orientation': 0,
	      'aria-placeholder': 0,
	      'aria-pressed': 0,
	      'aria-readonly': 0,
	      'aria-required': 0,
	      'aria-selected': 0,
	      'aria-sort': 0,
	      'aria-valuemax': 0,
	      'aria-valuemin': 0,
	      'aria-valuenow': 0,
	      'aria-valuetext': 0,
	      // Live Region Attributes
	      'aria-atomic': 0,
	      'aria-busy': 0,
	      'aria-live': 0,
	      'aria-relevant': 0,
	      // Drag-and-Drop Attributes
	      'aria-dropeffect': 0,
	      'aria-grabbed': 0,
	      // Relationship Attributes
	      'aria-activedescendant': 0,
	      'aria-colcount': 0,
	      'aria-colindex': 0,
	      'aria-colspan': 0,
	      'aria-controls': 0,
	      'aria-describedby': 0,
	      'aria-errormessage': 0,
	      'aria-flowto': 0,
	      'aria-labelledby': 0,
	      'aria-owns': 0,
	      'aria-posinset': 0,
	      'aria-rowcount': 0,
	      'aria-rowindex': 0,
	      'aria-rowspan': 0,
	      'aria-setsize': 0
	    };

	    var warnedProperties = {};
	    var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	    var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
	    var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	    function validateProperty(tagName, name) {
	      {
	        if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
	          return true;
	        }

	        if (rARIACamel.test(name)) {
	          var ariaName = 'aria-' + name.slice(4).toLowerCase();
	          var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	          // DOM properties, then it is an invalid aria-* attribute.

	          if (correctName == null) {
	            error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

	            warnedProperties[name] = true;
	            return true;
	          } // aria-* attributes should be lowercase; suggest the lowercase version.


	          if (name !== correctName) {
	            error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

	            warnedProperties[name] = true;
	            return true;
	          }
	        }

	        if (rARIA.test(name)) {
	          var lowerCasedName = name.toLowerCase();
	          var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	          // DOM properties, then it is an invalid aria-* attribute.

	          if (standardName == null) {
	            warnedProperties[name] = true;
	            return false;
	          } // aria-* attributes should be lowercase; suggest the lowercase version.


	          if (name !== standardName) {
	            error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

	            warnedProperties[name] = true;
	            return true;
	          }
	        }
	      }

	      return true;
	    }

	    function warnInvalidARIAProps(type, props) {
	      {
	        var invalidProps = [];

	        for (var key in props) {
	          var isValid = validateProperty(type, key);

	          if (!isValid) {
	            invalidProps.push(key);
	          }
	        }

	        var unknownPropString = invalidProps.map(function (prop) {
	          return '`' + prop + '`';
	        }).join(', ');

	        if (invalidProps.length === 1) {
	          error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
	        } else if (invalidProps.length > 1) {
	          error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
	        }
	      }
	    }

	    function validateProperties(type, props) {
	      if (isCustomComponent(type, props)) {
	        return;
	      }

	      warnInvalidARIAProps(type, props);
	    }

	    var didWarnValueNull = false;
	    function validateProperties$1(type, props) {
	      {
	        if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	          return;
	        }

	        if (props != null && props.value === null && !didWarnValueNull) {
	          didWarnValueNull = true;

	          if (type === 'select' && props.multiple) {
	            error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
	          } else {
	            error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
	          }
	        }
	      }
	    }

	    /**
	     * Mapping from registration name to plugin module
	     */

	    var registrationNameModules = {};
	    /**
	     * Mapping from lowercase registration names to the properly cased version,
	     * used to warn in the case of missing event handlers. Available
	     * only in true.
	     * @type {Object}
	     */

	    var possibleRegistrationNames = {}; // Trust the developer to only use possibleRegistrationNames in true

	    // When adding attributes to the HTML or SVG whitelist, be sure to
	    // also add them to this module to ensure casing and incorrect name
	    // warnings.
	    var possibleStandardNames = {
	      // HTML
	      accept: 'accept',
	      acceptcharset: 'acceptCharset',
	      'accept-charset': 'acceptCharset',
	      accesskey: 'accessKey',
	      action: 'action',
	      allowfullscreen: 'allowFullScreen',
	      alt: 'alt',
	      as: 'as',
	      async: 'async',
	      autocapitalize: 'autoCapitalize',
	      autocomplete: 'autoComplete',
	      autocorrect: 'autoCorrect',
	      autofocus: 'autoFocus',
	      autoplay: 'autoPlay',
	      autosave: 'autoSave',
	      capture: 'capture',
	      cellpadding: 'cellPadding',
	      cellspacing: 'cellSpacing',
	      challenge: 'challenge',
	      charset: 'charSet',
	      checked: 'checked',
	      children: 'children',
	      cite: 'cite',
	      class: 'className',
	      classid: 'classID',
	      classname: 'className',
	      cols: 'cols',
	      colspan: 'colSpan',
	      content: 'content',
	      contenteditable: 'contentEditable',
	      contextmenu: 'contextMenu',
	      controls: 'controls',
	      controlslist: 'controlsList',
	      coords: 'coords',
	      crossorigin: 'crossOrigin',
	      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	      data: 'data',
	      datetime: 'dateTime',
	      default: 'default',
	      defaultchecked: 'defaultChecked',
	      defaultvalue: 'defaultValue',
	      defer: 'defer',
	      dir: 'dir',
	      disabled: 'disabled',
	      disablepictureinpicture: 'disablePictureInPicture',
	      download: 'download',
	      draggable: 'draggable',
	      enctype: 'encType',
	      for: 'htmlFor',
	      form: 'form',
	      formmethod: 'formMethod',
	      formaction: 'formAction',
	      formenctype: 'formEncType',
	      formnovalidate: 'formNoValidate',
	      formtarget: 'formTarget',
	      frameborder: 'frameBorder',
	      headers: 'headers',
	      height: 'height',
	      hidden: 'hidden',
	      high: 'high',
	      href: 'href',
	      hreflang: 'hrefLang',
	      htmlfor: 'htmlFor',
	      httpequiv: 'httpEquiv',
	      'http-equiv': 'httpEquiv',
	      icon: 'icon',
	      id: 'id',
	      innerhtml: 'innerHTML',
	      inputmode: 'inputMode',
	      integrity: 'integrity',
	      is: 'is',
	      itemid: 'itemID',
	      itemprop: 'itemProp',
	      itemref: 'itemRef',
	      itemscope: 'itemScope',
	      itemtype: 'itemType',
	      keyparams: 'keyParams',
	      keytype: 'keyType',
	      kind: 'kind',
	      label: 'label',
	      lang: 'lang',
	      list: 'list',
	      loop: 'loop',
	      low: 'low',
	      manifest: 'manifest',
	      marginwidth: 'marginWidth',
	      marginheight: 'marginHeight',
	      max: 'max',
	      maxlength: 'maxLength',
	      media: 'media',
	      mediagroup: 'mediaGroup',
	      method: 'method',
	      min: 'min',
	      minlength: 'minLength',
	      multiple: 'multiple',
	      muted: 'muted',
	      name: 'name',
	      nomodule: 'noModule',
	      nonce: 'nonce',
	      novalidate: 'noValidate',
	      open: 'open',
	      optimum: 'optimum',
	      pattern: 'pattern',
	      placeholder: 'placeholder',
	      playsinline: 'playsInline',
	      poster: 'poster',
	      preload: 'preload',
	      profile: 'profile',
	      radiogroup: 'radioGroup',
	      readonly: 'readOnly',
	      referrerpolicy: 'referrerPolicy',
	      rel: 'rel',
	      required: 'required',
	      reversed: 'reversed',
	      role: 'role',
	      rows: 'rows',
	      rowspan: 'rowSpan',
	      sandbox: 'sandbox',
	      scope: 'scope',
	      scoped: 'scoped',
	      scrolling: 'scrolling',
	      seamless: 'seamless',
	      selected: 'selected',
	      shape: 'shape',
	      size: 'size',
	      sizes: 'sizes',
	      span: 'span',
	      spellcheck: 'spellCheck',
	      src: 'src',
	      srcdoc: 'srcDoc',
	      srclang: 'srcLang',
	      srcset: 'srcSet',
	      start: 'start',
	      step: 'step',
	      style: 'style',
	      summary: 'summary',
	      tabindex: 'tabIndex',
	      target: 'target',
	      title: 'title',
	      type: 'type',
	      usemap: 'useMap',
	      value: 'value',
	      width: 'width',
	      wmode: 'wmode',
	      wrap: 'wrap',
	      // SVG
	      about: 'about',
	      accentheight: 'accentHeight',
	      'accent-height': 'accentHeight',
	      accumulate: 'accumulate',
	      additive: 'additive',
	      alignmentbaseline: 'alignmentBaseline',
	      'alignment-baseline': 'alignmentBaseline',
	      allowreorder: 'allowReorder',
	      alphabetic: 'alphabetic',
	      amplitude: 'amplitude',
	      arabicform: 'arabicForm',
	      'arabic-form': 'arabicForm',
	      ascent: 'ascent',
	      attributename: 'attributeName',
	      attributetype: 'attributeType',
	      autoreverse: 'autoReverse',
	      azimuth: 'azimuth',
	      basefrequency: 'baseFrequency',
	      baselineshift: 'baselineShift',
	      'baseline-shift': 'baselineShift',
	      baseprofile: 'baseProfile',
	      bbox: 'bbox',
	      begin: 'begin',
	      bias: 'bias',
	      by: 'by',
	      calcmode: 'calcMode',
	      capheight: 'capHeight',
	      'cap-height': 'capHeight',
	      clip: 'clip',
	      clippath: 'clipPath',
	      'clip-path': 'clipPath',
	      clippathunits: 'clipPathUnits',
	      cliprule: 'clipRule',
	      'clip-rule': 'clipRule',
	      color: 'color',
	      colorinterpolation: 'colorInterpolation',
	      'color-interpolation': 'colorInterpolation',
	      colorinterpolationfilters: 'colorInterpolationFilters',
	      'color-interpolation-filters': 'colorInterpolationFilters',
	      colorprofile: 'colorProfile',
	      'color-profile': 'colorProfile',
	      colorrendering: 'colorRendering',
	      'color-rendering': 'colorRendering',
	      contentscripttype: 'contentScriptType',
	      contentstyletype: 'contentStyleType',
	      cursor: 'cursor',
	      cx: 'cx',
	      cy: 'cy',
	      d: 'd',
	      datatype: 'datatype',
	      decelerate: 'decelerate',
	      descent: 'descent',
	      diffuseconstant: 'diffuseConstant',
	      direction: 'direction',
	      display: 'display',
	      divisor: 'divisor',
	      dominantbaseline: 'dominantBaseline',
	      'dominant-baseline': 'dominantBaseline',
	      dur: 'dur',
	      dx: 'dx',
	      dy: 'dy',
	      edgemode: 'edgeMode',
	      elevation: 'elevation',
	      enablebackground: 'enableBackground',
	      'enable-background': 'enableBackground',
	      end: 'end',
	      exponent: 'exponent',
	      externalresourcesrequired: 'externalResourcesRequired',
	      fill: 'fill',
	      fillopacity: 'fillOpacity',
	      'fill-opacity': 'fillOpacity',
	      fillrule: 'fillRule',
	      'fill-rule': 'fillRule',
	      filter: 'filter',
	      filterres: 'filterRes',
	      filterunits: 'filterUnits',
	      floodopacity: 'floodOpacity',
	      'flood-opacity': 'floodOpacity',
	      floodcolor: 'floodColor',
	      'flood-color': 'floodColor',
	      focusable: 'focusable',
	      fontfamily: 'fontFamily',
	      'font-family': 'fontFamily',
	      fontsize: 'fontSize',
	      'font-size': 'fontSize',
	      fontsizeadjust: 'fontSizeAdjust',
	      'font-size-adjust': 'fontSizeAdjust',
	      fontstretch: 'fontStretch',
	      'font-stretch': 'fontStretch',
	      fontstyle: 'fontStyle',
	      'font-style': 'fontStyle',
	      fontvariant: 'fontVariant',
	      'font-variant': 'fontVariant',
	      fontweight: 'fontWeight',
	      'font-weight': 'fontWeight',
	      format: 'format',
	      from: 'from',
	      fx: 'fx',
	      fy: 'fy',
	      g1: 'g1',
	      g2: 'g2',
	      glyphname: 'glyphName',
	      'glyph-name': 'glyphName',
	      glyphorientationhorizontal: 'glyphOrientationHorizontal',
	      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	      glyphorientationvertical: 'glyphOrientationVertical',
	      'glyph-orientation-vertical': 'glyphOrientationVertical',
	      glyphref: 'glyphRef',
	      gradienttransform: 'gradientTransform',
	      gradientunits: 'gradientUnits',
	      hanging: 'hanging',
	      horizadvx: 'horizAdvX',
	      'horiz-adv-x': 'horizAdvX',
	      horizoriginx: 'horizOriginX',
	      'horiz-origin-x': 'horizOriginX',
	      ideographic: 'ideographic',
	      imagerendering: 'imageRendering',
	      'image-rendering': 'imageRendering',
	      in2: 'in2',
	      in: 'in',
	      inlist: 'inlist',
	      intercept: 'intercept',
	      k1: 'k1',
	      k2: 'k2',
	      k3: 'k3',
	      k4: 'k4',
	      k: 'k',
	      kernelmatrix: 'kernelMatrix',
	      kernelunitlength: 'kernelUnitLength',
	      kerning: 'kerning',
	      keypoints: 'keyPoints',
	      keysplines: 'keySplines',
	      keytimes: 'keyTimes',
	      lengthadjust: 'lengthAdjust',
	      letterspacing: 'letterSpacing',
	      'letter-spacing': 'letterSpacing',
	      lightingcolor: 'lightingColor',
	      'lighting-color': 'lightingColor',
	      limitingconeangle: 'limitingConeAngle',
	      local: 'local',
	      markerend: 'markerEnd',
	      'marker-end': 'markerEnd',
	      markerheight: 'markerHeight',
	      markermid: 'markerMid',
	      'marker-mid': 'markerMid',
	      markerstart: 'markerStart',
	      'marker-start': 'markerStart',
	      markerunits: 'markerUnits',
	      markerwidth: 'markerWidth',
	      mask: 'mask',
	      maskcontentunits: 'maskContentUnits',
	      maskunits: 'maskUnits',
	      mathematical: 'mathematical',
	      mode: 'mode',
	      numoctaves: 'numOctaves',
	      offset: 'offset',
	      opacity: 'opacity',
	      operator: 'operator',
	      order: 'order',
	      orient: 'orient',
	      orientation: 'orientation',
	      origin: 'origin',
	      overflow: 'overflow',
	      overlineposition: 'overlinePosition',
	      'overline-position': 'overlinePosition',
	      overlinethickness: 'overlineThickness',
	      'overline-thickness': 'overlineThickness',
	      paintorder: 'paintOrder',
	      'paint-order': 'paintOrder',
	      panose1: 'panose1',
	      'panose-1': 'panose1',
	      pathlength: 'pathLength',
	      patterncontentunits: 'patternContentUnits',
	      patterntransform: 'patternTransform',
	      patternunits: 'patternUnits',
	      pointerevents: 'pointerEvents',
	      'pointer-events': 'pointerEvents',
	      points: 'points',
	      pointsatx: 'pointsAtX',
	      pointsaty: 'pointsAtY',
	      pointsatz: 'pointsAtZ',
	      prefix: 'prefix',
	      preservealpha: 'preserveAlpha',
	      preserveaspectratio: 'preserveAspectRatio',
	      primitiveunits: 'primitiveUnits',
	      property: 'property',
	      r: 'r',
	      radius: 'radius',
	      refx: 'refX',
	      refy: 'refY',
	      renderingintent: 'renderingIntent',
	      'rendering-intent': 'renderingIntent',
	      repeatcount: 'repeatCount',
	      repeatdur: 'repeatDur',
	      requiredextensions: 'requiredExtensions',
	      requiredfeatures: 'requiredFeatures',
	      resource: 'resource',
	      restart: 'restart',
	      result: 'result',
	      results: 'results',
	      rotate: 'rotate',
	      rx: 'rx',
	      ry: 'ry',
	      scale: 'scale',
	      security: 'security',
	      seed: 'seed',
	      shaperendering: 'shapeRendering',
	      'shape-rendering': 'shapeRendering',
	      slope: 'slope',
	      spacing: 'spacing',
	      specularconstant: 'specularConstant',
	      specularexponent: 'specularExponent',
	      speed: 'speed',
	      spreadmethod: 'spreadMethod',
	      startoffset: 'startOffset',
	      stddeviation: 'stdDeviation',
	      stemh: 'stemh',
	      stemv: 'stemv',
	      stitchtiles: 'stitchTiles',
	      stopcolor: 'stopColor',
	      'stop-color': 'stopColor',
	      stopopacity: 'stopOpacity',
	      'stop-opacity': 'stopOpacity',
	      strikethroughposition: 'strikethroughPosition',
	      'strikethrough-position': 'strikethroughPosition',
	      strikethroughthickness: 'strikethroughThickness',
	      'strikethrough-thickness': 'strikethroughThickness',
	      string: 'string',
	      stroke: 'stroke',
	      strokedasharray: 'strokeDasharray',
	      'stroke-dasharray': 'strokeDasharray',
	      strokedashoffset: 'strokeDashoffset',
	      'stroke-dashoffset': 'strokeDashoffset',
	      strokelinecap: 'strokeLinecap',
	      'stroke-linecap': 'strokeLinecap',
	      strokelinejoin: 'strokeLinejoin',
	      'stroke-linejoin': 'strokeLinejoin',
	      strokemiterlimit: 'strokeMiterlimit',
	      'stroke-miterlimit': 'strokeMiterlimit',
	      strokewidth: 'strokeWidth',
	      'stroke-width': 'strokeWidth',
	      strokeopacity: 'strokeOpacity',
	      'stroke-opacity': 'strokeOpacity',
	      suppresscontenteditablewarning: 'suppressContentEditableWarning',
	      suppresshydrationwarning: 'suppressHydrationWarning',
	      surfacescale: 'surfaceScale',
	      systemlanguage: 'systemLanguage',
	      tablevalues: 'tableValues',
	      targetx: 'targetX',
	      targety: 'targetY',
	      textanchor: 'textAnchor',
	      'text-anchor': 'textAnchor',
	      textdecoration: 'textDecoration',
	      'text-decoration': 'textDecoration',
	      textlength: 'textLength',
	      textrendering: 'textRendering',
	      'text-rendering': 'textRendering',
	      to: 'to',
	      transform: 'transform',
	      typeof: 'typeof',
	      u1: 'u1',
	      u2: 'u2',
	      underlineposition: 'underlinePosition',
	      'underline-position': 'underlinePosition',
	      underlinethickness: 'underlineThickness',
	      'underline-thickness': 'underlineThickness',
	      unicode: 'unicode',
	      unicodebidi: 'unicodeBidi',
	      'unicode-bidi': 'unicodeBidi',
	      unicoderange: 'unicodeRange',
	      'unicode-range': 'unicodeRange',
	      unitsperem: 'unitsPerEm',
	      'units-per-em': 'unitsPerEm',
	      unselectable: 'unselectable',
	      valphabetic: 'vAlphabetic',
	      'v-alphabetic': 'vAlphabetic',
	      values: 'values',
	      vectoreffect: 'vectorEffect',
	      'vector-effect': 'vectorEffect',
	      version: 'version',
	      vertadvy: 'vertAdvY',
	      'vert-adv-y': 'vertAdvY',
	      vertoriginx: 'vertOriginX',
	      'vert-origin-x': 'vertOriginX',
	      vertoriginy: 'vertOriginY',
	      'vert-origin-y': 'vertOriginY',
	      vhanging: 'vHanging',
	      'v-hanging': 'vHanging',
	      videographic: 'vIdeographic',
	      'v-ideographic': 'vIdeographic',
	      viewbox: 'viewBox',
	      viewtarget: 'viewTarget',
	      visibility: 'visibility',
	      vmathematical: 'vMathematical',
	      'v-mathematical': 'vMathematical',
	      vocab: 'vocab',
	      widths: 'widths',
	      wordspacing: 'wordSpacing',
	      'word-spacing': 'wordSpacing',
	      writingmode: 'writingMode',
	      'writing-mode': 'writingMode',
	      x1: 'x1',
	      x2: 'x2',
	      x: 'x',
	      xchannelselector: 'xChannelSelector',
	      xheight: 'xHeight',
	      'x-height': 'xHeight',
	      xlinkactuate: 'xlinkActuate',
	      'xlink:actuate': 'xlinkActuate',
	      xlinkarcrole: 'xlinkArcrole',
	      'xlink:arcrole': 'xlinkArcrole',
	      xlinkhref: 'xlinkHref',
	      'xlink:href': 'xlinkHref',
	      xlinkrole: 'xlinkRole',
	      'xlink:role': 'xlinkRole',
	      xlinkshow: 'xlinkShow',
	      'xlink:show': 'xlinkShow',
	      xlinktitle: 'xlinkTitle',
	      'xlink:title': 'xlinkTitle',
	      xlinktype: 'xlinkType',
	      'xlink:type': 'xlinkType',
	      xmlbase: 'xmlBase',
	      'xml:base': 'xmlBase',
	      xmllang: 'xmlLang',
	      'xml:lang': 'xmlLang',
	      xmlns: 'xmlns',
	      'xml:space': 'xmlSpace',
	      xmlnsxlink: 'xmlnsXlink',
	      'xmlns:xlink': 'xmlnsXlink',
	      xmlspace: 'xmlSpace',
	      y1: 'y1',
	      y2: 'y2',
	      y: 'y',
	      ychannelselector: 'yChannelSelector',
	      z: 'z',
	      zoomandpan: 'zoomAndPan'
	    };

	    var validateProperty$1 = function validateProperty$1() {};

	    {
	      var warnedProperties$1 = {};
	      var _hasOwnProperty = Object.prototype.hasOwnProperty;
	      var EVENT_NAME_REGEX = /^on./;
	      var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
	      var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	      var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	      validateProperty$1 = function validateProperty$1(tagName, name, value, canUseEventSystem) {
	        if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	          return true;
	        }

	        var lowerCasedName = name.toLowerCase();

	        if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	          error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

	          warnedProperties$1[name] = true;
	          return true;
	        } // We can't rely on the event system being injected on the server.


	        if (canUseEventSystem) {
	          if (registrationNameModules.hasOwnProperty(name)) {
	            return true;
	          }

	          var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

	          if (registrationName != null) {
	            error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

	            warnedProperties$1[name] = true;
	            return true;
	          }

	          if (EVENT_NAME_REGEX.test(name)) {
	            error('Unknown event handler property `%s`. It will be ignored.', name);

	            warnedProperties$1[name] = true;
	            return true;
	          }
	        } else if (EVENT_NAME_REGEX.test(name)) {
	          // If no event plugins have been injected, we are in a server environment.
	          // So we can't tell if the event name is correct for sure, but we can filter
	          // out known bad ones like `onclick`. We can't suggest a specific replacement though.
	          if (INVALID_EVENT_NAME_REGEX.test(name)) {
	            error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
	          }

	          warnedProperties$1[name] = true;
	          return true;
	        } // Let the ARIA attribute hook validate ARIA attributes


	        if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	          return true;
	        }

	        if (lowerCasedName === 'innerhtml') {
	          error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

	          warnedProperties$1[name] = true;
	          return true;
	        }

	        if (lowerCasedName === 'aria') {
	          error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

	          warnedProperties$1[name] = true;
	          return true;
	        }

	        if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	          error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value === 'undefined' ? 'undefined' : _typeof(value));

	          warnedProperties$1[name] = true;
	          return true;
	        }

	        if (typeof value === 'number' && isNaN(value)) {
	          error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

	          warnedProperties$1[name] = true;
	          return true;
	        }

	        var propertyInfo = getPropertyInfo(name);
	        var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

	        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	          var standardName = possibleStandardNames[lowerCasedName];

	          if (standardName !== name) {
	            error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

	            warnedProperties$1[name] = true;
	            return true;
	          }
	        } else if (!isReserved && name !== lowerCasedName) {
	          // Unknown attributes should have lowercase casing since that's how they
	          // will be cased anyway with server rendering.
	          error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

	          warnedProperties$1[name] = true;
	          return true;
	        }

	        if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	          if (value) {
	            error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
	          } else {
	            error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
	          }

	          warnedProperties$1[name] = true;
	          return true;
	        } // Now that we've validated casing, do not validate
	        // data types for reserved props


	        if (isReserved) {
	          return true;
	        } // Warn when a known attribute is a bad type


	        if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	          warnedProperties$1[name] = true;
	          return false;
	        } // Warn when passing the strings 'false' or 'true' into a boolean prop


	        if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
	          error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

	          warnedProperties$1[name] = true;
	          return true;
	        }

	        return true;
	      };
	    }

	    var warnUnknownProperties = function warnUnknownProperties(type, props, canUseEventSystem) {
	      {
	        var unknownProps = [];

	        for (var key in props) {
	          var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

	          if (!isValid) {
	            unknownProps.push(key);
	          }
	        }

	        var unknownPropString = unknownProps.map(function (prop) {
	          return '`' + prop + '`';
	        }).join(', ');

	        if (unknownProps.length === 1) {
	          error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
	        } else if (unknownProps.length > 1) {
	          error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
	        }
	      }
	    };

	    function validateProperties$2(type, props, canUseEventSystem) {
	      if (isCustomComponent(type, props)) {
	        return;
	      }

	      warnUnknownProperties(type, props, canUseEventSystem);
	    }

	    var toArray = React.Children.toArray; // This is only used in DEV.
	    // Each entry is `this.stack` from a currently executing renderer instance.
	    // (There may be more than one because ReactDOMServer is reentrant).
	    // Each stack is an array of frames which may contain nested stacks of elements.

	    var currentDebugStacks = [];
	    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	    var ReactDebugCurrentFrame$4;
	    var prevGetCurrentStackImpl = null;

	    var getCurrentServerStackImpl = function getCurrentServerStackImpl() {
	      return '';
	    };

	    var describeStackFrame = function describeStackFrame(element) {
	      return '';
	    };

	    var validatePropertiesInDevelopment = function validatePropertiesInDevelopment(type, props) {};

	    var pushCurrentDebugStack = function pushCurrentDebugStack(stack) {};

	    var pushElementToDebugStack = function pushElementToDebugStack(element) {};

	    var popCurrentDebugStack = function popCurrentDebugStack() {};

	    var hasWarnedAboutUsingContextAsConsumer = false;

	    {
	      ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;

	      validatePropertiesInDevelopment = function validatePropertiesInDevelopment(type, props) {
	        validateProperties(type, props);
	        validateProperties$1(type, props);
	        validateProperties$2(type, props,
	        /* canUseEventSystem */
	        false);
	      };

	      describeStackFrame = function describeStackFrame(element) {
	        var source = element._source;
	        var type = element.type;
	        var name = getComponentName(type);
	        var ownerName = null;
	        return describeComponentFrame(name, source, ownerName);
	      };

	      pushCurrentDebugStack = function pushCurrentDebugStack(stack) {
	        currentDebugStacks.push(stack);

	        if (currentDebugStacks.length === 1) {
	          // We are entering a server renderer.
	          // Remember the previous (e.g. client) global stack implementation.
	          prevGetCurrentStackImpl = ReactDebugCurrentFrame$4.getCurrentStack;
	          ReactDebugCurrentFrame$4.getCurrentStack = getCurrentServerStackImpl;
	        }
	      };

	      pushElementToDebugStack = function pushElementToDebugStack(element) {
	        // For the innermost executing ReactDOMServer call,
	        var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

	        var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

	        frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
	        // children and directly handle them in an inner loop instead of
	        // creating separate frames for them.
	      };

	      popCurrentDebugStack = function popCurrentDebugStack() {
	        currentDebugStacks.pop();

	        if (currentDebugStacks.length === 0) {
	          // We are exiting the server renderer.
	          // Restore the previous (e.g. client) global stack implementation.
	          ReactDebugCurrentFrame$4.getCurrentStack = prevGetCurrentStackImpl;
	          prevGetCurrentStackImpl = null;
	        }
	      };

	      getCurrentServerStackImpl = function getCurrentServerStackImpl() {
	        if (currentDebugStacks.length === 0) {
	          // Nothing is currently rendering.
	          return '';
	        } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
	        // Take the frames from the innermost call which is the last in the array.


	        var frames = currentDebugStacks[currentDebugStacks.length - 1];
	        var stack = ''; // Go through every frame in the stack from the innermost one.

	        for (var i = frames.length - 1; i >= 0; i--) {
	          var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
	          // This is because single-child nesting doesn't create materialized frames.
	          // Instead it would push them through `pushElementToDebugStack()`.

	          var debugElementStack = frame.debugElementStack;

	          for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
	            stack += describeStackFrame(debugElementStack[ii]);
	          }
	        }

	        return stack;
	      };
	    }

	    var didWarnDefaultInputValue = false;
	    var didWarnDefaultChecked = false;
	    var didWarnDefaultSelectValue = false;
	    var didWarnDefaultTextareaValue = false;
	    var didWarnInvalidOptionChildren = false;
	    var didWarnAboutNoopUpdateForComponent = {};
	    var didWarnAboutBadClass = {};
	    var didWarnAboutModulePatternComponent = {};
	    var didWarnAboutDeprecatedWillMount = {};
	    var didWarnAboutUndefinedDerivedState = {};
	    var didWarnAboutUninitializedState = {};
	    var valuePropNames = ['value', 'defaultValue'];
	    var newlineEatingTags = {
	      listing: true,
	      pre: true,
	      textarea: true
	    }; // We accept any tag to be rendered but since this gets injected into arbitrary
	    // HTML, we want to make sure that it's a safe tag.
	    // http://www.w3.org/TR/REC-xml/#NT-Name

	    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

	    var validatedTagCache = {};

	    function validateDangerousTag(tag) {
	      if (!validatedTagCache.hasOwnProperty(tag)) {
	        if (!VALID_TAG_REGEX.test(tag)) {
	          {
	            throw Error("Invalid tag: " + tag);
	          }
	        }

	        validatedTagCache[tag] = true;
	      }
	    }

	    var styleNameCache = {};

	    var processStyleName = function processStyleName(styleName) {
	      if (styleNameCache.hasOwnProperty(styleName)) {
	        return styleNameCache[styleName];
	      }

	      var result = hyphenateStyleName(styleName);
	      styleNameCache[styleName] = result;
	      return result;
	    };

	    function createMarkupForStyles(styles) {
	      var serialized = '';
	      var delimiter = '';

	      for (var styleName in styles) {
	        if (!styles.hasOwnProperty(styleName)) {
	          continue;
	        }

	        var isCustomProperty = styleName.indexOf('--') === 0;
	        var styleValue = styles[styleName];

	        {
	          if (!isCustomProperty) {
	            warnValidStyle$1(styleName, styleValue);
	          }
	        }

	        if (styleValue != null) {
	          serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
	          serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
	          delimiter = ';';
	        }
	      }

	      return serialized || null;
	    }

	    function warnNoop(publicInstance, callerName) {
	      {
	        var _constructor = publicInstance.constructor;
	        var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
	        var warningKey = componentName + '.' + callerName;

	        if (didWarnAboutNoopUpdateForComponent[warningKey]) {
	          return;
	        }

	        error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

	        didWarnAboutNoopUpdateForComponent[warningKey] = true;
	      }
	    }

	    function shouldConstruct(Component) {
	      return Component.prototype && Component.prototype.isReactComponent;
	    }

	    function getNonChildrenInnerMarkup(props) {
	      var innerHTML = props.dangerouslySetInnerHTML;

	      if (innerHTML != null) {
	        if (innerHTML.__html != null) {
	          return innerHTML.__html;
	        }
	      } else {
	        var content = props.children;

	        if (typeof content === 'string' || typeof content === 'number') {
	          return escapeTextForBrowser(content);
	        }
	      }

	      return null;
	    }

	    function flattenTopLevelChildren(children) {
	      if (!React.isValidElement(children)) {
	        return toArray(children);
	      }

	      var element = children;

	      if (element.type !== REACT_FRAGMENT_TYPE) {
	        return [element];
	      }

	      var fragmentChildren = element.props.children;

	      if (!React.isValidElement(fragmentChildren)) {
	        return toArray(fragmentChildren);
	      }

	      var fragmentChildElement = fragmentChildren;
	      return [fragmentChildElement];
	    }

	    function flattenOptionChildren(children) {
	      if (children === undefined || children === null) {
	        return children;
	      }

	      var content = ''; // Flatten children and warn if they aren't strings or numbers;
	      // invalid types are ignored.

	      React.Children.forEach(children, function (child) {
	        if (child == null) {
	          return;
	        }

	        content += child;

	        {
	          if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
	            didWarnInvalidOptionChildren = true;

	            error('Only strings and numbers are supported as <option> children.');
	          }
	        }
	      });
	      return content;
	    }

	    var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	    var STYLE = 'style';
	    var RESERVED_PROPS = {
	      children: null,
	      dangerouslySetInnerHTML: null,
	      suppressContentEditableWarning: null,
	      suppressHydrationWarning: null
	    };

	    function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
	      var ret = '<' + tagVerbatim;

	      for (var propKey in props) {
	        if (!hasOwnProperty$2.call(props, propKey)) {
	          continue;
	        }

	        var propValue = props[propKey];

	        if (propValue == null) {
	          continue;
	        }

	        if (propKey === STYLE) {
	          propValue = createMarkupForStyles(propValue);
	        }

	        var markup = null;

	        if (isCustomComponent(tagLowercase, props)) {
	          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
	            markup = createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = createMarkupForProperty(propKey, propValue);
	        }

	        if (markup) {
	          ret += ' ' + markup;
	        }
	      } // For static pages, no need to put React ID and checksum. Saves lots of
	      // bytes.


	      if (makeStaticMarkup) {
	        return ret;
	      }

	      if (isRootElement) {
	        ret += ' ' + createMarkupForRoot();
	      }

	      return ret;
	    }

	    function validateRenderResult(child, type) {
	      if (child === undefined) {
	        {
	          {
	            throw Error((getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
	          }
	        }
	      }
	    }

	    function resolve(child, context, threadID) {
	      while (React.isValidElement(child)) {
	        // Safe because we just checked it's an element.
	        var element = child;
	        var Component = element.type;

	        {
	          pushElementToDebugStack(element);
	        }

	        if (typeof Component !== 'function') {
	          break;
	        }

	        processChild(element, Component);
	      } // Extra closure so queue and replace can be captured properly


	      function processChild(element, Component) {
	        var isClass = shouldConstruct(Component);
	        var publicContext = processContext(Component, context, threadID, isClass);
	        var queue = [];
	        var replace = false;
	        var updater = {
	          isMounted: function isMounted(publicInstance) {
	            return false;
	          },
	          enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	            if (queue === null) {
	              warnNoop(publicInstance, 'forceUpdate');
	              return null;
	            }
	          },
	          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	            replace = true;
	            queue = [completeState];
	          },
	          enqueueSetState: function enqueueSetState(publicInstance, currentPartialState) {
	            if (queue === null) {
	              warnNoop(publicInstance, 'setState');
	              return null;
	            }

	            queue.push(currentPartialState);
	          }
	        };
	        var inst;

	        if (isClass) {
	          inst = new Component(element.props, publicContext, updater);

	          if (typeof Component.getDerivedStateFromProps === 'function') {
	            {
	              if (inst.state === null || inst.state === undefined) {
	                var componentName = getComponentName(Component) || 'Unknown';

	                if (!didWarnAboutUninitializedState[componentName]) {
	                  error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

	                  didWarnAboutUninitializedState[componentName] = true;
	                }
	              }
	            }

	            var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

	            {
	              if (partialState === undefined) {
	                var _componentName = getComponentName(Component) || 'Unknown';

	                if (!didWarnAboutUndefinedDerivedState[_componentName]) {
	                  error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

	                  didWarnAboutUndefinedDerivedState[_componentName] = true;
	                }
	              }
	            }

	            if (partialState != null) {
	              inst.state = _assign({}, inst.state, partialState);
	            }
	          }
	        } else {
	          {
	            if (Component.prototype && typeof Component.prototype.render === 'function') {
	              var _componentName2 = getComponentName(Component) || 'Unknown';

	              if (!didWarnAboutBadClass[_componentName2]) {
	                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

	                didWarnAboutBadClass[_componentName2] = true;
	              }
	            }
	          }

	          var componentIdentity = {};
	          prepareToUseHooks(componentIdentity);
	          inst = Component(element.props, publicContext, updater);
	          inst = finishHooks(Component, element.props, inst, publicContext);

	          if (inst == null || inst.render == null) {
	            child = inst;
	            validateRenderResult(child, Component);
	            return;
	          }

	          {
	            var _componentName3 = getComponentName(Component) || 'Unknown';

	            if (!didWarnAboutModulePatternComponent[_componentName3]) {
	              error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

	              didWarnAboutModulePatternComponent[_componentName3] = true;
	            }
	          }
	        }

	        inst.props = element.props;
	        inst.context = publicContext;
	        inst.updater = updater;
	        var initialState = inst.state;

	        if (initialState === undefined) {
	          inst.state = initialState = null;
	        }

	        if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
	          if (typeof inst.componentWillMount === 'function') {
	            {
	              if (inst.componentWillMount.__suppressDeprecationWarning !== true) {
	                var _componentName4 = getComponentName(Component) || 'Unknown';

	                if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
	                  warn( // keep this warning in sync with ReactStrictModeWarning.js
	                  'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

	                  didWarnAboutDeprecatedWillMount[_componentName4] = true;
	                }
	              }
	            } // In order to support react-lifecycles-compat polyfilled components,
	            // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


	            if (typeof Component.getDerivedStateFromProps !== 'function') {
	              inst.componentWillMount();
	            }
	          }

	          if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
	            // In order to support react-lifecycles-compat polyfilled components,
	            // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
	            inst.UNSAFE_componentWillMount();
	          }

	          if (queue.length) {
	            var oldQueue = queue;
	            var oldReplace = replace;
	            queue = null;
	            replace = false;

	            if (oldReplace && oldQueue.length === 1) {
	              inst.state = oldQueue[0];
	            } else {
	              var nextState = oldReplace ? oldQueue[0] : inst.state;
	              var dontMutate = true;

	              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
	                var partial = oldQueue[i];

	                var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

	                if (_partialState != null) {
	                  if (dontMutate) {
	                    dontMutate = false;
	                    nextState = _assign({}, nextState, _partialState);
	                  } else {
	                    _assign(nextState, _partialState);
	                  }
	                }
	              }

	              inst.state = nextState;
	            }
	          } else {
	            queue = null;
	          }
	        }

	        child = inst.render();

	        {
	          if (child === undefined && inst.render._isMockFunction) {
	            // This is probably bad practice. Consider warning here and
	            // deprecating this convenience.
	            child = null;
	          }
	        }

	        validateRenderResult(child, Component);
	        var childContext;

	        {
	          if (typeof inst.getChildContext === 'function') {
	            var _childContextTypes = Component.childContextTypes;

	            if ((typeof _childContextTypes === 'undefined' ? 'undefined' : _typeof(_childContextTypes)) === 'object') {
	              childContext = inst.getChildContext();

	              for (var contextKey in childContext) {
	                if (!(contextKey in _childContextTypes)) {
	                  {
	                    throw Error((getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
	                  }
	                }
	              }
	            } else {
	              {
	                error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
	              }
	            }
	          }

	          if (childContext) {
	            context = _assign({}, context, childContext);
	          }
	        }
	      }

	      return {
	        child: child,
	        context: context
	      };
	    }

	    var ReactDOMServerRenderer =
	    /*#__PURE__*/
	    function () {
	      // TODO: type this more strictly:
	      // DEV-only
	      function ReactDOMServerRenderer(children, makeStaticMarkup) {
	        var flatChildren = flattenTopLevelChildren(children);
	        var topFrame = {
	          type: null,
	          // Assume all trees start in the HTML namespace (not totally true, but
	          // this is what we did historically)
	          domNamespace: Namespaces.html,
	          children: flatChildren,
	          childIndex: 0,
	          context: emptyObject,
	          footer: ''
	        };

	        {
	          topFrame.debugElementStack = [];
	        }

	        this.threadID = allocThreadID();
	        this.stack = [topFrame];
	        this.exhausted = false;
	        this.currentSelectValue = null;
	        this.previousWasTextNode = false;
	        this.makeStaticMarkup = makeStaticMarkup;
	        this.suspenseDepth = 0; // Context (new API)

	        this.contextIndex = -1;
	        this.contextStack = [];
	        this.contextValueStack = [];

	        {
	          this.contextProviderStack = [];
	        }
	      }

	      var _proto = ReactDOMServerRenderer.prototype;

	      _proto.destroy = function destroy() {
	        if (!this.exhausted) {
	          this.exhausted = true;
	          this.clearProviders();
	          freeThreadID(this.threadID);
	        }
	      }
	      /**
	       * Note: We use just two stacks regardless of how many context providers you have.
	       * Providers are always popped in the reverse order to how they were pushed
	       * so we always know on the way down which provider you'll encounter next on the way up.
	       * On the way down, we push the current provider, and its context value *before*
	       * we mutated it, onto the stacks. Therefore, on the way up, we always know which
	       * provider needs to be "restored" to which value.
	       * https://github.com/facebook/react/pull/12985#issuecomment-396301248
	       */
	      ;

	      _proto.pushProvider = function pushProvider(provider) {
	        var index = ++this.contextIndex;
	        var context = provider.type._context;
	        var threadID = this.threadID;
	        validateContextBounds(context, threadID);
	        var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

	        this.contextStack[index] = context;
	        this.contextValueStack[index] = previousValue;

	        {
	          // Only used for push/pop mismatch warnings.
	          this.contextProviderStack[index] = provider;
	        } // Mutate the current value.


	        context[threadID] = provider.props.value;
	      };

	      _proto.popProvider = function popProvider(provider) {
	        var index = this.contextIndex;

	        {
	          if (index < 0 || provider !== this.contextProviderStack[index]) {
	            error('Unexpected pop.');
	          }
	        }

	        var context = this.contextStack[index];
	        var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
	        // because conceptually they are deletions--as long as we
	        // promise to never access values beyond `this.contextIndex`.

	        this.contextStack[index] = null;
	        this.contextValueStack[index] = null;

	        {
	          this.contextProviderStack[index] = null;
	        }

	        this.contextIndex--; // Restore to the previous value we stored as we were walking down.
	        // We've already verified that this context has been expanded to accommodate
	        // this thread id, so we don't need to do it again.

	        context[this.threadID] = previousValue;
	      };

	      _proto.clearProviders = function clearProviders() {
	        // Restore any remaining providers on the stack to previous values
	        for (var index = this.contextIndex; index >= 0; index--) {
	          var context = this.contextStack[index];
	          var previousValue = this.contextValueStack[index];
	          context[this.threadID] = previousValue;
	        }
	      };

	      _proto.read = function read(bytes) {
	        if (this.exhausted) {
	          return null;
	        }

	        var prevThreadID = currentThreadID;
	        setCurrentThreadID(this.threadID);
	        var prevDispatcher = ReactCurrentDispatcher.current;
	        ReactCurrentDispatcher.current = Dispatcher;

	        try {
	          // Markup generated within <Suspense> ends up buffered until we know
	          // nothing in that boundary suspended
	          var out = [''];
	          var suspended = false;

	          while (out[0].length < bytes) {
	            if (this.stack.length === 0) {
	              this.exhausted = true;
	              freeThreadID(this.threadID);
	              break;
	            }

	            var frame = this.stack[this.stack.length - 1];

	            if (suspended || frame.childIndex >= frame.children.length) {
	              var footer = frame.footer;

	              if (footer !== '') {
	                this.previousWasTextNode = false;
	              }

	              this.stack.pop();

	              if (frame.type === 'select') {
	                this.currentSelectValue = null;
	              } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
	                var provider = frame.type;
	                this.popProvider(provider);
	              } else if (frame.type === REACT_SUSPENSE_TYPE) {
	                this.suspenseDepth--;
	                var buffered = out.pop();

	                if (suspended) {
	                  suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

	                  var fallbackFrame = frame.fallbackFrame;

	                  if (!fallbackFrame) {
	                    {
	                      throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : formatProdErrorMessage(303));
	                    }
	                  }

	                  this.stack.push(fallbackFrame);
	                  out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

	                  continue;
	                } else {
	                  out[this.suspenseDepth] += buffered;
	                }
	              } // Flush output


	              out[this.suspenseDepth] += footer;
	              continue;
	            }

	            var child = frame.children[frame.childIndex++];
	            var outBuffer = '';

	            if (true) {
	              pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

	              frame.debugElementStack.length = 0;
	            }

	            try {
	              outBuffer += this.render(child, frame.context, frame.domNamespace);
	            } catch (err) {
	              if (err != null && typeof err.then === 'function') {
	                if (enableSuspenseServerRenderer) {
	                  if (!(this.suspenseDepth > 0)) {
	                    {
	                      throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : formatProdErrorMessage(342));
	                    }
	                  }

	                  suspended = true;
	                } else {
	                  if (true) {
	                    {
	                      throw Error(true ? "ReactDOMServer does not yet support Suspense." : formatProdErrorMessage(294));
	                    }
	                  }
	                }
	              } else {
	                throw err;
	              }
	            } finally {
	              if (true) {
	                popCurrentDebugStack();
	              }
	            }

	            if (out.length <= this.suspenseDepth) {
	              out.push('');
	            }

	            out[this.suspenseDepth] += outBuffer;
	          }

	          return out[0];
	        } finally {
	          ReactCurrentDispatcher.current = prevDispatcher;
	          setCurrentThreadID(prevThreadID);
	        }
	      };

	      _proto.render = function render(child, context, parentNamespace) {
	        if (typeof child === 'string' || typeof child === 'number') {
	          var text = '' + child;

	          if (text === '') {
	            return '';
	          }

	          if (this.makeStaticMarkup) {
	            return escapeTextForBrowser(text);
	          }

	          if (this.previousWasTextNode) {
	            return '<!-- -->' + escapeTextForBrowser(text);
	          }

	          this.previousWasTextNode = true;
	          return escapeTextForBrowser(text);
	        } else {
	          var nextChild;

	          var _resolve = resolve(child, context, this.threadID);

	          nextChild = _resolve.child;
	          context = _resolve.context;

	          if (nextChild === null || nextChild === false) {
	            return '';
	          } else if (!React.isValidElement(nextChild)) {
	            if (nextChild != null && nextChild.$$typeof != null) {
	              // Catch unexpected special types early.
	              var $$typeof = nextChild.$$typeof;

	              if (!($$typeof !== REACT_PORTAL_TYPE)) {
	                {
	                  throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
	                }
	              } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


	              {
	                {
	                  throw Error("Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue.");
	                }
	              }
	            }

	            var nextChildren = toArray(nextChild);
	            var frame = {
	              type: null,
	              domNamespace: parentNamespace,
	              children: nextChildren,
	              childIndex: 0,
	              context: context,
	              footer: ''
	            };

	            {
	              frame.debugElementStack = [];
	            }

	            this.stack.push(frame);
	            return '';
	          } // Safe because we just checked it's an element.


	          var nextElement = nextChild;
	          var elementType = nextElement.type;

	          if (typeof elementType === 'string') {
	            return this.renderDOM(nextElement, context, parentNamespace);
	          }

	          switch (elementType) {
	            case REACT_STRICT_MODE_TYPE:
	            case REACT_CONCURRENT_MODE_TYPE:
	            case REACT_PROFILER_TYPE:
	            case REACT_SUSPENSE_LIST_TYPE:
	            case REACT_FRAGMENT_TYPE:
	              {
	                var _nextChildren = toArray(nextChild.props.children);

	                var _frame = {
	                  type: null,
	                  domNamespace: parentNamespace,
	                  children: _nextChildren,
	                  childIndex: 0,
	                  context: context,
	                  footer: ''
	                };

	                {
	                  _frame.debugElementStack = [];
	                }

	                this.stack.push(_frame);
	                return '';
	              }

	            case REACT_SUSPENSE_TYPE:
	              {
	                {
	                  {
	                    {
	                      throw Error("ReactDOMServer does not yet support Suspense.");
	                    }
	                  }
	                }
	              }
	          }

	          if ((typeof elementType === 'undefined' ? 'undefined' : _typeof(elementType)) === 'object' && elementType !== null) {
	            switch (elementType.$$typeof) {
	              case REACT_FORWARD_REF_TYPE:
	                {
	                  var element = nextChild;

	                  var _nextChildren4;

	                  var componentIdentity = {};
	                  prepareToUseHooks(componentIdentity);
	                  _nextChildren4 = elementType.render(element.props, element.ref);
	                  _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
	                  _nextChildren4 = toArray(_nextChildren4);
	                  var _frame4 = {
	                    type: null,
	                    domNamespace: parentNamespace,
	                    children: _nextChildren4,
	                    childIndex: 0,
	                    context: context,
	                    footer: ''
	                  };

	                  {
	                    _frame4.debugElementStack = [];
	                  }

	                  this.stack.push(_frame4);
	                  return '';
	                }

	              case REACT_MEMO_TYPE:
	                {
	                  var _element = nextChild;
	                  var _nextChildren5 = [React.createElement(elementType.type, _assign({
	                    ref: _element.ref
	                  }, _element.props))];
	                  var _frame5 = {
	                    type: null,
	                    domNamespace: parentNamespace,
	                    children: _nextChildren5,
	                    childIndex: 0,
	                    context: context,
	                    footer: ''
	                  };

	                  {
	                    _frame5.debugElementStack = [];
	                  }

	                  this.stack.push(_frame5);
	                  return '';
	                }

	              case REACT_PROVIDER_TYPE:
	                {
	                  var provider = nextChild;
	                  var nextProps = provider.props;

	                  var _nextChildren6 = toArray(nextProps.children);

	                  var _frame6 = {
	                    type: provider,
	                    domNamespace: parentNamespace,
	                    children: _nextChildren6,
	                    childIndex: 0,
	                    context: context,
	                    footer: ''
	                  };

	                  {
	                    _frame6.debugElementStack = [];
	                  }

	                  this.pushProvider(provider);
	                  this.stack.push(_frame6);
	                  return '';
	                }

	              case REACT_CONTEXT_TYPE:
	                {
	                  var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
	                  // DEV mode, we create a separate object for Context.Consumer that acts
	                  // like a proxy to Context. This proxy object adds unnecessary code in PROD
	                  // so we use the old behaviour (Context.Consumer references Context) to
	                  // reduce size and overhead. The separate object references context via
	                  // a property called "_context", which also gives us the ability to check
	                  // in DEV mode if this property exists or not and warn if it does not.

	                  {
	                    if (reactContext._context === undefined) {
	                      // This may be because it's a Context (rather than a Consumer).
	                      // Or it may be because it's older React where they're the same thing.
	                      // We only want to warn if we're sure it's a new React.
	                      if (reactContext !== reactContext.Consumer) {
	                        if (!hasWarnedAboutUsingContextAsConsumer) {
	                          hasWarnedAboutUsingContextAsConsumer = true;

	                          error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	                        }
	                      }
	                    } else {
	                      reactContext = reactContext._context;
	                    }
	                  }

	                  var _nextProps = nextChild.props;
	                  var threadID = this.threadID;
	                  validateContextBounds(reactContext, threadID);
	                  var nextValue = reactContext[threadID];

	                  var _nextChildren7 = toArray(_nextProps.children(nextValue));

	                  var _frame7 = {
	                    type: nextChild,
	                    domNamespace: parentNamespace,
	                    children: _nextChildren7,
	                    childIndex: 0,
	                    context: context,
	                    footer: ''
	                  };

	                  {
	                    _frame7.debugElementStack = [];
	                  }

	                  this.stack.push(_frame7);
	                  return '';
	                }
	              // eslint-disable-next-line-no-fallthrough

	              case REACT_FUNDAMENTAL_TYPE:
	                {

	                  {
	                    {
	                      throw Error("ReactDOMServer does not yet support the fundamental API.");
	                    }
	                  }
	                }
	              // eslint-disable-next-line-no-fallthrough

	              case REACT_LAZY_TYPE:
	                {
	                  var _element2 = nextChild;
	                  var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
	                  // suspense server-side renderer is enabled so synchronously
	                  // resolved constructors are supported.

	                  initializeLazyComponentType(lazyComponent);

	                  switch (lazyComponent._status) {
	                    case Resolved:
	                      {
	                        var _nextChildren9 = [React.createElement(lazyComponent._result, _assign({
	                          ref: _element2.ref
	                        }, _element2.props))];
	                        var _frame9 = {
	                          type: null,
	                          domNamespace: parentNamespace,
	                          children: _nextChildren9,
	                          childIndex: 0,
	                          context: context,
	                          footer: ''
	                        };

	                        {
	                          _frame9.debugElementStack = [];
	                        }

	                        this.stack.push(_frame9);
	                        return '';
	                      }

	                    case Rejected:
	                      throw lazyComponent._result;

	                    case Pending:
	                    default:
	                      {
	                        {
	                          throw Error("ReactDOMServer does not yet support lazy-loaded components.");
	                        }
	                      }

	                  }
	                }
	              // eslint-disable-next-line-no-fallthrough

	              case REACT_SCOPE_TYPE:
	                {

	                  {
	                    {
	                      throw Error("ReactDOMServer does not yet support scope components.");
	                    }
	                  }
	                }
	            }
	          }

	          var info = '';

	          {
	            var owner = nextElement._owner;

	            if (elementType === undefined || (typeof elementType === 'undefined' ? 'undefined' : _typeof(elementType)) === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
	              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
	            }

	            var ownerName = owner ? getComponentName(owner) : null;

	            if (ownerName) {
	              info += '\n\nCheck the render method of `' + ownerName + '`.';
	            }
	          }

	          {
	            {
	              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType === 'undefined' ? 'undefined' : _typeof(elementType)) + "." + info);
	            }
	          }
	        }
	      };

	      _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
	        var tag = element.type.toLowerCase();
	        var namespace = parentNamespace;

	        if (parentNamespace === Namespaces.html) {
	          namespace = getIntrinsicNamespace(tag);
	        }

	        {
	          if (namespace === Namespaces.html) {
	            // Should this check be gated by parent namespace? Not sure we want to
	            // allow <SVG> or <mATH>.
	            if (tag !== element.type) {
	              error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
	            }
	          }
	        }

	        validateDangerousTag(tag);
	        var props = element.props;

	        if (tag === 'input') {
	          {
	            ReactControlledValuePropTypes.checkPropTypes('input', props);

	            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
	              error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

	              didWarnDefaultChecked = true;
	            }

	            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
	              error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

	              didWarnDefaultInputValue = true;
	            }
	          }

	          props = _assign({
	            type: undefined
	          }, props, {
	            defaultChecked: undefined,
	            defaultValue: undefined,
	            value: props.value != null ? props.value : props.defaultValue,
	            checked: props.checked != null ? props.checked : props.defaultChecked
	          });
	        } else if (tag === 'textarea') {
	          {
	            ReactControlledValuePropTypes.checkPropTypes('textarea', props);

	            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
	              error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

	              didWarnDefaultTextareaValue = true;
	            }
	          }

	          var initialValue = props.value;

	          if (initialValue == null) {
	            var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

	            var textareaChildren = props.children;

	            if (textareaChildren != null) {
	              {
	                error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	              }

	              if (!(defaultValue == null)) {
	                {
	                  throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
	                }
	              }

	              if (Array.isArray(textareaChildren)) {
	                if (!(textareaChildren.length <= 1)) {
	                  {
	                    throw Error("<textarea> can only have at most one child.");
	                  }
	                }

	                textareaChildren = textareaChildren[0];
	              }

	              defaultValue = '' + textareaChildren;
	            }

	            if (defaultValue == null) {
	              defaultValue = '';
	            }

	            initialValue = defaultValue;
	          }

	          props = _assign({}, props, {
	            value: undefined,
	            children: '' + initialValue
	          });
	        } else if (tag === 'select') {
	          {
	            ReactControlledValuePropTypes.checkPropTypes('select', props);

	            for (var i = 0; i < valuePropNames.length; i++) {
	              var propName = valuePropNames[i];

	              if (props[propName] == null) {
	                continue;
	              }

	              var isArray = Array.isArray(props[propName]);

	              if (props.multiple && !isArray) {
	                error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
	              } else if (!props.multiple && isArray) {
	                error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
	              }
	            }

	            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
	              error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

	              didWarnDefaultSelectValue = true;
	            }
	          }

	          this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
	          props = _assign({}, props, {
	            value: undefined
	          });
	        } else if (tag === 'option') {
	          var selected = null;
	          var selectValue = this.currentSelectValue;
	          var optionChildren = flattenOptionChildren(props.children);

	          if (selectValue != null) {
	            var value;

	            if (props.value != null) {
	              value = props.value + '';
	            } else {
	              value = optionChildren;
	            }

	            selected = false;

	            if (Array.isArray(selectValue)) {
	              // multiple
	              for (var j = 0; j < selectValue.length; j++) {
	                if ('' + selectValue[j] === value) {
	                  selected = true;
	                  break;
	                }
	              }
	            } else {
	              selected = '' + selectValue === value;
	            }

	            props = _assign({
	              selected: undefined,
	              children: undefined
	            }, props, {
	              selected: selected,
	              children: optionChildren
	            });
	          }
	        }

	        {
	          validatePropertiesInDevelopment(tag, props);
	        }

	        assertValidProps(tag, props);
	        var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
	        var footer = '';

	        if (omittedCloseTags.hasOwnProperty(tag)) {
	          out += '/>';
	        } else {
	          out += '>';
	          footer = '</' + element.type + '>';
	        }

	        var children;
	        var innerMarkup = getNonChildrenInnerMarkup(props);

	        if (innerMarkup != null) {
	          children = [];

	          if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
	            // text/html ignores the first character in these tags if it's a newline
	            // Prefer to break application/xml over text/html (for now) by adding
	            // a newline specifically to get eaten by the parser. (Alternately for
	            // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	            // \r is normalized out by HTMLTextAreaElement#value.)
	            // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	            // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	            // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	            // See: Parsing of "textarea" "listing" and "pre" elements
	            //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	            out += '\n';
	          }

	          out += innerMarkup;
	        } else {
	          children = toArray(props.children);
	        }

	        var frame = {
	          domNamespace: getChildNamespace(parentNamespace, element.type),
	          type: tag,
	          children: children,
	          childIndex: 0,
	          context: context,
	          footer: footer
	        };

	        {
	          frame.debugElementStack = [];
	        }

	        this.stack.push(frame);
	        this.previousWasTextNode = false;
	        return out;
	      };

	      return ReactDOMServerRenderer;
	    }();

	    /**
	     * Render a ReactElement to its initial HTML. This should only be used on the
	     * server.
	     * See https://reactjs.org/docs/react-dom-server.html#rendertostring
	     */

	    function renderToString(element) {
	      var renderer = new ReactDOMServerRenderer(element, false);

	      try {
	        var markup = renderer.read(Infinity);
	        return markup;
	      } finally {
	        renderer.destroy();
	      }
	    }
	    /**
	     * Similar to renderToString, except this doesn't create extra DOM attributes
	     * such as data-react-id that React uses internally.
	     * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
	     */

	    function renderToStaticMarkup(element) {
	      var renderer = new ReactDOMServerRenderer(element, true);

	      try {
	        var markup = renderer.read(Infinity);
	        return markup;
	      } finally {
	        renderer.destroy();
	      }
	    }

	    function renderToNodeStream() {
	      {
	        {
	          throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
	        }
	      }
	    }

	    function renderToStaticNodeStream() {
	      {
	        {
	          throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
	        }
	      }
	    } // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


	    var ReactDOMServer = {
	      renderToString: renderToString,
	      renderToStaticMarkup: renderToStaticMarkup,
	      renderToNodeStream: renderToNodeStream,
	      renderToStaticNodeStream: renderToStaticNodeStream,
	      version: ReactVersion
	    };

	    // TODO: decide on the top-level export form.
	    // This is hacky but makes it work with both Rollup and Jest


	    var server_browser = ReactDOMServer.default || ReactDOMServer;

	    module.exports = server_browser;
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var printWarning = function printWarning() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(9);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function printWarning(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	module.exports = checkPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ })
/******/ ])
});
;