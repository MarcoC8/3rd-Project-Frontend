import React, { useState } from 'react'
import axios from 'axios';
import App from '../../App'
import { useNavigate } from 'react-router';

function Signup() {

  const naviagte = useNavigate();

  const [state, setState] = useState({
    email: '',
    name: '',
    password: ''
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const onFormSubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
    .then(axiosResponse => {
      naviagte('/login');
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onFormSubmit}>
        <label>Email</label>
        <input value={state.email} name='email' onChange={updateState} />
        <label>Name</label>
        <input value={state.name} name='name' onChange={updateState} />
        <label>Password</label>
        <input value={state.password} name='password' onChange={updateState} />
        <button>Sign Up</button>
      </form>
    </div>

  )
}

export default Signup;