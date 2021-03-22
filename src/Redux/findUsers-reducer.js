import {usersAPI} from '../api/api';
import {updateObjInArray} from "../utils/obj-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_COUNTS = 'SET_TOTAL_COUNTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalCounts: 0,
    focusPage: 1,
    isFetching: false,
    followingInProgressUsers: [],
};

const findUsersReducer = (state = initialState, action) => {
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

export const setUsers = (users) => ({type: SET_USERS, users});
export const followSucces = (id) => ({type: FOLLOW, id});
export const unFollowSucces = (id) => ({type: UNFOLLOW, id});
export const setPage = (page) => ({type: SET_PAGE, page});
export const setTotalCounts = (totalCounts) => ({type: SET_TOTAL_COUNTS, totalCounts});
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (id, isFetching) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, id, isFetching});

export const requestUsers = (pageSize, currentPage = 1) => async dispatch => {
    dispatch(toggleFetching(true));
    let data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCounts(data.totalCount));
    dispatch(setPage(currentPage));
}

const followUnFollowFlow = async (dispatch, id, APIRequest, actionCreator) => {
    dispatch(toggleFollowingInProgress(id, true));
    let data = await APIRequest(id);
    if(data.resultCode === 0) {
        dispatch(toggleFollowingInProgress(id, false));
        dispatch(actionCreator(id));
    }
}

export const follow = id => async dispatch => {
    dispatch(toggleFollowingInProgress(id, true));
    followUnFollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSucces);
}

export const unFollow = (id) => async dispatch => {
    dispatch(toggleFollowingInProgress(id, true));
    followUnFollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unFollowSucces);
}

export default findUsersReducer;