import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends React.Component {
    render() {
        return (
        <div className={style.content}>
            <ProfileInfo 
                postText={this.props.textNewPost} 
                onChangePostText={this.props.onChangePostText}
                addPost={this.props.addPost}
            />
            <MyPosts 
                profilePosts={this.props.posts}
            />
        </div>
        )
    }
}   

export default Profile;