import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ShopPage.css';
import http from "../../Service/AxiosInterceptor";
import Loading from '../Loading/Loading';

const ShopPage = (props) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const response = await http.get(`/products`);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (item) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate("/singledata", {
      state: {
        item,
      },
    });
  };

  const handleBuyNowClick = (item) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    console.log("Buy Now clicked for:", item.product_name);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const filteredAndShuffledData = shuffleArray(userData.slice(3));

  return (
    <>
      <div className="shopPage">
        <h1>AVAILABLE TODAY:</h1>
        <hr />
        {loading ? (
          <div className="loading"><Loading /></div>
        ) : (
          <div className="shopPage-item">
            <ul>
              {filteredAndShuffledData.map((item) => (
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
                    <button onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNowClick(item);
                    }}>Buy Now</button>
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

export default ShopPage;
