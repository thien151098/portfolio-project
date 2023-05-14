import Button from "../common/Button";
import "./styles.scss";

function Project() {
  return (
    <div className="container text-white bg-black bck">
      <div className="elementor-widget-wrap">
        <section id="Project">
          <div className="row">
            <div className="col">
              <div className="container">
                <h1 className="name">
                  Hello
                  <br />
                  I'm Rob
                  <br />
                  Davidson
                </h1>
              </div>
              <div className="container">
                <p>
                  A full stack allaround{" "}
                  <em>
                    <strong>designer </strong>
                  </em>
                  that placerat in massa consectetur
                </p>
                <a
                  className="project-button"
                  href="https://demo.cocobasic.com/documentation/MANUAL-RomeaWP.pdf"
                  target="_blank"
                  rel="nofollow"
                >
                  <span>DOWNLOAD CV</span>
                </a>
              </div>
            </div>
            <div className="col">
              <img
                className="img-project"
                src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/profile_image.jpg"
                alt="img"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
