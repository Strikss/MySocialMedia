import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
        alt="hello"
      />
      {props.message}
      <div>{props.likesCount}</div>
    </div>
  );
};

export default Post;
