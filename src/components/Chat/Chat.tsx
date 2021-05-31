import React from 'react';
import Preloader from "../common/Preloader/Preloader";

export type MessageType = {
    id: number,
    message: string
    userId: number
    userName: string
    photo: string
}

export const Chat = () => {
    const [socketChanel, setSocketChanel] = React.useState<WebSocket | null>(null)
    React.useEffect(() => {
        let ws: WebSocket | null = null;
        const tryToConnect = () => {
            setTimeout(() => {
                createChanel()
            }, 3000)
        }

        function createChanel() {
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            ws && ws.addEventListener("close", tryToConnect)
            setSocketChanel(ws)
        }

        createChanel()
        return () => {
            ws && ws.close()
            socketChanel && setSocketChanel(null)
            ws && ws.removeEventListener("close", tryToConnect)
        }
    }, [])

    if (!socketChanel) return <Preloader/>
    return <>
        <Messages socketChanel={socketChanel}/>
        <AddMessageForm socketChanel={socketChanel}/>
    </>
}

export const Messages: React.FC<{ socketChanel: WebSocket | null }> = ({socketChanel}) => {
    const messageWrapper = React.useRef(null)
    const [messages, setMessages] = React.useState([] as MessageType[])

    React.useEffect(() => {
        let addMessageEventListener = (e: MessageEvent) => {
            let messagesData = JSON.parse(e.data)
            setMessages((prevState) => [...prevState, ...messagesData])
        }
        socketChanel && socketChanel.addEventListener("message", addMessageEventListener)
        return () => {
            socketChanel && socketChanel.removeEventListener("message", addMessageEventListener)
        }
    }, [])

    if (!socketChanel) return <Preloader/>
    return <div ref={messageWrapper} style={{maxHeight: "500px", overflowY: "scroll"}}>
        {
            messages ? messages.map((item, i) => {
                    return <Message key={i} message={item}/>
                })
                : "Сообщений не найдено"
        }
    </div>
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

export const AddMessageForm: React.FC<{ socketChanel: WebSocket | null }> = ({socketChanel}) => {
    const [message, setMessage] = React.useState("")
    const [readyState, setReadyState] = React.useState<'pending' | 'ready'>('pending')

    React.useEffect(() => {
        let addOpenEventListener = () => {
            setReadyState('ready')
        }
        socketChanel && socketChanel.addEventListener("open", addOpenEventListener)
        return () => {
            socketChanel && socketChanel.removeEventListener("open", addOpenEventListener)
        }
    }, [])
    const sendMessage = () => {
        if (!message) return;
        socketChanel && socketChanel.send(message)
        setMessage("")
    }
    if (!socketChanel) return <Preloader/>
    return <>
            <textarea name="message" value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      id="addMessage" cols={30} rows={10}/>
        <button disabled={readyState !== 'ready'} onClick={() => sendMessage()}>Send</button>
    </>
};