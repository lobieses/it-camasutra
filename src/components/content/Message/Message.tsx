import React, {FC} from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';
import {initialStateType} from "../../../Redux/message-reducer";

type PropsType = {
    messagePage: initialStateType,
    dialogsMenuIsOpen: boolean,
    addMessage: (messageText: string) => void,
    toggleStateDialogsMenu: () => void
}

const Message: FC<PropsType> = (props) => {
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