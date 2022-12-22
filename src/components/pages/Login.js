import {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
// import { AuthContext }
import App from '../../App'

function Login() {

  const { storeToken, authenticateUser } = useContext(); //need to pass in AuthContext

  const naviagte = useNavigate();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const updateState = e => ({
    ...state,
    [e.target.name]: e.target.value
  });

  const onFormSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/auth/login', state)
    .then(axiosResponse => {
      storeToken(axiosResponse.data.authToken);
      authenticateUser();
      naviagte('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={onFormSubmit}>
        <label>Email</label>
        <input value={state.email} name ="email" onChange={updateState} />
        <label>Password</label>
        <input value={state.password} name="password" onChange={updateState} />
        <button>Log In</button>
      </form>
    </div>  
    )
}

export default Login;