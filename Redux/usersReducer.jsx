import { userApi } from "../Api/Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const SETCURRENTPAGE = "SETCURRENTPAGE";
const SETTOTALUSERS = "SETTOTALUSERS";
const ISFETCHING = "ISFETCHING";
const INPROGRESS = "INPROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  inProgress: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SETUSERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SETCURRENTPAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SETTOTALUSERS: {
      return {
        ...state,
        totalUsersCount: action.totalUsers > 15 ? 100 : action.totalUsers,
      };
    }
    case ISFETCHING: {
      return {
        ...state,
        isFetching: action.loading,
      };
    }
    case INPROGRESS: {
      return {
        ...state,
        inProgress: action.loading
          ? [...state.inProgress, action.id]
          : [state.inProgress.filter((id) => id != action.id)],
      };
    }
    default: {
      return state;
    }
  }
};
export let setCurrentPage = (currentPage) => ({
  type: SETCURRENTPAGE,
  currentPage,
});
export let follow = (userId) => ({ type: FOLLOW, userId });
export let unfollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SETUSERS, users });
export let setTotalUsersCount = (totalUsers) => ({
  type: SETTOTALUSERS,
  totalUsers,
});
export let userInProgress = (loading, id) => ({
  type: INPROGRESS,
  loading,
  id,
});
export let isFetchingD = (loading) => ({ type: ISFETCHING, loading });

export let getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(isFetchingD(true));
  let data = await userApi.getUsers(currentPage, pageSize);
  dispatch(isFetchingD(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};
export let setUsersThunk = (n, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(n));
  dispatch(isFetchingD(true));

  let data = await userApi.setUsers(n, pageSize);
  dispatch(isFetchingD(false));
  dispatch(setUsers(data.items));
};
export let followThunk = (userId) => async (dispatch) => {
  dispatch(userInProgress(true, userId));
  let response = await userApi.follow(userId);
  if (response.data.resultCode == 0) {
    dispatch(follow(userId));
  }
  dispatch(userInProgress(false, userId));
};
export let unFollowThunk = (userId) => async (dispatch) => {
  dispatch(userInProgress(true, userId));
  let response = await userApi.unFollow(userId);
  if (response.data.resultCode == 0) {
    dispatch(unfollow(userId));
  }
  dispatch(userInProgress(false, userId));
};
export default usersReducer;
