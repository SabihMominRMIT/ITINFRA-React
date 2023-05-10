import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

const Registeration=()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, email, password);
    fetch('http://localhost:5000/api/register',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    })
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log('login submitted:', name, email, password);
    fetch('http://localhost:5000/api/login',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
  };
  return (
    <div className='ParentDiv'>
    <div className='loginParent'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          className='loginInput'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='loginInput'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='loginInput'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" primary className='loginButton'>
          Register
        </button>
        </form>
    </div>
    <div className='loginParent'>
        <h2>Register</h2>
        <form onSubmit={loginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='loginInput'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='loginInput'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" primary className='loginButton'>
          login
        </button>
        </form>
    </div>
    </div>

  )
}

export default Registeration;
