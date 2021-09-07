let store={
  getState(){
    return this._state;
  },
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
  
},},
addPostState(){
  let newpost ={
    id:4,
    message:this._state.profilePage.newPostText,
    likesCount:0,    
  };
  this._state.profilePage.postData.push(newpost);
  this._state.profilePage.newPostText="";
  this._RerenderJs(this._state);
  },
  changePostState(postChange){ 
    this._state.profilePage.newPostText=postChange;
    this._RerenderJs(this._state);
   },
  subscribe(observer){
    this._RerenderJs=observer;

  },}
  export default store;
  