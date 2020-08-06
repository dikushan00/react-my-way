import React from 'react';
import {addPost} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reset} from 'redux-form';

const mapStateToProps = (state) => {

    return {
        state: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, reset})(MyPosts)

export default MyPostsContainer