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
var Profile_1 = require("./Profile");
var react_redux_1 = require("react-redux");
var profile_reducer_1 = require("../../redux/profile_reducer");
var react_router_dom_1 = require("react-router-dom");
var redux_1 = require("redux");
var withAuthRedirect_1 = require("../HOC/withAuthRedirect");
var ProfileContainer = /** @class */ (function (_super) {
    __extends(ProfileContainer, _super);
    function ProfileContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refreshProfile = function () {
            var userId = +_this.props.match.params.userId;
            if (!userId)
                userId = _this.props.authId;
            _this.props.check_auth(userId);
            _this.props.getStatus(userId);
        };
        return _this;
    }
    ProfileContainer.prototype.componentDidMount = function () {
        this.refreshProfile();
    };
    ProfileContainer.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    };
    ProfileContainer.prototype.render = function () {
        return (react_1["default"].createElement(Profile_1["default"], { state: this.props.state, isOwner: !this.props.match.params.userId, status: this.props.status, updateStatus: this.props.updateStatus, updatePhoto: this.props.updatePhoto, saveProfile: this.props.saveProfile }));
    };
    return ProfileContainer;
}(react_1.PureComponent));
var mapStateToProps = function (state) { return ({
    state: state.profilePage,
    status: state.profilePage.status,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
}); };
exports["default"] = redux_1.compose(react_redux_1.connect(mapStateToProps, { check_auth: profile_reducer_1.check_auth, getStatus: profile_reducer_1.getStatus, updateStatus: profile_reducer_1.updateStatus, updatePhoto: profile_reducer_1.updatePhoto, saveProfile: profile_reducer_1.saveProfile }), react_router_dom_1.withRouter, withAuthRedirect_1.withAuthRedirect)(ProfileContainer);
