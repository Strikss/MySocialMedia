import { profileApi } from "../Api/Api";

const CHANGE_POST = "CHANGE-POST";
const ADD_POST = "ADD-POST";
const SETPROFILESTATE = "SETPROFILESTATE";
const SETSTATUS = "SETSTATUS";

export let changePostActionCreator = (text) => {
  return {
    type: CHANGE_POST,
    postChange: text,
  };
};
export let addPostActionCreater = () => {
  return {
    type: ADD_POST,
  };
};
export let setProfileState = (profileInfo) => {
  return {
    type: SETPROFILESTATE,
    profileInfo,
  };
};
export let setStatus = (status) => {
  return {
    type: SETSTATUS,
    status,
  };
};

let initialState = {
  postData: [
    { id: 1, message: "It's my first post", likesCount: 15 },
    { id: 2, message: "Hey there i like you", likesCount: 20 },
    { id: 3, message: "helpa me bratan", likesCount: 30 },
  ],
  newPostText: "",
  profileState: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newpost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postData.push(newpost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case CHANGE_POST:
      let stateCopy = { ...state };
      stateCopy.newPostText = action.postChange;
      return stateCopy;
    case SETPROFILESTATE: {
      return {
        ...state,
        profileState: action.profileInfo,
      };
    }
    case SETSTATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export let userIdThunk = (userId) => {
  return (dispatch) => {
    profileApi.getUserId(userId).then((response) => {
      dispatch(setProfileState(response.data));
    });
  };
};
export let setStatusThunk = (status) => {
  return (dispatch) => {
    profileApi.setStatus(status).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export let getStatusThunk = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export default profileReducer;
