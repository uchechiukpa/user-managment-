import React, {useState, Fragment } from 'react';
import './Forms.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";




function MainForm(props) {
    let history = useHistory();
   
    const [Image, setImage] = useState('https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg');
    
        const [profile, setResult] = useState({
            fullname: '',
            email: '',
            username: '',
            country: '',
            bio: '',
            cloudinary_id: '',
            image_url: ''
        }) 
    const [userInfo, setUserInfo] = useState(0)



    const uploadImage = async e => {
        const reader = new FileReader();
        reader.onload = async () => {
            if (reader.readyState === 2) {
                 await setImage(reader.result)
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
                setResult({ ...profile, cloudinary_id: res.data.asset_id, image_url: res.data.secure_url })
            })
            .catch(err => console.log(err));
        
    } 
    
    
    const uploadProfile = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users', profile)
            .then(async function(res) {
                await setUserInfo(res.data.name_id + userInfo)
                history.push(`/OneUserProfile/${res.data.name_id}`)
               
            })
            .catch(err => {
                console.log(err)
            })

    }
 
        
   
        
    return (
        <Fragment>
            <div className='col-8 aligncenter'>
                 <div className = 'displayblockcontainer'> 
                    <div className='displayblock'>
                        <form> 
                            <div className='d-flex justify-content-center '>
                                <div>
                                    <img className=' d-flex justify-content-center align-items-center border border-white  mt-4' src={Image} style={{ width: '8rem', height: '8rem', borderRadius: '2rem' }} />
                                    <label htmlFor='input' clasName='image-upload'>
                                        <i className='material-icons' style={{ color: 'black' }}>add_photo_alternate</i>
                                    </label>
                                    <input type='file' className='mt 2' id='input' name='image-upload' accept="image/*" style={{ display: 'none' }} onChange={uploadImage}/>
                                    
                                </div>
                               
                               

                            </div> 
                            <div className='container-fluid ' >
                                <div className='row justify-content-center mt-5'>
                                    <div className='col-4'>
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label">Fullname:</label>
                                        <input type="text" name="name" className="form-control" onChange={e => setResult({ ...profile, fullname: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label" >Email-Address:</label>
                                    <input type="text" name="name" className="form-control" onChange={e => setResult({ ...profile, email: e.target.value })} />
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label" >Username:</label>
                                    <input type="text" name="name" className="form-control" onChange={e => setResult({ ...profile, username: e.target.value })}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label">Country:</label>
                                    <input type="text" name="name" className="form-control" onChange={e => setResult({ ...profile, country: e.target.value })} />
                                        </div>
                                    </div>
                                    < div className='col-8' >
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label">Bio:</label>
                                            <textarea type="text" name="name" className="form-control" onChange={e => setResult({ ...profile, bio: e.target.value })}></textarea>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='d-flex justify-content-center'>
                                {/* <Link to={`/OneUserProfile/${userInfo.name_id}`} > */}
                                    <button type='button' className='btn btn-primary' onClick={uploadProfile}>Create user </button>
                                {/* </Link> */}
                            </div>
                        </form>
                </div>
                </div>
             </div>
        </Fragment>
      
    );
}

export default MainForm;