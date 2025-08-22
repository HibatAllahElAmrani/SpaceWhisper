import "./Logo.css";
import { Link } from "react-router";

export default function Logo({ 
  size = "large", // "small", "medium", "large"
  variant = "welcome", // "welcome", "login", "navbar"
  style = {} 
}) {
  return (
    <Link to="/home" className="LogoLink">
      <div className={`logo logo-${size} logo-${variant}`} style={style}>
        <img 
          src="/LogoIMG.png" 
          alt="SpaceWhisper Logo" 
          className="logoImg" 
        />
        <h1 className="SpaceWhisper">
          SpaceWhisper
        </h1>
      </div>

    </Link>
    
  );
}