import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RelatedProduct.css";
import http from "../../Service/AxiosInterceptor";
import Loading from '../Loading/Loading';

const RelatedProduct = (props) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const response = await http.get(`/products`);
      const data = response.data.data;
    
      const slicedData = data.slice(4);
      const shuffledData = slicedData.sort(() => 0.5 - Math.random());
   
      const limitedData = shuffledData.slice(0, 3);
      setUserData(limitedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (item) => {
    navigate("/singledata", {
      state: {
        item,
      },
    });
  };

  return (
    <>
      <div className="relatedProduct">
        <h1>Related Products</h1>
        <hr />
        {loading ? ( 
          <div className="loading"> <Loading/>  </div>
        ) : (
          <div className="relatedProduct-item">
            <ul>
              {userData.map((item) => ( 
                <li key={item._id} onClick={() => handleItemClick(item)}>
                  <div className="item">
                    <img
                      onClick={() => window.scrollTo(0, 0)}
                      src={item.product_image}
                      alt={item.product_name}
                    />
                    <p>{item.product_name}</p>
                    <div className="item-prices">
                      <div className="item-price-new">${item.new_price}</div>
                      <div className="item-price-old">${item.old_price}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default RelatedProduct;
