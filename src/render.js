"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

var fs = _interopRequireWildcard(require("fs"));

var _prettier = _interopRequireDefault(require("prettier"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _Foooter = _interopRequireDefault(require("./Foooter"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (
        obj === null ||
        (_typeof(obj) !== "object" && typeof obj !== "function")
    ) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

render();

function render() {
    var html = _server.default.renderToStaticMarkup(
        /*#__PURE__*/ _react.default.createElement(HelloWorldPage, null)
    );

    var htmlWDoc = "<!DOCTYPE html>" + html;

    var prettyHtml = _prettier.default.format(htmlWDoc, {
        parser: "html"
    });

    var outputFile = "./output.html";
    fs.writeFileSync(outputFile, prettyHtml);
    console.log("Wrote ".concat(outputFile));
}

function HelloWorldPage() {
    return /*#__PURE__*/ _react.default.createElement(
        "html",
        {
            lang: "en"
        },
        /*#__PURE__*/ _react.default.createElement(
            "head",
            null,
            /*#__PURE__*/ _react.default.createElement("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ _react.default.createElement("title", null, "Hello world")
        ),
        /*#__PURE__*/ _react.default.createElement(
            "body",
            null,
            /*#__PURE__*/ _react.default.createElement("h1", null, "Hello world"),
            /*#__PURE__*/ _react.default.createElement(_Foooter.default, null)
        )
    );
}
