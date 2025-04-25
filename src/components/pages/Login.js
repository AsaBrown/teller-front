// src/components/Login.js
import React, { useState } from 'react';
import '../../styles/login.css';
import FormInput from '../FormInput';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { registerUser, loginUser, error } = useAuth();

    const { values, handleChange} = useForm({
        initialValues: {
            email: '',
            password: ''
        }
      });

    const doSiteLogin = async (e) => {
        e.preventDefault();
        await loginUser(values);
    }

    return (
        <form id='login' onSubmit={doSiteLogin}>
            <FormInput type={"text"} 
                    placeholder={"Email"}
                    name={"email"}
                    value={values.email}
                    handleChange={handleChange} />
            <FormInput type={"text"} 
                    placeholder={"Password"}
                    name={"password"}
                    value={values.password}
                    handleChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;