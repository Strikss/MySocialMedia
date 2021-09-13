import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloaders";
import GOD from "../../../Avatar/GOD.png";
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
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
          width="100px"
          heigth="100px"
          alt="hey"
        />
        AVA + DESCTIPTION
      </div>
    </div>
  );
};
export default ProfileInfo;
