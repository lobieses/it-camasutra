import React from 'react';
import Profile from './Profile';
import {
        getUserData,
        updateUserData,
        updatePhoto,
    } from '../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Preloader from '../../common/Preloader/preloader';

class ProfileContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            editMode: false
        };
    }

    onChangeEditMode(toggle) {
        this.setState({
            editMode: toggle
        });
    }

    refreshProfile() {
        let id = this.props.match.params.userId;
        if(!this.props.match.params.userId) id = this.props.authorizedUserId;
        this.props.getUserData(id);
    }

    onSubmitChangeProfileInfo({status='', ...data}, {setStatus}) {
         this.props.updateUserData(status, data)
            .then(() => {
                this.refreshProfile();
                this.onChangeEditMode(false);
            })
            .catch((obj) => {
                setStatus(obj);
            })
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        if(this.props.isFetching || !this.props.profile) {
            return  <Preloader />
        } else {
            return <Profile
                onUpdatePhoto={this.props.updatePhoto}
                onUpdateProfileData={this.props.updateUserData}
                onRefreshProfile={this.refreshProfile.bind(this)}
                onChangeEditMode={this.onChangeEditMode.bind(this)}

                onSubmit={this.onSubmitChangeProfileInfo.bind(this)}

                editMode={this.state.editMode}
                isOwner={!this.props.match.params.userId}
                isFetching={this.props.isFetching}
                profile={this.props.profile}
                status={this.props.status}
            />
        }

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching,
        authorizedUserId: state.auth.userId,
    }
}

export default compose(
    connect(mapStateToProps, {updateUserData, updatePhoto ,getUserData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)