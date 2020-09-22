import React from 'react';
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import { withRouter } from 'react-router-dom';

const DialogsContainer: React.FC<PropsType> = (props) => {

    return <Dialogs userId = {props.match.params.userId}/>
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter
)(DialogsContainer)


type PropsType = {
    match: {
        params: {
            userId: number
        }
    }
}