import {profileAPI} from '../api/api';
import {stopSubmit} from "redux-form";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'GET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let initialState = {
    profile: null,
    status: null,
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case TOGGLE_FETCHING: {
            return  {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: 
            return state;
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const saveLargeAndSmallPhotos = (photos) => ({type: SAVE_PHOTO, photos});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

export const getUserData = userId => async dispatch => {
    dispatch(toggleFetching(true));
    await Promise.all([dispatch(getUserProfile(userId)), dispatch(getStatus(userId))]);
    dispatch(toggleFetching(false));
}

export const getUserProfile = userId => async dispatch => {
    let profile = await profileAPI.getUserProfile(userId);
    dispatch(setProfile(profile));
}

export const getStatus = userId => async dispatch => {
    let status = await profileAPI.getStatus(userId);
    dispatch(setStatus(status));
}

export const updateUserData = (status, obj) => async dispatch => {

    dispatch(toggleFetching(true));
    await Promise.all([dispatch(updateStatus(status)), dispatch(updateProfileData(obj))]);
    dispatch(toggleFetching(false));
}

export const updateStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if(response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updateProfileData = obj => async dispatch => {
    let response = await profileAPI.updateProfileData(obj);
    if(response.resultCode !== 0) {
        let objForStopSubmit = {};

        const regular = new RegExp(/^(.+)\(Contacts->(.+)\)/g);
        for(let error of response.messages) {
            error.replace(regular, (found, errorText, nameField) => {
                objForStopSubmit[nameField.toLowerCase()] = errorText;
            });
        }

        dispatch(stopSubmit('editProfile', {'contacts': objForStopSubmit}));
        return Promise.reject();
    }
}

export const updatePhoto = file => async dispatch => {
    dispatch(toggleFetching(true));
    let response = await profileAPI.updatePhoto(file);
    if(response.resultCode === 0) {
        dispatch(saveLargeAndSmallPhotos(response.data.photos));
    }
    dispatch(toggleFetching(false));
}

export default profileReducer;