// TODO: Get from firebase photo data in list type []
// TODO: Covert to single line for loop

import React from 'react';
import { Slide } from 'react-slideshow-image';
import Banner from '../assets/images/banner.jpg';
import '../style/slide.css';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [Banner, 'images/slide_3.jpg', 'images/slide_4.jpg'];

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
