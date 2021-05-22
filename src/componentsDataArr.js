import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NewsContainer from "./components/News/NewsContainer";
import Login from "./components/Login/Login";
import React from "react";
import {withSuspens} from "./components/HOC/withSuspens";
import {ChatPage} from "./components/Chat/ChatPage";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const WithSuspensDialogs = withSuspens(DialogsContainer)
const WithSuspensUsers = withSuspens(UsersContainer)

export const componentsData = [
    {
        path: '/',
        exact: true,
        Component: <NewsContainer/>
    },
    {
        path: '/chat',
        exact: true,
        Component: <ChatPage/>
    },
    {
        path: '/profile/:userId?',
        exact: false,
        Component: <ProfileContainer/>
    },
    {
        path: '/dialogs/:userId?',
        exact: false,
        Component: <WithSuspensDialogs/>
    },
    {
        path: '/music',
        exact: false,
        Component: <Music/>
    },
    {
        path: '/news',
        exact: false,
        Component: <NewsContainer/>
    },
    {
        path: '/users',
        exact: true,
        Component: <WithSuspensUsers/>
    },
    {
        path: '/settings',
        exact: true,
        Component: <Settings/>
    },
    {
        path: '/login',
        exact: true,
        Component: <Login/>
    },
    {
        path: '*',
        exact: false,
        Component: <div>404 - Not found</div>
    }
]


//     <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
// <Route path='/dialogs/:userId?' render={() => <WithSusmensDialogs />}/>
// <Route path='/music' render={() => <Music/>}/>
// <Route path='/settings' render={() => <Settings/>}/>
// <Route path='/news' render={() => <NewsContainer />}/>
// <Route exact path='/' render={() => <NewsContainer />}/>
// <Route path='/users' render={ () => <WithSusmensUsers />}/>
// <Route path='/login' render={() => <Login/>}/>
// <Route path='*' render={() => <div>404 - Not found</div>}/>