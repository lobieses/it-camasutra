import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo
                updateStatus={props.updateStatus}
                profile={props.profile}
                status={props.status}
            />
            <MyPosts 
                onChangePostText={props.updateTextForNewPost}
                onAddPost={props.addPost}
                posts={props.posts}
                postText={props.textNewPost} 
            />
        </div>
    )
}   

export default Profile;