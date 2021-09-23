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

export let AuthThunk = () => {
  return (dispatch) => {
    return authApi.auth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthData(id, login, email, true));
      }
    });
  };
};
export let logInThunk = (email, password, rememberMe) => (dispatch) => {
  return authApi.logIn(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(AuthThunk());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};
export let logOutThunk = () => {
  return (dispatch) => {
    authApi.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
