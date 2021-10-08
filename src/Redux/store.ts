import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import findUsersReducer from './findUsers-reducer';
import authReducer from './auth-reducer';
import appReducer from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer,
});

let store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

export default store;