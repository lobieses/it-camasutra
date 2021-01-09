import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
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
                    <textarea placeholder="your news..."></textarea>
                    <button>Send</button>
                </div> 
            </div>
        )
    }
}   

export default ProfileInfo;