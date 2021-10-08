import { profileApi } from "../Api/Api";
import { stopSubmit } from "redux-form";
const ADD_POST = "ADD-POST";
const SETPROFILESTATE = "SETPROFILESTATE";
const SETSTATUS = "SETSTATUS";
const SAVEPHOTO = "SAVEPHOTO";

type AddPostType = {
  type: typeof ADD_POST;
  postMessage: string;
};
type SetProfileStateType = {
  type: typeof SETPROFILESTATE;
  profileInfo: string;
};
type SetStatusType = {
  type: typeof SETSTATUS;
  status: string;
};
type SavePhotoType = {
  type: typeof SAVEPHOTO;
  photo: string;
};

export let addPost = (postMessage: string): AddPostType => {
  return {
    type: ADD_POST,
    postMessage,
  };
};
export let setProfileState = (profileInfo: string): SetProfileStateType => {
  return {
    type: SETPROFILESTATE,
    profileInfo,
  };
};
export let setStatus = (status: string): SetStatusType => {
  return {
    type: SETSTATUS,
    status,
  };
};
export let savePhoto = (photo: string): SavePhotoType => {
  return {
    type: SAVEPHOTO,
    photo,
  };
};
type InitialStateType = typeof initialState;
type postDataType = {
  id: number;
  message: string;
  likesCount: number;
};
let initialState = {
  postData: [
    { id: 1, message: "It's my first post", likesCount: 15 },
    { id: 2, message: "Hey there i like you", likesCount: 20 },
    { id: 3, message: "helpa me bratan", likesCount: 30 },
  ] as Array<postDataType>,
  profileState: null as {} | null,
  status: "",
};

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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
export let userIdThunk = (userId: number) => {
  return (dispatch: any) => {
    profileApi.getUserId(userId).then((response) => {
      dispatch(setProfileState(response.data));
    });
  };
};
export let setStatusThunk = (status: any) => {
  return (dispatch: any) => {
    profileApi.setStatus(status).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export const getStatusThunk = (userId: number) => async (dispatch: any) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const setProfileUrl = (photoUrl: string) => async (dispatch: any) => {
  let response = await profileApi.setProfilePhoto(photoUrl);
  if (response.data.resultCode == 0) {
    dispatch(savePhoto(response.data.data.photos));
  }
};
export const saveProfileDescription =
  (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileApi.saveProfileDescription(profile);
    if (response.data.resultCode == 0) {
      dispatch(userIdThunk(userId));
    } else {
      dispatch(
        stopSubmit("description", {
          _error: response.data.messages[0],
        })
      );
      return Promise.reject();
    }
  };
export default profileReducer;
