"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.withAuthRedirect = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
exports.withAuthRedirect = function (Component) {
    var RedirectComponent = function (props) {
        if (!props.isAuth) {
            return react_1["default"].createElement(react_router_dom_1.Redirect, { to: '/login' });
        }
        return react_1["default"].createElement(Component, __assign({}, props));
    };
    var mapStateToPropsForRedirect = function (state) { return ({
        isAuth: state.auth.isAuth
    }); };
    var ConnectedAuthRedirectComponent = react_redux_1.connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
};
