import { profileApi } from "../Api/Api";

const ADD_POST = "ADD-POST";
const SETPROFILESTATE = "SETPROFILESTATE";
const SETSTATUS = "SETSTATUS";
const SAVEPHOTO = "SAVEPHOTO";

export let addPost = (postMessage) => {
  return {
    type: ADD_POST,
    postMessage,
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
export let savePhoto = (photo) => {
  return {
    type: SAVEPHOTO,
    photo,
  };
};

let initialState = {
  postData: [
    { id: 1, message: "It's my first post", likesCount: 15 },
    { id: 2, message: "Hey there i like you", likesCount: 20 },
    { id: 3, message: "helpa me bratan", likesCount: 30 },
  ],
  profileState: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 4, message: action.postMessage, likesCount: 0 },
        ],
      };
    }
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
    case SAVEPHOTO: {
      return {
        ...state,
        profileState: { ...state.profileState, photos: action.photo },
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
export const getStatusThunk = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const setProfileUrl = (photoUrl) => async (dispatch) => {
  let response = await profileApi.setProfilePhoto(photoUrl);
  if (response.data.resultCode == 0) {
    dispatch(savePhoto(response.data.data.photos));
  }
};
export default profileReducer;
