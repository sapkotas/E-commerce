import React, { useState, useEffect } from "react";
import "./Popular.css";
import data_product from "../Assests/data"; // Assuming this is a static data array
import Item from "../Item/Item";
import http from "../../Service/AxiosInterceptor";

const Popular = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getItem();
  }, []); // Empty dependency array to run only once when the component mounts

  const getItem = async () => {
    try {
      const response = await http.get("/products/");
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  return (
    <div className="popular">
      <h1>POPULAR IN</h1>
      <hr />
      <div className="popular-item">
        {userData.length > 0 ? (
          userData.map((item) => (
            <Item
              key={item._id} // Ensure each Item has a unique key
              id={item._id}
              name={item.product_name}
              image={item.product_image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          // Fallback when data is not available yet
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
