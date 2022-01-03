import React from 'react';
import "./ProfilePostForm.css";

function ProfilePostForm() {
    return (
        <div className="profile-post-form">
            <input className="profile-post__input" type="text" placeholder="Type to add post" />
            <button className="profile-post__btn">Send</button>
        </div>
    )
}

export default ProfilePostForm;
