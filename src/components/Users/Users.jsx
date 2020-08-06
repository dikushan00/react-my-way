import React from 'react'
import style from './Users.module.css'
import Paginator from '../common/paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import UserItem from './UserItem'

const Users = (props) => {

    const switch_follow = (followed, userId) => {
        if (followed) {
            props.unfollow(userId)
        } else {
            props.follow(userId)
        }
    }

    return <div>

        <Paginator 
            currentPage = {props.currentPage}
            pageCount = {props.pageCount}
            pageSize = {props.pageSize}
            pageEvent = {props.pageEvent}
            portionSize = {10}/>

        { props.isFetching 
            ? <Preloader /> 
            : props.state.map(user =>
                <UserItem user = {user} switch_follow = {switch_follow} toggleProgressArr = {props.toggleProgressArr}/>
        )}
    </div>
}

export default Users