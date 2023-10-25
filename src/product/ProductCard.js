import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
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
    );
};

export default ProductCard;