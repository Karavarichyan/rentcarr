
import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
// import ava05 from "../all-images/slider-img/narek_g.jpg";
import ava05 from "../../assets/all-images/slider-img/narek_g.jpg"

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently purchased the Nissan Mercielago Model-2022, and I must say it exceeded all my expectations. The combination of luxury, performance, and advanced features is simply outstanding. The heated seats make driving in the winter a pleasure, and the GPS navigation system is incredibly accurate. I highly recommend this car to anyone looking for a top-notch driving experience.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Anastas</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        The 1997 BMW E36 is a timeless classic that seamlessly blends sportiness and everyday comfort. With its elegant design, this model still turns heads on the road today.

Under the hood, it offers a range of engines, from fuel-efficient options to powerful performers. The six-cylinder versions stand out for their impressive performance and responsiveness.

What truly sets the E36 apart is its handling – it's incredibly responsive and offers a confident grip on the road, making it a perfect choice for those who enjoy spirited driving.

Inside, the E36 is known for its comfortable and ergonomic interior. Overall, it's a well-rounded car that continues to charm drivers with its blend of style, performance, and comfort.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Narek</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        The Ferrari Camry Model-2022 is a true masterpiece. It's not just a car; it's a work of art on wheels. The sleek design and powerful performance make every drive an exhilarating experience. The automatic transmission and fuel efficiency are a perfect match, and the GPS navigation system has never let me down. If you want to turn heads and enjoy a thrilling ride, this is the car for you.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Karine</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I can't say enough good things about the Mercedes Benz XC90 Model-2022. It's the ultimate luxury SUV with all the bells and whistles. The attention to detail in the interior is remarkable, and the technology is top-notch. The GPS navigation system is incredibly user-friendly, and the heated seats are a game-changer during the winter months. It's a dream car that I'm proud to own.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Stas</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently purchased the BMW X3 Model-2022, and I couldn't be happier with my choice. It's the perfect combination of luxury and performance. The heated seats are a lifesaver during cold winters, and the GPS navigation system has been incredibly reliable. This car has exceeded my expectations in every way, and I highly recommend it to anyone looking for a top-tier driving experience.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Narine</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;