import { InferActionsTypes, ThunkType } from "./store-redux";
import { DialogsAPI } from "../api/api";

let id = 4;

type UserDataType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type MessageDataType = {
    id: number
    messages: Array<MessagesType>
}

let initialState = {
    userData: [
        {"id": 1, "name": "Dmitri"},
        {"id": 2, "name": "Svetlana"},
        {"id": 3, "name": "Nauryz"},
        {"id": 4, "name": "Dinmukhamed"},
        {"id": 5, "name": "Mukhit"}
    ] as Array<UserDataType>,
    messageData: [
            {
                id: 1,
                messages: [
                    {"id": 1, "message": "Yo"},
                    {"id": 2, "message": "Hello"},
                    {"id": 1, "message": "How are you"}
                ]
            },
            {
                id: 2,
                messages: [
                    {"id": 1, "message": "hello. how are you?"},
                    {"id": 2, "message": "Hello"},
                    {"id": 1, "message": "im good"}
                ]
            },
            {
                id: 3,
                messages: [
                    {"id": 1, "message": "hi"},
                    {"id": 2, "message": "Hello"},
                    {"id": 1, "message": "what we get in home work"}
                ]
            },
            {
                id: 4,
                messages: [
                    {"id": 1, "message": "drop our phootos"},
                    {"id": 2, "message": "which?"},
                    {"id": 1, "message": "from zerendy"}
                ]
            },
            {
                id: 5,
                messages: [
                    {"id": 1, "message": "Hello classmates"},
                    {"id": 2, "message": "Hello"},
                    {"id": 1, "message": "wourld you like have hang out with me?"},
                    {"id": 2, "message": "yes, go!"}
                ]
            }
        ] as Array<MessageDataType>,
    newMessages: []
}

export type DialogsInitialStateType = typeof initialState

let dialogs_reducer = (state = initialState, action: ActionsType): DialogsInitialStateType => {

    switch (action.type) {

        case 'SN/Dialogs/ADD_NEW_MESSAGE': {

            if (action.newMessageText.length > 0) {
                return {
                    ...state,
                    messageData: state.messageData.map(item => {
                        if(+action.id == item.id){
                            item.messages = [...item.messages, {"id": 2, "message": action.newMessageText}]
                            return item
                        }
                        return item
                    })
                }
            }
            id += 2;
            return state
        }

        case 'SN/Dialogs/SEND_NEW_MESSAGE': {

            return {
                ...state,
                newMessages: action.data
            }
        }

        default: {
            return state
        }
    }
}

export const actions = {
    addMessage: (id: number, newMessageText: string) => ({type: 'SN/Dialogs/ADD_NEW_MESSAGE', id, newMessageText} as const),
    sendNewMessage: (data: any) => ({type: 'SN/Dialogs/SEND_NEW_MESSAGE', data} as const)
}

type getThunkType = ThunkType<ActionsType>

export const sendMessage = (id: number, message: string): getThunkType => async (dispatch) => {
    debugger
    let data = await DialogsAPI.sendMessagesToUser(id, message).then(() => {
        dispatch(actions.sendNewMessage(data))
    })
}
    
type ActionsType = InferActionsTypes<typeof actions>

export default dialogs_reducer


// [
//     {
//         id: 1,
//         messages: [
//             {"id": 1, "message": "Yo"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "How are you"}
//         ]
//     },
//     {
//         id: 2,
//         messages: [
//             {"id": 1, "message": "hello. how are you?"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "im good"}
//         ]
//     },
//     {
//         id: 3,
//         messages: [
//             {"id": 1, "message": "hi"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "what we get in home work"}
//         ]
//     },
//     {
//         id: 4,
//         messages: [
//             {"id": 1, "message": "drop our phootos"},
//             {"id": 2, "message": "which?"},
//             {"id": 1, "message": "from zerendy"}
//         ]
//     },
//     {
//         id: 5,
//         messages: [
//             {"id": 1, "message": "Hello classmates"},
//             {"id": 2, "message": "Hello"},
//             {"id": 1, "message": "wourld you like have hang out with me?"},
//             {"id": 2, "message": "yes, go!"}
//         ]
//     }
// ]