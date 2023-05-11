import Button from "../common/Button";
import "./styles.scss";

function Project() {
  return (
    <div className="container text-white bg-black bck">
      <div class="elementor-widget-wrap">
      <section id="Project">
        <div className="row">
          <div className="col">
            <br />
            <br />
            <h1 className="name">
              Hello
              <br />
              I'm Rob
              <br />
              Davidson
            </h1>
            <p>
              A full stack allaround <strong>designer </strong>that placerat in
              massa consectetur
            </p>
            <Button
              color="white"
              text="DOWNLOAD CV"
              action="https://demo.cocobasic.com/documentation/MANUAL-RomeaWP.pdf"
            />
          </div>
          <div className="col">
            <img className="img-project"
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
