import React from 'react';
import Profile from './Profile';
import {
        updateTextForNewPost,
        addPost,
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
            updateTextForNewPost={this.props.updateTextForNewPost}
            addPost={this.props.addPost}
            profile={this.props.profile}
            status={this.props.status}
            textNewPost={this.props.textNewPost}
            posts={this.props.posts}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        textNewPost: state.profilePage.textNewPost,
        posts: state.profilePage.posts

    }
}

export default compose(
    connect(mapStateToProps, {updateTextForNewPost, addPost, getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)







