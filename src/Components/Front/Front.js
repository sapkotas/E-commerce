// src/components/PromoSlider.js
import React from "react";
import Slider from "react-slick";
import "./Front.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PromoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="promo-slide">
        <div className="promo-content">
          <h2>Sale 30% Off</h2>
          <h3>On Everything</h3>
          <p>
            Indulge in the sweetness of savings with our delectable 30% off
            sale! Treat yourself to irresistible discounts on your favorite
            goodies and savor the joy of getting more for less. Hurry, before
            this tempting offer melts away!
          </p>
          <Link to="/shop">
            {" "}
            <button>Shop Now</button>{" "}
          </Link>
        </div>
      </div>
      <div className="promo-slide">
        <div className="promo-content">
          <h2>New Collection</h2>
          <h3>Spring 2024</h3>
          <p>
            Discover our new collection for spring 2024. Unique designs and
            high-quality materials to refresh your wardrobe.
          </p>
          <Link to="/shop">
            
            <button>Shop Now</button>
          </Link>
        </div>
        
      </div>


      <div className="promo-slide">
        <div className="promo-content">
          <h2>Your's Choice</h2>
          <h3>special discount if you win our game</h3>
          <p>
            Indulge in our game of <b> dots and dart </b> to win our delectable 40% off
            sale! Treat yourself to irresistible discounts on your favorite
            goodies and savor the joy of getting more for less. Hurry, before
            this tempting offer melts away!
          </p>
          <Link to="/shop">
            
            <button>Shop Now</button>
          </Link>
        </div>
        
      </div>
    
    </Slider>
  );
};

export default PromoSlider;
