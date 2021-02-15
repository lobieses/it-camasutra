import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import findUsersReducer from './findUsers-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer
});

let store  = createStore(reducers);
    
export default store;