import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';

class Message extends React.Component {
    render() {
        return (
            <div className={style.messageBlock}> 
                <div className={style.nameBlock}>
                    Dialogs                            
                </div>
                <div className={style.dialogs}>
                   <Dialogs /> 
                </div>   
                <div className={style.chat}>
                   <Chat /> 
                </div>
                
            </div>
        )
    }
}   

export default Message;