import React, {FC} from 'react';
import style from './MessageElem.module.css';
import defaultPhoto from '../../../../../assets/images/defaultPhoto.svg';

type PropsType = {
    name: string,
    message: string
}

const MessageElem: FC<PropsType> = (props) => {
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