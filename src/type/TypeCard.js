import React from 'react';

const TypeCard = ({ type }) => {
    return (
        <div className="type-card">
            <h2>Name: {type.name} -- {type.id}</h2>
        </div>
    );
};

export default TypeCard;
