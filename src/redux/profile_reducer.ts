import {ProfileAPI, ResultCodeEnum} from "../api/api";
import { stopSubmit, FormAction } from "redux-form";
import {CommentsType, SaveProfileType, ProfileType} from './../Types/Types';
import { ThunkType, InferActionsTypes } from "./store-redux";

let initialState = {
    postsData: [
        {
            id: 1,
            title: "Hello everyone. it is my first news post!",
            photo: '',
            comments: [
                {
                    userId: 1, commentId: 1, fullName: 'Башаров Максим', text: "its awesome!", photo: 'https://i.pinimg.com/736x/8f/f6/08/8ff60864af4b3eebc06a8bbabcf0c21b.jpg'
                }, 
                {
                    userId: 2, commentId: 2, fullName: 'Башаров Максим', text: "How are you?", photo: 'https://avatars.mds.yandex.net/get-zen_doc/229614/pub_5db308ea5ba2b500b6bb0d1d_5db309208d5b5f00afb1fe92/scale_1200'
                }],
            likesCount: 5,
            CommentsCount: 2,
            liked: false
        },
        {
            id: 2,
            title: "React makes it painless to create interactive UIs.",
            photo: '',
            comments: [
                {
                    userId: 1, commentId: 1, fullName: 'Башаров Максим', text: "its awesome!", photo: 'https://i.pinimg.com/736x/8f/f6/08/8ff60864af4b3eebc06a8bbabcf0c21b.jpg'
                }, 
                {
                    userId: 2, commentId: 2, fullName: 'Башаров Максим', text: "How are you?", photo: 'https://avatars.mds.yandex.net/get-zen_doc/229614/pub_5db308ea5ba2b500b6bb0d1d_5db309208d5b5f00afb1fe92/scale_1200'
                }],
            likesCount: 5,
            CommentsCount: 2,
            liked: false
        },
        {
            id: 3,
            title: "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
            photo: '',
            comments: [
                {
                    userId: 1, commentId: 1, fullName: 'Башаров Максим', text: "its awesome!", photo: 'https://i.pinimg.com/736x/8f/f6/08/8ff60864af4b3eebc06a8bbabcf0c21b.jpg'
                }, 
                {
                    userId: 2, commentId: 2, fullName: 'Башаров Максим', text: "How are you?", photo: 'https://avatars.mds.yandex.net/get-zen_doc/229614/pub_5db308ea5ba2b500b6bb0d1d_5db309208d5b5f00afb1fe92/scale_1200'
                }],
            likesCount: 5,
            CommentsCount: 2,
            liked: false
        },
        {
            id: 4,
            title: "Declarative views make your code more predictable and easier to debug.",
            photo: '',
            comments: [
                {
                    userId: 1, commentId: 1, fullName: 'Башаров Максим', text: "its awesome!", photo: 'https://i.pinimg.com/736x/8f/f6/08/8ff60864af4b3eebc06a8bbabcf0c21b.jpg'
                }, 
                {
                    userId: 2, commentId: 2, fullName: 'Башаров Максим', text: "How are you?", photo: 'https://avatars.mds.yandex.net/get-zen_doc/229614/pub_5db308ea5ba2b500b6bb0d1d_5db309208d5b5f00afb1fe92/scale_1200'
                }],
            likesCount: 5,
            CommentsCount: 2,
            liked: false
        }
    ] as Array<PostItemType>,
    profile: null as ProfileType | null,
    status: '',
    isFetching: false,
    photos: null as PhotosType | null
}

