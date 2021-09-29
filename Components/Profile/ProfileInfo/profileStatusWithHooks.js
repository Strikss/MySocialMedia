import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, changeEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let onEditTrue = () => changeEditMode(true);
  let onEditFalse = () => {
    changeEditMode(false);
    props.setStatus(status);
  };
  let handleFocus = (event) => event.target.select();
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
            onFocus={handleFocus}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
