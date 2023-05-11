import "./styles.scss";

function Experience() {
  return (
    <div className="container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <div className="container">
          <h2>Experience</h2>
        </div>
        <div className="container">
          <p>
            A full stack allaround designer that tristique est placerat in massa{" "}
            <strong>consectetur quisque</strong> lobortis vitae faucibus diam
          </p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th id="col-text" scope="col">
                COMPANY
              </th>
              <th id="col-text" scope="col">
                POSITION
              </th>
              <th id="col-text" scope="col">
                YEAR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Massa Fames </strong>/ New York
              </td>
              <td>Junior Developer</td>
              <td>
                <strong>2016</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Lobrissa </strong>/ Chicago
              </td>
              <td>Junior Developer</td>
              <td>
                <strong>2016</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Faucibuse </strong>/ Seattle
              </td>
              <td>Junior Developer</td>
              <td>
                <strong>2016</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Vivera Arcu </strong>/ Seattle
              </td>
              <td>PhP Developer</td>
              <td>
                <strong>2017</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Ultricies Esta </strong>/ Denver
              </td>
              <td>C++ Developer</td>
              <td>
                <strong>2018</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Diam Quam </strong>/ San Francisco
              </td>
              <td>Senior Developer</td>
              <td>
                <strong>2019</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Ercusa </strong>/ San Francisco
              </td>
              <td>Senior Developer</td>
              <td>
                <strong>2020</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Reesturato </strong>/ New York
              </td>
              <td>CEO</td>
              <td>
                <strong>2021</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
