import React from 'react';
import "./Profile.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostForm from './ProfilePostForm/ProfilePostForm';

function Content() {
    return (
        <div className="profile">
            <ProfileInfo />
            <ProfilePostForm />
        </div>
    )
}

export default Content;
