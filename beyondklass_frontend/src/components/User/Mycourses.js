import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Sidebar from './sidebar';
function Mycourses() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <Sidebar />
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Created by</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>Web developer</td>
                                    <td><Link to='/'>Lucifer</Link></td>
                                    <td>
                                        <button type="button" className="btn btn-dark btn-sm active">Delete</button>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    );
}

export default Mycourses;