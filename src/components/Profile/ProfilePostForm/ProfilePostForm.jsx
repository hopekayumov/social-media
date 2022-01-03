import React from 'react';
import "./ProfilePostForm.css";
import TelegramSendSVG from "../../../assets/images/telegram-send.svg";

function ProfilePostForm() {
    return (
        <div className="profile-post-form">
            <input className="profile-post__input" type="text" placeholder="Type to add tweet" />
            <button className="profile-post__btn">
                <img src={TelegramSendSVG} alt="Send Icon" />
                Send
            </button>
        </div>
    )
}

export default ProfilePostForm;
