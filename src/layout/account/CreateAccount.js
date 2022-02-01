import './Login.css';
import {Link} from 'react-router-dom'

function CreateAccount() {
    return (
      <div className="wrapper">
    <div id="formContent">
      <h2 className="inactive underlineHover" ><Link to='/login'>Sign In</Link> </h2>
      <h2 className="active" ><Link to='/create-account'>Sign Up</Link> </h2>
      <div className="In">
        <img src="../../../assets/img/icon.png" id="icon" alt="User Icon" />
      </div>
      <form>
        <input type="text" id="username" className="In" name="username" placeholder="login"  required>
        </input>
        <input type="text" id="password" className="In" name="password" placeholder="password" required>
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
  
  export default CreateAccount;