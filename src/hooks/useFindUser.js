import {useState, useEffect} from 'react';
import useAuth from './useAuth';

export default function useFindUser() {
    const [user, setUser] = useState(null);
    const[isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function findUser() {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/info`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => console.log(response));
        }
        findUser();
    });

    return {
        user,
        setUser,
        isLoading
    }
}