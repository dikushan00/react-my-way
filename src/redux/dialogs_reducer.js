const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
let id = 4;

let initialState = {
    userData: [
        {"id": 1, "name": "Dmitri"},
        {"id": 2, "name": "Svetlana"},
        {"id": 3, "name": "Nauryz"},
        {"id": 4, "name": "Dinmukhamed"},
        {"id": 5, "name": "Mukhit"}
    ],
    messageData: [
        {"id": 1, "message": "Yo"},
        {"id": 2, "message": "Hello"},
        {"id": 1, "message": "How are you"}
    ]
}

let dialogs_reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_MESSAGE: {

            if (action.newMessageText.length > 0) {
                return {
                    ...state,
                    messageData: [...state.messageData, {"id": id, "message": action.newMessageText}],
                }
            }
            id += 2;
            return state
        }

        default: {
            return state
        }
    }
}
export const addMessage= (newMessageText) => ({type: ADD_NEW_MESSAGE, newMessageText});

export default dialogs_reducer