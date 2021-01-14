import React from 'react';
import style from './Message.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';

class Message extends React.Component {
    render() {
        const chatMessages = this.props.state.chat.map(message => {
            return <Chat name={message.name} message={message.message}/>
        });
        return (
            <div className={style.messageBlock}> 
                <div className={style.nameBlock}>
                    Dialogs                            
                </div>
                <div className={style.dialogs}>
                   <Dialogs 
                        dialogNames={this.props.state.dialogNames}
                   /> 
                </div>   
                <div className={style.chat}>
                    {chatMessages}
                </div>
                
            </div>
        )
    }
}   

export default Message;