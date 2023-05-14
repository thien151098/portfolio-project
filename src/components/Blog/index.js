import Button from "../common/Button";
import "./styles.scss";

function Blog() {
  return (
    <div className="container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <div className="container">
          <div className="widget-container">
            <h2 className="name-blog">Blog</h2>
          </div>
          <div className="widget-container">
            <p>
              A full stack allaround designer that tristique est placerat in
              massa <strong>consectetur quisque</strong> lobortis vitae faucibus
              diam
            </p>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="card">
                <img
                  src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2019/11/blog_01-768x356.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://demo.cocobasic.com/romea-wp/demo-1/hundreds-of-thousands-a-still-more-glorious-nights-around-art-table">
                      Hundreds of thousands a still more glorious nights around
                      art table
                    </a>
                  </h5>
                  <p className="card-text">
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms ...
                  </p>
                  <Button
                    action="https://demo.cocobasic.com/romea-wp/demo-1/hundreds-of-thousands-a-still-more-glorious-nights-around-art-table/"
                    text="READ MORE"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2019/11/blog_02-768x356.jpg"
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="https://demo.cocobasic.com/romea-wp/demo-1/preserve-and-cherish-that-pale-blue-dot-are-creatures-of-the-cosmos-light-years/">
                        Preserve and cherish that pale blue dot are creatures of
                        the cosmos light years
                      </a>
                    </h5>
                    <p className="card-text">
                      Bearable only through love hydrogen atoms bits of moving
                      fluff culture shores of the cosmic ocean paroxysm of
                      global death rich in heavy atoms ...
                    </p>
                    <Button
                      action="https://demo.cocobasic.com/romea-wp/demo-1/preserve-and-cherish-that-pale-blue-dot-are-creatures-of-the-cosmos-light-years/"
                      text="READ MORE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
