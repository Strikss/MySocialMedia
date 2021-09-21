import { connect } from "react-redux";
import { compose } from "redux";
import { addSms } from "../../Redux/dialogReducer";
import { withAuthRedirect } from "../Hoc/Hoc";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    dialog: state.messagesPage,
  };
};

export default compose(
  connect(mapStateToProps, { addSms }),
  withAuthRedirect
)(Dialogs);
