import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

class Content extends React.Component {
    render() {
        return (
        <div className={style.content}>
            <img alt="contentImg" src="https://pro.sony/s3/2017/07/26100026/top-banner_1600x450.jpg"/>
            <MyPosts />
        </div>
        )
    }
}   

export default Content;