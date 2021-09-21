import React from "react";
import classes from "./Myposts.module.css";
import Post from "./post/Post";
import { Field, reduxForm } from "redux-form";
const Myposts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let addNewPost = (value) => {
    console.log(value);
    props.addPost(value.postText);
  };
  return (
    <div>
      <div className={classes.textArea}>
        <h2>My posts</h2>
        <PostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={classes.posts}>{postElement}</div>
    </div>
  );
};
const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        placeholder={"Enter your message"}
        name={"postText"}
      />
      <button>Post</button>
    </form>
  );
};
const PostReduxForm = reduxForm({ form: "post" })(PostsForm);

export default Myposts;
