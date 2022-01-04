import React from "react";
import { NavLink } from "react-router-dom";
import "./Navmenu.css";

function Profile() {
  return (
    <div className="navmenu">
      <nav className="navmenu__nav">
        <ul className="navmenu__list">
          <li className="navmenu__item">
            <NavLink to="/profile" className={navData => navData.isActive ? "active" : "navlist__link"}>
              Profile
            </NavLink>
          </li>
          <li className="navmenu__item">
            <NavLink to="/dialogs" className="navlist__link">
              Messages
            </NavLink>
          </li>
          <li className="navmenu__item">
            <NavLink to="/news" className="navlist__link">
              News
            </NavLink>
          </li>
          <li className="navmenu__item">
            <NavLink to="/music" className="navlist__link">
              Music
            </NavLink>
          </li>
          <li className="navmenu__item">
            <NavLink to="/settings" className="navlist__link">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Profile;
