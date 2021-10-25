import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType, InferActionsTypes} from "./store";

let initialState = {
    initialized: false
};

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case 'SN/APP-REDUCER/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP-REDUCER/INITIALIZED_SUCCESS'} as const)
}

type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => {
    return async (dispatch) => {
        let promise = await dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(actions.initializedSuccess());
            });
    }
}

export default appReducer;