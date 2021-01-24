import Message from './Message';
import {updateTextForNewMessageActionCreator, addMessageActionCreator} from './../../../Redux/message-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessageText: (text) => {
            dispatch(updateTextForNewMessageActionCreator(text)); 
        },
        onAddMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;