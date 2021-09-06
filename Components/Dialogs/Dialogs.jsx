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
  let newSmsElement = React.createRef();
  let addSms = () => {
    let addsms = newSmsElement.current.value;
    alert(addsms);
  };
  return (
    <div>
      <div className={classes.dialogWin}>
        <div className={classes.dialogsContainer}>{dialogElements}</div>
        <div className={classes.messagesContainer}>{messagesElements}</div>
      </div>
      <textarea ref={newSmsElement}></textarea>
      <button onClick={addSms}>Send</button>
    </div>
  );
};
export default Dialogs;
