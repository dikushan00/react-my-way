"use strict";
exports.__esModule = true;
var react_1 = require("react");
var formik_1 = require("formik");
var submit = function () {
};
var Basic = function () {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(formik_1.Formik, { initialValues: { term: '' }, validate: function (values) {
                var errors = {};
                return errors;
            }, onSubmit: submit }, function (_a) {
            var isSubmitting = _a.isSubmitting;
            return (react_1["default"].createElement(formik_1.Form, null,
                react_1["default"].createElement(formik_1.Field, { type: "text", name: "term" }),
                react_1["default"].createElement("button", { type: "submit", disabled: isSubmitting }, "Find")));
        }));
};
exports["default"] = Basic;
