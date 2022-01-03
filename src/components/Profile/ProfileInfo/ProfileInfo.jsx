import React from "react";
import Avatar from "../../../assets/images/avatar.jpg";
import "./ProfileInfo.css";

function ProfileInfo() {
  return (
    <div className="profile__info">
      <img className="profile__avatar" src={Avatar} alt="avatar png" />

      <div className="profile__datas">
        <span className="profile__datas--name">Name: Umid Kayumov</span>
        <span className="profile__datas--birth">Date of birth: 12.26.2000</span>
        <span className="profile__datas--city">City: Fergana</span>
        <span className="profile__datas--education">Edu: Developer</span>
        <span className="profile__datas--website">Website: codetime.uz</span>
      </div>
    </div>
  );
}

export default ProfileInfo;
