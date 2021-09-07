const CHANGE_POST = "CHANGE-POST";
const ADD_POST = "ADD-POST";

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
const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newpost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newpost);
      state.newPostText = "";
      return state;

    case CHANGE_POST:
      state.newPostText = action.postChange;
      return state;
    default:
      return state;
  }
};
export default profileReducer;
