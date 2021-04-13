import {authMe, security} from '../api/api';
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.url
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USERS_DATA, data: {userId, email, login, isAuth}});
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url});

export const getAuthUserData = () => async dispatch => {
    const response = await authMe.me();
    if(response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async dispatch => {
      const response = await authMe.login(email, password, rememberMe, captcha);
      if(response.resultCode === 0) {
          dispatch(getAuthUserData());
          dispatch(setCaptchaUrl(null));
      } else {
          if(response.resultCode === 10) dispatch(getCaptchaUrl());
          const message = response.messages.length > 0 ? response.messages[0] : 'some error';
          dispatch(stopSubmit('login', {_error: message}));
      }
}
export const logout = () => async dispatch => {
    const response = await authMe.logout();
    if(response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async dispatch => {
    const response = await security.getCaptchaUrl();
    dispatch(setCaptchaUrl(response.url));
}

export default authReducer;