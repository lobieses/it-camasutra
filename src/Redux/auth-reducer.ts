import {ResultCodes} from '../api/api';
import {security} from '../api/security-api';
import {authMe} from "../api/auth-api";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "./store";


const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null as null | number,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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

type ActionsTypes = setUserDateType | setCaptchaUrlType

type setUserDateType = {
    type: typeof  SET_USERS_DATA,
    data: {
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDateType => ({type: SET_USERS_DATA, data: {userId, email, login, isAuth}});

type setCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL,
    url: string | null,
}
export const setCaptchaUrl = (url: string | null): setCaptchaUrlType => ({type: SET_CAPTCHA_URL, url});

type ThunkType = ThunkAction<Promise<any>, GlobalStateType, unknown, ActionsTypes> // FIX ANY

export const getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        const response = await authMe.me();
        if(response.resultCode === ResultCodes.Success) {
            const {id, email, login} = response.data;
            dispatch(setUserData(id, email, login, true));
        }
    }
}



export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null): ThunkType => {
    return async (dispatch) => {
        const response = await authMe.login(email, password, rememberMe, captcha);
        if(response.resultCode === 0) {
            dispatch(getAuthUserData());
            dispatch(setCaptchaUrl(null));
        } else {
            if(response.resultCode === 10) dispatch(getCaptchaUrl());
            return response.messages.length > 0 ? response.messages[0] : 'some error';

        }
    }
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        const response = await authMe.logout();
        if(response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }
}

export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        const response = await security.getCaptchaUrl();
        debugger
        dispatch(setCaptchaUrl(response.url));
    }
}

export default authReducer;