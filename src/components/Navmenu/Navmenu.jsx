import React from 'react';
import "./Navmenu.css";

function Profile() {    
    return (
        <div className="navmenu">
            <nav className="navmenu__nav">
                <ul className="navmenu__list">
                    <li className="navmenu__item">Profile</li>
                    <li className="navmenu__item">Messages</li>
                    <li className="navmenu__item">News</li>
                    <li className="navmenu__item">Music</li>
                    <li className="navmenu__item">Settings</li>
                </ul>
            </nav>     
        </div>
    )
}

export default Profile;
