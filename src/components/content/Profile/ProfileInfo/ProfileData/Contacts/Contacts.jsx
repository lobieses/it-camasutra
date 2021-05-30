import React from 'react';
import style from './Contact.module.css';

import facebook from '../../../../../../assets/images/facebook.svg';
import github from '../../../../../../assets/images/github.svg';
import instagram from '../../../../../../assets/images/instagram.svg';
import twitter from '../../../../../../assets/images/twitter.svg';
import vk from '../../../../../../assets/images/vk.svg';
import website from '../../../../../../assets/images/website.svg'
import youtube from '../../../../../../assets/images/youtube.svg'
import mainLink from '../../../../../../assets/images/mainLink.svg'


const Contacts = ({contacts}) => {

    const socialNetworks = {
        facebook,
        github,
        instagram,
        twitter,
        vk,
        website,
        youtube,
        mainLink
    };


    const contactsField = Object.keys(contacts).map(key => {
        if(contacts[key] !== null && contacts[key] !== '') {
            return (
                <div className={style.contactElem} key={key}>
                    <a href={contacts[key]} target='_blank'>
                        <img src={socialNetworks[key]} alt={key} key={key}/>
                    </a>
                </div>
            )
        }
    }); 

    return (
        <div className={style.contacts}>
            {contactsField}
        </div>
    )
}

//<b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
//    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
export default Contacts;