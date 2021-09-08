import React from "react";
import { addPostActionCreater } from "../../../Redux/profileReducer";
import { changePostActionCreator } from "../../../Redux/profileReducer";
import Myposts from "./Myposts";
const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  };
  let onPostChange = (text) => {
    props.store.dispatch(changePostActionCreator(text));
  };

  return (
    <Myposts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
