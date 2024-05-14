import React, { useState, useEffect } from 'react';
import http from '../../Service/AxiosInterceptor';
import Footer from '../Footer/Footer';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCategories();
    }, []); // Empty dependency array to run only once when the component mounts

    const getCategories = async () => {
        try {
            const response = await http.get("/categories/getCategory/");
            setCategories(response.data.data);
            setLoading(false); // Set loading to false after successful data fetch
        } catch (error) {
            setError(error); // Set error state if there's an error fetching categories
            setLoading(false); // Set loading to false in case of error
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Render loading state while fetching data
    }

    if (error) {
        return <div>Error fetching categories: {error.message}</div>; // Render error message if there's an error
    }

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category.name}  {category._v}</li> 
                ))}
            </ul>
            <Footer/>
        </div>
        
    );
};

export default Category;
