import classes from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        alt="hello"
      />
      {props.message}
    </div>
  );
};
export default MessageItem;
