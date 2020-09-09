import React from 'react';
import {DialogsInitialStateType, actions} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {reset} from "redux-form";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/store-redux';

type PropsType = {
    state: DialogsInitialStateType
    addMessage: (id: number, str: string) => void
    reset: (form: string) => void
    match: {
        params: {
            userId: number
        }
    }
}

const DialogsContainer: React.FC<PropsType> = (props) => {

    return <Dialogs state = {props.state} addMessage = {props.addMessage} reset = {props.reset} userId = {props.match.params.userId}/>
}

const mapStateToProps = (state: AppStateType) => {

    return {
        state: state.dialogPage
    }
}


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage: actions.addMessage, reset}),
    withRouter
)(DialogsContainer)