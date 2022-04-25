import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "@pages/Home";
import Products from "@pages/Products";
import Item from "@components/Item";
import Navbar from "@components/Navbar";
import Cart from "@pages/Cart";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Footer from "@pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
