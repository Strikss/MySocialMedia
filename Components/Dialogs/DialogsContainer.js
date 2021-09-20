import { connect } from "react-redux";
import { compose } from "redux";
import { addSmsActionCreator } from "../../Redux/dialogReducer";
import { changeSmsActionCreater } from "../../Redux/dialogReducer";
import { withAuthRedirect } from "../Hoc/Hoc";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    dialog: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateSmsText: (text) => dispatch(changeSmsActionCreater(text)),
    addSms: () => dispatch(addSmsActionCreator()),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
