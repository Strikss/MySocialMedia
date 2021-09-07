const CHANGE_POST="CHANGE-POST";
const ADD_POST="ADD-POST";
const ADD_SMS ="ADD-SMS"
const CHANGE_SMS="CHANGE-SMS"

let store={
_RerenderJs(){},
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
  if (action.type===ADD_POST){
  let newpost ={
    id:4,
    message:this._state.profilePage.newPostText,
    likesCount:0,    
  };
  this._state.profilePage.postData.push(newpost);
  this._state.profilePage.newPostText="";
  this._RerenderJs(this._state);
  }
  else if(action.type===CHANGE_POST){
    this._state.profilePage.newPostText=action.postChange;
    this._RerenderJs(this._state);
  }
  else if(action.type===ADD_SMS){
    let newSms={
      id:4,
      message:this._state.messagesPage.newMessageText,
    }
    this._state.messagesPage.messageData.push(newSms);
    this._state.messagesPage.newMessageText="";
    this._RerenderJs(this._state);
  }
  else if(action.type===CHANGE_SMS){
    this._state.messagesPage.newMessageText=action.smsChange;
    this._RerenderJs(this._state);
  }
  }
  
}
export let changePostActionCreator=(text)=>{
  return{
    type:CHANGE_POST,
    postChange:text,
  }
}
export let addPostActionCreater=()=>{
  return{
    type:ADD_POST,
  }
}
export let changeSmsActionCreater=(text)=>{
  return{
    type:CHANGE_SMS,
    smsChange:text,
  }
}
export let addSmsActionCreator=()=>{
  return{
    type:ADD_SMS,
  }
}
  export default store;
  