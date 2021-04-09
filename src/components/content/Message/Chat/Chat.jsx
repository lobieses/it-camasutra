import React from 'react';
import MessageElem from './MessageElem/MessageElem'
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../../common/FormControls/FormControls";
import {required, maxLength} from "../../../../utils/validator/validator";
import style from './Chat.module.css';

const maxLengthForValidator = maxLength(5);

const SendChatForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField(Textarea, 'chatText', [required, maxLengthForValidator], {placeholder: 'Enter your message...'})}
            <button>Send</button>
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
        <div>
            <div>
                {chatMessages}
            </div>
            <div className={style.sendBlock}>
                <SendChatReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Messages;