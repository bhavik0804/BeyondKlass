import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
function TeacherDetail() {
    useEffect(()=>{
        document.title='teacher detail';
    });
    return (
        <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src='/logo512.png' className='img-thumbnail' alt='...' />
            </div>
            <div className='col-8 text-start'>
                <h3>Joh Doe</h3>
                <p>
                    If you are looking for several courses that you can opt for after your primary school studies this is the right place for you. You will find the right course that you can study from the list of options available. We are sure you will not regret the course you have chosen as you will get complete details related to the particular course. Courses under Various streams are arranged and you can choose your dream ones and study accordingly.
                </p>
                <p className='fw-bold'>Skills:<Link to="/category/php">Php</Link>,<Link to="/category/php">Python</Link>,<Link to="/category/php">Java</Link></p>
                <p className='fw-bold'>Recent Course: <Link to="/">Php</Link> </p>
                <p className='fw-bold'>Student Enrolled: 400</p>
                <p className='fw-bold'>Rating: 4.5/5</p>
            </div>


            <div className='card mt-4 text-start'>
                <div className='card-header'>
                    <h5>Course list</h5>
                </div>
                <div className='list-group list-group-flush'>
                    <Link to='/' className='list-group-item list-group-item-action'>Php course 1</Link>
                    <Link to='/' className='list-group-item list-group-item-action'>Php course 2</Link>
                    <Link to='/' className='list-group-item list-group-item-action'>Python 1</Link>
                    <Link to='/' className='list-group-item list-group-item-action'>Python 2</Link>
                    <Link to='/' className='list-group-item list-group-item-action'>React js 1</Link>
                    <Link to='/' className='list-group-item list-group-item-action'>React js 2</Link>
                    <Link to='/' className='list-group-item list-group-item-action'>Node js 1</Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TeacherDetail;