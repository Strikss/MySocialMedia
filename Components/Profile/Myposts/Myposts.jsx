import React from "react";
import classes from "./Myposts.module.css";
import Post from "./post/Post";
import { addPostActionCreater } from "../../../Redux/profileReducer";
import { changePostActionCreator } from "../../../Redux/profileReducer";
const Myposts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(changePostActionCreator(text));
  };

  return (
    <div>
      <div className={classes.textArea}>
        <h2>My posts</h2>
        <textarea
          onChange={onPostChange}
          placeholder="Enter your message"
          value={props.newPostText}
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div className={classes.posts}>{postElement}</div>
    </div>
  );
};
export default Myposts;
