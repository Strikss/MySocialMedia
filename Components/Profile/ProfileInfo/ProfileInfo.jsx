import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.avaDescript}>
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
