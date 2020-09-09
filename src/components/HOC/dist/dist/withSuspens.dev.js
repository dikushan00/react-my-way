"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.withSuspens = void 0;

var react_1 = require("react");

var Preloader_1 = require("../common/Preloader/Preloader");

exports.withSuspens = function (Component) {
  return function (props) {
    return react_1["default"].createElement(react_1["default"].Suspense, {
      fallback: react_1["default"].createElement(Preloader_1["default"], null)
    }, react_1["default"].createElement(Component, __assign({}, props)));
  };
};