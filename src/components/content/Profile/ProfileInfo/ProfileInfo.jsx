import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    const changePostText = (event) => {
        props.onChangePostText(event.target.value);
    }

    const addPost = () => {
        props.addPost();
    }

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
                <textarea placeholder="your news..." value={props.postText} onChange={changePostText}></textarea>
                <button onClick={addPost}>Send</button>
            </div> 
        </div>
    )
}   

export default ProfileInfo;