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
const dialogReducer = (state, action) => {
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
