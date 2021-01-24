import Profile from './Profile';
import {updateTextForNewPostActionCreator, addPostActionCreator} from './../../../Redux/profile-reducer';
import {connect} from 'react-redux';

 

const mapStateToProps = (state) => {
    return {
        textNewPost: state.profilePage.textNewPost,
        posts: state.profilePage.posts
    }
}

const mapDisptatchToProps = (dispatch) => {
    return {
        onChangePostText: (text) => {
            dispatch(updateTextForNewPostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDisptatchToProps)(Profile)

export default ProfileContainer;