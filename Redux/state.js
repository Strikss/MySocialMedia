import {RerenderJs} from "../RerenderJs"
let state ={
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
  
},}
  
 export let addPostState=()=>{
  let newpost ={
    id:4,
    message:state.profilePage.newPostText,
    likesCount:0,    
  };
  state.profilePage.postData.push(newpost);
  state.profilePage.newPostText="";
  RerenderJs(state);
  }
 export let changePostState=(postChange)=>{
   state.profilePage.newPostText=postChange;
   RerenderJs(state);
  }
  export default state;
  