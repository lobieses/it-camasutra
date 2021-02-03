const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'CHANGE-PAGE';
const SET_TOTAL_COUNTS = 'SET-TOTAL-COUNTS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initialState = {
    users: [],
    pageSize: 3,
    totalCounts: 0,
    focusPage: 1,
    isFetching: false
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
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
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

export const setFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}

export default findUsersReducer;