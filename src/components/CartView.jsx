import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

//import css
import '../assets/css/CartView.css'

const CartView = () => {
    const{cart, clear, removeItem}= useContext(CartContext)
  return (
    <div class="container">

        <section class="cart-header">
            <div>
            <h1>Tu Carrito</h1>
            </div>

            <button class="empty-cart">Vaciar carrito</button>
        </section>

        <div class="notice">
            <strong>Importante sobre tu compra</strong>
            <p>
            Al adquirir estas experiencias recibirás un bono/voucher válido. Para disfrutar de tu experiencia,
            deberás contactar directamente con el establecimiento para reservar la fecha y hora.
            </p>
        </div>

        <div class="cart-layout">

            <div class="cart-items">

            {
                cart.map((compra) => (

                    <div key={compra.id} class="cart-item">
                        <button className="delete-btn" onClick={()=> removeItem(compra.id)}>🗑</button>
                        <div className='item-image'>
                            <img src={compra.img} />
                            <span class="price-badge">${compra.price}.00</span>
                        </div>
                        

                        <div class="item-info">

                        <h3>{compra.title}</h3>
                        <p>{compra.description}</p>

                        <div class="qty">
                            <button>-</button>
                            <span>{compra.quantity}</span>
                            <button>+</button>
                        </div>
                        </div>

                        <div class="subtotal">
                        <span>Subtotal</span>
                        <strong>${compra.quantity * compra.price}.00</strong>
                        </div>
                    </div>

                ))
            }

            </div>


            <aside class="summary">

            <h3>Resumen del pedido</h3>

            <div class="line">
                <span>Subtotal (2 items)</span>
                <span>€610</span>
            </div>

            <hr />

            <div class="total">
                <span>Total</span>
                <strong>€610</strong>
            </div>

            <button class="checkout">
                Proceder al pago
            </button>

            </aside>

        </div>

        </div>
  )
}

export default CartView