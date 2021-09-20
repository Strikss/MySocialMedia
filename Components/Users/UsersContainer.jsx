import { connect } from "react-redux";
import {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isFetchingD,
  userInProgress,
  getUsersThunk,
  setUsersThunk,
  followThunk,
  unFollowThunk,
} from "../../Redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../Common/Preloader/Preloaders";
import { compose } from "redux";
import { withAuthRedirect } from "../Hoc/Hoc";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  setUsersPage = (n) => {
    this.props.setUsersThunk(n, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          setUsersPage={this.setUsersPage}
          inProgress={this.props.inProgress}
          userInProgress={this.props.userInProgress}
          followThunk={this.props.followThunk}
          unFollowThunk={this.props.unFollowThunk}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    inProgress: state.usersPage.inProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetchingD,
    userInProgress,
    getUsersThunk,
    setUsersThunk,
    unFollowThunk,
    followThunk,
  }),
  withAuthRedirect
)(UsersContainer);
