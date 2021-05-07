import React from 'react';
import MessageElem from './MessageElem/MessageElem'
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../../common/FormControls/FormControls";
import {required, maxLength} from "../../../../utils/validator/validator";
import style from './Chat.module.css';

const maxLengthForValidator = maxLength(100);

const SendChatForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField(Textarea, 'chatText', [required, maxLengthForValidator], {placeholder: 'Enter your message...'})}
            <div className={style.sendButton}>
                <button>Send</button>
            </div>
        </form>
    )
}

const SendChatReduxForm = reduxForm({form: 'message'})(SendChatForm);

const Messages = (props) => {
    const onSubmit = (formData) => {
        props.onAddMessage(formData.chatText);
    }

    const chatMessages = props.chatMessages.map(message => {
        return <MessageElem name={message.name} message={message.message}/>
    });

    return (
        <div className={props.dialogsMenuIsOpen ? style.menuOpen : ''}>
            <div className={style.messageField}>
                {chatMessages}
            </div>
            <div className={style.sendBlock}>
                <SendChatReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Messages;