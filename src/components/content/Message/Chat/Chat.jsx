import React from 'react';
import MessageElem from './MessageElem/MessageElem'
import style from './Chat.module.css';

const Messages = (props) => {
    const changeMessageText = (event) => {
        props.onChangeMessageText(event.target.value);
    }

    const addMessage = () => {
        props.onAddMessage();
    }

    const chatMessages = props.chatMessages.map(message => {
        return <MessageElem name={message.name} message={message.message}/>
    });

    return (
        <div>
            <div>
                {chatMessages}
            </div>
            <div className={style.sendBlock}>
                <textarea placeholder='Enter your message...' value={props.textMessage} onChange={changeMessageText}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>        
        </div>
    )
}

export default Messages;