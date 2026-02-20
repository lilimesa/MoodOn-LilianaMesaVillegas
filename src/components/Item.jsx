import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import css
import '../assets/css/Item.css'

const Item = ({prod}) => {
  return (
    <div className="experience-card">
        <div className="card-image">
            <img src={prod.img} alt="Cena gourmet" />
            <div className="card-rating">
            ⭐ {prod.rating} <span>({prod.reviews})</span>
            </div>
        </div>

        <div className="card-body">
            <h3 className="card-title">{prod.title}</h3>

            <p className="card-description">
            {prod.description}
            </p>

            <div className="card-meta">
            <div className="meta-item">
                <span className="icon">📍</span>
                <span>{prod.location}</span>
            </div>

            <div className="meta-item">
                <span className="icon">⏱</span>
                <span>{prod.duration}</span>
            </div>
            </div>

            <div className="card-footer">
            <div className="price">
                <span className="amount">${prod.price}.00</span>
                <span className="per-person">por persona</span>
            </div>

            <button className="btn-primary">
                Ver más
            </button>
            </div>
        </div>
    </div>
  );
}

export default Item