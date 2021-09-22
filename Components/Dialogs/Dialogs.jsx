import classes from "./Dialogs.module.css";
import MessageItem from "./Messages/MessageItem";
import DialogItem from "./Dialogs/DialogItem";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { PostAreaStyle } from "../Common/FormStyle/FormStyle";
import { required, setMaxlength } from "../Validate/Validate";

const Dialogs = (props) => {
  let dialogElements = props.dialog.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialog.messageData.map((m) => (
    <MessageItem message={m.message} />
  ));
  let addSms = (value) => {
    props.addSms(value.dialogText);
  };
  return (
    <div>
      <div className={classes.dialogWin}>
        <div className={classes.dialogsContainer}>{dialogElements}</div>
        <div className={classes.messagesContainer}>{messagesElements}</div>
      </div>
      <DialogReduxForm onSubmit={addSms} />
    </div>
  );
};
const setMaxlength15 = setMaxlength(15);
const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, setMaxlength15]}
          component={PostAreaStyle}
          name={"dialogText"}
          placeholder="Enter your message"
          Formtype="textarea"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
const DialogReduxForm = reduxForm({ form: "dialogForm" })(DialogForm);
export default Dialogs;
