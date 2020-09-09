"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var ProfileInfo_module_css_1 = require("./ProfileInfo.module.css");
var Preloader_1 = require("../../common/Preloader/Preloader");
var user_svg_1 = require("../../../img/user.svg");
var ProfileStatusWithHooks_1 = require("./ProfileStatusWithHooks");
var ProfileDataForm_1 = require("./ProfileDataForm");
var ProfileInfo = function (props) {
    var _a = react_1.useState(false), editMode = _a[0], setEditMode = _a[1];
    if (!props.profile) {
        return react_1["default"].createElement(Preloader_1["default"], null);
    }
    var onInputPhoto = function (e) {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    };
    var onSubmit = function (data) {
        props.saveProfile(data).then(function () {
            setEditMode(false);
        });
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: ProfileInfo_module_css_1["default"].descriptionBlock },
            react_1["default"].createElement("div", { style: { display: 'flex' } },
                react_1["default"].createElement("img", { src: props.profile.photos.large || user_svg_1["default"], alt: "photo", className: ProfileInfo_module_css_1["default"].avaImg }),
                react_1["default"].createElement("div", { style: { marginLeft: "20px" } },
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("b", null, props.profile.fullName || 'unknown user ')),
                    react_1["default"].createElement(ProfileStatusWithHooks_1["default"], { status: props.status, updateStatus: props.updateStatus })),
                props.isOwner && react_1["default"].createElement("input", { type: "file", onChange: onInputPhoto, className: ProfileInfo_module_css_1["default"].inputPhoto })),
            editMode
                //@ts-ignore
                ? react_1["default"].createElement(ProfileDataForm_1.ProfileDataFormRedux, { initialValues: props.profile, profile: props.profile, onSubmit: onSubmit })
                : react_1["default"].createElement(ProfileData, { profile: props.profile, onEditMode: function () { return setEditMode(true); }, isOwner: props.isOwner }))));
};
var Contact = function (_a) {
    var contactTitle = _a.contactTitle, contactValue = _a.contactValue;
    return react_1["default"].createElement("div", { className: ProfileInfo_module_css_1["default"].contact, style: { display: 'flex' } },
        react_1["default"].createElement("span", { className: ProfileInfo_module_css_1["default"].infoKey },
            contactTitle,
            ":"),
        " ",
        contactValue);
};
var ProfileData = function (_a) {
    var profile = _a.profile, props = __rest(_a, ["profile"]);
    return react_1["default"].createElement("div", { style: { position: 'relative' }, className: ProfileInfo_module_css_1["default"].profileData },
        props.isOwner && react_1["default"].createElement("button", { onClick: props.onEditMode, className: ProfileInfo_module_css_1["default"].editBtn + ' ' + ProfileInfo_module_css_1["default"].btn }),
        react_1["default"].createElement("div", { style: { display: 'flex' } },
            react_1["default"].createElement("span", { className: ProfileInfo_module_css_1["default"].infoKey }, "Looking for a job: "),
            react_1["default"].createElement("span", { className: ProfileInfo_module_css_1["default"].infoValue }, profile.lookingForAJob ? 'yes' : 'no')),
        profile.lookingForAJob && react_1["default"].createElement("div", { style: { display: 'flex' } },
            react_1["default"].createElement("span", { className: ProfileInfo_module_css_1["default"].infoKey }, "My work skills: "),
            react_1["default"].createElement("span", { className: ProfileInfo_module_css_1["default"].infoValue }, profile.lookingForAJob && profile.lookingForAJobDescription)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { className: ProfileInfo_module_css_1["default"].infoKey }, "Contacts"),
            ":",
            profile.contacts && Object
                .keys(profile.contacts)
                .map(function (key) {
                return profile.contacts[key] && react_1["default"].createElement(Contact, { key: key, className: ProfileInfo_module_css_1["default"].infoValue, contactTitle: key, contactValue: profile.contacts[key] });
            })));
};
exports["default"] = ProfileInfo;
