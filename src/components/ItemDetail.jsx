import React from 'react';

//import css
import '../assets/css/ItemDetail.css'

const ItemDetail = ({detalle}) => {
  return (
    <section className="product-detail">

      {/* Imagen principal */}
      <div className="product-hero">
        <img src={detalle.img} alt="Tirolesa en bosque"/>
        <div className="rating-badge">
          ⭐ {detalle.rating} <span>({detalle.rating})</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="product-content">

        {/* Columna izquierda */}
        <div className="product-info">

          <h1 className="product-title">{detalle.title}</h1>

          <div className="product-meta">
            <span>📍 {detalle.location}</span>
            <span>⏱ {detalle.duration}</span>
            <span>👥 Disponible para grupos</span>
          </div>

        {/* Caja informativa */}
        <div className="info-box">
            <div className="info-icon">!</div>

            <div className="info-content">
                <p className="info-title">
                Importante: Reserva Obligatoria
                </p>

                <p className="info-text">
                Tras la compra, recibirás un bono. <strong>Debes llamar al establecimiento</strong> para confirmar tu reserva en la fecha y hora deseada presentando el código del bono.
                </p>

                <a href="#" className="info-link">
                Ver términos y condiciones completos
                </a>
            </div>
        </div>


          <h3 className='title'>Descripción</h3>
          <p className="product-description">{detalle.longDescription}</p>

            <h3 className='title'>Lo más destacado</h3>
            <div className="highlights">
                {detalle?.highlights?.map((item, index) => (
                    <div key={index} className="highlight-item">
                        ✔ {item}
                    </div>
                ))}
            </div>

          <h3 className='title'>Qué incluye</h3>
          <ul className="includes-list">
            {detalle?.included?.map((item, index)=> (
                <li key={index} className="includes-item">✔ {item}</li>
            ))}
          </ul>

        </div>

        {/* Columna derecha */}
        <aside className="booking-card">

          <div className="price">
            <span className="single-amount">${detalle.price}.00</span>
            <span className="per-person">por persona</span>
          </div>

          <div className="form-group">
            <label>Número de personas</label>
            <div className="quantity-selector">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className="total">
            <span>Total:</span>
            <strong>${detalle.price}.00</strong>
          </div>

          <button className="booking-btn">
            Añadir al carrito
          </button>

          <p className="secure-text">
            Pago seguro · Cancelación gratuita hasta 24h antes
          </p>

        </aside>

      </div>

    </section>
  );
};

export default ItemDetail;