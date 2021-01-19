import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat'

class Message extends React.Component {
    render() {
        return (
            <div className={style.messageBlock}> 
                <div className={style.nameBlock}>
                    Dialogs                            
                </div>
                <div className={style.dialogs}>
                    <Dialogs 
                        dialogNames={this.props.messagePage.dialogNames}
                    /> 
                </div>   
                <div className={style.chat}>
                    <Chat 
                        chatMessages={this.props.messagePage.chat}
                        textMessage={this.props.messagePage.textNewMessage}
                        onChangeMessageText={this.props.onChangeMessageText}
                        onAddMessage={this.props.onAddMessage}
                    />
                </div>        
            </div>
        )
    }
}   

export default Message;