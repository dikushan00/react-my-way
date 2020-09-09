"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dialogs_reducer_1 = require("../../redux/dialogs_reducer");
var Dialogs_1 = require("./Dialogs");
var react_redux_1 = require("react-redux");
var redux_form_1 = require("redux-form");
var redux_1 = require("redux");
var withAuthRedirect_1 = require("../HOC/withAuthRedirect");
var react_router_dom_1 = require("react-router-dom");
var DialogsContainer = function (props) {
    return react_1["default"].createElement(Dialogs_1["default"], { state: props.state, addMessage: props.addMessage, reset: props.reset, userId: props.match.params.userId });
};
var mapStateToProps = function (state) {
    return {
        state: state.dialogPage
    };
};
exports["default"] = redux_1.compose(withAuthRedirect_1.withAuthRedirect, react_redux_1.connect(mapStateToProps, { addMessage: dialogs_reducer_1.actions.addMessage, reset: redux_form_1.reset }), react_router_dom_1.withRouter)(DialogsContainer);
