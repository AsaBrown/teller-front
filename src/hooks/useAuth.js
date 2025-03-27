import { useHistory } from 'react-router-dom'
import { UserContext } from './UserContext';

export default function useAuth() {
    let history = useHistory();
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
                username: username,
            })
        }).then(response => response.text()).then(body => {
            console.log(body);
            //redirect to login
        })

        return {
            registerUser,
            error
        }
    };

}