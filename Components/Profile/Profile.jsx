import classes from "./Profile.module.css";
import Myposts from "./Myposts/Myposts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.profileContainer}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};
export default Profile;
