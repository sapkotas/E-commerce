import React from 'react'
import "./Path.css"
import arrow_icon from '../Assests/breadcrum_arrow.png'
const Path = (props) => {
const {product} = props;

  return (
    <div className="path">
        HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>{product.category} <img src = {arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default Path