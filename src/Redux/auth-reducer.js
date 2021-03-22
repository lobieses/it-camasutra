import {authMe} from '../api/api';
import {stopSubmit} from "redux-form";

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
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USERS_DATA, data: {userId, email, login, isAuth}});
export const getAuthUserData = () => async dispatch => {
    let response = await authMe.me();
    if(response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async dispatch => {
      let response = await authMe.login(email, password, rememberMe, true);
      if(response.resultCode === 0) {
          dispatch(getAuthUserData());
      } else {
          const message = response.messages.length > 0 ? response.messages[0] : 'some error';
          dispatch(stopSubmit('login', {_error: message}));
      }
}
export const logout = () => async dispatch => {
    let response = await authMe.logout();
    if(response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;