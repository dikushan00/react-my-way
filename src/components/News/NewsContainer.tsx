import React from 'react';
import News from "./News";
import {connect} from "react-redux";
import {actions} from "../../redux/news_reducer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form'
import { AppStateType } from '../../redux/store-redux';

const mapStateToProps = (state: AppStateType) => {

    return {
        state: state.newsPage,
        avatarPhoto: state.profilePage.profile && state.profilePage.profile.photos.large
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addNewComment: actions.addNewComment, 
        updateLikeCount: actions.updateLikeCount, 
        updateCommentCount: actions.updateCommentCount, 
        reset
    }),
    withAuthRedirect
)(News)

