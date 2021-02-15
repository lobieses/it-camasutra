import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.backgroundImage}>
                <img alt="contentImg" src="https://pro.sony/s3/2017/07/26100026/top-banner_1600x450.jpg"/>
            </div> 
            <div className={style.profile}>
                <div className={style.sideInfo}>
                    <div className={style.profileAvatar}>
                        <img src={props.profile.photos.large} alt="avatar"/>
                    </div>          
                    <div className={style.fullName}>
                        {props.profile.fullName}
                    </div>
                </div> 
                <div className={style.otherInfo}>
                    <div className={style.status}>
                        {props.profile.aboutMe}
                    </div>
                </div>             
            </div>
        </div>
    )
}   

export default ProfileInfo;