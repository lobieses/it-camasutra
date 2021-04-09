import {profileAPI} from '../api/api';
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'GET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState = {
    posts: [
        {message: '1'},
        {message: '2'},
        {message: '3'},
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {message: action.postText}],
            };
        }    
        case SET_PROFILE: {
            return {
                ...state, 
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return  {
                ...state,
                status: action.status
            };
        }
        case SAVE_PHOTO: {
            return  {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: 
            return state;
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
const saveLargeAndSmallPhotos = (photos) => ({type: SAVE_PHOTO, photos})

export const getUserProfile = userId => async dispatch => {
    let profile = await profileAPI.getUserProfile(userId);
    dispatch(setProfile(profile));
}

export const getStatus = userId => async dispatch => {
    let status = await profileAPI.getStatus(userId);
    dispatch(setStatus(status));
}

export const updateStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if(response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updatePhoto = file => async dispatch => {
    let response = await profileAPI.updatePhoto(file);
    if(response.resultCode === 0) {
        dispatch(saveLargeAndSmallPhotos(response.data.photos));
    }
}

export const updateProfileData = obj => async dispatch => {
    let response = await profileAPI.updateProfileData(obj);
    if(response.resultCode !== 0) {
        dispatch(stopSubmit('editProfile', {_error: response.messages}));
        return Promise.reject();
    }
}

export default profileReducer;