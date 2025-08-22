import { FaEnvelope, FaLock, FaFacebook } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa"; 
import { Link } from 'react-router-dom';
import "./LoginPage.css";

export default function LoginPage({ bigText, smallText, onConnectClick}) {
  return (
    <div className="loginWrapper">
    
      <div className="rightSide">
        <h1 className="welcomeBack"> 
          Welcome back ! 
        </h1>
        <p className="smallText">
          Ready to resume your cosmic voyage ? <br /> Enter your login details
        </p>
      </div>

      <div className="seperatorLine"></div>

      <div className="leftSide">
        <div className="logoLogin">
          <img
            src="/LogoIMG.png"
            alt="Logo Img"
            className="logoImgLogin"
          />
          <h1 className="SpaceWhisperLogin">    
            SpaceWhisper 
          </h1>
        </div>

        <h1 className="bigTextLogin"> 
          {bigText}
        </h1>
        <p className="smallTextLogin"> 
          {smallText} 
        </p>


        <div className='inputGroupEmail'>

          <FaEnvelope className='icon' />
          <input type="email" placeholder="Email" className="inputField inputFieldEmail"/>

        </div>
        <br/>

        <div className='inputGroupPasswd'>

          <FaLock className='icon'/>
          <input type="password" placeholder="Password" className="inputField inputFieldPasswd"/>

        </div>

        <Link to="/home">
          <button className="btn btn-dark" onClick={onConnectClick}> 
            Connect
          </button>
        </Link>
        

        <div className='iconContainer'>
          <FaFacebook className='FB'/>
          <FaGoogle className='Google' />
        </div>
      </div>
    </div>
  );
}
