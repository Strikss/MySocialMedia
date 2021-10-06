import classes from "../ProfileInfo.module.css";
const ProfileDescription = (props) => {
  return (
    <div>
      <div>
        <b>Full name: </b>
        {props.profileState.fullName}
      </div>
      <div>
        <b> About me: </b>
        {props.profileState.aboutMe}
      </div>
      <div>
        <b>Looking for a job: </b>
        {props.profileState.lookingForAJob && "yes"}
      </div>
      <div>
        <b>My professional skills: </b>
        {props.profileState.lookingForAJobDescription}
      </div>
      <div className={classes.description}>
        <div>
          <b>Contacts: </b>

          {Object.keys(props.profileState.contacts).map((key) => (
            <div key={key}>
              <Contacts
                key={key}
                contactTitle={key}
                contactValue={props.profileState.contacts[key]}
              />
            </div>
          ))}
        </div>
        {props.owner && <button onClick={props.goToEditMode}>EditMode</button>}
      </div>
    </div>
  );
};
const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contacts}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};
export default ProfileDescription;
