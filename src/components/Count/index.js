import CountUp from "react-countup";
import "./styles.scss";

function Count() {
  return (
    <div className="container bg-dark text-white">
      <div className="elementor-widget-wrap">
        <div className="count-text container">
          {" "}
          Aliquet ultricies eget viverra arcu vitae faucibus diam consequat
          maecenas lorem ispum dolor sit amet nunc
        </div>
        <div
          className="container text-center count-text"
          style={{ marginTop: "50px" }}
        >
          <div className="row">
            <div className="col">
              <CountUp end={52} />K<p>Hours</p>
            </div>
            <div className="col">
              <CountUp start={1} end={1.7} decimals={1} />
              K+
              <p>Coffee</p>
            </div>
            <div className="col">
              <CountUp end={95} />+<p>Connections</p>
            </div>
            <div className="col">
              <CountUp end={7} />
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
