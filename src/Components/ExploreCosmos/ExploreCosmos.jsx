import "./ExploreCosmos.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExploreCosmos() {
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
      <div className="headerExploreCos">
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
        <div className="contentExploreCos">
          <h1 className="sectionTitle"> Explore the Cosmos </h1>
          <h3>
            The shiny stars and the dark space await to be discovered.
          </h3>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="seperator"></div>

      <div className="body">
        <p>
         Step into the heart of the universe, where <br/> planets, stars, and galaxies await your <br/> discovery. <br/>
         Explore stunning visuals and 3D models that <br/> reveal the hidden connections between <br/> celestial bodies. 
         Let your curiosity guide you—enjoy the journey!
        </p>
      </div>
      <div className="exploreBtnCont">
        <button className="exploreBtn"> Start the journey </button>
      </div>
    </>
  );
}
