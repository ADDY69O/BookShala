import "./App.css";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
