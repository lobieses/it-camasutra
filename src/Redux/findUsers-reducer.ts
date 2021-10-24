import {usersAPI} from '../api/users-api';
import {updateObjInArray} from "../utils/obj-helper";
import {userType} from '../types/types';
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType, InferActionsTypes} from "./store";
import {toggleFetching} from "./profile-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_COUNTS = 'SET_TOTAL_COUNTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [] as Array<userType>,
    pageSize: 3,
    totalCounts: 0,
    focusPage: 1,
    isFetching: false,
    followingInProgressUsers: [] as Array<number>,
};

type initialStateType = typeof initialState;

const findUsersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case SET_USERS: {
            return {...state, users: [...action.users]}      
        } 
        case SET_PAGE: {
            return {
                ...state,
                focusPage: action.page
            }
        }   
        case SET_TOTAL_COUNTS: {
            return {
                ...state,
                totalCounts: action.totalCounts
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: updateObjInArray(state.users, action.id, 'id', {followed: true})
            };
        }           
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjInArray(state.users, action.id, 'id', {followed: false})
            }
        } 
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return  {
                ...state,
                followingInProgressUsers: action.isFetching
                ? [...state.followingInProgressUsers, action.id]
                : state.followingInProgressUsers.filter(id => id !== action.id)
            }
        }
        default: 
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    setUsers: (users: Array<userType>) => ({type: SET_USERS, users} as const),
    followSucces: (id: number) => ({type: FOLLOW, id} as const),
    unFollowSucces: (id: number) => ({type: UNFOLLOW, id} as const),
    setPage: (page: number) => ({type: SET_PAGE, page} as const),
    setTotalCounts: (totalCounts: number) => ({type: SET_TOTAL_COUNTS, totalCounts} as const),
    toggleFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
    toggleFollowingInProgress: (id: number, isFetching: boolean) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, id, isFetching} as const)
}


type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionsTypes>

export const requestUsers = (pageSize: number, currentPage: number = 1): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFetching(true));
        let data = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(actions.toggleFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalCounts(data.totalCount));
        dispatch(actions.setPage(currentPage));
    }
}

const followUnFollowFlow = async (dispatch: DispatchType, id: number, APIRequest: any, actionCreator: (id: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(id, true));
    let data = await APIRequest(id);
    if(data.resultCode === 0) {
        dispatch(actions.toggleFollowingInProgress(id, false));
        dispatch(actionCreator(id));
    }
}

export const follow = (id: number): ThunkType => {
     return async (dispatch) => {
        dispatch(actions.toggleFollowingInProgress(id, true));
        followUnFollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), actions.followSucces);
    }
}

export const unFollow = (id: number): ThunkType => {
     return async (dispatch) => {
        dispatch(actions.toggleFollowingInProgress(id, true));
        followUnFollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), actions.unFollowSucces);
    }
}

export default findUsersReducer;