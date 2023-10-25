import React, {useEffect, useState} from 'react';
import './ProductList.css'; // Import the CSS file for styling
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/product/all")
            .then((responce)=>
            {
                setProducts(responce.data);
                console.log(responce.data);
            })
            .catch(error=>console.log(error))
    }, []);

    return (
        <div className="product-list">
            <h2>Product List</h2>
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
