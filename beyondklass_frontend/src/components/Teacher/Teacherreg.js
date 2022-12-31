import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios  from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/teacher/';
function Teacherregister() {
    const [teacherData, setteacherData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'status': ''
    });

    const handleChange = (event) => {
        setteacherData({
            ...teacherData,
            [event.target.name]: event.target.value,
        });
    }

    const submitForm=()=> {
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name);
        teacherFormData.append("email", teacherData.email);
        teacherFormData.append("password", teacherData.password);
        teacherFormData.append("mobile_no", teacherData.mobile_no);
        teacherFormData.append("qualification", teacherData.qualification);
        teacherFormData.append("skills", teacherData.skills);

        try {
            axios.post(baseUrl, teacherFormData).then((response,data) => {
                setteacherData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile_no': '',
                    'skills': '',
                    'status': 'success'
                });
            });
        } catch (error) {
            console.log(error);
            setteacherData({ 'status': 'error' });
        }
       
    };


    useEffect(() => {
        // console.log(teacherData);
        document.title = 'teacher register'
    })

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    {teacherData.status=='success' && <p className='text-sucess'>Thanks for registering</p>}
                    {teacherData.status=='error' && <p className='textdanger'>Fail to register</p>}
                    <div className='card'>
                        <h5 className='card-header text-start'>Teacher Register</h5>
                        <div className='card-body'>
                            <form className='text-start'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input onChange={handleChange} name='full_name' type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input onChange={handleChange} name='email' type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input onChange={handleChange} name='password' type="password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Qualification</label>
                                    <input onChange={handleChange} name='qualification' type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Mobile No</label>
                                    <input onChange={handleChange} name='mobile_no' type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Skills</label>
                                    <textarea onChange={handleChange} name='skills' className="form-control" ></textarea>
                                    <div id="emailHelp" className="form-text">C++,Python,Java.</div>

                                </div>

                                <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );

}

export default Teacherregister;