import React, { RefObject, useState } from 'react';
import  s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataFormRedux} from "./ProfileDataForm"
import { ProfileType, SaveProfileType, ContactsType } from '../../../Types/Types';
import 'react-image-crop/dist/ReactCrop.css';
import AvatarPhoto from './AvatarPhoto';
import ProfileData from './ProfileData';
import photoUser from '../../../img/user.svg'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store-redux';

const ProfileInfo:React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const users = useSelector((state: AppStateType) => state.usersPage.usersData)
    const toggleProgressArr = useSelector((state: AppStateType) => state.usersPage.toggleProgressArr)
    
    const onSubmit = (data: SaveProfileType) => {
        props.saveProfile(data).then(() => {
            setEditMode(false)
        });
    }
        if (!props.profile){
            return <Preloader />
        }

    const switch_follow = (followed: boolean, userId: number) => {
        if (followed) {
            props.unfollow(userId)
        } else {
            props.follow(userId)
        }
    }

        return (<div>
            <div className={s.descriptionBlock}>
                <div style={{display:'flex'}}>
                    {
                        props.isOwner 
                            ? <AvatarPhoto 
                                avatar = {props.profile.photos.large} 
                                fullName = {props.profile.fullName} 
                                isOwner = {props.isOwner}
                                updatePhoto = {props.updatePhoto}/>
                                //@ts-ignore
                            : <img src = {props.profile.photos.large ? props.profile.photos.large : photoUser} className = {s.avaImg} alt="PHOTO"/>
                    }
                    <div style={{marginLeft:"20px"}}>
                        <p><b>{props.profile.fullName || 'unknown user '}</b></p>
                        <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
                    </div>
                </div>
                {
                editMode 
                //@ts-ignore
                    ? <ProfileDataFormRedux initialValues = {props.profile} profile = {props.profile} onSubmit = {onSubmit}/>
                    : <ProfileData profile = {props.profile} onEditMode = {() => setEditMode(true)} isOwner={props.isOwner}/>
                }
                {
                    !props.isOwner 
                        && users.map(user => {
                            if(props.profile && user.id === props.profile.userId) {
                                return <button className={s.btnFollow + ' ' + (user.followed ? s.btnBlue : s.btnRed)} onClick={() => switch_follow(user.followed, user.id)}
                                    disabled={toggleProgressArr.some(id => id === user.id)} key = {user.id}> {user.followed ? "Unfollow" : "Follow"}
                                </button>
                            }
                        })
                }
            </div>
        </div>);
}

export default ProfileInfo;


type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string

    updatePhoto: (file: File) => void
    saveProfile: (data: SaveProfileType) => Promise<SaveProfileType>
    updateStatus: (data: string) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}