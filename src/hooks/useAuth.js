import { UserContext } from './UserContext';
import { useContext, useState } from 'react';

export default function useAuth() {
    const { setUser } = useContext(UserContext);
    const [ error, setError ] = useState(null);

    //todo
    //const setUserContext

    const registerUser = async (data) => {
        const { firstName, lastName, email, password, username } = data;
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
                email: email,
                password: password,
                username: username
            })
        }).then(response => response.text()).then(body => {
            console.log(body);
            //redirect to login
        })

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
                    email: email,
                    password: password
                })
            }).then(response => response.text()).then(body => {
                console.log(body);
                // window.location.replace(body);
                // store jwt token in cookies
            });
        }

        return {
            registerUser,
            loginUser,
            error
        }
    };

}