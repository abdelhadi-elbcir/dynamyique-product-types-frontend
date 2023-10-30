import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-4 mt-2">
            <div className={"product-card"}>
                <center>
                    {product.image !== null?<img style={{width:"100px" , height:"120px"}} src={"http://localhost:8081/images/"+product.image} alt={product.image}/>:null}

                </center>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <div className="attributes">
                    {Object.entries(product.attributes).map(([attributeName, attributeValue]) => (
                        <p key={attributeName}>
                            <strong>{attributeName}:</strong> {attributeValue}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;