import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div className={style.dialogs}>
                <Dialogs
                    toggleStateDialogsMenu={props.toggleStateDialogsMenu}
                    dialogNames={props.messagePage.dialogNames}
                    dialogsMenuIsOpen={props.dialogsMenuIsOpen}
                /> 
            </div>   
            <div className={style.chat}>
                <Chat
                    onAddMessage={props.addMessage}
                    chatMessages={props.messagePage.chat}
                    dialogsMenuIsOpen={props.dialogsMenuIsOpen}
                />
            </div>        
        </div>
    )
}   

export default Message;