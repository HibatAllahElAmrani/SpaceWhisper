import { Link } from "react-router-dom";
import Logo from "./UI/Logo/Logo"; 

export default function WelcomePage({ bigText, smallText, onLoginClick }) {
  return (
    <div className="homeWrapper">
      <Logo size="large" variant="welcome" style={{ marginTop: 130}}/>
      
      <h1 className="bigText">
        {bigText}
      </h1>
      <p className="smallText">
        {smallText}
      </p>
      
      <div className="buttons">
        <Link to="/login">
          <button className="btn btn-light" onClick={onLoginClick}>
            Log In
          </button>
        </Link>
        
        <Link to="/create-acc">
          <button className="btn btn-dark">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}