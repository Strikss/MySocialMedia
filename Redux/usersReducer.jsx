const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const SETCURRENTPAGE = "SETCURRENTPAGE";
const SETTOTALUSERS = "SETTOTALUSERS";
const ISFETCHING = "ISFETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
export let isFetchingD = (loading) => ({ type: ISFETCHING, loading });
export default usersReducer;
