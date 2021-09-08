import React from "react";
import classes from "./Myposts.module.css";
import Post from "./post/Post";
const Myposts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.changePostText();
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
