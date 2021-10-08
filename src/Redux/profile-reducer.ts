import {profileAPI} from '../api/api'
import {ResponseValidatorForUpdateProfileData} from "../utils/validator/validator"
import {profileType} from '../types/types'
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "./store";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'GET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let initialState = {
    profile: null as profileType | any,
    status: null as null | string,
    isFetching: false
};

type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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

type ActionsTypes = setProfileType | setStatusType | saveLargeAndSmallPhotosType | toggleFetching

type setProfileType = {
    type: typeof SET_PROFILE,
    profile: profileType
}
export const setProfile = (profile: profileType): setProfileType => ({type: SET_PROFILE, profile})
type setStatusType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})
type photosType = {
    large: string,
    small: string
}
type saveLargeAndSmallPhotosType = {
    type: typeof SAVE_PHOTO,
    photos: photosType
}
export const saveLargeAndSmallPhotos = (photos: photosType): saveLargeAndSmallPhotosType => ({type: SAVE_PHOTO, photos})
type toggleFetching = {
    type: typeof TOGGLE_FETCHING,
    isFetching: boolean
}
export const toggleFetching = (isFetching: boolean): toggleFetching => ({type: TOGGLE_FETCHING, isFetching})

type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionsTypes>

export const getUserData = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        await Promise.all([dispatch(getUserProfile(userId)), dispatch(getStatus(userId))])
        dispatch(toggleFetching(false));
    }
}

export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let profile = await profileAPI.getUserProfile(userId);
        dispatch(setProfile(profile));
    }
}

export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId);
        dispatch(setStatus(status));
    }
}

type UserDataType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        github: string,
        instagram: string,
        mainLink: string,
        twitter: string,
        vk: string,
        website: string,
        youtube: string
    }
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    photos: photosType,
    userId: number
}

export const updateUserData = (status: string, obj: UserDataType): ThunkType => {
    debugger
    return async (dispatch) => {
        // dispatch(toggleFetching(true));
        await Promise.all([dispatch(updateStatus(status)), dispatch(updateProfileData(obj))]);
        // dispatch(toggleFetching(false));
    }
}

export const updateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if(response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const updateProfileData = (obj: UserDataType): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfileData(obj);
        if(response.resultCode !== 0) {
            let objForStopSubmit = ResponseValidatorForUpdateProfileData(response.messages);
            dispatch(toggleFetching(false));
            return Promise.reject(objForStopSubmit);
        }
    }
}

export const updatePhoto = (file: any): ThunkType => {
    debugger
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        let response = await profileAPI.updatePhoto(file);
        if(response.resultCode === 0) {
            dispatch(saveLargeAndSmallPhotos(response.data.photos));
        }
        dispatch(toggleFetching(false));
    }
}

export default profileReducer;