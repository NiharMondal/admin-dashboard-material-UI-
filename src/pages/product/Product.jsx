import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
const Product = () => {
  return (
    <div className="product">
      <div className="productTitle_container">
        <h1 className="product_title">Product</h1>
        <Link to="/new-product">
          <button className="productAdd_btn">Create</button>
        </Link>
      </div>
      <div className="product_top">
        <div className="productTop_left">
          <Chart data={productData} dataKey="Sales" title="Sales Performace" />
        </div>
        <div className="productTop_right">
          <div className="productInto_top">
            <img
              src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="productInfo_img"
            />
            <span className="product_name">Apple Airpods</span>
          </div>
          <div className="productInto_bottom">
            <div className="productInfo_item">
              <span className="productInfo_key">id:</span>
              <span className="productInfo_value">165</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfo_key">sales:</span>
              <span className="productInfo_value">7165</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfo_key">active:</span>
              <span className="productInfo_value">yes</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfo_key">in stock:</span>
              <span className="productInfo_value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bottom">
        <form className="product_form">
          <div className="product_form_left">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Apple Arirpods" />
            <label >In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product_form_right">
            <div className="product_upload">
              <img
                src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
                className="product_upload_img"
              />
              <label for="file">
                <Publish/>
              </label>
              <input type="file" id="file" style={{ display: "none" }}/>
            </div>
            <button className="product_update_btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;