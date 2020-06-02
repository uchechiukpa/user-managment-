import React, { useState, useEffect,useParams } from 'react';
import axios from 'axios';
import './EditUser.css';
import { useHistory } from "react-router-dom";

function OneUserProfile({ match }) {
    
    let history = useHistory();
    // const [users, setUsers] = useState({})
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        username: '',
        country: '',
        bio: '',
        cloudinary_id: '',
        image_url: ''
    }) 

    // cloudinary.uploader.explicit("https://res.cloudinary.com/deasaxdzz/image/upload/v1590955674/uchechi/images.jpg", { type: "fetch", invalidate: true }, function (users) {
    //     console.log(result)
    // });
    // const { fullname, email, username, country, bio, cloudinary_id, image_url } = user
    // const onInputChange = e => {
    //     setUser({ ...user, [e.target.name]: e.target.value });
    //  }
   
    useEffect(() => {
        axios.get(`http://localhost:5000/users/${match.params.id}`)
            .then(res => {
                setUser(res.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${match.params.id}`, user)
            .then(res => {
               console.log(res.data)
            })
            .catch(err => {
                console.log(err, "failed");
            })
        history.push(`/OneUserProfile/${match.params.id}`)
    }

    // const loadUser = async () => {
    //     const result = await axios.get(`http://localhost:5000/users/${match.params.id}`)
    //     await setUser(result.data);
    //     console.log(result.data)
    // };
        
       
            // .then(res => {
            //     console.log(res.data)
            //     setResult(res.data)
            // })
            // .catch(err => {
            //     console.log(err, "failed");
            // })
 
    // const [Image, setImage] = useState(user.image_url);
    // console.log(Image)
    const uploadImage = async e => {
        const reader = new FileReader();
        reader.onload = async () => {
            if (reader.readyState === 2) {
                await setUser({ image_url: reader.result });
            }
        }
        reader.readAsDataURL(e.target.files[0])


        const files = e.target.files[0]
        const data = new FormData()
        data.append('file', files)
        data.append('upload_preset', 'uchechi')


        axios.post('https://api.cloudinary.com/v1_1/deasaxdzz/image/upload', data

        )
            .then(res => {
                setUser({ ...user, cloudinary_id: res.data.asset_id, image_url: res.data.secure_url })
            })
            .catch(err => console.log(err));

    }








    return (
        <>
            <div className='container-fluid p-0'>
                <div className=" d-flex row w-100 h-100 m-0">
                    <div className="col-6 bg-light left d-flex justify-content-end p-0 align-items-center" >
                        <div className='card w-50 h-50 bbb'>
                            <div className='card-body p-0 '>

                                {/* <div className='d-flex flex-row'> */}
                                    <img src={user.image_url} className='h-100 w-100' />
                                <label htmlFor='input' clasName='image-upload mb-3'>

                                    <i className='material-icons  d-flex flex-row justify-content-end '  style={{ color: 'black' }}>add_photo_alternate</i>
                                    </label>
                                    <input type='file' className='mt 2' id='input' name='image-upload' accept="image/*" style={{ display: 'none' }} onChange={uploadImage} />
                                {/* </div> */}
                              
                            </div>

                        </div>
                    </div>
                    <div className='col-6 right d-flex justify-content-start p-0 align-items-center ' >
                        <div className='card w-50 h-50 them bb rounded'>
                            <div className='card-body text-center mt-3'>
                                <span className='text-font pl-2 ' style={{ fontSize: '2rem' }}>
                                    <input type='text' value={user.fullname} onChange={e => setUser({ ...user, fullname: e.target.value })} />
                                </span>
                                {/* <span className='text-font' style={{ fontSize: '2rem' }}>{users.fullname}</span> */}
                                <div className='d-flex flex-column text-left'>
                                    <span className='span-inline text-font-style mt-3'>
                                        <i className="fas fa-user-ninja"></i>
                                        <span className='pl-2'>
                                            <input type='text' value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
                                        </span>
                                        {/* <span className='pl-2'>{users.username} uchechi.</span> */}

                                    </span>
                                    <span className='span-inline text-font-style mt-2'>
                                        <i className="fas fa-envelope"></i>
                                        <span className='pl-2'>
                                            <input type='text' value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}/>
                                        </span>
                                        
                                        {/* <span className='pl-2'>{users.email} ukpauchechi@gmail.com</span> */}

                                    </span>
                                    <span className='span-inline text-font-style mt-2'>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className='pl-2'>
                                            <input type='text' value={user.country} onChange={e => setUser({ ...user, country: e.target.value })}/>
                                        </span>
                                        {/* <span className='pl-2'>{users.country}Nigera</span> */}
                                    </span>
                                    <span className='span-inline text-font-style mt-4 irt pl-3'>
                                        <span>
                                            <textarea type='text' value={user.bio} onChange={e => setUser({ ...user, bio: e.target.value })}/>
                                        </span>
                                        
                                    </span>
                                </div>
                                {/* <div className='d-flex flex-row justify-content-center mt-3'>
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

                                </div> */}
                                <div className='d-flex flex-row justify-content-end mt-3'>
                                    
                                        <button className='style-button' onClick={onSubmit}>Done</button>
                                    
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