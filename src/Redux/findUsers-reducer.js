import {act} from "@testing-library/react";

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
    followingInProgress: []
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
                users: state.users.map (user => {
                    if(user.id === action.id) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        }           
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (user => {
                    if(user.id === action.id) {
                        return {...user, followed: false};
                    }
                    return user;
                })
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
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter(id => id != action.id)
            }
        }
        default: 
            return state;
    }
}

export const setUsers = (users) => {
    return {type: SET_USERS, users};
}
 
export const follow = (id) => {
    return {type: FOLLOW, id};
}

export const unFollow = (id) => {
    return {type: UNFOLLOW, id};
}
 
export const setPage = (page) => {
    return {type: SET_PAGE, page};
}

export const setTotalCounts = (totalCounts) => {
    return {type: SET_TOTAL_COUNTS, totalCounts};
}

export const toggleFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching};
}
export const toggleFollowingInProgress = (id, isFetching) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, id, isFetching};
}

export default findUsersReducer;