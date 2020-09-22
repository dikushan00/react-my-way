import React, { useState } from 'react';
import  s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataFormRedux} from "./ProfileDataForm"
import {SaveProfileType} from '../../../Types/Types';
import 'react-image-crop/dist/ReactCrop.css';
import AvatarPhoto from './AvatarPhoto';
import ProfileData from './ProfileData';
import photoUser from '../../../img/user.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store-redux';
import { saveProfile, updatePhoto } from './../../../redux/profile_reducer';
import { follow, unfollow } from '../../../redux/users_reducer';

const ProfileInfo:React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const isFetching = useSelector((state: AppStateType) => state.profilePage.isFetching)
    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    const friends = useSelector((state: AppStateType) => state.usersPage.friends)
    const toggleProgressArr = useSelector((state: AppStateType) => state.usersPage.toggleProgressArr)

    const onSubmit = (data: SaveProfileType) => {
        dispatch(saveProfile(data))
        setEditMode(false)
    }
        if (!profile || isFetching){
            return <Preloader />
        }

    const switch_follow = (followed: boolean, userId: number) => {
        if (followed) {
            dispatch(unfollow(userId))
        } else {
            dispatch(follow(userId))
        }
    }

        return (<div>
            <div className={s.descriptionBlock}>
                <div style={{display:'flex'}}>
                    {
                        props.isOwner 
                            ? <AvatarPhoto 
                                avatar = {profile.photos.large} 
                                fullName = {profile.fullName} 
                                isOwner = {props.isOwner}
                                updatePhoto = {updatePhoto}/>
                                //@ts-ignore
                            : <img src = {profile.photos.large ? profile.photos.large : photoUser} className = {s.avaImg} alt="PHOTO"/>
                    }
                    <div style={{marginLeft:"20px"}}>
                        <p><b>{profile.fullName || 'unknown user '}</b></p>
                        <ProfileStatusWithHooks />
                    </div>
                </div>
                {
                editMode 
                //@ts-ignore
                    ? <ProfileDataFormRedux initialValues = {profile} profile = {profile} onSubmit = {onSubmit}/>
                    : <ProfileData profile = {profile} onEditMode = {() => setEditMode(true)} isOwner={props.isOwner}/>
                }
                {
                    !props.isOwner
                        && friends.some(item => { return profile && item.id === profile.userId})
                        ? <button className={s.btnFollow + ' ' + (s.btnRed)} onClick={() => switch_follow(true, profile && profile.userId)}
                                    disabled={toggleProgressArr.some(id => profile && id === profile.userId)} key = {profile.userId}> Unfollow
                                </button>
                        : !props.isOwner && <button className={s.btnFollow + ' ' + (s.btnBlue)} onClick={() => switch_follow(false, profile && profile.userId)}
                                    disabled={toggleProgressArr.some(id => profile && id === profile.userId)} key = {profile.userId}> Follow
                                </button>
                }
            </div>
        </div>);
}

export default ProfileInfo;


type PropsType = {
    isOwner: boolean
}