import "./BigQuestions.css";
import questions from "./BigQuestions.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BigQuestions() {
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
      <div className="header">
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

          <div className="content">
            <h1 className="sectionTitle"> Big Questions</h1>
            <h3>
              In the dark of space, we hear whispers ... faint calls for
              answers.
            </h3>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="seperator"></div>

      <div className="body">
        <p>
          From the birth of the universe to the riddle of dark matter, <br />
          this section explores the deepest puzzles of modern cosmology, <br />
          questions that science hasn’t answered, <br /> but never stops asking.
        </p>
      </div>


        <div className="questions-container">
        {questions.map((q) => (
          <Link 
            to={`/bigquestions/${q.id}`} 
            key={q.id} 
            className="question-link">
                <div 
                  className="question-card"
                  style={{ backgroundImage: `url(${q.img})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center' }}
                >
              
                  <h1>{q.question}</h1>
              
                </div>
          </Link>
        ))}
      </div>
      
    </>
  );
}
