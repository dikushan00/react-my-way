import React, {useEffect, useState, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store-redux';
import { updateStatus } from './../../../redux/profile_reducer';

const ProfileStatusWithHooks: React.FC = (props) => {

    const dispatch = useDispatch()
    const statusWord = useSelector((state: AppStateType) => state.profilePage.status)
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(statusWord)

    useEffect( () => {
        setStatus(status)
    }, [status] )

    const toggleEditMode = () => {
        setEditMode(!editMode)
        if (editMode) dispatch(updateStatus(status))
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