import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import findUsersReducer from './findUsers-reducer';
import authReducer from './auth-reducer';
import appReducer from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store  = createStore(reducers, applyMiddleware(thunkMiddleware));
    
export default store;