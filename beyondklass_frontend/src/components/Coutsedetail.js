import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React from 'react';
function Coursedetail() {
    let { course_id } = useParams();
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src='/logo512.png' className='img-thumbnail' alt='...' />
                </div>
                <div className='col-8 text-start'>
                    <h3>Course detail {course_id}  </h3>
                    <p>
                        If you are looking for several courses that you can opt for after your primary school studies this is the right place for you. You will find the right course that you can study from the list of options available. We are sure you will not regret the course you have chosen as you will get complete details related to the particular course. Courses under Various streams are arranged and you can choose your dream ones and study accordingly.
                    </p>
                    <p className='fw-bold'>Course by:<Link to="/teacher-detail/1">Teacher 1</Link></p>
                    <p className='fw-bold'>Duration: 3 Hour 30 Min</p>
                    <p className='fw-bold'>Rating:4.5/5</p>
                </div>


                <div className='card mt-4 text-start'>
                    <div className='card-header'>
                        <h5>Course Video</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Introduction
                            <span className='float-end'>
                                <span className='me-3'> 1 Hour 30 min</span>
                                <button className='btn btn-sm btn-secondary float-end'data-bs-toggle="modal" data-bs-target="#videoModal"><i class='bi-youtube'></i></button>
                            </span>

                            <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen-xl-down">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <iframe width="400" height="400" src="https://www.youtube.com/embed/1Y51aZAMqTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </li>
                        <li className="list-group-item">Introduction
                            <span className='float-end'>
                                <span className='me-3'> 1 Hour 30 min</span>
                                <button className='btn btn-sm btn-secondary float-end'><i class='bi-youtube'></i></button>
                            </span>
                        </li>
                        <li class="list-group-item">Introduction
                            <span className='float-end'>
                                <span className='me-3'> 1 Hour 30 min</span>
                                <button className='btn btn-sm btn-secondary float-end'><i class='bi-youtube'></i></button>
                            </span>
                        </li>
                        <li class="list-group-item">Introduction
                            <span className='float-end'>
                                <span className='me-3'> 1 Hour 30 min</span>
                                <button className='btn btn-sm btn-secondary float-end'><i class='bi-youtube'></i></button>
                            </span>
                        </li>
                        <li class="list-group-item">Introduction
                            <span className='float-end'>
                                <span className='me-3'> 1 Hour 30 min</span>
                                <button className='btn btn-sm btn-secondary float-end'><i class='bi-youtube'></i></button>
                            </span>
                        </li>
                    </ul>


                </div>
            </div>


            <div className='container mt-4'>
                <h3 className='pb-1 mb-4'>Related Courses</h3>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card">
                            <a href="#"><img src="/logo512.png" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h5 className="card-title">Course title</h5>
                                <a href="#" className="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                                <a href="#" className="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coursedetail;