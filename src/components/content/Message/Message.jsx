import React from 'react';
import style from './Message.module.css';

class Message extends React.Component {
    render() {
        return (
            <div className={style.messageBlock}> 
                <div className={style.name}>
                    Dialogs
                </div>
                <div className={style.dialogsBlock}>
                    <div className={style.dialogs}>
                        <div>• Сережа</div>
                        <div>• Катя</div>
                        <div>• Света</div>
                    </div>      
                </div>
                <div className={style.messages}>

                </div>
            </div>
        )
    }
}   

export default Message;