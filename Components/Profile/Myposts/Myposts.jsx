import React from "react";
import classes from "./Myposts.module.css";
import Post from "./post/Post";
import { addPostActionCreater } from "../../../Redux/state";
import { changePostActionCreator } from "../../../Redux/state";
const Myposts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();
  debugger;
  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(changePostActionCreator(text));
  };

  return (
    <div>
      <div className={classes.textArea}>
        <h2>My posts</h2>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div className={classes.posts}>{postElement}</div>
    </div>
  );
};
export default Myposts;
