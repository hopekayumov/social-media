import React from 'react';
import "./Navmenu.css";

function Profile() {
    return (
        <div className="profile">
            <nav className="profile__nav">
                <ul className="profile__list">
                    <li className="profile__item">Profile</li>
                    <li className="profile__item">Messages</li>
                    <li className="profile__item">News</li>
                    <li className="profile__item">Music</li>
                    <li className="profile__item">Settings</li>
                </ul>
            </nav>     
        </div>
    )
}

export default Profile;
