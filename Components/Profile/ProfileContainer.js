import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileState, userIdThunk } from "../../Redux/profileReducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../Hoc/Hoc";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.userIdThunk(userId);
  }
  render() {
    return <Profile {...this.props} profileState={this.props.profileState} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profileState: state.profilePage.profileState,
  };
};

export default compose(
  connect(mapStateToProps, { setProfileState, userIdThunk }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
