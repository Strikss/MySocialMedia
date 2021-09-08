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

let initialState = {
  postData: [
    { id: 1, message: "It's my first post", likesCount: 15 },
    { id: 2, message: "Hey there i like you", likesCount: 20 },
    { id: 3, message: "helpa me bratan", likesCount: 30 },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
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
