import './Login.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
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
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/servicess'>Our Services</Link></li>
            </ul>
        </nav>
    </div>

  );
}

export default NavBar;
