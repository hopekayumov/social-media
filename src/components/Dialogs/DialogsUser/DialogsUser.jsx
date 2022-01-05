import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogsUser.css";
import Avatar from "../../../assets/images/avatar.jpg";

function DialogsUser({ fullname, id }) {
  return (
    <NavLink className="dialogs__user--link" to={`/dialogs/${id}`}>
      <div className="dialogs__user">
        <img className="dialogs__user--avatar" src={Avatar} alt="user avatar" />
        <span className="dialogs__user--name">{fullname}</span>
      </div>
    </NavLink>
  );
}

export default DialogsUser;
