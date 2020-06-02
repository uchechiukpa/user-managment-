import React, { Fragment } from 'react';


function Background(props) {
    return (
        <Fragment>
            <div className='col-4 d-flex flex-column text-center align-self-center'>
                <div>
                    <div>
                        <i className="icon-group icon-4x" style={{ color: 'white' }}></i>
                    </div>
                    
                    <h1 style={{ color: 'white' }} className = 'h1'>Welcome</h1>
                    <p style={{ color: 'white' }} className = 'p'>You are 30 mins away from seeing and <br />
                    connecting to your lost friends</p>

                    <button className='btn text-center mt-5'> login</button>
                </div>
                </div>
            
        </Fragment>
    );
}

export default Background;