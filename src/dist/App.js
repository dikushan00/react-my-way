"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Navbar_1 = require("./components/Navbar/Navbar");
var react_router_dom_1 = require("react-router-dom");
var Music_1 = require("./components/Music/Music");
var Settings_1 = require("./components/Settings/Settings");
var Footer_1 = require("./Footer");
var Login_1 = require("./components/Login/Login");
var NewsContainer_1 = require("./components/News/NewsContainer");
var HeaderContainer_1 = require("./components/Header/HeaderContainer");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var Preloader_1 = require("./components/common/Preloader/Preloader");
var app_reducer_1 = require("./redux/app_reducer");
var profile_reducer_1 = require("./redux/profile_reducer");
var store_redux_1 = require("./redux/store-redux");
var withSuspens_1 = require("./components/HOC/withSuspens");
var ProfileContainer_1 = require("./components/Profile/ProfileContainer");
var UsersContainer = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require('./components/Users/UsersContainer'); }); });
var DialogsContainer = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require('./components/Dialogs/DialogsContainer'); }); });
var WithSusmensDialogs = withSuspens_1.withSuspens(DialogsContainer);
var WithSusmensUsers = withSuspens_1.withSuspens(UsersContainer);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        this.props.init();
    };
    App.prototype.render = function () {
        if (!this.props.initialized) {
            return react_1["default"].createElement(Preloader_1["default"], null);
        }
        return (react_1["default"].createElement("div", { className: "wrapper" },
            react_1["default"].createElement("div", { className: 'app-wrapper' },
                react_1["default"].createElement(HeaderContainer_1["default"], null),
                react_1["default"].createElement(Navbar_1.NavbarContainer, null),
                react_1["default"].createElement("div", { className: "app-wrapper-content" },
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/profile/:userId?', render: function () { return react_1["default"].createElement(ProfileContainer_1["default"], null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/dialogs/:userId?', render: function () { return react_1["default"].createElement(WithSusmensDialogs, null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/music', render: function () { return react_1["default"].createElement(Music_1["default"], null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/settings', render: function () { return react_1["default"].createElement(Settings_1["default"], null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/news', render: function () { return react_1["default"].createElement(NewsContainer_1["default"], null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', render: function () { return react_1["default"].createElement(NewsContainer_1["default"], null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/users', render: function () { return react_1["default"].createElement(WithSusmensUsers, null); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/login', render: function () { return react_1["default"].createElement(Login_1["default"], null); } }))),
            react_1["default"].createElement(Footer_1["default"], null)));
    };
    return App;
}(react_1.PureComponent));
var mapStateToProps = function (state) { return ({
    initialized: state.app.initialized,
    myId: state.auth.id
}); };
var AppContainer = redux_1.compose(react_router_dom_1.withRouter, react_redux_1.connect(mapStateToProps, { init: app_reducer_1.init, check_auth: profile_reducer_1.check_auth }))(App);
var MyWayApp = function () {
    return react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_redux_1.Provider, { store: store_redux_1["default"] },
            react_1["default"].createElement(AppContainer, null)));
};
exports["default"] = MyWayApp;
