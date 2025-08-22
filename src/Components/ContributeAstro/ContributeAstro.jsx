import "./ContributeAstro.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContributeAstro() {
  const sections = [
          {
            name: "Explore the Cosmos",
            link: "/explore-cosmos",
          },
          { 
            name: "Big Questions", 
            link: "bigquestions" 
          },
          { 
            name: "Technology in Astronomy", 
            link: "/tech-in-astronomy" 
          },
          { 
            name: "News from the Universe", 
            link: "/news-from-universe" 
          },
          { 
            name: "Learn & Test Yourself", 
            link: "/learn&test" 
          },
          { 
            name: "Ask the Cosmos", 
            link: "/ask-cosmos" 
          },
          { 
            name: "Contribute to Astronomy", 
            link: "/contribute-astronomy" 
          },
          { 
            name: "Community", 
            link: "/community" 
          },
        ];
        
      const [isSelected, setIsSelected] = useState(false);
      const handleChange = function () {
        setIsSelected((prev) => {
          return !prev;
        });
      };
  return (
    <>
      <div className="headerContribute">

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
                
        <div className="contentContribute">
          <h1 className="sectionTitle"> Contribute to Astronomy </h1>
          <h3>
            The universe speaks in data, and your eyes, your time, your curiosity can help decode it.
          </h3>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="seperator"></div>

      <div className="body">
        <p>
         Contribute to astronomy — like... really? <br/> 
         YES! <br/> <br/> 
         The universe is open to more than just scientists. <br/> 
         People from all walks of life can take part in <br/> 
         solving the cosmic puzzle. <br/> How ? Through simple online tools, you can help <br/> identify stars, galaxies, and even new worlds.<br/> 
         In this section, you'll find real projects that need <br/> 
         your time, your attention and your wonder to push the boundaries of what we know. <br/> 
         
        </p>
      </div>
      <div className="contributeBtnCont">
        <button className="contributeBtn"> Contribute </button>
      </div>
    </>
  );
}
