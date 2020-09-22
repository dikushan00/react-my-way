import React from 'react';
import News from "./News";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

export default compose<React.ComponentType>(
    withAuthRedirect
)(News)

