import {profileAPI} from '../api/profile-api';
import {ResponseValidatorForUpdateProfileData} from "../utils/validator/validator"
import {profileType, PhotosType} from '../types/types'
import {ThunkAction} from "redux-thunk";
import {GlobalStateType, InferActionsTypes} from "./store";

let initialState = {
    profile: null as profileType | any,
    status: null as null | string,
    isFetching: false
};

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case 'SN/PROFILE-REDUCER/SET_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SN/PROFILE-REDUCER/SET_STATUS': {
            return  {
                ...state,
                status: action.status
            };
        }
        case 'SN/PROFILE-REDUCER/SAVE_PHOTO': {
            return  {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case 'SN/PROFILE-REDUCER/TOGGLE_FETCHING': {
            return  {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: 
            return state;
    }
}

export const actions = {
    setProfile: (profile: profileType) => ({type: 'SN/PROFILE-REDUCER/SET_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE-REDUCER/SET_STATUS', status} as const),
    saveLargeAndSmallPhotos: (photos: PhotosType) => ({type: 'SN/PROFILE-REDUCER/SAVE_PHOTO', photos} as const),
    toggleFetching: (isFetching: boolean) => ({type: 'SN/PROFILE-REDUCER/TOGGLE_FETCHING', isFetching} as const)
}

type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionsTypes>

export const getUserData = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFetching(true));
        await Promise.all([dispatch(getUserProfile(userId)), dispatch(getStatus(userId))])
        dispatch(actions.toggleFetching(false));
    }
}

export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let profile = await profileAPI.getUserProfile(userId);
        dispatch(actions.setProfile(profile));
    }
}

export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId);
        dispatch(actions.setStatus(status));
    }
}

export const updateUserData = (status: string, obj: profileType): ThunkType => {
    return async (dispatch) => {
        await Promise.all([dispatch(updateStatus(status)), dispatch(updateProfileData(obj))]);
    }
}

export const updateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if(response.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    }
}

export const updateProfileData = (obj: profileType): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfileData(obj);
        if(response.resultCode !== 0) {
            let objForStopSubmit = ResponseValidatorForUpdateProfileData(response.messages);
            dispatch(actions.toggleFetching(false));
            return Promise.reject(objForStopSubmit);
        }
    }
}

export const updatePhoto = (file: any): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFetching(true));
        let response = await profileAPI.updatePhoto(file);
        if(response.resultCode === 0) {
            dispatch(actions.saveLargeAndSmallPhotos(response.data.photos));
        }
        dispatch(actions.toggleFetching(false));
    }
}

export default profileReducer;