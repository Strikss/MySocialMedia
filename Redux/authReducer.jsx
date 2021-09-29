import { stopSubmit } from "redux-form";
import { authApi } from "../Api/Api";
const SET_AUTH_DATA = "SETAUTHDATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export let setAuthData = (id, login, email, isAuth) => {
  return {
    type: SET_AUTH_DATA,
    data: { id, login, email, isAuth },
  };
};

export let AuthThunk = () => async (dispatch) => {
  let response = await authApi.auth();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthData(id, login, email, true));
  }
};
export let logInThunk = (email, password, rememberMe) => async (dispatch) => {
  let response = await authApi.logIn(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(AuthThunk());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some Error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export let logOutThunk = () => async (dispatch) => {
  let response = await authApi.logOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};
export default authReducer;
