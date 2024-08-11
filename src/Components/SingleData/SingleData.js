import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SingleData.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import http from "../../Service/AxiosInterceptor";
import RelatedProduct from "../RelatedProducts/RelatedProduct";

const SingleData = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Here you would check if the user is logged in, for example by checking a token in local storage
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const addToCart = async (product_id, quantity) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      const response = await http.post("products/add-to-cart", { product_id, quantity });
      console.log("Add to cart response:", response.data.data);
      navigate("/cart"); 
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyNowClick = (item) => {
    if (!isLoggedIn) {
      alert("You are not logged in! login first")
      navigate("/login");
      return;
    }

    console.log("Buy Now clicked for:", item.product_name);
  };

  return (
    <> 
      <div className="singledata">
        <div className="singledata-left">
          <div className="singledata-img">
            <img
              className="singledatamain-img"
              src={item.product_image}
              alt=""
            />
          </div>
        </div>
        <div className="singledata-right">
          <h1>{item.product_name}</h1>
          <div className="singledata-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <div className="singledata-right-prices">
            <div className="singledata-right-price-old">
              ${item.old_price}
            </div>
            <div className="singledata-right-price-new">
              ${item.new_price}
            </div>
          </div>
          <div className="singledata-right-detail">
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
            className="buy-now-button"
            onClick={(e) => {
              e.stopPropagation(); 
              handleBuyNowClick(item);
            }}
          >
            Buy Now
          </button>

          <button
            onClick={() => addToCart(item._id, quantity)} 
            className="add-to-cart-button"
          >
            ADD TO CART
          </button>
          <p className="singledata-right-category"></p>
          <p className="singledata-right-category">
            <span>Tags:</span>
            Modern, Latest
          </p>
        </div>
      </div>
      <RelatedProduct/>
    </>
  );
};

export default SingleData;
