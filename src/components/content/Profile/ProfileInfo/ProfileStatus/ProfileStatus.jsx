import React from 'react';

class ProfileStatus extends React.Component  {
    state = {
        status: this.props.status,
        editMode: false
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    changeStatus = (event) => {
        this.setState({
           status: event.target.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                ? <div onDoubleClick={this.activateEditMode}>{this.state.status ? this.state.status : '-----'}</div>
                : <input
                        type="text"
                        autoFocus={true}
                        value={this.state.status}
                        onChange={this.changeStatus.bind(this)}
                        onBlur={this.deActivateEditMode}/>
                }
            </div>
        )
    }

}

export default ProfileStatus;