import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="heading d-flex grow-shrink-basis align-center">
        <div className="heading-title-icon d-flex grow-shrink-basis align-center">
          <img
            className="icon mr-1"
            src="https://media.istockphoto.com/photos/reading-book-picture-id508586144?k=20&m=508586144&s=612x612&w=0&h=3cO1b0Ob1ZCbilhLTUOKlgvZYFRz8ZYc6hQsUOfrep8="
            alt="lightbul"
            style={{ height: "70px", width: "70px", borderRadius: "50%" }}
          />
          <h1 className="heading-title">
            <Link to="/" className="link cursor">
              Bookshala{" "}
            </Link>
          </h1>
        </div>
        <nav className="navigation">
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <Link to="/" className="link cursor">
                Home
              </Link>
            </li>
            <li className="list-item-inline">
              <Link to="/cart" className="link cursor">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
