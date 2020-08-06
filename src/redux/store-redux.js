import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import navbar_reducer from "./navbar_reducer";
import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import news_reducer from "./news_reducer";
import users_reducer from "./users_reducer";
import header_reducer from "./header_reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleWare from 'redux-thunk'
import app_reducer from "./app_reducer";

let reducers = combineReducers({
    dialogPage: dialogs_reducer,
    profilePage: profile_reducer,
    navbar: navbar_reducer,
    newsPage: news_reducer,
    usersPage: users_reducer,
    auth: header_reducer,
    app: app_reducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;

export default store

