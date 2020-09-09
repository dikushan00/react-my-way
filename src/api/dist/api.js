"use strict";
exports.__esModule = true;
exports.DialogsAPI = exports.SecurityAPI = exports.LoginAPI = exports.ProfileAPI = exports.AuthAPI = exports.UsersAPI = exports.CaptchaEnum = exports.ResultCodeEnum = void 0;
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "201fbca2-9214-4c3c-bd7a-b698236c954c"
    }
});
var ResultCodeEnum;
(function (ResultCodeEnum) {
    ResultCodeEnum[ResultCodeEnum["Success"] = 0] = "Success";
    ResultCodeEnum[ResultCodeEnum["Error"] = 1] = "Error";
})(ResultCodeEnum = exports.ResultCodeEnum || (exports.ResultCodeEnum = {}));
var CaptchaEnum;
(function (CaptchaEnum) {
    CaptchaEnum[CaptchaEnum["Captcha"] = 10] = "Captcha";
})(CaptchaEnum = exports.CaptchaEnum || (exports.CaptchaEnum = {}));
exports.UsersAPI = {
    getUsers: function (currentPage, pageSize, term, friends) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (term === void 0) { term = ''; }
        if (friends === void 0) { friends = null; }
        return instance.get("users?page=" + currentPage + "&count=" + pageSize + "&term=" + term + (friends === null ? '' : "&friend=" + friends))
            .then(function (response) {
            return response.data;
        });
    },
    follow: function (userId) {
        return instance.post("follow/" + userId, {})
            .then(function (response) {
            return response.data;
        });
    },
    unfollow: function (userId) {
        return instance["delete"]("follow/" + userId)
            .then(function (response) {
            return response.data;
        });
    },
    getFriends: function () {
        return instance.get("users?count=100&friend=true")
            .then(function (res) { return res.data; });
    }
};
exports.AuthAPI = {
    checkAuthMe: function () {
        return instance.get("auth/me")
            .then(function (response) {
            return response.data;
        });
    }
};
exports.ProfileAPI = {
    checkAuth: function (userId) {
        return instance.get("profile/" + userId)
            .then(function (response) {
            return response.data;
        });
    },
    getStatus: function (userId) {
        return instance.get("profile/status/" + userId)
            .then(function (response) {
            return response.data;
        });
    },
    updateStatus: function (status) {
        return instance.put("profile/status", { status: status })
            .then(function (response) {
            return response.data;
        });
    },
    updateMainPhoto: function (photo) {
        var formData = new FormData();
        formData.append("image", photo);
        return instance.put("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
            return response.data;
        });
    },
    saveProfile: function (profile) {
        return instance.put("profile", profile);
    }
};
exports.LoginAPI = {
    checkLogin: function (email, password, rememberMe, captcha) {
        if (captcha === void 0) { captcha = null; }
        return instance.post("auth/login", { email: email, password: password, rememberMe: rememberMe, captcha: captcha });
    },
    logout: function () {
        return instance["delete"]("auth/login");
    }
};
exports.SecurityAPI = {
    getCaptcha: function () {
        return instance.get("security/get-captcha-url");
    }
};
exports.DialogsAPI = {
    viewAllDialogs: function () {
        return instance.get("dialogs");
    },
    startDialog: function (userId) {
        return instance.put("dialogs/" + userId);
    },
    getMessagesWUser: function (userId) {
        return instance.get("dialogs/" + userId + "/messages");
    },
    sendMessagesToUser: function (userId, message) {
        return instance.post("dialogs/" + userId + "/messages", {
            body: '' + message
        }).then(function (res) {
            return res.data;
        });
    }
};
