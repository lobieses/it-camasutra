import {profileAPI, usersAPI} from '../api/api';

const UPDATE_TEXT_FOR_NEW_POST = 'UPDATE_TEXT_FOR_NEW_POST';
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'GET_STATUS';

let initialState = {
    posts: [
        {message: '1'},
        {message: '2'},
        {message: '3'},
    ], 
    textNewPost: '',
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case UPDATE_TEXT_FOR_NEW_POST: {
            return {
                ...state,
                textNewPost: action.text
            };
        }           
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {message: state.textNewPost}],
                textNewPost: ''
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

export const updateTextForNewPost = (text) => ({type: UPDATE_TEXT_FOR_NEW_POST, text});
export const addPost = () => ({type: ADD_POST});
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
            debugger
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