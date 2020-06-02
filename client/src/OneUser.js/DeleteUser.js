import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import './EditUser.css';
import { useHistory } from "react-router-dom";

function OneUserProfile({ match }) {

    let history = useHistory();
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:5000/users/${match.params.id}`)
            .then(res => {
            })
            .catch(err => {
                console.log(err, "failed");
            })
        history.push('https://google.com')
    }

}

export default OneUserProfile;