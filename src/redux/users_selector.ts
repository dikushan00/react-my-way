import {createSelector} from "reselect";
import { AppStateType } from "./store-redux";

const getUsersList = (state: AppStateType) => {
    return state.usersPage.usersData
}

export const getUsersListSelector = createSelector(getUsersList,
    (users) => {
    return users.filter(u=> true)
})

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getPageCount = (state: AppStateType) => {
    return state.usersPage.pageCount
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getToggleProgressArr = (state: AppStateType) => {
    return state.usersPage.toggleProgressArr
}
export const getFilter = (state: AppStateType) => {
    return state.usersPage.filter
}