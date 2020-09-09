"use strict";
exports.__esModule = true;
var News_1 = require("./News");
var react_redux_1 = require("react-redux");
var news_reducer_1 = require("../../redux/news_reducer");
var withAuthRedirect_1 = require("../HOC/withAuthRedirect");
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
var mapStateToProps = function (state) {
    return {
        state: state.newsPage
    };
};
exports["default"] = redux_1.compose(react_redux_1.connect(mapStateToProps, { addNewComment: news_reducer_1.actions.addNewComment, updateLikeCount: news_reducer_1.actions.updateLikeCount, updateCommentCount: news_reducer_1.actions.updateCommentCount, reset: redux_form_1.reset }), withAuthRedirect_1.withAuthRedirect)(News_1["default"]);
