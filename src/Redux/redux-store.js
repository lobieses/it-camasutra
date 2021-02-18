import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import findUsersReducer from './findUsers-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer
});

let store  = createStore(reducers, applyMiddleware(thunkMiddleware));
    
export default store;