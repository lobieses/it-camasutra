import React from 'react';
import Profile from './Profile';
import {
        getUserProfile,
        getStatus,
        updateStatus
    } from './../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import  {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId;
        if(!this.props.match.params.userId) id = 14774;
        this.props.getUserProfile(id);
        this.props.getStatus(id);
    }
    render() {
        return <Profile
            updateStatus={this.props.updateStatus}
            profile={this.props.profile}
            status={this.props.status}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)