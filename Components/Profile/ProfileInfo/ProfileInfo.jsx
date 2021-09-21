import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloaders";
import GOD from "../../../Avatar/GOD.png";
import ProfileStatus from "./ProfileStatus";

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
                : GOD
            }
            heigth="150px"
            width="150px"
          />
        </div>
        <div>
          <ProfileStatus message={props.status} setStatus={props.setStatus} />
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
