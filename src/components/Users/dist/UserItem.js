"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Users_module_css_1 = require("./Users.module.css");
var user_svg_1 = require("../../img/user.svg");
var react_router_dom_1 = require("react-router-dom");
var UserItem = function (_a) {
    var user = _a.user, switch_follow = _a.switch_follow, toggleProgressArr = _a.toggleProgressArr;
    return react_1["default"].createElement("div", { className: Users_module_css_1["default"].user },
        react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/profile/" + user.id },
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("img", { className: Users_module_css_1["default"].avaImg, src: user.photos.small !== null ? user.photos.small : user_svg_1["default"] }))),
        react_1["default"].createElement("span", { className: Users_module_css_1["default"].userInfo },
            react_1["default"].createElement("div", null, user.name),
            react_1["default"].createElement("div", null, user.status),
            react_1["default"].createElement("button", { className: Users_module_css_1["default"].btn + ' ' + (user.followed ? Users_module_css_1["default"].btnBlue : Users_module_css_1["default"].btnRed), onClick: function () { return switch_follow(user.followed, user.id); }, disabled: toggleProgressArr.some(function (id) { return id === user.id; }) }, user.followed ? "Unfollow" : "Follow")));
};
exports["default"] = UserItem;
