import React from "react";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
function Allcourses() {
    useEffect(()=>{
        document.title='All-Courses';
    });
    return (
        
        <div className="container mt-4">
            <h3 className='pb-1 mb-4'> Courses </h3>
            <div className='row'>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title">Course title</h5>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Allcourses;