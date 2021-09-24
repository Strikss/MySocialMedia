import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloaders";
import anonym from "../../../Avatar/anonymous.png";
import ProfileStatusWithHooks from "./profileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profileState) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.avaDescript}>
        <div>
          <img
            src={
              props.profileState.photos.small != null
                ? props.profileState.photos.small
                : anonym
            }
            heigth="150px"
            width="150px"
          />
        </div>
        <div>
          <ProfileStatusWithHooks
            status={props.status}
            setStatus={props.setStatus}
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
