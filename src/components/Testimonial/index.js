import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "./styles.scss";

import { Pagination, Scrollbar } from "swiper";

function Testimonial() {
  return (
    <div className="container backGroundColor-White">
      <div className="elementor-widget-wrap">
        <div className="container heading-title">
          <h2>Testimonial</h2>
        </div>
        <div className="container widget-container">
          <p>
            A full stack allaround designer that tristique est placerat in massa{" "}
            <strong>consectetur quisque</strong> lobortis vitae faucibus diam
          </p>
        </div>
        <div className="container">
          <div className="swiper-container">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              scrollbar={{
                draggable: true,
              }}
              modules={[Pagination, Scrollbar]}
              className="mySwiper"
              draggable="true"
            >
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ marginRight: "30px" }}
                >
                  <div className="swiper-slide-quote-image">
                    <img
                      width="70"
                      height="48"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                      className="attachment-thumbnail size-thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    ></img>
                  </div>
                  <div className="swiper-slide-testimonial-text">
                    Rob Davidson is daucibus sed tristique fames sed aliquet
                    ultricies eget viverra arcu vitae faucibus diam consequat
                    maecenas turpis metus sit diam purus leo in varius.
                  </div>
                  <div className="swiper-slide-testimonial-img-holder">
                    <img
                      width="160"
                      height="160"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_01.jpg"
                      className="testimonial-slide-img"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_01.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_01-150x150.jpg 150w"
                      sizes="(max-width: 160px) 100vw, 160px"
                    />
                  </div>
                  <p className="swiper-slide-name">Janny Stone</p>
                  <p className="swiper-slide-position">CEO</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ marginRight: "30px" }}
                >
                  <div className="swiper-slide-quote-image">
                    <img
                      width="70"
                      height="48"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                      className="attachment-thumbnail size-thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="swiper-slide-testimonial-text">
                    Daucibus sed tristique fames sed aliquet ultricies eget
                    viverra arcu vitae faucibus diam consequat maecenas turpis
                    metus sit diam purus leo in varius retriko sedum est istera.
                  </div>
                  <div className="swiper-slide-testimonial-img-holder">
                    <img
                      width="160"
                      height="160"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_03.jpg"
                      className="testimonial-slide-img"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_03.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_03-150x150.jpg 150w"
                      sizes="(max-width: 160px) 100vw, 160px"
                    />
                  </div>
                  <p className="swiper-slide-name">Ken Williams</p>
                  <p className="swiper-slide-position">DESIGNER</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide" style={{ marginRight: "30px" }}>
                  <div className="swiper-slide-quote-image">
                    <img
                      width="70"
                      height="48"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                      className="attachment-thumbnail size-thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="swiper-slide-testimonial-text">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Pellentesque habitant
                    morbi tristique senectus lorem ipsum dolor molovis teroti
                    arte less.
                  </div>
                  <div className="swiper-slide-testimonial-img-holder">
                    <img
                      width="160"
                      height="160"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_02.jpg"
                      className="testimonial-slide-img"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_02.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_02-150x150.jpg 150w"
                      sizes="(max-width: 160px) 100vw, 160px"
                    />
                  </div>
                  <p className="swiper-slide-name">Peter Smith</p>
                  <p className="swiper-slide-position">WRITER</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ marginRight: "30px" }}
                >
                  <div className="swiper-slide-quote-image">
                    <img
                      width="70"
                      height="48"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote.png"
                      className="attachment-thumbnail size-thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="swiper-slide-testimonial-text">
                    Etiam semper pulvinar tincidunt etiam pretium, nisl vitae
                    dictum lacinia, purus nunc vestibulum enim, sit amet congue
                    tortor mauris lobortis exauris a pellentesque augue.
                  </div>
                  <div className="swiper-slide-testimonial-img-holder">
                    <img
                      width="160"
                      height="160"
                      src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_04.jpg"
                      className="testimonial-slide-img"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_04.jpg 160w, https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/quote_04-150x150.jpg 150w"
                      sizes="(max-width: 160px) 100vw, 160px"
                    />
                  </div>
                  <p className="swiper-slide-name">Tom Doe</p>
                  <p className="swiper-slide-position">DEVELOPER</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
