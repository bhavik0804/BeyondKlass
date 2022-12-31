

import React, { Component } from 'react';

import Sidebar from './sidebar';
import {useEffect} from 'react';

function Dashboard() {
    useEffect(()=>{
        document.title='User-Dashboard';
    });
    return (
        <div className='container mt-4'>
            <div className='row'>
                <Sidebar /> 
            </div>
        </div>
    );

}

export default Dashboard;