import React, { useContext } from 'react';
import { ShopContext} from "../Context/ShopContext"
import { useParams } from 'react-router-dom';
import Path from '../Components/Path/Path';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Relatedproduct from '../Components/Relatedproduct/Relatedproduct';
import SingleData from '../Components/SingleData/SingleData';




const Product = () => {
  

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams() 
  const product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div>
  
       <SingleData/>
      <Path product={product}/>
      <ProductDisplay product = {product}/>
        <Relatedproduct/>
  
   

    </div>
  )
}

export default Product