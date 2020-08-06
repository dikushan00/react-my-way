import {checkAuthMe} from "./header_reducer";

const INIT = 'INIT'

let initialState = {
    initialized: false
}

let app_reducer = (state = initialState, action) => {

    switch (action.type) {

        case INIT: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initialize = () => ({type: INIT})

export const init = () => (dispatch) => {
    let promise = dispatch(checkAuthMe())

    Promise.all([promise])
        .then(() => {
            dispatch(initialize());
        })
}

export default app_reducer