import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assests/cart_cross_icon.png";
import http from "../../Service/AxiosInterceptor";

const CartItems = () => {
  const { getTotalCartAmount, cartItems, removeFromCart } =
    useContext(ShopContext);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const response = await http.get("/products/cart/getCart");
      if (response.data && response.data.data && Array.isArray(response.data.data.items)) {
        setUserData(response.data.data.items);
      } else {
        setError("Invalid data format");
      }
    } catch (error) {
      console.log("Error fetching products:", error);
      setError("Failed to fetch cart items");
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-item">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {userData.map((product) => {
        const quantity = cartItems[product.id] || 0; // Ensure quantity is initialized
        return (
          <div key={product._id}>
            <div className="cartitems-format cartitems-format-item">
              <img
                src={product.image}
                alt=""
                className="cartitems-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className="cartitems-quantity">{quantity}</button>
              <p>${product.new_price * quantity}</p>
              <img
                src={remove_icon}
                className="carticon-remove-item"
                onClick={() => removeFromCart(product.id)}
                alt=""
              />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total Carts</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub-total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Delivery Charge</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>} {/* Render error message if error exists */}
    </div>
  );
};

export default CartItems;
