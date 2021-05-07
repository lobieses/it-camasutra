import React from 'react';
import style from './MessageElem.module.css';
import defaultPhoto from '../../../../../assets/images/defaultPhoto.jpg';

const MessageElem = (props) => {
    return (
        <div className={style.messageElem}>
            <div className={style.blockInfo}>
                <div className={style.avatar}>
                    <img alt="avatar" src={defaultPhoto}/>
                </div> 
                <div className={style.name}>
                    {props.name}
                </div>      
            </div>
            <div className={style.message}>
                <span>{props.message}</span>
            </div>
        </div>
    )
}

export default MessageElem;