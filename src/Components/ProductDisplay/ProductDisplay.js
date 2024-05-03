import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
            <img className="productdisplaymain-img" src = {product.image} alt=''/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p> 122</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old"> ${product.old_price}</div>
                <div className="productdisplay-right-price-new"> ${product.new_price}</div>
                </div>   
                <div className="productdisplay-right-detail">
                Introducing our {product.category}'s {product.name} it's the ultimate flex for your wardrobe! Designed with a sleek slim fit and full-zip detail, this jacket brings serious style points. Elevate your look effortlessly and stay ahead of the game with this must-have piece.
          </div>  
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>
                    Category:
                </span>
                {product.category}
            </p>
            <p className='productdisplay-right-category'>
                <span>
                    Tags:
                </span>
                Modern , Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay