import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://content.skyscnr.com/m/687c9b1c629391d5/original/GettyImages-117181444.jpg"
          height="200px"
          width="200px"
          alt="hey"
        />
      </div>

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
