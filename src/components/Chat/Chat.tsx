import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {
    sendMessage,
    startMessagesListening,
    startStatusListening,
    stopMessagesListening, stopStatusListening
} from "../../redux/chat_reducer";
import {ChatApi} from "../../api/chat-api";

export type MessageApiType = {
    message: string
    userId: number
    userName: string
    photo: string
}

export const Chat = () => {

    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    React.useEffect(() => {
        ChatApi.start()
        dispatch(startMessagesListening())
        dispatch(startStatusListening())

        return () => {
            dispatch(stopMessagesListening())
            dispatch(stopStatusListening())
        }
    }, [])

    return <>
        {status === "error" && <div>Some error! Please, refresh the page</div>}
        <Messages/>
        <AddMessageForm/>
    </>
}

export const Messages: React.FC = () => {
    const messageWrapper = React.useRef<HTMLDivElement | null>(null)
    const messagesBottom = React.useRef<HTMLDivElement | null>(null)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const [isAutoScroll, setIsAutoScroll] = React.useState(false)

    const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 200) {
            setIsAutoScroll(true)
        } else {
            setIsAutoScroll(false)
        }
    }

    React.useEffect(() => {
        isAutoScroll && messagesBottom.current && messagesBottom.current.scrollIntoView()
    }, [messages])

    return <div ref={messageWrapper} onScroll={onScroll} style={{maxHeight: "500px", overflowY: "scroll"}}>
        {
            messages && messages.length > 0
                ? messages.map((item,) => {
                    return <Message key={item.id} message={item}/>
                })
                : "Сообщений не найдено"
        }
        <div ref={messagesBottom}/>
    </div>
};

type MessagePropsType = {
    message: MessageApiType
}

export const Message: React.FC<MessagePropsType> = ({message}) => {
    return <>
        <div style={{display: "flex"}}>
            <img src={message.photo}
                 alt="avaUser"
                 style={{marginLeft: "10px", borderRadius: "50%", width: "50px"}}/>
            <span style={{marginLeft: "10px"}}>{message.userName}</span>
            <span style={{marginLeft: "10px"}}>{message.message}</span>
        </div>
        <hr/>
    </>
};

export const AddMessageForm: React.FC = () => {
    const [message, setMessage] = React.useState("")

    const status = useSelector((state: AppStateType) => state.chat.status)
    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message) return;
        dispatch(sendMessage(message))
        setMessage("")
    }

    return <>
            <textarea name="message" value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      id="addMessage" cols={30} rows={10}/>
        <button disabled={status !== 'ready'} onClick={() => sendMessageHandler()}>Send</button>
    </>
};