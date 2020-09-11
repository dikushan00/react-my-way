import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers,
    actions,
    FilterType
} from "../../redux/users_reducer";
import Users from "./Users";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageCount,
    getPageSize,
    getFilter,
    getToggleProgressArr,
} from "../../redux/users_selector";
import { AppStateType } from '../../redux/store-redux';
import { UserType } from '../../Types/Types';


class UsersContainer extends PureComponent<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    pageEvent = (p: number) => {
        this.props.getUsers( p, this.props.pageSize, this.props.filter)
    }

    onFilterChanged = (filter: FilterType) => {
        this.props.getUsers( this.props.currentPage, this.props.pageSize, filter)
    }

    render() {
        return <>
                <Users
                    isFetching={this.props.isFetching}
                    currentPage={this.props.currentPage}
                    pageCount={this.props.pageCount}
                    pageSize={this.props.pageSize}
                    state={this.props.state}
                    pageEvent={this.pageEvent}
                    toggleProgressArr = {this.props.toggleProgressArr}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    onFilterChanged = {this.onFilterChanged}
                />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateType => {
    return {
        state: state.usersPage.usersData,
        currentPage: getCurrentPage(state),
        pageCount: getPageCount(state),
        pageSize: getPageSize(state),
        filter: getFilter(state),
        isFetching: getIsFetching(state),
        toggleProgressArr: getToggleProgressArr(state)
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect( 
        mapStateToProps, 
        {
            switch_follow: actions.switch_follow,
            toggleProgress: actions.toggleProgress,
            getUsers,
            follow,
            unfollow
    })
)(UsersContainer)


type mapStateType = {
    state: Array<UserType>
    currentPage: number
    pageCount: number
    pageSize: number
    isFetching: boolean
    toggleProgressArr: Array<number>
    filter: FilterType
}

type mapDispatchType = {
    toggleProgress: (isFetching: boolean, id: number) => void
    switch_follow: (userId: number) => void
    pageEvent: (n: number) => void
    getUsers: (page: number, pageSize: number, filter: FilterType) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type PropsType = mapStateType & mapDispatchType