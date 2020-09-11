import React, { PureComponent } from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {check_auth, getStatus, updateStatus, updatePhoto, saveProfile, ProfileInitialStateType} from "../../redux/profile_reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect"
import { AppStateType } from '../../redux/store-redux';
import { ProfileType, SaveProfileType } from '../../Types/Types';
import { follow, unfollow } from './../../redux/users_reducer';

class ProfileContainer extends PureComponent<PropsType & RouteComponentProps<RouteParamsProps>> {

    refreshProfile = () => {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) userId = this.props.authId
        this.props.check_auth(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType & RouteComponentProps<RouteParamsProps>){
        if(prevProps.match.params.userId !==  this.props.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile 
                state={this.props.state} 
                isOwner={!this.props.match.params.userId}
                status = {this.props.status}
                updateStatus={this.props.updateStatus} 
                updatePhoto={this.props.updatePhoto}
                saveProfile={this.props.saveProfile}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    state: state.profilePage,
    status: state.profilePage.status,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        check_auth, 
        getStatus, 
        updateStatus, 
        updatePhoto, 
        saveProfile,
        follow,
        unfollow}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



type PropsType = {
    authId: number
    profile: ProfileType
    isOwner: boolean
    status: string
    state: ProfileInitialStateType
    updateStatus: () => void
    updatePhoto: (file: File) => void
    saveProfile: (data: SaveProfileType) => Promise<SaveProfileType>
    check_auth: (userId: number) => void
    getStatus: (userId: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type RouteParamsProps = {
    userId: string 
}