import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SampleImage from '../assets/images/banner.jpg';

const CarouselSlide = () => {
  return (
    <div>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} interval={5000}>
        <div>
          <img src={SampleImage} />
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="assets/4.jpeg" />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
