import React from 'react';
import {sendMessage} from "../../redux/dialogs_reducer";

const socket = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

export type MessageType = {
    id: number,
    message: string
    userId: number
    userName: string
    photo: string
}

export const Chat = () => {
    return <>
        <Messages/>
        <AddMessageForm/>
    </>
}

export const Messages = () => {
    const [messages, setMessages] = React.useState([] as MessageType[])

    React.useEffect(() => {
        socket.addEventListener("message", (e) => {
            let messagesData = JSON.parse(e.data)
            setMessages((prevState) => [...prevState, ...messagesData])
        })

    }, [])
    return <>
        {
            messages ? messages.map((item, i) => {
                return <Message key={i} message={item}/>
            })
                : "Сообщений не найдено"
        }
    </>
};

type MessagePropsType = {
    message: MessageType
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

export const AddMessageForm = () => {

    const [message, setMessage] = React.useState("")

    const sendMessage = () => {
        if(!message) return;

        socket.send(message)
        setMessage("")
    }
    return (
        <>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.currentTarget.value)} id="addMessage" cols={30} rows={10}/>
            <button onClick={() => sendMessage()}>Send</button>
        </>
    );
};