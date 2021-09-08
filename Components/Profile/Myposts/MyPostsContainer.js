import React from "react";
import { addPostActionCreater } from "../../../Redux/profileReducer";
import { changePostActionCreator } from "../../../Redux/profileReducer";
import Myposts from "./Myposts"

const  MyPostsContainer = (props) => {
    debugger
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  };
  let changePostText = (text) => {
    props.store.dispatch(changePostActionCreator(text));
  };

  return (
   <Myposts
   addPost={addPost}
   changePostText={changePostText}
   newPostText={state.profilePage.newPostText}
   posts={state.profilePage.postData}

   />
  );
};
export default MyPostsContainer;
