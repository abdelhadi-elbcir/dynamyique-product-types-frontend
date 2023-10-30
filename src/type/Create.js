import React, { useState } from 'react';
import './style.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [productType, setProductType] = useState({
        name: '',
        productAttributes: [],
    });

    const handleNameChange = (e) => {
        setProductType({ ...productType, name: e.target.value });
    };

    const handleAddAttribute = () => {
        const newAttribute = { attributeName: '' };
        setProductType({
            ...productType,
            productAttributes: [...productType.productAttributes, newAttribute],
        });
    };

    const handleAttributeChange = (index, attributeName) => {
        const updatedAttributes = [...productType.productAttributes];
        updatedAttributes[index] = attributeName;
        setProductType({ ...productType, productAttributes: updatedAttributes });
    };

    const handleRemoveAttribute = (index) => {
        const updatedAttributes = [...productType.productAttributes];
        updatedAttributes.splice(index, 1);
        setProductType({ ...productType, productAttributes: updatedAttributes });
    };

    const handleSubmit = () => {
        let type  = {
            id : 0 ,
            name : productType.name
        };
        let listAttributes = productType.productAttributes;

        const createType = async ()=>{
            try{
                let res = await axios.post("http://localhost:8081/product-types" , type);
                console.log(res.data);
                type.id = res.data.id ;

                listAttributes.forEach((attribute)=>{
                    console.log(attribute);
                    axios.post(`http://localhost:8081/product-types/${type.id}/add-attribute` , attribute)
                        .then(res=>console.log(res.data))
                        .catch(error => console.log(error))
                });
                navigate(`/product/create/${type.id}`)
            }catch(error){
                console.log(error);
            }
        }

        createType();
    };

    return (
        <div className="product-type-form">
            <h2>Create Product Type</h2>
            <label>
                Name:
                <input type="text" value={productType.name} onChange={handleNameChange} />
            </label>
            <button onClick={handleAddAttribute}>Add Attribute</button>
            <div>
                {productType.productAttributes.map((attribute, index) => (
                    <div key={index} className="attribute">
                        <input
                            type="text"
                            placeholder="Attribute Name"
                            value={attribute.attributeName}
                            onChange={(e) =>
                                handleAttributeChange(index, { attributeName: e.target.value })
                            }
                            style={{marging :"5px"}}
                        />
                        <button onClick={() => handleRemoveAttribute(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <button style={{marginTop:"20px"}} onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Create;
