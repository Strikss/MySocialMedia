import classes from "./Users.module.css";
import React, { useState } from "react";
import anonym from "../../Avatar/anonymous.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let portionSize = props.portionSize;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize + 1;

  return (
    <div>
      <div>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            PREV
          </button>
        )}

        {pages
          .filter((n) => n >= leftPortionNumber && n < rightPortionNumber)
          .map((n) => {
            return (
              <span
                className={props.currentPage === n && classes.selectedPage}
                onClick={() => props.setUsersPage(n)}
              >
                {n}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
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
