import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Content extends React.Component {
    render() {
        return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
        )
    }
}   

export default Content;