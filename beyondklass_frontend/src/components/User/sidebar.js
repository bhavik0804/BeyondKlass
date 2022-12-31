import { Link } from 'react-router-dom';
import React, { Component } from 'react';
function Sidebar() {
    return (
        <aside className='col-md-3 py-1'>
        <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
            <div className='list-group list-group-flush text-start'>
                <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/favorite-courses" className="list-group-item list-group-item-action">Favorite Courses</Link>
                <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recomdended Courses</Link>
                <Link to="/profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
                <Link to="/change-password" className="list-group-item list-group-item-action">Change password</Link>
                <Link to="/user-login" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>
        </aside>
    );
}

export default Sidebar;