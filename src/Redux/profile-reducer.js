import {usersAPI} from '../api/api';

const UPDATE_TEXT_FOR_NEW_POST = 'UPDATE-TEXT-FOR-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    posts: [
        {message: '1'},
        {message: '2'},
        {message: '3'},
    ], 
    textNewPost: '',
    profile: undefined
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
            }
        }    
        default: 
            return state;
    }
}

export const updateTextForNewPost = (text) => ({type: UPDATE_TEXT_FOR_NEW_POST, text});
export const addPost = () => ({type: ADD_POST});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(profile => {
            dispatch(setProfile(profile));
        });
}


export default profileReducer;