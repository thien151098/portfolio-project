import "./styles.scss";

function Letter() {
  return (
    <div className="container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <div className="container">
          <div className="container">
            <h2 style={{ fontSize: "50px", marginBottom: "20px" }}>
              Cover Letter
            </h2>
          </div>
          <div className="row">
            <div className="col">
              <div
                className="container"
                style={{
                  marginTop: "40px",
                  paddingBottom: "20px",
                  fontWeight: "600",
                  lineHeight: "30px",
                }}
              >
                <h5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                </h5>
              </div>
              <div className="container">
                <p>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas. Turpis
                  metus sit diam purus leo in varius ac quam nunc amet tristique
                  volutpat adipiscing. Morbi malesuada arcu egestas dolor
                  blandit ultricies in at diam. Maecenas eget nisi vel nisl{" "}
                  <a className="slow-scroll" href="#portfolio">
                    sollicitudin
                  </a>{" "}
                  porta aliquet vel leo. Sed feugiat soda les nulla. In
                  consequat nisl sem, in aliquam libero tempor nec. Maecenas sit
                  amet felis sed justo aliquam vulputate tempor ut orci.
                  Suspendisse interdum velit tortor, a semper ex posuere quis.
                  Morbi velit nulla, lobortis ac ipsum et, accumsan convallis
                  odio. Proin turpis leo, hendrerit a lacus sed, porta placerat
                  diam. Aliquam vitae magna et libero auctor lobortis non ac
                  risus. Vivamus lacus tellus, pharetra ut vulputate sed, auctor
                  sed ex. Nulla volutpat nisi et neque pulvinar luctus cras
                  semper ipsum moronos textures asonius.
                </p>
              </div>
            </div>
            <div className="col">
              <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/cover.jpg"></img>
              <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/signature_dark@2x.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
