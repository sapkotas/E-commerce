import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import './SingleData.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';


const SingleData = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const handleSubmit = (item) => {
    Navigate("/singledata", {
      state: {
        item,
      },
    });
  };

  return (
    
      <div className="productdisplay">
     

     <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplaymain-img" src={item.product_image} alt='' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{item.product_name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          {/* <p> 122</p> */}
        </div>
        <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old"> ${item.old_price}</div>
          <div className="productdisplay-right-price-new"> ${item.new_price}</div>
        </div>
        <div className="productdisplay-right-detail">
          {item.product_description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        {/* <button onClick={() => { addToCart(product.id) }}>ADD TO CART </button> */}
        <p className='productdisplay-right-category'>
          <span>
            Category:
          </span>
          {item.category}
        </p>
        <p className='productdisplay-right-category'>
          <span>
            Tags:
          </span>
          Modern , Latest
        </p>
      </div>





    
      
    </div>
  );
};

export default SingleData;
