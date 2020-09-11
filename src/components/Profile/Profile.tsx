import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfilInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType, SaveProfileType} from '../../Types/Types';
import {ProfileInitialStateType} from "../../redux/profile_reducer";

const Profile: React.FC<PropsType> = (props) => {

  return (
    <div className={s.content}>
        <ProfileInfo 
          profile = { props.state.profile } 
          isOwner={props.isOwner}
          status = {props.status}
          updateStatus = {props.updateStatus} 
          updatePhoto={props.updatePhoto}
          saveProfile={props.saveProfile}
          follow = {props.follow}
          unfollow = {props.unfollow}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


type PropsType = {
  state: ProfileInitialStateType
  isOwner: boolean
  status: string

  updateStatus: (data: string) => void
  updatePhoto: (file: File) => void
  saveProfile: (data: SaveProfileType) => Promise<SaveProfileType>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}