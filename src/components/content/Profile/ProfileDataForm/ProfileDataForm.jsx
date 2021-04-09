import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import defaultPhoto from "../../../../assets/images/defaultPhoto.jpg";
import ProfileStatusWithHook from "../ProfileInfo/ProfileStatus/ProfileStatusWithHook";
import style from './ProfileDataForm.module.css';

const ProfileDataForm = (props) => {
    return (
        <div className={style.profile}>
            <form onSubmit={props.handleSubmit}>
                <div className={style.sideInfo}>
                    <div className={style.profileAvatar}>
                        <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto} alt="avatar"/>
                    </div>
                    <div className={style.fullName}>
                        {createField(Input, 'fullName', [],{placeholder: 'full name'})}
                    </div>
                </div>

                <div className={style.otherInfo}>

                    <div className={style.status}>
                        <ProfileStatusWithHook
                            onUpdateStatus={props.onUpdateStatus}
                            status={props.status}/>
                    </div>

                    {<b>{props.error}</b>}

                    <div>
                        <b>about me:</b>
                        {createField(Textarea, 'aboutMe', [], {placeholder: 'about me'})}
                    </div>
                    <div>
                        <b>looking for a job: </b>
                        {createField(Input, 'lookingForAJob', [], {type: 'checkbox'})}
                    </div>

                    <div>
                        <b>looking for a job description</b>
                        {createField(Textarea, 'lookingForAJobDescription', [], {placeholder: 'looking for a job description'})}
                    </div>

                    <div>
                        <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                            return (
                                <div key={key}>
                                    <b>{key}: </b>{createField(Input, 'contacts.' + key, [], {placeholder: key})}
                                </div>
                            )
                    })}
                    </div>

                    <button>Save</button>


                </div>


            </form>


        </div>
    )
}

let ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;