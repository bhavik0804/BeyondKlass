import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import TeacherSidebar from './TeacherSidebar';
function Teacheraddcourses() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <TeacherSidebar />
                <section className='col-md-9'>
                    <div className='card'>
                        <form>
                            <h5 className='card-header'>Add Courses</h5>
                            <div class="mb-3 text-start px-2">
                                <label class="form-label">Title</label>
                                <div className='col-sm-12'>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                                </div>
                            </div>
                            <div class="mb-3 text-start  px-2">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3 text-start  px-2">
                                <label class="form-label">Course Video</label>
                                <div class="mb-3">

                                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                                </div>
                            </div>
                            <div class="mb-3 text-start px-2">
                                <label for="exampleFormControlTextarea1" class="form-label">Teachnologies</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <hr />
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

export default Teacheraddcourses;