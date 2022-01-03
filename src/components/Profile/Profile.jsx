import React from 'react';
import "./Profile.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostForm from './ProfilePostForm/ProfilePostForm';
import ProfilePostItem from './ProfilePostItem/ProfilePostItem';

function Content() {
    return (
        <div className="profile">
            <ProfileInfo />
            <ProfilePostForm />
            <ProfilePostItem text="My first Post" />
            <ProfilePostItem text="My second Post" />
        </div>
    )
}

export default Content;
