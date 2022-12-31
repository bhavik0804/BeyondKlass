import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Sidebar from './sidebar';
function Changepw() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <Sidebar />
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Change password</h5>
                        <div class="mb-3 row py-3">
                            <label for="inputPassword" class="col-sm-2 col-form-label">New Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <hr />
                        <div className='mb-2 align-self-center'>
                        <button className='btn btn-primary'>Change Password</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default Changepw;