import React from "react";
import Preloader from "../common/Preloader/Preloader";


export const withSuspens = (Component: React.ComponentType) => {

    return (props: any) => {

        return <React.Suspense fallback={<Preloader />}><Component {...props}/></React.Suspense>
    }
}