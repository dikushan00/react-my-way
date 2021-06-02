import {InferActionsTypes, ThunkType} from "./store-redux";
import {MessageApiType} from "../components/Chat/Chat";
import {ChatApi} from "../api/chat-api";
import {Dispatch} from "redux";
import {v1} from "uuid"

type MessageType = MessageApiType & { id: string }

let initialState = {
    messages: [] as MessageType[],
    status: null as StatusType | null
}

type InitialStateType = typeof initialState
export type StatusType = "pending" | "ready" | "error"

let chat_reducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case 'SN/CHAT/MESSAGES_RECEIVED': {
            return {
                ...state,
                messages: [...state.messages, ...action.messages].map(item => ({
                    ...item,
                    id: v1()
                })).filter((item, index, array) => index >= array.length - 100)
            }
        }
        case 'SN/CHAT/STATUS_CHANGED': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const actions = {
    messagesReceived: (messages: MessageApiType[]) => ({type: 'SN/CHAT/MESSAGES_RECEIVED', messages} as const),
    statusChanged: (status: StatusType) => ({type: 'SN/CHAT/STATUS_CHANGED', status} as const),
}

type ActionsType = InferActionsTypes<typeof actions>
type GetThunkType = ThunkType<ActionsType>

let _newMessageHandler: (((messages: MessageApiType[]) => void) | null) = null
const newMessageHandler = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: MessageApiType[]) =>
            dispatch(actions.messagesReceived(messages))
    }

    return _newMessageHandler
}
let _newStatusHandler: (((status: StatusType) => void) | null) = null
const newStatusHandler = (dispatch: Dispatch) => {
    if (_newStatusHandler === null) {
        _newStatusHandler = (status: StatusType) =>
            dispatch(actions.statusChanged(status))
    }

    return _newStatusHandler
}
export const startMessagesListening = (): GetThunkType => async (dispatch) => {
    ChatApi.subscribe("messagesSubs", newMessageHandler(dispatch))
}
export const stopMessagesListening = (): GetThunkType => async (dispatch) => {
    ChatApi.unsubscribe("messagesSubs", newMessageHandler(dispatch))
}
export const startStatusListening = (): GetThunkType => async (dispatch) => {
    ChatApi.subscribe("statusSubs", newStatusHandler(dispatch))
}
export const stopStatusListening = (): GetThunkType => async (dispatch) => {
    ChatApi.unsubscribe("statusSubs", newStatusHandler(dispatch))
}
export const sendMessage = (message: string): GetThunkType => async () => {
    ChatApi.sendMessage(message)
}

export default chat_reducer