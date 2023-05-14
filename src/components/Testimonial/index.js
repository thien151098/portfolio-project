import "./styles.scss";

function Testimonial() {
  return (
    <div className="container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <div className="container">
          <h2>Testimonial</h2>
        </div>
        <div className="container">
          <p>
            A full stack allaround designer that tristique est placerat in massa{" "}
            <strong>consectetur quisque</strong> lobortis vitae faucibus diam
          </p>
        </div>
        <div className="container">
          <div
            id="Testimonial-1"
            class="carousel-testimonial-wrapper relative swiper-container swiper-container-initialized swiper-container-horizontal"
            data-speed="2000"
            data-auto="false"
          >
            <div
              class="swiper-wrapper testimonial-slider slider"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div
                class="swiper-slide swiper-slide-active"
                style={{ marginRight: "30px" }}
              >
                <div class="swiper-slide-quote-image">
                  <img
                    width="70"
                    height="48"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                    class="attachment-thumbnail size-thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  ></img>
                </div>
                <div class="swiper-slide-testimonial-text">
                  Rob Davidson is daucibus sed tristique fames sed aliquet
                  ultricies eget viverra arcu vitae faucibus diam consequat
                  maecenas turpis metus sit diam purus leo in varius.
                </div>
                <div class="swiper-slide-testimonial-img-holder">
                  <img
                    width="160"
                    height="160"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_01.jpg"
                    class="testimonial-slide-img"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_01.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_01-150x150.jpg 150w"
                    sizes="(max-width: 160px) 100vw, 160px"
                  />
                </div>
                <p class="swiper-slide-name">Janny Stone</p>
                <p class="swiper-slide-position">CEO</p>
              </div>
              <div
                class="swiper-slide swiper-slide-next"
                style={{ marginRight: "30px" }}
              >
                <div class="swiper-slide-quote-image">
                  <img
                    width="70"
                    height="48"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                    class="attachment-thumbnail size-thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide-testimonial-text">
                  Daucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu vitae faucibus diam consequat maecenas turpis
                  metus sit diam purus leo in varius retriko sedum est istera.
                </div>
                <div class="swiper-slide-testimonial-img-holder">
                  <img
                    width="160"
                    height="160"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_03.jpg"
                    class="testimonial-slide-img"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_03.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_03-150x150.jpg 150w"
                    sizes="(max-width: 160px) 100vw, 160px"
                  />
                </div>
                <p class="swiper-slide-name">Ken Williams</p>
                <p class="swiper-slide-position">DESIGNER</p>
              </div>
              <div class="swiper-slide" style={{ marginRight: "30px" }}>
                <div class="swiper-slide-quote-image">
                  <img
                    width="70"
                    height="48"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                    class="attachment-thumbnail size-thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide-testimonial-text">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Pellentesque habitant morbi
                  tristique senectus lorem ipsum dolor molovis teroti arte less.
                </div>
                <div class="swiper-slide-testimonial-img-holder">
                  <img
                    width="160"
                    height="160"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_02.jpg"
                    class="testimonial-slide-img"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_02.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_02-150x150.jpg 150w"
                    sizes="(max-width: 160px) 100vw, 160px"
                  />
                </div>
                <p class="swiper-slide-name">Peter Smith</p>
                <p class="swiper-slide-position">WRITER</p>
              </div>
              <div class="swiper-slide" style={{ marginRight: "30px" }}>
                <div class="swiper-slide-quote-image">
                  <img
                    width="70"
                    height="48"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                    class="attachment-thumbnail size-thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide-testimonial-text">
                  Etiam semper pulvinar tincidunt etiam pretium, nisl vitae
                  dictum lacinia, purus nunc vestibulum enim, sit amet congue
                  tortor mauris lobortis exauris a pellentesque augue.
                </div>
                <div class="swiper-slide-testimonial-img-holder">
                  <img
                    width="160"
                    height="160"
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_04.jpg"
                    class="testimonial-slide-img"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_04.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_04-150x150.jpg 150w"
                    sizes="(max-width: 160px) 100vw, 160px"
                  />
                </div>
                <p class="swiper-slide-name">Tom Doe</p>
                <p class="swiper-slide-position">DEVELOPER</p>
              </div>
            </div>
            <div class="clear"></div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          <div
            class="swiper-scrollbar swiper-scrollbar-Testimonial-1"
            style={{ transitionDuration: "0ms" }}
          >
            <div
              class="swiper-scrollbar-drag"
              style={{
                width: "120px",
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
