import React, { useState } from 'react';
import './Card.css';

const Card = ({ titulo, texto, imagem }) => {
    const [clicado, setClicado] = useState(false);

    const handleClick = () => {
        setClicado(!clicado);
    };

    return (
        <div 
            className={`card ${clicado ? 'clicado' : ''}`}
            onClick={handleClick}
        >
            <img src={imagem} alt={titulo} className="card-image" />
            <div className="card-content">
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    );
};

export default Card;
