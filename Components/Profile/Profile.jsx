import classes from "./Profile.module.css";
import Myposts from "./Myposts/Myposts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profileContainer}>
      <ProfileInfo />
      <Myposts
        dispatch={props.dispatch}
        posts={props.posts.postData}
        newPostText={props.posts.newPostText}
      />
    </div>
  );
};
export default Profile;
