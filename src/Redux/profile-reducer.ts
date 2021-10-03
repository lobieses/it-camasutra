import {profileAPI} from '../api/api'
import {ResponseValidatorForUpdateProfileData} from "../utils/validator/validator"
import {profileType} from '../types/types'

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

const profileReducer = (state = initialState, action: any): initialStateType => {
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

export const getUserData = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFetching(true));
    await Promise.all([dispatch(getUserProfile(userId)), dispatch(getStatus(userId))])
    dispatch(toggleFetching(false));
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let profile = await profileAPI.getUserProfile(userId);
    dispatch(setProfile(profile));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let status = await profileAPI.getStatus(userId);
    dispatch(setStatus(status));
}

export const updateUserData = (status: string, obj: any) => async (dispatch: any) => {
   // dispatch(toggleFetching(true));
    await Promise.all([dispatch(updateStatus(status)), dispatch(updateProfileData(obj))]);
   // dispatch(toggleFetching(false));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if(response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updateProfileData = (obj: any) => async (dispatch: any) => {
    let response = await profileAPI.updateProfileData(obj);
    if(response.resultCode !== 0) {
        let objForStopSubmit = ResponseValidatorForUpdateProfileData(response.messages);
        dispatch(toggleFetching(false));
        return Promise.reject(objForStopSubmit);
    }
}

export const updatePhoto = (file: any) => async (dispatch: any) => {
    dispatch(toggleFetching(true));
    let response = await profileAPI.updatePhoto(file);
    if(response.resultCode === 0) {
        dispatch(saveLargeAndSmallPhotos(response.data.photos));
    }
    dispatch(toggleFetching(false));
}

export default profileReducer;