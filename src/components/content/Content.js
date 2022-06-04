import React from 'react';
import './content.css';
import Carousel from '../carousel/Carousel';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-left-container">
        <div className="content-left-desc">
          <div className="content-left-heading">
            <h1>Unique Utoboars</h1>
            <h1>For Lumen Art </h1>
          </div>
          <p className="content-first-desc">
          The inspiration for "UtoBoar" comes from one masterpiece: "A peculiar pig" by Xiaobo WANG.
          </p>
          <p className="content-second-desc">
            We recreated the protagonist with a combination of traditional illustrations that imitated the popular NFT PFP collections in present NFT marketplaces and the latest generative algorithms.
          </p>
        </div>
      </div>
      <div className="content-right-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Content;
