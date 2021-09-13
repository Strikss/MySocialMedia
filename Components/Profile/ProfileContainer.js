import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileState } from "../../Redux/profileReducer";
import { withRouter } from "react-router";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId=this.props.match.params.userId;
    if(!userId){
      userId=2;
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/`+userId
      )
      .then((response) => {
        this.props.setProfileState(response.data)
        
      });
    }
  render() {
    return(
    <Profile {...this.props} profileState={this.props.profileState}/>
    )
}
}
let mapStateToProps = (state) => {
  return {
    profileState:state.profilePage.profileState,
  };
};
let WithRouterContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps,{setProfileState})(WithRouterContainer);
