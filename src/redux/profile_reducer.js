import {ProfileAPI} from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const PROFILE_INFO = "PROFILE_INFO";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

let initialState = {
    postsData: [
        {"id": 1, "message": "Hello, how are you?", "likesCount": 5},
        {"id": 2, "message": "My, first post!", "likesCount": 2},
        {"id": 3, "message": "Hello, everyone", "likesCount": 10},
    ],
    profile: null,
    status: '',
    photos: {
        small: '',
        large: ''
    }
}

let profile_reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_POST: {

            if (action.newPostText.length > 0) {
                return {
                    ...state,
                    postsData: [...state.postsData, {
                        "id": 5,
                        "message": action.newPostText,
                        "likesCount": 14
                    }],
                    newPostText: ''
                }
            }

            return state

        }

        case PROFILE_INFO: {

            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO: {

            return {
                ...state,
                photos: {...action.photoUrl}
            }
        }

        default: {
            return state
        }
    }
}

export const addPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});
export const profileInfo = (profile) => ({type: PROFILE_INFO, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setPhoto = (photoUrl) => ({type: SET_PHOTO, photoUrl});


export const check_auth = (userId) => {
    return (dispatch) => {
        ProfileAPI.checkAuth(userId).then((data) => {
            dispatch(profileInfo(data))
        })
    }
}

export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then((data) => {
        dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export const updatePhoto = (photo) => (dispatch) => {
    ProfileAPI.updateMainPhoto(photo).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setPhoto({small: data.small, large: data.large}));
        }
    })
}


export default profile_reducer