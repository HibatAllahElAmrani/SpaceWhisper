import "./BurgerMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
    const sections = [
      {
        name: "Explore the Cosmos",
        link: "/explore-cosmos",
      },
      { 
        name: "Big Questions", 
        link: "/bigquestions" 
      },
      { name: "Technology in Astronomy", 
        link: "/tech-in-astronomy" 
      },
      { name: "News from the Universe", 
        link: "/news-from-universe" 
      },
      { name: "Learn & Test Yourself", 
        link: "/learn&test" 
      },
      { name: "Ask the Cosmos", 
        link: "/ask-cosmos" 
      },
      { name: "Contribute to Astronomy", 
        link: "/contribute-astronomy" 
      },
      { name: "Community", 
        link: "/community" 
      }
    ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={'menuIconSections'} onClick={handleToggle}>
      <div className="menuIconElmt"></div>
      <div className="menuIconElmt"></div>
      <div className="menuIconElmt"></div>
      <div className="sectionsMenu">
        {isOpen &&
          sections.map((section, index) => (
            <Link 
              key={index} 
              to={section.link} 
              className="sectionMenuItemStyling"
              onClick={() => setIsOpen(false)} 
            >
              <p className="sectionMenuItem">{section.name}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}