import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavRoute from './router';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <div className="main-bar">
        <nav>
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" className="checkbtn">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="logo-header">
                <a href="#">RaviWeb</a>
            </div>
            <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Our Gallery</a></li>
                <li><a href="#">Enquiry</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>

       
    </div>
    <Router>
    <NavRoute></NavRoute>
    </Router>

    </Fragment>

  );
}

export default App;
