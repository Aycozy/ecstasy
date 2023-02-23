import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chefi} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Our Food is the combination of different flavours, aroma and texture customized for your ultimate ecstasy.</p>
        </div>
        <p className="p__opensans">We also believe that food is about more than just sustenance or pleasure. It is a way to connect with others, to learn about different cultures, and to explore the world around us. </p>
      </div>

      <div className="app__chef-sign">
        <p>Ayo Tom-peterson</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
