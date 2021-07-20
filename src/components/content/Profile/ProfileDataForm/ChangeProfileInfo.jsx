import React from 'react';
import {Input, Textarea} from "../../../common/FormControls/FormControls";
import defaultPhoto from "../../../../assets/images/defaultPhoto.svg";
import style from './ChangeProfileInfo.module.css';
import ChangePhoto from "./ChangePhoto/ChangePhoto";
import {Field, Formik, Form} from "formik";

const ChangeProfileInfo = (props) => {
    return (
        <div className={style.profile}>
            <Formik
                initialValues={
                    {
                        ...props.initialValues,
                        status: props.status
                    }
                }
                onSubmit={props.onSubmit}
            >
                {({
                      handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={style.container}>
                            <div className={style.avatar}>
                                <div className={style.avatarPhoto}>
                                    <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}
                                         alt="avatar"/>
                                </div>
                                <div className={style.changePhotoButton}>
                                    <ChangePhoto onUpdatePhoto={props.onUpdatePhoto}/>
                                </div>
                            </div>
                            <div className={style.fullNameAndStatus}>
                                <div className={style.fullName + ' ' + style.fieldInfo}>
                                    <span>full name</span>
                                    <Field name="fullName" placeholder="full name" component={Input}/>
                                </div>
                                <div className={style.status + ' ' + style.fieldInfo}>
                                    <span>status</span>
                                    <Field name="status" placeholder="status" component={Input}/>
                                </div>
                            </div>
                            <div className={style.otherInfo}>
                                <div className={style.fieldInfo}>
                                    <span>about me</span>
                                    <Field name="aboutMe" placeholder="about me" component={Textarea}/>
                                </div>
                                <div className={style.fieldInfo}>
                                    <span>looking for a job</span>
                                    <Field name="lookingForAJob" type='checkbox' placeholder="status" component={Input}/>
                                </div>
                                <div className={style.fieldInfo}>
                                    <span>looking for a job description</span>
                                    <Field name="lookingForAJobDescription" placeholder="looking for a job description" component={Textarea}/>
                                </div>
                                <div className={style.contacts}>
                                      <div>
                                        {Object.keys(props.profile.contacts).map(key => {
                                            return (
                                                <div key={key} className={style.fieldInfo}>
                                                    <span>{key}: </span><Field name={`contacts.${key}`} placeholder={key} component={Input}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className={style.saveButton}>
                                <button type='submit'>Save</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangeProfileInfo;