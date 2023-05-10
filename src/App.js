import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const Registeration=()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, email, password);
  };
  return (
    <div className='ParentDiv'>
    <div className='loginParent'>
        <h2>Register</h2>
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
    </div>
    </div>
  )
}


export default Registeration;
