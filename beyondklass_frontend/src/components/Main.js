import React from 'react';
import {Routes as Switch ,Route} from 'react-router-dom';

//Home page components
import Footer from './footer';
import Header from './Header';
import Home from './Home';
import Aboutus from './About';
import Coursedetail from './Coutsedetail';
import TeacherDetail from './Teacherdetail';
import Courselist from './Courselist';
import Popularcourse from './User/Popularcourse';
import Allcourses from './Allcourses';
import Coursecategory from './coursecatogory';
import Popularteacher from './Popularteacher';

//user dashboard
import Login from './User/login';
import Register from './User/register';
import Dashboard from './User/Dashboard';
import Mycourses from './User/Mycourses';
import Favcourses from './User/favoritecourses';
import Recommendcourses from './User/Recommend';
import Profilesetting from './User/Profilesetting';
import Changepw from './User/Changepw';

//teacher dashboard
import Teacherlogin from './Teacher/TeacherLog';
import Teacherregister from './Teacher/Teacherreg';
import TeacherDashboard from './Teacher/TeacherDB';
import Teachermycourses from './Teacher/Tmycourses'; 
import Teacheraddcourses from './Teacher/Taddcourses';
import TeacherUser from './Teacher/Userlist';
import TeacherProfilesetting from './Teacher/Tprofilesetting';
import TeacherChangepw from './Teacher/Tchangepw';



function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<Aboutus />} />
        <Route path='/all-courses' element={<Allcourses />} />
        <Route path='/detail/:course_id' element={<Coursedetail />} />
        <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />} />
        <Route path='/user-login' element={<Login />} />
        <Route path='/user-register' element={<Register />} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
        <Route path='/teacher-login' element={<Teacherlogin />} />
        <Route path='/teacher-register/' element={<Teacherregister />} />
        <Route path='/teacher-mycourses' element={<Teachermycourses />} />
        <Route path='/teacher-addcourses' element={<Teacheraddcourses />} />
        <Route path='/user-list' element={<TeacherUser />} />
        <Route path='/teacher-profilesetting' element={<TeacherProfilesetting />} />
        <Route path='/teacher-changepassword' element={<TeacherChangepw />} />
        <Route path='/user-Dashboard' element={<Dashboard />} />
        <Route path='/my-courses' element={<Mycourses />} />
        <Route path='/recommended-courses' element={<Recommendcourses />} />
        <Route path='/favorite-courses' element={<Favcourses />} />
        <Route path='/profile-setting' element={<Profilesetting />} />
        <Route path='/change-password' element={<Changepw />} />
        <Route path='/course-list' element={<Courselist />} />
        <Route path='/popular-course' element={<Popularcourse />} />
        <Route path='/category/:category_slug' element={<Coursecategory />} />
        <Route path='/popular-teacher' element={<Popularteacher />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;