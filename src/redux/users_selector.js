import {createSelector} from "reselect";

const getUsersList = (state) => {
    return state.usersPage.usersData
}

export const getUsersListSelector = createSelector(getUsersList,
    (users) => {
    return users.filter(u=> true)
})

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getPageCount = (state) => {
    return state.usersPage.pageCount
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getToggleProgressArr = (state) => {
    return state.usersPage.toggleProgressArr
}