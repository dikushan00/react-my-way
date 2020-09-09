"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.sendMessage = exports.actions = void 0;
var api_1 = require("../api/api");
var id = 4;
var initialState = {
    userData: [
        { "id": 1, "name": "Dmitri" },
        { "id": 2, "name": "Svetlana" },
        { "id": 3, "name": "Nauryz" },
        { "id": 4, "name": "Dinmukhamed" },
        { "id": 5, "name": "Mukhit" }
    ],
    messageData: [
        {
            id: 1,
            messages: [
                { "id": 1, "message": "Yo" },
                { "id": 2, "message": "Hello" },
                { "id": 1, "message": "How are you" }
            ]
        },
        {
            id: 2,
            messages: [
                { "id": 1, "message": "hello. how are you?" },
                { "id": 2, "message": "Hello" },
                { "id": 1, "message": "im good" }
            ]
        },
        {
            id: 3,
            messages: [
                { "id": 1, "message": "hi" },
                { "id": 2, "message": "Hello" },
                { "id": 1, "message": "what we get in home work" }
            ]
        },
        {
            id: 4,
            messages: [
                { "id": 1, "message": "drop our phootos" },
                { "id": 2, "message": "which?" },
                { "id": 1, "message": "from zerendy" }
            ]
        },
        {
            id: 5,
            messages: [
                { "id": 1, "message": "Hello classmates" },
                { "id": 2, "message": "Hello" },
                { "id": 1, "message": "wourld you like have hang out with me?" },
                { "id": 2, "message": "yes, go!" }
            ]
        }
    ],
    newMessages: []
};
var dialogs_reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SN/Dialogs/ADD_NEW_MESSAGE': {
            if (action.newMessageText.length > 0) {
                return __assign(__assign({}, state), { messageData: state.messageData.map(function (item) {
                        if (+action.id == item.id) {
                            item.messages = __spreadArrays(item.messages, [{ "id": 2, "message": action.newMessageText }]);
                            return item;
                        }
                        return item;
                    }) });
            }
            id += 2;
            return state;
        }
        case 'SN/Dialogs/SEND_NEW_MESSAGE': {
            return __assign(__assign({}, state), { newMessages: action.data });
        }
        default: {
            return state;
        }
    }
};
exports.actions = {
    addMessage: function (id, newMessageText) { return ({ type: 'SN/Dialogs/ADD_NEW_MESSAGE', id: id, newMessageText: newMessageText }); },
    sendNewMessage: function (data) { return ({ type: 'SN/Dialogs/SEND_NEW_MESSAGE', data: data }); }
};
exports.sendMessage = function (id, message) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                debugger;
                return [4 /*yield*/, api_1.DialogsAPI.sendMessagesToUser(id, message).then(function () {
                        dispatch(exports.actions.sendNewMessage(data));
                    })];
            case 1:
                data = _a.sent();
                return [2 /*return*/];
        }
    });
}); }; };
exports["default"] = dialogs_reducer;
// [
//     {
//         id: 1,
//         messages: [
//             {"id": 1, "message": "Yo"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "How are you"}
//         ]
//     },
//     {
//         id: 2,
//         messages: [
//             {"id": 1, "message": "hello. how are you?"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "im good"}
//         ]
//     },
//     {
//         id: 3,
//         messages: [
//             {"id": 1, "message": "hi"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "what we get in home work"}
//         ]
//     },
//     {
//         id: 4,
//         messages: [
//             {"id": 1, "message": "drop our phootos"},
//             {"id": 2, "message": "which?"},
//             {"id": 1, "message": "from zerendy"}
//         ]
//     },
//     {
//         id: 5,
//         messages: [
//             {"id": 1, "message": "Hello classmates"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "wourld you like have hang out with me?"},
//             {"id": 2, "message": "yes, go!"}
//         ]
//     }
// ]
