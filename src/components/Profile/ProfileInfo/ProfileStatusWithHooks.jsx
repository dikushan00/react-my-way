import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const toggleEditMode = () => {
        setEditMode(!editMode)
        if (editMode) props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return <div>
        { editMode
            ? <input onChange={onStatusChange} autoFocus={true} onBlur={toggleEditMode} type="text" value={status}/>
            : <span onDoubleClick={toggleEditMode}>{status || 'Напишите немного о себе'}</span>}
    </div>
}

export default ProfileStatusWithHooks;