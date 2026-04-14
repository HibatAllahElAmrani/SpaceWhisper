import "./Logo.css";
import { Link } from "react-router";

export default function Logo({
  size = "large", // "small", "medium", "large"
  variant = "welcome", // "welcome", "login", "navbar"
  clickable = true, 
  style = {}
}) {
  const logoContent = (
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
  );

  if (!clickable) {
    return logoContent;
  }

  return (
    <Link to="/home" className="LogoLink">
      {logoContent}
    </Link>
  );
}