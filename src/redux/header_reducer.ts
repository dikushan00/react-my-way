import {AuthAPI, LoginAPI, SecurityAPI, CaptchaEnum, ResultCodeEnum} from "../api/api";
import {stopSubmit, FormAction} from "redux-form";
import { check_auth_me } from "./profile_reducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes, ThunkType } from "./store-redux";

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captcha: null as string | null
}

type initialStateType = typeof initialState;

let header_reducer = (state = initialState, action : ActionsType): initialStateType => {

    switch (action.type) {

        case 'SN/Header/SET_NEW_AUTH':
        case 'SN/Header/SET_NEW_CAPTCHA': {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const actions = {
    setNewAuth: (id :number | null, login : string | null, email : string | null, isAuth: boolean) => ({type: 'SN/Header/SET_NEW_AUTH', data: {id, login, email, isAuth}} as const),
    setNewCaptcha: (captcha: string) => ({type: 'SN/Header/SET_NEW_CAPTCHA', data: {captcha}} as const)
}

type ActionsType = InferActionsTypes<typeof actions>

type GetThunkType = ThunkType<ActionsType | FormAction>

export const checkAuthMe = (): GetThunkType => async (dispatch) => {
    const response = await AuthAPI.checkAuthMe()
    if (response.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = response.data
        dispatch(actions.setNewAuth(id, login, email, true))
    }
}

export const checkLoginMe = (email: string | null, password: string | null, rememberMe: boolean, captcha : string | null):GetThunkType => async (dispatch) => {
    const response = await LoginAPI.checkLogin(email, password, rememberMe, captcha)

    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(checkAuthMe());
        dispatch(check_auth_me());
    } else {
        if(response.data.resultCode === CaptchaEnum.Captcha){
            dispatch(getCaptcha())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error!'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutMe = (): GetThunkType => async (dispatch) => {
    const response = await LoginAPI.logout()
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setNewAuth(null, null, null, false))
    }
}

export const getCaptcha = (): GetThunkType => async (dispatch) => {
    const response = await SecurityAPI.getCaptcha()
    dispatch(actions.setNewCaptcha(response.data.url))
}

export default header_reducer