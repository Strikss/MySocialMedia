import MyPostsContainer from "./Myposts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
  return (
    <div className={classes.profileContainer}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
