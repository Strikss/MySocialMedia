const ADD_SMS = "ADD-SMS";
const CHANGE_SMS = "CHANGE-SMS";
export let changeSmsActionCreater = (text) => {
  return {
    type: CHANGE_SMS,
    smsChange: text,
  };
};
export let addSmsActionCreator = () => {
  return {
    type: ADD_SMS,
  };
};
let initialState = {
  messageData: [
    { id: "1", message: "nu privetdsaffs" },
    { id: "2", message: "osfasf asdasfa asd sad asd asasdasd" },
    { id: "3", message: "nu zdrastvuyte" },
    { id: "4", message: "Privet kak dela" },
    { id: "5", message: "krab" },
  ],
  dialogData: [
    { id: "1", name: "Misha" },
    { id: "2", name: "Vasia" },
    { id: "3", name: "Kate" },
    { id: "4", name: "Eliza" },
    { id: "5", name: "Petro" },
  ],
  newMessageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMS:
      let newSms = {
        id: 4,
        message: state.newMessageText,
      };
      state.messageData.push(newSms);
      state.newMessageText = "";
      return state;
    case CHANGE_SMS:
      state.newMessageText = action.smsChange;
      return state;
    default:
      return state;
  }
};
export default dialogReducer;