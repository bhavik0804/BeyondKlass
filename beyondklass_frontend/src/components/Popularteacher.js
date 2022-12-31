import React from "react";
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function Popularteacher(){
    const [teacher,setTeacher]=useState(null);
    useEffect(()=>{
        axios.get(baseUrl+'/teacher/').then((response)=>{
            console.log('response.data');
        });   
    },[] );
    return(
        <div className='container mt-4'>
            <h3 className='pb-1 mb-4'>Popular Teacher</h3>
            <div className='row'>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>

                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="teacherlogo.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='float-start'>Rating:3.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Popularteacher;