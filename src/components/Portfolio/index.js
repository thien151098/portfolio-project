import Offcanvas from "react-bootstrap/Offcanvas";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <div className="container mt-3 text-white bg-black">
      <div className="elementor-widget-wrap">
        <div className="container">
        <h2 className="Portfolio">Portfolio</h2>
        </div>
        <div className="container">
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque</strong> lobortis vitae faucibus diam
        </p>
        </div>
        <div className="container">
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item1.jpg"></img>
                </Tooltip>
              }
            >
              <Button
                className="bg-black"
                variant="secondary"
                style={{ border: "none", padding: "35px 20px" }}
              >
                <div style={{ display: "flex" }}>
                  <h6 style={{ padding: "0" }}>01</h6>
                  <h3>Parallax</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <div className="container">
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item2.jpg"></img>
                </Tooltip>
              }
            >
              <Button
                className="bg-black"
                variant="secondary"
                style={{ border: "none", padding: "35px 20px" }}
              >
                <div style={{ display: "flex" }}>
                  <h6>02</h6>
                  <h3>Grid</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <div className="container">
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item3.jpg"></img>
                </Tooltip>
              }
            >
              <Button
                className="bg-black"
                variant="secondary"
                style={{ border: "none", padding: "35px 20px" }}
              >
                <div style={{ display: "flex" }}>
                  <h6>03</h6>
                  <h3>Video</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <div className="container">
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item4.jpg"></img>
                </Tooltip>
              }
            >
              <Button
                className="bg-black"
                variant="secondary"
                style={{ border: "none", padding: "35px 20px" }}
              >
                <div style={{ display: "flex" }}>
                  <h6>04</h6>
                  <h3>Slide</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
