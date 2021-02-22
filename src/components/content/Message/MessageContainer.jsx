import Message from './Message';
import {updateTextForNewMessageActionCreator, addMessageActionCreator} from './../../../Redux/message-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from "redux";

const mapStateToProps = (state) => ({
    messagePage: state.messagePage,
});

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message);



