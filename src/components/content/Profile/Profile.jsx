import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo
                updateStatus={props.updateStatus}
                profile={props.profile}
                status={props.status}
            />
            <MyPostsContainer />
        </div>
    )
}   

export default Profile;