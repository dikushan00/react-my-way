import React, { useEffect } from 'react';
import Profile from "./Profile";
import { useDispatch, useSelector} from "react-redux";
import {check_auth, getStatus} from "../../redux/profile_reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect"
import { AppStateType } from '../../redux/store-redux';

const ProfileContainer:React.FC = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const authId = useSelector((state: AppStateType) => state.auth.id)

    const refreshProfile = () => {
        //@ts-ignore
        let userId = params.userId;
        if (!userId) userId = authId as number
        dispatch(check_auth(userId))
        dispatch(getStatus(userId))
    }

    useEffect(() => {
        refreshProfile();
        // @ts-ignore
    }, [params.userId])

        return (
            // @ts-ignore
            <Profile isOwner={!params.userId} />
        )
}

export default compose<React.ComponentType>(
    withAuthRedirect
)(ProfileContainer)