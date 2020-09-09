import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {checkAuthMe, logoutMe} from "../../redux/header_reducer";
import Header from "./Header";
import {AppStateType} from "../../redux/store-redux";
import { ProfileInitialStateType } from '../../redux/profile_reducer';

class HeaderContainer extends PureComponent<PropsType>{

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        state: state.profilePage
    }
}

export default connect(mapStateToProps, { checkAuthMe, logoutMe })(HeaderContainer)



type PropsType = {
    logoutMe: () => void
    state: ProfileInitialStateType
    isAuth: boolean
    login: string | null
    checkAuthMe: () => void
} 