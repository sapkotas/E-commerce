import React, { useState, useEffect } from 'react';
import http from '../../Service/AxiosInterceptor';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories();
    }, []); // Empty dependency array to run only once when the component mounts
  
    const getCategories = async () => {
      try {
        const response = await http.get("/categories/getCategory/");
        setCategories(response.data.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}   {category._v}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;





