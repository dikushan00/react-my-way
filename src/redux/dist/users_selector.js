"use strict";
exports.__esModule = true;
exports.getFilter = exports.getToggleProgressArr = exports.getIsFetching = exports.getPageSize = exports.getPageCount = exports.getCurrentPage = exports.getUsersListSelector = void 0;
var reselect_1 = require("reselect");
var getUsersList = function (state) {
    return state.usersPage.usersData;
};
exports.getUsersListSelector = reselect_1.createSelector(getUsersList, function (users) {
    return users.filter(function (u) { return true; });
});
exports.getCurrentPage = function (state) {
    return state.usersPage.currentPage;
};
exports.getPageCount = function (state) {
    return state.usersPage.pageCount;
};
exports.getPageSize = function (state) {
    return state.usersPage.pageSize;
};
exports.getIsFetching = function (state) {
    return state.usersPage.isFetching;
};
exports.getToggleProgressArr = function (state) {
    return state.usersPage.toggleProgressArr;
};
exports.getFilter = function (state) {
    return state.usersPage.filter;
};
