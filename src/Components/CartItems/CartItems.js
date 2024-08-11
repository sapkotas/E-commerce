import React, { useEffect, useState } from "react";
import http from "../../Service/AxiosInterceptor";
import "./CartItems.css";
import { Link } from "react-router-dom";


const CartItems = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function getCartItem() {
      try {
        const response = await http.get("/products/cart/getCart");
        const cartItems = response.data.data || [];
        setItems(cartItems);
        calculateTotal(cartItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
    getCartItem();
  }, []);

  const calculateTotal = (cartItems) => {
    let totalPrice = 0;
    let totalItems = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalItems += item.quantity;
    });
    setTotalPrice(totalPrice);
    setTotalItems(totalItems);
  };

  const removeFromCart = (itemId) => {
    const updatedItems = items.filter((item) => item._id !== itemId);
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleCheckout = () => {
    console.log("Checkout");
  };

  return (
    <div className="cart-items-container">
      <h2 className="cart-title">Cart Items</h2>
      {items.length > 0 ? (
        <>
          <ul className="cart-items-list">
            {items.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="product-name">{item.product_name}</p>
                  <p className="price">Price: $ {item.price}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: $ {totalPrice.toFixed(2)}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <img src="https://cdn-icons-png.flaticon.com/128/11329/11329060.png" alt="Empty Cart" />
          <Link to ="/login"> Login first!</Link>
        </div>
      )}
    </div>
  );
};

export default CartItems;
