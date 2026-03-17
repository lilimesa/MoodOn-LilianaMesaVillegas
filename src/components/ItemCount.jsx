import React from 'react';
import { useState, useEffect } from "react"

//import css
import '../assets/css/ItemDetail.css'

const ItemCount = ({onAdd, stock})=> {
    
    const [count, setCount]= useState(1)

    const sumar = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    const comprar =()=> {
        onAdd(count)
    }    
        
    return(
        
        <>
        {
            stock === 0
            ? <p>Lo sentimos, por el momento esta experiencia no está disponible para compras.</p>
            :
            <div>
                <label>Número de personas</label>
            <div className="quantity-selector">
                <button onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button className="booking-btn" onClick={comprar} disabled={stock === 0 || count === 0}>
            Añadir al carrito
            </button>
            </div>
        </div>
        }
        
        </>
        
    )
}

export default ItemCount