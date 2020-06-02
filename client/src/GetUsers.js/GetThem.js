import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import './GetThem.css'

function GetThem(props) {
    const [userdatas, setUserdata] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                
                setUserdata(res.data)
                // console.log(userdata)
            })
            .catch(err => {
            console.log(err,"failed");
            
        })
    }, []);
    // console.log(userdatas[0])
    return (
        <Fragment>
            <header className='head' style={{height: '10rem' }}>
                {/* <h1>hbybhbg gfcfc</h1> */}
            </header>
            <div className='div-color'>
            <ul>
                {
                    userdatas.map(userdata => <li key={userdata.name_id} className='list-unstyled'>
                        <div className='mt-5'>

                            <div className='displaynowcontainer'>
                                <div className='displaynow pt-2 pl-1 mb-4  rounded'>

                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className='displayherecontainer'>
                                                <div className='displayhere shadow bg-white rounded'  >
                                                    <img src={userdata.image_url} style={{ maxHeight: '100%', height: '8rem', width: '10rem', maxWidth: '100%' }} />
                                                </div >
                                            </div>


                                        </div>
                                        <div className='col-8'>
                                            <div className='row'>
                                                <div className='mt-4 col-8'>
                                                <p className='name-font'>{userdata.fullname}.</p>
                                                <p className='name-font'>{userdata.country}.</p>
                                                <p className='name-font'>{userdata.email}.</p>
                                                </div>
                                                <div className='d-flex pr-3 justify-content-end align-items-end col-3'>
                                                <Link to={`/UsersProfile/${userdata.name_id}`}>
                                                    <button className='btn btn-primary'>~Profile</button>
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div> 
                    </li>
                    )
                }
            </ul>
            </div>
        </Fragment>
    );
}

export default GetThem;