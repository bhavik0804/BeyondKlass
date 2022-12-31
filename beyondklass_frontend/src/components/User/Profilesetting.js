import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Sidebar from './sidebar';
function Profilesetting() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <Sidebar />
                <section className='col-md-9'>
                    <div className='card'>
                        <form>
                        <h5 className='card-header'>Profile Setting</h5>
                        <div className="mb-3 row py-2">
                            <label for="staticEmail" className="col-sm-2 col-form-label text-end">Full Name</label>
                            <div className="col-sm-9">
                                <input type="text"  className="form-control" id="staticEmail"  />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label text-end">Email</label>
                            <div className="col-sm-9">
                                <input type="text"  className="form-control" id="staticEmail"  />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label text-end">Profile Photo</label>
                            <div className="col-sm-9">
                                <input type="file" className="form-control" id="Phoro" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label text-end">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label text-end">Interest</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputPassword" />
                            </div>
                        </div>
                       
                        <hr />
                        <div className='mb-2 align-self-center'>
                        <button className='btn btn-primary'>Update</button>
                        </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default Profilesetting;