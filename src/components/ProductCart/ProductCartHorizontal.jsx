import React from 'react'
import { useCart } from '../../context/cardcontext';

const ProductCartHorizontal = ({product}) => {
     const {id,  name, image, category, oldPrice, newPrice, discount, quantity } =
     product;
     
     const {cartDispatch}= useCart();

     const handleIncrement=()=>{
          cartDispatch({
               type:"INCREMENT",
               payload:id
          })
          
     }
     const handleDecrement=()=>{
          
          cartDispatch({
               type:"DECREMENT",
               payload:id
          })
     }

  return (
    <div>
        <div className="card-horizontal d-flex shadow">
     <div className="card-hori-image-container relative">
          <img  className="card-image"  src={image} alt="shoes" /> 
     </div>
     <div className="card-details d-flex direction-column">
          <div className="card-title">{name}</div>
          <div className="card-description">
               <p className="card-des">{category}</p>
               <p className="card-price">{oldPrice}<span className="price-strike-through padding-all-8">{newPrice}</span>
                  <span className="discount padding-all-8">({discount}% OFF)</span>
               </p>
          </div>
          <div className="quantity-container d-flex gap">
               <p className="q-title">Quantity: </p>
               <div className="count-container d-flex align-center gap">
                    <button className="count" onClick={()=> handleDecrement(id)} disabled={quantity===1}>-</button>
                    <span className="count-value">{quantity}</span>
                    <button className="count" onClick={()=> handleIncrement(id)}>+</button>
               </div>
          </div>
          <div className="cta-btn d-flex gap">
               <div className="cta-btn">
                   <button className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                    
                    Add To Cart</button>
               </div>
               <div className="cta-btn">
                   <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                   Move to ❤️</button>
                </div>
          </div>
     </div>
</div>
    </div>
  )
}

export default ProductCartHorizontal