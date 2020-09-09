import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreater, required} from "../utils/Validators/validators";
import {Element} from "../common/FormControl/FormControl";
import mailMain from "../../img/mailMain.svg"
import {DialogsInitialStateType} from '../../redux/dialogs_reducer'
import { useDispatch } from 'react-redux';
import { sendMessage } from './../../redux/dialogs_reducer';

type PropsType = {
    state: DialogsInitialStateType
    userId: number
    addMessage: (id: number, str: string) => void
    reset: (form: string) => void
}

const Dialogs: React.FC<PropsType> = React.memo((props) => {

    let dispatch = useDispatch()

    let onAddMessage = (data: {newMessageText: string}) => {
        props.addMessage(props.userId, data.newMessageText);
        sendMessage(11009, data.newMessageText)
        debugger
        props.reset('DialogsForm')
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.state.userData.map((user) =>
                        <DialogItem props={user} key={user.id}/>
                    )}
                </div>
                
                {
                    props.userId 
                        ? <DialogsWindow onAddMessage = {onAddMessage} state={props.state} userId = {props.userId}/> 
                        : <DialogsMain />
                }
                
            </div>
        </>
    )
})

let maxLength15 = maxLengthCreater(15);
const Textarea = Element("textarea");

type DialogFormValuesType = {
    newMessageText: string
}

const DialogsForm: React.FC<InjectedFormProps<DialogFormValuesType>> = (props) => {
    return (
        <form className={s.inputArea} onSubmit={props.handleSubmit}>
            <Field placeholder='Enter message...' className={s.input} name='newMessageText' validate={[required, maxLength15]} component={Textarea}/>
            <button className="btn">Send</button>
        </form>
    )
}
const DialogsFormRedux = reduxForm<DialogFormValuesType>({form: 'DialogsForm'})(DialogsForm)

type DialogsWindowType = {
    state: DialogsInitialStateType
    userId: number
    onAddMessage: (data: {newMessageText: string}) => void
}

const DialogsWindow: React.FC<DialogsWindowType> = props => {

    return <div className={s.messages}>
        {
            props.state.messageData.map((message) => {
                return message.id === Number(props.userId) &&
                    message.messages.map(message => <Message props={message} key={message.id}/>
                )
            })
        }
        <DialogsFormRedux onSubmit={props.onAddMessage}/>
    </div>
}

const DialogsMain = () => {

    return <div style={{display: 'flex', padding: "10px"}}>
        <img src={mailMain} alt="Photo" style={{width:"200px", marginLeft: "100px"}}/>
    </div>
}

export default Dialogs;