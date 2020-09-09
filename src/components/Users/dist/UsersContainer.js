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
var react_redux_1 = require("react-redux");
var users_reducer_1 = require("../../redux/users_reducer");
var Users_1 = require("./Users");
var withAuthRedirect_1 = require("../HOC/withAuthRedirect");
var redux_1 = require("redux");
var users_selector_1 = require("../../redux/users_selector");
var UsersContainer = /** @class */ (function (_super) {
    __extends(UsersContainer, _super);
    function UsersContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageEvent = function (p) {
            _this.props.getUsers(p, _this.props.pageSize, _this.props.filter);
        };
        _this.onFilterChanged = function (filter) {
            _this.props.getUsers(_this.props.currentPage, _this.props.pageSize, filter);
        };
        return _this;
    }
    UsersContainer.prototype.componentDidMount = function () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
    };
    UsersContainer.prototype.render = function () {
        return react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Users_1["default"], { isFetching: this.props.isFetching, currentPage: this.props.currentPage, pageCount: this.props.pageCount, pageSize: this.props.pageSize, state: this.props.state, pageEvent: this.pageEvent, toggleProgressArr: this.props.toggleProgressArr, follow: this.props.follow, unfollow: this.props.unfollow, onFilterChanged: this.onFilterChanged }));
    };
    return UsersContainer;
}(react_1.PureComponent));
var mapStateToProps = function (state) {
    return {
        state: state.usersPage.usersData,
        currentPage: users_selector_1.getCurrentPage(state),
        pageCount: users_selector_1.getPageCount(state),
        pageSize: users_selector_1.getPageSize(state),
        filter: users_selector_1.getFilter(state),
        isFetching: users_selector_1.getIsFetching(state),
        toggleProgressArr: users_selector_1.getToggleProgressArr(state)
    };
};
exports["default"] = redux_1.compose(withAuthRedirect_1.withAuthRedirect, react_redux_1.connect(mapStateToProps, {
    switch_follow: users_reducer_1.actions.switch_follow,
    toggleProgress: users_reducer_1.actions.toggleProgress,
    getUsers: users_reducer_1.getUsers,
    follow: users_reducer_1.follow,
    unfollow: users_reducer_1.unfollow
}))(UsersContainer);
//
// const mapDispatchToProps = (dispatch) => {
//
//     return {
//         switch_follow: (usersId) => {
//             dispatch(switch_followAC(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setCountPage: (pageCount) => {
//             dispatch(setPageCountAC(pageCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
