import './Login.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import type { SyntheticEvent } from 'react'
import { Authentication } from '../../model/authentication';
import axios, { AxiosResponse } from 'axios';
import { api } from '../../api/api';
import { authenticate } from '../../api/authentication-api';
import registerApi from '../../api/register-api';
import {login} from '/src/auth/authActions.js'
import allsectorsService from '../../services/allsectors-service';

const AllFilters = ({ setFilterRequest }) =>  {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const nha ={
    email: 'admin@localhost',
    password: 'admin',
    name: '2222'
  }


  const accessToken= 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBsb2NhbGhvc3QiLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJleHAiOjE2NDQ3NzE5OTZ9.in6IeYIAK05bUZ-kFOpySgHPP60VC8VcWdXWHFjB6Zg1AtGwm3CbPpvs9K_91ompKDCVR3sEisJ2cajBNyMcAA'
  const apiUrl= 'http://localhost:8080/api/authenticate'

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
    }

  })

  // allsectorsService.getAllSectors()


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await authAxios.post(apiUrl, nha)

    await authAxios.get('http://localhost:8080/api/force-users')

//     axios.get('http://localhost:8080/api/force-users', {
//  headers: {
//    Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
//  }
// })


    // registerApi
    

    // const nho = axios.post('http://localhost:8080/api/authenticate', nha)

    // const nhf = api

    //  const nha = await fetch('http://localhost:8080/api/authenticate', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // })
    // console.log(nho)
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
  