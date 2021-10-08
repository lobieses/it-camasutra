import Message from './Message';
import {addMessage, initialStateType} from '../../../Redux/message-reducer';
import {connect} from 'react-redux';
import {compose} from "redux";
import React from "react";
import {GlobalStateType} from "../../../Redux/store";

type StateType = {
    dialogsMenuIsOpen: boolean
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class MessageContainer extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
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

type MapStateToPropsType = {
    messagePage: initialStateType
}

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void
}

const mapStateToProps = (state: GlobalStateType) => ({
    messagePage: state.messagePage,
});

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, GlobalStateType>(
        mapStateToProps, {addMessage}),
)(MessageContainer);



