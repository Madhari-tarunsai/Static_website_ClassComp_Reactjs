import React from 'react';
import './About.css'; 

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-text">
          <h1>Our <span>Story</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis harum ex rerum voluptate optio
            iure inventore maxime voluptatem? Minima rem dolorum tempora labore at porro ut recusandae temporibus cumque?
          </p>
          <a href="#" className="readmore-button">Read More</a>
        </div>
        <div className="about-image">
          <img
            src="https://eatnoto.com/cdn/shop/files/13082020_Noto-19156_5d9c30a3-8454-493f-b728-b1cfb67d602e_1500x.jpg?v=1663752323"
            alt="Our Story"
          />
        </div>
      </div>
    );
  }
}

export default About;
