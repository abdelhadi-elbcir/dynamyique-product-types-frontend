import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TypeCard from './TypeCard'; // Import the TypeCard component
import './style.css'; // Import your List component styles

const List = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/product-types')
            .then((response) => {
                console.log(response.data);
                setTypes(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="list-container">
            <h1>List of Types:</h1>
            <div className="card-container">
                {types.map((type) => (
                    <TypeCard key={type.id} type={type} />
                    ))}
            </div>
        </div>
    );
};

export default List;
