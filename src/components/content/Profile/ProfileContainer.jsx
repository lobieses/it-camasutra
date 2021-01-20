import React from 'react';
import Profile from './Profile';
import {updateTextForNewPostActionCreator, addPostActionCreator} from './../../../Redux/profile-reducer';
import StoreContext from '../../../storeContext';


const ProfileContainer = () => {
    return (
        <StoreContext.Consumer>
            { 
                store => {
                    const onChangePostText = (text) => {
                        store.dispatch(updateTextForNewPostActionCreator(text));
                    }

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    return <Profile 
                        onChangePostText={onChangePostText}
                        addPost={addPost}
                        textNewPost={store.getState().profilePage.textNewPost}
                        posts={store.getState().profilePage.posts}
                    />
                }          
            }
        </StoreContext.Consumer>
    )  
}   

export default ProfileContainer;