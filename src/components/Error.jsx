import React from 'react'
import { Link } from 'react-router-dom'

//import css
import '../assets/css/ItemDetail.css'

const Error = () => {
  return (
    <section className="product-detail">
      <h1>Ooops!</h1>
      <h3>404- PÁGINA NO ENCONTRADA</h3>
      <Link to='/'>Volver a Home</Link>
    </section>
  )
}

export default Error