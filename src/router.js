import {Routes, Route} from 'react-router-dom'
import CreateAccount from './layout/account/CreateAccount.tsx';
import Login from './layout/account/Login.tsx';


export default function NavRoute() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login/>} ></Route>
        <Route exact path="/create-account" element={<CreateAccount/>} ></Route>
      </Routes>
    );
  }