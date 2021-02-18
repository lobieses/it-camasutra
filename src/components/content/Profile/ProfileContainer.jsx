import React from 'react';
import Profile from './Profile';
import {
        updateTextForNewPost,
        addPost,
        getUserProfile
    } from './../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId;
        if(!this.props.match.params.userId) id = 2;
        this.props.getUserProfile(id);
    }
    render() {
        return <Profile
            updateTextForNewPost={this.props.updateTextForNewPost}
            addPost={this.props.addPost}
            textNewPost={this.props.textNewPost}
            posts={this.props.posts}
            profile={this.props.profile}
        />
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        textNewPost: state.profilePage.textNewPost,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {updateTextForNewPost, addPost, getUserProfile})(WithUrlDataContainerComponent)

