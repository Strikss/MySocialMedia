import classes from "./Profile.module.css";
import Myposts from "./Myposts/Myposts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profileContainer}>
      <ProfileInfo />
      <Myposts
        changePostState={props.changePostState}
        posts={props.posts.postData}
        addPost={props.addPost}
        newPostText={props.posts.newPostText}
      />
    </div>
  );
};
export default Profile;
