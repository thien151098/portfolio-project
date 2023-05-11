import Button from "../common/Button";
import "./styles.scss";

function About() {
  return (
    <div className="about container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <h1>About</h1>
        <div className="container about-text">
          <p>
            A full stack allaround designer that tristique est placerat in massa{" "}
            <strong>consectetur quisque </strong>lobortis vitae faucibus diam
          </p>
        </div>
        <div className="row">
          <div className="col p-3">
            <h3>Design</h3>
            <h1>
              <i className="fa-light fa-circle-1"></i>1
            </h1>
            <h2>
              Dolor sit amet, consectetur adipiscing elit viverra tristique
            </h2>
            <p>
              Faucibus sed tristique fames sed aliquet ultr eget viverra arcu.
              Vitae faucibus diam polo consequat maecenas. Turpis metus sit diam
              purus leo in varius ac quam nunc amet lorem.
            </p>
            <Button text="LEARN MORE" action="#education" />
          </div>
          <div className="col p-3">
            <h3>Code</h3>
            <h1>
              <i className="fa-light fa-circle-1"></i>2
            </h1>
            <h2>
              {" "}
              Lorem consectetur adipiscing elit viverra tristique donec est
              setera
            </h2>
            <p>
              {" "}
              Tristique fames sed aliquet ultricies eget viverra arcu mous
              faucibus diam consequat maecenas it diam purus leo in varius ac
              quam nunc amet tristique volutpat adipiscing polis.
            </p>
            <Button text="LEARN MORE" action="#skills" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
