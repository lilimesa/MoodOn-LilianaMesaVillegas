import React from 'react';
import ItemCount from './ItemCount';
//4. importamos 2 cosas: contexto que quiero usar, el hook para usar el contexto
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

//import css
import '../assets/css/ItemDetail.css'
import { Link } from 'react-router-dom';

const ItemDetail = ({detalle, comprar}) => {
  //const contexto = useContext(CartContext)
  //console.log(contexto)

  const [purchase, setPurchase] = useState(false)

  const {cart, addItem, itemQuantity} = useContext(CartContext)
  console.log(cart)

  const onAdd = (cantidad)=> {
    //console.log(`Agregas al carrito ${cantidad} unidades del producto ${detalle.title}`)
    addItem(detalle, cantidad)
    setPurchase(true)

  }

  const stockActualizado = detalle.stock - itemQuantity(detalle.id)

  return (
    <section className="product-detail">

      {/* Imagen principal */}
      <div className="product-hero">
        <img src={detalle.img} alt="Tirolesa en bosque"/>
        <div className="rating-badge">
          ⭐ {detalle.rating} <span>({detalle.reviews})</span>
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
            <div>
              <span className="single-amount">${detalle.price}.00</span>
              <span className="per-person">por persona</span>
            </div>
            <span className='stock-quantity'>Disponibles: {stockActualizado}</span>
          </div>

          <div className="total">
            <span>Total:</span>
            <strong>${detalle.price}.00</strong>
          </div>

          <div className="form-group">
            {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>:<ItemCount onAdd={onAdd} stock={stockActualizado}/>}
          </div>

        </aside>

      </div>

    </section>
  );
};

export default ItemDetail;