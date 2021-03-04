import Message from './Message';
import {addMessage} from './../../../Redux/message-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from "redux";

const mapStateToProps = (state) => ({
    messagePage: state.messagePage,
});

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Message);



