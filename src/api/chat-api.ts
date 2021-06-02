import {MessageApiType} from "../components/Chat/Chat";
import {StatusType} from "../redux/chat_reducer";

let ws: WebSocket | null = null
let subscribers = {
    messagesSubs: [] as MessageSubscriberType[],
    statusSubs: [] as StatusSubscriberType[]
}

type EventTypes = "statusSubs" | "messagesSubs"
const closeHandler = () => {
    notifyStatusChanging("pending")
    setTimeout(createChanel, 3000)
}
let messageHandler = (e: MessageEvent) => {
    let messagesData = JSON.parse(e.data)
    subscribers.messagesSubs.forEach(s => s(messagesData))
}
let openHandler = () => {
    notifyStatusChanging("ready")
}
let errorHandler = () => {
    notifyStatusChanging("error")
}

const notifyStatusChanging = (status: StatusType) => {
    subscribers.statusSubs.forEach(s => s(status))
}
const cleanUp = () => {
    ws && ws.removeEventListener("close", closeHandler)
    ws && ws.removeEventListener("message", messageHandler)
    ws && ws.removeEventListener("open", openHandler)
    ws && ws.removeEventListener("error", errorHandler)
    notifyStatusChanging("pending")
}

function createChanel() {
    cleanUp()
    ws && ws.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    ws && ws.addEventListener("close", closeHandler)
    ws && ws.addEventListener("open", openHandler)
    ws && ws.addEventListener("error", errorHandler)
    ws && ws.addEventListener("message", messageHandler)
    notifyStatusChanging("pending")
}

export const ChatApi = {
    start() {
        createChanel()
    },
    stop() {
        subscribers.statusSubs = []
        subscribers.messagesSubs = []
        ws && ws.close()
        cleanUp()
    },
    subscribe(event: EventTypes, subscriber: MessageSubscriberType | StatusSubscriberType) {
        //@ts-ignore
        subscribers[event].push(subscriber)
    },
    unsubscribe(event: EventTypes, subscriber: MessageSubscriberType | StatusSubscriberType) {
        //@ts-ignore
        subscribers = subscribers[event].filter(item => item !== subscriber)
    },
    sendMessage(message: string) {
        ws && ws.send(message)
    }
}

export type MessageSubscriberType = (messages: MessageApiType[]) => void
export type StatusSubscriberType = (status: StatusType) => void
