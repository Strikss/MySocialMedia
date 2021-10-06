import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfileState,
  userIdThunk,
  setStatusThunk,
  getStatusThunk,
  setProfileUrl,
  saveProfileDescription,
} from "../../Redux/profileReducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../Hoc/Hoc";
import { compose } from "redux";
import { useEffect } from "react";

const ProfileContainer = (props) => {
  const refreshProfile = () => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.currentUserId;
      if (!userId) {
        userId = 19559;
      }
    }

    props.userIdThunk(userId);
    props.getStatusThunk(userId);
  };
  useEffect(() => {
    refreshProfile();
  }, [props.match.params.userId]);

  return (
    <Profile
      {...props}
      owner={!props.match.params.userId}
      profileState={props.profileState}
      status={props.status}
      setStatus={props.setStatusThunk}
      setProfileUrl={props.setProfileUrl}
      saveProfileDescription={props.saveProfileDescription}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    profileState: state.profilePage.profileState,
    status: state.profilePage.status,
    currentUserId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfileState,
    userIdThunk,
    setStatusThunk,
    getStatusThunk,
    setProfileUrl,
    saveProfileDescription,
  }),
  withRouter
  //withAuthRedirect
)(ProfileContainer);
