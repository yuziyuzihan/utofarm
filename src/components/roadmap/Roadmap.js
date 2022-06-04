import React from 'react';
import './roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <div className="roadmap-top-container">
        <h5>Utoboar</h5>
        <h1>Roadmap</h1>
        <div className="roadmap-top-desc">
          <p>
          We want to discuss the relationship between technology and policy through this work. 
          Artificial intelligence and blockchain have promised people a better new world and more civic heroes. 
          However, participants in this crypto world are also trapped in the vortex of global accelerationism. 
          Nobody could escape it, no matter the good or the evil. 
          This condition generates our wondering： is crypto and NFT a blessing or curse?
          </p>
        </div>
      </div>

      <div className="roadmap-bottom-container">
        <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>Lumen Art Price</span>
            <p>
              This is the first global NFT art competion.
            </p>
          </div>
        </div>
        {/* <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>60% Sold</span>
            <p>
              Our FlyGuys Channel, featuring exclusive content on the worlds of
              blockchain and DeFi. We start work on our Metaverse presence,
              featuring live events and exhibitions for our holders.
            </p>
          </div>
        </div> */}

        {/* <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>80% Sold</span>
            <p>
              The FlyGuys lab opens and the countdown begins towards Stakers
              Transformations, a new NFT featuring a transformed version of your
              Staker, available to all holders.
            </p>
          </div>
        </div> */}
        <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>100% Sold</span>
            <p>
              We will going to launch the Utoboar collection publicly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
