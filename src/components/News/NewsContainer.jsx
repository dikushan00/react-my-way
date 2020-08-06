import React from 'react';
import News from "./News";
import {connect} from "react-redux";
import {addNewComment, updateNewComment, updateLikeCount, updateCommentCount} from "../../redux/news_reducer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form'

const mapStateToProps = (state) => {

    return {
        state: state.newsPage
    }
}

export default compose(
    connect(mapStateToProps, {addNewComment, updateLikeCount, updateCommentCount, reset}),
    withAuthRedirect
)(News)

