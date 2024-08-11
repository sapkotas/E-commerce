import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import'./NewCollection.css';
import http from "../../Service/AxiosInterceptor";
import Loading from '../Loading/Loading';

const NewCollection = (props) => {
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
      // Shuffle the array
      const shuffledData = data.sort(() => 3 - Math.random());
      setUserData(shuffledData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
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
      <div className="newcollection">
        <h1>NEW COLLECTION</h1>
        <hr />
        {loading ? ( 
          <div className="loading"> <Loading/>  </div>
        ) : (
          <div className="newcollection-item">
            <ul>
              {userData.slice(4,12).map((item) => ( 
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

export default NewCollection;
