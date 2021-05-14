import React, {useState} from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChangeProfileInfo from "./ProfileDataForm/ChangeProfileInfo";

const Profile = (props) => {
    let [editMod, setEditMode] = useState(false);

    let onChangeEditMode = (toggle) => {
        setEditMode(toggle);
    }

    let onSubmit = ({status='', ...data}) => {
        props.onUpdateProfileData(status, data)
            .then(() => {
                props.onRefreshProfile();
                onChangeEditMode(false);
        });
    }


    return (
        <div className={style.content}>
            {editMod
                ? <ChangeProfileInfo
                    onUpdatePhoto={props.onUpdatePhoto}
                    onSubmit={onSubmit}
                    profile={props.profile}
                    status={props.status}
                    initialValues={props.profile}
                  />
                : <ProfileInfo
                    onChangeEditMode={onChangeEditMode.bind(true)}
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