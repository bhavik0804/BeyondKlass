import React, { Component } from 'react';

import TeacherSidebar from './TeacherSidebar';
import {useEffect} from 'react';

function TeacherDashboard() {
    useEffect(()=>{
        document.title='teacher-dashboard';
    });
    return (
        <div className='container mt-4'>
            <div className='row'>
                <TeacherSidebar /> 
            </div>
        </div>
    );

}

export default TeacherDashboard;