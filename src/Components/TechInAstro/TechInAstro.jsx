import technologies from "./TechInAstro.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import './TechInAstro.css';


export default function TechInAstro(){
  const sections = [
        {
          name: "Explore the Cosmos",
          link: "/explore-cosmos",
        },
        { 
          name: "Big Questions", 
          link: "bigquestions" 
        },
        { name: "Technology in Astronomy", link: "/tech-in-astronomy" },
        { name: "News from the Universe", link: "/news-from-universe" },
        { name: "Learn & Test Yourself", link: "/learn&test" },
        { name: "Ask the Cosmos", link: "/ask-cosmos" },
        { name: "Contribute to Astronomy", link: "/contribute-astronomy" },
        { name: "Community", link: "/community" },
      ];
      
    const [isSelected, setIsSelected] = useState(false);
    const handleChange = function () {
      setIsSelected((prev) => {
        return !prev;
      });
    };
  
  return (
    <>
      <div className="headerTechInAstro">

        <div className="contentPlus">
          <div className="menuIconSections" onClick={handleChange}>
            <div className="menuIconElmt"></div>
            <div className="menuIconElmt"></div>
            <div className="menuIconElmt"></div>
            <div className="sectionsMenu">
              {isSelected &&
                sections.map((section) => (
                  <Link to={section.link} className="sectionMenuItemStyling">
                    <p className="sectionMenuItem"> {section.name}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        
        <div className="contentTechInAstro">
          <h1 className="sectionTitle"> Technology in Astronomy </h1>
          <h3>
            Lifeless circuits and cold steel breathe life into astronomy.
          </h3>
        </div>
        <div className="overlay"></div>
        <div className="overlay2"></div>
      </div>

      <div className="seperator"></div>

      <div className="body">
        <p>
          From the first handmade lenses to orbiting <br/>
          observatories, our tools have become our <br/>
          eyes, reaching where no human has ever stood.<br/>
          This section explores the inventions that let <br/> 
          us see the invisible, decode the distant, and <br/>
          touch the edge of time. <br/>
          In the union of code, metal, and vision, we <br/>
          find the bridge between human curiosity and <br/>
          the cosmos itself.
        </p>
      </div>


      <div className="technos-container">
        
        {technologies.map((t) => (
          <Link to={t.articlePath} key={t.id} className="technology-link">
            <div
              className="technology-card"
              style={{ backgroundImage: `url(${t.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
            <div className="tech-title">
              {t.titleLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}