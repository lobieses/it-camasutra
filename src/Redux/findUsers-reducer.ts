import {usersAPI} from '../api/api';
import {updateObjInArray} from "../utils/obj-helper";
import {userType} from '../types/types';

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

const findUsersReducer = (state = initialState, action: any): initialStateType => {
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
type setUsersType = {
    type: typeof  SET_USERS,
    users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersType => ({type: SET_USERS, users});
type followSuccesType = {
    type: typeof FOLLOW,
    id: number
}
export const followSucces = (id: number): followSuccesType => ({type: FOLLOW, id});
type unFollowSuccesType = {
    type: typeof UNFOLLOW,
    id: number
}
export const unFollowSucces = (id: number): unFollowSuccesType => ({type: UNFOLLOW, id});
type setPageType = {
    type: typeof SET_PAGE,
    page: number
}
export const setPage = (page: number): setPageType => ({type: SET_PAGE, page});
type setTotalCountsType = {
    type: typeof SET_TOTAL_COUNTS,
    totalCounts: number
}
export const setTotalCounts = (totalCounts: number): setTotalCountsType => ({type: SET_TOTAL_COUNTS, totalCounts});
type toggleFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleFetching = (isFetching: boolean): toggleFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
type toggleFollowingInProgressType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
    id: number,
    isFetching: boolean
}
export const toggleFollowingInProgress = (id: number, isFetching: boolean): toggleFollowingInProgressType => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, id, isFetching});

export const requestUsers = (pageSize: number, currentPage: number = 1) => async (dispatch: any) => {
    dispatch(toggleFetching(true));
    let data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCounts(data.totalCount));
    dispatch(setPage(currentPage));
}

const followUnFollowFlow = async (dispatch: any, id: number, APIRequest: any, actionCreator: any) => {
    debugger
    dispatch(toggleFollowingInProgress(id, true));
    let data = await APIRequest(id);
    if(data.resultCode === 0) {
        dispatch(toggleFollowingInProgress(id, false));
        dispatch(actionCreator(id));
    }
}

export const follow = (id: number) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(id, true));
    followUnFollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSucces);
}

export const unFollow = (id: number) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(id, true));
    followUnFollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unFollowSucces);
}

export default findUsersReducer;