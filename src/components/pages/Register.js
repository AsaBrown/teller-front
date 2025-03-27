// src/components/Login.js
import React, { useState } from 'react';
import '../../styles/login.css';
import { Email } from '@mui/icons-material';

const Login = () => {

    const doSiteLogin = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/register`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName : document.getElementById('firstName').value,
                lastName : document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                username: document.getElementById('username').value,
            })
        }).then(response => response.text()).then(body => {
            console.log(body);
            //redirect to login
        });
    }

    return (

        
        <form id='login' onSubmit={doSiteLogin}>
            <input
                type="text"
                id="firstName"
                placeholder="First Name"
            />
            <input
                type="text"
                id="lastName"
                placeholder="Last Name"
            />
            <input
                type="email"
                id="email"
                placeholder="Email"
            />
            <input
                type="password"
                id="password"
                placeholder="Password"
            />
            <input
                type="text"
                id="username"
                placeholder="Username"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
