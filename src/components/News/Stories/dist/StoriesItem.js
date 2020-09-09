"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var user_1__svg_1 = require("../../../img/user(1).svg");
var next_svg_1 = require("../../../img/next.svg");
var back_svg_1 = require("../../../img/back.svg");
var news_reducer_1 = require("./../../../redux/news_reducer");
var StoriesItem = react_1["default"].memo(function (_a) {
    var story = _a.story, index = _a.index, arr = _a.arr;
    var userPhoto = react_redux_1.useSelector(function (state) { return state.profilePage.photos && state.profilePage.photos.large; });
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState(false), isBigMode = _b[0], setBigMode = _b[1];
    var _c = react_1.useState(story.viewed), isStoryViewed = _c[0], setStoryViewed = _c[1];
    var _d = react_1.useState(story.photo), storyPhoto = _d[0], setStoryPhoto = _d[1];
    var _e = react_1.useState(index), storyIndex = _e[0], setStoryIndex = _e[1];
    var imgStyles = { width: "110px", height: "185px", borderRadius: "5px", cursor: "pointer" };
    var imgStyle = { width: "43px", borderRadius: "50%", border: isStoryViewed ? "4px solid #ccc" : "4px solid #4a76a8", cursor: "pointer" };
    var onStoryClick = function () {
        setBigMode(true);
        setStoryViewed(true);
        dispatch(news_reducer_1.actions.viewStory(story.id));
    };
    var storyTime;
    var changeStoryPhoto = function (direction) {
        if (direction) {
            setStoryPhoto(arr[storyIndex + 1].photo);
            dispatch(news_reducer_1.actions.viewStory(arr[storyIndex + 1].id));
            setStoryIndex(storyIndex + 1);
        }
        else if (!direction && storyIndex - 1 >= 0) {
            setStoryPhoto(arr[storyIndex - 1].photo);
            dispatch(news_reducer_1.actions.viewStory(arr[storyIndex - 1].id));
            setStoryIndex(storyIndex - 1);
        }
    };
    if (isBigMode) {
        document.body.classList.add('pop_overflow');
        storyTime = setInterval(function () {
            if (arr.length === 1 || storyIndex + 1 === arr.length) {
                setBigMode(false);
            }
            else {
                changeStoryPhoto(true);
            }
        }, 7000);
    }
    else {
        document.body.classList.remove('pop_overflow');
        storyPhoto !== story.photo && setStoryPhoto(story.photo);
        clearInterval(storyTime);
    }
    return react_1["default"].createElement("div", { style: { marginLeft: "15px", position: "relative" } },
        react_1["default"].createElement("img", { src: story.photo, alt: "Photo", style: imgStyles, onClick: onStoryClick }),
        react_1["default"].createElement("div", { style: { position: "absolute", top: "110px", left: "30px" } },
            react_1["default"].createElement("img", { onClick: onStoryClick, src: userPhoto ? userPhoto : user_1__svg_1["default"], style: imgStyle, alt: "Photo" })),
        isBigMode && react_1["default"].createElement(StoryBigMode, { isBigMode: isBigMode, setBigMode: setBigMode, storyPhoto: storyPhoto, changeStoryPhoto: changeStoryPhoto, storyId: storyIndex, key: storyIndex }));
});
var StoryBigMode = react_1["default"].memo(function (_a) {
    var isBigMode = _a.isBigMode, setBigMode = _a.setBigMode, storyPhoto = _a.storyPhoto, changeStoryPhoto = _a.changeStoryPhoto, storyId = _a.storyId;
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { id: "overlay", className: isBigMode ? "overlay" : '', onClick: function () { return setBigMode(false); } }),
        react_1["default"].createElement("div", { id: "magnify", className: isBigMode ? "magnify" : '' },
            react_1["default"].createElement("img", { src: storyPhoto }),
            react_1["default"].createElement("img", { src: back_svg_1["default"], onClick: function () { return changeStoryPhoto(false); }, alt: "Back", style: { width: "35px", position: "fixed", top: "50px", left: "600px", zIndex: 10000 } }),
            react_1["default"].createElement("img", { src: next_svg_1["default"], onClick: function () { return changeStoryPhoto(true); }, alt: "Next", style: { width: "35px", position: "fixed", top: "50px", right: "530px", zIndex: 10000 } }),
            react_1["default"].createElement("span", { className: "popupLayer", id: '' + storyId }),
            react_1["default"].createElement("div", { id: "close-popup", onClick: function () { setBigMode(false); document.body.classList.remove('pop_overflow'); } },
                react_1["default"].createElement("i", null))));
});
exports["default"] = StoriesItem;
