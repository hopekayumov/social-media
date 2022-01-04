import React from "react";
import "./ProfilePostItem.css";
import Avatar from "../../../assets/images/avatar.jpg";

function ProfilePostItem({ text }) {
  return (
    <div className="profile-post-item">
      <img className="profile-post__avatar" src={Avatar} alt="avatar jpg" />
      <span className="profile-post__text">{text}</span>
    </div>
  );
}

export default ProfilePostItem;
