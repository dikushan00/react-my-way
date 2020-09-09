import React from 'react';
import s from "../Dialogs.module.css";

type PropsType = {
    props: {
        message: string
        id: number
    }
}
const Message: React.FC<PropsType> = ({props}) => {
    return (
        <div className={s.message  + ' ' + s[props.id % 2 === 0 ? "even" : "odd"]}>{props.message}</div>
    )
}

export default Message;