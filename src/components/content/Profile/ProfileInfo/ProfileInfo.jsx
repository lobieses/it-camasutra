import React from 'react';
import style from './ProfileInfo.module.css';
import {updateTextForNewPostActionCreator, addPostActionCreator} from './../../../../Redux/profile-reducer';

class ProfileInfo extends React.Component {
    changePostText(event) {
        this.props.dispatch(updateTextForNewPostActionCreator(event.target.value));
    }

    addPost() {
        this.props.dispatch(addPostActionCreator());
    }

    render() {
        return (
            <div>
                <div className={style.backgroundImage}>
                    <img alt="contentImg" src="https://pro.sony/s3/2017/07/26100026/top-banner_1600x450.jpg"/>
                </div> 
                <div className={style.profile}>
                    ava + info
                </div>
                <div className={style.createPost}>
                    <h2>My posts</h2>
                    <textarea placeholder="your news..." value={this.props.postText} onChange={this.changePostText.bind(this)}></textarea>
                    <button onClick={this.addPost.bind(this)}>Send</button>
                </div> 
            </div>
        )
    }
}   

export default ProfileInfo;