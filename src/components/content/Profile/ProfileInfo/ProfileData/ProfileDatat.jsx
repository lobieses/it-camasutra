import React from 'react';

const ProfileData = ({onChangeEditMode, profile, isOwner}) => {
    return (
        <div>
            {isOwner 
                ? <button onClick={onChangeEditMode}>change data</button>
                : null
            }
            <div>
            </div>
            <div>
                <b>about me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>looking for a job description: </b>{profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}: </b>{contactValue}
        </div>
    )
}


export default ProfileData;