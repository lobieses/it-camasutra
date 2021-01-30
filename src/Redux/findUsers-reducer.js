const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

const findUsersReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}      
        }       
        default: 
            return state;
    }
}

 export const followAC = (id) => {
     return {type: FOLLOW, id};
 }

 export const unfollowAC = (id) => {
     return {type: UNFOLLOW, id};
 }
 
 export const setUsersAC = (users) => {
     return {type: SET_USERS, users};
 }

export default findUsersReducer;