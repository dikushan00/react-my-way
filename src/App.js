import React, {PureComponent} from 'react';
import './App.css';
import {NavbarContainer} from './components/Navbar/Navbar';
import {Route, withRouter, BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./Footer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {Provider, connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {init} from "./redux/app_reducer";
import store from "./redux/store-redux";
import { withSuspens } from './components/HOC/withSuspens';


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends PureComponent {

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
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs/:userId?' render={withSuspens(DialogsContainer)}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/news' render={() => <NewsContainer/>}/>
                        <Route exact path='/' render={() => <NewsContainer/>}/>
                        <Route path='/users' render={withSuspens(UsersContainer)}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {init})
)(App);

const MyWayApp = (props) => {
    return <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
}

export default MyWayApp
