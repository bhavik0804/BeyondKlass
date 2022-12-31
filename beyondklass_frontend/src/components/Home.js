import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import {useEffect} from 'react';

function Home() {
  useEffect(()=>{
    document.title='Home-page';
});
  return (
    <div className='container mt-4'>
      <h3 className='pb-1 mb-4'>Latest Courses <Link to='/course-list' className='float-end'>See all</Link></h3>
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
      </div>

      <h3 className='pb-1 mb-4 mt-5'>Popular Courses <Link to='/popular-course' className='float-end'>See all</Link></h3>
      <div className='row'>
        <div className='col-md-3 mb-2'>
          <div className="card">
            <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title">Course title</h5>
              <a href="#" className="btn btn-primary">Detail</a>
            </div>
            <div className='card-footer'>
              <div className='title'>
                <span className='float-start'>Rating:3.5/5</span>
                <span className='float-end'>View:4000</span>
              </div>
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
            <div className='card-footer'>
              <div className='title'>
                <span className='float-start'>Rating:3.5/5</span>
                <span className='float-end'>View:4000</span>
              </div>
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
            <div className='card-footer'>
              <div className='title'>
                <span className='float-start'>Rating:3.5/5</span>
                <span className='float-end'>View:4000</span>
              </div>
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

            <div className='card-footer'>
              <div className='title'>
                <span className='float-start'>Rating:3.5/5</span>
                <span className='float-end'>View:4000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className='pb-1 mb-4 mt-5'>Teacher <Link to='/popular-teacher' className='float-end'>See all</Link></h3>
      <div className='row'>
        <div className='col-md-3 mb-2'>
          <div className="card">
            <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <a href="#"><h5 className="card-title">Teacher Name</h5></a>

            </div>
          </div>
        </div>
        <div className='col-md-3 mb-2'>
          <div className="card">
            <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <a href="#"> <h5 className="card-title">Teacher Name</h5></a>

            </div>
          </div>
        </div>

        <div className='col-md-3 mb-2'>
          <div className="card">
            <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <a href="#"> <h5 className="card-title">Teacher Name</h5></a>

            </div>
          </div>
        </div>

        <div className='col-md-3 mb-2'>
          <div className="card">
            <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <a href="#"><h5 className="card-title">Course title</h5></a>

            </div>
          </div>
        </div>
      </div>

      <h3 className='pb-1 mb-4 mt-5'>Student Testinomy</h3>
      <div id="carouselExampleControls" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure>
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-end">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>

  );
}

export default Home;