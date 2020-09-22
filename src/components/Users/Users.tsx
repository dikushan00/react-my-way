import React, { useEffect, useState } from 'react'
import style from './Users.module.css'
import Paginator from '../common/paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import UserItem from './UserItem'
import UsersSearchForm from './UsersSearchForm';
import { FilterType, getUsers, unfollow, follow } from '../../redux/users_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as queryString from "querystring";

const Users: React.FC = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const filter = useSelector((state: AppStateType) => state.usersPage.filter)
    const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize)
    const pageCount = useSelector((state: AppStateType) => state.usersPage.pageCount)
    const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage)
    const users = useSelector((state: AppStateType) => state.usersPage.usersData)
    const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching)

    useEffect(() => {

        const parsetURI = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        console.log(history)

        let actualPage = currentPage
        let actualFilter = filter
        if(parsetURI.page) actualPage = Number(parsetURI.page)

        if(parsetURI.term) actualFilter = {...actualFilter, term: parsetURI.term as string}

        switch (parsetURI.friend) {
            case "null": {
                actualFilter = {...actualFilter, friends: null}
                break
            }
            case "true": {
                actualFilter = {...actualFilter, friends: true}
                break
            }
            case "false": {
                actualFilter = {...actualFilter, friends: false}
                break
            }
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {

        const query: QueryParamsType = {}

        if(filter.term) query.term = filter.term
        if(filter.friends !== null) query.friend = String(filter.friends)
        if(currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const pageEvent = (p: number) => {
        dispatch(getUsers( p, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers( currentPage, pageSize, filter))
    }

    return <div>

        <UsersSearchForm onFilterChanged = {onFilterChanged}/>

        <Paginator 
            currentPage = {currentPage}
            pageCount = {pageCount}
            pageSize = {pageSize}
            pageEvent = {pageEvent}
            portionSize = {10}/>

        { isFetching 
            ? <Preloader /> 
            : users.map(user =>
                <UserItem user = {user} key = {user.id}/> 
        )}
    </div>
}

export default Users

type QueryParamsType = {
    friend?: boolean | string
    term?: string
    page?: string
}