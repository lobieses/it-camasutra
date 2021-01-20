import React from 'react';
import style from './MessageElem.module.css';

const MessageElem = (props) => {
    return (
        <div className={style.chat}>
            <div className={style.blockInfo}>
                <div className={style.avatar}>
                    <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQR1NSz1oP2mOuhy6IWixQJjwpYrYD-HEwA&usqp=CAU"/>
                </div> 
                <div className={style.name}>
                    {props.name}
                </div>      
            </div>
            <div className={style.message}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default MessageElem;