// src/components/Login.js
import React, { useState } from 'react';
import '../../styles/login.css';
import { Email } from '@mui/icons-material';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const doSiteLogin = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/authenticate`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: document.getElementById('loginEmail').value,
                password: document.getElementById('loginPassword').value
            })
        }).then(response => response.text()).then(body => {
            console.log(body);
            // window.location.replace(body);
            // store jwt token in cookies
        });
    }

    return (

        
        <form id='login' onSubmit={doSiteLogin}>
            <input
                type="email"
                id="loginEmail"
                placeholder="Email"
            />
            <input
                type="password"
                id="loginPassword"
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;