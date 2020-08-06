import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {check_auth, getStatus, updateStatus} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authId
        this.props.check_auth(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile state={this.props.state} status = {this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    state: state.profilePage,
    status: state.profilePage.status,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {check_auth, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)