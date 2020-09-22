import React from 'react';
import Users from "./Users";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


const UsersContainer: React.FC = () => {
        
        return <Users />
}

export default compose<React.ComponentType>(
    withAuthRedirect
)(UsersContainer)