import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SingleData.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import http from "../../Service/AxiosInterceptor";

const SingleData = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const addToCart = async (product_id, quantity) => {
    try {
      const response = await http.post("products/add-to-cart", { product_id, quantity });
      console.log("Add to cart response:", response.data);
      navigate("/cart"); 
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplaymain-img"
            src={item.product_image}
            alt=""
          />
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
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${item.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${item.new_price}
          </div>
        </div>
        <div className="productdisplay-right-detail">
          {item.product_description}
        </div>
        <div className="quantity-input">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button
          onClick={() => addToCart(item._id, quantity)} 
          className="add-to-cart-button"
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span>
          {item.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default SingleData;
