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
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export let setAuthData = (id, login, email) => {
  return {
    type: SET_AUTH_DATA,
    data: { id, login, email },
  };
};
export default authReducer;
