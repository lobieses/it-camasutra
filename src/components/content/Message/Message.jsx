import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat'

class Message extends React.Component {
    render() {
        const messagePage = this.props.store.getState().messagePage;
        return (
            <div className={style.messageBlock}> 
                <div className={style.nameBlock}>
                    Dialogs                            
                </div>
                <div className={style.dialogs}>
                    <Dialogs 
                        dialogNames={messagePage.dialogNames}
                    /> 
                </div>   
                <div className={style.chat}>
                    <Chat 
                        chatMessages={messagePage.chat}
                        textMessage={messagePage.textNewMessage}
                        dispatch={this.props.dispatch}
                    />
                </div>        
            </div>
        )
    }
}   

export default Message;