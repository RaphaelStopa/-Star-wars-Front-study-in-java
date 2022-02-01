import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-bar">
        <nav>
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" class="checkbtn">
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

  );
}

export default App;
