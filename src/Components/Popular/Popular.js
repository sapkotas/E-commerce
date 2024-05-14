import React, { useState, useEffect } from "react";
import {   useNavigate } from "react-router-dom";
import "./Popular.css";
import Item from "../Item/Item";
import http from "../../Service/AxiosInterceptor";
import Loading from "../Loading/Loading";

const Popular = () => {
  const [userData, setUserData] = useState([]);
 const navigate=useNavigate()


  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const response = await http.get(`/products`);
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  const handleSubmit=(item)=>{
    
  navigate("/singledata",{state:{
    item 
  }})
  }

  return (
    <div className="popular">
      <h1>POPULAR IN</h1>
      <hr />
      <div className="popular-item">
        {userData.length > 0 ? (
          userData.map((item) => (
       
             <span onClick={()=>handleSubmit(item)}>
               <Item 
                id={item._id}
                name={item.product_name}
                image={item.product_image}
                new_price={item.new_price}
                old_price={item.old_price}
                
              />
             </span>
 
          ))
        ) : (
          <p><Loading/></p>
        )}
      </div>
    </div>
  );
};

export default Popular;
