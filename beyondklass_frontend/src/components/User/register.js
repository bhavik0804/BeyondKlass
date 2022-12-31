
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
function Register(){
    return(
        <div className='container mt-4'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <h5 className='card-header text-start'>User Register</h5>
                    <div className='card-body'>
                        <form className='text-start'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Password</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Qualification</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Interest</label>
                                <textarea  className="form-control" ></textarea>
                                <div id="emailHelp" class="form-text">C++,Python,Java.</div>
                                
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

export default Register;