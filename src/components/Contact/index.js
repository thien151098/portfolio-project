import { useState } from "react";
import "./styles.scss";
import Button from "../common/Button";

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <div className="container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <div className="row">
          <div className="col">
            <h2>Contact</h2>
            <p>
              A full stack allaround designer that tristique est placerat in
              massa <strong>consectetur quisque</strong> lobortis vitae faucibus
              diam
            </p>
            <div>
              <strong>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
              </strong>
            </div>
            <p>
              <strong>Name:</strong> Rob Davidson
              <br />
              <strong>Address:</strong> New York, USA
              <br />
              <strong>Phone:</strong> +1 234-567-890
              <br />
              <strong>Hours:</strong> 6:00 am – 2:00 am
            </p>
          </div>

          <div className="col">
            <div className="wrap">
              {submitting && <div>Submtting Form...</div>}
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <label>
                    <p className="input-default-text has-content">Name</p>
                    <input name="name"></input>
                  </label>
                  <br />
                  <label>
                    <p className="input-default-text has-content">Email</p>
                    <input name="email"></input>
                  </label>
                  <br />
                  <label>
                    <p className="input-default-text has-content">Subject</p>
                    <input name="subject"></input>
                  </label>
                  <br />
                  <label>
                    <p className="input-default-text has-content">Message</p>
                    <input name="message"></input>
                  </label>
                  <br />
                </fieldset>
                <Button text="SEND MESSAGE" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
