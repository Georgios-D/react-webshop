import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";

function App() {
    return (
        <div className="App">
            <h1>Min Webshop</h1>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
