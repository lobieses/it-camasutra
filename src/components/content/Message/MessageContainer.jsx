import Message from './Message';
import {addMessage} from '../../../Redux/message-reducer';
import {connect} from 'react-redux';
import {compose} from "redux";
import React from "react";

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dialogsMenuIsOpen: false};
    }

    toggleStateDialogsMenu() {
        this.setState({dialogsMenuIsOpen: !this.state.dialogsMenuIsOpen})
    }

    render() {
        return <Message
            toggleStateDialogsMenu={this.toggleStateDialogsMenu.bind(this)}
            addMessage={this.props.addMessage}
            messagePage={this.props.messagePage}
            dialogsMenuIsOpen={this.state.dialogsMenuIsOpen}
        />
    }
}

const mapStateToProps = (state) => ({
    messagePage: state.messagePage,
});

export default compose(
    connect(mapStateToProps, {addMessage}),
)(MessageContainer);



