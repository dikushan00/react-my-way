import React, {useEffect, useState, ChangeEvent} from 'react';

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const toggleEditMode = () => {
        setEditMode(!editMode)
        if (editMode) props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    return <div>
        { editMode
            ? <input onChange={onStatusChange} autoFocus={true} onBlur={toggleEditMode} type="text" value={status}/>
            : <span onDoubleClick={toggleEditMode} style = {{cursor: "pointer"}}>{status || 'Напишите немного о себе'}</span>}
    </div>
}

export default ProfileStatusWithHooks;


type PropsType = {
    status: string
    updateStatus: (text: string) => void
}