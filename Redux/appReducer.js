import { AuthThunk } from "./authReducer";
const SET_INITIALIZE = "SET_INITIALIZE";

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
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

export let setInitialize = () => {
  return {
    type: SET_INITIALIZE,
  };
};

export let initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(AuthThunk());
    promise.then(() => {
      dispatch(setInitialize());
    });
  };
};

export default appReducer;
