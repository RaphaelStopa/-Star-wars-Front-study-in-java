// import './Login.css';
// import {Link, Navigate} from 'react-router-dom'
// import { useState } from 'react';
// import React from 'react';
// import type { SyntheticEvent } from 'react'


// function CreateAccount() {

//   const[login, setLogin] = useState('');
//   const[cpf, setCpf] = useState('');
//   const[email, setEmail] = useState('');
//   const[password, setPassword] = useState('');
//   const[redirect, setRedirect] = useState(false);

 


//   const submit = async (e: SyntheticEvent) => {
//     e.preventDefault();

//     await fetch('http://localhost:8080/api/register', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         login,
//         cpf,
//         email,
//         password
//       })
//     })
//     setRedirect(true)
//   }

//   if(redirect) {
//     return <Navigate replace to="/login" />
//   }


//     return (
//       <div className="wrapper">
//     <div id="formContent">
//       <h2 className="inactive underlineHover" ><Link to='/login'>Sign In</Link> </h2>
//       <h2 className="active" ><Link to='/create-account'>Sign Up</Link> </h2>
//       <div className="In">
//         <img src="../../../assets/img/icon.png" id="icon" alt="User Icon" />
//       </div>
//       <form onSubmit={submit}>
//         <input type="text" id="username" className="In" name="username" placeholder="Login" required onChange={e=> setLogin(e.target.value)}></input>
//         <input type="text" id="username" className="In" name="username" placeholder="Email" required onChange={e=> setEmail(e.target.value)}></input>
//         <input type="text" id="username" className="In" name="username" placeholder="CPF" required onChange={e=> setCpf(e.target.value)}></input>
//         <input type="text" id="password" className="In" name="password" placeholder="Password" required onChange={e=> setPassword(e.target.value)}></input>
//         <input type="submit" className="In" value="Log In" >
//         </input>
//       </form>
//       <div id="formFooter">
//         <a className="underlineHover" href="#">Esqueceu a senha?</a>
//       </div>
//     </div>
//   </div>
//     );
//   }

  
//   export default CreateAccount;

  
  // https://www.youtube.com/watch?v=OUP-urBy1k4


//   function* handleRegister(action: ReturnType<typeof registerRequest>) {
//     try {
//         const result: AxiosResponse<Authentication> = yield call(registerApi.registerFree, action.payload);

//         if (result.status !== 201) {
//             const errorMessage: string = result.status === 401 ? 'Cannot register this user' : 'An unknown error occured.';
//             yield put(registerError(errorMessage));
//             return;
//         } else {
//             yield put(registerSuccess());
//             return;
//         }
//     } catch (err) {
//         if (err instanceof Error && err.stack) {
//             yield put(registerError(err.stack));
//         } else {
//             yield put(registerError('An unknown error occured.'));
//         }
//     }
// }
