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
import { userApi } from "../../Api/Api";
import React from "react";
import Preloader from "../Common/Preloader/Preloaders";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.isFetchingD(true);
    userApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.isFetchingD(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  setUsersPage = (n) => {
    this.props.setCurrentPage(n);
    this.props.isFetchingD(true);

    userApi.setUsers(n, this.props.pageSize).then((data) => {
      this.props.isFetchingD(false);
      this.props.setUsers(data.items);
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
