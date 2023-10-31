import React from 'react';
import {Link} from "react-router-dom";

const TypeCard = ({ type }) => {
    return (
        <div className="type-card">
            <h2>
                <Link
                    className={"type-hover"}
                    style={{textDecoration:"none" }}
                    to={"/product/create/"+type.id}>{type.name}</Link>
            </h2>
        </div>
    );
};

export default TypeCard;
