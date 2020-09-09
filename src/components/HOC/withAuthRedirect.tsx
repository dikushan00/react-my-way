import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { AppStateType } from "../../redux/store-redux";


export const withAuthRedirect = (Component: React.ComponentType) => {

    const RedirectComponent = (props: any) => {

        if (!props.isAuth) {
            return <Redirect to='/login'/>
        }

        return <Component {...props}/>
    }

    let mapStateToPropsForRedirect = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
    });

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;

}