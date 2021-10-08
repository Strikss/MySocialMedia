const ADD_SMS: string = "ADD-SMS";

type addSmsType = {
  type: typeof ADD_SMS;
  message: string;
};
export let addSms = (message: string): addSmsType => {
  return {
    type: ADD_SMS,
    message,
  };
};
type InitialStateType = typeof initialState;
type MessageType = {
  id: string;
  message: string;
};
type DialogDataType = {
  id: string;
  name: string;
};
let initialState = {
  messageData: [
    { id: "1", message: "nu privetdsaffs" },
    { id: "2", message: "osfasf asdasfa asd sad asd asasdasd" },
    { id: "3", message: "nu zdrastvuyte" },
    { id: "4", message: "Privet kak dela" },
    { id: "5", message: "krab" },
  ] as Array<MessageType>,
  dialogData: [
    { id: "1", name: "Misha" },
    { id: "2", name: "Vasia" },
    { id: "3", name: "Kate" },
    { id: "4", name: "Eliza" },
    { id: "5", name: "Petro" },
  ] as Array<DialogDataType>,
};

const dialogReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_SMS: {
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: "6", message: action.message },
        ],
      };
    }
    default:
      return state;
  }
};
export default dialogReducer;
