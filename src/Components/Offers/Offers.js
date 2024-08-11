
import React from 'react';
import './Offers.css';
import arrival from '../Assests/arrival-bg-removebg.png'
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className="new-arrivals">
        <div className="new-arrivals-image">
        <img src={arrival} alt="New Arrivals" />
      </div>
      <div className="new-arrivals-content">
        <h2>#NewArrivals</h2>
        <p>
        🌟 Introducing our latest arrivals: Fresh threads to elevate your style game!
         <p> Dive into our new collection and discover the perfect pieces to express your unique vibe </p>
         <p>Shop now for the hottest trends and timeless classics! 🔥 #NewArrivals #FashionForward </p>
        </p>
        <Link to="/shop"> <button>Shop Now</button> </Link>
      </div>
    
    </div>
  );
}

export default Offers;
