import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";


export const withSuspens = (Component: React.ComponentType) => {

    return (props: any) => {

        return <React.Suspense fallback={<Preloader />}><Component {...props}/></React.Suspense>
    }

}