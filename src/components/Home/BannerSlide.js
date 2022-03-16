import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../../assets/images/banner.jpg';
import Banner2 from '../../assets/images/banner2.png';
import Banner3 from '../../assets/images/banner3.png';

const bannerSlide = () => {
  return (
    <div>
      <Carousel
        autoPlay
        dynamicHeight={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner2} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Banner3} />
        </div>
        <div>
          <img src={Banner1} />
        </div>
      </Carousel>
    </div>
  );
};

export default bannerSlide;
