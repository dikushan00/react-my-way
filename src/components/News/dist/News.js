"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NewsItem_1 = require("./newsItem/NewsItem");
var News_module_css_1 = require("./News.module.css");
var Stories_1 = require("./Stories/Stories");
var News = function (props) {
    return (react_1["default"].createElement("div", { className: News_module_css_1["default"].newsWrap },
        react_1["default"].createElement(Stories_1["default"], null),
        react_1["default"].createElement("div", { className: News_module_css_1["default"].postArea }, props.state.news.map(function (post) { return (react_1["default"].createElement(NewsItem_1["default"], { post: post, addComment: props.addNewComment, updateLikeCount: props.updateLikeCount, updateCommentCount: props.updateCommentCount, reset: props.reset, key: post.id })); }))));
};
exports["default"] = News;
