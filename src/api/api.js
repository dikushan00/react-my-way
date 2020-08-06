import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "201fbca2-9214-4c3c-bd7a-b698236c954c"
    }
})

export const UsersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data;
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}

export const AuthAPI = {

    checkAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}

export const ProfileAPI = {

    checkAuth(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data;
            })
    },
    updateMainPhoto(photo) {
        return instance.put(`profile/photo`, {photo})
            .then(response => {
                return response.data;
            })
    }
}

export const LoginAPI = {
    checkLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response;
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response;
            })
    }
}
