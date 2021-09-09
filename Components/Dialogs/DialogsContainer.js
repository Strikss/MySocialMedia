import { connect } from "react-redux";
import { addSmsActionCreator } from "../../Redux/dialogReducer";
import { changeSmsActionCreater } from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";

let mapStateToProps=(state)=>{
  return{
newMessageText:state.messagesPage.newMessageText,
dialog:state.messagesPage,
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{
    updateSmsText:(text)=>dispatch(changeSmsActionCreater(text)),
    addSms:()=>dispatch(addSmsActionCreator())
  }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;