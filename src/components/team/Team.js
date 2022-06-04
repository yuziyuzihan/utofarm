import React from 'react';
import './team.css';
import teamImg from '../../imgs/uto_images/team.png';
// import peopleImg from '../../imgs/bird_images/people.png';

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-image-container">
        <img src={teamImg} alt="Tut Bird" className="team-image" />
      </div>
      <div>
        <div className="team-heading-container">
          <div className="team-heading-top">
            <div>
              <div>
                <h1 className="team-heading-1">Who are we?</h1>
              </div>
              <div>
                <h1 className="team-heading-2">Creative teams</h1>
              </div>
            </div>
            {/* <div>
              <img src={peopleImg} alt="" className="people-image" />
            </div> */}
          </div>
        </div>
        <p className="team-desc">
         Utoboar is the art tech team lead by Yifan CAO.  Anqi WANG and Ze GAO are responsible for Art and Design.
         Dr.U is helping the NFT, Web and Blockchain Technology Development.
        </p>
      </div>
    </div>
  );
};

export default Team;
