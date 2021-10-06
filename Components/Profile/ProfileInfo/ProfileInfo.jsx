import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloaders";
import anonym from "../../../Avatar/anonymous.png";
import ProfileStatusWithHooks from "./ProfileDescription/profileStatusWithHooks";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import { useState } from "react";
import DescriptionReduxForm from "./ProfileDescription/ProfileFormDescription";
const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  const uploadPhoto = (e) => {
    props.setProfileUrl(e.target.files[0]);
  };
  const onSubmit = (formData) => {
    props.saveProfileDescription(formData).then(() => {
      setEditMode(false);
    });
  };
  if (!props.profileState) {
    return <Preloader />;
  }
  return (
    <div>
      {/* Photo */}
      <div className={classes.avaDescript}>
        <img
          src={
            props.profileState.photos.small != null
              ? props.profileState.photos.small
              : anonym
          }
        />
        <span>
          {props.owner && <input type="file" onChange={uploadPhoto} />}
        </span>
      </div>
      {/* Photo */}
      {/* StatusBar */}
      <div className={classes.status}>
        <div>
          <b>Status:</b>
        </div>
        <div>
          <ProfileStatusWithHooks
            status={props.status}
            setStatus={props.setStatus}
          />
        </div>
        {/* StatusBar */}
      </div>
      {editMode ? (
        <DescriptionReduxForm
          initialValues={props.profileState}
          onSubmit={onSubmit}
          profileState={props.profileState}
        />
      ) : (
        <ProfileDescription
          goToEditMode={() => {
            setEditMode(true);
          }}
          profileState={props.profileState}
          owner={props.owner}
        />
      )}
    </div>
  );
};
export default ProfileInfo;
