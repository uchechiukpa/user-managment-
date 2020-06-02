import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OneUserProfile.css'
import { Link } from 'react-router-dom';

function OneUserProfile({ match }) {
    const [user, setUser] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:5000/users/${match.params.id}`)
            .then(res => {
                setUser(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);





    return (
        <>
            <div className='container-fluid p-0'>
                <div className=" d-flex row w-100 h-100 m-0">
                    <div className="col-6 bg-light left d-flex justify-content-end p-0 align-items-center" >
                        <div className='card w-50 h-50 bbb'>
                            <div className='card-body p-0 '>

                                <img src={user.image_url} className='h-100 w-100' />


                            </div>

                        </div>
                    </div>
                    <div className='col-6 right d-flex justify-content-start p-0 align-items-center ' >
                        <div className='card w-50 h-50 them bb rounded'>
                            <div className='card-body text-center mt-3'>
                                <span className='text-font' style={{ fontSize: '2rem' }}>{user.fullname}.</span>
                                <div className='d-flex flex-column text-left'>
                                    <span className='span-inline text-font-style mt-3'>
                                        <i className="fas fa-user-ninja"></i>
                                        <span className='pl-2'>{user.username}.</span>

                                    </span>
                                    <span className='span-inline text-font-style mt-2'>
                                        <i className="fas fa-envelope"></i>
                                        <span className='pl-2'>{user.email}</span>

                                    </span>
                                    <span className='span-inline text-font-style mt-2'>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className='pl-2'>{user.country}</span>
                                    </span>
                                    <span className='span-inline text-font-style mt-4 irt'>
                                        <span>"{user.bio}"</span>
                                    </span>
                                </div>
                                <div className='d-flex flex-row justify-content-center mt-3'>
                                    <div className='pr-3'>
                                        <button className="round"><i className="fab fa-facebook-f"></i></button>
                                    </div>
                                    <div className='pr-3'>
                                        <button className="round"><i className="fab fa-instagram"></i></button>
                                    </div>
                                    <div className='pr-3'>
                                        <button className="round"><i className="fab fa-linkedin-in"></i></button>
                                    </div>
                                    <div className='pr-3'>
                                        <button className="round"><i className="fab fa-twitter"></i></button>
                                    </div>

                                </div>
                                <div className= 'd-flex flex-row justify-content-between mt-3'>
                                    <div>
                                        <Link to={`/EditUser/${user.name_id}`}>
                                            <button className='btn btn-primary style-button'>Edit User</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={`/DeleteUser/${user.name_id}`}>
                                            <button className='btn btn-danger style-button'>Delete User</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={'/Getusers'}>
                                            <button className='btn btn-link'>See Users</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OneUserProfile;