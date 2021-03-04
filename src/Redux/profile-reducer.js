import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'GET_STATUS';

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
        default: 
            return state;
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(profile => {
            dispatch(setProfile(profile));
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(status => {
            dispatch(setStatus(status));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;