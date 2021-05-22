import axios from "axios";
import {ProfileType, UserType, PhotosType, SaveProfileType} from "../Types/Types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "201fbca2-9214-4c3c-bd7a-b698236c954c"
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum CaptchaEnum {
    Captcha = 10
}

export const UsersAPI = {

    getUsers(currentPage: number = 1, pageSize: number = 10, term: string = '', friends: boolean | null = null) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friends === null ? '' : `&friend=${friends}`))
            .then(response => {
                return response.data;
            })
    },

    follow(userId: number) {
        return instance.post<CommonApiType>(`follow/${userId}`, {})
            .then(response => {
                return response.data;
            })
    },

    unfollow(userId: number | null) {
        return instance.delete<CommonApiType>(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    getFriends() {
        return instance.get<GetUsersType>(`users?count=100&friend=true`)
            .then(res => res.data)
    }
}

export const AuthAPI = {

    checkAuthMe() {
        return instance.get<AuthMeType>(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}

export const ProfileAPI = {

    checkAuth(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatus(status: string) {
        return instance.put<CommonApiType>(`profile/status`, {status})
            .then(response => {
                return response.data;
            })
    },
    updateMainPhoto(photo: File) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put<UpdatePhotoType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data;
            })
    },
    saveProfile(profile: SaveProfileType) {
        return instance.put<CommonApiType>(`profile`, profile)
    }
}

export const LoginAPI = {
    
    checkLogin(email: string | null, password: string | null, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<PostLoginType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<DeleteLoginType>(`auth/login`)
    }
}

export const SecurityAPI = {
    getCaptcha() {
        return instance.get<GetCaptchaType>(`security/get-captcha-url`)
    }
}


export const DialogsAPI = {

    viewAllDialogs() {
        return instance.get<CommonApiType>(`dialogs`)
    },
    startDialog(userId: number) {
        return instance.put<CommonApiType>(`dialogs/${userId}`)
    },
    getMessagesWUser(userId: number) {
        return instance.get<CommonApiType>(`dialogs/${userId}/messages`)
    },
    sendMessagesToUser(userId: number, message: string) {
        return instance.post<CommonApiType>(`dialogs/${userId}/messages`, {
            body: '' + message
        }).then((res) => {
            return res.data
        })
    }
}


type CommonApiType = DeleteLoginType

type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}


type AuthMeType = {
    data: { id: number | null, login: string | null, email: string | null }
    resultCode: ResultCodeEnum | CaptchaEnum
    messages: Array<string>
}


type UpdatePhotoType = {
    data: {
        photos: PhotosType
    }
    messages: Array<string>
    resultCode: ResultCodeEnum | CaptchaEnum
}


type DeleteLoginType = {
    data: {}
    resultCode: ResultCodeEnum | CaptchaEnum
    messages: Array<string>
}

type PostLoginType = {
    data: { userId: number }
    resultCode: ResultCodeEnum | CaptchaEnum
    messages: Array<string>
}


type GetCaptchaType = {
    url: string
}