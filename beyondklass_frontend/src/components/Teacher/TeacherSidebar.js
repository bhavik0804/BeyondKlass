import { Link } from 'react-router-dom';
import React, { Component } from 'react';
function TeacherSidebar() {
    return (
        <aside className='col-md-3 py-1'>
        <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
            <div className='list-group list-group-flush text-start'>
                <Link to="/teacher-mycourses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/teacher-addcourses" className="list-group-item list-group-item-action">Add Courses</Link>
                <Link to="/user-list" className="list-group-item list-group-item-action">My User</Link>
                <Link to="/teacher-profilesetting" className="list-group-item list-group-item-action">Profile Setting</Link>
                <Link to="/teacher-changepassword" className="list-group-item list-group-item-action">Change password</Link>
                <Link to="/" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>
        </aside>
    );
}

export default TeacherSidebar;