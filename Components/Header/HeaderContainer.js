import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { AuthThunk, logOutThunk } from "../../Redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, { AuthThunk, logOutThunk }))(
  HeaderContainer
);
