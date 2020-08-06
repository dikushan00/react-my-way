import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    setPageCount,
    switch_follow,
    toggleProgress
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageCount,
    getPageSize,
    getToggleProgressArr, getUsersList, getUsersListSelector
} from "../../redux/users_selector";

class UsersContainer extends PureComponent {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    pageEvent = (p) => {
        this.props.getUsers( p, this.props.pageSize )
    }

    render() {
        return <>
                <Users
                    isFetching={this.props.isFetching}
                    currentPage={this.props.currentPage}
                    pageCount={this.props.pageCount}
                    pageSize={this.props.pageSize}
                    switch_follow={this.props.switch_follow}
                    state={this.props.state}
                    pageEvent={this.pageEvent}
                    toggleProgressArr = {this.props.toggleProgressArr}
                    toggleProgress = {this.props.toggleProgress}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        state: getUsersListSelector(state),
        currentPage: getCurrentPage(state),
        pageCount: getPageCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        toggleProgressArr: getToggleProgressArr(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        switch_follow,
        toggleProgress,
        getUsers,
        follow,
        unfollow
    })
)(UsersContainer)




//
// const mapDispatchToProps = (dispatch) => {
//
//     return {
//         switch_follow: (usersId) => {
//             dispatch(switch_followAC(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setCountPage: (pageCount) => {
//             dispatch(setPageCountAC(pageCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }