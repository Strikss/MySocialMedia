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
import {
  getCurrentPage,
  getInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getPortionSize,
} from "../../Redux/UsersSelector";

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
          portionSize={this.props.portionSize}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    inProgress: getInProgress(state),
    portionSize: getPortionSize(state),
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
