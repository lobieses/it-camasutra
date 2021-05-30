import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChangeProfileInfo from "./ProfileDataForm/ChangeProfileInfo";

const Profile = (props) => {
    return (
        <div className={style.content}>
            {props.editMode
                ? <ChangeProfileInfo
                    onUpdatePhoto={props.onUpdatePhoto}
                    onSubmit={props.onSubmit}
                    profile={props.profile}
                    status={props.status}
                    initialValues={props.profile}
                  />
                : <ProfileInfo
                    onChangeEditMode={props.onChangeEditMode}
                    profile={props.profile}
                    status={props.status}
                    isFetching={props.isFetching}
                    isOwner={props.isOwner}
                  />
            }
        </div>
    )
}

export default Profile;