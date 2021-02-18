import {authMe} from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USERS_DATA, data: {userId, email, login}});
export const getAuthUserData = () => (dispatch) => {
    authMe.me()
        .then(response => {
            if(response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setUserData(id, email, login));
            }
        });
}



export default authReducer;