import React from 'react';
import style from './ProfileData.module.css';
import Contacts from "./Contacts/Contacts";

const ProfileData = ({profile}) => {
    return (
        <div className={style.profileData}>
            <div className={style.mainInfo}>
                <b>looking for a job: </b><p>{profile.lookingForAJob ? 'yes' : 'no'}</p>
            </div>
            <div className={style.mainInfo}>
                <b>looking for a job description: </b><p>{profile.lookingForAJobDescription}</p>
            </div>
            <div className={style.mainInfo}>
                <b>about me: </b><p>{profile.aboutMe}</p>
            </div>
            <div className={style.contacts}>
                <Contacts contacts={profile.contacts}/>
            </div>
        </div>
    )
}

export default ProfileData;