import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banned1 from "../../../assets/images/banner/banner-1.jpg";
import banned2 from "../../../assets/images/banner/banner-2.jpg";
import banned3 from "../../../assets/images/banner/banner-3.jpg";
import banned4 from "../../../assets/images/banner/banner-4.jpg";
import banned5 from "../../../assets/images/banner/banner-5.jpg";
import banned6 from "../../../assets/images/banner/banner-6.jpg";
import banned7 from "../../../assets/images/banner/banner-7.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banned1} />
      </div>
      <div>
        <img src={banned2} />
      </div>
      <div>
        <img src={banned3} />
      </div>
      <div>
        <img src={banned4} />
      </div>
      <div>
        <img src={banned5} />
      </div>
      <div>
        <img src={banned6} />
      </div>
      <div>
        <img src={banned7} />
      </div>
    </Carousel>
  );
};

export default Banner;
