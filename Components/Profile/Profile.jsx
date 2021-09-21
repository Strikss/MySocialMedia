import MyPostsContainer from "./Myposts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div className={classes.profileContainer}>
      <ProfileInfo
        profileState={props.profileState}
        status={props.status}
        setStatus={props.setStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
