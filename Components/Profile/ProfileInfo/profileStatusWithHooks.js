import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, changeEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let onEditTrue = () => changeEditMode(true);
  let onEditFalse = () => {
    changeEditMode(false);
    props.setStatus(status);
  };
  let statusOnChange = (e) => {
    setStatus(e.target.value);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <>
      {!editMode && (
        <span onDoubleClick={onEditTrue}>{props.status || "no status"}</span>
      )}
      {editMode && (
        <div>
          <input
            onBlur={onEditFalse}
            onChange={statusOnChange}
            value={status}
            autoFocus={true}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
