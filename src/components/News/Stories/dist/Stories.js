"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StoriesItem_1 = require("./StoriesItem");
var react_redux_1 = require("react-redux");
var Stories = function () {
    var stories = react_redux_1.useSelector(function (state) { return state.newsPage.stories; });
    return react_1["default"].createElement("div", { className: "pageArea", style: { display: "flex", padding: "10px 15px" } }, stories.map(function (item, index, arr) {
        return react_1["default"].createElement(StoriesItem_1["default"], { story: item, index: index, arr: arr, key: item.id });
    }));
};
exports["default"] = Stories;
