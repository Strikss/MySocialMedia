import { connect } from "react-redux";
import { addPostActionCreater } from "../../../Redux/profileReducer";
import { changePostActionCreator } from "../../../Redux/profileReducer";
import Myposts from "./Myposts";

let mapStateToProps=(state)=>{
  return{
    newPostText:state.profilePage.newPostText,
    posts:state.profilePage.postData,
  }
}
let mapDispatchToProps=(dispatch)=>{
return{
  changePostText:(text)=>dispatch(changePostActionCreator(text)),
  addPost:()=>dispatch(addPostActionCreater()),
}
}
const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(Myposts);
export default MyPostsContainer;
