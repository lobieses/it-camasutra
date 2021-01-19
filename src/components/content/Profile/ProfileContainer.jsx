import React from 'react';
import Profile from './Profile';
import {updateTextForNewPostActionCreator, addPostActionCreator} from './../../../Redux/profile-reducer';

class ProfileContainer extends React.Component {
    onChangePostText(text) {
        this.props.dispatch(updateTextForNewPostActionCreator(text));
    }

    addPost() {
        this.props.dispatch(addPostActionCreator());
    }

    render() {
        return (
            <Profile 
                onChangePostText={this.onChangePostText.bind(this)}
                addPost={this.addPost.bind(this)}
                textNewPost={this.props.store.getState().profilePage.textNewPost}
                posts={this.props.store.getState().profilePage.posts}
            />
        )
    }
}   

export default ProfileContainer;