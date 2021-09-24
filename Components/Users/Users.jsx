import classes from "./Users.module.css";
import React from "react";
import anonym from "../../Avatar/anonymous.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((n) => {
          return (
            <span
              className={props.currentPage === n && classes.selectedPage}
              onClick={() => props.setUsersPage(n)}
            >
              {n}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <NavLink to={"/profile/" + u.id}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : anonym}
                  height="100px"
                  width="100px"
                />
              </div>
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={props.inProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unFollowThunk(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.inProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
