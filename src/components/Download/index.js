import "./styles.scss";

function Download() {
  return (
    <div className="container bg-dark">
      <div className="elementor-widget-wrap">
        <div className="container text-center" style={{ marginBottom: "20px" }}>
          <a
            className="coco-button-underline slow-scroll"
            href="https://demo.cocobasic.com/documentation/MANUAL-RomeaWP.pdf"
            target="_blank"
            rel="nofollow"
          >
            Download CV
          </a>
        </div>
        <div className="text-white text-center container">
          {" "}
          PDF aliquet ultricies eget viverra arcu vitae faucibus diam co lorem
          ispum dolor sed est
        </div>
      </div>
    </div>
  );
}

export default Download;
