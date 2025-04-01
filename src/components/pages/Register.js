// src/components/Login.js
import React, { useState } from 'react';
import '../../styles/login.css';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';
import FormInput from '../FormInput';

const Register = () => {

    const { registerUser, loginUser, error } = useAuth();

    const { values, handleChange} = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: ''
        }
      });

    const doSiteRegister = async (e) => {
        e.preventDefault();
        await registerUser(values);
    }

    return (
        <form id='login' onSubmit={doSiteLogin}>
            <FormInput type={"text"} 
                    placeholder={"First Name"}
                    name={"firstName"}
                    value={values.firstName}
                    handleChange={handleChange} />
            <FormInput type={"text"} 
                    placeholder={"Last Name"}
                    name={"lastName"}
                    value={values.lastName}
                    handleChange={handleChange} />
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
            <FormInput type={"text"} 
                    placeholder={"Username"}
                    name={"username"}
                    value={values.username}
                    handleChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Register;
