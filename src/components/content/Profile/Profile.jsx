import React, {useState} from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const Profile = (props) => {
    let [editMod, setEditMode] = useState(false);

    let onChangeEditMode = (toggle) => {
        setEditMode(toggle);
    }

    let onSubmit = ({status='', ...data}) => {
        Promise.all([
            props.onUpdateProfileData(data),
            props.onUpdateStatus(status)
        ]).then(() => {
            props.onRefreshProfile();
            onChangeEditMode(false);
        });
    }


    return (
        <div className={style.content}>
            {editMod
                ? <ProfileDataForm
                    onSubmit={onSubmit}
                    profile={props.profile}
                    status={props.status}
                    initialValues={props.profile}
                    onUpdatePhoto={props.onUpdatePhoto}
                    onUpdateStatus={props.onUpdateStatus}
                  />
                : <ProfileInfo
                    onChangeEditMode={onChangeEditMode.bind(true)}
                    profile={props.profile}
                    status={props.status}
                    isOwner={props.isOwner}
                  />
            }
        </div>
    )
}

export default Profile;