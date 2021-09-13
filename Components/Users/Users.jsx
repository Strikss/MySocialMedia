import classes from "./Users.module.css";
import React from "react";
import photo from "../../Avatar/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  debugger;
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
                  src={u.photos.small != null ? u.photos.small : photo}
                  height="100px"
                  width="100px"
                />
              </div>
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "d0be37e1-edcf-49b4-934d-161e99adcc12",
                          },
                        }
                      )
                      .then((response) => {
                        debugger;
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "d0be37e1-edcf-49b4-934d-161e99adcc12",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
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
