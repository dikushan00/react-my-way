"use strict";
exports.__esModule = true;
var react_1 = require("react");
var formik_1 = require("formik");
var UsersSearchForm = function (props) {
    var submit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        var friendsValue = {
            term: values.term,
            friends: values.friends === "null" ? null : values.friends ? true : false
        };
        props.onFilterChanged(friendsValue);
        setSubmitting(false);
    };
    return react_1["default"].createElement("div", { className: "pageArea" },
        react_1["default"].createElement(formik_1.Formik, { initialValues: { term: '', friends: "null" }, validate: function (values) {
                var errors = {};
                return errors;
            }, onSubmit: submit }, function (_a) {
            var isSubmitting = _a.isSubmitting;
            return (react_1["default"].createElement(formik_1.Form, null,
                react_1["default"].createElement(formik_1.Field, { type: "text", name: "term", placeholder: 'Enter name...' }),
                react_1["default"].createElement(formik_1.Field, { name: "friends", as: "select", placeholder: "Favorite Color", style: { marginLeft: '10px' } },
                    react_1["default"].createElement("option", { value: "true" }, "Friends"),
                    react_1["default"].createElement("option", { value: "false" }, "Unfollowed users"),
                    react_1["default"].createElement("option", { value: "null" }, "All users")),
                react_1["default"].createElement("button", { type: "submit", className: "btn", disabled: isSubmitting }, "Find")));
        }));
};
exports["default"] = UsersSearchForm;
