import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {checkAuthMe, logoutMe} from "../../redux/header_reducer";
import Header from "./Header";

class HeaderContainer extends PureComponent{

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.photos.large
    }
}

export default connect(mapStateToProps, { checkAuthMe, logoutMe })(HeaderContainer)