import Slider from "react-slick";

import { banner } from "./Banner.module.css";

import SliderOne from "../../assets/images/slider-image-1.jpeg";
import SliderTwo from "../../assets/images/slider-image-2.jpeg";
import SliderThree from "../../assets/images/slider-image-3.jpeg";

function Banner() {
  return (
    <section className="py-8">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
        arrows={false}
      >
        <div>
          <div className={banner}>
            <img
              src={SliderThree}
              alt="Slider"
              className="w-full block h-full"
            />
            <img src={SliderTwo} alt="Slider" className="w-full block h-full" />
            <img src={SliderOne} alt="Slider" className="w-full block h-full" />
          </div>
        </div>
        <div>
          <div className={banner}>
            <img src={SliderOne} alt="Slider" className="w-full block h-full" />
            <img
              src={SliderThree}
              alt="Slider"
              className="w-full block h-full"
            />
            <img src={SliderTwo} alt="Slider" className="w-full block h-full" />
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Banner;
