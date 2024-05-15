import React, { useEffect, useState } from "react";
import http from "../../Service/AxiosInterceptor";
import "./CartItems.css"; // Make sure you have appropriate CSS for your CartItems component

const CartItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getCartItem() {
      try {
        const response = await http.get("/products/cart/getCart");
        setItems(response.data.data || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
    getCartItem();
  }, []);

  return (
    <>
      <h2>Cart Items</h2>
      {}
      <ul className="cart-items-list">
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.product_image} alt={item.product_name} className="cart-item-image" />
            <div className="cart-item-details">
              <p>{item.product_name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.new_price}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CartItems;
