"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Dialogs_module_css_1 = require("./Dialogs.module.css");
var DialogItem_1 = require("./DialogItem/DialogItem");
var Message_1 = require("./Message/Message");
var redux_form_1 = require("redux-form");
var validators_1 = require("../utils/Validators/validators");
var FormControl_1 = require("../common/FormControl/FormControl");
var mailMain_svg_1 = require("../../img/mailMain.svg");
var react_redux_1 = require("react-redux");
var dialogs_reducer_1 = require("./../../redux/dialogs_reducer");
var Dialogs = react_1["default"].memo(function (props) {
    var dispatch = react_redux_1.useDispatch();
    //let sendMessage = useSelector((state: AppStateType) => state.dialogPage.)
    var onAddMessage = function (data) {
        props.addMessage(props.userId, data.newMessageText);
        dialogs_reducer_1.sendMessage(11009, data.newMessageText);
        debugger;
        props.reset('DialogsForm');
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialogs },
            react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialogsItems }, props.state.userData.map(function (user) {
                return react_1["default"].createElement(DialogItem_1["default"], { props: user, key: user.id });
            })),
            props.userId
                ? react_1["default"].createElement(DialogsWindow, { onAddMessage: onAddMessage, state: props.state, userId: props.userId })
                : react_1["default"].createElement(DialogsMain, null))));
});
var maxLength15 = validators_1.maxLengthCreater(15);
var Textarea = FormControl_1.Element("textarea");
var DialogsForm = function (props) {
    return (react_1["default"].createElement("form", { className: Dialogs_module_css_1["default"].inputArea, onSubmit: props.handleSubmit },
        react_1["default"].createElement(redux_form_1.Field, { placeholder: 'Enter message...', className: Dialogs_module_css_1["default"].input, name: 'newMessageText', validate: [validators_1.required, maxLength15], component: Textarea }),
        react_1["default"].createElement("button", { className: "btn" }, "Send")));
};
var DialogsFormRedux = redux_form_1.reduxForm({ form: 'DialogsForm' })(DialogsForm);
var DialogsWindow = function (props) {
    return react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].messages },
        props.state.messageData.map(function (message) {
            return message.id === Number(props.userId) &&
                message.messages.map(function (message) { return react_1["default"].createElement(Message_1["default"], { props: message, key: message.id }); });
        }),
        react_1["default"].createElement(DialogsFormRedux, { onSubmit: props.onAddMessage }));
};
var DialogsMain = function () {
    return react_1["default"].createElement("div", { style: { display: 'flex', padding: "10px" } },
        react_1["default"].createElement("img", { src: mailMain_svg_1["default"], alt: "Photo", style: { width: "200px", marginLeft: "100px" } }));
};
exports["default"] = Dialogs;
