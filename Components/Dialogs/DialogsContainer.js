import React from "react";
import { addSmsActionCreator } from "../../Redux/dialogReducer";
import { changeSmsActionCreater } from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
let state = props.store.getState();
  let onSmsChange = (text) => {
    props.store.dispatch(changeSmsActionCreater(text));
  };
  let addSms = () => {
    props.store.dispatch(addSmsActionCreator());
  };
  return (
    <Dialogs 
    updateSmsText={onSmsChange}
    addSms={addSms}
    newMessageText={state.messagesPage.newMessageText}
    dialog={state.messagesPage}
    />
  );
};
export default DialogsContainer;