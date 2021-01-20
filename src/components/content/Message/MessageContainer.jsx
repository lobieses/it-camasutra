import React from 'react';
import Message from './Message';
import {updateTextForNewMessageActionCreator, addMessageActionCreator} from './../../../Redux/message-reducer';
import StoreContext from '../../../storeContext';

const MessageContainer = () => {
    return (
       <StoreContext.Consumer>
            { 
                store => {
                    const onChangeMessageText = (text) => {
                        store.dispatch(updateTextForNewMessageActionCreator(text));   
                    }

                    const onAddMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    return <Message 
                        messagePage={store.getState().messagePage}
                        onChangeMessageText={onChangeMessageText}
                        onAddMessage={onAddMessage}
                    />    
                }
            }
        </StoreContext.Consumer> 
    )
    

}   

export default MessageContainer;