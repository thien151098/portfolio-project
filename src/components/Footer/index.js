import "./styles.scss";

function Footer() {
  return (
    <div className="container text-center">
      <div className="elementor-widget-wrap">
        <div className="container">
          <p>
            © 2022 Romea WordPress Theme by{" "}
            <a className="slow-scroll" href="https://cocobasic.com/">
              CocoBasic
            </a>
          </p>
        </div>
        <div className="container">
          <div className="column-gap-no">
            <div className="icon-footer">
              <i className="fa-brands fa-twitter fa-2xl"></i>
              <i className="fa-brands fa-facebook fa-2xl"></i>
              <i className="fa-brands fa-dribbble fa-2xl"></i>
              <i className="fa-solid fa-rss fa-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
