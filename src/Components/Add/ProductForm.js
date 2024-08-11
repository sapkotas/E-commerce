import React, { useState, useEffect } from "react";
import "./ProductForm.css";
import http from "../../Service/AxiosInterceptor";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [catagoryId, setCatagoryId] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await http.get("categories/getCategory");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    if (!catagoryId) {
      setResponseMessage("Error: Please select a category");
      setLoading(false); 
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("catagoryId", catagoryId);
    formData.append("oldPrice", oldPrice);
    formData.append("newPrice", newPrice);
    formData.append("productImage", productImage);
    
    try {
      const response = await http.post("products/createProduct", formData);
      setResponseMessage(response.data.message);
   
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        setResponseMessage(
          `Error: ${error.response.data.message || "Server error"}`
        );
      } else if (error.request) {
        console.error("Error request:", error.request);
        setResponseMessage("Error: No response from server");
      } else {
        console.error("Error message:", error.message);
        setResponseMessage(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);    
    }
  };

  return (
    <>
      <div className="product-form">
        <div className="product-form-container">
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Product Name:</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Product Description:</label>
              <textarea
                rows="5"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              />
            </div>
            <div>
              <label>Category:</label>
              <select
                value={catagoryId}
                onChange={(e) => setCatagoryId(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Old Price:</label>
              <input
                type="text"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label>New Price:</label>
              <input
                type="text"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Product Image:</label>
              <input
                type="file"
                onChange={(e) => setProductImage(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Product"}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default ProductForm;
