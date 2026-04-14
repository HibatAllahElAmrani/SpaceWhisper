import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../UI/Logo/Logo";
import "./CreateAcc.css";

export default function CreateAcc({ bigText, smallText, onConnectClick }) {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className="loginWrapper">
      <div className="rightSide">
        <h1 className="welcomeAboard">Welcome aboard !</h1>
        <p className="smallTextCA">Ready to start your cosmic voyage ?</p>
      </div>

      <div className="seperatorLine"></div>

      <div className="leftSide">
        <Logo
          size="medium"
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

        <div className="passwordInputContainer">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            min="8"
            className="inputField inputFieldPasswd"
          />
        </div>
        <div className="passwordInputContainer">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Confirm password"
            className="inputField inputFieldPasswd"
          />
        </div>

        <Link to="/home">
          <input
            type="submit"
            className="btn btn-dark"
            value="Create Acc"
            onClick={onConnectClick}
          />
        </Link>
      </div>
    </div>
  );
}
