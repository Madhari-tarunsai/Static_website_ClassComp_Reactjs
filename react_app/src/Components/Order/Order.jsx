import React from 'react';
import './Order.css'; 
class Order extends React.Component {
  render() {
    return (
      <div className="order-container">
        <h2>Ice Cream Order Form</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" placeholder="Enter your address" />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Choose Ice Cream:</label>
            <select name="iceCream">
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="mint">Mint</option>
            </select>
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
    );
  }
}

export default Order;
