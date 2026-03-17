import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/EmptyCart.css'

const EmptyCart = () => {
  return (
    <div className="cart-empty-state">

        <div className="icon-wrapper">
            <div className="circle"></div>
            <div className="bag-icon">🛍️</div>
        </div>

        <h1>Tu carrito está vacío</h1>
        <p>Te invitamos a ver nuestras experiencias</p>
        <Link className="cta" to='/'>✨ Descubrir experiencias</Link>

    </div>
  )
}

export default EmptyCart