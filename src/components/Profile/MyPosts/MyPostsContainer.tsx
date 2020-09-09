import React from 'react';
import {actions} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reset} from 'redux-form';
import { AppStateType } from '../../../redux/store-redux';

const mapStateToProps = (state: AppStateType) => {

    return {
        state: state.profilePage,
        avatarPhoto: state.profilePage.profile && state.profilePage.profile.photos.large
    }
}

const MyPostsContainer = connect(mapStateToProps, { 
    addPost: actions.addPost, 
    reset, 
    addNewComment: actions.addNewComment, 
    updateCommentCount: actions.updateCommentCount, 
    updateLikeCount: actions.updateLikeCount})(MyPosts)

export default MyPostsContainer