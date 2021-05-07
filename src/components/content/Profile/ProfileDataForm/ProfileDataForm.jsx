import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import defaultPhoto from "../../../../assets/images/defaultPhoto.jpg";
import style from './ProfileDataForm.module.css';
import ChangePhoto from "./ChangePhoto/ChangePhoto";

const ProfileDataForm = (props) => {

    return (
        <div className={style.profile}>
            <form onSubmit={props.handleSubmit}>
                <div className={style.container}>
                    <div className={style.avatar}>
                        <div className={style.avatarPhoto}>
                            <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto} alt="avatar"/>
                        </div>
                        <div className={style.changePhotoButton}>
                            <ChangePhoto onUpdatePhoto={props.onUpdatePhoto}/>
                        </div>
                    </div>
                    <div className={style.fullNameAndStatus}>
                        <div className={style.fullName + ' ' + style.fieldInfo}>
                            <span>full name</span>
                            {createField(Input, 'fullName', [],{placeholder: 'full name'})}
                        </div>
                        <div className={style.status + ' ' + style.fieldInfo}>
                            <span>status</span>
                            {createField(Input, 'status', [], {placeholder: 'status'})}
                        </div>
                    </div>
                    <div className={style.otherInfo}>
                        <div className={style.fieldInfo}>
                            <span>about me</span>
                            {createField(Textarea, 'aboutMe', [], {placeholder: 'about me'})}
                        </div>
                        <div className={style.fieldInfo}>
                            <span>looking for a job</span>
                            {createField(Input, 'lookingForAJob', [], {type: 'checkbox'})}
                        </div>

                        <div className={style.fieldInfo}>
                            <span>looking for a job description</span>
                            {createField(Textarea, 'lookingForAJobDescription', [], {placeholder: 'looking for a job description'})}
                        </div>

                        <div className={style.contacts}>
                            <div>
                                {Object.keys(props.profile.contacts).map(key => {
                                    return (
                                        <div key={key} className={style.fieldInfo}>
                                            <span>{key}: </span>{createField(Input, 'contacts.' + key, [], {placeholder: key})}
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                    <div className={style.saveButton}>
                        <button>Save</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

let ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;