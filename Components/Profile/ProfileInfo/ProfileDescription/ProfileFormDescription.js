import classes from "../ProfileInfo.module.css";
import { reduxForm } from "redux-form";
import { fieldCreator } from "../../../Common/FormStyle/FormStyle";
import s from "../../../Login/Login.module.css";
const ProfileFormDescription = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <b>Full name:</b>
          {fieldCreator("fullName", "textarea", "Full name")}
        </div>
        <div>
          <b> About me:</b>
          {fieldCreator("aboutMe", "textarea", "About me")}
        </div>
        <div>
          <b>Looking for a job:</b>
          {fieldCreator(
            "lookingForAJob",
            "input",
            "Looking for a job",
            "checkbox"
          )}
        </div>
        <div>
          <b>My professional skills:</b>
          {fieldCreator(
            "lookingForAJobDescription",
            "textarea",
            "My professional skills"
          )}
        </div>
        <div className={classes.description}>
          <div>
            <b>Contacts:</b>
            {Object.keys(props.profileState.contacts).map((key) => (
              <div className={classes.contacts}>
                {key}:{fieldCreator("contacts." + key, "input", key)}
              </div>
            ))}
          </div>
        </div>
      </div>
      {props.error && <div className={s.error}>{props.error}</div>}
      <button>Save</button>
    </form>
  );
};
const DescriptionReduxForm = reduxForm({ form: "description" })(
  ProfileFormDescription
);

export default DescriptionReduxForm;
