import React from 'react'
import './NewCollection.css'
import new_collection from '../Assests/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div>
    <div className="new-collections">
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections"> 
        {new_collection.map((item,i)=>{
            return <Item key ={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
        </div>
    </div>
    </div>
  )
}

export default NewCollection