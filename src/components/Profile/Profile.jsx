import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfilInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <div className={s.content}>
        <ProfileInfo state = { props.state.profile } status = {props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;