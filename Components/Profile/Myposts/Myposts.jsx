import React from "react";
import classes from "./Myposts.module.css";
import Post from "./post/Post";
import { Field, reduxForm } from "redux-form";
import { required, setMaxlength } from "../../Validate/Validate";
import { PostAreaStyle } from "../../Common/FormStyle/FormStyle";
const Myposts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let addNewPost = (value) => {
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
let setMaxlength10 = setMaxlength(10);
const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, setMaxlength10]}
        component={PostAreaStyle}
        placeholder={"Enter your message"}
        name={"postText"}
        Formtype="textarea"
      />
      <button>Post</button>
    </form>
  );
};
const PostReduxForm = reduxForm({ form: "post" })(PostsForm);

export default Myposts;
