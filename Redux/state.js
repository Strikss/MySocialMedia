import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

const CHANGE_POST="CHANGE-POST";
const ADD_POST="ADD-POST";
const ADD_SMS ="ADD-SMS"
const CHANGE_SMS="CHANGE-SMS"

let store={
_state:{
  profilePage:{
  postData:[
    { id: 1, message: "It's my first post", likesCount: 15 },
    { id: 2, message: "Hey there i like you", likesCount: 20 },
    { id: 3, message: "helpa me bratan", likesCount: 30 },
  ],
  newPostText:""
},
  messagesPage:{
  messageData:[
    { id: "1", message: "nu privetdsaffsafgsagsagasgasgasgasgasg" },
    { id: "2", message: "osfasf asdasfa asd sad asd asasdasdasdassssssssssssssss" },
    { id: "3", message: "nu zdrastvuyte" },
    { id: "4", message: "Privet kak dela" },
    { id: "5", message: "krab" }, 
  ],
  dialogData:[
    { id: "1", name: "Misha" },
    { id: "2", name: "Vasia" },
    { id: "3", name: "Kate" },
    { id: "4", name: "Eliza" },
    { id: "5", name: "Petro" },
  ],
  newMessageText:"",
},},
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._RerenderJs=observer;

  },
   
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage,action),
    this._state.messagesPage=dialogReducer(this._state.messagesPage,action)
    this._RerenderJs(this._state);
},
}


  export default store;
  