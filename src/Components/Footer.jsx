import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Outlet />

      <div className="footer">
        <h2 id="title"> Sections </h2>

        <div className="sections">
          <Link to="/home" className="sectionRef">
            <p> Home page </p>
          </Link>
          
          <p className="sectionRef"> Explore the cosmos </p>

          <Link to="/bigquestions" className="sectionRef">
            <p> Big Questions </p>
          </Link>

          <Link to="/tech-in-astronomy" className="sectionRef"><p> Technology in Astronomy </p>
          </Link>

          <p className="sectionRef"> News from the universe </p>

          <p className="sectionRef"> Learn & Test Yourself </p>

          <p className="sectionRef"> Ask the Cosmos </p>

          <p className="sectionRef"> Conytribute to Astronomy </p>

          <p className="sectionRef"> Community </p>
        </div>

        <div className="rights">
          <p>© 2025 SpaceWhisper. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
