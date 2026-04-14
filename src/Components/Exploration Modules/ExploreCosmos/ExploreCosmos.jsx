import "./ExploreCosmos.css";
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu";

export default function ExploreCosmos() {
  return (
    <>
      <div className="headerExploreCos">
        <div className="contentPlus">
          <BurgerMenu />
        </div>
        <div className="contentExploreCos">
          <h1 className="sectionTitle"> Explore the Cosmos </h1>
          <h3>The shiny stars and the dark space await to be discovered.</h3>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="seperator"></div>

      <div className="body">
        <p>
          Step into the heart of the universe, where <br /> planets, stars, and
          galaxies await your <br /> discovery. <br />
          Explore stunning visuals and 3D models that <br /> reveal the hidden
          connections between <br /> celestial bodies. Let your curiosity guide
          you—enjoy the journey!
        </p>
      </div>
      <div className="exploreBtnCont">
        <a href="https://stellarium-web.org/">
            <button className="exploreBtn"> 
              Start the journey 
            </button>
        </a>
      </div>
    </>
  );
}
