import React from 'react';
import s from "../Dialogs.module.css";


function Message({props}) {
    return (
        <div className={s.message  + ' ' + s[props.id % 2 === 0 ? "even" : "odd"]}>{props.message}</div>
    )
}

export default Message;