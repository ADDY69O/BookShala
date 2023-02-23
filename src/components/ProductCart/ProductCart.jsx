import React from "react";
import "./ProductCart.css";
import { useCart } from "../../context/cardcontext";
import { getProductById } from "../../utils/findProductInCart";
import {useNavigate} from "react-router-dom"
const ProductCart = ({ product }) => {
  const { id, name, image, category, oldPrice, newPrice, discount, rating } =
    product;

    const {cart,cartDispatch}=useCart();


    const isProductInCart= getProductById(cart,id); 
  const navigate=useNavigate();
  const handleAddToCartClick =()=>{

    cartDispatch({
      type:"ADD_TO_CART",
      payload:product
    })
    navigate("/cart");
  }
  const handleGoToCartClick= ()=>{
    navigate("/cart");
  }
   

  return (
    <div>
      <div
        key={id}
        className="card card-vertical d-flex direction-column relative shadow"
      >
        <div className="card-image-container">
          <img className="card-image" src={image} alt="shoes" />
        </div>
        <div className="card-details">
          <div className="card-title">{name}</div>
          <div className="card-description">
            <p className="card-des">{category}</p>
            <p className="new-price card-price d-flex align-end">
              Rs.{newPrice}
              <span className="old price-strike-through">Rs.{oldPrice}</span>
              <span className="discount">({discount}% OFF)</span>
            </p>
            <p className="d-flex align-center">
              <span className="star material-icons-outlined">star</span>
              {rating}
            </p>
          </div>
          <div className="cta-btn">
            <button className="button btn-primary btn-icon cart-btn d-flex  align-center justify-center gap cursor btn-margin" onClick={ isProductInCart? handleGoToCartClick :handleAddToCartClick}>
             {isProductInCart ? "Go to Cart" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
