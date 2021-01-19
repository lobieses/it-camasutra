import React from 'react';
import Message from './Message';
import {updateTextForNewMessageActionCreator, addMessageActionCreator} from './../../../Redux/message-reducer';

class MessageContainer extends React.Component {
    onChangeMessageText(text) {
        this.props.store.dispatch(updateTextForNewMessageActionCreator(text));   
    }

    onAddMessage() {
        this.props.dispatch(addMessageActionCreator());
    }

    render() {
        return <Message 
            messagePage={this.props.store.getState().messagePage}
            onChangeMessageText={this.onChangeMessageText.bind(this)}
            onAddMessage={this.onAddMessage.bind(this)}
        />
    }
}   

export default MessageContainer;