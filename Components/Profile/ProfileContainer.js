import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfileState,
  userIdThunk,
  setStatusThunk,
  getStatusThunk,
} from "../../Redux/profileReducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../Hoc/Hoc";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19559;
    }
    this.props.userIdThunk(userId);
    this.props.getStatusThunk(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profileState={this.props.profileState}
        status={this.props.status}
        setStatus={this.props.setStatusThunk}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileState: state.profilePage.profileState,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfileState,
    userIdThunk,
    setStatusThunk,
    getStatusThunk,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
