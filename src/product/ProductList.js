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
        <div>
            <div className={"text-center"}>
                <h2>Product List</h2>
            </div>
        <div className="product-list container-fluid">
            <br/>
            <div className="container">
                <div className="row">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductList;
