import {UsersAPI} from "../api/api";

const SWITCH_FOLLOW = "SWITCH_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_PROGRESS = "TOGGLE_PROGRESS";

let initialState = {
    usersData: [],
    pageSize: 20,
    currentPage: 1,
    pageCount: 0,
    isFetching: true,
    toggleProgressArr: []
}

let users_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SWITCH_FOLLOW: {

                return {
                    ...state,
                    usersData: state.usersData.map( u => {
                        if(u.id === action.userId){
                            return {...u, followed: !u.followed}
                        }
                        return u
                    })
                }

            return state

        }
        case SET_USERS: {
            return { ...state, usersData: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_PAGE_COUNT: {
            return { ...state, pageCount: action.count}
        }
        case TOGGLE_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_PROGRESS: {
            return {
                ...state,
                toggleProgressArr: action.isFetching
                    ? [...state.toggleProgressArr, action.id]
                    : state.toggleProgressArr.filter(id =>  id != action.id)
            }
        }
        default: {
            return state
        }
    }
}

export const switch_follow = (userId) => ({type: SWITCH_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setPageCount = (count) => ({type: SET_TOTAL_PAGE_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleProgress = (isFetching, id) => ({type: TOGGLE_PROGRESS, isFetching, id});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        UsersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setPageCount(data.totalCount))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleProgress(true, userId))
        UsersAPI.follow(userId).then((data) => {
            dispatch(switch_follow(userId))
            dispatch(toggleProgress(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleProgress(true, userId))
        UsersAPI.unfollow(userId).then((data) => {
            dispatch(switch_follow(userId))
            dispatch(toggleProgress(false, userId))
        })
    }
}

export default users_reducer