import React from 'react';
import MessageElem from './MessageElem/MessageElem'

import {Formik, Field, Form} from 'formik';
import {Textarea} from "../../../common/FormControls/FormControls";
import {ValidateList, required, maxLength} from "../../../../utils/validator/validator";

import style from './Chat.module.css';

const maxLengthForValidator = maxLength(30);
const ValidateListForForm = ValidateList([maxLengthForValidator, required]);

const SendChatForm = (props) => {
    return (
        <Formik
            initialValues={{chatText: ''}}
            validate={ValidateListForForm}
            onSubmit={props.onSubmit}
        >
            {({
                handleSubmit,
            }) => (
                <Form onSubmit={handleSubmit}>
                    <Field name="chatText" placeholder="Send your message..." component={Textarea}/>
                    <div className={style.sendButton}>
                        <button type="submit" >
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

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
                <SendChatForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Messages;