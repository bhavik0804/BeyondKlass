import { Link } from 'react-router-dom';
import React, { Component } from 'react';

function Login() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h5 className='card-header text-start'>User Login</h5>
                        <div className='card-body'>
                            <form className='text-start'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input"  />
                                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>

                        </div>
                    </div>
                </div>

            </div>

        
    );

}

export default Login;