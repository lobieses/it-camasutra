import React from 'react';
import style from './ProfileInfo.module.css';
import  ProfileStatusWithHook from './ProfileStatus/ProfileStatusWithHook';
import ChangePhoto from './ChangePhoto/ChangePhoto';
import ProfileData from './ProfileData/ProfileDatat';
import Preloader from '../../../common/Preloader/preloader';
import defaultPhoto from '../../../../assets/images/defaultPhoto.jpg';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }


    return (
        <div className={style.profile}>
            <div className={style.sideInfo}>

                <div className={style.profileAvatar}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto} alt="avatar"/>
                </div>
                <div className={style.fullName}>
                    {props.profile.fullName}
                </div>

            </div>
            <div className={style.otherInfo}>

                <div className={style.status}>
                    <ProfileStatusWithHook
                        onUpdateStatus={props.onUpdateStatus}
                        status={props.status}/>
                </div>

                <div>
                    {props.isOwner
                        ? <ChangePhoto
                            onUpdatePhoto={props.onUpdatePhoto}
                        />
                        : null
                    }
                </div>

                <div>
                    <ProfileData
                        onChangeEditMode={props.onChangeEditMode}
                        profile={props.profile}
                        isOwner={props.isOwner}
                    />
                </div>

            </div>
        </div>
    )
}   

export default ProfileInfo;