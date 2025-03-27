import { useHistory } from 'react-router-dom'
import { UserContext } from './UserContext';

export default function useAuth() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [ error, setError ] = useState(null);

    //todo
    //const setUserContext

    

}