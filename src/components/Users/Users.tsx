import React, { useState } from 'react'
import style from './Users.module.css'
import Paginator from '../common/paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import UserItem from './UserItem'
import { UserType } from '../../Types/Types';
import UsersSearchForm from './UsersSearchForm';
import { FilterType } from '../../redux/users_reducer';

const Users: React.FC<PropsType> = (props) => {

    const switch_follow = (followed: boolean, userId: number) => {
        if (followed) {
            props.unfollow(userId)
        } else {
            props.follow(userId)
        }
    }

    return <div>

        <UsersSearchForm onFilterChanged = {props.onFilterChanged}/>

        <Paginator 
            currentPage = {props.currentPage}
            pageCount = {props.pageCount}
            pageSize = {props.pageSize}
            pageEvent = {props.pageEvent}
            portionSize = {10}/>

        { props.isFetching 
            ? <Preloader /> 
            : props.state.map(user =>
                <UserItem user = {user} switch_follow = {switch_follow} toggleProgressArr = {props.toggleProgressArr} key = {user.id}/> 
        )}
    </div>
}

export default Users


type PropsType = {
    state: Array<UserType>
    isFetching: boolean
    toggleProgressArr: Array<number>
    currentPage: number
    pageCount: number
    pageSize: number
    pageEvent: (n: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onFilterChanged: (filter: FilterType) => void
}