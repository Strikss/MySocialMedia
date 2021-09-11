const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const SETCURRENTPAGE = "SETCURRENTPAGE";
const SETTOTALUSERS = "SETTOTALUSERS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
    default: {
      return state;
    }
  }
};
export let setCurrentPageAC = (currentPage) => ({
  type: SETCURRENTPAGE,
  currentPage,
});
export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SETUSERS, users });
export let setTotalUsersCountAC = (totalUsers) => ({
  type: SETTOTALUSERS,
  totalUsers,
});
export default usersReducer;
