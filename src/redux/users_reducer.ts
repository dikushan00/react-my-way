import {UsersAPI} from "../api/api";
import { InferActionsTypes, ThunkType } from "./store-redux";

type UsersDataItemType = {
    name: string | null,
    id: number,
    photos: {
      small: string | null,
      large: string | null
    },
    status: string | null,
    followed: boolean
}

let initialState = {
    usersData: [] as Array<UsersDataItemType>,
    pageSize: 100,
    currentPage: 1,
    pageCount: 0,
    isFetching: true,
    toggleProgressArr: [] as Array<number>,
    friends: [] as Array<UsersDataItemType>,
    filter: {
        term: '',
        friends: null as null | boolean
    }
}

type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

let users_reducer = (state = initialState, action: ActionsType) : InitialStateType => {

    switch (action.type) {

        case 'SN/Users/SWITCH_FOLLOW': {

                return {
                    ...state,
                    usersData: state.usersData.map( u => {
                        if(u.id === action.userId){
                            return {...u, followed: !u.followed}
                        }
                        return u
                    })
                }
        }
        case 'SN/Users/SET_USERS': {
            return { ...state, usersData: [...action.users]}
        }
        case 'SN/Users/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage}
        }
        case 'SN/Users/SET_TOTAL_PAGE_COUNT': {
            return { ...state, pageCount: action.count}
        }
        case 'SN/Users/TOGGLE_FETCHING': {
            return { ...state, isFetching: action.isFetching}
        }
        case 'SN/Users/TOGGLE_PROGRESS': {
            const ID = action.id
            return {
                ...state,
                toggleProgressArr: action.type
                    ? [...state.toggleProgressArr, action.id]
                    : state.toggleProgressArr.filter(id =>  id != ID)
            } 
        }
        case 'SN/Users/GET_FRIENDS': {

            return {
                ...state,
                friends: [...action.friends] as Array<UsersDataItemType>
            }
        }
        case 'SN/Users/GET_FILTER': {
            return {
                ...state,
                filter: {term: action.filter.term, friends: action.filter.friends}
            }
        }
        default: {
            return state
        }
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    switch_follow: (userId: number) => ({type: 'SN/Users/SWITCH_FOLLOW', userId} as const),
    setUsers: (users: Array<UsersDataItemType>) => ({type: 'SN/Users/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/Users/SET_CURRENT_PAGE', currentPage} as const),
    setPageCount: (count: number) => ({type: 'SN/Users/SET_TOTAL_PAGE_COUNT', count} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/Users/TOGGLE_FETCHING', isFetching} as const),
    toggleProgress: (isFetching: boolean, id: number) => ({type: 'SN/Users/TOGGLE_PROGRESS', isFetching, id} as const),
    getFriends: (friends: Array<UsersDataItemType>) => ({type: 'SN/Users/GET_FRIENDS', friends} as const),
    getFilter: (filter: FilterType) => ({type: 'SN/Users/GET_FILTER', filter} as const)
}



type getThunkType = ThunkType<ActionsType >

export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): getThunkType => async (dispatch)  => {

    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.getFilter(filter))
    const data = await UsersAPI.getUsers(currentPage, pageSize, filter.term, filter.friends)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setPageCount(data.totalCount))
}

export const getFriends = (): getThunkType => async (dispatch)  => {

    dispatch(actions.toggleIsFetching(true))
    const data = await UsersAPI.getFriends()
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.getFriends(data.items))
}

export const follow = (userId: number): getThunkType => async (dispatch) => {
    dispatch(actions.toggleProgress(true, userId))
    const data = await UsersAPI.follow(userId)
        dispatch(actions.switch_follow(userId))
        dispatch(actions.toggleProgress(false, userId))
}

export const unfollow = (userId: number): getThunkType => async (dispatch) => {
    dispatch(actions.toggleProgress(true, userId))
    const data = await UsersAPI.unfollow(userId)
        dispatch(actions.switch_follow(userId))
        dispatch(actions.toggleProgress(false, userId))
}

export default users_reducer