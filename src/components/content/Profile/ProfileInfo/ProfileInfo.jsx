import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileData from './ProfileData/ProfileData';
import defaultPhoto from '../../../../assets/images/defaultPhoto.jpg';

const ProfileInfo = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.avatar}>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto} alt="avatar"/>
                </div>
            </div>
            <div className={style.profileData}>

                <div className={style.fullName}>
                    {props.profile.fullName}
                </div>
                <div className={style.status}>
                    {props.status
                     ? <p>{props.status}</p>
                     : <p>-----</p>
                    }
                </div>
                <div>
                    <ProfileData
                        profile={props.profile}
                    />
                </div>
            </div>
            <div className={style.changeEditModButton}>
                {props.isOwner
                    ? <button onClick={() => props.onChangeEditMode(true)}>change my profile</button>
                    : null
                }
            </div>
        </div>
    )
}   

export default ProfileInfo;