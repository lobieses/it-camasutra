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

    let onSubmit = (data) => {
        props.onUpdateProfileData(data).then(() => {
            onChangeEditMode(false);
            props.onRefreshProfile();
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
                  />
                : <div>
                    <ProfileInfo
                        onUpdatePhoto={props.onUpdatePhoto}
                        onUpdateStatus={props.onUpdateStatus}
                        onChangeEditMode={onChangeEditMode.bind(true)}
                        profile={props.profile}
                        status={props.status}
                        isOwner={props.isOwner}
                    />
                    <MyPostsContainer />
                  </div>
            }

        </div>
    )
}

export default Profile;