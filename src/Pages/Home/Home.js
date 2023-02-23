import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import ProductCart from "../../components/ProductCart/ProductCart";
import "../Home/Home.css";
import { useCart } from "../../context/cardcontext";

const Home = () => {

    const {cart}=useCart();
    console.log(cart);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //IIFE
    //immediately invoked function
    (async () => {
      try {
        const {
          data: { books },
        } = await axios.get("data.json");
        setProducts(books);
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  return (
    <div>
      <Fragment>
        <Navbar />

        <main className="main d-flex gap wrap">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </main>
      </Fragment>
    </div>
  );
};

export default Home;
