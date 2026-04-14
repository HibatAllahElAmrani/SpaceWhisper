import "./ContributeAstro.css";
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu";

export default function ContributeAstro() {
  return (
    <>
      <div className="headerContribute">
        <BurgerMenu />
        <div className="contentContribute">
          <h1 className="sectionTitle"> Contribute to Astronomy </h1>
          <h3>
            The universe speaks in data, and your eyes, your time, your
            curiosity can help decode it.
          </h3>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="seperator"></div>

      <div className="body">
        <p>
          Contribute to astronomy — like... really? <br />
          YES! <br /> <br />
          The universe is open to more than just scientists. <br />
          People from all walks of life can take part in <br />
          solving the cosmic puzzle. <br /> How ? Through simple online tools,
          you can help <br /> identify stars, galaxies, and even new worlds.
          <br />
          In this section, you'll find real projects that need <br />
          your time, your attention and your wonder to push the boundaries of
          what we know. <br />
        </p>
      </div>
      <div className="contributeBtnCont">
        <button className="contributeBtn"> Contribute </button>
      </div>
    </>
  );
}
