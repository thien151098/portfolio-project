import Navigation from "../common/Navigation";
import "./styles.scss";

function Navbar() {
  return (
    <header className="wrapper">
      <div className="inner">
        <div className="header-logo">
          <a
            href="https://demo.cocobasic.com/romea-wp/demo-1/"
            className="logo"
          >
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/themes/romea-wp/images/logo.png"
              alt="Romea"
            ></img>
          </a>
        </div>
        <div className="toggle-menu">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
