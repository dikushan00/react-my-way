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
exports.unfollow = exports.follow = exports.getFriends = exports.getUsers = exports.actions = void 0;
var api_1 = require("../api/api");
var initialState = {
    usersData: [],
    pageSize: 100,
    currentPage: 1,
    pageCount: 0,
    isFetching: true,
    toggleProgressArr: [],
    friends: [],
    filter: {
        term: '',
        friends: null
    }
};
var users_reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SN/Users/SWITCH_FOLLOW': {
            return __assign(__assign({}, state), { usersData: state.usersData.map(function (u) {
                    if (u.id === action.userId) {
                        return __assign(__assign({}, u), { followed: !u.followed });
                    }
                    return u;
                }) });
        }
        case 'SN/Users/SET_USERS': {
            return __assign(__assign({}, state), { usersData: __spreadArrays(action.users) });
        }
        case 'SN/Users/SET_CURRENT_PAGE': {
            return __assign(__assign({}, state), { currentPage: action.currentPage });
        }
        case 'SN/Users/SET_TOTAL_PAGE_COUNT': {
            return __assign(__assign({}, state), { pageCount: action.count });
        }
        case 'SN/Users/TOGGLE_FETCHING': {
            return __assign(__assign({}, state), { isFetching: action.isFetching });
        }
        case 'SN/Users/TOGGLE_PROGRESS': {
            var ID_1 = action.id;
            return __assign(__assign({}, state), { toggleProgressArr: action.type
                    ? __spreadArrays(state.toggleProgressArr, [action.id]) : state.toggleProgressArr.filter(function (id) { return id != ID_1; }) });
        }
        case 'SN/Users/GET_FRIENDS': {
            return __assign(__assign({}, state), { friends: __spreadArrays(action.friends) });
        }
        case 'SN/Users/GET_FILTER': {
            return __assign(__assign({}, state), { filter: { term: action.filter.term, friends: action.filter.friends } });
        }
        default: {
            return state;
        }
    }
};
exports.actions = {
    switch_follow: function (userId) { return ({ type: 'SN/Users/SWITCH_FOLLOW', userId: userId }); },
    setUsers: function (users) { return ({ type: 'SN/Users/SET_USERS', users: users }); },
    setCurrentPage: function (currentPage) { return ({ type: 'SN/Users/SET_CURRENT_PAGE', currentPage: currentPage }); },
    setPageCount: function (count) { return ({ type: 'SN/Users/SET_TOTAL_PAGE_COUNT', count: count }); },
    toggleIsFetching: function (isFetching) { return ({ type: 'SN/Users/TOGGLE_FETCHING', isFetching: isFetching }); },
    toggleProgress: function (isFetching, id) { return ({ type: 'SN/Users/TOGGLE_PROGRESS', isFetching: isFetching, id: id }); },
    getFriends: function (friends) { return ({ type: 'SN/Users/GET_FRIENDS', friends: friends }); },
    getFilter: function (filter) { return ({ type: 'SN/Users/GET_FILTER', filter: filter }); }
};
exports.getUsers = function (currentPage, pageSize, filter) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.actions.setCurrentPage(currentPage));
                dispatch(exports.actions.toggleIsFetching(true));
                dispatch(exports.actions.getFilter(filter));
                return [4 /*yield*/, api_1.UsersAPI.getUsers(currentPage, pageSize, filter.term, filter.friends)];
            case 1:
                data = _a.sent();
                dispatch(exports.actions.toggleIsFetching(false));
                dispatch(exports.actions.setUsers(data.items));
                dispatch(exports.actions.setPageCount(data.totalCount));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getFriends = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.actions.toggleIsFetching(true));
                return [4 /*yield*/, api_1.UsersAPI.getFriends()];
            case 1:
                data = _a.sent();
                dispatch(exports.actions.toggleIsFetching(false));
                dispatch(exports.actions.getFriends(data.items));
                return [2 /*return*/];
        }
    });
}); }; };
exports.follow = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.actions.toggleProgress(true, userId));
                return [4 /*yield*/, api_1.UsersAPI.follow(userId)];
            case 1:
                data = _a.sent();
                dispatch(exports.actions.switch_follow(userId));
                dispatch(exports.actions.toggleProgress(false, userId));
                return [2 /*return*/];
        }
    });
}); }; };
exports.unfollow = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.actions.toggleProgress(true, userId));
                return [4 /*yield*/, api_1.UsersAPI.unfollow(userId)];
            case 1:
                data = _a.sent();
                dispatch(exports.actions.switch_follow(userId));
                dispatch(exports.actions.toggleProgress(false, userId));
                return [2 /*return*/];
        }
    });
}); }; };
exports["default"] = users_reducer;
