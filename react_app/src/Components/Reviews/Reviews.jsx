import React from 'react';
import './styles.css'; 

class Reviews extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
            <h3>Vanilla Delight</h3>
            <p>A classic, creamy vanilla flavor with a rich taste.</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="card">
            <h3>Chocolate Heaven</h3>
            <p>Indulge in the smooth, velvety chocolate ice cream.</p>
            <div className="rating">⭐⭐⭐⭐</div>
        </div>
        <div className="card">
            <h3>Strawberry Dream</h3>
            <p>Sweet and fruity strawberry ice cream made with fresh berries.</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="card">
            <h3>Minty Fresh</h3>
            <p>A refreshing mint ice cream with a hint of chocolate chips.</p>
            <div className="rating">⭐⭐⭐⭐</div>
        </div>
         <div className="card">
            <h3>Cookie Crunch</h3>
            <p>Delicious ice cream with chunks of cookies mixed in.</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="card">
            <h3>Caramel Swirl</h3>
            <p>Rich caramel ice cream with a swirl of buttery caramel sauce.</p>
            <div className="rating">⭐⭐⭐⭐</div>
        </div>
      </div>
    )
  }
}

export default Reviews;
