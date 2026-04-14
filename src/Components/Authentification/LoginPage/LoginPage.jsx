import { FaEnvelope, FaLock, FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../UI/Logo/Logo";
import "./LoginPage.css";

export default function LoginPage({ bigText, smallText, onConnectClick }) {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className="loginWrapper">
      <div className="rightSide">
        <h1 className="welcomeBack">Welcome back !</h1>
        <p className="smallText">
          Ready to resume your cosmic voyage ? <br /> Enter your login details
        </p>
      </div>

      <div className="seperatorLine"></div>

      <div className="leftSide">
        <Logo
          size="small"
          variant="login"
          style={{ marginTop: 50, transform: "scale(0.6)", marginBottom: -30 }}
        />

        <h1 className="bigTextLogin">{bigText}</h1>
        <p className="smallTextLogin">{smallText}</p>

        <div className="inputGroupEmail">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            className="inputField inputFieldEmail"
          />
        </div>
        <br />

        <div className="inputGroupPasswd">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            className="inputField inputFieldPasswd"
          />
        </div>

        <Link to="/home">
          <button className="btn btn-dark" onClick={onConnectClick}>
            Connect
          </button>
        </Link>

        <div className="iconContainer">
          <FaFacebook className="FB" />
          <FaGoogle className="Google" />
        </div>
      </div>
    </div>
  );
}
