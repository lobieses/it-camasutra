import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';

const Message = (props) => {
    return (
        <div className={style.messageBlock}> 
            <div className={style.nameBlock}>
                Dialogs                            
            </div>
            <div className={style.dialogs}>
                <Dialogs 
                    dialogNames={props.messagePage.dialogNames}
                /> 
            </div>   
            <div className={style.chat}>
                <Chat
                    onAddMessage={props.addMessage}
                    chatMessages={props.messagePage.chat}
                />
            </div>        
        </div>
    )
}   

export default Message;