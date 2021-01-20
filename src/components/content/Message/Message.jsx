import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat'

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
                    chatMessages={props.messagePage.chat}
                    textMessage={props.messagePage.textNewMessage}
                    onChangeMessageText={props.onChangeMessageText}
                    onAddMessage={props.onAddMessage}
                />
            </div>        
        </div>
    )
}   

export default Message;