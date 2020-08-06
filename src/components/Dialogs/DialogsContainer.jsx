import React from 'react';
import {addMessage} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {reset} from "redux-form";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

let mapStateToProps = (state) => {

    return {
        state: state.dialogPage
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage, reset})
)(Dialogs)