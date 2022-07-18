import { getAuthUserData } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
import { GlobalStateType, InferActionsTypes } from "./store";

let initialState = {
  initialized: false,
  tryVPN: false,
};

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const appReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SN/APP-REDUCER/INITIALIZED_SUCCESS": {
      return {
        ...state,
        initialized: true,
      };
    }
    case "SN/APP-REDUCER/SET_TRY_VPN": {
      return {
        ...state,
        tryVPN: true,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () =>
    ({ type: "SN/APP-REDUCER/INITIALIZED_SUCCESS" } as const),
  setTryVPN: () => ({ type: "SN/APP-REDUCER/SET_TRY_VPN" } as const),
};
export const setTryVPN = () => ({
  type: "SN/APP-REDUCER/SET_TRY_VPN",
});

type ThunkType = ThunkAction<
  Promise<void>,
  GlobalStateType,
  unknown,
  ActionsTypes
>;

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    let promise = await dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(actions.initializedSuccess());
    });
  };
};

export default appReducer;
