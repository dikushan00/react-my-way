import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfilInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile: React.FC<PropsType> = (props) => {

  return (
    <div className={s.content}>
        <ProfileInfo isOwner={props.isOwner} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


type PropsType = {
  isOwner: boolean
}