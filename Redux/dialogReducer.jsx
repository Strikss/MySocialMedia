const ADD_SMS = "ADD-SMS";

export let addSms = (message) => {
  return {
    type: ADD_SMS,
    message,
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMS: {
      return {
        ...state,
        messageData: [...state.messageData, { id: 6, message: action.message }],
      };
    }
    default:
      return state;
  }
};
export default dialogReducer;
