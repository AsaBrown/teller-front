import { UserContext } from './UserContext';
import { useContext, useState } from 'react';

export default function useAuth() {
    const { setUser } = useContext(UserContext);
    const [ error, setError ] = useState(null);

    //todo
    //const setUserContext
    const setUserContext = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.text()).then(body => {
            console.log(body);
            //setUser
            //redirect to login
        });
    }

    const registerUser = async (data) => {
        const { firstName, lastName, email, password } = data;
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/register`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName : firstName,
                lastName : lastName,
                username: email,
                password: password
            })
        }).then(response => response.text()).then(body => {
            console.log(body);
            //redirect to login
        })
    };

    const loginUser = async (data) => {
        const { email, password } = data;
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/authenticate`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        }).then(response => response.text()).then(body => {
            setUserContext();
            console.log("LOGIN" + body);
        });
    }

    return {
        registerUser,
        loginUser,
        error
    }
}