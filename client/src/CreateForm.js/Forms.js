import React from 'react';
import Background from './Background';
import MainForm from './MainForm';
import './Forms.css'

function Forms(props) {
    return (
        <div className='allbackground-color w-100 h-100'>
            <div className='row ml-5 mr-3 w-100 h-100'>
                <Background />
                <MainForm />
            </div>
        </div>
        
    );
}

export default Forms;