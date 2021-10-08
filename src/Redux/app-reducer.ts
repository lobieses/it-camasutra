import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "./store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
};

type ActionsTypes = InitializedSuccessType;

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<Promise<any>, GlobalStateType, unknown, ActionsTypes>

export const initializeApp = (): any => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    }
}

export default appReducer;
