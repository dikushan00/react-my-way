"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FreindsBar_module_css_1 = require("../FriendsBar/FreindsBar.module.css");
var user_1__svg_1 = require("../../../img/user(1).svg");
var react_router_dom_1 = require("react-router-dom");
var FriendsBar = function (_a) {
    var friends = _a.friends;
    return react_1["default"].createElement("div", { className: FreindsBar_module_css_1["default"].FriendsBar },
        react_1["default"].createElement("h3", { style: { textAlign: 'center' } }, "Friends"),
        react_1["default"].createElement("div", { className: FreindsBar_module_css_1["default"].FriendsBarContent }, friends.map(function (item, i) {
            if (i < 5) {
                return react_1["default"].createElement("div", { key: item.id },
                    react_1["default"].createElement(react_router_dom_1.NavLink, { to: "profile/" + item.id, className: FreindsBar_module_css_1["default"].item },
                        item.photos.large
                            ? react_1["default"].createElement("img", { src: item.photos.large, style: { width: '40px' }, alt: "User" })
                            : react_1["default"].createElement("img", { src: user_1__svg_1["default"], style: { width: '40px' }, alt: "User" }),
                        react_1["default"].createElement("span", { className: FreindsBar_module_css_1["default"].itemName, style: { display: 'block', fontSize: '13px' } }, item.name)));
            }
        })));
};
exports["default"] = FriendsBar;
