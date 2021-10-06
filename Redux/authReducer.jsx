import { stopSubmit } from "redux-form";
import { authApi } from "../Api/Api";
const SET_AUTH_DATA = "SETAUTHDATA";
const SetCaptchaUrl = "SETCAPTCHAURL";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SetCaptchaUrl: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }
    default:
      return state;
  }
};
export const setCaptchaUrlAC = (captchaUrl) => {
  return {
    type: SetCaptchaUrl,
    captchaUrl: captchaUrl,
  };
};
export const setAuthData = (id, login, email, isAuth) => {
  return {
    type: SET_AUTH_DATA,
    data: { id, login, email, isAuth },
  };
};

export const AuthThunk = () => async (dispatch) => {
  const response = await authApi.auth();
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthData(id, login, email, true));
  }
};
export const logInThunk =
  (email, password, rememberMe, captcha = null) =>
  async (dispatch) => {
    const response = await authApi.logIn(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(AuthThunk());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      const message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
export const logOutThunk = () => async (dispatch) => {
  const response = await authApi.logOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await authApi.getCaptchaUrl();
  dispatch(setCaptchaUrlAC(response.data.url));
};

export default authReducer;
