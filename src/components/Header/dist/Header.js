"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_module_css_1 = require("./Header.module.css");
var react_router_dom_1 = require("react-router-dom");
var user_1__svg_1 = require("../../img/user(1).svg");
var logo_png_1 = require("../../img/logo.png");
var Header = function (props) {
    var logout = function () {
        props.logoutMe();
    };
    return react_1["default"].createElement("header", { className: Header_module_css_1["default"].header },
        react_1["default"].createElement(react_router_dom_1.NavLink, { className: "logo", to: '/' },
            react_1["default"].createElement("img", { src: logo_png_1["default"] })),
        react_1["default"].createElement("div", { className: Header_module_css_1["default"].authArea }, props.isAuth
            ? react_1["default"].createElement("div", { className: Header_module_css_1["default"].accountInfo },
                props.state.photos ? props.state.photos.large && react_1["default"].createElement("img", { src: props.state.photos.large, className: Header_module_css_1["default"].userImg }) : react_1["default"].createElement("img", { src: user_1__svg_1["default"], className: Header_module_css_1["default"].userImg }),
                props.login,
                react_1["default"].createElement("div", { className: Header_module_css_1["default"].accountDrop },
                    react_1["default"].createElement("p", null, props.login),
                    react_1["default"].createElement("button", { onClick: logout, className: "btn" }, "logout")))
            : react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/login" }, "Login")));
};
exports["default"] = Header;
