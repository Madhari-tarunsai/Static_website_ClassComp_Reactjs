import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-text">
          <h1>Global Cuisine <span>Meets Ice Cream</span></h1>
          <p>Sweet and Tasty</p>
          <a href="#" className="order-button">Order Now</a>
        </div>
        <div className="home-image">
          <img
            src="https://img.delicious.com.au/sr3_xmYf/w759-h506-cfill/del/2023/08/no-churn-tiramisu-ice-cream-195010-1.jpg" 
            alt="Ice Cream"
          />
        </div>
      </div>
    );
  }
}

export default Home;
