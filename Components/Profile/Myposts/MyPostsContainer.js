import { connect } from "react-redux";
import { addPost } from "../../../Redux/profileReducer";
import Myposts from "./Myposts";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postData,
  };
};
export default connect(mapStateToProps, { addPost })(Myposts);
