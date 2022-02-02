import './Login.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import type { SyntheticEvent } from 'react'

import { Authentication } from '../../model/authentication';
import axios, { AxiosResponse } from 'axios';






function Login() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const nha ={
    login: 'biscoito',
    password:'12345',
    cpf: '123532123',
    emial: 'safaifinho@hotmial.com'
  }


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const nho = axios.post('http://localhost:8080/api/authenticate', nha)

    //  const nha = await fetch('http://localhost:8080/api/authenticate', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // })
    console.log(nho)
  }



    return (
      <div className="wrapper">
    <div id="formContent">
    <h2 className="active" ><Link to='/login'>Sign In</Link> </h2>
      <h2 className="inactive underlineHover" ><Link to='/create-account'>Sign Up</Link> </h2>
      <div className="In">
        <img src="../../../assets/img/icon.png" id="icon" alt="User Icon" />
      </div>
      <form onSubmit={submit}>
        <input type="text" id="username" className="In" name="username" placeholder="Email" required onChange={e=> setEmail(e.target.value)}>
        </input>
        <input type="text" id="password" className="In" name="password" placeholder="password" required onChange={e=> setPassword(e.target.value)}>
        </input>
        <input type="submit" className="In" value="Log In" >
        </input>
      </form>
      <div id="formFooter">
        <a className="underlineHover" href="#">Esqueceu a senha?</a>
      </div>
    </div>
  </div>
    );
  }
  
  export default Login;
  