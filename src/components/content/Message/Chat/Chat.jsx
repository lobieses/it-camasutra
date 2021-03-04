import React from 'react';
import MessageElem from './MessageElem/MessageElem'
import style from './Chat.module.css';
import {Field, reduxForm} from "redux-form";
import {required, maxLength} from "../../../../utils/validator/validator";
import {Textarea} from "../../../common/FormControls/FormControls";

const maxLengthForValidator = maxLength(5);

const SendChatForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter your message...'
                   component={Textarea}
                   name='chatText'
                   validate={[required, maxLengthForValidator]}
            />
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