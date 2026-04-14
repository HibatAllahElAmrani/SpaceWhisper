import { Link } from 'react-router-dom';
import './HomePage.css';
import Logo from '../UI/Logo/Logo';

export default function HomePage({ bigText, smallText}) {
  return (
    <>
      <div className='upperPart'>
        <Logo size="small" variant="navbar" style={{ marginTop: 24,
        transform: 'scale(0.5)',
        marginLeft: "var(--logo-margin)",
        "--logo-margin": "clamp(-60px, -8vw, 0px)"

        }}
        />

        <div className='textContainer'>
          <h1 className="bigTextHome"> 
            {bigText}
          </h1>
          <p className="smallTextHome"> 
            {smallText} 
          </p>
        </div>

        <div className='menuIcon'>
          <div className='menuIconElmt'></div>
          <div className='menuIconElmt'></div>
          <div className='menuIconElmt'></div>
        </div>

      </div>

      <div className='seperator'></div>

      <div className='downPart'>

        <Link to="/explore-cosmos" className='section'>
          <div> Explore the cosmos </div>
        </Link>

        <Link to="/bigquestions" className='section'>
          <div> 
            Big Questions 
          </div>
        </Link>

        <Link to="/tech-in-astronomy"  className='section'>
          <div> 
            Technology <br/> in  Astronomy 
          </div>
        </Link>

        <Link to="/news-from-universe" className='section'>
          <div> News from <br/> the Universe </div> 
        </Link>

        <Link to="/learn&test"
        className='section'>
          <div> Learn & Test <br/> Yourself </div>
        </Link>
        
        <Link to="/ask-cosmos"
        className='section'>
          <div> Ask the Cosmos </div>
        </Link>
        

        <Link to="/contribute-astronomy"
        className='section'>
          <div> Contribute <br/>to Astronomy </div>
        </Link>
        
        <Link to="/community"
        className='section'>
          <div> Community </div>
        </Link>

      </div>
    </>
  );
}
