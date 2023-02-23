import React, { Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductCartHorizontal from "../../components/ProductCart/ProductCartHorizontal";
import { useCart } from "../../context/cardcontext";
import "../Cart/Cart.css"
const Cart = () => {
  const {cart} = useCart();
  return (
    <Fragment>
      <Navbar />
      <main className="main">    {
        cart && cart.length>0 ? <h2>Your Cart: ({cart.length}) items </h2>: <h2>Your cart is Empty</h2>
      }
      <div className="main-cart d-flex direction-column gap">
        {
          cart && cart.length>0 ?cart.map(product => <ProductCartHorizontal product={product} key={product.id}/>):""

        }

      </div>
      </main>
  
 
     
     
    </Fragment>
  );
};

export default Cart;
