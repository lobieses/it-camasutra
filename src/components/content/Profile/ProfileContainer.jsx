import React from 'react';
import Profile from './Profile';
import {
        updateTextForNewPost,
        addPost,
        setProfile
    } from './../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId;
        if(!this.props.match.params.userId) id = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(responce => {
                this.props.setProfile(responce.data);
            });
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

export default connect(mapStateToProps, {updateTextForNewPost, addPost, setProfile})(WithUrlDataContainerComponent)

