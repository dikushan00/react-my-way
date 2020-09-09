import React, {PureComponent} from 'react';
import './App.css';
import {NavbarContainer} from './components/Navbar/Navbar';
import {Route, withRouter, BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./Footer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {Provider, connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {init} from "./redux/app_reducer";
import {check_auth} from "./redux/profile_reducer";
import store, {AppStateType} from "./redux/store-redux";
import { withSuspens } from './components/HOC/withSuspens';
import ProfileContainer from './components/Profile/ProfileContainer';


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const WithSusmensDialogs = withSuspens(DialogsContainer)
const WithSusmensUsers= withSuspens(UsersContainer)

type PropsType = {
    init: () => void
    initialized: boolean
    myId: number
}

class App extends PureComponent<PropsType> {

    componentDidMount() {
        this.props.init()
    }

    render() {

        if (!this.props.initialized){
            return <Preloader />
        }
        
        return (
            <div className="wrapper">
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                        <Route path='/dialogs/:userId?' render={() => <WithSusmensDialogs />}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/news' render={() => <NewsContainer />}/>
                        <Route exact path='/' render={() => <NewsContainer />}/>
                        <Route path='/users' render={ () => <WithSusmensUsers />}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    myId: state.auth.id
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {init, check_auth}) 
)(App);

const MyWayApp = () => {
    return <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
}

export default MyWayApp
