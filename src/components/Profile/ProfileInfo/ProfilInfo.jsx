import React from 'react';
import  s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import photoUser from '../../../img/user.svg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {UpdateMainPhotoFormRedux} from "./UpdateMainPhotoForm";
import {updatePhoto} from "../../../redux/profile_reducer";

const ProfileInfo = (props) => {

    if (!props.state){
        return <Preloader/>
    }

    const onSubmit = (data) => {
        updatePhoto(data);
    }

    return (<div>
        <div className={s.descriptionBlock}>
            <div>
                <img src={ props.state.photos.large ? props.state.photos.large : photoUser} alt="photo" className={s.avaImg}/>
                <UpdateMainPhotoFormRedux onSubmit={onSubmit}/>
            </div>
            <span>{props.state.fullName}</span>
            <div><ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/></div>
            <p>{props.state.aboutMe}</p>
        </div>
    </div>);
}

export default ProfileInfo;