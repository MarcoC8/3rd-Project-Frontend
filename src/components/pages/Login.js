import {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import App from '../../App'

function Login() {

  const { storeToken, authenticateUser } = useContext(AuthContext); //need to pass in AuthContext

  const naviagte = useNavigate();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const onFormSubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, state)
    .then(axiosResponse => {
      console.log(axiosResponse.data)
      storeToken(axiosResponse.data.authToken);
      authenticateUser();
      naviagte('/about-us');
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