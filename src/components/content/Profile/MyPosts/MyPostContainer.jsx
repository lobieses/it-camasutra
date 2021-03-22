import React from 'react';
import MyPost from './MyPosts';
import {connect} from 'react-redux';
import {
    addPost,
} from './../../../../Redux/profile-reducer';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, {addPost})(MyPost)


