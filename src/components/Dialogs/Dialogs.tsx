import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm, InjectedFormProps, reset} from "redux-form";
import {maxLengthCreater, required} from "../utils/Validators/validators";
import {Element} from "../common/FormControl/FormControl";
import mailMain from "../../img/mailMain.svg"
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './../../redux/dialogs_reducer';
import { actions } from './../../redux/dialogs_reducer';
import { AppStateType } from '../../redux/store-redux';

const Dialogs: React.FC<PropsType> = React.memo(({userId}) => {

    const dialogsState = useSelector((state: AppStateType) => state.dialogPage)

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsState.userData.map((user) =>
                        <DialogItem props={user} key={user.id}/>
                    )}
                </div>
                
                {
                    userId 
                        ? <DialogsWindow  userId = {userId}/> 
                        : <DialogsMain />
                }
                
            </div>
        </>
    )
})

let maxLength15 = maxLengthCreater(15);
const Textarea = Element("textarea");

const DialogsForm: React.FC<InjectedFormProps<DialogFormValuesType>> = (props) => {
    return (
        <form className={s.inputArea} onSubmit={props.handleSubmit}>
            <Field placeholder='Enter message...' className={s.input} name='newMessageText' validate={[required, maxLength15]} component={Textarea}/>
            <button className="btn">Send</button>
        </form>
    )
}
const DialogsFormRedux = reduxForm<DialogFormValuesType>({form: 'DialogsForm'})(DialogsForm)

const DialogsWindow: React.FC<DialogsWindowType> = ({userId}) => {

    const dispatch = useDispatch()
    const messageData = useSelector((state: AppStateType) => state.dialogPage.messageData)

    let onAddMessage = (data: {newMessageText: string}) => {
        actions.addMessage(userId, data.newMessageText);
        sendMessage(11009, data.newMessageText)
        dispatch(reset('DialogsForm'))
    }

    return <div className={s.messages}>
        {
            messageData.map((message) => {
                return message.id === Number(userId) &&
                    message.messages.map(message => <Message props={message} key={message.id}/>
                )
            })
        }
        <DialogsFormRedux onSubmit={onAddMessage}/>
    </div>
}

const DialogsMain = () => {

    return <div style={{display: 'flex', padding: "10px"}}>
        <img src={mailMain} alt="Photo" style={{width:"200px", marginLeft: "100px"}}/>
    </div>
}

export default Dialogs;



type DialogFormValuesType = {
    newMessageText: string
}
type PropsType = {
    userId: number
}
type DialogsWindowType = {
    userId: number
}