import {AuthAPI, LoginAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_NEW_AUTH = 'SET_NEW_AUTH'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

let header_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_NEW_AUTH: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const setNewAuth = (id, login, email, isAuth) => ({type: SET_NEW_AUTH, data: {id, login, email, isAuth}})

export const checkAuthMe = () => (dispatch) => {
    return AuthAPI.checkAuthMe()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setNewAuth(id, login, email, true))
            }
        })
}

export const checkLoginMe = (email, password, rememberMe) => (dispatch) => {
    LoginAPI.checkLogin(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(checkAuthMe());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error!'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logoutMe = (dataObj) => (dispatch) => {
    LoginAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setNewAuth(null, null, null, false))
            }
        })
}

export default header_reducer