"use strict";
exports.__esModule = true;
exports.NavbarContainer = void 0;
var react_1 = require("react");
var Navbar_module_css_1 = require("./Navbar.module.css");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var FreindsBar_1 = require("./FriendsBar/FreindsBar");
var Navbar = function (_a) {
    var state = _a.state, friends = _a.friends;
    return react_1["default"].createElement("nav", { className: Navbar_module_css_1["default"].nav },
        state.map(function (data) { return (react_1["default"].createElement("div", { className: Navbar_module_css_1["default"].item, key: data.id },
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/' + data.href, className: Navbar_module_css_1["default"].itemLink },
                react_1["default"].createElement("span", { className: Navbar_module_css_1["default"].linkWrap },
                    react_1["default"].createElement("span", { className: Navbar_module_css_1["default"].navbarItemImg + ' ' + Navbar_module_css_1["default"][data.name.toLowerCase().toString()] }),
                    react_1["default"].createElement("span", { className: Navbar_module_css_1["default"].linkName }, data.name))))); }),
        react_1["default"].createElement(FreindsBar_1["default"], { friends: friends }));
};
var mapStateToProps = function (state) { return ({
    state: state.navbar.navData,
    friends: state.usersPage.friends
}); };
exports.NavbarContainer = react_redux_1.connect(mapStateToProps)(Navbar);
exports["default"] = Navbar;
