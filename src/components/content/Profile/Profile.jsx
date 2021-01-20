import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo 
                postText={props.textNewPost} 
                onChangePostText={props.onChangePostText}
                addPost={props.addPost}
            />
            <MyPosts 
                profilePosts={props.posts}
            />
        </div>
    )
}   

export default Profile;