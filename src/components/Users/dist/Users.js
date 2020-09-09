"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paginator_1 = require("../common/paginator/Paginator");
var Preloader_1 = require("../common/Preloader/Preloader");
var UserItem_1 = require("./UserItem");
var UsersSearchForm_1 = require("./UsersSearchForm");
var Users = function (props) {
    var switch_follow = function (followed, userId) {
        if (followed) {
            props.unfollow(userId);
        }
        else {
            props.follow(userId);
        }
    };
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(UsersSearchForm_1["default"], { onFilterChanged: props.onFilterChanged }),
        react_1["default"].createElement(Paginator_1["default"], { currentPage: props.currentPage, pageCount: props.pageCount, pageSize: props.pageSize, pageEvent: props.pageEvent, portionSize: 10 }),
        props.isFetching
            ? react_1["default"].createElement(Preloader_1["default"], null)
            : props.state.map(function (user) {
                return react_1["default"].createElement(UserItem_1["default"], { user: user, switch_follow: switch_follow, toggleProgressArr: props.toggleProgressArr });
            }));
};
exports["default"] = Users;
