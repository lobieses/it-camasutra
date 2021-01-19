import React from 'react';
import MessageElem from './MessageElem/MessageElem'
import style from './Chat.module.css';

class Messages extends React.Component {
    changeMessageText(event) {
        this.props.onChangeMessageText(event.target.value);
    }

    addMessage() {
        this.props.onAddMessage();
    }

    render() {
        const chatMessages = this.props.chatMessages.map(message => {
            return <MessageElem name={message.name} message={message.message}/>
        });
        return (
            <div>
                <div>
                    {chatMessages}
                </div>
                <div className={style.sendBlock}>
                    <textarea placeholder='Enter your message...' value={this.props.textMessage} onChange={this.changeMessageText.bind(this)}></textarea>
                    <button onClick={this.addMessage.bind(this)}>Send</button>
                </div>        
            </div>
        )
    }
}

export default Messages;