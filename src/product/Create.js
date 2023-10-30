import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css'; // Import the CSS file

const CreateProduct = () => {
    const [attributes, setAttributes] = useState([]);
    const [product, setProduct] = useState({
        price: 0,
        description: '',
        name: '',
        image :'',
        attributes: {},
        productType: {
            id: 0,
        },
    });
    const [image , setImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8081/product-types/${id}/attributes`)
            .then((response) => {
                console.log(response.data);
                setAttributes(response.data);
            })
            .catch((error) => console.log(error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleAttributeChange = (e, attributeName) => {
        const { value } = e.target;
        setProduct({
            ...product,
            attributes: {
                ...product.attributes,
                [attributeName]: value,
            },
        });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setImage(
           imageFile
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        product.productType.id = +id;
        product.image = image.name;
        const formData = new FormData();
        formData.append('file', image);

        axios.post("http://localhost:8081/product/add" , product)
            .then(responce =>console.log(responce.data))
            .catch(error=>console.log(error));

        axios.post("http://localhost:8081/images/upload" , formData)
            .then(responce =>console.log(responce.data))
            .catch(error=>console.log(error));
    };


    return (
        <div className="create-product" style={{marginTop:"30px"}}>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
                {attributes.map((attribute, index) => (
                    <div key={index}>
                        <label>
                            {attribute.attributeName}
                            <input
                                type="text"
                                name={attribute.attributeName}
                                onChange={(e) => handleAttributeChange(e, attribute.attributeName)}
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
