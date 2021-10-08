import { type } from "os";
import { AuthThunk } from "./authReducer";
const SET_INITIALIZE: string = "SET_INITIALIZE";

export type InitialStateType = {
  initialized: boolean;
};

const initialState: InitialStateType = {
  initialized: false,
};

let appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZE: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};
type SetInitializeType = {
  type: typeof SET_INITIALIZE;
};
export let setInitialize = (): SetInitializeType => {
  return {
    type: SET_INITIALIZE,
  };
};

export let initializeApp = () => async (dispatch: any) => {
  await dispatch(AuthThunk());
  dispatch(setInitialize());
};

export default appReducer;
