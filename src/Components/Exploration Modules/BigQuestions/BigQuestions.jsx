import "./BigQuestions.css";
import questions from "./BigQuestions.json";
import { Link } from "react-router-dom";
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu";

export default function BigQuestions() {
  return (
    <>
      <div className="header">
        <BurgerMenu />
        <div className="content">
          <h1 className="sectionTitle"> Big Questions</h1>
          <h3>
            In the dark of space, we hear whispers ... faint calls for answers.
          </h3>
        </div>
      </div>
      <div className="overlay"></div>

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
            className="question-link"
          >
            <div
              className="question-card"
              style={{
                backgroundImage: `url(${q.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>{q.question}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
