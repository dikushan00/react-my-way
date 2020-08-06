import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../utils/Validators/validators";
import {Element} from "../common/FormControl/FormControl";

const Dialogs = (props) => {

    let onAddMessage = (data) => {
        props.addMessage(data.newMessageText);
        props.reset('DialogsForm')
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.userData.map((user) =>
                    <DialogItem props={user}/>
                )}
            </div>
            <div className={s.messages}>
                {props.state.messageData.map((message) =>
                    <Message props={message}/>
                )}
                <DialogsFormRedux onSubmit={onAddMessage}/>
            </div>
        </div>
    )
}

let maxLength15 = maxLengthCreater(15);
const Textarea = Element("textarea");

const DialogsForm = (props) => {
    return (
        <form className={s.inputArea} onSubmit={props.handleSubmit}>
            <Field placeholder='Enter message...' className={s.input} name='newMessageText' validate={[required, maxLength15]} component={Textarea}/>
            <button className="btn">Send</button>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: 'DialogsForm'})(DialogsForm)

export default Dialogs;