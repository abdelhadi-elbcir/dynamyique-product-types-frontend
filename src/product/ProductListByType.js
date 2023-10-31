import React, { useEffect, useState } from 'react';
import './ProductList.css'; // Import the CSS file for styling
import ProductCard from "./ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductListByType = () => {
    const [products, setProducts] = useState([]);
    const [filterType, setFilterType] = useState(''); // State to store the selected filter type
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/product/all")
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error));

        axios.get('http://localhost:8081/product-types')
            .then((response) => {
                console.log(response.data);
                setTypes(response.data);
            })
            .catch((error) => console.log(error));

    }, []);

    const handleFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredProducts = filterType
        ? products.filter(product => product.productType.name === filterType)
        : products;

    return (
        <div>
            <div className={"text-center"}>
                <h2> {filterType === ''? 'All products' :"Type is: "+filterType }</h2>
            </div>
            <div className="product-list container-fluid">
                <br />
                <div className="container">
                    <div className="row">
                        <div>
                            <label htmlFor="productTypeSelect">Filter by Type : </label>
                            <select
                                id="productTypeSelect"
                                value={filterType}
                                style={{margin:"10px"}}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Types</option>
                                {
                                    types.map((type)=>{
                                        return (<option value={type.name}>{type.name}</option>)
                                    })
                                }
                            </select>
                        </div>

                        {filteredProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListByType;
