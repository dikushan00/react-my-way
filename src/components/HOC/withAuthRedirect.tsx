import React from "react";
import {Redirect} from "react-router-dom";
import { useSelector} from "react-redux";
import { AppStateType } from "../../redux/store-redux";


export const withAuthRedirect = (Component: React.ComponentType) => {

    const RedirectComponent = (props: any) => {
        const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

        if (!isAuth) {
            return <Redirect to='/login'/>
        }

        return <Component {...props}/>
    }

    return RedirectComponent
}