import "./styles.scss";

function Skills() {
  return (
    <div className="container mt-3 text-white bg-black">
      <div className="elementor-widget-wrap">
        <div className="container">
          <h2 style={{ fontSize: "50px" }}>Skills</h2>
        </div>
        <div className="container">
          <p>
            A full stack allaround designer that tristique est placerat in massa{" "}
            <strong>consectetur quisque</strong> lobortis vitae faucibus diam
          </p>
        </div>
        <div className="skills-holder">
          <div className="skill-holder">
            <div className="skill">
              <div className="skill-text">PHOTOSHOP</div>
              <div
                className="skill-fill animation-done"
                data-fill="62"
                style={{ width: "62%" }}
              ></div>
              <div
                className="skill-fill-mask"
                data-fill="62"
                style={{ width: "64%" }}
              ></div>
            </div>
            <div className="skill-num">62%</div>
          </div>
          <div className="skill-holder">
            <div className="skill">
              <div className="skill-text">AFFINITY DESIGNER</div>
              <div
                className="skill-fill animation-done"
                data-fill="84"
                style={{ width: "84%" }}
              ></div>
              <div
                className="skill-fill-mask"
                data-fill="84"
                style={{ width: "86%" }}
              ></div>
            </div>
            <div className="skill-num">84%</div>
          </div>
          <div className="skill-holder">
            <div className="skill">
              <div className="skill-text">DIGITAL PAINTING</div>
              <div
                className="skill-fill animation-done"
                data-fill="78"
                style={{ width: "78%" }}
              ></div>
              <div
                className="skill-fill-mask"
                data-fill="78"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="skill-num">78%</div>
          </div>
          <div className="skill-holder">
            <div className="skill">
              <div className="skill-text">SUPER MARIO</div>
              <div
                className="skill-fill animation-done"
                data-fill="100"
                style={{ width: "100%" }}
              ></div>
              <div
                className="skill-fill-mask"
                data-fill="100"
                style={{ width: "102%" }}
              ></div>
            </div>
            <div className="skill-num">100%</div>
          </div>
          <div className="skill-holder">
            <div className="skill">
              <div className="skill-text">HTML / CSS</div>
              <div
                className="skill-fill animation-done"
                data-fill="57"
                style={{ width: "57%" }}
              ></div>
              <div
                className="skill-fill-mask"
                data-fill="57"
                style={{ width: "59%" }}
              ></div>
            </div>
            <div className="skill-num">57%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
