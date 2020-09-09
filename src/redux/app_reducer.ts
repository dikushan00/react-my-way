import {checkAuthMe} from "./header_reducer";
import {check_auth_me} from "./profile_reducer";
import {getFriends} from '../redux/users_reducer'
import { InferActionsTypes, ThunkType } from "./store-redux";


let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

let app_reducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case 'SN/APP/INIT': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const actions = {
    initialize: () => ({type: 'SN/APP/INIT'} as const)
}

type ActionsType = InferActionsTypes<typeof actions>
type GetThunkType = ThunkType<ActionsType>

export const init = (): GetThunkType => async (dispatch) => {
    let promise = dispatch(checkAuthMe())
    let promise2 = dispatch(getFriends)

    Promise.all([promise])
        .then(() => {
            dispatch(check_auth_me())
        })
        .then(()=> {
            dispatch(getFriends())
            dispatch(actions.initialize());
        })
}

export default app_reducer