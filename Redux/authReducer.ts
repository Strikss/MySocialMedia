import { stopSubmit } from "redux-form";
import { authApi } from "../Api/Api";
const SET_AUTH_DATA: string = "SETAUTHDATA";
const SetCaptchaUrl: string = "SETCAPTCHAURL";

type InitialStateType = typeof initialState;
const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetCaptchaUrlType = {
  type: typeof SetCaptchaUrl;
  captchaUrl: string;
};
export const setCaptchaUrlAC = (captchaUrl: string): SetCaptchaUrlType => {
  return {
    type: SetCaptchaUrl,
    captchaUrl: captchaUrl,
  };
};

type SetAuthDataDataType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

type SetAuthDataType = {
  type: typeof SET_AUTH_DATA;
  data: SetAuthDataDataType;
};

export const setAuthData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): SetAuthDataType => {
  return {
    type: SET_AUTH_DATA,
    data: { id, login, email, isAuth },
  };
};

export const AuthThunk = () => async (dispatch: any) => {
  const response = await authApi.auth();
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthData(id, login, email, true));
  }
};
export const logInThunk =
  (
    email: string,
    password: number,
    rememberMe: boolean,
    captcha: string | null = null
  ) =>
  async (dispatch: any) => {
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
export const logOutThunk = () => async (dispatch: any) => {
  const response = await authApi.logOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await authApi.getCaptchaUrl();
  dispatch(setCaptchaUrlAC(response.data.url));
};

export default authReducer;
