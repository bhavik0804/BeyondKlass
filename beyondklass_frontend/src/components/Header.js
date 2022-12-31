import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">BeYoNdKlass</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/#">Home</Link>
                        <Link className="nav-link" to="/all-courses">Courses</Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Teacher
                            </a>
                        <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" aria-current="page" to="/teacher-login">Teacher login</Link></li>
                                <li><Link className="dropdown-item" aria-current="page" to="/teacher-register">Teacher register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                        <Link className="nav-link" aria-current="page" to="/About">About us</Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" aria-current="page" to="/user-login">Student login</Link></li>
                                <li><Link className="dropdown-item" aria-current="page" to="/user-register">Student register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/user-Dashboard">Dashboard</Link></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;