import React from 'react'
import data from './Pdata'
import './Products.css' 

class Products extends React.Component {
  render() {
    return (
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              <span className="product-rating">★ {product.rating.rate}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Products
