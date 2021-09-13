import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isFetchingD,
} from "../../Redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import React from "react";
import Preloader from "../Common/Preloader/Preloaders";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.isFetchingD(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.isFetchingD(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  setUsersPage = (n) => {
    this.props.setCurrentPage(n);
    this.props.isFetchingD(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )

      .then((response) => {
        this.props.isFetchingD(false);
        this.props.setUsers(response.data.items);
      });
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          setUsersPage={this.setUsersPage}
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
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isFetchingD,
})(UsersAPIContainer);
export default UsersContainer;
