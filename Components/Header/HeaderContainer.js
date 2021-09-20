import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { setAuthData, AuthThunk } from "../../Redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.AuthThunk();
  }
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

export default compose(connect(mapStateToProps, { setAuthData, AuthThunk }))(
  HeaderContainer
);
