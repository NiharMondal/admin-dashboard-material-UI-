import React from 'react';
import './NewProduct.css'
const NewProduct = () => {
  return (
    <div className="new_product">
      <h1 className="addProduct_title">New Product</h1>
      <form className="addProduct_form">
        <div className="addProduct_item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProduct_item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProduct_item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProduct_item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button
          className="product_create_btn">Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;