export type ProfileInitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
let profile_reducer = (state = initialState, action: ActionsType): ProfileInitialStateType => {

    switch (action.type) {

        case 'SN/Profile/ADD_NEW_POST': {

            if (action.newPostText.length > 0) {
                return {
                    ...state,
                    postsData: [...state.postsData, {
                        id: 5,
                        fullName: '',
                        title: action.newPostText,
                        photo: '',
                        avatar: '',
                        comments: [],
                        likesCount: 0,
                        CommentsCount: 0,
                        liked: false
                    }]
                }
            }

            return state

        }

        case 'SN/Profile/PROFILE_INFO': {

            return {
                ...state,
                profile: action.profile
            }
        }

        case 'SN/Profile/My_PROFILE_INFO': {

            return {
                ...state,
                profile: {...action.profile},
                photos: action.profile.photos
            }
        }
        case 'SN/Profile/TOGGLE_FETCHING': {
            return { ...state, isFetching: action.isFetching}
        }
        case 'SN/Profile/SET_STATUS': {

            return {
                ...state,
                status: action.status
            }
        }
        case 'SN/Profile/SET_PHOTO': {

            return {
                ...state,
                profile: { ...state.profile, photos: action.photoUrl } as ProfileType,
                photos: action.photoUrl
            }
        }

        case 'SN/Profile/ADD_NEW_COMMENT': {
            if (action.newCommentText.length > 0){
                return {
                    ...state,
                    postsData: state.postsData.map(item => {
                        if(item.id === action.id)
                            item.comments = [...item.comments, {userId: 5, fullName: 'dikushan00', commentId: 5, text: action.newCommentText, photo: ''}]
                        return item
                    })
                }
            }
            return state
        }

        case 'SN/Profile/UPDATE_LIKE_COUNT': {
            
            return {
                ...state,
                postsData: state.postsData.map(item => {
                    if(item.id === action.id && !item.liked){
                        item.likesCount = item.likesCount + 1
                        item.liked = !item.liked 
                    } else if(item.id === action.id && item.liked) {
                        item.likesCount = item.likesCount - 1 
                        item.liked = !item.liked 
                    }
                    return item
                })
            }
        }

        case 'SN/Profile/UPDATE_COMMENT_COUNT': {

            return {
                ...state,
                postsData: state.postsData.map(item => {
                    if(item.id === action.id)
                        item.CommentsCount++
                    return item
                })
            }
        }

        default: {
            return state
        }
    }
}

export const actions = {
    addPost: (newPostText: string) => ({type: 'SN/Profile/ADD_NEW_POST', newPostText} as const),
    profileInfo: (profile: ProfileType) => ({type: 'SN/Profile/PROFILE_INFO', profile} as const),
    myProfileInfo: (profile: ProfileType) => ({type: 'SN/Profile/My_PROFILE_INFO', profile} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/Profile/TOGGLE_FETCHING', isFetching} as const),
    setStatus: (status: string) => ({type: 'SN/Profile/SET_STATUS', status} as const),
    setPhoto: (photoUrl: PhotosType) => ({type: 'SN/Profile/SET_PHOTO', photoUrl} as const),
    addNewComment: (id: number, newCommentText: string) => ({type: 'SN/Profile/ADD_NEW_COMMENT', id, newCommentText} as const),
    updateLikeCount: (id: number) => ({type: 'SN/Profile/UPDATE_LIKE_COUNT', id} as const),
    updateCommentCount: (id: number) => ({type: 'SN/Profile/UPDATE_COMMENT_COUNT', id} as const)
}

export const check_auth = (userId: number): getThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    const data = await ProfileAPI.checkAuth(userId)
    dispatch(actions.profileInfo(data))
    dispatch(actions.toggleIsFetching(false))
}

export const getStatus = (userId: number): getThunkType => async (dispatch) => {
    
    const data = await ProfileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status:string): getThunkType => async (dispatch) => {
    const data = await ProfileAPI.updateStatus(status)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.setStatus(status));
        }
}

export const updatePhoto = (photo: File): getThunkType => async (dispatch) => {
    const data = await ProfileAPI.updateMainPhoto(photo)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.setPhoto(data.data.photos));
        }
}

export const saveProfile = (profile: SaveProfileType): getThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await ProfileAPI.saveProfile(profile);

    if (response.data.resultCode === ResultCodeEnum.Success) {
        if(userId)
            dispatch(check_auth(userId));
        else throw new Error
    } else {
        dispatch(stopSubmit("editProfileData", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export const check_auth_me = (): getThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    const myId = getState().auth.id;
    const data = await ProfileAPI.checkAuth(myId)
    dispatch(actions.myProfileInfo(data))
    dispatch(actions.toggleIsFetching(false))
}


export default profile_reducer

export type PostItemType = {
    id: number,
    fullName: string,
    title: string,
    avatar: string,
    photo: string | null,
    comments: Array<CommentsType>
    likesCount: number,
    CommentsCount: number,
    liked: boolean
}


type PhotosType = {
    small: string | null
    large: string | null
}

type getThunkType = ThunkType<ActionsType | FormAction>

