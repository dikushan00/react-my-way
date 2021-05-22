import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from "./Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Provider, useDispatch, useSelector} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {init} from "./redux/app_reducer";
import store, {AppStateType} from "./redux/store-redux";
import {componentsData} from "./componentsDataArr";

const App: React.FC = () => {

    const dispatch = useDispatch()
    const initialized = useSelector((state: AppStateType) => state.app.initialized)

    useEffect(() => {
        dispatch(init())
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

    // @ts-ignore
    return (
        <div className="wrapper">
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        {
                            componentsData.map((item, i) => {
                                return <Route key = {i} path={item.path} exact={item.exact} render={() => item.Component}/>

                            })
                        }
                    </Switch>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const MyWayApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
}

export default MyWayApp

//process.env.PUBLIC_URL
