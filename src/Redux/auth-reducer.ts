import {ResultCodes} from '../api/api';
import {security} from '../api/security-api';
import {authMe} from "../api/auth-api";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType, InferActionsTypes} from "./store";

let initialState = {
    userId: null as null | number,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case 'SN/AUTH-REDUCER/SET_USERS_DATA': {
            return {
                ...state,
                ...action.data
            }
        }
        case 'SN/AUTH-REDUCER/SET_CAPTCHA_URL': {
            return {
                ...state,
                captchaUrl: action.url
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'SN/AUTH-REDUCER/SET_USERS_DATA', data: {userId, email, login, isAuth}} as const),
    setCaptchaUrl: (url: string | null) => ({type: 'SN/AUTH-REDUCER/SET_CAPTCHA_URL', url} as const)
}

type ThunkType = ThunkAction<Promise<any>, GlobalStateType, unknown, ActionsTypes> // FIX ANY

export const getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        const response = await authMe.me();
        if(response.resultCode === ResultCodes.Success) {
            const {id, email, login} = response.data;
            dispatch(actions.setUserData(id, email, login, true));
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null): ThunkType => {
    return async (dispatch) => {
        const response = await authMe.login(email, password, rememberMe, captcha);
        if(response.resultCode === 0) {
            dispatch(getAuthUserData());
            dispatch(actions.setCaptchaUrl(null));
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
            dispatch(actions.setUserData(null, null, null, false));
        }
    }
}

export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        const response = await security.getCaptchaUrl();
        dispatch(actions.setCaptchaUrl(response.url));
    }
}

export default authReducer;