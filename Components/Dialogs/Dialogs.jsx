import classes from "./Dialogs.module.css";
import MessageItem from "./Messages/MessageItem";
import DialogItem from "./Dialogs/DialogItem";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialog.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialog.messageData.map((m) => (
    <MessageItem message={m.message} />
  ));
  let onSmsChange = (e) => {
    let text = e.target.value;
    props.updateSmsText(text);
  };
  let addSms = () => {
    props.addSms();
  };
  return (
    <div>
      <div className={classes.dialogWin}>
        <div className={classes.dialogsContainer}>{dialogElements}</div>
        <div className={classes.messagesContainer}>{messagesElements}</div>
      </div>
      <textarea
        onChange={onSmsChange}
        value={props.newMessageText}
        placeholder="Enter your message"
      ></textarea>
      <button onClick={addSms}>Send</button>
    </div>
  );
};
export default Dialogs;
