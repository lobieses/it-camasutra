import React from 'react';
import Profile from './Profile';
import {
        getUserProfile,
        getStatus,
        updateStatus,
        updatePhoto,
        updateProfileData
    } from './../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import  {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let id = this.props.match.params.userId;
        if(!this.props.match.params.userId) id = this.props.authorizedUserId;
        this.props.getUserProfile(id);
        this.props.getStatus(id);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile
            onUpdatePhoto={this.props.updatePhoto}
            onUpdateStatus={this.props.updateStatus}
            onUpdateProfileData={this.props.updateProfileData}
            onRefreshProfile={this.refreshProfile.bind(this)}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updatePhoto, updateProfileData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)